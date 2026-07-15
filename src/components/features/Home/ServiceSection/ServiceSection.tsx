"use client";

import { ArrowRight } from "lucide-react";

const services = [
  {
    icon: "💊",
    title: "Pharmacy",
    desc: "Order medicines online with same-day delivery to your doorstep.",
    bg: "from-sky-100 to-cyan-50",
  },
  {
    icon: "🩺",
    title: "Consultation",
    desc: "Talk to qualified doctors via video, audio or chat instantly.",
    bg: "from-emerald-100 to-green-50",
  },
  {
    icon: "🧪",
    title: "Lab Tests",
    desc: "Book home sample collection for 500+ diagnostic tests.",
    bg: "from-yellow-100 to-amber-50",
  },
  {
    icon: "🏥",
    title: "Emergency",
    desc: "24/7 urgent care and ambulance services.",
    bg: "from-red-100 to-rose-50",
  },
  {
    icon: "🧠",
    title: "Mental Health",
    desc: "Professional therapists and counseling support.",
    bg: "from-violet-100 to-purple-50",
  },
  {
    icon: "👶",
    title: "Pediatrics",
    desc: "Specialized child healthcare and vaccinations.",
    bg: "from-pink-100 to-rose-50",
  },
  {
    icon: "🦷",
    title: "Dental Care",
    desc: "Comprehensive dental consultations and treatments.",
    bg: "from-orange-100 to-amber-50",
  },
  {
    icon: "🫀",
    title: "Cardiology",
    desc: "Advanced heart care and cardiac consultations.",
    bg: "from-cyan-100 to-sky-50",
  },
];

export default function ServiceSection() {
  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      <div className="absolute top-20 left-0 w-72 h-72 bg-cyan-100 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-100 rounded-full blur-3xl opacity-30" />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
<span className="inline-flex items-center rounded-full border border-[#1d9e75]/20 bg-gradient-to-r from-emerald-50 via-teal-50 to-sky-50 px-5 py-2 text-sm font-semibold text-[#0f6e56] shadow-md shadow-emerald-100">
  🏥 Our Medical Services
</span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-slate-900 ">
            Comprehensive
            <span className="text-[#1d9e75]"> Healthcare </span>
            Solutions
          </h2>

          <p className="mt-5 text-slate-600 text-lg leading-relaxed">
            Everything you need for your health and your family — delivered
            through one trusted healthcare platform.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white/80 backdrop-blur-sm border border-slate-200 rounded-3xl p-5 lg:p-6 hover:shadow-2xl hover:shadow-[#1d9e75]/10 hover:-translate-y-2 transition-all duration-300"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.bg} flex items-center justify-center text-3xl mb-5`}
              >
                {service.icon}
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-3">
                {service.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-5">
                {service.desc}
              </p>

              <div className="flex items-center text-[#1d9e75] font-semibold text-sm">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}