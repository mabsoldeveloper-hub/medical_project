"use client";

import CountUp from "react-countup";
import {
    CalendarDays,
    Stethoscope,
    ShieldCheck,
    Clock3,
    Users,
    HeartPulse,
    BriefcaseMedical,
    ArrowRight,
} from "lucide-react";

export default function ServicesPage() {
    const steps = [
        {
            icon: <Stethoscope size={28} />,
            title: "Find A Doctor",
            desc: "Search experienced doctors based on specialization and location.",
        },
        {
            icon: <CalendarDays size={28} />,
            title: "Book Appointment",
            desc: "Schedule appointments quickly at your preferred time.",
        },
        {
            icon: <BriefcaseMedical size={28} />,
            title: "Get Services",
            desc: "Receive quality healthcare services tailored to your needs.",
        },
    ];

    const services = [
        "General Consultation",
        "Cardiology Care",
        "Dental Treatment",
        "Emergency Support",
        "Laboratory Tests",
        "Online Consultation",
    ];

    const stats = [
        { value: 20, suffix: "+", label: "Doctors" },
        { value: 100, suffix: "+", label: "Patients" },
        { value: 10, suffix: "+", label: "Specialists" },
        { value: 99, suffix: "%", label: "Satisfaction" },
    ];

    return (
        <main>


            <section className="py-14">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold">How It Works!</h2>

                        <p className="mx-auto mt-4 max-w-2xl text-gray-500">
                            Discover, book, and experience personalized healthcare
                            effortlessly with our user-friendly platform.
                        </p>
                    </div>

                    <div className="relative mt-20">
                        <div className="absolute left-1/2 top-10 hidden w-[70%] -translate-x-1/2 border-t-2 border-dotted border-gray-300 lg:block"></div>

                        <div className="grid gap-12 md:grid-cols-3">
                            {steps.map((step, index) => (
                                <div key={index} className="text-center">
                                    <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-2xl bg-white shadow-lg">
                                        <div className="text-[#1d9e75]">{step.icon}</div>

                                        <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#1d9e75] text-sm font-bold text-white">
                                            {index + 1}
                                        </span>
                                    </div>

                                    <h3 className="mt-6 text-2xl font-semibold">
                                        {step.title}
                                    </h3>

                                    <p className="mt-3 text-gray-500">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 py-14">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <span className="text-[#1d9e75] font-semibold">
                            OUR SERVICES
                        </span>

                        <h2 className="mt-3 text-4xl font-bold">
                            Healthcare Solutions
                        </h2>
                    </div>

                    <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {services.map((service) => (
                            <div
                                key={service}
                                className="group rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                            >
                                <HeartPulse className="mb-4 text-[#1d9e75]" size={36} />

                                <h3 className="text-xl font-semibold">{service}</h3>

                                <p className="mt-3 text-gray-500">
                                    Professional healthcare services delivered by experienced
                                    medical specialists.
                                </p>

                                <div className="mt-5 flex items-center gap-2 text-[#1d9e75]">
                                    Learn More
                                    <ArrowRight size={18} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#1d9e75] py-10 text-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
                        {stats.map((item, index) => (
                            <div key={index}>
                                <h3 className="text-3xl font-bold sm:text-4xl">
                                    <CountUp
                                        end={item.value}
                                        duration={3}
                                        separator=","
                                        suffix={item.suffix}
                                        enableScrollSpy
                                        scrollSpyOnce
                                    />
                                </h3>

                                <p className="mt-2 text-sm sm:text-base">
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid gap-10 lg:grid-cols-3">
                        <div className="rounded-2xl border p-8">
                            <ShieldCheck className="text-[#1d9e75]" size={40} />
                            <h3 className="mt-4 text-xl font-semibold">
                                Trusted Doctors
                            </h3>
                            <p className="mt-2 text-gray-500">
                                Verified specialists with years of experience.
                            </p>
                        </div>

                        <div className="rounded-2xl border p-8">
                            <Clock3 className="text-[#1d9e75]" size={40} />
                            <h3 className="mt-4 text-xl font-semibold">
                                Quick Booking
                            </h3>
                            <p className="mt-2 text-gray-500">
                                Schedule appointments within minutes.
                            </p>
                        </div>

                        <div className="rounded-2xl border p-8">
                            <Users className="text-[#1d9e75]" size={40} />
                            <h3 className="mt-4 text-xl font-semibold">
                                Patient Focused
                            </h3>
                            <p className="mt-2 text-gray-500">
                                Personalized care designed around your needs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


        </main>
    );
}