import { Pickup } from './pickup';

export class WearableItem extends Pickup {
    constructor(
        public readonly name: string, 
        public readonly defenseRating: number
    ) {
        super();
    }
}
