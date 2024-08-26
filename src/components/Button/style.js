import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  font-size: ${(props) => props.fontSize};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  background: ${(props) => props.backgroundColor};
  box-shadow: 0px 8px 32px ${(props) => props.boxShadow};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  transition: 0.25s all ease;

  &:hover {
    filter: brightness(${(props) => !props.disabled && props.brightness});
    border: ${(props) => !props.disabled && props.borderHover};
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  height: ${(props) => props.height};

  svg {
    width: ${(props) => props.iconWidth};
    height: ${(props) => props.iconHeight};
  }

  @media (max-width: 480px) {
    gap: 8px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const TextWrapper = styled.div``;
