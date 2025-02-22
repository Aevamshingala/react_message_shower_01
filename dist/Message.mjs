import pe, { useState as we } from "react";
var k = { exports: {} }, w = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ie;
function Ce() {
  if (ie) return w;
  ie = 1;
  var c = Symbol.for("react.transitional.element"), T = Symbol.for("react.fragment");
  function b(y, s, i) {
    var f = null;
    if (i !== void 0 && (f = "" + i), s.key !== void 0 && (f = "" + s.key), "key" in s) {
      i = {};
      for (var v in s)
        v !== "key" && (i[v] = s[v]);
    } else i = s;
    return s = i.ref, {
      $$typeof: c,
      type: y,
      key: f,
      ref: s !== void 0 ? s : null,
      props: i
    };
  }
  return w.Fragment = T, w.jsx = b, w.jsxs = b, w;
}
var C = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var de;
function Ne() {
  return de || (de = 1, process.env.NODE_ENV !== "production" && function() {
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
      if (j === 0) {
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
      j++;
    }
    function i() {
      if (j--, j === 0) {
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
      0 > j && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function f(e) {
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
    function v(e, r) {
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
                  } catch (E) {
                    var N = E;
                  }
                  Reflect.construct(e, [], m);
                } else {
                  try {
                    m.call();
                  } catch (E) {
                    N = E;
                  }
                  e.call(m.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (E) {
                  N = E;
                }
                (m = e()) && typeof m.catch == "function" && m.catch(function() {
                });
              }
            } catch (E) {
              if (E && N && typeof E.stack == "string")
                return [E.stack, N.stack];
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
        var o = l.DetermineComponentFrameRoot(), d = o[0], R = o[1];
        if (d && R) {
          var u = d.split(`
`), _ = R.split(`
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
        H = !1, g.H = n, i(), Error.prepareStackTrace = t;
      }
      return u = (u = e ? e.displayName || e.name : "") ? f(u) : "", typeof e == "function" && V.set(e, u), u;
    }
    function S(e) {
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
        case $:
          return f("Suspense");
        case W:
          return f("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case M:
            return e = v(e.render, !1), e;
          case U:
            return S(e.type);
          case q:
            r = e._payload, e = e._init;
            try {
              return S(e(r));
            } catch {
            }
        }
      return "";
    }
    function O() {
      var e = g.A;
      return e === null ? null : e.getOwner();
    }
    function ve(e) {
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
        var d = Object.keys(r).filter(function(u) {
          return u !== "key";
        });
        n = 0 < d.length ? "{key: someKey, " + d.join(": ..., ") + ": ...}" : "{key: someKey}", ce[o + n] || (d = 0 < d.length ? "{" + d.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          o,
          d,
          o
        ), ce[o + n] = !0);
      }
      if (o = null, t !== void 0 && (b(t), o = "" + t), ve(r) && (b(r.key), o = "" + r.key), "key" in r) {
        t = {};
        for (var R in r)
          R !== "key" && (t[R] = r[R]);
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
      if (e._store && !e._store.validated && e.key == null && (e._store.validated = 1, r = xe(r), !fe[r])) {
        fe[r] = !0;
        var t = "";
        e && e._owner != null && e._owner !== O() && (t = null, typeof e._owner.tag == "number" ? t = c(e._owner.type) : typeof e._owner.name == "string" && (t = e._owner.name), t = " It was passed a child from " + t + ".");
        var n = g.getCurrentStack;
        g.getCurrentStack = function() {
          var l = S(e.type);
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
    var _e = pe, P = Symbol.for("react.transitional.element"), Te = Symbol.for("react.portal"), Y = Symbol.for("react.fragment"), F = Symbol.for("react.strict_mode"), I = Symbol.for("react.profiler"), L = Symbol.for("react.consumer"), Z = Symbol.for("react.context"), M = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), W = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), ye = Symbol.for("react.offscreen"), Q = Symbol.iterator, Re = Symbol.for("react.client.reference"), g = _e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = Object.prototype.hasOwnProperty, x = Object.assign, he = Symbol.for("react.client.reference"), J = Array.isArray, j = 0, D, ee, re, te, oe, ne, ae;
    y.__reactDisabledLog = !0;
    var z, le, H = !1, V = new (typeof WeakMap == "function" ? WeakMap : Map)(), je = Symbol.for("react.client.reference"), ue, se = {}, ce = {}, fe = {};
    C.Fragment = Y, C.jsx = function(e, r, t, n, l) {
      return G(e, r, t, !1, n, l);
    }, C.jsxs = function(e, r, t, n, l) {
      return G(e, r, t, !0, n, l);
    };
  }()), C;
}
var Ee;
function ke() {
  return Ee || (Ee = 1, process.env.NODE_ENV === "production" ? k.exports = Ce() : k.exports = Ne()), k.exports;
}
var h = ke();
function Oe({
  title: c = "Hello",
  message: T = "Hi👋, I am from React Messenger",
  className: b = "",
  titleColor: y = "",
  messageColor: s = "",
  customStyles: i = {}
}) {
  const [f, v] = we(!1);
  return useEffect(() => {
    f && setTimeout(() => {
      document.querySelector(".frame").style.display = "none";
    }, 500);
  }, [f]), /* @__PURE__ */ h.jsxs(
    "div",
    {
      className: `frame ${b} ${f ? "hide" : ""}`,
      style: i,
      children: [
        /* @__PURE__ */ h.jsxs("div", { className: "header", children: [
          /* @__PURE__ */ h.jsx("h1", { className: "title", style: { color: y }, children: c }),
          /* @__PURE__ */ h.jsx("button", { className: "exitbutton", onClick: () => v(!0), children: /* @__PURE__ */ h.jsx("span", { className: "cancel" }) })
        ] }),
        /* @__PURE__ */ h.jsx("p", { className: "message", style: { color: s }, children: T })
      ]
    }
  );
}
export {
  Oe as default
};
