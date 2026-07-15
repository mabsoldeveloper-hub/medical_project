"use client";

import Link from "next/link";
import {
  Eye,
  EyeOff,
  Hospital,
  Mail,
  Lock,
} from "lucide-react";
import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-screen bg-[#f5f7fb] flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-6xl overflow-hidden rounded-[32px] bg-white shadow-[0_20px_80px_rgba(0,0,0,0.08)]">

        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">

          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1d9e75] text-white">
              <Hospital size={22} />
            </div>

            <h1 className="text-2xl font-bold text-slate-900">
              MediCare Pro
            </h1>
          </div>

          <p className="hidden sm:block text-sm text-slate-500">
            No account?{" "}
            <Link
              href="/register"
              className="font-semibold text-[#1d9e75]"
            >
              Sign up free →
            </Link>
          </p>
        </div>

        <div className="grid lg:grid-cols-2">

          <div className="hidden lg:flex flex-col items-center justify-center bg-gradient-to-br from-[#14795d] via-[#1d9e75] to-[#22b07d] px-12 py-16 text-center text-white">

            <div className="mb-8 flex h-28 w-28 items-center justify-center rounded-[28px] bg-white/20 backdrop-blur-xl">
              <Hospital size={58} />
            </div>

            <h2 className="text-5xl font-bold">
              Welcome Back
            </h2>

            <p className="mt-6 max-w-md text-lg text-white/80 leading-relaxed">
              Login to access your health records,
              appointments, prescriptions and
              medical reports securely.
            </p>

            <div className="mt-12 grid grid-cols-3 gap-5 w-full max-w-md">

              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-xl">
                <p className="text-2xl font-bold">24/7</p>
                <p className="text-sm text-white/70">
                  Support
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-xl">
                <p className="text-2xl font-bold">50k+</p>
                <p className="text-sm text-white/70">
                  Patients
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-xl">
                <p className="text-2xl font-bold">100%</p>
                <p className="text-sm text-white/70">
                  Secure
                </p>
              </div>

            </div>
          </div>

          <div className="px-6 py-10 md:px-10 lg:px-14 lg:py-14">

            <h2 className="text-4xl font-bold text-slate-900">
              Sign In
            </h2>

            <p className="mt-2 text-slate-500">
              Enter your credentials to continue
            </p>

            <form className="mt-10 space-y-5">

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="
                      w-full rounded-xl border border-slate-200
                      py-3 pl-11 pr-4 outline-none
                      transition-all
                      focus:border-[#1d9e75]
                      focus:ring-4
                      focus:ring-[#1d9e75]/10
                    "
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Password
                </label>

                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="
                      w-full rounded-xl border border-slate-200
                      py-3 pl-11 pr-12 outline-none
                      transition-all
                      focus:border-[#1d9e75]
                      focus:ring-4
                      focus:ring-[#1d9e75]/10
                    "
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">

                <label className="flex items-center gap-2 text-sm text-slate-600">
                  <input
                    type="checkbox"
                    className="rounded border-slate-300"
                  />
                  Remember me
                </label>

                <Link
                  href="/forgot-password"
                  className="text-sm font-medium text-[#1d9e75]"
                >
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="
                  w-full rounded-xl bg-[#1d9e75]
                  py-3.5 text-white font-semibold
                  transition-all duration-300
                  hover:bg-[#178a65]
                  hover:-translate-y-0.5
                  hover:shadow-lg
                "
              >
                Login
              </button>

              <div className="relative py-2">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200" />
                </div>

                <div className="relative flex justify-center">
                  <span className="bg-white px-4 text-sm text-slate-400">
                    or continue with
                  </span>
                </div>
              </div>

              <button
                type="button"
                className="
                  flex w-full items-center justify-center gap-3
                  rounded-xl border border-slate-200
                  py-3 font-medium text-slate-700
                  transition hover:bg-slate-50
                "
              >
                < Lock size={18} />
                Google
              </button>

              <p className="text-center text-sm text-slate-500 lg:hidden">
                Don`t have an account?
                <Link
                  href="/signup"
                  className="font-semibold text-[#1d9e75]"
                >
                  Create one
                </Link>
              </p>

            </form>
          </div>

        </div>
      </div>
    </main>
  );
}

