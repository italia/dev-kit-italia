import { g as getDefaultExportFromCjs, c as commonjsGlobal } from './_commonjsHelpers-BFTU3MAI-BFTU3MAI.js';

function _mergeNamespaces$1(n, m) {
  m.forEach(function (e) {
    e && typeof e !== 'string' && !Array.isArray(e) && Object.keys(e).forEach(function (k) {
      if (k !== 'default' && !(k in n)) {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  });
  return Object.freeze(n);
}

var shifty_node = {exports: {}};

/*! Shifty 2.20.4 - https://github.com/jeremyckahn/shifty */

var hasRequiredShifty_node;

function requireShifty_node () {
	if (hasRequiredShifty_node) return shifty_node.exports;
	hasRequiredShifty_node = 1;
	(function (module, exports) {
		(function webpackUniversalModuleDefinition(root, factory) {
			module.exports = factory();
		})(commonjsGlobal, function() {
		return /******/ (() => { // webpackBootstrap
		/******/ 	var __webpack_modules__ = ({

		/***/ 720:
		/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

		// ESM COMPAT FLAG
		__webpack_require__.r(__webpack_exports__);

		// EXPORTS
		__webpack_require__.d(__webpack_exports__, {
		  "Scene": () => /* reexport */ Scene,
		  "Tweenable": () => /* reexport */ Tweenable,
		  "interpolate": () => /* reexport */ interpolate,
		  "processTweens": () => /* reexport */ processTweens,
		  "setBezierFunction": () => /* reexport */ setBezierFunction,
		  "shouldScheduleUpdate": () => /* reexport */ shouldScheduleUpdate,
		  "tween": () => /* reexport */ tween,
		  "unsetBezierFunction": () => /* reexport */ unsetBezierFunction
		});

		// NAMESPACE OBJECT: ./src/easing-functions.js
		var easing_functions_namespaceObject = {};
		__webpack_require__.r(easing_functions_namespaceObject);
		__webpack_require__.d(easing_functions_namespaceObject, {
		  "bounce": () => bounce,
		  "bouncePast": () => bouncePast,
		  "easeFrom": () => easeFrom,
		  "easeFromTo": () => easeFromTo,
		  "easeInBack": () => easeInBack,
		  "easeInCirc": () => easeInCirc,
		  "easeInCubic": () => easeInCubic,
		  "easeInExpo": () => easeInExpo,
		  "easeInOutBack": () => easeInOutBack,
		  "easeInOutCirc": () => easeInOutCirc,
		  "easeInOutCubic": () => easeInOutCubic,
		  "easeInOutExpo": () => easeInOutExpo,
		  "easeInOutQuad": () => easeInOutQuad,
		  "easeInOutQuart": () => easeInOutQuart,
		  "easeInOutQuint": () => easeInOutQuint,
		  "easeInOutSine": () => easeInOutSine,
		  "easeInQuad": () => easeInQuad,
		  "easeInQuart": () => easeInQuart,
		  "easeInQuint": () => easeInQuint,
		  "easeInSine": () => easeInSine,
		  "easeOutBack": () => easeOutBack,
		  "easeOutBounce": () => easeOutBounce,
		  "easeOutCirc": () => easeOutCirc,
		  "easeOutCubic": () => easeOutCubic,
		  "easeOutExpo": () => easeOutExpo,
		  "easeOutQuad": () => easeOutQuad,
		  "easeOutQuart": () => easeOutQuart,
		  "easeOutQuint": () => easeOutQuint,
		  "easeOutSine": () => easeOutSine,
		  "easeTo": () => easeTo,
		  "elastic": () => elastic,
		  "linear": () => linear,
		  "swingFrom": () => swingFrom,
		  "swingFromTo": () => swingFromTo,
		  "swingTo": () => swingTo
		});

		// NAMESPACE OBJECT: ./src/token.js
		var token_namespaceObject = {};
		__webpack_require__.r(token_namespaceObject);
		__webpack_require__.d(token_namespaceObject, {
		  "afterTween": () => afterTween,
		  "beforeTween": () => beforeTween,
		  "doesApply": () => doesApply,
		  "tweenCreated": () => tweenCreated
		});
		/** @typedef {import(".").shifty.easingFunction} shifty.easingFunction */

		/*!
		 * All equations are adapted from Thomas Fuchs'
		 * [Scripty2](https://github.com/madrobby/scripty2/blob/master/src/effects/transitions/penner.js).
		 *
		 * Based on Easing Equations (c) 2003 [Robert
		 * Penner](http://www.robertpenner.com/), all rights reserved. This work is
		 * [subject to terms](http://www.robertpenner.com/easing_terms_of_use.html).
		 */

		/*!
		 *  TERMS OF USE - EASING EQUATIONS
		 *  Open source under the BSD License.
		 *  Easing Equations (c) 2003 Robert Penner, all rights reserved.
		 */

		/**
		 * @member Tweenable.formulas
		 * @description A static Object of {@link shifty.easingFunction}s that can by
		 * used by Shifty. The default values are defined in
		 * [`easing-functions.js`](easing-functions.js.html), but you can add your own
		 * {@link shifty.easingFunction}s by defining them as keys to this Object.
		 *
		 * Shifty ships with an implementation of [Robert Penner's easing
		 * equations](http://robertpenner.com/easing/), as adapted from
		 * [Scripty2](https://github.com/madrobby/scripty2/blob/master/src/effects/transitions/penner.js)'s
		 * implementation.
		 * <p data-height="934" data-theme-id="0" data-slug-hash="wqObdO"
		 * data-default-tab="js,result" data-user="jeremyckahn" data-embed-version="2"
		 * data-pen-title="Shifty - Easing formula names" class="codepen">See the Pen <a
		 * href="https://codepen.io/jeremyckahn/pen/wqObdO/">Shifty - Easing formula
		 * names</a> by Jeremy Kahn (<a
		 * href="https://codepen.io/jeremyckahn">@jeremyckahn</a>) on <a
		 * href="https://codepen.io">CodePen</a>.</p>
		 * <script async
		 * src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
		 * @type {Object.<shifty.easingFunction>}
		 * @static
		 */

		/**
		 * @memberof Tweenable.formulas
		 * @type {shifty.easingFunction}
		 * @param {number} pos
		 * @returns {number}
		 */
		var linear = function linear(pos) {
		  return pos;
		};
		/**
		 * @memberof Tweenable.formulas
		 * @type {shifty.easingFunction}
		 * @param {number} pos
		 * @returns {number}
		 */

		var easeInQuad = function easeInQuad(pos) {
		  return Math.pow(pos, 2);
		};
		/**
		 * @memberof Tweenable.formulas
		 * @type {shifty.easingFunction}
		 * @param {number} pos
		 * @returns {number}
		 */

		var easeOutQuad = function easeOutQuad(pos) {
		  return -(Math.pow(pos - 1, 2) - 1);
		};
		/**
		 * @memberof Tweenable.formulas
		 * @type {shifty.easingFunction}
		 * @param {number} pos
		 * @returns {number}
		 */

		var easeInOutQuad = function easeInOutQuad(pos) {
		  return (pos /= 0.5) < 1 ? 0.5 * Math.pow(pos, 2) : -0.5 * ((pos -= 2) * pos - 2);
		};
		/**
		 * @memberof Tweenable.formulas
		 * @type {shifty.easingFunction}
		 * @param {number} pos
		 * @returns {number}
		 */

		var easeInCubic = function easeInCubic(pos) {
		  return Math.pow(pos, 3);
		};
		/**
		 * @memberof Tweenable.formulas
		 * @type {shifty.easingFunction}
		 * @param {number} pos
		 * @returns {number}
		 */

		var easeOutCubic = function easeOutCubic(pos) {
		  return Math.pow(pos - 1, 3) + 1;
		};
		/**
		 * @memberof Tweenable.formulas
		 * @type {shifty.easingFunction}
		 * @param {number} pos
		 * @returns {number}
		 */

		var easeInOutCubic = function easeInOutCubic(pos) {
		  return (pos /= 0.5) < 1 ? 0.5 * Math.pow(pos, 3) : 0.5 * (Math.pow(pos - 2, 3) + 2);
		};
		/**
		 * @memberof Tweenable.formulas
		 * @type {shifty.easingFunction}
		 * @param {number} pos
		 * @returns {number}
		 */

		var easeInQuart = function easeInQuart(pos) {
		  return Math.pow(pos, 4);
		};
		/**
		 * @memberof Tweenable.formulas
		 * @type {shifty.easingFunction}
		 * @param {number} pos
		 * @returns {number}
		 */

		var easeOutQuart = function easeOutQuart(pos) {
		  return -(Math.pow(pos - 1, 4) - 1);
		};
		/**
		 * @memberof Tweenable.formulas
		 * @type {shifty.easingFunction}
		 * @param {number} pos
		 * @returns {number}
		 */

		var easeInOutQuart = function easeInOutQuart(pos) {
		  return (pos /= 0.5) < 1 ? 0.5 * Math.pow(pos, 4) : -0.5 * ((pos -= 2) * Math.pow(pos, 3) - 2);
		};
		/**
		 * @memberof Tweenable.formulas
		 * @type {shifty.easingFunction}
		 * @param {number} pos
		 * @returns {number}
		 */

		var easeInQuint = function easeInQuint(pos) {
		  return Math.pow(pos, 5);
		};
		/**
		 * @memberof Tweenable.formulas
		 * @type {shifty.easingFunction}
		 * @param {number} pos
		 * @returns {number}
		 */

		var easeOutQuint = function easeOutQuint(pos) {
		  return Math.pow(pos - 1, 5) + 1;
		};
		/**
		 * @memberof Tweenable.formulas
		 * @type {shifty.easingFunction}
		 * @param {number} pos
		 * @returns {number}
		 */

		var easeInOutQuint = function easeInOutQuint(pos) {
		  return (pos /= 0.5) < 1 ? 0.5 * Math.pow(pos, 5) : 0.5 * (Math.pow(pos - 2, 5) + 2);
		};
		/**
		 * @memberof Tweenable.formulas
		 * @type {shifty.easingFunction}
		 * @param {number} pos
		 * @returns {number}
		 */

		var easeInSine = function easeInSine(pos) {
		  return -Math.cos(pos * (Math.PI / 2)) + 1;
		};
		/**
		 * @memberof Tweenable.formulas
		 * @type {shifty.easingFunction}
		 * @param {number} pos
		 * @returns {number}
		 */

		var easeOutSine = function easeOutSine(pos) {
		  return Math.sin(pos * (Math.PI / 2));
		};
		/**
		 * @memberof Tweenable.formulas
		 * @type {shifty.easingFunction}
		 * @param {number} pos
		 * @returns {number}
		 */

		var easeInOutSine = function easeInOutSine(pos) {
		  return -0.5 * (Math.cos(Math.PI * pos) - 1);
		};
		/**
		 * @memberof Tweenable.formulas
		 * @type {shifty.easingFunction}
		 * @param {number} pos
		 * @returns {number}
		 */

		var easeInExpo = function easeInExpo(pos) {
		  return pos === 0 ? 0 : Math.pow(2, 10 * (pos - 1));
		};
		/**
		 * @memberof Tweenable.formulas
		 * @type {shifty.easingFunction}
		 * @param {number} pos
		 * @returns {number}
		 */

		var easeOutExpo = function easeOutExpo(pos) {
		  return pos === 1 ? 1 : -Math.pow(2, -10 * pos) + 1;
		};
		/**
		 * @memberof Tweenable.formulas
		 * @type {shifty.easingFunction}
		 * @param {number} pos
		 * @returns {number}
		 */

		var easeInOutExpo = function easeInOutExpo(pos) {
		  if (pos === 0) {
		    return 0;
		  }

		  if (pos === 1) {
		    return 1;
		  }

		  if ((pos /= 0.5) < 1) {
		    return 0.5 * Math.pow(2, 10 * (pos - 1));
		  }

		  return 0.5 * (-Math.pow(2, -10 * --pos) + 2);
		};
		/**
		 * @memberof Tweenable.formulas
		 * @type {shifty.easingFunction}
		 * @param {number} pos
		 * @returns {number}
		 */

		var easeInCirc = function easeInCirc(pos) {
		  return -(Math.sqrt(1 - pos * pos) - 1);
		};
		/**
		 * @memberof Tweenable.formulas
		 * @type {shifty.easingFunction}
		 * @param {number} pos
		 * @returns {number}
		 */

		var easeOutCirc = function easeOutCirc(pos) {
		  return Math.sqrt(1 - Math.pow(pos - 1, 2));
		};
		/**
		 * @memberof Tweenable.formulas
		 * @type {shifty.easingFunction}
		 * @param {number} pos
		 * @returns {number}
		 */

		var easeInOutCirc = function easeInOutCirc(pos) {
		  return (pos /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - pos * pos) - 1) : 0.5 * (Math.sqrt(1 - (pos -= 2) * pos) + 1);
		};
		/**
		 * @memberof Tweenable.formulas
		 * @type {shifty.easingFunction}
		 * @param {number} pos
		 * @returns {number}
		 */

		var easeOutBounce = function easeOutBounce(pos) {
		  if (pos < 1 / 2.75) {
		    return 7.5625 * pos * pos;
		  } else if (pos < 2 / 2.75) {
		    return 7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75;
		  } else if (pos < 2.5 / 2.75) {
		    return 7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375;
		  } else {
		    return 7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375;
		  }
		};
		/**
		 * @memberof Tweenable.formulas
		 * @type {shifty.easingFunction}
		 * @param {number} pos
		 * @returns {number}
		 */

		var easeInBack = function easeInBack(pos) {
		  var s = 1.70158;
		  return pos * pos * ((s + 1) * pos - s);
		};
		/**
		 * @memberof Tweenable.formulas
		 * @type {shifty.easingFunction}
		 * @param {number} pos
		 * @returns {number}
		 */

		var easeOutBack = function easeOutBack(pos) {
		  var s = 1.70158;
		  return (pos = pos - 1) * pos * ((s + 1) * pos + s) + 1;
		};
		/**
		 * @memberof Tweenable.formulas
		 * @type {shifty.easingFunction}
		 * @param {number} pos
		 * @returns {number}
		 */

		var easeInOutBack = function easeInOutBack(pos) {
		  var s = 1.70158;

		  if ((pos /= 0.5) < 1) {
		    return 0.5 * (pos * pos * (((s *= 1.525) + 1) * pos - s));
		  }

		  return 0.5 * ((pos -= 2) * pos * (((s *= 1.525) + 1) * pos + s) + 2);
		};
		/**
		 * @memberof Tweenable.formulas
		 * @type {shifty.easingFunction}
		 * @param {number} pos
		 * @returns {number}
		 */

		var elastic = function elastic(pos) {
		  return -1 * Math.pow(4, -8 * pos) * Math.sin((pos * 6 - 1) * (2 * Math.PI) / 2) + 1;
		};
		/**
		 * @memberof Tweenable.formulas
		 * @type {shifty.easingFunction}
		 * @param {number} pos
		 * @returns {number}
		 */

		var swingFromTo = function swingFromTo(pos) {
		  var s = 1.70158;
		  return (pos /= 0.5) < 1 ? 0.5 * (pos * pos * (((s *= 1.525) + 1) * pos - s)) : 0.5 * ((pos -= 2) * pos * (((s *= 1.525) + 1) * pos + s) + 2);
		};
		/**
		 * @memberof Tweenable.formulas
		 * @type {shifty.easingFunction}
		 * @param {number} pos
		 * @returns {number}
		 */

		var swingFrom = function swingFrom(pos) {
		  var s = 1.70158;
		  return pos * pos * ((s + 1) * pos - s);
		};
		/**
		 * @memberof Tweenable.formulas
		 * @type {shifty.easingFunction}
		 * @param {number} pos
		 * @returns {number}
		 */

		var swingTo = function swingTo(pos) {
		  var s = 1.70158;
		  return (pos -= 1) * pos * ((s + 1) * pos + s) + 1;
		};
		/**
		 * @memberof Tweenable.formulas
		 * @type {shifty.easingFunction}
		 * @param {number} pos
		 * @returns {number}
		 */

		var bounce = function bounce(pos) {
		  if (pos < 1 / 2.75) {
		    return 7.5625 * pos * pos;
		  } else if (pos < 2 / 2.75) {
		    return 7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75;
		  } else if (pos < 2.5 / 2.75) {
		    return 7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375;
		  } else {
		    return 7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375;
		  }
		};
		/**
		 * @memberof Tweenable.formulas
		 * @type {shifty.easingFunction}
		 * @param {number} pos
		 * @returns {number}
		 */

		var bouncePast = function bouncePast(pos) {
		  if (pos < 1 / 2.75) {
		    return 7.5625 * pos * pos;
		  } else if (pos < 2 / 2.75) {
		    return 2 - (7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75);
		  } else if (pos < 2.5 / 2.75) {
		    return 2 - (7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375);
		  } else {
		    return 2 - (7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375);
		  }
		};
		/**
		 * @memberof Tweenable.formulas
		 * @type {shifty.easingFunction}
		 * @param {number} pos
		 * @returns {number}
		 */

		var easeFromTo = function easeFromTo(pos) {
		  return (pos /= 0.5) < 1 ? 0.5 * Math.pow(pos, 4) : -0.5 * ((pos -= 2) * Math.pow(pos, 3) - 2);
		};
		/**
		 * @memberof Tweenable.formulas
		 * @type {shifty.easingFunction}
		 * @param {number} pos
		 * @returns {number}
		 */

		var easeFrom = function easeFrom(pos) {
		  return Math.pow(pos, 4);
		};
		/**
		 * @memberof Tweenable.formulas
		 * @type {shifty.easingFunction}
		 * @param {number} pos
		 * @returns {number}
		 */

		var easeTo = function easeTo(pos) {
		  return Math.pow(pos, 0.25);
		};

		/** @typedef {import(".").shifty.easingFunction} shifty.easingFunction */

		/**
		 * The Bezier magic in this file is adapted/copied almost wholesale from
		 * [Scripty2](https://github.com/madrobby/scripty2/blob/master/src/effects/transitions/cubic-bezier.js),
		 * which was adapted from Apple code (which probably came from
		 * [here](http://opensource.apple.com/source/WebCore/WebCore-955.66/platform/graphics/UnitBezier.h)).
		 * Special thanks to Apple and Thomas Fuchs for much of this code.
		 */

		/**
		 *  Copyright (c) 2006 Apple Computer, Inc. All rights reserved.
		 *
		 *  Redistribution and use in source and binary forms, with or without
		 *  modification, are permitted provided that the following conditions are met:
		 *
		 *  1. Redistributions of source code must retain the above copyright notice,
		 *  this list of conditions and the following disclaimer.
		 *
		 *  2. Redistributions in binary form must reproduce the above copyright notice,
		 *  this list of conditions and the following disclaimer in the documentation
		 *  and/or other materials provided with the distribution.
		 *
		 *  3. Neither the name of the copyright holder(s) nor the names of any
		 *  contributors may be used to endorse or promote products derived from
		 *  this software without specific prior written permission.
		 *
		 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
		 *  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
		 *  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
		 *  ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
		 *  LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
		 *  CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
		 *  SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
		 *  INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
		 *  CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
		 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
		 *  POSSIBILITY OF SUCH DAMAGE.
		 */
		// port of webkit cubic bezier handling by http://www.netzgesta.de/dev/

		/**
		 * @param {number} t
		 * @param {number} p1x
		 * @param {number} p1y
		 * @param {number} p2x
		 * @param {number} p2y
		 * @param {number} duration
		 * @returns {Function}
		 * @private
		 */

		function cubicBezierAtTime(t, p1x, p1y, p2x, p2y, duration) {
		  var ax = 0,
		      bx = 0,
		      cx = 0,
		      ay = 0,
		      by = 0,
		      cy = 0;

		  var sampleCurveX = function sampleCurveX(t) {
		    return ((ax * t + bx) * t + cx) * t;
		  };

		  var sampleCurveY = function sampleCurveY(t) {
		    return ((ay * t + by) * t + cy) * t;
		  };

		  var sampleCurveDerivativeX = function sampleCurveDerivativeX(t) {
		    return (3 * ax * t + 2 * bx) * t + cx;
		  };

		  var solveEpsilon = function solveEpsilon(duration) {
		    return 1 / (200 * duration);
		  };

		  var fabs = function fabs(n) {
		    return n >= 0 ? n : 0 - n;
		  };

		  var solveCurveX = function solveCurveX(x, epsilon) {
		    var t0, t1, t2, x2, d2, i;

		    for (t2 = x, i = 0; i < 8; i++) {
		      x2 = sampleCurveX(t2) - x;

		      if (fabs(x2) < epsilon) {
		        return t2;
		      }

		      d2 = sampleCurveDerivativeX(t2);

		      if (fabs(d2) < 1e-6) {
		        break;
		      }

		      t2 = t2 - x2 / d2;
		    }

		    t0 = 0;
		    t1 = 1;
		    t2 = x;

		    if (t2 < t0) {
		      return t0;
		    }

		    if (t2 > t1) {
		      return t1;
		    }

		    while (t0 < t1) {
		      x2 = sampleCurveX(t2);

		      if (fabs(x2 - x) < epsilon) {
		        return t2;
		      }

		      if (x > x2) {
		        t0 = t2;
		      } else {
		        t1 = t2;
		      }

		      t2 = (t1 - t0) * 0.5 + t0;
		    }

		    return t2; // Failure.
		  };

		  var solve = function solve(x, epsilon) {
		    return sampleCurveY(solveCurveX(x, epsilon));
		  };

		  cx = 3 * p1x;
		  bx = 3 * (p2x - p1x) - cx;
		  ax = 1 - cx - bx;
		  cy = 3 * p1y;
		  by = 3 * (p2y - p1y) - cy;
		  ay = 1 - cy - by;
		  return solve(t, solveEpsilon(duration));
		} // End ported code

		/**
		 *  GetCubicBezierTransition(x1, y1, x2, y2) -> Function.
		 *
		 *  Generates a transition easing function that is compatible
		 *  with WebKit's CSS transitions `-webkit-transition-timing-function`
		 *  CSS property.
		 *
		 *  The W3C has more information about CSS3 transition timing functions:
		 *  http://www.w3.org/TR/css3-transitions/#transition-timing-function_tag
		 *
		 *  @param {number} [x1]
		 *  @param {number} [y1]
		 *  @param {number} [x2]
		 *  @param {number} [y2]
		 *  @return {Function}
		 */


		var getCubicBezierTransition = function getCubicBezierTransition() {
		  var x1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.25;
		  var y1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.25;
		  var x2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.75;
		  var y2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0.75;
		  return function (pos) {
		    return cubicBezierAtTime(pos, x1, y1, x2, y2, 1);
		  };
		};
		/**
		 * Create a Bezier easing function and attach it to {@link
		 * Tweenable.formulas}.  This function gives you total control over the
		 * easing curve.  Matthew Lein's [Ceaser](http://matthewlein.com/ceaser/) is a
		 * useful tool for visualizing the curves you can make with this function.
		 * @method shifty.setBezierFunction
		 * @param {string} name The name of the easing curve.  Overwrites the old
		 * easing function on {@link Tweenable.formulas} if it exists.
		 * @param {number} x1
		 * @param {number} y1
		 * @param {number} x2
		 * @param {number} y2
		 * @return {shifty.easingFunction} The {@link shifty.easingFunction} that was
		 * attached to {@link Tweenable.formulas}.
		 */

		var setBezierFunction = function setBezierFunction(name, x1, y1, x2, y2) {
		  var cubicBezierTransition = getCubicBezierTransition(x1, y1, x2, y2);
		  cubicBezierTransition.displayName = name;
		  cubicBezierTransition.x1 = x1;
		  cubicBezierTransition.y1 = y1;
		  cubicBezierTransition.x2 = x2;
		  cubicBezierTransition.y2 = y2;
		  return Tweenable.formulas[name] = cubicBezierTransition;
		};
		/**
		 * `delete` an easing function from {@link Tweenable.formulas}.  Be
		 * careful with this method, as it `delete`s whatever easing formula matches
		 * `name` (which means you can delete standard Shifty easing functions).
		 * @method shifty.unsetBezierFunction
		 * @param {string} name The name of the easing function to delete.
		 * @return {boolean} Whether or not the functions was `delete`d.
		 */

		var unsetBezierFunction = function unsetBezierFunction(name) {
		  return delete Tweenable.formulas[name];
		};
		var _Symbol$toStringTag;

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

		function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); return Constructor; }

		function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

		function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

		function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

		function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

		function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

		function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

		function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

		function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

		function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

		function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



		/** @typedef {import("./index").shifty.filter} shifty.filter */

		/** @typedef {import("./index").shifty.tweenConfig} shifty.tweenConfig */

		/** @typedef {import("./index").shifty.scheduleFunction} shifty.scheduleFunction */
		// CONSTANTS

		var DEFAULT_EASING = 'linear';
		var DEFAULT_DURATION = 500;
		var UPDATE_TIME = 1000 / 60;
		var root = typeof window !== 'undefined' ? window : commonjsGlobal;
		var AFTER_TWEEN = 'afterTween';
		var AFTER_TWEEN_END = 'afterTweenEnd';
		var BEFORE_TWEEN = 'beforeTween';
		var TWEEN_CREATED = 'tweenCreated';
		var TYPE_FUNCTION = 'function';
		var TYPE_STRING = 'string'; // requestAnimationFrame() shim by Paul Irish (modified for Shifty)
		// http://paulirish.com/2011/requestanimationframe-for-smart-animating/

		var scheduleFunction = root.requestAnimationFrame || root.webkitRequestAnimationFrame || root.oRequestAnimationFrame || root.msRequestAnimationFrame || root.mozCancelRequestAnimationFrame && root.mozRequestAnimationFrame || setTimeout;

		var noop = function noop() {};

		var listHead = null;
		var listTail = null;

		var formulas = _objectSpread({}, easing_functions_namespaceObject);
		/**
		 * Calculates the interpolated tween values of an Object for a given
		 * timestamp.
		 * @param {number} forPosition The position to compute the state for.
		 * @param {Object} currentState Current state properties.
		 * @param {Object} originalState: The original state properties the Object is
		 * tweening from.
		 * @param {Object} targetState: The destination state properties the Object
		 * is tweening to.
		 * @param {number} duration: The length of the tween in milliseconds.
		 * @param {number} timestamp: The UNIX epoch time at which the tween began.
		 * @param {Record<string, string|Function>} easing: This Object's keys must correspond
		 * to the keys in targetState.
		 * @returns {Object}
		 * @private
		 */


		var tweenProps = function tweenProps(forPosition, currentState, originalState, targetState, duration, timestamp, easing) {
		  var easedPosition;
		  var easingObjectProp;
		  var start;
		  var normalizedPosition = forPosition < timestamp ? 0 : (forPosition - timestamp) / duration;
		  var easingFn = null;
		  var hasOneEase = false;

		  if (easing && easing.call) {
		    hasOneEase = true;
		    easedPosition = easing(normalizedPosition);
		  }

		  for (var key in currentState) {
		    if (!hasOneEase) {
		      easingObjectProp = easing[key];
		      easingFn = easingObjectProp.call ? easingObjectProp : formulas[easingObjectProp];
		      easedPosition = easingFn(normalizedPosition);
		    }

		    start = originalState[key];
		    currentState[key] = start + (targetState[key] - start) * easedPosition;
		  }

		  return currentState;
		};

		var processTween = function processTween(tween, currentTime) {
		  var timestamp = tween._timestamp;
		  var currentState = tween._currentState;
		  var delay = tween._delay;

		  if (currentTime < timestamp + delay) {
		    return;
		  }

		  var duration = tween._duration;
		  var targetState = tween._targetState;
		  var endTime = timestamp + delay + duration;
		  var timeToCompute = currentTime > endTime ? endTime : currentTime;
		  tween._hasEnded = timeToCompute >= endTime;
		  var offset = duration - (endTime - timeToCompute);
		  var hasFilters = tween._filters.length > 0;

		  if (tween._hasEnded) {
		    tween._render(targetState, tween._data, offset);

		    return tween.stop(true);
		  }

		  if (hasFilters) {
		    tween._applyFilter(BEFORE_TWEEN);
		  } // If the animation has not yet reached the start point (e.g., there was
		  // delay that has not yet completed), just interpolate the starting
		  // position of the tween.


		  if (timeToCompute < timestamp + delay) {
		    timestamp = duration = timeToCompute = 1;
		  } else {
		    timestamp += delay;
		  }

		  tweenProps(timeToCompute, currentState, tween._originalState, targetState, duration, timestamp, tween._easing);

		  if (hasFilters) {
		    tween._applyFilter(AFTER_TWEEN);
		  }

		  tween._render(currentState, tween._data, offset);
		};
		/**
		 * Process all tweens currently managed by Shifty for the current tick. This
		 * does not perform any timing or update scheduling; it is the logic that is
		 * run *by* the scheduling functionality. Specifically, it computes the state
		 * and calls all of the relevant {@link shifty.tweenConfig} functions supplied
		 * to each of the tweens for the current point in time (as determined by {@link
		 * Tweenable.now}.
		 *
		 * This is a low-level API that won't be needed in the majority of situations.
		 * It is primarily useful as a hook for higher-level animation systems that are
		 * built on top of Shifty. If you need this function, it is likely you need to
		 * pass something like `() => {}` to {@link
		 * Tweenable.setScheduleFunction}, override {@link Tweenable.now}
		 * and manage the scheduling logic yourself.
		 *
		 * @method shifty.processTweens
		 * @see https://github.com/jeremyckahn/shifty/issues/109
		 */


		var processTweens = function processTweens() {
		  var nextTweenToProcess;
		  var currentTime = Tweenable.now();
		  var currentTween = listHead;

		  while (currentTween) {
		    nextTweenToProcess = currentTween._next;
		    processTween(currentTween, currentTime);
		    currentTween = nextTweenToProcess;
		  }
		};

		var getCurrentTime = Date.now || function () {
		  return +new Date();
		};

		var now;
		var heartbeatIsRunning = false;
		/**
		 * Determines whether or not a heartbeat tick should be scheduled. This is
		 * generally only useful for testing environments where Shifty's continuous
		 * heartbeat mechanism causes test runner issues.
		 *
		 * If you are using Jest, you'll want to put this in a global `afterAll` hook.
		 * If you don't already have a Jest setup file, follow the setup in [this
		 * StackOverflow post](https://stackoverflow.com/a/57647146), and then add this
		 * to it:
		 *
		 * ```
		 * import { shouldScheduleUpdate } from 'shifty'
		 *
		 * afterAll(() => {
		 *   shouldScheduleUpdate(false)
		 * })
		 * ```
		 *
		 * @method shifty.shouldScheduleUpdate
		 * @param {boolean} doScheduleUpdate
		 * @see https://github.com/jeremyckahn/shifty/issues/156
		 */

		var shouldScheduleUpdate = function shouldScheduleUpdate(doScheduleUpdate) {
		  if (doScheduleUpdate && heartbeatIsRunning) {
		    return;
		  }

		  heartbeatIsRunning = doScheduleUpdate;

		  if (doScheduleUpdate) {
		    scheduleUpdate();
		  }
		};
		/**
		 * Handles the update logic for one tick of a tween.
		 * @private
		 */

		var scheduleUpdate = function scheduleUpdate() {
		  now = getCurrentTime();

		  if (heartbeatIsRunning) {
		    scheduleFunction.call(root, scheduleUpdate, UPDATE_TIME);
		  }

		  processTweens();
		};
		/**
		 * Creates a usable easing Object from a string, a function or another easing
		 * Object.  If `easing` is an Object, then this function clones it and fills
		 * in the missing properties with `"linear"`.
		 *
		 * If the tween has only one easing across all properties, that function is
		 * returned directly.
		 * @param {Record<string, string|Function>} fromTweenParams
		 * @param {Object|string|Function|Array.<number>} [easing]
		 * @param {Object} [composedEasing] Reused composedEasing object (used internally)
		 * @return {Record<string, string|Function>|Function}
		 * @private
		 */

		var composeEasingObject = function composeEasingObject(fromTweenParams) {
		  var easing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_EASING;
		  var composedEasing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

		  if (Array.isArray(easing)) {
		    var cubicBezierTransition = getCubicBezierTransition.apply(void 0, _toConsumableArray(easing));
		    return cubicBezierTransition;
		  }

		  var typeofEasing = _typeof(easing);

		  if (formulas[easing]) {
		    return formulas[easing];
		  }

		  if (typeofEasing === TYPE_STRING || typeofEasing === TYPE_FUNCTION) {
		    for (var prop in fromTweenParams) {
		      composedEasing[prop] = easing;
		    }
		  } else {
		    for (var _prop in fromTweenParams) {
		      composedEasing[_prop] = easing[_prop] || DEFAULT_EASING;
		    }
		  }

		  return composedEasing;
		}; // Private declarations used below

		var remove = function (previousTween, nextTween) {
		  return function (tween) {
		    // Adapted from:
		    // https://github.com/trekhleb/javascript-algorithms/blob/7c9601df3e8ca4206d419ce50b88bd13ff39deb6/src/data-structures/doubly-linked-list/DoublyLinkedList.js#L73-L121
		    if (tween === listHead) {
		      listHead = tween._next;

		      if (listHead) {
		        listHead._previous = null;
		      } else {
		        listTail = null;
		      }
		    } else if (tween === listTail) {
		      listTail = tween._previous;

		      if (listTail) {
		        listTail._next = null;
		      } else {
		        listHead = null;
		      }
		    } else {
		      previousTween = tween._previous;
		      nextTween = tween._next;
		      previousTween._next = nextTween;
		      nextTween._previous = previousTween;
		    } // Clean up any references in case the tween is restarted later.


		    tween._previous = tween._next = null;
		  };
		}();

		var defaultPromiseCtor = typeof Promise === 'function' ? Promise : null;
		/**
		 * @class
		 * @implements {Promise<unknown>}
		 */

		_Symbol$toStringTag = Symbol.toStringTag;
		var Tweenable = /*#__PURE__*/function () {
		  //required for Promise implementation

		  /**
		   * @method Tweenable.now
		   * @static
		   * @returns {number} The current timestamp.
		   */

		  /**
		   * Set a custom schedule function.
		   *
		   * By default,
		   * [`requestAnimationFrame`](https://developer.mozilla.org/en-US/docs/Web/API/window.requestAnimationFrame)
		   * is used if available, otherwise
		   * [`setTimeout`](https://developer.mozilla.org/en-US/docs/Web/API/Window.setTimeout)
		   * is used.
		   * @method Tweenable.setScheduleFunction
		   * @param {shifty.scheduleFunction} fn The function to be
		   * used to schedule the next frame to be rendered.
		   * @return {shifty.scheduleFunction} The function that was set.
		   */

		  /**
		   * The {@link shifty.filter}s available for use.  These filters are
		   * automatically applied at tween-time by Shifty. You can define your own
		   * {@link shifty.filter}s and attach them to this object.
		   * @member Tweenable.filters
		   * @type {Record<string, shifty.filter>}
		   */

		  /**
		   * @param {Object} [initialState={}] The values that the initial tween should
		   * start at if a `from` value is not provided to {@link
		   * Tweenable#tween} or {@link Tweenable#setConfig}.
		   * @param {shifty.tweenConfig} [config] Configuration object to be passed to
		   * {@link Tweenable#setConfig}.
		   * @constructs Tweenable
		   * @memberof shifty
		   */
		  function Tweenable() {
		    var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
		    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

		    _classCallCheck(this, Tweenable);

		    _defineProperty(this, _Symbol$toStringTag, 'Promise');

		    /** @private */
		    this._config = {};
		    /** @private */

		    this._data = {};
		    /** @private */

		    this._delay = 0;
		    /** @private */

		    this._filters = [];
		    /** @private */

		    this._next = null;
		    /** @private */

		    this._previous = null;
		    /** @private */

		    this._timestamp = null;
		    /** @private */

		    this._hasEnded = false;
		    /** @private */

		    this._resolve = null;
		    /** @private */

		    this._reject = null;
		    /** @private */

		    this._currentState = initialState || {};
		    /** @private */

		    this._originalState = {};
		    /** @private */

		    this._targetState = {};
		    /** @private */

		    this._start = noop;
		    /** @private */

		    this._render = noop;
		    /** @private */

		    this._promiseCtor = defaultPromiseCtor; // To prevent unnecessary calls to setConfig do not set default
		    // configuration here.  Only set default configuration immediately before
		    // tweening if none has been set.

		    if (config) {
		      this.setConfig(config);
		    }
		  }
		  /**
		   * Applies a filter to Tweenable instance.
		   * @param {string} filterName The name of the filter to apply.
		   * @private
		   */


		  _createClass(Tweenable, [{
		    key: "_applyFilter",
		    value: function _applyFilter(filterName) {
		      for (var i = this._filters.length; i > 0; i--) {
		        var filterType = this._filters[i - i];
		        var filter = filterType[filterName];

		        if (filter) {
		          filter(this);
		        }
		      }
		    }
		    /**
		     * Configure and start a tween. If this {@link Tweenable}'s instance
		     * is already running, then it will stop playing the old tween and
		     * immediately play the new one.
		     * @method Tweenable#tween
		     * @param {shifty.tweenConfig} [config] Gets passed to {@link
		     * Tweenable#setConfig}.
		     * @return {Tweenable}
		     */

		  }, {
		    key: "tween",
		    value: function tween() {
		      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

		      if (this._isPlaying) {
		        this.stop();
		      }

		      if (config || !this._config) {
		        this.setConfig(config);
		      }
		      /** @private */


		      this._pausedAtTime = null;
		      this._timestamp = Tweenable.now();

		      this._start(this.get(), this._data);

		      if (this._delay) {
		        this._render(this._currentState, this._data, 0);
		      }

		      return this._resume(this._timestamp);
		    }
		    /**
		     * Configure a tween that will start at some point in the future. Aside from
		     * `delay`, `from`, and `to`, each configuration option will automatically
		     * default to the same option used in the preceding tween of this {@link
		     * Tweenable} instance.
		     * @method Tweenable#setConfig
		     * @param {shifty.tweenConfig} [config={}]
		     * @return {Tweenable}
		     */

		  }, {
		    key: "setConfig",
		    value: function setConfig() {
		      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
		      var _config = this._config;

		      for (var key in config) {
		        _config[key] = config[key];
		      } // Configuration options to reuse from previous tweens


		      var _config$promise = _config.promise,
		          promise = _config$promise === void 0 ? this._promiseCtor : _config$promise,
		          _config$start = _config.start,
		          start = _config$start === void 0 ? noop : _config$start,
		          finish = _config.finish,
		          _config$render = _config.render,
		          render = _config$render === void 0 ? this._config.step || noop : _config$render,
		          _config$step = _config.step,
		          step = _config$step === void 0 ? noop : _config$step; // Attach something to this Tweenable instance (e.g.: a DOM element, an
		      // object, a string, etc.);

		      this._data = _config.data || _config.attachment || this._data; // Init the internal state

		      /** @private */

		      this._isPlaying = false;
		      /** @private */

		      this._pausedAtTime = null;
		      /** @private */

		      this._scheduleId = null;
		      /** @private */

		      this._delay = config.delay || 0;
		      /** @private */

		      this._start = start;
		      /** @private */

		      this._render = render || step;
		      /** @private */

		      this._duration = _config.duration || DEFAULT_DURATION;
		      /** @private */

		      this._promiseCtor = promise;

		      if (finish) {
		        this._resolve = finish;
		      }

		      var from = config.from,
		          _config$to = config.to,
		          to = _config$to === void 0 ? {} : _config$to;
		      var _currentState = this._currentState,
		          _originalState = this._originalState,
		          _targetState = this._targetState;

		      for (var _key in from) {
		        _currentState[_key] = from[_key];
		      }

		      var anyPropsAreStrings = false;

		      for (var _key2 in _currentState) {
		        var currentProp = _currentState[_key2];

		        if (!anyPropsAreStrings && _typeof(currentProp) === TYPE_STRING) {
		          anyPropsAreStrings = true;
		        }

		        _originalState[_key2] = currentProp; // Ensure that there is always something to tween to.

		        _targetState[_key2] = to.hasOwnProperty(_key2) ? to[_key2] : currentProp;
		      }
		      /** @private */


		      this._easing = composeEasingObject(this._currentState, _config.easing, this._easing);
		      this._filters.length = 0;

		      if (anyPropsAreStrings) {
		        for (var _key3 in Tweenable.filters) {
		          if (Tweenable.filters[_key3].doesApply(this)) {
		            this._filters.push(Tweenable.filters[_key3]);
		          }
		        }

		        this._applyFilter(TWEEN_CREATED);
		      }

		      return this;
		    }
		    /**
		     * Overrides any `finish` function passed via a {@link shifty.tweenConfig}.
		     * @method Tweenable#then
		     * @param {function=} onFulfilled Receives {@link shifty.promisedData} as the
		     * first parameter.
		     * @param {function=} onRejected Receives {@link shifty.promisedData} as the
		     * first parameter.
		     * @return {Promise<Object>}
		     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
		     */

		  }, {
		    key: "then",
		    value: function then(onFulfilled, onRejected) {
		      var _this = this;

		      /** @private */
		      this._promise = new this._promiseCtor(function (resolve, reject) {
		        _this._resolve = resolve;
		        _this._reject = reject;
		      });
		      return this._promise.then(onFulfilled, onRejected);
		    }
		    /**
		     * @method Tweenable#catch
		     * @param {function} onRejected Receives {@link shifty.promisedData} as the
		     * first parameter.
		     * @return {Promise<Object>}
		     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch
		     */

		  }, {
		    key: "catch",
		    value: function _catch(onRejected) {
		      return this.then()["catch"](onRejected);
		    }
		    /**
		     * @method Tweenable#finally
		     * @param {function} onFinally
		     * @return {Promise<undefined>}
		     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally
		     */

		  }, {
		    key: "finally",
		    value: function _finally(onFinally) {
		      return this.then()["finally"](onFinally);
		    }
		    /**
		     * @method Tweenable#get
		     * @return {Object} The current state.
		     */

		  }, {
		    key: "get",
		    value: function get() {
		      return _objectSpread({}, this._currentState);
		    }
		    /**
		     * Set the current state.
		     * @method Tweenable#set
		     * @param {Object} state The state to set.
		     */

		  }, {
		    key: "set",
		    value: function set(state) {
		      this._currentState = state;
		    }
		    /**
		     * Pause a tween. Paused tweens can be resumed from the point at which they
		     * were paused. If a tween is not running, this is a no-op.
		     * @method Tweenable#pause
		     * @return {Tweenable}
		     */

		  }, {
		    key: "pause",
		    value: function pause() {
		      if (!this._isPlaying) {
		        return;
		      }

		      this._pausedAtTime = Tweenable.now();
		      this._isPlaying = false;
		      remove(this);
		      return this;
		    }
		    /**
		     * Resume a paused tween.
		     * @method Tweenable#resume
		     * @return {Tweenable}
		     */

		  }, {
		    key: "resume",
		    value: function resume() {
		      return this._resume();
		    }
		    /**
		     * @private
		     * @param {number} currentTime
		     * @returns {Tweenable}
		     */

		  }, {
		    key: "_resume",
		    value: function _resume() {
		      var currentTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Tweenable.now();

		      if (this._timestamp === null) {
		        return this.tween();
		      }

		      if (this._isPlaying) {
		        return this._promise;
		      }

		      if (this._pausedAtTime) {
		        this._timestamp += currentTime - this._pausedAtTime;
		        this._pausedAtTime = null;
		      }

		      this._isPlaying = true;

		      if (listHead === null) {
		        listHead = this;
		        listTail = this;
		      } else {
		        this._previous = listTail;
		        listTail._next = this;
		        listTail = this;
		      }

		      return this;
		    }
		    /**
		     * Move the state of the animation to a specific point in the tween's
		     * timeline.  If the animation is not running, this will cause {@link
		     * shifty.renderFunction} handlers to be called.
		     * @method Tweenable#seek
		     * @param {number} millisecond The millisecond of the animation to seek
		     * to.  This must not be less than `0`.
		     * @return {Tweenable}
		     */

		  }, {
		    key: "seek",
		    value: function seek(millisecond) {
		      millisecond = Math.max(millisecond, 0);
		      var currentTime = Tweenable.now();

		      if (this._timestamp + millisecond === 0) {
		        return this;
		      }

		      this._timestamp = currentTime - millisecond; // Make sure that any render handlers are run.

		      processTween(this, currentTime);
		      return this;
		    }
		    /**
		     * Stops a tween. If a tween is not running, this is a no-op. This method
		     * does not cancel the tween {@link external:Promise}. For that, use {@link
		     * Tweenable#cancel}.
		     * @param {boolean} [gotoEnd] If `false`, the tween just stops at its current
		     * state.  If `true`, the tweened object's values are instantly set to the
		     * target values.
		     * @method Tweenable#stop
		     * @return {Tweenable}
		     */

		  }, {
		    key: "stop",
		    value: function stop() {
		      var gotoEnd = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

		      if (!this._isPlaying) {
		        return this;
		      }

		      this._isPlaying = false;
		      remove(this);
		      var hasFilters = this._filters.length > 0;

		      if (gotoEnd) {
		        if (hasFilters) {
		          this._applyFilter(BEFORE_TWEEN);
		        }

		        tweenProps(1, this._currentState, this._originalState, this._targetState, 1, 0, this._easing);

		        if (hasFilters) {
		          this._applyFilter(AFTER_TWEEN);

		          this._applyFilter(AFTER_TWEEN_END);
		        }
		      }

		      if (this._resolve) {
		        this._resolve({
		          data: this._data,
		          state: this._currentState,
		          tweenable: this
		        });
		      }

		      this._resolve = null;
		      this._reject = null;
		      return this;
		    }
		    /**
		     * {@link Tweenable#stop}s a tween and also `reject`s its {@link
		     * external:Promise}. If a tween is not running, this is a no-op. Prevents
		     * calling any provided `finish` function.
		     * @param {boolean} [gotoEnd] Is propagated to {@link Tweenable#stop}.
		     * @method Tweenable#cancel
		     * @return {Tweenable}
		     * @see https://github.com/jeremyckahn/shifty/issues/122
		     */

		  }, {
		    key: "cancel",
		    value: function cancel() {
		      var gotoEnd = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
		      var _currentState = this._currentState,
		          _data = this._data,
		          _isPlaying = this._isPlaying;

		      if (!_isPlaying) {
		        return this;
		      }

		      if (this._reject) {
		        this._reject({
		          data: _data,
		          state: _currentState,
		          tweenable: this
		        });
		      }

		      this._resolve = null;
		      this._reject = null;
		      return this.stop(gotoEnd);
		    }
		    /**
		     * Whether or not a tween is running.
		     * @method Tweenable#isPlaying
		     * @return {boolean}
		     */

		  }, {
		    key: "isPlaying",
		    value: function isPlaying() {
		      return this._isPlaying;
		    }
		    /**
		     * Whether or not a tween has finished running.
		     * @method Tweenable#hasEnded
		     * @return {boolean}
		     */

		  }, {
		    key: "hasEnded",
		    value: function hasEnded() {
		      return this._hasEnded;
		    }
		    /**
		     * @method Tweenable#setScheduleFunction
		     * @param {shifty.scheduleFunction} scheduleFunction
		     * @deprecated Will be removed in favor of {@link Tweenable.setScheduleFunction} in 3.0.
		     */

		  }, {
		    key: "setScheduleFunction",
		    value: function setScheduleFunction(scheduleFunction) {
		      Tweenable.setScheduleFunction(scheduleFunction);
		    }
		    /**
		     * Get and optionally set the data that gets passed as `data` to {@link
		     * shifty.promisedData}, {@link shifty.startFunction} and {@link
		     * shifty.renderFunction}.
		     * @param {Object} [data]
		     * @method Tweenable#data
		     * @return {Object} The internally stored `data`.
		     */

		  }, {
		    key: "data",
		    value: function data() {
		      var _data2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

		      if (_data2) {
		        this._data = _objectSpread({}, _data2);
		      }

		      return this._data;
		    }
		    /**
		     * `delete` all "own" properties.  Call this when the {@link
		     * Tweenable} instance is no longer needed to free memory.
		     * @method Tweenable#dispose
		     */

		  }, {
		    key: "dispose",
		    value: function dispose() {
		      for (var prop in this) {
		        delete this[prop];
		      }
		    }
		  }]);

		  return Tweenable;
		}();
		/**
		 * @method shifty.tween
		 * @param {shifty.tweenConfig} [config={}]
		 * @description Standalone convenience method that functions identically to
		 * {@link Tweenable#tween}.  You can use this to create tweens without
		 * needing to set up a {@link Tweenable} instance.
		 *
		 * ```
		 * import { tween } from 'shifty';
		 *
		 * tween({ from: { x: 0 }, to: { x: 10 } }).then(
		 *   () => console.log('All done!')
		 * );
		 * ```
		 *
		 * @returns {Tweenable} A new {@link Tweenable} instance.
		 */

		_defineProperty(Tweenable, "now", function () {
		  return now;
		});

		_defineProperty(Tweenable, "setScheduleFunction", function (fn) {
		  return scheduleFunction = fn;
		});

		_defineProperty(Tweenable, "filters", {});

		_defineProperty(Tweenable, "formulas", formulas);

		function tween() {
		  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
		  var tweenable = new Tweenable();
		  tweenable.tween(config); // This is strictly a legacy shim from when this function returned a Promise.
		  // TODO: Remove this line in the next major version

		  tweenable.tweenable = tweenable;
		  return tweenable;
		}
		shouldScheduleUpdate(true);
		/** @typedef {import("./tweenable").Tweenable} Tweenable */
		var R_NUMBER_COMPONENT = /(\d|-|\.)/;
		var R_FORMAT_CHUNKS = /([^\-0-9.]+)/g;
		var R_UNFORMATTED_VALUES = /[0-9.-]+/g;

		var R_RGBA = function () {
		  var number = R_UNFORMATTED_VALUES.source;
		  var comma = /,\s*/.source;
		  return new RegExp("rgba?\\(".concat(number).concat(comma).concat(number).concat(comma).concat(number, "(").concat(comma).concat(number, ")?\\)"), 'g');
		}();

		var R_RGBA_PREFIX = /^.*\(/;
		var R_HEX = /#([0-9]|[a-f]){3,6}/gi;
		var VALUE_PLACEHOLDER = 'VAL'; // HELPERS

		/**
		 * @param {Array.number} rawValues
		 * @param {string} prefix
		 *
		 * @return {Array.<string>}
		 * @private
		 */

		var getFormatChunksFrom = function getFormatChunksFrom(rawValues, prefix) {
		  return rawValues.map(function (val, i) {
		    return "_".concat(prefix, "_").concat(i);
		  });
		};
		/**
		 * @param {string} formattedString
		 *
		 * @return {string}
		 * @private
		 */


		var getFormatStringFrom = function getFormatStringFrom(formattedString) {
		  var chunks = formattedString.match(R_FORMAT_CHUNKS);

		  if (!chunks) {
		    // chunks will be null if there were no tokens to parse in
		    // formattedString (for example, if formattedString is '2').  Coerce
		    // chunks to be useful here.
		    chunks = ['', '']; // If there is only one chunk, assume that the string is a number
		    // followed by a token...
		    // NOTE: This may be an unwise assumption.
		  } else if (chunks.length === 1 || // ...or if the string starts with a number component (".", "-", or a
		  // digit)...
		  formattedString.charAt(0).match(R_NUMBER_COMPONENT)) {
		    // ...prepend an empty string here to make sure that the formatted number
		    // is properly replaced by VALUE_PLACEHOLDER
		    chunks.unshift('');
		  }

		  return chunks.join(VALUE_PLACEHOLDER);
		};
		/**
		 * Convert a base-16 number to base-10.
		 *
		 * @param {number|string} hex The value to convert.
		 *
		 * @returns {number} The base-10 equivalent of `hex`.
		 * @private
		 */


		function hexToDec(hex) {
		  return parseInt(hex, 16);
		}
		/**
		 * Convert a hexadecimal string to an array with three items, one each for
		 * the red, blue, and green decimal values.
		 *
		 * @param {string} hex A hexadecimal string.
		 *
		 * @returns {Array.<number>} The converted Array of RGB values if `hex` is a
		 * valid string, or an Array of three 0's.
		 * @private
		 */


		var hexToRGBArray = function hexToRGBArray(hex) {
		  hex = hex.replace(/#/, ''); // If the string is a shorthand three digit hex notation, normalize it to
		  // the standard six digit notation

		  if (hex.length === 3) {
		    hex = hex.split('');
		    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
		  }

		  return [hexToDec(hex.substr(0, 2)), hexToDec(hex.substr(2, 2)), hexToDec(hex.substr(4, 2))];
		};
		/**
		 * @param {string} hexString
		 *
		 * @return {string}
		 * @private
		 */


		var convertHexToRGB = function convertHexToRGB(hexString) {
		  return "rgb(".concat(hexToRGBArray(hexString).join(','), ")");
		};
		/**
		 * TODO: Can this be rewritten to leverage String#replace more efficiently?
		 * Runs a filter operation on all chunks of a string that match a RegExp.
		 *
		 * @param {RegExp} pattern
		 * @param {string} unfilteredString
		 * @param {function(string)} filter
		 *
		 * @return {string}
		 * @private
		 */


		var filterStringChunks = function filterStringChunks(pattern, unfilteredString, filter) {
		  var patternMatches = unfilteredString.match(pattern);
		  var filteredString = unfilteredString.replace(pattern, VALUE_PLACEHOLDER);

		  if (patternMatches) {
		    patternMatches.forEach(function (match) {
		      return filteredString = filteredString.replace(VALUE_PLACEHOLDER, filter(match));
		    });
		  }

		  return filteredString;
		};
		/**
		 * @param {string} str
		 *
		 * @return {string}
		 * @private
		 */


		var sanitizeHexChunksToRGB = function sanitizeHexChunksToRGB(str) {
		  return filterStringChunks(R_HEX, str, convertHexToRGB);
		};
		/**
		 * Convert all hex color values within a string to an rgb string.
		 *
		 * @param {Object} stateObject
		 * @private
		 */


		var sanitizeObjectForHexProps = function sanitizeObjectForHexProps(stateObject) {
		  for (var prop in stateObject) {
		    var currentProp = stateObject[prop];

		    if (typeof currentProp === 'string' && currentProp.match(R_HEX)) {
		      stateObject[prop] = sanitizeHexChunksToRGB(currentProp);
		    }
		  }
		};
		/**
		 * @param {string} rgbChunk
		 *
		 * @return {string}
		 * @private
		 */


		var sanitizeRGBAChunk = function sanitizeRGBAChunk(rgbChunk) {
		  var rgbaRawValues = rgbChunk.match(R_UNFORMATTED_VALUES);
		  var rgbNumbers = rgbaRawValues.slice(0, 3).map(Math.floor);
		  var prefix = rgbChunk.match(R_RGBA_PREFIX)[0];

		  if (rgbaRawValues.length === 3) {
		    return "".concat(prefix).concat(rgbNumbers.join(','), ")");
		  } else if (rgbaRawValues.length === 4) {
		    return "".concat(prefix).concat(rgbNumbers.join(','), ",").concat(rgbaRawValues[3], ")");
		  }

		  throw new Error("Invalid rgbChunk: ".concat(rgbChunk));
		};
		/**
		 * Check for floating point values within rgb strings and round them.
		 *
		 * @param {string} formattedString
		 *
		 * @return {string}
		 * @private
		 */


		var sanitizeRGBChunks = function sanitizeRGBChunks(formattedString) {
		  return filterStringChunks(R_RGBA, formattedString, sanitizeRGBAChunk);
		};
		/**
		 * Note: It's the duty of the caller to convert the Array elements of the
		 * return value into numbers.  This is a performance optimization.
		 *
		 * @param {string} formattedString
		 *
		 * @return {Array.<string>|null}
		 * @private
		 */


		var getValuesFrom = function getValuesFrom(formattedString) {
		  return formattedString.match(R_UNFORMATTED_VALUES);
		};
		/**
		 * @param {Object} stateObject
		 *
		 * @return {Object} An Object of formatSignatures that correspond to
		 * the string properties of stateObject.
		 * @private
		 */


		var getFormatSignatures = function getFormatSignatures(stateObject) {
		  var signatures = {};

		  for (var propertyName in stateObject) {
		    var property = stateObject[propertyName];

		    if (typeof property === 'string') {
		      signatures[propertyName] = {
		        formatString: getFormatStringFrom(property),
		        chunkNames: getFormatChunksFrom(getValuesFrom(property), propertyName)
		      };
		    }
		  }

		  return signatures;
		};
		/**
		 * @param {Object} stateObject
		 * @param {Object} formatSignatures
		 * @private
		 */


		var expandFormattedProperties = function expandFormattedProperties(stateObject, formatSignatures) {
		  var _loop = function _loop(propertyName) {
		    getValuesFrom(stateObject[propertyName]).forEach(function (number, i) {
		      return stateObject[formatSignatures[propertyName].chunkNames[i]] = +number;
		    });
		    delete stateObject[propertyName];
		  };

		  for (var propertyName in formatSignatures) {
		    _loop(propertyName);
		  }
		};
		/**
		 * @param {Object} stateObject
		 * @param {Array.<string>} chunkNames
		 *
		 * @return {Object} The extracted value chunks.
		 * @private
		 */


		var extractPropertyChunks = function extractPropertyChunks(stateObject, chunkNames) {
		  var extractedValues = {};
		  chunkNames.forEach(function (chunkName) {
		    extractedValues[chunkName] = stateObject[chunkName];
		    delete stateObject[chunkName];
		  });
		  return extractedValues;
		};
		/**
		 * @param {Object} stateObject
		 * @param {Array.<string>} chunkNames
		 *
		 * @return {Array.<number>}
		 * @private
		 */


		var getValuesList = function getValuesList(stateObject, chunkNames) {
		  return chunkNames.map(function (chunkName) {
		    return stateObject[chunkName];
		  });
		};
		/**
		 * @param {string} formatString
		 * @param {Array.<number>} rawValues
		 *
		 * @return {string}
		 * @private
		 */


		var getFormattedValues = function getFormattedValues(formatString, rawValues) {
		  rawValues.forEach(function (rawValue) {
		    return formatString = formatString.replace(VALUE_PLACEHOLDER, +rawValue.toFixed(4));
		  });
		  return formatString;
		};
		/**
		 * @param {Object} stateObject
		 * @param {Object} formatSignatures
		 * @private
		 */


		var collapseFormattedProperties = function collapseFormattedProperties(stateObject, formatSignatures) {
		  for (var prop in formatSignatures) {
		    var _formatSignatures$pro = formatSignatures[prop],
		        chunkNames = _formatSignatures$pro.chunkNames,
		        formatString = _formatSignatures$pro.formatString;
		    var currentProp = getFormattedValues(formatString, getValuesList(extractPropertyChunks(stateObject, chunkNames), chunkNames));
		    stateObject[prop] = sanitizeRGBChunks(currentProp);
		  }
		};
		/**
		 * @param {Object} easingObject
		 * @param {Object} tokenData
		 * @private
		 */


		var expandEasingObject = function expandEasingObject(easingObject, tokenData) {
		  var _loop2 = function _loop2(prop) {
		    var chunkNames = tokenData[prop].chunkNames;
		    var easing = easingObject[prop];

		    if (typeof easing === 'string') {
		      var easingNames = easing.split(' ');
		      var defaultEasing = easingNames[easingNames.length - 1];
		      chunkNames.forEach(function (chunkName, i) {
		        return easingObject[chunkName] = easingNames[i] || defaultEasing;
		      });
		    } else {
		      // easing is a function
		      chunkNames.forEach(function (chunkName) {
		        return easingObject[chunkName] = easing;
		      });
		    }

		    delete easingObject[prop];
		  };

		  for (var prop in tokenData) {
		    _loop2(prop);
		  }
		};
		/**
		 * @param {Object} easingObject
		 * @param {Object} tokenData
		 * @private
		 */


		var collapseEasingObject = function collapseEasingObject(easingObject, tokenData) {
		  for (var prop in tokenData) {
		    var chunkNames = tokenData[prop].chunkNames;
		    var firstEasing = easingObject[chunkNames[0]];

		    if (typeof firstEasing === 'string') {
		      easingObject[prop] = chunkNames.map(function (chunkName) {
		        var easingName = easingObject[chunkName];
		        delete easingObject[chunkName];
		        return easingName;
		      }).join(' ');
		    } else {
		      // firstEasing is a function
		      easingObject[prop] = firstEasing;
		    }
		  }
		};
		/**
		 * @memberof Tweenable.filters.token
		 * @param {Tweenable} tweenable
		 * @returns {boolean}
		 */


		var doesApply = function doesApply(tweenable) {
		  for (var key in tweenable._currentState) {
		    if (typeof tweenable._currentState[key] === 'string') {
		      return true;
		    }
		  }

		  return false;
		};
		/**
		 * @memberof Tweenable.filters.token
		 * @param {Tweenable} tweenable
		 */

		function tweenCreated(tweenable) {
		  var _currentState = tweenable._currentState,
		      _originalState = tweenable._originalState,
		      _targetState = tweenable._targetState;
		  [_currentState, _originalState, _targetState].forEach(sanitizeObjectForHexProps);
		  tweenable._tokenData = getFormatSignatures(_currentState);
		}
		/**
		 * @memberof Tweenable.filters.token
		 * @param {Tweenable} tweenable
		 */

		function beforeTween(tweenable) {
		  var _currentState = tweenable._currentState,
		      _originalState = tweenable._originalState,
		      _targetState = tweenable._targetState,
		      _easing = tweenable._easing,
		      _tokenData = tweenable._tokenData;
		  expandEasingObject(_easing, _tokenData);
		  [_currentState, _originalState, _targetState].forEach(function (state) {
		    return expandFormattedProperties(state, _tokenData);
		  });
		}
		/**
		 * @memberof Tweenable.filters.token
		 * @param {Tweenable} tweenable
		 */

		function afterTween(tweenable) {
		  var _currentState = tweenable._currentState,
		      _originalState = tweenable._originalState,
		      _targetState = tweenable._targetState,
		      _easing = tweenable._easing,
		      _tokenData = tweenable._tokenData;
		  [_currentState, _originalState, _targetState].forEach(function (state) {
		    return collapseFormattedProperties(state, _tokenData);
		  });
		  collapseEasingObject(_easing, _tokenData);
		}
		function interpolate_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

		function interpolate_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { interpolate_ownKeys(Object(source), true).forEach(function (key) { interpolate_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { interpolate_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

		function interpolate_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


		/** @typedef {import("./index").shifty.easingFunction} shifty.easingFunction */
		// Fake a Tweenable and patch some internals.  This approach allows us to
		// skip uneccessary processing and object recreation, cutting down on garbage
		// collection pauses.

		var mockTweenable = new Tweenable();
		var filters = Tweenable.filters;
		/**
		 * Compute the midpoint of two Objects.  This method effectively calculates a
		 * specific frame of animation that {@link Tweenable#tween} does many times
		 * over the course of a full tween.
		 *
		 * ```
		 * import { interpolate } from 'shifty';
		 *
		 * const interpolatedValues = interpolate({
		 *     width: '100px',
		 *     opacity: 0,
		 *     color: '#fff'
		 *   }, {
		 *     width: '200px',
		 *     opacity: 1,
		 *     color: '#000'
		 *   },
		 *   0.5
		 * );
		 *
		 * console.log(interpolatedValues); // Logs: {opacity: 0.5, width: "150px", color: "rgb(127,127,127)"}
		 * ```
		 *
		 * @method shifty.interpolate
		 * @template T
		 * @param {T} from The starting values to tween from.
		 * @param {T} to The ending values to tween to.
		 * @param {number} position The normalized position value (between `0.0` and
		 * `1.0`) to interpolate the values between `from` and `to` for.  `from`
		 * represents `0` and `to` represents `1`.
		 * @param {Record<string, string | shifty.easingFunction> | string | shifty.easingFunction} easing
		 * The easing curve(s) to calculate the midpoint against.  You can
		 * reference any easing function attached to {@link Tweenable.formulas},
		 * or provide the {@link shifty.easingFunction}(s) directly.  If omitted, this
		 * defaults to "linear".
		 * @param {number} [delay=0] Optional delay to pad the beginning of the
		 * interpolated tween with.  This increases the range of `position` from (`0`
		 * through `1`) to (`0` through `1 + delay`).  So, a delay of `0.5` would
		 * increase all valid values of `position` to numbers between `0` and `1.5`.
		 * @return {T}
		 */

		var interpolate = function interpolate(from, to, position, easing) {
		  var delay = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

		  var current = interpolate_objectSpread({}, from);

		  var easingObject = composeEasingObject(from, easing);
		  mockTweenable._filters.length = 0;
		  mockTweenable.set({});
		  mockTweenable._currentState = current;
		  mockTweenable._originalState = from;
		  mockTweenable._targetState = to;
		  mockTweenable._easing = easingObject;

		  for (var name in filters) {
		    if (filters[name].doesApply(mockTweenable)) {
		      mockTweenable._filters.push(filters[name]);
		    }
		  } // Any defined value transformation must be applied


		  mockTweenable._applyFilter('tweenCreated');

		  mockTweenable._applyFilter('beforeTween');

		  var interpolatedValues = tweenProps(position, current, from, to, 1, delay, easingObject); // Transform data in interpolatedValues back into its original format

		  mockTweenable._applyFilter('afterTween');

		  return interpolatedValues;
		};
		function scene_toConsumableArray(arr) { return scene_arrayWithoutHoles(arr) || scene_iterableToArray(arr) || scene_unsupportedIterableToArray(arr) || scene_nonIterableSpread(); }

		function scene_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

		function scene_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return scene_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return scene_arrayLikeToArray(o, minLen); }

		function scene_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

		function scene_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return scene_arrayLikeToArray(arr); }

		function scene_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

		function scene_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function scene_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

		function scene_createClass(Constructor, protoProps, staticProps) { if (protoProps) scene_defineProperties(Constructor.prototype, protoProps); return Constructor; }

		function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

		var _tweenables = new WeakMap();

		/** @typedef {import("./tweenable").Tweenable} Tweenable */
		var Scene = /*#__PURE__*/function () {
		  /**
		   * The {@link Scene} class provides a way to control groups of {@link
		   * Tweenable}s. It is lightweight, minimalistic, and meant to provide
		   * performant {@link Tweenable} batch control that users of Shifty
		   * might otherwise have to implement themselves. It is **not** a robust
		   * timeline solution, and it does **not** provide utilities for sophisticated
		   * animation sequencing or orchestration. If that is what you need for your
		   * project, consider using a more robust tool such as
		   * [Rekapi](http://jeremyckahn.github.io/rekapi/doc/) (a timeline layer built
		   * on top of Shifty).
		   *
		   * Please be aware that {@link Scene} does **not** perform any
		   * automatic cleanup. If you want to remove a {@link Tweenable} from a
		   * {@link Scene}, you must do so explicitly with either {@link
		   * Scene#remove} or {@link Scene#empty}.
		   *
		   * <p class="codepen" data-height="677" data-theme-id="0" data-default-tab="js,result" data-user="jeremyckahn" data-slug-hash="qvZKbe" style="height: 677px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Shifty Scene Demo">
		   * <span>See the Pen <a href="https://codepen.io/jeremyckahn/pen/qvZKbe/">
		   * Shifty Scene Demo</a> by Jeremy Kahn (<a href="https://codepen.io/jeremyckahn">@jeremyckahn</a>)
		   * on <a href="https://codepen.io">CodePen</a>.</span>
		   * </p>
		   * <script async src="https://static.codepen.io/assets/embed/ei.js"></script>
		   * @param {...Tweenable} tweenables
		   * @see https://codepen.io/jeremyckahn/pen/qvZKbe
		   * @constructs Scene
		   * @memberof shifty
		   */
		  function Scene() {
		    scene_classCallCheck(this, Scene);

		    _tweenables.set(this, {
		      writable: true,
		      value: []
		    });

		    for (var _len = arguments.length, tweenables = new Array(_len), _key = 0; _key < _len; _key++) {
		      tweenables[_key] = arguments[_key];
		    }

		    tweenables.forEach(this.add.bind(this));
		  }
		  /**
		   * A copy of the internal {@link Tweenable}s array.
		   * @member Scene#tweenables
		   * @type {Array.<Tweenable>}
		   */


		  scene_createClass(Scene, [{
		    key: "add",

		    /**
		     * Add a {@link Tweenable} to be controlled by this {@link
		     * Scene}.
		     * @method Scene#add
		     * @param {Tweenable} tweenable
		     * @return {Tweenable} The {@link Tweenable} that was added.
		     */
		    value: function add(tweenable) {
		      _classPrivateFieldGet(this, _tweenables).push(tweenable);

		      return tweenable;
		    }
		    /**
		     * Remove a {@link Tweenable} that is controlled by this {@link
		     * Scene}.
		     * @method Scene#remove
		     * @param {Tweenable} tweenable
		     * @return {Tweenable} The {@link Tweenable} that was removed.
		     */

		  }, {
		    key: "remove",
		    value: function remove(tweenable) {
		      var index = _classPrivateFieldGet(this, _tweenables).indexOf(tweenable);

		      if (~index) {
		        _classPrivateFieldGet(this, _tweenables).splice(index, 1);
		      }

		      return tweenable;
		    }
		    /**
		     * [Remove]{@link Scene#remove} all {@link Tweenable}s in this {@link
		     * Scene}.
		     * @method Scene#empty
		     * @return {Array.<Tweenable>} The {@link Tweenable}s that were
		     * removed.
		     */

		  }, {
		    key: "empty",
		    value: function empty() {
		      // Deliberate of the tweenables getter here to create a temporary array
		      return this.tweenables.map(this.remove.bind(this));
		    }
		    /**
		     * Is `true` if any {@link Tweenable} in this {@link Scene} is
		     * playing.
		     * @method Scene#isPlaying
		     * @return {boolean}
		     */

		  }, {
		    key: "isPlaying",
		    value: function isPlaying() {
		      return _classPrivateFieldGet(this, _tweenables).some(function (tweenable) {
		        return tweenable.isPlaying();
		      });
		    }
		    /**
		     * Play all {@link Tweenable}s from their beginning.
		     * @method Scene#play
		     * @return {Scene}
		     */

		  }, {
		    key: "play",
		    value: function play() {
		      _classPrivateFieldGet(this, _tweenables).forEach(function (tweenable) {
		        return tweenable.tween();
		      });

		      return this;
		    }
		    /**
		     * {@link Tweenable#pause} all {@link Tweenable}s in this
		     * {@link Scene}.
		     * @method Scene#pause
		     * @return {Scene}
		     */

		  }, {
		    key: "pause",
		    value: function pause() {
		      _classPrivateFieldGet(this, _tweenables).forEach(function (tweenable) {
		        return tweenable.pause();
		      });

		      return this;
		    }
		    /**
		     * {@link Tweenable#resume} all paused {@link Tweenable}s.
		     * @method Scene#resume
		     * @return {Scene}
		     */

		  }, {
		    key: "resume",
		    value: function resume() {
		      this.playingTweenables.forEach(function (tweenable) {
		        return tweenable.resume();
		      });
		      return this;
		    }
		    /**
		     * {@link Tweenable#stop} all {@link Tweenable}s in this {@link
		     * Scene}.
		     * @method Scene#stop
		     * @param {boolean} [gotoEnd]
		     * @return {Scene}
		     */

		  }, {
		    key: "stop",
		    value: function stop(gotoEnd) {
		      _classPrivateFieldGet(this, _tweenables).forEach(function (tweenable) {
		        return tweenable.stop(gotoEnd);
		      });

		      return this;
		    }
		  }, {
		    key: "tweenables",
		    get: function get() {
		      return scene_toConsumableArray(_classPrivateFieldGet(this, _tweenables));
		    }
		    /**
		     * A list of {@link Tweenable}s in the scene that have not yet ended (playing
		     * or not).
		     * @member Scene#playingTweenables
		     * @type {Array.<Tweenable>}
		     */

		  }, {
		    key: "playingTweenables",
		    get: function get() {
		      return _classPrivateFieldGet(this, _tweenables).filter(function (tweenable) {
		        return !tweenable.hasEnded();
		      });
		    }
		    /**
		     * The {@link external:Promise}s for all {@link Tweenable}s in this
		     * {@link Scene} that have been configured with {@link
		     * Tweenable#setConfig}. Note that each call of {@link
		     * Scene#play} or {@link Scene#pause} creates new {@link
		     * external:Promise}s:
		     *
		     *     const scene = new Scene(new Tweenable());
		     *     scene.play();
		     *
		     *     Promise.all(scene.promises).then(() =>
		     *       // Plays the scene again upon completion, but a new promise is
		     *       // created so this line only runs once.
		     *       scene.play()
		     *     );
		     *
		     * @member Scene#promises
		     * @type {Array.<Promise<any>>}
		     */

		  }, {
		    key: "promises",
		    get: function get() {
		      return _classPrivateFieldGet(this, _tweenables).map(function (tweenable) {
		        return tweenable.then();
		      });
		    }
		  }]);

		  return Scene;
		}();
		/**
		 * @namespace shifty
		 */


		Tweenable.filters.token = token_namespaceObject;




		/**
		 * @external Promise
		 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise}
		 */

		/**
		 * @external thenable
		 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then}
		 */

		/**
		 * @callback shifty.easingFunction
		 * @param {number} position The normalized (0-1) position of the tween.
		 * @return {number} The curve-adjusted value.
		 */

		/**
		 * @callback shifty.startFunction
		 * @param {Object} state The current state of the tween.
		 * @param {Object|undefined} [data] User-defined data provided via a {@link
		 * shifty.tweenConfig}.
		 * @returns {void}
		 */

		/**
		 * @callback shifty.finishFunction
		 * @param {shifty.promisedData} promisedData
		 * @returns {void}
		 */

		/**
		 * Gets called for every tick of the tween.  This function is not called on the
		 * final tick of the animation.
		 * @callback shifty.renderFunction
		 * @param {Object} state The current state of the tween.
		 * @param {Object|undefined} data User-defined data provided via a {@link
		 * shifty.tweenConfig}.
		 * @param {number} timeElapsed The time elapsed since the start of the tween.
		 * @returns {void}
		 */

		/**
		 * @callback shifty.scheduleFunction
		 * @param {Function} callback
		 * @param {number} timeout
		 * @returns {void}
		 */

		/**
		 * @typedef {Object} shifty.tweenConfig
		 * @property {Object} [from] Starting position.  If omitted, {@link
		 * Tweenable#get} is used.
		 * @property {Object} [to] Ending position.  The keys of this Object should
		 * match those of `to`.
		 * @property {number} [duration] How many milliseconds to animate for.
		 * @property {number} [delay] How many milliseconds to wait before starting the
		 * tween.
		 * @property {shifty.startFunction} [start] Executes when the tween begins.
		 * @property {shifty.finishFunction} [finish] Executes when the tween
		 * completes. This will get overridden by {@link Tweenable#then} if that
		 * is called, and it will not fire if {@link Tweenable#cancel} is
		 * called.
		 * @property {shifty.renderFunction} [render] Executes on every tick. Shifty
		 * assumes a [retained mode](https://en.wikipedia.org/wiki/Retained_mode)
		 * rendering environment, which in practice means that `render` only gets
		 * called when the tween state changes. Importantly, this means that `render`
		 * is _not_ called when a tween is not animating (for instance, when it is
		 * paused or waiting to start via the `delay` option). This works naturally
		 * with DOM environments, but you may need to account for this design in more
		 * custom environments such as `<canvas>`.
		 *
		 * Legacy property name: `step`.
		 * @property {string|shifty.easingFunction|Object<string|shifty.easingFunction>|Array.<number>} [easing]
		 * - `string`: Name of the {@link Tweenable.formulas} to apply to all
		 *   properties of the tween.
		 * - {@link shifty.easingFunction}: A custom function that computes the rendered
		 *   position of the tween for the given normalized position of the tween.
		 * - `Object`: Keys are tween property names. Values are the {@link
		 *   Tweenable.formulas} to be applied to each tween property, or a {@link
		 *   shifty.easingFunction}. Any tween properties not included in the `Object`
		 *   default to `'linear'`.
		 * - `Array.<number>`: The array must contain four `number` values that
		 *   correspond to the `[x1, y1, x2, y2]` values of a [Bezier
		 * curve](https://cubic-bezier.com/).
		 *
		 * You can learn more about this in the {@tutorial
		 * easing-function-in-depth} tutorial.
		 * @property {Object} [data] Data that is passed to {@link
		 * shifty.startFunction}, {@link shifty.renderFunction}, and {@link
		 * shifty.promisedData}. Legacy property name: `attachment`.
		 * @property {Function} [promise] Promise constructor for when you want
		 * to use Promise library or polyfill Promises in unsupported environments.
		 */

		/**
		 * @typedef {Object} shifty.promisedData
		 * @property {Object} state The current state of the tween.
		 * @property {Object} data The `data` Object that the tween was configured with.
		 * @property {Tweenable} tweenable The {@link Tweenable} instance to
		 * which the tween belonged.
		 */

		/**
		 * Is called when a tween is created to determine if a filter is needed.
		 * Filters are only added to a tween when it is created so that they are not
		 * unnecessarily processed if they don't apply during an update tick.
		 * @callback shifty.doesApplyFilter
		 * @param {Tweenable} tweenable The {@link Tweenable} instance.
		 * @return {boolean}
		 */

		/**
		 * Is called when a tween is created.  This should perform any setup needed by
		 * subsequent per-tick calls to {@link shifty.beforeTween} and {@link
		 * shifty.afterTween}.
		 * @callback shifty.tweenCreatedFilter
		 * @param {Tweenable} tweenable The {@link Tweenable} instance.
		 * @returns {void}
		 */

		/**
		 * Is called right before a tween is processed in a tick.
		 * @callback shifty.beforeTweenFilter
		 * @param {Tweenable} tweenable The {@link Tweenable} instance.
		 * @returns {void}
		 */

		/**
		 * Is called right after a tween is processed in a tick.
		 * @callback shifty.afterTweenFilter
		 * @param {Tweenable} tweenable The {@link Tweenable} instance.
		 * @returns {void}
		 */

		/**
		 * An Object that contains functions that are called at key points in a tween's
		 * lifecycle.  Shifty can only process `Number`s internally, but filters can
		 * expand support for any type of data.  This is the mechanism that powers
		 * [string interpolation]{@tutorial string-interpolation}.
		 * @typedef {Object} shifty.filter
		 * @property {shifty.doesApplyFilter} doesApply Is called when a tween is
		 * created.
		 * @property {shifty.tweenCreatedFilter} tweenCreated Is called when a tween is
		 * created.
		 * @property {shifty.beforeTweenFilter} beforeTween Is called right before a
		 * tween starts.
		 * @property {shifty.afterTweenFilter} afterTween Is called right after a tween
		 * ends.
		 */

		/***/ })

		/******/ 	});
		/************************************************************************/
		/******/ 	// The module cache
		/******/ 	var __webpack_module_cache__ = {};
		/******/ 	
		/******/ 	// The require function
		/******/ 	function __webpack_require__(moduleId) {
		/******/ 		// Check if module is in cache
		/******/ 		if(__webpack_module_cache__[moduleId]) {
		/******/ 			return __webpack_module_cache__[moduleId].exports;
		/******/ 		}
		/******/ 		// Create a new module (and put it into the cache)
		/******/ 		var module = __webpack_module_cache__[moduleId] = {
		/******/ 			// no module.id needed
		/******/ 			// no module.loaded needed
		/******/ 			exports: {}
		/******/ 		};
		/******/ 	
		/******/ 		// Execute the module function
		/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
		/******/ 	
		/******/ 		// Return the exports of the module
		/******/ 		return module.exports;
		/******/ 	}
		/******/ 	
		/************************************************************************/
		/******/ 	/* webpack/runtime/define property getters */
		/******/ 	(() => {
		/******/ 		// define getter functions for harmony exports
		/******/ 		__webpack_require__.d = (exports, definition) => {
		/******/ 			for(var key in definition) {
		/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
		/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
		/******/ 				}
		/******/ 			}
		/******/ 		};
		/******/ 	})();
		/******/ 	
		/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
		/******/ 	(() => {
		/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
		/******/ 	})();
		/******/ 	
		/******/ 	/* webpack/runtime/make namespace object */
		/******/ 	(() => {
		/******/ 		// define __esModule on exports
		/******/ 		__webpack_require__.r = (exports) => {
		/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
		/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
		/******/ 			}
		/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
		/******/ 		};
		/******/ 	})();
		/******/ 	
		/************************************************************************/
		/******/ 	// module exports must be returned from runtime so entry inlining is disabled
		/******/ 	// startup
		/******/ 	// Load entry module and return exports
		/******/ 	return __webpack_require__(720);
		/******/ })()
		;
		});
		
	} (shifty_node));
	return shifty_node.exports;
}

