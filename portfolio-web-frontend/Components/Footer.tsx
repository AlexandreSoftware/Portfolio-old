import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {motion} from "framer-motion"
export default function Footer() {
    return (
        <motion.footer className="text-center">
            Made with love by xandrf <FontAwesomeIcon icon={faHeart} color="red" width={15} height={15} className="m-1 align-bottom" />
        </motion.footer>
    )
}