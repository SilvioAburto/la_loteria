
import React, { Component } from 'react';
import './App.css';


class App extends Component {
 
  constructor() {
    super();


}

  display_photo(){

    let audio_gallo = new Audio("/la_loteria/el_gallo.mp3")
    const start_gallo = () => {
      audio_gallo.play()
    }

    let audio_dama = new Audio("/la_dama.mp3")
    const start_dama = () => {
      audio_dama.play()
    }

    let audio_diablito = new Audio("/el_diablito.mp3")
    const start_diablito = () => {
      audio_diablito.play()
    }
    const images = [
      {
        id: 1,
        name: "El Gallo",
        src: "el_gallo"
      },
      {
        id: 2,
        name: "El Diablito",
        src: "el_diablito"
      },
      {
        id: 3,
        name: "La Dama",
        src: "la_dama"
      },
      {
        id: 4,
        name: "El Catrin",
        src: "el_catrin"
      },
      {
        id: 5,
        name: "El Paraguas",
        src: "el_paraguas"
      },
      {
        id: 6,
        name: "La Sirena",
        src: "la_sirena"
      },


    ];
  
    for(let i = 0; i < images.length; i++ ) {
      setTimeout(() => {
        let card_audio = new Audio("/"+images[i].src + ".mp3")
        card_audio.play();
        console.log(images[i].src)
        const img_src = images[i].src
        document.getElementById(`img_id`).className =
          img_src;
      }, 3000*i);
    }
  }


  render(){


            return (
              <div className="App">
                <div class="title">La Loteria</div>
                <div id = "img_id" className = "img_class"></div>
                <button  class="start_button" onClick={() => this.display_photo()}>Start</button>
  
              </div>
            );
          }
}

export default App;
