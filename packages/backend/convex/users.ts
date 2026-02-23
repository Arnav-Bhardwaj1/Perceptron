import { mutation, query } from "./_generated/server";

export const getMany = query({
  args: {},
  handler: async (ctx) => {
  const users = await ctx.db.query("users").collect();
  return users;
  },
});

export const add = mutation({
  args: {},
  handler: async (ctx) => {
    const identity = ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Not authenticated");
    } 
    const user = await ctx.db.insert("users", {
      name: "AB",
    });
    return user;
  }
})