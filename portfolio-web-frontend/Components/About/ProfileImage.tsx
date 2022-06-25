import Style from "./Style/ProfileImage.module.css"
interface ProfileImageProps{
    src:string
}
export default function ProfileImage(props:ProfileImageProps) {
    return (<div className={Style.ProfileImage}>
        <img src={props.src}/>
    </div>)
}