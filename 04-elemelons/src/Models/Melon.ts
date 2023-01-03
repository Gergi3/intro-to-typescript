abstract class Melon {
    public weight: number;
    public sort: string;

    constructor(weight: number, sort: string) {
        this.weight = weight;
        this.sort = sort;
    }

    public get elementIndex(): number {
        return this.weight * this.sort.length;
    }

    public toString(): string {
        return `
            Element: ${(this.constructor.name).replace('melon', '')}
            Sort: ${this.sort}
            Element Index: ${this.elementIndex}
        `.trim();
    }
}

export {
    Melon
}