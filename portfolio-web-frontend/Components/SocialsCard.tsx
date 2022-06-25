import { faDev, faGitAlt, faGithub, faGitlab, faReddit, faTwitch, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faCruzeiroSign, faPortrait } from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"
import BlackLine from "./BlackLine"
import SocialMedia from "./SocialMedia"
import Style from "./Styles/SocialsCard.module.css"
export default function SocialsCard() {
    return(
        <motion.div
        initial="initial"
        animate="animate"
        variants={{
            initial:{
                y:100
            },
            animate:{
                y:0,
                transition:{
                    duration:0.5,
                    ease:"linear"
                }
            }
        }}
        className={Style.SocialsCard}>
            <SocialMedia delay={0.9} icon={faTwitter} link="https://www.twitter.com/XandrfDev" color="white" ></SocialMedia>
            <SocialMedia delay={0.6} icon={faGithub} link="https://github.com/xandrf" color="white"></SocialMedia>
            <SocialMedia delay={0.3} icon={faTwitch} link="https://www.twitch.tv/xandrf" color="white"></SocialMedia>
            <SocialMedia delay={0} icon={faDev} link="https://www.twitter.com/XandrfDev" color="white"></SocialMedia>
            <BlackLine/>
        </motion.div>
        )
}