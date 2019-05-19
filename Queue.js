export class Queue {
    data;

    constructor() {
        this.data = [];
    }

    add(item) {
        this.data.push(item);
    }

    remove() {
        return this.data.splice(0, 1);
    }

    getO() {
        return this.data[0];
    }

    getL() {
        return this.data[this.data.length-1];
    }
}