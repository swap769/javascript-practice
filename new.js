//async js programming
//callback,promises,async and await

const datas = [
  { name: "swapnil", profession: "software engineer" },
  { name: "harsh", profession: "computer science engineer" },
];

function getDatas() {
  setTimeout(() => {
    let output = "";
    datas.forEach((data, index) => {
      output = output + `${data.name}`; 
    });
    console.log(output);
  }, 1000);
}

function createdata(newdata) {
  // promises takes two things reject and resolve

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      datas.push(newdata);
      let error = false;
      if (!error) {
        resolve();
      } else {
        reject("facing some error");
      }
    }, 2000);
  });
}
// createdata({ name: "satyam", profession: "engineer" })
//   .then(getDatas)
//   .catch((err) => console.log(err));

async function start() {
  await createdata({ name: "satyam", profession: "engineer" });
  getDatas();
}

start();
