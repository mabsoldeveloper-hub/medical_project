"use client";

import { useState } from "react";



const contactInfo = [
    {
        icon: "📍",
        title: "Visit Us",
        lines: ["SCO-76, 2ND Floor, near, railway Crossing, Ekta Vihar, Sector 19, Panchkula, Haryana 134113"],
        color: "#e1f5ee",
    },
    {
        icon: "📞",
        title: "Call Us",
        lines: ["+91 9888914283", "+91 9357815181"],
        color: "#e0f2fe",
    },
    {
        icon: "✉️",
        title: "Email Us",
        lines: ["mabsolinfotech@gmail.com", "support@mabsolinfotech.com"],
        color: "#fff7ed",
    },
    {
        icon: "🕐",
        title: "Working Hours",
        lines: ["Mon – Sat: 10AM – 7PM"],
        color: "#ede9fe",
    },
];


const faqs = [
    {
        q: "How do I book an appointment?",
        a: "Use our Book Appointment form, call us, or message on WhatsApp. We confirm within 30 minutes.",
    },
    {
        q: "Can I consult a doctor online?",
        a: "Yes — video, audio and chat consultations are available 24/7 for most specialties.",
    },
    {
        q: "What are the consultation charges?",
        a: "Charges vary by specialist. General consultations start at ₹299. You'll see pricing before confirming.",
    },
    {
        q: "Is my medical data secure?",
        a: "Absolutely. We follow HIPAA-compliant standards. Your data is encrypted and never shared.",
    },
];

