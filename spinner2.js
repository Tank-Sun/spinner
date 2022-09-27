const arr = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
let delay = 100;
for (let ele of arr) {
  setTimeout(() => {
    process.stdout.write(`\r${ele}   `);
  }, delay); 
  delay += 200;
}
setTimeout(() => console.log(), delay);