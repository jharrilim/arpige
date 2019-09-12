import { Optional } from './optional';

export class Attributes {
    static maxInitialStats = 40;
    private strength = 0;
    private perception = 0;
    private endurance = 0;
    private charisma = 0;
    private intelligence = 0;
    private agility = 0;
    private luck = 0;
    
    get total() {
        let total = 0;
        for (let key in this) {
            total += this[key] as unknown as number;
        }
        return total;
    }

    /**
     *
     * @static
     * @param {Attributes} attributes
     * @param {number} [offset=0]
     * @memberof Attributes
     */
    static attributeTotalLessThanInitialMax(attributes, offset = 0) {
        attributes.total + offset < Attributes.maxInitialStats;
    }
}

export class Pickup {
    constructor(public readonly weight = 0) { }
}

export class WearableItem extends Pickup {
    constructor(
        public readonly name: string, 
        public readonly defenseRating: number
    ) {
        super();
    }
}

export class CharacterEquipment {
    public head: Optional<WearableItem> = Optional.empty();
    public body: Optional<WearableItem> = Optional.empty();
    public leftLeg: Optional<WearableItem> = Optional.empty();
    public rightLeg: Optional<WearableItem> = Optional.empty();
    public leftArm: Optional<WearableItem> = Optional.empty();
    public leftShoulder: Optional<WearableItem> = Optional.empty();
    public rightArm: Optional<WearableItem> = Optional.empty();
    public rightShoulder: Optional<WearableItem> = Optional.empty();

    constructor() { }
}


export class Character {
    private health = 100;
    private playerEquipment = new CharacterEquipment();
    
    constructor() { }
}

export class Player extends Character {
    private vats = 100;
    private carryWeight = 150;
    private attributes: Attributes;

    /**
     * Creates an instance of Player.
     * @param {Attributes} attributes
     * @memberof Player
     */
    constructor(attributes: Attributes) {
        super();
        this.attributes = attributes;
    }
}

export class GameState {
    private player: Player;
    constructor(opts: { player: Player }) {
        this.player = opts.player;
    }
}

export class GameArea {
    constructor() {

    }
}

export class GameMap {
    constructor() {
        // TODO: Create map containing multiple game areas
    }
}

export class Game {
    private gameAlive = true;
    private gameState = Optional.empty();
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

export class ConsoleGame {
    constructor() {

    }
}
