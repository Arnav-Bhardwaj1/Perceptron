
import { defineApp } from "convex/server";
import agent from "@convex-dev/agent/convex.config";
import rag from "@convex-dev/rag/convex.config";

const app = defineApp(); // Define a Convex app instance, which will be used to register API routes and middleware. This is the main entry point for the backend logic of the application.
app.use(agent); // Register the agent middleware with the Convex app. This allows us to use the agent functionality in our API routes, enabling features like natural language processing and AI-driven interactions in our application.
app.use(rag); // Register the RAG (Retrieval-Augmented Generation) middleware with the Convex app. This allows us to use RAG functionality in our API routes, enabling features like enhanced information retrieval and generation capabilities in our application.

export default app; // Export the configured Convex app as the default export of this module, making it available for deployment and use in handling API requests.