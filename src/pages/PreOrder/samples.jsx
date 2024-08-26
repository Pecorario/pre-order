import React, { useState } from 'react';
import dayjs from 'dayjs';
import _ from 'lodash';

import { Accordion, Input, InputData } from '@components/index';

import * as S from './style';

const Samples = ({ samples, idx, setSamples, sample, mapa }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(prevState => !prevState);

  const handleChange = (value, name, map = false) => {
    setSamples(prevSamples => {
      const updatedSamples = _.cloneDeep(prevSamples);
      const itemToUpdate = updatedSamples[idx];

      if (!map) {
        itemToUpdate[name] = value;
      } else {
        itemToUpdate.map[name] =
          name === 'sampleCollectionDate' || name === 'manufacturingDate'
            ? dayjs(value).format()
            : value;
      }

      return updatedSamples;
    });
  };

  return (
    <Accordion
      keyAnimator="acordion_sample_data"
      title={`Amostra nº ${idx + 1}`}
      width="100%"
      open={open}
      handleOpen={handleOpen}
    >
      <S.InputWrapper>
        <Input
          id={`owner__${idx}`}
          name="owner"
          value={sample.owner}
          label="Proprietário"
          fontSize="1rem"
          width="50%"
          height="3rem"
          onChange={e => handleChange(e.target.value, 'owner')}
        />

        <Input
          id={`property__${idx}`}
          name="property"
          value={sample.property}
          label="Propriedade"
          fontSize="1rem"
          width="50%"
          height="3rem"
          onChange={e => handleChange(e.target.value, 'property')}
        />
      </S.InputWrapper>

      <S.InputWrapper>
        <Input
          id={`city__${idx}`}
          name="city"
          value={sample.city}
          label="Cidade"
          fontSize="1rem"
          width="40%"
          height="3rem"
          onChange={e => handleChange(e.target.value, 'city')}
        />

        <Input
          id={`depth__${idx}`}
          name="depth"
          value={sample.depth}
          label="Profundidade"
          fontSize="1rem"
          width="30%"
          height="3rem"
          onChange={e => handleChange(e.target.value, 'depth')}
        />

        <Input
          id={`interestedCode__${idx}`}
          name="interestedCode"
          value={sample.interestedCode}
          label="Código Interessado"
          fontSize="1rem"
          width="30%"
          height="3rem"
          onChange={e => handleChange(e.target.value, 'interestedCode')}
        />
      </S.InputWrapper>

      {mapa && sample.map && (
        <>
          <S.InputWrapper>
            <Input
              id={`materialType__${idx}`}
              name="materialType"
              value={sample.map.materialType}
              label="Tipo de Material"
              fontSize="1rem"
              width="25%"
              height="3rem"
              onChange={e => handleChange(e.target.value, 'materialType', true)}
            />

            <Input
              id={`adsress__${idx}`}
              name="adsress"
              value={sample.map.adsress}
              label="Endereço"
              fontSize="1rem"
              width="25%"
              height="3rem"
              onChange={e => handleChange(e.target.value, 'adsress', true)}
            />

            <Input
              id={`descriptionSampledMaterial__${idx}`}
              name="descriptionSampledMaterial"
              value={sample.map.descriptionSampledMaterial}
              label="Descrição"
              fontSize="1rem"
              width="25%"
              height="3rem"
              onChange={e =>
                handleChange(e.target.value, 'descriptionSampledMaterial', true)
              }
            />

            <Input
              id={`physicalNature__${idx}`}
              name="physicalNature"
              value={sample.map.physicalNature}
              label="Natureza Física"
              fontSize="1rem"
              width="25%"
              height="3rem"
              onChange={e =>
                handleChange(e.target.value, 'physicalNature', true)
              }
            />
          </S.InputWrapper>

          <S.InputWrapper>
            <Input
              id={`batch__${idx}`}
              name="batch"
              value={sample.map.batch}
              label="Lote"
              fontSize="1rem"
              width="30%"
              height="3rem"
              onChange={e => handleChange(e.target.value, 'batch', true)}
            />

            <Input
              id={`establishmentRegistrationNumberMap__${idx}`}
              name="establishmentRegistrationNumberMap"
              value={sample.map.establishmentRegistrationNumberMap}
              label="Nº Registro Estabelecimento no MAPA"
              fontSize="1rem"
              width="35%"
              height="3rem"
              onChange={e =>
                handleChange(
                  e.target.value,
                  'establishmentRegistrationNumberMap',
                  true
                )
              }
            />

            <Input
              id={`productRegistrationNumberMap__${idx}`}
              name="productRegistrationNumberMap"
              value={sample.map.productRegistrationNumberMap}
              label="Nº Registro Produto no MAPA"
              fontSize="1rem"
              width="35%"
              height="3rem"
              onChange={e =>
                handleChange(
                  e.target.value,
                  'productRegistrationNumberMap',
                  true
                )
              }
            />
          </S.InputWrapper>

          <S.InputWrapper>
            <Input
              id={`supplier__${idx}`}
              name="supplier"
              value={sample.map.supplier}
              label="Fornecedor"
              fontSize="1rem"
              width="40%"
              height="3rem"
              onChange={e => handleChange(e.target.value, 'supplier', true)}
            />

            <Input
              id={`supplierBatch__${idx}`}
              name="supplierBatch"
              value={sample.map.supplierBatch}
              label="Lote Fornecedor"
              fontSize="1rem"
              width="30%"
              height="3rem"
              onChange={e =>
                handleChange(e.target.value, 'supplierBatch', true)
              }
            />

            <Input
              id={`responsibleCollection__${idx}`}
              name="responsibleCollection"
              value={sample.map.responsibleCollection}
              label="Responsável Coleta"
              fontSize="1rem"
              width="30%"
              height="3rem"
              onChange={e =>
                handleChange(e.target.value, 'responsibleCollection', true)
              }
            />
          </S.InputWrapper>

          <S.InputWrapper>
            <InputData
              id={`sampleCollectionDate__${idx}`}
              name="sampleCollectionDate"
              value={sample.map.sampleCollectionDate}
              label="Data Coleta"
              fontSize="1rem"
              width="100%"
              height="3rem"
              onChange={e => handleChange(e, 'sampleCollectionDate', true)}
              datePickerProps={{
                maxDate: dayjs()
              }}
            />

            <Input
              id={`representativenessCollectionSample__${idx}`}
              name="representativenessCollectionSample"
              value={sample.map.representativenessCollectionSample}
              label="Representatividade da amostra"
              fontSize="1rem"
              width="100%"
              height="3rem"
              onChange={e =>
                handleChange(
                  e.target.value,
                  'representativenessCollectionSample',
                  true
                )
              }
            />

            <InputData
              id={`manufacturingDate__${idx}`}
              name="manufacturingDate"
              value={sample.map.manufacturingDate}
              label="Data Fabricação"
              fontSize="1rem"
              width="100%"
              height="3rem"
              onChange={e => handleChange(e, 'manufacturingDate', true)}
              datePickerProps={{
                maxDate: dayjs()
              }}
            />

            <Input
              id={`warranty__${idx}`}
              name="warranty"
              value={sample.map.warranty}
              label="Garantia"
              fontSize="1rem"
              width="100%"
              height="3rem"
              onChange={e => handleChange(e.target.value, 'warranty', true)}
            />
          </S.InputWrapper>
        </>
      )}
    </Accordion>
  );
};

export default Samples;
