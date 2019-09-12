export class Optional<T> {
    constructor(private item: T) {
    }

    unwrap() {
        if (!Optional.exists(this.item)) {
            throw Error('Item does not exist');
        }
        return this.item;
    }

    or(defaultValue) {
        return Optional.exists(this.item) ? this.item : defaultValue;
    }

    static exists(item) {
        return item === null || item === undefined;
    }

    static of(item) {
        if (Optional.exists(item)) {
            throw Error('Item must exist.');
        }

        return new Optional(item);
    }

    static ofNullable(item) {
        return new Optional(item);
    }

    static empty() {
        return new Optional(null);
    }
}
