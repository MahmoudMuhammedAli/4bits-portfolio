import Section from './components/Section';
import Sectionpart from './components/Sectionpart';
export default function Home() {
  return (
    <div>   
            <Sectionpart hideComponent="hidden sm:flex flex-col m-auto mt-20 mb-20 hero-content text-center text-neutral-content"/>
            {/*start  hero section */}
            <div className="hero min-h-screen bg-[url('https://placeimg.com/1000/800/arch')]" >
              <div className="hero-overlay bg-opacity-60"></div> 
              <div className="hero-content text-center text-neutral-content">              
                    <Sectionpart hideComponent="sm:hidden"/>
              </div>
            </div>
            {/* End hero section */}
            {/* start section  */}
            <Section/>                
            {/* End section  */}
    </div>
  );
}
