import{j as e,N as a,r}from"./index-DSbTiKWN.js";const i=()=>e.jsx("button",{className:"w-full bg-primary py-2 px-4 m-2 lg:max-h-12 rounded-md text-white hover:bg-white hover:text-primary",children:e.jsx(a,{to:"/login",children:"Keluar"})}),j=({onIsSideOpenChange:c})=>{const[t,l]=r.useState(!1),o=()=>{l(!t)},[d,x]=r.useState(!0),m=()=>{const s=!d;x(s),c(s)},h=[{to:"/dashboard/profile",text:"Profil"}],n=()=>e.jsx("ul",{onClick:()=>l(!1),className:"mt-2 mb-4 flex flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-4 lg:mr-4",children:h.map(s=>e.jsx(a,{to:s.to,className:"font-normal text-black py-2 px-2 rounded-md hover:bg-gray-100 hover:text-deceiver",children:e.jsx("li",{className:"text-nowrap",children:s.text})},s.to))}),p=()=>e.jsxs("div",{className:"flex",children:[n(),e.jsx(i,{})]}),g=()=>e.jsxs(e.Fragment,{children:[n(),e.jsx("div",{onClick:()=>l(!1),className:"flex flex-col items-center gap-x-1",children:e.jsx(i,{})})]});return e.jsxs("nav",{className:"sticky top-0 w-full z-10 bg-white shadow-md border-b border-gray-200 px-4 py-2 lg:px-8 lg:py-4",children:[e.jsxs("div",{className:"max-w-screen-xl mx-auto flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("button",{className:"mx-2",onClick:m,children:e.jsx("i",{className:"bi bi-menu-button"})}),e.jsx(a,{to:"/",className:"cursor-pointer py-1.5 font-medium text-black",children:"Viartha POS"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{className:"hidden lg:block",children:p()}),e.jsx("div",{className:"lg:hidden",children:e.jsx("button",{className:"ml-auto lg:hidden",onClick:o,children:t?e.jsx("i",{className:"bi bi-dash"}):e.jsx("i",{className:"bi bi-justify"})})})]})]}),e.jsx("div",{className:"lg:hidden",children:t&&g()})]})};export{j as default};
