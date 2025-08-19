import { CrownIcon } from "lucide-react"

export function WhiteCard(props) {
    return (
        <div className={`bg-white/40 border border-white flex ${props.size} p-2.5 rounded-4xl text-white gap-1.5 items-center justify-center ${props.cursor}`}>
            <CrownIcon size={20} className={`text-amber-400 ${props.iconHidden}`} />
            <h1>{props.value}</h1>
        </div>
    )
}