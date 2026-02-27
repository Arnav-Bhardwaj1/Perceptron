
import { defineApp } from "convex/server";
import agent from "@convex-dev/agent/convex.config";

const app = defineApp(); // Define a Convex app instance, which will be used to register API routes and middleware. This is the main entry point for the backend logic of the application.
app.use(agent); // Register the agent middleware with the Convex app. This allows us to use the agent functionality in our API routes, enabling features like natural language processing and AI-driven interactions in our application.

export default app;