import Card from "./Card"
import EmptyCard from "./EmptyCard"
import Style from "./Styles/IndividualSkill.module.css"
interface IndividualSkillProps{
    Level : 1 | 2 | 3 | 4 | 5 
    Name : string
}
export default function IndividualSkill(props:IndividualSkillProps) {
    return (
        <li className={Style.IndividualSkill}>
            <div className={Style.SkillCard}>
            <span className={Style.text}>{props.Name}<span>:</span></span>
                {[...Array(5)].map((e, i) => {
                    if(i<props.Level){
                        return (<Card key={i}/>)
                    }
                    else{
                        return(<EmptyCard key={i}/>)
                    }
                }
                )}</div>
        </li>
    )
}