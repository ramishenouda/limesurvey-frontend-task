import { MenuItem, Select as MatSelect } from '@mui/material';

type Props = {
  name: string;
  label?: string;
  required?: boolean;
  value?: any;
  options: Array<{
    label: string;
    value: any;
  }>;
  onChange: (event: any) => any;
};

export const Select = ({ name, label, value, required = false, onChange, options }: Props) => {
  return (
    <>
      <MatSelect
        labelId={name + label}
        name={name}
        value={value}
        required={required}
        onChange={onChange}
        fullWidth={true}
      >
        {options.map((option) => (
          <MenuItem key={option.label + 'menuItem' + option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MatSelect>
    </>
  );
};
