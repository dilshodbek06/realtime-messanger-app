const EmptyState = () => {
  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8   h-full min-h-screen flex justify-center items-center bg-gray-100 dark:bg-slate-800">
      <div className="text-center items-center flex flex-col">
        <h3 className="mt-2 text-2xl font-semibold text-gray-900 dark:text-white">
          Select a chat or start new conversation
        </h3>
      </div>
    </div>
  );
};

export default EmptyState;
