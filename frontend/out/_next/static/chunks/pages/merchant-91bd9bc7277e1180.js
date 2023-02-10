(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[27],{2828:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/merchant",function(){return s(1204)}])},1204:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return T}});var a=s(5893),n=s(7294),r=s(233);let i=e=>{let{accountId:t,onClick:s}=e;return(0,a.jsxs)("button",{onClick:s,className:"text-sm font-semibold leading-6 text-gray-900",children:[(0,a.jsx)("span",{"aria-hidden":"true",children:"←"})," Sign Out ",t]})},l=e=>{let{onClick:t,variant:s="link"}=e;return(0,a.jsxs)(a.Fragment,{children:["button"===s&&(0,a.jsxs)("button",{onClick:t,className:"rounded-md bg-indigo-400 px-8 py-3 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:["Sign In with NEAR ",(0,a.jsx)("span",{"aria-hidden":"true",children:"→"})]}),"link"===s&&(0,a.jsxs)("button",{onClick:t,className:"text-sm font-semibold leading-6 text-gray-900",children:["Sign in with NEAR ",(0,a.jsx)("span",{"aria-hidden":"true",children:"→"})]})]})};var o=s(403);let d=e=>{let{isSignedIn:t}=e;return(0,a.jsxs)(a.Fragment,{children:[t&&(0,a.jsx)(i,{className:"btn btn-primary",accountId:o.g.accountId,onClick:()=>o.g.signOut()}),t||(0,a.jsx)(l,{variant:"link",onClick:()=>o.g.signIn()})]})};var c=s(5244);let m=e=>{let{isSignedIn:t,programExists:s}=e;return(0,a.jsxs)(r.Z,{children:[s&&(0,a.jsx)("div",{className:"mr-4",children:(0,a.jsx)("a",{href:"/customer/".concat((0,c.c3)()),className:"rounded-md bg-indigo-500 px-3.5 py-3 text-base leading-7 text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Open Customer App"})}),(0,a.jsx)(d,{isSignedIn:t})]})};var u=s(6262);let h=e=>{let{isSignedIn:t,programExists:s,ftMetadata:n}=e;return(0,a.jsxs)(u.Z,{children:[(0,a.jsxs)(a.Fragment,{children:["Loyalty Program ",(0,a.jsx)("b",{children:"Administration Panel"})]}),s?n.token_name:"No loyalty program is active",(0,a.jsxs)(a.Fragment,{children:[!t&&(0,a.jsx)("div",{children:"Sign in to create a new program or see the one you have already created"}),t&&!s&&(0,a.jsx)("div",{children:"Fill in the form to create a loyalty program"})]}),!t&&(0,a.jsx)(l,{variant:"button",onClick:()=>o.g.signIn()})]})};var g=s(4634);let x=e=>{let{programsList:t,wallet:s}=e;return(0,a.jsx)("div",{className:"mt-10",children:(0,a.jsx)(g.Z,{programsList:t,details:!0})})},p=e=>{let{ftMetadata:t}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"pt-2 leading-4",children:(0,a.jsx)("h1",{className:"text-3xl font-bold leading-relaxed",children:"Basic info"})}),(0,a.jsx)("hr",{}),(0,a.jsxs)("p",{className:"mt-6 text-sm leading-6 text-gray-600",children:["Congratulations! You just created a loyalty program! The factory contract deployed a pair of contracts assigned to your account: manager contract and FT contract. The FT contract was initialized with the fungible token metadata that you provided in the previous step. Go to 'contracts' directory to learn more.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"This project is just a template and some things are simplified. The web2 backend is simulated on the frontend (see: frontend/backend.js). As long as you are logged in, the backend remains in the active state and customers can use your loyalty program.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"Click 'Open customer app' to see how a customer can interact with your loyalty program. This is a separate service that communicates both with the backend and the FT contract to get and spend some tokens that you just created.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"Clicking on 'Open customer app' generates a link with merchant account id. That's how you account id is passed to the customer app. The factory contract stores information about all loyalty programs deployed by merchants. This information is fetched by the customer app.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"If you log in, the customer app will be deactivated. Log in again to activate the backend for the customer app.",(0,a.jsx)("br",{})]})]}),(0,a.jsxs)("div",{className:"mt-10 leading-4 mt-2 overflow-hidden text-left shadow-2xl ring-1 ring-gray-900/5 rounded-2xl",children:[(0,a.jsxs)("div",{className:"px-6 py-4 bg-indigo-500 text-white",children:[(0,a.jsxs)("h1",{className:"text-2xl",children:[(0,a.jsx)("span",{className:"text-indigo-300 font-light",children:"Loyalty Program "}),(0,a.jsx)("span",{className:"font-medium",children:"Details"})]}),(0,a.jsx)("p",{className:"text-sm text-indigo-100",children:"This is your loyalty program data fetched from the blockchain:"})]}),(0,a.jsxs)("div",{className:" bg-white text-base",children:[(0,a.jsxs)("div",{className:"px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-10",children:[(0,a.jsx)("dt",{className:"font-medium text-gray-500",children:"FT Account"}),(0,a.jsx)("dd",{className:"mt-1 text-gray-900 sm:col-span-2 sm:mt-0",children:t.account_id})]}),(0,a.jsxs)("div",{className:"bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-10",children:[(0,a.jsx)("dt",{className:"font-medium text-gray-500",children:"Name"}),(0,a.jsx)("dd",{className:"mt-1 text-gray-900 sm:col-span-2 sm:mt-0",children:t.token_name})]}),(0,a.jsxs)("div",{className:"px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-10",children:[(0,a.jsx)("dt",{className:"font-medium text-gray-500",children:"Symbol"}),(0,a.jsx)("dd",{className:"mt-1 text-gray-900 sm:col-span-2 sm:mt-0",children:t.token_symbol})]}),(0,a.jsxs)("div",{className:"bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-10",children:[(0,a.jsx)("dt",{className:"font-medium text-gray-500",children:"Total Supply"}),(0,a.jsx)("dd",{className:"mt-1 text-gray-900 sm:col-span-2 sm:mt-0",children:t.token_total_supply})]})]})]})]})},y=e=>{let{createLoyaltyToken:t}=e,[s,r]=(0,n.useState)(""),[i,l]=(0,n.useState)(""),[o,d]=(0,n.useState)(""),[c,m]=(0,n.useState)(),u={name:e=>!e&&"All fields must be filled",symbol:e=>!e&&"All fields must be filled",totalSupply:e=>e<=0&&"Total supply should be > 0"},h=()=>{let e=u.name(s)||u.symbol(i)||u.totalSupply(o);return m(e),!e},g=e=>{e.preventDefault(),h()&&t({name:s,symbol:i,totalSupply:o})};return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("form",{className:"mt-20",onSubmit:g,children:[(0,a.jsxs)("div",{className:"-space-y-px rounded-md shadow-sm",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"email-address",className:"sr-only",children:"Name (e.g. Loyalty Token)"}),(0,a.jsx)("input",{onChange:e=>r(e.target.value),value:s,id:"email-address",type:"text",className:"relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-4 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-base",placeholder:"Name (e.g. Loyalty Token)"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"email-address",className:"sr-only",children:"Symbol (e.g. LT)"}),(0,a.jsx)("input",{onChange:e=>l(e.target.value),value:i,id:"email-address",type:"text",className:"relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-4 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-base",placeholder:"Symbol (e.g. LT)"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"email-address",className:"sr-only",children:"Total Supply (e.g. 1000)"}),(0,a.jsx)("input",{onChange:e=>d(e.target.value),value:o,id:"email-address",type:"text",className:"relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-4 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-base",placeholder:"Total Supply (e.g. 1000)"})]})]}),(0,a.jsx)("div",{className:"text-red-400 mt-2 mb-2 h-6",children:c}),(0,a.jsx)("div",{children:(0,a.jsxs)("button",{type:"submit",className:"group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-4 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",children:[(0,a.jsx)("span",{className:"absolute inset-y-0 left-0 flex items-center pl-3"}),"Create Loyalty Token"]})})]})})},f=e=>{let{programExists:t,ftMetadata:s,createLoyaltyToken:n}=e;return(0,a.jsxs)(a.Fragment,{children:[t&&(0,a.jsx)(p,{ftMetadata:s}),t||(0,a.jsx)(y,{createLoyaltyToken:n})]})};var b=s(9683),j=s(8905),v=s(8748),N=s(8226);let k=()=>{let[e,t]=(0,n.useState)(!0),[s,r]=(0,n.useState)(!1),[i,l]=(0,n.useState)(!1),[o,d]=(0,n.useState)({}),[u,g]=(0,n.useState)([]);return(0,n.useEffect)(()=>{N.d.getAllPrograms().then(e=>{g(e)})},[]),(0,n.useEffect)(()=>{let e=async()=>{await v.y.startUp();let e=!!v.y.checkIsProgramActive();r(e),t(!1)};e()},[]),(0,n.useEffect)(()=>{if(!s)return;let e=async()=>{let e=(0,c.c3)();await N.d.checkProgramExists(e).then(e=>{l(e)}),t(!1)};t(!0),e()},[s]),(0,n.useEffect)(()=>{if(i){let e=(0,c.c3)();N.d.getProgram(e).then(e=>{d(e.ft)}).catch(alert)}},[i]),(0,a.jsxs)(b.Z,{variant:"merchant",header:(0,a.jsx)(m,{isSignedIn:s,programExists:i}),children:[e&&(0,a.jsx)(j.Z,{}),e||(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(h,{isSignedIn:s,programExists:i,ftMetadata:o}),s&&(0,a.jsx)(f,{programExists:i,ftMetadata:o,createLoyaltyToken:function(e){let{name:t,symbol:s,totalSupply:a}=e;N.d.createFungibleToken(t,s,a).then(()=>{let e=(0,c.c3)();N.d.checkProgramExists(e).then(e=>l(e))}).then(()=>{N.d.setAccessKey()}).catch(alert)}}),s||(0,a.jsx)(x,{programsList:u})]})]})},w=()=>(0,a.jsx)(k,{});var T=w}},function(e){e.O(0,[354,319,702,617,774,888,179],function(){return e(e.s=2828)}),_N_E=e.O()}]);