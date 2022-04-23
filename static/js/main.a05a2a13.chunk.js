(this["webpackJsonpfunction-form"]=this["webpackJsonpfunction-form"]||[]).push([[0],{71:function(e,t,a){e.exports=a(87)},76:function(e,t,a){},77:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),i=a.n(l),c=(a(76),a(77),a(24)),o=a(9),u=a(129),m=a(125),s=a(119),d=a(122),v=a(50),b=a.n(v),f=a(51),g=a.n(f),p=Object(s.a)((function(e){return{root:{marginRight:e.spacing(1),width:"95%",flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));var E=function(e){var t=e.submit,a=Object(n.useState)(""),l=Object(o.a)(a,2),i=l[0],c=l[1],s=Object(n.useState)(""),v=Object(o.a)(s,2),f=v[0],E=v[1],h=Object(n.useState)(""),j=Object(o.a)(h,2),O=j[0],x=j[1],C=Object(n.useState)(""),S=Object(o.a)(C,2),y=S[0],W=S[1],w=Object(n.useState)(""),N=Object(o.a)(w,2),k=N[0],P=N[1],D=Object(n.useState)(""),F=Object(o.a)(D,2),z=F[0],B=F[1],T=Object(n.useState)(""),q=Object(o.a)(T,2),A=q[0],J=q[1],R=p();return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t({CEP:i,address:f,district:O,number:y,complement:k,city:z,state:A})}},r.a.createElement(d.a,{item:!0,xs:6},r.a.createElement(u.a,{id:"cep",label:"CEP",fullWidth:!0,type:"text",variant:"outlined",margin:"normal",value:i,onChange:function(e){b()(e.target.value).then((function(e){E(e.street),x(e.neighborhood),B(e.city);var t=e.state,a=g.a.get(t).name;J(a)})),c(e.target.value)}})),r.a.createElement(u.a,{id:"address",label:"Endere\xe7o",type:"text",variant:"outlined",fullWidth:!0,margin:"normal",value:f,onChange:function(e){E(e.target.value)}}),r.a.createElement(d.a,{container:!0,spacing:1},r.a.createElement(d.a,{item:!0,xs:9},r.a.createElement(u.a,{id:"district",label:"Bairro",type:"district",variant:"outlined",margin:"normal",fullWidth:!0,value:O,onChange:function(e){x(e.target.value)}})),r.a.createElement(d.a,{item:!0,xs:3},r.a.createElement(u.a,{id:"number",fullWidth:!0,label:"N\xfamero",type:"number",variant:"outlined",margin:"normal",value:y,onChange:function(e){W(e.target.value)}}))),r.a.createElement(u.a,{id:"complement",label:"Complemento",type:"text",variant:"outlined",fullWidth:!0,margin:"normal",value:k,onChange:function(e){P(e.target.value)}}),r.a.createElement(d.a,{container:!0,spacing:1},r.a.createElement(d.a,{item:!0,xs:7},r.a.createElement(u.a,{id:"city",label:"Cidade",type:"text",variant:"outlined",margin:"normal",className:R.root,value:z,onChange:function(e){B(e.target.value)}})),r.a.createElement(d.a,{item:!0,xs:5},r.a.createElement(u.a,{id:"state",label:"Estado",value:A,onChange:function(e){J(e.target.value)},type:"text",variant:"outlined",margin:"normal"}))),r.a.createElement(m.a,{variant:"contained",color:"primary",type:"submit",fullWidth:!0},"Finalizar Cadastro"))},h=a(126),j=a(131),O=r.a.createContext();var x=function(e){var t=function(e){var t={};for(var a in e)t[a]={valid:!0,text:""};return t}(e),a=Object(n.useState)(t),r=Object(o.a)(a,2),l=r[0],i=r[1];return[l,function(t){var a=t.target,n=a.name,r=a.value,o=Object(c.a)({},l);o[n]=e[n](r),i(o)},function(){for(var e in l)if(!l[e].valid)return!1;return!0}]};var C=function(e){var t=e.submit,a=Object(n.useState)(""),l=Object(o.a)(a,2),i=l[0],c=l[1],s=Object(n.useState)(""),v=Object(o.a)(s,2),b=v[0],f=v[1],g=Object(n.useState)(""),p=Object(o.a)(g,2),E=p[0],C=p[1],S=Object(n.useState)(!0),y=Object(o.a)(S,2),W=y[0],w=y[1],N=Object(n.useState)(!0),k=Object(o.a)(N,2),P=k[0],D=k[1],F=Object(n.useContext)(O),z=x(F),B=Object(o.a)(z,3),T=B[0],q=B[1],A=B[2];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),A()&&t({name:i,lastName:b,cpf:E,promotions:W,news:P})}},r.a.createElement(u.a,{value:i,onChange:function(e){c(e.target.value)},id:"name",label:"Nome",variant:"outlined",fullWidth:!0,margin:"normal",name:"name",onBlur:q,error:!T.name.valid,helperText:T.name.text,required:!0}),r.a.createElement(u.a,{value:b,onChange:function(e){f(e.target.value)},id:"lastname",label:"Sobrenome",variant:"outlined",fullWidth:!0,margin:"normal",name:"lastname"}),r.a.createElement(u.a,{value:E,onChange:function(e){C(e.target.value)},onBlur:q,error:!T.cpf.valid,helperText:T.cpf.text,id:"cpf",name:"cpf",label:"CPF",variant:"outlined",fullWidth:!0,required:!0}),r.a.createElement(d.a,{container:!0,justifyContent:"flex-end"},r.a.createElement(h.a,{label:"Promo\xe7\xf5es",control:r.a.createElement(j.a,{checked:W,onChange:function(e){w(e.target.checked)},name:"promotions",color:"primary"})}),r.a.createElement(h.a,{label:"Novidades",control:r.a.createElement(j.a,{checked:P,onChange:function(e){D(e.target.checked)},name:"news",color:"primary"})})),r.a.createElement(m.a,{variant:"contained",color:"primary",type:"submit",fullWidth:!0},"Pr\xf3ximo"))};var S=function(e){var t=e.submit,a=Object(n.useState)(""),l=Object(o.a)(a,2),i=l[0],c=l[1],s=Object(n.useState)(""),d=Object(o.a)(s,2),v=d[0],b=d[1],f=Object(n.useContext)(O),g=x(f),p=Object(o.a)(g,3),E=p[0],h=p[1],j=p[2];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),j()&&t({email:i,password:v})}},r.a.createElement(u.a,{id:"email",name:"email",label:"E-mail",type:"email",variant:"outlined",fullWidth:!0,margin:"normal",required:!0,value:i,onChange:function(e){c(e.target.value)}}),r.a.createElement(u.a,{id:"password",name:"password",label:"Senha",type:"password",variant:"outlined",fullWidth:!0,margin:"normal",required:!0,value:v,onChange:function(e){b(e.target.value)},onBlur:h,error:!E.password.valid,helperText:E.password.text}),r.a.createElement(m.a,{variant:"contained",color:"primary",type:"submit",fullWidth:!0},"Pr\xf3ximo"))},y=a(132),W=a(127),w=a(130),N=a(42),k=a(89),P=a(57),D=a.n(P),F=Object(s.a)((function(e){return{root:Object(N.a)({backgroundColor:e.palette.background.paper,padding:e.spacing(1)},"backgroundColor","#DED9D8"),size:{fontSize:"2em",textAlign:"center"},textingTitle:Object(c.a)(Object(c.a)({},e.typography.button),{},{fontSize:"1.8em",textAlign:"center"}),texting:{textAlign:"center"}}}));var z=function(){var e=F();return r.a.createElement("div",{className:e.root},r.a.createElement(k.a,{className:e.texting,variant:"h3"},r.a.createElement(D.a,{color:"action",className:e.size})),r.a.createElement(k.a,{className:e.textingTitle,variant:"h5"},"Obrigado"),r.a.createElement(k.a,{className:e.texting,variant:"h6"},"Dados coletados com sucesso"))};var B=function(e){var t=e.submit,a=e.validations,l=Object(n.useState)({}),i=Object(o.a)(l,2),u=i[0],m=i[1],s=Object(n.useState)(0),d=Object(o.a)(s,2),v=d[0],b=d[1];Object(n.useEffect)((function(){v===f.length-1&&t(u)}));var f=[r.a.createElement(S,{submit:g,validations:a}),r.a.createElement(C,{submit:g,validations:a}),r.a.createElement(E,{submit:g,validations:a}),r.a.createElement(z,null)];function g(e){m(Object(c.a)(Object(c.a)({},u),e)),b(v+1)}return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{activeStep:v},r.a.createElement(W.a,null,r.a.createElement(w.a,null,"Login")),r.a.createElement(W.a,null,r.a.createElement(w.a,null,"Pessoal")),r.a.createElement(W.a,null,r.a.createElement(w.a,null,"Entrega"))),f[v])},T=a(128),q=(a(86),a(58));function A(e){return q.a.isValid(e)?{valid:!0,text:""}:{valid:!1,text:"CPF inv\xe1lido"}}function J(e){return e.length<=3||e.length>72?{valid:!1,text:"Senha deve ter entre 4 e 72 d\xedgitos"}:{valid:!0,text:""}}var R=a(59),G=a(6);var I=function(){return r.a.createElement(T.a,{component:"article",maxWidth:"sm"},r.a.createElement(k.a,{variant:"h3",component:"h1",align:"center"},"Formul\xe1rio de Cadastro"),r.a.createElement(O.Provider,{value:{cpf:A,password:J,name:J}},r.a.createElement(R.a,null,r.a.createElement(G.c,null,r.a.createElement(G.a,{path:"/ReactForm",element:r.a.createElement(B,{submit:function(e){console.log(e)}})})))))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.a05a2a13.chunk.js.map