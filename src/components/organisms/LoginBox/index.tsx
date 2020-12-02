/* eslint-disable react/require-default-props */
import React, { memo, useState } from 'react';
import styled from 'styled-components';

import Button from '@/components/atoms/Button';
import GridBox from '@/components/atoms/GridBox';
import IconLabeledInput from '@/components/molecules/IconLabeledInput';
import useAccount from '@/hooks/useAccount';
import { primary } from '@/theme';

const MemoInput = memo(IconLabeledInput);
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

const LoginBox = () => {
  const { fetchLogin } = useAccount();

  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const inputUser = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    fetchLogin(user);
  };

  return (
    <StyledContainer container direction="column">
      <GridBox item className="row-spacing">
        <MemoInput
          fullWidth
          placeholder="Account ID"
          label="ID"
          icon="account_circle"
          type="text"
          name="username"
          onChange={inputUser}
          value={user.username}
        />
      </GridBox>
      <GridBox item className="row-spacing">
        <MemoInput
          fullWidth
          placeholder="Password"
          label="PW"
          icon="vpn_key"
          type="password"
          name="password"
          onChange={inputUser}
        />
      </GridBox>
      <GridBox item className="row-spacing">
        <GridBox container justify="flex-end">
          <MemoButton variant="outlined">Join</MemoButton>
          <MemoButton variant="outlined" className="login-btn" onClick={login}>
            Login
          </MemoButton>
        </GridBox>
      </GridBox>
    </StyledContainer>
  );
};
export default LoginBox;
