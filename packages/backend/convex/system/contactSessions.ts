import { v } from "convex/values";
import { internalQuery } from "../_generated/server";

export const getOne = internalQuery({
  args: {
    contactSessionId: v.id("contactSessions"),
  },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.contactSessionId); // This query retrieves a contact session from the database using its ID. It takes a single argument, `contactSessionId`, which is validated as an ID of the "contactSessions" collection. This is used to validate and manage contact sessions for users interacting with the support system.
  },
});