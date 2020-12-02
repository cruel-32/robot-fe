import React, { ReactNode } from 'react';
import styled from 'styled-components';

import GridBox from '@/components/atoms/GridBox';
import Title, { TitleProps } from '@/components/atoms/Title';
import Icon, { IconProps } from '@/components/atoms/Icon';

export type TitleBarProps = {
  children?: ReactNode;
} & TitleProps &
  Omit<IconProps, 'color'>;

const StyledRootGrid = styled(GridBox)`
  flex: none;
  .center-grid {
    flex: none;
  }
  .right-grid {
    flex: none;
    margin-left: auto;
  }
`;

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

  return (
    <StyledRootGrid container justify="space-between">
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
      <GridBox item className="center-grid">
        <Title
          headline={headline}
          color={color}
          fontSize={fontSize}
          margin="0 0 0 5px"
        >
          {title}
        </Title>
      </GridBox>
      <GridBox item className="right-grid">
        {children}
      </GridBox>
    </StyledRootGrid>
  );
};
export default TitleBar;
