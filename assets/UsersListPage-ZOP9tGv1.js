import{q as h,t as g,ad as C,ae as b,r as c,j as e,G as $,H as v,I as y,K as R,N as U,a as L,n as k,X as S,Y as E,S as N,C as D}from"./index-CnVBaZix.js";import{R as w,C as A}from"./ParcelsList.styled-Cexh46Gq.js";const F=h.ul`
  display: flex;
  justify-content: center;
`,j=h.label`
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 0 16px 16px 0;

  text-transform: uppercase;
  color: ${({theme:r})=>r.colors.mid100};
  background-color: ${({theme:r})=>r.colors.hi100};

  transition: all ${g.duration};

  &.left {
    border-radius: 16px 0 0 16px;
  }
`,m=h.input`
  visibility: hidden;
  position: absolute;
  margin: 0;
  width: 1px;

  &:checked + label {
    font-weight: 600;
    color: ${({theme:r})=>r.colors.hi100};
    background-color: ${({theme:r})=>r.colors.lo100};
  }
`,G=({user:r})=>{const{_id:s,name:t,phone:a,email:d,carNumber:x,login:i,role:l}=r,[f]=C(),[u]=b(),[n,p]=c.useState(l);return c.useEffect(()=>{if(n!==l){const o={name:r.name,phone:r.phone,email:r.email,carNumber:r.carNumber,login:r.login,role:n};u({_id:s,body:o})}},[n,u,s,r,l]),e.jsxs($,{children:[e.jsxs(v,{children:[e.jsx(y,{to:{pathname:"/auth/edit"},state:{_id:s,user:{name:t,phone:a,email:d,carNumber:x,login:i,role:l}},children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("h3",{children:x})}),e.jsx("li",{children:e.jsx("h2",{children:t})}),e.jsx("li",{children:e.jsx("p",{children:i})})]})}),e.jsx(R,{type:"button",onClick:()=>f(s),children:e.jsx(w,{size:30})})]}),e.jsxs(U,{children:[e.jsx("li",{children:e.jsx("a",{href:`tel:${a}`,children:a})}),e.jsx("li",{children:e.jsx("a",{href:`mailto:${d}`,children:d})})]}),e.jsxs(F,{children:[e.jsxs("li",{children:[e.jsx(m,{checked:n==="admin",type:"radio",name:`${i}-role`,value:"admin",id:`${i}-admin`,onChange:({target:o})=>p(o.value)}),e.jsx(j,{htmlFor:`${i}-admin`,className:"left",children:"Admin"})]}),e.jsxs("li",{children:[e.jsx(m,{checked:n==="driver",type:"radio",name:`${i}-role`,value:"driver",id:`${i}-driver`,onChange:({target:o})=>p(o.value)}),e.jsx(j,{htmlFor:`${i}-driver`,children:"Driver"})]})]})]})},M=()=>{const{data:r,error:s,isLoading:t}=L("");return c.useEffect(()=>{s&&k(s.data.message)},[s]),!r&&t?e.jsx(S,{}):!r&!t?e.jsx(E,{error:s.status,text:s.data.message}):e.jsx(N,{children:e.jsx(D,{children:e.jsx(A,{children:r.users.map(a=>e.jsx(G,{user:a},a._id))})})})};export{M as default};
