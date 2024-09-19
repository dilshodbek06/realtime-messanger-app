"use client";

import Avatar from "@/app/_components/avatar";
import LoadingModal from "@/app/_components/loading-modal";
import { User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

interface UserBoxProps {
  data: User;
}

const UserBox = ({ data }: UserBoxProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    axios
      .post("/api/conversations", {
        userId: data.id,
      })
      .then((res) => {
        router.push(`/conversations/${res.data.id}`);
      })
      .catch(() => {
        toast.error("Something went wrong");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      {isLoading && <LoadingModal />}

      <div
        onClick={handleClick}
        className="w-full relative flex items-center space-x-3 bg-white dark:bg-slate-600 p-3 hover:bg-neutral-100 rounded-lg transition cursor-pointer dark:hover:bg-slate-700"
      >
        <Avatar user={data} />
        <div className="min-w-0 flex-1">
          <div className="focus:outline-none">
            <div className="flex justify-between items-center mb-1">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                {data.name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserBox;
