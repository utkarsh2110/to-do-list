import { useState } from "react";
import check from "./assets/icon-check.svg"

export default function Tasks(props)
{

    let initalColor = "E7E9EB"
    const [bgColor, setbgColor] = useState(initalColor);
    const[text, setText] = useState("")
    const[textColor, setTextColor] = useState("black")


    const colorChange = ()=>{
      let color='#b962ef';
      setbgColor(color);
      setText("line-through");
    }
    
   
    

    return(
    
        <div style={{background: props.style.backgroundColour, display: "flex", alignItems: "center",  borderRadius: "0px 0px 0px 0px", width:530}}>


          <button style={{
            borderRadius: "50%", padding: "2px 5px", border: "1px solid #E7E9EB",
            marginLeft: 20, marginTop:5, background: bgColor, cursor:"pointer"
          }} onClick={()=>{
              colorChange();
              props.onSelect(props.id)
          }} >

            <img src={check}></img></button>
          <div style={{ border: "white", width:400, padding: 15, height:20, fontSize:"18px", textDecoration:text,color: props.style.backgroundColour == "white"? "black": "grey" 
          }}>{props.text} </div>



        </div>
        

    )


}