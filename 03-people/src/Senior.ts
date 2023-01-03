import { Employee } from './Employee';

class Senior extends Employee {
    constructor(name: string, age: number) {
        super(name, age);
        this.tasks = [ 
            'scheduled a meeting.',
            'is preparing a quarterly report.'
        ];
    }

}

export {
    Senior
}
