import { CharacterEquipment } from './character-equipment';

export class Character {
    private health = 100;
    private playerEquipment = new CharacterEquipment();
    
    constructor() { }
}
