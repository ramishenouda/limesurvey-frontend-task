import { TextField } from '@mui/material';

type Props = {
  name: string;
  rows?: number;
  label?: string;
  placeholder?: string;
  required?: boolean;
  onChange: (event: any) => void;
};

export const GSTextarea = ({ rows, name, label, placeholder, required = false, onChange }: Props) => {
  return (
    <TextField
      rows={rows}
      minRows={rows}
      name={name}
      label={label}
      placeholder={placeholder}
      required={false}
      onChange={onChange}
      fullWidth={true}
      multiline
    />
  );
};
