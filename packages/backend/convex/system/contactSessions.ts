import { ConvexError, v } from "convex/values";
import { internalMutation, internalQuery } from "../_generated/server";
import { SESSION_DURATION_MS } from "../constants";

const AUTO_REFRESH_THRESHOLD_MS = 10 * 60 * 60 * 1000;

export const refresh = internalMutation({
  args: {
    contactSessionId: v.id("contactSessions"),
  },
  handler: async (ctx, args) => {
    const contactSession = await ctx.db.get(args.contactSessionId);

    if (!contactSession) {
      throw new ConvexError({
        code: "NOT_FOUND",
        message: "Contact session not found",
      });
    }

    if (contactSession.expiresAt < Date.now()) {
      throw new ConvexError({
        code: "BAD_REQUEST",
        message: "Contact session expired",
      });
    }

    const timeRemaining = contactSession.expiresAt - Date.now();

    if (timeRemaining < AUTO_REFRESH_THRESHOLD_MS) {
      const newExpiresAt = Date.now() + SESSION_DURATION_MS;

      await ctx.db.patch(args.contactSessionId, {
        expiresAt: newExpiresAt,
      });

      return { ...contactSession, expiresAt: newExpiresAt };
    }

    return contactSession;
  },
});

export const getOne = internalQuery({
  args: {
    contactSessionId: v.id("contactSessions"),
  },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.contactSessionId); // This query retrieves a contact session from the database using its ID. It takes a single argument, `contactSessionId`, which is validated as an ID of the "contactSessions" collection. This is used to validate and manage contact sessions for users interacting with the support system.
  },
});