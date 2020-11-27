/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import styled from 'styled-components';
import OriginList, {
  ListProps as OriginListProps,
} from '@material-ui/core/List';

export type ListProps = Omit<OriginListProps, 'startIcon' | 'endIcon'>;
const StyledList = styled(OriginList)`
  color: ${({ theme }) => theme.palette.typography};
`;

const List = (props: ListProps) => {
  const { children } = props;
  return <StyledList {...props}>{children}</StyledList>;
};
export default List;
