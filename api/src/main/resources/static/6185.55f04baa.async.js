(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[6185],{46185:function(pt,P,e){"use strict";e.r(P),e.d(P,{Report:function(){return E},default:function(){return vt}});var u=e(67294),yt=e(60674),F=e(77613),w=e(2067),N=e(43711),Z=(0,u.createContext)({}),$=Z.Provider,jt=Z.Consumer;function O(r){var a=["Single","Multi","Cascader","Select","QuestionSet"];if(a.includes(r.type))return!0;if(r.type==="FillBlank"||r.type==="MultipleBlank"){var i;if((i=r.children)!==null&&i!==void 0&&i.find(function(n){var s;return((s=n.attribute)===null||s===void 0?void 0:s.dataType)==="number"}))return!0}return!1}var M={Single:"\u5355\u9009\u9898",Multi:"\u591A\u9009\u9898",Cascader:"\u7EA7\u8054\u9898",Select:"\u4E0B\u62C9\u9898",FillBlank:"\u586B\u7A7A\u9898",MultipleBlank:"\u591A\u9879\u586B\u7A7A\u9898"},L=e(69610),Q=e(54941),U=function(){function r(){(0,L.Z)(this,r),this._init=this._init.bind(this),this._cleanUp=this._cleanUp.bind(this),this.convertFromInput=this.convertFromInput.bind(this)}return(0,Q.Z)(r,[{key:"_init",value:function(){this.canvas=document.createElement("canvas"),this.imgPreview=document.createElement("img"),this.imgPreview.style="position: absolute; top: -9999px",document.body.appendChild(this.imgPreview),this.canvasCtx=this.canvas.getContext("2d")}},{key:"_cleanUp",value:function(){document.body.removeChild(this.imgPreview)}},{key:"convertFromInput",value:function(i,n){this._init();var s=this;this.imgPreview.onload=function(){var h=new Image;s.canvas.width=s.imgPreview.clientWidth,s.canvas.height=s.imgPreview.clientHeight,h.crossOrigin="anonymous",h.src=s.imgPreview.src,h.onload=function(){s.canvasCtx.drawImage(h,0,0);var l=s.canvas.toDataURL("image/png");typeof n=="function"&&n(l),s._cleanUp()}},this.imgPreview.src=i}}]),r}(),t=e(85893),D=function(a){var i;return a?(i=a.children)===null||i===void 0?void 0:i.filter(function(n){return O(n)}).map(function(n){return n.type==="QuestionSet"?(0,t.jsx)(b,{schema:n},n.id):(0,t.jsx)(nt,{schema:n},n.id)}):(0,t.jsx)(t.Fragment,{})},W=(0,F.P)(function(){var r=(0,N.o)(),a=r.schema;return(0,t.jsx)("div",{children:D(a)})}),b=function(a){return(0,t.jsx)("div",{children:D(a.schema)})},Ct=e(13062),R=e(71230),St=e(66456),z=e(21369),Ft=e(89032),p=e(15746),Zt=e(57663),y=e(71577),H=e(2824),G=e(3375),V=e(68023),K=e(96262),X=e(24894),J=e(79110),Y=e(8690),k=e(17813),q=e(79164),_=e(19076),tt=e(23163);V.D([Y.N,k.N,q.N,X.N,J.N,tt.N,_.N]);var et=(0,u.forwardRef)(function(r,a){var i=r.data,n=r.labels,s=r.loading,h=r.name,l=r.type,C=(0,u.useRef)(null),d=(0,u.useRef)();return(0,u.useEffect)(function(){if(C.current){var x=K.S1(C.current);return d.current=x,function(){x.dispose()}}},[]),(0,u.useImperativeHandle)(a,function(){return{saveAsImage:function(){var m;return(m=d.current)===null||m===void 0?void 0:m.getDataURL({type:"png"})}}}),(0,u.useEffect)(function(){!s&&d.current?(d.current.hideLoading(),d.current.clear(),l==="horizontalBar"?d.current.setOption({title:{text:h},tooltip:{show:!0,trigger:"item"},xAxis:{show:!1},yAxis:{type:"category",data:n},series:[{data:i,type:"bar",barWidth:15,showBackground:!0,backgroundStyle:{color:"rgba(180, 180, 180, 0.2)"}}]}):l==="pie"?d.current.setOption({title:{text:h},tooltip:{show:!0,trigger:"item"},series:[{name:h,type:"pie",radius:"60%",data:i==null?void 0:i.map(function(x,m){return{name:n[m],value:x}}),emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}},labelLine:{length:10,length2:25}}]}):l==="bar"&&d.current.setOption({title:{text:h},tooltip:{show:!0,trigger:"item"},xAxis:{type:"category",data:n,axisLabel:{interval:0,rotate:30}},yAxis:{show:!1},series:[{data:i,type:"bar",barWidth:15,showBackground:!0,backgroundStyle:{color:"rgba(180, 180, 180, 0.2)"}}]})):d.current&&d.current.showLoading()},[s,l,i]),(0,t.jsx)("div",{ref:C,style:{height:300}})}),I=e(69646),nt=(0,F.P)(function(r){var a,i,n=r.schema,s=(0,u.useContext)(Z),h=s.loading,l=s.reportData,C=(0,u.useState)("bar"),d=(0,H.Z)(C,2),x=d[0],m=d[1],A=(l==null||(a=l.statistics[n.id])===null||a===void 0?void 0:a.total)||0,T=(0,u.useRef)(null),ct=(0,u.useMemo)(function(){return n.type==="FillBlank"?[{title:"\u5408\u8BA1",dataIndex:"sum",width:"25%"},{title:"\u5E73\u5747\u503C",dataIndex:"average",width:"25%"},{title:"\u6700\u9AD8\u503C",dataIndex:"max",width:"25%"},{title:"\u6700\u4F4E\u503C",dataIndex:"min",width:"25%"}]:[{title:"\u9009\u9879",dataIndex:"title",width:"50%"},{title:"\u6570\u636E\u91CF",dataIndex:"total",width:"25%",sorter:function(o,v){return o.total-v.total},showSorterTooltip:!1},{title:"\u5360\u6BD4",dataIndex:"percent",width:"25%",sorter:function(o,v){return parseFloat(o.percent)-parseFloat(v.percent)},showSorterTooltip:!1}]},[n.type]),ht=function(){var o,v=(o=T.current)===null||o===void 0?void 0:o.saveAsImage();v&&new U().convertFromInput(v,function(g){var f=document.createElement("a");f.href=g,f.download="haha.png",f.click(),f.remove()})},mt=function(){var o;return(o=n.children)===null||o===void 0?void 0:o.map(function(v){var g=v.id,f=v.title,c=l==null?void 0:l.statistics[g];if(c){var j=c.total||0,gt=(j/(A||1)*100).toFixed(2)+"%";return{id:g,title:(0,I.WO)(f),total:j,percent:gt,min:c.min,max:c.max,average:c.average,sum:c.sum}}return{id:g,title:(0,I.WO)(f),total:0,percent:"0%"}})},ft=function(){var o,v;if(n.type==="FillBlank"||n.type==="MatrixFillBlank")return(0,t.jsx)(t.Fragment,{});var g=((o=n.children)===null||o===void 0?void 0:o.map(function(c){return(0,I.WO)(c.title)}))||[],f=((v=n.children)===null||v===void 0?void 0:v.map(function(c){var j;return(l==null||(j=l.statistics[c.id])===null||j===void 0?void 0:j.total)||0}))||[];return(0,t.jsxs)(p.Z,{span:24,className:"question-chart",children:[(0,t.jsx)("div",{className:"question-chart-btns",children:(0,t.jsxs)(y.Z.Group,{size:"small",children:[(0,t.jsx)(y.Z,{type:"link",onClick:function(){return m("bar")},children:"\u6761\u5F62\u56FE"}),(0,t.jsx)(y.Z,{type:"link",onClick:function(){return m("horizontalBar")},children:"\u67F1\u5F62\u56FE"}),(0,t.jsx)(y.Z,{type:"link",onClick:function(){return m("pie")},children:"\u6247\u5F62\u56FE"}),(0,t.jsx)(y.Z,{type:"link",icon:(0,t.jsx)("div",{className:"divider"})}),(0,t.jsx)(y.Z,{type:"link",icon:(0,t.jsx)(G.Z,{}),onClick:ht})]})}),(0,t.jsx)("div",{children:(0,t.jsx)(et,{type:x,loading:h,labels:g,data:f,ref:T})})]})},xt=function(){return(0,t.jsx)(p.Z,{span:24,children:(0,t.jsx)(z.Z,{pagination:!1,size:"small",bordered:!0,columns:ct,rowKey:"id",dataSource:mt()})})};return(0,t.jsx)("div",{className:"question-item",children:(0,t.jsxs)(R.Z,{gutter:[12,12],className:"question-content",children:[(0,t.jsx)(p.Z,{xs:24,sm:12,children:(0,t.jsxs)(R.Z,{children:[(0,t.jsx)(p.Z,{span:24,children:(0,t.jsx)("span",{className:"question-label",children:(0,I.WO)(n.title)})}),ft()]})}),(0,t.jsx)(p.Z,{xs:24,sm:12,children:(0,t.jsxs)(R.Z,{children:[(0,t.jsx)(p.Z,{span:24,children:(0,t.jsx)("div",{className:"question-title",children:(0,t.jsxs)("div",{className:"question-data-desc",children:[(0,t.jsxs)("div",{children:["\u7C7B\u578B\uFF1A",M[n.type]]}),(0,t.jsxs)("div",{children:["\u5FC5\u586B\uFF1A",(i=n.attribute)!==null&&i!==void 0&&i.required?"\u662F":"\u5426"]}),(0,t.jsxs)("div",{children:[A,"\u6761\u6570\u636E"]})]})})}),xt()]})})]})})}),It=e(59250),rt=e(13013),Rt=e(30887),B=e(99210),Bt=e(47673),at=e(4107),it=e(19957),st=e(83663),lt=at.Z.Search,ot=(0,F.P)(function(){var r=(0,u.useContext)(Z),a=r.reportData,i=(0,t.jsxs)(B.Z,{children:[(0,t.jsx)(B.Z.Item,{children:"\u6309\u6570\u636E\u5185\u5BB9\u7B5B\u9009"}),(0,t.jsx)(B.Z.Item,{children:"\u6309\u63D0\u4EA4\u65E5\u671F\u7B5B\u9009"})]});return(0,t.jsxs)("div",{className:"report-header",children:[(0,t.jsxs)("span",{children:["\u5171",(a==null?void 0:a.total)||0,"\u6761\u6570\u636E"]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(lt,{size:"small",placeholder:"\u641C\u7D22",onSearch:function(s){r.loadReportData(s)},style:{width:200,marginRight:10}}),(0,t.jsx)(rt.Z,{overlay:i,placement:"bottomRight",children:(0,t.jsx)(it.Z,{style:{cursor:"pointer"}})})]}),(0,t.jsx)(st.Z,{})]})}),ut=function(){return(0,t.jsx)(ot,{})},dt=function(){return(0,t.jsx)("div",{className:"report-container",children:(0,t.jsx)(W,{})})},E=(0,F.P)(function(){var r=(0,N.o)(),a=(0,u.useMemo)(function(){return new w.Cu(r)},[r]);return(0,u.useEffect)(function(){a.loadReportData()},[]),(0,t.jsx)("div",{className:"survey-report",children:(0,t.jsxs)($,{value:a,children:[(0,t.jsx)(ut,{}),(0,t.jsx)(dt,{})]})})}),vt=E}}]);
