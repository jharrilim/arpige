import { Player } from '../characters/player';
import { GameArea } from '../world/area';

export interface GameStateOpts {
    player?: Player;
    area?: GameArea;
}

export class GameState {
    public player?: Player;
    public currentArea?: GameArea;
    constructor(state: GameStateOpts) {
        this.player = state.player;
        this.currentArea = state.area;
    }
    static createInitialState(player: Player) {
        return new GameState({ player });
    }
}
