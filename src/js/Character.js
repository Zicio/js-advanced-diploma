export default class Character {
  constructor(level, type = 'generic') {
    if (new.target.name === 'Character') {
      throw new Error("You can't create instances through the Character class");
    }
    this.level = level;
    this.health = 50;
    this.type = type;
  }
}
