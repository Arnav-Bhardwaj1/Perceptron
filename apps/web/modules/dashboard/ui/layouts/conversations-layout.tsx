import { ConversationsPanel } from "../components/conversations-panel";

export const ConversationsLayout = ({
  children
}: { children: React.ReactNode; }) => {
  return (
    <div className="flex h-full w-full">
      <div className="h-full w-[400px] shrink-0 border-r">
        <ConversationsPanel />
      </div>
      <div className="h-full min-w-0 flex-1 overflow-hidden">
        {children}
      </div>
    </div>
  );
};