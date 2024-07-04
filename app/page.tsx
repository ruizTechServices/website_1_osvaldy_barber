import Siteheader from "@/components/mainUI/site_header";
import Aboutsection from "@/components/mainUI/about_section";
import Ctaindex from "@/components/mainUI/cta_index";
import Calendermain from "@/components/mainUI/calender_display";
import NewCarousel from "@/components/mainUI/newCarousel";
import { Footer } from "@/components/mainUI/footer";


export default function Home() {
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
      <Footer />
    </>
  );
}
