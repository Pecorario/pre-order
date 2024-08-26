import styled from 'styled-components';

export const StyledH1 = styled.h1`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  letter-spacing: ${(props) => props.letterSpacing};
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
  overflow: ${(props) => props.overflow};
  white-space: ${(props) => props.whiteSpace};
  text-overflow: ${(props) => props.textOverflow};

  ${(props) => props.isAlign && 'text-align: center'}
`;
