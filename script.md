# Deep Copy aka Clone objects using TypeScript
> You can create copies of JavaScript objects by coping around properties e.g. `const x = {foo: 123}; const y = { foo: x.foo }`. However doing this manually for deep objects can be time consuming. In this lesson we cover one way of deep copying simple objects in TypeScript.

Here we have a simple object foo
```js
const foo = {
  x: 123
};
```
If we assign it to another variable

```js
const bar = foo;
```

***Select const bar = foo***
* It is essentially a reference to the same object in memory.

* So if we mutate the x property of `bar`,
* `foo.x` is also changed.
```js
bar.x = 456;
console.log(foo.x);
```
To create a *copy* of the object we can do it manually:

```js
const foo = {
  x: 123
};
const bar = {
  x: foo.x
};
bar.x = 456;
console.log(foo.x);
```
But doing this for deep objects e.g.
* a property x that has a property y that has a property z
* in a new variable bar
```js
const foo = {
  x: {
    y: {
      z: 123
    }
  }
};
const bar = {
  x: {
    y: {
      z: foo.x.y.z
    }
  }
};
```
Is error prone, time consuming and painful.

***Select the object bar***
* Fortunately for simple objects you can create a simple function to do this for you.

* We go ahead and create a deep copy function which is generic.
* It takes an object o of type T and returns an object of type t
* Within the function we simply stringify the object
* and then convert this string back to a new object
* Now we can use this function to create our clone
* and if we go ahead and mutate the clone
* the original object stays intact.
```js
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
```

***Select the deepcopy implementation***
* Note that since this deepcopy function using JSON.stringify underneath, it will only work for simple objects and not for objects cannot be serialized to strings e.g. objects containing functions or cyclic data structures.
