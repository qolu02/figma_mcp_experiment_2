import { Button as ShadcnButton } from '@/components/ui/button';

interface ButtonProps extends React.ComponentProps<typeof ShadcnButton> {}

export const Button: React.FC<ButtonProps> = (props) => {
  return <ShadcnButton {...props} />;
};
