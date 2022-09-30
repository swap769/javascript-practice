//checking square in another array
// arr1=[1,2,3,4] and arr2=[1,9,4,16]

// condition
// 1. if (array1[i]*array1[i]===array2[j])
//let  isSquare=true

// time complexity(o(n^2))

function isSquareCheck(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        let isSquare = false;

        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] * arr1[i] === arr2[j]) {
                isSquare = true;
            }
            if (j == arr2.length - 1) {
                if (!isSquare) {
                    return false;
                }
            }
        }
    } return true;
}
const result = isSquareCheck([1, 2, 3, 4], [1, 9, 4, 16]);
console.log(result);











