"use client";

import { PricingTable as ClerkPricingTable } from "@clerk/nextjs";

export const PricingTable = () => {
  return (
    <div className="clerk-pricing-wrapper flex flex-col items-center justify-center gap-y-4">
      <ClerkPricingTable
        for="organization"
        appearance={{
          elements: {
            pricingTable: "gap-6!",
            pricingTableCard:
              "shadow-none! rounded-2xl! dark:bg-[#12121f]! dark:border-white/10! border! overflow-hidden!",
            pricingTableCardHeader:
              "dark:bg-[#12121f]! bg-background! dark:border-white/8!",
            pricingTableCardBody:
              "dark:bg-[#12121f]! bg-background!",
            pricingTableCardFooter:
              "dark:bg-[#12121f]! bg-background! dark:border-white/8!",
            pricingTableCardName:
              "dark:text-white!",
            pricingTableCardPrice:
              "dark:text-white!",
            pricingTableCardPricePeriod:
              "dark:text-[#94a3b8]!",
            pricingTableCardSubtitle:
              "dark:text-[#94a3b8]!",
            pricingTableCardFeatureListItem:
              "dark:text-[#cbd5e1]!",
            pricingTableCardFeatureListItemIcon:
              "dark:text-[#f97316]!",
            pricingTableCardActionButton:
              "dark:bg-gradient-to-r! dark:from-[#9a3412]! dark:via-[#c2410c]! dark:to-[#ea580c]! rounded-full! dark:border-none! dark:shadow-[0_2px_6px_rgba(0,0,0,0.3)]! dark:hover:shadow-[0_4px_12px_rgba(0,0,0,0.4)]! transition-all! duration-200!",
            badge:
              "dark:bg-[#f97316]! dark:text-white! rounded-full!",
          },
        }}
      />
    </div>
  );
};
