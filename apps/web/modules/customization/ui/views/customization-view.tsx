"use client";

import { api } from "@workspace/backend/_generated/api";
import { useQuery } from "convex/react";
import { CustomizationForm } from "../components/customization-form";
import { LoadingScreen } from "@/components/loading-screen";

export const CustomizationView = () => {
  const widgetSettings = useQuery(api.private.widgetSettings.getOne);
  const vapiPlugin = useQuery(api.private.plugins.getOne, { service: "vapi" });

  const isLoading = widgetSettings === undefined || vapiPlugin === undefined;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-muted/50 dark:bg-transparent">
        <LoadingScreen message="Loading settings..." />
      </div>
    );
  }

  return (
    <div className="flex h-full w-full flex-1 flex-col overflow-y-auto bg-muted/50 dark:bg-transparent p-8">
      <div className="mx-auto w-full max-w-3xl">
        <div className="space-y-2">
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight">Widget Customization</h1>
          <p className="text-muted-foreground">
            Customize how your chat widget looks and behaves for your customers
          </p>
        </div>

        <div className="mt-8">
          <CustomizationForm
            initialData={widgetSettings}
            hasVapiPlugin={!!vapiPlugin}
          />
        </div>
      </div>
    </div>
  );
};