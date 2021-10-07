import Bowman from './Bowman';
import Daemon from './Daemon';
import Magician from './Magician';
import Swordsman from './Swordsman';
import Undead from './Undead';
import Vampire from './Vampire';

export default class Team {
  constructor() {
    this.playerUnits = [Bowman, Magician, Swordsman];
    this.uiUnits = [Daemon, Undead, Vampire];
  }
}
