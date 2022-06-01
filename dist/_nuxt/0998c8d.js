(window.webpackJsonp=window.webpackJsonp||[]).push([[9,5],{285:function(t,e,r){"use strict";r.r(e);r(23),r(49);var n={props:["title","description","date","slug"],data:function(){return{postTitle:this.title,postDescription:this.description,postSlug:this.slug,postDate:this.date}},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}},l=r(19),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("article",{staticClass:"relative flex flex-col max-w-3xl lg:ml-auto xl:max-w-none xl:w-[50rem]"},[r("h3",{staticClass:"mb-4 text-4xl text-slate-700 tracking-tight font-bold dark:text-slate-200"},[r("NuxtLink",{attrs:{to:{name:"blog-slug",params:{slug:t.postSlug}}}},[t._v("\n        "+t._s(t.postTitle))])],1),t._v(" "),r("div",{staticClass:"mb-6 prose prose-slate dark:prose-dark"},[r("p",[t._v("\n        "+t._s(t.postDescription)+"\n      ")])]),t._v(" "),r("div",{staticClass:"mt-auto flex flex-row-reverse items-center justify-end"},[r("dl",[r("dt",{staticClass:"sr-only"},[t._v("Date")]),t._v(" "),r("dd",{staticClass:"text-sm leading-6 dark:text-slate-400 lg:absolute lg:top-0 lg:right-full lg:mr-8 lg:whitespace-nowrap font-bold"},[r("time",{staticClass:"bg-indigo-500 text-white py-1 px-2 rounded-md",attrs:{datetime:"2022-02-24T12:00:00.000Z"}},[t._v(t._s(t.formatDate(t.postDate)))])])])]),t._v(" "),r("br")])])}),[],!1,null,null,null);e.default=component.exports},331:function(t,e,r){"use strict";r.r(e);var n=r(7),l=(r(43),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,t.params,e.next=3,r("articles").only(["title","description","img","slug","tag","author","date","draft"]).sortBy("date","asc").fetch();case 3:return n=e.sent,e.abrupt("return",{articles:n});case 5:case"end":return e.stop()}}),e)})))()},head:{title:"Yizhe ZHANG | Blogs",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:""}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"}]}}),o=r(19),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._m(0),t._v(" "),r("div",{staticClass:"space-y-16 mx-auto max-w-7xl"},t._l(t.articles,(function(article){return r("blog-item",{key:article.title,attrs:{title:article.title,description:article.description,date:article.date,slug:article.slug}})})),1)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"pt-16 pb-9 sm:pb-16 sm:text-center"},[r("h1",{staticClass:"mb-4 text-8xl sm:text-4xl tracking-tight text-slate-800 font-extrabold dark:text-slate-200"},[t._v("\n      Blog\n    ")]),t._v(" "),r("p",{staticClass:"text-lg text-slate-700 dark:text-slate-400"},[t._v("\n      All the latest progress records about my research.\n    ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{BlogItem:r(285).default})}}]);