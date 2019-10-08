---
title: "React App Refactor - NOW FEATURING TESTING!"
date: "2019-10-08"
category: "Tech"
tags: ["React", "JAMstack"]
draft: true
---

## Notes

- using exclusively hooks this time
- excited to be back to React after working with Gatsby (which is awesome, but)
- starting with simply getting all of my components to display (not complete components, just the very basics)
- get all of the information and data displayed and functioning - worry about styling later
- starting with the Timer ack! so many state things! how do I work with this many pieces of state with hooks? Enter useReducer! - haven't used it before - this should be interesting

## Refactoring My Meditation App

I've wanted to include more testing my projects for awhile now but many of the courses I took either didn't cover testing at all or skimmed over it briefly. I finally took the time to take a React testing course on Udemy and now I'm excited to get to refactoring my favorite project using a Behavior Driven Development approach.

I recommend the course. It's [React - Mastering Test Driven Development]('https://www.udemy.com/course/react-tdd/') by [David Joseph Katz]('https://www.udemy.com/course/react-tdd/#instructor-1'). It is a bit old and I had to find some updated docs to get things to work, but the concepts are very sound.

## What I'm doing different this time

- I want to stick with exclusively React hooks this time. When I did the first run through I didn't understand hooks very well, and a lot of the documentation still only included Class examples. I'm a lot better with hooks now and they feel cleaner.

- I'm completely ignoring styling for awhile. Part of the reason I want to use a BDD approach is that I can write my tests, create my components, get the functionality working and not be distracted by endless adjustments to margins and padding that would likely change in two days anyway.