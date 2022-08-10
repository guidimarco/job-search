setTimeout(() => {
  console.log("Ciao");
}, 2000);

const interval = setInterval(() => {
  console.log("Ciao temporizzato");
}, 2000);

// console.log(interval);

setTimeout(() => {
  clearInterval(interval);
}, 10000);
