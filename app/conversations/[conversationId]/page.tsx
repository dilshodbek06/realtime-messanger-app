import EmptyState from "@/app/_components/empty-state";
import getConversationById from "@/app/actions/getConversationById";
import getMessages from "@/app/actions/getMessages";
import Header from "./_components/header";
import Body from "./_components/body";
import Form from "./_components/form";

const ConversationIdPage = async ({
  params,
}: {
  params: { conversationId: string };
}) => {
  const conversation = await getConversationById(params.conversationId);
  const messages = await getMessages(params.conversationId);

  if (!conversation) {
    return (
      <div className="lg:pl-80 h-full">
        <div className="h-full flex flex-col">
          <EmptyState />
        </div>
      </div>
    );
  }
  return (
    <div className="lg:pl-80 h-full">
      <div className="h-full flex flex-col">
        <Header conversation={conversation} />
        <Body initialMessages={messages} />
        <Form />
      </div>
    </div>
  );
};

export default ConversationIdPage;
