---
title: "How I Take Notes on Tech Books"
date: "2019-11-04"
category: "Tech"
tags: ["Javascript"]
published: true
---

## Why I take notes

Confession: When I was in high school and college, I took very few notes. The ones I did take were pretty much useless. It's honestly a skill I didn't really learn until after college. 

Now I take notes so I know that I understand what I'm reading and so I can refer to bits of knowledge later. As I go through a book or article, I sit down and rewrite anything in the text that isn't clear to me, in my own words.

I'll also write down direct quotes, usually definitions and descriptions where I don't feel like rewriting would add any clarity for me.

I thought it would be fun to share an example of my notes for a book that I've been reading - [Simplifying JavaScript](https://pragprog.com/book/es6tips/simplifying-javascript) by Joe Morgan.

I've been writing JavaScript for a couple of years now, but there are still gaps in my knowledge. Especially when it comes to older JavaScript vs. the newer modern syntax. I'll often use the more modern syntax without knowing why it's preferred or whether it even IS better to use.

This book is certainly helping me with that and I recommend it.

## Example of my notes

For your viewing pleasure, here's a sample of the notes I've taken for this book. Here you can see that I've rewritten a couple of the authors examples (and then run them to make sure they actually do work) so that I know that I understand what's going on.


BEGIN NOTES

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

END NOTES



## More detailed code example

A few tips later, the author goes into details on arrays and objects and includes an example of iterating over objects using an array of their keys and a loop. He used a baseball example. I rewrote it. This naming convention was clearer to me when writing an example but I wouldn't use it in actual code due to a loss of clarity.

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
  // Because the keys for both objects are identical, it doesn't matter which object we use to get the list of keys
  const keyList = Object.keys(object1)

  // Now we can loop through either of the objects using their keys
  for (let i = 0; i < keyList.length; i++) {
    const key = keyList[i]
    console.log(`I'm a value of the first object: ${object1[key]} and I'm a value of the second object ${object2[key]}`)
  }

  // I'm a value of the first object: object1value1 and I'm a value of the second object: object2value1
  // I'm a value of the first object: object1value2 and I'm a value of the second object: object2value2
  // I'm a value of the first object: object1value3 and I'm a value of the second object: object2value3
```

## Where do I put my notes?

Writing this post was fairly easy since I actually write most of my notes in markdown and my blog uses markdown files for posts. I keep a directory that is full of nothing but notes. It looks a bit like this:

```
+-- Notes
|   +-- TitleOfBookOrArticle1
    |   +-- NotesOnBook1.md
    |   +-- OtherUsefulInfo.md
    +-- TitleOfBookOrArticle2
    |   +-- NotesOnBook2.md
    |   +-- OtherUsefulInfo.md
    +-- TitleOfBookOrArticle
    |   +-- NotesOnBook2
        |   +-- Chapter1
        |   +-- Chapter2
    |   +-- OtherUsefulInfo.md
```

I like to keep notes in markdown form because it makes transferring them to a blog or a project aboutme pretty easy.

## This is just my approach

It took me years to find a system that worked well for me when it comes to note taking. I tried all kinds of methods and organization systems and just kept what worked for me. I always encourage people to try a few things and find what works.