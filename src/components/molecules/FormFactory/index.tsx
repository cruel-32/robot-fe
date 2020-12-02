/* eslint-disable no-shadow */
import React, { useMemo } from 'react';
import Input, { InputProps } from '@/components/atoms/Input';
import TextArea from '@/components/atoms/TextArea';
import Select from '@/components/atoms/Select';

export type FormType = {
  form?:
    | 'input'
    | 'textarea'
    | 'select'
    | 'select.multiple'
    | 'checkbox'
    | 'radio';
  label?: string;
  type?: InputProps['type'];
  disabled?: boolean;
  items?: IFormDataType[];
  options?: any;
  selectedFormat?: (item: IFormDataType) => boolean;
};

export type FormFactoryProps = {
  name: string;
  value: any;
  inputHandler: InputHandler;
} & FormType;

const FormFactory: React.FC<FormFactoryProps> = (props) => {
  const {
    value,
    type,
    disabled,
    form,
    name,
    options,
    items,
    inputHandler,
    selectedFormat,
  } = props;

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    inputHandler({
      name,
      value,
    });
  };

  const onSelect = (
    e: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>
  ) => {
    const { name = 'name', value } = e.target;

    inputHandler({
      name,
      value,
    });
  };

  const selectedValue = useMemo(() => {
    if (Array.isArray(items)) {
      if (typeof selectedFormat === 'function') {
        return items.filter(selectedFormat).map((item) => item.value);
      }
      return items
        .filter((item: IFormDataType) => {
          if (Array.isArray(value)) {
            return value.includes(item.value);
          }
          return item.value === value;
        })
        .map((item) => item.value);
    }
    return undefined;
  }, [value, items, selectedFormat]);

  return (
    <>
      {form === 'input' && (
        <Input
          value={value || ''}
          type={type}
          name={name}
          onChange={onChange}
          disabled={disabled}
          fullWidth
          {...options}
        />
      )}
      {form === 'textarea' && (
        <TextArea
          value={value || ''}
          name={name}
          onChange={onChange}
          disabled={disabled}
          fullWidth
          {...options}
        />
      )}
      {form === 'select' && items && (
        <Select
          onChange={onSelect}
          items={items}
          name={name}
          fullWidth
          value={selectedValue?.[0] || value || ''}
          {...options}
        />
      )}
      {form === 'select.multiple' && items && (
        <Select
          onChange={onSelect}
          items={items}
          name={name}
          fullWidth
          value={selectedValue || value || ''}
          multiple
          {...options}
        />
      )}
    </>
  );
};

export default FormFactory;
