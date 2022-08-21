export default function Section() {
  return (
    <div className="flex flex-wrap  w-[80%] justify-between m-auto  h-80 items-center text-sm sm:text-xl">
      <div className="sm:w-[50%]  ">
        <p className="font-bold text-xl  text-red-600 pb-3 ">what we do </p>
        <h1 className="font-extrabold  opacity-90 text-xl  sm:text-2xl">
          Working on the world is s hardest geospatial problems.
        </h1>
      </div>
      <div className="sm:w-[50%] text-lg font-bold opacity-80">
        <p>
          We are not scared by big problems. We rely on our engineering led
          processes, tailored open source solutions, and commitment to success
          in order to create change at a global scale.
        </p>
      </div>
    </div>
  );
}
