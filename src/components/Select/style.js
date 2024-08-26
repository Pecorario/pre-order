import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: ${(props) => props.width};
  position: relative;
`;

export const Label = styled.span`
  color: ${({ theme }) => theme.colors.fadedText};
  font-size: ${(props) => props.fontSizeLabel};
  margin-bottom: 10px;
  font-weight: 400;
  /* width: 100%; */
`;

export const SelectWrapper = styled.div`
  display: flex;
  /* position: relative;
  align-items: center; */

  align-items: center;

  height: ${(props) => props.height};
  width: 100%;
  border-radius: ${(props) => (props.isCollectionsResume ? '5px' : '8px')};
  border: ${(props) =>
    props.hasBorder ? `1px solid ${props.borderColor}` : 'none'};
  padding: ${(props) => (props.isCollectionsResume ? '2px 5px' : '10px')};
  padding-right: 0;
  font-size: ${(props) => props.fontSize};
  background: ${(props) => props.background};

  ${({ modalIsOpen, theme }) =>
    modalIsOpen &&
    css`
      outline: none;
      background: ${theme.colors.white};
      border: 1px solid ${theme.colors.lightOrange};
    `}

  ${({ disabled }) =>
    !disabled &&
    css`
      cursor: pointer;

      &:hover {
        filter: brightness(0.95);
      }
    `}

  ::-webkit-calendar-picker-indicator {
    display: none;
  }
`;

export const IconWrapper = styled.div`
  height: 20px;
  margin-right: 10px;
`;

export const Input = styled.input`
  border: 0;
  flex: 1;
  line-height: 1;
  /* max-width: 80%; */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: none;

  :focus {
    outline: none;
  }

  :disabled {
    background: transparent;
  }
`;

export const ItemSelected = styled.div`
  flex: 1;
  line-height: 1;
  /* max-width: 80%; */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: none;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.6;
    `}
`;
export const Error = styled.span`
  color: ${({ theme }) => theme.colors.soilOrange};
  font-size: ${(props) => props.fontSizeLabel};
  margin-bottom: 10px;
  font-weight: 500;
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

export const SelectOptionsBox = styled.div`
  width: 100%;
  position: absolute;
  /* top: ${(props) => (props.spaceTop ? props.spaceTop : '1rem')}; */
  left: 0;
  z-index: 9999998;
  border-radius: 8px;
  border: 1px solid #d9d9d9;
  max-height: 200px;
  overflow-y: auto;

  .first-child {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  .last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  .unique-child {
    border-radius: 8px;
  }
`;

export const OptionCard = styled.div`
  background-color: ${(props) => (props.isActive ? '#1e90ff' : 'white')};
  color: ${(props) => props.isActive && 'white'};
  cursor: pointer;
  text-align: left;
  padding-left: 0.5rem;
  font-size: ${(props) => props.fontSize};

  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: none;

  :hover {
    background-color: #80baf3;
  }
`;
