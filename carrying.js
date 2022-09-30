function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}
console.log(add(2)(5)());



userObj = { name: "swapnil", age: 23 };
function userInfo(obj) {
  return function (userInfo) {
    return obj[userInfo];
  };
}
let res = userInfo(userObj);
console.log(res(`name`));
