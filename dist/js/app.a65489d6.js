(function(){"use strict";var t={8618:function(t,a,n){var s=n(6369),i=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"app-container",style:t.isBlur},[a("nav",{staticClass:"navbar navbar-expand-lg bg-light"},[a("div",{staticClass:"container-fluid"},[a("a",{staticClass:"navbar-brand",attrs:{href:"#"},on:{click:t.onHomePageHandle}},[t._v("East India Trading Co.")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[a("ul",{staticClass:"navbar-nav"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:t.onBookingHandle}},[t._v("Booking")])])])])])]),t.isAtBooking?a("div",[a("Booking")],1):a("div",[a("Map")],1)]),t._e(),a("div",[a("Popup",{attrs:{popup:t.isOpenPopup}})],1)])},e=[function(){var t=this,a=t._self._c;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],o=function(){var t=this,a=t._self._c;return a("div",[t._v(" You need to login before continue "),a("div",{staticClass:"login-form"},[a("div",{staticClass:"input-group mb-3"},[a("span",{staticClass:"input-group-text",attrs:{id:"inputGroup-sizing-default"}},[t._v("Username")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.inputedUsername,expression:"inputedUsername"}],staticClass:"form-control",attrs:{type:"text","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-default"},domProps:{value:t.inputedUsername},on:{input:function(a){a.target.composing||(t.inputedUsername=a.target.value)}}})]),a("div",{staticClass:"input-group mb-3"},[a("span",{staticClass:"input-group-text",attrs:{id:"inputGroup-sizing-default"}},[t._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.inputedPassword,expression:"inputedPassword"}],staticClass:"form-control",attrs:{type:"text","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-default"},domProps:{value:t.inputedPassword},on:{input:function(a){a.target.composing||(t.inputedPassword=a.target.value)}}})]),a("div",{staticClass:"btn-group",attrs:{role:"group","aria-label":"Basic example"}},[a("button",{staticClass:"btn",staticStyle:{color:"#FFCCE6"},attrs:{type:"button"},on:{click:t.onLogin}},[t._v("Login")])])])])},l=[];const r=new s.ZP;var c=r,d={name:"LogIn",data(){return{inputedPassword:"",inputedUsername:""}},mounted(){},methods:{onLogin(){console.log(this.inputedPassword,this.inputedUsername),"admin"===this.inputedPassword&&"admin"===this.inputedUsername&&c.$emit("handleLogin")}}},u=d,p=n(1001),g=(0,p.Z)(u,o,l,!1,null,null,null),m=g.exports,v=function(){var t=this,a=t._self._c;return a("div",{staticClass:"grid-container"},[a("div",{staticClass:"route-container"},[a("div",{staticClass:"input-group mb-3"},[a("span",{staticClass:"input-group-text",attrs:{id:"inputGroup-sizing-default"}},[t._v("From")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.cityChosen,expression:"cityChosen"}],staticClass:"form-control",attrs:{type:"text","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-default"},domProps:{value:t.cityChosen},on:{input:function(a){a.target.composing||(t.cityChosen=a.target.value)}}})]),a("div",{staticClass:"input-group mb-3"},[a("span",{staticClass:"input-group-text",attrs:{id:"inputGroup-sizing-default"}},[t._v("To")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.desChosen,expression:"desChosen"}],staticClass:"form-control",attrs:{type:"text","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-default"},domProps:{value:t.desChosen},on:{input:function(a){a.target.composing||(t.desChosen=a.target.value)}}})]),a("label",[t._v("Cargo dimension(in cm)")]),t._m(0),t._m(1),a("div",{staticClass:"input-row mb-3"},[a("label",{staticClass:"icon-date",attrs:{for:"date"}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.startDate,expression:"startDate"}],staticClass:"form-control dimension-size",staticStyle:{width:"80%"},attrs:{type:"date",id:"date"},domProps:{value:t.startDate},on:{input:function(a){a.target.composing||(t.startDate=a.target.value)}}}),a("br"),a("br")]),a("div",{staticClass:"input-row input-group mb-3"},[a("button",{staticClass:"form-control",attrs:{id:"search-button"},on:{click:t.handleBooking}},[a("div",{staticClass:"icon-search",staticStyle:{"margin-left":"25%"}})])])]),a("div",{staticStyle:{width:"600px",height:"500px"},attrs:{id:"map"}})])},h=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"input-row mb-3"},[a("label",{staticClass:"icon-width",attrs:{for:"width"}}),a("input",{staticClass:"dimension-size form-control",attrs:{type:"text",id:"width"}}),a("br"),a("br"),a("label",{staticClass:"icon-height",attrs:{for:"height"}}),a("input",{staticClass:"dimension-size form-control",attrs:{type:"text",id:"height"}}),a("br"),a("br"),a("label",{staticClass:"icon-depth",attrs:{for:"depth"}}),a("input",{staticClass:"dimension-size form-control",attrs:{type:"text",id:"depth"}}),a("br"),a("br")])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"input-row mb-3"},[a("label",{staticClass:"icon-weight",attrs:{for:"weight"}}),a("input",{staticClass:"dimension-size form-control",attrs:{type:"text",id:"weight"}}),a("br"),a("br"),a("label",{staticClass:"icon-category dimension-size",attrs:{for:"category"}}),a("select",{staticClass:"form-control",attrs:{name:"category",id:"category"}},[a("option",{attrs:{value:""}}),a("option",{attrs:{value:"clothes"}},[t._v("Clothes")]),a("option",{attrs:{value:"food"}},[t._v("Food")]),a("option",{attrs:{value:"animal"}},[t._v("Animal")]),a("option",{attrs:{value:"weapon"}},[t._v("Weapon")])])])}],C=n(3153),f=n.n(C),b=JSON.parse('[{"name":"Kap Guardafui","longlat":{"lat":11.43695521614319,"lng":51.24023437500001}},{"name":"Amatave","longlat":{"lat":-18.18760655249461,"lng":49.39453125000001}},{"name":"Kap St. Marie","longlat":{"lat":-25.562265014427492,"lng":45.3515625}},{"name":"Mocambique","longlat":{"lat":-19.2074285268012,"lng":34.43115234375001}},{"name":"Dragebjerget","longlat":{"lat":-26.11598592533351,"lng":32.16796875000001}},{"name":"Kapstaden","longlat":{"lat":-34.016241889667015,"lng":19.863281250000004}},{"name":"Hvalbugten","longlat":{"lat":-23.88583769986199,"lng":14.941406250000002}},{"name":"Luanda","longlat":{"lat":-12.039320557540572,"lng":13.886718750000002}},{"name":"Guld-Kysten","longlat":{"lat":4.5654735507102915,"lng":-1.5820312500000002}},{"name":"Dakar","longlat":{"lat":14.562317701914855,"lng":-17.226562500000004}},{"name":"De Kanariske Oer","longlat":{"lat":28.430052892335723,"lng":-16.314697265625004}},{"name":"Marrakesh","longlat":{"lat":26.902476886279832,"lng":-13.205566406250002}},{"name":"Tunis","longlat":{"lat":36.4566360115962,"lng":10.458984375000002}},{"name":"Tripoli","longlat":{"lat":32.10118973232094,"lng":14.985351562500002}},{"name":"Tanger","longlat":{"lat":-4.784468966579362,"lng":39.26513671875001}},{"name":"Tanger","longlat":{"lat":35.7643434796672,"lng":-5.416259765625001}},{"name":"Sierra Leone","longlat":{"lat":8.363692651835823,"lng":-13.227539062500002}},{"name":"Sahara","longlat":{"lat":21.616579336740603,"lng":3.5156250000000004}},{"name":"Timbuktu","longlat":{"lat":16.088042220148818,"lng":-2.8564453125000004}},{"name":"Wadai","longlat":{"lat":13.5227,"lng":21.2845}},{"name":"Omdurman","longlat":{"lat":15.6476,"lng":32.4807}},{"name":"Suakin","longlat":{"lat":19.104,"lng":37.3293}},{"name":"Addis Abeba","longlat":{"lat":8.407168163601076,"lng":42.36328125000001}},{"name":"Slave-Kysten","longlat":{"lat":4.12728532324537,"lng":7.207031250000001}},{"name":"Congo","longlat":{"lat":-0.9667509997666298,"lng":16.215820312500004}},{"name":"Kabalo","longlat":{"lat":-6.039504781196217,"lng":26.894531250000004}},{"name":"Victoriasoen","longlat":{"lat":0.2746571512146894,"lng":32.59643554687501}},{"name":"Bahrel ghazal","longlat":{"lat":9.343721103604633,"lng":29.805908203125004}},{"name":"Dafur","longlat":{"lat":12.833226023521243,"lng":22.587890625000004}},{"name":"St. Helena","longlat":{"lat":-15.973871987521912,"lng":-5.703277587890625}},{"name":"Victoria Faldene ","longlat":{"lat":-17.93300896297531,"lng":25.84945678710938}}]'),y=n(5795),w={name:"MapComponent",data(){return{map:null,cityChosen:null,desChosen:null,width:null,height:null,depth:null,weight:null,category:null,startDate:null}},validations:{cityChosen:{required:y.C1}},mounted(){this.map=f().map("map").setView([2.846482054534499,18.56250107288361],3),b.forEach((t=>{f().marker(t.longlat).addTo(this.map).on("click",(()=>{this.cityChosen?this.desChosen=t.name:this.cityChosen=t.name}))})),f().tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(this.map)},methods:{handleBooking(){console.log(this.$v),c.$emit("handleModal")}}},_=w,x=(0,p.Z)(_,v,h,!1,null,null,null),k=x.exports,P=function(){var t=this,a=t._self._c;return a("div",{staticClass:"modal",class:{modalshow:t.popup},attrs:{tabindex:"-1"}},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content",staticStyle:{border:"none"}},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title"},[t._v("Choose route")]),a("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"},on:{click:t.handleClose}})]),t._m(0),a("div",{staticClass:"modal-footer",staticStyle:{"padding-top":"0px"}},[a("div",{staticClass:"row",staticStyle:{"margin-bottom":"0px",width:"100%"}},[a("div",{staticClass:"col"},[a("button",{staticClass:"btn secondary",attrs:{type:"button","data-bs-dismiss":"modal"},on:{click:t.onPrimaryClick}},[t._v(" Book ")])]),a("div",{staticClass:"col"},[a("button",{staticClass:"btn secondary",attrs:{type:"button"},on:{click:t.onPrimaryClick}},[t._v(" Book ")])])])])])])])},S=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"modal-body"},[a("div",{staticClass:"container text-center"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"icon-clock"})]),a("div",{staticClass:"col"},[a("div",{staticClass:"icon-money"})])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col",staticStyle:{"border-right":"2px black solid"}},[a("div",[a("b",[t._v(" Cheapest")])]),a("span",{staticClass:"my-row"},[a("span",{staticClass:"icon-hourglass",staticStyle:{"margin-right":"10px"}}),t._v("2 days 12 hours ")]),a("span",{staticClass:"my-row"},[a("span",{staticClass:"icon-wallet",staticStyle:{"margin-right":"10px"}}),t._v(" $100 ")]),a("span",{staticClass:"my-row"},[a("span",{staticClass:"icon-date",staticStyle:{"margin-right":"10px"}}),t._v(" 25/08/2022 ")])]),a("div",{staticClass:"col"},[a("div",[a("b",[t._v(" Fastest")])]),a("span",{staticClass:"my-row"},[a("span",{staticClass:"icon-hourglass",staticStyle:{"margin-right":"10px"}}),t._v("2 days 12 hours ")]),a("span",{staticClass:"my-row"},[a("span",{staticClass:"icon-wallet",staticStyle:{"margin-right":"10px"}}),t._v(" $100 ")]),a("span",{staticClass:"my-row"},[a("span",{staticClass:"icon-date",staticStyle:{"margin-right":"10px"}}),t._v(" 25/08/2022 ")])])])])])}],B=n(6265),O=n.n(B),T={name:"ConfirmPopup",props:{popup:Boolean},data(){return{}},mounted(){},methods:{handleClose(){c.$emit("handleModal")},onPrimaryClick(){const t={startDate:"2022-08-25T08:15:30-05:00",source:"Kongo",destination:"Cairo",arrivalDate:"2022-08-28T08:15:30-05:00",category:"weapons"};O().post("https://wa-eit-dk1.azurewebsites.net/api/BookingModels",t,{header:{"Access-Control-Allow-Origin":!0,"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}}).then((t=>{this.info=t.data.bpi})).catch((t=>{console.log(t),this.errored=!0}))}}},z=T,A=(0,p.Z)(z,P,S,!1,null,null,null),D=A.exports,L=function(){var t=this,a=t._self._c;return a("div",{staticClass:"container"},[a("h2",{staticClass:"m-3"},[t._v(" Booking Information")]),a("div",{staticClass:"booking-container"},t._l(t.bookingList,(function(n){return a("div",{key:n.id,staticClass:"booking-record secondary"},[a("div",{staticClass:"row p-2 m-2"},[a("div",{staticClass:"col-sm"},[t._v(" From "+t._s(n.source)+" ")]),a("div",{staticClass:"col-sm"},[t._v(" One of three columns ")]),a("div",{staticClass:"col-sm"},[t._v(" One of three columns ")])])])})),0)])},M=[],U={name:"BookingComponent",data(){return{bookingList:[{id:1,startDate:"2022-08-25T13:15:30",source:"Congo",destination:"Cairo",arrivalDate:"2022-08-28T13:15:30",category:"weapons"},{id:2,startDate:"2022-08-25T13:15:30",source:"Congo",destination:"Cairo",arrivalDate:"2022-08-28T13:15:30",category:"weapons"}]}},mounted(){O().get("https://wa-eit-dk1.azurewebsites.net/api/BookingModels",{header:{"Access-Control-Allow-Origin":!0,"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}}).then((t=>{this.info=t.data.bpi})).catch((t=>{console.log(t),this.errored=!0}))},methods:{}},F=U,G=(0,p.Z)(F,L,M,!1,null,null,null),N=G.exports,Z={name:"App",components:{Map:k,Popup:D,Login:m,Booking:N},data(){return{isOpenPopup:!1,isLoggedin:!1,inputedUsername:"",inputedPassword:"",isAtBooking:!1}},mounted(){c.$on("handleModal",(()=>{this.isOpenPopup=!this.isOpenPopup})),c.$on("handleLogin",(()=>{this.isLoggedin=!0}))},methods:{onBookingHandle(){this.isAtBooking||(this.isAtBooking=!0)},onHomePageHandle(){this.isAtBooking&&(this.isAtBooking=!1)}},computed:{isBlur(){return this.isOpenPopup?"filter: blur(5px)":""}}},$=Z,H=(0,p.Z)($,i,e,!1,null,null,null),K=H.exports;s.ZP.config.productionTip=!1,new s.ZP({render:t=>t(K)}).$mount("#app")}},a={};function n(s){var i=a[s];if(void 0!==i)return i.exports;var e=a[s]={exports:{}};return t[s].call(e.exports,e,e.exports,n),e.exports}n.m=t,function(){var t=[];n.O=function(a,s,i,e){if(!s){var o=1/0;for(d=0;d<t.length;d++){s=t[d][0],i=t[d][1],e=t[d][2];for(var l=!0,r=0;r<s.length;r++)(!1&e||o>=e)&&Object.keys(n.O).every((function(t){return n.O[t](s[r])}))?s.splice(r--,1):(l=!1,e<o&&(o=e));if(l){t.splice(d--,1);var c=i();void 0!==c&&(a=c)}}return a}e=e||0;for(var d=t.length;d>0&&t[d-1][2]>e;d--)t[d]=t[d-1];t[d]=[s,i,e]}}(),function(){n.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(a,{a:a}),a}}(),function(){n.d=function(t,a){for(var s in a)n.o(a,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:a[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)}}(),function(){var t={143:0};n.O.j=function(a){return 0===t[a]};var a=function(a,s){var i,e,o=s[0],l=s[1],r=s[2],c=0;if(o.some((function(a){return 0!==t[a]}))){for(i in l)n.o(l,i)&&(n.m[i]=l[i]);if(r)var d=r(n)}for(a&&a(s);c<o.length;c++)e=o[c],n.o(t,e)&&t[e]&&t[e][0](),t[e]=0;return n.O(d)},s=self["webpackChunkhello_world"]=self["webpackChunkhello_world"]||[];s.forEach(a.bind(null,0)),s.push=a.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(8618)}));s=n.O(s)})();
//# sourceMappingURL=app.a65489d6.js.map