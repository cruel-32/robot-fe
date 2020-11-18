/* eslint-disable @typescript-eslint/ban-types */
import React, { ReactNode } from 'react';
import styled from 'styled-components';

export type BoxProps = {
  //   onClose(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): null;
  children?: ReactNode;
  border?: string;
  borderRadius?: string;
  backgroundColor?: string;
  display?: 'flex' | 'inline-flex' | 'block' | 'none';
  position?:
    | 'static'
    | 'relative'
    | 'absolute'
    | 'sticky'
    | 'fixed'
    | 'unset'
    | 'initial';
  padding?: string;
  margin?: string;
  justifyContent?:
    | 'center'
    | 'start'
    | 'end'
    | 'space-around'
    | 'space-between'
    | 'space-evenly'
    | 'flex-start'
    | 'flex-end'
    | 'left'
    | 'right';
  justifyItems?: 'stretch' | 'center' | 'start' | 'end';
  alignContent?: 'center' | 'start' | 'end' | 'flex-start' | ' flex-end';
  alignItems?: 'center' | 'start' | 'end' | 'flex-start' | 'flex-end';
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
} & React.HTMLAttributes<HTMLElement>;

const StyledBox = styled.div`
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
`;

export default (props: BoxProps) => {
  const {
    children,
    margin,
    padding,
    backgroundColor,
    border,
    borderRadius,
    position = 'relative',
    display,
    justifyContent,
    justifyItems,
    alignContent,
    alignItems,
    flexWrap,
    flexDirection,
  } = props;

  return (
    <StyledBox
      style={{
        margin,
        padding,
        backgroundColor,
        borderRadius,
        border,
        position,
        display,
        justifyContent,
        justifyItems,
        alignContent,
        alignItems,
        flexWrap,
        flexDirection,
      }}
      {...props}
    >
      {children}
    </StyledBox>
  );
};
export type BoxItemProps = Omit<
  BoxProps,
  | 'justifyContent'
  | 'justifyItems'
  | 'alignContent'
  | 'alignItems'
  | 'flexWrap'
  | 'flexDirection'
> &
  React.HTMLAttributes<HTMLElement> & {
    flex?: string;
  };

export const BoxItem = (props: BoxItemProps) => {
  const {
    children,
    margin,
    padding,
    backgroundColor,
    borderRadius,
    border,
    position = 'relative',
    display,
    flex,
  } = props;

  return (
    <StyledBox
      style={{
        margin,
        padding,
        backgroundColor,
        borderRadius,
        border,
        position,
        display,
        flex,
      }}
      {...props}
    >
      {children}
    </StyledBox>
  );
};
