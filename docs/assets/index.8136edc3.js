(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function N(){}function ae(e){return e()}function $(){return Object.create(null)}function q(e){e.forEach(ae)}function Y(e){return typeof e=="function"}function R(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function ge(e){return Object.keys(e).length===0}function b(e,t){e.appendChild(t)}function O(e,t,n){e.insertBefore(t,n||null)}function B(e){e.parentNode&&e.parentNode.removeChild(e)}function ee(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function w(e){return document.createElement(e)}function T(e){return document.createTextNode(e)}function D(){return T(" ")}function C(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function _(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function _e(e){return Array.from(e.childNodes)}function I(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function te(e,t,n){e.classList[n?"add":"remove"](t)}let Z;function K(e){Z=e}const j=[],ne=[],M=[],le=[],ve=Promise.resolve();let V=!1;function ye(){V||(V=!0,ve.then(ce))}function X(e){M.push(e)}const U=new Set;let P=0;function ce(){const e=Z;do{for(;P<j.length;){const t=j[P];P++,K(t),be(t.$$)}for(K(null),j.length=0,P=0;ne.length;)ne.pop()();for(let t=0;t<M.length;t+=1){const n=M[t];U.has(n)||(U.add(n),n())}M.length=0}while(j.length);for(;le.length;)le.pop()();V=!1,U.clear(),K(e)}function be(e){if(e.fragment!==null){e.update(),q(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(X)}}const W=new Set;let F;function de(){F={r:0,c:[],p:F}}function me(){F.r||q(F.c),F=F.p}function G(e,t){e&&e.i&&(W.delete(e),e.i(t))}function L(e,t,n,l){if(e&&e.o){if(W.has(e))return;W.add(e),F.c.push(()=>{W.delete(e),l&&(n&&e.d(1),l())}),e.o(t)}else l&&l()}function x(e){e&&e.c()}function z(e,t,n,l){const{fragment:o,after_update:i}=e.$$;o&&o.m(t,n),l||X(()=>{const u=e.$$.on_mount.map(ae).filter(Y);e.$$.on_destroy?e.$$.on_destroy.push(...u):q(u),e.$$.on_mount=[]}),i.forEach(X)}function H(e,t){const n=e.$$;n.fragment!==null&&(q(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function pe(e,t){e.$$.dirty[0]===-1&&(j.push(e),ye(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function J(e,t,n,l,o,i,u,h=[-1]){const r=Z;K(e);const s=e.$$={fragment:null,ctx:[],props:i,update:N,not_equal:o,bound:$(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(r?r.$$.context:[])),callbacks:$(),dirty:h,skip_bound:!1,root:t.target||r.$$.root};u&&u(s.root);let v=!1;if(s.ctx=n?n(e,t.props||{},(f,m,...E)=>{const a=E.length?E[0]:m;return s.ctx&&o(s.ctx[f],s.ctx[f]=a)&&(!s.skip_bound&&s.bound[f]&&s.bound[f](a),v&&pe(e,f)),m}):[],s.update(),v=!0,q(s.before_update),s.fragment=l?l(s.ctx):!1,t.target){if(t.hydrate){const f=_e(t.target);s.fragment&&s.fragment.l(f),f.forEach(B)}else s.fragment&&s.fragment.c();t.intro&&G(e.$$.fragment),z(e,t.target,t.anchor,t.customElement),ce()}K(r)}class Q{$destroy(){H(this,1),this.$destroy=N}$on(t,n){if(!Y(n))return N;const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const o=l.indexOf(n);o!==-1&&l.splice(o,1)}}$set(t){this.$$set&&!ge(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Ce(e){let t,n,l,o,i,u,h;return{c(){t=w("button"),n=T(e[0]),l=D(),o=w("sub"),i=T(e[1]),_(t,"class","key svelte-12lotwp"),te(t,"pressed",e[2])},m(r,s){O(r,t,s),b(t,n),b(t,l),b(t,o),b(o,i),u||(h=[C(t,"mousedown",e[3]),C(t,"mouseup",e[4]),C(t,"mouseover",e[3]),C(t,"mouseleave",e[4]),C(t,"focus",e[3]),C(t,"touchstart",e[3]),C(t,"touchend",e[4]),C(t,"touchcancel",e[4]),C(t,"touchmove",e[3]),C(t,"dragenter",e[3]),C(t,"dragleave",e[4]),C(t,"dragend",e[4])],u=!0)},p(r,[s]){s&1&&I(n,r[0]),s&2&&I(i,r[1]),s&4&&te(t,"pressed",r[2])},i:N,o:N,d(r){r&&B(t),u=!1,q(h)}}}function we(e,t,n){let{note:l}=t,{octave:o}=t,{freq:i}=t,{audioContext:u}=t,{mainGainNode:h}=t,{oscList:r}=t,{waveType:s}=t,v=!1;function f(){const a=u.createOscillator();a.connect(h);const g=s;return a.type=g,a.frequency.value=i,a.start(),a}function m(a){if(a.preventDefault(),(a.buttons===1||a.touches&&a.touches.length===1)&&!v){const g=Number(o);n(5,r[g][l]=f(),r),n(2,v=!0),console.log("playing tone")}}function E(a){if(v){const g=Number(o);r[g][l].stop(),delete r[g][l],n(2,v=!1)}}return e.$$set=a=>{"note"in a&&n(0,l=a.note),"octave"in a&&n(1,o=a.octave),"freq"in a&&n(6,i=a.freq),"audioContext"in a&&n(7,u=a.audioContext),"mainGainNode"in a&&n(8,h=a.mainGainNode),"oscList"in a&&n(5,r=a.oscList),"waveType"in a&&n(9,s=a.waveType)},[l,o,v,m,E,r,i,u,h,s]}class Ae extends Q{constructor(t){super(),J(this,t,we,Ce,R,{note:0,octave:1,freq:6,audioContext:7,mainGainNode:8,oscList:5,waveType:9})}}function Ge(){const e=[];for(let t=0;t<9;t++)e[t]=[];return e[0].A=27.5,e[0]["A#"]=29.13523509488062,e[0].B=30.867706328507754,e[1].C=32.70319566257483,e[1]["C#"]=34.64782887210901,e[1].D=36.70809598967595,e[1]["D#"]=38.890872965260115,e[1].E=41.20344461410874,e[1].F=43.653528929125486,e[1]["F#"]=46.2493028389543,e[1].G=48.99942949771866,e[1]["G#"]=51.91308719749314,e[1].A=55,e[1]["A#"]=58.27047018976124,e[1].B=61.735412657015516,e[2].C=65.41,e[2]["C#"]=69.3,e[2].D=73.42,e[2]["D#"]=77.78,e[2].E=82.41,e[2].F=87.31,e[2]["F#"]=92.5,e[2].G=98,e[2]["G#"]=103.83,e[2].A=110,e[2]["A#"]=116.54,e[2].B=123.47,e[3].C=130.81,e[3]["C#"]=138.59,e[3].D=146.83,e[3]["D#"]=155.56,e[3].E=164.81,e[3].F=174.61,e[3]["F#"]=185,e[3].G=196,e[3]["G#"]=207.65,e[3].A=220,e[3]["A#"]=233.08,e[3].B=246.94,e[4].C=261.63,e[4]["C#"]=277.18,e[4].D=293.66,e[4]["D#"]=311.13,e[4].E=329.63,e[4].F=349.23,e[4]["F#"]=369.99,e[4].G=392,e[4]["G#"]=415.3,e[4].A=440,e[4]["A#"]=466.16,e[4].B=493.88,e[5].C=523.25,e[5]["C#"]=554.37,e[5].D=587.33,e[5]["D#"]=622.25,e[5].E=659.25,e[5].F=698.46,e[5]["F#"]=739.99,e[5].G=783.99,e[5]["G#"]=830.61,e[5].A=880,e[5]["A#"]=923.33,e[5].B=987.77,e[6].C=1046.5,e[6]["C#"]=1108.73,e[6].D=1174.66,e[6]["D#"]=1244.51,e[6].E=1318.51,e[6].F=1396.91,e[6]["F#"]=1479.98,e[6].G=1567.98,e[6]["G#"]=1661.22,e[6].A=1760,e[6]["A#"]=1864.66,e[6].B=1975.53,e[7].C=2093.004522404789,e[7]["C#"]=2217.4610478149766,e[7].D=2349.3181433392606,e[7]["D#"]=2489.0158697766474,e[7].E=2637.0204553029594,e[7].F=2793.825851464031,e[7]["F#"]=2959.955381693075,e[7].G=3135.963487853994,e[7]["G#"]=3322.437580639561,e[7].A=3520,e[7]["A#"]=3729.3100921447194,e[7].B=3951.066410048993,e[8].C=4186.009044809578,e}function ke(e){let t,n,l,o,i,u,h,r,s,v;return{c(){t=w("div"),n=w("label"),l=T(e[2]),o=D(),i=w("strong"),u=T(e[6]),h=D(),r=w("input"),_(i,"class","value"),_(n,"for",e[0]),_(r,"type",e[1]),_(r,"id",e[0]),_(r,"name",e[0]),_(r,"min",e[3]),_(r,"max",e[4]),r.value=e[6],_(r,"step",e[5]),_(t,"class","control-group")},m(f,m){O(f,t,m),b(t,n),b(n,l),b(n,o),b(n,i),b(i,u),b(t,h),b(t,r),s||(v=C(r,"change",function(){Y(e[7])&&e[7].apply(this,arguments)}),s=!0)},p(f,[m]){e=f,m&4&&I(l,e[2]),m&64&&I(u,e[6]),m&1&&_(n,"for",e[0]),m&2&&_(r,"type",e[1]),m&1&&_(r,"id",e[0]),m&1&&_(r,"name",e[0]),m&8&&_(r,"min",e[3]),m&16&&_(r,"max",e[4]),m&64&&r.value!==e[6]&&(r.value=e[6]),m&32&&_(r,"step",e[5])},i:N,o:N,d(f){f&&B(t),s=!1,v()}}}function Ne(e,t,n){let{name:l=""}=t,{type:o="range"}=t,{label:i=""}=t,{min:u=0}=t,{max:h=2}=t,{step:r=.1}=t,{value:s=.5}=t,{onChange:v=()=>{}}=t;return e.$$set=f=>{"name"in f&&n(0,l=f.name),"type"in f&&n(1,o=f.type),"label"in f&&n(2,i=f.label),"min"in f&&n(3,u=f.min),"max"in f&&n(4,h=f.max),"step"in f&&n(5,r=f.step),"value"in f&&n(6,s=f.value),"onChange"in f&&n(7,v=f.onChange)},[l,o,i,u,h,r,s,v]}class Ee extends Q{constructor(t){super(),J(this,t,Ne,ke,R,{name:0,type:1,label:2,min:3,max:4,step:5,value:6,onChange:7})}}function oe(e,t,n){const l=e.slice();return l[9]=t[n],l[11]=n,l}function ie(e,t,n){const l=e.slice();return l[12]=t[n],l}function re(e){let t,n=e[12]+"",l;return{c(){t=w("option"),l=T(n),t.__value=e[12],t.value=t.__value},m(o,i){O(o,t,i),b(t,l)},p:N,d(o){o&&B(t)}}}function ue(e){let t,n;return t=new Ae({props:{note:e[9][0],octave:e[9][2],freq:e[9][1],audioContext:e[2],mainGainNode:e[0],oscList:e[3],waveType:e[1]}}),{c(){x(t.$$.fragment)},m(l,o){z(t,l,o),n=!0},p(l,o){const i={};o&1&&(i.mainGainNode=l[0]),o&2&&(i.waveType=l[1]),t.$set(i)},i(l){n||(G(t.$$.fragment,l),n=!0)},o(l){L(t.$$.fragment,l),n=!1},d(l){H(t,l)}}}function Fe(e){let t,n,l,o,i,u,h,r,s,v,f,m,E;l=new Ee({props:{name:"gain",label:"Gain",onChange:e[6],value:e[0].gain.value,max:10,step:1}});let a=e[4],g=[];for(let c=0;c<a.length;c+=1)g[c]=re(ie(e,a,c));let k=e[5],y=[];for(let c=0;c<k.length;c+=1)y[c]=ue(oe(e,k,c));const he=c=>L(y[c],1,1,()=>{y[c]=null});return{c(){t=w("section"),n=w("div"),x(l.$$.fragment),o=D(),i=w("div"),u=w("label"),u.textContent="Wave shape",h=D(),r=w("select");for(let c=0;c<g.length;c+=1)g[c].c();s=D(),v=w("div");for(let c=0;c<y.length;c+=1)y[c].c();_(u,"for","wave"),_(r,"name","wave"),_(i,"class","control-group svelte-t777ea"),_(n,"class","controls svelte-t777ea"),_(t,"class","keyboard svelte-t777ea")},m(c,p){O(c,t,p),b(t,n),z(l,n,null),b(n,o),b(n,i),b(i,u),b(i,h),b(i,r);for(let A=0;A<g.length;A+=1)g[A].m(r,null);b(t,s),b(t,v);for(let A=0;A<y.length;A+=1)y[A].m(v,null);f=!0,m||(E=C(r,"change",e[7]),m=!0)},p(c,[p]){const A={};if(p&1&&(A.value=c[0].gain.value),l.$set(A),p&16){a=c[4];let d;for(d=0;d<a.length;d+=1){const S=ie(c,a,d);g[d]?g[d].p(S,p):(g[d]=re(S),g[d].c(),g[d].m(r,null))}for(;d<g.length;d+=1)g[d].d(1);g.length=a.length}if(p&47){k=c[5];let d;for(d=0;d<k.length;d+=1){const S=oe(c,k,d);y[d]?(y[d].p(S,p),G(y[d],1)):(y[d]=ue(S),y[d].c(),G(y[d],1),y[d].m(v,null))}for(de(),d=k.length;d<y.length;d+=1)he(d);me()}},i(c){if(!f){G(l.$$.fragment,c);for(let p=0;p<k.length;p+=1)G(y[p]);f=!0}},o(c){L(l.$$.fragment,c),y=y.filter(Boolean);for(let p=0;p<y.length;p+=1)L(y[p]);f=!1},d(c){c&&B(t),H(l),ee(g,c),ee(y,c),m=!1,E()}}}let De=5;function Le(e,t,n){const l=new AudioContext,o=[{},{},{},{},{},{},{},{},{},{},{},{}],i=l.createGain(),u=["square","sine","sawtooth","triangle","custom"];let h=u[0];const r=Ge();let s=[];i.connect(l.destination),i.gain.value=De,r.forEach((m,E)=>{Object.entries(m).forEach((g,k)=>{g.push(k),s.push(g)})});function v(m){n(0,i.gain.value=Math.round(1e3*Number(m.target.value))/1e3,i)}function f(m){n(1,h=m.target.value)}return[i,h,l,o,u,s,v,f]}class Be extends Q{constructor(t){super(),J(this,t,Le,Fe,R,{})}}function fe(e){let t,n,l;return{c(){t=w("button"),t.textContent="Show me the keyboard!!!"},m(o,i){O(o,t,i),n||(l=C(t,"click",e[1]),n=!0)},p:N,d(o){o&&B(t),n=!1,l()}}}function se(e){let t,n;return t=new Be({}),{c(){x(t.$$.fragment)},m(l,o){z(t,l,o),n=!0},i(l){n||(G(t.$$.fragment,l),n=!0)},o(l){L(t.$$.fragment,l),n=!1},d(l){H(t,l)}}}function Te(e){let t,n,l,o=e[0]===!1&&fe(e),i=e[0]===!0&&se();return{c(){t=w("main"),o&&o.c(),n=D(),i&&i.c()},m(u,h){O(u,t,h),o&&o.m(t,null),b(t,n),i&&i.m(t,null),l=!0},p(u,[h]){u[0]===!1?o?o.p(u,h):(o=fe(u),o.c(),o.m(t,n)):o&&(o.d(1),o=null),u[0]===!0?i?h&1&&G(i,1):(i=se(),i.c(),G(i,1),i.m(t,null)):i&&(de(),L(i,1,1,()=>{i=null}),me())},i(u){l||(G(i),l=!0)},o(u){L(i),l=!1},d(u){u&&B(t),o&&o.d(),i&&i.d()}}}function qe(e,t,n){let l=!1;return[l,()=>n(0,l=!0)]}class Oe extends Q{constructor(t){super(),J(this,t,qe,Te,R,{})}}new Oe({target:document.getElementById("app")});
