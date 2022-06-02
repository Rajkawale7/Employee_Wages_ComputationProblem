//======================================== UC 10 =======================================================================//
 {   
    /* Ability to store the Day, Hours Worked and Wage Earned in a single object. */
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
    
    console.log("UC 10 Showing Daily Hours Worked and Wage Earned: " + empDailyHrsAndWageArr);
}