var lodash_merge = {exports: {}};

/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
lodash_merge.exports;

var hasRequiredLodash_merge;

function requireLodash_merge () {
	if (hasRequiredLodash_merge) return lodash_merge.exports;
	hasRequiredLodash_merge = 1;
	(function (module, exports) {
		/** Used as the size to enable large array optimizations. */
		var LARGE_ARRAY_SIZE = 200;

		/** Used to stand-in for `undefined` hash values. */
		var HASH_UNDEFINED = '__lodash_hash_undefined__';

		/** Used to detect hot functions by number of calls within a span of milliseconds. */
		var HOT_COUNT = 800,
		    HOT_SPAN = 16;

		/** Used as references for various `Number` constants. */
		var MAX_SAFE_INTEGER = 9007199254740991;

		/** `Object#toString` result references. */
		var argsTag = '[object Arguments]',
		    arrayTag = '[object Array]',
		    asyncTag = '[object AsyncFunction]',
		    boolTag = '[object Boolean]',
		    dateTag = '[object Date]',
		    errorTag = '[object Error]',
		    funcTag = '[object Function]',
		    genTag = '[object GeneratorFunction]',
		    mapTag = '[object Map]',
		    numberTag = '[object Number]',
		    nullTag = '[object Null]',
		    objectTag = '[object Object]',
		    proxyTag = '[object Proxy]',
		    regexpTag = '[object RegExp]',
		    setTag = '[object Set]',
		    stringTag = '[object String]',
		    undefinedTag = '[object Undefined]',
		    weakMapTag = '[object WeakMap]';

		var arrayBufferTag = '[object ArrayBuffer]',
		    dataViewTag = '[object DataView]',
		    float32Tag = '[object Float32Array]',
		    float64Tag = '[object Float64Array]',
		    int8Tag = '[object Int8Array]',
		    int16Tag = '[object Int16Array]',
		    int32Tag = '[object Int32Array]',
		    uint8Tag = '[object Uint8Array]',
		    uint8ClampedTag = '[object Uint8ClampedArray]',
		    uint16Tag = '[object Uint16Array]',
		    uint32Tag = '[object Uint32Array]';

		/**
		 * Used to match `RegExp`
		 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
		 */
		var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

		/** Used to detect host constructors (Safari). */
		var reIsHostCtor = /^\[object .+?Constructor\]$/;

		/** Used to detect unsigned integer values. */
		var reIsUint = /^(?:0|[1-9]\d*)$/;

		/** Used to identify `toStringTag` values of typed arrays. */
		var typedArrayTags = {};
		typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
		typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
		typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
		typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
		typedArrayTags[uint32Tag] = true;
		typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
		typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
		typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
		typedArrayTags[errorTag] = typedArrayTags[funcTag] =
		typedArrayTags[mapTag] = typedArrayTags[numberTag] =
		typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
		typedArrayTags[setTag] = typedArrayTags[stringTag] =
		typedArrayTags[weakMapTag] = false;

		/** Detect free variable `global` from Node.js. */
		var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

		/** Detect free variable `self`. */
		var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

		/** Used as a reference to the global object. */
		var root = freeGlobal || freeSelf || Function('return this')();

		/** Detect free variable `exports`. */
		var freeExports = exports && !exports.nodeType && exports;

		/** Detect free variable `module`. */
		var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

		/** Detect the popular CommonJS extension `module.exports`. */
		var moduleExports = freeModule && freeModule.exports === freeExports;

		/** Detect free variable `process` from Node.js. */
		var freeProcess = moduleExports && freeGlobal.process;

		/** Used to access faster Node.js helpers. */
		var nodeUtil = (function() {
		  try {
		    // Use `util.types` for Node.js 10+.
		    var types = freeModule && freeModule.require && freeModule.require('util').types;

		    if (types) {
		      return types;
		    }

		    // Legacy `process.binding('util')` for Node.js < 10.
		    return freeProcess && freeProcess.binding && freeProcess.binding('util');
		  } catch (e) {}
		}());

		/* Node.js helper references. */
		var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

		/**
		 * A faster alternative to `Function#apply`, this function invokes `func`
		 * with the `this` binding of `thisArg` and the arguments of `args`.
		 *
		 * @private
		 * @param {Function} func The function to invoke.
		 * @param {*} thisArg The `this` binding of `func`.
		 * @param {Array} args The arguments to invoke `func` with.
		 * @returns {*} Returns the result of `func`.
		 */
		function apply(func, thisArg, args) {
		  switch (args.length) {
		    case 0: return func.call(thisArg);
		    case 1: return func.call(thisArg, args[0]);
		    case 2: return func.call(thisArg, args[0], args[1]);
		    case 3: return func.call(thisArg, args[0], args[1], args[2]);
		  }
		  return func.apply(thisArg, args);
		}

		/**
		 * The base implementation of `_.times` without support for iteratee shorthands
		 * or max array length checks.
		 *
		 * @private
		 * @param {number} n The number of times to invoke `iteratee`.
		 * @param {Function} iteratee The function invoked per iteration.
		 * @returns {Array} Returns the array of results.
		 */
		function baseTimes(n, iteratee) {
		  var index = -1,
		      result = Array(n);

		  while (++index < n) {
		    result[index] = iteratee(index);
		  }
		  return result;
		}

		/**
		 * The base implementation of `_.unary` without support for storing metadata.
		 *
		 * @private
		 * @param {Function} func The function to cap arguments for.
		 * @returns {Function} Returns the new capped function.
		 */
		function baseUnary(func) {
		  return function(value) {
		    return func(value);
		  };
		}

		/**
		 * Gets the value at `key` of `object`.
		 *
		 * @private
		 * @param {Object} [object] The object to query.
		 * @param {string} key The key of the property to get.
		 * @returns {*} Returns the property value.
		 */
		function getValue(object, key) {
		  return object == null ? undefined : object[key];
		}

		/**
		 * Creates a unary function that invokes `func` with its argument transformed.
		 *
		 * @private
		 * @param {Function} func The function to wrap.
		 * @param {Function} transform The argument transform.
		 * @returns {Function} Returns the new function.
		 */
		function overArg(func, transform) {
		  return function(arg) {
		    return func(transform(arg));
		  };
		}

		/** Used for built-in method references. */
		var arrayProto = Array.prototype,
		    funcProto = Function.prototype,
		    objectProto = Object.prototype;

		/** Used to detect overreaching core-js shims. */
		var coreJsData = root['__core-js_shared__'];

		/** Used to resolve the decompiled source of functions. */
		var funcToString = funcProto.toString;

		/** Used to check objects for own properties. */
		var hasOwnProperty = objectProto.hasOwnProperty;

		/** Used to detect methods masquerading as native. */
		var maskSrcKey = (function() {
		  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
		  return uid ? ('Symbol(src)_1.' + uid) : '';
		}());

		/**
		 * Used to resolve the
		 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
		 * of values.
		 */
		var nativeObjectToString = objectProto.toString;

		/** Used to infer the `Object` constructor. */
		var objectCtorString = funcToString.call(Object);

		/** Used to detect if a method is native. */
		var reIsNative = RegExp('^' +
		  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
		  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
		);

		/** Built-in value references. */
		var Buffer = moduleExports ? root.Buffer : undefined,
		    Symbol = root.Symbol,
		    Uint8Array = root.Uint8Array;
		    Buffer ? Buffer.allocUnsafe : undefined;
		    var getPrototype = overArg(Object.getPrototypeOf, Object),
		    objectCreate = Object.create,
		    propertyIsEnumerable = objectProto.propertyIsEnumerable,
		    splice = arrayProto.splice,
		    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

		var defineProperty = (function() {
		  try {
		    var func = getNative(Object, 'defineProperty');
		    func({}, '', {});
		    return func;
		  } catch (e) {}
		}());

		/* Built-in method references for those with the same name as other `lodash` methods. */
		var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
		    nativeMax = Math.max,
		    nativeNow = Date.now;

		/* Built-in method references that are verified to be native. */
		var Map = getNative(root, 'Map'),
		    nativeCreate = getNative(Object, 'create');

		/**
		 * The base implementation of `_.create` without support for assigning
		 * properties to the created object.
		 *
		 * @private
		 * @param {Object} proto The object to inherit from.
		 * @returns {Object} Returns the new object.
		 */
		var baseCreate = (function() {
		  function object() {}
		  return function(proto) {
		    if (!isObject(proto)) {
		      return {};
		    }
		    if (objectCreate) {
		      return objectCreate(proto);
		    }
		    object.prototype = proto;
		    var result = new object;
		    object.prototype = undefined;
		    return result;
		  };
		}());

		/**
		 * Creates a hash object.
		 *
		 * @private
		 * @constructor
		 * @param {Array} [entries] The key-value pairs to cache.
		 */
		function Hash(entries) {
		  var index = -1,
		      length = entries == null ? 0 : entries.length;

		  this.clear();
		  while (++index < length) {
		    var entry = entries[index];
		    this.set(entry[0], entry[1]);
		  }
		}

		/**
		 * Removes all key-value entries from the hash.
		 *
		 * @private
		 * @name clear
		 * @memberOf Hash
		 */
		function hashClear() {
		  this.__data__ = nativeCreate ? nativeCreate(null) : {};
		  this.size = 0;
		}

		/**
		 * Removes `key` and its value from the hash.
		 *
		 * @private
		 * @name delete
		 * @memberOf Hash
		 * @param {Object} hash The hash to modify.
		 * @param {string} key The key of the value to remove.
		 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
		 */
		function hashDelete(key) {
		  var result = this.has(key) && delete this.__data__[key];
		  this.size -= result ? 1 : 0;
		  return result;
		}

		/**
		 * Gets the hash value for `key`.
		 *
		 * @private
		 * @name get
		 * @memberOf Hash
		 * @param {string} key The key of the value to get.
		 * @returns {*} Returns the entry value.
		 */
		function hashGet(key) {
		  var data = this.__data__;
		  if (nativeCreate) {
		    var result = data[key];
		    return result === HASH_UNDEFINED ? undefined : result;
		  }
		  return hasOwnProperty.call(data, key) ? data[key] : undefined;
		}

		/**
		 * Checks if a hash value for `key` exists.
		 *
		 * @private
		 * @name has
		 * @memberOf Hash
		 * @param {string} key The key of the entry to check.
		 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
		 */
		function hashHas(key) {
		  var data = this.__data__;
		  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
		}

		/**
		 * Sets the hash `key` to `value`.
		 *
		 * @private
		 * @name set
		 * @memberOf Hash
		 * @param {string} key The key of the value to set.
		 * @param {*} value The value to set.
		 * @returns {Object} Returns the hash instance.
		 */
		function hashSet(key, value) {
		  var data = this.__data__;
		  this.size += this.has(key) ? 0 : 1;
		  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
		  return this;
		}

		// Add methods to `Hash`.
		Hash.prototype.clear = hashClear;
		Hash.prototype['delete'] = hashDelete;
		Hash.prototype.get = hashGet;
		Hash.prototype.has = hashHas;
		Hash.prototype.set = hashSet;

		/**
		 * Creates an list cache object.
		 *
		 * @private
		 * @constructor
		 * @param {Array} [entries] The key-value pairs to cache.
		 */
		function ListCache(entries) {
		  var index = -1,
		      length = entries == null ? 0 : entries.length;

		  this.clear();
		  while (++index < length) {
		    var entry = entries[index];
		    this.set(entry[0], entry[1]);
		  }
		}

		/**
		 * Removes all key-value entries from the list cache.
		 *
		 * @private
		 * @name clear
		 * @memberOf ListCache
		 */
		function listCacheClear() {
		  this.__data__ = [];
		  this.size = 0;
		}

		/**
		 * Removes `key` and its value from the list cache.
		 *
		 * @private
		 * @name delete
		 * @memberOf ListCache
		 * @param {string} key The key of the value to remove.
		 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
		 */
		function listCacheDelete(key) {
		  var data = this.__data__,
		      index = assocIndexOf(data, key);

		  if (index < 0) {
		    return false;
		  }
		  var lastIndex = data.length - 1;
		  if (index == lastIndex) {
		    data.pop();
		  } else {
		    splice.call(data, index, 1);
		  }
		  --this.size;
		  return true;
		}

		/**
		 * Gets the list cache value for `key`.
		 *
		 * @private
		 * @name get
		 * @memberOf ListCache
		 * @param {string} key The key of the value to get.
		 * @returns {*} Returns the entry value.
		 */
		function listCacheGet(key) {
		  var data = this.__data__,
		      index = assocIndexOf(data, key);

		  return index < 0 ? undefined : data[index][1];
		}

		/**
		 * Checks if a list cache value for `key` exists.
		 *
		 * @private
		 * @name has
		 * @memberOf ListCache
		 * @param {string} key The key of the entry to check.
		 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
		 */
		function listCacheHas(key) {
		  return assocIndexOf(this.__data__, key) > -1;
		}

		/**
		 * Sets the list cache `key` to `value`.
		 *
		 * @private
		 * @name set
		 * @memberOf ListCache
		 * @param {string} key The key of the value to set.
		 * @param {*} value The value to set.
		 * @returns {Object} Returns the list cache instance.
		 */
		function listCacheSet(key, value) {
		  var data = this.__data__,
		      index = assocIndexOf(data, key);

		  if (index < 0) {
		    ++this.size;
		    data.push([key, value]);
		  } else {
		    data[index][1] = value;
		  }
		  return this;
		}

		// Add methods to `ListCache`.
		ListCache.prototype.clear = listCacheClear;
		ListCache.prototype['delete'] = listCacheDelete;
		ListCache.prototype.get = listCacheGet;
		ListCache.prototype.has = listCacheHas;
		ListCache.prototype.set = listCacheSet;

		/**
		 * Creates a map cache object to store key-value pairs.
		 *
		 * @private
		 * @constructor
		 * @param {Array} [entries] The key-value pairs to cache.
		 */
		function MapCache(entries) {
		  var index = -1,
		      length = entries == null ? 0 : entries.length;

		  this.clear();
		  while (++index < length) {
		    var entry = entries[index];
		    this.set(entry[0], entry[1]);
		  }
		}

		/**
		 * Removes all key-value entries from the map.
		 *
		 * @private
		 * @name clear
		 * @memberOf MapCache
		 */
		function mapCacheClear() {
		  this.size = 0;
		  this.__data__ = {
		    'hash': new Hash,
		    'map': new (Map || ListCache),
		    'string': new Hash
		  };
		}

		/**
		 * Removes `key` and its value from the map.
		 *
		 * @private
		 * @name delete
		 * @memberOf MapCache
		 * @param {string} key The key of the value to remove.
		 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
		 */
		function mapCacheDelete(key) {
		  var result = getMapData(this, key)['delete'](key);
		  this.size -= result ? 1 : 0;
		  return result;
		}

		/**
		 * Gets the map value for `key`.
		 *
		 * @private
		 * @name get
		 * @memberOf MapCache
		 * @param {string} key The key of the value to get.
		 * @returns {*} Returns the entry value.
		 */
		function mapCacheGet(key) {
		  return getMapData(this, key).get(key);
		}

		/**
		 * Checks if a map value for `key` exists.
		 *
		 * @private
		 * @name has
		 * @memberOf MapCache
		 * @param {string} key The key of the entry to check.
		 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
		 */
		function mapCacheHas(key) {
		  return getMapData(this, key).has(key);
		}

		/**
		 * Sets the map `key` to `value`.
		 *
		 * @private
		 * @name set
		 * @memberOf MapCache
		 * @param {string} key The key of the value to set.
		 * @param {*} value The value to set.
		 * @returns {Object} Returns the map cache instance.
		 */
		function mapCacheSet(key, value) {
		  var data = getMapData(this, key),
		      size = data.size;

		  data.set(key, value);
		  this.size += data.size == size ? 0 : 1;
		  return this;
		}

		// Add methods to `MapCache`.
		MapCache.prototype.clear = mapCacheClear;
		MapCache.prototype['delete'] = mapCacheDelete;
		MapCache.prototype.get = mapCacheGet;
		MapCache.prototype.has = mapCacheHas;
		MapCache.prototype.set = mapCacheSet;

		/**
		 * Creates a stack cache object to store key-value pairs.
		 *
		 * @private
		 * @constructor
		 * @param {Array} [entries] The key-value pairs to cache.
		 */
		function Stack(entries) {
		  var data = this.__data__ = new ListCache(entries);
		  this.size = data.size;
		}

		/**
		 * Removes all key-value entries from the stack.
		 *
		 * @private
		 * @name clear
		 * @memberOf Stack
		 */
		function stackClear() {
		  this.__data__ = new ListCache;
		  this.size = 0;
		}

		/**
		 * Removes `key` and its value from the stack.
		 *
		 * @private
		 * @name delete
		 * @memberOf Stack
		 * @param {string} key The key of the value to remove.
		 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
		 */
		function stackDelete(key) {
		  var data = this.__data__,
		      result = data['delete'](key);

		  this.size = data.size;
		  return result;
		}

		/**
		 * Gets the stack value for `key`.
		 *
		 * @private
		 * @name get
		 * @memberOf Stack
		 * @param {string} key The key of the value to get.
		 * @returns {*} Returns the entry value.
		 */
		function stackGet(key) {
		  return this.__data__.get(key);
		}

		/**
		 * Checks if a stack value for `key` exists.
		 *
		 * @private
		 * @name has
		 * @memberOf Stack
		 * @param {string} key The key of the entry to check.
		 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
		 */
		function stackHas(key) {
		  return this.__data__.has(key);
		}

		/**
		 * Sets the stack `key` to `value`.
		 *
		 * @private
		 * @name set
		 * @memberOf Stack
		 * @param {string} key The key of the value to set.
		 * @param {*} value The value to set.
		 * @returns {Object} Returns the stack cache instance.
		 */
		function stackSet(key, value) {
		  var data = this.__data__;
		  if (data instanceof ListCache) {
		    var pairs = data.__data__;
		    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
		      pairs.push([key, value]);
		      this.size = ++data.size;
		      return this;
		    }
		    data = this.__data__ = new MapCache(pairs);
		  }
		  data.set(key, value);
		  this.size = data.size;
		  return this;
		}

		// Add methods to `Stack`.
		Stack.prototype.clear = stackClear;
		Stack.prototype['delete'] = stackDelete;
		Stack.prototype.get = stackGet;
		Stack.prototype.has = stackHas;
		Stack.prototype.set = stackSet;

		/**
		 * Creates an array of the enumerable property names of the array-like `value`.
		 *
		 * @private
		 * @param {*} value The value to query.
		 * @param {boolean} inherited Specify returning inherited property names.
		 * @returns {Array} Returns the array of property names.
		 */
		function arrayLikeKeys(value, inherited) {
		  var isArr = isArray(value),
		      isArg = !isArr && isArguments(value),
		      isBuff = !isArr && !isArg && isBuffer(value),
		      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
		      skipIndexes = isArr || isArg || isBuff || isType,
		      result = skipIndexes ? baseTimes(value.length, String) : [],
		      length = result.length;

		  for (var key in value) {
		    if (!(skipIndexes && (
		           // Safari 9 has enumerable `arguments.length` in strict mode.
		           key == 'length' ||
		           // Node.js 0.10 has enumerable non-index properties on buffers.
		           (isBuff && (key == 'offset' || key == 'parent')) ||
		           // PhantomJS 2 has enumerable non-index properties on typed arrays.
		           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
		           // Skip index properties.
		           isIndex(key, length)
		        ))) {
		      result.push(key);
		    }
		  }
		  return result;
		}

		/**
		 * This function is like `assignValue` except that it doesn't assign
		 * `undefined` values.
		 *
		 * @private
		 * @param {Object} object The object to modify.
		 * @param {string} key The key of the property to assign.
		 * @param {*} value The value to assign.
		 */
		function assignMergeValue(object, key, value) {
		  if ((value !== undefined && !eq(object[key], value)) ||
		      (value === undefined && !(key in object))) {
		    baseAssignValue(object, key, value);
		  }
		}

		/**
		 * Assigns `value` to `key` of `object` if the existing value is not equivalent
		 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
		 * for equality comparisons.
		 *
		 * @private
		 * @param {Object} object The object to modify.
		 * @param {string} key The key of the property to assign.
		 * @param {*} value The value to assign.
		 */
		function assignValue(object, key, value) {
		  var objValue = object[key];
		  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
		      (value === undefined && !(key in object))) {
		    baseAssignValue(object, key, value);
		  }
		}

		/**
		 * Gets the index at which the `key` is found in `array` of key-value pairs.
		 *
		 * @private
		 * @param {Array} array The array to inspect.
		 * @param {*} key The key to search for.
		 * @returns {number} Returns the index of the matched value, else `-1`.
		 */
		function assocIndexOf(array, key) {
		  var length = array.length;
		  while (length--) {
		    if (eq(array[length][0], key)) {
		      return length;
		    }
		  }
		  return -1;
		}

		/**
		 * The base implementation of `assignValue` and `assignMergeValue` without
		 * value checks.
		 *
		 * @private
		 * @param {Object} object The object to modify.
		 * @param {string} key The key of the property to assign.
		 * @param {*} value The value to assign.
		 */
		function baseAssignValue(object, key, value) {
		  if (key == '__proto__' && defineProperty) {
		    defineProperty(object, key, {
		      'configurable': true,
		      'enumerable': true,
		      'value': value,
		      'writable': true
		    });
		  } else {
		    object[key] = value;
		  }
		}

		/**
		 * The base implementation of `baseForOwn` which iterates over `object`
		 * properties returned by `keysFunc` and invokes `iteratee` for each property.
		 * Iteratee functions may exit iteration early by explicitly returning `false`.
		 *
		 * @private
		 * @param {Object} object The object to iterate over.
		 * @param {Function} iteratee The function invoked per iteration.
		 * @param {Function} keysFunc The function to get the keys of `object`.
		 * @returns {Object} Returns `object`.
		 */
		var baseFor = createBaseFor();

		/**
		 * The base implementation of `getTag` without fallbacks for buggy environments.
		 *
		 * @private
		 * @param {*} value The value to query.
		 * @returns {string} Returns the `toStringTag`.
		 */
		function baseGetTag(value) {
		  if (value == null) {
		    return value === undefined ? undefinedTag : nullTag;
		  }
		  return (symToStringTag && symToStringTag in Object(value))
		    ? getRawTag(value)
		    : objectToString(value);
		}

		/**
		 * The base implementation of `_.isArguments`.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
		 */
		function baseIsArguments(value) {
		  return isObjectLike(value) && baseGetTag(value) == argsTag;
		}

		/**
		 * The base implementation of `_.isNative` without bad shim checks.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is a native function,
		 *  else `false`.
		 */
		function baseIsNative(value) {
		  if (!isObject(value) || isMasked(value)) {
		    return false;
		  }
		  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
		  return pattern.test(toSource(value));
		}

		/**
		 * The base implementation of `_.isTypedArray` without Node.js optimizations.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
		 */
		function baseIsTypedArray(value) {
		  return isObjectLike(value) &&
		    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
		}

		/**
		 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
		 *
		 * @private
		 * @param {Object} object The object to query.
		 * @returns {Array} Returns the array of property names.
		 */
		function baseKeysIn(object) {
		  if (!isObject(object)) {
		    return nativeKeysIn(object);
		  }
		  var isProto = isPrototype(object),
		      result = [];

		  for (var key in object) {
		    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
		      result.push(key);
		    }
		  }
		  return result;
		}

		/**
		 * The base implementation of `_.merge` without support for multiple sources.
		 *
		 * @private
		 * @param {Object} object The destination object.
		 * @param {Object} source The source object.
		 * @param {number} srcIndex The index of `source`.
		 * @param {Function} [customizer] The function to customize merged values.
		 * @param {Object} [stack] Tracks traversed source values and their merged
		 *  counterparts.
		 */
		function baseMerge(object, source, srcIndex, customizer, stack) {
		  if (object === source) {
		    return;
		  }
		  baseFor(source, function(srcValue, key) {
		    stack || (stack = new Stack);
		    if (isObject(srcValue)) {
		      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
		    }
		    else {
		      var newValue = customizer
		        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
		        : undefined;

		      if (newValue === undefined) {
		        newValue = srcValue;
		      }
		      assignMergeValue(object, key, newValue);
		    }
		  }, keysIn);
		}

		/**
		 * A specialized version of `baseMerge` for arrays and objects which performs
		 * deep merges and tracks traversed objects enabling objects with circular
		 * references to be merged.
		 *
		 * @private
		 * @param {Object} object The destination object.
		 * @param {Object} source The source object.
		 * @param {string} key The key of the value to merge.
		 * @param {number} srcIndex The index of `source`.
		 * @param {Function} mergeFunc The function to merge values.
		 * @param {Function} [customizer] The function to customize assigned values.
		 * @param {Object} [stack] Tracks traversed source values and their merged
		 *  counterparts.
		 */
		function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
		  var objValue = safeGet(object, key),
		      srcValue = safeGet(source, key),
		      stacked = stack.get(srcValue);

		  if (stacked) {
		    assignMergeValue(object, key, stacked);
		    return;
		  }
		  var newValue = customizer
		    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
		    : undefined;

		  var isCommon = newValue === undefined;

		  if (isCommon) {
		    var isArr = isArray(srcValue),
		        isBuff = !isArr && isBuffer(srcValue),
		        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

		    newValue = srcValue;
		    if (isArr || isBuff || isTyped) {
		      if (isArray(objValue)) {
		        newValue = objValue;
		      }
		      else if (isArrayLikeObject(objValue)) {
		        newValue = copyArray(objValue);
		      }
		      else if (isBuff) {
		        isCommon = false;
		        newValue = cloneBuffer(srcValue);
		      }
		      else if (isTyped) {
		        isCommon = false;
		        newValue = cloneTypedArray(srcValue);
		      }
		      else {
		        newValue = [];
		      }
		    }
		    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
		      newValue = objValue;
		      if (isArguments(objValue)) {
		        newValue = toPlainObject(objValue);
		      }
		      else if (!isObject(objValue) || isFunction(objValue)) {
		        newValue = initCloneObject(srcValue);
		      }
		    }
		    else {
		      isCommon = false;
		    }
		  }
		  if (isCommon) {
		    // Recursively merge objects and arrays (susceptible to call stack limits).
		    stack.set(srcValue, newValue);
		    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
		    stack['delete'](srcValue);
		  }
		  assignMergeValue(object, key, newValue);
		}

		/**
		 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
		 *
		 * @private
		 * @param {Function} func The function to apply a rest parameter to.
		 * @param {number} [start=func.length-1] The start position of the rest parameter.
		 * @returns {Function} Returns the new function.
		 */
		function baseRest(func, start) {
		  return setToString(overRest(func, start, identity), func + '');
		}

		/**
		 * The base implementation of `setToString` without support for hot loop shorting.
		 *
		 * @private
		 * @param {Function} func The function to modify.
		 * @param {Function} string The `toString` result.
		 * @returns {Function} Returns `func`.
		 */
		var baseSetToString = !defineProperty ? identity : function(func, string) {
		  return defineProperty(func, 'toString', {
		    'configurable': true,
		    'enumerable': false,
		    'value': constant(string),
		    'writable': true
		  });
		};

		/**
		 * Creates a clone of  `buffer`.
		 *
		 * @private
		 * @param {Buffer} buffer The buffer to clone.
		 * @param {boolean} [isDeep] Specify a deep clone.
		 * @returns {Buffer} Returns the cloned buffer.
		 */
		function cloneBuffer(buffer, isDeep) {
		  {
		    return buffer.slice();
		  }
		}

		/**
		 * Creates a clone of `arrayBuffer`.
		 *
		 * @private
		 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
		 * @returns {ArrayBuffer} Returns the cloned array buffer.
		 */
		function cloneArrayBuffer(arrayBuffer) {
		  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
		  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
		  return result;
		}

		/**
		 * Creates a clone of `typedArray`.
		 *
		 * @private
		 * @param {Object} typedArray The typed array to clone.
		 * @param {boolean} [isDeep] Specify a deep clone.
		 * @returns {Object} Returns the cloned typed array.
		 */
		function cloneTypedArray(typedArray, isDeep) {
		  var buffer = cloneArrayBuffer(typedArray.buffer) ;
		  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
		}

		/**
		 * Copies the values of `source` to `array`.
		 *
		 * @private
		 * @param {Array} source The array to copy values from.
		 * @param {Array} [array=[]] The array to copy values to.
		 * @returns {Array} Returns `array`.
		 */
		function copyArray(source, array) {
		  var index = -1,
		      length = source.length;

		  array || (array = Array(length));
		  while (++index < length) {
		    array[index] = source[index];
		  }
		  return array;
		}

		/**
		 * Copies properties of `source` to `object`.
		 *
		 * @private
		 * @param {Object} source The object to copy properties from.
		 * @param {Array} props The property identifiers to copy.
		 * @param {Object} [object={}] The object to copy properties to.
		 * @param {Function} [customizer] The function to customize copied values.
		 * @returns {Object} Returns `object`.
		 */
		function copyObject(source, props, object, customizer) {
		  var isNew = !object;
		  object || (object = {});

		  var index = -1,
		      length = props.length;

		  while (++index < length) {
		    var key = props[index];

		    var newValue = undefined;

		    if (newValue === undefined) {
		      newValue = source[key];
		    }
		    if (isNew) {
		      baseAssignValue(object, key, newValue);
		    } else {
		      assignValue(object, key, newValue);
		    }
		  }
		  return object;
		}

		/**
		 * Creates a function like `_.assign`.
		 *
		 * @private
		 * @param {Function} assigner The function to assign values.
		 * @returns {Function} Returns the new assigner function.
		 */
		function createAssigner(assigner) {
		  return baseRest(function(object, sources) {
		    var index = -1,
		        length = sources.length,
		        customizer = length > 1 ? sources[length - 1] : undefined,
		        guard = length > 2 ? sources[2] : undefined;

		    customizer = (assigner.length > 3 && typeof customizer == 'function')
		      ? (length--, customizer)
		      : undefined;

		    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
		      customizer = length < 3 ? undefined : customizer;
		      length = 1;
		    }
		    object = Object(object);
		    while (++index < length) {
		      var source = sources[index];
		      if (source) {
		        assigner(object, source, index, customizer);
		      }
		    }
		    return object;
		  });
		}

		/**
		 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
		 *
		 * @private
		 * @param {boolean} [fromRight] Specify iterating from right to left.
		 * @returns {Function} Returns the new base function.
		 */
		function createBaseFor(fromRight) {
		  return function(object, iteratee, keysFunc) {
		    var index = -1,
		        iterable = Object(object),
		        props = keysFunc(object),
		        length = props.length;

		    while (length--) {
		      var key = props[++index];
		      if (iteratee(iterable[key], key, iterable) === false) {
		        break;
		      }
		    }
		    return object;
		  };
		}

		/**
		 * Gets the data for `map`.
		 *
		 * @private
		 * @param {Object} map The map to query.
		 * @param {string} key The reference key.
		 * @returns {*} Returns the map data.
		 */
		function getMapData(map, key) {
		  var data = map.__data__;
		  return isKeyable(key)
		    ? data[typeof key == 'string' ? 'string' : 'hash']
		    : data.map;
		}

		/**
		 * Gets the native function at `key` of `object`.
		 *
		 * @private
		 * @param {Object} object The object to query.
		 * @param {string} key The key of the method to get.
		 * @returns {*} Returns the function if it's native, else `undefined`.
		 */
		function getNative(object, key) {
		  var value = getValue(object, key);
		  return baseIsNative(value) ? value : undefined;
		}

		/**
		 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
		 *
		 * @private
		 * @param {*} value The value to query.
		 * @returns {string} Returns the raw `toStringTag`.
		 */
		function getRawTag(value) {
		  var isOwn = hasOwnProperty.call(value, symToStringTag),
		      tag = value[symToStringTag];

		  try {
		    value[symToStringTag] = undefined;
		    var unmasked = true;
		  } catch (e) {}

		  var result = nativeObjectToString.call(value);
		  if (unmasked) {
		    if (isOwn) {
		      value[symToStringTag] = tag;
		    } else {
		      delete value[symToStringTag];
		    }
		  }
		  return result;
		}

		/**
		 * Initializes an object clone.
		 *
		 * @private
		 * @param {Object} object The object to clone.
		 * @returns {Object} Returns the initialized clone.
		 */
		function initCloneObject(object) {
		  return (typeof object.constructor == 'function' && !isPrototype(object))
		    ? baseCreate(getPrototype(object))
		    : {};
		}

		/**
		 * Checks if `value` is a valid array-like index.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
		 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
		 */
		function isIndex(value, length) {
		  var type = typeof value;
		  length = length == null ? MAX_SAFE_INTEGER : length;

		  return !!length &&
		    (type == 'number' ||
		      (type != 'symbol' && reIsUint.test(value))) &&
		        (value > -1 && value % 1 == 0 && value < length);
		}

		/**
		 * Checks if the given arguments are from an iteratee call.
		 *
		 * @private
		 * @param {*} value The potential iteratee value argument.
		 * @param {*} index The potential iteratee index or key argument.
		 * @param {*} object The potential iteratee object argument.
		 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
		 *  else `false`.
		 */
		function isIterateeCall(value, index, object) {
		  if (!isObject(object)) {
		    return false;
		  }
		  var type = typeof index;
		  if (type == 'number'
		        ? (isArrayLike(object) && isIndex(index, object.length))
		        : (type == 'string' && index in object)
		      ) {
		    return eq(object[index], value);
		  }
		  return false;
		}

		/**
		 * Checks if `value` is suitable for use as unique object key.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
		 */
		function isKeyable(value) {
		  var type = typeof value;
		  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
		    ? (value !== '__proto__')
		    : (value === null);
		}

		/**
		 * Checks if `func` has its source masked.
		 *
		 * @private
		 * @param {Function} func The function to check.
		 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
		 */
		function isMasked(func) {
		  return !!maskSrcKey && (maskSrcKey in func);
		}

		/**
		 * Checks if `value` is likely a prototype object.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
		 */
		function isPrototype(value) {
		  var Ctor = value && value.constructor,
		      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

		  return value === proto;
		}

		/**
		 * This function is like
		 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
		 * except that it includes inherited enumerable properties.
		 *
		 * @private
		 * @param {Object} object The object to query.
		 * @returns {Array} Returns the array of property names.
		 */
		function nativeKeysIn(object) {
		  var result = [];
		  if (object != null) {
		    for (var key in Object(object)) {
		      result.push(key);
		    }
		  }
		  return result;
		}

		/**
		 * Converts `value` to a string using `Object.prototype.toString`.
		 *
		 * @private
		 * @param {*} value The value to convert.
		 * @returns {string} Returns the converted string.
		 */
		function objectToString(value) {
		  return nativeObjectToString.call(value);
		}

		/**
		 * A specialized version of `baseRest` which transforms the rest array.
		 *
		 * @private
		 * @param {Function} func The function to apply a rest parameter to.
		 * @param {number} [start=func.length-1] The start position of the rest parameter.
		 * @param {Function} transform The rest array transform.
		 * @returns {Function} Returns the new function.
		 */
		function overRest(func, start, transform) {
		  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
		  return function() {
		    var args = arguments,
		        index = -1,
		        length = nativeMax(args.length - start, 0),
		        array = Array(length);

		    while (++index < length) {
		      array[index] = args[start + index];
		    }
		    index = -1;
		    var otherArgs = Array(start + 1);
		    while (++index < start) {
		      otherArgs[index] = args[index];
		    }
		    otherArgs[start] = transform(array);
		    return apply(func, this, otherArgs);
		  };
		}

		/**
		 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
		 *
		 * @private
		 * @param {Object} object The object to query.
		 * @param {string} key The key of the property to get.
		 * @returns {*} Returns the property value.
		 */
		function safeGet(object, key) {
		  if (key === 'constructor' && typeof object[key] === 'function') {
		    return;
		  }

		  if (key == '__proto__') {
		    return;
		  }

		  return object[key];
		}

		/**
		 * Sets the `toString` method of `func` to return `string`.
		 *
		 * @private
		 * @param {Function} func The function to modify.
		 * @param {Function} string The `toString` result.
		 * @returns {Function} Returns `func`.
		 */
		var setToString = shortOut(baseSetToString);

		/**
		 * Creates a function that'll short out and invoke `identity` instead
		 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
		 * milliseconds.
		 *
		 * @private
		 * @param {Function} func The function to restrict.
		 * @returns {Function} Returns the new shortable function.
		 */
		function shortOut(func) {
		  var count = 0,
		      lastCalled = 0;

		  return function() {
		    var stamp = nativeNow(),
		        remaining = HOT_SPAN - (stamp - lastCalled);

		    lastCalled = stamp;
		    if (remaining > 0) {
		      if (++count >= HOT_COUNT) {
		        return arguments[0];
		      }
		    } else {
		      count = 0;
		    }
		    return func.apply(undefined, arguments);
		  };
		}

		/**
		 * Converts `func` to its source code.
		 *
		 * @private
		 * @param {Function} func The function to convert.
		 * @returns {string} Returns the source code.
		 */
		function toSource(func) {
		  if (func != null) {
		    try {
		      return funcToString.call(func);
		    } catch (e) {}
		    try {
		      return (func + '');
		    } catch (e) {}
		  }
		  return '';
		}

		/**
		 * Performs a
		 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
		 * comparison between two values to determine if they are equivalent.
		 *
		 * @static
		 * @memberOf _
		 * @since 4.0.0
		 * @category Lang
		 * @param {*} value The value to compare.
		 * @param {*} other The other value to compare.
		 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
		 * @example
		 *
		 * var object = { 'a': 1 };
		 * var other = { 'a': 1 };
		 *
		 * _.eq(object, object);
		 * // => true
		 *
		 * _.eq(object, other);
		 * // => false
		 *
		 * _.eq('a', 'a');
		 * // => true
		 *
		 * _.eq('a', Object('a'));
		 * // => false
		 *
		 * _.eq(NaN, NaN);
		 * // => true
		 */
		function eq(value, other) {
		  return value === other || (value !== value && other !== other);
		}

		/**
		 * Checks if `value` is likely an `arguments` object.
		 *
		 * @static
		 * @memberOf _
		 * @since 0.1.0
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
		 *  else `false`.
		 * @example
		 *
		 * _.isArguments(function() { return arguments; }());
		 * // => true
		 *
		 * _.isArguments([1, 2, 3]);
		 * // => false
		 */
		var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
		  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
		    !propertyIsEnumerable.call(value, 'callee');
		};

		/**
		 * Checks if `value` is classified as an `Array` object.
		 *
		 * @static
		 * @memberOf _
		 * @since 0.1.0
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
		 * @example
		 *
		 * _.isArray([1, 2, 3]);
		 * // => true
		 *
		 * _.isArray(document.body.children);
		 * // => false
		 *
		 * _.isArray('abc');
		 * // => false
		 *
		 * _.isArray(_.noop);
		 * // => false
		 */
		var isArray = Array.isArray;

		/**
		 * Checks if `value` is array-like. A value is considered array-like if it's
		 * not a function and has a `value.length` that's an integer greater than or
		 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
		 *
		 * @static
		 * @memberOf _
		 * @since 4.0.0
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
		 * @example
		 *
		 * _.isArrayLike([1, 2, 3]);
		 * // => true
		 *
		 * _.isArrayLike(document.body.children);
		 * // => true
		 *
		 * _.isArrayLike('abc');
		 * // => true
		 *
		 * _.isArrayLike(_.noop);
		 * // => false
		 */
		function isArrayLike(value) {
		  return value != null && isLength(value.length) && !isFunction(value);
		}

		/**
		 * This method is like `_.isArrayLike` except that it also checks if `value`
		 * is an object.
		 *
		 * @static
		 * @memberOf _
		 * @since 4.0.0
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is an array-like object,
		 *  else `false`.
		 * @example
		 *
		 * _.isArrayLikeObject([1, 2, 3]);
		 * // => true
		 *
		 * _.isArrayLikeObject(document.body.children);
		 * // => true
		 *
		 * _.isArrayLikeObject('abc');
		 * // => false
		 *
		 * _.isArrayLikeObject(_.noop);
		 * // => false
		 */
		function isArrayLikeObject(value) {
		  return isObjectLike(value) && isArrayLike(value);
		}

		/**
		 * Checks if `value` is a buffer.
		 *
		 * @static
		 * @memberOf _
		 * @since 4.3.0
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
		 * @example
		 *
		 * _.isBuffer(new Buffer(2));
		 * // => true
		 *
		 * _.isBuffer(new Uint8Array(2));
		 * // => false
		 */
		var isBuffer = nativeIsBuffer || stubFalse;

		/**
		 * Checks if `value` is classified as a `Function` object.
		 *
		 * @static
		 * @memberOf _
		 * @since 0.1.0
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
		 * @example
		 *
		 * _.isFunction(_);
		 * // => true
		 *
		 * _.isFunction(/abc/);
		 * // => false
		 */
		function isFunction(value) {
		  if (!isObject(value)) {
		    return false;
		  }
		  // The use of `Object#toString` avoids issues with the `typeof` operator
		  // in Safari 9 which returns 'object' for typed arrays and other constructors.
		  var tag = baseGetTag(value);
		  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
		}

		/**
		 * Checks if `value` is a valid array-like length.
		 *
		 * **Note:** This method is loosely based on
		 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
		 *
		 * @static
		 * @memberOf _
		 * @since 4.0.0
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
		 * @example
		 *
		 * _.isLength(3);
		 * // => true
		 *
		 * _.isLength(Number.MIN_VALUE);
		 * // => false
		 *
		 * _.isLength(Infinity);
		 * // => false
		 *
		 * _.isLength('3');
		 * // => false
		 */
		function isLength(value) {
		  return typeof value == 'number' &&
		    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
		}

		/**
		 * Checks if `value` is the
		 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
		 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
		 *
		 * @static
		 * @memberOf _
		 * @since 0.1.0
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
		 * @example
		 *
		 * _.isObject({});
		 * // => true
		 *
		 * _.isObject([1, 2, 3]);
		 * // => true
		 *
		 * _.isObject(_.noop);
		 * // => true
		 *
		 * _.isObject(null);
		 * // => false
		 */
		function isObject(value) {
		  var type = typeof value;
		  return value != null && (type == 'object' || type == 'function');
		}

		/**
		 * Checks if `value` is object-like. A value is object-like if it's not `null`
		 * and has a `typeof` result of "object".
		 *
		 * @static
		 * @memberOf _
		 * @since 4.0.0
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
		 * @example
		 *
		 * _.isObjectLike({});
		 * // => true
		 *
		 * _.isObjectLike([1, 2, 3]);
		 * // => true
		 *
		 * _.isObjectLike(_.noop);
		 * // => false
		 *
		 * _.isObjectLike(null);
		 * // => false
		 */
		function isObjectLike(value) {
		  return value != null && typeof value == 'object';
		}

		/**
		 * Checks if `value` is a plain object, that is, an object created by the
		 * `Object` constructor or one with a `[[Prototype]]` of `null`.
		 *
		 * @static
		 * @memberOf _
		 * @since 0.8.0
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
		 * @example
		 *
		 * function Foo() {
		 *   this.a = 1;
		 * }
		 *
		 * _.isPlainObject(new Foo);
		 * // => false
		 *
		 * _.isPlainObject([1, 2, 3]);
		 * // => false
		 *
		 * _.isPlainObject({ 'x': 0, 'y': 0 });
		 * // => true
		 *
		 * _.isPlainObject(Object.create(null));
		 * // => true
		 */
		function isPlainObject(value) {
		  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
		    return false;
		  }
		  var proto = getPrototype(value);
		  if (proto === null) {
		    return true;
		  }
		  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
		  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
		    funcToString.call(Ctor) == objectCtorString;
		}

		/**
		 * Checks if `value` is classified as a typed array.
		 *
		 * @static
		 * @memberOf _
		 * @since 3.0.0
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
		 * @example
		 *
		 * _.isTypedArray(new Uint8Array);
		 * // => true
		 *
		 * _.isTypedArray([]);
		 * // => false
		 */
		var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

		/**
		 * Converts `value` to a plain object flattening inherited enumerable string
		 * keyed properties of `value` to own properties of the plain object.
		 *
		 * @static
		 * @memberOf _
		 * @since 3.0.0
		 * @category Lang
		 * @param {*} value The value to convert.
		 * @returns {Object} Returns the converted plain object.
		 * @example
		 *
		 * function Foo() {
		 *   this.b = 2;
		 * }
		 *
		 * Foo.prototype.c = 3;
		 *
		 * _.assign({ 'a': 1 }, new Foo);
		 * // => { 'a': 1, 'b': 2 }
		 *
		 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
		 * // => { 'a': 1, 'b': 2, 'c': 3 }
		 */
		function toPlainObject(value) {
		  return copyObject(value, keysIn(value));
		}

		/**
		 * Creates an array of the own and inherited enumerable property names of `object`.
		 *
		 * **Note:** Non-object values are coerced to objects.
		 *
		 * @static
		 * @memberOf _
		 * @since 3.0.0
		 * @category Object
		 * @param {Object} object The object to query.
		 * @returns {Array} Returns the array of property names.
		 * @example
		 *
		 * function Foo() {
		 *   this.a = 1;
		 *   this.b = 2;
		 * }
		 *
		 * Foo.prototype.c = 3;
		 *
		 * _.keysIn(new Foo);
		 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
		 */
		function keysIn(object) {
		  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeysIn(object);
		}

		/**
		 * This method is like `_.assign` except that it recursively merges own and
		 * inherited enumerable string keyed properties of source objects into the
		 * destination object. Source properties that resolve to `undefined` are
		 * skipped if a destination value exists. Array and plain object properties
		 * are merged recursively. Other objects and value types are overridden by
		 * assignment. Source objects are applied from left to right. Subsequent
		 * sources overwrite property assignments of previous sources.
		 *
		 * **Note:** This method mutates `object`.
		 *
		 * @static
		 * @memberOf _
		 * @since 0.5.0
		 * @category Object
		 * @param {Object} object The destination object.
		 * @param {...Object} [sources] The source objects.
		 * @returns {Object} Returns `object`.
		 * @example
		 *
		 * var object = {
		 *   'a': [{ 'b': 2 }, { 'd': 4 }]
		 * };
		 *
		 * var other = {
		 *   'a': [{ 'c': 3 }, { 'e': 5 }]
		 * };
		 *
		 * _.merge(object, other);
		 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
		 */
		var merge = createAssigner(function(object, source, srcIndex) {
		  baseMerge(object, source, srcIndex);
		});

		/**
		 * Creates a function that returns `value`.
		 *
		 * @static
		 * @memberOf _
		 * @since 2.4.0
		 * @category Util
		 * @param {*} value The value to return from the new function.
		 * @returns {Function} Returns the new constant function.
		 * @example
		 *
		 * var objects = _.times(2, _.constant({ 'a': 1 }));
		 *
		 * console.log(objects);
		 * // => [{ 'a': 1 }, { 'a': 1 }]
		 *
		 * console.log(objects[0] === objects[1]);
		 * // => true
		 */
		function constant(value) {
		  return function() {
		    return value;
		  };
		}

		/**
		 * This method returns the first argument it receives.
		 *
		 * @static
		 * @since 0.1.0
		 * @memberOf _
		 * @category Util
		 * @param {*} value Any value.
		 * @returns {*} Returns `value`.
		 * @example
		 *
		 * var object = { 'a': 1 };
		 *
		 * console.log(_.identity(object) === object);
		 * // => true
		 */
		function identity(value) {
		  return value;
		}

		/**
		 * This method returns `false`.
		 *
		 * @static
		 * @memberOf _
		 * @since 4.13.0
		 * @category Util
		 * @returns {boolean} Returns `false`.
		 * @example
		 *
		 * _.times(2, _.stubFalse);
		 * // => [false, false]
		 */
		function stubFalse() {
		  return false;
		}

		module.exports = merge; 
	} (lodash_merge, lodash_merge.exports));
	return lodash_merge.exports;
}

