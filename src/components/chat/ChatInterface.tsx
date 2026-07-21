"use client";

import { FormEvent, useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  isFallback?: boolean;
}

const starterQuestions = [
  "What industries do you work with?",
  "How does pricing work?",
  "What makes you different from a typical MSP?",
  "Do you support businesses with multiple locations?",
];

const FALLBACK_MESSAGE =
  "Our AI assistant is temporarily unavailable. This usually means the backend service is offline or still being configured. Please reach out to us directly and a real person will help; see the contact details below.";

function makeId() {
  return Math.random().toString(36).slice(2);
}

export function ChatInterface() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [backendDown, setBackendDown] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  function scrollToBottom() {
    requestAnimationFrame(() => {
      scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
    });
  }

  async function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed || isSending) return;

    const userMessage: ChatMessage = { id: makeId(), role: "user", content: trimmed };
    const history = [...messages, userMessage];
    setMessages(history);
    setInput("");
    setIsSending(true);
    scrollToBottom();

    const assistantId = makeId();
    setMessages((prev) => [...prev, { id: assistantId, role: "assistant", content: "" }]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: history.map(({ role, content }) => ({ role, content })),
        }),
      });

      if (!res.ok || !res.body) {
        throw new Error("backend_unavailable");
      }

      const contentType = res.headers.get("content-type") ?? "";

      if (contentType.includes("application/json")) {
        const data = await res.json();
        // Accepts either `reply` (documented contract) or `text` (n8n's
        // default output field, e.g. Basic LLM Chain / Respond to Webhook
        // with "Respond With: First Incoming Item").
        const reply =
          typeof data.reply === "string"
            ? data.reply
            : typeof data.text === "string"
              ? data.text
              : FALLBACK_MESSAGE;
        setMessages((prev) => prev.map((m) => (m.id === assistantId ? { ...m, content: reply } : m)));
      } else {
        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let full = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          full += decoder.decode(value, { stream: true });
          setMessages((prev) => prev.map((m) => (m.id === assistantId ? { ...m, content: full } : m)));
          scrollToBottom();
        }
      }
    } catch {
      setBackendDown(true);
      setMessages((prev) =>
        prev.map((m) => (m.id === assistantId ? { ...m, content: FALLBACK_MESSAGE, isFallback: true } : m)),
      );
    } finally {
      setIsSending(false);
      scrollToBottom();
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    void sendMessage(input);
  }

  return (
    <div className="flex h-full w-full flex-col bg-white lg:mx-auto lg:h-[min(70vh,32rem)] lg:max-w-3xl lg:rounded-2xl lg:border lg:border-navy-900/10 lg:shadow-xl">
      <div className="flex items-center gap-3 border-b border-navy-900/10 px-4 py-4 sm:px-6">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-500/10 text-gold-600">
          <Icon name="assistant" className="h-5 w-5" />
        </span>
        <div>
          <p className="text-sm font-bold text-navy-900">Golden Data Systems Assistant</p>
          <p className="text-xs text-slate-500">Answers grounded in our own site content</p>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-4 py-6 sm:px-6">
        {messages.length === 0 && (
          <div>
            <p className="text-sm text-slate-500">Try asking:</p>
            <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              {starterQuestions.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => void sendMessage(q)}
                  className="min-h-[44px] rounded-full border border-navy-900/15 px-4 py-2 text-left text-sm text-navy-700 transition-colors hover:border-gold-500 hover:text-gold-700 sm:text-center"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((message) => (
          <div
            key={message.id}
            className={cn("flex", message.role === "user" ? "justify-end" : "justify-start")}
          >
            <div
              className={cn(
                "max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed sm:max-w-[75%]",
                message.role === "user"
                  ? "bg-navy-900 text-white"
                  : message.isFallback
                    ? "border border-amber-300 bg-amber-50 text-amber-900"
                    : "bg-slate-100 text-navy-900",
              )}
            >
              {message.content || (
                <span className="inline-flex gap-1">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-current" />
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-current [animation-delay:150ms]" />
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-current [animation-delay:300ms]" />
                </span>
              )}
            </div>
          </div>
        ))}

        {backendDown && (
          <p className="text-center text-xs text-slate-400">
            For account-specific or technical support, please{" "}
            <a href="/contact" className="font-semibold text-gold-600 underline">
              contact us directly
            </a>
            .
          </p>
        )}
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex items-end gap-2 border-t border-navy-900/10 px-4 py-3 sm:px-6"
        style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
      >
        <label htmlFor="chat-input" className="sr-only">
          Ask a question about Golden Data Systems
        </label>
        <textarea
          id="chat-input"
          rows={1}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              void sendMessage(input);
            }
          }}
          placeholder="Ask a question about our services, industries, or how we work..."
          className="max-h-32 min-h-[44px] flex-1 resize-none rounded-lg border border-navy-900/15 px-4 py-2.5 text-sm text-navy-900 outline-none focus:border-gold-500"
        />
        <button
          type="submit"
          disabled={isSending || !input.trim()}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold-500 text-navy-950 transition-colors hover:bg-gold-400 disabled:cursor-not-allowed disabled:opacity-50"
          aria-label="Send message"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 20l16-8L4 4v6l10 2-10 2v6Z" />
          </svg>
        </button>
      </form>
    </div>
  );
}
