import { Header } from "@/components/refine-ui/layout/header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { Outlet } from "react-router";
import { Sidebar } from "./sidebar";

export function Layout() {
  return (
    <SidebarProvider>
      <Sidebar />
      <SidebarInset>
        <Header />
        <main
          className={cn(
            "@container/main",
            "container",
            "mx-auto",
            "relative",
            "w-full",
            "flex",
            "flex-col",
            "flex-1",
            "px-2",
            "pt-4",
            "md:p-4",
            "lg:px-6",
            "lg:pt-6"
          )}
        >
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}

Layout.displayName = "Layout";
