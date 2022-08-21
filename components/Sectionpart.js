export default function Sectionpart(props) {
  return (
    <div className={`max-w-md  sm:text-black ${props.hideComponent}`}>
      <h1 className="mb-5 text-5xl font-bold ">See our planet better.</h1>
      <p className="mb-5 font-bold opacity-75">
        Geospatial solutions and global insights for a complex and changing
        planet.
      </p>
      <button className="btn btn-primary">Click me</button>
    </div>
  );
}
