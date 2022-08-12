import Style from "./Styles/TwoImages.module.css"
interface TwoImagesProps{
    LeftImage : string,
    RightImage : string
}
export default function TwoImages(props:TwoImagesProps) {
    return(
    <div className={Style.TwoImagesContainer}>
        <div className={Style.LeftImage} style={{backgroundImage:`url("${props.LeftImage}")`}}></div>
        <div className={Style.RightImage} style={{backgroundImage:`url("${props.RightImage}")`}}></div>
    </div>)
}

