import { createTool } from "@convex-dev/agent";
import z from "zod";
import { internal } from "../../../_generated/api";
import { supportAgent } from "../agents/supportAgent";

export const resolveConversation = createTool({ // createTool is a function that creates a tool that can be used by the agent. It takes an object with a description, args, and handler. The description is a string that describes what the tool does. The args is a zod schema that defines the arguments that the tool takes. The handler is a function that is called when the tool is invoked. It takes a context object and the arguments defined by the schema.
  description: "Resolve a conversation",
  args: z.object({}),
  handler: async (ctx) => {
    if (!ctx.threadId) {
      return "Missing thread ID";
    }

    await ctx.runMutation(internal.system.conversations.resolve, {
      threadId: ctx.threadId,
    });

    await supportAgent.saveMessage(ctx, {
      threadId: ctx.threadId,
      message: {
        role: "assistant",
        content: "Conversation resolved.",
      }
    });

    return "Conversation resolved";
  },
});