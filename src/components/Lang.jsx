export default function Lang(props) {
 const styles = {
    backgroundColor: props.color,
    
 }

 return (<button className="lang-button" style={styles}>{props.value}</button>)

}