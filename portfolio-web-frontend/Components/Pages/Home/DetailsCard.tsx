import Style from "./Styles/DetailsCard.module.css"
interface DetailsCardProps{
    children : any,
    Title : string
}
export default function DetailsCard(props:DetailsCardProps) {
    return(
        <div className={Style.DetailsCard}>
            <h2 className={Style.Title}>
                {props.Title}
            </h2>
            <div className={Style.LittleBar}></div>
            <div>
                {props.children}
            </div>    
        </div>

    )
}