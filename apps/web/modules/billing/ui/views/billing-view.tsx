"use client";

import { PricingTable } from "../components/pricing-table";

export const BillingView = () => {
  return (
    <div className="flex min-h-screen flex-col bg-muted/50 dark:bg-transparent p-8">
      <div className="mx-auto w-full max-w-4xl">
        <div className="space-y-2 mb-10">
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight">
            Plans & Billing
          </h1>
          <p className="text-muted-foreground">
            Choose the plan that&apos;s right for you
          </p>
        </div>

        <PricingTable />
      </div>
    </div>
  );
};
