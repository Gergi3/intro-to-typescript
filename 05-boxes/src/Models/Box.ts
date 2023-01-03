class Box<T> {
    private _boxes : T[] = [];

    constructor() {
    }

    public add(el: T) : void {
        this._boxes.push(el);
    }

    public remove() : void{
        this._boxes.pop();
    }

    
    public get count() : number {
        return this._boxes.length;
    }
}

export {
    Box
}