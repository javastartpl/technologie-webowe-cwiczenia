const year1 = 1934;
const year1Leap = (year1 % 4 == 0 && year1 % 100 != 0) || year1 % 400 == 0;
const year1Type = year1Leap ? "Przestępny" : "Nieprzestępny";
console.log(year1 + " jest " + year1Type);

const year2 = 1988;
const year2Leap = (year2 % 4 == 0 && year2 % 100 != 0) || year2 % 400 == 0;
const year2Type = year2Leap ? "Przestępny" : "Nieprzestępny";
console.log(year2 + " jest " + year2Type);

const year3 = 2012;
const year3Leap = (year3 % 4 == 0 && year3 % 100 != 0) || year3 % 400 == 0;
const year3Type = year3Leap ? "Przestępny" : "Nieprzestępny";
console.log(year3 + " jest " + year3Type);

