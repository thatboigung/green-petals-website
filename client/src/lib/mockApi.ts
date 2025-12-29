import { insertContactSchema, type ContactMessage } from "@shared/schema";

const STORAGE_KEY = "mock:contactMessages";

function loadMessages(): ContactMessage[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveMessages(messages: ContactMessage[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
}

export async function handleApiRequest(
  method: string,
  path: string,
  body?: unknown,
): Promise<Response> {
  if (path === "/api/contact" && method.toUpperCase() === "POST") {
    try {
      const data = insertContactSchema.parse(body);
      const messages = loadMessages();
      const nextId = (messages.at(-1)?.id ?? 0) + 1;
      const created: ContactMessage = {
        id: nextId,
        name: data.name,
        email: data.email,
        message: data.message,
        platform: data.platform ?? "web",
        createdAt: new Date().toISOString(),
      } as ContactMessage;

      messages.push(created);
      saveMessages(messages);

      return new Response(JSON.stringify(created), {
        status: 201,
        headers: { "Content-Type": "application/json" },
      });
    } catch (err: any) {
      return new Response(JSON.stringify({ message: err?.message ?? "Invalid" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }
  }

  // Fallback: unknown endpoint
  return new Response(JSON.stringify({ message: "Not Found" }), {
    status: 404,
    headers: { "Content-Type": "application/json" },
  });
}
