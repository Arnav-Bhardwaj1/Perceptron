import {
  HTML_SCRIPT,
  type IntegrationId,
  JAVASCRIPT_SCRIPT,
  NEXTJS_SCRIPT,
  REACT_SCRIPT,
} from "./constants";

export const createScript = ( // This function generates a script tag for a given integration and organization ID. The function checks the integration ID and returns the corresponding script with the organization ID inserted, allowing users to easily integrate the necessary script into their applications based on their chosen framework.
  integrationId: IntegrationId,
  organizationId: string,
) => {
  if (integrationId === "html") {
    return HTML_SCRIPT.replace(/{{ORGANIZATION_ID}}/g, organizationId);
  }
  if (integrationId === "react") {
    return REACT_SCRIPT.replace(/{{ORGANIZATION_ID}}/g, organizationId);
  }
  if (integrationId === "nextjs") {
    return NEXTJS_SCRIPT.replace(/{{ORGANIZATION_ID}}/g, organizationId);
  }
  if (integrationId === "javascript") {
    return JAVASCRIPT_SCRIPT.replace(/{{ORGANIZATION_ID}}/g, organizationId);
  }

  return "";
};