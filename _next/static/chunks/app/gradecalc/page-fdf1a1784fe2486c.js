(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[219],{5099:function(e,n,t){Promise.resolve().then(t.bind(t,1192))},1192:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}});var r=t(8376),i=t(4016),c=t(7894);function l(){let[e,n]=(0,c.useState)(""),[t,l]=function(e,n,t){let[r,i]=(0,c.useState)(void 0===n?null:n),[l,a]=(0,c.useState)(!1);return(0,c.useEffect)(()=>{if(!l){let e=new URL(window.location.href).searchParams.get("c");if(null!=e)try{let n=JSON.parse(e);i(n)}catch(e){}a(!0)}},[i,"c",void 0,l]),[r,i]}(0,[]),[a,s]=(0,c.useState)({name:"",percent:"",weighting:""}),o=(0,c.useRef)(null);return(0,r.jsx)(i.W2,{className:"pt-[60px]",children:(0,r.jsxs)(i.kC,{direction:"column",gap:"3",children:[(0,r.jsxs)(i.kC,{align:"center",children:[(0,r.jsx)(i.X6,{className:"grow",children:"Grade Calculator"}),(0,r.jsx)(i.zx,{onClick:()=>{let e;navigator.clipboard.writeText((e=new URL(window.location.href)).host+e.pathname+"?c="+JSON.stringify(t))},children:"Copy link"})]}),(0,r.jsxs)(i.rj,{columns:"2",gap:"3",children:[(0,r.jsxs)(i.kC,{gap:"3",align:"center",children:[(0,r.jsx)(i.xv,{children:"Target percent (%)"}),(0,r.jsx)(i.nv.Root,{value:e,onChange:e=>n(e.target.value),onBlur:()=>{let t=parseFloat(e);n(Number.isNaN(t)?"":t)}})]}),(0,r.jsxs)(i.kC,{gap:"3",align:"center",children:[(0,r.jsx)(i.xv,{children:"Select category to speculate"}),(0,r.jsxs)(i.Ph.Root,{children:[(0,r.jsx)(i.Ph.Trigger,{}),(0,r.jsx)(i.Ph.Content,{children:t.map((e,n)=>(0,r.jsx)(i.Ph.Item,{children:e.name},n))})]})]}),(0,r.jsxs)(i.xv,{children:["Current percent: ",function(e){let n=0,t=0;for(let r=0;r<e.length;r++){let i=e[r];n+=i.percent*i.weighting,t+=i.weighting}return n/t}(t),"%"]})]}),(0,r.jsxs)(i.iA.fC,{children:[(0,r.jsx)(i.iA.h4,{children:(0,r.jsxs)(i.iA.X2,{children:[(0,r.jsx)(i.iA.Ni,{children:"Category name"}),(0,r.jsx)(i.iA.Ni,{children:"Percent"}),(0,r.jsx)(i.iA.Ni,{children:"Weighting"})]})}),(0,r.jsx)(i.iA.uT,{children:t.map((e,n)=>(0,r.jsxs)(i.iA.X2,{children:[(0,r.jsx)(i.iA.bL,{children:e.name}),(0,r.jsx)(i.iA.bL,{children:(0,r.jsxs)(i.kC,{gap:"3",align:"center",children:[e.percent,(0,r.jsx)(i.iR,{value:[e.percent],onValueChange:r=>{l(t.map((t,i)=>n==i?{...e,percent:r}:t))}})]})}),(0,r.jsx)(i.iA.bL,{children:e.weighting})]},n))})]}),(0,r.jsxs)(i.kC,{gap:"3",children:[(0,r.jsx)(i.nv.Root,{value:a.name,onChange:e=>s({...a,name:e.target.value}),onKeyDown:e=>{"Enter"==e.key&&o.current.click()}}),(0,r.jsx)(i.nv.Root,{value:a.percent,onChange:e=>s({...a,percent:e.target.value}),onKeyDown:e=>{"Enter"==e.key&&o.current.click()},onBlur:()=>{let e=parseFloat(a.percent);s({...a,percent:Number.isNaN(e)?"":e})}}),(0,r.jsx)(i.nv.Root,{value:a.weighting,onChange:e=>s({...a,weighting:e.target.value}),onKeyDown:e=>{"Enter"==e.key&&o.current.click()},onBlur:()=>{let e=parseFloat(a.weighting);s({...a,weighting:Number.isNaN(e)?"":e})}}),(0,r.jsx)(i.zx,{ref:o,onClick:()=>{l([...t,{...a,percent:parseFloat(a.percent),weighting:parseFloat(a.weighting)}]),s({name:"",percent:"",weighting:""})},children:"New category"})]})]})})}}},function(e){e.O(0,[371,922,996,744],function(){return e(e.s=5099)}),_N_E=e.O()}]);