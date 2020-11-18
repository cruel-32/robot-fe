import React, { ReactNode } from 'react';
import Box, { BoxItem, BoxProps, BoxItemProps } from '@/components/atoms/Box';
import Title, { TitleProps } from '@/components/atoms/Title';
import Icon, { IconProps } from '@/components/atoms/Icon';

export type TitleBarProps = {
  children?: ReactNode;
} & BoxProps &
  BoxItemProps &
  TitleProps &
  Omit<IconProps, 'color'>;

export default (props: TitleBarProps) => {
  const {
    color,
    backgroundColor,
    title,
    headline,
    fontSize,
    icon,
    iconColor,
    iconSize = '32px',
    border,
    borderRadius,
    padding,
    children,
  } = props;

  return (
    <Box
      display="flex"
      alignContent="center"
      backgroundColor={backgroundColor}
      border={border}
      borderRadius={borderRadius}
      padding={padding}
      justifyContent="space-between"
    >
      {icon && (
        <BoxItem flex="none">
          <Icon
            icon={icon}
            iconColor={iconColor}
            iconSize={iconSize}
            margin="2px 0 0 5px"
          />
        </BoxItem>
      )}
      <BoxItem flex="none">
        <Title
          headline={headline}
          color={color}
          fontSize={fontSize}
          margin="0 0 0 5px"
        >
          {title}
        </Title>
      </BoxItem>
      <BoxItem flex="none" margin="0 0 0 auto">
        {children}
      </BoxItem>
    </Box>
  );
};
