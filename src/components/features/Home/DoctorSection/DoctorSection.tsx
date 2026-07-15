"use client";

import Image from "next/image";
import Link from "next/link";

const doctors = [
  {
    name: "Dr. Arjun Mehta",
    specialty: "Cardiologist",
    image: "/images/doctor1.jpeg",
    color: "bg-pink-500",
  },
  {
    name: "Dr. Priya Sharma",
    specialty: "Neurologist",
    image: "/images/doctor2.jpeg",
    color: "bg-blue-500",
  },
  {
    name: "Dr. Rahul Gupta",
    specialty: "Orthopedic",
    image: "/images/doctor1.jpeg",
    color: "bg-green-500",
  },
  {
    name: "Dr. Meera Singh",
    specialty: "Pediatrician",
    image: "/images/doctor2.jpeg",
    color: "bg-orange-500",
  },
];

export default function DoctorSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-16 text-center">
          <span className="inline-flex items-center rounded-full border border-[#1d9e75]/20 bg-gradient-to-r from-emerald-50 to-sky-50 px-5 py-2 text-sm font-semibold text-[#0f6e56]">
            👨‍⚕️ Our Specialists
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
            Meet Our Expert Doctors
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-500">
            Our experienced specialists provide world-class healthcare with
            compassion, expertise, and advanced medical technology.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          {doctors.map((doctor, index) => (
            <div
              key={doctor.name}
              className={`group relative rounded-3xl bg-white p-5 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl ${
                index % 2 === 1 ? "xl:mt-10" : ""
              }`}
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div
                  className={`h-8 w-8 rounded-full ${doctor.color} ring-4 ring-white`}
                />
              </div>

              <div className="mt-6 flex justify-center">
                <div className="relative h-44 w-32 overflow-hidden rounded-2xl bg-slate-100">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="mt-5 text-center">
                <h3 className="text-lg font-bold text-slate-900">
                  {doctor.name}
                </h3>

                <p className="mt-1 text-sm text-[#1d9e75] font-medium">
                  {doctor.specialty}
                </p>

                <div className="mt-4 border-t pt-4">
                  <div className="flex justify-center gap-5 text-xs text-slate-400">
                    <span>LinkedIn</span>
                    <span>Twitter</span>
                    <span>Email</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/doctors">
            <button className="rounded-xl bg-[#1d9e75] px-8 py-3 font-medium text-white shadow-lg transition hover:bg-[#0f6e56]">
              View All Doctors
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}