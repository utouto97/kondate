(window.webpackJsonp=window.webpackJsonp||[]).push([[4,3],{311:function(e,t,r){"use strict";r.r(t);var n=r(83),c=Object(n.a)({props:{recipes:{type:Array}},setup:function(e){return{recipes:Object(n.c)(e.recipes)}}}),l=r(59),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex flex-wrap justify-center"},e._l(e.recipes,(function(t){return r("div",{key:t.id,staticClass:"w-60 mx-auto bg-white rounded-xl shadow-md overflow-hidden mt-2"},[r("img",{staticClass:"w-60 h-52",attrs:{src:t.imageUrl}}),e._v(" "),r("div",{staticClass:"px-6 py-4"},[r("div",{staticClass:"text-lg font-bold mb-2"},[e._v(" "+e._s(t.title)+" ")]),e._v(" "),r("div",{staticClass:"font-bold mb-2"},[e._v(" 材料 ")]),e._v(" "),r("ul",{staticClass:"text-sm text-gray-600 mb-4"},e._l(t.materials,(function(t){return r("li",{key:t},[e._v(e._s(t))])})),0),e._v(" "),r("a",{staticClass:"py-2 px-4 bg-gray-200 font-bold rounded hover:opacity-75",attrs:{href:t.url}},[e._v("詳細")])])])})),0)}),[],!1,null,null,null);t.default=component.exports},314:function(e,t,r){"use strict";r.r(t);var n=r(12),c=(r(58),r(83)),l=Object(c.a)({setup:function(){},asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,i,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=[],t.next=3,e.$api.get("");case 3:for(n=t.sent.data.result,i=0;i<n.length;i++)c={id:n[i].recipeId,title:n[i].recipeTitle,url:n[i].recipeUrl,imageUrl:n[i].foodImageUrl,materials:n[i].recipeMaterial},r.push(c);return t.abrupt("return",{recipes:r});case 6:case"end":return t.stop()}}),t)})))()}}),o=r(59),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("RecipeList",{attrs:{recipes:e.recipes}})}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{RecipeList:r(311).default})}}]);