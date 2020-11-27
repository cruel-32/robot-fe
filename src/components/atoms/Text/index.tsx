import React from 'react';
import styled from 'styled-components';

export type TextProps = {
  strong?: boolean;
};

const StyledText = styled.span`
  display: inline-block;
  padding: 7px 0 7px;
`;

const Text: React.FC<TextProps> = (props) => {
  const { children } = props;
  return <StyledText {...props}>{children}</StyledText>;
};

export default Text;
