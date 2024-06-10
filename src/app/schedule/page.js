export default function Schedule(){
    return (
        <div className="text-white font-white h-[100vh] w-[100vw] flex items-center justify-center px-[82px] gap-24 ">
            <button className="flex flex-col text-white font-staat gap-7 items-center">
                <div className="rounded-full bg-gray-300 h-[16vh] w-[16vh]">
                </div>
                <div className="text-3xl text-center">
                    <h2>Day 1</h2>
                </div>
            </button>
            <button className="flex flex-col text-white font-staat gap-7 items-center">
                <div className="rounded-full bg-gray-300 h-[16vh] w-[16vh]">
                </div>
                <div className="text-3xl text-center">
                    <h2>Day 2</h2>
                </div>
            </button>
            <button className="flex flex-col text-white font-staat gap-7 items-center">
                <div className="rounded-full bg-gray-300 h-[16vh] w-[16vh]">
                </div>
                <div className="text-3xl text-center">
                    <h2>Day 3</h2>
                </div>
            </button>
        </div>
    )
}