import { ContactPanel } from "../components/contact-panel";

export const ConversationIdLayout = ({ children }: { children: React.ReactNode; }) => {
  return (
    <div className="flex h-full min-h-0 flex-1">
      <section className="flex h-full min-h-0 min-w-0 flex-1 flex-col">{children}</section>
      <aside className="hidden h-full min-h-0 w-[340px] min-w-[280px] max-w-[38%] flex-col overflow-hidden border-l bg-background lg:flex">
        <ContactPanel />
      </aside>
    </div>
  );
};