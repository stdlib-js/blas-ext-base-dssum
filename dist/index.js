"use strict";var a=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var i=a(function(g,t){
var p=require('@stdlib/blas-ext-base-dssumpw/dist').ndarray;function y(e,r,s,c){return p(e,r,s,c)}t.exports=y
});var v=a(function(h,n){
var f=require('@stdlib/strided-base-stride2offset/dist'),x=i();function j(e,r,s){return x(e,r,s,f(e,s))}n.exports=j
});var o=a(function(k,q){
var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=v(),R=i();l(d,"ndarray",R);q.exports=d
});var _=require("path").join,w=require('@stdlib/utils-try-require/dist'),E=require('@stdlib/assert-is-error/dist'),O=o(),u,m=w(_(__dirname,"./native.js"));E(m)?u=O:u=m;module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
