import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';

type Props = {
  name: string;
  options: Array<{
    label: string;
    value: any;
  }>;
  onChange?: (event: any) => any;
  className?: string;
};

export const GSCheckbox = ({ name, onChange, options, className }: Props) => {
  return (
    <FormGroup>
      {options.map((option) => {
        return (
          <>
            <FormControlLabel
              control={<Checkbox size="medium" />}
              label={option.label}
              onChange={onChange}
              name={name}
              value={option.value}
            />
          </>
        );
      })}
    </FormGroup>
  );
};
