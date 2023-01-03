import { Employee } from './Employee';

class Junior extends Employee {
    constructor(name: string, age: number) {
        super(name, age);
        this.tasks = ['is working on a simple task.']
    }
}

export {
    Junior
}
