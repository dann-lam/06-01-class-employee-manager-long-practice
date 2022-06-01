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
    if(manager){
      manager.addEmployee(this)
    }

  }


}

const splinter = new Manager('Splinter', 100000, 'Sensei');
console.log('Before: ', splinter);

const leo = new Employee('Leonardo', 90000, 'Ninja', splinter);
console.log(leo.name)
const mikey = new Employee('Michelangelo', 90000, 'Ninja', splinter);
const donnie = new Employee('Donatello', 90000, 'Ninja', splinter);
const raph = new Employee('Raphael', 90000, 'Ninja', splinter);

console.log('After: ', splinter);

module.exports = Employee;
