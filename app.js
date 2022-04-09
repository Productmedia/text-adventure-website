const locaton_title = document.getElementById("location")
const desription_text = document.getElementById("room-description")
const main_story_text = document.getElementById("main-story-text")


// ==============================================================
// a location or property such has a home or business has a owner
class room {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.options = []
  }

  // setters

  set_name(name){
    this.name = name
  }

  set_description(description) {
    this.description = description
  }

  get_name() {
    return this.name
  }

  get_description(){
    return this.description
  }

  add_options(option) {
    this.options.push(option)
  }
  
}


joe_room = new room("Your bedroom", "A dark scary place")
hall_way = new room("upstairs hallway", "a tight crowded hallway")
sam_room = new room("Joe's bedroom", "A dark scary place")
jamieLee_room = new room("jamie bedroom", "A dark scary place")

joe_room.add_options([hall_way])



story = ["you wake up, feeling fresh and ready for the day.", "you went downstairs and checked out the kitchen for food"]




room1 = {
"name": "Joe's bedroom",
"description": "It's very cluttered but yet very warm and welcoming.",
"rooms": ["upstairs cooridoor"]
}


room2 = {
  "name": "upstairs cooridoor",
  "desription": "quite a small gap cooridoor with a window that has minimum sunlight",
  "rooms": ["Joe's bedroom", "Jamie-lee bedroom", "Sam's bedroom", "downstairs cooridoor"]
   
}


// typeSentence(room1.description, text_space, 29)
typeSentence(joe_room.description, desription_text, 29)
typeSentence(story[1], main_story_text, 29)

locaton_title.innerHTML = joe_room.name;
// joe_room.add_options(hall_way)
console.log(joe_room)


