(this.webpackJsonpcliente=this.webpackJsonpcliente||[]).push([[0],{43:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(16),o=a.n(c),s=(a(43),a(15)),i=a(5),l=a(13),u=a(2),b=a(6),j=Object(r.createContext)(),p=Object(r.createContext)(),d=a(0),m=function(e){var t=Object(r.useContext)(j),a=t.alerta,n=t.mostrarAlerta,c=Object(r.useContext)(p),o=c.mensaje,i=c.autenticado,m=c.iniciarSesion;Object(r.useEffect)((function(){i&&e.history.push("/proyectos"),o&&n(o.msg,o.categoria)}),[o,i,e.history]);var O=Object(r.useState)({email:"",password:""}),h=Object(b.a)(O,2),f=h[0],x=h[1],y=f.email,v=f.password,g=function(e){x(Object(u.a)(Object(u.a)({},f),{},Object(l.a)({},e.target.name,e.target.value)))};return Object(d.jsxs)("div",{className:"form-usuario",children:[a?Object(d.jsx)("div",{className:"alerta ".concat(a.categoria),children:a.msg}):null,Object(d.jsxs)("div",{className:"contenedor-form sombra-dark",children:[Object(d.jsx)("h1",{children:"iniciar Sesion"}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==y.trim()&&""!==v.trim()||n("Todos los campos son obligatorios","alerta-error"),m({email:y,password:v})},children:[Object(d.jsxs)("div",{className:"campo-form",children:[Object(d.jsx)("label",{htmlFor:"email",children:"Email"}),Object(d.jsx)("input",{type:"email",name:"email",id:"email",placeholder:"Tu Email",onChange:g,value:y})]}),Object(d.jsxs)("div",{className:"campo-form",children:[Object(d.jsx)("label",{htmlFor:"password",children:"Password"}),Object(d.jsx)("input",{type:"password",name:"password",id:"password",placeholder:"Tu Password",onChange:g,value:v})]}),Object(d.jsx)("div",{className:"campo-form",children:Object(d.jsx)("input",{type:"submit",className:"btn btn-primario btn-block",value:"Iniciar Sesion"})})]}),Object(d.jsx)(s.b,{to:"/nueva-cuenta",className:"enlace-cuenta",children:"Obtener cuenta"})]})]})},O=function(e){var t=Object(r.useContext)(j),a=t.alerta,n=t.mostrarAlerta,c=Object(r.useContext)(p),o=c.mensaje,i=c.autenticado,m=c.registrarUsuario;Object(r.useEffect)((function(){i&&e.history.push("/proyectos"),o&&n(o.msg,o.categoria)}),[o,i,e.history]);var O=Object(r.useState)({nombre:"",email:"",password:"",confirmar:""}),h=Object(b.a)(O,2),f=h[0],x=h[1],y=f.nombre,v=f.email,g=f.password,N=f.confirmar,R=function(e){x(Object(u.a)(Object(u.a)({},f),{},Object(l.a)({},e.target.name,e.target.value)))};return Object(d.jsxs)("div",{className:"form-usuario",children:[a?Object(d.jsx)("div",{className:"alerta ".concat(a.categoria),children:a.msg}):null,Object(d.jsxs)("div",{className:"contenedor-form sombra-dark",children:[Object(d.jsx)("h1",{children:"Obtener una cuenta"}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==y.trim()&&""!==v.trim()&&""!==g.trim()&&""!==N.trim()?g.length<6?n("El password debe ser de al menos 6 caracteres","alerta-error"):g===N?m({nombre:y,email:v,password:g}):n("Los passwords no son iguales","alerta-error"):n("Todos los campos son obligatorios","alerta-error")},children:[Object(d.jsxs)("div",{className:"campo-form",children:[Object(d.jsx)("label",{htmlFor:"email",children:"Nombre"}),Object(d.jsx)("input",{type:"text",name:"nombre",id:"nombre",placeholder:"Tu Nombre",onChange:R,value:y})]}),Object(d.jsxs)("div",{className:"campo-form",children:[Object(d.jsx)("label",{htmlFor:"email",children:"Email"}),Object(d.jsx)("input",{type:"email",name:"email",id:"email",placeholder:"Tu Email",onChange:R,value:v})]}),Object(d.jsxs)("div",{className:"campo-form",children:[Object(d.jsx)("label",{htmlFor:"password",children:"Password"}),Object(d.jsx)("input",{type:"password",name:"password",id:"password",placeholder:"Tu Password",onChange:R,value:g})]}),Object(d.jsxs)("div",{className:"campo-form",children:[Object(d.jsx)("label",{htmlFor:"confirmar",children:"Confirmar tu password"}),Object(d.jsx)("input",{type:"password",name:"confirmar",id:"confirmar",placeholder:"Repite tu password",onChange:R,value:N})]}),Object(d.jsx)("div",{className:"campo-form",children:Object(d.jsx)("input",{type:"submit",className:"btn btn-primario btn-block",value:"Registrarme"})})]}),Object(d.jsx)(s.b,{to:"/",className:"enlace-cuenta",children:"Volver a iniciar sesion"})]})]})},h=Object(r.createContext)(),f=function(){var e=Object(r.useContext)(h),t=e.formulario,a=e.mostrarFormulario,n=e.agregarProyecto,c=e.errorFormulario,o=e.mostrarError,s=Object(r.useState)({nombre:""}),i=Object(b.a)(s,2),j=i[0],p=i[1],m=j.nombre;return Object(d.jsxs)(r.Fragment,{children:[Object(d.jsx)("button",{type:"button",className:"btn btn-block btn-primario",onClick:function(){a()},children:"Nuevo Proyecto"}),t?Object(d.jsxs)("form",{className:"formulario-nuevo-proyecto",onSubmit:function(e){e.preventDefault(),""!==m?(n(j),p({nombre:""})):o()},children:[Object(d.jsx)("input",{type:"text",className:"input-text",name:"nombre",placeholder:"Nombre proyecto",onChange:function(e){p(Object(u.a)(Object(u.a)({},j),{},Object(l.a)({},e.target.name,e.target.value)))},value:m}),Object(d.jsx)("input",{type:"submit",className:"btn btn-primario btn-block",value:"Agregar Proyecto"})]}):null,c?Object(d.jsx)("p",{className:"mensaje error",children:"El nombre del Proyecto es obligatorio"}):null]})},x=Object(r.createContext)(),y=function(e){var t=e.proyecto,a=Object(r.useContext)(h).proyectoActual,n=Object(r.useContext)(x).obtenerTareas;return Object(d.jsx)("li",{children:Object(d.jsx)("button",{type:"button",className:"btn btn-blank",onClick:function(){return e=t._id,a(e),void n(e);var e},children:t.nombre})})},v=a(71),g=a(70),N=function(){var e=Object(r.useContext)(h),t=e.mensaje,a=e.proyectos,n=e.obtenerProyectos,c=Object(r.useContext)(j),o=c.alerta,s=c.mostrarAlerta;return Object(r.useEffect)((function(){t&&s(t.msg,t.categoria),n()}),[t]),0===a.length?Object(d.jsx)("p",{children:"No hay proyectos, comienza creando uno"}):Object(d.jsxs)("ul",{className:"listado-proyectos",children:[o?Object(d.jsx)("div",{className:"alerta ".concat(o.categoria),children:o.msg}):null,Object(d.jsx)(v.a,{children:a.map((function(e){return Object(d.jsx)(g.a,{timeout:200,classNames:"proyecto",children:Object(d.jsx)(y,{proyecto:e})},e._id)}))})]})},R=function(){return Object(d.jsxs)("aside",{children:[Object(d.jsxs)("h1",{children:["MERN ",Object(d.jsx)("span",{children:"Taks"})]}),Object(d.jsx)(f,{}),Object(d.jsxs)("div",{className:"proyectos",children:[Object(d.jsx)("h2",{children:"tus Proyectos"}),Object(d.jsx)(N,{})]})]})},T=function(){var e=Object(r.useContext)(p),t=e.usuario,a=e.usuarioAutenticado,n=e.cerrarSesion;return Object(r.useEffect)((function(){a()}),[]),Object(d.jsxs)("header",{className:"app-header",children:[t?Object(d.jsxs)("p",{className:"nombre-usuario",children:["Hola ",Object(d.jsx)("span",{children:t.nombre})]}):null,Object(d.jsx)("nav",{className:"nav-principal",children:Object(d.jsx)("button",{className:"btn btn-blank cerrar-sesion",onClick:function(){return n()},children:"Cerrar sesion"})})]})},A=function(){var e=Object(r.useContext)(h).proyecto,t=Object(r.useContext)(x),a=t.errortarea,n=t.agregarTarea,c=t.validarTarea,o=t.obtenerTareas,s=t.tareaseleccionada,i=t.actualizarTarea,j=t.limpiarTarea;Object(r.useEffect)((function(){f(null!==s?s:{nombre:""})}),[s]);var p=Object(r.useState)({nombre:""}),m=Object(b.a)(p,2),O=m[0],f=m[1],y=O.nombre;if(!e)return null;var v=Object(b.a)(e,1)[0];return Object(d.jsxs)("div",{className:"formulario",children:[Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==y.trim()?(null===s?(O.proyecto=v._id,n(O)):(i(O),j()),o(v.id),f({nombre:""})):c()},children:[Object(d.jsx)("div",{className:"contenedor-input",children:Object(d.jsx)("input",{type:"text",name:"nombre",className:"input-text",placeholder:"Nombre Tarea...",value:y,onChange:function(e){f(Object(u.a)(Object(u.a)({},O),{},Object(l.a)({},e.target.name,e.target.value)))}})}),Object(d.jsx)("div",{className:"contenedor-input",children:Object(d.jsx)("input",{type:"submit",className:"btn btn-primario btn-submit btn-block",value:s?"Editar Tarea":"Agregar tarea"})})]}),a?Object(d.jsx)("p",{className:"mensaje error",children:"El nombre de la tarea es obligatorio"}):null]})},C=function(e){var t=e.tarea,a=Object(r.useContext)(x),n=a.eliminarTarea,c=a.obtenerTareas,o=a.actualizarTarea,s=a.guardarTareaActual,i=Object(r.useContext)(h).proyecto,l=Object(b.a)(i,1)[0],u=function(e){e.estado?e.estado=!1:e.estado=!0,o(e)};return Object(d.jsxs)("li",{className:"tarea sombra",children:[Object(d.jsx)("p",{children:t.nombre}),Object(d.jsx)("div",{className:"estado",children:t.estado?Object(d.jsx)("button",{type:"button",className:"completo",onClick:function(){return u(t)},children:"Completo"}):Object(d.jsx)("button",{type:"button",className:"incompleto",onClick:function(){return u(t)},children:"Incompleto"})}),Object(d.jsxs)("div",{className:"acciones",children:[Object(d.jsx)("button",{type:"button",className:"btn btn-primario",onClick:function(){return function(e){s(e)}(t)},children:"Editar"}),Object(d.jsx)("button",{type:"button",className:"btn btn-secundario",onClick:function(){return e=t._id,n(e,l._id),void c(l.id);var e},children:"Eliminar"})]})]})},E=function(){var e=Object(r.useContext)(h),t=e.proyecto,a=e.eliminarProyecto,n=Object(r.useContext)(x).tareasproyecto;if(!t)return Object(d.jsx)("h2",{children:"Selecciona un proyecto"});var c=Object(b.a)(t,1)[0];return Object(d.jsxs)(r.Fragment,{children:[Object(d.jsxs)("h2",{children:["Proyecto: ",c.nombre]}),Object(d.jsx)("ul",{className:"listado-tareas",children:0===n.length?Object(d.jsx)("li",{className:"tarea",children:Object(d.jsx)("p",{children:"No hay tareas"})}):Object(d.jsx)(v.a,{children:n.map((function(e){return Object(d.jsx)(g.a,{timeout:200,classNames:"tarea",children:Object(d.jsx)(C,{tarea:e})},e.id)}))})}),Object(d.jsx)("button",{type:"button",className:"btn btn-eliminar",onClick:function(){a(c._id)},children:"Eliminar Proyecto \xd7"})]})},k=function(){var e=Object(r.useContext)(p).usuarioAutenticado;return Object(r.useEffect)((function(){e()}),[]),Object(d.jsxs)("div",{className:"contenedor-app",children:[Object(d.jsx)(R,{}),Object(d.jsxs)("div",{className:"seccion-principal",children:[Object(d.jsx)(T,{}),Object(d.jsxs)("main",{children:[Object(d.jsx)(A,{}),Object(d.jsx)("div",{className:"contenedor-tareas",children:Object(d.jsx)(E,{})})]})]})]})},w=a(4),_=a.n(w),S=a(11),P=a(20),I="FORMULARIO_PROYECTO",F="OBTENER_PROYECTOS",L="AGREGAR_PROYECTO",U="VALIDAR_FORMULARIO",G="PROYECTO_ACTUAL",M="ELIMINAR_PROYECTO",D="PROYECTO_ERROR",Y="TAREAS_PROYECTO",z="AGREGAR_TAREA",B="VALIDAR_TAREA",H="ELIMINAR_TAREA",V="TAREA_ACTUAL",J="ACTUALIZAR_TAREA",X="LIMPIAR_TAREA",Z="MOSTRAR_ALERTA",q="OCULTAR_ALERTA",K="REGISTRO_EXITOSO",Q="REGISTRO_ERROR",W="OBTENER_USUARIO",$="LOGIN_EXITOSO",ee="LOGIN_ERROR",te="CERRAR_SESION",ae=function(e,t){switch(t.type){case I:return Object(u.a)(Object(u.a)({},e),{},{formulario:!0});case F:return Object(u.a)(Object(u.a)({},e),{},{proyectos:t.payload});case L:return Object(u.a)(Object(u.a)({},e),{},{proyectos:[].concat(Object(P.a)(e.proyectos),[t.payload]),formulario:!1,errorFormulario:!1});case U:return Object(u.a)(Object(u.a)({},e),{},{errorFormulario:!0});case G:return Object(u.a)(Object(u.a)({},e),{},{proyecto:e.proyectos.filter((function(e){return e._id===t.payload}))});case M:return Object(u.a)(Object(u.a)({},e),{},{proyectos:e.proyectos.filter((function(e){return e._id!==t.payload})),proyecto:null});case D:return Object(u.a)(Object(u.a)({},e),{},{mensaje:t.payload});default:return e}},re=a(35),ne=a.n(re).a.create({baseURL:"https://mern-servidor.herokuapp.com/"}),ce=function(e){var t=Object(r.useReducer)(ae,{proyectos:[],formulario:!1,errorFormulario:!1,proyecto:null,mensaje:null}),a=Object(b.a)(t,2),n=a[0],c=a[1],o=function(){var e=Object(S.a)(_.a.mark((function e(){var t;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ne.get("/api/proyectos");case 3:t=e.sent,c({type:F,payload:t.data.proyectos}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),c({type:D,payload:{msg:"Hubo un error",categoria:"alerta-error"}});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(S.a)(_.a.mark((function e(t){var a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ne.post("/api/proyectos",t);case 3:a=e.sent,c({type:L,payload:a.data}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),c({type:D,payload:{msg:"Hubo un error",categoria:"alerta-error"}});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=Object(S.a)(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ne.delete("/api/proyectos/".concat(t));case 3:c({type:M,payload:t}),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),c({type:D,payload:{msg:"Hubo un error",categoria:"alerta-error"}});case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)(h.Provider,{value:{proyecto:n.proyecto,proyectos:n.proyectos,formulario:n.formulario,errorFormulario:n.errorFormulario,mensaje:n.mensaje,mostrarFormulario:function(){c({type:I})},obtenerProyectos:o,agregarProyecto:s,mostrarError:function(){c({type:U})},proyectoActual:function(e){c({type:G,payload:e})},eliminarProyecto:i},children:e.children})},oe=function(e,t){switch(t.type){case Y:return Object(u.a)(Object(u.a)({},e),{},{tareasproyecto:t.payload});case z:return Object(u.a)(Object(u.a)({},e),{},{tareasproyecto:[t.payload].concat(Object(P.a)(e.tareasproyecto)),errortarea:!1});case B:return Object(u.a)(Object(u.a)({},e),{},{errortarea:!0});case H:return Object(u.a)(Object(u.a)({},e),{},{tareasproyecto:e.tareasproyecto.filter((function(e){return e._id!==t.payload}))});case J:return Object(u.a)(Object(u.a)({},e),{},{tareasproyecto:e.tareasproyecto.map((function(e){return e._id===t.payload._id?t.payload:e}))});case V:return Object(u.a)(Object(u.a)({},e),{},{tareaseleccionada:t.payload});case X:return Object(u.a)(Object(u.a)({},e),{},{tareaseleccionada:null});default:return e}},se=function(e){var t=Object(r.useReducer)(oe,{tareasproyecto:[],errortarea:!1,tareaseleccionada:null}),a=Object(b.a)(t,2),n=a[0],c=a[1],o=function(){var e=Object(S.a)(_.a.mark((function e(t){var a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ne.get("/api/tareas",{params:{proyecto:t}});case 3:a=e.sent,c({type:Y,payload:a.data.tareas}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=Object(S.a)(_.a.mark((function e(t){var a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ne.post("/api/tareas",t);case 3:a=e.sent,console.log(a),c({type:z,payload:a.data.tarea}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=Object(S.a)(_.a.mark((function e(t,a){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ne.delete("/api/tareas/".concat(t),{params:{proyecto:a}});case 3:c({type:H,payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,a){return e.apply(this,arguments)}}(),l=function(){var e=Object(S.a)(_.a.mark((function e(t){var a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ne.put("/api/tareas/".concat(t._id),t);case 3:a=e.sent,c({type:J,payload:a.data.tarea}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)(x.Provider,{value:{tareasproyecto:n.tareasproyecto,errortarea:n.errortarea,tareaseleccionada:n.tareaseleccionada,obtenerTareas:o,agregarTarea:s,validarTarea:function(){c({type:B})},eliminarTarea:i,guardarTareaActual:function(e){c({type:V,payload:e})},actualizarTarea:l,limpiarTarea:function(){c({type:X})}},children:e.children})},ie=function(e,t){switch(t.type){case Z:return{alerta:t.payload};case q:return{alerta:null};default:return e}},le=function(e){var t=Object(r.useReducer)(ie,{alerta:null}),a=Object(b.a)(t,2),n=a[0],c=a[1];return Object(d.jsx)(j.Provider,{value:{alerta:n.alerta,mostrarAlerta:function(e,t){c({type:Z,payload:{msg:e,categoria:t}}),setTimeout((function(){c({type:q})}),5e3)}},children:e.children})},ue=function(e,t){switch(t.type){case $:case K:return localStorage.setItem("token",t.payload.token),Object(u.a)(Object(u.a)({},e),{},{autenticado:!0,mensaje:null,cargando:!1});case W:return Object(u.a)(Object(u.a)({},e),{},{autenticado:!0,usuario:t.payload,cargando:!1});case te:case ee:case Q:return localStorage.removeItem("token"),Object(u.a)(Object(u.a)({},e),{},{token:null,usuario:null,autenticado:null,mensaje:t.payload,cargando:!1});default:return e}},be=function(e){e?ne.defaults.headers.common["x-auth-token"]=e:delete ne.defaults.headers.common["x-auth-token"]},je=function(e){var t={token:localStorage.getItem("token"),autenticado:null,usuario:null,mensaje:null,cargando:!0},a=Object(r.useReducer)(ue,t),n=Object(b.a)(a,2),c=n[0],o=n[1],s=function(){var e=Object(S.a)(_.a.mark((function e(t){var a,r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ne.post("/api/usuarios",t);case 3:a=e.sent,console.log(a.data),o({type:K,payload:a.data}),i(),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),r={msg:e.t0.response.data.msg,categoria:"alerta-error"},o({type:Q,payload:r});case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=Object(S.a)(_.a.mark((function e(){var t,a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=localStorage.getItem("token"))&&be(t),e.prev=2,e.next=5,ne.get("/api/auth");case 5:a=e.sent,console.log(a),o({type:W,payload:a.data.usuario}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0),o({type:ee});case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(S.a)(_.a.mark((function e(t){var a,r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ne.post("/api/auth",t);case 3:a=e.sent,o({type:$,payload:a.data}),i(),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.response.data.msg),r={msg:e.t0.response.data.msg,categoria:"alerta-error"},o({type:ee,payload:r});case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)(p.Provider,{value:{token:c.token,autenticado:c.autenticado,usuario:c.usuario,mensaje:c.mensaje,cargando:c.cargando,registrarUsuario:s,iniciarSesion:l,usuarioAutenticado:i,cerrarSesion:function(){o({type:te})}},children:e.children})},pe=a(36),de=function(e){var t=e.component,a=Object(pe.a)(e,["component"]),n=Object(r.useContext)(p),c=n.autenticado,o=n.cargando,s=n.usuarioAutenticado;return Object(r.useEffect)((function(){s()}),[]),Object(d.jsx)(i.b,Object(u.a)(Object(u.a)({},a),{},{render:function(e){return c||o?Object(d.jsx)(t,Object(u.a)({},e)):Object(d.jsx)(i.a,{to:"/"})}}))},me=localStorage.getItem("token");me&&be(me);var Oe=function(){return Object(d.jsx)(ce,{children:Object(d.jsx)(se,{children:Object(d.jsx)(le,{children:Object(d.jsx)(je,{children:Object(d.jsx)(s.a,{children:Object(d.jsxs)(i.d,{children:[Object(d.jsx)(i.b,{exact:!0,path:"/",component:m}),Object(d.jsx)(i.b,{exact:!0,path:"/nueva-cuenta",component:O}),Object(d.jsx)(de,{exact:!0,path:"/proyectos",component:k})]})})})})})})},he=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,72)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),r(e),n(e),c(e),o(e)}))};o.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(Oe,{})}),document.getElementById("root")),he()}},[[69,1,2]]]);
//# sourceMappingURL=main.f95b4247.chunk.js.map