(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{185:function(e,a,t){e.exports=t.p+"static/media/bg-2.e30f1067.jpg"},186:function(e,a,t){e.exports=t(391)},191:function(e,a,t){},192:function(e,a,t){},391:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),o=t(39),r=t.n(o),s=(t(191),t(12)),i=t(13),c=t(15),u=t(14),d=t(16),m=(t(192),t(52)),h=t(22),p=t.n(h),g=t(51),f=t(124),b=t(125),v=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(c.a)(this,Object(u.a)(a).call(this))).state={journals:[]},e}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,a=localStorage.getItem("token");p()({method:"get",url:"https://journal-nyx.herokuapp.com/api/v1/journals/",headers:{Authorization:"Bearer ".concat(a)},data:{user_id:localStorage.getItem("userId")}}).then(function(a){"success"===a.data.status?e.setState({journals:a.data.journals}):console.log("Could not retrieve journals. Please check authorization.")}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return l.a.createElement(f.a,{id:"journal-grid"},this.state.journals.map(function(e){return l.a.createElement(b.a,{key:e.id,className:"col-sm-3 d-inline"},l.a.createElement("img",{src:"https://s3.amazonaws.com/journal-nyx/"+e.image_path,alt:"",className:"img-thumbnail journal-img"}),l.a.createElement("p",null,l.a.createElement(g.b,{to:"/journals/"+e.id},e.title)),l.a.createElement("p",{className:"journal-created-at"},e.created_at))}))}}]),a}(l.a.Component),j=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,a=localStorage.getItem("token");console.log(a),p()({method:"get",url:"https://journal-nyx.herokuapp.com/api/v1/journals/",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(a)},data:{user_id:localStorage.getItem("userId")}}).then(function(a){console.log(a),"success"===a.data.status?e.setState({journals:a.data.journals}):console.log("Could not retrieve journals. Please check authorization.")}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("div",{className:"w-100"},l.a.createElement("div",{className:"col-md-6 d-inline-block"},l.a.createElement("h2",{id:"welcome-message"},"Welcome, ",localStorage.getItem("firstName"))),l.a.createElement(g.b,{to:"/journals/new",className:"btn btn-outline-secondary col-md-4 float-right",id:"new-journal-button"},"Write a new journal"))),l.a.createElement("div",null,l.a.createElement(v,null)))}}]),a}(l.a.Component),E=t(35),w=t(6),y=t(17),O=t(81),S=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(c.a)(this,Object(u.a)(a).call(this,e))).handleInput=function(e){t.setState(Object(E.a)({},e.target.id,e.target.value))},t.handleFile=function(e){t.setState({file:e.target.files[0],url:URL.createObjectURL(e.target.files[0])})},t.handleSubmit=function(e){var a=t.state,n=a.title,l=a.content,o=a.file,r=new FormData;r.set("user_id",localStorage.getItem("userId")),r.set("title",n),r.set("content",l),r.append("file",o,o.name);var s=localStorage.getItem("token");p.a.post("https://journal-nyx.herokuapp.com/api/v1/journals/new",r,{headers:{Authorization:"Bearer ".concat(s)}}).then(function(e){"success"===e.data.status?(e.data.redirect&&(window.location.href=e.data.redirect),console.log("Journal created!")):console.log("Uh oh! Your journal entry could not be created")}).catch(function(e){console.log(e)})},t.state={title:"",content:"",file:null,url:null},t.handleInput=t.handleInput.bind(Object(w.a)(t)),t.handleFile=t.handleFile.bind(Object(w.a)(t)),t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.state,a=e.title,t=e.content,n=e.file,o=e.url;return l.a.createElement(l.a.Fragment,null,l.a.createElement(y.AvForm,{onValidSubmit:this.handleSubmit,id:"journal",encType:"multipart/form-data"},l.a.createElement(y.AvField,{placeholder:"Title",name:"title",value:a,onChange:this.handleInput,id:"title",type:"text",validate:{required:{value:!0,errorMessage:"Please give your journal a title"},maxLength:{value:255,errorMessage:"Your title cannot exceed 255 characters"}}}),l.a.createElement("textarea",{placeholder:"Write away...",name:"content",value:t,onChange:this.handleInput,id:"content",type:"text",className:"form-control"}),l.a.createElement("br",null),l.a.createElement("div",{className:"input-group col-sm-6"},l.a.createElement("input",{type:"file",className:"custom-file-input",id:"file",onChange:this.handleFile}),l.a.createElement("label",{className:"custom-file-label",for:"file"},n?n.name:"Choose an image")),l.a.createElement("br",null),l.a.createElement("img",{src:o,alt:"",className:"img-thumbnail"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(O.a,{light:!0,color:"secondary",form:"journal",type:"submit",className:"float-right"},"Create new journal entry")))}}]),a}(l.a.Component),M=t(155),I=t(156),k=t(157),C=t(83),N=t(158),L=t(159),x=t(160),F=t(180),A=t(164),_=t(165),P=t(166),Y=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(c.a)(this,Object(u.a)(a).call(this,e))).handleInput=function(e){t.setState(Object(E.a)({},e.target.id,e.target.value))},t.handleSubmit=function(){p()({method:"post",url:"https://journal-nyx.herokuapp.com/api/v1/sessions/",data:{email:t.state.email,password:t.state.password}}).then(function(e){"success"===e.data.status?(e.data.redirect&&(window.location.href=e.data.redirect),console.log("Log in successful!"),localStorage.setItem("token",e.data.auth_token),localStorage.setItem("userId",e.data.user.id),localStorage.setItem("firstName",e.data.user.first_name)):console.log("Uh oh! Your email and password does not match.")}).catch(function(e){console.log(e)})},t.state={email:"",password:""},t.handleInput=t.handleInput.bind(Object(w.a)(t)),t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props,a=e.loginModal,t=e.toggleLoginModal,n=e.toggleSignupModal,o=this.state,r=o.email,s=o.password;return l.a.createElement(F.a,{isOpen:a,toggle:t},l.a.createElement(A.a,null,"Log in to your Journal"),l.a.createElement(_.a,null,l.a.createElement(y.AvForm,{onValidSubmit:this.handleSubmit,id:"login"},l.a.createElement(y.AvField,{name:"email",label:"Email: ",value:r,onChange:this.handleInput,id:"email",type:"email",autoComplete:"email",validate:{required:{value:!0,errorMessage:"Please enter a valid email"}}}),l.a.createElement(y.AvField,{name:"password",label:"Password: ",value:s,onChange:this.handleInput,id:"password",type:"password",autoComplete:"password",validate:{required:{value:!0,errorMessage:"Please enter your password"}}}))),l.a.createElement(P.a,null,l.a.createElement(O.a,{color:"light",onClick:n},"Sign up here if you don't have an account"),l.a.createElement(O.a,{outline:!0,color:"secondary",form:"login",type:"submit"},"Log in")))}}]),a}(l.a.Component),z=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(c.a)(this,Object(u.a)(a).call(this,e))).handleInput=function(e){t.setState(Object(E.a)({},e.target.id,e.target.value))},t.handleSubmit=function(){p()({method:"post",url:"https://journal-nyx.herokuapp.com/api/v1/users/new",data:{firstName:t.state.firstName,lastName:t.state.lastName,email:t.state.email,password:t.state.password}}).then(function(e){"success"===e.data.status?(e.data.redirect&&(window.location.href=e.data.redirect),console.log("Registration was successful"),localStorage.setItem("token",e.data.auth_token),localStorage.setItem("userId",e.data.user.id),localStorage.setItem("firstName",e.data.user.first_name)):console.log("An account has already been registered with that email")}).catch(function(e){console.log(e)})},t.state={firstName:"",lastName:"",email:"",password:"",confirmPassword:""},t.handleInput=t.handleInput.bind(Object(w.a)(t)),t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props,a=e.signupModal,t=e.toggleLoginModal,n=e.toggleSignupModal,o=this.state,r=o.firstName,s=o.lastName,i=o.email,c=o.password,u=o.confirmPassword;return l.a.createElement(F.a,{isOpen:a,toggle:n},l.a.createElement(A.a,null,"Sign up for your Journal"),l.a.createElement(_.a,null,l.a.createElement(y.AvForm,{onValidSubmit:this.handleSubmit,id:"signup"},l.a.createElement(y.AvField,{name:"firstName",label:"First name: ",value:r,onChange:this.handleInput,id:"firstName",type:"text",autoComplete:"first-name",validate:{required:{value:!0,errorMessage:"Please enter your first name"},pattern:{value:"^[A-Za-z]+$",errorMessage:"Your name must be composed only with letters"},minLength:{value:3,errorMessage:"Your name must be between 3 and 30 characters"},maxLength:{value:30,errorMessage:"Your name must be between 3 and 30 characters"}}}),l.a.createElement(y.AvField,{name:"lastName",label:"Last name: ",value:s,onChange:this.handleInput,id:"lastName",type:"text",autoComplete:"last-name",validate:{required:{value:!0,errorMessage:"Please enter your last name"},pattern:{value:"^[A-Za-z]+$",errorMessage:"Your name must be composed only with letters"},minLength:{value:3,errorMessage:"Your name must be between 3 and 30 characters"},maxLength:{value:30,errorMessage:"Your name must be between 3 and 30 characters"}}}),l.a.createElement(y.AvField,{name:"email",label:"Email: ",value:i,onChange:this.handleInput,id:"email",type:"email",autoComplete:"new-emil",validate:{required:{value:!0,errorMessage:"Please enter a valid email"}}}),l.a.createElement(y.AvField,{name:"password",label:"Password: ",value:c,onChange:this.handleInput,id:"password",type:"password",autoComplete:"new-password",validate:{required:{value:!0,errorMessage:"Please enter your password"},minLength:{value:6,errorMessage:"Your password must be between 6 and 20 characters"},maxLength:{value:20,errorMessage:"Your password must be between 6 and 20 characters"}}}),l.a.createElement(y.AvField,{name:"confirmPassword",label:"Confirm password: ",value:u,onChange:this.handleInput,id:"confirmPassword",type:"password",autoComplete:"confirm-password",validate:{required:{value:!0,errorMessage:"Please enter your password again"},match:{value:"password",errorMessage:"Your passwords do not match"}}}))),l.a.createElement(P.a,null,l.a.createElement(O.a,{color:"light",onClick:t},"Log in here if you already have an account"),l.a.createElement(O.a,{outline:!0,color:"secondary",form:"signup",type:"submit"},"Sign up")))}}]),a}(l.a.Component),U=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(c.a)(this,Object(u.a)(a).call(this))).toggle=function(){e.setState({isOpen:!e.state.isOpen})},e.toggleLoginModal=function(){e.setState({loginModal:!e.state.loginModal,signupModal:!1})},e.toggleSignupModal=function(){e.setState({signupModal:!e.state.signupModal,loginModal:!1})},e.handleLogout=function(){localStorage.clear(),e.setState({isLoggedIn:!1}),window.location.href="https://journal-nyx.herokuapp.com/"},e.state={isOpen:!1,loginModal:!1,signupModal:!1,isLoggedIn:!1},e}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){null!==localStorage.getItem("token")&&this.setState({isLoggedIn:!0})}},{key:"render",value:function(){var e=this.state,a=e.isOpen,t=e.loginModal,n=e.signupModal,o=e.isLoggedIn;return l.a.createElement("div",null,l.a.createElement(M.a,{className:"navbar-expand-md navbar-nav navbar-light navbar-brand",id:"navbar"},l.a.createElement(I.a,null,"JOURNAL NYX"),l.a.createElement(k.a,{onClick:this.toggle}),l.a.createElement(C.a,{isOpen:a,navbar:!0},l.a.createElement(N.a,{navbar:!0,className:"ml-auto"},o?l.a.createElement(l.a.Fragment,null,l.a.createElement(L.a,null,l.a.createElement(x.a,{href:"/journals/"},"Home")),l.a.createElement(L.a,null,l.a.createElement(x.a,{onClick:this.handleLogout},"Log out"))):l.a.createElement(l.a.Fragment,null,l.a.createElement(L.a,null,l.a.createElement(x.a,{onClick:this.toggleSignupModal},"Sign up"),l.a.createElement(z,{signupModal:n,toggleLoginModal:this.toggleLoginModal,toggleSignupModal:this.toggleSignupModal})),l.a.createElement(L.a,null,l.a.createElement(x.a,{onClick:this.toggleLoginModal},"Log In"),l.a.createElement(Y,{loginModal:t,toggleLoginModal:this.toggleLoginModal,toggleSignupModal:this.toggleSignupModal})))))))}}]),a}(l.a.Component),q=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(c.a)(this,Object(u.a)(a).call(this,e))).handleInput=function(e){t.setState(Object(E.a)({},e.target.id,e.target.value))},t.handleFile=function(e){t.setState({file:e.target.files[0],url:URL.createObjectURL(e.target.files[0])})},t.handleUpdate=function(){var e=t.state,a=e.title,n=e.content,l=e.file,o=new FormData;o.set("title",a),o.set("content",n),null!=l&&o.append("file",l,l.name);var r=t.props.match.params.id,s=localStorage.getItem("token");p.a.post("https://journal-nyx.herokuapp.com/api/v1/journals/".concat(r),o,{headers:{Authorization:"Bearer ".concat(s)}}).then(function(e){"success"===e.data.status?(console.log("Journal updated successfully"),e.data.redirect&&(window.location.href=e.data.redirect)):console.log("Could not update journal entry.")}).catch(function(e){console.log(e)})},t.handleDestroy=function(){var e=t.props.match.params.id,a=localStorage.getItem("token");p()({method:"POST",url:"https://journal-nyx.herokuapp.com/api/v1/journals/".concat(e,"/delete"),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(a)}}).then(function(e){"success"===e.data.status?(console.log("Journal deleted successfully"),e.data.redirect&&(window.location.href=e.data.redirect)):console.log("Could not delete journal entry.")}).catch(function(e){console.log(e)})},t.state={id:"",created_at:"",updated_at:"",user_id:"",title:"",content:"",file:null,url:null},t.handleInput=t.handleInput.bind(Object(w.a)(t)),t.handleFile=t.handleFile.bind(Object(w.a)(t)),t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id,t=localStorage.getItem("token");p()({method:"GET",url:"https://journal-nyx.herokuapp.com/api/v1/journals/".concat(a),headers:{Authorization:"Bearer ".concat(t)}}).then(function(a){"success"===a.data.status?e.setState({id:a.data.journal.id,created_at:a.data.journal.created_at,updated_at:a.data.journal.updated_at,user_id:a.data.journal.user_id,title:a.data.journal.title,content:a.data.journal.content,url:"https://s3.amazonaws.com/journal-nyx/"+a.data.journal.image_path}):console.log("Could not retrieve journals. Please check authorization.")}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this.state,a=e.created_at,t=e.updated_at,n=e.title,o=e.content,r=e.file,s=e.url;return l.a.createElement(l.a.Fragment,null,l.a.createElement(y.AvForm,{onValidSubmit:this.handleUpdate,id:"update"},l.a.createElement(y.AvField,{placeholder:n,name:"title",value:n,onChange:this.handleInput,id:"title",type:"text",validate:{required:{value:!0,errorMessage:"Please give your journal a title"},maxLength:{value:255,errorMessage:"Your title cannot exceed 255 characters"}}}),l.a.createElement("textarea",{placeholder:o,name:"content",value:o,onChange:this.handleInput,id:"content",type:"text",className:"form-control"}),l.a.createElement("br",null),l.a.createElement("p",{id:"created-at"},"Created at: ",a),l.a.createElement("p",{id:"updated-at"},"Updated at: ",t),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"input-group col-sm-6"},l.a.createElement("input",{type:"file",className:"custom-file-input",id:"file",onChange:this.handleFile}),l.a.createElement("label",{className:"custom-file-label",htmlFor:"file"},r?r.name:"Current image in preview")),l.a.createElement("br",null),l.a.createElement("img",{src:s,alt:"",className:"img-thumbnail"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(O.a,{light:!0,color:"secondary",form:"update",type:"submit",className:"float-right"},"Save your changes"),l.a.createElement(O.a,{outline:!0,color:"secondary",onClick:this.handleDestroy,id:"delete-button",className:"float-right"},"Delete")))}}]),a}(l.a.Component),D=t(185),B=t.n(D),J=t(154),R=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(J.a,{className:"m-0 p-0",id:"home-container"},l.a.createElement(b.a,{className:"p-0"},l.a.createElement("img",{src:B.a,alt:"",id:"home-bg",className:"position-relative w-100 h-100"}),l.a.createElement("p",{id:"home-text",className:"position-absolute"},"Capture the journey within")))}}]),a}(l.a.Component),T=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(U,null),l.a.createElement(m.a,{path:"/",exact:!0,component:R}),l.a.createElement(m.a,{path:"/journals",exact:!0,component:j}),l.a.createElement(m.a,{path:"/journals/new",component:S}),l.a.createElement(m.a,{path:"/journals/:id(\\d+)",component:q}))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(390);r.a.render(l.a.createElement(g.a,null,l.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[186,1,2]]]);
//# sourceMappingURL=main.87ac4614.chunk.js.map