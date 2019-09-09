---
title: "Scope in Javascript"
date: ""
category: "Tech"
tags: ["Javascript", "Vanilla"]
draft: true
---

### What is Scope anyway?

According to **Advanced Javascript** by Zachary Shute "scope is the region of a computer program where the binding or association of a name to an entity, such as a variable or function, is valid."

While exact, this definition feels like a whole lot jargon to me. I tend to use the definition 'stuff other stuff can access.'

```javascript

const name = "AliLynne"

const sayMyName = () => {
  console.log(name)
}

sayMyName()

```