/* eslint-disable react/require-default-props */
import React, { memo } from 'react';
import styled from 'styled-components';

import Button from '@/components/atoms/Button';
import GridBox from '@/components/atoms/GridBox';
import useAccount from '@/hooks/useAccount';
import { primary } from '@/theme';

const MemoButton = memo(Button);

const StyledContainer = styled(GridBox)`
  .row-spacing {
    margin: 3px;
  }
  .login-btn {
    margin-left: 3px;
    color: ${primary.dark};
  }
`;

const LogoutBox = () => {
  const { account, fetchLogout } = useAccount();

  const logout = () => {
    fetchLogout();
  };

  return (
    <StyledContainer container direction="column">
      <GridBox item className="row-spacing">
        {account.logged?.name}님 환영합니다.
      </GridBox>
      <GridBox item className="row-spacing" />
      <GridBox item className="row-spacing">
        <GridBox container justify="flex-end">
          <MemoButton variant="outlined">Join</MemoButton>
          <MemoButton variant="outlined" className="login-btn" onClick={logout}>
            Logout
          </MemoButton>
        </GridBox>
      </GridBox>
    </StyledContainer>
  );
};
export default LogoutBox;
