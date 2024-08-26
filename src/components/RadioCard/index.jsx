import React from 'react';

// Styles
import theme from '@styles/theme';
import { Wrapper, HiddenRadio, Label } from './style';

const RadioCard = ({
  background,
  width,
  height,
  borderColorInactive,
  borderColorActive,
  borderRadius,
  textColorActive,
  textColorInactive,
  textSize,
  label,
  id,
  value,
  name,
  onChange,
  checked,
}) => {
  return (
    <Wrapper
      textColorActive={textColorActive}
      borderColorActive={borderColorActive}
      height={height}
      width={width}
    >
      <HiddenRadio
        onChange={onChange}
        checked={checked}
        id={id}
        name={name}
        value={value}
      />
      <Label
        background={background}
        textColorInactive={textColorInactive}
        borderColorInactive={borderColorInactive}
        borderRadius={borderRadius}
        textSize={textSize}
        htmlFor={id}
      >
        {label}
      </Label>
    </Wrapper>
  );
};

RadioCard.defaultProps = {
  background: theme.colors.mediumGray,
  width: '200px',
  height: '50px',
  borderColorInactive: theme.colors.border,
  borderColorActive: theme.colors.soilOrange,
  borderRadius: '8px',
  label: 'Pessoa Jurídica',
  textColorActive: theme.colors.soilOrange,
  textColorInactive: theme.colors.inactiveText,
  id: 'id',
  value: 'value',
  name: 'name',
  textSize: '1.2rem',
  checked: false,
  onChange: () => {},
};

export default RadioCard;
