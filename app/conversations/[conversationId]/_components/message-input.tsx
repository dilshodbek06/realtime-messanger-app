"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface MessageInputProps {
  id: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  required: boolean;
  placeholder?: string;
  type?: string;
}

const MessageInput = ({
  id,
  register,
  required,
  placeholder,
  type,
}: MessageInputProps) => {
  return (
    <div className="relative w-full">
      <input
        type={type}
        id={id}
        autoComplete={id}
        {...register(id, { required })}
        placeholder={placeholder}
        className="text-black font-light py-2 px-4 bg-neutral-100 w-full rounded-full focus:outline-none dark:bg-slate-700 dark:placeholder-white dark:text-white"
      />
    </div>
  );
};

export default MessageInput;
