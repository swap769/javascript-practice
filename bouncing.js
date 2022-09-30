let counter = 0;
function getData() {
  console.log("fectching data" + counter++);
}
function myDebounce(call, d) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    setTimeout(() => {
      call();
    }, d);
  };
}

const newFunction = myDebounce(getData, 1000);
