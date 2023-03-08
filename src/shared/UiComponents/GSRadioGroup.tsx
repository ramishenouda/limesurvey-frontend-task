import { FormControlLabel, Radio, RadioGroup } from '@mui/material';

type Props = {
  name?: string;
  options?: Array<{ label: string; value: any }>;
  onChange?: (event: any) => any;
};

export const GSRadioGroup = ({ name, options, onChange }: Props) => {
  return (
    <RadioGroup name={name}>
      {options?.map((option, index) => {
        return (
          <div key={option.label + index + 'radiogroup'}>
            <FormControlLabel value={option.value} control={<Radio />} label={option.label} onChange={onChange} />
          </div>
        );
      })}
    </RadioGroup>
  );
};
