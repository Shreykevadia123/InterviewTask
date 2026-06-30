import { useState, type FormEvent } from "react";
import { fetchLiveAIResponse } from "../utils/api";

type Message = {
  id: string;
  role: "user" | "assistant";
  text: string;
};

function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const prompt = input.trim();
    if (!prompt || isLoading) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      text: prompt,
    };

    setMessages((current) => [...current, userMessage]);
    setInput("");
    setError("");
    setIsLoading(true);

    try {
      const response = await fetchLiveAIResponse(prompt);

      const assistantMessage: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        text: response,
      };

      setMessages((current) => [...current, assistantMessage]);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main>
      <h1>AI Chat</h1>

      <section>
        {messages.map((message) => (
          <div key={message.id}>
            <strong>{message.role === "user" ? "You" : "AI"}</strong>
            <p>{message.text}</p>
          </div>
        ))}

        {isLoading && <p>AI is thinking...</p>}
        {error && <p role="alert">{error}</p>}
      </section>

      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          disabled={isLoading}
          placeholder="Type your message..."
        />
        <button type="submit" disabled={isLoading || !input.trim()}>
          Send
        </button>
      </form>
    </main>
  );
}

export default ChatInterface;