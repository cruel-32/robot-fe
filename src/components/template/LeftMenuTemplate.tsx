import React, { ReactNode, memo } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import CssBaseline from '@/components/atoms/CssBaseline';
import GridBox from '@/components/atoms/GridBox';
import SideHeader from '@/components/organisms/SideHeader';

const useStyles = makeStyles((theme: Theme) => {
  const { palette } = theme;

  return createStyles({
    container: {
      flexWrap: 'nowrap',
    },
    leftSide: {
      flex: '0 0 200px',
      padding: '12px',
      borderRight: `1px solid #efefef`,
      backgroundColor: palette.background.default,
    },
    contents: {
      padding: '12px',
      flex: '1 1 auto',
    },
  });
});

export type LeftMenuTemplateProps = {
  children: ReactNode;
};

const MemoSideHeader = memo(SideHeader);

const LeftMenuTemplate = (props: LeftMenuTemplateProps) => {
  const classes = useStyles();
  const { children } = props;

  return (
    <>
      <CssBaseline />
      <GridBox container className={classes.container}>
        <GridBox item className={classes.leftSide}>
          <MemoSideHeader />
        </GridBox>
        <GridBox item className={classes.contents}>
          {children}
        </GridBox>
      </GridBox>
    </>
  );
};
export default LeftMenuTemplate;
