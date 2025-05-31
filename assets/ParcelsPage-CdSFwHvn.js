import{n as h,T as _,u as C,j as e,S as z,C as D,a as I,P as S,F as M,L as T,d as F,A as G,D as N,b as U,f as g,c as w,e as A,p as O,g as B,r as x,h as $,i as u,t as f,G as E,k as H,l as b,m as R,o as J,q as Q,s as W,v as j,w as q,x as K,y as V,z as X}from"./index-CD0warjG.js";import{C as Y,a as Z,b as ee,D as re,R as se,c as y,d as te}from"./ParcelsList.styled-Dgopo8WY.js";const ae=h.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
`,ie=h(_)`
  max-width: 186px;
  height: 56px;
  border-radius: 16px;
`,ne=h.li`
  max-width: 175px;
`,oe=({props:s})=>{const{setQuery:a,searchParams:r,updateParam:o,get:d,isAdmin:c}=s,{data:i}=C(),t=[];i!=null&&i.users&&i.users.map(n=>t.push({value:n,label:n.name}));const l=()=>{a(r.toString())};return e.jsx(z,{children:e.jsx(D,{children:e.jsx("form",{autoComplete:"off",onSubmit:l,children:e.jsxs(ae,{children:[e.jsxs(I,{children:[c&&e.jsx(ie,{onChange:n=>o("search",n.target.value.toUpperCase()),value:d("search"),type:"text",id:"trackingID",minLength:10,maxLength:10,placeholder:"Parcel ID"}),e.jsx(S,{type:"submit",children:e.jsx(M,{size:20})})]}),e.jsx(ne,{children:e.jsx(T,{dateAdapter:G,adapterLocale:F,children:e.jsx(N,{value:d("date"),minDate:new Date("01.05.2025"),maxDate:U(new Date,28),onChange:n=>o("date",g(n)),label:"Pick up date",format:"dd.MM.yy",slotProps:{field:{clearable:!0}}})})}),c&&e.jsx("li",{children:e.jsx(w,{value:t.find(({_id:n})=>n===d("driver")),className:"react-select-container",classNamePrefix:"react-select",placeholder:"Select driver",isClearable:!0,onChange:n=>{var p;return o("driver",(p=n==null?void 0:n.value)==null?void 0:p._id)},options:t})})]})})})})},de=(s="")=>{const[a,r]=A(s),o=Object.fromEntries([...a]);return{searchParams:a,updateParam:(i,t)=>{if(!t||t==="1970-01-01T01:00:00+01:00")return delete o[i],r(o);r({...o,[i]:t})},get:i=>{const t=l=>a.get(l);switch(i){case"date":return t("date")?O(t("date")):null;case"search":return t("search")?t("search"):"";case"driver":return t("driver")?t("driver"):null;default:return null}}}},le=({parcel:s,status:a})=>{const{data:r}=C(),[o]=B(),[d,c]=x.useState(null),i=x.useMemo(()=>r!=null&&r.users?r.users.map(({_id:t,name:l})=>({value:{_id:t,name:l},label:l})):[],[r]);return x.useEffect(()=>{var t;if(i.length&&((t=s.driver)!=null&&t._id)){const l=i.find(({value:n})=>n._id===s.driver._id);c(l||null)}},[i,s.driver._id]),e.jsx("li",{children:e.jsx(w,{isDisabled:a>=200,className:"react-select-container",classNamePrefix:"react-select",placeholder:"Select driver",value:d,onChange:t=>{c(t),o({_id:s._id,body:t.value})},isClearable:!0,options:i})})},ce=({parcel:s,status:a})=>{const[r]=$(),o=s.driver._id,d=a>=200;return e.jsx("li",{children:e.jsx(S,{disabled:!o||d,onClick:()=>{r({_id:s._id,body:{statusName:"Confirmed",status:200,date:g(new Date)}})},children:d?"Confirmed":"Confirm"})})},ue=h.ul`
  position: relative;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 5px;
`,k=h.button`
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
`,P=h.a`
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
  font-size: 16px;

  font-weight: 600;

  transition: all ${f.duration};

  &:disabled {
    &:disabled {
      cursor: not-allowed;
      background-color: ${`${u.light.darkGray}60`};
    }
  }

  &:hover,
  &:focus {
    background-color: ${u.light.darkGray};
  }
