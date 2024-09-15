import Sidebar from "../_components/sidebar/sidebar";
import getConversations from "../actions/getConversations";
import ConversationList from "./_components/conversation-list";

export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversations = await getConversations();
  return (
    <Sidebar>
      <ConversationList initialItems={conversations} />
      <div className="h-screen">{children}</div>
    </Sidebar>
  );
}
