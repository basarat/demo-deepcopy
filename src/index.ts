function deepcopy<T>(o: T): T {
  return JSON.parse(JSON.stringify(o));
}
const foo = {
  x: {
    y: {
      z: 123
    }
  }
};
const bar = deepcopy(foo);
bar.x.y.z = 456;
console.log(foo);