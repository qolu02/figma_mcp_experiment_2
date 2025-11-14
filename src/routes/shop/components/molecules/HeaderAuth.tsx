import { Button } from '@/components/atoms/Button';

export const HeaderAuth: React.FC = () => {
  const handleSignIn = () => {
    // UI state only - no actual auth logic
  };

  const handleRegister = () => {
    // UI state only - no actual auth logic
  };

  return (
    <div className="flex items-center gap-3">
      <Button
        variant="outline"
        onClick={handleSignIn}
        className="text-sm border-gray-300 bg-white hover:bg-gray-50 hover:border-gray-400"
      >
        Sign in
      </Button>
      <Button
        onClick={handleRegister}
        className="text-sm bg-gray-900 text-white hover:bg-gray-800 border-gray-900"
      >
        Register
      </Button>
    </div>
  );
};
