count unique numbers
[1,1,2,2,3,4,4,5,6,7,8,8]
output=>8
condition
arraylength
i=0,j=1
array[i]!==array[j]
1. i++
2.array[i]=array[j]

function countUnique(array) {
    if (array.length > 0) {
        let i = 0;
        for (let j = 0; j < array.length; j++) {
            if (array[i] !== array[j]) {
                i++;
                array[i] = array[j];
            }
        }
        return i + 1;
    } else {
        throw new Error('array is empty')
    }
}

const result = countUnique([1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8]);
console.log(result);









