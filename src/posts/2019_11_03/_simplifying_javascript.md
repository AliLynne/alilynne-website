---
title: 'Notes from Simplifying Javascript'
date: "2019-11-03"
category: "Tech"
tags: ["JavaScript"]
canonical_url: ""
published: false
---

# Chapter 1
## Tip 1

My general intuition about `const` and `let` has pretty much always been "use const unless you can't." Tip one seems to confirm that.

Using const makes code readable and predictable.

## Tips 2 & 3

`let` and `const` are block scoped - any variable declared inside a block doesn't exist outside a block

with `let` and `const` you can't redeclare a variable of the same name

```js
const me = "AliLynne"

...

const me = "Ali Thompson"
console.log(me)

// Uncaught SyntaxError: Identifier 'me' has already been declared
```

```js
let me = "AliLynne"

...

let me = "Ali Thompson"
console.log(me)

// Uncaught SyntaxError: Identifier 'me' has already been declared
```

```js
let me = "AliLynne"

...

me = "Ali Thompson"
console.log(me)

// Ali Thompson
```

> "Variables assigned with var are functionally scoped (which, again, is technically referred to as lexically scoped). That means that they’ll always refer to the last value they’re assigned within a function."

> "closures (creating a variable inside a function for another function to use)"

> "higher-order functions (functions that return other functions)"

- Self invoking functions? - More to come in Tip 34

> "`let` locks the value during each iteration of the for loop."

## Tip 4

Template literals
- use backticks ``` `I'm a string` ```
- anything not a string needs to be surrounded by a special designator 
  - ``` `${}` ``` - ``` `${notAString}` ```
- can call a method on an object
  - ``` `${object.toUpperCase()} ` ```
- avoid doing too much withing the curly braces
  - assign anything complicated to a variable outside the template literal
- use backticks even when combining two variables, signals that a string is being returned

# Chapter 4 - Arrays

> An array "can do almost anything you'd ever want for a collection of information."

> Data can always be converted to arrays

## Tip 5

- If you need to manipulate a collection an array is likely the way to go due to their flexibility
  - Arrays preserve order
    - not technically guaranteed, but safe to assume it will usually work
    - But can sort to give the array a new order (read tip 9 for more)
  - Arrays are used as a bridge between an object and a loop when using ```Object.keys()```
    - then use the keys to loop through the object 
    ```js
      const object1 = {
          key1: "object1value1",
          key2: "object1value2",
          key3: "object1value3"
      }
      const object2 = {
          key1: "object2value1",
          key2: "object2value2",
          key3: "object2value3"
      }
      // because the keys for both objects are identical, it doesn't matter which object we use to get the list of keys
      const keyList = Object.keys(object1)

      // now we can loop through either of the objects using their keys
      for (let i = 0; i < keyList.length; i++) {
          const key = keyList[i]
          console.log(`I'm a value of the first object: ${object1[key]} and I'm a value of the second object ${object2[key]}`)
      }
    ```

> Arrays seem to pop up everywhere because they have a built-in iterable.

> An iterable is merely a way for the code to go through a collection one item at at time while knowing its current position.

> you can easily convert from an array to a specialized collection and back again

## Tip 6

Will often see checking whether something exists in array with this sort of code:

```js
const array = ['item1', 'item2']

function checkExists(array) {
  return array.indexOf('item1') > -1
}

// true

```
Here, `indexOf()` returns the index of the string we're checking for if it's there, and if not, it return -1. So anything greater than -1 (even 0, since 0 is a possible index even though it evaluates to falsy) means the string exists in the array.

Now that we have `includes()` it's the better option when checking for existence.

```js
const array = ['item1', 'item2']

function checkExists(array) {
  return array.includes('item1')
}

// true

```

This is clearer when read later or by someone else.

## Tip 7

