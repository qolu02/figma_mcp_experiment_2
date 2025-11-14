import { Checkbox as ShadcnCheckbox } from '@/components/ui/checkbox';

interface CheckboxProps extends React.ComponentProps<typeof ShadcnCheckbox> {}

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  return <ShadcnCheckbox {...props} />;
};
