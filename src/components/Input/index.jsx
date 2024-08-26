import React, { useState, useCallback, forwardRef } from 'react';

// Icons
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

// Theme
import theme from '@styles/theme';

// Assets
import { ReactComponent as SearchIcon } from '@assets/svg/icons/search.svg';

// Masks
import {
  getMaxLenght,
  ZipCodeMask,
  TelephoneMask,
  CPFMask,
  CPNJMask,
  DecimalMask,
} from './masks';

// Styles
import {
  Wrapper,
  StyledInput,
  Label,
  Error,
  IconButton,
  InputWrapper,
  EndIconWrapper,
} from './style';

const Input = forwardRef(
  (
    {
      height,
      width,
      label,
      placeholder,
      fontSize,
      fontSizeLabel,
      error,
      helperText,
      type,
      background,
      hasBorder,
      endIcon,
      endIconWidth,
      endIconHeight,
      onClick,
      onChange: onChangeInput = () => {},
      onBlur,
      mask,
      hasLabel,
      hasHover,
      disable,
      ...props
    },
    ref
  ) => {
    const [visible, setVisible] = useState(type !== 'password');

    const handleOnChange = useCallback(
      (e) => {
        let value = true;

        if (mask?.toLowerCase() === 'zipcode') {
          value = ZipCodeMask(e.target.value);
        } else if (mask?.toLowerCase() === 'telephone') {
          value = TelephoneMask(e.target.value);
        } else if (mask?.toLowerCase() === 'cpf') {
          value = CPFMask(e.target.value);
        } else if (mask?.toLowerCase() === 'cnpj') {
          value = CPNJMask(e.target.value);
        } else if (mask?.toLowerCase() === 'decimal') {
          value = DecimalMask(e.target.value);
        }

        // A comparação com !== false é necessária pois
        // não devemos tratar 0 como false neste caso
        if (mask) {
          // Caso tenha máscara não realizamos alterações no input, se
          // o valor retornado for false, ou seja, caso o mesmo descumpra
          // alguma das restrições de valores
          if (value !== false) {
            e.target.value = value;
            onChangeInput(e);
          }
        } else {
          onChangeInput(e);
        }
      },
      [mask]
    );

    return (
      <Wrapper width={width}>
        {hasLabel && (
          <Label fontSizeLabel={fontSizeLabel}>
            {label}{' '}
            {error && (
              <Error fontSizeLabel={fontSizeLabel}>*{helperText}</Error>
            )}
          </Label>
        )}
        <InputWrapper>
          {type === 'password' && (
            <StyledInput
              {...props}
              background={background}
              type={visible ? 'text' : type}
              height={height}
              fontSize={fontSize}
              placeholder={placeholder}
              hasBorder={hasBorder}
              onChange={onChangeInput}
              hasHover={hasHover}
              onBlur={onBlur}
              disabled={disable}
              ref={ref}
            />
          )}
          {type !== 'password' && (
            <StyledInput
              {...props}
              background={background}
              type={type}
              height={height}
              fontSize={fontSize}
              placeholder={placeholder}
              hasBorder={hasBorder}
              onChange={handleOnChange}
              hasHover={hasHover}
              onBlur={onBlur}
              disabled={disable}
              ref={ref}
              // maxLength={getMaxLenght[mask]}
            />
          )}
          {type === 'password' && (
            <IconButton
              type="button"
              onClick={() => {
                setVisible(!visible);
              }}
            >
              {visible ? (
                <VisibilityOffIcon sx={{ color: theme.colors.fadedText }} />
              ) : (
                <VisibilityIcon sx={{ color: theme.colors.fadedText }} />
              )}
            </IconButton>
          )}

          {endIcon && (
            <EndIconWrapper
              endIconWidth={endIconWidth}
              endIconHeight={endIconHeight}
              type="button"
              onClick={onClick}
            >
              {endIcon}
            </EndIconWrapper>
          )}
        </InputWrapper>
      </Wrapper>
    );
  }
);

Input.defaultProps = {
  height: '3.5rem',
  width: '22.5rem',
  label: 'Senha',
  placeholder: 'Input',
  fontSize: '1rem',
  fontSizeLabel: '1rem',
  error: false,
  helperText: '',
  type: 'text',
  background: theme.colors.white,
  hasBorder: true,
  endIcon: false,
  endIconWidth: '16px',
  endIconHeight: '16px',
  hasLabel: true,
  hasHover: true,
  onClick: () => {},
};

export default Input;
