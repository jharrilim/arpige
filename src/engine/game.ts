import { GameState, GameStateOpts } from './game-state';
import { Player } from '../characters/player';
import { Engine } from './engine';
import { homeDataDirectory } from './platform';

export abstract class Game {
    private gameAlive = true;
    private engine: Engine<GameStateOpts, typeof GameState> = new Engine('arpige', GameState);

    constructor() { }

    abstract createNewPlayer(): Player;

    start(gameState: GameState) {
        this.gameAlive = true;

        if (!gameState) {
            GameState.createInitialState(this.createNewPlayer());
        }

        while (!this.gameAlive) {
            
        }
    }

    async save() {
        await this.engine.saveGameState(
            homeDataDirectory()('save.json')
        );
    }

    async load() {
        await this.engine.loadGameState(homeDataDirectory()('save.json'));
    }

    stop() {
        this.gameAlive = false;
    }
}
