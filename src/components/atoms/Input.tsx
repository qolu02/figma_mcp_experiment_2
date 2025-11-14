import { Input as ShadcnInput } from '@/components/ui/input';

interface InputProps extends React.ComponentProps<typeof ShadcnInput> {}

export const Input: React.FC<InputProps> = (props) => {
  return <ShadcnInput {...props} />;
};
