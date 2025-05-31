import{i as t,n as e,_ as i,t as n,G as r}from"./index-CD0warjG.js";const l=e.li`
  position: relative;

  padding: 20px;
  border-radius: 20px;
  background-color: ${`${t.light.gray}60`};

  width: 300px;

  text-align: left;

  @media screen and (min-width: 768px) {
    width: 300px;
    max-width: none;
  }
`,s=e.div`
  display: flex;
  justify-content: space-between;
  align-items: start;

  margin-bottom: 10px;
`,d=e(i)`
  display: block;
  width: 160px;
`,c=e.button`
  display: block;

  padding: 5px;
  text-align: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${t.light.gray};
  color: ${t.light.darkGray};
  transition: all ${n.duration};

  &:hover,
  &:focus {
    color: ${t.errorRed};
    background-color: ${t.light.darkGray};
  }
`,p=e.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  margin-bottom: 20px;

  li p {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      font-weight: 600;
      color: ${t.errorRed};
    }

    span.paid {
      color: ${t.success};
    }
  }
`;function x(a){return r({attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M0.877075 7.49988C0.877075 3.84219 3.84222 0.877045 7.49991 0.877045C11.1576 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1575 0.877075 7.49988ZM7.49991 1.82704C4.36689 1.82704 1.82708 4.36686 1.82708 7.49988C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49988C13.1727 4.36686 10.6329 1.82704 7.49991 1.82704ZM9.85358 5.14644C10.0488 5.3417 10.0488 5.65829 9.85358 5.85355L8.20713 7.49999L9.85358 9.14644C10.0488 9.3417 10.0488 9.65829 9.85358 9.85355C9.65832 10.0488 9.34173 10.0488 9.14647 9.85355L7.50002 8.2071L5.85358 9.85355C5.65832 10.0488 5.34173 10.0488 5.14647 9.85355C4.95121 9.65829 4.95121 9.3417 5.14647 9.14644L6.79292 7.49999L5.14647 5.85355C4.95121 5.65829 4.95121 5.3417 5.14647 5.14644C5.34173 4.95118 5.65832 4.95118 5.85358 5.14644L7.50002 6.79289L9.14647 5.14644C9.34173 4.95118 9.65832 4.95118 9.85358 5.14644Z",fill:"currentColor"},child:[]}]})(a)}const C=e.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    justify-content: space-between;
  }
`;export{l as C,c as D,x as R,s as a,d as b,p as c,C as d};
