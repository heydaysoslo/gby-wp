(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{150:function(t,e,a){"use strict";a.r(e),a.d(e,"pageQuery",function(){return p});a(159);var n=a(7),r=a.n(n),i=a(0),o=a.n(i),s=a(157),l=a(161),c=a(170),p="1580090154",u=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data,e=t.wordpressPage;return o.a.createElement(l.a,{locale:e.locale,translations:e.translations},o.a.createElement(c.a,{title:"Home",keywords:["gatsby","application","react"]}),e.acf.poster_sections&&e.acf.poster_sections.map(function(t){return o.a.createElement("section",null,t.poster_lists.map(function(t){return o.a.createElement("ul",null,t.artists.map(function(t){return o.a.createElement("li",null,t.title.rendered)}))}))}),o.a.createElement("p",null,"There are ",t.allWordpressPost.totalCount," posts in total."," ",o.a.createElement(s.a,{to:"/posts"},"See all")),t.allWordpressPost.edges.map(function(t){var e=t.node;return o.a.createElement("div",{key:e.id},o.a.createElement(s.a,{to:e.link},o.a.createElement("h4",null,o.a.createElement("span",{dangerouslySetInnerHTML:{__html:e.title}})," -"," ",e.date)),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.excerpt}}))}))},e}(i.Component);e.default=u},170:function(t,e,a){"use strict";var n=a(171),r=a(0),i=a.n(r),o=a(4),s=a.n(o),l=a(162),c=a.n(l),p=a(157);function u(t){var e=t.description,a=t.lang,r=t.meta,o=t.keywords,s=t.title;return i.a.createElement(p.b,{query:d,render:function(t){var n=e||t.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:s},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},e.a=u;var d="1025518380"},171:function(t){t.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}}}]);
//# sourceMappingURL=component---src-pages-oldindex-js-1f06722c68aa323d1883.js.map