(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{254:function(e,t,a){"use strict";a.r(t);var n=a(320),l=a(0),c=a.n(l),r=a(264),i=a(274),s=a(275),m=a(268),o=a(267),d=a(255),u=a.n(d);t.default=function(){var e=n.data;return c.a.createElement(m.a,null,c.a.createElement(o.a,{title:"Blog"}),c.a.createElement("h2",null,"Blog Posts"),c.a.createElement("ol",{className:u.a.posts},e.allMarkdownRemark.edges.map(function(e){return c.a.createElement("li",{key:e.node.id,className:u.a.post},c.a.createElement(r.a,{to:"/blog/"+e.node.fields.slug},c.a.createElement(i.a,{icon:s.b,className:u.a.icon,size:"3x"}),c.a.createElement("div",null,c.a.createElement("h2",null,e.node.frontmatter.title),c.a.createElement("p",null,e.node.frontmatter.date))))})))}},264:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),l=a.n(n),c=a(73),r=a.n(c);a.d(t,"a",function(){return r.a});a(265),a(9).default.enqueue;var i=l.a.createContext({});function s(e){var t=e.staticQueryData,a=e.data,n=e.query,c=e.render,r=a?a.data:t[n]&&t[n].data;return l.a.createElement(l.a.Fragment,null,r&&c(r),!r&&l.a.createElement("div",null,"Loading (StaticQuery)"))}var m=function(e){var t=e.data,a=e.query,n=e.render,c=e.children;return l.a.createElement(i.Consumer,null,function(e){return l.a.createElement(s,{data:t,query:a,render:n||c,staticQueryData:e})})}},265:function(e,t,a){var n;e.exports=(n=a(269))&&n.default||n},266:function(e,t,a){"use strict";var n=a(0),l=a.n(n),c=a(274),r=a(276),i=a(275),s=a(239),m=a.n(s);t.a=function(){return l.a.createElement("ul",{className:m.a.list},l.a.createElement("li",{className:m.a.list__item},l.a.createElement("a",{className:m.a.list__icon,href:"https://www.twitter.com/alilynnet"},l.a.createElement(c.a,{icon:r.d}),l.a.createElement("span",{className:m.a.visibleHidden},"Twitter"))),l.a.createElement("li",{className:m.a.list__item},l.a.createElement("a",{className:m.a.list__icon,href:"https://dev.to/alilynne"},l.a.createElement(c.a,{icon:r.a}),l.a.createElement("span",{className:m.a.visibleHidden},"Dev.to"))),l.a.createElement("li",{className:m.a.list__item},l.a.createElement("a",{className:m.a.list__icon,href:"https://www.github.com/alilynne"},l.a.createElement(c.a,{icon:r.b}),l.a.createElement("span",{className:m.a.visibleHidden},"Github"))),l.a.createElement("li",{className:m.a.list__item},l.a.createElement("a",{className:m.a.list__icon,href:"https://www.linkedin.com/in/alilynne/"},l.a.createElement(c.a,{icon:r.c}),l.a.createElement("span",{className:m.a.visibleHidden},"LinkedIn"))),l.a.createElement("li",{className:m.a.list__item},l.a.createElement("a",{className:m.a.list__icon,href:"mailto:ali@alilynne.com"},l.a.createElement(c.a,{icon:i.c}),l.a.createElement("span",{className:m.a.visibleHidden},"Email"))))}},267:function(e,t,a){"use strict";var n=a(273),l=a(0),c=a.n(l),r=a(277),i=a(264),s=function(e){var t=e.title,a=e.description,l=e.image,s=e.pathname,o=e.article;return c.a.createElement(i.b,{query:m,render:function(e){var n=e.site.siteMetadata,i=n.defaultTitle,m=n.titleTemplate,d=n.defaultDescription,u=n.siteUrl,E=n.defaultImage,p=n.twitterUsername,f={title:t||i,description:a||d,image:""+u+(l||E),url:""+u+(s||"/")};return c.a.createElement(c.a.Fragment,null,c.a.createElement(r.Helmet,{title:f.title,titleTemplate:m},c.a.createElement("meta",{name:"description",content:f.description}),c.a.createElement("meta",{name:"image",content:f.image}),f.url&&c.a.createElement("meta",{property:"og:url",content:f.url}),!o?null:c.a.createElement("meta",{property:"og:type",content:"article"}),f.title&&c.a.createElement("meta",{property:"og:title",content:f.title}),f.description&&c.a.createElement("meta",{property:"og:description",content:f.description}),f.image&&c.a.createElement("meta",{property:"og:image",content:f.image}),c.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),p&&c.a.createElement("meta",{name:"twitter:creator",content:p}),f.title&&c.a.createElement("meta",{name:"twitter:title",content:f.title}),f.description&&c.a.createElement("meta",{name:"twitter:description",content:f.description}),f.image&&c.a.createElement("meta",{name:"twitter:image",content:f.image})))},data:n})};t.a=s;var m="1376445457";s.defaultProps={title:null,description:null,image:null,pathname:null,article:!1}},268:function(e,t,a){"use strict";var n=a(0),l=a.n(n),c=a(270),r=a(266),i=a(240),s=a.n(i),m=function(){var e=c.data;return l.a.createElement("footer",{className:s.a.footer},l.a.createElement("p",null,"Created by ",e.site.siteMetadata.author," © ",(new Date).getFullYear()),l.a.createElement(r.a,null))},o=a(271),d=a(264),u=a(272),E=a.n(u),p=a(241),f=a.n(p),v=function(){var e=o.data;return l.a.createElement("header",{className:f.a.header},l.a.createElement(d.a,{className:f.a.title,to:"/"},l.a.createElement("h1",{className:f.a.titleHeader},l.a.createElement(E.a,null),e.site.siteMetadata.title)),l.a.createElement("ul",{className:f.a.navList},l.a.createElement("li",null,l.a.createElement(d.a,{className:f.a.navItem,activeClassName:f.a.activeNavItem,to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(d.a,{className:f.a.navItem,activeClassName:f.a.activeNavItem,to:"/about",partiallyActive:!0},"About")),l.a.createElement("li",null,l.a.createElement(d.a,{className:f.a.navItem,to:"/contact",activeClassName:f.a.activeNavItem,partiallyActive:!0},"Contact")),l.a.createElement("li",null,l.a.createElement(d.a,{className:f.a.navItem,to:"/blog",activeClassName:f.a.activeNavItem,partiallyActive:!0},"Blog")),l.a.createElement("li",null,l.a.createElement(d.a,{className:f.a.navItem,to:"/projects",activeClassName:f.a.activeNavItem,partiallyActive:!0},"Projects"))))},g=(a(242),a(243),a(244)),N=a.n(g);t.a=function(e){var t=e.children;return l.a.createElement("div",{className:N.a.container},l.a.createElement("div",{className:N.a.content},l.a.createElement(v,null),l.a.createElement("main",null,t)),l.a.createElement(m,null))}},269:function(e,t,a){"use strict";a.r(t);a(18);var n=a(0),l=a.n(n),c=a(98);t.default=function(e){var t=e.location,a=e.pageResources;return a?l.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null}},270:function(e){e.exports={data:{site:{siteMetadata:{author:"Ali Lynne Thompson"}}}}},271:function(e){e.exports={data:{site:{siteMetadata:{title:"AliLynne"}}}}},272:function(e,t,a){var n=a(0);function l(e){return n.createElement("svg",e,n.createElement("g",null,[n.createElement("path",{d:"M379.769,153.431c-29.777,55.586-17.604,99.504-6.645,139.039C378.717,312.648,384,331.708,384,351.889   c0,15.897-2.956,30.873-8.785,44.51c-5.727,13.396-14.104,25.212-24.898,35.12C327.169,452.768,294.555,464,256,464   s-71.169-11.232-94.316-32.481c-10.795-9.908-19.172-21.725-24.898-35.12c-5.829-13.637-8.785-28.612-8.785-44.51   c0-31.65,6.92-55.999,21.775-76.626c13.061-18.134,32.646-34.094,63.505-51.749l6.506-3.725   c20.197-11.57,27.001-15.467,43.976-23.588c31.845-15.234,66.513-28.387,103.041-39.094   C371.088,155.851,375.412,154.625,379.769,153.431 M416,128c-18.863,4.163-36.75,8.786-53.697,13.753   c-40.457,11.858-75.509,25.693-105.445,40.015c-19.271,9.219-26.236,13.393-51.522,27.859C147.001,243,112,278.926,112,351.889   S167.635,480,256,480s144-55.148,144-128.111S338.999,224,416,128L416,128z",key:0}),n.createElement("path",{d:"M133.516,123.147c21.432,6.955,47.724,16.977,69.799,29.846c6.385,3.723,12.092,7.493,17.092,11.291   c-5.504,2.905-10.895,5.855-16.138,8.833c-7.212,4.096-14.359,8.362-21.243,12.679c-10.484,6.574-20.435,13.308-29.789,20.156   C152.637,180.034,147.555,151.15,133.516,123.147 M96,96c41.475,47.079,44.624,103.891,39.382,144.741   c12.772-11.274,31.177-25.734,56.144-41.389c6.442-4.041,13.312-8.158,20.645-12.322c11.578-6.575,23.538-12.822,35.834-18.765   c-9.113-10.898-22.07-20.606-36.631-29.095C162.631,110.756,96,96,96,96L96,96z",key:1}),n.createElement("path",{d:"M344.629,80.697c5.309,7.227,12.393,17.661,17.66,27.726c-29.863,8.433-65.994,21.145-94.967,33.476   c-5.963-6.235-12.982-12.294-21.006-18.135c17.437-15.757,38.773-27.668,63.652-35.506   C324.518,83.675,337.016,81.612,344.629,80.697 M352,64c0,0-78.623,2.321-130.681,62.469c16.629,9.903,29.735,20.503,38.959,31.533   l2.724,3.257c37.152-16.794,88.131-34.085,120.998-42.009C377.617,95.827,352,64,352,64L352,64z",key:2}),n.createElement("path",{d:"M181.229,53.532c9.241,6.122,22.68,16.481,35.999,31.924c-4.851,4.201-9.487,8.623-13.888,13.247   c-14.024-7.088-24.951-12.192-36.826-16.602C170.174,73.63,175.095,63.788,181.229,53.532 M176,32   c-15.256,22.406-25.684,45.299-30.336,59.997c21.111,6.355,35.475,13.215,61.389,26.574c9.505-11.4,20.415-21.626,32.605-30.543   C210.342,47.655,176,32,176,32L176,32z",key:3})]))}l.defaultProps={height:"100px",width:"100px",fill:"#ba2d65",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 512 512",enableBackground:"new 0 0 512 512",xmlSpace:"preserve"},e.exports=l,l.default=l},273:function(e){e.exports={data:{site:{siteMetadata:{defaultTitle:"AliLynne",titleTemplate:"%s | AliLynne",defaultDescription:"Where Ali talks about programming and life. She focuses on JavaScript, React, & Gatsby as well as crochet and sewing.",siteUrl:"https://www.alilynne.com",defaultImage:"/rosePink.png",twitterUsername:"@alilynnet"}}}}},320:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{id:"ec72c9e2-b1b1-5241-aff3-1548c8dd995c",frontmatter:{title:"How I Take Notes on Tech Books",date:"2019-11-04"},fields:{slug:"takingNotes"}}},{node:{id:"9f96222e-7916-5056-b7a6-f17ef08c41e4",frontmatter:{title:"React App Refactor - NOW FEATURING TESTING!",date:"2019-10-08"},fields:{slug:"2019_10_08_meditation_refactor"}}},{node:{id:"87981d19-9351-561c-98db-e03b0861614a",frontmatter:{title:"365 Days of Meditation",date:"2019-09-15"},fields:{slug:"2019_09_15_365_days"}}},{node:{id:"d3686b86-c0b1-5207-af97-0ef52987caad",frontmatter:{title:"Making a Gatsby Hello World Starter From Scratch",date:"2019-09-04"},fields:{slug:"2019_08_04_Create_Hello_World_Starter"}}},{node:{id:"d6d044bc-2219-5a01-9e4c-04c822f27d81",frontmatter:{title:"I Made Another Website",date:"2019-08-29"},fields:{slug:"2019_08_29_made_another"}}},{node:{id:"ecbebe1d-1428-519f-b411-b8f2ba5d6545",frontmatter:{title:"TIL #1 - Gatsby Link & activeClassName",date:"2019-08-26"},fields:{slug:"TIL_2019_08_25"}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-blog-js-a49db67335ccb759d5c6.js.map