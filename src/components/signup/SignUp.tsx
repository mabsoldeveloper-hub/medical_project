"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { getAccessToken, getStoredUser, saveAuthSession, signupUser } from "@/lib/api";

const formFields = [
  {
    label: "First Name",
    name: "firstName",
    type: "text",
    placeholder: "Raj",
  },
  {
    label: "Last Name",
    name: "lastName",
    type: "text",
    placeholder: "Verma",
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "you@example.com",
    fullWidth: true,
  },
  {
    label: "Phone",
    name: "phone",
    type: "tel",
    placeholder: "+91 12345 67210",
    fullWidth: true,
  },
  {
    label: "Password",
    name: "password",
    type: "password",
    placeholder: "••••••••",
    fullWidth: true,
  },
];

const socialButtons = [
  {
    name: "Google",
  },
  {
    name: "Facebook",
  },
];

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
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
      const result = await signupUser({
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        password: formData.password,
        role: "patient",
      });

      if (result.data) {
        saveAuthSession(result.data);
      }

      setSuccess(result.message);
      router.push("/");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Signup failed.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isCheckingAuth) {
    return null;
  }

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-4 lg:p-8">
      <div className="w-full max-w-7xl overflow-hidden rounded-2xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
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
            Have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-emerald-600 hover:text-emerald-700"
            >
              Login →
            </Link>
          </p>
        </header>

        <section className="grid lg:grid-cols-2">
          <div className="hidden bg-gradient-to-br from-emerald-800 via-emerald-700 to-emerald-500 lg:flex items-center justify-center">
            <div className="max-w-md px-10 text-center text-white">
              <div className="mb-10 flex justify-center">
                <Sparkles size={70} />
              </div>

              <h2 className="mb-6 text-5xl font-bold leading-tight">
                Join MediCare Pro
              </h2>

              <p className="text-lg leading-8 text-emerald-50">
                Access 500+ doctors, book tests, manage prescriptions,
                and monitor your healthcare journey all in one place.
              </p>
            </div>
          </div>

          <div className="p-6 lg:p-12 xl:p-16">
            <div className="mx-auto max-w-xl">
              <div className="mb-10">
                <h2 className="text-4xl font-bold text-slate-900">
                  Create Account
                </h2>

                <p className="mt-2 text-slate-500">
                  Start your healthcare journey today
                </p>
              </div>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  {formFields.map((field) => (
                    <div
                      key={field.name}
                      className={field.fullWidth ? "md:col-span-2" : ""}
                    >
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
                        required={field.name !== "phone"}
                        className="w-full rounded-xl border border-slate-300 px-4 py-3.5 text-sm outline-none transition-all duration-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                      />
                    </div>
                  ))}
                </div>

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

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl bg-emerald-600 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-emerald-700"
                >
                  {isSubmitting ? "Creating account..." : "Create Account"}
                </button>

                <div className="relative py-3">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-200" />
                  </div>

                  <div className="relative flex justify-center">
                    <span className="bg-white px-4 text-sm text-slate-500">
                      or sign up with
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {socialButtons.map((button) => (
                    <button
                      key={button.name}
                      type="button"
                      className="rounded-xl border border-slate-300 py-3 font-medium text-slate-700 transition hover:bg-slate-50"
                    >
                      {button.name}
                    </button>
                  ))}
                </div>

                <p className="pt-3 text-center text-sm text-slate-500">
                  By creating an account, you agree to our{" "}
                  <span className="font-medium text-slate-700">
                    Terms of Service
                  </span>{" "}
                  and{" "}
                  <span className="font-medium text-slate-700">
                    Privacy Policy
                  </span>.
                </p>
              </form>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
