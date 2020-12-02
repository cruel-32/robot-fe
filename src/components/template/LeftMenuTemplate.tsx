import React, { ReactNode, memo } from 'react';
import styled from 'styled-components';

import CssBaseline from '@/components/atoms/CssBaseline';
import GridBox from '@/components/atoms/GridBox';
import SideHeader from '@/components/organisms/SideHeader';

import { background } from '@/theme';

const StyledContainer = styled(GridBox)`
  flex-wrap: nowrap;
  .left-side {
    flex: 0 0 200px;
    padding: 12px;
    border-right: 1px solid #efefef;
    background-color: ${background.default};
  }
  .contents {
    padding: 12px;
    flex: 1 1 auto;
  }
`;

export type LeftMenuTemplateProps = {
  children: ReactNode;
};

const MemoSideHeader = memo(SideHeader);

const LeftMenuTemplate = (props: LeftMenuTemplateProps) => {
  const { children } = props;

  return (
    <>
      <CssBaseline />
      <StyledContainer container>
        <GridBox item className="left-side">
          <MemoSideHeader />
        </GridBox>
        <GridBox item className="contents">
          {children}
        </GridBox>
      </StyledContainer>
    </>
  );
};
export default LeftMenuTemplate;
