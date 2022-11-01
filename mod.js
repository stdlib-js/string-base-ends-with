// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=void 0!==String.prototype.endsWith;var t=String.prototype.endsWith;var e=r?function(r,e,n){var i,o;return o=e.length,0===n?0===o:(i=n<0?r.length+n:n,0===o||!(i-o<0||i>r.length)&&t.call(r,e,i))}:function(r,t,e){var n,i,o;if(i=t.length,0===e)return 0===i;if(n=e<0?r.length+e:e,0===i)return!0;if((n-=i)<0)return!1;for(o=0;o<i;o++)if(r.charCodeAt(n+o)!==t.charCodeAt(o))return!1;return!0};export{e as default};
//# sourceMappingURL=mod.js.map
