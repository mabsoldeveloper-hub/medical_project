"use client";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Calendar, Mail, Phone, Save, Shield, User } from "lucide-react";

import {
  clearAuthSession,
  getCurrentUser,
  getStoredUser,
  updateCurrentUser,
  updateStoredUser,
  UserProfile,
} from "@/lib/api";

type ProfileForm = {
  name: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  role: string;
};

const emptyForm: ProfileForm = {
  name: "",
  email: "",
  phone: "",
  dateOfBirth: "",
  role: "",
};

function toDateInputValue(value?: string | null) {
  if (!value) {
    return "";
  }

  return value.slice(0, 10);
}

function toForm(user: UserProfile): ProfileForm {
  return {
    name: user.name || "",
    email: user.email || "",
    phone: user.phone || "",
    dateOfBirth: toDateInputValue(user.dateOfBirth),
    role: user.role || "",
  };
}

export default function Profile() {
  const router = useRouter();
  const [formData, setFormData] = useState<ProfileForm>(emptyForm);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const storedUser = getStoredUser();

    if (!storedUser) {
      router.push("/login");
      return;
    }

    setFormData(toForm(storedUser));

    getCurrentUser()
      .then((result) => {
        if (result.data?.user) {
          updateStoredUser(result.data.user);
          setFormData(toForm(result.data.user));
        }
      })
      .catch((err) => {
        setError(err instanceof Error ? err.message : "Could not load profile.");

        if (err instanceof Error && err.message.toLowerCase().includes("token")) {
          clearAuthSession();
          router.push("/login");
        }
      })
      .finally(() => setIsLoading(false));
  }, [router]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    setIsSaving(true);

    try {
      const result = await updateCurrentUser({
        name: formData.name,
        phone: formData.phone,
        dateOfBirth: formData.dateOfBirth,
      });

      if (result.data?.user) {
        updateStoredUser(result.data.user);
        setFormData(toForm(result.data.user));
      }

      setSuccess(result.message);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not update profile.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10 md:px-8">
      <section className="mx-auto max-w-5xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              My Account
            </p>
            <h1 className="mt-2 text-4xl font-bold text-slate-900">
              Profile
            </h1>
          </div>

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-600 text-2xl font-bold text-white">
            {formData.name?.charAt(0).toUpperCase() || "U"}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                <User size={26} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  {formData.name || "User"}
                </h2>
                <p className="text-sm text-slate-500">{formData.email}</p>
              </div>
            </div>

            <div className="mt-6 space-y-4 text-sm">
              <div className="flex items-center gap-3 text-slate-600">
                <Mail size={18} className="text-emerald-600" />
                <span>{formData.email || "No email"}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <Phone size={18} className="text-emerald-600" />
                <span>{formData.phone || "No phone added"}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <Calendar size={18} className="text-emerald-600" />
                <span>{formData.dateOfBirth || "No date of birth added"}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <Shield size={18} className="text-emerald-600" />
                <span className="capitalize">{formData.role || "patient"}</span>
              </div>
            </div>
          </aside>

          <form
            onSubmit={handleSubmit}
            className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-2xl font-bold text-slate-900">
              Edit Profile
            </h2>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <label className="block md:col-span-2">
                <span className="mb-2 block text-sm font-semibold text-slate-700">
                  Full Name
                </span>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  minLength={2}
                  maxLength={50}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700">
                  Email
                </span>
                <input
                  value={formData.email}
                  disabled
                  className="w-full rounded-lg border border-slate-200 bg-slate-100 px-4 py-3 text-sm text-slate-500 outline-none"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700">
                  Role
                </span>
                <input
                  value={formData.role}
                  disabled
                  className="w-full rounded-lg border border-slate-200 bg-slate-100 px-4 py-3 text-sm capitalize text-slate-500 outline-none"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700">
                  Phone
                </span>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength={20}
                  placeholder="+91 98765 43210"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700">
                  Date of Birth
                </span>
                <input
                  name="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                />
              </label>
            </div>

            {error && (
              <p className="mt-5 rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                {error}
              </p>
            )}

            {success && (
              <p className="mt-5 rounded-lg bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
                {success}
              </p>
            )}

            <button
              type="submit"
              disabled={isLoading || isSaving}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-slate-300"
            >
              <Save size={18} />
              {isSaving ? "Saving..." : "Save Changes"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
