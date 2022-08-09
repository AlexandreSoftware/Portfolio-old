import Style from "./Styles/TwoImages.module.css"
interface TwoImagesProps{
    LeftImage : any,
    RightImage : any
}
export default function TwoImages(props:TwoImagesProps) {
    return(
    <div className={Style.TwoImagesContainer}>
        <div className={Style.LeftImage}>{props.LeftImage}</div>
        <div className={Style.RightImage}>{props.RightImage}</div>
    </div>)
}

