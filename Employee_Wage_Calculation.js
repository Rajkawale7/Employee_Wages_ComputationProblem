//======================================== UC 11 =======================================================================//
 
    /* Using Object funtions along with Arrow Functions */
    //Declaring the variables accordingly condition
    const IS_ABSENT = 0;
    const IS_FULL_TIME = 1;
    const IS_PART_TIME = 2;
    const FULL_TIME_HOURS = 8;
    const PART_TIME_HOURS = 4;
    const WAGE_PER_HOUR = 20;
    const NUM_OF_WORKING_DAYS = 20;
    const MAX_HRS_IN_MONTH = 160;
    
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

    let totalEmpHrs = 0;
    let totalWorkingDays = 0;
    let empDailyHrsAndWageArr = new Array(); //Creating new array

    function calculateDailyWage(empHours){
        return empHours * WAGE_PER_HOUR;
        }
    
    while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
        totalWorkingDays++;

        let empCheck = Math.floor(Math.random() *10 ) % 3;
        let empHours = getWorkingHours (empCheck);
        totalEmpHrs += empHours;

        //Creating Object and adding data to the array
        empDailyHrsAndWageArr.push(
            {
                dayNum: totalWorkingDays,            //It defines fields and variables
                dailyHours: empHours,
                dailyWage: calculateDailyWage(empHours),
                toString(){                        //methods to return a string representation                
                    return '\nDay' + this.dayNum + ' => Working Hours is: ' + this.dailyHours + "  " +
                            'And Wage Earned = ' + this.dailyWage
                },
            }
        );
    }
//=====================================================================================//

    // 11A:- Calculate total wage and total hours worked
    let totalWages = empDailyHrsAndWageArr
        .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
        .reduce((totalWages, dailyHrsAndWage) => totalWages += dailyHrsAndWage, 0);

    let totalHours = empDailyHrsAndWageArr
        .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
        .reduce((totalHours, dailyHrsAndWage) => totalHours += dailyHrsAndWage.dailyHours, 0);

    console.log("UC 11A :- Total Hours: " + totalHours + " & " + "Total Wages: " + totalWages);

    // 11B:- Show the full Working Days using foreach

    process.stdout.write("UC 11B: Logging full work days.");

    empDailyHrsAndWageArr
        .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8)
        .forEach(dailyHrsAndWage => process.stdout.write(dailyHrsAndWage.toString()));

    // 11C - Show Part working days using Map by reducing to string array
    let partWorkingDayStrArr = empDailyHrsAndWageArr
        .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours ==4)
        .map(dailyHrsAndWage => dailyHrsAndWage.toString());

    console.log("\nUC 11C PartWorking DayStrings:  " + partWorkingDayStrArr);

    //11D - No working days ony using Map function
    let nonWorkingDayNums =  empDailyHrsAndWageArr
        .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 0)
        .map(dailyHrsAndWage => dailyHrsAndWage.dayNum);
    
    console.log("UC 11D NonWorkingDayNums: " + nonWorkingDayNums);

