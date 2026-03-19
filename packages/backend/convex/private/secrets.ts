import { ConvexError, v } from "convex/values";
import { mutation } from "../_generated/server";
import { internal } from "../_generated/api";

export const upsert = mutation({
  args: {
    service: v.union(v.literal("vapi")),
    value: v.any(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
        
    if (identity === null) {
      throw new ConvexError({
        code: "UNAUTHORIZED",
        message: "Identity not found",
      });
    }

    const orgId = identity.orgId as string;

    if (!orgId) {
      throw new ConvexError({
        code: "UNAUTHORIZED",
        message: "Organization not found",
      });
    }

    // TODO: Check for subscription

    await ctx.scheduler.runAfter(0, internal.system.secrets.upsert, { // We use a scheduled action to ensure that the secret is upserted after the current transaction commits, which avoids potential issues with reading the secret immediately after writing it in the same transaction. transaction means the sequence of actions and queries that are triggered by a single client request. If we were to read the secret in the same transaction after writing it, we might encounter a race condition where the read happens before the write has fully committed, leading to stale data being read. By scheduling the upsert to run after the current transaction, we ensure that the secret is fully committed and available for subsequent reads.
      service: args.service,
      organizationId: orgId,
      value: args.value,
    });
  },
});