import{ac as Re,y as L,aj as Ue,ak as Ke,e as G,al as ie,z as me,C as se,j as ce,r as z,a as v,w as De,g as le,h as y,A as We,aw as Xe,d as ne,n as Ye,ax as Ge,c as oe,O as Je,H as I,J as be,K as Ze,R as et,aa as Ae,W as j,X as S,a2 as E,a1 as _,a0 as d,Z as x,_ as V,E as R,$ as q,ay as Be,az as Ee,o as tt,Y as $,a5 as Z,a7 as he,aq as at,u as lt,as as nt,f as ot,U as rt,N as ee,Q as ut,a3 as de,a4 as _e,a6 as te,a8 as it}from"./index.a6a0c367.js";import{D as ge,E as ye,c as st,u as Me,b as Qe,s as U,w as ae,x as Ie,B as Ve,y as je,n as Oe,m as He,z as ct,Q as ze,l as dt,k as J,F as Se,G as ve,T as xe,t as vt,q as ft,o as Ce,p as Pe,v as qe,C as pt}from"./QCardActions.3f91a7e5.js";import"./index.2cf0d985.js";function ht(e){const o=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((c,r)=>{const u=parseFloat(c);u&&(o[r]=u)}),o}var mt=Re({name:"touch-swipe",beforeMount(e,{value:o,arg:c,modifiers:r}){if(r.mouse!==!0&&L.has.touch!==!0)return;const u=r.mouseCapture===!0?"Capture":"",a={handler:o,sensitivity:ht(c),direction:ge(r),noop:Ue,mouseStart(l){ye(l,a)&&Ke(l)&&(G(a,"temp",[[document,"mousemove","move",`notPassive${u}`],[document,"mouseup","end","notPassiveCapture"]]),a.start(l,!0))},touchStart(l){if(ye(l,a)){const t=l.target;G(a,"temp",[[t,"touchmove","move","notPassiveCapture"],[t,"touchcancel","end","notPassiveCapture"],[t,"touchend","end","notPassiveCapture"]]),a.start(l)}},start(l,t){L.is.firefox===!0&&ie(e,!0);const m=me(l);a.event={x:m.left,y:m.top,time:Date.now(),mouse:t===!0,dir:!1}},move(l){if(a.event===void 0)return;if(a.event.dir!==!1){se(l);return}const t=Date.now()-a.event.time;if(t===0)return;const m=me(l),g=m.left-a.event.x,f=Math.abs(g),P=m.top-a.event.y,p=Math.abs(P);if(a.event.mouse!==!0){if(f<a.sensitivity[1]&&p<a.sensitivity[1]){a.end(l);return}}else if(f<a.sensitivity[2]&&p<a.sensitivity[2])return;const w=f/t,T=p/t;a.direction.vertical===!0&&f<p&&f<100&&T>a.sensitivity[0]&&(a.event.dir=P<0?"up":"down"),a.direction.horizontal===!0&&f>p&&p<100&&w>a.sensitivity[0]&&(a.event.dir=g<0?"left":"right"),a.direction.up===!0&&f<p&&P<0&&f<100&&T>a.sensitivity[0]&&(a.event.dir="up"),a.direction.down===!0&&f<p&&P>0&&f<100&&T>a.sensitivity[0]&&(a.event.dir="down"),a.direction.left===!0&&f>p&&g<0&&p<100&&w>a.sensitivity[0]&&(a.event.dir="left"),a.direction.right===!0&&f>p&&g>0&&p<100&&w>a.sensitivity[0]&&(a.event.dir="right"),a.event.dir!==!1?(se(l),a.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),st(),a.styleCleanup=M=>{a.styleCleanup=void 0,document.body.classList.remove("non-selectable");const D=()=>{document.body.classList.remove("no-pointer-events--children")};M===!0?setTimeout(D,50):D()}),a.handler({evt:l,touch:a.event.mouse!==!0,mouse:a.event.mouse,direction:a.event.dir,duration:t,distance:{x:f,y:p}})):a.end(l)},end(l){a.event!==void 0&&(ce(a,"temp"),L.is.firefox===!0&&ie(e,!1),a.styleCleanup!==void 0&&a.styleCleanup(!0),l!==void 0&&a.event.dir!==!1&&se(l),a.event=void 0)}};if(e.__qtouchswipe=a,r.mouse===!0){const l=r.mouseCapture===!0||r.mousecapture===!0?"Capture":"";G(a,"main",[[e,"mousedown","mouseStart",`passive${l}`]])}L.has.touch===!0&&G(a,"main",[[e,"touchstart","touchStart",`passive${r.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,o){const c=e.__qtouchswipe;c!==void 0&&(o.oldValue!==o.value&&(typeof o.value!="function"&&c.end(),c.handler=o.value),c.direction=ge(o.modifiers))},beforeUnmount(e){const o=e.__qtouchswipe;o!==void 0&&(ce(o,"main"),ce(o,"temp"),L.is.firefox===!0&&ie(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete e.__qtouchswipe)}});function bt(){const e=new Map;return{getCache:function(o,c){return e[o]===void 0?e[o]=c:e[o]},getCacheWithFn:function(o,c){return e[o]===void 0?e[o]=c():e[o]}}}const _t={name:{required:!0},disable:Boolean},we={setup(e,{slots:o}){return()=>y("div",{class:"q-panel scroll",role:"tabpanel"},ne(o.default))}},gt={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},yt=["update:modelValue","beforeTransition","transition"];function zt(){const{props:e,emit:o,proxy:c}=le(),{getCacheWithFn:r}=bt();let u,a;const l=z(null),t=z(null);function m(i){const b=e.vertical===!0?"up":"left";k((c.$q.lang.rtl===!0?-1:1)*(i.direction===b?1:-1))}const g=v(()=>[[mt,m,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),f=v(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),P=v(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),p=v(()=>`--q-transition-duration: ${e.transitionDuration}ms`),w=v(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),T=v(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),M=v(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);De(()=>e.modelValue,(i,b)=>{const C=A(i)===!0?F(i):-1;a!==!0&&K(C===-1?0:C<F(b)?-1:1),l.value!==C&&(l.value=C,o("beforeTransition",i,b),Ye(()=>{o("transition",i,b)}))});function D(){k(1)}function O(){k(-1)}function H(i){o("update:modelValue",i)}function A(i){return i!=null&&i!==""}function F(i){return u.findIndex(b=>b.props.name===i&&b.props.disable!==""&&b.props.disable!==!0)}function re(){return u.filter(i=>i.props.disable!==""&&i.props.disable!==!0)}function K(i){const b=i!==0&&e.animated===!0&&l.value!==-1?"q-transition--"+(i===-1?f.value:P.value):null;t.value!==b&&(t.value=b)}function k(i,b=l.value){let C=b+i;for(;C>-1&&C<u.length;){const n=u[C];if(n!==void 0&&n.props.disable!==""&&n.props.disable!==!0){K(i),a=!0,o("update:modelValue",n.props.name),setTimeout(()=>{a=!1});return}C+=i}e.infinite===!0&&u.length>0&&b!==-1&&b!==u.length&&k(i,i===-1?u.length:-1)}function N(){const i=F(e.modelValue);return l.value!==i&&(l.value=i),!0}function W(){const i=A(e.modelValue)===!0&&N()&&u[l.value];return e.keepAlive===!0?[y(Ge,T.value,[y(M.value===!0?r(w.value,()=>({...we,name:w.value})):we,{key:w.value,style:p.value},()=>i)])]:[y("div",{class:"q-panel scroll",style:p.value,key:w.value,role:"tabpanel"},[i])]}function ue(){if(u.length!==0)return e.animated===!0?[y(We,{name:t.value},W)]:W()}function Q(i){return u=Xe(ne(i.default,[])).filter(b=>b.props!==null&&b.props.slot===void 0&&A(b.props.name)===!0),u.length}function X(){return u}return Object.assign(c,{next:D,previous:O,goTo:H}),{panelIndex:l,panelDirectives:g,updatePanelsList:Q,updatePanelIndex:N,getPanelContent:ue,getEnabledPanels:re,getPanels:X,isValidPanelName:A,keepAliveProps:T,needsUniqueKeepAliveWrapper:M,goToPanelByOffset:k,goToPanel:H,nextPanel:D,previousPanel:O}}var fe=oe({name:"QTabPanel",props:_t,setup(e,{slots:o}){return()=>y("div",{class:"q-tab-panel",role:"tabpanel"},ne(o.default))}}),St=oe({name:"QTabPanels",props:{...gt,...Me},emits:yt,setup(e,{slots:o}){const c=le(),r=Qe(e,c.proxy.$q),{updatePanelsList:u,getPanelContent:a,panelDirectives:l}=zt(),t=v(()=>"q-tab-panels q-panel-parent"+(r.value===!0?" q-tab-panels--dark q-dark":""));return()=>(u(o),Je("div",{class:t.value},a(),"pan",e.swipeable,()=>l.value))}}),xt=oe({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:o}){const{proxy:{$q:c}}=le(),r=be(Ze,I);if(r===I)return console.error("QPage needs to be a deep child of QLayout"),I;if(be(et,I)===I)return console.error("QPage needs to be child of QPageContainer"),I;const a=v(()=>{const t=(r.header.space===!0?r.header.size:0)+(r.footer.space===!0?r.footer.size:0);if(typeof e.styleFn=="function"){const m=r.isContainer.value===!0?r.containerHeight.value:c.screen.height;return e.styleFn(t,m)}return{minHeight:r.isContainer.value===!0?r.containerHeight.value-t+"px":c.screen.height===0?t!==0?`calc(100vh - ${t}px)`:"100vh":c.screen.height-t+"px"}}),l=v(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>y("main",{class:l.value,style:a.value},ne(o.default))}});const Ct=e=>(Be("data-v-cc764334"),e=e(),Ee(),e),Pt=Ct(()=>x("div",{class:"text-overline"},"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F",-1)),qt={class:"text-h6 q-mt-xs q-mb-xs"},wt={class:""},$t=j({__name:"CategoryItem",props:{category:Object},setup(e){const o=U();return(c,r)=>(S(),E(je,{class:"fit column justify-between",flat:"",bordered:""},{default:_(()=>[d(ae,{horizontal:""},{default:_(()=>[d(ae,{class:"q-pt-xs q-pb-xs"},{default:_(()=>{var u,a;return[Pt,x("div",qt,V((u=e.category)==null?void 0:u.range[0])+" - "+V((a=e.category)==null?void 0:a.range[1])+" \u0431\u0430\u043B\u043B\u043E\u0432 ",1)]}),_:1})]),_:1}),x("div",wt,[d(Ie),d(Ve,{align:"right"},{default:_(()=>[d(R,{dense:"",flat:"",color:"red","no-caps":"",label:"\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C",onClick:r[0]||(r[0]=u=>q(o).changeTemplate("products",e.category))})]),_:1})])]),_:1}))}});var Tt=Ae($t,[["__scopeId","data-v-cc764334"]]);const kt={class:"q-py-md"},Dt={class:"row q-col-gutter-sm"},At=j({__name:"CategoryTemplate",setup(e){const o=Oe(),c=He();return tt(()=>{ct("products").then(r=>{console.log(r),r!=null&&r.data.result?o.initProducts(r==null?void 0:r.data):c.createError({state:!0,message:(r==null?void 0:r.data.message)+"dasdad",reload:!1})})}),(r,u)=>(S(),$("div",kt,[x("div",Dt,[(S(!0),$(Z,null,he(q(o).getProducts,(a,l)=>(S(),$("div",{class:"col-6",key:l},[d(Tt,{category:a},null,8,["category"])]))),128))])]))}});const Bt=e=>(Be("data-v-67b5f4fe"),e=e(),Ee(),e),Et=Bt(()=>x("div",{class:"text-overline"},"\u0422\u043E\u0432\u0430\u0440",-1)),Mt={class:"text-h6 q-mt-xs q-mb-xs"},Qt={class:""},It=j({__name:"ProductItem",props:{product:Object},setup(e){const o=e,c=U(),r=()=>{c.selectItem(o.product),c.changeStateMenu()};return(u,a)=>(S(),E(je,{class:"fit column justify-between",flat:"",bordered:""},{default:_(()=>[d(ae,{horizontal:""},{default:_(()=>[d(ae,{class:"q-pt-xs q-pb-xs"},{default:_(()=>{var l,t;return[Et,x("div",Mt,V((l=e.product)==null?void 0:l.range[0])+"-"+V((t=e.product)==null?void 0:t.range[1])+" \u0431\u0430\u043B\u043B\u043E\u0432 ",1)]}),_:1})]),_:1}),x("div",Qt,[d(Ie),d(Ve,null,{default:_(()=>{var l;return[d(R,{dense:"",flat:"",unelevated:"",color:"ref","text-color":"red",class:"col text-weight-bolder",align:"left",label:((l=e.product)==null?void 0:l.price)+" \u20BD"},null,8,["label"]),d(R,{dense:"",flat:"",unelevated:"",color:"ref","text-color":"red",class:"col",label:"\u041A\u0443\u043F\u0438\u0442\u044C",onClick:r})]}),_:1})])]),_:1}))}});var Vt=Ae(It,[["__scopeId","data-v-67b5f4fe"]]);const jt={class:"q-py-md"},Ot={class:"row q-col-gutter-sm"},Ht=j({__name:"ProductsTemplate",props:{product:Object},setup(e){const o=U();return(c,r)=>(S(),$("div",jt,[x("div",Ot,[(S(!0),$(Z,null,he(q(o).getSelectProduct.items,(u,a)=>(S(),$("div",{class:"col-6",key:a},[d(Vt,{product:u},null,8,["product"])]))),128))])]))}}),$e=["vertical","horizontal"],pe={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},Te={prevent:!0,mouse:!0,mouseAllDir:!0},ke=e=>e>=250?50:Math.ceil(e/5);var Ft=oe({name:"QScrollArea",props:{...Me,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(e,{slots:o,emit:c}){const r=z(!1),u=z(!1),a=z(!1),l={vertical:z(0),horizontal:z(0)},t={vertical:{ref:z(null),position:z(0),size:z(0)},horizontal:{ref:z(null),position:z(0),size:z(0)}},{proxy:m}=le(),g=Qe(e,m.$q);let f,P;const p=z(null),w=v(()=>"q-scrollarea"+(g.value===!0?" q-scrollarea--dark":""));t.vertical.percentage=v(()=>{const n=t.vertical.size.value-l.vertical.value;if(n<=0)return 0;const s=J(t.vertical.position.value/n,0,1);return Math.round(s*1e4)/1e4}),t.vertical.thumbHidden=v(()=>(e.visible===null?a.value:e.visible)!==!0&&r.value===!1&&u.value===!1||t.vertical.size.value<=l.vertical.value+1),t.vertical.thumbStart=v(()=>t.vertical.percentage.value*(l.vertical.value-t.vertical.thumbSize.value)),t.vertical.thumbSize=v(()=>Math.round(J(l.vertical.value*l.vertical.value/t.vertical.size.value,ke(l.vertical.value),l.vertical.value))),t.vertical.style=v(()=>({...e.thumbStyle,...e.verticalThumbStyle,top:`${t.vertical.thumbStart.value}px`,height:`${t.vertical.thumbSize.value}px`})),t.vertical.thumbClass=v(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(t.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),t.vertical.barClass=v(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(t.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),t.horizontal.percentage=v(()=>{const n=t.horizontal.size.value-l.horizontal.value;if(n<=0)return 0;const s=J(Math.abs(t.horizontal.position.value)/n,0,1);return Math.round(s*1e4)/1e4}),t.horizontal.thumbHidden=v(()=>(e.visible===null?a.value:e.visible)!==!0&&r.value===!1&&u.value===!1||t.horizontal.size.value<=l.horizontal.value+1),t.horizontal.thumbStart=v(()=>t.horizontal.percentage.value*(l.horizontal.value-t.horizontal.thumbSize.value)),t.horizontal.thumbSize=v(()=>Math.round(J(l.horizontal.value*l.horizontal.value/t.horizontal.size.value,ke(l.horizontal.value),l.horizontal.value))),t.horizontal.style=v(()=>({...e.thumbStyle,...e.horizontalThumbStyle,[m.$q.lang.rtl===!0?"right":"left"]:`${t.horizontal.thumbStart.value}px`,width:`${t.horizontal.thumbSize.value}px`})),t.horizontal.thumbClass=v(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(t.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),t.horizontal.barClass=v(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(t.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const T=v(()=>t.vertical.thumbHidden.value===!0&&t.horizontal.thumbHidden.value===!0?e.contentStyle:e.contentActiveStyle),M=[[xe,n=>{k(n,"vertical")},void 0,{vertical:!0,...Te}]],D=[[xe,n=>{k(n,"horizontal")},void 0,{horizontal:!0,...Te}]];function O(){const n={};return $e.forEach(s=>{const h=t[s];n[s+"Position"]=h.position.value,n[s+"Percentage"]=h.percentage.value,n[s+"Size"]=h.size.value,n[s+"ContainerSize"]=l[s].value}),n}const H=at(()=>{const n=O();n.ref=m,c("scroll",n)},0);function A(n,s,h){if($e.includes(n)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(n==="vertical"?Se:ve)(p.value,s,h)}function F({height:n,width:s}){let h=!1;l.vertical.value!==n&&(l.vertical.value=n,h=!0),l.horizontal.value!==s&&(l.horizontal.value=s,h=!0),h===!0&&Q()}function re({position:n}){let s=!1;t.vertical.position.value!==n.top&&(t.vertical.position.value=n.top,s=!0),t.horizontal.position.value!==n.left&&(t.horizontal.position.value=n.left,s=!0),s===!0&&Q()}function K({height:n,width:s}){t.horizontal.size.value!==s&&(t.horizontal.size.value=s,Q()),t.vertical.size.value!==n&&(t.vertical.size.value=n,Q())}function k(n,s){const h=t[s];if(n.isFirst===!0){if(h.thumbHidden.value===!0)return;P=h.position.value,u.value=!0}else if(u.value!==!0)return;n.isFinal===!0&&(u.value=!1);const B=pe[s],Y=l[s].value,Fe=(h.size.value-Y)/(Y-h.thumbSize.value),Ne=n.distance[B.dist],Le=P+(n.direction===B.dir?1:-1)*Ne*Fe;X(Le,s)}function N(n,s){const h=t[s];if(h.thumbHidden.value!==!0){const B=n[pe[s].offset];if(B<h.thumbStart.value||B>h.thumbStart.value+h.thumbSize.value){const Y=B-h.thumbSize.value/2;X(Y/l[s].value*h.size.value,s)}h.ref.value!==null&&h.ref.value.dispatchEvent(new MouseEvent(n.type,n))}}function W(n){N(n,"vertical")}function ue(n){N(n,"horizontal")}function Q(){r.value===!0?clearTimeout(f):r.value=!0,f=setTimeout(()=>{r.value=!1},e.delay),e.onScroll!==void 0&&H()}function X(n,s){p.value[pe[s].scroll]=n}function i(){a.value=!0}function b(){a.value=!1}let C=null;return De(()=>m.$q.lang.rtl,n=>{p.value!==null&&ve(p.value,Math.abs(t.horizontal.position.value)*(n===!0?-1:1))}),lt(()=>{C={top:t.vertical.position.value,left:t.horizontal.position.value}}),nt(()=>{if(C===null)return;const n=p.value;n!==null&&(ve(n,C.left),Se(n,C.top))}),ot(H.cancel),Object.assign(m,{getScrollTarget:()=>p.value,getScroll:O,getScrollPosition:()=>({top:t.vertical.position.value,left:t.horizontal.position.value}),getScrollPercentage:()=>({top:t.vertical.percentage.value,left:t.horizontal.percentage.value}),setScrollPosition:A,setScrollPercentage(n,s,h){A(n,s*(t[n].size.value-l[n].value)*(n==="horizontal"&&m.$q.lang.rtl===!0?-1:1),h)}}),()=>y("div",{class:w.value,onMouseenter:i,onMouseleave:b},[y("div",{ref:p,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:e.tabindex!==void 0?e.tabindex:void 0},[y("div",{class:"q-scrollarea__content absolute",style:T.value},rt(o.default,[y(ze,{debounce:0,onResize:K})])),y(dt,{axis:"both",onScroll:re})]),y(ze,{debounce:0,onResize:F}),y("div",{class:t.vertical.barClass.value,style:[e.barStyle,e.verticalBarStyle],"aria-hidden":"true",onMousedown:W}),y("div",{class:t.horizontal.barClass.value,style:[e.barStyle,e.horizontalBarStyle],"aria-hidden":"true",onMousedown:ue}),ee(y("div",{ref:t.vertical.ref,class:t.vertical.thumbClass.value,style:t.vertical.style.value,"aria-hidden":"true"}),M),ee(y("div",{ref:t.horizontal.ref,class:t.horizontal.thumbClass.value,style:t.horizontal.style.value,"aria-hidden":"true"}),D)])}});const Nt=x("div",{class:"text-subtitle1"},"\u0414\u043B\u044F \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u0438, \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0430\u0448 \u0440\u0435\u0433\u0438\u043E\u043D",-1),Lt={class:"q-pa-md"},Rt={class:"row q-mt-md"},Ut=j({__name:"AuthTemplate",setup(e){const o=Oe(),c=U(),r=He();r._init();const u=z(""),a=()=>{var m;pt("create",{id:(m=r.getUser)==null?void 0:m.user.telegram_id,region:l.value.new_code}).then(g=>{g!=null&&g.data.result&&(o.initUser(g.data.data),c.changeTemplate("catalog"))})},l=z({rcode:-1,code:-1,desc:"-1",new_code:"-1"}),t=v(()=>o.getRegions.filter(m=>m.desc.toLowerCase().includes(u.value.toLowerCase())).sort(m=>{var g;return m.new_code===((g=o.getUser)==null?void 0:g.region)?-1:0}));return(m,g)=>(S(),$(Z,null,[Nt,x("div",Lt,[d(vt,{modelValue:u.value,"onUpdate:modelValue":g[0]||(g[0]=f=>u.value=f),label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0440\u0435\u0433\u0438\u043E\u043D\u0430",outlined:"",color:"grey",autofocus:""},{append:_(()=>[d(ut,{name:"search",color:"red-4",size:"32px"})]),_:1},8,["modelValue"]),d(Ft,{style:{height:"200px"}},{default:_(()=>[d(ft,{padding:"",separator:""},{default:_(()=>[q(t).length?te("",!0):ee((S(),E(Ce,{key:0,clickable:"",class:"rounded-borders bg-red-3"},{default:_(()=>[d(Pe,{class:"text-center"},{default:_(()=>[de("\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E")]),_:1})]),_:1})),[[_e]]),(S(!0),$(Z,null,he(q(t),(f,P)=>ee((S(),E(Ce,{clickable:"",class:it(["rounded-borders",{"bg-red-2":l.value.new_code===f.new_code}]),key:P,onClick:p=>l.value=Object.assign({},f)},{default:_(()=>[d(Pe,null,{default:_(()=>[d(qe,null,{default:_(()=>[de(V(f.desc),1)]),_:2},1024),l.value.new_code===f.new_code?(S(),E(qe,{key:0,caption:""},{default:_(()=>[de("\u0412\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u0440\u0435\u0433\u0438\u043E\u043D")]),_:1})):te("",!0)]),_:2},1024)]),_:2},1032,["class","onClick"])),[[_e]])),128))]),_:1})]),_:1}),x("div",Rt,[d(R,{class:"col-12",unelevated:"",color:"red",icon:"check",label:"\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0440\u0435\u0433\u0438\u043E\u043D",onClick:a,disable:l.value.code===-1},null,8,["disable"])])])],64))}}),Kt={class:"row no-wrap q-px-md q-pt-md"},Wt={key:1,class:"text-weight-bolder text-h5 ellipsis q-ml-sm"},Xt={class:"q-px-md q-pb-md"},Yt={class:"q-px-md q-pb-md"},Gt={class:"q-px-md q-pb-md"},ta=j({__name:"IndexPage",setup(e){const o=U();return(c,r)=>(S(),E(xt,{class:"bg-white"},{default:_(()=>[x("div",Kt,[q(o).getTemplate==="products"?(S(),E(R,{key:0,flat:"",dense:"",color:"grey","no-caps":"",label:"\u041D\u0430\u0437\u0430\u0434",icon:"chevron_left",onClick:r[0]||(r[0]=u=>q(o).changeTemplate("catalog"))})):te("",!0),q(o).getTemplate!=="auth"?(S(),$("div",Wt,V(q(o).getTemplateText),1)):te("",!0)]),d(St,{modelValue:q(o).getTemplate,"onUpdate:modelValue":r[1]||(r[1]=u=>q(o).getTemplate=u),animated:""},{default:_(()=>[d(fe,{name:"auth",class:"no-padding"},{default:_(()=>[x("div",Xt,[d(Ut)])]),_:1}),d(fe,{name:"catalog",class:"no-padding"},{default:_(()=>[x("div",Yt,[d(At)])]),_:1}),d(fe,{name:"products",class:"no-padding"},{default:_(()=>[x("div",Gt,[d(Ht)])]),_:1})]),_:1},8,["modelValue"])]),_:1}))}});export{ta as default};
