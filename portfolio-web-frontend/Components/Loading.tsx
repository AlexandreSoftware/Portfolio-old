import Style from "./Styles/Loading.module.css"
import ReactLoading from "react-loading";
export default function Loading() {
    return(
        <div className={Style.Loading}>
            <ReactLoading type="spin"/>
        </div>
    )
}