(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{254:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return s});var n=a(0),r=a.n(n),c=a(257),l=a(298),i=a.n(l),u=a(260),o=a(268);t.default=function(e){var t=e.data,a=t.allMarkdownRemark.group,n=t.site.siteMetadata.title;return r.a.createElement(o.a,null,r.a.createElement(u.a,{title:n}),r.a.createElement("h1",null,"Tags"),r.a.createElement("ul",null,a.map(function(e){return r.a.createElement("li",{key:e.fieldValue},r.a.createElement(c.a,{to:"/tags/"+i()(e.fieldValue)+"/"},e.fieldValue," (",e.totalCount,")"))})))};var s="3450235017"},257:function(e,t,a){"use strict";a.d(t,"b",function(){return o});var n=a(0),r=a.n(n),c=a(70),l=a.n(c);a.d(t,"a",function(){return l.a});a(258),a(9).default.enqueue;var i=r.a.createContext({});function u(e){var t=e.staticQueryData,a=e.data,n=e.query,c=e.render,l=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,l&&c(l),!l&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var o=function(e){var t=e.data,a=e.query,n=e.render,c=e.children;return r.a.createElement(i.Consumer,null,function(e){return r.a.createElement(u,{data:t,query:a,render:n||c,staticQueryData:e})})}},258:function(e,t,a){var n;e.exports=(n=a(265))&&n.default||n},259:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(269),l=a(271),i=a(270),u=a(234),o=a.n(u);t.a=function(){return r.a.createElement("ul",{className:o.a.list},r.a.createElement("li",{className:o.a.list__item},r.a.createElement("a",{className:o.a.list__icon,href:"https://www.twitter.com/alilynnet"},r.a.createElement(c.a,{icon:l.d}))),r.a.createElement("li",{className:o.a.list__item},r.a.createElement("a",{className:o.a.list__icon,href:"https://dev.to/alilynne"},r.a.createElement(c.a,{icon:l.a}))),r.a.createElement("li",{className:o.a.list__item},r.a.createElement("a",{className:o.a.list__icon,href:"https://www.github.com/alilynne"},r.a.createElement(c.a,{icon:l.b}))),r.a.createElement("li",{className:o.a.list__item},r.a.createElement("a",{className:o.a.list__icon,href:"https://www.linkedin.com/in/alilynne/"},r.a.createElement(c.a,{icon:l.c}))),r.a.createElement("li",{className:o.a.list__item},r.a.createElement("a",{className:o.a.list__icon,href:"mailto:ali@alilynne.com"},r.a.createElement(c.a,{icon:i.c}))))}},260:function(e,t,a){"use strict";var n=a(267),r=a(0),c=a.n(r),l=a(272),i=a(257),u=function(e){var t=e.title,a=e.description,r=e.image,u=e.pathname,s=e.article;return c.a.createElement(i.b,{query:o,render:function(e){var n=e.site.siteMetadata,i=n.defaultTitle,o=n.titleTemplate,m=n.defaultDescription,f=n.siteUrl,d=n.defaultImage,p=n.twitterUsername,v={title:t||i,description:a||m,image:""+f+(r||d),url:""+f+(u||"/")};return c.a.createElement(c.a.Fragment,null,c.a.createElement(l.Helmet,{title:v.title,titleTemplate:o},c.a.createElement("meta",{name:"description",content:v.description}),c.a.createElement("meta",{name:"image",content:v.image}),v.url&&c.a.createElement("meta",{property:"og:url",content:v.url}),!s?null:c.a.createElement("meta",{property:"og:type",content:"article"}),v.title&&c.a.createElement("meta",{property:"og:title",content:v.title}),v.description&&c.a.createElement("meta",{property:"og:description",content:v.description}),v.image&&c.a.createElement("meta",{property:"og:image",content:v.image}),c.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),p&&c.a.createElement("meta",{name:"twitter:creator",content:p}),v.title&&c.a.createElement("meta",{name:"twitter:title",content:v.title}),v.description&&c.a.createElement("meta",{name:"twitter:description",content:v.description}),v.image&&c.a.createElement("meta",{name:"twitter:image",content:v.image})))},data:n})};t.a=u;var o="1376445457";u.defaultProps={title:null,description:null,image:null,pathname:null,article:!1}},261:function(e,t,a){"use strict";var n=a(262),r=a(0),c=a.n(r),l=a(259),i=a(235),u=a.n(i);t.a=function(){var e=n.data;return c.a.createElement("footer",{className:u.a.footer},c.a.createElement("p",null,"Created by ",e.site.siteMetadata.author," © ",(new Date).getFullYear()),c.a.createElement(l.a,null))}},262:function(e){e.exports={data:{site:{siteMetadata:{author:"Ali Lynne Thompson"}}}}},263:function(e,t,a){"use strict";var n=a(264),r=a(0),c=a.n(r),l=a(257),i=a(266),u=a.n(i),o=a(236),s=a.n(o);t.a=function(){var e=n.data;return c.a.createElement("header",{className:s.a.header},c.a.createElement(l.a,{className:s.a.title,to:"/"},c.a.createElement("h1",{className:s.a.titleHeader},c.a.createElement(u.a,null),e.site.siteMetadata.title)),c.a.createElement("ul",{className:s.a.navList},c.a.createElement("li",null,c.a.createElement(l.a,{className:s.a.navItem,activeClassName:s.a.activeNavItem,to:"/"},"Home")),c.a.createElement("li",null,c.a.createElement(l.a,{className:s.a.navItem,activeClassName:s.a.activeNavItem,to:"/about",partiallyActive:!0},"About")),c.a.createElement("li",null,c.a.createElement(l.a,{className:s.a.navItem,to:"/contact",activeClassName:s.a.activeNavItem,partiallyActive:!0},"Contact")),c.a.createElement("li",null,c.a.createElement(l.a,{className:s.a.navItem,to:"/blog",activeClassName:s.a.activeNavItem,partiallyActive:!0},"Blog")),c.a.createElement("li",null,c.a.createElement(l.a,{className:s.a.navItem,to:"/projects",activeClassName:s.a.activeNavItem,partiallyActive:!0},"Projects"))))}},264:function(e){e.exports={data:{site:{siteMetadata:{title:"AliLynne"}}}}},265:function(e,t,a){"use strict";a.r(t);a(18);var n=a(0),r=a.n(n),c=a(97);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null}},266:function(e,t,a){var n=a(0);function r(e){return n.createElement("svg",e,n.createElement("g",null,[n.createElement("path",{d:"M379.769,153.431c-29.777,55.586-17.604,99.504-6.645,139.039C378.717,312.648,384,331.708,384,351.889   c0,15.897-2.956,30.873-8.785,44.51c-5.727,13.396-14.104,25.212-24.898,35.12C327.169,452.768,294.555,464,256,464   s-71.169-11.232-94.316-32.481c-10.795-9.908-19.172-21.725-24.898-35.12c-5.829-13.637-8.785-28.612-8.785-44.51   c0-31.65,6.92-55.999,21.775-76.626c13.061-18.134,32.646-34.094,63.505-51.749l6.506-3.725   c20.197-11.57,27.001-15.467,43.976-23.588c31.845-15.234,66.513-28.387,103.041-39.094   C371.088,155.851,375.412,154.625,379.769,153.431 M416,128c-18.863,4.163-36.75,8.786-53.697,13.753   c-40.457,11.858-75.509,25.693-105.445,40.015c-19.271,9.219-26.236,13.393-51.522,27.859C147.001,243,112,278.926,112,351.889   S167.635,480,256,480s144-55.148,144-128.111S338.999,224,416,128L416,128z",key:0}),n.createElement("path",{d:"M133.516,123.147c21.432,6.955,47.724,16.977,69.799,29.846c6.385,3.723,12.092,7.493,17.092,11.291   c-5.504,2.905-10.895,5.855-16.138,8.833c-7.212,4.096-14.359,8.362-21.243,12.679c-10.484,6.574-20.435,13.308-29.789,20.156   C152.637,180.034,147.555,151.15,133.516,123.147 M96,96c41.475,47.079,44.624,103.891,39.382,144.741   c12.772-11.274,31.177-25.734,56.144-41.389c6.442-4.041,13.312-8.158,20.645-12.322c11.578-6.575,23.538-12.822,35.834-18.765   c-9.113-10.898-22.07-20.606-36.631-29.095C162.631,110.756,96,96,96,96L96,96z",key:1}),n.createElement("path",{d:"M344.629,80.697c5.309,7.227,12.393,17.661,17.66,27.726c-29.863,8.433-65.994,21.145-94.967,33.476   c-5.963-6.235-12.982-12.294-21.006-18.135c17.437-15.757,38.773-27.668,63.652-35.506   C324.518,83.675,337.016,81.612,344.629,80.697 M352,64c0,0-78.623,2.321-130.681,62.469c16.629,9.903,29.735,20.503,38.959,31.533   l2.724,3.257c37.152-16.794,88.131-34.085,120.998-42.009C377.617,95.827,352,64,352,64L352,64z",key:2}),n.createElement("path",{d:"M181.229,53.532c9.241,6.122,22.68,16.481,35.999,31.924c-4.851,4.201-9.487,8.623-13.888,13.247   c-14.024-7.088-24.951-12.192-36.826-16.602C170.174,73.63,175.095,63.788,181.229,53.532 M176,32   c-15.256,22.406-25.684,45.299-30.336,59.997c21.111,6.355,35.475,13.215,61.389,26.574c9.505-11.4,20.415-21.626,32.605-30.543   C210.342,47.655,176,32,176,32L176,32z",key:3})]))}r.defaultProps={height:"100px",width:"100px",fill:"#ba2d65",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 512 512",enableBackground:"new 0 0 512 512",xmlSpace:"preserve"},e.exports=r,r.default=r},267:function(e){e.exports={data:{site:{siteMetadata:{defaultTitle:"AliLynne",titleTemplate:"%s | AliLynne",defaultDescription:"Where Ali talks about programming and life. She focuses on JavaScript, React, & Gatsby as well as crochet and sewing.",siteUrl:"https://www.alilynne.com",defaultImage:"/src/images/rosePink.png",twitterUsername:"@alilynnet"}}}}},268:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(261),l=a(263),i=(a(237),a(238),a(239)),u=a.n(i);t.a=function(e){var t=e.children;return r.a.createElement("div",{className:u.a.container},r.a.createElement("div",{className:u.a.content},r.a.createElement(l.a,null),t),r.a.createElement(c.a,null))}},275:function(e,t,a){var n=a(305).Symbol;e.exports=n},278:function(e,t,a){var n=a(304);e.exports=function(e){return null==e?"":n(e)}},298:function(e,t,a){var n=a(299)(function(e,t,a){return e+(a?"-":"")+t.toLowerCase()});e.exports=n},299:function(e,t,a){a(14),a(274);var n=a(300),r=a(301),c=a(314),l=RegExp("['’]","g");e.exports=function(e){return function(t){return n(c(r(t).replace(l,"")),e,"")}}},300:function(e,t){e.exports=function(e,t,a,n){var r=-1,c=null==e?0:e.length;for(n&&c&&(a=e[++r]);++r<c;)a=t(a,e[r],r,e);return a}},301:function(e,t,a){a(14),a(274);var n=a(302),r=a(278),c=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,l=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=r(e))&&e.replace(c,n).replace(l,"")}},302:function(e,t,a){var n=a(303)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=n},303:function(e,t){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},304:function(e,t,a){a(51),a(71),a(13);var n=a(275),r=a(307),c=a(308),l=a(309),i=1/0,u=n?n.prototype:void 0,o=u?u.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(c(t))return r(t,e)+"";if(l(t))return o?o.call(t):"";var a=t+"";return"0"==a&&1/t==-i?"-0":a}},305:function(e,t,a){var n=a(306),r="object"==typeof self&&self&&self.Object===Object&&self,c=n||r||Function("return this")();e.exports=c},306:function(e,t,a){(function(t){var a="object"==typeof t&&t&&t.Object===Object&&t;e.exports=a}).call(this,a(273))},307:function(e,t){e.exports=function(e,t){for(var a=-1,n=null==e?0:e.length,r=Array(n);++a<n;)r[a]=t(e[a],a,e);return r}},308:function(e,t,a){a(72);var n=Array.isArray;e.exports=n},309:function(e,t,a){var n=a(310),r=a(313),c="[object Symbol]";e.exports=function(e){return"symbol"==typeof e||r(e)&&n(e)==c}},310:function(e,t,a){var n=a(275),r=a(311),c=a(312),l="[object Null]",i="[object Undefined]",u=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?i:l:u&&u in Object(e)?r(e):c(e)}},311:function(e,t,a){a(51),a(71),a(13);var n=a(275),r=Object.prototype,c=r.hasOwnProperty,l=r.toString,i=n?n.toStringTag:void 0;e.exports=function(e){var t=c.call(e,i),a=e[i];try{e[i]=void 0;var n=!0}catch(u){}var r=l.call(e);return n&&(t?e[i]=a:delete e[i]),r}},312:function(e,t,a){a(51),a(71),a(13);var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},313:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},314:function(e,t,a){a(98);var n=a(315),r=a(316),c=a(278),l=a(317);e.exports=function(e,t,a){return e=c(e),void 0===(t=a?void 0:t)?r(e)?l(e):n(e):e.match(t)||[]}},315:function(e,t,a){a(98);var n=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(n)||[]}},316:function(e,t){var a=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return a.test(e)}},317:function(e,t,a){a(98),a(274);var n="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",r="["+n+"]",c="\\d+",l="[\\u2700-\\u27bf]",i="[a-z\\xdf-\\xf6\\xf8-\\xff]",u="[^\\ud800-\\udfff"+n+c+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",o="(?:\\ud83c[\\udde6-\\uddff]){2}",s="[\\ud800-\\udbff][\\udc00-\\udfff]",m="[A-Z\\xc0-\\xd6\\xd8-\\xde]",f="(?:"+i+"|"+u+")",d="(?:"+m+"|"+u+")",p="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",v="[\\ufe0e\\ufe0f]?"+p+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",o,s].join("|")+")[\\ufe0e\\ufe0f]?"+p+")*"),E="(?:"+[l,o,s].join("|")+")"+v,x=RegExp([m+"?"+i+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[r,m,"$"].join("|")+")",d+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[r,m+f,"$"].join("|")+")",m+"?"+f+"+(?:['’](?:d|ll|m|re|s|t|ve))?",m+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",c,E].join("|"),"g");e.exports=function(e){return e.match(x)||[]}}}]);
//# sourceMappingURL=component---src-pages-tags-js-b8ee45343bd7017d45bc.js.map