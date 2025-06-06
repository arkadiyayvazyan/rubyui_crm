// animejs@4.0.2 downloaded from https://ga.jspm.io/npm:animejs@4.0.2/lib/anime.esm.js

/**
 * anime.js - ESM
 * @version v4.0.2
 * @author Julian Garnier
 * @license MIT
 * @copyright (c) 2025 Julian Garnier
 * @see https://animejs.com
 */
/**
 * @typedef {Object} DefaultsParams
 * @property {Number|String} [id]
 * @property {PercentageKeyframes|DurationKeyframes} [keyframes]
 * @property {EasingParam} [playbackEase]
 * @property {Number} [playbackRate]
 * @property {Number} [frameRate]
 * @property {Number|Boolean} [loop]
 * @property {Boolean} [reversed]
 * @property {Boolean} [alternate]
 * @property {Boolean|ScrollObserver} [autoplay]
 * @property {Number|FunctionValue} [duration]
 * @property {Number|FunctionValue} [delay]
 * @property {Number} [loopDelay]
 * @property {EasingParam} [ease]
 * @property {'none'|'replace'|'blend'|compositionTypes} [composition]
 * @property {(v: any) => any} [modifier]
 * @property {(tickable: Tickable) => void} [onBegin]
 * @property {(tickable: Tickable) => void} [onBeforeUpdate]
 * @property {(tickable: Tickable) => void} [onUpdate]
 * @property {(tickable: Tickable) => void} [onLoop]
 * @property {(tickable: Tickable) => void} [onPause]
 * @property {(tickable: Tickable) => void} [onComplete]
 * @property {(renderable: Renderable) => void} [onRender]
 */
/** @typedef {JSAnimation|Timeline} Renderable */
/** @typedef {Timer|Renderable} Tickable */
/** @typedef {Timer&JSAnimation&Timeline} CallbackArgument */
/** @typedef {Animatable|Tickable|Draggable|ScrollObserver|Scope} Revertible */
/**
 * @typedef {Object} DraggableAxisParam
 * @property {String} [mapTo]
 * @property {TweenModifier} [modifier]
 * @property {TweenComposition} [composition]
 * @property {Number|Array<Number>|((draggable: Draggable) => Number|Array<Number>)} [snap]
 */
/**
 * @typedef {Object} DraggableCursorParams
 * @property {String} [onHover]
 * @property {String} [onGrab]
 */
/**
 * @typedef {Object} DraggableParams
 * @property {DOMTargetSelector} [trigger]
 * @property {DOMTargetSelector|Array<Number>|((draggable: Draggable) => DOMTargetSelector|Array<Number>)} [container]
 * @property {Boolean|DraggableAxisParam} [x]
 * @property {Boolean|DraggableAxisParam} [y]
 * @property {TweenModifier} [modifier]
 * @property {Number|Array<Number>|((draggable: Draggable) => Number|Array<Number>)} [snap]
 * @property {Number|Array<Number>|((draggable: Draggable) => Number|Array<Number>)} [containerPadding]
 * @property {Number|((draggable: Draggable) => Number)} [containerFriction]
 * @property {Number|((draggable: Draggable) => Number)} [releaseContainerFriction]
 * @property {Number|((draggable: Draggable) => Number)} [dragSpeed]
 * @property {Number|((draggable: Draggable) => Number)} [scrollSpeed]
 * @property {Number|((draggable: Draggable) => Number)} [scrollThreshold]
 * @property {Number|((draggable: Draggable) => Number)} [minVelocity]
 * @property {Number|((draggable: Draggable) => Number)} [maxVelocity]
 * @property {Number|((draggable: Draggable) => Number)} [velocityMultiplier]
 * @property {Number} [releaseMass]
 * @property {Number} [releaseStiffness]
 * @property {Number} [releaseDamping]
 * @property {Boolean} [releaseDamping]
 * @property {EasingParam} [releaseEase]
 * @property {Boolean|DraggableCursorParams|((draggable: Draggable) => Boolean|DraggableCursorParams)} [cursor]
 * @property {Callback<Draggable>} [onGrab]
 * @property {Callback<Draggable>} [onDrag]
 * @property {Callback<Draggable>} [onRelease]
 * @property {Callback<Draggable>} [onUpdate]
 * @property {Callback<Draggable>} [onSettle]
 * @property {Callback<Draggable>} [onSnap]
 * @property {Callback<Draggable>} [onResize]
 * @property {Callback<Draggable>} [onAfterResize]
 */
/**
 * @typedef {SVGGeometryElement & {
 *   setAttribute(name: 'draw', value: `${number} ${number}`): void;
 *   draw: `${number} ${number}`;
 * }} DrawableSVGGeometry
 */
/**
 * @callback EasingFunction
 * @param {Number} time
 * @return {Number}
 */
/**
 * @typedef {('linear'|'linear(x1, x2 25%, x3)'|'in'|'out'|'inOut'|'inQuad'|'outQuad'|'inOutQuad'|'inCubic'|'outCubic'|'inOutCubic'|'inQuart'|'outQuart'|'inOutQuart'|'inQuint'|'outQuint'|'inOutQuint'|'inSine'|'outSine'|'inOutSine'|'inCirc'|'outCirc'|'inOutCirc'|'inExpo'|'outExpo'|'inOutExpo'|'inBounce'|'outBounce'|'inOutBounce'|'inBack'|'outBack'|'inOutBack'|'inElastic'|'outElastic'|'inOutElastic'|'irregular'|'cubicBezier'|'steps'|'in(p = 1.675)'|'out(p = 1.675)'|'inOut(p = 1.675)'|'inBack(overshoot = 1.70158)'|'outBack(overshoot = 1.70158)'|'inOutBack(overshoot = 1.70158)'|'inElastic(amplitude = 1, period = .3)'|'outElastic(amplitude = 1, period = .3)'|'inOutElastic(amplitude = 1, period = .3)'|'irregular(length = 10, randomness = 1)'|'cubicBezier(x1, y1, x2, y2)'|'steps(steps = 10)')} EaseStringParamNames
 */
/** @typedef {(String & {})|EaseStringParamNames|EasingFunction|Spring} EasingParam */
/** @typedef {HTMLElement|SVGElement} DOMTarget */
/** @typedef {Record<String, any>} JSTarget */
/** @typedef {DOMTarget|JSTarget} Target */
/** @typedef {Target|NodeList|String} TargetSelector */
/** @typedef {DOMTarget|NodeList|String} DOMTargetSelector */
/** @typedef {Array.<DOMTargetSelector>|DOMTargetSelector} DOMTargetsParam */
/** @typedef {Array.<DOMTarget>} DOMTargetsArray */
/** @typedef {Array.<JSTarget>|JSTarget} JSTargetsParam */
/** @typedef {Array.<JSTarget>} JSTargetsArray */
/** @typedef {Array.<TargetSelector>|TargetSelector} TargetsParam */
/** @typedef {Array.<Target>} TargetsArray */
/**
 * @callback FunctionValue
 * @param {Target} target - The animated target
 * @param {Number} index - The target index
 * @param {Number} length - The total number of animated targets
 * @return {Number|String|TweenObjectValue|Array.<Number|String|TweenObjectValue>}
 */
/**
 * @callback TweenModifier
 * @param {Number} value - The animated value
 * @return {Number|String}
 */
/** @typedef {[Number, Number, Number, Number]} ColorArray */
/**
 * @template T
 * @callback Callback
 * @param {T} self - Returns itself
 * @param {PointerEvent} [e]
 * @return {*}
 */
/**
 * @template {object} T
 * @typedef {Object} TickableCallbacks
 * @property {Callback<T>} [onBegin]
 * @property {Callback<T>} [onBeforeUpdate]
 * @property {Callback<T>} [onUpdate]
 * @property {Callback<T>} [onLoop]
 * @property {Callback<T>} [onPause]
 * @property {Callback<T>} [onComplete]
 */
/**
 * @template {object} T
 * @typedef {Object} RenderableCallbacks
 * @property {Callback<T>} [onRender]
 */
/**
 * @typedef {Object} Tween
 * @property {Number} id
 * @property {JSAnimation} parent
 * @property {String} property
 * @property {Target} target
 * @property {String|Number} _value
 * @property {Function|null} _func
 * @property {EasingFunction} _ease
 * @property {Array.<Number>} _fromNumbers
 * @property {Array.<Number>} _toNumbers
 * @property {Array.<String>} _strings
 * @property {Number} _fromNumber
 * @property {Number} _toNumber
 * @property {Array.<Number>} _numbers
 * @property {Number} _number
 * @property {String} _unit
 * @property {TweenModifier} _modifier
 * @property {Number} _currentTime
 * @property {Number} _delay
 * @property {Number} _updateDuration
 * @property {Number} _startTime
 * @property {Number} _changeDuration
 * @property {Number} _absoluteStartTime
 * @property {tweenTypes} _tweenType
 * @property {valueTypes} _valueType
 * @property {Number} _composition
 * @property {Number} _isOverlapped
 * @property {Number} _isOverridden
 * @property {Number} _renderTransforms
 * @property {Tween} _prevRep
 * @property {Tween} _nextRep
 * @property {Tween} _prevAdd
 * @property {Tween} _nextAdd
 * @property {Tween} _prev
 * @property {Tween} _next
 */
/**
 * @typedef TweenDecomposedValue
 * @property {Number} t - Type
 * @property {Number} n - Single number value
 * @property {String} u - Value unit
 * @property {String} o - Value operator
 * @property {Array.<Number>} d - Array of Numbers (in case of complex value type)
 * @property {Array.<String>} s - Strings (in case of complex value type)
 */
/** @typedef {{_head: null|Tween, _tail: null|Tween}} TweenPropertySiblings */
/** @typedef {Record<String, TweenPropertySiblings>} TweenLookups */
/** @typedef {WeakMap.<Target, TweenLookups>} TweenReplaceLookups */
/** @typedef {Map.<Target, TweenLookups>} TweenAdditiveLookups */
/**
 * @typedef {Object} TimerOptions
 * @property {Number|String} [id]
 * @property {TweenParamValue} [duration]
 * @property {TweenParamValue} [delay]
 * @property {Number} [loopDelay]
 * @property {Boolean} [reversed]
 * @property {Boolean} [alternate]
 * @property {Boolean|Number} [loop]
 * @property {Boolean|ScrollObserver} [autoplay]
 * @property {Number} [frameRate]
 * @property {Number} [playbackRate]
 */
/**

/**
 * @typedef {TimerOptions & TickableCallbacks<Timer>} TimerParams
 */
/**
 * @typedef {Number|String|FunctionValue} TweenParamValue
 */
/**
 * @typedef {TweenParamValue|[TweenParamValue, TweenParamValue]} TweenPropValue
 */
/**
 * @typedef {(String & {})|'none'|'replace'|'blend'|compositionTypes} TweenComposition
 */
/**
 * @typedef {Object} TweenParamsOptions
 * @property {TweenParamValue} [duration]
 * @property {TweenParamValue} [delay]
 * @property {EasingParam} [ease]
 * @property {TweenModifier} [modifier]
 * @property {TweenComposition} [composition]
 */
/**
 * @typedef {Object} TweenValues
 * @property {TweenParamValue} [from]
 * @property {TweenPropValue} [to]
 * @property {TweenPropValue} [fromTo]
 */
/**
 * @typedef {TweenParamsOptions & TweenValues} TweenKeyValue
 */
/**
 * @typedef {Array.<TweenKeyValue|TweenPropValue>} ArraySyntaxValue
 */
/**
 * @typedef {TweenParamValue|ArraySyntaxValue|TweenKeyValue} TweenOptions
 */
/**
 * @typedef {Partial<{to: TweenParamValue|Array.<TweenParamValue>; from: TweenParamValue|Array.<TweenParamValue>; fromTo: TweenParamValue|Array.<TweenParamValue>;}>} TweenObjectValue
 */
/**
 * @typedef {Object} PercentageKeyframeOptions
 * @property {EasingParam} [ease]
 */
/**
 * @typedef {Record<String, TweenParamValue>} PercentageKeyframeParams
 */
/**
 * @typedef {Record<String, PercentageKeyframeParams & PercentageKeyframeOptions>} PercentageKeyframes
 */
/**
 * @typedef {Array<Record<String, TweenOptions | TweenModifier | boolean> & TweenParamsOptions>} DurationKeyframes
 */
/**
 * @typedef {Object} AnimationOptions
 * @property {PercentageKeyframes|DurationKeyframes} [keyframes]
 * @property {EasingParam} [playbackEase]
 */
/**
 * @typedef {Record<String, TweenOptions | Callback<JSAnimation> | TweenModifier | boolean | PercentageKeyframes | DurationKeyframes | ScrollObserver> & TimerOptions & AnimationOptions & TweenParamsOptions & TickableCallbacks<JSAnimation> & RenderableCallbacks<JSAnimation>} AnimationParams
 */
/**
 * @typedef {Object} TimelineOptions
 * @property {DefaultsParams} [defaults]
 * @property {EasingParam} [playbackEase]
 */
/**
 * @typedef {TimerOptions & TimelineOptions & TickableCallbacks<Timeline> & RenderableCallbacks<Timeline>} TimelineParams
 */
/**
 * @callback AnimatablePropertySetter
 * @param  {Number|Array.<Number>} to
 * @param  {Number} [duration]
 * @param  {EasingParam} [ease]
 * @return {AnimatableObject}
 */
/**
 * @typedef {AnimatablePropertySetter & AnimatablePropertyGetter} AnimatableProperty
 */
/**
 * @typedef {Animatable & Record<String, AnimatableProperty>} AnimatableObject
 */
/**
 * @typedef {Object} AnimatablePropertyParamsOptions
 * @property {String} [unit]
 * @property {TweenParamValue} [duration]
 * @property {EasingParam} [ease]
 * @property {TweenModifier} [modifier]
 * @property {TweenComposition} [composition]
 */
/**
 * @typedef {Record<String, TweenParamValue | EasingParam | TweenModifier | TweenComposition | AnimatablePropertyParamsOptions> & AnimatablePropertyParamsOptions} AnimatableParams
 */
