// https://github.com/WebReflection/wru
function wru(wru){var assert=wru.assert,async=wru.async,log=wru.log;

// enojy your tests!



wru.test([
    {
        name: "it works!",
        test: function () {
            // sync
            wru.assert(1);
            
            // async
            setTimeout(async(function () { // wru.async
                assert("called"); // wru.assert
            }), 500);
        }
    }
]);



}





// wru related code
/*!
(C) Andrea Giammarchi, @WebReflection - Mit Style License
*/
if(typeof global!="undefined"){var setTimeout=global.setTimeout,setInterval=global.setInterval,clearInterval=global.clearInterval,clearTimeout=global.clearTimeout;setTimeout||(function(h,c,g,a){setInterval=global.setInterval=function b(j,i){return e(j,i,g.call(arguments,2),1)};setTimeout=global.setTimeout=function d(j,i){return e(j,i,g.call(arguments,2))};clearInterval=global.clearInterval=clearTimeout=global.clearTimeout=function f(i){c[i].cancel();h.purge();delete c[i]};function e(l,k,j,i){var m=++a;c[m]=new JavaAdapter(java.util.TimerTask,{run:function(){l.apply(null,j)}});i?h.schedule(c[m],k,k):h.schedule(c[m],k);return m}})(new java.util.Timer(),{},[].slice,0)}else{!function(c,b,a,e){function d(f,g){var h=new Date;while(new Date-h<g){}f.apply(null,e.call(arguments,2))}e=a.slice;c.setTimeout=c.setInterval=d;c.clearInterval=c.clearTimeout=function(){}}(this,0,[])}wru(function(U){function h(){w=F.call(j);if(w){if(typeof w=="function"){w={name:w[O]||"anonymous",test:w}}l(Z);l((ad(w,O)&&w[O])||(ad(w,e)&&w[e])||L);a=[];q=[];P=[];X={};b("setup");P[ae]||b("test");I||n()}else{p()}}function l(ah,ag){ah=ah+(ag?"":"\n");try{require("util").print(ah)}catch(af){try{require('util').print(ah)}catch(af){try{java.lang.System.out.print(ah)}catch(af){try{console.log(ah)}catch(af){print(ah)}}}}}function p(){l(g);l(Z);switch(true){case !!aa:l(N+"   "+aa+" Errors");case !!z:l(J+g+z+" Failures");default:l(y+"      "+o+" Passes")}l(Z);l(g);try{process.exit()}catch(af){quit()}}function c(af){for(var ag=0,ah=af[ae];ag<ah;l("    "+(++ag)+". "+af[ag-1])){}}function n(){f();o+=a[ae];z+=q[ae];aa+=P[ae];if(P[ae]){S=N;c(P)}else{if(q[ae]){S=J;c(q)}else{S=y}}l(S+" passes: "+a[ae]+", fails: "+q[ae]+", errors: "+P[ae]);H=0;S=g;h()}function b(af){if(ad(w,af)){try{w[af](X)}catch(ag){W.call(P,g+ag)}}}function ad(ag,af){return m.call(ag,af)}function s(){return B()<0.5?-1:1}function f(){if(M){C(M);M=0}b("teardown")}var V={assert:function Q(ag,af){if(arguments[ae]==1){af=ag;ag=L}v=D;W.call(af?a:q,S+ag);return af},async:function R(ag,aj,ah,ai){ai=++I;if(typeof ag=="function"){ah=aj;aj=ag;ag="asynchronous test #"+ai}ah=T(function(){ai=0;W.call(q,ag);--I||(M=T(n,0))},G(ah||u)||u);return function af(){if(!ai){return}v=ab;S=ag+": ";try{aj.apply(this,arguments)}catch(ak){v=D;W.call(P,S+ak)}S=g;if(v){C(ah);--I||(M=T(n,0))}}},test:function k(af){j=E.apply(j,[af]);V.random&&ac.call(j,s);I||h()}},D=true,ab=!D,u=100,g=" ",L="unknown",ae="length",O="name",e="description",A="<li>",d="</li>",i="\\|/-",m=V.hasOwnProperty,S=g,Y=S.charAt,t=S.slice,j=[],E=j.concat,r=j.join,W=j.push,F=j.shift,ac=j.sort,I=0,H=0,o=0,z=0,aa=0,M=0,N="\x1B[1;31mERROR\x1B[0m",J="\x1B[0;31mFAILURE\x1B[0m",y="\x1B[0;32mOK\x1B[0m",Z="------------------------------",x,G,B,T,C,w,K,a,q,P,X,v;V.log=function(ah,ag){try{if(ag){throw new Error}console.log(ah)}catch(af){l(ah,0)}};if(typeof __dirname!="undefined"){U.wru=V;U.assert=V.assert;U.async=V.async;U.test=V.test;U.log=V.log;U.random=false;U=global}x=U.Math;G=x.abs;B=x.random;T=U.setTimeout;C=U.clearTimeout;U.setInterval(function(){I&&l(g+Y.call(i,H++%4)+"\b\b",true)},u);undefined;u*=u;V.random=ab;return V}(this));