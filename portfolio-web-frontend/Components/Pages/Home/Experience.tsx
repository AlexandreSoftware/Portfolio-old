import { useContext } from "react";
import LanguageContext from "../../../utils/LanguageContext";
import ThemeContext from "../../../utils/ThemeContext";
import { Timeline } from 'primereact/timeline';
import { fa2 } from "@fortawesome/free-solid-svg-icons";
import Style from "./Styles/Experience.module.css"
import ExperienceAndEducationCard from "./ExperienceAndEducationCard";
//eventually it could be a good idea to dynamically fetch this data from a server, but honestly, i dont pretend to update this more than twice a year ( since i dont plan on switching jobs often enough that it would be easier just to call an protected endpoint) 
export default function Experience() {
    const [themeContext] =useContext(ThemeContext),
    [languageContext] =useContext(LanguageContext),
    now = new Date();

    const events = [
        { Title: 'Freelancer', DoEn: '02/2022 ', DoEx: "Currently here" , Seniority: 'Freelancer', Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar justo eget libero convallis ultrices. Suspendisse potenti. Nulla a mi eget ligula vestibulum lobortis ac non lorem. Nam sed urna condimentum, mattis neque et, maximus nisi. Sed ut leo tristique, semper ex nec, lacinia risus. Fusce eu varius tortor. Aenean vel lacinia erat. In consectetur, velit eget ullamcorper aliquam, leo massa bibendum dolor, quis tincidunt arcu libero in dui. Mauris ac turpis id nisi fermentum malesuada vitae in nisl. Vivamus bibendum tellus massa, eu viverra est semper feugiat. Nulla tempus, ligula eu faucibus venenatis, lacus odio tristique sem, vel viverra.' },
        { Title: 'Peixinhos', DoEn: '09/2020', DoEx: '02/2022', Seniority: 'Junior', Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar justo eget libero convallis ultrices. Suspendisse potenti. Nulla a mi eget ligula vestibulum lobortis ac non lorem. Nam sed urna condimentum, mattis neque et, maximus nisi. Sed ut leo tristique, semper ex nec, lacinia risus. Fusce eu varius tortor. Aenean vel lacinia erat. In consectetur, velit eget ullamcorper aliquam, leo massa bibendum dolor, quis tincidunt arcu libero in dui. Mauris ac turpis id nisi fermentum malesuada vitae in nisl. Vivamus bibendum tellus massa, eu viverra est semper feugiat. Nulla tempus, ligula eu faucibus venenatis, lacus odio tristique sem, vel viverra.' },
        { Title: 'Nova Futura Investimentos', DoEn: '03/2020', DoEx: '07/2020', Seniority: "intern", Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar justo eget libero convallis ultrices. Suspendisse potenti. Nulla a mi eget ligula vestibulum lobortis ac non lorem. Nam sed urna condimentum, mattis neque et, maximus nisi. Sed ut leo tristique, semper ex nec, lacinia risus. Fusce eu varius tortor. Aenean vel lacinia erat. In consectetur, velit eget ullamcorper aliquam, leo massa bibendum dolor, quis tincidunt arcu libero in dui. Mauris ac turpis id nisi fermentum malesuada vitae in nisl. Vivamus bibendum tellus massa, eu viverra est semper feugiat. Nulla tempus, ligula eu faucibus venenatis, lacus odio tristique sem, vel viverra.'},
    ];
     
    return(
        <div className={Style.TimelineContainer}>
            <Timeline value={events} layout="vertical" align="left"  content={(item) =><ExperienceAndEducationCard Title={item.Title} DoEn={item.DoEn} DoEx={item.DoEx} Seniority={item.Seniority}  >{item.Description}</ExperienceAndEducationCard>} />
        </div>
    )
}