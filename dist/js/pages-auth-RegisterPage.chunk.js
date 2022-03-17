"use strict";exports.id=595,exports.ids=[595],exports.modules={664:(e,n,r)=>{r.d(n,{Z:()=>b});var t,o,a,l,i=r(168),s=r(689),u=r.n(s),m=r(518),c=r.n(m),d=r(661),g=r(614),p=r(732),f=c().div(t||(t=(0,i.Z)(["\n    color: red;\n    text-align: center;\n    font-size: 0.875rem;\n    margin-top: 1rem;\n"]))),h=c().div(o||(o=(0,i.Z)(["\n    h3{\n        margin: 0;\n        color: ",";\n        margin-bottom: 1em;\n    }\n"])),g.Z.gray[8]),v=c().input(a||(a=(0,i.Z)(["\n    font-size: 1rem;\n    border: none;\n    border-bottom: 1px solid ",";\n    padding-bottom: 0.5rem;\n    outline: none;\n    width: 100%;\n    &:focus {\n        color: $oc-teal-7;\n        border-bottom: 1px solid ",";\n    }\n    & + & {\n        margin-top: 1rem;\n    }\n"])),g.Z.gray[5],g.Z.gray[7]),E=c().div(l||(l=(0,i.Z)(["\n    margin-top: 2rem;\n    text-align: right;\n    a{\n        color: ",";\n        text-decoration: underline;\n        &:hover {\n            color: ",";\n        }\n    }\n"])),g.Z.gray[6],g.Z.gray[9]),w={login:"로그인",register:"회원가입"};const b=function(e){var n=e.type,r=e.form,t=e.onChange,o=e.onSubmit,a=e.error,l=w[n];return u().createElement(h,null,u().createElement("h3",null,l),u().createElement("form",{onSubmit:o},u().createElement(v,{authComplete:"username",name:"username",placeholder:"아이디",onChange:t,value:r.username}),u().createElement(v,{autoComplete:"new-password",name:"password",placeholder:"비밀번호",type:"password",onChange:t,value:r.password}),"register"===n&&u().createElement(v,{autoComplete:"new-password",name:"passwordConfirm",palaceholder:"비밀번호 확인",type:"password",onChange:t,value:r.passwordConfirm}),a&&u().createElement(f,null,a),u().createElement(p.Z,{color:"green",fullWidth:!0,style:{marginTop:"1rem"}},l)),u().createElement(E,null,"login"===n?u().createElement(d.Link,{to:"/register"},"회원가입"):u().createElement(d.Link,{to:"/login"},"로그인")))}},800:(e,n,r)=>{r.d(n,{Z:()=>p});var t,o,a=r(168),l=r(689),i=r.n(l),s=r(518),u=r.n(s),m=r(614),c=r(661),d=u().div(t||(t=(0,a.Z)(["\n    position: absolute;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    background: ",";\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    z-index:1051;\n"])),m.Z.gray[2]),g=u().div(o||(o=(0,a.Z)(["\n    .logo-area {\n        display: block;\n        padding-bottom: 2rem;\n        text-align: center;\n        font-weight: bold;\n        letter-spacing: 2px;\n    }\n    box-shadow: 0 0 8px rgba(0,0,0,0.025);\n    padding: 2rem;\n    width: 360px;\n    background: white;\n    border-radius: 2px;\n"])));const p=function(e){var n=e.children;return i().createElement(d,null,i().createElement(g,null,i().createElement("div",{className:"logo-area"},i().createElement(c.Link,{to:"/"},"REACTRERS")),n))}},521:(e,n,r)=>{r.r(n),r.d(n,{default:()=>g});var t=r(689),o=r.n(t),a=r(800),l=r(664),i=r(152),s=r(22),u=r(314),m=r(625),c=r(661);const d=function(){var e=(0,t.useState)(null),n=(0,i.Z)(e,2),r=n[0],a=n[1],d=(0,c.useNavigate)(),g=(0,s.useDispatch)(),p=(0,s.useSelector)((function(e){var n=e.auth,r=e.user;return{form:n.register,auth:n.auth,authError:n.authError,user:r.user}})),f=p.form,h=p.auth,v=p.authError,E=p.user;return(0,t.useEffect)((function(){g((0,u.R4)("register"))}),[g]),(0,t.useEffect)((function(){if(v)return 409===v.response.status?void a("이미 존재하는 계정입니다."):void a("회원가입 실패");h&&(console.log("회원가입 성공"),console.log(h),g((0,m.BF)()))}),[h,v,g]),(0,t.useEffect)((function(){E&&d("/");try{localStorage.setItem("user",JSON.stringify(E))}catch(e){console.log("localStorage is not working")}}),[E,d]),o().createElement(l.Z,{type:"register",form:f,onChange:function(e){var n=e.target,r=n.value,t=n.name;g((0,u.uC)({form:"register",key:t,value:r}))},onSubmit:function(e){e.preventDefault();var n=f.username,r=f.password,t=f.passwordConfirm;if(![n,r,t].includes(""))return r!==t?(a("비밀번호가 일치하지 않습니다."),g((0,u.uC)({form:"register",key:"password",value:""})),void g((0,u.uC)({form:"register",key:"passwordConfirm",value:""}))):void g((0,u.z2)({username:n,password:r}));a("빈 칸을 모두 입력하세요.")},error:r})},g=function(){return o().createElement(a.Z,null,o().createElement(d,null))}}};