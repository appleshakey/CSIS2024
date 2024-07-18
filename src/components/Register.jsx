export default function Register({
  heading,
  heading1,
  para,
  para1,
  image,
  tickets,
}) {
  return (
    <div className="text-white bg-gradient-to-b from-[#0178b5] to-[#000000] rounded-lg p-2  overflow-hidden shadow-lg">
      <div className="h-[99%] w-[99%] rounded-lg group ">
        <img
          src={image}
          alt=""
          className="w-full transform transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
        <div className="py-4 tracking-wider mx-4">
          <div className="text-xl md:text-3xl py-4 tracking-wider font-staat mb-2 text-white">
            {heading}
          </div>
          <p className="text-lg md:text-2xl tracking-wider font-staat text-white">
            {heading1}
          </p>
          <div className="flex space-x-2 py-4">
            <h1 className="rounded-full bg-gradient-to-b from-[#fffef3] to-[#fffef3] h-[1vh] w-[1vh] mt-5"></h1>
            <p className="text-white font-inter md:text-xl mt-3 font-style">
              {para}
            </p>
          </div>
          {para1 && (
            <div className="flex space-x-2">
              <h1 className="rounded-full bg-gradient-to-b from-[#fffef3] to-[#fffef3] h-[1vh] w-[1vh] mt-2"></h1>
              <p className="text-white font-inter md:text-xl font-style">
                {para1}
              </p>
            </div>
          )}
          <div className="flex justify-center py-4">
            <button
              className="border font-staat tracking-wider text-xl opacity-80 text-white px-2 py-1 text-md rounded-md  book-ticket"
              onClick={() => {
                setTimeout(() => {
                  window.open(
                    "https://konfhub.com/ieee-csis-2024",
                    "_blank",
                    "noopener,noreferrer"
                  );
                }, 1000);
              }}
            >
              {tickets}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
