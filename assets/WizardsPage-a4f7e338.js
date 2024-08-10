var H=Object.defineProperty;var M=(i,s,t)=>s in i?H(i,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[s]=t;var a=(i,s,t)=>(M(i,typeof s!="symbol"?s+"":s,t),t);import{l as O,D as k,E as h,m as Y,n as R,q as W,s as K,j as e,F as r,K as p,v as m,t as w,L as $,w as b,x as o,r as d,T as E,C as T,y as P,z as D,i as G,k as N,O as J,P as I,N as Q}from"./index-bacb0495.js";const _={startIndex:1,animation:!1,animationSpeed:"0.3s",animationNextClass:"animate__animated animate__slideInRight animate__fast",animationPreviousClass:"animate__animated animate__slideInLeft animate__fast"},u=class u{constructor(s,t){a(this,"element");a(this,"options");a(this,"instanceUid");a(this,"steps");a(this,"btnNext");a(this,"btnPrev");a(this,"btnSubmit");a(this,"totalStepsNumber",0);a(this,"passedStepIndex",0);a(this,"currentStepIndex",1);a(this,"_goTo",s=>{h.trigger(this.element,"kt.stepper.change"),!(s===this.currentStepIndex||s>this.totalStepsNumber||s<0)&&(s=parseInt(s.toString()),this.passedStepIndex=this.currentStepIndex,this.currentStepIndex=s,this.refreshUI(),h.trigger(this.element,"kt.stepper.changed"))});a(this,"initHandlers",()=>{var s,t;(s=this.btnNext)==null||s.addEventListener("click",l=>{l.preventDefault(),h.trigger(this.element,"kt.stepper.next",l)}),(t=this.btnPrev)==null||t.addEventListener("click",l=>{l.preventDefault(),h.trigger(this.element,"kt.stepper.previous",l)}),Y.on(this.element,'[data-kt-stepper-action="step"]',"click",l=>{if(l.preventDefault(),this.steps&&this.steps.length>0){for(let c=0;c<this.steps.length;c++)if(this.steps[c]===this.element){const n=c+1,x=this._getStepDirection(n);h.trigger(this.element,`stepper.${x}`,l);return}}})});a(this,"_getStepDirection",s=>s>this.currentStepIndex?"next":"previous");a(this,"getStepContent",s=>{const t=this.element.querySelectorAll('[data-kt-stepper-element="content"]');return t&&t[s-1]?t[s-1]:!1});a(this,"getLastStepIndex",()=>this.totalStepsNumber);a(this,"getTotalStepsNumber",()=>this.totalStepsNumber);a(this,"refreshUI",()=>{let s="";this.isLastStep()?s="last":this.isFirstStep()?s="first":s="between",this.element.classList.remove("last"),this.element.classList.remove("first"),this.element.classList.remove("between"),this.element.classList.add(s);const t=this.element.querySelectorAll('[data-kt-stepper-element="nav"], [data-kt-stepper-element="content"], [data-kt-stepper-element="info"]');if(!(!t||t.length<=0))for(let l=0,c=t.length;l<c;l++){const n=t[l],x=R(n)+1;if(n.classList.remove("current"),n.classList.remove("completed"),n.classList.remove("pending"),x===this.currentStepIndex){if(n.classList.add("current"),this.options.animation!==!1&&n.getAttribute("data-kt-stepper-element")==="content"){W.set(n,"animationDuration",this.options.animationSpeed);const f=this._getStepDirection(this.passedStepIndex)==="previous"?this.options.animationPreviousClass:this.options.animationNextClass;K.animateClass(n,f)}}else x<this.currentStepIndex?n.classList.add("completed"):n.classList.add("pending")}});a(this,"isLastStep",()=>this.currentStepIndex===this.totalStepsNumber);a(this,"isFirstStep",()=>this.currentStepIndex===1);a(this,"isBetweenStep",()=>this.isLastStep()===!1&&this.isFirstStep()===!1);a(this,"goto",s=>this._goTo(s));a(this,"goNext",()=>this.goto(this.getNextStepIndex()));a(this,"goPrev",()=>this.goto(this.getPrevStepIndex()));a(this,"goFirst",()=>this.goto(1));a(this,"goLast",()=>this.goto(this.getLastStepIndex()));a(this,"getCurrentStepIndex",()=>this.currentStepIndex);a(this,"getNextStepIndex",()=>this.totalStepsNumber>=this.currentStepIndex+1?this.currentStepIndex+1:this.totalStepsNumber);a(this,"getPassedStepIndex",()=>this.passedStepIndex);a(this,"getPrevStepIndex",()=>this.currentStepIndex-1>1?this.currentStepIndex-1:1);a(this,"getElement",s=>this.element);a(this,"on",(s,t)=>h.on(this.element,s,t));a(this,"one",(s,t)=>h.one(this.element,s,t));a(this,"off",(s,t)=>h.off(this.element,s,t));a(this,"destroy",()=>{console.log("destroy stepper")});a(this,"trigger",(s,t)=>h.trigger(this.element,s,t));var l;this.element=s,this.options=Object.assign(_,t),this.instanceUid=O("stepper"),this.steps=this.element.querySelectorAll('[data-kt-stepper-element="nav"]'),this.btnNext=this.element.querySelector('[data-kt-stepper-action="next"]'),this.btnPrev=this.element.querySelector('[data-kt-stepper-action="previous"]'),this.btnSubmit=this.element.querySelector('[data-kt-stepper-action="submit"]'),this.totalStepsNumber=((l=this.steps)==null?void 0:l.length)|0,this.passedStepIndex=0,this.currentStepIndex=1,this.options.startIndex>1&&this._goTo(this.options.startIndex),this.initHandlers(),k.set(this.element,"stepper",this)}static hasInstace(s){return k.has(s,"stepper")}static getInstance(s){if(s!==null&&u.hasInstace(s)){const t=k.get(s,"stepper");if(t)return t}}static createInstances(s){document.body.querySelectorAll(s).forEach(l=>{const c=l;let n=u.getInstance(c);n||(n=new u(c,_))})}static bootstrap(s="[data-kt-stepper]"){u.createInstances(s)}};a(u,"createInsance",(s,t=_)=>{if(!s)return null;let l=u.getInstance(s);return l||(l=new u(s,t)),l});let v=u;const q=()=>e.jsxs("div",{className:"w-100",children:[e.jsxs("div",{className:"pb-10 pb-lg-15",children:[e.jsxs("h2",{className:"fw-bolder d-flex align-items-center text-gray-900",children:["Choose Account Type",e.jsx("i",{className:"fas fa-exclamation-circle ms-2 fs-7","data-bs-toggle":"tooltip",title:"Billing is issued based on your selected account type"})]}),e.jsxs("div",{className:"text-gray-500 fw-bold fs-6",children:["If you need more info, please check out",e.jsxs("a",{href:"/dashboard",className:"link-primary fw-bolder",children:[" ","Help Page"]}),"."]})]}),e.jsx("div",{className:"fv-row",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-6",children:[e.jsx(r,{type:"radio",className:"btn-check",name:"accountType",value:"personal",id:"kt_create_account_form_account_type_personal"}),e.jsxs("label",{className:"btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center mb-10",htmlFor:"kt_create_account_form_account_type_personal",children:[e.jsx(p,{iconName:"address-book",className:"fs-3x me-5"}),e.jsxs("span",{className:"d-block fw-bold text-start",children:[e.jsx("span",{className:"text-gray-900 fw-bolder d-block fs-4 mb-2",children:"Personal Account"}),e.jsx("span",{className:"text-gray-500 fw-bold fs-6",children:"If you need more info, please check it out"})]})]})]}),e.jsxs("div",{className:"col-lg-6",children:[e.jsx(r,{type:"radio",className:"btn-check",name:"accountType",value:"corporate",id:"kt_create_account_form_account_type_corporate"}),e.jsxs("label",{className:"btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center",htmlFor:"kt_create_account_form_account_type_corporate",children:[e.jsx(p,{iconName:"briefcase",className:"fs-3x me-5"}),e.jsxs("span",{className:"d-block fw-bold text-start",children:[e.jsx("span",{className:"text-gray-900 fw-bolder d-block fs-4 mb-2",children:"Corporate Account"}),e.jsx("span",{className:"text-gray-500 fw-bold fs-6",children:"Create corporate account to mane users"})]})]})]}),e.jsx("div",{className:"text-danger mt-2",children:e.jsx(m,{name:"accountType"})})]})})]}),A=()=>e.jsxs("div",{className:"w-100",children:[e.jsxs("div",{className:"pb-10 pb-lg-15",children:[e.jsx("h2",{className:"fw-bolder text-gray-900",children:"Account Info"}),e.jsxs("div",{className:"text-gray-500 fw-bold fs-6",children:["If you need more info, please check out",e.jsxs("a",{href:"/dashboard",className:"link-primary fw-bolder",children:[" ","Help Page"]}),"."]})]}),e.jsxs("div",{className:"mb-10 fv-row",children:[e.jsxs("label",{className:"d-flex align-items-center form-label mb-3",children:["Specify Team Size",e.jsx("i",{className:"fas fa-exclamation-circle ms-2 fs-7","data-bs-toggle":"tooltip",title:"Provide your team size to help us setup your billing"})]}),e.jsxs("div",{className:"row mb-2","data-kt-buttons":"true",children:[e.jsxs("div",{className:"col",children:[e.jsx(r,{type:"radio",className:"btn-check",name:"accountTeamSize",value:"1-1",id:"kt_account_team_size_select_1"}),e.jsx("label",{className:"btn btn-outline btn-outline-dashed btn-outline-default w-100 p-4",htmlFor:"kt_account_team_size_select_1",children:e.jsx("span",{className:"fw-bolder fs-3",children:"1-1"})})]}),e.jsxs("div",{className:"col",children:[e.jsx(r,{type:"radio",className:"btn-check",name:"accountTeamSize",value:"2-10",id:"kt_account_team_size_select_2"}),e.jsx("label",{className:"btn btn-outline btn-outline-dashed btn-outline-default w-100 p-4",htmlFor:"kt_account_team_size_select_2",children:e.jsx("span",{className:"fw-bolder fs-3",children:"2-10"})})]}),e.jsxs("div",{className:"col",children:[e.jsx(r,{type:"radio",className:"btn-check",name:"accountTeamSize",value:"10-50",id:"kt_account_team_size_select_3"}),e.jsx("label",{className:"btn btn-outline btn-outline-dashed btn-outline-default w-100 p-4",htmlFor:"kt_account_team_size_select_3",children:e.jsx("span",{className:"fw-bolder fs-3",children:"10-50"})})]}),e.jsxs("div",{className:"col",children:[e.jsx(r,{type:"radio",className:"btn-check",name:"accountTeamSize",value:"50+",id:"kt_account_team_size_select_4"}),e.jsx("label",{className:"btn btn-outline btn-outline-dashed btn-outline-default w-100 p-4",htmlFor:"kt_account_team_size_select_4",children:e.jsx("span",{className:"fw-bolder fs-3",children:"50+"})})]})]}),e.jsx("div",{className:"form-text",children:"Customers will see this shortened version of your statement descriptor"})]}),e.jsxs("div",{className:"mb-10 fv-row",children:[e.jsx("label",{className:"form-label mb-3",children:"Team Account Name"}),e.jsx(r,{type:"text",className:"form-control form-control-lg form-control-solid",name:"accountName"}),e.jsx("div",{className:"text-danger mt-2",children:e.jsx(m,{name:"accountName"})})]}),e.jsxs("div",{className:"mb-0 fv-row",children:[e.jsxs("label",{className:"d-flex align-items-center form-label mb-5",children:["Select Account Plan",e.jsx("i",{className:"fas fa-exclamation-circle ms-2 fs-7","data-bs-toggle":"tooltip",title:"Monthly billing will be based on your account plan"})]}),e.jsxs("div",{className:"mb-0",children:[e.jsxs("label",{className:"d-flex flex-stack mb-5 cursor-pointer",children:[e.jsxs("span",{className:"d-flex align-items-center me-2",children:[e.jsx("span",{className:"symbol symbol-50px me-6",children:e.jsx("span",{className:"symbol-label",children:e.jsx(p,{iconName:"bank",className:"fs-1 text-gray-600"})})}),e.jsxs("span",{className:"d-flex flex-column",children:[e.jsx("span",{className:"fw-bolder text-gray-800 text-hover-primary fs-5",children:"Company Account"}),e.jsx("span",{className:"fs-6 fw-bold text-gray-500",children:"Use images to enhance your post flow"})]})]}),e.jsx("span",{className:"form-check form-check-custom form-check-solid",children:e.jsx(r,{className:"form-check-input",type:"radio",name:"accountPlan",value:"1"})})]}),e.jsxs("label",{className:"d-flex flex-stack mb-5 cursor-pointer",children:[e.jsxs("span",{className:"d-flex align-items-center me-2",children:[e.jsx("span",{className:"symbol symbol-50px me-6",children:e.jsx("span",{className:"symbol-label",children:e.jsx(p,{iconName:"chart",className:"fs-1 text-gray-600"})})}),e.jsxs("span",{className:"d-flex flex-column",children:[e.jsx("span",{className:"fw-bolder text-gray-800 text-hover-primary fs-5",children:"Developer Account"}),e.jsx("span",{className:"fs-6 fw-bold text-gray-500",children:"Use images to your post time"})]})]}),e.jsx("span",{className:"form-check form-check-custom form-check-solid",children:e.jsx(r,{className:"form-check-input",type:"radio",name:"accountPlan",value:"2"})})]}),e.jsxs("label",{className:"d-flex flex-stack mb-0 cursor-pointer",children:[e.jsxs("span",{className:"d-flex align-items-center me-2",children:[e.jsx("span",{className:"symbol symbol-50px me-6",children:e.jsx("span",{className:"symbol-label",children:e.jsx(p,{iconName:"chart-pie-4",className:"fs-1 text-gray-600"})})}),e.jsxs("span",{className:"d-flex flex-column",children:[e.jsx("span",{className:"fw-bolder text-gray-800 text-hover-primary fs-5",children:"Testing Account"}),e.jsx("span",{className:"fs-6 fw-bold text-gray-500",children:"Use images to enhance time travel rivers"})]})]}),e.jsx("span",{className:"form-check form-check-custom form-check-solid",children:e.jsx(r,{className:"form-check-input",type:"radio",name:"accountPlan",value:"3"})})]})]})]})]}),z=()=>e.jsxs("div",{className:"w-100",children:[e.jsxs("div",{className:"pb-10 pb-lg-12",children:[e.jsx("h2",{className:"fw-bolder text-gray-900",children:"Business Details"}),e.jsxs("div",{className:"text-gray-500 fw-bold fs-6",children:["If you need more info, please check out",e.jsxs("a",{href:"/dashboard",className:"link-primary fw-bolder",children:[" ","Help Page"]}),"."]})]}),e.jsxs("div",{className:"fv-row mb-10",children:[e.jsx("label",{className:"form-label required",children:"Business Name"}),e.jsx(r,{name:"businessName",className:"form-control form-control-lg form-control-solid"}),e.jsx("div",{className:"text-danger mt-2",children:e.jsx(m,{name:"businessName"})})]}),e.jsxs("div",{className:"fv-row mb-10",children:[e.jsx("label",{className:"d-flex align-items-center form-label",children:e.jsx("span",{className:"required",children:"Shortened Descriptor"})}),e.jsx(r,{name:"businessDescriptor",className:"form-control form-control-lg form-control-solid"}),e.jsx("div",{className:"text-danger mt-2",children:e.jsx(m,{name:"businessDescriptor"})}),e.jsx("div",{className:"form-text",children:"Customers will see this shortened version of your statement descriptor"})]}),e.jsxs("div",{className:"fv-row mb-10",children:[e.jsx("label",{className:"form-label required",children:"Corporation Type"}),e.jsxs(r,{as:"select",name:"businessType",className:"form-select form-select-lg form-select-solid",children:[e.jsx("option",{}),e.jsx("option",{value:"1",children:"S Corporation"}),e.jsx("option",{value:"1",children:"C Corporation"}),e.jsx("option",{value:"2",children:"Sole Proprietorship"}),e.jsx("option",{value:"3",children:"Non-profit"}),e.jsx("option",{value:"4",children:"Limited Liability"}),e.jsx("option",{value:"5",children:"General Partnership"})]}),e.jsx("div",{className:"text-danger mt-2",children:e.jsx(m,{name:"businessType"})})]}),e.jsxs("div",{className:"fv-row mb-10",children:[e.jsx("label",{className:"form-label",children:"Business Description"}),e.jsx(r,{as:"textarea",name:"businessDescription",className:"form-control form-control-lg form-control-solid",rows:3})]}),e.jsxs("div",{className:"fv-row mb-0",children:[e.jsx("label",{className:"fs-6 fw-bold form-label required",children:"Contact Email"}),e.jsx(r,{name:"businessEmail",className:"form-control form-control-lg form-control-solid"}),e.jsx("div",{className:"text-danger mt-2",children:e.jsx(m,{name:"businessEmail"})})]})]}),L=()=>e.jsxs("div",{className:"w-100",children:[e.jsxs("div",{className:"pb-10 pb-lg-15",children:[e.jsx("h2",{className:"fw-bolder text-gray-900",children:"Billing Details"}),e.jsxs("div",{className:"text-gray-500 fw-bold fs-6",children:["If you need more info, please check out",e.jsxs("a",{href:"/dashboard",className:"text-primary fw-bolder",children:[" ","Help Page"]}),"."]})]}),e.jsxs("div",{className:"d-flex flex-column mb-7 fv-row",children:[e.jsxs("label",{className:"d-flex align-items-center fs-6 fw-bold form-label mb-2",children:[e.jsx("span",{className:"required",children:"Name On Card"}),e.jsx("i",{className:"fas fa-exclamation-circle ms-2 fs-7","data-bs-toggle":"tooltip",title:"Specify a card holder's name"})]}),e.jsx(r,{type:"text",className:"form-control form-control-solid",placeholder:"",name:"nameOnCard"}),e.jsx("div",{className:"text-danger mt-2",children:e.jsx(m,{name:"nameOnCard"})})]}),e.jsxs("div",{className:"d-flex flex-column mb-7 fv-row",children:[e.jsx("label",{className:"required fs-6 fw-bold form-label mb-2",children:"Card Number"}),e.jsxs("div",{className:"position-relative",children:[e.jsx(r,{type:"text",className:"form-control form-control-solid",placeholder:"Enter card number",name:"cardNumber"}),e.jsx("div",{className:"text-danger mt-2",children:e.jsx(m,{name:"cardNumber"})}),e.jsxs("div",{className:"position-absolute translate-middle-y top-50 end-0 me-5",children:[e.jsx("img",{src:w("media/svg/card-logos/visa.svg"),alt:"",className:"h-25px"}),e.jsx("img",{src:w("media/svg/card-logos/mastercard.svg"),alt:"",className:"h-25px"}),e.jsx("img",{src:w("media/svg/card-logos/american-express.svg"),alt:"",className:"h-25px"})]})]})]}),e.jsxs("div",{className:"row mb-10",children:[e.jsxs("div",{className:"col-md-8 fv-row",children:[e.jsx("label",{className:"required fs-6 fw-bold form-label mb-2",children:"Expiration Date"}),e.jsxs("div",{className:"row fv-row",children:[e.jsxs("div",{className:"col-6",children:[e.jsxs(r,{as:"select",name:"cardExpiryMonth",className:"form-select form-select-solid",children:[e.jsx("option",{}),e.jsx("option",{value:"1",children:"1"}),e.jsx("option",{value:"2",children:"2"}),e.jsx("option",{value:"3",children:"3"}),e.jsx("option",{value:"4",children:"4"}),e.jsx("option",{value:"5",children:"5"}),e.jsx("option",{value:"6",children:"6"}),e.jsx("option",{value:"7",children:"7"}),e.jsx("option",{value:"8",children:"8"}),e.jsx("option",{value:"9",children:"9"}),e.jsx("option",{value:"10",children:"10"}),e.jsx("option",{value:"11",children:"11"}),e.jsx("option",{value:"12",children:"12"})]}),e.jsx("div",{className:"text-danger mt-2",children:e.jsx(m,{name:"cardExpiryMonth"})})]}),e.jsxs("div",{className:"col-6",children:[e.jsxs(r,{as:"select",name:"cardExpiryYear",className:"form-select form-select-solid",children:[e.jsx("option",{}),e.jsx("option",{value:"2021",children:"2021"}),e.jsx("option",{value:"2022",children:"2022"}),e.jsx("option",{value:"2023",children:"2023"}),e.jsx("option",{value:"2024",children:"2024"}),e.jsx("option",{value:"2025",children:"2025"}),e.jsx("option",{value:"2026",children:"2026"}),e.jsx("option",{value:"2027",children:"2027"}),e.jsx("option",{value:"2028",children:"2028"}),e.jsx("option",{value:"2029",children:"2029"}),e.jsx("option",{value:"2030",children:"2030"}),e.jsx("option",{value:"2031",children:"2031"})]}),e.jsx("div",{className:"text-danger mt-2",children:e.jsx(m,{name:"cardExpiryYear"})})]})]})]}),e.jsxs("div",{className:"col-md-4 fv-row",children:[e.jsxs("label",{className:"d-flex align-items-center fs-6 fw-bold form-label mb-2",children:[e.jsx("span",{className:"required",children:"CVV"}),e.jsx("i",{className:"fas fa-exclamation-circle ms-2 fs-7","data-bs-toggle":"tooltip",title:"Enter a card CVV code"})]}),e.jsxs("div",{className:"position-relative",children:[e.jsx(r,{type:"text",className:"form-control form-control-solid",minLength:3,maxLength:4,placeholder:"CVV",name:"cardCvv"}),e.jsx("div",{className:"text-danger mt-2",children:e.jsx(m,{name:"cardCvv"})}),e.jsx("div",{className:"position-absolute translate-middle-y top-50 end-0 me-3",children:e.jsx(p,{iconName:"credit-cart",className:"fs-2hx"})})]})]})]}),e.jsxs("div",{className:"d-flex flex-stack",children:[e.jsxs("div",{className:"me-5",children:[e.jsx("label",{className:"fs-6 fw-bold form-label",children:"Save Card for further billing?"}),e.jsx("div",{className:"fs-7 fw-bold text-gray-500",children:"If you need more info, please check budget planning"})]}),e.jsxs("label",{className:"form-check form-switch form-check-custom form-check-solid",children:[e.jsx(r,{className:"form-check-input",type:"checkbox",value:"1",checked:!0}),e.jsx("span",{className:"form-check-label fw-bold text-gray-500",children:"Save Card"})]})]})]}),F=()=>e.jsxs("div",{className:"w-100",children:[e.jsxs("div",{className:"pb-8 pb-lg-10",children:[e.jsx("h2",{className:"fw-bolder text-gray-900",children:"Your Are Done!"}),e.jsxs("div",{className:"text-gray-500 fw-bold fs-6",children:["If you need more info, please",e.jsxs($,{to:"/auth/login",className:"link-primary fw-bolder",children:[" ","Sign In"]}),"."]})]}),e.jsxs("div",{className:"mb-0",children:[e.jsx("div",{className:"fs-6 text-gray-600 mb-5",children:"Writing headlines for blog posts is as much an art as it is a science and probably warrants its own post, but for all advise is with what works for your great & amazing audience."}),e.jsxs("div",{className:"notice d-flex bg-light-warning rounded border-warning border border-dashed p-6",children:[e.jsx(p,{iconName:"information-5",className:"fs-2tx text-warning me-4"}),e.jsx("div",{className:"d-flex flex-stack flex-grow-1",children:e.jsxs("div",{className:"fw-bold",children:[e.jsx("h4",{className:"text-gray-800 fw-bolder",children:"We need your attention!"}),e.jsxs("div",{className:"fs-6 text-gray-600",children:["To start using great tools, please, please",e.jsxs("a",{href:"/dashboard",className:"fw-bolder",children:[" ","Create Team Platform"]})]})]})})]})]})]}),j=[b({accountType:o().required().label("Account Type")}),b({accountName:o().required().label("Account Name")}),b({businessName:o().required().label("Business Name"),businessDescriptor:o().required().label("Shortened Descriptor"),businessType:o().required().label("Corporation Type"),businessEmail:o().required().label("Contact Email")}),b({nameOnCard:o().required().label("Name On Card"),cardNumber:o().required().label("Card Number"),cardExpiryMonth:o().required().label("Expiration Month"),cardExpiryYear:o().required().label("Expiration Year"),cardCvv:o().required().label("CVV")})],B={accountType:"personal",accountTeamSize:"50+",accountName:"",accountPlan:"1",businessName:"Keenthemes Inc.",businessDescriptor:"KEENTHEMES",businessType:"1",businessDescription:"",businessEmail:"corp@support.com",nameOnCard:"Max Doe",cardNumber:"4111 1111 1111 1111",cardExpiryMonth:"1",cardExpiryYear:"2025",cardCvv:"123",saveCard:"1"},X=()=>{const i=d.useRef(null),[s,t]=d.useState(null),[l,c]=d.useState(j[0]),[n]=d.useState(B),x=()=>{t(v.createInsance(i.current))},f=()=>{s&&(s.goPrev(),c(j[s.currentStepIndex-1]))},g=(y,S)=>{s&&(s.currentStepIndex!==s.totalStepsNumber?s.goNext():(s.goto(1),S.resetForm()),console.log(y),c(j[s.currentStepIndex-1]))};return d.useEffect(()=>{i.current&&x()},[i]),e.jsxs(e.Fragment,{children:[e.jsx(E,{}),e.jsx(T,{children:e.jsxs("div",{ref:i,className:"stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid",id:"kt_create_account_stepper",children:[e.jsx("div",{className:"card d-flex justify-content-center justify-content-xl-start flex-row-auto w-100 w-xl-300px w-xxl-400px me-9",children:e.jsx("div",{className:"card-body px-6 px-lg-10 px-xxl-15 py-20",children:e.jsxs("div",{className:"stepper-nav",children:[e.jsxs("div",{className:"stepper-item current","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper",children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"1"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Account Type"}),e.jsx("div",{className:"stepper-desc fw-semibold",children:"Setup Your Account Details"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper",children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"2"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Account Settings"}),e.jsx("div",{className:"stepper-desc fw-semibold",children:"Setup Your Account Settings"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper",children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"3"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Business Info"}),e.jsx("div",{className:"stepper-desc fw-semibold",children:"Your Business Related Info"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsxs("div",{className:"stepper-item","data-kt-stepper-element":"nav",children:[e.jsxs("div",{className:"stepper-wrapper",children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"4"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Billing Details"}),e.jsx("div",{className:"stepper-desc fw-semibold",children:"Set Your Payment Methods"})]})]}),e.jsx("div",{className:"stepper-line h-40px"})]}),e.jsx("div",{className:"stepper-item","data-kt-stepper-element":"nav",children:e.jsxs("div",{className:"stepper-wrapper",children:[e.jsxs("div",{className:"stepper-icon w-40px h-40px",children:[e.jsx("i",{className:"stepper-check fas fa-check"}),e.jsx("span",{className:"stepper-number",children:"5"})]}),e.jsxs("div",{className:"stepper-label",children:[e.jsx("h3",{className:"stepper-title",children:"Completed"}),e.jsx("div",{className:"stepper-desc fw-semibold",children:"Woah, we are here"})]})]})})]})})}),e.jsx("div",{className:"d-flex flex-row-fluid flex-center bg-body rounded",children:e.jsx(P,{validationSchema:l,initialValues:n,onSubmit:g,children:()=>e.jsxs(D,{className:"py-20 w-100 w-xl-700px px-9",noValidate:!0,id:"kt_create_account_form",placeholder:void 0,children:[e.jsx("div",{className:"current","data-kt-stepper-element":"content",children:e.jsx(q,{})}),e.jsx("div",{"data-kt-stepper-element":"content",children:e.jsx(A,{})}),e.jsx("div",{"data-kt-stepper-element":"content",children:e.jsx(z,{})}),e.jsx("div",{"data-kt-stepper-element":"content",children:e.jsx(L,{})}),e.jsx("div",{"data-kt-stepper-element":"content",children:e.jsx(F,{})}),e.jsxs("div",{className:"d-flex flex-stack pt-10",children:[e.jsx("div",{className:"mr-2",children:e.jsxs("button",{onClick:f,type:"button",className:"btn btn-lg btn-light-primary me-3","data-kt-stepper-action":"previous",children:[e.jsx(p,{iconName:"arrow-left",className:"fs-4 me-1"}),"Back"]})}),e.jsx("div",{children:e.jsx("button",{type:"submit",className:"btn btn-lg btn-primary me-3",children:e.jsxs("span",{className:"indicator-label",children:[(s==null?void 0:s.currentStepIndex)!==((s==null?void 0:s.totalStepsNumber)||2)-1&&"Continue",(s==null?void 0:s.currentStepIndex)===((s==null?void 0:s.totalStepsNumber)||2)-1&&"Submit",e.jsx(p,{iconName:"arrow-right",className:"fs-3 ms-2 me-0"})]})})})]})]})})})]})})]})},Z=()=>{const i=d.useRef(null),[s,t]=d.useState(null),[l,c]=d.useState(j[0]),[n]=d.useState(B),[x,f]=d.useState(!1),g=()=>{t(v.createInsance(i.current))},y=()=>{s&&(s.goPrev(),c(j[s.currentStepIndex-1]),f(s.currentStepIndex===s.totalStepsNumber))},S=(V,U)=>{s&&(s.currentStepIndex!==s.totalStepsNumber?s.goNext():(s.goto(1),U.resetForm()),f(s.currentStepIndex===s.totalStepsNumber),console.log(V),c(j[s.currentStepIndex-1]))};return d.useEffect(()=>{i.current&&g()},[i]),e.jsxs(e.Fragment,{children:[e.jsx(E,{}),e.jsx(T,{children:e.jsx("div",{className:"card",children:e.jsx("div",{className:"card-body",children:e.jsxs("div",{ref:i,className:"stepper stepper-links d-flex flex-column pt-15",id:"kt_create_account_stepper",children:[e.jsxs("div",{className:"stepper-nav mb-5",children:[e.jsx("div",{className:"stepper-item current","data-kt-stepper-element":"nav",children:e.jsx("h3",{className:"stepper-title",children:"Account Type"})}),e.jsx("div",{className:"stepper-item","data-kt-stepper-element":"nav",children:e.jsx("h3",{className:"stepper-title",children:"Account Info"})}),e.jsx("div",{className:"stepper-item","data-kt-stepper-element":"nav",children:e.jsx("h3",{className:"stepper-title",children:"Business Info"})}),e.jsx("div",{className:"stepper-item","data-kt-stepper-element":"nav",children:e.jsx("h3",{className:"stepper-title",children:"Billing Details"})}),e.jsx("div",{className:"stepper-item","data-kt-stepper-element":"nav",children:e.jsx("h3",{className:"stepper-title",children:"Completed"})})]}),e.jsx(P,{validationSchema:l,initialValues:n,onSubmit:S,children:()=>e.jsxs(D,{className:"mx-auto mw-600px w-100 pt-15 pb-10",id:"kt_create_account_form",placeholder:void 0,children:[e.jsx("div",{className:"current","data-kt-stepper-element":"content",children:e.jsx(q,{})}),e.jsx("div",{"data-kt-stepper-element":"content",children:e.jsx(A,{})}),e.jsx("div",{"data-kt-stepper-element":"content",children:e.jsx(z,{})}),e.jsx("div",{"data-kt-stepper-element":"content",children:e.jsx(L,{})}),e.jsx("div",{"data-kt-stepper-element":"content",children:e.jsx(F,{})}),e.jsxs("div",{className:"d-flex flex-stack pt-15",children:[e.jsx("div",{className:"mr-2",children:e.jsxs("button",{onClick:y,type:"button",className:"btn btn-lg btn-light-primary me-3","data-kt-stepper-action":"previous",children:[e.jsx(p,{iconName:"arrow-left",className:"fs-4 me-1"}),"Back"]})}),e.jsx("div",{children:e.jsx("button",{type:"submit",className:"btn btn-lg btn-primary me-3",children:e.jsxs("span",{className:"indicator-label",children:[!x&&"Continue",x&&"Submit",e.jsx(p,{iconName:"arrow-right",className:"fs-3 ms-2 me-0"})]})})})]})]})})]})})})})]})},C=[{title:"Wizards",path:"/crafted/pages/wizards/horizontal",isSeparator:!1,isActive:!1},{title:"",path:"",isSeparator:!0,isActive:!1}],te=()=>e.jsx(G,{children:e.jsxs(N,{element:e.jsx(J,{}),children:[e.jsx(N,{path:"horizontal",element:e.jsxs(e.Fragment,{children:[e.jsx(I,{breadcrumbs:C,children:"Horizontal"}),e.jsx(Z,{})]})}),e.jsx(N,{path:"vertical",element:e.jsxs(e.Fragment,{children:[e.jsx(I,{breadcrumbs:C,children:"Vertical"}),e.jsx(X,{})]})}),e.jsx(N,{index:!0,element:e.jsx(Q,{to:"/crafted/pages/wizards/horizontal"})})]})});export{te as default};
