import { Slider as ShadcnSlider } from '@/components/ui/slider';

interface SliderProps extends React.ComponentProps<typeof ShadcnSlider> {}

export const Slider: React.FC<SliderProps> = (props) => {
  return <ShadcnSlider {...props} />;
};
