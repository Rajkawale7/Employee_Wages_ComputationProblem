//======================================== UC8 =======================================================================//
{
    const IS_ABSENT = 0;
    const IS_FULL_TIME = 1;
    const IS_PART_TIME = 2;
    const FULL_TIME_HOURS = 8;
    const PART_TIME_HOURS = 4;
    const WAGE_PER_HOUR = 20;

    const MAX_HRS_IN_MONTH = 160;
    const NUM_OF_WORKING_DAYS = 20;
    let totalEmpHrs = 0;

    let totalWorkingDays = 0;
    let empDailyWageArray = new Array();
    let empDailyWageMap = new Map();

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
    function calculateDailyWage(empHrs){
    return empHrs * WAGE_PER_HOUR;
    }

    while (totalEmpHrs < MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS  ) {
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random()*10)%3;
        let empHrs = getWorkingHours(empCheck);
        totalEmpHrs += empHrs;
        
        empDailyWageArray.push(calculateDailyWage(empHrs))
        empDailyWageMap.set(totalWorkingDays,calculateDailyWage(empHrs));
    }
    let empWage = calculateDailyWage(totalEmpHrs);
    console.log("Total Days: "+totalWorkingDays +" Total Hours: "+totalEmpHrs+ " Employee wage: "+ empWage);

    console.log(empDailyWageMap);
    function totalWages(totalWage , dailyWage){
        return totalWage + dailyWage;
    }
    console.log("*** Emp Wage Map total hours: (UC8) ***")
    console.log("Total HRs: " + Array.from(empDailyWageMap.values()).reduce(totalWages,0));
}

