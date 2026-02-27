import { atom } from "jotai";
import { WidgetScreen } from "../types";
// import { atomWithStorage } from "jotai/ts3.8/esm/vanilla/utils/atomWithStorage";
import { atomFamily, atomWithStorage } from "jotai/utils";
import { CONTACT_SESSION_KEY } from "../constants";
import { Id } from "@workspace/backend/_generated/dataModel";

//  Basic widget state atoms
export const screenAtom = atom<WidgetScreen>("loading"); // Current screen in the widget (e.g., auth, chat, etc.), we store this in a jotai atom to allow for easy state management across the widget components. The default screen is set to "loading" to validate the organization and session before showing other screens.

export const errorMessageAtom = atom<string | null>(null); // Atom to hold any error messages that may occur during the widget's operation, such as during authentication or API calls. It is initialized to null, indicating no errors.  

export const loadingMessageAtom = atom<string | null>(null); // Atom to hold loading messages that can be displayed to the user during various stages of the widget's operation, such as while validating the organization or contact session. It is initialized to null, indicating no loading state.

// Organization-scoped contact session atom
export const contactSessionIdAtomFamily = atomFamily((organizationId: string) => atomWithStorage<Id<"contactSessions">|null>(`${CONTACT_SESSION_KEY}_${organizationId}`, null)) // This is an atom family that creates a separate atom for each organization ID. Each atom stores the contact session ID for that specific organization in localStorage, using a key that combines a constant prefix with the organization ID. This allows the widget to manage contact sessions on a per-organization basis, ensuring that sessions are correctly scoped and do not interfere with each other across different organizations.

export const organizationIdAtom = atom<string | null>(null); // Atom to store the organization ID that is being used in the widget. This is important for scoping the widget's functionality to a specific organization. It is initialized to null, indicating that no organization has been set yet.

export const conversationIdAtom = atom<Id<"conversations"> | null>(null); // Atom to store the current conversation ID in the widget. This allows different components of the widget to access and update the conversation ID as needed, such as when a new conversation is created or when messages are sent. It is initialized to null, indicating that no conversation has been started yet.