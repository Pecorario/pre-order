/* eslint-disable react/no-array-index-key */
/* eslint-disable no-plusplus */
import React, { useEffect, useState } from 'react';
import apiPreOrder from '@services/apiPreOrder';
import { useFormik } from 'formik';
import { formatMessagesErrors } from '@utils/index';
import { useSnackbar } from 'notistack';
import dayjs from 'dayjs';
import _ from 'lodash';

// Components
import {
  Accordion,
  Input,
  Select,
  Button,
  RadioCard,
  Checkbox,
  Title
} from '@components/index';

import * as S from './style';
import Samples from './samples';

const PreOrder = () => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [matrizes, setMatrizes] = useState([{ id: 0, name: 'Solo' }]);
  const [samples, setSamples] = useState([]);

  const { enqueueSnackbar } = useSnackbar();

  const formik = useFormik({
    enableReinitialize: false,
    initialValues: {
      name: '',
      typeOfUser: 'PF',
      cpfCnpj: '',
      matriz: 0,
      mapa: false,
      sampleNumber: ''
    },
    onSubmit: async values => {
      try {
        setIsLoading(true);

        console.log('samples: ', samples);

        const { data } = await apiPreOrder.post(
          '/Order/Create',
          {
            name: values.name,
            ssn: values.cpfCnpj,
            matrixId: values.matriz,
            sampleAmount: values.sampleNumber,
            map: values.mapa,
            sampleOrders: samples
          },
          { responseType: 'blob' }
        );

        console.log('data: ', data);

        const blob = new Blob([data], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        window.open(url, '_blank');

        enqueueSnackbar('Pré pedido cadastrado com sucesso!', {
          variant: 'success'
        });

        formik.setFieldValue('name', '');
        formik.setFieldValue('cpfCnpj', '');
        formik.setFieldValue('sampleNumber', '');
        setSamples([]);
      } catch (error) {
        const messages = formatMessagesErrors(error);

        messages.forEach(message => {
          enqueueSnackbar(message, {
            variant: 'error'
          });
        });
      } finally {
        setIsLoading(false);
      }
    }
  });

  const handleOpen = () => setOpen(prevState => !prevState);

  useEffect(() => {
    if (Number(formik.values.sampleNumber) >= 0) {
      const novasAmostras = [];

      const objectSample = formik.values.mapa
        ? {
            owner: '',
            property: '',
            culture: 'Teste',
            city: '',
            depth: '',
            interestedCode: '',
            map: {
              materialType: '',
              address: '',
              descriptionSampledMaterial: 0,
              physicalNature: 0,
              batch: '',
              establishmentRegistrationNumberMap: '',
              productRegistrationNumberMap: '',
              supplier: '',
              supplierBatch: '',
              responsibleCollection: '',
              sampleCollectionDate: dayjs().format('YYYY-MM-DD'),
              representativenessCollectionSample: '',
              manufacturingDate: dayjs().format('YYYY-MM-DD'),
              warranty: ''
            }
          }
        : {
            owner: '',
            property: '',
            culture: 'Teste',
            city: '',
            depth: '',
            interestedCode: ''
          };

      for (let i = 0; i < Number(formik.values.sampleNumber); i++) {
        const newObj = _.cloneDeep(objectSample);
        novasAmostras.push(newObj);
      }

      setSamples(novasAmostras);
    }
  }, [formik.values.mapa, formik.values.sampleNumber]);

  return (
    <S.Container>
      {/* {isLoading === true && <LoadingContainer color="#eb612c" />} */}

      <S.Content>
        <Title letterSpacing="0" overflow="visible">
          Pré Pedido
        </Title>

        <S.Wrapper onSubmit={formik.handleSubmit}>
          <Accordion
            keyAnimator="accordion_requester"
            title="Solicitante"
            width="100%"
            open={open}
            handleOpen={handleOpen}
          >
            <S.InputWrapper>
              <RadioCard
                id="typeOfUser"
                name="typeOfUser"
                width="50%"
                label="Pessoa Física"
                value="PF"
                checked={formik.values.typeOfUser === 'PF'}
                onChange={() => formik.setFieldValue('typeOfUser', 'PF')}
              />

              <RadioCard
                id="typeOfUser"
                name="typeOfUser"
                width="50%"
                label="Pessoa Jurídica"
                value="PJ"
                checked={formik.values.typeOfUser === 'PJ'}
                onChange={() => formik.setFieldValue('typeOfUser', 'PJ')}
              />
            </S.InputWrapper>
            <S.InputWrapper>
              <Input
                id="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                // onChange={(e) => formik.setFieldValue('name', e.target.value)}
                label="Nome"
                width="50%"
                placeholder="Digite o nome..."
              />

              {formik.values.typeOfUser === 'PF' ? (
                <Input
                  id="cpfCnpj"
                  name="cpfCnpj"
                  value={formik.values.cpfCnpj}
                  onChange={formik.handleChange}
                  // onBlur={() => handleValidateCpf(formik.values.cpfCnpj)}
                  label="CPF"
                  width="50%"
                  placeholder="Digite o CPF..."
                  mask="cpf"
                />
              ) : (
                <Input
                  id="cpfCnpj"
                  name="cpfCnpj"
                  value={formik.values.cpfCnpj}
                  onChange={formik.handleChange}
                  // onBlur={() => handleValidateCnpj(formik.values.cpfCnpj)}
                  label="CNPJ"
                  width="50%"
                  placeholder="Digite o CNPJ..."
                  mask="cnpj"
                />
              )}
            </S.InputWrapper>
          </Accordion>

          <Accordion
            keyAnimator="acordion_order_data"
            title="Dados do Pedido"
            width="100%"
            open={open}
            handleOpen={handleOpen}
          >
            <S.InputWrapper>
              <Select
                id="matriz"
                name="matriz"
                value={formik.values.matriz}
                onChange={id => {
                  formik.setFieldValue('matriz', id);
                }}
                label="Matriz"
                width="30%"
                data={matrizes}
              />

              <Input
                id="sampleNumber"
                name="sampleNumber"
                value={formik.values.sampleNumber}
                onChange={e =>
                  formik.setFieldValue('sampleNumber', e.target.value)
                }
                label="Amostras"
                width="20%"
                placeholder="Digite o nº de amostras..."
              />

              <S.WrapperCheckbox>
                <Checkbox
                  label="MAPA"
                  value={formik.values.mapa}
                  onClick={() => {
                    formik.setFieldValue('mapa', !formik.values.mapa);
                  }}
                  height="2.5rem"
                  width="2.5rem"
                  sizeIcon="1.5rem"
                  fontSize="1.7rem"
                />
              </S.WrapperCheckbox>

              {/* <S.WrapperButton>
              <Button
                type="button"
                borderHover="0"
                border="none"
                width="150px"
                height="3.5rem"
                boxShadow="none"
                // style={{ minHeight: '64px' }}
                isLoading={isLoading}
                onClick={() => console.log('cliquei!')}
                // disabled={!(partners.length > 0)}
              >
                Selecionar Ensaio
              </Button>
            </S.WrapperButton> */}
            </S.InputWrapper>
          </Accordion>

          <Accordion
            keyAnimator="acordion_sample_data"
            title="Dados da Amostra"
            width="100%"
            open={open}
            handleOpen={handleOpen}
          >
            <S.ContainerSamples>
              {samples.map((sample, idx) => {
                return (
                  <Samples
                    key={`Sample__${idx}`}
                    samples={samples}
                    idx={idx}
                    setSamples={setSamples}
                    sample={sample}
                    mapa={formik.values.mapa}
                  />
                );
              })}
            </S.ContainerSamples>
          </Accordion>

          <Button
            type="submit"
            borderHover="0"
            border="none"
            width="100%"
            style={{ minHeight: '64px' }}
            isLoading={isLoading}
            // disabled={!(partners.length > 0)}
          >
            Salvar
          </Button>
        </S.Wrapper>
      </S.Content>
    </S.Container>
  );
};

export default PreOrder;
