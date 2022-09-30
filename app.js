//apply ,call and bind in js

let customerDetails = {
  name: "swapnil",
  Age: "20",
  Designation: "Software Engineer",
};

let printDetails = function (state, country) {
  console.log(this.name + " " + state + " " + country);
};

// call
printDetails.call(customerDetails, "Uttar Pradesh", "india");

let userDetails = {
  name: "Harsh",
  Age: "23",
  Designation: "Software Engineer",
};

// apply
printDetails.apply(userDetails, ["Uttar Pradesh", "india"]);

//bind
let result = printDetails.bind(userDetails, "Delhi", "India");
result();
console.log(result());
