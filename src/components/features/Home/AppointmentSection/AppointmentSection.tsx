"use client";

import { useState } from "react";
import Image from "next/image";

export default function AppointmentSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    department: "",
    date: "",
  });

  const departments = [
    "Cardiology",
    "Neurology",
    "Orthopedic",
    "Pediatrics",
    "Dermatology",
    "Gynecology",
    "Dentistry",
    "General Medicine",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f0fdf9] via-white to-[#e0f2fe] py-20 lg:py-28">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center rounded-full border border-[#1d9e75]/20 bg-gradient-to-r from-emerald-50 to-sky-50 px-5 py-2 text-sm font-semibold text-[#0f6e56] shadow-sm">
              📅 Appointment Booking
            </span>

            <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              Book an Appointment
            </h2>

            <p className="mt-4 max-w-xl text-slate-500">
              Schedule your consultation with our trusted specialists and
              receive expert medical care without long waiting times.
            </p>

            <div className="mt-8 rounded-3xl border border-white/60 bg-white/80 p-6 shadow-2xl backdrop-blur-xl lg:p-8">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Full Name
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition-all focus:border-[#1d9e75] focus:ring-4 focus:ring-[#1d9e75]/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    type="tel"
                    placeholder="+91 9876543210"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition-all focus:border-[#1d9e75] focus:ring-4 focus:ring-[#1d9e75]/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Department
                  </label>
                  <select
                    name="department"
                    value={form.department}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition-all focus:border-[#1d9e75] focus:ring-4 focus:ring-[#1d9e75]/10"
                  >
                    <option value="">Select Department</option>

                    {departments.map((dept) => (
                      <option key={dept}>{dept}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Preferred Date
                  </label>
                  <input
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    type="date"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition-all focus:border-[#1d9e75] focus:ring-4 focus:ring-[#1d9e75]/10"
                  />
                </div>
              </div>

              <button className="mt-6 w-full rounded-xl bg-gradient-to-r from-[#1d9e75] to-[#0f6e56] py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                Confirm Booking
              </button>
            </div>
          </div>

          <div className="relative hidden lg:flex justify-center">
            <div className="relative">
              <Image
                src="/images/appoint.png"
                alt="Doctor"
                width={550}
                height={650}
                className="object-contain"
              />

              <div className="absolute left-0 top-16 rounded-2xl bg-white p-5 shadow-xl">
                <div className="text-2xl font-bold text-[#1d9e75]">
                  500+
                </div>
                <div className="text-sm text-gray-500">
                  Specialists
                </div>
              </div>

              <div className="absolute right-0 bottom-20 rounded-2xl bg-white p-5 shadow-xl">
                <div className="text-2xl font-bold text-[#1d9e75]">
                  24/7
                </div>
                <div className="text-sm text-gray-500">
                  Support
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}