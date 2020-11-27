/* eslint-disable react/require-default-props */
import React, { memo, useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import Button from '@/components/atoms/Button';
import GridBox from '@/components/atoms/GridBox';
import IconLabeledInput from '@/components/molecules/IconLabeledInput';
import useAccount from '@/hooks/useAccount';

// import { observer } from 'mobx-react-lite';
// import { useMst } from '@/stores';

const MemoInput = memo(IconLabeledInput);
const MemoButton = memo(Button);

const useStyles = makeStyles((theme: Theme) => {
  const { palette } = theme;

  return createStyles({
    rowSpacing: {
      margin: '3px',
    },
    loginBtn: {
      marginLeft: '3px',
      color: palette.primary.dark,
    },
  });
});

const LoginBox = () => {
  const { fetchLogin } = useAccount();

  const classes = useStyles();
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
    <GridBox container direction="column">
      <GridBox item className={classes.rowSpacing}>
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
      <GridBox item className={classes.rowSpacing}>
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
      <GridBox item className={classes.rowSpacing}>
        <GridBox container justify="flex-end">
          <MemoButton variant="outlined">Join</MemoButton>
          <MemoButton
            variant="outlined"
            className={classes.loginBtn}
            onClick={login}
          >
            Login
          </MemoButton>
        </GridBox>
      </GridBox>
    </GridBox>
  );
};
export default LoginBox;
