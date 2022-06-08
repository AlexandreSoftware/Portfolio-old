// to be honest from what i know theres no other way to do what i need to whithout this stupid implementation, but react doesn't allow for non components to be passed as prop types on a component, so i needed to encapsulate the entire li
interface ListelementProps{
    children : string
}
export default function ListElement(props: ListelementProps) {
    return (
        <li>
            {props.children}
        </li>
    )
}