//======================================== UC 9=======================================================================//
 {   
    /*Program to Use the Daily Wage Map and Daily Hour Map perform following operations using Arrow Functions */
    //Declaring the variables accordingly condition
    const IS_ABSENT = 0;
    const IS_FULL_TIME = 1;
    const IS_PART_TIME = 2;
    const FULL_TIME_HOURS = 8;
    const PART_TIME_HOURS = 4;
    const WAGE_PER_HOUR = 20;
    const MAX_HRS_IN_MONTH = 160;
    const MAX_DAYS_IN_MONTH = 20;
    
    //To check Employee availability
    function getWorkingHours(empCheck){
        switch (empCheck){
        case IS_ABSENT:
        return 0;
    
        case IS_FULL_TIME:
        return FULL_TIME_HOURS;
    
        case IS_PART_TIME:
        return PART_TIME_HOURS;
        }
    }

    let empHours = 0;
    let totalWorkingHours = 0;
    let totalWorkingDays = 0;
    let empDailyWageArray = new Array();       //Creating array to store daily wages
    let empDailyWageMap = new Map();           //creating map to store daily wages on the basis of working days (key-values)
    let empDailyHoursMap = new Map();          //creating map to store daily working hours
    
    function calculateDailyWage(empHours){
    return empHours * WAGE_PER_HOUR;
    }
    
    while (totalWorkingHours < MAX_HRS_IN_MONTH  && totalWorkingDays < MAX_DAYS_IN_MONTH) {
            totalWorkingDays++;

        let empCheck = Math.floor(Math.random()*10)%3;
        empHours = getWorkingHours(empCheck);
        totalWorkingHours = totalWorkingHours + empHours;
        empDailyWageArray.push(calculateDailyWage(empHours))               //Storing data - daily wages
        empDailyWageMap.set(totalWorkingDays,calculateDailyWage(empHours)); 
        empDailyHoursMap.set(totalWorkingDays,empHours);
    }
    let empWage = calculateDailyWage(totalWorkingHours);
    console.log("Total Days: "+ totalWorkingDays +  "," + " Total Hours: "+ totalWorkingHours + "," + " Employee wage: "+ empWage);

    //Implementation for UC-9 by using Arraow Function
    const findTotal = (totalVal, dailyVal) => {
        return totalVal + dailyVal;
    }

    //To calculate total hours & total salary
    let count = 0;
    let totalHours = Array.from(empDailyHoursMap.values()).reduce(findTotal, 0);
    let totalSalary = empDailyWageArray.filter(dailyWage => dailyWage > 0).reduce(findTotal, 0);
    console.log("Employee wage with Arrow function:: " + "Total hours: "+ totalHours + " & " + "Total wages: "+ totalSalary);
    
    //Creating New Arrays to store and perform some operation
    let nonWorkingDays = new Array();    //1st
    let partWorkingDays = new Array();   //2nd
    let fullWorkingDays = new Array();   //3rd
    
    empDailyHoursMap.forEach( (value, key, map) => {
        if (value == 8) fullWorkingDays.push(key);
        else if (value == 4) partWorkingDays.push(key);
        else nonWorkingDays.push(key); 
    });
    
    console.log("Full working days are: "+ fullWorkingDays);
    console.log("Part working days are: "+ partWorkingDays);
    console.log("Non working days are: "+ nonWorkingDays);

}
