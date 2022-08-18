import Navbar from "../components/Navbar/Navbar"
import Team from "../components/TeamSection/Team";

export default function Home() {
  return (
    <div>
      <div className="fixed b-red-500 z-[500]">
        <Navbar/>    
      </div>
        <Team />
    </div>
  );
}
