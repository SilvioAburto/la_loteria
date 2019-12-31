
import React from 'react';

export default class ImageVisualizer extends React.Component {

display_photo(){
    const projects = [
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

    for(let i = 0; i < projects.length; i++ ) {
      console.log("Hello")
      console.log(projects[i])
      console.log(<img key={projects.id} src={projects.src} alt="can't show image" />);
      return(<ul>df</ul>)
    }
  }

  render(){
    return (
      <div className="Array-Container">
        Hello World
        < div >
          <button onClick={() => this.display_photo()}>Press me</button>
        </div >

      </div>
    );
  }

}