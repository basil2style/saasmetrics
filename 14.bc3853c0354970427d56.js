(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{L6id:function(n,l,u){"use strict";u.r(l);var t=u("CcnG"),o=function(){return function(){}}(),e=u("pMnS"),i=u("oBZk"),r=u("ZZ/e"),c=u("Ip0R"),s=function(){function n(){this.lists=[{item:"Customer Churn Rate"},{item:"Monthly Recurring Revenue"},{item:"Customer Lifetime Value"},{item:"Customer Acquisition Cost"},{item:"Months to Cash Out"},{item:"Marketing ROI"},{item:"Average Revenue per Account"},{item:"New User Viral Coefficient"}]}return n.ngInjectableDef=t.R({factory:function(){return new n},token:n,providedIn:"root"}),n}(),a=function(){function n(n){this.data=n,console.log("Testing")}return n.prototype.ngOnInit=function(){this.homeLists=this.data.lists,console.log(this.homeLists)},n.prototype.itemClicked=function(n){console.log("Clicked on "),console.log(n)},n}(),b=t.mb({encapsulation:0,styles:[[""]],data:{}});function f(n){return t.Bb(0,[(n()(),t.ob(0,0,null,null,10,"button",[["clear",""],["color","secondary"],["ion-item",""]],null,[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.itemClicked(n.context.$implicit)&&t),t},null,null)),(n()(),t.ob(1,0,null,null,9,"ion-card",[],null,null,null,i.o,i.b)),t.nb(2,49152,null,0,r.j,[t.h,t.k],null,null),(n()(),t.ob(3,0,null,0,4,"ion-card-header",[],null,null,null,i.m,i.d)),t.nb(4,49152,null,0,r.l,[t.h,t.k],null,null),(n()(),t.ob(5,0,null,0,2,"ion-card-title",[],null,null,null,i.n,i.e)),t.nb(6,49152,null,0,r.n,[t.h,t.k],null,null),(n()(),t.Ab(-1,0,["Card Title"])),(n()(),t.ob(8,0,null,0,2,"ion-card-content",[],null,null,null,i.l,i.c)),t.nb(9,49152,null,0,r.k,[t.h,t.k],null,null),(n()(),t.Ab(10,0,[" "," "]))],null,function(n,l){n(l,10,0,l.context.$implicit.item)})}function p(n){return t.Bb(0,[(n()(),t.ob(0,0,null,null,6,"ion-header",[],null,null,null,i.q,i.g)),t.nb(1,49152,null,0,r.y,[t.h,t.k],null,null),(n()(),t.ob(2,0,null,0,4,"ion-toolbar",[],null,null,null,i.t,i.j)),t.nb(3,49152,null,0,r.yb,[t.h,t.k],null,null),(n()(),t.ob(4,0,null,0,2,"ion-title",[],null,null,null,i.s,i.i)),t.nb(5,49152,null,0,r.wb,[t.h,t.k],null,null),(n()(),t.Ab(-1,0,[" SaaS Metrics "])),(n()(),t.ob(7,0,null,null,5,"ion-content",[["padding",""]],null,null,null,i.p,i.f)),t.nb(8,49152,null,0,r.r,[t.h,t.k],null,null),(n()(),t.ob(9,0,null,0,3,"ion-list",[],null,null,null,i.r,i.h)),t.nb(10,49152,null,0,r.L,[t.h,t.k],null,null),(n()(),t.fb(16777216,null,0,1,null,f)),t.nb(12,278528,null,0,c.h,[t.N,t.K,t.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,12,0,l.component.homeLists)},null)}function h(n){return t.Bb(0,[(n()(),t.ob(0,0,null,null,1,"app-home",[],null,null,null,p,b)),t.nb(1,114688,null,0,a,[s],null,null)],function(n,l){n(l,1,0)},null)}var m=t.kb("app-home",a,h,{},{},[]),d=u("gIcY"),v=u("ZYCi");u.d(l,"HomePageModuleNgFactory",function(){return g});var g=t.lb(o,[],function(n){return t.ub([t.vb(512,t.j,t.ab,[[8,[e.a,m]],[3,t.j],t.x]),t.vb(4608,c.j,c.i,[t.u,[2,c.p]]),t.vb(4608,d.c,d.c,[]),t.vb(4608,r.a,r.a,[t.z,t.g]),t.vb(4608,r.Cb,r.Cb,[r.a,t.j,t.q,c.c]),t.vb(4608,r.Fb,r.Fb,[r.a,t.j,t.q,c.c]),t.vb(1073742336,c.b,c.b,[]),t.vb(1073742336,d.b,d.b,[]),t.vb(1073742336,d.a,d.a,[]),t.vb(1073742336,r.Ab,r.Ab,[]),t.vb(1073742336,v.n,v.n,[[2,v.t],[2,v.m]]),t.vb(1073742336,o,o,[]),t.vb(1024,v.k,function(){return[[{path:"",component:a}]]},[])])})},gIcY:function(n,l,u){"use strict";u("mrSG");var t=u("CcnG");u("6blF"),u("isby"),u("G5J1"),u("zotm"),u("MGBS"),u("67Y/"),u("0/uQ"),u("ZYjt"),u.d(l,"b",function(){return i}),u.d(l,"c",function(){return o}),u.d(l,"a",function(){return r});var o=function(){function n(){this._accessors=[]}return n.prototype.add=function(n,l){this._accessors.push([n,l])},n.prototype.remove=function(n){for(var l=this._accessors.length-1;l>=0;--l)if(this._accessors[l][1]===n)return void this._accessors.splice(l,1)},n.prototype.select=function(n){var l=this;this._accessors.forEach(function(u){l._isSameGroup(u,n)&&u[1]!==n&&u[1].fireUncheck(n.value)})},n.prototype._isSameGroup=function(n,l){return!!n[0].control&&n[0]._parent===l._control._parent&&n[1].name===l.name},n}(),e=new t.p("NgFormSelectorWarning"),i=function(){return function(){}}(),r=function(){function n(){}var l;return l=n,n.withConfig=function(n){return{ngModule:l,providers:[{provide:e,useValue:n.warnOnDeprecatedNgFormSelector}]}},n}()}}]);