/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import styled from 'styled-components';
import MenuItem from '@material-ui/core/MenuItem';
import OriginSelect, {
  SelectProps as OriginSelectProps,
} from '@material-ui/core/Select';
import ListItemText from '@material-ui/core/ListItemText';

import Checkbox from '@/components/atoms/Checkbox';

export type SelectProps = Omit<OriginSelectProps, 'input'> & {
  items: IFormDataType[];
};
const StyledSelect = styled(OriginSelect)`
  color: ${({ theme }) => theme.palette.typography};
  &:hover {
    color: ${({ theme }) => theme.palette.hover};
  }
`;

const Select = (props: SelectProps) => {
  const { items, multiple = false, value, renderValue } = props;

  const renderValues = (selected: any) => {
    if (multiple) {
      return selected
        .map((selectedValue: IFormDataType) => {
          const selectedItem: IFormDataType | undefined = items.find(
            (item: IFormDataType) => item.value === selectedValue
          );

          return selectedItem?.text;
        })
        .join(', ');
    }
    const selectedItem: any = items.find(
      (item: IFormDataType) => item.value === selected
    );
    return selectedItem.text;
  };

  return (
    <StyledSelect {...props} renderValue={renderValue || renderValues}>
      {items.map((item: IFormDataType) => {
        const { value: itemValue, text: itemText } = item;

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
export default Select;
