/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import styled from 'styled-components';
import MenuItem from '@material-ui/core/MenuItem';
import Select, {
  SelectProps as originSelectProps,
} from '@material-ui/core/Select';

export type SelectProps = Omit<
  originSelectProps,
  'multiple' | 'IconComponent' | 'input'
> & {
  items: object[];
  valueProp?: string | number;
  textProp?: string | number;
};
const StyledSelect = styled(Select)`
  color: ${({ theme }) => theme.palette.typography};
  /* box-shadow: 0 4px 6px rgba(10, 10, 12, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08); */
  &:hover {
    color: ${({ theme }) => theme.palette.hover};
  }
`;

export default (props: SelectProps) => {
  const { textProp = 'text', items, valueProp = 'value' } = props;
  return (
    <StyledSelect {...props}>
      {items.map((item: any) => {
        const itemValue = item[valueProp] || item;
        const itemText = item[textProp] || itemValue || item;

        return (
          <MenuItem key={itemValue} value={itemValue}>
            {itemText}
          </MenuItem>
        );
      })}
    </StyledSelect>
  );
};