var utils;
var hasRequiredUtils;

function requireUtils () {
	if (hasRequiredUtils) return utils;
	hasRequiredUtils = 1;
	// Utility functions

	var merge = requireLodash_merge();

	var PREFIXES = 'Webkit Moz O ms'.split(' ');
	var FLOAT_COMPARISON_EPSILON = 0.001;

	// Renders templates with given variables. Variables must be surrounded with
	// braces without any spaces, e.g. {variable}
	// All instances of variable placeholders will be replaced with given content
	// Example:
	// render('Hello, {message}!', {message: 'world'})
	function render(template, vars) {
	    var rendered = template;

	    for (var key in vars) {
	        if (vars.hasOwnProperty(key)) {
	            var val = vars[key];
	            var regExpString = '\\{' + key + '\\}';
	            var regExp = new RegExp(regExpString, 'g');

	            rendered = rendered.replace(regExp, val);
	        }
	    }

	    return rendered;
	}

	function setStyle(element, style, value) {
	    var elStyle = element.style;  // cache for performance

	    for (var i = 0; i < PREFIXES.length; ++i) {
	        var prefix = PREFIXES[i];
	        elStyle[prefix + capitalize(style)] = value;
	    }

	    elStyle[style] = value;
	}

	function setStyles(element, styles) {
	    forEachObject(styles, function(styleValue, styleName) {
	        // Allow disabling some individual styles by setting them
	        // to null or undefined
	        if (styleValue === null || styleValue === undefined) {
	            return;
	        }

	        // If style's value is {prefix: true, value: '50%'},
	        // Set also browser prefixed styles
	        if (isObject(styleValue) && styleValue.prefix === true) {
	            setStyle(element, styleName, styleValue.value);
	        } else {
	            element.style[styleName] = styleValue;
	        }
	    });
	}

	function capitalize(text) {
	    return text.charAt(0).toUpperCase() + text.slice(1);
	}

	function isString(obj) {
	    return typeof obj === 'string' || obj instanceof String;
	}

	function isFunction(obj) {
	    return typeof obj === 'function';
	}

	function isArray(obj) {
	    return Object.prototype.toString.call(obj) === '[object Array]';
	}

	// Returns true if `obj` is object as in {a: 1, b: 2}, not if it's function or
	// array
	function isObject(obj) {
	    if (isArray(obj)) {
	        return false;
	    }

	    var type = typeof obj;
	    return type === 'object' && !!obj;
	}

	function forEachObject(object, callback) {
	    for (var key in object) {
	        if (object.hasOwnProperty(key)) {
	            var val = object[key];
	            callback(val, key);
	        }
	    }
	}

	function floatEquals(a, b) {
	    return Math.abs(a - b) < FLOAT_COMPARISON_EPSILON;
	}

	// https://coderwall.com/p/nygghw/don-t-use-innerhtml-to-empty-dom-elements
	function removeChildren(el) {
	    while (el.firstChild) {
	        el.removeChild(el.firstChild);
	    }
	}

	utils = {
	    extend: merge,
	    render: render,
	    setStyle: setStyle,
	    setStyles: setStyles,
	    capitalize: capitalize,
	    isString: isString,
	    isFunction: isFunction,
	    isObject: isObject,
	    forEachObject: forEachObject,
	    floatEquals: floatEquals,
	    removeChildren: removeChildren
	};
	return utils;
}

