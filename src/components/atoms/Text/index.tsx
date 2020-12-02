import React from 'react';
import styled from 'styled-components';

export type TextProps = {
  strong?: boolean;
  text?: string;
};

const StyledText = styled.span`
  display: inline-block;
  padding: 7px 0 7px;
`;

const Text: React.FC<TextProps> = (props) => {
  const { text, children } = props;
  return <StyledText {...props}>{text || children}</StyledText>;
};

export default Text;
