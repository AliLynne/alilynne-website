(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{193:function(e,a,t){"use strict";t.r(a);var n=t(217),l=t(0),r=t.n(l),c=t(197),s=t(203),i=t(201),o=t(218),m=t.n(o);a.default=function(){var e=n.data;return r.a.createElement(s.a,null,r.a.createElement(i.a,{title:"Blog"}),r.a.createElement("h2",null,"Blog Posts"),r.a.createElement("ol",{className:m.a.posts},e.allMarkdownRemark.edges.map(function(e){return r.a.createElement("li",{key:e.node.id,className:m.a.post},r.a.createElement(c.a,{to:"/blog/"+e.node.fields.slug},r.a.createElement("h2",null,e.node.frontmatter.title),r.a.createElement("p",null,e.node.frontmatter.date)))})))}},196:function(e,a,t){var n;e.exports=(n=t(200))&&n.default||n},197:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(66),c=t.n(r);t.d(a,"a",function(){return c.a});t(196),t(9).default.enqueue,l.a.createContext({})},198:function(e){e.exports={data:{site:{siteMetadata:{author:"Ali Lynne Thompson"}}}}},199:function(e){e.exports={data:{site:{siteMetadata:{title:"AliLynne"}}}}},200:function(e,a,t){"use strict";t.r(a);t(18);var n=t(0),l=t.n(n),r=t(90);a.default=function(e){var a=e.location,t=e.pageResources;return t?l.a.createElement(r.a,Object.assign({location:a,pageResources:t},t.json)):null}},201:function(e,a,t){"use strict";var n=t(202),l=t(0),r=t.n(l),c=t(208);a.a=function(e){var a=e.title,t=n.data;return r.a.createElement(c.Helmet,{title:a+" | "+t.site.siteMetadata.title})}},202:function(e){e.exports={data:{site:{siteMetadata:{title:"AliLynne"}}}}},203:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(198),c=t(204),s=t.n(c),i=function(){var e=r.data;return l.a.createElement("footer",{className:s.a.footer},l.a.createElement("p",null,"Created by ",e.site.siteMetadata.author," © ",(new Date).getFullYear()))},o=t(199),m=t(197),u=t(205),d=t.n(u),v=function(){var e=o.data;return l.a.createElement("header",{className:d.a.header},l.a.createElement("h1",null,l.a.createElement(m.a,{className:d.a.title,to:"/"},e.site.siteMetadata.title)),l.a.createElement("ul",{className:d.a.navList},l.a.createElement("li",null,l.a.createElement(m.a,{className:d.a.navItem,activeClassName:d.a.activeNavItem,to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(m.a,{className:d.a.navItem,activeClassName:d.a.activeNavItem,to:"/about"},"About")),l.a.createElement("li",null,l.a.createElement(m.a,{className:d.a.navItem,to:"/contact",activeClassName:d.a.activeNavItem},"Contact")),l.a.createElement("li",null,l.a.createElement(m.a,{className:d.a.navItem,to:"/blog",activeClassName:d.a.activeNavItem,partiallyActive:!0},"Blog"))))},f=(t(206),t(207)),E=t.n(f);a.a=function(e){var a=e.children;return l.a.createElement("div",{className:E.a.container},l.a.createElement("div",{className:E.a.content},l.a.createElement(v,null),a),l.a.createElement(i,null))}},217:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{id:"ea7e6128-135f-504e-a3e3-50b1a2a3e84d",frontmatter:{title:"TIL #1",date:"2 days ago"},fields:{slug:"TIL_2019_08_25"}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-blog-js-bc85c02149e419ed8974.js.map