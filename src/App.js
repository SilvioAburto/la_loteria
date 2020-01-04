
import React, { Component } from 'react';
import './App.css';

//Render Sound works on its own on ios but not when called by 
const render_sound = () => {
  console.log("function playing")
  var music = new Audio("https://silvioaburto.github.io/la_loteria/la_sirena.mp3")
  //var chime = new Audio("https://silvioaburto.github.io/la_loteria/la_sirena.mp3") 
  var nothing = new Audio("http://touchbasicapp.com/nothing.wav")
  var allAudio = []
  allAudio.push(music)
  
  //allAudio.push(chime)
  
  var tapped = function() {
  // Play all audio files on the first tap and stop them immediately.
  if(allAudio) {
    for(var audio of allAudio) {
      audio.play()
      audio.pause()
      audio.currentTime = 0
    }

  allAudio = null
  
  }
  // We should be able to play music delayed now (not during the tap event).
  //messagediv.innerHTML = "Music starts in 2 seconds..."
  //messagediv.innerHTML = "Music playing. <button onclick='stop()'>Stop</button>"
  music.play()
  
}  
  //Add this back if you want to listen to last sound
  //document.body.addEventListener('touchstart', tapped, false)
  //document.body.addEventListener('click', tapped, false)
  
  //Stop Function
  var stop = function() {
    music.pause()
    loop = null
    document.body.removeEventListener('touchstart', tapped, false)
    document.body.removeEventListener('click', tapped, false)
  
  }
  
  // Check if audio starts already unlocked by playing a blank wav.
  nothing.play().then(function() {
  
  //lockeddiv.innerHTML = "Audio started unlocked!"
  
  }).catch(function(){
  
  //lockeddiv.innerHTML = "Audio started locked :("
  })
  
  var loop = function() {
  
  music.play().then(function(){
  
  //	lockeddiv.innerHTML = "Audio is now unlocked!"
  
  })  
  
  }
  
    //loop()
  }
  

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
        },
        {
          id: 7,
          name: "La escalera",
          src: "la_escalera"
        },
        {
          id: 8,
          name: "La botella",
          src: "la_botella"
        },
        {
          id: 9,
          name: "El barril",
          src: "el_barril"
        },
        {
          id: 10,
          name: "El arbol",
          src: "el_arbol"
        },
        {
          id: 11,
          name: "El melon",
          src: "el_melon"
        },
        {
          id: 12,
          name: "El valiente",
          src: "el_valiente"
        },
        {
          id: 13,
          name: "El gorrito",
          src: "el_gorrito"
        },
        {
          id: 14,
          name: "La muerte",
          src: "la_muerte"
        },
        {
          id: 15,
          name: "La pera",
          src: "la_pera"
        },
        {
          id: 16,
          name: "La bandera",
          src: "la_bandera"
        },
        {
          id: 17,
          name: "El bandolon",
          src: "el_bandolon"
        },
        {
          id: 18,
          name: "El violoncello",
          src: "el_violoncello"
        },
        {
          id: 19,
          name: "La garza",
          src: "la_garza"
        },
        {
          id: 20,
          name: "El pajaro",
          src: "el_pajaro"
        },
        {
          id: 21,
          name: "El Gallo",
          src: "el_gallo"
        },
        {
          id: 22,
          name: "El Diablito",
          src: "el_diablito"
        },
        {
          id: 23,
          name: "La Dama",
          src: "la_dama"
        },
        {
          id: 24,
          name: "El Catrin",
          src: "el_catrin"
        },
        {
          id: 25,
          name: "El Paraguas",
          src: "el_paraguas"
        },
        {
          id: 26,
          name: "La Sirena",
          src: "la_sirena"
        },
        {
          id: 27,
          name: "La escalera",
          src: "la_escalera"
        },
        {
          id: 28,
          name: "La botella",
          src: "la_botella"
        },
        {
          id: 29,
          name: "El barril",
          src: "el_barril"
        },
        {
          id: 30,
          name: "El arbol",
          src: "el_arbol"
        },
        {
          id: 31,
          name: "El melon",
          src: "el_melon"
        },
        {
          id: 32,
          name: "El valiente",
          src: "el_valiente"
        },
        {
          id: 33,
          name: "El gorrito",
          src: "el_gorrito"
        },
        {
          id: 34,
          name: "La muerte",
          src: "la_muerte"
        },
        {
          id: 35,
          name: "La pera",
          src: "la_pera"
        },
        {
          id: 36,
          name: "La bandera",
          src: "la_bandera"
        },
        {
          id: 37,
          name: "El bandolon",
          src: "el_bandolon"
        },
        {
          id: 38,
          name: "El violoncello",
          src: "el_violoncello"
        },
        {
          id: 39,
          name: "La garza",
          src: "la_garza"
        },
        {
          id: 40,
          name: "El pajaro",
          src: "el_pajaro"
        },
        {
          id: 41,
          name: "El Gallo",
          src: "el_gallo"
        },
        {
          id: 42,
          name: "El Diablito",
          src: "el_diablito"
        },
        {
          id: 43,
          name: "La Dama",
          src: "la_dama"
        },
        {
          id: 44,
          name: "El Catrin",
          src: "el_catrin"
        },
        {
          id: 45,
          name: "El Paraguas",
          src: "el_paraguas"
        },
        {
          id: 46,
          name: "La Sirena",
          src: "la_sirena"
        },
        {
          id: 47,
          name: "La escalera",
          src: "la_escalera"
        },
        {
          id: 48,
          name: "La botella",
          src: "la_botella"
        },
        {
          id: 49,
          name: "El barril",
          src: "el_barril"
        },
        {
          id: 50,
          name: "El arbol",
          src: "el_arbol"
        },
        {
          id: 51,
          name: "El melon",
          src: "el_melon"
        },
        {
          id: 52,
          name: "El valiente",
          src: "el_valiente"
        },
        {
          id: 53,
          name: "El gorrito",
          src: "el_gorrito"
        },
        {
          id: 54,
          name: "La muerte",
          src: "la_muerte"
        },
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
      //shuffle the card order 
      _this.state.images = shuffle(_this.state.images)

      var allAudio = [];
      for(var i = 0; i <_this.state.images.length; i++){
        allAudio[i] = new Audio("https://silvioaburto.github.io/la_loteria/" +_this.state.images[i].src +".mp3")
        console.log(allAudio)
      }
      console.log("function playing")