var path;
var hasRequiredPath;

function requirePath () {
	if (hasRequiredPath) return path;
	hasRequiredPath = 1;
	// Lower level API to animate any kind of svg path

	var shifty = requireShifty_node();
	var utils = requireUtils();

	var Tweenable = shifty.Tweenable;

	var EASING_ALIASES = {
	    easeIn: 'easeInCubic',
	    easeOut: 'easeOutCubic',
	    easeInOut: 'easeInOutCubic'
	};

	var Path = function Path(path, opts) {
	    // Throw a better error if not initialized with `new` keyword
	    if (!(this instanceof Path)) {
	        throw new Error('Constructor was called without new keyword');
	    }

	    // Default parameters for animation
	    opts = utils.extend({
	        delay: 0,
	        duration: 800,
	        easing: 'linear',
	        from: {},
	        to: {},
	        step: function() {}
	    }, opts);

	    var element;
	    if (utils.isString(path)) {
	        element = document.querySelector(path);
	    } else {
	        element = path;
	    }

	    // Reveal .path as public attribute
	    this.path = element;
	    this._opts = opts;
	    this._tweenable = null;

	    // Set up the starting positions
	    var length = this.path.getTotalLength();
	    this.path.style.strokeDasharray = length + ' ' + length;
	    this.set(0);
	};

	Path.prototype.value = function value() {
	    var offset = this._getComputedDashOffset();
	    var length = this.path.getTotalLength();

	    var progress = 1 - offset / length;
	    // Round number to prevent returning very small number like 1e-30, which
	    // is practically 0
	    return parseFloat(progress.toFixed(6), 10);
	};

	Path.prototype.set = function set(progress) {
	    this.stop();

	    this.path.style.strokeDashoffset = this._progressToOffset(progress);

	    var step = this._opts.step;
	    if (utils.isFunction(step)) {
	        var easing = this._easing(this._opts.easing);
	        var values = this._calculateTo(progress, easing);
	        var reference = this._opts.shape || this;
	        step(values, reference, this._opts.attachment);
	    }
	};

	Path.prototype.stop = function stop() {
	    this._stopTween();
	    this.path.style.strokeDashoffset = this._getComputedDashOffset();
	};

	// Method introduced here:
	// http://jakearchibald.com/2013/animated-line-drawing-svg/
	Path.prototype.animate = function animate(progress, opts, cb) {
	    opts = opts || {};

	    if (utils.isFunction(opts)) {
	        cb = opts;
	        opts = {};
	    }

	    var passedOpts = utils.extend({}, opts);

	    // Copy default opts to new object so defaults are not modified
	    var defaultOpts = utils.extend({}, this._opts);
	    opts = utils.extend(defaultOpts, opts);

	    var shiftyEasing = this._easing(opts.easing);
	    var values = this._resolveFromAndTo(progress, shiftyEasing, passedOpts);

	    this.stop();

	    // Trigger a layout so styles are calculated & the browser
	    // picks up the starting position before animating
	    this.path.getBoundingClientRect();

	    var offset = this._getComputedDashOffset();
	    var newOffset = this._progressToOffset(progress);

	    var self = this;
	    this._tweenable = new Tweenable();
	    this._tweenable.tween({
	        from: utils.extend({ offset: offset }, values.from),
	        to: utils.extend({ offset: newOffset }, values.to),
	        duration: opts.duration,
	        delay: opts.delay,
	        easing: shiftyEasing,
	        step: function(state) {
	            self.path.style.strokeDashoffset = state.offset;
	            var reference = opts.shape || self;
	            opts.step(state, reference, opts.attachment);
	        }
	    }).then(function(state) {
	        if (utils.isFunction(cb)) {
	            cb();
	        }
	    }).catch(function(err) {
	        console.error('Error in tweening:', err);
	        throw err;
	    });
	};

	Path.prototype._getComputedDashOffset = function _getComputedDashOffset() {
	    var computedStyle = window.getComputedStyle(this.path, null);
	    return parseFloat(computedStyle.getPropertyValue('stroke-dashoffset'), 10);
	};

	Path.prototype._progressToOffset = function _progressToOffset(progress) {
	    var length = this.path.getTotalLength();
	    return length - progress * length;
	};

	// Resolves from and to values for animation.
	Path.prototype._resolveFromAndTo = function _resolveFromAndTo(progress, easing, opts) {
	    if (opts.from && opts.to) {
	        return {
	            from: opts.from,
	            to: opts.to
	        };
	    }

	    return {
	        from: this._calculateFrom(easing),
	        to: this._calculateTo(progress, easing)
	    };
	};

	// Calculate `from` values from options passed at initialization
	Path.prototype._calculateFrom = function _calculateFrom(easing) {
	    return shifty.interpolate(this._opts.from, this._opts.to, this.value(), easing);
	};

	// Calculate `to` values from options passed at initialization
	Path.prototype._calculateTo = function _calculateTo(progress, easing) {
	    return shifty.interpolate(this._opts.from, this._opts.to, progress, easing);
	};

	Path.prototype._stopTween = function _stopTween() {
	    if (this._tweenable !== null) {
	        this._tweenable.stop(true);
	        this._tweenable = null;
	    }
	};

	Path.prototype._easing = function _easing(easing) {
	    if (EASING_ALIASES.hasOwnProperty(easing)) {
	        return EASING_ALIASES[easing];
	    }

	    return easing;
	};

	path = Path;
	return path;
}

