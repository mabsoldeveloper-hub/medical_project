"use client";

import Link from "next/link";


import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";

export default function Footer() {
  const footerLinks = {
    Services: ["Consultation", "Lab Tests", "Pharmacy", "Emergency"],
    Company: ["About Us", "Doctors", "Blog", "Careers"],
    Support: ["Help Center", "Privacy Policy", "Terms", "Contact"],
  };

  return (
    <footer className="bg-[#1a1a2e] text-white ">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[#1d9e75] flex items-center justify-center">
                <LocalHospitalIcon fontSize="small" />
              </div>

              <h2 className="text-lg font-semibold">
                MediCare Pro
              </h2>
            </div>

            <p className="text-sm text-gray-400 leading-7 mb-4">
              Your trusted digital health partner. Quality care,
              anytime, anywhere. We connect patients with top
              specialists and make healthcare accessible for all.
            </p>

            <div className="space-y-2 text-sm text-gray-400">
              <p>📍 SCO-76, 2ND Floor, near, railway Crossing, Ekta Vihar, Sector 19, Panchkula, Haryana 134113</p>
              <p>📞 +91 98889 14287</p>
              <p>✉️ mabsolinfotech@gmail.com</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>

            <div className="flex flex-col gap-2">
              {footerLinks.Services.map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-sm text-gray-400 hover:text-[#1d9e75]"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>

            <div className="flex flex-col gap-2">
              {footerLinks.Company.map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-sm text-gray-400 hover:text-[#1d9e75]"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>

            <div className="flex flex-col gap-2">
              {footerLinks.Support.map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-sm text-gray-400 hover:text-[#1d9e75]"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-5 flex flex-col flex-wrap md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © 2026 Mabsol Infotech. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            <button className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center hover:bg-[#1d9e75]">
              <XIcon fontSize="small" />
            </button>

            <button className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center hover:bg-[#1d9e75]">
              <FacebookIcon fontSize="small" />
            </button>

            <button className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center hover:bg-[#1d9e75]">
              <LinkedInIcon fontSize="small" />
              
            </button>

            <button className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center hover:bg-[#1d9e75]">
              <YouTubeIcon fontSize="small" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}