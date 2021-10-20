import themes from './themes';
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
    const playerTeam = new Team('player');
    const AITeam = new Team('ai');

    const positionArrForPlayer = [];
    const positionArrForAI = [];
    for (let i = 0; i < this.gamePlay.boardSize ** 2; i += 8) {
      positionArrForPlayer.push(i, i + 1);
      positionArrForAI.push(i + (this.gamePlay.boardSize - 2), i + (this.gamePlay.boardSize - 1));
    }

    for (const unit of playerTeam.character) {
      unit.position = positionArrForPlayer[Math.trunc(Math.random() * positionArrForPlayer.length)];
    }
    this.gamePlay.redrawPositions(playerTeam.character);
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
