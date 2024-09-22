/*! For license information please see chunk.493.ea9387258513894c1fa2.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[493],{1108:(e,t,i)=>{i.r(t),i.d(t,{default:()=>K,fetchOptions:()=>X})
var r=i(2294),s=(i(1603),i(4471)),n=i.n(s),o=i(5267)
const a=/\r?\n/
function l(e){const t=Object.create(null)
if(!e)return t
const i=e.split(a)
for(let r=0;r<i.length;r++){const e=i[r]
let s=0,n=!1
for(;s<e.length;s++)if(58===e.charCodeAt(s)){n=!0
break}if(!1===n)continue
const o=e.substring(0,s).trim(),a=e.substring(s+1,e.length).trim()
a&&(t[o.toLowerCase()]=a,t[o]=a)}return t}const c=/\[\]$/
function u(e,t,i){let r,s,n
if(e)if(function(e){return Array.isArray(e)}(t))for(r=0,s=t.length;r<s;r++)c.test(e)?d(i,e,t[r]):u(e+"["+("object"==typeof t[r]&&null!==t[r]?r:"")+"]",t[r],i)
else if(function(e){return"[object Object]"===Object.prototype.toString.call(e)}(t))for(n in t)u(e+"["+n+"]",t[n],i)
else d(i,e,t)
else if(function(e){return Array.isArray(e)}(t))for(r=0,s=t.length;r<s;r++)d(i,t[r].name,t[r].value)
else for(n in t)u(n,t[n],i)
return i}function d(e,t,i){void 0!==i&&(null===i&&(i=""),i="function"==typeof i?i():i,e[e.length]=`${encodeURIComponent(t)}=${encodeURIComponent(i)}`)}let h=null
function p(e,t,i,r={includeId:!0}){(0,o.upgradeStore)(e)
const s=e.serializerFor(t.modelName)
if("function"==typeof s.serializeIntoHash){const e={}
return s.serializeIntoHash(e,t,i,r),e}return s.serialize(i,r)}var f=i(2181),y=i.n(f),m=i(1198)
const g={buildURL:function(e,t,i,r,s){switch(r){case"findRecord":return this.urlForFindRecord(t,e,i)
case"findAll":return this.urlForFindAll(e,i)
case"query":return this.urlForQuery(s||{},e)
case"queryRecord":return this.urlForQueryRecord(s||{},e)
case"findMany":return this.urlForFindMany(t,e,i)
case"findHasMany":return this.urlForFindHasMany(t,e,i)
case"findBelongsTo":return this.urlForFindBelongsTo(t,e,i)
case"createRecord":return this.urlForCreateRecord(e,i)
case"updateRecord":return this.urlForUpdateRecord(t,e,i)
case"deleteRecord":return this.urlForDeleteRecord(t,e,i)
default:return this._buildURL(e,t)}},_buildURL:function(e,t){let i
const r=[],{host:s}=this,n=this.urlPrefix()
e&&(i=this.pathForType(e),i&&r.push(i)),t&&r.push(encodeURIComponent(t)),n&&r.unshift(n)
let o=r.join("/")
return!s&&o&&"/"!==o.charAt(0)&&(o="/"+o),o},urlForFindRecord:function(e,t,i){return this._buildURL(t,e)},urlForFindAll:function(e,t){return this._buildURL(e)},urlForQueryRecord:function(e,t){return this._buildURL(t)},urlForQuery:function(e,t){return this._buildURL(t)},urlForFindMany:function(e,t,i){return this._buildURL(t)},urlForFindHasMany:function(e,t,i){return this._buildURL(t,e)},urlForFindBelongsTo:function(e,t,i){return this._buildURL(t,e)},urlForCreateRecord:function(e,t){return this._buildURL(e)},urlForDeleteRecord:function(e,t,i){return this._buildURL(t,e)},urlForUpdateRecord:function(e,t,i){return this._buildURL(t,e)},urlPrefix:function(e,t){const{namespace:i}=this
let{host:r}=this
if(r&&"/"!==r||(r=""),e)return/^\/\//.test(e)||/http(s)?:\/\//.test(e)?e:"/"===e.charAt(0)?`${r}${e}`:`${t}/${e}`
const s=[]
return r&&s.push(r),i&&s.push(i),s.join("/")},pathForType:function(e){const t=(0,m.camelize)(e)
return(0,m.pluralize)(t)}},_=y().create(g)
var b=i(5225)
function v(e,t="Adapter operation failed"){this.isAdapterError=!0
const i=Error.call(this,t)
i&&(this.stack=i.stack,this.description=i.description,this.fileName=i.fileName,this.lineNumber=i.lineNumber,this.message=i.message,this.name=i.name,this.number=i.number),this.errors=e||[{title:"Adapter Error",detail:t}]}v.prototype=Object.create(Error.prototype),v.prototype.code="AdapterError",v.extend=R(v)
const w=(0,b.L1)("AdapterError",v)
function R(e){return function({message:t}={}){return k(e,t)}}function k(e,t){const i=function(i,r){e.call(this,i,r||t)}
return i.prototype=Object.create(e.prototype),i.extend=R(i),i}const A=(0,b.L1)("InvalidError",k(w,"The adapter rejected the commit because it was invalid"))
A.prototype.code="InvalidError"
const S=(0,b.L1)("TimeoutError",k(w,"The adapter operation timed out"))
S.prototype.code="TimeoutError"
const E=(0,b.L1)("AbortError",k(w,"The adapter operation was aborted"))
E.prototype.code="AbortError"
const T=(0,b.L1)("UnauthorizedError",k(w,"The adapter operation is unauthorized"))
T.prototype.code="UnauthorizedError"
const C=(0,b.L1)("ForbiddenError",k(w,"The adapter operation is forbidden"))
C.prototype.code="ForbiddenError"
const M=(0,b.L1)("NotFoundError",k(w,"The adapter could not find the resource"))
M.prototype.code="NotFoundError"
const F=(0,b.L1)("ConflictError",k(w,"The adapter operation failed due to a conflict"))
F.prototype.code="ConflictError"
const O=(0,b.L1)("ServerError",k(w,"The adapter operation failed due to a server error"))
O.prototype.code="ServerError"
var j=i(2735),z=Object.defineProperty;((e,t)=>{for(var i in t)z(e,i,{get:t[i],enumerable:!0})})({},{c:()=>I,f:()=>D,g:()=>$,i:()=>N,m:()=>q,n:()=>x,p:()=>L})
var P=new WeakMap
function D(e,t,i,r){return $(e.prototype,t,i,r)}function $(e,t,i,r){let s={configurable:!0,enumerable:!0,writable:!0,initializer:null}
r&&(s.initializer=r)
for(let n of i)s=n(e,t,s)||s
void 0===s.initializer?Object.defineProperty(e,t,s):function(e,t,i){let r=P.get(e)
r||(r=new Map,P.set(e,r)),r.set(t,i)}(e,t,s)}function q({prototype:e},t,i){return x(e,t,i)}function x(e,t,i){let r={...Object.getOwnPropertyDescriptor(e,t)}
for(let s of i)r=s(e,t,r)||r
void 0!==r.initializer&&(r.value=r.initializer?r.initializer.call(e):void 0,r.initializer=void 0),Object.defineProperty(e,t,r)}function N(e,t){let i=function(e,t){let i=e.prototype
for(;i;){let e=P.get(i)?.get(t)
if(e)return e
i=i.prototype}}(e.constructor,t)
i&&Object.defineProperty(e,t,{enumerable:i.enumerable,configurable:i.configurable,writable:i.writable,value:i.initializer?i.initializer.call(e):void 0})}function I(e,t){return t.reduce(((e,t)=>t(e)||e),e)}function L(e,t){for(let[i,r,s]of t)"field"===i?B(e,r,s):x(e,r,s)
return e}function B(e,t,i){let r={configurable:!0,enumerable:!0,writable:!0,initializer:()=>Object.getOwnPropertyDescriptor(e,t)?.value}
for(let s of i)r=s(e,t,r)||r
r.initializer&&(r.value=r.initializer.call(e),delete r.initializer),Object.defineProperty(e,t,r)}var U=new WeakMap
class H extends(n()){constructor(...e){var t,i
super(...e),t=U,i=void N(this,"store"),function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(this,t),t.set(this,i)}findRecord(e,t,i,r){}findAll(e,t,i,r){}query(e,t,i){}queryRecord(e,t,i,r){}serialize(e,t){return e.serialize(t)}createRecord(e,t,i){}updateRecord(e,t,i){}deleteRecord(e,t,i){}get coalesceFindRequests(){const e=this._coalesceFindRequests
return"boolean"==typeof e?e:this._coalesceFindRequests=!0}set coalesceFindRequests(e){this._coalesceFindRequests=e}groupRecordsForFindMany(e,t){return[t]}shouldReloadRecord(e,t){return!1}shouldReloadAll(e,t){return!t.length}shouldBackgroundReloadRecord(e,t){return!0}shouldBackgroundReloadAll(e,t){return!0}}function V(e,t,i){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var i=t.call(e,"string")
if("object"!=typeof i)return i
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}$(H.prototype,"store",[j.inject])
class K extends(H.extend(_)){constructor(...e){super(...e),V(this,"useFetch",!0),V(this,"_defaultContentType","application/json; charset=utf-8"),V(this,"maxURLLength",2048)}get fastboot(){return this._fastboot||(this._fastboot=(0,r.getOwner)(this).lookup("service:fastboot"))}set fastboot(e){this._fastboot=e}sortQueryParams(e){const t=Object.keys(e),i=t.length
if(i<2)return e
const r={},s=t.sort()
for(let n=0;n<i;n++)r[s[n]]=e[s[n]]
return r}get coalesceFindRequests(){const e=this._coalesceFindRequests
return"boolean"==typeof e?e:this._coalesceFindRequests=!1}set coalesceFindRequests(e){this._coalesceFindRequests=e}findRecord(e,t,i,r){const s=this.buildURL(t.modelName,i,r,"findRecord"),n=this.buildQuery(r)
return this.ajax(s,"GET",{data:n})}findAll(e,t,i,r){const s=this.buildQuery(r),n=this.buildURL(t.modelName,null,r,"findAll")
return i&&(s.since=i),this.ajax(n,"GET",{data:s})}query(e,t,i){const r=this.buildURL(t.modelName,null,null,"query",i)
return this.sortQueryParams&&(i=this.sortQueryParams(i)),this.ajax(r,"GET",{data:i})}queryRecord(e,t,i,r){const s=this.buildURL(t.modelName,null,null,"queryRecord",i)
return this.sortQueryParams&&(i=this.sortQueryParams(i)),this.ajax(s,"GET",{data:i})}findMany(e,t,i,r){const s=this.buildURL(t.modelName,i,r,"findMany")
return this.ajax(s,"GET",{data:{ids:i}})}findHasMany(e,t,i,r){const s=t.id,n=t.modelName
return i=this.urlPrefix(i,this.buildURL(n,s,t,"findHasMany")),this.ajax(i,"GET")}findBelongsTo(e,t,i,r){const s=t.id,n=t.modelName
return i=this.urlPrefix(i,this.buildURL(n,s,t,"findBelongsTo")),this.ajax(i,"GET")}createRecord(e,t,i){const r=this.buildURL(t.modelName,null,i,"createRecord"),s=p(e,t,i)
return this.ajax(r,"POST",{data:s})}updateRecord(e,t,i){const r=p(e,t,i,{}),s=i.modelName,n=i.id,o=this.buildURL(s,n,i,"updateRecord")
return this.ajax(o,"PUT",{data:r})}deleteRecord(e,t,i){const r=i.modelName,s=i.id
return this.ajax(this.buildURL(r,s,i,"deleteRecord"),"DELETE")}_stripIDFromURL(e,t){const i=t.modelName,r=t.id,s=this.buildURL(i,r,t).split("/"),n=s[s.length-1]
return decodeURIComponent(n)===r?s[s.length-1]="":r&&function(e,t){return"function"!=typeof String.prototype.endsWith?e.includes(t,e.length-t.length):e.endsWith(t)}(n,"?id="+r)&&(s[s.length-1]=n.substring(0,n.length-r.length-1)),s.join("/")}groupRecordsForFindMany(e,t){const i=new Map,r=this.maxURLLength
t.forEach((t=>{const r=this._stripIDFromURL(e,t)
i.has(r)||i.set(r,[]),i.get(r).push(t)}))
const s=[]
return i.forEach(((t,i)=>{const n=function(e,t,i,r){let s=0
const n=t._stripIDFromURL(e,i[0]),o=[[]]
return i.forEach((e=>{const t=encodeURIComponent(e.id).length+11
n.length+s+t>=r&&(s=0,o.push([])),s+=t
const i=o.length-1
o[i].push(e)})),o}(e,this,t,r)
n.forEach((e=>s.push(e)))})),s}handleResponse(e,t,i,r){if(this.isSuccess(e,t,i))return i
if(this.isInvalid(e,t,i))return new A("object"==typeof i&&"errors"in i?i.errors:void 0)
const s=this.normalizeErrorResponse(e,t,i),n=this.generatedDetailedMessage(e,t,i,r)
switch(e){case 401:return new T(s,n)
case 403:return new C(s,n)
case 404:return new M(s,n)
case 409:return new F(s,n)
default:if(e>=500)return new O(s,n)}return new w(s,n)}isSuccess(e,t,i){return e>=200&&e<300||304===e}isInvalid(e,t,i){return 422===e}async ajax(e,t,i={}){const r={url:e,method:t}
if(this.useFetch){const s=this.ajaxOptions(e,t,i),n=await this._fetchRequest(s),o=await function(e,t){return(i=e.text(),Promise.resolve(i).catch((e=>e))).then((i=>function(e,t,i){let r=i,s=null
if(!e.ok)return i
const n=e.status,o=""===i||null===i,a=204===n||205===n||"HEAD"===t.method
if(!e.ok||!a&&!o){try{r=JSON.parse(i)}catch(e){if(!(e instanceof SyntaxError))return e
e.payload=i,s=e}return s||r}}(e,t,i)))
var i}(n,r)
if(!n.ok||o instanceof Error)throw function(e,t,i,r,s){const n=J(i)
return 200===n.status&&t instanceof Error?(n.errorThrown=t,t=n.errorThrown.payload):(n.errorThrown=null,"string"==typeof t&&(t=e.parseErrorResponse(t))),G(e,t,s,n)}(this,o,n,0,r)
return function(e,t,i,r){return W(e,t,r,J(i))}(this,o,n,r)}return function(e,t,i){const r=e.ajaxOptions(t.url,t.method,i)
return new Promise(((i,s)=>{r.success=function(r,s,n){const o=function(e,t,i,r){return W(e,t,r,Q(i))}(e,r,n,t)
i(o)},r.error=function(i,r,n){const o=function(e,t,i,r){const s=Q(t)
s.errorThrown=i
const n=e.parseErrorResponse(t.responseText)
return G(e,n,r,s)}(e,i,n,t)
s(o)},e._ajax(r)}))}(this,r,i)}_ajaxRequest(e){jQuery.ajax(e)}_fetchRequest(e){const t=function(){if(null!==h)return h()
if("function"==typeof fetch)h=()=>fetch
else if("undefined"!=typeof FastBoot)try{const e=FastBoot.require("node-fetch"),t=/^https?:\/\//,i=/^\/\//
function r(e){if(null===e)throw new Error("Trying to fetch with relative url but the application hasn't finished loading FastBootInfo, see details at https://github.com/ember-cli/ember-fetch#relative-url")
const t="undefined:"===e.protocol?"http:":e.protocol
return[e.get("host"),t]}function s(e){if(i.test(e)){const[t]=r(null)
e=t+e}else if(!t.test(e)){const[t,i]=r(null)
e=i+"//"+t+e}return e}function n(t,i){if(t&&"object"==typeof t&&"href"in t){const r=s(t.href),n=Object.assign({},t,{url:r})
return e(n,i)}if("string"==typeof t){const r=s(t)
return e(r,i)}return e(t,i)}h=()=>n}catch(o){throw new Error("Unable to create a compatible 'fetch' for FastBoot with node-fetch")}return h()}()
return t(e.url,e)}_ajax(e){this.useFetch?this._fetchRequest(e):this._ajaxRequest(e)}ajaxOptions(e,t,i){let r=Object.assign({url:e,method:t,type:t},i)
void 0!==this.headers?r.headers={...this.headers,...r.headers}:i.headers||(r.headers={})
const s=r.contentType||this._defaultContentType
return this.useFetch?(r.data&&"GET"!==r.type&&r.headers&&(r.headers["Content-Type"]||r.headers["content-type"]||(r.headers["content-type"]=s)),r=X(r)):(r.data&&"GET"!==r.type&&(r={...r,contentType:s}),r=function(e,t){return e.dataType="json",e.context=t,e.data&&"GET"!==e.type&&(e.data=JSON.stringify(e.data)),e.beforeSend=function(t){e.headers&&Object.keys(e.headers).forEach((i=>{const r=e.headers&&e.headers[i]
"string"==typeof r&&t.setRequestHeader(i,r)}))},e}(r,this)),r.url=this._ajaxURL(r.url),r}_ajaxURL(e){if(this.fastboot?.isFastBoot){const t=/^https?:\/\//,i=/^\/\//,r=this.fastboot.request.protocol,s=this.fastboot.request.host
if(i.test(e))return`${r}${e}`
if(!t.test(e))try{return`${r}//${s}${e}`}catch(e){throw new Error("You are using Ember Data with no host defined in your adapter. This will attempt to use the host of the FastBoot request, which is not configured for the current host of this request. Please set the hostWhitelist property for in your environment.js. FastBoot Error: "+e.message)}}return e}parseErrorResponse(e){let t=e
try{t=JSON.parse(e)}catch(e){}return t}normalizeErrorResponse(e,t,i){return i&&"object"==typeof i&&"errors"in i&&Array.isArray(i.errors)?i.errors:[{status:`${e}`,title:"The backend responded with an error",detail:"string"==typeof i?i:JSON.stringify(i)}]}generatedDetailedMessage(e,t,i,r){let s
const n=t["content-type"]||"Empty Content-Type"
return s="text/html"===n&&"string"==typeof i&&i.length>250?"[Omitted Lengthy HTML]":"object"==typeof i&&null!==i?JSON.stringify(i,null,2):i,["Ember Data Request "+r.method+" "+r.url+" returned a "+e,"Payload ("+n+")",s].join("\n")}buildQuery(e){const t={}
if(e){const{include:i}=e
i&&(t.include=i)}return t}}function W(e,t,i,r){let s
try{s=e.handleResponse(r.status,r.headers,t,i)}catch(e){return Promise.reject(e)}return s&&s.isAdapterError?Promise.reject(s):s}function G(e,t,i,r){let s
if(r.errorThrown instanceof Error&&""!==t)s=r.errorThrown
else if("timeout"===r.textStatus)s=new S
else if("abort"===r.textStatus||0===r.status)s=function(e,t){const{method:i,url:r,errorThrown:s}=e,{status:n}=t,o=[{title:"Adapter Error",detail:`Request failed: ${i} ${r} ${String(s??"")}`.trim(),status:n}]
return new E(o)}(i,r)
else try{s=e.handleResponse(r.status,r.headers,t||r.errorThrown,i)}catch(e){s=e}return s}function J(e){return{status:e.status,textStatus:e.statusText,headers:Y(e.headers)}}function Q(e){return{status:e.status,textStatus:e.statusText,headers:l(e.getAllResponseHeaders())}}function Y(e){const t={}
return e&&e.forEach(((e,i)=>t[i]=e)),t}function X(e,t){if(e.credentials=e.credentials||"same-origin",e.data)if("GET"===e.method||"HEAD"===e.method){if(Object.keys(e.data).length&&e.url){const t=e.url.includes("?")?"&":"?"
e.url+=`${t}${i=e.data,u("",i,[]).join("&")}`}}else"[object Object]"===Object.prototype.toString.call(e.data)?e.body=JSON.stringify(e.data):e.body=e.data
var i
return e}x(K.prototype,"fastboot",[(0,s.computed)()])},5989:(e,t,i)=>{i.r(t),i.d(t,{graphFor:()=>H,isBelongsTo:()=>u,peekGraph:()=>U})
var r=i(1603),s=i(4813),n=i(5225)
function o(e){return e._store}function a(e,t,i){return(e[t]=e[t]||Object.create(null))[i]}function l(e,t,i,r){(e[t]=e[t]||Object.create(null))[i]=r}function c(e){if(!e.id)return!0
const t=(0,s.oX)(e)
return Boolean(t?.isNew(e))}function u(e){return"belongsTo"===e.definition.kind}function d(e){return e.definition.isImplicit}function h(e){return"hasMany"===e.definition.kind}function p(e,t){if(u(e))e.remoteState&&t(e.remoteState),e.localState&&e.localState!==e.remoteState&&t(e.localState)
else if(h(e)){for(let i=0;i<e.remoteState.length;i++){const r=e.remoteState[i]
t(r)}e.additions?.forEach(t)}else e.localMembers.forEach(t),e.remoteMembers.forEach((i=>{e.localMembers.has(i)||t(i)}))}function f(e,t,i,r){if(u(t))t.remoteState===i&&(t.remoteState=null),t.localState===i&&(t.localState=null,y(e,t.identifier,t.definition.key))
else if(h(t)){t.remoteMembers.delete(i),t.additions?.delete(i)
const r=t.removals?.delete(i),s=t.remoteState.indexOf(i)
if(-1!==s&&t.remoteState.splice(s,1),!r){const r=t.localState?.indexOf(i);-1!==r&&void 0!==r&&(t.localState.splice(r,1),y(e,t.identifier,t.definition.key))}}else t.remoteMembers.delete(i),t.localMembers.delete(i)}function y(e,t,i){t!==e._removing&&e.store.notifyChange(t,"relationships",i)}function m(e){return"belongsTo"===e.kind||"hasMany"===e.kind}const g=null,_=Date.now()
function b(e,t){return`implicit-${e}:${t}${_}`}function v(e,t){e.inverseKind=t.kind,e.inverseKey=t.key,e.inverseType=t.type,e.inverseIsAsync=t.isAsync,e.inverseIsCollection=t.isCollection,e.inverseIsPolymorphic=t.isPolymorphic,e.inverseIsImplicit=t.isImplicit
const i=!1!==e.resetOnRemoteUpdate&&!1!==t.resetOnRemoteUpdate
e.resetOnRemoteUpdate=i,t.resetOnRemoteUpdate=i}function w(e){var t
m(e)||(e={kind:"resource"===(t=e).kind?"belongsTo":"hasMany",name:t.name,type:t.type,options:Object.assign({},{async:!1,inverse:null,resetOnRemoteUpdate:!1},t.options)})
const i={},r=e.options
return i.kind=e.kind,i.key=e.name,i.type=e.type,i.isAsync=r.async,i.isImplicit=!1,i.isCollection="hasMany"===e.kind,i.isPolymorphic=r&&!!r.polymorphic,i.inverseKey=r&&r.inverse||"",i.inverseType="",i.inverseIsAsync=g,i.inverseIsImplicit=r&&null===r.inverse||g,i.inverseIsCollection=g,i.resetOnRemoteUpdate=!!m(e)&&!1!==e.options?.resetOnRemoteUpdate,i}function R(e,t,i){i?function(e,t,i){const s=t.value,n=e.get(t.record,t.field)
i&&e._addToTransaction(n),n.state.hasReceivedData=!0
const{definition:o}=n,{type:a}=n.definition,l=T(s,n,(r=>{a!==r.type&&e.registerPolymorphicType(a,r.type),n.additions?.has(r)?n.additions.delete(r):n.isDirty=!0,k(e,r,o.inverseKey,t.record,i)}),(r=>{n.removals?.has(r)?n.removals.delete(r):n.isDirty=!0,A(e,r,o.inverseKey,t.record,i)}))
if(n.remoteMembers=l.finalSet,n.remoteState=l.finalState,l.changed&&(n.isDirty=!0),n._diff=l,"hasMany"===n.definition.kind&&!1!==n.definition.resetOnRemoteUpdate){const s={removals:[],additions:[],triggered:!1}
n.removals&&(n.isDirty=!0,n.removals.forEach((r=>{s.triggered=!0,s.removals.push(r),k(e,r,o.inverseKey,t.record,i)})),n.removals=null),n.additions&&(n.additions.forEach((r=>{c(r)||(s.triggered=!0,s.additions.push(r),n.isDirty=!0,n.additions.delete(r),A(e,r,o.inverseKey,t.record,i))})),0===n.additions.size&&(n.additions=null)),s.triggered&&(0,r.deprecate)(`EmberData is changing the default semantics of updates to the remote state of relationships.\n\nThe following local state was cleared from the <${n.identifier.type}>.${n.definition.key} hasMany relationship but will not be once this deprecation is resolved by opting into the new behavior:\n\n\tAdded: [${s.additions.map((e=>e.lid)).join(", ")}]\n\tRemoved: [${s.removals.map((e=>e.lid)).join(", ")}]`,!1,{id:"ember-data:deprecate-relationship-remote-update-clearing-local-state",for:"ember-data",since:{enabled:"5.3",available:"5.3"},until:"6.0",url:"https://deprecations.emberjs.com/v5.x#ember-data-deprecate-relationship-remote-update-clearing-local-state"})}n.isDirty&&S(e,n)}(e,t,i):function(e,t,i){const r=t.value,s=e.get(t.record,t.field),n=0===s.remoteState.length&&null===s.localState&&!1===s.state.hasReceivedData
s.state.hasReceivedData=!0
const{additions:o,removals:a}=s,{inverseKey:l,type:c}=s.definition,{record:u}=t,d=s.isDirty
s.isDirty=!1
const h=r=>{const n=a?.has(r)
!n&&o?.has(r)||(c!==r.type&&e.registerPolymorphicType(c,r.type),s.isDirty=!0,k(e,r,l,t.record,i),n&&a.delete(r))},p=t=>{const r=o?.has(t)
!r&&a?.has(t)||(s.isDirty=!0,A(e,t,l,u,i),r&&o.delete(t))},f=T(r,s,h,p)
s.isDirty||f.changed,o&&o.size>0&&o.forEach((e=>{f.add.has(e)||p(e)})),a&&a.size>0&&a.forEach((e=>{f.del.has(e)||h(e)})),s.additions=f.add,s.removals=f.del,s.localState=f.finalState,s.isDirty=d,(n||!d)&&y(e,t.record,t.field)}(e,t,i)}function k(e,t,i,r,s){const n=e.get(t,i),{type:o}=n.definition
o!==r.type&&e.registerPolymorphicType(o,r.type),u(n)?(n.state.hasReceivedData=!0,n.state.isEmpty=!1,s&&(e._addToTransaction(n),null!==n.remoteState&&A(e,n.remoteState,n.definition.inverseKey,t,s),n.remoteState=r),n.localState!==r&&(!s&&n.localState&&A(e,n.localState,n.definition.inverseKey,t,s),n.localState=r,y(e,t,i))):h(n)?s?n.remoteMembers.has(r)||(e._addToTransaction(n),n.remoteState.push(r),n.remoteMembers.add(r),n.additions?.has(r)?n.additions.delete(r):(n.isDirty=!0,n.state.hasReceivedData=!0,S(e,n))):C(e,0,n,r,null)&&y(e,t,i):s?n.remoteMembers.has(r)||(n.remoteMembers.add(r),n.localMembers.add(r)):n.localMembers.has(r)||n.localMembers.add(r)}function A(e,t,i,r,s){const n=e.get(t,i)
u(n)?(n.state.isEmpty=!0,s&&(e._addToTransaction(n),n.remoteState=null),n.localState===r&&(n.localState=null,y(e,t,i))):h(n)?s?(e._addToTransaction(n),function(e,t){const{remoteMembers:i,additions:r,removals:s,remoteState:n}=e
if(!i.has(t))return!1
i.delete(t)
let o=n.indexOf(t)
return n.splice(o,1),s?.has(t)?(s.delete(t),!1):(e.localState&&(o=e.localState.indexOf(t),e.localState.splice(o,1)),!0)}(n,r)&&y(e,t,i)):M(n,r)&&y(e,t,i):s?(n.remoteMembers.delete(r),n.localMembers.delete(r)):r&&n.localMembers.has(r)&&n.localMembers.delete(r)}function S(e,t){e._scheduleLocalSync(t)}function E(e,t,i=!1){const s=e.get(t.record,t.field)
i&&e._addToTransaction(s)
const{definition:n,state:o}=s,a=i?"remoteState":"localState",l=s[a]
if(t.value!==l)if(l&&A(e,l,n.inverseKey,t.record,i),s[a]=t.value,o.hasReceivedData=!0,o.isEmpty=null===t.value,o.isStale=!1,o.hasFailedLoadAttempt=!1,t.value&&(n.type!==t.value.type&&e.registerPolymorphicType(n.type,t.value.type),k(e,t.value,n.inverseKey,t.record,i)),i){const{localState:t,remoteState:i}=s
if(t&&c(t)&&!i)return
t!==i&&t===l?(s.localState=i,y(e,s.identifier,s.definition.key)):t!==i&&t!==l&&!1!==s.definition.resetOnRemoteUpdate&&(s.localState=i,(0,r.deprecate)(`EmberData is changing the default semantics of updates to the remote state of relationships.\n\nThe following local state was cleared from the <${s.identifier.type}>.${s.definition.key} belongsTo relationship but will not be once this deprecation is resolved:\n\n\t${t?"Added: "+t.lid+"\n\t":""}${l?"Removed: "+l.lid:""}`,!1,{id:"ember-data:deprecate-relationship-remote-update-clearing-local-state",for:"ember-data",since:{enabled:"5.3",available:"5.3"},until:"6.0",url:"https://deprecations.emberjs.com/v5.x#ember-data-deprecate-relationship-remote-update-clearing-local-state"}),y(e,s.identifier,s.definition.key))}else y(e,s.identifier,s.definition.key)
else if(o.hasReceivedData=!0,i){const{localState:o}=s
if(o&&c(o)&&!l)return
l&&o===l?function(e,t,i,r,s){const n=e.get(t,i)
h(n)&&s&&n.remoteMembers.has(r)&&y(e,t,i)}(e,l,n.inverseKey,t.record,i):o!==t.value&&!1!==s.definition.resetOnRemoteUpdate&&(s.localState=l,(0,r.deprecate)(`EmberData is changing the default semantics of updates to the remote state of relationships.\n\nThe following local state was cleared from the <${s.identifier.type}>.${s.definition.key} belongsTo relationship but will not be once this deprecation is resolved:\n\n\t${o?"Added: "+o.lid+"\n\t":""}${l?"Removed: "+l.lid:""}`,!1,{id:"ember-data:deprecate-relationship-remote-update-clearing-local-state",for:"ember-data",since:{enabled:"5.3",available:"5.3"},until:"6.0",url:"https://deprecations.emberjs.com/v5.x#ember-data-deprecate-relationship-remote-update-clearing-local-state"}),y(e,s.identifier,s.definition.key))}}function T(e,t,i,r){const s=new Set(e),{remoteState:n,remoteMembers:o}=t
if(e.length!==s.size){const{diff:t,duplicates:a}=function(e,t,i,r,s,n){const o=e.length,a=i.length,l=Math.max(o,a)
let c=t.size!==r.size
const u=new Set,d=new Set,h=new Map,p=new Set,f=[]
for(let y=0,m=0;y<l;y++){let l,g=!1
if(y<o)if(l=e[y],p.has(l)){let e=h.get(l)
void 0===e&&(e=[],h.set(l,e)),e.push(y)}else f[m]=l,p.add(l),g=!0,r.has(l)||(c=!0,u.add(l),s(l))
if(y<a){const e=i[y]
l!==i[m]&&(c=!0),t.has(e)||(c=!0,d.add(e),n(e))}else g&&m<a&&l!==i[m]&&(c=!0)
g&&m++}return{diff:{add:u,del:d,finalState:f,finalSet:p,changed:c},duplicates:h}}(e,s,n,o,i,r)
return t}return function(e,t,i,r,s,n){const o=e.length,a=i.length,l=Math.max(o,a),c=o===a
let u=t.size!==r.size
const d=new Set,h=new Set
for(let p=0;p<l;p++){let l
if(p<o&&(l=e[p],r.has(l)||(u=!0,d.add(l),s(l))),p<a){const e=i[p]
c&&l!==e&&(u=!0),t.has(e)||(u=!0,h.add(e),n(e))}}return{add:d,del:h,finalState:e,finalSet:t,changed:u}}(e,s,n,o,i,r)}function C(e,t,i,r,s){const{remoteMembers:n,removals:o}=i
let a=i.additions
if((n.has(r)||a?.has(r))&&!o?.has(r))return!1
if(o?.has(r))o.delete(r)
else{a||(a=i.additions=new Set),i.state.hasReceivedData=!0,a.add(r)
const{type:t}=i.definition
t!==r.type&&e.registerPolymorphicType(r.type,t)}return i.localState&&(null!==s?i.localState.splice(s,0,r):i.localState.push(r)),!0}function M(e,t){const{remoteMembers:i,additions:r}=e
let s=e.removals
if(!i.has(t)&&!r?.has(t)||s?.has(t))return!1
if(r?.has(t)?r.delete(t):(s||(s=e.removals=new Set),s.add(t)),e.localState){const i=e.localState.indexOf(t)
e.localState.splice(i,1)}return!0}function F(e,t,i,r){u(r)?E(e,{op:"replaceRelatedRecord",record:t,field:i,value:r.remoteState},!1):R(e,{op:"replaceRelatedRecords",record:t,field:i,value:r.remoteState.slice()},!1)}function O(e){const t={}
return e.state.hasReceivedData&&(t.data=function(e){if(!e.isDirty)return e.localState
const t=e.remoteState.slice()
return e.removals?.forEach((e=>{const i=t.indexOf(e)
t.splice(i,1)})),e.additions?.forEach((e=>{t.push(e)})),e.localState=t,e.isDirty=!1,t}(e)),e.links&&(t.links=e.links),e.meta&&(t.meta=e.meta),t}function j(e,t,i,r,s,n){C(e,0,t,r,s??null)&&k(e,r,t.definition.inverseKey,i,n)}function z(e,t,i,r,s){M(t,r)&&A(e,r,t.definition.inverseKey,i,s)}function P(e){switch(typeof e){case"object":return e
case"string":return{href:e}}}function D(e,t){for(let i=0;i<e.length;i++)e[i]=t.upgradeIdentifier(e[i])
return e}const $=(0,n.L1)("Graphs",new Map)
class q{constructor(e){this._definitionCache=Object.create(null),this._metaCache=Object.create(null),this._potentialPolymorphicTypes=Object.create(null),this.identifiers=new Map,this.store=e,this.isDestroyed=!1,this._willSyncRemote=!1,this._willSyncLocal=!1,this._pushedUpdates={belongsTo:void 0,hasMany:void 0,deletions:[]},this._updatedRelationships=new Set,this._transaction=null,this._removing=null,this.silenceNotifications=!1}has(e,t){const i=this.identifiers.get(e)
return!!i&&void 0!==i[t]}getDefinition(e,t){let i=this._metaCache[e.type],r=i?.[t]
if(!r){const s=function(e,t,i){const r=e._definitionCache,s=e.store,n=e._potentialPolymorphicTypes,{type:c}=t
let u=a(r,c,i)
if(void 0!==u)return u
const d=s.schema.fields(t).get(i)
if(!d){if(n[c]){const e=Object.keys(n[c])
for(let t=0;t<e.length;t++){const s=a(r,e[t],i)
if(s)return l(r,c,i,s),s.rhs_modelNames.push(c),s}}return r[c][i]=null,null}const h=w(d)
let p,f
const y=h.type
if(null===h.inverseKey?p=null:(f=function(e,t,i){const r=e.schema.fields(t).get(i)
return r?r.options.inverse:null}(o(s),t,i),p=!f&&h.isPolymorphic&&h.inverseKey?{kind:"belongsTo",key:h.inverseKey,type:c,isAsync:!1,isImplicit:!1,isCollection:!1,isPolymorphic:!1}:f?w(s.schema.fields({type:y}).get(f)):null),!p){f=b(c,i),p={kind:"implicit",key:f,type:c,isAsync:!1,isImplicit:!0,isCollection:!0,isPolymorphic:!1},v(h,p),v(p,h)
const e={lhs_key:`${c}:${i}`,lhs_modelNames:[c],lhs_baseModelName:c,lhs_relationshipName:i,lhs_definition:h,lhs_isPolymorphic:h.isPolymorphic,rhs_key:p.key,rhs_modelNames:[y],rhs_baseModelName:y,rhs_relationshipName:p.key,rhs_definition:p,rhs_isPolymorphic:!1,hasInverse:!1,isSelfReferential:c===y,isReflexive:!1}
return l(r,y,f,e),l(r,c,i,e),e}const m=p.type
if(u=a(r,m,i)||a(r,y,f),u)return(u.lhs_baseModelName===m?u.lhs_modelNames:u.rhs_modelNames).push(c),l(r,c,i,u),u
v(h,p),v(p,h)
const g=[c]
c!==m&&g.push(m)
const _=m===y,R={lhs_key:`${m}:${i}`,lhs_modelNames:g,lhs_baseModelName:m,lhs_relationshipName:i,lhs_definition:h,lhs_isPolymorphic:h.isPolymorphic,rhs_key:`${y}:${f}`,rhs_modelNames:[y],rhs_baseModelName:y,rhs_relationshipName:f,rhs_definition:p,rhs_isPolymorphic:p.isPolymorphic,hasInverse:!0,isSelfReferential:_,isReflexive:_&&i===f}
return l(r,m,i,R),l(r,c,i,R),l(r,y,f,R),R}(this,e,t)
r=function(e,t,i){const r=e.isSelfReferential
return 1==(i===e.lhs_relationshipName)&&(!0===r||t===e.lhs_baseModelName||e.rhs_isPolymorphic&&e.lhs_modelNames.includes(t))}(s,e.type,t)?s.lhs_definition:s.rhs_definition,i=this._metaCache[e.type]=i||{},i[t]=r}return r}get(e,t){let i=this.identifiers.get(e)
i||(i=Object.create(null),this.identifiers.set(e,i))
let r=i[t]
if(!r){const s=this.getDefinition(e,t)
r="belongsTo"===s.kind?i[t]=function(e,t){return{definition:e,identifier:t,state:{hasReceivedData:!1,isEmpty:!0,isStale:!1,hasFailedLoadAttempt:!1,shouldForceReload:!1,hasDematerializedInverse:!1},transactionRef:0,localState:null,remoteState:null,meta:null,links:null}}(s,e):"hasMany"===s.kind?i[t]=function(e,t){return{definition:e,identifier:t,state:{hasReceivedData:!1,isEmpty:!0,isStale:!1,hasFailedLoadAttempt:!1,shouldForceReload:!1,hasDematerializedInverse:!1},remoteMembers:new Set,remoteState:[],additions:null,removals:null,meta:null,links:null,localState:null,isDirty:!0,transactionRef:0,_diff:void 0}}(s,e):i[t]=function(e,t){return{definition:e,identifier:t,localMembers:new Set,remoteMembers:new Set}}(s,e)}return r}getData(e,t){const i=this.get(e,t)
return u(i)?function(e){let t
const i={}
return e.localState&&(t=e.localState),null===e.localState&&e.state.hasReceivedData&&(t=null),e.links&&(i.links=e.links),void 0!==t&&(i.data=t),e.meta&&(i.meta=e.meta),i}(i):O(i)}registerPolymorphicType(e,t){const i=this._potentialPolymorphicTypes
let r=i[e]
r||(r=i[e]=Object.create(null)),r[t]=!0
let s=i[t]
s||(s=i[t]=Object.create(null)),s[e]=!0}isReleasable(e){const t=this.identifiers.get(e)
if(!t)return!0
const i=Object.keys(t)
for(let r=0;r<i.length;r++){const s=t[i[r]]
if(void 0!==s&&s.definition.inverseIsAsync&&!c(e))return!1}return!0}unload(e,t){const i=this.identifiers.get(e)
i&&Object.keys(i).forEach((e=>{const r=i[e]
r&&(function(e,t,i){if(d(t))return void(e.isReleasable(t.identifier)&&I(e,t))
const{identifier:r}=t,{inverseKey:s}=t.definition
t.definition.inverseIsImplicit||p(t,(t=>function(e,t,i,r,s){if(!e.has(t,i))return
const n=e.get(t,i)
u(n)&&n.localState&&r!==n.localState||function(e,t,i,r){if(u(t)){const i=t.localState
!t.definition.isAsync||i&&c(i)?(t.localState===i&&null!==i&&(t.localState=null),t.remoteState===i&&null!==i&&(t.remoteState=null,t.state.hasReceivedData=!0,t.state.isEmpty=!0,t.localState&&!c(t.localState)&&(t.localState=null))):t.state.hasDematerializedInverse=!0,r||y(e,t.identifier,t.definition.key)}else!t.definition.isAsync||i&&c(i)?f(e,t,i):t.state.hasDematerializedInverse=!0,r||y(e,t.identifier,t.definition.key)}(e,n,r,s)}(e,t,s,r,i))),t.definition.inverseIsImplicit||t.definition.inverseIsAsync||(t.state.isStale=!0,N(t),t.definition.isAsync||i||y(e,t.identifier,t.definition.key))}(this,r,t),d(r)&&(i[e]=void 0))}))}_isDirty(e,t){const i=this.identifiers.get(e)
if(!i)return!1
const r=i[t]
if(!r)return!1
if(u(r))return r.localState!==r.remoteState
if(h(r)){const e=null!==r.additions&&r.additions.size>0,t=null!==r.removals&&r.removals.size>0
return e||t||L(r)}return!1}getChanged(e){const t=this.identifiers.get(e),i=new Map
if(!t)return i
const r=Object.keys(t)
for(let s=0;s<r.length;s++){const e=r[s],n=t[e]
if(n)if(u(n))n.localState!==n.remoteState&&i.set(e,{kind:"resource",remoteState:n.remoteState,localState:n.localState})
else if(h(n)){const t=null!==n.additions&&n.additions.size>0,r=null!==n.removals&&n.removals.size>0,s=L(n);(t||r||s)&&i.set(e,{kind:"collection",additions:new Set(n.additions)||new Set,removals:new Set(n.removals)||new Set,remoteState:n.remoteState,localState:O(n).data||[],reordered:s})}}return i}hasChanged(e){const t=this.identifiers.get(e)
if(!t)return!1
const i=Object.keys(t)
for(let r=0;r<i.length;r++)if(this._isDirty(e,i[r]))return!0
return!1}rollback(e){const t=this.identifiers.get(e),i=[]
if(!t)return i
const r=Object.keys(t)
for(let s=0;s<r.length;s++){const n=r[s],o=t[n]
o&&this._isDirty(e,n)&&(F(this,e,n,o),i.push(n))}return i}remove(e){this._removing=e,this.unload(e),this.identifiers.delete(e),this._removing=null}push(e){if("deleteRecord"===e.op)this._pushedUpdates.deletions.push(e)
else{const t=this.getDefinition(e.record,e.field)
!function(e,t,i){const r=e[t.kind]=e[t.kind]||new Map
let s=r.get(t.inverseType)
s||(s=new Map,r.set(t.inverseType,s))
let n=s.get(i.field)
n||(n=[],s.set(i.field,n)),n.push(i)}(this._pushedUpdates,t,e)}this._willSyncRemote||(this._willSyncRemote=!0,o(this.store)._schedule("coalesce",(()=>this._flushRemoteQueue())))}update(e,t=!1){switch(e.op){case"mergeIdentifiers":{const t=this.identifiers.get(e.record)
t&&function(e,t,i){Object.keys(i).forEach((r=>{const s=i[r]
s&&function(e,t,i){i.identifier=t.value,p(i,(r=>{const s=e.get(r,i.definition.inverseKey)
!function(e,t,i){u(t)?function(e,t,i){t.remoteState===i.record&&(t.remoteState=i.value),t.localState===i.record&&(t.localState=i.value,y(e,t.identifier,t.definition.key))}(e,t,i):h(t)?function(e,t,i){if(t.remoteMembers.has(i.record)){t.remoteMembers.delete(i.record),t.remoteMembers.add(i.value)
const e=t.remoteState.indexOf(i.record)
t.remoteState.splice(e,1,i.value),t.isDirty=!0}t.additions?.has(i.record)&&(t.additions.delete(i.record),t.additions.add(i.value),t.isDirty=!0),t.removals?.has(i.record)&&(t.removals.delete(i.record),t.removals.add(i.value),t.isDirty=!0),t.isDirty&&y(e,t.identifier,t.definition.key)}(e,t,i):function(e,t,i){t.remoteMembers.has(i.record)&&(t.remoteMembers.delete(i.record),t.remoteMembers.add(i.value)),t.localMembers.has(i.record)&&(t.localMembers.delete(i.record),t.localMembers.add(i.value))}(0,t,i)}(e,s,t)}))}(e,t,s)}))}(this,e,t)
break}case"updateRelationship":(function(e,t){const i=e.get(t.record,t.field),{definition:s,state:n,identifier:o}=i,{isCollection:a}=s,l=t.value
let c=!1,u=!1
if(l.meta&&(i.meta=l.meta),void 0!==l.data)if(c=!0,a){null===l.data&&(l.data=[])
const i=e.store.identifierCache
e.update({op:"replaceRelatedRecords",record:o,field:t.field,value:D(l.data,i)},!0)}else e.update({op:"replaceRelatedRecord",record:o,field:t.field,value:l.data?e.store.identifierCache.upgradeIdentifier(l.data):null},!0)
else!1!==s.isAsync||n.hasReceivedData||(c=!0,a?e.update({op:"replaceRelatedRecords",record:o,field:t.field,value:[]},!0):e.update({op:"replaceRelatedRecord",record:o,field:t.field,value:null},!0))
if(l.links){const e=i.links
if(i.links=l.links,l.links.related){const t=P(l.links.related),i=e&&e.related?P(e.related):null,a=i?i.href:null
t&&t.href&&t.href!==a&&((0,r.warn)(`You pushed a record of type '${o.type}' with a relationship '${s.key}' configured as 'async: false'. You've included a link but no primary data, this may be an error in your payload. EmberData will treat this relationship as known-to-be-empty.`,s.isAsync||n.hasReceivedData,{id:"ds.store.push-link-for-sync-relationship"}),u=!0)}}if(i.state.hasFailedLoadAttempt=!1,c){const e=null===l.data||Array.isArray(l.data)&&0===l.data.length
i.state.hasReceivedData=!0,i.state.isStale=!1,i.state.hasDematerializedInverse=!1,i.state.isEmpty=e}else u&&(a||!i.state.hasReceivedData||(d=i.transactionRef,h=e._transaction,0===d||null===h||d<h)?(i.state.isStale=!0,y(e,i.identifier,i.definition.key)):i.state.isStale=!1)
var d,h})(this,e)
break
case"deleteRecord":{const t=e.record,i=this.identifiers.get(t)
i&&(Object.keys(i).forEach((e=>{const t=i[e]
t&&(i[e]=void 0,I(this,t))})),this.identifiers.delete(t))
break}case"replaceRelatedRecord":E(this,e,t)
break
case"addToRelatedRecords":(function(e,t,i){const{record:r,value:s,index:n}=t,o=e.get(r,t.field)
if(Array.isArray(s))for(let a=0;a<s.length;a++)j(e,o,r,s[a],void 0!==n?n+a:n,i)
else j(e,o,r,s,n,i)
y(e,o.identifier,o.definition.key)})(this,e,t)
break
case"removeFromRelatedRecords":(function(e,t,i){const{record:r,value:s}=t,n=e.get(r,t.field)
if(Array.isArray(s))for(let o=0;o<s.length;o++)z(e,n,r,s[o],i)
else z(e,n,r,s,i)
y(e,n.identifier,n.definition.key)})(this,e,t)
break
case"replaceRelatedRecords":R(this,e,t)}}_scheduleLocalSync(e){this._updatedRelationships.add(e),this._willSyncLocal||(this._willSyncLocal=!0,o(this.store)._schedule("sync",(()=>this._flushLocalQueue())))}_flushRemoteQueue(){if(!this._willSyncRemote)return
let e=(0,n.Yj)("transactionRef")??0
this._transaction=++e,(0,n.dV)("transactionRef",e),this._willSyncRemote=!1
const t=this._pushedUpdates,{deletions:i,hasMany:r,belongsTo:s}=t
t.deletions=[],t.hasMany=void 0,t.belongsTo=void 0
for(let n=0;n<i.length;n++)this.update(i[n],!0)
r&&x(this,r),s&&x(this,s),this._transaction=null}_addToTransaction(e){e.transactionRef=this._transaction}_flushLocalQueue(){if(!this._willSyncLocal)return
if(this.silenceNotifications)return this.silenceNotifications=!1,void(this._updatedRelationships=new Set)
this._willSyncLocal=!1
const e=this._updatedRelationships
this._updatedRelationships=new Set,e.forEach((e=>y(this,e.identifier,e.definition.key)))}destroy(){$.delete(this.store),this.identifiers.clear(),this.store=null,this.isDestroyed=!0}}function x(e,t){t.forEach((t=>{t.forEach((t=>{!function(e,t){for(let i=0;i<t.length;i++)e.update(t[i],!0)}(e,t)}))}))}function N(e){u(e)?(e.localState=null,e.remoteState=null,e.state.hasReceivedData=!1,e.state.isEmpty=!0):(e.remoteMembers.clear(),e.remoteState=[],e.additions=null,e.removals=null,e.localState=null)}function I(e,t){const{identifier:i}=t,{inverseKey:r}=t.definition
p(t,(t=>{e.has(t,r)&&f(e,e.get(t,r),i)})),u(t)?(t.definition.isAsync||N(t),t.localState=null):h(t)?t.definition.isAsync||(N(t),y(e,t.identifier,t.definition.key)):(t.remoteMembers.clear(),t.localMembers.clear())}function L(e){if(e.isDirty)return!1
const{remoteState:t,localState:i,additions:r,removals:s}=e
for(let n=0,o=0;n<t.length;n++){const e=t[n],a=i[o]
if(e!==a){if(s&&s.has(e))continue
if(r&&r.has(a)){o++,n--
continue}return!0}o++}return!1}function B(e){return void 0!==e._instanceCache?e._instanceCache._storeWrapper:e}function U(e){return $.get(B(e))}function H(e){const t=B(e)
let i=$.get(t)
return i||(i=new q(t),$.set(t,i),o(t)._graph=i),i}},9229:(e,t,i)=>{i.d(t,{F:()=>f,S:()=>p,a:()=>c,b:()=>l,c:()=>h,i:()=>u,n:()=>d,u:()=>_})
var r=i(4813),s=i(1603),n=i(5583),o=i(5225),a=i(8022)
class l{constructor(e,t,i={}){this.__store=e,this._snapshots=null,this.modelName=t,this.adapterOptions=i.adapterOptions,this.include=i.include}get _recordArray(){return this.__store.peekAll(this.modelName)}get length(){return this._recordArray.length}snapshots(){if(null!==this._snapshots)return this._snapshots
this.__store
const{_fetchManager:e}=this.__store
return this._snapshots=this._recordArray[r.u2].map((t=>e.createSnapshot(t))),this._snapshots}}function c(e){}function u(e,t){return Array.isArray(e)?e.map(t):t(e,0)}function d(e,t,i,r,s,n){return e?e.normalizeResponse(t,i,r,s,n):r}class h{constructor(e,t,i){this._store=i,this.__attributes=null,this._belongsToRelationships=Object.create(null),this._belongsToIds=Object.create(null),this._hasManyRelationships=Object.create(null),this._hasManyIds=Object.create(null)
const r=!!i._instanceCache.peek(t)
if(this.modelName=t.type,this.identifier=t,r&&this._attributes,this.id=t.id,this.adapterOptions=e.adapterOptions,this.include=e.include,this.modelName=t.type,r){const e=this._store.cache
this._changedAttributes=e.changedAttrs(t)}}get record(){return this._store.peekRecord(this.identifier)}get _attributes(){if(null!==this.__attributes)return this.__attributes
const e=this.__attributes=Object.create(null),{identifier:t}=this,i=this._store.schema.fields(t),r=this._store.cache
return i.forEach(((i,s)=>{"attribute"===i.kind&&(e[s]=r.getAttr(t,s))})),e}get isNew(){const e=this._store.cache
return e?.isNew(this.identifier)||!1}attr(e){if(e in this._attributes)return this._attributes[e]}attributes(){return{...this._attributes}}changedAttributes(){const e=Object.create(null)
if(!this._changedAttributes)return e
const t=Object.keys(this._changedAttributes)
for(let i=0,r=t.length;i<r;i++){const r=t[i]
e[r]=this._changedAttributes[r].slice()}return e}belongsTo(e,t){const r=!(!t||!t.id)
let s
const n=this._store
if(!0===r&&e in this._belongsToIds)return this._belongsToIds[e]
if(!1===r&&e in this._belongsToRelationships)return this._belongsToRelationships[e]
n.schema.fields({type:this.modelName}).get(e)
const o=(0,a.A)(i(5989)).graphFor,{identifier:l}=this,c=o(this._store).getData(l,e),u=c&&c.data,d=u?n.identifierCache.getOrCreateRecordIdentifier(u):null
if(c&&void 0!==c.data){const e=n.cache
s=d&&!e.isDeleted(d)?r?d.id:n._fetchManager.createSnapshot(d):null}return r?this._belongsToIds[e]=s:this._belongsToRelationships[e]=s,s}hasMany(e,t){const r=!(!t||!t.ids)
let s
const n=this._hasManyIds[e],o=this._hasManyRelationships[e]
if(!0===r&&e in this._hasManyIds)return n
if(!1===r&&e in this._hasManyRelationships)return o
const l=this._store,c=(l.schema.fields({type:this.modelName}).get(e),(0,a.A)(i(5989)).graphFor),{identifier:u}=this,d=c(this._store).getData(u,e)
return d.data&&(s=[],d.data.forEach((e=>{const t=l.identifierCache.getOrCreateRecordIdentifier(e)
l.cache.isDeleted(t)||(r?s.push(t.id):s.push(l._fetchManager.createSnapshot(t)))}))),r?this._hasManyIds[e]=s:this._hasManyRelationships[e]=s,s}eachAttribute(e,t){this._store.schema.fields(this.identifier).forEach(((i,r)=>{"attribute"===i.kind&&e.call(t,r,i)}))}eachRelationship(e,t){this._store.schema.fields(this.identifier).forEach(((i,r)=>{"belongsTo"!==i.kind&&"hasMany"!==i.kind||e.call(t,r,i)}))}serialize(e){return this._store,this._store.serializerFor(this.modelName).serialize(this,e)}}const p=(0,o.L1)("SaveOp",Symbol("SaveOp"))
class f{constructor(e){this._store=e,this._pendingFetch=new Map,this.requestCache=e.getRequestStateService(),this.isDestroyed=!1}createSnapshot(e,t={}){return new h(t,e,this._store)}scheduleSave(e,t){const i=(0,n.ud)(),r={data:[{op:"saveRecord",recordIdentifier:e,options:t}]},s={snapshot:this.createSnapshot(e,t),resolver:i,identifier:e,options:t,queryRequest:r},o=this.requestCache._enqueue(i.promise,s.queryRequest)
return function(e,t){const{snapshot:i,resolver:r,identifier:s,options:n}=t,o=e.adapterFor(s.type),a=n[p],l=i.modelName,c=e.modelFor(l)
let u=Promise.resolve().then((()=>o[a](e,c,i)))
const h=e.serializerFor(l)
u=u.then((t=>{if(t)return d(h,e,c,t,i.id,a)})),r.resolve(u)}(this._store,s),o}scheduleFetch(e,t,r){const s={data:[{op:"findRecord",recordIdentifier:e,options:t}]},o=this.getPendingFetch(e,t)
if(o)return o
const l=e.type,c=(0,n.ud)(),u={identifier:e,resolver:c,options:t,queryRequest:s},d=c.promise,h=this._store,p=!h._instanceCache.recordIsLoaded(e)
let f=this.requestCache._enqueue(d,u.queryRequest).then((i=>{i.data&&!Array.isArray(i.data)&&(i.data.lid=e.lid)
const r=h._push(i,t.reload)
return r&&!Array.isArray(r)?r:e}),(t=>{const r=h.cache
if(!r||r.isEmpty(e)||p){let t=!0
if(!r){const r=(0,(0,a.A)(i(5989)).graphFor)(h)
t=r.isReleasable(e),t||r.unload(e,!0)}(r||t)&&(h._enableAsyncFlush=!0,h._instanceCache.unloadRecord(e),h._enableAsyncFlush=null)}throw t}))
0===this._pendingFetch.size&&new Promise((e=>setTimeout(e,0))).then((()=>{this.flushAllPendingFetches()}))
const y=this._pendingFetch
let m=y.get(l)
m||(m=new Map,y.set(l,m))
let g=m.get(e)
return g||(g=[],m.set(e,g)),g.push(u),u.promise=f,f}getPendingFetch(e,t){const i=this._pendingFetch.get(e.type)?.get(e)
if(i){const e=i.find((e=>function(e={},t={}){return i=e.adapterOptions,r=t.adapterOptions,(!i||i===r||0===Object.keys(i).length)&&function(e,t){if(!e?.length)return!0
if(!t?.length)return!1
const i=(Array.isArray(e)?e:e.split(",")).sort(),r=(Array.isArray(t)?t:t.split(",")).sort()
if(i.join(",")===r.join(","))return!0
for(let s=0;s<i.length;s++)if(!r.includes(i[s]))return!1
return!0}(e.include,t.include)
var i,r}(t,e.options)))
if(e)return e.promise}}flushAllPendingFetches(){if(this.isDestroyed)return
const e=this._store
this._pendingFetch.forEach(((t,i)=>function(e,t,i){const r=e.adapterFor(i)
if(r.findMany&&r.coalesceFindRequests){const s=[]
t.forEach(((e,i)=>{e.length>1||(t.delete(i),s.push(e[0]))}))
const n=s.length
if(n>1){const t=new Array(n),o=new Map
for(let i=0;i<n;i++){const r=s[i]
t[i]=e._fetchManager.createSnapshot(r.identifier,r.options),o.set(t[i],r)}let a
a=r.groupRecordsForFindMany?r.groupRecordsForFindMany(e,t):[t]
for(let s=0,n=a.length;s<n;s++)g(e,o,a[s],r,i)}else 1===n&&m(e,r,s[0])}t.forEach((t=>{t.forEach((t=>{m(e,r,t)}))}))}(e,t,i))),this._pendingFetch.clear()}fetchDataIfNeededForIdentifier(e,t={},i){const r=function(e,t){const i=e.cache
if(!i)return!0
const r=i.isNew(t),s=i.isDeleted(t),n=i.isEmpty(t)
return(!r||s)&&n}(this._store._instanceCache,e),s=function(e,t){const i=e.store.getRequestStateService()
return!e.recordIsLoaded(t)&&i.getPendingRequestsForRecord(t).some((e=>"query"===e.type))}(this._store._instanceCache,e)
let n
return r?(t.reload=!0,n=this.scheduleFetch(e,t,i)):n=s?this.getPendingFetch(e,t):Promise.resolve(e),n}destroy(){this.isDestroyed=!0}}function y(e,t,i){for(let r=0,s=t.length;r<s;r++){const s=t[r],n=e.get(s)
n&&n.resolver.reject(i||new Error(`Expected: '<${s.modelName}:${s.id}>' to be present in the adapter provided payload, but it was not found.`))}}function m(e,t,i){const n=i.identifier,o=n.type,a=e._fetchManager.createSnapshot(n,i.options),l=e.modelFor(n.type),c=n.id
let u=Promise.resolve().then((()=>t.findRecord(e,l,n.id,a)))
u=u.then((t=>{const i=d(e.serializerFor(o),e,l,t,c,"findRecord")
return(0,s.warn)(`You requested a record of type '${o}' with id '${c}' but the adapter returned a payload with primary data having an id of '${i.data.id}'. Use 'store.findRecord()' when the requested id is the same as the one returned by the adapter. In other cases use 'store.queryRecord()' instead.`,(0,r.pG)(i.data.id)===(0,r.pG)(c),{id:"ds.store.findRecord.id-mismatch"}),i})),i.resolver.resolve(u)}function g(e,t,i,r,n){i.length>1?function(e,t,i,r){const s=e.modelFor(i)
return Promise.resolve().then((()=>{const i=r.map((e=>e.id))
return t.findMany(e,s,i,r)})).then((t=>d(e.serializerFor(i),e,s,t,null,"findMany")))}(e,r,n,i).then((r=>{!function(e,t,i,r){const n=new Map
for(let s=0;s<i.length;s++){const e=i[s].id
let t=n.get(e)
t||(t=[],n.set(e,t)),t.push(i[s])}const o=Array.isArray(r.included)?r.included:[],a=r.data
for(let s=0,c=a.length;s<c;s++){const e=a[s],i=n.get(e.id)
n.delete(e.id),i?i.forEach((i=>{t.get(i).resolver.resolve({data:e})})):o.push(e)}if(o.length>0&&e._push({data:null,included:o},!0),0===n.size)return
const l=[]
n.forEach((e=>{l.push(...e)})),(0,s.warn)('Ember Data expected to find records with the following ids in the adapter response from findMany but they were missing: [ "'+[...n.values()].map((e=>e[0].id)).join('", "')+'" ]',{id:"ds.store.missing-records-from-adapter"}),y(t,l)}(e,t,i,r)})).catch((e=>{y(t,i,e)})):1===i.length&&m(e,r,t.get(i[0]))}function _(e){}},5267:(e,t,i)=>{i.r(t),i.d(t,{FetchManager:()=>r.F,SaveOp:()=>r.S,Snapshot:()=>r.c,SnapshotRecordArray:()=>r.b,upgradeStore:()=>r.u})
var r=i(9229)},6144:(e,t,i)=>{i.d(t,{i:()=>a,m:()=>c,t:()=>l})
var r=i(2294),s=i(4813),n=i(6961),o=i(9395)
function a(e,t){const i=e.type,s={_createProps:t,_secretInit:{identifier:e,cache:this.cache,store:this,cb:u}}
return(0,r.setOwner)(s,(0,r.getOwner)(this)),(0,n.g)(this,i).class.create(s)}function l(e){e.destroy()}function c(e){const t=(0,o.n)(e),i=(0,n.g)(this,t),r=i&&i.class?i.class:null
if(r&&r.isModel&&!this._forceShim)return r}function u(e,t,i,r){(0,s.TP)(e,i),s.i.set(e,r),(0,s.Wz)(e,t)}},8669:(e,t,i)=>{i.r(t),i.d(t,{ModelSchemaProvider:()=>m.M,attr:()=>d,belongsTo:()=>h,default:()=>o.M,hasMany:()=>f,instantiateRecord:()=>y.i,modelFor:()=>y.m,teardownRecord:()=>y.t})
var r=i(4471),s=i(4635),n=i(4813),o=i(9395),a=i(1603),l=i(7082),c=i(1198)
function u(e,t){"object"==typeof e?(t=e,e=void 0):t=t||{}
const i={type:e,kind:"attribute",isAttribute:!0,options:t,key:null}
return(0,r.computed)({get(e){if(!this.isDestroyed&&!this.isDestroying)return(0,n.oX)(this).getAttr((0,s.recordIdentifierFor)(this),e)},set(e,t){const i=(0,s.recordIdentifierFor)(this),r=(0,n.oX)(this)
if(r.getAttr(i,e)!==t&&(r.setAttr(i,e,t),!this.isValid)){const{errors:t}=this
t.get(e)&&(t.remove(e),this.currentState.cleanErrorRequests())}return t}}).meta(i)}function d(e,t,i){const r=[e,t,i]
return(0,o.k)(r)?u()(...r):u(e,t)}function h(e,t){return function(e,t){const i={type:(0,o.n)(e),options:t,kind:"belongsTo",name:"<Unknown BelongsTo>"}
return(0,r.computed)({get(e){return this.isDestroying||this.isDestroyed?null:(0,o.l)(this).getBelongsTo(e)},set(e,t){const i=(0,o.l)(this)
return this[l.pm]._join((()=>{i.setDirtyBelongsTo(e,t)})),i.getBelongsTo(e)}}).meta(i)}(e,t)}function p(e){{const t=(0,c.singularize)((0,c.dasherize)(e))
return(0,a.deprecate)(`The resource type '${e}' is not normalized. Update your application code to use '${t}' instead of '${e}'.`,t===e,{id:"ember-data:deprecate-non-strict-types",until:"6.0",for:"ember-data",since:{available:"5.3",enabled:"5.3"}}),t}}function f(e,t){return function(e,t){const i={type:p(e),options:t,kind:"hasMany",name:"<Unknown BelongsTo>"}
return(0,r.computed)({get(e){return this.isDestroying||this.isDestroyed?[]:(0,o.l)(this).getHasMany(e)},set(e,t){const i=(0,o.l)(this),r=i.getManyArray(e)
return this[l.pm]._join((()=>{r.splice(0,r.length,...t)})),i.getHasMany(e)}}).meta(i)}(e,t)}var y=i(6144),m=i(6961)},9395:(e,t,i)=>{i.d(t,{M:()=>Se,k:()=>O,l:()=>ae,n:()=>j})
var r,s,n,o,a,l=i(1603),c=i(1198),u=i(4471),d=i.n(u),h=i(4635),p=i(4813),f=i(3573),y=i(3791),m=i(7082),g=i(1389),_=i(8410),b=i.n(_),v=i(3991),w=i(5267),R=i(5225),k=i(9280),A=i.n(k),S=i(7104),E=i.n(S),T=i(4666),C=i(8022)
function M(e,t,i){(function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")})(e,t),t.set(e,i)}function F(e,t,i){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var i=t.call(e,"string")
if("object"!=typeof i)return i
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function O(e){const[t,i,r]=e
return 3===e.length&&("function"==typeof t||"object"==typeof t&&null!==t)&&"string"==typeof i&&("object"==typeof r&&null!==r&&"enumerable"in r&&"configurable"in r||void 0===r)}function j(e){{const t=(0,c.dasherize)(e)
return(0,l.deprecate)(`The resource type '${e}' is not normalized. Update your application code to use '${t}' instead of '${e}'.`,t===e,{id:"ember-data:deprecate-non-strict-types",until:"6.0",for:"ember-data",since:{available:"5.3",enabled:"5.3"}}),t}}class z extends p.oz{constructor(e){super(e),this.isLoaded=e.isLoaded||!1,this.isAsync=e.isAsync||!1,this.isPolymorphic=e.isPolymorphic||!1,this.identifier=e.identifier,this.key=e.key}[p.XK](e,t,i,r,s){switch(i){case"length 0":return Reflect.set(e,"length",0),N(this,[],s),!0
case"replace cell":{const[t,i,n]=r
return e[t]=n,function(e,t,i){I(e,{op:"replaceRelatedRecord",record:e.identifier,field:e.key,...t},i)}(this,{value:n,prior:i,index:t},s),!0}case"push":{const n=P(r)
$(this,e,(e=>e.push(...n)),"Cannot push duplicates to a hasMany's state.")
{const n=new Set(e),o=new Set
r.forEach((e=>{const t=(0,p.o)(e)
n.has(t)||(n.add(t),o.add(e))}))
const a=Array.from(o),l=Reflect.apply(e[i],t,a)
return a.length&&q(this,{value:P(a)},s),l}}case"pop":{const n=Reflect.apply(e[i],t,r)
return n&&x(this,{value:(0,p.o)(n)},s),n}case"unshift":{const n=P(r)
$(this,e,(e=>e.unshift(...n)),"Cannot unshift duplicates to a hasMany's state.")
{const n=new Set(e),o=new Set
r.forEach((e=>{const t=(0,p.o)(e)
n.has(t)||(n.add(t),o.add(e))}))
const a=Array.from(o),l=Reflect.apply(e[i],t,a)
return a.length&&q(this,{value:P(a),index:0},s),l}}case"shift":{const n=Reflect.apply(e[i],t,r)
return n&&x(this,{value:(0,p.o)(n),index:0},s),n}case"sort":{const n=Reflect.apply(e[i],t,r)
return function(e,t,i){I(e,{op:"sortRelatedRecords",record:e.identifier,field:e.key,value:t},i)}(this,n.map(p.o),s),n}case"splice":{const[n,o,...a]=r
if(0===n&&o===this[p.u2].length){const r=P(a)
$(this,e,(e=>e.splice(n,o,...r)),"Cannot replace a hasMany's state with a new state that contains duplicates.")
{const r=new Set(a),l=Array.from(r),c=[n,o].concat(l),u=Reflect.apply(e[i],t,c)
return N(this,P(l),s),u}}const l=P(a)
$(this,e,(e=>e.splice(n,o,...l)),"Cannot splice a hasMany's state with a new state that contains duplicates.")
{const r=e.slice()
r.splice(n,o)
const l=new Set(r),c=[]
a.forEach((e=>{const t=(0,p.o)(e)
l.has(t)||(l.add(t),c.push(e))}))
const u=[n,o,...c],d=Reflect.apply(e[i],t,u)
return o>0&&x(this,{value:d.map(p.o),index:n},s),c.length>0&&q(this,{value:P(c),index:n},s),d}}}}notify(){this[p.To].shouldReset=!0,(0,p.J4)(this)}reload(e){return this._manager.reloadHasMany(this.key,e)}createRecord(e){const{store:t}=this,i=t.createRecord(this.modelName,e)
return this.push(i),i}destroy(){super.destroy(!1)}}function P(e){return e.map(D)}function D(e){return(0,p.o)(e)}function $(e,t,i,r){const s=t.slice()
if(i(s),s.length!==new Set(s).size){const t=s.filter(((e,t)=>s.indexOf(e)!==t));(0,l.deprecate)(`${r} This behavior is deprecated. Found duplicates for the following records within the new state provided to \`<${e.identifier.type}:${e.identifier.id||e.identifier.lid}>.${e.key}\`\n\t- ${Array.from(new Set(t)).map((e=>(0,p.xm)(e)?e.lid:(0,p.o)(e).lid)).sort(((e,t)=>e.localeCompare(t))).join("\n\t- ")}`,!1,{id:"ember-data:deprecate-many-array-duplicates",for:"ember-data",until:"6.0",since:{enabled:"5.3",available:"5.3"}})}}function q(e,t,i){I(e,{op:"addToRelatedRecords",record:e.identifier,field:e.key,...t},i)}function x(e,t,i){I(e,{op:"removeFromRelatedRecords",record:e.identifier,field:e.key,...t},i)}function N(e,t,i){I(e,{op:"replaceRelatedRecords",record:e.identifier,field:e.key,value:t},i)}function I(e,t,i){e._manager.mutate(t),(0,y.RH)(i)}z.prototype.isAsync=!1,z.prototype.isPolymorphic=!1,z.prototype.identifier=null,z.prototype.cache=null,z.prototype._inverseIsAsync=!1,z.prototype.key="",z.prototype.DEPRECATED_CLASS_NAME="ManyArray"
const L=E().extend(A())
var B=Object.defineProperty;((e,t)=>{for(var i in t)B(e,i,{get:t[i],enumerable:!0})})({},{c:()=>J,f:()=>H,g:()=>V,i:()=>G,m:()=>K,n:()=>W,p:()=>Q})
var U=new WeakMap
function H(e,t,i,r){return V(e.prototype,t,i,r)}function V(e,t,i,r){let s={configurable:!0,enumerable:!0,writable:!0,initializer:null}
r&&(s.initializer=r)
for(let n of i)s=n(e,t,s)||s
void 0===s.initializer?Object.defineProperty(e,t,s):function(e,t,i){let r=U.get(e)
r||(r=new Map,U.set(e,r)),r.set(t,i)}(e,t,s)}function K({prototype:e},t,i){return W(e,t,i)}function W(e,t,i){let r={...Object.getOwnPropertyDescriptor(e,t)}
for(let s of i)r=s(e,t,r)||r
void 0!==r.initializer&&(r.value=r.initializer?r.initializer.call(e):void 0,r.initializer=void 0),Object.defineProperty(e,t,r)}function G(e,t){let i=function(e,t){let i=e.prototype
for(;i;){let e=U.get(i)?.get(t)
if(e)return e
i=i.prototype}}(e.constructor,t)
i&&Object.defineProperty(e,t,{enumerable:i.enumerable,configurable:i.configurable,writable:i.writable,value:i.initializer?i.initializer.call(e):void 0})}function J(e,t){return t.reduce(((e,t)=>t(e)||e),e)}function Q(e,t){for(let[i,r,s]of t)"field"===i?Y(e,r,s):W(e,r,s)
return e}function Y(e,t,i){let r={configurable:!0,enumerable:!0,writable:!0,initializer:()=>Object.getOwnPropertyDescriptor(e,t)?.value}
for(let s of i)r=s(e,t,r)||r
r.initializer&&(r.value=r.initializer.call(e),delete r.initializer),Object.defineProperty(e,t,r)}const X=Symbol.for("LegacyPromiseProxy"),Z=L
class ee extends Z{constructor(...e){super(...e),F(this,X,!0)}get id(){const{key:e,legacySupport:t}=this._belongsToState
return t.referenceFor("belongsTo",e).id()}get meta(){}async reload(e){const{key:t,legacySupport:i}=this._belongsToState
return await i.reloadBelongsTo(t,e),this}}W((r=ee).prototype,"id",[f.PO]),W(r.prototype,"meta",[(0,u.computed)()])
class te{constructor(e,t){F(this,X,!0),this._update(e,t),this.isDestroyed=!1}get length(){return this["[]"],this.content?this.content.length:0}forEach(e){this.content&&this.length&&this.content.forEach(e)}reload(e){return this.content.reload(e),this}then(e,t){return this.promise.then(e,t)}catch(e){return this.promise.catch(e)}finally(e){return this.promise.finally(e)}destroy(){this.isDestroyed=!0,this.content=null,this.promise=null}get links(){return this.content?this.content.links:void 0}get meta(){return this.content?this.content.meta:void 0}_update(e,t){void 0!==t&&(this.content=t),this.promise=function(e,t){return e.isPending=!0,e.isSettled=!1,e.isFulfilled=!1,e.isRejected=!1,Promise.resolve(t).then((t=>(e.isPending=!1,e.isFulfilled=!0,e.isSettled=!0,e.content=t,t)),(t=>{throw e.isPending=!1,e.isFulfilled=!1,e.isRejected=!0,e.isSettled=!0,t}))}(this,e)}static create({promise:e,content:t}){return new this(e,t)}}W((s=te).prototype,"length",[f.Vv]),W(s.prototype,"links",[f.Vv]),W(s.prototype,"meta",[f.Vv]),(0,y.sg)(te.prototype,"content",null),(0,y.sg)(te.prototype,"isPending",!1),(0,y.sg)(te.prototype,"isRejected",!1),(0,y.sg)(te.prototype,"isFulfilled",!1),(0,y.sg)(te.prototype,"isSettled",!1)
{const e={enumerable:!0,configurable:!1,get:function(){return this.content?.length&&this.content}};(0,f.Vv)(e),Object.defineProperty(te.prototype,"[]",e)}class ie{constructor(e,t,i,r,s){F(this,"___token",void 0),F(this,"___identifier",void 0),F(this,"___relatedTokenMap",void 0),this.graph=t,this.key=s,this.hasManyRelationship=r,this.type=r.definition.type,this.store=e,this.___identifier=i,this.___token=e.notifications.subscribe(i,((e,t,i)=>{"relationships"===t&&i===s&&this._ref++})),this.___relatedTokenMap=new Map}destroy(){this.store.notifications.unsubscribe(this.___token),this.___relatedTokenMap.forEach((e=>{this.store.notifications.unsubscribe(e)})),this.___relatedTokenMap.clear()}get identifiers(){this._ref
const e=this._resource(),t=this.___relatedTokenMap
return this.___relatedTokenMap=new Map,e&&e.data?e.data.map((e=>{const i=this.store.identifierCache.getOrCreateRecordIdentifier(e)
let r=t.get(i)
return r?t.delete(i):r=this.store.notifications.subscribe(i,((e,t,i)=>{("identity"===t||"attributes"===t&&"id"===i)&&this._ref++})),this.___relatedTokenMap.set(i,r),i})):(t.forEach((e=>{this.store.notifications.unsubscribe(e)})),t.clear(),[])}_resource(){return this.store.cache.getRelationship(this.___identifier,this.key)}remoteType(){const e=this._resource()
return e&&e.links&&e.links.related?"link":"ids"}ids(){return this.identifiers.map((e=>e.id))}link(){const e=this._resource()
if(t=e,Boolean(t&&t.links&&t.links.related)&&e.links){const t=e.links.related
return t&&"string"!=typeof t?t.href:t}var t
return null}links(){const e=this._resource()
return e&&e.links?e.links:null}meta(){let e=null
const t=this._resource()
return t&&t.meta&&"object"==typeof t.meta&&(e=t.meta),e}async push(e,t){const{store:i}=this,r=Array.isArray(e)?{data:e}:e,s=Array.isArray(r.data)&&r.data.length>0&&re(r.data[0]),n=Array.isArray(r.data)?s?i._push(r,!0):r.data.map((e=>i.identifierCache.getOrCreateRecordIdentifier(e))):[],{identifier:o}=this.hasManyRelationship,a={}
if(Array.isArray(r.data)&&(a.data=n),"links"in r&&(a.links=r.links),"meta"in r&&(a.meta=r.meta),i._join((()=>{this.graph.push({op:"updateRelationship",record:o,field:this.key,value:a})})),!t)return this.load()}_isLoaded(){if(!this.hasManyRelationship.state.hasReceivedData)return!1
const e=this.graph.getData(this.hasManyRelationship.identifier,this.key)
return e.data?.every((e=>!0===this.store._instanceCache.recordIsLoaded(e,!0)))}value(){const e=oe.get(this.___identifier)
return this._isLoaded()?e.getManyArray(this.key):(this._ref,null)}async load(e){const t=oe.get(this.___identifier)
return this.hasManyRelationship.definition.isAsync||ue(this.store,this._resource())?t.getHasMany(this.key,e):t.reloadHasMany(this.key,e)}reload(e){return oe.get(this.___identifier).reloadHasMany(this.key,e)}}function re(e){return Object.keys(e).filter((e=>"id"!==e&&"type"!==e&&"lid"!==e)).length>0}function se(e){return Boolean(e&&e.links&&e.links.related)}W(ie.prototype,"identifiers",[f.Vv,f.PO]),(0,y.sg)(ie.prototype,"_ref",0)
class ne{constructor(e,t,i,r,s){this.graph=t,this.key=s,this.belongsToRelationship=r,this.type=r.definition.type,this.store=e,this.___identifier=i,this.___relatedToken=null,this.___token=e.notifications.subscribe(i,((e,t,i)=>{"relationships"===t&&i===s&&this._ref++}))}destroy(){this.store.notifications.unsubscribe(this.___token),this.___token=null,this.___relatedToken&&(this.store.notifications.unsubscribe(this.___relatedToken),this.___relatedToken=null)}get identifier(){this.___relatedToken&&(this.store.notifications.unsubscribe(this.___relatedToken),this.___relatedToken=null)
const e=this._resource()
if(e&&e.data){const t=this.store.identifierCache.getOrCreateRecordIdentifier(e.data)
return this.___relatedToken=this.store.notifications.subscribe(t,((e,t,i)=>{("identity"===t||"attributes"===t&&"id"===i)&&this._ref++})),t}return null}id(){return this.identifier?.id||null}link(){const e=this._resource()
if(se(e)&&e.links){const t=e.links.related
return t&&"string"!=typeof t?t.href:t}return null}links(){const e=this._resource()
return e&&e.links?e.links:null}meta(){let e=null
const t=this._resource()
return t&&t.meta&&"object"==typeof t.meta&&(e=t.meta),e}_resource(){return this._ref,this.store.cache.getRelationship(this.___identifier,this.key)}remoteType(){return se(this._resource())?"link":"id"}async push(e,t){const{store:i}=this,r=e.data&&re(e.data)?i._push(e,!0):e.data?i.identifierCache.getOrCreateRecordIdentifier(e.data):null,{identifier:s}=this.belongsToRelationship,n={}
if((e.data||null===e.data)&&(n.data=r),"links"in e&&(n.links=e.links),"meta"in e&&(n.meta=e.meta),i._join((()=>{this.graph.push({op:"updateRelationship",record:s,field:this.key,value:n})})),!t)return this.load()}value(){const e=this._resource()
return e&&e.data?this.store.peekRecord(e.data):null}async load(e){const t=oe.get(this.___identifier)
return this.belongsToRelationship.definition.isAsync||ue(this.store,this._resource())?t.getBelongsTo(this.key,e):t.reloadBelongsTo(this.key,e).then((()=>this.value()))}reload(e){return oe.get(this.___identifier).reloadBelongsTo(this.key,e).then((()=>this.value()))}}W(ne.prototype,"identifier",[f.Vv,f.PO]),(0,y.sg)(ne.prototype,"_ref",0)
const oe=(0,R.L1)("LEGACY_SUPPORT",new Map)
function ae(e){const t=(0,p.o)(e)
let i=oe.get(t)
return i||(i=new le(e),oe.set(t,i),oe.set(e,i)),i}class le{constructor(e){this.record=e,this.store=(0,p.fV)(e),this.identifier=(0,p.o)(e),this.cache=(0,p.oX)(e)
{const e=(0,C.A)(i(5989)).graphFor
this.graph=e(this.store)}this._manyArrayCache=Object.create(null),this._relationshipPromisesCache=Object.create(null),this._relationshipProxyCache=Object.create(null),this._pending=Object.create(null),this.references=Object.create(null)}_syncArray(e){if(this.isDestroyed||this.isDestroying)return
const t=e[p.u2],i=this.identifier,[r,s]=this._getCurrentState(i,e.key)
s.meta&&(e.meta=s.meta),s.links&&(e.links=s.links),t.length=0,(0,p.RX)(t,r)}mutate(e){this.cache.mutate(e)}_findBelongsTo(e,t,i,r){return this._findBelongsToByJsonApiResource(t,this.identifier,i,r).then((t=>ce(this,e,i,t)),(t=>ce(this,e,i,null,t)))}reloadBelongsTo(e,t){const i=this._relationshipPromisesCache[e]
if(i)return i
const r=this.graph.get(this.identifier,e),s=this.cache.getRelationship(this.identifier,e)
r.state.hasFailedLoadAttempt=!1,r.state.shouldForceReload=!0
const n=this._findBelongsTo(e,s,r,t)
return this._relationshipProxyCache[e]?this._updatePromiseProxyFor("belongsTo",e,{promise:n}):n}getBelongsTo(e,t){const{identifier:i,cache:r}=this,s=r.getRelationship(this.identifier,e),n=s&&s.data?s.data:null,o=this.store,a=this.graph.get(this.identifier,e),l=a.definition.isAsync,c={key:e,store:o,legacySupport:this,modelName:a.definition.type}
if(l){if(a.state.hasFailedLoadAttempt)return this._relationshipProxyCache[e]
const i=this._findBelongsTo(e,s,a,t),r=n&&o._instanceCache.recordIsLoaded(n)
return this._updatePromiseProxyFor("belongsTo",e,{promise:i,content:r?o._instanceCache.getRecord(n):null,_belongsToState:c})}return null===n?null:o._instanceCache.getRecord(n)}setDirtyBelongsTo(e,t){return this.cache.mutate({op:"replaceRelatedRecord",record:this.identifier,field:e,value:(i=t,i?(0,p.o)(i):null)},!0)
var i}_getCurrentState(e,t){const i=this.cache.getRelationship(e,t),r=this.store._instanceCache,s=[]
if(i.data)for(let n=0;n<i.data.length;n++){const e=i.data[n]
r.recordIsLoaded(e,!0)&&s.push(e)}return[s,i]}getManyArray(e,t){{let i=this._manyArrayCache[e]
if(t||(t=this.graph.get(this.identifier,e).definition),!i){const[r,s]=this._getCurrentState(this.identifier,e)
i=new z({store:this.store,type:t.type,identifier:this.identifier,cache:this.cache,identifiers:r,key:e,meta:s.meta||null,links:s.links||null,isPolymorphic:t.isPolymorphic,isAsync:t.isAsync,_inverseIsAsync:t.inverseIsAsync,manager:this,isLoaded:!t.isAsync,allowMutation:!0}),this._manyArrayCache[e]=i}return i}}fetchAsyncHasMany(e,t,i,r){{let s=this._relationshipPromisesCache[e]
if(s)return s
const n=this.cache.getRelationship(this.identifier,e),o=this._findHasManyByJsonApiResource(n,this.identifier,t,r)
return o?(s=o.then((()=>ce(this,e,t,i)),(r=>ce(this,e,t,i,r))),this._relationshipPromisesCache[e]=s,s):(i.isLoaded=!0,Promise.resolve(i))}}reloadHasMany(e,t){{const i=this._relationshipPromisesCache[e]
if(i)return i
const r=this.graph.get(this.identifier,e),{definition:s,state:n}=r
n.hasFailedLoadAttempt=!1,n.shouldForceReload=!0
const o=this.getManyArray(e,s),a=this.fetchAsyncHasMany(e,r,o,t)
return this._relationshipProxyCache[e]?this._updatePromiseProxyFor("hasMany",e,{promise:a}):a}}getHasMany(e,t){{const i=this.graph.get(this.identifier,e),{definition:r,state:s}=i,n=this.getManyArray(e,r)
if(r.isAsync){if(s.hasFailedLoadAttempt)return this._relationshipProxyCache[e]
const r=this.fetchAsyncHasMany(e,i,n,t)
return this._updatePromiseProxyFor("hasMany",e,{promise:r,content:n})}return n}}_updatePromiseProxyFor(e,t,i){let r=this._relationshipProxyCache[t]
if("hasMany"===e){const{promise:e,content:s}=i
return r?r._update(e,s):r=this._relationshipProxyCache[t]=new te(e,s),r}if(r){const{promise:e,content:t}=i
void 0!==t&&r.set("content",t),r.set("promise",e)}else r=ee.create(i),this._relationshipProxyCache[t]=r
return r}referenceFor(e,t){let i=this.references[t]
if(!i){const{graph:e,identifier:r}=this,s=e.get(r,t),n=s.definition.kind
"belongsTo"===n?i=new ne(this.store,e,r,s,t):"hasMany"===n&&(i=new ie(this.store,e,r,s,t)),this.references[t]=i}return i}_findHasManyByJsonApiResource(e,t,i,r={}){{if(!e)return
const{definition:s,state:n}=i;(0,w.upgradeStore)(this.store)
const o=this.store.adapterFor?.(s.type),{isStale:a,hasDematerializedInverse:l,hasReceivedData:c,isEmpty:u,shouldForceReload:d}=n,h=ue(this.store,e),p=e.data,f=e.links&&e.links.related&&("function"==typeof o?.findHasMany||void 0===p)&&(d||l||a||!h&&!u),y={useLink:f,field:this.store.schema.fields({type:s.inverseType}).get(s.key),links:e.links,meta:e.meta,options:r,record:t}
if(f)return this.store.request({op:"findHasMany",records:p||[],data:y,cacheOptions:{[Symbol.for("wd:skip-cache")]:!0}})
const m=c&&!u,g=l||u&&Array.isArray(p)&&p.length>0,_=!d&&!a&&(m||g)
if(_&&h)return
return _||c&&!u||g?(r.reload=r.reload||!_||void 0,this.store.request({op:"findHasMany",records:p,data:y,cacheOptions:{[Symbol.for("wd:skip-cache")]:!0}})):void 0}}_findBelongsToByJsonApiResource(e,t,i,r={}){if(!e)return Promise.resolve(null)
const s=i.definition.key
if(this._pending[s])return this._pending[s]
const n=e.data?e.data:null,{isStale:o,hasDematerializedInverse:a,hasReceivedData:l,isEmpty:c,shouldForceReload:u}=i.state,d=ue(this.store,e),h=e.links?.related&&(u||a||o||!d&&!c),p={useLink:h,field:this.store.schema.fields(this.identifier).get(i.definition.key),links:e.links,meta:e.meta,options:r,record:t}
if(h){const e=this.store.request({op:"findBelongsTo",records:n?[n]:[],data:p,cacheOptions:{[Symbol.for("wd:skip-cache")]:!0}})
return this._pending[s]=e.then((e=>e.content)).finally((()=>{this._pending[s]=void 0})),this._pending[s]}const f=l&&d&&!c,y=a||c&&e.data,m=!u&&!o&&(f||y)
return m&&!n?Promise.resolve(null):m&&d||null===n?.id?Promise.resolve(n):n?(r.reload=r.reload||!m||void 0,this._pending[s]=this.store.request({op:"findBelongsTo",records:[n],data:p,cacheOptions:{[Symbol.for("wd:skip-cache")]:!0}}).then((e=>e.content)).finally((()=>{this._pending[s]=void 0})),this._pending[s]):Promise.resolve(null)}destroy(){this.isDestroying=!0
let e=this._manyArrayCache
this._manyArrayCache=Object.create(null),Object.keys(e).forEach((t=>{e[t].destroy()})),e=this._relationshipProxyCache,this._relationshipProxyCache=Object.create(null),Object.keys(e).forEach((t=>{const i=e[t]
i.destroy&&i.destroy()})),e=this.references,this.references=Object.create(null),Object.keys(e).forEach((t=>{e[t].destroy()})),this.isDestroyed=!0}}function ce(e,t,i,r,s){delete e._relationshipPromisesCache[t],i.state.shouldForceReload=!1
const n="hasMany"===i.definition.kind
if(n&&r.notify(),s){i.state.hasFailedLoadAttempt=!0
const r=e._relationshipProxyCache[t]
throw r&&!n&&(r.content&&r.content.isDestroying&&r.set("content",null),e.store.notifications._flush()),s}return n?r.isLoaded=!0:e.store.notifications._flush(),i.state.hasFailedLoadAttempt=!1,i.state.isStale=!1,n||!r?r:e.store.peekRecord(r)}function ue(e,t){const i=e._instanceCache,r=t.data
return Array.isArray(r)?r.every((e=>i.recordIsLoaded(e))):!r||i.recordIsLoaded(r)}const de=b()
var he=new WeakMap,pe=new WeakMap
class fe extends de{constructor(...e){super(...e),M(this,he,void G(this,"messages")),M(this,pe,void G(this,"isEmpty"))}get errorsByAttributeName(){return new Map}errorsFor(e){const t=this.errorsByAttributeName
let i=t.get(e)
return void 0===i&&(i=(0,g.A)(),t.set(e,i)),(0,u.get)(i,"[]"),i}get content(){return(0,g.A)()}unknownProperty(e){const t=this.errorsFor(e)
if(0!==t.length)return t}add(e,t){const i=this._findOrCreateMessages(e,t)
this.addObjects(i),this.errorsFor(e).addObjects(i),this.__record.currentState.notify("isValid"),this.notifyPropertyChange(e)}_findOrCreateMessages(e,t){const i=this.errorsFor(e),r=Array.isArray(t)?t:[t],s=new Array(r.length)
for(let n=0;n<r.length;n++){const t=r[n],o=i.findBy("message",t)
s[n]=o||{attribute:e,message:t}}return s}remove(e){if(this.isEmpty)return
const t=this.rejectBy("attribute",e)
this.content.setObjects(t)
const i=this.errorsFor(e)
for(let r=0;r<i.length;r++)i[r].attribute===e&&i.replace(r,1)
this.errorsByAttributeName.delete(e),this.__record.currentState.notify("isValid"),this.notifyPropertyChange(e),this.notifyPropertyChange("length")}clear(){if(this.isEmpty)return
const e=this.errorsByAttributeName,t=[]
e.forEach((function(e,i){t.push(i)})),e.clear(),t.forEach((e=>{this.notifyPropertyChange(e)})),this.__record.currentState.notify("isValid"),super.clear()}has(e){return this.errorsFor(e).length>0}}function ye(e,t,i,r){if("belongsTo"===r.kind)i.notifyPropertyChange(t)
else if("hasMany"===r.kind){const s=oe.get(e),n=s&&s._manyArrayCache[t],o=s&&s._relationshipPromisesCache[t]
if(n&&o)return
n&&(n.notify(),r.options.async&&i.notifyPropertyChange(t))}}function me(e,t,i,r){(0,T.cacheFor)(r,i)!==e.cache.getAttr(t,i)&&r.notifyPropertyChange(i)}W((n=fe).prototype,"errorsByAttributeName",[(0,u.computed)()]),V(n.prototype,"messages",[(0,v.mapBy)("content","message")]),W(n.prototype,"content",[(0,u.computed)()]),V(n.prototype,"isEmpty",[(0,v.not)("length")])
const ge=/^\/?data\/(attributes|relationships)\/(.*)/,_e=/^\/?data/
function be(e){return!!e&&e instanceof Error&&"isAdapterError"in e&&!0===e.isAdapterError&&"code"in e&&"InvalidError"===e.code}function ve(e,t,i){const r=i.get,s=i.set
return i.get=function(){const e=(0,y.V1)(this,t,!0)
return(0,y.B1)(e),e.shouldReset&&(e.shouldReset=!1,e.lastValue=r.call(this)),e.lastValue},i.set=function(e){(0,y.V1)(this,t,!0),s.call(this,e)},(0,f.Vv)(i),i}function we(e,t){const i=(0,y.i$)(e,t)
i&&(i.shouldReset=!0,(0,y.RH)(i))}class Re{constructor(e){const t=(0,h.storeFor)(e),i=(0,p.o)(e)
this.identifier=i,this.record=e,this.cache=t.cache,this.pendingCount=0,this.fulfilledCount=0,this.rejectedCount=0,this._errorRequests=[],this._lastError=null
const r=t.getRequestStateService(),s=t.notifications,n=e=>{if("mutation"===e.type)switch(e.state){case"pending":this.isSaving=!0
break
case"rejected":this.isSaving=!1,this._lastError=e,e.response&&be(e.response.data)||this._errorRequests.push(e),ke(this)
break
case"fulfilled":this._errorRequests=[],this._lastError=null,this.isSaving=!1,this.notify("isDirty"),ke(this)}else switch(e.state){case"pending":this.pendingCount++,this.notify("isLoading")
break
case"rejected":this.pendingCount--,this._lastError=e,e.response&&be(e.response.data)||this._errorRequests.push(e),this.notify("isLoading"),ke(this)
break
case"fulfilled":this.pendingCount--,this.fulfilledCount++,this.notify("isLoading"),this.notify("isDirty"),ke(this),this._errorRequests=[],this._lastError=null}}
r.subscribeForRecord(i,n)
const o=r.getLastRequestForRecord(i)
o&&n(o),this.handler=s.subscribe(i,((e,t,i)=>{switch(t){case"state":this.notify("isSaved"),this.notify("isNew"),this.notify("isDeleted"),this.notify("isDirty")
break
case"attributes":this.notify("isEmpty"),this.notify("isDirty")
break
case"errors":this.updateInvalidErrors(this.record.errors),this.notify("isValid")}}))}destroy(){(0,h.storeFor)(this.record).notifications.unsubscribe(this.handler)}notify(e){we(this,e)}updateInvalidErrors(e){const t=this.cache.getErrors(this.identifier)
e.clear()
for(let i=0;i<t.length;i++){const r=t[i]
if(r.source&&r.source.pointer){const t=r.source.pointer.match(ge)
let i
if(t?i=t[2]:-1!==r.source.pointer.search(_e)&&(i="base"),i){const t=r.detail||r.title
e.add(i,t)}}}}cleanErrorRequests(){this.notify("isValid"),this.notify("isError"),this.notify("adapterError"),this._errorRequests=[],this._lastError=null}get isLoading(){return!this.isLoaded&&this.pendingCount>0&&0===this.fulfilledCount}get isLoaded(){return!!this.isNew||this.fulfilledCount>0||!this.isEmpty}get isSaved(){const e=this.cache
return this.isDeleted?e.isDeletionCommitted(this.identifier):!(this.isNew||this.isEmpty||!this.isValid||this.isDirty||this.isLoading)}get isEmpty(){const e=this.cache
return!this.isNew&&e.isEmpty(this.identifier)}get isNew(){return this.cache.isNew(this.identifier)}get isDeleted(){return this.cache.isDeleted(this.identifier)}get isValid(){return 0===this.record.errors.length}get isDirty(){const e=this.cache
return!(this.isEmpty||e.isDeletionCommitted(this.identifier)||this.isDeleted&&this.isNew)&&(this.isDeleted||this.isNew||e.hasChangedAttrs(this.identifier))}get isError(){return!!this._errorRequests[this._errorRequests.length-1]}get adapterError(){const e=this._lastError
return e?"rejected"===e.state&&e.response.data:null}get isPreloaded(){return!this.isEmpty&&this.isLoading}get stateName(){return this.isLoading?"root.loading":this.isEmpty?"root.empty":this.isDeleted?this.isSaving?"root.deleted.inFlight":this.isSaved?"root.deleted.saved":this.isValid?"root.deleted.uncommitted":"root.deleted.invalid":this.isNew?this.isSaving?"root.loaded.created.inFlight":this.isValid?"root.loaded.created.uncommitted":"root.loaded.created.invalid":this.isSaving?"root.loaded.updated.inFlight":this.isValid?this.isDirty?"root.loaded.updated.uncommitted":"root.loaded.saved":"root.loaded.updated.invalid"}get dirtyType(){return this.isLoading||this.isEmpty?"":this.isDirty&&this.isDeleted?"deleted":this.isNew?"created":this.isSaving||!this.isValid||this.isDirty?"updated":""}}function ke(e){e.notify("isValid"),e.notify("isError"),e.notify("adapterError")}function Ae(e,t,i){const r=new WeakMap,s=i.get
return i.get=function(){let e=r.get(this)
return e||(e={hasComputed:!1,value:void 0},r.set(this,e)),e.hasComputed||(e.value=s.call(this),e.hasComputed=!0),e.value},i}W((o=Re).prototype,"isLoading",[ve]),W(o.prototype,"isLoaded",[ve]),W(o.prototype,"isSaved",[ve]),W(o.prototype,"isEmpty",[ve]),W(o.prototype,"isNew",[ve]),W(o.prototype,"isDeleted",[ve]),W(o.prototype,"isValid",[ve]),W(o.prototype,"isDirty",[ve]),W(o.prototype,"isError",[ve]),W(o.prototype,"adapterError",[ve]),W(o.prototype,"isPreloaded",[f.PO]),W(o.prototype,"stateName",[f.PO]),W(o.prototype,"dirtyType",[f.PO]),(0,y.sg)(Re.prototype,"isSaving",!1)
class Se extends(d()){init(e){const t=e._createProps,i=e._secretInit
e._createProps=null,e._secretInit=null
const r=this.store=i.store
super.init(e),this[m.pm]=r
const s=i.identifier
i.cb(this,i.cache,s,i.store),this.___recordState=null,this.setProperties(t)
const n=r.notifications
this.___private_notifications=n.subscribe(s,((e,t,i)=>{!function(e,t,i,r,s){if("attributes"===t)i?me(s,e,i,r):r.eachAttribute((t=>{me(s,e,t,r)}))
else if("relationships"===t)if(i){const t=r.constructor.relationshipsByName.get(i)
ye(e,i,r,t)}else r.eachRelationship(((t,i)=>{ye(e,t,r,i)}))
else"identity"===t&&r.notifyPropertyChange("id")}(e,t,i,this,r)}))}destroy(){const e=(0,h.recordIdentifierFor)(this)
this.___recordState?.destroy(),(0,h.storeFor)(this).notifications.unsubscribe(this.___private_notifications),this.eachRelationship(((e,t)=>{"belongsTo"===t.kind&&this.notifyPropertyChange(e)})),oe.get(this)?.destroy(),oe.delete(this),oe.delete(e),super.destroy()}get isEmpty(){return this.currentState.isEmpty}get isLoading(){return this.currentState.isLoading}get isLoaded(){return this.currentState.isLoaded}get hasDirtyAttributes(){return this.currentState.isDirty}get isSaving(){return this.currentState.isSaving}get isDeleted(){return this.currentState.isDeleted}get isNew(){return this.currentState.isNew}get isValid(){return this.currentState.isValid}get dirtyType(){return this.currentState.dirtyType}get isError(){return this.currentState.isError}set isError(e){}get id(){return(0,h.recordIdentifierFor)(this).id}set id(e){const t=(0,p.pG)(e),i=(0,h.recordIdentifierFor)(this),r=t!==i.id
null!==t&&r&&(this.store._instanceCache.setRecordId(i,t),this.store.notifications.notify(i,"identity"))}toString(){return`<model::${this.constructor.modelName}:${this.id}>`}get currentState(){return this.___recordState||(this.___recordState=new Re(this)),this.___recordState}set currentState(e){throw new Error("cannot set currentState")}get errors(){const e=fe.create({__record:this})
return this.currentState.updateInvalidErrors(e),e}get adapterError(){return this.currentState.adapterError}set adapterError(e){throw new Error("adapterError is not directly settable")}notifyPropertyChange(e){we(this,e),super.notifyPropertyChange(e)}attr(){}eachRelationship(e,t){this.constructor.eachRelationship(e,t)}relationshipFor(e){return this.constructor.relationshipsByName.get(e)}inverseFor(e){return this.constructor.inverseFor(e,(0,h.storeFor)(this))}eachAttribute(e,t){this.constructor.eachAttribute(e,t)}static typeForRelationship(e,t){const i=this.relationshipsByName.get(e)
return i&&t.modelFor(i.type)}static get inverseMap(){return Object.create(null)}static inverseFor(e,t){const i=this.inverseMap
if(i[e])return i[e]
{const r=this._findInverseFor(e,t)
return i[e]=r,r}}static _findInverseFor(e,t){const i=this.relationshipsByName.get(e)
if(!i)return null
const{options:r}=i
return null===r.inverse?null:t.schema.hasResource(i)&&t.schema.fields(i).get(r.inverse)||null}static get relationships(){const e=new Map
return this.relationshipsByName.forEach((t=>{const{type:i}=t
e.has(i)||e.set(i,[]),e.get(i).push(t)})),e}static get relationshipNames(){const e={hasMany:[],belongsTo:[]}
return this.eachComputedProperty(((t,i)=>{Ee(i)&&e[i.kind].push(t)})),e}static get relatedTypes(){const e=[],t=this.relationshipsObject,i=Object.keys(t)
for(let r=0;r<i.length;r++){const s=t[i[r]].type
e.includes(s)||e.push(s)}return e}static get relationshipsByName(){const e=new Map,t=this.relationshipsObject,i=Object.keys(t)
for(let r=0;r<i.length;r++){const s=t[i[r]]
e.set(s.name,s)}return e}static get relationshipsObject(){const e=Object.create(null)
return this.modelName,this.eachComputedProperty(((t,i)=>{Ee(i)&&(i.key=t,i.name=t,e[t]=i)})),e}static get fields(){const e=new Map
return this.eachComputedProperty(((t,i)=>{Ee(i)?e.set(t,i.kind):Te(i)&&e.set(t,"attribute")})),e}static eachRelationship(e,t){this.relationshipsByName.forEach(((i,r)=>{e.call(t,r,i)}))}static eachRelatedType(e,t){const i=this.relatedTypes
for(let r=0;r<i.length;r++){const s=i[r]
e.call(t,s)}}static determineRelationshipType(e,t){const i=e.name,r=e.kind,s=this.inverseFor(i,t)
return s?"belongsTo"===s.kind?"belongsTo"===r?"oneToOne":"manyToOne":"belongsTo"===r?"oneToMany":"manyToMany":"belongsTo"===r?"oneToNone":"manyToNone"}static get attributes(){const e=new Map
return this.eachComputedProperty(((t,i)=>{Te(i)&&(i.key=t,i.name=t,e.set(t,i))})),e}static get transformedAttributes(){const e=new Map
return this.eachAttribute(((t,i)=>{i.type&&e.set(t,i.type)})),e}static eachAttribute(e,t){this.attributes.forEach(((i,r)=>{e.call(t,r,i)}))}static eachTransformedAttribute(e,t){this.transformedAttributes.forEach(((i,r)=>{e.call(t,r,i)}))}static toString(){return`model:${this.modelName}`}}function Ee(e){return"object"==typeof e&&null!==e&&"kind"in e&&"options"in e&&("hasMany"===e.kind||"belongsTo"===e.kind)}function Te(e){return"object"==typeof e&&null!==e&&"kind"in e&&"attribute"===e.kind}W((a=Se).prototype,"isEmpty",[f.Vv]),W(a.prototype,"isLoading",[f.Vv]),W(a.prototype,"isLoaded",[f.Vv]),W(a.prototype,"hasDirtyAttributes",[f.Vv]),W(a.prototype,"isSaving",[f.Vv]),W(a.prototype,"isDeleted",[f.Vv]),W(a.prototype,"isNew",[f.Vv]),W(a.prototype,"isValid",[f.Vv]),W(a.prototype,"dirtyType",[f.Vv]),W(a.prototype,"isError",[f.Vv]),W(a.prototype,"id",[ve]),W(a.prototype,"currentState",[ve]),W(a.prototype,"errors",[Ae]),W(a.prototype,"adapterError",[f.Vv]),F(Se,"isModel",!0),F(Se,"modelName",null),W(a,"inverseMap",[Ae]),W(a,"relationships",[Ae]),W(a,"relationshipNames",[Ae]),W(a,"relatedTypes",[Ae]),W(a,"relationshipsByName",[Ae]),W(a,"relationshipsObject",[Ae]),W(a,"fields",[Ae]),W(a,"attributes",[Ae]),W(a,"transformedAttributes",[Ae]),Se.prototype.save=function(e){let t
return this.currentState.isNew&&this.currentState.isDeleted?t=Promise.resolve(this):(this.errors.clear(),t=this[m.pm].saveRecord(this,e)),t},Se.prototype.destroyRecord=function(e){const{isNew:t}=this.currentState
return this.deleteRecord(),t?Promise.resolve(this):this.save(e).then((e=>(this.unloadRecord(),this)))},Se.prototype.unloadRecord=function(){this.currentState.isNew&&(this.isDestroyed||this.isDestroying)||this[m.pm].unloadRecord(this)},Se.prototype.hasMany=function(e){return ae(this).referenceFor("hasMany",e)},Se.prototype.belongsTo=function(e){return ae(this).referenceFor("belongsTo",e)},Se.prototype.serialize=function(e){return(0,w.upgradeStore)(this[m.pm]),this[m.pm].serializeRecord(this,e)},Se.prototype._createSnapshot=function(){const e=this[m.pm]
if((0,w.upgradeStore)(e),!e._fetchManager){const t=(0,C.A)(i(5267)).FetchManager
e._fetchManager=new t(e)}return e._fetchManager.createSnapshot((0,h.recordIdentifierFor)(this))},Se.prototype.deleteRecord=function(){this.currentState&&this[m.pm].deleteRecord(this)},Se.prototype.changedAttributes=function(){return(0,p.oX)(this).changedAttrs((0,h.recordIdentifierFor)(this))},Se.prototype.rollbackAttributes=function(){const{currentState:e}=this,{isNew:t}=e
this[m.pm]._join((()=>{(0,p.oX)(this).rollbackAttrs((0,h.recordIdentifierFor)(this)),this.errors.clear(),e.cleanErrorRequests(),t&&this.unloadRecord()}))},Se.prototype.reload=function(e={}){e.isReloading=!0,e.reload=!0
const t=(0,h.recordIdentifierFor)(this)
return this.isReloading=!0,this[m.pm].request({op:"findRecord",data:{options:e,record:t},cacheOptions:{[Symbol.for("wd:skip-cache")]:!0}}).then((()=>this)).finally((()=>{this.isReloading=!1}))},(0,y.sg)(Se.prototype,"isReloading",!1),Se.prototype._createProps=null,Se.prototype._secretInit=null},6961:(e,t,i)=>{i.d(t,{M:()=>o,b:()=>a,g:()=>l})
var r=i(2294),s=i(1603),n=i(9395)
class o{constructor(e){this.store=e,this._schemas=new Map,this._typeMisses=new Set}hasTrait(e){return!1}resourceHasTrait(e,t){return!1}transformation(e){}derivation(e){}hashFn(e){}resource(e){const t=(0,n.n)(e.type)
return this._schemas.has(t)||this._loadModelSchema(t),this._schemas.get(t).schema}registerResources(e){}registerResource(e){}registerTransformation(e){}registerDerivation(e){}registerHashFn(e){}_loadModelSchema(e){const t=this.store.modelFor(e),i=t.attributes,r=Object.create(null)
i.forEach(((e,t)=>r[t]=e))
const s=t.relationshipsObject||null,n=new Map
for(const a of Object.values(r))n.set(a.name,a)
for(const a of Object.values(s))n.set(a.name,a)
const o={schema:{legacy:!0,identity:{name:"id",kind:"@id"},type:e,fields:Array.from(n.values())},attributes:r,relationships:s,fields:n}
return this._schemas.set(e,o),o}fields(e){const t=(0,n.n)(e.type)
return this._schemas.has(t)||this._loadModelSchema(t),this._schemas.get(t).fields}hasResource(e){const t=(0,n.n)(e.type)
return!!this._schemas.has(t)||!this._typeMisses.has(t)&&!(null===l(this.store,t)&&(this._typeMisses.add(t),1))}}function a(e){return new o(e)}function l(e,t){e._modelFactoryCache||(e._modelFactoryCache=Object.create(null))
const i=e._modelFactoryCache
let s=i[t]
if(!s){if(s=(0,r.getOwner)(e).factoryFor(`model:${t}`),s||(s=function(e,t){const i=(0,r.getOwner)(e),s=i.factoryFor(`mixin:${t}`),o=s&&s.class
if(o){const e=n.M.extend(o)
e.__isMixin=!0,e.__mixin=o,i.register(`model:${t}`,e)}return i.factoryFor(`model:${t}`)}(e,t)),!s)return null
const o=s.class
o.isModel&&(o.modelName&&Object.prototype.hasOwnProperty.call(o,"modelName")||Object.defineProperty(o,"modelName",{value:t})),i[t]=s}return s}o.prototype.doesTypeExist=function(e){return(0,s.deprecate)("Use `schema.hasResource({ type })` instead of `schema.doesTypeExist(type)`",!1,{id:"ember-data:schema-service-updates",until:"5.0",for:"ember-data",since:{available:"5.4",enabled:"5.4"}}),this.hasResource({type:e})},o.prototype.attributesDefinitionFor=function(e){(0,s.deprecate)("Use `schema.fields({ type })` instead of `schema.attributesDefinitionFor({ type })`",!1,{id:"ember-data:schema-service-updates",until:"5.0",for:"ember-data",since:{available:"5.4",enabled:"5.4"}})
const t=(0,n.n)(e.type)
return this._schemas.has(t)||this._loadModelSchema(t),this._schemas.get(t).attributes},o.prototype.relationshipsDefinitionFor=function(e){(0,s.deprecate)("Use `schema.fields({ type })` instead of `schema.relationshipsDefinitionFor({ type })`",!1,{id:"ember-data:schema-service-updates",until:"5.0",for:"ember-data",since:{available:"5.4",enabled:"5.4"}})
const t=(0,n.n)(e.type)
return this._schemas.has(t)||this._loadModelSchema(t),this._schemas.get(t).relationships}},4975:(e,t,i)=>{i.r(t)
var r=i(1603),s=i(9609)
{const e=(0,i(8022).A)(i(3399)).default,{inflector:t}=e,n=t.plural,o=t.singular,a=t.irregular,l=t.uncountable,c=new Set,u=new Set
s.m.plurals.forEach((([e])=>{c.add(e.toString())})),s.m.singular.forEach((([e])=>{u.add(e.toString())}))
const{defaultRules:d}=e,{rules:h}=t,p=new Map,f=new Set,y=new Set(d.uncountable)
d.irregularPairs.forEach((([e,t])=>{p.set(e.toLowerCase(),t),f.add(t.toLowerCase())}))
const m=new Map
Object.keys(h.irregular).forEach((e=>{const t=h.irregular[e]
m.set(e,t)})),h.plurals.forEach((([e,t])=>{c.has(e.toString())||((0,s.b)(e,t),(0,r.deprecate)("WarpDrive/EmberData no longer uses ember-inflector for pluralization.\nPlease `import { plural } from '@ember-data/request-utils/string';` instead to register a custom pluralization rule for use with EmberData.",!1,{id:"warp-drive.ember-inflector",until:"6.0.0",for:"warp-drive",since:{enabled:"5.3.4",available:"5.3.4"},url:"https://deprecations.emberjs.com/id/warp-drive.ember-inflector"}))})),h.singular.forEach((([e,t])=>{u.has(e.toString())||((0,s.a)(e,t),(0,r.deprecate)("WarpDrive/EmberData no longer uses ember-inflector for singularization.\nPlease `import { singular } from '@ember-data/request-utils/string';` instead to register a custom singularization rule for use with EmberData.",!1,{id:"warp-drive.ember-inflector",until:"6.0.0",for:"warp-drive",since:{enabled:"5.3.4",available:"5.3.4"},url:"https://deprecations.emberjs.com/id/warp-drive.ember-inflector"}))})),Object.keys(h.irregular).forEach((e=>{const t=h.irregular[e],i=p.get(e)
if(i&&i===t)return
if(f.has(e))return
const n=m.get(t.toLowerCase())||e
f.add(t.toLowerCase()),(0,s.i)(n,t),(0,r.deprecate)(`WarpDrive/EmberData no longer uses ember-inflector for irregular rules.\nPlease \`import { irregular } from '@ember-data/request-utils/string';\` instead to register a custom irregular rule for use with EmberData for '${n}' <=> '${t}'.`,!1,{id:"warp-drive.ember-inflector",until:"6.0.0",for:"warp-drive",since:{enabled:"5.3.4",available:"5.3.4"},url:"https://deprecations.emberjs.com/id/warp-drive.ember-inflector"})})),Object.keys(h.uncountable).forEach((e=>{y.has(e)||!0!==h.uncountable[e]||((0,s.u)(e),(0,r.deprecate)(`WarpDrive/EmberData no longer uses ember-inflector for uncountable rules.\nPlease \`import { uncountable } from '@ember-data/request-utils/string';\` instead to register a custom uncountable rule for '${e}' for use with EmberData.`,!1,{id:"warp-drive.ember-inflector",until:"6.0.0",for:"warp-drive",since:{enabled:"5.3.4",available:"5.3.4"},url:"https://deprecations.emberjs.com/id/warp-drive.ember-inflector"}))})),t.plural=function(...e){return(0,s.b)(...e),(0,r.deprecate)("WarpDrive/EmberData no longer uses ember-inflector for pluralization.\nPlease `import { plural } from '@ember-data/request-utils/string';` instead to register a custom pluralization rule for use with EmberData.",!1,{id:"warp-drive.ember-inflector",until:"6.0.0",for:"warp-drive",since:{enabled:"5.3.4",available:"5.3.4"},url:"https://deprecations.emberjs.com/id/warp-drive.ember-inflector"}),n.apply(t,e)},t.singular=function(...e){return(0,s.a)(...e),(0,r.deprecate)("WarpDrive/EmberData no longer uses ember-inflector for singularization.\nPlease `import { singular } from '@ember-data/request-utils/string';` instead to register a custom singularization rule for use with EmberData.",!1,{id:"warp-drive.ember-inflector",until:"6.0.0",for:"warp-drive",since:{enabled:"5.3.4",available:"5.3.4"},url:"https://deprecations.emberjs.com/id/warp-drive.ember-inflector"}),o.apply(t,e)},t.irregular=function(...e){return(0,s.i)(...e),(0,r.deprecate)("WarpDrive/EmberData no longer uses ember-inflector for irregular rules.\nPlease `import { irregular } from '@ember-data/request-utils/string';` instead to register a custom irregular rule for use with EmberData.",!1,{id:"warp-drive.ember-inflector",until:"6.0.0",for:"warp-drive",since:{enabled:"5.3.4",available:"5.3.4"},url:"https://deprecations.emberjs.com/id/warp-drive.ember-inflector"}),a.apply(t,e)},t.uncountable=function(...e){return(0,s.u)(...e),(0,r.deprecate)("WarpDrive/EmberData no longer uses ember-inflector for uncountable rules.\nPlease `import { uncountable } from '@ember-data/request-utils/string';` instead to register a custom uncountable rule for use with EmberData.",!1,{id:"warp-drive.ember-inflector",until:"6.0.0",for:"warp-drive",since:{enabled:"5.3.4",available:"5.3.4"},url:"https://deprecations.emberjs.com/id/warp-drive.ember-inflector"}),l.apply(t,e)}}},9609:(e,t,i)=>{i.d(t,{a:()=>U,b:()=>B,c:()=>z,d:()=>$,e:()=>x,f:()=>m,g:()=>g,h:()=>b,i:()=>P,j:()=>_,k:()=>v,l:()=>D,m:()=>r,p:()=>I,r:()=>q,s:()=>N,u:()=>j})
const r={plurals:[[/$/,"s"],[/s$/i,"s"],[/^(ax|test)is$/i,"$1es"],[/(octop|vir)us$/i,"$1i"],[/(octop|vir)i$/i,"$1i"],[/(alias|status|bonus)$/i,"$1es"],[/(bu)s$/i,"$1ses"],[/(buffal|tomat)o$/i,"$1oes"],[/([ti])um$/i,"$1a"],[/([ti])a$/i,"$1a"],[/sis$/i,"ses"],[/(?:([^f])fe|([lr])f)$/i,"$1$2ves"],[/(hive)$/i,"$1s"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/(x|ch|ss|sh)$/i,"$1es"],[/(matr|vert|ind)(?:ix|ex)$/i,"$1ices"],[/^(m|l)ouse$/i,"$1ice"],[/^(m|l)ice$/i,"$1ice"],[/^(ox)$/i,"$1en"],[/^(oxen)$/i,"$1"],[/(quiz)$/i,"$1zes"]],singular:[[/s$/i,""],[/(ss)$/i,"$1"],[/(n)ews$/i,"$1ews"],[/([ti])a$/i,"$1um"],[/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)(sis|ses)$/i,"$1sis"],[/(^analy)(sis|ses)$/i,"$1sis"],[/([^f])ves$/i,"$1fe"],[/(hive)s$/i,"$1"],[/(tive)s$/i,"$1"],[/([lr])ves$/i,"$1f"],[/([^aeiouy]|qu)ies$/i,"$1y"],[/(s)eries$/i,"$1eries"],[/(m)ovies$/i,"$1ovie"],[/(x|ch|ss|sh)es$/i,"$1"],[/^(m|l)ice$/i,"$1ouse"],[/(bus)(es)?$/i,"$1"],[/(o)es$/i,"$1"],[/(shoe)s$/i,"$1"],[/(cris|test)(is|es)$/i,"$1is"],[/^(a)x[ie]s$/i,"$1xis"],[/(octop|vir)(us|i)$/i,"$1us"],[/(alias|status|bonus)(es)?$/i,"$1"],[/^(ox)en/i,"$1"],[/(vert|ind)ices$/i,"$1ex"],[/(matr)ices$/i,"$1ix"],[/(quiz)zes$/i,"$1"],[/(database)s$/i,"$1"]],irregularPairs:[["person","people"],["man","men"],["child","children"],["sex","sexes"],["move","moves"],["cow","kine"],["zombie","zombies"]],uncountable:["equipment","information","rice","money","species","series","fish","sheep","jeans","police"]}
class s{constructor(e,t){this.size=t||1e4,this.state=new Map,this.doWork=e}get(e){const t=this.state.get(e)
if(t)return this.state.delete(e),this.state.set(e,t),t
const i=this.doWork(e)
return this.set(e,i),i}set(e,t){if(this.state.size===this.size)for(const[i]of this.state){this.state.delete(i)
break}this.state.set(e,t)}clear(){this.state.clear()}}const n=/[ _]/g,o=/([a-z\d])([A-Z])/g,a=new s((e=>e.replace(o,"$1_$2").toLowerCase().replace(n,"-"))),l=/(\-|\_|\.|\s)+(.)?/g,c=/(^|\/)([A-Z])/g,u=new s((e=>e.replace(l,((e,t,i)=>i?i.toUpperCase():"")).replace(c,(e=>e.toLowerCase())))),d=/([a-z\d])([A-Z]+)/g,h=/\-|\s+/g,p=new s((e=>e.replace(d,"$1_$2").replace(h,"_").toLowerCase())),f=/(^|\/)([a-z\u00C0-\u024F])/g,y=new s((e=>e.replace(f,(e=>e.toUpperCase()))))
function m(e){return a.get(e)}function g(e){return u.get(e)}function _(e){return p.get(e)}function b(e){return y.get(e)}function v(e){u.size=e,p.size=e,y.size=e,a.size=e}const w=/^\s*$/,R=/([\w/-]+[_/\s-])([a-z\d]+$)/,k=/([\w/\s-]+)([A-Z][a-z\d]*$)/,A=/[A-Z][a-z\d]*$/,S=new s((e=>function(e){return H(e,F,M)}(e))),E=new s((e=>function(e){return H(e,O,C)}(e))),T=new Set(r.uncountable),C=new Map,M=new Map,F=new Map(r.singular.reverse()),O=new Map(r.plurals.reverse())
function j(e){T.add(e.toLowerCase())}function z(e){e.forEach((e=>{j(e)}))}function P(e,t){C.set(e.toLowerCase(),t),C.set(t.toLowerCase(),t),M.set(t.toLowerCase(),e),M.set(e.toLowerCase(),e)}function D(e){e.forEach((e=>{C.set(e[0].toLowerCase(),e[1]),C.set(e[1].toLowerCase(),e[1]),M.set(e[1].toLowerCase(),e[0]),M.set(e[0].toLowerCase(),e[0])}))}function $(){S.clear(),E.clear()}function q(){x(),r.uncountable.forEach((e=>T.add(e))),r.singular.forEach((e=>F.set(e[0],e[1]))),r.plurals.forEach((e=>O.set(e[0],e[1]))),D(r.irregularPairs)}function x(){S.clear(),E.clear(),T.clear(),C.clear(),M.clear(),F.clear(),O.clear()}function N(e){return e?S.get(e):""}function I(e){return e?E.get(e):""}function L(e,t){const i=[e,...t.entries()]
t.clear(),i.forEach((e=>{t.set(e[0],e[1])}))}function B(e,t){O.has(e)&&O.delete(e),L([e,t],O)}function U(e,t){F.has(e)&&F.delete(e),L([e,t],F)}function H(e,t,i){if(!e||w.test(e))return e
const r=e.toLowerCase()
if(T.has(r))return e
const s=R.exec(e)||k.exec(e),n=s?s[2].toLowerCase():null
if(n&&T.has(n))return e
const o=A.test(e)
for(let[a,l]of i)if(r.match(a+"$"))return o&&n&&i.has(n)&&(l=b(l),a=b(a)),e.replace(new RegExp(a,"i"),l)
for(const[a,l]of t)if(a.test(e))return e.replace(a,l)
return e}D(r.irregularPairs)},1198:(e,t,i)=>{i.r(t),i.d(t,{camelize:()=>r.g,capitalize:()=>r.h,clear:()=>r.d,clearRules:()=>r.e,dasherize:()=>r.f,irregular:()=>r.i,loadIrregular:()=>r.l,loadUncountable:()=>r.c,plural:()=>r.b,pluralize:()=>r.p,resetToDefaults:()=>r.r,setMaxLRUCacheSize:()=>r.k,singular:()=>r.a,singularize:()=>r.s,uncountable:()=>r.u,underscore:()=>r.j})
var r=i(9609)},4315:(e,t,i)=>{i.d(t,{I:()=>f,b:()=>v,c:()=>d,e:()=>b,f:()=>k,g:()=>h,s:()=>p,u:()=>w})
var r=i(5225),s=i(942)
function n(e,t){return e.get(o(e,t))}function o(e,t,i){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:i
throw new TypeError("Private element is not present on this object")}function a(e,t,i){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var i=t.call(e,"string")
if("object"!=typeof i)return i
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}const l=(0,r.vs)("PromiseCache",new WeakMap),c=(0,r.vs)("RequestMap",new Map)
function u(e,t){c.set(e,t)}function d(e){c.delete(e)}function h(e){return c.get(e)}function p(e,t){l.set(e,t)}const f=(0,r.L1)("IS_CACHE_HANDLER",Symbol("IS_CACHE_HANDLER"))
function y(e){return e&&!0===e[s.k0]}function m(e,t,i){return y(t)?t:i?{[s.k0]:!0,request:e.request,response:e.getResponse(),error:t}:{[s.k0]:!0,request:e.request,response:e.getResponse(),content:t}}function g(e){return new DOMException(e||"The user aborted a request.","AbortError")}function _(e,t){return 0===t&&Boolean(e[f])}function b(e,t,i,r){const n=new A(t,r,0===i),o=new E(n)
let a
try{a=e[i].request(o,(function(t){return n.nextCalled++,b(e,t,i+1,r)})),a&&_(e[i],i)&&(a instanceof Promise||(u(n.requestId,{isError:!1,result:m(n,a,!1)}),a=Promise.resolve(a)))}catch(t){_(e[i],i)&&u(n.requestId,{isError:!0,result:m(n,t,!0)}),a=Promise.reject(t)}const l=function(e){const t=v()
let i,{promise:r}=t
return r=r.finally((()=>{e.resolveStream(),i&&i.forEach((e=>e()))})),r.onFinalize=e=>{i=i||[],i.push(e)},r[s.J6]=!0,r.getStream=()=>e.getStream(),r.abort=t=>{e.abort(g(t))},t.promise=r,t}(n)
return c=a,Boolean(c&&c instanceof Promise&&!0===c[s.J6])?function(e,t,i){return e.setStream(t.getStream()),t.then((t=>{const r={[s.k0]:!0,request:e.request,response:t.response,content:t.content}
i.resolve(r)}),(t=>{if(y(t)&&e.setStream(e.god.stream),!(t&&t instanceof Error))try{throw new Error(t||"Request Rejected with an Unknown Error")}catch(e){t&&"object"==typeof t&&(Object.assign(e,t),e.message=t.message||"Request Rejected with an Unknown Error"),t=e}t[s.k0]=!0,t.request=e.request,t.response=e.getResponse(),t.error=t.error||t.message,i.reject(t)})),i.promise}(n,a,l):function(e,t,i){return t.then((t=>{if(e.controller.signal.aborted)return void i.reject(g(e.controller.signal.reason))
y(t)&&(e.setStream(e.god.stream),t=t.content)
const r={[s.k0]:!0,request:e.request,response:e.getResponse(),content:t}
i.resolve(r)}),(t=>{if(y(t)&&e.setStream(e.god.stream),!(t&&t instanceof Error))try{throw new Error(t||"Request Rejected with an Unknown Error")}catch(e){t&&"object"==typeof t&&(Object.assign(e,t),e.message=t.message||"Request Rejected with an Unknown Error"),t=e}t[s.k0]=!0,t.request=e.request,t.response=e.getResponse(),t.error=t.error||t.message,i.reject(t)})),i.promise}(n,a,l)
var c}function v(){let e,t
const i=new Promise(((i,r)=>{e=i,t=r}))
return{resolve:e,reject:t,promise:i}}function w(e,t){return e[s.J6]=!0,e.getStream=t.getStream,e.abort=t.abort,e.onFinalize=t.onFinalize,e}function R(e){return e.clone=()=>new Headers(e),e.toJSON=()=>Array.from(e),e}function k(e){const{headers:t,ok:i,redirected:r,status:s,statusText:n,type:o,url:a}=e
return R(t),{headers:t,ok:i,redirected:r,status:s,statusText:n,type:o,url:a}}class A{constructor(e,t,i=!1){a(this,"hasSetStream",!1),a(this,"hasSetResponse",!1),a(this,"hasSubscribers",!1),a(this,"stream",v()),a(this,"response",null),a(this,"nextCalled",0),this.isRoot=i,this.requestId=t.id,this.controller=e.controller||t.controller,this.stream.promise.sizeHint=0,e.controller&&(e.controller!==t.controller&&t.controller.signal.addEventListener("abort",(()=>{this.controller.abort(t.controller.signal.reason)})),delete e.controller)
let r=Object.assign({signal:this.controller.signal},e)
e.headers&&R(e.headers),this.enhancedRequest=r,this.request=e,this.god=t,this.stream.promise=this.stream.promise.then((e=>(this.god.stream===e&&this.hasSubscribers&&(this.god.stream=null),e)))}get hasRequestedStream(){return this.god.hasRequestedStream}getResponse(){return this.hasSetResponse?this.response:1===this.nextCalled?this.god.response:null}getStream(){if(this.isRoot&&(this.god.hasRequestedStream=!0),!this.hasSetResponse){const e=this.god.response?.headers?.get("content-length")
this.stream.promise.sizeHint=e?parseInt(e,10):0}return this.hasSubscribers=!0,this.stream.promise}abort(e){this.controller.abort(e)}setStream(e){this.hasSetStream||(this.hasSetStream=!0,e instanceof Promise||(this.god.stream=e),this.stream.resolve(e))}resolveStream(){this.setStream(1===this.nextCalled?this.god.stream:null)}setResponse(e){if(!this.hasSetResponse)if(this.hasSetResponse=!0,e instanceof Response){let t=k(e)
this.response=t,this.god.response=t
const i=e.headers?.get("content-length")
this.stream.promise.sizeHint=i?parseInt(i,10):0}else this.response=e,this.god.response=e}}var S=new WeakMap
class E{constructor(e){var t,i;(function(e,t){(function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")})(e,t),t.set(e,void 0)})(this,S),this.id=e.requestId,i=e,(t=S).set(o(t,this),i),this.request=e.enhancedRequest}setStream(e){n(S,this).setStream(e)}setResponse(e){n(S,this).setResponse(e)}get hasRequestedStream(){return n(S,this).hasRequestedStream}}new Map([["records","array"],["data","json"],["body",{type:"string",klass:["Blob","ArrayBuffer","TypedArray","DataView","FormData","URLSearchParams","ReadableStream"]}],["disableTestWaiter","boolean"],["options","object"],["cacheOptions","object"],["op","string"],["store","object"],["url","string"],["cache",["default","force-cache","no-cache","no-store","only-if-cached","reload"]],["credentials",["include","omit","same-origin"]],["destination",["","object","audio","audioworklet","document","embed","font","frame","iframe","image","manifest","paintworklet","report","script","sharedworker","style","track","video","worker","xslt"]],["headers","headers"],["integrity","string"],["keepalive","boolean"],["method",["GET","PUT","PATCH","DELETE","POST","OPTIONS"]],["mode",["same-origin","cors","navigate","no-cors"]],["redirect",["error","follow","manual"]],["referrer","string"],["signal","AbortSignal"],["controller","AbortController"],["referrerPolicy",["","same-origin","no-referrer","no-referrer-when-downgrade","origin","origin-when-cross-origin","strict-origin","strict-origin-when-cross-origin","unsafe-url"]]]),(0,r.L1)("IS_FROZEN",Symbol("FROZEN")),(0,r.L1)("IS_COLLECTION",Symbol.for("Collection")),new Set([])},5583:(e,t,i)=>{i.d(t,{Ay:()=>a,ud:()=>s.b})
var r=i(5225),s=i(4315)
function n(e,t){return e.get(function(e,t,i){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:i
throw new TypeError("Private element is not present on this object")}(e,t))}var o=new WeakMap
class a{constructor(e){var t,i
i=[],function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(this,t=o),t.set(this,i),Object.assign(this,e),this._pending=new Map}useCache(e){e[s.I]=!0,n(o,this).unshift(e)}use(e){n(o,this).push(...e)}request(e){const t=n(o,this),i=e.controller||new AbortController
e.controller&&delete e.controller
const a=(0,r.dN)("REQ_ID")??0;(0,r.ml)("REQ_ID",a+1)
const l=(0,s.e)(t,e,0,{controller:i,response:null,stream:null,hasRequestedStream:!1,id:a}),c=(0,s.g)(a),u=(0,s.u)(l.then((e=>((0,s.s)(u,{isError:!1,result:e}),(0,s.c)(a),e)),(e=>{throw(0,s.s)(u,{isError:!0,result:e}),(0,s.c)(a),e})),l)
return c&&(0,s.s)(u,c),u}static create(e){return new this(e)}}},8681:(e,t,i)=>{i.r(t),i.d(t,{EmbeddedRecordsMixin:()=>E,default:()=>C})
var r=i(1603),s=i(1198),n=i(2294),o=i(4471),a=i.n(o),l=i(2735),c=Object.defineProperty;((e,t)=>{for(var i in t)c(e,i,{get:t[i],enumerable:!0})})({},{c:()=>m,f:()=>d,g:()=>h,i:()=>y,m:()=>p,n:()=>f,p:()=>g})
var u=new WeakMap
function d(e,t,i,r){return h(e.prototype,t,i,r)}function h(e,t,i,r){let s={configurable:!0,enumerable:!0,writable:!0,initializer:null}
r&&(s.initializer=r)
for(let n of i)s=n(e,t,s)||s
void 0===s.initializer?Object.defineProperty(e,t,s):function(e,t,i){let r=u.get(e)
r||(r=new Map,u.set(e,r)),r.set(t,i)}(e,t,s)}function p({prototype:e},t,i){return f(e,t,i)}function f(e,t,i){let r={...Object.getOwnPropertyDescriptor(e,t)}
for(let s of i)r=s(e,t,r)||r
void 0!==r.initializer&&(r.value=r.initializer?r.initializer.call(e):void 0,r.initializer=void 0),Object.defineProperty(e,t,r)}function y(e,t){let i=function(e,t){let i=e.prototype
for(;i;){let e=u.get(i)?.get(t)
if(e)return e
i=i.prototype}}(e.constructor,t)
i&&Object.defineProperty(e,t,{enumerable:i.enumerable,configurable:i.configurable,writable:i.writable,value:i.initializer?i.initializer.call(e):void 0})}function m(e,t){return t.reduce(((e,t)=>t(e)||e),e)}function g(e,t){for(let[i,r,s]of t)"field"===i?_(e,r,s):f(e,r,s)
return e}function _(e,t,i){let r={configurable:!0,enumerable:!0,writable:!0,initializer:()=>Object.getOwnPropertyDescriptor(e,t)?.value}
for(let s of i)r=s(e,t,r)||r
r.initializer&&(r.value=r.initializer.call(e),delete r.initializer),Object.defineProperty(e,t,r)}var b=new WeakMap
class v extends(a()){constructor(...e){var t,i
super(...e),t=b,i=void y(this,"store"),function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(this,t),t.set(this,i)}normalize(e,t){return t}}function w(e){return null==e||""===e?null:"string"==typeof e?e:"symbol"==typeof e?e.toString():String(e)}h(v.prototype,"store",[l.inject])
const R=/^\/?data\/(attributes|relationships)\/(.*)/,k=/^\/?data/,A=v.extend({primaryKey:"id",mergedProperties:["attrs"],applyTransforms(e,t){const i=e.attributes
return e.eachTransformedAttribute(((e,r)=>{if(void 0===t[e])return
const s=this.transformFor(r),n=i.get(e)
t[e]=s.deserialize(t[e],n.options)})),t},normalizeResponse(e,t,i,r,s){switch(s){case"findRecord":return this.normalizeFindRecordResponse(...arguments)
case"queryRecord":return this.normalizeQueryRecordResponse(...arguments)
case"findAll":return this.normalizeFindAllResponse(...arguments)
case"findBelongsTo":return this.normalizeFindBelongsToResponse(...arguments)
case"findHasMany":return this.normalizeFindHasManyResponse(...arguments)
case"findMany":return this.normalizeFindManyResponse(...arguments)
case"query":return this.normalizeQueryResponse(...arguments)
case"createRecord":return this.normalizeCreateRecordResponse(...arguments)
case"deleteRecord":return this.normalizeDeleteRecordResponse(...arguments)
case"updateRecord":return this.normalizeUpdateRecordResponse(...arguments)}},normalizeFindRecordResponse(e,t,i,r,s){return this.normalizeSingleResponse(...arguments)},normalizeQueryRecordResponse(e,t,i,r,s){return this.normalizeSingleResponse(...arguments)},normalizeFindAllResponse(e,t,i,r,s){return this.normalizeArrayResponse(...arguments)},normalizeFindBelongsToResponse(e,t,i,r,s){return this.normalizeSingleResponse(...arguments)},normalizeFindHasManyResponse(e,t,i,r,s){return this.normalizeArrayResponse(...arguments)},normalizeFindManyResponse(e,t,i,r,s){return this.normalizeArrayResponse(...arguments)},normalizeQueryResponse(e,t,i,r,s){return this.normalizeArrayResponse(...arguments)},normalizeCreateRecordResponse(e,t,i,r,s){return this.normalizeSaveResponse(...arguments)},normalizeDeleteRecordResponse(e,t,i,r,s){return this.normalizeSaveResponse(...arguments)},normalizeUpdateRecordResponse(e,t,i,r,s){return this.normalizeSaveResponse(...arguments)},normalizeSaveResponse(e,t,i,r,s){return this.normalizeSingleResponse(...arguments)},normalizeSingleResponse(e,t,i,r,s){return this._normalizeResponse(e,t,i,r,s,!0)},normalizeArrayResponse(e,t,i,r,s){return this._normalizeResponse(e,t,i,r,s,!1)},_normalizeResponse(e,t,i,r,s,n){const o={data:null,included:[]},a=this.extractMeta(e,t,i)
if(a&&(o.meta=a),n){const{data:e,included:r}=this.normalize(t,i)
o.data=e,r&&(o.included=r)}else{const e=new Array(i.length)
for(let r=0,s=i.length;r<s;r++){const s=i[r],{data:n,included:a}=this.normalize(t,s)
a&&(o.included=o.included.concat(a)),e[r]=n}o.data=e}return o},normalize(e,t){let i=null
return t&&(this.normalizeUsingDeclaredMapping(e,t),"object"==typeof t.links&&this.normalizeUsingDeclaredMapping(e,t.links),i={id:this.extractId(e,t),type:e.modelName,attributes:this.extractAttributes(e,t),relationships:this.extractRelationships(e,t)},t.lid&&(i.lid=t.lid),this.applyTransforms(e,i.attributes)),{data:i}},extractId(e,t){return w(t[this.primaryKey])},extractAttributes(e,t){let i
const r={}
return e.eachAttribute((e=>{i=this.keyForAttribute(e,"deserialize"),void 0!==t[i]&&(r[e]=t[i])})),r},extractRelationship(e,t){if(!t)return null
if(t&&"object"==typeof t&&!Array.isArray(t)){t.id&&(t.id=w(t.id))
const i=this.store.modelFor(e)
return t.type&&!i.fields.has("type")&&(t.type=this.modelNameFromPayloadKey(t.type)),t}return{id:w(t),type:(0,s.dasherize)((0,s.singularize)(e))}},extractPolymorphicRelationship(e,t,i){return this.extractRelationship(e,t)},extractRelationships(e,t){const i={}
return e.eachRelationship(((e,r)=>{let s=null
const n=this.keyForRelationship(e,r.kind,"deserialize")
if(void 0!==t[n]){let i=null
const o=t[n]
if("belongsTo"===r.kind)i=r.options.polymorphic?this.extractPolymorphicRelationship(r.type,o,{key:e,resourceHash:t,relationshipMeta:r}):this.extractRelationship(r.type,o)
else if("hasMany"===r.kind&&o)if(i=new Array(o.length),r.options.polymorphic)for(let s=0,n=o.length;s<n;s++){const n=o[s]
i[s]=this.extractPolymorphicRelationship(r.type,n,{key:e,resourceHash:t,relationshipMeta:r})}else for(let e=0,t=o.length;e<t;e++){const t=o[e]
i[e]=this.extractRelationship(r.type,t)}s={data:i}}const o=this.keyForLink(e,r.kind)
if(t.links&&void 0!==t.links[o]){const e=t.links[o]
s=s||{},s.links={related:e}}s&&(i[e]=s)})),i},modelNameFromPayloadKey:e=>(0,s.dasherize)((0,s.singularize)(e)),normalizeRelationships(e,t){let i
this.keyForRelationship&&e.eachRelationship(((e,r)=>{i=this.keyForRelationship(e,r.kind,"deserialize"),e!==i&&void 0!==t[i]&&(t[e]=t[i],delete t[i])}))},normalizeUsingDeclaredMapping(e,t){const i=this.attrs
let r,s
if(i)for(const n in i)r=s=this._getMappedKey(n,e),void 0!==t[s]&&(e.attributes.has(n)&&(r=this.keyForAttribute(n,"deserialize")),e.relationshipsByName.has(n)&&(r=this.keyForRelationship(n,e,"deserialize")),s!==r&&(t[r]=t[s],delete t[s]))},_getMappedKey(e,t){(0,r.warn)("There is no attribute or relationship with the name `"+e+"` on `"+t.modelName+"`. Check your serializers attrs hash.",t.attributes.has(e)||t.relationshipsByName.has(e),{id:"ds.serializer.no-mapped-attrs-key"})
const i=this.attrs
let s
return i&&i[e]&&(s=i[e],s.key&&(s=s.key),"string"==typeof s&&(e=s)),e},_canSerialize(e){const t=this.attrs
return!t||!t[e]||!1!==t[e].serialize},_mustSerialize(e){const t=this.attrs
return t&&t[e]&&!0===t[e].serialize},shouldSerializeHasMany(e,t,i){const r=this.store.modelFor(e.modelName).determineRelationshipType(i,this.store)
return!!this._mustSerialize(t)||this._canSerialize(t)&&("manyToNone"===r||"manyToMany"===r)},serialize(e,t){const i={}
if(t&&t.includeId){const t=e.id
t&&(i[this.primaryKey]=t)}return e.eachAttribute(((t,r)=>{this.serializeAttribute(e,i,t,r)})),e.eachRelationship(((t,r)=>{"belongsTo"===r.kind?this.serializeBelongsTo(e,i,r):"hasMany"===r.kind&&this.serializeHasMany(e,i,r)})),i},serializeIntoHash(e,t,i,r){Object.assign(e,this.serialize(i,r))},serializeAttribute(e,t,i,r){if(this._canSerialize(i)){const s=r.type
let n=e.attr(i)
s&&(n=this.transformFor(s).serialize(n,r.options))
const o=this.store.modelFor(e.modelName)
let a=this._getMappedKey(i,o)
a===i&&this.keyForAttribute&&(a=this.keyForAttribute(i,"serialize")),t[a]=n}},serializeBelongsTo(e,t,i){const r=i.name
if(this._canSerialize(r)){const s=e.belongsTo(r,{id:!0}),n=this.store.modelFor(e.modelName)
let o=this._getMappedKey(r,n)
o===r&&this.keyForRelationship&&(o=this.keyForRelationship(r,"belongsTo","serialize")),t[o]=s||null,i.options.polymorphic&&this.serializePolymorphicType(e,t,i)}},serializeHasMany(e,t,i){const r=i.name
if(this.shouldSerializeHasMany(e,r,i)){const i=e.hasMany(r,{ids:!0})
if(void 0!==i){const s=this.store.modelFor(e.modelName)
let n=this._getMappedKey(r,s)
n===r&&this.keyForRelationship&&(n=this.keyForRelationship(r,"hasMany","serialize")),t[n]=i}}},serializePolymorphicType(){},extractMeta(e,t,i){if(i&&void 0!==i.meta){const e=i.meta
return delete i.meta,e}},extractErrors(e,t,i,r){if(i&&"object"==typeof i&&i.errors){const e={}
return i.errors.forEach((t=>{if(t.source&&t.source.pointer){let i=t.source.pointer.match(R)
i?i=i[2]:-1!==t.source.pointer.search(k)&&(i="base"),i&&(e[i]=e[i]||[],e[i].push(t.detail||t.title))}})),this.normalizeUsingDeclaredMapping(t,e),t.eachAttribute((t=>{const i=this.keyForAttribute(t,"deserialize")
i!==t&&void 0!==e[i]&&(e[t]=e[i],delete e[i])})),t.eachRelationship((t=>{const i=this.keyForRelationship(t,"deserialize")
i!==t&&void 0!==e[i]&&(e[t]=e[i],delete e[i])})),e}return i},keyForAttribute:(e,t)=>e,keyForRelationship:(e,t,i)=>e,keyForLink:(e,t)=>e,transformFor(e,t){return(0,n.getOwner)(this).lookup("transform:"+e)}})
var S=i(2181)
const E=i.n(S)().create({normalize(e,t,i){const r=this._super(e,t,i)
return this._extractEmbeddedRecords(this,this.store,e,r)},keyForRelationship(e,t,i){return"serialize"===i&&this.hasSerializeRecordsOption(e)||"deserialize"===i&&this.hasDeserializeRecordsOption(e)?this.keyForAttribute(e,i):this._super(e,t,i)||e},serializeBelongsTo(e,t,i){const r=i.name
if(this.noSerializeOptionSpecified(r))return void this._super(e,t,i)
const s=this.hasSerializeIdsOption(r),n=this.hasSerializeRecordsOption(r),o=e.belongsTo(r)
if(s){const r=this.store.modelFor(e.modelName)
let s=this._getMappedKey(i.name,r)
s===i.name&&this.keyForRelationship&&(s=this.keyForRelationship(i.name,i.kind,"serialize")),o?(t[s]=o.id,i.options.polymorphic&&this.serializePolymorphicType(e,t,i)):t[s]=null}else n&&this._serializeEmbeddedBelongsTo(e,t,i)},_serializeEmbeddedBelongsTo(e,t,i){const r=e.belongsTo(i.name),s=this.store.modelFor(e.modelName)
let n=this._getMappedKey(i.name,s)
n===i.name&&this.keyForRelationship&&(n=this.keyForRelationship(i.name,i.kind,"serialize")),r?(t[n]=r.serialize({includeId:!0}),this.removeEmbeddedForeignKey(e,r,i,t[n]),i.options.polymorphic&&this.serializePolymorphicType(e,t,i)):t[n]=null},serializeHasMany(e,t,i){const r=i.name
if(this.noSerializeOptionSpecified(r))this._super(e,t,i)
else if(this.hasSerializeIdsOption(r)){const s=this.store.modelFor(e.modelName)
let n=this._getMappedKey(i.name,s)
n===i.name&&this.keyForRelationship&&(n=this.keyForRelationship(i.name,i.kind,"serialize")),t[n]=e.hasMany(r,{ids:!0})}else this.hasSerializeRecordsOption(r)?this._serializeEmbeddedHasMany(e,t,i):this.hasSerializeIdsAndTypesOption(r)&&this._serializeHasManyAsIdsAndTypes(e,t,i)},_serializeHasManyAsIdsAndTypes(e,t,i){const r=this.keyForAttribute(i.name,"serialize"),s=e.hasMany(i.name)||[]
t[r]=s.map((function(e){return{id:e.id,type:e.modelName}}))},_serializeEmbeddedHasMany(e,t,i){const s=this.store.modelFor(e.modelName)
let n=this._getMappedKey(i.name,s)
n===i.name&&this.keyForRelationship&&(n=this.keyForRelationship(i.name,i.kind,"serialize")),(0,r.warn)(`The embedded relationship '${n}' is undefined for '${e.modelName}' with id '${e.id}'. Please include it in your original payload.`,void 0!==e.hasMany(i.name),{id:"ds.serializer.embedded-relationship-undefined"}),t[n]=this._generateSerializedHasMany(e,i)},_generateSerializedHasMany(e,t){const i=e.hasMany(t.name)||[],r=new Array(i.length)
for(let s=0;s<i.length;s++){const n=i[s],o=n.serialize({includeId:!0})
this.removeEmbeddedForeignKey(e,n,t,o),r[s]=o}return r},removeEmbeddedForeignKey(e,t,i,r){if("belongsTo"===i.kind){const s=this.store.modelFor(e.modelName).inverseFor(i.name,this.store)
if(s){const e=s.name,i=this.store.serializerFor(t.modelName).keyForRelationship(e,s.kind,"deserialize")
i&&delete r[i]}}},hasEmbeddedAlwaysOption(e){const t=this.attrsOption(e)
return t&&"always"===t.embedded},hasSerializeRecordsOption(e){const t=this.hasEmbeddedAlwaysOption(e),i=this.attrsOption(e)
return t||i&&"records"===i.serialize},hasSerializeIdsOption(e){const t=this.attrsOption(e)
return t&&("ids"===t.serialize||"id"===t.serialize)},hasSerializeIdsAndTypesOption(e){const t=this.attrsOption(e)
return t&&("ids-and-types"===t.serialize||"id-and-type"===t.serialize)},noSerializeOptionSpecified(e){const t=this.attrsOption(e)
return!(t&&(t.serialize||t.embedded))},hasDeserializeRecordsOption(e){const t=this.hasEmbeddedAlwaysOption(e),i=this.attrsOption(e)
return t||i&&"records"===i.deserialize},attrsOption(e){const t=this.attrs
return t&&(t[(0,s.camelize)(e)]||t[e])},_extractEmbeddedRecords(e,t,i,r){return i.eachRelationship(((i,s)=>{e.hasDeserializeRecordsOption(i)&&("hasMany"===s.kind&&this._extractEmbeddedHasMany(t,i,r,s),"belongsTo"===s.kind&&this._extractEmbeddedBelongsTo(t,i,r,s))})),r},_extractEmbeddedHasMany(e,t,i,r){const s=i.data?.relationships?.[t]?.data
if(!s)return
const n=new Array(s.length)
for(let a=0;a<s.length;a++){const t=s[a],{data:o,included:l}=this._normalizeEmbeddedRelationship(e,r,t)
i.included=i.included||[],i.included.push(o),l&&(i.included=i.included.concat(l)),n[a]={id:o.id,type:o.type},o.lid&&(n[a].lid=o.lid)}const o={data:n}
i.data.relationships[t]=o},_extractEmbeddedBelongsTo(e,t,i,r){const s=i.data?.relationships?.[t]?.data
if(!s)return
const{data:n,included:o}=this._normalizeEmbeddedRelationship(e,r,s)
i.included=i.included||[],i.included.push(n),o&&(i.included=i.included.concat(o))
const a={id:n.id,type:n.type},l={data:a}
n.lid&&(a.lid=n.lid),i.data.relationships[t]=l},_normalizeEmbeddedRelationship(e,t,i){let r=t.type
t.options.polymorphic&&(r=i.type)
const s=e.modelFor(r)
return e.serializerFor(r).normalize(s,i,null)},isEmbeddedRecordsMixin:!0})
function T(e){return Array.isArray(e)?e:[e]}const C=A.extend({keyForPolymorphicType(e,t,i){return`${this.keyForRelationship(e)}Type`},_normalizeArray(e,t,i,r){const s={data:[],included:[]},n=e.modelFor(t),o=e.serializerFor(t)
return T(i).forEach((t=>{const{data:i,included:a}=this._normalizePolymorphicRecord(e,t,r,n,o)
s.data.push(i),a&&(s.included=s.included.concat(a))})),s},_normalizePolymorphicRecord(e,t,i,r,s){let n=s,o=r
if(!r.fields.has("type")&&t.type){const i=this.modelNameFromPayloadKey(t.type)
e.schema.hasResource({type:i})&&(n=e.serializerFor(i),o=e.modelFor(i))}return n.normalize(o,t,i)},_normalizeResponse(e,t,i,s,n,o){const a={data:null,included:[]},l=this.extractMeta(e,t,i)
l&&(a.meta=l)
const c=Object.keys(i)
for(var u=0,d=c.length;u<d;u++){var h=c[u],p=h,f=!1
"_"===h.charAt(0)&&(f=!0,p=h.substr(1))
const n=this.modelNameFromPayloadKey(p)
if(!e.schema.hasResource({type:n})){(0,r.warn)(this.warnMessageNoModelForKey(p,n),!1,{id:"ds.serializer.model-for-key-missing"})
continue}var y=!f&&this.isPrimaryType(e,n,t),m=i[h]
if(null===m)continue
if(y&&!Array.isArray(m)){const{data:i,included:r}=this._normalizePolymorphicRecord(e,m,h,t,this)
a.data=i,r&&(a.included=a.included.concat(r))
continue}const{data:l,included:d}=this._normalizeArray(e,n,m,h)
d&&(a.included=a.included.concat(d)),o?l.forEach((e=>{const t=y&&w(e.id)===s
y&&!s&&!a.data||t?a.data=e:a.included.push(e)})):y?a.data=l:l&&(a.included=a.included.concat(l))}return a},isPrimaryType:(e,t,i)=>(0,s.dasherize)(t)===i.modelName,pushPayload(e,t){const i={data:[],included:[]}
for(const s in t){const n=this.modelNameFromPayloadKey(s)
if(!e.schema.hasResource({type:n})){(0,r.warn)(this.warnMessageNoModelForKey(s,n),!1,{id:"ds.serializer.model-for-key-missing"})
continue}const o=e.modelFor(n),a=e.serializerFor(o.modelName)
T(t[s]).forEach((e=>{const{data:t,included:r}=a.normalize(o,e,s)
i.data.push(t),r&&(i.included=i.included.concat(r))}))}e.push(i)},modelNameFromPayloadKey:e=>(0,s.dasherize)((0,s.singularize)(e)),serialize(e,t){return this._super(...arguments)},serializeIntoHash(e,t,i,r){e[this.payloadKeyFromModelName(t.modelName)]=this.serialize(i,r)},payloadKeyFromModelName:e=>(0,s.camelize)(e),serializePolymorphicType(e,t,i){const r=i.name,n=this.keyForPolymorphicType(r,i.type,"serialize"),o=e.belongsTo(r)
t[n]=o?(0,s.camelize)(o.modelName):null},extractPolymorphicRelationship(e,t,i){const{key:r,resourceHash:s,relationshipMeta:n}=i,o=n.options.polymorphic,a=this.keyForPolymorphicType(r,e,"deserialize")
if(o&&void 0!==s[a]&&"object"!=typeof t){const e=this.modelNameFromPayloadKey(s[a])
return{id:w(t),type:e}}return this._super(...arguments)}})},1438:(e,t,i)=>{i.r(t),i.d(t,{BooleanTransform:()=>l,DateTransform:()=>c,NumberTransform:()=>d,StringTransform:()=>h,default:()=>a})
var r=i(4471),s=i.n(r),n=i(7082)
function o(e,t,i){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var i=t.call(e,"string")
if("object"!=typeof i)return i
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}const a=s()
class l{constructor(){o(this,n.k5,"boolean")}deserialize(e,t){return null==e&&!0===t?.allowNull?null:"boolean"==typeof e?e:"string"==typeof e?/^(true|t|1)$/i.test(e):"number"==typeof e&&1===e}serialize(e,t){return null==e&&!0===t?.allowNull?null:Boolean(e)}static create(){return new this}}class c{constructor(){o(this,n.k5,"date")}deserialize(e,t){if("string"==typeof e){let t=e.indexOf("+")
return-1!==t&&e.length-5===t?(t+=3,new Date(e.slice(0,t)+":"+e.slice(t))):new Date(e)}return"number"==typeof e?new Date(e):null==e?e:null}serialize(e,t){return e instanceof Date&&!isNaN(e)?e.toISOString():null}static create(){return new this}}function u(e){return e==e&&e!==1/0&&e!==-1/0}class d{constructor(){o(this,n.k5,"number")}deserialize(e,t){if(""===e||null==e)return null
{const t=Number(e)
return u(t)?t:null}}serialize(e,t){if(""===e||null==e)return null
{const t=Number(e)
return u(t)?t:null}}static create(){return new this}}class h{constructor(){o(this,n.k5,"string")}deserialize(e,t){return e||""===e?String(e):null}serialize(e,t){return e||""===e?String(e):null}static create(){return new this}}},4813:(e,t,i)=>{i.d(t,{J4:()=>r.n,RX:()=>r.l,TP:()=>r.o,To:()=>r.A,Wz:()=>r.t,XK:()=>r.M,di:()=>r.u,fV:()=>r.s,i:()=>r.q,o:()=>r.r,oX:()=>r.p,oz:()=>r.I,pG:()=>r.g,u2:()=>r.k,xm:()=>r.i})
var r=i(9545)},9545:(e,t,i)=>{i.d(t,{A:()=>Ae,C:()=>at,I:()=>Oe,M:()=>Ee,S:()=>Ge,a:()=>E,b:()=>T,c:()=>C,d:()=>M,e:()=>F,g:()=>f,i:()=>k,k:()=>Se,l:()=>$e,n:()=>Me,o:()=>Y,p:()=>W,q:()=>X,r:()=>Q,s:()=>Z,t:()=>V,u:()=>m})
var r=i(1603),s=i(942),n=i(5225)
Symbol("record-originated-on-client"),Symbol("identifier-bucket"),Symbol("warpDriveStaleCache")
const o=Symbol("warpDriveCache")
var a=i(1198),l=i(3791),c=i(1223),u=i(3573)
function d(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function h(e,t,i){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:i
throw new TypeError("Private element is not present on this object")}function p(e,t,i){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var i=t.call(e,"string")
if("object"!=typeof i)return i
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function f(e){{let t
return t=null==e||""===e?null:String(e),(0,r.deprecate)(`The resource id '<${typeof e}> ${String(e)} ' is not normalized. Update your application code to use '${JSON.stringify(t)}' instead.`,t===e,{id:"ember-data:deprecate-non-strict-id",until:"6.0",for:"ember-data",since:{available:"5.3",enabled:"5.3"}}),t}}function y(e){let t=null
return"string"==typeof e?t=e.length>0?e:null:"number"!=typeof e||isNaN(e)||(t=String(e)),t}function m(e){{const t=(0,a.dasherize)(e)
return(0,r.deprecate)(`The resource type '${e}' is not normalized. Update your application code to use '${t}' instead of '${e}'.`,t===e,{id:"ember-data:deprecate-non-strict-types",until:"6.0",for:"ember-data",since:{available:"5.3",enabled:"5.3"}}),t}}function g(e){return Boolean(e&&"object"==typeof e)}function _(e,t){return Boolean(g(e)&&t in e&&"string"==typeof e[t]&&e[t].length)}function b(e){return _(e,"lid")}function v(e){return _(e,"id")||Boolean(g(e)&&"id"in e&&"number"==typeof e.id)}const w=(0,n.L1)("IDENTIFIERS",new Set),R=(0,n.L1)("DOCUMENTS",new Set)
function k(e){return void 0!==e[o]||w.has(e)}function A(e){return R.has(e)}const S="undefined"!=typeof FastBoot?FastBoot.require("crypto"):window.crypto
function E(e){(0,n.dV)("configuredGenerationMethod",e)}function T(e){(0,n.dV)("configuredUpdateMethod",e)}function C(e){(0,n.dV)("configuredForgetMethod",e)}function M(e){(0,n.dV)("configuredResetMethod",e)}function F(e){(0,n.dV)("configuredKeyInfoMethod",e)}const O=new Map
let j=0
function z(e,t,i){"record"===i&&!e.id&&v(t)&&function(e,t,i){let r=e.get(t.type)
r||(r=new Map,e.set(t.type,r)),r.set(i,t.lid)}(O,e,t.id)}function P(e,t){const i=v(e)?f(e.id):null
return{type:function(e){return _(e,"type")}(e)?m(e.type):t?t.type:null,id:i}}function D(e,t){if("record"===t){if(b(e))return e.lid
if(v(e)){const t=m(e.type),i=O.get(t)?.get(e.id)
return i||`@lid:${t}-${e.id}`}return S.randomUUID()}if("document"===t)return e.url?e.method&&"GET"!==e.method.toUpperCase()?null:e.url:null}function $(...e){}function q(e,t,i){return e}class x{constructor(){this._generate=(0,n.Yj)("configuredGenerationMethod")||D,this._update=(0,n.Yj)("configuredUpdateMethod")||z,this._forget=(0,n.Yj)("configuredForgetMethod")||$,this._reset=(0,n.Yj)("configuredResetMethod")||$,this._merge=q,this._keyInfoForResource=(0,n.Yj)("configuredKeyInfoMethod")||P,this._id=j++,this._cache={resources:new Map,resourcesByType:Object.create(null),documents:new Map,polymorphicLidBackMap:new Map}}__configureMerge(e){this._merge=e||q}upgradeIdentifier(e){return this._getRecordIdentifier(e,2)}_getRecordIdentifier(e,t){if(k(e))return e
const i=this._generate(e,"record")
let r=I(this._cache,i)
if(null!==r)return r
if(0!==t){if(2===t)e.lid=i,e[o]=this._id,r=N(e)
else{const t=this._keyInfoForResource(e,null)
t.lid=i,t[o]=this._id,r=N(t)}return L(this._cache,r),r}}peekRecordIdentifier(e){return this._getRecordIdentifier(e,0)}getOrCreateDocumentIdentifier(e){let t=e.cacheOptions?.key
if(t||(t=this._generate(e,"document")),!t)return null
let i=this._cache.documents.get(t)
return void 0===i&&(i={lid:t},R.add(i),this._cache.documents.set(t,i)),i}getOrCreateRecordIdentifier(e){return this._getRecordIdentifier(e,1)}createIdentifierForNewRecord(e){const t=this._generate(e,"record"),i=N({id:e.id||null,type:e.type,lid:t,[o]:this._id})
return L(this._cache,i),i}updateRecordIdentifier(e,t){let i=this.getOrCreateRecordIdentifier(e)
const r=this._keyInfoForResource(t,i)
let s=function(e,t,i,r){const s=t.id,{id:n,type:o,lid:a}=i,l=e.resourcesByType[i.type]
if(null!==n&&n!==s&&null!==s){const e=l&&l.id.get(s)
return void 0!==e&&e}{const i=t.type
if(null!==n&&n===s&&i===o&&b(r)&&r.lid!==a)return I(e,r.lid)||!1
if(null!==n&&n===s&&i&&i!==o&&b(r)&&r.lid===a){const t=e.resourcesByType[i],r=t&&t.id.get(s)
return void 0!==r&&r}}return!1}(this._cache,r,i,t)
const n=b(t)
if(s||i.type!==r.type&&(n&&delete t.lid,s=this.getOrCreateRecordIdentifier(t)),s){const e=i
i=this._mergeRecordIdentifiers(r,e,s,t),n&&(t.lid=i.lid)}const o=i.id;(function(e,t,i,r){r(e,i,"record"),void 0!==i.id&&(e.id=f(i.id))})(i,0,t,this._update)
const a=i.id
if(o!==a&&null!==a){const e=this._cache.resourcesByType[i.type]
e.id.set(a,i),null!==o&&e.id.delete(o)}return i}_mergeRecordIdentifiers(e,t,i,r){const s=this._merge(t,i,r),n=s===t?i:t,o=this._cache.polymorphicLidBackMap.get(n.lid)
o&&this._cache.polymorphicLidBackMap.delete(n.lid),this.forgetRecordIdentifier(n),this._cache.resources.set(n.lid,s)
const a=this._cache.polymorphicLidBackMap.get(s.lid)??[]
return a.push(n.lid),o&&o.forEach((e=>{a.push(e),this._cache.resources.set(e,s)})),this._cache.polymorphicLidBackMap.set(s.lid,a),s}forgetRecordIdentifier(e){const t=this.getOrCreateRecordIdentifier(e),i=this._cache.resourcesByType[t.type]
null!==t.id&&i.id.delete(t.id),this._cache.resources.delete(t.lid),i.lid.delete(t.lid)
const r=this._cache.polymorphicLidBackMap.get(t.lid)
r&&(r.forEach((e=>{this._cache.resources.delete(e)})),this._cache.polymorphicLidBackMap.delete(t.lid)),t[o]=void 0,w.delete(t),this._forget(t,"record")}destroy(){O.clear(),this._cache.documents.forEach((e=>{R.delete(e)})),this._reset()}}function N(e,t,i){return w.add(e),e}function I(e,t,i){return e.resources.get(t)||null}function L(e,t){e.resources.set(t.lid,t)
let i=e.resourcesByType[t.type]
i||(i={lid:new Map,id:new Map},e.resourcesByType[t.type]=i),i.lid.set(t.lid,t),t.id&&i.id.set(t.id,t)}class B{constructor(e,t){p(this,"___token",void 0),p(this,"___identifier",void 0),this.store=e,this.___identifier=t,this.___token=e.notifications.subscribe(t,((e,t,i)=>{("identity"===t||"attributes"===t&&"id"===i)&&this._ref++}))}destroy(){this.store.notifications.unsubscribe(this.___token)}get type(){return this.identifier().type}id(){return this._ref,this.___identifier.id}identifier(){return this.___identifier}remoteType(){return"identity"}push(e){return Promise.resolve(e).then((e=>this.store.push(e)))}value(){return this.store.peekRecord(this.___identifier)}load(){const e=this.id()
if(null!==e)return this.store.findRecord(this.type,e)}reload(){const e=this.id()
if(null!==e)return this.store.findRecord(this.type,e,{reload:!0})}}(0,l.sg)(B.prototype,"_ref")
class U{constructor(e){this._store=e,this._willNotify=!1,this._pendingNotifies=new Map}get identifierCache(){return this._store.identifierCache}_scheduleNotification(e,t){let i=this._pendingNotifies.get(e)
i||(i=new Set,this._pendingNotifies.set(e,i)),i.add(t),!0!==this._willNotify&&(this._willNotify=!0,this._store._cbs?this._store._schedule("notify",(()=>this._flushNotifications())):this._flushNotifications())}_flushNotifications(){if(!1===this._willNotify)return
const e=this._pendingNotifies
this._pendingNotifies=new Map,this._willNotify=!1,e.forEach(((e,t)=>{e.forEach((e=>{this._store.notifications.notify(t,"relationships",e)}))}))}notifyChange(e,t,i){"relationships"===t&&i?this._scheduleNotification(e,i):this._store.notifications.notify(e,t,i)}get schema(){return this._store.schema}setRecordId(e,t){this._store._instanceCache.setRecordId(e,t)}hasRecord(e){return Boolean(this._store._instanceCache.peek(e))}disconnectRecord(e){this._store._instanceCache.disconnect(e),this._pendingNotifies.delete(e)}}U.prototype.getSchemaDefinitionService=function(){return this._store.schema}
const H=(0,n.L1)("CacheForIdentifierCache",new Map)
function V(e,t){H.set(e,t)}function K(e){H.delete(e)}function W(e){return H.has(e)?H.get(e):null}const G=(0,n.L1)("RecordCache",new Map)
function J(e){return G.get(e)}function Q(e){return G.get(e)}function Y(e,t){G.set(e,t)}const X=(0,n.L1)("StoreMap",new Map)
function Z(e){return X.get(e)}class ee{constructor(e){p(this,"__instances",{record:new Map,reference:new WeakMap}),this.store=e,this._storeWrapper=new U(this.store),e.identifierCache.__configureMerge(((e,t,i)=>{let r=e
e.id!==t.id?r="id"in i&&e.id===i.id?e:t:e.type!==t.type&&(r="type"in i&&e.type===i.type?e:t)
const s=e===r?t:e,n=this.__instances.record.has(r),o=this.__instances.record.has(s)
if(n&&o&&"id"in i)throw new Error(`Failed to update the 'id' for the RecordIdentifier '${e.type}:${String(e.id)} (${e.lid})' to '${String(i.id)}', because that id is already in use by '${t.type}:${String(t.id)} (${t.lid})'`)
return this.store.cache.patch({op:"mergeIdentifiers",record:s,value:r}),this.unloadRecord(s),r}))}peek(e){return this.__instances.record.get(e)}getRecord(e,t){let i=this.__instances.record.get(e)
if(!i){const r=this.store.cache
V(e,r),i=this.store.instantiateRecord(e,t||{}),Y(i,e),V(i,r),X.set(i,this.store),this.__instances.record.set(e,i)}return i}getReference(e){const t=this.__instances.reference
let i=t.get(e)
return i||(i=new B(this.store,e),t.set(e,i)),i}recordIsLoaded(e,t=!1){const i=this.cache
if(!i)return!1
const r=i.isNew(e),s=i.isEmpty(e)
return r?!i.isDeleted(e):!(t&&i.isDeletionCommitted(e)||s)}disconnect(e){this.__instances.record.get(e),this.store._graph?.remove(e),this.store.identifierCache.forgetRecordIdentifier(e),K(e),this.store._requestCache._clearEntries(e)}unloadRecord(e){this.store._join((()=>{const t=this.__instances.record.get(e),i=this.cache
t&&(this.store.teardownRecord(t),this.__instances.record.delete(e),X.delete(t),G.delete(t),K(t)),i?(i.unloadRecord(e),K(e)):this.disconnect(e),this.store._requestCache._clearEntries(e)}))}clear(e){const t=this.store.identifierCache._cache
if(void 0===e)t.resources.forEach((e=>{this.unloadRecord(e)}))
else{const i=t.resourcesByType,r=i[e]?.lid
r&&r.forEach((e=>{this.unloadRecord(e)}))}}setRecordId(e,t){const{type:i,lid:s}=e,n=e.id
null===n||null!==t?(this.store.identifierCache.peekRecordIdentifier({type:i,id:t}),null===e.id&&this.store.identifierCache.updateRecordIdentifier(e,{type:i,id:t}),this.store.notifications.notify(e,"identity")):(0,r.warn)(`Your ${i} record was saved to the server, but the response does not have an id.`,!(null!==n&&null===t))}}function te(e,t){return"string"==typeof e||"number"==typeof e?{type:t,id:y(e)}:Q(e)}const ie=(0,n.L1)("AvailableShims",new WeakMap)
class re{constructor(e,t){this.__store=e,this.modelName=t}get fields(){const e=new Map
return this.__store.schema.fields({type:this.modelName}).forEach(((t,i)=>{"attribute"!==t.kind&&"belongsTo"!==t.kind&&"hasMany"!==t.kind||e.set(i,t.kind)})),e}get attributes(){const e=new Map
return this.__store.schema.fields({type:this.modelName}).forEach(((t,i)=>{"attribute"===t.kind&&e.set(i,t)})),e}get relationshipsByName(){const e=new Map
return this.__store.schema.fields({type:this.modelName}).forEach(((t,i)=>{"belongsTo"!==t.kind&&"hasMany"!==t.kind||e.set(i,t)})),e}eachAttribute(e,t){this.__store.schema.fields({type:this.modelName}).forEach(((i,r)=>{"attribute"===i.kind&&e.call(t,r,i)}))}eachRelationship(e,t){this.__store.schema.fields({type:this.modelName}).forEach(((i,r)=>{"belongsTo"!==i.kind&&"hasMany"!==i.kind||e.call(t,r,i)}))}eachTransformedAttribute(e,t){this.__store.schema.fields({type:this.modelName}).forEach(((i,r)=>{if("attribute"===i.kind){const s=i.type
s&&e.call(t,r,s)}}))}}const se=new Set(["added","removed","state","updated"])
function ne(e){return se.has(e)}function oe(){return!!c._backburner.currentInstance&&!0!==c._backburner._autorun}class ae{constructor(e){this.store=e,this.isDestroyed=!1,this._buffered=new Map,this._hasFlush=!1,this._cache=new Map,this._tokens=new Map}subscribe(e,t){let i=this._cache.get(e)
i||(i=new Map,this._cache.set(e,i))
const r={}
return i.set(r,t),this._tokens.set(r,e),r}unsubscribe(e){this.isDestroyed||function(e,t,i){const r=e.get(t)
if(r){e.delete(t)
const s=i.get(r)
s?.delete(t)}}(this._tokens,e,this._cache)}notify(e,t,i){if(!k(e)&&!A(e))return!1
const r=Boolean(this._cache.get(e)?.size)
if(ne(t)||r){let r=this._buffered.get(e)
r||(r=[],this._buffered.set(e,r)),r.push([t,i]),this._scheduleNotify()}return r}_onNextFlush(e){this._onFlushCB=e}_scheduleNotify(){const e=this.store._enableAsyncFlush
this._hasFlush&&!1!==e&&!oe()||(!e||oe()?this._flush():this._hasFlush=!0)}_flush(){this._buffered.size&&(this._buffered.forEach(((e,t)=>{e.forEach((e=>{this._flushNotification(t,e[0],e[1])}))})),this._buffered=new Map),this._hasFlush=!1,this._onFlushCB?.(),this._onFlushCB=void 0}_flushNotification(e,t,i){if(ne(t)){const i=this._cache.get(A(e)?"document":"resource")
i&&i.forEach((i=>{i(e,t)}))}const r=this._cache.get(e)
return!(!r||!r.size||(r.forEach((r=>{r(e,t,i)})),0))}destroy(){this.isDestroyed=!0,this._tokens.clear(),this._cache.clear()}}const le=Proxy
var ce=Object.defineProperty;((e,t)=>{for(var i in t)ce(e,i,{get:t[i],enumerable:!0})})({},{c:()=>me,f:()=>de,g:()=>he,i:()=>ye,m:()=>pe,n:()=>fe,p:()=>ge})
var ue=new WeakMap
function de(e,t,i,r){return he(e.prototype,t,i,r)}function he(e,t,i,r){let s={configurable:!0,enumerable:!0,writable:!0,initializer:null}
r&&(s.initializer=r)
for(let n of i)s=n(e,t,s)||s
void 0===s.initializer?Object.defineProperty(e,t,s):function(e,t,i){let r=ue.get(e)
r||(r=new Map,ue.set(e,r)),r.set(t,i)}(e,t,s)}function pe({prototype:e},t,i){return fe(e,t,i)}function fe(e,t,i){let r={...Object.getOwnPropertyDescriptor(e,t)}
for(let s of i)r=s(e,t,r)||r
void 0!==r.initializer&&(r.value=r.initializer?r.initializer.call(e):void 0,r.initializer=void 0),Object.defineProperty(e,t,r)}function ye(e,t){let i=function(e,t){let i=e.prototype
for(;i;){let e=ue.get(i)?.get(t)
if(e)return e
i=i.prototype}}(e.constructor,t)
i&&Object.defineProperty(e,t,{enumerable:i.enumerable,configurable:i.configurable,writable:i.writable,value:i.initializer?i.initializer.call(e):void 0})}function me(e,t){return t.reduce(((e,t)=>t(e)||e),e)}function ge(e,t){for(let[i,r,s]of t)"field"===i?_e(e,r,s):fe(e,r,s)
return e}function _e(e,t,i){let r={configurable:!0,enumerable:!0,writable:!0,initializer:()=>Object.getOwnPropertyDescriptor(e,t)?.value}
for(let s of i)r=s(e,t,r)||r
r.initializer&&(r.value=r.initializer.call(e),delete r.initializer),Object.defineProperty(e,t,r)}const be=new Set([Symbol.iterator,"concat","entries","every","fill","filter","find","findIndex","flat","flatMap","forEach","includes","indexOf","join","keys","lastIndexOf","map","reduce","reduceRight","slice","some","values"]),ve=new Set(["push","pop","unshift","shift","splice","sort"]),we=new Set(["[]","length","links","meta"])
function Re(e){return be.has(e)}function ke(e,t){return t in e}const Ae=(0,n.L1)("#signal",Symbol("#signal")),Se=(0,n.L1)("#source",Symbol("#source")),Ee=(0,n.L1)("#update",Symbol("#update")),Te=(0,n.L1)("#notify",Symbol("#notify")),Ce=(0,n.L1)("IS_COLLECTION",Symbol.for("Collection"))
function Me(e){(0,l.RH)(e[Ae])}function Fe(e){if("symbol"==typeof e)return null
const t=Number(e)
return isNaN(t)?null:t%1==0?t:null}class Oe{[Te](){Me(this)}destroy(e){this.isDestroying=!e,this[Se].length=0,this[Te](),this.isDestroyed=!e}get length(){return this[Se].length}set length(e){this[Se].length=e}constructor(e){p(this,"isLoaded",!0),p(this,"isDestroying",!1),p(this,"isDestroyed",!1),p(this,"_updatingPromise",null),p(this,Ce,!0),p(this,Se,void 0)
const t=this
this.modelName=e.type,this.store=e.store,this._manager=e.manager,this[Se]=e.identifiers,this[Ae]=(0,l.n5)(this,"length")
const i=e.store,r=new Map,s=this[Ae],n={links:e.links||null,meta:e.meta||null}
let o=!1
const a=new le(this[Se],{get(a,c,u){const d=Fe(c)
if(s.shouldReset&&(null!==d||we.has(c)||Re(c))&&(e.manager._syncArray(u),s.t=!1,s.shouldReset=!1),null!==d){const e=a[d]
return o||(0,l.B1)(s),e&&i._instanceCache.getRecord(e)}if("meta"===c)return(0,l.B1)(s),n.meta
if("links"===c)return(0,l.B1)(s),n.links
if("[]"===c)return(0,l.B1)(s),u
if(Re(c)){let e=r.get(c)
return void 0===e&&(e="forEach"===c?function(){(0,l.B1)(s),o=!0
const e=function(e,t,i,r,s){void 0===s&&(s=null)
const n=(t=t.slice()).length
for(let o=0;o<n;o++)r.call(s,i._instanceCache.getRecord(t[o]),o,e)
return e}(u,a,i,arguments[0],arguments[1])
return o=!1,e}:function(){(0,l.B1)(s),o=!0
const e=Reflect.apply(a[c],u,arguments)
return o=!1,e},r.set(c,e)),e}if(function(e){return ve.has(e)}(c)){let i=r.get(c)
return void 0===i&&(i=function(){if(!e.allowMutation)return
const i=Array.prototype.slice.call(arguments)
o=!0
const r=t[Ee](a,u,c,i,s)
return o=!1,r},r.set(c,i)),i}if(ke(t,c)){if(c===Te||c===Ae||c===Se)return t[c]
let e=r.get(c)
if(e)return e
const i=t[c]
return"function"==typeof i?(e=function(){return(0,l.B1)(s),Reflect.apply(i,u,arguments)},r.set(c,e),e):((0,l.B1)(s),i)}return a[c]},set(i,r,a,l){if("length"===r){if(!o&&0===a)return o=!0,t[Ee](i,l,"length 0",[],s),o=!1,!0
if(o)return Reflect.set(i,r,a)}if("links"===r)return n.links=a||null,!0
if("meta"===r)return n.meta=a||null,!0
const c=Fe(r)
if(null===c||c>i.length){if(null!==c&&o){const e=Q(a)
return i[c]=e,!0}return!!ke(t,r)&&(t[r]=a,!0)}if(!e.allowMutation)return!1
const u=i[c],d=(h=a)?Q(h):null
var h
return i[c]=d,o?i[c]=d:t[Ee](i,l,"replace cell",[c,u,d],s),!0},deleteProperty:(e,t)=>!!o&&Reflect.deleteProperty(e,t),getPrototypeOf:()=>Oe.prototype})
return(0,l.zs)(a,s),this[Te]=this[Te].bind(a),a}update(){if(this.isUpdating)return this._updatingPromise
this.isUpdating=!0
const e=this._update()
return e.finally((()=>{this._updatingPromise=null,this.isDestroying||this.isDestroyed||(this.isUpdating=!1)})),this._updatingPromise=e,e}_update(){return this.store.findAll(this.modelName,{reload:!0})}save(){return Promise.all(this.map((e=>this.store.saveRecord(e)))).then((()=>this))}}fe(Oe.prototype,"length",[u.Vv])
const je={enumerable:!0,configurable:!1,get:function(){return this}};(0,u.Vv)(je),Object.defineProperty(Oe.prototype,"[]",je),(0,l.sg)(Oe.prototype,"isUpdating",!1)
class ze extends Oe{constructor(e){super(e),p(this,"query",null),this.query=e.query||null,this.isLoaded=e.isLoaded||!1}_update(){const{store:e,query:t}=this
return e.query(this.modelName,t,{_recordArray:this})}destroy(e){super.destroy(e),this._manager._managed.delete(this),this._manager._pending.delete(this)}}ze.prototype.query=null
const Pe=(0,n.L1)("FAKE_ARR",{}),De=1200
function $e(e,t){let i=0
const r=t.length
for(;r-i>De;)e.push.apply(e,t.slice(i,i+De)),i+=De
e.push.apply(e,t.slice(i))}class qe{constructor(e){this.store=e.store,this.isDestroying=!1,this.isDestroyed=!1,this._live=new Map,this._managed=new Set,this._pending=new Map,this._staged=new Map,this._keyedArrays=new Map,this._identifiers=new Map,this._set=new Map,this._visibilitySet=new Map,this._subscription=this.store.notifications.subscribe("resource",((e,t)=>{"added"===t?(this._visibilitySet.set(e,!0),this.identifierAdded(e)):"removed"===t?(this._visibilitySet.set(e,!1),this.identifierRemoved(e)):"state"===t&&this.identifierChanged(e)}))}_syncArray(e){const t=this._pending.get(e)
!t||this.isDestroying||this.isDestroyed||(function(e,t,i){const r=e[Se],s=[],n=[]
t.forEach(((e,t)=>{if("add"===e){if(i.has(t))return
s.push(t),i.add(t)}else i.has(t)&&(n.push(t),i.delete(t))})),n.length&&(n.length===r.length?r.length=0:n.forEach((e=>{const t=r.indexOf(e);-1!==t&&(r.splice(t,1),i.delete(e))}))),s.length&&$e(r,s)}(e,t,this._set.get(e)),this._pending.delete(e))}liveArrayFor(e){let t=this._live.get(e)
const i=[],r=this._staged.get(e)
return r&&(r.forEach(((e,t)=>{"add"===e&&i.push(t)})),this._staged.delete(e)),t||(t=new Oe({type:e,identifiers:i,store:this.store,allowMutation:!1,manager:this}),this._live.set(e,t),this._set.set(t,new Set(i))),t}createArray(e){const t={type:e.type,links:e.doc?.links||null,meta:e.doc?.meta||null,query:e.query||null,identifiers:e.identifiers||[],isLoaded:!!e.identifiers?.length,allowMutation:!1,store:this.store,manager:this},i=new ze(t)
return this._managed.add(i),this._set.set(i,new Set(t.identifiers||[])),e.identifiers&&xe(this._identifiers,i,e.identifiers),i}dirtyArray(e,t){if(e===Pe)return
const i=e[Ae]
i.shouldReset?t>0&&!i.t&&(0,l.Fe)(e[Te]):(i.shouldReset=!0,(0,l.Fe)(e[Te]))}_getPendingFor(e,t,i){if(this.isDestroying||this.isDestroyed)return
const r=this._live.get(e.type),s=this._pending,n=new Map
if(t){const t=this._identifiers.get(e)
t&&t.forEach((e=>{let t=s.get(e)
t||(t=new Map,s.set(e,t)),n.set(e,t)}))}if(r&&0===r[Se].length&&i){const e=s.get(r)
if(!e||0===e.size)return n}if(r){let e=s.get(r)
e||(e=new Map,s.set(r,e)),n.set(r,e)}else{let t=this._staged.get(e.type)
t||(t=new Map,this._staged.set(e.type,t)),n.set(Pe,t)}return n}populateManagedArray(e,t,i){this._pending.delete(e)
const r=e[Se],s=r.slice()
r.length=0,$e(r,t),this._set.set(e,new Set(t)),Me(e),e.meta=i.meta||null,e.links=i.links||null,e.isLoaded=!0,function(e,t,i){for(let r=0;r<i.length;r++)Ne(e,t,i[r])}(this._identifiers,e,s),xe(this._identifiers,e,t)}identifierAdded(e){const t=this._getPendingFor(e,!1)
t&&t.forEach(((t,i)=>{"del"===t.get(e)?t.delete(e):(t.set(e,"add"),this.dirtyArray(i,t.size))}))}identifierRemoved(e){const t=this._getPendingFor(e,!0,!0)
t&&t.forEach(((t,i)=>{"add"===t.get(e)?t.delete(e):(t.set(e,"del"),this.dirtyArray(i,t.size))}))}identifierChanged(e){const t=this.store._instanceCache.recordIsLoaded(e,!0)
this._visibilitySet.get(e)!==t&&(t?this.identifierAdded(e):this.identifierRemoved(e))}clear(e=!0){this._live.forEach((t=>t.destroy(e))),this._managed.forEach((t=>t.destroy(e))),this._managed.clear(),this._identifiers.clear(),this._pending.clear(),this._set.forEach((e=>e.clear())),this._visibilitySet.clear()}destroy(){this.isDestroying=!0,this.clear(!1),this._live.clear(),this.isDestroyed=!0,this.store.notifications.unsubscribe(this._subscription)}}function xe(e,t,i){for(let r=0;r<i.length;r++){const s=i[r]
let n=e.get(s)
n||(n=new Set,e.set(s,n)),n.add(t)}}function Ne(e,t,i){const r=e.get(i)
r&&r.delete(t)}const Ie=(0,n.L1)("Touching",Symbol("touching")),Le=(0,n.L1)("RequestPromise",Symbol("promise")),Be=[]
class Ue{constructor(e){p(this,"_pending",new Map),p(this,"_done",new Map),p(this,"_subscriptions",new Map),p(this,"_toFlush",[]),p(this,"_store",void 0),this._store=e}_clearEntries(e){this._done.delete(e)}_enqueue(e,t){const i=t.data[0]
if("recordIdentifier"in i){const r=i.recordIdentifier,s="saveRecord"===i.op?"mutation":"query"
this._pending.has(r)||this._pending.set(r,[])
const n={state:"pending",request:t,type:s}
return n[Ie]=[i.recordIdentifier],n[Le]=e,this._pending.get(r).push(n),this._triggerSubscriptions(n),e.then((e=>{this._dequeue(r,n)
const i={state:"fulfilled",request:t,type:s,response:{data:e}}
return i[Ie]=n[Ie],this._addDone(i),this._triggerSubscriptions(i),e}),(e=>{this._dequeue(r,n)
const i={state:"rejected",request:t,type:s,response:{data:e}}
throw i[Ie]=n[Ie],this._addDone(i),this._triggerSubscriptions(i),e}))}}_triggerSubscriptions(e){"pending"!==e.state?(this._toFlush.push(e),1===this._toFlush.length&&this._store.notifications._onNextFlush((()=>{this._flush()}))):this._flushRequest(e)}_flush(){this._toFlush.forEach((e=>{this._flushRequest(e)})),this._toFlush=[]}_flushRequest(e){e[Ie].forEach((t=>{const i=this._subscriptions.get(t)
i&&i.forEach((t=>t(e)))}))}_dequeue(e,t){const i=this._pending.get(e)
this._pending.set(e,i.filter((e=>e!==t)))}_addDone(e){e[Ie].forEach((t=>{const i=e.request.data[0].op
let r=this._done.get(t)
r&&(r=r.filter((e=>{let t
return t=Array.isArray(e.request.data)?e.request.data[0]:e.request.data,t.op!==i}))),r=r||[],r.push(e),this._done.set(t,r)}))}subscribeForRecord(e,t){let i=this._subscriptions.get(e)
i||(i=[],this._subscriptions.set(e,i)),i.push(t)}getPendingRequestsForRecord(e){return this._pending.get(e)||Be}getLastRequestForRecord(e){const t=this._done.get(e)
return t?t[t.length-1]:null}}function He(e){return Boolean(e&&"string"==typeof e)}function Ve(e,t,i){if("object"==typeof e&&null!==e){const t=e
return k(t)||"id"in t&&(t.id=f(t.id)),t}{const r=f(t)
if(!He(r)){if(He(i))return{lid:i}
throw new Error("Expected either id or lid to be a valid string")}return He(i)?{type:e,id:r,lid:i}:{type:e,id:r}}}const Ke=class{constructor(e){}},We=Ke
We!==Ke&&(0,r.deprecate)("The Store class extending from EmberObject is deprecated.\nPlease remove usage of EmberObject APIs and mark your class as not requiring it.\n\nTo mark the class as no longer extending from EmberObject, in ember-cli-build.js\nset the following config:\n\n```js\nconst app = new EmberApp(defaults, {\n  emberData: {\n    deprecations: {\n      DEPRECATE_STORE_EXTENDS_EMBER_OBJECT: false\n    }\n  }\n});\n```\n",!1,{id:"ember-data:deprecate-store-extends-ember-object",until:"6.0",for:"ember-data",since:{available:"5.4",enabled:"5.4"}})
class Ge extends We{get schema(){return this._schema||(this._schema=this.createSchemaService()),this._schema}get isDestroying(){return this._isDestroying}set isDestroying(e){this._isDestroying=e}get isDestroyed(){return this._isDestroyed}set isDestroyed(e){this._isDestroyed=e}constructor(e){super(e),Object.assign(this,e),this.identifierCache=new x,this.notifications=new ae(this),this.recordArrayManager=new qe({store:this}),this._requestCache=new Ue(this),this._instanceCache=new ee(this),this._documentCache=new Map,this.isDestroying=!1,this.isDestroyed=!1}_run(e){const t=this._cbs={}
e(),t.coalesce&&t.coalesce(),t.sync&&t.sync(),t.notify&&t.notify(),this._cbs=null}_join(e){this._cbs?e():this._run(e)}_schedule(e,t){this._cbs[e]=t}getRequestStateService(){return this._requestCache}_getAllPending(){}request(e){const t={store:this,[s._q]:!0}
if(e.records){const i=this.identifierCache
t.records=e.records.map((e=>i.getOrCreateRecordIdentifier(e)))}const i=Object.assign({},e,t),r=this.requestManager.request(i)
return r.onFinalize((()=>{("findBelongsTo"!==e.op||e.url)&&this.notifications._flush()})),r}modelFor(e){return function(e,t){let i=ie.get(e)
i||(i=Object.create(null),ie.set(e,i))
let r=i[t]
return void 0===r&&(r=i[t]=new re(e,t)),r}(this,e)}createRecord(e,t){let i
return this._join((()=>{const r=m(e),s={...t}
let n=null
if(null===s.id||void 0===s.id){const e=this.adapterFor?.(r,!0)
n=e&&e.generateIdForRecord?s.id=f(e.generateIdForRecord(this,r,s)):s.id=null}else n=s.id=f(s.id)
const o={type:r,id:n}
o.id&&this.identifierCache.peekRecordIdentifier(o)
const a=this.identifierCache.createIdentifierForNewRecord(o),l=this.cache,c=function(e,t,i){if(void 0!==i){const{type:r}=t,s=e.schema.fields({type:r})
if(s.size){const e=Object.keys(i)
for(let t=0;t<e.length;t++){const r=e[t],n=s.get(r)
n&&("hasMany"===n.kind?i[r]=i[r].map((e=>Qe(e))):"belongsTo"===n.kind&&(i[r]=Qe(i[r])))}}}return i}(this,a,s),u=l.clientDidCreate(a,c)
i=this._instanceCache.getRecord(a,u)})),i}deleteRecord(e){const t=J(e),i=this.cache
this._join((()=>{i.setIsDeleted(t,!0),i.isNew(t)&&this._instanceCache.unloadRecord(t)}))}unloadRecord(e){const t=J(e)
t&&this._instanceCache.unloadRecord(t)}findRecord(e,t,i){Je(e)?i=t:e=Ve(m(e),y(t))
const r=this.identifierCache.getOrCreateRecordIdentifier(e)
return(i=i||{}).preload&&(this._instanceCache.recordIsLoaded(r)||(i.reload=!0),this._join((()=>{!function(e,t,i){const r={},s=e.schema.fields(t)
Object.keys(i).forEach((e=>{const t=i[e],n=s.get(e)
!n||"hasMany"!==n.kind&&"belongsTo"!==n.kind?(r.attributes||(r.attributes={}),r.attributes[e]=t):(r.relationships||(r.relationships={}),r.relationships[e]=function(e,t){const i=e.type
return"hasMany"===e.kind?{data:t.map((e=>te(e,i)))}:{data:t?te(t,i):null}}(n,t))}))
const n=e.cache,o=Boolean(e._instanceCache.peek(t))
n.upsert(t,r,o)}(this,r,i.preload)}))),this.request({op:"findRecord",data:{record:r,options:i},cacheOptions:{[s.ER]:!0}}).then((e=>e.content))}getReference(e,t){let i
i=1===arguments.length&&Je(e)?e:Ve(m(e),y(t))
const r=this.identifierCache.getOrCreateRecordIdentifier(i)
return this._instanceCache.getReference(r)}peekRecord(e,t){if(1===arguments.length&&Je(e)){const t=this.identifierCache.peekRecordIdentifier(e)
return t&&this._instanceCache.recordIsLoaded(t)?this._instanceCache.getRecord(t):null}const i={type:m(e),id:y(t)},r=this.identifierCache.peekRecordIdentifier(i)
return r&&this._instanceCache.recordIsLoaded(r)?this._instanceCache.getRecord(r):null}query(e,t,i={}){return this.request({op:"query",data:{type:m(e),query:t,options:i},cacheOptions:{[s.ER]:!0}}).then((e=>e.content))}queryRecord(e,t,i){return this.request({op:"queryRecord",data:{type:m(e),query:t,options:i||{}},cacheOptions:{[s.ER]:!0}}).then((e=>e.content))}findAll(e,t={}){return this.request({op:"findAll",data:{type:m(e),options:t||{}},cacheOptions:{[s.ER]:!0}}).then((e=>e.content))}peekAll(e){return this.recordArrayManager.liveArrayFor(m(e))}unloadAll(e){this._join((()=>{void 0===e?(this._graph?.identifiers.clear(),this.recordArrayManager.clear(),this._instanceCache.clear()):this._instanceCache.clear(m(e))}))}push(e){const t=this._push(e,!1)
return Array.isArray(t)?t.map((e=>this._instanceCache.getRecord(e))):null===t?null:this._instanceCache.getRecord(t)}_push(e,t){let i
return t&&(this._enableAsyncFlush=!0),this._join((()=>{i=this.cache.put({content:e})})),this._enableAsyncFlush=null,"data"in i?i.data:null}saveRecord(e,t={}){const i=Q(e),r=this.cache
if(!i)return Promise.reject(new Error("Record Is Disconnected"))
if(function(e,t){const i=e.cache
return!i||function(e,t){return t.isDeletionCommitted(e)||t.isNew(e)&&t.isDeleted(e)}(t,i)}(this._instanceCache,i))return Promise.resolve(e)
t||(t={})
let n="updateRecord"
r.isNew(i)?n="createRecord":r.isDeleted(i)&&(n="deleteRecord")
const o={op:n,data:{options:t,record:i},records:[i],cacheOptions:{[s.ER]:!0}}
return this.request(o).then((e=>e.content))}get cache(){let{cache:e}=this._instanceCache
return e||(e=this._instanceCache.cache=this.createCache(this._instanceCache._storeWrapper)),e}destroy(){this.isDestroyed||(this.isDestroying=!0,this._graph?.destroy(),this._graph=void 0,this.notifications.destroy(),this.recordArrayManager.destroy(),this.identifierCache.destroy(),this.unloadAll(),this.isDestroyed=!0)}static create(e){return new this(e)}}function Je(e){return Boolean(null!==e&&"object"==typeof e&&("id"in e&&"type"in e&&e.id&&e.type||e.lid))}function Qe(e){return e?Q(e):null}function Ye(e){return"string"==typeof e?e:e.href}Ge.prototype.getSchemaDefinitionService=function(){return(0,r.deprecate)("Use `store.schema` instead of `store.getSchemaDefinitionService()`",!1,{id:"ember-data:schema-service-updates",until:"5.0",for:"ember-data",since:{available:"5.4",enabled:"5.4"}}),this._schema},Ge.prototype.registerSchemaDefinitionService=function(e){(0,r.deprecate)("Use `store.createSchemaService` instead of `store.registerSchemaDefinitionService()`",!1,{id:"ember-data:schema-service-updates",until:"5.0",for:"ember-data",since:{available:"5.4",enabled:"5.4"}}),this._schema=e},Ge.prototype.registerSchema=function(e){(0,r.deprecate)("Use `store.createSchemaService` instead of `store.registerSchema()`",!1,{id:"ember-data:schema-service-updates",until:"5.0",for:"ember-data",since:{available:"5.4",enabled:"5.4"}}),this._schema=e}
var Xe=new WeakMap,Ze=new WeakSet
class et{constructor(e,t){var i
d(this,i=Ze),i.add(this),function(e,t){d(e,t),t.set(e,void 0)}(this,Xe),function(e,t,i){e.set(h(e,t),i)}(Xe,this,e),this.identifier=t}fetch(e={}){return e.cacheOptions=e.cacheOptions||{},e.cacheOptions.key=this.identifier?.lid,h(Ze,this,tt).call(this,this.links.related?"related":"self",e)}next(e={}){return h(Ze,this,tt).call(this,"next",e)}prev(e={}){return h(Ze,this,tt).call(this,"prev",e)}first(e={}){return h(Ze,this,tt).call(this,"first",e)}last(e={}){return h(Ze,this,tt).call(this,"last",e)}toJSON(){const e={}
return e.identifier=this.identifier,void 0!==this.data&&(e.data=this.data),void 0!==this.links&&(e.links=this.links),void 0!==this.errors&&(e.errors=this.errors),void 0!==this.meta&&(e.meta=this.meta),e}}async function tt(e,t){const i=this.links?.[e]
return i?(t.method=t.method||"GET",Object.assign(t,{url:Ye(i)}),(await(r=Xe,r.get(h(r,this))).request(t)).content):null
var r}(0,l.sg)(et.prototype,"data"),(0,l.sg)(et.prototype,"links"),(0,l.sg)(et.prototype,"errors"),(0,l.sg)(et.prototype,"meta")
const it=new Set(["createRecord","updateRecord","deleteRecord"])
function rt(e,t,i,r,s){const{identifier:n}=i
if(!r)return r
if(function(e){return"errors"in e}(r)){if(!n&&!i.shouldHydrate)return r
let t
return n&&(t=e._documentCache.get(n)),t?s||(t.data=void 0,lt(t,r)):(t=new et(e,n),lt(t,r),n&&e._documentCache.set(n,t)),i.shouldHydrate?t:r}if(Array.isArray(r.data)){const{recordArrayManager:o}=e
if(!n){if(!i.shouldHydrate)return r
const s=o.createArray({type:t.url,identifiers:r.data,doc:r,query:t}),n=new et(e,null)
return n.data=s,n.meta=r.meta,n.links=r.links,n}let a=o._keyedArrays.get(n.lid)
if(a){const t=e._documentCache.get(n)
return s||(o.populateManagedArray(a,r.data,r),t.data=a,t.meta=r.meta,t.links=r.links),i.shouldHydrate?t:r}{a=o.createArray({type:n.lid,identifiers:r.data,doc:r}),o._keyedArrays.set(n.lid,a)
const t=new et(e,n)
return t.data=a,t.meta=r.meta,t.links=r.links,e._documentCache.set(n,t),i.shouldHydrate?t:r}}{if(!n&&!i.shouldHydrate)return r
const t=r.data?e.peekRecord(r.data):null
let o
return n&&(o=e._documentCache.get(n)),o?s||(o.data=t,lt(o,r)):(o=new et(e,n),o.data=t,lt(o,r),n&&e._documentCache.set(n,o)),i.shouldHydrate?o:r}}function st(e){return Boolean(e.op&&it.has(e.op))}function nt(e,t,i,r,n){const{store:o}=t.request,a=t.request[s._q]||!1
let l=!1
if(st(t.request)){l=!0
const e=t.request.data?.record||t.request.records?.[0]
e&&o.cache.willCommit(e,t)}o.lifetimes?.willRequest&&o.lifetimes.willRequest(t.request,i,o)
const c=e(t.request).then((e=>{let s
if(o.requestManager._pending.delete(t.id),o._enableAsyncFlush=!0,o._join((()=>{if(st(t.request)){const i=t.request.data?.record||t.request.records?.[0]
i?s=o.cache.didCommit(i,e):function(e){return!st(e.request)||("createRecord"===e.request.op&&201===e.response?.status?!!e.content&&Object.keys(e.content).length>0:204!==e.response?.status)}(e)&&(s=o.cache.put(e))}else s=o.cache.put(e)
s=rt(o,t.request,{shouldHydrate:a,shouldFetch:r,shouldBackgroundFetch:n,identifier:i},s,!1)})),o._enableAsyncFlush=null,o.lifetimes?.didRequest&&o.lifetimes.didRequest(t.request,e.response,i,o),r)return s
n&&o.notifications._flush()}),(e=>{if(o.requestManager._pending.delete(t.id),t.request.signal?.aborted)throw e
let s
if(o.requestManager._pending.delete(t.id),o._enableAsyncFlush=!0,o._join((()=>{if(st(t.request)){const i=e&&e.content&&"object"==typeof e.content&&"errors"in e.content&&Array.isArray(e.content.errors)?e.content.errors:void 0,r=t.request.data?.record||t.request.records?.[0]
throw o.cache.commitWasRejected(r,i),e}s=o.cache.put(e),s=rt(o,t.request,{shouldHydrate:a,shouldFetch:r,shouldBackgroundFetch:n,identifier:i},s,!1)})),o._enableAsyncFlush=null,i&&o.lifetimes?.didRequest&&o.lifetimes.didRequest(t.request,e.response,i,o),!n){const t=ot(e)
throw t.content=s,t}o.notifications._flush()}))
if(!l)return c
const u=t.request.data?.record||t.request.records?.[0]
return o._requestCache._enqueue(c,{data:[{op:"saveRecord",recordIdentifier:u,options:void 0}]})}function ot(e){const t=function(e){return e instanceof AggregateError||"AggregateError"===e.name&&Array.isArray(e.errors)}(e),i=t?new AggregateError(structuredClone(e.errors),e.message):new Error(e.message)
return i.stack=e.stack,i.error=e.error,Object.assign(i,e),i}const at={request(e,t){if(!e.request.store||e.request.cacheOptions?.[s.ER])return t(e.request)
const{store:i}=e.request,r=i.identifierCache.getOrCreateDocumentIdentifier(e.request),n=r?i.cache.peekRequest(r):null
if(function(e,t,i,r){const{cacheOptions:s}=t
return t.op&&it.has(t.op)||s?.reload||!i||!(!e.lifetimes||!r)&&e.lifetimes.isHardExpired(r,e)}(i,e.request,!!n,r))return nt(t,e,r,!0,!1)
if(function(e,t,i,r){const{cacheOptions:s}=t
return s?.backgroundReload||!(!e.lifetimes||!r)&&e.lifetimes.isSoftExpired(r,e)}(i,e.request,0,r)){const s=nt(t,e,r,!1,!0)
i.requestManager._pending.set(e.id,s)}const o=e.request[s._q]||!1
if(e.setResponse(n.response),"error"in n){const t=o?rt(i,e.request,{shouldHydrate:o,identifier:r},n.content,!0):n.content,s=ot(n)
throw s.content=t,s}return o?rt(i,e.request,{shouldHydrate:o,identifier:r},n.content,!0):n.content}}
function lt(e,t){"links"in t&&(e.links=t.links),"meta"in t&&(e.meta=t.meta),"errors"in t&&(e.errors=t.errors)}},4635:(e,t,i)=>{i.r(t),i.d(t,{CacheHandler:()=>r.C,default:()=>r.S,recordIdentifierFor:()=>r.r,setIdentifierForgetMethod:()=>r.c,setIdentifierGenerationMethod:()=>r.a,setIdentifierResetMethod:()=>r.d,setIdentifierUpdateMethod:()=>r.b,setKeyInfoForResource:()=>r.e,storeFor:()=>r.s})
var r=i(9545)
i(1603),i(1198)},3791:(e,t,i)=>{i.d(t,{B1:()=>l,Fe:()=>u,RH:()=>c,V1:()=>y,i$:()=>m,n5:()=>f,sg:()=>h,zs:()=>p})
var r=i(4463),s=i(5606),n=i(5225)
function o(e){e&&(0,s.consumeTag)(e)}function a(e){e&&(0,s.dirtyTag)(e)}function l(e){const t=(0,n.Yj)("TRANSACTION")
t?t.sub.add(e):"tag"in e?(o(e["[]"]),o(e["@length"]),(0,s.consumeTag)(e.tag)):e.ref}function c(e){const t=(0,n.Yj)("TRANSACTION")
t?t.props.add(e):function(e){"tag"in e?(a(e["[]"]),a(e["@length"]),(0,s.dirtyTag)(e.tag)):e.ref=null}(e)}function u(e){const t=(0,n.Yj)("TRANSACTION")
t?t.cbs.add(e):e()}const d=(0,n.L1)("Signals",Symbol("Signals"))
function h(e,t,i){Object.defineProperty(e,t,{enumerable:!0,configurable:!1,get(){const e=this[d]=this[d]||new Map,r=e.has(t),s=function(e,t,i){let r=e.get(i)
return r||(r=f(t,i),e.set(i,r)),l(r),r}(e,this,t)
return r||void 0===i||(s.lastValue=i),s.lastValue},set(e){const i=this[d]=this[d]||new Map
let r=i.get(t)
r||(r=f(this,t),i.set(t,r)),r.lastValue!==e&&(r.lastValue=e,c(r))}})}function p(e,t){t["[]"]=(0,r.tagForProperty)(e,"[]"),t["@length"]=(0,r.tagForProperty)(e,"length")}function f(e,t){return{key:t,tag:(0,r.tagForProperty)(e,t),t:!1,shouldReset:!1,"[]":null,"@length":null,lastValue:void 0}}function y(e,t,i){let r=e[d]
r||(r=new Map,e[d]=r)
let s=r.get(t)
return s||(s=f(e,t),s.shouldReset=i,r.set(t,s)),s}function m(e,t){const i=e[d]
if(i)return i.get(t)}},3573:(e,t,i)=>{i.d(t,{PO:()=>n,Vv:()=>s.dependentKeyCompat})
var r=i(4217),s=(i(3791),i(394))
function n(e,t,i){const s=new WeakMap,n=i.get
i.get=function(){return s.has(this)||s.set(this,(0,r.createCache)(n.bind(this))),(0,r.getValue)(s.get(this))}}},8022:(e,t,i)=>{function r(e){return e?.__esModule?e:{default:e,...e}}i.d(t,{A:()=>r})},5225:(e,t,i)=>{i.d(t,{L1:()=>l,Yj:()=>c,dN:()=>h,dV:()=>u,ml:()=>p,vs:()=>d})
const r="@warp-drive/core-types",s=globalThis,n=s.__warpDrive_universalCache=s.__warpDrive_universalCache??{}
s[r]=s[r]??{__version:"0.0.0-beta.11"}
const o=s[r],a=o.__warpDrive_ModuleScopedCaches??{}
if(o.__warpDrive_hasOtherCopy)throw new Error("Multiple copies of EmberData detected, the application will malfunction.")
function l(e,t){return t}function c(e){return a[`(transient) ${e}`]??null}function u(e,t){return a[`(transient) ${e}`]=t}function d(e,t){return t}function h(e){return n[`(transient) ${e}`]??null}function p(e,t){return n[`(transient) ${e}`]=t}o.__warpDrive_hasOtherCopy=!0},942:(e,t,i)=>{i.d(t,{ER:()=>s,J6:()=>o,_q:()=>n,k0:()=>a})
var r=i(5225)
const s=(0,r.vs)("SkipCache",Symbol.for("wd:skip-cache")),n=(0,r.vs)("EnableHydration",Symbol.for("wd:enable-hydration")),o=(0,r.L1)("IS_FUTURE",Symbol("IS_FUTURE")),a=(0,r.L1)("DOC",Symbol("DOC"))},7082:(e,t,i)=>{i.d(t,{k5:()=>n,pm:()=>s})
var r=i(5225)
const s=(0,r.L1)("Store",Symbol("Store")),n=(0,r.L1)("$type",Symbol("$type"));(0,r.L1)("RequestSignature",Symbol("RequestSignature"))},1660:(e,t,i)=>{i.r(t),i.d(t,{default:()=>d})
var r=i(9553),s=i(4471),n=i(1603),o=i(2294),a=i(2735),l=i.n(a)
const{keys:c}=Object,u={raw:!1}
class d extends(l()){constructor(){if(super(...arguments),this._document=this._document||window.document,void 0===this._fastBoot){let e=(0,o.getOwner)(this)
this._fastBoot=e.lookup("service:fastboot")}}_getDocumentCookies(){let e=this._document.cookie.split(";")
return this._filterDocumentCookies(e).reduce(((e,t)=>{if(!(0,r.isEmpty)(t)){let[i,r]=t
e[i.trim()]=(r||"").trim()}return e}),{})}_getFastBootCookies(){let e=this._fastBoot.request.cookies
e=c(e).reduce(((t,i)=>{let r=e[i]
return t[i]={value:r},t}),{})
let t=this._fastBootCookiesCache||{}
return e=Object.assign({},e,t),this._fastBootCookiesCache=e,this._filterCachedFastBootCookies(e)}read(e,t={}){let i
return t=Object.assign({},u,t||{}),(0,n.assert)("Domain, Expires, Max-Age, and Path options cannot be set when reading cookies",(0,r.isEmpty)(t.domain)&&(0,r.isEmpty)(t.expires)&&(0,r.isEmpty)(t.maxAge)&&(0,r.isEmpty)(t.path)),i=this._isFastBoot()?this._getFastBootCookies():this._getDocumentCookies(),e?this._decodeValue(i[e],t.raw):(c(i).forEach((e=>i[e]=this._decodeValue(i[e],t.raw))),i)}write(e,t,i={}){i=Object.assign({},u,i||{}),(0,n.assert)("Cookies cannot be set as signed as signed cookies would not be modifyable in the browser as it has no knowledge of the express server's signing key!",!i.signed),(0,n.assert)("Cookies cannot be set with both maxAge and an explicit expiration time!",(0,r.isEmpty)(i.expires)||(0,r.isEmpty)(i.maxAge)),t=this._encodeValue(t,i.raw),(0,n.assert)("Cookies larger than 4096 bytes are not supported by most browsers!",this._isCookieSizeAcceptable(t)),this._isFastBoot()?this._writeFastBootCookie(e,t,i):((0,n.assert)("Cookies cannot be set to be HTTP-only from a browser!",!i.httpOnly),i.path=i.path||this._normalizedDefaultPath(),this._writeDocumentCookie(e,t,i))}clear(e,t={}){t=Object.assign({},t||{}),(0,n.assert)("Expires, Max-Age, and raw options cannot be set when clearing cookies",(0,r.isEmpty)(t.expires)&&(0,r.isEmpty)(t.maxAge)&&(0,r.isEmpty)(t.raw)),t.expires=new Date("1970-01-01"),t.path=t.path||this._normalizedDefaultPath(),this.write(e,null,t)}exists(e){let t
return t=this._isFastBoot()?this._getFastBootCookies():this._getDocumentCookies(),Object.prototype.hasOwnProperty.call(t,e)}_writeDocumentCookie(e,t,i={}){let r=this._serializeCookie(e,t,i)
this._document.cookie=r}_writeFastBootCookie(e,t,i={}){let s=this._fastBoot.response.headers,n=this._serializeCookie(...arguments);(0,r.isEmpty)(i.maxAge)||(i.maxAge*=1e3),this._cacheFastBootCookie(...arguments)
let o=!1,a=s.getAll("set-cookie")
for(let r=0;r<a.length;r++)if(a[r].startsWith(`${e}=`)){a[r]=n,o=!0
break}o||s.append("set-cookie",n)}_cacheFastBootCookie(e,t,i={}){let r=this._fastBootCookiesCache||{},s=Object.assign({},i)
if(s.maxAge){let e=new Date
e.setSeconds(e.getSeconds()+i.maxAge),s.expires=e,delete s.maxAge}r[e]={value:t,options:s},this._fastBootCookiesCache=r}_filterCachedFastBootCookies(e){let{path:t}=this._fastBoot.request,i=(0,s.get)(this._fastBoot,"request.host")
return c(e).reduce(((r,s)=>{let{value:n,options:o}=e[s]
o=o||{}
let{path:a,domain:l,expires:c}=o
return a&&0!==t.indexOf(a)||l&&i.indexOf(l)+l.length!==i.length||c&&c<new Date||(r[s]=n),r}),{})}_encodeValue(e,t){return(0,r.isNone)(e)?"":t?e:encodeURIComponent(e)}_decodeValue(e,t){return(0,r.isNone)(e)||t?e:decodeURIComponent(e)}_filterDocumentCookies(e){return e.map((e=>{let t=e.indexOf("=")
return[e.substring(0,t),e.substring(t+1)]})).filter((e=>2===e.length&&(0,r.isPresent)(e[0])))}_serializeCookie(e,t,i={}){return((e,t,i={})=>{let s=`${e}=${t}`
return(0,r.isEmpty)(i.domain)||(s=`${s}; domain=${i.domain}`),"date"===(0,r.typeOf)(i.expires)&&(s=`${s}; expires=${i.expires.toUTCString()}`),(0,r.isEmpty)(i.maxAge)||(s=`${s}; max-age=${i.maxAge}`),i.secure&&(s=`${s}; secure`),i.httpOnly&&(s=`${s}; httpOnly`),(0,r.isEmpty)(i.path)||(s=`${s}; path=${i.path}`),(0,r.isEmpty)(i.sameSite)||(s=`${s}; SameSite=${i.sameSite}`),s})(e,t,i)}_isCookieSizeAcceptable(e){let t,i=0,r=0
for(;t=e.charCodeAt(r++);)i+=t>>11?3:t>>7?2:1
return i<4096}_normalizedDefaultPath(){if(!this._isFastBoot()){let e=window.location.pathname
return e.substring(0,e.lastIndexOf("/"))}}_isFastBoot(){return this._fastBoot&&this._fastBoot.isFastBoot}}},7665:(e,t,i)=>{i.r(t),i.d(t,{default:()=>V})
var r=i(5989)
const s={iterator:()=>({next:()=>({done:!0,value:void 0})})}
class n{constructor(e){this.version="2",this._capabilities=e,this.__cache=new Map,this.__graph=(0,r.graphFor)(e),this.__destroyedCache=new Map,this.__documents=new Map}put(e){if(b(e))return this._putDocument(e,void 0,void 0)
if(function(e){return!(e instanceof Error)&&e.content&&!("data"in e.content)&&!("included"in e.content)&&"meta"in e.content}(e))return this._putDocument(e,void 0,void 0)
const t=e.content,i=t.included
let r,s
const{identifierCache:n}=this._capabilities
if(i)for(r=0,s=i.length;r<s;r++)i[r]=g(this,n,i[r])
if(Array.isArray(t.data)){s=t.data.length
const o=[]
for(r=0;r<s;r++)o.push(g(this,n,t.data[r]))
return this._putDocument(e,o,i)}if(null===t.data)return this._putDocument(e,null,i)
const o=g(this,n,t.data)
return this._putDocument(e,o,i)}_putDocument(e,t,i){const r=b(e)?function(e){const t={}
return e.content&&(v(t,e.content),"errors"in e.content?t.errors=e.content.errors:"object"==typeof e.error&&"errors"in e.error?t.errors=e.error.errors:t.errors=[{title:e.message}]),t}(e):function(e){const t={},i=e.content
return i&&v(t,i),t}(e)
void 0!==t&&(r.data=t),void 0!==i&&(r.included=i)
const s=e.request,n=s?this._capabilities.identifierCache.getOrCreateDocumentIdentifier(s):null
if(n){r.lid=n.lid,e.content=r
const t=this.__documents.has(n.lid)
this.__documents.set(n.lid,e),this._capabilities.notifyChange(n,t?"updated":"added")}return r}patch(e){if("mergeIdentifiers"===e.op){const t=this.__cache.get(e.record)
t&&(this.__cache.set(e.value,t),this.__cache.delete(e.record)),this.__graph.update(e,!0)}}mutate(e){this.__graph.update(e,!1)}peek(e){if("type"in e){const t=this.__safePeek(e,!1)
if(!t)return null
const{type:i,id:r,lid:s}=e,n=Object.assign({},t.remoteAttrs,t.inflightAttrs,t.localAttrs),o={},a=this.__graph.identifiers.get(e)
a&&Object.keys(a).forEach((t=>{a[t].definition.isImplicit||(o[t]=this.__graph.getData(e,t))})),this._capabilities
const c=this._capabilities._store
return this._capabilities.schema.fields(e).forEach(((t,i)=>{if(i in n&&void 0!==n[i])return
const r=l(t,e,c)
void 0!==r&&(n[i]=r)})),{type:i,id:r,lid:s,attributes:n,relationships:o}}const t=this.peekRequest(e)
return t&&"content"in t?t.content:null}peekRequest(e){return this.__documents.get(e.lid)||null}upsert(e,t,i){let r
const s=this.__safePeek(e,!1),n=!!s,o=s||this._createCache(e),a=function(e,t,i){const r=t._store.getRequestStateService()
return!h(e)&&r.getPendingRequestsForRecord(i).some((e=>"query"===e.type))}(s,this._capabilities,e)||!h(s),l=!function(e){if(!e)return!0
const t=e.isNew,i=e.isDeleted,r=d(e)
return(!t||i)&&r}(s)&&!a
return o.isNew&&(o.isNew=!1,this._capabilities.notifyChange(e,"identity"),this._capabilities.notifyChange(e,"state")),i&&(r=n?u(o,t.attributes):Object.keys(t.attributes||{})),o.remoteAttrs=Object.assign(o.remoteAttrs||Object.create(null),t.attributes),o.localAttrs&&m(o)&&this._capabilities.notifyChange(e,"state"),l||this._capabilities.notifyChange(e,"added"),t.id&&(o.id=t.id),t.relationships&&p(this.__graph,this._capabilities,e,t),r&&r.length&&c(this._capabilities,e,r),r}fork(){throw new Error("Not Implemented")}merge(e){throw new Error("Not Implemented")}diff(){throw new Error("Not Implemented")}dump(){throw new Error("Not Implemented")}hydrate(e){throw new Error("Not Implemented")}clientDidCreate(e,t){this._createCache(e).isNew=!0
const i={}
if(void 0!==t){const r=this._capabilities.schema.fields(e),s=this.__graph,n=Object.keys(t)
for(let o=0;o<n.length;o++){const a=n[o],l=t[a]
if("id"===a)continue
const c=r.get(a)
let u
switch(void 0!==c?"kind"in c?c.kind:"attribute":null){case"attribute":this.setAttr(e,a,l),i[a]=l
break
case"belongsTo":this.mutate({op:"replaceRelatedRecord",field:a,record:e,value:l}),u=s.get(e,a),u.state.hasReceivedData=!0,u.state.isEmpty=!1
break
case"hasMany":this.mutate({op:"replaceRelatedRecords",field:a,record:e,value:l}),u=s.get(e,a),u.state.hasReceivedData=!0,u.state.isEmpty=!1
break
default:i[a]=l}}}return this._capabilities.notifyChange(e,"added"),i}willCommit(e){const t=this.__peek(e,!1)
t.inflightAttrs?t.localAttrs&&Object.assign(t.inflightAttrs,t.localAttrs):t.inflightAttrs=t.localAttrs,t.localAttrs=null}didCommit(e,t){const i=t.content,r=t.request.op,s=i&&i.data,{identifierCache:n}=this._capabilities,o=e.id,a="deleteRecord"!==r&&s?n.updateRecordIdentifier(e,s):e,l=this.__peek(a,!1)
let d
l.isDeleted&&(this.__graph.push({op:"deleteRecord",record:a,isNew:!1}),l.isDeletionCommitted=!0,this._capabilities.notifyChange(a,"removed")),l.isNew=!1,s&&(s.id&&!l.id&&(l.id=s.id),a===e&&a.id!==o&&this._capabilities.notifyChange(a,"identity"),s.relationships&&p(this.__graph,this._capabilities,a,s),d=s.attributes)
const h=u(l,d)
l.remoteAttrs=Object.assign(l.remoteAttrs||Object.create(null),l.inflightAttrs,d),l.inflightAttrs=null,m(l),l.errors&&(l.errors=null,this._capabilities.notifyChange(a,"errors")),c(this._capabilities,a,h),this._capabilities.notifyChange(a,"state")
const f=i&&i.included
if(f)for(let c=0,u=f.length;c<u;c++)g(this,n,f[c])
return{data:a}}commitWasRejected(e,t){const i=this.__peek(e,!1)
if(i.inflightAttrs){const e=Object.keys(i.inflightAttrs)
if(e.length>0){const t=i.localAttrs=i.localAttrs||Object.create(null)
for(let r=0;r<e.length;r++)void 0===t[e[r]]&&(t[e[r]]=i.inflightAttrs[e[r]])}i.inflightAttrs=null}t&&(i.errors=t),this._capabilities.notifyChange(e,"errors")}unloadRecord(e){const t=this._capabilities
if(!this.__cache.has(e))return void(0,r.peekGraph)(t)?.unload(e)
const i=!this.isDeletionCommitted(e)
let s=!1
const n=this.__peek(e,!1)
n.isNew?(0,r.peekGraph)(t)?.push({op:"deleteRecord",record:e,isNew:!0}):(0,r.peekGraph)(t)?.unload(e),n.localAttrs=null,n.remoteAttrs=null,n.defaultAttrs=null,n.inflightAttrs=null
const o=function(e,t){const i=[],r=[],s=new Set
for(r.push(t);r.length>0;){const n=r.shift()
i.push(n),s.add(n)
const o=_(e,t).iterator()
for(let e=o.next();!e.done;e=o.next()){const t=e.value
t&&!s.has(t)&&(s.add(t),r.push(t))}}return i}(t,e)
if(function(e,t){for(let i=0;i<t.length;++i){const r=t[i]
if(e.hasRecord(r))return!1}return!0}(t,o))for(let r=0;r<o.length;++r){const e=o[r]
t.notifyChange(e,"removed"),s=!0,t.disconnectRecord(e)}this.__cache.delete(e),this.__destroyedCache.set(e,n),1===this.__destroyedCache.size&&setTimeout((()=>{this.__destroyedCache.clear()}),100),!s&&i&&t.notifyChange(e,"removed")}getAttr(e,t){const i=!Array.isArray(t)||1===t.length
if(Array.isArray(t)&&1===t.length&&(t=t[0]),i){const i=t,s=this.__peek(e,!0)
if(s.localAttrs&&i in s.localAttrs)return s.localAttrs[i]
if(s.inflightAttrs&&i in s.inflightAttrs)return s.inflightAttrs[i]
if(s.remoteAttrs&&i in s.remoteAttrs)return s.remoteAttrs[i]
if(s.defaultAttrs&&i in s.defaultAttrs)return s.defaultAttrs[i]
{const t=this._capabilities.schema.fields(e).get(i)
this._capabilities
const n=l(t,e,this._capabilities._store)
return(r=t)&&a(r.options)&&(s.defaultAttrs=s.defaultAttrs||Object.create(null),s.defaultAttrs[i]=n),n}}var r
const s=t,n=this.__peek(e,!0),o=s[0]
let c=n.localAttrs&&o in n.localAttrs?n.localAttrs[o]:void 0
if(void 0===c&&(c=n.inflightAttrs&&o in n.inflightAttrs?n.inflightAttrs[o]:void 0),void 0===c&&(c=n.remoteAttrs&&o in n.remoteAttrs?n.remoteAttrs[o]:void 0),void 0!==c){for(let e=1;e<s.length;e++)if(c=c[s[e]],void 0===c)return
return c}}setAttr(e,t,i){const r=!Array.isArray(t)||1===t.length
if(Array.isArray(t)&&1===t.length&&(t=t[0]),r){const r=this.__peek(e,!1),s=t,n=r.inflightAttrs&&s in r.inflightAttrs?r.inflightAttrs[s]:r.remoteAttrs&&s in r.remoteAttrs?r.remoteAttrs[s]:void 0
return n!==i?(r.localAttrs=r.localAttrs||Object.create(null),r.localAttrs[s]=i,r.changes=r.changes||Object.create(null),r.changes[s]=[n,i]):r.localAttrs&&(delete r.localAttrs[s],delete r.changes[s]),r.defaultAttrs&&s in r.defaultAttrs&&delete r.defaultAttrs[s],void this._capabilities.notifyChange(e,"attributes",s)}const s=t,n=this.__peek(e,!1),o=s[0],a=n.inflightAttrs&&o in n.inflightAttrs?n.inflightAttrs[o]:n.remoteAttrs&&o in n.remoteAttrs?n.remoteAttrs[o]:void 0
let l
if(a){l=a[s[1]]
for(let e=2;e<s.length;e++)l=l[s[e]]}if(l!==i){n.localAttrs=n.localAttrs||Object.create(null),n.localAttrs[o]=n.localAttrs[o]||structuredClone(a),n.changes=n.changes||Object.create(null)
let e=n.localAttrs[o],t=1
for(;t<s.length-1;)e=e[s[t++]]
e[s[t]]=i,n.changes[o]=[a,n.localAttrs[o]]}else if(n.localAttrs)try{if(!a)return
JSON.stringify(a)!==JSON.stringify(n.localAttrs[o])&&(delete n.localAttrs[o],delete n.changes[o])}catch(e){}this._capabilities.notifyChange(e,"attributes",o)}changedAttrs(e){return this.__peek(e,!1).changes||Object.create(null)}hasChangedAttrs(e){const t=this.__peek(e,!0)
return null!==t.inflightAttrs&&Object.keys(t.inflightAttrs).length>0||null!==t.localAttrs&&Object.keys(t.localAttrs).length>0}rollbackAttrs(e){const t=this.__peek(e,!1)
let i
return t.isDeleted=!1,null!==t.localAttrs&&(i=Object.keys(t.localAttrs),t.localAttrs=null,t.changes=null),t.isNew&&(t.isDeletionCommitted=!0,t.isDeleted=!0,t.isNew=!1),t.inflightAttrs=null,t.defaultAttrs=null,t.errors&&(t.errors=null,this._capabilities.notifyChange(e,"errors")),this._capabilities.notifyChange(e,"state"),i&&i.length&&c(this._capabilities,e,i),i||[]}changedRelationships(e){return this.__graph.getChanged(e)}hasChangedRelationships(e){return this.__graph.hasChanged(e)}rollbackRelationships(e){let t
return this._capabilities,this._capabilities._store._join((()=>{t=this.__graph.rollback(e)})),t}getRelationship(e,t){return this.__graph.getData(e,t)}setIsDeleted(e,t){this.__peek(e,!1).isDeleted=t,this._capabilities.notifyChange(e,"state")}getErrors(e){return this.__peek(e,!0).errors||[]}isEmpty(e){const t=this.__safePeek(e,!0)
return!t||null===t.remoteAttrs&&null===t.inflightAttrs&&null===t.localAttrs}isNew(e){return this.__safePeek(e,!0)?.isNew||!1}isDeleted(e){return this.__safePeek(e,!0)?.isDeleted||!1}isDeletionCommitted(e){return this.__safePeek(e,!0)?.isDeletionCommitted||!1}_createCache(e){const t={id:null,remoteAttrs:null,localAttrs:null,defaultAttrs:null,inflightAttrs:null,changes:null,errors:null,isNew:!1,isDeleted:!1,isDeletionCommitted:!1}
return this.__cache.set(e,t),t}__safePeek(e,t){let i=this.__cache.get(e)
return!i&&t&&(i=this.__destroyedCache.get(e)),i}__peek(e,t){return this.__safePeek(e,t)}}function o(e){return(0,r.isBelongsTo)(e)?e.remoteState?[e.remoteState]:[]:e.remoteState}function a(e){return!!e&&"function"==typeof e.defaultValue}function l(e,t,i){const r=e?.options
if(e&&(r||e.type)&&("attribute"===e.kind||"field"===e.kind)){if(a(r))return r.defaultValue()
if(r&&"defaultValue"in r)return r.defaultValue
if("attribute"!==e.kind&&e.type){const s=i.schema.transformation(e)
if(s?.defaultValue)return s.defaultValue(r||null,t)}}}function c(e,t,i){if(i)for(let r=0;r<i.length;r++)e.notifyChange(t,"attributes",i[r])
else e.notifyChange(t,"attributes")}function u(e,t){const i=[]
if(t){const r=Object.keys(t),s=r.length,n=e.localAttrs,o=Object.assign(Object.create(null),e.remoteAttrs,e.inflightAttrs)
for(let e=0;e<s;e++){const s=r[e],a=t[s]
n&&void 0!==n[s]||o[s]!==a&&i.push(s)}}return i}function d(e){return!e||null===e.remoteAttrs&&null===e.inflightAttrs&&null===e.localAttrs}function h(e,t=!1){if(!e)return!1
const i=e.isNew,r=d(e)
return i?!e.isDeleted:!(t&&e.isDeletionCommitted||r)}function p(e,t,i,r){const s=t.schema.fields(i)
for(const[n,o]of s){if(!y(o))continue
const t=r.relationships[n]
t&&e.push({op:"updateRelationship",record:i,field:n,value:t})}}const f=new Set(["hasMany","belongsTo","resource","collection"])
function y(e){return f.has(e.kind)}function m(e){const{localAttrs:t,remoteAttrs:i,inflightAttrs:r,defaultAttrs:s,changes:n}=e
if(!t)return e.changes=null,!1
let o=!1
const a=Object.keys(t)
for(let l=0,c=a.length;l<c;l++){const e=a[l];(r&&e in r?r[e]:i&&e in i?i[e]:void 0)===t[e]&&(o=!0,delete t[e],delete n[e]),s&&e in s&&delete s[e]}return o}function g(e,t,i){let r=t.peekRecordIdentifier(i)
return r=r?t.updateRecordIdentifier(r,i):t.getOrCreateRecordIdentifier(i),e.upsert(r,i,e._capabilities.hasRecord(r)),r}function _(e,t){const i=(0,r.peekGraph)(e),n=i?.identifiers.get(t)
if(!n)return s
const a=[]
Object.keys(n).forEach((e=>{const t=n[e]
t&&!t.definition.isImplicit&&a.push(t)}))
let l=0,c=0,u=0
return{iterator:()=>({next:()=>{const e=(()=>{for(;l<a.length;){for(;c<2;){const t=0===c?(e=a[l],(0,r.isBelongsTo)(e)?e.localState?[e.localState]:[]:e.additions?[...e.additions]:[]):o(a[l])
for(;u<t.length;){const e=t[u++]
if(null!==e)return e}u=0,c++}c=0,l++}var e})()
return{value:e,done:void 0===e}}})}}function b(e){return e instanceof Error}function v(e,t){"links"in t&&(e.links=t.links),"meta"in t&&(e.meta=t.meta)}var w=i(2294),R=i(4635),k=i(4813),A=i(9229)
function S(e,t,i,r){const s=t.data?(0,A.i)(t.data,((t,s)=>{const{id:n,type:o}=t
return function(e,t,i,r){const{id:s,type:n}=e
e.relationships||(e.relationships={})
const{relationships:o}=e,a=function(e,t,i,r){const{name:s}=i,{type:n}=t,o=function(e,t,i){const r=e.schema.fields(t).get(i)
return r?r.options.inverse:null}(e,{type:n},s)
if(o)return{inverseKey:o,kind:e.schema.fields({type:r}).get(o).kind}}(i,t,r,n)
if(a){const{inverseKey:e,kind:i}=a,r=o[e]?.data
"hasMany"===i&&void 0===r||(o[e]=o[e]||{},o[e].data=function(e,t,{id:i,type:r}){const s={id:i,type:r}
let n=null
if("hasMany"===t){const t=e||[]
e&&e.find((e=>e.type===s.type&&e.id===s.id))||t.push(s),n=t}else{const t=e||{}
Object.assign(t,s),n=t}return n}(r??null,i,t))}}(t,i,e,r),{id:n,type:o}})):null,n={}
"meta"in t&&(n.meta=t.meta),"links"in t&&(n.links=t.links),"data"in t&&(n.data=s)
const o={id:i.id,type:i.type,relationships:{[r.name]:n}}
return Array.isArray(t.included)||(t.included=[]),t.included.push(o),t}const E=new Set(["findRecord","findAll","query","queryRecord","findBelongsTo","findHasMany","updateRecord","createRecord","deleteRecord"]),T={request(e,t){if(e.request.url||!e.request.op||!E.has(e.request.op))return t(e.request)
const{store:i}=e.request
switch(i._fetchManager||(i._fetchManager=new A.F(i)),e.request.op){case"findRecord":return function(e){const{store:t,data:i}=e.request,{record:r,options:s}=i
let n
if(t._instanceCache.recordIsLoaded(r))if(s.reload)(0,A.a)(r),n=t._fetchManager.scheduleFetch(r,s,e.request)
else{let i=null
const o=t.adapterFor(r.type)
void 0===s.reload&&o.shouldReloadRecord&&o.shouldReloadRecord(t,i=t._fetchManager.createSnapshot(r,s))?((0,A.a)(r),s.reload=!0,n=t._fetchManager.scheduleFetch(r,s,e.request)):(!1===s.backgroundReload||!s.backgroundReload&&o.shouldBackgroundReloadRecord&&!o.shouldBackgroundReloadRecord(t,i=i||t._fetchManager.createSnapshot(r,s))||((0,A.a)(r),s.backgroundReload=!0,t._fetchManager.scheduleFetch(r,s,e.request)),n=Promise.resolve(r))}else n=t._fetchManager.fetchDataIfNeededForIdentifier(r,s,e.request)
return n.then((e=>t.peekRecord(e)))}(e)
case"findAll":return function(e){const{store:t,data:i}=e.request,{type:r,options:s}=i,n=t.adapterFor(r),o=t.recordArrayManager._live.get(r),a=new A.b(t,r,s)
let l
return s.reload||!1!==s.reload&&(n.shouldReloadAll&&n.shouldReloadAll(t,a)||!n.shouldReloadAll&&0===a.length)?(o&&(o.isUpdating=!0),l=M(n,t,r,a,e.request,!0)):(l=Promise.resolve(t.peekAll(r)),(s.backgroundReload||!1!==s.backgroundReload&&(!n.shouldBackgroundReloadAll||n.shouldBackgroundReloadAll(t,a)))&&(o&&(o.isUpdating=!0),M(n,t,r,a,e.request,!1))),l}(e)
case"query":return function(e){const{store:t,data:i}=e.request
let{options:r}=i
const{type:s,query:n}=i,o=t.adapterFor(s),a=r._recordArray||t.recordArrayManager.createArray({type:s,query:n})
delete r._recordArray
const l=t.modelFor(s)
return Promise.resolve().then((()=>o.query(t,l,n,a,r))).then((e=>{const i=t.serializerFor(s),r=(0,A.n)(i,t,l,e,null,"query"),n=t._push(r,!0)
return t.recordArrayManager.populateManagedArray(a,n,r),a}))}(e)
case"queryRecord":return function(e){const{store:t,data:i}=e.request,{type:r,query:s,options:n}=i,o=t.adapterFor(r),a=t.modelFor(r)
return Promise.resolve().then((()=>o.queryRecord(t,a,s,n))).then((e=>{const i=t.serializerFor(r),s=(0,A.n)(i,t,a,e,null,"queryRecord"),n=t._push(s,!0)
return n?t.peekRecord(n):null}))}(e)
case"findBelongsTo":return function(e){const{store:t,data:i,records:r}=e.request,{options:s,record:n,links:o,useLink:a,field:l}=i,c=r?.[0],u=c&&t._fetchManager.getPendingFetch(c,s)
if(u)return u
if(a)return function(e,t,i,r,s){return Promise.resolve().then((()=>{const n=e.adapterFor(t.type),o=e._fetchManager.createSnapshot(t,s),a=i&&"string"!=typeof i?i.href:i
return n.findBelongsTo(e,o,a,r)})).then((i=>{const s=e.modelFor(r.type),n=e.serializerFor(r.type)
let o=(0,A.n)(n,e,s,i,null,"findBelongsTo")
return o.data||o.links||o.meta?(o=S(e,o,t,r),e._push(o,!0)):null}),null)}(t,n,o.related,l,s)
const d=t._fetchManager
return(0,A.a)(c),s.reload?d.scheduleFetch(c,s,e.request):d.fetchDataIfNeededForIdentifier(c,s,e.request)}(e)
case"findHasMany":return function(e){const{store:t,data:i,records:r}=e.request,{options:s,record:n,links:o,useLink:a,field:l}=i
if(a)return function(e,t,i,r,s,n){return Promise.resolve().then((()=>{const o=t._fetchManager.createSnapshot(i,n),a=r&&"string"!=typeof r?r.href:r
return e.findHasMany(t,o,a,s)})).then((e=>{const r=t.modelFor(s.type),n=t.serializerFor(s.type)
let o=(0,A.n)(n,t,r,e,null,"findHasMany")
return o=S(t,o,i,s),t._push(o,!0)}),null)}(t.adapterFor(n.type),t,n,o.related,l,s)
const c=new Array(r.length),u=t._fetchManager
for(let d=0;d<r.length;d++){const t=r[d];(0,A.a)(t),c[d]=s.reload?u.scheduleFetch(t,s,e.request):u.fetchDataIfNeededForIdentifier(t,s,e.request)}return Promise.all(c)}(e)
case"updateRecord":case"createRecord":case"deleteRecord":return function(e){const{store:t,data:i,op:r}=e.request,{options:s,record:n}=i
t.cache.willCommit(n,e)
const o=Object.assign({[A.S]:r},s)
return t._fetchManager.scheduleSave(n,o).then((i=>{let s
return t._join((()=>{s=t.cache.didCommit(n,{request:e.request,content:i})})),t.lifetimes?.didRequest&&"createRecord"===r&&t.lifetimes.didRequest(e.request,{status:201},null,t),t.peekRecord(s.data)})).catch((e=>{let i=e
throw e?"string"==typeof e&&(i=new Error(e)):i=new Error("Unknown Error Occurred During Request"),function(e,t,i){if(i&&!0===i.isAdapterError&&"InvalidError"===i.code){const r=e.serializerFor(t.type)
if(r&&"function"==typeof r.extractErrors){const s=r.extractErrors(e,e.modelFor(t.type),i,t.id)
i.errors=function(e){const t=[]
return e&&Object.keys(e).forEach((i=>{const r=(s=e[i],Array.isArray(s)?s:[s])
var s
for(let e=0;e<r.length;e++){let s="Invalid Attribute",n=`/data/attributes/${i}`
i===C&&(s="Invalid Document",n="/data"),t.push({title:s,detail:r[e],source:{pointer:n}})}})),t}(s)}}const r=e.cache
if(i.errors){let e=i.errors
0===e.length&&(e=[{title:"Invalid Error",detail:"",source:{pointer:"/data"}}]),r.commitWasRejected(t,e)}else r.commitWasRejected(t)}(t,n,i),i}))}(e)
default:return t(e.request)}}},C="base"
function M(e,t,i,r,s,n){const o=t.modelFor(i)
let a=Promise.resolve().then((()=>e.findAll(t,o,null,r)))
return a=a.then((e=>{const s=t.serializerFor(i),a=(0,A.n)(s,t,o,e,null,"findAll")
return t._push(a,n),r._recordArray.isUpdating=!1,r._recordArray})),a}function F(e,t){this._adapterCache=this._adapterCache||Object.create(null)
const i=(0,k.di)(e),{_adapterCache:r}=this
let s=r[i]
if(s)return s
const n=(0,w.getOwner)(this)
return s=n.lookup(`adapter:${i}`),void 0!==s?(r[i]=s,s):(s=r.application||n.lookup("adapter:application"),void 0!==s?(r[i]=s,r.application=s,s):void 0)}function O(e){this._serializerCache=this._serializerCache||Object.create(null)
const t=(0,k.di)(e),{_serializerCache:i}=this
let r=i[t]
if(r)return r
const s=(0,w.getOwner)(this)
return r=s.lookup(`serializer:${t}`),void 0!==r?(i[t]=r,r):(r=i.application||s.lookup("serializer:application"),void 0!==r?(i[t]=r,i.application=r,r):null)}function j(e,t){const i=(0,k.di)(e),r=this.serializerFor(i),s=this.modelFor(i)
return r.normalize(s,t)}function z(e,t){const i=t||e,r=t?(0,k.di)(e):"application"
this.serializerFor(r).pushPayload(this,i)}function P(e,t){return this._fetchManager||(this._fetchManager=new A.F(this)),this._fetchManager.createSnapshot((0,R.recordIdentifierFor)(e)).serialize(t)}function D(){for(const e in this._adapterCache){const t=this._adapterCache[e]
"function"==typeof t.destroy&&t.destroy()}for(const e in this._serializerCache){const t=this._serializerCache[e]
"function"==typeof t.destroy&&t.destroy()}}var $=i(6144),q=i(6961),x=i(5583),N=i(4315)
const I="undefined"!=typeof fetch?(...e)=>fetch(...e):"undefined"!=typeof FastBoot?(...e)=>FastBoot.require("node-fetch")(...e):()=>{throw new Error("No Fetch Implementation Found")},L=new Set(["updateRecord","createRecord","deleteRecord"]),B=new Map([[400,"Bad Request"],[401,"Unauthorized"],[402,"Payment Required"],[403,"Forbidden"],[404,"Not Found"],[405,"Method Not Allowed"],[406,"Not Acceptable"],[407,"Proxy Authentication Required"],[408,"Request Timeout"],[409,"Conflict"],[410,"Gone"],[411,"Length Required"],[412,"Precondition Failed"],[413,"Payload Too Large"],[414,"URI Too Long"],[415,"Unsupported Media Type"],[416,"Range Not Satisfiable"],[417,"Expectation Failed"],[419,"Page Expired"],[420,"Enhance Your Calm"],[421,"Misdirected Request"],[422,"Unprocessable Entity"],[423,"Locked"],[424,"Failed Dependency"],[425,"Too Early"],[426,"Upgrade Required"],[428,"Precondition Required"],[429,"Too Many Requests"],[430,"Request Header Fields Too Large"],[431,"Request Header Fields Too Large"],[450,"Blocked By Windows Parental Controls"],[451,"Unavailable For Legal Reasons"],[500,"Internal Server Error"],[501,"Not Implemented"],[502,"Bad Gateway"],[503,"Service Unavailable"],[504,"Gateway Timeout"],[505,"HTTP Version Not Supported"],[506,"Variant Also Negotiates"],[507,"Insufficient Storage"],[508,"Loop Detected"],[509,"Bandwidth Limit Exceeded"],[510,"Not Extended"],[511,"Network Authentication Required"]]),U={async request(e){let t
try{t=await I(e.request.url,e.request)}catch(e){throw e instanceof DOMException&&"AbortError"===e.name?(e.statusText="Aborted",e.status=20,e.isRequestError=!0):(e.statusText="Unknown Network Error",e.status=0,e.isRequestError=!0),e}const i=!t.ok||t.status>=400,r=e.request.op,s=Boolean(r&&L.has(r))
if(!i&&!s&&204!==t.status&&!t.headers.has("date")){const e=new Headers(t.headers)
e.set("date",(new Date).toUTCString()),t=function(e,t){const i=(0,N.f)(e)
return new Response(e.body,Object.assign(i,t))}(t,{headers:e})}if(e.setResponse(t),204===t.status)return null
let n=""
{const i=t.body.getReader(),r=new TextDecoder
let s=e.hasRequestedStream,o=s?new TransformStream:null,a=o?.writable.getWriter()
for(s&&(e.request.signal?.addEventListener("abort",(()=>{s&&(o.writable.abort("Request Aborted"),o.readable.cancel("Request Aborted"))})),e.setStream(o.readable));;){const{done:t,value:l}=await i.read()
if(t){s&&(s=!1,await a.ready,await a.close())
break}if(n+=r.decode(l,{stream:!0}),s)await a.ready,await a.write(l)
else if(e.hasRequestedStream){const t=new TextEncoder
s=!0,o=new TransformStream,e.request.signal?.addEventListener("abort",(()=>{s&&(o.writable.abort("Request Aborted"),o.readable.cancel("Request Aborted"))})),e.setStream(o.readable),a=o.writable.getWriter(),await a.ready,await a.write(t.encode(n)),await a.ready,await a.write(l)}}s&&(s=!1,await a.ready,await a.close())}if(i){let i
try{i=JSON.parse(n)}catch{}const r=Array.isArray(i)?i:null!==(o=i)&&"object"==typeof o&&Array.isArray(i.errors)?i.errors:null,s=t.statusText||B.get(t.status)||"Unknown Request Error",a=`[${t.status} ${s}] ${e.request.method??"GET"} (${t.type}) - ${t.url}`,l=r?new AggregateError(r,a):new Error(a)
throw l.status=t.status,l.statusText=s,l.isRequestError=!0,l.code=l.status,l.name=l.statusText.replaceAll(" ","")+"Error",l.content=i,l}return JSON.parse(n)
var o}}
function H(e,t,i){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var i=t.call(e,"string")
if("object"!=typeof i)return i
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class V extends R.default{constructor(e){super(e),H(this,"adapterFor",F),H(this,"serializerFor",O),H(this,"pushPayload",z),H(this,"normalize",j),H(this,"serializeRecord",P),"requestManager"in this||(this.requestManager=new x.Ay,this.requestManager.use([T,U])),this.requestManager.useCache(R.CacheHandler)}createSchemaService(){return(0,q.b)(this)}createCache(e){return new n(e)}instantiateRecord(e,t){return $.i.call(this,e,t)}teardownRecord(e){$.t.call(this,e)}modelFor(e){return $.m.call(this,e)||super.modelFor(e)}destroy(){D.call(this),super.destroy()}}},9765:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s})
var r=i(3399),s=(0,i(9616).A)((function(e,t){let i=new Array(...e)
return 2===i.length&&i.push({withoutCount:t["without-count"]}),(0,r.pluralize)(...i)}))},2552:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s})
var r=i(3399),s=(0,i(9616).A)((function(e){return(0,r.singularize)(e[0])}))},3399:(e,t,i)=>{i.r(t),i.d(t,{default:()=>h,pluralize:()=>f,singularize:()=>y})
var r={plurals:[[/$/,"s"],[/s$/i,"s"],[/^(ax|test)is$/i,"$1es"],[/(octop|vir)us$/i,"$1i"],[/(octop|vir)i$/i,"$1i"],[/(alias|status|bonus)$/i,"$1es"],[/(bu)s$/i,"$1ses"],[/(buffal|tomat)o$/i,"$1oes"],[/([ti])um$/i,"$1a"],[/([ti])a$/i,"$1a"],[/sis$/i,"ses"],[/(?:([^f])fe|([lr])f)$/i,"$1$2ves"],[/(hive)$/i,"$1s"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/(x|ch|ss|sh)$/i,"$1es"],[/(matr|vert|ind)(?:ix|ex)$/i,"$1ices"],[/^(m|l)ouse$/i,"$1ice"],[/^(m|l)ice$/i,"$1ice"],[/^(ox)$/i,"$1en"],[/^(oxen)$/i,"$1"],[/(quiz)$/i,"$1zes"]],singular:[[/s$/i,""],[/(ss)$/i,"$1"],[/(n)ews$/i,"$1ews"],[/([ti])a$/i,"$1um"],[/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)(sis|ses)$/i,"$1sis"],[/(^analy)(sis|ses)$/i,"$1sis"],[/([^f])ves$/i,"$1fe"],[/(hive)s$/i,"$1"],[/(tive)s$/i,"$1"],[/([lr])ves$/i,"$1f"],[/([^aeiouy]|qu)ies$/i,"$1y"],[/(s)eries$/i,"$1eries"],[/(m)ovies$/i,"$1ovie"],[/(x|ch|ss|sh)es$/i,"$1"],[/^(m|l)ice$/i,"$1ouse"],[/(bus)(es)?$/i,"$1"],[/(o)es$/i,"$1"],[/(shoe)s$/i,"$1"],[/(cris|test)(is|es)$/i,"$1is"],[/^(a)x[ie]s$/i,"$1xis"],[/(octop|vir)(us|i)$/i,"$1us"],[/(alias|status|bonus)(es)?$/i,"$1"],[/^(ox)en/i,"$1"],[/(vert|ind)ices$/i,"$1ex"],[/(matr)ices$/i,"$1ix"],[/(quiz)zes$/i,"$1"],[/(database)s$/i,"$1"]],irregularPairs:[["person","people"],["man","men"],["child","children"],["sex","sexes"],["move","moves"],["cow","kine"],["zombie","zombies"]],uncountable:["equipment","information","rice","money","species","series","fish","sheep","jeans","police"]}
const s=/^\s*$/,n=/([\w/-]+[_/\s-])([a-z\d]+$)/,o=/([\w/\s-]+)([A-Z][a-z\d]*$)/,a=/[A-Z][a-z\d]*$/,l=/(^|\/)([a-z\u00C0-\u024F])/g
function c(e){return e.replace(l,(e=>e.toUpperCase()))}function u(e,t){for(let i=0,r=t.length;i<r;i++)e.uncountable[t[i].toLowerCase()]=!0}function d(e,t){let i
for(let r=0,s=t.length;r<s;r++)i=t[r],e.irregular[i[0].toLowerCase()]=i[1],e.irregular[i[1].toLowerCase()]=i[1],e.irregularInverse[i[1].toLowerCase()]=i[0],e.irregularInverse[i[0].toLowerCase()]=i[0]}function h(e){(e=e||{}).uncountable=e.uncountable||p(),e.irregularPairs=e.irregularPairs||p()
const t=this.rules={plurals:e.plurals||[],singular:e.singular||[],irregular:p(),irregularInverse:p(),uncountable:p()}
u(t,e.uncountable),d(t,e.irregularPairs),this.enableCache()}if(!Object.create&&!Object.create(null).hasOwnProperty)throw new Error("This browser does not support Object.create(null), please polyfil with es5-sham: http://git.io/yBU2rg")
function p(){var e=Object.create(null)
return e._dict=null,delete e._dict,e}function f(){return h.inflector.pluralize(...arguments)}function y(e){return h.inflector.singularize(e)}h.prototype={enableCache(){this.purgeCache(),this.singularize=function(e){return this._cacheUsed=!0,this._sCache[e]||(this._sCache[e]=this._singularize(e))},this.pluralize=function(e,t,i={}){this._cacheUsed=!0
var r=[e,t,i.withoutCount]
return this._pCache[r]||(this._pCache[r]=this._pluralize(e,t,i))}},purgeCache(){this._cacheUsed=!1,this._sCache=p(),this._pCache=p()},disableCache(){this._sCache=null,this._pCache=null,this.singularize=function(e){return this._singularize(e)},this.pluralize=function(){return this._pluralize(...arguments)}},plural(e,t){this._cacheUsed&&this.purgeCache(),this.rules.plurals.push([e,t.toLowerCase()])},singular(e,t){this._cacheUsed&&this.purgeCache(),this.rules.singular.push([e,t.toLowerCase()])},uncountable(e){this._cacheUsed&&this.purgeCache(),u(this.rules,[e.toLowerCase()])},irregular(e,t){this._cacheUsed&&this.purgeCache(),d(this.rules,[[e,t]])},pluralize(){return this._pluralize(...arguments)},_pluralize(e,t,i={}){return void 0===t?this.inflect(e,this.rules.plurals,this.rules.irregular):(1!==parseFloat(e)&&(t=this.inflect(t,this.rules.plurals,this.rules.irregular)),i.withoutCount?t:`${e} ${t}`)},singularize(e){return this._singularize(e)},_singularize(e){return this.inflect(e,this.rules.singular,this.rules.irregularInverse)},inflect(e,t,i){let r,l,u,d,h,p,f,y,m,g
if(f=!e||s.test(e),y=a.test(e),f)return e
if(d=e.toLowerCase(),h=n.exec(e)||o.exec(e),h&&(p=h[2].toLowerCase()),g=this.rules.uncountable[d]||this.rules.uncountable[p],g)return e
for(m in i)if(d.match(m+"$"))return l=i[m],y&&i[p]&&(l=c(l),m=c(m)),e.replace(new RegExp(m,"i"),l)
for(var _=t.length;_>0&&(r=t[_-1],m=r[0],!m.test(e));_--);return r=r||[],m=r[0],l=r[1],u=e.replace(m,l),u}},h.defaultRules=r,h.inflector=new h(r)},9616:(e,t,i)=>{i.d(t,{A:()=>a})
var r=i(3211),s=i.n(r),n=i(336),o=i.n(n)
function a(e){return o()?o().helper(e):s().HTMLBars?s().HTMLBars.makeBoundHelper(e):s().Handlebars.makeBoundHelper(e)}},3265:(e,t,i)=>{function r(e,t,i){return(t="symbol"==typeof(r=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var i=t.call(e,"string")
if("object"!=typeof i)return i
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t))?r:String(r))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e
var r}function s(e,t,i,r){i&&Object.defineProperty(e,t,{enumerable:i.enumerable,configurable:i.configurable,writable:i.writable,value:i.initializer?i.initializer.call(r):void 0})}function n(e,t,i,r,s){var n={}
return Object.keys(r).forEach((function(e){n[e]=r[e]})),n.enumerable=!!n.enumerable,n.configurable=!!n.configurable,("value"in n||n.initializer)&&(n.writable=!0),n=i.slice().reverse().reduce((function(i,r){return r(e,t,i)||i}),n),s&&void 0!==n.initializer&&(n.value=n.initializer?n.initializer.call(s):void 0,n.initializer=void 0),void 0===n.initializer&&(Object.defineProperty(e,t,n),n=null),n}i.d(t,{_:()=>n,a:()=>s,b:()=>r})},3586:(e,t,i)=>{i.r(t),i.d(t,{default:()=>d})
var r,s,n,o=i(3265),a=i(2735),l=i(336),c=i.n(l),u=i(4666)
let d=(r=(0,a.inject)("page-title"),s=class extends(c()){constructor(e){super(e),(0,o.a)(this,"tokens",n,this),(0,o.b)(this,"tokenId",(0,u.guidFor)(this)),this.tokens.push({id:this.tokenId})}compute(e,t){const i={...t,id:this.tokenId,title:e.join("")}
return this.tokens.push(i),this.tokens.scheduleTitleUpdate(),""}willDestroy(){super.willDestroy(),this.tokens.remove(this.tokenId),this.tokens.scheduleTitleUpdate()}},n=(0,o._)(s.prototype,"tokens",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s)},3251:(e,t,i)=>{i.r(t),i.d(t,{default:()=>g})
var r,s,n,o,a,l=i(3265),c=i(1223),u=i(2735),d=i.n(u),h=i(9553),p=i(1603)
const f="undefined"!=typeof FastBoot,y="routeDidChange",m=["separator","prepend","replace"]
let g=(r=(0,u.inject)("router"),s=(0,u.inject)("-document"),n=class extends(d()){constructor(e){if(super(e),(0,l.a)(this,"router",o,this),(0,l.a)(this,"document",a,this),(0,l.b)(this,"tokens",[]),(0,l.b)(this,"_defaultConfig",{separator:" | ",prepend:!0,replace:null}),(0,l.b)(this,"scheduleTitleUpdate",(()=>{(0,c.scheduleOnce)("afterRender",this,this._updateTitle)})),this._validateExistingTitleElement(),function(e){return"resolveRegistration"in e}(e)){const i=e.resolveRegistration("config:environment")
"object"==typeof(t=i)&&null!==t&&"pageTitle"in t&&m.forEach((e=>{if(!(0,h.isEmpty)(i.pageTitle[e])){const t=i.pageTitle[e]
this._defaultConfig[e]=t}}))}var t
this.router.on(y,this.scheduleTitleUpdate)}applyTokenDefaults(e){const t=this._defaultConfig.separator,i=this._defaultConfig.prepend,r=this._defaultConfig.replace
e.previous??=null,e.next??=null,null==e.separator&&(e.separator=t),null==e.prepend&&null!=i&&(e.prepend=i),null==e.replace&&null!=r&&(e.replace=r)}inheritFromPrevious(e){const t=e.previous
t&&(null==e.separator&&(e.separator=t.separator),null==e.prepend&&(e.prepend=t.prepend))}push(e){const t=this._findTokenById(e.id)
if(t){const i=this.tokens.indexOf(t),r=[...this.tokens],s=t.previous
return e.previous=s,e.next=t.next,this.inheritFromPrevious(e),this.applyTokenDefaults(e),r.splice(i,1,e),void(this.tokens=r)}const i=this.tokens.slice(-1)[0]
i&&(e.previous=i??null,i.next=e,this.inheritFromPrevious(e)),this.applyTokenDefaults(e),this.tokens=[...this.tokens,e]}remove(e){const t=this._findTokenById(e)
if(!t)return
const{next:i,previous:r}=t
i&&(i.previous=r),r&&(r.next=i),t.previous=t.next=null
const s=[...this.tokens]
s.splice(s.indexOf(t),1),this.tokens=s}get visibleTokens(){const e=this.tokens
let t=e?e.length:0
const i=[]
for(;t--;){const r=e[t]
if(r){if(r.replace){i.unshift(r)
break}i.unshift(r)}}return i}get sortedTokens(){const e=this.visibleTokens
if(!e)return[]
let t=!0,i=[]
const r=[i],s=[]
return e.forEach((e=>{if(e.front)s.unshift(e)
else if(e.prepend){t&&(t=!1,i=[],r.push(i))
const s=i[0]
s&&((e={...e}).separator=s.separator),i.unshift(e)}else t||(t=!0,i=[],r.push(i)),i.push(e)})),s.concat(r.reduce(((e,t)=>e.concat(t)),[]))}toString(){const e=this.sortedTokens,t=[]
for(let i=0,r=e.length;i<r;i++){const s=e[i]
s&&s.title&&(t.push(s.title),i+1<r&&t.push(s.separator))}return t.join("")}willDestroy(){super.willDestroy(),this.router.off(y,this.scheduleTitleUpdate)}_updateTitle(){const e=this.toString()
f?this.updateFastbootTitle(e):this.document.title=e,this.titleDidUpdate(e)}_validateExistingTitleElement(){f||(0,p.assert)("[ember-page-title]: Multiple title elements found. Check for other addons like ember-cli-head updating <title> as well.",document.head.querySelectorAll("title").length<=1)}_findTokenById(e){return this.tokens.find((t=>t.id===e))}updateFastbootTitle(e){if(!f)return
const t=this.document.head,i=t.childNodes
for(let n=0;n<i.length;n++){const e=i[n]
e&&"title"===e.nodeName.toLowerCase()&&t.removeChild(e)}const r=this.document.createElement("title"),s=this.document.createTextNode(e)
r.appendChild(s),t.appendChild(r)}titleDidUpdate(e){}},o=(0,l._)(n.prototype,"router",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),a=(0,l._)(n.prototype,"document",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),n)},9928:(e,t,i)=>{i.r(t),i.d(t,{default:()=>a})
var r=i(2760),s=i(4361),n=i.n(s),o=i(4471),a=i.n(o)().extend(n(),{restore:()=>r.Ay.reject(),authenticate:()=>r.Ay.reject(),invalidate:()=>r.Ay.resolve()})},5782:(e,t,i)=>{i.d(t,{A:()=>s})
const r="index"
var s={rootURL:"",routeAfterAuthentication:r,load(e){this.rootURL=void 0!==e.rootURL?e.rootURL:"",this.routeAfterAuthentication=void 0!==e.routeAfterAuthentication?e.routeAfterAuthentication:r}}},5444:(e,t,i)=>{i.r(t),i.d(t,{default:()=>A})
var r=i(5782),s=i(2760),n=i(9553),o=i(7104),a=i.n(o),l=i(4361),c=i.n(l),u=i(4471),d=i(1603),h=i(2294),p=i(9863),f=(p.A.extend({init(){this._super(...arguments),this.clear()},persist(e){return this._data=JSON.stringify(e||{}),s.Ay.resolve()},restore(){const e=JSON.parse(this._data)||{}
return s.Ay.resolve(e)},clear(){return delete this._data,this._data="{}",s.Ay.resolve()}}),a().extend(c(),{authenticator:null,store:null,isAuthenticated:!1,attemptedTransition:null,init(){this._super(...arguments),this.set("content",{authenticated:{}}),this.set("store",(0,h.getOwner)(this).lookup("session-store:application")),this._busy=!1,this._bindToStoreEvents()},authenticate(e,...t){return this._busy=!0,(0,d.assert)(`Session#authenticate requires the authenticator to be specified, was "${e}"!`,!(0,n.isEmpty)(e)),this._lookupAuthenticator(e).authenticate(...t).then((t=>(this._busy=!1,this._setup(e,t,!0))),(e=>{const t=()=>s.Ay.Promise.reject(e)
return this._busy=!1,this._clear().then(t,t)}))},invalidate(){if(this._busy=!0,this.set("attemptedTransition",null),!this.get("isAuthenticated"))return this._busy=!1,s.Ay.Promise.resolve()
let e=this._lookupAuthenticator(this.authenticator)
return e.invalidate(this.content.authenticated,...arguments).then((()=>(e.off("sessionDataUpdated",this,this._onSessionDataUpdated),this._busy=!1,this._clear(!0))),(e=>(this.trigger("sessionInvalidationFailed",e),this._busy=!1,s.Ay.Promise.reject(e))))},restore(){this._busy=!0
const e=()=>s.Ay.Promise.reject()
return this.store.restore().then((t=>{let{authenticator:i}=t.authenticated||{}
return i?(delete t.authenticated.authenticator,this._lookupAuthenticator(i).restore(t.authenticated).then((e=>(this.set("content",t),this._busy=!1,this._setup(i,e))),(r=>((0,d.debug)(`The authenticator "${i}" rejected to restore the session - invalidating…`),r&&(0,d.debug)(r),this._busy=!1,this._clearWithContent(t).then(e,e))))):(delete(t||{}).authenticated,this._busy=!1,this._clearWithContent(t).then(e,e))}),(()=>(this._busy=!1,this._clear().then(e,e))))},_setup(e,t,i){return i=Boolean(i)&&!this.get("isAuthenticated"),this.setProperties({isAuthenticated:!0,authenticator:e,"content.authenticated":t}),this._bindToAuthenticatorEvents(),this._updateStore().then((()=>{i&&this.trigger("authenticationSucceeded")}),(()=>{this.setProperties({isAuthenticated:!1,authenticator:null,"content.authenticated":{}})}))},_clear(e){return e=Boolean(e)&&this.get("isAuthenticated"),this.setProperties({isAuthenticated:!1,authenticator:null,"content.authenticated":{}}),this._updateStore().then((()=>{e&&this.trigger("invalidationSucceeded")}))},_clearWithContent(e,t){return this.set("content",e),this._clear(t)},setUnknownProperty(e,t){(0,d.assert)('"authenticated" is a reserved key used by Ember Simple Auth!',"authenticated"!==e)
let i=this._super(e,t)
return/^_/.test(e)||this._updateStore(),i},_updateStore(){let e=this.content
return(0,n.isEmpty)(this.authenticator)||(0,u.set)(e,"authenticated",Object.assign({authenticator:this.authenticator},e.authenticated||{})),this.store.persist(e)},_bindToAuthenticatorEvents(){const e=this._lookupAuthenticator(this.authenticator)
e.on("sessionDataUpdated",this,this._onSessionDataUpdated),e.on("sessionDataInvalidated",this,this._onSessionDataInvalidated)},_onSessionDataUpdated(e){this._setup(this.authenticator,e)},_onSessionDataInvalidated(){this._clear(!0)},_bindToStoreEvents(){this.store.on("sessionDataUpdated",(e=>{if(!this._busy){this._busy=!0
let{authenticator:t}=e.authenticated||{}
t?(delete e.authenticated.authenticator,this._lookupAuthenticator(t).restore(e.authenticated).then((i=>{this.set("content",e),this._busy=!1,this._setup(t,i,!0)}),(i=>{(0,d.debug)(`The authenticator "${t}" rejected to restore the session - invalidating…`),i&&(0,d.debug)(i),this._busy=!1,this._clearWithContent(e,!0)}))):(this._busy=!1,this._clearWithContent(e,!0))}}))},_lookupAuthenticator(e){let t=(0,h.getOwner)(this),i=t.lookup(e)
return(0,d.assert)(`No authenticator for factory "${e}" could be found!`,!(0,n.isNone)(i)),(0,h.setOwner)(i,t),i}})),y=i(3848),m=i(1223),g=i(8772),_=i(9519),b=p.A.extend({key:"ember_simple_auth-session",init(){this._super(...arguments),this._isFastBoot=this.hasOwnProperty("_isFastBoot")?this._isFastBoot:(0,_.default)((0,h.getOwner)(this)),this._boundHandler=(0,m.bind)(this,this._handleStorageEvent),this.get("_isFastBoot")||window.addEventListener("storage",this._boundHandler)},willDestroy(){this.get("_isFastBoot")||window.removeEventListener("storage",this._boundHandler)},persist(e){return this._lastData=e,e=JSON.stringify(e||{}),localStorage.setItem(this.key,e),s.Ay.resolve()},restore(){let e=localStorage.getItem(this.key)
return s.Ay.resolve(JSON.parse(e)||{})},clear(){return localStorage.removeItem(this.key),this._lastData={},s.Ay.resolve()},_handleStorageEvent(e){e.key===this.get("key")&&this.restore().then((e=>{(0,g.default)(e,this._lastData)||(this._lastData=e,this.trigger("sessionDataUpdated",e))}))}}),v=i(2735),w=i(1389)
const R=function(e=function(){}){return(0,u.computed)({get(e){return this.get(`_${e}`)},set(t,i){return e.apply(this,[t,i]),this.set(`_${t}`,i),(0,m.scheduleOnce)("actions",this,this.rewriteCookie),i}})}
var k=p.A.extend({_syncDataTimeout:null,_renewExpirationTimeout:null,_cookieDomain:null,cookieDomain:R(),_sameSite:null,sameSite:R(),_cookieName:"ember_simple_auth-session",cookieName:R((function(){this._oldCookieName=this._cookieName})),_cookiePath:"/",cookiePath:R(),_cookieExpirationTime:null,cookieExpirationTime:R((function(e,t){(0,n.isNone)(t)?this.get("_cookies").clear(`${this.get("cookieName")}-expiration_time`):t<90&&(0,d.warn)("The recommended minimum value for `cookieExpirationTime` is 90 seconds. If your value is less than that, the cookie may expire before its expiration time is extended (expiration time is extended every 60 seconds).",!1,{id:"ember-simple-auth.cookieExpirationTime"})})),_cookies:(0,v.inject)("cookies"),_secureCookies(){return this.get("_fastboot.isFastBoot")?"https:"===this.get("_fastboot.request.protocol"):"https:"===window.location.protocol},_isPageVisible(){return!this.get("_fastboot.isFastBoot")&&"visible"===("undefined"!=typeof document&&(document.visibilityState||"visible"))},init(){this._super(...arguments)
let e=(0,h.getOwner)(this)
e&&!this.hasOwnProperty("_fastboot")&&(this._fastboot=e.lookup("service:fastboot"))
let t=this._read(`${this.get("cookieName")}-expiration_time`)
t&&this.set("cookieExpirationTime",parseInt(t,10)),this.get("_fastboot.isFastBoot")?this._renew():(0,m.next)((()=>{this._syncData().then((()=>{this._renewExpiration()}))}))},persist(e){this._lastData=e,e=JSON.stringify(e||{})
let t=this._calculateExpirationTime()
return this._write(e,t),s.Ay.resolve()},restore(){let e=this._read(this.get("cookieName"))
return(0,n.isEmpty)(e)?s.Ay.resolve({}):s.Ay.resolve(JSON.parse(e))},clear(){return this._write("",0),this._lastData={},s.Ay.resolve()},_read(e){return this.get("_cookies").read(e)||""},_calculateExpirationTime(){let e=this._read(`${this.get("cookieName")}-expiration_time`)
return e=e?(new Date).getTime()+1e3*e:null,this.get("cookieExpirationTime")?(new Date).getTime()+1e3*this.get("cookieExpirationTime"):e},_write(e,t){let i={domain:this.get("cookieDomain"),expires:(0,n.isEmpty)(t)?null:new Date(t),path:this.get("cookiePath"),secure:this._secureCookies(),sameSite:this.get("sameSite")}
if(this._oldCookieName&&((0,w.A)([this._oldCookieName,`${this._oldCookieName}-expiration_time`]).forEach((e=>{this.get("_cookies").clear(e)})),delete this._oldCookieName),this.get("_cookies").write(this.get("cookieName"),e,i),!(0,n.isEmpty)(t)){let e=`${this.get("cookieName")}-expiration_time`,t=this.get("_cookies").read(e)
this.get("_cookies").write(e,this.get("cookieExpirationTime")||t,i)}},_syncData(){return this.restore().then((e=>{(0,g.default)(e,this._lastData)||(this._lastData=e,this.trigger("sessionDataUpdated",e)),(0,m.cancel)(this._syncDataTimeout),this._syncDataTimeout=(0,m.later)(this,this._syncData,500)}))},_renew(){return this.restore().then((e=>{if(!(0,n.isEmpty)(e)&&(e.constructor!==Object||0!==Object.keys(e).length)){e="string"===(0,n.typeOf)(e)?e:JSON.stringify(e||{})
let t=this._calculateExpirationTime()
this._write(e,t)}}))},_renewExpiration(){return(0,m.cancel)(this._renewExpirationTimeout),this._renewExpirationTimeout=(0,m.later)(this,this._renewExpiration,6e4),this._isPageVisible()?this._renew():s.Ay.resolve()},rewriteCookie(){const e=this._oldCookieName||this._cookieName,t=this._read(e)
if((0,n.isPresent)(t)){const e=this._calculateExpirationTime()
this._write(t,e)}}}),A={name:"ember-simple-auth",initialize(e){const t=e.resolveRegistration("config:environment"),i=t["ember-simple-auth"]||{}
i.rootURL=t.rootURL||t.baseURL,r.A.load(i),e.register("session-store:adaptive",y.A),e.register("session-store:cookie",k),e.register("session-store:local-storage",b),function(e){e.register("session:main",f)}(e)}}},9129:(e,t,i)=>{i.r(t),i.d(t,{default:()=>p})
var r=i(3991),s=i(2735),n=i.n(s),o=i(2294),a=i(1603),l=i(5782),c=i(9519),u=i(1807)
const d=/^data\./
function h(e){e||(0,a.assert)("Ember Simple Auth: session#setup wasn't called. Make sure to call session#setup in your application route's beforeModel hook.",!1)}var p=n().extend({isAuthenticated:(0,r.readOnly)("session.isAuthenticated"),data:(0,r.readOnly)("session.content"),store:(0,r.readOnly)("session.store"),attemptedTransition:(0,r.alias)("session.attemptedTransition"),session:null,init(){this._super(...arguments),this.set("session",(0,o.getOwner)(this).lookup("session:main"))},set(e,t){if(d.test(e)){const i=`session.${e.replace(d,"")}`
return this._super(i,t)}return this._super(...arguments)},_setupHandlers(){this.get("session").on("authenticationSucceeded",(()=>this.handleAuthentication(l.A.routeAfterAuthentication))),this.get("session").on("invalidationSucceeded",(()=>this.handleInvalidation(l.A.rootURL)))},authenticate(){return this.get("session").authenticate(...arguments)},invalidate(){return this.get("session").invalidate(...arguments)},requireAuthentication(e,t){h(this._setupIsCalled)
let i=function(e,t){let i=e.lookup("service:session"),r=i.get("isAuthenticated")
if(!r)if(t&&(0,c.default)(e)){const i=e.lookup("service:fastboot")
e.lookup("service:cookies").write("ember_simple_auth-redirectTarget",t.intent.url,{path:"/",secure:"https"===i.get("request.protocol")})}else t&&i.set("attemptedTransition",t)
return r}((0,o.getOwner)(this),e)
if(!i){let e=typeof t
"string"===e?(s=t,((r=(0,o.getOwner)(this)).lookup("service:router")||r.lookup("router:main")).transitionTo(s)):"function"===e?t():(0,a.assert)(`The second argument to requireAuthentication must be a String or Function, got "${e}"!`,!1)}var r,s
return i},prohibitAuthentication(e){h(this._setupIsCalled)
let t=this.get("isAuthenticated")
if(t){let t=typeof e
"string"===t?(r=e,((i=(0,o.getOwner)(this)).lookup("service:router")||i.lookup("router:main")).transitionTo(r)):"function"===t?e():(0,a.assert)(`The first argument to prohibitAuthentication must be a String or Function, got "${t}"!`,!1)}var i,r
return!t},handleAuthentication(e){!function(e,t){let i=e.lookup("service:session"),r=i.get("attemptedTransition"),s=e.lookup("service:cookies")
const n=s.read("ember_simple_auth-redirectTarget")
let o=e.lookup("service:router")
r?(r.retry(),i.set("attemptedTransition",null)):n?(o.transitionTo(n),s.clear("ember_simple_auth-redirectTarget")):o.transitionTo(t)}((0,o.getOwner)(this),e)},handleInvalidation(e){!function(e,t){(0,c.default)(e)?e.lookup("service:router").transitionTo(t):u.default.replace(t)}((0,o.getOwner)(this),e)},setup(){return this._setupIsCalled=!0,this._setupHandlers(),this.session.restore().catch((()=>{}))}})},3848:(e,t,i)=>{i.d(t,{A:()=>c})
var r=i(4471),s=i(2735),n=i(2294),o=i(9863)
const a="_ember_simple_auth_test_key",l=function(){return(0,r.computed)({get(e){return this.get(`_${e}`)},set(e,t){this.set(`_${e}`,t)
let i=this.get("_store")
return i&&i.set(e,t),t}})}
var c=o.A.extend({localStorageKey:"ember_simple_auth-session",_cookieDomain:null,cookieDomain:l(),_sameSite:null,sameSite:l(),_cookieName:"ember_simple_auth-session",cookieName:l(),_cookiePath:"/",cookiePath:l(),_cookieExpirationTime:null,cookieExpirationTime:l(),_cookies:(0,s.inject)("cookies"),_isLocalStorageAvailable:(0,r.computed)({get:()=>function(){try{return localStorage.setItem(a,!0),localStorage.removeItem(a),!0}catch(e){return!1}}(),set:(e,t)=>t}),init(){this._super(...arguments)
let e,t=(0,n.getOwner)(this)
if(t&&!this.hasOwnProperty("_fastboot")&&(this._fastboot=t.lookup("service:fastboot")),this.get("_isLocalStorageAvailable")){const i=t.lookup("session-store:local-storage"),r={key:this.get("localStorageKey"),_isFastBoot:!1}
i.setProperties(r),e=i}else{const i=t.lookup("session-store:cookie"),r=this.getProperties("cookieDomain","cookieName","cookieExpirationTime","cookiePath","sameSite")
i.setProperties(r),this.set("cookieExpirationTime",i.get("cookieExpirationTime")),e=i}this.set("_store",e),this._setupStoreEvents(e)},_setupStoreEvents(e){return e.on("sessionDataUpdated",(e=>{this.trigger("sessionDataUpdated",e)})),e},persist(){return this.get("_store").persist(...arguments)},restore(){return this.get("_store").restore()},clear(){return this.get("_store").clear()}})},6038:(e,t,i)=>{i.r(t),i.d(t,{default:()=>r.A})
var r=i(3848)},9863:(e,t,i)=>{i.d(t,{A:()=>l})
var r=i(2760),s=i(4471),n=i.n(s),o=i(4361),a=i.n(o),l=n().extend(a(),{persist:()=>r.Ay.reject(),restore:()=>r.Ay.reject(),clear:()=>r.Ay.reject()})},6613:(e,t,i)=>{function r(e,t,i,r){(e.inject||e.injection).call(e,t,i,r)}i.r(t),i.d(t,{default:()=>r})},9519:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s})
var r=i(1603)
function s(e){(0,r.assert)("You must pass in an owner to isFastBoot!",e&&"function"==typeof e.lookup)
const t=e.lookup("service:fastboot")
return!!t&&t.get("isFastBoot")}},1807:(e,t,i)=>{i.r(t),i.d(t,{default:()=>r})
const r=new class{constructor(){var e,t,i
e=this,t="location",i=window.location,(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var i=t.call(e,"string")
if("object"!=typeof i)return i
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i}replace(...e){this.location.replace(...e)}}},8772:(e,t,i)=>{function r(e,t){return function e(t,i){let r
if(isNaN(t)&&isNaN(i)&&"number"==typeof t&&"number"==typeof i)return!0
if(t===i)return!0
if(!(t instanceof Object&&i instanceof Object))return!1
for(r in i){if(i.hasOwnProperty(r)!==t.hasOwnProperty(r))return!1
if(typeof i[r]!=typeof t[r])return!1}for(r in t){if(i.hasOwnProperty(r)!==t.hasOwnProperty(r))return!1
if(typeof i[r]!=typeof t[r])return!1
if("object"==typeof t[r]){if(!e(t[r],i[r]))return!1}else if(t[r]!==i[r])return!1}return!0}(e,t)}i.r(t),i.d(t,{default:()=>r})},5709:(e,t,i)=>{i.r(t),i.d(t,{default:()=>o})
var r=i(336),s=i.n(r),n=i(863)
class o extends(s()){compute(e){for(let t=0,i=e.length;t<i;t++)if(!1===(0,n.A)(e[t]))return e[t]
return e[e.length-1]}}},1860:(e,t,i)=>{function r(e,t){return e===t}i.r(t),i.d(t,{default:()=>r})},8333:(e,t,i)=>{function r(e,t,i){return i?.forceNumber&&("number"!=typeof e&&(e=Number(e)),"number"!=typeof t&&(t=Number(t))),e>t}i.r(t),i.d(t,{default:()=>r})},7358:(e,t,i)=>{function r(e,t,i){return i?.forceNumber&&("number"!=typeof e&&(e=Number(e)),"number"!=typeof t&&(t=Number(t))),e>=t}i.r(t),i.d(t,{default:()=>r})},5010:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s})
var r=i(1389)
function s(...e){return e.every(r.isArray)}},5038:(e,t,i)=>{i.r(t),i.d(t,{default:()=>r.isEmpty})
var r=i(9553)},8459:(e,t,i)=>{i.r(t),i.d(t,{default:()=>r.isEqual})
var r=i(9553)},8938:(e,t,i)=>{function r(e,t,i){return i?.forceNumber&&("number"!=typeof e&&(e=Number(e)),"number"!=typeof t&&(t=Number(t))),e<t}i.r(t),i.d(t,{default:()=>r})},3555:(e,t,i)=>{function r(e,t,i){return i?.forceNumber&&("number"!=typeof e&&(e=Number(e)),"number"!=typeof t&&(t=Number(t))),e<=t}i.r(t),i.d(t,{default:()=>r})},4932:(e,t,i)=>{function r(e,t){return e!==t}i.r(t),i.d(t,{default:()=>r})},1369:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s})
var r=i(863)
function s(...e){return e.every((e=>!(0,r.A)(e)))}},7559:(e,t,i)=>{i.r(t),i.d(t,{default:()=>o})
var r=i(863),s=i(336),n=i.n(s)
class o extends(n()){compute(e){for(let t=0,i=e.length;t<i;t++)if(!0===(0,r.A)(e[t]))return e[t]
return e[e.length-1]}}},8917:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s})
var r=i(863)
function s(e,t){return(0,r.A)(e)!==(0,r.A)(t)}},863:(e,t,i)=>{i.d(t,{A:()=>s})
var r=i(1389)
function s(e){return"object"==typeof e&&e&&"isTruthy"in e&&"boolean"==typeof e.isTruthy?e.isTruthy:(0,r.isArray)(e)?0!==e.length:!!e}},2760:(e,t,i)=>{function r(e,t){for(var i=0,r=e.length;i<r;i++)if(e[i]===t)return i
return-1}function s(e){var t=e._promiseCallbacks
return t||(t=e._promiseCallbacks={}),t}i.d(t,{Ay:()=>be})
var n={mixin:function(e){return e.on=this.on,e.off=this.off,e.trigger=this.trigger,e._promiseCallbacks=void 0,e},on:function(e,t){if("function"!=typeof t)throw new TypeError("Callback must be a function")
var i=s(this),n=void 0;(n=i[e])||(n=i[e]=[]),-1===r(n,t)&&n.push(t)},off:function(e,t){var i,n=s(this),o=void 0
t?-1!==(i=r(o=n[e],t))&&o.splice(i,1):n[e]=[]},trigger:function(e,t,i){var r
if(r=s(this)[e])for(var n=0;n<r.length;n++)(0,r[n])(t,i)}},o={instrument:!1}
function a(e,t){if(2!==arguments.length)return o[e]
o[e]=t}function l(e){return"function"==typeof e}function c(e){return null!==e&&"object"==typeof e}n.mixin(o)
var u=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)},d=Date.now||function(){return(new Date).getTime()},h=[]
function p(e,t,i){1===h.push({name:e,payload:{key:t._guidKey,id:t._id,eventName:e,detail:t._result,childId:i&&i._id,label:t._label,timeStamp:d(),error:o["instrument-with-stack"]?new Error(t._label):null}})&&setTimeout((function(){for(var e=0;e<h.length;e++){var t=h[e],i=t.payload
i.guid=i.key+i.id,i.childGuid=i.key+i.childId,i.error&&(i.stack=i.error.stack),o.trigger(t.name,t.payload)}h.length=0}),50)}function f(e,t){if(e&&"object"==typeof e&&e.constructor===this)return e
var i=new this(y,t)
return R(i,e),i}function y(){}var m=void 0,g=1,_=2,b=new C
function v(e){try{return e.then}catch(e){return b.error=e,b}}function w(e,t,i){t.constructor===e.constructor&&i===O&&e.constructor.resolve===f?function(e,t){t._state===g?A(e,t._result):t._state===_?(t._onError=null,S(e,t._result)):E(t,void 0,(function(i){t!==i?R(e,i):A(e,i)}),(function(t){return S(e,t)}))}(e,t):i===b?(S(e,b.error),b.error=null):l(i)?function(e,t,i){o.async((function(e){var r=!1,s=function(i,s){try{i.call(s,(function(i){r||(r=!0,t!==i?R(e,i):A(e,i))}),(function(t){r||(r=!0,S(e,t))}))}catch(e){return e}}(i,t,e._label)
!r&&s&&(r=!0,S(e,s))}),e)}(e,t,i):A(e,t)}function R(e,t){var i,r
e===t?A(e,t):(r=typeof(i=t),null===i||"object"!==r&&"function"!==r?A(e,t):w(e,t,v(t)))}function k(e){e._onError&&e._onError(e._result),T(e)}function A(e,t){e._state===m&&(e._result=t,e._state=g,0===e._subscribers.length?o.instrument&&p("fulfilled",e):o.async(T,e))}function S(e,t){e._state===m&&(e._state=_,e._result=t,o.async(k,e))}function E(e,t,i,r){var s=e._subscribers,n=s.length
e._onError=null,s[n]=t,s[n+g]=i,s[n+_]=r,0===n&&e._state&&o.async(T,e)}function T(e){var t=e._subscribers,i=e._state
if(o.instrument&&p(i===g?"fulfilled":"rejected",e),0!==t.length){for(var r=void 0,s=void 0,n=e._result,a=0;a<t.length;a+=3)r=t[a],s=t[a+i],r?F(i,r,s,n):s(n)
e._subscribers.length=0}}function C(){this.error=null}var M=new C
function F(e,t,i,r){var s=l(i),n=void 0,o=void 0
if(s){if(n=function(e,t){try{return e(t)}catch(e){return M.error=e,M}}(i,r),n===M)o=n.error,n.error=null
else if(n===t)return void S(t,new TypeError("A promises callback cannot return that same promise."))}else n=r
t._state!==m||(s&&void 0===o?R(t,n):void 0!==o?S(t,o):e===g?A(t,n):e===_&&S(t,n))}function O(e,t,i){var r=this,s=r._state
if(s===g&&!e||s===_&&!t)return o.instrument&&p("chained",r,r),r
r._onError=null
var n=new r.constructor(y,i),a=r._result
if(o.instrument&&p("chained",r,n),s===m)E(r,n,e,t)
else{var l=s===g?e:t
o.async((function(){return F(s,n,l,a)}))}return n}var j=function(){function e(e,t,i,r){this._instanceConstructor=e,this.promise=new e(y,r),this._abortOnReject=i,this._init.apply(this,arguments)}return e.prototype._init=function(e,t){var i=t.length||0
this.length=i,this._remaining=i,this._result=new Array(i),this._enumerate(t),0===this._remaining&&A(this.promise,this._result)},e.prototype._enumerate=function(e){for(var t=this.length,i=this.promise,r=0;i._state===m&&r<t;r++)this._eachEntry(e[r],r)},e.prototype._settleMaybeThenable=function(e,t){var i=this._instanceConstructor,r=i.resolve
if(r===f){var s=v(e)
if(s===O&&e._state!==m)e._onError=null,this._settledAt(e._state,t,e._result)
else if("function"!=typeof s)this._remaining--,this._result[t]=this._makeResult(g,t,e)
else if(i===$){var n=new i(y)
w(n,e,s),this._willSettleAt(n,t)}else this._willSettleAt(new i((function(t){return t(e)})),t)}else this._willSettleAt(r(e),t)},e.prototype._eachEntry=function(e,t){var i
null!==(i=e)&&"object"==typeof i?this._settleMaybeThenable(e,t):(this._remaining--,this._result[t]=this._makeResult(g,t,e))},e.prototype._settledAt=function(e,t,i){var r=this.promise
r._state===m&&(this._abortOnReject&&e===_?S(r,i):(this._remaining--,this._result[t]=this._makeResult(e,t,i),0===this._remaining&&A(r,this._result)))},e.prototype._makeResult=function(e,t,i){return i},e.prototype._willSettleAt=function(e,t){var i=this
E(e,void 0,(function(e){return i._settledAt(g,t,e)}),(function(e){return i._settledAt(_,t,e)}))},e}()
function z(e,t,i){return e===g?{state:"fulfilled",value:i}:{state:"rejected",reason:i}}var P="rsvp_"+d()+"-",D=0,$=function(){function e(t,i){this._id=D++,this._label=i,this._state=void 0,this._result=void 0,this._subscribers=[],o.instrument&&p("created",this),y!==t&&("function"!=typeof t&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof e?function(e,t){var i=!1
try{t((function(t){i||(i=!0,R(e,t))}),(function(t){i||(i=!0,S(e,t))}))}catch(t){S(e,t)}}(this,t):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return e.prototype._onError=function(e){var t=this
o.after((function(){t._onError&&o.trigger("error",e,t._label)}))},e.prototype.catch=function(e,t){return this.then(void 0,e,t)},e.prototype.finally=function(e,t){var i=this.constructor
return this.then((function(t){return i.resolve(e()).then((function(){return t}))}),(function(t){return i.resolve(e()).then((function(){throw t}))}),t)},e}()
function q(){this.value=void 0}$.cast=f,$.all=function(e,t){return u(e)?new j(this,e,!0,t).promise:this.reject(new TypeError("Promise.all must be called with an array"),t)},$.race=function(e,t){var i=new this(y,t)
if(!u(e))return S(i,new TypeError("Promise.race must be called with an array")),i
for(var r=0;i._state===m&&r<e.length;r++)E(this.resolve(e[r]),void 0,(function(e){return R(i,e)}),(function(e){return S(i,e)}))
return i},$.resolve=f,$.reject=function(e,t){var i=new this(y,t)
return S(i,e),i},$.prototype._guidKey=P,$.prototype.then=O
var x=new q,N=new q
function I(e,t,i){try{e.apply(t,i)}catch(e){return x.value=e,x}}function L(e,t){return{then:function(i,r){return e.call(t,i,r)}}}function B(e){return!(!e||"object"!=typeof e)&&(e.constructor===$||function(e){try{return e.then}catch(e){return x.value=e,x}}(e))}var U=function(e){function t(t,i,r){return function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,t,i,!1,r))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(j)
U.prototype._makeResult=z
var H=Object.prototype.hasOwnProperty,V=function(e){function t(t,i){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],s=arguments[3]
return function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,t,i,r,s))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype._init=function(e,t){this._result={},this._enumerate(t),0===this._remaining&&A(this.promise,this._result)},t.prototype._enumerate=function(e){var t=this.promise,i=[]
for(var r in e)H.call(e,r)&&i.push({position:r,entry:e[r]})
var s=i.length
this._remaining=s
for(var n=void 0,o=0;t._state===m&&o<s;o++)n=i[o],this._eachEntry(n.entry,n.position)},t}(j),K=function(e){function t(t,i,r){return function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,t,i,!1,r))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(V)
function W(e,t){return $.resolve(e,t)}function G(e,t){return $.all(e,t)}K.prototype._makeResult=z
var J=0,Q=void 0
function Y(e,t){se[J]=e,se[J+1]=t,2===(J+=2)&&pe()}var X="undefined"!=typeof window?window:void 0,Z=X||{},ee=Z.MutationObserver||Z.WebKitMutationObserver,te="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),ie="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel
function re(){return function(){return setTimeout(ne,1)}}var se=new Array(1e3)
function ne(){for(var e=0;e<J;e+=2)(0,se[e])(se[e+1]),se[e]=void 0,se[e+1]=void 0
J=0}var oe,ae,le,ce,ue,de,he,pe=void 0
if(te?(ue=process.nextTick,de=process.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/),Array.isArray(de)&&"0"===de[1]&&"10"===de[2]&&(ue=setImmediate),pe=function(){return ue(ne)}):ee?(ae=0,le=new ee(ne),ce=document.createTextNode(""),le.observe(ce,{characterData:!0}),pe=function(){return ce.data=ae=++ae%2}):ie?((oe=new MessageChannel).port1.onmessage=ne,pe=function(){return oe.port2.postMessage(0)}):pe=void 0===X?function(){try{var e=i(7326)
return void 0!==(Q=e.runOnLoop||e.runOnContext)?function(){Q(ne)}:re()}catch(e){return re()}}():re(),"object"==typeof self)self
else{if("object"!=typeof global)throw new Error("no global: `self` or `global` found")
global}function fe(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}o.async=Y,o.after=function(e){return setTimeout(e,0)}
var ye=W
function me(){o.on.apply(o,arguments)}if("undefined"!=typeof window&&"object"==typeof window.__PROMISE_INSTRUMENTATION__){var ge=window.__PROMISE_INSTRUMENTATION__
for(var _e in a("instrument",!0),ge)ge.hasOwnProperty(_e)&&me(_e,ge[_e])}const be=(fe(he={asap:Y,cast:ye,Promise:$,EventTarget:n,all:function(e,t){return $.all(e,t)},allSettled:function(e,t){return u(e)?new U($,e,t).promise:$.reject(new TypeError("Promise.allSettled must be called with an array"),t)},race:function(e,t){return $.race(e,t)},hash:function(e,t){return c(e)?new V($,e,t).promise:$.reject(new TypeError("Promise.hash must be called with an object"),t)},hashSettled:function(e,t){return c(e)?new K($,e,!1,t).promise:$.reject(new TypeError("RSVP.hashSettled must be called with an object"),t)},rethrow:function(e){throw setTimeout((function(){throw e})),e},defer:function(e){var t={resolve:void 0,reject:void 0}
return t.promise=new $((function(e,i){t.resolve=e,t.reject=i}),e),t},denodeify:function(e,t){var i=function(){for(var i=arguments.length,r=new Array(i+1),s=!1,n=0;n<i;++n){var o=arguments[n]
if(!s){if((s=B(o))===N){var a=new $(y)
return S(a,N.value),a}s&&!0!==s&&(o=L(s,o))}r[n]=o}var l=new $(y)
return r[i]=function(e,i){e?S(l,e):void 0===t?R(l,i):!0===t?R(l,function(e){for(var t=e.length,i=new Array(t-1),r=1;r<t;r++)i[r-1]=e[r]
return i}(arguments)):u(t)?R(l,function(e,t){for(var i={},r=e.length,s=new Array(r),n=0;n<r;n++)s[n]=e[n]
for(var o=0;o<t.length;o++)i[t[o]]=s[o+1]
return i}(arguments,t)):R(l,i)},s?function(e,t,i,r){return $.all(t).then((function(t){var s=I(i,r,t)
return s===x&&S(e,s.value),e}))}(l,r,e,this):function(e,t,i,r){var s=I(i,r,t)
return s===x&&S(e,s.value),e}(l,r,e,this)}
return i.__proto__=e,i},configure:a,on:me,off:function(){o.off.apply(o,arguments)},resolve:W,reject:function(e,t){return $.reject(e,t)},map:function(e,t,i){return u(e)?l(t)?$.all(e,i).then((function(e){for(var r=e.length,s=new Array(r),n=0;n<r;n++)s[n]=t(e[n])
return $.all(s,i)})):$.reject(new TypeError("RSVP.map expects a function as a second argument"),i):$.reject(new TypeError("RSVP.map must be called with an array"),i)}},"async",(function(e,t){return o.async(e,t)})),fe(he,"filter",(function(e,t,i){return u(e)||c(e)&&void 0!==e.then?l(t)?(u(e)?G(e,i):function(e,t){return $.resolve(e,t).then((function(e){return G(e,t)}))}(e,i)).then((function(e){for(var r=e.length,s=new Array(r),n=0;n<r;n++)s[n]=t(e[n])
return G(s,i).then((function(t){for(var i=new Array(r),s=0,n=0;n<r;n++)t[n]&&(i[s]=e[n],s++)
return i.length=s,i}))})):$.reject(new TypeError("RSVP.filter expects function as a second argument"),i):$.reject(new TypeError("RSVP.filter must be called with an array or promise"),i)})),he)}}])
