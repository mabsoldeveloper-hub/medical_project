import HeroSection from "@/components/features/Home/HeroSection/Herosection";
import ServiceSection from "@/components/features/Home/ServiceSection/ServiceSection";
import DoctorSection from "@/components/features/Home/DoctorSection/DoctorSection";
import AppointmentSection from "@/components/features/Home/AppointmentSection/AppointmentSection";



export default function Home() {
  return (
   <div>

    <HeroSection />
    <ServiceSection />
    <DoctorSection />
    <AppointmentSection />

   </div>

  );
}