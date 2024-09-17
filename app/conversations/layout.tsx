import Sidebar from "../_components/sidebar/sidebar";
import getConversations from "../actions/getConversations";
import getUsers from "../actions/getUsers";
import ConversationList from "./_components/conversation-list";

export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversations = await getConversations();
  const users = await getUsers();
  return (
    <Sidebar>
      <ConversationList users={users} initialItems={conversations} />
      <div className="h-screen">{children}</div>
    </Sidebar>
  );
}
