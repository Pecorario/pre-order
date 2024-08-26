import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: ${(props) => props.width};
`;

export const Label = styled.span`
  color: ${({ theme }) => theme.colors.fadedText};
  font-size: ${(props) => props.fontSizeLabel};
  margin-bottom: 10px;
  font-weight: 400;
  /* width: 100%; */
`;

export const StyledInput = styled.input`
  height: ${(props) => props.height};
  width: 100%;
  border-radius: 8px;
  border: ${(props) => (props.hasBorder ? '1px solid #d9d9d9' : 'none')};
  padding: 10px;
  font-size: ${(props) => props.fontSize};
  background: ${(props) => props.background};

  ::placeholder {
    color: ${({ theme }) => theme.colors.translucentText};
  }

  :focus {
    outline: none;
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.lightOrange};
  }

  ${(props) =>
    props.hasHover &&
    css`
      :hover {
        filter: brightness(0.95);
      }
    `}
  ::-webkit-calendar-picker-indicator {
    display: none;
  }

  @media (max-width: 1500px) {
    font-size: 12px;
  }
`;

export const Error = styled.span`
  color: ${({ theme }) => theme.colors.soilOrange};
  font-size: ${(props) => props.fontSizeLabel};
  margin-bottom: 10px;
  font-weight: 500;
`;

export const IconButton = styled.button`
  position: absolute;
  right: 0;
  margin-right: 10px;
  padding: 5px;
  border: none;
  background: transparent;
`;

export const InputWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`;

export const EndIconWrapper = styled.div`
  position: absolute;
  right: 0;
  margin-right: 10px;
  padding: 5px;
  border: none;
  background: transparent;
  display: flex;
  cursor: pointer;

  svg {
    width: ${(props) => props.endIconWidth};
    height: ${(props) => props.endIconHeight};
  }

  svg path {
    fill: ${({ theme }) => theme.colors.mainText};
  }
`;
