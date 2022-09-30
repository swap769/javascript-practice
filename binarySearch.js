// divide and conquerer technique
// find the index of given no in a sorted array 7
//[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]=> index 6 =>output

//min =0
//max=array.length-1
//minIndex=(min+max)/2 
//if array[minIndex]<number(7)
//mid =minIndex+1;  
//array[minIndex]>number
//max= minIndex-1
//minIndex


function getSearch(array, number) {
    let min = 0;
    let max = array.length - 1;
    while (min <= max) {
        let midIndex = Math.floor((min + max) / 2);
        if (array[midIndex] < number) {
            min = midIndex + 1;
        } else if (array[midIndex] > number) {
            max = midIndex - 1;
        } else {
            return midIndex;
        }
    } 
    return -1;
}
const result = getSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],7);
console.log(result);



