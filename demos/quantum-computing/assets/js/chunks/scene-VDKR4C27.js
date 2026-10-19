import"./chunk-IHRIUEAN.js";var sh=0,Rl=1,rh=2;var hr=1,oh=2,vs=3,Si=0,Ye=1,En=2,qn=0,ys=1,Tn=2,Cl=3,Pl=4,ah=5;var zi=100,lh=101,ch=102,hh=103,uh=104,fh=200,dh=201,ph=202,mh=203,Il=204,Ll=205,gh=206,xh=207,_h=208,vh=209,yh=210,Mh=211,Sh=212,bh=213,Eh=214,io=0,so=1,ro=2,hs=3,oo=4,ao=5,lo=6,co=7,Dl=0,Th=1,wh=2,xn=0,Nl=1,Ul=2,Fl=3,Ol=4,Bl=5,zl=6,Hl=7;var Vl=300,bi=301,Hi=302,Wo=303,Xo=304,ur=306,ho=1e3,Mn=1001,uo=1002,ke=1003,Ah=1004;var fr=1005;var Pe=1006,qo=1007;var Yn=1008;var cn=1009,kl=1010,Gl=1011,Ms=1012,Yo=1013,Bn=1014,wn=1015,We=1016,Zo=1017,Jo=1018,Ss=1020,Wl=35902,Xl=35899,ql=1021,Yl=1022,An=1023,kn=1026,Ei=1027,$o=1028,Ko=1029,Ti=1030,jo=1031;var Qo=1033,dr=33776,pr=33777,mr=33778,gr=33779,ta=35840,ea=35841,na=35842,ia=35843,sa=36196,ra=37492,oa=37496,aa=37488,la=37489,xr=37490,ca=37491,ha=37808,ua=37809,fa=37810,da=37811,pa=37812,ma=37813,ga=37814,xa=37815,_a=37816,va=37817,ya=37818,Ma=37819,Sa=37820,ba=37821,Ea=36492,Ta=36494,wa=36495,Aa=36283,Ra=36284,_r=36285,Ca=36286;var Gs=2300,fo=2301,eo=2302,yl=2303,Ml=2400,Sl=2401,bl=2402;var Rh=3200;var Pa=0,Ch=1,zn="",Xe="srgb",Ws="srgb-linear",Xs="linear",Me="srgb";var no=7680;var Ph=519,Ih=512,Lh=513,Dh=514,Ia=515,Nh=516,Uh=517,La=518,Fh=519,Oh=35044;var Zl="300 es",Fn=2e3,us=2001;function Qu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function tf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function qs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Bh(){let i=qs("canvas");return i.style.display="block",i}var Pc={},fs=null;function Jl(...i){let t="THREE."+i.shift();fs?fs("log",t,...i):console.log(t,...i)}function zh(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function $t(...i){i=zh(i);let t="THREE."+i.shift();if(fs)fs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Kt(...i){i=zh(i);let t="THREE."+i.shift();if(fs)fs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ni(...i){let t=i.join(" ");t in Pc||(Pc[t]=!0,$t(...i))}function Hh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Vh={[io]:so,[ro]:lo,[oo]:co,[hs]:ao,[so]:io,[lo]:ro,[co]:oo,[ao]:hs},Gn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Za=Math.PI/180,po=180/Math.PI;function vr(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Je[i&255]+Je[i>>8&255]+Je[i>>16&255]+Je[i>>24&255]+"-"+Je[t&255]+Je[t>>8&255]+"-"+Je[t>>16&15|64]+Je[t>>24&255]+"-"+Je[e&63|128]+Je[e>>8&255]+"-"+Je[e>>16&255]+Je[e>>24&255]+Je[n&255]+Je[n>>8&255]+Je[n>>16&255]+Je[n>>24&255]).toLowerCase()}function le(i,t,e){return Math.max(t,Math.min(e,i))}function ef(i,t){return(i%t+t)%t}function Ja(i,t,e){return(1-e)*i+e*t}function Ns(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ln(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ec=class ec{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ec.prototype.isVector2=!0;var Lt=ec,nn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],f=n[s+3],u=r[o+0],p=r[o+1],x=r[o+2],y=r[o+3];if(f!==y||c!==u||l!==p||h!==x){let m=c*u+l*p+h*x+f*y;m<0&&(u=-u,p=-p,x=-x,y=-y,m=-m);let d=1-a;if(m<.9995){let E=Math.acos(m),A=Math.sin(E);d=Math.sin(d*E)/A,a=Math.sin(a*E)/A,c=c*d+u*a,l=l*d+p*a,h=h*d+x*a,f=f*d+y*a}else{c=c*d+u*a,l=l*d+p*a,h=h*d+x*a,f=f*d+y*a;let E=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=E,l*=E,h*=E,f*=E}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],f=r[o],u=r[o+1],p=r[o+2],x=r[o+3];return t[e]=a*x+h*f+c*p-l*u,t[e+1]=c*x+h*u+l*f-a*p,t[e+2]=l*x+h*p+a*u-c*f,t[e+3]=h*x-a*f-c*u-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),f=a(r/2),u=c(n/2),p=c(s/2),x=c(r/2);switch(o){case"XYZ":this._x=u*h*f+l*p*x,this._y=l*p*f-u*h*x,this._z=l*h*x+u*p*f,this._w=l*h*f-u*p*x;break;case"YXZ":this._x=u*h*f+l*p*x,this._y=l*p*f-u*h*x,this._z=l*h*x-u*p*f,this._w=l*h*f+u*p*x;break;case"ZXY":this._x=u*h*f-l*p*x,this._y=l*p*f+u*h*x,this._z=l*h*x+u*p*f,this._w=l*h*f-u*p*x;break;case"ZYX":this._x=u*h*f-l*p*x,this._y=l*p*f+u*h*x,this._z=l*h*x-u*p*f,this._w=l*h*f+u*p*x;break;case"YZX":this._x=u*h*f+l*p*x,this._y=l*p*f+u*h*x,this._z=l*h*x-u*p*f,this._w=l*h*f-u*p*x;break;case"XZY":this._x=u*h*f-l*p*x,this._y=l*p*f-u*h*x,this._z=l*h*x+u*p*f,this._w=l*h*f+u*p*x;break;default:$t("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],f=e[10],u=n+a+f;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>f){let p=2*Math.sqrt(1+n-a-f);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>f){let p=2*Math.sqrt(1+a-n-f);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+f-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(le(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},nc=class nc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ic.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ic.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+c*l+o*f-a*h,this.y=n+c*h+a*l-r*f,this.z=s+c*f+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return $a.copy(this).projectOnVector(t),this.sub($a)}reflect(t){return this.sub($a.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};nc.prototype.isVector3=!0;var C=nc,$a=new C,Ic=new nn,ic=class ic{constructor(t,e,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],f=n[7],u=n[2],p=n[5],x=n[8],y=s[0],m=s[3],d=s[6],E=s[1],A=s[4],v=s[7],S=s[2],M=s[5],R=s[8];return r[0]=o*y+a*E+c*S,r[3]=o*m+a*A+c*M,r[6]=o*d+a*v+c*R,r[1]=l*y+h*E+f*S,r[4]=l*m+h*A+f*M,r[7]=l*d+h*v+f*R,r[2]=u*y+p*E+x*S,r[5]=u*m+p*A+x*M,r[8]=u*d+p*v+x*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],f=h*o-a*l,u=a*c-h*r,p=l*r-o*c,x=e*f+n*u+s*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/x;return t[0]=f*y,t[1]=(s*l-h*n)*y,t[2]=(a*n-s*o)*y,t[3]=u*y,t[4]=(h*e-s*c)*y,t[5]=(s*r-a*e)*y,t[6]=p*y,t[7]=(n*c-l*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return Ni("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ka.makeScale(t,e)),this}rotate(t){return Ni("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ka.makeRotation(-t)),this}translate(t,e){return Ni("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ka.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};ic.prototype.isMatrix3=!0;var ee=ic,Ka=new ee,Lc=new ee().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dc=new ee().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nf(){let i={enabled:!0,workingColorSpace:Ws,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Me&&(s.r=ni(s.r),s.g=ni(s.g),s.b=ni(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Me&&(s.r=cs(s.r),s.g=cs(s.g),s.b=cs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===zn?Xs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ni("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ni("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ws]:{primaries:t,whitePoint:n,transfer:Xs,toXYZ:Lc,fromXYZ:Dc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Xe},outputColorSpaceConfig:{drawingBufferColorSpace:Xe}},[Xe]:{primaries:t,whitePoint:n,transfer:Me,toXYZ:Lc,fromXYZ:Dc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Xe}}}),i}var he=nf();function ni(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function cs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ji,mo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ji===void 0&&(Ji=qs("canvas")),Ji.width=t.width,Ji.height=t.height;let s=Ji.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ji}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=qs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ni(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ni(e[n]/255)*255):e[n]=ni(e[n]);return{data:e,width:t.width,height:t.height}}else return $t("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},sf=0,ds=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=vr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ja(s[o].image)):r.push(ja(s[o]))}else r=ja(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ja(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?mo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:($t("Texture: Unable to serialize Texture."),{})}var rf=0,Qa=new C,sn=class i extends Gn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Mn,s=Mn,r=Pe,o=Yn,a=An,c=cn,l=i.DEFAULT_ANISOTROPY,h=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=vr(),this.name="",this.source=new ds(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Qa).x}get height(){return this.source.getSize(Qa).y}get depth(){return this.source.getSize(Qa).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){$t(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){$t(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ho:t.x=t.x-Math.floor(t.x);break;case Mn:t.x=t.x<0?0:1;break;case uo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ho:t.y=t.y-Math.floor(t.y);break;case Mn:t.y=t.y<0?0:1;break;case uo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=Vl;sn.DEFAULT_ANISOTROPY=1;var sc=class sc{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],f=c[8],u=c[1],p=c[5],x=c[9],y=c[2],m=c[6],d=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-y)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+y)<.1&&Math.abs(x+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(l+1)/2,v=(p+1)/2,S=(d+1)/2,M=(h+u)/4,R=(f+y)/4,g=(x+m)/4;return A>v&&A>S?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=M/n,r=R/n):v>S?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=M/s,r=g/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=R/r,s=g/r),this.set(n,s,r,e),this}let E=Math.sqrt((m-x)*(m-x)+(f-y)*(f-y)+(u-h)*(u-h));return Math.abs(E)<.001&&(E=1),this.x=(m-x)/E,this.y=(f-y)/E,this.z=(u-h)/E,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this.w=le(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this.w=le(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};sc.prototype.isVector4=!0;var Te=sc,go=class extends Gn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Te(0,0,t,e),this.scissorTest=!1,this.viewport=new Te(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new sn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Pe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ds(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fe=class extends go{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ys=class extends sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var xo=class extends sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Go=class Go{constructor(t,e,n,s,r,o,a,c,l,h,f,u,p,x,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,f,u,p,x,y,m)}set(t,e,n,s,r,o,a,c,l,h,f,u,p,x,y,m){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=h,d[10]=f,d[14]=u,d[3]=p,d[7]=x,d[11]=y,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Go().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/$i.setFromMatrixColumn(t,0).length(),r=1/$i.setFromMatrixColumn(t,1).length(),o=1/$i.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=o*h,p=o*f,x=a*h,y=a*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=p+x*l,e[5]=u-y*l,e[9]=-a*c,e[2]=y-u*l,e[6]=x+p*l,e[10]=o*c}else if(t.order==="YXZ"){let u=c*h,p=c*f,x=l*h,y=l*f;e[0]=u+y*a,e[4]=x*a-p,e[8]=o*l,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=p*a-x,e[6]=y+u*a,e[10]=o*c}else if(t.order==="ZXY"){let u=c*h,p=c*f,x=l*h,y=l*f;e[0]=u-y*a,e[4]=-o*f,e[8]=x+p*a,e[1]=p+x*a,e[5]=o*h,e[9]=y-u*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let u=o*h,p=o*f,x=a*h,y=a*f;e[0]=c*h,e[4]=x*l-p,e[8]=u*l+y,e[1]=c*f,e[5]=y*l+u,e[9]=p*l-x,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let u=o*c,p=o*l,x=a*c,y=a*l;e[0]=c*h,e[4]=y-u*f,e[8]=x*f+p,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*f+x,e[10]=u-y*f}else if(t.order==="XZY"){let u=o*c,p=o*l,x=a*c,y=a*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=u*f+y,e[5]=o*h,e[9]=p*f-x,e[2]=x*f-p,e[6]=a*h,e[10]=y*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(of,t,af)}lookAt(t,e,n){let s=this.elements;return fn.subVectors(t,e),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),ui.crossVectors(n,fn),ui.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),ui.crossVectors(n,fn)),ui.normalize(),Dr.crossVectors(fn,ui),s[0]=ui.x,s[4]=Dr.x,s[8]=fn.x,s[1]=ui.y,s[5]=Dr.y,s[9]=fn.y,s[2]=ui.z,s[6]=Dr.z,s[10]=fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],f=n[5],u=n[9],p=n[13],x=n[2],y=n[6],m=n[10],d=n[14],E=n[3],A=n[7],v=n[11],S=n[15],M=s[0],R=s[4],g=s[8],T=s[12],P=s[1],D=s[5],F=s[9],H=s[13],U=s[2],G=s[6],W=s[10],X=s[14],ot=s[3],Q=s[7],it=s[11],at=s[15];return r[0]=o*M+a*P+c*U+l*ot,r[4]=o*R+a*D+c*G+l*Q,r[8]=o*g+a*F+c*W+l*it,r[12]=o*T+a*H+c*X+l*at,r[1]=h*M+f*P+u*U+p*ot,r[5]=h*R+f*D+u*G+p*Q,r[9]=h*g+f*F+u*W+p*it,r[13]=h*T+f*H+u*X+p*at,r[2]=x*M+y*P+m*U+d*ot,r[6]=x*R+y*D+m*G+d*Q,r[10]=x*g+y*F+m*W+d*it,r[14]=x*T+y*H+m*X+d*at,r[3]=E*M+A*P+v*U+S*ot,r[7]=E*R+A*D+v*G+S*Q,r[11]=E*g+A*F+v*W+S*it,r[15]=E*T+A*H+v*X+S*at,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],f=t[6],u=t[10],p=t[14],x=t[3],y=t[7],m=t[11],d=t[15],E=c*p-l*u,A=a*p-l*f,v=a*u-c*f,S=o*p-l*h,M=o*u-c*h,R=o*f-a*h;return e*(y*E-m*A+d*v)-n*(x*E-m*S+d*M)+s*(x*A-y*S+d*R)-r*(x*v-y*M+m*R)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],h=t[10];return e*(o*h-a*l)-n*(r*h-a*c)+s*(r*l-o*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],f=t[9],u=t[10],p=t[11],x=t[12],y=t[13],m=t[14],d=t[15],E=e*a-n*o,A=e*c-s*o,v=e*l-r*o,S=n*c-s*a,M=n*l-r*a,R=s*l-r*c,g=h*y-f*x,T=h*m-u*x,P=h*d-p*x,D=f*m-u*y,F=f*d-p*y,H=u*d-p*m,U=E*H-A*F+v*D+S*P-M*T+R*g;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/U;return t[0]=(a*H-c*F+l*D)*G,t[1]=(s*F-n*H-r*D)*G,t[2]=(y*R-m*M+d*S)*G,t[3]=(u*M-f*R-p*S)*G,t[4]=(c*P-o*H-l*T)*G,t[5]=(e*H-s*P+r*T)*G,t[6]=(m*v-x*R-d*A)*G,t[7]=(h*R-u*v+p*A)*G,t[8]=(o*F-a*P+l*g)*G,t[9]=(n*P-e*F-r*g)*G,t[10]=(x*M-y*v+d*E)*G,t[11]=(f*v-h*M-p*E)*G,t[12]=(a*T-o*D-c*g)*G,t[13]=(e*D-n*T+s*g)*G,t[14]=(y*A-x*S-m*E)*G,t[15]=(h*S-f*A+u*E)*G,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,f=a+a,u=r*l,p=r*h,x=r*f,y=o*h,m=o*f,d=a*f,E=c*l,A=c*h,v=c*f,S=n.x,M=n.y,R=n.z;return s[0]=(1-(y+d))*S,s[1]=(p+v)*S,s[2]=(x-A)*S,s[3]=0,s[4]=(p-v)*M,s[5]=(1-(u+d))*M,s[6]=(m+E)*M,s[7]=0,s[8]=(x+A)*R,s[9]=(m-E)*R,s[10]=(1-(u+y))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=$i.set(s[0],s[1],s[2]).length(),a=$i.set(s[4],s[5],s[6]).length(),c=$i.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Ln.copy(this);let l=1/o,h=1/a,f=1/c;return Ln.elements[0]*=l,Ln.elements[1]*=l,Ln.elements[2]*=l,Ln.elements[4]*=h,Ln.elements[5]*=h,Ln.elements[6]*=h,Ln.elements[8]*=f,Ln.elements[9]*=f,Ln.elements[10]*=f,e.setFromRotationMatrix(Ln),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,s,r,o,a=Fn,c=!1){let l=this.elements,h=2*r/(e-t),f=2*r/(n-s),u=(e+t)/(e-t),p=(n+s)/(n-s),x,y;if(c)x=r/(o-r),y=o*r/(o-r);else if(a===Fn)x=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===us)x=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Fn,c=!1){let l=this.elements,h=2/(e-t),f=2/(n-s),u=-(e+t)/(e-t),p=-(n+s)/(n-s),x,y;if(c)x=1/(o-r),y=o/(o-r);else if(a===Fn)x=-2/(o-r),y=-(o+r)/(o-r);else if(a===us)x=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=f,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=x,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Go.prototype.isMatrix4=!0;var Qt=Go,$i=new C,Ln=new Qt,of=new C(0,0,0),af=new C(1,1,1),ui=new C,Dr=new C,fn=new C,Nc=new Qt,Uc=new nn,Sn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],f=s[2],u=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(le(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-le(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(le(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:$t("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Nc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Nc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Uc.setFromEuler(this),this.setFromQuaternion(Uc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Sn.DEFAULT_ORDER="XYZ";var Zs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},lf=0,Fc=new C,Ki=new nn,Kn=new Qt,Nr=new C,Us=new C,cf=new C,hf=new nn,Oc=new C(1,0,0),Bc=new C(0,1,0),zc=new C(0,0,1),Hc={type:"added"},uf={type:"removed"},ji={type:"childadded",child:null},tl={type:"childremoved",child:null},je=class i extends Gn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=vr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new C,e=new Sn,n=new nn,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Qt},normalMatrix:{value:new ee}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ki.setFromAxisAngle(t,e),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(t,e){return Ki.setFromAxisAngle(t,e),this.quaternion.premultiply(Ki),this}rotateX(t){return this.rotateOnAxis(Oc,t)}rotateY(t){return this.rotateOnAxis(Bc,t)}rotateZ(t){return this.rotateOnAxis(zc,t)}translateOnAxis(t,e){return Fc.copy(t).applyQuaternion(this.quaternion),this.position.add(Fc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Oc,t)}translateY(t){return this.translateOnAxis(Bc,t)}translateZ(t){return this.translateOnAxis(zc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Nr.copy(t):Nr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(Us,Nr,this.up):Kn.lookAt(Nr,Us,this.up),this.quaternion.setFromRotationMatrix(Kn),s&&(Kn.extractRotation(s.matrixWorld),Ki.setFromRotationMatrix(Kn),this.quaternion.premultiply(Ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Kt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Hc),ji.child=t,this.dispatchEvent(ji),ji.child=null):Kt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(uf),tl.child=t,this.dispatchEvent(tl),tl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Hc),ji.child=t,this.dispatchEvent(ji),ji.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,t,cf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,hf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),f=o(t.shapes),u=o(t.skeletons),p=o(t.animations),x=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};je.DEFAULT_UP=new C(0,1,0);je.DEFAULT_MATRIX_AUTO_UPDATE=!0;je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var pn=class extends je{constructor(){super(),this.isGroup=!0,this.type="Group"}},ff={type:"move"},ps=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,n),d=this._getHandJoint(l,y);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),p=.02,x=.005;l.inputState.pinching&&u>p+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=p-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ff)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new pn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},kh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},Ur={h:0,s:0,l:0};function el(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var qt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=he.workingColorSpace){if(t=ef(t,1),e=le(e,0,1),n=le(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=el(o,r,t+1/3),this.g=el(o,r,t),this.b=el(o,r,t-1/3)}return he.colorSpaceToWorking(this,s),this}setStyle(t,e=Xe){function n(r){r!==void 0&&parseFloat(r)<1&&$t("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:$t("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);$t("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Xe){let n=kh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):$t("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ni(t.r),this.g=ni(t.g),this.b=ni(t.b),this}copyLinearToSRGB(t){return this.r=cs(t.r),this.g=cs(t.g),this.b=cs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xe){return he.workingToColorSpace($e.copy(this),t),Math.round(le($e.r*255,0,255))*65536+Math.round(le($e.g*255,0,255))*256+Math.round(le($e.b*255,0,255))}getHexString(t=Xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.workingToColorSpace($e.copy(this),e);let n=$e.r,s=$e.g,r=$e.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let f=o-a;switch(l=h<=.5?f/(o+a):f/(2-o-a),o){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=he.workingColorSpace){return he.workingToColorSpace($e.copy(this),e),t.r=$e.r,t.g=$e.g,t.b=$e.b,t}getStyle(t=Xe){he.workingToColorSpace($e.copy(this),t);let e=$e.r,n=$e.g,s=$e.b;return t!==Xe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(fi),this.setHSL(fi.h+t,fi.s+e,fi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(fi),t.getHSL(Ur);let n=Ja(fi.h,Ur.h,e),s=Ja(fi.s,Ur.s,e),r=Ja(fi.l,Ur.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$e=new qt;qt.NAMES=kh;var Js=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new qt(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ui=class extends je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Dn=new C,jn=new C,nl=new C,Qn=new C,Qi=new C,ts=new C,Vc=new C,il=new C,sl=new C,rl=new C,ol=new Te,al=new Te,ll=new Te,gi=class i{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Dn.subVectors(t,e),s.cross(Dn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Dn.subVectors(s,e),jn.subVectors(n,e),nl.subVectors(t,e);let o=Dn.dot(Dn),a=Dn.dot(jn),c=Dn.dot(nl),l=jn.dot(jn),h=jn.dot(nl),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;let u=1/f,p=(l*c-a*h)*u,x=(o*h-a*c)*u;return r.set(1-p-x,x,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Qn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Qn.x),c.addScaledVector(o,Qn.y),c.addScaledVector(a,Qn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return ol.setScalar(0),al.setScalar(0),ll.setScalar(0),ol.fromBufferAttribute(t,e),al.fromBufferAttribute(t,n),ll.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ol,r.x),o.addScaledVector(al,r.y),o.addScaledVector(ll,r.z),o}static isFrontFacing(t,e,n,s){return Dn.subVectors(n,e),jn.subVectors(t,e),Dn.cross(jn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Dn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),Dn.cross(jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Qi.subVectors(s,n),ts.subVectors(r,n),il.subVectors(t,n);let c=Qi.dot(il),l=ts.dot(il);if(c<=0&&l<=0)return e.copy(n);sl.subVectors(t,s);let h=Qi.dot(sl),f=ts.dot(sl);if(h>=0&&f<=h)return e.copy(s);let u=c*f-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Qi,o);rl.subVectors(t,r);let p=Qi.dot(rl),x=ts.dot(rl);if(x>=0&&p<=x)return e.copy(r);let y=p*l-c*x;if(y<=0&&l>=0&&x<=0)return a=l/(l-x),e.copy(n).addScaledVector(ts,a);let m=h*x-p*f;if(m<=0&&f-h>=0&&p-x>=0)return Vc.subVectors(r,s),a=(f-h)/(f-h+(p-x)),e.copy(s).addScaledVector(Vc,a);let d=1/(m+y+u);return o=y*d,a=u*d,e.copy(n).addScaledVector(Qi,o).addScaledVector(ts,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Wn=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Nn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Nn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Nn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Nn):Nn.fromBufferAttribute(r,o),Nn.applyMatrix4(t.matrixWorld),this.expandByPoint(Nn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fr.copy(n.boundingBox)),Fr.applyMatrix4(t.matrixWorld),this.union(Fr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Nn),Nn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fs),Or.subVectors(this.max,Fs),es.subVectors(t.a,Fs),ns.subVectors(t.b,Fs),is.subVectors(t.c,Fs),di.subVectors(ns,es),pi.subVectors(is,ns),Pi.subVectors(es,is);let e=[0,-di.z,di.y,0,-pi.z,pi.y,0,-Pi.z,Pi.y,di.z,0,-di.x,pi.z,0,-pi.x,Pi.z,0,-Pi.x,-di.y,di.x,0,-pi.y,pi.x,0,-Pi.y,Pi.x,0];return!cl(e,es,ns,is,Or)||(e=[1,0,0,0,1,0,0,0,1],!cl(e,es,ns,is,Or))?!1:(Br.crossVectors(di,pi),e=[Br.x,Br.y,Br.z],cl(e,es,ns,is,Or))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Nn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Nn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ti=[new C,new C,new C,new C,new C,new C,new C,new C],Nn=new C,Fr=new Wn,es=new C,ns=new C,is=new C,di=new C,pi=new C,Pi=new C,Fs=new C,Or=new C,Br=new C,Ii=new C;function cl(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ii.fromArray(i,r);let a=s.x*Math.abs(Ii.x)+s.y*Math.abs(Ii.y)+s.z*Math.abs(Ii.z),c=t.dot(Ii),l=e.dot(Ii),h=n.dot(Ii);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Be=new C,zr=new Lt,df=0,be=class extends Gn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:df++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Oh,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)zr.fromBufferAttribute(this,e),zr.applyMatrix3(t),this.setXY(e,zr.x,zr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix3(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ns(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ln(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ns(e,this.array)),e}setX(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ns(e,this.array)),e}setY(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ns(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ns(e,this.array)),e}setW(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array),s=ln(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array),s=ln(s,this.array),r=ln(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var $s=class extends be{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ks=class extends be{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var de=class extends be{constructor(t,e,n){super(new Float32Array(t),e,n)}},pf=new Wn,Os=new C,hl=new C,ii=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):pf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Os.subVectors(t,this.center);let e=Os.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Os,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(hl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Os.copy(t.center).add(hl)),this.expandByPoint(Os.copy(t.center).sub(hl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},mf=0,yn=new Qt,ul=new je,ss=new C,dn=new Wn,Bs=new Wn,Ve=new C,we=class i extends Gn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=vr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Qu(t)?Ks:$s)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ee().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return yn.makeRotationFromQuaternion(t),this.applyMatrix4(yn),this}rotateX(t){return yn.makeRotationX(t),this.applyMatrix4(yn),this}rotateY(t){return yn.makeRotationY(t),this.applyMatrix4(yn),this}rotateZ(t){return yn.makeRotationZ(t),this.applyMatrix4(yn),this}translate(t,e,n){return yn.makeTranslation(t,e,n),this.applyMatrix4(yn),this}scale(t,e,n){return yn.makeScale(t,e,n),this.applyMatrix4(yn),this}lookAt(t){return ul.lookAt(t),ul.updateMatrix(),this.applyMatrix4(ul.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new de(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&$t("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ii);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let n=this.boundingSphere.center;if(dn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Bs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ve.addVectors(dn.min,Bs.min),dn.expandByPoint(Ve),Ve.addVectors(dn.max,Bs.max),dn.expandByPoint(Ve)):(dn.expandByPoint(Bs.min),dn.expandByPoint(Bs.max))}dn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ve.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ve));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ve.fromBufferAttribute(a,l),c&&(ss.fromBufferAttribute(t,l),Ve.add(ss)),s=Math.max(s,n.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new be(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let g=0;g<n.count;g++)a[g]=new C,c[g]=new C;let l=new C,h=new C,f=new C,u=new Lt,p=new Lt,x=new Lt,y=new C,m=new C;function d(g,T,P){l.fromBufferAttribute(n,g),h.fromBufferAttribute(n,T),f.fromBufferAttribute(n,P),u.fromBufferAttribute(r,g),p.fromBufferAttribute(r,T),x.fromBufferAttribute(r,P),h.sub(l),f.sub(l),p.sub(u),x.sub(u);let D=1/(p.x*x.y-x.x*p.y);isFinite(D)&&(y.copy(h).multiplyScalar(x.y).addScaledVector(f,-p.y).multiplyScalar(D),m.copy(f).multiplyScalar(p.x).addScaledVector(h,-x.x).multiplyScalar(D),a[g].add(y),a[T].add(y),a[P].add(y),c[g].add(m),c[T].add(m),c[P].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let g=0,T=E.length;g<T;++g){let P=E[g],D=P.start,F=P.count;for(let H=D,U=D+F;H<U;H+=3)d(t.getX(H+0),t.getX(H+1),t.getX(H+2))}let A=new C,v=new C,S=new C,M=new C;function R(g){S.fromBufferAttribute(s,g),M.copy(S);let T=a[g];A.copy(T),A.sub(S.multiplyScalar(S.dot(T))).normalize(),v.crossVectors(M,T);let D=v.dot(c[g])<0?-1:1;o.setXYZW(g,A.x,A.y,A.z,D)}for(let g=0,T=E.length;g<T;++g){let P=E[g],D=P.start,F=P.count;for(let H=D,U=D+F;H<U;H+=3)R(t.getX(H+0)),R(t.getX(H+1)),R(t.getX(H+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let s=new C,r=new C,o=new C,a=new C,c=new C,l=new C,h=new C,f=new C;if(t)for(let u=0,p=t.count;u<p;u+=3){let x=t.getX(u+0),y=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,m),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(n,x),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,p=e.count;u<p;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,f=a.normalized,u=new l.constructor(c.length*h),p=0,x=0;for(let y=0,m=c.length;y<m;y++){a.isInterleavedBufferAttribute?p=c[y]*a.data.stride+a.offset:p=c[y]*h;for(let d=0;d<h;d++)u[x++]=l[p++]}return new be(u,h,f)}if(this.index===null)return $t("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,f=l.length;h<f;h++){let u=l[h],p=t(u,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){let p=l[f];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],f=r[l];for(let u=0,p=f.length;u<p;u++)h.push(f[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var fl=new C,gf=new C,xf=new ee,Un=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=fl.subVectors(n,e).cross(gf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(fl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||xf.getNormalMatrix(t),s=this.coplanarPoint(fl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},_f=0,si=class extends Gn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=vr(),this.name="",this.type="Material",this.blending=ys,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Il,this.blendDst=Ll,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ph,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=no,this.stencilZFail=no,this.stencilZPass=no,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){$t(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){$t(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new qt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Un().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Lt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Lt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ei=new C,dl=new C,Hr=new C,Vr=new C,js=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ei)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ei.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ei.copy(this.origin).addScaledVector(this.direction,e),ei.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){dl.copy(t).add(e).multiplyScalar(.5),Hr.copy(e).sub(t).normalize(),Vr.copy(this.origin).sub(dl);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Hr),a=Vr.dot(this.direction),c=-Vr.dot(Hr),l=Vr.lengthSq(),h=Math.abs(1-o*o),f,u,p,x;if(h>0)if(f=o*c-a,u=o*a-c,x=r*h,f>=0)if(u>=-x)if(u<=x){let y=1/h;f*=y,u*=y,p=f*(f+o*u+2*a)+u*(o*f+u+2*c)+l}else u=r,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*c)+l;else u=-r,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*c)+l;else u<=-x?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-c),r),p=-f*f+u*(u+2*c)+l):u<=x?(f=0,u=Math.min(Math.max(-r,-c),r),p=u*(u+2*c)+l):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-c),r),p=-f*f+u*(u+2*c)+l);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(dl).addScaledVector(Hr,u),p}intersectSphere(t,e){if(t.radius<0)return null;ei.subVectors(t.center,this.origin);let n=ei.dot(this.direction),s=ei.dot(ei)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-u.z)*f,c=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,c=(t.min.z-u.z)*f),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ei)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,h=a.z,f=t.x-o.x,u=t.y-o.y,p=t.z-o.z,x=e.x-o.x,y=e.y-o.y,m=e.z-o.z,d=n.x-o.x,E=n.y-o.y,A=n.z-o.z,v=Math.abs(c),S=Math.abs(l),M=Math.abs(h),R,g,T,P,D,F,H,U,G,W,X,ot;if(v>=S&&v>=M?(T=c,F=f,G=x,ot=d,c>=0?(R=l,g=h,P=u,D=p,H=y,U=m,W=E,X=A):(R=h,g=l,P=p,D=u,H=m,U=y,W=A,X=E)):S>=M?(T=l,F=u,G=y,ot=E,l>=0?(R=h,g=c,P=p,D=f,H=m,U=x,W=A,X=d):(R=c,g=h,P=f,D=p,H=x,U=m,W=d,X=A)):(T=h,F=p,G=m,ot=A,h>=0?(R=c,g=l,P=f,D=u,H=x,U=y,W=d,X=E):(R=l,g=c,P=u,D=f,H=y,U=x,W=E,X=d)),T===0)return null;let Q=R/T,it=g/T,at=1/T,Ht=P-Q*F,At=D-it*F,re=H-Q*G,Jt=U-it*G,te=W-Q*ot,j=X-it*ot,st=te*Jt-j*re,bt=Ht*j-At*te,Xt=re*At-Jt*Ht;if(s){if(st<0||bt<0||Xt<0)return null}else if((st<0||bt<0||Xt<0)&&(st>0||bt>0||Xt>0))return null;let rt=st+bt+Xt;if(rt===0)return null;let I=at*(st*F+bt*G+Xt*ot);return(rt>0?I<0:I>0)?null:this.at(I/rt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Qs=class extends si{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=Dl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},kc=new Qt,Li=new js,kr=new ii,Gc=new C,Gr=new C,Wr=new C,Xr=new C,pl=new C,qr=new C,Wc=new C,Yr=new C,ve=class extends je{constructor(t=new we,e=new Qs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){qr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],f=r[c];h!==0&&(pl.fromBufferAttribute(f,t),o?qr.addScaledVector(pl,h):qr.addScaledVector(pl.sub(e),h))}e.add(qr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere),kr.applyMatrix4(r),Li.copy(t.ray).recast(t.near),!(kr.containsPoint(Li.origin)===!1&&(Li.intersectSphere(kr,Gc)===null||Li.origin.distanceToSquared(Gc)>(t.far-t.near)**2))&&(kc.copy(r).invert(),Li.copy(t.ray).applyMatrix4(kc),!(n.boundingBox!==null&&Li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Li)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,y=u.length;x<y;x++){let m=u[x],d=o[m.materialIndex],E=Math.max(m.start,p.start),A=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=E,S=A;v<S;v+=3){let M=a.getX(v),R=a.getX(v+1),g=a.getX(v+2);s=Zr(this,d,t,n,l,h,f,M,R,g),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let x=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=x,d=y;m<d;m+=3){let E=a.getX(m),A=a.getX(m+1),v=a.getX(m+2);s=Zr(this,o,t,n,l,h,f,E,A,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,y=u.length;x<y;x++){let m=u[x],d=o[m.materialIndex],E=Math.max(m.start,p.start),A=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let v=E,S=A;v<S;v+=3){let M=v,R=v+1,g=v+2;s=Zr(this,d,t,n,l,h,f,M,R,g),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let x=Math.max(0,p.start),y=Math.min(c.count,p.start+p.count);for(let m=x,d=y;m<d;m+=3){let E=m,A=m+1,v=m+2;s=Zr(this,o,t,n,l,h,f,E,A,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function vf(i,t,e,n,s,r,o,a){let c;if(t.side===Ye?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Si,a),c===null)return null;Yr.copy(a),Yr.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Yr);return l<e.near||l>e.far?null:{distance:l,point:Yr.clone(),object:i}}function Zr(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Gr),i.getVertexPosition(c,Wr),i.getVertexPosition(l,Xr);let h=vf(i,t,e,n,Gr,Wr,Xr,Wc);if(h){let f=new C;gi.getBarycoord(Wc,Gr,Wr,Xr,f),s&&(h.uv=gi.getInterpolatedAttribute(s,a,c,l,f,new Lt)),r&&(h.uv1=gi.getInterpolatedAttribute(r,a,c,l,f,new Lt)),o&&(h.normal=gi.getInterpolatedAttribute(o,a,c,l,f,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new C,materialIndex:0};gi.getNormal(Gr,Wr,Xr,u.normal),h.face=u,h.barycoord=f}return h}var Fi=class extends sn{constructor(t=null,e=1,n=1,s,r,o,a,c,l=ke,h=ke,f,u){super(null,o,a,c,l,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ms=class extends be{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},rs=new Qt,Xc=new Qt,Jr=[],qc=new Wn,yf=new Qt,zs=new ve,Hs=new ii,xi=class extends ve{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ms(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,yf)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Wn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,rs),qc.copy(t.boundingBox).applyMatrix4(rs),this.boundingBox.union(qc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ii),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,rs),Hs.copy(t.boundingSphere).applyMatrix4(rs),this.boundingSphere.union(Hs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(zs.geometry=this.geometry,zs.material=this.material,zs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hs.copy(this.boundingSphere),Hs.applyMatrix4(n),t.ray.intersectsSphere(Hs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,rs),Xc.multiplyMatrices(n,rs),zs.matrixWorld=Xc,zs.raycast(t,Jr);for(let o=0,a=Jr.length;o<a;o++){let c=Jr[o];c.instanceId=r,c.object=this,e.push(c)}Jr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ms(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Fi(new Float32Array(s*this.count),s,this.count,$o,wn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Di=new ii,Mf=new Lt(.5,.5),$r=new C,gs=class{constructor(t=new Un,e=new Un,n=new Un,s=new Un,r=new Un,o=new Un){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Fn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],f=r[5],u=r[6],p=r[7],x=r[8],y=r[9],m=r[10],d=r[11],E=r[12],A=r[13],v=r[14],S=r[15];if(s[0].setComponents(l-o,p-h,d-x,S-E).normalize(),s[1].setComponents(l+o,p+h,d+x,S+E).normalize(),s[2].setComponents(l+a,p+f,d+y,S+A).normalize(),s[3].setComponents(l-a,p-f,d-y,S-A).normalize(),n)s[4].setComponents(c,u,m,v).normalize(),s[5].setComponents(l-c,p-u,d-m,S-v).normalize();else if(s[4].setComponents(l-c,p-u,d-m,S-v).normalize(),e===Fn)s[5].setComponents(l+c,p+u,d+m,S+v).normalize();else if(e===us)s[5].setComponents(c,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(t){Di.center.set(0,0,0);let e=Mf.distanceTo(t.center);return Di.radius=.7071067811865476+e,Di.applyMatrix4(t.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if($r.x=s.normal.x>0?t.max.x:t.min.x,$r.y=s.normal.y>0?t.max.y:t.min.y,$r.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint($r)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var _o=class extends si{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Yc=new Qt,El=new js,Kr=new ii,jr=new C,Oi=class extends je{constructor(t=new we,e=new _o){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(s),Kr.radius+=r,t.ray.intersectsSphere(Kr)===!1)return;Yc.copy(s).invert(),El.copy(t.ray).applyMatrix4(Yc);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,f=n.attributes.position;if(l!==null){let u=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let x=u,y=p;x<y;x++){let m=l.getX(x);jr.fromBufferAttribute(f,m),Zc(jr,m,c,s,t,e,this)}}else{let u=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let x=u,y=p;x<y;x++)jr.fromBufferAttribute(f,x),Zc(jr,x,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Zc(i,t,e,n,s,r,o){let a=El.distanceSqToPoint(i);if(a<e){let c=new C;El.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var tr=class extends sn{constructor(t=[],e=bi,n,s,r,o,a,c,l,h){super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},er=class extends sn{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Xn=class extends sn{constructor(t,e,n=Bn,s,r,o,a=ke,c=ke,l,h=kn,f=1){if(h!==kn&&h!==Ei)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ds(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},vo=class extends Xn{constructor(t,e=Bn,n=bi,s,r,o=ke,a=ke,c,l=kn){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},nr=class extends sn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ge=class i extends we{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],f=[],u=0,p=0;x("z","y","x",-1,-1,n,e,t,o,r,0),x("z","y","x",1,-1,n,e,-t,o,r,1),x("x","z","y",1,1,t,n,e,s,o,2),x("x","z","y",1,-1,t,n,-e,s,o,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new de(l,3)),this.setAttribute("normal",new de(h,3)),this.setAttribute("uv",new de(f,2));function x(y,m,d,E,A,v,S,M,R,g,T){let P=v/R,D=S/g,F=v/2,H=S/2,U=M/2,G=R+1,W=g+1,X=0,ot=0,Q=new C;for(let it=0;it<W;it++){let at=it*D-H;for(let Ht=0;Ht<G;Ht++){let At=Ht*P-F;Q[y]=At*E,Q[m]=at*A,Q[d]=U,l.push(Q.x,Q.y,Q.z),Q[y]=0,Q[m]=0,Q[d]=M>0?1:-1,h.push(Q.x,Q.y,Q.z),f.push(Ht/R),f.push(1-it/g),X+=1}}for(let it=0;it<g;it++)for(let at=0;at<R;at++){let Ht=u+at+G*it,At=u+at+G*(it+1),re=u+(at+1)+G*(it+1),Jt=u+(at+1)+G*it;c.push(Ht,At,Jt),c.push(At,re,Jt),ot+=6}a.addGroup(p,ot,T),p+=ot,u+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ir=class i extends we{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new C,h=new Lt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){let p=n+f/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,c.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new de(o,3)),this.setAttribute("normal",new de(a,3)),this.setAttribute("uv",new de(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},se=class i extends we{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],p=[],x=0,y=[],m=n/2,d=0;E(),o===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new de(f,3)),this.setAttribute("normal",new de(u,3)),this.setAttribute("uv",new de(p,2));function E(){let v=new C,S=new C,M=0,R=(e-t)/n;for(let g=0;g<=r;g++){let T=[],P=g/r,D=P*(e-t)+t;for(let F=0;F<=s;F++){let H=F/s,U=H*c+a,G=Math.sin(U),W=Math.cos(U);S.x=D*G,S.y=-P*n+m,S.z=D*W,f.push(S.x,S.y,S.z),v.set(G,R,W).normalize(),u.push(v.x,v.y,v.z),p.push(H,1-P),T.push(x++)}y.push(T)}for(let g=0;g<s;g++)for(let T=0;T<r;T++){let P=y[T][g],D=y[T+1][g],F=y[T+1][g+1],H=y[T][g+1];(t>0||T!==0)&&(h.push(P,D,H),M+=3),(e>0||T!==r-1)&&(h.push(D,F,H),M+=3)}l.addGroup(d,M,0),d+=M}function A(v){let S=x,M=new Lt,R=new C,g=0,T=v===!0?t:e,P=v===!0?1:-1;for(let F=1;F<=s;F++)f.push(0,m*P,0),u.push(0,P,0),p.push(.5,.5),x++;let D=x;for(let F=0;F<=s;F++){let U=F/s*c+a,G=Math.cos(U),W=Math.sin(U);R.x=T*W,R.y=m*P,R.z=T*G,f.push(R.x,R.y,R.z),u.push(0,P,0),M.x=G*.5+.5,M.y=W*.5*P+.5,p.push(M.x,M.y),x++}for(let F=0;F<s;F++){let H=S+F,U=D+F;v===!0?h.push(U,U+1,H):h.push(U+1,U,H),g+=3}l.addGroup(d,g,v===!0?1:2),d+=g}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){$t("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,p=(o-h)/u;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new Lt:new C);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new C,s=[],r=[],o=[],a=new C,c=new Qt;for(let p=0;p<=t;p++){let x=p/t;s[p]=this.getTangentAt(x,new C)}r[0]=new C,o[0]=new C;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let x=Math.acos(le(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,x))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(le(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let x=1;x<=t;x++)r[x].applyMatrix4(c.makeRotationAxis(s[x],p*x)),o[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},sr=class extends bn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Lt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=c-this.aX,p=l-this.aY;c=u*h-p*f+this.aX,l=u*f+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},yo=class extends sr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function $l(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,f){let u=(o-r)/l-(a-r)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+f)+(c-a)/f;u*=h,p*=h,s(o,a,u,p)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Jc=new C,$c=new C,ml=new $l,gl=new $l,xl=new $l,mn=class extends bn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new C){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:($c.subVectors(s[0],s[1]).add(s[0]),l=$c);let f=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Jc.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Jc),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,x=Math.pow(l.distanceToSquared(f),p),y=Math.pow(f.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(h),p);y<1e-4&&(y=1),x<1e-4&&(x=y),m<1e-4&&(m=y),ml.initNonuniformCatmullRom(l.x,f.x,u.x,h.x,x,y,m),gl.initNonuniformCatmullRom(l.y,f.y,u.y,h.y,x,y,m),xl.initNonuniformCatmullRom(l.z,f.z,u.z,h.z,x,y,m)}else this.curveType==="catmullrom"&&(ml.initCatmullRom(l.x,f.x,u.x,h.x,this.tension),gl.initCatmullRom(l.y,f.y,u.y,h.y,this.tension),xl.initCatmullRom(l.z,f.z,u.z,h.z,this.tension));return n.set(ml.calc(c),gl.calc(c),xl.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Kc(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function Sf(i,t){let e=1-i;return e*e*t}function bf(i,t){return 2*(1-i)*i*t}function Ef(i,t){return i*i*t}function Vs(i,t,e,n){return Sf(i,t)+bf(i,e)+Ef(i,n)}function Tf(i,t){let e=1-i;return e*e*e*t}function wf(i,t){let e=1-i;return 3*e*e*i*t}function Af(i,t){return 3*(1-i)*i*i*t}function Rf(i,t){return i*i*i*t}function ks(i,t,e,n,s){return Tf(i,t)+wf(i,e)+Af(i,n)+Rf(i,s)}var Mo=class extends bn{constructor(t=new Lt,e=new Lt,n=new Lt,s=new Lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Lt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ks(t,s.x,r.x,o.x,a.x),ks(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},So=class extends bn{constructor(t=new C,e=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ks(t,s.x,r.x,o.x,a.x),ks(t,s.y,r.y,o.y,a.y),ks(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},bo=class extends bn{constructor(t=new Lt,e=new Lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Lt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Eo=class extends bn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},To=class extends bn{constructor(t=new Lt,e=new Lt,n=new Lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Lt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Vs(t,s.x,r.x,o.x),Vs(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},rr=class extends bn{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Vs(t,s.x,r.x,o.x),Vs(t,s.y,r.y,o.y),Vs(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wo=class extends bn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Lt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(Kc(a,c.x,l.x,h.x,f.x),Kc(a,c.y,l.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Lt().fromArray(s))}return this}},Cf=Object.freeze({__proto__:null,ArcCurve:yo,CatmullRomCurve3:mn,CubicBezierCurve:Mo,CubicBezierCurve3:So,EllipseCurve:sr,LineCurve:bo,LineCurve3:Eo,QuadraticBezierCurve:To,QuadraticBezierCurve3:rr,SplineCurve:wo});var or=class i extends we{constructor(t=[new Lt(0,-.5),new Lt(.5,0),new Lt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=le(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/e,f=new C,u=new Lt,p=new C,x=new C,y=new C,m=0,d=0;for(let E=0;E<=t.length-1;E++)switch(E){case 0:m=t[E+1].x-t[E].x,d=t[E+1].y-t[E].y,p.x=d*1,p.y=-m,p.z=d*0,y.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case t.length-1:c.push(y.x,y.y,y.z);break;default:m=t[E+1].x-t[E].x,d=t[E+1].y-t[E].y,p.x=d*1,p.y=-m,p.z=d*0,x.copy(p),p.x+=y.x,p.y+=y.y,p.z+=y.z,p.normalize(),c.push(p.x,p.y,p.z),y.copy(x)}for(let E=0;E<=e;E++){let A=n+E*h*s,v=Math.sin(A),S=Math.cos(A);for(let M=0;M<=t.length-1;M++){f.x=t[M].x*v,f.y=t[M].y,f.z=t[M].x*S,o.push(f.x,f.y,f.z),u.x=E/e,u.y=M/(t.length-1),a.push(u.x,u.y);let R=c[3*M+0]*v,g=c[3*M+1],T=c[3*M+0]*S;l.push(R,g,T)}}for(let E=0;E<e;E++)for(let A=0;A<t.length-1;A++){let v=A+E*t.length,S=v,M=v+t.length,R=v+t.length+1,g=v+1;r.push(S,M,g),r.push(R,g,M)}this.setIndex(r),this.setAttribute("position",new de(o,3)),this.setAttribute("uv",new de(a,2)),this.setAttribute("normal",new de(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var ri=class i extends we{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,f=t/a,u=e/c,p=[],x=[],y=[],m=[];for(let d=0;d<h;d++){let E=d*u-o;for(let A=0;A<l;A++){let v=A*f-r;x.push(v,-E,0),y.push(0,0,1),m.push(A/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let E=0;E<a;E++){let A=E+l*d,v=E+l*(d+1),S=E+1+l*(d+1),M=E+1+l*d;p.push(A,v,M),p.push(v,S,M)}this.setIndex(p),this.setAttribute("position",new de(x,3)),this.setAttribute("normal",new de(y,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var ar=class i extends we{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],f=new C,u=new C,p=[],x=[],y=[],m=[];for(let d=0;d<=n;d++){let E=[],A=d/n,v=o+A*a,S=t*Math.cos(v),M=Math.sqrt(t*t-S*S),R=0;d===0&&o===0?R=.5/e:d===n&&c===Math.PI&&(R=-.5/e);for(let g=0;g<=e;g++){let T=g/e,P=s+T*r;f.x=-M*Math.cos(P),f.y=S,f.z=M*Math.sin(P),x.push(f.x,f.y,f.z),u.copy(f).normalize(),y.push(u.x,u.y,u.z),m.push(T+R,1-A),E.push(l++)}h.push(E)}for(let d=0;d<n;d++)for(let E=0;E<e;E++){let A=h[d][E+1],v=h[d][E],S=h[d+1][E],M=h[d+1][E+1];(d!==0||o>0)&&p.push(A,v,M),(d!==n-1||c<Math.PI)&&p.push(v,S,M)}this.setIndex(p),this.setAttribute("position",new de(x,3)),this.setAttribute("normal",new de(y,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var On=class i extends we{constructor(t=new rr(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new C,c=new C,l=new Lt,h=new C,f=[],u=[],p=[],x=[];y(),this.setIndex(x),this.setAttribute("position",new de(f,3)),this.setAttribute("normal",new de(u,3)),this.setAttribute("uv",new de(p,2));function y(){for(let A=0;A<e;A++)m(A);m(r===!1?e:0),E(),d()}function m(A){h=t.getPointAt(A/e,h);let v=o.normals[A],S=o.binormals[A];for(let M=0;M<=s;M++){let R=M/s*Math.PI*2,g=Math.sin(R),T=-Math.cos(R);c.x=T*v.x+g*S.x,c.y=T*v.y+g*S.y,c.z=T*v.z+g*S.z,c.normalize(),u.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,f.push(a.x,a.y,a.z)}}function d(){for(let A=1;A<=e;A++)for(let v=1;v<=s;v++){let S=(s+1)*(A-1)+(v-1),M=(s+1)*A+(v-1),R=(s+1)*A+v,g=(s+1)*(A-1)+v;x.push(S,M,g),x.push(M,R,g)}}function E(){for(let A=0;A<=e;A++)for(let v=0;v<=s;v++)l.x=A/e,l.y=v/s,p.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Cf[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Vi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(jc(s))s.isRenderTargetTexture?($t("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(jc(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Qe(i){let t={};for(let e=0;e<i.length;e++){let n=Vi(i[e]);for(let s in n)t[s]=n[s]}return t}function jc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Pf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Kl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}var Gh={clone:Vi,merge:Qe},If=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,De=class extends si{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=If,this.fragmentShader=Lf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vi(t.uniforms),this.uniformsGroups=Pf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new qt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Lt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new C().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Te().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ee().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Qt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},xs=class extends De{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},qe=class extends si{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pa,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Bi=class extends qe{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Lt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return le(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new qt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new qt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new qt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Ao=class extends si{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ro=class extends si{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function os(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function _l(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var _i=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Co=class extends _i{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ml,endingEnd:Ml}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Sl:r=t,a=2*e-n;break;case bl:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Sl:o=t,c=2*n-e;break;case bl:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,p=this._weightNext,x=(n-e)/(s-e),y=x*x,m=y*x,d=-u*m+2*u*y-u*x,E=(1+u)*m+(-1.5-2*u)*y+(-.5+u)*x+1,A=(-1-p)*m+(1.5+p)*y+.5*x,v=p*m-p*y;for(let S=0;S!==a;++S)r[S]=d*o[h+S]+E*o[l+S]+A*o[c+S]+v*o[f+S];return r}},Po=class extends _i{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),f=1-h;for(let u=0;u!==a;++u)r[u]=o[l+u]*f+o[c+u]*h;return r}},Io=class extends _i{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Lo=class extends _i{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this.inTangents,f=this.outTangents;if(!h||!f){let x=(n-e)/(s-e),y=1-x;for(let m=0;m!==a;++m)r[m]=o[l+m]*y+o[c+m]*x;return r}let u=a*2,p=t-1;for(let x=0;x!==a;++x){let y=o[l+x],m=o[c+x],d=p*u+x*2,E=f[d],A=f[d+1],v=t*u+x*2,S=h[v],M=h[v+1],R=Nf(n,e,E,S,s);r[x]=Wh(R,y,A,M,m)}return r}};function Wh(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Df(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Nf(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=Wh(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let c=Df(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var gn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=os(e,this.TimeBufferType),this.values=os(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:os(t.times,Array),values:os(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),_l(t.settings)&&(n.settings={inTangents:os(t.settings.inTangents,Array),outTangents:os(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Io(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Po(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Co(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Lo(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Gs:e=this.InterpolantFactoryMethodDiscrete;break;case fo:e=this.InterpolantFactoryMethodLinear;break;case eo:e=this.InterpolantFactoryMethodSmooth;break;case yl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return $t("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Gs;case this.InterpolantFactoryMethodLinear:return fo;case this.InterpolantFactoryMethodSmooth:return eo;case this.InterpolantFactoryMethodBezier:return yl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;_l(this.settings)&&(Qc(this.settings.inTangents,t),Qc(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Kt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Kt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){Kt("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){Kt("KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&tf(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){Kt("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===eo,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let f=a*n,u=f-n,p=f+n;for(let x=0;x!==n;++x){let y=e[f+x];if(y!==e[u+x]||y!==e[p+x]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let f=a*n,u=o*n;for(let p=0;p!==n;++p)e[u+p]=e[f+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,_l(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Qc(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}gn.prototype.ValueTypeName="";gn.prototype.TimeBufferType=Float32Array;gn.prototype.ValueBufferType=Float32Array;gn.prototype.DefaultInterpolation=fo;var vi=class extends gn{constructor(t,e,n){super(t,e,n)}};vi.prototype.ValueTypeName="bool";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=Gs;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;var Do=class extends gn{constructor(t,e,n,s){super(t,e,n,s)}};Do.prototype.ValueTypeName="color";var No=class extends gn{constructor(t,e,n,s){super(t,e,n,s)}};No.prototype.ValueTypeName="number";var Uo=class extends _i{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)nn.slerpFlat(r,0,o,l-a,o,l,c);return r}},lr=class extends gn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Uo(this.times,this.values,this.getValueSize(),t)}};lr.prototype.ValueTypeName="quaternion";lr.prototype.InterpolantFactoryMethodSmooth=void 0;var yi=class extends gn{constructor(t,e,n){super(t,e,n)}};yi.prototype.ValueTypeName="string";yi.prototype.ValueBufferType=Array;yi.prototype.DefaultInterpolation=Gs;yi.prototype.InterpolantFactoryMethodLinear=void 0;yi.prototype.InterpolantFactoryMethodSmooth=void 0;var Fo=class extends gn{constructor(t,e,n,s){super(t,e,n,s)}};Fo.prototype.ValueTypeName="vector";var Oo=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=l.length;f<u;f+=2){let p=l[f],x=l[f+1];if(p.global&&(p.lastIndex=0),p.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Xh=new Oo,Bo=class{constructor(t){this.manager=t!==void 0?t:Xh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Bo.DEFAULT_MATERIAL_NAME="__DEFAULT";var zo=class extends je{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var vl=new Qt,th=new C,eh=new C,Ho=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.mapType=cn,this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gs,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new Te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;th.setFromMatrixPosition(t.matrixWorld),e.position.copy(th),eh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(eh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){vl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(vl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===us||t.reversedDepth?e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),e.multiply(vl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Qr=new C,to=new nn,Vn=new C,cr=class extends je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=Fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Qr,to,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qr,to,Vn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Qr,to,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qr,to,Vn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},mi=new C,nh=new Lt,ih=new Lt,Ke=class extends cr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=po*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Za*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return po*2*Math.atan(Math.tan(Za*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(mi.x,mi.y).multiplyScalar(-t/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mi.x,mi.y).multiplyScalar(-t/mi.z)}getViewSize(t,e){return this.getViewBounds(t,nh,ih),e.subVectors(ih,nh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Za*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Mi=class extends cr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Tl=class extends Ho{constructor(){super(new Mi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},_s=class extends zo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(je.DEFAULT_UP),this.updateMatrix(),this.target=new je,this.shadow=new Tl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var as=-90,ls=1,Vo=class extends je{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ke(as,ls,t,e);s.layers=this.layers,this.add(s);let r=new Ke(as,ls,t,e);r.layers=this.layers,this.add(r);let o=new Ke(as,ls,t,e);o.layers=this.layers,this.add(o);let a=new Ke(as,ls,t,e);a.layers=this.layers,this.add(a);let c=new Ke(as,ls,t,e);c.layers=this.layers,this.add(c);let l=new Ke(as,ls,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Fn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===us)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,p),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},ko=class extends Ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var jl="\\[\\]\\.:\\/",Uf=new RegExp("["+jl+"]","g"),Ql="[^"+jl+"]",Ff="[^"+jl.replace("\\.","")+"]",Of=/((?:WC+[\/:])*)/.source.replace("WC",Ql),Bf=/(WCOD+)?/.source.replace("WCOD",Ff),zf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ql),Hf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ql),Vf=new RegExp("^"+Of+Bf+zf+Hf+"$"),kf=["material","materials","bones","map"],wl=class{constructor(t,e,n){let s=n||Ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ce=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Uf,"")}static parseTrackName(t){let e=Vf.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);kf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){$t("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Kt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Kt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Kt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Kt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Kt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;Kt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ce.Composite=wl;Ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ce.prototype.GetterByBindingType=[Ce.prototype._getValue_direct,Ce.prototype._getValue_array,Ce.prototype._getValue_arrayElement,Ce.prototype._getValue_toArray];Ce.prototype.SetterByBindingTypeAndVersioning=[[Ce.prototype._setValue_direct,Ce.prototype._setValue_direct_setNeedsUpdate,Ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_array,Ce.prototype._setValue_array_setNeedsUpdate,Ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_arrayElement,Ce.prototype._setValue_arrayElement_setNeedsUpdate,Ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_fromArray,Ce.prototype._setValue_fromArray_setNeedsUpdate,Ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Hx=new Float32Array(1);var rc=class rc{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};rc.prototype.isMatrix2=!0;var Al=rc;function tc(i,t,e,n){let s=Gf(n);switch(e){case ql:return i*t;case $o:return i*t/s.components*s.byteLength;case Ko:return i*t/s.components*s.byteLength;case Ti:return i*t*2/s.components*s.byteLength;case jo:return i*t*2/s.components*s.byteLength;case Yl:return i*t*3/s.components*s.byteLength;case An:return i*t*4/s.components*s.byteLength;case Qo:return i*t*4/s.components*s.byteLength;case dr:case pr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case mr:case gr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ea:case ia:return Math.max(i,16)*Math.max(t,8)/4;case ta:case na:return Math.max(i,8)*Math.max(t,8)/2;case sa:case ra:case aa:case la:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case oa:case xr:case ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ua:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case fa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case da:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case pa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ma:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ga:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case xa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case _a:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case va:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ya:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ma:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Sa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ba:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ea:case Ta:case wa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Aa:case Ra:return Math.ceil(i/4)*Math.ceil(t/4)*8;case _r:case Ca:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Gf(i){switch(i){case cn:case kl:return{byteLength:1,components:1};case Ms:case Gl:case We:return{byteLength:2,components:1};case Zo:case Jo:return{byteLength:2,components:4};case Bn:case Yo:case wn:return{byteLength:4,components:1};case Wl:case Xl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?$t("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function du(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function $f(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,f=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){let h=c.array,f=c.updateRanges;if(i.bindBuffer(l,a),f.length===0)i.bufferSubData(l,0,h);else{f.sort((p,x)=>p.start-x.start);let u=0;for(let p=1;p<f.length;p++){let x=f[u],y=f[p];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++u,f[u]=y)}f.length=u+1;for(let p=0,x=f.length;p<x;p++){let y=f[p];i.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Kf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jf=`#ifdef USE_ALPHAHASH
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
#endif`,Qf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,td=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ed=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,id=`#ifdef USE_AOMAP
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
#endif`,sd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,od=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ad=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ld=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hd=`#ifdef USE_IRIDESCENCE
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
#endif`,ud=`#ifdef USE_BUMPMAP
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
#endif`,fd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,dd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,md=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,xd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_d=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,vd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,yd=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Md=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,Sd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,bd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ed=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Td=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ad="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Pd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
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
#endif`,Ld=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Nd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ud=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Od=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bd=`#ifdef USE_GRADIENTMAP
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
}`,zd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kd=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,Gd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Wd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Jd=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$d=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Kd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qd=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,tp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ep=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,np=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ip=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,op=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ap=`#if defined( USE_POINTS_UV )
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
#endif`,lp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,up=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,pp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
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
#endif`,_p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
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
#endif`,Mp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sp=`#ifdef USE_CLEARCOAT_NORMALMAP
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
#endif`,Ep=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Ap=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ip=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Np=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Up=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,Fp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Op=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zp=`#ifdef USE_SKINNING
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
#endif`,kp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wp=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xp=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qp=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$p=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Kp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jp=`uniform sampler2D t2D;
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
}`,Qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
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
}`,nm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,im=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,sm=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,rm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,om=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cm=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hm=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,um=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,fm=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,dm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,pm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,mm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,gm=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,_m=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Mm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Sm=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Em=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Tm=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,wm=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Am=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Rm=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,Cm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Pm=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,ae={alphahash_fragment:Kf,alphahash_pars_fragment:jf,alphamap_fragment:Qf,alphamap_pars_fragment:td,alphatest_fragment:ed,alphatest_pars_fragment:nd,aomap_fragment:id,aomap_pars_fragment:sd,batching_pars_vertex:rd,batching_vertex:od,begin_vertex:ad,beginnormal_vertex:ld,bsdfs:cd,iridescence_fragment:hd,bumpmap_pars_fragment:ud,clipping_planes_fragment:fd,clipping_planes_pars_fragment:dd,clipping_planes_pars_vertex:pd,clipping_planes_vertex:md,color_fragment:gd,color_pars_fragment:xd,color_pars_vertex:_d,color_vertex:vd,common:yd,cube_uv_reflection_fragment:Md,defaultnormal_vertex:Sd,displacementmap_pars_vertex:bd,displacementmap_vertex:Ed,emissivemap_fragment:Td,emissivemap_pars_fragment:wd,colorspace_fragment:Ad,colorspace_pars_fragment:Rd,envmap_fragment:Cd,envmap_common_pars_fragment:Pd,envmap_pars_fragment:Id,envmap_pars_vertex:Ld,envmap_physical_pars_fragment:Gd,envmap_vertex:Dd,fog_vertex:Nd,fog_pars_vertex:Ud,fog_fragment:Fd,fog_pars_fragment:Od,gradientmap_pars_fragment:Bd,lightmap_pars_fragment:zd,lights_lambert_fragment:Hd,lights_lambert_pars_fragment:Vd,lights_pars_begin:kd,lights_toon_fragment:Wd,lights_toon_pars_fragment:Xd,lights_phong_fragment:qd,lights_phong_pars_fragment:Yd,lights_physical_fragment:Zd,lights_physical_pars_fragment:Jd,lights_fragment_begin:$d,lights_fragment_maps:Kd,lights_fragment_end:jd,lightprobes_pars_fragment:Qd,logdepthbuf_fragment:tp,logdepthbuf_pars_fragment:ep,logdepthbuf_pars_vertex:np,logdepthbuf_vertex:ip,map_fragment:sp,map_pars_fragment:rp,map_particle_fragment:op,map_particle_pars_fragment:ap,metalnessmap_fragment:lp,metalnessmap_pars_fragment:cp,morphinstance_vertex:hp,morphcolor_vertex:up,morphnormal_vertex:fp,morphtarget_pars_vertex:dp,morphtarget_vertex:pp,normal_fragment_begin:mp,normal_fragment_maps:gp,normal_pars_fragment:xp,normal_pars_vertex:_p,normal_vertex:vp,normalmap_pars_fragment:yp,clearcoat_normal_fragment_begin:Mp,clearcoat_normal_fragment_maps:Sp,clearcoat_pars_fragment:bp,iridescence_pars_fragment:Ep,opaque_fragment:Tp,packing:wp,premultiplied_alpha_fragment:Ap,project_vertex:Rp,dithering_fragment:Cp,dithering_pars_fragment:Pp,roughnessmap_fragment:Ip,roughnessmap_pars_fragment:Lp,shadowmap_pars_fragment:Dp,shadowmap_pars_vertex:Np,shadowmap_vertex:Up,shadowmask_pars_fragment:Fp,skinbase_vertex:Op,skinning_pars_vertex:Bp,skinning_vertex:zp,skinnormal_vertex:Hp,specularmap_fragment:Vp,specularmap_pars_fragment:kp,tonemapping_fragment:Gp,tonemapping_pars_fragment:Wp,transmission_fragment:Xp,transmission_pars_fragment:qp,uv_pars_fragment:Yp,uv_pars_vertex:Zp,uv_vertex:Jp,worldpos_vertex:$p,background_vert:Kp,background_frag:jp,backgroundCube_vert:Qp,backgroundCube_frag:tm,cube_vert:em,cube_frag:nm,depth_vert:im,depth_frag:sm,distance_vert:rm,distance_frag:om,equirect_vert:am,equirect_frag:lm,linedashed_vert:cm,linedashed_frag:hm,meshbasic_vert:um,meshbasic_frag:fm,meshlambert_vert:dm,meshlambert_frag:pm,meshmatcap_vert:mm,meshmatcap_frag:gm,meshnormal_vert:xm,meshnormal_frag:_m,meshphong_vert:vm,meshphong_frag:ym,meshphysical_vert:Mm,meshphysical_frag:Sm,meshtoon_vert:bm,meshtoon_frag:Em,points_vert:Tm,points_frag:wm,shadow_vert:Am,shadow_frag:Rm,sprite_vert:Cm,sprite_frag:Pm},Ct={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},envMapRotation:{value:new ee},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},Jn={basic:{uniforms:Qe([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:Qe([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new qt(0)},envMapIntensity:{value:1}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:Qe([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:Qe([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:Qe([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new qt(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:Qe([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:Qe([Ct.points,Ct.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:Qe([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:Qe([Ct.common,Ct.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:Qe([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:Qe([Ct.sprite,Ct.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ee}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distance:{uniforms:Qe([Ct.common,Ct.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distance_vert,fragmentShader:ae.distance_frag},shadow:{uniforms:Qe([Ct.lights,Ct.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};Jn.physical={uniforms:Qe([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};var Da={r:0,b:0,g:0},Im=new Qt,pu=new ee;pu.set(-1,0,0,0,1,0,0,0,1);function Lm(i,t,e,n,s,r){let o=new qt(0),a=s===!0?0:1,c,l,h=null,f=0,u=null;function p(E){let A=E.isScene===!0?E.background:null;if(A&&A.isTexture){let v=E.backgroundBlurriness>0;A=t.get(A,v)}return A}function x(E){let A=!1,v=p(E);v===null?m(o,a):v&&v.isColor&&(m(v,1),A=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(E,A){let v=p(A);v&&(v.isCubeTexture||v.mapping===ur)?(l===void 0&&(l=new ve(new Ge(1,1,1),new De({name:"BackgroundCubeMaterial",uniforms:Vi(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,M,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Im.makeRotationFromEuler(A.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(pu),l.material.toneMapped=he.getTransfer(v.colorSpace)!==Me,(h!==v||f!==v.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,f=v.version,u=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ve(new ri(2,2),new De({name:"BackgroundMaterial",uniforms:Vi(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=he.getTransfer(v.colorSpace)!==Me,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,u=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function m(E,A){E.getRGB(Da,Kl(i)),e.buffers.color.setClear(Da.r,Da.g,Da.b,A,r)}function d(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,A=1){o.set(E),a=A,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(E){a=E,m(o,a)},render:x,addToRenderList:y,dispose:d}}function Dm(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(D,F,H,U,G){let W=!1,X=f(D,U,H,F);r!==X&&(r=X,l(r.object)),W=p(D,U,H,G),W&&x(D,U,H,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,v(D,F,H,U),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function c(){return i.createVertexArray()}function l(D){return i.bindVertexArray(D)}function h(D){return i.deleteVertexArray(D)}function f(D,F,H,U){let G=U.wireframe===!0,W=n[F.id];W===void 0&&(W={},n[F.id]=W);let X=D.isInstancedMesh===!0?D.id:0,ot=W[X];ot===void 0&&(ot={},W[X]=ot);let Q=ot[H.id];Q===void 0&&(Q={},ot[H.id]=Q);let it=Q[G];return it===void 0&&(it=u(c()),Q[G]=it),it}function u(D){let F=[],H=[],U=[];for(let G=0;G<e;G++)F[G]=0,H[G]=0,U[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:H,attributeDivisors:U,object:D,attributes:{},index:null}}function p(D,F,H,U){let G=r.attributes,W=F.attributes,X=0,ot=H.getAttributes();for(let Q in ot)if(ot[Q].location>=0){let at=G[Q],Ht=W[Q];if(Ht===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(Ht=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(Ht=D.instanceColor)),at===void 0||at.attribute!==Ht||Ht&&at.data!==Ht.data)return!0;X++}return r.attributesNum!==X||r.index!==U}function x(D,F,H,U){let G={},W=F.attributes,X=0,ot=H.getAttributes();for(let Q in ot)if(ot[Q].location>=0){let at=W[Q];at===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(at=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(at=D.instanceColor));let Ht={};Ht.attribute=at,at&&at.data&&(Ht.data=at.data),G[Q]=Ht,X++}r.attributes=G,r.attributesNum=X,r.index=U}function y(){let D=r.newAttributes;for(let F=0,H=D.length;F<H;F++)D[F]=0}function m(D){d(D,0)}function d(D,F){let H=r.newAttributes,U=r.enabledAttributes,G=r.attributeDivisors;H[D]=1,U[D]===0&&(i.enableVertexAttribArray(D),U[D]=1),G[D]!==F&&(i.vertexAttribDivisor(D,F),G[D]=F)}function E(){let D=r.newAttributes,F=r.enabledAttributes;for(let H=0,U=F.length;H<U;H++)F[H]!==D[H]&&(i.disableVertexAttribArray(H),F[H]=0)}function A(D,F,H,U,G,W,X){X===!0?i.vertexAttribIPointer(D,F,H,G,W):i.vertexAttribPointer(D,F,H,U,G,W)}function v(D,F,H,U){y();let G=U.attributes,W=H.getAttributes(),X=F.defaultAttributeValues;for(let ot in W){let Q=W[ot];if(Q.location>=0){let it=G[ot];if(it===void 0&&(ot==="instanceMatrix"&&D.instanceMatrix&&(it=D.instanceMatrix),ot==="instanceColor"&&D.instanceColor&&(it=D.instanceColor)),it!==void 0){let at=it.normalized,Ht=it.itemSize,At=t.get(it);if(At===void 0)continue;let re=At.buffer,Jt=At.type,te=At.bytesPerElement,j=Jt===i.INT||Jt===i.UNSIGNED_INT||it.gpuType===Yo;if(it.isInterleavedBufferAttribute){let st=it.data,bt=st.stride,Xt=it.offset;if(st.isInstancedInterleavedBuffer){for(let rt=0;rt<Q.locationSize;rt++)d(Q.location+rt,st.meshPerAttribute);D.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let rt=0;rt<Q.locationSize;rt++)m(Q.location+rt);i.bindBuffer(i.ARRAY_BUFFER,re);for(let rt=0;rt<Q.locationSize;rt++)A(Q.location+rt,Ht/Q.locationSize,Jt,at,bt*te,(Xt+Ht/Q.locationSize*rt)*te,j)}else{if(it.isInstancedBufferAttribute){for(let st=0;st<Q.locationSize;st++)d(Q.location+st,it.meshPerAttribute);D.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let st=0;st<Q.locationSize;st++)m(Q.location+st);i.bindBuffer(i.ARRAY_BUFFER,re);for(let st=0;st<Q.locationSize;st++)A(Q.location+st,Ht/Q.locationSize,Jt,at,Ht*te,Ht/Q.locationSize*st*te,j)}}else if(X!==void 0){let at=X[ot];if(at!==void 0)switch(at.length){case 2:i.vertexAttrib2fv(Q.location,at);break;case 3:i.vertexAttrib3fv(Q.location,at);break;case 4:i.vertexAttrib4fv(Q.location,at);break;default:i.vertexAttrib1fv(Q.location,at)}}}}E()}function S(){T();for(let D in n){let F=n[D];for(let H in F){let U=F[H];for(let G in U){let W=U[G];for(let X in W)h(W[X].object),delete W[X];delete U[G]}}delete n[D]}}function M(D){if(n[D.id]===void 0)return;let F=n[D.id];for(let H in F){let U=F[H];for(let G in U){let W=U[G];for(let X in W)h(W[X].object),delete W[X];delete U[G]}}delete n[D.id]}function R(D){for(let F in n){let H=n[F];for(let U in H){let G=H[U];if(G[D.id]===void 0)continue;let W=G[D.id];for(let X in W)h(W[X].object),delete W[X];delete G[D.id]}}}function g(D){for(let F in n){let H=n[F],U=D.isInstancedMesh===!0?D.id:0,G=H[U];if(G!==void 0){for(let W in G){let X=G[W];for(let ot in X)h(X[ot].object),delete X[ot];delete G[W]}delete H[U],Object.keys(H).length===0&&delete n[F]}}}function T(){P(),o=!0,r!==s&&(r=s,l(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:P,dispose:S,releaseStatesOfGeometry:M,releaseStatesOfObject:g,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:m,disableUnusedAttributes:E}}function Nm(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function o(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function a(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let p=0;p<h;p++)u+=l[p];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Um(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==An&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let g=R===We&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==cn&&R!==wn&&!g&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&($t("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&$t("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:E,maxVaryings:A,maxFragmentUniforms:v,maxSamples:S,samples:M}}function Fm(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Un,a=new ee,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let p=f.length!==0||u||n!==0||s;return s=u,n=f.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,p){let x=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,d=i.get(f);if(!s||x===null||x.length===0||r&&!m)r?h(null):l();else{let E=r?0:n,A=E*4,v=d.clippingState||null;c.value=v,v=h(x,u,A,p);for(let S=0;S!==A;++S)v[S]=e[S];d.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,p,x){let y=f!==null?f.length:0,m=null;if(y!==0){if(m=c.value,x!==!0||m===null){let d=p+y*4,E=u.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<d)&&(m=new Float32Array(d));for(let A=0,v=p;A!==y;++A,v+=4)o.copy(f[A]).applyMatrix4(E,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}var Es=4,Om=6,Bm=20,zm=256,yr=new Mi,qh=new qt,oc=null,ac=0,lc=0,cc=!1,Hm=new C,ki=new C,ws=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=Hm}=r;oc=this._renderer.getRenderTarget(),ac=this._renderer.getActiveCubeFace(),lc=this._renderer.getActiveMipmapLevel(),cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(oc,ac,lc),this._renderer.xr.enabled=cc,t.scissorTest=!1,bs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===bi||t.mapping===Hi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),oc=this._renderer.getRenderTarget(),ac=this._renderer.getActiveCubeFace(),lc=this._renderer.getActiveMipmapLevel(),cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Pe,minFilter:Pe,generateMipmaps:!1,type:We,format:An,colorSpace:Ws,depthBuffer:!1},s=Yh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yh(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Vm(r)),this._blurMaterial=Gm(r,t,e),this._ggxMaterial=km(r,t,e)}return s}_compileMaterial(t){let e=new ve(new we,t);this._renderer.compile(e,yr)}_sceneToCubeUV(t,e,n,s,r){let c=new Ke(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,p=f.toneMapping;f.getClearColor(qh),f.toneMapping=xn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ve(new Ge,new Qs({name:"PMREM.Background",side:Ye,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,d=!1,E=t.background;E?E.isColor&&(m.color.copy(E),t.background=null,d=!0):(m.color.copy(qh),d=!0);for(let A=0;A<6;A++){let v=A%3;v===0?(c.up.set(0,l[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[A],r.y,r.z)):v===1?(c.up.set(0,0,l[A]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[A],r.z)):(c.up.set(0,l[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[A]));let S=this._cubeSize;bs(s,v*S,A>2?S:0,S,S),f.setRenderTarget(s),d&&f.render(y,c),f.render(t,c)}f.toneMapping=p,f.autoClear=u,t.background=E}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===bi||t.mapping===Hi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;bs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,yr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(l*l-h*h),u=l*1.25,p=f*u,{_lodMax:x}=this,y=this._sizeLods[n],m=3*y*(n>x-Es?n-x+Es:0),d=4*(this._cubeSize-y);c.envMap.value=t.texture,c.roughness.value=p,c.mipInt.value=x-e,bs(r,m,d,3*y,2*y),s.setRenderTarget(r),s.render(a,yr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=x-n,bs(t,m,d,3*y,2*y),s.setRenderTarget(t),s.render(a,yr)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],f=3*h*(s>this._lodMax-Es?s-this._lodMax+Es:0),u=4*(this._cubeSize-h);bs(e,f,u,3*h,2*h),o.setRenderTarget(e),o.render(c,yr)}};function Vm(i){let t=[],e=[],n=i,s=i-Es+1+Om;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),c=-a,l=1+a,h=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,u=6,p=3,x=new Float32Array(p*u*f),y=new Float32Array(p*u*f);for(let d=0;d<f;d++){let E=d%3*2/3-1,A=d>2?0:-1,v=[E,A,0,E+2/3,A,0,E+2/3,A+1,0,E,A,0,E+2/3,A+1,0,E,A+1,0];x.set(v,p*u*d);for(let S=0;S<u;S++){let M=h[S*2]*2-1,R=h[S*2+1]*2-1;d===0?ki.set(1,R,M):d===1?ki.set(-M,1,-R):d===2?ki.set(-M,R,1):d===3?ki.set(-1,R,-M):d===4?ki.set(-M,-1,R):ki.set(M,R,-1),ki.toArray(y,(d*u+S)*p)}}let m=new we;m.setAttribute("position",new be(x,p)),m.setAttribute("outputDirection",new be(y,p)),e.push(new ve(m,null)),n>Es&&n--}return{lodMeshes:e,sizeLods:t}}function Yh(i,t,e){let n=new Fe(i,t,e);return n.texture.mapping=ur,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function bs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function km(i,t,e){return new De({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:zm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Oa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Gm(i,t,e){return new De({name:"SphericalGaussianBlur",defines:{SAMPLES:Bm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Oa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Zh(){return new De({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oa(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Jh(){return new De({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Oa(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ua=class extends Fe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new tr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ge(5,5,5),r=new De({name:"CubemapFromEquirect",uniforms:Vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ye,blending:qn});r.uniforms.tEquirect.value=e;let o=new ve(s,r),a=e.minFilter;return e.minFilter===Yn&&(e.minFilter=Pe),new Vo(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function Wm(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,p=!1){return u==null?null:p?o(u):r(u)}function r(u){if(u&&u.isTexture){let p=u.mapping;if(p===Wo||p===Xo)if(t.has(u)){let x=t.get(u).texture;return a(x,u.mapping)}else{let x=u.image;if(x&&x.height>0){let y=new Ua(x.height);return y.fromEquirectangularTexture(i,u),t.set(u,y),u.addEventListener("dispose",l),a(y.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let p=u.mapping,x=p===Wo||p===Xo,y=p===bi||p===Hi;if(x||y){let m=e.get(u),d=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return n===null&&(n=new ws(i)),m=x?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let E=u.image;return x&&E&&E.height>0||y&&E&&c(E)?(n===null&&(n=new ws(i)),m=x?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,p){return p===Wo?u.mapping=bi:p===Xo&&(u.mapping=Hi),u}function c(u){let p=0,x=6;for(let y=0;y<x;y++)u[y]!==void 0&&p++;return p===x}function l(u){let p=u.target;p.removeEventListener("dispose",l);let x=t.get(p);x!==void 0&&(t.delete(p),x.dispose())}function h(u){let p=u.target;p.removeEventListener("dispose",h);let x=e.get(p);x!==void 0&&(e.delete(p),x.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function Xm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ni("WebGLRenderer: "+n+" extension not supported."),s}}}function qm(i,t,e,n){let s={},r=new WeakMap;function o(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let x in u.attributes)t.remove(u.attributes[x]);u.removeEventListener("dispose",o),delete s[u.id];let p=r.get(u);p&&(t.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(f,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function c(f){let u=f.attributes;for(let p in u)t.update(u[p],i.ARRAY_BUFFER)}function l(f){let u=[],p=f.index,x=f.attributes.position,y=0;if(x===void 0)return;if(p!==null){let E=p.array;y=p.version;for(let A=0,v=E.length;A<v;A+=3){let S=E[A+0],M=E[A+1],R=E[A+2];u.push(S,M,M,R,R,S)}}else{let E=x.array;y=x.version;for(let A=0,v=E.length/3-1;A<v;A+=3){let S=A+0,M=A+1,R=A+2;u.push(S,M,M,R,R,S)}}let m=new(x.count>=65535?Ks:$s)(u,1);m.version=y;let d=r.get(f);d&&t.remove(d),r.set(f,m)}function h(f){let u=r.get(f);if(u){let p=f.index;p!==null&&u.version<p.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:h}}function Ym(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,u){i.drawElements(n,u,r,f*o),e.update(u,n,1)}function l(f,u,p){p!==0&&(i.drawElementsInstanced(n,u,r,f*o,p),e.update(u,n,p))}function h(f,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,p);let y=0;for(let m=0;m<p;m++)y+=u[m];e.update(y,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Zm(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Kt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Jm(i,t,e){let n=new WeakMap,s=new Te;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==f){let T=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let p=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],A=0;p===!0&&(A=1),x===!0&&(A=2),y===!0&&(A=3);let v=a.attributes.position.count*A,S=1;v>t.maxTextureSize&&(S=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let M=new Float32Array(v*S*4*f),R=new Ys(M,v,S,f);R.type=wn,R.needsUpdate=!0;let g=A*4;for(let P=0;P<f;P++){let D=m[P],F=d[P],H=E[P],U=v*S*4*P;for(let G=0;G<D.count;G++){let W=G*g;p===!0&&(s.fromBufferAttribute(D,G),M[U+W+0]=s.x,M[U+W+1]=s.y,M[U+W+2]=s.z,M[U+W+3]=0),x===!0&&(s.fromBufferAttribute(F,G),M[U+W+4]=s.x,M[U+W+5]=s.y,M[U+W+6]=s.z,M[U+W+7]=0),y===!0&&(s.fromBufferAttribute(H,G),M[U+W+8]=s.x,M[U+W+9]=s.y,M[U+W+10]=s.z,M[U+W+11]=H.itemSize===4?s.w:1)}}u={count:f,texture:R,size:new Lt(v,S)},n.set(a,u),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let y=0;y<l.length;y++)p+=l[y];let x=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function $m(i,t,e,n,s){let r=new WeakMap;function o(l){let h=s.render.frame,f=l.geometry,u=t.get(l,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let p=l.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return u}function a(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var Km={[Nl]:"LINEAR_TONE_MAPPING",[Ul]:"REINHARD_TONE_MAPPING",[Fl]:"CINEON_TONE_MAPPING",[Ol]:"ACES_FILMIC_TONE_MAPPING",[zl]:"AGX_TONE_MAPPING",[Hl]:"NEUTRAL_TONE_MAPPING",[Bl]:"CUSTOM_TONE_MAPPING"};function jm(i,t,e,n,s,r){let o=new Fe(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=new we;l.setAttribute("position",new de([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new de([0,2,0,0,2,0],2));let h=new xs({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new ve(l,h),u=new Mi(-1,1,1,-1,0,1),p=null,x=null,y=!1,m,d=null,E=[],A=!1;this.setSize=function(v,S){o.setSize(v,S),a!==null&&a.setSize(v,S),c!==null&&c.setSize(v,S);for(let M=0;M<E.length;M++){let R=E[M];R.setSize&&R.setSize(v,S)}},this.setEffects=function(v){E=v,A=E.length>0&&E[0].isRenderPass===!0;let S=o.width,M=o.height;E.length>0&&a===null&&(a=new Fe(S,M,{type:We,depthBuffer:!1,stencilBuffer:!1}),c=new Fe(S,M,{type:We,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<E.length;R++){let g=E[R];g.setSize&&g.setSize(S,M)}},this.begin=function(v,S){if(y||v.toneMapping===xn&&E.length===0)return!1;if(d=S,S!==null){let M=S.width,R=S.height;(o.width!==M||o.height!==R)&&this.setSize(M,R)}return A===!1&&v.setRenderTarget(o),m=v.toneMapping,v.toneMapping=xn,!0},this.hasRenderPass=function(){return A},this.end=function(v,S){v.toneMapping=m,y=!0;let M=o,R=a;for(let g=0;g<E.length;g++){let T=E[g];T.enabled!==!1&&(T.render(v,R,M,S),T.needsSwap!==!1&&(M=R,R=R===a?c:a))}if(p!==v.outputColorSpace||x!==v.toneMapping){p=v.outputColorSpace,x=v.toneMapping,h.defines={},he.getTransfer(p)===Me&&(h.defines.SRGB_TRANSFER="");let g=Km[x];g&&(h.defines[g]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=M.texture,v.setRenderTarget(d),v.render(f,u),d=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var mu=new sn,fc=new Xn(1,1),gu=new Ys,xu=new xo,_u=new tr,$h=[],Kh=[],jh=new Float32Array(16),Qh=new Float32Array(9),tu=new Float32Array(4);function As(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=$h[s];if(r===void 0&&(r=new Float32Array(s),$h[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function He(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ba(i,t){let e=Kh[t];e===void 0&&(e=new Int32Array(t),Kh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Qm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function t0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2fv(this.addr,t),He(e,t)}}function e0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;i.uniform3fv(this.addr,t),He(e,t)}}function n0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4fv(this.addr,t),He(e,t)}}function i0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),He(e,t)}else{if(ze(e,n))return;tu.set(n),i.uniformMatrix2fv(this.addr,!1,tu),He(e,n)}}function s0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),He(e,t)}else{if(ze(e,n))return;Qh.set(n),i.uniformMatrix3fv(this.addr,!1,Qh),He(e,n)}}function r0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),He(e,t)}else{if(ze(e,n))return;jh.set(n),i.uniformMatrix4fv(this.addr,!1,jh),He(e,n)}}function o0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function a0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2iv(this.addr,t),He(e,t)}}function l0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3iv(this.addr,t),He(e,t)}}function c0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4iv(this.addr,t),He(e,t)}}function h0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function u0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2uiv(this.addr,t),He(e,t)}}function f0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3uiv(this.addr,t),He(e,t)}}function d0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4uiv(this.addr,t),He(e,t)}}function p0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(fc.compareFunction=e.isReversedDepthBuffer()?La:Ia,r=fc):r=mu,e.setTexture2D(t||r,s)}function m0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||xu,s)}function g0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||_u,s)}function x0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||gu,s)}function _0(i){switch(i){case 5126:return Qm;case 35664:return t0;case 35665:return e0;case 35666:return n0;case 35674:return i0;case 35675:return s0;case 35676:return r0;case 5124:case 35670:return o0;case 35667:case 35671:return a0;case 35668:case 35672:return l0;case 35669:case 35673:return c0;case 5125:return h0;case 36294:return u0;case 36295:return f0;case 36296:return d0;case 35678:case 36198:case 36298:case 36306:case 35682:return p0;case 35679:case 36299:case 36307:return m0;case 35680:case 36300:case 36308:case 36293:return g0;case 36289:case 36303:case 36311:case 36292:return x0}}function v0(i,t){i.uniform1fv(this.addr,t)}function y0(i,t){let e=As(t,this.size,2);i.uniform2fv(this.addr,e)}function M0(i,t){let e=As(t,this.size,3);i.uniform3fv(this.addr,e)}function S0(i,t){let e=As(t,this.size,4);i.uniform4fv(this.addr,e)}function b0(i,t){let e=As(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function E0(i,t){let e=As(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function T0(i,t){let e=As(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function w0(i,t){i.uniform1iv(this.addr,t)}function A0(i,t){i.uniform2iv(this.addr,t)}function R0(i,t){i.uniform3iv(this.addr,t)}function C0(i,t){i.uniform4iv(this.addr,t)}function P0(i,t){i.uniform1uiv(this.addr,t)}function I0(i,t){i.uniform2uiv(this.addr,t)}function L0(i,t){i.uniform3uiv(this.addr,t)}function D0(i,t){i.uniform4uiv(this.addr,t)}function N0(i,t,e){let n=this.cache,s=t.length,r=Ba(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),He(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=fc:o=mu;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function U0(i,t,e){let n=this.cache,s=t.length,r=Ba(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||xu,r[o])}function F0(i,t,e){let n=this.cache,s=t.length,r=Ba(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||_u,r[o])}function O0(i,t,e){let n=this.cache,s=t.length,r=Ba(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||gu,r[o])}function B0(i){switch(i){case 5126:return v0;case 35664:return y0;case 35665:return M0;case 35666:return S0;case 35674:return b0;case 35675:return E0;case 35676:return T0;case 5124:case 35670:return w0;case 35667:case 35671:return A0;case 35668:case 35672:return R0;case 35669:case 35673:return C0;case 5125:return P0;case 36294:return I0;case 36295:return L0;case 36296:return D0;case 35678:case 36198:case 36298:case 36306:case 35682:return N0;case 35679:case 36299:case 36307:return U0;case 35680:case 36300:case 36308:case 36293:return F0;case 36289:case 36303:case 36311:case 36292:return O0}}var dc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=_0(e.type)}},pc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=B0(e.type)}},mc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},hc=/(\w+)(\])?(\[|\.)?/g;function eu(i,t){i.seq.push(t),i.map[t.id]=t}function z0(i,t,e){let n=i.name,s=n.length;for(hc.lastIndex=0;;){let r=hc.exec(n),o=hc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){eu(e,l===void 0?new dc(a,i,t):new pc(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new mc(a),eu(e,f)),e=f}}}var Ts=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);z0(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function nu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var H0=37297,V0=0;function k0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var iu=new ee;function G0(i){he._getMatrix(iu,he.workingColorSpace,i);let t=`mat3( ${iu.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(i)){case Xs:return[t,"LinearTransferOETF"];case Me:return[t,"sRGBTransferOETF"];default:return $t("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function su(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+k0(i.getShaderSource(t),a)}else return r}function W0(i,t){let e=G0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var X0={[Nl]:"Linear",[Ul]:"Reinhard",[Fl]:"Cineon",[Ol]:"ACESFilmic",[zl]:"AgX",[Hl]:"Neutral",[Bl]:"Custom"};function q0(i,t){let e=X0[t];return e===void 0?($t("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Na=new C;function Y0(){he.getLuminanceCoefficients(Na);let i=Na.x.toFixed(4),t=Na.y.toFixed(4),e=Na.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Z0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sr).join(`
`)}function J0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function $0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Sr(i){return i!==""}function ru(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ou(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var K0=/^[ \t]*#include +<([\w\d./]+)>/gm;function gc(i){return i.replace(K0,Q0)}var j0=new Map;function Q0(i,t){let e=ae[t];if(e===void 0){let n=j0.get(t);if(n!==void 0)e=ae[n],$t('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return gc(e)}var tg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function au(i){return i.replace(tg,eg)}function eg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function lu(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var ng={[hr]:"SHADOWMAP_TYPE_PCF",[vs]:"SHADOWMAP_TYPE_VSM"};function ig(i){return ng[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var sg={[bi]:"ENVMAP_TYPE_CUBE",[Hi]:"ENVMAP_TYPE_CUBE",[ur]:"ENVMAP_TYPE_CUBE_UV"};function rg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":sg[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var og={[Hi]:"ENVMAP_MODE_REFRACTION"};function ag(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":og[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var lg={[Dl]:"ENVMAP_BLENDING_MULTIPLY",[Th]:"ENVMAP_BLENDING_MIX",[wh]:"ENVMAP_BLENDING_ADD"};function cg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":lg[i.combine]||"ENVMAP_BLENDING_NONE"}function hg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function ug(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=ig(e),l=rg(e),h=ag(e),f=cg(e),u=hg(e),p=Z0(e),x=J0(r),y=s.createProgram(),m,d,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Sr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Sr).join(`
`),d.length>0&&(d+=`
`)):(m=[lu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sr).join(`
`),d=[lu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==xn?"#define TONE_MAPPING":"",e.toneMapping!==xn?ae.tonemapping_pars_fragment:"",e.toneMapping!==xn?q0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,W0("linearToOutputTexel",e.outputColorSpace),Y0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Sr).join(`
`)),o=gc(o),o=ru(o,e),o=ou(o,e),a=gc(a),a=ru(a,e),a=ou(a,e),o=au(o),a=au(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Zl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Zl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let A=E+m+o,v=E+d+a,S=nu(s,s.VERTEX_SHADER,A),M=nu(s,s.FRAGMENT_SHADER,v);s.attachShader(y,S),s.attachShader(y,M),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function R(D){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(y)||"",H=s.getShaderInfoLog(S)||"",U=s.getShaderInfoLog(M)||"",G=F.trim(),W=H.trim(),X=U.trim(),ot=!0,Q=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(ot=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,S,M);else{let it=su(s,S,"vertex"),at=su(s,M,"fragment");Kt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+G+`
`+it+`
`+at)}else G!==""?$t("WebGLProgram: Program Info Log:",G):(W===""||X==="")&&(Q=!1);Q&&(D.diagnostics={runnable:ot,programLog:G,vertexShader:{log:W,prefix:m},fragmentShader:{log:X,prefix:d}})}s.deleteShader(S),s.deleteShader(M),g=new Ts(s,y),T=$0(s,y)}let g;this.getUniforms=function(){return g===void 0&&R(this),g};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(y,H0)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=V0++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=S,this.fragmentShader=M,this}var fg=0,xc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new _c(t),e.set(t,n)),n}},_c=class{constructor(t){this.id=fg++,this.code=t,this.usedTimes=0}};function dg(i){return i===Ti||i===xr||i===_r}function pg(i,t,e,n,s,r){let o=new Zs,a=new xc,c=new Set,l=[],h=new Map,f=n.logarithmicDepthBuffer,u=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(g){return c.add(g),g===0?"uv":`uv${g}`}function y(g,T,P,D,F,H){let U=D.fog,G=F.geometry,W=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?D.environment:null,X=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,ot=t.get(g.envMap||W,X),Q=ot&&ot.mapping===ur?ot.image.height:null,it=p[g.type];g.precision!==null&&(u=n.getMaxPrecision(g.precision),u!==g.precision&&$t("WebGLProgram.getParameters:",g.precision,"not supported, using",u,"instead."));let at=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ht=at!==void 0?at.length:0,At=0;G.morphAttributes.position!==void 0&&(At=1),G.morphAttributes.normal!==void 0&&(At=2),G.morphAttributes.color!==void 0&&(At=3);let re,Jt,te,j;if(it){let me=Jn[it];re=me.vertexShader,Jt=me.fragmentShader}else{re=g.vertexShader,Jt=g.fragmentShader;let me=a.getVertexShaderStage(g),fe=a.getFragmentShaderStage(g);a.update(g,me,fe),te=me.id,j=fe.id}let st=i.getRenderTarget(),bt=i.state.buffers.depth.getReversed(),Xt=F.isInstancedMesh===!0,rt=F.isBatchedMesh===!0,I=!!g.map,B=!!g.matcap,$=!!ot,tt=!!g.aoMap,et=!!g.lightMap,pt=!!g.bumpMap&&g.wireframe===!1,mt=!!g.normalMap,_t=!!g.displacementMap,Pt=!!g.emissiveMap,lt=!!g.metalnessMap,Tt=!!g.roughnessMap,L=g.anisotropy>0,Dt=g.clearcoat>0,Mt=g.dispersion>0,w=g.retroreflectivity>0,_=g.iridescence>0,N=g.sheen>0,k=g.transmission>0,J=L&&!!g.anisotropyMap,dt=Dt&&!!g.clearcoatMap,ut=Dt&&!!g.clearcoatNormalMap,V=Dt&&!!g.clearcoatRoughnessMap,Y=_&&!!g.iridescenceMap,ct=_&&!!g.iridescenceThicknessMap,St=N&&!!g.sheenColorMap,xt=N&&!!g.sheenRoughnessMap,gt=!!g.specularMap,Et=!!g.specularColorMap,Ut=!!g.specularIntensityMap,Ft=k&&!!g.transmissionMap,z=k&&!!g.thicknessMap,vt=!!g.gradientMap,nt=!!g.alphaMap,yt=g.alphaTest>0,Rt=!!g.alphaHash,ft=!!g.extensions,Bt=xn;g.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Bt=i.toneMapping);let zt={shaderID:it,shaderType:g.type,shaderName:g.name,vertexShader:re,fragmentShader:Jt,defines:g.defines,customVertexShaderID:te,customFragmentShaderID:j,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:u,batching:rt,batchingColor:rt&&F._colorsTexture!==null,instancing:Xt,instancingColor:Xt&&F.instanceColor!==null,instancingMorph:Xt&&F.morphTexture!==null,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:he.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:I,matcap:B,envMap:$,envMapMode:$&&ot.mapping,envMapCubeUVHeight:Q,aoMap:tt,lightMap:et,bumpMap:pt,normalMap:mt,displacementMap:_t,emissiveMap:Pt,normalMapObjectSpace:mt&&g.normalMapType===Ch,normalMapTangentSpace:mt&&g.normalMapType===Pa,packedNormalMap:mt&&g.normalMapType===Pa&&dg(g.normalMap.format),metalnessMap:lt,roughnessMap:Tt,anisotropy:L,anisotropyMap:J,clearcoat:Dt,clearcoatMap:dt,clearcoatNormalMap:ut,clearcoatRoughnessMap:V,dispersion:Mt,retroreflection:w,iridescence:_,iridescenceMap:Y,iridescenceThicknessMap:ct,sheen:N,sheenColorMap:St,sheenRoughnessMap:xt,specularMap:gt,specularColorMap:Et,specularIntensityMap:Ut,transmission:k,transmissionMap:Ft,thicknessMap:z,gradientMap:vt,opaque:g.transparent===!1&&g.blending===ys&&g.alphaToCoverage===!1,alphaMap:nt,alphaTest:yt,alphaHash:Rt,combine:g.combine,mapUv:I&&x(g.map.channel),aoMapUv:tt&&x(g.aoMap.channel),lightMapUv:et&&x(g.lightMap.channel),bumpMapUv:pt&&x(g.bumpMap.channel),normalMapUv:mt&&x(g.normalMap.channel),displacementMapUv:_t&&x(g.displacementMap.channel),emissiveMapUv:Pt&&x(g.emissiveMap.channel),metalnessMapUv:lt&&x(g.metalnessMap.channel),roughnessMapUv:Tt&&x(g.roughnessMap.channel),anisotropyMapUv:J&&x(g.anisotropyMap.channel),clearcoatMapUv:dt&&x(g.clearcoatMap.channel),clearcoatNormalMapUv:ut&&x(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&x(g.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&x(g.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&x(g.iridescenceThicknessMap.channel),sheenColorMapUv:St&&x(g.sheenColorMap.channel),sheenRoughnessMapUv:xt&&x(g.sheenRoughnessMap.channel),specularMapUv:gt&&x(g.specularMap.channel),specularColorMapUv:Et&&x(g.specularColorMap.channel),specularIntensityMapUv:Ut&&x(g.specularIntensityMap.channel),transmissionMapUv:Ft&&x(g.transmissionMap.channel),thicknessMapUv:z&&x(g.thicknessMap.channel),alphaMapUv:nt&&x(g.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(mt||L),vertexNormals:!!G.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!G.attributes.uv&&(I||nt),fog:!!U,useFog:g.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||G.attributes.normal===void 0&&mt===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:bt,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Ht,morphTextureStride:At,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Bt,decodeVideoTexture:I&&g.map.isVideoTexture===!0&&he.getTransfer(g.map.colorSpace)===Me,decodeVideoTextureEmissive:Pt&&g.emissiveMap.isVideoTexture===!0&&he.getTransfer(g.emissiveMap.colorSpace)===Me,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===En,flipSided:g.side===Ye,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:ft&&g.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ft&&g.extensions.multiDraw===!0||rt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return zt.vertexUv1s=c.has(1),zt.vertexUv2s=c.has(2),zt.vertexUv3s=c.has(3),c.clear(),zt}function m(g){let T=[];if(g.shaderID?T.push(g.shaderID):(T.push(g.customVertexShaderID),T.push(g.customFragmentShaderID)),g.defines!==void 0)for(let P in g.defines)T.push(P),T.push(g.defines[P]);return g.isRawShaderMaterial===!1&&(d(T,g),E(T,g),T.push(i.outputColorSpace)),T.push(g.customProgramCacheKey),T.join()}function d(g,T){g.push(T.precision),g.push(T.outputColorSpace),g.push(T.envMapMode),g.push(T.envMapCubeUVHeight),g.push(T.mapUv),g.push(T.alphaMapUv),g.push(T.lightMapUv),g.push(T.aoMapUv),g.push(T.bumpMapUv),g.push(T.normalMapUv),g.push(T.displacementMapUv),g.push(T.emissiveMapUv),g.push(T.metalnessMapUv),g.push(T.roughnessMapUv),g.push(T.anisotropyMapUv),g.push(T.clearcoatMapUv),g.push(T.clearcoatNormalMapUv),g.push(T.clearcoatRoughnessMapUv),g.push(T.iridescenceMapUv),g.push(T.iridescenceThicknessMapUv),g.push(T.sheenColorMapUv),g.push(T.sheenRoughnessMapUv),g.push(T.specularMapUv),g.push(T.specularColorMapUv),g.push(T.specularIntensityMapUv),g.push(T.transmissionMapUv),g.push(T.thicknessMapUv),g.push(T.combine),g.push(T.fogExp2),g.push(T.sizeAttenuation),g.push(T.morphTargetsCount),g.push(T.morphAttributeCount),g.push(T.numSunLights),g.push(T.numDirLights),g.push(T.numPointLights),g.push(T.numSpotLights),g.push(T.numSpotLightMaps),g.push(T.numHemiLights),g.push(T.numRectAreaLights),g.push(T.numSunLightShadows),g.push(T.numDirLightShadows),g.push(T.numPointLightShadows),g.push(T.numSpotLightShadows),g.push(T.numSpotLightShadowsWithMaps),g.push(T.numLightProbes),g.push(T.shadowMapType),g.push(T.toneMapping),g.push(T.numClippingPlanes),g.push(T.numClipIntersection),g.push(T.depthPacking)}function E(g,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),g.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),g.push(o.mask)}function A(g){let T=p[g.type],P;if(T){let D=Jn[T];P=Gh.clone(D.uniforms)}else P=g.uniforms;return P}function v(g,T){let P=h.get(T);return P!==void 0?++P.usedTimes:(P=new ug(i,T,g,s),l.push(P),h.set(T,P)),P}function S(g){if(--g.usedTimes===0){let T=l.indexOf(g);l[T]=l[l.length-1],l.pop(),h.delete(g.cacheKey),g.destroy()}}function M(g){a.remove(g)}function R(){a.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:A,acquireProgram:v,releaseProgram:S,releaseShaderCache:M,programs:l,dispose:R}}function mg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function gg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function cu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function hu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function a(u,p,x,y,m,d){let E=i[t];return E===void 0?(E={id:u.id,object:u,geometry:p,material:x,materialVariant:o(u),groupOrder:y,renderOrder:u.renderOrder,z:m,group:d},i[t]=E):(E.id=u.id,E.object=u,E.geometry=p,E.material=x,E.materialVariant=o(u),E.groupOrder=y,E.renderOrder=u.renderOrder,E.z=m,E.group=d),t++,E}function c(u,p,x,y,m,d,E){E.reversedDepth===!0&&(m=-m);let A=a(u,p,x,y,m,d);x.transmission>0?n.push(A):x.transparent===!0?s.push(A):e.push(A)}function l(u,p,x,y,m,d){let E=a(u,p,x,y,m,d);x.transmission>0?n.unshift(E):x.transparent===!0?s.unshift(E):e.unshift(E)}function h(u,p){e.length>1&&e.sort(u||gg),n.length>1&&n.sort(p||cu),s.length>1&&s.sort(p||cu)}function f(){for(let u=t,p=i.length;u<p;u++){let x=i[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:f,sort:h}}function xg(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new hu,i.set(n,[o])):s>=r.length?(o=new hu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function _g(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new C,color:new qt};break;case"SpotLight":e={position:new C,direction:new C,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function vg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var yg=0;function Mg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Sg(i){let t=new _g,e=vg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new C);let s=new C,r=new Qt,o=new Qt;function a(l){let h=0,f=0,u=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let p=0,x=0,y=0,m=0,d=0,E=0,A=0,v=0,S=0,M=0,R=0,g=0,T=0,P=0;l.sort(Mg);for(let F=0,H=l.length;F<H;F++){let U=l[F],G=U.color,W=U.intensity,X=U.distance,ot=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Ti?ot=U.shadow.map.texture:ot=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)h+=G.r*W,f+=G.g*W,u+=G.b*W;else if(U.isLightProbe){for(let Q=0;Q<9;Q++)n.probe[Q].addScaledVector(U.sh.coefficients[Q],W);P++}else if(U.isSunLight){let Q=t.get(U);if(Q.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let it=U.shadow,at=e.get(U);at.shadowIntensity=it.intensity,at.shadowBias=it.bias,at.shadowNormalBias=it.normalBias,at.shadowRadius=it.radius,at.shadowMapSize.copy(it.mapSize).multiply(it.getFrameExtents()),n.sunShadow[x]=at,n.sunShadowMap[x]=ot;let Ht=it.getViewportCount();for(let At=0;At<Ht;At++)n.sunShadowMatrix[y+At]=it.getMatrix(At),n.sunShadowCascade[y+At]=it._cascadeData[At];y+=Ht,x++}n.sun[p]=Q,p++}else if(U.isDirectionalLight){let Q=t.get(U);if(Q.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let it=U.shadow,at=e.get(U);at.shadowIntensity=it.intensity,at.shadowBias=it.bias,at.shadowNormalBias=it.normalBias,at.shadowRadius=it.radius,at.shadowMapSize=it.mapSize,n.directionalShadow[m]=at,n.directionalShadowMap[m]=ot,n.directionalShadowMatrix[m]=U.shadow.matrix,S++}n.directional[m]=Q,m++}else if(U.isSpotLight){let Q=t.get(U);Q.position.setFromMatrixPosition(U.matrixWorld),Q.color.copy(G).multiplyScalar(W),Q.distance=X,Q.coneCos=Math.cos(U.angle),Q.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),Q.decay=U.decay,n.spot[E]=Q;let it=U.shadow;if(U.map&&(n.spotLightMap[g]=U.map,g++,it.updateMatrices(U),U.castShadow&&T++),n.spotLightMatrix[E]=it.matrix,U.castShadow){let at=e.get(U);at.shadowIntensity=it.intensity,at.shadowBias=it.bias,at.shadowNormalBias=it.normalBias,at.shadowRadius=it.radius,at.shadowMapSize=it.mapSize,n.spotShadow[E]=at,n.spotShadowMap[E]=ot,R++}E++}else if(U.isRectAreaLight){let Q=t.get(U);Q.color.copy(G).multiplyScalar(W),Q.halfWidth.set(U.width*.5,0,0),Q.halfHeight.set(0,U.height*.5,0),n.rectArea[A]=Q,A++}else if(U.isPointLight){let Q=t.get(U);if(Q.color.copy(U.color).multiplyScalar(U.intensity),Q.distance=U.distance,Q.decay=U.decay,U.castShadow){let it=U.shadow,at=e.get(U);at.shadowIntensity=it.intensity,at.shadowBias=it.bias,at.shadowNormalBias=it.normalBias,at.shadowRadius=it.radius,at.shadowMapSize=it.mapSize,at.shadowCameraNear=it.camera.near,at.shadowCameraFar=it.camera.far,n.pointShadow[d]=at,n.pointShadowMap[d]=ot,n.pointShadowMatrix[d]=U.shadow.matrix,M++}n.point[d]=Q,d++}else if(U.isHemisphereLight){let Q=t.get(U);Q.skyColor.copy(U.color).multiplyScalar(W),Q.groundColor.copy(U.groundColor).multiplyScalar(W),n.hemi[v]=Q,v++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ct.LTC_FLOAT_1,n.rectAreaLTC2=Ct.LTC_FLOAT_2):(n.rectAreaLTC1=Ct.LTC_HALF_1,n.rectAreaLTC2=Ct.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let D=n.hash;(D.sunLength!==p||D.directionalLength!==m||D.pointLength!==d||D.spotLength!==E||D.rectAreaLength!==A||D.hemiLength!==v||D.numSunShadows!==x||D.numDirectionalShadows!==S||D.numPointShadows!==M||D.numSpotShadows!==R||D.numSpotMaps!==g||D.numLightProbes!==P)&&(n.sun.length=p,n.directional.length=m,n.spot.length=E,n.rectArea.length=A,n.point.length=d,n.hemi.length=v,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+g-T,n.spotLightMap.length=g,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=P,D.sunLength=p,D.directionalLength=m,D.pointLength=d,D.spotLength=E,D.rectAreaLength=A,D.hemiLength=v,D.numSunShadows=x,D.numDirectionalShadows=S,D.numPointShadows=M,D.numSpotShadows=R,D.numSpotMaps=g,D.numLightProbes=P,n.version=yg++)}function c(l,h){let f=0,u=0,p=0,x=0,y=0,m=0,d=h.matrixWorldInverse;for(let E=0,A=l.length;E<A;E++){let v=l[E];if(v.isSunLight){let S=n.sun[f];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(d),f++}else if(v.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(d),u++}else if(v.isSpotLight){let S=n.spot[x];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(d),S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(d),x++}else if(v.isRectAreaLight){let S=n.rectArea[y];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(d),o.identity(),r.copy(v.matrixWorld),r.premultiply(d),o.extractRotation(r),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),y++}else if(v.isPointLight){let S=n.point[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(d),p++}else if(v.isHemisphereLight){let S=n.hemi[m];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(d),m++}}}return{setup:a,setupView:c,state:n}}function uu(i){let t=new Sg(i),e=[],n=[],s=[];function r(u){f.camera=u,e.length=0,n.length=0,s.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function c(u){s.push(u)}function l(){t.setup(e)}function h(u){t.setupView(e,u)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function bg(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new uu(i),t.set(s,[a])):r>=o.length?(a=new uu(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Eg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,wg=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],Ag=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],fu=new Qt,Mr=new C,uc=new C;function Rg(i,t,e){let n=new gs,s=new Lt,r=new Lt,o=new Te,a=new Ao,c=new Ro,l={},h=e.maxTextureSize,f={[Si]:Ye,[Ye]:Si,[En]:En},u=new De({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:Eg,fragmentShader:Tg}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let x=new we;x.setAttribute("position",new be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new ve(x,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hr;let d=this.type;this.render=function(M,R,g){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;this.type===oh&&($t("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=hr);let T=i.getRenderTarget(),P=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),F=i.state;F.setBlending(qn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let H=d!==this.type;H&&R.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(G=>G.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,G=M.length;U<G;U++){let W=M[U],X=W.shadow;if(X===void 0){$t("WebGLShadowMap:",W,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let ot=X.getFrameExtents();s.multiply(ot),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ot.x),s.x=r.x*ot.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ot.y),s.y=r.y*ot.y,X.mapSize.y=r.y));let Q=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=Q,X.map===null||H===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===vs){if(W.isPointLight){$t("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Fe(s.x,s.y,{format:Ti,type:We,minFilter:Pe,magFilter:Pe,generateMipmaps:!1}),X.map.texture.name=W.name+".shadowMap",X.map.depthTexture=new Xn(s.x,s.y,wn),X.map.depthTexture.name=W.name+".shadowMapDepth",X.map.depthTexture.format=kn,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=ke,X.map.depthTexture.magFilter=ke}else W.isPointLight?(X.map=new Ua(s.x),X.map.depthTexture=new vo(s.x,Bn)):(X.map=new Fe(s.x,s.y),X.map.depthTexture=new Xn(s.x,s.y,Bn)),X.map.depthTexture.name=W.name+".shadowMap",X.map.depthTexture.format=kn,this.type===hr?(X.map.depthTexture.compareFunction=Q?La:Ia,X.map.depthTexture.minFilter=Pe,X.map.depthTexture.magFilter=Pe):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=ke,X.map.depthTexture.magFilter=ke);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==s.x||X.map.height!==s.y)&&X.map.setSize(s.x,s.y);let it=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();W.isPointLight!==!0&&X.updateMatrices(W,g);for(let at=0;at<it;at++){let Ht=X.getCamera(at);if(W.isPointLight){let At=X.camera,re=X.matrix,Jt=W.distance||At.far;Jt!==At.far&&(At.far=Jt,At.updateProjectionMatrix()),Mr.setFromMatrixPosition(W.matrixWorld),At.position.copy(Mr),uc.copy(At.position),uc.add(wg[at]),At.up.copy(Ag[at]),At.lookAt(uc),At.updateMatrixWorld(),re.makeTranslation(-Mr.x,-Mr.y,-Mr.z),fu.multiplyMatrices(At.projectionMatrix,At.matrixWorldInverse),X._frustum.setFromProjectionMatrix(fu,At.coordinateSystem,At.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,at),i.clear();else{at===0&&(i.setRenderTarget(X.map),i.clear());let At=X.getViewport(at);o.set(r.x*At.x,r.y*At.y,r.x*At.z,r.y*At.w),F.viewport(o)}n=X.getFrustum(at),v(R,g,Ht,W,this.type)}X.isPointLightShadow!==!0&&this.type===vs&&E(X,g),X.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(T,P,D)};function E(M,R){let g=t.update(y);u.defines.VSM_SAMPLES!==M.blurSamples&&(u.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null?M.mapPass=new Fe(s.x,s.y,{format:Ti,type:We}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),u.uniforms.shadow_pass.value=M.map.depthTexture,u.uniforms.resolution.value.set(M.map.width,M.map.height),u.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(R,null,g,u,y,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value.set(M.map.width,M.map.height),p.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(R,null,g,p,y,null)}function A(M,R,g,T){let P=null,D=g.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(D!==void 0)P=D;else if(P=g.isPointLight===!0?c:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let F=P.uuid,H=R.uuid,U=l[F];U===void 0&&(U={},l[F]=U);let G=U[H];G===void 0&&(G=P.clone(),U[H]=G,R.addEventListener("dispose",S)),P=G}if(P.visible=R.visible,P.wireframe=R.wireframe,T===vs?P.side=R.shadowSide!==null?R.shadowSide:R.side:P.side=R.shadowSide!==null?R.shadowSide:f[R.side],P.alphaMap=R.alphaMap,P.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,P.map=R.map,P.clipShadows=R.clipShadows,P.clippingPlanes=R.clippingPlanes,P.clipIntersection=R.clipIntersection,P.displacementMap=R.displacementMap,P.displacementScale=R.displacementScale,P.displacementBias=R.displacementBias,P.wireframeLinewidth=R.wireframeLinewidth,P.linewidth=R.linewidth,g.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let F=i.properties.get(P);F.light=g}return P}function v(M,R,g,T,P){if(M.visible===!1)return;if(M.layers.test(R.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&P===vs)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,M.matrixWorld);let H=t.update(M),U=M.material;if(Array.isArray(U)){let G=H.groups;for(let W=0,X=G.length;W<X;W++){let ot=G[W],Q=U[ot.materialIndex];if(Q&&Q.visible){let it=A(M,Q,T,P);M.onBeforeShadow(i,M,R,g,H,it,ot),i.renderBufferDirect(g,null,H,it,M,ot),M.onAfterShadow(i,M,R,g,H,it,ot)}}}else if(U.visible){let G=A(M,U,T,P);M.onBeforeShadow(i,M,R,g,H,G,null),i.renderBufferDirect(g,null,H,G,M,null),M.onAfterShadow(i,M,R,g,H,G,null)}}let F=M.children;for(let H=0,U=F.length;H<U;H++)v(F[H],R,g,T,P)}function S(M){M.target.removeEventListener("dispose",S);for(let g in l){let T=l[g],P=M.target.uuid;P in T&&(T[P].dispose(),delete T[P])}}}function Cg(i,t){function e(){let z=!1,vt=new Te,nt=null,yt=new Te(0,0,0,0);return{setMask:function(Rt){nt!==Rt&&!z&&(i.colorMask(Rt,Rt,Rt,Rt),nt=Rt)},setLocked:function(Rt){z=Rt},setClear:function(Rt,ft,Bt,zt,me){me===!0&&(Rt*=zt,ft*=zt,Bt*=zt),vt.set(Rt,ft,Bt,zt),yt.equals(vt)===!1&&(i.clearColor(Rt,ft,Bt,zt),yt.copy(vt))},reset:function(){z=!1,nt=null,yt.set(-1,0,0,0)}}}function n(){let z=!1,vt=!1,nt=null,yt=null,Rt=null;return{setReversed:function(ft){if(vt!==ft){let Bt=t.get("EXT_clip_control");ft?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),vt=ft;let zt=Rt;Rt=null,this.setClear(zt)}},getReversed:function(){return vt},setTest:function(ft){ft?st(i.DEPTH_TEST):bt(i.DEPTH_TEST)},setMask:function(ft){nt!==ft&&!z&&(i.depthMask(ft),nt=ft)},setFunc:function(ft){if(vt&&(ft=Vh[ft]),yt!==ft){switch(ft){case io:i.depthFunc(i.NEVER);break;case so:i.depthFunc(i.ALWAYS);break;case ro:i.depthFunc(i.LESS);break;case hs:i.depthFunc(i.LEQUAL);break;case oo:i.depthFunc(i.EQUAL);break;case ao:i.depthFunc(i.GEQUAL);break;case lo:i.depthFunc(i.GREATER);break;case co:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}yt=ft}},setLocked:function(ft){z=ft},setClear:function(ft){Rt!==ft&&(Rt=ft,vt&&(ft=1-ft),i.clearDepth(ft))},reset:function(){z=!1,nt=null,yt=null,Rt=null,vt=!1}}}function s(){let z=!1,vt=null,nt=null,yt=null,Rt=null,ft=null,Bt=null,zt=null,me=null;return{setTest:function(fe){z||(fe?st(i.STENCIL_TEST):bt(i.STENCIL_TEST))},setMask:function(fe){vt!==fe&&!z&&(i.stencilMask(fe),vt=fe)},setFunc:function(fe,an,hn){(nt!==fe||yt!==an||Rt!==hn)&&(i.stencilFunc(fe,an,hn),nt=fe,yt=an,Rt=hn)},setOp:function(fe,an,hn){(ft!==fe||Bt!==an||zt!==hn)&&(i.stencilOp(fe,an,hn),ft=fe,Bt=an,zt=hn)},setLocked:function(fe){z=fe},setClear:function(fe){me!==fe&&(i.clearStencil(fe),me=fe)},reset:function(){z=!1,vt=null,nt=null,yt=null,Rt=null,ft=null,Bt=null,zt=null,me=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},f={},u={},p=new WeakMap,x=[],y=null,m=!1,d=null,E=null,A=null,v=null,S=null,M=null,R=null,g=new qt(0,0,0),T=0,P=!1,D=null,F=null,H=null,U=null,G=null,W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,ot=0,Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(Q)[1]),X=ot>=1):Q.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),X=ot>=2);let it=null,at={},Ht=i.getParameter(i.SCISSOR_BOX),At=i.getParameter(i.VIEWPORT),re=new Te().fromArray(Ht),Jt=new Te().fromArray(At);function te(z,vt,nt,yt){let Rt=new Uint8Array(4),ft=i.createTexture();i.bindTexture(z,ft),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Bt=0;Bt<nt;Bt++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(vt,0,i.RGBA,1,1,yt,0,i.RGBA,i.UNSIGNED_BYTE,Rt):i.texImage2D(vt+Bt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Rt);return ft}let j={};j[i.TEXTURE_2D]=te(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),st(i.DEPTH_TEST),o.setFunc(hs),pt(!1),mt(Rl),st(i.CULL_FACE),tt(qn);function st(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function bt(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function Xt(z,vt){return u[z]!==vt?(i.bindFramebuffer(z,vt),u[z]=vt,z===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=vt),z===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=vt),!0):!1}function rt(z,vt){let nt=x,yt=!1;if(z){nt=p.get(vt),nt===void 0&&(nt=[],p.set(vt,nt));let Rt=z.textures;if(nt.length!==Rt.length||nt[0]!==i.COLOR_ATTACHMENT0){for(let ft=0,Bt=Rt.length;ft<Bt;ft++)nt[ft]=i.COLOR_ATTACHMENT0+ft;nt.length=Rt.length,yt=!0}}else nt[0]!==i.BACK&&(nt[0]=i.BACK,yt=!0);yt&&i.drawBuffers(nt)}function I(z){return y!==z?(i.useProgram(z),y=z,!0):!1}let B={[zi]:i.FUNC_ADD,[lh]:i.FUNC_SUBTRACT,[ch]:i.FUNC_REVERSE_SUBTRACT};B[hh]=i.MIN,B[uh]=i.MAX;let $={[fh]:i.ZERO,[dh]:i.ONE,[ph]:i.SRC_COLOR,[Il]:i.SRC_ALPHA,[yh]:i.SRC_ALPHA_SATURATE,[_h]:i.DST_COLOR,[gh]:i.DST_ALPHA,[mh]:i.ONE_MINUS_SRC_COLOR,[Ll]:i.ONE_MINUS_SRC_ALPHA,[vh]:i.ONE_MINUS_DST_COLOR,[xh]:i.ONE_MINUS_DST_ALPHA,[Mh]:i.CONSTANT_COLOR,[Sh]:i.ONE_MINUS_CONSTANT_COLOR,[bh]:i.CONSTANT_ALPHA,[Eh]:i.ONE_MINUS_CONSTANT_ALPHA};function tt(z,vt,nt,yt,Rt,ft,Bt,zt,me,fe){if(z===qn){m===!0&&(bt(i.BLEND),m=!1);return}if(m===!1&&(st(i.BLEND),m=!0),z!==ah){if(z!==d||fe!==P){if((E!==zi||S!==zi)&&(i.blendEquation(i.FUNC_ADD),E=zi,S=zi),fe)switch(z){case ys:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Tn:i.blendFunc(i.ONE,i.ONE);break;case Cl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Kt("WebGLState: Invalid blending: ",z);break}else switch(z){case ys:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Tn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Cl:Kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Pl:Kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Kt("WebGLState: Invalid blending: ",z);break}A=null,v=null,M=null,R=null,g.set(0,0,0),T=0,d=z,P=fe}return}Rt=Rt||vt,ft=ft||nt,Bt=Bt||yt,(vt!==E||Rt!==S)&&(i.blendEquationSeparate(B[vt],B[Rt]),E=vt,S=Rt),(nt!==A||yt!==v||ft!==M||Bt!==R)&&(i.blendFuncSeparate($[nt],$[yt],$[ft],$[Bt]),A=nt,v=yt,M=ft,R=Bt),(zt.equals(g)===!1||me!==T)&&(i.blendColor(zt.r,zt.g,zt.b,me),g.copy(zt),T=me),d=z,P=!1}function et(z,vt){z.side===En?bt(i.CULL_FACE):st(i.CULL_FACE);let nt=z.side===Ye;vt&&(nt=!nt),pt(nt),z.blending===ys&&z.transparent===!1?tt(qn):tt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);let yt=z.stencilWrite;a.setTest(yt),yt&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Pt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function pt(z){D!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),D=z)}function mt(z){z!==sh?(st(i.CULL_FACE),z!==F&&(z===Rl?i.cullFace(i.BACK):z===rh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):bt(i.CULL_FACE),F=z}function _t(z){z!==H&&(X&&i.lineWidth(z),H=z)}function Pt(z,vt,nt){z?(st(i.POLYGON_OFFSET_FILL),(U!==vt||G!==nt)&&(U=vt,G=nt,o.getReversed()&&(vt=-vt),i.polygonOffset(vt,nt))):bt(i.POLYGON_OFFSET_FILL)}function lt(z){z?st(i.SCISSOR_TEST):bt(i.SCISSOR_TEST)}function Tt(z){z===void 0&&(z=i.TEXTURE0+W-1),it!==z&&(i.activeTexture(z),it=z)}function L(z,vt,nt){nt===void 0&&(it===null?nt=i.TEXTURE0+W-1:nt=it);let yt=at[nt];yt===void 0&&(yt={type:void 0,texture:void 0},at[nt]=yt),(yt.type!==z||yt.texture!==vt)&&(it!==nt&&(i.activeTexture(nt),it=nt),i.bindTexture(z,vt||j[z]),yt.type=z,yt.texture=vt)}function Dt(){let z=at[it];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Mt(){try{i.compressedTexImage2D(...arguments)}catch(z){Kt("WebGLState:",z)}}function w(){try{i.compressedTexImage3D(...arguments)}catch(z){Kt("WebGLState:",z)}}function _(){try{i.texSubImage2D(...arguments)}catch(z){Kt("WebGLState:",z)}}function N(){try{i.texSubImage3D(...arguments)}catch(z){Kt("WebGLState:",z)}}function k(){try{i.compressedTexSubImage2D(...arguments)}catch(z){Kt("WebGLState:",z)}}function J(){try{i.compressedTexSubImage3D(...arguments)}catch(z){Kt("WebGLState:",z)}}function dt(){try{i.texStorage2D(...arguments)}catch(z){Kt("WebGLState:",z)}}function ut(){try{i.texStorage3D(...arguments)}catch(z){Kt("WebGLState:",z)}}function V(){try{i.texImage2D(...arguments)}catch(z){Kt("WebGLState:",z)}}function Y(){try{i.texImage3D(...arguments)}catch(z){Kt("WebGLState:",z)}}function ct(z){return f[z]!==void 0?f[z]:i.getParameter(z)}function St(z,vt){f[z]!==vt&&(i.pixelStorei(z,vt),f[z]=vt)}function xt(z){re.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),re.copy(z))}function gt(z){Jt.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),Jt.copy(z))}function Et(z,vt){let nt=l.get(vt);nt===void 0&&(nt=new WeakMap,l.set(vt,nt));let yt=nt.get(z);yt===void 0&&(yt=i.getUniformBlockIndex(vt,z.name),nt.set(z,yt))}function Ut(z,vt){let yt=l.get(vt).get(z);c.get(vt)!==yt&&(i.uniformBlockBinding(vt,yt,z.__bindingPointIndex),c.set(vt,yt))}function Ft(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},it=null,at={},u={},p=new WeakMap,x=[],y=null,m=!1,d=null,E=null,A=null,v=null,S=null,M=null,R=null,g=new qt(0,0,0),T=0,P=!1,D=null,F=null,H=null,U=null,G=null,re.set(0,0,i.canvas.width,i.canvas.height),Jt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:st,disable:bt,bindFramebuffer:Xt,drawBuffers:rt,useProgram:I,setBlending:tt,setMaterial:et,setFlipSided:pt,setCullFace:mt,setLineWidth:_t,setPolygonOffset:Pt,setScissorTest:lt,activeTexture:Tt,bindTexture:L,unbindTexture:Dt,compressedTexImage2D:Mt,compressedTexImage3D:w,texImage2D:V,texImage3D:Y,pixelStorei:St,getParameter:ct,updateUBOMapping:Et,uniformBlockBinding:Ut,texStorage2D:dt,texStorage3D:ut,texSubImage2D:_,texSubImage3D:N,compressedTexSubImage2D:k,compressedTexSubImage3D:J,scissor:xt,viewport:gt,reset:Ft}}function Pg(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Lt,h=new WeakMap,f=new Set,u,p=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(w,_){return x?new OffscreenCanvas(w,_):qs("canvas")}function m(w,_,N){let k=1,J=Mt(w);if((J.width>N||J.height>N)&&(k=N/Math.max(J.width,J.height)),k<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let dt=Math.floor(k*J.width),ut=Math.floor(k*J.height);u===void 0&&(u=y(dt,ut));let V=_?y(dt,ut):u;return V.width=dt,V.height=ut,V.getContext("2d").drawImage(w,0,0,dt,ut),$t("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+dt+"x"+ut+")."),V}else return"data"in w&&$t("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),w;return w}function d(w){return w.generateMipmaps}function E(w){i.generateMipmap(w)}function A(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(w,_,N,k,J,dt=!1){if(w!==null){if(i[w]!==void 0)return i[w];$t("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ut;k&&(ut=t.get("EXT_texture_norm16"),ut||$t("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let V=_;if(_===i.RED&&(N===i.FLOAT&&(V=i.R32F),N===i.HALF_FLOAT&&(V=i.R16F),N===i.UNSIGNED_BYTE&&(V=i.R8),N===i.UNSIGNED_SHORT&&ut&&(V=ut.R16_EXT),N===i.SHORT&&ut&&(V=ut.R16_SNORM_EXT)),_===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(V=i.R8UI),N===i.UNSIGNED_SHORT&&(V=i.R16UI),N===i.UNSIGNED_INT&&(V=i.R32UI),N===i.BYTE&&(V=i.R8I),N===i.SHORT&&(V=i.R16I),N===i.INT&&(V=i.R32I)),_===i.RG&&(N===i.FLOAT&&(V=i.RG32F),N===i.HALF_FLOAT&&(V=i.RG16F),N===i.UNSIGNED_BYTE&&(V=i.RG8),N===i.UNSIGNED_SHORT&&ut&&(V=ut.RG16_EXT),N===i.SHORT&&ut&&(V=ut.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(V=i.RG8UI),N===i.UNSIGNED_SHORT&&(V=i.RG16UI),N===i.UNSIGNED_INT&&(V=i.RG32UI),N===i.BYTE&&(V=i.RG8I),N===i.SHORT&&(V=i.RG16I),N===i.INT&&(V=i.RG32I)),_===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(V=i.RGB8UI),N===i.UNSIGNED_SHORT&&(V=i.RGB16UI),N===i.UNSIGNED_INT&&(V=i.RGB32UI),N===i.BYTE&&(V=i.RGB8I),N===i.SHORT&&(V=i.RGB16I),N===i.INT&&(V=i.RGB32I)),_===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(V=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(V=i.RGBA16UI),N===i.UNSIGNED_INT&&(V=i.RGBA32UI),N===i.BYTE&&(V=i.RGBA8I),N===i.SHORT&&(V=i.RGBA16I),N===i.INT&&(V=i.RGBA32I)),_===i.RGB&&(N===i.UNSIGNED_SHORT&&ut&&(V=ut.RGB16_EXT),N===i.SHORT&&ut&&(V=ut.RGB16_SNORM_EXT),N===i.UNSIGNED_INT_5_9_9_9_REV&&(V=i.RGB9_E5),N===i.UNSIGNED_INT_10F_11F_11F_REV&&(V=i.R11F_G11F_B10F)),_===i.RGBA){let Y=dt?Xs:he.getTransfer(J);N===i.FLOAT&&(V=i.RGBA32F),N===i.HALF_FLOAT&&(V=i.RGBA16F),N===i.UNSIGNED_BYTE&&(V=Y===Me?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT&&ut&&(V=ut.RGBA16_EXT),N===i.SHORT&&ut&&(V=ut.RGBA16_SNORM_EXT),N===i.UNSIGNED_SHORT_4_4_4_4&&(V=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(V=i.RGB5_A1)}return(V===i.R16F||V===i.R32F||V===i.RG16F||V===i.RG32F||V===i.RGBA16F||V===i.RGBA32F)&&t.get("EXT_color_buffer_float"),V}function S(w,_){let N;return w?_===null||_===Bn||_===Ss?N=i.DEPTH24_STENCIL8:_===wn?N=i.DEPTH32F_STENCIL8:_===Ms&&(N=i.DEPTH24_STENCIL8,$t("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Bn||_===Ss?N=i.DEPTH_COMPONENT24:_===wn?N=i.DEPTH_COMPONENT32F:_===Ms&&(N=i.DEPTH_COMPONENT16),N}function M(w,_){return d(w)===!0||w.isFramebufferTexture&&w.minFilter!==ke&&w.minFilter!==Pe?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function R(w){let _=w.target;_.removeEventListener("dispose",R),T(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&f.delete(_)}function g(w){let _=w.target;_.removeEventListener("dispose",g),D(_)}function T(w){let _=n.get(w);if(_.__webglInit===void 0)return;let N=w.source,k=p.get(N);if(k){let J=k[_.__cacheKey];J.usedTimes--,J.usedTimes===0&&P(w),Object.keys(k).length===0&&p.delete(N)}n.remove(w)}function P(w){let _=n.get(w);i.deleteTexture(_.__webglTexture);let N=w.source,k=p.get(N);delete k[_.__cacheKey],o.memory.textures--}function D(w){let _=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(_.__webglFramebuffer[k]))for(let J=0;J<_.__webglFramebuffer[k].length;J++)i.deleteFramebuffer(_.__webglFramebuffer[k][J]);else i.deleteFramebuffer(_.__webglFramebuffer[k]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[k])}else{if(Array.isArray(_.__webglFramebuffer))for(let k=0;k<_.__webglFramebuffer.length;k++)i.deleteFramebuffer(_.__webglFramebuffer[k]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let k=0;k<_.__webglColorRenderbuffer.length;k++)_.__webglColorRenderbuffer[k]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[k]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let N=w.textures;for(let k=0,J=N.length;k<J;k++){let dt=n.get(N[k]);dt.__webglTexture&&(i.deleteTexture(dt.__webglTexture),o.memory.textures--),n.remove(N[k])}n.remove(w)}let F=0;function H(){F=0}function U(){return F}function G(w){F=w}function W(){let w=F;return w>=s.maxTextures&&$t("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,w}function X(w){let _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function ot(w,_){let N=n.get(w);if(w.isVideoTexture&&L(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&N.__version!==w.version){let k=w.image;if(k===null)$t("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)$t("WebGLRenderer: Texture marked for update but image is incomplete");else{bt(N,w,_);return}}else w.isExternalTexture&&(N.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+_)}function Q(w,_){let N=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&N.__version!==w.version){bt(N,w,_);return}else w.isExternalTexture&&(N.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+_)}function it(w,_){let N=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&N.__version!==w.version){bt(N,w,_);return}e.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+_)}function at(w,_){let N=n.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&N.__version!==w.version){Xt(N,w,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+_)}let Ht={[ho]:i.REPEAT,[Mn]:i.CLAMP_TO_EDGE,[uo]:i.MIRRORED_REPEAT},At={[ke]:i.NEAREST,[Ah]:i.NEAREST_MIPMAP_NEAREST,[fr]:i.NEAREST_MIPMAP_LINEAR,[Pe]:i.LINEAR,[qo]:i.LINEAR_MIPMAP_NEAREST,[Yn]:i.LINEAR_MIPMAP_LINEAR},re={[Ih]:i.NEVER,[Fh]:i.ALWAYS,[Lh]:i.LESS,[Ia]:i.LEQUAL,[Dh]:i.EQUAL,[La]:i.GEQUAL,[Nh]:i.GREATER,[Uh]:i.NOTEQUAL};function Jt(w,_){if(_.type===wn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Pe||_.magFilter===qo||_.magFilter===fr||_.magFilter===Yn||_.minFilter===Pe||_.minFilter===qo||_.minFilter===fr||_.minFilter===Yn)&&$t("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,Ht[_.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,Ht[_.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,Ht[_.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,At[_.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,At[_.minFilter]),_.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,re[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===ke||_.minFilter!==fr&&_.minFilter!==Yn||_.type===wn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let N=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function te(w,_){let N=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",R));let k=_.source,J=p.get(k);J===void 0&&(J={},p.set(k,J));let dt=X(_);if(dt!==w.__cacheKey){J[dt]===void 0&&(J[dt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,N=!0),J[dt].usedTimes++;let ut=J[w.__cacheKey];ut!==void 0&&(J[w.__cacheKey].usedTimes--,ut.usedTimes===0&&P(_)),w.__cacheKey=dt,w.__webglTexture=J[dt].texture}return N}function j(w,_,N){return Math.floor(Math.floor(w/N)/_)}function st(w,_,N,k){let dt=w.updateRanges;if(dt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,N,k,_.data);else{dt.sort((St,xt)=>St.start-xt.start);let ut=0;for(let St=1;St<dt.length;St++){let xt=dt[ut],gt=dt[St],Et=xt.start+xt.count,Ut=j(gt.start,_.width,4),Ft=j(xt.start,_.width,4);gt.start<=Et+1&&Ut===Ft&&j(gt.start+gt.count-1,_.width,4)===Ut?xt.count=Math.max(xt.count,gt.start+gt.count-xt.start):(++ut,dt[ut]=gt)}dt.length=ut+1;let V=e.getParameter(i.UNPACK_ROW_LENGTH),Y=e.getParameter(i.UNPACK_SKIP_PIXELS),ct=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let St=0,xt=dt.length;St<xt;St++){let gt=dt[St],Et=Math.floor(gt.start/4),Ut=Math.ceil(gt.count/4),Ft=Et%_.width,z=Math.floor(Et/_.width),vt=Ut,nt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Ft),e.pixelStorei(i.UNPACK_SKIP_ROWS,z),e.texSubImage2D(i.TEXTURE_2D,0,Ft,z,vt,nt,N,k,_.data)}w.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,V),e.pixelStorei(i.UNPACK_SKIP_PIXELS,Y),e.pixelStorei(i.UNPACK_SKIP_ROWS,ct)}}function bt(w,_,N){let k=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(k=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(k=i.TEXTURE_3D);let J=te(w,_),dt=_.source;e.bindTexture(k,w.__webglTexture,i.TEXTURE0+N);let ut=n.get(dt);if(dt.version!==ut.__version||J===!0){if(e.activeTexture(i.TEXTURE0+N),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let nt=he.getPrimaries(he.workingColorSpace),yt=_.colorSpace===zn?null:he.getPrimaries(_.colorSpace),Rt=_.colorSpace===zn||nt===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let Y=m(_.image,!1,s.maxTextureSize);Y=Dt(_,Y);let ct=r.convert(_.format,_.colorSpace),St=r.convert(_.type),xt=v(_.internalFormat,ct,St,_.normalized,_.colorSpace,_.isVideoTexture);Jt(k,_);let gt,Et=_.mipmaps,Ut=_.isVideoTexture!==!0,Ft=ut.__version===void 0||J===!0,z=dt.dataReady,vt=M(_,Y);if(_.isDepthTexture)xt=S(_.format===Ei,_.type),Ft&&(Ut?e.texStorage2D(i.TEXTURE_2D,1,xt,Y.width,Y.height):e.texImage2D(i.TEXTURE_2D,0,xt,Y.width,Y.height,0,ct,St,null));else if(_.isDataTexture)if(Et.length>0){Ut&&Ft&&e.texStorage2D(i.TEXTURE_2D,vt,xt,Et[0].width,Et[0].height);for(let nt=0,yt=Et.length;nt<yt;nt++)gt=Et[nt],Ut?z&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,gt.width,gt.height,ct,St,gt.data):e.texImage2D(i.TEXTURE_2D,nt,xt,gt.width,gt.height,0,ct,St,gt.data);_.generateMipmaps=!1}else Ut?(Ft&&e.texStorage2D(i.TEXTURE_2D,vt,xt,Y.width,Y.height),z&&st(_,Y,ct,St)):e.texImage2D(i.TEXTURE_2D,0,xt,Y.width,Y.height,0,ct,St,Y.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ut&&Ft&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,xt,Et[0].width,Et[0].height,Y.depth);for(let nt=0,yt=Et.length;nt<yt;nt++)if(gt=Et[nt],_.format!==An)if(ct!==null)if(Ut){if(z)if(_.layerUpdates.size>0){let Rt=tc(gt.width,gt.height,_.format,_.type);for(let ft of _.layerUpdates){let Bt=gt.data.subarray(ft*Rt/gt.data.BYTES_PER_ELEMENT,(ft+1)*Rt/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,ft,gt.width,gt.height,1,ct,Bt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,gt.width,gt.height,Y.depth,ct,gt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,nt,xt,gt.width,gt.height,Y.depth,0,gt.data,0,0);else $t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?z&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,gt.width,gt.height,Y.depth,ct,St,gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,nt,xt,gt.width,gt.height,Y.depth,0,ct,St,gt.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Ut&&Ft&&e.texStorage2D(i.TEXTURE_2D,vt,xt,Et[0].width,Et[0].height);for(let nt=0,yt=Et.length;nt<yt;nt++)gt=Et[nt],_.format!==An?ct!==null?Ut?z&&e.compressedTexSubImage2D(i.TEXTURE_2D,nt,0,0,gt.width,gt.height,ct,gt.data):e.compressedTexImage2D(i.TEXTURE_2D,nt,xt,gt.width,gt.height,0,gt.data):$t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?z&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,gt.width,gt.height,ct,St,gt.data):e.texImage2D(i.TEXTURE_2D,nt,xt,gt.width,gt.height,0,ct,St,gt.data)}else if(_.isDataArrayTexture)if(Ut){if(Ft&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,xt,Y.width,Y.height,Y.depth),z)if(_.layerUpdates.size>0){let nt=tc(Y.width,Y.height,_.format,_.type);for(let yt of _.layerUpdates){let Rt=Y.data.subarray(yt*nt/Y.data.BYTES_PER_ELEMENT,(yt+1)*nt/Y.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,yt,Y.width,Y.height,1,ct,St,Rt)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,ct,St,Y.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,xt,Y.width,Y.height,Y.depth,0,ct,St,Y.data);else if(_.isData3DTexture)Ut?(Ft&&e.texStorage3D(i.TEXTURE_3D,vt,xt,Y.width,Y.height,Y.depth),z&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,ct,St,Y.data)):e.texImage3D(i.TEXTURE_3D,0,xt,Y.width,Y.height,Y.depth,0,ct,St,Y.data);else if(_.isFramebufferTexture){if(Ft)if(Ut)e.texStorage2D(i.TEXTURE_2D,vt,xt,Y.width,Y.height);else{let nt=Y.width,yt=Y.height;for(let Rt=0;Rt<vt;Rt++)e.texImage2D(i.TEXTURE_2D,Rt,xt,nt,yt,0,ct,St,null),nt>>=1,yt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let nt=i.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),Y.parentNode!==nt){nt.appendChild(Y),f.add(_),nt.onpaint=yt=>{let Rt=yt.changedElements;for(let ft of f)Rt.includes(ft.image)&&(ft.needsUpdate=!0)},nt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Y);else{let Rt=i.RGBA,ft=i.RGBA,Bt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Rt,ft,Bt,Y)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Et.length>0){if(Ut&&Ft){let nt=Mt(Et[0]);e.texStorage2D(i.TEXTURE_2D,vt,xt,nt.width,nt.height)}for(let nt=0,yt=Et.length;nt<yt;nt++)gt=Et[nt],Ut?z&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,ct,St,gt):e.texImage2D(i.TEXTURE_2D,nt,xt,ct,St,gt);_.generateMipmaps=!1}else if(Ut){if(Ft){let nt=Mt(Y);e.texStorage2D(i.TEXTURE_2D,vt,xt,nt.width,nt.height)}z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct,St,Y)}else e.texImage2D(i.TEXTURE_2D,0,xt,ct,St,Y);d(_)&&E(k),ut.__version=dt.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function Xt(w,_,N){if(_.image.length!==6)return;let k=te(w,_),J=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+N);let dt=n.get(J);if(J.version!==dt.__version||k===!0){e.activeTexture(i.TEXTURE0+N);let ut=he.getPrimaries(he.workingColorSpace),V=_.colorSpace===zn?null:he.getPrimaries(_.colorSpace),Y=_.colorSpace===zn||ut===V?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y);let ct=_.isCompressedTexture||_.image[0].isCompressedTexture,St=_.image[0]&&_.image[0].isDataTexture,xt=[];for(let ft=0;ft<6;ft++)!ct&&!St?xt[ft]=m(_.image[ft],!0,s.maxCubemapSize):xt[ft]=St?_.image[ft].image:_.image[ft],xt[ft]=Dt(_,xt[ft]);let gt=xt[0],Et=r.convert(_.format,_.colorSpace),Ut=r.convert(_.type),Ft=v(_.internalFormat,Et,Ut,_.normalized,_.colorSpace),z=_.isVideoTexture!==!0,vt=dt.__version===void 0||k===!0,nt=J.dataReady,yt=M(_,gt);Jt(i.TEXTURE_CUBE_MAP,_);let Rt;if(ct){z&&vt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,Ft,gt.width,gt.height);for(let ft=0;ft<6;ft++){Rt=xt[ft].mipmaps;for(let Bt=0;Bt<Rt.length;Bt++){let zt=Rt[Bt];_.format!==An?Et!==null?z?nt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Bt,0,0,zt.width,zt.height,Et,zt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Bt,Ft,zt.width,zt.height,0,zt.data):$t("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Bt,0,0,zt.width,zt.height,Et,Ut,zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Bt,Ft,zt.width,zt.height,0,Et,Ut,zt.data)}}}else{if(Rt=_.mipmaps,z&&vt){Rt.length>0&&yt++;let ft=Mt(xt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,Ft,ft.width,ft.height)}for(let ft=0;ft<6;ft++)if(St){z?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,xt[ft].width,xt[ft].height,Et,Ut,xt[ft].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,Ft,xt[ft].width,xt[ft].height,0,Et,Ut,xt[ft].data);for(let Bt=0;Bt<Rt.length;Bt++){let me=Rt[Bt].image[ft].image;z?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Bt+1,0,0,me.width,me.height,Et,Ut,me.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Bt+1,Ft,me.width,me.height,0,Et,Ut,me.data)}}else{z?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Et,Ut,xt[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,Ft,Et,Ut,xt[ft]);for(let Bt=0;Bt<Rt.length;Bt++){let zt=Rt[Bt];z?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Bt+1,0,0,Et,Ut,zt.image[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Bt+1,Ft,Et,Ut,zt.image[ft])}}}d(_)&&E(i.TEXTURE_CUBE_MAP),dt.__version=J.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function rt(w,_,N,k,J,dt){let ut=r.convert(N.format,N.colorSpace),V=r.convert(N.type),Y=v(N.internalFormat,ut,V,N.normalized,N.colorSpace),ct=n.get(_),St=n.get(N);if(St.__renderTarget=_,!ct.__hasExternalTextures){let xt=Math.max(1,_.width>>dt),gt=Math.max(1,_.height>>dt);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,dt,Y,xt,gt,_.depth,0,ut,V,null):e.texImage2D(J,dt,Y,xt,gt,0,ut,V,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),Tt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,k,J,St.__webglTexture,0,lt(_)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,k,J,St.__webglTexture,dt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function I(w,_,N){if(i.bindRenderbuffer(i.RENDERBUFFER,w),_.depthBuffer){let k=_.depthTexture,J=k&&k.isDepthTexture?k.type:null,dt=S(_.stencilBuffer,J),ut=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Tt(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt(_),dt,_.width,_.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt(_),dt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,dt,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ut,i.RENDERBUFFER,w)}else{let k=_.textures;for(let J=0;J<k.length;J++){let dt=k[J],ut=r.convert(dt.format,dt.colorSpace),V=r.convert(dt.type),Y=v(dt.internalFormat,ut,V,dt.normalized,dt.colorSpace);Tt(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt(_),Y,_.width,_.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt(_),Y,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Y,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function B(w,_,N){let k=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=n.get(_.depthTexture);if(J.__renderTarget=_,(!J.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),k){if(J.__webglInit===void 0&&(J.__webglInit=!0,_.depthTexture.addEventListener("dispose",R)),J.__webglTexture===void 0){J.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Jt(i.TEXTURE_CUBE_MAP,_.depthTexture);let ct=r.convert(_.depthTexture.format),St=r.convert(_.depthTexture.type),xt;_.depthTexture.format===kn?xt=i.DEPTH_COMPONENT24:_.depthTexture.format===Ei&&(xt=i.DEPTH24_STENCIL8);for(let gt=0;gt<6;gt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,xt,_.width,_.height,0,ct,St,null)}}else ot(_.depthTexture,0);let dt=J.__webglTexture,ut=lt(_),V=k?i.TEXTURE_CUBE_MAP_POSITIVE_X+N:i.TEXTURE_2D,Y=_.depthTexture.format===Ei?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===kn)Tt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,V,dt,0,ut):i.framebufferTexture2D(i.FRAMEBUFFER,Y,V,dt,0);else if(_.depthTexture.format===Ei)Tt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,V,dt,0,ut):i.framebufferTexture2D(i.FRAMEBUFFER,Y,V,dt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $(w){let _=n.get(w),N=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){let k=w.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),k){let J=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,k.removeEventListener("dispose",J)};k.addEventListener("dispose",J),_.__depthDisposeCallback=J}_.__boundDepthTexture=k}if(w.depthTexture&&!_.__autoAllocateDepthBuffer)if(N)for(let k=0;k<6;k++)B(_.__webglFramebuffer[k],w,k);else{let k=w.texture.mipmaps;k&&k.length>0?B(_.__webglFramebuffer[0],w,0):B(_.__webglFramebuffer,w,0)}else if(N){_.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[k]),_.__webglDepthbuffer[k]===void 0)_.__webglDepthbuffer[k]=i.createRenderbuffer(),I(_.__webglDepthbuffer[k],w,!1);else{let J=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=_.__webglDepthbuffer[k];i.bindRenderbuffer(i.RENDERBUFFER,dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,dt)}}else{let k=w.texture.mipmaps;if(k&&k.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),I(_.__webglDepthbuffer,w,!1);else{let J=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,dt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function tt(w,_,N){let k=n.get(w);_!==void 0&&rt(k.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&$(w)}function et(w){let _=w.texture,N=n.get(w),k=n.get(_);w.addEventListener("dispose",g);let J=w.textures,dt=w.isWebGLCubeRenderTarget===!0,ut=J.length>1;if(ut||(k.__webglTexture===void 0&&(k.__webglTexture=i.createTexture()),k.__version=_.version,o.memory.textures++),dt){N.__webglFramebuffer=[];for(let V=0;V<6;V++)if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer[V]=[];for(let Y=0;Y<_.mipmaps.length;Y++)N.__webglFramebuffer[V][Y]=i.createFramebuffer()}else N.__webglFramebuffer[V]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer=[];for(let V=0;V<_.mipmaps.length;V++)N.__webglFramebuffer[V]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(ut)for(let V=0,Y=J.length;V<Y;V++){let ct=n.get(J[V]);ct.__webglTexture===void 0&&(ct.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&Tt(w)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let V=0;V<J.length;V++){let Y=J[V];N.__webglColorRenderbuffer[V]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[V]);let ct=r.convert(Y.format,Y.colorSpace),St=r.convert(Y.type),xt=v(Y.internalFormat,ct,St,Y.normalized,Y.colorSpace,w.isXRRenderTarget===!0),gt=lt(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,xt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+V,i.RENDERBUFFER,N.__webglColorRenderbuffer[V])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),I(N.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(dt){e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture),Jt(i.TEXTURE_CUBE_MAP,_);for(let V=0;V<6;V++)if(_.mipmaps&&_.mipmaps.length>0)for(let Y=0;Y<_.mipmaps.length;Y++)rt(N.__webglFramebuffer[V][Y],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+V,Y);else rt(N.__webglFramebuffer[V],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+V,0);d(_)&&E(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ut){for(let V=0,Y=J.length;V<Y;V++){let ct=J[V],St=n.get(ct),xt=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(xt=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(xt,St.__webglTexture),Jt(xt,ct),rt(N.__webglFramebuffer,w,ct,i.COLOR_ATTACHMENT0+V,xt,0),d(ct)&&E(xt)}e.unbindTexture()}else{let V=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(V=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(V,k.__webglTexture),Jt(V,_),_.mipmaps&&_.mipmaps.length>0)for(let Y=0;Y<_.mipmaps.length;Y++)rt(N.__webglFramebuffer[Y],w,_,i.COLOR_ATTACHMENT0,V,Y);else rt(N.__webglFramebuffer,w,_,i.COLOR_ATTACHMENT0,V,0);d(_)&&E(V),e.unbindTexture()}w.depthBuffer&&$(w)}function pt(w){let _=w.textures;for(let N=0,k=_.length;N<k;N++){let J=_[N];if(d(J)){let dt=A(w),ut=n.get(J).__webglTexture;e.bindTexture(dt,ut),E(dt),e.unbindTexture()}}}let mt=[],_t=[];function Pt(w){if(w.samples>0){if(Tt(w)===!1){let _=w.textures,N=w.width,k=w.height,J=i.COLOR_BUFFER_BIT,dt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=n.get(w),V=_.length>1;if(V)for(let ct=0;ct<_.length;ct++)e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer);let Y=w.texture.mipmaps;Y&&Y.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let ct=0;ct<_.length;ct++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),V){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ut.__webglColorRenderbuffer[ct]);let St=n.get(_[ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,St,0)}i.blitFramebuffer(0,0,N,k,0,0,N,k,J,i.NEAREST),c===!0&&(mt.length=0,_t.length=0,mt.push(i.COLOR_ATTACHMENT0+ct),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&(mt.push(dt),_t.push(dt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,_t)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,mt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),V)for(let ct=0;ct<_.length;ct++){e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,ut.__webglColorRenderbuffer[ct]);let St=n.get(_[ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,St,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&c){let _=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function lt(w){return Math.min(s.maxSamples,w.samples)}function Tt(w){let _=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function L(w){let _=o.render.frame;h.get(w)!==_&&(h.set(w,_),w.update())}function Dt(w,_){let N=w.colorSpace,k=w.format,J=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||N!==Ws&&N!==zn&&(he.getTransfer(N)===Me?(k!==An||J!==cn)&&$t("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Kt("WebGLTextures: Unsupported texture color space:",N)),_}function Mt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=W,this.resetTextureUnits=H,this.getTextureUnits=U,this.setTextureUnits=G,this.setTexture2D=ot,this.setTexture2DArray=Q,this.setTexture3D=it,this.setTextureCube=at,this.rebindTextures=tt,this.setupRenderTarget=et,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=$,this.setupFrameBufferTexture=rt,this.useMultisampledRTT=Tt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Ig(i,t){function e(n,s=zn){let r,o=he.getTransfer(s);if(n===cn)return i.UNSIGNED_BYTE;if(n===Zo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Jo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Wl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Xl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===kl)return i.BYTE;if(n===Gl)return i.SHORT;if(n===Ms)return i.UNSIGNED_SHORT;if(n===Yo)return i.INT;if(n===Bn)return i.UNSIGNED_INT;if(n===wn)return i.FLOAT;if(n===We)return i.HALF_FLOAT;if(n===ql)return i.ALPHA;if(n===Yl)return i.RGB;if(n===An)return i.RGBA;if(n===kn)return i.DEPTH_COMPONENT;if(n===Ei)return i.DEPTH_STENCIL;if(n===$o)return i.RED;if(n===Ko)return i.RED_INTEGER;if(n===Ti)return i.RG;if(n===jo)return i.RG_INTEGER;if(n===Qo)return i.RGBA_INTEGER;if(n===dr||n===pr||n===mr||n===gr)if(o===Me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===dr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===dr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===gr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ta||n===ea||n===na||n===ia)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ta)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ea)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===na)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ia)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===sa||n===ra||n===oa||n===aa||n===la||n===xr||n===ca)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===sa||n===ra)return o===Me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===oa)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===aa)return r.COMPRESSED_R11_EAC;if(n===la)return r.COMPRESSED_SIGNED_R11_EAC;if(n===xr)return r.COMPRESSED_RG11_EAC;if(n===ca)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ha||n===ua||n===fa||n===da||n===pa||n===ma||n===ga||n===xa||n===_a||n===va||n===ya||n===Ma||n===Sa||n===ba)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ha)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ua)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===fa)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===da)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pa)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ma)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ga)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xa)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_a)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===va)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ya)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ma)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Sa)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ba)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ea||n===Ta||n===wa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ea)return o===Me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ta)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Aa||n===Ra||n===_r||n===Ca)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Aa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ra)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_r)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ca)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ss?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Lg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Dg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,vc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new nr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new De({vertexShader:Lg,fragmentShader:Dg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ve(new ri(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yc=class extends Gn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,f=null,u=null,p=null,x=null,y=typeof XRWebGLBinding<"u",m=new vc,d={},E=e.getContextAttributes(),A=null,v=null,S=[],M=[],R=new Lt,g=null,T=null,P=new Ke;P.viewport=new Te;let D=new Ke;D.viewport=new Te;let F=[P,D],H=new ko,U=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let st=S[j];return st===void 0&&(st=new ps,S[j]=st),st.getTargetRaySpace()},this.getControllerGrip=function(j){let st=S[j];return st===void 0&&(st=new ps,S[j]=st),st.getGripSpace()},this.getHand=function(j){let st=S[j];return st===void 0&&(st=new ps,S[j]=st),st.getHandSpace()};function W(j){let st=M.indexOf(j.inputSource);if(st===-1)return;let bt=S[st];bt!==void 0&&(bt.update(j.inputSource,j.frame,l||o),bt.dispatchEvent({type:j.type,data:j.inputSource}))}function X(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",ot);for(let j=0;j<S.length;j++){let st=M[j];st!==null&&(M[j]=null,S[j].disconnect(st))}U=null,G=null,m.reset();for(let j in d)delete d[j];if(t.setRenderTarget(A),p=null,u=null,f=null,s=null,v=null,te.stop(),n.isPresenting=!1,t.setPixelRatio(g),t.setSize(R.width,R.height,!1),T!==null){let j=T.camera;j.fov=T.fov,j.zoom=T.zoom,j.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&$t("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&$t("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",X),s.addEventListener("inputsourceschange",ot),E.xrCompatible!==!0&&await e.makeXRCompatible(),g=t.getPixelRatio(),t.getSize(R),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,Xt=null,rt=null;E.depth&&(rt=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,bt=E.stencil?Ei:kn,Xt=E.stencil?Ss:Bn);let I={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(I),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new Fe(u.textureWidth,u.textureHeight,{format:An,type:cn,depthTexture:new Xn(u.textureWidth,u.textureHeight,Xt,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let bt={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,bt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Fe(p.framebufferWidth,p.framebufferHeight,{format:An,type:cn,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),te.setContext(s),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ot(j){for(let st=0;st<j.removed.length;st++){let bt=j.removed[st],Xt=M.indexOf(bt);Xt>=0&&(M[Xt]=null,S[Xt].disconnect(bt))}for(let st=0;st<j.added.length;st++){let bt=j.added[st],Xt=M.indexOf(bt);if(Xt===-1){for(let I=0;I<S.length;I++)if(I>=M.length){M.push(bt),Xt=I;break}else if(M[I]===null){M[I]=bt,Xt=I;break}if(Xt===-1)break}let rt=S[Xt];rt&&rt.connect(bt)}}let Q=new C,it=new C;function at(j,st,bt){Q.setFromMatrixPosition(st.matrixWorld),it.setFromMatrixPosition(bt.matrixWorld);let Xt=Q.distanceTo(it),rt=st.projectionMatrix.elements,I=bt.projectionMatrix.elements,B=rt[14]/(rt[10]-1),$=rt[14]/(rt[10]+1),tt=(rt[9]+1)/rt[5],et=(rt[9]-1)/rt[5],pt=(rt[8]-1)/rt[0],mt=(I[8]+1)/I[0],_t=B*pt,Pt=B*mt,lt=Xt/(-pt+mt),Tt=lt*-pt;if(st.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Tt),j.translateZ(lt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),rt[10]===-1)j.projectionMatrix.copy(st.projectionMatrix),j.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{let L=B+lt,Dt=$+lt,Mt=_t-Tt,w=Pt+(Xt-Tt),_=tt*$/Dt*L,N=et*$/Dt*L;j.projectionMatrix.makePerspective(Mt,w,_,N,L,Dt),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function Ht(j,st){st===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(st.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let st=j.near,bt=j.far;m.texture!==null&&(m.depthNear>0&&(st=m.depthNear),m.depthFar>0&&(bt=m.depthFar)),H.near=D.near=P.near=st,H.far=D.far=P.far=bt,(U!==H.near||G!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),U=H.near,G=H.far),H.layers.mask=j.layers.mask|6,P.layers.mask=H.layers.mask&-5,D.layers.mask=H.layers.mask&-3;let Xt=j.parent,rt=H.cameras;Ht(H,Xt);for(let I=0;I<rt.length;I++)Ht(rt[I],Xt);rt.length===2?at(H,P,D):H.projectionMatrix.copy(P.projectionMatrix),T===null&&j.isPerspectiveCamera&&(T={camera:j,fov:j.fov,zoom:j.zoom}),At(j,H,Xt)};function At(j,st,bt){bt===null?j.matrix.copy(st.matrixWorld):(j.matrix.copy(bt.matrixWorld),j.matrix.invert(),j.matrix.multiply(st.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(st.projectionMatrix),j.projectionMatrixInverse.copy(st.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=po*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function(j){c=j,u!==null&&(u.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(j){return d[j]};let re=null;function Jt(j,st){if(h=st.getViewerPose(l||o),x=st,h!==null){let bt=h.views;p!==null&&(t.setRenderTargetFramebuffer(v,p.framebuffer),t.setRenderTarget(v));let Xt=!1;bt.length!==H.cameras.length&&(H.cameras.length=0,Xt=!0);for(let $=0;$<bt.length;$++){let tt=bt[$],et=null;if(p!==null)et=p.getViewport(tt);else{let mt=f.getViewSubImage(u,tt);et=mt.viewport,$===0&&(t.setRenderTargetTextures(v,mt.colorTexture,mt.depthStencilTexture),t.setRenderTarget(v))}let pt=F[$];pt===void 0&&(pt=new Ke,pt.layers.enable($),pt.viewport=new Te,F[$]=pt),pt.matrix.fromArray(tt.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(tt.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(et.x,et.y,et.width,et.height),$===0&&(H.matrix.copy(pt.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Xt===!0&&H.cameras.push(pt)}let rt=s.enabledFeatures;if(rt&&rt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){f=n.getBinding();let $=f.getDepthInformation(bt[0]);$&&$.isValid&&$.texture&&m.init($,s.renderState)}if(rt&&rt.includes("camera-access")&&y){t.state.unbindTexture(),f=n.getBinding();for(let $=0;$<bt.length;$++){let tt=bt[$].camera;if(tt){let et=d[tt];et||(et=new nr,d[tt]=et);let pt=f.getCameraImage(tt);et.sourceTexture=pt}}}}for(let bt=0;bt<S.length;bt++){let Xt=M[bt],rt=S[bt];Xt!==null&&rt!==void 0&&rt.update(Xt,st,l||o)}re&&re(j,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),x=null}let te=new du;te.setAnimationLoop(Jt),this.setAnimationLoop=function(j){re=j},this.dispose=function(){}}},Ng=new Qt,vu=new ee;vu.set(-1,0,0,0,1,0,0,0,1);function Ug(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Kl(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,E,A,v){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(m,d):d.isMeshLambertMaterial?(r(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(m,d),f(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(m,d),u(m,d),d.isMeshPhysicalMaterial&&p(m,d,v)):d.isMeshMatcapMaterial?(r(m,d),x(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),y(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,E,A):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ye&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ye&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let E=t.get(d),A=E.envMap,v=E.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(Ng.makeRotationFromEuler(v)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(vu),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,E,A){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*E,m.scale.value=A*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function u(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,E){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ye&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,d){d.matcap&&(m.matcap.value=d.matcap)}function y(m,d){let E=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Fg(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,S){let M=S.program;n.uniformBlockBinding(v,M)}function l(v,S){let M=s[v.id];M===void 0&&(m(v),M=h(v),s[v.id]=M,v.addEventListener("dispose",E));let R=S.program;n.updateUBOMapping(v,R);let g=t.render.frame;r[v.id]!==g&&(u(v),r[v.id]=g)}function h(v){let S=f();v.__bindingPointIndex=S;let M=i.createBuffer(),R=v.__size,g=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,R,g),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,M),M}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return Kt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let S=s[v.id],M=v.uniforms,R=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let g=0,T=M.length;g<T;g++){let P=M[g];if(Array.isArray(P))for(let D=0,F=P.length;D<F;D++)p(P[D],g,D,R);else p(P,g,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(v,S,M,R){if(y(v,S,M,R)===!0){let g=v.__offset,T=v.value;if(Array.isArray(T)){let P=0;for(let D=0;D<T.length;D++){let F=T[D],H=d(F);x(F,v.__data,P),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(P+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(T,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,g,v.__data)}}function x(v,S,M){typeof v=="number"||typeof v=="boolean"?S[0]=v:v.isMatrix3?(S[0]=v.elements[0],S[1]=v.elements[1],S[2]=v.elements[2],S[3]=0,S[4]=v.elements[3],S[5]=v.elements[4],S[6]=v.elements[5],S[7]=0,S[8]=v.elements[6],S[9]=v.elements[7],S[10]=v.elements[8],S[11]=0):ArrayBuffer.isView(v)?S.set(new v.constructor(v.buffer,v.byteOffset,S.length)):v.toArray(S,M)}function y(v,S,M,R){let g=v.value,T=S+"_"+M;if(R[T]===void 0)return typeof g=="number"||typeof g=="boolean"?R[T]=g:ArrayBuffer.isView(g)?R[T]=g.slice():R[T]=g.clone(),!0;{let P=R[T];if(typeof g=="number"||typeof g=="boolean"){if(P!==g)return R[T]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(P.equals(g)===!1)return P.copy(g),!0}}return!1}function m(v){let S=v.uniforms,M=0,R=16;for(let T=0,P=S.length;T<P;T++){let D=Array.isArray(S[T])?S[T]:[S[T]];for(let F=0,H=D.length;F<H;F++){let U=D[F],G=Array.isArray(U.value)?U.value:[U.value];for(let W=0,X=G.length;W<X;W++){let ot=G[W],Q=d(ot),it=M%R,at=it%Q.boundary,Ht=it+at;M+=at,Ht!==0&&R-Ht<Q.storage&&(M+=R-Ht),U.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=M,M+=Q.storage}}}let g=M%R;return g>0&&(M+=R-g),v.__size=M,v.__cache={},this}function d(v){let S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?$t("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):$t("WebGLRenderer: Unsupported uniform value type.",v),S}function E(v){let S=v.target;S.removeEventListener("dispose",E);let M=o.indexOf(S.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function A(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:A}}var Og=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Zn=null;function Bg(){return Zn===null&&(Zn=new Fi(Og,16,16,Ti,We),Zn.name="DFG_LUT",Zn.minFilter=Pe,Zn.magFilter=Pe,Zn.wrapS=Mn,Zn.wrapT=Mn,Zn.generateMipmaps=!1,Zn.needsUpdate=!0),Zn}var Fa=class{constructor(t={}){let{canvas:e=Bh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:p=cn}=t;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=o;let y=p,m=new Set([Qo,jo,Ko]),d=new Set([cn,Bn,Ms,Ss,Zo,Jo]),E=new Uint32Array(4),A=new Int32Array(4),v=new C,S=null,M=null,R=[],g=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,D=!1,F=null,H=null,U=null,G=null;this._outputColorSpace=Xe;let W=0,X=0,ot=null,Q=-1,it=null,at=new Te,Ht=new Te,At=null,re=new qt(0),Jt=0,te=e.width,j=e.height,st=1,bt=null,Xt=null,rt=new Te(0,0,te,j),I=new Te(0,0,te,j),B=!1,$=new gs,tt=!1,et=!1,pt=new Qt,mt=new C,_t=new Te,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},lt=!1;function Tt(){return ot===null?st:1}let L=n;function Dt(b,O){return e.getContext(b,O)}let Mt,w,_,N,k,J,dt,ut,V,Y,ct,St,xt,gt,Et,Ut,Ft,z,vt,nt,yt,Rt,ft;try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",me,!1),e.addEventListener("webglcontextrestored",fe,!1),e.addEventListener("webglcontextcreationerror",an,!1),L===null){let O="webgl2";if(L=Dt(O,b),L===null)throw Dt(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Bt()}catch(b){throw e.removeEventListener("webglcontextlost",me,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",an,!1),Kt("WebGLRenderer: "+b.message),b}function Bt(){Mt=new Xm(L),Mt.init(),yt=new Ig(L,Mt),w=new Um(L,Mt,t,yt),_=new Cg(L,Mt),w.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),H=L.createFramebuffer(),U=L.createFramebuffer(),G=L.createFramebuffer(),N=new Zm(L),k=new mg,J=new Pg(L,Mt,_,k,w,yt,N),dt=new Wm(P),ut=new $f(L),Rt=new Dm(L,ut),V=new qm(L,ut,N,Rt),Y=new $m(L,V,ut,Rt,N),z=new Jm(L,w,J),Et=new Fm(k),ct=new pg(P,dt,Mt,w,Rt,Et),St=new Ug(P,k),xt=new xg,gt=new bg(Mt),Ft=new Lm(P,dt,_,Y,x,c),Ut=new Rg(P,Y,w),ft=new Fg(L,N,w,_),vt=new Nm(L,Mt,N),nt=new Ym(L,Mt,N),N.programs=ct.programs,P.capabilities=w,P.extensions=Mt,P.properties=k,P.renderLists=xt,P.shadowMap=Ut,P.state=_,P.info=N}y!==cn&&(T=new jm(y,e.width,e.height,a,s,r));let zt=new yc(P,L);this.xr=zt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let b=Mt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Mt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return st},this.setPixelRatio=function(b){b!==void 0&&(st=b,this.setSize(te,j,!1))},this.getSize=function(b){return b.set(te,j)},this.setSize=function(b,O,K=!0){if(zt.isPresenting){$t("WebGLRenderer: Can't change size while VR device is presenting.");return}te=b,j=O,e.width=Math.floor(b*st),e.height=Math.floor(O*st),K===!0&&(e.style.width=b+"px",e.style.height=O+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(te*st,j*st).floor()},this.setDrawingBufferSize=function(b,O,K){te=b,j=O,st=K,e.width=Math.floor(b*K),e.height=Math.floor(O*K),this.setViewport(0,0,b,O)},this.setEffects=function(b){if(y===cn){Kt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let O=0;O<b.length;O++)if(b[O].isOutputPass===!0){$t("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(at)},this.getViewport=function(b){return b.copy(rt)},this.setViewport=function(b,O,K,q){b.isVector4?rt.set(b.x,b.y,b.z,b.w):rt.set(b,O,K,q),_.viewport(at.copy(rt).multiplyScalar(st).round())},this.getScissor=function(b){return b.copy(I)},this.setScissor=function(b,O,K,q){b.isVector4?I.set(b.x,b.y,b.z,b.w):I.set(b,O,K,q),_.scissor(Ht.copy(I).multiplyScalar(st).round())},this.getScissorTest=function(){return B},this.setScissorTest=function(b){_.setScissorTest(B=b)},this.setOpaqueSort=function(b){bt=b},this.setTransparentSort=function(b){Xt=b},this.getClearColor=function(b){return b.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor(...arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha(...arguments)},this.clear=function(b=!0,O=!0,K=!0){let q=0;if(b){let Z=!1;if(ot!==null){let wt=ot.texture.format;Z=m.has(wt)}if(Z){let wt=ot.texture.type,Nt=d.has(wt),It=Ft.getClearColor(),kt=Ft.getClearAlpha(),Wt=It.r,oe=It.g,ce=It.b;Nt?(E[0]=Wt,E[1]=oe,E[2]=ce,E[3]=kt,L.clearBufferuiv(L.COLOR,0,E)):(A[0]=Wt,A[1]=oe,A[2]=ce,A[3]=kt,L.clearBufferiv(L.COLOR,0,A))}else q|=L.COLOR_BUFFER_BIT}O&&(q|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(q|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&L.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),F=b},this.dispose=function(){e.removeEventListener("webglcontextlost",me,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",an,!1),Ft.dispose(),xt.dispose(),gt.dispose(),k.dispose(),dt.dispose(),Y.dispose(),Rt.dispose(),ft.dispose(),ct.dispose(),zt.dispose(),zt.removeEventListener("sessionstart",Ds),zt.removeEventListener("sessionend",Ir),In.stop()};function me(b){b.preventDefault(),Jl("WebGLRenderer: Context Lost."),D=!0}function fe(){Jl("WebGLRenderer: Context Restored."),D=!1;let b=N.autoReset,O=Ut.enabled,K=Ut.autoUpdate,q=Ut.needsUpdate,Z=Ut.type;Bt(),N.autoReset=b,Ut.enabled=O,Ut.autoUpdate=K,Ut.needsUpdate=q,Ut.type=Z}function an(b){Kt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function hn(b){let O=b.target;O.removeEventListener("dispose",hn),Rr(O)}function Rr(b){Cr(b),k.remove(b)}function Cr(b){let O=k.get(b).programs;O!==void 0&&(O.forEach(function(K){ct.releaseProgram(K)}),b.isShaderMaterial&&ct.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,K,q,Z,wt){O===null&&(O=Pt);let Nt=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,It=Xi(b,O,K,q,Z);_.setMaterial(q,Nt);let kt=K.index,Wt=1;if(q.wireframe===!0){if(kt=V.getWireframeAttribute(K),kt===void 0)return;Wt=2}let oe=K.drawRange,ce=K.attributes.position,Gt=oe.start*Wt,ye=(oe.start+oe.count)*Wt;wt!==null&&(Gt=Math.max(Gt,wt.start*Wt),ye=Math.min(ye,(wt.start+wt.count)*Wt)),kt!==null?(Gt=Math.max(Gt,0),ye=Math.min(ye,kt.count)):ce!=null&&(Gt=Math.max(Gt,0),ye=Math.min(ye,ce.count));let Oe=ye-Gt;if(Oe<0||Oe===1/0)return;Rt.setup(Z,q,It,K,kt);let Re,Ee=vt;if(kt!==null&&(Re=ut.get(kt),Ee=nt,Ee.setIndex(Re)),Z.isMesh)q.wireframe===!0?(_.setLineWidth(q.wireframeLinewidth*Tt()),Ee.setMode(L.LINES)):Ee.setMode(L.TRIANGLES);else if(Z.isLine){let Ze=q.linewidth;Ze===void 0&&(Ze=1),_.setLineWidth(Ze*Tt()),Z.isLineSegments?Ee.setMode(L.LINES):Z.isLineLoop?Ee.setMode(L.LINE_LOOP):Ee.setMode(L.LINE_STRIP)}else Z.isPoints?Ee.setMode(L.POINTS):Z.isSprite&&Ee.setMode(L.TRIANGLES);if(Z.isBatchedMesh)if(Mt.get("WEBGL_multi_draw"))Ee.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let Ze=Z._multiDrawStarts,Ot=Z._multiDrawCounts,en=Z._multiDrawCount,ge=kt?ut.get(kt).bytesPerElement:1,vn=k.get(q).currentProgram.getUniforms();for(let Hn=0;Hn<en;Hn++)vn.setValue(L,"_gl_DrawID",Hn),Ee.render(Ze[Hn]/ge,Ot[Hn])}else if(Z.isInstancedMesh)Ee.renderInstances(Gt,Oe,Z.count);else if(K.isInstancedBufferGeometry){let Ze=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Ot=Math.min(K.instanceCount,Ze);Ee.renderInstances(Gt,Oe,Ot)}else Ee.render(Gt,Oe)};function Pr(b,O,K,q){F!==null&&b.isNodeMaterial&&F.setObject(q,b),tt===!0&&Et.setState(b,K,!1),b.transparent===!0&&b.side===En&&b.forceSinglePass===!1?(b.side=Ye,b.needsUpdate=!0,_e(b,O,q),b.side=Si,b.needsUpdate=!0,_e(b,O,q),b.side=En):_e(b,O,q)}this.compile=function(b,O,K=null){K===null&&(K=b),F!==null&&F.renderStart(b,O,K),M=gt.get(K),M.init(O),g.push(M),K.traverseVisible(function(Z){Z.isLight&&Z.layers.test(O.layers)&&(M.pushLight(Z),Z.castShadow&&M.pushShadow(Z))}),b!==K&&b.traverseVisible(function(Z){Z.isLight&&Z.layers.test(O.layers)&&(M.pushLight(Z),Z.castShadow&&M.pushShadow(Z))}),M.setupLights(),F!==null&&F.updateLights(M.state.lightsArray),et=this.localClippingEnabled,tt=Et.init(this.clippingPlanes,et),tt===!0&&Et.setGlobalState(this.clippingPlanes,O),F!==null&&Ut.render(M.state.shadowsArray,K,O);let q=new Set;return b.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let wt=Z.material;if(wt)if(Array.isArray(wt))for(let Nt=0;Nt<wt.length;Nt++){let It=wt[Nt];Pr(It,K,O,Z),q.add(It)}else Pr(wt,K,O,Z),q.add(wt)}),M=g.pop(),F!==null&&F.renderEnd(),q},this.compileAsync=function(b,O,K=null){let q=this.compile(b,O,K);return new Promise(Z=>{function wt(){if(q.forEach(function(Nt){let kt=k.get(Nt).currentProgram;(kt===void 0||kt.isReady())&&q.delete(Nt)}),q.size===0){Z(b);return}setTimeout(wt,10)}Mt.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let Ls=null;function Pn(b){Ls&&Ls(b)}function Ds(){In.stop()}function Ir(){In.start()}let In=new du;In.setAnimationLoop(Pn),typeof self<"u"&&In.setContext(self),this.setAnimationLoop=function(b){Ls=b,zt.setAnimationLoop(b),b===null?In.stop():In.start()},zt.addEventListener("sessionstart",Ds),zt.addEventListener("sessionend",Ir),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){Kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;F!==null&&F.renderStart(b,O);let K=zt.enabled===!0&&zt.isPresenting===!0,q=T!==null&&(ot===null||K)&&T.begin(P,ot);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),zt.enabled===!0&&zt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(zt.cameraAutoUpdate===!0&&zt.updateCamera(O),O=zt.getCamera()),b.isScene===!0&&b.onBeforeRender(P,b,O,ot),M=gt.get(b,g.length),M.init(O),M.state.textureUnits=J.getTextureUnits(),g.push(M),pt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),$.setFromProjectionMatrix(pt,Fn,O.reversedDepth),et=this.localClippingEnabled,tt=Et.init(this.clippingPlanes,et),S=xt.get(b,R.length),S.init(),R.push(S),zt.enabled===!0&&zt.isPresenting===!0){let Nt=P.xr.getDepthSensingMesh();Nt!==null&&ht(Nt,O,-1/0,P.sortObjects)}ht(b,O,0,P.sortObjects),S.finish(),F!==null&&F.updateLights(M.state.lightsArray),P.sortObjects===!0&&S.sort(bt,Xt),lt=zt.enabled===!1||zt.isPresenting===!1||zt.hasDepthSensing()===!1,lt&&Ft.addToRenderList(S,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),tt===!0&&Et.beginShadows();let Z=M.state.shadowsArray;if(Ut.render(Z,b,O),tt===!0&&Et.endShadows(),(q&&T.hasRenderPass())===!1){let Nt=S.opaque,It=S.transmissive;if(M.setupLights(),O.isArrayCamera){let kt=O.cameras;if(It.length>0)for(let Wt=0,oe=kt.length;Wt<oe;Wt++){let ce=kt[Wt];ne(Nt,It,b,ce)}lt&&Ft.render(b);for(let Wt=0,oe=kt.length;Wt<oe;Wt++){let ce=kt[Wt];Vt(S,b,ce,ce.viewport)}}else It.length>0&&ne(Nt,It,b,O),lt&&Ft.render(b),Vt(S,b,O)}ot!==null&&X===0&&(J.updateMultisampleRenderTarget(ot),J.updateRenderTargetMipmap(ot)),q&&T.end(P),b.isScene===!0&&b.onAfterRender(P,b,O),Rt.resetDefaultState(),Q=-1,it=null,g.pop(),g.length>0?(M=g[g.length-1],J.setTextureUnits(M.state.textureUnits),tt===!0&&Et.setGlobalState(P.clippingPlanes,M.state.camera)):M=null,R.pop(),R.length>0?S=R[R.length-1]:S=null,F!==null&&F.renderEnd()};function ht(b,O,K,q){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)K=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLightProbeGrid)M.pushLightProbeGrid(b);else if(b.isLight)M.pushLight(b),b.castShadow&&M.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum($)){q&&_t.setFromMatrixPosition(b.matrixWorld).applyMatrix4(pt);let Nt=Y.update(b),It=b.material;It.visible&&S.push(b,Nt,It,K,_t.z,null,O)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum($))){let Nt=Y.update(b),It=b.material;if(q&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),_t.copy(b.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),_t.copy(Nt.boundingSphere.center)),_t.applyMatrix4(b.matrixWorld).applyMatrix4(pt)),Array.isArray(It)){let kt=Nt.groups;for(let Wt=0,oe=kt.length;Wt<oe;Wt++){let ce=kt[Wt],Gt=It[ce.materialIndex];Gt&&Gt.visible&&S.push(b,Nt,Gt,K,_t.z,ce,O)}}else It.visible&&S.push(b,Nt,It,K,_t.z,null,O)}}let wt=b.children;for(let Nt=0,It=wt.length;Nt<It;Nt++)ht(wt[Nt],O,K,q)}function Vt(b,O,K,q){let{opaque:Z,transmissive:wt,transparent:Nt}=b;M.setupLightsView(K),tt===!0&&Et.setGlobalState(P.clippingPlanes,K),q&&_.viewport(at.copy(q)),Z.length>0&&Yt(Z,O,K),wt.length>0&&Yt(wt,O,K),Nt.length>0&&Yt(Nt,O,K),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function ne(b,O,K,q){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[q.id]===void 0){let Gt=Mt.has("EXT_color_buffer_half_float")||Mt.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[q.id]=new Fe(1,1,{generateMipmaps:!0,type:Gt?We:cn,minFilter:Yn,samples:Math.max(4,w.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:he.workingColorSpace})}let wt=M.state.transmissionRenderTarget[q.id],Nt=q.viewport||at;wt.setSize(Nt.z*P.transmissionResolutionScale,Nt.w*P.transmissionResolutionScale);let It=P.getRenderTarget(),kt=P.getActiveCubeFace(),Wt=P.getActiveMipmapLevel();P.setRenderTarget(wt),P.getClearColor(re),Jt=P.getClearAlpha(),Jt<1&&P.setClearColor(16777215,.5),P.clear(),lt&&Ft.render(K);let oe=P.toneMapping;P.toneMapping=xn;let ce=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),M.setupLightsView(q),tt===!0&&Et.setGlobalState(P.clippingPlanes,q),Yt(b,K,q),J.updateMultisampleRenderTarget(wt),J.updateRenderTargetMipmap(wt),Mt.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let ye=0,Oe=O.length;ye<Oe;ye++){let Re=O[ye],{object:Ee,geometry:Ze,material:Ot,group:en}=Re;if(Ot.side===En&&Ee.layers.test(q.layers)){let ge=Ot.side;Ot.side=Ye,Ot.needsUpdate=!0,xe(Ee,K,q,Ze,Ot,en),Ot.side=ge,Ot.needsUpdate=!0,Gt=!0}}Gt===!0&&(J.updateMultisampleRenderTarget(wt),J.updateRenderTargetMipmap(wt))}P.setRenderTarget(It,kt,Wt),P.setClearColor(re,Jt),ce!==void 0&&(q.viewport=ce),P.toneMapping=oe}function Yt(b,O,K){let q=O.isScene===!0?O.overrideMaterial:null;for(let Z=0,wt=b.length;Z<wt;Z++){let Nt=b[Z],{object:It,geometry:kt,group:Wt}=Nt,oe=Nt.material;oe.allowOverride===!0&&q!==null&&(oe=q),It.layers.test(K.layers)&&xe(It,O,K,kt,oe,Wt)}}function xe(b,O,K,q,Z,wt){F!==null&&Z.isNodeMaterial&&F.setObject(b,Z),b.onBeforeRender(P,O,K,q,Z,wt),b.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Z.onBeforeRender(P,O,K,q,b,wt),Z.transparent===!0&&Z.side===En&&Z.forceSinglePass===!1?(Z.side=Ye,Z.needsUpdate=!0,P.renderBufferDirect(K,O,q,Z,b,wt),Z.side=Si,Z.needsUpdate=!0,P.renderBufferDirect(K,O,q,Z,b,wt),Z.side=En):P.renderBufferDirect(K,O,q,Z,b,wt),b.onAfterRender(P,O,K,q,Z,wt)}function _e(b,O,K){O.isScene!==!0&&(O=Pt);let q=k.get(b),Z=M.state.lights,wt=M.state.shadowsArray,Nt=Z.state.version,It=ct.getParameters(b,Z.state,wt,O,K,M.state.lightProbeGridArray),kt=ct.getProgramCacheKey(It),Wt=q.programs;q.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?O.environment:null,q.fog=O.fog;let oe=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;q.envMap=dt.get(b.envMap||q.environment,oe),q.envMapRotation=q.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,Wt===void 0&&(b.addEventListener("dispose",hn),Wt=new Map,q.programs=Wt);let ce=Wt.get(kt);if(ce!==void 0){if(q.currentProgram===ce&&q.lightsStateVersion===Nt)return ai(b,It),ce}else It.uniforms=ct.getUniforms(b),F!==null&&b.isNodeMaterial&&F.build(b,K,It),b.onBeforeCompile(It,P),ce=ct.acquireProgram(It,kt),Wt.set(kt,ce),q.uniforms=It.uniforms;let Gt=q.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Gt.clippingPlanes=Et.uniform),ai(b,It),q.needsLights=Lr(b),q.lightsStateVersion=Nt,q.needsLights&&(Gt.ambientLightColor.value=Z.state.ambient,Gt.lightProbe.value=Z.state.probe,Gt.sunLights.value=Z.state.sun,Gt.sunLightShadows.value=Z.state.sunShadow,Gt.directionalLights.value=Z.state.directional,Gt.directionalLightShadows.value=Z.state.directionalShadow,Gt.spotLights.value=Z.state.spot,Gt.spotLightShadows.value=Z.state.spotShadow,Gt.rectAreaLights.value=Z.state.rectArea,Gt.ltc_1.value=Z.state.rectAreaLTC1,Gt.ltc_2.value=Z.state.rectAreaLTC2,Gt.pointLights.value=Z.state.point,Gt.pointLightShadows.value=Z.state.pointShadow,Gt.hemisphereLights.value=Z.state.hemi,Gt.sunShadowMatrix.value=Z.state.sunShadowMatrix,Gt.sunShadowCascade.value=Z.state.sunShadowCascade,Gt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Gt.spotLightMatrix.value=Z.state.spotLightMatrix,Gt.spotLightMap.value=Z.state.spotLightMap,Gt.pointShadowMatrix.value=Z.state.pointShadowMatrix),q.lightProbeGrid=M.state.lightProbeGridArray.length>0,q.currentProgram=ce,q.uniformsList=null,ce}function un(b){if(b.uniformsList===null){let O=b.currentProgram.getUniforms();b.uniformsList=Ts.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function ai(b,O){let K=k.get(b);K.outputColorSpace=O.outputColorSpace,K.batching=O.batching,K.batchingColor=O.batchingColor,K.instancing=O.instancing,K.instancingColor=O.instancingColor,K.instancingMorph=O.instancingMorph,K.skinning=O.skinning,K.morphTargets=O.morphTargets,K.morphNormals=O.morphNormals,K.morphColors=O.morphColors,K.morphTargetsCount=O.morphTargetsCount,K.numClippingPlanes=O.numClippingPlanes,K.numIntersection=O.numClipIntersection,K.vertexAlphas=O.vertexAlphas,K.vertexTangents=O.vertexTangents,K.toneMapping=O.toneMapping}function Ya(b,O){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;v.setFromMatrixPosition(O.matrixWorld);for(let K=0,q=b.length;K<q;K++){let Z=b[K];if(Z.texture!==null&&Z.boundingBox.containsPoint(v))return Z}return null}function Xi(b,O,K,q,Z){O.isScene!==!0&&(O=Pt),J.resetTextureUnits();let wt=O.fog,Nt=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?O.environment:null,It=ot===null?P.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:he.workingColorSpace,kt=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Wt=dt.get(q.envMap||Nt,kt),oe=q.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,ce=!!K.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Gt=!!K.morphAttributes.position,ye=!!K.morphAttributes.normal,Oe=!!K.morphAttributes.color,Re=xn;q.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(Re=P.toneMapping);let Ee=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Ze=Ee!==void 0?Ee.length:0,Ot=k.get(q),en=M.state.lights;if(tt===!0&&(et===!0||b!==it)){let Ae=b===it&&q.id===Q;Et.setState(q,b,Ae)}let ge=!1;q.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==en.state.version||Ot.outputColorSpace!==It||Z.isBatchedMesh&&Ot.batching===!1||!Z.isBatchedMesh&&Ot.batching===!0||Z.isBatchedMesh&&Ot.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&Ot.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&Ot.instancing===!1||!Z.isInstancedMesh&&Ot.instancing===!0||Z.isSkinnedMesh&&Ot.skinning===!1||!Z.isSkinnedMesh&&Ot.skinning===!0||Z.isInstancedMesh&&Ot.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ot.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Ot.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Ot.instancingMorph===!1&&Z.morphTexture!==null||Ot.envMap!==Wt||q.fog===!0&&Ot.fog!==wt||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==Et.numPlanes||Ot.numIntersection!==Et.numIntersection)||Ot.vertexAlphas!==oe||Ot.vertexTangents!==ce||Ot.morphTargets!==Gt||Ot.morphNormals!==ye||Ot.morphColors!==Oe||Ot.toneMapping!==Re||Ot.morphTargetsCount!==Ze||!!Ot.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(ge=!0):(ge=!0,Ot.__version=q.version);let vn=Ot.currentProgram;ge===!0&&(vn=_e(q,O,Z),F&&q.isNodeMaterial&&F.onUpdateProgram(q,vn,Ot));let Hn=!1,li=!1,Yi=!1,Se=vn.getUniforms(),Ue=Ot.uniforms;if(_.useProgram(vn.program)&&(Hn=!0,li=!0,Yi=!0),q.id!==Q&&(Q=q.id,li=!0),Ot.needsLights){let Ae=Ya(M.state.lightProbeGridArray,Z);Ot.lightProbeGrid!==Ae&&(Ot.lightProbeGrid=Ae,li=!0)}if(Hn||it!==b){_.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Se.setValue(L,"projectionMatrix",b.projectionMatrix),Se.setValue(L,"viewMatrix",b.matrixWorldInverse);let hi=Se.map.cameraPosition;hi!==void 0&&hi.setValue(L,mt.setFromMatrixPosition(b.matrixWorld)),w.logarithmicDepthBuffer&&Se.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Se.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),it!==b&&(it=b,li=!0,Yi=!0)}if(Ot.needsLights&&(en.state.sunShadowMap.length>0&&Se.setValue(L,"sunShadowMap",en.state.sunShadowMap,J),en.state.directionalShadowMap.length>0&&Se.setValue(L,"directionalShadowMap",en.state.directionalShadowMap,J),en.state.spotShadowMap.length>0&&Se.setValue(L,"spotShadowMap",en.state.spotShadowMap,J),en.state.pointShadowMap.length>0&&Se.setValue(L,"pointShadowMap",en.state.pointShadowMap,J)),Z.isSkinnedMesh){Se.setOptional(L,Z,"bindMatrix"),Se.setOptional(L,Z,"bindMatrixInverse");let Ae=Z.skeleton;Ae&&(Ae.boneTexture===null&&Ae.computeBoneTexture(),Se.setValue(L,"boneTexture",Ae.boneTexture,J))}Z.isBatchedMesh&&(Se.setOptional(L,Z,"batchingTexture"),Se.setValue(L,"batchingTexture",Z._matricesTexture,J),Se.setOptional(L,Z,"batchingIdTexture"),Se.setValue(L,"batchingIdTexture",Z._indirectTexture,J),Se.setOptional(L,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Se.setValue(L,"batchingColorTexture",Z._colorsTexture,J));let ci=K.morphAttributes;if((ci.position!==void 0||ci.normal!==void 0||ci.color!==void 0)&&z.update(Z,K,vn),(li||Ot.receiveShadow!==Z.receiveShadow)&&(Ot.receiveShadow=Z.receiveShadow,Se.setValue(L,"receiveShadow",Z.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&O.environment!==null&&(Ue.envMapIntensity.value=O.environmentIntensity),Ue.dfgLUT!==void 0&&(Ue.dfgLUT.value=Bg()),li){if(Se.setValue(L,"toneMappingExposure",P.toneMappingExposure),Ot.needsLights&&qi(Ue,Yi),wt&&q.fog===!0&&St.refreshFogUniforms(Ue,wt),St.refreshMaterialUniforms(Ue,q,st,j,M.state.transmissionRenderTarget[b.id]),Ot.needsLights&&Ot.lightProbeGrid){let Ae=Ot.lightProbeGrid;Ue.probesSH.value=Ae.texture,Ue.probesMin.value.copy(Ae.boundingBox.min),Ue.probesMax.value.copy(Ae.boundingBox.max),Ue.probesResolution.value.copy(Ae.resolution)}Ts.upload(L,un(Ot),Ue,J)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Ts.upload(L,un(Ot),Ue,J),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Se.setValue(L,"center",Z.center),Se.setValue(L,"modelViewMatrix",Z.modelViewMatrix),Se.setValue(L,"normalMatrix",Z.normalMatrix),Se.setValue(L,"modelMatrix",Z.matrixWorld),q.uniformsGroups!==void 0){let Ae=q.uniformsGroups;for(let hi=0,Zi=Ae.length;hi<Zi;hi++){let Cc=Ae[hi];ft.update(Cc,vn),ft.bind(Cc,vn)}}return vn}function qi(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.sunLights.needsUpdate=O,b.sunLightShadows.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function Lr(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return ot},this.setRenderTargetTextures=function(b,O,K){let q=k.get(b);q.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),k.get(b.texture).__webglTexture=O,k.get(b.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:K,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,O){let K=k.get(b);K.__webglFramebuffer=O,K.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,K=0){ot=b,W=O,X=K;let q=null,Z=!1,wt=!1;if(b){let It=k.get(b);if(It.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(L.FRAMEBUFFER,It.__webglFramebuffer),at.copy(b.viewport),Ht.copy(b.scissor),At=b.scissorTest,_.viewport(at),_.scissor(Ht),_.setScissorTest(At),Q=-1;return}else if(It.__webglFramebuffer===void 0)J.setupRenderTarget(b);else if(It.__hasExternalTextures)J.rebindTextures(b,k.get(b.texture).__webglTexture,k.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let oe=b.depthTexture;if(It.__boundDepthTexture!==oe){if(oe!==null&&k.has(oe)&&(b.width!==oe.image.width||b.height!==oe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(b)}}let kt=b.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(wt=!0);let Wt=k.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Wt[O])?q=Wt[O][K]:q=Wt[O],Z=!0):b.samples>0&&J.useMultisampledRTT(b)===!1?q=k.get(b).__webglMultisampledFramebuffer:Array.isArray(Wt)?q=Wt[K]:q=Wt,at.copy(b.viewport),Ht.copy(b.scissor),At=b.scissorTest}else at.copy(rt).multiplyScalar(st).floor(),Ht.copy(I).multiplyScalar(st).floor(),At=B;if(K!==0&&(q=H),_.bindFramebuffer(L.FRAMEBUFFER,q)&&_.drawBuffers(b,q),_.viewport(at),_.scissor(Ht),_.setScissorTest(At),Z){let It=k.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,It.__webglTexture,K)}else if(wt){let It=O;for(let kt=0;kt<b.textures.length;kt++){let Wt=k.get(b.textures[kt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+kt,Wt.__webglTexture,K,It)}}else if(b!==null&&K!==0){let It=k.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,It.__webglTexture,K)}Q=-1};function Le(b){let O=k.get(b);return(O.__readFormat!==b.format||O.__readType!==b.type)&&(O.__readFormat=b.format,O.__readType=b.type,O.__formatReadable=w.textureFormatReadable(b.format),O.__typeReadable=w.textureTypeReadable(b.type)),O}this.readRenderTargetPixels=function(b,O,K,q,Z,wt,Nt,It=0){if(!(b&&b.isWebGLRenderTarget)){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=k.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Nt!==void 0&&(kt=kt[Nt]),kt){_.bindFramebuffer(L.FRAMEBUFFER,kt);try{let Wt=b.textures[It],oe=Wt.format,ce=Wt.type;b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+It);let Gt=Le(Wt);if(Gt.__formatReadable===!1){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Gt.__typeReadable===!1){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-q&&K>=0&&K<=b.height-Z&&L.readPixels(O,K,q,Z,yt.convert(oe),yt.convert(ce),wt)}finally{let Wt=ot!==null?k.get(ot).__webglFramebuffer:null;_.bindFramebuffer(L.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(b,O,K,q,Z,wt,Nt,It=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=k.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Nt!==void 0&&(kt=kt[Nt]),kt)if(O>=0&&O<=b.width-q&&K>=0&&K<=b.height-Z){_.bindFramebuffer(L.FRAMEBUFFER,kt);let Wt=b.textures[It],oe=Wt.format,ce=Wt.type;b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+It);let Gt=Le(Wt);if(Gt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Gt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ye=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ye),L.bufferData(L.PIXEL_PACK_BUFFER,wt.byteLength,L.STREAM_READ),L.readPixels(O,K,q,Z,yt.convert(oe),yt.convert(ce),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let Oe=ot!==null?k.get(ot).__webglFramebuffer:null;_.bindFramebuffer(L.FRAMEBUFFER,Oe);let Re=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Hh(L,Re,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ye),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,wt),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(ye),L.deleteSync(Re),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,O=null,K=0){let q=Math.pow(2,-K),Z=Math.floor(b.image.width*q),wt=Math.floor(b.image.height*q),Nt=O!==null?O.x:0,It=O!==null?O.y:0;J.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,K,0,0,Nt,It,Z,wt),_.unbindTexture()},this.copyTextureToTexture=function(b,O,K=null,q=null,Z=0,wt=0){let Nt,It,kt,Wt,oe,ce,Gt,ye,Oe,Re=b.isCompressedTexture?b.mipmaps[wt]:b.image;if(K!==null)Nt=K.max.x-K.min.x,It=K.max.y-K.min.y,kt=K.isBox3?K.max.z-K.min.z:1,Wt=K.min.x,oe=K.min.y,ce=K.isBox3?K.min.z:0;else{let Ue=Math.pow(2,-Z);Nt=Math.floor(Re.width*Ue),It=Math.floor(Re.height*Ue),b.isDataArrayTexture?kt=Re.depth:b.isData3DTexture?kt=Math.floor(Re.depth*Ue):kt=1,Wt=0,oe=0,ce=0}q!==null?(Gt=q.x,ye=q.y,Oe=q.z):(Gt=0,ye=0,Oe=0);let Ee=yt.convert(O.format),Ze=yt.convert(O.type),Ot;O.isData3DTexture?(J.setTexture3D(O,0),Ot=L.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(J.setTexture2DArray(O,0),Ot=L.TEXTURE_2D_ARRAY):(J.setTexture2D(O,0),Ot=L.TEXTURE_2D),_.activeTexture(L.TEXTURE0),_.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),_.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),_.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);let en=_.getParameter(L.UNPACK_ROW_LENGTH),ge=_.getParameter(L.UNPACK_IMAGE_HEIGHT),vn=_.getParameter(L.UNPACK_SKIP_PIXELS),Hn=_.getParameter(L.UNPACK_SKIP_ROWS),li=_.getParameter(L.UNPACK_SKIP_IMAGES);_.pixelStorei(L.UNPACK_ROW_LENGTH,Re.width),_.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Re.height),_.pixelStorei(L.UNPACK_SKIP_PIXELS,Wt),_.pixelStorei(L.UNPACK_SKIP_ROWS,oe),_.pixelStorei(L.UNPACK_SKIP_IMAGES,ce);let Yi=b.isDataArrayTexture||b.isData3DTexture,Se=O.isDataArrayTexture||O.isData3DTexture;if(b.isDepthTexture){let Ue=k.get(b),ci=k.get(O),Ae=k.get(Ue.__renderTarget),hi=k.get(ci.__renderTarget);_.bindFramebuffer(L.READ_FRAMEBUFFER,Ae.__webglFramebuffer),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,hi.__webglFramebuffer);for(let Zi=0;Zi<kt;Zi++)Yi&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,k.get(b).__webglTexture,Z,ce+Zi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,k.get(O).__webglTexture,wt,Oe+Zi)),L.blitFramebuffer(Wt,oe,Nt,It,Gt,ye,Nt,It,L.DEPTH_BUFFER_BIT,L.NEAREST);_.bindFramebuffer(L.READ_FRAMEBUFFER,null),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(Z!==0||b.isRenderTargetTexture||k.has(b)){let Ue=k.get(b),ci=k.get(O);_.bindFramebuffer(L.READ_FRAMEBUFFER,U),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,G);for(let Ae=0;Ae<kt;Ae++)Yi?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ue.__webglTexture,Z,ce+Ae):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ue.__webglTexture,Z),Se?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ci.__webglTexture,wt,Oe+Ae):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ci.__webglTexture,wt),Z!==0?L.blitFramebuffer(Wt,oe,Nt,It,Gt,ye,Nt,It,L.COLOR_BUFFER_BIT,L.NEAREST):Se?L.copyTexSubImage3D(Ot,wt,Gt,ye,Oe+Ae,Wt,oe,Nt,It):L.copyTexSubImage2D(Ot,wt,Gt,ye,Wt,oe,Nt,It);_.bindFramebuffer(L.READ_FRAMEBUFFER,null),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Se?b.isDataTexture||b.isData3DTexture?L.texSubImage3D(Ot,wt,Gt,ye,Oe,Nt,It,kt,Ee,Ze,Re.data):O.isCompressedArrayTexture?L.compressedTexSubImage3D(Ot,wt,Gt,ye,Oe,Nt,It,kt,Ee,Re.data):L.texSubImage3D(Ot,wt,Gt,ye,Oe,Nt,It,kt,Ee,Ze,Re):b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,wt,Gt,ye,Nt,It,Ee,Ze,Re.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,wt,Gt,ye,Re.width,Re.height,Ee,Re.data):L.texSubImage2D(L.TEXTURE_2D,wt,Gt,ye,Nt,It,Ee,Ze,Re);_.pixelStorei(L.UNPACK_ROW_LENGTH,en),_.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ge),_.pixelStorei(L.UNPACK_SKIP_PIXELS,vn),_.pixelStorei(L.UNPACK_SKIP_ROWS,Hn),_.pixelStorei(L.UNPACK_SKIP_IMAGES,li),wt===0&&O.generateMipmaps&&L.generateMipmap(Ot),_.unbindTexture()},this.initRenderTarget=function(b){k.get(b).__webglFramebuffer===void 0&&J.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?J.setTextureCube(b,0):b.isData3DTexture?J.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?J.setTexture2DArray(b,0):J.setTexture2D(b,0),_.unbindTexture()},this.resetState=function(){W=0,X=0,ot=null,_.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}};var za={high:{name:"high",maxDpr:2,pixelBudget:34e5,minScale:.55,post:!0,msaa:4,detail:1},mid:{name:"mid",maxDpr:1.5,pixelBudget:19e5,minScale:.6,post:!0,msaa:4,detail:.7},low:{name:"low",maxDpr:1.25,pixelBudget:11e5,minScale:.65,post:!1,msaa:0,detail:.45}},zg=/mali-(4\d\d|t\d+|g(31|51|52|57|68|71|72)\b)|adreno \(tm\) ([1-5]\d\d|6[01]\d)|powervr|sgx|intel\(r\) hd graphics [2-5]\d{2,3}\b|swiftshader|llvmpipe/i,Hg=/intel.*(uhd graphics|hd graphics|iris(\((r|tm)\))? plus)/i;function yu(i){let e=new URLSearchParams(location.search).get("tier");if(e&&za[e])return za[e];let n=matchMedia("(pointer: coarse)").matches,s=Math.min(screen.width,screen.height),r=navigator.deviceMemory,o=!!(navigator.connection&&navigator.connection.saveData),a="";if(i){let l=i.getExtension("WEBGL_debug_renderer_info");a=String(i.getParameter(l?l.UNMASKED_RENDERER_WEBGL:i.RENDERER)||"")}let c=n||s<700?"mid":"high";return o||r!==void 0&&r<=2||zg.test(a)?c="low":c==="high"&&Hg.test(a)&&(c="mid"),c==="high"&&/intel/i.test(a)&&!/\barc\b/i.test(a)?{...za.high,pixelBudget:24e5,dofTaps:10}:za[c]}var Ha=class{constructor(t,e,{ladder:n=["scale","post"]}={}){this.tier=t,this.onChange=e,this.scale=1,this.post=!!t.post,this.msaa=t.msaa>0,this.ladder=n.filter(s=>s==="scale"||this[s]),this.undo=[],this.ring=new Float32Array(30),this.ri=0,this.filled=0,this.good=0,this.upWait=2500,this.lastUp=-1e9,this.lastUpUndo=null,this.capUntil=0,this.probeAt=0,this.probeWait=3e4,this.probe=null}sample(t,e){if(t<=0||t>250||(this.ring[this.ri]=t,this.ri=(this.ri+1)%30,this.filled<30&&this.filled++,this.filled<20))return;let n=1e9,s=0,r=0;for(let l=0;l<this.filled;l++){let h=this.ring[l];s+=h,h<n&&(n=h),h>31&&h<36&&r++}let o=s/this.filled,a=this.tier.minScale;if(this.probe){this.endProbe(e,o);return}if(n<22&&this.capUntil===1/0&&(this.capUntil=0,this.probeAt=0),r>=this.filled-2&&e>=this.probeAt&&e-this.lastUp>3e3&&this.scale>a+.01){this.startProbe(e);return}let c=e<this.capUntil?33.3:16.7;if(o>c*1.3){if(e-this.lastUp<3e3&&this.lastUpUndo){let l=this.lastUpUndo;this.undo.push({k:l.k,v:this[l.k]}),this[l.k]=l.v,this.upWait=Math.min(12e4,this.upWait*2),this.lastUpUndo=null,this.lastUp=-1e9,this.commit();return}for(let l of this.ladder){if(l==="scale"){if(this.scale<=a+.01)continue;this.undo.push({k:l,v:this.scale}),this.scale=Math.max(a,this.scale*Math.min(.9,Math.max(.7,Math.sqrt(c/o))))}else{if(!this[l])continue;this.undo.push({k:l,v:!0}),this[l]=!1}this.commit();return}}else if(o<c*1.1){if(this.good+=t,this.good>this.upWait&&this.undo.length){let l=this.undo.pop(),h=l.v;l.k==="scale"&&h>this.scale*1.15+.01&&(this.undo.push(l),h=this.scale*1.15),this.lastUpUndo={k:l.k,v:this[l.k]},this[l.k]=h,this.lastUp=e,this.commit()}}else this.good=0}startProbe(t){this.probe={scale:this.scale},this.undo.push({k:"scale",v:this.scale}),this.scale=Math.max(this.tier.minScale,this.scale*.7),this.commit()}endProbe(t,e){let n=this.probe;this.probe=null,this.probeAt=t+this.probeWait,this.probeWait=Math.min(24e4,this.probeWait*2),e<16.7*1.3?(this.capUntil=0,this.upWait=2500,this.good=0):(this.undo.pop(),this.scale=n.scale,this.capUntil=1/0,this.probeAt=1/0,this.commit())}commit(){this.good=0,this.filled=0,this.ri=0,this.onChange(this.scale,this.post,this.msaa)}};function Mu(i,t,e,n=1){let s=Math.min(window.devicePixelRatio||1,i.maxDpr),r=Math.sqrt(i.pixelBudget/Math.max(1,t*e));return Math.max(.5,Math.min(s,r)*n)}var Va={plateSegs:160,tex:1024,chipTex:2048,pcbTex:1024,env:256,nOuter:10,nInner:6,radial:6,density:.75,aniso:.55,rodSegs:16,bellows:!0,wirebonds:18,airbridges:1,clamps:!0,ties:!0,labels:22,dofTaps:14,bloomLevels:5,bloomDiv:2,msaa:4,fxaa:!1,dust:420,frost:260,frostOctaves:2,grain:.032},Su={high:{...Va},mid:{...Va,plateSegs:112,chipTex:1024,pcbTex:512,env:128,nOuter:8,nInner:5,radial:5,density:.58,aniso:.3,rodSegs:12,wirebonds:12,airbridges:.5,labels:12,dofTaps:0,bloomLevels:4,bloomDiv:4,msaa:4,dust:240,frost:150,frostOctaves:1,grain:.03},low:{...Va,plateSegs:72,tex:512,chipTex:1024,pcbTex:512,env:128,nOuter:6,nInner:3,radial:4,density:.4,aniso:0,rodSegs:8,bellows:!1,wirebonds:8,airbridges:0,ties:!1,labels:0,dofTaps:0,bloomLevels:0,bloomDiv:4,msaa:0,fxaa:!0,dust:120,frost:90,frostOctaves:1,grain:.028},still:{...Va,plateSegs:224,env:512,radial:8,density:1,rodSegs:24,wirebonds:22,labels:26,dofTaps:32,bloomLevels:6,bloomDiv:2,msaa:4,dust:420,frost:260,grain:0}};function bu(i,t){let e={...Su[i]||Su.mid};return t&&Object.assign(e,t),e}var Vg=`
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,kg=`
uniform vec3 uColor; uniform float uSoft; uniform float uFall;
varying vec2 vUv;
void main(){
  vec2 q = abs(vUv - 0.5) * 2.0;
  float e = (1.0 - smoothstep(1.0 - uSoft, 1.0, q.x)) * (1.0 - smoothstep(1.0 - uSoft, 1.0, q.y));
  float grad = 1.0 - uFall * q.y * q.y;
  gl_FragColor = vec4(uColor * e * grad, 1.0);
}`;function Ai(i,{w:t,h:e,az:n,el:s,dist:r,color:o,intensity:a,soft:c=.25,fall:l=.3,roll:h=0}){let f=new De({uniforms:{uColor:{value:new qt(o[0],o[1],o[2]).multiplyScalar(a)},uSoft:{value:c},uFall:{value:l}},vertexShader:Vg,fragmentShader:kg,side:En,transparent:!0,blending:Tn,depthWrite:!1,depthTest:!1}),u=new ve(new ri(t,e),f),p=Math.cos(s);return u.position.set(Math.sin(n)*p*r,Math.sin(s)*r,Math.cos(n)*p*r),u.lookAt(0,0,0),u.rotateZ(h),i.add(u),u}function Mc(i,{size:t=256}={}){let e=new Ui,n=new ve(new ar(60,48,24),new De({side:Ye,depthWrite:!1,vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
        varying vec3 vDir;
        void main(){
          float y = vDir.y;
          vec3 top = vec3(0.006, 0.008, 0.013);
          vec3 hor = vec3(0.017, 0.023, 0.036);
          vec3 bot = vec3(0.003, 0.005, 0.010);
          vec3 c = y > 0.0 ? mix(hor, top, smoothstep(0.0, 0.6, y)) : mix(hor, bot, smoothstep(0.0, 0.35, -y));
          gl_FragColor = vec4(c, 1.0);
        }`}));n.renderOrder=-10,e.add(n);let s=14,r=Math.PI/180;Ai(e,{w:11,h:13,az:-42*r,el:12*r,dist:s,color:[.97,.975,1],intensity:1.35,soft:.7,fall:.35}),Ai(e,{w:16,h:16,az:0,el:86*r,dist:s,color:[.93,.96,1],intensity:1.1,soft:.75,fall:.1}),Ai(e,{w:7,h:11,az:78*r,el:2*r,dist:s,color:[.76,.84,1],intensity:.45,soft:.7,fall:.3}),Ai(e,{w:1.3,h:18,az:-72*r,el:6*r,dist:s,color:[1,.985,.965],intensity:11,soft:.18,fall:.5}),Ai(e,{w:1,h:18,az:142*r,el:4*r,dist:s,color:[.78,.87,1],intensity:6.5,soft:.25,fall:.45}),Ai(e,{w:.7,h:14,az:32*r,el:0,dist:s,color:[.96,.97,1],intensity:3,soft:.3,fall:.5});for(let[c,l,h,f]of[[-10,-4,1.4,6],[60,-6,.9,4],[120,-3,1.2,5],[200,-5,1,6],[280,-4,.8,5]])Ai(e,{w:f,h:.5,az:c*r,el:l*r,dist:s,color:[.9,.94,1],intensity:h,soft:.6,fall:0});Ai(e,{w:22,h:22,az:0,el:-89*r,dist:s,color:[.2,.33,.7],intensity:.2,soft:.6,fall:0});let o=new ws(i),a=o.fromScene(e,0,.1,100,{size:t});return o.dispose(),e.traverse(c=>{c.geometry&&c.geometry.dispose(),c.material&&c.material.dispose()}),a}var Eu=[2,3,4,5];function Tu(){let i=[];for(let t=0;t<6;t++)i.push(new Te(0,1,.1,0));return{uTime:{value:0},uFrost:{value:0},uPlates:{value:i},uGlow:{value:0},uGlowPos:{value:new C(0,-2.64,0)},uGlowColor:{value:new qt(.32,.72,1)},uPulse:{value:new Te(-10,0,.055,0)},uPulseColor:{value:new qt(.32,.72,1)},uSparkle:{value:1}}}var Gg=`
varying vec3 vWPos;
uniform float uTime, uFrost, uGlow, uSparkle;
uniform vec4 uPlates[6];
uniform vec3 uGlowPos, uGlowColor;
float nHash(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float vNoise(vec3 x) {
  vec3 i = floor(x), f = fract(x);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(nHash(i), nHash(i + vec3(1, 0, 0)), f.x), mix(nHash(i + vec3(0, 1, 0)), nHash(i + vec3(1, 1, 0)), f.x), f.y),
             mix(mix(nHash(i + vec3(0, 0, 1)), nHash(i + vec3(1, 0, 1)), f.x), mix(nHash(i + vec3(0, 1, 1)), nHash(i + vec3(1, 1, 1)), f.x), f.y), f.z);
}
float frostField(vec3 p, vec3 n) {
  float r = length(p.xz);
  float acc = 0.0;
  for (int i = 0; i < 6; i++) {
    vec4 pl = uPlates[i];
    if (pl.w < 0.002) continue;
    float dy = p.y - pl.x;                                   // 0 at the top face, -t at the bottom face
    float inSlab = step(-pl.z - 0.006, dy) * step(dy, 0.006);
    // on the plate: a rime band that creeps inward from the rim as the stage cools
    // (on the side face it grows from both corners, so the middle of the edge stays gold longest)
    float reach = 0.03 + 0.2 * pl.w;
    float dc = min(max(-dy, 0.0), max(dy + pl.z, 0.0));
    float rim = smoothstep(reach, 0.0, max(pl.y - r, 0.0) + dc * 2.2) * inSlab;
    // hardware just above / below the faces: connectors, clamps, cable ends
    float vy = max(dy, 0.0) + max(-(dy + pl.z), 0.0);
    float hw = smoothstep(0.025 + 0.1 * pl.w, 0.0, vy) * (1.0 - inSlab) * step(r, pl.y);
    acc = max(acc, pl.w * max(rim, hw * 0.8));
  }
  return acc * mix(0.75, 1.0, clamp(n.y * 0.5 + 0.5, 0.0, 1.0));
}
`,Wg=`
attribute vec2 aCab;
varying vec2 vCab;
`,Xg=`
varying vec2 vCab;
uniform vec4 uPulse;
uniform vec3 uPulseColor;
float pulseGain(float s) {
  // visible intensity after each attenuator the signal has passed (a clear step per stage,
  // gentler than the real 20 dB so the packet can still be followed down to the MXC)
  float g = 1.0;
  if (s > 2.0) g *= 0.58;
  if (s > 3.0) g *= 0.58;
  if (s > 4.0) g *= 0.58;
  if (s > 5.0) g *= 0.58;
  return g;
}
`;function Rn(i,t,e={}){let n=e.bounce||0,s=!!e.cable,r=e.frost!==!1,o=e.glow!==!1,a=e.octaves||2;i.onBeforeCompile=l=>{l.uniforms.uTime=t.uTime,l.uniforms.uFrost=t.uFrost,l.uniforms.uPlates=t.uPlates,l.uniforms.uGlow=t.uGlow,l.uniforms.uGlowPos=t.uGlowPos,l.uniforms.uGlowColor=t.uGlowColor,l.uniforms.uSparkle=t.uSparkle,s&&(l.uniforms.uPulse=t.uPulse,l.uniforms.uPulseColor=t.uPulseColor);let h=l.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;`+(s?Wg:"")).replace("#include <project_vertex>",`#include <project_vertex>
        {
          vec4 wp4 = vec4(transformed, 1.0);
          #ifdef USE_INSTANCING
            wp4 = instanceMatrix * wp4;
          #endif
          vWPos = (modelMatrix * wp4).xyz;
        }`+(s?`
        vCab = aCab;`:""));l.vertexShader=h;let f=l.fragmentShader.replace("#include <common>",`#include <common>
`+Gg+(s?Xg:""));s&&(f=f.replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
  roughnessFactor = vCab.y;`)),f=f.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
      vec3 nWN = inverseTransformDirection(normal, viewMatrix);
      float frostAmt = 0.0;
      ${r?`
      float pxw = length(fwidth(vWPos));   // world size of a pixel (derivatives taken outside branches)
      if (uFrost > 0.001) {
        float field = frostField(vWPos, nWN);
        if (field > 0.002) {
          // solid where the field is strong; a ragged, feathery front where it is weak.
          // Fine noise is faded out where it would be smaller than a pixel (no shimmer).
          float nz = vNoise(vWPos * 34.0);
          ${a>1?`
          float mz = mix(0.5, vNoise(vWPos * 72.0 + 11.3), 1.0 - smoothstep(0.35, 1.0, 72.0 * pxw));
          float fz = mix(0.5, vNoise(vWPos * 115.0 + 3.1), 1.0 - smoothstep(0.35, 1.0, 115.0 * pxw));
          float grain = mix(0.5, vNoise(vWPos * 260.0 + 7.1), 1.0 - smoothstep(0.35, 1.0, 260.0 * pxw));`:`
          float mz = nz;
          float fz = 0.5;
          float grain = 0.5;`}
          float front = field - (0.62 * nz + 0.38 * fz) * 0.6;
          float cover = smoothstep(0.04, 0.3, front);
          // fine speckle: mostly solid rime where the field is strong, metal specks show through
          // where it thins, so the front reads feathery instead of painted
          float sp = 0.55 * mz + 0.45 * fz;
          frostAmt = cover * smoothstep(0.36, 0.6, field + (sp - 0.5) * 1.0) * 0.95;
          // thin rime is a translucent blue-grey, thick rime at the corners is white
          float thick = smoothstep(0.45, 0.95, field);
          vec3 rime = mix(vec3(0.5, 0.62, 0.78), vec3(0.86, 0.93, 1.0), thick) * (0.74 + 0.26 * (0.5 * mz + 0.5 * grain));
          frostAmt *= 0.72 + 0.28 * thick;
          diffuseColor.rgb = mix(diffuseColor.rgb, rime, frostAmt);
          metalnessFactor = mix(metalnessFactor, 0.0, frostAmt);
          roughnessFactor = mix(roughnessFactor, 0.5 + 0.3 * (1.0 - grain), frostAmt);
        }
      }`:""}
    `),f=f.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
      ${r?`
      if (frostAmt > 0.01) {
        // a little scattered light so the rime reads white in a dark room, plus distance-faded glints
        totalEmissiveRadiance += vec3(0.03, 0.045, 0.066) * frostAmt;
        float fres = 1.0 - clamp(dot(normal, normalize(vViewPosition)), 0.0, 1.0);
        totalEmissiveRadiance += vec3(0.10, 0.16, 0.24) * (fres * fres * fres) * frostAmt;
        vec3 cell = floor(vWPos * 210.0);
        float h = nHash(cell);
        float tw = uSparkle > 0.5 ? 0.5 + 0.5 * sin(uTime * 2.3 + h * 61.0) : 0.8;
        float near = 1.0 - smoothstep(2.5, 8.0, length(vViewPosition));
        totalEmissiveRadiance += vec3(0.75, 0.88, 1.0) * step(0.975, h) * tw * frostAmt * near * 2.6;
      }`:""}
      ${o?`
      if (uGlow > 0.001) {
        vec3 gd = uGlowPos - vWPos;
        float gl = dot(gd, gd);
        float fall = exp(-gl * 3.2);
        float facing = 0.3 + 0.7 * clamp(dot(nWN, normalize(gd)), 0.0, 1.0);
        totalEmissiveRadiance += uGlowColor * (uGlow * fall * facing * 0.55);
      }`:""}
      ${s?`
      if (vCab.x >= 0.0 && uPulse.w > 0.001) {
        float ds = vCab.x - uPulse.x;
        float head = exp(-ds * ds / (uPulse.z * uPulse.z));
        float tail = ds < 0.0 ? exp(ds * 7.0) * 0.28 : 0.0;   // short fading wake above the head
        float g = pulseGain(uPulse.x);
        totalEmissiveRadiance += uPulseColor * ((head + tail) * g * uPulse.y * uPulse.w);
      }`:""}
    `),n>0&&(f=f.replace("#include <aomap_fragment>",`#include <aomap_fragment>
        {
          float down = smoothstep(0.15, -0.85, nWN.y);
          vec3 g = diffuseColor.rgb;
          reflectedLight.indirectSpecular = mix(reflectedLight.indirectSpecular, reflectedLight.indirectSpecular * g * 1.25 + g * g * 0.010, down * ${n.toFixed(3)});
        }`)),l.fragmentShader=f};let c=`nadir-${s?"cable":"m"}-${n.toFixed(2)}-${r?"f"+a:"nf"}-${o?"g":"ng"}`;return i.customProgramCacheKey=()=>c,i}var $n=[1,.71,.34];function wu(i,t){let e={octaves:t.frostOctaves},n=Rn(new qe({color:16777215,vertexColors:!0,metalness:1,roughness:.24}),i,{...e,bounce:.6});n.color.setRGB($n[0],$n[1],$n[2]);let s=Rn(new qe({color:16777215,vertexColors:!0,metalness:1,roughness:.3}),i,e);s.color.setRGB(.64,.65,.68);let r=Rn(new qe({color:16777215,vertexColors:!0,metalness:1,roughness:.35}),i,{...e,cable:!0}),o=Rn(new qe({color:16777215,vertexColors:!0,metalness:.15,roughness:.42}),i,e);o.color.setRGB(.025,.028,.034);let a=Rn(new qe({color:16777215,vertexColors:!0,metalness:0,roughness:.62}),i,e),c=Rn(new qe({color:16777215,metalness:1,roughness:.22}),i,e);return{gold:n,silver:s,cable:r,dark:o,diel:a,conn:c}}function Gi(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new we,l=0;for(let h=0;h<i.length;++h){let f=i[h],u=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in f.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(f.attributes[p]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in f.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(f.morphAttributes[p])}if(t){let p;if(e)p=f.index.count;else if(f.attributes.position!==void 0)p=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(e){let h=0,f=[];for(let u=0;u<i.length;++u){let p=i[u].index;for(let x=0;x<p.count;++x)f.push(p.getX(x)+h);h+=i[u].attributes.position.count}c.setIndex(f)}for(let h in r){let f=Au(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,f)}for(let h in o){let f=o[h][0].length;if(f!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<f;++u){let p=[];for(let y=0;y<o[h].length;++y)p.push(o[h][y][u]);let x=Au(p);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(x)}}}return c}function Au(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new be(o,e,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let f=c/e;for(let u=0,p=h.count;u<p;u++)for(let x=0;x<e;x++){let y=h.getComponent(u,x);a.setComponent(u+f,x,y)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var br=new C;function Cn(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;br.copy(t),br[n]=0,br.normalize();let l=.5*o/(o+a),h=1-br.angleTo(i)/c;return Math.sign(br[e])===1?h*l:a/(o+a)+l+l*(1-h)}var oi=class i extends Ge{constructor(t=1,e=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new C,l=new C,h=new C(t,e,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,u=this.attributes.normal.array,p=this.attributes.uv.array,x=f.length/6,y=new C,m=.5/o;for(let d=0,E=0;d<f.length;d+=3,E+=2)switch(c.fromArray(f,d),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),f[d+0]=h.x*Math.sign(c.x)+l.x*r,f[d+1]=h.y*Math.sign(c.y)+l.y*r,f[d+2]=h.z*Math.sign(c.z)+l.z*r,u[d+0]=l.x,u[d+1]=l.y,u[d+2]=l.z,Math.floor(d/x)){case 0:y.set(1,0,0),p[E+0]=Cn(y,l,"z","y",r,n),p[E+1]=1-Cn(y,l,"y","z",r,e);break;case 1:y.set(-1,0,0),p[E+0]=1-Cn(y,l,"z","y",r,n),p[E+1]=1-Cn(y,l,"y","z",r,e);break;case 2:y.set(0,1,0),p[E+0]=1-Cn(y,l,"x","z",r,t),p[E+1]=Cn(y,l,"z","x",r,n);break;case 3:y.set(0,-1,0),p[E+0]=1-Cn(y,l,"x","z",r,t),p[E+1]=1-Cn(y,l,"z","x",r,n);break;case 4:y.set(0,0,1),p[E+0]=1-Cn(y,l,"x","y",r,t),p[E+1]=1-Cn(y,l,"y","x",r,e);break;case 5:y.set(0,0,-1),p[E+0]=Cn(y,l,"x","y",r,t),p[E+1]=1-Cn(y,l,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var Ne=(i,t,e)=>i<t?t:i>e?e:i,ie=(i,t,e)=>i+(t-i)*e,Ie=(i,t,e)=>{let n=Ne((e-i)/(t-i),0,1);return n*n*(3-2*n)},Ru=(i,t,e)=>{let n=Ne((e-i)/(t-i),0,1);return n*n*n*(n*(n*6-15)+10)},Sc=i=>1-Math.pow(1-Ne(i,0,1),3),Cu=i=>(i=Ne(i,0,1),i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2);function rn(i){let t=i>>>0;return function(){t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}function Pu(i,t,e,n){let s=i.x-t,r=Math.exp(-e*n),o=(i.v+e*s)*n;i.v=(i.v-e*o)*r,i.x=t+(s+o)*r}function qg(){let i=globalThis.scheduler;return i&&typeof i.yield=="function"?i.yield():new Promise(t=>{if(typeof MessageChannel=="function"){let e=new MessageChannel;e.port1.onmessage=()=>{e.port1.close(),t()},e.port2.postMessage(0)}else setTimeout(t,0)})}function Iu({budget:i=12,onProgress:t}={}){let e=()=>performance.now(),n=e(),s={longest:0,longestLabel:"",label:"",progress:0,slices:0,due(){return e()-n>i},async yield(r){let o=e()-n;o>s.longest&&(s.longest=o,s.longestLabel=r||s.label),s.slices++,await qg(),n=e()},async maybeYield(r){e()-n>i&&await s.yield(r)},step(r,o){if(s.label=r,o!==void 0&&(s.progress=o,t))try{t(o)}catch{}},mark(r){let o=e()-n;o>s.longest&&(s.longest=o,s.longestLabel=r||s.label)}};return s}function Ri(i){let t=document.createElement("canvas");return t.width=t.height=i,t}function Wi(i,{srgb:t=!1,aniso:e=4}={}){let n=new er(i);return n.colorSpace=t?Xe:zn,n.flipY=!1,n.wrapS=n.wrapT=Mn,n.anisotropy=e,n.generateMipmaps=!0,n.minFilter=Yn,n.needsUpdate=!0,n}var bc={maybeYield:async()=>{}};async function Lu({R:i,bore:t,size:e,holes:n,label:s,seed:r,stepR:o},a=bc){let c=rn(r),l=Ri(e),h=Ri(e),f=l.getContext("2d"),u=h.getContext("2d"),p=e/(2*i),x=e/2,y=e/2,m=M=>(M/(2*i)+.5)*e;f.fillStyle="rgb(240,240,240)",f.fillRect(0,0,e,e),u.fillStyle="rgb(128,70,0)",u.fillRect(0,0,e,e);let d=c()*6.28,E=Math.max(1,t*p),A=o*p,v=0;for(let M=E;M<A;M+=.7+c()*1.3){let g=.13+.1*(.5+.5*Math.sin(M*.045+d)*Math.sin(M*.011+d*2))+(c()-.5)*.05,T=128+(c()-.5)*10|0;u.strokeStyle=`rgb(${T},${Math.round(g*255)},0)`,u.lineWidth=1.3,u.beginPath(),u.arc(x,y,M,0,Math.PI*2),u.stroke();let P=236+(c()-.5)*10|0;f.strokeStyle=`rgb(${P},${P},${P})`,f.lineWidth=1.3,f.beginPath(),f.arc(x,y,M,0,Math.PI*2),f.stroke(),(++v&63)===0&&await a.maybeYield("plate rings")}u.strokeStyle="rgb(128,100,0)",u.lineWidth=i*p-A+2,u.beginPath(),u.arc(x,y,A+(i*p-A)/2,0,Math.PI*2),u.stroke(),f.strokeStyle="rgb(228,228,228)",f.lineWidth=i*p-A+2,f.beginPath(),f.arc(x,y,A+(i*p-A)/2,0,Math.PI*2),f.stroke(),u.strokeStyle="rgb(70,150,0)",u.lineWidth=Math.max(1.5,.006*p),u.beginPath(),u.arc(x,y,A,0,Math.PI*2),u.stroke();for(let M=0;M<14;M++){let R=c()*Math.PI*2,g=(t+c()*(i-t))*p,T=x+Math.cos(R)*g,P=y+Math.sin(R)*g,D=(.15+c()*.45)*p,F=f.createRadialGradient(T,P,0,T,P,D),H=205+c()*25|0;F.addColorStop(0,`rgba(${H},${H},${H},0.35)`),F.addColorStop(1,`rgba(${H},${H},${H},0)`),f.fillStyle=F,f.fillRect(T-D,P-D,D*2,D*2)}await a.maybeYield("plate marks");let S=(M,R,g,T)=>{M.beginPath(),M.arc(R,g,Math.max(.6,T),0,Math.PI*2),M.fill()};v=0;for(let M of n){let R=m(M.x),g=m(M.z),T=M.r*p;M.kind==="conn"?(u.fillStyle="rgb(120,30,0)",S(u,R,g,T*2.1),f.fillStyle="rgb(250,250,250)",S(f,R,g,T*2.1),u.fillStyle="rgb(60,200,0)",S(u,R,g,T*.9),f.fillStyle="rgb(40,40,40)",S(f,R,g,T*.9)):M.kind==="port"?(u.fillStyle="rgb(90,60,0)",S(u,R,g,T*1.25),f.fillStyle="rgb(214,214,214)",S(f,R,g,T*1.25),u.fillStyle="rgb(0,235,0)",S(u,R,g,T),f.fillStyle="rgb(10,10,10)",S(f,R,g,T)):(u.fillStyle="rgb(70,170,0)",S(u,R,g,T*1.35),f.fillStyle="rgb(150,150,150)",S(f,R,g,T*1.35),u.fillStyle="rgb(10,230,0)",S(u,R,g,T),f.fillStyle="rgb(22,22,22)",S(f,R,g,T)),(++v&127)===0&&await a.maybeYield("plate holes")}if(s){let M=Math.max(7,.042*p),R=-.6,g=(o-.07)*p;for(let[T,P]of[[u,"rgb(96,150,0)"],[f,"rgb(170,170,170)"]])T.save(),T.translate(x+Math.cos(R)*g,y+Math.sin(R)*g),T.rotate(R+Math.PI/2),T.font=`600 ${M}px Inter, "Helvetica Neue", Arial, sans-serif`,T.fillStyle=P,T.textAlign="center",T.textBaseline="middle",T.fillText(s,0,0),T.restore()}for(let[M,R]of[[u,"rgb(128,90,0)"],[f,"rgb(232,232,232)"]])M.strokeStyle=R,M.lineWidth=6,M.beginPath(),M.arc(x,y,i*p-1,0,Math.PI*2),M.stroke(),t>0&&(M.beginPath(),M.arc(x,y,t*p+1,0,Math.PI*2),M.stroke());return await a.maybeYield("plate label"),{map:Wi(l,{srgb:!0}),rough:Wi(h)}}function ka(){let o=[];for(let h=0;h<5;h++)for(let f=0;f<5;f++)o.push({i:f,j:h,x:.24+f*.13,y:.24+h*.13});let a=[];for(let h=0;h<5;h++)for(let f=0;f<4;f++){let u=o[h*5+f];a.push({idx:f+4*h,pts:[[u.x+.044+.0062,u.y],[u.x+.13-.044-.0062,u.y]]})}for(let h=0;h<4;h++)for(let f=0;f<5;f++){let u=o[h*5+f];a.push({idx:20+f+5*h,pts:[[u.x,u.y+.044+.0062],[u.x,u.y+.13-.044-.0062]]})}let c=[],l=[];for(let h=0;h<4;h++)for(let f=0;f<5;f++){let u=h===0?o[f]:h===1?o[20+f]:h===2?o[f*5]:o[f*5+5-1],{x:p,y:x}=u,y,m;h===0?(y=[[p+.012,x-.044-.0062],[p+.012,.13],[p+.012,.085]],m=[p+.012,.06,"v"]):h===1?(y=[[p-.012,x+.044+.0062],[p-.012,.87],[p-.012,.915]],m=[p-.012,.94,"v"]):h===2?(y=[[p-.044-.0062,x-.012],[.13,x-.012],[.085,x-.012]],m=[.06,x-.012,"h"]):(y=[[p+.044+.0062,x+.012],[.87,x+.012],[.915,x+.012]],m=[.94,x+.012,"h"]),c.push(y),l.push(m)}return{N:5,pitch:.13,x0:.24,L:.044,W:.0085,G:.0062,qubits:o,couplers:a,flux:c,pads:l}}async function Du(i,t=bc){let e=Ri(i),n=Ri(i),s=Ri(i),r=e.getContext("2d"),o=n.getContext("2d"),a=s.getContext("2d"),c=i,l={sub:["#0b111b","rgb(0,110,0)","rgb(0,0,0)"],metal:["#c3ccd8","rgb(0,52,255)",null],gold:["#d9b46a","rgb(0,70,255)",null],dark:["#05070b","rgb(0,150,0)","rgb(0,0,0)"]},h=[r,o,a],f=(v,S,M,R,g,T)=>{let P=l[v];for(let D=0;D<3;D++){let F=D===2&&T?T:P[D];F&&(h[D].fillStyle=F,h[D].fillRect(S*c,M*c,R*c,g*c))}},u=(v,S,M,R)=>{let g=l[v];for(let T=0;T<3;T++){let P=T===2&&R?R:g[T];if(!P)continue;let D=h[T];D.strokeStyle=P,D.lineWidth=S*c,D.lineJoin="round",D.lineCap="butt",D.beginPath(),D.moveTo(M[0][0]*c,M[0][1]*c);for(let F=1;F<M.length;F++)D.lineTo(M[F][0]*c,M[F][1]*c);D.stroke()}},p=(v,S=.0045,M=.0032,R)=>{u("sub",S+2*M,v),u("metal",S,v,R)};a.fillStyle="#000",a.fillRect(0,0,c,c),f("sub",0,0,1,1);let x=.03;f("metal",x,x,1-2*x,1-2*x);{let v=Math.max(4,Math.round(.011*c)),S=Math.max(1,Math.round(.0028*c));for(let[M,R,g]of[[r,l.metal[0],l.sub[0]],[o,l.metal[1],l.sub[1]]]){let T=Ri(v),P=T.getContext("2d");P.fillStyle=R,P.fillRect(0,0,v,v),P.fillStyle=g,P.fillRect(0,0,S,S);let D=M.createPattern(T,"repeat");M.save(),M.translate(Math.round((x+.011)*c),Math.round((x+.011)*c)),M.fillStyle=D,M.fillRect(0,0,Math.round((1-2*x-.022)*c),Math.round((1-2*x-.022)*c)),M.restore()}}await t.maybeYield("chip ground");let y=ka(),{L:m,W:d,G:E,qubits:A}=y;for(let{x:v,y:S}of A)f("sub",v-m-E,S-d/2-E,2*(m+E),d+2*E),f("sub",v-d/2-E,S-m-E,d+2*E,2*(m+E));for(let v of y.couplers)p(v.pts,.004,.003,"rgb(0,0,255)");for(let v=0;v<y.N-1;v++)for(let S=0;S<y.N-1;S++){let{x:M,y:R}=A[v*y.N+S],g=M+y.pitch/2,T=R+y.pitch/2,P=[[M+m*.55,R+m*.55],[g-.028,T-.024]],D=1;for(let F=0;F<7;F++){let H=T-.024+F*.008;P.push([g-.028*D,H],[g+.028*D,H]),D=-D}p(P,.0026,.0018,"rgb(0,140,0)")}await t.maybeYield("chip resonators");for(let v of y.flux)p(v,.004,.003);for(let[v,S,M]of y.pads)M==="v"?(f("sub",v-.022,S-.026,.044,.052),f("gold",v-.014,S-.018,.028,.036)):(f("sub",v-.026,S-.022,.052,.044),f("gold",v-.018,S-.014,.036,.028));for(let{x:v,y:S}of A){f("metal",v-m,S-d/2,2*m,d),f("metal",v-d/2,S-m,d,2*m);let M=a.createRadialGradient(v*c,S*c,0,v*c,S*c,m*c);M.addColorStop(0,"rgb(255,0,0)"),M.addColorStop(.28,"rgb(170,0,0)"),M.addColorStop(1,"rgb(26,0,0)"),a.fillStyle=M,a.fillRect((v-m)*c,(S-d/2)*c,2*m*c,d*c),a.fillRect((v-d/2)*c,(S-m)*c,d*c,2*m*c),f("dark",v+m*.62,S+d/2,.003,E*.9)}for(let[v,S]of[[.055,.055],[.945,.055],[.055,.945],[.945,.945]])f("sub",v-.016,S-.0025,.032,.005),f("sub",v-.0025,S-.016,.005,.032);for(let[v,S]of[[r,"#0b111b"],[o,"rgb(0,110,0)"]])v.font=`600 ${.016*c}px Inter, "Helvetica Neue", Arial, sans-serif`,v.fillStyle=S,v.textBaseline="middle",v.fillText("NDR-25Q  \xB7  REV C",.62*c,.975*c);return await t.maybeYield("chip qubits"),{map:Wi(e,{srgb:!0,aniso:8}),mr:Wi(n,{aniso:8}),em:Wi(s,{aniso:8}),layout:y}}async function Nu(i,t,e=bc,n=9){let s=rn(n),r=Ri(i),o=Ri(i),a=r.getContext("2d"),c=o.getContext("2d"),l=i,h=["#d6b06a","rgb(0,62,255)"],f=["#0c1117","rgb(0,150,0)"],u=(y,m)=>{a.fillStyle=y[0],c.fillStyle=y[1],m(a),m(c)},p=(y,m,d)=>{for(let[E,A]of[[a,y[0]],[c,y[1]]]){E.strokeStyle=A,E.lineWidth=m*l,E.lineJoin="round",E.beginPath(),E.moveTo(d[0][0]*l,d[0][1]*l);for(let v=1;v<d.length;v++)E.lineTo(d[v][0]*l,d[v][1]*l);E.stroke()}};u(f,y=>y.fillRect(0,0,l,l)),u(h,y=>y.fillRect(.012*l,.012*l,.976*l,.976*l)),u(f,y=>y.fillRect(.255*l,.255*l,.49*l,.49*l)),u(h,y=>y.fillRect(.262*l,.262*l,.476*l,.476*l));let x=[];for(let y=0;y<4;y++){let m=t[y];for(let d=0;d<m;d++){let E=.36+(d+.5)/m*.28,A=.2+(d+.5)/m*.6,v;y===0?v=[[E,.262],[E,.2],[A,.1],[A,0]]:y===1?v=[[E,.738],[E,.8],[A,.9],[A,1]]:y===2?v=[[.262,E],[.2,E],[.1,A],[0,A]]:v=[[.738,E],[.8,E],[.9,A],[1,A]],p(f,.024,v),p(h,.011,v);for(let S=0;S<v.length-1;S++){let[M,R]=v[S],[g,T]=v[S+1],P=Math.hypot(g-M,T-R),D=-(T-R)/P,F=(g-M)/P,H=Math.max(1,Math.floor(P/.022));for(let U=0;U<=H;U++){let G=U/H,W=M+(g-M)*G,X=R+(T-R)*G;x.push([W+D*.026,X+F*.026],[W-D*.026,X-F*.026])}}}}for(let y=0;y<220;y++){let m=.03+s()*.94,d=.03+s()*.94;m>.22&&m<.78&&d>.22&&d<.78||x.push([m,d])}for(let[y,m]of x)y<.02||y>.98||m<.02||m>.98||y>.25&&y<.75&&m>.25&&m<.75||u(f,d=>{d.beginPath(),d.arc(y*l,m*l,.0055*l,0,6.2832),d.fill()});for(let[y,m]of[[.06,.06],[.94,.06],[.06,.94],[.94,.94]])u(f,d=>{d.beginPath(),d.arc(y*l,m*l,.03*l,0,6.2832),d.fill()});return await e.maybeYield("pcb"),{map:Wi(r,{srgb:!0,aniso:8}),mr:Wi(o,{aniso:8})}}var Ci=Math.PI/180,Zt=[{key:"300K",label:"NADIR  \xB7  STAGE 01  \xB7  300 K",y:3.5,R:2.05,t:.2,bore:.3},{key:"50K",label:"NADIR  \xB7  STAGE 02  \xB7  50 K",y:2.25,R:1.88,t:.13,bore:.3},{key:"4K",label:"NADIR  \xB7  STAGE 03  \xB7  4 K",y:1,R:1.68,t:.13,bore:.28},{key:"STILL",label:"NADIR  \xB7  STAGE 04  \xB7  STILL",y:-.3,R:1.44,t:.12,bore:.24},{key:"CP",label:"NADIR  \xB7  STAGE 05  \xB7  100 mK",y:-1.3,R:1.26,t:.11,bore:.26},{key:"MXC",label:"NADIR  \xB7  STAGE 06  \xB7  MXC",y:-2.35,R:1.1,t:.13,bore:0}],on=18*Ci,Ga=-3.22,Ec={cuni:{tint:[.66,.61,.56],rough:.32,r:.0105},ss:{tint:[.56,.57,.585],rough:.38,r:.0078},nbti:{tint:[.49,.5,.53],rough:.28,r:.0075},cu:{tint:[.93,.62,.5],rough:.3,r:.0105}},Yg=[{sc:45,outer:["cuni","cuni","nbti","nbti","nbti"],inner:["ss","ss","ss","ss","cu"],size:.8},{sc:105,outer:["ss","ss","ss","ss","ss"],inner:["cuni","cuni","nbti","nbti","nbti"],size:.75},{sc:165,outer:["cuni","cuni","cuni","cuni","cu"],inner:["ss","ss","ss","ss","ss"],size:.85},{sc:225,outer:["cuni","cuni","nbti","nbti","nbti"],inner:null,size:1},{sc:285,outer:["ss","ss","cuni","cuni","cuni"],inner:["ss","ss","cu","cu","cu"],size:.75},{sc:345,outer:["cuni","cuni","cuni","cuni","cuni"],inner:["ss","ss","nbti","nbti","nbti"],size:.8}],Zg=345,Uu=new C,pe=(i,t,e)=>new C(i*Math.sin(t),e,i*Math.cos(t));function Jg(i,t){let e=i.attributes.position,n=new Float32Array(e.count*3);for(let s=0;s<e.count;s++){Uu.fromBufferAttribute(e,s);let r=t(Uu);n[s*3]=r[0],n[s*3+1]=r[1],n[s*3+2]=r[2]}return i.setAttribute("color",new be(n,3)),i}function $g(i){if(!i.index){let t=i.attributes.position.count,e=new Uint32Array(t);for(let n=0;n<t;n++)e[n]=n;i.setIndex(new be(e,1))}return i}function jt(i,t,e){t&&i.applyMatrix4(t);for(let n of Object.keys(i.attributes))n!=="position"&&n!=="normal"&&i.deleteAttribute(n);return $g(i),Jg(i,typeof e=="function"?e:()=>e||[1,1,1])}var Fu=new nn,Kg=new Sn,Wa=new C(1,1,1),ue=(i,t=0,e=0,n=0,s=1)=>(Fu.setFromEuler(Kg.set(e,t,n,"YXZ")),Wa.set(s,s,s),new Qt().compose(i,Fu,Wa)),Rs=i=>(i.index?i.index.count:i.attributes.position.count)/3;function jg(i,t,e){let n=[],s=[],r=[],o=[],a=[],c=0;for(let h=0;h<i.length-1;h++){let[f,u]=i[h],[p,x]=i[h+1],y=p-f,m=x-u,d=Math.hypot(y,m);if(d<1e-7)continue;let E=-m/d,A=y/d;for(let v=0;v<=t;v++){let S=v/t*Math.PI*2,M=Math.sin(S),R=Math.cos(S);for(let[g,T]of[[f,u],[p,x]])n.push(g*M,T,g*R),s.push(E*M,A,E*R),r.push(g*M/(2*e)+.5,g*R/(2*e)+.5),o.push(R,0,-M,1)}for(let v=0;v<t;v++){let S=c+v*2,M=S+1,R=S+2,g=S+3;a.push(S,M,R,M,g,R)}c+=(t+1)*2}let l=new we;return l.setAttribute("position",new de(n,3)),l.setAttribute("normal",new de(s,3)),l.setAttribute("uv",new de(r,2)),l.setAttribute("tangent",new de(o,4)),l.setIndex(a),l}function Ou(i,t,e,n,s,r,o){let a=new On(i,t,e,n,!1),c=a.attributes.uv,l=c.count,h=new Float32Array(l*2);for(let f=0;f<l;f++)h[f*2]=r>=0?r+c.getX(f):-1,h[f*2+1]=o;return jt(a,null,s),a.setAttribute("aCab",new be(h,2)),a}async function Bu({preset:i,U:t,mats:e,slicer:n}){let s=rn(20261011),r=new pn;r.name="machine";let o=[],a=[],c=[],l=[],h={plates:0,cables:0,connectors:0,misc:0},f=[],u=[],p=I=>(r.add(I),u.push(I),I),x=[15,75,135,195,255,315].map(I=>I*Ci),y=225*Ci,m=[];for(let I of Yg){let B=I.sc===225;m.push({sc:I.sc,ang:(I.sc-11+s()*4)*Ci,f:.74+s()*.06,n:B?Math.ceil(i.nOuter/2):i.nOuter,layout:"arc",outer:!0,types:I.outer,size:1}),I.inner&&m.push({sc:I.sc,ang:(I.sc+15+s()*4)*Ci,f:.5+s()*.05,n:i.nInner,layout:s()<.5?"arc":"radial",outer:!1,types:I.inner,size:I.size})}let d=[];for(let I of m)for(let B=0;B<I.n;B++){let $=B-(I.n-1)/2,tt=I.ang,et=I.f;I.layout==="arc"?tt+=$*(.046/(I.f*1.6)):(et+=$*(.05/1.6),tt+=(B%2?1:-1)*.012),d.push({g:I,k:B,th:tt,f:et,jit:.97+s()*.06,rj:(s()-.5)*.06,pulse:!1})}let E=m.find(I=>I.outer&&I.sc===Zg),A=Math.max(0,Math.floor((E.n-1)/2)&-2),v=d.find(I=>I.g===E&&I.k===A);v.pulse=!0;let S=(I,B)=>B===2||B===3||B===5?I.k%2===0:B===4&&I.pulse,M=(I,B)=>{let $=rn(Math.floor(I.ang*1e3)*7+B*131)(),tt=rn(Math.floor(I.ang*1e3)*3+B*17)();return I.outer?B===0?$<.6?{type:"s",bulge:.28+tt*.22,twist:(tt-.5)*.25}:{type:"loop",loopR:.085+tt*.03,at:.45}:B===1?$<.5?{type:"loop",loopR:.08+tt*.03,at:.5}:{type:"s",bulge:.22+tt*.18,twist:(tt-.5)*.35}:B===2?$<.45?{type:"s",bulge:.18+tt*.2,twist:(tt-.5)*.5}:$<.75?{type:"coil",coilR:.034,turns:1.6,at:.45}:{type:"loop",loopR:.09,at:.55}:B===3?$<.5?{type:"s",bulge:.12+tt*.12,twist:(tt-.5)*.3}:{type:"loop",loopR:.075,at:.5}:$<.5?{type:"s",bulge:.1+tt*.1,twist:0}:{type:"coil",coilR:.032,turns:1.6,at:.5}:B===0?{type:"s",bulge:-.06-tt*.06,twist:(tt-.5)*.7}:B===1?$<.5?{type:"s",bulge:.05,twist:.35*(tt<.5?1:-1)}:{type:"coil",coilR:.04,turns:2,at:.5}:B===2?{type:"s",bulge:.08+tt*.06,twist:(tt-.5)*.4}:B===3?$<.6?{type:"s",bulge:.04,twist:.25}:{type:"loop",loopR:.06,at:.5}:{type:"s",bulge:.06,twist:-.2}};function R(I,B,$,tt,et){let mt=[pe(I.r,I.th,I.y),pe(I.r,I.th,I.y-.042)],_t=I.y-.07,Pt=B.y+.07,lt=rn(tt.k*97+Math.floor(tt.th*1e4))()-.5;if($.type==="s"){let Tt=$.bulge*(1+lt*.12),L=9;for(let Dt=0;Dt<=L;Dt++){let Mt=Dt/L,w=Mt*Mt*(3-2*Mt),_=Math.pow(Math.sin(Math.PI*Mt),1.4);mt.push(pe(ie(I.r,B.r,w)+Tt*_,I.th+$.twist*Math.sin(Math.PI*Mt),ie(_t,Pt,Mt)))}}else if($.type==="loop"){let Tt=(tt.k-(tt.g.n-1)/2)*.022*(tt.g.ang>3.1?-1:1),L=ie(_t,Pt,Ne($.at+Tt,.25,.75)+lt*.02),Dt=ie(I.r,B.r,$.at),Mt=$.loopR;mt.push(pe(ie(I.r,Dt,.5),I.th,ie(_t,L,.45)));let w=16;for(let _=0;_<=w;_++){let N=_/w*Math.PI*2,k=et*2.6*(_/w);mt.push(pe(Dt+Mt-Mt*Math.cos(N),I.th+k/Dt,L-Mt*Math.sin(N)))}mt.push(pe(ie(Dt,B.r,.5),B.th+et*2.6/Dt,ie(L,Pt,.55))),mt.push(pe(B.r,B.th,Pt))}else if($.type==="coil"){if(tt.k%3!==0)return R(I,B,{type:"s",bulge:.04,twist:0},tt,et);let Tt=ie(_t,Pt,$.at-.15),L=ie(I.r,B.r,$.at-.15);mt.push(pe(ie(I.r,L,.5),I.th,ie(_t,Tt,.5)));let Dt=$.coilR,Mt=$.turns,w=.07,_=Math.round(12*Mt),N=new C(Math.sin(I.th),0,Math.cos(I.th)),k=new C(Math.cos(I.th),0,-Math.sin(I.th));for(let dt=0;dt<=_;dt++){let ut=dt/_*Mt*Math.PI*2,V=L+Dt,Y=new C().copy(N).multiplyScalar(V-Dt*Math.cos(ut)).addScaledVector(k,Dt*Math.sin(ut));Y.y=Tt-w*(ut/(Math.PI*2)),mt.push(Y)}let J=Tt-w*Mt;mt.push(pe(ie(L,B.r,.5),B.th,ie(J,Pt,.5))),mt.push(pe(B.r,B.th,Pt))}return mt.push(pe(B.r,B.th,B.y+.07*.4),pe(B.r,B.th,B.y)),mt}let g=I=>{for(let B=0;B<Zt.length-1;B++){let $=Zt[B],tt=Zt[B+1];if(I<=$.y&&I>=tt.y)return ie(tt.R,$.R,(I-tt.y)/($.y-tt.y))}return I>Zt[0].y?Zt[0].R:Zt[5].R},T=(I,B,$)=>{let tt=Math.hypot(I.x,I.z),et=g(I.y),pt=ie(.3,1,Ie(.25,.92,tt/et));return pt*=ie(.5,1,Ie(0,.32,B-I.y)),pt*=ie(.75,1,Ie(0,.2,I.y-$)),Ne(pt,.18,1)},P=[],D=[],F=[],H=[],U=[],G=i.aniso>0;for(let I=0;I<Zt.length;I++){n.step("plates",.05+.25*(I/Zt.length));let B=Zt[I],$=[];for(let N of d){let k=N.f*B.R;$.push({x:k*Math.sin(N.th),z:k*Math.cos(N.th),r:.011,kind:"conn"})}let tt=Math.round(B.R*22);for(let N=0;N<tt;N++){let k=N/tt*Math.PI*2+.07;$.push({x:.975*B.R*Math.sin(k),z:.975*B.R*Math.cos(k),r:.0075,kind:"bolt"})}for(let N=0;N<5;N++){let k=s()*Math.PI*2,J=(.3+s()*.45)*B.R;$.push({x:J*Math.sin(k),z:J*Math.cos(k),r:.04+s()*.05,kind:"port"})}for(let N=0;N<7;N++){let k=s()*Math.PI*2,J=(.25+s()*.6)*B.R,dt=J*Math.sin(k),ut=J*Math.cos(k),V=3+Math.floor(s()*4),Y=2+Math.floor(s()*3);for(let ct=0;ct<V;ct++)for(let St=0;St<Y;St++)$.push({x:dt+(ct-V/2)*.05,z:ut+(St-Y/2)*.05,r:.006,kind:"tap"})}let et=B.R*.955,pt=await Lu({R:B.R,bore:B.bore,size:i.tex,holes:$,label:B.label,seed:100+I,stepR:et},n);f.push(pt.map,pt.rough);let mt=.013,_t=.007,Pt=[],lt=B.bore>0?B.bore+mt:0;Pt.push([lt,0],[et,0],[et,-_t],[B.R-mt,-_t],[B.R,-_t-mt],[B.R,-B.t+mt],[B.R-mt,-B.t],[lt,-B.t]),B.bore>0&&Pt.push([B.bore,-B.t+mt],[B.bore,-mt],[B.bore+mt,0]);let Tt=jg(Pt,i.plateSegs,B.R);G||Tt.deleteAttribute("tangent");let L={color:new qt().setRGB($n[0],$n[1],$n[2]),metalness:1,roughness:1,map:pt.map,roughnessMap:pt.rough};i.bump!==!1&&(L.bumpMap=pt.rough,L.bumpScale=.6);let Dt=G?new Bi({...L,anisotropy:i.aniso,anisotropyRotation:Math.PI/2}):new qe(L);Rn(Dt,t,{bounce:.85,octaves:i.frostOctaves});let Mt=new ve(Tt,Dt);Mt.position.y=B.y,Mt.name="plate-"+B.key,p(Mt),P.push(Mt),h.plates+=Rs(Tt);for(let N of d){let k=N.f*B.R,J=k*Math.sin(N.th),dt=k*Math.cos(N.th),ut=ie(.45,1,Ie(.3,.9,N.f)),V=S(N,I);(I>0||N.g.outer)&&(V?H:D).push({x:J,y:B.y,z:dt,rot:s()*1.05,ao:ut}),V&&N.pulse&&U.push(new C(J,B.y+.05,dt)),I<Zt.length-1&&F.push({x:J,y:B.y-B.t,z:dt,rot:s()*1.05,ao:ut*.8})}let w=Math.round(B.R*11),_=new se(.016,.016,.012,10,1,!1);for(let N=0;N<w;N++){let k=N/w*Math.PI*2+.07+Math.PI/w,J=.975*B.R;o.push(jt(_.clone(),ue(new C(J*Math.sin(k),B.y-_t+.006,J*Math.cos(k))),[.9,.9,.9]))}_.dispose(),await n.yield("plate "+B.key)}for(let I=0;I<Zt.length-1;I++){let B=Zt[I],$=Zt[I+1],tt=B.y-B.t,et=$.y,pt=tt-et;for(let mt=0;mt<x.length;mt++){let _t=x[mt],Pt=.9*$.R,lt=Pt*Math.sin(_t),Tt=Pt*Math.cos(_t),L=new se(.026,.026,pt,i.rodSegs,1,!0);o.push(jt(L,ue(new C(lt,(tt+et)/2,Tt)),[1,1,1]));let Dt=new se(.043,.043,.05,i.rodSegs,1,!1);o.push(jt(Dt.clone(),ue(new C(lt,tt-.025,Tt)),[.85,.85,.85])),o.push(jt(Dt,ue(new C(lt,et+.025,Tt)),[.85,.85,.85]))}}await n.maybeYield("rods");let W=[],X=[],ot=[],Q=[];for(let I=0;I<Zt.length-1;I++){n.step("cables",.32+.4*(I/(Zt.length-1)));let B=Zt[I],$=Zt[I+1],tt=[],et=B.y-B.t,pt=$.y,mt=new Map;for(let lt of d){let Tt=M(lt.g,I),L=Ec[lt.g.types[I]],Dt=L.r*lt.g.size*(lt.g.outer?1:.95),Mt=S(lt,I+1),w={r:lt.f*B.R,th:lt.th,y:et-.032},_={r:lt.f*$.R,th:lt.th,y:pt+(Mt?.088:.032)},N=R(w,_,Tt,lt,Dt),k=new mn(N,!1,"centripetal",.5),J=k.getLength(),dt=Tt.type==="loop"?22:Tt.type==="coil"&&lt.k%3===0?34:0,ut=Math.round(Ne((J*30+dt)*i.density,10,120)),V=L.tint,Y=lt.jit,ct=V[0]*Y,St=V[1]*Y,xt=V[2]*Y;if(tt.push(Ou(k,ut,Dt,i.radial,gt=>{let Et=T(gt,et,pt);return[ct*Et,St*Et,xt*Et]},lt.pulse?I:-1,Ne(L.rough+lt.rj,.18,.6))),lt.pulse)for(let Et=I===0?0:1;Et<=40;Et++)X.push({s:I+Et/40,p:k.getPointAt(Et/40)});if(Tt.type==="s"){let gt=mt.get(lt.g);gt||mt.set(lt.g,gt=[]),gt.push({curve:k,rad:Dt,k:lt.k})}(I<3||s()<.5)&&Q.push({curve:k,rad:Dt,gap:I}),await n.maybeYield("cables")}for(let[lt,Tt]of mt)for(let L=0;L+1<Tt.length;L+=2)ot.push({gap:I,g:lt,a:Tt[L],b:Tt[L+1]});let _t=Gi(tt,!1);tt.forEach(lt=>lt.dispose());let Pt=new ve(_t,e.cable);Pt.name="cables-"+I,p(Pt),W.push(Pt),h.cables+=Rs(_t),await n.yield("cables merge")}if(i.clamps){let I=new se(.0085,.0085,.008,8,1,!1);for(let B=0;B<Zt.length-1;B++){let $=Zt[B],tt=$.y-$.t-.064;for(let et of m){let pt=et.layout==="radial",mt=et.f*$.R,_t,Pt,lt,Tt;if(pt)_t=(et.n-1)*(.05/1.6)*$.R+.06,Pt=.062,lt=mt,Tt=et.ang+Math.PI/2;else{let _=(et.n-1)/2*(.046/(et.f*1.6)),N=mt*(1-Math.cos(_));_t=2*mt*Math.sin(_)+.06,Pt=.034+N,lt=mt-N/2,Tt=et.ang}let L=pe(lt,et.ang,tt),Dt=new Ge(_t,.026,Pt);o.push(jt(Dt,ue(L,Tt),[.78,.78,.78]));let Mt=new C(Math.cos(Tt),0,-Math.sin(Tt)),w=new C(Math.sin(Tt),0,Math.cos(Tt));for(let _ of[-1,1]){let N=L.clone().addScaledVector(Mt,_*(_t/2-.016)),k;pt?(N.y-=.017,k=new Qt().makeTranslation(N.x,N.y,N.z)):(N.addScaledVector(w,Pt/2+.004),k=new Qt().makeBasis(Mt,w,new C().crossVectors(Mt,w)).setPosition(N)),o.push(jt(I.clone(),k,[.7,.7,.7]))}}await n.maybeYield("clamps")}I.dispose()}let it=rn(77);if(i.ties){let I=new C,B=new C,$=new C,tt=new C,et=new C,pt=0;for(let mt of ot){if(it()>.32||pt>40)continue;let _t=.24+it()*.12;if(mt.a.curve.getPointAt(_t,I),mt.b.curve.getPointAt(_t,B),I.distanceTo(B)>.09)continue;mt.a.curve.getTangentAt(_t,$);let Pt=I.clone().add(B).multiplyScalar(.5);tt.subVectors(B,I);let lt=tt.length()/2+mt.a.rad+.004;tt.addScaledVector($,-tt.dot($)).normalize(),et.crossVectors($,tt).normalize();let Tt=Math.max(mt.a.rad,mt.b.rad)+.004,L=[];for(let Mt=0;Mt<18;Mt++){let w=Mt/18*Math.PI*2;L.push(Pt.clone().addScaledVector(tt,Math.cos(w)*lt).addScaledVector(et,Math.sin(w)*Tt))}let Dt=new On(new mn(L,!0),18,.0026,4,!0);l.push(jt(Dt,null,[.022,.022,.026])),pt++}await n.maybeYield("ties")}if(i.labels>0){let I=[[.8,.76,.64],[.8,.76,.64],[.86,.86,.84],[.78,.55,.1],[.55,.06,.05],[.07,.16,.5]],B=new C,$=new C,tt=new C(0,1,0),et=new C,pt=new nn,mt=Q.filter(()=>it()<.5).slice(0,i.labels);for(let _t=0;_t<mt.length;_t++){let Pt=mt[_t],lt=.06+it()*.05;Pt.curve.getPointAt(lt,B),Pt.curve.getTangentAt(lt,$),pt.setFromUnitVectors(tt,$);let Tt=I[Math.floor(it()*I.length)],L=new se(Pt.rad*1.42,Pt.rad*1.42,.03,8,1,!1);if(l.push(jt(L,new Qt().compose(B,pt,Wa.set(1,1,1)),Tt)),_t%3===0){et.set(B.x,0,B.z).normalize();let Dt=new Ge(.0016,.026,.032),Mt=new Qt().compose(B.clone().addScaledVector(et,Pt.rad*1.42+.017),pt,Wa.set(1,1,1)),w=new Qt().makeRotationY(Math.atan2(et.x,et.z));Dt.applyMatrix4(w),Dt.applyMatrix4(new Qt().makeTranslation(Mt.elements[12],Mt.elements[13],Mt.elements[14])),l.push(jt(Dt,null,[.84,.81,.7]))}}await n.maybeYield("labels")}{let I=Zt[0],B=[];for(let et of m)if(et.outer)for(let pt=0;pt<4;pt++){let mt=et.ang+(pt-1.5)*.05,_t=et.f*I.R,Pt=[pe(_t,mt,I.y+.06),pe(_t,mt,I.y+.25),pe(_t*.92,mt+.04,I.y+1.2),pe(_t*.75,mt+.08,I.y+2.6),pe(_t*.62,mt+.1,I.y+4.5)],lt=new mn(Pt,!1,"centripetal"),Tt=new On(lt,Math.round(26*i.density)+6,.02,i.radial,!1);B.push(jt(Tt,null,L=>{let Mt=.05+.1*(1-Ie(I.y+.5,I.y+3.5,L.y));return[Mt,Mt*1.04,Mt*1.1]}))}let $=Gi(B,!1);B.forEach(et=>et.dispose());let tt=new ve($,e.dark);tt.name="rt-looms",p(tt),h.cables+=Rs($);for(let et of m){if(!et.outer)continue;let pt=et.f*I.R,mt=new Ge(.34,.07,.15);o.push(jt(mt,ue(pe(pt,et.ang,I.y+.035),et.ang),[.95,.95,.95]))}for(let et=0;et<3;et++){let pt=et/3*Math.PI*2+.5,mt=new se(.04,.04,6,i.rodSegs,1,!0);o.push(jt(mt,ue(pe(1.78,pt,I.y+3)),_t=>{let Pt=1-Ie(I.y+.3,I.y+4,_t.y);return[Pt,Pt,Pt]}))}}await n.maybeYield("looms");{let I=i.rodSegs+8;for(let ut=0;ut<3;ut++){let V=Zt[ut],Y=Zt[ut+1],ct=V.y-V.t,St=Y.y,xt=[],gt=ct-St;if(i.bellows){let Ft=Math.floor(gt/.04)*6;for(let z=0;z<=Ft;z++){let vt=St+z/Ft*gt,nt=(vt-St)/.04*Math.PI*2;xt.push(new Lt(.15+.011*(.5+.5*Math.cos(nt)),vt))}}else xt.push(new Lt(.155,St),new Lt(.155,ct));let Et=new or(xt,I);a.push(jt(Et,null,Ut=>{let Ft=.42*ie(.5,1,Ie(0,.25,ct-Ut.y))*ie(.6,1,Ie(0,.3,Ut.y-St));return[Ft,Ft,Ft]}));for(let Ut of[ct-.02,St+.02]){let Ft=new se(.21,.21,.04,I,1,!1);o.push(jt(Ft,ue(new C(0,Ut,0)),[.9,.9,.9]))}await n.maybeYield("bellows")}let B=1.12,$=new se(.11,.11,Zt[0].y-Zt[0].t-Zt[1].y,I,1,!0);a.push(jt($,ue(pe(B,y,(Zt[0].y-Zt[0].t+Zt[1].y)/2)),[.9,.9,.9]));let tt=new se(.065,.065,Zt[1].y-Zt[1].t-Zt[2].y,I,1,!0);a.push(jt(tt,ue(pe(B*.92,y,(Zt[1].y-Zt[1].t+Zt[2].y)/2)),[.9,.9,.9]));for(let[ut,V,Y]of[[Zt[1].y+.04,.19,B],[Zt[2].y+.035,.13,B*.92],[Zt[0].y-Zt[0].t-.03,.17,B],[Zt[1].y-Zt[1].t-.03,.11,B*.92]]){let ct=new se(V,V,.07,I,1,!1);o.push(jt(ct,ue(pe(Y,y,ut)),[.95,.95,.95]))}let et=Zt[3],pt=new se(.34,.34,.26,I+8,1,!1);o.push(jt(pt,ue(new C(0,et.y-et.t-.13,0)),ut=>{let V=ie(.6,1,Ie(et.y-et.t,et.y-et.t-.2,ut.y));return[V,V,V]}));let mt=new se(.38,.38,.03,I+8,1,!1);o.push(jt(mt,ue(new C(0,et.y-et.t-.27,0)),[.9,.9,.9]));let _t=Zt[5],Pt=et.y-et.t-.29,lt=_t.y+.38,Tt=[],L=7.5;for(let ut=0;ut<=120;ut++){let V=ut/120,Y=V*L*Math.PI*2;Tt.push(new C(Math.sin(Y)*.2,ie(Pt,lt,V),Math.cos(Y)*.2))}let Dt=new On(new mn(Tt),Math.round(260*i.density),.013,i.radial,!1);a.push(jt(Dt,null,[.55,.55,.55]));let Mt=new se(.05,.05,Pt-lt,10,1,!0);a.push(jt(Mt,ue(new C(0,(Pt+lt)/2,0)),[.3,.3,.3]));let w=new se(.3,.3,.34,I+8,1,!1);o.push(jt(w,ue(new C(0,_t.y+.17,0)),[1,1,1]));let _=new se(.34,.34,.035,I+8,1,!1);o.push(jt(_,ue(new C(0,_t.y+.355,0)),[.95,.95,.95]));let N=Zt[4];for(let[ut,V]of[[y,.56],[y+.42,.6]]){for(let ct=0;ct<6;ct++){let St=N.y-N.t-.12-ct*.12,xt=new se(.11,.11,.07,I,1,!1);a.push(jt(xt,ue(pe(V,ut,St)),[.85,.85,.85]))}let Y=new se(.018,.018,N.y-N.t-_t.y,8,1,!0);a.push(jt(Y,ue(pe(V,ut,(N.y-N.t+_t.y)/2)),[.7,.7,.7]))}let k=Zt[2];for(let ut of[30,100,170,300]){let V=ut*Ci,Y=new oi(.16,.06,.09,2,.006);o.push(jt(Y,ue(pe(.52,V,k.y+.03),V),[1,1,1]));for(let ct of[-1,1]){let St=new se(.011,.011,.03,8,1,!1),xt=new C(Math.cos(V),0,-Math.sin(V)),gt=pe(.52,V,k.y+.03).addScaledVector(xt,ct*.093),Et=new Qt().makeRotationFromQuaternion(new nn().setFromUnitVectors(new C(0,1,0),xt)).setPosition(gt);o.push(jt(St,Et,[.85,.85,.85]))}}let J=new se(.12,.12,.3,I,1,!1);c.push(jt(J,ue(pe(.55*Zt[3].R,330*Ci,Zt[3].y+.15)),[1,1,1]));let dt=new se(.125,.125,.025,I,1,!1);o.push(jt(dt,ue(pe(.55*Zt[3].R,330*Ci,Zt[3].y+.31)),[.95,.95,.95]))}await n.yield("column");let at={},Ht=[];{n.step("holder",.76);let I=Zt[5],B=I.y-I.t,$=new C(Math.sin(on),0,Math.cos(on)),tt=new C(Math.cos(on),0,-Math.sin(on)),et=.62,pt=.13,mt=new C(0,Ga,0).addScaledVector($,.08),_t=(V,Y,ct)=>new C().copy(mt).addScaledVector(tt,V).addScaledVector($,ct).add(new C(0,Y,0));Object.assign(at,{face:$,right:tt,Wd:et,Dd:pt,center:mt,L2W:_t});let Pt=Ga-.2,lt=-pt/2-.027,Tt=new oi(.17,B-Pt,.05,2,.008);o.push(jt(Tt,ue(_t(0,(B+Pt)/2-Ga,lt),on),[.9,.9,.9]));let L=B-.04-Ga,Dt=new oi(.3,.08,.1,2,.01);o.push(jt(Dt,ue(_t(0,L,lt),on),[.82,.82,.82]));for(let V of[-.105,.105]){let Y=new se(.016,.016,.014,14,1,!1);o.push(jt(Y,ue(_t(V,L,lt+.057),on,Math.PI/2),[.8,.8,.8]));let ct=new se(.007,.007,.004,6,1,!1);c.push(jt(ct,ue(_t(V,L,lt+.063),on,Math.PI/2),[1,1,1]))}for(let V of[-.045,.045]){let Y=new se(.012,.012,.01,12,1,!1);o.push(jt(Y,ue(_t(V,et/2+.07,lt+.03),on,Math.PI/2),[.8,.8,.8]));let ct=new se(.005,.005,.003,6,1,!1);c.push(jt(ct,ue(_t(V,et/2+.07,lt+.035),on,Math.PI/2),[1,1,1]))}let Mt=new oi(et,et,pt,2,.012);o.push(jt(Mt,ue(_t(0,0,0),on),[1,1,1]));let w=.055,_=.028;at.fw=w,at.fh=_;for(let[V,Y,ct,St]of[[0,et/2-w/2,et,w],[0,-et/2+w/2,et,w],[et/2-w/2,0,w,et-2*w],[-et/2+w/2,0,w,et-2*w]]){let xt=new oi(ct,St,_,2,.006);o.push(jt(xt,ue(_t(V,Y,pt/2+_/2),on),[.95,.95,.95]))}for(let[V,Y]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let ct=new se(.017,.017,.012,12,1,!1);o.push(jt(ct,ue(_t(V*(et/2-w/2),Y*(et/2-w/2),pt/2+_+.006),on,Math.PI/2),[.8,.8,.8]));let St=new se(.008,.008,.004,6,1,!1);c.push(jt(St,ue(_t(V*(et/2-w/2),Y*(et/2-w/2),pt/2+_+.012),on,Math.PI/2),[1,1,1]))}let N=[];for(let V=0;V<4;V++)N.push({x:-.2+V*.133,y:et/2,dir:[0,1]});for(let V=0;V<4;V++)N.push({x:et/2,y:-.2+V*.133,dir:[1,0]});let k=[],J=0;for(let V of N){let Y=_t(V.x,V.y,0),ct=new C().addScaledVector(tt,V.dir[0]).add(new C(0,V.dir[1],0)),St=new Qt().makeBasis(new C().crossVectors(ct,$).normalize(),ct.clone().normalize(),$.clone()),xt=new se(.02,.02,.05,6,1,!1);xt.applyMatrix4(new Qt().makeTranslation(0,.025,0)),xt.applyMatrix4(St),xt.applyMatrix4(new Qt().makeTranslation(Y.x,Y.y,Y.z)),o.push(jt(xt,null,[1,1,1]));let gt=new se(.012,.012,.03,8,1,!1);gt.applyMatrix4(new Qt().makeTranslation(0,.065,0)),gt.applyMatrix4(St),gt.applyMatrix4(new Qt().makeTranslation(Y.x,Y.y,Y.z)),o.push(jt(gt,null,[.9,.9,.9]));let Et=Y.clone().addScaledVector(ct,.075),Ut=Et.clone().addScaledVector(ct,.1),Ft=Math.atan2(Et.x,Et.z)+(V.dir[1]?(J-1.5)*.12:V.dir[0]*.35),z=V.dir[1]?.42+J%2*.12:.62+J%3*.08,vt=J%2===0,nt=pe(z,Ft,B-.135),yt=nt.clone().add(new C(0,-.06,0)),Rt=new C(ie(Ut.x,nt.x,.4),ie(Ut.y,yt.y,.5),ie(Ut.z,nt.z,.4)),ft=new mn([Et,Ut,Rt,yt,nt],!1,"centripetal"),Bt=J%3===0?Ec.cu:Ec.nbti,zt=Bt.tint;if(k.push(Ou(ft,Math.round(40*i.density)+8,.0092,i.radial,()=>zt,-1,Bt.rough)),vt){let me=new oi(.1,.12,.085,2,.008);a.push(jt(me,ue(pe(z,Ft,B-.065),Ft),[.62,.62,.64]));let fe=new se(.03,.03,.02,14,1,!1);c.push(jt(fe,ue(pe(z+.048,Ft,B-.065),Ft,Math.PI/2),[1,1,1])),Ht.push(pe(z+.05,Ft,B-.065))}else{let me=new se(.022,.022,.13,10,1,!1);a.push(jt(me,ue(pe(z,Ft,B-.07)),[.9,.9,.9]))}J++}let dt=Gi(k,!1);k.forEach(V=>V.dispose());let ut=new ve(dt,e.cable);ut.name="cables-tail",p(ut),W.push(ut),h.cables+=Rs(dt);for(let V=0;V<10;V++){let Y=on+Math.PI+(V-4.5)*.3,ct=new se(.024,.024,.22,10,1,!1);a.push(jt(ct,ue(pe(.78,Y,B-.11)),[.85,.85,.85]))}}await n.yield("holder");let At=(I,B,$)=>{let tt=new se(I,I,B,6,1,!0);tt.translate(0,$,0);let et=new ir(I,6);return et.rotateX(-Math.PI/2),et.rotateY(Math.PI/2),et.translate(0,$+B/2,0),[tt,et]},re=I=>I.map(B=>(B.deleteAttribute("uv"),B.toNonIndexed())),Jt=(()=>{let I=[...At(.021,.012,.006)],B=new se(.0125,.0145,.026,6,1,!0);return B.translate(0,.025,0),I.push(B),Gi(re(I),!1)})(),te=(()=>{let I=[...At(.021,.012,.006)],B=new se(.0165,.0165,.058,8,1,!0);B.translate(0,.041,0),I.push(B),I.push(...At(.019,.01,.075));let $=new se(.0125,.0125,.008,6,1,!0);return $.translate(0,.084,0),I.push($),Gi(re(I),!1)})(),j=(I,B,$,tt,et)=>{let pt=new xi(I,e.conn,B.length),mt=new Qt,_t=new nn,Pt=new Sn,lt=new C(1,1,1),Tt=new C,L=new qt;return B.forEach((Dt,Mt)=>{Pt.set($?Math.PI:0,Dt.rot,0,"YXZ"),_t.setFromEuler(Pt),Tt.set(Dt.x,Dt.y,Dt.z),mt.compose(Tt,_t,lt),pt.setMatrixAt(Mt,mt),et&&Mt%et===0?L.setRGB(.82*Dt.ao,.84*Dt.ao,.88*Dt.ao):L.setRGB($n[0]*Dt.ao,$n[1]*Dt.ao,$n[2]*Dt.ao),pt.setColorAt(Mt,L)}),pt.instanceMatrix.needsUpdate=!0,pt.instanceColor.needsUpdate=!0,pt.name=tt,pt.computeBoundingSphere(),p(pt),h.connectors+=Rs(I)*B.length,pt};j(Jt,D,!1,"sma-top",5),j(Jt,F,!0,"sma-bottom",7),j(te,H,!1,"attenuators",3),await n.maybeYield("connectors");let st=async(I,B,$)=>{if(!I.length)return null;let tt=Gi(I,!1);I.forEach(pt=>pt.dispose());let et=new ve(tt,B);return et.name=$,p(et),h.misc+=Rs(tt),await n.maybeYield("merge "+$),et},bt={goldParts:o,silverParts:a,darkParts:c,dielParts:l};X.sort((I,B)=>I.s-B.s);let Xt=new Float32Array(X.length),rt=new Float32Array(X.length*3);return X.forEach((I,B)=>{Xt[B]=I.s,rt[B*3]=I.p.x,rt[B*3+1]=I.p.y,rt[B*3+2]=I.p.z}),{root:r,plates:P,cables:W,meshes:u,textures:f,holder:at,circulators:Ht,extra:bt,finish:async()=>{await st(o,e.gold,"gold-parts"),await st(a,e.silver,"silver-parts"),await st(c,e.dark,"dark-parts"),await st(l,e.diel,"diel-parts"),h.total=Math.round(h.plates+h.cables+h.connectors+h.misc)},pulse:{line:v,att:U,pathS:Xt,pathP:rt},stats:{lines:d.length,connectors:D.length+F.length+H.length,tris:h},prep:jt,M4:ue}}var tn=5,_n=25,wr=40,{PAIRS:Er,QC:Qg,LAYERS:tx}=(()=>{let i=[];for(let n=0;n<tn;n++)for(let s=0;s<tn-1;s++)i[s+4*n]=[n*tn+s,n*tn+s+1];for(let n=0;n<tn-1;n++)for(let s=0;s<tn;s++)i[20+s+5*n]=[n*tn+s,(n+1)*tn+s];let t=Array.from({length:_n},()=>[]);i.forEach((n,s)=>{t[n[0]].push(s),t[n[1]].push(s)});let e=[[],[],[],[]];for(let n=0;n<tn;n++)for(let s=0;s<tn-1;s++)e[s%2].push(s+4*n);for(let n=0;n<tn-1;n++)for(let s=0;s<tn;s++)e[2+n%2].push(20+s+5*n);return{PAIRS:i,QC:t,LAYERS:e}})();function ex(i,t,e){return i.onBeforeCompile=n=>{Object.assign(n.uniforms,{uQ:e.uQ,uC:e.uC,uReadout:e.uReadout,uGain:e.uGain,uQColor:e.uQColor,uCColor:e.uCColor,uRColor:e.uRColor,uTime:t.uTime}),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
        uniform float uQ[${_n}];
        uniform float uC[${wr}];
        uniform float uReadout, uGain, uTime;
        uniform vec3 uQColor, uCColor, uRColor;`).replace("#include <emissivemap_fragment>",`
        {
          vec2 tuv = vEmissiveMapUv;
          vec4 em = texture2D(emissiveMap, tuv);
          vec2 g = (tuv - ${ka().x0.toFixed(4)}) / ${ka().pitch.toFixed(4)};
          vec2 gi = clamp(floor(g + 0.5), 0.0, 4.0);
          float q = uQ[int(gi.x) + 5 * int(gi.y)];
          vec2 f = g - floor(g + 0.5);
          float cpl;
          if (abs(f.y) < abs(f.x)) cpl = uC[int(clamp(floor(g.x), 0.0, 3.0)) + 4 * int(gi.y)];
          else cpl = uC[20 + int(gi.x) + 5 * int(clamp(floor(g.y), 0.0, 3.0))];
          totalEmissiveRadiance = (uQColor * (em.r * q) + uCColor * (em.b * cpl) + uRColor * (em.g * uReadout)) * uGain;
        }`)},i.customProgramCacheKey=()=>"nadir-die",i}function nx(i,t,e){let n=[];for(let s=0;s<=12;s++){let r=s/12,o=i*r,a=Math.sin(Math.PI*Math.pow(r,.75))*t;n.push(new C(o,a-e*r,0))}return new On(new mn(n),12,85e-5,4,!1)}function ix(i,t){let e=[];for(let n=0;n<=8;n++){let s=n/8;e.push(new C(i*(s-.5),t*Math.pow(Math.sin(Math.PI*s),.45),0))}return new On(new mn(e),8,48e-5,4,!1)}async function Hu({preset:i,U:t,machine:e,slicer:n,mats:s}){let r=e.holder,{L2W:o,face:a,right:c,Wd:l,Dd:h,fw:f}=r,u=new pn;u.name="chip";let p=[],x={uQ:{value:new Float32Array(_n)},uC:{value:new Float32Array(wr)},uReadout:{value:0},uGain:{value:1},uQColor:{value:new qt(.3,.74,1).multiplyScalar(2.4)},uCColor:{value:new qt(.62,.86,1).multiplyScalar(2.2)},uRColor:{value:new qt(.3,.62,1).multiplyScalar(.9)}};n.step("chip",.8);let y=await Nu(i.pcbTex,[5,5,5,5],n);p.push(y.map,y.mr);let m=l-2*f,d=new Ge(m,m,.006);zu(d);let E=Rn(new qe({map:y.map,roughnessMap:y.mr,metalnessMap:y.mr,roughness:1,metalness:1}),t,{octaves:i.frostOctaves}),A=new ve(d,E);A.position.copy(o(0,0,h/2+.003)),A.rotation.y=Math.atan2(a.x,a.z),A.name="pcb",u.add(A);let v=await Du(i.chipTex,n);p.push(v.map,v.mr,v.em);let S=v.layout,M=m*.476*.96,R=.01,g=new Ge(M,M,R);zu(g);let T=new Bi({map:v.map,roughnessMap:v.mr,metalnessMap:v.mr,roughness:1,metalness:1,emissive:16777215,emissiveMap:v.em,emissiveIntensity:1,iridescence:i.iridescence??.55,iridescenceIOR:1.45,iridescenceThicknessRange:[260,520]});ex(T,t,x);let P=new ve(g,T),D=h/2+.006+R;P.position.copy(o(0,0,h/2+.006+R/2)),P.rotation.y=Math.atan2(a.x,a.z),P.name="die",u.add(P),await n.maybeYield("die");let F=new C(0,1,0),H=(rt,I,B=0)=>o((rt-.5)*M,-(I-.5)*M,D+B),U=H(.5,.5,5e-4);{let{prep:rt,M4:I}=e,B=e.extra.goldParts,$=M/2+.007,tt=.006,et=.004,pt=h/2+.006+et/2,mt=Math.atan2(a.x,a.z);for(let[_t,Pt,lt,Tt]of[[0,$+tt/2,2*($+tt),tt],[0,-$-tt/2,2*($+tt),tt],[$+tt/2,0,tt,2*$],[-$-tt/2,0,tt,2*$]])B.push(rt(new Ge(lt,Tt,et),I(o(_t,Pt,pt),mt),[.9,.9,.9]));for(let[_t,Pt]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let lt=_t*(M/2+.004),Tt=Pt*(M/2+.004);B.push(rt(new Ge(.03,.009,.004),I(o(lt-_t*.008,Tt,D+.002),mt),[.95,.95,.95])),B.push(rt(new Ge(.009,.03,.004),I(o(lt,Tt-Pt*.008,D+.002),mt),[.95,.95,.95])),B.push(rt(new se(.0045,.0045,.004,10),I(o(lt+_t*.002,Tt+Pt*.002,D+.005),mt,Math.PI/2),[.75,.75,.75]))}}let G=new Qt,W=new Qt,X=new C,ot=new C,Q=new C,it=[[0,-1],[0,1],[-1,0],[1,0]],at=[];for(let[rt,I,B]of S.pads){let $=B==="v"?I<.5?0:1:rt<.5?2:3;at.push({u:rt,v:I,s:$,sig:!0})}let Ht=Math.max(2,i.wirebonds);for(let rt=0;rt<4;rt++)for(let I=0;I<Ht;I++){let B=.08+(I+.5)/Ht*.84,$,tt;rt===0?($=B,tt=.035):rt===1?($=B,tt=.965):rt===2?($=.035,tt=B):($=.965,tt=B),at.some(pt=>pt.s===rt&&Math.hypot(pt.u-$,pt.v-tt)<.035)||at.push({u:$,v:tt,s:rt,sig:!1})}let At=rn(31),re=nx(.036,.0145,R+5e-4),Jt=Rn(new qe({color:16777215,metalness:1,roughness:.26}),t,{octaves:i.frostOctaves});Jt.color.setRGB(1,.76,.42);let te=Rn(new qe({color:16777215,metalness:1,roughness:.3}),t,{octaves:i.frostOctaves});te.color.setRGB(.82,.84,.88);let j=new xi(re,Jt,at.length);at.forEach((rt,I)=>{let[B,$]=it[rt.s],tt=H(rt.u,rt.v,4e-4);ot.set(0,0,0).addScaledVector(c,B).addScaledVector(F,-$).normalize(),Q.crossVectors(ot,a).normalize(),G.makeBasis(ot,a,Q);let et=rt.sig?1.15:.9+At()*.2;X.set(et,rt.sig?1.1:.85+At()*.2,1),W.copy(G).scale(X).setPosition(tt),j.setMatrixAt(I,W)}),j.instanceMatrix.needsUpdate=!0,j.computeBoundingSphere(),j.name="wirebonds",u.add(j);let st=[];if(i.airbridges>0){for(let rt of S.couplers){let[[I,B],[$,tt]]=rt.pts;st.push({u:(I+$)/2,v:(B+tt)/2,du:$-I,dv:tt-B,span:.0042+.006+.004})}for(let rt of S.flux)for(let I=0;I<rt.length-1;I++){let[B,$]=rt[I],[tt,et]=rt[I+1],pt=Math.hypot(tt-B,et-$),mt=Math.floor(pt/.05*i.airbridges);for(let _t=1;_t<=mt;_t++){let Pt=_t/(mt+1);st.push({u:B+(tt-B)*Pt,v:$+(et-$)*Pt,du:tt-B,dv:et-$,span:.004+.006+.004})}}}let bt=null;if(st.length){let rt=ix(.0142*M*1.25,.0011);bt=new xi(rt,te,st.length);let I=new C;st.forEach((B,$)=>{I.set(0,0,0).addScaledVector(c,B.du).addScaledVector(F,-B.dv).normalize(),ot.crossVectors(a,I).normalize(),G.makeBasis(ot,a,I),W.copy(G).setPosition(H(B.u,B.v,2e-4)),bt.setMatrixAt($,W)}),bt.instanceMatrix.needsUpdate=!0,bt.computeBoundingSphere(),bt.name="airbridges",u.add(bt)}await n.maybeYield("bonds");let Xt=d.index.count/3+g.index.count/3+re.index.count/3*at.length+(bt?bt.geometry.index.count/3*st.length:0);return{root:u,textures:p,CU:x,center:U,normal:a.clone(),right:c.clone(),dieW:M,meshes:[A,P,j,bt].filter(Boolean),stats:{bonds:at.length,bridges:st.length,tris:Math.round(Xt)},choreo:cx(x)}}function zu(i){let t=i.attributes.uv;for(let e=0;e<t.count;e++)t.setY(e,1-t.getY(e));t.needsUpdate=!0}var Tr=.2,Xa=.62,sx=3.55,rx=3.2,ox=.07,ax=2.3,Tc=1.05,lx=i=>(i=Math.imul(i^i>>>16,73244475),i=Math.imul(i^i>>>16,73244475),i^=i>>>16,(i>>>0)/4294967296);function cx(i){let t=i.uQ.value,e=i.uC.value,n=new Float32Array(_n),s=new Float32Array(wr),r=new Float32Array(_n),o=new Float32Array(wr),a=new Float32Array(_n);{let d=rn(5);for(let A=0;A<tn;A++)for(let v=0;v<tn;v++)a[A*tn+v]=v+(tn-1-A)+d()*.8;Array.from(a).map((A,v)=>[A,v]).sort((A,v)=>A[0]-v[0]).forEach(([,A],v)=>{a[A]=v})}let c=10,l=99,h=l,f=0,u=c,p=()=>{h=h+1831565813>>>0;let d=h;return d=Math.imul(d^d>>>15,d|1),d^=d+Math.imul(d^d>>>7,d|61),((d^d>>>14)>>>0)/4294967296};function x(d){for(d<f&&(h=l,f=0,u=c);f<d;){let E=Er[u],A=p()<.5?E[0]:E[1],v=Qg[A],S=Math.floor(p()*(v.length-1));for(let M=0;M<v.length;M++)if(v[M]!==u&&S--===0){u=v[M];break}f++}return u}let y={wakeAt:-1e9,armed:!0,last:0};function m(d,E){for(let A=0;A<_n;A++)E[A]=Tr*(.86+.14*Math.sin(d*1.3+A*1.7))}return{state:y,setWakeAge(d,E){y.wakeAt=d-E,y.armed=!1},update(d,E,A){y.armed&&E>=sx?(y.wakeAt=d,y.armed=!1):!y.armed&&E<rx&&(y.armed=!0,y.wakeAt=-1e9);let v=Ie(4.4,4.85,E)*(1-Ie(5.45,5.85,E)),S=Ie(5.45,5.85,E),M=0,R=A?y.armed?-1:99:d-y.wakeAt;if(y.armed||R<0){if(A)for(let g=0;g<_n;g++)n[g]=Tr;else m(d,n);s.fill(0)}else{for(let T=0;T<_n;T++){let P=R-a[T]*ox;if(P<0)n[T]=Tr*(.86+.14*Math.sin(d*1.3+T*1.7));else{let D=Ne(P/.06,0,1);n[T]=Tr+(Xa-Tr)*D+1.1*D*Math.exp(-P*4.5),A||(n[T]*=.94+.06*Math.sin(d*2.1+T*2.3))}}s.fill(0);let g=R-ax;if(g>0&&!A){let T=Math.floor(g/Tc),P=(g-T*Tc)/Tc,D=x(T),F=Math.pow(Math.sin(Math.PI*P),2);s[D]=F*1.25;let H=Er[D],U=.5+.5*Math.cos(2*Math.PI*2.5*P);n[H[0]]+=F*.95*U,n[H[1]]+=F*.95*(1-U)}else A&&!y.armed&&(s[c]=.9,n[Er[c][0]]+=.45,n[Er[c][1]]+=.45)}if(v>.001){let T=A?.3:(d%3.4+3.4)%3.4;o.fill(.04);for(let P=0;P<_n;P++)r[P]=Xa*.85;if(T<2.6){let P=Math.min(3,Math.floor(T/.65)),D=(T-P*.65)/.65,F=Math.pow(Math.sin(Math.PI*Math.min(1,D/.85)),2),H=tx[P];for(let U=0;U<H.length;U++){let G=H[U];o[G]=.15+F*1.05;let W=Er[G],X=.5+.5*Math.cos(2*Math.PI*1.5*D+G);r[W[0]]+=F*.5*X,r[W[1]]+=F*.5*(1-X)}if(!A&&D>.8){let U=(D-.8)/.2;for(let G=0;G<_n;G++)(G*7+P*3)%5===0&&(r[G]+=.5*Math.sin(Math.PI*U))}}else{let P=(T-2.6)/.8;M=Math.sin(Math.PI*P);let D=A?3:Math.floor(d/3.4);for(let F=0;F<_n;F++){let H=lx(F*31+D*977+7)<.45?1.35:.28;r[F]=Xa*.85+(H-Xa*.85)*M}}}for(let g=0;g<_n;g++){let T=n[g]+(r[g]-n[g])*v;T+=(.82-T)*S,t[g]=T}for(let g=0;g<wr;g++){let T=s[g]+(o[g]-s[g])*v;T+=(.22-T)*S,e[g]=T}i.uReadout.value=M*v+.25*S}}}var hx="varying vec2 vUv; void main(){ vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 1.0, 1.0); }",ux=`
uniform vec2 uRes, uHalo; uniform float uHaloAmt, uCold, uBeam;
varying vec2 vUv;
void main(){
  vec3 top = mix(vec3(0.0030, 0.0040, 0.0068), vec3(0.0020, 0.0034, 0.0070), uCold);
  vec3 bot = mix(vec3(0.0010, 0.0014, 0.0024), vec3(0.0008, 0.0013, 0.0028), uCold);
  vec3 col = mix(bot, top, smoothstep(0.0, 1.0, vUv.y));
  vec2 d = (vUv - uHalo) * vec2(uRes.x / uRes.y, 1.0);
  float h = exp(-dot(d, d) * 2.4);
  float h2 = exp(-dot(d, d) * 9.0);
  vec3 haloC = mix(vec3(0.0085, 0.0135, 0.024), vec3(0.0055, 0.0150, 0.032), uCold);
  col += haloC * (h * 0.9 + h2 * 0.5) * uHaloAmt;
  float bx = (vUv.x - uHalo.x) * uRes.x / uRes.y;
  float beam = exp(-bx * bx / 0.018) * smoothstep(-0.1, 1.0, vUv.y) * uBeam;
  col += vec3(0.013, 0.020, 0.036) * beam;
  gl_FragColor = vec4(col, 1.0);
}`,fx=`
attribute float aSeed; uniform float uTime, uProj; varying float vA;
void main(){
  vec3 p = position;
  p.y = mod(p.y - uTime * (0.015 + 0.03 * aSeed) + 5.5, 12.5) - 5.5;
  p.x += sin(uTime * 0.11 + aSeed * 40.0) * 0.12;
  p.z += cos(uTime * 0.09 + aSeed * 23.0) * 0.12;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  float dist = -mv.z;
  gl_PointSize = clamp(uProj * (0.0035 + 0.0045 * aSeed) / max(dist, 0.05), 1.0, 7.0);
  vA = smoothstep(0.35, 1.6, dist) * (1.0 - smoothstep(10.0, 26.0, dist)) * (0.25 + 0.75 * aSeed);
  gl_Position = projectionMatrix * mv;
}`,dx=`
uniform float uAmt; varying float vA;
void main(){
  float r = length(gl_PointCoord - 0.5) * 2.0;
  float a = (1.0 - smoothstep(0.2, 1.0, r)) * vA * uAmt;
  gl_FragColor = vec4(vec3(0.55, 0.72, 1.0) * 0.5 * a, a);
}`,px=`
attribute float aSeed; uniform float uTime, uProj, uAmt; varying float vA;
void main(){
  vec3 p = position;
  float t = uTime;
  p.y = mod(p.y - t * (0.012 + 0.02 * aSeed) + 4.4, 2.8) - 4.4;     // drift down through the band
  float sw = t * (0.05 + 0.05 * aSeed) + aSeed * 31.0;
  p.x += sin(sw) * 0.06; p.z += cos(sw * 0.8) * 0.06;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  float dist = -mv.z;
  gl_PointSize = clamp(uProj * (0.0028 + 0.003 * aSeed) / max(dist, 0.05), 1.0, 5.0);
  float tw = 0.55 + 0.45 * sin(t * (1.5 + 2.0 * aSeed) + aSeed * 50.0);
  float band = smoothstep(-4.4, -3.9, p.y) * (1.0 - smoothstep(-2.0, -1.6, p.y));
  vA = uAmt * tw * band * smoothstep(0.25, 0.9, dist) * (1.0 - smoothstep(6.0, 14.0, dist));
  gl_Position = projectionMatrix * mv;
}`,mx=`
varying float vA;
void main(){
  vec2 q = gl_PointCoord - 0.5;
  float r = length(q) * 2.0;
  float core = 1.0 - smoothstep(0.0, 0.55, r);
  float star = max(0.0, 1.0 - abs(q.x) * 14.0) * max(0.0, 1.0 - abs(q.y) * 2.2) + max(0.0, 1.0 - abs(q.y) * 14.0) * max(0.0, 1.0 - abs(q.x) * 2.2);
  float a = (core + star * 0.35) * vA;
  gl_FragColor = vec4(vec3(0.78, 0.9, 1.0) * a, a);
}`,gx=`
attribute float aIdx;
uniform vec3 uHead; uniform float uHeadAmp; uniform float uFlash[4]; uniform float uProj, uVis;
varying float vA; varying float vHead;
void main(){
  bool head = aIdx < 0.5;
  vec3 p = head ? uHead : position;
  float amp = head ? uHeadAmp : uFlash[int(aIdx + 0.5) - 1];
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  float size = head ? 0.11 : 0.12;
  gl_PointSize = clamp(uProj * size / max(-mv.z, 0.05), 2.0, 96.0);
  vA = amp * uVis;
  vHead = head ? 1.0 : 0.0;
  gl_Position = projectionMatrix * mv;
}`,xx=`
uniform vec3 uColor; varying float vA; varying float vHead;
void main(){
  float r = length(gl_PointCoord - 0.5) * 2.0;
  float a = exp(-r * r * mix(7.0, 9.0, vHead)) * (1.0 - smoothstep(0.85, 1.0, r));
  float core = exp(-r * r * 60.0) * vHead;
  gl_FragColor = vec4(uColor * (a + core * 1.5) * vA, 1.0);
}`,_x=`
uniform float uSize; varying vec2 vP;
void main(){
  vP = position.xy;
  vec4 mv = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
  mv.xy += position.xy * uSize;
  gl_Position = projectionMatrix * mv;
}`,vx=`
uniform vec3 uColor; uniform float uAmt; varying vec2 vP;
void main(){
  float r2 = dot(vP, vP) * 4.0;
  float a = (exp(-r2 * 3.0) * 0.6 + exp(-r2 * 12.0) * 0.4) * (1.0 - smoothstep(0.7, 1.0, r2));
  gl_FragColor = vec4(uColor * a * uAmt, 1.0);
}`;function yx(){let i=new we;return i.setAttribute("position",new de([-1,-1,0,3,-1,0,-1,3,0],3)),i}function Vu({preset:i,U:t,machine:e}){let n=new pn;n.name="effects";let s={value:800},r={value:0},o=new De({uniforms:{uRes:{value:new Lt(1,1)},uHalo:{value:new Lt(.62,.55)},uHaloAmt:{value:1},uCold:{value:0},uBeam:{value:0}},vertexShader:hx,fragmentShader:ux,depthTest:!1,depthWrite:!1,fog:!1}),a=new ve(yx(),o);a.frustumCulled=!1,a.renderOrder=-1e3,a.name="backdrop",n.add(a);let c=new De({uniforms:{uTime:r,uProj:s,uAmt:{value:1}},vertexShader:fx,fragmentShader:dx,transparent:!0,depthWrite:!1,blending:Tn,fog:!1});{let m=i.dust,d=rn(5),E=new Float32Array(m*3),A=new Float32Array(m);for(let M=0;M<m;M++){let R=d()*Math.PI*2,g=.6+Math.sqrt(d())*5;E[M*3]=Math.sin(R)*g,E[M*3+1]=-5.5+d()*12.5,E[M*3+2]=Math.cos(R)*g,A[M]=d()}let v=new we;v.setAttribute("position",new be(E,3)),v.setAttribute("aSeed",new be(A,1));let S=new Oi(v,c);S.frustumCulled=!1,S.name="dust",n.add(S)}let l=new De({uniforms:{uTime:r,uProj:s,uAmt:{value:0}},vertexShader:px,fragmentShader:mx,transparent:!0,depthWrite:!1,blending:Tn,fog:!1}),h=(()=>{let m=i.frost,d=rn(17),E=new Float32Array(m*3),A=new Float32Array(m);for(let M=0;M<m;M++){let R=d()*Math.PI*2,g=.15+Math.sqrt(d())*1.55;E[M*3]=Math.sin(R)*g,E[M*3+1]=-4.4+d()*2.8,E[M*3+2]=Math.cos(R)*g,A[M]=d()}let v=new we;v.setAttribute("position",new be(E,3)),v.setAttribute("aSeed",new be(A,1));let S=new Oi(v,l);return S.frustumCulled=!1,S.name="frost-particles",S.visible=!1,n.add(S),S})(),f=e.pulse.att,u=new De({uniforms:{uHead:{value:new C},uHeadAmp:{value:0},uFlash:{value:new Float32Array(4)},uProj:s,uVis:{value:0},uColor:{value:t.uPulseColor.value}},vertexShader:gx,fragmentShader:xx,transparent:!0,depthWrite:!1,blending:Tn,fog:!1}),p=(()=>{let m=new Float32Array(15),d=new Float32Array(5);for(let v=0;v<5;v++){d[v]=v;let S=f[Math.max(0,Math.min(f.length-1,v-1))];v>0&&S&&(m[v*3]=S.x,m[v*3+1]=S.y,m[v*3+2]=S.z)}let E=new we;E.setAttribute("position",new be(m,3)),E.setAttribute("aIdx",new be(d,1));let A=new Oi(E,u);return A.frustumCulled=!1,A.name="signal",A.visible=!1,A.renderOrder=10,n.add(A),A})(),x=new De({uniforms:{uSize:{value:1.5},uColor:{value:new qt(.1,.26,.42)},uAmt:{value:0}},vertexShader:_x,fragmentShader:vx,transparent:!0,depthWrite:!1,blending:Tn,fog:!1}),y=new ve(new ri(1,1),x);return y.position.copy(t.uGlowPos.value),y.frustumCulled=!1,y.name="mxc-glow",y.visible=!1,n.add(y),{group:n,bgMat:o,dustMat:c,frostMat:l,signalMat:u,glowMat:x,frostPts:h,signal:p,glow:y,proj:s,drift:r,setGlow(m){x.uniforms.uAmt.value=m,y.visible=m>.002},setFrost(m){l.uniforms.uAmt.value=m,h.visible=m>.002}}}var qa=Math.PI/180,Mx=1.6,Sx=390/844,bx=[{pos:[5.25,2.45,15.3],tgt:[0,.18,0],fov:30,shift:[.16,-.01],roll:0},{orbit:{az:28,r:4.3,y:1.95,ay:1.5,pan:.9},fov:36,shift:[.06,0],roll:-.025},{orbit:{az:-22,r:3.6,y:-.5,ay:-.9,pan:.75},fov:38,shift:[.06,0],roll:.02},{orbit:{az:18,r:3.26,y:-3.15,ay:-2.6,pan:.35},fov:40,shift:[.06,.02],roll:-.015},{chip:{d:1,side:.95,up:.42,pan:.3},fov:30,shift:[.04,0],roll:0},{chip:{d:1,side:-.62,up:-.2,pan:.2},fov:30,shift:[.18,0],roll:.012,drift:1},{pos:[3.6,-7.6,6.6],tgt:[0,-.2,0],fov:46,shift:[.17,.24],roll:0},{ring:{az:-15,r:16.2,y:1.2,ty:-.1},fov:31,shift:[.17,0],roll:0}],Ex=[{pos:[4.6,2.2,13.6],tgt:[0,.6,0],fov:62,shift:[0,-.14],roll:0},{orbit:{az:34,r:5.2,y:2.3,ay:1.4,pan:.85},fov:56,shift:[0,-.16],roll:-.03},{orbit:{az:-22,r:4.3,y:-.35,ay:-.85,pan:0},fov:58,shift:[0,-.17],roll:.02},{orbit:{az:18,r:3.6,y:-3.3,ay:-2.75,pan:0},fov:60,shift:[0,-.12],roll:-.015},{chip:{d:1.7,side:.35,up:.35,pan:0},fov:46,shift:[0,-.14],roll:0},{chip:{d:1.6,side:-.5,up:.45,pan:0},fov:42,shift:[0,-.16],roll:0,drift:1},{pos:[3.4,-8,7.4],tgt:[0,-.6,0],fov:64,shift:[0,-.14],roll:0},{ring:{az:-15,r:15.5,y:1.4,ty:.4},fov:52,shift:[0,-.12],roll:0}],wc=[{envRot:0,envInt:1,fog:.01,exposure:1,cold:0,bloom:.22,halo:1,key:1,dof:0,focusPull:0,beam:1,glow:0,glowHalo:0,gain:.5,bottom:0,sat:1.05,frost:1,vignette:.55},{envRot:.55,envInt:1.05,fog:.05,exposure:1,cold:.3,bloom:.24,halo:.8,key:1,dof:7,focusPull:1.25,beam:.3,glow:0,glowHalo:0,gain:.5,bottom:0,sat:1.05,frost:1,vignette:.55},{envRot:-.35,envInt:1,fog:.07,exposure:1,cold:.6,bloom:.3,halo:.7,key:.9,dof:7,focusPull:1,beam:.2,glow:0,glowHalo:0,gain:.6,bottom:0,sat:1.04,frost:1,vignette:.55},{envRot:.9,envInt:.95,fog:.08,exposure:1,cold:.95,bloom:.32,halo:.7,key:.8,dof:5,focusPull:-.2,beam:.3,glow:1,glowHalo:1,gain:.8,bottom:0,sat:1,frost:1,vignette:.58},{envRot:.25,envInt:.9,fog:.14,exposure:1.04,cold:1,bloom:.42,halo:.6,key:.6,dof:13,focusPull:0,beam:0,glow:.22,glowHalo:0,gain:1,bottom:0,sat:1,frost:1,vignette:.6},{envRot:.6,envInt:1,fog:.12,exposure:1,cold:1,bloom:.45,halo:.45,key:.72,dof:10,focusPull:0,beam:0,glow:.18,glowHalo:0,gain:1,bottom:0,sat:1,frost:1,vignette:.62},{envRot:-.2,envInt:.95,fog:.03,exposure:.95,cold:.8,bloom:.3,halo:.8,key:.8,dof:0,focusPull:0,beam:.6,glow:.8,glowHalo:.7,gain:.9,bottom:.35,sat:1,frost:.32,vignette:.6},{envRot:.15,envInt:.95,fog:.012,exposure:.88,cold:.6,bloom:.3,halo:.9,key:.9,dof:0,focusPull:0,beam:.8,glow:.8,glowHalo:.6,gain:.9,bottom:0,sat:1.02,frost:.26,vignette:.58}],ku=Object.keys(wc[0]);function Gu(i,t){return i.map(e=>{let n={fov:e.fov,shift:e.shift.slice(),roll:e.roll||0,drift:e.drift||0};if(e.orbit){let s=e.orbit,r=s.az*qa;n.pos=[Math.sin(r)*s.r,s.y,Math.cos(r)*s.r];let o=Math.cos(r),a=-Math.sin(r);n.tgt=[-o*s.pan,s.ay,-a*s.pan]}else if(e.chip){let s=t.center,r=t.normal,o=t.right,a=e.chip;n.pos=[s.x+r.x*a.d+o.x*a.side,s.y+a.up,s.z+r.z*a.d+o.z*a.side],n.tgt=[s.x-o.x*a.pan,s.y+.02,s.z-o.z*a.pan]}else if(e.ring){let s=e.ring,r=s.az*qa;n.pos=[Math.sin(r)*s.r,s.y,Math.cos(r)*s.r],n.tgt=[0,s.ty,0]}else n.pos=e.pos.slice(),n.tgt=e.tgt.slice();return n})}var Wu=(i,t,e,n,s)=>{let r=s*s,o=r*s;return .5*(2*t+(-i+e)*s+(2*i-5*t+4*e-n)*r+(-i+3*t-3*e+n)*o)};function Xu(i,t){let e=Gu(bx,i),n=Gu(Ex,i);if(t)for(let a of[e,n]){let c=a[t.c];c&&(t.pos&&(c.pos=t.pos.slice()),t.tgt&&(c.tgt=t.tgt.slice()),t.fov&&(c.fov=t.fov),t.shift&&(c.shift=t.shift.slice()))}let s=e.length,r={i:0,t:0};function o(a){a=Ne(a,0,s-1);let c=Math.min(s-2,Math.floor(a)),l=a-c;return l=ie(l,Ru(0,1,l),.65),r.i=c,r.t=l,r}return{land:e,port:n,count:s,sample(a,c,l){let h=c?n:e,{i:f,t:u}=o(a),p=h[Math.max(0,f-1)],x=h[f],y=h[f+1],m=h[Math.min(s-1,f+2)];for(let d=0;d<3;d++)l.pos[d]=Wu(p.pos[d],x.pos[d],y.pos[d],m.pos[d],u),l.tgt[d]=Wu(p.tgt[d],x.tgt[d],y.tgt[d],m.tgt[d],u);return l.fov=ie(x.fov,y.fov,u),l.shift[0]=ie(x.shift[0],y.shift[0],u),l.shift[1]=ie(x.shift[1],y.shift[1],u),l.roll=ie(x.roll,y.roll,u),l.drift=ie(x.drift,y.drift,u),l},look(a,c){let{i:l,t:h}=o(a),f=wc[l],u=wc[l+1];for(let p=0;p<ku.length;p++){let x=ku[p];c[x]=ie(f[x],u[x],h)}return c}}}function qu(i,t){return i<=760||i/t<=.8}function Yu(i,t,e,n,s,r=0,o=0){let a=e/n,c=s?Sx:Mx,l=t.fov,h=t.shift[0],f=t.shift[1];if(a<c){let u=Math.tan(l*qa/2)*(c/a);l=2*Math.atan(u)/qa,s||(h+=(c-a)*.12)}else s||(h*=Math.pow(c/a,.6));s&&a>.8&&(f*=.6),i.fov=Ne(l,10,100),i.aspect=a,i.setViewOffset(e,n,-h*e+r,f*n+o,e,n),i.updateProjectionMatrix()}var Ps=`precision highp float;
`,Tx=Ps+`attribute vec3 position; varying vec2 vUv;
void main(){ vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }`,wx=Ps+`
uniform sampler2D tSrc; uniform vec2 uTexel; uniform float uThreshold, uKnee;
varying vec2 vUv;
void main(){
  vec3 c = texture2D(tSrc, vUv + uTexel * vec2(-0.5, -0.5)).rgb + texture2D(tSrc, vUv + uTexel * vec2(0.5, -0.5)).rgb
         + texture2D(tSrc, vUv + uTexel * vec2(-0.5, 0.5)).rgb + texture2D(tSrc, vUv + uTexel * vec2(0.5, 0.5)).rgb;
  c *= 0.25;
  float br = max(c.r, max(c.g, c.b));
  float soft = clamp(br - uThreshold + uKnee, 0.0, 2.0 * uKnee);
  soft = soft * soft / (4.0 * uKnee + 1e-4);
  float contrib = max(soft, br - uThreshold) / max(br, 1e-4);
  gl_FragColor = vec4(min(c * contrib, vec3(40.0)), 1.0);
}`,Ax=Ps+`
uniform sampler2D tSrc; uniform vec2 uTexel; varying vec2 vUv;
void main(){
  vec3 c = texture2D(tSrc, vUv).rgb * 4.0;
  c += texture2D(tSrc, vUv + uTexel * vec2(-1.0, -1.0)).rgb;
  c += texture2D(tSrc, vUv + uTexel * vec2( 1.0, -1.0)).rgb;
  c += texture2D(tSrc, vUv + uTexel * vec2(-1.0,  1.0)).rgb;
  c += texture2D(tSrc, vUv + uTexel * vec2( 1.0,  1.0)).rgb;
  gl_FragColor = vec4(c / 8.0, 1.0);
}`,Rx=Ps+`
uniform sampler2D tSrc; uniform sampler2D tAdd; uniform vec2 uTexel; uniform float uRadius; varying vec2 vUv;
void main(){
  vec2 o = uTexel * uRadius;
  vec3 c = texture2D(tSrc, vUv + vec2(-o.x, 0.0)).rgb + texture2D(tSrc, vUv + vec2(o.x, 0.0)).rgb
         + texture2D(tSrc, vUv + vec2(0.0, -o.y)).rgb + texture2D(tSrc, vUv + vec2(0.0, o.y)).rgb;
  c *= 2.0;
  c += texture2D(tSrc, vUv + vec2(-o.x, -o.y)).rgb + texture2D(tSrc, vUv + vec2(o.x, -o.y)).rgb
     + texture2D(tSrc, vUv + vec2(-o.x, o.y)).rgb + texture2D(tSrc, vUv + vec2(o.x, o.y)).rgb;
  c += texture2D(tSrc, vUv).rgb * 4.0;
  c /= 16.0;
  gl_FragColor = vec4(c + texture2D(tAdd, vUv).rgb, 1.0);
}`,Zu=i=>Ps+`
#define DOF_TAPS ${i}
#include <tonemapping_pars_fragment>
#include <colorspace_pars_fragment>
uniform sampler2D tScene; uniform sampler2D tDepth; uniform sampler2D tBloom;
uniform float uBloom, uTime, uCold, uVignette, uGrain, uFade, uSat, uFxaa, uBottom, uWeight, uDofSeed;
uniform float uNear, uFar, uFocus, uAperture, uMaxCoc;
uniform vec2 uRes;
varying vec2 vUv;
float hash(vec2 p){ p = fract(p * vec2(443.897, 441.423)); p += dot(p, p.yx + 19.19); return fract((p.x + p.y) * p.x); }
float lumaT(vec3 c){ float l = dot(c, vec3(0.2126, 0.7152, 0.0722)); return l / (1.0 + l); }
vec3 fxaa(vec2 uv){
  vec2 px = 1.0 / uRes;
  vec3 cM = texture2D(tScene, uv).rgb;
  float lNW = lumaT(texture2D(tScene, uv + vec2(-1.0, -1.0) * px).rgb);
  float lNE = lumaT(texture2D(tScene, uv + vec2( 1.0, -1.0) * px).rgb);
  float lSW = lumaT(texture2D(tScene, uv + vec2(-1.0,  1.0) * px).rgb);
  float lSE = lumaT(texture2D(tScene, uv + vec2( 1.0,  1.0) * px).rgb);
  float lM = lumaT(cM);
  float lMin = min(lM, min(min(lNW, lNE), min(lSW, lSE)));
  float lMax = max(lM, max(max(lNW, lNE), max(lSW, lSE)));
  if (lMax - lMin < max(0.03, lMax * 0.12)) return cM;
  vec2 dir = vec2(-((lNW + lNE) - (lSW + lSE)), ((lNW + lSW) - (lNE + lSE)));
  float dirReduce = max((lNW + lNE + lSW + lSE) * 0.03125, 1.0 / 128.0);
  float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);
  dir = clamp(dir * rcpDirMin, vec2(-8.0), vec2(8.0)) * px;
  vec3 a = 0.5 * (texture2D(tScene, uv + dir * (1.0 / 3.0 - 0.5)).rgb + texture2D(tScene, uv + dir * (2.0 / 3.0 - 0.5)).rgb);
  vec3 b = a * 0.5 + 0.25 * (texture2D(tScene, uv - dir * 0.5).rgb + texture2D(tScene, uv + dir * 0.5).rgb);
  float lB = lumaT(b);
  return (lB < lMin || lB > lMax) ? a : b;
}
#if DOF_TAPS > 0
float viewZ(vec2 uv){ float d = texture2D(tDepth, uv).x; return (uNear * uFar) / ((uFar - uNear) * d - uFar) * -1.0; }
float cocOf(float z){ return min(uAperture * abs(z - uFocus) / max(z, 1e-3), uMaxCoc); }
#endif
void main(){
  vec3 col = vec3(0.0);
  bool done = false;
  #if DOF_TAPS > 0
  if (uAperture > 0.01) {
    float c0 = cocOf(viewZ(vUv));
    if (c0 > 0.6) {
      vec3 acc = texture2D(tScene, vUv).rgb; float wsum = 1.0;
      float rot = hash(gl_FragCoord.xy + uDofSeed * 17.0) * 6.2831;
      for (int i = 0; i < DOF_TAPS; i++) {
        float fi = float(i) + 0.5;
        float r = sqrt(fi / float(DOF_TAPS)) * c0;
        float a = fi * 2.39996323 + rot;
        vec2 suv = vUv + vec2(cos(a), sin(a)) * r / uRes;
        float cs = cocOf(viewZ(suv));
        // a tap counts if its own blur disc reaches us (in-focus edges do not smear outward)
        float w = clamp(cs - r + 1.0, 0.0, 1.0);
        acc += texture2D(tScene, suv).rgb * w; wsum += w;
      }
      col = acc / wsum;
      done = true;
    }
  }
  #endif
  if (!done) col = uFxaa > 0.5 ? fxaa(vUv) : texture2D(tScene, vUv).rgb;
  col += texture2D(tBloom, vUv).rgb * uBloom;

  // white balance drifts colder as the machine cools
  col *= mix(vec3(1.02, 1.0, 0.97), vec3(0.95, 0.99, 1.06), uCold);
  col = ACESFilmicToneMapping(col);
  col = sRGBTransferOETF(vec4(col, 1.0)).rgb;
  float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
  col = max(mix(vec3(l), col, uSat), 0.0);
  // split tone: lift the deepest shadows toward blue-black
  vec3 shadowTint = mix(vec3(0.006, 0.011, 0.020), vec3(0.004, 0.013, 0.028), uCold);
  col += shadowTint * (1.0 - smoothstep(0.0, 0.35, l));
  vec2 dv = (vUv - 0.5) * vec2(uRes.x / uRes.y, 1.0);
  float vig = smoothstep(1.2, 0.25, length(dv) * 1.05);
  col *= mix(1.0 - uVignette, 1.0, vig);
  col *= 1.0 - uBottom * smoothstep(0.4, 0.0, vUv.y);
  float g = hash(gl_FragCoord.xy + fract(uTime * 7.13) * 91.7) - 0.5;
  col += g * uGrain * (1.0 - 0.7 * l);
  col *= uFade;
  gl_FragColor = vec4(max(col, 0.0) * uWeight, 1.0);
}`,Cx=Ps+`
uniform sampler2D tSrc; uniform float uDither; varying vec2 vUv;
float hash(vec2 p){ p = fract(p * vec2(443.897, 441.423)); p += dot(p, p.yx + 19.19); return fract((p.x + p.y) * p.x); }
void main(){
  vec3 c = texture2D(tSrc, vUv).rgb;
  c += (hash(gl_FragCoord.xy) + hash(gl_FragCoord.xy * 1.37 + 5.3) - 1.0) * uDither;
  gl_FragColor = vec4(c, 1.0);
}`;function Px(){let i=new we;return i.setAttribute("position",new be(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),i}var Cs=(i,t,e={})=>new xs({vertexShader:Tx,fragmentShader:i,uniforms:t,depthTest:!1,depthWrite:!1,...e});function Ju(i,t,e,{preset:n,msaa:s}){let r=n.dofTaps|0,o=n.bloomLevels|0,a=n.bloomDiv||2,c=0;try{let W=i.getContext(),X=W.getInternalformatParameter(W.RENDERBUFFER,W.RGBA16F,W.SAMPLES);c=X&&X.length?X[0]:0}catch{c=0}let l=Math.min(s|0,i.capabilities.maxSamples||4,c),h=4,f=4,u=r>0?new Xn(4,4):null,p=new Fe(4,4,{type:We,samples:l,depthBuffer:!0,stencilBuffer:!1,minFilter:Pe,magFilter:Pe,generateMipmaps:!1,resolveDepthBuffer:!!u,...u?{depthTexture:u}:{}}),x=()=>new Fe(1,1,{type:We,depthBuffer:!1,minFilter:Pe,magFilter:Pe,generateMipmaps:!1}),y=Array.from({length:o},x),m=Array.from({length:Math.max(0,o-1)},x),d=null,E=new Fi(new Uint8Array([0,0,0,255]),1,1);E.needsUpdate=!0;let A=Cs(wx,{tSrc:{value:null},uTexel:{value:new Lt},uThreshold:{value:1.2},uKnee:{value:.6}}),v=Cs(Ax,{tSrc:{value:null},uTexel:{value:new Lt}}),S=Cs(Rx,{tSrc:{value:null},tAdd:{value:null},uTexel:{value:new Lt},uRadius:{value:1}}),M={tScene:{value:p.texture},tDepth:{value:u||E},tBloom:{value:E},uBloom:{value:.25},uTime:{value:0},uCold:{value:0},uVignette:{value:.55},uGrain:{value:n.grain},uFade:{value:1},uSat:{value:1.05},uFxaa:{value:l===0?1:0},uBottom:{value:0},uWeight:{value:1},uDofSeed:{value:0},uNear:{value:e.near},uFar:{value:e.far},uFocus:{value:10},uAperture:{value:0},uMaxCoc:{value:14},uRes:{value:new Lt(4,4)},toneMappingExposure:{value:1}},R=Cs(Zu(r),M),g=Cs(Zu(r),M,{blending:Tn,transparent:!0}),T=Cs(Cx,{tSrc:{value:null},uDither:{value:0}}),P=new Mi(-1,1,1,-1,0,1),D=new ve(Px(),A);D.frustumCulled=!1;let F=(W,X)=>{D.material=W,i.setRenderTarget(X),i.render(D,P)},H=o>0,U=r>0,G={sceneRT:p,uniforms:M,samples:l,dofTaps:r,levels:o,sceneCalls:0,sceneTris:0,get bloomOn(){return H},get dofOn(){return U},setSize(W,X){h=Math.max(1,Math.round(W)),f=Math.max(1,Math.round(X)),p.setSize(h,f),u&&(u.image.width=h,u.image.height=f);let ot=Math.max(1,Math.round(h/a)),Q=Math.max(1,Math.round(f/a));for(let it=0;it<o;it++)y[it].setSize(ot,Q),it<o-1&&m[it].setSize(ot,Q),ot=Math.max(1,ot>>1),Q=Math.max(1,Q>>1);M.uRes.value.set(h,f),d&&d.setSize(h,f)},setEnabled(W){H=W&&o>0,U=W&&r>0},renderScene(){i.setRenderTarget(p),i.render(t,e),G.sceneCalls=i.info.render.calls,G.sceneTris=i.info.render.triangles},renderBloom(){if(!H){M.tBloom.value=E;return}A.uniforms.tSrc.value=p.texture,A.uniforms.uTexel.value.set(a/(2*h),a/(2*f)),F(A,y[0]);for(let X=1;X<o;X++)v.uniforms.tSrc.value=y[X-1].texture,v.uniforms.uTexel.value.set(1/y[X-1].width,1/y[X-1].height),F(v,y[X]);let W=y[o-1];for(let X=o-2;X>=0;X--)S.uniforms.tSrc.value=W.texture,S.uniforms.tAdd.value=y[X].texture,S.uniforms.uTexel.value.set(1/W.width,1/W.height),F(S,m[X]),W=m[X];M.tBloom.value=o>1?m[0].texture:y[0].texture},render(){G.renderScene(),G.renderBloom();let W=M.uAperture.value;U||(M.uAperture.value=0),M.uWeight.value=1,F(R,null),M.uAperture.value=W},accumulate(W,X){if(d||(d=new Fe(h,f,{type:We,depthBuffer:!1,minFilter:Pe,magFilter:Pe,generateMipmaps:!1})),G.renderScene(),G.renderBloom(),M.uWeight.value=1/X,M.uDofSeed.value=W*.618,W===0)F(R,d);else{let ot=i.autoClear;i.autoClear=!1,F(g,d),i.autoClear=ot}M.uWeight.value=1,M.uDofSeed.value=0},present(W=1/255){T.uniforms.tSrc.value=d.texture,T.uniforms.uDither.value=W,F(T,null)},async compile(W){let X=new Fe(1,1,{type:We,depthBuffer:!1});for(let ot of[A,v,S,R,T])D.material=ot,await i.compileAsync(D,P),F(ot,X),W&&await W();i.setRenderTarget(null),X.dispose()},dispose(){p.dispose(),u&&u.dispose(),y.forEach(W=>W.dispose()),m.forEach(W=>W.dispose()),d&&d.dispose(),[A,v,S,R,g,T].forEach(W=>W.dispose()),D.geometry.dispose(),E.dispose()}};return G}var $u=Math.PI/180,Ac=7,Ix=4.2,Lx=[0,.3,1,1,1,1],Dx=.72,Nx=.45,Ux=1.1,Is=2.12,Ku=5.06,Ar=3.4,Rc=5,Fx=24,Ox=.3,ju=2100,Bx=2600,zx={plate300K:[0,-.35],plate50K:[1,-.35],plate4K:[2,-.3],still:[3,-.35],coldplate:[4,-.4],mxc:[5,-.62]};async function UM({canvas:i,reducedMotion:t=!1,onProgress:e,debug:n=null}={}){if(!i)throw new Error("createScene: a canvas is required");let s=n||{},r=performance.now(),o=0,a=1/0,c=null;try{typeof PerformanceObserver=="function"&&(PerformanceObserver.supportedEntryTypes||[]).includes("longtask")&&(c=new PerformanceObserver(ht=>{for(let Vt of ht.getEntries())Vt.startTime<a&&Vt.duration>o&&(o=Vt.duration)}),c.observe({type:"longtask"}))}catch{c=null}let l=Iu({budget:10,onProgress:e}),h=new Fa({canvas:i,antialias:!1,alpha:!1,stencil:!1,depth:!1,powerPreference:"high-performance",preserveDrawingBuffer:!!s.preserve});if(!h.extensions.has("EXT_color_buffer_float")&&!h.extensions.has("EXT_color_buffer_half_float"))throw h.dispose(),new Error("createScene: half-float render targets are not supported");h.debug.checkShaderErrors=Object.keys(s).length>0,h.outputColorSpace=Xe,h.toneMapping=xn,h.info.autoReset=!1,h.setClearColor(131846,1);let f=yu(h.getContext()),u=s.quality==="still"?"still":f.name,p=bu(u,s.preset);s.grain!==void 0&&(p.grain=s.grain),u==="low"&&(p.iridescence=0),f.dofTaps!==void 0&&u!=="still"&&(p.dofTaps=Math.min(p.dofTaps,f.dofTaps));let x=typeof matchMedia=="function"&&matchMedia("(hover: hover) and (pointer: fine)").matches,y=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches,m=u==="still"?4:y?0:Math.min(p.msaa,f.msaa);l.step("renderer",.02),await l.yield("renderer");let d=new Ui;d.fog=new Js(new qt().setRGB(.0045,.0068,.012),.02);let E=new Ke(30,1.6,.05,80),A=Tu();for(let ht=0;ht<6;ht++)A.uPlates.value[ht].set(Zt[ht].y,Zt[ht].R,Zt[ht].t,0);A.uSparkle.value=t?0:1;let v=wu(A,p),S=Mc(h,{size:p.env});d.environment=S.texture,l.step("environment",.05),await l.yield("environment");let M=await Bu({preset:p,U:A,mats:v,slicer:l}),R=await Hu({preset:p,U:A,machine:M,slicer:l,mats:v});await M.finish(),d.add(M.root),d.add(R.root);let g=Vu({preset:p,U:A,machine:M});d.add(g.group);let T=new _s(15003135,1.6),P=new C(-6,9,7);T.position.copy(P),d.add(T);let D=new _s(8828159,1);D.position.set(7,2,-8),d.add(D);let F=Xu(R,s.key),H=Ju(h,d,E,{preset:p,msaa:m});await l.maybeYield("post");let U=1,G=1,W=1,X=1,ot=1,Q=1,it=!1,at=new Lt;function Ht(ht=!1){let Vt=Math.max(1,i.clientWidth||window.innerWidth||1),ne=Math.max(1,i.clientHeight||window.innerHeight||1),Yt=s.dpr!==void 0?s.dpr:Mu(f,Vt,ne,Q);return!ht&&Vt===U&&ne===G&&Yt===ot?!1:(U=Vt,G=ne,ot=Yt,h.setDrawingBufferSize(U,G,ot),h.getDrawingBufferSize(at),W=at.x,X=at.y,H.setSize(W,X),it=s.portrait!==void 0?!!s.portrait:qu(U,G),g.bgMat.uniforms.uRes.value.set(W,X),!0)}Ht(!0);let At={x:0,v:0},re=0,Jt=s.time!==void 0?s.time:0,te=Jt,j={x:0,y:0,tx:0,ty:0},st=!1,bt=0,Xt={pos:[0,0,0],tgt:[0,0,0],fov:30,shift:[0,0],roll:0,drift:0},rt={},I=new C,B=new C,$=new C,tt=0,et=0,pt=0,mt=0,_t=0,Pt=0,lt={state:"done",t0:0,dur:ju,from:1,sweep:0,resolve:null,promise:null,armedAt:0},Tt=1,L=0,Dt=1;s.chapter!==void 0&&(re=At.x=Ne(+s.chapter,0,Ac));let Mt=M.pulse.pathS,w=M.pulse.pathP;function _(ht,Vt){let ne=Mt.length;if(ht<=Mt[0])return Vt.set(w[0],w[1],w[2]);if(ht>=Mt[ne-1])return Vt.set(w[ne*3-3],w[ne*3-2],w[ne*3-1]);let Yt=0,xe=ne-1;for(;xe-Yt>1;){let un=Yt+xe>>1;Mt[un]<=ht?Yt=un:xe=un}let _e=(ht-Mt[Yt])/Math.max(1e-6,Mt[xe]-Mt[Yt]);return Vt.set(ie(w[Yt*3],w[xe*3],_e),ie(w[Yt*3+1],w[xe*3+1],_e),ie(w[Yt*3+2],w[xe*3+2],_e))}let N=ht=>(ht>2?.58:1)*(ht>3?.58:1)*(ht>4?.58:1)*(ht>5?.58:1);function k(ht){if(lt.state==="dim"){Tt=Ox,L=0,Dt=1,lt.armedAt&&(ht-lt.armedAt>Bx||At.x>.35)&&J(ht,!1);return}if(lt.state==="playing"){let Vt=Ne((ht-lt.t0)/lt.dur,0,1),ne=Cu(Ne(Vt/.8,0,1));if(Tt=ie(lt.from,1,ne),lt.sweep){L=ie(-1.15,0,Sc(Vt)),Dt=1+1.4*Math.sin(Math.PI*Vt)*(1-Vt*.4);let Yt=ie(-1.4,0,Sc(Vt));T.position.set(P.x*Math.cos(Yt)+P.z*Math.sin(Yt),P.y,-P.x*Math.sin(Yt)+P.z*Math.cos(Yt))}Vt>=1&&(lt.state="done",Tt=1,L=0,Dt=1,T.position.copy(P),lt.resolve&&(lt.resolve(),lt.resolve=null));return}Tt=1,L=0,Dt=1}function J(ht,Vt){lt.state==="dim"&&(lt.state="playing",lt.t0=ht,lt.from=Tt,lt.sweep=Vt&&!t,lt.dur=lt.sweep?ju:650)}function dt(ht,Vt){Jt+=ht,t||(te+=ht),s.jump?(At.x=re,At.v=0):Pu(At,re,Ix,ht);let ne=Ne(At.x,0,Ac),Yt=1-Math.exp(-ht*3);if(j.x+=(j.tx-j.x)*Yt,j.y+=(j.ty-j.y)*Yt,k(Vt),F.look(ne,rt),F.sample(ne,it,Xt),I.fromArray(Xt.pos),B.fromArray(Xt.tgt),Xt.drift>.001&&!t){let Le=Xt.drift*.17*Math.sin(te*.075),b=Xt.drift*.07*Math.sin(te*.053+1.3),O=R.center.x,K=R.center.z,q=I.x-O,Z=I.z-K,wt=Math.cos(Le),Nt=Math.sin(Le);I.set(O+q*wt+Z*Nt,I.y+b,K-q*Nt+Z*wt)}let xe=I.distanceTo(B);if(!t){let Le=.004*xe;if(I.x+=Math.sin(te*.23)*Le,I.y+=Math.sin(te*.31+1)*Le*.6,I.z+=Math.cos(te*.19)*Le,j.x!==0||j.y!==0){let b=-j.x*.03,O=j.y*.018*xe;$.subVectors(I,B);let K=Math.cos(b),q=Math.sin(b);I.set(B.x+$.x*K+$.z*q,I.y+O,B.z-$.x*q+$.z*K)}}E.position.copy(I),E.up.set(0,1,0),E.lookAt(B),E.rotateZ(Xt.roll),Yu(E,Xt,W,X,it,tt,et),E.updateMatrixWorld(),d.environmentRotation.y=rt.envRot+L,d.environmentIntensity=rt.envInt,d.fog.density=rt.fog,T.intensity=1.6*rt.key*Dt;let _e=H.uniforms;_e.toneMappingExposure.value=rt.exposure,_e.uCold.value=rt.cold,_e.uBloom.value=rt.bloom*.22,_e.uVignette.value=rt.vignette,_e.uSat.value=rt.sat,_e.uBottom.value=it?0:rt.bottom,_e.uFade.value=Tt,_e.uTime.value=Jt,_e.uNear.value=E.near,_e.uFar.value=E.far,_e.uFocus.value=Math.max(.2,xe-rt.focusPull),_e.uAperture.value=rt.dof*(X/1e3),_e.uMaxCoc.value=16*(X/1e3);let un=g.bgMat.uniforms;un.uCold.value=rt.cold,un.uHaloAmt.value=rt.halo,un.uBeam.value=rt.beam,$.copy(B).project(E),un.uHalo.value.set($.x*.5+.5,$.y*.5+.5),g.proj.value=X/(2*Math.tan(E.fov*$u/2)),g.dustMat.uniforms.uAmt.value=1-.55*Ie(3.4,4.4,ne),!st&&ne>Dx?st=!0:st&&ne<Nx&&(st=!1);let ai=st?1:0;bt=t||s.settle?ai:bt+(ai-bt)*(1-Math.exp(-ht/Ux)),A.uFrost.value=bt;let Ya=.75+.25*Ie(1.5,3,ne);for(let Le=0;Le<6;Le++)A.uPlates.value[Le].w=Lx[Le]*bt*rt.frost*(Le>=3?Ya:1);let Xi=Ie(1.45,1.85,ne)*(1-Ie(2.4,2.8,ne)),qi=g.signalMat.uniforms;if(A.uPulse.value.w=Xi,g.signal.visible=Xi>.001,qi.uVis.value=Xi,Xi>.001){let Le,b,O;t?(Le=3.55,b=1,O=-1):(O=(Jt%Rc+Rc)%Rc,O<Ar?(Le=Is+(Ku-Is)*(O/Ar),b=Ie(0,.3,O)*(1-Ie(Ar-.25,Ar,O))):(Le=-10,b=0)),A.uPulse.value.x=Le,A.uPulse.value.y=Fx*b,_(Math.max(Le,Is),qi.uHead.value),qi.uHeadAmp.value=b*N(Le)*6;let K=qi.uFlash.value;for(let q=0;q<4;q++){let Z=Eu[q];if(O<0||Z<Is){K[q]=0;continue}let wt=(Z-Is)/(Ku-Is)*Ar;K[q]=O>=wt?Math.exp(-(O-wt)*3.2)*N(Z-.01)*1.6:0}}let Lr=t?1:.93+.07*Math.sin(Jt*.7);A.uGlow.value=rt.glow*Lr,g.setGlow(rt.glowHalo*.9*Lr),g.setFrost(Ie(2.4,2.95,ne)*(1-Ie(3.6,4.25,ne))),g.drift.value=te,A.uTime.value=Jt,R.choreo.update(Jt,ne,t),R.CU.uGain.value=rt.gain}function ut(){h.info.reset(),H.render(),pt=H.sceneCalls,mt=H.sceneTris,_t=h.info.render.calls,Pt=h.info.render.triangles}let V={mid:2,low:1};if(V[u])for(let ht of[...M.textures,...R.textures])ht.anisotropy=Math.min(ht.anisotropy,V[u]);l.step("upload",.86);for(let ht of[...M.textures,...R.textures])h.initTexture(ht),await l.yield("upload texture");s.wakeAge!==void 0&&R.choreo.setWakeAge(Jt,s.wakeAge),!t&&At.x<.35&&!s.noIntro&&(lt.state="dim"),dt(0,performance.now()),l.step("shaders",.9),h.setRenderTarget(H.sceneRT);let Y=[];d.traverse(ht=>{(ht.isMesh||ht.isPoints)&&ht.material&&Y.push(ht)});let ct=new Set;for(let ht of Y)ct.has(ht.material)||(ct.add(ht.material),h.compile(ht,E,d),await l.yield("compile"));await h.compileAsync(d,E),h.setRenderTarget(null),await H.compile(()=>l.maybeYield("post")),await l.yield("compile done"),l.step("buffers",.95);{let ht=new Fe(4,4,{type:We,depthBuffer:!0}),Vt=Y.map(Yt=>Yt.visible),ne=Y.map(Yt=>Yt.frustumCulled);Y.forEach(Yt=>{Yt.visible=!1}),h.setRenderTarget(ht);for(let Yt=0;Yt<Y.length;Yt++){let xe=Y[Yt];xe.visible=!0,xe.frustumCulled=!1,h.render(d,E),xe.visible=!1,xe.frustumCulled=ne[Yt],await l.maybeYield("buffers")}Y.forEach((Yt,xe)=>{Yt.visible=Vt[xe]}),h.setRenderTarget(null),ht.dispose()}l.mark("ready"),l.step("ready",1),a=performance.now();let St=Math.round(a-r);if(c)try{for(let ht of c.takeRecords())ht.startTime<a&&ht.duration>o&&(o=ht.duration)}catch{}let xt=Math.round(l.longest),gt=l.longestLabel,Et=!1,Ut=0,Ft=0,z=!1,vt=!1,nt=0,yt=[],Rt,ft=new Promise(ht=>{Rt=ht}),Bt=s.governor===!1||u==="still"?null:new Ha(f,(ht,Vt)=>{Q=ht,H.setEnabled(Vt),Ht()}),zt=u==="still"?!0:f.post!==!1;H.setEnabled(Bt?Bt.post:zt);let me=s.dt,fe=!0;function an(ht){if(!Et)return;Ut=requestAnimationFrame(an);let Vt=y&&lt.state==="done"&&Math.abs(At.v)<.001&&Math.abs(re-At.x)<.001;if(Ft&&ht-Ft<(Vt?30:10))return;let ne=Ft?ht-Ft:16.7;Ft=ht,fe&&(fe=!1,At.x=re,At.v=0,lt.state==="dim"&&re>=.35&&(lt.state="done")),Bt&&!Vt&&Bt.sample(ne,ht);let Yt=me!==void 0?me:Math.min(.1,Math.max(0,ne/1e3));dt(Yt,ht),ut(),nt++,nt===1&&(lt.state==="dim"&&(lt.armedAt=ht),requestAnimationFrame(()=>Rt()));let xe=At.x;for(let _e=0;_e<yt.length;_e++)yt[_e](xe)}let hn=ht=>{ht.preventDefault(),vt=!0,Et=!1,cancelAnimationFrame(Ut),i.dispatchEvent(new CustomEvent("contextlost"))},Rr=()=>{z||(vt=!1,S.dispose(),S=Mc(h,{size:p.env}),d.environment=S.texture,Ht(!0),i.dispatchEvent(new CustomEvent("contextrestored")))};i.addEventListener("webglcontextlost",hn,!1),i.addEventListener("webglcontextrestored",Rr,!1);let Cr=M.pulse.att,Pr=Cr[Math.min(2,Cr.length-1)]||new C,Ls=(()=>{let ht=null,Vt=-2,ne=18*$u,Yt=Math.sin(ne),xe=Math.cos(ne);for(let _e of M.circulators){let un=Math.hypot(_e.x,_e.z)||1,ai=(_e.x*Yt+_e.z*xe)/un;ai>Vt&&(Vt=ai,ht=_e)}return ht||new C(0,-2.55,.6)})(),Pn=new C,Ds=new C;function Ir(ht,Vt){let ne=zx[ht];if(ne){let Yt=Zt[ne[0]],xe=Math.atan2(E.position.x,E.position.z)+ne[1];return Vt.set(Math.sin(xe)*Yt.R,Yt.y-Yt.t*.5,Math.cos(xe)*Yt.R)}return ht==="attenuator"?Vt.copy(Pr):ht==="circulator"?Vt.copy(Ls):ht==="chip"?Vt.copy(R.center).addScaledVector(R.right,-.5*R.dieW):null}let In={tier:f,firstFrame:ft,setChapter(ht){let Vt=+ht;Number.isFinite(Vt)&&(re=Ne(Vt,0,Ac))},setPointer(ht,Vt){!x||t||(j.tx=Ne(+ht||0,-1,1),j.ty=Ne(+Vt||0,-1,1))},resize(){z||vt||!Ht()||(Ft=0,!Et&&nt>0&&(dt(0,performance.now()),ut()))},start(){Et||z||vt||(Et=!0,Ft=0,Ut=requestAnimationFrame(an))},stop(){Et=!1,cancelAnimationFrame(Ut),Ut=0},intro(){return lt.state==="done"?Promise.resolve():(lt.promise||(lt.promise=new Promise(ht=>{lt.resolve=ht})),lt.state==="dim"&&J(performance.now(),!0),lt.promise)},project(ht,Vt){return Vt.visible=!1,!Ir(ht,Pn)||(Ds.copy(Pn).applyMatrix4(E.matrixWorldInverse),Ds.z>-E.near)||(Pn.project(E),Vt.x=(Pn.x*.5+.5)*U,Vt.y=(.5-Pn.y*.5)*G,Vt.visible=Pn.x>-.98&&Pn.x<.98&&Pn.y>-.96&&Pn.y<.96),Vt},onFrame(ht){return typeof ht!="function"?()=>{}:(yt.push(ht),()=>{let Vt=yt.indexOf(ht);Vt>=0&&yt.splice(Vt,1)})},info(){let ht=h.info.memory;return{tier:f.name,preset:u,dpr:Math.round(ot*100)/100,dprScale:Math.round(Q*100)/100,size:[W,X],css:[U,G],portrait:it,calls:_t,triangles:Pt,sceneCalls:pt,sceneTriangles:mt,programs:h.info.programs?h.info.programs.length:0,textures:ht.textures,geometries:ht.geometries,msaa:H.samples,dofTaps:H.dofOn?H.dofTaps:0,bloomLevels:H.bloomOn?H.levels:0,post:Bt?Bt.post:zt,buildMs:St,longestTask:c?Math.round(o):null,longestSlice:xt,longestSliceLabel:gt,staticTriangles:M.stats.tris.total+R.stats.tris,lines:M.stats.lines,connectors:M.stats.connectors,wirebonds:R.stats.bonds,airbridges:R.stats.bridges,frames:nt,chapter:Math.round(At.x*1e3)/1e3}},dispose(){if(!z){if(z=!0,In.stop(),i.removeEventListener("webglcontextlost",hn,!1),i.removeEventListener("webglcontextrestored",Rr,!1),c)try{c.disconnect()}catch{}yt.length=0,d.traverse(ht=>{ht.isInstancedMesh&&ht.dispose(),ht.geometry&&ht.geometry.dispose();let Vt=ht.material;Vt&&(Array.isArray(Vt)?Vt:[Vt]).forEach(ne=>{for(let Yt in ne){let xe=ne[Yt];xe&&xe.isTexture&&xe.dispose()}ne.dispose()})});for(let ht of[...M.textures,...R.textures])ht.dispose(),ht.image&&typeof ht.image.getContext=="function"&&(ht.image.width=ht.image.height=0);S.dispose(),H.dispose(),h.dispose(),lt.resolve&&(lt.resolve(),lt.resolve=null)}}};return Object.keys(s).length&&(In._debug={scene:d,camera:E,renderer:h,machine:M,chip:R,post:H,U:A,rig:F,renderStill(ht=8){let Vt=[.5,.3333,.25,.75,.125,.625,.375,.875,.0625,.5625,.3125,.8125,.1875,.6875,.4375,.9375],ne=[.3333,.6667,.1111,.4444,.7778,.2222,.5556,.8889,.037,.3704,.7037,.1481,.4815,.8148,.2593,.5926];for(let Yt=0;Yt<ht;Yt++)tt=Vt[Yt%16]-.5,et=ne[Yt%16]-.5,dt(0,performance.now()),h.info.reset(),H.accumulate(Yt,ht);tt=et=0,H.present(1/255),nt++},update:ht=>dt(ht,performance.now()),render:ut,setTime(ht){Jt=ht,te=ht}}),In}export{UM as createScene};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
