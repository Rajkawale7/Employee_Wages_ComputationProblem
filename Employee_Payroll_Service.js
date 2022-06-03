// UC12 - Ability to extendEmployee Payroll Data to store gender and start date

class EmployeePayrollData
{
    //Properties
	id;
	salary;
	gende;
	startDate;

    //Constructor
	constructor(...params){
		this.id=params[0];
		this.name=params[1];
		this.salary=params[2];
		this.gender=params[3];
		this.startDate=params[4];
	}

    //Getting values by using getter and setter method
    get name() {
        return this._name;
    }
    set name(name) {
        let nameRegex = RegExp ('^[A-Z]{1}[a-z]{3,}$');     //Use of Regex To check and validate
        if (nameRegex.test(name))
        this._name = name;
        else throw "Name is Incorrect!";
    }

    //Method
    toString() {
        const options= { year:'numeric', month: 'long', day: 'numeric'};
        const empDate= this.startDate === undefined ? "undefined": 
                       this.startDate.toLocaleDateString("en-US",options);

        return "id=" + this.id+", name=" + this.name +", salary=" + this.salary + ", " +
             "gender=" + this.gender+", startDate ="+ empDate;
    }

}

let employeePayrollData = new EmployeePayrollData(1,"Mark",30000);
console.log(employeePayrollData.toString());
employeePayrollData.name="john";
console.log(employeePayrollData.toString());
let newEmployeePayrollData = new EmployeePayrollData(1, "Terrisa", 30000, "F", new Date());
console.log(newEmployeePayrollData.toString());