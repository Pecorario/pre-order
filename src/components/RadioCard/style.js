import styled from 'styled-components';

export const Wrapper = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  position: relative;

  & input[type='radio']:checked + label {
    border: 2px solid ${(props) => props.borderColorActive};
    color: ${(props) => props.textColorActive};
  }
`;

export const HiddenRadio = styled.input.attrs({
  type: 'radio',
})`
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const Label = styled.label`
  padding: 0 20px;
  transition: all 0.2s ease-in-out;
  background: ${(props) => props.background};
  border: 2px solid ${(props) => props.borderColorInactive};
  border-radius: ${(props) => props.borderRadius};
  color: ${(props) => props.textColorInactive};
  font-weight: 600;
  font-size: ${(props) => props.textSize};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
