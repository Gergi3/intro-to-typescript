abstract class Employee {
    public name: string;
    public age: number;
    public salary: number;
    public tasks: string[];
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.salary = 0;
        this.tasks = [];
    }

    public work(): void {
        let currentTask = this.tasks.shift();
        if (typeof currentTask == 'undefined') {
            return;
        }

        this.tasks.push(currentTask);
        console.log(`${this.name} + ${currentTask}`);
    }

    public collectSalary(): void {
        console.log(`${this.name} received ${this.getSalary()} this month.`);
    }

    protected getSalary(): number {
        return this.salary;
    }
}

export {
    Employee
}