function FaqItem({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div
            className={`border rounded-xl overflow-hidden transition-all duration-200 ${open ? "border-primary shadow-[0_4px_16px_rgba(29,158,117,0.08)]" : "border-med-border"
                }`}
        >
            <button
                className="w-full flex items-center justify-between px-5 py-4 text-left bg-white cursor-pointer border-none"
                onClick={() => setOpen(!open)}
            >
                <span className="text-sm font-semibold text-med-text pr-4">{q}</span>
                <span
                    className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-200 ${open ? "bg-primary text-white rotate-45" : "bg-primary-light text-primary"
                        }`}
                >
                    +
                </span>
            </button>
            {open && (
                <div className="px-5 pb-4 bg-white">
                    <p className="text-sm text-med-muted leading-relaxed border-t border-med-border pt-3">{a}</p>
                </div>
            )}
        </div>
    );
}


export default function ContactPage() {

    return (
        <div className="min-h-screen bg-white font-sans">

    
            <section className="relative overflow-hidden bg-gradient-to-br from-[#0F766E] via-[#169976] to-[#22C55E]">
                <div className="absolute inset-0 opacity-[0.04]">
                    <div className="absolute inset-0 bg-[url('/images/grid.svg')]" />
                </div>

                <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-emerald-300/20 blur-3xl" />

               

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-20 lg:py-28">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        <div>

                            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl px-5 py-2 text-white mb-6 shadow-lg">
                                <span className="animate-pulse">💬</span>
                                <span className="text-sm font-medium">
                                    Contact Our Healthcare Team
                                </span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                Let`s Talk About
                                <span className="block text-white/75">
                                    Your Health
                                </span>
                            </h1>

                            <p className="mt-6 max-w-xl text-white/80 text-base leading-relaxed">
                                Need medical assistance, want to schedule an appointment,
                                or have questions about our services? Our healthcare
                                specialists are available to help you every step of the way.
                            </p>

                            <div className="mt-10 grid grid-cols-3 gap-4">

                                <div className="rounded-2xl bg-white/10 backdrop-blur-xl p-4 border border-white/10">
                                    <p className="text-2xl font-bold text-white">
                                        30m
                                    </p>
                                    <p className="text-xs text-white/70 mt-1">
                                        Avg Response
                                    </p>
                                </div>

                                <div className="rounded-2xl bg-white/10 backdrop-blur-xl p-4 border border-white/10">
                                    <p className="text-2xl font-bold text-white">
                                        24/7
                                    </p>
                                    <p className="text-xs text-white/70 mt-1">
                                        Emergency Care
                                    </p>
                                </div>

                                <div className="rounded-2xl bg-white/10 backdrop-blur-xl p-4 border border-white/10">
                                    <p className="text-2xl font-bold text-white">
                                        4.9★
                                    </p>
                                    <p className="text-xs text-white/70 mt-1">
                                        Patient Rating
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div className="relative hidden lg:block">

                            <div
                                className="
      rounded-[30px]
      bg-white
      p-6
      shadow-[0_20px_60px_rgba(0,0,0,0.12)]
      border border-white/50
    "
                            >
                                <h3 className="text-2xl font-bold text-slate-900 mb-8">
                                    Send a Message
                                </h3>

                                <form className="space-y-3">

                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">
                                            Your Name
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            className="
            w-full
            rounded-xl
            border border-slate-200
            px-2 py-3
            outline-none
            transition-all
            focus:border-[#1d9e75]
            focus:ring-4
            focus:ring-[#1d9e75]/10
          "
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">
                                            Email Address
                                        </label>

                                        <input
                                            type="email"
                                            placeholder="Email Address"
                                            className="
            w-full
            rounded-xl
            border border-slate-200
            px-4 py-3
            outline-none
            transition-all
            focus:border-[#1d9e75]
            focus:ring-4
            focus:ring-[#1d9e75]/10
          "
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">
                                            Subject
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="Subject"
                                            className="
            w-full
            rounded-xl
            border border-slate-200
            px-4 py-3
            outline-none
            transition-all
            focus:border-[#1d9e75]
            focus:ring-4
            focus:ring-[#1d9e75]/10
          "
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">
                                            Message
                                        </label>

                                        <textarea
                                            rows={5}
                                            placeholder="Write your message..."
                                            className="
            w-full
            resize-none
            rounded-xl
            border border-slate-200
            px-4 py-3
            outline-none
            transition-all
            focus:border-[#1d9e75]
            focus:ring-4
            focus:ring-[#1d9e75]/10
          "
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="
          w-full
          rounded-xl
          bg-[#1d9e75]
          py-4
          font-semibold
          text-white
          transition-all
          hover:bg-[#188964]
          hover:shadow-lg
          hover:-translate-y-0.5
        "
                                    >
                                        Send Message
                                    </button>

                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 -mt-8 relative z-10 mb-20">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {contactInfo.map((item) => (
                        <div
                            key={item.title}
                            className="
          group relative overflow-hidden
          rounded-3xl
          border border-[#E5F2EE]
          bg-gradient-to-b from-white to-[#F8FCFB]
          p-5 sm:p-6
          shadow-sm
          transition-all duration-300
          hover:-translate-y-2
          hover:shadow-xl
        "
                        >
                            <div
                                className="absolute left-0 top-0 h-1 w-full"
                                style={{
                                    background: item.color,
                                }}
                            />

                            <div
                                className="
            mb-5 flex h-14 w-14 items-center justify-center
            rounded-2xl text-2xl
            transition-transform duration-300
            group-hover:scale-110
          "
                                style={{
                                    background: item.color,
                                }}
                            >
                                {item.icon}
                            </div>

                            <h3 className="mb-2 text-sm font-semibold text-gray-900">
                                {item.title}
                            </h3>

                            <div className="space-y-1">
                                {item.lines.map((line) => (
                                    <p
                                        key={line}
                                        className="text-xs sm:text-sm text-gray-600 leading-relaxed"
                                    >
                                        {line}
                                    </p>
                                ))}
                            </div>

                            <div
                                className="
            absolute -right-10 -top-10
            h-24 w-24 rounded-full
            opacity-0 blur-3xl
            transition-opacity duration-300
            group-hover:opacity-30
          "
                                style={{
                                    background: item.color,
                                }}
                            />
                        </div>
                    ))}
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-10">
                <div className="grid lg:grid-cols-[1.8fr_420px] gap-8">

                    <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)]">

                        <div className="flex items-center justify-between flex-wrap gap-4 px-7 py-5 border-b border-slate-100 bg-gradient-to-r from-[#ecfdf5] to-[#f0fdf4]">
                            <div>
                                <span className="inline-flex items-center gap-2 text-xs font-medium text-[#1d9e75] bg-white px-3 py-1 rounded-full border">
                                    📍 Our Location
                                </span>

                                <p className="text-sm text-slate-500 mt-1">
                                  SCO-76, 2ND Floor, near, railway Crossing, Ekta Vihar, Sector 19, Panchkula, Haryana 134113
                                </p>
                            </div>

                            <a
                                href="https://maps.google.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-xl bg-[#1d9e75] px-5 py-3 text-sm font-medium text-white no-underline transition hover:scale-105"
                            >
                                Open Maps →
                            </a>
                        </div>

                        <div className="relative h-[500px]">

                            <div className="absolute inset-0 bg-gradient-to-br from-[#d1fae5] via-[#ecfdf5] to-[#e0f2fe] flex items-center justify-center">

                                <div className="text-center">
                                    <div className="text-7xl mb-4">
                                        🗺️
                                    </div>

                                    <h3 className="text-xl font-semibold text-slate-900">
                                        Interactive Google Map
                                    </h3>

                                    <p className="text-slate-500 mt-2">
                                        Replace this area with Google Maps iframe
                                    </p>
                                </div>
                            </div>

                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full">

                                <div className="relative">
                                    <div className="absolute inset-0 rounded-full bg-[#1d9e75] animate-ping opacity-40" />

                                    <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#1d9e75] text-white text-2xl shadow-xl">
                                        📍
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5">

                        <div className="group relative overflow-hidden rounded-[28px] border border-green-100 bg-gradient-to-br from-green-50 to-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">

                            <div className="absolute top-0 left-0 h-1 w-full bg-green-500" />

                            <div className="flex items-center gap-4 mb-5">

                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500 text-white text-2xl">
                                    💬
                                </div>

                                <div>
                                    <h3 className="font-bold text-slate-900">
                                        WhatsApp Support
                                    </h3>

                                    <p className="text-sm text-slate-500">
                                        Fastest Response
                                    </p>
                                </div>
                            </div>

                            <p className="text-sm text-slate-600 leading-relaxed mb-5">
                                Send reports, ask questions and book appointments directly.
                            </p>

                            <a
                                href="#"
                                className="flex items-center justify-center rounded-xl bg-green-500 py-3 font-medium text-white no-underline transition hover:bg-green-600"
                            >
                                Open WhatsApp
                            </a>
                        </div>

                        <div className="group relative overflow-hidden rounded-[28px] border border-red-100 bg-gradient-to-br from-red-50 to-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">

                            <div className="absolute top-0 left-0 h-1 w-full bg-red-500" />

                            <div className="flex items-center gap-4 mb-5">

                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500 text-white text-2xl">
                                    🚑
                                </div>

                                <div>
                                    <h3 className="font-bold text-slate-900">
                                        Emergency Hotline
                                    </h3>

                                    <p className="text-sm text-red-500">
                                        Available 24×7
                                    </p>
                                </div>
                            </div>

                            <p className="text-sm text-slate-600 leading-relaxed mb-5">
                                Immediate ambulance and emergency medical assistance.
                            </p>

                            <a
                                href="#"
                                className="flex items-center justify-center rounded-xl bg-red-500 py-3 font-medium text-white no-underline transition hover:bg-red-600"
                            >
                                Call Now
                            </a>
                        </div>

                        
                    </div>

                </div>
            </section>



            <section className="relative overflow-hidden py-10 lg:py-20">

                <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f8fffc] to-[#eefcf7]" />

                <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-emerald-100 blur-3xl opacity-60" />
                <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-100 blur-3xl opacity-60" />

                <div className="absolute top-24 left-[8%] hidden lg:block animate-pulse">
                    <div className="h-14 w-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-2xl">
                        ❓
                    </div>
                </div>

                <div className="absolute bottom-24 right-[10%] hidden lg:block animate-bounce">
                    <div className="h-14 w-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-2xl">
                        💬
                    </div>
                </div>

                <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">

                    <div className="text-center mb-14">

                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-emerald-100 shadow-sm text-sm font-medium text-[#1d9e75] mb-5">
                            <span>❓</span>
                            Frequently Asked Questions
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                            Got Questions?
                        </h2>

                        <p className="mt-4 text-slate-600 max-w-4xl mx-auto leading-relaxed">
                            Find quick answers about appointments, consultations,
                            emergency services, insurance coverage, and patient care.
                        </p>

                        <div className="flex justify-center mt-8">
                           
                        </div>

                    </div>

                    <div className="space-y-2">

                        {faqs.map((faq) => (
                            <div
                                key={faq.q}
                                className="
            rounded-3xl
            border border-white
            bg-white/80
            backdrop-blur-xl
            shadow-sm
            hover:shadow-lg
            transition-all duration-300
          "
                            >
                                <FaqItem q={faq.q} a={faq.a} />
                            </div>
                        ))}

                    </div>

                </div>
            </section>

        </div>
    );
}
