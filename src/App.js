
import React, { Component } from 'react';
import './App.css';

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

class App extends Component {
 
  constructor() {
    super();
    this.state = {
      secondsElapsed: 0, //time in seconds
      isActive: false,
      images :[
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
        }
      ],
      card_index: 0
    };
}

  getCardIndex(){
    return(this.state.card_index)
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

  imageLength(){
    return(this.state.images.length)
  }
  change_card(){
    var _this = this
    if(_this.state.card_index >= _this.state.images.length){
      console.log("All cards have been used")
    } else{
    
      const soundEffect = new Audio();

      // onClick of first interaction on page before I need the sounds
      soundEffect.play();

      // later on when you actually want to play a sound at any point without user interaction
      soundEffect.src = 'path/to/file.mp3';
      soundEffect.play();
    
    _this.state.images = shuffle(_this.state.images)
    _this.countdown = setInterval(function(){
      //alert("Hello Silvio");
      //console.log(this.card_index);
      console.log(_this.state.card_index)
      console.log(_this.state.images.length)
      const card_audio = new Audio()
      card_audio.play();
      card_audio.src = "/la_loteria/"+_this.state.images[_this.state.card_index].src + ".mp3"
      card_audio.play();
      //let card_audio = new Audio("/la_loteria/"+_this.state.images[_this.state.card_index].src + ".mp3");
      //card_audio.play();
      const div = document.querySelector(`img_id`);
      //const img_src = images[this.card_index].src
      //To change class
      //document.getElementById(`img_id`).className = 
      // img_src;
      document.getElementById(`img_id`).style.backgroundImage = "url('/la_loteria/" + _this.state.images[_this.state.card_index].src +".jpg')"
      _this.setState({ card_index:_this.state.card_index + 1})
      //_this.state.card_index = _this.state.card_index + 1
      //this.card_index = _this.state.card_index + 1
      if(_this.state.card_index >= _this.state.images.length){
        console.log("True")
        clearInterval(_this.countdown);
      }
    },3000)
  }

  } 

  resetCards() {
    this.setState({
      secondsElapsed: (this.state.card_index = 0)
    });
    clearInterval(this.countdown);
    document.getElementById(`img_id`).style.backgroundImage = "url('/loteria_cover.jpg')"

  }

  pauseTime() {
    clearInterval(this.countdown);
  }



  render(){
            return (
              <div className="App">
                <div className="title">La Loteria</div>
                <h2>
                  {this.getCardIndex()}/{this.imageLength()}
                </h2>
                <div id = "img_id" className = "img_class"></div>
                <div className = "cards_footer">
                  <button  className="start_button" onClick={() => this.change_card()}>START</button>
                  <button  className="pause_button" onClick={() => this.pauseTime()}>PAUSE</button>
                  <button  className="reset_button" onClick={() => this.resetCards()}>RESET</button>
                </div>
              </div>
            );
          }
}

export default App;
