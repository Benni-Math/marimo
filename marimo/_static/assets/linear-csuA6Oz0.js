import{a5 as M,a as x,e4 as S,j as p,e5 as v,k as d,o as D,aA as F,ad as B,e6 as I,e7 as P,e8 as V,e9 as $,ae as q,ac as z,ea as L}from"./index-eyYnuVcN.js";import{i as O}from"./init-4gVu3fm3.js";function T(n){return n===null?NaN:+n}function*an(n,r){if(r===void 0)for(let e of n)e!=null&&(e=+e)>=e&&(yield e);else{let e=-1;for(let t of n)(t=r(t,++e,n))!=null&&(t=+t)>=t&&(yield t)}}const k=M(x),C=k.right,un=k.left;M(T).center;const E=C;function w(n,r){r||(r=[]);var e=n?Math.min(r.length,n.length):0,t=r.slice(),i;return function(u){for(i=0;i<e;++i)t[i]=n[i]*(1-u)+r[i]*u;return t}}function A(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function on(n,r){return(A(r)?w:j)(n,r)}function j(n,r){var e=r?r.length:0,t=n?Math.min(e,n.length):0,i=new Array(t),u=new Array(e),a;for(a=0;a<t;++a)i[a]=y(n[a],r[a]);for(;a<e;++a)u[a]=r[a];return function(f){for(a=0;a<t;++a)u[a]=i[a](f);return u}}function G(n,r){var e=new Date;return n=+n,r=+r,function(t){return e.setTime(n*(1-t)+r*t),e}}function H(n,r){var e={},t={},i;(n===null||typeof n!="object")&&(n={}),(r===null||typeof r!="object")&&(r={});for(i in r)i in n?e[i]=y(n[i],r[i]):t[i]=r[i];return function(u){for(i in e)t[i]=e[i](u);return t}}function y(n,r){var e=typeof r,t;return r==null||e==="boolean"?S(r):(e==="number"?p:e==="string"?(t=v(r))?(r=t,d):D:r instanceof v?d:r instanceof Date?G:A(r)?w:Array.isArray(r)?j:typeof r.valueOf!="function"&&typeof r.toString!="function"||isNaN(r)?H:p)(n,r)}function J(n,r){return n=+n,r=+r,function(e){return Math.round(n*(1-e)+r*e)}}function K(n){return function(){return n}}function Q(n){return+n}var N=[0,1];function h(n){return n}function g(n,r){return(r-=n=+n)?function(e){return(e-n)/r}:K(isNaN(r)?NaN:.5)}function U(n,r){var e;return n>r&&(e=n,n=r,r=e),function(t){return Math.max(n,Math.min(r,t))}}function W(n,r,e){var t=n[0],i=n[1],u=r[0],a=r[1];return i<t?(t=g(i,t),u=e(a,u)):(t=g(t,i),u=e(u,a)),function(f){return u(t(f))}}function X(n,r,e){var t=Math.min(n.length,r.length)-1,i=new Array(t),u=new Array(t),a=-1;for(n[t]<n[0]&&(n=n.slice().reverse(),r=r.slice().reverse());++a<t;)i[a]=g(n[a],n[a+1]),u[a]=e(r[a],r[a+1]);return function(f){var s=E(n,f,1,t)-1;return u[s](i[s](f))}}function Y(n,r){return r.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown())}function Z(){var n=N,r=N,e=y,t,i,u,a=h,f,s,c;function m(){var o=Math.min(n.length,r.length);return a!==h&&(a=U(n[0],n[o-1])),f=o>2?X:W,s=c=null,l}function l(o){return o==null||isNaN(o=+o)?u:(s||(s=f(n.map(t),r,e)))(t(a(o)))}return l.invert=function(o){return a(i((c||(c=f(r,n.map(t),p)))(o)))},l.domain=function(o){return arguments.length?(n=Array.from(o,Q),m()):n.slice()},l.range=function(o){return arguments.length?(r=Array.from(o),m()):r.slice()},l.rangeRound=function(o){return r=Array.from(o),e=J,m()},l.clamp=function(o){return arguments.length?(a=o?!0:h,m()):a!==h},l.interpolate=function(o){return arguments.length?(e=o,m()):e},l.unknown=function(o){return arguments.length?(u=o,l):u},function(o,R){return t=o,i=R,m()}}function _(){return Z()(h,h)}function b(n,r,e,t){var i=F(n,r,e),u;switch(t=B(t??",f"),t.type){case"s":{var a=Math.max(Math.abs(n),Math.abs(r));return t.precision==null&&!isNaN(u=V(i,a))&&(t.precision=u),$(t,a)}case"":case"e":case"g":case"p":case"r":{t.precision==null&&!isNaN(u=P(i,Math.max(Math.abs(n),Math.abs(r))))&&(t.precision=u-(t.type==="e"));break}case"f":case"%":{t.precision==null&&!isNaN(u=I(i))&&(t.precision=u-(t.type==="%")*2);break}}return q(t)}function nn(n){var r=n.domain;return n.ticks=function(e){var t=r();return z(t[0],t[t.length-1],e??10)},n.tickFormat=function(e,t){var i=r();return b(i[0],i[i.length-1],e??10,t)},n.nice=function(e){e==null&&(e=10);var t=r(),i=0,u=t.length-1,a=t[i],f=t[u],s,c,m=10;for(f<a&&(c=a,a=f,f=c,c=i,i=u,u=c);m-- >0;){if(c=L(a,f,e),c===s)return t[i]=a,t[u]=f,r(t);if(c>0)a=Math.floor(a/c)*c,f=Math.ceil(f/c)*c;else if(c<0)a=Math.ceil(a*c)/c,f=Math.floor(f*c)/c;else break;s=c}return n},n}function rn(){var n=_();return n.copy=function(){return Y(n,rn())},O.apply(n,arguments),nn(n)}export{T as a,on as b,w as c,G as d,J as e,Q as f,Y as g,h,y as i,E as j,rn as k,nn as l,C as m,an as n,H as o,b as p,un as q,_ as r,Z as t};