var shape;
var hasRequiredShape;

function requireShape () {
	if (hasRequiredShape) return shape;
	hasRequiredShape = 1;
	// Base object for different progress bar shapes

	var Path = requirePath();
	var utils = requireUtils();

	var DESTROYED_ERROR = 'Object is destroyed';

	var Shape = function Shape(container, opts) {
	    // Throw a better error if progress bars are not initialized with `new`
	    // keyword
	    if (!(this instanceof Shape)) {
	        throw new Error('Constructor was called without new keyword');
	    }

	    // Prevent calling constructor without parameters so inheritance
	    // works correctly. To understand, this is how Shape is inherited:
	    //
	    //   Line.prototype = new Shape();
	    //
	    // We just want to set the prototype for Line.
	    if (arguments.length === 0) {
	        return;
	    }

	    // Default parameters for progress bar creation
	    this._opts = utils.extend({
	        color: '#555',
	        strokeWidth: 1.0,
	        trailColor: null,
	        trailWidth: null,
	        fill: null,
	        text: {
	            style: {
	                color: null,
	                position: 'absolute',
	                left: '50%',
	                top: '50%',
	                padding: 0,
	                margin: 0,
	                transform: {
	                    prefix: true,
	                    value: 'translate(-50%, -50%)'
	                }
	            },
	            autoStyleContainer: true,
	            alignToBottom: true,
	            value: null,
	            className: 'progressbar-text'
	        },
	        svgStyle: {
	            display: 'block',
	            width: '100%'
	        },
	        warnings: false
	    }, opts, true);  // Use recursive extend

	    // If user specifies e.g. svgStyle or text style, the whole object
	    // should replace the defaults to make working with styles easier
	    if (utils.isObject(opts) && opts.svgStyle !== undefined) {
	        this._opts.svgStyle = opts.svgStyle;
	    }
	    if (utils.isObject(opts) && utils.isObject(opts.text) && opts.text.style !== undefined) {
	        this._opts.text.style = opts.text.style;
	    }

	    var svgView = this._createSvgView(this._opts);

	    var element;
	    if (utils.isString(container)) {
	        element = document.querySelector(container);
	    } else {
	        element = container;
	    }

	    if (!element) {
	        throw new Error('Container does not exist: ' + container);
	    }

	    this._container = element;
	    this._container.appendChild(svgView.svg);
	    if (this._opts.warnings) {
	        this._warnContainerAspectRatio(this._container);
	    }

	    if (this._opts.svgStyle) {
	        utils.setStyles(svgView.svg, this._opts.svgStyle);
	    }

	    // Expose public attributes before Path initialization
	    this.svg = svgView.svg;
	    this.path = svgView.path;
	    this.trail = svgView.trail;
	    this.text = null;

	    var newOpts = utils.extend({
	        attachment: undefined,
	        shape: this
	    }, this._opts);
	    this._progressPath = new Path(svgView.path, newOpts);

	    if (utils.isObject(this._opts.text) && this._opts.text.value !== null) {
	        this.setText(this._opts.text.value);
	    }
	};

	Shape.prototype.animate = function animate(progress, opts, cb) {
	    if (this._progressPath === null) {
	        throw new Error(DESTROYED_ERROR);
	    }

	    this._progressPath.animate(progress, opts, cb);
	};

	Shape.prototype.stop = function stop() {
	    if (this._progressPath === null) {
	        throw new Error(DESTROYED_ERROR);
	    }

	    // Don't crash if stop is called inside step function
	    if (this._progressPath === undefined) {
	        return;
	    }

	    this._progressPath.stop();
	};

	Shape.prototype.pause = function pause() {
	    if (this._progressPath === null) {
	        throw new Error(DESTROYED_ERROR);
	    }

	    if (this._progressPath === undefined) {
	        return;
	    }

	    if (!this._progressPath._tweenable) {
	        // It seems that we can't pause this
	        return;
	    }

	    this._progressPath._tweenable.pause();
	};

	Shape.prototype.resume = function resume() {
	    if (this._progressPath === null) {
	        throw new Error(DESTROYED_ERROR);
	    }

	    if (this._progressPath === undefined) {
	        return;
	    }

	    if (!this._progressPath._tweenable) {
	        // It seems that we can't resume this
	        return;
	    }

	    this._progressPath._tweenable.resume();
	};

	Shape.prototype.destroy = function destroy() {
	    if (this._progressPath === null) {
	        throw new Error(DESTROYED_ERROR);
	    }

	    this.stop();
	    this.svg.parentNode.removeChild(this.svg);
	    this.svg = null;
	    this.path = null;
	    this.trail = null;
	    this._progressPath = null;

	    if (this.text !== null) {
	        this.text.parentNode.removeChild(this.text);
	        this.text = null;
	    }
	};

	Shape.prototype.set = function set(progress) {
	    if (this._progressPath === null) {
	        throw new Error(DESTROYED_ERROR);
	    }

	    this._progressPath.set(progress);
	};

	Shape.prototype.value = function value() {
	    if (this._progressPath === null) {
	        throw new Error(DESTROYED_ERROR);
	    }

	    if (this._progressPath === undefined) {
	        return 0;
	    }

	    return this._progressPath.value();
	};

	Shape.prototype.setText = function setText(newText) {
	    if (this._progressPath === null) {
	        throw new Error(DESTROYED_ERROR);
	    }

	    if (this.text === null) {
	        // Create new text node
	        this.text = this._createTextContainer(this._opts, this._container);
	        this._container.appendChild(this.text);
	    }

	    // Remove previous text and add new
	    if (utils.isObject(newText)) {
	        utils.removeChildren(this.text);
	        this.text.appendChild(newText);
	    } else {
	        this.text.innerHTML = newText;
	    }
	};

	Shape.prototype._createSvgView = function _createSvgView(opts) {
	    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	    this._initializeSvg(svg, opts);

	    var trailPath = null;
	    // Each option listed in the if condition are 'triggers' for creating
	    // the trail path
	    if (opts.trailColor || opts.trailWidth) {
	        trailPath = this._createTrail(opts);
	        svg.appendChild(trailPath);
	    }

	    var path = this._createPath(opts);
	    svg.appendChild(path);

	    return {
	        svg: svg,
	        path: path,
	        trail: trailPath
	    };
	};

	Shape.prototype._initializeSvg = function _initializeSvg(svg, opts) {
	    svg.setAttribute('viewBox', '0 0 100 100');
	};

	Shape.prototype._createPath = function _createPath(opts) {
	    var pathString = this._pathString(opts);
	    return this._createPathElement(pathString, opts);
	};

	Shape.prototype._createTrail = function _createTrail(opts) {
	    // Create path string with original passed options
	    var pathString = this._trailString(opts);

	    // Prevent modifying original
	    var newOpts = utils.extend({}, opts);

	    // Defaults for parameters which modify trail path
	    if (!newOpts.trailColor) {
	        newOpts.trailColor = '#eee';
	    }
	    if (!newOpts.trailWidth) {
	        newOpts.trailWidth = newOpts.strokeWidth;
	    }

	    newOpts.color = newOpts.trailColor;
	    newOpts.strokeWidth = newOpts.trailWidth;

	    // When trail path is set, fill must be set for it instead of the
	    // actual path to prevent trail stroke from clipping
	    newOpts.fill = null;

	    return this._createPathElement(pathString, newOpts);
	};

	Shape.prototype._createPathElement = function _createPathElement(pathString, opts) {
	    var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
	    path.setAttribute('d', pathString);
	    path.setAttribute('stroke', opts.color);
	    path.setAttribute('stroke-width', opts.strokeWidth);

	    if (opts.fill) {
	        path.setAttribute('fill', opts.fill);
	    } else {
	        path.setAttribute('fill-opacity', '0');
	    }

	    return path;
	};

	Shape.prototype._createTextContainer = function _createTextContainer(opts, container) {
	    var textContainer = document.createElement('div');
	    textContainer.className = opts.text.className;

	    var textStyle = opts.text.style;
	    if (textStyle) {
	        if (opts.text.autoStyleContainer) {
	            container.style.position = 'relative';
	        }

	        utils.setStyles(textContainer, textStyle);
	        // Default text color to progress bar's color
	        if (!textStyle.color) {
	            textContainer.style.color = opts.color;
	        }
	    }

	    this._initializeTextContainer(opts, container, textContainer);
	    return textContainer;
	};

	// Give custom shapes possibility to modify text element
	Shape.prototype._initializeTextContainer = function(opts, container, element) {
	    // By default, no-op
	    // Custom shapes should respect API options, such as text.style
	};

	Shape.prototype._pathString = function _pathString(opts) {
	    throw new Error('Override this function for each progress bar');
	};

	Shape.prototype._trailString = function _trailString(opts) {
	    throw new Error('Override this function for each progress bar');
	};

	Shape.prototype._warnContainerAspectRatio = function _warnContainerAspectRatio(container) {
	    if (!this.containerAspectRatio) {
	        return;
	    }

	    var computedStyle = window.getComputedStyle(container, null);
	    var width = parseFloat(computedStyle.getPropertyValue('width'), 10);
	    var height = parseFloat(computedStyle.getPropertyValue('height'), 10);
	    if (!utils.floatEquals(this.containerAspectRatio, width / height)) {
	        console.warn(
	            'Incorrect aspect ratio of container',
	            '#' + container.id,
	            'detected:',
	            computedStyle.getPropertyValue('width') + '(width)',
	            '/',
	            computedStyle.getPropertyValue('height') + '(height)',
	            '=',
	            width / height
	        );

	        console.warn(
	            'Aspect ratio of should be',
	            this.containerAspectRatio
	        );
	    }
	};

	shape = Shape;
	return shape;
}

