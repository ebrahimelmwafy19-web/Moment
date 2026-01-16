"use client";

import { useState } from "react";

export default function MessageInput() {
  const [text, setText] = useState("");

  return (
    <div className="p-4 border-t border-blue-800 bg-blue-950">
      <div className="flex gap-3">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type your message"
          className="flex-1 rounded-md px-3 py-2 text-black"
        />
        <button className="bg-red-600 px-4 rounded-md hover:bg-red-700">
          Send
        </button>
      </div>
    </div>
  );
}
