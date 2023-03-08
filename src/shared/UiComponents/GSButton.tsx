import { Button as MatButton } from '@mui/material';

type Props = {
  variant?: 'text' | 'contained' | 'outlined';
  label: string;
  size?: 'small' | 'medium' | 'large';
  type?: 'submit' | 'button' | 'reset';
  onClick?: (event: any) => any;
};

export const GSButton = ({ variant = 'contained', type = 'button', size = 'medium', label, onClick }: Props) => {
  return (
    <MatButton type={type} className="h-full" size={size} fullWidth={true} variant={variant} onClick={onClick}>
      {label}
    </MatButton>
  );
};
