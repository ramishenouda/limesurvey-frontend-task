import { Button as MatButton } from '@mui/material';

type Props = {
  variant?: 'text' | 'contained' | 'outlined';
  label: string;
  onClick: (event: any) => any;
};

export const Button = ({ variant = 'contained', label, onClick }: Props) => {
  return (
    <MatButton fullWidth={true} variant={variant} onClick={onClick}>
      {label}
    </MatButton>
  );
};
