export default function Speakers({image,heading,para}){
    return (
            <div className = "w-52  bg-slate-500 rounded-lg min-w-full">
                  <img
          src={image}
          alt=""
          className="w-full transform transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
        <div className=" py-4 tracking-wider mx-4">
          <div className="text-xl md:text-3xl py-4 tracking-wider font-staat mb-2 text-white  ">
            {heading}
          </div>
          <p className="text-white  font-inter md:text-xl max-h-40 overflow-y-auto">{para}</p>
        </div>
            </div>
    )
}