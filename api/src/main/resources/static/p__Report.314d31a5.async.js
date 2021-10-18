(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[6090,6185],{60674:function(){},43711:function($,T,t){"use strict";t.d(T,{o:function(){return p}});var o=t(67294),C=t(78336),p=function(){var j=(0,o.useContext)(C.ZX);return j.store}},78336:function($,T,t){"use strict";t.d(T,{ZX:function(){return C},fQ:function(){return p},hi:function(){return R}});var o=t(67294),C=(0,o.createContext)({}),p=C.Provider,w=t(34792),j=t(48086),f=t(3182),O=t(94043),e=t.n(O),c=t(57147);function S(l){for(var u=l+"=",s=document.cookie.split(";"),a=0;a<s.length;a++){var r=s[a].trim();if(r.indexOf(u)==0)return r.substring(u.length,r.length)}return""}function g(l,u,s){return A.apply(this,arguments)}function A(){return A=(0,f.Z)(e().mark(function l(u,s,a){var r;return e().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return r={method:u.toUpperCase(),credentials:"same-origin",headers:{Accept:"application/json","Content-Type":"application/json","Cache-Control":"no-cache","X-XSRF-TOKEN":S("XSRF-TOKEN"),Expires:"-1",Pragma:"no-cache"},body:a},a&&(r.body=JSON.stringify(a)),d.next=4,fetch(s,r).then(function(v){return v.json()}).then(function(v){return v.code!==200&&j.default.error(v.message),v});case 4:return d.abrupt("return",d.sent);case 5:case"end":return d.stop()}},l)})),A.apply(this,arguments)}var R={put:function(u,s){return(0,f.Z)(e().mark(function a(){return e().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,g("PUT",u,s);case 2:return i.abrupt("return",i.sent);case 3:case"end":return i.stop()}},a)}))()},delete:function(u){return(0,f.Z)(e().mark(function s(){return e().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,g("DELETE",u);case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}},s)}))()},post:function(u,s){return(0,f.Z)(e().mark(function a(){return e().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,g("POST",u,s);case 2:return i.abrupt("return",i.sent);case 3:case"end":return i.stop()}},a)}))()},patch:function(u,s){return(0,f.Z)(e().mark(function a(){return e().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,g("PATCH",u,s);case 2:return i.abrupt("return",i.sent);case 3:case"end":return i.stop()}},a)}))()},get:function(u){return(0,f.Z)(e().mark(function s(){return e().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,g("GET",u).then(function(i){if(i.code===200)return i.data});case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}},s)}))()},getWithPagination:function(u,s){var a=this;return(0,f.Z)(e().mark(function r(){return e().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",a.get(n(u,s)).then(function(v){if(v)return{records:v.records,pagination:{current:v.current,pageSize:v.size,total:v.total}}}));case 1:case"end":return d.stop()}},r)}))()},loadSchema:function(u){for(var s=arguments.length,a=new Array(s>1?s-1:0),r=1;r<s;r++)a[r-1]=arguments[r];return this.get("/api/projects/".concat(u,"?fields=").concat(a.join(",")))},loadData:function(u,s){for(var a=arguments.length,r=new Array(a>2?a-2:0),i=2;i<a;i++)r[i-2]=arguments[i];return this.getWithPagination("/api/answers?shortId=".concat(u,"&fields=").concat(r.join(",")),s)},saveAnswer:function(u){return this.post("/api/answers",u)},updateAnswer:function(u){return this.patch("/api/answers",u)},deleteAnswer:function(u){return this.delete("/api/answers?ids=".concat(u.join(",")))},saveSurvey:function(u){return this.post("/api/projects",{survey:u})},updateSurvey:function(u,s){return this.patch("/api/projects",{survey:s,shortId:u})}};function n(l,u){var s=[];return Object.keys(u).forEach(function(a){var r=u[a];s.push("".concat(a,"=").concat(r instanceof Array?r.join(","):r))}),l.indexOf("?")!==-1?"".concat(l,"&").concat(s.join("&")):"".concat(l,"?").concat(s.join("&"))}},46185:function($,T,t){"use strict";t.r(T),t.d(T,{Report:function(){return it},default:function(){return yt}});var o=t(67294),C=t(60674),p=t(77613),w=t(2067),j=t(43711),f=(0,o.createContext)({}),O=f.Provider,e=f.Consumer;function c(m){var x=["Single","Multi","Cascader","Select","QuestionSet"];if(x.includes(m.type))return!0;if(m.type==="FillBlank"||m.type==="MultipleBlank"){var E;if((E=m.children)!==null&&E!==void 0&&E.find(function(h){var I;return((I=h.attribute)===null||I===void 0?void 0:I.dataType)==="number"}))return!0}return!1}var S={Single:"\u5355\u9009\u9898",Multi:"\u591A\u9009\u9898",Cascader:"\u7EA7\u8054\u9898",Select:"\u4E0B\u62C9\u9898",FillBlank:"\u586B\u7A7A\u9898",MultipleBlank:"\u591A\u9879\u586B\u7A7A\u9898"},g=t(69610),A=t(54941),R=function(){function m(){(0,g.Z)(this,m),this._init=this._init.bind(this),this._cleanUp=this._cleanUp.bind(this),this.convertFromInput=this.convertFromInput.bind(this)}return(0,A.Z)(m,[{key:"_init",value:function(){this.canvas=document.createElement("canvas"),this.imgPreview=document.createElement("img"),this.imgPreview.style="position: absolute; top: -9999px",document.body.appendChild(this.imgPreview),this.canvasCtx=this.canvas.getContext("2d")}},{key:"_cleanUp",value:function(){document.body.removeChild(this.imgPreview)}},{key:"convertFromInput",value:function(E,h){this._init();var I=this;this.imgPreview.onload=function(){var U=new Image;I.canvas.width=I.imgPreview.clientWidth,I.canvas.height=I.imgPreview.clientHeight,U.crossOrigin="anonymous",U.src=I.imgPreview.src,U.onload=function(){I.canvasCtx.drawImage(U,0,0);var P=I.canvas.toDataURL("image/png");typeof h=="function"&&h(P),I._cleanUp()}},this.imgPreview.src=E}}]),m}(),n=t(85893),l=function(x){var E;return x?(E=x.children)===null||E===void 0?void 0:E.filter(function(h){return c(h)}).map(function(h){return h.type==="QuestionSet"?(0,n.jsx)(s,{schema:h},h.id):(0,n.jsx)(ct,{schema:h},h.id)}):(0,n.jsx)(n.Fragment,{})},u=(0,p.P)(function(){var m=(0,j.o)(),x=m.schema;return(0,n.jsx)("div",{children:l(x)})}),s=function(x){return(0,n.jsx)("div",{children:l(x.schema)})},a=t(13062),r=t(71230),i=t(66456),d=t(21369),v=t(89032),y=t(15746),W=t(57663),F=t(71577),J=t(2824),H=t(3375),q=t(68023),et=t(96262),nt=t(24894),b=t(79110),D=t(8690),Q=t(17813),N=t(79164),Y=t(19076),V=t(23163);q.D([D.N,Q.N,N.N,nt.N,b.N,V.N,Y.N]);var ot=(0,o.forwardRef)(function(m,x){var E=m.data,h=m.labels,I=m.loading,U=m.name,P=m.type,_=(0,o.useRef)(null),B=(0,o.useRef)();return(0,o.useEffect)(function(){if(_.current){var G=et.S1(_.current);return B.current=G,function(){G.dispose()}}},[]),(0,o.useImperativeHandle)(x,function(){return{saveAsImage:function(){var K;return(K=B.current)===null||K===void 0?void 0:K.getDataURL({type:"png"})}}}),(0,o.useEffect)(function(){!I&&B.current?(B.current.hideLoading(),B.current.clear(),P==="horizontalBar"?B.current.setOption({title:{text:U},tooltip:{show:!0,trigger:"item"},xAxis:{show:!1},yAxis:{type:"category",data:h},series:[{data:E,type:"bar",barWidth:15,showBackground:!0,backgroundStyle:{color:"rgba(180, 180, 180, 0.2)"}}]}):P==="pie"?B.current.setOption({title:{text:U},tooltip:{show:!0,trigger:"item"},series:[{name:U,type:"pie",radius:"60%",data:E==null?void 0:E.map(function(G,K){return{name:h[K],value:G}}),emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}},labelLine:{length:10,length2:25}}]}):P==="bar"&&B.current.setOption({title:{text:U},tooltip:{show:!0,trigger:"item"},xAxis:{type:"category",data:h,axisLabel:{interval:0,rotate:30}},yAxis:{show:!1},series:[{data:E,type:"bar",barWidth:15,showBackground:!0,backgroundStyle:{color:"rgba(180, 180, 180, 0.2)"}}]})):B.current&&B.current.showLoading()},[I,P,E]),(0,n.jsx)("div",{ref:_,style:{height:300}})}),rt=t(69646),ct=(0,p.P)(function(m){var x,E,h=m.schema,I=(0,o.useContext)(f),U=I.loading,P=I.reportData,_=(0,o.useState)("bar"),B=(0,J.Z)(_,2),G=B[0],K=B[1],ut=(P==null||(x=P.statistics[h.id])===null||x===void 0?void 0:x.total)||0,st=(0,o.useRef)(null),xt=(0,o.useMemo)(function(){return h.type==="FillBlank"?[{title:"\u5408\u8BA1",dataIndex:"sum",width:"25%"},{title:"\u5E73\u5747\u503C",dataIndex:"average",width:"25%"},{title:"\u6700\u9AD8\u503C",dataIndex:"max",width:"25%"},{title:"\u6700\u4F4E\u503C",dataIndex:"min",width:"25%"}]:[{title:"\u9009\u9879",dataIndex:"title",width:"50%"},{title:"\u6570\u636E\u91CF",dataIndex:"total",width:"25%",sorter:function(Z,M){return Z.total-M.total},showSorterTooltip:!1},{title:"\u5360\u6BD4",dataIndex:"percent",width:"25%",sorter:function(Z,M){return parseFloat(Z.percent)-parseFloat(M.percent)},showSorterTooltip:!1}]},[h.type]),Ct=function(){var Z,M=(Z=st.current)===null||Z===void 0?void 0:Z.saveAsImage();M&&new R().convertFromInput(M,function(X){var z=document.createElement("a");z.href=X,z.download="haha.png",z.click(),z.remove()})},jt=function(){var Z;return(Z=h.children)===null||Z===void 0?void 0:Z.map(function(M){var X=M.id,z=M.title,L=P==null?void 0:P.statistics[X];if(L){var k=L.total||0,At=(k/(ut||1)*100).toFixed(2)+"%";return{id:X,title:(0,rt.WO)(z),total:k,percent:At,min:L.min,max:L.max,average:L.average,sum:L.sum}}return{id:X,title:(0,rt.WO)(z),total:0,percent:"0%"}})},St=function(){var Z,M;if(h.type==="FillBlank"||h.type==="MatrixFillBlank")return(0,n.jsx)(n.Fragment,{});var X=((Z=h.children)===null||Z===void 0?void 0:Z.map(function(L){return(0,rt.WO)(L.title)}))||[],z=((M=h.children)===null||M===void 0?void 0:M.map(function(L){var k;return(P==null||(k=P.statistics[L.id])===null||k===void 0?void 0:k.total)||0}))||[];return(0,n.jsxs)(y.Z,{span:24,className:"question-chart",children:[(0,n.jsx)("div",{className:"question-chart-btns",children:(0,n.jsxs)(F.Z.Group,{size:"small",children:[(0,n.jsx)(F.Z,{type:"link",onClick:function(){return K("bar")},children:"\u6761\u5F62\u56FE"}),(0,n.jsx)(F.Z,{type:"link",onClick:function(){return K("horizontalBar")},children:"\u67F1\u5F62\u56FE"}),(0,n.jsx)(F.Z,{type:"link",onClick:function(){return K("pie")},children:"\u6247\u5F62\u56FE"}),(0,n.jsx)(F.Z,{type:"link",icon:(0,n.jsx)("div",{className:"divider"})}),(0,n.jsx)(F.Z,{type:"link",icon:(0,n.jsx)(H.Z,{}),onClick:Ct})]})}),(0,n.jsx)("div",{children:(0,n.jsx)(ot,{type:G,loading:U,labels:X,data:z,ref:st})})]})},Et=function(){return(0,n.jsx)(y.Z,{span:24,children:(0,n.jsx)(d.Z,{pagination:!1,size:"small",bordered:!0,columns:xt,rowKey:"id",dataSource:jt()})})};return(0,n.jsx)("div",{className:"question-item",children:(0,n.jsxs)(r.Z,{gutter:[12,12],className:"question-content",children:[(0,n.jsx)(y.Z,{xs:24,sm:12,children:(0,n.jsxs)(r.Z,{children:[(0,n.jsx)(y.Z,{span:24,children:(0,n.jsx)("span",{className:"question-label",children:(0,rt.WO)(h.title)})}),St()]})}),(0,n.jsx)(y.Z,{xs:24,sm:12,children:(0,n.jsxs)(r.Z,{children:[(0,n.jsx)(y.Z,{span:24,children:(0,n.jsx)("div",{className:"question-title",children:(0,n.jsxs)("div",{className:"question-data-desc",children:[(0,n.jsxs)("div",{children:["\u7C7B\u578B\uFF1A",S[h.type]]}),(0,n.jsxs)("div",{children:["\u5FC5\u586B\uFF1A",(E=h.attribute)!==null&&E!==void 0&&E.required?"\u662F":"\u5426"]}),(0,n.jsxs)("div",{children:[ut,"\u6761\u6570\u636E"]})]})})}),Et()]})})]})})}),It=t(59250),lt=t(13013),wt=t(30887),at=t(99210),Rt=t(47673),dt=t(4107),vt=t(19957),ft=t(83663),ht=dt.Z.Search,mt=(0,p.P)(function(){var m=(0,o.useContext)(f),x=m.reportData,E=(0,n.jsxs)(at.Z,{children:[(0,n.jsx)(at.Z.Item,{children:"\u6309\u6570\u636E\u5185\u5BB9\u7B5B\u9009"}),(0,n.jsx)(at.Z.Item,{children:"\u6309\u63D0\u4EA4\u65E5\u671F\u7B5B\u9009"})]});return(0,n.jsxs)("div",{className:"report-header",children:[(0,n.jsxs)("span",{children:["\u5171",(x==null?void 0:x.total)||0,"\u6761\u6570\u636E"]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(ht,{size:"small",placeholder:"\u641C\u7D22",onSearch:function(I){m.loadReportData(I)},style:{width:200,marginRight:10}}),(0,n.jsx)(lt.Z,{overlay:E,placement:"bottomRight",children:(0,n.jsx)(vt.Z,{style:{cursor:"pointer"}})})]}),(0,n.jsx)(ft.Z,{})]})}),gt=function(){return(0,n.jsx)(mt,{})},pt=function(){return(0,n.jsx)("div",{className:"report-container",children:(0,n.jsx)(u,{})})},it=(0,p.P)(function(){var m=(0,j.o)(),x=(0,o.useMemo)(function(){return new w.Cu(m)},[m]);return(0,o.useEffect)(function(){x.loadReportData()},[]),(0,n.jsx)("div",{className:"survey-report",children:(0,n.jsxs)(O,{value:x,children:[(0,n.jsx)(gt,{}),(0,n.jsx)(pt,{})]})})}),yt=it},23063:function($,T,t){"use strict";t.d(T,{ZX:function(){return C},Gb:function(){return w},Y7:function(){return f}});var o=t(67294),C=o.createContext({}),p=o.createContext({}),w=o.createContext({}),j=o.createContext({}),f=o.createContext({})},69646:function($,T,t){"use strict";t.d(T,{Gb:function(){return C.Gb},Y7:function(){return C.Y7},ZX:function(){return C.ZX},mO:function(){return c},Gr:function(){return u},JH:function(){return o.JH},Cp:function(){return w},VS:function(){return S.VS},j1:function(){return o.j1},QT:function(){return o.QT},RY:function(){return o.RY},LQ:function(){return e},$Z:function(){return j},WO:function(){return S.WO}});var o=t(61974),C=t(23063),p=function(a){return Array.isArray(a)?a:a?[a]:[]},w=function(a){for(var r=arguments.length,i=new Array(r>1?r-1:0),d=1;d<r;d++)i[d-1]=arguments[d];return i.forEach(function(v){return a.query(a.path.concat(v)).take(function(y){return y.display="none"})})},j=function(a){for(var r=arguments.length,i=new Array(r>1?r-1:0),d=1;d<r;d++)i[d-1]=arguments[d];return i.forEach(function(v){return a.query(a.path.concat(v)).take(function(y){return y.display="visible"})})},f=function(a){for(var r=arguments.length,i=new Array(r>1?r-1:0),d=1;d<r;d++)i[d-1]=arguments[d];return i.forEach(function(v){return a.query(a.path.concat(v)).take(function(y){y.display==="none"&&a.value&&(y.caches.value=void 0,delete a.value[v]),y.display="visible"})})},O=t(16308),e=function(a,r){return window.requestIdleCallback(a,r)},c=function(a){window.cancelIdleCallback(a)},S=t(84821),g=t(86582),A=t(11849),R=t(67294),n=t(95566),l=t(85893);function u(s,a){return function(r){var i=r.name||(a==null?void 0:a.name);if(!i)throw new Error("field name \u672A\u5B9A\u4E49");var d=(0,R.useMemo)(function(){return(0,n.$j)(s,(0,n.jM)(function(v,y){return(0,A.Z)((0,A.Z)({},v),{},{onChange:function(F){y.onInput(F)},hasError:y.errors.length>0})}))},[]);return(0,l.jsx)(n.gN,(0,A.Z)((0,A.Z)((0,A.Z)({},r),a),{},{name:i,component:[d,r],reactions:[function(v){var y=r.syncDisplay;y&&(typeof y=="string"||typeof y=="object"&&Object.keys(y).forEach(function(H){var q=v.query(v.path.parent().concat(H)).get("value");y[H].includes(q)?v.display="visible":v.display="none"}));var W=r.mirrorFieldAddress;if(W){var F=v.query(W),J=F.get("value");J?v.visible=!0:F.take()!==void 0&&(v.visible=!1)}}].concat((0,g.Z)(r.reactions||[]))}))}}},61974:function($,T,t){"use strict";t.d(T,{JH:function(){return w},RY:function(){return j},QT:function(){return f},j1:function(){return O}});var o={},C={},p={questionTypes:{},questionSettings:{},questionOperations:{},registerDesignerIcons:function(c){Object.assign(o,c)},getDesignerIcon:function(c){return o[c]},registerQuestionTemplates:function(c){Object.assign(C,c)},getQuestionTemplate:function(c){return C[c]||{type:c}}},w=function(){return p};function j(e,c){p.questionTypes[e]=c}function f(e,c){p.questionSettings[e]=c}function O(e,c){p.questionOperations[e]=c}},84821:function($,T,t){"use strict";t.d(T,{vC:function(){return p},JY:function(){return w},WO:function(){return f},VS:function(){return O}});var o=t(9963),C=t(86582);function p(e){var c=1;for(var S in e)if(!!e.hasOwnProperty(S)&&typeof e[S]=="object"&&w(e[S])){var g=p(e[S])+1;c=Math.max(g,c)}return c}function w(e){return e==null||typeof e=="number"&&e.toString()==="NaN"?!1:!(typeof e=="string"&&e.trim()==="")}var j={compile:function(c,S){var g=Object.keys(S||{}),A=g.map(function(R){return S[R]});return(0,o.Z)(Function,(0,C.Z)(g).concat(["return (".concat(c,");")])).apply(void 0,(0,C.Z)(A))}};function f(e){var c=document.createElement("div");return c.innerHTML=e,c.textContent||c.innerText||""}function O(e,c){for(var S=arguments.length,g=new Array(S>2?S-2:0),A=2;A<S;A++)g[A-2]=arguments[A];return e.length===0?g:c>=e.length?e.concat(g):e.reduce(function(R,n,l){return c===l&&R.push.apply(R,g),R.push(n),R},[])}},25378:function($,T,t){"use strict";var o=t(28481),C=t(67294),p=t(24308);function w(){var j=(0,C.useState)({}),f=(0,o.Z)(j,2),O=f[0],e=f[1];return(0,C.useEffect)(function(){var c=p.ZP.subscribe(function(S){e(S)});return function(){return p.ZP.unsubscribe(c)}},[]),O}T.Z=w},16308:function($,T,t){var o,C,p;(function(w){C=[],o=w,p=typeof o=="function"?o.apply(T,C):o,p!==void 0&&($.exports=p)})(function(){"use strict";var w,j,f,O,e=typeof window!="undefined"?window:typeof t.g!=null?t.g:this||{},c=e.cancelRequestAnimationFrame&&e.requestAnimationFrame||setTimeout,S=e.cancelRequestAnimationFrame||clearTimeout,g=[],A=0,R=!1,n=7,l=35,u=125,s=0,a=0,r=0,i={get didTimeout(){return!1},timeRemaining:function(){var b=n-(Date.now()-a);return b<0?0:b}},d=v(function(){n=22,u=66,l=0});function v(b){var D,Q,N=99,Y=function(){var V=Date.now()-Q;V<N?D=setTimeout(Y,N-V):(D=null,b())};return function(){Q=Date.now(),D||(D=setTimeout(Y,N))}}function y(){R&&(O&&S(O),f&&clearTimeout(f),R=!1)}function W(){u!=125&&(n=7,u=125,l=35,R&&(y(),H())),d()}function F(){O=null,f=setTimeout(q,0)}function J(){f=null,c(F)}function H(){R||(j=u-(Date.now()-a),w=Date.now(),R=!0,l&&j<l&&(j=l),j>9?f=setTimeout(J,j):(j=0,J()))}function q(){var b,D,Q,N=n>9?9:1;if(a=Date.now(),R=!1,f=null,A>2||a-j-50<w)for(D=0,Q=g.length;D<Q&&i.timeRemaining()>N;D++)b=g.shift(),r++,b&&b(i);g.length?H():A=0}function et(b){return s++,g.push(b),H(),s}function nt(b){var D=b-1-r;g[D]&&(g[D]=null)}if(!e.requestIdleCallback||!e.cancelIdleCallback)e.requestIdleCallback=et,e.cancelIdleCallback=nt,e.document&&document.addEventListener&&(e.addEventListener("scroll",W,!0),e.addEventListener("resize",W),document.addEventListener("focus",W,!0),document.addEventListener("mouseover",W,!0),["click","keypress","touchstart","mousedown"].forEach(function(b){document.addEventListener(b,W,{capture:!0,passive:!0})}),e.MutationObserver&&new MutationObserver(W).observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0}));else try{e.requestIdleCallback(function(){},{timeout:0})}catch(b){(function(D){var Q,N;if(e.requestIdleCallback=function(Y,V){return V&&typeof V.timeout=="number"?D(Y,V.timeout):D(Y)},e.IdleCallbackDeadline&&(Q=IdleCallbackDeadline.prototype)){if(N=Object.getOwnPropertyDescriptor(Q,"timeRemaining"),!N||!N.configurable||!N.get)return;Object.defineProperty(Q,"timeRemaining",{value:function(){return N.get.call(this)},enumerable:!0,configurable:!0})}})(e.requestIdleCallback)}return{request:et,cancel:nt}})}}]);
