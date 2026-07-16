"use client"

import Image from "next/image";
import Link from "next/link";

const stats = [
  { num: "1K+", label: "Happy Patients" },
  { num: "20+", label: "Expert Doctors" },
  { num: "24/7", label: "Support Available" },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f0fdf9] via-[#e0f2fe] to-[#f8fafb] px-4 py-12 md:px-6 lg:px-10 lg:pt-20 lg:pb-0">
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-[#1d9e75]/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#185e9a]/10 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-end gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="pb-8 lg:pb-16">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#e1f5ee] px-4 py-2 text-xs font-medium text-[#0f6e56] md:text-sm">
            {/* <span>🏥</span> */}
            {/* <span>Trusted Healthcare Platform</span> */}
          </div>

          <h1 className="mb-5 text-4xl font-bold leading-tight text-[#1a1a2e] sm:text-5xl lg:text-6xl">
            {/* Your Health, */}
            <br />
            <span className="text-[#1d9e75]">Our Priority</span>
          </h1>

          <p className="mb-8 max-w-xl text-sm leading-7 text-gray-600 md:text-base">
            Connect with top specialists, book appointments instantly,
            and manage your health records — all in one place.
            Trusted by over 50,000 patients across India.
          </p>

          <div className="mb-10 flex flex-wrap gap-4">
            <Link href="/contact">
              <button className="rounded-xl bg-[#1d9e75] px-7 py-3 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#0f6e56]">
                Book Appointment
              </button>
            </Link>

            <Link href="/doctors">
              <button className="rounded-xl border border-[#1d9e75] bg-white px-7 py-3 text-sm font-medium text-[#1d9e75] transition-all duration-300 hover:bg-[#e1f5ee]">
                View Doctors
              </button>
            </Link>
          </div>

          <div className="flex flex-wrap gap-8">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold text-[#1a1a2e]">
                  {s.num}
                </div>
                <div className="text-sm text-gray-500">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden h-full self-end md:flex items-end justify-center lg:justify-end">
          <Image
            src="/images/doctor.png"
            alt="Doctor"
            width={600}
            height={750}
            priority
            className="block w-full max-w-[560px] object-contain"
          />

          <div className="absolute left-0 top-16 rounded-2xl border border-white bg-white/90 p-5 shadow-2xl backdrop-blur-md">
            <div className="text-2xl font-bold text-[#1d9e75]">
              20+
            </div>
            <div className="text-sm text-gray-500">
              Expert Doctors
            </div>
          </div>

          <div className="absolute right-0 bottom-20 rounded-2xl border border-white bg-white/90 p-5 shadow-2xl backdrop-blur-md">
            <div className="text-2xl font-bold text-[#1d9e75]">
              24/7
            </div>
            <div className="text-sm text-gray-500">
              Patient Support
            </div>
          </div>

          <div className="absolute left-10 bottom-40 rounded-2xl border border-white bg-white/90 p-4 shadow-xl backdrop-blur-md">
            <div className="text-lg font-bold text-[#1d9e75]">
              1K+
            </div>
            <div className="text-xs text-gray-500">
              Happy Patients
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}