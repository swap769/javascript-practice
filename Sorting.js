// sorting using Recursion function
// [3,2,1,4]=> By default case

let myArray = [3, 1, 4, 2];
let mynewList = [];
let i = 0;
let j = 1;

function isSorted(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
            return false;
        }
    }
    return true;
}


function SortCheck(array) {

    if (isSorted(array)) {
        mynewList = array;
        return;
    }
    else if (array[i] < array[j]) {
        i++;
        j++;
        SortCheck(array);
    }
    else {
        [array[i], array[j]] =[ array[j], array[i]]
        i = 0;
        j = 1;
        SortCheck(array);
    }
}
SortCheck(myArray);
console.log(mynewList);








