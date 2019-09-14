import { Player } from './player';

export class GameState {
    private player: Player;
    constructor(opts: { player: Player }) {
        this.player = opts.player;
    }
}
