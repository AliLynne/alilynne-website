---
title: "Making a Gatsby Hello World Starter From Scratch"
date: "2019-09-04"
category: "Tech"
tags: ["Gatsby", "React"]
draft: true
---

### Prerequisites
  #### Required

  - Installed [Gatsby CLI](https://www.gatsbyjs.org/docs/quick-start)

  #### Nice to have
- Have created a Gatsby site with a [starter](https://www.gatsbyjs.org/starters/?v=2)
  - Check out [Gatsby's Docs](https://www.gatsbyjs.org/docs/) and come back later if you need to.

### In this tutorial you will:

...build a very simple Gatsby Hello World starter from complete scratch. You will learn what bare minimum components are required for the simplest of Gatsby projects.

### Getting Started

First, make a new directory for your project. I've gone with gatsby_playground for mine.

```bash
mkdir gatsby_playground
cd gatsby_playground
```

### Create the Project

Now we're going to want to actually create our project. Run `npm init` in your console. You'll be asked a series of questions. You can just hit enter to accept all of the defaults.

```bash
npm init
```

This should be your result:

```bash
{
  "name": "gatsby_playground",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

### Required Packages

We only need three packages to get us started: Gatsby, React, & React-Dom.

Install all three.

```bash
npm install gatsby react react-dom
```

### Start the Server

Now, if that went right, we should just need to start our development server
in the console.

```bash
gatsby develop
```

### Create Structure

It's all well and good to have a server running. But it isn't really doing much because we haven't added any sort of content yet. To do that we need to create a couple of folders and one file. We'll need a `src` folder and inside the `src` we need a `pages` folder. Inside the `pages` folder make a file called `index.js`. It __must__ be called `index.js`. This is location and filename Gatsby looks for in order to serve your content.

```bash
mkdir src
cd src
mkdir pages
cd pages
touch index.js
```

### Add Content

Inside `index.js` we need to create a React component. 

```jsx
// src/pages/index.js

// highlight-start
import React from 'react'
// highlight-end


const Index = () => {
  return (
    <div>
      Have a great day!
    </div>
  )
}

export default Index
```

Now, when we run our `gatsby develop` command in the terminal in the root directory of our project, we'll get "Have a great day!" in our browser.

That's it! We have a Gatsby site! Just one more thing and we're done.

### Add Scripts

The Gatsby CLI comes with a few commands that we'll want to add to our `package.json` for convenience. You can learn more about these commands in the [Gatsby Docs](https://www.gatsbyjs.org/docs/gatsby-cli/). 

```js
// package.json
...

"license": "MIT",
  "scripts": {
    "build": "gatsby build",
    "develop": "gatsby develop",
    "start": "npm run develop",
    "serve": "gatsby serve",
    "test": "echo \"Write tests! -> https://gatsby.dev/unit-testing \""
  },
  "dependencies": {

...
```

Now we can start our development server with the following terminal command:

```bash
npm run start
```

Final code for this project can be found on [Github](https://github.com/AliLynne/gatsby_hello_world)