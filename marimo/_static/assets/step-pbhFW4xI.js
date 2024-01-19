const X=Math.abs,Y=Math.atan2,D=Math.cos,I=Math.max,F=Math.min,G=Math.sin,H=Math.sqrt,w=1e-12,y=Math.PI,N=y/2,J=2*y;function K(t){return t>1?0:t<-1?y:Math.acos(t)}function Q(t){return t>=1?N:t<=-1?-N:Math.asin(t)}function P(t){this._context=t}P.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(t,i){switch(t=+t,i=+i,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,i):this._context.moveTo(t,i);break;case 1:this._point=2;default:this._context.lineTo(t,i);break}}};function U(t){return new P(t)}function a(){}function l(t,i,s){t._context.bezierCurveTo((2*t._x0+t._x1)/3,(2*t._y0+t._y1)/3,(t._x0+2*t._x1)/3,(t._y0+2*t._y1)/3,(t._x0+4*t._x1+i)/6,(t._y0+4*t._y1+s)/6)}function p(t){this._context=t}p.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:l(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(t,i){switch(t=+t,i=+i,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,i):this._context.moveTo(t,i);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:l(this,t,i);break}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=i}};function V(t){return new p(t)}function B(t){this._context=t}B.prototype={areaStart:a,areaEnd:a,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x2,this._y2),this._context.closePath();break}case 2:{this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break}case 3:{this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4);break}}},point:function(t,i){switch(t=+t,i=+i,this._point){case 0:this._point=1,this._x2=t,this._y2=i;break;case 1:this._point=2,this._x3=t,this._y3=i;break;case 2:this._point=3,this._x4=t,this._y4=i,this._context.moveTo((this._x0+4*this._x1+t)/6,(this._y0+4*this._y1+i)/6);break;default:l(this,t,i);break}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=i}};function W(t){return new B(t)}function R(t){this._context=t}R.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(t,i){switch(t=+t,i=+i,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var s=(this._x0+4*this._x1+t)/6,n=(this._y0+4*this._y1+i)/6;this._line?this._context.lineTo(s,n):this._context.moveTo(s,n);break;case 3:this._point=4;default:l(this,t,i);break}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=i}};function Z(t){return new R(t)}function z(t,i){this._basis=new p(t),this._beta=i}z.prototype={lineStart:function(){this._x=[],this._y=[],this._basis.lineStart()},lineEnd:function(){var t=this._x,i=this._y,s=t.length-1;if(s>0)for(var n=t[0],h=i[0],_=t[s]-n,e=i[s]-h,o=-1,c;++o<=s;)c=o/s,this._basis.point(this._beta*t[o]+(1-this._beta)*(n+c*_),this._beta*i[o]+(1-this._beta)*(h+c*e));this._x=this._y=null,this._basis.lineEnd()},point:function(t,i){this._x.push(+t),this._y.push(+i)}};const tt=function t(i){function s(n){return i===1?new p(n):new z(n,i)}return s.beta=function(n){return t(+n)},s}(.85);function r(t,i,s){t._context.bezierCurveTo(t._x1+t._k*(t._x2-t._x0),t._y1+t._k*(t._y2-t._y0),t._x2+t._k*(t._x1-i),t._y2+t._k*(t._y1-s),t._x2,t._y2)}function b(t,i){this._context=t,this._k=(1-i)/6}b.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:r(this,this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(t,i){switch(t=+t,i=+i,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,i):this._context.moveTo(t,i);break;case 1:this._point=2,this._x1=t,this._y1=i;break;case 2:this._point=3;default:r(this,t,i);break}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=i}};const it=function t(i){function s(n){return new b(n,i)}return s.tension=function(n){return t(+n)},s}(0);function k(t,i){this._context=t,this._k=(1-i)/6}k.prototype={areaStart:a,areaEnd:a,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x3,this._y3),this._context.closePath();break}case 2:{this._context.lineTo(this._x3,this._y3),this._context.closePath();break}case 3:{this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5);break}}},point:function(t,i){switch(t=+t,i=+i,this._point){case 0:this._point=1,this._x3=t,this._y3=i;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=i);break;case 2:this._point=3,this._x5=t,this._y5=i;break;default:r(this,t,i);break}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=i}};const st=function t(i){function s(n){return new k(n,i)}return s.tension=function(n){return t(+n)},s}(0);function d(t,i){this._context=t,this._k=(1-i)/6}d.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(t,i){switch(t=+t,i=+i,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:r(this,t,i);break}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=i}};const nt=function t(i){function s(n){return new d(n,i)}return s.tension=function(n){return t(+n)},s}(0);function v(t,i,s){var n=t._x1,h=t._y1,_=t._x2,e=t._y2;if(t._l01_a>w){var o=2*t._l01_2a+3*t._l01_a*t._l12_a+t._l12_2a,c=3*t._l01_a*(t._l01_a+t._l12_a);n=(n*o-t._x0*t._l12_2a+t._x2*t._l01_2a)/c,h=(h*o-t._y0*t._l12_2a+t._y2*t._l01_2a)/c}if(t._l23_a>w){var T=2*t._l23_2a+3*t._l23_a*t._l12_a+t._l12_2a,m=3*t._l23_a*(t._l23_a+t._l12_a);_=(_*T+t._x1*t._l23_2a-i*t._l12_2a)/m,e=(e*T+t._y1*t._l23_2a-s*t._l12_2a)/m}t._context.bezierCurveTo(n,h,_,e,t._x2,t._y2)}function O(t,i){this._context=t,this._alpha=i}O.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:this.point(this._x2,this._y2);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(t,i){if(t=+t,i=+i,this._point){var s=this._x2-t,n=this._y2-i;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(s*s+n*n,this._alpha))}switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,i):this._context.moveTo(t,i);break;case 1:this._point=2;break;case 2:this._point=3;default:v(this,t,i);break}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=i}};const _t=function t(i){function s(n){return i?new O(n,i):new b(n,0)}return s.alpha=function(n){return t(+n)},s}(.5);function q(t,i){this._context=t,this._alpha=i}q.prototype={areaStart:a,areaEnd:a,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x3,this._y3),this._context.closePath();break}case 2:{this._context.lineTo(this._x3,this._y3),this._context.closePath();break}case 3:{this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5);break}}},point:function(t,i){if(t=+t,i=+i,this._point){var s=this._x2-t,n=this._y2-i;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(s*s+n*n,this._alpha))}switch(this._point){case 0:this._point=1,this._x3=t,this._y3=i;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=i);break;case 2:this._point=3,this._x5=t,this._y5=i;break;default:v(this,t,i);break}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=i}};const ht=function t(i){function s(n){return i?new q(n,i):new k(n,0)}return s.alpha=function(n){return t(+n)},s}(.5);function g(t,i){this._context=t,this._alpha=i}g.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(t,i){if(t=+t,i=+i,this._point){var s=this._x2-t,n=this._y2-i;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(s*s+n*n,this._alpha))}switch(this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:v(this,t,i);break}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=i}};const et=function t(i){function s(n){return i?new g(n,i):new d(n,0)}return s.alpha=function(n){return t(+n)},s}(.5);function A(t){this._context=t}A.prototype={areaStart:a,areaEnd:a,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(t,i){t=+t,i=+i,this._point?this._context.lineTo(t,i):(this._point=1,this._context.moveTo(t,i))}};function ot(t){return new A(t)}function S(t){return t<0?-1:1}function E(t,i,s){var n=t._x1-t._x0,h=i-t._x1,_=(t._y1-t._y0)/(n||h<0&&-0),e=(s-t._y1)/(h||n<0&&-0),o=(_*h+e*n)/(n+h);return(S(_)+S(e))*Math.min(Math.abs(_),Math.abs(e),.5*Math.abs(o))||0}function C(t,i){var s=t._x1-t._x0;return s?(3*(t._y1-t._y0)/s-i)/2:i}function x(t,i,s){var n=t._x0,h=t._y0,_=t._x1,e=t._y1,o=(_-n)/3;t._context.bezierCurveTo(n+o,h+o*i,_-o,e-o*s,_,e)}function u(t){this._context=t}u.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:x(this,this._t0,C(this,this._t0));break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(t,i){var s=NaN;if(t=+t,i=+i,!(t===this._x1&&i===this._y1)){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,i):this._context.moveTo(t,i);break;case 1:this._point=2;break;case 2:this._point=3,x(this,C(this,s=E(this,t,i)),s);break;default:x(this,this._t0,s=E(this,t,i));break}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=i,this._t0=s}}};function L(t){this._context=new j(t)}(L.prototype=Object.create(u.prototype)).point=function(t,i){u.prototype.point.call(this,i,t)};function j(t){this._context=t}j.prototype={moveTo:function(t,i){this._context.moveTo(i,t)},closePath:function(){this._context.closePath()},lineTo:function(t,i){this._context.lineTo(i,t)},bezierCurveTo:function(t,i,s,n,h,_){this._context.bezierCurveTo(i,t,n,s,_,h)}};function at(t){return new u(t)}function ct(t){return new L(t)}function $(t){this._context=t}$.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var t=this._x,i=this._y,s=t.length;if(s)if(this._line?this._context.lineTo(t[0],i[0]):this._context.moveTo(t[0],i[0]),s===2)this._context.lineTo(t[1],i[1]);else for(var n=M(t),h=M(i),_=0,e=1;e<s;++_,++e)this._context.bezierCurveTo(n[0][_],h[0][_],n[1][_],h[1][_],t[e],i[e]);(this._line||this._line!==0&&s===1)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(t,i){this._x.push(+t),this._y.push(+i)}};function M(t){var i,s=t.length-1,n,h=new Array(s),_=new Array(s),e=new Array(s);for(h[0]=0,_[0]=2,e[0]=t[0]+2*t[1],i=1;i<s-1;++i)h[i]=1,_[i]=4,e[i]=4*t[i]+2*t[i+1];for(h[s-1]=2,_[s-1]=7,e[s-1]=8*t[s-1]+t[s],i=1;i<s;++i)n=h[i]/_[i-1],_[i]-=n,e[i]-=n*e[i-1];for(h[s-1]=e[s-1]/_[s-1],i=s-2;i>=0;--i)h[i]=(e[i]-h[i+1])/_[i];for(_[s-1]=(t[s]+h[s-1])/2,i=0;i<s-1;++i)_[i]=2*t[i+1]-h[i+1];return[h,_]}function lt(t){return new $(t)}function f(t,i){this._context=t,this._t=i}f.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&this._point===2&&this._context.lineTo(this._x,this._y),(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(t,i){switch(t=+t,i=+i,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,i):this._context.moveTo(t,i);break;case 1:this._point=2;default:{if(this._t<=0)this._context.lineTo(this._x,i),this._context.lineTo(t,i);else{var s=this._x*(1-this._t)+t*this._t;this._context.lineTo(s,this._y),this._context.lineTo(s,i)}break}}this._x=t,this._y=i}};function rt(t){return new f(t,.5)}function ut(t){return new f(t,0)}function pt(t){return new f(t,1)}export{X as A,Y as B,Q as C,K as D,I as E,V as a,W as b,U as c,Z as d,tt as e,it as f,nt as g,st as h,_t as i,ht as j,et as k,ot as l,ct as m,at as n,lt as o,y as p,rt as q,pt as r,H as s,J as t,ut as u,D as v,G as w,N as x,w as y,F as z};