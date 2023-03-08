// @flow
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';

type Props = {
  name: string;
  options: Array<{
    label: string;
    value: any;
  }>;
  onChange: (event: any) => any;
};

export const GSCheckbox = ({ name, onChange, options }: Props) => {
  return (
    <FormGroup>
      {options.map((option) => {
        return (
          <>
            <FormControlLabel
              control={<Checkbox />}
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
