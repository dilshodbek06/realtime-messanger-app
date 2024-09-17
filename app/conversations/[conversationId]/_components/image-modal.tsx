"use client";

import Modal from "@/app/_components/modal";
import Image from "next/image";

interface ImageModalProps {
  src?: string | null;
  onClose: () => void;
  isOpen?: boolean;
}
const ImageModal = ({ onClose, isOpen, src }: ImageModalProps) => {
  if (!src) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-80 h-80">
        <Image fill src={src} alt="image" className="object-cover" />
      </div>
    </Modal>
  );
};

export default ImageModal;
