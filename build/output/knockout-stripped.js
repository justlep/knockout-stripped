/*!
 * Knockout JavaScript library v3.4.2
 * (c) The Knockout.js team - http://knockoutjs.com/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

 // !! PATCHED VERSION !!
 // See: https://github.com/justlep/knockout-stripped/

(function() {(function(l){var x=this||(0,eval)("this"),n=x.document,E=x.navigator,C=x.jQuery,y=x.JSON;(function(l){"function"===typeof define&&define.amd?define(["exports","require"],l):"object"===typeof exports&&"object"===typeof module?l(module.exports||exports):l(x.ko={})})(function(B){function D(a,b){return null===a||typeof a in F?a===b:!1}function G(a,b){b&&"change"!==b?"beforeChange"===b?this.ua(a):this.W(a,b):this.va(a)}function H(a,b){null!==b&&b.c&&b.c()}function I(a,b){var e=this.kb,d=e[g];d.w||(this.ka&&
this.Y[b]?(e.xa(b,a,this.Y[b]),this.Y[b]=null,--this.ka):d.f[b]||e.xa(b,a,d.g?{F:a}:e.Ua(a)),a.U&&a.ab())}var a="undefined"!==typeof B?B:{};a.b=function(c,b){for(var e=c.split("."),d=a,f=0;f<e.length-1;f++)d=d[e[f]];d[e[e.length-1]]=b};a.l=function(a,b,e){a[b]=e};a.version="3.4.2";a.b("version",a.version);a.options={deferUpdates:!1,useOnlyNativeEvents:!1};a.a=function(){function c(a,b){for(var c in a)a.hasOwnProperty(c)&&b(c,a[c])}function b(a,c){if(c)for(var b in c)c.hasOwnProperty(b)&&(a[b]=c[b]);
return a}function e(a,c){a.__proto__=c;return a}function d(m,c,b,d){var e=m[c].match(q)||[];a.a.M(b.match(q),function(m){a.a.ya(e,m,d)});m[c]=e.join(" ")}var f={__proto__:[]}instanceof Array,h="function"===typeof Symbol,p={},u={};p[E&&/Firefox\/2/i.test(E.userAgent)?"KeyboardEvent":"UIEvents"]=["keyup","keydown","keypress"];p.MouseEvents="click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");c(p,function(a,c){if(c.length)for(var b=0,d=c.length;b<d;b++)u[c[b]]=
a});var g={propertychange:!0},k=n&&function(){for(var a=3,c=n.createElement("div"),b=c.getElementsByTagName("i");c.innerHTML="\x3c!--[if gt IE "+ ++a+"]><i></i><![endif]--\x3e",b[0];);return 4<a?a:l}(),q=/\S+/g;return{La:["authenticity_token",/^__RequestVerificationToken(_.*)?$/],M:function(a,c){for(var b=0,d=a.length;b<d;b++)c(a[b],b)},v:function(a,c){if("function"==typeof Array.prototype.indexOf)return Array.prototype.indexOf.call(a,c);for(var b=0,d=a.length;b<d;b++)if(a[b]===c)return b;return-1},
za:function(a,c,b){for(var d=0,e=a.length;d<e;d++)if(c.call(b,a[d],d))return a[d];return null},Aa:function(m,c){var b=a.a.v(m,c);0<b?m.splice(b,1):0===b&&m.shift()},fb:function(m){m=m||[];for(var b=[],c=0,d=m.length;c<d;c++)0>a.a.v(b,m[c])&&b.push(m[c]);return b},gb:function(a,b){a=a||[];for(var c=[],d=0,e=a.length;d<e;d++)c.push(b(a[d],d));return c},eb:function(a,c){a=a||[];for(var b=[],d=0,e=a.length;d<e;d++)c(a[d],d)&&b.push(a[d]);return b},hb:function(a,b){if(b instanceof Array)a.push.apply(a,
b);else for(var c=0,d=b.length;c<d;c++)a.push(b[c]);return a},ya:function(b,c,d){var e=a.a.v(a.a.Sa(b),c);0>e?d&&b.push(c):d||b.splice(e,1)},N:f,extend:b,setPrototypeOf:e,ga:f?e:b,J:c,Wb:function(a,b){if(!a)return a;var c={},d;for(d in a)a.hasOwnProperty(d)&&(c[d]=b(a[d],d,a));return c},ob:function(b){for(;b.firstChild;)a.removeNode(b.firstChild)},Vb:function(b){b=a.a.pa(b);for(var c=(b[0]&&b[0].ownerDocument||n).createElement("div"),d=0,e=b.length;d<e;d++)c.appendChild(a.jb(b[d]));return c},Nb:function(b,
c){for(var d=0,e=b.length,f=[];d<e;d++){var h=b[d].cloneNode(!0);f.push(c?a.jb(h):h)}return f},Gb:function(b,c){a.a.ob(b);if(c)for(var d=0,e=c.length;d<e;d++)b.appendChild(c[d])},Yb:function(b,c){var d=b.nodeType?[b]:b;if(0<d.length){for(var e=d[0],f=e.parentNode,h=0,p=c.length;h<p;h++)f.insertBefore(c[h],e);h=0;for(p=d.length;h<p;h++)a.removeNode(d[h])}},Qb:function(a,b){if(a.length){for(b=8===b.nodeType&&b.parentNode||b;a.length&&a[0].parentNode!==b;)a.splice(0,1);for(;1<a.length&&a[a.length-1].parentNode!==
b;)a.length--;if(1<a.length){var c=a[0],d=a[a.length-1];for(a.length=0;c!==d;)a.push(c),c=c.nextSibling;a.push(d)}}return a},$b:function(a,b){7>k?a.setAttribute("selected",b):a.selected=b},Ib:function(a){return null===a||a===l?"":a.trim?a.trim():a.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},ac:function(a,b){a=a||"";return b.length>a.length?!1:a.substring(0,b.length)===b},nb:function(a,b){if(a===b)return!0;if(11===a.nodeType)return!1;if(b.contains)return b.contains(3===a.nodeType?a.parentNode:
a);if(b.compareDocumentPosition)return 16==(b.compareDocumentPosition(a)&16);for(;a&&a!=b;)a=a.parentNode;return!!a},Ia:function(b){return a.a.nb(b,b.ownerDocument.documentElement)},Mb:function(b){return!!a.a.za(b,a.a.Ia)},Wa:function(a){return a&&a.tagName&&a.tagName.toLowerCase()},Da:function(b){return a.onError?function(){try{return b.apply(this,arguments)}catch(c){throw a.onError&&a.onError(c),c;}}:b},setTimeout:function(b,c){return setTimeout(a.a.Da(b),c)},Ob:function(b){setTimeout(function(){a.onError&&
a.onError(b);throw b;},0)},Eb:function(b,c,d){var e=a.a.Da(d);d=k&&g[c];if(a.options.useOnlyNativeEvents||d||!C)if(d||"function"!=typeof b.addEventListener)if("undefined"!=typeof b.attachEvent){var f=function(a){e.call(b,a)},h="on"+c;b.attachEvent(h,f);a.a.Ha.cb(b,function(){b.detachEvent(h,f)})}else throw Error("Browser doesn't support addEventListener or attachEvent");else b.addEventListener(c,e,!1);else C(b).bind(c,e)},Kb:function(b,c){if(!b||!b.nodeType)throw Error("element must be a DOM node when calling triggerEvent");
var d;"input"===a.a.Wa(b)&&b.type&&"click"==c.toLowerCase()?(d=b.type,d="checkbox"==d||"radio"==d):d=!1;if(a.options.useOnlyNativeEvents||!C||d)if("function"==typeof n.createEvent)if("function"==typeof b.dispatchEvent)d=n.createEvent(u[c]||"HTMLEvents"),d.initEvent(c,!0,!0,x,0,0,0,0,0,!1,!1,!1,!1,0,b),b.dispatchEvent(d);else throw Error("The supplied element doesn't support dispatchEvent");else if(d&&b.click)b.click();else if("undefined"!=typeof b.fireEvent)b.fireEvent("on"+c);else throw Error("Browser doesn't support triggering events");
else C(b).trigger(c)},D:function(b){return a.H(b)?b():b},Sa:function(b){return a.H(b)?b.i():b},Jb:function(b,c,e){var f;c&&("object"===typeof b.classList?(f=b.classList[e?"add":"remove"],a.a.M(c.match(q),function(a){f.call(b.classList,a)})):"string"===typeof b.className.baseVal?d(b.className,"baseVal",c,e):d(b,"className",c,e))},Hb:function(b,c){var d=a.a.D(c);if(null===d||d===l)d="";var e=a.Ya.firstChild(b);!e||3!=e.nodeType||a.Ya.nextSibling(e)?a.Ya.Gb(b,[b.ownerDocument.createTextNode(d)]):e.data=
d;a.a.rb(b)},Zb:function(a,b){a.name=b;if(7>=k)try{a.mergeAttributes(n.createElement("<input name='"+a.name+"'/>"),!1)}catch(c){}},rb:function(a){9<=k&&(a=1==a.nodeType?a:a.parentNode,a.style&&(a.style.zoom=a.style.zoom))},Pb:function(a){if(k){var b=a.style.width;a.style.width=0;a.style.width=b}},Cb:function(b,c){b=a.a.D(b);c=a.a.D(c);for(var d=[],e=b;e<=c;e++)d.push(e);return d},pa:function(a){for(var b=[],c=0,d=a.length;c<d;c++)b.push(a[c]);return b},Fa:function(a){return h?Symbol(a):a},Tb:6===
k,Ub:7===k,Rb:k,Na:function(b,c){for(var d=a.a.pa(b.getElementsByTagName("input")).concat(a.a.pa(b.getElementsByTagName("textarea"))),e="string"==typeof c?function(a){return a.name===c}:function(a){return c.test(a.name)},f=[],h=d.length-1;0<=h;h--)e(d[h])&&f.push(d[h]);return f},zb:function(b){return"string"==typeof b&&(b=a.a.Ib(b))?y&&y.parse?y.parse(b):(new Function("return "+b))():null},qa:function(b,c,d){if(!y||!y.stringify)throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
return y.stringify(a.a.D(b),c,d)},Ab:function(b,d,e){e=e||{};var f=e.params||{},h=e.includeFields||this.La,p=b;if("object"==typeof b&&"form"===a.a.Wa(b))for(var p=b.action,k=h.length-1;0<=k;k--)for(var g=a.a.Na(b,h[k]),u=g.length-1;0<=u;u--)f[g[u].name]=g[u].value;d=a.a.D(d);var q=n.createElement("form");q.style.display="none";q.action=p;q.method="post";for(var z in d)b=n.createElement("input"),b.type="hidden",b.name=z,b.value=a.a.qa(a.a.D(d[z])),q.appendChild(b);c(f,function(a,b){var c=n.createElement("input");
c.type="hidden";c.name=a;c.value=b;q.appendChild(c)});n.body.appendChild(q);e.submitter?e.submitter(q):q.submit();setTimeout(function(){q.parentNode.removeChild(q)},0)}}}();a.b("utils",a.a);a.b("utils.arrayForEach",a.a.M);a.b("utils.arrayFirst",a.a.za);a.b("utils.arrayFilter",a.a.eb);a.b("utils.arrayGetDistinctValues",a.a.fb);a.b("utils.arrayIndexOf",a.a.v);a.b("utils.arrayMap",a.a.gb);a.b("utils.arrayPushAll",a.a.hb);a.b("utils.arrayRemoveItem",a.a.Aa);a.b("utils.extend",a.a.extend);a.b("utils.fieldsIncludedWithJsonPost",
a.a.La);a.b("utils.getFormFields",a.a.Na);a.b("utils.peekObservable",a.a.Sa);a.b("utils.postJson",a.a.Ab);a.b("utils.parseJson",a.a.zb);a.b("utils.registerEventHandler",a.a.Eb);a.b("utils.stringifyJson",a.a.qa);a.b("utils.range",a.a.Cb);a.b("utils.toggleDomNodeCssClass",a.a.Jb);a.b("utils.triggerEvent",a.a.Kb);a.b("utils.unwrapObservable",a.a.D);a.b("utils.objectForEach",a.a.J);a.b("utils.addOrRemoveItem",a.a.ya);a.b("utils.setTextContent",a.a.Hb);a.b("unwrap",a.a.D);Function.prototype.bind||(Function.prototype.bind=
function(a){var b=this;if(1===arguments.length)return function(){return b.apply(a,arguments)};var e=Array.prototype.slice.call(arguments,1);return function(){var d=e.slice(0);d.push.apply(d,arguments);return b.apply(a,d)}});a.T={notify:function(a,b){a.equalityComparer="always"==b?null:D}};var F={undefined:1,"boolean":1,number:1,string:1};a.b("extenders",a.T);a.Va=function(c,b,e){this.F=c;this.ha=b;this.mb=e;this.w=!1;a.l(this,"dispose",this.c)};a.Va.prototype.c=function(){this.w=!0;this.mb()};a.u=
function(){a.a.ga(this,t);t.na(this)};var t={na:function(a){a.j={change:[]};a.wa=1},subscribe:function(c,b,e){var d=this;e=e||"change";var f=new a.Va(d,b?c.bind(b):c,function(){a.a.Aa(d.j[e],f);d.X&&d.X(e)});d.S&&d.S(e);d.j[e]||(d.j[e]=[]);d.j[e].push(f);return f},notifySubscribers:function(c,b){b=b||"change";"change"===b&&this.sa();if(this.ba(b)){var e="change"===b&&this.Za||this.j[b].slice(0);try{a.G.Ba();for(var d=0,f;f=e[d];++d)f.w||f.ha(c)}finally{a.G.end()}}},$:function(){return this.wa},tb:function(a){return this.$()!==
a},sa:function(){++this.wa},Ra:function(c){var b=this,e=a.H(b),d,f,h,p;b.W||(b.W=b.notifySubscribers,b.notifySubscribers=G);var g=c(function(){b.U=!1;e&&p===b&&(p=b.ta?b.ta():b());var a=f||b.ea(h,p);f=d=!1;a&&b.W(h=p)});b.va=function(a){b.Za=b.j.change.slice(0);b.U=d=!0;p=a;g()};b.ua=function(a){d||(h=a,b.W(a,"beforeChange"))};b.ab=function(){b.ea(h,b.i(!0))&&(f=!0)}},ba:function(a){return this.j[a]&&this.j[a].length},sb:function(c){if(c)return this.j[c]&&this.j[c].length||0;var b=0;a.a.J(this.j,
function(a,c){"dirty"!==a&&(b+=c.length)});return b},ea:function(a,b){return!this.equalityComparer||!this.equalityComparer(a,b)},extend:function(c){var b=this;c&&a.a.J(c,function(c,d){var f=a.T[c];"function"==typeof f&&(b=f(b,d)||b)});return b}};a.l(t,"subscribe",t.subscribe);a.l(t,"extend",t.extend);a.l(t,"getSubscriptionsCount",t.sb);a.a.N&&a.a.setPrototypeOf(t,Function.prototype);a.u.fn=t;a.Pa=function(a){return null!=a&&"function"==typeof a.subscribe&&"function"==typeof a.notifySubscribers};a.b("subscribable",
a.u);a.b("isSubscribable",a.Pa);a.ja=a.G=function(){function c(a){e.push(d);d=a}function b(){d=e.pop()}var e=[],d,f=0;return{Ba:c,end:b,Ta:function(b){if(d){if(!a.Pa(b))throw Error("Only subscribable things can act as dependencies");d.ha.call(d.ib,b,b.$a||(b.$a=++f))}},vb:function(a,d,e){try{return c(),a.apply(d,e||[])}finally{b()}},Z:function(){if(d)return d.m.Z()},oa:function(){if(d)return d.oa}}}();a.b("computedContext",a.ja);a.b("computedContext.getDependenciesCount",a.ja.Z);a.b("computedContext.isInitial",
a.ja.oa);a.b("ignoreDependencies",a.Sb=a.G.vb);var w=a.a.Fa("_latestValue");a.A=function(c){function b(){if(0<arguments.length)return b.ea(b[w],arguments[0])&&(b.L(),b[w]=arguments[0],b.K()),this;a.G.Ta(b);return b[w]}b[w]=c;a.a.N||a.a.extend(b,a.u.fn);a.u.fn.na(b);a.a.ga(b,v);a.options.deferUpdates&&a.T.deferred(b,!0);return b};var v={equalityComparer:D,i:function(){return this[w]},K:function(){this.notifySubscribers(this[w])},L:function(){this.notifySubscribers(this[w],"beforeChange")}};a.a.N&&
a.a.setPrototypeOf(v,a.u.fn);var A=a.A.bb="__ko_proto__";v[A]=a.A;a.aa=function(c,b){return null===c||c===l||c[A]===l?!1:c[A]===b?!0:a.aa(c[A],b)};a.H=function(c){return a.aa(c,a.A)};a.Qa=function(c){return"function"==typeof c&&c[A]===a.A||"function"==typeof c&&c[A]===a.lb&&c.ub?!0:!1};a.b("observable",a.A);a.b("isObservable",a.H);a.b("isWriteableObservable",a.Qa);a.b("isWritableObservable",a.Qa);a.b("observable.fn",v);a.l(v,"peek",v.i);a.l(v,"valueHasMutated",v.K);a.l(v,"valueWillMutate",v.L);a.O=
function(c){c=c||[];if("object"!=typeof c||!("length"in c))throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");c=a.A(c);a.a.ga(c,a.O.fn);return c.extend({trackArrayChanges:!0})};a.O.fn={remove:function(c){for(var b=this.i(),e=[],d="function"!=typeof c||a.H(c)?function(a){return a===c}:c,f=0;f<b.length;f++){var h=b[f];d(h)&&(0===e.length&&this.L(),e.push(h),b.splice(f,1),f--)}e.length&&this.K();return e},removeAll:function(c){if(c===l){var b=
this.i(),e=b.slice(0);this.L();b.splice(0,b.length);this.K();return e}return c?this.remove(function(b){return 0<=a.a.v(c,b)}):[]},destroy:function(c){var b=this.i(),e="function"!=typeof c||a.H(c)?function(a){return a===c}:c;this.L();for(var d=b.length-1;0<=d;d--)e(b[d])&&(b[d]._destroy=!0);this.K()},destroyAll:function(c){return c===l?this.destroy(function(){return!0}):c?this.destroy(function(b){return 0<=a.a.v(c,b)}):[]},indexOf:function(c){var b=this();return a.a.v(b,c)},replace:function(a,b){var e=
this.indexOf(a);0<=e&&(this.L(),this.i()[e]=b,this.K())}};a.a.N&&a.a.setPrototypeOf(a.O.fn,a.A.fn);a.a.M("pop push reverse shift sort splice unshift".split(" "),function(c){a.O.fn[c]=function(){var a=this.i();this.L();this.Ca(a,c,arguments);var e=a[c].apply(a,arguments);this.K();return e===a?this:e}});a.a.M(["slice"],function(c){a.O.fn[c]=function(){var a=this();return a[c].apply(a,arguments)}});a.b("observableArray",a.O);a.T.trackArrayChanges=function(c,b){function e(){if(!d){d=!0;g=c.notifySubscribers;
c.notifySubscribers=function(a,b){b&&"change"!==b||++p;return g.apply(this,arguments)};var b=[].concat(c.i()||[]);f=null;h=c.subscribe(function(d){d=[].concat(d||[]);if(c.ba("arrayChange")){var e;if(!f||1<p)f=a.a.Ea(b,d,c.ia);e=f}b=d;f=null;p=0;e&&e.length&&c.notifySubscribers(e,"arrayChange")})}}c.ia={};b&&"object"==typeof b&&a.a.extend(c.ia,b);c.ia.sparse=!0;if(!c.Ca){var d=!1,f=null,h,p=0,g,z=c.S,k=c.X;c.S=function(a){z&&z.call(c,a);"arrayChange"===a&&e()};c.X=function(a){k&&k.call(c,a);"arrayChange"!==
a||c.ba("arrayChange")||(g&&(c.notifySubscribers=g,g=l),h.c(),d=!1)};c.Ca=function(b,c,e){function h(a,b,c){return g[g.length]={status:a,value:b,index:c}}if(d&&!p){var g=[],k=b.length,u=e.length,l=0;switch(c){case "push":l=k;case "unshift":for(c=0;c<u;c++)h("added",e[c],l+c);break;case "pop":l=k-1;case "shift":k&&h("deleted",b[l],l);break;case "splice":c=Math.min(Math.max(0,0>e[0]?k+e[0]:e[0]),k);for(var k=1===u?k:Math.min(c+(e[1]||0),k),u=c+u-2,l=Math.max(k,u),z=[],r=[],n=2;c<l;++c,++n)c<k&&r.push(h("deleted",
b[c],c)),c<u&&z.push(h("added",e[n],c));a.a.Ma(r,z);break;default:return}f=g}}}};var g=a.a.Fa("_state");a.m=a.lb=function(c,b,e){function d(){if(0<arguments.length){if("function"===typeof f)f.apply(h.ma,arguments);else throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");return this}a.G.Ta(d);(h.C||h.g&&d.ca())&&d.B();return h.s}"object"===typeof c?e=c:(e=e||{},c&&(e.read=c));if("function"!=typeof e.read)throw Error("Pass a function that returns the value of the ko.computed");
var f=e.write,h={s:l,I:!0,C:!0,da:!1,ra:!1,w:!1,fa:!1,g:!1,Db:e.read,ma:b||e.owner,h:e.disposeWhenNodeIsRemoved||e.h||null,Ga:e.disposeWhen||e.Ga,la:null,f:{},o:0,Ka:null};d[g]=h;d.ub="function"===typeof f;a.a.N||a.a.extend(d,a.u.fn);a.u.fn.na(d);a.a.ga(d,r);e.pure?(h.fa=!0,h.g=!0,a.a.extend(d,J)):e.deferEvaluation&&a.a.extend(d,K);a.options.deferUpdates&&a.T.deferred(d,!0);h.h&&(h.ra=!0,h.h.nodeType||(h.h=null));h.g||e.deferEvaluation||d.B();h.h&&d.Oa()&&a.a.Ha.cb(h.h,h.la=function(){d.c()});return d};
var r={equalityComparer:D,Z:function(){return this[g].o},xa:function(a,b,e){if(this[g].fa&&b===this)throw Error("A 'pure' computed must not be called recursively");this[g].f[a]=e;e.V=this[g].o++;e.R=b.$()},ca:function(){var a,b,e=this[g].f;for(a in e)if(e.hasOwnProperty(a)&&(b=e[a],this.P&&b.F.U||b.F.tb(b.R)))return!0},yb:function(){this.P&&!this[g].da&&this.P(!1)},Oa:function(){var a=this[g];return a.C||0<a.o},Fb:function(){this.U?this[g].C&&(this[g].I=!0):this.Ja()},Ua:function(a){if(a.Lb&&!this[g].h){var b=
a.subscribe(this.yb,this,"dirty"),e=a.subscribe(this.Fb,this);return{F:a,c:function(){b.c();e.c()}}}return a.subscribe(this.Ja,this)},Ja:function(){var c=this,b=c.throttleEvaluation;b&&0<=b?(clearTimeout(this[g].Ka),this[g].Ka=a.a.setTimeout(function(){c.B(!0)},b)):c.P?c.P(!0):c.B(!0)},B:function(c){var b=this[g],e=b.Ga,d=!1;if(!b.da&&!b.w){if(b.h&&!a.a.Ia(b.h)||e&&e()){if(!b.ra){this.c();return}}else b.ra=!1;b.da=!0;try{d=this.qb(c)}finally{b.da=!1}b.o||this.c();return d}},qb:function(c){var b=this[g],
e=!1,d=b.fa?l:!b.o,f={kb:this,Y:b.f,ka:b.o};a.G.Ba({ib:f,ha:I,m:this,oa:d});b.f={};b.o=0;f=this.pb(b,f);this.ea(b.s,f)&&(b.g||this.notifySubscribers(b.s,"beforeChange"),b.s=f,b.g?this.sa():c&&this.notifySubscribers(b.s),e=!0);d&&this.notifySubscribers(b.s,"awake");return e},pb:function(c,b){try{var e=c.Db;return c.ma?e.call(c.ma):e()}finally{a.G.end(),b.ka&&!c.g&&a.a.J(b.Y,H),c.I=c.C=!1}},i:function(a){var b=this[g];(b.C&&(a||!b.o)||b.g&&this.ca())&&this.B();return b.s},Ra:function(c){a.u.fn.Ra.call(this,
c);this.ta=function(){this[g].I?this.B():this[g].C=!1;return this[g].s};this.P=function(a){this.ua(this[g].s);this[g].C=!0;a&&(this[g].I=!0);this.va(this)}},c:function(){var c=this[g];!c.g&&c.f&&a.a.J(c.f,function(a,c){c.c&&c.c()});c.h&&c.la&&a.a.Ha.Xb(c.h,c.la);c.f=null;c.o=0;c.w=!0;c.I=!1;c.C=!1;c.g=!1;c.h=null}},J={S:function(c){var b=this,e=b[g];if(!e.w&&e.g&&"change"==c){e.g=!1;if(e.I||b.ca())e.f=null,e.o=0,b.B()&&b.sa();else{var d=[];a.a.J(e.f,function(a,b){d[b.V]=a});a.a.M(d,function(a,c){var d=
e.f[a],g=b.Ua(d.F);g.V=c;g.R=d.R;e.f[a]=g})}e.w||b.notifySubscribers(e.s,"awake")}},X:function(c){var b=this[g];b.w||"change"!=c||this.ba("change")||(a.a.J(b.f,function(a,c){c.c&&(b.f[a]={F:c.F,V:c.V,R:c.R},c.c())}),b.g=!0,this.notifySubscribers(l,"asleep"))},$:function(){var c=this[g];c.g&&(c.I||this.ca())&&this.B();return a.u.fn.$.call(this)}},K={S:function(a){"change"!=a&&"beforeChange"!=a||this.i()}};a.a.N&&a.a.setPrototypeOf(r,a.u.fn);B=a.A.bb;a.m[B]=a.A;r[B]=a.m;a.wb=function(c){return a.aa(c,
a.m)};a.xb=function(c){return a.aa(c,a.m)&&c[g]&&c[g].fa};a.b("computed",a.m);a.b("dependentObservable",a.m);a.b("isComputed",a.wb);a.b("isPureComputed",a.xb);a.b("computed.fn",r);a.l(r,"peek",r.i);a.l(r,"dispose",r.c);a.l(r,"isActive",r.Oa);a.l(r,"getDependenciesCount",r.Z);a.Bb=function(c,b){if("function"===typeof c)return a.m(c,b,{pure:!0});c=a.a.extend({},c);c.pure=!0;return a.m(c,b)};a.b("pureComputed",a.Bb);(function(){function c(a,f,h){h=h||new e;a=f(a);if("object"!=typeof a||null===a||a===
l||a instanceof RegExp||a instanceof Date||a instanceof String||a instanceof Number||a instanceof Boolean)return a;var g=a instanceof Array?[]:{};h.save(a,g);b(a,function(b){var e=f(a[b]);switch(typeof e){case "boolean":case "number":case "string":case "function":g[b]=e;break;case "object":case "undefined":var k=h.get(e);g[b]=k!==l?k:c(e,f,h)}});return g}function b(a,b){if(a instanceof Array){for(var c=0;c<a.length;c++)b(c);"function"==typeof a.toJSON&&b("toJSON")}else for(c in a)b(c)}function e(){this.keys=
[];this.values=[]}a.Xa=function(b){if(0==arguments.length)throw Error("When calling ko.toJS, pass the object you want to convert.");return c(b,function(b){for(var c=0;a.H(b)&&10>c;c++)b=b();return b})};a.toJSON=function(b,c,e){b=a.Xa(b);return a.a.qa(b,c,e)};e.prototype={constructor:e,save:function(b,c){var e=a.a.v(this.keys,b);0<=e?this.values[e]=c:(this.keys.push(b),this.values.push(c))},get:function(b){b=a.a.v(this.keys,b);return 0<=b?this.values[b]:l}}})();a.b("toJS",a.Xa);a.b("toJSON",a.toJSON);
a.a.Ma=function(a,b,e){if(a.length&&b.length){var d,f,h,g,l;for(d=f=0;(!e||d<e)&&(g=a[f]);++f){for(h=0;l=b[h];++h)if(g.value===l.value){g.moved=l.index;l.moved=g.index;b.splice(h,1);d=h=0;break}d+=h}}};a.a.Ea=function(){function c(b,c,d,f,h){var g=Math.min,l=Math.max,r=[],k,q=b.length,m,n=c.length,t=n-q||1,v=q+n+1,w,x,y;for(k=0;k<=q;k++)for(x=w,r.push(w=[]),y=g(n,k+t),m=l(0,k-1);m<=y;m++)w[m]=m?k?b[k-1]===c[m-1]?x[m-1]:g(x[m]||v,w[m-1]||v)+1:m+1:k+1;g=[];l=[];t=[];k=q;for(m=n;k||m;)n=r[k][m]-1,m&&
n===r[k][m-1]?l.push(g[g.length]={status:d,value:c[--m],index:m}):k&&n===r[k-1][m]?t.push(g[g.length]={status:f,value:b[--k],index:k}):(--m,--k,h.sparse||g.push({status:"retained",value:c[m]}));a.a.Ma(t,l,!h.dontLimitMoves&&10*q);return g.reverse()}return function(a,e,d){d="boolean"===typeof d?{dontLimitMoves:d}:d||{};a=a||[];e=e||[];return a.length<e.length?c(a,e,"added","deleted",d):c(e,a,"deleted","added",d)}}();a.b("utils.compareArrays",a.a.Ea)})})();})();
