// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e=void 0!==String.prototype.endsWith,t=String.prototype.endsWith;return e?function(e,n,r){var i,o;return o=n.length,0===r?0===o:(i=r<0?e.length+r:r,0===o||!(i-o<0||i>e.length)&&t.call(e,n,i))}:function(e,t,n){var r,i,o;if(i=t.length,0===n)return 0===i;if(r=n<0?e.length+n:n,0===i)return!0;if((r-=i)<0)return!1;for(o=0;o<i;o++)if(e.charCodeAt(r+o)!==t.charCodeAt(o))return!1;return!0}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).endsWith=t();
//# sourceMappingURL=index.js.map
