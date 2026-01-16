"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setSuccess(true);

      // تحويل بعد ثانيتين
      setTimeout(() => {
        router.push("/chat");
      }, 1500);
    } catch (err: any) {
      if (err.code === "auth/wrong-password") {
        setError("Incorrect password");
      } else if (err.code === "auth/user-not-found") {
        setError("No account found with this email");
      } else {
        setError("Login failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex">
      {/* Left */}
      <div className="hidden md:flex w-1/3 bg-red-600 text-white flex-col justify-between p-8">
        <div className="text-2xl font-bold">Moment</div>
        <p className="text-red-100">Snap and share with friends →</p>
      </div>

      {/* Right */}
      <div className="flex-1 flex items-center justify-center bg-blue-800">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-6 text-red-500">
            Sign into your account
          </h2>

          {/* Success message */}
          {success && (
            <div className="mb-4 rounded-md bg-green-500 text-white px-4 py-2 text-sm">
              ✅ Logged in successfully!
            </div>
          )}

          {/* Error message */}
          {error && (
            <div className="mb-4 rounded-md bg-red-100 text-red-600 px-4 py-2 text-sm">
              ❌ {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email */}
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="w-full rounded-md border px-3 py-2 text-black focus:ring-2 focus:ring-red-500"
            />

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full rounded-md border px-3 py-2 pr-10 text-black focus:ring-2 focus:ring-red-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-2 text-gray-500"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-red-500 text-white py-2 rounded-md font-semibold hover:bg-red-600 transition disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-4">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-red-500 font-semibold">
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
