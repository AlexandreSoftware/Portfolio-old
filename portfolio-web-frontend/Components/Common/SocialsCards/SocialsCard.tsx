import { faDev, faGitAlt, faGithub, faGitlab, faReddit, faTwitch, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faCruzeiroSign, faPortrait } from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"
import SocialMedia from "./SocialMedia"
import Style from "./Styles/SocialsCard.module.css"
export default function SocialsCard() {
    return(
        <div
        className={Style.SocialsCard}>
            <SocialMedia  icon={faTwitter} link="https://www.twitter.com/XandrfDev" color="white" ></SocialMedia>
            <SocialMedia  icon={faGithub} link="https://github.com/xandrf" color="white"></SocialMedia>
            <SocialMedia  icon={faTwitch} link="https://www.twitch.tv/xandrf" color="white"></SocialMedia>
            <SocialMedia  icon={faDev} link="https://www.twitter.com/XandrfDev" color="white"></SocialMedia>

        </div>
        )
}