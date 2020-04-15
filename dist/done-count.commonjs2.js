module.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){return function(){var t,n=l(e);if(c()){var o=l(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return i(this,t)}}function i(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?a(e):t}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},u=Object.keys(e);for(o=0;o<u.length;o++)n=u[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(o=0;o<u.length;o++)n=u[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function y(e,t,n){return t&&h(e.prototype,t),n&&h(e,n),e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t),n.d(t,"DoneCount",(function(){return v})),n.d(t,"NamedDoneCount",(function(){return g})),n.d(t,"conflictPolicy_Add",(function(){return p})),n.d(t,"conflictPolicy_Reset",(function(){return N})),n.d(t,"conflictPolicy_Recreate",(function(){return D})),n.d(t,"conflictPolicy_Update",(function(){return _})),n.d(t,"autoDeleteTarget_ForcedDone",(function(){return k})),n.d(t,"autoDeleteTarget_RealDone",(function(){return b})),n.d(t,"autoDeleteTarget_Done",(function(){return M})),n.d(t,"autoDeleteMode_Delay",(function(){return O})),n.d(t,"autoDeleteMode_Immediately",(function(){return R})),n.d(t,"autoDeleteMode_No",(function(){return T})),n.d(t,"DoneCountManager",(function(){return j})),n.d(t,"NamedDoneCountManager",(function(){return P}));var v=function(){function e(t){if(d(this,e),m(this,"forcedDone",!1),"object"==f(t))var n=t.total,o=s(t,["total"]);else n=t;this.total=n,o&&Object.assign(this,o)}return y(e,[{key:"total",get:function(){return null==this.oriTotal&&(this.oriTotal=1),this.oriTotal},set:function(e){this.oriTotal=e}},{key:"doneNum",get:function(){return this._doneNum||(this._doneNum=0),this._doneNum},set:function(e){this._doneNum=e||0}}]),y(e,[{key:"reset",value:function(){this.total=1,this.resetDoneNum()}},{key:"resetDoneNum",value:function(){this.doneNum=0}},{key:"doneAgain",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return this.doneNum+=e,this.done}},{key:"undoneNum",get:function(){var e=this.total,t=this.doneNum;return e<t?0:e-t}},{key:"done",get:function(){return this.forcedDone||this.realDone}},{key:"realDone",get:function(){return this.total<=this.doneNum}}]),e}(),g=function(e){o(n,e);var t=u(n);function n(e){var o;if(d(this,n),"object"==f(e))var r=e.total,u=e.namesOrNum,i=e.names,c=e.doneNum,l=s(e,["total","namesOrNum","names","doneNum"]);else r=e;return m(a(o=t.call(this,r)),"autoIncrTotalIfRepeat",void 0),o.total=r,i?o.doneAgainNames(i):null!=c?o._doneNum=c:o.doneNum=u,l&&Object.assign(a(o),l),o}return y(n,[{key:"resetDoneNum",value:function(){this.nameRecord.clear(),this._doneNum=0}},{key:"doneAgain",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return"number"==typeof e?this._doneNum+=e:this.doneAgainNames(e),this.done}},{key:"doneAgainNames",value:function(e){Array.isArray(e)||(e=[e]);var t=this.nameRecord;return e.forEach((function(e){var n=t.get(e)||0;t.set(e,++n)})),this.done}},{key:"has",value:function(e){return this.nameRecord.has(e)}},{key:"getNameNum",value:function(e){var t=this.nameRecord.get(e)||0;return Math.min(t,this.maxRepetNum)}},{key:"total",get:function(){return this.autoIncrTotalIfRepeat?this.oriTotal*(this.maxNameNum||1):this.oriTotal},set:function(e){this.oriTotal=e}},{key:"oriTotal",get:function(){return null==this._oriTotal&&(this._oriTotal=1),this._oriTotal},set:function(e){this._oriTotal=e}},{key:"nameRecord",get:function(){return this._nameRecord||(this._nameRecord=new Map),this._nameRecord}},{key:"maxRepetNum",get:function(){var e=this._maxRepetNum;return e&&e>0?e:1/0},set:function(e){this._maxRepetNum=e}},{key:"nameNum",get:function(){var e=0,t=this.maxRepetNum;return this.nameRecord.forEach((function(n,o){e+=Math.min(n,t)})),e}},{key:"_doneNum",get:function(){return null==this._doneNum_&&(this._doneNum_=0),this._doneNum_},set:function(e){this._doneNum_=e}},{key:"doneNum",get:function(){return this.nameNum+this._doneNum},set:function(e){"number"==typeof e?this.doneNum<e?this._doneNum=e-this.nameNum:(this.resetDoneNum(),this._doneNum=e):null==e?this.resetDoneNum():this.doneAgainNames(e)}},{key:"maxNameNum",get:function(){var e=Array.from(this.nameRecord.values()),t=e.length>0?Math.max.apply(Math,e):0;return Math.min(t,this.maxRepetNum)}}]),n}(v),p="Add",N="Reset",D="Recreate",_="Update",k="ForcedDone",b="RealDone",M="Done",O="Delay",R="Immediately",T="No",j=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};d(this,e),Object.assign(this,t)}return y(e,[{key:"_createDoneCount",value:function(e){return new v(e)}},{key:"_confDoneCount",value:function(e,t){t.doneNum;var n=s(t,["doneNum"]);return Object.assign(e,n),e}},{key:"delayClearKey",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.clearDelay,o=this.doneMap.get(e);o.done&&setTimeout((function(){t.clearKey(e)}),n)}},{key:"clearKey",value:function(e){var t=this.doneMap,n=t.get(e),o=!n||n.done;return n&&o&&t.delete(e),o}},{key:"clear",value:function(){var e=this;return Array.from(this.doneMap.keys()).every((function(t){return e.clearKey(t)}))}},{key:"forcedDoneKey",value:function(e){var t=this.doneMap.get(e);t&&(t.forcedDone=!0)}},{key:"forcedDone",value:function(){this.doneMap.forEach((function(e){e.forcedDone=!0}))}},{key:"register",value:function(e){if("object"==f(e))var t=e.key,n=e.total,o=void 0===n?1:n,r=e.conflictPolicy,u=s(e,["key","total","conflictPolicy"]);else t=e,o=1;r=r||this.conflictPolicy;var i=this.doneMap,a=i.get(t);if(!a||a.realDone)a=this._createDoneCount(o);else if(a.oriTotal!=o)switch(r){case D:a=this._createDoneCount(o);break;case p:a.total+=o;break;case N:a.reset(),a.total=o;break;case _:a.total=o}return u&&(a=this._confDoneCount(a,u)),i.set(t,a),a}},{key:"unsafeDoneAgain",value:function(e){var t=arguments,n=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return function(o){if("object"==f(e))var r=e.key,u=e.doneNum,i=(o=void 0===u?1:u,s(e,["key","doneNum"]));else r=e;var a=n.doneMap.get(r);if(!a){var c="不存在 key 为 ".concat(r," 的 DoneCount 实例；该 key 对应的 DoneCount 可能已经完成，请检查 相关配置选项是否正确； 传入的参数为: ").concat(JSON.stringify(t)),l=new Error(c);return l.name="DoneCountManager",l}return a.doneAgain(o),n.autoDelete(r,i),a}(o)}},{key:"autoDelete",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.autoDeleteMode,o=void 0===n?this.autoDeleteMode:n,r=t.autoDeleteTarget,u=void 0===r?this.autoDeleteTarget:r,i=t.clearDelay,a=this.doneMap.get(e);switch(u){case b:if(!a.realDone)return;break;case k:if(!a.forcedDone)return}switch(o){case O:this.delayClearKey(e,i);break;case R:this.clearKey(e)}}},{key:"doneAgain",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return this.register(e),this.unsafeDoneAgain(e,t)}},{key:"getDoneCount",value:function(e){return this.doneMap.get(e)}},{key:"getUndoneNum",value:function(e){var t=this.getDoneCount(e);return t?t.undoneNum:0}},{key:"getDone",value:function(e){return 0==this.getUndoneNum(e)}},{key:"doneMap",get:function(){return this._doneMap||(this._doneMap=new Map),this._doneMap},set:function(e){this._doneMap=e}},{key:"clearDelay",get:function(){return null==this._clearDelay&&(this._clearDelay=100),this._clearDelay},set:function(e){this._clearDelay=e}},{key:"conflictPolicy",get:function(){return this._conflictPolicy||(this._conflictPolicy=D),this._conflictPolicy},set:function(e){this._conflictPolicy=e}},{key:"autoDeleteTarget",get:function(){return this._autoDeleteTarget||(this._autoDeleteTarget=b),this._autoDeleteTarget},set:function(e){this._autoDeleteTarget=e}},{key:"autoDeleteMode",get:function(){return this._autoDeleteMode||(this._autoDeleteMode=O),this._autoDeleteMode},set:function(e){this._autoDeleteMode=e}},{key:"info",get:function(){var e={total:0,doneNum:0,undoneNum:0},t=[],n=!0;return this.doneMap.forEach((function(o,r){e.total+=o.total,e.doneNum+=o.doneNum,e.undoneNum+=o.undoneNum,t.push(r),o.done||(n=!1)})),e.keys=t,e.allDone=n,e}},{key:"total",get:function(){var e=0;return this.doneMap.forEach((function(t){e+=t.total})),e}},{key:"doneNum",get:function(){var e=0;return this.doneMap.forEach((function(t){e+=t.doneNum})),e}},{key:"undoneNum",get:function(){var e=0;return this.doneMap.forEach((function(t){e+=t.undoneNum})),e}},{key:"done",get:function(){var e=!0;return this.doneMap.forEach((function(t,n){t.done||(e=!1)})),e}}]),e}(),P=function(e){o(n,e);var t=u(n);function n(){var e;d(this,n);for(var o=arguments.length,r=new Array(o),u=0;u<o;u++)r[u]=arguments[u];return m(a(e=t.call.apply(t,[this].concat(r))),"autoIncrTotalIfRepeat",void 0),e}return y(n,[{key:"_createDoneCount",value:function(e){return new g(e)}},{key:"_confDoneCount",value:function(e,t){t.namesOrNum,t.names,t.doneNum;var n=t.autoIncrTotalIfRepeat,o=void 0===n?this.autoIncrTotalIfRepeat:n,r=s(t,["namesOrNum","names","doneNum","autoIncrTotalIfRepeat"]);return r.autoIncrTotalIfRepeat=o,Object.assign(e,r),e}},{key:"unsafeDoneAgain",value:function(e){var t=arguments,n=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return function(o){if("object"==f(e)){var r=e.key,u=(o=e.namesOrNum,e.names),i=e.doneNum,a=s(e,["key","namesOrNum","names","doneNum"]);o=i||o||1}else r=e;var c=n.doneMap.get(r);if(!c){var l="不存在 key 为 ".concat(r," 的 DoneCount 实例；该 key 对应的 DoneCount 可能已经完成，请检查 相关配置选项是否正确； 传入的参数为: ").concat(JSON.stringify(t)),d=new Error(l);return d.name="DoneCountManager",d}return u?c.doneAgainNames(u):c.doneAgain(o),n.autoDelete(r,a),c}(o)}}]),n}(j)}]);
//# sourceMappingURL=done-count.commonjs2.js.map