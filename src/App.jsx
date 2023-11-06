import React from "react"
import { useState } from "react"
import moonImg from "./assets/icon-moon.svg"
import bgImage from './assets/bg-light.jpg'
import './App.css'
import Tasks from "./Tasks"
import bgImageDark from "./assets/bg-desktop-dark.jpg"
import sunImg from "./assets/icon-sun.svg"


function App() {

  const [taskText, setTaskText] = useState("");
  const [taskArray, setTaskArray] = useState([]);

  const [imgSrc, setImgSrc] = useState(moonImg);
  const [bgimgSrc, setbgImgSrc] = useState(bgImage);
  const [taskbgColor, settaskbgColor] = useState("white");
  const [textColor, setextColor] = useState("grey");
  

  const itemAdd = () => {
    setTaskArray((oldtaskArray) => {
      return (taskText != "") && [...oldtaskArray, taskText];
    })

    setTaskText("");
  }

  let listIndex = [];
  const indexList = (id)=>{
    listIndex.push(id)
  }
  

  const Completed = (listIndex)=>{
    setTaskArray((oldArray)=>{
        return oldArray.filter((element, index)=>{
          return (index in listIndex);
        });
    })
  }

  const Active = (listIndex)=>{
    setTaskArray((oldArray)=>{
        return oldArray.filter((element, index)=>{
          return (index in listIndex);
        });
    })
  }

  const AllTasks = ()=> {
    setTaskArray((oldArray)=>{
      return oldArray
      });
  }
  

  const modeChange = ()=>{
    setImgSrc(imgSrc == sunImg? moonImg: sunImg);
    setbgImgSrc(bgimgSrc == bgImageDark? bgImage: bgImageDark);
    imgSrc == sunImg? document.body.style.background = "white": document.body.style.background = "#1f1f2b";
    settaskbgColor(taskbgColor == "white"? "#24273d": "white");
    setextColor(textColor == "grey"? "#777a92": "grey")
  }


  return (
    <div style={{
      position: 'relative',
      width: '100vw',
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-end"
    }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: -1 }} >
        <img src={bgimgSrc} alt='bgImg' width={"100%"}></img>
      </div>
      <div style={{ width: 500, zIndex: 1 }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: "4vw"
        }}>
          <h1 style={{ color: 'white', letterSpacing: '0.5cm', fontSize: "35px" }}>TODO</h1>
          <img src={imgSrc} height='25px' onClick={modeChange}></img>
        </div>
        <div style={{ marginBottom: 40, position: "relative" }}>
          <input type="text" style={{ width: '100%', background:taskbgColor, padding: 15, borderRadius: 5, border: '1px white', fontSize: '18px', outline: 'none', marginTop: 20, color: textColor }} placeholder="Add a task..." value={taskText} onChange={(e) => { setTaskText(e.target.value)}}>
          </input>

          <button style={{
            borderRadius: "50%", padding: "0px", border: "1px solid #a76eef", background: "#b962ef",
            position: "absolute", top: 28, right:-15, cursor: "pointer", color:"white", fontSize:"28px",width:"7%", height:"48%", 
          }} onClick={itemAdd }>+</button>



        </div>
        {
          taskArray.map((element, index) => {
            return  <Tasks text={element} key={index} id={index} onSelect={indexList} currentImg = {imgSrc == sunImg? "true": "false"}/>
          })
        }


        <div style={{ width: 500, display: "flex", background:taskbgColor, fontSize: "12px", padding: 15, justifyContent: "space-between", color: textColor, fontWeight: "bold" }}>
          <span>Tasks left: {taskArray.length}</span>
          <span>
            <ul style={{ listStyle: "none" }}>
              <li onClick={AllTasks}>All</li>
              <li onClick={Active}>Active</li>
              <li onClick={Completed}>Complete</li>
            </ul>
          </span>
          <span onClick={Completed} style={{cursor:"pointer"}}>Clear Completed</span>
        </div>

      </div>




    </div>

  )
}

export default App
