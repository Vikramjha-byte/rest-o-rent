import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import MainComponent from "./components/MainComponent";


export class App extends Component {

  
  render() {
    return (
      <BrowserRouter>
      <div>
       <MainComponent/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
