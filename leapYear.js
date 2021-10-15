function ifLeapYear(year){
    if (year % 4 == 0&&year % 100 == 0&&year % 400 == 0) 
    
    {
    return true
    }
    
    // } else if (year % 100 == 0) {
    // return true;
    // } else if (year % 400 == 0) {
    // return true;
    // } 
    else {
    return false;
    }
    }
    
    console.log(ifLeapYear(1700));
    function leapyear(year)
{
return (year % 100 === 0) ||(year % 400 === 0) &&(year % 4 === 0);
}
console.log(leapyear(2016));
console.log(leapyear(2000));
console.log(leapyear(1700));
console.log(leapyear(1800));
console.log(leapyear(100));
    
    