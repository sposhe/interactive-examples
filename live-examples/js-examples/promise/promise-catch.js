const promise1 = new Promise((resolve, reject) => {
  throw new Error('Uh-oh!');
});

promise1.catch((error) => {
  console.error(error);
});
// expected output: Error: Uh-oh!
