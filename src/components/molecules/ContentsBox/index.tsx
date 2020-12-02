/* eslint-disable react/require-default-props */
import React, { ReactNode } from 'react';
import styled from 'styled-components';

import GridBox from '@/components/atoms/GridBox';

export type ContentsBoxProps = {
  topChildren?: ReactNode;
  children?: ReactNode;
  bottomChildren?: ReactNode;
};

const StyledGridBox = styled(GridBox)`
  height: 100%;
  flex-wrap: nowrap;
  .top-grid {
    flex: none;
  }
  .center-grid {
    margin-top: 10px;
    margin-bottom: 10px;
    flex: 1;
    overflow: auto;
  }
  .bottom-grid {
    flex: none;
    margin-top: auto;
  }
`;

const ContentsBox: React.FC<ContentsBoxProps> = (props) => {
  const { topChildren, children, bottomChildren } = props;

  return (
    <StyledGridBox container direction="column" justify="space-between">
      <GridBox item className="top-grid">
        {topChildren}
      </GridBox>
      <GridBox item className="center-grid">
        {children}
      </GridBox>
      <GridBox item className="bottom-grid">
        {bottomChildren}
      </GridBox>
    </StyledGridBox>
  );
};

export default ContentsBox;
