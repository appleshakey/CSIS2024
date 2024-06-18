export default function SpeakerCard({ heading, para, image }) {
  return (
    <div className="text-white bg-gradient-to-b from-[#0178b5] to-[#000000] rounded-lg p-2 max-w-sm overflow-hidden shadow-lg">
      <div className="h-[99%] w-[99%] rounded-lg group ">
        <img
          src={image}
          alt=""
          className="w-full transform transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
        <div className=" py-4 tracking-wider mx-4">
          <div className="text-xl md:text-3xl py-4 tracking-wider font-staat mb-2 text-white  ">
            {heading}
          </div>
          <p className="text-white  font-inter md:text-xl">{para}</p>
        </div>
      </div>
    </div>
  );
}