const t=typeof window!=="undefined";
/** @type {Object|Null} */const e=t?window:null;
/** @type {Document} */const s=t?document:null;const i={OBJECT:0,ATTRIBUTE:1,CSS:2,TRANSFORM:3,CSS_VAR:4};const n={NUMBER:0,UNIT:1,COLOR:2,COMPLEX:3};const o={NONE:0,AUTO:1,FORCE:2};const r={replace:0,none:1,blend:2};const a=Symbol();const c=Symbol();const h=Symbol();const l=Symbol();const u=Symbol();const d=Symbol();const p=1e-11;const f=1e12;const m=1e3;const g=120;const _="";const y=new Map;y.set("x","translateX");y.set("y","translateY");y.set("z","translateZ");const v=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"];const b=v.reduce(((t,e)=>({...t,[e]:e+"("})),{});const T=()=>{};const S=/(^#([\da-f]{3}){1,2}$)|(^#([\da-f]{4}){1,2}$)/i;const w=/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i;const x=/rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i;const k=/hsl\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*\)/i;const C=/hsla\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i;const E=/[-+]?\d*\.?\d+(?:e[-+]?\d)?/gi;const $=/^([-+]?\d*\.?\d+(?:e[-+]?\d+)?)([a-z]+|%)$/i;const A=/([a-z])([A-Z])/g;const B=/(\w+)(\([^)]+\)+)/g;const O=/(\*=|\+=|-=)/;
/** @type {DefaultsParams} */const N={id:null,keyframes:null,playbackEase:null,playbackRate:1,frameRate:g,loop:0,reversed:false,alternate:false,autoplay:true,duration:m,delay:0,loopDelay:0,ease:"out(2)",composition:r.replace,modifier:t=>t,onBegin:T,onBeforeUpdate:T,onUpdate:T,onLoop:T,onPause:T,onComplete:T,onRender:T};const R={
/** @type {DefaultsParams} */
defaults:N,
/** @type {Document|DOMTarget} */
root:s,
/** @type {Scope} */
scope:null,
/** @type {Number} */
precision:4,
/** @type {Number} */
timeScale:1,
/** @type {Number} */
tickThreshold:200};const L={version:"4.0.2",engine:null};if(t){e.AnimeJS||(e.AnimeJS=[]);e.AnimeJS.push(L)}
/**
 * @param  {String} str
 * @return {String}
 */const D=t=>t.replace(A,"$1-$2").toLowerCase()
/**
 * Prioritize this method instead of regex when possible
 * @param  {String} str
 * @param  {String} sub
 * @return {Boolean}
 */;const F=(t,e)=>t.indexOf(e)===0;const I=Date.now;const P=Array.isArray;
/**@param {any} a @return {a is Record<String, any>} */const M=t=>t&&t.constructor===Object
/**@param {any} a @return {a is Number} */;const X=t=>typeof t==="number"&&!isNaN(t)
/**@param {any} a @return {a is String} */;const U=t=>typeof t==="string"
/**@param {any} a @return {a is Function} */;const Y=t=>typeof t==="function"
/**@param {any} a @return {a is undefined} */;const z=t=>typeof t==="undefined"
/**@param {any} a @return {a is null | undefined} */;const W=t=>z(t)||t===null
/**@param {any} a @return {a is SVGElement} */;const V=e=>t&&e instanceof SVGElement
/**@param {any} a @return {Boolean} */;const H=t=>S.test(t)
/**@param {any} a @return {Boolean} */;const q=t=>F(t,"rgb")
/**@param {any} a @return {Boolean} */;const J=t=>F(t,"hsl")
/**@param {any} a @return {Boolean} */;const Q=t=>H(t)||q(t)||J(t)
/**@param {any} a @return {Boolean} */;const j=t=>!R.defaults.hasOwnProperty(t)
/**
 * @param  {Number|String} str
 * @return {Number}
 */;const G=t=>U(t)?parseFloat(/** @type {String} */t):
/** @type {Number} */t;const Z=Math.pow;const K=Math.sqrt;const tt=Math.sin;const et=Math.cos;const st=Math.abs;const it=Math.exp;const nt=Math.ceil;const ot=Math.floor;const rt=Math.asin;const at=Math.max;const ct=Math.atan2;const ht=Math.PI;const lt=Math.round;
/**
 * @param  {Number} v
 * @param  {Number} min
 * @param  {Number} max
 * @return {Number}
 */const ut=(t,e,s)=>t<e?e:t>s?s:t;const dt={};
/**
 * @param  {Number} v
 * @param  {Number} decimalLength
 * @return {Number}
 */const pt=(t,e)=>{if(e<0)return t;if(!e)return lt(t);let s=dt[e];s||(s=dt[e]=10**e);return lt(t*s)/s};
/**
 * @param  {Number} v
 * @param  {Number|Array<Number>} increment
 * @return {Number}
 */const ft=(t,e)=>P(e)?e.reduce(((e,s)=>st(s-t)<st(e-t)?s:e)):e?lt(t/e)*e:t
/**
 * @param  {Number} start
 * @param  {Number} end
 * @param  {Number} progress
 * @return {Number}
 */;const mt=(t,e,s)=>t+(e-t)*s
/**
 * @param  {Number} v
 * @return {Number}
 */;const gt=t=>t===Infinity?f:t===-Infinity?-1e12:t
/**
 * @param  {Number} v
 * @return {Number}
 */;const _t=t=>t<=p?p:gt(pt(t,11))
/**
 * @template T
 * @param {T[]} a
 * @return {T[]}
 */;const yt=t=>P(t)?[...t]:t
/**
 * @template T
 * @template U
 * @param {T} o1
 * @param {U} o2
 * @return {T & U}
 */;const vt=(t,e)=>{const s=/** @type {T & U} */{...t};for(let i in e){const n=/** @type {T & U} */t[i];s[i]=z(n)?/** @type {T & U} */e[i]:n}return s};
/**
 * @param {Object} parent
 * @param {Function} callback
 * @param {Boolean} [reverse]
 * @param {String} [prevProp]
 * @param {String} [nextProp]
 * @return {void}
 */const bt=(t,e,s,i="_prev",n="_next")=>{let o=t._head;let r=n;if(s){o=t._tail;r=i}while(o){const t=o[r];e(o);o=t}};
/**
 * @param  {Object} parent
 * @param  {Object} child
 * @param  {String} [prevProp]
 * @param  {String} [nextProp]
 * @return {void}
 */const Tt=(t,e,s="_prev",i="_next")=>{const n=e[s];const o=e[i];n?n[i]=o:t._head=o;o?o[s]=n:t._tail=n;e[s]=null;e[i]=null};
/**
 * @param  {Object} parent
 * @param  {Object} child
 * @param  {Function} [sortMethod]
 * @param  {String} prevProp
 * @param  {String} nextProp
 * @return {void}
 */const St=(t,e,s,i="_prev",n="_next")=>{let o=t._tail;while(o&&s&&s(o,e))o=o[i];const r=o?o[n]:t._head;o?o[n]=e:t._head=e;r?r[i]=e:t._tail=e;e[i]=o;e[n]=r};class Clock{
/** @param {Number} [initTime] */
constructor(t=0){
/** @type {Number} */
this.deltaTime=0;
/** @type {Number} */this._currentTime=t;
/** @type {Number} */this._elapsedTime=t;
/** @type {Number} */this._startTime=t;
/** @type {Number} */this._lastTime=t;
/** @type {Number} */this._scheduledTime=0;
/** @type {Number} */this._frameDuration=pt(m/g,0);
/** @type {Number} */this._fps=g;
/** @type {Number} */this._speed=1;
/** @type {Boolean} */this._hasChildren=false;
/** @type {Tickable|Tween} */this._head=null;
/** @type {Tickable|Tween} */this._tail=null}get fps(){return this._fps}set fps(t){const e=this._frameDuration;const s=+t;const i=s<p?p:s;const n=pt(m/i,0);this._fps=i;this._frameDuration=n;this._scheduledTime+=n-e}get speed(){return this._speed}set speed(t){const e=+t;this._speed=e<p?p:e}
/**
   * @param  {Number} time
   * @return {tickModes}
   */requestTick(t){const e=this._scheduledTime;const s=this._elapsedTime;this._elapsedTime+=t-s;if(s<e)return o.NONE;const i=this._frameDuration;const n=s-e;this._scheduledTime+=n<i?i:n;return o.AUTO}
/**
   * @param  {Number} time
   * @return {Number}
   */computeDeltaTime(t){const e=t-this._lastTime;this.deltaTime=e;this._lastTime=t;return e}}
/**
 * @param  {Tickable} tickable
 * @param  {Number} time
 * @param  {Number} muteCallbacks
 * @param  {Number} internalRender
 * @param  {tickModes} tickMode
 * @return {Number}
 */const wt=(t,e,s,a,c)=>{const h=t.parent;const u=t.duration;const d=t.completed;const f=t.iterationDuration;const m=t.iterationCount;const g=t._currentIteration;const y=t._loopDelay;const v=t._reversed;const T=t._alternate;const S=t._hasChildren;const w=t._delay;const x=t._currentTime;const k=w+f;const C=e-w;const E=ut(x,-w,u);const $=ut(C,-w,u);const A=C-x;const B=$>0;const O=$>=u;const N=u<=p;const L=c===o.FORCE;let D=0;let F=C;let I=0;if(m>1){const e=~~($/(f+(O?0:y)));t._currentIteration=ut(e,0,m);O&&t._currentIteration--;D=t._currentIteration%2;F=$%(f+y)||0}const P=v^(T&&D);const M=/** @type {Renderable} */t._ease;let X=O?P?0:u:P?f-F:F;M&&(X=f*M(X/f)||0);const U=(h?h.backwards:C<x)?!P:!!P;t._currentTime=C;t._iterationTime=X;t.backwards=U;if(B&&!t.began){t.began=true;s||h&&(U||!h.began)||t.onBegin(/** @type {CallbackArgument} */t)}else C<=0&&(t.began=false);s||S||!B||t._currentIteration===g||t.onLoop(/** @type {CallbackArgument} */t);if(L||c===o.AUTO&&(e>=w&&e<=k||e<=w&&E>w||e>=k&&E!==u)||X>=k&&E!==u||X<=w&&E>0||e<=E&&E===u&&d||O&&!d&&N){if(B){t.computeDeltaTime(E);s||t.onBeforeUpdate(/** @type {CallbackArgument} */t)}if(!S){const e=L||(U?A*-1:A)>=R.tickThreshold;const o=t._offset+(h?h._offset:0)+w+X;let c=/** @type {Tween} */ /** @type {JSAnimation} */t._head;let u;let d;let p;let f;let m=0;while(c){const t=c._composition;const s=c._currentTime;const h=c._changeDuration;const g=c._absoluteStartTime+c._changeDuration;const y=c._nextRep;const v=c._prevRep;const T=t!==r.none;if((e||(s!==h||o<=g+(y?y._delay:0))&&(s!==0||o>=c._absoluteStartTime))&&(!T||!c._isOverridden&&(!c._isOverlapped||o<=g)&&(!y||y._isOverridden||o<=y._absoluteStartTime)&&(!v||v._isOverridden||o>=v._absoluteStartTime+v._changeDuration+c._delay))){const e=c._currentTime=ut(X-c._startTime,0,h);const s=c._ease(e/c._updateDuration);const o=c._modifier;const g=c._valueType;const _=c._tweenType;const y=_===i.OBJECT;const v=g===n.NUMBER;const b=v&&y||s===0||s===1?-1:R.precision;
/** @type {String|Number} */let S;
/** @type {Number} */let w;if(v)S=w=/** @type {Number} */o(pt(mt(c._fromNumber,c._toNumber,s),b));else if(g===n.UNIT){w=/** @type {Number} */o(pt(mt(c._fromNumber,c._toNumber,s),b));S=`${w}${c._unit}`}else if(g===n.COLOR){const t=c._fromNumbers;const e=c._toNumbers;const i=pt(ut(/** @type {Number} */o(mt(t[0],e[0],s)),0,255),0);const n=pt(ut(/** @type {Number} */o(mt(t[1],e[1],s)),0,255),0);const r=pt(ut(/** @type {Number} */o(mt(t[2],e[2],s)),0,255),0);const a=ut(/** @type {Number} */o(pt(mt(t[3],e[3],s),b)),0,1);S=`rgba(${i},${n},${r},${a})`;if(T){const t=c._numbers;t[0]=i;t[1]=n;t[2]=r;t[3]=a}}else if(g===n.COMPLEX){S=c._strings[0];for(let t=0,e=c._toNumbers.length;t<e;t++){const e=/** @type {Number} */o(pt(mt(c._fromNumbers[t],c._toNumbers[t],s),b));const i=c._strings[t+1];S+=`${i?e+i:e}`;T&&(c._numbers[t]=e)}}T&&(c._number=w);if(a||t===r.blend)c._value=S;else{const t=c.property;u=c.target;if(y)u[t]=S;else if(_===i.ATTRIBUTE)
/** @type {DOMTarget} */u.setAttribute(t,/** @type {String} */S);else{d=/** @type {DOMTarget} */u.style;if(_===i.TRANSFORM){if(u!==p){p=u;f=u[l]}f[t]=S;m=1}else _===i.CSS?d[t]=S:_===i.CSS_VAR&&d.setProperty(t,/** @type {String} */S)}B&&(I=1)}}if(m&&c._renderTransforms){let t=_;for(let e in f)t+=`${b[e]}${f[e]}) `;d.transform=t;m=0}c=c._next}!s&&I&&
/** @type {JSAnimation} */t.onRender(/** @type {JSAnimation} */t)}!s&&B&&t.onUpdate(/** @type {CallbackArgument} */t)}if(h&&N){if(!s&&(h.began&&!U&&C>=u&&!d||U&&C<=p&&d)){t.onComplete(/** @type {CallbackArgument} */t);t.completed=!U}}else if(B&&O){if(m===Infinity)t._startTime+=t.duration;else if(t._currentIteration>=m-1){t.paused=true;if(!d&&!S){t.completed=true;if(!s&&!(h&&(U||!h.began))){t.onComplete(/** @type {CallbackArgument} */t);t._resolve(/** @type {CallbackArgument} */t)}}}}else t.completed=false;return I};
/**
 * @param  {Tickable} tickable
 * @param  {Number} time
 * @param  {Number} muteCallbacks
 * @param  {Number} internalRender
 * @param  {Number} tickMode
 * @return {void}
 */const xt=(t,e,s,i,n)=>{const r=t._currentIteration;wt(t,e,s,i,n);if(t._hasChildren){const a=/** @type {Timeline} */t;const c=a.backwards;const h=i?e:a._iterationTime;const l=I();let u=0;let d=true;if(!i&&a._currentIteration!==r){const t=a.iterationDuration;bt(a,(/** @type {JSAnimation} */e=>{if(c){const i=e.duration;const n=e._offset+e._delay;const o=n+i;s||!(i<=p)||n&&o!==t||e.onComplete(e)}else{!e.completed&&!e.backwards&&e._currentTime<e.iterationDuration&&wt(e,t,s,1,o.FORCE);e.began=false;e.completed=false}}));s||a.onLoop(/** @type {CallbackArgument} */a)}bt(a,(/** @type {JSAnimation} */t=>{const e=pt((h-t._offset)*t._speed,12);const o=t._fps<a._fps?t.requestTick(l):n;u+=wt(t,e,s,i,o);!t.completed&&d&&(d=false)}),c);!s&&u&&a.onRender(/** @type {CallbackArgument} */a);if(d&&a._currentTime>=a.duration){a.paused=true;if(!a.completed){a.completed=true;if(!s){a.onComplete(/** @type {CallbackArgument} */a);a._resolve(/** @type {CallbackArgument} */a)}}}}};const kt={animation:null,update:T};
/**
 * @typedef AdditiveAnimation
 * @property {Number} duration
 * @property {Number} _offset
 * @property {Number} _delay
 * @property {Tween} _head
 * @property {Tween} _tail
 */
/**
 * @param  {TweenAdditiveLookups} lookups
 * @return {AdditiveAnimation}
 */const Ct=t=>{let e=kt.animation;if(!e){e={duration:p,computeDeltaTime:T,_offset:0,_delay:0,_head:null,_tail:null};kt.animation=e;kt.update=()=>{t.forEach((t=>{for(let e in t){const s=t[e];const i=s._head;if(i){const t=i._valueType;const e=t===n.COMPLEX||t===n.COLOR?yt(i._fromNumbers):null;let o=i._fromNumber;let r=s._tail;while(r&&r!==i){if(e)for(let t=0,s=r._numbers.length;t<s;t++)e[t]+=r._numbers[t];else o+=r._number;r=r._prevAdd}i._toNumber=o;i._toNumbers=e}}}));wt(e,1,1,0,o.FORCE)}}return e};const Et=t?requestAnimationFrame:setImmediate;const $t=t?cancelAnimationFrame:clearImmediate;class Engine extends Clock{
/** @param {Number} [initTime] */
constructor(e){super(e);this.useDefaultMainLoop=true;this.pauseOnDocumentHidden=true;
/** @type {DefaultsParams} */this.defaults=N;this.paused=!(!t||!s.hidden);
/** @type {Number|NodeJS.Immediate} */this.reqId=null}update(){const t=this._currentTime=I();if(this.requestTick(t)){this.computeDeltaTime(t);const e=this._speed;const s=this._fps;let i=/** @type {Tickable} */this._head;while(i){const n=i._next;if(i.paused){Tt(this,i);this._hasChildren=!!this._tail;i._running=false;i.completed&&!i._cancelled&&i.cancel()}else xt(i,(t-i._startTime)*i._speed*e,0,0,i._fps<s?i.requestTick(t):o.AUTO);i=n}kt.update()}}wake(){!this.useDefaultMainLoop||this.reqId||this.paused||(this.reqId=Et(Bt));return this}pause(){this.paused=true;return Ot()}resume(){if(this.paused){this.paused=false;bt(this,(/** @type {Tickable} */t=>t.resetTime()));return this.wake()}}get speed(){return this._speed*(R.timeScale===1?1:m)}set speed(t){this._speed=t*R.timeScale;bt(this,(/** @type {Tickable} */t=>t.speed=t._speed))}get timeUnit(){return R.timeScale===1?"ms":"s"}set timeUnit(t){const e=.001;const s=t==="s";const i=s?e:1;if(R.timeScale!==i){R.timeScale=i;R.tickThreshold=200*i;const t=s?e:m;
/** @type {Number} */this.defaults.duration*=t;this._speed*=t}}get precision(){return R.precision}set precision(t){R.precision=t}}const At=(()=>{const e=new Engine(I());if(t){L.engine=e;s.addEventListener("visibilitychange",(()=>{e.pauseOnDocumentHidden&&(s.hidden?e.pause():e.resume())}))}return e})();const Bt=()=>{if(At._head){At.reqId=Et(Bt);At.update()}else At.reqId=0};const Ot=()=>{$t(/** @type {NodeJS.Immediate & Number} */At.reqId);At.reqId=0;return At};
/**
 * @param  {DOMTarget} target
 * @param  {String} propName
 * @param  {Object} animationInlineStyles
 * @return {String}
 */const Nt=(t,e,s)=>{const i=t.style.transform;let n;if(i){const o=t[l];let r;while(r=B.exec(i)){const t=r[1];const i=r[2].slice(1,-1);o[t]=i;if(t===e){n=i;s&&(s[e]=i)}}}return i&&!z(n)?n:F(e,"scale")?"1":F(e,"rotate")||F(e,"skew")?"0deg":"0px"};
/**
 * @param  {DOMTargetsParam|TargetsParam} v
 * @return {NodeList|HTMLCollection}
 */function Rt(t){const e=U(t)?R.root.querySelectorAll(t):t;if(e instanceof NodeList||e instanceof HTMLCollection)return e}
/**
 * @overload
 * @param  {DOMTargetsParam} targets
 * @return {DOMTargetsArray}
 *
 * @overload
 * @param  {JSTargetsParam} targets
 * @return {JSTargetsArray}
 *
 * @overload
 * @param  {TargetsParam} targets
 * @return {TargetsArray}
 *
 * @param  {DOMTargetsParam|JSTargetsParam|TargetsParam} targets
 */function Lt(e){if(W(e))/** @type {TargetsArray} */return[];if(P(e)){const t=e.flat(Infinity);
/** @type {TargetsArray} */const s=[];for(let e=0,i=t.length;e<i;e++){const i=t[e];if(!W(i)){const t=Rt(i);if(t)for(let e=0,i=t.length;e<i;e++){const i=t[e];if(!W(i)){let t=false;for(let e=0,n=s.length;e<n;e++)if(s[e]===i){t=true;break}t||s.push(i)}}else{let t=false;for(let e=0,n=s.length;e<n;e++)if(s[e]===i){t=true;break}t||s.push(i)}}}return s}if(!t)/** @type {JSTargetsArray} */return[e];const s=Rt(e);return s?/** @type {DOMTargetsArray} */Array.from(s):/** @type {TargetsArray} */[e]}
/**
 * @overload
 * @param  {DOMTargetsParam} targets
 * @return {DOMTargetsArray}
 *
 * @overload
 * @param  {JSTargetsParam} targets
 * @return {JSTargetsArray}
 *
 * @overload
 * @param  {TargetsParam} targets
 * @return {TargetsArray}
 *
 * @param  {DOMTargetsParam|JSTargetsParam|TargetsParam} targets
 */function Dt(t){const e=Lt(t);const s=e.length;if(s)for(let t=0;t<s;t++){const s=e[t];if(!s[a]){s[a]=true;const t=V(s);const e=/** @type {DOMTarget} */s.nodeType||t;if(e){s[c]=true;s[h]=t;s[l]={}}}}return e}
/**
 * @param  {TargetsParam} path
 * @return {SVGGeometryElement|undefined}
 */const Ft=t=>{const e=Lt(t);const s=/** @type {SVGGeometryElement} */e[0];if(s&&V(s))return s};
/**
 * @param  {TargetsParam} path2
 * @param  {Number} [precision]
 * @return {FunctionValue}
 */const It=(t,e=.33)=>s=>{const i=/** @type {SVGGeometryElement} */Ft(t);if(!i)return;const n=s.tagName==="path";const o=n?" ":",";const r=s[u];r&&s.setAttribute(n?"d":"points",r);let a="",c="";if(e){const t=/** @type {SVGGeometryElement} */s.getTotalLength();const r=i.getTotalLength();const h=Math.max(Math.ceil(t*e),Math.ceil(r*e));for(let e=0;e<h;e++){const l=e/(h-1);const u=/** @type {SVGGeometryElement} */s.getPointAtLength(t*l);const d=i.getPointAtLength(r*l);const p=n?e===0?"M":"L":"";a+=p+pt(u.x,3)+o+u.y+" ";c+=p+pt(d.x,3)+o+d.y+" "}}else{a=s.getAttribute(n?"d":"points");c=i.getAttribute(n?"d":"points")}s[u]=c;return[a,c]}
/**
 * @param {SVGGeometryElement} [$el]
 * @return {Number}
 */;const Pt=t=>{let e=1;if(t&&t.getCTM){const s=t.getCTM();if(s){const t=K(s.a*s.a+s.b*s.b);const i=K(s.c*s.c+s.d*s.d);e=(t+i)/2}}return e};
/**
 * Creates a proxy that wraps an SVGGeometryElement and adds drawing functionality.
 * @param {SVGGeometryElement} $el - The SVG element to transform into a drawable
 * @param {number} start - Starting position (0-1)
 * @param {number} end - Ending position (0-1)
 * @return {DrawableSVGGeometry} - Returns a proxy that preserves the original element's type with additional 'draw' attribute functionality
 */const Mt=(t,e,s)=>{const i=m;const n=getComputedStyle(t);const o=n.strokeLinecap;const r=n.vectorEffect==="non-scaling-stroke"?t:null;let a=o;const c=new Proxy(t,{get(t,e){const s=t[e];return e===d?t:e==="setAttribute"?(...e)=>{if(e[0]==="draw"){const s=e[1];const n=s.split(" ");const c=+n[0];const h=+n[1];const l=Pt(r);const u=c*-1e3*l;const d=h*i*l+u;const p=i*l+(c===0&&h===1||c===1&&h===0?0:10*l)-d;if(o!=="butt"){const e=c===h?"butt":o;if(a!==e){t.style.strokeLinecap=`${e}`;a=e}}t.setAttribute("stroke-dashoffset",`${u}`);t.setAttribute("stroke-dasharray",`${d} ${p}`)}return Reflect.apply(s,t,e)}:Y(s)?(...e)=>Reflect.apply(s,t,e):s}});if(t.getAttribute("pathLength")!==`${i}`){t.setAttribute("pathLength",`${i}`);c.setAttribute("draw",`${e} ${s}`)}/** @type {DrawableSVGGeometry} */
return c};
/**
 * Creates drawable proxies for multiple SVG elements.
 * @param {TargetsParam} selector - CSS selector, SVG element, or array of elements and selectors
 * @param {number} [start=0] - Starting position (0-1)
 * @param {number} [end=0] - Ending position (0-1)
 * @return {Array<DrawableSVGGeometry>} - Array of proxied elements with drawing functionality
 */const Xt=(t,e=0,s=0)=>{const i=Lt(t);return i.map((t=>Mt(
/** @type {SVGGeometryElement} */t,e,s)))};
/**
 * @param {SVGGeometryElement} $path
 * @param {Number} progress
 * @param {Number}lookup
 * @return {DOMPoint}
 */const Ut=(t,e,s=0)=>t.getPointAtLength(e+s>=1?e+s:0);
/**
 * @param {SVGGeometryElement} $path
 * @param {String} pathProperty
 * @return {FunctionValue}
 */const Yt=(t,e)=>s=>{const i=+t.getTotalLength();const n=s[h];const o=t.getCTM();
/** @type {TweenObjectValue} */return{from:0,to:i,
/** @type {TweenModifier} */
modifier:s=>{if(e==="a"){const e=Ut(t,s,-1);const i=Ut(t,s,1);return ct(i.y-e.y,i.x-e.x)*180/ht}{const i=Ut(t,s,0);return e==="x"?n||!o?i.x:i.x*o.a+i.y*o.c+o.e:n||!o?i.y:i.x*o.b+i.y*o.d+o.f}}}};
/**
 * @param {TargetsParam} path
 */const zt=t=>{const e=Ft(t);if(e)return{translateX:Yt(e,"x"),translateY:Yt(e,"y"),rotate:Yt(e,"a")}};const Wt=["opacity","rotate","overflow","color"];
/**
 * @param  {Target} el
 * @param  {String} propertyName
 * @return {Boolean}
 */const Vt=(t,e)=>{if(Wt.includes(e))return false;if(t.getAttribute(e)||e in t){if(e==="scale"){const e=/** @type {SVGGeometryElement} */ /** @type {DOMTarget} */t.parentNode;return e&&e.tagName==="filter"}return true}};const Ht={morphTo:It,createMotionPath:zt,createDrawable:Xt};
/**
 * RGB / RGBA Color value string -> RGBA values array
 * @param  {String} rgbValue
 * @return {ColorArray}
 */const qt=t=>{const e=w.exec(t)||x.exec(t);const s=z(e[4])?1:+e[4];return[+e[1],+e[2],+e[3],s]};
/**
 * HEX3 / HEX3A / HEX6 / HEX6A Color value string -> RGBA values array
 * @param  {String} hexValue
 * @return {ColorArray}
 */const Jt=t=>{const e=t.length;const s=e===4||e===5;return[+("0x"+t[1]+t[s?1:2]),+("0x"+t[s?2:3]+t[s?2:4]),+("0x"+t[s?3:5]+t[s?3:6]),e===5||e===9?+(+("0x"+t[s?4:7]+t[s?4:8])/255).toFixed(3):1]};
/**
 * @param  {Number} p
 * @param  {Number} q
 * @param  {Number} t
 * @return {Number}
 */const Qt=(t,e,s)=>{s<0&&(s+=1);s>1&&(s-=1);return s<1/6?t+6*(e-t)*s:s<.5?e:s<2/3?t+(e-t)*(2/3-s)*6:t};
/**
 * HSL / HSLA Color value string -> RGBA values array
 * @param  {String} hslValue
 * @return {ColorArray}
 */const jt=t=>{const e=k.exec(t)||C.exec(t);const s=+e[1]/360;const i=+e[2]/100;const n=+e[3]/100;const o=z(e[4])?1:+e[4];let r,a,c;if(i===0)r=a=c=n;else{const t=n<.5?n*(1+i):n+i-n*i;const e=2*n-t;r=pt(Qt(e,t,s+1/3)*255,0);a=pt(Qt(e,t,s)*255,0);c=pt(Qt(e,t,s-1/3)*255,0)}return[r,a,c,o]};
/**
 * All in one color converter that converts a color string value into an array of RGBA values
 * @param  {String} colorString
 * @return {ColorArray}
 */const Gt=t=>q(t)?qt(t):H(t)?Jt(t):J(t)?jt(t):[0,0,0,1];
/**
 * @template T, D
 * @param {T|undefined} targetValue
 * @param {D} defaultValue
 * @return {T|D}
 */const Zt=(t,e)=>z(t)?e:t;
/**
 * @param  {TweenPropValue} value
 * @param  {Target} target
 * @param  {Number} index
 * @param  {Number} total
 * @param  {Object} [store]
 * @return {any}
 */const Kt=(t,e,s,i,n)=>{if(Y(t)){const o=()=>{const n=/** @type {Function} */t(e,s,i);return isNaN(+n)?n||0:+n};n&&(n.func=o);return o()}return t};
/**
 * @param  {Target} target
 * @param  {String} prop
 * @return {tweenTypes}
 */const te=(t,e)=>t[c]?t[h]&&Vt(t,e)?i.ATTRIBUTE:v.includes(e)||y.get(e)?i.TRANSFORM:F(e,"--")?i.CSS_VAR:e in/** @type {DOMTarget} */t.style?i.CSS:e in t?i.OBJECT:i.ATTRIBUTE:i.OBJECT;
/**
 * @param  {DOMTarget} target
 * @param  {String} propName
 * @param  {Object} animationInlineStyles
 * @return {String}
 */const ee=(t,e,s)=>{const i=t.style[e];i&&s&&(s[e]=i);const n=i||getComputedStyle(t[d]||t).getPropertyValue(e);return n==="auto"?"0":n};
/**
 * @param {Target} target
 * @param {String} propName
 * @param {tweenTypes} [tweenType]
 * @param {Object|void} [animationInlineStyles]
 * @return {String|Number}
 */const se=(t,e,s,n)=>{const o=z(s)?te(t,e):s;return o===i.OBJECT?t[e]||0:o===i.ATTRIBUTE?/** @type {DOMTarget} */t.getAttribute(e):o===i.TRANSFORM?Nt(/** @type {DOMTarget} */t,e,n):o===i.CSS_VAR?ee(/** @type {DOMTarget} */t,e,n).trimStart():ee(/** @type {DOMTarget} */t,e,n)};
/**
 * @param  {Number} x
 * @param  {Number} y
 * @param  {String} operator
 * @return {Number}
 */const ie=(t,e,s)=>s==="-"?t-e:s==="+"?t+e:t*e;const ne=()=>({
/** @type {valueTypes} */
t:n.NUMBER,n:0,u:null,o:null,d:null,s:null});
/**
 * @param  {String|Number} rawValue
 * @param  {TweenDecomposedValue} targetObject
 * @return {TweenDecomposedValue}
 */const oe=(t,e)=>{
/** @type {valueTypes} */
e.t=n.NUMBER;e.n=0;e.u=null;e.o=null;e.d=null;e.s=null;if(!t)return e;const s=+t;if(isNaN(s)){let s=/** @type {String} */t;if(s[1]==="="){e.o=s[0];s=s.slice(2)}const i=!s.includes(" ")&&$.exec(s);if(i){e.t=n.UNIT;e.n=+i[1];e.u=i[2];return e}if(e.o){e.n=+s;return e}if(Q(s)){e.t=n.COLOR;e.d=Gt(s);return e}{const t=s.match(E);e.t=n.COMPLEX;e.d=t?t.map(Number):[];e.s=s.split(E)||[];return e}}e.n=s;return e};
/**
 * @param  {Tween} tween
 * @param  {TweenDecomposedValue} targetObject
 * @return {TweenDecomposedValue}
 */const re=(t,e)=>{e.t=t._valueType;e.n=t._toNumber;e.u=t._unit;e.o=null;e.d=yt(t._toNumbers);e.s=yt(t._strings);return e};const ae=ne();const ce={
/** @type {TweenReplaceLookups} */
_rep:new WeakMap,
/** @type {TweenAdditiveLookups} */
_add:new Map};
/**
 * @param  {Target} target
 * @param  {String} property
 * @param  {String} lookup
 * @return {TweenPropertySiblings}
 */const he=(t,e,s="_rep")=>{const i=ce[s];let n=i.get(t);if(!n){n={};i.set(t,n)}return n[e]?n[e]:n[e]={_head:null,_tail:null}};
/**
 * @param  {Tween} p
 * @param  {Tween} c
 * @return {Number|Boolean}
 */const le=(t,e)=>t._isOverridden||t._absoluteStartTime>e._absoluteStartTime;
/**
 * @param {Tween} tween
 */const ue=t=>{t._isOverlapped=1;t._isOverridden=1;t._changeDuration=p;t._currentTime=p};
/**
 * @param  {Tween} tween
 * @param  {TweenPropertySiblings} siblings
 * @return {Tween}
 */const de=(t,e)=>{const s=t._composition;if(s===r.replace){const s=t._absoluteStartTime;St(e,t,le,"_prevRep","_nextRep");const i=t._prevRep;if(i){const e=i.parent;const n=i._absoluteStartTime+i._changeDuration;if(t.parent.id!==e.id&&e.iterationCount>1&&n+(e.duration-e.iterationDuration)>s){ue(i);let t=i._prevRep;while(t&&t.parent.id===e.id){ue(t);t=t._prevRep}}const o=s-t._delay;if(n>o){const t=i._startTime;const e=n-(t+i._updateDuration);i._changeDuration=o-e-t;i._currentTime=i._changeDuration;i._isOverlapped=1;i._changeDuration<p&&ue(i)}let r=true;bt(e,(/** @type Tween */t=>{t._isOverlapped||(r=false)}));if(r){const t=e.parent;if(t){let s=true;bt(t,(/** @type JSAnimation */t=>{t!==e&&bt(t,(/** @type Tween */t=>{t._isOverlapped||(s=false)}))}));s&&t.cancel()}else e.cancel()}}}else if(s===r.blend){const e=he(t.target,t.property,"_add");const s=Ct(ce._add);let i=e._head;if(!i){i={...t};i._composition=r.replace;i._updateDuration=p;i._startTime=0;i._numbers=yt(t._fromNumbers);i._number=0;i._next=null;i._prev=null;St(e,i);St(s,i)}const n=t._toNumber;t._fromNumber=i._fromNumber-n;t._toNumber=0;t._numbers=yt(t._fromNumbers);t._number=0;i._fromNumber=n;if(t._toNumbers){const e=yt(t._toNumbers);e&&e.forEach(((e,s)=>{t._fromNumbers[s]=i._fromNumbers[s]-e;t._toNumbers[s]=0}));i._fromNumbers=e}St(e,t,null,"_prevAdd","_nextAdd")}return t};
/**
 * @param  {Tween} tween
 * @return {Tween}
 */const pe=t=>{const e=t._composition;if(e!==r.none){const s=t.target;const i=t.property;const n=ce._rep;const o=n.get(s);const a=o[i];Tt(a,t,"_prevRep","_nextRep");if(e===r.blend){const e=ce._add;const n=e.get(s);if(!n)return;const o=n[i];const r=kt.animation;Tt(o,t,"_prevAdd","_nextAdd");const a=o._head;if(a&&a===o._tail){Tt(o,a,"_prevAdd","_nextAdd");Tt(r,a);let t=true;for(let e in n)if(n[e]._head){t=false;break}t&&e.delete(s)}}}return t};
/**
 * @param  {Timer} timer
 * @return {Timer}
 */const fe=t=>{t.paused=true;t.began=false;t.completed=false;return t};
/**
 * @param  {Timer} timer
 * @return {Timer}
 */const me=t=>{if(!t._cancelled)return t;t._hasChildren?bt(t,me):bt(t,(/** @type {Tween} tween*/t=>{t._composition!==r.none&&de(t,he(t.target,t.property))}));t._cancelled=0;return t};let ge=0;class Timer extends Clock{
/**
   * @param {TimerParams} [parameters]
   * @param {Timeline} [parent]
   * @param {Number} [parentPosition]
   */
constructor(t={},e=null,s=0){super(0);const{id:i,delay:n,duration:o,reversed:r,alternate:a,loop:c,loopDelay:h,autoplay:l,frameRate:u,playbackRate:d,onComplete:f,onLoop:m,onPause:g,onBegin:_,onBeforeUpdate:y,onUpdate:v}=t;R.scope&&R.scope.revertibles.push(this);const b=e?0:At._elapsedTime;const S=e?e.defaults:R.defaults;const w=/** @type {Number} */Y(n)||z(n)?S.delay:+n;const x=Y(o)||z(o)?Infinity:+o;const k=Zt(c,S.loop);const C=Zt(h,S.loopDelay);const E=k===true||k===Infinity||
/** @type {Number} */k<0?Infinity:
/** @type {Number} */k+1;let $=0;if(e)$=s;else{let t=I();if(At.paused){At.requestTick(t);t=At._elapsedTime}$=t-At._startTime}this.id=z(i)?++ge:i;
/** @type {Timeline} */this.parent=e;this.duration=gt((x+C)*E-C)||p;
/** @type {Boolean} */this.backwards=false;
/** @type {Boolean} */this.paused=true;
/** @type {Boolean} */this.began=false;
/** @type {Boolean} */this.completed=false;
/** @type {Callback<this>} */this.onBegin=_||S.onBegin;
/** @type {Callback<this>} */this.onBeforeUpdate=y||S.onBeforeUpdate;
/** @type {Callback<this>} */this.onUpdate=v||S.onUpdate;
/** @type {Callback<this>} */this.onLoop=m||S.onLoop;
/** @type {Callback<this>} */this.onPause=g||S.onPause;
/** @type {Callback<this>} */this.onComplete=f||S.onComplete;
/** @type {Number} */this.iterationDuration=x;
/** @type {Number} */this.iterationCount=E;
/** @type {Boolean|ScrollObserver} */this._autoplay=!e&&Zt(l,S.autoplay);
/** @type {Number} */this._offset=$;
/** @type {Number} */this._delay=w;
/** @type {Number} */this._loopDelay=C;
/** @type {Number} */this._iterationTime=0;
/** @type {Number} */this._currentIteration=0;
/** @type {Function} */this._resolve=T;
/** @type {Boolean} */this._running=false;
/** @type {Number} */this._reversed=+Zt(r,S.reversed);
/** @type {Number} */this._reverse=this._reversed;
/** @type {Number} */this._cancelled=0;
/** @type {Boolean} */this._alternate=Zt(a,S.alternate);
/** @type {Renderable} */this._prev=null;
/** @type {Renderable} */this._next=null;
/** @type {Number} */this._elapsedTime=b;
/** @type {Number} */this._startTime=b;
/** @type {Number} */this._lastTime=b;
/** @type {Number} */this._fps=Zt(u,S.frameRate);
/** @type {Number} */this._speed=Zt(d,S.playbackRate)}get cancelled(){return!!this._cancelled}
/** @param {Boolean} cancelled  */set cancelled(t){t?this.cancel():this.reset(1).play()}get currentTime(){return ut(pt(this._currentTime,R.precision),-this._delay,this.duration)}
/** @param {Number} time  */set currentTime(t){const e=this.paused;this.pause().seek(+t);e||this.resume()}get iterationCurrentTime(){return pt(this._iterationTime,R.precision)}
/** @param {Number} time  */set iterationCurrentTime(t){this.currentTime=this.iterationDuration*this._currentIteration+t}get progress(){return ut(pt(this._currentTime/this.duration,5),0,1)}
/** @param {Number} progress  */set progress(t){this.currentTime=this.duration*t}get iterationProgress(){return ut(pt(this._iterationTime/this.iterationDuration,5),0,1)}
/** @param {Number} progress  */set iterationProgress(t){const e=this.iterationDuration;this.currentTime=e*this._currentIteration+e*t}get currentIteration(){return this._currentIteration}
/** @param {Number} iterationCount  */set currentIteration(t){this.currentTime=this.iterationDuration*ut(+t,0,this.iterationCount-1)}get reversed(){return!!this._reversed}
/** @param {Boolean} reverse  */set reversed(t){t?this.reverse():this.play()}get speed(){return super.speed}
/** @param {Number} playbackRate  */set speed(t){super.speed=t;this.resetTime()}
/**
   * @param  {Number} internalRender
   * @return {this}
   */reset(t=0){me(this);this._reversed&&!this._reverse&&(this.reversed=false);this._iterationTime=this.iterationDuration;xt(this,0,1,t,o.FORCE);fe(this);this._hasChildren&&bt(this,fe);return this}
/**
   * @param  {Number} internalRender
   * @return {this}
   */init(t=0){this.fps=this._fps;this.speed=this._speed;!t&&this._hasChildren&&xt(this,this.duration,1,t,o.FORCE);this.reset(t);const e=this._autoplay;e===true?this.resume():e&&!z(/** @type {ScrollObserver} */e.linked)&&
/** @type {ScrollObserver} */e.link(this);return this}resetTime(){const t=1/(this._speed*At._speed);this._startTime=I()-(this._currentTime+this._delay)*t;return this}pause(){if(this.paused)return this;this.paused=true;this.onPause(this);return this}resume(){if(!this.paused)return this;this.paused=false;if(this.duration<=p&&!this._hasChildren)xt(this,p,0,0,o.FORCE);else{if(!this._running){St(At,this);At._hasChildren=true;this._running=true}this.resetTime();this._startTime-=12;At.wake()}return this}restart(){return this.reset(0).resume()}
/**
   * @param  {Number} time
   * @param  {Boolean|Number} [muteCallbacks]
   * @param  {Boolean|Number} [internalRender]
   * @return {this}
   */seek(t,e=0,s=0){me(this);this.completed=false;const i=this.paused;this.paused=true;xt(this,t+this._delay,~~e,~~s,o.AUTO);return i?this:this.resume()}alternate(){const t=this._reversed;const e=this.iterationCount;const s=this.iterationDuration;const i=e===Infinity?ot(f/s):e;this._reversed=+(!this._alternate||i%2?!t:t);e===Infinity?this.iterationProgress=this._reversed?1-this.iterationProgress:this.iterationProgress:this.seek(s*i-this._currentTime);this.resetTime();return this}play(){this._reversed&&this.alternate();return this.resume()}reverse(){this._reversed||this.alternate();return this.resume()}cancel(){this._hasChildren?bt(this,(/** @type {Renderable} */t=>t.cancel()),true):bt(this,pe);this._cancelled=1;return this.pause()}
/**
   * @param  {Number} newDuration
   * @return {this}
   */stretch(t){const e=this.duration;const s=_t(t);if(e===s)return this;const i=t/e;const n=t<=p;this.duration=n?p:s;this.iterationDuration=n?p:_t(this.iterationDuration*i);this._offset*=i;this._delay*=i;this._loopDelay*=i;return this}revert(){xt(this,0,1,0,o.AUTO);const t=/** @type {ScrollObserver} */this._autoplay;t&&t.linked&&t.linked===this&&t.revert();return this.cancel()}complete(){return this.seek(this.duration).cancel()}
/**
   * @param  {Callback<this>} [callback]
   * @return {Promise}
   */then(t=T){const e=this.then;const s=()=>{this.then=null;t(this);this.then=e;this._resolve=T};return new Promise((t=>{this._resolve=()=>t(s());this.completed&&this._resolve();return this}))}}
/**
 * @param {TimerParams} [parameters]
 * @return {Timer}
 */const _e=t=>new Timer(t,null,0).init()
/** @type {EasingFunction} */;const ye=t=>t
/**
 * @param  {Number} aT
 * @param  {Number} aA1
 * @param  {Number} aA2
 * @return {Number}
 */;const ve=(t,e,s)=>(((1-3*s+3*e)*t+(3*s-6*e))*t+3*e)*t
/**
 * @param  {Number} aX
 * @param  {Number} mX1
 * @param  {Number} mX2
 * @return {Number}
 */;const be=(t,e,s)=>{let i,n,o=0,r=1,a=0;do{n=o+(r-o)/2;i=ve(n,e,s)-t;i>0?r=n:o=n}while(st(i)>1e-7&&++a<100);return n};
/**
 * @param  {Number} [mX1]
 * @param  {Number} [mY1]
 * @param  {Number} [mX2]
 * @param  {Number} [mY2]
 * @return {EasingFunction}
 */const Te=(t=.5,e=0,s=.5,i=1)=>t===e&&s===i?ye:n=>n===0||n===1?n:ve(be(n,t,s),e,i)
/**
 * Steps ease implementation https://developer.mozilla.org/fr/docs/Web/CSS/transition-timing-function
 * Only covers 'end' and 'start' jumpterms
 * @param  {Number} steps
 * @param  {Boolean} [fromStart]
 * @return {EasingFunction}
 */;const Se=(t=10,e)=>{const s=e?nt:ot;return e=>s(ut(e,0,1)*t)*(1/t)};
/**
 * Without parameters, the linear function creates a non-eased transition.
 * Parameters, if used, creates a piecewise linear easing by interpolating linearly between the specified points.
 * @param  {...String|Number} [args] - Points
 * @return {EasingFunction}
 */const we=(...t)=>{const e=t.length;if(!e)return ye;const s=e-1;const i=t[0];const n=t[s];const o=[0];const r=[G(i)];for(let e=1;e<s;e++){const i=t[e];const n=U(i)?
/** @type {String} */i.trim().split(" "):[i];const a=n[0];const c=n[1];o.push(z(c)?e/s:G(c)/100);r.push(G(a))}r.push(G(n));o.push(1);return function(t){for(let e=1,s=o.length;e<s;e++){const s=o[e];if(t<=s){const i=o[e-1];const n=r[e-1];return n+(r[e]-n)*(t-i)/(s-i)}}return r[r.length-1]}};
/**
 * Generate random steps
 * @param  {Number} [length] - The number of steps
 * @param  {Number} [randomness] - How strong the randomness is
 * @return {EasingFunction}
 */const xe=(t=10,e=1)=>{const s=[0];const i=t-1;for(let t=1;t<i;t++){const n=s[t-1];const o=t/i;const r=(t+1)/i;const a=o+(r-o)*Math.random();const c=o*(1-e)+a*e;s.push(ut(c,n,1))}s.push(1);return we(...s)};
/**
 * @callback PowerEasing
 * @param {Number|String} [power=1.675]
 * @return {EasingFunction}
 */
/**
 * @callback BackEasing
 * @param {Number|String} [overshoot=1.70158]
 * @return {EasingFunction}
 */
/**
 * @callback ElasticEasing
 * @param {Number|String} [amplitude=1]
 * @param {Number|String} [period=.3]
 * @return {EasingFunction}
 */
/**
 * @callback EaseFactory
 * @param {Number|String} [paramA]
 * @param {Number|String} [paramB]
 * @return {EasingFunction|Number}
 */
/** @typedef {PowerEasing|BackEasing|ElasticEasing} EasesFactory */const ke=ht/2;const Ce=ht*2;
/** @type {PowerEasing} */const Ee=(t=1.68)=>e=>Z(e,+t)
/** @type {Record<String, EasesFactory|EasingFunction>} */;const $e={[_]:Ee,Quad:Ee(2),Cubic:Ee(3),Quart:Ee(4),Quint:Ee(5),
/** @type {EasingFunction} */
Sine:t=>1-et(t*ke)
/** @type {EasingFunction} */,Circ:t=>1-K(1-t*t)
/** @type {EasingFunction} */,Expo:t=>t?Z(2,10*t-10):0
/** @type {EasingFunction} */,Bounce:t=>{let e,s=4;while(t<((e=Z(2,--s))-1)/11);return 1/Z(4,3-s)-7.5625*Z((e*3-2)/22-t,2)},
/** @type {BackEasing} */
Back:(t=1.70158)=>e=>(+t+1)*e*e*e-+t*e*e
/** @type {ElasticEasing} */,Elastic:(t=1,e=.3)=>{const s=ut(+t,1,10);const i=ut(+e,p,2);const n=i/Ce*rt(1/s);const o=Ce/i;return t=>t===0||t===1?t:-s*Z(2,-10*(1-t))*tt((1-t-n)*o)}};
/**
 * @callback EaseType
 * @param {EasingFunction} Ease
 * @return {EasingFunction}
 */
/** @type {Record<String, EaseType>} */const Ae={in:t=>e=>t(e),out:t=>e=>1-t(1-e),inOut:t=>e=>e<.5?t(e*2)/2:1-t(e*-2+2)/2,outIn:t=>e=>e<.5?(1-t(1-e*2))/2:(t(e*2-1)+1)/2};
/**
 * @param  {String} string
 * @param  {Record<String, EasesFactory|EasingFunction>} easesFunctions
 * @param  {Object} easesLookups
 * @return {EasingFunction}
 */const Be=(t,e,s)=>{if(s[t])return s[t];if(t.indexOf("(")<=-1){const i=Ae[t]||t.includes("Back")||t.includes("Elastic");const n=/** @type {EasingFunction} */i?/** @type {EasesFactory} */e[t]():e[t];return n?s[t]=n:ye}{const i=t.slice(0,-1).split("(");const n=/** @type {EasesFactory} */e[i[0]];return n?s[t]=n(...i[1].split(",")):ye}};
/**
 * @typedef  {Object} EasesFunctions
 * @property {typeof linear} linear
 * @property {typeof irregular} irregular
 * @property {typeof steps} steps
 * @property {typeof cubicBezier} cubicBezier
 * @property {PowerEasing} in
 * @property {PowerEasing} out
 * @property {PowerEasing} inOut
 * @property {PowerEasing} outIn
 * @property {EasingFunction} inQuad
 * @property {EasingFunction} outQuad
 * @property {EasingFunction} inOutQuad
 * @property {EasingFunction} outInQuad
 * @property {EasingFunction} inCubic
 * @property {EasingFunction} outCubic
 * @property {EasingFunction} inOutCubic
 * @property {EasingFunction} outInCubic
 * @property {EasingFunction} inQuart
 * @property {EasingFunction} outQuart
 * @property {EasingFunction} inOutQuart
 * @property {EasingFunction} outInQuart
 * @property {EasingFunction} inQuint
 * @property {EasingFunction} outQuint
 * @property {EasingFunction} inOutQuint
 * @property {EasingFunction} outInQuint
 * @property {EasingFunction} inSine
 * @property {EasingFunction} outSine
 * @property {EasingFunction} inOutSine
 * @property {EasingFunction} outInSine
 * @property {EasingFunction} inCirc
 * @property {EasingFunction} outCirc
 * @property {EasingFunction} inOutCirc
 * @property {EasingFunction} outInCirc
 * @property {EasingFunction} inExpo
 * @property {EasingFunction} outExpo
 * @property {EasingFunction} inOutExpo
 * @property {EasingFunction} outInExpo
 * @property {EasingFunction} inBounce
 * @property {EasingFunction} outBounce
 * @property {EasingFunction} inOutBounce
 * @property {EasingFunction} outInBounce
 * @property {BackEasing} inBack
 * @property {BackEasing} outBack
 * @property {BackEasing} inOutBack
 * @property {BackEasing} outInBack
 * @property {ElasticEasing} inElastic
 * @property {ElasticEasing} outElastic
 * @property {ElasticEasing} inOutElastic
 * @property {ElasticEasing} outInElastic
 */const Oe=(()=>{const t={linear:we,irregular:xe,steps:Se,cubicBezier:Te};for(let e in Ae)for(let s in $e){const i=$e[s];const n=Ae[e];t[e+s]=/** @type {EasesFactory|EasingFunction} */s===_||s==="Back"||s==="Elastic"?(t,e)=>n(/** @type {EasesFactory} */i(t,e)):n(/** @type {EasingFunction} */i)}/** @type {EasesFunctions} */
return t})();
/** @type {Record<String, EasingFunction>} */const Ne={linear:ye};
/**
 * @param  {EasingParam} ease
 * @return {EasingFunction}
 */const Re=t=>Y(t)?t:U(t)?Be(/** @type {String} */t,Oe,Ne):ye;const Le={};
/**
 * @param  {String} propertyName
 * @param  {Target} target
 * @param  {tweenTypes} tweenType
 * @return {String}
 */const De=(t,e,s)=>{if(s===i.TRANSFORM){const e=y.get(t);return e||t}if(s===i.CSS||s===i.ATTRIBUTE&&V(e)&&t in/** @type {DOMTarget} */e.style){const e=Le[t];if(e)return e;{const e=t?D(t):t;Le[t]=e;return e}}return t};const Fe={deg:1,rad:180/ht,turn:360};const Ie={};
/**
 * @param  {DOMTarget} el
 * @param  {TweenDecomposedValue} decomposedValue
 * @param  {String} unit
 * @param  {Boolean} [force]
 * @return {TweenDecomposedValue}
 */const Pe=(t,e,i,o=false)=>{const r=e.u;const a=e.n;if(e.t===n.UNIT&&r===i)return e;const c=a+r+i;const h=Ie[c];if(z(h)||o){let n;if(r in Fe)n=a*Fe[r]/Fe[i];else{const e=100;const o=/** @type {DOMTarget} */t.cloneNode();const c=t.parentNode;const h=c&&c!==s?c:s.body;h.appendChild(o);const l=o.style;l.width=e+r;const u=/** @type {HTMLElement} */o.offsetWidth||e;l.width=e+i;const d=/** @type {HTMLElement} */o.offsetWidth||e;const p=u/d;h.removeChild(o);n=p*a}e.n=n;Ie[c]=n}else e.n=h;e.t===n.UNIT;e.u=i;return e};
/**
 * @template {Renderable} T
 * @param {T} renderable
 * @return {T}
 */const Me=t=>{if(t._hasChildren)bt(t,Me,true);else{const e=/** @type {JSAnimation} */t;e.pause();bt(e,(/** @type {Tween} */t=>{const s=t.property;const n=t.target;if(n[c]){const o=/** @type {DOMTarget} */n.style;const r=e._inlineStyles[s];if(t._tweenType===i.TRANSFORM){const e=n[l];z(r)||r===_?delete e[s]:e[s]=r;if(t._renderTransforms)if(Object.keys(e).length){let t=_;for(let s in e)t+=b[s]+e[s]+") ";o.transform=t}else o.removeProperty("transform")}else z(r)||r===_?o.removeProperty(s):o[s]=r;e._tail===t&&e.targets.forEach((t=>{t.getAttribute&&t.getAttribute("style")===_&&t.removeAttribute("style")}))}}))}return t};const Xe=ne();const Ue=ne();const Ye={func:null};const ze=[null];const We=[null,null];
/** @type {TweenKeyValue} */const Ve={to:null};let He=0;let qe;
/** @type {TweenParamsOptions & TweenValues} */let Je;
/**
 * @param {DurationKeyframes | PercentageKeyframes} keyframes
 * @param {AnimationParams} parameters
 * @return {AnimationParams}
 */const Qe=(t,e)=>{
/** @type {AnimationParams} */
const s={};if(P(t)){const e=[].concat(.../** @type {DurationKeyframes} */t.map((t=>Object.keys(t)))).filter(j);for(let i=0,n=e.length;i<n;i++){const n=e[i];const o=/** @type {DurationKeyframes} */t.map((t=>{
/** @type {TweenKeyValue} */
const e={};for(let s in t){const i=/** @type {TweenPropValue} */t[s];j(s)?s===n&&(e.to=i):e[s]=i}return e}));s[n]=/** @type {ArraySyntaxValue} */o}}else{const i=/** @type {Number} */Zt(e.duration,R.defaults.duration);const n=Object.keys(t).map((e=>({o:parseFloat(e)/100,p:t[e]}))).sort(((t,e)=>t.o-e.o));n.forEach((t=>{const e=t.o;const n=t.p;for(let t in n)if(j(t)){let o=/** @type {Array} */s[t];o||(o=s[t]=[]);const r=e*i;let a=o.length;let c=o[a-1];const h={to:n[t]};let l=0;for(let t=0;t<a;t++)l+=o[t].duration;a===1&&(h.from=c.to);n.ease&&(h.ease=n.ease);h.duration=r-(a?l:0);o.push(h)}return t}));for(let t in s){const e=/** @type {Array} */s[t];let i;for(let t=0,s=e.length;t<s;t++){const s=e[t];const n=s.ease;s.ease=i||void 0;i=n}e[0].duration||e.shift()}}return s};class JSAnimation extends Timer{
/**
   * @param {TargetsParam} targets
   * @param {AnimationParams} parameters
   * @param {Timeline} [parent]
   * @param {Number} [parentPosition]
   * @param {Boolean} [fastSet=false]
   * @param {Number} [index=0]
   * @param {Number} [length=0]
   */
constructor(t,e,s,o,a=false,c=0,h=0){super(/** @type {TimerParams&AnimationParams} */e,s,o);const l=Dt(t);const u=l.length;const d=/** @type {AnimationParams} */e.keyframes;const f=/** @type {AnimationParams} */d?vt(Qe(/** @type {DurationKeyframes} */d,e),e):e;const{delay:g,duration:_,ease:y,playbackEase:v,modifier:b,composition:T,onRender:S}=f;const w=s?s.defaults:R.defaults;const x=Zt(v,w.playbackEase);const k=x?Re(x):null;const C=!z(y)&&!z(/** @type {Spring} */y.ease);const E=C?/** @type {Spring} */y.ease:Zt(y,k?"linear":w.ease);const $=C?/** @type {Spring} */y.duration:Zt(_,w.duration);const A=Zt(g,w.delay);const B=b||w.modifier;const O=z(T)&&u>=m?r.none:z(T)?w.composition:T;const N={};const L=this._offset+(s?s._offset:0);let D=NaN;let F=NaN;let I=0;let U=0;for(let t=0;t<u;t++){const e=l[t];const o=c||t;const d=h||u;let m=NaN;let g=NaN;for(let t in f)if(j(t)){const c=te(e,t);const h=De(t,e,c);let l=f[t];const u=P(l);if(a&&!u){We[0]=l;We[1]=l;l=We}if(u){const t=/** @type {Array} */l.length;const e=!M(l[0]);if(t===2&&e){Ve.to=/** @type {TweenParamValue} */ /** @type {unknown} */l;ze[0]=Ve;qe=ze}else if(t>2&&e){qe=[];
/** @type {Array.<Number>} */l.forEach(((t,e)=>{if(e)if(e===1){We[1]=t;qe.push(We)}else qe.push(t);else We[0]=t}))}else qe=/** @type {Array.<TweenKeyValue>} */l}else{ze[0]=l;qe=ze}let _=null;let y=null;let v=NaN;let b=0;let T=0;for(let t=qe.length;T<t;T++){const i=qe[T];if(M(i))Je=i;else{Ve.to=/** @type {TweenParamValue} */i;Je=Ve}Ye.func=null;const a=Kt(Je.to,e,o,d,Ye);let l;if(M(a)&&!z(a.to)){Je=a;l=a.to}else l=a;const u=Kt(Je.from,e,o,d);const f=Je.ease;const m=!z(f)&&!z(/** @type {Spring} */f.ease);const g=m?/** @type {Spring} */f.ease:f||E;const S=m?/** @type {Spring} */f.duration:Kt(Zt(Je.duration,t>1?Kt($,e,o,d)/t:$),e,o,d);const w=Kt(Zt(Je.delay,T?0:A),e,o,d);const x=Kt(Zt(Je.composition,O),e,o,d);const k=X(x)?x:r[x];const C=Je.modifier||B;const R=!z(u);const D=!z(l);const F=P(l);const Y=F||R&&D;const W=y?b+w:w;const V=L+W;U||!R&&!F||(U=1);let H=y;if(k!==r.none){_||(_=he(e,h));let t=_._head;while(t&&!t._isOverridden&&t._absoluteStartTime<=V){H=t;t=t._nextRep;if(t&&t._absoluteStartTime>=V)while(t){ue(t);t=t._nextRep}}}if(Y){oe(F?Kt(l[0],e,o,d):u,Xe);oe(F?Kt(l[1],e,o,d,Ye):l,Ue);if(Xe.t===n.NUMBER)if(H){if(H._valueType===n.UNIT){Xe.t=n.UNIT;Xe.u=H._unit}}else{oe(se(e,h,c,N),ae);if(ae.t===n.UNIT){Xe.t=n.UNIT;Xe.u=ae.u}}}else{D?oe(l,Ue):y?re(y,Ue):oe(s&&H&&H.parent.parent===s?H._value:se(e,h,c,N),Ue);R?oe(u,Xe):y?re(y,Xe):oe(s&&H&&H.parent.parent===s?H._value:se(e,h,c,N),Xe)}Xe.o&&(Xe.n=ie(H?H._toNumber:oe(se(e,h,c,N),ae).n,Xe.n,Xe.o));Ue.o&&(Ue.n=ie(Xe.n,Ue.n,Ue.o));if(Xe.t!==Ue.t)if(Xe.t===n.COMPLEX||Ue.t===n.COMPLEX){const t=Xe.t===n.COMPLEX?Xe:Ue;const e=Xe.t===n.COMPLEX?Ue:Xe;e.t=n.COMPLEX;e.s=yt(t.s);e.d=t.d.map((()=>e.n))}else if(Xe.t===n.UNIT||Ue.t===n.UNIT){const t=Xe.t===n.UNIT?Xe:Ue;const e=Xe.t===n.UNIT?Ue:Xe;e.t=n.UNIT;e.u=t.u}else if(Xe.t===n.COLOR||Ue.t===n.COLOR){const t=Xe.t===n.COLOR?Xe:Ue;const e=Xe.t===n.COLOR?Ue:Xe;e.t=n.COLOR;e.s=t.s;e.d=[0,0,0,1]}if(Xe.u!==Ue.u){let t=Ue.u?Xe:Ue;t=Pe(/** @type {DOMTarget} */e,t,Ue.u?Ue.u:Xe.u,false)}if(Ue.d&&Xe.d&&Ue.d.length!==Xe.d.length){const t=Xe.d.length>Ue.d.length?Xe:Ue;const e=t===Xe?Ue:Xe;e.d=t.d.map(((t,s)=>z(e.d[s])?0:e.d[s]));e.s=yt(t.s)}const q=pt(+S||p,12);
/** @type {Tween} */const J={parent:this,id:He++,property:h,target:e,_value:null,_func:Ye.func,_ease:Re(g),_fromNumbers:yt(Xe.d),_toNumbers:yt(Ue.d),_strings:yt(Ue.s),_fromNumber:Xe.n,_toNumber:Ue.n,_numbers:yt(Xe.d),_number:Xe.n,_unit:Ue.u,_modifier:C,_currentTime:0,_startTime:W,_delay:+w,_updateDuration:q,_changeDuration:q,_absoluteStartTime:V,_tweenType:c,_valueType:Ue.t,_composition:k,_isOverlapped:0,_isOverridden:0,_renderTransforms:0,_prevRep:null,_nextRep:null,_prevAdd:null,_nextAdd:null,_prev:null,_next:null};k!==r.none&&de(J,_);isNaN(v)&&(v=J._startTime);b=pt(W+q,12);y=J;I++;St(this,J)}(isNaN(F)||v<F)&&(F=v);(isNaN(D)||b>D)&&(D=b);if(c===i.TRANSFORM){m=I-T;g=I}}if(!isNaN(m)){let t=0;bt(this,(/** @type {Tween} */e=>{if(t>=m&&t<g){e._renderTransforms=1;e._composition===r.blend&&bt(kt.animation,(/** @type {Tween} */t=>{t.id===e.id&&(t._renderTransforms=1)}))}t++}))}}u||console.warn("No target found. Make sure the element you're trying to animate is accessible before creating your animation.");if(F){bt(this,(/** @type {Tween} */t=>{t._startTime-t._delay||(t._delay-=F);t._startTime-=F}));D-=F}else F=0;if(!D){D=p;this.iterationCount=0}
/** @type {TargetsArray} */this.targets=l;
/** @type {Number} */this.duration=D===p?p:gt((D+this._loopDelay)*this.iterationCount-this._loopDelay)||p;
/** @type {Callback<this>} */this.onRender=S||w.onRender;
/** @type {EasingFunction} */this._ease=k;
/** @type {Number} */this._delay=F;
/** @type {Number} */this.iterationDuration=D;
/** @type {{}} */this._inlineStyles=N;!this._autoplay&&U&&this.onRender(this)}
/**
   * @param  {Number} newDuration
   * @return {this}
   */stretch(t){const e=this.duration;if(e===_t(t))return this;const s=t/e;bt(this,(/** @type {Tween} */t=>{t._updateDuration=_t(t._updateDuration*s);t._changeDuration=_t(t._changeDuration*s);t._currentTime*=s;t._startTime*=s;t._absoluteStartTime*=s}));return super.stretch(t)}refresh(){bt(this,(/** @type {Tween} */t=>{const e=se(t.target,t.property,t._tweenType);oe(e,ae);t._fromNumbers=yt(ae.d);t._fromNumber=ae.n;if(t._func){oe(t._func(),Ue);t._toNumbers=yt(Ue.d);t._strings=yt(Ue.s);t._toNumber=Ue.n}}));return this}revert(){super.revert();return Me(this)}
/**
   * @param  {Callback<this>} [callback]
   * @return {Promise}
   */then(t){return super.then(t)}}
/**
 * @param {TargetsParam} targets
 * @param {AnimationParams} parameters
 * @return {JSAnimation}
 */const je=(t,e)=>new JSAnimation(t,e,null,0,false).init()
/**
 * Converts an easing function into a valid CSS linear() timing function string
 * @param {EasingFunction} fn
 * @param {number} [samples=100]
 * @returns {string} CSS linear() timing function
 */;const Ge=(t,e=100)=>{const s=[];for(let i=0;i<=e;i++)s.push(t(i/e));return`linear(${s.join(", ")})`};const Ze={in:"ease-in",out:"ease-out",inOut:"ease-in-out"};const Ke=(()=>{const t={};for(let e in Ae)t[e]=t=>Ae[e](Ee(t));/** @type {Record<String, EasingFunction>} */
return t})();
/**
 * @param  {EasingParam} ease
 * @return {String}
 */const ts=t=>{let e=Ze[t];if(e)return e;e="linear";if(U(t)){if(F(t,"linear")||F(t,"cubic-")||F(t,"steps")||F(t,"ease"))e=t;else if(F(t,"cubicB"))e=D(t);else{const s=Be(t,Ke,Ze);Y(s)&&(e=s===ye?"linear":Ge(s))}Ze[t]=e}else if(Y(t)){const s=Ge(t);s&&(e=s)}else/** @type {Spring} */t.ease&&(e=Ge(/** @type {Spring} */t.ease));return e};
/**
 * @typedef {String|Number|Array<String>|Array<Number>} WAAPITweenValue
 */
/**
 * @callback WAAPIFunctionvalue
 * @param {DOMTarget} target - The animated target
 * @param {Number} index - The target index
 * @param {Number} length - The total number of animated targets
 * @return {WAAPITweenValue}
 */
/**
 * @typedef {WAAPITweenValue|WAAPIFunctionvalue|Array<String|Number|WAAPIFunctionvalue>} WAAPIKeyframeValue
 */
/**
 * @typedef {(animation: WAAPIAnimation) => void} WAAPICallback
 */
/**
 * @typedef {Object} WAAPITweenOptions
 * @property {WAAPIKeyframeValue} [to]
 * @property {WAAPIKeyframeValue} [from]
 * @property {Number|WAAPIFunctionvalue} [duration]
 * @property {Number|WAAPIFunctionvalue} [delay]
 * @property {EasingParam} [ease]
 * @property {CompositeOperation} [composition]
 */
/**
 * @typedef {Object} WAAPIAnimationOptions
 * @property {Number|Boolean} [loop]
 * @property {Boolean} [Reversed]
 * @property {Boolean} [Alternate]
 * @property {Boolean|ScrollObserver} [autoplay]
 * @property {Number} [playbackRate]
 * @property {Number|WAAPIFunctionvalue} [duration]
 * @property {Number|WAAPIFunctionvalue} [delay]
 * @property {EasingParam} [ease]
 * @property {CompositeOperation} [composition]
 * @property {WAAPICallback} [onComplete]
 */
/**
 * @typedef {Record<String, WAAPIKeyframeValue | WAAPIAnimationOptions | Boolean | ScrollObserver | WAAPICallback | EasingParam | WAAPITweenOptions> & WAAPIAnimationOptions} WAAPIAnimationParams
 */const es=["x","y","z"];const ss=["perspective","width","height","margin","padding","top","right","bottom","left","borderWidth","fontSize","borderRadius",...es];const is=[...es,...v.filter((t=>["X","Y","Z"].some((e=>t.endsWith(e)))))];let ns=t&&(z(CSS)||!Object.hasOwnProperty.call(CSS,"registerProperty"));const os=()=>{if(!ns){v.forEach((t=>{const e=F(t,"skew");const s=F(t,"scale");const i=F(t,"rotate");const n=F(t,"translate");const o=i||e;const r=o?"<angle>":s?"<number>":n?"<length-percentage>":"*";try{CSS.registerProperty({name:"--"+t,syntax:r,inherits:false,initialValue:n?"0px":o?"0deg":s?"1":"0"})}catch{}}));ns=true}};const rs={_head:null,_tail:null};
/**
 * @param {DOMTarget} $el
 * @param {String} [property]
 * @param {WAAPIAnimation} [parent]
 */const as=(t,e,s)=>{let i=rs._head;while(i){const n=i._next;const o=i.$el===t;const r=!e||i.property===e;const a=!s||i.parent===s;if(o&&r&&a){const t=i.animation;try{t.commitStyles()}catch{}t.cancel();Tt(rs,i);const e=i.parent;if(e){e._completed++;if(e.animations.length===e._completed){e.completed=true;if(!e.muteCallbacks){e.paused=true;e.onComplete(e);e._resolve(e)}}}}i=n}};
/**
 * @param {WAAPIAnimation} parent
 * @param {DOMTarget} $el
 * @param {String} property
 * @param {PropertyIndexedKeyframes} keyframes
 * @param {KeyframeAnimationOptions} params
 * @retun {Animation}
 */const cs=(t,e,s,i,n)=>{const o=e.animate(i,n);const r=n.delay+ +n.duration*n.iterations;o.playbackRate=t._speed;t.paused&&o.pause();if(t.duration<r){t.duration=r;t.controlAnimation=o}t.animations.push(o);as(e,s);St(rs,{parent:t,animation:o,$el:e,property:s,_next:null,_prev:null});const a=()=>{as(e,s,t)};o.onremove=a;o.onfinish=a;return o};
/**
 * @param  {String} propName
 * @param  {WAAPIKeyframeValue} value
 * @param  {DOMTarget} $el
 * @param  {Number} i
 * @param  {Number} targetsLength
 * @return {String}
 */const hs=(t,e,s,i,n)=>{let o=Kt(/** @type {any} */e,s,i,n);return X(o)?ss.includes(t)||F(t,"translate")?`${o}px`:F(t,"rotate")||F(t,"skew")?`${o}deg`:`${o}`:o};
/**
 * @param  {DOMTarget} $el
 * @param  {String} propName
 * @param  {WAAPIKeyframeValue} from
 * @param  {WAAPIKeyframeValue} to
 * @param  {Number} i
 * @param  {Number} targetsLength
 * @return {WAAPITweenValue}
 */const ls=(t,e,s,i,n,o)=>{
/** @type {WAAPITweenValue} */
let r="0";const a=z(i)?getComputedStyle(t)[e]:hs(e,i,t,n,o);if(z(s))r=P(i)?i.map((/** @type {any} */s=>hs(e,s,t,n,o))):a;else{const i=hs(e,s,t,n,o);r=[i,a]}return r};class WAAPIAnimation{
/**
 * @param {DOMTargetsParam} targets
 * @param {WAAPIAnimationParams} params
 */
constructor(t,e){R.scope&&R.scope.revertibles.push(this);os();const s=Dt(t);const i=s.length;i||console.warn("No target found. Make sure the element you're trying to animate is accessible before creating your animation.");const n=Zt(e.ease,ts(R.defaults.ease));const o=/** @type {Spring} */n.ease&&n;const r=Zt(e.autoplay,R.defaults.autoplay);const a=!(!r||/** @type {ScrollObserver} */!r.link)&&r;const c=e.alternate&&/** @type {Boolean} */e.alternate===true;const h=e.reversed&&/** @type {Boolean} */e.reversed===true;const u=Zt(e.loop,R.defaults.loop);const d=/** @type {Number} */u===true||u===Infinity?Infinity:X(u)?u+1:1;
/** @type {PlaybackDirection} */const p=c?h?"alternate-reverse":"alternate":h?"reverse":"normal";
/** @type {FillMode} */const f="forwards";
/** @type {String} */const g=ts(n);const S=R.timeScale===1?1:m;
/** @type {DOMTargetsArray}] */this.targets=s;
/** @type {Array<globalThis.Animation>}] */this.animations=[];
/** @type {globalThis.Animation}] */this.controlAnimation=null;
/** @type {Callback<this>} */this.onComplete=e.onComplete||T;
/** @type {Number} */this.duration=0;
/** @type {Boolean} */this.muteCallbacks=false;
/** @type {Boolean} */this.completed=false;
/** @type {Boolean} */this.paused=!r||a!==false;
/** @type {Boolean} */this.reversed=h;
/** @type {Boolean|ScrollObserver} */this.autoplay=r;
/** @type {Number} */this._speed=Zt(e.playbackRate,R.defaults.playbackRate);
/** @type {Function} */this._resolve=T;
/** @type {Number} */this._completed=0;
/** @type {Array<Object>}] */this._inlineStyles=s.map((t=>t.getAttribute("style")));s.forEach(((t,s)=>{const r=t[l];const a=is.some((t=>e.hasOwnProperty(t)));
/** @type {Number} */const c=(o?/** @type {Spring} */o.duration:Kt(Zt(e.duration,R.defaults.duration),t,s,i))*S;
/** @type {Number} */const h=Kt(Zt(e.delay,R.defaults.delay),t,s,i)*S;
/** @type {CompositeOperation} */const u=/** @type {CompositeOperation} */Zt(e.composition,"replace");for(let o in e){if(!j(o))continue;
/** @type {PropertyIndexedKeyframes} */const l={};
/** @type {KeyframeAnimationOptions} */const m={iterations:d,direction:p,fill:f,easing:g,duration:c,delay:h,composite:u};const _=e[o];const b=!!a&&(v.includes(o)?o:y.get(o));let T;if(M(_)){const e=/** @type {WAAPITweenOptions} */_;const a=Zt(e.ease,n);const d=/** @type {Spring} */a.ease&&a;const p=/** @type {WAAPITweenOptions} */e.to;const f=/** @type {WAAPITweenOptions} */e.from;
/** @type {Number} */m.duration=(d?/** @type {Spring} */d.duration:Kt(Zt(e.duration,c),t,s,i))*S;
/** @type {Number} */m.delay=Kt(Zt(e.delay,h),t,s,i)*S;
/** @type {CompositeOperation} */m.composite=/** @type {CompositeOperation} */Zt(e.composition,u);
/** @type {String} */m.easing=ts(a);T=ls(t,o,f,p,s,i);if(b){l[`--${b}`]=T;r[b]=T}else l[o]=ls(t,o,f,p,s,i);cs(this,t,o,l,m);if(!z(f))if(b){const e=`--${b}`;t.style.setProperty(e,l[e][0])}else t.style[o]=l[o][0]}else{T=P(_)?_.map((/** @type {any} */e=>hs(o,e,t,s,i))):hs(o,/** @type {any} */_,t,s,i);if(b){l[`--${b}`]=T;r[b]=T}else l[o]=T;cs(this,t,o,l,m)}}if(a){let e=_;for(let t in r)e+=`${b[t]}var(--${t})) `;t.style.transform=e}}));a&&
/** @type {ScrollObserver} */this.autoplay.link(this)}
/**
   * @callback forEachCallback
   * @param {globalThis.Animation} animation
   */
/**
   * @param  {forEachCallback|String} callback
   * @return {this}
   */forEach(t){const e=U(t)?e=>e[t]():t;this.animations.forEach(e);return this}get speed(){return this._speed}
/** @param {Number} speed */set speed(t){this._speed=+t;this.forEach((e=>e.playbackRate=t))}get currentTime(){const t=this.controlAnimation;const e=R.timeScale;return this.completed?this.duration:t?+t.currentTime*(e===1?1:e):0}
/** @param {Number} time */set currentTime(t){const e=t*(R.timeScale===1?1:m);this.forEach((t=>{e>=this.duration&&t.play();t.currentTime=e}))}get progress(){return this.currentTime/this.duration}
/** @param {Number} progress */set progress(t){this.forEach((e=>e.currentTime=t*this.duration||0))}resume(){if(!this.paused)return this;this.paused=false;return this.forEach("play")}pause(){if(this.paused)return this;this.paused=true;return this.forEach("pause")}alternate(){this.reversed=!this.reversed;this.forEach("reverse");this.paused&&this.forEach("pause");return this}play(){this.reversed&&this.alternate();return this.resume()}reverse(){this.reversed||this.alternate();return this.resume()}
/**
  * @param {Number} time
  * @param {Boolean} muteCallbacks
  */seek(t,e=false){e&&(this.muteCallbacks=true);t<this.duration&&(this.completed=false);this.currentTime=t;this.muteCallbacks=false;this.paused&&this.pause();return this}restart(){this.completed=false;return this.seek(0,true).resume()}commitStyles(){return this.forEach("commitStyles")}complete(){return this.seek(this.duration)}cancel(){this.forEach("cancel");return this.pause()}revert(){this.cancel();this.targets.forEach(((t,e)=>t.setAttribute("style",this._inlineStyles[e])));return this}
/**
   * @param  {WAAPICallback} [callback]
   * @return {Promise}
   */then(t=T){const e=this.then;const s=()=>{this.then=null;t(this);this.then=e;this._resolve=T};return new Promise((t=>{this._resolve=()=>t(s());this.completed&&this._resolve();return this}))}}const us={
/**
 * @param {DOMTargetsParam} targets
 * @param {WAAPIAnimationParams} params
 * @return {WAAPIAnimation}
 */
animate:(t,e)=>new WAAPIAnimation(t,e),convertEase:Ge};
/**
 * @param  {Callback<Timer>} [callback]
 * @return {Timer}
 */const ds=(t=T)=>new Timer({duration:1*R.timeScale,onComplete:t},null,0).resume();
/**
 * @overload
 * @param  {DOMTargetSelector} targetSelector
 * @param  {String}            propName
 * @return {String}
 *
 * @overload
 * @param  {JSTargetsParam} targetSelector
 * @param  {String}         propName
 * @return {Number|String}
 *
 * @overload
 * @param  {DOMTargetsParam} targetSelector
 * @param  {String}          propName
 * @param  {String}          unit
 * @return {String}
 *
 * @overload
 * @param  {TargetsParam} targetSelector
 * @param  {String}       propName
 * @param  {Boolean}      unit
 * @return {Number}
 *
 * @param  {TargetsParam}   targetSelector
 * @param  {String}         propName
 * @param  {String|Boolean} [unit]
 */function ps(t,e,s){const i=Dt(t);if(!i.length)return;const[o]=i;const r=te(o,e);const a=De(e,o,r);let c=se(o,a);if(z(s))return c;oe(c,ae);if(ae.t===n.NUMBER||ae.t===n.UNIT){if(s===false)return ae.n;{const t=Pe(/** @type {DOMTarget} */o,ae,/** @type {String} */s,false);return`${pt(t.n,R.precision)}${t.u}`}}}
/**
 * @param  {TargetsParam}    targets
 * @param  {AnimationParams} parameters
 * @return {JSAnimation}
 */const fs=(t,e)=>{if(!z(e)){e.duration=p;e.composition=Zt(e.composition,r.none);return new JSAnimation(t,e,null,0,true).resume()}};
/**
 * @param  {TargetsArray} targetsArray
 * @param  {JSAnimation}    animation
 * @param  {String}       [propertyName]
 * @return {Boolean}
 */const ms=(t,e,s)=>{let n=false;bt(e,(/**@type {Tween} */o=>{const r=o.target;if(t.includes(r)){const t=o.property;const a=o._tweenType;const c=De(s,r,a);if(!c||c&&c===t){o.parent._tail===o&&o._tweenType===i.TRANSFORM&&o._prev&&o._prev._tweenType===i.TRANSFORM&&(o._prev._renderTransforms=1);Tt(e,o);pe(o);n=true}}}),true);return n};
/**
 * @param  {TargetsParam} targets
 * @param  {Renderable|WAAPIAnimation} [renderable]
 * @param  {String}                    [propertyName]
 * @return {TargetsArray}
 */const gs=(t,e,s)=>{const i=Lt(t);const n=/** @type {Renderable|typeof engine} **/e||At;const o=e&&/** @type {WAAPIAnimation} */e.controlAnimation&&/** @type {WAAPIAnimation} */e;for(let t=0,e=i.length;t<e;t++){const e=/** @type {DOMTarget}  */i[t];as(e,s,o)}let r;if(n._hasChildren){let e=0;bt(n,(/** @type {Renderable} */o=>{if(!o._hasChildren){r=ms(i,/** @type {JSAnimation} */o,s);if(r&&!o._head){o.cancel();Tt(n,o)}else{const t=o._offset+o._delay;const s=t+o.duration;s>e&&(e=s)}}o._head?gs(t,o,s):o._hasChildren=false}),true);z(/** @type {Renderable} */n.iterationDuration)||(
/** @type {Renderable} */n.iterationDuration=e)}else r=ms(i,
/** @type {JSAnimation} */n,s);if(r&&!n._head){n._hasChildren=false;/** @type {Renderable} */n.cancel&&/** @type {Renderable} */n.cancel()}return i};
/**
 * @param  {Number} min
 * @param  {Number} max
 * @param  {Number} [decimalLength]
 * @return {Number}
 */const _s=(t,e,s)=>{const i=10**(s||0);return ot((Math.random()*(e-t+1/i)+t)*i)/i};
/**
 * @param  {String|Array} items
 * @return {any}
 */const ys=t=>t[_s(0,t.length-1)]
/**
 * Adapted from https://bost.ocks.org/mike/shuffle/
 * @param  {Array} items
 * @return {Array}
 */;const vs=t=>{let e,s,i=t.length;while(i){s=_s(0,--i);e=t[i];t[i]=t[s];t[s]=e}return t};
/**
 * @param  {Number|String} v
 * @param  {Number} decimalLength
 * @return {String}
 */const bs=(t,e)=>(+t).toFixed(e)
/**
 * @param  {Number} v
 * @param  {Number} totalLength
 * @param  {String} padString
 * @return {String}
 */;const Ts=(t,e,s)=>`${t}`.padStart(e,s)
/**
 * @param  {Number} v
 * @param  {Number} totalLength
 * @param  {String} padString
 * @return {String}
 */;const Ss=(t,e,s)=>`${t}`.padEnd(e,s)
/**
 * @param  {Number} v
 * @param  {Number} min
 * @param  {Number} max
 * @return {Number}
 */;const ws=(t,e,s)=>((t-e)%(s-e)+(s-e))%(s-e)+e
/**
 * @param  {Number} value
 * @param  {Number} inLow
 * @param  {Number} inHigh
 * @param  {Number} outLow
 * @param  {Number} outHigh
 * @return {Number}
 */;const xs=(t,e,s,i,n)=>i+(t-e)/(s-e)*(n-i)
/**
 * @param  {Number} degrees
 * @return {Number}
 */;const ks=t=>t*ht/180
/**
 * @param  {Number} radians
 * @return {Number}
 */;const Cs=t=>t*180/ht
/**
 * https://www.rorydriscoll.com/2016/03/07/frame-rate-independent-damping-using-lerp/
 * @param  {Number} start
 * @param  {Number} end
 * @param  {Number} amount
 * @param  {Renderable|Boolean} [renderable]
 * @return {Number}
 */;const Es=(t,e,s,i)=>{let n=m/R.defaults.frameRate;if(i!==false){const t=/** @type Renderable */
i||At._hasChildren&&At;t&&t.deltaTime&&(n=t.deltaTime)}const o=1-Math.exp(-s*n*.1);return s?s===1?e:(1-o)*t+o*e:t};
/**
 * @callback UtilityFunction
 * @param {...*} args
 * @return {Number|String}
 *
 * @param {UtilityFunction} fn
 * @param {Number} [last=0]
 * @return {function(...(Number|String)): function(Number|String): (Number|String)}
 */const $s=(t,e=0)=>(...s)=>e?e=>t(...s,e):e=>t(e,...s)
/**
 * @param {Function} fn
 * @return {function(...(Number|String))}
 */;const As=t=>(...e)=>{const s=t(...e);return new Proxy(T,{apply:(t,e,[i])=>s(i),get:(t,e)=>As((/**@param {...Number|String} nextArgs */(...t)=>{const i=Os[e](...t);return/**@type {Number|String} */t=>i(s(t))}))})};
/**
 * @param {UtilityFunction} fn
 * @param {Number} [right]
 * @return {function(...(Number|String)): UtilityFunction}
 */const Bs=(t,e=0)=>(...s)=>(s.length<t.length?As($s(t,e)):t)(...s)
/**
 * @callback ChainedUtilsResult
 * @param {Number} value
 * @return {Number}
 *
 * @typedef {Object} ChainableUtils
 * @property {ChainedClamp} clamp
 * @property {ChainedRound} round
 * @property {ChainedSnap} snap
 * @property {ChainedWrap} wrap
 * @property {ChainedInterpolate} interpolate
 * @property {ChainedMapRange} mapRange
 * @property {ChainedRoundPad} roundPad
 * @property {ChainedPadStart} padStart
 * @property {ChainedPadEnd} padEnd
 * @property {ChainedDegToRad} degToRad
 * @property {ChainedRadToDeg} radToDeg
 *
 * @typedef {ChainableUtils & ChainedUtilsResult} ChainableUtil
 *
 * @callback ChainedClamp
 * @param {Number} min
 * @param {Number} max
 * @return {ChainableUtil}
 *
 * @callback ChainedRound
 * @param {Number} decimalLength
 * @return {ChainableUtil}
 *
 * @callback ChainedSnap
 * @param {Number} increment
 * @return {ChainableUtil}
 *
 * @callback ChainedWrap
 * @param {Number} min
 * @param {Number} max
 * @return {ChainableUtil}
 *
 * @callback ChainedInterpolate
 * @param {Number} start
 * @param {Number} end
 * @return {ChainableUtil}
 *
 * @callback ChainedMapRange
 * @param {Number} inLow
 * @param {Number} inHigh
 * @param {Number} outLow
 * @param {Number} outHigh
 * @return {ChainableUtil}
 *
 * @callback ChainedRoundPad
 * @param {Number} decimalLength
 * @return {ChainableUtil}
 *
 * @callback ChainedPadStart
 * @param {Number} totalLength
 * @param {String} padString
 * @return {ChainableUtil}
 *
 * @callback ChainedPadEnd
 * @param {Number} totalLength
 * @param {String} padString
 * @return {ChainableUtil}
 *
 * @callback ChainedDegToRad
 * @return {ChainableUtil}
 *
 * @callback ChainedRadToDeg
 * @return {ChainableUtil}
 */;const Os={$:Dt,get:ps,set:fs,remove:gs,cleanInlineStyles:Me,random:_s,randomPick:ys,shuffle:vs,lerp:Es,sync:ds,clamp:/** @type {typeof clamp & ChainedClamp} */Bs(ut),round:/** @type {typeof round & ChainedRound} */Bs(pt),snap:/** @type {typeof snap & ChainedSnap} */Bs(ft),wrap:/** @type {typeof wrap & ChainedWrap} */Bs(ws),interpolate:/** @type {typeof interpolate & ChainedInterpolate} */Bs(mt,1),mapRange:/** @type {typeof mapRange & ChainedMapRange} */Bs(xs),roundPad:/** @type {typeof roundPad & ChainedRoundPad} */Bs(bs),padStart:/** @type {typeof padStart & ChainedPadStart} */Bs(Ts),padEnd:/** @type {typeof padEnd & ChainedPadEnd} */Bs(Ss),degToRad:/** @type {typeof degToRad & ChainedDegToRad} */Bs(ks),radToDeg:/** @type {typeof radToDeg & ChainedRadToDeg} */Bs(Cs)};
/**
 * @typedef {Number|String|Function} TimePosition
 */
/**
 * Timeline's children offsets positions parser
 * @param  {Timeline} timeline
 * @param  {String} timePosition
 * @return {Number}
 */const Ns=(t,e)=>{if(F(e,"<")){const s=e[1]==="<";const i=/** @type {Tickable} */t._tail;const n=i?i._offset+i._delay:0;return s?n:n+i.duration}};
/**
 * @param  {Timeline} timeline
 * @param  {TimePosition} [timePosition]
 * @return {Number}
 */const Rs=(t,e)=>{let s=t.iterationDuration;s===p&&(s=0);if(z(e))return s;if(X(+e))return+e;const i=/** @type {String} */e;const n=t?t.labels:null;const o=!W(n);const r=Ns(t,i);const a=!z(r);const c=O.exec(i);if(c){const t=c[0];const e=i.split(t);const h=o&&e[0]?n[e[0]]:s;const l=a?r:o?h:s;const u=+e[1];return ie(l,u,t[0])}return a?r:o?z(n[i])?s:n[i]:s};
/**
 * @param {Timeline} tl
 * @return {Number}
 */function Ls(t){return gt((t.iterationDuration+t._loopDelay)*t.iterationCount-t._loopDelay)||p}
/**
 * @overload
 * @param  {TimerParams} childParams
 * @param  {Timeline} tl
 * @param  {Number} timePosition
 * @return {Timeline}
 *
 * @overload
 * @param  {AnimationParams} childParams
 * @param  {Timeline} tl
 * @param  {Number} timePosition
 * @param  {TargetsParam} targets
 * @param  {Number} [index]
 * @param  {Number} [length]
 * @return {Timeline}
 *
 * @param  {TimerParams|AnimationParams} childParams
 * @param  {Timeline} tl
 * @param  {Number} timePosition
 * @param  {TargetsParam} [targets]
 * @param  {Number} [index]
 * @param  {Number} [length]
 */function Ds(t,e,s,i,n,r){const a=X(t.duration)&&/** @type {Number} */t.duration<=p;const c=a?s-p:s;xt(e,c,1,1,o.AUTO);const h=i?new JSAnimation(i,/** @type {AnimationParams} */t,e,c,false,n,r):new Timer(/** @type {TimerParams} */t,e,c);h.init(1);St(e,h);bt(e,(/** @type {Renderable} */t=>{const s=t._offset+t._delay;const i=s+t.duration;i>e.iterationDuration&&(e.iterationDuration=i)}));e.duration=Ls(e);return e}class Timeline extends Timer{
/**
   * @param {TimelineParams} [parameters]
   */
constructor(t={}){super(/** @type {TimerParams&TimelineParams} */t,null,0);
/** @type {Number} */this.duration=0;
/** @type {Record<String, Number>} */this.labels={};const e=t.defaults;const s=R.defaults;
/** @type {DefaultsParams} */this.defaults=e?vt(e,s):s;
/** @type {Callback<this>} */this.onRender=t.onRender||s.onRender;const i=Zt(t.playbackEase,s.playbackEase);this._ease=i?Re(i):null;
/** @type {Number} */this.iterationDuration=0}
/**
   * @overload
   * @param {TargetsParam} a1
   * @param {AnimationParams} a2
   * @param {TimePosition} [a3]
   * @return {this}
   *
   * @overload
   * @param {TimerParams} a1
   * @param {TimePosition} [a2]
   * @return {this}
   *
   * @param {TargetsParam|TimerParams} a1
   * @param {AnimationParams|TimePosition} a2
   * @param {TimePosition} [a3]
   */add(t,e,s){const i=M(e);const n=M(t);if(i||n){this._hasChildren=true;if(i){const i=/** @type {AnimationParams} */e;if(Y(s)){const e=/** @type {Function} */s;const n=Lt(/** @type {TargetsParam} */t);const o=this.duration;const r=this.iterationDuration;const a=i.id;let c=0;const h=n.length;n.forEach((/** @type {Target} */t=>{const s={...i};this.duration=o;this.iterationDuration=r;z(a)||(s.id=a+"-"+c);Ds(s,this,e(t,c,h,this),t,c,h);c++}))}else Ds(i,this,Rs(this,s),
/** @type {TargetsParam} */t)}else Ds(
/** @type TimerParams */t,this,Rs(this,/** @type TimePosition */e));return this.init(1)}}
/**
   * @overload
   * @param {Tickable} [synced]
   * @param {TimePosition} [position]
   * @return {this}
   *
   * @overload
   * @param {globalThis.Animation} [synced]
   * @param {TimePosition} [position]
   * @return {this}
   *
   * @overload
   * @param {WAAPIAnimation} [synced]
   * @param {TimePosition} [position]
   * @return {this}
   *
   * @param {Tickable|WAAPIAnimation|globalThis.Animation} [synced]
   * @param {TimePosition} [position]
   */sync(t,e){if(z(t)||t&&z(t.pause))return this;t.pause();const s=+(/** @type {globalThis.Animation} */t.effect?/** @type {globalThis.Animation} */t.effect.getTiming().duration:/** @type {Tickable} */t.duration);return this.add(t,{currentTime:[0,s],duration:s,ease:"linear"},e)}
/**
   * @param  {TargetsParam} targets
   * @param  {AnimationParams} parameters
   * @param  {TimePosition} [position]
   * @return {this}
   */set(t,e,s){if(z(e))return this;e.duration=p;e.composition=r.replace;return this.add(t,e,s)}
/**
   * @param {Callback<Timer>} callback
   * @param {TimePosition} [position]
   * @return {this}
   */call(t,e){return z(t)||t&&!Y(t)?this:this.add({duration:0,onComplete:()=>t(this)},e)}
/**
   * @param {String} labelName
   * @param {TimePosition} [position]
   * @return {this}
   *
   */label(t,e){if(z(t)||t&&!U(t))return this;this.labels[t]=Rs(this,/** @type TimePosition */e);return this}
/**
   * @param  {TargetsParam} targets
   * @param  {String} [propertyName]
   * @return {this}
   */remove(t,e){gs(t,this,e);return this}
/**
   * @param  {Number} newDuration
   * @return {this}
   */stretch(t){const e=this.duration;if(e===_t(t))return this;const s=t/e;const i=this.labels;bt(this,(/** @type {JSAnimation} */t=>t.stretch(t.duration*s)));for(let t in i)i[t]*=s;return super.stretch(t)}refresh(){bt(this,(/** @type {JSAnimation} */t=>{t.refresh&&t.refresh()}));return this}revert(){super.revert();bt(this,(/** @type {JSAnimation} */t=>t.revert),true);return Me(this)}
/**
   * @param  {Callback<this>} [callback]
   * @return {Promise}
   */then(t){return super.then(t)}}
/**
 * @param {TimelineParams} [parameters]
 * @return {Timeline}
 */const Fs=t=>new Timeline(t).init();class Animatable{
/**
   * @param {TargetsParam} targets
   * @param {AnimatableParams} parameters
   */
constructor(t,e){R.scope&&R.scope.revertibles.push(this)
/** @type {AnimationParams} */;const s={};const i={};this.targets=[];this.animations={};if(!z(t)&&!z(e)){for(let t in e){const n=e[t];j(t)?i[t]=n:s[t]=n}for(let e in i){const n=i[e];const o=M(n);
/** @type {TweenParamsOptions} */let a={};let c="+=0";if(o){const t=n.unit;U(t)&&(c+=t)}else a.duration=n;a[e]=o?vt({to:c},n):c;const h=vt(s,a);h.composition=r.replace;h.autoplay=false;const l=this.animations[e]=new JSAnimation(t,h,null,0,false).init();this.targets.length||this.targets.push(...l.targets)
/** @type {AnimatableProperty} */;this[e]=(t,e,s)=>{const i=/** @type {Tween} */l._head;if(z(t)&&i){const t=i._numbers;return t&&t.length?t:i._modifier(i._number)}bt(l,(/** @type {Tween} */e=>{if(P(t)){for(let s=0,i=/** @type {Array} */t.length;s<i;s++)if(!z(e._numbers[s])){e._fromNumbers[s]=/** @type {Number} */e._modifier(e._numbers[s]);e._toNumbers[s]=t[s]}}else{e._fromNumber=/** @type {Number} */e._modifier(e._number);e._toNumber=/** @type {Number} */t}z(s)||(e._ease=Re(s));e._currentTime=0}));z(e)||l.stretch(e);l.reset(1).resume();return this}}}}revert(){for(let t in this.animations){this[t]=T;this.animations[t].revert()}this.animations={};this.targets.length=0;return this}}
/**
 * @param {TargetsParam} targets
 * @param {AnimatableParams} parameters
 * @return {AnimatableObject}
 */const Is=(t,e)=>/** @type {AnimatableObject} */new Animatable(t,e)
/**
 * @typedef {Object} SpringParams
 * @property {Number} [mass=1] - Mass, default 1
 * @property {Number} [stiffness=100] - Stiffness, default 100
 * @property {Number} [damping=10] - Damping, default 10
 * @property {Number} [velocity=0] - Initial velocity, default 0
 */;class Spring{
/**
   * @param {SpringParams} [parameters]
   */
constructor(t={}){this.timeStep=.02;this.restThreshold=5e-4;this.restDuration=200;this.maxDuration=6e4;this.maxRestSteps=this.restDuration/this.timeStep/m;this.maxIterations=this.maxDuration/this.timeStep/m;this.m=ut(Zt(t.mass,1),0,m);this.s=ut(Zt(t.stiffness,100),1,m);this.d=ut(Zt(t.damping,10),.1,m);this.v=ut(Zt(t.velocity,0),-1e3,m);this.w0=0;this.zeta=0;this.wd=0;this.b=0;this.solverDuration=0;this.duration=0;this.compute();
/** @type {EasingFunction} */this.ease=t=>t===0||t===1?t:this.solve(t*this.solverDuration)}
/** @type {EasingFunction} */solve(t){const{zeta:e,w0:s,wd:i,b:n}=this;let o=t;o=e<1?it(-o*e*s)*(1*et(i*o)+n*tt(i*o)):(1+n*o)*it(-o*s);return 1-o}compute(){const{maxRestSteps:t,maxIterations:e,restThreshold:s,timeStep:i,m:n,d:o,s:r,v:a}=this;const c=this.w0=ut(K(r/n),p,m);const h=this.zeta=o/(2*K(r*n));const l=this.wd=h<1?c*K(1-h*h):0;this.b=h<1?(h*c-a)/l:-a+c;let u=0;let d=0;let f=0;while(d<t&&f<e){st(1-this.solve(u))<s?d++:d=0;this.solverDuration=u;u+=i;f++}this.duration=pt(this.solverDuration*m,0)*R.timeScale}get mass(){return this.m}set mass(t){this.m=ut(Zt(t,1),0,m);this.compute()}get stiffness(){return this.s}set stiffness(t){this.s=ut(Zt(t,100),1,m);this.compute()}get damping(){return this.d}set damping(t){this.d=ut(Zt(t,10),.1,m);this.compute()}get velocity(){return this.v}set velocity(t){this.v=ut(Zt(t,0),-1e3,m);this.compute()}}
/**
 * @param {SpringParams} [parameters]
 * @returns {Spring}
 */const Ps=t=>new Spring(t)
/**
 * @param {Event} e
 */;const Ms=t=>{t.cancelable&&t.preventDefault()};class DOMProxy{
/** @param {Object} el */
constructor(t){this.el=t;this.zIndex=0;this.parentElement=null;this.classList={add:T,remove:T}}get x(){return this.el.x||0}set x(t){this.el.x=t}get y(){return this.el.y||0}set y(t){this.el.y=t}get width(){return this.el.width||0}set width(t){this.el.width=t}get height(){return this.el.height||0}set height(t){this.el.height=t}getBoundingClientRect(){return{top:this.y,right:this.x,bottom:this.y+this.height,left:this.x+this.width}}}class Transforms{
/**
   * @param {DOMTarget|DOMProxy} $el
   */
constructor(t){this.$el=t;this.inlineTransforms=[];this.point=new DOMPoint;this.inversedMatrix=this.getMatrix().inverse()}
/**
   * @param {Number} x
   * @param {Number} y
   * @return {DOMPoint}
   */normalizePoint(t,e){this.point.x=t;this.point.y=e;return this.point.matrixTransform(this.inversedMatrix)}
/**
   * @callback TraverseParentsCallback
   * @param {DOMTarget} $el
   * @param {Number} i
   */
/**
   * @param {TraverseParentsCallback} cb
   */traverseUp(t){let e=/** @type {DOMTarget|Document} */this.$el.parentElement,i=0;while(e&&e!==s){t(/** @type {DOMTarget} */e,i);e=/** @type {DOMTarget} */e.parentElement;i++}}getMatrix(){const t=new DOMMatrix;this.traverseUp((e=>{const s=getComputedStyle(e).transform;if(s){const e=new DOMMatrix(s);t.preMultiplySelf(e)}}));return t}remove(){this.traverseUp(((t,e)=>{this.inlineTransforms[e]=t.style.transform;t.style.transform="none"}))}revert(){this.traverseUp(((t,e)=>{const s=this.inlineTransforms[e];s===""?t.style.removeProperty("transform"):t.style.transform=s}))}}
/**
 * @template {Array<Number>|DOMTargetSelector|String|Number|Boolean|Function|DraggableCursorParams} T
 * @param {T | ((draggable: Draggable) => T)} value
 * @param {Draggable} draggable
 * @return {T}
 */const Xs=(t,e)=>t&&Y(t)?/** @type {Function} */t(e):t;let Us=0;class Draggable{
/**
   * @param {TargetsParam} target
   * @param {DraggableParams} [parameters]
   */
constructor(t,i={}){if(!t)return;R.scope&&R.scope.revertibles.push(this);const n=i.x;const o=i.y;const r=i.trigger;const a=i.modifier;const c=i.releaseEase;const h=c&&Re(c);const l=!z(c)&&!z(/** @type {Spring} */c.ease);const u=/** @type {String} */M(n)&&!z(/** @type {Object} */n.mapTo)?/** @type {Object} */n.mapTo:"translateX";const d=/** @type {String} */M(o)&&!z(/** @type {Object} */o.mapTo)?/** @type {Object} */o.mapTo:"translateY";const p=Xs(i.container,this);this.containerArray=P(p)?p:null;this.$container=/** @type {HTMLElement} */p&&!this.containerArray?Lt(/** @type {DOMTarget} */p)[0]:s.body;this.useWin=this.$container===s.body;
/** @type {Window | HTMLElement} */this.$scrollContainer=this.useWin?e:this.$container;this.$target=/** @type {HTMLElement} */M(t)?new DOMProxy(t):Lt(t)[0];this.$trigger=/** @type {HTMLElement} */Lt(r||t)[0];this.fixed=ps(this.$target,"position")==="fixed";this.isFinePointer=true;
/** @type {[Number, Number, Number, Number]} */this.containerPadding=[0,0,0,0];
/** @type {Number} */this.containerFriction=0;
/** @type {Number} */this.releaseContainerFriction=0;
/** @type {Number|Array<Number>} */this.snapX=0;
/** @type {Number|Array<Number>} */this.snapY=0;
/** @type {Number} */this.scrollSpeed=0;
/** @type {Number} */this.scrollThreshold=0;
/** @type {Number} */this.dragSpeed=0;
/** @type {Number} */this.maxVelocity=0;
/** @type {Number} */this.minVelocity=0;
/** @type {Number} */this.velocityMultiplier=0;
/** @type {Boolean|DraggableCursorParams} */this.cursor=false;
/** @type {Spring} */this.releaseXSpring=l?/** @type {Spring} */c:Ps({mass:Zt(i.releaseMass,1),stiffness:Zt(i.releaseStiffness,80),damping:Zt(i.releaseDamping,20)});
/** @type {Spring} */this.releaseYSpring=l?/** @type {Spring} */c:Ps({mass:Zt(i.releaseMass,1),stiffness:Zt(i.releaseStiffness,80),damping:Zt(i.releaseDamping,20)});
/** @type {EasingFunction} */this.releaseEase=h||Oe.outQuint;
/** @type {Boolean} */this.hasReleaseSpring=l;
/** @type {Callback<this>} */this.onGrab=i.onGrab||T;
/** @type {Callback<this>} */this.onDrag=i.onDrag||T;
/** @type {Callback<this>} */this.onRelease=i.onRelease||T;
/** @type {Callback<this>} */this.onUpdate=i.onUpdate||T;
/** @type {Callback<this>} */this.onSettle=i.onSettle||T;
/** @type {Callback<this>} */this.onSnap=i.onSnap||T;
/** @type {Callback<this>} */this.onResize=i.onResize||T;
/** @type {Callback<this>} */this.onAfterResize=i.onAfterResize||T;
/** @type {[Number, Number]} */this.disabled=[0,0];
/** @type {AnimatableParams} */const m={};a&&(m.modifier=a);if(z(n)||n===true)m[u]=0;else if(M(n)){const t=/** @type {DraggableAxisParam} */n;const e={};t.modifier&&(e.modifier=t.modifier);t.composition&&(e.composition=t.composition);m[u]=e}else if(n===false){m[u]=0;this.disabled[0]=1}if(z(o)||o===true)m[d]=0;else if(M(o)){const t=/** @type {DraggableAxisParam} */o;const e={};t.modifier&&(e.modifier=t.modifier);t.composition&&(e.composition=t.composition);m[d]=e}else if(o===false){m[d]=0;this.disabled[1]=1}
/** @type {AnimatableObject} */this.animate=/** @type {AnimatableObject} */new Animatable(this.$target,m);this.xProp=u;this.yProp=d;this.destX=0;this.destY=0;this.deltaX=0;this.deltaY=0;this.scroll={x:0,y:0};
/** @type {[Number, Number, Number, Number]} */this.coords=[this.x,this.y,0,0];
/** @type {[Number, Number]} */this.snapped=[0,0];
/** @type {[Number, Number, Number, Number, Number, Number, Number, Number]} */this.pointer=[0,0,0,0,0,0,0,0];
/** @type {[Number, Number]} */this.scrollView=[0,0];
/** @type {[Number, Number, Number, Number]} */this.dragArea=[0,0,0,0];
/** @type {[Number, Number, Number, Number]} */this.containerBounds=[-1e12,f,f,-1e12];
/** @type {[Number, Number, Number, Number]} */this.scrollBounds=[0,0,0,0];
/** @type {[Number, Number, Number, Number]} */this.targetBounds=[0,0,0,0];
/** @type {[Number, Number]} */this.window=[0,0];
/** @type {[Number, Number, Number]} */this.velocityStack=[0,0,0];
/** @type {Number} */this.velocityStackIndex=0;
/** @type {Number} */this.velocityTime=I();
/** @type {Number} */this.velocity=0;
/** @type {Number} */this.angle=0;
/** @type {JSAnimation} */this.cursorStyles=null;
/** @type {JSAnimation} */this.triggerStyles=null;
/** @type {JSAnimation} */this.bodyStyles=null;
/** @type {JSAnimation} */this.targetStyles=null;
/** @type {JSAnimation} */this.touchActionStyles=null;this.transforms=new Transforms(this.$target);this.overshootCoords={x:0,y:0};this.overshootXTicker=new Timer({autoplay:false},null,0).init();this.overshootYTicker=new Timer({autoplay:false},null,0).init();this.updateTicker=new Timer({autoplay:false},null,0).init();this.overshootXTicker.onUpdate=()=>{if(!this.disabled[0]){this.updated=true;this.manual=true;this.animate[this.xProp](this.overshootCoords.x,0)}};this.overshootXTicker.onComplete=()=>{if(!this.disabled[0]){this.manual=false;this.animate[this.xProp](this.overshootCoords.x,0)}};this.overshootYTicker.onUpdate=()=>{if(!this.disabled[1]){this.updated=true;this.manual=true;this.animate[this.yProp](this.overshootCoords.y,0)}};this.overshootYTicker.onComplete=()=>{if(!this.disabled[1]){this.manual=false;this.animate[this.yProp](this.overshootCoords.y,0)}};this.updateTicker.onUpdate=()=>this.update();this.contained=!z(p);this.manual=false;this.grabbed=false;this.dragged=false;this.updated=false;this.released=false;this.canScroll=false;this.enabled=false;this.initialized=false;this.activeProp=this.disabled[1]?u:d;this.animate.animations[this.activeProp].onRender=()=>{const t=this.updated;const e=this.grabbed&&t;const s=!e&&this.released;const i=this.x;const n=this.y;const o=i-this.coords[2];const r=n-this.coords[3];this.deltaX=o;this.deltaY=r;this.coords[2]=i;this.coords[3]=n;t&&this.onUpdate(this);if(s){this.computeVelocity(o,r);this.angle=ct(r,o)}else this.updated=false};this.animate.animations[this.activeProp].onComplete=()=>{!this.grabbed&&this.released&&(this.released=false);if(!this.manual){this.deltaX=0;this.deltaY=0;this.velocity=0;this.velocityStack[0]=0;this.velocityStack[1]=0;this.velocityStack[2]=0;this.velocityStackIndex=0;this.onSettle(this)}};this.resizeTicker=new Timer({autoplay:false,duration:150*R.timeScale,onComplete:()=>{this.onResize(this);this.refresh();this.onAfterResize(this)}}).init();this.parameters=i;this.resizeObserver=new ResizeObserver((()=>{this.initialized?this.resizeTicker.restart():this.initialized=true}));this.enable();this.refresh();this.resizeObserver.observe(this.$container);M(t)||this.resizeObserver.observe(this.$target)}
/**
   * @param  {Number} dx
   * @param  {Number} dy
   * @return {Number}
   */computeVelocity(t,e){const s=this.velocityTime;const i=I();const n=i-s;if(n<17)return this.velocity;this.velocityTime=i;const o=this.velocityStack;const r=this.velocityMultiplier;const a=this.minVelocity;const c=this.maxVelocity;const h=this.velocityStackIndex;o[h]=pt(ut(K(t*t+e*e)/n*r,a,c),5);const l=at(o[0],o[1],o[2]);this.velocity=l;this.velocityStackIndex=(h+1)%3;return l}
/**
   * @param {Number}  x
   * @param {Boolean} [muteUpdateCallback]
   * @return {this}
   */setX(t,e=false){if(this.disabled[0])return;const s=pt(t,5);this.overshootXTicker.pause();this.manual=true;this.updated=!e;this.destX=s;this.snapped[0]=ft(s,this.snapX);this.animate[this.xProp](s,0);this.manual=false;return this}
/**
   * @param {Number}  y
   * @param {Boolean} [muteUpdateCallback]
   * @return {this}
   */setY(t,e=false){if(this.disabled[1])return;const s=pt(t,5);this.overshootYTicker.pause();this.manual=true;this.updated=!e;this.destY=s;this.snapped[1]=ft(s,this.snapY);this.animate[this.yProp](s,0);this.manual=false;return this}get x(){return pt(/** @type {Number} */this.animate[this.xProp](),R.precision)}set x(t){this.setX(t,false)}get y(){return pt(/** @type {Number} */this.animate[this.yProp](),R.precision)}set y(t){this.setY(t,false)}get progressX(){return xs(this.x,this.containerBounds[3],this.containerBounds[1],0,1)}set progressX(t){this.setX(xs(t,0,1,this.containerBounds[3],this.containerBounds[1]),false)}get progressY(){return xs(this.y,this.containerBounds[0],this.containerBounds[2],0,1)}set progressY(t){this.setY(xs(t,0,1,this.containerBounds[0],this.containerBounds[2]),false)}updateScrollCoords(){const t=pt(this.useWin?e.scrollX:this.$container.scrollLeft,0);const s=pt(this.useWin?e.scrollY:this.$container.scrollTop,0);const[i,n,o,r]=this.containerPadding;const a=this.scrollThreshold;this.scroll.x=t;this.scroll.y=s;this.scrollBounds[0]=s-this.targetBounds[0]+i-a;this.scrollBounds[1]=t-this.targetBounds[1]-n+a;this.scrollBounds[2]=s-this.targetBounds[2]-o+a;this.scrollBounds[3]=t-this.targetBounds[3]+r-a}updateBoundingValues(){const t=this.$container;const i=this.x;const n=this.y;const o=this.coords[2];const r=this.coords[3];this.coords[2]=0;this.coords[3]=0;this.setX(0,true);this.setY(0,true);this.transforms.remove();const a=this.window[0]=e.innerWidth;const c=this.window[1]=e.innerHeight;const h=this.useWin;const l=t.scrollWidth;const u=t.scrollHeight;const d=this.fixed;const p=t.getBoundingClientRect();const[f,m,g,_]=this.containerPadding;this.dragArea[0]=h?0:p.left;this.dragArea[1]=h?0:p.top;this.scrollView[0]=h?ut(l,a,l):l;this.scrollView[1]=h?ut(u,c,u):u;this.updateScrollCoords();const{width:y,height:v,left:b,top:T,right:S,bottom:w}=t.getBoundingClientRect();this.dragArea[2]=pt(h?ut(y,a,a):y,0);this.dragArea[3]=pt(h?ut(v,c,c):v,0);const x=ps(t,"overflow");const k=x==="visible";const C=x==="hidden";this.canScroll=!d&&(this.contained&&(t===s.body&&k||!C&&!k)&&(l>this.dragArea[2]+_-m||u>this.dragArea[3]+f-g)&&(!this.containerArray||this.containerArray&&!P(this.containerArray)));if(this.contained){const e=this.scroll.x;const s=this.scroll.y;const i=this.canScroll;const n=this.$target.getBoundingClientRect();const o=i?h?0:t.scrollLeft:0;const r=i?h?0:t.scrollTop:0;const l=i?this.scrollView[0]-o-y:0;const u=i?this.scrollView[1]-r-v:0;this.targetBounds[0]=pt(n.top+s-(h?0:T),0);this.targetBounds[1]=pt(n.right+e-(h?a:S),0);this.targetBounds[2]=pt(n.bottom+s-(h?c:w),0);this.targetBounds[3]=pt(n.left+e-(h?0:b),0);if(this.containerArray){this.containerBounds[0]=this.containerArray[0]+f;this.containerBounds[1]=this.containerArray[1]-m;this.containerBounds[2]=this.containerArray[2]-g;this.containerBounds[3]=this.containerArray[3]+_}else{this.containerBounds[0]=-pt(n.top-(d?ut(T,0,c):T)+r-f,0);this.containerBounds[1]=-pt(n.right-(d?ut(S,0,a):S)-l+m,0);this.containerBounds[2]=-pt(n.bottom-(d?ut(w,0,c):w)-u+g,0);this.containerBounds[3]=-pt(n.left-(d?ut(b,0,a):b)+o-_,0)}}this.transforms.revert();this.coords[2]=o;this.coords[3]=r;this.setX(i,true);this.setY(n,true)}
/**
   * Returns 0 if not OB, 1 if x is OB, 2 if y is OB, 3 if both x and y are OB
   *
   * @param  {Array} bounds
   * @param  {Number} x
   * @param  {Number} y
   * @return {Number}
   */isOutOfBounds(t,e,s){if(!this.contained)return 0;const[i,n,o,r]=t;const[a,c]=this.disabled;const h=!a&&e<r||!a&&e>n;const l=!c&&s<i||!c&&s>o;return h&&!l?1:!h&&l?2:h&&l?3:0}refresh(){const t=this.parameters;const i=t.x;const n=t.y;const o=Xs(t.container,this);const r=Xs(t.containerPadding,this)||0;const a=/** @type {[Number, Number, Number, Number]} */P(r)?r:[r,r,r,r];const c=this.x;const h=this.y;const l=Xs(t.cursor,this);const u={onHover:"grab",onGrab:"grabbing"};if(l){const{onHover:t,onGrab:e}=/** @type {DraggableCursorParams} */l;t&&(u.onHover=t);e&&(u.onGrab=e)}this.containerArray=P(o)?o:null;this.$container=/** @type {HTMLElement} */o&&!this.containerArray?Lt(/** @type {DOMTarget} */o)[0]:s.body;this.useWin=this.$container===s.body;
/** @type {Window | HTMLElement} */this.$scrollContainer=this.useWin?e:this.$container;this.isFinePointer=matchMedia("(pointer:fine)").matches;this.containerPadding=Zt(a,[0,0,0,0]);this.containerFriction=ut(Zt(Xs(t.containerFriction,this),.8),0,1);this.releaseContainerFriction=ut(Zt(Xs(t.releaseContainerFriction,this),this.containerFriction),0,1);this.snapX=Xs(M(i)&&!z(i.snap)?i.snap:t.snap,this);this.snapY=Xs(M(n)&&!z(n.snap)?n.snap:t.snap,this);this.scrollSpeed=Zt(Xs(t.scrollSpeed,this),1.5);this.scrollThreshold=Zt(Xs(t.scrollThreshold,this),20);this.dragSpeed=Zt(Xs(t.dragSpeed,this),1);this.minVelocity=Zt(Xs(t.minVelocity,this),0);this.maxVelocity=Zt(Xs(t.maxVelocity,this),50);this.velocityMultiplier=Zt(Xs(t.velocityMultiplier,this),1);this.cursor=l!==false&&u;this.updateBoundingValues();const[d,p,f,m]=this.containerBounds;this.setX(ut(c,m,p),true);this.setY(ut(h,d,f),true)}update(){this.updateScrollCoords();if(this.canScroll){const[t,e,s,i]=this.containerPadding;const[n,o]=this.scrollView;const r=this.dragArea[2];const a=this.dragArea[3];const c=this.scroll.x;const h=this.scroll.y;const l=this.$container.scrollWidth;const u=this.$container.scrollHeight;const d=this.useWin?ut(l,this.window[0],l):l;const p=this.useWin?ut(u,this.window[1],u):u;const f=n-d;const m=o-p;if(this.dragged&&f>0){this.coords[0]-=f;this.scrollView[0]=d}if(this.dragged&&m>0){this.coords[1]-=m;this.scrollView[1]=p}const g=this.scrollSpeed*10;const _=this.scrollThreshold;const[y,v]=this.coords;const[b,T,S,w]=this.scrollBounds;const x=pt(ut((v-b+t)/_,-1,0)*g,0);const k=pt(ut((y-T-e)/_,0,1)*g,0);const C=pt(ut((v-S-s)/_,0,1)*g,0);const E=pt(ut((y-w+i)/_,-1,0)*g,0);if(x||C||E||k){const[t,e]=this.disabled;let s=c;let i=h;if(!t){s=pt(ut(c+(E||k),0,n-r),0);this.coords[0]-=c-s}if(!e){i=pt(ut(h+(x||C),0,o-a),0);this.coords[1]-=h-i}this.useWin?this.$scrollContainer.scrollBy(-(c-s),-(h-i)):this.$scrollContainer.scrollTo(s,i)}}const[t,e,s,i]=this.containerBounds;const[n,o,r,a,c,h]=this.pointer;this.coords[0]+=(n-c)*this.dragSpeed;this.coords[1]+=(o-h)*this.dragSpeed;this.pointer[4]=n;this.pointer[5]=o;const[l,u]=this.coords;const[d,p]=this.snapped;const f=(1-this.containerFriction)*this.dragSpeed;this.setX(l>e?e+(l-e)*f:l<i?i+(l-i)*f:l,false);this.setY(u>s?s+(u-s)*f:u<t?t+(u-t)*f:u,false);this.computeVelocity(n-c,o-h);this.angle=ct(o-a,n-r);const[m,g]=this.snapped;(m!==d&&this.snapX||g!==p&&this.snapY)&&this.onSnap(this)}stop(){this.updateTicker.pause();this.overshootXTicker.pause();this.overshootYTicker.pause();for(let t in this.animate.animations)this.animate.animations[t].pause();gs(this,null,"x");gs(this,null,"y");gs(this,null,"progressX");gs(this,null,"progressY");gs(this.scroll);gs(this.overshootCoords);return this}
/**
   * @param {Number} [duration]
   * @param {Number} [gap]
   * @param {EasingParam} [ease]
   * @return {this}
   */scrollInView(t,e=0,s=Oe.inOutQuad){this.updateScrollCoords();const i=this.destX;const n=this.destY;const o=this.scroll;const r=this.scrollBounds;const a=this.canScroll;if(!this.containerArray&&this.isOutOfBounds(r,i,n)){const[c,h,l,u]=r;const d=pt(ut(n-c,-1e12,0),0);const p=pt(ut(i-h,0,f),0);const m=pt(ut(n-l,0,f),0);const g=pt(ut(i-u,-1e12,0),0);new JSAnimation(o,{x:pt(o.x+(g?g-e:p?p+e:0),0),y:pt(o.y+(d?d-e:m?m+e:0),0),duration:z(t)?350*R.timeScale:t,ease:s,onUpdate:()=>{this.canScroll=false;this.$scrollContainer.scrollTo(o.x,o.y)}}).init().then((()=>{this.canScroll=a}))}return this}handleHover(){this.isFinePointer&&this.cursor&&!this.cursorStyles&&(this.cursorStyles=fs(this.$trigger,{cursor:/** @type {DraggableCursorParams} */this.cursor.onHover}))}
/**
   * @param  {Number} [duration]
   * @param  {Number} [gap]
   * @param  {EasingParam} [ease]
   * @return {this}
   */animateInView(t,e=0,s=Oe.inOutQuad){this.stop();this.updateBoundingValues();const i=this.x;const n=this.y;const[o,r,a,c]=this.containerPadding;const h=this.scroll.y-this.targetBounds[0]+o+e;const l=this.scroll.x-this.targetBounds[1]-r-e;const u=this.scroll.y-this.targetBounds[2]-a-e;const d=this.scroll.x-this.targetBounds[3]+c+e;const p=this.isOutOfBounds([h,l,u,d],i,n);if(p){const[e,o]=this.disabled;const r=ut(ft(i,this.snapX),d,l);const a=ut(ft(n,this.snapY),h,u);const c=z(t)?350*R.timeScale:t;e||p!==1&&p!==3||this.animate[this.xProp](r,c,s);o||p!==2&&p!==3||this.animate[this.yProp](a,c,s)}return this}
/**
   * @param {MouseEvent|TouchEvent} e
   */handleDown(t){const e=/** @type {HTMLElement} */t.target;if(this.grabbed||/** @type {HTMLInputElement}  */e.type==="range")return;t.stopPropagation();this.grabbed=true;this.released=false;this.stop();this.updateBoundingValues();const i=/** @type {TouchEvent} */t.changedTouches;const n=i?i[0].clientX:/** @type {MouseEvent} */t.clientX;const o=i?i[0].clientY:/** @type {MouseEvent} */t.clientY;const{x:r,y:a}=this.transforms.normalizePoint(n,o);const[c,h,l,u]=this.containerBounds;const d=(1-this.containerFriction)*this.dragSpeed;const p=this.x;const f=this.y;this.coords[0]=this.coords[2]=d?p>h?h+(p-h)/d:p<u?u+(p-u)/d:p:p;this.coords[1]=this.coords[3]=d?f>l?l+(f-l)/d:f<c?c+(f-c)/d:f:f;this.pointer[0]=r;this.pointer[1]=a;this.pointer[2]=r;this.pointer[3]=a;this.pointer[4]=r;this.pointer[5]=a;this.pointer[6]=r;this.pointer[7]=a;this.deltaX=0;this.deltaY=0;this.velocity=0;this.velocityStack[0]=0;this.velocityStack[1]=0;this.velocityStack[2]=0;this.velocityStackIndex=0;this.angle=0;if(this.targetStyles){this.targetStyles.revert();this.targetStyles=null}const m=/** @type {Number} */ps(this.$target,"zIndex",false);Us=(m>Us?m:Us)+1;this.targetStyles=fs(this.$target,{zIndex:Us});if(this.triggerStyles){this.triggerStyles.revert();this.triggerStyles=null}if(this.cursorStyles){this.cursorStyles.revert();this.cursorStyles=null}this.isFinePointer&&this.cursor&&(this.bodyStyles=fs(s.body,{cursor:/** @type {DraggableCursorParams} */this.cursor.onGrab}));this.scrollInView(100,0,Oe.out(3));this.onGrab(this);s.addEventListener("touchmove",this);s.addEventListener("touchend",this);s.addEventListener("touchcancel",this);s.addEventListener("mousemove",this);s.addEventListener("mouseup",this);s.addEventListener("selectstart",this)}
/**
   * @param {MouseEvent|TouchEvent} e
   */handleMove(t){if(!this.grabbed)return;const e=/** @type {TouchEvent} */t.changedTouches;const s=e?e[0].clientX:/** @type {MouseEvent} */t.clientX;const i=e?e[0].clientY:/** @type {MouseEvent} */t.clientY;const{x:n,y:o}=this.transforms.normalizePoint(s,i);const r=n-this.pointer[6];const a=o-this.pointer[7];let c=/** @type {HTMLElement} */t.target;let h=false;let l=false;let u=false;while(e&&c&&c!==this.$trigger){const t=ps(c,"overflow-y");if(t!=="hidden"&&t!=="visible"){const{scrollTop:t,scrollHeight:e,clientHeight:s}=c;if(e>s){u=true;h=t<=3;l=t>=e-s-3;break}}c=/** @type {HTMLElement} */c.parentNode}if(u&&(!h&&!l||h&&a<0||l&&a>0)){this.pointer[0]=n;this.pointer[1]=o;this.pointer[2]=n;this.pointer[3]=o;this.pointer[4]=n;this.pointer[5]=o;this.pointer[6]=n;this.pointer[7]=o}else{Ms(t);this.triggerStyles||(this.triggerStyles=fs(this.$trigger,{pointerEvents:"none"}));this.$trigger.addEventListener("touchstart",Ms,{passive:false});this.$trigger.addEventListener("touchmove",Ms,{passive:false});this.$trigger.addEventListener("touchend",Ms);if(!this.disabled[0]&&st(r)>3||!this.disabled[1]&&st(a)>3){this.updateTicker.resume();this.pointer[2]=this.pointer[0];this.pointer[3]=this.pointer[1];this.pointer[0]=n;this.pointer[1]=o;this.dragged=true;this.released=false;this.onDrag(this)}}}handleUp(){if(!this.grabbed)return;this.updateTicker.pause();if(this.triggerStyles){this.triggerStyles.revert();this.triggerStyles=null}if(this.bodyStyles){this.bodyStyles.revert();this.bodyStyles=null}const[t,e]=this.disabled;const[i,n,o,a,c,h]=this.pointer;const[l,u,d,p]=this.containerBounds;const[f,m]=this.snapped;const g=this.releaseXSpring;const _=this.releaseYSpring;const y=this.releaseEase;const v=this.hasReleaseSpring;const b=this.overshootCoords;const T=this.x;const S=this.y;const w=this.computeVelocity(i-c,n-h);const x=this.angle=ct(n-a,i-o);const k=w*150;const C=(1-this.releaseContainerFriction)*this.dragSpeed;const E=T+et(x)*k;const $=S+tt(x)*k;const A=E>u?u+(E-u)*C:E<p?p+(E-p)*C:E;const B=$>d?d+($-d)*C:$<l?l+($-l)*C:$;const O=this.destX=ut(pt(ft(A,this.snapX),5),p,u);const N=this.destY=ut(pt(ft(B,this.snapY),5),l,d);const L=this.isOutOfBounds(this.containerBounds,E,$);let D=0;let F=0;let I=y;let P=y;let M=0;b.x=T;b.y=S;if(!t){const t=O===u?T>u?-1:1:T<p?-1:1;const s=pt(T-O,0);g.velocity=e&&v?s?k*t/st(s):0:w;const{ease:i,duration:n,restDuration:o}=g;D=T===O?0:v?n:n-o*R.timeScale;v&&(I=i);D>M&&(M=D)}if(!e){const e=N===d?S>d?-1:1:S<l?-1:1;const s=pt(S-N,0);_.velocity=t&&v?s?k*e/st(s):0:w;const{ease:i,duration:n,restDuration:o}=_;F=S===N?0:v?n:n-o*R.timeScale;v&&(P=i);F>M&&(M=F)}if(!v&&L&&C&&(D||F)){const t=r.blend;new JSAnimation(b,{x:{to:A,duration:D*.65},y:{to:B,duration:F*.65},ease:y,composition:t}).init();new JSAnimation(b,{x:{to:O,duration:D},y:{to:N,duration:F},ease:y,composition:t}).init();this.overshootXTicker.stretch(D).restart();this.overshootYTicker.stretch(F).restart()}else{t||this.animate[this.xProp](O,D,I);e||this.animate[this.yProp](N,F,P)}this.scrollInView(M,this.scrollThreshold,y);let X=false;if(O!==f){this.snapped[0]=O;this.snapX&&(X=true)}if(N!==m&&this.snapY){this.snapped[1]=N;this.snapY&&(X=true)}X&&this.onSnap(this);this.grabbed=false;this.dragged=false;this.updated=true;this.released=true;this.onRelease(this);this.$trigger.removeEventListener("touchstart",Ms);this.$trigger.removeEventListener("touchmove",Ms);this.$trigger.removeEventListener("touchend",Ms);s.removeEventListener("touchmove",this);s.removeEventListener("touchend",this);s.removeEventListener("touchcancel",this);s.removeEventListener("mousemove",this);s.removeEventListener("mouseup",this);s.removeEventListener("selectstart",this)}reset(){this.stop();this.resizeTicker.pause();this.grabbed=false;this.dragged=false;this.updated=false;this.released=false;this.canScroll=false;this.setX(0,true);this.setY(0,true);this.coords[0]=0;this.coords[1]=0;this.pointer[0]=0;this.pointer[1]=0;this.pointer[2]=0;this.pointer[3]=0;this.pointer[4]=0;this.pointer[5]=0;this.pointer[6]=0;this.pointer[7]=0;this.velocity=0;this.velocityStack[0]=0;this.velocityStack[1]=0;this.velocityStack[2]=0;this.velocityStackIndex=0;this.angle=0;return this}enable(){if(!this.enabled){this.enabled=true;this.$target.classList.remove("is-disabled");this.touchActionStyles=fs(this.$trigger,{touchAction:this.disabled[0]?"pan-x":this.disabled[1]?"pan-y":"none"});this.$trigger.addEventListener("touchstart",this,{passive:true});this.$trigger.addEventListener("mousedown",this,{passive:true});this.$trigger.addEventListener("mouseenter",this)}return this}disable(){this.enabled=false;this.grabbed=false;this.dragged=false;this.updated=false;this.released=false;this.canScroll=false;this.touchActionStyles.revert();if(this.cursorStyles){this.cursorStyles.revert();this.cursorStyles=null}if(this.triggerStyles){this.triggerStyles.revert();this.triggerStyles=null}if(this.bodyStyles){this.bodyStyles.revert();this.bodyStyles=null}if(this.targetStyles){this.targetStyles.revert();this.targetStyles=null}this.stop();this.$target.classList.add("is-disabled");this.$trigger.removeEventListener("touchstart",this);this.$trigger.removeEventListener("mousedown",this);this.$trigger.removeEventListener("mouseenter",this);s.removeEventListener("touchmove",this);s.removeEventListener("touchend",this);s.removeEventListener("touchcancel",this);s.removeEventListener("mousemove",this);s.removeEventListener("mouseup",this);s.removeEventListener("selectstart",this);return this}revert(){this.reset();this.disable();this.$target.classList.remove("is-disabled");this.updateTicker.revert();this.overshootXTicker.revert();this.overshootYTicker.revert();this.resizeTicker.revert();this.animate.revert();return this}
/**
   * @param {Event} e
   */handleEvent(t){switch(t.type){case"mousedown":this.handleDown(/** @type {MouseEvent} */t);break;case"touchstart":this.handleDown(/** @type {TouchEvent} */t);break;case"mousemove":this.handleMove(/** @type {MouseEvent} */t);break;case"touchmove":this.handleMove(/** @type {TouchEvent} */t);break;case"mouseup":this.handleUp();break;case"touchend":this.handleUp();break;case"touchcancel":this.handleUp();break;case"mouseenter":this.handleHover();break;case"selectstart":Ms(t);break}}}
/**
 * @param {TargetsParam} target
 * @param {DraggableParams} [parameters]
 * @return {Draggable}
 */const Ys=(t,e)=>new Draggable(t,e)
/**
 * @typedef {Object} ReactRef
 * @property {HTMLElement|SVGElement|null} [current]
 */
/**
 * @typedef {Object} AngularRef
 * @property {HTMLElement|SVGElement} [nativeElement]
 */
/**
 * @typedef {Object} ScopeParams
 * @property {DOMTargetSelector|ReactRef|AngularRef} [root]
 * @property {DefaultsParams} [defaults]
 * @property {Record<String, String>} [mediaQueries]
 */
/**
 * @callback ScopeCleanup
 * @param {Scope} [scope]
 */
/**
 * @callback ScopeConstructor
 * @param {Scope} [scope]
 * @return {ScopeCleanup|void}
 */
/**
 * @callback ScopeMethod
 * @param {...*} args
 * @return {ScopeCleanup|void}
 */;class Scope{
/** @param {ScopeParams} [parameters] */
constructor(t={}){R.scope&&R.scope.revertibles.push(this);const i=t.root;
/** @type {Document|DOMTarget} */let n=s;i&&(n=/** @type {ReactRef} */i.current||
/** @type {AngularRef} */i.nativeElement||Lt(/** @type {DOMTargetSelector} */i)[0]||s);const o=t.defaults;const r=R.defaults;const a=t.mediaQueries;
/** @type {DefaultsParams} */this.defaults=o?vt(o,r):r;
/** @type {Document|DOMTarget} */this.root=n;
/** @type {Array<ScopeConstructor>} */this.constructors=[];
/** @type {Array<Function>} */this.revertConstructors=[];
/** @type {Array<Revertible>} */this.revertibles=[];
/** @type {Record<String, Function>} */this.methods={};
/** @type {Record<String, Boolean>} */this.matches={};
/** @type {Record<String, MediaQueryList>} */this.mediaQueryLists={};
/** @type {Record<String, any>} */this.data={};if(a)for(let t in a){const s=e.matchMedia(a[t]);this.mediaQueryLists[t]=s;s.addEventListener("change",this)}}
/**
   * @callback ScoppedCallback
   * @param {this} scope
   * @return {any}
   *
   * @param {ScoppedCallback} cb
   * @return {this}
   */execute(t){let e=R.scope;let s=R.root;let i=R.defaults;R.scope=this;R.root=this.root;R.defaults=this.defaults;const n=this.mediaQueryLists;for(let t in n)this.matches[t]=n[t].matches;const o=t(this);R.scope=e;R.root=s;R.defaults=i;return o}refresh(){this.execute((()=>{let t=this.revertibles.length;let e=this.revertConstructors.length;while(t--)this.revertibles[t].revert();while(e--)this.revertConstructors[e](this);this.revertibles.length=0;this.revertConstructors.length=0;this.constructors.forEach((t=>{const e=t(this);e&&this.revertConstructors.push(e)}))}));return this}
/**
   * @callback contructorCallback
   * @param {this} self
   *
   * @overload
   * @param {String} a1
   * @param {ScopeMethod} a2
   * @return {this}
   *
   * @overload
   * @param {contructorCallback} a1
   * @return {this}
   *
   * @param {String|contructorCallback} a1
   * @param {ScopeMethod} [a2]
   */add(t,e){if(Y(t)){const e=/** @type {contructorCallback} */t;this.constructors.push(e);this.execute((()=>{const t=e(this);t&&this.revertConstructors.push(t)}))}else this.methods[/** @type {String} */t]=(/** @type {any} */...t)=>this.execute((()=>e(...t)));return this}
/**
   * @param {Event} e
   */handleEvent(t){switch(t.type){case"change":this.refresh();break}}revert(){const t=this.revertibles;const e=this.revertConstructors;const s=this.mediaQueryLists;let i=t.length;let n=e.length;while(i--)t[i].revert();while(n--)e[n](this);for(let t in s)s[t].removeEventListener("change",this);t.length=0;e.length=0;this.constructors.length=0;this.matches={};this.methods={};this.mediaQueryLists={};this.data={}}}
/**
 * @param {ScopeParams} [params]
 * @return {Scope}
 */const zs=t=>new Scope(t)
/**
 * @typedef {String|Number} ScrollThresholdValue
 */;const Ws=()=>{const t=document.createElement("div");s.body.appendChild(t);t.style.height="100lvh";const e=t.offsetHeight;s.body.removeChild(t);return e};
/**
 * @template {ScrollThresholdValue|String|Number|Boolean|Function|Object} T
 * @param {T | ((observer: ScrollObserver) => T)} value
 * @param {ScrollObserver} scroller
 * @return {T}
 */const Vs=(t,e)=>t&&Y(t)?/** @type {Function} */t(e):t;const Hs=new Map;class ScrollContainer{
/**
   * @param {HTMLElement} $el
   */
constructor(t){
/** @type {HTMLElement} */
this.element=t;
/** @type {Boolean} */this.useWin=this.element===s.body;
/** @type {Number} */this.winWidth=0;
/** @type {Number} */this.winHeight=0;
/** @type {Number} */this.width=0;
/** @type {Number} */this.height=0;
/** @type {Number} */this.left=0;
/** @type {Number} */this.top=0;
/** @type {Number} */this.zIndex=0;
/** @type {Number} */this.scrollX=0;
/** @type {Number} */this.scrollY=0;
/** @type {Number} */this.prevScrollX=0;
/** @type {Number} */this.prevScrollY=0;
/** @type {Number} */this.scrollWidth=0;
/** @type {Number} */this.scrollHeight=0;
/** @type {Number} */this.velocity=0;
/** @type {Boolean} */this.backwardX=false;
/** @type {Boolean} */this.backwardY=false;
/** @type {Timer} */this.scrollTicker=new Timer({autoplay:false,onBegin:()=>this.dataTimer.resume(),onUpdate:()=>{const t=this.backwardX||this.backwardY;bt(this,(/** @type {ScrollObserver} */t=>t.handleScroll()),t)},onComplete:()=>this.dataTimer.pause()}).init();
/** @type {Timer} */this.dataTimer=new Timer({autoplay:false,frameRate:30,onUpdate:t=>{const e=t.deltaTime;const s=this.prevScrollX;const i=this.prevScrollY;const n=this.scrollX;const o=this.scrollY;const r=s-n;const a=i-o;this.prevScrollX=n;this.prevScrollY=o;r&&(this.backwardX=s>n);a&&(this.backwardY=i>o);this.velocity=pt(e>0?Math.sqrt(r*r+a*a)/e:0,5)}}).init();
/** @type {Timer} */this.resizeTicker=new Timer({autoplay:false,duration:250*R.timeScale,onComplete:()=>{this.updateWindowBounds();this.refreshScrollObservers();this.handleScroll()}}).init();
/** @type {Timer} */this.wakeTicker=new Timer({autoplay:false,duration:500*R.timeScale,onBegin:()=>{this.scrollTicker.resume()},onComplete:()=>{this.scrollTicker.pause()}}).init();
/** @type {ScrollObserver} */this._head=null;
/** @type {ScrollObserver} */this._tail=null;this.updateScrollCoords();this.updateWindowBounds();this.updateBounds();this.refreshScrollObservers();this.handleScroll();this.resizeObserver=new ResizeObserver((()=>this.resizeTicker.restart()));this.resizeObserver.observe(this.element);(this.useWin?e:this.element).addEventListener("scroll",this,false)}updateScrollCoords(){const t=this.useWin;const s=this.element;this.scrollX=pt(t?e.scrollX:s.scrollLeft,0);this.scrollY=pt(t?e.scrollY:s.scrollTop,0)}updateWindowBounds(){this.winWidth=e.innerWidth;this.winHeight=Ws()}updateBounds(){const t=getComputedStyle(this.element);const e=this.element;this.scrollWidth=e.scrollWidth+parseFloat(t.marginLeft)+parseFloat(t.marginRight);this.scrollHeight=e.scrollHeight+parseFloat(t.marginTop)+parseFloat(t.marginBottom);this.updateWindowBounds();let s,i;if(this.useWin){s=this.winWidth;i=this.winHeight}else{const t=e.getBoundingClientRect();s=t.width;i=t.height;this.top=t.top;this.left=t.left}this.width=s;this.height=i}refreshScrollObservers(){bt(this,(/** @type {ScrollObserver} */t=>{t._debug&&t.removeDebug()}));this.updateBounds();bt(this,(/** @type {ScrollObserver} */t=>{t.refresh();t._debug&&t.debug()}))}refresh(){this.updateWindowBounds();this.updateBounds();this.refreshScrollObservers();this.handleScroll()}handleScroll(){this.updateScrollCoords();this.wakeTicker.restart()}
/**
   * @param {Event} e
   */handleEvent(t){switch(t.type){case"scroll":this.handleScroll();break}}revert(){this.scrollTicker.cancel();this.dataTimer.cancel();this.resizeTicker.cancel();this.wakeTicker.cancel();this.resizeObserver.unobserve(this.element);(this.useWin?e:this.element).removeEventListener("scroll",this);Hs.delete(this.element)}}
/**
 * @param {TargetsParam} target
 * @return {ScrollContainer}
 */const qs=t=>{const e=/** @type {HTMLElement} */t&&Lt(t)[0]||s.body;let i=Hs.get(e);if(!i){i=new ScrollContainer(e);Hs.set(e,i)}return i};
/**
 * @param {HTMLElement} $el
 * @param {Number|string} v
 * @param {Number} size
 * @param {Number} [under]
 * @param {Number} [over]
 * @return {Number}
 */const Js=(t,e,s,i,n)=>{const o=e==="min";const r=e==="max";const a=e==="top"||e==="left"||e==="start"||o?0:e==="bottom"||e==="right"||e==="end"||r?"100%":e==="center"?"50%":e;const{n:c,u:h}=oe(a,ae);let l=c;h==="%"?l=c/100*s:h&&(l=Pe(t,ae,"px",true).n);r&&i<0&&(l+=i);o&&n>0&&(l+=n);return l};
/**
 * @param {HTMLElement} $el
 * @param {ScrollThresholdValue} v
 * @param {Number} size
 * @param {Number} [under]
 * @param {Number} [over]
 * @return {Number}
 */const Qs=(t,e,s,i,n)=>{
/** @type {Number} */
let o;if(U(e)){const r=O.exec(/** @type {String} */e);if(r){const a=r[0];const c=a[0];const h=/** @type {String} */e.split(a);const l=h[0]==="min";const u=h[0]==="max";const d=Js(t,h[0],s,i,n);const p=Js(t,h[1],s,i,n);if(l){const e=ie(Js(t,"min",s),p,c);o=e<d?d:e}else if(u){const e=ie(Js(t,"max",s),p,c);o=e>d?d:e}else o=ie(d,p,c)}else o=Js(t,e,s,i,n)}else o=/** @type {Number} */e;return pt(o,0)};
/**
 * @param {JSAnimation} linked
 * @return {HTMLElement}
 */const js=t=>{let e;const s=t.targets;for(let t=0,i=s.length;t<i;t++){const i=s[t];if(i[c]){e=/** @type {HTMLElement} */i;break}}return e};let Gs=0;const Zs=["#FF4B4B","#FF971B","#FFC730","#F9F640","#7AFF5A","#18FF74","#17E09B","#3CFFEC","#05DBE9","#33B3F1","#638CF9","#C563FE","#FF4FCF","#F93F8A"];
/**
 * @typedef {Object} ScrollThresholdParam
 * @property {ScrollThresholdValue} [target]
 * @property {ScrollThresholdValue} [container]
 */
/**
 * @callback ScrollObserverAxisCallback
 * @param {ScrollObserver} self
 * @return {'x'|'y'}
 */
/**
 * @callback ScrollThresholdCallback
 * @param {ScrollObserver} self
 * @return {ScrollThresholdValue|ScrollThresholdParam}
 */
/**
 * @typedef {Object} ScrollObserverParams
 * @property {Number|String} [id]
 * @property {Boolean|Number|String|EasingParam} [sync]
 * @property {TargetsParam} [container]
 * @property {TargetsParam} [target]
 * @property {'x'|'y'|ScrollObserverAxisCallback|((observer: ScrollObserver) => 'x'|'y'|ScrollObserverAxisCallback)} [axis]
 * @property {ScrollThresholdValue|ScrollThresholdParam|ScrollThresholdCallback|((observer: ScrollObserver) => ScrollThresholdValue|ScrollThresholdParam|ScrollThresholdCallback)} [enter]
 * @property {ScrollThresholdValue|ScrollThresholdParam|ScrollThresholdCallback|((observer: ScrollObserver) => ScrollThresholdValue|ScrollThresholdParam|ScrollThresholdCallback)} [leave]
 * @property {Boolean|((observer: ScrollObserver) => Boolean)} [repeat]
 * @property {Boolean} [debug]
 * @property {Callback<ScrollObserver>} [onEnter]
 * @property {Callback<ScrollObserver>} [onLeave]
 * @property {Callback<ScrollObserver>} [onEnterForward]
 * @property {Callback<ScrollObserver>} [onLeaveForward]
 * @property {Callback<ScrollObserver>} [onEnterBackward]
 * @property {Callback<ScrollObserver>} [onLeaveBackward]
 * @property {Callback<ScrollObserver>} [onUpdate]
 * @property {Callback<ScrollObserver>} [onSyncComplete]
 */class ScrollObserver{
/**
   * @param {ScrollObserverParams} parameters
   */
constructor(t={}){R.scope&&R.scope.revertibles.push(this);const e=Zt(t.sync,"play pause");const i=e?Re(/** @type {EasingParam} */e):null;const n=e&&(e==="linear"||e===ye);const o=e&&!(i===ye&&!n);const r=e&&(X(e)||e===true||n);const a=e&&U(e)&&!o&&!r;const c=a?/** @type {String} */e.split(" ").map((/** @type {String} */t=>()=>{const e=this.linked;return e&&e[t]?e[t]():null})):null;const h=a&&c.length>2;
/** @type {Number} */this.index=Gs++;
/** @type {String|Number} */this.id=z(t.id)?this.index:t.id;
/** @type {ScrollContainer} */this.container=qs(t.container);
/** @type {HTMLElement} */this.target=null;
/** @type {Tickable|WAAPIAnimation} */this.linked=null;
/** @type {Boolean} */this.repeat=null;
/** @type {Boolean} */this.horizontal=null;
/** @type {ScrollThresholdParam|ScrollThresholdValue|ScrollThresholdCallback} */this.enter=null;
/** @type {ScrollThresholdParam|ScrollThresholdValue|ScrollThresholdCallback} */this.leave=null;
/** @type {Boolean} */this.sync=o||r||!!c;
/** @type {EasingFunction} */this.syncEase=o?i:null;
/** @type {Number} */this.syncSmooth=r?e===true||n?1:/** @type {Number} */e:null;
/** @type {Callback<ScrollObserver>} */this.onSyncEnter=c&&!h&&c[0]?c[0]:T;
/** @type {Callback<ScrollObserver>} */this.onSyncLeave=c&&!h&&c[1]?c[1]:T;
/** @type {Callback<ScrollObserver>} */this.onSyncEnterForward=c&&h&&c[0]?c[0]:T;
/** @type {Callback<ScrollObserver>} */this.onSyncLeaveForward=c&&h&&c[1]?c[1]:T;
/** @type {Callback<ScrollObserver>} */this.onSyncEnterBackward=c&&h&&c[2]?c[2]:T;
/** @type {Callback<ScrollObserver>} */this.onSyncLeaveBackward=c&&h&&c[3]?c[3]:T;
/** @type {Callback<ScrollObserver>} */this.onEnter=t.onEnter||T;
/** @type {Callback<ScrollObserver>} */this.onLeave=t.onLeave||T;
/** @type {Callback<ScrollObserver>} */this.onEnterForward=t.onEnterForward||T;
/** @type {Callback<ScrollObserver>} */this.onLeaveForward=t.onLeaveForward||T;
/** @type {Callback<ScrollObserver>} */this.onEnterBackward=t.onEnterBackward||T;
/** @type {Callback<ScrollObserver>} */this.onLeaveBackward=t.onLeaveBackward||T;
/** @type {Callback<ScrollObserver>} */this.onUpdate=t.onUpdate||T;
/** @type {Callback<ScrollObserver>} */this.onSyncComplete=t.onSyncComplete||T;
/** @type {Boolean} */this.reverted=false;
/** @type {Boolean} */this.completed=false;
/** @type {Boolean} */this.began=false;
/** @type {Boolean} */this.isInView=false;
/** @type {Boolean} */this.forceEnter=false;
/** @type {Boolean} */this.hasEntered=false;
/** @type {Array.<Number>} */this.offsets=[];
/** @type {Number} */this.offset=0;
/** @type {Number} */this.offsetStart=0;
/** @type {Number} */this.offsetEnd=0;
/** @type {Number} */this.distance=0;
/** @type {Number} */this.prevProgress=0;
/** @type {Array} */this.thresholds=["start","end","end","start"];
/** @type {[Number, Number, Number, Number]} */this.coords=[0,0,0,0];
/** @type {JSAnimation} */this.debugStyles=null;
/** @type {HTMLElement} */this.$debug=null;
/** @type {ScrollObserverParams} */this._params=t;
/** @type {Boolean} */this._debug=Zt(t.debug,false);
/** @type {ScrollObserver} */this._next=null;
/** @type {ScrollObserver} */this._prev=null;St(this.container,this);ds((()=>{if(!this.reverted){if(!this.target){const e=/** @type {HTMLElement} */Lt(t.target)[0];this.target=e||s.body;this.refresh()}this._debug&&this.debug()}}))}
/**
   * @param {Tickable|WAAPIAnimation} linked
   */link(t){if(t){t.pause();this.linked=t;if(!this._params.target){
/** @type {HTMLElement} */
let e;z(/** @type {JSAnimation} */t.targets)?bt(/** @type {Timeline} */t,(/** @type {JSAnimation} */t=>{t.targets&&!e&&(e=js(/** @type {JSAnimation} */t))})):e=js(/** @type {JSAnimation} */t);this.target=e||s.body;this.refresh()}}return this}get velocity(){return this.container.velocity}get backward(){return this.horizontal?this.container.backwardX:this.container.backwardY}get scroll(){return this.horizontal?this.container.scrollX:this.container.scrollY}get progress(){const t=(this.scroll-this.offsetStart)/this.distance;return t===Infinity||isNaN(t)?0:pt(ut(t,0,1),6)}refresh(){this.reverted=false;const t=this._params;this.repeat=Zt(Vs(t.repeat,this),true);this.horizontal=Zt(Vs(t.axis,this),"y")==="x";this.enter=Zt(Vs(t.enter,this),"end start");this.leave=Zt(Vs(t.leave,this),"start end");this.updateBounds();this.handleScroll();return this}removeDebug(){if(this.$debug){this.$debug.parentNode.removeChild(this.$debug);this.$debug=null}if(this.debugStyles){this.debugStyles.revert();this.$debug=null}return this}debug(){this.removeDebug();const t=this.container;const e=this.horizontal;const i=t.element.querySelector(":scope > .animejs-onscroll-debug");const n=s.createElement("div");const o=s.createElement("div");const r=s.createElement("div");const a=Zs[this.index%Zs.length];const c=t.useWin;const h=c?t.winWidth:t.width;const l=c?t.winHeight:t.height;const u=t.scrollWidth;const d=t.scrollHeight;const p=this.container.width>360?320:260;const f=e?0:10;const m=e?10:0;const g=e?24:p/2;const _=e?g:15;const y=e?60:g;const v=e?y:_;const b=e?"repeat-x":"repeat-y";
/**
     * @param {Number} v
     * @return {String}
     */const T=t=>e?"0px "+t+"px":t+"px 2px"
/**
     * @param {String} c
     * @return {String}
     */;const S=t=>`linear-gradient(${e?90:0}deg, ${t} 2px, transparent 1px)`
/**
     * @param {String} p
     * @param {Number} l
     * @param {Number} t
     * @param {Number} w
     * @param {Number} h
     * @return {String}
     */;const w=(t,e,s,i,n)=>`position:${t};left:${e}px;top:${s}px;width:${i}px;height:${n}px;`;n.style.cssText=`${w("absolute",f,m,e?u:p,e?p:d)}\n      pointer-events: none;\n      z-index: ${this.container.zIndex++};\n      display: flex;\n      flex-direction: ${e?"column":"row"};\n      filter: drop-shadow(0px 1px 0px rgba(0,0,0,.75));\n    `;o.style.cssText=`${w("sticky",0,0,e?h:g,e?g:l)}`;i||(o.style.cssText+=`background:\n        ${S("#FFFF")}${T(g-10)} / ${e,"100px 100px"} ${b},\n        ${S("#FFF8")}${T(g-10)} / ${e,"10px 10px"} ${b};\n      `);r.style.cssText=`${w("relative",0,0,e?u:g,e?g:d)}`;i||(r.style.cssText+=`background:\n        ${S("#FFFF")}${T(0)} / ${e?"100px 10px":"10px 100px"} ${b},\n        ${S("#FFF8")}${T(0)} / ${e?"10px 0px":"0px 10px"} ${b};\n      `);const x=[" enter: "," leave: "];this.coords.forEach(((t,i)=>{const n=i>1;const c=(n?0:this.offset)+t;const f=i%2;const m=c<v;const g=c>(n?e?h:l:e?u:d)-v;const b=(n?f&&!m:!f&&!m)||g;const T=s.createElement("div");const S=s.createElement("div");const k=e?b?"right":"left":b?"bottom":"top";const C=b?(e?y:_)+(n?e?-1:g?0:-2:e?-1:-2):(n,e?1:0);S.innerHTML=`${this.id}${x[f]}${this.thresholds[i]}`;T.style.cssText=`${w("absolute",0,0,y,_)}\n        display: flex;\n        flex-direction: ${e?"column":"row"};\n        justify-content: flex-${n?"start":"end"};\n        align-items: flex-${b?"end":"start"};\n        border-${k}: 2px ${f,"solid"} ${a};\n      `;S.style.cssText=`\n        overflow: hidden;\n        max-width: ${p/2-10}px;\n        height: ${_};\n        margin-${e?b?"right":"left":b?"bottom":"top"}: -2px;\n        padding: 1px;\n        font-family: ui-monospace, monospace;\n        font-size: 10px;\n        letter-spacing: -.025em;\n        line-height: 9px;\n        font-weight: 600;\n        text-align: ${e&&b||!e&&!n?"right":"left"};\n        white-space: pre;\n        text-overflow: ellipsis;\n        color: ${f?a:"rgba(0,0,0,.75)"};\n        background-color: ${f?"rgba(0,0,0,.65)":a};\n        border: 2px solid ${f?a:"transparent"};\n        border-${e?b?"top-left":"top-right":b?"top-left":"bottom-left"}-radius: 5px;\n        border-${e?b?"bottom-left":"bottom-right":b?"top-right":"bottom-right"}-radius: 5px;\n      `;T.appendChild(S);let E=c-C+(e?1:0);T.style[e?"left":"top"]=`${E}px`;(n?o:r).appendChild(T)}));n.appendChild(o);n.appendChild(r);t.element.appendChild(n);i||n.classList.add("animejs-onscroll-debug");this.$debug=n;const k=ps(t.element,"position");k==="static"&&(this.debugStyles=fs(t.element,{position:"relative "}))}updateBounds(){this._debug&&this.removeDebug();let t;const e=this.target;const i=this.container;const n=this.horizontal;const o=this.linked;let r;let a=e;let c=0;let h=0;
/** @type {Element} */let l=a;if(o){r=o.currentTime;o.seek(0,true)}const u=ps(i.element,"position")==="static"&&fs(i.element,{position:"relative "});while(a&&a!==i.element&&a!==s.body){const e=ps(a,"position")==="sticky"&&fs(a,{position:"static"});if(a===l){c+=a.offsetLeft||0;h+=a.offsetTop||0;l=a.offsetParent}a=/** @type {HTMLElement} */a.parentElement;if(e){t||(t=[]);t.push(e)}}u&&u.revert();const d=n?c:h;const p=n?e.offsetWidth:e.offsetHeight;const f=n?i.width:i.height;const m=n?i.scrollWidth:i.scrollHeight;const g=m-f;const _=this.enter;const y=this.leave;
/** @type {ScrollThresholdValue} */let v="start";
/** @type {ScrollThresholdValue} */let b="end";
/** @type {ScrollThresholdValue} */let T="end";
/** @type {ScrollThresholdValue} */let S="start";if(U(_)){const t=/** @type {String} */_.split(" ");T=t[0];v=t.length>1?t[1]:v}else if(M(_)){const t=/** @type {ScrollThresholdParam} */_;z(t.container)||(T=t.container);z(t.target)||(v=t.target)}else X(_)&&(T=/** @type {Number} */_);if(U(y)){const t=/** @type {String} */y.split(" ");S=t[0];b=t.length>1?t[1]:b}else if(M(y)){const t=/** @type {ScrollThresholdParam} */y;z(t.container)||(S=t.container);z(t.target)||(b=t.target)}else X(y)&&(S=/** @type {Number} */y);const w=Qs(e,v,p);const x=Qs(e,b,p);const k=w+d-f;const C=x+d-g;const E=Qs(e,T,f,k,C);const $=Qs(e,S,f,k,C);const A=w+d-E;const B=x+d-$;const O=B-A;this.offsets[0]=c;this.offsets[1]=h;this.offset=d;this.offsetStart=A;this.offsetEnd=B;this.distance=O<=0?0:O;this.thresholds=[v,b,T,S];this.coords=[w,x,E,$];t&&t.forEach((t=>t.revert()));o&&o.seek(r,true);this._debug&&this.debug()}handleScroll(){const t=this.linked;const e=this.sync;const s=this.syncEase;const i=this.syncSmooth;const n=t&&(s||i);const o=this.horizontal;const r=this.container;const a=this.scroll;const c=a<=this.offsetStart;const h=a>=this.offsetEnd;const l=!c&&!h;const u=a===this.offsetStart||a===this.offsetEnd;const d=!this.hasEntered&&u;const p=this._debug&&this.$debug;let f=false;let m=false;let g=this.progress;c&&this.began&&(this.began=false);g>0&&!this.began&&(this.began=true);if(n){const e=t.progress;if(i&&X(i)){if(/** @type {Number} */i<1){const t=1e-4;const s=e<g&&g===1?t:e>g&&!g?-1e-4:0;g=pt(Es(e,g,mt(.01,.2,/** @type {Number} */i),false)+s,6)}}else s&&(g=s(g));f=g!==this.prevProgress;m=e===1;f&&!m&&i&&e&&r.wakeTicker.restart()}if(p){const t=o?r.scrollY:r.scrollX;p.style[o?"top":"left"]=t+10+"px"}if(l&&!this.isInView||d&&!this.forceEnter&&!this.hasEntered){l&&(this.isInView=true);if(this.forceEnter&&this.hasEntered)l&&(this.forceEnter=false);else{p&&l&&(p.style.zIndex=""+this.container.zIndex++);this.onSyncEnter(this);this.onEnter(this);if(this.backward){this.onSyncEnterBackward(this);this.onEnterBackward(this)}else{this.onSyncEnterForward(this);this.onEnterForward(this)}this.hasEntered=true;d&&(this.forceEnter=true)}}(l||!l&&this.isInView)&&(f=true);if(f){n&&t.seek(t.duration*g);this.onUpdate(this)}if(!l&&this.isInView){this.isInView=false;this.onSyncLeave(this);this.onLeave(this);if(this.backward){this.onSyncLeaveBackward(this);this.onLeaveBackward(this)}else{this.onSyncLeaveForward(this);this.onLeaveForward(this)}e&&!i&&(m=true)}if(g>=1&&this.began&&!this.completed&&(e&&m||!e)){e&&this.onSyncComplete(this);this.completed=true;(!this.repeat&&!t||!this.repeat&&t&&t.completed)&&this.revert()}g<1&&this.completed&&(this.completed=false);this.prevProgress=g}revert(){if(this.reverted)return;const t=this.container;Tt(t,this);t._head||t.revert();this._debug&&this.removeDebug();this.reverted=true;return this}}
/**
 * @param {ScrollObserverParams} [parameters={}]
 * @return {ScrollObserver}
 */const Ks=(t={})=>new ScrollObserver(t)
/**
 * @typedef  {Object} StaggerParameters
 * @property {Number|String} [start]
 * @property {Number|'first'|'center'|'last'} [from]
 * @property {Boolean} [reversed]
 * @property {Array.<Number>} [grid]
 * @property {('x'|'y')} [axis]
 * @property {EasingParam} [ease]
 * @property {TweenModifier} [modifier]
 */
/**
 * @callback StaggerFunction
 * @param {Target} [target]
 * @param {Number} [index]
 * @param {Number} [length]
 * @param {Timeline} [tl]
 * @return {Number|String}
 */
/**
 * @param  {Number|String|[Number|String,Number|String]} val
 * @param  {StaggerParameters} params
 * @return {StaggerFunction}
 */;const ti=(t,e={})=>{let s=[];let i=0;const n=e.from;const o=e.reversed;const r=e.ease;const a=!z(r);const c=a&&!z(/** @type {Spring} */r.ease);const h=c?/** @type {Spring} */r.ease:a?Re(r):null;const l=e.grid;const u=e.axis;const d=z(n)||n===0||n==="first";const p=n==="center";const f=n==="last";const m=P(t);const g=G(m?t[0]:t);const y=m?G(t[1]):0;const v=$.exec((m?t[1]:t)+_);const b=e.start||0+(m?g:0);let T=d?0:X(n)?n:0;return(t,n,r,a)=>{p&&(T=(r-1)/2);f&&(T=r-1);if(!s.length){for(let t=0;t<r;t++){if(l){const e=p?(l[0]-1)/2:T%l[0];const i=p?(l[1]-1)/2:ot(T/l[0]);const n=t%l[0];const o=ot(t/l[0]);const r=e-n;const a=i-o;let c=K(r*r+a*a);u==="x"&&(c=-r);u==="y"&&(c=-a);s.push(c)}else s.push(st(T-t));i=at(...s)}h&&(s=s.map((t=>h(t/i)*i)));o&&(s=s.map((t=>u?t<0?t*-1:-t:st(i-t))))}const c=m?(y-g)/i:g;const d=a?Rs(a,z(e.start)?a.iterationDuration:b):/** @type {Number} */b;
/** @type {String|Number} */let _=d+(c*pt(s[n],2)||0);e.modifier&&(_=e.modifier(_));v&&(_=`${_}${v[2]}`);return _}};export{Animatable,Draggable,JSAnimation,Scope,ScrollObserver,Spring,Timeline,Timer,WAAPIAnimation,je as animate,Is as createAnimatable,Ys as createDraggable,zs as createScope,Ps as createSpring,Fs as createTimeline,_e as createTimer,Oe as eases,At as engine,Ks as onScroll,Hs as scrollContainers,ti as stagger,Ht as svg,Os as utils,us as waapi};

