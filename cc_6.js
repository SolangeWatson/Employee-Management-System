// Employee class: helps displays the employee with thier name and department//
class Employee{
    constructor(name,department){
        this.name = name;
        this.department = department;
    }
// This code will help format the desription of the employee to the user//
describe() {
        return `${this.name} works in ${this.department} department.`;
     }
}
//Manager class: helps extends the Employee list and adds the team size the the desription//
class Manager extends Employee {
constructor (name,department,teamSize){
    super(name,department);
    this.teamSize=teamSize;
}
    //This overides the parent descride method with the manager specific detail//
describe() {
    return `Manager ${this.name} manages ${this.department} department and consist a team ${this.teamSize} people.`;
};
}

// Creating the sample Employee and Manager objects with department and team size for the managers//
const emp1 = new Employee ("Jack","Human Reasource");
const emp2 = new Employee ("Sara","Finance");

const mgr1= new Manager ("Ava", "Marketing", 100);
const mgr2 = new Manager ("James", "Sales", 30);

// Comapny class: this stroes the sample employees and the methods on how to manage them//
class Company {
    constructor () { 
        this.employees=[];
    }
    //Adds the employee or manager to the company list//
    addEmployee(employee) {
        this.employees.push(employee);
    }
    //Logs each employee and thier description in  the console//
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
