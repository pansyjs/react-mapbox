import{a as V,j as S}from"./jsx-runtime-5BUNAZ9W.js";import{M as T}from"./mapbox-gl-0eWPQeFN.js";import{r as d}from"./index-4g5l5LRQ.js";const Z=d.createContext({});function w(n){var e=d.useRef(n);return e.current=n,e}var P=!!(typeof window<"u"&&window.document&&window.document.createElement),y,h;P&&(!((y=window)===null||y===void 0||(h=y.navigator)===null||h===void 0)&&h.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);var L=function(e){return typeof e=="function"};function E(n){"@babel/helpers - typeof";return E=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(n)}function B(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,o=new Set;function l(r,u){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,m=o.has(r);if(m)return!1;if(r===u)return!0;if(t&&i>1)return!1;o.add(r);var a=i+1;if(Array.isArray(r)){if(!Array.isArray(u)||r.length!==u.length)return!1;for(var s=0;s<r.length;s++)if(!l(r[s],u[s],a))return!1;return!0}if(r&&u&&E(r)==="object"&&E(u)==="object"){var c=Object.keys(r);return c.length!==Object.keys(u).length?!1:c.every(function(f){return l(r[f],u[f],a)})}return!1}return l(n,e)}var F=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return B(e,t)},O=function(e){return function(t,o){var l=d.useRef(),r=d.useRef(0);(o===void 0||!F(o,l.current))&&(l.current=o,r.current+=1),e(t,[r.current])}};function M(n){"@babel/helpers - typeof";return M=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},M(n)}function D(n){typeof n!="function"&&console.error("useUnmount expected parameter is a function, got ".concat(M(n)));var e=w(n);d.useEffect(function(){return function(){e.current()}},[])}var A=O(d.useEffect),W=function(e,t){return e!==t};function I(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:W,t=d.useRef(),o=d.useRef();return e(o.current,n)&&(t.current=o.current,o.current=n),t.current}const _=(n,e)=>n?n.map((t,o)=>Object.is(n[o],e==null?void 0:e[o])?-1:o).filter(t=>t>=0):e?e.map((t,o)=>o):[],k=(n,e)=>{const t=d.useRef();d.useEffect(()=>{const o=_(t.current,e),l=t.current;return t.current=e,n(o,l,e)},e)},z=(n,e,t)=>{const{eventMap:o={},eventList:l=[]}=t;k((r=[],u,i)=>{if(!n)return;let m=r.filter(a=>!!a).map(a=>a-1);r.includes(0)&&(m=l.map((a,s)=>s)),m.forEach(a=>{const s=o[l[a]],c=u==null?void 0:u[a+1],f=i==null?void 0:i[a+1];c&&n.off(s,c),f&&n.on(s,f)})},[n,...l.map(r=>e[r])]),D(()=>{n&&l.forEach(r=>{const u=o[r],i=e[r];u&&i&&n.off(u,i)})})},N=n=>n[0].toUpperCase()+n.slice(1,n.length);function g(n,e){if(n===e)return!0;if(!n||!e)return!1;if(Array.isArray(n)){if(!Array.isArray(e)||n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(!g(n[t],e[t]))return!1;return!0}else if(Array.isArray(e))return!1;if(typeof n=="object"&&typeof e=="object"){const t=Object.keys(n),o=Object.keys(e);if(t.length!==o.length)return!1;for(const l of t)if(!e.hasOwnProperty(l)||!g(n[l],e[l]))return!1;return!0}return!1}function j(n,e,{setterMap:t={},converterMap:o={}}={}){const l=I(n);A(()=>{e&&u(n,!0)},[n]),D(()=>{e&&"remove"in e&&e.remove()});const r=()=>{u(n,!1)},u=(i,m=!0)=>{if(e)try{Object.keys(i).forEach(a=>{if(L(n[a])&&/^on[A-Z]/.test(a))return;let s=!0;if(m&&(s=!g(i[a],l==null?void 0:l[a])),!s)return;let c=i[a];if(a in o&&(c=o[a](i[a])),a in t)t[a](c,e);else{const f=`set${N(a)}`;f in e&&e[f](c)}})}catch(a){console.error(a)}};return{onInstanceCreated:r}}const U=["accessToken","antialias","attributionControl","bearingSnap","bounds","hash","interactive","clickTolerance","pitchWithRotate","customAttribution","cooperativeGestures","logoPosition","failIfMajorPerformanceCaveat","preserveDrawingBuffer","refreshExpiredTiles","trackResize","fitBoundsOptions","maxTileCacheSize","transformRequest","collectResourceTiming","fadeDuration","crossSourceCollisions","optimizeForTerrain","locale","localFontFamily","localIdeographFontFamily","testMode"],$=["center","zoom","minZoom","maxZoom","style","maxBounds","dragPan","renderWorldCopies","pitch","maxPitch","minPitch","bearing","projection","touchPitch","boxZoom","scrollZoom","dragRotate","dragPan","keyboard","touchZoomRotate","doubleClickZoom"],H=$.concat(U),K={touchPitch(n,e){if(e){if(n){e.touchPitch.enable();return}e.touchPitch.disable()}},scrollZoom(n,e){if(e){if(n){e.scrollZoom.enable();return}e.scrollZoom.disable()}},boxZoom(n,e){if(e){if(n){e.boxZoom.enable();return}e.boxZoom.disable()}},dragRotate(n,e){if(e){if(n){e.dragRotate.enable();return}e.dragRotate.disable()}},dragPan(n,e){if(e){if(n){e.dragPan.enable();return}e.dragPan.disable()}},keyboard(n,e){if(e){if(n){e.keyboard.enable();return}e.keyboard.disable()}},touchZoomRotate(n,e){if(e){if(n){e.touchZoomRotate.enable();return}e.touchZoomRotate.disable()}},doubleClickZoom(n,e){if(e){if(n){e.doubleClickZoom.enable();return}e.doubleClickZoom.disable()}}},G={},q={onError:"error",onLoad:"load",onIdle:"idle",onRemove:"remove",onRender:"render",onResize:"resize",onWebglContextLost:"webglcontextlost",onWebglContextRestored:"webglcontextrestored",onDataloading:"dataloading",onData:"data",onTileDataLoading:"tiledataloading",onSourceDataLoading:"sourcedataloading",onStyleDataLoading:"styledataloading",onStyleLoad:"style.load",onStyleImportLoad:"style.import.load",onSourceData:"sourcedata",onStyleData:"styledata",onBoxZoomCancel:"boxzoomcancel",onBoxZoomStart:"boxzoomstart",onBoxZoomEnd:"boxzoomend",onTouchCancel:"touchcancel",onTouchMove:"touchmove",onTouchEnd:"touchend",onTouchStart:"touchstart",onClick:"click",onContextMenu:"contextmenu",onDoubleClick:"dblclick",onMouseMove:"mousemove",onMouseUp:"mouseup",onMouseDown:"mousedown",onMouseOut:"mouseout",onMouseOver:"mouseover",onMoveStart:"movestart",onMove:"move",onMoveEnd:"moveend",onZoomStart:"zoomstart",onZoom:"zoom",onZoomEnd:"zoomend",onRotateStart:"rotatestart",onRotate:"rotate",onRotateEnd:"rotateend",onDragStart:"dragstart",onDrag:"drag",onDragEnd:"dragend",onPitchStart:"pitchstart",onPitch:"pitch",onPitchEnd:"pitchend",onWheel:"wheel"},Y=Object.keys(q),x=d.forwardRef((n,e)=>{const{className:t,loading:o,containerStyle:l,children:r}=n,u=d.useRef(null),[i,m]=d.useState(),a=d.useMemo(()=>({position:"relative",width:"100%",height:"100%",...n.containerStyle}),[n.style]),{current:s}=d.useRef({}),{onInstanceCreated:c}=j(n,i,{setterMap:K,converterMap:G});z(i,n,{eventMap:q,eventList:Y}),d.useImperativeHandle(e,()=>i,[i]),d.useEffect(()=>{u.current&&f().then(v=>{c(),s.map=v,m(v)})},[u]);const f=()=>{const v=C(n);return Promise.resolve(new T.Map(v))},C=v=>{const b={container:u.current};return H.forEach(p=>{p in v&&p!=="container"&&(b[p]=v[p])}),b},R={height:"100%"};return V("div",{ref:u,style:a,className:t,children:[!i&&o,i&&S(Z.Provider,{value:s,children:S("div",{"mapboxgl-children":"",style:R,children:r})})]})});try{x.displayName="Map",x.__docgenInfo={description:"",displayName:"Map",props:{loading:{defaultValue:null,description:"地图加载前的加载效果",name:"loading",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"额外的样式类",name:"className",required:!1,type:{name:"string"}},containerStyle:{defaultValue:null,description:"地图挂载节点样式",name:"containerStyle",required:!1,type:{name:"CSSProperties"}},onError:{defaultValue:null,description:"",name:"onError",required:!1,type:{name:"((e: ErrorEvent) => void)"}},onLoad:{defaultValue:null,description:`下载所有必要的资源并且第一次视觉上完整渲染发生后触发
@param e
@returns`,name:"onLoad",required:!1,type:{name:"((e: MapboxEvent<undefined>) => void)"}},onIdle:{defaultValue:null,description:"",name:"onIdle",required:!1,type:{name:"((e: MapboxEvent<undefined>) => void)"}},onRemove:{defaultValue:null,description:"",name:"onRemove",required:!1,type:{name:"((e: MapboxEvent<undefined>) => void)"}},onRender:{defaultValue:null,description:"",name:"onRender",required:!1,type:{name:"((e: MapboxEvent<undefined>) => void)"}},onResize:{defaultValue:null,description:"",name:"onResize",required:!1,type:{name:"((e: MapboxEvent<undefined>) => void)"}},onWebglContextLost:{defaultValue:null,description:"",name:"onWebglContextLost",required:!1,type:{name:"((e: MapContextEvent) => void)"}},onWebglContextRestored:{defaultValue:null,description:"",name:"onWebglContextRestored",required:!1,type:{name:"((e: MapContextEvent) => void)"}},onDataloading:{defaultValue:null,description:"",name:"onDataloading",required:!1,type:{name:"((e: MapDataEvent) => void)"}},onData:{defaultValue:null,description:"",name:"onData",required:!1,type:{name:"((e: MapDataEvent) => void)"}},onTileDataLoading:{defaultValue:null,description:"",name:"onTileDataLoading",required:!1,type:{name:"((e: MapDataEvent) => void)"}},onSourceDataLoading:{defaultValue:null,description:"",name:"onSourceDataLoading",required:!1,type:{name:"((e: MapSourceDataEvent) => void)"}},onStyleDataLoading:{defaultValue:null,description:"",name:"onStyleDataLoading",required:!1,type:{name:"((e: MapStyleDataEvent) => void)"}},onStyleLoad:{defaultValue:null,description:"",name:"onStyleLoad",required:!1,type:{name:'((e: Omit<MapStyleDataEvent, "dataType"> & { type: "style.load"; }) => void)'}},onStyleImportLoad:{defaultValue:null,description:"",name:"onStyleImportLoad",required:!1,type:{name:'((e: Omit<MapStyleDataEvent, "dataType"> & { type: "style.import.load"; }) => void)'}},onSourceData:{defaultValue:null,description:"",name:"onSourceData",required:!1,type:{name:"((e: MapSourceDataEvent) => void)"}},onStyleData:{defaultValue:null,description:"",name:"onStyleData",required:!1,type:{name:"((e: MapStyleDataEvent) => void)"}},onBoxZoomCancel:{defaultValue:null,description:"",name:"onBoxZoomCancel",required:!1,type:{name:"((e: MapBoxZoomEvent) => void)"}},onBoxZoomStart:{defaultValue:null,description:"",name:"onBoxZoomStart",required:!1,type:{name:"((e: MapBoxZoomEvent) => void)"}},onBoxZoomEnd:{defaultValue:null,description:"",name:"onBoxZoomEnd",required:!1,type:{name:"((e: MapBoxZoomEvent) => void)"}},onTouchCancel:{defaultValue:null,description:"",name:"onTouchCancel",required:!1,type:{name:"((e: MapTouchEvent) => void)"}},onTouchMove:{defaultValue:null,description:"",name:"onTouchMove",required:!1,type:{name:"((e: MapTouchEvent) => void)"}},onTouchEnd:{defaultValue:null,description:"",name:"onTouchEnd",required:!1,type:{name:"((e: MapTouchEvent) => void)"}},onTouchStart:{defaultValue:null,description:"",name:"onTouchStart",required:!1,type:{name:"((e: MapTouchEvent) => void)"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MapMouseEvent) => void)"}},onContextMenu:{defaultValue:null,description:"",name:"onContextMenu",required:!1,type:{name:"((e: MapMouseEvent) => void)"}},onDoubleClick:{defaultValue:null,description:"",name:"onDoubleClick",required:!1,type:{name:"((e: MapMouseEvent) => void)"}},onMouseMove:{defaultValue:null,description:"",name:"onMouseMove",required:!1,type:{name:"((e: MapMouseEvent) => void)"}},onMouseUp:{defaultValue:null,description:"",name:"onMouseUp",required:!1,type:{name:"((e: MapMouseEvent) => void)"}},onMouseDown:{defaultValue:null,description:"",name:"onMouseDown",required:!1,type:{name:"((e: MapMouseEvent) => void)"}},onMouseOut:{defaultValue:null,description:"",name:"onMouseOut",required:!1,type:{name:"((e: MapMouseEvent) => void)"}},onMouseOver:{defaultValue:null,description:"",name:"onMouseOver",required:!1,type:{name:"((e: MapMouseEvent) => void)"}},onMoveStart:{defaultValue:null,description:"",name:"onMoveStart",required:!1,type:{name:"((e: MapboxEvent<MouseEvent | TouchEvent | WheelEvent>) => void)"}},onMove:{defaultValue:null,description:"",name:"onMove",required:!1,type:{name:"((e: MapboxEvent<MouseEvent | TouchEvent | WheelEvent>) => void)"}},onMoveEnd:{defaultValue:null,description:"",name:"onMoveEnd",required:!1,type:{name:"((e: MapboxEvent<MouseEvent | TouchEvent | WheelEvent>) => void)"}},onZoomStart:{defaultValue:null,description:"",name:"onZoomStart",required:!1,type:{name:"((e: MapboxEvent<MouseEvent | TouchEvent | WheelEvent>) => void)"}},onZoom:{defaultValue:null,description:"",name:"onZoom",required:!1,type:{name:"((e: MapboxEvent<MouseEvent | TouchEvent | WheelEvent>) => void)"}},onZoomEnd:{defaultValue:null,description:"",name:"onZoomEnd",required:!1,type:{name:"((e: MapboxEvent<MouseEvent | TouchEvent | WheelEvent>) => void)"}},onRotateStart:{defaultValue:null,description:"",name:"onRotateStart",required:!1,type:{name:"((e: MapboxEvent<MouseEvent | TouchEvent>) => void)"}},onRotate:{defaultValue:null,description:"",name:"onRotate",required:!1,type:{name:"((e: MapboxEvent<MouseEvent | TouchEvent>) => void)"}},onRotateEnd:{defaultValue:null,description:"",name:"onRotateEnd",required:!1,type:{name:"((e: MapboxEvent<MouseEvent | TouchEvent>) => void)"}},onDragStart:{defaultValue:null,description:"",name:"onDragStart",required:!1,type:{name:"((e: MapboxEvent<MouseEvent | TouchEvent>) => void)"}},onDrag:{defaultValue:null,description:"",name:"onDrag",required:!1,type:{name:"((e: MapboxEvent<MouseEvent | TouchEvent>) => void)"}},onDragEnd:{defaultValue:null,description:"",name:"onDragEnd",required:!1,type:{name:"((e: MapboxEvent<MouseEvent | TouchEvent>) => void)"}},onPitchStart:{defaultValue:null,description:"",name:"onPitchStart",required:!1,type:{name:"((e: MapboxEvent<MouseEvent | TouchEvent>) => void)"}},onPitch:{defaultValue:null,description:"",name:"onPitch",required:!1,type:{name:"((e: MapboxEvent<MouseEvent | TouchEvent>) => void)"}},onPitchEnd:{defaultValue:null,description:"",name:"onPitchEnd",required:!1,type:{name:"((e: MapboxEvent<MouseEvent | TouchEvent>) => void)"}},onWheel:{defaultValue:null,description:"",name:"onWheel",required:!1,type:{name:"((e: MapWheelEvent) => void)"}}}}}catch{}export{x as M,Z as a,z as b,g as d,L as i,j as u};
