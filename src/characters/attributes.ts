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
    static attributeTotalLessThanInitialMax(attributes: Attributes, offset = 0) {
        attributes.total + offset < Attributes.maxInitialStats;
    }

    static createInitialAttributes() {

    }
}
