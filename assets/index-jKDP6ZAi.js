import{a as i,e as t,C as a,j as e,f as d}from"./index-DtxUwsDR.js";import{a as c,b as l,c as m,d as g}from"./index-Cf7rB8ia.js";import{S as p}from"./section-title-BPlvg1JL.js";import{G as u}from"./grid-DTsxMdfd.js";const h=[{id:"trading",title:"Best Trading Platform",description:"Trade with lightning-fast execution, deep liquidity, and intuitive tools designed for both beginners and professional traders.",icon:c},{id:"pricing",title:"Transparent Pricing",description:"Enjoy competitive fees with no hidden charges. Get real-time insights into costs before making any transaction.",icon:l},{id:"security",title:"Trusted Security",description:"Your assets are protected with multi-layer encryption, cold storage, and round-the-clock monitoring to ensure safety.",icon:m}],f=t(a)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  color: ${i.white};
  padding: 5rem 1rem;
`,y=t.div`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  padding: 1.5rem;
  background: linear-gradient(-120deg, #06121f 0%, #29323c 100%);
  border-radius: 1rem;
  height: 100%;

  .description {
    font-size: 0.95rem;
    line-height: 1.5rem;
    color: ${i.grey};
    margin-bottom: 1.5rem;
  }
`,x=t.div`
  background-color: ${i.primary};
  align-self: start;
  border-radius: 50%;
  padding: 0.9rem;

  svg {
    font-size: 2rem;
  }
`,b={alignSelf:"start",padding:"0",height:"auto",marginTop:"auto"},v=()=>e.jsxs(f,{children:[e.jsx(p,{title:"Most Trusted Cryptocurrency Platform",subTitle:"A cryptocurrency is a tradable digital asset or digital form of money, built on blockchain technology that only exists online."}),e.jsx(u,{columns:{default:3,tablet:3},gap:"1.5rem",children:h.map(({id:r,title:n,description:o,icon:s})=>e.jsxs(y,{children:[e.jsx(x,{children:e.jsx(s,{})}),e.jsx("h2",{children:n}),e.jsx("p",{className:"description",children:o}),e.jsx(d,{icon:e.jsx(g,{}),type:"link",style:b,children:"Explore More"})]},r))})]});export{v as default};
