import { TextField } from '@mui/material';

type Props = {
  type?: 'text' | 'number' | 'email';
  variant?: 'outlined' | 'filled' | 'standard';
  maxNumericValue?: number;
  name: string;
  label?: string;
  required?: boolean;
  placeholder?: string;
  value?: any;
  defaultValue?: string;
  onChange: (event: any) => any;
};

export const Input = ({
  type = 'text',
  variant = 'outlined',
  value,
  name,
  label,
  placeholder,
  defaultValue,
  required = false,
  maxNumericValue,
  onChange,
}: Props) => {
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
      variant={variant}
      value={value}
      InputProps={{
        inputProps: {
          max: maxNumericValue,
        },
      }}
    />
  );
};
