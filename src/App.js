import { useState } from 'react';
import './App.css';
import { SketchPicker } from 'react-color';

function App() {
  const[currentcolor, setColor]=useState("#800080");

  const handlemover=(color)=>{
     setColor(color.hex)
  }
  const applet={
    backgroundColor:currentcolor,
    height:"100vh",
    textAlign:"center",
    
  }
  return (
    <div className="App" style={applet}>
     <h1>React Colorpicker</h1>
     <SketchPicker 
     color={currentcolor}
     onChange={handlemover}/>

     <h1>Here is your color code:{currentcolor}</h1>
    </div>
  );
}

export default App;