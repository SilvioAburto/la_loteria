
import React, { Component } from 'react';
import './App.css';


class App extends Component {
 
  constructor() {
    super();
    this.state = {
      secondsElapsed: 0, //time in seconds
      images : [],
      card_index: 0,
      flag: true
    };

}


  getHours() {
    return ("0" + Math.round(this.state.secondsElapsed / 3600)).slice(-2);
  }

  getMinutes() {
    return ("0" + Math.round((this.state.secondsElapsed % 3600) / 60)).slice(-2);
  }

  getSeconds() {
    return ("0" + (this.state.secondsElapsed % 60)).slice(-2);
  }

  getCardIndex(){
    return(this.state.card_index)
  }
  startTime() {
    var _this = this;
    var _that = this;
    //this.state.flag = true
    this.countdown = setInterval(function() {
      _this.setState({ secondsElapsed: _this.state.secondsElapsed + 1, card_index: _this.state.card_index + 1});
    }, 1000);

    let audio_gallo = new Audio("/la_loteria/el_gallo.mp3")
    const start_gallo = () => {
      audio_gallo.play()
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
    console.log(images)
    let card_audio = new Audio("/la_loteria/"+images[_this.state.card_index].src + ".mp3")
    card_audio.play();
    console.log(images[_this.state.card_index].src)
    const img_src = images[_this.state.card_index].src
    //To change class
    //document.getElementById(`img_id`).className = 
        // img_src;
    const div = document.querySelector(`img_id`);
    document.getElementById(`img_id`).style.backgroundImage = "url('/la_loteria/" + images[_this.state.card_index].src +".jpg')"
  }


  resetTime() {
    this.reset = this.setState({
      secondsElapsed: (this.state.secondsElapsed = 0)
    });
  }

  pauseTime() {
    clearInterval(this.countdown);
  }



  render(){
            return (
              <div className="App">
                <div class="title">La Loteria</div>
                <h1>
                  {this.getHours()}:{this.getMinutes()}:{this.getSeconds()}
                </h1>
                <h2>
                  {this.getCardIndex() + 1}
                </h2>
                <div id = "img_id" className = "img_class"></div>
                <button  class="start_button" onClick={() => this.startTime()}>Start</button>
                <button  class="pause_button" onClick={() => this.pauseTime()}>Pause</button>
                <button  class="reset_button" onClick={() => this.resetTime()}>Reset</button>
               
              </div>
            );
          }
}

export default App;
