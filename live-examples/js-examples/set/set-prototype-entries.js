const set1 = new Set();
set1.add(42);
set1.add('forty two');

const iterator1 = set1.entries();

for (const entry of iterator1) {
  console.log(entry);
  // expected output: Array [42, 42]
  // expected output: Array ["forty two", "forty two"]
}
