import Siteheader from "@/components/mainUI/site_header";
import Aboutsection from "@/components/mainUI/about_section";
import Ctaindex from "@/components/mainUI/cta_index";
import Calendermain from "@/components/mainUI/calender_display";
import NewCarousel from "@/components/mainUI/newCarousel";
import { Footer } from "@/components/mainUI/footer";
import HaircutPriceBoard from "@/components/mainUI/prices";


export default function Home() {
  const backgroundImage = "/images/backgroundImage-1.png";

  return (
    <>
      <Siteheader />
      <Ctaindex title="Haircuts and Beauty Services" />
      <Aboutsection />
      <NewCarousel />
      <Ctaindex title="On-demand Haircuts Based on Availabilty" />
      <Calendermain />
      <div className="container flex justify-center items-center w-full"></div>      
      <Ctaindex title="Schedule your haircut now!"/>
      {/* <AppointmentsComponent /> */}
      <div className="flex justify-center bg-cover" style={{ backgroundImage: `url(${backgroundImage})` }} id="prices-section">
        <HaircutPriceBoard />
      </div>
      <Ctaindex title="El Leon De Nueva Yol!"/>
      <Footer />
    </>
  );
}
