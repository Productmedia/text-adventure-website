class Card {
  constructor(name, level, type, typeValue, description) {
    this.name = name;
    this.type = type;
    this.typeValue = typeValue;
    this.level = level;
    this.description = description;
  }
}


const melee = new Card("Melee attack", 2, "Damage", 8, "Punches the opponent in the face")
const range = new Card("Range attack", 1, "damage", 3, "throws a rock at the opponent")


