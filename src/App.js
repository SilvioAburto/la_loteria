
import React, { Component } from 'react';
import './App.css';
import {return_cards} from './loteria_functions.js'



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
      isActive: false,
      images : return_cards(),
      images_used : [],
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

  filter_used_cards(img_array, img_array_exclude){
    return(img_array.filter(i => !img_array_exclude.includes(i.id)))
  }

  change_card(){
    var _this = this
    console.log("Start pressed")
    console.log("Images used so far" + _this.state.images_used)
    //shuffle the card order everytime start button is clicked
    _this.state.images = shuffle(_this.state.images)
    var allAudio = [];
    console.log(this.filter_used_cards(_this.state.images, _this.state.images_used).length)
    //Store all audio into a var array
    for(var i = 0; i < _this.state.images.length; i++){
      allAudio[i] = new Audio("https://silvioaburto.github.io/la_loteria/sounds/" +_this.state.images[i].src +".mp3")
    }
    //Only load sounds at the beginning of a game
    if(_this.state.card_index === 0){
      //Initialize all the audio
      if(allAudio) {
        for(var audio of allAudio) {
          audio.load()
          audio.pause()
          audio.currentTime = 0
        }
      }
    }
    //If all cards have been used do nothing. Game must be restarted
    if(_this.state.card_index >= _this.state.images.length){
      console.log("All cards have been used")
    } else{ 
      //Define card sound function
      console.log("Game in progress..")     
      var play_card_sound = function(audio_index) {   
      allAudio[audio_index].play()
        }
    }

    //Update card every 3 seconds
    _this.countdown = setInterval(function(){
      //alert("Hello Silvio");
      //console.log(this.card_index);
      console.log("Index:" + _this.state.card_index) //log the card index
      console.log("Length:" + _this.state.images.length) //log card array length
      //Keep track of used cards 
      _this.state.images_used.push(_this.state.images[_this.state.card_index].id)
      //Play current card sound
      play_card_sound(_this.state.card_index);
      //Show current card image
      document.getElementById(`img_id`).style.backgroundImage = "url('https://silvioaburto.github.io/la_loteria/img/" + _this.state.images[_this.state.card_index].src +".jpg')"
      //Update card index
      _this.setState({ card_index:_this.state.card_index + 1})
      //Stop Interval and reset once the current card is equal to the total cards length
      if(_this.state.card_index >= _this.state.images.length){
        clearInterval(_this.countdown);
        _this.setState({card_index: 0, images_used:[]})
      }
    },2000)

  } 

  resetCards() {
    this.setState({card_index:0, images_used:[]});
    clearInterval(this.countdown);
    document.getElementById(`img_id`).style.backgroundImage = "url('https://silvioaburto.github.io/la_loteria/img/loteria_cover.jpg')"
  }

  pauseTime() {
    console.log("Game paused")
    clearInterval(this.countdown);
  }



  render(){
            return (
              <div className="App">
                <div id = "img_id" className = "img_class"> 
                <div className = "card_index">
                  {this.getCardIndex()}/{this.imageLength()}
                </div></div>
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
