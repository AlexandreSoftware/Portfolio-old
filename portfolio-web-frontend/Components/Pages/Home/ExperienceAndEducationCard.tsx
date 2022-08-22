import { useContext, useState } from "react";
import ThemeContext, { Theme } from "../../../utils/ThemeContext";
import { Dialog } from 'primereact/dialog';
import StyledButton from "../../Common/StyledButton";
import Style from "./Styles/ExperienceAndEducationCard.module.css"
interface ExperienceAndEducationCardProps{
    Title : string,
    Seniority : string,
    DoEn: string
    DoEx: string,
    children : string
}
export default function ExperienceAndEducationCard(props:ExperienceAndEducationCardProps) {
    const [themeContext,SetThemeContext] =useContext(ThemeContext),
    [dialogIsVisible,SetDialogIsVisible] = useState(false);
    return(<div className={Style.ExperienceAndEducationCard+ " " + Style["ExperienceAndEducationCard-"+Theme[themeContext]]}>
        <h4 className={Style.Title}>{props.Title}</h4>
        <h5>
            {props.Seniority}
        </h5>
        <h6>
            Date of Entry: {props.DoEn}
        </h6>
        <h6>
            Date Of Exit: {props.DoEx}
        </h6>
        <p>{props.children && props.children.length > 50 ? props.children.substring(0,50)+ "..." : props.children}</p>
        <div className={Style.StyledButton}>
            <StyledButton width={10} height={5} onClick={()=>{SetDialogIsVisible(true)}}>Show more</StyledButton>
        </div>
        <Dialog visible={dialogIsVisible} onHide={()=>SetDialogIsVisible(false)} closeOnEscape={true} dismissableMask={true} resizable={false} header={props.Title} draggable={false}>
            <div className={Style.ExperienceAndEducationDialogue}>
            <h3>
                {props.Seniority}
            </h3>
            <h4>
                Date of Entry: {props.DoEn}
            </h4>
            <h4>
                Date Of Exit: {props.DoEx}
            </h4>
                <p>
                    {props.children}
                </p>
            </div>

        </Dialog>
    </div>)
}