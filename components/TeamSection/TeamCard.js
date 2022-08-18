export default function TeamCard(props) {
  return (
    <div className="flex items-center">
     <a href={props.prevSlide} class="btn btn-circle">❮</a> 
      <li class="shadow-2xl mx-5" id={props.slideId}>
        <img src="https://placeimg.com/400/225/arch"/>
        <h1 className="h-[120px] font-semibold p-5 text-3xl">{props.header}</h1>
        <p className="p-5 text-lg font-medium text-gray-600">{props.body}</p>
      </li>
      <a href={props.nextSlide} class="btn btn-circle">❯</a>
    </div>
  );
}
