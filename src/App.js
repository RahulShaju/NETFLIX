import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css"
import {originals,actions,Horror,Comedy,Romance} from './urls'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";

function App() {
  
  return ( 
    <React.Fragment>
    <NavBar/>
    <Banner/>
    <RowPost url={originals} title='Netflix Originals' />
    <RowPost url={actions} title='Action Movies' isSmall/>
    <RowPost url={Horror} title='Horror Movies' isSmall/>
    <RowPost url={Comedy} title='Comedy Movies' isSmall/>
    <RowPost url={Romance} title='Romatic Movies' isSmall/>
    </React.Fragment>
  );
}

export default App;
