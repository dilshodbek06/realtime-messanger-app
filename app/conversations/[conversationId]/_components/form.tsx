"use client";

import useConversation from "@/app/hooks/useConversation";
import axios from "axios";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { HiPhoto, HiPaperAirplane } from "react-icons/hi2";
import MessageInput from "./message-input";

import { CldUploadButton } from "next-cloudinary";
import useSendSound from "@/app/hooks/useSendSound";

const Form = () => {
  const { conversationId } = useConversation();
  const playSendSound = useSendSound();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FieldValues>({
    defaultValues: {
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setValue("message", "", { shouldValidate: true });
    axios
      .post("/api/messages", {
        ...data,
        conversationId,
      })
      .then(() => {
        playSendSound();
      });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleUpload = async (result: any) => {
    await axios.post("/api/messages", {
      image: result?.info?.secure_url,
      conversationId,
    });
  };

  return (
    <div className="p-4 bg-white dark:bg-slate-800 border-t flex items-center gap-2 lg:gap-4 w-full">
      <CldUploadButton
        options={{ maxFiles: 1 }}
        onSuccess={handleUpload}
        uploadPreset="khy3gaiu"
      >
        <HiPhoto size={30} className="text-sky-500" />
      </CldUploadButton>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center gap-2 lg:gap-4 w-full"
      >
        <MessageInput
          id="message"
          register={register}
          errors={errors}
          required
          placeholder="Write a message"
        />
        <button
          type="submit"
          className="rounded-full p-2 bg-sky-500 cursor-pointer transition hover:bg-sky-600"
        >
          <HiPaperAirplane size={18} className="text-white" />
        </button>
      </form>
    </div>
  );
};

export default Form;
