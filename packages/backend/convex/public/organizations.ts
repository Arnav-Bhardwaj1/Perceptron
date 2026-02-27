import { v } from "convex/values";
import { createClerkClient } from "@clerk/backend";

import { action } from "../_generated/server";

const clerkClient = createClerkClient({
  secretKey: process.env.CLERK_SECRET_KEY,
});

// why action and not mutation? Because this action does not modify the database, it only validates the organizationId with Clerk API and returns a boolean. Mutations are typically used for operations that change the database state, while actions are used to call external APIs (like clerk) or perform operations that do not directly modify the database, but they can indirectly call queries and mutations.
export const validate = action({ 
  args: {
    organizationId: v.string(),
  },
  handler: async (_, args) => {
    try {
      await clerkClient.organizations.getOrganization({
        organizationId: args.organizationId,
      });

      return { valid: true };
    } catch (error) {
      return { valid: false, reason: "Organization not found" };
    }
  },
});