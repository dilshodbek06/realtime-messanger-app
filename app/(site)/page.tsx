import Image from "next/image";
import AuthForm from "./_components/auth-form";

export default function Home() {
  return (
    <div className="flex dark:bg-slate-700 flex-col min-h-full justify-center py-12 sm:px-6 lg:px-8 bg-gray-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          alt="logo"
          width="48"
          height="48"
          src="/images/logo.svg"
          className="mx-auto w-auto"
          loading="lazy"
        />
        <h2 className="mt-1 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Sign in to your accaunt
        </h2>
      </div>
      <AuthForm />
    </div>
  );
}
