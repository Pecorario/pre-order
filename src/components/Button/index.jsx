import React from 'react';
import Lottie from 'react-lottie-player';

// Theme
import theme from '@styles/theme';

// Assets
import { ReactComponent as PlusIcon } from '@assets/svg/icons/plus.svg';
import WhiteLoading from '@assets/lottie/white-loading.json';

// Styles
import { StyledButton, IconWrapper, TextWrapper } from './style';

const Button = ({
  children,
  height,
  width,
  fontSize,
  backgroundColor,
  color,
  fontWeight,
  buttonName,
  border,
  brightness,
  borderHover,
  icon,
  isLoading,
  borderRadius,
  disabled,
  boxShadow,
  iconWidth,
  iconHeight,
  styles,
  ...props
}) => {
  return (
    <StyledButton
      brightness={brightness}
      backgroundColor={backgroundColor}
      height={height}
      width={width}
      fontSize={fontSize}
      color={color}
      fontWeight={fontWeight}
      border={border}
      borderHover={borderHover}
      borderRadius={borderRadius}
      boxShadow={boxShadow}
      disabled={disabled}
      style={{ ...styles }}
      {...props}
    >
      <IconWrapper
        height={height}
        iconWidth={iconWidth}
        iconHeight={iconHeight}
      >
        {icon && <PlusIcon />}
        {isLoading ? (
          <Lottie
            loop
            animationData={WhiteLoading}
            play
            speed={2.5}
            style={{ width: '40px', height: '40px' }}
          />
        ) : (
          <TextWrapper>{children}</TextWrapper>
        )}
      </IconWrapper>
    </StyledButton>
  );
};

Button.defaultProps = {
  fontWeight: '700',
  color: theme.colors.white,
  boxShadow: theme.colors.brown,
  backgroundColor: theme.colors.soilOrange,
  height: '3.5rem',
  width: '22.5rem',
  fontSize: '1rem',
  border: 'none',
  brightness: '0.9',
  borderHover: `1px solid ${theme.colors.darkerGray}`,
  icon: false,
  borderRadius: '12px',
  disabled: false,
  iconWidth: '14px',
  iconHeight: '14px',
};

export default Button;
