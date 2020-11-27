/* eslint-disable react/require-default-props */
import React, { memo } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import Button from '@/components/atoms/Button';
import GridBox from '@/components/atoms/GridBox';
import useAccount from '@/hooks/useAccount';

const MemoButton = memo(Button);

const useStyles = makeStyles((theme: Theme) => {
  const { palette } = theme;

  return createStyles({
    rowSpacing: {
      margin: '3px',
    },
    logoutBtn: {
      marginLeft: '3px',
      color: palette.primary.dark,
    },
  });
});

const LogoutBox = () => {
  const { account, fetchLogout } = useAccount();
  const classes = useStyles();

  const logout = async () => {
    const logoutResult = await fetchLogout();
    console.log('logoutResult', logoutResult);
  };

  return (
    <GridBox container direction="column">
      <GridBox item className={classes.rowSpacing}>
        {account.logged?.name}님 환영합니다.
      </GridBox>
      <GridBox item className={classes.rowSpacing} />
      <GridBox item className={classes.rowSpacing}>
        <GridBox container justify="flex-end">
          <MemoButton variant="outlined">Join</MemoButton>
          <MemoButton
            variant="outlined"
            className={classes.logoutBtn}
            onClick={logout}
          >
            Logout
          </MemoButton>
        </GridBox>
      </GridBox>
    </GridBox>
  );
};
export default LogoutBox;
