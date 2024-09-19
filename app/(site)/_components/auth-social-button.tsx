import { IconType } from "react-icons";

interface AuthSocialButtonProps {
  icon: IconType;
  onClick?: () => void;
}

const AuthSocialButton = ({ icon: Icon, onClick }: AuthSocialButtonProps) => {
  return (
    <button
      
      title="Soon..."
      type="button"
      onClick={onClick}
      className="inline-flex w-full justify-center rounded-md bg-white dark:bg-slate-600 dark:text-white dark:hover:bg-slate-700 px-4 py-2 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-slate-500 hover:bg-gray-50 focus:outline-offset-0"
    >
      <Icon />
    </button>
  );
};

export default AuthSocialButton;
