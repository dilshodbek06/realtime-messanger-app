import { useRef } from "react";

const useSendSound = (): (() => void) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  if (typeof window !== "undefined" && !audioRef.current) {
    audioRef.current = new Audio("/sounds/sound.mp3");
  }

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return playSound;
};

export default useSendSound;
