/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import styled from 'styled-components';
import NativeSelect, {
  NativeSelectProps as originNativeSelectProps,
} from '@material-ui/core/NativeSelect';

export type SelectProps = Omit<
  originNativeSelectProps,
  'IconComponent' | 'input'
> & {
  items: any[];
  text?: string | number;
  value?: string | number;
  selectedValue?: string | number;
};
const StyledSelect = styled(NativeSelect)`
  color: ${({ theme }) => theme.palette.typography};
  /* box-shadow: 0 4px 6px rgba(10, 10, 12, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08); */
  &:hover {
    color: ${({ theme }) => theme.palette.hover};
  }
`;

export default (props: SelectProps) => {
  const { text = 'text', value = 'value', selectedValue, items } = props;
  return (
    <StyledSelect {...props} value={selectedValue}>
      {items.map((item: any) => {
        const itemValue = item[value] || '';
        const itemText = item[text] || itemValue || '';

        return (
          <option key={itemValue} value={itemValue}>
            {itemText}
          </option>
        );
      })}
    </StyledSelect>
  );
};
