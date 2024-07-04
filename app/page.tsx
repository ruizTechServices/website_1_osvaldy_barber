import Siteheader from "@/components/mainUI/site_header";
import Aboutsection from "@/components/mainUI/about_section";
import Ctaindex from "@/components/mainUI/cta_index";
import Calendermain from "@/components/mainUI/calender_display";
import NewCarousel from "@/components/mainUI/newCarousel";


export default function Home() {
  return (
    <>
      <Siteheader />
      <Ctaindex title="Haircuts and Beauty Services" />
      <Aboutsection />
      <NewCarousel /> 
      <Ctaindex title="On-demand Haircuts Based on Availabilty" />
      <Calendermain />
      <div className="container flex justify-center items-center w-full">
      </div>
      <hr/>
      <div className="flex flex-col items-center justify-center gap-10 mt-10 bg-black text-white h-[500px]">
        <h1 className="text-6xl">Call today to book an appointment!</h1>
        <p className="text-2xl">(347)347-3477</p>
        <h2 className="text-3xl">Online schedule, payments, & bookings coming soon!</h2>
      </div>
    </>

  );
}
