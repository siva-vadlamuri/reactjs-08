// inline style
// internal styles
// external styles
import "../styles/Button/Button.css";
function Button(props){
    // const styles = {
    //  buttonCss :{ backgroundColor:"blue",
    //  color:"white",
    //  border:"none", 
    //  marginLeft:"5px",
    //  padding : "10px 5px"
    // },
    // form: {}
    // }
    return <button  className="btn">{props.name}</button>
    // return <button style={{color:"white"}} className="btn">{props.name}</button>
} 

export default Button;