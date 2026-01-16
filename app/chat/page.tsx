"use client";

import ChatHeader from "./components/ChatHeader";
import Sidebar from "./components/Sidebar";
import Messages from "./components/Messages";
import MessageInput from "./components/MessageInput";
import StreakBanner from "./components/StreakBanner";
import useAuthGuard from "./hooks/useAuthGuard";

export default function ChatPage() {
  useAuthGuard();

  return (
    <div className="min-h-screen bg-blue-900 text-white flex flex-col">
      <ChatHeader />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 flex flex-col">
          <Messages />
          <MessageInput />
        </main>
      </div>
      <StreakBanner />
    </div>
  );
}
