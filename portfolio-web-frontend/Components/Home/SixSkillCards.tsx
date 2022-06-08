import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons"
import { useContext, useEffect, useState } from "react";
import ThemeContext, { Theme } from "../../utils/ThemeContext";
import SkillCard from "./SkillCard"
import Styles from "./Styles/SixSkillCards.module.css"
export default function SixSkillCards() {
    const [context,SetContext] =useContext(ThemeContext)
    const [isSSR, setIsSSR] = useState(true);
    useEffect(()=>{
        setIsSSR(false)
    },[])
    return (
        <div className={Styles.SixSkillCards + ` ${isSSR?"":Styles[`SixSkillCards-${Theme[context]}`]}`}>
            <SkillCard  Title={"test"}icon={faCartArrowDown} >
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. 
                Porta senectus rhoncus
                turpis lectus auctor. At aliquet a,
                maecenas nulla. Elementum elit dui justo 
                auctor proin nibh volutpat, enim nullam
                . Enim quisque lectus fusce placerat.
            </SkillCard>
            <SkillCard  Title={"test"}icon={faCartArrowDown} >
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. 
                Porta senectus rhoncus
                turpis lectus auctor. At aliquet a,
                maecenas nulla. Elementum elit dui justo 
                auctor proin nibh volutpat, enim nullam
                . Enim quisque lectus fusce placerat.
            </SkillCard>
            <SkillCard  Title={"test"}icon={faCartArrowDown} >
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. 
                Porta senectus rhoncus
                turpis lectus auctor. At aliquet a,
                maecenas nulla. Elementum elit dui justo 
                auctor proin nibh volutpat, enim nullam
                . Enim quisque lectus fusce placerat.
            </SkillCard>
            <SkillCard  Title={"test"}icon={faCartArrowDown} >
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. 
                Porta senectus rhoncus
                turpis lectus auctor. At aliquet a,
                maecenas nulla. Elementum elit dui justo 
                auctor proin nibh volutpat, enim nullam
                . Enim quisque lectus fusce placerat.
            </SkillCard>
            <SkillCard  Title={"test"}icon={faCartArrowDown} >
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. 
                Porta senectus rhoncus
                turpis lectus auctor. At aliquet a,
                maecenas nulla. Elementum elit dui justo 
                auctor proin nibh volutpat, enim nullam
                . Enim quisque lectus fusce placerat.
            </SkillCard>
            <SkillCard  Title={"test"}icon={faCartArrowDown} >
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. 
                Porta senectus rhoncus
                turpis lectus auctor. At aliquet a,
                maecenas nulla. Elementum elit dui justo 
                auctor proin nibh volutpat, enim nullam
                . Enim quisque lectus fusce placerat.
            </SkillCard>

        </div>
    )
}