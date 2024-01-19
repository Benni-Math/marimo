function q(e){return function(){return e}}const M=Math.PI,x=2*M,u=1e-6,A=x-u;function T(e){this._+=e[0];for(let t=1,h=e.length;t<h;++t)this._+=arguments[t]+e[t]}function L(e){let t=Math.floor(e);if(!(t>=0))throw new Error(`invalid digits: ${e}`);if(t>15)return T;const h=10**t;return function(i){this._+=i[0];for(let s=1,n=i.length;s<n;++s)this._+=Math.round(arguments[s]*h)/h+i[s]}}class y{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=t==null?T:L(t)}moveTo(t,h){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+h}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,h){this._append`L${this._x1=+t},${this._y1=+h}`}quadraticCurveTo(t,h,i,s){this._append`Q${+t},${+h},${this._x1=+i},${this._y1=+s}`}bezierCurveTo(t,h,i,s,n,$){this._append`C${+t},${+h},${+i},${+s},${this._x1=+n},${this._y1=+$}`}arcTo(t,h,i,s,n){if(t=+t,h=+h,i=+i,s=+s,n=+n,n<0)throw new Error(`negative radius: ${n}`);let $=this._x1,r=this._y1,p=i-t,o=s-h,_=$-t,l=r-h,a=_*_+l*l;if(this._x1===null)this._append`M${this._x1=t},${this._y1=h}`;else if(a>u)if(!(Math.abs(l*p-o*_)>u)||!n)this._append`L${this._x1=t},${this._y1=h}`;else{let d=i-$,f=s-r,g=p*p+o*o,m=d*d+f*f,v=Math.sqrt(g),w=Math.sqrt(a),b=n*Math.tan((M-Math.acos((g+a-m)/(2*v*w)))/2),c=b/w,E=b/v;Math.abs(c-1)>u&&this._append`L${t+c*_},${h+c*l}`,this._append`A${n},${n},0,0,${+(l*d>_*f)},${this._x1=t+E*p},${this._y1=h+E*o}`}}arc(t,h,i,s,n,$){if(t=+t,h=+h,i=+i,$=!!$,i<0)throw new Error(`negative radius: ${i}`);let r=i*Math.cos(s),p=i*Math.sin(s),o=t+r,_=h+p,l=1^$,a=$?s-n:n-s;this._x1===null?this._append`M${o},${_}`:(Math.abs(this._x1-o)>u||Math.abs(this._y1-_)>u)&&this._append`L${o},${_}`,i&&(a<0&&(a=a%x+x),a>A?this._append`A${i},${i},0,1,${l},${t-r},${h-p}A${i},${i},0,1,${l},${this._x1=o},${this._y1=_}`:a>u&&this._append`A${i},${i},0,${+(a>=M)},${l},${this._x1=t+i*Math.cos(n)},${this._y1=h+i*Math.sin(n)}`)}rect(t,h,i,s){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+h}h${i=+i}v${+s}h${-i}Z`}toString(){return this._}}function P(){return new y}P.prototype=y.prototype;function C(e){let t=3;return e.digits=function(h){if(!arguments.length)return t;if(h==null)t=null;else{const i=Math.floor(h);if(!(i>=0))throw new RangeError(`invalid digits: ${h}`);t=i}return e},()=>new y(t)}export{q as c,P as p,C as w};
