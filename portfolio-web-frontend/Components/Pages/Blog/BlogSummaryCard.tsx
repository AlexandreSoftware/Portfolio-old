import StyledButton from "../../Common/StyledButton"
import Style from "./Styles/BlogSummaryCard.module.css"
interface BlogSummaryCardProps{
    imageLink:string,
    Title: string,
    children : string,
    id:number
}
export default function BlogSummaryCard(props:BlogSummaryCardProps) {
    return (
        <div className={Style.BlogSummaryCard}>
            <div className={Style.ImageContainer}>
                <div className={Style.ImageBox}>
                <img src={props.imageLink}/>
                </div>
            </div>
            <h2>
                {props.Title}
            </h2>
            <p>
                {props.children.split(' ').slice(0, 100).join(' ')}
            </p>
            <StyledButton link={"/Blog/"+props.id} whereTo="internal" width={18} height={8}>
                See More
            </StyledButton>
        </div>
    )
}