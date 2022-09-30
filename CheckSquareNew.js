// checking square in another array
// arr1=[1,2,3,4] arr2=[1,9,4,16] -case 1
// arr1=[1,2,4,2] arr2=[1,4,4,16] -case 2

//condition
// 1.map1={1:1,2:2,4:1}
//2. map2={1:1,4:2,16:1}

function checkSquare(arr1, arr2) {
    let map1 = {};
    let map2 = {};
    for (item1 of arr1) {
        map1[item1] = (map1[item1] || 0) + 1;

    }
    for (item2 of arr2) {
        map2[item2] = (map2[item2] || 0) + 1;

    }
    for (let key in map1) {
        if (!map2[key * key]) { //obj key compare
            return false;
        }
        if (map1[key] !== map2[key * key]) { // value compare
            return false;
        }
    }
    return true;
}
const result = checkSquare([1, 2, 4, 2], [1, 4, 4, 16]);
console.log(result);

// time complexity o(n) =>linear 









