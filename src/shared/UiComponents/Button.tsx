import { Button as MatButton } from '@mui/material';

type Props = {
  variant?: 'text' | 'contained' | 'outlined';
  label: string;
  size?: 'small' | 'medium' | 'large';
  onClick: (event: any) => any;
};

export const Button = ({ variant = 'contained', size = 'medium', label, onClick }: Props) => {
  return (
    <MatButton size={size} fullWidth={true} variant={variant} onClick={onClick}>
      {label}
    </MatButton>
  );
};
