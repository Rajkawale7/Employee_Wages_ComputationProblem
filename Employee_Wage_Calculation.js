//======================================== UC3 =======================================================================//
//Refactored code to write function for daily working Hours
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

    empHrs = getWorkingHours(empCheck);
    console.log("Emp wage: " + empWage);