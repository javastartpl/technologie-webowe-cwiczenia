function countOccurences(source, find) {
    let counter = 0;
    for(number of find) {
        if (source.includes(number)) {
            counter++;
        }
    }
    return counter;
}
console.log(countOccurences([1, 2, 3, 4, 5], [3, 4, 6, 8]));

function minMax(array) {
    let min = array[0];
    let max = array[0];
    for (number of array) {
        if (number < min) {
            min = number;
        }
        if (number > max) {
            max = number;
        }
    }
    return [min, max];
}
console.log(minMax([10, 5, 15, 20, 3, 8]));

function interlace(array, inter) {
    let result = [];
    for (number of array) {
        result.push(number);
        result.push(inter);
    }
    return result;
}
console.log(interlace([5, 10, 15], 1));
console.log(sqlQuery);