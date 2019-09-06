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

<!-- Fathom - simple website analytics - https://github.com/usefathom/fathom -->
<script>
(function(f, a, t, h, o, m){
	a[h]=a[h]||function(){
		(a[h].q=a[h].q||[]).push(arguments)
	};
	o=f.createElement('script'),
	m=f.getElementsByTagName('script')[0];
	o.async=1; o.src=t; o.id='fathom-script';
	m.parentNode.insertBefore(o,m)
})(document, window, '//fathom.tdvm.net/tracker.js', 'fathom');
fathom('set', 'siteId', 'KOKQF');
fathom('trackPageview');
</script>
<!-- / Fathom -->