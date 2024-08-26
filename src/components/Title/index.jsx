import React from 'react';

// Theme
import theme from '@styles/theme';

// Styles
import { StyledH1 } from './style';

const Title = ({
  children,
  color,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  whiteSpace,
  width,
  isAlign,
  overflow,
  textOverflow,
  ...props
}) => {
  return (
    <StyledH1
      width={width}
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      letterSpacing={letterSpacing}
      lineHeight={lineHeight}
      whiteSpace={whiteSpace}
      overflow={overflow}
      textOverflow={textOverflow}
      isAlign={isAlign}
      {...props}
    >
      {children}
    </StyledH1>
  );
};

Title.defaultProps = {
  children: '-',
  color: theme.colors.mainText,
  fontSize: '2.25rem',
  fontWeight: 'bold',
  letterSpacing: '-1px',
  lineHeight: 'auto',
  whiteSpace: 'nowrap',
  width: '100%',
  isAlign: false,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};

export default Title;
