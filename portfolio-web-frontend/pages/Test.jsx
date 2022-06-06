import { faCartArrowDown, faHeart } from "@fortawesome/free-solid-svg-icons"
import SkillCard from "../Components/SkillCard"
export default function Test() {
    return (
        <SkillCard icon={faCartArrowDown} sizex={45} sizey={60}>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. 
            Porta senectus rhoncus
            turpis lectus auctor. At aliquet a,
            maecenas nulla. Elementum elit dui justo 
            auctor proin nibh volutpat, enim nullam
            . Enim quisque lectus fusce placerat.
        </SkillCard>
    )

}