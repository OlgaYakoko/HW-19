'use strict';

const arrNumbers = [1, 2, 3, -1, -2, -3];

const positiveNumbers = function(arr) {
    const arrPositiveNumbers = [];

    if(!arr.length) { return `err, array is empty`};
    if(arr === null) { return null};

    for(let i = 0; i < arr.length ; i += 1){
        if(arr[i] > 0) {arrPositiveNumbers.push(arr[i])}
    }
    return arrPositiveNumbers;

}
positiveNumbers(arrNumbers);
