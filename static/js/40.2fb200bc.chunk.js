(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[40],{909:function(e,n,t){"use strict";t.r(n);var c=t(5),a=t(281),s=t(571),i=t(80),o=t(582),r=t.n(o),l=t(542),j=t(478),b=t(929),d=t(140),h=t(1),O=t.n(h),x=t(2);const m=Object(d.a)(l.a)((e=>{let{theme:n}=e;return{padding:n.spacing(.5)}}));var u=()=>{const[e,n]=Object(h.useState)([]),[t,c]=Object(h.useState)(!1),[s,i]=Object(h.useState)({}),o=e=>()=>{n((n=>[...n,{message:e,key:(new Date).getTime()}])),t?c(!1):l()},l=()=>{e.length>0&&(i(e.shift()),c(!0))},d=(e,n)=>{"clickaway"!==n&&c(!1)};return Object(x.jsxs)(a.a,{children:[Object(x.jsx)(j.a,{onClick:o("Message A"),children:"Show message A"}),Object(x.jsx)(j.a,{onClick:o("Message B"),children:"Show message B"}),Object(x.jsx)(b.a,{open:t,onClose:d,autoHideDuration:6e3,onExited:()=>l(),ContentProps:{"aria-describedby":"message-id"},anchorOrigin:{vertical:"bottom",horizontal:"left"},message:Object(x.jsx)("span",{id:"message-id",children:s.message}),action:[Object(x.jsx)(j.a,{color:"secondary",size:"small",onClick:d,children:"UNDO"},"undo"),Object(x.jsx)(m,{color:"inherit","aria-label":"Close",onClick:d,children:Object(x.jsx)(r.a,{})},"close")]},s.key)]})},g=t(915),p=t(78),k=t(898);const v=Object(d.a)("div")((e=>{let{theme:n}=e;return{"& .icon":{fontSize:20},"& .success":{backgroundColor:p.a[600]},"& .warning":{backgroundColor:k.a[700]},"& .error":{backgroundColor:n.palette.error.main},"& .info":{backgroundColor:n.palette.primary.main},"& .iconVariant":{opacity:.9,marginRight:n.spacing(1)},"& .message":{display:"flex",alignItems:"center"},"& .margin":{margin:n.spacing(1)}}}));function C(){const[e,n]=O.a.useState(!1);function t(e,t){"clickaway"!==t&&n(!1)}return Object(x.jsxs)(v,{children:[Object(x.jsx)(j.a,{variant:"outlined",className:"margin",onClick:function(){n(!0)},children:"Open success snackbar"}),Object(x.jsx)(b.a,{open:e,autoHideDuration:6e3,onClose:t,children:Object(x.jsx)(g.a,{onClose:t,severity:"success",sx:{width:"100%"},variant:"filled",children:"This is a success message!"})}),Object(x.jsx)(g.a,{onClose:t,sx:{m:1},severity:"error",variant:"filled",children:"This is an error message!"}),Object(x.jsx)(g.a,{onClose:t,sx:{m:1},severity:"warning",variant:"filled",children:"This is a warning message!"}),Object(x.jsx)(g.a,{onClose:t,sx:{m:1},severity:"info",variant:"filled",children:"This is an information message!"}),Object(x.jsx)(g.a,{onClose:t,sx:{m:1},severity:"success",variant:"filled",children:"This is a success message!"})]})}var f=t(699);function y(e){return Object(x.jsx)(f.a,{...e,direction:"left"})}function w(e){return Object(x.jsx)(f.a,{...e,direction:"up"})}function S(e){return Object(x.jsx)(f.a,{...e,direction:"right"})}function I(e){return Object(x.jsx)(f.a,{...e,direction:"down"})}var T=()=>{const[e,n]=Object(h.useState)(!1),[t,c]=Object(h.useState)(void 0),s=e=>()=>{n(!0),c((()=>e))};return Object(x.jsxs)(a.a,{children:[Object(x.jsx)(j.a,{onClick:s(y),children:"Right"}),Object(x.jsx)(j.a,{onClick:s(w),children:"Up"}),Object(x.jsx)(j.a,{onClick:s(S),children:"Left"}),Object(x.jsx)(j.a,{onClick:s(I),children:"Down"}),Object(x.jsx)(b.a,{open:e,onClose:()=>n(!1),TransitionComponent:t,ContentProps:{"aria-describedby":"message-id"},message:Object(x.jsx)("span",{id:"message-id",children:"I love snacks"})})]})},z=t(942);const N=Object(x.jsx)(j.a,{color:"secondary",size:"small",children:"lorem ipsum dolorem"}),B=Object(c.a)("div")((e=>{let{theme:n}=e;return{maxWidth:600,"& .snackbar":{margin:n.spacing(1)}}}));function D(){return Object(x.jsxs)(B,{children:[Object(x.jsx)(z.a,{className:"snackbar",message:"I love snacks.",action:N}),Object(x.jsx)(z.a,{className:"snackbar",message:"I love candy. I love cookies. I love cupcakes.           I love cheesecake. I love chocolate."}),Object(x.jsx)(z.a,{className:"snackbar",message:"I love candy. I love cookies. I love cupcakes.",action:N}),Object(x.jsx)(z.a,{className:"snackbar",message:"I love candy. I love cookies. I love cupcakes.           I love cheesecake. I love chocolate.",action:N})]})}function P(){const[e,n]=O.a.useState({open:!1,vertical:"top",horizontal:"center"}),{vertical:t,horizontal:c,open:s}=e,i=e=>()=>{n({open:!0,...e})};return Object(x.jsxs)(a.a,{children:[Object(x.jsx)(j.a,{onClick:i({vertical:"top",horizontal:"center"}),children:"Top-Center"}),Object(x.jsx)(j.a,{onClick:i({vertical:"top",horizontal:"right"}),children:"Top-Right"}),Object(x.jsx)(j.a,{onClick:i({vertical:"bottom",horizontal:"right"}),children:"Bottom-Right"}),Object(x.jsx)(j.a,{onClick:i({vertical:"bottom",horizontal:"center"}),children:"Bottom-Center"}),Object(x.jsx)(j.a,{onClick:i({vertical:"bottom",horizontal:"left"}),children:"Bottom-Left"}),Object(x.jsx)(j.a,{onClick:i({vertical:"top",horizontal:"left"}),children:"Top-Left"}),Object(x.jsx)(b.a,{open:s,onClose:function(){n({...e,open:!1})},anchorOrigin:{vertical:t,horizontal:c},ContentProps:{"aria-describedby":"message-id"},message:Object(x.jsx)("span",{id:"message-id",children:"I love snacks"})},"".concat(t,",").concat(c))]})}var R=t(28);function H(){const e=Object(R.a)(),[n,t]=Object(h.useState)(!1);function c(e,n){"clickaway"!==n&&t(!1)}return Object(x.jsxs)(a.a,{children:[Object(x.jsx)(j.a,{onClick:function(){t(!0)},children:"Open simple snackbar"}),Object(x.jsx)(b.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:n,autoHideDuration:6e3,onClose:c,ContentProps:{"aria-describedby":"message-id"},message:Object(x.jsx)("span",{id:"message-id",children:"Note archived"}),action:[Object(x.jsx)(j.a,{color:"secondary",size:"small",onClick:c,children:"UNDO"},"undo"),Object(x.jsx)(l.a,{"aria-label":"Close",color:"inherit",onClick:c,sx:{padding:e.spacing(.5)},children:Object(x.jsx)(r.a,{})},"close")]})]})}var L=t(722);function M(){const{enqueueSnackbar:e}=Object(L.b)();return Object(x.jsxs)(O.a.Fragment,{children:[Object(x.jsx)(j.a,{onClick:()=>e("I love snacks."),children:"Show snackbar"}),Object(x.jsx)(j.a,{onClick:(n="warning",()=>{e("This is a warning message!",{variant:n})}),children:"Show warning snackbar"})]});var n}function U(){return Object(x.jsx)(L.a,{maxSnack:3,children:Object(x.jsx)(M,{})})}var A=t(532),F=t(473);function J(e){return Object(x.jsx)(f.a,{...e,direction:"up"})}function q(e){return Object(x.jsx)(A.a,{...e})}function E(){const[e,n]=O.a.useState({open:!1,Transition:F.a}),t=e=>()=>{n({open:!0,Transition:e})};return Object(x.jsxs)("div",{children:[Object(x.jsx)(j.a,{onClick:t(q),children:"Grow Transition"}),Object(x.jsx)(j.a,{onClick:t(F.a),children:"Fade Transition"}),Object(x.jsx)(j.a,{onClick:t(J),children:"Slide Transition"}),Object(x.jsx)(b.a,{open:e.open,onClose:function(){n({...e,open:!1})},TransitionComponent:e.Transition,ContentProps:{"aria-describedby":"message-id"},message:Object(x.jsx)("span",{id:"message-id",children:"I love snacks"})})]})}const G=Object(c.a)("div")((e=>{let{theme:n}=e;return{margin:"30px",[n.breakpoints.down("sm")]:{margin:"16px"},"& .breadcrumb":{marginBottom:"30px",[n.breakpoints.down("sm")]:{marginBottom:"16px"}}}}));n.default=()=>Object(x.jsxs)(G,{children:[Object(x.jsx)(a.a,{className:"breadcrumb",children:Object(x.jsx)(i.a,{routeSegments:[{name:"Material",path:"/material"},{name:"Snackbar"}]})}),Object(x.jsxs)(s.a,{spacing:3,children:[Object(x.jsx)(i.l,{title:"simple snackbar",children:Object(x.jsx)(H,{})}),Object(x.jsx)(i.l,{title:"customized snackbar",children:Object(x.jsx)(C,{})}),Object(x.jsx)(i.l,{title:"positioned snackbar",children:Object(x.jsx)(P,{})}),Object(x.jsx)(i.l,{title:"message length",children:Object(x.jsx)(D,{})}),Object(x.jsx)(i.l,{title:"transition",children:Object(x.jsx)(E,{})}),Object(x.jsx)(i.l,{title:"consecutive snackbar",children:Object(x.jsx)(u,{})}),Object(x.jsx)(i.l,{title:"Control Slide direction",children:Object(x.jsx)(T,{})}),Object(x.jsx)(i.l,{title:"complementary project",children:Object(x.jsx)(U,{})})]})]})}}]);