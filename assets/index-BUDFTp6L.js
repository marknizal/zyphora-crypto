import{a as s,e as t,C as a,j as e}from"./index-DtxUwsDR.js";import{e as c,c as d,f as l,g as u}from"./index-Cf7rB8ia.js";import{G as m}from"./grid-DTsxMdfd.js";import{S as p}from"./section-title-BPlvg1JL.js";const f=[{id:1,title:"Step 1: Sign Up",desc:"Create your free account by entering your email address and choosing a secure password.",icon:c},{id:2,title:"Step 2: Verify Account",desc:"Confirm your email and complete a quick verification to keep your account secure.",icon:d},{id:3,title:"Step 3: Follow Setup",desc:"Complete the onboarding checklist to set your preferences and enable key features.",icon:l},{id:4,title:"Step 4: Get Started",desc:"Start exploring the platform, create your first project, and launch with confidence.",icon:u}],g=t(a)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  color: ${s.white};
  padding: 5rem 1rem;
`,h=t.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 1.25rem;
  padding: 2rem 1.25rem;
  background: linear-gradient(-120deg, #06121f 0%, #29323c 100%);
  border-radius: 1rem;
  height: 100%;

  .title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: auto;
  }

  .desc {
    font-size: 0.95rem;
    line-height: 1.5rem;
    color: #ddd;
  }
`,x=t.div`
  background: linear-gradient(120deg, #0b2036 0%, #445364 100%);
  align-self: start;
  border-radius: 50%;
  padding: 0.9rem;

  svg {
    font-size: 2rem;
  }
`,k=()=>e.jsxs(g,{children:[e.jsx(p,{title:"Getting Started",subTitle:"Just a few easy steps to set up your account, secure it, and start exploring the platform with confidence."}),e.jsx(m,{columns:{default:4},gap:"1.5rem",children:f.map(({id:r,title:i,desc:o,icon:n})=>e.jsxs(h,{children:[e.jsx(x,{children:e.jsx(n,{})}),e.jsx("h4",{className:"title",children:i}),e.jsx("p",{className:"desc",children:o})]},r))})]});export{k as default};
