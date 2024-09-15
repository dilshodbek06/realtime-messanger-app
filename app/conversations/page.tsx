"use client";
import clsx from "clsx";
import useConversation from "../hooks/useConversation";
import EmptyState from "../_components/empty-state";

const Page = () => {
  const { isOpen } = useConversation();

  return (
    <div
      className={clsx("lg:pl-80 h-full lg:block", isOpen ? "block" : "hidden")}
    >
      <EmptyState />
    </div>
  );
};

export default Page;
