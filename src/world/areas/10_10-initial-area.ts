import { GameArea } from '../area';
import { Tile } from '../tile';

const areaTiles: Tile[][] = [
    []
] 

export class InitialArea extends GameArea {
    constructor() {
        super(
            'InitialArea',
            'The tutorial area',
            areaTiles
        );
    }
}

export default InitialArea;
