import { InputLabel, MenuItem, Select as MatSelect } from '@mui/material';

type Props = {
  name: string;
  label?: string;
  required?: boolean;
  defaultValue?: any;
  options: Array<{
    label: string;
    value: any;
  }>;
  onChange: (event: any) => any;
};

export const Select = ({ name, label, defaultValue, required = false, onChange, options }: Props) => {
  return (
    <>
      <InputLabel id={name + label}>{label}</InputLabel>
      <MatSelect
        labelId={name + label}
        name={name}
        value={defaultValue}
        required={required}
        onChange={onChange}
        fullWidth={true}
      >
        {options.map((option) => (
          <MenuItem value={option.value}>{option.label}</MenuItem>
        ))}
      </MatSelect>
    </>
  );
};
