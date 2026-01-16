export default function Sidebar() {
  return (
    <aside className="w-72 bg-blue-800 border-r border-blue-700 p-4">
      <h2 className="text-sm font-semibold text-red-400 mb-3">Friends Streak</h2>

      <div className="bg-blue-900 p-3 rounded-md mb-4 hover:bg-blue-700 transition cursor-pointer">
        <p className="text-sm font-medium">Streak with IEySoB</p>
        <p className="text-xs text-gray-300">Nothing yet...</p>
      </div>

      <h2 className="text-sm font-semibold text-red-400 mb-3">Group Chats</h2>

      <div className="bg-blue-900 p-3 rounded-md hover:bg-blue-700 transition cursor-pointer">
        <p className="text-sm font-medium">Streak with IEySoB</p>
        <p className="text-xs text-gray-300">2 members, 1 online</p>
      </div>
    </aside>
  );
}
