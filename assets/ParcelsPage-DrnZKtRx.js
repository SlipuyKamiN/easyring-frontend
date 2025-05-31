import{n as h,T as L,u as D,j as e,S as z,C,a as F,P as S,F as I,L as T,d as M,A as N,D as U,b as G,f as g,c as w,e as A,p as R,g as B,r as x,h as $,i as u,t as f,k as E,l as b,m as H,o as O,q as J,s as Q,v as W,w as j,x as q,y as K,z as V,B as X}from"./index-BX0w0riI.js";import{C as Y,a as Z,b as ee,D as re,R as se,c as y,d as te}from"./ParcelsList.styled-CIdNu1bH.js";const ae=h.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
`,ie=h(L)`
  max-width: 186px;
  height: 56px;
  border-radius: 16px;
`,ne=h.li`
  max-width: 175px;
`,oe=({props:t})=>{const{setQuery:a,searchParams:r,updateParam:o,get:d,isAdmin:c}=t,{data:i}=D(),s=[];i!=null&&i.users&&i.users.map(n=>s.push({value:n,label:n.name}));const l=()=>{a(r.toString())};return e.jsx(z,{children:e.jsx(C,{children:e.jsx("form",{autoComplete:"off",onSubmit:l,children:e.jsxs(ae,{children:[e.jsxs(F,{children:[c&&e.jsx(ie,{onChange:n=>o("search",n.target.value.toUpperCase()),value:d("search"),type:"text",id:"trackingID",minLength:10,maxLength:10,placeholder:"Parcel ID"}),e.jsx(S,{type:"submit",children:e.jsx(I,{size:20})})]}),e.jsx(ne,{children:e.jsx(T,{dateAdapter:N,adapterLocale:M,children:e.jsx(U,{value:d("date"),minDate:new Date("01.05.2025"),maxDate:G(new Date,28),onChange:n=>o("date",g(n)),label:"Pick up date",format:"dd.MM.yy",slotProps:{field:{clearable:!0}}})})}),c&&e.jsx("li",{children:e.jsx(w,{value:s.find(({_id:n})=>n===d("driver")),className:"react-select-container",classNamePrefix:"react-select",placeholder:"Select driver",isClearable:!0,onChange:n=>{var p;return o("driver",(p=n==null?void 0:n.value)==null?void 0:p._id)},options:s})})]})})})})},de=(t="")=>{const[a,r]=A(t),o=Object.fromEntries([...a]);return{searchParams:a,updateParam:(i,s)=>{if(!s||s==="1970-01-01T01:00:00+01:00")return delete o[i],r(o);r({...o,[i]:s})},get:i=>{const s=l=>a.get(l);switch(i){case"date":return s("date")?R(s("date")):null;case"search":return s("search")?s("search"):"";case"driver":return s("driver")?s("driver"):null;default:return null}}}},le=({parcel:t,status:a})=>{const{data:r}=D(),[o]=B(),[d,c]=x.useState(null),i=x.useMemo(()=>r!=null&&r.users?r.users.map(({_id:s,name:l})=>({value:{_id:s,name:l},label:l})):[],[r]);return x.useEffect(()=>{var s;if(i.length&&((s=t.driver)!=null&&s._id)){const l=i.find(({value:n})=>n._id===t.driver._id);c(l||null)}},[i,t.driver._id]),e.jsx("li",{children:e.jsx(w,{isDisabled:a>=200,className:"react-select-container",classNamePrefix:"react-select",placeholder:"Select driver",value:d,onChange:s=>{c(s),o({_id:t._id,body:s.value})},isClearable:!0,options:i})})},ce=({parcel:t,status:a})=>{const[r]=$(),o=t.driver._id,d=a>=200;return e.jsx("li",{children:e.jsx(S,{disabled:!o||d,onClick:()=>{r({_id:t._id,body:{statusName:"Confirmed",status:200,date:g(new Date)}})},children:d?"Confirmed":"Confirm"})})},ue=h.ul`
  position: relative;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 5px;
`,P=h.button`
  display: block;
  flex-grow: 1;
  width: 125px;
  height: 100%;
  padding: 10px 0 10px 25px;
  border-radius: 16px;

  font-size: 16px;
  line-height: 1;
  text-transform: uppercase;
  text-align: center;
  background-color: ${u.light.silver};
  color: ${u.light.darkGray};

  transition: all ${f.duration};

  &:disabled {
    cursor: not-allowed;
    background-color: ${`${u.light.darkGray}60`};
  }

  &:hover,
  &:focus {
    background-color: ${u.light.gray};
  }
`,k=h.a`
  display: block;
  flex-grow: 1;
  width: 120px;
  height: 100%;
  padding: 10px 25px 10px 0;

  border-radius: 16px;

  font-size: 16px;
  line-height: 1;
  text-transform: uppercase;
  text-align: center;
  background-color: ${u.light.silver};
  color: ${u.light.darkGray};
  transition: all ${f.duration};

  &[disabled] {
    cursor: not-allowed;
    pointer-events: none;
    background-color: ${`${u.light.darkGray}60`};
  }

  &:hover,
  &:focus {
    background-color: ${u.light.gray};
  }
