/* eslint-disable @typescript-eslint/ban-types */
import React, { ReactNode } from 'react';
import styled from 'styled-components';

export type TitleProps = {
  //   onClose(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): null;
  children?: ReactNode;
  color?: string;
  fontSize?: string;
  headline?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  margin?: string;
  padding?: string;
} & React.HTMLAttributes<HTMLElement>;

const StyledHeadLine = {
  h1: styled.h1`
    color: ${({ theme }) => theme.palette.typography};
    padding: 0px;
    margin: 0px;
    line-height: 1.5;
    font-size: 24px;
    font-weight: normal;
    &:hover {
      color: ${({ theme }) => theme.palette.hover};
    }
  `,
  h2: styled.h2`
    color: ${({ theme }) => theme.palette.typography};
    padding: 0px;
    margin: 0px;
    line-height: 1.5;
    font-size: 22px;
    font-weight: normal;
    &:hover {
      color: ${({ theme }) => theme.palette.hover};
    }
  `,
  h3: styled.h3`
    color: ${({ theme }) => theme.palette.typography};
    padding: 0px;
    margin: 0px;
    line-height: 1.5;
    font-size: 20px;
    font-weight: normal;
    &:hover {
      color: ${({ theme }) => theme.palette.hover};
    }
  `,
  h4: styled.h4`
    color: ${({ theme }) => theme.palette.typography};
    padding: 0px;
    margin: 0px;
    line-height: 1.5;
    font-size: 18px;
    font-weight: normal;
    &:hover {
      color: ${({ theme }) => theme.palette.hover};
    }
  `,
  h5: styled.h5`
    color: ${({ theme }) => theme.palette.typography};
    padding: 0px;
    margin: 0px;
    line-height: 1.5;
    font-size: 16px;
    font-weight: normal;
    &:hover {
      color: ${({ theme }) => theme.palette.hover};
    }
  `,
  h6: styled.h6`
    color: ${({ theme }) => theme.palette.typography};
    padding: 0px;
    margin: 0px;
    line-height: 1.5;
    font-size: 14px;
    font-weight: normal;
    &:hover {
      color: ${({ theme }) => theme.palette.hover};
    }
  `,
};

const Title = (props: TitleProps) => {
  const { children, color, margin, padding, fontSize, headline = 'h1' } = props;
  const Headline = StyledHeadLine[headline];

  return (
    <>
      <Headline style={{ color, fontSize, margin, padding }} {...props}>
        {children}
      </Headline>
    </>
  );
};
export default Title;
