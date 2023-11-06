import { useState } from "react";
import check from "./assets/icon-check.svg"

export default function Tasks(props)
{

    let initalColor = "E7E9EB"
    const [bgColor, setbgColor] = useState(initalColor);
    const[text, setText] = useState("")
    const[textColor, setTextColor] = useState("black")
    const [taskbgColor, settaskbgColor] = useState("white");



    const colorChange = ()=>{
      let color='#b962ef';
      setbgColor(color);
      setText("line-through");
      setTextColor("grey");
    }
  

    return(
    
        <div style={{background:"white", display: "flex", alignItems: "center",  borderRadius: "0px 0px 0px 0px",  borderBottom:"2px solid #E7E9EB", width:530}}>
          <button style={{
            borderRadius: "50%", padding: "2px 5px", border: "1px solid #E7E9EB",
            marginLeft: 20, marginTop:5, background: bgColor, cursor:"pointer"
          }} onClick={()=>{
              colorChange();
              props.onSelect(props.id)
          }} >

            <img src={check}></img></button>
          <div style={{ border: "white", width:400, padding: 15, height:20, fontSize:"18px", textDecoration:text,color:textColor
          }}>{props.text} </div>
        </div>
        

    )


}