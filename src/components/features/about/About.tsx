"use client";

import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";


const aboutCards = [
    {
        title: "Our Mission",
        description:
            "Deliver affordable, high-quality healthcare to every individual through digital innovation.",
        icon: <TrackChangesIcon fontSize="small" />,
    },
    {
        title: "Our Vision",
        description:
            "A world where no one is denied care due to distance or cost.",
        icon: <VisibilityIcon fontSize="small" />,
    },
    {
        title: "Our Values",
        description:
            "Compassion, transparency and excellence in every interaction.",
        icon: <FavoriteIcon fontSize="small" />,
    },
    {
        title: "Our Approach",
        description:
            "Data-driven, patient-first, technology-powered healthcare.",
        icon: <MedicalServicesIcon fontSize="small" />,
    },
];

const teamMembers = [
    {
        name: "Amit Kumar",
        role: "CEO & Founder",
        avatar: "👨‍⚕️",
    },
    {
        name: "Dr. Meera Singh",
        role: "Chief Medical Officer",
        avatar: "👩‍⚕️",
    },
    {
        name: "Rohit Das",
        role: "CTO",
        avatar: "👨‍💻",
    },
];

export default function AboutSection() {
    return (
        <section className="bg-[#f5f7fa] min-h-screen">
            <div className="bg-linear-to-r from-emerald-800 to-emerald-500 text-white px-6 md:px-12 py-12 md:py-16">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">
                        About MediCare Pro
                    </h1>

                    <p className="max-w-3xl text-sm md:text-base leading-7 text-emerald-50">
                        We are on a mission to make quality healthcare accessible to
                        everyone. Founded in 2020, we have helped thousands of patients
                        connect with trusted healthcare professionals through innovative
                        digital solutions.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {aboutCards.map((card) => (
                        <div
                            key={card.title}
                            className="
                bg-white
                border
                border-gray-200
                border-t-4
                border-t-emerald-500
                rounded-2xl
                p-6
                md:p-7
                hover:shadow-lg
                transition-all
                duration-300
              "
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                                    {card.icon}
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        {card.title}
                                    </h3>

                                    <p className="text-sm text-gray-600 leading-7">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

<div className="mt-16">
  <div className="mb-16 text-center">
    <span className="inline-flex items-center rounded-full border border-emerald-200 bg-gradient-to-r from-emerald-50 to-sky-50 px-5 py-2 text-sm font-semibold text-emerald-700">
      👨‍💻 Our Team
    </span>

    <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
      Meet Our Expert Team
    </h2>

    <p className="mx-auto mt-4 max-w-2xl text-slate-500">
      Dedicated professionals working together to deliver exceptional
      healthcare experiences and innovative medical solutions.
    </p>
  </div>

  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
    {teamMembers.map((member, index) => (
      <div
        key={member.name}
        className={`group relative rounded-3xl bg-white p-5 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl ${
          index % 2 === 1 ? "xl:mt-10" : ""
        }`}
      >
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="h-8 w-8 rounded-full bg-emerald-500 ring-4 ring-white" />
        </div>

        <div className="mt-6 flex justify-center">
          <div className="flex h-36 w-36 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-50 to-sky-50 text-6xl shadow-inner">
            {member.avatar}
          </div>
        </div>

        <div className="mt-5 text-center">
          <h3 className="text-xl font-bold text-slate-900">
            {member.name}
          </h3>

          <p className="mt-1 text-sm font-medium text-emerald-600">
            {member.role}
          </p>

          <div className="mt-4 border-t border-slate-100 pt-4">
            <div className="flex justify-center gap-5 text-xs text-slate-400">
              <span className="cursor-pointer hover:text-emerald-600">
                LinkedIn
              </span>
              <span className="cursor-pointer hover:text-emerald-600">
                Email
              </span>
              <span className="cursor-pointer hover:text-emerald-600">
                Profile
              </span>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
            </div>
        </section>
    );
}