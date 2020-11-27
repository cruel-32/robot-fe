import React, { ReactNode } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import GridBox from '@/components/atoms/GridBox';
import Title, { TitleProps } from '@/components/atoms/Title';
import Icon, { IconProps } from '@/components/atoms/Icon';

export type TitleBarProps = {
  children?: ReactNode;
} & TitleProps &
  Omit<IconProps, 'color'>;

const useStyles = makeStyles(
  createStyles({
    leftGrid: {
      flex: 'none',
    },
    centerGrid: {
      flex: 'none',
    },
    rightGrid: {
      flex: 'none',
      marginLeft: 'auto',
    },
  })
);

const TitleBar = (props: TitleBarProps) => {
  const {
    color,
    title,
    headline,
    fontSize,
    icon,
    iconColor,
    iconSize = '30px',
    children,
  } = props;

  // display="flex"
  // alignContent="center"
  // backgroundColor={backgroundColor}
  // border={border}
  // borderRadius={borderRadius}
  // padding={padding}
  // justifyContent="space-between"

  const classes = useStyles();

  return (
    <GridBox container justify="space-between" className={classes.leftGrid}>
      {icon && (
        <GridBox item>
          <Icon
            icon={icon}
            iconColor={iconColor}
            iconSize={iconSize}
            margin="2px 0 0 5px"
          />
        </GridBox>
      )}
      <GridBox item className={classes.centerGrid}>
        <Title
          headline={headline}
          color={color}
          fontSize={fontSize}
          margin="0 0 0 5px"
        >
          {title}
        </Title>
      </GridBox>
      <GridBox item className={classes.rightGrid}>
        {children}
      </GridBox>
    </GridBox>
  );
};
export default TitleBar;
