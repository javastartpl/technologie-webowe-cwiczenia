function getNumberOfDigits(number) {
    let digits = 1;
    while (number / 10 > 1) {
        digits++;
        number /= 10;
    }
    return digits;
}

console.log("Liczba cyfr w liczbie 1 to " + getNumberOfDigits(1));
console.log("Liczba cyfr w liczbie 22 to " + getNumberOfDigits(22));
console.log("Liczba cyfr w liczbie 333 to " + getNumberOfDigits(333));
console.log("Liczba cyfr w liczbie 4444 to " + getNumberOfDigits(4444));