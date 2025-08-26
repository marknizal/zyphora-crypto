import{d as a,e as s,C as n,a as r,B as l,j as e,I as d}from"./index-DtxUwsDR.js";import{S as c}from"./section-title-BPlvg1JL.js";import{G as m}from"./grid-DTsxMdfd.js";const p="/zyphora-crypto/assets/stats-banner-97VTIrux.png",h=[{id:"users-150k",number:"150K +",desc:"People who have joined"},{id:"users-45k",number:"45K +",desc:"People who have joined"},{id:"users-16k",number:"16K +",desc:"People joined Zyphora"}],u=s(n)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
  padding: 5rem 1rem;
  justify-content: center;
  align-items: center;

  ${a.tablet} {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }

  ${a.mobile} {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }
`,f=s(l)`
  color: ${r.white};
  gap: 2rem;

  .description {
    color: ${r.grey10};
    font-size: 1rem;
    line-height: 1.5rem;
  }
`,g=s.div`
  padding: 1rem;
  background: linear-gradient(-140deg, #06121f 0%, #29323c 100%);
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
  height: 100%;

  .number {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${r.link};
  }

  .desc {
    font-size: 0.85rem;
    line-height: 1.25rem;
  }
`,y=()=>e.jsxs(u,{children:[e.jsxs(f,{children:[e.jsx(c,{title:"Our Best Users Are all over the Worldwide Coverage",$align:"left"}),e.jsx("p",{className:"description",children:"We’re proud to serve a diverse community of professionals across the globe. With users in North America, Europe, Asia, and beyond, our platform helps teams collaborate seamlessly and achieve measurable results, no matter where they are."}),e.jsx(m,{columns:{default:3},gap:"1.15rem",children:h.map(({id:t,number:o,desc:i})=>e.jsxs(g,{children:[e.jsx("h1",{className:"number",children:o}),e.jsx("small",{className:"desc",children:i})]},t))})]}),e.jsx(d,{src:p,alt:"stats-banner",$fit:"contain",$ratio:"16/9"})]});export{y as default};
