import { faDev, faDiscord, faGitAlt, faGithub, faGitlab, faLinkedin, faReddit, faStackExchange, faStackOverflow, faTwitch, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faCruzeiroSign, faPortrait } from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"
import SocialMedia from "./SocialMedia"
import Style from "./Styles/SocialsCard.module.css"

export default function SocialsCard() {
    return(
        <div
        className={Style.SocialsCard}>
            <SocialMedia  icon={faTwitter} link="https://www.twitter.com/XandrfDev" color="#1DA1F2"></SocialMedia>
            <SocialMedia  icon={faGithub} link="https://github.com/xandrf" color="white"></SocialMedia>
            <SocialMedia  icon={faTwitch} link="https://www.twitch.tv/xandrf" color="#6441A4"></SocialMedia>
            <SocialMedia  icon={faLinkedin} link="https://www.linkedin.com/in/carlos-oliveira-8986a7175/" color="#0072b1"></SocialMedia>
            <SocialMedia  icon={faDiscord} link="https://discord.gg/UJyhTRz8h3" color="#5865F2"></SocialMedia>
        </div>
        )
}