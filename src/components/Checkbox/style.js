import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  ${(props) => props.importOrders && `align-items: center;`}

  /* QUANDO CHECKBOX FOR MARCADO */
  input:checked + label {
    background: ${(props) => props.background};
  }

  :hover {
    filter: brightness(0.8);
  }
`;

export const NormalCheckbox = styled.input.attrs({
  type: 'checkbox',
})`
  position: absolute;
  opacity: 0;
  z-index: -1;
`;

export const CustomCheckBox = styled.label`
  cursor: pointer;
  margin-right: 5px;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border: 2px solid ${({ borderColor }) => borderColor || '#dbdbdb'};
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    width: ${(props) => props.sizeIcon};
    height: ${(props) => props.sizeIcon};
  }
`;

export const Label = styled.label`
  cursor: pointer;
  color: ${({ color }) => color || '#aeaeae'};
  font-size: ${(props) => props.fontSize};
  ${({ textShadow }) =>
    textShadow &&
    `text-shadow: -1px 0 ${textShadow}, 0 1px ${textShadow}, 1px 0 ${textShadow}, 0 -1px ${textShadow};`}

  ${(props) => props.importOrders && `padding-top: 2px;`}
`;
