import Siteheader from "@/components/mainUI/site_header";
import Image from "next/image";
import Aboutsection from "@/components/mainUI/about_section";
import Carouselmain from "@/components/mainUI/carousel_main";

export default function Home() {
  return (
    <>
      <Siteheader />
      <Aboutsection />
      <div className="h-screen flex flex-col items-center justify-center gap-10 mt-10 bg-black">
      <Carouselmain />
      </div>
    </>

  );
}
