import { Switch } from '@mui/material';

type Props = {
  defaultChecked?: boolean;
  name: string;
  onChange: (event: any) => any;
};

export const GSSwitch = ({ defaultChecked = false, name, onChange }: Props) => {
  return <Switch defaultChecked={defaultChecked} name={name} onChange={onChange} />;
};
