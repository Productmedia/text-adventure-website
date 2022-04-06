

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

// in my room i can interact with:
// weights, pc, clothes, phone, other objects 
// on certain objects i can further fiddle with them, 
// such as pc i can go online for research or play games or work on something

// i can leave my home and go towards a location 
// i can get details of what is happening on the way there.

//an event can happen that can trigger the option panel to drop in and select what i do in that situation

// a monster or a interactive moment can be adjustable by making it randomly between 2 sections that it can roam between 

// on my way to the shop someone stopped me and said or done ...

// on the story path we should be able to give options to the player and 
// dive down that path some paths can rejoin back up to the main story so everybody arrives
// the same way/ direction of what is going on in the story 

// a great way of doing this is by incorprating of going to a casino and playing blackjack 

// obliviously alot of people start of with small talk, so we should have a options for
// us and the npc to choose from.

// player has to go towards work at certain time 
// go sleep other wise will pass out. (can effect or become the story)

// a person has a story has well and can be connected and have same experience of 
// other characters as long as same time and place.

// can become a investigator and interview people about stuff 




