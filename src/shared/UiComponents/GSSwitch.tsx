import { Switch } from '@mui/material';

type Props = {
  isChecked?: boolean;
  name: string;
  onChange: (event: any) => any;
};

export const GSSwitch = ({ isChecked = false, name, onChange }: Props) => {
  return <Switch checked={isChecked} name={name} onChange={onChange} />;
};
