(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{263:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(264),c=a(246),i=a.n(c),s=function(){return l.a.createElement("div",{className:i.a.box},l.a.createElement("h4",null,"Hire Me!"),l.a.createElement("p",null,"I'm looking for a new position. Please check out my ",l.a.createElement(r.a,{to:"/projects"},"projects page"),", my ",l.a.createElement(r.a,{to:"/about"},"technologies and skills")," and ",l.a.createElement("a",{href:"mailto:ali@alilynne.com"},"contact me at ali@alilynne.com")," if you're interested."))},m=a(268),o=a(267),u=a(316),p=a(247),d=a.n(p);var E=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).handleSubmit=function(e){var t=a.state.site+"/"+a.state.success,n=a.state.site+"/"+a.state.cancel;console.log(t),e.preventDefault(),a.stripe.redirectToCheckout({items:[{plan:a.state.selected,quantity:1}],successUrl:t,cancelUrl:n}).then(function(e){e.error&&a.setState({error:e.error.essage})})},a.handleChange=function(e){a.setState({selected:e.target.value})},a.state={key:a.props.stripe.public_key,plans:a.props.stripe.plans,selected:a.props.stripe.plans[1].id,error:"",buttonText:a.props.stripe.button_text,success:a.props.stripe.success_page,cancel:a.props.stripe.cancel_page,site:a.props.site},a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var r=n.prototype;return r.componentDidMount=function(){this.stripe=window.Stripe(this.state.key)},r.render=function(){var e=this,t=this.state.plans;return l.a.createElement("form",{className:d.a.form,onSubmit:this.handleSubmit},l.a.createElement("h3",{className:d.a.form__title},"Support My Work"),l.a.createElement("div",{className:d.a.form__inputs},t&&t.map(function(t){return l.a.createElement("label",{className:d.a.form__label,key:t.id},l.a.createElement("input",{className:d.a.form__input,type:"radio",name:"plan-type",value:t.id,checked:e.state.selected===t.id,onChange:e.handleChange}),t.label)})),l.a.createElement("button",{className:d.a.form__button,type:"submit"},this.state.buttonText),l.a.createElement("p",null,this.state.error),l.a.createElement("p",null,"or"),l.a.createElement("a",{href:"https://ko-fi.com/Z8Z313JNG",target:"_blank"},l.a.createElement("img",{height:"36",style:{border:0,height:36},src:"https://az743702.vo.msecnd.net/cdn/kofi5.png?v=2",border:"0",alt:"Buy Me a Coffee at ko-fi.com"})))},n}(l.a.Component),f=function(){return l.a.createElement(r.b,{query:"2496197285",render:function(e){return l.a.createElement(E,{stripe:e.site.siteMetadata.stripe,site:e.site.siteMetadata.siteUrl})},data:u})},v=a(248),h=a.n(v),g=function(e){var t=e.tags;return l.a.createElement("section",{className:h.a.container},l.a.createElement("p",null,"Tags: "),l.a.createElement("ul",{className:h.a.list},t.map(function(e){var t=e.toLowerCase();return l.a.createElement("li",{className:h.a.list__item,key:e},l.a.createElement(r.a,{to:"/tags/"+t},e))})))},y=a(249),_=a.n(y);a.d(t,"query",function(){return N});var N="1192860850";t.default=function(e){return l.a.createElement(m.a,null,l.a.createElement(o.a,{title:e.data.markdownRemark.frontmatter.title,article:!0}),l.a.createElement("h1",null,e.data.markdownRemark.frontmatter.title),l.a.createElement("p",null,e.data.markdownRemark.frontmatter.date),l.a.createElement(g,{tags:e.data.markdownRemark.frontmatter.tags}),l.a.createElement("div",{className:_.a.outer,dangerouslySetInnerHTML:{__html:e.data.markdownRemark.html}}),l.a.createElement(s,null),l.a.createElement(f,null))}},264:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),l=a.n(n),r=a(73),c=a.n(r);a.d(t,"a",function(){return c.a});a(265),a(9).default.enqueue;var i=l.a.createContext({});function s(e){var t=e.staticQueryData,a=e.data,n=e.query,r=e.render,c=a?a.data:t[n]&&t[n].data;return l.a.createElement(l.a.Fragment,null,c&&r(c),!c&&l.a.createElement("div",null,"Loading (StaticQuery)"))}var m=function(e){var t=e.data,a=e.query,n=e.render,r=e.children;return l.a.createElement(i.Consumer,null,function(e){return l.a.createElement(s,{data:t,query:a,render:n||r,staticQueryData:e})})}},265:function(e,t,a){var n;e.exports=(n=a(269))&&n.default||n},266:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(274),c=a(276),i=a(275),s=a(239),m=a.n(s);t.a=function(){return l.a.createElement("ul",{className:m.a.list},l.a.createElement("li",{className:m.a.list__item},l.a.createElement("a",{className:m.a.list__icon,href:"https://www.twitter.com/alilynnet"},l.a.createElement(r.a,{icon:c.d}),l.a.createElement("span",{className:m.a.visibleHidden},"Twitter"))),l.a.createElement("li",{className:m.a.list__item},l.a.createElement("a",{className:m.a.list__icon,href:"https://dev.to/alilynne"},l.a.createElement(r.a,{icon:c.a}),l.a.createElement("span",{className:m.a.visibleHidden},"Dev.to"))),l.a.createElement("li",{className:m.a.list__item},l.a.createElement("a",{className:m.a.list__icon,href:"https://www.github.com/alilynne"},l.a.createElement(r.a,{icon:c.b}),l.a.createElement("span",{className:m.a.visibleHidden},"Github"))),l.a.createElement("li",{className:m.a.list__item},l.a.createElement("a",{className:m.a.list__icon,href:"https://www.linkedin.com/in/alilynne/"},l.a.createElement(r.a,{icon:c.c}),l.a.createElement("span",{className:m.a.visibleHidden},"LinkedIn"))),l.a.createElement("li",{className:m.a.list__item},l.a.createElement("a",{className:m.a.list__icon,href:"mailto:ali@alilynne.com"},l.a.createElement(r.a,{icon:i.c}),l.a.createElement("span",{className:m.a.visibleHidden},"Email"))))}},267:function(e,t,a){"use strict";var n=a(273),l=a(0),r=a.n(l),c=a(277),i=a(264),s=function(e){var t=e.title,a=e.description,l=e.image,s=e.pathname,o=e.article;return r.a.createElement(i.b,{query:m,render:function(e){var n=e.site.siteMetadata,i=n.defaultTitle,m=n.titleTemplate,u=n.defaultDescription,p=n.siteUrl,d=n.defaultImage,E=n.twitterUsername,f={title:t||i,description:a||u,image:""+p+(l||d),url:""+p+(s||"/")};return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.Helmet,{title:f.title,titleTemplate:m},r.a.createElement("meta",{name:"description",content:f.description}),r.a.createElement("meta",{name:"image",content:f.image}),f.url&&r.a.createElement("meta",{property:"og:url",content:f.url}),!o?null:r.a.createElement("meta",{property:"og:type",content:"article"}),f.title&&r.a.createElement("meta",{property:"og:title",content:f.title}),f.description&&r.a.createElement("meta",{property:"og:description",content:f.description}),f.image&&r.a.createElement("meta",{property:"og:image",content:f.image}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),E&&r.a.createElement("meta",{name:"twitter:creator",content:E}),f.title&&r.a.createElement("meta",{name:"twitter:title",content:f.title}),f.description&&r.a.createElement("meta",{name:"twitter:description",content:f.description}),f.image&&r.a.createElement("meta",{name:"twitter:image",content:f.image})))},data:n})};t.a=s;var m="1376445457";s.defaultProps={title:null,description:null,image:null,pathname:null,article:!1}},268:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(270),c=a(266),i=a(240),s=a.n(i),m=function(){var e=r.data;return l.a.createElement("footer",{className:s.a.footer},l.a.createElement("p",null,"Created by ",e.site.siteMetadata.author," © ",(new Date).getFullYear()),l.a.createElement(c.a,null))},o=a(271),u=a(264),p=a(272),d=a.n(p),E=a(241),f=a.n(E),v=function(){var e=o.data;return l.a.createElement("header",{className:f.a.header},l.a.createElement(u.a,{className:f.a.title,to:"/"},l.a.createElement("h1",{className:f.a.titleHeader},l.a.createElement(d.a,null),e.site.siteMetadata.title)),l.a.createElement("ul",{className:f.a.navList},l.a.createElement("li",null,l.a.createElement(u.a,{className:f.a.navItem,activeClassName:f.a.activeNavItem,to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(u.a,{className:f.a.navItem,activeClassName:f.a.activeNavItem,to:"/about",partiallyActive:!0},"About")),l.a.createElement("li",null,l.a.createElement(u.a,{className:f.a.navItem,to:"/contact",activeClassName:f.a.activeNavItem,partiallyActive:!0},"Contact")),l.a.createElement("li",null,l.a.createElement(u.a,{className:f.a.navItem,to:"/blog",activeClassName:f.a.activeNavItem,partiallyActive:!0},"Blog")),l.a.createElement("li",null,l.a.createElement(u.a,{className:f.a.navItem,to:"/projects",activeClassName:f.a.activeNavItem,partiallyActive:!0},"Projects"))))},h=(a(242),a(243),a(244)),g=a.n(h);t.a=function(e){var t=e.children;return l.a.createElement("div",{className:g.a.container},l.a.createElement("div",{className:g.a.content},l.a.createElement(v,null),l.a.createElement("main",null,t)),l.a.createElement(m,null))}},269:function(e,t,a){"use strict";a.r(t);a(18);var n=a(0),l=a.n(n),r=a(98);t.default=function(e){var t=e.location,a=e.pageResources;return a?l.a.createElement(r.a,Object.assign({location:t,pageResources:a},a.json)):null}},270:function(e){e.exports={data:{site:{siteMetadata:{author:"Ali Lynne Thompson"}}}}},271:function(e){e.exports={data:{site:{siteMetadata:{title:"AliLynne"}}}}},272:function(e,t,a){var n=a(0);function l(e){return n.createElement("svg",e,n.createElement("g",null,[n.createElement("path",{d:"M379.769,153.431c-29.777,55.586-17.604,99.504-6.645,139.039C378.717,312.648,384,331.708,384,351.889   c0,15.897-2.956,30.873-8.785,44.51c-5.727,13.396-14.104,25.212-24.898,35.12C327.169,452.768,294.555,464,256,464   s-71.169-11.232-94.316-32.481c-10.795-9.908-19.172-21.725-24.898-35.12c-5.829-13.637-8.785-28.612-8.785-44.51   c0-31.65,6.92-55.999,21.775-76.626c13.061-18.134,32.646-34.094,63.505-51.749l6.506-3.725   c20.197-11.57,27.001-15.467,43.976-23.588c31.845-15.234,66.513-28.387,103.041-39.094   C371.088,155.851,375.412,154.625,379.769,153.431 M416,128c-18.863,4.163-36.75,8.786-53.697,13.753   c-40.457,11.858-75.509,25.693-105.445,40.015c-19.271,9.219-26.236,13.393-51.522,27.859C147.001,243,112,278.926,112,351.889   S167.635,480,256,480s144-55.148,144-128.111S338.999,224,416,128L416,128z",key:0}),n.createElement("path",{d:"M133.516,123.147c21.432,6.955,47.724,16.977,69.799,29.846c6.385,3.723,12.092,7.493,17.092,11.291   c-5.504,2.905-10.895,5.855-16.138,8.833c-7.212,4.096-14.359,8.362-21.243,12.679c-10.484,6.574-20.435,13.308-29.789,20.156   C152.637,180.034,147.555,151.15,133.516,123.147 M96,96c41.475,47.079,44.624,103.891,39.382,144.741   c12.772-11.274,31.177-25.734,56.144-41.389c6.442-4.041,13.312-8.158,20.645-12.322c11.578-6.575,23.538-12.822,35.834-18.765   c-9.113-10.898-22.07-20.606-36.631-29.095C162.631,110.756,96,96,96,96L96,96z",key:1}),n.createElement("path",{d:"M344.629,80.697c5.309,7.227,12.393,17.661,17.66,27.726c-29.863,8.433-65.994,21.145-94.967,33.476   c-5.963-6.235-12.982-12.294-21.006-18.135c17.437-15.757,38.773-27.668,63.652-35.506   C324.518,83.675,337.016,81.612,344.629,80.697 M352,64c0,0-78.623,2.321-130.681,62.469c16.629,9.903,29.735,20.503,38.959,31.533   l2.724,3.257c37.152-16.794,88.131-34.085,120.998-42.009C377.617,95.827,352,64,352,64L352,64z",key:2}),n.createElement("path",{d:"M181.229,53.532c9.241,6.122,22.68,16.481,35.999,31.924c-4.851,4.201-9.487,8.623-13.888,13.247   c-14.024-7.088-24.951-12.192-36.826-16.602C170.174,73.63,175.095,63.788,181.229,53.532 M176,32   c-15.256,22.406-25.684,45.299-30.336,59.997c21.111,6.355,35.475,13.215,61.389,26.574c9.505-11.4,20.415-21.626,32.605-30.543   C210.342,47.655,176,32,176,32L176,32z",key:3})]))}l.defaultProps={height:"100px",width:"100px",fill:"#ba2d65",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 512 512",enableBackground:"new 0 0 512 512",xmlSpace:"preserve"},e.exports=l,l.default=l},273:function(e){e.exports={data:{site:{siteMetadata:{defaultTitle:"AliLynne",titleTemplate:"%s | AliLynne",defaultDescription:"Where Ali talks about programming and life. She focuses on JavaScript, React, & Gatsby as well as crochet and sewing.",siteUrl:"https://www.alilynne.com",defaultImage:"/rosePink.png",twitterUsername:"@alilynnet"}}}}},316:function(e){e.exports={data:{site:{id:"Site",siteMetadata:{siteUrl:"https://www.alilynne.com",stripe:{public_key:"pk_live_5nKb8kqHdyaoi9bASiiKbdOO00eHIdX5YK",plans:[{id:"plan_Fm950fWNdiNekC",label:"$5 per month"},{id:"plan_Fm96pTXYQTIoad",label:"$10 per month"}],button_text:"Keep Me Going",success_page:"success",cancel_page:"cancel"}}}}}}}]);
//# sourceMappingURL=component---src-templates-blog-js-66e30b515ab1e9d75705.js.map