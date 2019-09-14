import { GameState } from './game-state';

export class Game {
    private gameAlive = true;
    private gameState?: {} = {};
    
    constructor() {
    }

    init() {
        
    }

    start(gameState: GameState) {
        this.gameAlive = true;

        if(!gameState) {

        }

        while(!this.gameAlive) {

        }
    }

    save() {

    }

    stop() {
        this.gameAlive = false;
    }
}
