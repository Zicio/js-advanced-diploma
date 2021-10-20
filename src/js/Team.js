import Bowman from './Bowman';
import Daemon from './Daemon';
import Magician from './Magician';
import Swordsman from './Swordsman';
import Undead from './Undead';
import Vampire from './Vampire';
import generateTeam from './generators';

export default class Team {
  constructor(party) {
    if (party === 'player') {
      this.character = generateTeam([Bowman, Magician, Swordsman], 1, 2);
    }
    else if (party === 'ai') {
      this.character = generateTeam([Daemon, Undead, Vampire], 1, 2);
    }
  }
}
