webpackJsonp([0xc23565d713b7],{72:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.MediaOverlay=t.Media=void 0;var a=n(101),o=r(a),l=n(102),i=r(l);t.default=o.default,t.Media=o.default,t.MediaOverlay=i.default},59:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=n(1),u=r(i),c=n(60),f=r(c),s=function(e){function t(){return a(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.getPostList=function(){var e=[];return this.props.postEdges.forEach(function(t){e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,date:t.node.frontmatter.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead})}),e},t.prototype.render=function(){var e=this.getPostList();return u.default.createElement("div",{className:"md-grid md-grid--no-spacing md-cell--middle"},u.default.createElement("div",{className:"md-grid md-cell--8 mobile-fix"},e.map(function(e){return u.default.createElement(f.default,{key:e.title,postInfo:e})})))},t}(u.default.Component);t.default=s,e.exports=t.default},60:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=n(1),u=r(i),c=n(53),f=r(c),s=n(39),d=r(s),p=n(37),m=r(p),h=n(71),y=r(h),b=n(38),E=r(b),g=n(40),v=r(g),w=n(22),_=r(w),O=n(72),x=r(O),j=n(76),T=r(j);n(65);var P=function(e){function t(n){a(this,t);var r=o(this,e.call(this,n));return r.state={mobile:!0},r.handleResize=r.handleResize.bind(r),r}return l(t,e),t.prototype.componentDidMount=function(){this.handleResize(),window.addEventListener("resize",this.handleResize)},t.prototype.componentWillUnmount=function(){window.removeEventListener("resize",this.handleResize)},t.prototype.handleResize=function(){window.innerWidth>=640?this.setState({mobile:!1}):this.setState({mobile:!0})},t.prototype.render=function(){var e=this.props.postInfo,t=this.state.mobile,n=t,r=e.cover.startsWith("/")?""+e.cover:e.cover,a=t?162:225;return u.default.createElement(f.default,{key:e.path,raise:!0,className:"md-grid md-cell md-cell--12"},u.default.createElement(_.default,{style:{textDecoration:"none"},to:e.path},u.default.createElement(x.default,{style:{backgroundImage:"url("+r+")",height:a+"px"},className:"post-preview-cover"},u.default.createElement(O.MediaOverlay,null,u.default.createElement(d.default,{title:e.title},u.default.createElement(m.default,{raised:!0,secondary:!0,className:"md-cell--right"},"Read"))))),u.default.createElement(d.default,{expander:n,avatar:u.default.createElement(y.default,{icon:u.default.createElement(v.default,{iconClassName:"fa fa-calendar"})}),title:"Published on "+e.date,subtitle:e.timeToRead+" min read"}),u.default.createElement(E.default,{expandable:n},e.excerpt,u.default.createElement(T.default,{tags:e.tags})))},t}(i.Component);t.default=P,e.exports=t.default},65:function(e,t){},107:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=n(1),u=r(i),c=n(27),f=r(c),s=n(17),d=r(s),p=function(e){function t(){return a(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){var e=this.props,t=e.postNode,n=e.postPath,r=e.postSEO,a=void 0,o=void 0,l=void 0,i=void 0;if(r){var c=t.frontmatter;a=c.title,o=c.description?c.description:t.excerpt,l=c.cover,i=d.default.siteUrl+d.default.pathPrefix+n}else a=d.default.siteTitle,o=d.default.siteDescription,l=d.default.siteLogo;var s="/"===d.default.pathPrefix?"":d.default.pathPrefix;l=d.default.siteUrl+s+l;var p=d.default.siteUrl+d.default.pathPrefix,m=[{"@context":"http://schema.org","@type":"WebSite",url:p,name:a,alternateName:d.default.siteTitleAlt?d.default.siteTitleAlt:""}];return r&&m.push([{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":i,name:a,image:l}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:p,name:a,alternateName:d.default.siteTitleAlt?d.default.siteTitleAlt:"",headline:a,image:{"@type":"ImageObject",url:l},description:o}]),u.default.createElement(f.default,null,u.default.createElement("meta",{name:"description",content:o}),u.default.createElement("meta",{name:"image",content:l}),u.default.createElement("script",{type:"application/ld+json"},JSON.stringify(m)),u.default.createElement("meta",{property:"og:url",content:r?i:p}),r?u.default.createElement("meta",{property:"og:type",content:"article"}):null,u.default.createElement("meta",{property:"og:title",content:a}),u.default.createElement("meta",{property:"og:description",content:o}),u.default.createElement("meta",{property:"og:image",content:l}),u.default.createElement("meta",{property:"fb:app_id",content:d.default.siteFBAppID?d.default.siteFBAppID:""}),u.default.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),u.default.createElement("meta",{name:"twitter:creator",content:d.default.userTwitter?d.default.userTwitter:""}),u.default.createElement("meta",{name:"twitter:title",content:a}),u.default.createElement("meta",{name:"twitter:description",content:o}),u.default.createElement("meta",{name:"twitter:image",content:l}))},t}(i.Component);t.default=p,e.exports=t.default},303:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var i=n(1),u=r(i),c=n(27),f=r(c),s=n(59),d=r(s),p=n(107),m=r(p),h=n(17),y=r(h),b=function(e){function t(){return a(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges;return u.default.createElement("div",{className:"index-container"},u.default.createElement(f.default,null,u.default.createElement("title",null,y.default.siteTitle),u.default.createElement("link",{rel:"canonical",href:""+y.default.siteUrl})),u.default.createElement(m.default,{postEdges:e}),u.default.createElement(d.default,{postEdges:e}))},t}(u.default.Component);t.default=b;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-jsx-5cd3e3488ba2b0d716bd.js.map