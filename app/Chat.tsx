"use client";

import { useChat } from "ai/react";

function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex flex-col max-w-xl px-8 mx-auto">
      {messages.map((message) => (
        <div key={message.id}>
          <p>
            {message.role === "user" ? "👤" : "🤖"}
            {message.content}
          </p>
        </div>
      ))}
      <form onSubmit={handleSubmit} className="fixed bottom-4 w-full border-2">
        <label htmlFor="content" className="mr-4">
          Promp:
        </label>
        <input
          type="text"
          name="content"
          value={input}
          onChange={handleInputChange}
          className="max-w-xs px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs"
        />
      </form>
    </div>
  );
}

export default Chat;
