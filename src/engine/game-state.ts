import { Player } from '../characters/player';

export interface GameStateOpts {
    player?: Player;
}

export class GameState {
    private player?: Player;
    constructor(state: GameStateOpts) {
        this.player = state.player;
    }
    static createInitialState(player: Player) {
        return new GameState({ player });
    }
}
