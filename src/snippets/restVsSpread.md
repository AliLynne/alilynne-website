---
title: "Spread Operater vs Rest Parameter Syntax"
---
## Rest Parameter Syntax

> Means 'the rest of the parameters' when defining a function 

```js
  function myRestParamsFunction(a, b, ...moreArguments) {
    console.log("a:", a)
    console.log("b:", b)
    console.log("rest of args:", moreArguments)
  }

  myRestParamsFunction("A", "B", "C", "Dog", "Elephant")

  // Result:
  // a: A
  // b: B
  // rest of args: ["C", "Dog", "Elephant"]
```

## Spread Syntax

> allows an iterable to be expanded in places where zero or more arguments or elements are expected

> or an object expression to be expanded in places where zero or more key-value pair are expected

> can be used in place of `.apply()`

```js
  const array = ['a', 'b', 'c']
  function exampleFunction() { }
  // exampleFunction.apply(null, array)
  exampleFunction(...array)
```

> useful for concatenating arrays

```js
  const arrayA = ['a', 'b', 'c']
  const arrayB = ['d', 'e', 'f']

  arrayA = [...arrayA, ...arrayB]
  // arrayA is now ['a', 'b', 'c', 'd', 'e', 'f']
```