var circle$2;
var hasRequiredCircle;

function requireCircle () {
	if (hasRequiredCircle) return circle$2;
	hasRequiredCircle = 1;
	// Circle shaped progress bar

	var Shape = requireShape();
	var utils = requireUtils();

	var Circle = function Circle(container, options) {
	    // Use two arcs to form a circle
	    // See this answer http://stackoverflow.com/a/10477334/1446092
	    this._pathTemplate =
	        'M 50,50 m 0,-{radius}' +
	        ' a {radius},{radius} 0 1 1 0,{2radius}' +
	        ' a {radius},{radius} 0 1 1 0,-{2radius}';

	    this.containerAspectRatio = 1;

	    Shape.apply(this, arguments);
	};

	Circle.prototype = new Shape();
	Circle.prototype.constructor = Circle;

	Circle.prototype._pathString = function _pathString(opts) {
	    var widthOfWider = opts.strokeWidth;
	    if (opts.trailWidth && opts.trailWidth > opts.strokeWidth) {
	        widthOfWider = opts.trailWidth;
	    }

	    var r = 50 - widthOfWider / 2;

	    return utils.render(this._pathTemplate, {
	        radius: r,
	        '2radius': r * 2
	    });
	};

	Circle.prototype._trailString = function _trailString(opts) {
	    return this._pathString(opts);
	};

	circle$2 = Circle;
	return circle$2;
}

var circleExports = requireCircle();
var circle = /*@__PURE__*/getDefaultExportFromCjs(circleExports);

var circle$1 = /*#__PURE__*/_mergeNamespaces$1({
  __proto__: null,
  default: circle
}, [circleExports]);

export { circle$1 as c };
//# sourceMappingURL=circle-Bg60O9ff-DNRR23A4.js.map
