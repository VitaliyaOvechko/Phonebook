"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[854],{8854:function(n,e,t){t.r(e),t.d(e,{default:function(){return J}});var r,a,o,i,c,s,u,l=t(9434),d=t(3634),p=t(2791),x=t(6916),h=function(n){return n.contacts.items},b=function(n){return n.filters},f=function(n){return n.contacts.isLoading},m=function(n){return n.contacts.error},g=(0,x.P1)([h,b],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),v=t(3165),j=t(168),Z=t(5867),k=Z.ZP.label(r||(r=(0,j.Z)(["\n  font-size: 18px;\n  font-weight: 700;\n"]))),w=Z.ZP.input(a||(a=(0,j.Z)(["\n  display: block;\n  margin-top: 10px;\n  margin-bottom: 20px;\n  width: 40%;\n  height: 25px;\n  border-radius: 4px;\n"]))),y=t(3329),C=function(){var n=(0,l.I0)(),e=(0,l.v9)(b);return(0,y.jsxs)(k,{children:["Find contacts by name",(0,y.jsx)(w,{type:"text",value:e,onChange:function(e){var t=e.target.value;n((0,v.f)(t))}})]})},P=t(9439),z=t(5984),L=Z.ZP.form(o||(o=(0,j.Z)([""]))),I=Z.ZP.label(i||(i=(0,j.Z)(["\n  cursor: pointer;\n  font-size: 16px;\n  font-weight: 700;\n"]))),_=Z.ZP.input(c||(c=(0,j.Z)(["\n  display: block;\n  margin-top: 5px;\n  margin-bottom: 20px;\n  width: 50%;\n  height: 25px;\n  border-radius: 4px;\n"]))),A=Z.ZP.button(s||(s=(0,j.Z)(["\n  margin-top: 20px;\n  padding: 10px 22px;\n  border-radius: 4px;\n  border: 1px solid black;\n  font-weight: 700;\n  font-size: 18px;\n  background-color: rgba(41, 39, 118, 56);\n  color: white;\n  cursor: pointer;\n  &:hover {\n    background-color: #bba9c0;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n    color: black;\n  }\n"])));function F(){var n=(0,p.useState)(""),e=(0,P.Z)(n,2),t=e[0],r=e[1],a=(0,p.useState)(""),o=(0,P.Z)(a,2),i=o[0],c=o[1],s=(0,l.I0)(),u=(0,l.v9)(h),x=function(n){switch(n.currentTarget.name){case"name":r(n.currentTarget.value);break;case"number":c(n.currentTarget.value);break;default:return}};return(0,y.jsxs)(L,{onSubmit:function(n){n.preventDefault();var e=n.target;u.find((function(n){return e.elements.name.value.toLowerCase()===n.name.toLowerCase()}))?alert("".concat(e.elements.name.value," is already in contacts")):s((0,d.uK)({name:t,number:i,id:(0,z.x0)()})),r(""),c("")},children:[(0,y.jsxs)(I,{children:["Name",(0,y.jsx)(_,{type:"text",name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:x,value:t})]}),(0,y.jsxs)(I,{children:["Number",(0,y.jsx)(_,{type:"tel",name:"number",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:x,value:i})]}),(0,y.jsx)(A,{type:"submit",children:"Add contact"})]})}var N,S,T,q=Z.ZP.p(u||(u=(0,j.Z)(["\n  margin: 0;\n  font-size: 20px;\n"]))),D=function(n){var e=n.contact,t=e.name,r=e.number;return(0,y.jsxs)(q,{children:[t,": ",r]})},K=Z.ZP.ul(N||(N=(0,j.Z)(["\n  margin: 0 100px 10px 5px;\n  list-style: none;\n  padding: 0;\n  display: flex;\n  gap: 20px;\n  flex-direction: column;\n"]))),B=Z.ZP.li(S||(S=(0,j.Z)(["\n  display: flex;\n  justify-content: space-between;\n  gap: 50px;\n"]))),E=Z.ZP.button(T||(T=(0,j.Z)(["\n  padding: 5px 20px;\n  border-radius: 5px;\n  font-weight: 600;\n  font-size: 14px;\n  background-color: solid;\n  border: 1px solid black;\n  color: black;\n  cursor: pointer;\n  &:hover {\n    background-color: #2a2878;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n    color: #dbe4ee;\n  }\n"]))),G=function(){var n=(0,l.I0)(),e=(0,l.v9)(g);return(0,y.jsx)(K,{children:e.map((function(e){return(0,y.jsxs)(B,{children:[(0,y.jsx)(D,{contact:e}),(0,y.jsx)(E,{onClick:function(){return n((0,d.GK)(e.id))},children:"Delete"})]},e.id)}))})};function J(){var n=(0,l.I0)(),e=(0,l.v9)(f),t=(0,l.v9)(m);return(0,p.useEffect)((function(){n((0,d.yF)())}),[n]),(0,y.jsxs)("div",{children:[(0,y.jsx)("h1",{children:"Phonebook"}),(0,y.jsx)(F,{}),(0,y.jsx)("h2",{children:"Contacts"}),(0,y.jsx)(C,{}),e&&(0,y.jsx)("p",{children:"Loading contacts..."}),t&&(0,y.jsx)("p",{children:t}),(0,y.jsx)(G,{})]})}}}]);
//# sourceMappingURL=854.075c395a.chunk.js.map