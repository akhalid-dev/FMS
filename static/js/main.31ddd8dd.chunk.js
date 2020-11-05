(this["webpackJsonpexpense-tracker"]=this["webpackJsonpexpense-tracker"]||[]).push([[0],{11:function(e,t,n){e.exports={h3:"TransactionList_h3__2rxFn","transaction-list":"TransactionList_transaction-list__34oH7"}},2:function(e,t,n){e.exports={"inc-exp-container":"IncomeExpenses_inc-exp-container__3Q6Rq",lineBorder:"IncomeExpenses_lineBorder__RRG83",money:"IncomeExpenses_money__F33Hp",plus:"IncomeExpenses_plus__1zHPy",minus:"IncomeExpenses_minus__SKZft",boxPadding:"IncomeExpenses_boxPadding__3Cjmp"}},23:function(e,t,n){},24:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),s=n.n(a),r=n(12),o=n.n(r),i=function(e){var t=e.text;return Object(c.jsx)("h2",{children:t})},u=n(5),j=n(13),l=n(6),d=function(e,t){switch(t.type){case"DELETE_TRANSACTION":return Object(l.a)(Object(l.a)({},e),{},{transactions:e.transactions.filter((function(e){return e.id!==t.payload}))});case"ADD_TRANSACTION":return Object(l.a)(Object(l.a)({},e),{},{transactions:[t.payload].concat(Object(j.a)(e.transactions))});default:return e}},x=n(3),b={transactions:[{id:Object(x.uuid)(),text:"Flower",amount:-20},{id:Object(x.uuid)(),text:"Book",amount:-20},{id:Object(x.uuid)(),text:"Cash",amount:100}]},O=Object(a.createContext)(b),m=function(e){var t=e.children,n=Object(a.useReducer)(d,b),s=Object(u.a)(n,2),r=s[0],o=s[1];return Object(c.jsx)(O.Provider,{value:{transactions:r.transactions,deleteTransaction:function(e){o({type:"DELETE_TRANSACTION",payload:e})},addTransaction:function(e){o({type:"ADD_TRANSACTION",payload:e})}},children:t})},h=(n(23),function(){var e=Object(a.useContext)(O).transactions.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0).toFixed(2);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h4",{children:"Your Balance"}),Object(c.jsxs)("h1",{children:["$",e]})]})}),p=n(2),f=n.n(p),_=function(){var e=Object(a.useContext)(O).transactions.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0).toFixed(2),n=e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0).toFixed(2);return Object(c.jsx)(s.a.Fragment,{children:Object(c.jsxs)("div",{className:f.a["inc-exp-container"],children:[Object(c.jsxs)("div",{className:"".concat(f.a.lineBorder," ").concat(f.a.boxPadding),children:[Object(c.jsx)("h4",{children:"Income"}),Object(c.jsxs)("p",{className:"".concat(f.a.money," ").concat(f.a.plus),children:["+$",t]})]}),Object(c.jsxs)("div",{className:f.a.boxPadding,children:[Object(c.jsx)("h4",{className:"".concat(f.a.h4),children:"Expense"}),Object(c.jsxs)("p",{className:"".concat(f.a.money," ").concat(f.a.minus),children:["-$",Math.abs(n)]})]})]})})},v=n(8),T=n.n(v),N=function(e){var t=e.transaction,n=Object(a.useContext)(O).deleteTransaction,s=t.amount>0?"+":"-",r=t.amount>0?T.a.plus:T.a.minus;return Object(c.jsxs)("li",{className:"".concat(r),children:[t.text," ",Object(c.jsxs)("span",{children:[s,"$",Math.abs(t.amount)]}),Object(c.jsx)("button",{onClick:function(){return n(t.id)},className:T.a["delete-btn"],children:"x"})]})},g=n(11),y=n.n(g),E=function(e){var t=e.text,n=Object(a.useContext)(O).transactions;return console.log(n),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h3",{className:y.a.h3,children:t}),Object(c.jsx)("ul",{className:y.a["transaction-list"],children:n.map((function(e){return Object(c.jsx)(N,{transaction:e},e.id)}))})]})},A=n(9),C=n.n(A),F=function(e){var t=e.message,n=Object(a.useState)(""),s=Object(u.a)(n,2),r=s[0],o=s[1],i=Object(a.useState)(0),j=Object(u.a)(i,2),l=j[0],d=j[1],b=Object(a.useContext)(O).addTransaction;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h3",{children:t}),Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={id:Object(x.uuid)(),text:r,amount:parseFloat(l)};console.log(t),b(t)},children:[Object(c.jsxs)("div",{className:C.a["form-control"],children:[Object(c.jsx)("label",{htmlFor:"text",children:"Text"}),Object(c.jsx)("input",{type:"text",value:r,onChange:function(e){return o(e.target.value)},placeholder:"Enter text ..."})]}),Object(c.jsxs)("div",{className:C.a["form-control"],children:[Object(c.jsxs)("label",{htmlFor:"amount",children:["Amount ",Object(c.jsx)("br",{}),"(negative - expense, postive - income)"]}),Object(c.jsx)("input",{type:"number",value:l,onChange:function(e){return d(e.target.value)},placeholder:"Enter amount..."})]}),Object(c.jsx)("button",{className:C.a.btn,children:"Add transaction"})]})]})};n(24);var I=function(){return Object(c.jsxs)(m,{children:[Object(c.jsx)(i,{text:"Expense Tracker"}),Object(c.jsx)(h,{}),Object(c.jsx)(_,{}),Object(c.jsx)(E,{text:"History"}),Object(c.jsx)(F,{message:"Add new transaction"})]})};o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(I,{})}),document.getElementById("root"))},8:function(e,t,n){e.exports={plus:"Transaction_plus__jFqZe",minus:"Transaction_minus__2g96A","delete-btn":"Transaction_delete-btn__3MuW1"}},9:function(e,t,n){e.exports={btn:"AddTransaction_btn__20y2Q"}}},[[26,1,2]]]);
//# sourceMappingURL=main.31ddd8dd.chunk.js.map