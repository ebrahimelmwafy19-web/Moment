import Link from "next/link";

export default function Landing() {
  return (
    <main className="min-h-screen flex flex-col bg-blue-800">
      {/* Top Bar */}
      <header className="h-16 px-7 flex items-center justify-between border-b border-blue-500">
        <div className="font-bold text-lg text-red-500">
          Moment
        </div>

        <Link
          href="#"
          className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white hover:bg-red-700 transition"
        >
          Source Code
        </Link>
      </header>

      {/* Hero */}
      <section className="flex-1 flex items-center justify-center px-4 text-center">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-red-500">
            Snap, Share, and Stay Connected
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-sm md:text-base text-red-300 leading-relaxed">
            Open, snap, and share — fast, fun communication without clutter.
            Capture moments instantly and share them with your friends in a
            flash.
          </p>

          <div className="mt-10 flex gap-4 justify-center flex-col sm:flex-row">
            <Link
              href="/login"
              className="rounded-md bg-red-500 px-6 py-3 font-semibold text-white hover:bg-red-600 transition"
            >
              Log in
            </Link>

            <Link
              href="/signup"
              className="rounded-md bg-red-400 px-6 py-3 font-semibold text-white hover:bg-red-500 transition"
            >
              Create Account
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
