export class Game {
    private gameAlive = true;
    private gameState?: {} = {};
    
    constructor() {
    }

    start(gameState) {
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
