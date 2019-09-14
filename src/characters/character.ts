import { Equipment } from './equipment';
import { Attributes } from './attributes';

export class Character {
    private health = 100;
    private equipment = new Equipment();
    
    constructor(
        private attributes: Attributes
    ) {

    }
}
