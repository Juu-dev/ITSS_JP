(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[24],{555:function(e,t,a){"use strict";a(1);var n=a(79),o=a(2);t.a=Object(n.a)(Object(o.jsx)("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight")},556:function(e,t,a){"use strict";a(1);var n=a(79),o=a(2);t.a=Object(n.a)(Object(o.jsx)("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft")},586:function(e,t,a){"use strict";var n=a(6),o=a(4),c=a(1),s=a(9),r=a(95),l=a(12),i=a(5),b=a(69),j=a(59);function d(e){return Object(j.a)("MuiToolbar",e)}Object(b.a)("MuiToolbar",["root","gutters","regular","dense"]);var u=a(2);const p=["className","component","disableGutters","variant"],h=Object(i.a)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,!a.disableGutters&&t.gutters,t[a.variant]]}})((e=>{let{theme:t,ownerState:a}=e;return Object(o.a)({position:"relative",display:"flex",alignItems:"center"},!a.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}},"dense"===a.variant&&{minHeight:48})}),(e=>{let{theme:t,ownerState:a}=e;return"regular"===a.variant&&t.mixins.toolbar})),m=c.forwardRef((function(e,t){const a=Object(l.a)({props:e,name:"MuiToolbar"}),{className:c,component:i="div",disableGutters:b=!1,variant:j="regular"}=a,m=Object(n.a)(a,p),g=Object(o.a)({},a,{component:i,disableGutters:b,variant:j}),O=(e=>{const{classes:t,disableGutters:a,variant:n}=e,o={root:["root",!a&&"gutters",n]};return Object(r.a)(o,d,t)})(g);return Object(u.jsx)(h,Object(o.a)({as:i,className:Object(s.a)(O.root,c),ref:t,ownerState:g},m))}));t.a=m},600:function(e,t,a){"use strict";var n,o,c,s,r,l,i,b,j=a(6),d=a(4),u=a(1),p=a(9),h=a(95),m=a(268),g=a(5),O=a(12),x=a(32),y=a(679),P=a(475),v=a(937),w=a(586),f=a(556),L=a(555),R=a(28),B=a(542),T=a(79),I=a(2),C=Object(T.a)(Object(I.jsx)("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),M=Object(T.a)(Object(I.jsx)("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage");const S=["backIconButtonProps","count","disabled","getItemAriaLabel","nextIconButtonProps","onPageChange","page","rowsPerPage","showFirstButton","showLastButton","slotProps"];var k=u.forwardRef((function(e,t){var a,u,p,h;const{backIconButtonProps:m,count:g,disabled:O=!1,getItemAriaLabel:x,nextIconButtonProps:y,onPageChange:P,page:v,rowsPerPage:w,showFirstButton:T,showLastButton:k,slotProps:A}=e,D=Object(j.a)(e,S),F=Object(R.a)();return Object(I.jsxs)("div",Object(d.a)({ref:t},D,{children:[T&&Object(I.jsx)(B.a,Object(d.a)({onClick:e=>{P(e,0)},disabled:O||0===v,"aria-label":x("first",v),title:x("first",v)},null!=(a=null==A?void 0:A.firstButton)?a:{},{children:"rtl"===F.direction?n||(n=Object(I.jsx)(C,{})):o||(o=Object(I.jsx)(M,{}))})),Object(I.jsx)(B.a,Object(d.a)({onClick:e=>{P(e,v-1)},disabled:O||0===v,color:"inherit","aria-label":x("previous",v),title:x("previous",v)},null!=(u=null==A?void 0:A.previousButton)?u:m,{children:"rtl"===F.direction?c||(c=Object(I.jsx)(L.a,{})):s||(s=Object(I.jsx)(f.a,{}))})),Object(I.jsx)(B.a,Object(d.a)({onClick:e=>{P(e,v+1)},disabled:O||-1!==g&&v>=Math.ceil(g/w)-1,color:"inherit","aria-label":x("next",v),title:x("next",v)},null!=(p=null==A?void 0:A.nextButton)?p:y,{children:"rtl"===F.direction?r||(r=Object(I.jsx)(f.a,{})):l||(l=Object(I.jsx)(L.a,{}))})),k&&Object(I.jsx)(B.a,Object(d.a)({onClick:e=>{P(e,Math.max(0,Math.ceil(g/w)-1))},disabled:O||v>=Math.ceil(g/w)-1,"aria-label":x("last",v),title:x("last",v)},null!=(h=null==A?void 0:A.lastButton)?h:{},{children:"rtl"===F.direction?i||(i=Object(I.jsx)(M,{})):b||(b=Object(I.jsx)(C,{}))}))]}))})),A=a(546),D=a(69),F=a(59);function N(e){return Object(F.a)("MuiTablePagination",e)}var z,G=Object(D.a)("MuiTablePagination",["root","toolbar","spacer","selectLabel","selectRoot","select","selectIcon","input","menuItem","displayedRows","actions"]);const H=["ActionsComponent","backIconButtonProps","className","colSpan","component","count","disabled","getItemAriaLabel","labelDisplayedRows","labelRowsPerPage","nextIconButtonProps","onPageChange","onRowsPerPageChange","page","rowsPerPage","rowsPerPageOptions","SelectProps","showFirstButton","showLastButton","slotProps"],J=Object(g.a)(v.a,{name:"MuiTablePagination",slot:"Root",overridesResolver:(e,t)=>t.root})((e=>{let{theme:t}=e;return{overflow:"auto",color:(t.vars||t).palette.text.primary,fontSize:t.typography.pxToRem(14),"&:last-child":{padding:0}}})),K=Object(g.a)(w.a,{name:"MuiTablePagination",slot:"Toolbar",overridesResolver:(e,t)=>Object(d.a)({["& .".concat(G.actions)]:t.actions},t.toolbar)})((e=>{let{theme:t}=e;return{minHeight:52,paddingRight:2,["".concat(t.breakpoints.up("xs")," and (orientation: landscape)")]:{minHeight:52},[t.breakpoints.up("sm")]:{minHeight:52,paddingRight:2},["& .".concat(G.actions)]:{flexShrink:0,marginLeft:20}}})),$=Object(g.a)("div",{name:"MuiTablePagination",slot:"Spacer",overridesResolver:(e,t)=>t.spacer})({flex:"1 1 100%"}),E=Object(g.a)("p",{name:"MuiTablePagination",slot:"SelectLabel",overridesResolver:(e,t)=>t.selectLabel})((e=>{let{theme:t}=e;return Object(d.a)({},t.typography.body2,{flexShrink:0})})),q=Object(g.a)(P.a,{name:"MuiTablePagination",slot:"Select",overridesResolver:(e,t)=>Object(d.a)({["& .".concat(G.selectIcon)]:t.selectIcon,["& .".concat(G.select)]:t.select},t.input,t.selectRoot)})({color:"inherit",fontSize:"inherit",flexShrink:0,marginRight:32,marginLeft:8,["& .".concat(G.select)]:{paddingLeft:8,paddingRight:24,textAlign:"right",textAlignLast:"right"}}),Q=Object(g.a)(y.a,{name:"MuiTablePagination",slot:"MenuItem",overridesResolver:(e,t)=>t.menuItem})({}),U=Object(g.a)("p",{name:"MuiTablePagination",slot:"DisplayedRows",overridesResolver:(e,t)=>t.displayedRows})((e=>{let{theme:t}=e;return Object(d.a)({},t.typography.body2,{flexShrink:0})}));function V(e){let{from:t,to:a,count:n}=e;return"".concat(t,"\u2013").concat(a," of ").concat(-1!==n?n:"more than ".concat(a))}function W(e){return"Go to ".concat(e," page")}const X=u.forwardRef((function(e,t){var a;const n=Object(O.a)({props:e,name:"MuiTablePagination"}),{ActionsComponent:o=k,backIconButtonProps:c,className:s,colSpan:r,component:l=v.a,count:i,disabled:b=!1,getItemAriaLabel:g=W,labelDisplayedRows:y=V,labelRowsPerPage:P="Rows per page:",nextIconButtonProps:w,onPageChange:f,onRowsPerPageChange:L,page:R,rowsPerPage:B,rowsPerPageOptions:T=[10,25,50,100],SelectProps:C={},showFirstButton:M=!1,showLastButton:S=!1,slotProps:D}=n,F=Object(j.a)(n,H),G=n,X=(e=>{const{classes:t}=e;return Object(h.a)({root:["root"],toolbar:["toolbar"],spacer:["spacer"],selectLabel:["selectLabel"],select:["select"],input:["input"],selectIcon:["selectIcon"],menuItem:["menuItem"],displayedRows:["displayedRows"],actions:["actions"]},N,t)})(G),Y=null!=(a=null==D?void 0:D.select)?a:C,Z=Y.native?"option":Q;let _;l!==v.a&&"td"!==l||(_=r||1e3);const ee=Object(A.a)(Y.id),te=Object(A.a)(Y.labelId);return Object(I.jsx)(J,Object(d.a)({colSpan:_,ref:t,as:l,ownerState:G,className:Object(p.a)(X.root,s)},F,{children:Object(I.jsxs)(K,{className:X.toolbar,children:[Object(I.jsx)($,{className:X.spacer}),T.length>1&&Object(I.jsx)(E,{className:X.selectLabel,id:te,children:P}),T.length>1&&Object(I.jsx)(q,Object(d.a)({variant:"standard"},!Y.variant&&{input:z||(z=Object(I.jsx)(x.c,{}))},{value:B,onChange:L,id:ee,labelId:te},Y,{classes:Object(d.a)({},Y.classes,{root:Object(p.a)(X.input,X.selectRoot,(Y.classes||{}).root),select:Object(p.a)(X.select,(Y.classes||{}).select),icon:Object(p.a)(X.selectIcon,(Y.classes||{}).icon)}),disabled:b,children:T.map((e=>Object(u.createElement)(Z,Object(d.a)({},!Object(m.a)(Z)&&{ownerState:G},{className:X.menuItem,key:e.label?e.label:e,value:e.value?e.value:e}),e.label?e.label:e)))})),Object(I.jsx)(U,{className:X.displayedRows,children:y({from:0===i?0:R*B+1,to:-1===i?(R+1)*B:-1===B?i:Math.min(i,(R+1)*B),count:-1===i?-1:i,page:R})}),Object(I.jsx)(o,{className:X.actions,backIconButtonProps:c,count:i,nextIconButtonProps:w,onPageChange:f,page:R,rowsPerPage:B,showFirstButton:M,showLastButton:S,slotProps:null==D?void 0:D.actions,getItemAriaLabel:g,disabled:b})]})}))}));t.a=X},930:function(e,t,a){"use strict";a.r(t);var n=a(5),o=a(281),c=a(80),s=a(934),r=a(935),l=a(936),i=a(937),b=a(938),j=a(542),d=a(285),u=a(600),p=a(1),h=a(2);const m=Object(n.a)(s.a)((()=>({whiteSpace:"pre","& thead":{"& tr":{"& th":{paddingLeft:0,paddingRight:0}}},"& tbody":{"& tr":{"& td":{paddingLeft:0,textTransform:"capitalize"}}}}))),g=[{name:"john doe",date:"18 january, 2019",amount:1e3,status:"close",company:"ABC Fintech LTD."},{name:"kessy bryan",date:"10 january, 2019",amount:9e3,status:"open",company:"My Fintech LTD."},{name:"kessy bryan",date:"10 january, 2019",amount:9e3,status:"open",company:"My Fintech LTD."},{name:"james cassegne",date:"8 january, 2019",amount:5e3,status:"close",company:"Collboy Tech LTD."},{name:"lucy brown",date:"1 january, 2019",amount:89e3,status:"open",company:"ABC Fintech LTD."},{name:"lucy brown",date:"1 january, 2019",amount:89e3,status:"open",company:"ABC Fintech LTD."},{name:"lucy brown",date:"1 january, 2019",amount:89e3,status:"open",company:"ABC Fintech LTD."},{name:"lucy brown",date:"1 january, 2019",amount:89e3,status:"open",company:"ABC Fintech LTD."},{name:"lucy brown",date:"1 january, 2019",amount:89e3,status:"open",company:"ABC Fintech LTD."}];var O=()=>{const[e,t]=Object(p.useState)(0),[a,n]=Object(p.useState)(5);return Object(h.jsxs)(o.a,{width:"100%",overflow:"auto",children:[Object(h.jsxs)(m,{children:[Object(h.jsx)(r.a,{children:Object(h.jsxs)(l.a,{children:[Object(h.jsx)(i.a,{align:"left",children:"Name"}),Object(h.jsx)(i.a,{align:"center",children:"Company"}),Object(h.jsx)(i.a,{align:"center",children:"Start Date"}),Object(h.jsx)(i.a,{align:"center",children:"Status"}),Object(h.jsx)(i.a,{align:"center",children:"Amount"}),Object(h.jsx)(i.a,{align:"right",children:"Action"})]})}),Object(h.jsx)(b.a,{children:g.slice(e*a,e*a+a).map(((e,t)=>Object(h.jsxs)(l.a,{children:[Object(h.jsx)(i.a,{align:"left",children:e.name}),Object(h.jsx)(i.a,{align:"center",children:e.company}),Object(h.jsx)(i.a,{align:"center",children:e.date}),Object(h.jsx)(i.a,{align:"center",children:e.status}),Object(h.jsxs)(i.a,{align:"center",children:["$",e.amount]}),Object(h.jsx)(i.a,{align:"right",children:Object(h.jsx)(j.a,{children:Object(h.jsx)(d.a,{color:"error",children:"close"})})})]},t)))})]}),Object(h.jsx)(u.a,{sx:{px:2},page:e,component:"div",rowsPerPage:a,count:g.length,onPageChange:(e,a)=>{t(a)},rowsPerPageOptions:[5,10,25],onRowsPerPageChange:e=>{n(+e.target.value),t(0)},nextIconButtonProps:{"aria-label":"Next Page"},backIconButtonProps:{"aria-label":"Previous Page"}})]})};const x=Object(n.a)(s.a)((e=>{let{theme:t}=e;return{whiteSpace:"pre","& thead":{"& tr":{"& th":{paddingLeft:0,paddingRight:0}}},"& tbody":{"& tr":{"& td":{paddingLeft:0,textTransform:"capitalize"}}}}})),y=[{name:"john doe",date:"18 january, 2019",amount:1e3,status:"close",company:"ABC Fintech LTD."},{name:"kessy bryan",date:"10 january, 2019",amount:9e3,status:"open",company:"My Fintech LTD."},{name:"james cassegne",date:"8 january, 2019",amount:5e3,status:"close",company:"Collboy Tech LTD."},{name:"lucy brown",date:"1 january, 2019",amount:89e3,status:"open",company:"ABC Fintech LTD."},{name:"lucy brown",date:"1 january, 2019",amount:89e3,status:"open",company:"ABC Fintech LTD."},{name:"lucy brown",date:"1 january, 2019",amount:89e3,status:"open",company:"ABC Fintech LTD."}];var P=()=>Object(h.jsx)(o.a,{width:"100%",overflow:"auto",children:Object(h.jsxs)(x,{children:[Object(h.jsx)(r.a,{children:Object(h.jsxs)(l.a,{children:[Object(h.jsx)(i.a,{align:"left",children:"Name"}),Object(h.jsx)(i.a,{align:"center",children:"Company"}),Object(h.jsx)(i.a,{align:"center",children:"Start Date"}),Object(h.jsx)(i.a,{align:"center",children:"Status"}),Object(h.jsx)(i.a,{align:"center",children:"Amount"}),Object(h.jsx)(i.a,{align:"right",children:"Action"})]})}),Object(h.jsx)(b.a,{children:y.map(((e,t)=>Object(h.jsxs)(l.a,{children:[Object(h.jsx)(i.a,{align:"left",children:e.name}),Object(h.jsx)(i.a,{align:"center",children:e.company}),Object(h.jsx)(i.a,{align:"center",children:e.date}),Object(h.jsx)(i.a,{align:"center",children:e.status}),Object(h.jsxs)(i.a,{align:"center",children:["$",e.amount]}),Object(h.jsx)(i.a,{align:"right",children:Object(h.jsx)(j.a,{children:Object(h.jsx)(d.a,{color:"error",children:"close"})})})]},t)))})]})});const v=Object(n.a)("div")((e=>{let{theme:t}=e;return{margin:"30px",[t.breakpoints.down("sm")]:{margin:"16px"},"& .breadcrumb":{marginBottom:"30px",[t.breakpoints.down("sm")]:{marginBottom:"16px"}}}}));t.default=()=>Object(h.jsxs)(v,{children:[Object(h.jsx)(o.a,{className:"breadcrumb",children:Object(h.jsx)(c.a,{routeSegments:[{name:"Material",path:"/material"},{name:"Table"}]})}),Object(h.jsx)(c.l,{title:"Simple Table",children:Object(h.jsx)(P,{})}),Object(h.jsx)(c.l,{title:"Pagination Table",children:Object(h.jsx)(O,{})})]})}}]);