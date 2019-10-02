import { GameState, GameStateOpts } from './game-state';
import { Player } from '../characters/player';
import { Engine } from './engine';

export abstract class Game {
    private gameAlive = true;
    private gameState?: GameState;
    private engine: Engine<GameStateOpts, typeof GameState> = new Engine('arpige', GameState);

    constructor() {

    }

    init() { }

    abstract createNewPlayer(): Player;

    start(gameState: GameState) {
        this.gameAlive = true;

        if (!gameState) {
            GameState.createInitialState(this.createNewPlayer());
        }

        while (!this.gameAlive) {

        }
    }

    save() {

    }

    stop() {
        this.gameAlive = false;
    }
}
