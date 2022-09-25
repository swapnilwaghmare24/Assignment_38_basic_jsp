console.log("Welcome to employee wage computation program");
const FULL_TIME=1;
const PART_TIME=2;
const FULL_HOURS=8;
const PART_HOURS=4;
const WAGE_PER_HOURS=20;

function getWorkingHours(isPresent)
{
switch(isPresent)
{
case FULL_TIME:
    return FULL_HOURS;
    break;

case PART_TIME:
    return PART_HOURS;
    break;

default:
    return 0;
}
}
let isPresent=Math.floor(Math.random()*3);
let empHrs=0;
empHrs=getWorkingHours(isPresent);
let calWage=empHrs*WAGE_PER_HOURS;
console.log("Employee wage is $"+calWage);


