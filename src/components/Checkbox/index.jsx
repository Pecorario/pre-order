import React from 'react';

// Theme
import theme from '@styles/theme';

// Icons
import { ReactComponent as IconCheckBox } from '@assets/svg/checkbox_icon.svg';

// Style
import { Wrapper, NormalCheckbox, Label, CustomCheckBox } from './style';

const Checkbox = ({
  id,
  value,
  height,
  width,
  sizeIcon,
  background,
  label,
  labelColor,
  labelShadowColor,
  fontSize,
  borderColor,
  importOrders,
  ...props
}) => {
  return (
    <Wrapper background={background} importOrders={importOrders}>
      <NormalCheckbox id={id} name={id} value={value} {...props} />
      <CustomCheckBox
        sizeIcon={sizeIcon}
        width={width}
        height={height}
        htmlFor={id}
        borderColor={borderColor}
      >
        <IconCheckBox />
      </CustomCheckBox>

      <Label
        htmlFor={id}
        fontSize={fontSize}
        importOrders={importOrders}
        color={labelColor}
        textShadow={labelShadowColor}
      >
        {label}
      </Label>
    </Wrapper>
  );
};

Checkbox.defaultProps = {
  id: 'teste',
  value: 1,
  width: '18px',
  height: '18px',
  sizeIcon: '8px',
  background: theme.colors.soilOrange,
  label: 'Lembrar meu usuário',
  fontSize: '0.9rem',
  importOrders: false,
};

export default Checkbox;
