import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable";
import { ConversationsPanel } from "../components/conversations-panel";

export const ConversationsLayout = ({
  children
}: { children: React.ReactNode; }) => {
  return (
    <ResizablePanelGroup className="h-full w-full" direction="horizontal" id="conversations-layout">
      <ResizablePanel id="conversations-list" defaultSize={30} maxSize={40} minSize={20}>
        <ConversationsPanel />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel id="conversation-content" className="h-full" defaultSize={70} minSize={60}>
        {children}
      </ResizablePanel>
    </ResizablePanelGroup >
  );
};