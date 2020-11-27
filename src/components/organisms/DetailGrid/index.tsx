/* eslint-disable react/require-default-props */
import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import GridBox from '@/components/atoms/GridBox';
import Text from '@/components/atoms/Text';

import { gray, background } from '@/theme';

const useStyles = makeStyles(
  createStyles({
    containerGrid: {
      flexWrap: 'nowrap',
      borderTop: `1px solid ${gray.light}`,
      borderLeft: `1px solid ${gray.light}`,
      borderRight: `1px solid ${gray.light}`,
    },
    rowGrid: {
      borderBottom: `1px solid ${gray.light}`,
    },
    leftGrid: {
      flex: 'none',
      background: background.default,
      padding: '10px',
      minWidth: '100px',
    },
    rightGrid: {
      flex: 1,
      marginLeft: 'auto',
      padding: '10px',
    },
  })
);

export type DetailGridProps = {
  detailColumns: DetailColumn[];
  data?: any;
};

export type DetailColumn = {
  field: string;
  text: string;
};

const DetailGrid: React.FC<DetailGridProps> = (props) => {
  const classes = useStyles();
  const { detailColumns, data } = props;

  return (
    <GridBox container direction="column" className={classes.containerGrid}>
      {detailColumns.map((detail) => {
        const { field, text } = detail;

        return (
          <GridBox item key={detail.field}>
            <GridBox
              container
              className={classes.rowGrid}
              direction="row"
              justify="space-between"
            >
              <GridBox item className={classes.leftGrid}>
                <Text>{text}</Text>
              </GridBox>
              <GridBox item className={classes.rightGrid}>
                <Text>{data?.[field]}</Text>
              </GridBox>
            </GridBox>
          </GridBox>
        );
      })}
    </GridBox>
  );
};

export default DetailGrid;
