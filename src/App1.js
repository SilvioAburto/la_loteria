
import React, { Component } from 'react';
import Sound from 'react-sound';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      newItem:"",
      list:[] //Will contain all the items in the array
    }


  }
   

  sayHello(){
    console.log("Hello");
  };


  //for local storage
  updateInput(key, value){
    this.setState({
      [key]: value
    });
  }

  addItem(){
    //create item with unique id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };

    //copy of current list of items
    const list = [...this.state.list];

    //add new item to list
    list.push(newItem);

    //update state with new list and reset newItem input
    this.setState({
      list,
      newItem:""
    })
  }


  deleteItem(id){
    //copy current list of items
    const list = [...this.state.list];

    //filter out item being deleted
    const updatedList = list.filter(item => item.id !== id);

    this.setState({list: updatedList})

  }

  render() {
    

    let audio_gallo = new Audio("/el_gallo.mp3")
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

  return (


    <div className="App">
        < div >
          <button onClick={start_gallo}>El Gallo</button>
        </div >
        < div >
          <button onClick={start_dama}>La Dama</button>
        </div >
        < div >
          <button onClick={start_diablito}>El Diablito</button>
        </div >
        <div>
          Add an Item ...
          <br/>
          <input 
            type="text"
            placeholder="Type item here..."
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
            />
            <button 
              onClick={() => this.addItem()}
              >Add
            </button>
            <br/>
            <ul>
              {this.state.list.map(item => {
                return(
                  <li key={item.id}>
                    {item.value}
                    <button
                      onClick={()=> this.deleteItem(item.id)}
                    >x</button>
                  </li>
                )
              })}
            </ul>
            <button 
              onClick={() => this.sayHello()}
              >Log Hello
            </button>    
        </div>
    </div>
  );
}
}

export default App;
