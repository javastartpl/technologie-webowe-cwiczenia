function isLeap(year) {
    return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}

function getYearType(year) {
    return isLeap(year) ? "Przestępny" : "Nieprzestępny";
}

function printYearInfo(year) {
    console.log(year + " jest " + getYearType(year));
}

const year1 = 1934;
printYearInfo(year1);
const year2 = 1988;
printYearInfo(year2);
const year3 = 2012;
printYearInfo(year3);