`,he=h.li`
  position: absolute;
  width: 70px;
  height: 70px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  overflow: hidden;
  background-color: ${u.light.gray};
  border: 5px solid ${u.light.gray};
`,pe=h.button`
  width: 100%;
  height: 100%;
  font-size: 18px;

  font-weight: 600;
  line-height: 1;

  transition: all ${f.duration};

  color: ${u.errorRed};

  span {
    font-size: 14px;
  }

  &:disabled {
    cursor: not-allowed;
    color: ${u.light.gray};
    background-color: ${`${u.light.darkGray}60`};
  }

  &:hover,
  &:focus {
    background-color: ${u.light.darkGray};
  }
`,xe=({parcel:t,status:a})=>{const{_id:r,sender:o,recipient:d,payment:c}=t,[i]=$(),[s]=E(),l=a>=200,n=a>=300,p=a>=400;return e.jsxs(ue,{children:[e.jsx("li",{children:e.jsx(k,{disabled:!l,target:"_blank",rel:"noopener nofollow noreferrer",href:b(o.address.properties.formatted),children:e.jsx(H,{size:25})})}),e.jsx("li",{children:e.jsx(P,{type:"button",disabled:!l||n,onClick:()=>{i({_id:r,body:{statusName:"Picked up",status:300,date:g(new Date)}})},children:e.jsx(O,{size:25})})}),e.jsx("li",{children:e.jsx(k,{disabled:!l,target:"_blank",rel:"noopener nofollow noreferrer",href:b(d.address.properties.formatted),children:e.jsx(J,{size:25})})}),e.jsx("li",{children:e.jsx(P,{type:"button",disabled:!n||p||!c.isPaid,onClick:()=>{i({_id:r,body:{statusName:"Delivered",status:400,date:g(new Date)}})},children:e.jsx(Q,{size:25})})}),e.jsx(he,{children:e.jsxs(pe,{onClick:()=>s({_id:r,body:{type:"cash",isPaid:!0}}),type:"button",disabled:!l||c.isPaid,children:[c.price,e.jsx("span",{children:" EUR"})]})})]})},ge=({parcel:t,isAdmin:a})=>{const{_id:r,mainInfo:o,sender:d,recipient:c,payment:i,tracking:s}=t,{date:l,startTime:n,endTime:p}=o,[_]=W(),m=s.history[s.history.length-1].status;return e.jsxs(Y,{children:[e.jsxs(Z,{children:[e.jsxs(ee,{to:`/tracking/${r}`,children:[e.jsx("h3",{children:r}),e.jsxs("h2",{children:[j(n,"HH:mm")," - ",j(p,"HH:mm")]}),e.jsx("p",{children:e.jsxs("b",{children:[" ",j(l,"dd.MM.yy")]})})]}),a&&e.jsx(re,{type:"button",onClick:()=>_(r),children:e.jsx(se,{size:30})})]}),e.jsxs(y,{children:[e.jsx("li",{children:e.jsxs("p",{children:["Sender: ",e.jsx("b",{children:d.name})]})}),e.jsx("li",{children:e.jsxs("p",{children:["Recipient:",e.jsxs("b",{children:[" ",c.name]})]})}),e.jsx("li",{children:e.jsxs("p",{children:["Is paid:",e.jsx("span",{className:i.isPaid?"paid":"",children:i.isPaid?"PAID":"NOT PAID"})]})}),e.jsx("li",{children:e.jsxs("p",{children:["Status:",e.jsx("b",{children:q[m].toUpperCase()})]})})]}),a&&e.jsxs(y,{children:[e.jsx(le,{parcel:t,status:m}),e.jsx(ce,{parcel:t,status:m})]}),e.jsx(xe,{parcel:t,status:m})]})},me=({parcels:t,isAdmin:a})=>t?e.jsx(e.Fragment,{children:e.jsx(C,{children:e.jsx(te,{children:t.map(r=>e.jsx(ge,{parcel:r,isAdmin:a},r._id))})})}):e.jsx("div",{children:"No parcels"}),v=t=>{if(!t)return"";const a=g(new Date().setHours(0,0,0,0)),r=new URLSearchParams;return r.set("driver",t),r.set("date",a),r.toString()},be=()=>{const t=K(V),a=t.role==="admin",[r,o]=x.useState(a?"":v(t._id)),{searchParams:d,updateParam:c,get:i}=de(!a&&v(t._id)),{data:s}=X(r);return x.useEffect(()=>{d.size>=1&&r===""&&o(d.toString())},[r,d]),s?e.jsxs(e.Fragment,{children:[e.jsx(oe,{props:{setQuery:o,searchParams:d,updateParam:c,get:i,isAdmin:a}}),e.jsx(me,{parcels:s.parcels,isAdmin:a})]}):e.jsx("div",{children:"Loading.."})};export{be as default};
