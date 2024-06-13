import { useMediaQuery } from "@mui/material"
export default function Footer(){
    const isNonMobileScreen = useMediaQuery('(min-width: 1000px)');
    return (
        <div>
            {isNonMobileScreen ? (
                <div className="flex justify-center">
                <div className="grid grid-cols-2 gap-2 py-10 w-[75vw]">
                <div className="flex flex-col gap-9 text-white font-staat justify-center border-r-4 border-white items-center">
                    <div className="text-4xl font-extrabold">
                        <h1>Contact</h1>
                    </div>
                    <div>
                        <h4>contact number</h4>
                    </div>
                    <div>
                        <h4>gmail-ID</h4>
                    </div>
                    <div>
                        <input placeholder="Enter Your gmail ID" type="text" className="p-3 rounded-lg w-56 bg-gray-900"/>
                    </div>
                </div>
                <div className="flex justify-center px-5">
                    <iframe src="https://www.google.com/maps/d/u/1/embed?mid=1GQhhjWXiXDQlDoGPjX9DqLhk-lD2mrY&ehbc=2E312F" width="500" height="250"></iframe>
                </div>
            </div>
                </div>
            ) : (
                <div>
                <div className="flex flex-col gap-10 px-5 py-10">
                <div className="flex flex-col text-white font-staat justify-center gap-5">
                    <div className="text-2xl font-extrabold text-center">
                        <h1>Contact</h1>
                    </div>
                    <div className="text-center">
                        <h4>contact number</h4>
                    </div>
                    <div className="text-center">
                        <h4>gmail-ID</h4>
                    </div>
                    <div className="text-center">
                        <input placeholder="Enter Your gmail ID" type="text" className="p-3 rounded-lg w-56 bg-gray-900"/>
                    </div>
                </div>
                <div className="flex px-5 justify-center">
                    <iframe src="https://www.google.com/maps/d/u/1/embed?mid=1GQhhjWXiXDQlDoGPjX9DqLhk-lD2mrY&ehbc=2E312F" width="250" height="150"></iframe>
                </div>
            </div>
            </div>
            )}
            
        </div>
    )
}