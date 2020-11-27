/* eslint-disable no-shadow */
/* eslint-disable react/require-default-props */
import React from 'react';

import { makeStyles, createStyles } from '@material-ui/core/styles';
import GridBox from '@/components/atoms/GridBox';
import Text from '@/components/atoms/Text';
import FormFactory, { FormType } from '@/components/molecules/FormFactory';
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

export type { FormType };

export type FormGridProps = {
  data: Record<string, any>;
  forms: Record<string, FormType>;
  inputHandler: InputHandler;
};

const FormGrid: React.FC<FormGridProps> = (props) => {
  const { data, forms, inputHandler } = props;
  const classes = useStyles();

  return (
    <form>
      <GridBox container direction="column" className={classes.containerGrid}>
        {Object.keys(forms).map((name: string) => {
          const form = forms[name];

          return (
            <GridBox item key={name}>
              <GridBox
                container
                className={classes.rowGrid}
                direction="row"
                justify="space-between"
              >
                <GridBox item className={classes.leftGrid}>
                  <Text>{form.label}</Text>
                </GridBox>
                <GridBox item className={classes.rightGrid}>
                  <FormFactory
                    value={data[name]}
                    name={name}
                    {...form}
                    inputHandler={inputHandler}
                  />
                </GridBox>
              </GridBox>
            </GridBox>
          );
        })}
      </GridBox>
    </form>
  );
};

export default FormGrid;
