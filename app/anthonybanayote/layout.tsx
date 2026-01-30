
"use client";

import { useEffect } from "react";

export default function N8nChatClient() {
  useEffect(() => {
    // Create script element
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js";
    script.type = "module";

    script.onload = () => {
      // @ts-ignore
      if (window.createChat) {
        // @ts-ignore
        window.createChat({
          webhookUrl: "",
          target: "#n8n-chat",
          mode: "window",
          showWelcomeScreen: false,
          loadPreviousSession: false,
          initialMessages: [
            "Hi there! 👋",
            "Ask me anything about this automation magic!"
          ],
          i18n: {
            en: {
              title: "Oh hey! 👋",
              subtitle: "Are you ready for some magic?!",
              getStarted: "Start Chat",
              inputPlaceholder: "Type your message...",
            },
          },
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="n8n-chat"></div>;
}
