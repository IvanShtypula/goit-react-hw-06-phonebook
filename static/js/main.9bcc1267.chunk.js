(this.webpackJsonpphonebook_6=this.webpackJsonpphonebook_6||[]).push([[0],{11:function(t,e,a){t.exports={container:"App_container__XY2bQ",title:"App_title__2Coxl",contactsList:"App_contactsList__V1ZWm"}},12:function(t,e,a){t.exports={list_item:"ListItem_list_item__AojAr","list_item-name":"ListItem_list_item-name__3aHUB","list_item-number":"ListItem_list_item-number__n0ZrG","list_item-button":"ListItem_list_item-button__28O2A"}},17:function(t,e,a){t.exports={enterActive:"reverseTransition_enterActive__3uNuq",task:"reverseTransition_task__33AUy",exitActive:"reverseTransition_exitActive__26jDA"}},20:function(t,e,a){t.exports={filter_input:"Filter_filter_input__KMxzs",filterTitle:"Filter_filterTitle__xFVhn"}},30:function(t,e,a){t.exports=a(42)},40:function(t,e,a){},41:function(t,e,a){},42:function(t,e,a){"use strict";a.r(e);var n,r=a(0),c=a.n(r),o=a(7),i=a.n(o),m=a(4),s=(a(40),a(14)),l=a(15),u=a(19),_=a(18),b=a(44),p=a(6),f=a(16),d=a(27),v=a(5),h=Object(v.b)("@contacts/add",(function(t,e){return{payload:{id:Object(d.uuid)(),name:t,number:e}}})),O=Object(v.b)("@contacts/remove"),j=a(8),E=a.n(j),N=(a(41),function(t){Object(u.a)(a,t);var e=Object(_.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).formInitialState={name:"",number:"",sameName:!1},t.state=Object(f.a)({},t.formInitialState),t.handleInput=function(e){var a=e.target,n=a.name,r=a.value;t.setState(Object(p.a)({},n,r))},t.handleSubmit=function(e){e.preventDefault();var a=t.props.items,n=e.target.name.value;if(a.some((function(t){return t.name===n})))return t.setState({name:"",number:"",sameName:!0}),void setTimeout(t.timeOutAlert,1500);var r=t.state.name,c=t.state.number;t.props.onAddContact(r,c),t.setState({name:"",number:""})},t.timeOutAlert=function(){t.setState({sameName:!1})},t}return Object(l.a)(a,[{key:"render",value:function(){var t=this.state,e=t.name,a=t.number,n=t.sameName;return c.a.createElement("form",{className:E.a.contactForm,autoComplete:"off",onSubmit:this.handleSubmit},c.a.createElement(b.a,{classNames:"alertWindow",in:n,timeout:1e3,unmountOnExit:!0},c.a.createElement("div",{className:E.a.alertModal},"Contact already exist!")),c.a.createElement("label",{htmlFor:"name",className:E.a.contactForm__label},"Name"),c.a.createElement("input",{className:E.a.contactForm__input,type:"text",name:"name",id:"name",placeholder:"   Enter your name",value:e,onChange:this.handleInput}),c.a.createElement("label",{htmlFor:"number",className:E.a.contactForm__label},"Number"),c.a.createElement("input",{className:E.a.contactForm__input,type:"tel",name:"number",id:"Number",placeholder:"   Enter your number",value:a,onChange:this.handleInput}),c.a.createElement("button",{className:E.a.contactForm__submit,type:"submit"},"Add contact"))}}]),a}(r.Component)),F={onAddContact:h},y=Object(m.b)((function(t){return{items:t.contacts.items}}),F)(N),g=Object(v.b)("@contacts/filter"),C=a(20),A=a.n(C),S={contactsFilterChange:g},x=Object(m.b)((function(t){return{value:t.contacts.filter}}),S)((function(t){var e=t.value,a=t.contactsFilterChange;return c.a.createElement("div",{className:A.a.filterWrap},c.a.createElement("h3",{className:A.a.filterTitle},"Find by name"),c.a.createElement("input",{type:"text",className:A.a.filter_input,value:e,onChange:function(t){return a(t.target.value)}}))})),k=a(45),I=a(11),w=a.n(I),T=a(17),L=a.n(T),M=a(12),D=a.n(M),J=Object(m.b)((function(t,e){var a=t.contacts.items.find((function(t){return t.id===e.id}));return Object(f.a)({},a)}),(function(t,e){return{onRemoveContact:function(){return t(O(e.id))}}}))((function(t){var e=t.onRemoveContact,a=t.name,n=t.number;return c.a.createElement("li",{className:D.a.list_item},c.a.createElement("p",{className:D.a["list_item-name"]},a,": "),c.a.createElement("p",{className:D.a["list_item-number"]}," ",n),c.a.createElement("button",{onClick:e,className:D.a["list_item-button"]},"\xd7"))})),U=Object(m.b)((function(t){var e=t.contacts,a=e.items,n=e.filter.toLowerCase();return{items:a.filter((function(t){return t.name.toLowerCase().includes(n)}))}}))((function(t){var e=t.items;return c.a.createElement(k.a,{component:"ul",className:w.a.contactsList},e.length>0&&e.map((function(t){var e=t.id;return c.a.createElement(b.a,{key:e,classNames:L.a,timeout:250},c.a.createElement(J,{id:e}))})))})),W=Object(v.b)("@localStorage/getItems"),B=function(t){Object(u.a)(a,t);var e=Object(_.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={showTitle:!1},t}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("items");console.log(t),t&&this.props.itemsStorage(JSON.parse(t)),this.setState({showTitle:!0})}},{key:"componentDidUpdate",value:function(t){t.items!==this.props.items&&localStorage.setItem("items",JSON.stringify(this.props.items))}},{key:"render",value:function(){var t=this.state.showTitle;return c.a.createElement("div",{className:w.a.container},c.a.createElement(b.a,{classNames:L.a,in:t,timeout:250},c.a.createElement("h1",{className:w.a.title},"Phonebook")),c.a.createElement(y,{contacts:this.props.items}),this.props.items.length>1&&c.a.createElement(x,null),c.a.createElement("h2",null,"Contacts"),c.a.createElement(U,null))}}]),a}(r.Component),R={contactsFilter:g,itemsStorage:W},V=Object(m.b)((function(t){return{items:t.contacts.items}}),R)(B),Z=a(28),q=a(3),z=Object(v.c)([],(n={},Object(p.a)(n,h,(function(t,e){var a=e.payload;return[].concat(Object(Z.a)(t),[a])})),Object(p.a)(n,O,(function(t,e){var a=e.payload;return t.filter((function(t){return t.id!==a}))})),Object(p.a)(n,W,(function(t,e){return e.payload})),n)),G=Object(v.c)("",Object(p.a)({},g,(function(t,e){return e.payload}))),H=Object(q.c)({items:z,filter:G}),K=Object(v.a)({reducer:{contacts:H}});i.a.render(c.a.createElement(m.a,{store:K},c.a.createElement(V,null)),document.getElementById("root"))},8:function(t,e,a){t.exports={contactForm:"ContactForm_contactForm__wjA3L",contactForm__label:"ContactForm_contactForm__label__3fNT8",contactForm__input:"ContactForm_contactForm__input__wkgbn",contactForm__submit:"ContactForm_contactForm__submit__13uSi",alertModal:"ContactForm_alertModal__3bjj4"}}},[[30,1,2]]]);
//# sourceMappingURL=main.9bcc1267.chunk.js.map