(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('@keyframes fadeInSlide{0%{opacity:0;transform:translateY(-60px)}to{opacity:1;transform:translateY(0)}}@keyframes fadeOutSlide{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-30px);display:none}}.frame{background:linear-gradient(135deg,#6a11cb,#2575fc);color:#fff;max-width:350px;width:100%;min-height:100px;border-radius:15px;opacity:0;transform:translateY(-20px);animation:fadeInSlide .8s ease-out forwards;position:fixed;top:8%;right:5%;z-index:1000;box-shadow:0 10px 30px #0000004d;overflow:hidden;font-family:Segoe UI,sans-serif;padding:20px}.hide{animation:fadeOutSlide .5s ease-out forwards}.header{display:flex;justify-content:space-between;align-items:center}.title{margin:0;font-size:20px;font-weight:600}.exitbutton{background:none;border:none;cursor:pointer;padding:5px;display:flex;align-items:center;justify-content:center;outline:none}.exitbutton:focus{outline:none}.cancel{position:relative;width:20px;height:20px}.cancel:before,.cancel:after{content:"";position:absolute;width:100%;height:2px;background:#fff;border-radius:1px;top:50%;left:50%;transform:translate(-50%,-50%) rotate(45deg)}.cancel:after{transform:translate(-50%,-50%) rotate(-45deg)}.message{margin:15px 0 0;font-size:14px;line-height:1.5}')),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
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
  var i = Symbol.for("react.transitional.element"), _ = Symbol.for("react.fragment");
  function b(h, l, c) {
    var f = null;
    if (c !== void 0 && (f = "" + c), l.key !== void 0 && (f = "" + l.key), "key" in l) {
      c = {};
      for (var v in l)
        v !== "key" && (c[v] = l[v]);
    } else c = l;
    return l = c.ref, {
      $$typeof: i,
      type: h,
      key: f,
      ref: l !== void 0 ? l : null,
      props: c
    };
  }
  return C.Fragment = _, C.jsx = b, C.jsxs = b, C;
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
var ve;
function ke() {
  return ve || (ve = 1, process.env.NODE_ENV !== "production" && function() {
    function i(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === ye ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case Y:
          return "Fragment";
        case _e:
          return "Portal";
        case L:
          return "Profiler";
        case F:
          return "StrictMode";
        case M:
          return "Suspense";
        case W:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case I:
            return (e.displayName || "Context") + ".Provider";
          case Z:
            return (e._context.displayName || "Context") + ".Consumer";
          case $:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case U:
            return r = e.displayName || null, r !== null ? r : i(e.type) || "Memo";
          case q:
            r = e._payload, e = e._init;
            try {
              return i(e(r));
            } catch {
            }
        }
      return null;
    }
    function _(e) {
      return "" + e;
    }
    function b(e) {
      try {
        _(e);
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
        ), _(e);
      }
    }
    function h() {
    }
    function l() {
      if (w === 0) {
        D = console.log, ee = console.info, re = console.warn, te = console.error, oe = console.group, ne = console.groupCollapsed, ae = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: h,
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
    function c() {
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
    function f(e) {
      if (z === void 0)
        try {
          throw Error();
        } catch (t) {
          var r = t.stack.trim().match(/\n( *(at )?)/);
          z = r && r[1] || "", ue = -1 < t.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < t.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + z + e + ue;
    }
    function v(e, r) {
      if (!e || V) return "";
      var t = G.get(e);
      if (t !== void 0) return t;
      V = !0, t = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var n = null;
      n = g.H, g.H = null, l();
      try {
        var u = {
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
        u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var a = Object.getOwnPropertyDescriptor(
          u.DetermineComponentFrameRoot,
          "name"
        );
        a && a.configurable && Object.defineProperty(
          u.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var o = u.DetermineComponentFrameRoot(), E = o[0], y = o[1];
        if (E && y) {
          var s = E.split(`
`), T = y.split(`
`);
          for (o = a = 0; a < s.length && !s[a].includes(
            "DetermineComponentFrameRoot"
          ); )
            a++;
          for (; o < T.length && !T[o].includes(
            "DetermineComponentFrameRoot"
          ); )
            o++;
          if (a === s.length || o === T.length)
            for (a = s.length - 1, o = T.length - 1; 1 <= a && 0 <= o && s[a] !== T[o]; )
              o--;
          for (; 1 <= a && 0 <= o; a--, o--)
            if (s[a] !== T[o]) {
              if (a !== 1 || o !== 1)
                do
                  if (a--, o--, 0 > o || s[a] !== T[o]) {
                    var p = `
` + s[a].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && p.includes("<anonymous>") && (p = p.replace("<anonymous>", e.displayName)), typeof e == "function" && G.set(e, p), p;
                  }
                while (1 <= a && 0 <= o);
              break;
            }
        }
      } finally {
        V = !1, g.H = n, c(), Error.prepareStackTrace = t;
      }
      return s = (s = e ? e.displayName || e.name : "") ? f(s) : "", typeof e == "function" && G.set(e, s), s;
    }
    function R(e) {
      if (e == null) return "";
      if (typeof e == "function") {
        var r = e.prototype;
        return v(
          e,
          !(!r || !r.isReactComponent)
        );
      }
      if (typeof e == "string") return f(e);
      switch (e) {
        case M:
          return f("Suspense");
        case W:
          return f("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case $:
            return e = v(e.render, !1), e;
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
        se || (se = !0, console.error(
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
      var e = i(this.type);
      return le[e] || (le[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function ge(e, r, t, n, u, a) {
      return t = a.ref, e = {
        $$typeof: P,
        type: e,
        key: r,
        props: a,
        _owner: u
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
    function H(e, r, t, n, u, a) {
      if (typeof e == "string" || typeof e == "function" || e === Y || e === L || e === F || e === M || e === W || e === he || typeof e == "object" && e !== null && (e.$$typeof === q || e.$$typeof === U || e.$$typeof === I || e.$$typeof === Z || e.$$typeof === $ || e.$$typeof === je || e.getModuleId !== void 0)) {
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
        o = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? n = "null" : J(e) ? n = "array" : e !== void 0 && e.$$typeof === P ? (n = "<" + (i(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : n = typeof e, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          n,
          o
        );
      if (K.call(r, "key")) {
        o = i(e);
        var E = Object.keys(r).filter(function(s) {
          return s !== "key";
        });
        n = 0 < E.length ? "{key: someKey, " + E.join(": ..., ") + ": ...}" : "{key: someKey}", ie[o + n] || (E = 0 < E.length ? "{" + E.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          o,
          E,
          o
        ), ie[o + n] = !0);
      }
      if (o = null, t !== void 0 && (b(t), o = "" + t), de(r) && (b(r.key), o = "" + r.key), "key" in r) {
        t = {};
        for (var y in r)
          y !== "key" && (t[y] = r[y]);
      } else t = r;
      return o && me(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), ge(e, o, a, u, O(), t);
    }
    function X(e, r) {
      if (typeof e == "object" && e && e.$$typeof !== Re) {
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
      if (e._store && !e._store.validated && e.key == null && (e._store.validated = 1, r = xe(r), !ce[r])) {
        ce[r] = !0;
        var t = "";
        e && e._owner != null && e._owner !== O() && (t = null, typeof e._owner.tag == "number" ? t = i(e._owner.type) : typeof e._owner.name == "string" && (t = e._owner.name), t = " It was passed a child from " + t + ".");
        var n = g.getCurrentStack;
        g.getCurrentStack = function() {
          var u = R(e.type);
          return n && (u += n() || ""), u;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          r,
          t
        ), g.getCurrentStack = n;
      }
    }
    function xe(e) {
      var r = "", t = O();
      return t && (t = i(t.type)) && (r = `

Check the render method of \`` + t + "`."), r || (e = i(e)) && (r = `

Check the top-level render call using <` + e + ">."), r;
    }
    var Te = we, P = Symbol.for("react.transitional.element"), _e = Symbol.for("react.portal"), Y = Symbol.for("react.fragment"), F = Symbol.for("react.strict_mode"), L = Symbol.for("react.profiler"), Z = Symbol.for("react.consumer"), I = Symbol.for("react.context"), $ = Symbol.for("react.forward_ref"), M = Symbol.for("react.suspense"), W = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), he = Symbol.for("react.offscreen"), Q = Symbol.iterator, ye = Symbol.for("react.client.reference"), g = Te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = Object.prototype.hasOwnProperty, x = Object.assign, je = Symbol.for("react.client.reference"), J = Array.isArray, w = 0, D, ee, re, te, oe, ne, ae;
    h.__reactDisabledLog = !0;
    var z, ue, V = !1, G = new (typeof WeakMap == "function" ? WeakMap : Map)(), Re = Symbol.for("react.client.reference"), se, le = {}, ie = {}, ce = {};
    N.Fragment = Y, N.jsx = function(e, r, t, n, u) {
      return H(e, r, t, !1, n, u);
    }, N.jsxs = function(e, r, t, n, u) {
      return H(e, r, t, !0, n, u);
    };
  }()), N;
}
var Ee;
function Se() {
  return Ee || (Ee = 1, process.env.NODE_ENV === "production" ? S.exports = Ne() : S.exports = ke()), S.exports;
}
var j = Se();
function Ae({
  title: i = "Notification",
  message: _ = "This is a creative notification message!",
  className: b = "",
  titleColor: h = "",
  messageColor: l = "",
  customStyles: c = {}
}) {
  const [f, v] = pe(!1);
  return Ce(() => {
    const R = setTimeout(() => {
      v(!0);
    }, 5e3);
    return () => clearTimeout(R);
  }, []), /* @__PURE__ */ j.jsxs(
    "div",
    {
      className: `frame ${b} ${f ? "hide" : ""}`,
      style: c,
      children: [
        /* @__PURE__ */ j.jsxs("div", { className: "header", children: [
          /* @__PURE__ */ j.jsx("h1", { className: "title", style: { color: h }, children: i }),
          /* @__PURE__ */ j.jsx("button", { className: "exitbutton", onClick: () => v(!0), children: /* @__PURE__ */ j.jsx("span", { className: "cancel" }) })
        ] }),
        /* @__PURE__ */ j.jsx("p", { className: "message", style: { color: l }, children: _ })
      ]
    }
  );
}
export {
  Ae as default
};