`;function xe(s){return E({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M170.718 216.482L141.6 245.6l93.6 93.6 208-208-29.118-29.118L235.2 279.918l-64.482-63.436zM422.4 256c0 91.518-74.883 166.4-166.4 166.4S89.6 347.518 89.6 256 164.482 89.6 256 89.6c15.6 0 31.2 2.082 45.764 6.241L334 63.6C310.082 53.2 284.082 48 256 48 141.6 48 48 141.6 48 256s93.6 208 208 208 208-93.6 208-208h-41.6z"},child:[]}]})(s)}const ge=({parcel:s,status:a})=>{const{_id:r,sender:o,recipient:d,payment:c}=s,[i]=$(),[t]=H(),l=a>=200,n=a>=300,p=a>=400;return e.jsxs(ue,{children:[e.jsx("li",{children:e.jsx(P,{disabled:!l,target:"_blank",rel:"noopener nofollow noreferrer",href:b(o.address.properties.formatted),children:e.jsx(R,{size:25})})}),e.jsx("li",{children:e.jsx(k,{type:"button",disabled:!l||n,onClick:()=>{i({_id:r,body:{statusName:"Picked up",status:300,date:g(new Date)}})},children:e.jsx(J,{size:25})})}),e.jsx("li",{children:e.jsx(P,{disabled:!l,target:"_blank",rel:"noopener nofollow noreferrer",href:b(d.address.properties.formatted),children:e.jsx(Q,{size:25})})}),e.jsx("li",{children:e.jsx(k,{type:"button",disabled:!n||p||!c.isPaid,onClick:()=>{i({_id:r,body:{statusName:"Delivered",status:400,date:g(new Date)}})},children:e.jsx(xe,{size:25})})}),e.jsx(he,{children:e.jsxs(pe,{onClick:()=>t({_id:r,body:{type:"cash",isPaid:!0}}),type:"button",disabled:!l||c.isPaid,children:[c.price,e.jsx("span",{children:" EUR"})]})})]})},me=({parcel:s,isAdmin:a})=>{const{_id:r,mainInfo:o,sender:d,recipient:c,payment:i,tracking:t}=s,{date:l,startTime:n,endTime:p}=o,[L]=W(),m=t.history[t.history.length-1].status;return e.jsxs(Y,{children:[e.jsxs(Z,{children:[e.jsxs(ee,{to:`/tracking/${r}`,children:[e.jsx("h3",{children:r}),e.jsxs("h2",{children:[j(n,"HH:mm")," - ",j(p,"HH:mm")]}),e.jsx("p",{children:e.jsxs("b",{children:[" ",j(l,"dd.MM.yy")]})})]}),a&&e.jsx(re,{type:"button",onClick:()=>L(r),children:e.jsx(se,{size:30})})]}),e.jsxs(y,{children:[e.jsx("li",{children:e.jsxs("p",{children:["Sender: ",e.jsx("b",{children:d.name})]})}),e.jsx("li",{children:e.jsxs("p",{children:["Recipient:",e.jsxs("b",{children:[" ",c.name]})]})}),e.jsx("li",{children:e.jsxs("p",{children:["Is paid:",e.jsx("span",{className:i.isPaid?"paid":"",children:i.isPaid?"PAID":"NOT PAID"})]})}),e.jsx("li",{children:e.jsxs("p",{children:["Status:",e.jsx("b",{children:q[m].toUpperCase()})]})})]}),a&&e.jsxs(y,{children:[e.jsx(le,{parcel:s,status:m}),e.jsx(ce,{parcel:s,status:m})]}),e.jsx(ge,{parcel:s,status:m})]})},je=({parcels:s,isAdmin:a})=>s?e.jsx(e.Fragment,{children:e.jsx(D,{children:e.jsx(te,{children:s.map(r=>e.jsx(me,{parcel:r,isAdmin:a},r._id))})})}):e.jsx("div",{children:"No parcels"}),v=s=>{if(!s)return"";const a=g(new Date().setHours(0,0,0,0)),r=new URLSearchParams;return r.set("driver",s),r.set("date",a),r.toString()},ye=()=>{const s=K(V),a=s.role==="admin",[r,o]=x.useState(a?"":v(s._id)),{searchParams:d,updateParam:c,get:i}=de(!a&&v(s._id)),{data:t}=X(r);return x.useEffect(()=>{d.size>=1&&r===""&&o(d.toString())},[r,d]),t?e.jsxs(e.Fragment,{children:[e.jsx(oe,{props:{setQuery:o,searchParams:d,updateParam:c,get:i,isAdmin:a}}),e.jsx(je,{parcels:t.parcels,isAdmin:a})]}):e.jsx("div",{children:"Loading.."})};export{ye as default};
