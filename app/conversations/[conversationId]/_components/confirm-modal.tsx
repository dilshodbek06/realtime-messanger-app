"use client";

import Button from "@/app/_components/button";
import Modal from "@/app/_components/modal";
import useConversation from "@/app/hooks/useConversation";
import {  DialogTitle } from "@headlessui/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";

import { FiAlertTriangle } from "react-icons/fi";

interface ConfirmModalProps {
  onClose: () => void;
  isOpen?: boolean;
}
const ConfirmModal = ({ onClose, isOpen }: ConfirmModalProps) => {
  const router = useRouter();
  const { conversationId } = useConversation();
  const [isLoading, setIsLoading] = useState(false);

  const onDelete = useCallback(() => {
    setIsLoading(true);
    axios
      .delete(`/api/conversations/${conversationId}`)
      .then(() => {
        onClose();
        router.push("/conversations");
        router.refresh();
      })
      .catch(() => {
        toast.error("Something went wrong");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [conversationId, router, onClose]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="sm:flex sm:items-start py-2">
        <div className="mx-auto flex justify-center h-12 w-12 flex-shrink-0 items-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
          <FiAlertTriangle className="w-6 h-6 text-red-600" />
        </div>
        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
          <DialogTitle
            as="h3"
            className={"text-base font-semibold leading-6 text-gray-900 dark:text-white"}
          >
            Delete conversation
          </DialogTitle>
          <div className="mt-2">
            <p className="text-sm text-gray-500 dark:text-gray-200">
              Are you sure want to delete this conversation?
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5 sm:mt-4 flex flex-row-reverse">
        <Button danger disabled={isLoading} onClick={onDelete}>
          Delete
        </Button>
        <Button secondary disabled={isLoading} onClick={onClose}>
          Cancel
        </Button>
      </div>
    </Modal>
  );
};

export default ConfirmModal;
