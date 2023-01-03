import { Employee } from './Employee';

class Manager extends Employee {
    public dividend: number;

    constructor(name: string, age: number) {
        super(name, age);
        this.tasks = [
            'is working on a complicated task.',
            'is taking time off work.',
            'is supervising junior workers.'
        ]
        this.dividend = 0;
    }

    protected getSalary(): number {
        return this.salary + this.dividend;
    }
}

export {
    Manager
}
