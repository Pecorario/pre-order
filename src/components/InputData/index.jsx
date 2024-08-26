import React, { useState, useRef } from 'react';
import DateAdapter from '@mui/lab/AdapterDayjs';
import { LocalizationProvider, DatePicker } from '@mui/lab';
import dayjs from 'dayjs';
import ptBR from 'dayjs/locale/pt-br';
import utc from 'dayjs/plugin/utc';

// Components
import Input from '../Input';

// Style
import { Wrapper } from './style';

dayjs.extend(utc);

const InputData = ({
  label,
  format,
  disabled,
  value,
  onChange,
  width,
  datePickerProps,
  hasLabel,
  ...otherProps
}) => {
  const refInputData = useRef();

  return (
    <LocalizationProvider dateAdapter={DateAdapter} locale={ptBR}>
      <DatePicker
        PopperProps={{
          anchorEl: () => refInputData.current
        }}
        label={hasLabel && label}
        onChange={(e, date) => {
          if (date) {
            const [day, mounth, year] = date.split('/');
            const newDate = `${mounth}-${day}-${year}`;

            onChange(dayjs(newDate).format('YYYY-MM-DD'));
          } else {
            onChange(dayjs(e).format('YYYY-MM-DD'));
          }
        }}
        value={value}
        disabled={disabled}
        renderInput={({
          label: labelInput,
          InputProps,
          inputProps,
          ...rest
        }) => {
          return (
            <Wrapper ref={refInputData} width={width}>
              <Input
                type="date"
                label={labelInput}
                endIcon={InputProps?.endAdornment}
                endIconWidth="20px"
                endIconHeight="20px"
                width={width}
                {...inputProps}
                {...otherProps}
                {...rest}
                error={false}
              />
            </Wrapper>
          );
        }}
        {...datePickerProps}
      />
    </LocalizationProvider>
  );
};

InputData.defaultProps = {
  disabled: false,
  value: dayjs(new Date()).locale('pt-br').format('DD/MM/YYYY'),
  label: 'Label aqui',
  format: 'DD/MM/YYYY',
  onChange: () => {},
  width: '100%',
  datePickerProps: {},
  hasLabel: true
};

export default InputData;
