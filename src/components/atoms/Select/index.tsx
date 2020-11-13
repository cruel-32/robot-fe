/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import styled from 'styled-components';
import MenuItem from '@material-ui/core/MenuItem';
import Select, {
  SelectProps as originSelectProps,
} from '@material-ui/core/Select';
import ListItemText from '@material-ui/core/ListItemText';

import Checkbox from '@/components/atoms/Checkbox';

export type SelectProps = Omit<originSelectProps, 'input'> & {
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
  const {
    textProp = 'text',
    items,
    multiple = false,
    valueProp = 'value',
    value,
    renderValue,
  } = props;

  const renderValues = (selected: any) => {
    if (multiple) {
      return selected
        .map((selectedValue: any) => {
          const selectedItem: any = items.find(
            (item: any) => item[valueProp] === selectedValue,
          );

          return selectedItem[textProp];
        })
        .join(', ');
    }
    const selectedItem: any = items.find(
      (item: any) => item[valueProp] === selected,
    );
    return selectedItem[textProp];
  };

  return (
    <StyledSelect {...props} renderValue={renderValue || renderValues}>
      {items.map((item: any) => {
        const itemValue = item[valueProp] || item;
        const itemText = item[textProp] || itemValue || item;
        console.log('itemText', itemText);

        if (multiple) {
          return (
            <MenuItem key={itemValue} value={itemValue}>
              <Checkbox
                checked={
                  Array.isArray(value)
                    ? value.indexOf(itemValue) > -1
                    : value === itemValue
                }
              />
              <ListItemText primary={itemText} />
            </MenuItem>
          );
        }
        return (
          <MenuItem key={itemValue} value={itemValue}>
            {itemText}
          </MenuItem>
        );
      })}
    </StyledSelect>
  );
};
