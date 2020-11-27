/* eslint-disable no-shadow */
import React from 'react';
import Input, { InputProps } from '@/components/atoms/Input';
import TextArea from '@/components/atoms/TextArea';
import Select from '@/components/atoms/Select';

export type FormType = {
  form: 'input' | 'textarea' | 'select' | 'checkbox' | 'radio';
  label: string;
  type?: InputProps['type'];
  disabled?: boolean;
  items?: IFormDataType[];
  options?: any;
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
      {form === 'select' && items && <Select items={items} />}
    </>
  );
};

export default FormFactory;
