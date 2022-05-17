import React, { useContext } from "react";
import {connect} from 'react-redux';
import { useState,useRef,useEffect } from "react";
import './App.css';
import Intro from "./store/Header/intro";
import About from "./store/About";
import Product from "./store/Header/product";
import Contact from "./store/Header/contact";
import Toggle from "./store/Header/toggle";
import { ThemeContext } from "./context";




const App = ()=>{
  const theme= useContext(ThemeContext)
  const darkMode =theme.state.darkMode;

  return(
    <div style={{backgroundColor:darkMode ? '#222':'white',
    color:darkMode && "white",
    }}>
      
      <Toggle/>
      <Intro/>
      <About/>
      <Product/>
      <Contact/>
    </div>
  )
}
export default App;






































// import React from "react";
// import './App.css';
// import {Routes,Route,Link} from 'react-router-dom';
// import {useState,useEffect,useRef} from 'react';
// function App(){
//   const [result,setResult]=useState('');
//   const inputRef=useRef(null);
//   useEffect(()=>inputRef.current.focus());
//   function handleClick(e){
//          setResult(result.concat(e.target.name))
//   }
//  function DEL(){
//    setResult(result.slice(0,-1))
//  }
//  function clear(){
//    setResult('')
//  }
//  function resultshow(){
//    try{
//      setResult(eval(result).toString());
//    }catch(eror){
//      setResult('Error')
//    }
//  }
//   return(
//     <div className="maindiv">
//       <h1>Calculator App</h1>
//        <input type="text" value={result} ref={inputRef} />
//     <div className="buttdiv">
//        <button id="clear" onClick={clear}>Clear</button>
       
//        <button id="delete" onClick={DEL}>C</button>
//        <button name="+" onClick={handleClick}>+</button>
//        <button name="7" onClick={handleClick}>7</button>
//        <button name="8" onClick={handleClick}>8</button>
//        <button name="9" onClick={handleClick}>9</button>
//        <button name="-" onClick={handleClick}>-</button>
//        <button name="4" onClick={handleClick}>4</button>
//        <button name="5" onClick={handleClick}>5</button>
//        <button name="6" onClick={handleClick}>6</button>
//        <button name="*" onClick={handleClick}>*</button>
//        <button name="1" onClick={handleClick}>1</button>
//        <button name="2" onClick={handleClick}>2</button>
//        <button name="3" onClick={handleClick}>3</button>
//        <button name="/" onClick={handleClick}>/</button>
//        <button name="0" onClick={handleClick}>0</button>
//        <button name="." onClick={handleClick}>.</button>
//        <button id="result" onClick={resultshow}>Result</button>
//       </div>
//     </div>
//   )
// }
// export default App;
