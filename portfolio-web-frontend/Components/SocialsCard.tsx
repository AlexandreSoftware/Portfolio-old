import { faDev, faGithub, faReddit, faTwitch, faTwitter } from "@fortawesome/free-brands-svg-icons"
import BlackLine from "./BlackLine"
import SocialMedia from "./SocialMedia"
import Style from "./Styles/SocialsCard.module.css"
export default function SocialsCard() {
    return(
        <div className={Style.SocialsCard}>
            <SocialMedia icon={faTwitter} link="https://www.twitter.com/XandrfDev" color="#1DA1F2" ></SocialMedia>
            <SocialMedia icon={faGithub} link="https://www.twitter.com/XandrfDev" color="white"></SocialMedia>
            <SocialMedia icon={faReddit} link="https://www.twitter.com/XandrfDev" color="#FF5700"></SocialMedia>
            <SocialMedia icon={faTwitch} link="https://www.twitter.com/XandrfDev" color="#6441a5"></SocialMedia>
            <SocialMedia icon={faDev} link="https://www.twitter.com/XandrfDev" color="white"></SocialMedia>
            <BlackLine/>
        </div>
        )
}