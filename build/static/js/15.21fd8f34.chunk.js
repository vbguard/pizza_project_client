(this.webpackJsonppizza_project=this.webpackJsonppizza_project||[]).push([[15],{176:function(t,e,r){"use strict";r.d(e,"e",(function(){return v})),r.d(e,"f",(function(){return d})),r.d(e,"a",(function(){return l})),r.d(e,"l",(function(){return _})),r.d(e,"k",(function(){return I})),r.d(e,"g",(function(){return s})),r.d(e,"j",(function(){return m})),r.d(e,"i",(function(){return f})),r.d(e,"p",(function(){return g})),r.d(e,"c",(function(){return L})),r.d(e,"d",(function(){return h})),r.d(e,"n",(function(){return b})),r.d(e,"m",(function(){return k})),r.d(e,"o",(function(){return j})),r.d(e,"b",(function(){return x})),r.d(e,"h",(function(){return w}));var n=r(46),o=r.n(n),a=r(53),c=r(25),u=r.n(c),i=u.a.CancelToken.source(),p="https://evening-caverns-34846.herokuapp.com",s=function(){return u.a.get("/products")},m=function(t){return u.a.get('/products/?category="'.concat(t,'"'),{cancelToken:i.token})},f=function(t){return u.a.get("/products/".concat(t))},d=function(){var t=Object(a.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",u.a.get("".concat(p,"/ingredients")));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),l=function(){var t=Object(a.a)(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",u.a.post("".concat(p,"/ingredients"),e));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),_=function(t){return u.a.post("".concat(p,"/products"),t)},g=function(t,e){return u.a.put("/products/".concat(t),e)},L=function(t){return u.a.delete("/products/".concat(t))},I=function(){var t=Object(a.a)(o.a.mark((function t(e){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(r=new FormData).append("file",e),t.abrupt("return",u.a.post("".concat(p,"/images"),r));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){return u.a.get("/developers")},h=function(){return u.a.get("/promo")},b=function(t){return u.a.post("/images",t)},k=function(t){return u.a.post("/promo",t)},j=function(t,e){return u.a.put("/promo/".concat(t),e)},x=function(t){return u.a.delete("/promo/".concat(t))},w=function(t){return u.a.get("/promo/".concat(t))}},178:function(t,e,r){},204:function(t,e,r){t.exports={promoList:"PromoList_promoList__2MPit"}},205:function(t,e,r){t.exports={promoListItem:"PromoListItem_promoListItem__GYt7J",promoListItemWrapper:"PromoListItem_promoListItemWrapper__1rXgJ",promoListItemImg:"PromoListItem_promoListItemImg__f_hXU",promoListItemTextWrapper:"PromoListItem_promoListItemTextWrapper__2ZRYb",promoName:"PromoListItem_promoName__WDyTT",promoText:"PromoListItem_promoText__iX3R5"}},243:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return l}));var n=r(44),o=r(0),a=r.n(o),c=r(176),u=r(204),i=r.n(u),p=r(11),s=r(179),m=(r(178),r(205)),f=r.n(m);var d=function(t){var e=t._id,r=t.images,n=t.title,o=t.description,c=Object(p.d)((function(t){return t.local.lang}));return a.a.createElement("li",{className:f.a.promoListItem,key:e},a.a.createElement("div",{className:f.a.promoListItemWrapper},a.a.createElement(s.LazyLoadImage,{className:f.a.promoListItemImg,width:"280",height:"190",src:r,alt:""}),a.a.createElement("div",{className:f.a.promoListItemTextWrapper},a.a.createElement("h2",{className:f.a.promoName},n[c]),a.a.createElement("p",{className:f.a.promoText},o[c]))))};function l(){var t=Object(o.useState)([]),e=Object(n.a)(t,2),r=e[0],u=e[1];return Object(o.useEffect)((function(){Object(c.d)().then((function(t){var e=t.data;return u(e.promo)}))}),[]),a.a.createElement("ul",{className:i.a.promoList},r.map((function(t){var e=t._id,r=t.images,n=t.title,o=t.description;return a.a.createElement(d,{key:e,images:r,title:n,description:o})})))}}}]);
//# sourceMappingURL=15.21fd8f34.chunk.js.map