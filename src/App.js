import Card from "./components//profileCard/card";
import Education from "./components/education.jsx";
import './App.css'
import './components/styles/education.css'
import {React,useState}  from 'react';
import Navbar from "./components/navbar";

function App() {

  let [click,setClick] = useState(true);

  function handleClick(){
    setClick(prevClick => !prevClick)
  }

  return (
   <div className="main">
    <Navbar clicked={click} buttClick={handleClick}/>
    {click ? <Card/> : <div className="histpage">{Education}</div>}
</div>
  );
}

export default App;
