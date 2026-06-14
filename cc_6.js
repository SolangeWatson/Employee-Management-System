// Employee class//
class Employee{
    constructor(name,department){
        this.name = name;
        this.department = department;
    }

describe() {
        return `${this.name} works in ${this.department} department.`;
     }
}
//Manager class//
class Manager extends Employee {
constructor (name,department,teamSize){
    super(name,department);
    this.teamSize=teamSize;
}
describe() {
    return `Manager ${this.name} manages ${this.department} department and consist a team ${this.teamSize} people.`;
};
}

// Instance of employees and managers//
const emp1 = new Employee ("Jack","Human Reasource");
const emp2 = new Employee ("Sara","Finance");

const mgr1= new Manager ("Ava", "Marketing", 100);
const mgr2 = new Manager ("James", "Sales", 30);

// Comapny class//
class Company {
    constructor () { 
        this.employees=[];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    listEmployees() {
        this.employees.forEach (emp => {
            console.log(emp.describe ());
        });
    }
}
//Instantiate company and add employees//
const myCompany = new Company ();

myCompany.addEmployee(emp1);
myCompany.addEmployee(emp2);
myCompany.addEmployee(mgr1);
myCompany.addEmployee(mgr2);
//Listing employees
myCompany.listEmployees();