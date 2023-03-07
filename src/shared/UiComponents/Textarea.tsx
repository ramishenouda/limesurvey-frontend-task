import { TextField } from '@mui/material';

type Props = {
  name: string;
  rows?: number;
  label?: string;
  placeholder?: string;
  required?: boolean;
  onChange: () => void;
};

export const Textarea = ({ rows, name, label, placeholder, required = false, onChange }: Props) => {
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
