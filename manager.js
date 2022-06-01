const Employee = require('./employee');


class Manager extends Employee {
    constructor(name, salary, title, manager, employees = []) {
        super(name, salary, title, manager = null)
        this.employees = employees
    }

    addEmployee(employee) {
        //add to employees array
        this.employees.push(employee)
    }

}

module.exports = Manager;
