import { Tile } from './tile';

export class GameArea {

    constructor(
        private name: string,
        private description: string,
        private tiles: Tile[][]
    ) {

    }
}
