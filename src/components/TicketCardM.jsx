export default function TicketCardM({title, eligibility, includes, price, availability,}) {
    return(
        <div className={`p-2 text-center flex flex-col gap-3 rounded-lg`}>
            <div className="text-lg">
                <h1>{title}</h1>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-4">
                    <div>
                        <div className="text-sm">
                            <h3>Eligibility</h3>
                        </div>
                        <div className="text-sm">
                            {eligibility}
                        </div>
                    </div>
                    <div className="text-xs">
                        <div>
                            <h1>includes</h1>
                        </div>
                        <div>
                            {includes.map((point) => (
                                <div>
                                    - {point}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="text-sm">RS {price}</div>
            </div>
            <div className="border rounded-sm border-white">{availability}</div>
            <div>
                <button className="w-full rounded-lg bg-cyan-600">Register now</button>
            </div>
        </div>
    )
}