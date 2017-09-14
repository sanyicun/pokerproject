import React, { Component } from 'react';
import './App.css';
import Options from "./Options.js"
import Table from "./Table.js"
import Image from "./Image.js"


function shuffleDeck(array){
  var currentIndex = array.length, temporaryValue, randomIndex
  while(0 !== currentIndex){
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}


class App extends Component {
  constructor(props){
    super(props)
   

  var hearts = []
  var spades = []
  var diamonds = []
  var clubs = []

  
  for (var i = 2; i < 15; i++ ){
    hearts.push({
      number : i,
      suit: "hearts"
    })
    spades.push({
      number : i,
      suit: "spades"
    })
    diamonds.push({
      number : i,
      suit: "diamonds"
    })
    clubs.push({
      number : i,
      suit: "clubs"
    })  
  }

  var deck = hearts.concat(spades).concat(diamonds).concat(clubs);

  shuffleDeck(deck)


   var users = [{
      username : "user1",
      clock : Date(),
      stack : 500,
      hand : [deck.pop(), deck.pop()],
      position : "",
    }, 
      {
      username : "user2",
      clock : Date(),
      stack : 500,
      hand : [deck.pop(), deck.pop()],
      position : "",
    }]


    this.state = {
      users: users,
      deck : deck,
      board: {
        flop: [deck.pop(), deck.pop(),deck.pop()],
        turn: [deck.pop()],
        river: [deck.pop()]
      }
    }
  
    


  }


  render() {
  
 
    return (
      <div className="App">

        <Image />

        <Table players={this.state.users}
               flopTurnRiver= {this.state.board}/>

        
        <Options />

      </div>
    );
  }
}

export default App;
