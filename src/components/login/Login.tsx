"use client";

import Link from "next/link";
import { Building2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { getAccessToken, getStoredUser, loginUser, saveAuthSession } from "@/lib/api";

const loginFields = [
  {
    label: "Email address",
    name: "email",
    type: "email",
    placeholder: "you@example.com",
  },
  {
    label: "Password",
    name: "password",
    type: "password",
    placeholder: "••••••••",
  },
];

const socialProviders = [
  {
    name: "Google",
    icon: "G",
  },
];

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    if (getStoredUser() || getAccessToken()) {
      router.replace("/profile");
      return;
    }

    setIsCheckingAuth(false);
  }, [router]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    setIsSubmitting(true);

    try {
      const result = await loginUser(formData);

      if (result.data) {
        saveAuthSession(result.data);
      }

      setSuccess(result.message);
      router.push("/");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isCheckingAuth) {
    return null;
  }

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-4 lg:p-8">
      <div className="w-full max-w-6xl overflow-hidden rounded-2xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
        {/* Header */}
        <header className="flex items-center justify-between border-b border-slate-200 px-6 py-5 lg:px-10">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600">
              <div className="h-4 w-4 rounded-full bg-white" />
            </div>

            <h1 className="text-2xl font-bold text-slate-900">
              MediCare Pro
            </h1>
          </div>

          <p className="text-sm text-slate-600">
            No account?{" "}
            <Link
              href="/signup"
              className="font-semibold text-emerald-600 hover:text-emerald-700"
            >
              Sign up free →
            </Link>
          </p>
        </header>

        {/* Content */}
        <section className="grid lg:grid-cols-2">
          {/* Left Side */}
          <div className="hidden lg:flex bg-gradient-to-br from-emerald-800 via-emerald-700 to-emerald-500 items-center justify-center">
            <div className="max-w-md text-center text-white px-10">
              <div className="flex justify-center mb-8">
                <Building2 size={72} />
              </div>

              <h2 className="text-5xl font-bold mb-5">
                Welcome Back
              </h2>

              <p className="text-lg leading-8 text-emerald-50">
                Login to access your health records,
                appointments, prescriptions and more.
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="p-6 lg:p-12 xl:p-16">
            <div className="mx-auto max-w-lg">
              <div className="mb-10">
                <h2 className="text-5xl font-bold text-slate-900">
                  Sign in
                </h2>

                <p className="mt-2 text-slate-500">
                  Enter your credentials to continue
                </p>
              </div>

              <form className="space-y-5" onSubmit={handleSubmit}>
                {loginFields.map((field) => (
                  <div key={field.name}>
                    <label
                      htmlFor={field.name}
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      {field.label}
                    </label>

                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-slate-300 px-4 py-3.5 text-sm outline-none transition-all duration-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                    />
                  </div>
                ))}

                {error && (
                  <p className="rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                    {error}
                  </p>
                )}

                {success && (
                  <p className="rounded-lg bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
                    {success}
                  </p>
                )}

                <div className="flex justify-end">
                  <Link
                    href="/forgot-password"
                    className="text-sm font-medium text-emerald-600 hover:text-emerald-700"
                  >
                    Forgot password?
                  </Link>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl bg-emerald-600 py-3.5 font-semibold text-white transition hover:bg-emerald-700"
                >
                  {isSubmitting ? "Logging in..." : "Login"}
                </button>

                {/* Divider */}
                <div className="relative py-2">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-200" />
                  </div>

                  <div className="relative flex justify-center">
                    <span className="bg-white px-4 text-sm text-slate-500">
                      or continue with
                    </span>
                  </div>
                </div>

                {/* Social */}
                {socialProviders.map((provider) => (
                  <button
                    key={provider.name}
                    type="button"
                    className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-300 py-3.5 font-medium text-slate-700 transition hover:bg-slate-50"
                  >
                    <span className="text-xl font-semibold">
                      {provider.icon}
                    </span>

                    {provider.name}
                  </button>
                ))}

                <p className="pt-2 text-center text-sm text-slate-500">
                  Don&apos;t have an account?{" "}
                  <Link
                    href="/signup"
                    className="font-medium text-emerald-600 hover:text-emerald-700"
                  >
                    Create one
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
