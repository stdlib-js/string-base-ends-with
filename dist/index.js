"use strict";var s=function(u,r){return function(){try{return r||u((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var a=s(function(C,o){
var g=typeof String.prototype.endsWith!="undefined";o.exports=g
});var l=s(function(I,d){
function x(u,r,e){var t,i,n;if(i=r.length,e===0)return i===0;if(e<0?t=u.length+e:t=e,i===0)return!0;if(t-=i,t<0)return!1;for(n=0;n<i;n++)if(u.charCodeAt(t+n)!==r.charCodeAt(n))return!1;return!0}d.exports=x
});var h=s(function(m,v){
var W=String.prototype.endsWith;v.exports=W
});var c=s(function(B,p){
var q=h();function y(u,r,e){var t,i;return i=r.length,e===0?i===0:(e<0?t=u.length+e:t=e,i===0?!0:t-i<0||t>u.length?!1:q.call(u,r,t))}p.exports=y
});var A=a(),N=l(),S=c(),f;A?f=S:f=N;module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
