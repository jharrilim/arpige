import { WearableItem } from '../items/wearable-item';

export class Equipment {
    public head?: WearableItem;
    public body?: WearableItem;
    public leftLeg?: WearableItem;
    public rightLeg?: WearableItem;
    public leftArm?: WearableItem;
    public leftShoulder?: WearableItem;
    public rightArm?: WearableItem;
    public rightShoulder?: WearableItem;

    constructor() { }
}
