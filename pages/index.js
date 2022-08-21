import Footer from '../components/Footer';
import Section from '../components/Section';
import Sectionpart from '../components/Sectionpart';
import Navbar from '../components/Navbar/Navbar';
import Team from '../components/TeamSection/Team';
export default function Home() {
  return (
    <>
      
      <Sectionpart hideComponent="hidden sm:flex flex-col m-auto mt-20 mb-20 hero-content text-center text-neutral-content" />
     
      <div className="hero min-h-screen bg-[url('https://placeimg.com/1000/800/arch')] object-cover bg-no-repeat" >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <Sectionpart hideComponent="sm:hidden" />
        </div>
      </div>
      <Team />
      <Section />
      <Footer/>
    </>

  );
}
