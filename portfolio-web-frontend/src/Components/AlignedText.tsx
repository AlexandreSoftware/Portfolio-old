import "./Styles/AlignedText.css"
export default function AlignedText(props:any) {
    return(
        <text className="aligned-text">
            {props.children}
        </text>
    )
}