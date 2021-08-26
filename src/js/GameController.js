import themes from './themes';
import generateTeam from './generators';
import Team from './Team';
import PositionedCharacter from './PositionedCharacter';

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
    this.themes = themes;
  }

  init() {
    this.gamePlay.drawUi(themes.prairie);
    const team = new Team();
    const playerTeam = generateTeam(team.playerTeams, 1, 2);
    const aiTeam = generateTeam(team.playerTeams, 1, 2);

    const positionArr = [];
    for (let i = 0; i < playerTeam; i++) {
      positionArr.push(new PositionedCharacter(playerTeam[i], GameController.positionGenerator(0 + i, 56 + i)[Math.trunc(Math.random() * this.gamePlay.boardSize)])); // доработать
    }
    this.gamePlay.redrawPositions(positionArr);
    // TODO: add event listeners to gamePlay events
    // TODO: load saved stated from stateService
  }

  static positionGenerator(from, to) {
    const range = {
      from,
      to,

      * [Symbol.iterator]() {
        for (let value = from; value <= to; value += this.gamePlay.boardSize) {
          yield value;
        }
      },
    };
    return [...range];
  }

  onCellClick(index) {
    // TODO: react to click
  }

  onCellEnter(index) {
    // TODO: react to mouse enter
  }

  onCellLeave(index) {
    // TODO: react to mouse leave
  }
}
