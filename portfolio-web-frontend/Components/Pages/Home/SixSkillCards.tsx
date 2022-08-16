import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faBox, faCartArrowDown, faComputer, faEarth, faPager, faPerson, faShip, faShippingFast, faTruck, faUser } from "@fortawesome/free-solid-svg-icons"
import { useContext, useEffect, useState } from "react";
import ThemeContext, { Theme } from "../../../utils/ThemeContext";
import SkillCard from "./SkillCard"
import Styles from "./Styles/SixSkillCards.module.css"
export default function SixSkillCards() {
    return (
        <div className={Styles.SixSkillCards}>
            <SkillCard  Title={"A Dedicated Developer"}icon={faComputer} >
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. 
                Porta senectus rhoncus
                turpis lectus auctor. At aliquet a,
                maecenas nulla. Elementum elit dui justo 
                auctor proin nibh volutpat, enim nullam
                . Enim quisque lectus fusce placerat.
            </SkillCard>
            <SkillCard  Title={"Pays attention  to your problem"}icon={faHtml5} >
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. 
                Porta senectus rhoncus
                turpis lectus auctor. At aliquet a,
                maecenas nulla. Elementum elit dui justo 
                auctor proin nibh volutpat, enim nullam
                . Enim quisque lectus fusce placerat.
            </SkillCard>
            <SkillCard  Title={"Delivers a unique experience "}icon={faEarth} >
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. 
                Porta senectus rhoncus
                turpis lectus auctor. At aliquet a,
                maecenas nulla. Elementum elit dui justo 
                auctor proin nibh volutpat, enim nullam
                . Enim quisque lectus fusce placerat.
            </SkillCard>
            <SkillCard  Title={"Fast Development"}icon={faShippingFast} >
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. 
                Porta senectus rhoncus
                turpis lectus auctor. At aliquet a,
                maecenas nulla. Elementum elit dui justo 
                auctor proin nibh volutpat, enim nullam
                . Enim quisque lectus fusce placerat.
            </SkillCard>
            <SkillCard  Title={"Creates a custom product"}icon={faBox} >
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. 
                Porta senectus rhoncus
                turpis lectus auctor. At aliquet a,
                maecenas nulla. Elementum elit dui justo 
                auctor proin nibh volutpat, enim nullam
                . Enim quisque lectus fusce placerat.
            </SkillCard>
            <SkillCard  Title={"Gives you the design you want "}icon={faUser} >
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