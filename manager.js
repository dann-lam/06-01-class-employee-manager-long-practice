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
    calculateBonus(multiplier) {
        let _totalSubSalary = () => {
            let sum = 0;
            for(let employee of this.employees){
                if(employee instanceof Employee){
                    console.log(`my salary is ${employee.salary}`)
                    sum += employee.salary
                } else {
                    if(employee instanceof Manager){
                        console.log(employee.employees)
                        _totalSubSalary(employee.employees)
                    }
                }
            }
            console.log('my sum is' + sum)
            return sum
        }
        console.log(_totalSubSalary())
        return _totalSubSalary() * multiplier
      }

}



const splinter = new Manager('Splinter', 100000, 'Sensei');
const leo = new Manager('Leonardo', 90000, 'Ninja', splinter);
const raph = new Manager('Raphael', 90000, 'Ninja', leo);
const mikey = new Employee('Michelangelo', 85000, 'Grasshopper', raph);
const donnie = new Employee('Donatello', 85000, 'Grasshopper', raph);

console.log(splinter.calculateBonus(0.05)); // => 22500
console.log(leo.calculateBonus(0.05)); // => 17500
console.log(raph.calculateBonus(0.05)); // => 13000


module.exports = Manager;
