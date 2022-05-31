//======================================== UC4 =======================================================================//
//To Calculating Wages for a Month assuming 20Working Days in a Month
const IS_ABSENT = 0;
const IS_FULL_TIME = 1;
const IS_PART_TIME = 2;
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;

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

for (let i = 0; i < NUM_OF_WORKING_DAYS; i++) {
    let empCheck = Math.floor(Math.random()*10)%3;
    empHours += getWorkingHours(empCheck);
}
let empWage = empHours * WAGE_PER_HOUR;
console.log("Total  working Hours is : "+empHours+ " &" + " Employee wage is : "+ empWage);