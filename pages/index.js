import Footer from "../components/Footer";
import Section from "../components/Section";
import Sectionpart from "../components/Sectionpart";
import Navbar from "../components/Navbar/Navbar";
import Team from "../components/TeamSection/Team";
import Image from "next/image";
export default function Home() {
  return (
    <div>
      <Sectionpart hideComponent="hidden sm:flex flex-col m-auto mt-20 mb-20 hero-content text-center text-neutral-content" />

      <div className="hero h-screen ">
        {/* <Image src={"https://placeimg.com/1000/800/arch"} className="object-cover rounded-l-2xl" alt="" width={"100%"} height={"100%"} /> */}
        <div className="hero-overlay bg-opacity-60" />
        <div className="hero-content text-center text-neutral-content">
          <Sectionpart hideComponent="sm:hidden" />
        </div>
      </div>
      <Team />
      <Section />
      <Footer />
    </div>
  );
}
