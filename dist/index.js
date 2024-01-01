"use strict";var s=function(u,e){return function(){return e||u((e={exports:{}}).exports,e),e.exports}};var a=s(function(C,o){
var g=typeof String.prototype.endsWith!="undefined";o.exports=g
});var l=s(function(I,d){
function x(u,e,i){var r,t,n;if(t=e.length,i===0)return t===0;if(i<0?r=u.length+i:r=i,t===0)return!0;if(r-=t,r<0)return!1;for(n=0;n<t;n++)if(u.charCodeAt(r+n)!==e.charCodeAt(n))return!1;return!0}d.exports=x
});var h=s(function(m,v){
var W=String.prototype.endsWith;v.exports=W
});var c=s(function(B,p){
var q=h();function y(u,e,i){var r,t;return t=e.length,i===0?t===0:(i<0?r=u.length+i:r=i,t===0?!0:r-t<0||r>u.length?!1:q.call(u,e,r))}p.exports=y
});var A=a(),N=l(),S=c(),f;A?f=S:f=N;module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
