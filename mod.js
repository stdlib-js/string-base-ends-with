// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r,t,e){var n,f,u;if(f=t.length,0===e)return 0===f;if(n=e<0?r.length+e:e,0===f)return!0;if((n-=f)<0)return!1;for(u=0;u<f;u++)if(r.charCodeAt(n+u)!==t.charCodeAt(u))return!1;return!0}export{r as default};
//# sourceMappingURL=mod.js.map
