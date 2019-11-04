---
title: "React App Refactor - Part 2"
date: "2019-10-10"
category: "Tech"
tags: ["React", "JAMstack", "Testing"]
canonical_url: ""
published: false
series: "React App Refactor"
---

# Notes

```md
Timer Should:

'when clicking start button' => 
- Set timerOn state to true
- set timerTime to current timerTime state
- set timerStart time to current time: timerStart: new Date() - this.state.timerTime
- set timer to setInterval

(will need to add a pause button)
'when clicking pause button' =>
- set timerOn state to false
- clear timer interval

'when clicking reset button' =>
- set timerStart to 0
- set timerTime to 0
```