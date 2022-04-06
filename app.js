

// rooms/story are are written and can then be placed in the story line 

// when player is suppose to be met with a choice it then splits up and the player 
// will choose what path to continue 

// we could have a person or a creature lure certain places between sections so 
// we can exchange different type of convos 
// can also then have some paths requiring a key to unlock a door to that part 


// 1) create a story of going towards the shop and buying some choices 
// my bedroom that is connected to my house then walk down the road towards the shop
// go into the co op and see what they are selling and buy something and then leave the shop to go back

// 1.1 )
// a place, a entered state to a place and then inner ones of those 
// so we can go into my house into my room. 

// 1.2 ) 
// a house is a place that you can enter from the public place 
// and that can have other smaller rooms than the size of this 

// ========= will require to simplify the description of what the box is 
// box is a template of a area or a place 
// ie a busy city, that can have a shop that you can enter into that box 
// which is a room or a place that has a interaction such as buying something 
// or interacting with someone or something 
// that can cause actions or behaviour such as requiring a key to active the object 


// what does a box features and information have? 
// it's got a name: location/place, room name, persons home, 
// where it is located? location in the scenery/ how to get there?


// a location or property such has a home or business has a owner
class box {
  constructor(name) {
    this.name = name;
  }
}

// story tell the user what is currently happen and what they want from the story ie choosing what happens
// if there is nothing to choose from just allow the user to press enter to continue or space, 
// this would happen when dailog has happen or knowing what has been said/done so probably will require 
// a data that keeps track of what has happened and what is happening/ what is the goal

story = [""]


