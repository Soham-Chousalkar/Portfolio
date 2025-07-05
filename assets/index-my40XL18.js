(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yo="158",Cu=0,il=1,Pu=2,Kc=1,Zc=2,Dn=3,ri=0,Oe=1,Nn=2,Jn=0,lr=1,rl=2,sl=3,al=4,Lu=5,Mi=100,Du=101,Uu=102,ol=103,ll=104,Iu=200,Nu=201,Ou=202,Fu=203,Ya=204,ja=205,Bu=206,zu=207,Gu=208,ku=209,Hu=210,Vu=211,Wu=212,Xu=213,qu=214,Yu=0,ju=1,Ku=2,Us=3,Zu=4,$u=5,Ju=6,Qu=7,Eo=0,tf=1,ef=2,Qn=0,nf=1,rf=2,sf=3,af=4,of=5,$c=300,dr=301,pr=302,Ka=303,Za=304,Ys=306,$a=1e3,_n=1001,Ja=1002,Ue=1003,cl=1004,sa=1005,an=1006,lf=1007,kr=1008,ti=1009,cf=1010,hf=1011,To=1012,Jc=1013,Yn=1014,jn=1015,Hr=1016,Qc=1017,th=1018,bi=1020,uf=1021,gn=1023,ff=1024,df=1025,Ai=1026,mr=1027,pf=1028,eh=1029,mf=1030,nh=1031,ih=1033,aa=33776,oa=33777,la=33778,ca=33779,hl=35840,ul=35841,fl=35842,dl=35843,_f=36196,pl=37492,ml=37496,_l=37808,gl=37809,vl=37810,xl=37811,Ml=37812,Sl=37813,yl=37814,El=37815,Tl=37816,bl=37817,Al=37818,wl=37819,Rl=37820,Cl=37821,ha=36492,Pl=36494,Ll=36495,gf=36283,Dl=36284,Ul=36285,Il=36286,rh=3e3,wi=3001,vf=3200,xf=3201,bo=0,Mf=1,cn="",xe="srgb",Bn="srgb-linear",Ao="display-p3",js="display-p3-linear",Is="linear",Zt="srgb",Ns="rec709",Os="p3",Fi=7680,Nl=519,Sf=512,yf=513,Ef=514,Tf=515,bf=516,Af=517,wf=518,Rf=519,Qa=35044,Ol="300 es",to=1035,Fn=2e3,Fs=2001;class Er{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ua=Math.PI/180,eo=180/Math.PI;function ei(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(be[r&255]+be[r>>8&255]+be[r>>16&255]+be[r>>24&255]+"-"+be[t&255]+be[t>>8&255]+"-"+be[t>>16&15|64]+be[t>>24&255]+"-"+be[e&63|128]+be[e>>8&255]+"-"+be[e>>16&255]+be[e>>24&255]+be[n&255]+be[n>>8&255]+be[n>>16&255]+be[n>>24&255]).toLowerCase()}function Ne(r,t,e){return Math.max(t,Math.min(e,r))}function Cf(r,t){return(r%t+t)%t}function fa(r,t,e){return(1-e)*r+e*t}function Fl(r){return(r&r-1)===0&&r!==0}function no(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function On(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Yt(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Rt{constructor(t=0,e=0){Rt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nt{constructor(t,e,n,i,s,a,o,l,c){Nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c)}set(t,e,n,i,s,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],m=n[5],g=n[8],_=i[0],p=i[3],d=i[6],E=i[1],x=i[4],M=i[7],S=i[2],A=i[5],b=i[8];return s[0]=a*_+o*E+l*S,s[3]=a*p+o*x+l*A,s[6]=a*d+o*M+l*b,s[1]=c*_+h*E+u*S,s[4]=c*p+h*x+u*A,s[7]=c*d+h*M+u*b,s[2]=f*_+m*E+g*S,s[5]=f*p+m*x+g*A,s[8]=f*d+m*M+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*s,m=c*s-a*l,g=e*u+n*f+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(o*n-i*a)*_,t[3]=f*_,t[4]=(h*e-i*l)*_,t[5]=(i*s-o*e)*_,t[6]=m*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(da.makeScale(t,e)),this}rotate(t){return this.premultiply(da.makeRotation(-t)),this}translate(t,e){return this.premultiply(da.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const da=new Nt;function sh(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Bs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Pf(){const r=Bs("canvas");return r.style.display="block",r}const Bl={};function Fr(r){r in Bl||(Bl[r]=!0,console.warn(r))}const zl=new Nt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Gl=new Nt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ns={[Bn]:{transfer:Is,primaries:Ns,toReference:r=>r,fromReference:r=>r},[xe]:{transfer:Zt,primaries:Ns,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[js]:{transfer:Is,primaries:Os,toReference:r=>r.applyMatrix3(Gl),fromReference:r=>r.applyMatrix3(zl)},[Ao]:{transfer:Zt,primaries:Os,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Gl),fromReference:r=>r.applyMatrix3(zl).convertLinearToSRGB()}},Lf=new Set([Bn,js]),Wt={enabled:!0,_workingColorSpace:Bn,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Lf.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=ns[t].toReference,i=ns[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return ns[r].primaries},getTransfer:function(r){return r===cn?Is:ns[r].transfer}};function cr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function pa(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Bi;class ah{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Bi===void 0&&(Bi=Bs("canvas")),Bi.width=t.width,Bi.height=t.height;const n=Bi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Bi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Bs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=cr(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(cr(e[n]/255)*255):e[n]=cr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Df=0;class oh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=ei(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(ma(i[a].image)):s.push(ma(i[a]))}else s=ma(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function ma(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ah.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Uf=0;class Fe extends Er{constructor(t=Fe.DEFAULT_IMAGE,e=Fe.DEFAULT_MAPPING,n=_n,i=_n,s=an,a=kr,o=gn,l=ti,c=Fe.DEFAULT_ANISOTROPY,h=cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=ei(),this.name="",this.source=new oh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Fr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===wi?xe:cn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$c)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $a:t.x=t.x-Math.floor(t.x);break;case _n:t.x=t.x<0?0:1;break;case Ja:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $a:t.y=t.y-Math.floor(t.y);break;case _n:t.y=t.y<0?0:1;break;case Ja:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Fr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===xe?wi:rh}set encoding(t){Fr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===wi?xe:cn}}Fe.DEFAULT_IMAGE=null;Fe.DEFAULT_MAPPING=$c;Fe.DEFAULT_ANISOTROPY=1;class Me{constructor(t=0,e=0,n=0,i=1){Me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],m=l[5],g=l[9],_=l[2],p=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,M=(m+1)/2,S=(d+1)/2,A=(h+f)/4,b=(u+_)/4,P=(g+p)/4;return x>M&&x>S?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=A/n,s=b/n):M>S?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=A/i,s=P/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=b/s,i=P/s),this.set(n,i,s,e),this}let E=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(u-_)/E,this.z=(f-h)/E,this.w=Math.acos((c+m+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class If extends Er{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(Fr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===wi?xe:cn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Fe(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new oh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Di extends If{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class lh extends Fe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nf extends Fe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zr{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const f=s[a+0],m=s[a+1],g=s[a+2],_=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==f||c!==m||h!==g){let p=1-o;const d=l*f+c*m+h*g+u*_,E=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const S=Math.sqrt(x),A=Math.atan2(S,d*E);p=Math.sin(p*A)/S,o=Math.sin(o*A)/S}const M=o*E;if(l=l*p+f*M,c=c*p+m*M,h=h*p+g*M,u=u*p+_*M,p===1-o){const S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],f=s[a+1],m=s[a+2],g=s[a+3];return t[e]=o*g+h*u+l*m-c*f,t[e+1]=l*g+h*f+c*u-o*m,t[e+2]=c*g+h*m+o*f-l*u,t[e+3]=h*g-o*u-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),f=l(n/2),m=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"YXZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"ZXY":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"ZYX":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"YZX":this._x=f*h*u+c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u-f*m*g;break;case"XZY":this._x=f*h*u-c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(a-i)*m}else if(n>o&&n>u){const m=2*Math.sqrt(1+n-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(s+c)/m}else if(o>u){const m=2*Math.sqrt(1+o-n-u);this._w=(s-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-n-o);this._w=(a-i)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ne(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(kl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(kl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-s*i),u=2*(s*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return _a.copy(this).projectOnVector(t),this.sub(_a)}reflect(t){return this.sub(_a.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _a=new D,kl=new Zr;class $r{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,dn):dn.fromBufferAttribute(s,a),dn.applyMatrix4(t.matrixWorld),this.expandByPoint(dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),is.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),is.copy(n.boundingBox)),is.applyMatrix4(t.matrixWorld),this.union(is)}const i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,dn),dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ar),rs.subVectors(this.max,Ar),zi.subVectors(t.a,Ar),Gi.subVectors(t.b,Ar),ki.subVectors(t.c,Ar),kn.subVectors(Gi,zi),Hn.subVectors(ki,Gi),ui.subVectors(zi,ki);let e=[0,-kn.z,kn.y,0,-Hn.z,Hn.y,0,-ui.z,ui.y,kn.z,0,-kn.x,Hn.z,0,-Hn.x,ui.z,0,-ui.x,-kn.y,kn.x,0,-Hn.y,Hn.x,0,-ui.y,ui.x,0];return!ga(e,zi,Gi,ki,rs)||(e=[1,0,0,0,1,0,0,0,1],!ga(e,zi,Gi,ki,rs))?!1:(ss.crossVectors(kn,Hn),e=[ss.x,ss.y,ss.z],ga(e,zi,Gi,ki,rs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const wn=[new D,new D,new D,new D,new D,new D,new D,new D],dn=new D,is=new $r,zi=new D,Gi=new D,ki=new D,kn=new D,Hn=new D,ui=new D,Ar=new D,rs=new D,ss=new D,fi=new D;function ga(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){fi.fromArray(r,s);const o=i.x*Math.abs(fi.x)+i.y*Math.abs(fi.y)+i.z*Math.abs(fi.z),l=t.dot(fi),c=e.dot(fi),h=n.dot(fi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Of=new $r,wr=new D,va=new D;class Ks{constructor(t=new D,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Of.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;wr.subVectors(t,this.center);const e=wr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(wr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(va.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(wr.copy(t.center).add(va)),this.expandByPoint(wr.copy(t.center).sub(va))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Rn=new D,xa=new D,as=new D,Vn=new D,Ma=new D,os=new D,Sa=new D;class wo{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Rn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Rn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Rn.copy(this.origin).addScaledVector(this.direction,e),Rn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){xa.copy(t).add(e).multiplyScalar(.5),as.copy(e).sub(t).normalize(),Vn.copy(this.origin).sub(xa);const s=t.distanceTo(e)*.5,a=-this.direction.dot(as),o=Vn.dot(this.direction),l=-Vn.dot(as),c=Vn.lengthSq(),h=Math.abs(1-a*a);let u,f,m,g;if(h>0)if(u=a*l-o,f=a*o-l,g=s*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,m=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=s,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*s+o)),f=u>0?-s:Math.min(Math.max(-s,-l),s),m=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(u=Math.max(0,-(a*s+o)),f=u>0?s:Math.min(Math.max(-s,-l),s),m=-u*u+f*(f+2*l)+c);else f=a>0?-s:s,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(xa).addScaledVector(as,f),m}intersectSphere(t,e){Rn.subVectors(t.center,this.origin);const n=Rn.dot(this.direction),i=Rn.dot(Rn)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Rn)!==null}intersectTriangle(t,e,n,i,s){Ma.subVectors(e,t),os.subVectors(n,t),Sa.crossVectors(Ma,os);let a=this.direction.dot(Sa),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Vn.subVectors(this.origin,t);const l=o*this.direction.dot(os.crossVectors(Vn,os));if(l<0)return null;const c=o*this.direction.dot(Ma.cross(Vn));if(c<0||l+c>a)return null;const h=-o*Vn.dot(Sa);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class se{constructor(t,e,n,i,s,a,o,l,c,h,u,f,m,g,_,p){se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c,h,u,f,m,g,_,p)}set(t,e,n,i,s,a,o,l,c,h,u,f,m,g,_,p){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=i,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=m,d[7]=g,d[11]=_,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new se().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Hi.setFromMatrixColumn(t,0).length(),s=1/Hi.setFromMatrixColumn(t,1).length(),a=1/Hi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const f=a*h,m=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=m+g*c,e[5]=f-_*c,e[9]=-o*l,e[2]=_-f*c,e[6]=g+m*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*h,m=l*u,g=c*h,_=c*u;e[0]=f+_*o,e[4]=g*o-m,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=m*o-g,e[6]=_+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*h,m=l*u,g=c*h,_=c*u;e[0]=f-_*o,e[4]=-a*u,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*h,e[9]=_-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*h,m=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=g*c-m,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=m*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,m=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-f*u,e[8]=g*u+m,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*u+g,e[10]=f-_*u}else if(t.order==="XZY"){const f=a*l,m=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=a*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=o*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ff,t,Bf)}lookAt(t,e,n){const i=this.elements;return Ye.subVectors(t,e),Ye.lengthSq()===0&&(Ye.z=1),Ye.normalize(),Wn.crossVectors(n,Ye),Wn.lengthSq()===0&&(Math.abs(n.z)===1?Ye.x+=1e-4:Ye.z+=1e-4,Ye.normalize(),Wn.crossVectors(n,Ye)),Wn.normalize(),ls.crossVectors(Ye,Wn),i[0]=Wn.x,i[4]=ls.x,i[8]=Ye.x,i[1]=Wn.y,i[5]=ls.y,i[9]=Ye.y,i[2]=Wn.z,i[6]=ls.z,i[10]=Ye.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],m=n[13],g=n[2],_=n[6],p=n[10],d=n[14],E=n[3],x=n[7],M=n[11],S=n[15],A=i[0],b=i[4],P=i[8],v=i[12],w=i[1],G=i[5],F=i[9],q=i[13],C=i[2],N=i[6],X=i[10],W=i[14],Z=i[3],K=i[7],j=i[11],U=i[15];return s[0]=a*A+o*w+l*C+c*Z,s[4]=a*b+o*G+l*N+c*K,s[8]=a*P+o*F+l*X+c*j,s[12]=a*v+o*q+l*W+c*U,s[1]=h*A+u*w+f*C+m*Z,s[5]=h*b+u*G+f*N+m*K,s[9]=h*P+u*F+f*X+m*j,s[13]=h*v+u*q+f*W+m*U,s[2]=g*A+_*w+p*C+d*Z,s[6]=g*b+_*G+p*N+d*K,s[10]=g*P+_*F+p*X+d*j,s[14]=g*v+_*q+p*W+d*U,s[3]=E*A+x*w+M*C+S*Z,s[7]=E*b+x*G+M*N+S*K,s[11]=E*P+x*F+M*X+S*j,s[15]=E*v+x*q+M*W+S*U,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],m=t[14],g=t[3],_=t[7],p=t[11],d=t[15];return g*(+s*l*u-i*c*u-s*o*f+n*c*f+i*o*m-n*l*m)+_*(+e*l*m-e*c*f+s*a*f-i*a*m+i*c*h-s*l*h)+p*(+e*c*u-e*o*m-s*a*u+n*a*m+s*o*h-n*c*h)+d*(-i*o*h-e*l*u+e*o*f+i*a*u-n*a*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],m=t[11],g=t[12],_=t[13],p=t[14],d=t[15],E=u*p*c-_*f*c+_*l*m-o*p*m-u*l*d+o*f*d,x=g*f*c-h*p*c-g*l*m+a*p*m+h*l*d-a*f*d,M=h*_*c-g*u*c+g*o*m-a*_*m-h*o*d+a*u*d,S=g*u*l-h*_*l-g*o*f+a*_*f+h*o*p-a*u*p,A=e*E+n*x+i*M+s*S;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return t[0]=E*b,t[1]=(_*f*s-u*p*s-_*i*m+n*p*m+u*i*d-n*f*d)*b,t[2]=(o*p*s-_*l*s+_*i*c-n*p*c-o*i*d+n*l*d)*b,t[3]=(u*l*s-o*f*s-u*i*c+n*f*c+o*i*m-n*l*m)*b,t[4]=x*b,t[5]=(h*p*s-g*f*s+g*i*m-e*p*m-h*i*d+e*f*d)*b,t[6]=(g*l*s-a*p*s-g*i*c+e*p*c+a*i*d-e*l*d)*b,t[7]=(a*f*s-h*l*s+h*i*c-e*f*c-a*i*m+e*l*m)*b,t[8]=M*b,t[9]=(g*u*s-h*_*s-g*n*m+e*_*m+h*n*d-e*u*d)*b,t[10]=(a*_*s-g*o*s+g*n*c-e*_*c-a*n*d+e*o*d)*b,t[11]=(h*o*s-a*u*s-h*n*c+e*u*c+a*n*m-e*o*m)*b,t[12]=S*b,t[13]=(h*_*i-g*u*i+g*n*f-e*_*f-h*n*p+e*u*p)*b,t[14]=(g*o*i-a*_*i-g*n*l+e*_*l+a*n*p-e*o*p)*b,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*f+e*o*f)*b,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,u=o+o,f=s*c,m=s*h,g=s*u,_=a*h,p=a*u,d=o*u,E=l*c,x=l*h,M=l*u,S=n.x,A=n.y,b=n.z;return i[0]=(1-(_+d))*S,i[1]=(m+M)*S,i[2]=(g-x)*S,i[3]=0,i[4]=(m-M)*A,i[5]=(1-(f+d))*A,i[6]=(p+E)*A,i[7]=0,i[8]=(g+x)*b,i[9]=(p-E)*b,i[10]=(1-(f+_))*b,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Hi.set(i[0],i[1],i[2]).length();const a=Hi.set(i[4],i[5],i[6]).length(),o=Hi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],pn.copy(this);const c=1/s,h=1/a,u=1/o;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=h,pn.elements[5]*=h,pn.elements[6]*=h,pn.elements[8]*=u,pn.elements[9]*=u,pn.elements[10]*=u,e.setFromRotationMatrix(pn),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=Fn){const l=this.elements,c=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let m,g;if(o===Fn)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Fs)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=Fn){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(a-s),f=(e+t)*c,m=(n+i)*h;let g,_;if(o===Fn)g=(a+s)*u,_=-2*u;else if(o===Fs)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Hi=new D,pn=new se,Ff=new D(0,0,0),Bf=new D(1,1,1),Wn=new D,ls=new D,Ye=new D,Hl=new se,Vl=new Zr;class Jr{constructor(t=0,e=0,n=0,i=Jr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(Ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ne(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Hl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Hl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Vl.setFromEuler(this),this.setFromQuaternion(Vl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jr.DEFAULT_ORDER="XYZ";class Ro{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let zf=0;const Wl=new D,Vi=new Zr,Cn=new se,cs=new D,Rr=new D,Gf=new D,kf=new Zr,Xl=new D(1,0,0),ql=new D(0,1,0),Yl=new D(0,0,1),Hf={type:"added"},Vf={type:"removed"};class de extends Er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=de.DEFAULT_UP.clone();const t=new D,e=new Jr,n=new Zr,i=new D(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new se},normalMatrix:{value:new Nt}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=de.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Ro,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.premultiply(Vi),this}rotateX(t){return this.rotateOnAxis(Xl,t)}rotateY(t){return this.rotateOnAxis(ql,t)}rotateZ(t){return this.rotateOnAxis(Yl,t)}translateOnAxis(t,e){return Wl.copy(t).applyQuaternion(this.quaternion),this.position.add(Wl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Xl,t)}translateY(t){return this.translateOnAxis(ql,t)}translateZ(t){return this.translateOnAxis(Yl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?cs.copy(t):cs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(Rr,cs,this.up):Cn.lookAt(cs,Rr,this.up),this.quaternion.setFromRotationMatrix(Cn),i&&(Cn.extractRotation(i.matrixWorld),Vi.setFromRotationMatrix(Cn),this.quaternion.premultiply(Vi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Hf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Vf)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Cn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Cn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectsByProperty(t,e);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,t,Gf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,kf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}de.DEFAULT_UP=new D(0,1,0);de.DEFAULT_MATRIX_AUTO_UPDATE=!0;de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mn=new D,Pn=new D,ya=new D,Ln=new D,Wi=new D,Xi=new D,jl=new D,Ea=new D,Ta=new D,ba=new D;let hs=!1;class on{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),mn.subVectors(t,e),i.cross(mn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){mn.subVectors(i,e),Pn.subVectors(n,e),ya.subVectors(t,e);const a=mn.dot(mn),o=mn.dot(Pn),l=mn.dot(ya),c=Pn.dot(Pn),h=Pn.dot(ya),u=a*c-o*o;if(u===0)return s.set(-2,-1,-1);const f=1/u,m=(c*l-o*h)*f,g=(a*h-o*l)*f;return s.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Ln),Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getUV(t,e,n,i,s,a,o,l){return hs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),hs=!0),this.getInterpolation(t,e,n,i,s,a,o,l)}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,Ln),l.setScalar(0),l.addScaledVector(s,Ln.x),l.addScaledVector(a,Ln.y),l.addScaledVector(o,Ln.z),l}static isFrontFacing(t,e,n,i){return mn.subVectors(n,e),Pn.subVectors(t,e),mn.cross(Pn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mn.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),mn.cross(Pn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return on.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return on.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return hs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),hs=!0),on.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}getInterpolation(t,e,n,i,s){return on.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return on.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return on.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let a,o;Wi.subVectors(i,n),Xi.subVectors(s,n),Ea.subVectors(t,n);const l=Wi.dot(Ea),c=Xi.dot(Ea);if(l<=0&&c<=0)return e.copy(n);Ta.subVectors(t,i);const h=Wi.dot(Ta),u=Xi.dot(Ta);if(h>=0&&u<=h)return e.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Wi,a);ba.subVectors(t,s);const m=Wi.dot(ba),g=Xi.dot(ba);if(g>=0&&m<=g)return e.copy(s);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Xi,o);const p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return jl.subVectors(s,i),o=(u-h)/(u-h+(m-g)),e.copy(i).addScaledVector(jl,o);const d=1/(p+_+f);return a=_*d,o=f*d,e.copy(n).addScaledVector(Wi,a).addScaledVector(Xi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ch={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xn={h:0,s:0,l:0},us={h:0,s:0,l:0};function Aa(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Ot{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Wt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Wt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Wt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Wt.workingColorSpace){if(t=Cf(t,1),e=Ne(e,0,1),n=Ne(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Aa(a,s,t+1/3),this.g=Aa(a,s,t),this.b=Aa(a,s,t-1/3)}return Wt.toWorkingColorSpace(this,i),this}setStyle(t,e=xe){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=xe){const n=ch[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=cr(t.r),this.g=cr(t.g),this.b=cr(t.b),this}copyLinearToSRGB(t){return this.r=pa(t.r),this.g=pa(t.g),this.b=pa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xe){return Wt.fromWorkingColorSpace(Ae.copy(this),t),Math.round(Ne(Ae.r*255,0,255))*65536+Math.round(Ne(Ae.g*255,0,255))*256+Math.round(Ne(Ae.b*255,0,255))}getHexString(t=xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Wt.workingColorSpace){Wt.fromWorkingColorSpace(Ae.copy(this),e);const n=Ae.r,i=Ae.g,s=Ae.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Wt.workingColorSpace){return Wt.fromWorkingColorSpace(Ae.copy(this),e),t.r=Ae.r,t.g=Ae.g,t.b=Ae.b,t}getStyle(t=xe){Wt.fromWorkingColorSpace(Ae.copy(this),t);const e=Ae.r,n=Ae.g,i=Ae.b;return t!==xe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Xn),this.setHSL(Xn.h+t,Xn.s+e,Xn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Xn),t.getHSL(us);const n=fa(Xn.h,us.h,e),i=fa(Xn.s,us.s,e),s=fa(Xn.l,us.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ae=new Ot;Ot.NAMES=ch;let Wf=0;class oi extends Er{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=ei(),this.name="",this.type="Material",this.blending=lr,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ya,this.blendDst=ja,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=Us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fi,this.stencilZFail=Fi,this.stencilZPass=Fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==lr&&(n.blending=this.blending),this.side!==ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ya&&(n.blendSrc=this.blendSrc),this.blendDst!==ja&&(n.blendDst=this.blendDst),this.blendEquation!==Mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Us&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Fi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Fi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class xn extends oi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Eo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const he=new D,fs=new Rt;class Je{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Qa,this.updateRange={offset:0,count:-1},this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)fs.fromBufferAttribute(this,e),fs.applyMatrix3(t),this.setXY(e,fs.x,fs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.applyMatrix3(t),this.setXYZ(e,he.x,he.y,he.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.applyMatrix4(t),this.setXYZ(e,he.x,he.y,he.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.applyNormalMatrix(t),this.setXYZ(e,he.x,he.y,he.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.transformDirection(t),this.setXYZ(e,he.x,he.y,he.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=On(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=On(e,this.array)),e}setX(t,e){return this.normalized&&(e=Yt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=On(e,this.array)),e}setY(t,e){return this.normalized&&(e=Yt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=On(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Yt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=On(e,this.array)),e}setW(t,e){return this.normalized&&(e=Yt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Yt(e,this.array),n=Yt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Yt(e,this.array),n=Yt(n,this.array),i=Yt(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Yt(e,this.array),n=Yt(n,this.array),i=Yt(i,this.array),s=Yt(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Qa&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}class hh extends Je{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class uh extends Je{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ye extends Je{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Xf=0;const rn=new se,wa=new de,qi=new D,je=new $r,Cr=new $r,ve=new D;class He extends Er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=ei(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(sh(t)?uh:hh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Nt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return rn.makeRotationFromQuaternion(t),this.applyMatrix4(rn),this}rotateX(t){return rn.makeRotationX(t),this.applyMatrix4(rn),this}rotateY(t){return rn.makeRotationY(t),this.applyMatrix4(rn),this}rotateZ(t){return rn.makeRotationZ(t),this.applyMatrix4(rn),this}translate(t,e,n){return rn.makeTranslation(t,e,n),this.applyMatrix4(rn),this}scale(t,e,n){return rn.makeScale(t,e,n),this.applyMatrix4(rn),this}lookAt(t){return wa.lookAt(t),wa.updateMatrix(),this.applyMatrix4(wa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ye(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $r);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];je.setFromBufferAttribute(s),this.morphTargetsRelative?(ve.addVectors(this.boundingBox.min,je.min),this.boundingBox.expandByPoint(ve),ve.addVectors(this.boundingBox.max,je.max),this.boundingBox.expandByPoint(ve)):(this.boundingBox.expandByPoint(je.min),this.boundingBox.expandByPoint(je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ks);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(je.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Cr.setFromBufferAttribute(o),this.morphTargetsRelative?(ve.addVectors(je.min,Cr.min),je.expandByPoint(ve),ve.addVectors(je.max,Cr.max),je.expandByPoint(ve)):(je.expandByPoint(Cr.min),je.expandByPoint(Cr.max))}je.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)ve.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(ve));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ve.fromBufferAttribute(o,c),l&&(qi.fromBufferAttribute(t,c),ve.add(qi)),i=Math.max(i,n.distanceToSquared(ve))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,a=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Je(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let w=0;w<o;w++)c[w]=new D,h[w]=new D;const u=new D,f=new D,m=new D,g=new Rt,_=new Rt,p=new Rt,d=new D,E=new D;function x(w,G,F){u.fromArray(i,w*3),f.fromArray(i,G*3),m.fromArray(i,F*3),g.fromArray(a,w*2),_.fromArray(a,G*2),p.fromArray(a,F*2),f.sub(u),m.sub(u),_.sub(g),p.sub(g);const q=1/(_.x*p.y-p.x*_.y);isFinite(q)&&(d.copy(f).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(q),E.copy(m).multiplyScalar(_.x).addScaledVector(f,-p.x).multiplyScalar(q),c[w].add(d),c[G].add(d),c[F].add(d),h[w].add(E),h[G].add(E),h[F].add(E))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let w=0,G=M.length;w<G;++w){const F=M[w],q=F.start,C=F.count;for(let N=q,X=q+C;N<X;N+=3)x(n[N+0],n[N+1],n[N+2])}const S=new D,A=new D,b=new D,P=new D;function v(w){b.fromArray(s,w*3),P.copy(b);const G=c[w];S.copy(G),S.sub(b.multiplyScalar(b.dot(G))).normalize(),A.crossVectors(P,G);const q=A.dot(h[w])<0?-1:1;l[w*4]=S.x,l[w*4+1]=S.y,l[w*4+2]=S.z,l[w*4+3]=q}for(let w=0,G=M.length;w<G;++w){const F=M[w],q=F.start,C=F.count;for(let N=q,X=q+C;N<X;N+=3)v(n[N+0]),v(n[N+1]),v(n[N+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new D,s=new D,a=new D,o=new D,l=new D,c=new D,h=new D,u=new D;if(t)for(let f=0,m=t.count;f<m;f+=3){const g=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,p),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ve.fromBufferAttribute(t,e),ve.normalize(),t.setXYZ(e,ve.x,ve.y,ve.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*h;for(let d=0;d<h;d++)f[g++]=c[m++]}return new Je(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new He,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],m=t(f,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kl=new se,di=new wo,ds=new Ks,Zl=new D,Yi=new D,ji=new D,Ki=new D,Ra=new D,ps=new D,ms=new Rt,_s=new Rt,gs=new Rt,$l=new D,Jl=new D,Ql=new D,vs=new D,xs=new D;class $t extends de{constructor(t=new He,e=new xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){ps.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(Ra.fromBufferAttribute(u,t),a?ps.addScaledVector(Ra,h):ps.addScaledVector(Ra.sub(e),h))}e.add(ps)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ds.copy(n.boundingSphere),ds.applyMatrix4(s),di.copy(t.ray).recast(t.near),!(ds.containsPoint(di.origin)===!1&&(di.intersectSphere(ds,Zl)===null||di.origin.distanceToSquared(Zl)>(t.far-t.near)**2))&&(Kl.copy(s).invert(),di.copy(t.ray).applyMatrix4(Kl),!(n.boundingBox!==null&&di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,di)))}_computeIntersections(t,e,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],d=a[p.materialIndex],E=Math.max(p.start,m.start),x=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let M=E,S=x;M<S;M+=3){const A=o.getX(M),b=o.getX(M+1),P=o.getX(M+2);i=Ms(this,d,t,n,c,h,u,A,b,P),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){const E=o.getX(p),x=o.getX(p+1),M=o.getX(p+2);i=Ms(this,a,t,n,c,h,u,E,x,M),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],d=a[p.materialIndex],E=Math.max(p.start,m.start),x=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=E,S=x;M<S;M+=3){const A=M,b=M+1,P=M+2;i=Ms(this,d,t,n,c,h,u,A,b,P),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){const E=p,x=p+1,M=p+2;i=Ms(this,a,t,n,c,h,u,E,x,M),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function qf(r,t,e,n,i,s,a,o){let l;if(t.side===Oe?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===ri,o),l===null)return null;xs.copy(o),xs.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(xs);return c<e.near||c>e.far?null:{distance:c,point:xs.clone(),object:r}}function Ms(r,t,e,n,i,s,a,o,l,c){r.getVertexPosition(o,Yi),r.getVertexPosition(l,ji),r.getVertexPosition(c,Ki);const h=qf(r,t,e,n,Yi,ji,Ki,vs);if(h){i&&(ms.fromBufferAttribute(i,o),_s.fromBufferAttribute(i,l),gs.fromBufferAttribute(i,c),h.uv=on.getInterpolation(vs,Yi,ji,Ki,ms,_s,gs,new Rt)),s&&(ms.fromBufferAttribute(s,o),_s.fromBufferAttribute(s,l),gs.fromBufferAttribute(s,c),h.uv1=on.getInterpolation(vs,Yi,ji,Ki,ms,_s,gs,new Rt),h.uv2=h.uv1),a&&($l.fromBufferAttribute(a,o),Jl.fromBufferAttribute(a,l),Ql.fromBufferAttribute(a,c),h.normal=on.getInterpolation(vs,Yi,ji,Ki,$l,Jl,Ql,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new D,materialIndex:0};on.getNormal(Yi,ji,Ki,u.normal),h.face=u}return h}class Ui extends He{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,m=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ye(c,3)),this.setAttribute("normal",new ye(h,3)),this.setAttribute("uv",new ye(u,2));function g(_,p,d,E,x,M,S,A,b,P,v){const w=M/b,G=S/P,F=M/2,q=S/2,C=A/2,N=b+1,X=P+1;let W=0,Z=0;const K=new D;for(let j=0;j<X;j++){const U=j*G-q;for(let k=0;k<N;k++){const at=k*w-F;K[_]=at*E,K[p]=U*x,K[d]=C,c.push(K.x,K.y,K.z),K[_]=0,K[p]=0,K[d]=A>0?1:-1,h.push(K.x,K.y,K.z),u.push(k/b),u.push(1-j/P),W+=1}}for(let j=0;j<P;j++)for(let U=0;U<b;U++){const k=f+U+N*j,at=f+U+N*(j+1),st=f+(U+1)+N*(j+1),lt=f+(U+1)+N*j;l.push(k,at,lt),l.push(at,st,lt),Z+=6}o.addGroup(m,Z,v),m+=Z,f+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ui(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function _r(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function De(r){const t={};for(let e=0;e<r.length;e++){const n=_r(r[e]);for(const i in n)t[i]=n[i]}return t}function Yf(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function fh(r){return r.getRenderTarget()===null?r.outputColorSpace:Wt.workingColorSpace}const jf={clone:_r,merge:De};var Kf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ii extends oi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kf,this.fragmentShader=Zf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_r(t.uniforms),this.uniformsGroups=Yf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class dh extends de{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=Fn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ln extends dh{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=eo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ua*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return eo*2*Math.atan(Math.tan(ua*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ua*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Zi=-90,$i=1;class $f extends de{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new ln(Zi,$i,t,e);i.layers=this.layers,this.add(i);const s=new ln(Zi,$i,t,e);s.layers=this.layers,this.add(s);const a=new ln(Zi,$i,t,e);a.layers=this.layers,this.add(a);const o=new ln(Zi,$i,t,e);o.layers=this.layers,this.add(o);const l=new ln(Zi,$i,t,e);l.layers=this.layers,this.add(l);const c=new ln(Zi,$i,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Fn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Fs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ph extends Fe{constructor(t,e,n,i,s,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:dr,super(t,e,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Jf extends Di{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(Fr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===wi?xe:cn),this.texture=new ph(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:an}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ui(5,5,5),s=new Ii({name:"CubemapFromEquirect",uniforms:_r(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Oe,blending:Jn});s.uniforms.tEquirect.value=e;const a=new $t(i,s),o=e.minFilter;return e.minFilter===kr&&(e.minFilter=an),new $f(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}const Ca=new D,Qf=new D,td=new Nt;class gi{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Ca.subVectors(n,e).cross(Qf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ca),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||td.getNormalMatrix(t),i=this.coplanarPoint(Ca).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pi=new Ks,Ss=new D;class Zs{constructor(t=new gi,e=new gi,n=new gi,i=new gi,s=new gi,a=new gi){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Fn){const n=this.planes,i=t.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],m=i[8],g=i[9],_=i[10],p=i[11],d=i[12],E=i[13],x=i[14],M=i[15];if(n[0].setComponents(l-s,f-c,p-m,M-d).normalize(),n[1].setComponents(l+s,f+c,p+m,M+d).normalize(),n[2].setComponents(l+a,f+h,p+g,M+E).normalize(),n[3].setComponents(l-a,f-h,p-g,M-E).normalize(),n[4].setComponents(l-o,f-u,p-_,M-x).normalize(),e===Fn)n[5].setComponents(l+o,f+u,p+_,M+x).normalize();else if(e===Fs)n[5].setComponents(o,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(t){return pi.center.set(0,0,0),pi.radius=.7071067811865476,pi.applyMatrix4(t.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Ss.x=i.normal.x>0?t.max.x:t.min.x,Ss.y=i.normal.y>0?t.max.y:t.min.y,Ss.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ss)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function mh(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function ed(r,t){const e=t.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,f=c.usage,m=r.createBuffer();r.bindBuffer(h,m),r.bufferData(h,u,f),c.onUploadCallback();let g;if(u instanceof Float32Array)g=r.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=r.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=r.SHORT;else if(u instanceof Uint32Array)g=r.UNSIGNED_INT;else if(u instanceof Int32Array)g=r.INT;else if(u instanceof Int8Array)g=r.BYTE;else if(u instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,u){const f=h.array,m=h.updateRange;r.bindBuffer(u,c),m.count===-1?r.bufferSubData(u,0,f):(e?r.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):r.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(r.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u===void 0?n.set(c,i(c,h)):u.version<c.version&&(s(u.buffer,c,h),u.version=c.version)}return{get:a,remove:o,update:l}}class yi extends He{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,f=e/l,m=[],g=[],_=[],p=[];for(let d=0;d<h;d++){const E=d*f-a;for(let x=0;x<c;x++){const M=x*u-s;g.push(M,-E,0),_.push(0,0,1),p.push(x/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let E=0;E<o;E++){const x=E+c*d,M=E+c*(d+1),S=E+1+c*(d+1),A=E+1+c*d;m.push(x,M,A),m.push(M,S,A)}this.setIndex(m),this.setAttribute("position",new ye(g,3)),this.setAttribute("normal",new ye(_,3)),this.setAttribute("uv",new ye(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yi(t.width,t.height,t.widthSegments,t.heightSegments)}}var nd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,id=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,rd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ad=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,od=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ld=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ud=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,dd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,pd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,md=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,_d=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Md=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,yd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ed=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Td=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bd=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ad=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ld=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Dd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ud=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Id=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Nd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Od=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Fd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Hd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Vd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Yd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,jd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$d=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Qd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,tp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ep=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,np=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ip=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ap=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,op=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,up=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,mp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,_p=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,gp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ep=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ap=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Cp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Up=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ip=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Np=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Op=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Fp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Bp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,kp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Vp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Jp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sm=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,am=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,om=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,lm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,um=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dm=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,pm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_m=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Mm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Sm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ym=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Em=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Tm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Am=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Rm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cm=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Lm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Pt={alphahash_fragment:nd,alphahash_pars_fragment:id,alphamap_fragment:rd,alphamap_pars_fragment:sd,alphatest_fragment:ad,alphatest_pars_fragment:od,aomap_fragment:ld,aomap_pars_fragment:cd,begin_vertex:hd,beginnormal_vertex:ud,bsdfs:fd,iridescence_fragment:dd,bumpmap_pars_fragment:pd,clipping_planes_fragment:md,clipping_planes_pars_fragment:_d,clipping_planes_pars_vertex:gd,clipping_planes_vertex:vd,color_fragment:xd,color_pars_fragment:Md,color_pars_vertex:Sd,color_vertex:yd,common:Ed,cube_uv_reflection_fragment:Td,defaultnormal_vertex:bd,displacementmap_pars_vertex:Ad,displacementmap_vertex:wd,emissivemap_fragment:Rd,emissivemap_pars_fragment:Cd,colorspace_fragment:Pd,colorspace_pars_fragment:Ld,envmap_fragment:Dd,envmap_common_pars_fragment:Ud,envmap_pars_fragment:Id,envmap_pars_vertex:Nd,envmap_physical_pars_fragment:Yd,envmap_vertex:Od,fog_vertex:Fd,fog_pars_vertex:Bd,fog_fragment:zd,fog_pars_fragment:Gd,gradientmap_pars_fragment:kd,lightmap_fragment:Hd,lightmap_pars_fragment:Vd,lights_lambert_fragment:Wd,lights_lambert_pars_fragment:Xd,lights_pars_begin:qd,lights_toon_fragment:jd,lights_toon_pars_fragment:Kd,lights_phong_fragment:Zd,lights_phong_pars_fragment:$d,lights_physical_fragment:Jd,lights_physical_pars_fragment:Qd,lights_fragment_begin:tp,lights_fragment_maps:ep,lights_fragment_end:np,logdepthbuf_fragment:ip,logdepthbuf_pars_fragment:rp,logdepthbuf_pars_vertex:sp,logdepthbuf_vertex:ap,map_fragment:op,map_pars_fragment:lp,map_particle_fragment:cp,map_particle_pars_fragment:hp,metalnessmap_fragment:up,metalnessmap_pars_fragment:fp,morphcolor_vertex:dp,morphnormal_vertex:pp,morphtarget_pars_vertex:mp,morphtarget_vertex:_p,normal_fragment_begin:gp,normal_fragment_maps:vp,normal_pars_fragment:xp,normal_pars_vertex:Mp,normal_vertex:Sp,normalmap_pars_fragment:yp,clearcoat_normal_fragment_begin:Ep,clearcoat_normal_fragment_maps:Tp,clearcoat_pars_fragment:bp,iridescence_pars_fragment:Ap,opaque_fragment:wp,packing:Rp,premultiplied_alpha_fragment:Cp,project_vertex:Pp,dithering_fragment:Lp,dithering_pars_fragment:Dp,roughnessmap_fragment:Up,roughnessmap_pars_fragment:Ip,shadowmap_pars_fragment:Np,shadowmap_pars_vertex:Op,shadowmap_vertex:Fp,shadowmask_pars_fragment:Bp,skinbase_vertex:zp,skinning_pars_vertex:Gp,skinning_vertex:kp,skinnormal_vertex:Hp,specularmap_fragment:Vp,specularmap_pars_fragment:Wp,tonemapping_fragment:Xp,tonemapping_pars_fragment:qp,transmission_fragment:Yp,transmission_pars_fragment:jp,uv_pars_fragment:Kp,uv_pars_vertex:Zp,uv_vertex:$p,worldpos_vertex:Jp,background_vert:Qp,background_frag:tm,backgroundCube_vert:em,backgroundCube_frag:nm,cube_vert:im,cube_frag:rm,depth_vert:sm,depth_frag:am,distanceRGBA_vert:om,distanceRGBA_frag:lm,equirect_vert:cm,equirect_frag:hm,linedashed_vert:um,linedashed_frag:fm,meshbasic_vert:dm,meshbasic_frag:pm,meshlambert_vert:mm,meshlambert_frag:_m,meshmatcap_vert:gm,meshmatcap_frag:vm,meshnormal_vert:xm,meshnormal_frag:Mm,meshphong_vert:Sm,meshphong_frag:ym,meshphysical_vert:Em,meshphysical_frag:Tm,meshtoon_vert:bm,meshtoon_frag:Am,points_vert:wm,points_frag:Rm,shadow_vert:Cm,shadow_frag:Pm,sprite_vert:Lm,sprite_frag:Dm},rt={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},yn={basic:{uniforms:De([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Pt.meshbasic_vert,fragmentShader:Pt.meshbasic_frag},lambert:{uniforms:De([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Pt.meshlambert_vert,fragmentShader:Pt.meshlambert_frag},phong:{uniforms:De([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:Pt.meshphong_vert,fragmentShader:Pt.meshphong_frag},standard:{uniforms:De([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag},toon:{uniforms:De([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Pt.meshtoon_vert,fragmentShader:Pt.meshtoon_frag},matcap:{uniforms:De([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Pt.meshmatcap_vert,fragmentShader:Pt.meshmatcap_frag},points:{uniforms:De([rt.points,rt.fog]),vertexShader:Pt.points_vert,fragmentShader:Pt.points_frag},dashed:{uniforms:De([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pt.linedashed_vert,fragmentShader:Pt.linedashed_frag},depth:{uniforms:De([rt.common,rt.displacementmap]),vertexShader:Pt.depth_vert,fragmentShader:Pt.depth_frag},normal:{uniforms:De([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Pt.meshnormal_vert,fragmentShader:Pt.meshnormal_frag},sprite:{uniforms:De([rt.sprite,rt.fog]),vertexShader:Pt.sprite_vert,fragmentShader:Pt.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pt.background_vert,fragmentShader:Pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Pt.backgroundCube_vert,fragmentShader:Pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pt.cube_vert,fragmentShader:Pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pt.equirect_vert,fragmentShader:Pt.equirect_frag},distanceRGBA:{uniforms:De([rt.common,rt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pt.distanceRGBA_vert,fragmentShader:Pt.distanceRGBA_frag},shadow:{uniforms:De([rt.lights,rt.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:Pt.shadow_vert,fragmentShader:Pt.shadow_frag}};yn.physical={uniforms:De([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag};const ys={r:0,b:0,g:0};function Um(r,t,e,n,i,s,a){const o=new Ot(0);let l=s===!0?0:1,c,h,u=null,f=0,m=null;function g(p,d){let E=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?e:t).get(x)),x===null?_(o,l):x&&x.isColor&&(_(x,1),E=!0);const M=r.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||E)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Ys)?(h===void 0&&(h=new $t(new Ui(1,1,1),new Ii({name:"BackgroundCubeMaterial",uniforms:_r(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:Oe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,A,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=Wt.getTransfer(x.colorSpace)!==Zt,(u!==x||f!==x.version||m!==r.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,m=r.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new $t(new yi(2,2),new Ii({name:"BackgroundMaterial",uniforms:_r(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=Wt.getTransfer(x.colorSpace)!==Zt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,m=r.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,d){p.getRGB(ys,fh(r)),n.buffers.color.setClear(ys.r,ys.g,ys.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(p,d=1){o.set(p),l=d,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(o,l)},render:g}}function Im(r,t,e,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=p(null);let c=l,h=!1;function u(C,N,X,W,Z){let K=!1;if(a){const j=_(W,X,N);c!==j&&(c=j,m(c.object)),K=d(C,W,X,Z),K&&E(C,W,X,Z)}else{const j=N.wireframe===!0;(c.geometry!==W.id||c.program!==X.id||c.wireframe!==j)&&(c.geometry=W.id,c.program=X.id,c.wireframe=j,K=!0)}Z!==null&&e.update(Z,r.ELEMENT_ARRAY_BUFFER),(K||h)&&(h=!1,P(C,N,X,W),Z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(C){return n.isWebGL2?r.bindVertexArray(C):s.bindVertexArrayOES(C)}function g(C){return n.isWebGL2?r.deleteVertexArray(C):s.deleteVertexArrayOES(C)}function _(C,N,X){const W=X.wireframe===!0;let Z=o[C.id];Z===void 0&&(Z={},o[C.id]=Z);let K=Z[N.id];K===void 0&&(K={},Z[N.id]=K);let j=K[W];return j===void 0&&(j=p(f()),K[W]=j),j}function p(C){const N=[],X=[],W=[];for(let Z=0;Z<i;Z++)N[Z]=0,X[Z]=0,W[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:X,attributeDivisors:W,object:C,attributes:{},index:null}}function d(C,N,X,W){const Z=c.attributes,K=N.attributes;let j=0;const U=X.getAttributes();for(const k in U)if(U[k].location>=0){const st=Z[k];let lt=K[k];if(lt===void 0&&(k==="instanceMatrix"&&C.instanceMatrix&&(lt=C.instanceMatrix),k==="instanceColor"&&C.instanceColor&&(lt=C.instanceColor)),st===void 0||st.attribute!==lt||lt&&st.data!==lt.data)return!0;j++}return c.attributesNum!==j||c.index!==W}function E(C,N,X,W){const Z={},K=N.attributes;let j=0;const U=X.getAttributes();for(const k in U)if(U[k].location>=0){let st=K[k];st===void 0&&(k==="instanceMatrix"&&C.instanceMatrix&&(st=C.instanceMatrix),k==="instanceColor"&&C.instanceColor&&(st=C.instanceColor));const lt={};lt.attribute=st,st&&st.data&&(lt.data=st.data),Z[k]=lt,j++}c.attributes=Z,c.attributesNum=j,c.index=W}function x(){const C=c.newAttributes;for(let N=0,X=C.length;N<X;N++)C[N]=0}function M(C){S(C,0)}function S(C,N){const X=c.newAttributes,W=c.enabledAttributes,Z=c.attributeDivisors;X[C]=1,W[C]===0&&(r.enableVertexAttribArray(C),W[C]=1),Z[C]!==N&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,N),Z[C]=N)}function A(){const C=c.newAttributes,N=c.enabledAttributes;for(let X=0,W=N.length;X<W;X++)N[X]!==C[X]&&(r.disableVertexAttribArray(X),N[X]=0)}function b(C,N,X,W,Z,K,j){j===!0?r.vertexAttribIPointer(C,N,X,Z,K):r.vertexAttribPointer(C,N,X,W,Z,K)}function P(C,N,X,W){if(n.isWebGL2===!1&&(C.isInstancedMesh||W.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();const Z=W.attributes,K=X.getAttributes(),j=N.defaultAttributeValues;for(const U in K){const k=K[U];if(k.location>=0){let at=Z[U];if(at===void 0&&(U==="instanceMatrix"&&C.instanceMatrix&&(at=C.instanceMatrix),U==="instanceColor"&&C.instanceColor&&(at=C.instanceColor)),at!==void 0){const st=at.normalized,lt=at.itemSize,vt=e.get(at);if(vt===void 0)continue;const Bt=vt.buffer,Et=vt.type,Ct=vt.bytesPerElement,ee=n.isWebGL2===!0&&(Et===r.INT||Et===r.UNSIGNED_INT||at.gpuType===Jc);if(at.isInterleavedBufferAttribute){const Dt=at.data,O=Dt.stride,We=at.offset;if(Dt.isInstancedInterleavedBuffer){for(let pt=0;pt<k.locationSize;pt++)S(k.location+pt,Dt.meshPerAttribute);C.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Dt.meshPerAttribute*Dt.count)}else for(let pt=0;pt<k.locationSize;pt++)M(k.location+pt);r.bindBuffer(r.ARRAY_BUFFER,Bt);for(let pt=0;pt<k.locationSize;pt++)b(k.location+pt,lt/k.locationSize,Et,st,O*Ct,(We+lt/k.locationSize*pt)*Ct,ee)}else{if(at.isInstancedBufferAttribute){for(let Dt=0;Dt<k.locationSize;Dt++)S(k.location+Dt,at.meshPerAttribute);C.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Dt=0;Dt<k.locationSize;Dt++)M(k.location+Dt);r.bindBuffer(r.ARRAY_BUFFER,Bt);for(let Dt=0;Dt<k.locationSize;Dt++)b(k.location+Dt,lt/k.locationSize,Et,st,lt*Ct,lt/k.locationSize*Dt*Ct,ee)}}else if(j!==void 0){const st=j[U];if(st!==void 0)switch(st.length){case 2:r.vertexAttrib2fv(k.location,st);break;case 3:r.vertexAttrib3fv(k.location,st);break;case 4:r.vertexAttrib4fv(k.location,st);break;default:r.vertexAttrib1fv(k.location,st)}}}}A()}function v(){F();for(const C in o){const N=o[C];for(const X in N){const W=N[X];for(const Z in W)g(W[Z].object),delete W[Z];delete N[X]}delete o[C]}}function w(C){if(o[C.id]===void 0)return;const N=o[C.id];for(const X in N){const W=N[X];for(const Z in W)g(W[Z].object),delete W[Z];delete N[X]}delete o[C.id]}function G(C){for(const N in o){const X=o[N];if(X[C.id]===void 0)continue;const W=X[C.id];for(const Z in W)g(W[Z].object),delete W[Z];delete X[C.id]}}function F(){q(),h=!0,c!==l&&(c=l,m(c.object))}function q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:F,resetDefaultState:q,dispose:v,releaseStatesOfGeometry:w,releaseStatesOfProgram:G,initAttributes:x,enableAttribute:M,disableUnusedAttributes:A}}function Nm(r,t,e,n){const i=n.isWebGL2;let s;function a(c){s=c}function o(c,h){r.drawArrays(s,c,h),e.update(h,s,1)}function l(c,h,u){if(u===0)return;let f,m;if(i)f=r,m="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,c,h,u),e.update(h,s,u)}this.setMode=a,this.render=o,this.renderInstances=l}function Om(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),p=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),d=r.getParameter(r.MAX_VARYING_VECTORS),E=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,M=a||t.has("OES_texture_float"),S=x&&M,A=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:E,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:S,maxSamples:A}}function Fm(r){const t=this;let e=null,n=0,i=!1,s=!1;const a=new gi,o=new Nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const m=u.length!==0||f||n!==0||i;return i=f,n=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,m){const g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,d=r.get(u);if(!i||g===null||g.length===0||s&&!p)s?h(null):c();else{const E=s?0:n,x=E*4;let M=d.clippingState||null;l.value=M,M=h(g,f,x,m);for(let S=0;S!==x;++S)M[S]=e[S];d.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,m,g){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const d=m+_*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(p===null||p.length<d)&&(p=new Float32Array(d));for(let x=0,M=m;x!==_;++x,M+=4)a.copy(u[x]).applyMatrix4(E,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function Bm(r){let t=new WeakMap;function e(a,o){return o===Ka?a.mapping=dr:o===Za&&(a.mapping=pr),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Ka||o===Za)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Jf(l.height/2);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class _h extends dh{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const sr=4,tc=[.125,.215,.35,.446,.526,.582],Si=20,Pa=new _h,ec=new Ot;let La=null,Da=0,Ua=0;const vi=(1+Math.sqrt(5))/2,Ji=1/vi,nc=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,vi,Ji),new D(0,vi,-Ji),new D(Ji,0,vi),new D(-Ji,0,vi),new D(vi,Ji,0),new D(-vi,Ji,0)];class ic{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){La=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ac(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(La,Da,Ua),t.scissorTest=!1,Es(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===dr||t.mapping===pr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),La=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:Hr,format:gn,colorSpace:Bn,depthBuffer:!1},i=rc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rc(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zm(s)),this._blurMaterial=Gm(s,t,e)}return i}_compileMaterial(t){const e=new $t(this._lodPlanes[0],t);this._renderer.compile(e,Pa)}_sceneToCubeUV(t,e,n,i){const o=new ln(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(ec),h.toneMapping=Qn,h.autoClear=!1;const m=new xn({name:"PMREM.Background",side:Oe,depthWrite:!1,depthTest:!1}),g=new $t(new Ui,m);let _=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,_=!0):(m.color.copy(ec),_=!0);for(let d=0;d<6;d++){const E=d%3;E===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):E===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const x=this._cubeSize;Es(i,E*x,d>2?x:0,x,x),h.setRenderTarget(i),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===dr||t.mapping===pr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ac()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sc());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new $t(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Es(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Pa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=nc[(i-1)%nc.length];this._blur(t,i-1,i,s,a)}e.autoClear=n}_blur(t,e,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new $t(this._lodPlanes[i],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Si-1),_=s/g,p=isFinite(s)?1+Math.floor(h*_):Si;p>Si&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Si}`);const d=[];let E=0;for(let b=0;b<Si;++b){const P=b/_,v=Math.exp(-P*P/2);d.push(v),b===0?E+=v:b<p&&(E+=2*v)}for(let b=0;b<d.length;b++)d[b]=d[b]/E;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const M=this._sizeLods[i],S=3*M*(i>x-sr?i-x+sr:0),A=4*(this._cubeSize-M);Es(e,S,A,3*M,2*M),l.setRenderTarget(e),l.render(u,Pa)}}function zm(r){const t=[],e=[],n=[];let i=r;const s=r-sr+1+tc.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-sr?l=tc[a-r+sr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,_=3,p=2,d=1,E=new Float32Array(_*g*m),x=new Float32Array(p*g*m),M=new Float32Array(d*g*m);for(let A=0;A<m;A++){const b=A%3*2/3-1,P=A>2?0:-1,v=[b,P,0,b+2/3,P,0,b+2/3,P+1,0,b,P,0,b+2/3,P+1,0,b,P+1,0];E.set(v,_*g*A),x.set(f,p*g*A);const w=[A,A,A,A,A,A];M.set(w,d*g*A)}const S=new He;S.setAttribute("position",new Je(E,_)),S.setAttribute("uv",new Je(x,p)),S.setAttribute("faceIndex",new Je(M,d)),t.push(S),i>sr&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function rc(r,t,e){const n=new Di(r,t,e);return n.texture.mapping=Ys,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Es(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Gm(r,t,e){const n=new Float32Array(Si),i=new D(0,1,0);return new Ii({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Co(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function sc(){return new Ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Co(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function ac(){return new Ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Co(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Co(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function km(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ka||l===Za,h=l===dr||l===pr;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new ic(r)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{const u=o.image;if(c&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new ic(r));const f=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Hm(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Vm(r,t,e,n){const i={},s=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,d=_.length;p<d;p++)t.remove(_[p])}f.removeEventListener("dispose",a),delete i[f.id];const m=s.get(f);m&&(t.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)t.update(f[g],r.ARRAY_BUFFER);const m=u.morphAttributes;for(const g in m){const _=m[g];for(let p=0,d=_.length;p<d;p++)t.update(_[p],r.ARRAY_BUFFER)}}function c(u){const f=[],m=u.index,g=u.attributes.position;let _=0;if(m!==null){const E=m.array;_=m.version;for(let x=0,M=E.length;x<M;x+=3){const S=E[x+0],A=E[x+1],b=E[x+2];f.push(S,A,A,b,b,S)}}else if(g!==void 0){const E=g.array;_=g.version;for(let x=0,M=E.length/3-1;x<M;x+=3){const S=x+0,A=x+1,b=x+2;f.push(S,A,A,b,b,S)}}else return;const p=new(sh(f)?uh:hh)(f,1);p.version=_;const d=s.get(u);d&&t.remove(d),s.set(u,p)}function h(u){const f=s.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Wm(r,t,e,n){const i=n.isWebGL2;let s;function a(f){s=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function h(f,m){r.drawElements(s,m,o,f*l),e.update(m,s,1)}function u(f,m,g){if(g===0)return;let _,p;if(i)_=r,p="drawElementsInstanced";else if(_=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[p](s,m,o,f*l,g),e.update(m,s,g)}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u}function Xm(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function qm(r,t){return r[0]-t[0]}function Ym(r,t){return Math.abs(t[1])-Math.abs(r[1])}function jm(r,t,e){const n={},i=new Float32Array(8),s=new WeakMap,a=new Me,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){const f=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let p=s.get(h);if(p===void 0||p.count!==_){let N=function(){q.dispose(),s.delete(h),h.removeEventListener("dispose",N)};var m=N;p!==void 0&&p.texture.dispose();const x=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],b=h.morphAttributes.normal||[],P=h.morphAttributes.color||[];let v=0;x===!0&&(v=1),M===!0&&(v=2),S===!0&&(v=3);let w=h.attributes.position.count*v,G=1;w>t.maxTextureSize&&(G=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const F=new Float32Array(w*G*4*_),q=new lh(F,w,G,_);q.type=jn,q.needsUpdate=!0;const C=v*4;for(let X=0;X<_;X++){const W=A[X],Z=b[X],K=P[X],j=w*G*4*X;for(let U=0;U<W.count;U++){const k=U*C;x===!0&&(a.fromBufferAttribute(W,U),F[j+k+0]=a.x,F[j+k+1]=a.y,F[j+k+2]=a.z,F[j+k+3]=0),M===!0&&(a.fromBufferAttribute(Z,U),F[j+k+4]=a.x,F[j+k+5]=a.y,F[j+k+6]=a.z,F[j+k+7]=0),S===!0&&(a.fromBufferAttribute(K,U),F[j+k+8]=a.x,F[j+k+9]=a.y,F[j+k+10]=a.z,F[j+k+11]=K.itemSize===4?a.w:1)}}p={count:_,texture:q,size:new Rt(w,G)},s.set(h,p),h.addEventListener("dispose",N)}let d=0;for(let x=0;x<f.length;x++)d+=f[x];const E=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(r,"morphTargetBaseInfluence",E),u.getUniforms().setValue(r,"morphTargetInfluences",f),u.getUniforms().setValue(r,"morphTargetsTexture",p.texture,e),u.getUniforms().setValue(r,"morphTargetsTextureSize",p.size)}else{const g=f===void 0?0:f.length;let _=n[h.id];if(_===void 0||_.length!==g){_=[];for(let M=0;M<g;M++)_[M]=[M,0];n[h.id]=_}for(let M=0;M<g;M++){const S=_[M];S[0]=M,S[1]=f[M]}_.sort(Ym);for(let M=0;M<8;M++)M<g&&_[M][1]?(o[M][0]=_[M][0],o[M][1]=_[M][1]):(o[M][0]=Number.MAX_SAFE_INTEGER,o[M][1]=0);o.sort(qm);const p=h.morphAttributes.position,d=h.morphAttributes.normal;let E=0;for(let M=0;M<8;M++){const S=o[M],A=S[0],b=S[1];A!==Number.MAX_SAFE_INTEGER&&b?(p&&h.getAttribute("morphTarget"+M)!==p[A]&&h.setAttribute("morphTarget"+M,p[A]),d&&h.getAttribute("morphNormal"+M)!==d[A]&&h.setAttribute("morphNormal"+M,d[A]),i[M]=b,E+=b):(p&&h.hasAttribute("morphTarget"+M)===!0&&h.deleteAttribute("morphTarget"+M),d&&h.hasAttribute("morphNormal"+M)===!0&&h.deleteAttribute("morphNormal"+M),i[M]=0)}const x=h.morphTargetsRelative?1:1-E;u.getUniforms().setValue(r,"morphTargetBaseInfluence",x),u.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Km(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}const gh=new Fe,vh=new lh,xh=new Nf,Mh=new ph,oc=[],lc=[],cc=new Float32Array(16),hc=new Float32Array(9),uc=new Float32Array(4);function Tr(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=oc[i];if(s===void 0&&(s=new Float32Array(i),oc[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function pe(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function me(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function $s(r,t){let e=lc[t];e===void 0&&(e=new Int32Array(t),lc[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Zm(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function $m(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;r.uniform2fv(this.addr,t),me(e,t)}}function Jm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(pe(e,t))return;r.uniform3fv(this.addr,t),me(e,t)}}function Qm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;r.uniform4fv(this.addr,t),me(e,t)}}function t_(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;uc.set(n),r.uniformMatrix2fv(this.addr,!1,uc),me(e,n)}}function e_(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;hc.set(n),r.uniformMatrix3fv(this.addr,!1,hc),me(e,n)}}function n_(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;cc.set(n),r.uniformMatrix4fv(this.addr,!1,cc),me(e,n)}}function i_(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function r_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;r.uniform2iv(this.addr,t),me(e,t)}}function s_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;r.uniform3iv(this.addr,t),me(e,t)}}function a_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;r.uniform4iv(this.addr,t),me(e,t)}}function o_(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function l_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;r.uniform2uiv(this.addr,t),me(e,t)}}function c_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;r.uniform3uiv(this.addr,t),me(e,t)}}function h_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;r.uniform4uiv(this.addr,t),me(e,t)}}function u_(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||gh,i)}function f_(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||xh,i)}function d_(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Mh,i)}function p_(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||vh,i)}function m_(r){switch(r){case 5126:return Zm;case 35664:return $m;case 35665:return Jm;case 35666:return Qm;case 35674:return t_;case 35675:return e_;case 35676:return n_;case 5124:case 35670:return i_;case 35667:case 35671:return r_;case 35668:case 35672:return s_;case 35669:case 35673:return a_;case 5125:return o_;case 36294:return l_;case 36295:return c_;case 36296:return h_;case 35678:case 36198:case 36298:case 36306:case 35682:return u_;case 35679:case 36299:case 36307:return f_;case 35680:case 36300:case 36308:case 36293:return d_;case 36289:case 36303:case 36311:case 36292:return p_}}function __(r,t){r.uniform1fv(this.addr,t)}function g_(r,t){const e=Tr(t,this.size,2);r.uniform2fv(this.addr,e)}function v_(r,t){const e=Tr(t,this.size,3);r.uniform3fv(this.addr,e)}function x_(r,t){const e=Tr(t,this.size,4);r.uniform4fv(this.addr,e)}function M_(r,t){const e=Tr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function S_(r,t){const e=Tr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function y_(r,t){const e=Tr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function E_(r,t){r.uniform1iv(this.addr,t)}function T_(r,t){r.uniform2iv(this.addr,t)}function b_(r,t){r.uniform3iv(this.addr,t)}function A_(r,t){r.uniform4iv(this.addr,t)}function w_(r,t){r.uniform1uiv(this.addr,t)}function R_(r,t){r.uniform2uiv(this.addr,t)}function C_(r,t){r.uniform3uiv(this.addr,t)}function P_(r,t){r.uniform4uiv(this.addr,t)}function L_(r,t,e){const n=this.cache,i=t.length,s=$s(e,i);pe(n,s)||(r.uniform1iv(this.addr,s),me(n,s));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||gh,s[a])}function D_(r,t,e){const n=this.cache,i=t.length,s=$s(e,i);pe(n,s)||(r.uniform1iv(this.addr,s),me(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||xh,s[a])}function U_(r,t,e){const n=this.cache,i=t.length,s=$s(e,i);pe(n,s)||(r.uniform1iv(this.addr,s),me(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Mh,s[a])}function I_(r,t,e){const n=this.cache,i=t.length,s=$s(e,i);pe(n,s)||(r.uniform1iv(this.addr,s),me(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||vh,s[a])}function N_(r){switch(r){case 5126:return __;case 35664:return g_;case 35665:return v_;case 35666:return x_;case 35674:return M_;case 35675:return S_;case 35676:return y_;case 5124:case 35670:return E_;case 35667:case 35671:return T_;case 35668:case 35672:return b_;case 35669:case 35673:return A_;case 5125:return w_;case 36294:return R_;case 36295:return C_;case 36296:return P_;case 35678:case 36198:case 36298:case 36306:case 35682:return L_;case 35679:case 36299:case 36307:return D_;case 35680:case 36300:case 36308:case 36293:return U_;case 36289:case 36303:case 36311:case 36292:return I_}}class O_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=m_(e.type)}}class F_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=N_(e.type)}}class B_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const Ia=/(\w+)(\])?(\[|\.)?/g;function fc(r,t){r.seq.push(t),r.map[t.id]=t}function z_(r,t,e){const n=r.name,i=n.length;for(Ia.lastIndex=0;;){const s=Ia.exec(n),a=Ia.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){fc(e,c===void 0?new O_(o,r,t):new F_(o,r,t));break}else{let u=e.map[o];u===void 0&&(u=new B_(o),fc(e,u)),e=u}}}class Cs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);z_(s,a,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function dc(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const G_=37297;let k_=0;function H_(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function V_(r){const t=Wt.getPrimaries(Wt.workingColorSpace),e=Wt.getPrimaries(r);let n;switch(t===e?n="":t===Os&&e===Ns?n="LinearDisplayP3ToLinearSRGB":t===Ns&&e===Os&&(n="LinearSRGBToLinearDisplayP3"),r){case Bn:case js:return[n,"LinearTransferOETF"];case xe:case Ao:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function pc(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+H_(r.getShaderSource(t),a)}else return i}function W_(r,t){const e=V_(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function X_(r,t){let e;switch(t){case nf:e="Linear";break;case rf:e="Reinhard";break;case sf:e="OptimizedCineon";break;case af:e="ACESFilmic";break;case of:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function q_(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ir).join(`
`)}function Y_(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function j_(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Ir(r){return r!==""}function mc(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function _c(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const K_=/^[ \t]*#include +<([\w\d./]+)>/gm;function io(r){return r.replace(K_,$_)}const Z_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function $_(r,t){let e=Pt[t];if(e===void 0){const n=Z_.get(t);if(n!==void 0)e=Pt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return io(e)}const J_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gc(r){return r.replace(J_,Q_)}function Q_(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function vc(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function tg(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Kc?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Zc?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Dn&&(t="SHADOWMAP_TYPE_VSM"),t}function eg(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case dr:case pr:t="ENVMAP_TYPE_CUBE";break;case Ys:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ng(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case pr:t="ENVMAP_MODE_REFRACTION";break}return t}function ig(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Eo:t="ENVMAP_BLENDING_MULTIPLY";break;case tf:t="ENVMAP_BLENDING_MIX";break;case ef:t="ENVMAP_BLENDING_ADD";break}return t}function rg(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function sg(r,t,e,n){const i=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=tg(e),c=eg(e),h=ng(e),u=ig(e),f=rg(e),m=e.isWebGL2?"":q_(e),g=Y_(s),_=i.createProgram();let p,d,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ir).join(`
`),p.length>0&&(p+=`
`),d=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ir).join(`
`),d.length>0&&(d+=`
`)):(p=[vc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ir).join(`
`),d=[m,vc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qn?"#define TONE_MAPPING":"",e.toneMapping!==Qn?Pt.tonemapping_pars_fragment:"",e.toneMapping!==Qn?X_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Pt.colorspace_pars_fragment,W_("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ir).join(`
`)),a=io(a),a=mc(a,e),a=_c(a,e),o=io(o),o=mc(o,e),o=_c(o,e),a=gc(a),o=gc(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Ol?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ol?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const x=E+p+a,M=E+d+o,S=dc(i,i.VERTEX_SHADER,x),A=dc(i,i.FRAGMENT_SHADER,M);i.attachShader(_,S),i.attachShader(_,A),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function b(G){if(r.debug.checkShaderErrors){const F=i.getProgramInfoLog(_).trim(),q=i.getShaderInfoLog(S).trim(),C=i.getShaderInfoLog(A).trim();let N=!0,X=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(N=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,S,A);else{const W=pc(i,S,"vertex"),Z=pc(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Program Info Log: `+F+`
`+W+`
`+Z)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(q===""||C==="")&&(X=!1);X&&(G.diagnostics={runnable:N,programLog:F,vertexShader:{log:q,prefix:p},fragmentShader:{log:C,prefix:d}})}i.deleteShader(S),i.deleteShader(A),P=new Cs(i,_),v=j_(i,_)}let P;this.getUniforms=function(){return P===void 0&&b(this),P};let v;this.getAttributes=function(){return v===void 0&&b(this),v};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=i.getProgramParameter(_,G_)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=k_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=A,this}let ag=0;class og{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new lg(t),e.set(t,n)),n}}class lg{constructor(t){this.id=ag++,this.code=t,this.usedTimes=0}}function cg(r,t,e,n,i,s,a){const o=new Ro,l=new og,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return v===0?"uv":`uv${v}`}function p(v,w,G,F,q){const C=F.fog,N=q.geometry,X=v.isMeshStandardMaterial?F.environment:null,W=(v.isMeshStandardMaterial?e:t).get(v.envMap||X),Z=W&&W.mapping===Ys?W.image.height:null,K=g[v.type];v.precision!==null&&(m=i.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const j=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,U=j!==void 0?j.length:0;let k=0;N.morphAttributes.position!==void 0&&(k=1),N.morphAttributes.normal!==void 0&&(k=2),N.morphAttributes.color!==void 0&&(k=3);let at,st,lt,vt;if(K){const le=yn[K];at=le.vertexShader,st=le.fragmentShader}else at=v.vertexShader,st=v.fragmentShader,l.update(v),lt=l.getVertexShaderID(v),vt=l.getFragmentShaderID(v);const Bt=r.getRenderTarget(),Et=q.isInstancedMesh===!0,Ct=!!v.map,ee=!!v.matcap,Dt=!!W,O=!!v.aoMap,We=!!v.lightMap,pt=!!v.bumpMap,Tt=!!v.normalMap,yt=!!v.displacementMap,ne=!!v.emissiveMap,Ut=!!v.metalnessMap,It=!!v.roughnessMap,Xt=v.anisotropy>0,_e=v.clearcoat>0,Te=v.iridescence>0,R=v.sheen>0,y=v.transmission>0,B=Xt&&!!v.anisotropyMap,Q=_e&&!!v.clearcoatMap,$=_e&&!!v.clearcoatNormalMap,tt=_e&&!!v.clearcoatRoughnessMap,ft=Te&&!!v.iridescenceMap,it=Te&&!!v.iridescenceThicknessMap,ct=R&&!!v.sheenColorMap,xt=R&&!!v.sheenRoughnessMap,kt=!!v.specularMap,J=!!v.specularColorMap,Vt=!!v.specularIntensityMap,bt=y&&!!v.transmissionMap,Mt=y&&!!v.thicknessMap,mt=!!v.gradientMap,ut=!!v.alphaMap,Gt=v.alphaTest>0,L=!!v.alphaHash,ot=!!v.extensions,et=!!N.attributes.uv1,Y=!!N.attributes.uv2,nt=!!N.attributes.uv3;let _t=Qn;return v.toneMapped&&(Bt===null||Bt.isXRRenderTarget===!0)&&(_t=r.toneMapping),{isWebGL2:h,shaderID:K,shaderType:v.type,shaderName:v.name,vertexShader:at,fragmentShader:st,defines:v.defines,customVertexShaderID:lt,customFragmentShaderID:vt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,instancing:Et,instancingColor:Et&&q.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Bt===null?r.outputColorSpace:Bt.isXRRenderTarget===!0?Bt.texture.colorSpace:Bn,map:Ct,matcap:ee,envMap:Dt,envMapMode:Dt&&W.mapping,envMapCubeUVHeight:Z,aoMap:O,lightMap:We,bumpMap:pt,normalMap:Tt,displacementMap:f&&yt,emissiveMap:ne,normalMapObjectSpace:Tt&&v.normalMapType===Mf,normalMapTangentSpace:Tt&&v.normalMapType===bo,metalnessMap:Ut,roughnessMap:It,anisotropy:Xt,anisotropyMap:B,clearcoat:_e,clearcoatMap:Q,clearcoatNormalMap:$,clearcoatRoughnessMap:tt,iridescence:Te,iridescenceMap:ft,iridescenceThicknessMap:it,sheen:R,sheenColorMap:ct,sheenRoughnessMap:xt,specularMap:kt,specularColorMap:J,specularIntensityMap:Vt,transmission:y,transmissionMap:bt,thicknessMap:Mt,gradientMap:mt,opaque:v.transparent===!1&&v.blending===lr,alphaMap:ut,alphaTest:Gt,alphaHash:L,combine:v.combine,mapUv:Ct&&_(v.map.channel),aoMapUv:O&&_(v.aoMap.channel),lightMapUv:We&&_(v.lightMap.channel),bumpMapUv:pt&&_(v.bumpMap.channel),normalMapUv:Tt&&_(v.normalMap.channel),displacementMapUv:yt&&_(v.displacementMap.channel),emissiveMapUv:ne&&_(v.emissiveMap.channel),metalnessMapUv:Ut&&_(v.metalnessMap.channel),roughnessMapUv:It&&_(v.roughnessMap.channel),anisotropyMapUv:B&&_(v.anisotropyMap.channel),clearcoatMapUv:Q&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:$&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:it&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:xt&&_(v.sheenRoughnessMap.channel),specularMapUv:kt&&_(v.specularMap.channel),specularColorMapUv:J&&_(v.specularColorMap.channel),specularIntensityMapUv:Vt&&_(v.specularIntensityMap.channel),transmissionMapUv:bt&&_(v.transmissionMap.channel),thicknessMapUv:Mt&&_(v.thicknessMap.channel),alphaMapUv:ut&&_(v.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Tt||Xt),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:et,vertexUv2s:Y,vertexUv3s:nt,pointsUvs:q.isPoints===!0&&!!N.attributes.uv&&(Ct||ut),fog:!!C,useFog:v.fog===!0,fogExp2:C&&C.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:q.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:k,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&G.length>0,shadowMapType:r.shadowMap.type,toneMapping:_t,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Ct&&v.map.isVideoTexture===!0&&Wt.getTransfer(v.map.colorSpace)===Zt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Nn,flipSided:v.side===Oe,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:ot&&v.extensions.derivatives===!0,extensionFragDepth:ot&&v.extensions.fragDepth===!0,extensionDrawBuffers:ot&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:ot&&v.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function d(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const G in v.defines)w.push(G),w.push(v.defines[G]);return v.isRawShaderMaterial===!1&&(E(w,v),x(w,v),w.push(r.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function E(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function x(v,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),v.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),v.push(o.mask)}function M(v){const w=g[v.type];let G;if(w){const F=yn[w];G=jf.clone(F.uniforms)}else G=v.uniforms;return G}function S(v,w){let G;for(let F=0,q=c.length;F<q;F++){const C=c[F];if(C.cacheKey===w){G=C,++G.usedTimes;break}}return G===void 0&&(G=new sg(r,w,v,s),c.push(G)),G}function A(v){if(--v.usedTimes===0){const w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),v.destroy()}}function b(v){l.remove(v)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:M,acquireProgram:S,releaseProgram:A,releaseShaderCache:b,programs:c,dispose:P}}function hg(){let r=new WeakMap;function t(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function e(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function ug(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function xc(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Mc(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(u,f,m,g,_,p){let d=r[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},r[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=m,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=p),t++,d}function o(u,f,m,g,_,p){const d=a(u,f,m,g,_,p);m.transmission>0?n.push(d):m.transparent===!0?i.push(d):e.push(d)}function l(u,f,m,g,_,p){const d=a(u,f,m,g,_,p);m.transmission>0?n.unshift(d):m.transparent===!0?i.unshift(d):e.unshift(d)}function c(u,f){e.length>1&&e.sort(u||ug),n.length>1&&n.sort(f||xc),i.length>1&&i.sort(f||xc)}function h(){for(let u=t,f=r.length;u<f;u++){const m=r[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:h,sort:c}}function fg(){let r=new WeakMap;function t(n,i){const s=r.get(n);let a;return s===void 0?(a=new Mc,r.set(n,[a])):i>=s.length?(a=new Mc,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function dg(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Ot};break;case"SpotLight":e={position:new D,direction:new D,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new D,halfWidth:new D,halfHeight:new D};break}return r[t.id]=e,e}}}function pg(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let mg=0;function _g(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function gg(r,t){const e=new dg,n=pg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new D);const s=new D,a=new se,o=new se;function l(h,u){let f=0,m=0,g=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let _=0,p=0,d=0,E=0,x=0,M=0,S=0,A=0,b=0,P=0,v=0;h.sort(_g);const w=u===!0?Math.PI:1;for(let F=0,q=h.length;F<q;F++){const C=h[F],N=C.color,X=C.intensity,W=C.distance,Z=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)f+=N.r*X*w,m+=N.g*X*w,g+=N.b*X*w;else if(C.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(C.sh.coefficients[K],X);v++}else if(C.isDirectionalLight){const K=e.get(C);if(K.color.copy(C.color).multiplyScalar(C.intensity*w),C.castShadow){const j=C.shadow,U=n.get(C);U.shadowBias=j.bias,U.shadowNormalBias=j.normalBias,U.shadowRadius=j.radius,U.shadowMapSize=j.mapSize,i.directionalShadow[_]=U,i.directionalShadowMap[_]=Z,i.directionalShadowMatrix[_]=C.shadow.matrix,M++}i.directional[_]=K,_++}else if(C.isSpotLight){const K=e.get(C);K.position.setFromMatrixPosition(C.matrixWorld),K.color.copy(N).multiplyScalar(X*w),K.distance=W,K.coneCos=Math.cos(C.angle),K.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),K.decay=C.decay,i.spot[d]=K;const j=C.shadow;if(C.map&&(i.spotLightMap[b]=C.map,b++,j.updateMatrices(C),C.castShadow&&P++),i.spotLightMatrix[d]=j.matrix,C.castShadow){const U=n.get(C);U.shadowBias=j.bias,U.shadowNormalBias=j.normalBias,U.shadowRadius=j.radius,U.shadowMapSize=j.mapSize,i.spotShadow[d]=U,i.spotShadowMap[d]=Z,A++}d++}else if(C.isRectAreaLight){const K=e.get(C);K.color.copy(N).multiplyScalar(X),K.halfWidth.set(C.width*.5,0,0),K.halfHeight.set(0,C.height*.5,0),i.rectArea[E]=K,E++}else if(C.isPointLight){const K=e.get(C);if(K.color.copy(C.color).multiplyScalar(C.intensity*w),K.distance=C.distance,K.decay=C.decay,C.castShadow){const j=C.shadow,U=n.get(C);U.shadowBias=j.bias,U.shadowNormalBias=j.normalBias,U.shadowRadius=j.radius,U.shadowMapSize=j.mapSize,U.shadowCameraNear=j.camera.near,U.shadowCameraFar=j.camera.far,i.pointShadow[p]=U,i.pointShadowMap[p]=Z,i.pointShadowMatrix[p]=C.shadow.matrix,S++}i.point[p]=K,p++}else if(C.isHemisphereLight){const K=e.get(C);K.skyColor.copy(C.color).multiplyScalar(X*w),K.groundColor.copy(C.groundColor).multiplyScalar(X*w),i.hemi[x]=K,x++}}E>0&&(t.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_FLOAT_1,i.rectAreaLTC2=rt.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_HALF_1,i.rectAreaLTC2=rt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=g;const G=i.hash;(G.directionalLength!==_||G.pointLength!==p||G.spotLength!==d||G.rectAreaLength!==E||G.hemiLength!==x||G.numDirectionalShadows!==M||G.numPointShadows!==S||G.numSpotShadows!==A||G.numSpotMaps!==b||G.numLightProbes!==v)&&(i.directional.length=_,i.spot.length=d,i.rectArea.length=E,i.point.length=p,i.hemi.length=x,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=A+b-P,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=v,G.directionalLength=_,G.pointLength=p,G.spotLength=d,G.rectAreaLength=E,G.hemiLength=x,G.numDirectionalShadows=M,G.numPointShadows=S,G.numSpotShadows=A,G.numSpotMaps=b,G.numLightProbes=v,i.version=mg++)}function c(h,u){let f=0,m=0,g=0,_=0,p=0;const d=u.matrixWorldInverse;for(let E=0,x=h.length;E<x;E++){const M=h[E];if(M.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(d),f++}else if(M.isSpotLight){const S=i.spot[g];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(d),S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(d),g++}else if(M.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(d),o.identity(),a.copy(M.matrixWorld),a.premultiply(d),o.extractRotation(a),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){const S=i.point[m];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(d),m++}else if(M.isHemisphereLight){const S=i.hemi[p];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(d),p++}}}return{setup:l,setupView:c,state:i}}function Sc(r,t){const e=new gg(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function vg(r,t){let e=new WeakMap;function n(s,a=0){const o=e.get(s);let l;return o===void 0?(l=new Sc(r,t),e.set(s,[l])):a>=o.length?(l=new Sc(r,t),o.push(l)):l=o[a],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class xg extends oi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Mg extends oi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Sg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Eg(r,t,e){let n=new Zs;const i=new Rt,s=new Rt,a=new Me,o=new xg({depthPacking:xf}),l=new Mg,c={},h=e.maxTextureSize,u={[ri]:Oe,[Oe]:ri,[Nn]:Nn},f=new Ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:Sg,fragmentShader:yg}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new He;g.setAttribute("position",new Je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new $t(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kc;let d=this.type;this.render=function(S,A,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;const P=r.getRenderTarget(),v=r.getActiveCubeFace(),w=r.getActiveMipmapLevel(),G=r.state;G.setBlending(Jn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const F=d!==Dn&&this.type===Dn,q=d===Dn&&this.type!==Dn;for(let C=0,N=S.length;C<N;C++){const X=S[C],W=X.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const Z=W.getFrameExtents();if(i.multiply(Z),s.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/Z.x),i.x=s.x*Z.x,W.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/Z.y),i.y=s.y*Z.y,W.mapSize.y=s.y)),W.map===null||F===!0||q===!0){const j=this.type!==Dn?{minFilter:Ue,magFilter:Ue}:{};W.map!==null&&W.map.dispose(),W.map=new Di(i.x,i.y,j),W.map.texture.name=X.name+".shadowMap",W.camera.updateProjectionMatrix()}r.setRenderTarget(W.map),r.clear();const K=W.getViewportCount();for(let j=0;j<K;j++){const U=W.getViewport(j);a.set(s.x*U.x,s.y*U.y,s.x*U.z,s.y*U.w),G.viewport(a),W.updateMatrices(X,j),n=W.getFrustum(),M(A,b,W.camera,X,this.type)}W.isPointLightShadow!==!0&&this.type===Dn&&E(W,b),W.needsUpdate=!1}d=this.type,p.needsUpdate=!1,r.setRenderTarget(P,v,w)};function E(S,A){const b=t.update(_);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Di(i.x,i.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,r.setRenderTarget(S.mapPass),r.clear(),r.renderBufferDirect(A,null,b,f,_,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,r.setRenderTarget(S.map),r.clear(),r.renderBufferDirect(A,null,b,m,_,null)}function x(S,A,b,P){let v=null;const w=b.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(w!==void 0)v=w;else if(v=b.isPointLight===!0?l:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const G=v.uuid,F=A.uuid;let q=c[G];q===void 0&&(q={},c[G]=q);let C=q[F];C===void 0&&(C=v.clone(),q[F]=C),v=C}if(v.visible=A.visible,v.wireframe=A.wireframe,P===Dn?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:u[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,b.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const G=r.properties.get(v);G.light=b}return v}function M(S,A,b,P,v){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&v===Dn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,S.matrixWorld);const F=t.update(S),q=S.material;if(Array.isArray(q)){const C=F.groups;for(let N=0,X=C.length;N<X;N++){const W=C[N],Z=q[W.materialIndex];if(Z&&Z.visible){const K=x(S,Z,P,v);r.renderBufferDirect(b,null,F,K,S,W)}}}else if(q.visible){const C=x(S,q,P,v);r.renderBufferDirect(b,null,F,C,S,null)}}const G=S.children;for(let F=0,q=G.length;F<q;F++)M(G[F],A,b,P,v)}}function Tg(r,t,e){const n=e.isWebGL2;function i(){let L=!1;const ot=new Me;let et=null;const Y=new Me(0,0,0,0);return{setMask:function(nt){et!==nt&&!L&&(r.colorMask(nt,nt,nt,nt),et=nt)},setLocked:function(nt){L=nt},setClear:function(nt,_t,Ht,le,nn){nn===!0&&(nt*=le,_t*=le,Ht*=le),ot.set(nt,_t,Ht,le),Y.equals(ot)===!1&&(r.clearColor(nt,_t,Ht,le),Y.copy(ot))},reset:function(){L=!1,et=null,Y.set(-1,0,0,0)}}}function s(){let L=!1,ot=null,et=null,Y=null;return{setTest:function(nt){nt?Ct(r.DEPTH_TEST):ee(r.DEPTH_TEST)},setMask:function(nt){ot!==nt&&!L&&(r.depthMask(nt),ot=nt)},setFunc:function(nt){if(et!==nt){switch(nt){case Yu:r.depthFunc(r.NEVER);break;case ju:r.depthFunc(r.ALWAYS);break;case Ku:r.depthFunc(r.LESS);break;case Us:r.depthFunc(r.LEQUAL);break;case Zu:r.depthFunc(r.EQUAL);break;case $u:r.depthFunc(r.GEQUAL);break;case Ju:r.depthFunc(r.GREATER);break;case Qu:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}et=nt}},setLocked:function(nt){L=nt},setClear:function(nt){Y!==nt&&(r.clearDepth(nt),Y=nt)},reset:function(){L=!1,ot=null,et=null,Y=null}}}function a(){let L=!1,ot=null,et=null,Y=null,nt=null,_t=null,Ht=null,le=null,nn=null;return{setTest:function(Kt){L||(Kt?Ct(r.STENCIL_TEST):ee(r.STENCIL_TEST))},setMask:function(Kt){ot!==Kt&&!L&&(r.stencilMask(Kt),ot=Kt)},setFunc:function(Kt,Ce,vn){(et!==Kt||Y!==Ce||nt!==vn)&&(r.stencilFunc(Kt,Ce,vn),et=Kt,Y=Ce,nt=vn)},setOp:function(Kt,Ce,vn){(_t!==Kt||Ht!==Ce||le!==vn)&&(r.stencilOp(Kt,Ce,vn),_t=Kt,Ht=Ce,le=vn)},setLocked:function(Kt){L=Kt},setClear:function(Kt){nn!==Kt&&(r.clearStencil(Kt),nn=Kt)},reset:function(){L=!1,ot=null,et=null,Y=null,nt=null,_t=null,Ht=null,le=null,nn=null}}}const o=new i,l=new s,c=new a,h=new WeakMap,u=new WeakMap;let f={},m={},g=new WeakMap,_=[],p=null,d=!1,E=null,x=null,M=null,S=null,A=null,b=null,P=null,v=new Ot(0,0,0),w=0,G=!1,F=null,q=null,C=null,N=null,X=null;const W=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,K=0;const j=r.getParameter(r.VERSION);j.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(j)[1]),Z=K>=1):j.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),Z=K>=2);let U=null,k={};const at=r.getParameter(r.SCISSOR_BOX),st=r.getParameter(r.VIEWPORT),lt=new Me().fromArray(at),vt=new Me().fromArray(st);function Bt(L,ot,et,Y){const nt=new Uint8Array(4),_t=r.createTexture();r.bindTexture(L,_t),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ht=0;Ht<et;Ht++)n&&(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)?r.texImage3D(ot,0,r.RGBA,1,1,Y,0,r.RGBA,r.UNSIGNED_BYTE,nt):r.texImage2D(ot+Ht,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,nt);return _t}const Et={};Et[r.TEXTURE_2D]=Bt(r.TEXTURE_2D,r.TEXTURE_2D,1),Et[r.TEXTURE_CUBE_MAP]=Bt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Et[r.TEXTURE_2D_ARRAY]=Bt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Et[r.TEXTURE_3D]=Bt(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ct(r.DEPTH_TEST),l.setFunc(Us),Ut(!1),It(il),Ct(r.CULL_FACE),yt(Jn);function Ct(L){f[L]!==!0&&(r.enable(L),f[L]=!0)}function ee(L){f[L]!==!1&&(r.disable(L),f[L]=!1)}function Dt(L,ot){return m[L]!==ot?(r.bindFramebuffer(L,ot),m[L]=ot,n&&(L===r.DRAW_FRAMEBUFFER&&(m[r.FRAMEBUFFER]=ot),L===r.FRAMEBUFFER&&(m[r.DRAW_FRAMEBUFFER]=ot)),!0):!1}function O(L,ot){let et=_,Y=!1;if(L)if(et=g.get(ot),et===void 0&&(et=[],g.set(ot,et)),L.isWebGLMultipleRenderTargets){const nt=L.texture;if(et.length!==nt.length||et[0]!==r.COLOR_ATTACHMENT0){for(let _t=0,Ht=nt.length;_t<Ht;_t++)et[_t]=r.COLOR_ATTACHMENT0+_t;et.length=nt.length,Y=!0}}else et[0]!==r.COLOR_ATTACHMENT0&&(et[0]=r.COLOR_ATTACHMENT0,Y=!0);else et[0]!==r.BACK&&(et[0]=r.BACK,Y=!0);Y&&(e.isWebGL2?r.drawBuffers(et):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(et))}function We(L){return p!==L?(r.useProgram(L),p=L,!0):!1}const pt={[Mi]:r.FUNC_ADD,[Du]:r.FUNC_SUBTRACT,[Uu]:r.FUNC_REVERSE_SUBTRACT};if(n)pt[ol]=r.MIN,pt[ll]=r.MAX;else{const L=t.get("EXT_blend_minmax");L!==null&&(pt[ol]=L.MIN_EXT,pt[ll]=L.MAX_EXT)}const Tt={[Iu]:r.ZERO,[Nu]:r.ONE,[Ou]:r.SRC_COLOR,[Ya]:r.SRC_ALPHA,[Hu]:r.SRC_ALPHA_SATURATE,[Gu]:r.DST_COLOR,[Bu]:r.DST_ALPHA,[Fu]:r.ONE_MINUS_SRC_COLOR,[ja]:r.ONE_MINUS_SRC_ALPHA,[ku]:r.ONE_MINUS_DST_COLOR,[zu]:r.ONE_MINUS_DST_ALPHA,[Vu]:r.CONSTANT_COLOR,[Wu]:r.ONE_MINUS_CONSTANT_COLOR,[Xu]:r.CONSTANT_ALPHA,[qu]:r.ONE_MINUS_CONSTANT_ALPHA};function yt(L,ot,et,Y,nt,_t,Ht,le,nn,Kt){if(L===Jn){d===!0&&(ee(r.BLEND),d=!1);return}if(d===!1&&(Ct(r.BLEND),d=!0),L!==Lu){if(L!==E||Kt!==G){if((x!==Mi||A!==Mi)&&(r.blendEquation(r.FUNC_ADD),x=Mi,A=Mi),Kt)switch(L){case lr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case rl:r.blendFunc(r.ONE,r.ONE);break;case sl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case al:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case lr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case rl:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case sl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case al:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}M=null,S=null,b=null,P=null,v.set(0,0,0),w=0,E=L,G=Kt}return}nt=nt||ot,_t=_t||et,Ht=Ht||Y,(ot!==x||nt!==A)&&(r.blendEquationSeparate(pt[ot],pt[nt]),x=ot,A=nt),(et!==M||Y!==S||_t!==b||Ht!==P)&&(r.blendFuncSeparate(Tt[et],Tt[Y],Tt[_t],Tt[Ht]),M=et,S=Y,b=_t,P=Ht),(le.equals(v)===!1||nn!==w)&&(r.blendColor(le.r,le.g,le.b,nn),v.copy(le),w=nn),E=L,G=!1}function ne(L,ot){L.side===Nn?ee(r.CULL_FACE):Ct(r.CULL_FACE);let et=L.side===Oe;ot&&(et=!et),Ut(et),L.blending===lr&&L.transparent===!1?yt(Jn):yt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);const Y=L.stencilWrite;c.setTest(Y),Y&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),_e(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Ct(r.SAMPLE_ALPHA_TO_COVERAGE):ee(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ut(L){F!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),F=L)}function It(L){L!==Cu?(Ct(r.CULL_FACE),L!==q&&(L===il?r.cullFace(r.BACK):L===Pu?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ee(r.CULL_FACE),q=L}function Xt(L){L!==C&&(Z&&r.lineWidth(L),C=L)}function _e(L,ot,et){L?(Ct(r.POLYGON_OFFSET_FILL),(N!==ot||X!==et)&&(r.polygonOffset(ot,et),N=ot,X=et)):ee(r.POLYGON_OFFSET_FILL)}function Te(L){L?Ct(r.SCISSOR_TEST):ee(r.SCISSOR_TEST)}function R(L){L===void 0&&(L=r.TEXTURE0+W-1),U!==L&&(r.activeTexture(L),U=L)}function y(L,ot,et){et===void 0&&(U===null?et=r.TEXTURE0+W-1:et=U);let Y=k[et];Y===void 0&&(Y={type:void 0,texture:void 0},k[et]=Y),(Y.type!==L||Y.texture!==ot)&&(U!==et&&(r.activeTexture(et),U=et),r.bindTexture(L,ot||Et[L]),Y.type=L,Y.texture=ot)}function B(){const L=k[U];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Q(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{r.compressedTexImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function tt(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ft(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function it(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ct(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xt(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function kt(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Vt(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function bt(L){lt.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),lt.copy(L))}function Mt(L){vt.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),vt.copy(L))}function mt(L,ot){let et=u.get(ot);et===void 0&&(et=new WeakMap,u.set(ot,et));let Y=et.get(L);Y===void 0&&(Y=r.getUniformBlockIndex(ot,L.name),et.set(L,Y))}function ut(L,ot){const Y=u.get(ot).get(L);h.get(ot)!==Y&&(r.uniformBlockBinding(ot,Y,L.__bindingPointIndex),h.set(ot,Y))}function Gt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},U=null,k={},m={},g=new WeakMap,_=[],p=null,d=!1,E=null,x=null,M=null,S=null,A=null,b=null,P=null,v=new Ot(0,0,0),w=0,G=!1,F=null,q=null,C=null,N=null,X=null,lt.set(0,0,r.canvas.width,r.canvas.height),vt.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ct,disable:ee,bindFramebuffer:Dt,drawBuffers:O,useProgram:We,setBlending:yt,setMaterial:ne,setFlipSided:Ut,setCullFace:It,setLineWidth:Xt,setPolygonOffset:_e,setScissorTest:Te,activeTexture:R,bindTexture:y,unbindTexture:B,compressedTexImage2D:Q,compressedTexImage3D:$,texImage2D:J,texImage3D:Vt,updateUBOMapping:mt,uniformBlockBinding:ut,texStorage2D:xt,texStorage3D:kt,texSubImage2D:tt,texSubImage3D:ft,compressedTexSubImage2D:it,compressedTexSubImage3D:ct,scissor:bt,viewport:Mt,reset:Gt}}function bg(r,t,e,n,i,s,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const p=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(R,y){return d?new OffscreenCanvas(R,y):Bs("canvas")}function x(R,y,B,Q){let $=1;if((R.width>Q||R.height>Q)&&($=Q/Math.max(R.width,R.height)),$<1||y===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const tt=y?no:Math.floor,ft=tt($*R.width),it=tt($*R.height);_===void 0&&(_=E(ft,it));const ct=B?E(ft,it):_;return ct.width=ft,ct.height=it,ct.getContext("2d").drawImage(R,0,0,ft,it),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+ft+"x"+it+")."),ct}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function M(R){return Fl(R.width)&&Fl(R.height)}function S(R){return o?!1:R.wrapS!==_n||R.wrapT!==_n||R.minFilter!==Ue&&R.minFilter!==an}function A(R,y){return R.generateMipmaps&&y&&R.minFilter!==Ue&&R.minFilter!==an}function b(R){r.generateMipmap(R)}function P(R,y,B,Q,$=!1){if(o===!1)return y;if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let tt=y;if(y===r.RED&&(B===r.FLOAT&&(tt=r.R32F),B===r.HALF_FLOAT&&(tt=r.R16F),B===r.UNSIGNED_BYTE&&(tt=r.R8)),y===r.RED_INTEGER&&(B===r.UNSIGNED_BYTE&&(tt=r.R8UI),B===r.UNSIGNED_SHORT&&(tt=r.R16UI),B===r.UNSIGNED_INT&&(tt=r.R32UI),B===r.BYTE&&(tt=r.R8I),B===r.SHORT&&(tt=r.R16I),B===r.INT&&(tt=r.R32I)),y===r.RG&&(B===r.FLOAT&&(tt=r.RG32F),B===r.HALF_FLOAT&&(tt=r.RG16F),B===r.UNSIGNED_BYTE&&(tt=r.RG8)),y===r.RGBA){const ft=$?Is:Wt.getTransfer(Q);B===r.FLOAT&&(tt=r.RGBA32F),B===r.HALF_FLOAT&&(tt=r.RGBA16F),B===r.UNSIGNED_BYTE&&(tt=ft===Zt?r.SRGB8_ALPHA8:r.RGBA8),B===r.UNSIGNED_SHORT_4_4_4_4&&(tt=r.RGBA4),B===r.UNSIGNED_SHORT_5_5_5_1&&(tt=r.RGB5_A1)}return(tt===r.R16F||tt===r.R32F||tt===r.RG16F||tt===r.RG32F||tt===r.RGBA16F||tt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function v(R,y,B){return A(R,B)===!0||R.isFramebufferTexture&&R.minFilter!==Ue&&R.minFilter!==an?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function w(R){return R===Ue||R===cl||R===sa?r.NEAREST:r.LINEAR}function G(R){const y=R.target;y.removeEventListener("dispose",G),q(y),y.isVideoTexture&&g.delete(y)}function F(R){const y=R.target;y.removeEventListener("dispose",F),N(y)}function q(R){const y=n.get(R);if(y.__webglInit===void 0)return;const B=R.source,Q=p.get(B);if(Q){const $=Q[y.__cacheKey];$.usedTimes--,$.usedTimes===0&&C(R),Object.keys(Q).length===0&&p.delete(B)}n.remove(R)}function C(R){const y=n.get(R);r.deleteTexture(y.__webglTexture);const B=R.source,Q=p.get(B);delete Q[y.__cacheKey],a.memory.textures--}function N(R){const y=R.texture,B=n.get(R),Q=n.get(y);if(Q.__webglTexture!==void 0&&(r.deleteTexture(Q.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(B.__webglFramebuffer[$]))for(let tt=0;tt<B.__webglFramebuffer[$].length;tt++)r.deleteFramebuffer(B.__webglFramebuffer[$][tt]);else r.deleteFramebuffer(B.__webglFramebuffer[$]);B.__webglDepthbuffer&&r.deleteRenderbuffer(B.__webglDepthbuffer[$])}else{if(Array.isArray(B.__webglFramebuffer))for(let $=0;$<B.__webglFramebuffer.length;$++)r.deleteFramebuffer(B.__webglFramebuffer[$]);else r.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&r.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&r.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let $=0;$<B.__webglColorRenderbuffer.length;$++)B.__webglColorRenderbuffer[$]&&r.deleteRenderbuffer(B.__webglColorRenderbuffer[$]);B.__webglDepthRenderbuffer&&r.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let $=0,tt=y.length;$<tt;$++){const ft=n.get(y[$]);ft.__webglTexture&&(r.deleteTexture(ft.__webglTexture),a.memory.textures--),n.remove(y[$])}n.remove(y),n.remove(R)}let X=0;function W(){X=0}function Z(){const R=X;return R>=l&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l),X+=1,R}function K(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function j(R,y){const B=n.get(R);if(R.isVideoTexture&&_e(R),R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){const Q=R.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ct(B,R,y);return}}e.bindTexture(r.TEXTURE_2D,B.__webglTexture,r.TEXTURE0+y)}function U(R,y){const B=n.get(R);if(R.version>0&&B.__version!==R.version){Ct(B,R,y);return}e.bindTexture(r.TEXTURE_2D_ARRAY,B.__webglTexture,r.TEXTURE0+y)}function k(R,y){const B=n.get(R);if(R.version>0&&B.__version!==R.version){Ct(B,R,y);return}e.bindTexture(r.TEXTURE_3D,B.__webglTexture,r.TEXTURE0+y)}function at(R,y){const B=n.get(R);if(R.version>0&&B.__version!==R.version){ee(B,R,y);return}e.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+y)}const st={[$a]:r.REPEAT,[_n]:r.CLAMP_TO_EDGE,[Ja]:r.MIRRORED_REPEAT},lt={[Ue]:r.NEAREST,[cl]:r.NEAREST_MIPMAP_NEAREST,[sa]:r.NEAREST_MIPMAP_LINEAR,[an]:r.LINEAR,[lf]:r.LINEAR_MIPMAP_NEAREST,[kr]:r.LINEAR_MIPMAP_LINEAR},vt={[Sf]:r.NEVER,[Rf]:r.ALWAYS,[yf]:r.LESS,[Tf]:r.LEQUAL,[Ef]:r.EQUAL,[wf]:r.GEQUAL,[bf]:r.GREATER,[Af]:r.NOTEQUAL};function Bt(R,y,B){if(B?(r.texParameteri(R,r.TEXTURE_WRAP_S,st[y.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,st[y.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,st[y.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,lt[y.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,lt[y.minFilter])):(r.texParameteri(R,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(R,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(y.wrapS!==_n||y.wrapT!==_n)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(R,r.TEXTURE_MAG_FILTER,w(y.magFilter)),r.texParameteri(R,r.TEXTURE_MIN_FILTER,w(y.minFilter)),y.minFilter!==Ue&&y.minFilter!==an&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,vt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const Q=t.get("EXT_texture_filter_anisotropic");if(y.magFilter===Ue||y.minFilter!==sa&&y.minFilter!==kr||y.type===jn&&t.has("OES_texture_float_linear")===!1||o===!1&&y.type===Hr&&t.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(r.texParameterf(R,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function Et(R,y){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",G));const Q=y.source;let $=p.get(Q);$===void 0&&($={},p.set(Q,$));const tt=K(y);if(tt!==R.__cacheKey){$[tt]===void 0&&($[tt]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,B=!0),$[tt].usedTimes++;const ft=$[R.__cacheKey];ft!==void 0&&($[R.__cacheKey].usedTimes--,ft.usedTimes===0&&C(y)),R.__cacheKey=tt,R.__webglTexture=$[tt].texture}return B}function Ct(R,y,B){let Q=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Q=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Q=r.TEXTURE_3D);const $=Et(R,y),tt=y.source;e.bindTexture(Q,R.__webglTexture,r.TEXTURE0+B);const ft=n.get(tt);if(tt.version!==ft.__version||$===!0){e.activeTexture(r.TEXTURE0+B);const it=Wt.getPrimaries(Wt.workingColorSpace),ct=y.colorSpace===cn?null:Wt.getPrimaries(y.colorSpace),xt=y.colorSpace===cn||it===ct?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const kt=S(y)&&M(y.image)===!1;let J=x(y.image,kt,!1,h);J=Te(y,J);const Vt=M(J)||o,bt=s.convert(y.format,y.colorSpace);let Mt=s.convert(y.type),mt=P(y.internalFormat,bt,Mt,y.colorSpace,y.isVideoTexture);Bt(Q,y,Vt);let ut;const Gt=y.mipmaps,L=o&&y.isVideoTexture!==!0,ot=ft.__version===void 0||$===!0,et=v(y,J,Vt);if(y.isDepthTexture)mt=r.DEPTH_COMPONENT,o?y.type===jn?mt=r.DEPTH_COMPONENT32F:y.type===Yn?mt=r.DEPTH_COMPONENT24:y.type===bi?mt=r.DEPTH24_STENCIL8:mt=r.DEPTH_COMPONENT16:y.type===jn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Ai&&mt===r.DEPTH_COMPONENT&&y.type!==To&&y.type!==Yn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Yn,Mt=s.convert(y.type)),y.format===mr&&mt===r.DEPTH_COMPONENT&&(mt=r.DEPTH_STENCIL,y.type!==bi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=bi,Mt=s.convert(y.type))),ot&&(L?e.texStorage2D(r.TEXTURE_2D,1,mt,J.width,J.height):e.texImage2D(r.TEXTURE_2D,0,mt,J.width,J.height,0,bt,Mt,null));else if(y.isDataTexture)if(Gt.length>0&&Vt){L&&ot&&e.texStorage2D(r.TEXTURE_2D,et,mt,Gt[0].width,Gt[0].height);for(let Y=0,nt=Gt.length;Y<nt;Y++)ut=Gt[Y],L?e.texSubImage2D(r.TEXTURE_2D,Y,0,0,ut.width,ut.height,bt,Mt,ut.data):e.texImage2D(r.TEXTURE_2D,Y,mt,ut.width,ut.height,0,bt,Mt,ut.data);y.generateMipmaps=!1}else L?(ot&&e.texStorage2D(r.TEXTURE_2D,et,mt,J.width,J.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,J.width,J.height,bt,Mt,J.data)):e.texImage2D(r.TEXTURE_2D,0,mt,J.width,J.height,0,bt,Mt,J.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){L&&ot&&e.texStorage3D(r.TEXTURE_2D_ARRAY,et,mt,Gt[0].width,Gt[0].height,J.depth);for(let Y=0,nt=Gt.length;Y<nt;Y++)ut=Gt[Y],y.format!==gn?bt!==null?L?e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,0,ut.width,ut.height,J.depth,bt,ut.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Y,mt,ut.width,ut.height,J.depth,0,ut.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?e.texSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,0,ut.width,ut.height,J.depth,bt,Mt,ut.data):e.texImage3D(r.TEXTURE_2D_ARRAY,Y,mt,ut.width,ut.height,J.depth,0,bt,Mt,ut.data)}else{L&&ot&&e.texStorage2D(r.TEXTURE_2D,et,mt,Gt[0].width,Gt[0].height);for(let Y=0,nt=Gt.length;Y<nt;Y++)ut=Gt[Y],y.format!==gn?bt!==null?L?e.compressedTexSubImage2D(r.TEXTURE_2D,Y,0,0,ut.width,ut.height,bt,ut.data):e.compressedTexImage2D(r.TEXTURE_2D,Y,mt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?e.texSubImage2D(r.TEXTURE_2D,Y,0,0,ut.width,ut.height,bt,Mt,ut.data):e.texImage2D(r.TEXTURE_2D,Y,mt,ut.width,ut.height,0,bt,Mt,ut.data)}else if(y.isDataArrayTexture)L?(ot&&e.texStorage3D(r.TEXTURE_2D_ARRAY,et,mt,J.width,J.height,J.depth),e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,bt,Mt,J.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,mt,J.width,J.height,J.depth,0,bt,Mt,J.data);else if(y.isData3DTexture)L?(ot&&e.texStorage3D(r.TEXTURE_3D,et,mt,J.width,J.height,J.depth),e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,bt,Mt,J.data)):e.texImage3D(r.TEXTURE_3D,0,mt,J.width,J.height,J.depth,0,bt,Mt,J.data);else if(y.isFramebufferTexture){if(ot)if(L)e.texStorage2D(r.TEXTURE_2D,et,mt,J.width,J.height);else{let Y=J.width,nt=J.height;for(let _t=0;_t<et;_t++)e.texImage2D(r.TEXTURE_2D,_t,mt,Y,nt,0,bt,Mt,null),Y>>=1,nt>>=1}}else if(Gt.length>0&&Vt){L&&ot&&e.texStorage2D(r.TEXTURE_2D,et,mt,Gt[0].width,Gt[0].height);for(let Y=0,nt=Gt.length;Y<nt;Y++)ut=Gt[Y],L?e.texSubImage2D(r.TEXTURE_2D,Y,0,0,bt,Mt,ut):e.texImage2D(r.TEXTURE_2D,Y,mt,bt,Mt,ut);y.generateMipmaps=!1}else L?(ot&&e.texStorage2D(r.TEXTURE_2D,et,mt,J.width,J.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,bt,Mt,J)):e.texImage2D(r.TEXTURE_2D,0,mt,bt,Mt,J);A(y,Vt)&&b(Q),ft.__version=tt.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function ee(R,y,B){if(y.image.length!==6)return;const Q=Et(R,y),$=y.source;e.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+B);const tt=n.get($);if($.version!==tt.__version||Q===!0){e.activeTexture(r.TEXTURE0+B);const ft=Wt.getPrimaries(Wt.workingColorSpace),it=y.colorSpace===cn?null:Wt.getPrimaries(y.colorSpace),ct=y.colorSpace===cn||ft===it?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);const xt=y.isCompressedTexture||y.image[0].isCompressedTexture,kt=y.image[0]&&y.image[0].isDataTexture,J=[];for(let Y=0;Y<6;Y++)!xt&&!kt?J[Y]=x(y.image[Y],!1,!0,c):J[Y]=kt?y.image[Y].image:y.image[Y],J[Y]=Te(y,J[Y]);const Vt=J[0],bt=M(Vt)||o,Mt=s.convert(y.format,y.colorSpace),mt=s.convert(y.type),ut=P(y.internalFormat,Mt,mt,y.colorSpace),Gt=o&&y.isVideoTexture!==!0,L=tt.__version===void 0||Q===!0;let ot=v(y,Vt,bt);Bt(r.TEXTURE_CUBE_MAP,y,bt);let et;if(xt){Gt&&L&&e.texStorage2D(r.TEXTURE_CUBE_MAP,ot,ut,Vt.width,Vt.height);for(let Y=0;Y<6;Y++){et=J[Y].mipmaps;for(let nt=0;nt<et.length;nt++){const _t=et[nt];y.format!==gn?Mt!==null?Gt?e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,nt,0,0,_t.width,_t.height,Mt,_t.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,nt,ut,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,nt,0,0,_t.width,_t.height,Mt,mt,_t.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,nt,ut,_t.width,_t.height,0,Mt,mt,_t.data)}}}else{et=y.mipmaps,Gt&&L&&(et.length>0&&ot++,e.texStorage2D(r.TEXTURE_CUBE_MAP,ot,ut,J[0].width,J[0].height));for(let Y=0;Y<6;Y++)if(kt){Gt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,J[Y].width,J[Y].height,Mt,mt,J[Y].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,ut,J[Y].width,J[Y].height,0,Mt,mt,J[Y].data);for(let nt=0;nt<et.length;nt++){const Ht=et[nt].image[Y].image;Gt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,nt+1,0,0,Ht.width,Ht.height,Mt,mt,Ht.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,nt+1,ut,Ht.width,Ht.height,0,Mt,mt,Ht.data)}}else{Gt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Mt,mt,J[Y]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,ut,Mt,mt,J[Y]);for(let nt=0;nt<et.length;nt++){const _t=et[nt];Gt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,nt+1,0,0,Mt,mt,_t.image[Y]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,nt+1,ut,Mt,mt,_t.image[Y])}}}A(y,bt)&&b(r.TEXTURE_CUBE_MAP),tt.__version=$.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function Dt(R,y,B,Q,$,tt){const ft=s.convert(B.format,B.colorSpace),it=s.convert(B.type),ct=P(B.internalFormat,ft,it,B.colorSpace);if(!n.get(y).__hasExternalTextures){const kt=Math.max(1,y.width>>tt),J=Math.max(1,y.height>>tt);$===r.TEXTURE_3D||$===r.TEXTURE_2D_ARRAY?e.texImage3D($,tt,ct,kt,J,y.depth,0,ft,it,null):e.texImage2D($,tt,ct,kt,J,0,ft,it,null)}e.bindFramebuffer(r.FRAMEBUFFER,R),Xt(y)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,$,n.get(B).__webglTexture,0,It(y)):($===r.TEXTURE_2D||$>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Q,$,n.get(B).__webglTexture,tt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function O(R,y,B){if(r.bindRenderbuffer(r.RENDERBUFFER,R),y.depthBuffer&&!y.stencilBuffer){let Q=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(B||Xt(y)){const $=y.depthTexture;$&&$.isDepthTexture&&($.type===jn?Q=r.DEPTH_COMPONENT32F:$.type===Yn&&(Q=r.DEPTH_COMPONENT24));const tt=It(y);Xt(y)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,tt,Q,y.width,y.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,tt,Q,y.width,y.height)}else r.renderbufferStorage(r.RENDERBUFFER,Q,y.width,y.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,R)}else if(y.depthBuffer&&y.stencilBuffer){const Q=It(y);B&&Xt(y)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Q,r.DEPTH24_STENCIL8,y.width,y.height):Xt(y)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Q,r.DEPTH24_STENCIL8,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,R)}else{const Q=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let $=0;$<Q.length;$++){const tt=Q[$],ft=s.convert(tt.format,tt.colorSpace),it=s.convert(tt.type),ct=P(tt.internalFormat,ft,it,tt.colorSpace),xt=It(y);B&&Xt(y)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,xt,ct,y.width,y.height):Xt(y)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,xt,ct,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,ct,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function We(R,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),j(y.depthTexture,0);const Q=n.get(y.depthTexture).__webglTexture,$=It(y);if(y.depthTexture.format===Ai)Xt(y)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0);else if(y.depthTexture.format===mr)Xt(y)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function pt(R){const y=n.get(R),B=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!y.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");We(y.__webglFramebuffer,R)}else if(B){y.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[Q]),y.__webglDepthbuffer[Q]=r.createRenderbuffer(),O(y.__webglDepthbuffer[Q],R,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=r.createRenderbuffer(),O(y.__webglDepthbuffer,R,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function Tt(R,y,B){const Q=n.get(R);y!==void 0&&Dt(Q.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),B!==void 0&&pt(R)}function yt(R){const y=R.texture,B=n.get(R),Q=n.get(y);R.addEventListener("dispose",F),R.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=y.version,a.memory.textures++);const $=R.isWebGLCubeRenderTarget===!0,tt=R.isWebGLMultipleRenderTargets===!0,ft=M(R)||o;if($){B.__webglFramebuffer=[];for(let it=0;it<6;it++)if(o&&y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer[it]=[];for(let ct=0;ct<y.mipmaps.length;ct++)B.__webglFramebuffer[it][ct]=r.createFramebuffer()}else B.__webglFramebuffer[it]=r.createFramebuffer()}else{if(o&&y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer=[];for(let it=0;it<y.mipmaps.length;it++)B.__webglFramebuffer[it]=r.createFramebuffer()}else B.__webglFramebuffer=r.createFramebuffer();if(tt)if(i.drawBuffers){const it=R.texture;for(let ct=0,xt=it.length;ct<xt;ct++){const kt=n.get(it[ct]);kt.__webglTexture===void 0&&(kt.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&Xt(R)===!1){const it=tt?y:[y];B.__webglMultisampledFramebuffer=r.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ct=0;ct<it.length;ct++){const xt=it[ct];B.__webglColorRenderbuffer[ct]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,B.__webglColorRenderbuffer[ct]);const kt=s.convert(xt.format,xt.colorSpace),J=s.convert(xt.type),Vt=P(xt.internalFormat,kt,J,xt.colorSpace,R.isXRRenderTarget===!0),bt=It(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,bt,Vt,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ct,r.RENDERBUFFER,B.__webglColorRenderbuffer[ct])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=r.createRenderbuffer(),O(B.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if($){e.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),Bt(r.TEXTURE_CUBE_MAP,y,ft);for(let it=0;it<6;it++)if(o&&y.mipmaps&&y.mipmaps.length>0)for(let ct=0;ct<y.mipmaps.length;ct++)Dt(B.__webglFramebuffer[it][ct],R,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+it,ct);else Dt(B.__webglFramebuffer[it],R,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);A(y,ft)&&b(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(tt){const it=R.texture;for(let ct=0,xt=it.length;ct<xt;ct++){const kt=it[ct],J=n.get(kt);e.bindTexture(r.TEXTURE_2D,J.__webglTexture),Bt(r.TEXTURE_2D,kt,ft),Dt(B.__webglFramebuffer,R,kt,r.COLOR_ATTACHMENT0+ct,r.TEXTURE_2D,0),A(kt,ft)&&b(r.TEXTURE_2D)}e.unbindTexture()}else{let it=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?it=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(it,Q.__webglTexture),Bt(it,y,ft),o&&y.mipmaps&&y.mipmaps.length>0)for(let ct=0;ct<y.mipmaps.length;ct++)Dt(B.__webglFramebuffer[ct],R,y,r.COLOR_ATTACHMENT0,it,ct);else Dt(B.__webglFramebuffer,R,y,r.COLOR_ATTACHMENT0,it,0);A(y,ft)&&b(it),e.unbindTexture()}R.depthBuffer&&pt(R)}function ne(R){const y=M(R)||o,B=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let Q=0,$=B.length;Q<$;Q++){const tt=B[Q];if(A(tt,y)){const ft=R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,it=n.get(tt).__webglTexture;e.bindTexture(ft,it),b(ft),e.unbindTexture()}}}function Ut(R){if(o&&R.samples>0&&Xt(R)===!1){const y=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],B=R.width,Q=R.height;let $=r.COLOR_BUFFER_BIT;const tt=[],ft=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,it=n.get(R),ct=R.isWebGLMultipleRenderTargets===!0;if(ct)for(let xt=0;xt<y.length;xt++)e.bindFramebuffer(r.FRAMEBUFFER,it.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,it.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+xt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,it.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,it.__webglFramebuffer);for(let xt=0;xt<y.length;xt++){tt.push(r.COLOR_ATTACHMENT0+xt),R.depthBuffer&&tt.push(ft);const kt=it.__ignoreDepthValues!==void 0?it.__ignoreDepthValues:!1;if(kt===!1&&(R.depthBuffer&&($|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&($|=r.STENCIL_BUFFER_BIT)),ct&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,it.__webglColorRenderbuffer[xt]),kt===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[ft]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[ft])),ct){const J=n.get(y[xt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,J,0)}r.blitFramebuffer(0,0,B,Q,0,0,B,Q,$,r.NEAREST),m&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,tt)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ct)for(let xt=0;xt<y.length;xt++){e.bindFramebuffer(r.FRAMEBUFFER,it.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xt,r.RENDERBUFFER,it.__webglColorRenderbuffer[xt]);const kt=n.get(y[xt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,it.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+xt,r.TEXTURE_2D,kt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,it.__webglMultisampledFramebuffer)}}function It(R){return Math.min(u,R.samples)}function Xt(R){const y=n.get(R);return o&&R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function _e(R){const y=a.render.frame;g.get(R)!==y&&(g.set(R,y),R.update())}function Te(R,y){const B=R.colorSpace,Q=R.format,$=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===to||B!==Bn&&B!==cn&&(Wt.getTransfer(B)===Zt?o===!1?t.has("EXT_sRGB")===!0&&Q===gn?(R.format=to,R.minFilter=an,R.generateMipmaps=!1):y=ah.sRGBToLinear(y):(Q!==gn||$!==ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),y}this.allocateTextureUnit=Z,this.resetTextureUnits=W,this.setTexture2D=j,this.setTexture2DArray=U,this.setTexture3D=k,this.setTextureCube=at,this.rebindTextures=Tt,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=Xt}function Ag(r,t,e){const n=e.isWebGL2;function i(s,a=cn){let o;const l=Wt.getTransfer(a);if(s===ti)return r.UNSIGNED_BYTE;if(s===Qc)return r.UNSIGNED_SHORT_4_4_4_4;if(s===th)return r.UNSIGNED_SHORT_5_5_5_1;if(s===cf)return r.BYTE;if(s===hf)return r.SHORT;if(s===To)return r.UNSIGNED_SHORT;if(s===Jc)return r.INT;if(s===Yn)return r.UNSIGNED_INT;if(s===jn)return r.FLOAT;if(s===Hr)return n?r.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===uf)return r.ALPHA;if(s===gn)return r.RGBA;if(s===ff)return r.LUMINANCE;if(s===df)return r.LUMINANCE_ALPHA;if(s===Ai)return r.DEPTH_COMPONENT;if(s===mr)return r.DEPTH_STENCIL;if(s===to)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===pf)return r.RED;if(s===eh)return r.RED_INTEGER;if(s===mf)return r.RG;if(s===nh)return r.RG_INTEGER;if(s===ih)return r.RGBA_INTEGER;if(s===aa||s===oa||s===la||s===ca)if(l===Zt)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===aa)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===oa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===la)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ca)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===aa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===oa)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===la)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ca)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===hl||s===ul||s===fl||s===dl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===hl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ul)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===fl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===dl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===_f)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===pl||s===ml)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===pl)return l===Zt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===ml)return l===Zt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===_l||s===gl||s===vl||s===xl||s===Ml||s===Sl||s===yl||s===El||s===Tl||s===bl||s===Al||s===wl||s===Rl||s===Cl)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===_l)return l===Zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===gl)return l===Zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===vl)return l===Zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===xl)return l===Zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ml)return l===Zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Sl)return l===Zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===yl)return l===Zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===El)return l===Zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Tl)return l===Zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===bl)return l===Zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Al)return l===Zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===wl)return l===Zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Rl)return l===Zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Cl)return l===Zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ha||s===Pl||s===Ll)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===ha)return l===Zt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Pl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ll)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===gf||s===Dl||s===Ul||s===Il)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(s===ha)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Dl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ul)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Il)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===bi?n?r.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class wg extends ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ei extends de{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Rg={type:"move"};class Na{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),d=this._getHandJoint(c,_);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Rg)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ei;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Cg extends Fe{constructor(t,e,n,i,s,a,o,l,c,h){if(h=h!==void 0?h:Ai,h!==Ai&&h!==mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ai&&(n=Yn),n===void 0&&h===mr&&(n=bi),super(null,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ue,this.minFilter=l!==void 0?l:Ue,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Pg extends Er{constructor(t,e){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,m=null,g=null;const _=e.getContextAttributes();let p=null,d=null;const E=[],x=[],M=new ln;M.layers.enable(1),M.viewport=new Me;const S=new ln;S.layers.enable(2),S.viewport=new Me;const A=[M,S],b=new wg;b.layers.enable(1),b.layers.enable(2);let P=null,v=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let k=E[U];return k===void 0&&(k=new Na,E[U]=k),k.getTargetRaySpace()},this.getControllerGrip=function(U){let k=E[U];return k===void 0&&(k=new Na,E[U]=k),k.getGripSpace()},this.getHand=function(U){let k=E[U];return k===void 0&&(k=new Na,E[U]=k),k.getHandSpace()};function w(U){const k=x.indexOf(U.inputSource);if(k===-1)return;const at=E[k];at!==void 0&&(at.update(U.inputSource,U.frame,c||a),at.dispatchEvent({type:U.type,data:U.inputSource}))}function G(){i.removeEventListener("select",w),i.removeEventListener("selectstart",w),i.removeEventListener("selectend",w),i.removeEventListener("squeeze",w),i.removeEventListener("squeezestart",w),i.removeEventListener("squeezeend",w),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",F);for(let U=0;U<E.length;U++){const k=x[U];k!==null&&(x[U]=null,E[U].disconnect(k))}P=null,v=null,t.setRenderTarget(p),m=null,f=null,u=null,i=null,d=null,j.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){s=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){o=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(U){c=U},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(U){if(i=U,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",w),i.addEventListener("selectstart",w),i.addEventListener("selectend",w),i.addEventListener("squeeze",w),i.addEventListener("squeezestart",w),i.addEventListener("squeezeend",w),i.addEventListener("end",G),i.addEventListener("inputsourceschange",F),_.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const k={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,e,k),i.updateRenderState({baseLayer:m}),d=new Di(m.framebufferWidth,m.framebufferHeight,{format:gn,type:ti,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let k=null,at=null,st=null;_.depth&&(st=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,k=_.stencil?mr:Ai,at=_.stencil?bi:Yn);const lt={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:s};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(lt),i.updateRenderState({layers:[f]}),d=new Di(f.textureWidth,f.textureHeight,{format:gn,type:ti,depthTexture:new Cg(f.textureWidth,f.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const vt=t.properties.get(d);vt.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),j.setContext(i),j.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function F(U){for(let k=0;k<U.removed.length;k++){const at=U.removed[k],st=x.indexOf(at);st>=0&&(x[st]=null,E[st].disconnect(at))}for(let k=0;k<U.added.length;k++){const at=U.added[k];let st=x.indexOf(at);if(st===-1){for(let vt=0;vt<E.length;vt++)if(vt>=x.length){x.push(at),st=vt;break}else if(x[vt]===null){x[vt]=at,st=vt;break}if(st===-1)break}const lt=E[st];lt&&lt.connect(at)}}const q=new D,C=new D;function N(U,k,at){q.setFromMatrixPosition(k.matrixWorld),C.setFromMatrixPosition(at.matrixWorld);const st=q.distanceTo(C),lt=k.projectionMatrix.elements,vt=at.projectionMatrix.elements,Bt=lt[14]/(lt[10]-1),Et=lt[14]/(lt[10]+1),Ct=(lt[9]+1)/lt[5],ee=(lt[9]-1)/lt[5],Dt=(lt[8]-1)/lt[0],O=(vt[8]+1)/vt[0],We=Bt*Dt,pt=Bt*O,Tt=st/(-Dt+O),yt=Tt*-Dt;k.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(yt),U.translateZ(Tt),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const ne=Bt+Tt,Ut=Et+Tt,It=We-yt,Xt=pt+(st-yt),_e=Ct*Et/Ut*ne,Te=ee*Et/Ut*ne;U.projectionMatrix.makePerspective(It,Xt,_e,Te,ne,Ut),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}function X(U,k){k===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(k.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(i===null)return;b.near=S.near=M.near=U.near,b.far=S.far=M.far=U.far,(P!==b.near||v!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),P=b.near,v=b.far);const k=U.parent,at=b.cameras;X(b,k);for(let st=0;st<at.length;st++)X(at[st],k);at.length===2?N(b,M,S):b.projectionMatrix.copy(M.projectionMatrix),W(U,b,k)};function W(U,k,at){at===null?U.matrix.copy(k.matrixWorld):(U.matrix.copy(at.matrixWorld),U.matrix.invert(),U.matrix.multiply(k.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(k.projectionMatrix),U.projectionMatrixInverse.copy(k.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=eo*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(U){l=U,f!==null&&(f.fixedFoveation=U),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=U)};let Z=null;function K(U,k){if(h=k.getViewerPose(c||a),g=k,h!==null){const at=h.views;m!==null&&(t.setRenderTargetFramebuffer(d,m.framebuffer),t.setRenderTarget(d));let st=!1;at.length!==b.cameras.length&&(b.cameras.length=0,st=!0);for(let lt=0;lt<at.length;lt++){const vt=at[lt];let Bt=null;if(m!==null)Bt=m.getViewport(vt);else{const Ct=u.getViewSubImage(f,vt);Bt=Ct.viewport,lt===0&&(t.setRenderTargetTextures(d,Ct.colorTexture,f.ignoreDepthValues?void 0:Ct.depthStencilTexture),t.setRenderTarget(d))}let Et=A[lt];Et===void 0&&(Et=new ln,Et.layers.enable(lt),Et.viewport=new Me,A[lt]=Et),Et.matrix.fromArray(vt.transform.matrix),Et.matrix.decompose(Et.position,Et.quaternion,Et.scale),Et.projectionMatrix.fromArray(vt.projectionMatrix),Et.projectionMatrixInverse.copy(Et.projectionMatrix).invert(),Et.viewport.set(Bt.x,Bt.y,Bt.width,Bt.height),lt===0&&(b.matrix.copy(Et.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),st===!0&&b.cameras.push(Et)}}for(let at=0;at<E.length;at++){const st=x[at],lt=E[at];st!==null&&lt!==void 0&&lt.update(st,k,c||a)}Z&&Z(U,k),k.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:k}),g=null}const j=new mh;j.setAnimationLoop(K),this.setAnimationLoop=function(U){Z=U},this.dispose=function(){}}}function Lg(r,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,fh(r)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function i(p,d,E,x,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),u(p,d)):d.isMeshPhongMaterial?(s(p,d),h(p,d)):d.isMeshStandardMaterial?(s(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,M)):d.isMeshMatcapMaterial?(s(p,d),g(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),_(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,E,x):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Oe&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Oe&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const E=t.get(d).envMap;if(E&&(p.envMap.value=E,p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const x=r._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*x,e(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,E,x){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*E,p.scale.value=x*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),t.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,E){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Oe&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function _(p,d){const E=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Dg(r,t,e,n){let i={},s={},a=[];const o=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,x){const M=x.program;n.uniformBlockBinding(E,M)}function c(E,x){let M=i[E.id];M===void 0&&(g(E),M=h(E),i[E.id]=M,E.addEventListener("dispose",p));const S=x.program;n.updateUBOMapping(E,S);const A=t.render.frame;s[E.id]!==A&&(f(E),s[E.id]=A)}function h(E){const x=u();E.__bindingPointIndex=x;const M=r.createBuffer(),S=E.__size,A=E.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,S,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,M),M}function u(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const x=i[E.id],M=E.uniforms,S=E.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let A=0,b=M.length;A<b;A++){const P=M[A];if(m(P,A,S)===!0){const v=P.__offset,w=Array.isArray(P.value)?P.value:[P.value];let G=0;for(let F=0;F<w.length;F++){const q=w[F],C=_(q);typeof q=="number"?(P.__data[0]=q,r.bufferSubData(r.UNIFORM_BUFFER,v+G,P.__data)):q.isMatrix3?(P.__data[0]=q.elements[0],P.__data[1]=q.elements[1],P.__data[2]=q.elements[2],P.__data[3]=q.elements[0],P.__data[4]=q.elements[3],P.__data[5]=q.elements[4],P.__data[6]=q.elements[5],P.__data[7]=q.elements[0],P.__data[8]=q.elements[6],P.__data[9]=q.elements[7],P.__data[10]=q.elements[8],P.__data[11]=q.elements[0]):(q.toArray(P.__data,G),G+=C.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,v,P.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function m(E,x,M){const S=E.value;if(M[x]===void 0){if(typeof S=="number")M[x]=S;else{const A=Array.isArray(S)?S:[S],b=[];for(let P=0;P<A.length;P++)b.push(A[P].clone());M[x]=b}return!0}else if(typeof S=="number"){if(M[x]!==S)return M[x]=S,!0}else{const A=Array.isArray(M[x])?M[x]:[M[x]],b=Array.isArray(S)?S:[S];for(let P=0;P<A.length;P++){const v=A[P];if(v.equals(b[P])===!1)return v.copy(b[P]),!0}}return!1}function g(E){const x=E.uniforms;let M=0;const S=16;let A=0;for(let b=0,P=x.length;b<P;b++){const v=x[b],w={boundary:0,storage:0},G=Array.isArray(v.value)?v.value:[v.value];for(let F=0,q=G.length;F<q;F++){const C=G[F],N=_(C);w.boundary+=N.boundary,w.storage+=N.storage}if(v.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),v.__offset=M,b>0){A=M%S;const F=S-A;A!==0&&F-w.boundary<0&&(M+=S-A,v.__offset=M)}M+=w.storage}return A=M%S,A>0&&(M+=S-A),E.__size=M,E.__cache={},this}function _(E){const x={boundary:0,storage:0};return typeof E=="number"?(x.boundary=4,x.storage=4):E.isVector2?(x.boundary=8,x.storage=8):E.isVector3||E.isColor?(x.boundary=16,x.storage=12):E.isVector4?(x.boundary=16,x.storage=16):E.isMatrix3?(x.boundary=48,x.storage=48):E.isMatrix4?(x.boundary=64,x.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),x}function p(E){const x=E.target;x.removeEventListener("dispose",p);const M=a.indexOf(x.__bindingPointIndex);a.splice(M,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function d(){for(const E in i)r.deleteBuffer(i[E]);a=[],i={},s={}}return{bind:l,update:c,dispose:d}}class Sh{constructor(t={}){const{canvas:e=Pf(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const d=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xe,this._useLegacyLights=!1,this.toneMapping=Qn,this.toneMappingExposure=1;const x=this;let M=!1,S=0,A=0,b=null,P=-1,v=null;const w=new Me,G=new Me;let F=null;const q=new Ot(0);let C=0,N=e.width,X=e.height,W=1,Z=null,K=null;const j=new Me(0,0,N,X),U=new Me(0,0,N,X);let k=!1;const at=new Zs;let st=!1,lt=!1,vt=null;const Bt=new se,Et=new Rt,Ct=new D,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Dt(){return b===null?W:1}let O=n;function We(T,I){for(let z=0;z<T.length;z++){const H=T[z],V=e.getContext(H,I);if(V!==null)return V}return null}try{const T={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${yo}`),e.addEventListener("webglcontextlost",Gt,!1),e.addEventListener("webglcontextrestored",L,!1),e.addEventListener("webglcontextcreationerror",ot,!1),O===null){const I=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&I.shift(),O=We(I,T),O===null)throw We(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let pt,Tt,yt,ne,Ut,It,Xt,_e,Te,R,y,B,Q,$,tt,ft,it,ct,xt,kt,J,Vt,bt,Mt;function mt(){pt=new Hm(O),Tt=new Om(O,pt,t),pt.init(Tt),Vt=new Ag(O,pt,Tt),yt=new Tg(O,pt,Tt),ne=new Xm(O),Ut=new hg,It=new bg(O,pt,yt,Ut,Tt,Vt,ne),Xt=new Bm(x),_e=new km(x),Te=new ed(O,Tt),bt=new Im(O,pt,Te,Tt),R=new Vm(O,Te,ne,bt),y=new Km(O,R,Te,ne),xt=new jm(O,Tt,It),ft=new Fm(Ut),B=new cg(x,Xt,_e,pt,Tt,bt,ft),Q=new Lg(x,Ut),$=new fg,tt=new vg(pt,Tt),ct=new Um(x,Xt,_e,yt,y,f,l),it=new Eg(x,y,Tt),Mt=new Dg(O,ne,Tt,yt),kt=new Nm(O,pt,ne,Tt),J=new Wm(O,pt,ne,Tt),ne.programs=B.programs,x.capabilities=Tt,x.extensions=pt,x.properties=Ut,x.renderLists=$,x.shadowMap=it,x.state=yt,x.info=ne}mt();const ut=new Pg(x,O);this.xr=ut,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const T=pt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=pt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(T){T!==void 0&&(W=T,this.setSize(N,X,!1))},this.getSize=function(T){return T.set(N,X)},this.setSize=function(T,I,z=!0){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=T,X=I,e.width=Math.floor(T*W),e.height=Math.floor(I*W),z===!0&&(e.style.width=T+"px",e.style.height=I+"px"),this.setViewport(0,0,T,I)},this.getDrawingBufferSize=function(T){return T.set(N*W,X*W).floor()},this.setDrawingBufferSize=function(T,I,z){N=T,X=I,W=z,e.width=Math.floor(T*z),e.height=Math.floor(I*z),this.setViewport(0,0,T,I)},this.getCurrentViewport=function(T){return T.copy(w)},this.getViewport=function(T){return T.copy(j)},this.setViewport=function(T,I,z,H){T.isVector4?j.set(T.x,T.y,T.z,T.w):j.set(T,I,z,H),yt.viewport(w.copy(j).multiplyScalar(W).floor())},this.getScissor=function(T){return T.copy(U)},this.setScissor=function(T,I,z,H){T.isVector4?U.set(T.x,T.y,T.z,T.w):U.set(T,I,z,H),yt.scissor(G.copy(U).multiplyScalar(W).floor())},this.getScissorTest=function(){return k},this.setScissorTest=function(T){yt.setScissorTest(k=T)},this.setOpaqueSort=function(T){Z=T},this.setTransparentSort=function(T){K=T},this.getClearColor=function(T){return T.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor.apply(ct,arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha.apply(ct,arguments)},this.clear=function(T=!0,I=!0,z=!0){let H=0;if(T){let V=!1;if(b!==null){const ht=b.texture.format;V=ht===ih||ht===nh||ht===eh}if(V){const ht=b.texture.type,dt=ht===ti||ht===Yn||ht===To||ht===bi||ht===Qc||ht===th,gt=ct.getClearColor(),St=ct.getClearAlpha(),Lt=gt.r,At=gt.g,wt=gt.b;dt?(m[0]=Lt,m[1]=At,m[2]=wt,m[3]=St,O.clearBufferuiv(O.COLOR,0,m)):(g[0]=Lt,g[1]=At,g[2]=wt,g[3]=St,O.clearBufferiv(O.COLOR,0,g))}else H|=O.COLOR_BUFFER_BIT}I&&(H|=O.DEPTH_BUFFER_BIT),z&&(H|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Gt,!1),e.removeEventListener("webglcontextrestored",L,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),$.dispose(),tt.dispose(),Ut.dispose(),Xt.dispose(),_e.dispose(),y.dispose(),bt.dispose(),Mt.dispose(),B.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",nn),ut.removeEventListener("sessionend",Kt),vt&&(vt.dispose(),vt=null),Ce.stop()};function Gt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const T=ne.autoReset,I=it.enabled,z=it.autoUpdate,H=it.needsUpdate,V=it.type;mt(),ne.autoReset=T,it.enabled=I,it.autoUpdate=z,it.needsUpdate=H,it.type=V}function ot(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function et(T){const I=T.target;I.removeEventListener("dispose",et),Y(I)}function Y(T){nt(T),Ut.remove(T)}function nt(T){const I=Ut.get(T).programs;I!==void 0&&(I.forEach(function(z){B.releaseProgram(z)}),T.isShaderMaterial&&B.releaseShaderCache(T))}this.renderBufferDirect=function(T,I,z,H,V,ht){I===null&&(I=ee);const dt=V.isMesh&&V.matrixWorld.determinant()<0,gt=bu(T,I,z,H,V);yt.setMaterial(H,dt);let St=z.index,Lt=1;if(H.wireframe===!0){if(St=R.getWireframeAttribute(z),St===void 0)return;Lt=2}const At=z.drawRange,wt=z.attributes.position;let ae=At.start*Lt,Xe=(At.start+At.count)*Lt;ht!==null&&(ae=Math.max(ae,ht.start*Lt),Xe=Math.min(Xe,(ht.start+ht.count)*Lt)),St!==null?(ae=Math.max(ae,0),Xe=Math.min(Xe,St.count)):wt!=null&&(ae=Math.max(ae,0),Xe=Math.min(Xe,wt.count));const ge=Xe-ae;if(ge<0||ge===1/0)return;bt.setup(V,H,gt,z,St);let An,ie=kt;if(St!==null&&(An=Te.get(St),ie=J,ie.setIndex(An)),V.isMesh)H.wireframe===!0?(yt.setLineWidth(H.wireframeLinewidth*Dt()),ie.setMode(O.LINES)):ie.setMode(O.TRIANGLES);else if(V.isLine){let Ft=H.linewidth;Ft===void 0&&(Ft=1),yt.setLineWidth(Ft*Dt()),V.isLineSegments?ie.setMode(O.LINES):V.isLineLoop?ie.setMode(O.LINE_LOOP):ie.setMode(O.LINE_STRIP)}else V.isPoints?ie.setMode(O.POINTS):V.isSprite&&ie.setMode(O.TRIANGLES);if(V.isInstancedMesh)ie.renderInstances(ae,ge,V.count);else if(z.isInstancedBufferGeometry){const Ft=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,ea=Math.min(z.instanceCount,Ft);ie.renderInstances(ae,ge,ea)}else ie.render(ae,ge)};function _t(T,I,z){T.transparent===!0&&T.side===Nn&&T.forceSinglePass===!1?(T.side=Oe,T.needsUpdate=!0,es(T,I,z),T.side=ri,T.needsUpdate=!0,es(T,I,z),T.side=Nn):es(T,I,z)}this.compile=function(T,I,z=null){z===null&&(z=T),p=tt.get(z),p.init(),E.push(p),z.traverseVisible(function(V){V.isLight&&V.layers.test(I.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),T!==z&&T.traverseVisible(function(V){V.isLight&&V.layers.test(I.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights(x._useLegacyLights);const H=new Set;return T.traverse(function(V){const ht=V.material;if(ht)if(Array.isArray(ht))for(let dt=0;dt<ht.length;dt++){const gt=ht[dt];_t(gt,z,V),H.add(gt)}else _t(ht,z,V),H.add(ht)}),E.pop(),p=null,H},this.compileAsync=function(T,I,z=null){const H=this.compile(T,I,z);return new Promise(V=>{function ht(){if(H.forEach(function(dt){Ut.get(dt).currentProgram.isReady()&&H.delete(dt)}),H.size===0){V(T);return}setTimeout(ht,10)}pt.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let Ht=null;function le(T){Ht&&Ht(T)}function nn(){Ce.stop()}function Kt(){Ce.start()}const Ce=new mh;Ce.setAnimationLoop(le),typeof self<"u"&&Ce.setContext(self),this.setAnimationLoop=function(T){Ht=T,ut.setAnimationLoop(T),T===null?Ce.stop():Ce.start()},ut.addEventListener("sessionstart",nn),ut.addEventListener("sessionend",Kt),this.render=function(T,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(I),I=ut.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,I,b),p=tt.get(T,E.length),p.init(),E.push(p),Bt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),at.setFromProjectionMatrix(Bt),lt=this.localClippingEnabled,st=ft.init(this.clippingPlanes,lt),_=$.get(T,d.length),_.init(),d.push(_),vn(T,I,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(Z,K),this.info.render.frame++,st===!0&&ft.beginShadows();const z=p.state.shadowsArray;if(it.render(z,T,I),st===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset(),ct.render(_,T),p.setupLights(x._useLegacyLights),I.isArrayCamera){const H=I.cameras;for(let V=0,ht=H.length;V<ht;V++){const dt=H[V];$o(_,T,dt,dt.viewport)}}else $o(_,T,I);b!==null&&(It.updateMultisampleRenderTarget(b),It.updateRenderTargetMipmap(b)),T.isScene===!0&&T.onAfterRender(x,T,I),bt.resetDefaultState(),P=-1,v=null,E.pop(),E.length>0?p=E[E.length-1]:p=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function vn(T,I,z,H){if(T.visible===!1)return;if(T.layers.test(I.layers)){if(T.isGroup)z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(I);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||at.intersectsSprite(T)){H&&Ct.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Bt);const dt=y.update(T),gt=T.material;gt.visible&&_.push(T,dt,gt,z,Ct.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||at.intersectsObject(T))){const dt=y.update(T),gt=T.material;if(H&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ct.copy(T.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),Ct.copy(dt.boundingSphere.center)),Ct.applyMatrix4(T.matrixWorld).applyMatrix4(Bt)),Array.isArray(gt)){const St=dt.groups;for(let Lt=0,At=St.length;Lt<At;Lt++){const wt=St[Lt],ae=gt[wt.materialIndex];ae&&ae.visible&&_.push(T,dt,ae,z,Ct.z,wt)}}else gt.visible&&_.push(T,dt,gt,z,Ct.z,null)}}const ht=T.children;for(let dt=0,gt=ht.length;dt<gt;dt++)vn(ht[dt],I,z,H)}function $o(T,I,z,H){const V=T.opaque,ht=T.transmissive,dt=T.transparent;p.setupLightsView(z),st===!0&&ft.setGlobalState(x.clippingPlanes,z),ht.length>0&&Tu(V,ht,I,z),H&&yt.viewport(w.copy(H)),V.length>0&&ts(V,I,z),ht.length>0&&ts(ht,I,z),dt.length>0&&ts(dt,I,z),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function Tu(T,I,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;const ht=Tt.isWebGL2;vt===null&&(vt=new Di(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")?Hr:ti,minFilter:kr,samples:ht?4:0})),x.getDrawingBufferSize(Et),ht?vt.setSize(Et.x,Et.y):vt.setSize(no(Et.x),no(Et.y));const dt=x.getRenderTarget();x.setRenderTarget(vt),x.getClearColor(q),C=x.getClearAlpha(),C<1&&x.setClearColor(16777215,.5),x.clear();const gt=x.toneMapping;x.toneMapping=Qn,ts(T,z,H),It.updateMultisampleRenderTarget(vt),It.updateRenderTargetMipmap(vt);let St=!1;for(let Lt=0,At=I.length;Lt<At;Lt++){const wt=I[Lt],ae=wt.object,Xe=wt.geometry,ge=wt.material,An=wt.group;if(ge.side===Nn&&ae.layers.test(H.layers)){const ie=ge.side;ge.side=Oe,ge.needsUpdate=!0,Jo(ae,z,H,Xe,ge,An),ge.side=ie,ge.needsUpdate=!0,St=!0}}St===!0&&(It.updateMultisampleRenderTarget(vt),It.updateRenderTargetMipmap(vt)),x.setRenderTarget(dt),x.setClearColor(q,C),x.toneMapping=gt}function ts(T,I,z){const H=I.isScene===!0?I.overrideMaterial:null;for(let V=0,ht=T.length;V<ht;V++){const dt=T[V],gt=dt.object,St=dt.geometry,Lt=H===null?dt.material:H,At=dt.group;gt.layers.test(z.layers)&&Jo(gt,I,z,St,Lt,At)}}function Jo(T,I,z,H,V,ht){T.onBeforeRender(x,I,z,H,V,ht),T.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),V.onBeforeRender(x,I,z,H,T,ht),V.transparent===!0&&V.side===Nn&&V.forceSinglePass===!1?(V.side=Oe,V.needsUpdate=!0,x.renderBufferDirect(z,I,H,V,T,ht),V.side=ri,V.needsUpdate=!0,x.renderBufferDirect(z,I,H,V,T,ht),V.side=Nn):x.renderBufferDirect(z,I,H,V,T,ht),T.onAfterRender(x,I,z,H,V,ht)}function es(T,I,z){I.isScene!==!0&&(I=ee);const H=Ut.get(T),V=p.state.lights,ht=p.state.shadowsArray,dt=V.state.version,gt=B.getParameters(T,V.state,ht,I,z),St=B.getProgramCacheKey(gt);let Lt=H.programs;H.environment=T.isMeshStandardMaterial?I.environment:null,H.fog=I.fog,H.envMap=(T.isMeshStandardMaterial?_e:Xt).get(T.envMap||H.environment),Lt===void 0&&(T.addEventListener("dispose",et),Lt=new Map,H.programs=Lt);let At=Lt.get(St);if(At!==void 0){if(H.currentProgram===At&&H.lightsStateVersion===dt)return tl(T,gt),At}else gt.uniforms=B.getUniforms(T),T.onBuild(z,gt,x),T.onBeforeCompile(gt,x),At=B.acquireProgram(gt,St),Lt.set(St,At),H.uniforms=gt.uniforms;const wt=H.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(wt.clippingPlanes=ft.uniform),tl(T,gt),H.needsLights=wu(T),H.lightsStateVersion=dt,H.needsLights&&(wt.ambientLightColor.value=V.state.ambient,wt.lightProbe.value=V.state.probe,wt.directionalLights.value=V.state.directional,wt.directionalLightShadows.value=V.state.directionalShadow,wt.spotLights.value=V.state.spot,wt.spotLightShadows.value=V.state.spotShadow,wt.rectAreaLights.value=V.state.rectArea,wt.ltc_1.value=V.state.rectAreaLTC1,wt.ltc_2.value=V.state.rectAreaLTC2,wt.pointLights.value=V.state.point,wt.pointLightShadows.value=V.state.pointShadow,wt.hemisphereLights.value=V.state.hemi,wt.directionalShadowMap.value=V.state.directionalShadowMap,wt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,wt.spotShadowMap.value=V.state.spotShadowMap,wt.spotLightMatrix.value=V.state.spotLightMatrix,wt.spotLightMap.value=V.state.spotLightMap,wt.pointShadowMap.value=V.state.pointShadowMap,wt.pointShadowMatrix.value=V.state.pointShadowMatrix),H.currentProgram=At,H.uniformsList=null,At}function Qo(T){if(T.uniformsList===null){const I=T.currentProgram.getUniforms();T.uniformsList=Cs.seqWithValue(I.seq,T.uniforms)}return T.uniformsList}function tl(T,I){const z=Ut.get(T);z.outputColorSpace=I.outputColorSpace,z.instancing=I.instancing,z.instancingColor=I.instancingColor,z.skinning=I.skinning,z.morphTargets=I.morphTargets,z.morphNormals=I.morphNormals,z.morphColors=I.morphColors,z.morphTargetsCount=I.morphTargetsCount,z.numClippingPlanes=I.numClippingPlanes,z.numIntersection=I.numClipIntersection,z.vertexAlphas=I.vertexAlphas,z.vertexTangents=I.vertexTangents,z.toneMapping=I.toneMapping}function bu(T,I,z,H,V){I.isScene!==!0&&(I=ee),It.resetTextureUnits();const ht=I.fog,dt=H.isMeshStandardMaterial?I.environment:null,gt=b===null?x.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Bn,St=(H.isMeshStandardMaterial?_e:Xt).get(H.envMap||dt),Lt=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,At=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),wt=!!z.morphAttributes.position,ae=!!z.morphAttributes.normal,Xe=!!z.morphAttributes.color;let ge=Qn;H.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(ge=x.toneMapping);const An=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ie=An!==void 0?An.length:0,Ft=Ut.get(H),ea=p.state.lights;if(st===!0&&(lt===!0||T!==v)){const qe=T===v&&H.id===P;ft.setState(H,T,qe)}let ce=!1;H.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==ea.state.version||Ft.outputColorSpace!==gt||V.isInstancedMesh&&Ft.instancing===!1||!V.isInstancedMesh&&Ft.instancing===!0||V.isSkinnedMesh&&Ft.skinning===!1||!V.isSkinnedMesh&&Ft.skinning===!0||V.isInstancedMesh&&Ft.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ft.instancingColor===!1&&V.instanceColor!==null||Ft.envMap!==St||H.fog===!0&&Ft.fog!==ht||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==ft.numPlanes||Ft.numIntersection!==ft.numIntersection)||Ft.vertexAlphas!==Lt||Ft.vertexTangents!==At||Ft.morphTargets!==wt||Ft.morphNormals!==ae||Ft.morphColors!==Xe||Ft.toneMapping!==ge||Tt.isWebGL2===!0&&Ft.morphTargetsCount!==ie)&&(ce=!0):(ce=!0,Ft.__version=H.version);let ci=Ft.currentProgram;ce===!0&&(ci=es(H,I,V));let el=!1,br=!1,na=!1;const Pe=ci.getUniforms(),hi=Ft.uniforms;if(yt.useProgram(ci.program)&&(el=!0,br=!0,na=!0),H.id!==P&&(P=H.id,br=!0),el||v!==T){Pe.setValue(O,"projectionMatrix",T.projectionMatrix),Pe.setValue(O,"viewMatrix",T.matrixWorldInverse);const qe=Pe.map.cameraPosition;qe!==void 0&&qe.setValue(O,Ct.setFromMatrixPosition(T.matrixWorld)),Tt.logarithmicDepthBuffer&&Pe.setValue(O,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Pe.setValue(O,"isOrthographic",T.isOrthographicCamera===!0),v!==T&&(v=T,br=!0,na=!0)}if(V.isSkinnedMesh){Pe.setOptional(O,V,"bindMatrix"),Pe.setOptional(O,V,"bindMatrixInverse");const qe=V.skeleton;qe&&(Tt.floatVertexTextures?(qe.boneTexture===null&&qe.computeBoneTexture(),Pe.setValue(O,"boneTexture",qe.boneTexture,It),Pe.setValue(O,"boneTextureSize",qe.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ia=z.morphAttributes;if((ia.position!==void 0||ia.normal!==void 0||ia.color!==void 0&&Tt.isWebGL2===!0)&&xt.update(V,z,ci),(br||Ft.receiveShadow!==V.receiveShadow)&&(Ft.receiveShadow=V.receiveShadow,Pe.setValue(O,"receiveShadow",V.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(hi.envMap.value=St,hi.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),br&&(Pe.setValue(O,"toneMappingExposure",x.toneMappingExposure),Ft.needsLights&&Au(hi,na),ht&&H.fog===!0&&Q.refreshFogUniforms(hi,ht),Q.refreshMaterialUniforms(hi,H,W,X,vt),Cs.upload(O,Qo(Ft),hi,It)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Cs.upload(O,Qo(Ft),hi,It),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Pe.setValue(O,"center",V.center),Pe.setValue(O,"modelViewMatrix",V.modelViewMatrix),Pe.setValue(O,"normalMatrix",V.normalMatrix),Pe.setValue(O,"modelMatrix",V.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const qe=H.uniformsGroups;for(let ra=0,Ru=qe.length;ra<Ru;ra++)if(Tt.isWebGL2){const nl=qe[ra];Mt.update(nl,ci),Mt.bind(nl,ci)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ci}function Au(T,I){T.ambientLightColor.needsUpdate=I,T.lightProbe.needsUpdate=I,T.directionalLights.needsUpdate=I,T.directionalLightShadows.needsUpdate=I,T.pointLights.needsUpdate=I,T.pointLightShadows.needsUpdate=I,T.spotLights.needsUpdate=I,T.spotLightShadows.needsUpdate=I,T.rectAreaLights.needsUpdate=I,T.hemisphereLights.needsUpdate=I}function wu(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(T,I,z){Ut.get(T.texture).__webglTexture=I,Ut.get(T.depthTexture).__webglTexture=z;const H=Ut.get(T);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=z===void 0,H.__autoAllocateDepthBuffer||pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,I){const z=Ut.get(T);z.__webglFramebuffer=I,z.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(T,I=0,z=0){b=T,S=I,A=z;let H=!0,V=null,ht=!1,dt=!1;if(T){const St=Ut.get(T);St.__useDefaultFramebuffer!==void 0?(yt.bindFramebuffer(O.FRAMEBUFFER,null),H=!1):St.__webglFramebuffer===void 0?It.setupRenderTarget(T):St.__hasExternalTextures&&It.rebindTextures(T,Ut.get(T.texture).__webglTexture,Ut.get(T.depthTexture).__webglTexture);const Lt=T.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(dt=!0);const At=Ut.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(At[I])?V=At[I][z]:V=At[I],ht=!0):Tt.isWebGL2&&T.samples>0&&It.useMultisampledRTT(T)===!1?V=Ut.get(T).__webglMultisampledFramebuffer:Array.isArray(At)?V=At[z]:V=At,w.copy(T.viewport),G.copy(T.scissor),F=T.scissorTest}else w.copy(j).multiplyScalar(W).floor(),G.copy(U).multiplyScalar(W).floor(),F=k;if(yt.bindFramebuffer(O.FRAMEBUFFER,V)&&Tt.drawBuffers&&H&&yt.drawBuffers(T,V),yt.viewport(w),yt.scissor(G),yt.setScissorTest(F),ht){const St=Ut.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+I,St.__webglTexture,z)}else if(dt){const St=Ut.get(T.texture),Lt=I||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,St.__webglTexture,z||0,Lt)}P=-1},this.readRenderTargetPixels=function(T,I,z,H,V,ht,dt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=Ut.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&dt!==void 0&&(gt=gt[dt]),gt){yt.bindFramebuffer(O.FRAMEBUFFER,gt);try{const St=T.texture,Lt=St.format,At=St.type;if(Lt!==gn&&Vt.convert(Lt)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const wt=At===Hr&&(pt.has("EXT_color_buffer_half_float")||Tt.isWebGL2&&pt.has("EXT_color_buffer_float"));if(At!==ti&&Vt.convert(At)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(At===jn&&(Tt.isWebGL2||pt.has("OES_texture_float")||pt.has("WEBGL_color_buffer_float")))&&!wt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=T.width-H&&z>=0&&z<=T.height-V&&O.readPixels(I,z,H,V,Vt.convert(Lt),Vt.convert(At),ht)}finally{const St=b!==null?Ut.get(b).__webglFramebuffer:null;yt.bindFramebuffer(O.FRAMEBUFFER,St)}}},this.copyFramebufferToTexture=function(T,I,z=0){const H=Math.pow(2,-z),V=Math.floor(I.image.width*H),ht=Math.floor(I.image.height*H);It.setTexture2D(I,0),O.copyTexSubImage2D(O.TEXTURE_2D,z,0,0,T.x,T.y,V,ht),yt.unbindTexture()},this.copyTextureToTexture=function(T,I,z,H=0){const V=I.image.width,ht=I.image.height,dt=Vt.convert(z.format),gt=Vt.convert(z.type);It.setTexture2D(z,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,z.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,z.unpackAlignment),I.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,H,T.x,T.y,V,ht,dt,gt,I.image.data):I.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,H,T.x,T.y,I.mipmaps[0].width,I.mipmaps[0].height,dt,I.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,H,T.x,T.y,dt,gt,I.image),H===0&&z.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),yt.unbindTexture()},this.copyTextureToTexture3D=function(T,I,z,H,V=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ht=T.max.x-T.min.x+1,dt=T.max.y-T.min.y+1,gt=T.max.z-T.min.z+1,St=Vt.convert(H.format),Lt=Vt.convert(H.type);let At;if(H.isData3DTexture)It.setTexture3D(H,0),At=O.TEXTURE_3D;else if(H.isDataArrayTexture)It.setTexture2DArray(H,0),At=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,H.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,H.unpackAlignment);const wt=O.getParameter(O.UNPACK_ROW_LENGTH),ae=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Xe=O.getParameter(O.UNPACK_SKIP_PIXELS),ge=O.getParameter(O.UNPACK_SKIP_ROWS),An=O.getParameter(O.UNPACK_SKIP_IMAGES),ie=z.isCompressedTexture?z.mipmaps[0]:z.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,ie.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ie.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,T.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,T.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,T.min.z),z.isDataTexture||z.isData3DTexture?O.texSubImage3D(At,V,I.x,I.y,I.z,ht,dt,gt,St,Lt,ie.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(At,V,I.x,I.y,I.z,ht,dt,gt,St,ie.data)):O.texSubImage3D(At,V,I.x,I.y,I.z,ht,dt,gt,St,Lt,ie),O.pixelStorei(O.UNPACK_ROW_LENGTH,wt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ae),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Xe),O.pixelStorei(O.UNPACK_SKIP_ROWS,ge),O.pixelStorei(O.UNPACK_SKIP_IMAGES,An),V===0&&H.generateMipmaps&&O.generateMipmap(At),yt.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?It.setTextureCube(T,0):T.isData3DTexture?It.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?It.setTexture2DArray(T,0):It.setTexture2D(T,0),yt.unbindTexture()},this.resetState=function(){S=0,A=0,b=null,yt.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Ao?"display-p3":"srgb",e.unpackColorSpace=Wt.workingColorSpace===js?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===xe?wi:rh}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===wi?xe:Bn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Ug extends Sh{}Ug.prototype.isWebGL1Renderer=!0;class Po{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ot(t),this.near=e,this.far=n}clone(){return new Po(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ig extends de{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Ng{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Qa,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=ei()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Le=new D;class zs{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}setX(t,e){return this.normalized&&(e=Yt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Yt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Yt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Yt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=On(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=On(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=On(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=On(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Yt(e,this.array),n=Yt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Yt(e,this.array),n=Yt(n,this.array),i=Yt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Yt(e,this.array),n=Yt(n,this.array),i=Yt(i,this.array),s=Yt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new Je(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new zs(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class yh extends oi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Qi;const Pr=new D,tr=new D,er=new D,nr=new Rt,Lr=new Rt,Eh=new se,Ts=new D,Dr=new D,bs=new D,yc=new Rt,Oa=new Rt,Ec=new Rt;class Og extends de{constructor(t=new yh){if(super(),this.isSprite=!0,this.type="Sprite",Qi===void 0){Qi=new He;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ng(e,5);Qi.setIndex([0,1,2,0,2,3]),Qi.setAttribute("position",new zs(n,3,0,!1)),Qi.setAttribute("uv",new zs(n,2,3,!1))}this.geometry=Qi,this.material=t,this.center=new Rt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),tr.setFromMatrixScale(this.matrixWorld),Eh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),er.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&tr.multiplyScalar(-er.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;As(Ts.set(-.5,-.5,0),er,a,tr,i,s),As(Dr.set(.5,-.5,0),er,a,tr,i,s),As(bs.set(.5,.5,0),er,a,tr,i,s),yc.set(0,0),Oa.set(1,0),Ec.set(1,1);let o=t.ray.intersectTriangle(Ts,Dr,bs,!1,Pr);if(o===null&&(As(Dr.set(-.5,.5,0),er,a,tr,i,s),Oa.set(0,1),o=t.ray.intersectTriangle(Ts,bs,Dr,!1,Pr),o===null))return;const l=t.ray.origin.distanceTo(Pr);l<t.near||l>t.far||e.push({distance:l,point:Pr.clone(),uv:on.getInterpolation(Pr,Ts,Dr,bs,yc,Oa,Ec,new Rt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function As(r,t,e,n,i,s){nr.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(Lr.x=s*nr.x-i*nr.y,Lr.y=i*nr.x+s*nr.y):Lr.copy(nr),r.copy(t),r.x+=Lr.x,r.y+=Lr.y,r.applyMatrix4(Eh)}class ro extends oi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Tc=new D,bc=new D,Ac=new se,Fa=new wo,ws=new Ks;class wc extends de{constructor(t=new He,e=new ro){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Tc.fromBufferAttribute(e,i-1),bc.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Tc.distanceTo(bc);t.setAttribute("lineDistance",new ye(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ws.copy(n.boundingSphere),ws.applyMatrix4(i),ws.radius+=s,t.ray.intersectsSphere(ws)===!1)return;Ac.copy(i).invert(),Fa.copy(t.ray).applyMatrix4(Ac);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new D,h=new D,u=new D,f=new D,m=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const d=Math.max(0,a.start),E=Math.min(g.count,a.start+a.count);for(let x=d,M=E-1;x<M;x+=m){const S=g.getX(x),A=g.getX(x+1);if(c.fromBufferAttribute(p,S),h.fromBufferAttribute(p,A),Fa.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const P=t.ray.origin.distanceTo(f);P<t.near||P>t.far||e.push({distance:P,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,a.start),E=Math.min(p.count,a.start+a.count);for(let x=d,M=E-1;x<M;x+=m){if(c.fromBufferAttribute(p,x),h.fromBufferAttribute(p,x+1),Fa.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const A=t.ray.origin.distanceTo(f);A<t.near||A>t.far||e.push({distance:A,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}class Fg extends Fe{constructor(t,e,n,i,s,a,o,l,c){super(t,e,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Lo extends He{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const s=[],a=[],o=[],l=[],c=new D,h=new Rt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const m=n+u/e*i;c.x=t*Math.cos(m),c.y=t*Math.sin(m),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new ye(a,3)),this.setAttribute("normal",new ye(o,3)),this.setAttribute("uv",new ye(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Do extends He{constructor(t=1,e=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],f=[],m=[];let g=0;const _=[],p=n/2;let d=0;E(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new ye(u,3)),this.setAttribute("normal",new ye(f,3)),this.setAttribute("uv",new ye(m,2));function E(){const M=new D,S=new D;let A=0;const b=(e-t)/n;for(let P=0;P<=s;P++){const v=[],w=P/s,G=w*(e-t)+t;for(let F=0;F<=i;F++){const q=F/i,C=q*l+o,N=Math.sin(C),X=Math.cos(C);S.x=G*N,S.y=-w*n+p,S.z=G*X,u.push(S.x,S.y,S.z),M.set(N,b,X).normalize(),f.push(M.x,M.y,M.z),m.push(q,1-w),v.push(g++)}_.push(v)}for(let P=0;P<i;P++)for(let v=0;v<s;v++){const w=_[v][P],G=_[v+1][P],F=_[v+1][P+1],q=_[v][P+1];h.push(w,G,q),h.push(G,F,q),A+=6}c.addGroup(d,A,0),d+=A}function x(M){const S=g,A=new Rt,b=new D;let P=0;const v=M===!0?t:e,w=M===!0?1:-1;for(let F=1;F<=i;F++)u.push(0,p*w,0),f.push(0,w,0),m.push(.5,.5),g++;const G=g;for(let F=0;F<=i;F++){const C=F/i*l+o,N=Math.cos(C),X=Math.sin(C);b.x=v*X,b.y=p*w,b.z=v*N,u.push(b.x,b.y,b.z),f.push(0,w,0),A.x=N*.5+.5,A.y=X*.5*w+.5,m.push(A.x,A.y),g++}for(let F=0;F<i;F++){const q=S+F,C=G+F;M===!0?h.push(C,C+1,q):h.push(C+1,C,q),P+=3}c.addGroup(d,P,M===!0?1:2),d+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Do(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Mn extends He{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new D,f=new D,m=[],g=[],_=[],p=[];for(let d=0;d<=n;d++){const E=[],x=d/n;let M=0;d===0&&a===0?M=.5/e:d===n&&l===Math.PI&&(M=-.5/e);for(let S=0;S<=e;S++){const A=S/e;u.x=-t*Math.cos(i+A*s)*Math.sin(a+x*o),u.y=t*Math.cos(a+x*o),u.z=t*Math.sin(i+A*s)*Math.sin(a+x*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),p.push(A+M,1-x),E.push(c++)}h.push(E)}for(let d=0;d<n;d++)for(let E=0;E<e;E++){const x=h[d][E+1],M=h[d][E],S=h[d+1][E],A=h[d+1][E+1];(d!==0||a>0)&&m.push(x,M,A),(d!==n-1||l<Math.PI)&&m.push(M,S,A)}this.setIndex(m),this.setAttribute("position",new ye(g,3)),this.setAttribute("normal",new ye(_,3)),this.setAttribute("uv",new ye(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Rc extends oi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bo,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ir extends oi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bo,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Eo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Th extends de{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Ba=new se,Cc=new D,Pc=new D;class Bg{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Rt(512,512),this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zs,this._frameExtents=new Rt(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Cc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Cc),Pc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Pc),e.updateMatrixWorld(),Ba.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ba),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ba)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class zg extends Bg{constructor(){super(new _h(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Gg extends Th{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.target=new de,this.shadow=new zg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class kg extends Th{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Hg{constructor(t,e,n=0,i=1/0){this.ray=new wo(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Ro,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return so(t,this,n,e),n.sort(Lc),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)so(t[i],this,n,e);return n.sort(Lc),n}}function Lc(r,t){return r.distance-t.distance}function so(r,t,e,n){if(r.layers.test(t.layers)&&r.raycast(t,e),n===!0){const i=r.children;for(let s=0,a=i.length;s<a;s++)so(i[s],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yo);function Un(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function bh(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Qe={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},gr={duration:.5,overwrite:!1,delay:0},Uo,Ee,Jt,hn=1e8,jt=1/hn,ao=Math.PI*2,Vg=ao/4,Wg=0,Ah=Math.sqrt,Xg=Math.cos,qg=Math.sin,Se=function(t){return typeof t=="string"},re=function(t){return typeof t=="function"},zn=function(t){return typeof t=="number"},Io=function(t){return typeof t>"u"},bn=function(t){return typeof t=="object"},Be=function(t){return t!==!1},No=function(){return typeof window<"u"},Rs=function(t){return re(t)||Se(t)},wh=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Re=Array.isArray,oo=/(?:-?\.?\d|\.)+/gi,Rh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ar=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,za=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Ch=/[+-]=-?[.\d]+/,Ph=/[^,'"\[\]\s]+/gi,Yg=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Qt,Sn,lo,Oo,tn={},Gs={},Lh,Dh=function(t){return(Gs=vr(t,tn))&&Ve},Fo=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Vr=function(t,e){return!e&&console.warn(t)},Uh=function(t,e){return t&&(tn[t]=e)&&Gs&&(Gs[t]=e)||tn},Wr=function(){return 0},jg={suppressEvents:!0,isStart:!0,kill:!1},Ps={suppressEvents:!0,kill:!1},Kg={suppressEvents:!0},Bo={},ni=[],co={},Ih,Ke={},Ga={},Dc=30,Ls=[],zo="",Go=function(t){var e=t[0],n,i;if(bn(e)||re(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Ls.length;i--&&!Ls[i].targetTest(e););n=Ls[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new ru(t[i],n)))||t.splice(i,1);return t},Ri=function(t){return t._gsap||Go(un(t))[0]._gsap},Nh=function(t,e,n){return(n=t[e])&&re(n)?t[e]():Io(n)&&t.getAttribute&&t.getAttribute(e)||n},ze=function(t,e){return(t=t.split(",")).forEach(e)||t},oe=function(t){return Math.round(t*1e5)/1e5||0},fe=function(t){return Math.round(t*1e7)/1e7||0},hr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Zg=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},ks=function(){var t=ni.length,e=ni.slice(0),n,i;for(co={},ni.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},ko=function(t){return!!(t._initted||t._startAt||t.add)},Oh=function(t,e,n,i){ni.length&&!Ee&&ks(),t.render(e,n,!!(Ee&&e<0&&ko(t))),ni.length&&!Ee&&ks()},Fh=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Ph).length<2?e:Se(t)?t.trim():t},Bh=function(t){return t},en=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},$g=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},vr=function(t,e){for(var n in e)t[n]=e[n];return t},Uc=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=bn(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},Hs=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Br=function(t){var e=t.parent||Qt,n=t.keyframes?$g(Re(t.keyframes)):en;if(Be(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Jg=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},zh=function(t,e,n,i,s){var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},Js=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},si=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Ci=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Qg=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},ho=function(t,e,n,i){return t._startAt&&(Ee?t._startAt.revert(Ps):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},t0=function r(t){return!t||t._ts&&r(t.parent)},Ic=function(t){return t._repeat?xr(t._tTime,t=t.duration()+t._rDelay)*t:0},xr=function(t,e){var n=Math.floor(t=fe(t/e));return t&&n===t?n-1:n},Vs=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Qs=function(t){return t._end=fe(t._start+(t._tDur/Math.abs(t._ts||t._rts||jt)||0))},ta=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=fe(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Qs(t),n._dirty||Ci(n,t)),t},Gh=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Vs(t.rawTime(),e),(!e._dur||Qr(0,e.totalDuration(),n)-e._tTime>jt)&&e.render(n,!0)),Ci(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-jt}},En=function(t,e,n,i){return e.parent&&si(e),e._start=fe((zn(n)?n:n||t!==Qt?sn(t,n,e):t._time)+e._delay),e._end=fe(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),zh(t,e,"_first","_last",t._sort?"_start":0),uo(e)||(t._recent=e),i||Gh(t,e),t._ts<0&&ta(t,t._tTime),t},kh=function(t,e){return(tn.ScrollTrigger||Fo("scrollTrigger",e))&&tn.ScrollTrigger.create(e,t)},Hh=function(t,e,n,i,s){if(Vo(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Ee&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Ih!==Ze.frame)return ni.push(t),t._lazy=[s,i],1},e0=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},uo=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},n0=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&e0(t)&&!(!t._initted&&uo(t))||(t._ts<0||t._dp._ts<0)&&!uo(t))?0:1,o=t._rDelay,l=0,c,h,u;if(o&&t._repeat&&(l=Qr(0,t._tDur,e),h=xr(l,o),t._yoyo&&h&1&&(a=1-a),h!==xr(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||Ee||i||t._zTime===jt||!e&&t._zTime){if(!t._initted&&Hh(t,e,i,n,l))return;for(u=t._zTime,t._zTime=e||(n?jt:0),n||(n=e&&!u),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&ho(t,e,n,!0),t._onUpdate&&!n&&$e(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&$e(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&si(t,1),!n&&!Ee&&($e(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},i0=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Mr=function(t,e,n,i){var s=t._repeat,a=fe(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:fe(a*(s+1)+t._rDelay*s):a,o>0&&!i&&ta(t,t._tTime=t._tDur*o),t.parent&&Qs(t),n||Ci(t.parent,t),t},Nc=function(t){return t instanceof Ie?Ci(t):Mr(t,t._dur)},r0={_start:0,endTime:Wr,totalDuration:Wr},sn=function r(t,e,n){var i=t.labels,s=t._recent||r0,a=t.duration()>=hn?s.endTime(!1):t._dur,o,l,c;return Se(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(Re(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},zr=function(t,e,n){var i=zn(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Be(l.vars.inherit)&&l.parent;a.immediateRender=Be(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new ue(e[0],a,e[s+1])},li=function(t,e){return t||t===0?e(t):e},Qr=function(t,e,n){return n<t?t:n>e?e:n},we=function(t,e){return!Se(t)||!(e=Yg.exec(t))?"":e[1]},s0=function(t,e,n){return li(n,function(i){return Qr(t,e,i)})},fo=[].slice,Vh=function(t,e){return t&&bn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&bn(t[0]))&&!t.nodeType&&t!==Sn},a0=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Se(i)&&!e||Vh(i,1)?(s=n).push.apply(s,un(i)):n.push(i)})||n},un=function(t,e,n){return Jt&&!e&&Jt.selector?Jt.selector(t):Se(t)&&!n&&(lo||!Sr())?fo.call((e||Oo).querySelectorAll(t),0):Re(t)?a0(t,n):Vh(t)?fo.call(t,0):t?[t]:[]},po=function(t){return t=un(t)[0]||Vr("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return un(e,n.querySelectorAll?n:n===t?Vr("Invalid scope")||Oo.createElement("div"):t)}},Wh=function(t){return t.sort(function(){return .5-Math.random()})},Xh=function(t){if(re(t))return t;var e=bn(t)?t:{each:t},n=Pi(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,h=i,u=i;return Se(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],u=i[1]),function(f,m,g){var _=(g||e).length,p=a[_],d,E,x,M,S,A,b,P,v;if(!p){if(v=e.grid==="auto"?0:(e.grid||[1,hn])[1],!v){for(b=-hn;b<(b=g[v++].getBoundingClientRect().left)&&v<_;);v<_&&v--}for(p=a[_]=[],d=l?Math.min(v,_)*h-.5:i%v,E=v===hn?0:l?_*u/v-.5:i/v|0,b=0,P=hn,A=0;A<_;A++)x=A%v-d,M=E-(A/v|0),p[A]=S=c?Math.abs(c==="y"?M:x):Ah(x*x+M*M),S>b&&(b=S),S<P&&(P=S);i==="random"&&Wh(p),p.max=b-P,p.min=P,p.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(v>_?_-1:c?c==="y"?_/v:v:Math.max(v,_/v))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=we(e.amount||e.each)||0,n=n&&_<0?eu(n):n}return _=(p[f]-p.min)/p.max||0,fe(p.b+(n?n(_):_)*p.v)+p.u}},mo=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=fe(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(zn(n)?0:we(n))}},qh=function(t,e){var n=Re(t),i,s;return!n&&bn(t)&&(i=n=t.radius||hn,t.values?(t=un(t.values),(s=!zn(t[0]))&&(i*=i)):t=mo(t.increment)),li(e,n?re(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=hn,h=0,u=t.length,f,m;u--;)s?(f=t[u].x-o,m=t[u].y-l,f=f*f+m*m):f=Math.abs(t[u]-o),f<c&&(c=f,h=u);return h=!i||c<=i?t[h]:a,s||h===a||zn(a)?h:h+we(a)}:mo(t))},Yh=function(t,e,n,i){return li(Re(t)?!e:n===!0?!!(n=0):!i,function(){return Re(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},o0=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},l0=function(t,e){return function(n){return t(parseFloat(n))+(e||we(n))}},c0=function(t,e,n){return Kh(t,e,0,1,n)},jh=function(t,e,n){return li(n,function(i){return t[~~e(i)]})},h0=function r(t,e,n){var i=e-t;return Re(t)?jh(t,r(0,t.length),e):li(n,function(s){return(i+(s-t)%i)%i+t})},u0=function r(t,e,n){var i=e-t,s=i*2;return Re(t)?jh(t,r(0,t.length-1),e):li(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},Xr=function(t){for(var e=0,n="",i,s,a,o;~(i=t.indexOf("random(",e));)a=t.indexOf(")",i),o=t.charAt(i+7)==="[",s=t.substr(i+7,a-i-7).match(o?Ph:oo),n+=t.substr(e,i-e)+Yh(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),e=a+1;return n+t.substr(e,t.length-e)},Kh=function(t,e,n,i,s){var a=e-t,o=i-n;return li(s,function(l){return n+((l-t)/a*o||0)})},f0=function r(t,e,n,i){var s=isNaN(t+e)?0:function(m){return(1-m)*t+m*e};if(!s){var a=Se(t),o={},l,c,h,u,f;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(Re(t)&&!Re(e)){for(h=[],u=t.length,f=u-2,c=1;c<u;c++)h.push(r(t[c-1],t[c]));u--,s=function(g){g*=u;var _=Math.min(f,~~g);return h[_](g-_)},n=e}else i||(t=vr(Re(t)?[]:{},t));if(!h){for(l in e)Ho.call(o,t,l,"get",e[l]);s=function(g){return qo(g,o)||(a?t.p:t)}}}return li(n,s)},Oc=function(t,e,n){var i=t.labels,s=hn,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},$e=function(t,e,n){var i=t.vars,s=i[e],a=Jt,o=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&ni.length&&ks(),o&&(Jt=o),h=l?s.apply(c,l):s.call(c),Jt=a,h},Nr=function(t){return si(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Ee),t.progress()<1&&$e(t,"onInterrupt"),t},or,Zh=[],$h=function(t){if(t)if(t=!t.name&&t.default||t,No()||t.headless){var e=t.name,n=re(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Wr,render:qo,add:Ho,kill:R0,modifier:w0,rawVars:0},a={targetTest:0,get:0,getSetter:Xo,aliases:{},register:0};if(Sr(),t!==i){if(Ke[e])return;en(i,en(Hs(t,s),a)),vr(i.prototype,vr(s,Hs(t,a))),Ke[i.prop=e]=i,t.targetTest&&(Ls.push(i),Bo[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Uh(e,i),t.register&&t.register(Ve,i,Ge)}else Zh.push(t)},qt=255,Or={aqua:[0,qt,qt],lime:[0,qt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,qt],navy:[0,0,128],white:[qt,qt,qt],olive:[128,128,0],yellow:[qt,qt,0],orange:[qt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[qt,0,0],pink:[qt,192,203],cyan:[0,qt,qt],transparent:[qt,qt,qt,0]},ka=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*qt+.5|0},Jh=function(t,e,n){var i=t?zn(t)?[t>>16,t>>8&qt,t&qt]:0:Or.black,s,a,o,l,c,h,u,f,m,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Or[t])i=Or[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&qt,i&qt,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&qt,t&qt]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(oo),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,s=h*2-a,i.length>3&&(i[3]*=1),i[0]=ka(l+1/3,s,a),i[1]=ka(l,s,a),i[2]=ka(l-1/3,s,a);else if(~t.indexOf("="))return i=t.match(Rh),n&&i.length<4&&(i[3]=1),i}else i=t.match(oo)||Or.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/qt,a=i[1]/qt,o=i[2]/qt,u=Math.max(s,a,o),f=Math.min(s,a,o),h=(u+f)/2,u===f?l=c=0:(m=u-f,c=h>.5?m/(2-u-f):m/(u+f),l=u===s?(a-o)/m+(a<o?6:0):u===a?(o-s)/m+2:(s-a)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Qh=function(t){var e=[],n=[],i=-1;return t.split(ii).forEach(function(s){var a=s.match(ar)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},Fc=function(t,e,n){var i="",s=(t+i).match(ii),a=e?"hsla(":"rgba(",o=0,l,c,h,u;if(!s)return t;if(s=s.map(function(f){return(f=Jh(f,e,1))&&a+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=Qh(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(ii,"1").split(ar),u=c.length-1;o<u;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(ii),u=c.length-1;o<u;o++)i+=c[o]+s[o];return i+c[u]},ii=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Or)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),d0=/hsl[a]?\(/,tu=function(t){var e=t.join(" "),n;if(ii.lastIndex=0,ii.test(e))return n=d0.test(e),t[1]=Fc(t[1],n),t[0]=Fc(t[0],n,Qh(t[1])),!0},qr,Ze=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,h,u,f,m,g=function _(p){var d=r()-i,E=p===!0,x,M,S,A;if((d>t||d<0)&&(n+=d-e),i+=d,S=i-n,x=S-a,(x>0||E)&&(A=++u.frame,f=S-u.time*1e3,u.time=S=S/1e3,a+=x+(x>=s?4:s-x),M=1),E||(l=c(_)),M)for(m=0;m<o.length;m++)o[m](S,f,A,p)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){Lh&&(!lo&&No()&&(Sn=lo=window,Oo=Sn.document||{},tn.gsap=Ve,(Sn.gsapVersions||(Sn.gsapVersions=[])).push(Ve.version),Dh(Gs||Sn.GreenSockGlobals||!Sn.gsap&&Sn||{}),Zh.forEach($h)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(p){return setTimeout(p,a-u.time*1e3+1|0)},qr=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),qr=0,c=Wr},lagSmoothing:function(p,d){t=p||1/0,e=Math.min(d||33,t)},fps:function(p){s=1e3/(p||240),a=u.time*1e3+s},add:function(p,d,E){var x=d?function(M,S,A,b){p(M,S,A,b),u.remove(x)}:p;return u.remove(p),o[E?"unshift":"push"](x),Sr(),x},remove:function(p,d){~(d=o.indexOf(p))&&o.splice(d,1)&&m>=d&&m--},_listeners:o},u}(),Sr=function(){return!qr&&Ze.wake()},zt={},p0=/^[\d.\-M][\d.\-,\s]/,m0=/["']/g,_0=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(m0,"").trim():+c,i=l.substr(o+1).trim();return e},g0=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},v0=function(t){var e=(t+"").split("("),n=zt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[_0(e[1])]:g0(t).split(",").map(Fh)):zt._CE&&p0.test(t)?zt._CE("",t):n},eu=function(t){return function(e){return 1-t(1-e)}},nu=function r(t,e){for(var n=t._first,i;n;)n instanceof Ie?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Pi=function(t,e){return t&&(re(t)?t:zt[t]||v0(t))||e},Oi=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return ze(t,function(o){zt[o]=tn[o]=s,zt[a=o.toLowerCase()]=n;for(var l in s)zt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=zt[o+"."+l]=s[l]}),s},iu=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Ha=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/ao*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*qg((h-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:iu(o);return s=ao/s,l.config=function(c,h){return r(t,c,h)},l},Va=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:iu(n);return i.config=function(s){return r(t,s)},i};ze("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Oi(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});zt.Linear.easeNone=zt.none=zt.Linear.easeIn;Oi("Elastic",Ha("in"),Ha("out"),Ha());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};Oi("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Oi("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Oi("Circ",function(r){return-(Ah(1-r*r)-1)});Oi("Sine",function(r){return r===1?1:-Xg(r*Vg)+1});Oi("Back",Va("in"),Va("out"),Va());zt.SteppedEase=zt.steps=tn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-jt;return function(o){return((i*Qr(0,a,o)|0)+s)*n}}};gr.ease=zt["quad.out"];ze("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return zo+=r+","+r+"Params,"});var ru=function(t,e){this.id=Wg++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Nh,this.set=e?e.getSetter:Xo},Yr=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Mr(this,+e.duration,1,1),this.data=e.data,Jt&&(this._ctx=Jt,Jt.data.push(this)),qr||Ze.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Mr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Sr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(ta(this,n),!s._dp||s.parent||Gh(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&En(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===jt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Oh(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Ic(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Ic(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?xr(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-jt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Vs(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-jt?0:this._rts,this.totalTime(Qr(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Qs(this),Qg(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Sr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==jt&&(this._tTime-=jt)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&En(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Be(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Vs(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Kg);var i=Ee;return Ee=n,ko(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ee=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Nc(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Nc(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(sn(this,n),Be(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Be(i)),this._dur||(this._zTime=-jt),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-jt:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-jt,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-jt)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this;return new Promise(function(s){var a=re(n)?n:Bh,o=function(){var c=i.then;i.then=null,re(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),s(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},t.kill=function(){Nr(this)},r}();en(Yr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-jt,_prom:0,_ps:!1,_rts:1});var Ie=function(r){bh(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Be(n.sortChildren),Qt&&En(n.parent||Qt,Un(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&kh(Un(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return zr(0,arguments,this),this},e.from=function(i,s,a){return zr(1,arguments,this),this},e.fromTo=function(i,s,a,o){return zr(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,Br(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new ue(i,s,sn(this,a),1),this},e.call=function(i,s,a){return En(this,ue.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,l,c,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new ue(i,a,sn(this,l)),this},e.staggerFrom=function(i,s,a,o,l,c,h){return a.runBackwards=1,Br(a).immediateRender=Be(a.immediateRender),this.staggerTo(i,s,a,o,l,c,h)},e.staggerFromTo=function(i,s,a,o,l,c,h,u){return o.startAt=a,Br(o).immediateRender=Be(o.immediateRender),this.staggerTo(i,s,o,l,c,h,u)},e.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:fe(i),u=this._zTime<0!=i<0&&(this._initted||!c),f,m,g,_,p,d,E,x,M,S,A,b;if(this!==Qt&&h>l&&i>=0&&(h=l),h!==this._tTime||a||u){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),f=h,M=this._start,x=this._ts,d=!x,u&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(f=fe(h%p),h===l?(_=this._repeat,f=c):(S=fe(h/p),_=~~S,_&&_===S&&(f=c,_--),f>c&&(f=c)),S=xr(this._tTime,p),!o&&this._tTime&&S!==_&&this._tTime-S*p-this._dur<=0&&(S=_),A&&_&1&&(f=c-f,b=1),_!==S&&!this._lock){var P=A&&S&1,v=P===(A&&_&1);if(_<S&&(P=!P),o=P?0:h%c?c:h,this._lock=1,this.render(o||(b?0:fe(_*p)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&$e(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1),o&&o!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,v&&(this._lock=2,o=P?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!d)return this;nu(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(E=i0(this,fe(o),fe(f)),E&&(h-=f-(f=E._start))),this._tTime=h,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&!s&&!S&&($e(this,"onStart"),this._tTime!==h))return this;if(f>=o&&i>=0)for(m=this._first;m;){if(g=m._next,(m._act||f>=m._start)&&m._ts&&E!==m){if(m.parent!==this)return this.render(i,s,a);if(m.render(m._ts>0?(f-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(f-m._start)*m._ts,s,a),f!==this._time||!this._ts&&!d){E=0,g&&(h+=this._zTime=-jt);break}}m=g}else{m=this._last;for(var w=i<0?i:f;m;){if(g=m._prev,(m._act||w<=m._end)&&m._ts&&E!==m){if(m.parent!==this)return this.render(i,s,a);if(m.render(m._ts>0?(w-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(w-m._start)*m._ts,s,a||Ee&&ko(m)),f!==this._time||!this._ts&&!d){E=0,g&&(h+=this._zTime=w?-jt:jt);break}}m=g}}if(E&&!s&&(this.pause(),E.render(f>=o?0:-jt)._zTime=f>=o?1:-1,this._ts))return this._start=M,Qs(this),this.render(i,s,a);this._onUpdate&&!s&&$e(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(M===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&si(this,1),!s&&!(i<0&&!o)&&(h||o||!l)&&($e(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(zn(s)||(s=sn(this,s,i)),!(i instanceof Yr)){if(Re(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Se(i))return this.addLabel(i,s);if(re(i))i=ue.delayedCall(0,i);else return this}return this!==i?En(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-hn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof ue?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return Se(i)?this.removeLabel(i):re(i)?this.killTweensOf(i):(i.parent===this&&Js(this,i),i===this._recent&&(this._recent=this._last),Ci(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=fe(Ze.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=sn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=ue.delayedCall(0,s||Wr,a);return o.data="isPause",this._hasPause=1,En(this,o,sn(this,i))},e.removePause=function(i){var s=this._first;for(i=sn(this,i);s;)s._start===i&&s.data==="isPause"&&si(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Kn!==o[l]&&o[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=un(i),l=this._first,c=zn(s),h;l;)l instanceof ue?Zg(l._targets,o)&&(c?(!Kn||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(h=l.getTweensOf(o,s)).length&&a.push.apply(a,h),l=l._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=sn(a,i),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,f=l.immediateRender,m,g=ue.to(a,en({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||jt,onStart:function(){if(a.pause(),!m){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==p&&Mr(g,p,0,1).render(g._time,!0,!0),m=1}h&&h.apply(g,u||[])}},s));return f?g.render(0):g},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,en({startAt:{time:sn(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Oc(this,sn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Oc(this,sn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+jt)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Ci(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ci(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,l=hn,c,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(u=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,En(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(s-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=h/a._ts,a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Mr(a,a===Qt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(Qt._ts&&(Oh(Qt,Vs(i,Qt)),Ih=Ze.frame),Ze.frame>=Dc){Dc+=Qe.autoSleep||120;var s=Qt._first;if((!s||!s._ts)&&Qe.autoSleep&&Ze._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Ze.sleep()}}},t}(Yr);en(Ie.prototype,{_lock:0,_hasPause:0,_forcing:0});var x0=function(t,e,n,i,s,a,o){var l=new Ge(this._pt,t,e,0,1,hu,null,s),c=0,h=0,u,f,m,g,_,p,d,E;for(l.b=n,l.e=i,n+="",i+="",(d=~i.indexOf("random("))&&(i=Xr(i)),a&&(E=[n,i],a(E,t,e),n=E[0],i=E[1]),f=n.match(za)||[];u=za.exec(i);)g=u[0],_=i.substring(c,u.index),m?m=(m+1)%5:_.substr(-5)==="rgba("&&(m=1),g!==f[h++]&&(p=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:p,c:g.charAt(1)==="="?hr(p,g)-p:parseFloat(g)-p,m:m&&m<4?Math.round:0},c=za.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Ch.test(i)||d)&&(l.e=0),this._pt=l,l},Ho=function(t,e,n,i,s,a,o,l,c,h){re(i)&&(i=i(s||0,t,a));var u=t[e],f=n!=="get"?n:re(u)?c?t[e.indexOf("set")||!re(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,m=re(u)?c?T0:lu:Wo,g;if(Se(i)&&(~i.indexOf("random(")&&(i=Xr(i)),i.charAt(1)==="="&&(g=hr(f,i)+(we(f)||0),(g||g===0)&&(i=g))),!h||f!==i||_o)return!isNaN(f*i)&&i!==""?(g=new Ge(this._pt,t,e,+f||0,i-(f||0),typeof u=="boolean"?A0:cu,0,m),c&&(g.fp=c),o&&g.modifier(o,this,t),this._pt=g):(!u&&!(e in t)&&Fo(e,i),x0.call(this,t,e,f,i,m,l||Qe.stringFilter,c))},M0=function(t,e,n,i,s){if(re(t)&&(t=Gr(t,s,e,n,i)),!bn(t)||t.style&&t.nodeType||Re(t)||wh(t))return Se(t)?Gr(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=Gr(t[o],s,e,n,i);return a},su=function(t,e,n,i,s,a){var o,l,c,h;if(Ke[t]&&(o=new Ke[t]).init(s,o.rawVars?e[t]:M0(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Ge(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==or))for(c=n._ptLookup[n._targets.indexOf(s)],h=o._props.length;h--;)c[o._props[h]]=l;return o},Kn,_o,Vo=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,f=i.keyframes,m=i.autoRevert,g=t._dur,_=t._startAt,p=t._targets,d=t.parent,E=d&&d.data==="nested"?d.vars.targets:p,x=t._overwrite==="auto"&&!Uo,M=t.timeline,S,A,b,P,v,w,G,F,q,C,N,X,W;if(M&&(!f||!s)&&(s="none"),t._ease=Pi(s,gr.ease),t._yEase=u?eu(Pi(u===!0?s:u,gr.ease)):0,u&&t._yoyo&&!t._repeat&&(u=t._yEase,t._yEase=t._ease,t._ease=u),t._from=!M&&!!i.runBackwards,!M||f&&!i.stagger){if(F=p[0]?Ri(p[0]).harness:0,X=F&&i[F.prop],S=Hs(i,Bo),_&&(_._zTime<0&&_.progress(1),e<0&&h&&o&&!m?_.render(-1,!0):_.revert(h&&g?Ps:jg),_._lazy=0),a){if(si(t._startAt=ue.set(p,en({data:"isStart",overwrite:!1,parent:d,immediateRender:!0,lazy:!_&&Be(l),startAt:null,delay:0,onUpdate:c&&function(){return $e(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ee||!o&&!m)&&t._startAt.revert(Ps),o&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&g&&!_){if(e&&(o=!1),b=en({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Be(l),immediateRender:o,stagger:0,parent:d},S),X&&(b[F.prop]=X),si(t._startAt=ue.set(p,b)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ee?t._startAt.revert(Ps):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,jt,jt);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&Be(l)||l&&!g,A=0;A<p.length;A++){if(v=p[A],G=v._gsap||Go(p)[A]._gsap,t._ptLookup[A]=C={},co[G.id]&&ni.length&&ks(),N=E===p?A:E.indexOf(v),F&&(q=new F).init(v,X||S,t,N,E)!==!1&&(t._pt=P=new Ge(t._pt,v,q.name,0,1,q.render,q,0,q.priority),q._props.forEach(function(Z){C[Z]=P}),q.priority&&(w=1)),!F||X)for(b in S)Ke[b]&&(q=su(b,S,t,N,v,E))?q.priority&&(w=1):C[b]=P=Ho.call(t,v,b,"get",S[b],N,E,0,i.stringFilter);t._op&&t._op[A]&&t.kill(v,t._op[A]),x&&t._pt&&(Kn=t,Qt.killTweensOf(v,C,t.globalTime(e)),W=!t.parent,Kn=0),t._pt&&l&&(co[G.id]=1)}w&&uu(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!W,f&&e<=0&&M.render(hn,!0,!0)},S0=function(t,e,n,i,s,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,f,m;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,m=t._targets.length;m--;){if(h=f[m][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return _o=1,t.vars[e]="+=0",Vo(t,o),_o=0,l?Vr(e+" not eligible for reset"):1;c.push(h)}for(m=c.length;m--;)u=c[m],h=u._pt||u,h.s=(i||i===0)&&!s?i:h.s+(i||0)+a*h.c,h.c=n-h.s,u.e&&(u.e=oe(n)+we(u.e)),u.b&&(u.b=h.s+we(u.b))},y0=function(t,e){var n=t[0]?Ri(t[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return e;s=vr({},e);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},E0=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,o;if(Re(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},Gr=function(t,e,n,i,s){return re(t)?t.call(e,n,i,s):Se(t)&&~t.indexOf("random(")?Xr(t):t},au=zo+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",ou={};ze(au+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return ou[r]=1});var ue=function(r){bh(t,r);function t(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Br(i))||this;var l=o.vars,c=l.duration,h=l.delay,u=l.immediateRender,f=l.stagger,m=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,d=l.yoyoEase,E=i.parent||Qt,x=(Re(n)||wh(n)?zn(n[0]):"length"in i)?[n]:un(n),M,S,A,b,P,v,w,G;if(o._targets=x.length?Go(x):Vr("GSAP target "+n+" not found. https://gsap.com",!Qe.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=m,g||f||Rs(c)||Rs(h)){if(i=o.vars,M=o.timeline=new Ie({data:"nested",defaults:_||{},targets:E&&E.data==="nested"?E.vars.targets:x}),M.kill(),M.parent=M._dp=Un(o),M._start=0,f||Rs(c)||Rs(h)){if(b=x.length,w=f&&Xh(f),bn(f))for(P in f)~au.indexOf(P)&&(G||(G={}),G[P]=f[P]);for(S=0;S<b;S++)A=Hs(i,ou),A.stagger=0,d&&(A.yoyoEase=d),G&&vr(A,G),v=x[S],A.duration=+Gr(c,Un(o),S,v,x),A.delay=(+Gr(h,Un(o),S,v,x)||0)-o._delay,!f&&b===1&&A.delay&&(o._delay=h=A.delay,o._start+=h,A.delay=0),M.to(v,A,w?w(S,v,x):0),M._ease=zt.none;M.duration()?c=h=0:o.timeline=0}else if(g){Br(en(M.vars.defaults,{ease:"none"})),M._ease=Pi(g.ease||i.ease||"none");var F=0,q,C,N;if(Re(g))g.forEach(function(X){return M.to(x,X,">")}),M.duration();else{A={};for(P in g)P==="ease"||P==="easeEach"||E0(P,g[P],A,g.easeEach);for(P in A)for(q=A[P].sort(function(X,W){return X.t-W.t}),F=0,S=0;S<q.length;S++)C=q[S],N={ease:C.e,duration:(C.t-(S?q[S-1].t:0))/100*c},N[P]=C.v,M.to(x,N,F),F+=N.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||o.duration(c=M.duration())}else o.timeline=0;return m===!0&&!Uo&&(Kn=Un(o),Qt.killTweensOf(x),Kn=0),En(E,Un(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(u||!c&&!g&&o._start===fe(E._time)&&Be(u)&&t0(Un(o))&&E.data!=="nested")&&(o._tTime=-jt,o.render(Math.max(0,-h)||0)),p&&kh(Un(o),p),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-jt&&!h?l:i<jt?0:i,f,m,g,_,p,d,E,x,M;if(!c)n0(this,i,s,a);else if(u!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=u,x=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,a);if(f=fe(u%_),u===l?(g=this._repeat,f=c):(p=fe(u/_),g=~~p,g&&g===p?(f=c,g--):f>c&&(f=c)),d=this._yoyo&&g&1,d&&(M=this._yEase,f=c-f),p=xr(this._tTime,_),f===o&&!a&&this._initted&&g===p)return this._tTime=u,this;g!==p&&(x&&this._yEase&&nu(x,d),this.vars.repeatRefresh&&!d&&!this._lock&&f!==_&&this._initted&&(this._lock=a=1,this.render(fe(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Hh(this,h?i:f,a,s,u))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=E=(M||this._ease)(f/c),this._from&&(this.ratio=E=1-E),!o&&u&&!s&&!p&&($e(this,"onStart"),this._tTime!==u))return this;for(m=this._pt;m;)m.r(E,m.d),m=m._next;x&&x.render(i<0?i:x._dur*x._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&ho(this,i,s,a),$e(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&$e(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&ho(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&si(this,1),!s&&!(h&&!o)&&(u||o||d)&&($e(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o,l){qr||Ze.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Vo(this,c),h=this._ease(c/this._dur),S0(this,i,s,a,o,h,c,l)?this.resetTo(i,s,a,o,1):(ta(this,0),this.parent||zh(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Nr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ee),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Kn&&Kn.vars.overwrite!==!0)._first||Nr(this),this.parent&&a!==this.timeline.totalDuration()&&Mr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?un(i):o,c=this._ptLookup,h=this._pt,u,f,m,g,_,p,d;if((!s||s==="all")&&Jg(o,l))return s==="all"&&(this._pt=0),Nr(this);for(u=this._op=this._op||[],s!=="all"&&(Se(s)&&(_={},ze(s,function(E){return _[E]=1}),s=_),s=y0(o,s)),d=o.length;d--;)if(~l.indexOf(o[d])){f=c[d],s==="all"?(u[d]=s,g=f,m={}):(m=u[d]=u[d]||{},g=s);for(_ in g)p=f&&f[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&Js(this,p,"_pt"),delete f[_]),m!=="all"&&(m[_]=1)}return this._initted&&!this._pt&&h&&Nr(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return zr(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return zr(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return Qt.killTweensOf(i,s,a)},t}(Yr);en(ue.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ze("staggerTo,staggerFrom,staggerFromTo",function(r){ue[r]=function(){var t=new Ie,e=fo.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Wo=function(t,e,n){return t[e]=n},lu=function(t,e,n){return t[e](n)},T0=function(t,e,n,i){return t[e](i.fp,n)},b0=function(t,e,n){return t.setAttribute(e,n)},Xo=function(t,e){return re(t[e])?lu:Io(t[e])&&t.setAttribute?b0:Wo},cu=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},A0=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},hu=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},qo=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},w0=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},R0=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Js(this,e,"_pt"):e.dep||(n=1),e=i;return!n},C0=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},uu=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},Ge=function(){function r(e,n,i,s,a,o,l,c,h){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||cu,this.d=l||this,this.set=c||Wo,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=C0,this.m=n,this.mt=s,this.tween=i},r}();ze(zo+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Bo[r]=1});tn.TweenMax=tn.TweenLite=ue;tn.TimelineLite=tn.TimelineMax=Ie;Qt=new Ie({sortChildren:!1,defaults:gr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Qe.stringFilter=tu;var Li=[],Ds={},P0=[],Bc=0,L0=0,Wa=function(t){return(Ds[t]||P0).map(function(e){return e()})},go=function(){var t=Date.now(),e=[];t-Bc>2&&(Wa("matchMediaInit"),Li.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=Sn.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),Wa("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Bc=t,Wa("matchMedia"))},fu=function(){function r(e,n){this.selector=n&&po(n),this.data=[],this._r=[],this.isReverted=!1,this.id=L0++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){re(n)&&(s=i,i=n,n=re);var a=this,o=function(){var c=Jt,h=a.selector,u;return c&&c!==a&&c.data.push(a),s&&(a.selector=po(s)),Jt=a,u=i.apply(a,arguments),re(u)&&a._r.push(u),Jt=c,a.selector=h,a.isReverted=!1,u};return a.last=o,n===re?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=Jt;Jt=null,n(this),Jt=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof ue&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Ie?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof ue)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Li.length;a--;)Li[a].id===this.id&&Li.splice(a,1)},t.revert=function(n){this.kill(n||{})},r}(),D0=function(){function r(e){this.contexts=[],this.scope=e,Jt&&Jt.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){bn(n)||(n={matches:n});var a=new fu(0,s||this.scope),o=a.conditions={},l,c,h;Jt&&!a.selector&&(a.selector=Jt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=Sn.matchMedia(n[c]),l&&(Li.indexOf(a)<0&&Li.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(go):l.addEventListener("change",go)));return h&&i(a,function(u){return a.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Ws={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return $h(i)})},timeline:function(t){return new Ie(t)},getTweensOf:function(t,e){return Qt.getTweensOf(t,e)},getProperty:function(t,e,n,i){Se(t)&&(t=un(t)[0]);var s=Ri(t||{}).get,a=n?Bh:Fh;return n==="native"&&(n=""),t&&(e?a((Ke[e]&&Ke[e].get||s)(t,e,n,i)):function(o,l,c){return a((Ke[o]&&Ke[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=un(t),t.length>1){var i=t.map(function(h){return Ve.quickSetter(h,e,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}t=t[0]||{};var a=Ke[e],o=Ri(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(h){var u=new a;or._pt=0,u.init(t,n?h+n:h,or,0,[t]),u.render(1,u),or._pt&&qo(1,or)}:o.set(t,l);return a?c:function(h){return c(t,l,n?h+n:h,o,1)}},quickTo:function(t,e,n){var i,s=Ve.to(t,en((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,h){return s.resetTo(e,l,c,h)};return a.tween=s,a},isTweening:function(t){return Qt.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Pi(t.ease,gr.ease)),Uc(gr,t||{})},config:function(t){return Uc(Qe,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Ke[o]&&!tn[o]&&Vr(e+" effect requires "+o+" plugin.")}),Ga[e]=function(o,l,c){return n(un(o),en(l||{},s),c)},a&&(Ie.prototype[e]=function(o,l,c){return this.add(Ga[e](o,bn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){zt[t]=Pi(e)},parseEase:function(t,e){return arguments.length?Pi(t,e):zt},getById:function(t){return Qt.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Ie(t),i,s;for(n.smoothChildTiming=Be(t.smoothChildTiming),Qt.remove(n),n._dp=0,n._time=n._tTime=Qt._time,i=Qt._first;i;)s=i._next,(e||!(!i._dur&&i instanceof ue&&i.vars.onComplete===i._targets[0]))&&En(n,i,i._start-i._delay),i=s;return En(Qt,n,0),n},context:function(t,e){return t?new fu(t,e):Jt},matchMedia:function(t){return new D0(t)},matchMediaRefresh:function(){return Li.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||go()},addEventListener:function(t,e){var n=Ds[t]||(Ds[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Ds[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:h0,wrapYoyo:u0,distribute:Xh,random:Yh,snap:qh,normalize:c0,getUnit:we,clamp:s0,splitColor:Jh,toArray:un,selector:po,mapRange:Kh,pipe:o0,unitize:l0,interpolate:f0,shuffle:Wh},install:Dh,effects:Ga,ticker:Ze,updateRoot:Ie.updateRoot,plugins:Ke,globalTimeline:Qt,core:{PropTween:Ge,globals:Uh,Tween:ue,Timeline:Ie,Animation:Yr,getCache:Ri,_removeLinkedListItem:Js,reverting:function(){return Ee},context:function(t){return t&&Jt&&(Jt.data.push(t),t._ctx=Jt),Jt},suppressOverwrites:function(t){return Uo=t}}};ze("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Ws[r]=ue[r]});Ze.add(Ie.updateRoot);or=Ws.to({},{duration:0});var U0=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},I0=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=U0(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},Xa=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(Se(s)&&(l={},ze(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}I0(o,s)}}}},Ve=Ws.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)Ee?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Xa("roundProps",mo),Xa("modifiers"),Xa("snap",qh))||Ws;ue.version=Ie.version=Ve.version="3.13.0";Lh=1;No()&&Sr();zt.Power0;zt.Power1;zt.Power2;zt.Power3;zt.Power4;zt.Linear;zt.Quad;zt.Cubic;zt.Quart;zt.Quint;zt.Strong;zt.Elastic;zt.Back;zt.SteppedEase;zt.Bounce;zt.Sine;zt.Expo;zt.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var zc,Zn,ur,Yo,Ti,Gc,jo,N0=function(){return typeof window<"u"},Gn={},xi=180/Math.PI,fr=Math.PI/180,rr=Math.atan2,kc=1e8,Ko=/([A-Z])/g,O0=/(left|right|width|margin|padding|x)/i,F0=/[\s,\(]\S/,Tn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},vo=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},B0=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},z0=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},G0=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},du=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},pu=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},k0=function(t,e,n){return t.style[e]=n},H0=function(t,e,n){return t.style.setProperty(e,n)},V0=function(t,e,n){return t._gsap[e]=n},W0=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},X0=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},q0=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},te="transform",ke=te+"Origin",Y0=function r(t,e){var n=this,i=this.target,s=i.style,a=i._gsap;if(t in Gn&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Tn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=In(i,o)}):this.tfm[t]=a.x?a[t]:In(i,t),t===ke&&(this.tfm.zOrigin=a.zOrigin);else return Tn.transform.split(",").forEach(function(o){return r.call(n,o,e)});if(this.props.indexOf(te)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(ke,e,"")),t=te}(s||e)&&this.props.push(t,e,s[t])},mu=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},j0=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Ko,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=jo(),(!s||!s.isStart)&&!n[te]&&(mu(n),i.zOrigin&&n[ke]&&(n[ke]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},_u=function(t,e){var n={target:t,props:[],revert:j0,save:Y0};return t._gsap||Ve.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},gu,xo=function(t,e){var n=Zn.createElementNS?Zn.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Zn.createElement(t);return n&&n.style?n:Zn.createElement(t)},fn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Ko,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,yr(e)||e,1)||""},Hc="O,Moz,ms,Ms,Webkit".split(","),yr=function(t,e,n){var i=e||Ti,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(Hc[a]+t in s););return a<0?null:(a===3?"ms":a>=0?Hc[a]:"")+t},Mo=function(){N0()&&window.document&&(zc=window,Zn=zc.document,ur=Zn.documentElement,Ti=xo("div")||{style:{}},xo("div"),te=yr(te),ke=te+"Origin",Ti.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",gu=!!yr("perspective"),jo=Ve.core.reverting,Yo=1)},Vc=function(t){var e=t.ownerSVGElement,n=xo("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),ur.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),ur.removeChild(n),s},Wc=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},vu=function(t){var e,n;try{e=t.getBBox()}catch{e=Vc(t),n=1}return e&&(e.width||e.height)||n||(e=Vc(t)),e&&!e.width&&!e.x&&!e.y?{x:+Wc(t,["x","cx","x1"])||0,y:+Wc(t,["y","cy","y1"])||0,width:0,height:0}:e},xu=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&vu(t))},Ni=function(t,e){if(e){var n=t.style,i;e in Gn&&e!==ke&&(e=te),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Ko,"-$1").toLowerCase())):n.removeAttribute(e)}},$n=function(t,e,n,i,s,a){var o=new Ge(t._pt,e,n,0,1,a?pu:du);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},Xc={deg:1,rad:1,turn:1},K0={grid:1,flex:1},ai=function r(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Ti.style,l=O0.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,f=i==="px",m=i==="%",g,_,p,d;if(i===a||!s||Xc[i]||Xc[a])return s;if(a!=="px"&&!f&&(s=r(t,e,n,"px")),d=t.getCTM&&xu(t),(m||a==="%")&&(Gn[e]||~e.indexOf("adius")))return g=d?t.getBBox()[l?"width":"height"]:t[h],oe(m?s/g*u:s/100*g);if(o[l?"width":"height"]=u+(f?a:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,d&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Zn||!_.appendChild)&&(_=Zn.body),p=_._gsap,p&&m&&p.width&&l&&p.time===Ze.time&&!p.uncache)return oe(s/p.width*u);if(m&&(e==="height"||e==="width")){var E=t.style[e];t.style[e]=u+i,g=t[h],E?t.style[e]=E:Ni(t,e)}else(m||a==="%")&&!K0[fn(_,"display")]&&(o.position=fn(t,"position")),_===t&&(o.position="static"),_.appendChild(Ti),g=Ti[h],_.removeChild(Ti),o.position="absolute";return l&&m&&(p=Ri(_),p.time=Ze.time,p.width=_[h]),oe(f?g*s/u:g&&s?u/g*s:0)},In=function(t,e,n,i){var s;return Yo||Mo(),e in Tn&&e!=="transform"&&(e=Tn[e],~e.indexOf(",")&&(e=e.split(",")[0])),Gn[e]&&e!=="transform"?(s=Kr(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:qs(fn(t,ke))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Xs[e]&&Xs[e](t,e,n)||fn(t,e)||Nh(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?ai(t,e,s,n)+n:s},Z0=function(t,e,n,i){if(!n||n==="none"){var s=yr(e,t,1),a=s&&fn(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=fn(t,"borderTopColor"))}var o=new Ge(this._pt,t.style,e,0,1,hu),l=0,c=0,h,u,f,m,g,_,p,d,E,x,M,S;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=fn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=fn(t,e)||i,_?t.style[e]=_:Ni(t,e)),h=[n,i],tu(h),n=h[0],i=h[1],f=n.match(ar)||[],S=i.match(ar)||[],S.length){for(;u=ar.exec(i);)p=u[0],E=i.substring(l,u.index),g?g=(g+1)%5:(E.substr(-5)==="rgba("||E.substr(-5)==="hsla(")&&(g=1),p!==(_=f[c++]||"")&&(m=parseFloat(_)||0,M=_.substr((m+"").length),p.charAt(1)==="="&&(p=hr(m,p)+M),d=parseFloat(p),x=p.substr((d+"").length),l=ar.lastIndex-x.length,x||(x=x||Qe.units[e]||M,l===i.length&&(i+=x,o.e+=x)),M!==x&&(m=ai(t,e,_,x)||0),o._pt={_next:o._pt,p:E||c===1?E:",",s:m,c:d-m,m:g&&g<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?pu:du;return Ch.test(i)&&(o.e=0),this._pt=o,o},qc={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},$0=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=qc[n]||n,e[1]=qc[i]||i,e.join(" ")},J0=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Gn[o]&&(l=1,o=o==="transformOrigin"?ke:te),Ni(n,o);l&&(Ni(n,te),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Kr(n,1),a.uncache=1,mu(i)))}},Xs={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new Ge(t._pt,e,n,0,0,J0);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},jr=[1,0,0,1,0,0],Mu={},Su=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Yc=function(t){var e=fn(t,te);return Su(e)?jr:e.substr(7).match(Rh).map(oe)},Zo=function(t,e){var n=t._gsap||Ri(t),i=t.style,s=Yc(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?jr:s):(s===jr&&!t.offsetParent&&t!==ur&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,ur.appendChild(t)),s=Yc(t),l?i.display=l:Ni(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):ur.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},So=function(t,e,n,i,s,a){var o=t._gsap,l=s||Zo(t,!0),c=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,f=o.yOffset||0,m=l[0],g=l[1],_=l[2],p=l[3],d=l[4],E=l[5],x=e.split(" "),M=parseFloat(x[0])||0,S=parseFloat(x[1])||0,A,b,P,v;n?l!==jr&&(b=m*p-g*_)&&(P=M*(p/b)+S*(-_/b)+(_*E-p*d)/b,v=M*(-g/b)+S*(m/b)-(m*E-g*d)/b,M=P,S=v):(A=vu(t),M=A.x+(~x[0].indexOf("%")?M/100*A.width:M),S=A.y+(~(x[1]||x[0]).indexOf("%")?S/100*A.height:S)),i||i!==!1&&o.smooth?(d=M-c,E=S-h,o.xOffset=u+(d*m+E*_)-d,o.yOffset=f+(d*g+E*p)-E):o.xOffset=o.yOffset=0,o.xOrigin=M,o.yOrigin=S,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[ke]="0px 0px",a&&($n(a,o,"xOrigin",c,M),$n(a,o,"yOrigin",h,S),$n(a,o,"xOffset",u,o.xOffset),$n(a,o,"yOffset",f,o.yOffset)),t.setAttribute("data-svg-origin",M+" "+S)},Kr=function(t,e){var n=t._gsap||new ru(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=fn(t,ke)||"0",h,u,f,m,g,_,p,d,E,x,M,S,A,b,P,v,w,G,F,q,C,N,X,W,Z,K,j,U,k,at,st,lt;return h=u=f=_=p=d=E=x=M=0,m=g=1,n.svg=!!(t.getCTM&&xu(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[te]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[te]!=="none"?l[te]:"")),i.scale=i.rotate=i.translate="none"),b=Zo(t,n.svg),n.svg&&(n.uncache?(Z=t.getBBox(),c=n.xOrigin-Z.x+"px "+(n.yOrigin-Z.y)+"px",W=""):W=!e&&t.getAttribute("data-svg-origin"),So(t,W||c,!!W||n.originIsAbsolute,n.smooth!==!1,b)),S=n.xOrigin||0,A=n.yOrigin||0,b!==jr&&(G=b[0],F=b[1],q=b[2],C=b[3],h=N=b[4],u=X=b[5],b.length===6?(m=Math.sqrt(G*G+F*F),g=Math.sqrt(C*C+q*q),_=G||F?rr(F,G)*xi:0,E=q||C?rr(q,C)*xi+_:0,E&&(g*=Math.abs(Math.cos(E*fr))),n.svg&&(h-=S-(S*G+A*q),u-=A-(S*F+A*C))):(lt=b[6],at=b[7],j=b[8],U=b[9],k=b[10],st=b[11],h=b[12],u=b[13],f=b[14],P=rr(lt,k),p=P*xi,P&&(v=Math.cos(-P),w=Math.sin(-P),W=N*v+j*w,Z=X*v+U*w,K=lt*v+k*w,j=N*-w+j*v,U=X*-w+U*v,k=lt*-w+k*v,st=at*-w+st*v,N=W,X=Z,lt=K),P=rr(-q,k),d=P*xi,P&&(v=Math.cos(-P),w=Math.sin(-P),W=G*v-j*w,Z=F*v-U*w,K=q*v-k*w,st=C*w+st*v,G=W,F=Z,q=K),P=rr(F,G),_=P*xi,P&&(v=Math.cos(P),w=Math.sin(P),W=G*v+F*w,Z=N*v+X*w,F=F*v-G*w,X=X*v-N*w,G=W,N=Z),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,d=180-d),m=oe(Math.sqrt(G*G+F*F+q*q)),g=oe(Math.sqrt(X*X+lt*lt)),P=rr(N,X),E=Math.abs(P)>2e-4?P*xi:0,M=st?1/(st<0?-st:st):0),n.svg&&(W=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Su(fn(t,te)),W&&t.setAttribute("transform",W))),Math.abs(E)>90&&Math.abs(E)<270&&(s?(m*=-1,E+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,E+=E<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=oe(m),n.scaleY=oe(g),n.rotation=oe(_)+o,n.rotationX=oe(p)+o,n.rotationY=oe(d)+o,n.skewX=E+o,n.skewY=x+o,n.transformPerspective=M+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[ke]=qs(c)),n.xOffset=n.yOffset=0,n.force3D=Qe.force3D,n.renderTransform=n.svg?tv:gu?yu:Q0,n.uncache=0,n},qs=function(t){return(t=t.split(" "))[0]+" "+t[1]},qa=function(t,e,n){var i=we(e);return oe(parseFloat(e)+parseFloat(ai(t,"x",n+"px",i)))+i},Q0=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,yu(t,e)},mi="0deg",Ur="0px",_i=") ",yu=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,f=n.skewX,m=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,d=n.force3D,E=n.target,x=n.zOrigin,M="",S=d==="auto"&&t&&t!==1||d===!0;if(x&&(u!==mi||h!==mi)){var A=parseFloat(h)*fr,b=Math.sin(A),P=Math.cos(A),v;A=parseFloat(u)*fr,v=Math.cos(A),a=qa(E,a,b*v*-x),o=qa(E,o,-Math.sin(A)*-x),l=qa(E,l,P*v*-x+x)}p!==Ur&&(M+="perspective("+p+_i),(i||s)&&(M+="translate("+i+"%, "+s+"%) "),(S||a!==Ur||o!==Ur||l!==Ur)&&(M+=l!==Ur||S?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+_i),c!==mi&&(M+="rotate("+c+_i),h!==mi&&(M+="rotateY("+h+_i),u!==mi&&(M+="rotateX("+u+_i),(f!==mi||m!==mi)&&(M+="skew("+f+", "+m+_i),(g!==1||_!==1)&&(M+="scale("+g+", "+_+_i),E.style[te]=M||"translate(0, 0)"},tv=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,f=n.scaleY,m=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,d=n.yOffset,E=n.forceCSS,x=parseFloat(a),M=parseFloat(o),S,A,b,P,v;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=fr,c*=fr,S=Math.cos(l)*u,A=Math.sin(l)*u,b=Math.sin(l-c)*-f,P=Math.cos(l-c)*f,c&&(h*=fr,v=Math.tan(c-h),v=Math.sqrt(1+v*v),b*=v,P*=v,h&&(v=Math.tan(h),v=Math.sqrt(1+v*v),S*=v,A*=v)),S=oe(S),A=oe(A),b=oe(b),P=oe(P)):(S=u,P=f,A=b=0),(x&&!~(a+"").indexOf("px")||M&&!~(o+"").indexOf("px"))&&(x=ai(m,"x",a,"px"),M=ai(m,"y",o,"px")),(g||_||p||d)&&(x=oe(x+g-(g*S+_*b)+p),M=oe(M+_-(g*A+_*P)+d)),(i||s)&&(v=m.getBBox(),x=oe(x+i/100*v.width),M=oe(M+s/100*v.height)),v="matrix("+S+","+A+","+b+","+P+","+x+","+M+")",m.setAttribute("transform",v),E&&(m.style[te]=v)},ev=function(t,e,n,i,s){var a=360,o=Se(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?xi:1),c=l-i,h=i+c+"deg",u,f;return o&&(u=s.split("_")[1],u==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),u==="cw"&&c<0?c=(c+a*kc)%a-~~(c/a)*a:u==="ccw"&&c>0&&(c=(c-a*kc)%a-~~(c/a)*a)),t._pt=f=new Ge(t._pt,e,n,i,c,B0),f.e=h,f.u="deg",t._props.push(n),f},jc=function(t,e){for(var n in e)t[n]=e[n];return t},nv=function(t,e,n){var i=jc({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,u,f,m,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[te]=e,o=Kr(n,1),Ni(n,te),n.setAttribute("transform",c)):(c=getComputedStyle(n)[te],a[te]=e,o=Kr(n,1),a[te]=c);for(l in Gn)c=i[l],h=o[l],c!==h&&s.indexOf(l)<0&&(m=we(c),g=we(h),u=m!==g?ai(n,l,c,g):parseFloat(c),f=parseFloat(h),t._pt=new Ge(t._pt,o,l,u,f-u,vo),t._pt.u=g||0,t._props.push(l));jc(o,i)};ze("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?r+o:"border"+o+r});Xs[t>1?"border"+r:r]=function(o,l,c,h,u){var f,m;if(arguments.length<4)return f=a.map(function(g){return In(o,g,c)}),m=f.join(" "),m.split(f[0]).length===5?f[0]:m;f=(h+"").split(" "),m={},a.forEach(function(g,_){return m[g]=f[_]=f[_]||f[(_-1)/2|0]}),o.init(l,m,u)}});var Eu={name:"css",register:Mo,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,o=t.style,l=n.vars.startAt,c,h,u,f,m,g,_,p,d,E,x,M,S,A,b,P;Yo||Mo(),this.styles=this.styles||_u(t),P=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(Ke[_]&&su(_,e,n,i,t,s)))){if(m=typeof h,g=Xs[_],m==="function"&&(h=h.call(n,i,t,s),m=typeof h),m==="string"&&~h.indexOf("random(")&&(h=Xr(h)),g)g(this,t,_,h,n)&&(b=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",ii.lastIndex=0,ii.test(c)||(p=we(c),d=we(h)),d?p!==d&&(c=ai(t,_,c,d)+d):p&&(h+=p),this.add(o,"setProperty",c,h,i,s,0,0,_),a.push(_),P.push(_,0,o[_]);else if(m!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],Se(c)&&~c.indexOf("random(")&&(c=Xr(c)),we(c+"")||c==="auto"||(c+=Qe.units[_]||we(In(t,_))||""),(c+"").charAt(1)==="="&&(c=In(t,_))):c=In(t,_),f=parseFloat(c),E=m==="string"&&h.charAt(1)==="="&&h.substr(0,2),E&&(h=h.substr(2)),u=parseFloat(h),_ in Tn&&(_==="autoAlpha"&&(f===1&&In(t,"visibility")==="hidden"&&u&&(f=0),P.push("visibility",0,o.visibility),$n(this,o,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),_!=="scale"&&_!=="transform"&&(_=Tn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in Gn,x){if(this.styles.save(_),m==="string"&&h.substring(0,6)==="var(--"&&(h=fn(t,h.substring(4,h.indexOf(")"))),u=parseFloat(h)),M||(S=t._gsap,S.renderTransform&&!e.parseTransform||Kr(t,e.parseTransform),A=e.smoothOrigin!==!1&&S.smooth,M=this._pt=new Ge(this._pt,o,te,0,1,S.renderTransform,S,0,-1),M.dep=1),_==="scale")this._pt=new Ge(this._pt,S,"scaleY",S.scaleY,(E?hr(S.scaleY,E+u):u)-S.scaleY||0,vo),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){P.push(ke,0,o[ke]),h=$0(h),S.svg?So(t,h,0,A,0,this):(d=parseFloat(h.split(" ")[2])||0,d!==S.zOrigin&&$n(this,S,"zOrigin",S.zOrigin,d),$n(this,o,_,qs(c),qs(h)));continue}else if(_==="svgOrigin"){So(t,h,1,A,0,this);continue}else if(_ in Mu){ev(this,S,_,f,E?hr(f,E+h):h);continue}else if(_==="smoothOrigin"){$n(this,S,"smooth",S.smooth,h);continue}else if(_==="force3D"){S[_]=h;continue}else if(_==="transform"){nv(this,h,t);continue}}else _ in o||(_=yr(_)||_);if(x||(u||u===0)&&(f||f===0)&&!F0.test(h)&&_ in o)p=(c+"").substr((f+"").length),u||(u=0),d=we(h)||(_ in Qe.units?Qe.units[_]:p),p!==d&&(f=ai(t,_,c,d)),this._pt=new Ge(this._pt,x?S:o,_,f,(E?hr(f,E+u):u)-f,!x&&(d==="px"||_==="zIndex")&&e.autoRound!==!1?G0:vo),this._pt.u=d||0,p!==d&&d!=="%"&&(this._pt.b=c,this._pt.r=z0);else if(_ in o)Z0.call(this,t,_,c,E?E+h:h);else if(_ in t)this.add(t,_,c||t[_],E?E+h:h,i,s);else if(_!=="parseTransform"){Fo(_,h);continue}x||(_ in o?P.push(_,0,o[_]):typeof t[_]=="function"?P.push(_,2,t[_]()):P.push(_,1,c||t[_])),a.push(_)}}b&&uu(this)},render:function(t,e){if(e.tween._time||!jo())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:In,aliases:Tn,getSetter:function(t,e,n){var i=Tn[e];return i&&i.indexOf(",")<0&&(e=i),e in Gn&&e!==ke&&(t._gsap.x||In(t,"x"))?n&&Gc===n?e==="scale"?W0:V0:(Gc=n||{})&&(e==="scale"?X0:q0):t.style&&!Io(t.style[e])?k0:~e.indexOf("-")?H0:Xo(t,e)},core:{_removeProperty:Ni,_getMatrix:Zo}};Ve.utils.checkPrefix=yr;Ve.core.getStyleSaver=_u;(function(r,t,e,n){var i=ze(r+","+t+","+e,function(s){Gn[s]=1});ze(t,function(s){Qe.units[s]="deg",Mu[s]=1}),Tn[i[13]]=r+","+t,ze(n,function(s){var a=s.split(":");Tn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ze("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Qe.units[r]="px"});Ve.registerPlugin(Eu);var qn=Ve.registerPlugin(Eu)||Ve;qn.core.Tween;const iv={exhibits:[{id:"about",title:"About Me",category:"Personal",position:{x:-8,z:-8},shortDescription:"Who I am and what drives me",content:`
                <h3>Welcome to my Portfolio!</h3>
                <p>I'm a passionate developer who loves creating innovative solutions and engaging experiences. This interactive portfolio represents my journey in technology and design.</p>
                <p>Feel free to explore the different exhibits to learn more about my work, skills, and achievements.</p>
                <div class="contact-info">
                    <p><strong>Email:</strong> your.email@example.com</p>
                    <p><strong>Location:</strong> Your City, Country</p>
                </div>
            `,icon:"👤"},{id:"experience",title:"Work Experience",category:"Professional",position:{x:0,z:-8},shortDescription:"My professional journey",content:`
                <h3>Professional Experience</h3>
                <p>I've worked on various exciting projects across different technologies and domains.</p>
                <div class="experience-item">
                    <h4>Software Developer</h4>
                    <p class="company">Company Name • 2022 - Present</p>
                    <ul>
                        <li>Developed web applications using modern technologies</li>
                        <li>Collaborated with cross-functional teams</li>
                        <li>Implemented best practices and coding standards</li>
                    </ul>
                </div>
                <div class="experience-item">
                    <h4>Junior Developer</h4>
                    <p class="company">Previous Company • 2020 - 2022</p>
                    <ul>
                        <li>Built responsive user interfaces</li>
                        <li>Optimized application performance</li>
                        <li>Participated in code reviews and testing</li>
                    </ul>
                </div>
            `,icon:"💼"},{id:"projects",title:"Projects",category:"Portfolio",position:{x:8,z:-8},shortDescription:"Featured projects and work",content:`
                <h3>Featured Projects</h3>
                <p>Here are some of my most notable projects:</p>
                <div class="project-item">
                    <h4>Interactive Web Application</h4>
                    <p class="tech-stack">React • Node.js • MongoDB</p>
                    <p>A full-stack web application with real-time features and modern UI/UX design.</p>
                    <div class="project-links">
                        <a href="#" target="_blank">Live Demo</a>
                        <a href="#" target="_blank">GitHub</a>
                    </div>
                </div>
                <div class="project-item">
                    <h4>Mobile App</h4>
                    <p class="tech-stack">React Native • Firebase</p>
                    <p>A cross-platform mobile application with offline capabilities and push notifications.</p>
                    <div class="project-links">
                        <a href="#" target="_blank">App Store</a>
                        <a href="#" target="_blank">GitHub</a>
                    </div>
                </div>
                <div class="project-item">
                    <h4>3D Visualization Tool</h4>
                    <p class="tech-stack">Three.js • WebGL • GSAP</p>
                    <p>An interactive 3D visualization tool for data presentation and analysis.</p>
                    <div class="project-links">
                        <a href="#" target="_blank">Live Demo</a>
                        <a href="#" target="_blank">GitHub</a>
                    </div>
                </div>
            `,icon:"🚀"},{id:"skills",title:"Skills & Technologies",category:"Technical",position:{x:-8,z:0},shortDescription:"Technical skills and expertise",content:`
                <h3>Technical Skills</h3>
                <div class="skills-grid">
                    <div class="skill-category">
                        <h4>Frontend Development</h4>
                        <div class="skill-tags">
                            <span class="skill-tag">HTML5</span>
                            <span class="skill-tag">CSS3</span>
                            <span class="skill-tag">JavaScript</span>
                            <span class="skill-tag">React</span>
                            <span class="skill-tag">Vue.js</span>
                            <span class="skill-tag">Three.js</span>
                        </div>
                    </div>
                    <div class="skill-category">
                        <h4>Backend Development</h4>
                        <div class="skill-tags">
                            <span class="skill-tag">Node.js</span>
                            <span class="skill-tag">Python</span>
                            <span class="skill-tag">Express.js</span>
                            <span class="skill-tag">MongoDB</span>
                            <span class="skill-tag">PostgreSQL</span>
                        </div>
                    </div>
                    <div class="skill-category">
                        <h4>Tools & Platforms</h4>
                        <div class="skill-tags">
                            <span class="skill-tag">Git</span>
                            <span class="skill-tag">Docker</span>
                            <span class="skill-tag">AWS</span>
                            <span class="skill-tag">Figma</span>
                            <span class="skill-tag">VS Code</span>
                        </div>
                    </div>
                </div>
            `,icon:"⚡"},{id:"education",title:"Education",category:"Academic",position:{x:0,z:0},shortDescription:"Educational background",content:`
                <h3>Educational Background</h3>
                <div class="education-item">
                    <h4>Bachelor of Computer Science</h4>
                    <p class="institution">University Name • 2018 - 2022</p>
                    <p>Focused on software engineering, algorithms, and web development. Graduated with honors.</p>
                    <ul>
                        <li>GPA: 3.8/4.0</li>
                        <li>Dean's List: 3 semesters</li>
                        <li>Capstone Project: AI-powered recommendation system</li>
                    </ul>
                </div>
                <div class="education-item">
                    <h4>Certifications</h4>
                    <ul>
                        <li>AWS Certified Developer Associate</li>
                        <li>Google Cloud Professional Developer</li>
                        <li>MongoDB Database Administrator</li>
                    </ul>
                </div>
            `,icon:"🎓"},{id:"achievements",title:"Achievements",category:"Recognition",position:{x:8,z:0},shortDescription:"Awards and recognition",content:`
                <h3>Achievements & Recognition</h3>
                <div class="achievement-item">
                    <h4>🏆 Best Developer Award</h4>
                    <p class="year">2023</p>
                    <p>Recognized for outstanding contributions to team projects and innovative solutions.</p>
                </div>
                <div class="achievement-item">
                    <h4>🥇 Hackathon Winner</h4>
                    <p class="year">2022</p>
                    <p>First place in regional hackathon for developing an AI-powered accessibility tool.</p>
                </div>
                <div class="achievement-item">
                    <h4>📈 Performance Excellence</h4>
                    <p class="year">2021</p>
                    <p>Consistently exceeded performance targets and delivered high-quality solutions.</p>
                </div>
            `,icon:"🏆"},{id:"contact",title:"Get In Touch",category:"Connect",position:{x:0,z:18},shortDescription:"Let's work together",content:`
                <h3>Let's Connect!</h3>
                <p>I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and innovation.</p>
                <div class="contact-methods">
                    <div class="contact-method">
                        <h4>📧 Email</h4>
                        <p>your.email@example.com</p>
                    </div>
                    <div class="contact-method">
                        <h4>💼 LinkedIn</h4>
                        <p><a href="https://linkedin.com/in/yourprofile" target="_blank">linkedin.com/in/yourprofile</a></p>
                    </div>
                    <div class="contact-method">
                        <h4>🐙 GitHub</h4>
                        <p><a href="https://github.com/yourusername" target="_blank">github.com/yourusername</a></p>
                    </div>
                </div>
                <div class="resume-download">
                    <h4>📄 Download Resume</h4>
                    <p>Get a detailed overview of my experience and skills.</p>
                    <button class="download-btn" onclick="window.open('Soham_Resume.pdf', '_blank')">Download PDF</button>
                </div>
            `,icon:"📞"}]};class rv{constructor(){this.scene=null,this.camera=null,this.renderer=null,this.cameraContainer=null,this.exhibits=[],this.isLoaded=!1,this.isMobile=window.innerWidth<=768,this.isPointerLocked=!1,this.isExhibitOpen=!1,this.mouse=new Rt,this.raycaster=new Hg,this.direction=new D,this.euler=new Jr(0,0,0),this.bounds=35,this.moveSpeed=this.isMobile?.05:.1,this.rotationX=0,this.rotationY=0,this.keys={},this.shadowMapSize=this.isMobile?512:1024,this.geometrySegments=this.isMobile?6:8,this.threeBodyBodies=[],this.threeBodyTrails=[],this.threeBodyVelocities=[],this.threeBodyMasses=[40,70,120],this.gravityConstant=.7,this.trailLength=1e3,this.trailOpacity=.3,this.boundaryRadius=30,this.boundaryCenter=new D(0,30,0),this.threeBodyRadius=2.5,this.verticalVelocity=0,this.gravity=-4.9,this.jetpackPower=8,this.maxJetpackSpeed=6,this.groundLevel=0,this.loadingStep="Starting...",this.init()}init(){this.setLoadingStep("Setting up scene..."),this.setupScene(),this.setLoadingStep("Setting up camera..."),this.setupCamera(),this.setLoadingStep("Setting up renderer..."),this.setupRenderer(),this.setLoadingStep("Setting up lights..."),this.setupLights(),this.setLoadingStep("Creating field..."),this.createField(),this.setLoadingStep("Creating exhibits..."),this.createExhibits(),this.setLoadingStep("Setting up controls..."),this.setupControls(),this.setLoadingStep("Setting up event listeners..."),this.setupEventListeners(),this.setLoadingStep("Starting animation loop..."),this.animate(),this.setLoadingStep("Simulating loading..."),this.simulateLoading()}setupScene(){this.scene=new Ig,this.scene.background=new Ot(462107),this.scene.fog=new Po(462107,40,120),this.createThreeBodySimulation(),this.stars=[],this.shootingStars=[],this.createStars(300)}setupCamera(){this.camera=new ln(75,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.set(0,2,0),this.cameraContainer=new de,this.cameraContainer.add(this.camera),this.scene.add(this.cameraContainer),this.cameraContainer.position.set(0,0,20)}setupRenderer(){this.renderer=new Sh({canvas:document.getElementById("museum-canvas"),antialias:!this.isMobile,alpha:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.isMobile||(this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Zc),this.renderer.outputColorSpace=xe,this.renderer.domElement.style.filter="grayscale(1)"}setupLights(){const t=new kg(16777215,.7);this.scene.add(t);const e=new Gg(16777215,.8);e.position.set(40,80,40),e.castShadow=!0,e.shadow.mapSize.width=2048,e.shadow.mapSize.height=2048,e.shadow.camera.near=10,e.shadow.camera.far=200,e.shadow.camera.left=-100,e.shadow.camera.right=100,e.shadow.camera.top=100,e.shadow.camera.bottom=-100,this.scene.add(e);const n=new Mn(6,32,32),i=new xn({color:16775090}),s=new $t(n,i);s.position.copy(e.position),this.scene.add(s)}createField(){const t=new yi(80,80),e=new ir({color:9498256,transparent:!0,opacity:.9}),n=new $t(t,e);n.rotation.x=-Math.PI/2,this.isMobile||(n.receiveShadow=!0),this.scene.add(n),this.createWalkingPath(),this.createMinimalDecorations()}createWalkingPath(){const t=new yi(2,35),e=new ir({color:16777215,transparent:!0,opacity:.3}),n=new $t(t,e);n.rotation.x=-Math.PI/2,n.position.y=.01,this.scene.add(n),[{x:-8,z:-15},{x:8,z:-10},{x:-8,z:-5},{x:8,z:0},{x:-8,z:5},{x:8,z:10},{x:0,z:30}].forEach((s,a)=>{const o=new Lo(.5,8),l=new ir({color:6619098,transparent:!0,opacity:.4}),c=new $t(o,l);c.rotation.x=-Math.PI/2,c.position.set(s.x,.02,s.z),this.scene.add(c)})}createMinimalDecorations(){for(let t=0;t<(this.isMobile?4:6);t++){const e=t/(this.isMobile?4:6)*Math.PI*2,n=35,i=Math.cos(e)*n,s=Math.sin(e)*n;this.createSimpleTree(i,s)}for(let t=0;t<(this.isMobile?3:4);t++){const e=(Math.random()-.5)*60,n=15+Math.random()*10,i=(Math.random()-.5)*60;this.createSimpleCloud(e,n,i)}}createSimpleTree(t,e){const n=new Ei,i=new Do(.3,.5,3,this.geometrySegments),s=new ir({color:9127187}),a=new $t(i,s);a.position.y=1.5,this.isMobile||(a.castShadow=!0),n.add(a);const o=new Mn(2,this.geometrySegments,this.geometrySegments),l=new ir({color:2263842}),c=new $t(o,l);c.position.y=4,this.isMobile||(c.castShadow=!0),n.add(c),n.position.set(t,0,e),this.scene.add(n)}createSimpleCloud(t,e,n){const i=new Ei;for(let s=0;s<(this.isMobile?2:3);s++){const a=new Mn(1+Math.random()*.5,this.geometrySegments,this.geometrySegments),o=new xn({color:16777215,transparent:!0,opacity:.8}),l=new $t(a,o);l.position.set((Math.random()-.5)*2,(Math.random()-.5)*1,(Math.random()-.5)*2),i.add(l)}i.position.set(t,e,n),this.scene.add(i)}createThreeBodySimulation(){const t=[16739179,5164484,4569041],e=[new D(-20,30,-20),new D(20,30,20),new D(0,30,-40)],n=[new D(2,0,2),new D(-1.5,0,-2),new D(0,0,2.5)];for(let i=0;i<3;i++){const s=new Mn(this.threeBodyRadius,24,24),a=new Rc({color:t[i],metalness:.3,roughness:.7}),o=new $t(s,a);o.position.copy(e[i]),o.castShadow=!0,o.receiveShadow=!0,this.scene.add(o),this.threeBodyBodies.push(o);const l=new He,c=new ro({color:t[i],transparent:!0,opacity:this.trailOpacity}),h=new wc(l,c);this.scene.add(h),this.threeBodyTrails.push(h),this.threeBodyVelocities.push(n[i])}}updateThreeBodySimulation(){if(this.threeBodyBodies.length===0)return;const t=.016,e=this.threeBodyBodies.map(o=>o.position.clone()),n=this.threeBodyBodies.map(()=>new D);for(let o=0;o<this.threeBodyBodies.length;o++)for(let l=o+1;l<this.threeBodyBodies.length;l++){const c=e[l].clone().sub(e[o]),h=c.length(),u=this.gravityConstant*this.threeBodyMasses[o]*this.threeBodyMasses[l]/(h*h),f=c.normalize().multiplyScalar(u);n[o].add(f.clone().divideScalar(this.threeBodyMasses[o])),n[l].sub(f.clone().divideScalar(this.threeBodyMasses[l]))}for(let o=0;o<this.threeBodyBodies.length;o++)this.threeBodyVelocities[o].add(n[o].multiplyScalar(t)),this.threeBodyBodies[o].position.add(this.threeBodyVelocities[o].clone().multiplyScalar(t));const i=new Zs,s=new se;this.camera.updateMatrixWorld(),this.camera.matrixWorldInverse.getInverse(this.camera.matrixWorld),s.multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse),i.setFromProjectionMatrix(s);let a=!0;for(let o=0;o<this.threeBodyBodies.length;o++)if(i.intersectsObject(this.threeBodyBodies[o])){a=!1;break}a&&(this.threeBodyBodies.forEach(o=>this.scene.remove(o)),this.threeBodyTrails.forEach(o=>this.scene.remove(o)),this.threeBodyBodies=[],this.threeBodyTrails=[],this.threeBodyVelocities=[],this.spawnRandomThreeBodySystem()),this.updateTrails()}spawnRandomThreeBodySystem(){const t=[16739179,5164484,4569041],e=[],n=[],i=50;for(let s=0;s<3;s++){const a=Math.random()*Math.PI*2,o=Math.acos(2*Math.random()-1),l=i*Math.sin(o)*Math.cos(a),c=30+i*Math.abs(Math.cos(o)),h=i*Math.sin(o)*Math.sin(a);e.push(new D(l,c,h));const u=new D(0,30,0).sub(new D(l,c,h)).normalize();n.push(u.multiplyScalar(2+Math.random()*2))}for(let s=0;s<3;s++){const a=new Mn(this.threeBodyRadius,24,24),o=new Rc({color:t[s],metalness:.3,roughness:.7}),l=new $t(a,o);l.position.copy(e[s]),l.castShadow=!0,l.receiveShadow=!0,this.scene.add(l),this.threeBodyBodies.push(l);const c=new He,h=new ro({color:t[s],transparent:!0,opacity:this.trailOpacity}),u=new wc(c,h);this.scene.add(u),this.threeBodyTrails.push(u),this.threeBodyVelocities.push(n[s])}}updateTrails(){for(let t=0;t<this.threeBodyTrails.length;t++){const e=this.threeBodyTrails[t],n=this.threeBodyBodies[t];let i=e.geometry.attributes.position;if(!i||i.count===0){const a=new Float32Array(this.trailLength*3);for(let o=0;o<this.trailLength;o++)a[o*3]=n.position.x,a[o*3+1]=n.position.y,a[o*3+2]=n.position.z;e.geometry.setAttribute("position",new Je(a,3));return}const s=new Float32Array(this.trailLength*3);for(let a=0;a<this.trailLength-1;a++)s[a*3]=i.getX(a+1),s[a*3+1]=i.getY(a+1),s[a*3+2]=i.getZ(a+1);s[(this.trailLength-1)*3]=n.position.x,s[(this.trailLength-1)*3+1]=n.position.y,s[(this.trailLength-1)*3+2]=n.position.z,e.geometry.setAttribute("position",new Je(s,3)),e.geometry.computeBoundingSphere()}}createExhibits(){const t=[{x:-8,z:-15},{x:8,z:-10},{x:-8,z:-5},{x:8,z:0},{x:-8,z:5},{x:8,z:10},{x:0,z:30}];iv.exhibits.forEach((e,n)=>{this.createExhibit({...e,position:t[n]},n)})}createExhibit(t,e){const n=new Ei,i=new yi(2.5,2),s=new ir({color:16777215,transparent:!0,opacity:.95}),a=new $t(i,s);a.position.set(0,2,0),this.isMobile||(a.castShadow=!0),n.add(a);const o=new yi(2.3,.4),l=new xn({color:6619098}),c=new $t(o,l);c.position.set(0,2.7,.01),n.add(c);const h=new Mn(.3,this.geometrySegments,this.geometrySegments),u=new xn({color:48340}),f=new $t(h,u);f.position.set(0,1.3,.01),n.add(f);const m=new Ui(3.2,.3,2.2),g=new xn({color:6619098,transparent:!0,opacity:.3}),_=new $t(m,g);_.position.set(0,.6,0),n.add(_);const p=new Ui(4,.5,3),d=new xn({color:65535,transparent:!0,opacity:0}),E=new $t(p,d);E.position.set(0,.6,0),n.add(E);const x=document.createElement("canvas");x.width=256,x.height=64;const M=x.getContext("2d");M.fillStyle="#000",M.font="bold 32px Inter, Arial, sans-serif",M.textAlign="center",M.textBaseline="middle",M.clearRect(0,0,x.width,x.height),M.fillText(t.title,x.width/2,x.height/2);const S=new Fg(x),A=new yh({map:S,transparent:!0}),b=new Og(A);b.scale.set(2.5,.6,1),b.position.set(0,3.3,0),n.add(b),n.position.set(t.position.x,0,t.position.z),n.userData={...t,index:e,clickable:!0,hoverGlow:E,isHovered:!1},this.exhibits.push(n),this.scene.add(n),qn.from(n.position,{y:-10,duration:1.5,delay:e*.2,ease:"power2.out"})}setupControls(){document.body.style.cursor="default",document.addEventListener("keydown",n=>this.keys[n.code]=!0),document.addEventListener("keyup",n=>this.keys[n.code]=!1);let t=0;const e=16;document.addEventListener("mousemove",n=>{if(!this.isPointerLocked||this.isExhibitOpen)return;const i=Date.now();i-t<e||(t=i,this.rotationY-=n.movementX*.002,this.rotationX-=n.movementY*.002,this.rotationX=Math.max(-Math.PI/3,Math.min(Math.PI/3,this.rotationX)))}),document.addEventListener("click",n=>{!this.isMobile&&!this.isPointerLocked&&!this.isExhibitOpen&&document.body.requestPointerLock(),this.onMouseClick(n)}),document.addEventListener("pointerlockchange",()=>{this.isPointerLocked=document.pointerLockElement!==null,this.isExhibitOpen||(document.body.style.cursor=this.isPointerLocked?"none":"default")}),this.isMobile&&this.setupMobileControls()}setupMobileControls(){let t=0,e=0,n=0,i=!1;const s=15;document.addEventListener("touchstart",a=>{a.preventDefault(),t=a.touches[0].clientX,e=a.touches[0].clientY,n=Date.now(),i=!1},{passive:!1}),document.addEventListener("touchmove",a=>{if(a.preventDefault(),a.touches.length===1){const o=a.touches[0].clientX,l=a.touches[0].clientY,c=o-t,h=l-e;Math.hypot(c,h)>s&&(i=!0,this.rotationY+=c*.008,this.rotationX-=h*.008,this.rotationX=Math.max(-Math.PI/3,Math.min(Math.PI/3,this.rotationX))),t=o,e=l}},{passive:!1}),document.addEventListener("touchend",a=>{a.preventDefault(),Date.now()-n<300&&!i&&this.handleTableClick(a.changedTouches[0])},{passive:!1})}handleTableClick(t){this.mouse.x=t.clientX/window.innerWidth*2-1,this.mouse.y=-(t.clientY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const e=this.raycaster.intersectObjects(this.exhibits,!0);if(e.length>0){const n=e[0].object.parent;n.userData.clickable&&this.showExhibitInfo(n.userData)}}setupEventListeners(){var e,n,i;let t;window.addEventListener("resize",()=>{clearTimeout(t),t=setTimeout(()=>this.onWindowResize(),100)}),document.addEventListener("keydown",s=>{s.code==="Escape"&&this.toggleMenu()}),(e=document.getElementById("resume-btn"))==null||e.addEventListener("click",()=>{window.open("Soham_Resume.pdf","_blank")}),(n=document.querySelector(".close-btn"))==null||n.addEventListener("click",()=>{this.hideExhibitInfo()}),document.querySelectorAll(".menu-btn[data-section]").forEach(s=>{s.addEventListener("click",a=>{this.navigateToSection(a.target.dataset.section)})}),(i=document.getElementById("start-exploring"))==null||i.addEventListener("click",()=>{const s=document.getElementById("welcome-message");s&&qn.to(s,{opacity:0,duration:.5,ease:"power2.out",onComplete:()=>{s.style.display="none"}})})}onMouseClick(t){let e,n;t.touches?(e=t.changedTouches[0].clientX,n=t.changedTouches[0].clientY):this.isPointerLocked?(e=window.innerWidth/2,n=window.innerHeight/2):(e=t.clientX,n=t.clientY),this.mouse.x=e/window.innerWidth*2-1,this.mouse.y=-(n/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const i=this.raycaster.intersectObjects(this.exhibits,!0);if(i.length>0){const s=i[0].object.parent;s.userData.clickable&&this.showExhibitInfo(s.userData)}}showExhibitInfo(t){document.getElementById("exhibit-title").textContent=t.title,document.getElementById("exhibit-category").textContent=t.category,document.getElementById("exhibit-body").innerHTML=t.content;const e=document.getElementById("exhibit-info");e.classList.remove("hidden"),e.classList.add("fade-in"),this.isExhibitOpen=!0,this.isPointerLocked=!1,document.exitPointerLock(),document.body.style.cursor="default";const n=document.getElementById("crosshair");n&&(n.style.display="none")}hideExhibitInfo(){document.getElementById("exhibit-info").classList.add("hidden"),this.isExhibitOpen=!1,document.body.style.cursor="default";const t=document.getElementById("crosshair");t&&(t.style.display="block")}toggleMenu(){document.getElementById("menu").classList.toggle("hidden")}navigateToSection(t){const e=this.exhibits.find(n=>n.userData.id===t);e&&(qn.to(this.cameraContainer.position,{x:e.position.x,z:e.position.z+5,duration:2,ease:"power2.inOut"}),this.toggleMenu())}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.isMobile=window.innerWidth<=768}simulateLoading(){const t=document.querySelector(".loading-progress"),e=document.getElementById("loading-screen");this.setLoadingStep("Finalizing..."),qn.to(t,{width:"100%",duration:2,ease:"power2.inOut",onComplete:()=>{qn.to(e,{opacity:0,duration:.5,onComplete:()=>{e.style.display="none",this.isLoaded=!0}})}})}updateControls(){if(!this.isLoaded)return;this.cameraContainer.rotation.set(0,0,0),this.cameraContainer.rotateY(this.rotationY),this.camera.rotation.x=this.rotationX,this.direction.set(0,0,0),this.keys.KeyW&&(this.direction.z-=1),this.keys.KeyS&&(this.direction.z+=1),this.keys.KeyA&&(this.direction.x-=1),this.keys.KeyD&&(this.direction.x+=1),this.direction.lengthSq()>0&&(this.direction.normalize(),this.direction.applyEuler(this.euler.set(0,this.rotationY,0)),this.cameraContainer.position.add(this.direction.multiplyScalar(this.moveSpeed)),this.cameraContainer.position.x=Math.max(-this.bounds,Math.min(this.bounds,this.cameraContainer.position.x)),this.cameraContainer.position.z=Math.max(-this.bounds,Math.min(this.bounds,this.cameraContainer.position.z)));const t=1/60;this.keys.Space?(this.verticalVelocity+=this.jetpackPower*t,this.verticalVelocity>this.maxJetpackSpeed&&(this.verticalVelocity=this.maxJetpackSpeed)):this.verticalVelocity+=this.gravity*t,this.cameraContainer.position.y+=this.verticalVelocity*t,this.cameraContainer.position.y<this.groundLevel&&(this.cameraContainer.position.y=this.groundLevel,this.verticalVelocity=0)}updateHoverDetection(){if(this.isExhibitOpen||!this.isPointerLocked)return;this.mouse.x=0,this.mouse.y=0,this.raycaster.setFromCamera(this.mouse,this.camera);const t=this.raycaster.intersectObjects(this.exhibits,!0);if(this.exhibits.forEach(e=>{e.userData.hoverGlow&&e.userData.isHovered&&(e.userData.isHovered=!1,qn.to(e.userData.hoverGlow.material,{opacity:0,duration:.3,ease:"power2.out"}))}),t.length>0){const e=t[0].object.parent;e.userData.hoverGlow&&!e.userData.isHovered&&(e.userData.isHovered=!0,qn.to(e.userData.hoverGlow.material,{opacity:.6,duration:.3,ease:"power2.out"}))}}animate(){if(requestAnimationFrame(()=>this.animate()),this.updateControls(),this.updateThreeBodySimulation(),this.updateStarsAndShootingStars(),this.isLoaded){const t=Date.now()*.001;this.exhibits.forEach((e,n)=>{const i=n*.5;e.rotation.y=Math.sin(t+i)*.05,e.position.y=Math.sin(t*2+i)*.1}),this.updateHoverDetection()}this.renderer.render(this.scene,this.camera)}createStars(t){this.stars.length>0&&(this.stars.forEach(e=>this.scene.remove(e)),this.stars=[]);for(let e=0;e<t;e++){const n=new Mn(Math.random()*.08+.04,6,6),i=new xn({color:16777215}),s=new $t(n,i),a=80+Math.random()*40,o=Math.random()*Math.PI*2,l=Math.random()*Math.PI*.6;s.position.set(a*Math.sin(l)*Math.cos(o),a*Math.cos(l)+20,a*Math.sin(l)*Math.sin(o)),s.material.opacity=.7+Math.random()*.3,s.material.transparent=!0,this.scene.add(s),this.stars.push(s)}}maybeSpawnShootingStar(){if(Math.random()<.01&&this.shootingStars.length<2){const t=new Mn(.12,8,8),e=new xn({color:16777215}),n=new $t(t,e),i=100,s=Math.random()*Math.PI*2,a=Math.random()*Math.PI*.5;n.position.set(i*Math.sin(a)*Math.cos(s),i*Math.cos(a)+30,i*Math.sin(a)*Math.sin(s));const o=s+(Math.random()-.5)*Math.PI*.5,l=a+(Math.random()-.2)*.3,c=2+Math.random()*2;n.userData.velocity=new D(c*(Math.sin(l)*Math.cos(o)-Math.sin(a)*Math.cos(s)),c*(Math.cos(l)-Math.cos(a)),c*(Math.sin(l)*Math.sin(o)-Math.sin(a)*Math.sin(s))),n.userData.life=0,this.scene.add(n),this.shootingStars.push(n)}}updateStarsAndShootingStars(){for(let t=0;t<this.stars.length;t++)Math.random()<.1&&(this.stars[t].material.opacity=.5+Math.random()*.5);for(let t=this.shootingStars.length-1;t>=0;t--){const e=this.shootingStars[t];e.position.add(e.userData.velocity),e.userData.life+=1,e.material.opacity=Math.max(0,1-e.userData.life/40),e.userData.life>40&&(this.scene.remove(e),this.shootingStars.splice(t,1))}this.maybeSpawnShootingStar()}setLoadingStep(t){this.loadingStep=t;const e=document.querySelector("#loading-screen .loading-content p");e&&(e.textContent=t)}}new rv;
