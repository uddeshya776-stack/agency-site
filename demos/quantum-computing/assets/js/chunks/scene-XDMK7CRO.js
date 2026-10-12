import"./chunk-IHRIUEAN.js";var su=0,Al=1,ru=2;var hr=1,ou=2,Ss=3,bi=0,Ye=1,An=2,Zn=0,bs=1,Rn=2,Rl=3,Cl=4,au=5;var Vi=100,lu=101,cu=102,uu=103,hu=104,fu=200,du=201,pu=202,mu=203,Pl=204,Il=205,gu=206,xu=207,_u=208,vu=209,yu=210,Mu=211,Su=212,bu=213,Eu=214,eo=0,no=1,io=2,ds=3,so=4,ro=5,oo=6,ao=7,Ll=0,Tu=1,wu=2,_n=0,Dl=1,Nl=2,Ul=3,Fl=4,Ol=5,Bl=6,zl=7;var Hl=300,Ei=301,ki=302,ko=303,Go=304,fr=306,lo=1e3,En=1001,co=1002,ke=1003,Au=1004;var dr=1005;var Pe=1006,Wo=1007;var Jn=1008;var un=1009,Vl=1010,kl=1011,Es=1012,Xo=1013,zn=1014,Cn=1015,Ze=1016,qo=1017,Yo=1018,Ts=1020,Gl=35902,Wl=35899,Xl=1021,ql=1022,Pn=1023,Wn=1026,Ti=1027,Zo=1028,Jo=1029,wi=1030,$o=1031;var Ko=1033,pr=33776,mr=33777,gr=33778,xr=33779,jo=35840,Qo=35841,ta=35842,ea=35843,na=36196,ia=37492,sa=37496,ra=37488,oa=37489,_r=37490,aa=37491,la=37808,ca=37809,ua=37810,ha=37811,fa=37812,da=37813,pa=37814,ma=37815,ga=37816,xa=37817,_a=37818,va=37819,ya=37820,Ma=37821,Sa=36492,ba=36494,Ea=36495,Ta=36283,wa=36284,vr=36285,Aa=36286;var Ws=2300,uo=2301,Qr=2302,vl=2303,yl=2400,Ml=2401,Sl=2402;var Ru=3200;var Ra=0,Cu=1,Hn="",Xe="srgb",Xs="srgb-linear",qs="linear",ye="srgb";var to=7680;var Pu=519,Iu=512,Lu=513,Du=514,Ca=515,Nu=516,Uu=517,Pa=518,Fu=519,Ou=35044;var Yl="300 es",On=2e3,ps=2001;function Qh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function tf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ys(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Bu(){let i=Ys("canvas");return i.style.display="block",i}var Pc={},ms=null;function Zl(...i){let t="THREE."+i.shift();ms?ms("log",t,...i):console.log(t,...i)}function zu(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Zt(...i){i=zu(i);let t="THREE."+i.shift();if(ms)ms("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function jt(...i){i=zu(i);let t="THREE."+i.shift();if(ms)ms("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Fi(...i){let t=i.join(" ");t in Pc||(Pc[t]=!0,Zt(...i))}function Hu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Vu={[eo]:no,[io]:oo,[so]:ao,[ds]:ro,[no]:eo,[oo]:io,[ao]:so,[ro]:ds},Xn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},$e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ya=Math.PI/180,ho=180/Math.PI;function yr(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($e[i&255]+$e[i>>8&255]+$e[i>>16&255]+$e[i>>24&255]+"-"+$e[t&255]+$e[t>>8&255]+"-"+$e[t>>16&15|64]+$e[t>>24&255]+"-"+$e[e&63|128]+$e[e>>8&255]+"-"+$e[e>>16&255]+$e[e>>24&255]+$e[n&255]+$e[n>>8&255]+$e[n>>16&255]+$e[n>>24&255]).toLowerCase()}function le(i,t,e){return Math.max(t,Math.min(e,i))}function ef(i,t){return(i%t+t)%t}function Za(i,t,e){return(1-e)*i+e*t}function Us(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function cn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var tc=class tc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};tc.prototype.isVector2=!0;var Pt=tc,sn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],f=n[s+3],h=r[o+0],p=r[o+1],g=r[o+2],y=r[o+3];if(f!==y||c!==h||l!==p||u!==g){let m=c*h+l*p+u*g+f*y;m<0&&(h=-h,p=-p,g=-g,y=-y,m=-m);let d=1-a;if(m<.9995){let E=Math.acos(m),R=Math.sin(E);d=Math.sin(d*E)/R,a=Math.sin(a*E)/R,c=c*d+h*a,l=l*d+p*a,u=u*d+g*a,f=f*d+y*a}else{c=c*d+h*a,l=l*d+p*a,u=u*d+g*a,f=f*d+y*a;let E=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=E,l*=E,u*=E,f*=E}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],f=r[o],h=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+u*f+c*p-l*h,t[e+1]=c*g+u*h+l*f-a*p,t[e+2]=l*g+u*p+a*h-c*f,t[e+3]=u*g-a*f-c*h-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),f=a(r/2),h=c(n/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=h*u*f+l*p*g,this._y=l*p*f-h*u*g,this._z=l*u*g+h*p*f,this._w=l*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+l*p*g,this._y=l*p*f-h*u*g,this._z=l*u*g-h*p*f,this._w=l*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-l*p*g,this._y=l*p*f+h*u*g,this._z=l*u*g+h*p*f,this._w=l*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-l*p*g,this._y=l*p*f+h*u*g,this._z=l*u*g-h*p*f,this._w=l*u*f+h*p*g;break;case"YZX":this._x=h*u*f+l*p*g,this._y=l*p*f+h*u*g,this._z=l*u*g-h*p*f,this._w=l*u*f-h*p*g;break;case"XZY":this._x=h*u*f-l*p*g,this._y=l*p*f-h*u*g,this._z=l*u*g+h*p*f,this._w=l*u*f+h*p*g;break;default:Zt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],f=e[10],h=n+a+f;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>f){let p=2*Math.sqrt(1+n-a-f);this._w=(u-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>f){let p=2*Math.sqrt(1+a-n-f);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+u)/p}else{let p=2*Math.sqrt(1+f-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(le(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){let l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ec=class ec{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ic.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ic.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+c*l+o*f-a*u,this.y=n+c*u+a*l-r*f,this.z=s+c*f+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ja.copy(this).projectOnVector(t),this.sub(Ja)}reflect(t){return this.sub(Ja.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ec.prototype.isVector3=!0;var C=ec,Ja=new C,Ic=new sn,nc=class nc{constructor(t,e,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],f=n[7],h=n[2],p=n[5],g=n[8],y=s[0],m=s[3],d=s[6],E=s[1],R=s[4],v=s[7],S=s[2],M=s[5],A=s[8];return r[0]=o*y+a*E+c*S,r[3]=o*m+a*R+c*M,r[6]=o*d+a*v+c*A,r[1]=l*y+u*E+f*S,r[4]=l*m+u*R+f*M,r[7]=l*d+u*v+f*A,r[2]=h*y+p*E+g*S,r[5]=h*m+p*R+g*M,r[8]=h*d+p*v+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=u*o-a*l,h=a*c-u*r,p=l*r-o*c,g=e*f+n*h+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=f*y,t[1]=(s*l-u*n)*y,t[2]=(a*n-s*o)*y,t[3]=h*y,t[4]=(u*e-s*c)*y,t[5]=(s*r-a*e)*y,t[6]=p*y,t[7]=(n*c-l*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return Fi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply($a.makeScale(t,e)),this}rotate(t){return Fi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply($a.makeRotation(-t)),this}translate(t,e){return Fi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply($a.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};nc.prototype.isMatrix3=!0;var ee=nc,$a=new ee,Lc=new ee().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dc=new ee().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nf(){let i={enabled:!0,workingColorSpace:Xs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ye&&(s.r=si(s.r),s.g=si(s.g),s.b=si(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ye&&(s.r=fs(s.r),s.g=fs(s.g),s.b=fs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Hn?qs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Fi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Fi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Xs]:{primaries:t,whitePoint:n,transfer:qs,toXYZ:Lc,fromXYZ:Dc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Xe},outputColorSpaceConfig:{drawingBufferColorSpace:Xe}},[Xe]:{primaries:t,whitePoint:n,transfer:ye,toXYZ:Lc,fromXYZ:Dc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Xe}}}),i}var ue=nf();function si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function fs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ji,fo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ji===void 0&&(ji=Ys("canvas")),ji.width=t.width,ji.height=t.height;let s=ji.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ji}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ys("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=si(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(si(e[n]/255)*255):e[n]=si(e[n]);return{data:e,width:t.width,height:t.height}}else return Zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},sf=0,gs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=yr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ka(s[o].image)):r.push(Ka(s[o]))}else r=Ka(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ka(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?fo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Zt("Texture: Unable to serialize Texture."),{})}var rf=0,ja=new C,rn=class i extends Xn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=En,s=En,r=Pe,o=Jn,a=Pn,c=un,l=i.DEFAULT_ANISOTROPY,u=Hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=yr(),this.name="",this.source=new gs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ja).x}get height(){return this.source.getSize(ja).y}get depth(){return this.source.getSize(ja).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Zt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Hl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case lo:t.x=t.x-Math.floor(t.x);break;case En:t.x=t.x<0?0:1;break;case co:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case lo:t.y=t.y-Math.floor(t.y);break;case En:t.y=t.y<0?0:1;break;case co:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=Hl;rn.DEFAULT_ANISOTROPY=1;var ic=class ic{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],u=c[4],f=c[8],h=c[1],p=c[5],g=c[9],y=c[2],m=c[6],d=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let R=(l+1)/2,v=(p+1)/2,S=(d+1)/2,M=(u+h)/4,A=(f+y)/4,x=(g+m)/4;return R>v&&R>S?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=M/n,r=A/n):v>S?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=M/s,r=x/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=A/r,s=x/r),this.set(n,s,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(f-y)*(f-y)+(h-u)*(h-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(f-y)/E,this.z=(h-u)/E,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this.w=le(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this.w=le(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ic.prototype.isVector4=!0;var Te=ic,po=class extends Xn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Te(0,0,t,e),this.scissorTest=!1,this.viewport=new Te(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new rn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Pe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new gs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Be=class extends po{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Zs=class extends rn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var mo=class extends rn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Vo=class Vo{constructor(t,e,n,s,r,o,a,c,l,u,f,h,p,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,f,h,p,g,y,m)}set(t,e,n,s,r,o,a,c,l,u,f,h,p,g,y,m){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=g,d[11]=y,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vo().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Qi.setFromMatrixColumn(t,0).length(),r=1/Qi.setFromMatrixColumn(t,1).length(),o=1/Qi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let h=o*u,p=o*f,g=a*u,y=a*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=p+g*l,e[5]=h-y*l,e[9]=-a*c,e[2]=y-h*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){let h=c*u,p=c*f,g=l*u,y=l*f;e[0]=h+y*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=p*a-g,e[6]=y+h*a,e[10]=o*c}else if(t.order==="ZXY"){let h=c*u,p=c*f,g=l*u,y=l*f;e[0]=h-y*a,e[4]=-o*f,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*u,e[9]=y-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let h=o*u,p=o*f,g=a*u,y=a*f;e[0]=c*u,e[4]=g*l-p,e[8]=h*l+y,e[1]=c*f,e[5]=y*l+h,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let h=o*c,p=o*l,g=a*c,y=a*l;e[0]=c*u,e[4]=y-h*f,e[8]=g*f+p,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=p*f+g,e[10]=h-y*f}else if(t.order==="XZY"){let h=o*c,p=o*l,g=a*c,y=a*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=h*f+y,e[5]=o*u,e[9]=p*f-g,e[2]=g*f-p,e[6]=a*u,e[10]=y*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(of,t,af)}lookAt(t,e,n){let s=this.elements;return dn.subVectors(t,e),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),fi.crossVectors(n,dn),fi.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),fi.crossVectors(n,dn)),fi.normalize(),Ir.crossVectors(dn,fi),s[0]=fi.x,s[4]=Ir.x,s[8]=dn.x,s[1]=fi.y,s[5]=Ir.y,s[9]=dn.y,s[2]=fi.z,s[6]=Ir.z,s[10]=dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],f=n[5],h=n[9],p=n[13],g=n[2],y=n[6],m=n[10],d=n[14],E=n[3],R=n[7],v=n[11],S=n[15],M=s[0],A=s[4],x=s[8],T=s[12],P=s[1],D=s[5],N=s[9],G=s[13],F=s[2],H=s[6],W=s[10],J=s[14],at=s[3],j=s[7],st=s[11],rt=s[15];return r[0]=o*M+a*P+c*F+l*at,r[4]=o*A+a*D+c*H+l*j,r[8]=o*x+a*N+c*W+l*st,r[12]=o*T+a*G+c*J+l*rt,r[1]=u*M+f*P+h*F+p*at,r[5]=u*A+f*D+h*H+p*j,r[9]=u*x+f*N+h*W+p*st,r[13]=u*T+f*G+h*J+p*rt,r[2]=g*M+y*P+m*F+d*at,r[6]=g*A+y*D+m*H+d*j,r[10]=g*x+y*N+m*W+d*st,r[14]=g*T+y*G+m*J+d*rt,r[3]=E*M+R*P+v*F+S*at,r[7]=E*A+R*D+v*H+S*j,r[11]=E*x+R*N+v*W+S*st,r[15]=E*T+R*G+v*J+S*rt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],f=t[6],h=t[10],p=t[14],g=t[3],y=t[7],m=t[11],d=t[15],E=c*p-l*h,R=a*p-l*f,v=a*h-c*f,S=o*p-l*u,M=o*h-c*u,A=o*f-a*u;return e*(y*E-m*R+d*v)-n*(g*E-m*S+d*M)+s*(g*R-y*S+d*A)-r*(g*v-y*M+m*A)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],u=t[10];return e*(o*u-a*l)-n*(r*u-a*c)+s*(r*l-o*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=t[9],h=t[10],p=t[11],g=t[12],y=t[13],m=t[14],d=t[15],E=e*a-n*o,R=e*c-s*o,v=e*l-r*o,S=n*c-s*a,M=n*l-r*a,A=s*l-r*c,x=u*y-f*g,T=u*m-h*g,P=u*d-p*g,D=f*m-h*y,N=f*d-p*y,G=h*d-p*m,F=E*G-R*N+v*D+S*P-M*T+A*x;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/F;return t[0]=(a*G-c*N+l*D)*H,t[1]=(s*N-n*G-r*D)*H,t[2]=(y*A-m*M+d*S)*H,t[3]=(h*M-f*A-p*S)*H,t[4]=(c*P-o*G-l*T)*H,t[5]=(e*G-s*P+r*T)*H,t[6]=(m*v-g*A-d*R)*H,t[7]=(u*A-h*v+p*R)*H,t[8]=(o*N-a*P+l*x)*H,t[9]=(n*P-e*N-r*x)*H,t[10]=(g*M-y*v+d*E)*H,t[11]=(f*v-u*M-p*E)*H,t[12]=(a*T-o*D-c*x)*H,t[13]=(e*D-n*T+s*x)*H,t[14]=(y*R-g*S-m*E)*H,t[15]=(u*S-f*R+h*E)*H,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,f=a+a,h=r*l,p=r*u,g=r*f,y=o*u,m=o*f,d=a*f,E=c*l,R=c*u,v=c*f,S=n.x,M=n.y,A=n.z;return s[0]=(1-(y+d))*S,s[1]=(p+v)*S,s[2]=(g-R)*S,s[3]=0,s[4]=(p-v)*M,s[5]=(1-(h+d))*M,s[6]=(m+E)*M,s[7]=0,s[8]=(g+R)*A,s[9]=(m-E)*A,s[10]=(1-(h+y))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Qi.set(s[0],s[1],s[2]).length(),a=Qi.set(s[4],s[5],s[6]).length(),c=Qi.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Dn.copy(this);let l=1/o,u=1/a,f=1/c;return Dn.elements[0]*=l,Dn.elements[1]*=l,Dn.elements[2]*=l,Dn.elements[4]*=u,Dn.elements[5]*=u,Dn.elements[6]*=u,Dn.elements[8]*=f,Dn.elements[9]*=f,Dn.elements[10]*=f,e.setFromRotationMatrix(Dn),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,s,r,o,a=On,c=!1){let l=this.elements,u=2*r/(e-t),f=2*r/(n-s),h=(e+t)/(e-t),p=(n+s)/(n-s),g,y;if(c)g=r/(o-r),y=o*r/(o-r);else if(a===On)g=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===ps)g=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=On,c=!1){let l=this.elements,u=2/(e-t),f=2/(n-s),h=-(e+t)/(e-t),p=-(n+s)/(n-s),g,y;if(c)g=1/(o-r),y=o/(o-r);else if(a===On)g=-2/(o-r),y=-(o+r)/(o-r);else if(a===ps)g=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=f,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Vo.prototype.isMatrix4=!0;var te=Vo,Qi=new C,Dn=new te,of=new C(0,0,0),af=new C(1,1,1),fi=new C,Ir=new C,dn=new C,Nc=new te,Uc=new sn,Tn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],f=s[2],h=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-le(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-le(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(le(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Nc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Nc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Uc.setFromEuler(this),this.setFromQuaternion(Uc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Tn.DEFAULT_ORDER="XYZ";var Js=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},lf=0,Fc=new C,ts=new sn,Qn=new te,Lr=new C,Fs=new C,cf=new C,uf=new sn,Oc=new C(1,0,0),Bc=new C(0,1,0),zc=new C(0,0,1),Hc={type:"added"},hf={type:"removed"},es={type:"childadded",child:null},Qa={type:"childremoved",child:null},Qe=class i extends Xn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=yr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new C,e=new Tn,n=new sn,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new te},normalMatrix:{value:new ee}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Js,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ts.setFromAxisAngle(t,e),this.quaternion.multiply(ts),this}rotateOnWorldAxis(t,e){return ts.setFromAxisAngle(t,e),this.quaternion.premultiply(ts),this}rotateX(t){return this.rotateOnAxis(Oc,t)}rotateY(t){return this.rotateOnAxis(Bc,t)}rotateZ(t){return this.rotateOnAxis(zc,t)}translateOnAxis(t,e){return Fc.copy(t).applyQuaternion(this.quaternion),this.position.add(Fc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Oc,t)}translateY(t){return this.translateOnAxis(Bc,t)}translateZ(t){return this.translateOnAxis(zc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Lr.copy(t):Lr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(Fs,Lr,this.up):Qn.lookAt(Lr,Fs,this.up),this.quaternion.setFromRotationMatrix(Qn),s&&(Qn.extractRotation(s.matrixWorld),ts.setFromRotationMatrix(Qn),this.quaternion.premultiply(ts.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(jt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Hc),es.child=t,this.dispatchEvent(es),es.child=null):jt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(hf),Qa.child=t,this.dispatchEvent(Qa),Qa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Hc),es.child=t,this.dispatchEvent(es),es.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,t,cf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,uf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Qe.DEFAULT_UP=new C(0,1,0);Qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mn=class extends Qe{constructor(){super(),this.isGroup=!0,this.type="Group"}},ff={type:"move"},xs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,n),d=this._getHandJoint(l,y);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;l.inputState.pinching&&h>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ff)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new mn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},ku={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},Dr={h:0,s:0,l:0};function tl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var qt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ue.workingColorSpace){return this.r=t,this.g=e,this.b=n,ue.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ue.workingColorSpace){if(t=ef(t,1),e=le(e,0,1),n=le(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=tl(o,r,t+1/3),this.g=tl(o,r,t),this.b=tl(o,r,t-1/3)}return ue.colorSpaceToWorking(this,s),this}setStyle(t,e=Xe){function n(r){r!==void 0&&parseFloat(r)<1&&Zt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Zt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Xe){let n=ku[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=si(t.r),this.g=si(t.g),this.b=si(t.b),this}copyLinearToSRGB(t){return this.r=fs(t.r),this.g=fs(t.g),this.b=fs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xe){return ue.workingToColorSpace(Ke.copy(this),t),Math.round(le(Ke.r*255,0,255))*65536+Math.round(le(Ke.g*255,0,255))*256+Math.round(le(Ke.b*255,0,255))}getHexString(t=Xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.workingToColorSpace(Ke.copy(this),e);let n=Ke.r,s=Ke.g,r=Ke.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=ue.workingColorSpace){return ue.workingToColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=Xe){ue.workingToColorSpace(Ke.copy(this),t);let e=Ke.r,n=Ke.g,s=Ke.b;return t!==Xe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(di),this.setHSL(di.h+t,di.s+e,di.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(di),t.getHSL(Dr);let n=Za(di.h,Dr.h,e),s=Za(di.s,Dr.s,e),r=Za(di.l,Dr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ke=new qt;qt.NAMES=ku;var $s=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new qt(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Oi=class extends Qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Nn=new C,ti=new C,el=new C,ei=new C,ns=new C,is=new C,Vc=new C,nl=new C,il=new C,sl=new C,rl=new Te,ol=new Te,al=new Te,xi=class i{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Nn.subVectors(t,e),s.cross(Nn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Nn.subVectors(s,e),ti.subVectors(n,e),el.subVectors(t,e);let o=Nn.dot(Nn),a=Nn.dot(ti),c=Nn.dot(el),l=ti.dot(ti),u=ti.dot(el),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;let h=1/f,p=(l*c-a*u)*h,g=(o*u-a*c)*h;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,ei)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ei.x),c.addScaledVector(o,ei.y),c.addScaledVector(a,ei.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return rl.setScalar(0),ol.setScalar(0),al.setScalar(0),rl.fromBufferAttribute(t,e),ol.fromBufferAttribute(t,n),al.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(rl,r.x),o.addScaledVector(ol,r.y),o.addScaledVector(al,r.z),o}static isFrontFacing(t,e,n,s){return Nn.subVectors(n,e),ti.subVectors(t,e),Nn.cross(ti).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Nn.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Nn.cross(ti).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;ns.subVectors(s,n),is.subVectors(r,n),nl.subVectors(t,n);let c=ns.dot(nl),l=is.dot(nl);if(c<=0&&l<=0)return e.copy(n);il.subVectors(t,s);let u=ns.dot(il),f=is.dot(il);if(u>=0&&f<=u)return e.copy(s);let h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(ns,o);sl.subVectors(t,r);let p=ns.dot(sl),g=is.dot(sl);if(g>=0&&p<=g)return e.copy(r);let y=p*l-c*g;if(y<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(is,a);let m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return Vc.subVectors(r,s),a=(f-u)/(f-u+(p-g)),e.copy(s).addScaledVector(Vc,a);let d=1/(m+y+h);return o=y*d,a=h*d,e.copy(n).addScaledVector(ns,o).addScaledVector(is,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},qn=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Un):Un.fromBufferAttribute(r,o),Un.applyMatrix4(t.matrixWorld),this.expandByPoint(Un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Nr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Nr.copy(n.boundingBox)),Nr.applyMatrix4(t.matrixWorld),this.union(Nr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Un),Un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Os),Ur.subVectors(this.max,Os),ss.subVectors(t.a,Os),rs.subVectors(t.b,Os),os.subVectors(t.c,Os),pi.subVectors(rs,ss),mi.subVectors(os,rs),Li.subVectors(ss,os);let e=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Li.z,Li.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Li.z,0,-Li.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Li.y,Li.x,0];return!ll(e,ss,rs,os,Ur)||(e=[1,0,0,0,1,0,0,0,1],!ll(e,ss,rs,os,Ur))?!1:(Fr.crossVectors(pi,mi),e=[Fr.x,Fr.y,Fr.z],ll(e,ss,rs,os,Ur))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ni),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ni=[new C,new C,new C,new C,new C,new C,new C,new C],Un=new C,Nr=new qn,ss=new C,rs=new C,os=new C,pi=new C,mi=new C,Li=new C,Os=new C,Ur=new C,Fr=new C,Di=new C;function ll(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Di.fromArray(i,r);let a=s.x*Math.abs(Di.x)+s.y*Math.abs(Di.y)+s.z*Math.abs(Di.z),c=t.dot(Di),l=e.dot(Di),u=n.dot(Di);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var Oe=new C,Or=new Pt,df=0,be=class extends Xn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:df++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ou,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Or.fromBufferAttribute(this,e),Or.applyMatrix3(t),this.setXY(e,Or.x,Or.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix3(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Us(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=cn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Us(e,this.array)),e}setX(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Us(e,this.array)),e}setY(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Us(e,this.array)),e}setZ(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Us(e,this.array)),e}setW(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array),s=cn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array),s=cn(s,this.array),r=cn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Ks=class extends be{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var js=class extends be{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var de=class extends be{constructor(t,e,n){super(new Float32Array(t),e,n)}},pf=new qn,Bs=new C,cl=new C,ri=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):pf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bs.subVectors(t,this.center);let e=Bs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Bs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(cl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bs.copy(t.center).add(cl)),this.expandByPoint(Bs.copy(t.center).sub(cl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},mf=0,bn=new te,ul=new Qe,as=new C,pn=new qn,zs=new qn,Ve=new C,we=class i extends Xn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=yr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Qh(t)?js:Ks)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ee().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return bn.makeRotationFromQuaternion(t),this.applyMatrix4(bn),this}rotateX(t){return bn.makeRotationX(t),this.applyMatrix4(bn),this}rotateY(t){return bn.makeRotationY(t),this.applyMatrix4(bn),this}rotateZ(t){return bn.makeRotationZ(t),this.applyMatrix4(bn),this}translate(t,e,n){return bn.makeTranslation(t,e,n),this.applyMatrix4(bn),this}scale(t,e,n){return bn.makeScale(t,e,n),this.applyMatrix4(bn),this}lookAt(t){return ul.lookAt(t),ul.updateMatrix(),this.applyMatrix4(ul.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new de(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ri);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let n=this.boundingSphere.center;if(pn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];zs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ve.addVectors(pn.min,zs.min),pn.expandByPoint(Ve),Ve.addVectors(pn.max,zs.max),pn.expandByPoint(Ve)):(pn.expandByPoint(zs.min),pn.expandByPoint(zs.max))}pn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ve.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ve));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ve.fromBufferAttribute(a,l),c&&(as.fromBufferAttribute(t,l),Ve.add(as)),s=Math.max(s,n.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new be(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let x=0;x<n.count;x++)a[x]=new C,c[x]=new C;let l=new C,u=new C,f=new C,h=new Pt,p=new Pt,g=new Pt,y=new C,m=new C;function d(x,T,P){l.fromBufferAttribute(n,x),u.fromBufferAttribute(n,T),f.fromBufferAttribute(n,P),h.fromBufferAttribute(r,x),p.fromBufferAttribute(r,T),g.fromBufferAttribute(r,P),u.sub(l),f.sub(l),p.sub(h),g.sub(h);let D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(D),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(D),a[x].add(y),a[T].add(y),a[P].add(y),c[x].add(m),c[T].add(m),c[P].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let x=0,T=E.length;x<T;++x){let P=E[x],D=P.start,N=P.count;for(let G=D,F=D+N;G<F;G+=3)d(t.getX(G+0),t.getX(G+1),t.getX(G+2))}let R=new C,v=new C,S=new C,M=new C;function A(x){S.fromBufferAttribute(s,x),M.copy(S);let T=a[x];R.copy(T),R.sub(S.multiplyScalar(S.dot(T))).normalize(),v.crossVectors(M,T);let D=v.dot(c[x])<0?-1:1;o.setXYZW(x,R.x,R.y,R.z,D)}for(let x=0,T=E.length;x<T;++x){let P=E[x],D=P.start,N=P.count;for(let G=D,F=D+N;G<F;G+=3)A(t.getX(G+0)),A(t.getX(G+1)),A(t.getX(G+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);let s=new C,r=new C,o=new C,a=new C,c=new C,l=new C,u=new C,f=new C;if(t)for(let h=0,p=t.count;h<p;h+=3){let g=t.getX(h+0),y=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,p=e.count;h<p;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(a,c){let l=a.array,u=a.itemSize,f=a.normalized,h=new l.constructor(c.length*u),p=0,g=0;for(let y=0,m=c.length;y<m;y++){a.isInterleavedBufferAttribute?p=c[y]*a.data.stride+a.offset:p=c[y]*u;for(let d=0;d<u;d++)h[g++]=l[p++]}return new be(h,u,f)}if(this.index===null)return Zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,f=l.length;u<f;u++){let h=l[u],p=t(h,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){let p=l[f];u.push(p.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(e))}let r=t.morphAttributes;for(let l in r){let u=[],f=r[l];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,u=o.length;l<u;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var hl=new C,gf=new C,xf=new ee,Fn=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=hl.subVectors(n,e).cross(gf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(hl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||xf.getNormalMatrix(t),s=this.coplanarPoint(hl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},_f=0,oi=class extends Xn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=yr(),this.name="",this.type="Material",this.blending=bs,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pl,this.blendDst=Il,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=to,this.stencilZFail=to,this.stencilZPass=to,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Zt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new qt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Fn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Pt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Pt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ii=new C,fl=new C,Br=new C,zr=new C,Qs=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ii)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ii.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ii.copy(this.origin).addScaledVector(this.direction,e),ii.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){fl.copy(t).add(e).multiplyScalar(.5),Br.copy(e).sub(t).normalize(),zr.copy(this.origin).sub(fl);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Br),a=zr.dot(this.direction),c=-zr.dot(Br),l=zr.lengthSq(),u=Math.abs(1-o*o),f,h,p,g;if(u>0)if(f=o*c-a,h=o*a-c,g=r*u,f>=0)if(h>=-g)if(h<=g){let y=1/u;f*=y,h*=y,p=f*(f+o*h+2*a)+h*(o*f+h+2*c)+l}else h=r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*c)+l;else h=-r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*c)+l;else h<=-g?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-c),r),p=-f*f+h*(h+2*c)+l):h<=g?(f=0,h=Math.min(Math.max(-r,-c),r),p=h*(h+2*c)+l):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-c),r),p=-f*f+h*(h+2*c)+l);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(fl).addScaledVector(Br,h),p}intersectSphere(t,e){if(t.radius<0)return null;ii.subVectors(t.center,this.origin);let n=ii.dot(this.direction),s=ii.dot(ii)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-h.z)*f,c=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,c=(t.min.z-h.z)*f),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ii)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,u=a.z,f=t.x-o.x,h=t.y-o.y,p=t.z-o.z,g=e.x-o.x,y=e.y-o.y,m=e.z-o.z,d=n.x-o.x,E=n.y-o.y,R=n.z-o.z,v=Math.abs(c),S=Math.abs(l),M=Math.abs(u),A,x,T,P,D,N,G,F,H,W,J,at;if(v>=S&&v>=M?(T=c,N=f,H=g,at=d,c>=0?(A=l,x=u,P=h,D=p,G=y,F=m,W=E,J=R):(A=u,x=l,P=p,D=h,G=m,F=y,W=R,J=E)):S>=M?(T=l,N=h,H=y,at=E,l>=0?(A=u,x=c,P=p,D=f,G=m,F=g,W=R,J=d):(A=c,x=u,P=f,D=p,G=g,F=m,W=d,J=R)):(T=u,N=p,H=m,at=R,u>=0?(A=c,x=l,P=f,D=h,G=g,F=y,W=d,J=E):(A=l,x=c,P=h,D=f,G=y,F=g,W=E,J=d)),T===0)return null;let j=A/T,st=x/T,rt=1/T,Dt=P-j*N,Nt=D-st*N,ne=G-j*H,Jt=F-st*H,$t=W-j*at,Q=J-st*at,nt=$t*Jt-Q*ne,St=Dt*Q-Nt*$t,Ut=ne*Nt-Jt*Dt;if(s){if(nt<0||St<0||Ut<0)return null}else if((nt<0||St<0||Ut<0)&&(nt>0||St>0||Ut>0))return null;let lt=nt+St+Ut;if(lt===0)return null;let I=rt*(nt*N+St*H+Ut*at);return(lt>0?I<0:I>0)?null:this.at(I/lt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},tr=class extends oi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=Ll,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},kc=new te,Ni=new Qs,Hr=new ri,Gc=new C,Vr=new C,kr=new C,Gr=new C,dl=new C,Wr=new C,Wc=new C,Xr=new C,_e=class extends Qe{constructor(t=new we,e=new tr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Wr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],f=r[c];u!==0&&(dl.fromBufferAttribute(f,t),o?Wr.addScaledVector(dl,u):Wr.addScaledVector(dl.sub(e),u))}e.add(Wr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere),Hr.applyMatrix4(r),Ni.copy(t.ray).recast(t.near),!(Hr.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(Hr,Gc)===null||Ni.origin.distanceToSquared(Gc)>(t.far-t.near)**2))&&(kc.copy(r).invert(),Ni.copy(t.ray).applyMatrix4(kc),!(n.boundingBox!==null&&Ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ni)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=h.length;g<y;g++){let m=h[g],d=o[m.materialIndex],E=Math.max(m.start,p.start),R=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=E,S=R;v<S;v+=3){let M=a.getX(v),A=a.getX(v+1),x=a.getX(v+2);s=qr(this,d,t,n,l,u,f,M,A,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=g,d=y;m<d;m+=3){let E=a.getX(m),R=a.getX(m+1),v=a.getX(m+2);s=qr(this,o,t,n,l,u,f,E,R,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,y=h.length;g<y;g++){let m=h[g],d=o[m.materialIndex],E=Math.max(m.start,p.start),R=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let v=E,S=R;v<S;v+=3){let M=v,A=v+1,x=v+2;s=qr(this,d,t,n,l,u,f,M,A,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(c.count,p.start+p.count);for(let m=g,d=y;m<d;m+=3){let E=m,R=m+1,v=m+2;s=qr(this,o,t,n,l,u,f,E,R,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function vf(i,t,e,n,s,r,o,a){let c;if(t.side===Ye?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===bi,a),c===null)return null;Xr.copy(a),Xr.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Xr);return l<e.near||l>e.far?null:{distance:l,point:Xr.clone(),object:i}}function qr(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Vr),i.getVertexPosition(c,kr),i.getVertexPosition(l,Gr);let u=vf(i,t,e,n,Vr,kr,Gr,Wc);if(u){let f=new C;xi.getBarycoord(Wc,Vr,kr,Gr,f),s&&(u.uv=xi.getInterpolatedAttribute(s,a,c,l,f,new Pt)),r&&(u.uv1=xi.getInterpolatedAttribute(r,a,c,l,f,new Pt)),o&&(u.normal=xi.getInterpolatedAttribute(o,a,c,l,f,new C),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:c,c:l,normal:new C,materialIndex:0};xi.getNormal(Vr,kr,Gr,h.normal),u.face=h,u.barycoord=f}return u}var Bi=class extends rn{constructor(t=null,e=1,n=1,s,r,o,a,c,l=ke,u=ke,f,h){super(null,o,a,c,l,u,s,r,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _s=class extends be{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ls=new te,Xc=new te,Yr=[],qc=new qn,yf=new te,Hs=new _e,Vs=new ri,_i=class extends _e{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new _s(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,yf)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new qn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ls),qc.copy(t.boundingBox).applyMatrix4(ls),this.boundingBox.union(qc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ri),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ls),Vs.copy(t.boundingSphere).applyMatrix4(ls),this.boundingSphere.union(Vs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Hs.geometry=this.geometry,Hs.material=this.material,Hs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vs.copy(this.boundingSphere),Vs.applyMatrix4(n),t.ray.intersectsSphere(Vs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ls),Xc.multiplyMatrices(n,ls),Hs.matrixWorld=Xc,Hs.raycast(t,Yr);for(let o=0,a=Yr.length;o<a;o++){let c=Yr[o];c.instanceId=r,c.object=this,e.push(c)}Yr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new _s(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Bi(new Float32Array(s*this.count),s,this.count,Zo,Cn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ui=new ri,Mf=new Pt(.5,.5),Zr=new C,vs=class{constructor(t=new Fn,e=new Fn,n=new Fn,s=new Fn,r=new Fn,o=new Fn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=On,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],f=r[5],h=r[6],p=r[7],g=r[8],y=r[9],m=r[10],d=r[11],E=r[12],R=r[13],v=r[14],S=r[15];if(s[0].setComponents(l-o,p-u,d-g,S-E).normalize(),s[1].setComponents(l+o,p+u,d+g,S+E).normalize(),s[2].setComponents(l+a,p+f,d+y,S+R).normalize(),s[3].setComponents(l-a,p-f,d-y,S-R).normalize(),n)s[4].setComponents(c,h,m,v).normalize(),s[5].setComponents(l-c,p-h,d-m,S-v).normalize();else if(s[4].setComponents(l-c,p-h,d-m,S-v).normalize(),e===On)s[5].setComponents(l+c,p+h,d+m,S+v).normalize();else if(e===ps)s[5].setComponents(c,h,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(t){Ui.center.set(0,0,0);let e=Mf.distanceTo(t.center);return Ui.radius=.7071067811865476+e,Ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Zr.x=s.normal.x>0?t.max.x:t.min.x,Zr.y=s.normal.y>0?t.max.y:t.min.y,Zr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Zr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var go=class extends oi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Yc=new te,bl=new Qs,Jr=new ri,$r=new C,zi=class extends Qe{constructor(t=new we,e=new go){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(s),Jr.radius+=r,t.ray.intersectsSphere(Jr)===!1)return;Yc.copy(s).invert(),bl.copy(t.ray).applyMatrix4(Yc);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,f=n.attributes.position;if(l!==null){let h=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=h,y=p;g<y;g++){let m=l.getX(g);$r.fromBufferAttribute(f,m),Zc($r,m,c,s,t,e,this)}}else{let h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=h,y=p;g<y;g++)$r.fromBufferAttribute(f,g),Zc($r,g,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Zc(i,t,e,n,s,r,o){let a=bl.distanceSqToPoint(i);if(a<e){let c=new C;bl.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var er=class extends rn{constructor(t=[],e=Ei,n,s,r,o,a,c,l,u){super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},nr=class extends rn{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Yn=class extends rn{constructor(t,e,n=zn,s,r,o,a=ke,c=ke,l,u=Wn,f=1){if(u!==Wn&&u!==Ti)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:f};super(h,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new gs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},xo=class extends Yn{constructor(t,e=zn,n=Ei,s,r,o=ke,a=ke,c,l=Wn){let u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,n,s,r,o,a,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ir=class extends rn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ge=class i extends we{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],f=[],h=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new de(l,3)),this.setAttribute("normal",new de(u,3)),this.setAttribute("uv",new de(f,2));function g(y,m,d,E,R,v,S,M,A,x,T){let P=v/A,D=S/x,N=v/2,G=S/2,F=M/2,H=A+1,W=x+1,J=0,at=0,j=new C;for(let st=0;st<W;st++){let rt=st*D-G;for(let Dt=0;Dt<H;Dt++){let Nt=Dt*P-N;j[y]=Nt*E,j[m]=rt*R,j[d]=F,l.push(j.x,j.y,j.z),j[y]=0,j[m]=0,j[d]=M>0?1:-1,u.push(j.x,j.y,j.z),f.push(Dt/A),f.push(1-st/x),J+=1}}for(let st=0;st<x;st++)for(let rt=0;rt<A;rt++){let Dt=h+rt+H*st,Nt=h+rt+H*(st+1),ne=h+(rt+1)+H*(st+1),Jt=h+(rt+1)+H*st;c.push(Dt,Nt,Jt),c.push(Nt,ne,Jt),at+=6}a.addGroup(p,at,T),p+=at,h+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var sr=class i extends we{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new C,u=new Pt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,h=3;f<=e;f++,h+=3){let p=n+f/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[h]/t+1)/2,u.y=(o[h+1]/t+1)/2,c.push(u.x,u.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new de(o,3)),this.setAttribute("normal",new de(a,3)),this.setAttribute("uv",new de(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},se=class i extends we{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],f=[],h=[],p=[],g=0,y=[],m=n/2,d=0;E(),o===!1&&(t>0&&R(!0),e>0&&R(!1)),this.setIndex(u),this.setAttribute("position",new de(f,3)),this.setAttribute("normal",new de(h,3)),this.setAttribute("uv",new de(p,2));function E(){let v=new C,S=new C,M=0,A=(e-t)/n;for(let x=0;x<=r;x++){let T=[],P=x/r,D=P*(e-t)+t;for(let N=0;N<=s;N++){let G=N/s,F=G*c+a,H=Math.sin(F),W=Math.cos(F);S.x=D*H,S.y=-P*n+m,S.z=D*W,f.push(S.x,S.y,S.z),v.set(H,A,W).normalize(),h.push(v.x,v.y,v.z),p.push(G,1-P),T.push(g++)}y.push(T)}for(let x=0;x<s;x++)for(let T=0;T<r;T++){let P=y[T][x],D=y[T+1][x],N=y[T+1][x+1],G=y[T][x+1];(t>0||T!==0)&&(u.push(P,D,G),M+=3),(e>0||T!==r-1)&&(u.push(D,N,G),M+=3)}l.addGroup(d,M,0),d+=M}function R(v){let S=g,M=new Pt,A=new C,x=0,T=v===!0?t:e,P=v===!0?1:-1;for(let N=1;N<=s;N++)f.push(0,m*P,0),h.push(0,P,0),p.push(.5,.5),g++;let D=g;for(let N=0;N<=s;N++){let F=N/s*c+a,H=Math.cos(F),W=Math.sin(F);A.x=T*W,A.y=m*P,A.z=T*H,f.push(A.x,A.y,A.z),h.push(0,P,0),M.x=H*.5+.5,M.y=W*.5*P+.5,p.push(M.x,M.y),g++}for(let N=0;N<s;N++){let G=S+N,F=D+N;v===!0?u.push(F,F+1,G):u.push(F+1,F,G),x+=3}l.addGroup(d,x,v===!0?1:2),d+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var wn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Zt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let u=n[s],h=n[s+1]-u,p=(o-u)/h;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new Pt:new C);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new C,s=[],r=[],o=[],a=new C,c=new te;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new C)}r[0]=new C,o[0]=new C;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),h<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(le(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(le(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},rr=class extends wn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Pt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=c-this.aX,p=l-this.aY;c=h*u-p*f+this.aX,l=h*f+p*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},_o=class extends rr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Jl(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,f){let h=(o-r)/l-(a-r)/(l+u)+(a-o)/u,p=(a-o)/u-(c-o)/(u+f)+(c-a)/f;h*=u,p*=u,s(o,a,h,p)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Jc=new C,$c=new C,pl=new Jl,ml=new Jl,gl=new Jl,gn=class extends wn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new C){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:($c.subVectors(s[0],s[1]).add(s[0]),l=$c);let f=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Jc.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Jc),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(f),p),y=Math.pow(f.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(u),p);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),pl.initNonuniformCatmullRom(l.x,f.x,h.x,u.x,g,y,m),ml.initNonuniformCatmullRom(l.y,f.y,h.y,u.y,g,y,m),gl.initNonuniformCatmullRom(l.z,f.z,h.z,u.z,g,y,m)}else this.curveType==="catmullrom"&&(pl.initCatmullRom(l.x,f.x,h.x,u.x,this.tension),ml.initCatmullRom(l.y,f.y,h.y,u.y,this.tension),gl.initCatmullRom(l.z,f.z,h.z,u.z,this.tension));return n.set(pl.calc(c),ml.calc(c),gl.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Kc(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function Sf(i,t){let e=1-i;return e*e*t}function bf(i,t){return 2*(1-i)*i*t}function Ef(i,t){return i*i*t}function ks(i,t,e,n){return Sf(i,t)+bf(i,e)+Ef(i,n)}function Tf(i,t){let e=1-i;return e*e*e*t}function wf(i,t){let e=1-i;return 3*e*e*i*t}function Af(i,t){return 3*(1-i)*i*i*t}function Rf(i,t){return i*i*i*t}function Gs(i,t,e,n,s){return Tf(i,t)+wf(i,e)+Af(i,n)+Rf(i,s)}var vo=class extends wn{constructor(t=new Pt,e=new Pt,n=new Pt,s=new Pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Pt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Gs(t,s.x,r.x,o.x,a.x),Gs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},yo=class extends wn{constructor(t=new C,e=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Gs(t,s.x,r.x,o.x,a.x),Gs(t,s.y,r.y,o.y,a.y),Gs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Mo=class extends wn{constructor(t=new Pt,e=new Pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Pt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},So=class extends wn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},bo=class extends wn{constructor(t=new Pt,e=new Pt,n=new Pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Pt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ks(t,s.x,r.x,o.x),ks(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},or=class extends wn{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ks(t,s.x,r.x,o.x),ks(t,s.y,r.y,o.y),ks(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Eo=class extends wn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Pt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(Kc(a,c.x,l.x,u.x,f.x),Kc(a,c.y,l.y,u.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Pt().fromArray(s))}return this}},Cf=Object.freeze({__proto__:null,ArcCurve:_o,CatmullRomCurve3:gn,CubicBezierCurve:vo,CubicBezierCurve3:yo,EllipseCurve:rr,LineCurve:Mo,LineCurve3:So,QuadraticBezierCurve:bo,QuadraticBezierCurve3:or,SplineCurve:Eo});var ar=class i extends we{constructor(t=[new Pt(0,-.5),new Pt(.5,0),new Pt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=le(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],u=1/e,f=new C,h=new Pt,p=new C,g=new C,y=new C,m=0,d=0;for(let E=0;E<=t.length-1;E++)switch(E){case 0:m=t[E+1].x-t[E].x,d=t[E+1].y-t[E].y,p.x=d*1,p.y=-m,p.z=d*0,y.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case t.length-1:c.push(y.x,y.y,y.z);break;default:m=t[E+1].x-t[E].x,d=t[E+1].y-t[E].y,p.x=d*1,p.y=-m,p.z=d*0,g.copy(p),p.x+=y.x,p.y+=y.y,p.z+=y.z,p.normalize(),c.push(p.x,p.y,p.z),y.copy(g)}for(let E=0;E<=e;E++){let R=n+E*u*s,v=Math.sin(R),S=Math.cos(R);for(let M=0;M<=t.length-1;M++){f.x=t[M].x*v,f.y=t[M].y,f.z=t[M].x*S,o.push(f.x,f.y,f.z),h.x=E/e,h.y=M/(t.length-1),a.push(h.x,h.y);let A=c[3*M+0]*v,x=c[3*M+1],T=c[3*M+0]*S;l.push(A,x,T)}}for(let E=0;E<e;E++)for(let R=0;R<t.length-1;R++){let v=R+E*t.length,S=v,M=v+t.length,A=v+t.length+1,x=v+1;r.push(S,M,x),r.push(A,x,M)}this.setIndex(r),this.setAttribute("position",new de(o,3)),this.setAttribute("uv",new de(a,2)),this.setAttribute("normal",new de(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var ai=class i extends we{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,f=t/a,h=e/c,p=[],g=[],y=[],m=[];for(let d=0;d<u;d++){let E=d*h-o;for(let R=0;R<l;R++){let v=R*f-r;g.push(v,-E,0),y.push(0,0,1),m.push(R/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let E=0;E<a;E++){let R=E+l*d,v=E+l*(d+1),S=E+1+l*(d+1),M=E+1+l*d;p.push(R,v,M),p.push(v,S,M)}this.setIndex(p),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(y,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var lr=class i extends we{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,u=[],f=new C,h=new C,p=[],g=[],y=[],m=[];for(let d=0;d<=n;d++){let E=[],R=d/n,v=o+R*a,S=t*Math.cos(v),M=Math.sqrt(t*t-S*S),A=0;d===0&&o===0?A=.5/e:d===n&&c===Math.PI&&(A=-.5/e);for(let x=0;x<=e;x++){let T=x/e,P=s+T*r;f.x=-M*Math.cos(P),f.y=S,f.z=M*Math.sin(P),g.push(f.x,f.y,f.z),h.copy(f).normalize(),y.push(h.x,h.y,h.z),m.push(T+A,1-R),E.push(l++)}u.push(E)}for(let d=0;d<n;d++)for(let E=0;E<e;E++){let R=u[d][E+1],v=u[d][E],S=u[d+1][E],M=u[d+1][E+1];(d!==0||o>0)&&p.push(R,v,M),(d!==n-1||c<Math.PI)&&p.push(v,S,M)}this.setIndex(p),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(y,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Bn=class i extends we{constructor(t=new or(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new C,c=new C,l=new Pt,u=new C,f=[],h=[],p=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new de(f,3)),this.setAttribute("normal",new de(h,3)),this.setAttribute("uv",new de(p,2));function y(){for(let R=0;R<e;R++)m(R);m(r===!1?e:0),E(),d()}function m(R){u=t.getPointAt(R/e,u);let v=o.normals[R],S=o.binormals[R];for(let M=0;M<=s;M++){let A=M/s*Math.PI*2,x=Math.sin(A),T=-Math.cos(A);c.x=T*v.x+x*S.x,c.y=T*v.y+x*S.y,c.z=T*v.z+x*S.z,c.normalize(),h.push(c.x,c.y,c.z),a.x=u.x+n*c.x,a.y=u.y+n*c.y,a.z=u.z+n*c.z,f.push(a.x,a.y,a.z)}}function d(){for(let R=1;R<=e;R++)for(let v=1;v<=s;v++){let S=(s+1)*(R-1)+(v-1),M=(s+1)*R+(v-1),A=(s+1)*R+v,x=(s+1)*(R-1)+v;g.push(S,M,x),g.push(M,A,x)}}function E(){for(let R=0;R<=e;R++)for(let v=0;v<=s;v++)l.x=R/e,l.y=v/s,p.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Cf[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Gi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(jc(s))s.isRenderTargetTexture?(Zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(jc(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function tn(i){let t={};for(let e=0;e<i.length;e++){let n=Gi(i[e]);for(let s in n)t[s]=n[s]}return t}function jc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Pf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function $l(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}var Gu={clone:Gi,merge:tn},If=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Le=class extends oi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=If,this.fragmentShader=Lf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gi(t.uniforms),this.uniformsGroups=Pf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new qt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Pt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new C().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Te().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ee().fromArray(s.value);break;case"m4":this.uniforms[n].value=new te().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ys=class extends Le{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},qe=class extends oi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ra,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Hi=class extends qe{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Pt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return le(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new qt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new qt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new qt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var To=class extends oi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ru,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},wo=class extends oi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function cs(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function xl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var vi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ao=class extends vi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yl,endingEnd:yl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ml:r=t,a=2*e-n;break;case Sl:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ml:o=t,c=2*n-e;break;case Sl:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),y=g*g,m=y*g,d=-h*m+2*h*y-h*g,E=(1+h)*m+(-1.5-2*h)*y+(-.5+h)*g+1,R=(-1-p)*m+(1.5+p)*y+.5*g,v=p*m-p*y;for(let S=0;S!==a;++S)r[S]=d*o[u+S]+E*o[l+S]+R*o[c+S]+v*o[f+S];return r}},Ro=class extends vi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=(n-e)/(s-e),f=1-u;for(let h=0;h!==a;++h)r[h]=o[l+h]*f+o[c+h]*u;return r}},Co=class extends vi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Po=class extends vi{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this.inTangents,f=this.outTangents;if(!u||!f){let g=(n-e)/(s-e),y=1-g;for(let m=0;m!==a;++m)r[m]=o[l+m]*y+o[c+m]*g;return r}let h=a*2,p=t-1;for(let g=0;g!==a;++g){let y=o[l+g],m=o[c+g],d=p*h+g*2,E=f[d],R=f[d+1],v=t*h+g*2,S=u[v],M=u[v+1],A=Nf(n,e,E,S,s);r[g]=Wu(A,y,R,M,m)}return r}};function Wu(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Df(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Nf(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=Wu(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let c=Df(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var xn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=cs(e,this.TimeBufferType),this.values=cs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:cs(t.times,Array),values:cs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),xl(t.settings)&&(n.settings={inTangents:cs(t.settings.inTangents,Array),outTangents:cs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Co(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ro(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ao(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Po(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ws:e=this.InterpolantFactoryMethodDiscrete;break;case uo:e=this.InterpolantFactoryMethodLinear;break;case Qr:e=this.InterpolantFactoryMethodSmooth;break;case vl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Zt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ws;case this.InterpolantFactoryMethodLinear:return uo;case this.InterpolantFactoryMethodSmooth:return Qr;case this.InterpolantFactoryMethodBezier:return vl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;xl(this.settings)&&(Qc(this.settings.inTangents,t),Qc(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(jt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(jt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){jt("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){jt("KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&tf(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){jt("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Qr,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],u=t[a+1];if(l!==u&&(a!==1||l!==t[0]))if(s)c=!0;else{let f=a*n,h=f-n,p=f+n;for(let g=0;g!==n;++g){let y=e[f+g];if(y!==e[h+g]||y!==e[p+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let f=a*n,h=o*n;for(let p=0;p!==n;++p)e[h+p]=e[f+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,xl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Qc(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}xn.prototype.ValueTypeName="";xn.prototype.TimeBufferType=Float32Array;xn.prototype.ValueBufferType=Float32Array;xn.prototype.DefaultInterpolation=uo;var yi=class extends xn{constructor(t,e,n){super(t,e,n)}};yi.prototype.ValueTypeName="bool";yi.prototype.ValueBufferType=Array;yi.prototype.DefaultInterpolation=Ws;yi.prototype.InterpolantFactoryMethodLinear=void 0;yi.prototype.InterpolantFactoryMethodSmooth=void 0;var Io=class extends xn{constructor(t,e,n,s){super(t,e,n,s)}};Io.prototype.ValueTypeName="color";var Lo=class extends xn{constructor(t,e,n,s){super(t,e,n,s)}};Lo.prototype.ValueTypeName="number";var Do=class extends vi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let u=l+a;l!==u;l+=4)sn.slerpFlat(r,0,o,l-a,o,l,c);return r}},cr=class extends xn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Do(this.times,this.values,this.getValueSize(),t)}};cr.prototype.ValueTypeName="quaternion";cr.prototype.InterpolantFactoryMethodSmooth=void 0;var Mi=class extends xn{constructor(t,e,n){super(t,e,n)}};Mi.prototype.ValueTypeName="string";Mi.prototype.ValueBufferType=Array;Mi.prototype.DefaultInterpolation=Ws;Mi.prototype.InterpolantFactoryMethodLinear=void 0;Mi.prototype.InterpolantFactoryMethodSmooth=void 0;var No=class extends xn{constructor(t,e,n,s){super(t,e,n,s)}};No.prototype.ValueTypeName="vector";var Uo=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){let f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=l.length;f<h;f+=2){let p=l[f],g=l[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Xu=new Uo,Fo=class{constructor(t){this.manager=t!==void 0?t:Xu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Fo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Oo=class extends Qe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var _l=new te,tu=new C,eu=new C,Bo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pt(512,512),this.mapType=un,this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vs,this._frameExtents=new Pt(1,1),this._viewportCount=1,this._viewports=[new Te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;tu.setFromMatrixPosition(t.matrixWorld),e.position.copy(tu),eu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(eu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){_l.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(_l,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===ps||t.reversedDepth?e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),e.multiply(_l)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Kr=new C,jr=new sn,Gn=new C,ur=class extends Qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=On,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Kr,jr,Gn),Gn.x===1&&Gn.y===1&&Gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Kr,jr,Gn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Kr,jr,Gn),Gn.x===1&&Gn.y===1&&Gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Kr,jr,Gn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},gi=new C,nu=new Pt,iu=new Pt,je=class extends ur{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ho*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ya*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ho*2*Math.atan(Math.tan(Ya*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(gi.x,gi.y).multiplyScalar(-t/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gi.x,gi.y).multiplyScalar(-t/gi.z)}getViewSize(t,e){return this.getViewBounds(t,nu,iu),e.subVectors(iu,nu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ya*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Si=class extends ur{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},El=class extends Bo{constructor(){super(new Si(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ms=class extends Oo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.target=new Qe,this.shadow=new El}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var us=-90,hs=1,zo=class extends Qe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new je(us,hs,t,e);s.layers=this.layers,this.add(s);let r=new je(us,hs,t,e);r.layers=this.layers,this.add(r);let o=new je(us,hs,t,e);o.layers=this.layers,this.add(o);let a=new je(us,hs,t,e);a.layers=this.layers,this.add(a);let c=new je(us,hs,t,e);c.layers=this.layers,this.add(c);let l=new je(us,hs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===On)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ps)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,h,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ho=class extends je{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Kl="\\[\\]\\.:\\/",Uf=new RegExp("["+Kl+"]","g"),jl="[^"+Kl+"]",Ff="[^"+Kl.replace("\\.","")+"]",Of=/((?:WC+[\/:])*)/.source.replace("WC",jl),Bf=/(WCOD+)?/.source.replace("WCOD",Ff),zf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",jl),Hf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",jl),Vf=new RegExp("^"+Of+Bf+zf+Hf+"$"),kf=["material","materials","bones","map"],Tl=class{constructor(t,e,n){let s=n||Ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ce=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Uf,"")}static parseTrackName(t){let e=Vf.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);kf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){jt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){jt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){jt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){jt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){jt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;jt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ce.Composite=Tl;Ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ce.prototype.GetterByBindingType=[Ce.prototype._getValue_direct,Ce.prototype._getValue_array,Ce.prototype._getValue_arrayElement,Ce.prototype._getValue_toArray];Ce.prototype.SetterByBindingTypeAndVersioning=[[Ce.prototype._setValue_direct,Ce.prototype._setValue_direct_setNeedsUpdate,Ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_array,Ce.prototype._setValue_array_setNeedsUpdate,Ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_arrayElement,Ce.prototype._setValue_arrayElement_setNeedsUpdate,Ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_fromArray,Ce.prototype._setValue_fromArray_setNeedsUpdate,Ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var zx=new Float32Array(1);var sc=class sc{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};sc.prototype.isMatrix2=!0;var wl=sc;function Ql(i,t,e,n){let s=Gf(n);switch(e){case Xl:return i*t;case Zo:return i*t/s.components*s.byteLength;case Jo:return i*t/s.components*s.byteLength;case wi:return i*t*2/s.components*s.byteLength;case $o:return i*t*2/s.components*s.byteLength;case ql:return i*t*3/s.components*s.byteLength;case Pn:return i*t*4/s.components*s.byteLength;case Ko:return i*t*4/s.components*s.byteLength;case pr:case mr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case gr:case xr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qo:case ea:return Math.max(i,16)*Math.max(t,8)/4;case jo:case ta:return Math.max(i,8)*Math.max(t,8)/2;case na:case ia:case ra:case oa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case sa:case _r:case aa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case la:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ca:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ua:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ha:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case fa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case da:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case pa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ma:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ga:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case xa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case _a:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case va:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ya:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ma:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Sa:case ba:case Ea:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ta:case wa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case vr:case Aa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Gf(i){switch(i){case un:case Vl:return{byteLength:1,components:1};case Es:case kl:case Ze:return{byteLength:2,components:1};case qo:case Yo:return{byteLength:2,components:4};case zn:case Xo:case Cn:return{byteLength:4,components:1};case Gl:case Wl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function dh(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function $f(i){let t=new WeakMap;function e(a,c){let l=a.array,u=a.usage,f=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){let u=c.array,f=c.updateRanges;if(i.bindBuffer(l,a),f.length===0)i.bufferSubData(l,0,u);else{f.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<f.length;p++){let g=f[h],y=f[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++h,f[h]=y)}f.length=h+1;for(let p=0,g=f.length;p<g;p++){let y=f[p];i.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Kf=`#ifdef USE_ALPHAHASH
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
} // validated`,ud=`#ifdef USE_IRIDESCENCE
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
#endif`,hd=`#ifdef USE_BUMPMAP
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
#endif`,up=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hp=`#if defined( USE_MORPHCOLORS )
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
}`,um=`uniform vec3 diffuse;
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
}`,hm=`#include <common>
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
}`,ae={alphahash_fragment:Kf,alphahash_pars_fragment:jf,alphamap_fragment:Qf,alphamap_pars_fragment:td,alphatest_fragment:ed,alphatest_pars_fragment:nd,aomap_fragment:id,aomap_pars_fragment:sd,batching_pars_vertex:rd,batching_vertex:od,begin_vertex:ad,beginnormal_vertex:ld,bsdfs:cd,iridescence_fragment:ud,bumpmap_pars_fragment:hd,clipping_planes_fragment:fd,clipping_planes_pars_fragment:dd,clipping_planes_pars_vertex:pd,clipping_planes_vertex:md,color_fragment:gd,color_pars_fragment:xd,color_pars_vertex:_d,color_vertex:vd,common:yd,cube_uv_reflection_fragment:Md,defaultnormal_vertex:Sd,displacementmap_pars_vertex:bd,displacementmap_vertex:Ed,emissivemap_fragment:Td,emissivemap_pars_fragment:wd,colorspace_fragment:Ad,colorspace_pars_fragment:Rd,envmap_fragment:Cd,envmap_common_pars_fragment:Pd,envmap_pars_fragment:Id,envmap_pars_vertex:Ld,envmap_physical_pars_fragment:Gd,envmap_vertex:Dd,fog_vertex:Nd,fog_pars_vertex:Ud,fog_fragment:Fd,fog_pars_fragment:Od,gradientmap_pars_fragment:Bd,lightmap_pars_fragment:zd,lights_lambert_fragment:Hd,lights_lambert_pars_fragment:Vd,lights_pars_begin:kd,lights_toon_fragment:Wd,lights_toon_pars_fragment:Xd,lights_phong_fragment:qd,lights_phong_pars_fragment:Yd,lights_physical_fragment:Zd,lights_physical_pars_fragment:Jd,lights_fragment_begin:$d,lights_fragment_maps:Kd,lights_fragment_end:jd,lightprobes_pars_fragment:Qd,logdepthbuf_fragment:tp,logdepthbuf_pars_fragment:ep,logdepthbuf_pars_vertex:np,logdepthbuf_vertex:ip,map_fragment:sp,map_pars_fragment:rp,map_particle_fragment:op,map_particle_pars_fragment:ap,metalnessmap_fragment:lp,metalnessmap_pars_fragment:cp,morphinstance_vertex:up,morphcolor_vertex:hp,morphnormal_vertex:fp,morphtarget_pars_vertex:dp,morphtarget_vertex:pp,normal_fragment_begin:mp,normal_fragment_maps:gp,normal_pars_fragment:xp,normal_pars_vertex:_p,normal_vertex:vp,normalmap_pars_fragment:yp,clearcoat_normal_fragment_begin:Mp,clearcoat_normal_fragment_maps:Sp,clearcoat_pars_fragment:bp,iridescence_pars_fragment:Ep,opaque_fragment:Tp,packing:wp,premultiplied_alpha_fragment:Ap,project_vertex:Rp,dithering_fragment:Cp,dithering_pars_fragment:Pp,roughnessmap_fragment:Ip,roughnessmap_pars_fragment:Lp,shadowmap_pars_fragment:Dp,shadowmap_pars_vertex:Np,shadowmap_vertex:Up,shadowmask_pars_fragment:Fp,skinbase_vertex:Op,skinning_pars_vertex:Bp,skinning_vertex:zp,skinnormal_vertex:Hp,specularmap_fragment:Vp,specularmap_pars_fragment:kp,tonemapping_fragment:Gp,tonemapping_pars_fragment:Wp,transmission_fragment:Xp,transmission_pars_fragment:qp,uv_pars_fragment:Yp,uv_pars_vertex:Zp,uv_vertex:Jp,worldpos_vertex:$p,background_vert:Kp,background_frag:jp,backgroundCube_vert:Qp,backgroundCube_frag:tm,cube_vert:em,cube_frag:nm,depth_vert:im,depth_frag:sm,distance_vert:rm,distance_frag:om,equirect_vert:am,equirect_frag:lm,linedashed_vert:cm,linedashed_frag:um,meshbasic_vert:hm,meshbasic_frag:fm,meshlambert_vert:dm,meshlambert_frag:pm,meshmatcap_vert:mm,meshmatcap_frag:gm,meshnormal_vert:xm,meshnormal_frag:_m,meshphong_vert:vm,meshphong_frag:ym,meshphysical_vert:Mm,meshphysical_frag:Sm,meshtoon_vert:bm,meshtoon_frag:Em,points_vert:Tm,points_frag:wm,shadow_vert:Am,shadow_frag:Rm,sprite_vert:Cm,sprite_frag:Pm},Rt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},envMapRotation:{value:new ee},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},Kn={basic:{uniforms:tn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:tn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new qt(0)},envMapIntensity:{value:1}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:tn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:tn([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:tn([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new qt(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:tn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:tn([Rt.points,Rt.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:tn([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:tn([Rt.common,Rt.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:tn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:tn([Rt.sprite,Rt.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ee}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distance:{uniforms:tn([Rt.common,Rt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distance_vert,fragmentShader:ae.distance_frag},shadow:{uniforms:tn([Rt.lights,Rt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};Kn.physical={uniforms:tn([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};var Ia={r:0,b:0,g:0},Im=new te,ph=new ee;ph.set(-1,0,0,0,1,0,0,0,1);function Lm(i,t,e,n,s,r){let o=new qt(0),a=s===!0?0:1,c,l,u=null,f=0,h=null;function p(E){let R=E.isScene===!0?E.background:null;if(R&&R.isTexture){let v=E.backgroundBlurriness>0;R=t.get(R,v)}return R}function g(E){let R=!1,v=p(E);v===null?m(o,a):v&&v.isColor&&(m(v,1),R=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||R)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(E,R){let v=p(R);v&&(v.isCubeTexture||v.mapping===fr)?(l===void 0&&(l=new _e(new Ge(1,1,1),new Le({name:"BackgroundCubeMaterial",uniforms:Gi(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,M,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Im.makeRotationFromEuler(R.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(ph),l.material.toneMapped=ue.getTransfer(v.colorSpace)!==ye,(u!==v||f!==v.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,h=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new _e(new ai(2,2),new Le({name:"BackgroundMaterial",uniforms:Gi(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=ue.getTransfer(v.colorSpace)!==ye,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,h=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function m(E,R){E.getRGB(Ia,$l(i)),e.buffers.color.setClear(Ia.r,Ia.g,Ia.b,R,r)}function d(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,R=1){o.set(E),a=R,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(E){a=E,m(o,a)},render:g,addToRenderList:y,dispose:d}}function Dm(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,o=!1;function a(D,N,G,F,H){let W=!1,J=f(D,F,G,N);r!==J&&(r=J,l(r.object)),W=p(D,F,G,H),W&&g(D,F,G,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,v(D,N,G,F),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function c(){return i.createVertexArray()}function l(D){return i.bindVertexArray(D)}function u(D){return i.deleteVertexArray(D)}function f(D,N,G,F){let H=F.wireframe===!0,W=n[N.id];W===void 0&&(W={},n[N.id]=W);let J=D.isInstancedMesh===!0?D.id:0,at=W[J];at===void 0&&(at={},W[J]=at);let j=at[G.id];j===void 0&&(j={},at[G.id]=j);let st=j[H];return st===void 0&&(st=h(c()),j[H]=st),st}function h(D){let N=[],G=[],F=[];for(let H=0;H<e;H++)N[H]=0,G[H]=0,F[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:G,attributeDivisors:F,object:D,attributes:{},index:null}}function p(D,N,G,F){let H=r.attributes,W=N.attributes,J=0,at=G.getAttributes();for(let j in at)if(at[j].location>=0){let rt=H[j],Dt=W[j];if(Dt===void 0&&(j==="instanceMatrix"&&D.instanceMatrix&&(Dt=D.instanceMatrix),j==="instanceColor"&&D.instanceColor&&(Dt=D.instanceColor)),rt===void 0||rt.attribute!==Dt||Dt&&rt.data!==Dt.data)return!0;J++}return r.attributesNum!==J||r.index!==F}function g(D,N,G,F){let H={},W=N.attributes,J=0,at=G.getAttributes();for(let j in at)if(at[j].location>=0){let rt=W[j];rt===void 0&&(j==="instanceMatrix"&&D.instanceMatrix&&(rt=D.instanceMatrix),j==="instanceColor"&&D.instanceColor&&(rt=D.instanceColor));let Dt={};Dt.attribute=rt,rt&&rt.data&&(Dt.data=rt.data),H[j]=Dt,J++}r.attributes=H,r.attributesNum=J,r.index=F}function y(){let D=r.newAttributes;for(let N=0,G=D.length;N<G;N++)D[N]=0}function m(D){d(D,0)}function d(D,N){let G=r.newAttributes,F=r.enabledAttributes,H=r.attributeDivisors;G[D]=1,F[D]===0&&(i.enableVertexAttribArray(D),F[D]=1),H[D]!==N&&(i.vertexAttribDivisor(D,N),H[D]=N)}function E(){let D=r.newAttributes,N=r.enabledAttributes;for(let G=0,F=N.length;G<F;G++)N[G]!==D[G]&&(i.disableVertexAttribArray(G),N[G]=0)}function R(D,N,G,F,H,W,J){J===!0?i.vertexAttribIPointer(D,N,G,H,W):i.vertexAttribPointer(D,N,G,F,H,W)}function v(D,N,G,F){y();let H=F.attributes,W=G.getAttributes(),J=N.defaultAttributeValues;for(let at in W){let j=W[at];if(j.location>=0){let st=H[at];if(st===void 0&&(at==="instanceMatrix"&&D.instanceMatrix&&(st=D.instanceMatrix),at==="instanceColor"&&D.instanceColor&&(st=D.instanceColor)),st!==void 0){let rt=st.normalized,Dt=st.itemSize,Nt=t.get(st);if(Nt===void 0)continue;let ne=Nt.buffer,Jt=Nt.type,$t=Nt.bytesPerElement,Q=Jt===i.INT||Jt===i.UNSIGNED_INT||st.gpuType===Xo;if(st.isInterleavedBufferAttribute){let nt=st.data,St=nt.stride,Ut=st.offset;if(nt.isInstancedInterleavedBuffer){for(let lt=0;lt<j.locationSize;lt++)d(j.location+lt,nt.meshPerAttribute);D.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let lt=0;lt<j.locationSize;lt++)m(j.location+lt);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let lt=0;lt<j.locationSize;lt++)R(j.location+lt,Dt/j.locationSize,Jt,rt,St*$t,(Ut+Dt/j.locationSize*lt)*$t,Q)}else{if(st.isInstancedBufferAttribute){for(let nt=0;nt<j.locationSize;nt++)d(j.location+nt,st.meshPerAttribute);D.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let nt=0;nt<j.locationSize;nt++)m(j.location+nt);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let nt=0;nt<j.locationSize;nt++)R(j.location+nt,Dt/j.locationSize,Jt,rt,Dt*$t,Dt/j.locationSize*nt*$t,Q)}}else if(J!==void 0){let rt=J[at];if(rt!==void 0)switch(rt.length){case 2:i.vertexAttrib2fv(j.location,rt);break;case 3:i.vertexAttrib3fv(j.location,rt);break;case 4:i.vertexAttrib4fv(j.location,rt);break;default:i.vertexAttrib1fv(j.location,rt)}}}}E()}function S(){T();for(let D in n){let N=n[D];for(let G in N){let F=N[G];for(let H in F){let W=F[H];for(let J in W)u(W[J].object),delete W[J];delete F[H]}}delete n[D]}}function M(D){if(n[D.id]===void 0)return;let N=n[D.id];for(let G in N){let F=N[G];for(let H in F){let W=F[H];for(let J in W)u(W[J].object),delete W[J];delete F[H]}}delete n[D.id]}function A(D){for(let N in n){let G=n[N];for(let F in G){let H=G[F];if(H[D.id]===void 0)continue;let W=H[D.id];for(let J in W)u(W[J].object),delete W[J];delete H[D.id]}}}function x(D){for(let N in n){let G=n[N],F=D.isInstancedMesh===!0?D.id:0,H=G[F];if(H!==void 0){for(let W in H){let J=H[W];for(let at in J)u(J[at].object),delete J[at];delete H[W]}delete G[F],Object.keys(G).length===0&&delete n[N]}}}function T(){P(),o=!0,r!==s&&(r=s,l(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:P,dispose:S,releaseStatesOfGeometry:M,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:m,disableUnusedAttributes:E}}function Nm(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function o(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),e.update(l,n,u))}function a(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let h=0;for(let p=0;p<u;p++)h+=l[p];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Um(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==Pn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let x=A===Ze&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==un&&A!==Cn&&!x&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=c(l);u!==l&&(Zt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:E,maxVaryings:R,maxFragmentUniforms:v,maxSamples:S,samples:M}}function Fm(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Fn,a=new ee,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let p=f.length!==0||h||n!==0||s;return s=h,n=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,p){let g=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,d=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{let E=r?0:n,R=E*4,v=d.clippingState||null;c.value=v,v=u(g,h,R,p);for(let S=0;S!==R;++S)v[S]=e[S];d.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,p,g){let y=f!==null?f.length:0,m=null;if(y!==0){if(m=c.value,g!==!0||m===null){let d=p+y*4,E=h.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<d)&&(m=new Float32Array(d));for(let R=0,v=p;R!==y;++R,v+=4)o.copy(f[R]).applyMatrix4(E,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}var As=4,Om=6,Bm=20,zm=256,Mr=new Si,qu=new qt,rc=null,oc=0,ac=0,lc=!1,Hm=new C,Wi=new C,Cs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=Hm}=r;rc=this._renderer.getRenderTarget(),oc=this._renderer.getActiveCubeFace(),ac=this._renderer.getActiveMipmapLevel(),lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ju(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(rc,oc,ac),this._renderer.xr.enabled=lc,t.scissorTest=!1,ws(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ei||t.mapping===ki?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),rc=this._renderer.getRenderTarget(),oc=this._renderer.getActiveCubeFace(),ac=this._renderer.getActiveMipmapLevel(),lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Pe,minFilter:Pe,generateMipmaps:!1,type:Ze,format:Pn,colorSpace:Xs,depthBuffer:!1},s=Yu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yu(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Vm(r)),this._blurMaterial=Gm(r,t,e),this._ggxMaterial=km(r,t,e)}return s}_compileMaterial(t){let e=new _e(new we,t);this._renderer.compile(e,Mr)}_sceneToCubeUV(t,e,n,s,r){let c=new je(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(qu),f.toneMapping=_n,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _e(new Ge,new tr({name:"PMREM.Background",side:Ye,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,d=!1,E=t.background;E?E.isColor&&(m.color.copy(E),t.background=null,d=!0):(m.color.copy(qu),d=!0);for(let R=0;R<6;R++){let v=R%3;v===0?(c.up.set(0,l[R],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[R],r.y,r.z)):v===1?(c.up.set(0,0,l[R]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[R],r.z)):(c.up.set(0,l[R],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[R]));let S=this._cubeSize;ws(s,v*S,R>2?S:0,S,S),f.setRenderTarget(s),d&&f.render(y,c),f.render(t,c)}f.toneMapping=p,f.autoClear=h,t.background=E}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ei||t.mapping===ki;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ju()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;ws(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Mr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),h=l*1.25,p=f*h,{_lodMax:g}=this,y=this._sizeLods[n],m=3*y*(n>g-As?n-g+As:0),d=4*(this._cubeSize-y);c.envMap.value=t.texture,c.roughness.value=p,c.mipInt.value=g-e,ws(r,m,d,3*y,2*y),s.setRenderTarget(r),s.render(a,Mr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,ws(t,m,d,3*y,2*y),s.setRenderTarget(t),s.render(a,Mr)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],f=3*u*(s>this._lodMax-As?s-this._lodMax+As:0),h=4*(this._cubeSize-u);ws(e,f,h,3*u,2*u),o.setRenderTarget(e),o.render(c,Mr)}};function Vm(i){let t=[],e=[],n=i,s=i-As+1+Om;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),c=-a,l=1+a,u=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,h=6,p=3,g=new Float32Array(p*h*f),y=new Float32Array(p*h*f);for(let d=0;d<f;d++){let E=d%3*2/3-1,R=d>2?0:-1,v=[E,R,0,E+2/3,R,0,E+2/3,R+1,0,E,R,0,E+2/3,R+1,0,E,R+1,0];g.set(v,p*h*d);for(let S=0;S<h;S++){let M=u[S*2]*2-1,A=u[S*2+1]*2-1;d===0?Wi.set(1,A,M):d===1?Wi.set(-M,1,-A):d===2?Wi.set(-M,A,1):d===3?Wi.set(-1,A,-M):d===4?Wi.set(-M,-1,A):Wi.set(M,A,-1),Wi.toArray(y,(d*h+S)*p)}}let m=new we;m.setAttribute("position",new be(g,p)),m.setAttribute("outputDirection",new be(y,p)),e.push(new _e(m,null)),n>As&&n--}return{lodMeshes:e,sizeLods:t}}function Yu(i,t,e){let n=new Be(i,t,e);return n.texture.mapping=fr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ws(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function km(i,t,e){return new Le({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:zm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ua(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Gm(i,t,e){return new Le({name:"SphericalGaussianBlur",defines:{SAMPLES:Bm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ua(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Zu(){return new Le({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ua(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Ju(){return new Le({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Ua(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Da=class extends Be{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new er(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ge(5,5,5),r=new Le({name:"CubemapFromEquirect",uniforms:Gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ye,blending:Zn});r.uniforms.tEquirect.value=e;let o=new _e(s,r),a=e.minFilter;return e.minFilter===Jn&&(e.minFilter=Pe),new zo(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function Wm(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,p=!1){return h==null?null:p?o(h):r(h)}function r(h){if(h&&h.isTexture){let p=h.mapping;if(p===ko||p===Go)if(t.has(h)){let g=t.get(h).texture;return a(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let y=new Da(g.height);return y.fromEquirectangularTexture(i,h),t.set(h,y),h.addEventListener("dispose",l),a(y.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let p=h.mapping,g=p===ko||p===Go,y=p===Ei||p===ki;if(g||y){let m=e.get(h),d=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return n===null&&(n=new Cs(i)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{let E=h.image;return g&&E&&E.height>0||y&&E&&c(E)?(n===null&&(n=new Cs(i)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,p){return p===ko?h.mapping=Ei:p===Go&&(h.mapping=ki),h}function c(h){let p=0,g=6;for(let y=0;y<g;y++)h[y]!==void 0&&p++;return p===g}function l(h){let p=h.target;p.removeEventListener("dispose",l);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function u(h){let p=h.target;p.removeEventListener("dispose",u);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function Xm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Fi("WebGLRenderer: "+n+" extension not supported."),s}}}function qm(i,t,e,n){let s={},r=new WeakMap;function o(f){let h=f.target;h.index!==null&&t.remove(h.index);for(let g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];let p=r.get(h);p&&(t.remove(p),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function c(f){let h=f.attributes;for(let p in h)t.update(h[p],i.ARRAY_BUFFER)}function l(f){let h=[],p=f.index,g=f.attributes.position,y=0;if(g===void 0)return;if(p!==null){let E=p.array;y=p.version;for(let R=0,v=E.length;R<v;R+=3){let S=E[R+0],M=E[R+1],A=E[R+2];h.push(S,M,M,A,A,S)}}else{let E=g.array;y=g.version;for(let R=0,v=E.length/3-1;R<v;R+=3){let S=R+0,M=R+1,A=R+2;h.push(S,M,M,A,A,S)}}let m=new(g.count>=65535?js:Ks)(h,1);m.version=y;let d=r.get(f);d&&t.remove(d),r.set(f,m)}function u(f){let h=r.get(f);if(h){let p=f.index;p!==null&&h.version<p.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function Ym(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,h){i.drawElements(n,h,r,f*o),e.update(h,n,1)}function l(f,h,p){p!==0&&(i.drawElementsInstanced(n,h,r,f*o,p),e.update(h,n,p))}function u(f,h,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,p);let y=0;for(let m=0;m<p;m++)y+=h[m];e.update(y,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Zm(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:jt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Jm(i,t,e){let n=new WeakMap,s=new Te;function r(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0,h=n.get(a);if(h===void 0||h.count!==f){let T=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],R=0;p===!0&&(R=1),g===!0&&(R=2),y===!0&&(R=3);let v=a.attributes.position.count*R,S=1;v>t.maxTextureSize&&(S=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let M=new Float32Array(v*S*4*f),A=new Zs(M,v,S,f);A.type=Cn,A.needsUpdate=!0;let x=R*4;for(let P=0;P<f;P++){let D=m[P],N=d[P],G=E[P],F=v*S*4*P;for(let H=0;H<D.count;H++){let W=H*x;p===!0&&(s.fromBufferAttribute(D,H),M[F+W+0]=s.x,M[F+W+1]=s.y,M[F+W+2]=s.z,M[F+W+3]=0),g===!0&&(s.fromBufferAttribute(N,H),M[F+W+4]=s.x,M[F+W+5]=s.y,M[F+W+6]=s.z,M[F+W+7]=0),y===!0&&(s.fromBufferAttribute(G,H),M[F+W+8]=s.x,M[F+W+9]=s.y,M[F+W+10]=s.z,M[F+W+11]=G.itemSize===4?s.w:1)}}h={count:f,texture:A,size:new Pt(v,S)},n.set(a,h),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let y=0;y<l.length;y++)p+=l[y];let g=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function $m(i,t,e,n,s){let r=new WeakMap;function o(l){let u=s.render.frame,f=l.geometry,h=t.get(l,f);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let p=l.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return h}function a(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var Km={[Dl]:"LINEAR_TONE_MAPPING",[Nl]:"REINHARD_TONE_MAPPING",[Ul]:"CINEON_TONE_MAPPING",[Fl]:"ACES_FILMIC_TONE_MAPPING",[Bl]:"AGX_TONE_MAPPING",[zl]:"NEUTRAL_TONE_MAPPING",[Ol]:"CUSTOM_TONE_MAPPING"};function jm(i,t,e,n,s,r){let o=new Be(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=new we;l.setAttribute("position",new de([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new de([0,2,0,0,2,0],2));let u=new ys({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new _e(l,u),h=new Si(-1,1,1,-1,0,1),p=null,g=null,y=!1,m,d=null,E=[],R=!1;this.setSize=function(v,S){o.setSize(v,S),a!==null&&a.setSize(v,S),c!==null&&c.setSize(v,S);for(let M=0;M<E.length;M++){let A=E[M];A.setSize&&A.setSize(v,S)}},this.setEffects=function(v){E=v,R=E.length>0&&E[0].isRenderPass===!0;let S=o.width,M=o.height;E.length>0&&a===null&&(a=new Be(S,M,{type:Ze,depthBuffer:!1,stencilBuffer:!1}),c=new Be(S,M,{type:Ze,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<E.length;A++){let x=E[A];x.setSize&&x.setSize(S,M)}},this.begin=function(v,S){if(y||v.toneMapping===_n&&E.length===0)return!1;if(d=S,S!==null){let M=S.width,A=S.height;(o.width!==M||o.height!==A)&&this.setSize(M,A)}return R===!1&&v.setRenderTarget(o),m=v.toneMapping,v.toneMapping=_n,!0},this.hasRenderPass=function(){return R},this.end=function(v,S){v.toneMapping=m,y=!0;let M=o,A=a;for(let x=0;x<E.length;x++){let T=E[x];T.enabled!==!1&&(T.render(v,A,M,S),T.needsSwap!==!1&&(M=A,A=A===a?c:a))}if(p!==v.outputColorSpace||g!==v.toneMapping){p=v.outputColorSpace,g=v.toneMapping,u.defines={},ue.getTransfer(p)===ye&&(u.defines.SRGB_TRANSFER="");let x=Km[g];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=M.texture,v.setRenderTarget(d),v.render(f,h),d=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var mh=new rn,hc=new Yn(1,1),gh=new Zs,xh=new mo,_h=new er,$u=[],Ku=[],ju=new Float32Array(16),Qu=new Float32Array(9),th=new Float32Array(4);function Ps(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=$u[s];if(r===void 0&&(r=new Float32Array(s),$u[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function He(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Fa(i,t){let e=Ku[t];e===void 0&&(e=new Int32Array(t),Ku[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Qm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function t0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2fv(this.addr,t),He(e,t)}}function e0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;i.uniform3fv(this.addr,t),He(e,t)}}function n0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4fv(this.addr,t),He(e,t)}}function i0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),He(e,t)}else{if(ze(e,n))return;th.set(n),i.uniformMatrix2fv(this.addr,!1,th),He(e,n)}}function s0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),He(e,t)}else{if(ze(e,n))return;Qu.set(n),i.uniformMatrix3fv(this.addr,!1,Qu),He(e,n)}}function r0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),He(e,t)}else{if(ze(e,n))return;ju.set(n),i.uniformMatrix4fv(this.addr,!1,ju),He(e,n)}}function o0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function a0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2iv(this.addr,t),He(e,t)}}function l0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3iv(this.addr,t),He(e,t)}}function c0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4iv(this.addr,t),He(e,t)}}function u0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function h0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2uiv(this.addr,t),He(e,t)}}function f0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3uiv(this.addr,t),He(e,t)}}function d0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4uiv(this.addr,t),He(e,t)}}function p0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(hc.compareFunction=e.isReversedDepthBuffer()?Pa:Ca,r=hc):r=mh,e.setTexture2D(t||r,s)}function m0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||xh,s)}function g0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||_h,s)}function x0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||gh,s)}function _0(i){switch(i){case 5126:return Qm;case 35664:return t0;case 35665:return e0;case 35666:return n0;case 35674:return i0;case 35675:return s0;case 35676:return r0;case 5124:case 35670:return o0;case 35667:case 35671:return a0;case 35668:case 35672:return l0;case 35669:case 35673:return c0;case 5125:return u0;case 36294:return h0;case 36295:return f0;case 36296:return d0;case 35678:case 36198:case 36298:case 36306:case 35682:return p0;case 35679:case 36299:case 36307:return m0;case 35680:case 36300:case 36308:case 36293:return g0;case 36289:case 36303:case 36311:case 36292:return x0}}function v0(i,t){i.uniform1fv(this.addr,t)}function y0(i,t){let e=Ps(t,this.size,2);i.uniform2fv(this.addr,e)}function M0(i,t){let e=Ps(t,this.size,3);i.uniform3fv(this.addr,e)}function S0(i,t){let e=Ps(t,this.size,4);i.uniform4fv(this.addr,e)}function b0(i,t){let e=Ps(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function E0(i,t){let e=Ps(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function T0(i,t){let e=Ps(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function w0(i,t){i.uniform1iv(this.addr,t)}function A0(i,t){i.uniform2iv(this.addr,t)}function R0(i,t){i.uniform3iv(this.addr,t)}function C0(i,t){i.uniform4iv(this.addr,t)}function P0(i,t){i.uniform1uiv(this.addr,t)}function I0(i,t){i.uniform2uiv(this.addr,t)}function L0(i,t){i.uniform3uiv(this.addr,t)}function D0(i,t){i.uniform4uiv(this.addr,t)}function N0(i,t,e){let n=this.cache,s=t.length,r=Fa(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),He(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=hc:o=mh;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function U0(i,t,e){let n=this.cache,s=t.length,r=Fa(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||xh,r[o])}function F0(i,t,e){let n=this.cache,s=t.length,r=Fa(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||_h,r[o])}function O0(i,t,e){let n=this.cache,s=t.length,r=Fa(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||gh,r[o])}function B0(i){switch(i){case 5126:return v0;case 35664:return y0;case 35665:return M0;case 35666:return S0;case 35674:return b0;case 35675:return E0;case 35676:return T0;case 5124:case 35670:return w0;case 35667:case 35671:return A0;case 35668:case 35672:return R0;case 35669:case 35673:return C0;case 5125:return P0;case 36294:return I0;case 36295:return L0;case 36296:return D0;case 35678:case 36198:case 36298:case 36306:case 35682:return N0;case 35679:case 36299:case 36307:return U0;case 35680:case 36300:case 36308:case 36293:return F0;case 36289:case 36303:case 36311:case 36292:return O0}}var fc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=_0(e.type)}},dc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=B0(e.type)}},pc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},cc=/(\w+)(\])?(\[|\.)?/g;function eh(i,t){i.seq.push(t),i.map[t.id]=t}function z0(i,t,e){let n=i.name,s=n.length;for(cc.lastIndex=0;;){let r=cc.exec(n),o=cc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){eh(e,l===void 0?new fc(a,i,t):new dc(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new pc(a),eh(e,f)),e=f}}}var Rs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);z0(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function nh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var H0=37297,V0=0;function k0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var ih=new ee;function G0(i){ue._getMatrix(ih,ue.workingColorSpace,i);let t=`mat3( ${ih.elements.map(e=>e.toFixed(4))} )`;switch(ue.getTransfer(i)){case qs:return[t,"LinearTransferOETF"];case ye:return[t,"sRGBTransferOETF"];default:return Zt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function sh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+k0(i.getShaderSource(t),a)}else return r}function W0(i,t){let e=G0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var X0={[Dl]:"Linear",[Nl]:"Reinhard",[Ul]:"Cineon",[Fl]:"ACESFilmic",[Bl]:"AgX",[zl]:"Neutral",[Ol]:"Custom"};function q0(i,t){let e=X0[t];return e===void 0?(Zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var La=new C;function Y0(){ue.getLuminanceCoefficients(La);let i=La.x.toFixed(4),t=La.y.toFixed(4),e=La.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Z0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(br).join(`
`)}function J0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function $0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function br(i){return i!==""}function rh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function oh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var K0=/^[ \t]*#include +<([\w\d./]+)>/gm;function mc(i){return i.replace(K0,Q0)}var j0=new Map;function Q0(i,t){let e=ae[t];if(e===void 0){let n=j0.get(t);if(n!==void 0)e=ae[n],Zt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return mc(e)}var tg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ah(i){return i.replace(tg,eg)}function eg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function lh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var ng={[hr]:"SHADOWMAP_TYPE_PCF",[Ss]:"SHADOWMAP_TYPE_VSM"};function ig(i){return ng[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var sg={[Ei]:"ENVMAP_TYPE_CUBE",[ki]:"ENVMAP_TYPE_CUBE",[fr]:"ENVMAP_TYPE_CUBE_UV"};function rg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":sg[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var og={[ki]:"ENVMAP_MODE_REFRACTION"};function ag(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":og[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var lg={[Ll]:"ENVMAP_BLENDING_MULTIPLY",[Tu]:"ENVMAP_BLENDING_MIX",[wu]:"ENVMAP_BLENDING_ADD"};function cg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":lg[i.combine]||"ENVMAP_BLENDING_NONE"}function ug(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function hg(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=ig(e),l=rg(e),u=ag(e),f=cg(e),h=ug(e),p=Z0(e),g=J0(r),y=s.createProgram(),m,d,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(br).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(br).join(`
`),d.length>0&&(d+=`
`)):(m=[lh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(br).join(`
`),d=[lh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==_n?"#define TONE_MAPPING":"",e.toneMapping!==_n?ae.tonemapping_pars_fragment:"",e.toneMapping!==_n?q0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,W0("linearToOutputTexel",e.outputColorSpace),Y0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(br).join(`
`)),o=mc(o),o=rh(o,e),o=oh(o,e),a=mc(a),a=rh(a,e),a=oh(a,e),o=ah(o),a=ah(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Yl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Yl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let R=E+m+o,v=E+d+a,S=nh(s,s.VERTEX_SHADER,R),M=nh(s,s.FRAGMENT_SHADER,v);s.attachShader(y,S),s.attachShader(y,M),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function A(D){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(y)||"",G=s.getShaderInfoLog(S)||"",F=s.getShaderInfoLog(M)||"",H=N.trim(),W=G.trim(),J=F.trim(),at=!0,j=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(at=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,S,M);else{let st=sh(s,S,"vertex"),rt=sh(s,M,"fragment");jt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+H+`
`+st+`
`+rt)}else H!==""?Zt("WebGLProgram: Program Info Log:",H):(W===""||J==="")&&(j=!1);j&&(D.diagnostics={runnable:at,programLog:H,vertexShader:{log:W,prefix:m},fragmentShader:{log:J,prefix:d}})}s.deleteShader(S),s.deleteShader(M),x=new Rs(s,y),T=$0(s,y)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(y,H0)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=V0++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=S,this.fragmentShader=M,this}var fg=0,gc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new xc(t),e.set(t,n)),n}},xc=class{constructor(t){this.id=fg++,this.code=t,this.usedTimes=0}};function dg(i){return i===wi||i===_r||i===vr}function pg(i,t,e,n,s,r){let o=new Js,a=new gc,c=new Set,l=[],u=new Map,f=n.logarithmicDepthBuffer,h=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function y(x,T,P,D,N,G){let F=D.fog,H=N.geometry,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,J=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,at=t.get(x.envMap||W,J),j=at&&at.mapping===fr?at.image.height:null,st=p[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Zt("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let rt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Dt=rt!==void 0?rt.length:0,Nt=0;H.morphAttributes.position!==void 0&&(Nt=1),H.morphAttributes.normal!==void 0&&(Nt=2),H.morphAttributes.color!==void 0&&(Nt=3);let ne,Jt,$t,Q;if(st){let ge=Kn[st];ne=ge.vertexShader,Jt=ge.fragmentShader}else{ne=x.vertexShader,Jt=x.fragmentShader;let ge=a.getVertexShaderStage(x),fe=a.getFragmentShaderStage(x);a.update(x,ge,fe),$t=ge.id,Q=fe.id}let nt=i.getRenderTarget(),St=i.state.buffers.depth.getReversed(),Ut=N.isInstancedMesh===!0,lt=N.isBatchedMesh===!0,I=!!x.map,O=!!x.matcap,K=!!at,tt=!!x.aoMap,et=!!x.lightMap,pt=!!x.bumpMap&&x.wireframe===!1,xt=!!x.normalMap,vt=!!x.displacementMap,ft=!!x.emissiveMap,_t=!!x.metalnessMap,At=!!x.roughnessMap,L=x.anisotropy>0,It=x.clearcoat>0,Mt=x.dispersion>0,w=x.retroreflectivity>0,_=x.iridescence>0,U=x.sheen>0,k=x.transmission>0,Y=L&&!!x.anisotropyMap,ht=It&&!!x.clearcoatMap,ot=It&&!!x.clearcoatNormalMap,V=It&&!!x.clearcoatRoughnessMap,Z=_&&!!x.iridescenceMap,ct=_&&!!x.iridescenceThicknessMap,bt=U&&!!x.sheenColorMap,mt=U&&!!x.sheenRoughnessMap,gt=!!x.specularMap,Tt=!!x.specularColorMap,Ft=!!x.specularIntensityMap,Ht=k&&!!x.transmissionMap,z=k&&!!x.thicknessMap,yt=!!x.gradientMap,it=!!x.alphaMap,Et=x.alphaTest>0,wt=!!x.alphaHash,ut=!!x.extensions,kt=_n;x.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(kt=i.toneMapping);let zt={shaderID:st,shaderType:x.type,shaderName:x.name,vertexShader:ne,fragmentShader:Jt,defines:x.defines,customVertexShaderID:$t,customFragmentShaderID:Q,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:lt,batchingColor:lt&&N._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&N.instanceColor!==null,instancingMorph:Ut&&N.morphTexture!==null,outputColorSpace:nt===null?i.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:ue.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:I,matcap:O,envMap:K,envMapMode:K&&at.mapping,envMapCubeUVHeight:j,aoMap:tt,lightMap:et,bumpMap:pt,normalMap:xt,displacementMap:vt,emissiveMap:ft,normalMapObjectSpace:xt&&x.normalMapType===Cu,normalMapTangentSpace:xt&&x.normalMapType===Ra,packedNormalMap:xt&&x.normalMapType===Ra&&dg(x.normalMap.format),metalnessMap:_t,roughnessMap:At,anisotropy:L,anisotropyMap:Y,clearcoat:It,clearcoatMap:ht,clearcoatNormalMap:ot,clearcoatRoughnessMap:V,dispersion:Mt,retroreflection:w,iridescence:_,iridescenceMap:Z,iridescenceThicknessMap:ct,sheen:U,sheenColorMap:bt,sheenRoughnessMap:mt,specularMap:gt,specularColorMap:Tt,specularIntensityMap:Ft,transmission:k,transmissionMap:Ht,thicknessMap:z,gradientMap:yt,opaque:x.transparent===!1&&x.blending===bs&&x.alphaToCoverage===!1,alphaMap:it,alphaTest:Et,alphaHash:wt,combine:x.combine,mapUv:I&&g(x.map.channel),aoMapUv:tt&&g(x.aoMap.channel),lightMapUv:et&&g(x.lightMap.channel),bumpMapUv:pt&&g(x.bumpMap.channel),normalMapUv:xt&&g(x.normalMap.channel),displacementMapUv:vt&&g(x.displacementMap.channel),emissiveMapUv:ft&&g(x.emissiveMap.channel),metalnessMapUv:_t&&g(x.metalnessMap.channel),roughnessMapUv:At&&g(x.roughnessMap.channel),anisotropyMapUv:Y&&g(x.anisotropyMap.channel),clearcoatMapUv:ht&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ot&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:mt&&g(x.sheenRoughnessMap.channel),specularMapUv:gt&&g(x.specularMap.channel),specularColorMapUv:Tt&&g(x.specularColorMap.channel),specularIntensityMapUv:Ft&&g(x.specularIntensityMap.channel),transmissionMapUv:Ht&&g(x.transmissionMap.channel),thicknessMapUv:z&&g(x.thicknessMap.channel),alphaMapUv:it&&g(x.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(xt||L),vertexNormals:!!H.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!H.attributes.uv&&(I||it),fog:!!F,useFog:x.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||H.attributes.normal===void 0&&xt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:St,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Dt,morphTextureStride:Nt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:kt,decodeVideoTexture:I&&x.map.isVideoTexture===!0&&ue.getTransfer(x.map.colorSpace)===ye,decodeVideoTextureEmissive:ft&&x.emissiveMap.isVideoTexture===!0&&ue.getTransfer(x.emissiveMap.colorSpace)===ye,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===An,flipSided:x.side===Ye,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ut&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ut&&x.extensions.multiDraw===!0||lt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return zt.vertexUv1s=c.has(1),zt.vertexUv2s=c.has(2),zt.vertexUv3s=c.has(3),c.clear(),zt}function m(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)T.push(P),T.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(d(T,x),E(T,x),T.push(i.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function d(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function E(x,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function R(x){let T=p[x.type],P;if(T){let D=Kn[T];P=Gu.clone(D.uniforms)}else P=x.uniforms;return P}function v(x,T){let P=u.get(T);return P!==void 0?++P.usedTimes:(P=new hg(i,T,x,s),l.push(P),u.set(T,P)),P}function S(x){if(--x.usedTimes===0){let T=l.indexOf(x);l[T]=l[l.length-1],l.pop(),u.delete(x.cacheKey),x.destroy()}}function M(x){a.remove(x)}function A(){a.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:R,acquireProgram:v,releaseProgram:S,releaseShaderCache:M,programs:l,dispose:A}}function mg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function gg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function ch(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function uh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function a(h,p,g,y,m,d){let E=i[t];return E===void 0?(E={id:h.id,object:h,geometry:p,material:g,materialVariant:o(h),groupOrder:y,renderOrder:h.renderOrder,z:m,group:d},i[t]=E):(E.id=h.id,E.object=h,E.geometry=p,E.material=g,E.materialVariant=o(h),E.groupOrder=y,E.renderOrder=h.renderOrder,E.z=m,E.group=d),t++,E}function c(h,p,g,y,m,d,E){E.reversedDepth===!0&&(m=-m);let R=a(h,p,g,y,m,d);g.transmission>0?n.push(R):g.transparent===!0?s.push(R):e.push(R)}function l(h,p,g,y,m,d){let E=a(h,p,g,y,m,d);g.transmission>0?n.unshift(E):g.transparent===!0?s.unshift(E):e.unshift(E)}function u(h,p){e.length>1&&e.sort(h||gg),n.length>1&&n.sort(p||ch),s.length>1&&s.sort(p||ch)}function f(){for(let h=t,p=i.length;h<p;h++){let g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:f,sort:u}}function xg(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new uh,i.set(n,[o])):s>=r.length?(o=new uh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function _g(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new C,color:new qt};break;case"SpotLight":e={position:new C,direction:new C,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function vg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var yg=0;function Mg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Sg(i){let t=new _g,e=vg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new C);let s=new C,r=new te,o=new te;function a(l){let u=0,f=0,h=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let p=0,g=0,y=0,m=0,d=0,E=0,R=0,v=0,S=0,M=0,A=0,x=0,T=0,P=0;l.sort(Mg);for(let N=0,G=l.length;N<G;N++){let F=l[N],H=F.color,W=F.intensity,J=F.distance,at=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===wi?at=F.shadow.map.texture:at=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)u+=H.r*W,f+=H.g*W,h+=H.b*W;else if(F.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(F.sh.coefficients[j],W);P++}else if(F.isSunLight){let j=t.get(F);if(j.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let st=F.shadow,rt=e.get(F);rt.shadowIntensity=st.intensity,rt.shadowBias=st.bias,rt.shadowNormalBias=st.normalBias,rt.shadowRadius=st.radius,rt.shadowMapSize.copy(st.mapSize).multiply(st.getFrameExtents()),n.sunShadow[g]=rt,n.sunShadowMap[g]=at;let Dt=st.getViewportCount();for(let Nt=0;Nt<Dt;Nt++)n.sunShadowMatrix[y+Nt]=st.getMatrix(Nt),n.sunShadowCascade[y+Nt]=st._cascadeData[Nt];y+=Dt,g++}n.sun[p]=j,p++}else if(F.isDirectionalLight){let j=t.get(F);if(j.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let st=F.shadow,rt=e.get(F);rt.shadowIntensity=st.intensity,rt.shadowBias=st.bias,rt.shadowNormalBias=st.normalBias,rt.shadowRadius=st.radius,rt.shadowMapSize=st.mapSize,n.directionalShadow[m]=rt,n.directionalShadowMap[m]=at,n.directionalShadowMatrix[m]=F.shadow.matrix,S++}n.directional[m]=j,m++}else if(F.isSpotLight){let j=t.get(F);j.position.setFromMatrixPosition(F.matrixWorld),j.color.copy(H).multiplyScalar(W),j.distance=J,j.coneCos=Math.cos(F.angle),j.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),j.decay=F.decay,n.spot[E]=j;let st=F.shadow;if(F.map&&(n.spotLightMap[x]=F.map,x++,st.updateMatrices(F),F.castShadow&&T++),n.spotLightMatrix[E]=st.matrix,F.castShadow){let rt=e.get(F);rt.shadowIntensity=st.intensity,rt.shadowBias=st.bias,rt.shadowNormalBias=st.normalBias,rt.shadowRadius=st.radius,rt.shadowMapSize=st.mapSize,n.spotShadow[E]=rt,n.spotShadowMap[E]=at,A++}E++}else if(F.isRectAreaLight){let j=t.get(F);j.color.copy(H).multiplyScalar(W),j.halfWidth.set(F.width*.5,0,0),j.halfHeight.set(0,F.height*.5,0),n.rectArea[R]=j,R++}else if(F.isPointLight){let j=t.get(F);if(j.color.copy(F.color).multiplyScalar(F.intensity),j.distance=F.distance,j.decay=F.decay,F.castShadow){let st=F.shadow,rt=e.get(F);rt.shadowIntensity=st.intensity,rt.shadowBias=st.bias,rt.shadowNormalBias=st.normalBias,rt.shadowRadius=st.radius,rt.shadowMapSize=st.mapSize,rt.shadowCameraNear=st.camera.near,rt.shadowCameraFar=st.camera.far,n.pointShadow[d]=rt,n.pointShadowMap[d]=at,n.pointShadowMatrix[d]=F.shadow.matrix,M++}n.point[d]=j,d++}else if(F.isHemisphereLight){let j=t.get(F);j.skyColor.copy(F.color).multiplyScalar(W),j.groundColor.copy(F.groundColor).multiplyScalar(W),n.hemi[v]=j,v++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Rt.LTC_FLOAT_1,n.rectAreaLTC2=Rt.LTC_FLOAT_2):(n.rectAreaLTC1=Rt.LTC_HALF_1,n.rectAreaLTC2=Rt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;let D=n.hash;(D.sunLength!==p||D.directionalLength!==m||D.pointLength!==d||D.spotLength!==E||D.rectAreaLength!==R||D.hemiLength!==v||D.numSunShadows!==g||D.numDirectionalShadows!==S||D.numPointShadows!==M||D.numSpotShadows!==A||D.numSpotMaps!==x||D.numLightProbes!==P)&&(n.sun.length=p,n.directional.length=m,n.spot.length=E,n.rectArea.length=R,n.point.length=d,n.hemi.length=v,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+x-T,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=P,D.sunLength=p,D.directionalLength=m,D.pointLength=d,D.spotLength=E,D.rectAreaLength=R,D.hemiLength=v,D.numSunShadows=g,D.numDirectionalShadows=S,D.numPointShadows=M,D.numSpotShadows=A,D.numSpotMaps=x,D.numLightProbes=P,n.version=yg++)}function c(l,u){let f=0,h=0,p=0,g=0,y=0,m=0,d=u.matrixWorldInverse;for(let E=0,R=l.length;E<R;E++){let v=l[E];if(v.isSunLight){let S=n.sun[f];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(d),f++}else if(v.isDirectionalLight){let S=n.directional[h];S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(d),h++}else if(v.isSpotLight){let S=n.spot[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(d),S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(d),g++}else if(v.isRectAreaLight){let S=n.rectArea[y];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(d),o.identity(),r.copy(v.matrixWorld),r.premultiply(d),o.extractRotation(r),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),y++}else if(v.isPointLight){let S=n.point[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(d),p++}else if(v.isHemisphereLight){let S=n.hemi[m];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(d),m++}}}return{setup:a,setupView:c,state:n}}function hh(i){let t=new Sg(i),e=[],n=[],s=[];function r(h){f.camera=h,e.length=0,n.length=0,s.length=0}function o(h){e.push(h)}function a(h){n.push(h)}function c(h){s.push(h)}function l(){t.setup(e)}function u(h){t.setupView(e,h)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function bg(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new hh(i),t.set(s,[a])):r>=o.length?(a=new hh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Eg=`void main() {
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
}`,wg=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],Ag=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],fh=new te,Sr=new C,uc=new C;function Rg(i,t,e){let n=new vs,s=new Pt,r=new Pt,o=new Te,a=new To,c=new wo,l={},u=e.maxTextureSize,f={[bi]:Ye,[Ye]:bi,[An]:An},h=new Le({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:Eg,fragmentShader:Tg}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let g=new we;g.setAttribute("position",new be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new _e(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hr;let d=this.type;this.render=function(M,A,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;this.type===ou&&(Zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=hr);let T=i.getRenderTarget(),P=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Zn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let G=d!==this.type;G&&A.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(H=>H.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,H=M.length;F<H;F++){let W=M[F],J=W.shadow;if(J===void 0){Zt("WebGLShadowMap:",W,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let at=J.getFrameExtents();s.multiply(at),r.copy(J.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/at.x),s.x=r.x*at.x,J.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/at.y),s.y=r.y*at.y,J.mapSize.y=r.y));let j=i.state.buffers.depth.getReversed();if(J.camera._reversedDepth=j,J.map===null||G===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===Ss){if(W.isPointLight){Zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new Be(s.x,s.y,{format:wi,type:Ze,minFilter:Pe,magFilter:Pe,generateMipmaps:!1}),J.map.texture.name=W.name+".shadowMap",J.map.depthTexture=new Yn(s.x,s.y,Cn),J.map.depthTexture.name=W.name+".shadowMapDepth",J.map.depthTexture.format=Wn,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=ke,J.map.depthTexture.magFilter=ke}else W.isPointLight?(J.map=new Da(s.x),J.map.depthTexture=new xo(s.x,zn)):(J.map=new Be(s.x,s.y),J.map.depthTexture=new Yn(s.x,s.y,zn)),J.map.depthTexture.name=W.name+".shadowMap",J.map.depthTexture.format=Wn,this.type===hr?(J.map.depthTexture.compareFunction=j?Pa:Ca,J.map.depthTexture.minFilter=Pe,J.map.depthTexture.magFilter=Pe):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=ke,J.map.depthTexture.magFilter=ke);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==s.x||J.map.height!==s.y)&&J.map.setSize(s.x,s.y);let st=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();W.isPointLight!==!0&&J.updateMatrices(W,x);for(let rt=0;rt<st;rt++){let Dt=J.getCamera(rt);if(W.isPointLight){let Nt=J.camera,ne=J.matrix,Jt=W.distance||Nt.far;Jt!==Nt.far&&(Nt.far=Jt,Nt.updateProjectionMatrix()),Sr.setFromMatrixPosition(W.matrixWorld),Nt.position.copy(Sr),uc.copy(Nt.position),uc.add(wg[rt]),Nt.up.copy(Ag[rt]),Nt.lookAt(uc),Nt.updateMatrixWorld(),ne.makeTranslation(-Sr.x,-Sr.y,-Sr.z),fh.multiplyMatrices(Nt.projectionMatrix,Nt.matrixWorldInverse),J._frustum.setFromProjectionMatrix(fh,Nt.coordinateSystem,Nt.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)i.setRenderTarget(J.map,rt),i.clear();else{rt===0&&(i.setRenderTarget(J.map),i.clear());let Nt=J.getViewport(rt);o.set(r.x*Nt.x,r.y*Nt.y,r.x*Nt.z,r.y*Nt.w),N.viewport(o)}n=J.getFrustum(rt),v(A,x,Dt,W,this.type)}J.isPointLightShadow!==!0&&this.type===Ss&&E(J,x),J.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(T,P,D)};function E(M,A){let x=t.update(y);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null?M.mapPass=new Be(s.x,s.y,{format:wi,type:Ze}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),h.uniforms.shadow_pass.value=M.map.depthTexture,h.uniforms.resolution.value.set(M.map.width,M.map.height),h.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(A,null,x,h,y,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value.set(M.map.width,M.map.height),p.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(A,null,x,p,y,null)}function R(M,A,x,T){let P=null,D=x.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(D!==void 0)P=D;else if(P=x.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let N=P.uuid,G=A.uuid,F=l[N];F===void 0&&(F={},l[N]=F);let H=F[G];H===void 0&&(H=P.clone(),F[G]=H,A.addEventListener("dispose",S)),P=H}if(P.visible=A.visible,P.wireframe=A.wireframe,T===Ss?P.side=A.shadowSide!==null?A.shadowSide:A.side:P.side=A.shadowSide!==null?A.shadowSide:f[A.side],P.alphaMap=A.alphaMap,P.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,P.map=A.map,P.clipShadows=A.clipShadows,P.clippingPlanes=A.clippingPlanes,P.clipIntersection=A.clipIntersection,P.displacementMap=A.displacementMap,P.displacementScale=A.displacementScale,P.displacementBias=A.displacementBias,P.wireframeLinewidth=A.wireframeLinewidth,P.linewidth=A.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let N=i.properties.get(P);N.light=x}return P}function v(M,A,x,T,P){if(M.visible===!1)return;if(M.layers.test(A.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&P===Ss)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,M.matrixWorld);let G=t.update(M),F=M.material;if(Array.isArray(F)){let H=G.groups;for(let W=0,J=H.length;W<J;W++){let at=H[W],j=F[at.materialIndex];if(j&&j.visible){let st=R(M,j,T,P);M.onBeforeShadow(i,M,A,x,G,st,at),i.renderBufferDirect(x,null,G,st,M,at),M.onAfterShadow(i,M,A,x,G,st,at)}}}else if(F.visible){let H=R(M,F,T,P);M.onBeforeShadow(i,M,A,x,G,H,null),i.renderBufferDirect(x,null,G,H,M,null),M.onAfterShadow(i,M,A,x,G,H,null)}}let N=M.children;for(let G=0,F=N.length;G<F;G++)v(N[G],A,x,T,P)}function S(M){M.target.removeEventListener("dispose",S);for(let x in l){let T=l[x],P=M.target.uuid;P in T&&(T[P].dispose(),delete T[P])}}}function Cg(i,t){function e(){let z=!1,yt=new Te,it=null,Et=new Te(0,0,0,0);return{setMask:function(wt){it!==wt&&!z&&(i.colorMask(wt,wt,wt,wt),it=wt)},setLocked:function(wt){z=wt},setClear:function(wt,ut,kt,zt,ge){ge===!0&&(wt*=zt,ut*=zt,kt*=zt),yt.set(wt,ut,kt,zt),Et.equals(yt)===!1&&(i.clearColor(wt,ut,kt,zt),Et.copy(yt))},reset:function(){z=!1,it=null,Et.set(-1,0,0,0)}}}function n(){let z=!1,yt=!1,it=null,Et=null,wt=null;return{setReversed:function(ut){if(yt!==ut){let kt=t.get("EXT_clip_control");ut?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT),yt=ut;let zt=wt;wt=null,this.setClear(zt)}},getReversed:function(){return yt},setTest:function(ut){ut?nt(i.DEPTH_TEST):St(i.DEPTH_TEST)},setMask:function(ut){it!==ut&&!z&&(i.depthMask(ut),it=ut)},setFunc:function(ut){if(yt&&(ut=Vu[ut]),Et!==ut){switch(ut){case eo:i.depthFunc(i.NEVER);break;case no:i.depthFunc(i.ALWAYS);break;case io:i.depthFunc(i.LESS);break;case ds:i.depthFunc(i.LEQUAL);break;case so:i.depthFunc(i.EQUAL);break;case ro:i.depthFunc(i.GEQUAL);break;case oo:i.depthFunc(i.GREATER);break;case ao:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Et=ut}},setLocked:function(ut){z=ut},setClear:function(ut){wt!==ut&&(wt=ut,yt&&(ut=1-ut),i.clearDepth(ut))},reset:function(){z=!1,it=null,Et=null,wt=null,yt=!1}}}function s(){let z=!1,yt=null,it=null,Et=null,wt=null,ut=null,kt=null,zt=null,ge=null;return{setTest:function(fe){z||(fe?nt(i.STENCIL_TEST):St(i.STENCIL_TEST))},setMask:function(fe){yt!==fe&&!z&&(i.stencilMask(fe),yt=fe)},setFunc:function(fe,ln,hn){(it!==fe||Et!==ln||wt!==hn)&&(i.stencilFunc(fe,ln,hn),it=fe,Et=ln,wt=hn)},setOp:function(fe,ln,hn){(ut!==fe||kt!==ln||zt!==hn)&&(i.stencilOp(fe,ln,hn),ut=fe,kt=ln,zt=hn)},setLocked:function(fe){z=fe},setClear:function(fe){ge!==fe&&(i.clearStencil(fe),ge=fe)},reset:function(){z=!1,yt=null,it=null,Et=null,wt=null,ut=null,kt=null,zt=null,ge=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,u={},f={},h={},p=new WeakMap,g=[],y=null,m=!1,d=null,E=null,R=null,v=null,S=null,M=null,A=null,x=new qt(0,0,0),T=0,P=!1,D=null,N=null,G=null,F=null,H=null,W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,at=0,j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(j)[1]),J=at>=1):j.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),J=at>=2);let st=null,rt={},Dt=i.getParameter(i.SCISSOR_BOX),Nt=i.getParameter(i.VIEWPORT),ne=new Te().fromArray(Dt),Jt=new Te().fromArray(Nt);function $t(z,yt,it,Et){let wt=new Uint8Array(4),ut=i.createTexture();i.bindTexture(z,ut),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let kt=0;kt<it;kt++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(yt,0,i.RGBA,1,1,Et,0,i.RGBA,i.UNSIGNED_BYTE,wt):i.texImage2D(yt+kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,wt);return ut}let Q={};Q[i.TEXTURE_2D]=$t(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=$t(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=$t(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=$t(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),nt(i.DEPTH_TEST),o.setFunc(ds),pt(!1),xt(Al),nt(i.CULL_FACE),tt(Zn);function nt(z){u[z]!==!0&&(i.enable(z),u[z]=!0)}function St(z){u[z]!==!1&&(i.disable(z),u[z]=!1)}function Ut(z,yt){return h[z]!==yt?(i.bindFramebuffer(z,yt),h[z]=yt,z===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=yt),z===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=yt),!0):!1}function lt(z,yt){let it=g,Et=!1;if(z){it=p.get(yt),it===void 0&&(it=[],p.set(yt,it));let wt=z.textures;if(it.length!==wt.length||it[0]!==i.COLOR_ATTACHMENT0){for(let ut=0,kt=wt.length;ut<kt;ut++)it[ut]=i.COLOR_ATTACHMENT0+ut;it.length=wt.length,Et=!0}}else it[0]!==i.BACK&&(it[0]=i.BACK,Et=!0);Et&&i.drawBuffers(it)}function I(z){return y!==z?(i.useProgram(z),y=z,!0):!1}let O={[Vi]:i.FUNC_ADD,[lu]:i.FUNC_SUBTRACT,[cu]:i.FUNC_REVERSE_SUBTRACT};O[uu]=i.MIN,O[hu]=i.MAX;let K={[fu]:i.ZERO,[du]:i.ONE,[pu]:i.SRC_COLOR,[Pl]:i.SRC_ALPHA,[yu]:i.SRC_ALPHA_SATURATE,[_u]:i.DST_COLOR,[gu]:i.DST_ALPHA,[mu]:i.ONE_MINUS_SRC_COLOR,[Il]:i.ONE_MINUS_SRC_ALPHA,[vu]:i.ONE_MINUS_DST_COLOR,[xu]:i.ONE_MINUS_DST_ALPHA,[Mu]:i.CONSTANT_COLOR,[Su]:i.ONE_MINUS_CONSTANT_COLOR,[bu]:i.CONSTANT_ALPHA,[Eu]:i.ONE_MINUS_CONSTANT_ALPHA};function tt(z,yt,it,Et,wt,ut,kt,zt,ge,fe){if(z===Zn){m===!0&&(St(i.BLEND),m=!1);return}if(m===!1&&(nt(i.BLEND),m=!0),z!==au){if(z!==d||fe!==P){if((E!==Vi||S!==Vi)&&(i.blendEquation(i.FUNC_ADD),E=Vi,S=Vi),fe)switch(z){case bs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rn:i.blendFunc(i.ONE,i.ONE);break;case Rl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Cl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:jt("WebGLState: Invalid blending: ",z);break}else switch(z){case bs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Rl:jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cl:jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:jt("WebGLState: Invalid blending: ",z);break}R=null,v=null,M=null,A=null,x.set(0,0,0),T=0,d=z,P=fe}return}wt=wt||yt,ut=ut||it,kt=kt||Et,(yt!==E||wt!==S)&&(i.blendEquationSeparate(O[yt],O[wt]),E=yt,S=wt),(it!==R||Et!==v||ut!==M||kt!==A)&&(i.blendFuncSeparate(K[it],K[Et],K[ut],K[kt]),R=it,v=Et,M=ut,A=kt),(zt.equals(x)===!1||ge!==T)&&(i.blendColor(zt.r,zt.g,zt.b,ge),x.copy(zt),T=ge),d=z,P=!1}function et(z,yt){z.side===An?St(i.CULL_FACE):nt(i.CULL_FACE);let it=z.side===Ye;yt&&(it=!it),pt(it),z.blending===bs&&z.transparent===!1?tt(Zn):tt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);let Et=z.stencilWrite;a.setTest(Et),Et&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),ft(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?nt(i.SAMPLE_ALPHA_TO_COVERAGE):St(i.SAMPLE_ALPHA_TO_COVERAGE)}function pt(z){D!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),D=z)}function xt(z){z!==su?(nt(i.CULL_FACE),z!==N&&(z===Al?i.cullFace(i.BACK):z===ru?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):St(i.CULL_FACE),N=z}function vt(z){z!==G&&(J&&i.lineWidth(z),G=z)}function ft(z,yt,it){z?(nt(i.POLYGON_OFFSET_FILL),(F!==yt||H!==it)&&(F=yt,H=it,o.getReversed()&&(yt=-yt),i.polygonOffset(yt,it))):St(i.POLYGON_OFFSET_FILL)}function _t(z){z?nt(i.SCISSOR_TEST):St(i.SCISSOR_TEST)}function At(z){z===void 0&&(z=i.TEXTURE0+W-1),st!==z&&(i.activeTexture(z),st=z)}function L(z,yt,it){it===void 0&&(st===null?it=i.TEXTURE0+W-1:it=st);let Et=rt[it];Et===void 0&&(Et={type:void 0,texture:void 0},rt[it]=Et),(Et.type!==z||Et.texture!==yt)&&(st!==it&&(i.activeTexture(it),st=it),i.bindTexture(z,yt||Q[z]),Et.type=z,Et.texture=yt)}function It(){let z=rt[st];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Mt(){try{i.compressedTexImage2D(...arguments)}catch(z){jt("WebGLState:",z)}}function w(){try{i.compressedTexImage3D(...arguments)}catch(z){jt("WebGLState:",z)}}function _(){try{i.texSubImage2D(...arguments)}catch(z){jt("WebGLState:",z)}}function U(){try{i.texSubImage3D(...arguments)}catch(z){jt("WebGLState:",z)}}function k(){try{i.compressedTexSubImage2D(...arguments)}catch(z){jt("WebGLState:",z)}}function Y(){try{i.compressedTexSubImage3D(...arguments)}catch(z){jt("WebGLState:",z)}}function ht(){try{i.texStorage2D(...arguments)}catch(z){jt("WebGLState:",z)}}function ot(){try{i.texStorage3D(...arguments)}catch(z){jt("WebGLState:",z)}}function V(){try{i.texImage2D(...arguments)}catch(z){jt("WebGLState:",z)}}function Z(){try{i.texImage3D(...arguments)}catch(z){jt("WebGLState:",z)}}function ct(z){return f[z]!==void 0?f[z]:i.getParameter(z)}function bt(z,yt){f[z]!==yt&&(i.pixelStorei(z,yt),f[z]=yt)}function mt(z){ne.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),ne.copy(z))}function gt(z){Jt.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),Jt.copy(z))}function Tt(z,yt){let it=l.get(yt);it===void 0&&(it=new WeakMap,l.set(yt,it));let Et=it.get(z);Et===void 0&&(Et=i.getUniformBlockIndex(yt,z.name),it.set(z,Et))}function Ft(z,yt){let Et=l.get(yt).get(z);c.get(yt)!==Et&&(i.uniformBlockBinding(yt,Et,z.__bindingPointIndex),c.set(yt,Et))}function Ht(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},st=null,rt={},h={},p=new WeakMap,g=[],y=null,m=!1,d=null,E=null,R=null,v=null,S=null,M=null,A=null,x=new qt(0,0,0),T=0,P=!1,D=null,N=null,G=null,F=null,H=null,ne.set(0,0,i.canvas.width,i.canvas.height),Jt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:nt,disable:St,bindFramebuffer:Ut,drawBuffers:lt,useProgram:I,setBlending:tt,setMaterial:et,setFlipSided:pt,setCullFace:xt,setLineWidth:vt,setPolygonOffset:ft,setScissorTest:_t,activeTexture:At,bindTexture:L,unbindTexture:It,compressedTexImage2D:Mt,compressedTexImage3D:w,texImage2D:V,texImage3D:Z,pixelStorei:bt,getParameter:ct,updateUBOMapping:Tt,uniformBlockBinding:Ft,texStorage2D:ht,texStorage3D:ot,texSubImage2D:_,texSubImage3D:U,compressedTexSubImage2D:k,compressedTexSubImage3D:Y,scissor:mt,viewport:gt,reset:Ht}}function Pg(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Pt,u=new WeakMap,f=new Set,h,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(w,_){return g?new OffscreenCanvas(w,_):Ys("canvas")}function m(w,_,U){let k=1,Y=Mt(w);if((Y.width>U||Y.height>U)&&(k=U/Math.max(Y.width,Y.height)),k<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let ht=Math.floor(k*Y.width),ot=Math.floor(k*Y.height);h===void 0&&(h=y(ht,ot));let V=_?y(ht,ot):h;return V.width=ht,V.height=ot,V.getContext("2d").drawImage(w,0,0,ht,ot),Zt("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+ht+"x"+ot+")."),V}else return"data"in w&&Zt("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),w;return w}function d(w){return w.generateMipmaps}function E(w){i.generateMipmap(w)}function R(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(w,_,U,k,Y,ht=!1){if(w!==null){if(i[w]!==void 0)return i[w];Zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ot;k&&(ot=t.get("EXT_texture_norm16"),ot||Zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let V=_;if(_===i.RED&&(U===i.FLOAT&&(V=i.R32F),U===i.HALF_FLOAT&&(V=i.R16F),U===i.UNSIGNED_BYTE&&(V=i.R8),U===i.UNSIGNED_SHORT&&ot&&(V=ot.R16_EXT),U===i.SHORT&&ot&&(V=ot.R16_SNORM_EXT)),_===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(V=i.R8UI),U===i.UNSIGNED_SHORT&&(V=i.R16UI),U===i.UNSIGNED_INT&&(V=i.R32UI),U===i.BYTE&&(V=i.R8I),U===i.SHORT&&(V=i.R16I),U===i.INT&&(V=i.R32I)),_===i.RG&&(U===i.FLOAT&&(V=i.RG32F),U===i.HALF_FLOAT&&(V=i.RG16F),U===i.UNSIGNED_BYTE&&(V=i.RG8),U===i.UNSIGNED_SHORT&&ot&&(V=ot.RG16_EXT),U===i.SHORT&&ot&&(V=ot.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(V=i.RG8UI),U===i.UNSIGNED_SHORT&&(V=i.RG16UI),U===i.UNSIGNED_INT&&(V=i.RG32UI),U===i.BYTE&&(V=i.RG8I),U===i.SHORT&&(V=i.RG16I),U===i.INT&&(V=i.RG32I)),_===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(V=i.RGB8UI),U===i.UNSIGNED_SHORT&&(V=i.RGB16UI),U===i.UNSIGNED_INT&&(V=i.RGB32UI),U===i.BYTE&&(V=i.RGB8I),U===i.SHORT&&(V=i.RGB16I),U===i.INT&&(V=i.RGB32I)),_===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(V=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(V=i.RGBA16UI),U===i.UNSIGNED_INT&&(V=i.RGBA32UI),U===i.BYTE&&(V=i.RGBA8I),U===i.SHORT&&(V=i.RGBA16I),U===i.INT&&(V=i.RGBA32I)),_===i.RGB&&(U===i.UNSIGNED_SHORT&&ot&&(V=ot.RGB16_EXT),U===i.SHORT&&ot&&(V=ot.RGB16_SNORM_EXT),U===i.UNSIGNED_INT_5_9_9_9_REV&&(V=i.RGB9_E5),U===i.UNSIGNED_INT_10F_11F_11F_REV&&(V=i.R11F_G11F_B10F)),_===i.RGBA){let Z=ht?qs:ue.getTransfer(Y);U===i.FLOAT&&(V=i.RGBA32F),U===i.HALF_FLOAT&&(V=i.RGBA16F),U===i.UNSIGNED_BYTE&&(V=Z===ye?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT&&ot&&(V=ot.RGBA16_EXT),U===i.SHORT&&ot&&(V=ot.RGBA16_SNORM_EXT),U===i.UNSIGNED_SHORT_4_4_4_4&&(V=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(V=i.RGB5_A1)}return(V===i.R16F||V===i.R32F||V===i.RG16F||V===i.RG32F||V===i.RGBA16F||V===i.RGBA32F)&&t.get("EXT_color_buffer_float"),V}function S(w,_){let U;return w?_===null||_===zn||_===Ts?U=i.DEPTH24_STENCIL8:_===Cn?U=i.DEPTH32F_STENCIL8:_===Es&&(U=i.DEPTH24_STENCIL8,Zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===zn||_===Ts?U=i.DEPTH_COMPONENT24:_===Cn?U=i.DEPTH_COMPONENT32F:_===Es&&(U=i.DEPTH_COMPONENT16),U}function M(w,_){return d(w)===!0||w.isFramebufferTexture&&w.minFilter!==ke&&w.minFilter!==Pe?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function A(w){let _=w.target;_.removeEventListener("dispose",A),T(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&f.delete(_)}function x(w){let _=w.target;_.removeEventListener("dispose",x),D(_)}function T(w){let _=n.get(w);if(_.__webglInit===void 0)return;let U=w.source,k=p.get(U);if(k){let Y=k[_.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&P(w),Object.keys(k).length===0&&p.delete(U)}n.remove(w)}function P(w){let _=n.get(w);i.deleteTexture(_.__webglTexture);let U=w.source,k=p.get(U);delete k[_.__cacheKey],o.memory.textures--}function D(w){let _=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(_.__webglFramebuffer[k]))for(let Y=0;Y<_.__webglFramebuffer[k].length;Y++)i.deleteFramebuffer(_.__webglFramebuffer[k][Y]);else i.deleteFramebuffer(_.__webglFramebuffer[k]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[k])}else{if(Array.isArray(_.__webglFramebuffer))for(let k=0;k<_.__webglFramebuffer.length;k++)i.deleteFramebuffer(_.__webglFramebuffer[k]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let k=0;k<_.__webglColorRenderbuffer.length;k++)_.__webglColorRenderbuffer[k]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[k]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let U=w.textures;for(let k=0,Y=U.length;k<Y;k++){let ht=n.get(U[k]);ht.__webglTexture&&(i.deleteTexture(ht.__webglTexture),o.memory.textures--),n.remove(U[k])}n.remove(w)}let N=0;function G(){N=0}function F(){return N}function H(w){N=w}function W(){let w=N;return w>=s.maxTextures&&Zt("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),N+=1,w}function J(w){let _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function at(w,_){let U=n.get(w);if(w.isVideoTexture&&L(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&U.__version!==w.version){let k=w.image;if(k===null)Zt("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)Zt("WebGLRenderer: Texture marked for update but image is incomplete");else{St(U,w,_);return}}else w.isExternalTexture&&(U.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+_)}function j(w,_){let U=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&U.__version!==w.version){St(U,w,_);return}else w.isExternalTexture&&(U.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+_)}function st(w,_){let U=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&U.__version!==w.version){St(U,w,_);return}e.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+_)}function rt(w,_){let U=n.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&U.__version!==w.version){Ut(U,w,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+_)}let Dt={[lo]:i.REPEAT,[En]:i.CLAMP_TO_EDGE,[co]:i.MIRRORED_REPEAT},Nt={[ke]:i.NEAREST,[Au]:i.NEAREST_MIPMAP_NEAREST,[dr]:i.NEAREST_MIPMAP_LINEAR,[Pe]:i.LINEAR,[Wo]:i.LINEAR_MIPMAP_NEAREST,[Jn]:i.LINEAR_MIPMAP_LINEAR},ne={[Iu]:i.NEVER,[Fu]:i.ALWAYS,[Lu]:i.LESS,[Ca]:i.LEQUAL,[Du]:i.EQUAL,[Pa]:i.GEQUAL,[Nu]:i.GREATER,[Uu]:i.NOTEQUAL};function Jt(w,_){if(_.type===Cn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Pe||_.magFilter===Wo||_.magFilter===dr||_.magFilter===Jn||_.minFilter===Pe||_.minFilter===Wo||_.minFilter===dr||_.minFilter===Jn)&&Zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,Dt[_.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,Dt[_.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,Dt[_.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,Nt[_.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,Nt[_.minFilter]),_.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,ne[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===ke||_.minFilter!==dr&&_.minFilter!==Jn||_.type===Cn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let U=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function $t(w,_){let U=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",A));let k=_.source,Y=p.get(k);Y===void 0&&(Y={},p.set(k,Y));let ht=J(_);if(ht!==w.__cacheKey){Y[ht]===void 0&&(Y[ht]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,U=!0),Y[ht].usedTimes++;let ot=Y[w.__cacheKey];ot!==void 0&&(Y[w.__cacheKey].usedTimes--,ot.usedTimes===0&&P(_)),w.__cacheKey=ht,w.__webglTexture=Y[ht].texture}return U}function Q(w,_,U){return Math.floor(Math.floor(w/U)/_)}function nt(w,_,U,k){let ht=w.updateRanges;if(ht.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,U,k,_.data);else{ht.sort((bt,mt)=>bt.start-mt.start);let ot=0;for(let bt=1;bt<ht.length;bt++){let mt=ht[ot],gt=ht[bt],Tt=mt.start+mt.count,Ft=Q(gt.start,_.width,4),Ht=Q(mt.start,_.width,4);gt.start<=Tt+1&&Ft===Ht&&Q(gt.start+gt.count-1,_.width,4)===Ft?mt.count=Math.max(mt.count,gt.start+gt.count-mt.start):(++ot,ht[ot]=gt)}ht.length=ot+1;let V=e.getParameter(i.UNPACK_ROW_LENGTH),Z=e.getParameter(i.UNPACK_SKIP_PIXELS),ct=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let bt=0,mt=ht.length;bt<mt;bt++){let gt=ht[bt],Tt=Math.floor(gt.start/4),Ft=Math.ceil(gt.count/4),Ht=Tt%_.width,z=Math.floor(Tt/_.width),yt=Ft,it=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Ht),e.pixelStorei(i.UNPACK_SKIP_ROWS,z),e.texSubImage2D(i.TEXTURE_2D,0,Ht,z,yt,it,U,k,_.data)}w.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,V),e.pixelStorei(i.UNPACK_SKIP_PIXELS,Z),e.pixelStorei(i.UNPACK_SKIP_ROWS,ct)}}function St(w,_,U){let k=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(k=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(k=i.TEXTURE_3D);let Y=$t(w,_),ht=_.source;e.bindTexture(k,w.__webglTexture,i.TEXTURE0+U);let ot=n.get(ht);if(ht.version!==ot.__version||Y===!0){if(e.activeTexture(i.TEXTURE0+U),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let it=ue.getPrimaries(ue.workingColorSpace),Et=_.colorSpace===Hn?null:ue.getPrimaries(_.colorSpace),wt=_.colorSpace===Hn||it===Et?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let Z=m(_.image,!1,s.maxTextureSize);Z=It(_,Z);let ct=r.convert(_.format,_.colorSpace),bt=r.convert(_.type),mt=v(_.internalFormat,ct,bt,_.normalized,_.colorSpace,_.isVideoTexture);Jt(k,_);let gt,Tt=_.mipmaps,Ft=_.isVideoTexture!==!0,Ht=ot.__version===void 0||Y===!0,z=ht.dataReady,yt=M(_,Z);if(_.isDepthTexture)mt=S(_.format===Ti,_.type),Ht&&(Ft?e.texStorage2D(i.TEXTURE_2D,1,mt,Z.width,Z.height):e.texImage2D(i.TEXTURE_2D,0,mt,Z.width,Z.height,0,ct,bt,null));else if(_.isDataTexture)if(Tt.length>0){Ft&&Ht&&e.texStorage2D(i.TEXTURE_2D,yt,mt,Tt[0].width,Tt[0].height);for(let it=0,Et=Tt.length;it<Et;it++)gt=Tt[it],Ft?z&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,gt.width,gt.height,ct,bt,gt.data):e.texImage2D(i.TEXTURE_2D,it,mt,gt.width,gt.height,0,ct,bt,gt.data);_.generateMipmaps=!1}else Ft?(Ht&&e.texStorage2D(i.TEXTURE_2D,yt,mt,Z.width,Z.height),z&&nt(_,Z,ct,bt)):e.texImage2D(i.TEXTURE_2D,0,mt,Z.width,Z.height,0,ct,bt,Z.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ft&&Ht&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,mt,Tt[0].width,Tt[0].height,Z.depth);for(let it=0,Et=Tt.length;it<Et;it++)if(gt=Tt[it],_.format!==Pn)if(ct!==null)if(Ft){if(z)if(_.layerUpdates.size>0){let wt=Ql(gt.width,gt.height,_.format,_.type);for(let ut of _.layerUpdates){let kt=gt.data.subarray(ut*wt/gt.data.BYTES_PER_ELEMENT,(ut+1)*wt/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,ut,gt.width,gt.height,1,ct,kt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,gt.width,gt.height,Z.depth,ct,gt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,it,mt,gt.width,gt.height,Z.depth,0,gt.data,0,0);else Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?z&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,gt.width,gt.height,Z.depth,ct,bt,gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,it,mt,gt.width,gt.height,Z.depth,0,ct,bt,gt.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Ft&&Ht&&e.texStorage2D(i.TEXTURE_2D,yt,mt,Tt[0].width,Tt[0].height);for(let it=0,Et=Tt.length;it<Et;it++)gt=Tt[it],_.format!==Pn?ct!==null?Ft?z&&e.compressedTexSubImage2D(i.TEXTURE_2D,it,0,0,gt.width,gt.height,ct,gt.data):e.compressedTexImage2D(i.TEXTURE_2D,it,mt,gt.width,gt.height,0,gt.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?z&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,gt.width,gt.height,ct,bt,gt.data):e.texImage2D(i.TEXTURE_2D,it,mt,gt.width,gt.height,0,ct,bt,gt.data)}else if(_.isDataArrayTexture)if(Ft){if(Ht&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,mt,Z.width,Z.height,Z.depth),z)if(_.layerUpdates.size>0){let it=Ql(Z.width,Z.height,_.format,_.type);for(let Et of _.layerUpdates){let wt=Z.data.subarray(Et*it/Z.data.BYTES_PER_ELEMENT,(Et+1)*it/Z.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Et,Z.width,Z.height,1,ct,bt,wt)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ct,bt,Z.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,mt,Z.width,Z.height,Z.depth,0,ct,bt,Z.data);else if(_.isData3DTexture)Ft?(Ht&&e.texStorage3D(i.TEXTURE_3D,yt,mt,Z.width,Z.height,Z.depth),z&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ct,bt,Z.data)):e.texImage3D(i.TEXTURE_3D,0,mt,Z.width,Z.height,Z.depth,0,ct,bt,Z.data);else if(_.isFramebufferTexture){if(Ht)if(Ft)e.texStorage2D(i.TEXTURE_2D,yt,mt,Z.width,Z.height);else{let it=Z.width,Et=Z.height;for(let wt=0;wt<yt;wt++)e.texImage2D(i.TEXTURE_2D,wt,mt,it,Et,0,ct,bt,null),it>>=1,Et>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let it=i.canvas;if(it.hasAttribute("layoutsubtree")||it.setAttribute("layoutsubtree","true"),Z.parentNode!==it){it.appendChild(Z),f.add(_),it.onpaint=Et=>{let wt=Et.changedElements;for(let ut of f)wt.includes(ut.image)&&(ut.needsUpdate=!0)},it.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Z);else{let wt=i.RGBA,ut=i.RGBA,kt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,wt,ut,kt,Z)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Tt.length>0){if(Ft&&Ht){let it=Mt(Tt[0]);e.texStorage2D(i.TEXTURE_2D,yt,mt,it.width,it.height)}for(let it=0,Et=Tt.length;it<Et;it++)gt=Tt[it],Ft?z&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,ct,bt,gt):e.texImage2D(i.TEXTURE_2D,it,mt,ct,bt,gt);_.generateMipmaps=!1}else if(Ft){if(Ht){let it=Mt(Z);e.texStorage2D(i.TEXTURE_2D,yt,mt,it.width,it.height)}z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct,bt,Z)}else e.texImage2D(i.TEXTURE_2D,0,mt,ct,bt,Z);d(_)&&E(k),ot.__version=ht.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function Ut(w,_,U){if(_.image.length!==6)return;let k=$t(w,_),Y=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+U);let ht=n.get(Y);if(Y.version!==ht.__version||k===!0){e.activeTexture(i.TEXTURE0+U);let ot=ue.getPrimaries(ue.workingColorSpace),V=_.colorSpace===Hn?null:ue.getPrimaries(_.colorSpace),Z=_.colorSpace===Hn||ot===V?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);let ct=_.isCompressedTexture||_.image[0].isCompressedTexture,bt=_.image[0]&&_.image[0].isDataTexture,mt=[];for(let ut=0;ut<6;ut++)!ct&&!bt?mt[ut]=m(_.image[ut],!0,s.maxCubemapSize):mt[ut]=bt?_.image[ut].image:_.image[ut],mt[ut]=It(_,mt[ut]);let gt=mt[0],Tt=r.convert(_.format,_.colorSpace),Ft=r.convert(_.type),Ht=v(_.internalFormat,Tt,Ft,_.normalized,_.colorSpace),z=_.isVideoTexture!==!0,yt=ht.__version===void 0||k===!0,it=Y.dataReady,Et=M(_,gt);Jt(i.TEXTURE_CUBE_MAP,_);let wt;if(ct){z&&yt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,Ht,gt.width,gt.height);for(let ut=0;ut<6;ut++){wt=mt[ut].mipmaps;for(let kt=0;kt<wt.length;kt++){let zt=wt[kt];_.format!==Pn?Tt!==null?z?it&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,kt,0,0,zt.width,zt.height,Tt,zt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,kt,Ht,zt.width,zt.height,0,zt.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,kt,0,0,zt.width,zt.height,Tt,Ft,zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,kt,Ht,zt.width,zt.height,0,Tt,Ft,zt.data)}}}else{if(wt=_.mipmaps,z&&yt){wt.length>0&&Et++;let ut=Mt(mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,Ht,ut.width,ut.height)}for(let ut=0;ut<6;ut++)if(bt){z?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,mt[ut].width,mt[ut].height,Tt,Ft,mt[ut].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,Ht,mt[ut].width,mt[ut].height,0,Tt,Ft,mt[ut].data);for(let kt=0;kt<wt.length;kt++){let ge=wt[kt].image[ut].image;z?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,kt+1,0,0,ge.width,ge.height,Tt,Ft,ge.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,kt+1,Ht,ge.width,ge.height,0,Tt,Ft,ge.data)}}else{z?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Tt,Ft,mt[ut]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,Ht,Tt,Ft,mt[ut]);for(let kt=0;kt<wt.length;kt++){let zt=wt[kt];z?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,kt+1,0,0,Tt,Ft,zt.image[ut]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,kt+1,Ht,Tt,Ft,zt.image[ut])}}}d(_)&&E(i.TEXTURE_CUBE_MAP),ht.__version=Y.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function lt(w,_,U,k,Y,ht){let ot=r.convert(U.format,U.colorSpace),V=r.convert(U.type),Z=v(U.internalFormat,ot,V,U.normalized,U.colorSpace),ct=n.get(_),bt=n.get(U);if(bt.__renderTarget=_,!ct.__hasExternalTextures){let mt=Math.max(1,_.width>>ht),gt=Math.max(1,_.height>>ht);Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?e.texImage3D(Y,ht,Z,mt,gt,_.depth,0,ot,V,null):e.texImage2D(Y,ht,Z,mt,gt,0,ot,V,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),At(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,k,Y,bt.__webglTexture,0,_t(_)):(Y===i.TEXTURE_2D||Y>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,k,Y,bt.__webglTexture,ht),e.bindFramebuffer(i.FRAMEBUFFER,null)}function I(w,_,U){if(i.bindRenderbuffer(i.RENDERBUFFER,w),_.depthBuffer){let k=_.depthTexture,Y=k&&k.isDepthTexture?k.type:null,ht=S(_.stencilBuffer,Y),ot=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;At(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t(_),ht,_.width,_.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t(_),ht,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ht,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,w)}else{let k=_.textures;for(let Y=0;Y<k.length;Y++){let ht=k[Y],ot=r.convert(ht.format,ht.colorSpace),V=r.convert(ht.type),Z=v(ht.internalFormat,ot,V,ht.normalized,ht.colorSpace);At(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t(_),Z,_.width,_.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t(_),Z,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Z,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function O(w,_,U){let k=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Y=n.get(_.depthTexture);if(Y.__renderTarget=_,(!Y.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),k){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,_.depthTexture.addEventListener("dispose",A)),Y.__webglTexture===void 0){Y.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Jt(i.TEXTURE_CUBE_MAP,_.depthTexture);let ct=r.convert(_.depthTexture.format),bt=r.convert(_.depthTexture.type),mt;_.depthTexture.format===Wn?mt=i.DEPTH_COMPONENT24:_.depthTexture.format===Ti&&(mt=i.DEPTH24_STENCIL8);for(let gt=0;gt<6;gt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,mt,_.width,_.height,0,ct,bt,null)}}else at(_.depthTexture,0);let ht=Y.__webglTexture,ot=_t(_),V=k?i.TEXTURE_CUBE_MAP_POSITIVE_X+U:i.TEXTURE_2D,Z=_.depthTexture.format===Ti?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Wn)At(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,V,ht,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,Z,V,ht,0);else if(_.depthTexture.format===Ti)At(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,V,ht,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,Z,V,ht,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function K(w){let _=n.get(w),U=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){let k=w.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),k){let Y=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,k.removeEventListener("dispose",Y)};k.addEventListener("dispose",Y),_.__depthDisposeCallback=Y}_.__boundDepthTexture=k}if(w.depthTexture&&!_.__autoAllocateDepthBuffer)if(U)for(let k=0;k<6;k++)O(_.__webglFramebuffer[k],w,k);else{let k=w.texture.mipmaps;k&&k.length>0?O(_.__webglFramebuffer[0],w,0):O(_.__webglFramebuffer,w,0)}else if(U){_.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[k]),_.__webglDepthbuffer[k]===void 0)_.__webglDepthbuffer[k]=i.createRenderbuffer(),I(_.__webglDepthbuffer[k],w,!1);else{let Y=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=_.__webglDepthbuffer[k];i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,ht)}}else{let k=w.texture.mipmaps;if(k&&k.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),I(_.__webglDepthbuffer,w,!1);else{let Y=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,ht)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function tt(w,_,U){let k=n.get(w);_!==void 0&&lt(k.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&K(w)}function et(w){let _=w.texture,U=n.get(w),k=n.get(_);w.addEventListener("dispose",x);let Y=w.textures,ht=w.isWebGLCubeRenderTarget===!0,ot=Y.length>1;if(ot||(k.__webglTexture===void 0&&(k.__webglTexture=i.createTexture()),k.__version=_.version,o.memory.textures++),ht){U.__webglFramebuffer=[];for(let V=0;V<6;V++)if(_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer[V]=[];for(let Z=0;Z<_.mipmaps.length;Z++)U.__webglFramebuffer[V][Z]=i.createFramebuffer()}else U.__webglFramebuffer[V]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer=[];for(let V=0;V<_.mipmaps.length;V++)U.__webglFramebuffer[V]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(ot)for(let V=0,Z=Y.length;V<Z;V++){let ct=n.get(Y[V]);ct.__webglTexture===void 0&&(ct.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&At(w)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let V=0;V<Y.length;V++){let Z=Y[V];U.__webglColorRenderbuffer[V]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[V]);let ct=r.convert(Z.format,Z.colorSpace),bt=r.convert(Z.type),mt=v(Z.internalFormat,ct,bt,Z.normalized,Z.colorSpace,w.isXRRenderTarget===!0),gt=_t(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,mt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+V,i.RENDERBUFFER,U.__webglColorRenderbuffer[V])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),I(U.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ht){e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture),Jt(i.TEXTURE_CUBE_MAP,_);for(let V=0;V<6;V++)if(_.mipmaps&&_.mipmaps.length>0)for(let Z=0;Z<_.mipmaps.length;Z++)lt(U.__webglFramebuffer[V][Z],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+V,Z);else lt(U.__webglFramebuffer[V],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+V,0);d(_)&&E(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ot){for(let V=0,Z=Y.length;V<Z;V++){let ct=Y[V],bt=n.get(ct),mt=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(mt=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,bt.__webglTexture),Jt(mt,ct),lt(U.__webglFramebuffer,w,ct,i.COLOR_ATTACHMENT0+V,mt,0),d(ct)&&E(mt)}e.unbindTexture()}else{let V=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(V=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(V,k.__webglTexture),Jt(V,_),_.mipmaps&&_.mipmaps.length>0)for(let Z=0;Z<_.mipmaps.length;Z++)lt(U.__webglFramebuffer[Z],w,_,i.COLOR_ATTACHMENT0,V,Z);else lt(U.__webglFramebuffer,w,_,i.COLOR_ATTACHMENT0,V,0);d(_)&&E(V),e.unbindTexture()}w.depthBuffer&&K(w)}function pt(w){let _=w.textures;for(let U=0,k=_.length;U<k;U++){let Y=_[U];if(d(Y)){let ht=R(w),ot=n.get(Y).__webglTexture;e.bindTexture(ht,ot),E(ht),e.unbindTexture()}}}let xt=[],vt=[];function ft(w){if(w.samples>0){if(At(w)===!1){let _=w.textures,U=w.width,k=w.height,Y=i.COLOR_BUFFER_BIT,ht=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=n.get(w),V=_.length>1;if(V)for(let ct=0;ct<_.length;ct++)e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ot.__webglMultisampledFramebuffer);let Z=w.texture.mipmaps;Z&&Z.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ot.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ot.__webglFramebuffer);for(let ct=0;ct<_.length;ct++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Y|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Y|=i.STENCIL_BUFFER_BIT)),V){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ot.__webglColorRenderbuffer[ct]);let bt=n.get(_[ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,bt,0)}i.blitFramebuffer(0,0,U,k,0,0,U,k,Y,i.NEAREST),c===!0&&(xt.length=0,vt.length=0,xt.push(i.COLOR_ATTACHMENT0+ct),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&(xt.push(ht),vt.push(ht),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,vt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),V)for(let ct=0;ct<_.length;ct++){e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,ot.__webglColorRenderbuffer[ct]);let bt=n.get(_[ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,bt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ot.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&c){let _=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function _t(w){return Math.min(s.maxSamples,w.samples)}function At(w){let _=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function L(w){let _=o.render.frame;u.get(w)!==_&&(u.set(w,_),w.update())}function It(w,_){let U=w.colorSpace,k=w.format,Y=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||U!==Xs&&U!==Hn&&(ue.getTransfer(U)===ye?(k!==Pn||Y!==un)&&Zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):jt("WebGLTextures: Unsupported texture color space:",U)),_}function Mt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=W,this.resetTextureUnits=G,this.getTextureUnits=F,this.setTextureUnits=H,this.setTexture2D=at,this.setTexture2DArray=j,this.setTexture3D=st,this.setTextureCube=rt,this.rebindTextures=tt,this.setupRenderTarget=et,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=K,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=At,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Ig(i,t){function e(n,s=Hn){let r,o=ue.getTransfer(s);if(n===un)return i.UNSIGNED_BYTE;if(n===qo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Yo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Gl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Wl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Vl)return i.BYTE;if(n===kl)return i.SHORT;if(n===Es)return i.UNSIGNED_SHORT;if(n===Xo)return i.INT;if(n===zn)return i.UNSIGNED_INT;if(n===Cn)return i.FLOAT;if(n===Ze)return i.HALF_FLOAT;if(n===Xl)return i.ALPHA;if(n===ql)return i.RGB;if(n===Pn)return i.RGBA;if(n===Wn)return i.DEPTH_COMPONENT;if(n===Ti)return i.DEPTH_STENCIL;if(n===Zo)return i.RED;if(n===Jo)return i.RED_INTEGER;if(n===wi)return i.RG;if(n===$o)return i.RG_INTEGER;if(n===Ko)return i.RGBA_INTEGER;if(n===pr||n===mr||n===gr||n===xr)if(o===ye)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===pr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===pr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===gr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===jo||n===Qo||n===ta||n===ea)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===jo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Qo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ta)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ea)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===na||n===ia||n===sa||n===ra||n===oa||n===_r||n===aa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===na||n===ia)return o===ye?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===sa)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ra)return r.COMPRESSED_R11_EAC;if(n===oa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===_r)return r.COMPRESSED_RG11_EAC;if(n===aa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===la||n===ca||n===ua||n===ha||n===fa||n===da||n===pa||n===ma||n===ga||n===xa||n===_a||n===va||n===ya||n===Ma)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===la)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ca)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ua)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ha)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fa)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===da)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===pa)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ma)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ga)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xa)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_a)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===va)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ya)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ma)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Sa||n===ba||n===Ea)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Sa)return o===ye?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ba)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ea)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ta||n===wa||n===vr||n===Aa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ta)return r.COMPRESSED_RED_RGTC1_EXT;if(n===wa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===vr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Aa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ts?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Lg=`
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

}`,_c=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ir(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Le({vertexShader:Lg,fragmentShader:Dg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new _e(new ai(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},vc=class extends Xn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,h=null,p=null,g=null,y=typeof XRWebGLBinding<"u",m=new _c,d={},E=e.getContextAttributes(),R=null,v=null,S=[],M=[],A=new Pt,x=null,T=null,P=new je;P.viewport=new Te;let D=new je;D.viewport=new Te;let N=[P,D],G=new Ho,F=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let nt=S[Q];return nt===void 0&&(nt=new xs,S[Q]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(Q){let nt=S[Q];return nt===void 0&&(nt=new xs,S[Q]=nt),nt.getGripSpace()},this.getHand=function(Q){let nt=S[Q];return nt===void 0&&(nt=new xs,S[Q]=nt),nt.getHandSpace()};function W(Q){let nt=M.indexOf(Q.inputSource);if(nt===-1)return;let St=S[nt];St!==void 0&&(St.update(Q.inputSource,Q.frame,l||o),St.dispatchEvent({type:Q.type,data:Q.inputSource}))}function J(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",at);for(let Q=0;Q<S.length;Q++){let nt=M[Q];nt!==null&&(M[Q]=null,S[Q].disconnect(nt))}F=null,H=null,m.reset();for(let Q in d)delete d[Q];if(t.setRenderTarget(R),p=null,h=null,f=null,s=null,v=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(A.width,A.height,!1),T!==null){let Q=T.camera;Q.fov=T.fov,Q.zoom=T.zoom,Q.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&Zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&Zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(R=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",J),s.addEventListener("inputsourceschange",at),E.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(A),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,Ut=null,lt=null;E.depth&&(lt=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,St=E.stencil?Ti:Wn,Ut=E.stencil?Ts:zn);let I={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(I),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),v=new Be(h.textureWidth,h.textureHeight,{format:Pn,type:un,depthTexture:new Yn(h.textureWidth,h.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let St={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,St),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Be(p.framebufferWidth,p.framebufferHeight,{format:Pn,type:un,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),$t.setContext(s),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function at(Q){for(let nt=0;nt<Q.removed.length;nt++){let St=Q.removed[nt],Ut=M.indexOf(St);Ut>=0&&(M[Ut]=null,S[Ut].disconnect(St))}for(let nt=0;nt<Q.added.length;nt++){let St=Q.added[nt],Ut=M.indexOf(St);if(Ut===-1){for(let I=0;I<S.length;I++)if(I>=M.length){M.push(St),Ut=I;break}else if(M[I]===null){M[I]=St,Ut=I;break}if(Ut===-1)break}let lt=S[Ut];lt&&lt.connect(St)}}let j=new C,st=new C;function rt(Q,nt,St){j.setFromMatrixPosition(nt.matrixWorld),st.setFromMatrixPosition(St.matrixWorld);let Ut=j.distanceTo(st),lt=nt.projectionMatrix.elements,I=St.projectionMatrix.elements,O=lt[14]/(lt[10]-1),K=lt[14]/(lt[10]+1),tt=(lt[9]+1)/lt[5],et=(lt[9]-1)/lt[5],pt=(lt[8]-1)/lt[0],xt=(I[8]+1)/I[0],vt=O*pt,ft=O*xt,_t=Ut/(-pt+xt),At=_t*-pt;if(nt.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(At),Q.translateZ(_t),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),lt[10]===-1)Q.projectionMatrix.copy(nt.projectionMatrix),Q.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{let L=O+_t,It=K+_t,Mt=vt-At,w=ft+(Ut-At),_=tt*K/It*L,U=et*K/It*L;Q.projectionMatrix.makePerspective(Mt,w,_,U,L,It),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Dt(Q,nt){nt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(nt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let nt=Q.near,St=Q.far;m.texture!==null&&(m.depthNear>0&&(nt=m.depthNear),m.depthFar>0&&(St=m.depthFar)),G.near=D.near=P.near=nt,G.far=D.far=P.far=St,(F!==G.near||H!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),F=G.near,H=G.far),G.layers.mask=Q.layers.mask|6,P.layers.mask=G.layers.mask&-5,D.layers.mask=G.layers.mask&-3;let Ut=Q.parent,lt=G.cameras;Dt(G,Ut);for(let I=0;I<lt.length;I++)Dt(lt[I],Ut);lt.length===2?rt(G,P,D):G.projectionMatrix.copy(P.projectionMatrix),T===null&&Q.isPerspectiveCamera&&(T={camera:Q,fov:Q.fov,zoom:Q.zoom}),Nt(Q,G,Ut)};function Nt(Q,nt,St){St===null?Q.matrix.copy(nt.matrixWorld):(Q.matrix.copy(St.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(nt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(nt.projectionMatrix),Q.projectionMatrixInverse.copy(nt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=ho*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(h===null&&p===null))return c},this.setFoveation=function(Q){c=Q,h!==null&&(h.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function(Q){return d[Q]};let ne=null;function Jt(Q,nt){if(u=nt.getViewerPose(l||o),g=nt,u!==null){let St=u.views;p!==null&&(t.setRenderTargetFramebuffer(v,p.framebuffer),t.setRenderTarget(v));let Ut=!1;St.length!==G.cameras.length&&(G.cameras.length=0,Ut=!0);for(let K=0;K<St.length;K++){let tt=St[K],et=null;if(p!==null)et=p.getViewport(tt);else{let xt=f.getViewSubImage(h,tt);et=xt.viewport,K===0&&(t.setRenderTargetTextures(v,xt.colorTexture,xt.depthStencilTexture),t.setRenderTarget(v))}let pt=N[K];pt===void 0&&(pt=new je,pt.layers.enable(K),pt.viewport=new Te,N[K]=pt),pt.matrix.fromArray(tt.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(tt.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(et.x,et.y,et.width,et.height),K===0&&(G.matrix.copy(pt.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Ut===!0&&G.cameras.push(pt)}let lt=s.enabledFeatures;if(lt&&lt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){f=n.getBinding();let K=f.getDepthInformation(St[0]);K&&K.isValid&&K.texture&&m.init(K,s.renderState)}if(lt&&lt.includes("camera-access")&&y){t.state.unbindTexture(),f=n.getBinding();for(let K=0;K<St.length;K++){let tt=St[K].camera;if(tt){let et=d[tt];et||(et=new ir,d[tt]=et);let pt=f.getCameraImage(tt);et.sourceTexture=pt}}}}for(let St=0;St<S.length;St++){let Ut=M[St],lt=S[St];Ut!==null&&lt!==void 0&&lt.update(Ut,nt,l||o)}ne&&ne(Q,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),g=null}let $t=new dh;$t.setAnimationLoop(Jt),this.setAnimationLoop=function(Q){ne=Q},this.dispose=function(){}}},Ng=new te,vh=new ee;vh.set(-1,0,0,0,1,0,0,0,1);function Ug(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,$l(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,E,R,v){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(m,d):d.isMeshLambertMaterial?(r(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(m,d),f(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,v)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),y(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,E,R):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ye&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ye&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let E=t.get(d),R=E.envMap,v=E.envMapRotation;R&&(m.envMap.value=R,m.envMapRotation.value.setFromMatrix4(Ng.makeRotationFromEuler(v)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(vh),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,E,R){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*E,m.scale.value=R*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,E){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ye&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function y(m,d){let E=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Fg(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,S){let M=S.program;n.uniformBlockBinding(v,M)}function l(v,S){let M=s[v.id];M===void 0&&(m(v),M=u(v),s[v.id]=M,v.addEventListener("dispose",E));let A=S.program;n.updateUBOMapping(v,A);let x=t.render.frame;r[v.id]!==x&&(h(v),r[v.id]=x)}function u(v){let S=f();v.__bindingPointIndex=S;let M=i.createBuffer(),A=v.__size,x=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,A,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,M),M}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return jt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){let S=s[v.id],M=v.uniforms,A=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let x=0,T=M.length;x<T;x++){let P=M[x];if(Array.isArray(P))for(let D=0,N=P.length;D<N;D++)p(P[D],x,D,A);else p(P,x,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(v,S,M,A){if(y(v,S,M,A)===!0){let x=v.__offset,T=v.value;if(Array.isArray(T)){let P=0;for(let D=0;D<T.length;D++){let N=T[D],G=d(N);g(N,v.__data,P),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(P+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,v.__data)}}function g(v,S,M){typeof v=="number"||typeof v=="boolean"?S[0]=v:v.isMatrix3?(S[0]=v.elements[0],S[1]=v.elements[1],S[2]=v.elements[2],S[3]=0,S[4]=v.elements[3],S[5]=v.elements[4],S[6]=v.elements[5],S[7]=0,S[8]=v.elements[6],S[9]=v.elements[7],S[10]=v.elements[8],S[11]=0):ArrayBuffer.isView(v)?S.set(new v.constructor(v.buffer,v.byteOffset,S.length)):v.toArray(S,M)}function y(v,S,M,A){let x=v.value,T=S+"_"+M;if(A[T]===void 0)return typeof x=="number"||typeof x=="boolean"?A[T]=x:ArrayBuffer.isView(x)?A[T]=x.slice():A[T]=x.clone(),!0;{let P=A[T];if(typeof x=="number"||typeof x=="boolean"){if(P!==x)return A[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(P.equals(x)===!1)return P.copy(x),!0}}return!1}function m(v){let S=v.uniforms,M=0,A=16;for(let T=0,P=S.length;T<P;T++){let D=Array.isArray(S[T])?S[T]:[S[T]];for(let N=0,G=D.length;N<G;N++){let F=D[N],H=Array.isArray(F.value)?F.value:[F.value];for(let W=0,J=H.length;W<J;W++){let at=H[W],j=d(at),st=M%A,rt=st%j.boundary,Dt=st+rt;M+=rt,Dt!==0&&A-Dt<j.storage&&(M+=A-Dt),F.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=M,M+=j.storage}}}let x=M%A;return x>0&&(M+=A-x),v.__size=M,v.__cache={},this}function d(v){let S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?Zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):Zt("WebGLRenderer: Unsupported uniform value type.",v),S}function E(v){let S=v.target;S.removeEventListener("dispose",E);let M=o.indexOf(S.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function R(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:R}}var Og=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),$n=null;function Bg(){return $n===null&&($n=new Bi(Og,16,16,wi,Ze),$n.name="DFG_LUT",$n.minFilter=Pe,$n.magFilter=Pe,$n.wrapS=En,$n.wrapT=En,$n.generateMipmaps=!1,$n.needsUpdate=!0),$n}var Na=class{constructor(t={}){let{canvas:e=Bu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:p=un}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let y=p,m=new Set([Ko,$o,Jo]),d=new Set([un,zn,Es,Ts,qo,Yo]),E=new Uint32Array(4),R=new Int32Array(4),v=new C,S=null,M=null,A=[],x=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_n,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,D=!1,N=null,G=null,F=null,H=null;this._outputColorSpace=Xe;let W=0,J=0,at=null,j=-1,st=null,rt=new Te,Dt=new Te,Nt=null,ne=new qt(0),Jt=0,$t=e.width,Q=e.height,nt=1,St=null,Ut=null,lt=new Te(0,0,$t,Q),I=new Te(0,0,$t,Q),O=!1,K=new vs,tt=!1,et=!1,pt=new te,xt=new C,vt=new Te,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},_t=!1;function At(){return at===null?nt:1}let L=n;function It(b,B){return e.getContext(b,B)}let Mt,w,_,U,k,Y,ht,ot,V,Z,ct,bt,mt,gt,Tt,Ft,Ht,z,yt,it,Et,wt,ut;try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ge,!1),e.addEventListener("webglcontextrestored",fe,!1),e.addEventListener("webglcontextcreationerror",ln,!1),L===null){let B="webgl2";if(L=It(B,b),L===null)throw It(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}kt()}catch(b){throw e.removeEventListener("webglcontextlost",ge,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",ln,!1),jt("WebGLRenderer: "+b.message),b}function kt(){Mt=new Xm(L),Mt.init(),Et=new Ig(L,Mt),w=new Um(L,Mt,t,Et),_=new Cg(L,Mt),w.reversedDepthBuffer&&h&&_.buffers.depth.setReversed(!0),G=L.createFramebuffer(),F=L.createFramebuffer(),H=L.createFramebuffer(),U=new Zm(L),k=new mg,Y=new Pg(L,Mt,_,k,w,Et,U),ht=new Wm(P),ot=new $f(L),wt=new Dm(L,ot),V=new qm(L,ot,U,wt),Z=new $m(L,V,ot,wt,U),z=new Jm(L,w,Y),Tt=new Fm(k),ct=new pg(P,ht,Mt,w,wt,Tt),bt=new Ug(P,k),mt=new xg,gt=new bg(Mt),Ht=new Lm(P,ht,_,Z,g,c),Ft=new Rg(P,Z,w),ut=new Fg(L,U,w,_),yt=new Nm(L,Mt,U),it=new Ym(L,Mt,U),U.programs=ct.programs,P.capabilities=w,P.extensions=Mt,P.properties=k,P.renderLists=mt,P.shadowMap=Ft,P.state=_,P.info=U}y!==un&&(T=new jm(y,e.width,e.height,a,s,r));let zt=new vc(P,L);this.xr=zt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let b=Mt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Mt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(b){b!==void 0&&(nt=b,this.setSize($t,Q,!1))},this.getSize=function(b){return b.set($t,Q)},this.setSize=function(b,B,$=!0){if(zt.isPresenting){Zt("WebGLRenderer: Can't change size while VR device is presenting.");return}$t=b,Q=B,e.width=Math.floor(b*nt),e.height=Math.floor(B*nt),$===!0&&(e.style.width=b+"px",e.style.height=B+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,b,B)},this.getDrawingBufferSize=function(b){return b.set($t*nt,Q*nt).floor()},this.setDrawingBufferSize=function(b,B,$){$t=b,Q=B,nt=$,e.width=Math.floor(b*$),e.height=Math.floor(B*$),this.setViewport(0,0,b,B)},this.setEffects=function(b){if(y===un){jt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let B=0;B<b.length;B++)if(b[B].isOutputPass===!0){Zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(rt)},this.getViewport=function(b){return b.copy(lt)},this.setViewport=function(b,B,$,X){b.isVector4?lt.set(b.x,b.y,b.z,b.w):lt.set(b,B,$,X),_.viewport(rt.copy(lt).multiplyScalar(nt).round())},this.getScissor=function(b){return b.copy(I)},this.setScissor=function(b,B,$,X){b.isVector4?I.set(b.x,b.y,b.z,b.w):I.set(b,B,$,X),_.scissor(Dt.copy(I).multiplyScalar(nt).round())},this.getScissorTest=function(){return O},this.setScissorTest=function(b){_.setScissorTest(O=b)},this.setOpaqueSort=function(b){St=b},this.setTransparentSort=function(b){Ut=b},this.getClearColor=function(b){return b.copy(Ht.getClearColor())},this.setClearColor=function(){Ht.setClearColor(...arguments)},this.getClearAlpha=function(){return Ht.getClearAlpha()},this.setClearAlpha=function(){Ht.setClearAlpha(...arguments)},this.clear=function(b=!0,B=!0,$=!0){let X=0;if(b){let q=!1;if(at!==null){let Lt=at.texture.format;q=m.has(Lt)}if(q){let Lt=at.texture.type,Bt=d.has(Lt),Ct=Ht.getClearColor(),Gt=Ht.getClearAlpha(),Xt=Ct.r,oe=Ct.g,ce=Ct.b;Bt?(E[0]=Xt,E[1]=oe,E[2]=ce,E[3]=Gt,L.clearBufferuiv(L.COLOR,0,E)):(R[0]=Xt,R[1]=oe,R[2]=ce,R[3]=Gt,L.clearBufferiv(L.COLOR,0,R))}else X|=L.COLOR_BUFFER_BIT}B&&(X|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(X|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&L.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),N=b},this.dispose=function(){e.removeEventListener("webglcontextlost",ge,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",ln,!1),Ht.dispose(),mt.dispose(),gt.dispose(),k.dispose(),ht.dispose(),Z.dispose(),wt.dispose(),ut.dispose(),ct.dispose(),zt.dispose(),zt.removeEventListener("sessionstart",Zi),zt.removeEventListener("sessionend",dt),Vt.stop()};function ge(b){b.preventDefault(),Zl("WebGLRenderer: Context Lost."),D=!0}function fe(){Zl("WebGLRenderer: Context Restored."),D=!1;let b=U.autoReset,B=Ft.enabled,$=Ft.autoUpdate,X=Ft.needsUpdate,q=Ft.type;kt(),U.autoReset=b,Ft.enabled=B,Ft.autoUpdate=$,Ft.needsUpdate=X,Ft.type=q}function ln(b){jt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function hn(b){let B=b.target;B.removeEventListener("dispose",hn),Wa(B)}function Wa(b){Xa(b),k.remove(b)}function Xa(b){let B=k.get(b).programs;B!==void 0&&(B.forEach(function($){ct.releaseProgram($)}),b.isShaderMaterial&&ct.releaseShaderCache(b))}this.renderBufferDirect=function(b,B,$,X,q,Lt){B===null&&(B=ft);let Bt=q.isMesh&&q.matrixWorld.determinantAffine()<0,Ct=Pr(b,B,$,X,q);_.setMaterial(X,Bt);let Gt=$.index,Xt=1;if(X.wireframe===!0){if(Gt=V.getWireframeAttribute($),Gt===void 0)return;Xt=2}let oe=$.drawRange,ce=$.attributes.position,Wt=oe.start*Xt,ve=(oe.start+oe.count)*Xt;Lt!==null&&(Wt=Math.max(Wt,Lt.start*Xt),ve=Math.min(ve,(Lt.start+Lt.count)*Xt)),Gt!==null?(Wt=Math.max(Wt,0),ve=Math.min(ve,Gt.count)):ce!=null&&(Wt=Math.max(Wt,0),ve=Math.min(ve,ce.count));let Fe=ve-Wt;if(Fe<0||Fe===1/0)return;wt.setup(q,X,Ct,$,Gt);let Re,Ee=yt;if(Gt!==null&&(Re=ot.get(Gt),Ee=it,Ee.setIndex(Re)),q.isMesh)X.wireframe===!0?(_.setLineWidth(X.wireframeLinewidth*At()),Ee.setMode(L.LINES)):Ee.setMode(L.TRIANGLES);else if(q.isLine){let Je=X.linewidth;Je===void 0&&(Je=1),_.setLineWidth(Je*At()),q.isLineSegments?Ee.setMode(L.LINES):q.isLineLoop?Ee.setMode(L.LINE_LOOP):Ee.setMode(L.LINE_STRIP)}else q.isPoints?Ee.setMode(L.POINTS):q.isSprite&&Ee.setMode(L.TRIANGLES);if(q.isBatchedMesh)if(Mt.get("WEBGL_multi_draw"))Ee.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let Je=q._multiDrawStarts,Ot=q._multiDrawCounts,nn=q._multiDrawCount,xe=Gt?ot.get(Gt).bytesPerElement:1,Sn=k.get(X).currentProgram.getUniforms();for(let kn=0;kn<nn;kn++)Sn.setValue(L,"_gl_DrawID",kn),Ee.render(Je[kn]/xe,Ot[kn])}else if(q.isInstancedMesh)Ee.renderInstances(Wt,Fe,q.count);else if($.isInstancedBufferGeometry){let Je=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ot=Math.min($.instanceCount,Je);Ee.renderInstances(Wt,Fe,Ot)}else Ee.render(Wt,Fe)};function yn(b,B,$,X){N!==null&&b.isNodeMaterial&&N.setObject(X,b),tt===!0&&Tt.setState(b,$,!1),b.transparent===!0&&b.side===An&&b.forceSinglePass===!1?(b.side=Ye,b.needsUpdate=!0,Vn(b,B,X),b.side=bi,b.needsUpdate=!0,Vn(b,B,X),b.side=An):Vn(b,B,X)}this.compile=function(b,B,$=null){$===null&&($=b),N!==null&&N.renderStart(b,B,$),M=gt.get($),M.init(B),x.push(M),$.traverseVisible(function(q){q.isLight&&q.layers.test(B.layers)&&(M.pushLight(q),q.castShadow&&M.pushShadow(q))}),b!==$&&b.traverseVisible(function(q){q.isLight&&q.layers.test(B.layers)&&(M.pushLight(q),q.castShadow&&M.pushShadow(q))}),M.setupLights(),N!==null&&N.updateLights(M.state.lightsArray),et=this.localClippingEnabled,tt=Tt.init(this.clippingPlanes,et),tt===!0&&Tt.setGlobalState(this.clippingPlanes,B),N!==null&&Ft.render(M.state.shadowsArray,$,B);let X=new Set;return b.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let Lt=q.material;if(Lt)if(Array.isArray(Lt))for(let Bt=0;Bt<Lt.length;Bt++){let Ct=Lt[Bt];yn(Ct,$,B,q),X.add(Ct)}else yn(Lt,$,B,q),X.add(Lt)}),M=x.pop(),N!==null&&N.renderEnd(),X},this.compileAsync=function(b,B,$=null){let X=this.compile(b,B,$);return new Promise(q=>{function Lt(){if(X.forEach(function(Bt){let Gt=k.get(Bt).currentProgram;(Gt===void 0||Gt.isReady())&&X.delete(Bt)}),X.size===0){q(b);return}setTimeout(Lt,10)}Mt.get("KHR_parallel_shader_compile")!==null?Lt():setTimeout(Lt,10)})};let Yi=null;function qa(b){Yi&&Yi(b)}function Zi(){Vt.stop()}function dt(){Vt.start()}let Vt=new dh;Vt.setAnimationLoop(qa),typeof self<"u"&&Vt.setContext(self),this.setAnimationLoop=function(b){Yi=b,zt.setAnimationLoop(b),b===null?Vt.stop():Vt.start()},zt.addEventListener("sessionstart",Zi),zt.addEventListener("sessionend",dt),this.render=function(b,B){if(B!==void 0&&B.isCamera!==!0){jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;N!==null&&N.renderStart(b,B);let $=zt.enabled===!0&&zt.isPresenting===!0,X=T!==null&&(at===null||$)&&T.begin(P,at);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),zt.enabled===!0&&zt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(zt.cameraAutoUpdate===!0&&zt.updateCamera(B),B=zt.getCamera()),b.isScene===!0&&b.onBeforeRender(P,b,B,at),M=gt.get(b,x.length),M.init(B),M.state.textureUnits=Y.getTextureUnits(),x.push(M),pt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),K.setFromProjectionMatrix(pt,On,B.reversedDepth),et=this.localClippingEnabled,tt=Tt.init(this.clippingPlanes,et),S=mt.get(b,A.length),S.init(),A.push(S),zt.enabled===!0&&zt.isPresenting===!0){let Bt=P.xr.getDepthSensingMesh();Bt!==null&&re(Bt,B,-1/0,P.sortObjects)}re(b,B,0,P.sortObjects),S.finish(),N!==null&&N.updateLights(M.state.lightsArray),P.sortObjects===!0&&S.sort(St,Ut),_t=zt.enabled===!1||zt.isPresenting===!1||zt.hasDepthSensing()===!1,_t&&Ht.addToRenderList(S,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),tt===!0&&Tt.beginShadows();let q=M.state.shadowsArray;if(Ft.render(q,b,B),tt===!0&&Tt.endShadows(),(X&&T.hasRenderPass())===!1){let Bt=S.opaque,Ct=S.transmissive;if(M.setupLights(),B.isArrayCamera){let Gt=B.cameras;if(Ct.length>0)for(let Xt=0,oe=Gt.length;Xt<oe;Xt++){let ce=Gt[Xt];me(Bt,Ct,b,ce)}_t&&Ht.render(b);for(let Xt=0,oe=Gt.length;Xt<oe;Xt++){let ce=Gt[Xt];Kt(S,b,ce,ce.viewport)}}else Ct.length>0&&me(Bt,Ct,b,B),_t&&Ht.render(b),Kt(S,b,B)}at!==null&&J===0&&(Y.updateMultisampleRenderTarget(at),Y.updateRenderTargetMipmap(at)),X&&T.end(P),b.isScene===!0&&b.onAfterRender(P,b,B),wt.resetDefaultState(),j=-1,st=null,x.pop(),x.length>0?(M=x[x.length-1],Y.setTextureUnits(M.state.textureUnits),tt===!0&&Tt.setGlobalState(P.clippingPlanes,M.state.camera)):M=null,A.pop(),A.length>0?S=A[A.length-1]:S=null,N!==null&&N.renderEnd()};function re(b,B,$,X){if(b.visible===!1)return;if(b.layers.test(B.layers)){if(b.isGroup)$=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(B);else if(b.isLightProbeGrid)M.pushLightProbeGrid(b);else if(b.isLight)M.pushLight(b),b.castShadow&&M.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(K)){X&&vt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(pt);let Bt=Z.update(b),Ct=b.material;Ct.visible&&S.push(b,Bt,Ct,$,vt.z,null,B)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(K))){let Bt=Z.update(b),Ct=b.material;if(X&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),vt.copy(b.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),vt.copy(Bt.boundingSphere.center)),vt.applyMatrix4(b.matrixWorld).applyMatrix4(pt)),Array.isArray(Ct)){let Gt=Bt.groups;for(let Xt=0,oe=Gt.length;Xt<oe;Xt++){let ce=Gt[Xt],Wt=Ct[ce.materialIndex];Wt&&Wt.visible&&S.push(b,Bt,Wt,$,vt.z,ce,B)}}else Ct.visible&&S.push(b,Bt,Ct,$,vt.z,null,B)}}let Lt=b.children;for(let Bt=0,Ct=Lt.length;Bt<Ct;Bt++)re(Lt[Bt],B,$,X)}function Kt(b,B,$,X){let{opaque:q,transmissive:Lt,transparent:Bt}=b;M.setupLightsView($),tt===!0&&Tt.setGlobalState(P.clippingPlanes,$),X&&_.viewport(rt.copy(X)),q.length>0&&Me(q,B,$),Lt.length>0&&Me(Lt,B,$),Bt.length>0&&Me(Bt,B,$),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function me(b,B,$,X){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[X.id]===void 0){let Wt=Mt.has("EXT_color_buffer_half_float")||Mt.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[X.id]=new Be(1,1,{generateMipmaps:!0,type:Wt?Ze:un,minFilter:Jn,samples:Math.max(4,w.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ue.workingColorSpace})}let Lt=M.state.transmissionRenderTarget[X.id],Bt=X.viewport||rt;Lt.setSize(Bt.z*P.transmissionResolutionScale,Bt.w*P.transmissionResolutionScale);let Ct=P.getRenderTarget(),Gt=P.getActiveCubeFace(),Xt=P.getActiveMipmapLevel();P.setRenderTarget(Lt),P.getClearColor(ne),Jt=P.getClearAlpha(),Jt<1&&P.setClearColor(16777215,.5),P.clear(),_t&&Ht.render($);let oe=P.toneMapping;P.toneMapping=_n;let ce=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),M.setupLightsView(X),tt===!0&&Tt.setGlobalState(P.clippingPlanes,X),Me(b,$,X),Y.updateMultisampleRenderTarget(Lt),Y.updateRenderTargetMipmap(Lt),Mt.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let ve=0,Fe=B.length;ve<Fe;ve++){let Re=B[ve],{object:Ee,geometry:Je,material:Ot,group:nn}=Re;if(Ot.side===An&&Ee.layers.test(X.layers)){let xe=Ot.side;Ot.side=Ye,Ot.needsUpdate=!0,fn(Ee,$,X,Je,Ot,nn),Ot.side=xe,Ot.needsUpdate=!0,Wt=!0}}Wt===!0&&(Y.updateMultisampleRenderTarget(Lt),Y.updateRenderTargetMipmap(Lt))}P.setRenderTarget(Ct,Gt,Xt),P.setClearColor(ne,Jt),ce!==void 0&&(X.viewport=ce),P.toneMapping=oe}function Me(b,B,$){let X=B.isScene===!0?B.overrideMaterial:null;for(let q=0,Lt=b.length;q<Lt;q++){let Bt=b[q],{object:Ct,geometry:Gt,group:Xt}=Bt,oe=Bt.material;oe.allowOverride===!0&&X!==null&&(oe=X),Ct.layers.test($.layers)&&fn(Ct,B,$,Gt,oe,Xt)}}function fn(b,B,$,X,q,Lt){N!==null&&q.isNodeMaterial&&N.setObject(b,q),b.onBeforeRender(P,B,$,X,q,Lt),b.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),q.onBeforeRender(P,B,$,X,b,Lt),q.transparent===!0&&q.side===An&&q.forceSinglePass===!1?(q.side=Ye,q.needsUpdate=!0,P.renderBufferDirect($,B,X,q,b,Lt),q.side=bi,q.needsUpdate=!0,P.renderBufferDirect($,B,X,q,b,Lt),q.side=An):P.renderBufferDirect($,B,X,q,b,Lt),b.onAfterRender(P,B,$,X,q,Lt)}function Vn(b,B,$){B.isScene!==!0&&(B=ft);let X=k.get(b),q=M.state.lights,Lt=M.state.shadowsArray,Bt=q.state.version,Ct=ct.getParameters(b,q.state,Lt,B,$,M.state.lightProbeGridArray),Gt=ct.getProgramCacheKey(Ct),Xt=X.programs;X.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?B.environment:null,X.fog=B.fog;let oe=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;X.envMap=ht.get(b.envMap||X.environment,oe),X.envMapRotation=X.environment!==null&&b.envMap===null?B.environmentRotation:b.envMapRotation,Xt===void 0&&(b.addEventListener("dispose",hn),Xt=new Map,X.programs=Xt);let ce=Xt.get(Gt);if(ce!==void 0){if(X.currentProgram===ce&&X.lightsStateVersion===Bt)return Ii(b,Ct),ce}else Ct.uniforms=ct.getUniforms(b),N!==null&&b.isNodeMaterial&&N.build(b,$,Ct),b.onBeforeCompile(Ct,P),ce=ct.acquireProgram(Ct,Gt),Xt.set(Gt,ce),X.uniforms=Ct.uniforms;let Wt=X.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Wt.clippingPlanes=Tt.uniform),Ii(b,Ct),X.needsLights=Mn(b),X.lightsStateVersion=Bt,X.needsLights&&(Wt.ambientLightColor.value=q.state.ambient,Wt.lightProbe.value=q.state.probe,Wt.sunLights.value=q.state.sun,Wt.sunLightShadows.value=q.state.sunShadow,Wt.directionalLights.value=q.state.directional,Wt.directionalLightShadows.value=q.state.directionalShadow,Wt.spotLights.value=q.state.spot,Wt.spotLightShadows.value=q.state.spotShadow,Wt.rectAreaLights.value=q.state.rectArea,Wt.ltc_1.value=q.state.rectAreaLTC1,Wt.ltc_2.value=q.state.rectAreaLTC2,Wt.pointLights.value=q.state.point,Wt.pointLightShadows.value=q.state.pointShadow,Wt.hemisphereLights.value=q.state.hemi,Wt.sunShadowMatrix.value=q.state.sunShadowMatrix,Wt.sunShadowCascade.value=q.state.sunShadowCascade,Wt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Wt.spotLightMatrix.value=q.state.spotLightMatrix,Wt.spotLightMap.value=q.state.spotLightMap,Wt.pointShadowMatrix.value=q.state.pointShadowMatrix),X.lightProbeGrid=M.state.lightProbeGridArray.length>0,X.currentProgram=ce,X.uniformsList=null,ce}function Cr(b){if(b.uniformsList===null){let B=b.currentProgram.getUniforms();b.uniformsList=Rs.seqWithValue(B.seq,b.uniforms)}return b.uniformsList}function Ii(b,B){let $=k.get(b);$.outputColorSpace=B.outputColorSpace,$.batching=B.batching,$.batchingColor=B.batchingColor,$.instancing=B.instancing,$.instancingColor=B.instancingColor,$.instancingMorph=B.instancingMorph,$.skinning=B.skinning,$.morphTargets=B.morphTargets,$.morphNormals=B.morphNormals,$.morphColors=B.morphColors,$.morphTargetsCount=B.morphTargetsCount,$.numClippingPlanes=B.numClippingPlanes,$.numIntersection=B.numClipIntersection,$.vertexAlphas=B.vertexAlphas,$.vertexTangents=B.vertexTangents,$.toneMapping=B.toneMapping}function Ji(b,B){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;v.setFromMatrixPosition(B.matrixWorld);for(let $=0,X=b.length;$<X;$++){let q=b[$];if(q.texture!==null&&q.boundingBox.containsPoint(v))return q}return null}function Pr(b,B,$,X,q){B.isScene!==!0&&(B=ft),Y.resetTextureUnits();let Lt=B.fog,Bt=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?B.environment:null,Ct=at===null?P.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:ue.workingColorSpace,Gt=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Xt=ht.get(X.envMap||Bt,Gt),oe=X.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ce=!!$.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Wt=!!$.morphAttributes.position,ve=!!$.morphAttributes.normal,Fe=!!$.morphAttributes.color,Re=_n;X.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Re=P.toneMapping);let Ee=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Je=Ee!==void 0?Ee.length:0,Ot=k.get(X),nn=M.state.lights;if(tt===!0&&(et===!0||b!==st)){let Ae=b===st&&X.id===j;Tt.setState(X,b,Ae)}let xe=!1;X.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==nn.state.version||Ot.outputColorSpace!==Ct||q.isBatchedMesh&&Ot.batching===!1||!q.isBatchedMesh&&Ot.batching===!0||q.isBatchedMesh&&Ot.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&Ot.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&Ot.instancing===!1||!q.isInstancedMesh&&Ot.instancing===!0||q.isSkinnedMesh&&Ot.skinning===!1||!q.isSkinnedMesh&&Ot.skinning===!0||q.isInstancedMesh&&Ot.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ot.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ot.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ot.instancingMorph===!1&&q.morphTexture!==null||Ot.envMap!==Xt||X.fog===!0&&Ot.fog!==Lt||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==Tt.numPlanes||Ot.numIntersection!==Tt.numIntersection)||Ot.vertexAlphas!==oe||Ot.vertexTangents!==ce||Ot.morphTargets!==Wt||Ot.morphNormals!==ve||Ot.morphColors!==Fe||Ot.toneMapping!==Re||Ot.morphTargetsCount!==Je||!!Ot.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(xe=!0):(xe=!0,Ot.__version=X.version);let Sn=Ot.currentProgram;xe===!0&&(Sn=Vn(X,B,q),N&&X.isNodeMaterial&&N.onUpdateProgram(X,Sn,Ot));let kn=!1,ci=!1,$i=!1,Se=Sn.getUniforms(),Ue=Ot.uniforms;if(_.useProgram(Sn.program)&&(kn=!0,ci=!0,$i=!0),X.id!==j&&(j=X.id,ci=!0),Ot.needsLights){let Ae=Ji(M.state.lightProbeGridArray,q);Ot.lightProbeGrid!==Ae&&(Ot.lightProbeGrid=Ae,ci=!0)}if(kn||st!==b){_.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Se.setValue(L,"projectionMatrix",b.projectionMatrix),Se.setValue(L,"viewMatrix",b.matrixWorldInverse);let hi=Se.map.cameraPosition;hi!==void 0&&hi.setValue(L,xt.setFromMatrixPosition(b.matrixWorld)),w.logarithmicDepthBuffer&&Se.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Se.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),st!==b&&(st=b,ci=!0,$i=!0)}if(Ot.needsLights&&(nn.state.sunShadowMap.length>0&&Se.setValue(L,"sunShadowMap",nn.state.sunShadowMap,Y),nn.state.directionalShadowMap.length>0&&Se.setValue(L,"directionalShadowMap",nn.state.directionalShadowMap,Y),nn.state.spotShadowMap.length>0&&Se.setValue(L,"spotShadowMap",nn.state.spotShadowMap,Y),nn.state.pointShadowMap.length>0&&Se.setValue(L,"pointShadowMap",nn.state.pointShadowMap,Y)),q.isSkinnedMesh){Se.setOptional(L,q,"bindMatrix"),Se.setOptional(L,q,"bindMatrixInverse");let Ae=q.skeleton;Ae&&(Ae.boneTexture===null&&Ae.computeBoneTexture(),Se.setValue(L,"boneTexture",Ae.boneTexture,Y))}q.isBatchedMesh&&(Se.setOptional(L,q,"batchingTexture"),Se.setValue(L,"batchingTexture",q._matricesTexture,Y),Se.setOptional(L,q,"batchingIdTexture"),Se.setValue(L,"batchingIdTexture",q._indirectTexture,Y),Se.setOptional(L,q,"batchingColorTexture"),q._colorsTexture!==null&&Se.setValue(L,"batchingColorTexture",q._colorsTexture,Y));let ui=$.morphAttributes;if((ui.position!==void 0||ui.normal!==void 0||ui.color!==void 0)&&z.update(q,$,Sn),(ci||Ot.receiveShadow!==q.receiveShadow)&&(Ot.receiveShadow=q.receiveShadow,Se.setValue(L,"receiveShadow",q.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&B.environment!==null&&(Ue.envMapIntensity.value=B.environmentIntensity),Ue.dfgLUT!==void 0&&(Ue.dfgLUT.value=Bg()),ci){if(Se.setValue(L,"toneMappingExposure",P.toneMappingExposure),Ot.needsLights&&Ne(Ue,$i),Lt&&X.fog===!0&&bt.refreshFogUniforms(Ue,Lt),bt.refreshMaterialUniforms(Ue,X,nt,Q,M.state.transmissionRenderTarget[b.id]),Ot.needsLights&&Ot.lightProbeGrid){let Ae=Ot.lightProbeGrid;Ue.probesSH.value=Ae.texture,Ue.probesMin.value.copy(Ae.boundingBox.min),Ue.probesMax.value.copy(Ae.boundingBox.max),Ue.probesResolution.value.copy(Ae.resolution)}Rs.upload(L,Cr(Ot),Ue,Y)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Rs.upload(L,Cr(Ot),Ue,Y),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Se.setValue(L,"center",q.center),Se.setValue(L,"modelViewMatrix",q.modelViewMatrix),Se.setValue(L,"normalMatrix",q.normalMatrix),Se.setValue(L,"modelMatrix",q.matrixWorld),X.uniformsGroups!==void 0){let Ae=X.uniformsGroups;for(let hi=0,Ki=Ae.length;hi<Ki;hi++){let Cc=Ae[hi];ut.update(Cc,Sn),ut.bind(Cc,Sn)}}return Sn}function Ne(b,B){b.ambientLightColor.needsUpdate=B,b.lightProbe.needsUpdate=B,b.sunLights.needsUpdate=B,b.sunLightShadows.needsUpdate=B,b.directionalLights.needsUpdate=B,b.directionalLightShadows.needsUpdate=B,b.pointLights.needsUpdate=B,b.pointLightShadows.needsUpdate=B,b.spotLights.needsUpdate=B,b.spotLightShadows.needsUpdate=B,b.rectAreaLights.needsUpdate=B,b.hemisphereLights.needsUpdate=B}function Mn(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return at},this.setRenderTargetTextures=function(b,B,$){let X=k.get(b);X.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),k.get(b.texture).__webglTexture=B,k.get(b.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:$,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,B){let $=k.get(b);$.__webglFramebuffer=B,$.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(b,B=0,$=0){at=b,W=B,J=$;let X=null,q=!1,Lt=!1;if(b){let Ct=k.get(b);if(Ct.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(L.FRAMEBUFFER,Ct.__webglFramebuffer),rt.copy(b.viewport),Dt.copy(b.scissor),Nt=b.scissorTest,_.viewport(rt),_.scissor(Dt),_.setScissorTest(Nt),j=-1;return}else if(Ct.__webglFramebuffer===void 0)Y.setupRenderTarget(b);else if(Ct.__hasExternalTextures)Y.rebindTextures(b,k.get(b.texture).__webglTexture,k.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let oe=b.depthTexture;if(Ct.__boundDepthTexture!==oe){if(oe!==null&&k.has(oe)&&(b.width!==oe.image.width||b.height!==oe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(b)}}let Gt=b.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(Lt=!0);let Xt=k.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Xt[B])?X=Xt[B][$]:X=Xt[B],q=!0):b.samples>0&&Y.useMultisampledRTT(b)===!1?X=k.get(b).__webglMultisampledFramebuffer:Array.isArray(Xt)?X=Xt[$]:X=Xt,rt.copy(b.viewport),Dt.copy(b.scissor),Nt=b.scissorTest}else rt.copy(lt).multiplyScalar(nt).floor(),Dt.copy(I).multiplyScalar(nt).floor(),Nt=O;if($!==0&&(X=G),_.bindFramebuffer(L.FRAMEBUFFER,X)&&_.drawBuffers(b,X),_.viewport(rt),_.scissor(Dt),_.setScissorTest(Nt),q){let Ct=k.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ct.__webglTexture,$)}else if(Lt){let Ct=B;for(let Gt=0;Gt<b.textures.length;Gt++){let Xt=k.get(b.textures[Gt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Gt,Xt.__webglTexture,$,Ct)}}else if(b!==null&&$!==0){let Ct=k.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ct.__webglTexture,$)}j=-1};function We(b){let B=k.get(b);return(B.__readFormat!==b.format||B.__readType!==b.type)&&(B.__readFormat=b.format,B.__readType=b.type,B.__formatReadable=w.textureFormatReadable(b.format),B.__typeReadable=w.textureTypeReadable(b.type)),B}this.readRenderTargetPixels=function(b,B,$,X,q,Lt,Bt,Ct=0){if(!(b&&b.isWebGLRenderTarget)){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=k.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Bt!==void 0&&(Gt=Gt[Bt]),Gt){_.bindFramebuffer(L.FRAMEBUFFER,Gt);try{let Xt=b.textures[Ct],oe=Xt.format,ce=Xt.type;b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ct);let Wt=We(Xt);if(Wt.__formatReadable===!1){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Wt.__typeReadable===!1){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=b.width-X&&$>=0&&$<=b.height-q&&L.readPixels(B,$,X,q,Et.convert(oe),Et.convert(ce),Lt)}finally{let Xt=at!==null?k.get(at).__webglFramebuffer:null;_.bindFramebuffer(L.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(b,B,$,X,q,Lt,Bt,Ct=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Gt=k.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Bt!==void 0&&(Gt=Gt[Bt]),Gt)if(B>=0&&B<=b.width-X&&$>=0&&$<=b.height-q){_.bindFramebuffer(L.FRAMEBUFFER,Gt);let Xt=b.textures[Ct],oe=Xt.format,ce=Xt.type;b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ct);let Wt=We(Xt);if(Wt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Wt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ve=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ve),L.bufferData(L.PIXEL_PACK_BUFFER,Lt.byteLength,L.STREAM_READ),L.readPixels(B,$,X,q,Et.convert(oe),Et.convert(ce),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let Fe=at!==null?k.get(at).__webglFramebuffer:null;_.bindFramebuffer(L.FRAMEBUFFER,Fe);let Re=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Hu(L,Re,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ve),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Lt),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(ve),L.deleteSync(Re),Lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,B=null,$=0){let X=Math.pow(2,-$),q=Math.floor(b.image.width*X),Lt=Math.floor(b.image.height*X),Bt=B!==null?B.x:0,Ct=B!==null?B.y:0;Y.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,$,0,0,Bt,Ct,q,Lt),_.unbindTexture()},this.copyTextureToTexture=function(b,B,$=null,X=null,q=0,Lt=0){let Bt,Ct,Gt,Xt,oe,ce,Wt,ve,Fe,Re=b.isCompressedTexture?b.mipmaps[Lt]:b.image;if($!==null)Bt=$.max.x-$.min.x,Ct=$.max.y-$.min.y,Gt=$.isBox3?$.max.z-$.min.z:1,Xt=$.min.x,oe=$.min.y,ce=$.isBox3?$.min.z:0;else{let Ue=Math.pow(2,-q);Bt=Math.floor(Re.width*Ue),Ct=Math.floor(Re.height*Ue),b.isDataArrayTexture?Gt=Re.depth:b.isData3DTexture?Gt=Math.floor(Re.depth*Ue):Gt=1,Xt=0,oe=0,ce=0}X!==null?(Wt=X.x,ve=X.y,Fe=X.z):(Wt=0,ve=0,Fe=0);let Ee=Et.convert(B.format),Je=Et.convert(B.type),Ot;B.isData3DTexture?(Y.setTexture3D(B,0),Ot=L.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Y.setTexture2DArray(B,0),Ot=L.TEXTURE_2D_ARRAY):(Y.setTexture2D(B,0),Ot=L.TEXTURE_2D),_.activeTexture(L.TEXTURE0),_.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,B.flipY),_.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),_.pixelStorei(L.UNPACK_ALIGNMENT,B.unpackAlignment);let nn=_.getParameter(L.UNPACK_ROW_LENGTH),xe=_.getParameter(L.UNPACK_IMAGE_HEIGHT),Sn=_.getParameter(L.UNPACK_SKIP_PIXELS),kn=_.getParameter(L.UNPACK_SKIP_ROWS),ci=_.getParameter(L.UNPACK_SKIP_IMAGES);_.pixelStorei(L.UNPACK_ROW_LENGTH,Re.width),_.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Re.height),_.pixelStorei(L.UNPACK_SKIP_PIXELS,Xt),_.pixelStorei(L.UNPACK_SKIP_ROWS,oe),_.pixelStorei(L.UNPACK_SKIP_IMAGES,ce);let $i=b.isDataArrayTexture||b.isData3DTexture,Se=B.isDataArrayTexture||B.isData3DTexture;if(b.isDepthTexture){let Ue=k.get(b),ui=k.get(B),Ae=k.get(Ue.__renderTarget),hi=k.get(ui.__renderTarget);_.bindFramebuffer(L.READ_FRAMEBUFFER,Ae.__webglFramebuffer),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,hi.__webglFramebuffer);for(let Ki=0;Ki<Gt;Ki++)$i&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,k.get(b).__webglTexture,q,ce+Ki),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,k.get(B).__webglTexture,Lt,Fe+Ki)),L.blitFramebuffer(Xt,oe,Bt,Ct,Wt,ve,Bt,Ct,L.DEPTH_BUFFER_BIT,L.NEAREST);_.bindFramebuffer(L.READ_FRAMEBUFFER,null),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(q!==0||b.isRenderTargetTexture||k.has(b)){let Ue=k.get(b),ui=k.get(B);_.bindFramebuffer(L.READ_FRAMEBUFFER,F),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,H);for(let Ae=0;Ae<Gt;Ae++)$i?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ue.__webglTexture,q,ce+Ae):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ue.__webglTexture,q),Se?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ui.__webglTexture,Lt,Fe+Ae):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ui.__webglTexture,Lt),q!==0?L.blitFramebuffer(Xt,oe,Bt,Ct,Wt,ve,Bt,Ct,L.COLOR_BUFFER_BIT,L.NEAREST):Se?L.copyTexSubImage3D(Ot,Lt,Wt,ve,Fe+Ae,Xt,oe,Bt,Ct):L.copyTexSubImage2D(Ot,Lt,Wt,ve,Xt,oe,Bt,Ct);_.bindFramebuffer(L.READ_FRAMEBUFFER,null),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Se?b.isDataTexture||b.isData3DTexture?L.texSubImage3D(Ot,Lt,Wt,ve,Fe,Bt,Ct,Gt,Ee,Je,Re.data):B.isCompressedArrayTexture?L.compressedTexSubImage3D(Ot,Lt,Wt,ve,Fe,Bt,Ct,Gt,Ee,Re.data):L.texSubImage3D(Ot,Lt,Wt,ve,Fe,Bt,Ct,Gt,Ee,Je,Re):b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Lt,Wt,ve,Bt,Ct,Ee,Je,Re.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Lt,Wt,ve,Re.width,Re.height,Ee,Re.data):L.texSubImage2D(L.TEXTURE_2D,Lt,Wt,ve,Bt,Ct,Ee,Je,Re);_.pixelStorei(L.UNPACK_ROW_LENGTH,nn),_.pixelStorei(L.UNPACK_IMAGE_HEIGHT,xe),_.pixelStorei(L.UNPACK_SKIP_PIXELS,Sn),_.pixelStorei(L.UNPACK_SKIP_ROWS,kn),_.pixelStorei(L.UNPACK_SKIP_IMAGES,ci),Lt===0&&B.generateMipmaps&&L.generateMipmap(Ot),_.unbindTexture()},this.initRenderTarget=function(b){k.get(b).__webglFramebuffer===void 0&&Y.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Y.setTextureCube(b,0):b.isData3DTexture?Y.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Y.setTexture2DArray(b,0):Y.setTexture2D(b,0),_.unbindTexture()},this.resetState=function(){W=0,J=0,at=null,_.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ue._getDrawingBufferColorSpace(t),e.unpackColorSpace=ue._getUnpackColorSpace()}};var yc={high:{name:"high",maxDpr:2,pixelBudget:34e5,minScale:.55,post:!0,msaa:4,detail:1},mid:{name:"mid",maxDpr:1.5,pixelBudget:19e5,minScale:.6,post:!0,msaa:4,detail:.7},low:{name:"low",maxDpr:1.25,pixelBudget:11e5,minScale:.65,post:!1,msaa:0,detail:.45}},zg=/(mali-[gt]?[0-7]\d|mali-4|adreno \(tm\) [1-5]\d\d|powervr|sgx|intel\(r\) hd graphics [2-5]\d{2,3}|swiftshader|llvmpipe)/i;function yh(i){let e=new URLSearchParams(location.search).get("tier");if(e&&yc[e])return yc[e];let n=matchMedia("(pointer: coarse)").matches,s=Math.min(screen.width,screen.height),r=navigator.deviceMemory||8,o=navigator.hardwareConcurrency||8,a=!!(navigator.connection&&navigator.connection.saveData),c=n||s<700?"mid":"high";if((a||r<=2||o<=2||(n||s<700)&&(r<=4||o<=4))&&(c="low"),i){let l=i.getExtension("WEBGL_debug_renderer_info"),u=l?String(i.getParameter(l.UNMASKED_RENDERER_WEBGL)):"";zg.test(u)&&(c="low")}return yc[c]}var Oa=class{constructor(t,e){this.tier=t,this.onChange=e,this.scale=1,this.post=t.post,this.ema=16.7,this.frames=0,this.lastChange=0,this.upgrades=0}sample(t,e){if(t<=0||t>250||(this.frames++,this.ema+=(t-this.ema)*.08,this.frames<45))return;let n=e-this.lastChange;if(this.ema>25&&n>900){if(this.scale>this.tier.minScale+.01)this.scale=Math.max(this.tier.minScale,this.scale*.82);else if(this.post)this.post=!1;else return;this.commit(e)}else this.ema<13.5&&n>4e3&&this.scale<1&&this.upgrades<3&&(this.scale=Math.min(1,this.scale*1.12),this.upgrades++,this.commit(e))}commit(t){this.lastChange=t,this.ema=16.7,this.frames=30,this.onChange(this.scale,this.post)}};function Mh(i,t,e,n=1){let s=Math.min(window.devicePixelRatio||1,i.maxDpr),r=Math.sqrt(i.pixelBudget/Math.max(1,t*e));return Math.max(.5,Math.min(s,r)*n)}var Ba={plateSegs:160,tex:1024,chipTex:2048,pcbTex:1024,env:256,nOuter:10,nInner:6,radial:6,density:.75,aniso:.55,rodSegs:16,bellows:!0,wirebonds:18,airbridges:1,clamps:!0,ties:!0,labels:22,dofTaps:14,bloomLevels:5,bloomDiv:2,msaa:4,fxaa:!1,dust:420,frost:260,frostOctaves:2,grain:.032},Sh={high:{...Ba},mid:{...Ba,plateSegs:112,chipTex:1024,pcbTex:512,env:128,nOuter:8,nInner:5,radial:5,density:.58,aniso:.3,rodSegs:12,wirebonds:12,airbridges:.5,labels:12,dofTaps:0,bloomLevels:4,bloomDiv:4,msaa:4,dust:240,frost:150,frostOctaves:1,grain:.03},low:{...Ba,plateSegs:72,tex:512,chipTex:1024,pcbTex:512,env:128,nOuter:6,nInner:3,radial:4,density:.4,aniso:0,rodSegs:8,bellows:!1,wirebonds:8,airbridges:0,ties:!1,labels:0,dofTaps:0,bloomLevels:0,bloomDiv:4,msaa:0,fxaa:!0,dust:120,frost:90,frostOctaves:1,grain:.028},still:{...Ba,plateSegs:224,env:512,radial:8,density:1,rodSegs:24,wirebonds:22,labels:26,dofTaps:32,bloomLevels:6,bloomDiv:2,msaa:4,dust:420,frost:260,grain:0}};function bh(i,t){let e={...Sh[i]||Sh.mid};return t&&Object.assign(e,t),e}var Hg=`
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,Vg=`
uniform vec3 uColor; uniform float uSoft; uniform float uFall;
varying vec2 vUv;
void main(){
  vec2 q = abs(vUv - 0.5) * 2.0;
  float e = (1.0 - smoothstep(1.0 - uSoft, 1.0, q.x)) * (1.0 - smoothstep(1.0 - uSoft, 1.0, q.y));
  float grad = 1.0 - uFall * q.y * q.y;
  gl_FragColor = vec4(uColor * e * grad, 1.0);
}`;function Ri(i,{w:t,h:e,az:n,el:s,dist:r,color:o,intensity:a,soft:c=.25,fall:l=.3,roll:u=0}){let f=new Le({uniforms:{uColor:{value:new qt(o[0],o[1],o[2]).multiplyScalar(a)},uSoft:{value:c},uFall:{value:l}},vertexShader:Hg,fragmentShader:Vg,side:An,transparent:!0,blending:Rn,depthWrite:!1,depthTest:!1}),h=new _e(new ai(t,e),f),p=Math.cos(s);return h.position.set(Math.sin(n)*p*r,Math.sin(s)*r,Math.cos(n)*p*r),h.lookAt(0,0,0),h.rotateZ(u),i.add(h),h}function Mc(i,{size:t=256}={}){let e=new Oi,n=new _e(new lr(60,48,24),new Le({side:Ye,depthWrite:!1,vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
        varying vec3 vDir;
        void main(){
          float y = vDir.y;
          vec3 top = vec3(0.006, 0.008, 0.013);
          vec3 hor = vec3(0.017, 0.023, 0.036);
          vec3 bot = vec3(0.003, 0.005, 0.010);
          vec3 c = y > 0.0 ? mix(hor, top, smoothstep(0.0, 0.6, y)) : mix(hor, bot, smoothstep(0.0, 0.35, -y));
          gl_FragColor = vec4(c, 1.0);
        }`}));n.renderOrder=-10,e.add(n);let s=14,r=Math.PI/180;Ri(e,{w:11,h:13,az:-42*r,el:12*r,dist:s,color:[.97,.975,1],intensity:1.35,soft:.7,fall:.35}),Ri(e,{w:16,h:16,az:0,el:86*r,dist:s,color:[.93,.96,1],intensity:1.1,soft:.75,fall:.1}),Ri(e,{w:7,h:11,az:78*r,el:2*r,dist:s,color:[.76,.84,1],intensity:.45,soft:.7,fall:.3}),Ri(e,{w:1.3,h:18,az:-72*r,el:6*r,dist:s,color:[1,.985,.965],intensity:11,soft:.18,fall:.5}),Ri(e,{w:1,h:18,az:142*r,el:4*r,dist:s,color:[.78,.87,1],intensity:6.5,soft:.25,fall:.45}),Ri(e,{w:.7,h:14,az:32*r,el:0,dist:s,color:[.96,.97,1],intensity:3,soft:.3,fall:.5});for(let[c,l,u,f]of[[-10,-4,1.4,6],[60,-6,.9,4],[120,-3,1.2,5],[200,-5,1,6],[280,-4,.8,5]])Ri(e,{w:f,h:.5,az:c*r,el:l*r,dist:s,color:[.9,.94,1],intensity:u,soft:.6,fall:0});Ri(e,{w:22,h:22,az:0,el:-89*r,dist:s,color:[.2,.33,.7],intensity:.2,soft:.6,fall:0});let o=new Cs(i),a=o.fromScene(e,0,.1,100,{size:t});return o.dispose(),e.traverse(c=>{c.geometry&&c.geometry.dispose(),c.material&&c.material.dispose()}),a}var Eh=[2,3,4,5];function Th(){let i=[];for(let t=0;t<6;t++)i.push(new Te(0,1,.1,0));return{uTime:{value:0},uFrost:{value:0},uPlates:{value:i},uGlow:{value:0},uGlowPos:{value:new C(0,-2.64,0)},uGlowColor:{value:new qt(.32,.72,1)},uPulse:{value:new Te(-10,0,.055,0)},uPulseColor:{value:new qt(.32,.72,1)},uSparkle:{value:1}}}var kg=`
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
`,Gg=`
attribute vec2 aCab;
varying vec2 vCab;
`,Wg=`
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
`;function In(i,t,e={}){let n=e.bounce||0,s=!!e.cable,r=e.frost!==!1,o=e.glow!==!1,a=e.octaves||2;i.onBeforeCompile=l=>{l.uniforms.uTime=t.uTime,l.uniforms.uFrost=t.uFrost,l.uniforms.uPlates=t.uPlates,l.uniforms.uGlow=t.uGlow,l.uniforms.uGlowPos=t.uGlowPos,l.uniforms.uGlowColor=t.uGlowColor,l.uniforms.uSparkle=t.uSparkle,s&&(l.uniforms.uPulse=t.uPulse,l.uniforms.uPulseColor=t.uPulseColor);let u=l.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;`+(s?Gg:"")).replace("#include <project_vertex>",`#include <project_vertex>
        {
          vec4 wp4 = vec4(transformed, 1.0);
          #ifdef USE_INSTANCING
            wp4 = instanceMatrix * wp4;
          #endif
          vWPos = (modelMatrix * wp4).xyz;
        }`+(s?`
        vCab = aCab;`:""));l.vertexShader=u;let f=l.fragmentShader.replace("#include <common>",`#include <common>
`+kg+(s?Wg:""));s&&(f=f.replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
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
        }`)),l.fragmentShader=f};let c=`nadir-${s?"cable":"m"}-${n.toFixed(2)}-${r?"f"+a:"nf"}-${o?"g":"ng"}`;return i.customProgramCacheKey=()=>c,i}var jn=[1,.71,.34];function wh(i,t){let e={octaves:t.frostOctaves},n=In(new qe({color:16777215,vertexColors:!0,metalness:1,roughness:.24}),i,{...e,bounce:.6});n.color.setRGB(jn[0],jn[1],jn[2]);let s=In(new qe({color:16777215,vertexColors:!0,metalness:1,roughness:.3}),i,e);s.color.setRGB(.64,.65,.68);let r=In(new qe({color:16777215,vertexColors:!0,metalness:1,roughness:.35}),i,{...e,cable:!0}),o=In(new qe({color:16777215,vertexColors:!0,metalness:.15,roughness:.42}),i,e);o.color.setRGB(.025,.028,.034);let a=In(new qe({color:16777215,vertexColors:!0,metalness:0,roughness:.62}),i,e),c=In(new qe({color:16777215,metalness:1,roughness:.22}),i,e);return{gold:n,silver:s,cable:r,dark:o,diel:a,conn:c}}function Xi(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new we,l=0;for(let u=0;u<i.length;++u){let f=i[u],h=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in f.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(f.attributes[p]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in f.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(f.morphAttributes[p])}if(t){let p;if(e)p=f.index.count;else if(f.attributes.position!==void 0)p=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,u),l+=p}}if(e){let u=0,f=[];for(let h=0;h<i.length;++h){let p=i[h].index;for(let g=0;g<p.count;++g)f.push(p.getX(g)+u);u+=i[h].attributes.position.count}c.setIndex(f)}for(let u in r){let f=Ah(r[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,f)}for(let u in o){let f=o[u][0].length;if(f!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let h=0;h<f;++h){let p=[];for(let y=0;y<o[u].length;++y)p.push(o[u][y][h]);let g=Ah(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}}return c}function Ah(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let u=i[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let o=new t(r),a=new be(o,e,n),c=0;for(let l=0;l<i.length;++l){let u=i[l];if(u.isInterleavedBufferAttribute){let f=c/e;for(let h=0,p=u.count;h<p;h++)for(let g=0;g<e;g++){let y=u.getComponent(h,g);a.setComponent(h+f,g,y)}}else o.set(u.array,c);c+=u.count*e}return s!==void 0&&(a.gpuType=s),a}var Er=new C;function Ln(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Er.copy(t),Er[n]=0,Er.normalize();let l=.5*o/(o+a),u=1-Er.angleTo(i)/c;return Math.sign(Er[e])===1?u*l:a/(o+a)+l+l*(1-u)}var li=class i extends Ge{constructor(t=1,e=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new C,l=new C,u=new C(t,e,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,h=this.attributes.normal.array,p=this.attributes.uv.array,g=f.length/6,y=new C,m=.5/o;for(let d=0,E=0;d<f.length;d+=3,E+=2)switch(c.fromArray(f,d),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),f[d+0]=u.x*Math.sign(c.x)+l.x*r,f[d+1]=u.y*Math.sign(c.y)+l.y*r,f[d+2]=u.z*Math.sign(c.z)+l.z*r,h[d+0]=l.x,h[d+1]=l.y,h[d+2]=l.z,Math.floor(d/g)){case 0:y.set(1,0,0),p[E+0]=Ln(y,l,"z","y",r,n),p[E+1]=1-Ln(y,l,"y","z",r,e);break;case 1:y.set(-1,0,0),p[E+0]=1-Ln(y,l,"z","y",r,n),p[E+1]=1-Ln(y,l,"y","z",r,e);break;case 2:y.set(0,1,0),p[E+0]=1-Ln(y,l,"x","z",r,t),p[E+1]=Ln(y,l,"z","x",r,n);break;case 3:y.set(0,-1,0),p[E+0]=1-Ln(y,l,"x","z",r,t),p[E+1]=1-Ln(y,l,"z","x",r,n);break;case 4:y.set(0,0,1),p[E+0]=1-Ln(y,l,"x","y",r,t),p[E+1]=1-Ln(y,l,"y","x",r,e);break;case 5:y.set(0,0,-1),p[E+0]=Ln(y,l,"x","y",r,t),p[E+1]=1-Ln(y,l,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var De=(i,t,e)=>i<t?t:i>e?e:i,ie=(i,t,e)=>i+(t-i)*e,Ie=(i,t,e)=>{let n=De((e-i)/(t-i),0,1);return n*n*(3-2*n)},Rh=(i,t,e)=>{let n=De((e-i)/(t-i),0,1);return n*n*n*(n*(n*6-15)+10)},Sc=i=>1-Math.pow(1-De(i,0,1),3),Ch=i=>(i=De(i,0,1),i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2);function on(i){let t=i>>>0;return function(){t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}function Ph(i,t,e,n){let s=i.x-t,r=Math.exp(-e*n),o=(i.v+e*s)*n;i.v=(i.v-e*o)*r,i.x=t+(s+o)*r}function Xg(){let i=globalThis.scheduler;return i&&typeof i.yield=="function"?i.yield():new Promise(t=>{if(typeof MessageChannel=="function"){let e=new MessageChannel;e.port1.onmessage=()=>{e.port1.close(),t()},e.port2.postMessage(0)}else setTimeout(t,0)})}function Ih({budget:i=12,onProgress:t}={}){let e=()=>performance.now(),n=e(),s={longest:0,longestLabel:"",label:"",progress:0,slices:0,due(){return e()-n>i},async yield(r){let o=e()-n;o>s.longest&&(s.longest=o,s.longestLabel=r||s.label),s.slices++,await Xg(),n=e()},async maybeYield(r){e()-n>i&&await s.yield(r)},step(r,o){if(s.label=r,o!==void 0&&(s.progress=o,t))try{t(o)}catch{}},mark(r){let o=e()-n;o>s.longest&&(s.longest=o,s.longestLabel=r||s.label)}};return s}function Ci(i){let t=document.createElement("canvas");return t.width=t.height=i,t}function qi(i,{srgb:t=!1,aniso:e=4}={}){let n=new nr(i);return n.colorSpace=t?Xe:Hn,n.flipY=!1,n.wrapS=n.wrapT=En,n.anisotropy=e,n.generateMipmaps=!0,n.minFilter=Jn,n.needsUpdate=!0,n}var bc={maybeYield:async()=>{}};async function Lh({R:i,bore:t,size:e,holes:n,label:s,seed:r,stepR:o},a=bc){let c=on(r),l=Ci(e),u=Ci(e),f=l.getContext("2d"),h=u.getContext("2d"),p=e/(2*i),g=e/2,y=e/2,m=M=>(M/(2*i)+.5)*e;f.fillStyle="rgb(240,240,240)",f.fillRect(0,0,e,e),h.fillStyle="rgb(128,70,0)",h.fillRect(0,0,e,e);let d=c()*6.28,E=Math.max(1,t*p),R=o*p,v=0;for(let M=E;M<R;M+=.7+c()*1.3){let x=.13+.1*(.5+.5*Math.sin(M*.045+d)*Math.sin(M*.011+d*2))+(c()-.5)*.05,T=128+(c()-.5)*10|0;h.strokeStyle=`rgb(${T},${Math.round(x*255)},0)`,h.lineWidth=1.3,h.beginPath(),h.arc(g,y,M,0,Math.PI*2),h.stroke();let P=236+(c()-.5)*10|0;f.strokeStyle=`rgb(${P},${P},${P})`,f.lineWidth=1.3,f.beginPath(),f.arc(g,y,M,0,Math.PI*2),f.stroke(),(++v&63)===0&&await a.maybeYield("plate rings")}h.strokeStyle="rgb(128,100,0)",h.lineWidth=i*p-R+2,h.beginPath(),h.arc(g,y,R+(i*p-R)/2,0,Math.PI*2),h.stroke(),f.strokeStyle="rgb(228,228,228)",f.lineWidth=i*p-R+2,f.beginPath(),f.arc(g,y,R+(i*p-R)/2,0,Math.PI*2),f.stroke(),h.strokeStyle="rgb(70,150,0)",h.lineWidth=Math.max(1.5,.006*p),h.beginPath(),h.arc(g,y,R,0,Math.PI*2),h.stroke();for(let M=0;M<14;M++){let A=c()*Math.PI*2,x=(t+c()*(i-t))*p,T=g+Math.cos(A)*x,P=y+Math.sin(A)*x,D=(.15+c()*.45)*p,N=f.createRadialGradient(T,P,0,T,P,D),G=205+c()*25|0;N.addColorStop(0,`rgba(${G},${G},${G},0.35)`),N.addColorStop(1,`rgba(${G},${G},${G},0)`),f.fillStyle=N,f.fillRect(T-D,P-D,D*2,D*2)}await a.maybeYield("plate marks");let S=(M,A,x,T)=>{M.beginPath(),M.arc(A,x,Math.max(.6,T),0,Math.PI*2),M.fill()};v=0;for(let M of n){let A=m(M.x),x=m(M.z),T=M.r*p;M.kind==="conn"?(h.fillStyle="rgb(120,30,0)",S(h,A,x,T*2.1),f.fillStyle="rgb(250,250,250)",S(f,A,x,T*2.1),h.fillStyle="rgb(60,200,0)",S(h,A,x,T*.9),f.fillStyle="rgb(40,40,40)",S(f,A,x,T*.9)):M.kind==="port"?(h.fillStyle="rgb(90,60,0)",S(h,A,x,T*1.25),f.fillStyle="rgb(214,214,214)",S(f,A,x,T*1.25),h.fillStyle="rgb(0,235,0)",S(h,A,x,T),f.fillStyle="rgb(10,10,10)",S(f,A,x,T)):(h.fillStyle="rgb(70,170,0)",S(h,A,x,T*1.35),f.fillStyle="rgb(150,150,150)",S(f,A,x,T*1.35),h.fillStyle="rgb(10,230,0)",S(h,A,x,T),f.fillStyle="rgb(22,22,22)",S(f,A,x,T)),(++v&127)===0&&await a.maybeYield("plate holes")}if(s){let M=Math.max(7,.042*p),A=-.6,x=(o-.07)*p;for(let[T,P]of[[h,"rgb(96,150,0)"],[f,"rgb(170,170,170)"]])T.save(),T.translate(g+Math.cos(A)*x,y+Math.sin(A)*x),T.rotate(A+Math.PI/2),T.font=`600 ${M}px Inter, "Helvetica Neue", Arial, sans-serif`,T.fillStyle=P,T.textAlign="center",T.textBaseline="middle",T.fillText(s,0,0),T.restore()}for(let[M,A]of[[h,"rgb(128,90,0)"],[f,"rgb(232,232,232)"]])M.strokeStyle=A,M.lineWidth=6,M.beginPath(),M.arc(g,y,i*p-1,0,Math.PI*2),M.stroke(),t>0&&(M.beginPath(),M.arc(g,y,t*p+1,0,Math.PI*2),M.stroke());return await a.maybeYield("plate label"),{map:qi(l,{srgb:!0}),rough:qi(u)}}function za(){let o=[];for(let u=0;u<5;u++)for(let f=0;f<5;f++)o.push({i:f,j:u,x:.24+f*.13,y:.24+u*.13});let a=[];for(let u=0;u<5;u++)for(let f=0;f<4;f++){let h=o[u*5+f];a.push({idx:f+4*u,pts:[[h.x+.044+.0062,h.y],[h.x+.13-.044-.0062,h.y]]})}for(let u=0;u<4;u++)for(let f=0;f<5;f++){let h=o[u*5+f];a.push({idx:20+f+5*u,pts:[[h.x,h.y+.044+.0062],[h.x,h.y+.13-.044-.0062]]})}let c=[],l=[];for(let u=0;u<4;u++)for(let f=0;f<5;f++){let h=u===0?o[f]:u===1?o[20+f]:u===2?o[f*5]:o[f*5+5-1],{x:p,y:g}=h,y,m;u===0?(y=[[p+.012,g-.044-.0062],[p+.012,.13],[p+.012,.085]],m=[p+.012,.06,"v"]):u===1?(y=[[p-.012,g+.044+.0062],[p-.012,.87],[p-.012,.915]],m=[p-.012,.94,"v"]):u===2?(y=[[p-.044-.0062,g-.012],[.13,g-.012],[.085,g-.012]],m=[.06,g-.012,"h"]):(y=[[p+.044+.0062,g+.012],[.87,g+.012],[.915,g+.012]],m=[.94,g+.012,"h"]),c.push(y),l.push(m)}return{N:5,pitch:.13,x0:.24,L:.044,W:.0085,G:.0062,qubits:o,couplers:a,flux:c,pads:l}}async function Dh(i,t=bc){let e=Ci(i),n=Ci(i),s=Ci(i),r=e.getContext("2d"),o=n.getContext("2d"),a=s.getContext("2d"),c=i,l={sub:["#0b111b","rgb(0,110,0)","rgb(0,0,0)"],metal:["#c3ccd8","rgb(0,52,255)",null],gold:["#d9b46a","rgb(0,70,255)",null],dark:["#05070b","rgb(0,150,0)","rgb(0,0,0)"]},u=[r,o,a],f=(v,S,M,A,x,T)=>{let P=l[v];for(let D=0;D<3;D++){let N=D===2&&T?T:P[D];N&&(u[D].fillStyle=N,u[D].fillRect(S*c,M*c,A*c,x*c))}},h=(v,S,M,A)=>{let x=l[v];for(let T=0;T<3;T++){let P=T===2&&A?A:x[T];if(!P)continue;let D=u[T];D.strokeStyle=P,D.lineWidth=S*c,D.lineJoin="round",D.lineCap="butt",D.beginPath(),D.moveTo(M[0][0]*c,M[0][1]*c);for(let N=1;N<M.length;N++)D.lineTo(M[N][0]*c,M[N][1]*c);D.stroke()}},p=(v,S=.0045,M=.0032,A)=>{h("sub",S+2*M,v),h("metal",S,v,A)};a.fillStyle="#000",a.fillRect(0,0,c,c),f("sub",0,0,1,1);let g=.03;f("metal",g,g,1-2*g,1-2*g);{let v=Math.max(4,Math.round(.011*c)),S=Math.max(1,Math.round(.0028*c));for(let[M,A,x]of[[r,l.metal[0],l.sub[0]],[o,l.metal[1],l.sub[1]]]){let T=Ci(v),P=T.getContext("2d");P.fillStyle=A,P.fillRect(0,0,v,v),P.fillStyle=x,P.fillRect(0,0,S,S);let D=M.createPattern(T,"repeat");M.save(),M.translate(Math.round((g+.011)*c),Math.round((g+.011)*c)),M.fillStyle=D,M.fillRect(0,0,Math.round((1-2*g-.022)*c),Math.round((1-2*g-.022)*c)),M.restore()}}await t.maybeYield("chip ground");let y=za(),{L:m,W:d,G:E,qubits:R}=y;for(let{x:v,y:S}of R)f("sub",v-m-E,S-d/2-E,2*(m+E),d+2*E),f("sub",v-d/2-E,S-m-E,d+2*E,2*(m+E));for(let v of y.couplers)p(v.pts,.004,.003,"rgb(0,0,255)");for(let v=0;v<y.N-1;v++)for(let S=0;S<y.N-1;S++){let{x:M,y:A}=R[v*y.N+S],x=M+y.pitch/2,T=A+y.pitch/2,P=[[M+m*.55,A+m*.55],[x-.028,T-.024]],D=1;for(let N=0;N<7;N++){let G=T-.024+N*.008;P.push([x-.028*D,G],[x+.028*D,G]),D=-D}p(P,.0026,.0018,"rgb(0,140,0)")}await t.maybeYield("chip resonators");for(let v of y.flux)p(v,.004,.003);for(let[v,S,M]of y.pads)M==="v"?(f("sub",v-.022,S-.026,.044,.052),f("gold",v-.014,S-.018,.028,.036)):(f("sub",v-.026,S-.022,.052,.044),f("gold",v-.018,S-.014,.036,.028));for(let{x:v,y:S}of R){f("metal",v-m,S-d/2,2*m,d),f("metal",v-d/2,S-m,d,2*m);let M=a.createRadialGradient(v*c,S*c,0,v*c,S*c,m*c);M.addColorStop(0,"rgb(255,0,0)"),M.addColorStop(.28,"rgb(170,0,0)"),M.addColorStop(1,"rgb(26,0,0)"),a.fillStyle=M,a.fillRect((v-m)*c,(S-d/2)*c,2*m*c,d*c),a.fillRect((v-d/2)*c,(S-m)*c,d*c,2*m*c),f("dark",v+m*.62,S+d/2,.003,E*.9)}for(let[v,S]of[[.055,.055],[.945,.055],[.055,.945],[.945,.945]])f("sub",v-.016,S-.0025,.032,.005),f("sub",v-.0025,S-.016,.005,.032);for(let[v,S]of[[r,"#0b111b"],[o,"rgb(0,110,0)"]])v.font=`600 ${.016*c}px Inter, "Helvetica Neue", Arial, sans-serif`,v.fillStyle=S,v.textBaseline="middle",v.fillText("NDR-25Q  \xB7  REV C",.62*c,.975*c);return await t.maybeYield("chip qubits"),{map:qi(e,{srgb:!0,aniso:8}),mr:qi(n,{aniso:8}),em:qi(s,{aniso:8}),layout:y}}async function Nh(i,t,e=bc,n=9){let s=on(n),r=Ci(i),o=Ci(i),a=r.getContext("2d"),c=o.getContext("2d"),l=i,u=["#d6b06a","rgb(0,62,255)"],f=["#0c1117","rgb(0,150,0)"],h=(y,m)=>{a.fillStyle=y[0],c.fillStyle=y[1],m(a),m(c)},p=(y,m,d)=>{for(let[E,R]of[[a,y[0]],[c,y[1]]]){E.strokeStyle=R,E.lineWidth=m*l,E.lineJoin="round",E.beginPath(),E.moveTo(d[0][0]*l,d[0][1]*l);for(let v=1;v<d.length;v++)E.lineTo(d[v][0]*l,d[v][1]*l);E.stroke()}};h(f,y=>y.fillRect(0,0,l,l)),h(u,y=>y.fillRect(.012*l,.012*l,.976*l,.976*l)),h(f,y=>y.fillRect(.255*l,.255*l,.49*l,.49*l)),h(u,y=>y.fillRect(.262*l,.262*l,.476*l,.476*l));let g=[];for(let y=0;y<4;y++){let m=t[y];for(let d=0;d<m;d++){let E=.36+(d+.5)/m*.28,R=.2+(d+.5)/m*.6,v;y===0?v=[[E,.262],[E,.2],[R,.1],[R,0]]:y===1?v=[[E,.738],[E,.8],[R,.9],[R,1]]:y===2?v=[[.262,E],[.2,E],[.1,R],[0,R]]:v=[[.738,E],[.8,E],[.9,R],[1,R]],p(f,.024,v),p(u,.011,v);for(let S=0;S<v.length-1;S++){let[M,A]=v[S],[x,T]=v[S+1],P=Math.hypot(x-M,T-A),D=-(T-A)/P,N=(x-M)/P,G=Math.max(1,Math.floor(P/.022));for(let F=0;F<=G;F++){let H=F/G,W=M+(x-M)*H,J=A+(T-A)*H;g.push([W+D*.026,J+N*.026],[W-D*.026,J-N*.026])}}}}for(let y=0;y<220;y++){let m=.03+s()*.94,d=.03+s()*.94;m>.22&&m<.78&&d>.22&&d<.78||g.push([m,d])}for(let[y,m]of g)y<.02||y>.98||m<.02||m>.98||y>.25&&y<.75&&m>.25&&m<.75||h(f,d=>{d.beginPath(),d.arc(y*l,m*l,.0055*l,0,6.2832),d.fill()});for(let[y,m]of[[.06,.06],[.94,.06],[.06,.94],[.94,.94]])h(f,d=>{d.beginPath(),d.arc(y*l,m*l,.03*l,0,6.2832),d.fill()});return await e.maybeYield("pcb"),{map:qi(r,{srgb:!0,aniso:8}),mr:qi(o,{aniso:8})}}var Pi=Math.PI/180,Yt=[{key:"300K",label:"NADIR  \xB7  STAGE 01  \xB7  300 K",y:3.5,R:2.05,t:.2,bore:.3},{key:"50K",label:"NADIR  \xB7  STAGE 02  \xB7  50 K",y:2.25,R:1.88,t:.13,bore:.3},{key:"4K",label:"NADIR  \xB7  STAGE 03  \xB7  4 K",y:1,R:1.68,t:.13,bore:.28},{key:"STILL",label:"NADIR  \xB7  STAGE 04  \xB7  STILL",y:-.3,R:1.44,t:.12,bore:.24},{key:"CP",label:"NADIR  \xB7  STAGE 05  \xB7  100 mK",y:-1.3,R:1.26,t:.11,bore:.26},{key:"MXC",label:"NADIR  \xB7  STAGE 06  \xB7  MXC",y:-2.35,R:1.1,t:.13,bore:0}],an=18*Pi,Ha=-3.22,Ec={cuni:{tint:[.66,.61,.56],rough:.32,r:.0105},ss:{tint:[.56,.57,.585],rough:.38,r:.0078},nbti:{tint:[.49,.5,.53],rough:.28,r:.0075},cu:{tint:[.93,.62,.5],rough:.3,r:.0105}},qg=[{sc:45,outer:["cuni","cuni","nbti","nbti","nbti"],inner:["ss","ss","ss","ss","cu"],size:.8},{sc:105,outer:["ss","ss","ss","ss","ss"],inner:["cuni","cuni","nbti","nbti","nbti"],size:.75},{sc:165,outer:["cuni","cuni","cuni","cuni","cu"],inner:["ss","ss","ss","ss","ss"],size:.85},{sc:225,outer:["cuni","cuni","nbti","nbti","nbti"],inner:null,size:1},{sc:285,outer:["ss","ss","cuni","cuni","cuni"],inner:["ss","ss","cu","cu","cu"],size:.75},{sc:345,outer:["cuni","cuni","cuni","cuni","cuni"],inner:["ss","ss","nbti","nbti","nbti"],size:.8}],Yg=345,Uh=new C,pe=(i,t,e)=>new C(i*Math.sin(t),e,i*Math.cos(t));function Zg(i,t){let e=i.attributes.position,n=new Float32Array(e.count*3);for(let s=0;s<e.count;s++){Uh.fromBufferAttribute(e,s);let r=t(Uh);n[s*3]=r[0],n[s*3+1]=r[1],n[s*3+2]=r[2]}return i.setAttribute("color",new be(n,3)),i}function Jg(i){if(!i.index){let t=i.attributes.position.count,e=new Uint32Array(t);for(let n=0;n<t;n++)e[n]=n;i.setIndex(new be(e,1))}return i}function Qt(i,t,e){t&&i.applyMatrix4(t);for(let n of Object.keys(i.attributes))n!=="position"&&n!=="normal"&&i.deleteAttribute(n);return Jg(i),Zg(i,typeof e=="function"?e:()=>e||[1,1,1])}var Fh=new sn,$g=new Tn,Va=new C(1,1,1),he=(i,t=0,e=0,n=0,s=1)=>(Fh.setFromEuler($g.set(e,t,n,"YXZ")),Va.set(s,s,s),new te().compose(i,Fh,Va)),Is=i=>(i.index?i.index.count:i.attributes.position.count)/3;function Kg(i,t,e){let n=[],s=[],r=[],o=[],a=[],c=0;for(let u=0;u<i.length-1;u++){let[f,h]=i[u],[p,g]=i[u+1],y=p-f,m=g-h,d=Math.hypot(y,m);if(d<1e-7)continue;let E=-m/d,R=y/d;for(let v=0;v<=t;v++){let S=v/t*Math.PI*2,M=Math.sin(S),A=Math.cos(S);for(let[x,T]of[[f,h],[p,g]])n.push(x*M,T,x*A),s.push(E*M,R,E*A),r.push(x*M/(2*e)+.5,x*A/(2*e)+.5),o.push(A,0,-M,1)}for(let v=0;v<t;v++){let S=c+v*2,M=S+1,A=S+2,x=S+3;a.push(S,M,A,M,x,A)}c+=(t+1)*2}let l=new we;return l.setAttribute("position",new de(n,3)),l.setAttribute("normal",new de(s,3)),l.setAttribute("uv",new de(r,2)),l.setAttribute("tangent",new de(o,4)),l.setIndex(a),l}function Oh(i,t,e,n,s,r,o){let a=new Bn(i,t,e,n,!1),c=a.attributes.uv,l=c.count,u=new Float32Array(l*2);for(let f=0;f<l;f++)u[f*2]=r>=0?r+c.getX(f):-1,u[f*2+1]=o;return Qt(a,null,s),a.setAttribute("aCab",new be(u,2)),a}async function Bh({preset:i,U:t,mats:e,slicer:n}){let s=on(20261011),r=new mn;r.name="machine";let o=[],a=[],c=[],l=[],u={plates:0,cables:0,connectors:0,misc:0},f=[],h=[],p=I=>(r.add(I),h.push(I),I),g=[15,75,135,195,255,315].map(I=>I*Pi),y=225*Pi,m=[];for(let I of qg){let O=I.sc===225;m.push({sc:I.sc,ang:(I.sc-11+s()*4)*Pi,f:.74+s()*.06,n:O?Math.ceil(i.nOuter/2):i.nOuter,layout:"arc",outer:!0,types:I.outer,size:1}),I.inner&&m.push({sc:I.sc,ang:(I.sc+15+s()*4)*Pi,f:.5+s()*.05,n:i.nInner,layout:s()<.5?"arc":"radial",outer:!1,types:I.inner,size:I.size})}let d=[];for(let I of m)for(let O=0;O<I.n;O++){let K=O-(I.n-1)/2,tt=I.ang,et=I.f;I.layout==="arc"?tt+=K*(.046/(I.f*1.6)):(et+=K*(.05/1.6),tt+=(O%2?1:-1)*.012),d.push({g:I,k:O,th:tt,f:et,jit:.97+s()*.06,rj:(s()-.5)*.06,pulse:!1})}let E=m.find(I=>I.outer&&I.sc===Yg),R=Math.max(0,Math.floor((E.n-1)/2)&-2),v=d.find(I=>I.g===E&&I.k===R);v.pulse=!0;let S=(I,O)=>O===2||O===3||O===5?I.k%2===0:O===4&&I.pulse,M=(I,O)=>{let K=on(Math.floor(I.ang*1e3)*7+O*131)(),tt=on(Math.floor(I.ang*1e3)*3+O*17)();return I.outer?O===0?K<.6?{type:"s",bulge:.28+tt*.22,twist:(tt-.5)*.25}:{type:"loop",loopR:.085+tt*.03,at:.45}:O===1?K<.5?{type:"loop",loopR:.08+tt*.03,at:.5}:{type:"s",bulge:.22+tt*.18,twist:(tt-.5)*.35}:O===2?K<.45?{type:"s",bulge:.18+tt*.2,twist:(tt-.5)*.5}:K<.75?{type:"coil",coilR:.034,turns:1.6,at:.45}:{type:"loop",loopR:.09,at:.55}:O===3?K<.5?{type:"s",bulge:.12+tt*.12,twist:(tt-.5)*.3}:{type:"loop",loopR:.075,at:.5}:K<.5?{type:"s",bulge:.1+tt*.1,twist:0}:{type:"coil",coilR:.032,turns:1.6,at:.5}:O===0?{type:"s",bulge:-.06-tt*.06,twist:(tt-.5)*.7}:O===1?K<.5?{type:"s",bulge:.05,twist:.35*(tt<.5?1:-1)}:{type:"coil",coilR:.04,turns:2,at:.5}:O===2?{type:"s",bulge:.08+tt*.06,twist:(tt-.5)*.4}:O===3?K<.6?{type:"s",bulge:.04,twist:.25}:{type:"loop",loopR:.06,at:.5}:{type:"s",bulge:.06,twist:-.2}};function A(I,O,K,tt,et){let xt=[pe(I.r,I.th,I.y),pe(I.r,I.th,I.y-.042)],vt=I.y-.07,ft=O.y+.07,_t=on(tt.k*97+Math.floor(tt.th*1e4))()-.5;if(K.type==="s"){let At=K.bulge*(1+_t*.12),L=9;for(let It=0;It<=L;It++){let Mt=It/L,w=Mt*Mt*(3-2*Mt),_=Math.pow(Math.sin(Math.PI*Mt),1.4);xt.push(pe(ie(I.r,O.r,w)+At*_,I.th+K.twist*Math.sin(Math.PI*Mt),ie(vt,ft,Mt)))}}else if(K.type==="loop"){let At=(tt.k-(tt.g.n-1)/2)*.022*(tt.g.ang>3.1?-1:1),L=ie(vt,ft,De(K.at+At,.25,.75)+_t*.02),It=ie(I.r,O.r,K.at),Mt=K.loopR;xt.push(pe(ie(I.r,It,.5),I.th,ie(vt,L,.45)));let w=16;for(let _=0;_<=w;_++){let U=_/w*Math.PI*2,k=et*2.6*(_/w);xt.push(pe(It+Mt-Mt*Math.cos(U),I.th+k/It,L-Mt*Math.sin(U)))}xt.push(pe(ie(It,O.r,.5),O.th+et*2.6/It,ie(L,ft,.55))),xt.push(pe(O.r,O.th,ft))}else if(K.type==="coil"){if(tt.k%3!==0)return A(I,O,{type:"s",bulge:.04,twist:0},tt,et);let At=ie(vt,ft,K.at-.15),L=ie(I.r,O.r,K.at-.15);xt.push(pe(ie(I.r,L,.5),I.th,ie(vt,At,.5)));let It=K.coilR,Mt=K.turns,w=.07,_=Math.round(12*Mt),U=new C(Math.sin(I.th),0,Math.cos(I.th)),k=new C(Math.cos(I.th),0,-Math.sin(I.th));for(let ht=0;ht<=_;ht++){let ot=ht/_*Mt*Math.PI*2,V=L+It,Z=new C().copy(U).multiplyScalar(V-It*Math.cos(ot)).addScaledVector(k,It*Math.sin(ot));Z.y=At-w*(ot/(Math.PI*2)),xt.push(Z)}let Y=At-w*Mt;xt.push(pe(ie(L,O.r,.5),O.th,ie(Y,ft,.5))),xt.push(pe(O.r,O.th,ft))}return xt.push(pe(O.r,O.th,O.y+.07*.4),pe(O.r,O.th,O.y)),xt}let x=I=>{for(let O=0;O<Yt.length-1;O++){let K=Yt[O],tt=Yt[O+1];if(I<=K.y&&I>=tt.y)return ie(tt.R,K.R,(I-tt.y)/(K.y-tt.y))}return I>Yt[0].y?Yt[0].R:Yt[5].R},T=(I,O,K)=>{let tt=Math.hypot(I.x,I.z),et=x(I.y),pt=ie(.3,1,Ie(.25,.92,tt/et));return pt*=ie(.5,1,Ie(0,.32,O-I.y)),pt*=ie(.75,1,Ie(0,.2,I.y-K)),De(pt,.18,1)},P=[],D=[],N=[],G=[],F=[],H=i.aniso>0;for(let I=0;I<Yt.length;I++){n.step("plates",.05+.25*(I/Yt.length));let O=Yt[I],K=[];for(let U of d){let k=U.f*O.R;K.push({x:k*Math.sin(U.th),z:k*Math.cos(U.th),r:.011,kind:"conn"})}let tt=Math.round(O.R*22);for(let U=0;U<tt;U++){let k=U/tt*Math.PI*2+.07;K.push({x:.975*O.R*Math.sin(k),z:.975*O.R*Math.cos(k),r:.0075,kind:"bolt"})}for(let U=0;U<5;U++){let k=s()*Math.PI*2,Y=(.3+s()*.45)*O.R;K.push({x:Y*Math.sin(k),z:Y*Math.cos(k),r:.04+s()*.05,kind:"port"})}for(let U=0;U<7;U++){let k=s()*Math.PI*2,Y=(.25+s()*.6)*O.R,ht=Y*Math.sin(k),ot=Y*Math.cos(k),V=3+Math.floor(s()*4),Z=2+Math.floor(s()*3);for(let ct=0;ct<V;ct++)for(let bt=0;bt<Z;bt++)K.push({x:ht+(ct-V/2)*.05,z:ot+(bt-Z/2)*.05,r:.006,kind:"tap"})}let et=O.R*.955,pt=await Lh({R:O.R,bore:O.bore,size:i.tex,holes:K,label:O.label,seed:100+I,stepR:et},n);f.push(pt.map,pt.rough);let xt=.013,vt=.007,ft=[],_t=O.bore>0?O.bore+xt:0;ft.push([_t,0],[et,0],[et,-vt],[O.R-xt,-vt],[O.R,-vt-xt],[O.R,-O.t+xt],[O.R-xt,-O.t],[_t,-O.t]),O.bore>0&&ft.push([O.bore,-O.t+xt],[O.bore,-xt],[O.bore+xt,0]);let At=Kg(ft,i.plateSegs,O.R);H||At.deleteAttribute("tangent");let L={color:new qt().setRGB(jn[0],jn[1],jn[2]),metalness:1,roughness:1,map:pt.map,roughnessMap:pt.rough};i.bump!==!1&&(L.bumpMap=pt.rough,L.bumpScale=.6);let It=H?new Hi({...L,anisotropy:i.aniso,anisotropyRotation:Math.PI/2}):new qe(L);In(It,t,{bounce:.85,octaves:i.frostOctaves});let Mt=new _e(At,It);Mt.position.y=O.y,Mt.name="plate-"+O.key,p(Mt),P.push(Mt),u.plates+=Is(At);for(let U of d){let k=U.f*O.R,Y=k*Math.sin(U.th),ht=k*Math.cos(U.th),ot=ie(.45,1,Ie(.3,.9,U.f)),V=S(U,I);(I>0||U.g.outer)&&(V?G:D).push({x:Y,y:O.y,z:ht,rot:s()*1.05,ao:ot}),V&&U.pulse&&F.push(new C(Y,O.y+.05,ht)),I<Yt.length-1&&N.push({x:Y,y:O.y-O.t,z:ht,rot:s()*1.05,ao:ot*.8})}let w=Math.round(O.R*11),_=new se(.016,.016,.012,10,1,!1);for(let U=0;U<w;U++){let k=U/w*Math.PI*2+.07+Math.PI/w,Y=.975*O.R;o.push(Qt(_.clone(),he(new C(Y*Math.sin(k),O.y-vt+.006,Y*Math.cos(k))),[.9,.9,.9]))}_.dispose(),await n.yield("plate "+O.key)}for(let I=0;I<Yt.length-1;I++){let O=Yt[I],K=Yt[I+1],tt=O.y-O.t,et=K.y,pt=tt-et;for(let xt=0;xt<g.length;xt++){let vt=g[xt],ft=.9*K.R,_t=ft*Math.sin(vt),At=ft*Math.cos(vt),L=new se(.026,.026,pt,i.rodSegs,1,!0);o.push(Qt(L,he(new C(_t,(tt+et)/2,At)),[1,1,1]));let It=new se(.043,.043,.05,i.rodSegs,1,!1);o.push(Qt(It.clone(),he(new C(_t,tt-.025,At)),[.85,.85,.85])),o.push(Qt(It,he(new C(_t,et+.025,At)),[.85,.85,.85]))}}await n.maybeYield("rods");let W=[],J=[],at=[],j=[];for(let I=0;I<Yt.length-1;I++){n.step("cables",.32+.4*(I/(Yt.length-1)));let O=Yt[I],K=Yt[I+1],tt=[],et=O.y-O.t,pt=K.y,xt=new Map;for(let _t of d){let At=M(_t.g,I),L=Ec[_t.g.types[I]],It=L.r*_t.g.size*(_t.g.outer?1:.95),Mt=S(_t,I+1),w={r:_t.f*O.R,th:_t.th,y:et-.032},_={r:_t.f*K.R,th:_t.th,y:pt+(Mt?.088:.032)},U=A(w,_,At,_t,It),k=new gn(U,!1,"centripetal",.5),Y=k.getLength(),ht=At.type==="loop"?22:At.type==="coil"&&_t.k%3===0?34:0,ot=Math.round(De((Y*30+ht)*i.density,10,120)),V=L.tint,Z=_t.jit,ct=V[0]*Z,bt=V[1]*Z,mt=V[2]*Z;if(tt.push(Oh(k,ot,It,i.radial,gt=>{let Tt=T(gt,et,pt);return[ct*Tt,bt*Tt,mt*Tt]},_t.pulse?I:-1,De(L.rough+_t.rj,.18,.6))),_t.pulse)for(let Tt=I===0?0:1;Tt<=40;Tt++)J.push({s:I+Tt/40,p:k.getPointAt(Tt/40)});if(At.type==="s"){let gt=xt.get(_t.g);gt||xt.set(_t.g,gt=[]),gt.push({curve:k,rad:It,k:_t.k})}(I<3||s()<.5)&&j.push({curve:k,rad:It,gap:I}),await n.maybeYield("cables")}for(let[_t,At]of xt)for(let L=0;L+1<At.length;L+=2)at.push({gap:I,g:_t,a:At[L],b:At[L+1]});let vt=Xi(tt,!1);tt.forEach(_t=>_t.dispose());let ft=new _e(vt,e.cable);ft.name="cables-"+I,p(ft),W.push(ft),u.cables+=Is(vt),await n.yield("cables merge")}if(i.clamps){let I=new se(.0085,.0085,.008,8,1,!1);for(let O=0;O<Yt.length-1;O++){let K=Yt[O],tt=K.y-K.t-.064;for(let et of m){let pt=et.layout==="radial",xt=et.f*K.R,vt,ft,_t,At;if(pt)vt=(et.n-1)*(.05/1.6)*K.R+.06,ft=.062,_t=xt,At=et.ang+Math.PI/2;else{let _=(et.n-1)/2*(.046/(et.f*1.6)),U=xt*(1-Math.cos(_));vt=2*xt*Math.sin(_)+.06,ft=.034+U,_t=xt-U/2,At=et.ang}let L=pe(_t,et.ang,tt),It=new Ge(vt,.026,ft);o.push(Qt(It,he(L,At),[.78,.78,.78]));let Mt=new C(Math.cos(At),0,-Math.sin(At)),w=new C(Math.sin(At),0,Math.cos(At));for(let _ of[-1,1]){let U=L.clone().addScaledVector(Mt,_*(vt/2-.016)),k;pt?(U.y-=.017,k=new te().makeTranslation(U.x,U.y,U.z)):(U.addScaledVector(w,ft/2+.004),k=new te().makeBasis(Mt,w,new C().crossVectors(Mt,w)).setPosition(U)),o.push(Qt(I.clone(),k,[.7,.7,.7]))}}await n.maybeYield("clamps")}I.dispose()}let st=on(77);if(i.ties){let I=new C,O=new C,K=new C,tt=new C,et=new C,pt=0;for(let xt of at){if(st()>.32||pt>40)continue;let vt=.24+st()*.12;if(xt.a.curve.getPointAt(vt,I),xt.b.curve.getPointAt(vt,O),I.distanceTo(O)>.09)continue;xt.a.curve.getTangentAt(vt,K);let ft=I.clone().add(O).multiplyScalar(.5);tt.subVectors(O,I);let _t=tt.length()/2+xt.a.rad+.004;tt.addScaledVector(K,-tt.dot(K)).normalize(),et.crossVectors(K,tt).normalize();let At=Math.max(xt.a.rad,xt.b.rad)+.004,L=[];for(let Mt=0;Mt<18;Mt++){let w=Mt/18*Math.PI*2;L.push(ft.clone().addScaledVector(tt,Math.cos(w)*_t).addScaledVector(et,Math.sin(w)*At))}let It=new Bn(new gn(L,!0),18,.0026,4,!0);l.push(Qt(It,null,[.022,.022,.026])),pt++}await n.maybeYield("ties")}if(i.labels>0){let I=[[.8,.76,.64],[.8,.76,.64],[.86,.86,.84],[.78,.55,.1],[.55,.06,.05],[.07,.16,.5]],O=new C,K=new C,tt=new C(0,1,0),et=new C,pt=new sn,xt=j.filter(()=>st()<.5).slice(0,i.labels);for(let vt=0;vt<xt.length;vt++){let ft=xt[vt],_t=.06+st()*.05;ft.curve.getPointAt(_t,O),ft.curve.getTangentAt(_t,K),pt.setFromUnitVectors(tt,K);let At=I[Math.floor(st()*I.length)],L=new se(ft.rad*1.42,ft.rad*1.42,.03,8,1,!1);if(l.push(Qt(L,new te().compose(O,pt,Va.set(1,1,1)),At)),vt%3===0){et.set(O.x,0,O.z).normalize();let It=new Ge(.0016,.026,.032),Mt=new te().compose(O.clone().addScaledVector(et,ft.rad*1.42+.017),pt,Va.set(1,1,1)),w=new te().makeRotationY(Math.atan2(et.x,et.z));It.applyMatrix4(w),It.applyMatrix4(new te().makeTranslation(Mt.elements[12],Mt.elements[13],Mt.elements[14])),l.push(Qt(It,null,[.84,.81,.7]))}}await n.maybeYield("labels")}{let I=Yt[0],O=[];for(let et of m)if(et.outer)for(let pt=0;pt<4;pt++){let xt=et.ang+(pt-1.5)*.05,vt=et.f*I.R,ft=[pe(vt,xt,I.y+.06),pe(vt,xt,I.y+.25),pe(vt*.92,xt+.04,I.y+1.2),pe(vt*.75,xt+.08,I.y+2.6),pe(vt*.62,xt+.1,I.y+4.5)],_t=new gn(ft,!1,"centripetal"),At=new Bn(_t,Math.round(26*i.density)+6,.02,i.radial,!1);O.push(Qt(At,null,L=>{let Mt=.05+.1*(1-Ie(I.y+.5,I.y+3.5,L.y));return[Mt,Mt*1.04,Mt*1.1]}))}let K=Xi(O,!1);O.forEach(et=>et.dispose());let tt=new _e(K,e.dark);tt.name="rt-looms",p(tt),u.cables+=Is(K);for(let et of m){if(!et.outer)continue;let pt=et.f*I.R,xt=new Ge(.34,.07,.15);o.push(Qt(xt,he(pe(pt,et.ang,I.y+.035),et.ang),[.95,.95,.95]))}for(let et=0;et<3;et++){let pt=et/3*Math.PI*2+.5,xt=new se(.04,.04,6,i.rodSegs,1,!0);o.push(Qt(xt,he(pe(1.78,pt,I.y+3)),vt=>{let ft=1-Ie(I.y+.3,I.y+4,vt.y);return[ft,ft,ft]}))}}await n.maybeYield("looms");{let I=i.rodSegs+8;for(let ot=0;ot<3;ot++){let V=Yt[ot],Z=Yt[ot+1],ct=V.y-V.t,bt=Z.y,mt=[],gt=ct-bt;if(i.bellows){let Ht=Math.floor(gt/.04)*6;for(let z=0;z<=Ht;z++){let yt=bt+z/Ht*gt,it=(yt-bt)/.04*Math.PI*2;mt.push(new Pt(.15+.011*(.5+.5*Math.cos(it)),yt))}}else mt.push(new Pt(.155,bt),new Pt(.155,ct));let Tt=new ar(mt,I);a.push(Qt(Tt,null,Ft=>{let Ht=.42*ie(.5,1,Ie(0,.25,ct-Ft.y))*ie(.6,1,Ie(0,.3,Ft.y-bt));return[Ht,Ht,Ht]}));for(let Ft of[ct-.02,bt+.02]){let Ht=new se(.21,.21,.04,I,1,!1);o.push(Qt(Ht,he(new C(0,Ft,0)),[.9,.9,.9]))}await n.maybeYield("bellows")}let O=1.12,K=new se(.11,.11,Yt[0].y-Yt[0].t-Yt[1].y,I,1,!0);a.push(Qt(K,he(pe(O,y,(Yt[0].y-Yt[0].t+Yt[1].y)/2)),[.9,.9,.9]));let tt=new se(.065,.065,Yt[1].y-Yt[1].t-Yt[2].y,I,1,!0);a.push(Qt(tt,he(pe(O*.92,y,(Yt[1].y-Yt[1].t+Yt[2].y)/2)),[.9,.9,.9]));for(let[ot,V,Z]of[[Yt[1].y+.04,.19,O],[Yt[2].y+.035,.13,O*.92],[Yt[0].y-Yt[0].t-.03,.17,O],[Yt[1].y-Yt[1].t-.03,.11,O*.92]]){let ct=new se(V,V,.07,I,1,!1);o.push(Qt(ct,he(pe(Z,y,ot)),[.95,.95,.95]))}let et=Yt[3],pt=new se(.34,.34,.26,I+8,1,!1);o.push(Qt(pt,he(new C(0,et.y-et.t-.13,0)),ot=>{let V=ie(.6,1,Ie(et.y-et.t,et.y-et.t-.2,ot.y));return[V,V,V]}));let xt=new se(.38,.38,.03,I+8,1,!1);o.push(Qt(xt,he(new C(0,et.y-et.t-.27,0)),[.9,.9,.9]));let vt=Yt[5],ft=et.y-et.t-.29,_t=vt.y+.38,At=[],L=7.5;for(let ot=0;ot<=120;ot++){let V=ot/120,Z=V*L*Math.PI*2;At.push(new C(Math.sin(Z)*.2,ie(ft,_t,V),Math.cos(Z)*.2))}let It=new Bn(new gn(At),Math.round(260*i.density),.013,i.radial,!1);a.push(Qt(It,null,[.55,.55,.55]));let Mt=new se(.05,.05,ft-_t,10,1,!0);a.push(Qt(Mt,he(new C(0,(ft+_t)/2,0)),[.3,.3,.3]));let w=new se(.3,.3,.34,I+8,1,!1);o.push(Qt(w,he(new C(0,vt.y+.17,0)),[1,1,1]));let _=new se(.34,.34,.035,I+8,1,!1);o.push(Qt(_,he(new C(0,vt.y+.355,0)),[.95,.95,.95]));let U=Yt[4];for(let[ot,V]of[[y,.56],[y+.42,.6]]){for(let ct=0;ct<6;ct++){let bt=U.y-U.t-.12-ct*.12,mt=new se(.11,.11,.07,I,1,!1);a.push(Qt(mt,he(pe(V,ot,bt)),[.85,.85,.85]))}let Z=new se(.018,.018,U.y-U.t-vt.y,8,1,!0);a.push(Qt(Z,he(pe(V,ot,(U.y-U.t+vt.y)/2)),[.7,.7,.7]))}let k=Yt[2];for(let ot of[30,100,170,300]){let V=ot*Pi,Z=new li(.16,.06,.09,2,.006);o.push(Qt(Z,he(pe(.52,V,k.y+.03),V),[1,1,1]));for(let ct of[-1,1]){let bt=new se(.011,.011,.03,8,1,!1),mt=new C(Math.cos(V),0,-Math.sin(V)),gt=pe(.52,V,k.y+.03).addScaledVector(mt,ct*.093),Tt=new te().makeRotationFromQuaternion(new sn().setFromUnitVectors(new C(0,1,0),mt)).setPosition(gt);o.push(Qt(bt,Tt,[.85,.85,.85]))}}let Y=new se(.12,.12,.3,I,1,!1);c.push(Qt(Y,he(pe(.55*Yt[3].R,330*Pi,Yt[3].y+.15)),[1,1,1]));let ht=new se(.125,.125,.025,I,1,!1);o.push(Qt(ht,he(pe(.55*Yt[3].R,330*Pi,Yt[3].y+.31)),[.95,.95,.95]))}await n.yield("column");let rt={},Dt=[];{n.step("holder",.76);let I=Yt[5],O=I.y-I.t,K=new C(Math.sin(an),0,Math.cos(an)),tt=new C(Math.cos(an),0,-Math.sin(an)),et=.62,pt=.13,xt=new C(0,Ha,0).addScaledVector(K,.08),vt=(V,Z,ct)=>new C().copy(xt).addScaledVector(tt,V).addScaledVector(K,ct).add(new C(0,Z,0));Object.assign(rt,{face:K,right:tt,Wd:et,Dd:pt,center:xt,L2W:vt});let ft=Ha-.2,_t=-pt/2-.027,At=new li(.17,O-ft,.05,2,.008);o.push(Qt(At,he(vt(0,(O+ft)/2-Ha,_t),an),[.9,.9,.9]));let L=O-.04-Ha,It=new li(.3,.08,.1,2,.01);o.push(Qt(It,he(vt(0,L,_t),an),[.82,.82,.82]));for(let V of[-.105,.105]){let Z=new se(.016,.016,.014,14,1,!1);o.push(Qt(Z,he(vt(V,L,_t+.057),an,Math.PI/2),[.8,.8,.8]));let ct=new se(.007,.007,.004,6,1,!1);c.push(Qt(ct,he(vt(V,L,_t+.063),an,Math.PI/2),[1,1,1]))}for(let V of[-.045,.045]){let Z=new se(.012,.012,.01,12,1,!1);o.push(Qt(Z,he(vt(V,et/2+.07,_t+.03),an,Math.PI/2),[.8,.8,.8]));let ct=new se(.005,.005,.003,6,1,!1);c.push(Qt(ct,he(vt(V,et/2+.07,_t+.035),an,Math.PI/2),[1,1,1]))}let Mt=new li(et,et,pt,2,.012);o.push(Qt(Mt,he(vt(0,0,0),an),[1,1,1]));let w=.055,_=.028;rt.fw=w,rt.fh=_;for(let[V,Z,ct,bt]of[[0,et/2-w/2,et,w],[0,-et/2+w/2,et,w],[et/2-w/2,0,w,et-2*w],[-et/2+w/2,0,w,et-2*w]]){let mt=new li(ct,bt,_,2,.006);o.push(Qt(mt,he(vt(V,Z,pt/2+_/2),an),[.95,.95,.95]))}for(let[V,Z]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let ct=new se(.017,.017,.012,12,1,!1);o.push(Qt(ct,he(vt(V*(et/2-w/2),Z*(et/2-w/2),pt/2+_+.006),an,Math.PI/2),[.8,.8,.8]));let bt=new se(.008,.008,.004,6,1,!1);c.push(Qt(bt,he(vt(V*(et/2-w/2),Z*(et/2-w/2),pt/2+_+.012),an,Math.PI/2),[1,1,1]))}let U=[];for(let V=0;V<4;V++)U.push({x:-.2+V*.133,y:et/2,dir:[0,1]});for(let V=0;V<4;V++)U.push({x:et/2,y:-.2+V*.133,dir:[1,0]});let k=[],Y=0;for(let V of U){let Z=vt(V.x,V.y,0),ct=new C().addScaledVector(tt,V.dir[0]).add(new C(0,V.dir[1],0)),bt=new te().makeBasis(new C().crossVectors(ct,K).normalize(),ct.clone().normalize(),K.clone()),mt=new se(.02,.02,.05,6,1,!1);mt.applyMatrix4(new te().makeTranslation(0,.025,0)),mt.applyMatrix4(bt),mt.applyMatrix4(new te().makeTranslation(Z.x,Z.y,Z.z)),o.push(Qt(mt,null,[1,1,1]));let gt=new se(.012,.012,.03,8,1,!1);gt.applyMatrix4(new te().makeTranslation(0,.065,0)),gt.applyMatrix4(bt),gt.applyMatrix4(new te().makeTranslation(Z.x,Z.y,Z.z)),o.push(Qt(gt,null,[.9,.9,.9]));let Tt=Z.clone().addScaledVector(ct,.075),Ft=Tt.clone().addScaledVector(ct,.1),Ht=Math.atan2(Tt.x,Tt.z)+(V.dir[1]?(Y-1.5)*.12:V.dir[0]*.35),z=V.dir[1]?.42+Y%2*.12:.62+Y%3*.08,yt=Y%2===0,it=pe(z,Ht,O-.135),Et=it.clone().add(new C(0,-.06,0)),wt=new C(ie(Ft.x,it.x,.4),ie(Ft.y,Et.y,.5),ie(Ft.z,it.z,.4)),ut=new gn([Tt,Ft,wt,Et,it],!1,"centripetal"),kt=Y%3===0?Ec.cu:Ec.nbti,zt=kt.tint;if(k.push(Oh(ut,Math.round(40*i.density)+8,.0092,i.radial,()=>zt,-1,kt.rough)),yt){let ge=new li(.1,.12,.085,2,.008);a.push(Qt(ge,he(pe(z,Ht,O-.065),Ht),[.62,.62,.64]));let fe=new se(.03,.03,.02,14,1,!1);c.push(Qt(fe,he(pe(z+.048,Ht,O-.065),Ht,Math.PI/2),[1,1,1])),Dt.push(pe(z+.05,Ht,O-.065))}else{let ge=new se(.022,.022,.13,10,1,!1);a.push(Qt(ge,he(pe(z,Ht,O-.07)),[.9,.9,.9]))}Y++}let ht=Xi(k,!1);k.forEach(V=>V.dispose());let ot=new _e(ht,e.cable);ot.name="cables-tail",p(ot),W.push(ot),u.cables+=Is(ht);for(let V=0;V<10;V++){let Z=an+Math.PI+(V-4.5)*.3,ct=new se(.024,.024,.22,10,1,!1);a.push(Qt(ct,he(pe(.78,Z,O-.11)),[.85,.85,.85]))}}await n.yield("holder");let Nt=(I,O,K)=>{let tt=new se(I,I,O,6,1,!0);tt.translate(0,K,0);let et=new sr(I,6);return et.rotateX(-Math.PI/2),et.rotateY(Math.PI/2),et.translate(0,K+O/2,0),[tt,et]},ne=I=>I.map(O=>(O.deleteAttribute("uv"),O.toNonIndexed())),Jt=(()=>{let I=[...Nt(.021,.012,.006)],O=new se(.0125,.0145,.026,6,1,!0);return O.translate(0,.025,0),I.push(O),Xi(ne(I),!1)})(),$t=(()=>{let I=[...Nt(.021,.012,.006)],O=new se(.0165,.0165,.058,8,1,!0);O.translate(0,.041,0),I.push(O),I.push(...Nt(.019,.01,.075));let K=new se(.0125,.0125,.008,6,1,!0);return K.translate(0,.084,0),I.push(K),Xi(ne(I),!1)})(),Q=(I,O,K,tt,et)=>{let pt=new _i(I,e.conn,O.length),xt=new te,vt=new sn,ft=new Tn,_t=new C(1,1,1),At=new C,L=new qt;return O.forEach((It,Mt)=>{ft.set(K?Math.PI:0,It.rot,0,"YXZ"),vt.setFromEuler(ft),At.set(It.x,It.y,It.z),xt.compose(At,vt,_t),pt.setMatrixAt(Mt,xt),et&&Mt%et===0?L.setRGB(.82*It.ao,.84*It.ao,.88*It.ao):L.setRGB(jn[0]*It.ao,jn[1]*It.ao,jn[2]*It.ao),pt.setColorAt(Mt,L)}),pt.instanceMatrix.needsUpdate=!0,pt.instanceColor.needsUpdate=!0,pt.name=tt,pt.computeBoundingSphere(),p(pt),u.connectors+=Is(I)*O.length,pt};Q(Jt,D,!1,"sma-top",5),Q(Jt,N,!0,"sma-bottom",7),Q($t,G,!1,"attenuators",3),await n.maybeYield("connectors");let nt=async(I,O,K)=>{if(!I.length)return null;let tt=Xi(I,!1);I.forEach(pt=>pt.dispose());let et=new _e(tt,O);return et.name=K,p(et),u.misc+=Is(tt),await n.maybeYield("merge "+K),et},St={goldParts:o,silverParts:a,darkParts:c,dielParts:l};J.sort((I,O)=>I.s-O.s);let Ut=new Float32Array(J.length),lt=new Float32Array(J.length*3);return J.forEach((I,O)=>{Ut[O]=I.s,lt[O*3]=I.p.x,lt[O*3+1]=I.p.y,lt[O*3+2]=I.p.z}),{root:r,plates:P,cables:W,meshes:h,textures:f,holder:rt,circulators:Dt,extra:St,finish:async()=>{await nt(o,e.gold,"gold-parts"),await nt(a,e.silver,"silver-parts"),await nt(c,e.dark,"dark-parts"),await nt(l,e.diel,"diel-parts"),u.total=Math.round(u.plates+u.cables+u.connectors+u.misc)},pulse:{line:v,att:F,pathS:Ut,pathP:lt},stats:{lines:d.length,connectors:D.length+N.length+G.length,tris:u},prep:Qt,M4:he}}var en=5,vn=25,Ar=40,{PAIRS:Tr,QC:jg,LAYERS:Qg}=(()=>{let i=[];for(let n=0;n<en;n++)for(let s=0;s<en-1;s++)i[s+4*n]=[n*en+s,n*en+s+1];for(let n=0;n<en-1;n++)for(let s=0;s<en;s++)i[20+s+5*n]=[n*en+s,(n+1)*en+s];let t=Array.from({length:vn},()=>[]);i.forEach((n,s)=>{t[n[0]].push(s),t[n[1]].push(s)});let e=[[],[],[],[]];for(let n=0;n<en;n++)for(let s=0;s<en-1;s++)e[s%2].push(s+4*n);for(let n=0;n<en-1;n++)for(let s=0;s<en;s++)e[2+n%2].push(20+s+5*n);return{PAIRS:i,QC:t,LAYERS:e}})();function tx(i,t,e){return i.onBeforeCompile=n=>{Object.assign(n.uniforms,{uQ:e.uQ,uC:e.uC,uReadout:e.uReadout,uGain:e.uGain,uQColor:e.uQColor,uCColor:e.uCColor,uRColor:e.uRColor,uTime:t.uTime}),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
        uniform float uQ[${vn}];
        uniform float uC[${Ar}];
        uniform float uReadout, uGain, uTime;
        uniform vec3 uQColor, uCColor, uRColor;`).replace("#include <emissivemap_fragment>",`
        {
          vec2 tuv = vEmissiveMapUv;
          vec4 em = texture2D(emissiveMap, tuv);
          vec2 g = (tuv - ${za().x0.toFixed(4)}) / ${za().pitch.toFixed(4)};
          vec2 gi = clamp(floor(g + 0.5), 0.0, 4.0);
          float q = uQ[int(gi.x) + 5 * int(gi.y)];
          vec2 f = g - floor(g + 0.5);
          float cpl;
          if (abs(f.y) < abs(f.x)) cpl = uC[int(clamp(floor(g.x), 0.0, 3.0)) + 4 * int(gi.y)];
          else cpl = uC[20 + int(gi.x) + 5 * int(clamp(floor(g.y), 0.0, 3.0))];
          totalEmissiveRadiance = (uQColor * (em.r * q) + uCColor * (em.b * cpl) + uRColor * (em.g * uReadout)) * uGain;
        }`)},i.customProgramCacheKey=()=>"nadir-die",i}function ex(i,t,e){let n=[];for(let s=0;s<=12;s++){let r=s/12,o=i*r,a=Math.sin(Math.PI*Math.pow(r,.75))*t;n.push(new C(o,a-e*r,0))}return new Bn(new gn(n),12,85e-5,4,!1)}function nx(i,t){let e=[];for(let n=0;n<=8;n++){let s=n/8;e.push(new C(i*(s-.5),t*Math.pow(Math.sin(Math.PI*s),.45),0))}return new Bn(new gn(e),8,48e-5,4,!1)}async function Hh({preset:i,U:t,machine:e,slicer:n,mats:s}){let r=e.holder,{L2W:o,face:a,right:c,Wd:l,Dd:u,fw:f}=r,h=new mn;h.name="chip";let p=[],g={uQ:{value:new Float32Array(vn)},uC:{value:new Float32Array(Ar)},uReadout:{value:0},uGain:{value:1},uQColor:{value:new qt(.3,.74,1).multiplyScalar(2.4)},uCColor:{value:new qt(.62,.86,1).multiplyScalar(2.2)},uRColor:{value:new qt(.3,.62,1).multiplyScalar(.9)}};n.step("chip",.8);let y=await Nh(i.pcbTex,[5,5,5,5],n);p.push(y.map,y.mr);let m=l-2*f,d=new Ge(m,m,.006);zh(d);let E=In(new qe({map:y.map,roughnessMap:y.mr,metalnessMap:y.mr,roughness:1,metalness:1}),t,{octaves:i.frostOctaves}),R=new _e(d,E);R.position.copy(o(0,0,u/2+.003)),R.rotation.y=Math.atan2(a.x,a.z),R.name="pcb",h.add(R);let v=await Dh(i.chipTex,n);p.push(v.map,v.mr,v.em);let S=v.layout,M=m*.476*.96,A=.01,x=new Ge(M,M,A);zh(x);let T=new Hi({map:v.map,roughnessMap:v.mr,metalnessMap:v.mr,roughness:1,metalness:1,emissive:16777215,emissiveMap:v.em,emissiveIntensity:1,iridescence:i.iridescence??.55,iridescenceIOR:1.45,iridescenceThicknessRange:[260,520]});tx(T,t,g);let P=new _e(x,T),D=u/2+.006+A;P.position.copy(o(0,0,u/2+.006+A/2)),P.rotation.y=Math.atan2(a.x,a.z),P.name="die",h.add(P),await n.maybeYield("die");let N=new C(0,1,0),G=(lt,I,O=0)=>o((lt-.5)*M,-(I-.5)*M,D+O),F=G(.5,.5,5e-4);{let{prep:lt,M4:I}=e,O=e.extra.goldParts,K=M/2+.007,tt=.006,et=.004,pt=u/2+.006+et/2,xt=Math.atan2(a.x,a.z);for(let[vt,ft,_t,At]of[[0,K+tt/2,2*(K+tt),tt],[0,-K-tt/2,2*(K+tt),tt],[K+tt/2,0,tt,2*K],[-K-tt/2,0,tt,2*K]])O.push(lt(new Ge(_t,At,et),I(o(vt,ft,pt),xt),[.9,.9,.9]));for(let[vt,ft]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let _t=vt*(M/2+.004),At=ft*(M/2+.004);O.push(lt(new Ge(.03,.009,.004),I(o(_t-vt*.008,At,D+.002),xt),[.95,.95,.95])),O.push(lt(new Ge(.009,.03,.004),I(o(_t,At-ft*.008,D+.002),xt),[.95,.95,.95])),O.push(lt(new se(.0045,.0045,.004,10),I(o(_t+vt*.002,At+ft*.002,D+.005),xt,Math.PI/2),[.75,.75,.75]))}}let H=new te,W=new te,J=new C,at=new C,j=new C,st=[[0,-1],[0,1],[-1,0],[1,0]],rt=[];for(let[lt,I,O]of S.pads){let K=O==="v"?I<.5?0:1:lt<.5?2:3;rt.push({u:lt,v:I,s:K,sig:!0})}let Dt=Math.max(2,i.wirebonds);for(let lt=0;lt<4;lt++)for(let I=0;I<Dt;I++){let O=.08+(I+.5)/Dt*.84,K,tt;lt===0?(K=O,tt=.035):lt===1?(K=O,tt=.965):lt===2?(K=.035,tt=O):(K=.965,tt=O),rt.some(pt=>pt.s===lt&&Math.hypot(pt.u-K,pt.v-tt)<.035)||rt.push({u:K,v:tt,s:lt,sig:!1})}let Nt=on(31),ne=ex(.036,.0145,A+5e-4),Jt=In(new qe({color:16777215,metalness:1,roughness:.26}),t,{octaves:i.frostOctaves});Jt.color.setRGB(1,.76,.42);let $t=In(new qe({color:16777215,metalness:1,roughness:.3}),t,{octaves:i.frostOctaves});$t.color.setRGB(.82,.84,.88);let Q=new _i(ne,Jt,rt.length);rt.forEach((lt,I)=>{let[O,K]=st[lt.s],tt=G(lt.u,lt.v,4e-4);at.set(0,0,0).addScaledVector(c,O).addScaledVector(N,-K).normalize(),j.crossVectors(at,a).normalize(),H.makeBasis(at,a,j);let et=lt.sig?1.15:.9+Nt()*.2;J.set(et,lt.sig?1.1:.85+Nt()*.2,1),W.copy(H).scale(J).setPosition(tt),Q.setMatrixAt(I,W)}),Q.instanceMatrix.needsUpdate=!0,Q.computeBoundingSphere(),Q.name="wirebonds",h.add(Q);let nt=[];if(i.airbridges>0){for(let lt of S.couplers){let[[I,O],[K,tt]]=lt.pts;nt.push({u:(I+K)/2,v:(O+tt)/2,du:K-I,dv:tt-O,span:.0042+.006+.004})}for(let lt of S.flux)for(let I=0;I<lt.length-1;I++){let[O,K]=lt[I],[tt,et]=lt[I+1],pt=Math.hypot(tt-O,et-K),xt=Math.floor(pt/.05*i.airbridges);for(let vt=1;vt<=xt;vt++){let ft=vt/(xt+1);nt.push({u:O+(tt-O)*ft,v:K+(et-K)*ft,du:tt-O,dv:et-K,span:.004+.006+.004})}}}let St=null;if(nt.length){let lt=nx(.0142*M*1.25,.0011);St=new _i(lt,$t,nt.length);let I=new C;nt.forEach((O,K)=>{I.set(0,0,0).addScaledVector(c,O.du).addScaledVector(N,-O.dv).normalize(),at.crossVectors(a,I).normalize(),H.makeBasis(at,a,I),W.copy(H).setPosition(G(O.u,O.v,2e-4)),St.setMatrixAt(K,W)}),St.instanceMatrix.needsUpdate=!0,St.computeBoundingSphere(),St.name="airbridges",h.add(St)}await n.maybeYield("bonds");let Ut=d.index.count/3+x.index.count/3+ne.index.count/3*rt.length+(St?St.geometry.index.count/3*nt.length:0);return{root:h,textures:p,CU:g,center:F,normal:a.clone(),right:c.clone(),dieW:M,meshes:[R,P,Q,St].filter(Boolean),stats:{bonds:rt.length,bridges:nt.length,tris:Math.round(Ut)},choreo:lx(g)}}function zh(i){let t=i.attributes.uv;for(let e=0;e<t.count;e++)t.setY(e,1-t.getY(e));t.needsUpdate=!0}var wr=.2,ka=.62,ix=3.55,sx=3.2,rx=.07,ox=2.3,Tc=1.05,ax=i=>(i=Math.imul(i^i>>>16,73244475),i=Math.imul(i^i>>>16,73244475),i^=i>>>16,(i>>>0)/4294967296);function lx(i){let t=i.uQ.value,e=i.uC.value,n=new Float32Array(vn),s=new Float32Array(Ar),r=new Float32Array(vn),o=new Float32Array(Ar),a=new Float32Array(vn);{let d=on(5);for(let R=0;R<en;R++)for(let v=0;v<en;v++)a[R*en+v]=v+(en-1-R)+d()*.8;Array.from(a).map((R,v)=>[R,v]).sort((R,v)=>R[0]-v[0]).forEach(([,R],v)=>{a[R]=v})}let c=10,l=99,u=l,f=0,h=c,p=()=>{u=u+1831565813>>>0;let d=u;return d=Math.imul(d^d>>>15,d|1),d^=d+Math.imul(d^d>>>7,d|61),((d^d>>>14)>>>0)/4294967296};function g(d){for(d<f&&(u=l,f=0,h=c);f<d;){let E=Tr[h],R=p()<.5?E[0]:E[1],v=jg[R],S=Math.floor(p()*(v.length-1));for(let M=0;M<v.length;M++)if(v[M]!==h&&S--===0){h=v[M];break}f++}return h}let y={wakeAt:-1e9,armed:!0,last:0};function m(d,E){for(let R=0;R<vn;R++)E[R]=wr*(.86+.14*Math.sin(d*1.3+R*1.7))}return{state:y,setWakeAge(d,E){y.wakeAt=d-E,y.armed=!1},update(d,E,R){y.armed&&E>=ix?(y.wakeAt=d,y.armed=!1):!y.armed&&E<sx&&(y.armed=!0,y.wakeAt=-1e9);let v=Ie(4.4,4.85,E)*(1-Ie(5.45,5.85,E)),S=Ie(5.45,5.85,E),M=0,A=R?y.armed?-1:99:d-y.wakeAt;if(y.armed||A<0){if(R)for(let x=0;x<vn;x++)n[x]=wr;else m(d,n);s.fill(0)}else{for(let T=0;T<vn;T++){let P=A-a[T]*rx;if(P<0)n[T]=wr*(.86+.14*Math.sin(d*1.3+T*1.7));else{let D=De(P/.06,0,1);n[T]=wr+(ka-wr)*D+1.1*D*Math.exp(-P*4.5),R||(n[T]*=.94+.06*Math.sin(d*2.1+T*2.3))}}s.fill(0);let x=A-ox;if(x>0&&!R){let T=Math.floor(x/Tc),P=(x-T*Tc)/Tc,D=g(T),N=Math.pow(Math.sin(Math.PI*P),2);s[D]=N*1.25;let G=Tr[D],F=.5+.5*Math.cos(2*Math.PI*2.5*P);n[G[0]]+=N*.95*F,n[G[1]]+=N*.95*(1-F)}else R&&!y.armed&&(s[c]=.9,n[Tr[c][0]]+=.45,n[Tr[c][1]]+=.45)}if(v>.001){let T=R?.3:(d%3.4+3.4)%3.4;o.fill(.04);for(let P=0;P<vn;P++)r[P]=ka*.85;if(T<2.6){let P=Math.min(3,Math.floor(T/.65)),D=(T-P*.65)/.65,N=Math.pow(Math.sin(Math.PI*Math.min(1,D/.85)),2),G=Qg[P];for(let F=0;F<G.length;F++){let H=G[F];o[H]=.15+N*1.05;let W=Tr[H],J=.5+.5*Math.cos(2*Math.PI*1.5*D+H);r[W[0]]+=N*.5*J,r[W[1]]+=N*.5*(1-J)}if(!R&&D>.8){let F=(D-.8)/.2;for(let H=0;H<vn;H++)(H*7+P*3)%5===0&&(r[H]+=.5*Math.sin(Math.PI*F))}}else{let P=(T-2.6)/.8;M=Math.sin(Math.PI*P);let D=R?3:Math.floor(d/3.4);for(let N=0;N<vn;N++){let G=ax(N*31+D*977+7)<.45?1.35:.28;r[N]=ka*.85+(G-ka*.85)*M}}}for(let x=0;x<vn;x++){let T=n[x]+(r[x]-n[x])*v;T+=(.82-T)*S,t[x]=T}for(let x=0;x<Ar;x++){let T=s[x]+(o[x]-s[x])*v;T+=(.22-T)*S,e[x]=T}i.uReadout.value=M*v+.25*S}}}var cx="varying vec2 vUv; void main(){ vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 1.0, 1.0); }",ux=`
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
}`,hx=`
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
}`,fx=`
uniform float uAmt; varying float vA;
void main(){
  float r = length(gl_PointCoord - 0.5) * 2.0;
  float a = (1.0 - smoothstep(0.2, 1.0, r)) * vA * uAmt;
  gl_FragColor = vec4(vec3(0.55, 0.72, 1.0) * 0.5 * a, a);
}`,dx=`
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
}`,px=`
varying float vA;
void main(){
  vec2 q = gl_PointCoord - 0.5;
  float r = length(q) * 2.0;
  float core = 1.0 - smoothstep(0.0, 0.55, r);
  float star = max(0.0, 1.0 - abs(q.x) * 14.0) * max(0.0, 1.0 - abs(q.y) * 2.2) + max(0.0, 1.0 - abs(q.y) * 14.0) * max(0.0, 1.0 - abs(q.x) * 2.2);
  float a = (core + star * 0.35) * vA;
  gl_FragColor = vec4(vec3(0.78, 0.9, 1.0) * a, a);
}`,mx=`
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
}`,gx=`
uniform vec3 uColor; varying float vA; varying float vHead;
void main(){
  float r = length(gl_PointCoord - 0.5) * 2.0;
  float a = exp(-r * r * mix(7.0, 9.0, vHead)) * (1.0 - smoothstep(0.85, 1.0, r));
  float core = exp(-r * r * 60.0) * vHead;
  gl_FragColor = vec4(uColor * (a + core * 1.5) * vA, 1.0);
}`,xx=`
uniform float uSize; varying vec2 vP;
void main(){
  vP = position.xy;
  vec4 mv = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
  mv.xy += position.xy * uSize;
  gl_Position = projectionMatrix * mv;
}`,_x=`
uniform vec3 uColor; uniform float uAmt; varying vec2 vP;
void main(){
  float r2 = dot(vP, vP) * 4.0;
  float a = (exp(-r2 * 3.0) * 0.6 + exp(-r2 * 12.0) * 0.4) * (1.0 - smoothstep(0.7, 1.0, r2));
  gl_FragColor = vec4(uColor * a * uAmt, 1.0);
}`;function vx(){let i=new we;return i.setAttribute("position",new de([-1,-1,0,3,-1,0,-1,3,0],3)),i}function Vh({preset:i,U:t,machine:e}){let n=new mn;n.name="effects";let s={value:800},r={value:0},o=new Le({uniforms:{uRes:{value:new Pt(1,1)},uHalo:{value:new Pt(.62,.55)},uHaloAmt:{value:1},uCold:{value:0},uBeam:{value:0}},vertexShader:cx,fragmentShader:ux,depthTest:!1,depthWrite:!1,fog:!1}),a=new _e(vx(),o);a.frustumCulled=!1,a.renderOrder=-1e3,a.name="backdrop",n.add(a);let c=new Le({uniforms:{uTime:r,uProj:s,uAmt:{value:1}},vertexShader:hx,fragmentShader:fx,transparent:!0,depthWrite:!1,blending:Rn,fog:!1});{let m=i.dust,d=on(5),E=new Float32Array(m*3),R=new Float32Array(m);for(let M=0;M<m;M++){let A=d()*Math.PI*2,x=.6+Math.sqrt(d())*5;E[M*3]=Math.sin(A)*x,E[M*3+1]=-5.5+d()*12.5,E[M*3+2]=Math.cos(A)*x,R[M]=d()}let v=new we;v.setAttribute("position",new be(E,3)),v.setAttribute("aSeed",new be(R,1));let S=new zi(v,c);S.frustumCulled=!1,S.name="dust",n.add(S)}let l=new Le({uniforms:{uTime:r,uProj:s,uAmt:{value:0}},vertexShader:dx,fragmentShader:px,transparent:!0,depthWrite:!1,blending:Rn,fog:!1}),u=(()=>{let m=i.frost,d=on(17),E=new Float32Array(m*3),R=new Float32Array(m);for(let M=0;M<m;M++){let A=d()*Math.PI*2,x=.15+Math.sqrt(d())*1.55;E[M*3]=Math.sin(A)*x,E[M*3+1]=-4.4+d()*2.8,E[M*3+2]=Math.cos(A)*x,R[M]=d()}let v=new we;v.setAttribute("position",new be(E,3)),v.setAttribute("aSeed",new be(R,1));let S=new zi(v,l);return S.frustumCulled=!1,S.name="frost-particles",S.visible=!1,n.add(S),S})(),f=e.pulse.att,h=new Le({uniforms:{uHead:{value:new C},uHeadAmp:{value:0},uFlash:{value:new Float32Array(4)},uProj:s,uVis:{value:0},uColor:{value:t.uPulseColor.value}},vertexShader:mx,fragmentShader:gx,transparent:!0,depthWrite:!1,blending:Rn,fog:!1}),p=(()=>{let m=new Float32Array(15),d=new Float32Array(5);for(let v=0;v<5;v++){d[v]=v;let S=f[Math.max(0,Math.min(f.length-1,v-1))];v>0&&S&&(m[v*3]=S.x,m[v*3+1]=S.y,m[v*3+2]=S.z)}let E=new we;E.setAttribute("position",new be(m,3)),E.setAttribute("aIdx",new be(d,1));let R=new zi(E,h);return R.frustumCulled=!1,R.name="signal",R.visible=!1,R.renderOrder=10,n.add(R),R})(),g=new Le({uniforms:{uSize:{value:1.5},uColor:{value:new qt(.1,.26,.42)},uAmt:{value:0}},vertexShader:xx,fragmentShader:_x,transparent:!0,depthWrite:!1,blending:Rn,fog:!1}),y=new _e(new ai(1,1),g);return y.position.copy(t.uGlowPos.value),y.frustumCulled=!1,y.name="mxc-glow",y.visible=!1,n.add(y),{group:n,bgMat:o,dustMat:c,frostMat:l,signalMat:h,glowMat:g,frostPts:u,signal:p,glow:y,proj:s,drift:r,setGlow(m){g.uniforms.uAmt.value=m,y.visible=m>.002},setFrost(m){l.uniforms.uAmt.value=m,u.visible=m>.002}}}var Ga=Math.PI/180,yx=1.6,Mx=390/844,Sx=[{pos:[5.25,2.45,15.3],tgt:[0,.18,0],fov:30,shift:[.16,-.01],roll:0},{orbit:{az:28,r:4.3,y:1.95,ay:1.5,pan:.9},fov:36,shift:[.06,0],roll:-.025},{orbit:{az:-22,r:3.6,y:-.5,ay:-.9,pan:.75},fov:38,shift:[.06,0],roll:.02},{orbit:{az:18,r:3.26,y:-3.15,ay:-2.6,pan:.35},fov:40,shift:[.06,.02],roll:-.015},{chip:{d:1,side:.95,up:.42,pan:.3},fov:30,shift:[.04,0],roll:0},{chip:{d:1,side:-.62,up:-.2,pan:.2},fov:30,shift:[.18,0],roll:.012,drift:1},{pos:[3.6,-7.6,6.6],tgt:[0,-.2,0],fov:46,shift:[.17,.24],roll:0},{ring:{az:-15,r:16.2,y:1.2,ty:-.1},fov:31,shift:[.17,0],roll:0}],bx=[{pos:[4.6,2.2,13.6],tgt:[0,.6,0],fov:52,shift:[0,-.1],roll:0},{orbit:{az:34,r:5.2,y:2.3,ay:1.4,pan:.85},fov:56,shift:[0,-.16],roll:-.03},{orbit:{az:-22,r:4.3,y:-.35,ay:-.85,pan:0},fov:58,shift:[0,-.17],roll:.02},{orbit:{az:18,r:3.6,y:-3.3,ay:-2.75,pan:0},fov:60,shift:[0,-.12],roll:-.015},{chip:{d:1.7,side:.35,up:.35,pan:0},fov:46,shift:[0,-.14],roll:0},{chip:{d:1.6,side:-.5,up:.45,pan:0},fov:42,shift:[0,-.16],roll:0,drift:1},{pos:[3.4,-8,7.4],tgt:[0,-.6,0],fov:64,shift:[0,-.14],roll:0},{ring:{az:-15,r:15.5,y:1.4,ty:.4},fov:52,shift:[0,-.12],roll:0}],wc=[{envRot:0,envInt:1,fog:.01,exposure:1,cold:0,bloom:.22,halo:1,key:1,dof:0,focusPull:0,beam:1,glow:0,glowHalo:0,gain:.5,bottom:0,sat:1.05,frost:1,vignette:.55},{envRot:.55,envInt:1.05,fog:.05,exposure:1,cold:.3,bloom:.24,halo:.8,key:1,dof:7,focusPull:1.25,beam:.3,glow:0,glowHalo:0,gain:.5,bottom:0,sat:1.05,frost:1,vignette:.55},{envRot:-.35,envInt:1,fog:.07,exposure:1,cold:.6,bloom:.3,halo:.7,key:.9,dof:7,focusPull:1,beam:.2,glow:0,glowHalo:0,gain:.6,bottom:0,sat:1.04,frost:1,vignette:.55},{envRot:.9,envInt:.95,fog:.08,exposure:1,cold:.95,bloom:.32,halo:.7,key:.8,dof:5,focusPull:-.2,beam:.3,glow:1,glowHalo:1,gain:.8,bottom:0,sat:1,frost:1,vignette:.58},{envRot:.25,envInt:.9,fog:.14,exposure:1.04,cold:1,bloom:.42,halo:.6,key:.6,dof:13,focusPull:0,beam:0,glow:.22,glowHalo:0,gain:1,bottom:0,sat:1,frost:1,vignette:.6},{envRot:.6,envInt:1,fog:.12,exposure:1,cold:1,bloom:.45,halo:.45,key:.72,dof:10,focusPull:0,beam:0,glow:.18,glowHalo:0,gain:1,bottom:0,sat:1,frost:1,vignette:.62},{envRot:-.2,envInt:.95,fog:.03,exposure:.95,cold:.8,bloom:.3,halo:.8,key:.8,dof:0,focusPull:0,beam:.6,glow:.8,glowHalo:.7,gain:.9,bottom:.35,sat:1,frost:.32,vignette:.6},{envRot:.15,envInt:.95,fog:.012,exposure:.88,cold:.6,bloom:.3,halo:.9,key:.9,dof:0,focusPull:0,beam:.8,glow:.8,glowHalo:.6,gain:.9,bottom:0,sat:1.02,frost:.26,vignette:.58}],kh=Object.keys(wc[0]);function Gh(i,t){return i.map(e=>{let n={fov:e.fov,shift:e.shift.slice(),roll:e.roll||0,drift:e.drift||0};if(e.orbit){let s=e.orbit,r=s.az*Ga;n.pos=[Math.sin(r)*s.r,s.y,Math.cos(r)*s.r];let o=Math.cos(r),a=-Math.sin(r);n.tgt=[-o*s.pan,s.ay,-a*s.pan]}else if(e.chip){let s=t.center,r=t.normal,o=t.right,a=e.chip;n.pos=[s.x+r.x*a.d+o.x*a.side,s.y+a.up,s.z+r.z*a.d+o.z*a.side],n.tgt=[s.x-o.x*a.pan,s.y+.02,s.z-o.z*a.pan]}else if(e.ring){let s=e.ring,r=s.az*Ga;n.pos=[Math.sin(r)*s.r,s.y,Math.cos(r)*s.r],n.tgt=[0,s.ty,0]}else n.pos=e.pos.slice(),n.tgt=e.tgt.slice();return n})}var Wh=(i,t,e,n,s)=>{let r=s*s,o=r*s;return .5*(2*t+(-i+e)*s+(2*i-5*t+4*e-n)*r+(-i+3*t-3*e+n)*o)};function Xh(i,t){let e=Gh(Sx,i),n=Gh(bx,i);if(t)for(let a of[e,n]){let c=a[t.c];c&&(t.pos&&(c.pos=t.pos.slice()),t.tgt&&(c.tgt=t.tgt.slice()),t.fov&&(c.fov=t.fov),t.shift&&(c.shift=t.shift.slice()))}let s=e.length,r={i:0,t:0};function o(a){a=De(a,0,s-1);let c=Math.min(s-2,Math.floor(a)),l=a-c;return l=ie(l,Rh(0,1,l),.65),r.i=c,r.t=l,r}return{land:e,port:n,count:s,sample(a,c,l){let u=c?n:e,{i:f,t:h}=o(a),p=u[Math.max(0,f-1)],g=u[f],y=u[f+1],m=u[Math.min(s-1,f+2)];for(let d=0;d<3;d++)l.pos[d]=Wh(p.pos[d],g.pos[d],y.pos[d],m.pos[d],h),l.tgt[d]=Wh(p.tgt[d],g.tgt[d],y.tgt[d],m.tgt[d],h);return l.fov=ie(g.fov,y.fov,h),l.shift[0]=ie(g.shift[0],y.shift[0],h),l.shift[1]=ie(g.shift[1],y.shift[1],h),l.roll=ie(g.roll,y.roll,h),l.drift=ie(g.drift,y.drift,h),l},look(a,c){let{i:l,t:u}=o(a),f=wc[l],h=wc[l+1];for(let p=0;p<kh.length;p++){let g=kh[p];c[g]=ie(f[g],h[g],u)}return c}}}function qh(i,t){return i<=760||i/t<=.8}function Yh(i,t,e,n,s,r=0,o=0){let a=e/n,c=s?Mx:yx,l=t.fov,u=t.shift[0],f=t.shift[1];if(a<c){let h=Math.tan(l*Ga/2)*(c/a);l=2*Math.atan(h)/Ga,s||(u+=(c-a)*.12)}else s||(u*=Math.pow(c/a,.6));s&&a>.8&&(f*=.6),i.fov=De(l,10,100),i.aspect=a,i.setViewOffset(e,n,-u*e+r,f*n+o,e,n),i.updateProjectionMatrix()}var Ds=`precision highp float;
`,Ex=Ds+`attribute vec3 position; varying vec2 vUv;
void main(){ vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }`,Tx=Ds+`
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
}`,wx=Ds+`
uniform sampler2D tSrc; uniform vec2 uTexel; varying vec2 vUv;
void main(){
  vec3 c = texture2D(tSrc, vUv).rgb * 4.0;
  c += texture2D(tSrc, vUv + uTexel * vec2(-1.0, -1.0)).rgb;
  c += texture2D(tSrc, vUv + uTexel * vec2( 1.0, -1.0)).rgb;
  c += texture2D(tSrc, vUv + uTexel * vec2(-1.0,  1.0)).rgb;
  c += texture2D(tSrc, vUv + uTexel * vec2( 1.0,  1.0)).rgb;
  gl_FragColor = vec4(c / 8.0, 1.0);
}`,Ax=Ds+`
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
}`,Zh=i=>Ds+`
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
}`,Rx=Ds+`
uniform sampler2D tSrc; uniform float uDither; varying vec2 vUv;
float hash(vec2 p){ p = fract(p * vec2(443.897, 441.423)); p += dot(p, p.yx + 19.19); return fract((p.x + p.y) * p.x); }
void main(){
  vec3 c = texture2D(tSrc, vUv).rgb;
  c += (hash(gl_FragCoord.xy) + hash(gl_FragCoord.xy * 1.37 + 5.3) - 1.0) * uDither;
  gl_FragColor = vec4(c, 1.0);
}`;function Cx(){let i=new we;return i.setAttribute("position",new be(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),i}var Ls=(i,t,e={})=>new ys({vertexShader:Ex,fragmentShader:i,uniforms:t,depthTest:!1,depthWrite:!1,...e});function Jh(i,t,e,{preset:n,msaa:s}){let r=n.dofTaps|0,o=n.bloomLevels|0,a=n.bloomDiv||2,c=Math.min(s|0,i.capabilities.maxSamples||4),l=4,u=4,f=r>0?new Yn(4,4):null,h=new Be(4,4,{type:Ze,samples:c,depthBuffer:!0,stencilBuffer:!1,minFilter:Pe,magFilter:Pe,generateMipmaps:!1,...f?{depthTexture:f}:{}}),p=()=>new Be(1,1,{type:Ze,depthBuffer:!1,minFilter:Pe,magFilter:Pe,generateMipmaps:!1}),g=Array.from({length:o},p),y=Array.from({length:Math.max(0,o-1)},p),m=null,d=new Bi(new Uint8Array([0,0,0,255]),1,1);d.needsUpdate=!0;let E=Ls(Tx,{tSrc:{value:null},uTexel:{value:new Pt},uThreshold:{value:1.2},uKnee:{value:.6}}),R=Ls(wx,{tSrc:{value:null},uTexel:{value:new Pt}}),v=Ls(Ax,{tSrc:{value:null},tAdd:{value:null},uTexel:{value:new Pt},uRadius:{value:1}}),S={tScene:{value:h.texture},tDepth:{value:f||d},tBloom:{value:d},uBloom:{value:.25},uTime:{value:0},uCold:{value:0},uVignette:{value:.55},uGrain:{value:n.grain},uFade:{value:1},uSat:{value:1.05},uFxaa:{value:c===0?1:0},uBottom:{value:0},uWeight:{value:1},uDofSeed:{value:0},uNear:{value:e.near},uFar:{value:e.far},uFocus:{value:10},uAperture:{value:0},uMaxCoc:{value:14},uRes:{value:new Pt(4,4)},toneMappingExposure:{value:1}},M=Ls(Zh(r),S),A=Ls(Zh(r),S,{blending:Rn,transparent:!0}),x=Ls(Rx,{tSrc:{value:null},uDither:{value:0}}),T=new Si(-1,1,1,-1,0,1),P=new _e(Cx(),E);P.frustumCulled=!1;let D=(H,W)=>{P.material=H,i.setRenderTarget(W),i.render(P,T)},N=o>0,G=r>0,F={sceneRT:h,uniforms:S,samples:c,dofTaps:r,levels:o,sceneCalls:0,sceneTris:0,get bloomOn(){return N},get dofOn(){return G},setSize(H,W){l=Math.max(1,Math.round(H)),u=Math.max(1,Math.round(W)),h.setSize(l,u),f&&(f.image.width=l,f.image.height=u);let J=Math.max(1,Math.round(l/a)),at=Math.max(1,Math.round(u/a));for(let j=0;j<o;j++)g[j].setSize(J,at),j<o-1&&y[j].setSize(J,at),J=Math.max(1,J>>1),at=Math.max(1,at>>1);S.uRes.value.set(l,u),m&&m.setSize(l,u)},setEnabled(H){N=H&&o>0,G=H&&r>0},renderScene(){i.setRenderTarget(h),i.render(t,e),F.sceneCalls=i.info.render.calls,F.sceneTris=i.info.render.triangles},renderBloom(){if(!N){S.tBloom.value=d;return}E.uniforms.tSrc.value=h.texture,E.uniforms.uTexel.value.set(1/l,1/u),D(E,g[0]);for(let W=1;W<o;W++)R.uniforms.tSrc.value=g[W-1].texture,R.uniforms.uTexel.value.set(1/g[W-1].width,1/g[W-1].height),D(R,g[W]);let H=g[o-1];for(let W=o-2;W>=0;W--)v.uniforms.tSrc.value=H.texture,v.uniforms.tAdd.value=g[W].texture,v.uniforms.uTexel.value.set(1/H.width,1/H.height),D(v,y[W]),H=y[W];S.tBloom.value=o>1?y[0].texture:g[0].texture},render(){F.renderScene(),F.renderBloom();let H=S.uAperture.value;G||(S.uAperture.value=0),S.uWeight.value=1,D(M,null),S.uAperture.value=H},accumulate(H,W){if(m||(m=new Be(l,u,{type:Ze,depthBuffer:!1,minFilter:Pe,magFilter:Pe,generateMipmaps:!1})),F.renderScene(),F.renderBloom(),S.uWeight.value=1/W,S.uDofSeed.value=H*.618,H===0)D(M,m);else{let J=i.autoClear;i.autoClear=!1,D(A,m),i.autoClear=J}S.uWeight.value=1,S.uDofSeed.value=0},present(H=1/255){x.uniforms.tSrc.value=m.texture,x.uniforms.uDither.value=H,D(x,null)},async compile(){for(let H of[E,R,v,M,x])P.material=H,await i.compileAsync(P,T)},dispose(){h.dispose(),f&&f.dispose(),g.forEach(H=>H.dispose()),y.forEach(H=>H.dispose()),m&&m.dispose(),[E,R,v,M,A,x].forEach(H=>H.dispose()),P.geometry.dispose(),d.dispose()}};return F}var $h=Math.PI/180,Ac=7,Px=4.2,Ix=[0,.3,1,1,1,1],Lx=.72,Dx=.45,Nx=1.1,Ns=2.12,Kh=5.06,Rr=3.4,Rc=5,Ux=24,Fx=.3,jh=2100,Ox=2600,Bx={plate300K:[0,-.35],plate50K:[1,-.35],plate4K:[2,.3],still:[3,-.35],coldplate:[4,-.4],mxc:[5,-.62]};async function NM({canvas:i,reducedMotion:t=!1,onProgress:e,debug:n=null}={}){if(!i)throw new Error("createScene: a canvas is required");let s=n||{},r=performance.now(),o=0,a=1/0,c=null;try{typeof PerformanceObserver=="function"&&(PerformanceObserver.supportedEntryTypes||[]).includes("longtask")&&(c=new PerformanceObserver(dt=>{for(let Vt of dt.getEntries())Vt.startTime<a&&Vt.duration>o&&(o=Vt.duration)}),c.observe({type:"longtask"}))}catch{c=null}let l=Ih({budget:10,onProgress:e}),u=new Na({canvas:i,antialias:!1,alpha:!1,stencil:!1,depth:!0,powerPreference:"high-performance",preserveDrawingBuffer:!!s.preserve});u.outputColorSpace=Xe,u.toneMapping=_n,u.info.autoReset=!1,u.setClearColor(131846,1);let f=yh(u.getContext()),h=s.quality==="still"?"still":f.name,p=bh(h,s.preset);s.grain!==void 0&&(p.grain=s.grain),h==="low"&&(p.iridescence=0);let g=h==="still"?4:Math.min(p.msaa,f.msaa),y=typeof matchMedia=="function"&&matchMedia("(hover: hover) and (pointer: fine)").matches;l.step("renderer",.02),await l.yield("renderer");let m=new Oi;m.fog=new $s(new qt().setRGB(.0045,.0068,.012),.02);let d=new je(30,1.6,.05,80),E=Th();for(let dt=0;dt<6;dt++)E.uPlates.value[dt].set(Yt[dt].y,Yt[dt].R,Yt[dt].t,0);E.uSparkle.value=t?0:1;let R=wh(E,p),v=Mc(u,{size:p.env});m.environment=v.texture,l.step("environment",.05),await l.yield("environment");let S=await Bh({preset:p,U:E,mats:R,slicer:l}),M=await Hh({preset:p,U:E,machine:S,slicer:l,mats:R});await S.finish(),m.add(S.root),m.add(M.root);let A=Vh({preset:p,U:E,machine:S});m.add(A.group);let x=new Ms(15003135,1.6),T=new C(-6,9,7);x.position.copy(T),m.add(x);let P=new Ms(8828159,1);P.position.set(7,2,-8),m.add(P);let D=Xh(M,s.key),N=Jh(u,m,d,{preset:p,msaa:g});await l.maybeYield("post");let G=1,F=1,H=1,W=1,J=1,at=1,j=!1,st=new Pt;function rt(){G=Math.max(1,i.clientWidth||window.innerWidth||1),F=Math.max(1,i.clientHeight||window.innerHeight||1),J=s.dpr!==void 0?s.dpr:Mh(f,G,F,at),u.setPixelRatio(J),u.setSize(G,F,!1),u.getDrawingBufferSize(st),H=st.x,W=st.y,N.setSize(H,W),j=s.portrait!==void 0?!!s.portrait:qh(G,F),A.bgMat.uniforms.uRes.value.set(H,W)}rt();let Dt={x:0,v:0},Nt=0,ne=s.time!==void 0?s.time:0,Jt=ne,$t={x:0,y:0,tx:0,ty:0},Q=!1,nt=0,St={pos:[0,0,0],tgt:[0,0,0],fov:30,shift:[0,0],roll:0,drift:0},Ut={},lt=new C,I=new C,O=new C,K=0,tt=0,et=0,pt=0,xt=0,vt=0,ft={state:"done",t0:0,dur:jh,from:1,sweep:0,resolve:null,promise:null,armedAt:0},_t=1,At=0,L=1;s.chapter!==void 0&&(Nt=Dt.x=De(+s.chapter,0,Ac));let It=S.pulse.pathS,Mt=S.pulse.pathP;function w(dt,Vt){let re=It.length;if(dt<=It[0])return Vt.set(Mt[0],Mt[1],Mt[2]);if(dt>=It[re-1])return Vt.set(Mt[re*3-3],Mt[re*3-2],Mt[re*3-1]);let Kt=0,me=re-1;for(;me-Kt>1;){let fn=Kt+me>>1;It[fn]<=dt?Kt=fn:me=fn}let Me=(dt-It[Kt])/Math.max(1e-6,It[me]-It[Kt]);return Vt.set(ie(Mt[Kt*3],Mt[me*3],Me),ie(Mt[Kt*3+1],Mt[me*3+1],Me),ie(Mt[Kt*3+2],Mt[me*3+2],Me))}let _=dt=>(dt>2?.58:1)*(dt>3?.58:1)*(dt>4?.58:1)*(dt>5?.58:1);function U(dt){if(ft.state==="dim"){_t=Fx,At=0,L=1,ft.armedAt&&(dt-ft.armedAt>Ox||Dt.x>.35)&&k(dt,!1);return}if(ft.state==="playing"){let Vt=De((dt-ft.t0)/ft.dur,0,1),re=Ch(De(Vt/.8,0,1));if(_t=ie(ft.from,1,re),ft.sweep){At=ie(-1.15,0,Sc(Vt)),L=1+1.4*Math.sin(Math.PI*Vt)*(1-Vt*.4);let Kt=ie(-1.4,0,Sc(Vt));x.position.set(T.x*Math.cos(Kt)+T.z*Math.sin(Kt),T.y,-T.x*Math.sin(Kt)+T.z*Math.cos(Kt))}Vt>=1&&(ft.state="done",_t=1,At=0,L=1,x.position.copy(T),ft.resolve&&(ft.resolve(),ft.resolve=null));return}_t=1,At=0,L=1}function k(dt,Vt){ft.state==="dim"&&(ft.state="playing",ft.t0=dt,ft.from=_t,ft.sweep=Vt&&!t,ft.dur=ft.sweep?jh:650)}function Y(dt,Vt){ne+=dt,t||(Jt+=dt),s.jump?(Dt.x=Nt,Dt.v=0):Ph(Dt,Nt,Px,dt);let re=De(Dt.x,0,Ac),Kt=1-Math.exp(-dt*3);if($t.x+=($t.tx-$t.x)*Kt,$t.y+=($t.ty-$t.y)*Kt,U(Vt),D.look(re,Ut),D.sample(re,j,St),lt.fromArray(St.pos),I.fromArray(St.tgt),St.drift>.001&&!t){let Ne=St.drift*.17*Math.sin(Jt*.075),Mn=St.drift*.07*Math.sin(Jt*.053+1.3),We=M.center.x,b=M.center.z,B=lt.x-We,$=lt.z-b,X=Math.cos(Ne),q=Math.sin(Ne);lt.set(We+B*X+$*q,lt.y+Mn,b-B*q+$*X)}let me=lt.distanceTo(I);if(!t){let Ne=.004*me;if(lt.x+=Math.sin(Jt*.23)*Ne,lt.y+=Math.sin(Jt*.31+1)*Ne*.6,lt.z+=Math.cos(Jt*.19)*Ne,$t.x!==0||$t.y!==0){let Mn=-$t.x*.03,We=$t.y*.018*me;O.subVectors(lt,I);let b=Math.cos(Mn),B=Math.sin(Mn);lt.set(I.x+O.x*b+O.z*B,lt.y+We,I.z-O.x*B+O.z*b)}}d.position.copy(lt),d.up.set(0,1,0),d.lookAt(I),d.rotateZ(St.roll),Yh(d,St,H,W,j,K,tt),d.updateMatrixWorld(),m.environmentRotation.y=Ut.envRot+At,m.environmentIntensity=Ut.envInt,m.fog.density=Ut.fog,x.intensity=1.6*Ut.key*L;let Me=N.uniforms;Me.toneMappingExposure.value=Ut.exposure,Me.uCold.value=Ut.cold,Me.uBloom.value=Ut.bloom*.22,Me.uVignette.value=Ut.vignette,Me.uSat.value=Ut.sat,Me.uBottom.value=j?0:Ut.bottom,Me.uFade.value=_t,Me.uTime.value=ne,Me.uNear.value=d.near,Me.uFar.value=d.far,Me.uFocus.value=Math.max(.2,me-Ut.focusPull),Me.uAperture.value=Ut.dof*(W/1e3),Me.uMaxCoc.value=16*(W/1e3);let fn=A.bgMat.uniforms;fn.uCold.value=Ut.cold,fn.uHaloAmt.value=Ut.halo,fn.uBeam.value=Ut.beam,O.copy(I).project(d),fn.uHalo.value.set(O.x*.5+.5,O.y*.5+.5),A.proj.value=W/(2*Math.tan(d.fov*$h/2)),A.dustMat.uniforms.uAmt.value=1-.55*Ie(3.4,4.4,re),!Q&&re>Lx?Q=!0:Q&&re<Dx&&(Q=!1);let Vn=Q?1:0;nt=t||s.settle?Vn:nt+(Vn-nt)*(1-Math.exp(-dt/Nx)),E.uFrost.value=nt;let Cr=.75+.25*Ie(1.5,3,re);for(let Ne=0;Ne<6;Ne++)E.uPlates.value[Ne].w=Ix[Ne]*nt*Ut.frost*(Ne>=3?Cr:1);let Ii=Ie(1.45,1.85,re)*(1-Ie(2.4,2.8,re)),Ji=A.signalMat.uniforms;if(E.uPulse.value.w=Ii,A.signal.visible=Ii>.001,Ji.uVis.value=Ii,Ii>.001){let Ne,Mn,We;t?(Ne=3.55,Mn=1,We=-1):(We=(ne%Rc+Rc)%Rc,We<Rr?(Ne=Ns+(Kh-Ns)*(We/Rr),Mn=Ie(0,.3,We)*(1-Ie(Rr-.25,Rr,We))):(Ne=-10,Mn=0)),E.uPulse.value.x=Ne,E.uPulse.value.y=Ux*Mn,w(Math.max(Ne,Ns),Ji.uHead.value),Ji.uHeadAmp.value=Mn*_(Ne)*6;let b=Ji.uFlash.value;for(let B=0;B<4;B++){let $=Eh[B];if(We<0||$<Ns){b[B]=0;continue}let X=($-Ns)/(Kh-Ns)*Rr;b[B]=We>=X?Math.exp(-(We-X)*3.2)*_($-.01)*1.6:0}}let Pr=t?1:.93+.07*Math.sin(ne*.7);E.uGlow.value=Ut.glow*Pr,A.setGlow(Ut.glowHalo*.9*Pr),A.setFrost(Ie(2.4,2.95,re)*(1-Ie(3.6,4.25,re))),A.drift.value=Jt,E.uTime.value=ne,M.choreo.update(ne,re,t),M.CU.uGain.value=Ut.gain}function ht(){u.info.reset(),N.render(),et=N.sceneCalls,pt=N.sceneTris,xt=u.info.render.calls,vt=u.info.render.triangles}l.step("upload",.86);for(let dt of[...S.textures,...M.textures])u.initTexture(dt),await l.yield("upload texture");s.wakeAge!==void 0&&M.choreo.setWakeAge(ne,s.wakeAge),!t&&Dt.x<.35&&!s.noIntro&&(ft.state="dim"),Y(0,performance.now()),l.step("shaders",.9),u.setRenderTarget(N.sceneRT);let ot=[];m.traverse(dt=>{(dt.isMesh||dt.isPoints)&&dt.material&&ot.push(dt)});let V=new Set;for(let dt of ot)V.has(dt.material)||(V.add(dt.material),u.compile(dt,d,m),await l.yield("compile"));await u.compileAsync(m,d),u.setRenderTarget(null),await N.compile(),await l.yield("compile done"),l.step("buffers",.95);{let dt=new Be(4,4,{type:Ze,depthBuffer:!0}),Vt=ot.map(Kt=>Kt.visible),re=ot.map(Kt=>Kt.frustumCulled);ot.forEach(Kt=>{Kt.visible=!1}),u.setRenderTarget(dt);for(let Kt=0;Kt<ot.length;Kt++){let me=ot[Kt];me.visible=!0,me.frustumCulled=!1,u.render(m,d),me.visible=!1,me.frustumCulled=re[Kt],await l.maybeYield("buffers")}ot.forEach((Kt,me)=>{Kt.visible=Vt[me]}),u.setRenderTarget(null),dt.dispose()}l.mark("ready"),l.step("ready",1),a=performance.now();let Z=Math.round(a-r);if(c)try{for(let dt of c.takeRecords())dt.startTime<a&&dt.duration>o&&(o=dt.duration)}catch{}let ct=Math.round(l.longest),bt=l.longestLabel,mt=!1,gt=0,Tt=0,Ft=!1,Ht=!1,z=0,yt=[],it,Et=new Promise(dt=>{it=dt}),wt=s.governor===!1||h==="still"?null:new Oa(f,(dt,Vt)=>{at=dt,N.setEnabled(Vt),rt()}),ut=h==="still"?!0:f.post!==!1;N.setEnabled(wt?wt.post:ut);let kt=s.dt,zt=!0;function ge(dt){if(!mt)return;gt=requestAnimationFrame(ge);let Vt=Tt?dt-Tt:16.7;Tt=dt,zt&&(zt=!1,Dt.x=Nt,Dt.v=0,ft.state==="dim"&&Nt>=.35&&(ft.state="done")),wt&&wt.sample(Vt,dt);let re=kt!==void 0?kt:Math.min(.1,Math.max(0,Vt/1e3));Y(re,dt),ht(),z++,z===1&&(ft.state==="dim"&&(ft.armedAt=dt),requestAnimationFrame(()=>it()));let Kt=Dt.x;for(let me=0;me<yt.length;me++)yt[me](Kt)}let fe=dt=>{dt.preventDefault(),Ht=!0,mt=!1,cancelAnimationFrame(gt),i.dispatchEvent(new CustomEvent("contextlost"))},ln=()=>{Ft||(Ht=!1,v.dispose(),v=Mc(u,{size:p.env}),m.environment=v.texture,rt(),i.dispatchEvent(new CustomEvent("contextrestored")))};i.addEventListener("webglcontextlost",fe,!1),i.addEventListener("webglcontextrestored",ln,!1);let hn=S.pulse.att,Wa=hn[Math.min(2,hn.length-1)]||new C,Xa=(()=>{let dt=null,Vt=-2,re=18*$h,Kt=Math.sin(re),me=Math.cos(re);for(let Me of S.circulators){let fn=Math.hypot(Me.x,Me.z)||1,Vn=(Me.x*Kt+Me.z*me)/fn;Vn>Vt&&(Vt=Vn,dt=Me)}return dt||new C(0,-2.55,.6)})(),yn=new C,Yi=new C;function qa(dt,Vt){let re=Bx[dt];if(re){let Kt=Yt[re[0]],me=Math.atan2(d.position.x,d.position.z)+re[1];return Vt.set(Math.sin(me)*Kt.R,Kt.y-Kt.t*.5,Math.cos(me)*Kt.R)}return dt==="attenuator"?Vt.copy(Wa):dt==="circulator"?Vt.copy(Xa):dt==="chip"?Vt.copy(M.center):null}let Zi={tier:f,firstFrame:Et,setChapter(dt){let Vt=+dt;Number.isFinite(Vt)&&(Nt=De(Vt,0,Ac))},setPointer(dt,Vt){!y||t||($t.tx=De(+dt||0,-1,1),$t.ty=De(+Vt||0,-1,1))},resize(){Ft||(rt(),!mt&&z>0&&!Ht&&(Y(0,performance.now()),ht()))},start(){mt||Ft||Ht||(mt=!0,Tt=0,gt=requestAnimationFrame(ge))},stop(){mt=!1,cancelAnimationFrame(gt),gt=0},intro(){return ft.state==="done"?Promise.resolve():(ft.promise||(ft.promise=new Promise(dt=>{ft.resolve=dt})),ft.state==="dim"&&k(performance.now(),!0),ft.promise)},project(dt,Vt){return Vt.visible=!1,!qa(dt,yn)||(Yi.copy(yn).applyMatrix4(d.matrixWorldInverse),Yi.z>-d.near)||(yn.project(d),Vt.x=(yn.x*.5+.5)*G,Vt.y=(.5-yn.y*.5)*F,Vt.visible=yn.x>-.98&&yn.x<.98&&yn.y>-.96&&yn.y<.96),Vt},onFrame(dt){return typeof dt!="function"?()=>{}:(yt.push(dt),()=>{let Vt=yt.indexOf(dt);Vt>=0&&yt.splice(Vt,1)})},info(){let dt=u.info.memory;return{tier:f.name,preset:h,dpr:Math.round(J*100)/100,dprScale:Math.round(at*100)/100,size:[H,W],css:[G,F],portrait:j,calls:xt,triangles:vt,sceneCalls:et,sceneTriangles:pt,programs:u.info.programs?u.info.programs.length:0,textures:dt.textures,geometries:dt.geometries,msaa:N.samples,dofTaps:N.dofOn?N.dofTaps:0,bloomLevels:N.bloomOn?N.levels:0,post:wt?wt.post:ut,buildMs:Z,longestTask:c?Math.round(o):null,longestSlice:ct,longestSliceLabel:bt,staticTriangles:S.stats.tris.total+M.stats.tris,lines:S.stats.lines,connectors:S.stats.connectors,wirebonds:M.stats.bonds,airbridges:M.stats.bridges,frames:z,chapter:Math.round(Dt.x*1e3)/1e3}},dispose(){if(!Ft){if(Ft=!0,Zi.stop(),i.removeEventListener("webglcontextlost",fe,!1),i.removeEventListener("webglcontextrestored",ln,!1),c)try{c.disconnect()}catch{}yt.length=0,m.traverse(dt=>{dt.isInstancedMesh&&dt.dispose(),dt.geometry&&dt.geometry.dispose();let Vt=dt.material;Vt&&(Array.isArray(Vt)?Vt:[Vt]).forEach(re=>{for(let Kt in re){let me=re[Kt];me&&me.isTexture&&me.dispose()}re.dispose()})});for(let dt of[...S.textures,...M.textures])dt.dispose();v.dispose(),N.dispose(),u.dispose(),ft.resolve&&(ft.resolve(),ft.resolve=null)}}};return Object.keys(s).length&&(Zi._debug={scene:m,camera:d,renderer:u,machine:S,chip:M,post:N,U:E,rig:D,renderStill(dt=8){let Vt=[.5,.3333,.25,.75,.125,.625,.375,.875,.0625,.5625,.3125,.8125,.1875,.6875,.4375,.9375],re=[.3333,.6667,.1111,.4444,.7778,.2222,.5556,.8889,.037,.3704,.7037,.1481,.4815,.8148,.2593,.5926];for(let Kt=0;Kt<dt;Kt++)K=Vt[Kt%16]-.5,tt=re[Kt%16]-.5,Y(0,performance.now()),u.info.reset(),N.accumulate(Kt,dt);K=tt=0,N.present(1/255),z++},update:dt=>Y(dt,performance.now()),render:ht,setTime(dt){ne=dt,Jt=dt}}),Zi}export{NM as createScene};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
