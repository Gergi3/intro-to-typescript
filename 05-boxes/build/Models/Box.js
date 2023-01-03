class Box {
    constructor() {
        this._boxes = [];
    }
    add(el) {
        this._boxes.push(el);
    }
    remove() {
        this._boxes.pop();
    }
    get count() {
        return this._boxes.length;
    }
}
export { Box };
