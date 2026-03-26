// Giving the following options doesnt make sense as if you can do it in javascript, you can do it in html by just pasting the script tag. We can add more complex integrations in the future that would require different code snippets for each framework, but for now we can just have one snippet for all of them. In other words: right now, having both HTML and JavaScript integrations feels a bit redundant since they use almost the same script tag. This would make more sense once we add framework-specific integrations like React, Next.js, WordPress, or Shopify, where the setup actually differs.
export const INTEGRATIONS = [
  {
    id: "html",
    title: "HTML",
    icon: "/languages/html5.svg",
  },
  {
    id: "react",
    title: "React",
    icon: "/languages/react.svg",
  },
  {
    id: "nextjs",
    title: "Next.js",
    icon: "/languages/nextjs.svg",
  },
  {
    id: "javascript",
    title: "JavaScript",
    icon: "/languages/javascript.svg",
  },
];

export type IntegrationId = (typeof INTEGRATIONS)[number]["id"]; // means the type IntegrationId can only be one of the "id" values from the INTEGRATIONS array, which are "html", "react", "nextjs", or "javascript". This is useful for type safety when working with integrations in the codebase, ensuring that only valid integration IDs are used.

export const HTML_SCRIPT = `<script src="http://localhost:3001/widget.js" data-organization-id="{{ORGANIZATION_ID}}"></script>`;
export const REACT_SCRIPT = `<script src="http://localhost:3001/widget.js" data-organization-id="{{ORGANIZATION_ID}}"></script>`;
export const NEXTJS_SCRIPT = `<script src="http://localhost:3001/widget.js" data-organization-id="{{ORGANIZATION_ID}}"></script>`;
export const JAVASCRIPT_SCRIPT = `<script src="http://localhost:3001/widget.js" data-organization-id="{{ORGANIZATION_ID}}"></script>`;