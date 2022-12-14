import{_ as l}from"./_baseSet-5355c228.js";var d=`accept acceptcharset accesskey action allowfullscreen allowtransparency
alt async autocomplete autofocus autoplay capture cellpadding cellspacing challenge
charset checked classid classname colspan cols content contenteditable contextmenu
controls coords crossorigin data datetime default defer dir disabled download draggable
enctype form formaction formenctype formmethod formnovalidate formtarget frameborder
headers height hidden high href hreflang htmlfor for httpequiv icon id inputmode integrity
is keyparams keytype kind label lang list loop low manifest marginheight marginwidth max maxlength media
mediagroup method min minlength multiple muted name novalidate nonce open
optimum pattern placeholder poster preload radiogroup readonly rel required
reversed role rowspan rows sandbox scope scoped scrolling seamless selected
shape size sizes span spellcheck src srcdoc srclang srcset start step style
summary tabindex target title type usemap value width wmode wrap`,p=`onCopy onCut onPaste onCompositionend onCompositionstart onCompositionupdate onKeydown
    onKeypress onKeyup onFocus onBlur onChange onInput onSubmit onClick onContextmenu onDoubleclick onDblclick
    onDrag onDragend onDragenter onDragexit onDragleave onDragover onDragstart onDrop onMousedown
    onMouseenter onMouseleave onMousemove onMouseout onMouseover onMouseup onSelect onTouchcancel
    onTouchend onTouchmove onTouchstart onTouchstartPassive onTouchmovePassive onScroll onWheel onAbort onCanplay onCanplaythrough
    onDurationchange onEmptied onEncrypted onEnded onError onLoadeddata onLoadedmetadata
    onLoadstart onPause onPlay onPlaying onProgress onRatechange onSeeked onSeeking onStalled onSuspend onTimeupdate onVolumechange onWaiting onLoad onError`,s="".concat(d," ").concat(p).split(/[\s\n]+/),f="aria-",m="data-";function i(n,e){return n.indexOf(e)===0}function v(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,t;e===!1?t={aria:!0,data:!0,attr:!0}:e===!0?t={aria:!0}:t=l({},e);var a={};return Object.keys(n).forEach(function(o){(t.aria&&(o==="role"||i(o,f))||t.data&&i(o,m)||t.attr&&(s.includes(o)||s.includes(o.toLowerCase())))&&(a[o]=n[o])}),a}function D(n){if(n==null)throw new TypeError("Cannot destructure "+n)}const g=Object.prototype.toString,h=Object.getPrototypeOf(async function(){}).constructor;function r(n,e){return g.call(n)===`[object ${e}]`}function y(n){return typeof n<"u"}function c(n){return!y(n)}function C(n){return n!==null&&r(n,"Object")}function u(n){return n===null}function S(n){return c(n)&&u(n)}function x(n){return c(n)||u(n)}function A(n){return r(n,"Number")}function P(n){return r(n,"String")}function O(n){return typeof n=="function"}function j(n){return n instanceof h}function k(n){return r(n,"Boolean")}function E(n){return n&&Array.isArray(n)}const w=typeof window>"u",T=!w;function M(n){return/(((^https?:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[\w]*))?)$/.test(n)}export{D as _,P as a,C as b,T as c,j as d,k as e,S as f,A as g,O as h,M as i,E as j,u as k,x as l,v as p};
