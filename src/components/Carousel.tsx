export function Carousel({ name, desc, imgSrc }) {
  return (
    <div className="flex space-x-3">
      <img className="" src={imgSrc} alt="" />
      <p className="text-lg italic text-white ">
        <span className="text-xl not-italic font-semibold text-white">
          {name}
        </span>{' '}
        <br /> {desc}
      </p>
    </div>
  )
}
