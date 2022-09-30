//string Anagram
// "hello" => "lleoh"

//condition
//1.length check for both string 
//2. 

function Anagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    let counter = {}
    for (let letter of str1) {
        counter[letter] = (counter[letter] || 0) + 1;
        console.log(counter[letter]);
    }
    for (let item of str2) {
        if (!counter[item]) {
            return false;
        }
        counter[item] -= 1;0
    }
    return true;
}
const result = Anagram("swapnil", "swapnwl");
console.log(result);








