import ReactMarkdown from "react-markdown"
import Style from "./Styles/BlogPostComponent.module.css"
interface BlogPostProps{
    imageLink:string,
    Title: string,
    children : string,
    id:number,
    date:Date
}
export default function BlogPost(props:BlogPostProps) {
    let date = new Date(props.date)
    return (
        <div className={Style.BlogPost}>
            <div className={Style.ImageContainer}>
                <div className={Style.ImageBox}>
                <img src={props.imageLink}/>
                </div>
            </div>
            <div className={Style.Date}>
                {`${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`}
            </div>
            <h2>
                {props.Title}
            </h2>
            <p>
                <ReactMarkdown>
                    {props.children}
                </ReactMarkdown>
            </p>
        </div>
    )
}