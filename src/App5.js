import React, { Component } from 'react';
import ReactDom from "react-dom";
import { render } from "@testing-library/react";

export const images = [
  {
    id: 1,
    name: "Tic Tac Toe game",
    src: "http://www.m9c.net/uploads/15682238971.gif"
  },
  {
    id: 2,
    name: "Tic Tac Toe game",
    src: "la_dama.jpg"
  },
  {
    id: 3,
    name: "Tic Tac Toe game",
    src: "el_gallo.jpg"
  }
];

class App extends Component {

render(){
          return (
            <div className="App">
              Hello World
              < div >
                <button onClick={() => this.display_photo()}>El Diablito</button>
              </div >
              {images.map(p => {
                return <img key={p.id} src={p.src} alt="can't show image" />;
              })}
            </div>
          );
        }
      }

export default App;