/*       var la_sirena_sound = new Audio("https://silvioaburto.github.io/la_loteria/la_sirena.mp3")
      var el_gallo_sound = new Audio("https://silvioaburto.github.io/la_loteria/el_gallo.mp3")
      var la_dama_sound = new Audio("https://silvioaburto.github.io/la_loteria/la_dama.mp3")
      var nothing = new Audio("http://touchbasicapp.com/nothing.wav")
      var allAudio = []
      allAudio.push(la_sirena_sound)
      allAudio.push(el_gallo_sound) */
      
      //allAudio.push(chime)
      var nothing = new Audio("http://touchbasicapp.com/nothing.wav")
      var tapped = function() {
      // Play all audio files on the first tap and stop them immediately.
      if(allAudio) {
        for(var audio of allAudio) {
          //console.log()
          audio.play()
          audio.pause()
          audio.currentTime = 0
        }
    
      allAudio = null
      
      }
      // We should be able to play music delayed now (not during the tap event).
      //messagediv.innerHTML = "Music starts in 2 seconds..."
      //messagediv.innerHTML = "Music playing. <button onclick='stop()'>Stop</button>"
      //music.play()
      
    }  
      //Add this back if you want to listen to last sound
      document.body.addEventListener('touchstart', tapped, false)
      document.body.addEventListener('click', tapped, false)
      
      //Stop Function
      var stop = function() {
        //la_sirena_sound.pause()
        play_card_sound = null
        //document.body.removeEventListener('touchstart', tapped, false)
        //document.body.removeEventListener('click', tapped, false)
      
      }
      
      // Check if audio starts already unlocked by playing a blank wav.
      nothing.play().then(function() {
      
      //lockeddiv.innerHTML = "Audio started unlocked!"
      
      }).catch(function(){
      
      //lockeddiv.innerHTML = "Audio started locked :("
      })
      
      var play_card_sound = function(audio_index) {
      
      allAudio[audio_index].play()
      
      }
    //Update card every 3 seconds
    _this.countdown = setInterval(function(){
      //alert("Hello Silvio");
      //console.log(this.card_index);
      console.log("Index:" + _this.state.card_index) //log the card index
      console.log("Length:" + _this.state.images.length) //log card array length

      play_card_sound(_this.state.card_index);
      //render_sound();
      const div = document.querySelector(`img_id`);
      //const img_src = images[this.card_index].src
      //To change class
      //document.getElementById(`img_id`).className = 
      // img_src;
      document.getElementById(`img_id`).style.backgroundImage = "url('/img/" + _this.state.images[_this.state.card_index].src +".jpg')"

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
    document.getElementById(`img_id`).style.backgroundImage = "url('/la_loteria/loteria_cover.jpg')"

  }

  pauseTime() {
    clearInterval(this.countdown);
  }



  render(){
            return (
              <div className="App">
                <div className="title">La Loteria</div>
                <div>
                  {this.getCardIndex()}/{this.imageLength()}
                </div>
                <div id = "img_id" className = "img_class"></div>
                <div className = "cards_footer">
                  <button  className="start_button" onClick={() => this.change_card()}>START</button>
                  <button  className="pause_button" onClick={() => this.pauseTime()}>PAUSE</button>
                  <button  className="reset_button" onClick={() => this.resetCards()}>RESET</button>
                </div>
                <button  className="play_button" onClick={() => render_sound()}>Play</button>
              </div>
            );
          }
}

export default App;
