import Siteheader from "@/components/mainUI/site_header";
import Image from "next/image";
import Aboutsection from "@/components/mainUI/about_section";
import Carouselcompletefrontend from "@/components/mainUI/carousel_complete_frontend";
import Ctaindex from "@/components/mainUI/cta_index";
import Calendermain from "@/components/mainUI/calender_display";

export default function Home() {
  return (
    <>
      <Siteheader />
      <Aboutsection />
      <Carouselcompletefrontend />
      <Ctaindex />
      <Calendermain />
    </>

  );
}
