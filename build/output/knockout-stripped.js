/*!
 * Knockout JavaScript library v3.4.2
 * (c) The Knockout.js team - http://knockoutjs.com/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

 // !! PATCHED VERSION !!
 // See: https://github.com/justlep/knockout-stripped/

(function() {(function(l){var w=this||(0,eval)("this");(function(l){"object"===typeof exports&&"object"===typeof module?l(module.exports||exports):l(w.ko={})})(function(u){function x(c,a){return null===c||typeof c in z?c===a:!1}function w(a,b){b&&"change"!==b?"beforeChange"===b?this.pa(a):this.S(a,b):this.qa(a)}function A(a,b){null!==b&&b.g&&b.g()}function B(a,b){var d=this.Wa,e=d[f];e.u||(this.ia&&this.V[b]?(d.sa(b,a,this.V[b]),this.V[b]=null,--this.ia):e.c[b]||d.sa(b,a,e.f?{I:a}:d.Ha(a)),a.P&&a.Ma())}var a=
"undefined"!==typeof u?u:{};a.b=function(c,b){for(var d=c.split("."),e=a,g=0;g<d.length-1;g++)e=e[d[g]];e[d[d.length-1]]=b};a.j=function(a,b,d){a[b]=d};a.version="3.4.2";a.b("version",a.version);a.a=function(){function c(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a}function b(a,b){a.__proto__=b;return a}var d={__proto__:[]}instanceof Array,e="function"===typeof Symbol;return{U:function(a,b){for(var c=0,d=a.length;c<d;c++)b(a[c],c)},B:function(a,b){if("function"==typeof Array.prototype.indexOf)return Array.prototype.indexOf.call(a,
b);for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},Qa:function(a,c,b){for(var d=0,e=a.length;d<e;d++)if(c.call(b,a[d],d))return a[d];return null},ta:function(c,b){var d=a.a.B(c,b);0<d?c.splice(d,1):0===d&&c.shift()},Ra:function(c){c=c||[];for(var b=[],d=0,e=c.length;d<e;d++)0>a.a.B(b,c[d])&&b.push(c[d]);return b},Sa:function(a,c){a=a||[];for(var b=[],d=0,e=a.length;d<e;d++)b.push(c(a[d],d));return b},Pa:function(a,c){a=a||[];for(var b=[],d=0,e=a.length;d<e;d++)c(a[d],d)&&b.push(a[d]);
return b},Ta:function(a,c){if(c instanceof Array)a.push.apply(a,c);else for(var b=0,d=c.length;b<d;b++)a.push(c[b]);return a},Oa:function(c,b,d){var e=a.a.B(a.a.Fa(c),b);0>e?d&&c.push(b):d||c.splice(e,1)},J:d,extend:c,setPrototypeOf:b,da:d?b:c,F:function(a,c){for(var b in a)a.hasOwnProperty(b)&&c(b,a[b])},Va:function(c){return a.onError?function(){try{return c.apply(this,arguments)}catch(b){throw a.onError&&a.onError(b),b;}}:c},setTimeout:function(c,b){return setTimeout(a.a.Va(c),b)},lb:function(c){setTimeout(function(){a.onError&&
a.onError(c);throw c;},0)},ea:function(c){return a.K(c)?c():c},Fa:function(c){return a.K(c)?c.h():c},jb:function(c,b){c=a.a.ea(c);b=a.a.ea(b);for(var d=[],e=c;e<=b;e++)d.push(e);return d},nb:function(a){for(var c=[],b=0,d=a.length;b<d;b++)c.push(a[b]);return c},xa:function(a){return e?Symbol(a):a}}}();a.b("utils",a.a);a.b("utils.arrayForEach",a.a.U);a.b("utils.arrayFirst",a.a.Qa);a.b("utils.arrayFilter",a.a.Pa);a.b("utils.arrayGetDistinctValues",a.a.Ra);a.b("utils.arrayIndexOf",a.a.B);a.b("utils.arrayMap",
a.a.Sa);a.b("utils.arrayPushAll",a.a.Ta);a.b("utils.arrayRemoveItem",a.a.ta);a.b("utils.extend",a.a.extend);a.b("utils.peekObservable",a.a.Fa);a.b("utils.range",a.a.jb);a.b("utils.unwrapObservable",a.a.ea);a.b("utils.objectForEach",a.a.F);a.b("utils.addOrRemoveItem",a.a.Oa);a.b("unwrap",a.a.ea);a.ka={notify:function(a,b){a.equalityComparer="always"==b?null:x}};var z={undefined:1,"boolean":1,number:1,string:1};a.b("extenders",a.ka);a.Ia=function(c,b,d){this.I=c;this.fa=b;this.Ya=d;this.u=!1;a.j(this,
"dispose",this.g)};a.Ia.prototype.g=function(){this.u=!0;this.Ya()};a.s=function(){a.a.da(this,r);r.la(this)};var r={la:function(a){a.i={change:[]};a.ra=1},subscribe:function(c,b,d){var e=this;d=d||"change";var g=new a.Ia(e,b?c.bind(b):c,function(){a.a.ta(e.i[d],g);e.T&&e.T(d)});e.O&&e.O(d);e.i[d]||(e.i[d]=[]);e.i[d].push(g);return g},notifySubscribers:function(c,b){b=b||"change";"change"===b&&this.na();if(this.Z(b)){var d="change"===b&&this.Ka||this.i[b].slice(0);try{a.C.ua();for(var e=0,g;g=d[e];++e)g.u||
g.fa(c)}finally{a.C.end()}}},X:function(){return this.ra},bb:function(a){return this.X()!==a},na:function(){++this.ra},Ea:function(c){var b=this,d=a.K(b),e,g,m,y;b.S||(b.S=b.notifySubscribers,b.notifySubscribers=w);var f=c(function(){b.P=!1;d&&y===b&&(y=b.oa?b.oa():b());var a=g||b.ba(m,y);g=e=!1;a&&b.S(m=y)});b.qa=function(a){b.Ka=b.i.change.slice(0);b.P=e=!0;y=a;f()};b.pa=function(a){e||(m=a,b.S(a,"beforeChange"))};b.Ma=function(){b.ba(m,b.h(!0))&&(g=!0)}},Z:function(a){return this.i[a]&&this.i[a].length},
ab:function(c){if(c)return this.i[c]&&this.i[c].length||0;var b=0;a.a.F(this.i,function(a,c){"dirty"!==a&&(b+=c.length)});return b},ba:function(a,b){return!this.equalityComparer||!this.equalityComparer(a,b)},extend:function(c){var b=this;c&&a.a.F(c,function(c,e){var g=a.ka[c];"function"==typeof g&&(b=g(b,e)||b)});return b}};a.j(r,"subscribe",r.subscribe);a.j(r,"extend",r.extend);a.j(r,"getSubscriptionsCount",r.ab);a.a.J&&a.a.setPrototypeOf(r,Function.prototype);a.s.fn=r;a.Ca=function(a){return null!=
a&&"function"==typeof a.subscribe&&"function"==typeof a.notifySubscribers};a.b("subscribable",a.s);a.b("isSubscribable",a.Ca);a.ha=a.C=function(){function c(a){d.push(e);e=a}function b(){e=d.pop()}var d=[],e,g=0;return{ua:c,end:b,Ga:function(c){if(e){if(!a.Ca(c))throw Error("Only subscribable things can act as dependencies");e.fa.call(e.Ua,c,c.La||(c.La=++g))}},eb:function(a,d,e){try{return c(),a.apply(d,e||[])}finally{b()}},W:function(){if(e)return e.l.W()},ma:function(){if(e)return e.ma}}}();a.b("computedContext",
a.ha);a.b("computedContext.getDependenciesCount",a.ha.W);a.b("computedContext.isInitial",a.ha.ma);a.b("ignoreDependencies",a.mb=a.C.eb);var t=a.a.xa("_latestValue");a.v=function(c){function b(){if(0<arguments.length)return b.ba(b[t],arguments[0])&&(b.H(),b[t]=arguments[0],b.G()),this;a.C.Ga(b);return b[t]}b[t]=c;a.a.J||a.a.extend(b,a.s.fn);a.s.fn.la(b);a.a.da(b,p);return b};var p={equalityComparer:x,h:function(){return this[t]},G:function(){this.notifySubscribers(this[t])},H:function(){this.notifySubscribers(this[t],
"beforeChange")}};a.a.J&&a.a.setPrototypeOf(p,a.s.fn);var v=a.v.Na="__ko_proto__";p[v]=a.v;a.Y=function(c,b){return null===c||c===l||c[v]===l?!1:c[v]===b?!0:a.Y(c[v],b)};a.K=function(c){return a.Y(c,a.v)};a.Da=function(c){return"function"==typeof c&&c[v]===a.v||"function"==typeof c&&c[v]===a.Xa&&c.cb?!0:!1};a.b("observable",a.v);a.b("isObservable",a.K);a.b("isWriteableObservable",a.Da);a.b("isWritableObservable",a.Da);a.b("observable.fn",p);a.j(p,"peek",p.h);a.j(p,"valueHasMutated",p.G);a.j(p,"valueWillMutate",
p.H);a.L=function(c){c=c||[];if("object"!=typeof c||!("length"in c))throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");c=a.v(c);a.a.da(c,a.L.fn);return c.extend({trackArrayChanges:!0})};a.L.fn={remove:function(c){for(var b=this.h(),d=[],e="function"!=typeof c||a.K(c)?function(a){return a===c}:c,g=0;g<b.length;g++){var m=b[g];e(m)&&(0===d.length&&this.H(),d.push(m),b.splice(g,1),g--)}d.length&&this.G();return d},removeAll:function(c){if(c===
l){var b=this.h(),d=b.slice(0);this.H();b.splice(0,b.length);this.G();return d}return c?this.remove(function(b){return 0<=a.a.B(c,b)}):[]},destroy:function(c){var b=this.h(),d="function"!=typeof c||a.K(c)?function(a){return a===c}:c;this.H();for(var e=b.length-1;0<=e;e--)d(b[e])&&(b[e]._destroy=!0);this.G()},destroyAll:function(c){return c===l?this.destroy(function(){return!0}):c?this.destroy(function(b){return 0<=a.a.B(c,b)}):[]},indexOf:function(c){var b=this();return a.a.B(b,c)},replace:function(a,
b){var d=this.indexOf(a);0<=d&&(this.H(),this.h()[d]=b,this.G())}};a.a.J&&a.a.setPrototypeOf(a.L.fn,a.v.fn);a.a.U("pop push reverse shift sort splice unshift".split(" "),function(c){a.L.fn[c]=function(){var a=this.h();this.H();this.va(a,c,arguments);var d=a[c].apply(a,arguments);this.G();return d===a?this:d}});a.a.U(["slice"],function(c){a.L.fn[c]=function(){var a=this();return a[c].apply(a,arguments)}});a.b("observableArray",a.L);a.ka.trackArrayChanges=function(c,b){function d(){if(!e){e=!0;k=c.notifySubscribers;
c.notifySubscribers=function(a,c){c&&"change"!==c||++f;return k.apply(this,arguments)};var b=[].concat(c.h()||[]);g=null;m=c.subscribe(function(d){d=[].concat(d||[]);if(c.Z("arrayChange")){var e;if(!g||1<f)g=a.a.wa(b,d,c.ga);e=g}b=d;g=null;f=0;e&&e.length&&c.notifySubscribers(e,"arrayChange")})}}c.ga={};b&&"object"==typeof b&&a.a.extend(c.ga,b);c.ga.sparse=!0;if(!c.va){var e=!1,g=null,m,f=0,k,h=c.O,n=c.T;c.O=function(a){h&&h.call(c,a);"arrayChange"===a&&d()};c.T=function(a){n&&n.call(c,a);"arrayChange"!==
a||c.Z("arrayChange")||(k&&(c.notifySubscribers=k,k=l),m.g(),e=!1)};c.va=function(c,b,d){function m(a,b,c){return n[n.length]={status:a,value:b,index:c}}if(e&&!f){var n=[],k=c.length,h=d.length,l=0;switch(b){case "push":l=k;case "unshift":for(b=0;b<h;b++)m("added",d[b],l+b);break;case "pop":l=k-1;case "shift":k&&m("deleted",c[l],l);break;case "splice":b=Math.min(Math.max(0,0>d[0]?k+d[0]:d[0]),k);for(var k=1===h?k:Math.min(b+(d[1]||0),k),h=b+h-2,l=Math.max(k,h),r=[],p=[],t=2;b<l;++b,++t)b<k&&p.push(m("deleted",
c[b],b)),b<h&&r.push(m("added",d[t],b));a.a.Ba(p,r);break;default:return}g=n}}}};var f=a.a.xa("_state");a.l=a.Xa=function(c,b,d){function e(){if(0<arguments.length){if("function"===typeof g)g.apply(m.ja,arguments);else throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");return this}a.C.Ga(e);(m.A||m.f&&e.$())&&e.w();return m.o}"object"===typeof c?d=c:(d=d||{},c&&(d.read=c));if("function"!=typeof d.read)throw Error("Pass a function that returns the value of the ko.computed");
var g=d.write,m={o:l,D:!0,A:!0,aa:!1,Ja:!1,u:!1,ca:!1,f:!1,kb:d.read,ja:b||d.owner,ya:d.disposeWhen||d.ya,c:{},m:0,Aa:null};e[f]=m;e.cb="function"===typeof g;a.a.J||a.a.extend(e,a.s.fn);a.s.fn.la(e);a.a.da(e,h);d.pure?(m.ca=!0,m.f=!0,a.a.extend(e,C)):d.deferEvaluation&&a.a.extend(e,D);m.f||d.deferEvaluation||e.w();return e};var h={equalityComparer:x,W:function(){return this[f].m},sa:function(a,b,d){if(this[f].ca&&b===this)throw Error("A 'pure' computed must not be called recursively");this[f].c[a]=
d;d.R=this[f].m++;d.N=b.X()},$:function(){var a,b,d=this[f].c;for(a in d)if(d.hasOwnProperty(a)&&(b=d[a],this.M&&b.I.P||b.I.bb(b.N)))return!0},ob:function(){this.M&&!this[f].aa&&this.M(!1)},fb:function(){var a=this[f];return a.A||0<a.m},pb:function(){this.P?this[f].A&&(this[f].D=!0):this.za()},Ha:function(a){return a.subscribe(this.za,this)},za:function(){var c=this,b=c.throttleEvaluation;b&&0<=b?(clearTimeout(this[f].Aa),this[f].Aa=a.a.setTimeout(function(){c.w(!0)},b)):c.M?c.M(!0):c.w(!0)},w:function(a){var b=
this[f],d=b.ya,e=!1;if(!b.aa&&!b.u){if(d&&d()){if(!b.Ja){this.g();return}}else b.Ja=!1;b.aa=!0;try{e=this.$a(a)}finally{b.aa=!1}b.m||this.g();return e}},$a:function(c){var b=this[f],d=!1,e=b.ca?l:!b.m,g={Wa:this,V:b.c,ia:b.m};a.C.ua({Ua:g,fa:B,l:this,ma:e});b.c={};b.m=0;g=this.Za(b,g);this.ba(b.o,g)&&(b.f||this.notifySubscribers(b.o,"beforeChange"),b.o=g,b.f?this.na():c&&this.notifySubscribers(b.o),d=!0);e&&this.notifySubscribers(b.o,"awake");return d},Za:function(c,b){try{var d=c.kb;return c.ja?
d.call(c.ja):d()}finally{a.C.end(),b.ia&&!c.f&&a.a.F(b.V,A),c.D=c.A=!1}},h:function(a){var b=this[f];(b.A&&(a||!b.m)||b.f&&this.$())&&this.w();return b.o},Ea:function(c){a.s.fn.Ea.call(this,c);this.oa=function(){this[f].D?this.w():this[f].A=!1;return this[f].o};this.M=function(a){this.pa(this[f].o);this[f].A=!0;a&&(this[f].D=!0);this.qa(this)}},g:function(){var c=this[f];!c.f&&c.c&&a.a.F(c.c,function(a,c){c.g&&c.g()});c.c=null;c.m=0;c.u=!0;c.D=!1;c.A=!1;c.f=!1}},C={O:function(c){var b=this,d=b[f];
if(!d.u&&d.f&&"change"==c){d.f=!1;if(d.D||b.$())d.c=null,d.m=0,b.w()&&b.na();else{var e=[];a.a.F(d.c,function(a,b){e[b.R]=a});a.a.U(e,function(a,c){var e=d.c[a],f=b.Ha(e.I);f.R=c;f.N=e.N;d.c[a]=f})}d.u||b.notifySubscribers(d.o,"awake")}},T:function(c){var b=this[f];b.u||"change"!=c||this.Z("change")||(a.a.F(b.c,function(a,c){c.g&&(b.c[a]={I:c.I,R:c.R,N:c.N},c.g())}),b.f=!0,this.notifySubscribers(l,"asleep"))},X:function(){var c=this[f];c.f&&(c.D||this.$())&&this.w();return a.s.fn.X.call(this)}},D=
{O:function(a){"change"!=a&&"beforeChange"!=a||this.h()}};a.a.J&&a.a.setPrototypeOf(h,a.s.fn);u=a.v.Na;a.l[u]=a.v;h[u]=a.l;a.gb=function(c){return a.Y(c,a.l)};a.hb=function(c){return a.Y(c,a.l)&&c[f]&&c[f].ca};a.b("computed",a.l);a.b("dependentObservable",a.l);a.b("isComputed",a.gb);a.b("isPureComputed",a.hb);a.b("computed.fn",h);a.j(h,"peek",h.h);a.j(h,"dispose",h.g);a.j(h,"isActive",h.fb);a.j(h,"getDependenciesCount",h.W);a.ib=function(c,b){if("function"===typeof c)return a.l(c,b,{pure:!0});c=a.a.extend({},
c);c.pure=!0;return a.l(c,b)};a.b("pureComputed",a.ib);a.a.Ba=function(a,b,d){if(a.length&&b.length){var e,g,f,h,k;for(e=g=0;(!d||e<d)&&(h=a[g]);++g){for(f=0;k=b[f];++f)if(h.value===k.value){h.moved=k.index;k.moved=h.index;b.splice(f,1);e=f=0;break}e+=f}}};a.a.wa=function(){function c(b,c,e,g,f){var h=Math.min,k=Math.max,l=[],n,r=b.length,q,p=c.length,t=p-r||1,v=r+p+1,u,w,x;for(n=0;n<=r;n++)for(w=u,l.push(u=[]),x=h(p,n+t),q=k(0,n-1);q<=x;q++)u[q]=q?n?b[n-1]===c[q-1]?w[q-1]:h(w[q]||v,u[q-1]||v)+1:
q+1:n+1;h=[];k=[];t=[];n=r;for(q=p;n||q;)p=l[n][q]-1,q&&p===l[n][q-1]?k.push(h[h.length]={status:e,value:c[--q],index:q}):n&&p===l[n-1][q]?t.push(h[h.length]={status:g,value:b[--n],index:n}):(--q,--n,f.sparse||h.push({status:"retained",value:c[q]}));a.a.Ba(t,k,!f.dontLimitMoves&&10*r);return h.reverse()}return function(a,d,e){e="boolean"===typeof e?{dontLimitMoves:e}:e||{};a=a||[];d=d||[];return a.length<d.length?c(a,d,"added","deleted",e):c(d,a,"deleted","added",e)}}();a.b("utils.compareArrays",
a.a.wa)})})();})();