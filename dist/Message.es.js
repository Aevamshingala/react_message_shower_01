(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('@keyframes fadeInSlide{0%{opacity:0;transform:translateY(-60px)}50%{opacity:1;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}@keyframes fadeOutSlide{0%{opacity:1;transform:translateY(0)}50%{opacity:.5;transform:translateY(-20px)}to{opacity:0;transform:translateY(-30px)}}.frame{background-color:#0cc;color:#000;max-width:25vw;min-width:350px;width:350px;min-height:15vh;border:2px solid white;border-radius:20px;opacity:0;transform:translateY(-20px);animation:fadeInSlide 1s ease-out forwards;position:fixed;top:8%;left:70%;z-index:1000}.hide{animation:fadeOutSlide .5s ease-out forwards}.title{margin:2px;padding:8px 20px;color:#f9f9f9;text-align:left;font-size:x-large}.message{font-family:Arial,Helvetica,sans-serif;margin:1px;padding:8px 20px;color:#f9f9f9}.exit{display:flex;justify-content:flex-end}.exitbutton{padding:20px;background-color:transparent;border:none;cursor:pointer}.header{display:flex;justify-content:space-between;align-items:center}.cancel{position:relative;width:20px;height:20px;cursor:pointer;margin-right:10px}.cancel:before,.cancel:after{content:"";position:absolute;width:20px;height:2px;background-color:#fff;border-radius:1px}.cancel:before{transform:rotate(45deg)}.cancel:after{transform:rotate(-45deg)}')),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import we, { useState as pe, useEffect as Ce } from "react";
var S = { exports: {} }, C = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fe;
function Ne() {
  if (fe) return C;
  fe = 1;
  var c = Symbol.for("react.transitional.element"), T = Symbol.for("react.fragment");
  function b(y, s, f) {
    var i = null;
    if (f !== void 0 && (i = "" + f), s.key !== void 0 && (i = "" + s.key), "key" in s) {
      f = {};
      for (var E in s)
        E !== "key" && (f[E] = s[E]);
    } else f = s;
    return s = f.ref, {
      $$typeof: c,
      type: y,
      key: i,
      ref: s !== void 0 ? s : null,
      props: f
    };
  }
  return C.Fragment = T, C.jsx = b, C.jsxs = b, C;
}
var N = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ee;
function ke() {
  return Ee || (Ee = 1, process.env.NODE_ENV !== "production" && function() {
    function c(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Re ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case Y:
          return "Fragment";
        case Te:
          return "Portal";
        case I:
          return "Profiler";
        case F:
          return "StrictMode";
        case $:
          return "Suspense";
        case W:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case Z:
            return (e.displayName || "Context") + ".Provider";
          case L:
            return (e._context.displayName || "Context") + ".Consumer";
          case M:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case U:
            return r = e.displayName || null, r !== null ? r : c(e.type) || "Memo";
          case q:
            r = e._payload, e = e._init;
            try {
              return c(e(r));
            } catch {
            }
        }
      return null;
    }
    function T(e) {
      return "" + e;
    }
    function b(e) {
      try {
        T(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, n = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          n
        ), T(e);
      }
    }
    function y() {
    }
    function s() {
      if (w === 0) {
        D = console.log, ee = console.info, re = console.warn, te = console.error, oe = console.group, ne = console.groupCollapsed, ae = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: y,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      w++;
    }
    function f() {
      if (w--, w === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: x({}, e, { value: D }),
          info: x({}, e, { value: ee }),
          warn: x({}, e, { value: re }),
          error: x({}, e, { value: te }),
          group: x({}, e, { value: oe }),
          groupCollapsed: x({}, e, { value: ne }),
          groupEnd: x({}, e, { value: ae })
        });
      }
      0 > w && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function i(e) {
      if (z === void 0)
        try {
          throw Error();
        } catch (t) {
          var r = t.stack.trim().match(/\n( *(at )?)/);
          z = r && r[1] || "", le = -1 < t.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < t.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + z + e + le;
    }
    function E(e, r) {
      if (!e || H) return "";
      var t = V.get(e);
      if (t !== void 0) return t;
      H = !0, t = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var n = null;
      n = g.H, g.H = null, s();
      try {
        var l = {
          DetermineComponentFrameRoot: function() {
            try {
              if (r) {
                var m = function() {
                  throw Error();
                };
                if (Object.defineProperty(m.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(m, []);
                  } catch (d) {
                    var k = d;
                  }
                  Reflect.construct(e, [], m);
                } else {
                  try {
                    m.call();
                  } catch (d) {
                    k = d;
                  }
                  e.call(m.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (d) {
                  k = d;
                }
                (m = e()) && typeof m.catch == "function" && m.catch(function() {
                });
              }
            } catch (d) {
              if (d && k && typeof d.stack == "string")
                return [d.stack, k.stack];
            }
            return [null, null];
          }
        };
        l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var a = Object.getOwnPropertyDescriptor(
          l.DetermineComponentFrameRoot,
          "name"
        );
        a && a.configurable && Object.defineProperty(
          l.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var o = l.DetermineComponentFrameRoot(), v = o[0], h = o[1];
        if (v && h) {
          var u = v.split(`
`), _ = h.split(`
`);
          for (o = a = 0; a < u.length && !u[a].includes(
            "DetermineComponentFrameRoot"
          ); )
            a++;
          for (; o < _.length && !_[o].includes(
            "DetermineComponentFrameRoot"
          ); )
            o++;
          if (a === u.length || o === _.length)
            for (a = u.length - 1, o = _.length - 1; 1 <= a && 0 <= o && u[a] !== _[o]; )
              o--;
          for (; 1 <= a && 0 <= o; a--, o--)
            if (u[a] !== _[o]) {
              if (a !== 1 || o !== 1)
                do
                  if (a--, o--, 0 > o || u[a] !== _[o]) {
                    var p = `
` + u[a].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && p.includes("<anonymous>") && (p = p.replace("<anonymous>", e.displayName)), typeof e == "function" && V.set(e, p), p;
                  }
                while (1 <= a && 0 <= o);
              break;
            }
        }
      } finally {
        H = !1, g.H = n, f(), Error.prepareStackTrace = t;
      }
      return u = (u = e ? e.displayName || e.name : "") ? i(u) : "", typeof e == "function" && V.set(e, u), u;
    }
    function R(e) {
      if (e == null) return "";
      if (typeof e == "function") {
        var r = e.prototype;
        return E(
          e,
          !(!r || !r.isReactComponent)
        );
      }
      if (typeof e == "string") return i(e);
      switch (e) {
        case $:
          return i("Suspense");
        case W:
          return i("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case M:
            return e = E(e.render, !1), e;
          case U:
            return R(e.type);
          case q:
            r = e._payload, e = e._init;
            try {
              return R(e(r));
            } catch {
            }
        }
      return "";
    }
    function O() {
      var e = g.A;
      return e === null ? null : e.getOwner();
    }
    function de(e) {
      if (K.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function me(e, r) {
      function t() {
        ue || (ue = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function be() {
      var e = c(this.type);
      return se[e] || (se[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function ge(e, r, t, n, l, a) {
      return t = a.ref, e = {
        $$typeof: P,
        type: e,
        key: r,
        props: a,
        _owner: l
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: be
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function G(e, r, t, n, l, a) {
      if (typeof e == "string" || typeof e == "function" || e === Y || e === I || e === F || e === $ || e === W || e === ye || typeof e == "object" && e !== null && (e.$$typeof === q || e.$$typeof === U || e.$$typeof === Z || e.$$typeof === L || e.$$typeof === M || e.$$typeof === he || e.getModuleId !== void 0)) {
        var o = r.children;
        if (o !== void 0)
          if (n)
            if (J(o)) {
              for (n = 0; n < o.length; n++)
                X(o[n], e);
              Object.freeze && Object.freeze(o);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else X(o, e);
      } else
        o = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? n = "null" : J(e) ? n = "array" : e !== void 0 && e.$$typeof === P ? (n = "<" + (c(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : n = typeof e, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          n,
          o
        );
      if (K.call(r, "key")) {
        o = c(e);
        var v = Object.keys(r).filter(function(u) {
          return u !== "key";
        });
        n = 0 < v.length ? "{key: someKey, " + v.join(": ..., ") + ": ...}" : "{key: someKey}", ce[o + n] || (v = 0 < v.length ? "{" + v.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          o,
          v,
          o
        ), ce[o + n] = !0);
      }
      if (o = null, t !== void 0 && (b(t), o = "" + t), de(r) && (b(r.key), o = "" + r.key), "key" in r) {
        t = {};
        for (var h in r)
          h !== "key" && (t[h] = r[h]);
      } else t = r;
      return o && me(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), ge(e, o, a, l, O(), t);
    }
    function X(e, r) {
      if (typeof e == "object" && e && e.$$typeof !== je) {
        if (J(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            A(n) && B(n, r);
          }
        else if (A(e))
          e._store && (e._store.validated = 1);
        else if (e === null || typeof e != "object" ? t = null : (t = Q && e[Q] || e["@@iterator"], t = typeof t == "function" ? t : null), typeof t == "function" && t !== e.entries && (t = t.call(e), t !== e))
          for (; !(e = t.next()).done; )
            A(e.value) && B(e.value, r);
      }
    }
    function A(e) {
      return typeof e == "object" && e !== null && e.$$typeof === P;
    }
    function B(e, r) {
      if (e._store && !e._store.validated && e.key == null && (e._store.validated = 1, r = xe(r), !ie[r])) {
        ie[r] = !0;
        var t = "";
        e && e._owner != null && e._owner !== O() && (t = null, typeof e._owner.tag == "number" ? t = c(e._owner.type) : typeof e._owner.name == "string" && (t = e._owner.name), t = " It was passed a child from " + t + ".");
        var n = g.getCurrentStack;
        g.getCurrentStack = function() {
          var l = R(e.type);
          return n && (l += n() || ""), l;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          r,
          t
        ), g.getCurrentStack = n;
      }
    }
    function xe(e) {
      var r = "", t = O();
      return t && (t = c(t.type)) && (r = `

Check the render method of \`` + t + "`."), r || (e = c(e)) && (r = `

Check the top-level render call using <` + e + ">."), r;
    }
    var _e = we, P = Symbol.for("react.transitional.element"), Te = Symbol.for("react.portal"), Y = Symbol.for("react.fragment"), F = Symbol.for("react.strict_mode"), I = Symbol.for("react.profiler"), L = Symbol.for("react.consumer"), Z = Symbol.for("react.context"), M = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), W = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), ye = Symbol.for("react.offscreen"), Q = Symbol.iterator, Re = Symbol.for("react.client.reference"), g = _e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = Object.prototype.hasOwnProperty, x = Object.assign, he = Symbol.for("react.client.reference"), J = Array.isArray, w = 0, D, ee, re, te, oe, ne, ae;
    y.__reactDisabledLog = !0;
    var z, le, H = !1, V = new (typeof WeakMap == "function" ? WeakMap : Map)(), je = Symbol.for("react.client.reference"), ue, se = {}, ce = {}, ie = {};
    N.Fragment = Y, N.jsx = function(e, r, t, n, l) {
      return G(e, r, t, !1, n, l);
    }, N.jsxs = function(e, r, t, n, l) {
      return G(e, r, t, !0, n, l);
    };
  }()), N;
}
var ve;
function Se() {
  return ve || (ve = 1, process.env.NODE_ENV === "production" ? S.exports = Ne() : S.exports = ke()), S.exports;
}
var j = Se();
function Ae({
  title: c = "Hello",
  message: T = "Hi👋, I am from React Messenger",
  className: b = "",
  titleColor: y = "",
  messageColor: s = "",
  customStyles: f = {}
}) {
  const [i, E] = pe(!1);
  return Ce(() => {
    let R;
    return i && (R = setTimeout(() => {
      E(!1);
    }, 500)), () => clearTimeout(R);
  }, [i]), /* @__PURE__ */ j.jsxs(
    "div",
    {
      className: `frame ${b} ${i ? "hide" : ""}`,
      style: f,
      children: [
        /* @__PURE__ */ j.jsxs("div", { className: "header", children: [
          /* @__PURE__ */ j.jsx("h1", { className: "title", style: { color: y }, children: c }),
          /* @__PURE__ */ j.jsx("button", { className: "exitbutton", onClick: () => E(!0), children: /* @__PURE__ */ j.jsx("span", { className: "cancel" }) })
        ] }),
        /* @__PURE__ */ j.jsx("p", { className: "message", style: { color: s }, children: T })
      ]
    }
  );
}
export {
  Ae as default
};
