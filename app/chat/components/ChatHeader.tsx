"use client";

import { signOut } from "firebase/auth";
import { auth } from "@/app/login/firebase";

export default function ChatHeader() {
  return (
    <header className="h-14 flex items-center justify-between px-6 bg-blue-950 border-b border-blue-800">
      <h1 className="font-bold text-lg text-red-500">Moment</h1>

      <button
        onClick={() => signOut(auth)}
        className="bg-red-600 px-4 py-1.5 rounded-md text-sm hover:bg-red-700"
      >
        Log Out
      </button>
    </header>
  );
}
