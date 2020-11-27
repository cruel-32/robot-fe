/* eslint-disable react/require-default-props */
import React, { ReactNode } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import GridBox from '@/components/atoms/GridBox';

const useStyles = makeStyles(
  createStyles({
    containerGrid: {
      height: '100%',
      flexWrap: 'nowrap',
    },
    topGrid: {
      flex: 'none',
    },
    centerGrid: {
      marginTop: '10px',
      marginBottom: '10px',
      flex: '1',
      overflow: 'auto',
    },
    bottomGrid: {
      flex: 'none',
      marginTop: 'auto',
    },
  })
);

export type ContentsBoxProps = {
  topChildren?: ReactNode;
  children?: ReactNode;
  bottomChildren?: ReactNode;
};

const ContentsBox: React.FC<ContentsBoxProps> = (props) => {
  const classes = useStyles();
  const { topChildren, children, bottomChildren } = props;

  return (
    <GridBox
      container
      direction="column"
      justify="space-between"
      className={classes.containerGrid}
    >
      <GridBox item className={classes.topGrid}>
        {topChildren}
      </GridBox>
      <GridBox item className={classes.centerGrid}>
        {children}
      </GridBox>
      <GridBox item className={classes.bottomGrid}>
        {bottomChildren}
      </GridBox>
    </GridBox>
  );
};

export default ContentsBox;
