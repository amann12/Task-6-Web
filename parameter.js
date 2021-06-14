function greater(x, y, z) {
  if (x > y && x > z) {
    console.log(`${x} is greatest number`);
  } else if (y > z) {
    console.log(`${y} is greatest number`);
  } else {
    console.log(`${z} is greatest number`);
  }
}

console.log(greater(2, 9, 5));
