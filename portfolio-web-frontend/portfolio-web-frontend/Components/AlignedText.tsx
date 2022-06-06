import Style from "./Styles/AlignedText.module.css"
export default function AlignedText(props:any) {
    return(
        <text className="aligned-text">
            {props.children}
        </text>
    )
}