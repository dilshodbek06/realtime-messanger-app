"use client";
import Button from "@/app/_components/button";
import Input from "@/app/_components/inputs/input";
import { useCallback, useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import AuthSocialButton from "./auth-social-button";

import { BsGithub, BsGoogle } from "react-icons/bs";

import axios from "axios";
import toast from "react-hot-toast";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const session = useSession();
  const router = useRouter();

  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (session.status === "authenticated") {
      router.push("/users");
    }
  }, [session.status, router]);

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: " ",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    try {
      if (variant === "REGISTER") {
        axios.post("/api/register", data).then(() => {
          signIn("credentials", data);
        });
      }

      if (variant === "LOGIN") {
        signIn("credentials", { ...data, redirect: false })
          .then((callback) => {
            if (callback?.error) {
              toast.error("Invalid credentials");
            }
            if (callback?.ok && !callback?.error) {
              toast.success("Logged in!");
              router.push("/users");
            }
          })
          .finally(() => {
            setIsLoading(false);
          });
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const socialAction = (action: string) => {
    toast("Soon...");
    return;
    setIsLoading(true);
    signIn(action, { redirect: false })
      .then((callback) => {
        if (callback?.error) {
          toast.error("Invalid credentials");
        }
        if (callback?.ok && !callback?.error) {
          toast.success("Logged in!");
          router.push("/users");
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white dark:bg-slate-800 px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant === "REGISTER" && (
            <Input
              label="Name"
              register={register}
              id="name"
              errors={errors}
              disabled={isLoading}
            />
          )}
          <Input
            label="Email address"
            register={register}
            id="email"
            errors={errors}
            type="email"
            disabled={isLoading}
          />
          <Input
            label="Password"
            register={register}
            id="password"
            errors={errors}
            type="password"
            disabled={isLoading}
          />
          <div>
            <Button fullWidth type="submit">
              {variant === "LOGIN" ? "Sign in" : "Sign up"}
            </Button>
          </div>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white dark:bg-slate-700 dark:text-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>
          <div className="mt-6 flex gap-2">
            <AuthSocialButton
              onClick={() => socialAction("github")}
              icon={BsGithub}
            />
            <AuthSocialButton
              onClick={() => socialAction("google")}
              icon={BsGoogle}
            />
          </div>
        </div>

        <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500 dark:text-gray-300">
          <div>
            {variant === "LOGIN"
              ? "New to Messanger?"
              : "Already have an accaunt?"}
          </div>
          <div
            onClick={toggleVariant}
            className="underline cursor-pointer text-sky-500"
          >
            {variant === "LOGIN" ? "Create an accaunt" : "Login"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
