//Define our employee class.
//Our employee class has a "name", "salary", "title" "manager" properties
//Manager property is set to null if no manager argument is passed in.
// const Manager = require('./manager')

class Employee {
  constructor(name, salary, title, manager = null) {
    this.name = name;
    this.salary = salary;
    this.title = title;
    this.manager = manager;
    if (manager) {
      manager.addEmployee(this);
    }
  }

  calculateBonus(multiplier) {
    let bonus = this.salary * multiplier;
    return bonus;
  }
}

module.exports = Employee;
