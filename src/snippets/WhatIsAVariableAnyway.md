---
title: "What Exactly Is a Variable Anyway"
date: ""
category: "Tech"
tags: []
draft: true
---

## Abstract

Understanding what a variable is can be hard for people new to programming. I want use a variety of examples from different languages to show what a variable looks like in different ways. I want to make a drawing that explains variables, possibly using buckets.

## Prerequisites

None. This is meant to be for complete beginners.

## Takeaways

Readers should be able to recognize what a variable looks like in a variety of different programming languages.

## Next Steps

After this article, I want readers to be directed, eventually, to a post that explains what functions are.

## Outline

### Intro

One of the first concepts you'll encounter when learning to progam is the idea of a variable (key word). So what is that?

### Section 1

Give the definition of a variable from a variety of places. Then summarize into 'a thing that holds stuff'.

Lets start with a dictionary definition. This is from Merriam-Webster.

> variable - noun
> 1a: a quantity that may assume any one set of values
> 1b: a symbol representing a variable
> 2a: something that is variable
> 2b: a factor in a scientific experiment that may be subject to change

Well that makes things about as clear as mud, doesn't it? Looks like we're going to need to find a definition that's a bit more specific to our needs before we can really understand what a variable is.

According to the (Wikipedia article on variables in computer science)['https://en.wikipedia.org/wiki/Variable_(computer_science)'] -

> ...a variable or scalar is a storage address (identified by a memory address) paired with an associated symbolic name, which contains some known or unknown quantity of information referred to as a value.

I don't know about you, but that didn't help me much when I was first learning. But let's take a look and see if we can't pick out the important parts in these two definitions.

I notice that the noun definition that we got from Merriam-Webster refers to the verb definition. The verb definition is 'able or apt to vary: subject to variation or change.' So we know that a variable has something to do with change.

Another thing that stands out in our first definition is 'representing.' So I'm going to say that a variable can be something that represents something else, and is subject to change.

Our computer science definition is a bit more complicated and uses words we may not understand in this way. We probably know what an address is, but what does that mean when it comes to storage and memory? Let's say an address is just a description we can use to find something, the way we use our home address to tell someone how to find our house.

So, a variable is something that lives somewhere and has an address, represents something else, and is subject to change.

'Contains some known or unknown quantity of information.' Ok, so it will contain some information and we may or may not know what that information. This all seems very fuzzy to me. But well keep going.

So after all of that, the conclusion is that a variable is a thing that can hold some stuff.

### Section 2

Show examples of variables in different languages.

This is what variables might look like in Javascript. They have slightly different meanings, but for now the important part is that they're all variabes.

```js
var hat = `I'm a blue hat`
let hat = `I'm a blue hat`
const hat = `I'm a blue hat`
```

### Section 3

Not sure I'll need a third section, thought it would be nice for symmetry.

### Conclusion

Hopefully you understand the idea of a variable a bit better now. If you don't quite get it yet, that's ok too. Sometimes you need to see something in action before it's purpose becomes clear.

### Next Steps

Next we'll talk about how to use those variables to do things with functions. (key word, eventually link to a blog post here)
