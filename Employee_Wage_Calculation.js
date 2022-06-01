//======================================== UC7 =======================================================================//
//* Use of Array Helper Function by using Daily wage Array *//
const IS_ABSENT = 0;
const IS_FULL_TIME = 1;
const IS_PART_TIME = 2;
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;
const MAX_DAYS_IN_MONTH = 20;

function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

function calcDailyWage(empHrs){
    return empHrs * WAGE_PER_HOUR;
}

const Max_HRS_IN_MONTH = 160;
const Num_Of_WORKING_DAYS = 20;
let TotalEmpHrs = 0;
let TotalWorkingDays = 0;
let empDailyWageArr = new Array();

while (TotalEmpHrs <= Max_HRS_IN_MONTH &&
      TotalWorkingDays < Num_Of_WORKING_DAYS){
      TotalWorkingDays++;

      let empCheck = Math.floor(Math.random()*10)%3;
      let empHrs = getWorkingHours(empCheck);
      TotalEmpHrs += empHrs;
      empDailyWageArr.push(calcDailyWage(empHrs));
    }
let EmpWage = calcDailyWage(TotalEmpHrs);

/* UC7-A: To calculate total wage using Array forEach Traversal or reduce method*/

    let  totEmpWage = 0;
    function sum(dailyWage){
        totEmpWage += dailyWage;
    }

    empDailyWageArr.forEach(sum);
    console.log("Total Days: " + TotalWorkingDays + " , " + "Total Hrs: " + TotalEmpHrs + " , " + "Emp wage: " + totEmpWage);

    function totalWages(totalWage, dailyWage){
        return totalWage + dailyWage;
    }
    console.log("*** Total Wage using Array (UC7-A) ***");
    console.log("Emp wage with reduce: " + empDailyWageArr.reduce(totalWages, 0));


/* UC7-B: To show the day along with Daily wage using Array Map helper Functions*/

    let dailyCntr = 0;
    function mapDayWithWage(dailyWage){
        dailyCntr++;
        return dailyCntr + " = " + dailyWage;
    }

    let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
    console.log("*** Daily Wage using Map (UC7-B) ***");
    console.log(mapDayWithWageArr);
 

/* UC7-C: To show the Days when Full Time wage of 160 were earned */

    function fulltimeWage(dailyWage){
        return dailyWage.includes("160");
    }
    let fullDayWageArray = mapDayWithWageArr.filter(fulltimeWage);
    console.log("*** Full Time Wage of 160 hr by using filter (UC7-C) ***");
    console.log(fullDayWageArray)  

/* UC7-D: To find the first occurance When full time wage was earned by employee*/

    function findFulltimeWage(dailyWage){
        return dailyWage.includes("160");
    }
    console.log("*** First time Fulltime Wage was earned on day (UC7-D) ***");
    console.log("Day: " + mapDayWithWageArr.find(findFulltimeWage));

/* UC7-E: To check if every Element of full time wage truely holding full time wage */

    function isAllFulltimeWage(dailyWage){
        return dailyWage.includes("160");
    }
    console.log("*** Check All Elements have Full Time Wage (UC7-E) ***");
    console.log(fullDayWageArray.every(isAllFulltimeWage));

/* UC7-F: To check if there is any Part time Wages */

    function isAnyParttimeWage(dailyWage){
        return dailyWage.includes("80");
    }
    console.log("*** Check If Any Part Time Wage (UC7-F) ***");
    console.log(mapDayWithWageArr.some(isAnyParttimeWage));

/* UC7-G: To check if there is any Part time Wages */
function totalDaysWorked(numOfDays , dailyWage){
    if (dailyWage>0) return numOfDays+1;
    return numOfDays;
}
console.log("*** Number of days Employee worked (UC7-G) ***");
console.log("No of Days: " + empDailyWageArr.reduce(totalDaysWorked,0));

    

