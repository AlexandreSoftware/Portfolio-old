import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./Styles/Footer.css"
export default function Footer() {
    return (
        <footer className="text-center footer">
            Made with love by xandrf <FontAwesomeIcon icon={faHeart} color="red" width={15} height={15} className="m-1 align-bottom" />
        </footer>
    )
}