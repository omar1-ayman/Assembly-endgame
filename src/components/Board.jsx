export default function Board(props) {
    const styles = {
        backgroundColor: props.pressed ? "#11B5E5" : "#FCBA29"
    }

    return (
        <button style={styles} className="board-button" onClick={props.onClick}>
            {props.value}
        </button>
    )
}