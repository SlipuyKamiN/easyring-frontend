import{n as c,i as t,Y as f,Z as C,r as j,j as e,u as v,S as $,C as y}from"./index-CD0warjG.js";import{C as R,a as U,b as k,D as L,R as D,c as N,d as S}from"./ParcelsList.styled-Dgopo8WY.js";const w=c.ul`
  display: flex;
  justify-content: center;
`,m=c.label`
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 0 16px 16px 0;

  text-transform: uppercase;
  color: ${t.light.gray};
  background-color: ${t.light.silver};

  &.left {
    border-radius: 16px 0 0 16px;
  }
`,g=c.input`
  visibility: hidden;
  position: absolute;
  margin: 0;
  width: 1px;

  &:checked + label {
    font-weight: 600;
    color: ${t.light.silver};
    background-color: ${t.light.darkGray};
  }
`,E=({user:r})=>{const{_id:i,name:h,phone:d,email:o,carNumber:x,login:s,role:n}=r,[b]=f(),[u]=C(),[a,p]=j.useState(n);return j.useEffect(()=>{if(a!==n){const l={name:r.name,phone:r.phone,email:r.email,carNumber:r.carNumber,login:r.login,role:a};u({_id:i,body:l})}},[a,u,i,r,n]),e.jsxs(R,{children:[e.jsxs(U,{children:[e.jsx(k,{to:{pathname:"/auth/edit"},state:{_id:i,user:{name:h,phone:d,email:o,carNumber:x,login:s,role:n}},children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("h3",{children:x})}),e.jsx("li",{children:e.jsx("h2",{children:h})}),e.jsx("li",{children:e.jsx("p",{children:s})})]})}),e.jsx(L,{type:"button",onClick:()=>b(i),children:e.jsx(D,{size:30})})]}),e.jsxs(N,{children:[e.jsx("li",{children:e.jsx("a",{href:`tel:${d}`,children:d})}),e.jsx("li",{children:e.jsx("a",{href:`mailto:${o}`,children:o})})]}),e.jsxs(w,{children:[e.jsxs("li",{children:[e.jsx(g,{checked:a==="admin",type:"radio",name:`${s}-role`,value:"admin",id:`${s}-admin`,onChange:({target:l})=>p(l.value)}),e.jsx(m,{htmlFor:`${s}-admin`,className:"left",children:"Admin"})]}),e.jsxs("li",{children:[e.jsx(g,{checked:a==="driver",type:"radio",name:`${s}-role`,value:"driver",id:`${s}-driver`,onChange:({target:l})=>p(l.value)}),e.jsx(m,{htmlFor:`${s}-driver`,children:"Driver"})]})]})]})},G=()=>{const{data:r}=v("");return r?e.jsx($,{children:e.jsx(y,{children:e.jsx(S,{children:r.users.map(i=>e.jsx(E,{user:i},i._id))})})}):e.jsx("div",{children:"Loading users..."})};export{G as default};
