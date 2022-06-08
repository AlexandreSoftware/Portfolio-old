import ProjectCard from "./ProjectCard";
import Style from "./Styles/ProjectCards.module.css"
export default function ProjectCards() {
    return(
        <div className={Style.ProjectCards}>
            <ProjectCard title="test" image="/Logo WordleClone.svg">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
            </ProjectCard>
            <ProjectCard title="test" image="/Logo WordleClone.svg">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
            </ProjectCard>
            <ProjectCard title="test" image="/Logo WordleClone.svg">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
            </ProjectCard>
        </div>
    )
}