import { useMediaQuery } from "@mui/material";
import { Email, Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';
export default function Footer() {
  const isNonMobileScreen = useMediaQuery("(min-width: 1000px)");
  
  return (
    <div>
      {isNonMobileScreen ? (
        <div className="flex justify-between mt-32 border-t">
          <div className="grid grid-cols-2 gap-2 py-10 ">
            <div className="flex flex-col gap-9 text-white font-staat justify-center border-r-4 border-white items-center p-5">
              <div className="text-4xl tracking-wider">
                <h1>Have a query?</h1>
              </div>
              <div className="text-4xl tracking-wider">
                <h1>Contact Us</h1>
              </div>
              <div className=" tracking-wider text-xl font-inter">
                <h1>Contact CSIS 2024 Organising Committee</h1>
              </div>
              <div>
                {/* <h4 className="text-xl font-inter">+91 62990 5580</h4> */}
              </div>
              <div className="flex items-center space-x-2">
                <input
                  placeholder="Enter Your Email"
                  type="text"
                  className="p-2 rounded-lg w-56 text-xl font-inter text-gray-500 focus:outline-none"
                />
                <button className="p-2 bg-[#4a8ec5] text-white rounded-lg text-xl font-inter hover:bg-blue-700 transition-colors">
                  Send
                </button>
              </div>
            </div>

            <div className="flex justify-between px-5 space-x-16 w-full ">
              <iframe
                src="https://www.google.com/maps/d/u/1/embed?mid=1GQhhjWXiXDQlDoGPjX9DqLhk-lD2mrY&ehbc=2E312F"
                width="800"
                // height="250"
              ></iframe>
                <div className="flex flex-col items-center text-white font-staat px-5 w-full">
        <div className="text-4xl tracking-wider mb-4">
          <h1>CSIS 2024</h1>
        </div>
        <div className="text-xl font-inter mb-2 tracking-wider">
          <p>
       
          SRM Nagar, 
          Kattankulathur - 603203,
          Chengalpattu District - Tamil Nadu.
        
          </p>
          {/* <p className="flex items-center py-16">
            <Email className="mr-2" />
            cs.ieeecusb@gmail.com
          </p> */}
        </div>
        <div className="text-2xl tracking-wider mb-4">
          <h2>Follow Us</h2>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-white hover:text-gray-400">
              <Facebook />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <Twitter />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <LinkedIn />
            </a>
            <a href="#" className="text-white hover:text-gray-400">                                                                                                                                                                                   
              <Instagram />
            </a>
          </div>
        </div>
        </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex flex-col gap-10 px-5 py-10">
          <div className="flex flex-col gap-9 text-white font-staat justify-center border-r-4 border-white items-center p-5">
              <div className="text-2xl md:text-4xl tracking-wider">
                <h1>Have a query?</h1>
              </div>
              <div className="text-2xl md:text-4xl tracking-wider">
                <h1>Contact Us</h1>
              </div>
              <div className="tracking-wider md:text-xl font-inter">
                <h1>Contact CSIS 2024 Organising Committee</h1>
              </div>
              <div>
                <h4 className="md:text-xl font-inter">+91 62990 5580</h4>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  placeholder="Enter Your Email"
                  type="text"
                  className="p-2 rounded-lg w-56 md:text-xl font-inter"
                />
                <button className="p-2 bg-[#4a8ec5] text-white rounded-lg md:text-xl font-inter hover:bg-blue-700 transition-colors">
                  Send
                </button>
              </div>
            </div>
             <div className="flex flex-col justify-between px-5 space-y-16 w-full ">
              <iframe
                src="https://www.google.com/maps/d/u/1/embed?mid=1GQhhjWXiXDQlDoGPjX9DqLhk-lD2mrY&ehbc=2E312F"
                // width="800"
                height="450"
              ></iframe>
                <div className="flex flex-col items-center text-white font-staat px-5 w-full">
        <div className="text-2xl md:text-4xl tracking-wider mb-4">
          <h1>CSIS 2024</h1>
        </div>
        <div className="md:text-xl font-inter mb-2 tracking-wider">
        <p>
       
       SRM Nagar, 
       Kattankulathur - 603203,
       Chengalpattu District - Tamil Nadu.
     
       </p>
          {/* <p className="flex items-center py-16">
            <Email className="mr-2" />
            cs.ieeecusb@gmail.com
          </p> */}
        </div>
        <div className="text-2xl tracking-wider mb-4">
          <h2>Follow Us</h2>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-white hover:text-gray-400">
              <Facebook />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <Twitter />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <LinkedIn />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <Instagram />
            </a>
          </div>
        </div>
        </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
