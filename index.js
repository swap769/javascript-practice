Higher order function

forEach
filter
map
sort
reduce

const companies = [
  { name: "Google", category: "Product Based", start: 1981, end: 2004 },
  { name: "Paytm", category: "Product Based", start: 1986, end: 2004 },
  { name: "Microsoft", category: "Product Based", start: 1781, end: 2004 },
  { name: "Facebook", category: "Product Based", start: 1980, end: 2004 },
  { name: "Mindtree", category: "Service Based", start: 1521, end: 2004 },
  { name: "Coforge", category: "Service Based", start: 1654, end: 2004 },
];
const ages = [
  22, 25, 67, 33, 64, 68, 32, 63, 75, 5, 56, 21, 35, 42, 12, 18, 14, 17, 15,
];

//Standard function

for (let i = 0; i <= companies.length; i++) {
  console.log(companies[i]);
}

forEach

companies.forEach(function (company, index) {
  console.log(index);
});

companies.forEach((company, index) => console.log(company));

filter for standard structure

for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 20) {
    console.log(ages[i]);
  }
}

filter

const age = ages.filter((age) => {
  if (age >= 20) {
    return true;
  }
});
console.log(age);

const finalAge = ages.filter((age) => age >= 40);
console.log(finalAge);

const result = companies.filter((company) => {
  if (company.category === "Service Based") {
    return true;
  }
});
console.log(result);

map function as standard structure

companies.map((company, index) => {
  console.log(company, index);
});

const dummy = companies.map((company, index) => {
  return `${company.name}, ${company.category}`;
});

console.log(dummy);

Sort
const sorted = companies.sort(function (c1, c2) {
  if (c1.start > c2.start) {
    return true;
  } else {
    return false;
  }

});

const res = ages.sort();
console.log(res);

const sorted = companies.sort((c1, c2) => (c1.start > c2.start ? 1 : -1));
console.log(sorted);

const sortedAge = ages.sort((a, b) => a - b);
console.log(sortedAge);

reduce

let total = 0;
for (let i = 0; i < ages.length; i++) {
  total += ages[i];
}
console.log(total);


const sumage = ages.reduce((total, age) => {
  return total + age;
}, 0);
console.log(sumage);
