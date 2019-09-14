import { Attributes } from './attributes';
import { Character } from './character';

export class Player extends Character {
    private vats = 100;
    private carryWeight = 150;

    /**
     * Creates an instance of Player.
     * @param {Attributes} attributes
     * @memberof Player
     */
    constructor(attributes: Attributes) {
        super(attributes);
    }
}
