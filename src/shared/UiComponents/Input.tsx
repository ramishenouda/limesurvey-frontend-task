import { TextField } from '@mui/material';

type Props = {
  type?: 'text' | 'number' | 'email';
  name: string;
  label?: string;
  required?: boolean;
  placeholder?: string;
  defaultValue?: string;
  onChange: (event: any) => any;
};

export const Input = ({ type = 'text', name, label, placeholder, defaultValue, required = false, onChange }: Props) => {
  return (
    <TextField
      label={label}
      placeholder={placeholder}
      required={required}
      name={name}
      type={type}
      onChange={onChange}
      defaultValue={defaultValue}
      fullWidth={true}
    />
  );
};
