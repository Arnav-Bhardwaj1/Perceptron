import { AuthGuard } from "@/modules/auth/ui/components/auth-guard";
import { OrganizationGuard } from "@/modules/auth/ui/components/organisation-guard";
import {
  SIDEBAR_COOKIE_NAME,
  SidebarProvider,
} from "@workspace/ui/components/sidebar";
import { cookies } from "next/headers";
import { DashboardSidebar } from "../components/dashboard-sidebar";
import { Provider } from "jotai";

export const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get(SIDEBAR_COOKIE_NAME)?.value !== "false";

  return (
    <AuthGuard>
      <OrganizationGuard>
        <Provider>
        <SidebarProvider defaultOpen={defaultOpen}>
          <DashboardSidebar />
          <main className="flex h-full w-full flex-1 flex-col overflow-hidden">
            {children}
          </main>
        </SidebarProvider>
        </Provider>
      </OrganizationGuard>
    </AuthGuard>
  );
};