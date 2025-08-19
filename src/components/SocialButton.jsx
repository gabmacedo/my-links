export function SocialButton({ children, value, onClick}) {
    return (
        <div>
            <ul className="flex flex-col gap-3">
                <li 
                className="group bg-zinc-900 flex items-center justify-center gap-2 p-3 rounded-4xl border border-zinc-500 shadow-lg shadow-black/30 inset-shadow-sm inset-shadow-black/30 text-white relative cursor-pointer overflow-hidden"
                onClick={onClick}>

                    <div className="absolute w-10 left-1 top-1/2 -translate-y-1/2 bg-zinc-700 rounded-full p-2.5 transition-all duration-300 ease-in-out group-hover:w-[calc(100%-0.5rem)] z-0">
                        {children}
                    </div>
                    <span class="z-10 w-full text-center">{value}</span>
                </li>
            </ul>
        </div>
    )
    
}