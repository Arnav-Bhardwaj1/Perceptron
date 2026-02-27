import { defineSchema, defineTable } from "convex/server";
import {v} from "convex/values";

export default defineSchema({
  conversations: defineTable({
    threadId: v.string(),
    organizationId: v.string(),
    contactSessionId: v.id("contactSessions"),
    status: v.union(
      v.literal("unresolved"), // literal means the value must be exactly this string, we use it for status to ensure it can only be one of these three values
      v.literal("escalated"),
      v.literal("resolved")
    ),
  })
    .index("by_organization_id", ["organizationId"])
    .index("by_contact_session_id", ["contactSessionId"])
    .index("by_thread_id", ["threadId"])
    .index("by_status_and_organization_id", ["status", "organizationId"]),
  contactSessions: defineTable({
    name: v.string(),
    email: v.string(),
    organizationId: v.string(),
    expiresAt: v.number(),
    metadata: v.optional(v.object({ // metadata is the info we can get from user's browser
      userAgent: v. optional (v.string()), // userAgent identifies the browser & its version
      language: v.optional (v.string()),
      languages: v.optional (v.string()),
      platform: v.optional (v.string()), // platform identifies the OS
      vendor: v.optional(v.string()), // vendor identifies the browser's vendor
      screenResolution: v.optional(v.string()),
      viewportSize: v.optional(v.string()),
      timezone: v.optional (v.string()),
      timezoneOffset: v.optional(v.number()),
      cookieEnabled: v.optional(v.boolean()),
      referrer: v.optional (v.string()), // referrer is the URL of the page that linked to the current page
      currentUrl: v.optional (v.string()),
  }))
}).index("by_expires_At", ["expiresAt"]) // we can query contactSessions by expiresAt to get all the expired contact sessions and delete them
  .index("by_organizationId", ["organizationId"]), // we can query contactSessions by organizationId to get all the contact sessions of an organization
  users: defineTable({
    name: v.string(),
  }),
});