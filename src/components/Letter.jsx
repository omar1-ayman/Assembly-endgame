export default function Letter(props) {
    return (
        <button className="letter-button">{props.guessed ? props.value : ""}</button>
    )
}