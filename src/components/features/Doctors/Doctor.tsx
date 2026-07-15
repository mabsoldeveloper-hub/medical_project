"use client";

import { useState } from "react";
import Image from "next/image";

const departments = [
  "All",
  "Cardiology",
  "Neurology",
  "Orthopedic",
  "Pediatrics",
  "Dermatology",
  "Gynecology",
  "Oncology",
  "Psychiatry",
  "Radiology",

];

const doctors = [
  {
    id: 1,
    name: "Dr. Arjun Mehta",
    department: "Cardiology",
    image: "/images/doctor1.jpeg",
  },
  {
    id: 2,
    name: "Dr. Priya Sharma",
    department: "Neurology",
    image: "/images/doctor.png",
  },
  {
    id: 3,
    name: "Dr. Rahul Singh",
    department: "Orthopedic",
    image: "/images/doctor1.jpeg",
  },
  {
    id: 4,
    name: "Dr. Neha Gupta",
    department: "Pediatrics",
    image: "/images/doctor2.jpeg",
  },
];

export default function DoctorsPage() {
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  const filteredDoctors =
    selectedDepartment === "All"
      ? doctors
      : doctors.filter(
          (doctor) => doctor.department === selectedDepartment
        );

  return (
    <section className="px-4 py-12 md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-center text-4xl font-bold">
          Our Doctors
        </h2>

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {departments.map((department) => (
            <button
              key={department}
              onClick={() => setSelectedDepartment(department)}
              className={`rounded-full px-6 py-3 text-sm font-medium transition-all
                ${
                  selectedDepartment === department
                    ? "bg-[#1d9e75] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-[#1d9e75] hover:text-white"
                }`}
            >
              {department}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredDoctors.map((doctor) => (
            <div
              key={doctor.id}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition hover:-translate-y-2"
            >
              <Image
                src={doctor.image}
                alt={doctor.name}
                width={1920}
                height={1080}
                className="h-64 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="text-lg font-semibold">
                  {doctor.name}
                </h3>

                <p className="mt-1 text-sm text-[#1d9e75]">
                  {doctor.department}
                </p>

                <button className="mt-4 w-full rounded-lg bg-[#1d9e75] py-3 text-white">
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}