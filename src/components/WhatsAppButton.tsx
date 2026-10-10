import { whatsappLink } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <a
      className="wa-fab"
      href={whatsappLink("Hello, I need to know more about:")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
        <path d="M12.04 2a9.9 9.9 0 0 0-8.43 15.1L2 22l5.05-1.32A9.9 9.9 0 1 0 12.04 2Zm5.8 14.04c-.24.69-1.4 1.32-1.93 1.37-.5.05-1.12.07-1.8-.11-.41-.12-.94-.3-1.62-.6-2.85-1.23-4.7-4.1-4.85-4.29-.14-.19-1.15-1.53-1.15-2.92 0-1.39.73-2.07.99-2.35.26-.28.56-.35.75-.35h.54c.17 0 .41-.07.64.49.24.58.82 2 .89 2.14.07.14.12.31.02.5-.1.19-.14.31-.28.47-.14.17-.3.37-.43.5-.14.14-.29.29-.12.57.17.28.74 1.22 1.59 1.97 1.09.97 2.01 1.27 2.3 1.41.28.14.45.12.61-.07.17-.19.71-.83.9-1.11.19-.28.38-.23.64-.14.26.1 1.65.78 1.94.92.28.14.47.21.54.33.07.12.07.69-.17 1.38Z" />
      </svg>
    </a>
  );
}
