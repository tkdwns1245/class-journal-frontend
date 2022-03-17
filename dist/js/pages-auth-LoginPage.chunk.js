"use strict";exports.id=266,exports.ids=[266],exports.modules={664:(e,n,t)=>{t.d(n,{Z:()=>w});var r,o,a,l,i=t(168),u=t(689),s=t.n(u),c=t(518),m=t.n(c),d=t(661),g=t(614),p=t(732),f=m().div(r||(r=(0,i.Z)(["\n    color: red;\n    text-align: center;\n    font-size: 0.875rem;\n    margin-top: 1rem;\n"]))),h=m().div(o||(o=(0,i.Z)(["\n    h3{\n        margin: 0;\n        color: ",";\n        margin-bottom: 1em;\n    }\n"])),g.Z.gray[8]),E=m().input(a||(a=(0,i.Z)(["\n    font-size: 1rem;\n    border: none;\n    border-bottom: 1px solid ",";\n    padding-bottom: 0.5rem;\n    outline: none;\n    width: 100%;\n    &:focus {\n        color: $oc-teal-7;\n        border-bottom: 1px solid ",";\n    }\n    & + & {\n        margin-top: 1rem;\n    }\n"])),g.Z.gray[5],g.Z.gray[7]),v=m().div(l||(l=(0,i.Z)(["\n    margin-top: 2rem;\n    text-align: right;\n    a{\n        color: ",";\n        text-decoration: underline;\n        &:hover {\n            color: ",";\n        }\n    }\n"])),g.Z.gray[6],g.Z.gray[9]),b={login:"로그인",register:"회원가입"};const w=function(e){var n=e.type,t=e.form,r=e.onChange,o=e.onSubmit,a=e.error,l=b[n];return s().createElement(h,null,s().createElement("h3",null,l),s().createElement("form",{onSubmit:o},s().createElement(E,{authComplete:"username",name:"username",placeholder:"아이디",onChange:r,value:t.username}),s().createElement(E,{autoComplete:"new-password",name:"password",placeholder:"비밀번호",type:"password",onChange:r,value:t.password}),"register"===n&&s().createElement(E,{autoComplete:"new-password",name:"passwordConfirm",palaceholder:"비밀번호 확인",type:"password",onChange:r,value:t.passwordConfirm}),a&&s().createElement(f,null,a),s().createElement(p.Z,{color:"green",fullWidth:!0,style:{marginTop:"1rem"}},l)),s().createElement(v,null,"login"===n?s().createElement(d.Link,{to:"/register"},"회원가입"):s().createElement(d.Link,{to:"/login"},"로그인")))}},800:(e,n,t)=>{t.d(n,{Z:()=>p});var r,o,a=t(168),l=t(689),i=t.n(l),u=t(518),s=t.n(u),c=t(614),m=t(661),d=s().div(r||(r=(0,a.Z)(["\n    position: absolute;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    background: ",";\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    z-index:1051;\n"])),c.Z.gray[2]),g=s().div(o||(o=(0,a.Z)(["\n    .logo-area {\n        display: block;\n        padding-bottom: 2rem;\n        text-align: center;\n        font-weight: bold;\n        letter-spacing: 2px;\n    }\n    box-shadow: 0 0 8px rgba(0,0,0,0.025);\n    padding: 2rem;\n    width: 360px;\n    background: white;\n    border-radius: 2px;\n"])));const p=function(e){var n=e.children;return i().createElement(d,null,i().createElement(g,null,i().createElement("div",{className:"logo-area"},i().createElement(m.Link,{to:"/"},"REACTRERS")),n))}},137:(e,n,t)=>{t.r(n),t.d(n,{default:()=>g});var r=t(689),o=t.n(r),a=t(800),l=t(152),i=t(22),u=t(661),s=t(314),c=t(664),m=t(625);const d=function(){var e=(0,r.useState)(null),n=(0,l.Z)(e,2),t=n[0],a=n[1],d=(0,u.useNavigate)(),g=(0,i.useDispatch)(),p=(0,i.useSelector)((function(e){var n=e.auth,t=e.user;return{form:n.login,auth:n.auth,authError:n.authError,user:t.user}})),f=p.form,h=p.auth,E=p.authError,v=p.user;return(0,r.useEffect)((function(){g((0,s.R4)("login"))}),[g]),(0,r.useEffect)((function(){if(E)return console.log("오류 발생"),console.log(E),void a("로그인 실패");h&&(console.log("로그인 성공"),g((0,m.BF)()))}),[h,E,g]),(0,r.useEffect)((function(){v&&d("/");try{localStorage.setItem("user",JSON.stringify(v))}catch(e){console.log("localStorage is not working")}}),[v,d]),o().createElement(c.Z,{type:"login",form:f,onChange:function(e){var n=e.target,t=n.value,r=n.name;g((0,s.uC)({form:"login",key:r,value:t}))},onSubmit:function(e){e.preventDefault();var n=f.username,t=f.password;g((0,s.x4)({username:n,password:t}))},error:t})},g=function(){return o().createElement(a.Z,null,o().createElement(d,null))}}};