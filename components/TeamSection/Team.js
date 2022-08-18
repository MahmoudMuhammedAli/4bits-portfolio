import TeamCard from "./TeamCard"

export default function Team() {
    const test = ['bebo','omar','mahmoud','mashoor']
    return (
        <div className="absolute top-[8vh] py-5 w-screen">
            <div className="text-3xl font-bold text-gray-800 pl-5 my-5 flex justify-between">
               <div className="w-[85px] p-2 ">Our Team...</div>
               <div className="border-b-8 border-black w-[40vw] mb-4"></div>
            </div>
            <ul className="carousel py-10 px-3 h-[540px] W-[100vw] flex items-center justify-start">
                <TeamCard 
                    prevSlide="1" nextSlider="3" slideId="2"
                    header="Data and Annotation Team"
                    body="Creating hight-quality geospatial data and high accuracy labels for machine learning projects"
                />
            </ul>
        </div>
    )
}