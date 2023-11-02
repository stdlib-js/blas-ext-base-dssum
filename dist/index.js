"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var t=u(function(b,a){
var c=require('@stdlib/blas-ext-base-dssumpw/dist');function y(e,r,s){return c(e,r,s)}a.exports=y
});var v=u(function(g,n){
var x=require('@stdlib/blas-ext-base-dssumpw/dist').ndarray;function f(e,r,s,p){return x(e,r,s,p)}n.exports=f
});var m=u(function(h,q){
var j=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=t(),l=v();j(d,"ndarray",l);q.exports=d
});var w=require("path").join,R=require('@stdlib/utils-try-require/dist'),_=require('@stdlib/assert-is-error/dist'),E=m(),i,o=R(w(__dirname,"./native.js"));_(o)?i=E:i=o;module.exports=i;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
