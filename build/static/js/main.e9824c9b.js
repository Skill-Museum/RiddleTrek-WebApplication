/*! For license information please see main.e9824c9b.js.LICENSE.txt */
(() => {
  var e = {
      497: (e, t, n) => {
        "use strict";
        var r = n(218);
        function a() {}
        function o() {}
        (o.resetWarningCache = a),
          (e.exports = function () {
            function e(e, t, n, a, o, i) {
              if (i !== r) {
                var l = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                );
                throw ((l.name = "Invariant Violation"), l);
              }
            }
            function t() {
              return e;
            }
            e.isRequired = e;
            var n = {
              array: e,
              bigint: e,
              bool: e,
              func: e,
              number: e,
              object: e,
              string: e,
              symbol: e,
              any: e,
              arrayOf: t,
              element: e,
              elementType: e,
              instanceOf: t,
              node: e,
              objectOf: t,
              oneOf: t,
              oneOfType: t,
              shape: t,
              exact: t,
              checkPropTypes: o,
              resetWarningCache: a,
            };
            return (n.PropTypes = n), n;
          });
      },
      173: (e, t, n) => {
        e.exports = n(497)();
      },
      218: (e) => {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      },
      730: (e, t, n) => {
        "use strict";
        var r = n(43),
          a = n(853);
        function o(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var i = new Set(),
          l = {};
        function s(e, t) {
          c(e, t), c(e + "Capture", t);
        }
        function c(e, t) {
          for (l[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
        }
        var u = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          d = Object.prototype.hasOwnProperty,
          f =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          m = {};
        function h(e, t, n, r, a, o, i) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = o),
            (this.removeEmptyString = i);
        }
        var g = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            g[e] = new h(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            g[t] = new h(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              g[e] = new h(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            g[e] = new h(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              g[e] = new h(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            g[e] = new h(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            g[e] = new h(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            g[e] = new h(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            g[e] = new h(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var b = /[\-:]([a-z])/g;
        function w(e) {
          return e[1].toUpperCase();
        }
        function v(e, t, n, r) {
          var a = g.hasOwnProperty(t) ? g[t] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!d.call(m, e) ||
                    (!d.call(p, e) &&
                      (f.test(e) ? (m[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (a = a.type) || (4 === a && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(b, w);
            g[t] = new h(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(b, w);
              g[t] = new h(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(b, w);
            g[t] = new h(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            g[e] = new h(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (g.xlinkHref = new h(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            g[e] = new h(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var y = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          x = Symbol.for("react.element"),
          k = Symbol.for("react.portal"),
          j = Symbol.for("react.fragment"),
          C = Symbol.for("react.strict_mode"),
          S = Symbol.for("react.profiler"),
          N = Symbol.for("react.provider"),
          E = Symbol.for("react.context"),
          R = Symbol.for("react.forward_ref"),
          F = Symbol.for("react.suspense"),
          O = Symbol.for("react.suspense_list"),
          A = Symbol.for("react.memo"),
          P = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var T = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var M = Symbol.iterator;
        function _(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (M && e[M]) || e["@@iterator"])
            ? e
            : null;
        }
        var I,
          L = Object.assign;
        function U(e) {
          if (void 0 === I)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              I = (t && t[1]) || "";
            }
          return "\n" + I + e;
        }
        var D = !1;
        function z(e, t) {
          if (!e || D) return "";
          D = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (c) {
                  var r = c;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (c) {
                  r = c;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (c) {
                r = c;
              }
              e();
            }
          } catch (c) {
            if (c && r && "string" === typeof c.stack) {
              for (
                var a = c.stack.split("\n"),
                  o = r.stack.split("\n"),
                  i = a.length - 1,
                  l = o.length - 1;
                1 <= i && 0 <= l && a[i] !== o[l];

              )
                l--;
              for (; 1 <= i && 0 <= l; i--, l--)
                if (a[i] !== o[l]) {
                  if (1 !== i || 1 !== l)
                    do {
                      if ((i--, 0 > --l || a[i] !== o[l])) {
                        var s = "\n" + a[i].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            s.includes("<anonymous>") &&
                            (s = s.replace("<anonymous>", e.displayName)),
                          s
                        );
                      }
                    } while (1 <= i && 0 <= l);
                  break;
                }
            }
          } finally {
            (D = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? U(e) : "";
        }
        function B(e) {
          switch (e.tag) {
            case 5:
              return U(e.type);
            case 16:
              return U("Lazy");
            case 13:
              return U("Suspense");
            case 19:
              return U("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = z(e.type, !1));
            case 11:
              return (e = z(e.type.render, !1));
            case 1:
              return (e = z(e.type, !0));
            default:
              return "";
          }
        }
        function W(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case j:
              return "Fragment";
            case k:
              return "Portal";
            case S:
              return "Profiler";
            case C:
              return "StrictMode";
            case F:
              return "Suspense";
            case O:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case E:
                return (e.displayName || "Context") + ".Consumer";
              case N:
                return (e._context.displayName || "Context") + ".Provider";
              case R:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case A:
                return null !== (t = e.displayName || null)
                  ? t
                  : W(e.type) || "Memo";
              case P:
                (t = e._payload), (e = e._init);
                try {
                  return W(e(t));
                } catch (n) {}
            }
          return null;
        }
        function H(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return W(t);
            case 8:
              return t === C ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function V(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function Y(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function q(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = Y(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  o = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), o.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function $(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = Y(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function G(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function Q(e, t) {
          var n = t.checked;
          return L({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function K(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = V(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function X(e, t) {
          null != (t = t.checked) && v(e, "checked", t, !1);
        }
        function J(e, t) {
          X(e, t);
          var n = V(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, V(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function Z(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && G(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + V(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
          return L({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(o(92));
              if (te(n)) {
                if (1 < n.length) throw Error(o(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: V(n) };
        }
        function oe(e, t) {
          var n = V(t.value),
            r = V(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function ie(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function le(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function se(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? le(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var ce,
          ue,
          de =
            ((ue = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ce = ce || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ce.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ue(e, t);
                  });
                }
              : ue);
        function fe(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          me = ["Webkit", "ms", "Moz", "O"];
        function he(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function ge(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = he(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(pe).forEach(function (e) {
          me.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var be = L(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function we(e, t) {
          if (t) {
            if (
              be[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(o(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(o(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(o(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(o(62));
          }
        }
        function ve(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var ye = null;
        function xe(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var ke = null,
          je = null,
          Ce = null;
        function Se(e) {
          if ((e = va(e))) {
            if ("function" !== typeof ke) throw Error(o(280));
            var t = e.stateNode;
            t && ((t = xa(t)), ke(e.stateNode, e.type, t));
          }
        }
        function Ne(e) {
          je ? (Ce ? Ce.push(e) : (Ce = [e])) : (je = e);
        }
        function Ee() {
          if (je) {
            var e = je,
              t = Ce;
            if (((Ce = je = null), Se(e), t))
              for (e = 0; e < t.length; e++) Se(t[e]);
          }
        }
        function Re(e, t) {
          return e(t);
        }
        function Fe() {}
        var Oe = !1;
        function Ae(e, t, n) {
          if (Oe) return e(t, n);
          Oe = !0;
          try {
            return Re(e, t, n);
          } finally {
            (Oe = !1), (null !== je || null !== Ce) && (Fe(), Ee());
          }
        }
        function Pe(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = xa(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(o(231, t, typeof n));
          return n;
        }
        var Te = !1;
        if (u)
          try {
            var Me = {};
            Object.defineProperty(Me, "passive", {
              get: function () {
                Te = !0;
              },
            }),
              window.addEventListener("test", Me, Me),
              window.removeEventListener("test", Me, Me);
          } catch (ue) {
            Te = !1;
          }
        function _e(e, t, n, r, a, o, i, l, s) {
          var c = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, c);
          } catch (u) {
            this.onError(u);
          }
        }
        var Ie = !1,
          Le = null,
          Ue = !1,
          De = null,
          ze = {
            onError: function (e) {
              (Ie = !0), (Le = e);
            },
          };
        function Be(e, t, n, r, a, o, i, l, s) {
          (Ie = !1), (Le = null), _e.apply(ze, arguments);
        }
        function We(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function He(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function Ve(e) {
          if (We(e) !== e) throw Error(o(188));
        }
        function Ye(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = We(e))) throw Error(o(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var i = a.alternate;
                if (null === i) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === i.child) {
                  for (i = a.child; i; ) {
                    if (i === n) return Ve(a), e;
                    if (i === r) return Ve(a), t;
                    i = i.sibling;
                  }
                  throw Error(o(188));
                }
                if (n.return !== r.return) (n = a), (r = i);
                else {
                  for (var l = !1, s = a.child; s; ) {
                    if (s === n) {
                      (l = !0), (n = a), (r = i);
                      break;
                    }
                    if (s === r) {
                      (l = !0), (r = a), (n = i);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!l) {
                    for (s = i.child; s; ) {
                      if (s === n) {
                        (l = !0), (n = i), (r = a);
                        break;
                      }
                      if (s === r) {
                        (l = !0), (r = i), (n = a);
                        break;
                      }
                      s = s.sibling;
                    }
                    if (!l) throw Error(o(189));
                  }
                }
                if (n.alternate !== r) throw Error(o(190));
              }
              if (3 !== n.tag) throw Error(o(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? qe(e)
            : null;
        }
        function qe(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = qe(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var $e = a.unstable_scheduleCallback,
          Ge = a.unstable_cancelCallback,
          Qe = a.unstable_shouldYield,
          Ke = a.unstable_requestPaint,
          Xe = a.unstable_now,
          Je = a.unstable_getCurrentPriorityLevel,
          Ze = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          ot = null;
        var it = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((lt(e) / st) | 0)) | 0;
              },
          lt = Math.log,
          st = Math.LN2;
        var ct = 64,
          ut = 4194304;
        function dt(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function ft(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            o = e.pingedLanes,
            i = 268435455 & n;
          if (0 !== i) {
            var l = i & ~a;
            0 !== l ? (r = dt(l)) : 0 !== (o &= i) && (r = dt(o));
          } else 0 !== (i = n & ~a) ? (r = dt(i)) : 0 !== o && (r = dt(o));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (o = t & -t) || (16 === a && 0 !== (4194240 & o)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - it(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function mt(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function ht() {
          var e = ct;
          return 0 === (4194240 & (ct <<= 1)) && (ct = 64), e;
        }
        function gt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function bt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - it(t))] = n);
        }
        function wt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - it(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var vt = 0;
        function yt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var xt,
          kt,
          jt,
          Ct,
          St,
          Nt = !1,
          Et = [],
          Rt = null,
          Ft = null,
          Ot = null,
          At = new Map(),
          Pt = new Map(),
          Tt = [],
          Mt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function _t(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Rt = null;
              break;
            case "dragenter":
            case "dragleave":
              Ft = null;
              break;
            case "mouseover":
            case "mouseout":
              Ot = null;
              break;
            case "pointerover":
            case "pointerout":
              At.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Pt.delete(t.pointerId);
          }
        }
        function It(e, t, n, r, a, o) {
          return null === e || e.nativeEvent !== o
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: o,
                targetContainers: [a],
              }),
              null !== t && null !== (t = va(t)) && kt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function Lt(e) {
          var t = wa(e.target);
          if (null !== t) {
            var n = We(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = He(n)))
                  return (
                    (e.blockedOn = t),
                    void St(e.priority, function () {
                      jt(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Ut(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Qt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = va(n)) && kt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (ye = r), n.target.dispatchEvent(r), (ye = null), t.shift();
          }
          return !0;
        }
        function Dt(e, t, n) {
          Ut(e) && n.delete(t);
        }
        function zt() {
          (Nt = !1),
            null !== Rt && Ut(Rt) && (Rt = null),
            null !== Ft && Ut(Ft) && (Ft = null),
            null !== Ot && Ut(Ot) && (Ot = null),
            At.forEach(Dt),
            Pt.forEach(Dt);
        }
        function Bt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Nt ||
              ((Nt = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, zt)));
        }
        function Wt(e) {
          function t(t) {
            return Bt(t, e);
          }
          if (0 < Et.length) {
            Bt(Et[0], e);
            for (var n = 1; n < Et.length; n++) {
              var r = Et[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Rt && Bt(Rt, e),
              null !== Ft && Bt(Ft, e),
              null !== Ot && Bt(Ot, e),
              At.forEach(t),
              Pt.forEach(t),
              n = 0;
            n < Tt.length;
            n++
          )
            (r = Tt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Tt.length && null === (n = Tt[0]).blockedOn; )
            Lt(n), null === n.blockedOn && Tt.shift();
        }
        var Ht = y.ReactCurrentBatchConfig,
          Vt = !0;
        function Yt(e, t, n, r) {
          var a = vt,
            o = Ht.transition;
          Ht.transition = null;
          try {
            (vt = 1), $t(e, t, n, r);
          } finally {
            (vt = a), (Ht.transition = o);
          }
        }
        function qt(e, t, n, r) {
          var a = vt,
            o = Ht.transition;
          Ht.transition = null;
          try {
            (vt = 4), $t(e, t, n, r);
          } finally {
            (vt = a), (Ht.transition = o);
          }
        }
        function $t(e, t, n, r) {
          if (Vt) {
            var a = Qt(e, t, n, r);
            if (null === a) Vr(e, t, r, Gt, n), _t(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (Rt = It(Rt, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (Ft = It(Ft, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (Ot = It(Ot, e, t, n, r, a)), !0;
                  case "pointerover":
                    var o = a.pointerId;
                    return At.set(o, It(At.get(o) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (o = a.pointerId),
                      Pt.set(o, It(Pt.get(o) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((_t(e, r), 4 & t && -1 < Mt.indexOf(e))) {
              for (; null !== a; ) {
                var o = va(a);
                if (
                  (null !== o && xt(o),
                  null === (o = Qt(e, t, n, r)) && Vr(e, t, r, Gt, n),
                  o === a)
                )
                  break;
                a = o;
              }
              null !== a && r.stopPropagation();
            } else Vr(e, t, r, null, n);
          }
        }
        var Gt = null;
        function Qt(e, t, n, r) {
          if (((Gt = null), null !== (e = wa((e = xe(r))))))
            if (null === (t = We(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = He(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Gt = e), null;
        }
        function Kt(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Je()) {
                case Ze:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Xt = null,
          Jt = null,
          Zt = null;
        function en() {
          if (Zt) return Zt;
          var e,
            t,
            n = Jt,
            r = n.length,
            a = "value" in Xt ? Xt.value : Xt.textContent,
            o = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var i = r - e;
          for (t = 1; t <= i && n[r - t] === a[o - t]; t++);
          return (Zt = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, a, o) {
            for (var i in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = o),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(a) : a[i]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            L(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var on,
          ln,
          sn,
          cn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          un = an(cn),
          dn = L({}, cn, { view: 0, detail: 0 }),
          fn = an(dn),
          pn = L({}, dn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Sn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== sn &&
                    (sn && "mousemove" === e.type
                      ? ((on = e.screenX - sn.screenX),
                        (ln = e.screenY - sn.screenY))
                      : (ln = on = 0),
                    (sn = e)),
                  on);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : ln;
            },
          }),
          mn = an(pn),
          hn = an(L({}, pn, { dataTransfer: 0 })),
          gn = an(L({}, dn, { relatedTarget: 0 })),
          bn = an(
            L({}, cn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          wn = L({}, cn, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          vn = an(wn),
          yn = an(L({}, cn, { data: 0 })),
          xn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          kn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          jn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function Cn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = jn[e]) && !!t[e];
        }
        function Sn() {
          return Cn;
        }
        var Nn = L({}, dn, {
            key: function (e) {
              if (e.key) {
                var t = xn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? kn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Sn,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          En = an(Nn),
          Rn = an(
            L({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          Fn = an(
            L({}, dn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Sn,
            })
          ),
          On = an(
            L({}, cn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          An = L({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Pn = an(An),
          Tn = [9, 13, 27, 32],
          Mn = u && "CompositionEvent" in window,
          _n = null;
        u && "documentMode" in document && (_n = document.documentMode);
        var In = u && "TextEvent" in window && !_n,
          Ln = u && (!Mn || (_n && 8 < _n && 11 >= _n)),
          Un = String.fromCharCode(32),
          Dn = !1;
        function zn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Tn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Bn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Wn = !1;
        var Hn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Vn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Hn[e.type] : "textarea" === t;
        }
        function Yn(e, t, n, r) {
          Ne(r),
            0 < (t = qr(t, "onChange")).length &&
              ((n = new un("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var qn = null,
          $n = null;
        function Gn(e) {
          Ur(e, 0);
        }
        function Qn(e) {
          if ($(ya(e))) return e;
        }
        function Kn(e, t) {
          if ("change" === e) return t;
        }
        var Xn = !1;
        if (u) {
          var Jn;
          if (u) {
            var Zn = "oninput" in document;
            if (!Zn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Zn = "function" === typeof er.oninput);
            }
            Jn = Zn;
          } else Jn = !1;
          Xn = Jn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          qn && (qn.detachEvent("onpropertychange", nr), ($n = qn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Qn($n)) {
            var t = [];
            Yn(t, $n, e, xe(e)), Ae(Gn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), ($n = n), (qn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Qn($n);
        }
        function or(e, t) {
          if ("click" === e) return Qn(t);
        }
        function ir(e, t) {
          if ("input" === e || "change" === e) return Qn(t);
        }
        var lr =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function sr(e, t) {
          if (lr(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!d.call(t, a) || !lr(e[a], t[a])) return !1;
          }
          return !0;
        }
        function cr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function ur(e, t) {
          var n,
            r = cr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = cr(r);
          }
        }
        function dr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? dr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function fr() {
          for (var e = window, t = G(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = G((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function mr(e) {
          var t = fr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            dr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = n.textContent.length,
                  o = Math.min(r.start, a);
                (r = void 0 === r.end ? o : Math.min(r.end, a)),
                  !e.extend && o > r && ((a = r), (r = o), (o = a)),
                  (a = ur(n, o));
                var i = ur(n, r);
                a &&
                  i &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== i.node ||
                    e.focusOffset !== i.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  o > r
                    ? (e.addRange(t), e.extend(i.node, i.offset))
                    : (t.setEnd(i.node, i.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var hr = u && "documentMode" in document && 11 >= document.documentMode,
          gr = null,
          br = null,
          wr = null,
          vr = !1;
        function yr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          vr ||
            null == gr ||
            gr !== G(r) ||
            ("selectionStart" in (r = gr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (wr && sr(wr, r)) ||
              ((wr = r),
              0 < (r = qr(br, "onSelect")).length &&
                ((t = new un("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = gr))));
        }
        function xr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var kr = {
            animationend: xr("Animation", "AnimationEnd"),
            animationiteration: xr("Animation", "AnimationIteration"),
            animationstart: xr("Animation", "AnimationStart"),
            transitionend: xr("Transition", "TransitionEnd"),
          },
          jr = {},
          Cr = {};
        function Sr(e) {
          if (jr[e]) return jr[e];
          if (!kr[e]) return e;
          var t,
            n = kr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Cr) return (jr[e] = n[t]);
          return e;
        }
        u &&
          ((Cr = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete kr.animationend.animation,
            delete kr.animationiteration.animation,
            delete kr.animationstart.animation),
          "TransitionEvent" in window || delete kr.transitionend.transition);
        var Nr = Sr("animationend"),
          Er = Sr("animationiteration"),
          Rr = Sr("animationstart"),
          Fr = Sr("transitionend"),
          Or = new Map(),
          Ar =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Pr(e, t) {
          Or.set(e, t), s(t, [e]);
        }
        for (var Tr = 0; Tr < Ar.length; Tr++) {
          var Mr = Ar[Tr];
          Pr(Mr.toLowerCase(), "on" + (Mr[0].toUpperCase() + Mr.slice(1)));
        }
        Pr(Nr, "onAnimationEnd"),
          Pr(Er, "onAnimationIteration"),
          Pr(Rr, "onAnimationStart"),
          Pr("dblclick", "onDoubleClick"),
          Pr("focusin", "onFocus"),
          Pr("focusout", "onBlur"),
          Pr(Fr, "onTransitionEnd"),
          c("onMouseEnter", ["mouseout", "mouseover"]),
          c("onMouseLeave", ["mouseout", "mouseover"]),
          c("onPointerEnter", ["pointerout", "pointerover"]),
          c("onPointerLeave", ["pointerout", "pointerover"]),
          s(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          s(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          s("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          s(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var _r =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Ir = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(_r)
          );
        function Lr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, i, l, s, c) {
              if ((Be.apply(this, arguments), Ie)) {
                if (!Ie) throw Error(o(198));
                var u = Le;
                (Ie = !1), (Le = null), Ue || ((Ue = !0), (De = u));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Ur(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var o = void 0;
              if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                  var l = r[i],
                    s = l.instance,
                    c = l.currentTarget;
                  if (((l = l.listener), s !== o && a.isPropagationStopped()))
                    break e;
                  Lr(a, l, c), (o = s);
                }
              else
                for (i = 0; i < r.length; i++) {
                  if (
                    ((s = (l = r[i]).instance),
                    (c = l.currentTarget),
                    (l = l.listener),
                    s !== o && a.isPropagationStopped())
                  )
                    break e;
                  Lr(a, l, c), (o = s);
                }
            }
          }
          if (Ue) throw ((e = De), (Ue = !1), (De = null), e);
        }
        function Dr(e, t) {
          var n = t[ha];
          void 0 === n && (n = t[ha] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Hr(t, e, 2, !1), n.add(r));
        }
        function zr(e, t, n) {
          var r = 0;
          t && (r |= 4), Hr(n, e, r, t);
        }
        var Br = "_reactListening" + Math.random().toString(36).slice(2);
        function Wr(e) {
          if (!e[Br]) {
            (e[Br] = !0),
              i.forEach(function (t) {
                "selectionchange" !== t &&
                  (Ir.has(t) || zr(t, !1, e), zr(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Br] || ((t[Br] = !0), zr("selectionchange", !1, t));
          }
        }
        function Hr(e, t, n, r) {
          switch (Kt(t)) {
            case 1:
              var a = Yt;
              break;
            case 4:
              a = qt;
              break;
            default:
              a = $t;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !Te ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
        }
        function Vr(e, t, n, r, a) {
          var o = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var i = r.tag;
              if (3 === i || 4 === i) {
                var l = r.stateNode.containerInfo;
                if (l === a || (8 === l.nodeType && l.parentNode === a)) break;
                if (4 === i)
                  for (i = r.return; null !== i; ) {
                    var s = i.tag;
                    if (
                      (3 === s || 4 === s) &&
                      ((s = i.stateNode.containerInfo) === a ||
                        (8 === s.nodeType && s.parentNode === a))
                    )
                      return;
                    i = i.return;
                  }
                for (; null !== l; ) {
                  if (null === (i = wa(l))) return;
                  if (5 === (s = i.tag) || 6 === s) {
                    r = o = i;
                    continue e;
                  }
                  l = l.parentNode;
                }
              }
              r = r.return;
            }
          Ae(function () {
            var r = o,
              a = xe(n),
              i = [];
            e: {
              var l = Or.get(e);
              if (void 0 !== l) {
                var s = un,
                  c = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    s = En;
                    break;
                  case "focusin":
                    (c = "focus"), (s = gn);
                    break;
                  case "focusout":
                    (c = "blur"), (s = gn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    s = gn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    s = mn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    s = hn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    s = Fn;
                    break;
                  case Nr:
                  case Er:
                  case Rr:
                    s = bn;
                    break;
                  case Fr:
                    s = On;
                    break;
                  case "scroll":
                    s = fn;
                    break;
                  case "wheel":
                    s = Pn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    s = vn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    s = Rn;
                }
                var u = 0 !== (4 & t),
                  d = !u && "scroll" === e,
                  f = u ? (null !== l ? l + "Capture" : null) : l;
                u = [];
                for (var p, m = r; null !== m; ) {
                  var h = (p = m).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== h &&
                      ((p = h),
                      null !== f &&
                        null != (h = Pe(m, f)) &&
                        u.push(Yr(m, h, p))),
                    d)
                  )
                    break;
                  m = m.return;
                }
                0 < u.length &&
                  ((l = new s(l, c, null, n, a)),
                  i.push({ event: l, listeners: u }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((s = "mouseout" === e || "pointerout" === e),
                (!(l = "mouseover" === e || "pointerover" === e) ||
                  n === ye ||
                  !(c = n.relatedTarget || n.fromElement) ||
                  (!wa(c) && !c[ma])) &&
                  (s || l) &&
                  ((l =
                    a.window === a
                      ? a
                      : (l = a.ownerDocument)
                      ? l.defaultView || l.parentWindow
                      : window),
                  s
                    ? ((s = r),
                      null !==
                        (c = (c = n.relatedTarget || n.toElement)
                          ? wa(c)
                          : null) &&
                        (c !== (d = We(c)) || (5 !== c.tag && 6 !== c.tag)) &&
                        (c = null))
                    : ((s = null), (c = r)),
                  s !== c))
              ) {
                if (
                  ((u = mn),
                  (h = "onMouseLeave"),
                  (f = "onMouseEnter"),
                  (m = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((u = Rn),
                    (h = "onPointerLeave"),
                    (f = "onPointerEnter"),
                    (m = "pointer")),
                  (d = null == s ? l : ya(s)),
                  (p = null == c ? l : ya(c)),
                  ((l = new u(h, m + "leave", s, n, a)).target = d),
                  (l.relatedTarget = p),
                  (h = null),
                  wa(a) === r &&
                    (((u = new u(f, m + "enter", c, n, a)).target = p),
                    (u.relatedTarget = d),
                    (h = u)),
                  (d = h),
                  s && c)
                )
                  e: {
                    for (f = c, m = 0, p = u = s; p; p = $r(p)) m++;
                    for (p = 0, h = f; h; h = $r(h)) p++;
                    for (; 0 < m - p; ) (u = $r(u)), m--;
                    for (; 0 < p - m; ) (f = $r(f)), p--;
                    for (; m--; ) {
                      if (u === f || (null !== f && u === f.alternate)) break e;
                      (u = $r(u)), (f = $r(f));
                    }
                    u = null;
                  }
                else u = null;
                null !== s && Gr(i, l, s, u, !1),
                  null !== c && null !== d && Gr(i, d, c, u, !0);
              }
              if (
                "select" ===
                  (s =
                    (l = r ? ya(r) : window).nodeName &&
                    l.nodeName.toLowerCase()) ||
                ("input" === s && "file" === l.type)
              )
                var g = Kn;
              else if (Vn(l))
                if (Xn) g = ir;
                else {
                  g = ar;
                  var b = rr;
                }
              else
                (s = l.nodeName) &&
                  "input" === s.toLowerCase() &&
                  ("checkbox" === l.type || "radio" === l.type) &&
                  (g = or);
              switch (
                (g && (g = g(e, r))
                  ? Yn(i, g, n, a)
                  : (b && b(e, l, r),
                    "focusout" === e &&
                      (b = l._wrapperState) &&
                      b.controlled &&
                      "number" === l.type &&
                      ee(l, "number", l.value)),
                (b = r ? ya(r) : window),
                e)
              ) {
                case "focusin":
                  (Vn(b) || "true" === b.contentEditable) &&
                    ((gr = b), (br = r), (wr = null));
                  break;
                case "focusout":
                  wr = br = gr = null;
                  break;
                case "mousedown":
                  vr = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (vr = !1), yr(i, n, a);
                  break;
                case "selectionchange":
                  if (hr) break;
                case "keydown":
                case "keyup":
                  yr(i, n, a);
              }
              var w;
              if (Mn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var v = "onCompositionStart";
                      break e;
                    case "compositionend":
                      v = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      v = "onCompositionUpdate";
                      break e;
                  }
                  v = void 0;
                }
              else
                Wn
                  ? zn(e, n) && (v = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (v = "onCompositionStart");
              v &&
                (Ln &&
                  "ko" !== n.locale &&
                  (Wn || "onCompositionStart" !== v
                    ? "onCompositionEnd" === v && Wn && (w = en())
                    : ((Jt = "value" in (Xt = a) ? Xt.value : Xt.textContent),
                      (Wn = !0))),
                0 < (b = qr(r, v)).length &&
                  ((v = new yn(v, e, null, n, a)),
                  i.push({ event: v, listeners: b }),
                  w ? (v.data = w) : null !== (w = Bn(n)) && (v.data = w))),
                (w = In
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Bn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Dn = !0), Un);
                        case "textInput":
                          return (e = t.data) === Un && Dn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Wn)
                        return "compositionend" === e || (!Mn && zn(e, t))
                          ? ((e = en()), (Zt = Jt = Xt = null), (Wn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Ln && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = qr(r, "onBeforeInput")).length &&
                  ((a = new yn("onBeforeInput", "beforeinput", null, n, a)),
                  i.push({ event: a, listeners: r }),
                  (a.data = w));
            }
            Ur(i, t);
          });
        }
        function Yr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function qr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              o = a.stateNode;
            5 === a.tag &&
              null !== o &&
              ((a = o),
              null != (o = Pe(e, n)) && r.unshift(Yr(e, o, a)),
              null != (o = Pe(e, t)) && r.push(Yr(e, o, a))),
              (e = e.return);
          }
          return r;
        }
        function $r(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Gr(e, t, n, r, a) {
          for (var o = t._reactName, i = []; null !== n && n !== r; ) {
            var l = n,
              s = l.alternate,
              c = l.stateNode;
            if (null !== s && s === r) break;
            5 === l.tag &&
              null !== c &&
              ((l = c),
              a
                ? null != (s = Pe(n, o)) && i.unshift(Yr(n, s, l))
                : a || (null != (s = Pe(n, o)) && i.push(Yr(n, s, l)))),
              (n = n.return);
          }
          0 !== i.length && e.push({ event: t, listeners: i });
        }
        var Qr = /\r\n?/g,
          Kr = /\u0000|\uFFFD/g;
        function Xr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Qr, "\n")
            .replace(Kr, "");
        }
        function Jr(e, t, n) {
          if (((t = Xr(t)), Xr(e) !== t && n)) throw Error(o(425));
        }
        function Zr() {}
        var ea = null,
          ta = null;
        function na(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = "function" === typeof setTimeout ? setTimeout : void 0,
          aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          oa = "function" === typeof Promise ? Promise : void 0,
          ia =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof oa
              ? function (e) {
                  return oa.resolve(null).then(e).catch(la);
                }
              : ra;
        function la(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function sa(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void Wt(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          Wt(t);
        }
        function ca(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ua(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var da = Math.random().toString(36).slice(2),
          fa = "__reactFiber$" + da,
          pa = "__reactProps$" + da,
          ma = "__reactContainer$" + da,
          ha = "__reactEvents$" + da,
          ga = "__reactListeners$" + da,
          ba = "__reactHandles$" + da;
        function wa(e) {
          var t = e[fa];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[ma] || n[fa])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ua(e); null !== e; ) {
                  if ((n = e[fa])) return n;
                  e = ua(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function va(e) {
          return !(e = e[fa] || e[ma]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function ya(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(o(33));
        }
        function xa(e) {
          return e[pa] || null;
        }
        var ka = [],
          ja = -1;
        function Ca(e) {
          return { current: e };
        }
        function Sa(e) {
          0 > ja || ((e.current = ka[ja]), (ka[ja] = null), ja--);
        }
        function Na(e, t) {
          ja++, (ka[ja] = e.current), (e.current = t);
        }
        var Ea = {},
          Ra = Ca(Ea),
          Fa = Ca(!1),
          Oa = Ea;
        function Aa(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Ea;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            o = {};
          for (a in n) o[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            o
          );
        }
        function Pa(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Ta() {
          Sa(Fa), Sa(Ra);
        }
        function Ma(e, t, n) {
          if (Ra.current !== Ea) throw Error(o(168));
          Na(Ra, t), Na(Fa, n);
        }
        function _a(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(o(108, H(e) || "Unknown", a));
          return L({}, n, r);
        }
        function Ia(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Ea),
            (Oa = Ra.current),
            Na(Ra, e),
            Na(Fa, Fa.current),
            !0
          );
        }
        function La(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(o(169));
          n
            ? ((e = _a(e, t, Oa)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Sa(Fa),
              Sa(Ra),
              Na(Ra, e))
            : Sa(Fa),
            Na(Fa, n);
        }
        var Ua = null,
          Da = !1,
          za = !1;
        function Ba(e) {
          null === Ua ? (Ua = [e]) : Ua.push(e);
        }
        function Wa() {
          if (!za && null !== Ua) {
            za = !0;
            var e = 0,
              t = vt;
            try {
              var n = Ua;
              for (vt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Ua = null), (Da = !1);
            } catch (a) {
              throw (null !== Ua && (Ua = Ua.slice(e + 1)), $e(Ze, Wa), a);
            } finally {
              (vt = t), (za = !1);
            }
          }
          return null;
        }
        var Ha = [],
          Va = 0,
          Ya = null,
          qa = 0,
          $a = [],
          Ga = 0,
          Qa = null,
          Ka = 1,
          Xa = "";
        function Ja(e, t) {
          (Ha[Va++] = qa), (Ha[Va++] = Ya), (Ya = e), (qa = t);
        }
        function Za(e, t, n) {
          ($a[Ga++] = Ka), ($a[Ga++] = Xa), ($a[Ga++] = Qa), (Qa = e);
          var r = Ka;
          e = Xa;
          var a = 32 - it(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var o = 32 - it(t) + a;
          if (30 < o) {
            var i = a - (a % 5);
            (o = (r & ((1 << i) - 1)).toString(32)),
              (r >>= i),
              (a -= i),
              (Ka = (1 << (32 - it(t) + a)) | (n << a) | r),
              (Xa = o + e);
          } else (Ka = (1 << o) | (n << a) | r), (Xa = e);
        }
        function eo(e) {
          null !== e.return && (Ja(e, 1), Za(e, 1, 0));
        }
        function to(e) {
          for (; e === Ya; )
            (Ya = Ha[--Va]), (Ha[Va] = null), (qa = Ha[--Va]), (Ha[Va] = null);
          for (; e === Qa; )
            (Qa = $a[--Ga]),
              ($a[Ga] = null),
              (Xa = $a[--Ga]),
              ($a[Ga] = null),
              (Ka = $a[--Ga]),
              ($a[Ga] = null);
        }
        var no = null,
          ro = null,
          ao = !1,
          oo = null;
        function io(e, t) {
          var n = Ac(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function lo(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (no = e), (ro = ca(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (no = e), (ro = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Qa ? { id: Ka, overflow: Xa } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Ac(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (no = e),
                (ro = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function so(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function co(e) {
          if (ao) {
            var t = ro;
            if (t) {
              var n = t;
              if (!lo(e, t)) {
                if (so(e)) throw Error(o(418));
                t = ca(n.nextSibling);
                var r = no;
                t && lo(e, t)
                  ? io(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e));
              }
            } else {
              if (so(e)) throw Error(o(418));
              (e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e);
            }
          }
        }
        function uo(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          no = e;
        }
        function fo(e) {
          if (e !== no) return !1;
          if (!ao) return uo(e), (ao = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = ro))
          ) {
            if (so(e)) throw (po(), Error(o(418)));
            for (; t; ) io(e, t), (t = ca(t.nextSibling));
          }
          if ((uo(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(o(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      ro = ca(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              ro = null;
            }
          } else ro = no ? ca(e.stateNode.nextSibling) : null;
          return !0;
        }
        function po() {
          for (var e = ro; e; ) e = ca(e.nextSibling);
        }
        function mo() {
          (ro = no = null), (ao = !1);
        }
        function ho(e) {
          null === oo ? (oo = [e]) : oo.push(e);
        }
        var go = y.ReactCurrentBatchConfig;
        function bo(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(o(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(o(147, e));
              var a = r,
                i = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    null === e ? delete t[i] : (t[i] = e);
                  }),
                  (t._stringRef = i),
                  t);
            }
            if ("string" !== typeof e) throw Error(o(284));
            if (!n._owner) throw Error(o(290, e));
          }
          return e;
        }
        function wo(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              o(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function vo(e) {
          return (0, e._init)(e._payload);
        }
        function yo(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = Tc(e, t)).index = 0), (e.sibling = null), e;
          }
          function i(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function l(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function s(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Lc(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function c(e, t, n, r) {
            var o = n.type;
            return o === j
              ? d(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === o ||
                  ("object" === typeof o &&
                    null !== o &&
                    o.$$typeof === P &&
                    vo(o) === t.type))
              ? (((r = a(t, n.props)).ref = bo(e, t, n)), (r.return = e), r)
              : (((r = Mc(n.type, n.key, n.props, null, e.mode, r)).ref = bo(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function u(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Uc(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, o) {
            return null === t || 7 !== t.tag
              ? (((t = _c(n, e.mode, r, o)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function f(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Lc("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case x:
                  return (
                    ((n = Mc(t.type, t.key, t.props, null, e.mode, n)).ref = bo(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case k:
                  return ((t = Uc(t, e.mode, n)).return = e), t;
                case P:
                  return f(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || _(t))
                return ((t = _c(t, e.mode, n, null)).return = e), t;
              wo(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== a ? null : s(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case x:
                  return n.key === a ? c(e, t, n, r) : null;
                case k:
                  return n.key === a ? u(e, t, n, r) : null;
                case P:
                  return p(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || _(n)) return null !== a ? null : d(e, t, n, r, null);
              wo(e, n);
            }
            return null;
          }
          function m(e, t, n, r, a) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return s(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case x:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case k:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case P:
                  return m(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || _(r))
                return d(t, (e = e.get(n) || null), r, a, null);
              wo(t, r);
            }
            return null;
          }
          function h(a, o, l, s) {
            for (
              var c = null, u = null, d = o, h = (o = 0), g = null;
              null !== d && h < l.length;
              h++
            ) {
              d.index > h ? ((g = d), (d = null)) : (g = d.sibling);
              var b = p(a, d, l[h], s);
              if (null === b) {
                null === d && (d = g);
                break;
              }
              e && d && null === b.alternate && t(a, d),
                (o = i(b, o, h)),
                null === u ? (c = b) : (u.sibling = b),
                (u = b),
                (d = g);
            }
            if (h === l.length) return n(a, d), ao && Ja(a, h), c;
            if (null === d) {
              for (; h < l.length; h++)
                null !== (d = f(a, l[h], s)) &&
                  ((o = i(d, o, h)),
                  null === u ? (c = d) : (u.sibling = d),
                  (u = d));
              return ao && Ja(a, h), c;
            }
            for (d = r(a, d); h < l.length; h++)
              null !== (g = m(d, a, h, l[h], s)) &&
                (e &&
                  null !== g.alternate &&
                  d.delete(null === g.key ? h : g.key),
                (o = i(g, o, h)),
                null === u ? (c = g) : (u.sibling = g),
                (u = g));
            return (
              e &&
                d.forEach(function (e) {
                  return t(a, e);
                }),
              ao && Ja(a, h),
              c
            );
          }
          function g(a, l, s, c) {
            var u = _(s);
            if ("function" !== typeof u) throw Error(o(150));
            if (null == (s = u.call(s))) throw Error(o(151));
            for (
              var d = (u = null), h = l, g = (l = 0), b = null, w = s.next();
              null !== h && !w.done;
              g++, w = s.next()
            ) {
              h.index > g ? ((b = h), (h = null)) : (b = h.sibling);
              var v = p(a, h, w.value, c);
              if (null === v) {
                null === h && (h = b);
                break;
              }
              e && h && null === v.alternate && t(a, h),
                (l = i(v, l, g)),
                null === d ? (u = v) : (d.sibling = v),
                (d = v),
                (h = b);
            }
            if (w.done) return n(a, h), ao && Ja(a, g), u;
            if (null === h) {
              for (; !w.done; g++, w = s.next())
                null !== (w = f(a, w.value, c)) &&
                  ((l = i(w, l, g)),
                  null === d ? (u = w) : (d.sibling = w),
                  (d = w));
              return ao && Ja(a, g), u;
            }
            for (h = r(a, h); !w.done; g++, w = s.next())
              null !== (w = m(h, a, g, w.value, c)) &&
                (e &&
                  null !== w.alternate &&
                  h.delete(null === w.key ? g : w.key),
                (l = i(w, l, g)),
                null === d ? (u = w) : (d.sibling = w),
                (d = w));
            return (
              e &&
                h.forEach(function (e) {
                  return t(a, e);
                }),
              ao && Ja(a, g),
              u
            );
          }
          return function e(r, o, i, s) {
            if (
              ("object" === typeof i &&
                null !== i &&
                i.type === j &&
                null === i.key &&
                (i = i.props.children),
              "object" === typeof i && null !== i)
            ) {
              switch (i.$$typeof) {
                case x:
                  e: {
                    for (var c = i.key, u = o; null !== u; ) {
                      if (u.key === c) {
                        if ((c = i.type) === j) {
                          if (7 === u.tag) {
                            n(r, u.sibling),
                              ((o = a(u, i.props.children)).return = r),
                              (r = o);
                            break e;
                          }
                        } else if (
                          u.elementType === c ||
                          ("object" === typeof c &&
                            null !== c &&
                            c.$$typeof === P &&
                            vo(c) === u.type)
                        ) {
                          n(r, u.sibling),
                            ((o = a(u, i.props)).ref = bo(r, u, i)),
                            (o.return = r),
                            (r = o);
                          break e;
                        }
                        n(r, u);
                        break;
                      }
                      t(r, u), (u = u.sibling);
                    }
                    i.type === j
                      ? (((o = _c(i.props.children, r.mode, s, i.key)).return =
                          r),
                        (r = o))
                      : (((s = Mc(
                          i.type,
                          i.key,
                          i.props,
                          null,
                          r.mode,
                          s
                        )).ref = bo(r, o, i)),
                        (s.return = r),
                        (r = s));
                  }
                  return l(r);
                case k:
                  e: {
                    for (u = i.key; null !== o; ) {
                      if (o.key === u) {
                        if (
                          4 === o.tag &&
                          o.stateNode.containerInfo === i.containerInfo &&
                          o.stateNode.implementation === i.implementation
                        ) {
                          n(r, o.sibling),
                            ((o = a(o, i.children || [])).return = r),
                            (r = o);
                          break e;
                        }
                        n(r, o);
                        break;
                      }
                      t(r, o), (o = o.sibling);
                    }
                    ((o = Uc(i, r.mode, s)).return = r), (r = o);
                  }
                  return l(r);
                case P:
                  return e(r, o, (u = i._init)(i._payload), s);
              }
              if (te(i)) return h(r, o, i, s);
              if (_(i)) return g(r, o, i, s);
              wo(r, i);
            }
            return ("string" === typeof i && "" !== i) || "number" === typeof i
              ? ((i = "" + i),
                null !== o && 6 === o.tag
                  ? (n(r, o.sibling), ((o = a(o, i)).return = r), (r = o))
                  : (n(r, o), ((o = Lc(i, r.mode, s)).return = r), (r = o)),
                l(r))
              : n(r, o);
          };
        }
        var xo = yo(!0),
          ko = yo(!1),
          jo = Ca(null),
          Co = null,
          So = null,
          No = null;
        function Eo() {
          No = So = Co = null;
        }
        function Ro(e) {
          var t = jo.current;
          Sa(jo), (e._currentValue = t);
        }
        function Fo(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Oo(e, t) {
          (Co = e),
            (No = So = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (vl = !0), (e.firstContext = null));
        }
        function Ao(e) {
          var t = e._currentValue;
          if (No !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === So)
            ) {
              if (null === Co) throw Error(o(308));
              (So = e), (Co.dependencies = { lanes: 0, firstContext: e });
            } else So = So.next = e;
          return t;
        }
        var Po = null;
        function To(e) {
          null === Po ? (Po = [e]) : Po.push(e);
        }
        function Mo(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a
              ? ((n.next = n), To(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            _o(e, r)
          );
        }
        function _o(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Io = !1;
        function Lo(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Uo(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Do(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function zo(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Rs))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              _o(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), To(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            _o(e, n)
          );
        }
        function Bo(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), wt(e, n);
          }
        }
        function Wo(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              o = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var i = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === o ? (a = o = i) : (o = o.next = i), (n = n.next);
              } while (null !== n);
              null === o ? (a = o = t) : (o = o.next = t);
            } else a = o = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: o,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Ho(e, t, n, r) {
          var a = e.updateQueue;
          Io = !1;
          var o = a.firstBaseUpdate,
            i = a.lastBaseUpdate,
            l = a.shared.pending;
          if (null !== l) {
            a.shared.pending = null;
            var s = l,
              c = s.next;
            (s.next = null), null === i ? (o = c) : (i.next = c), (i = s);
            var u = e.alternate;
            null !== u &&
              (l = (u = u.updateQueue).lastBaseUpdate) !== i &&
              (null === l ? (u.firstBaseUpdate = c) : (l.next = c),
              (u.lastBaseUpdate = s));
          }
          if (null !== o) {
            var d = a.baseState;
            for (i = 0, u = c = s = null, l = o; ; ) {
              var f = l.lane,
                p = l.eventTime;
              if ((r & f) === f) {
                null !== u &&
                  (u = u.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: l.tag,
                      payload: l.payload,
                      callback: l.callback,
                      next: null,
                    });
                e: {
                  var m = e,
                    h = l;
                  switch (((f = t), (p = n), h.tag)) {
                    case 1:
                      if ("function" === typeof (m = h.payload)) {
                        d = m.call(p, d, f);
                        break e;
                      }
                      d = m;
                      break e;
                    case 3:
                      m.flags = (-65537 & m.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (f =
                            "function" === typeof (m = h.payload)
                              ? m.call(p, d, f)
                              : m) ||
                        void 0 === f
                      )
                        break e;
                      d = L({}, d, f);
                      break e;
                    case 2:
                      Io = !0;
                  }
                }
                null !== l.callback &&
                  0 !== l.lane &&
                  ((e.flags |= 64),
                  null === (f = a.effects) ? (a.effects = [l]) : f.push(l));
              } else
                (p = {
                  eventTime: p,
                  lane: f,
                  tag: l.tag,
                  payload: l.payload,
                  callback: l.callback,
                  next: null,
                }),
                  null === u ? ((c = u = p), (s = d)) : (u = u.next = p),
                  (i |= f);
              if (null === (l = l.next)) {
                if (null === (l = a.shared.pending)) break;
                (l = (f = l).next),
                  (f.next = null),
                  (a.lastBaseUpdate = f),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === u && (s = d),
              (a.baseState = s),
              (a.firstBaseUpdate = c),
              (a.lastBaseUpdate = u),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (i |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === o && (a.shared.lanes = 0);
            (Is |= i), (e.lanes = i), (e.memoizedState = d);
          }
        }
        function Vo(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" !== typeof a))
                  throw Error(o(191, a));
                a.call(r);
              }
            }
        }
        var Yo = {},
          qo = Ca(Yo),
          $o = Ca(Yo),
          Go = Ca(Yo);
        function Qo(e) {
          if (e === Yo) throw Error(o(174));
          return e;
        }
        function Ko(e, t) {
          switch ((Na(Go, t), Na($o, e), Na(qo, Yo), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : se(null, "");
              break;
            default:
              t = se(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Sa(qo), Na(qo, t);
        }
        function Xo() {
          Sa(qo), Sa($o), Sa(Go);
        }
        function Jo(e) {
          Qo(Go.current);
          var t = Qo(qo.current),
            n = se(t, e.type);
          t !== n && (Na($o, e), Na(qo, n));
        }
        function Zo(e) {
          $o.current === e && (Sa(qo), Sa($o));
        }
        var ei = Ca(0);
        function ti(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var ni = [];
        function ri() {
          for (var e = 0; e < ni.length; e++)
            ni[e]._workInProgressVersionPrimary = null;
          ni.length = 0;
        }
        var ai = y.ReactCurrentDispatcher,
          oi = y.ReactCurrentBatchConfig,
          ii = 0,
          li = null,
          si = null,
          ci = null,
          ui = !1,
          di = !1,
          fi = 0,
          pi = 0;
        function mi() {
          throw Error(o(321));
        }
        function hi(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!lr(e[n], t[n])) return !1;
          return !0;
        }
        function gi(e, t, n, r, a, i) {
          if (
            ((ii = i),
            (li = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (ai.current = null === e || null === e.memoizedState ? Zi : el),
            (e = n(r, a)),
            di)
          ) {
            i = 0;
            do {
              if (((di = !1), (fi = 0), 25 <= i)) throw Error(o(301));
              (i += 1),
                (ci = si = null),
                (t.updateQueue = null),
                (ai.current = tl),
                (e = n(r, a));
            } while (di);
          }
          if (
            ((ai.current = Ji),
            (t = null !== si && null !== si.next),
            (ii = 0),
            (ci = si = li = null),
            (ui = !1),
            t)
          )
            throw Error(o(300));
          return e;
        }
        function bi() {
          var e = 0 !== fi;
          return (fi = 0), e;
        }
        function wi() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === ci ? (li.memoizedState = ci = e) : (ci = ci.next = e), ci
          );
        }
        function vi() {
          if (null === si) {
            var e = li.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = si.next;
          var t = null === ci ? li.memoizedState : ci.next;
          if (null !== t) (ci = t), (si = e);
          else {
            if (null === e) throw Error(o(310));
            (e = {
              memoizedState: (si = e).memoizedState,
              baseState: si.baseState,
              baseQueue: si.baseQueue,
              queue: si.queue,
              next: null,
            }),
              null === ci ? (li.memoizedState = ci = e) : (ci = ci.next = e);
          }
          return ci;
        }
        function yi(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function xi(e) {
          var t = vi(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = si,
            a = r.baseQueue,
            i = n.pending;
          if (null !== i) {
            if (null !== a) {
              var l = a.next;
              (a.next = i.next), (i.next = l);
            }
            (r.baseQueue = a = i), (n.pending = null);
          }
          if (null !== a) {
            (i = a.next), (r = r.baseState);
            var s = (l = null),
              c = null,
              u = i;
            do {
              var d = u.lane;
              if ((ii & d) === d)
                null !== c &&
                  (c = c.next =
                    {
                      lane: 0,
                      action: u.action,
                      hasEagerState: u.hasEagerState,
                      eagerState: u.eagerState,
                      next: null,
                    }),
                  (r = u.hasEagerState ? u.eagerState : e(r, u.action));
              else {
                var f = {
                  lane: d,
                  action: u.action,
                  hasEagerState: u.hasEagerState,
                  eagerState: u.eagerState,
                  next: null,
                };
                null === c ? ((s = c = f), (l = r)) : (c = c.next = f),
                  (li.lanes |= d),
                  (Is |= d);
              }
              u = u.next;
            } while (null !== u && u !== i);
            null === c ? (l = r) : (c.next = s),
              lr(r, t.memoizedState) || (vl = !0),
              (t.memoizedState = r),
              (t.baseState = l),
              (t.baseQueue = c),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (i = a.lane), (li.lanes |= i), (Is |= i), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function ki(e) {
          var t = vi(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            i = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var l = (a = a.next);
            do {
              (i = e(i, l.action)), (l = l.next);
            } while (l !== a);
            lr(i, t.memoizedState) || (vl = !0),
              (t.memoizedState = i),
              null === t.baseQueue && (t.baseState = i),
              (n.lastRenderedState = i);
          }
          return [i, r];
        }
        function ji() {}
        function Ci(e, t) {
          var n = li,
            r = vi(),
            a = t(),
            i = !lr(r.memoizedState, a);
          if (
            (i && ((r.memoizedState = a), (vl = !0)),
            (r = r.queue),
            Ii(Ei.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              i ||
              (null !== ci && 1 & ci.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Ai(9, Ni.bind(null, n, r, a, t), void 0, null),
              null === Fs)
            )
              throw Error(o(349));
            0 !== (30 & ii) || Si(n, t, a);
          }
          return a;
        }
        function Si(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = li.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (li.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Ni(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Ri(t) && Fi(e);
        }
        function Ei(e, t, n) {
          return n(function () {
            Ri(t) && Fi(e);
          });
        }
        function Ri(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !lr(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Fi(e) {
          var t = _o(e, 1);
          null !== t && nc(t, e, 1, -1);
        }
        function Oi(e) {
          var t = wi();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: yi,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = Gi.bind(null, li, e)),
            [t.memoizedState, e]
          );
        }
        function Ai(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = li.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (li.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Pi() {
          return vi().memoizedState;
        }
        function Ti(e, t, n, r) {
          var a = wi();
          (li.flags |= e),
            (a.memoizedState = Ai(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Mi(e, t, n, r) {
          var a = vi();
          r = void 0 === r ? null : r;
          var o = void 0;
          if (null !== si) {
            var i = si.memoizedState;
            if (((o = i.destroy), null !== r && hi(r, i.deps)))
              return void (a.memoizedState = Ai(t, n, o, r));
          }
          (li.flags |= e), (a.memoizedState = Ai(1 | t, n, o, r));
        }
        function _i(e, t) {
          return Ti(8390656, 8, e, t);
        }
        function Ii(e, t) {
          return Mi(2048, 8, e, t);
        }
        function Li(e, t) {
          return Mi(4, 2, e, t);
        }
        function Ui(e, t) {
          return Mi(4, 4, e, t);
        }
        function Di(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function zi(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Mi(4, 4, Di.bind(null, t, e), n)
          );
        }
        function Bi() {}
        function Wi(e, t) {
          var n = vi();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && hi(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Hi(e, t) {
          var n = vi();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && hi(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Vi(e, t, n) {
          return 0 === (21 & ii)
            ? (e.baseState && ((e.baseState = !1), (vl = !0)),
              (e.memoizedState = n))
            : (lr(n, t) ||
                ((n = ht()), (li.lanes |= n), (Is |= n), (e.baseState = !0)),
              t);
        }
        function Yi(e, t) {
          var n = vt;
          (vt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = oi.transition;
          oi.transition = {};
          try {
            e(!1), t();
          } finally {
            (vt = n), (oi.transition = r);
          }
        }
        function qi() {
          return vi().memoizedState;
        }
        function $i(e, t, n) {
          var r = tc(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            Qi(e))
          )
            Ki(t, n);
          else if (null !== (n = Mo(e, t, n, r))) {
            nc(n, e, r, ec()), Xi(n, t, r);
          }
        }
        function Gi(e, t, n) {
          var r = tc(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (Qi(e)) Ki(t, a);
          else {
            var o = e.alternate;
            if (
              0 === e.lanes &&
              (null === o || 0 === o.lanes) &&
              null !== (o = t.lastRenderedReducer)
            )
              try {
                var i = t.lastRenderedState,
                  l = o(i, n);
                if (((a.hasEagerState = !0), (a.eagerState = l), lr(l, i))) {
                  var s = t.interleaved;
                  return (
                    null === s
                      ? ((a.next = a), To(t))
                      : ((a.next = s.next), (s.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (c) {}
            null !== (n = Mo(e, t, a, r)) &&
              (nc(n, e, r, (a = ec())), Xi(n, t, r));
          }
        }
        function Qi(e) {
          var t = e.alternate;
          return e === li || (null !== t && t === li);
        }
        function Ki(e, t) {
          di = ui = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function Xi(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), wt(e, n);
          }
        }
        var Ji = {
            readContext: Ao,
            useCallback: mi,
            useContext: mi,
            useEffect: mi,
            useImperativeHandle: mi,
            useInsertionEffect: mi,
            useLayoutEffect: mi,
            useMemo: mi,
            useReducer: mi,
            useRef: mi,
            useState: mi,
            useDebugValue: mi,
            useDeferredValue: mi,
            useTransition: mi,
            useMutableSource: mi,
            useSyncExternalStore: mi,
            useId: mi,
            unstable_isNewReconciler: !1,
          },
          Zi = {
            readContext: Ao,
            useCallback: function (e, t) {
              return (wi().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Ao,
            useEffect: _i,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Ti(4194308, 4, Di.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Ti(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Ti(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = wi();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = wi();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = $i.bind(null, li, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (wi().memoizedState = e);
            },
            useState: Oi,
            useDebugValue: Bi,
            useDeferredValue: function (e) {
              return (wi().memoizedState = e);
            },
            useTransition: function () {
              var e = Oi(!1),
                t = e[0];
              return (
                (e = Yi.bind(null, e[1])), (wi().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = li,
                a = wi();
              if (ao) {
                if (void 0 === n) throw Error(o(407));
                n = n();
              } else {
                if (((n = t()), null === Fs)) throw Error(o(349));
                0 !== (30 & ii) || Si(r, t, n);
              }
              a.memoizedState = n;
              var i = { value: n, getSnapshot: t };
              return (
                (a.queue = i),
                _i(Ei.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                Ai(9, Ni.bind(null, r, i, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = wi(),
                t = Fs.identifierPrefix;
              if (ao) {
                var n = Xa;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Ka & ~(1 << (32 - it(Ka) - 1))).toString(32) + n)),
                  0 < (n = fi++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = pi++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          el = {
            readContext: Ao,
            useCallback: Wi,
            useContext: Ao,
            useEffect: Ii,
            useImperativeHandle: zi,
            useInsertionEffect: Li,
            useLayoutEffect: Ui,
            useMemo: Hi,
            useReducer: xi,
            useRef: Pi,
            useState: function () {
              return xi(yi);
            },
            useDebugValue: Bi,
            useDeferredValue: function (e) {
              return Vi(vi(), si.memoizedState, e);
            },
            useTransition: function () {
              return [xi(yi)[0], vi().memoizedState];
            },
            useMutableSource: ji,
            useSyncExternalStore: Ci,
            useId: qi,
            unstable_isNewReconciler: !1,
          },
          tl = {
            readContext: Ao,
            useCallback: Wi,
            useContext: Ao,
            useEffect: Ii,
            useImperativeHandle: zi,
            useInsertionEffect: Li,
            useLayoutEffect: Ui,
            useMemo: Hi,
            useReducer: ki,
            useRef: Pi,
            useState: function () {
              return ki(yi);
            },
            useDebugValue: Bi,
            useDeferredValue: function (e) {
              var t = vi();
              return null === si
                ? (t.memoizedState = e)
                : Vi(t, si.memoizedState, e);
            },
            useTransition: function () {
              return [ki(yi)[0], vi().memoizedState];
            },
            useMutableSource: ji,
            useSyncExternalStore: Ci,
            useId: qi,
            unstable_isNewReconciler: !1,
          };
        function nl(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = L({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        function rl(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : L({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var al = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && We(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = ec(),
              a = tc(e),
              o = Do(r, a);
            (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = zo(e, o, a)) && (nc(t, e, a, r), Bo(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = ec(),
              a = tc(e),
              o = Do(r, a);
            (o.tag = 1),
              (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = zo(e, o, a)) && (nc(t, e, a, r), Bo(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = ec(),
              r = tc(e),
              a = Do(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = zo(e, a, r)) && (nc(t, e, r, n), Bo(t, e, r));
          },
        };
        function ol(e, t, n, r, a, o, i) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, o, i)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !sr(n, r) ||
                !sr(a, o);
        }
        function il(e, t, n) {
          var r = !1,
            a = Ea,
            o = t.contextType;
          return (
            "object" === typeof o && null !== o
              ? (o = Ao(o))
              : ((a = Pa(t) ? Oa : Ra.current),
                (o = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? Aa(e, a)
                  : Ea)),
            (t = new t(n, o)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = al),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            t
          );
        }
        function ll(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && al.enqueueReplaceState(t, t.state, null);
        }
        function sl(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = {}), Lo(e);
          var o = t.contextType;
          "object" === typeof o && null !== o
            ? (a.context = Ao(o))
            : ((o = Pa(t) ? Oa : Ra.current), (a.context = Aa(e, o))),
            (a.state = e.memoizedState),
            "function" === typeof (o = t.getDerivedStateFromProps) &&
              (rl(e, t, o, n), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && al.enqueueReplaceState(a, a.state, null),
              Ho(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function cl(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += B(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (o) {
            a = "\nError generating stack: " + o.message + "\n" + o.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
        }
        function ul(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function dl(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var fl = "function" === typeof WeakMap ? WeakMap : Map;
        function pl(e, t, n) {
          ((n = Do(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Vs || ((Vs = !0), (Ys = r)), dl(0, t);
            }),
            n
          );
        }
        function ml(e, t, n) {
          (n = Do(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                dl(0, t);
              });
          }
          var o = e.stateNode;
          return (
            null !== o &&
              "function" === typeof o.componentDidCatch &&
              (n.callback = function () {
                dl(0, t),
                  "function" !== typeof r &&
                    (null === qs ? (qs = new Set([this])) : qs.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function hl(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new fl();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = Sc.bind(null, e, t, n)), t.then(e, e));
        }
        function gl(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function bl(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Do(-1, 1)).tag = 2), zo(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var wl = y.ReactCurrentOwner,
          vl = !1;
        function yl(e, t, n, r) {
          t.child = null === e ? ko(t, null, n, r) : xo(t, e.child, n, r);
        }
        function xl(e, t, n, r, a) {
          n = n.render;
          var o = t.ref;
          return (
            Oo(t, a),
            (r = gi(e, t, n, r, o, a)),
            (n = bi()),
            null === e || vl
              ? (ao && n && eo(t), (t.flags |= 1), yl(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Vl(e, t, a))
          );
        }
        function kl(e, t, n, r, a) {
          if (null === e) {
            var o = n.type;
            return "function" !== typeof o ||
              Pc(o) ||
              void 0 !== o.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Mc(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = o), jl(e, t, o, r, a));
          }
          if (((o = e.child), 0 === (e.lanes & a))) {
            var i = o.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : sr)(i, r) &&
              e.ref === t.ref
            )
              return Vl(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = Tc(o, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function jl(e, t, n, r, a) {
          if (null !== e) {
            var o = e.memoizedProps;
            if (sr(o, r) && e.ref === t.ref) {
              if (((vl = !1), (t.pendingProps = r = o), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), Vl(e, t, a);
              0 !== (131072 & e.flags) && (vl = !0);
            }
          }
          return Nl(e, t, n, r, a);
        }
        function Cl(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            o = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Na(Ts, Ps),
                (Ps |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== o ? o.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Na(Ts, Ps),
                  (Ps |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== o ? o.baseLanes : n),
                Na(Ts, Ps),
                (Ps |= r);
            }
          else
            null !== o
              ? ((r = o.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Na(Ts, Ps),
              (Ps |= r);
          return yl(e, t, a, n), t.child;
        }
        function Sl(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Nl(e, t, n, r, a) {
          var o = Pa(n) ? Oa : Ra.current;
          return (
            (o = Aa(t, o)),
            Oo(t, a),
            (n = gi(e, t, n, r, o, a)),
            (r = bi()),
            null === e || vl
              ? (ao && r && eo(t), (t.flags |= 1), yl(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Vl(e, t, a))
          );
        }
        function El(e, t, n, r, a) {
          if (Pa(n)) {
            var o = !0;
            Ia(t);
          } else o = !1;
          if ((Oo(t, a), null === t.stateNode))
            Hl(e, t), il(t, n, r), sl(t, n, r, a), (r = !0);
          else if (null === e) {
            var i = t.stateNode,
              l = t.memoizedProps;
            i.props = l;
            var s = i.context,
              c = n.contextType;
            "object" === typeof c && null !== c
              ? (c = Ao(c))
              : (c = Aa(t, (c = Pa(n) ? Oa : Ra.current)));
            var u = n.getDerivedStateFromProps,
              d =
                "function" === typeof u ||
                "function" === typeof i.getSnapshotBeforeUpdate;
            d ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((l !== r || s !== c) && ll(t, i, r, c)),
              (Io = !1);
            var f = t.memoizedState;
            (i.state = f),
              Ho(t, r, i, a),
              (s = t.memoizedState),
              l !== r || f !== s || Fa.current || Io
                ? ("function" === typeof u &&
                    (rl(t, n, u, r), (s = t.memoizedState)),
                  (l = Io || ol(t, n, l, r, f, s, c))
                    ? (d ||
                        ("function" !== typeof i.UNSAFE_componentWillMount &&
                          "function" !== typeof i.componentWillMount) ||
                        ("function" === typeof i.componentWillMount &&
                          i.componentWillMount(),
                        "function" === typeof i.UNSAFE_componentWillMount &&
                          i.UNSAFE_componentWillMount()),
                      "function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = s)),
                  (i.props = r),
                  (i.state = s),
                  (i.context = c),
                  (r = l))
                : ("function" === typeof i.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (i = t.stateNode),
              Uo(e, t),
              (l = t.memoizedProps),
              (c = t.type === t.elementType ? l : nl(t.type, l)),
              (i.props = c),
              (d = t.pendingProps),
              (f = i.context),
              "object" === typeof (s = n.contextType) && null !== s
                ? (s = Ao(s))
                : (s = Aa(t, (s = Pa(n) ? Oa : Ra.current)));
            var p = n.getDerivedStateFromProps;
            (u =
              "function" === typeof p ||
              "function" === typeof i.getSnapshotBeforeUpdate) ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((l !== d || f !== s) && ll(t, i, r, s)),
              (Io = !1),
              (f = t.memoizedState),
              (i.state = f),
              Ho(t, r, i, a);
            var m = t.memoizedState;
            l !== d || f !== m || Fa.current || Io
              ? ("function" === typeof p &&
                  (rl(t, n, p, r), (m = t.memoizedState)),
                (c = Io || ol(t, n, c, r, f, m, s) || !1)
                  ? (u ||
                      ("function" !== typeof i.UNSAFE_componentWillUpdate &&
                        "function" !== typeof i.componentWillUpdate) ||
                      ("function" === typeof i.componentWillUpdate &&
                        i.componentWillUpdate(r, m, s),
                      "function" === typeof i.UNSAFE_componentWillUpdate &&
                        i.UNSAFE_componentWillUpdate(r, m, s)),
                    "function" === typeof i.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof i.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof i.componentDidUpdate ||
                      (l === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof i.getSnapshotBeforeUpdate ||
                      (l === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = m)),
                (i.props = r),
                (i.state = m),
                (i.context = s),
                (r = c))
              : ("function" !== typeof i.componentDidUpdate ||
                  (l === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof i.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Rl(e, t, n, r, o, a);
        }
        function Rl(e, t, n, r, a, o) {
          Sl(e, t);
          var i = 0 !== (128 & t.flags);
          if (!r && !i) return a && La(t, n, !1), Vl(e, t, o);
          (r = t.stateNode), (wl.current = t);
          var l =
            i && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && i
              ? ((t.child = xo(t, e.child, null, o)),
                (t.child = xo(t, null, l, o)))
              : yl(e, t, l, o),
            (t.memoizedState = r.state),
            a && La(t, n, !0),
            t.child
          );
        }
        function Fl(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Ma(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Ma(0, t.context, !1),
            Ko(e, t.containerInfo);
        }
        function Ol(e, t, n, r, a) {
          return mo(), ho(a), (t.flags |= 256), yl(e, t, n, r), t.child;
        }
        var Al,
          Pl,
          Tl,
          Ml,
          _l = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Il(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Ll(e, t, n) {
          var r,
            a = t.pendingProps,
            i = ei.current,
            l = !1,
            s = 0 !== (128 & t.flags);
          if (
            ((r = s) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)),
            r
              ? ((l = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (i |= 1),
            Na(ei, 1 & i),
            null === e)
          )
            return (
              co(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((s = a.children),
                  (e = a.fallback),
                  l
                    ? ((a = t.mode),
                      (l = t.child),
                      (s = { mode: "hidden", children: s }),
                      0 === (1 & a) && null !== l
                        ? ((l.childLanes = 0), (l.pendingProps = s))
                        : (l = Ic(s, a, 0, null)),
                      (e = _c(e, a, n, null)),
                      (l.return = t),
                      (e.return = t),
                      (l.sibling = e),
                      (t.child = l),
                      (t.child.memoizedState = Il(n)),
                      (t.memoizedState = _l),
                      e)
                    : Ul(t, s))
            );
          if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
            return (function (e, t, n, r, a, i, l) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Dl(e, t, l, (r = ul(Error(o(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((i = r.fallback),
                    (a = t.mode),
                    (r = Ic(
                      { mode: "visible", children: r.children },
                      a,
                      0,
                      null
                    )),
                    ((i = _c(i, a, l, null)).flags |= 2),
                    (r.return = t),
                    (i.return = t),
                    (r.sibling = i),
                    (t.child = r),
                    0 !== (1 & t.mode) && xo(t, e.child, null, l),
                    (t.child.memoizedState = Il(l)),
                    (t.memoizedState = _l),
                    i);
              if (0 === (1 & t.mode)) return Dl(e, t, l, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var s = r.dgst;
                return (
                  (r = s), Dl(e, t, l, (r = ul((i = Error(o(419))), r, void 0)))
                );
              }
              if (((s = 0 !== (l & e.childLanes)), vl || s)) {
                if (null !== (r = Fs)) {
                  switch (l & -l) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | l)) ? 0 : a) &&
                    a !== i.retryLane &&
                    ((i.retryLane = a), _o(e, a), nc(r, e, a, -1));
                }
                return hc(), Dl(e, t, l, (r = ul(Error(o(421)))));
              }
              return "$?" === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Ec.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = i.treeContext),
                  (ro = ca(a.nextSibling)),
                  (no = t),
                  (ao = !0),
                  (oo = null),
                  null !== e &&
                    (($a[Ga++] = Ka),
                    ($a[Ga++] = Xa),
                    ($a[Ga++] = Qa),
                    (Ka = e.id),
                    (Xa = e.overflow),
                    (Qa = t)),
                  (t = Ul(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, s, a, r, i, n);
          if (l) {
            (l = a.fallback), (s = t.mode), (r = (i = e.child).sibling);
            var c = { mode: "hidden", children: a.children };
            return (
              0 === (1 & s) && t.child !== i
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = c),
                  (t.deletions = null))
                : ((a = Tc(i, c)).subtreeFlags = 14680064 & i.subtreeFlags),
              null !== r
                ? (l = Tc(r, l))
                : ((l = _c(l, s, n, null)).flags |= 2),
              (l.return = t),
              (a.return = t),
              (a.sibling = l),
              (t.child = a),
              (a = l),
              (l = t.child),
              (s =
                null === (s = e.child.memoizedState)
                  ? Il(n)
                  : {
                      baseLanes: s.baseLanes | n,
                      cachePool: null,
                      transitions: s.transitions,
                    }),
              (l.memoizedState = s),
              (l.childLanes = e.childLanes & ~n),
              (t.memoizedState = _l),
              a
            );
          }
          return (
            (e = (l = e.child).sibling),
            (a = Tc(l, { mode: "visible", children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function Ul(e, t) {
          return (
            ((t = Ic(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Dl(e, t, n, r) {
          return (
            null !== r && ho(r),
            xo(t, e.child, null, n),
            ((e = Ul(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function zl(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Fo(e.return, t, n);
        }
        function Bl(e, t, n, r, a) {
          var o = e.memoizedState;
          null === o
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((o.isBackwards = t),
              (o.rendering = null),
              (o.renderingStartTime = 0),
              (o.last = r),
              (o.tail = n),
              (o.tailMode = a));
        }
        function Wl(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            o = r.tail;
          if ((yl(e, t, r.children, n), 0 !== (2 & (r = ei.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && zl(e, n, t);
                else if (19 === e.tag) zl(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Na(ei, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === ti(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Bl(t, !1, a, n, o);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === ti(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Bl(t, !0, n, null, o);
                break;
              case "together":
                Bl(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Hl(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Vl(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Is |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(o(153));
          if (null !== t.child) {
            for (
              n = Tc((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Tc(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Yl(e, t) {
          if (!ao)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function ql(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function $l(e, t, n) {
          var r = t.pendingProps;
          switch ((to(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return ql(t), null;
            case 1:
            case 17:
              return Pa(t.type) && Ta(), ql(t), null;
            case 3:
              return (
                (r = t.stateNode),
                Xo(),
                Sa(Fa),
                Sa(Ra),
                ri(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fo(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== oo && (ic(oo), (oo = null)))),
                Pl(e, t),
                ql(t),
                null
              );
            case 5:
              Zo(t);
              var a = Qo(Go.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Tl(e, t, n, r, a),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(o(166));
                  return ql(t), null;
                }
                if (((e = Qo(qo.current)), fo(t))) {
                  (r = t.stateNode), (n = t.type);
                  var i = t.memoizedProps;
                  switch (
                    ((r[fa] = t), (r[pa] = i), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Dr("cancel", r), Dr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Dr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < _r.length; a++) Dr(_r[a], r);
                      break;
                    case "source":
                      Dr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Dr("error", r), Dr("load", r);
                      break;
                    case "details":
                      Dr("toggle", r);
                      break;
                    case "input":
                      K(r, i), Dr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!i.multiple }),
                        Dr("invalid", r);
                      break;
                    case "textarea":
                      ae(r, i), Dr("invalid", r);
                  }
                  for (var s in (we(n, i), (a = null), i))
                    if (i.hasOwnProperty(s)) {
                      var c = i[s];
                      "children" === s
                        ? "string" === typeof c
                          ? r.textContent !== c &&
                            (!0 !== i.suppressHydrationWarning &&
                              Jr(r.textContent, c, e),
                            (a = ["children", c]))
                          : "number" === typeof c &&
                            r.textContent !== "" + c &&
                            (!0 !== i.suppressHydrationWarning &&
                              Jr(r.textContent, c, e),
                            (a = ["children", "" + c]))
                        : l.hasOwnProperty(s) &&
                          null != c &&
                          "onScroll" === s &&
                          Dr("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      q(r), Z(r, i, !0);
                      break;
                    case "textarea":
                      q(r), ie(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof i.onClick && (r.onclick = Zr);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (s = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = le(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = s.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = s.createElement(n, { is: r.is }))
                        : ((e = s.createElement(n)),
                          "select" === n &&
                            ((s = e),
                            r.multiple
                              ? (s.multiple = !0)
                              : r.size && (s.size = r.size)))
                      : (e = s.createElementNS(e, n)),
                    (e[fa] = t),
                    (e[pa] = r),
                    Al(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((s = ve(n, r)), n)) {
                      case "dialog":
                        Dr("cancel", e), Dr("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Dr("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < _r.length; a++) Dr(_r[a], e);
                        a = r;
                        break;
                      case "source":
                        Dr("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Dr("error", e), Dr("load", e), (a = r);
                        break;
                      case "details":
                        Dr("toggle", e), (a = r);
                        break;
                      case "input":
                        K(e, r), (a = Q(e, r)), Dr("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = L({}, r, { value: void 0 })),
                          Dr("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), Dr("invalid", e);
                    }
                    for (i in (we(n, a), (c = a)))
                      if (c.hasOwnProperty(i)) {
                        var u = c[i];
                        "style" === i
                          ? ge(e, u)
                          : "dangerouslySetInnerHTML" === i
                          ? null != (u = u ? u.__html : void 0) && de(e, u)
                          : "children" === i
                          ? "string" === typeof u
                            ? ("textarea" !== n || "" !== u) && fe(e, u)
                            : "number" === typeof u && fe(e, "" + u)
                          : "suppressContentEditableWarning" !== i &&
                            "suppressHydrationWarning" !== i &&
                            "autoFocus" !== i &&
                            (l.hasOwnProperty(i)
                              ? null != u && "onScroll" === i && Dr("scroll", e)
                              : null != u && v(e, i, u, s));
                      }
                    switch (n) {
                      case "input":
                        q(e), Z(e, r, !1);
                        break;
                      case "textarea":
                        q(e), ie(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + V(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (i = r.value)
                            ? ne(e, !!r.multiple, i, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = Zr);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return ql(t), null;
            case 6:
              if (e && null != t.stateNode) Ml(e, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(o(166));
                if (((n = Qo(Go.current)), Qo(qo.current), fo(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[fa] = t),
                    (i = r.nodeValue !== n) && null !== (e = no))
                  )
                    switch (e.tag) {
                      case 3:
                        Jr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Jr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  i && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[fa] = t),
                    (t.stateNode = r);
              }
              return ql(t), null;
            case 13:
              if (
                (Sa(ei),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  ao &&
                  null !== ro &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  po(), mo(), (t.flags |= 98560), (i = !1);
                else if (((i = fo(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!i) throw Error(o(318));
                    if (
                      !(i =
                        null !== (i = t.memoizedState) ? i.dehydrated : null)
                    )
                      throw Error(o(317));
                    i[fa] = t;
                  } else
                    mo(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  ql(t), (i = !1);
                } else null !== oo && (ic(oo), (oo = null)), (i = !0);
                if (!i) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & ei.current)
                        ? 0 === Ms && (Ms = 3)
                        : hc())),
                  null !== t.updateQueue && (t.flags |= 4),
                  ql(t),
                  null);
            case 4:
              return (
                Xo(),
                Pl(e, t),
                null === e && Wr(t.stateNode.containerInfo),
                ql(t),
                null
              );
            case 10:
              return Ro(t.type._context), ql(t), null;
            case 19:
              if ((Sa(ei), null === (i = t.memoizedState))) return ql(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (s = i.rendering)))
                if (r) Yl(i, !1);
                else {
                  if (0 !== Ms || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (s = ti(e))) {
                        for (
                          t.flags |= 128,
                            Yl(i, !1),
                            null !== (r = s.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((i = n).flags &= 14680066),
                            null === (s = i.alternate)
                              ? ((i.childLanes = 0),
                                (i.lanes = e),
                                (i.child = null),
                                (i.subtreeFlags = 0),
                                (i.memoizedProps = null),
                                (i.memoizedState = null),
                                (i.updateQueue = null),
                                (i.dependencies = null),
                                (i.stateNode = null))
                              : ((i.childLanes = s.childLanes),
                                (i.lanes = s.lanes),
                                (i.child = s.child),
                                (i.subtreeFlags = 0),
                                (i.deletions = null),
                                (i.memoizedProps = s.memoizedProps),
                                (i.memoizedState = s.memoizedState),
                                (i.updateQueue = s.updateQueue),
                                (i.type = s.type),
                                (e = s.dependencies),
                                (i.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Na(ei, (1 & ei.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== i.tail &&
                    Xe() > Ws &&
                    ((t.flags |= 128),
                    (r = !0),
                    Yl(i, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = ti(s))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Yl(i, !0),
                      null === i.tail &&
                        "hidden" === i.tailMode &&
                        !s.alternate &&
                        !ao)
                    )
                      return ql(t), null;
                  } else
                    2 * Xe() - i.renderingStartTime > Ws &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Yl(i, !1),
                      (t.lanes = 4194304));
                i.isBackwards
                  ? ((s.sibling = t.child), (t.child = s))
                  : (null !== (n = i.last) ? (n.sibling = s) : (t.child = s),
                    (i.last = s));
              }
              return null !== i.tail
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = Xe()),
                  (t.sibling = null),
                  (n = ei.current),
                  Na(ei, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (ql(t), null);
            case 22:
            case 23:
              return (
                dc(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Ps) &&
                    (ql(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : ql(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(o(156, t.tag));
        }
        function Gl(e, t) {
          switch ((to(t), t.tag)) {
            case 1:
              return (
                Pa(t.type) && Ta(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                Xo(),
                Sa(Fa),
                Sa(Ra),
                ri(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return Zo(t), null;
            case 13:
              if (
                (Sa(ei),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(o(340));
                mo();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Sa(ei), null;
            case 4:
              return Xo(), null;
            case 10:
              return Ro(t.type._context), null;
            case 22:
            case 23:
              return dc(), null;
            default:
              return null;
          }
        }
        (Al = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Pl = function () {}),
          (Tl = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), Qo(qo.current);
              var o,
                i = null;
              switch (n) {
                case "input":
                  (a = Q(e, a)), (r = Q(e, r)), (i = []);
                  break;
                case "select":
                  (a = L({}, a, { value: void 0 })),
                    (r = L({}, r, { value: void 0 })),
                    (i = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (i = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Zr);
              }
              for (u in (we(n, r), (n = null), a))
                if (!r.hasOwnProperty(u) && a.hasOwnProperty(u) && null != a[u])
                  if ("style" === u) {
                    var s = a[u];
                    for (o in s)
                      s.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== u &&
                      "children" !== u &&
                      "suppressContentEditableWarning" !== u &&
                      "suppressHydrationWarning" !== u &&
                      "autoFocus" !== u &&
                      (l.hasOwnProperty(u)
                        ? i || (i = [])
                        : (i = i || []).push(u, null));
              for (u in r) {
                var c = r[u];
                if (
                  ((s = null != a ? a[u] : void 0),
                  r.hasOwnProperty(u) && c !== s && (null != c || null != s))
                )
                  if ("style" === u)
                    if (s) {
                      for (o in s)
                        !s.hasOwnProperty(o) ||
                          (c && c.hasOwnProperty(o)) ||
                          (n || (n = {}), (n[o] = ""));
                      for (o in c)
                        c.hasOwnProperty(o) &&
                          s[o] !== c[o] &&
                          (n || (n = {}), (n[o] = c[o]));
                    } else n || (i || (i = []), i.push(u, n)), (n = c);
                  else
                    "dangerouslySetInnerHTML" === u
                      ? ((c = c ? c.__html : void 0),
                        (s = s ? s.__html : void 0),
                        null != c && s !== c && (i = i || []).push(u, c))
                      : "children" === u
                      ? ("string" !== typeof c && "number" !== typeof c) ||
                        (i = i || []).push(u, "" + c)
                      : "suppressContentEditableWarning" !== u &&
                        "suppressHydrationWarning" !== u &&
                        (l.hasOwnProperty(u)
                          ? (null != c && "onScroll" === u && Dr("scroll", e),
                            i || s === c || (i = []))
                          : (i = i || []).push(u, c));
              }
              n && (i = i || []).push("style", n);
              var u = i;
              (t.updateQueue = u) && (t.flags |= 4);
            }
          }),
          (Ml = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Ql = !1,
          Kl = !1,
          Xl = "function" === typeof WeakSet ? WeakSet : Set,
          Jl = null;
        function Zl(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                Cc(e, t, r);
              }
            else n.current = null;
        }
        function es(e, t, n) {
          try {
            n();
          } catch (r) {
            Cc(e, t, r);
          }
        }
        var ts = !1;
        function ns(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var o = a.destroy;
                (a.destroy = void 0), void 0 !== o && es(t, n, o);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function rs(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function as(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function os(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), os(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[fa],
              delete t[pa],
              delete t[ha],
              delete t[ga],
              delete t[ba]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function is(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function ls(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || is(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function ss(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Zr));
          else if (4 !== r && null !== (e = e.child))
            for (ss(e, t, n), e = e.sibling; null !== e; )
              ss(e, t, n), (e = e.sibling);
        }
        function cs(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (cs(e, t, n), e = e.sibling; null !== e; )
              cs(e, t, n), (e = e.sibling);
        }
        var us = null,
          ds = !1;
        function fs(e, t, n) {
          for (n = n.child; null !== n; ) ps(e, t, n), (n = n.sibling);
        }
        function ps(e, t, n) {
          if (ot && "function" === typeof ot.onCommitFiberUnmount)
            try {
              ot.onCommitFiberUnmount(at, n);
            } catch (l) {}
          switch (n.tag) {
            case 5:
              Kl || Zl(n, t);
            case 6:
              var r = us,
                a = ds;
              (us = null),
                fs(e, t, n),
                (ds = a),
                null !== (us = r) &&
                  (ds
                    ? ((e = us),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : us.removeChild(n.stateNode));
              break;
            case 18:
              null !== us &&
                (ds
                  ? ((e = us),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? sa(e.parentNode, n)
                      : 1 === e.nodeType && sa(e, n),
                    Wt(e))
                  : sa(us, n.stateNode));
              break;
            case 4:
              (r = us),
                (a = ds),
                (us = n.stateNode.containerInfo),
                (ds = !0),
                fs(e, t, n),
                (us = r),
                (ds = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Kl &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var o = a,
                    i = o.destroy;
                  (o = o.tag),
                    void 0 !== i &&
                      (0 !== (2 & o) || 0 !== (4 & o)) &&
                      es(n, t, i),
                    (a = a.next);
                } while (a !== r);
              }
              fs(e, t, n);
              break;
            case 1:
              if (
                !Kl &&
                (Zl(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (l) {
                  Cc(n, t, l);
                }
              fs(e, t, n);
              break;
            case 21:
              fs(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Kl = (r = Kl) || null !== n.memoizedState),
                  fs(e, t, n),
                  (Kl = r))
                : fs(e, t, n);
              break;
            default:
              fs(e, t, n);
          }
        }
        function ms(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Xl()),
              t.forEach(function (t) {
                var r = Rc.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function hs(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var i = e,
                  l = t,
                  s = l;
                e: for (; null !== s; ) {
                  switch (s.tag) {
                    case 5:
                      (us = s.stateNode), (ds = !1);
                      break e;
                    case 3:
                    case 4:
                      (us = s.stateNode.containerInfo), (ds = !0);
                      break e;
                  }
                  s = s.return;
                }
                if (null === us) throw Error(o(160));
                ps(i, l, a), (us = null), (ds = !1);
                var c = a.alternate;
                null !== c && (c.return = null), (a.return = null);
              } catch (u) {
                Cc(a, t, u);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) gs(t, e), (t = t.sibling);
        }
        function gs(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((hs(t, e), bs(e), 4 & r)) {
                try {
                  ns(3, e, e.return), rs(3, e);
                } catch (g) {
                  Cc(e, e.return, g);
                }
                try {
                  ns(5, e, e.return);
                } catch (g) {
                  Cc(e, e.return, g);
                }
              }
              break;
            case 1:
              hs(t, e), bs(e), 512 & r && null !== n && Zl(n, n.return);
              break;
            case 5:
              if (
                (hs(t, e),
                bs(e),
                512 & r && null !== n && Zl(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  fe(a, "");
                } catch (g) {
                  Cc(e, e.return, g);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var i = e.memoizedProps,
                  l = null !== n ? n.memoizedProps : i,
                  s = e.type,
                  c = e.updateQueue;
                if (((e.updateQueue = null), null !== c))
                  try {
                    "input" === s &&
                      "radio" === i.type &&
                      null != i.name &&
                      X(a, i),
                      ve(s, l);
                    var u = ve(s, i);
                    for (l = 0; l < c.length; l += 2) {
                      var d = c[l],
                        f = c[l + 1];
                      "style" === d
                        ? ge(a, f)
                        : "dangerouslySetInnerHTML" === d
                        ? de(a, f)
                        : "children" === d
                        ? fe(a, f)
                        : v(a, d, f, u);
                    }
                    switch (s) {
                      case "input":
                        J(a, i);
                        break;
                      case "textarea":
                        oe(a, i);
                        break;
                      case "select":
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!i.multiple;
                        var m = i.value;
                        null != m
                          ? ne(a, !!i.multiple, m, !1)
                          : p !== !!i.multiple &&
                            (null != i.defaultValue
                              ? ne(a, !!i.multiple, i.defaultValue, !0)
                              : ne(a, !!i.multiple, i.multiple ? [] : "", !1));
                    }
                    a[pa] = i;
                  } catch (g) {
                    Cc(e, e.return, g);
                  }
              }
              break;
            case 6:
              if ((hs(t, e), bs(e), 4 & r)) {
                if (null === e.stateNode) throw Error(o(162));
                (a = e.stateNode), (i = e.memoizedProps);
                try {
                  a.nodeValue = i;
                } catch (g) {
                  Cc(e, e.return, g);
                }
              }
              break;
            case 3:
              if (
                (hs(t, e),
                bs(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Wt(t.containerInfo);
                } catch (g) {
                  Cc(e, e.return, g);
                }
              break;
            case 4:
            default:
              hs(t, e), bs(e);
              break;
            case 13:
              hs(t, e),
                bs(e),
                8192 & (a = e.child).flags &&
                  ((i = null !== a.memoizedState),
                  (a.stateNode.isHidden = i),
                  !i ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (Bs = Xe())),
                4 & r && ms(e);
              break;
            case 22:
              if (
                ((d = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Kl = (u = Kl) || d), hs(t, e), (Kl = u))
                  : hs(t, e),
                bs(e),
                8192 & r)
              ) {
                if (
                  ((u = null !== e.memoizedState),
                  (e.stateNode.isHidden = u) && !d && 0 !== (1 & e.mode))
                )
                  for (Jl = e, d = e.child; null !== d; ) {
                    for (f = Jl = d; null !== Jl; ) {
                      switch (((m = (p = Jl).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          ns(4, p, p.return);
                          break;
                        case 1:
                          Zl(p, p.return);
                          var h = p.stateNode;
                          if ("function" === typeof h.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (h.props = t.memoizedProps),
                                (h.state = t.memoizedState),
                                h.componentWillUnmount();
                            } catch (g) {
                              Cc(r, n, g);
                            }
                          }
                          break;
                        case 5:
                          Zl(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            xs(f);
                            continue;
                          }
                      }
                      null !== m ? ((m.return = p), (Jl = m)) : xs(f);
                    }
                    d = d.sibling;
                  }
                e: for (d = null, f = e; ; ) {
                  if (5 === f.tag) {
                    if (null === d) {
                      d = f;
                      try {
                        (a = f.stateNode),
                          u
                            ? "function" === typeof (i = a.style).setProperty
                              ? i.setProperty("display", "none", "important")
                              : (i.display = "none")
                            : ((s = f.stateNode),
                              (l =
                                void 0 !== (c = f.memoizedProps.style) &&
                                null !== c &&
                                c.hasOwnProperty("display")
                                  ? c.display
                                  : null),
                              (s.style.display = he("display", l)));
                      } catch (g) {
                        Cc(e, e.return, g);
                      }
                    }
                  } else if (6 === f.tag) {
                    if (null === d)
                      try {
                        f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                      } catch (g) {
                        Cc(e, e.return, g);
                      }
                  } else if (
                    ((22 !== f.tag && 23 !== f.tag) ||
                      null === f.memoizedState ||
                      f === e) &&
                    null !== f.child
                  ) {
                    (f.child.return = f), (f = f.child);
                    continue;
                  }
                  if (f === e) break e;
                  for (; null === f.sibling; ) {
                    if (null === f.return || f.return === e) break e;
                    d === f && (d = null), (f = f.return);
                  }
                  d === f && (d = null),
                    (f.sibling.return = f.return),
                    (f = f.sibling);
                }
              }
              break;
            case 19:
              hs(t, e), bs(e), 4 & r && ms(e);
            case 21:
          }
        }
        function bs(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (is(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(o(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (fe(a, ""), (r.flags &= -33)),
                    cs(e, ls(e), a);
                  break;
                case 3:
                case 4:
                  var i = r.stateNode.containerInfo;
                  ss(e, ls(e), i);
                  break;
                default:
                  throw Error(o(161));
              }
            } catch (l) {
              Cc(e, e.return, l);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function ws(e, t, n) {
          (Jl = e), vs(e, t, n);
        }
        function vs(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Jl; ) {
            var a = Jl,
              o = a.child;
            if (22 === a.tag && r) {
              var i = null !== a.memoizedState || Ql;
              if (!i) {
                var l = a.alternate,
                  s = (null !== l && null !== l.memoizedState) || Kl;
                l = Ql;
                var c = Kl;
                if (((Ql = i), (Kl = s) && !c))
                  for (Jl = a; null !== Jl; )
                    (s = (i = Jl).child),
                      22 === i.tag && null !== i.memoizedState
                        ? ks(a)
                        : null !== s
                        ? ((s.return = i), (Jl = s))
                        : ks(a);
                for (; null !== o; ) (Jl = o), vs(o, t, n), (o = o.sibling);
                (Jl = a), (Ql = l), (Kl = c);
              }
              ys(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== o
                ? ((o.return = a), (Jl = o))
                : ys(e);
          }
        }
        function ys(e) {
          for (; null !== Jl; ) {
            var t = Jl;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Kl || rs(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Kl)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : nl(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var i = t.updateQueue;
                      null !== i && Vo(t, i, r);
                      break;
                    case 3:
                      var l = t.updateQueue;
                      if (null !== l) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Vo(t, l, n);
                      }
                      break;
                    case 5:
                      var s = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = s;
                        var c = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            c.autoFocus && n.focus();
                            break;
                          case "img":
                            c.src && (n.src = c.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var u = t.alternate;
                        if (null !== u) {
                          var d = u.memoizedState;
                          if (null !== d) {
                            var f = d.dehydrated;
                            null !== f && Wt(f);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(o(163));
                  }
                Kl || (512 & t.flags && as(t));
              } catch (p) {
                Cc(t, t.return, p);
              }
            }
            if (t === e) {
              Jl = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Jl = n);
              break;
            }
            Jl = t.return;
          }
        }
        function xs(e) {
          for (; null !== Jl; ) {
            var t = Jl;
            if (t === e) {
              Jl = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Jl = n);
              break;
            }
            Jl = t.return;
          }
        }
        function ks(e) {
          for (; null !== Jl; ) {
            var t = Jl;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    rs(4, t);
                  } catch (s) {
                    Cc(t, n, s);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (s) {
                      Cc(t, a, s);
                    }
                  }
                  var o = t.return;
                  try {
                    as(t);
                  } catch (s) {
                    Cc(t, o, s);
                  }
                  break;
                case 5:
                  var i = t.return;
                  try {
                    as(t);
                  } catch (s) {
                    Cc(t, i, s);
                  }
              }
            } catch (s) {
              Cc(t, t.return, s);
            }
            if (t === e) {
              Jl = null;
              break;
            }
            var l = t.sibling;
            if (null !== l) {
              (l.return = t.return), (Jl = l);
              break;
            }
            Jl = t.return;
          }
        }
        var js,
          Cs = Math.ceil,
          Ss = y.ReactCurrentDispatcher,
          Ns = y.ReactCurrentOwner,
          Es = y.ReactCurrentBatchConfig,
          Rs = 0,
          Fs = null,
          Os = null,
          As = 0,
          Ps = 0,
          Ts = Ca(0),
          Ms = 0,
          _s = null,
          Is = 0,
          Ls = 0,
          Us = 0,
          Ds = null,
          zs = null,
          Bs = 0,
          Ws = 1 / 0,
          Hs = null,
          Vs = !1,
          Ys = null,
          qs = null,
          $s = !1,
          Gs = null,
          Qs = 0,
          Ks = 0,
          Xs = null,
          Js = -1,
          Zs = 0;
        function ec() {
          return 0 !== (6 & Rs) ? Xe() : -1 !== Js ? Js : (Js = Xe());
        }
        function tc(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Rs) && 0 !== As
            ? As & -As
            : null !== go.transition
            ? (0 === Zs && (Zs = ht()), Zs)
            : 0 !== (e = vt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Kt(e.type));
        }
        function nc(e, t, n, r) {
          if (50 < Ks) throw ((Ks = 0), (Xs = null), Error(o(185)));
          bt(e, n, r),
            (0 !== (2 & Rs) && e === Fs) ||
              (e === Fs && (0 === (2 & Rs) && (Ls |= n), 4 === Ms && lc(e, As)),
              rc(e, r),
              1 === n &&
                0 === Rs &&
                0 === (1 & t.mode) &&
                ((Ws = Xe() + 500), Da && Wa()));
        }
        function rc(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                o = e.pendingLanes;
              0 < o;

            ) {
              var i = 31 - it(o),
                l = 1 << i,
                s = a[i];
              -1 === s
                ? (0 !== (l & n) && 0 === (l & r)) || (a[i] = pt(l, t))
                : s <= t && (e.expiredLanes |= l),
                (o &= ~l);
            }
          })(e, t);
          var r = ft(e, e === Fs ? As : 0);
          if (0 === r)
            null !== n && Ge(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Ge(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Da = !0), Ba(e);
                  })(sc.bind(null, e))
                : Ba(sc.bind(null, e)),
                ia(function () {
                  0 === (6 & Rs) && Wa();
                }),
                (n = null);
            else {
              switch (yt(r)) {
                case 1:
                  n = Ze;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Fc(n, ac.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function ac(e, t) {
          if (((Js = -1), (Zs = 0), 0 !== (6 & Rs))) throw Error(o(327));
          var n = e.callbackNode;
          if (kc() && e.callbackNode !== n) return null;
          var r = ft(e, e === Fs ? As : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = gc(e, r);
          else {
            t = r;
            var a = Rs;
            Rs |= 2;
            var i = mc();
            for (
              (Fs === e && As === t) ||
              ((Hs = null), (Ws = Xe() + 500), fc(e, t));
              ;

            )
              try {
                wc();
                break;
              } catch (s) {
                pc(e, s);
              }
            Eo(),
              (Ss.current = i),
              (Rs = a),
              null !== Os ? (t = 0) : ((Fs = null), (As = 0), (t = Ms));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = mt(e)) && ((r = a), (t = oc(e, a))),
              1 === t)
            )
              throw ((n = _s), fc(e, 0), lc(e, r), rc(e, Xe()), n);
            if (6 === t) lc(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              o = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!lr(o(), a)) return !1;
                            } catch (l) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = gc(e, r)) &&
                    0 !== (i = mt(e)) &&
                    ((r = i), (t = oc(e, i))),
                  1 === t))
              )
                throw ((n = _s), fc(e, 0), lc(e, r), rc(e, Xe()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(o(345));
                case 2:
                case 5:
                  xc(e, zs, Hs);
                  break;
                case 3:
                  if (
                    (lc(e, r),
                    (130023424 & r) === r && 10 < (t = Bs + 500 - Xe()))
                  ) {
                    if (0 !== ft(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      ec(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(xc.bind(null, e, zs, Hs), t);
                    break;
                  }
                  xc(e, zs, Hs);
                  break;
                case 4:
                  if ((lc(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var l = 31 - it(r);
                    (i = 1 << l), (l = t[l]) > a && (a = l), (r &= ~i);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Xe() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * Cs(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(xc.bind(null, e, zs, Hs), r);
                    break;
                  }
                  xc(e, zs, Hs);
                  break;
                default:
                  throw Error(o(329));
              }
            }
          }
          return rc(e, Xe()), e.callbackNode === n ? ac.bind(null, e) : null;
        }
        function oc(e, t) {
          var n = Ds;
          return (
            e.current.memoizedState.isDehydrated && (fc(e, t).flags |= 256),
            2 !== (e = gc(e, t)) && ((t = zs), (zs = n), null !== t && ic(t)),
            e
          );
        }
        function ic(e) {
          null === zs ? (zs = e) : zs.push.apply(zs, e);
        }
        function lc(e, t) {
          for (
            t &= ~Us,
              t &= ~Ls,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - it(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function sc(e) {
          if (0 !== (6 & Rs)) throw Error(o(327));
          kc();
          var t = ft(e, 0);
          if (0 === (1 & t)) return rc(e, Xe()), null;
          var n = gc(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = mt(e);
            0 !== r && ((t = r), (n = oc(e, r)));
          }
          if (1 === n) throw ((n = _s), fc(e, 0), lc(e, t), rc(e, Xe()), n);
          if (6 === n) throw Error(o(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            xc(e, zs, Hs),
            rc(e, Xe()),
            null
          );
        }
        function cc(e, t) {
          var n = Rs;
          Rs |= 1;
          try {
            return e(t);
          } finally {
            0 === (Rs = n) && ((Ws = Xe() + 500), Da && Wa());
          }
        }
        function uc(e) {
          null !== Gs && 0 === Gs.tag && 0 === (6 & Rs) && kc();
          var t = Rs;
          Rs |= 1;
          var n = Es.transition,
            r = vt;
          try {
            if (((Es.transition = null), (vt = 1), e)) return e();
          } finally {
            (vt = r), (Es.transition = n), 0 === (6 & (Rs = t)) && Wa();
          }
        }
        function dc() {
          (Ps = Ts.current), Sa(Ts);
        }
        function fc(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== Os))
            for (n = Os.return; null !== n; ) {
              var r = n;
              switch ((to(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Ta();
                  break;
                case 3:
                  Xo(), Sa(Fa), Sa(Ra), ri();
                  break;
                case 5:
                  Zo(r);
                  break;
                case 4:
                  Xo();
                  break;
                case 13:
                case 19:
                  Sa(ei);
                  break;
                case 10:
                  Ro(r.type._context);
                  break;
                case 22:
                case 23:
                  dc();
              }
              n = n.return;
            }
          if (
            ((Fs = e),
            (Os = e = Tc(e.current, null)),
            (As = Ps = t),
            (Ms = 0),
            (_s = null),
            (Us = Ls = Is = 0),
            (zs = Ds = null),
            null !== Po)
          ) {
            for (t = 0; t < Po.length; t++)
              if (null !== (r = (n = Po[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  o = n.pending;
                if (null !== o) {
                  var i = o.next;
                  (o.next = a), (r.next = i);
                }
                n.pending = r;
              }
            Po = null;
          }
          return e;
        }
        function pc(e, t) {
          for (;;) {
            var n = Os;
            try {
              if ((Eo(), (ai.current = Ji), ui)) {
                for (var r = li.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                ui = !1;
              }
              if (
                ((ii = 0),
                (ci = si = li = null),
                (di = !1),
                (fi = 0),
                (Ns.current = null),
                null === n || null === n.return)
              ) {
                (Ms = 1), (_s = t), (Os = null);
                break;
              }
              e: {
                var i = e,
                  l = n.return,
                  s = n,
                  c = t;
                if (
                  ((t = As),
                  (s.flags |= 32768),
                  null !== c &&
                    "object" === typeof c &&
                    "function" === typeof c.then)
                ) {
                  var u = c,
                    d = s,
                    f = d.tag;
                  if (0 === (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                    var p = d.alternate;
                    p
                      ? ((d.updateQueue = p.updateQueue),
                        (d.memoizedState = p.memoizedState),
                        (d.lanes = p.lanes))
                      : ((d.updateQueue = null), (d.memoizedState = null));
                  }
                  var m = gl(l);
                  if (null !== m) {
                    (m.flags &= -257),
                      bl(m, l, s, 0, t),
                      1 & m.mode && hl(i, u, t),
                      (c = u);
                    var h = (t = m).updateQueue;
                    if (null === h) {
                      var g = new Set();
                      g.add(c), (t.updateQueue = g);
                    } else h.add(c);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    hl(i, u, t), hc();
                    break e;
                  }
                  c = Error(o(426));
                } else if (ao && 1 & s.mode) {
                  var b = gl(l);
                  if (null !== b) {
                    0 === (65536 & b.flags) && (b.flags |= 256),
                      bl(b, l, s, 0, t),
                      ho(cl(c, s));
                    break e;
                  }
                }
                (i = c = cl(c, s)),
                  4 !== Ms && (Ms = 2),
                  null === Ds ? (Ds = [i]) : Ds.push(i),
                  (i = l);
                do {
                  switch (i.tag) {
                    case 3:
                      (i.flags |= 65536),
                        (t &= -t),
                        (i.lanes |= t),
                        Wo(i, pl(0, c, t));
                      break e;
                    case 1:
                      s = c;
                      var w = i.type,
                        v = i.stateNode;
                      if (
                        0 === (128 & i.flags) &&
                        ("function" === typeof w.getDerivedStateFromError ||
                          (null !== v &&
                            "function" === typeof v.componentDidCatch &&
                            (null === qs || !qs.has(v))))
                      ) {
                        (i.flags |= 65536),
                          (t &= -t),
                          (i.lanes |= t),
                          Wo(i, ml(i, s, t));
                        break e;
                      }
                  }
                  i = i.return;
                } while (null !== i);
              }
              yc(n);
            } catch (y) {
              (t = y), Os === n && null !== n && (Os = n = n.return);
              continue;
            }
            break;
          }
        }
        function mc() {
          var e = Ss.current;
          return (Ss.current = Ji), null === e ? Ji : e;
        }
        function hc() {
          (0 !== Ms && 3 !== Ms && 2 !== Ms) || (Ms = 4),
            null === Fs ||
              (0 === (268435455 & Is) && 0 === (268435455 & Ls)) ||
              lc(Fs, As);
        }
        function gc(e, t) {
          var n = Rs;
          Rs |= 2;
          var r = mc();
          for ((Fs === e && As === t) || ((Hs = null), fc(e, t)); ; )
            try {
              bc();
              break;
            } catch (a) {
              pc(e, a);
            }
          if ((Eo(), (Rs = n), (Ss.current = r), null !== Os))
            throw Error(o(261));
          return (Fs = null), (As = 0), Ms;
        }
        function bc() {
          for (; null !== Os; ) vc(Os);
        }
        function wc() {
          for (; null !== Os && !Qe(); ) vc(Os);
        }
        function vc(e) {
          var t = js(e.alternate, e, Ps);
          (e.memoizedProps = e.pendingProps),
            null === t ? yc(e) : (Os = t),
            (Ns.current = null);
        }
        function yc(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = $l(n, t, Ps))) return void (Os = n);
            } else {
              if (null !== (n = Gl(n, t)))
                return (n.flags &= 32767), void (Os = n);
              if (null === e) return (Ms = 6), void (Os = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Os = t);
            Os = t = e;
          } while (null !== t);
          0 === Ms && (Ms = 5);
        }
        function xc(e, t, n) {
          var r = vt,
            a = Es.transition;
          try {
            (Es.transition = null),
              (vt = 1),
              (function (e, t, n, r) {
                do {
                  kc();
                } while (null !== Gs);
                if (0 !== (6 & Rs)) throw Error(o(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(o(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var i = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - it(n),
                        o = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~o);
                    }
                  })(e, i),
                  e === Fs && ((Os = Fs = null), (As = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    $s ||
                    (($s = !0),
                    Fc(tt, function () {
                      return kc(), null;
                    })),
                  (i = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || i)
                ) {
                  (i = Es.transition), (Es.transition = null);
                  var l = vt;
                  vt = 1;
                  var s = Rs;
                  (Rs |= 4),
                    (Ns.current = null),
                    (function (e, t) {
                      if (((ea = Vt), pr((e = fr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                i = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, i.nodeType;
                              } catch (x) {
                                n = null;
                                break e;
                              }
                              var l = 0,
                                s = -1,
                                c = -1,
                                u = 0,
                                d = 0,
                                f = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var m;
                                  f !== n ||
                                    (0 !== a && 3 !== f.nodeType) ||
                                    (s = l + a),
                                    f !== i ||
                                      (0 !== r && 3 !== f.nodeType) ||
                                      (c = l + r),
                                    3 === f.nodeType &&
                                      (l += f.nodeValue.length),
                                    null !== (m = f.firstChild);

                                )
                                  (p = f), (f = m);
                                for (;;) {
                                  if (f === e) break t;
                                  if (
                                    (p === n && ++u === a && (s = l),
                                    p === i && ++d === r && (c = l),
                                    null !== (m = f.nextSibling))
                                  )
                                    break;
                                  p = (f = p).parentNode;
                                }
                                f = m;
                              }
                              n =
                                -1 === s || -1 === c
                                  ? null
                                  : { start: s, end: c };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          Vt = !1,
                          Jl = t;
                        null !== Jl;

                      )
                        if (
                          ((e = (t = Jl).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Jl = e);
                        else
                          for (; null !== Jl; ) {
                            t = Jl;
                            try {
                              var h = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== h) {
                                      var g = h.memoizedProps,
                                        b = h.memoizedState,
                                        w = t.stateNode,
                                        v = w.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? g
                                            : nl(t.type, g),
                                          b
                                        );
                                      w.__reactInternalSnapshotBeforeUpdate = v;
                                    }
                                    break;
                                  case 3:
                                    var y = t.stateNode.containerInfo;
                                    1 === y.nodeType
                                      ? (y.textContent = "")
                                      : 9 === y.nodeType &&
                                        y.documentElement &&
                                        y.removeChild(y.documentElement);
                                    break;
                                  default:
                                    throw Error(o(163));
                                }
                            } catch (x) {
                              Cc(t, t.return, x);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Jl = e);
                              break;
                            }
                            Jl = t.return;
                          }
                      (h = ts), (ts = !1);
                    })(e, n),
                    gs(n, e),
                    mr(ta),
                    (Vt = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    ws(n, e, a),
                    Ke(),
                    (Rs = s),
                    (vt = l),
                    (Es.transition = i);
                } else e.current = n;
                if (
                  ($s && (($s = !1), (Gs = e), (Qs = a)),
                  (i = e.pendingLanes),
                  0 === i && (qs = null),
                  (function (e) {
                    if (ot && "function" === typeof ot.onCommitFiberRoot)
                      try {
                        ot.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  rc(e, Xe()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (a = t[n]),
                      r(a.value, { componentStack: a.stack, digest: a.digest });
                if (Vs) throw ((Vs = !1), (e = Ys), (Ys = null), e);
                0 !== (1 & Qs) && 0 !== e.tag && kc(),
                  (i = e.pendingLanes),
                  0 !== (1 & i)
                    ? e === Xs
                      ? Ks++
                      : ((Ks = 0), (Xs = e))
                    : (Ks = 0),
                  Wa();
              })(e, t, n, r);
          } finally {
            (Es.transition = a), (vt = r);
          }
          return null;
        }
        function kc() {
          if (null !== Gs) {
            var e = yt(Qs),
              t = Es.transition,
              n = vt;
            try {
              if (((Es.transition = null), (vt = 16 > e ? 16 : e), null === Gs))
                var r = !1;
              else {
                if (((e = Gs), (Gs = null), (Qs = 0), 0 !== (6 & Rs)))
                  throw Error(o(331));
                var a = Rs;
                for (Rs |= 4, Jl = e.current; null !== Jl; ) {
                  var i = Jl,
                    l = i.child;
                  if (0 !== (16 & Jl.flags)) {
                    var s = i.deletions;
                    if (null !== s) {
                      for (var c = 0; c < s.length; c++) {
                        var u = s[c];
                        for (Jl = u; null !== Jl; ) {
                          var d = Jl;
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ns(8, d, i);
                          }
                          var f = d.child;
                          if (null !== f) (f.return = d), (Jl = f);
                          else
                            for (; null !== Jl; ) {
                              var p = (d = Jl).sibling,
                                m = d.return;
                              if ((os(d), d === u)) {
                                Jl = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = m), (Jl = p);
                                break;
                              }
                              Jl = m;
                            }
                        }
                      }
                      var h = i.alternate;
                      if (null !== h) {
                        var g = h.child;
                        if (null !== g) {
                          h.child = null;
                          do {
                            var b = g.sibling;
                            (g.sibling = null), (g = b);
                          } while (null !== g);
                        }
                      }
                      Jl = i;
                    }
                  }
                  if (0 !== (2064 & i.subtreeFlags) && null !== l)
                    (l.return = i), (Jl = l);
                  else
                    e: for (; null !== Jl; ) {
                      if (0 !== (2048 & (i = Jl).flags))
                        switch (i.tag) {
                          case 0:
                          case 11:
                          case 15:
                            ns(9, i, i.return);
                        }
                      var w = i.sibling;
                      if (null !== w) {
                        (w.return = i.return), (Jl = w);
                        break e;
                      }
                      Jl = i.return;
                    }
                }
                var v = e.current;
                for (Jl = v; null !== Jl; ) {
                  var y = (l = Jl).child;
                  if (0 !== (2064 & l.subtreeFlags) && null !== y)
                    (y.return = l), (Jl = y);
                  else
                    e: for (l = v; null !== Jl; ) {
                      if (0 !== (2048 & (s = Jl).flags))
                        try {
                          switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rs(9, s);
                          }
                        } catch (k) {
                          Cc(s, s.return, k);
                        }
                      if (s === l) {
                        Jl = null;
                        break e;
                      }
                      var x = s.sibling;
                      if (null !== x) {
                        (x.return = s.return), (Jl = x);
                        break e;
                      }
                      Jl = s.return;
                    }
                }
                if (
                  ((Rs = a),
                  Wa(),
                  ot && "function" === typeof ot.onPostCommitFiberRoot)
                )
                  try {
                    ot.onPostCommitFiberRoot(at, e);
                  } catch (k) {}
                r = !0;
              }
              return r;
            } finally {
              (vt = n), (Es.transition = t);
            }
          }
          return !1;
        }
        function jc(e, t, n) {
          (e = zo(e, (t = pl(0, (t = cl(n, t)), 1)), 1)),
            (t = ec()),
            null !== e && (bt(e, 1, t), rc(e, t));
        }
        function Cc(e, t, n) {
          if (3 === e.tag) jc(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                jc(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === qs || !qs.has(r)))
                ) {
                  (t = zo(t, (e = ml(t, (e = cl(n, e)), 1)), 1)),
                    (e = ec()),
                    null !== t && (bt(t, 1, e), rc(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Sc(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = ec()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Fs === e &&
              (As & n) === n &&
              (4 === Ms ||
              (3 === Ms && (130023424 & As) === As && 500 > Xe() - Bs)
                ? fc(e, 0)
                : (Us |= n)),
            rc(e, t);
        }
        function Nc(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ut), 0 === (130023424 & (ut <<= 1)) && (ut = 4194304)));
          var n = ec();
          null !== (e = _o(e, t)) && (bt(e, t, n), rc(e, n));
        }
        function Ec(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Nc(e, n);
        }
        function Rc(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(o(314));
          }
          null !== r && r.delete(t), Nc(e, n);
        }
        function Fc(e, t) {
          return $e(e, t);
        }
        function Oc(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Ac(e, t, n, r) {
          return new Oc(e, t, n, r);
        }
        function Pc(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Tc(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Ac(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Mc(e, t, n, r, a, i) {
          var l = 2;
          if (((r = e), "function" === typeof e)) Pc(e) && (l = 1);
          else if ("string" === typeof e) l = 5;
          else
            e: switch (e) {
              case j:
                return _c(n.children, a, i, t);
              case C:
                (l = 8), (a |= 8);
                break;
              case S:
                return (
                  ((e = Ac(12, n, t, 2 | a)).elementType = S), (e.lanes = i), e
                );
              case F:
                return (
                  ((e = Ac(13, n, t, a)).elementType = F), (e.lanes = i), e
                );
              case O:
                return (
                  ((e = Ac(19, n, t, a)).elementType = O), (e.lanes = i), e
                );
              case T:
                return Ic(n, a, i, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case N:
                      l = 10;
                      break e;
                    case E:
                      l = 9;
                      break e;
                    case R:
                      l = 11;
                      break e;
                    case A:
                      l = 14;
                      break e;
                    case P:
                      (l = 16), (r = null);
                      break e;
                  }
                throw Error(o(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Ac(l, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = i),
            t
          );
        }
        function _c(e, t, n, r) {
          return ((e = Ac(7, e, r, t)).lanes = n), e;
        }
        function Ic(e, t, n, r) {
          return (
            ((e = Ac(22, e, r, t)).elementType = T),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Lc(e, t, n) {
          return ((e = Ac(6, e, null, t)).lanes = n), e;
        }
        function Uc(e, t, n) {
          return (
            ((t = Ac(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Dc(e, t, n, r, a) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = gt(0)),
            (this.expirationTimes = gt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = gt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function zc(e, t, n, r, a, o, i, l, s) {
          return (
            (e = new Dc(e, t, n, l, s)),
            1 === t ? ((t = 1), !0 === o && (t |= 8)) : (t = 0),
            (o = Ac(3, null, null, t)),
            (e.current = o),
            (o.stateNode = e),
            (o.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Lo(o),
            e
          );
        }
        function Bc(e) {
          if (!e) return Ea;
          e: {
            if (We((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(o(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Pa(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(o(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Pa(n)) return _a(e, n, t);
          }
          return t;
        }
        function Wc(e, t, n, r, a, o, i, l, s) {
          return (
            ((e = zc(n, r, !0, e, 0, o, 0, l, s)).context = Bc(null)),
            (n = e.current),
            ((o = Do((r = ec()), (a = tc(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            zo(n, o, a),
            (e.current.lanes = a),
            bt(e, a, r),
            rc(e, r),
            e
          );
        }
        function Hc(e, t, n, r) {
          var a = t.current,
            o = ec(),
            i = tc(a);
          return (
            (n = Bc(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Do(o, i)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = zo(a, t, i)) && (nc(e, a, i, o), Bo(e, a, i)),
            i
          );
        }
        function Vc(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Yc(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function qc(e, t) {
          Yc(e, t), (e = e.alternate) && Yc(e, t);
        }
        js = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Fa.current) vl = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (vl = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Fl(t), mo();
                        break;
                      case 5:
                        Jo(t);
                        break;
                      case 1:
                        Pa(t.type) && Ia(t);
                        break;
                      case 4:
                        Ko(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        Na(jo, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Na(ei, 1 & ei.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Ll(e, t, n)
                            : (Na(ei, 1 & ei.current),
                              null !== (e = Vl(e, t, n)) ? e.sibling : null);
                        Na(ei, 1 & ei.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Wl(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Na(ei, ei.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Cl(e, t, n);
                    }
                    return Vl(e, t, n);
                  })(e, t, n)
                );
              vl = 0 !== (131072 & e.flags);
            }
          else (vl = !1), ao && 0 !== (1048576 & t.flags) && Za(t, qa, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Hl(e, t), (e = t.pendingProps);
              var a = Aa(t, Ra.current);
              Oo(t, n), (a = gi(null, t, r, e, a, n));
              var i = bi();
              return (
                (t.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Pa(r) ? ((i = !0), Ia(t)) : (i = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    Lo(t),
                    (a.updater = al),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    sl(t, r, e, n),
                    (t = Rl(null, t, r, !0, i, n)))
                  : ((t.tag = 0),
                    ao && i && eo(t),
                    yl(null, t, a, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Hl(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Pc(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === R) return 11;
                        if (e === A) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = nl(r, e)),
                  a)
                ) {
                  case 0:
                    t = Nl(null, t, r, e, n);
                    break e;
                  case 1:
                    t = El(null, t, r, e, n);
                    break e;
                  case 11:
                    t = xl(null, t, r, e, n);
                    break e;
                  case 14:
                    t = kl(null, t, r, nl(r.type, e), n);
                    break e;
                }
                throw Error(o(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Nl(e, t, r, (a = t.elementType === r ? a : nl(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                El(e, t, r, (a = t.elementType === r ? a : nl(r, a)), n)
              );
            case 3:
              e: {
                if ((Fl(t), null === e)) throw Error(o(387));
                (r = t.pendingProps),
                  (a = (i = t.memoizedState).element),
                  Uo(e, t),
                  Ho(t, r, null, n);
                var l = t.memoizedState;
                if (((r = l.element), i.isDehydrated)) {
                  if (
                    ((i = {
                      element: r,
                      isDehydrated: !1,
                      cache: l.cache,
                      pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                      transitions: l.transitions,
                    }),
                    (t.updateQueue.baseState = i),
                    (t.memoizedState = i),
                    256 & t.flags)
                  ) {
                    t = Ol(e, t, r, n, (a = cl(Error(o(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = Ol(e, t, r, n, (a = cl(Error(o(424)), t)));
                    break e;
                  }
                  for (
                    ro = ca(t.stateNode.containerInfo.firstChild),
                      no = t,
                      ao = !0,
                      oo = null,
                      n = ko(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((mo(), r === a)) {
                    t = Vl(e, t, n);
                    break e;
                  }
                  yl(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                Jo(t),
                null === e && co(t),
                (r = t.type),
                (a = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (l = a.children),
                na(r, a)
                  ? (l = null)
                  : null !== i && na(r, i) && (t.flags |= 32),
                Sl(e, t),
                yl(e, t, l, n),
                t.child
              );
            case 6:
              return null === e && co(t), null;
            case 13:
              return Ll(e, t, n);
            case 4:
              return (
                Ko(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = xo(t, null, r, n)) : yl(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                xl(e, t, r, (a = t.elementType === r ? a : nl(r, a)), n)
              );
            case 7:
              return yl(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return yl(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (i = t.memoizedProps),
                  (l = a.value),
                  Na(jo, r._currentValue),
                  (r._currentValue = l),
                  null !== i)
                )
                  if (lr(i.value, l)) {
                    if (i.children === a.children && !Fa.current) {
                      t = Vl(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (i = t.child) && (i.return = t);
                      null !== i;

                    ) {
                      var s = i.dependencies;
                      if (null !== s) {
                        l = i.child;
                        for (var c = s.firstContext; null !== c; ) {
                          if (c.context === r) {
                            if (1 === i.tag) {
                              (c = Do(-1, n & -n)).tag = 2;
                              var u = i.updateQueue;
                              if (null !== u) {
                                var d = (u = u.shared).pending;
                                null === d
                                  ? (c.next = c)
                                  : ((c.next = d.next), (d.next = c)),
                                  (u.pending = c);
                              }
                            }
                            (i.lanes |= n),
                              null !== (c = i.alternate) && (c.lanes |= n),
                              Fo(i.return, n, t),
                              (s.lanes |= n);
                            break;
                          }
                          c = c.next;
                        }
                      } else if (10 === i.tag)
                        l = i.type === t.type ? null : i.child;
                      else if (18 === i.tag) {
                        if (null === (l = i.return)) throw Error(o(341));
                        (l.lanes |= n),
                          null !== (s = l.alternate) && (s.lanes |= n),
                          Fo(l, n, t),
                          (l = i.sibling);
                      } else l = i.child;
                      if (null !== l) l.return = i;
                      else
                        for (l = i; null !== l; ) {
                          if (l === t) {
                            l = null;
                            break;
                          }
                          if (null !== (i = l.sibling)) {
                            (i.return = l.return), (l = i);
                            break;
                          }
                          l = l.return;
                        }
                      i = l;
                    }
                yl(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                Oo(t, n),
                (r = r((a = Ao(a)))),
                (t.flags |= 1),
                yl(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = nl((r = t.type), t.pendingProps)),
                kl(e, t, r, (a = nl(r.type, a)), n)
              );
            case 15:
              return jl(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : nl(r, a)),
                Hl(e, t),
                (t.tag = 1),
                Pa(r) ? ((e = !0), Ia(t)) : (e = !1),
                Oo(t, n),
                il(t, r, a),
                sl(t, r, a, n),
                Rl(null, t, r, !0, e, n)
              );
            case 19:
              return Wl(e, t, n);
            case 22:
              return Cl(e, t, n);
          }
          throw Error(o(156, t.tag));
        };
        var $c =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Gc(e) {
          this._internalRoot = e;
        }
        function Qc(e) {
          this._internalRoot = e;
        }
        function Kc(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Xc(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Jc() {}
        function Zc(e, t, n, r, a) {
          var o = n._reactRootContainer;
          if (o) {
            var i = o;
            if ("function" === typeof a) {
              var l = a;
              a = function () {
                var e = Vc(i);
                l.call(e);
              };
            }
            Hc(t, i, e, a);
          } else
            i = (function (e, t, n, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var o = r;
                  r = function () {
                    var e = Vc(i);
                    o.call(e);
                  };
                }
                var i = Wc(t, r, e, 0, null, !1, 0, "", Jc);
                return (
                  (e._reactRootContainer = i),
                  (e[ma] = i.current),
                  Wr(8 === e.nodeType ? e.parentNode : e),
                  uc(),
                  i
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof r) {
                var l = r;
                r = function () {
                  var e = Vc(s);
                  l.call(e);
                };
              }
              var s = zc(e, 0, !1, null, 0, !1, 0, "", Jc);
              return (
                (e._reactRootContainer = s),
                (e[ma] = s.current),
                Wr(8 === e.nodeType ? e.parentNode : e),
                uc(function () {
                  Hc(t, s, n, r);
                }),
                s
              );
            })(n, t, e, a, r);
          return Vc(i);
        }
        (Qc.prototype.render = Gc.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(o(409));
            Hc(e, t, null, null);
          }),
          (Qc.prototype.unmount = Gc.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                uc(function () {
                  Hc(null, e, null, null);
                }),
                  (t[ma] = null);
              }
            }),
          (Qc.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = Ct();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Tt.length && 0 !== t && t < Tt[n].priority;
                n++
              );
              Tt.splice(n, 0, e), 0 === n && Lt(e);
            }
          }),
          (xt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = dt(t.pendingLanes);
                  0 !== n &&
                    (wt(t, 1 | n),
                    rc(t, Xe()),
                    0 === (6 & Rs) && ((Ws = Xe() + 500), Wa()));
                }
                break;
              case 13:
                uc(function () {
                  var t = _o(e, 1);
                  if (null !== t) {
                    var n = ec();
                    nc(t, e, 1, n);
                  }
                }),
                  qc(e, 1);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = _o(e, 134217728);
              if (null !== t) nc(t, e, 134217728, ec());
              qc(e, 134217728);
            }
          }),
          (jt = function (e) {
            if (13 === e.tag) {
              var t = tc(e),
                n = _o(e, t);
              if (null !== n) nc(n, e, t, ec());
              qc(e, t);
            }
          }),
          (Ct = function () {
            return vt;
          }),
          (St = function (e, t) {
            var n = vt;
            try {
              return (vt = e), t();
            } finally {
              vt = n;
            }
          }),
          (ke = function (e, t, n) {
            switch (t) {
              case "input":
                if ((J(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = xa(r);
                      if (!a) throw Error(o(90));
                      $(r), J(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                oe(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Re = cc),
          (Fe = uc);
        var eu = {
            usingClientEntryPoint: !1,
            Events: [va, ya, xa, Ne, Ee, cc],
          },
          tu = {
            findFiberByHostInstance: wa,
            bundleType: 0,
            version: "18.3.1",
            rendererPackageName: "react-dom",
          },
          nu = {
            bundleType: tu.bundleType,
            version: tu.version,
            rendererPackageName: tu.rendererPackageName,
            rendererConfig: tu.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: y.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = Ye(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              tu.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ru = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ru.isDisabled && ru.supportsFiber)
            try {
              (at = ru.inject(nu)), (ot = ru);
            } catch (ue) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = eu),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Kc(t)) throw Error(o(200));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: k,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Kc(e)) throw Error(o(299));
            var n = !1,
              r = "",
              a = $c;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = zc(e, 1, !1, null, 0, n, 0, r, a)),
              (e[ma] = t.current),
              Wr(8 === e.nodeType ? e.parentNode : e),
              new Gc(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(o(188));
              throw ((e = Object.keys(e).join(",")), Error(o(268, e)));
            }
            return (e = null === (e = Ye(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return uc(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Xc(t)) throw Error(o(200));
            return Zc(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Kc(e)) throw Error(o(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              i = "",
              l = $c;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (l = n.onRecoverableError)),
              (t = Wc(t, null, e, 1, null != n ? n : null, a, 0, i, l)),
              (e[ma] = t.current),
              Wr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new Qc(t);
          }),
          (t.render = function (e, t, n) {
            if (!Xc(t)) throw Error(o(200));
            return Zc(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Xc(e)) throw Error(o(40));
            return (
              !!e._reactRootContainer &&
              (uc(function () {
                Zc(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ma] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = cc),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Xc(n)) throw Error(o(200));
            if (null == e || void 0 === e._reactInternals) throw Error(o(38));
            return Zc(e, t, n, !1, r);
          }),
          (t.version = "18.3.1-next-f1338f8080-20240426");
      },
      391: (e, t, n) => {
        "use strict";
        var r = n(950);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      950: (e, t, n) => {
        "use strict";
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(730));
      },
      29: function (e, t, n) {
        var r;
        (r = function (e) {
          return (function (e) {
            var t = {};
            function n(r) {
              if (t[r]) return t[r].exports;
              var a = (t[r] = { i: r, l: !1, exports: {} });
              return (
                e[r].call(a.exports, a, a.exports, n), (a.l = !0), a.exports
              );
            }
            return (
              (n.m = e),
              (n.c = t),
              (n.d = function (e, t, r) {
                n.o(e, t) ||
                  Object.defineProperty(e, t, { enumerable: !0, get: r });
              }),
              (n.r = function (e) {
                "undefined" !== typeof Symbol &&
                  Symbol.toStringTag &&
                  Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module",
                  }),
                  Object.defineProperty(e, "__esModule", { value: !0 });
              }),
              (n.t = function (e, t) {
                if ((1 & t && (e = n(e)), 8 & t)) return e;
                if (4 & t && "object" === typeof e && e && e.__esModule)
                  return e;
                var r = Object.create(null);
                if (
                  (n.r(r),
                  Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: e,
                  }),
                  2 & t && "string" != typeof e)
                )
                  for (var a in e)
                    n.d(
                      r,
                      a,
                      function (t) {
                        return e[t];
                      }.bind(null, a)
                    );
                return r;
              }),
              (n.n = function (e) {
                var t =
                  e && e.__esModule
                    ? function () {
                        return e.default;
                      }
                    : function () {
                        return e;
                      };
                return n.d(t, "a", t), t;
              }),
              (n.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
              }),
              (n.p = ""),
              n((n.s = "./src/react-webcam.tsx"))
            );
          })({
            "./src/react-webcam.tsx": function (e, t, n) {
              "use strict";
              n.r(t);
              var r = n("react"),
                a = (function () {
                  var e = function (t, n) {
                    return (
                      (e =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                          function (e, t) {
                            e.__proto__ = t;
                          }) ||
                        function (e, t) {
                          for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                        }),
                      e(t, n)
                    );
                  };
                  return function (t, n) {
                    function r() {
                      this.constructor = t;
                    }
                    e(t, n),
                      (t.prototype =
                        null === n
                          ? Object.create(n)
                          : ((r.prototype = n.prototype), new r()));
                  };
                })(),
                o = function () {
                  return (
                    (o =
                      Object.assign ||
                      function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                          for (var a in (t = arguments[n]))
                            Object.prototype.hasOwnProperty.call(t, a) &&
                              (e[a] = t[a]);
                        return e;
                      }),
                    o.apply(this, arguments)
                  );
                },
                i = function (e, t) {
                  var n = {};
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) &&
                      t.indexOf(r) < 0 &&
                      (n[r] = e[r]);
                  if (
                    null != e &&
                    "function" === typeof Object.getOwnPropertySymbols
                  ) {
                    var a = 0;
                    for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
                      t.indexOf(r[a]) < 0 &&
                        Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
                        (n[r[a]] = e[r[a]]);
                  }
                  return n;
                };
              function l() {
                return !(
                  !navigator.mediaDevices ||
                  !navigator.mediaDevices.getUserMedia
                );
              }
              "undefined" !== typeof window &&
                (void 0 === navigator.mediaDevices &&
                  (navigator.mediaDevices = {}),
                void 0 === navigator.mediaDevices.getUserMedia &&
                  (navigator.mediaDevices.getUserMedia = function (e) {
                    var t =
                      navigator.getUserMedia ||
                      navigator.webkitGetUserMedia ||
                      navigator.mozGetUserMedia ||
                      navigator.msGetUserMedia;
                    return t
                      ? new Promise(function (n, r) {
                          t.call(navigator, e, n, r);
                        })
                      : Promise.reject(
                          new Error(
                            "getUserMedia is not implemented in this browser"
                          )
                        );
                  }));
              var s = (function (e) {
                function t(t) {
                  var n = e.call(this, t) || this;
                  return (
                    (n.canvas = null),
                    (n.ctx = null),
                    (n.requestUserMediaId = 0),
                    (n.unmounted = !1),
                    (n.state = { hasUserMedia: !1 }),
                    n
                  );
                }
                return (
                  a(t, e),
                  (t.prototype.componentDidMount = function () {
                    var e = this.state,
                      t = this.props;
                    (this.unmounted = !1),
                      l()
                        ? (e.hasUserMedia || this.requestUserMedia(),
                          t.children &&
                            "function" != typeof t.children &&
                            console.warn("children must be a function"))
                        : t.onUserMediaError("getUserMedia not supported");
                  }),
                  (t.prototype.componentDidUpdate = function (e) {
                    var t = this.props;
                    if (l()) {
                      var n =
                          JSON.stringify(e.audioConstraints) !==
                          JSON.stringify(t.audioConstraints),
                        r =
                          JSON.stringify(e.videoConstraints) !==
                          JSON.stringify(t.videoConstraints),
                        a = e.minScreenshotWidth !== t.minScreenshotWidth,
                        o = e.minScreenshotHeight !== t.minScreenshotHeight;
                      (r || a || o) &&
                        ((this.canvas = null), (this.ctx = null)),
                        (n || r) &&
                          (this.stopAndCleanup(), this.requestUserMedia());
                    } else t.onUserMediaError("getUserMedia not supported");
                  }),
                  (t.prototype.componentWillUnmount = function () {
                    (this.unmounted = !0), this.stopAndCleanup();
                  }),
                  (t.stopMediaStream = function (e) {
                    e &&
                      (e.getVideoTracks && e.getAudioTracks
                        ? (e.getVideoTracks().map(function (t) {
                            e.removeTrack(t), t.stop();
                          }),
                          e.getAudioTracks().map(function (t) {
                            e.removeTrack(t), t.stop();
                          }))
                        : e.stop());
                  }),
                  (t.prototype.stopAndCleanup = function () {
                    var e = this.state;
                    e.hasUserMedia &&
                      (t.stopMediaStream(this.stream),
                      e.src && window.URL.revokeObjectURL(e.src));
                  }),
                  (t.prototype.getScreenshot = function (e) {
                    var t = this.state,
                      n = this.props;
                    if (!t.hasUserMedia) return null;
                    var r = this.getCanvas(e);
                    return (
                      r && r.toDataURL(n.screenshotFormat, n.screenshotQuality)
                    );
                  }),
                  (t.prototype.getCanvas = function (e) {
                    var t = this.state,
                      n = this.props;
                    if (!this.video) return null;
                    if (!t.hasUserMedia || !this.video.videoHeight) return null;
                    if (!this.ctx) {
                      var r = this.video.videoWidth,
                        a = this.video.videoHeight;
                      if (!this.props.forceScreenshotSourceSize) {
                        var o = r / a;
                        (a =
                          (r = n.minScreenshotWidth || this.video.clientWidth) /
                          o),
                          n.minScreenshotHeight &&
                            a < n.minScreenshotHeight &&
                            (r = (a = n.minScreenshotHeight) * o);
                      }
                      (this.canvas = document.createElement("canvas")),
                        (this.canvas.width =
                          (null === e || void 0 === e ? void 0 : e.width) || r),
                        (this.canvas.height =
                          (null === e || void 0 === e ? void 0 : e.height) ||
                          a),
                        (this.ctx = this.canvas.getContext("2d"));
                    }
                    var i = this.ctx,
                      l = this.canvas;
                    return (
                      i &&
                        l &&
                        ((l.width =
                          (null === e || void 0 === e ? void 0 : e.width) ||
                          l.width),
                        (l.height =
                          (null === e || void 0 === e ? void 0 : e.height) ||
                          l.height),
                        n.mirrored && (i.translate(l.width, 0), i.scale(-1, 1)),
                        (i.imageSmoothingEnabled = n.imageSmoothing),
                        i.drawImage(
                          this.video,
                          0,
                          0,
                          (null === e || void 0 === e ? void 0 : e.width) ||
                            l.width,
                          (null === e || void 0 === e ? void 0 : e.height) ||
                            l.height
                        ),
                        n.mirrored &&
                          (i.scale(-1, 1), i.translate(-l.width, 0))),
                      l
                    );
                  }),
                  (t.prototype.requestUserMedia = function () {
                    var e = this,
                      n = this.props,
                      r = function (r, a) {
                        var o = { video: "undefined" === typeof a || a };
                        n.audio && (o.audio = "undefined" === typeof r || r),
                          e.requestUserMediaId++;
                        var i = e.requestUserMediaId;
                        navigator.mediaDevices
                          .getUserMedia(o)
                          .then(function (n) {
                            e.unmounted || i !== e.requestUserMediaId
                              ? t.stopMediaStream(n)
                              : e.handleUserMedia(null, n);
                          })
                          .catch(function (t) {
                            e.handleUserMedia(t);
                          });
                      };
                    if ("mediaDevices" in navigator)
                      r(n.audioConstraints, n.videoConstraints);
                    else {
                      var a = function (e) {
                          return { optional: [{ sourceId: e }] };
                        },
                        o = function (e) {
                          var t = e.deviceId;
                          return "string" === typeof t
                            ? t
                            : Array.isArray(t) && t.length > 0
                            ? t[0]
                            : "object" === typeof t && t.ideal
                            ? t.ideal
                            : null;
                        };
                      MediaStreamTrack.getSources(function (e) {
                        var t = null,
                          i = null;
                        e.forEach(function (e) {
                          "audio" === e.kind
                            ? (t = e.id)
                            : "video" === e.kind && (i = e.id);
                        });
                        var l = o(n.audioConstraints);
                        l && (t = l);
                        var s = o(n.videoConstraints);
                        s && (i = s), r(a(t), a(i));
                      });
                    }
                  }),
                  (t.prototype.handleUserMedia = function (e, t) {
                    var n = this.props;
                    if (e || !t)
                      return (
                        this.setState({ hasUserMedia: !1 }),
                        void n.onUserMediaError(e)
                      );
                    this.stream = t;
                    try {
                      this.video && (this.video.srcObject = t),
                        this.setState({ hasUserMedia: !0 });
                    } catch (r) {
                      this.setState({
                        hasUserMedia: !0,
                        src: window.URL.createObjectURL(t),
                      });
                    }
                    n.onUserMedia(t);
                  }),
                  (t.prototype.render = function () {
                    var e = this,
                      t = this.state,
                      n = this.props,
                      a = n.audio,
                      l =
                        (n.forceScreenshotSourceSize,
                        n.disablePictureInPicture),
                      s =
                        (n.onUserMedia,
                        n.onUserMediaError,
                        n.screenshotFormat,
                        n.screenshotQuality,
                        n.minScreenshotWidth,
                        n.minScreenshotHeight,
                        n.audioConstraints,
                        n.videoConstraints,
                        n.imageSmoothing,
                        n.mirrored),
                      c = n.style,
                      u = void 0 === c ? {} : c,
                      d = n.children,
                      f = i(n, [
                        "audio",
                        "forceScreenshotSourceSize",
                        "disablePictureInPicture",
                        "onUserMedia",
                        "onUserMediaError",
                        "screenshotFormat",
                        "screenshotQuality",
                        "minScreenshotWidth",
                        "minScreenshotHeight",
                        "audioConstraints",
                        "videoConstraints",
                        "imageSmoothing",
                        "mirrored",
                        "style",
                        "children",
                      ]),
                      p = s
                        ? o(o({}, u), {
                            transform: (u.transform || "") + " scaleX(-1)",
                          })
                        : u,
                      m = { getScreenshot: this.getScreenshot.bind(this) };
                    return r.createElement(
                      r.Fragment,
                      null,
                      r.createElement(
                        "video",
                        o(
                          {
                            autoPlay: !0,
                            disablePictureInPicture: l,
                            src: t.src,
                            muted: !a,
                            playsInline: !0,
                            ref: function (t) {
                              e.video = t;
                            },
                            style: p,
                          },
                          f
                        )
                      ),
                      d && d(m)
                    );
                  }),
                  (t.defaultProps = {
                    audio: !1,
                    disablePictureInPicture: !1,
                    forceScreenshotSourceSize: !1,
                    imageSmoothing: !0,
                    mirrored: !1,
                    onUserMedia: function () {},
                    onUserMediaError: function () {},
                    screenshotFormat: "image/webp",
                    screenshotQuality: 0.92,
                  }),
                  t
                );
              })(r.Component);
              t.default = s;
            },
            react: function (t, n) {
              t.exports = e;
            },
          }).default;
        }),
          (e.exports = r(n(43)));
      },
      153: (e, t, n) => {
        "use strict";
        var r = n(43),
          a = Symbol.for("react.element"),
          o = Symbol.for("react.fragment"),
          i = Object.prototype.hasOwnProperty,
          l =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          s = { key: !0, ref: !0, __self: !0, __source: !0 };
        function c(e, t, n) {
          var r,
            o = {},
            c = null,
            u = null;
          for (r in (void 0 !== n && (c = "" + n),
          void 0 !== t.key && (c = "" + t.key),
          void 0 !== t.ref && (u = t.ref),
          t))
            i.call(t, r) && !s.hasOwnProperty(r) && (o[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === o[r] && (o[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: c,
            ref: u,
            props: o,
            _owner: l.current,
          };
        }
        (t.jsx = c), (t.jsxs = c);
      },
      202: (e, t) => {
        "use strict";
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          o = Symbol.for("react.strict_mode"),
          i = Symbol.for("react.profiler"),
          l = Symbol.for("react.provider"),
          s = Symbol.for("react.context"),
          c = Symbol.for("react.forward_ref"),
          u = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          f = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var m = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          h = Object.assign,
          g = {};
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || m);
        }
        function w() {}
        function v(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || m);
        }
        (b.prototype.isReactComponent = {}),
          (b.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (b.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (w.prototype = b.prototype);
        var y = (v.prototype = new w());
        (y.constructor = v), h(y, b.prototype), (y.isPureReactComponent = !0);
        var x = Array.isArray,
          k = Object.prototype.hasOwnProperty,
          j = { current: null },
          C = { key: !0, ref: !0, __self: !0, __source: !0 };
        function S(e, t, r) {
          var a,
            o = {},
            i = null,
            l = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (l = t.ref),
            void 0 !== t.key && (i = "" + t.key),
            t))
              k.call(t, a) && !C.hasOwnProperty(a) && (o[a] = t[a]);
          var s = arguments.length - 2;
          if (1 === s) o.children = r;
          else if (1 < s) {
            for (var c = Array(s), u = 0; u < s; u++) c[u] = arguments[u + 2];
            o.children = c;
          }
          if (e && e.defaultProps)
            for (a in (s = e.defaultProps)) void 0 === o[a] && (o[a] = s[a]);
          return {
            $$typeof: n,
            type: e,
            key: i,
            ref: l,
            props: o,
            _owner: j.current,
          };
        }
        function N(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var E = /\/+/g;
        function R(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function F(e, t, a, o, i) {
          var l = typeof e;
          ("undefined" !== l && "boolean" !== l) || (e = null);
          var s = !1;
          if (null === e) s = !0;
          else
            switch (l) {
              case "string":
              case "number":
                s = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    s = !0;
                }
            }
          if (s)
            return (
              (i = i((s = e))),
              (e = "" === o ? "." + R(s, 0) : o),
              x(i)
                ? ((a = ""),
                  null != e && (a = e.replace(E, "$&/") + "/"),
                  F(i, t, a, "", function (e) {
                    return e;
                  }))
                : null != i &&
                  (N(i) &&
                    (i = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      i,
                      a +
                        (!i.key || (s && s.key === i.key)
                          ? ""
                          : ("" + i.key).replace(E, "$&/") + "/") +
                        e
                    )),
                  t.push(i)),
              1
            );
          if (((s = 0), (o = "" === o ? "." : o + ":"), x(e)))
            for (var c = 0; c < e.length; c++) {
              var u = o + R((l = e[c]), c);
              s += F(l, t, a, u, i);
            }
          else if (
            ((u = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof u)
          )
            for (e = u.call(e), c = 0; !(l = e.next()).done; )
              s += F((l = l.value), t, a, (u = o + R(l, c++)), i);
          else if ("object" === l)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return s;
        }
        function O(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            F(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function A(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var P = { current: null },
          T = { transition: null },
          M = {
            ReactCurrentDispatcher: P,
            ReactCurrentBatchConfig: T,
            ReactCurrentOwner: j,
          };
        function _() {
          throw Error(
            "act(...) is not supported in production builds of React."
          );
        }
        (t.Children = {
          map: O,
          forEach: function (e, t, n) {
            O(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              O(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              O(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!N(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = b),
          (t.Fragment = a),
          (t.Profiler = i),
          (t.PureComponent = v),
          (t.StrictMode = o),
          (t.Suspense = u),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = M),
          (t.act = _),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var a = h({}, e.props),
              o = e.key,
              i = e.ref,
              l = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((i = t.ref), (l = j.current)),
                void 0 !== t.key && (o = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var s = e.type.defaultProps;
              for (c in t)
                k.call(t, c) &&
                  !C.hasOwnProperty(c) &&
                  (a[c] = void 0 === t[c] && void 0 !== s ? s[c] : t[c]);
            }
            var c = arguments.length - 2;
            if (1 === c) a.children = r;
            else if (1 < c) {
              s = Array(c);
              for (var u = 0; u < c; u++) s[u] = arguments[u + 2];
              a.children = s;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: o,
              ref: i,
              props: a,
              _owner: l,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: s,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: l, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = S),
          (t.createFactory = function (e) {
            var t = S.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: c, render: e };
          }),
          (t.isValidElement = N),
          (t.lazy = function (e) {
            return {
              $$typeof: f,
              _payload: { _status: -1, _result: e },
              _init: A,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = T.transition;
            T.transition = {};
            try {
              e();
            } finally {
              T.transition = t;
            }
          }),
          (t.unstable_act = _),
          (t.useCallback = function (e, t) {
            return P.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return P.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return P.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return P.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return P.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return P.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return P.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return P.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return P.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return P.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return P.current.useRef(e);
          }),
          (t.useState = function (e) {
            return P.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return P.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return P.current.useTransition();
          }),
          (t.version = "18.3.1");
      },
      43: (e, t, n) => {
        "use strict";
        e.exports = n(202);
      },
      579: (e, t, n) => {
        "use strict";
        e.exports = n(153);
      },
      234: (e, t) => {
        "use strict";
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < o(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, i = a >>> 1; r < i; ) {
              var l = 2 * (r + 1) - 1,
                s = e[l],
                c = l + 1,
                u = e[c];
              if (0 > o(s, n))
                c < a && 0 > o(u, s)
                  ? ((e[r] = u), (e[c] = n), (r = c))
                  : ((e[r] = s), (e[l] = n), (r = l));
              else {
                if (!(c < a && 0 > o(u, n))) break e;
                (e[r] = u), (e[c] = n), (r = c);
              }
            }
          }
          return t;
        }
        function o(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var i = performance;
          t.unstable_now = function () {
            return i.now();
          };
        } else {
          var l = Date,
            s = l.now();
          t.unstable_now = function () {
            return l.now() - s;
          };
        }
        var c = [],
          u = [],
          d = 1,
          f = null,
          p = 3,
          m = !1,
          h = !1,
          g = !1,
          b = "function" === typeof setTimeout ? setTimeout : null,
          w = "function" === typeof clearTimeout ? clearTimeout : null,
          v = "undefined" !== typeof setImmediate ? setImmediate : null;
        function y(e) {
          for (var t = r(u); null !== t; ) {
            if (null === t.callback) a(u);
            else {
              if (!(t.startTime <= e)) break;
              a(u), (t.sortIndex = t.expirationTime), n(c, t);
            }
            t = r(u);
          }
        }
        function x(e) {
          if (((g = !1), y(e), !h))
            if (null !== r(c)) (h = !0), T(k);
            else {
              var t = r(u);
              null !== t && M(x, t.startTime - e);
            }
        }
        function k(e, n) {
          (h = !1), g && ((g = !1), w(N), (N = -1)), (m = !0);
          var o = p;
          try {
            for (
              y(n), f = r(c);
              null !== f && (!(f.expirationTime > n) || (e && !F()));

            ) {
              var i = f.callback;
              if ("function" === typeof i) {
                (f.callback = null), (p = f.priorityLevel);
                var l = i(f.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof l
                    ? (f.callback = l)
                    : f === r(c) && a(c),
                  y(n);
              } else a(c);
              f = r(c);
            }
            if (null !== f) var s = !0;
            else {
              var d = r(u);
              null !== d && M(x, d.startTime - n), (s = !1);
            }
            return s;
          } finally {
            (f = null), (p = o), (m = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var j,
          C = !1,
          S = null,
          N = -1,
          E = 5,
          R = -1;
        function F() {
          return !(t.unstable_now() - R < E);
        }
        function O() {
          if (null !== S) {
            var e = t.unstable_now();
            R = e;
            var n = !0;
            try {
              n = S(!0, e);
            } finally {
              n ? j() : ((C = !1), (S = null));
            }
          } else C = !1;
        }
        if ("function" === typeof v)
          j = function () {
            v(O);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var A = new MessageChannel(),
            P = A.port2;
          (A.port1.onmessage = O),
            (j = function () {
              P.postMessage(null);
            });
        } else
          j = function () {
            b(O, 0);
          };
        function T(e) {
          (S = e), C || ((C = !0), j());
        }
        function M(e, n) {
          N = b(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            h || m || ((h = !0), T(k));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (E = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(c);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, o) {
            var i = t.unstable_now();
            switch (
              ("object" === typeof o && null !== o
                ? (o = "number" === typeof (o = o.delay) && 0 < o ? i + o : i)
                : (o = i),
              e)
            ) {
              case 1:
                var l = -1;
                break;
              case 2:
                l = 250;
                break;
              case 5:
                l = 1073741823;
                break;
              case 4:
                l = 1e4;
                break;
              default:
                l = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: a,
                priorityLevel: e,
                startTime: o,
                expirationTime: (l = o + l),
                sortIndex: -1,
              }),
              o > i
                ? ((e.sortIndex = o),
                  n(u, e),
                  null === r(c) &&
                    e === r(u) &&
                    (g ? (w(N), (N = -1)) : (g = !0), M(x, o - i)))
                : ((e.sortIndex = l), n(c, e), h || m || ((h = !0), T(k))),
              e
            );
          }),
          (t.unstable_shouldYield = F),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      853: (e, t, n) => {
        "use strict";
        e.exports = n(234);
      },
      64: function (e) {
        (e.exports = (function () {
          "use strict";
          function e(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
            return r;
          }
          function t(e) {
            if (Array.isArray(e)) return e;
          }
          function n(t) {
            if (Array.isArray(t)) return e(t);
          }
          function r(e, t, n) {
            if ("function" == typeof e ? e === t : e.has(t))
              return arguments.length < 3 ? t : n;
            throw new TypeError(
              "Private element is not present on this object"
            );
          }
          function a(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          }
          function o(e, t, n) {
            return (
              (t = g(t)),
              j(
                e,
                w()
                  ? Reflect.construct(t, n || [], g(e).constructor)
                  : t.apply(e, n)
              )
            );
          }
          function i(e, t) {
            if (t.has(e))
              throw new TypeError(
                "Cannot initialize the same private elements twice on an object"
              );
          }
          function l(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          }
          function s(e, t) {
            return e.get(r(e, t));
          }
          function c(e, t, n) {
            i(e, t), t.set(e, n);
          }
          function u(e, t, n) {
            return e.set(r(e, t), n), n;
          }
          function d(e, t, n) {
            if (w()) return Reflect.construct.apply(null, arguments);
            var r = [null];
            return r.push.apply(r, t), new (e.bind.apply(e, r))();
          }
          function f(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, F(r.key), r);
            }
          }
          function p(e, t, n) {
            return (
              t && f(e.prototype, t),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              e
            );
          }
          function m(e, t) {
            var n =
              ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
            if (!n) {
              if (Array.isArray(e) || (n = A(e)) || t) {
                n && (e = n);
                var r = 0,
                  a = function () {};
                return {
                  s: a,
                  n: function () {
                    return r >= e.length
                      ? { done: !0 }
                      : { done: !1, value: e[r++] };
                  },
                  e: function (e) {
                    throw e;
                  },
                  f: a,
                };
              }
              throw new TypeError(
                "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            }
            var o,
              i = !0,
              l = !1;
            return {
              s: function () {
                n = n.call(e);
              },
              n: function () {
                var e = n.next();
                return (i = e.done), e;
              },
              e: function (e) {
                (l = !0), (o = e);
              },
              f: function () {
                try {
                  i || null == n.return || n.return();
                } finally {
                  if (l) throw o;
                }
              },
            };
          }
          function h() {
            return (
              (h =
                "undefined" != typeof Reflect && Reflect.get
                  ? Reflect.get.bind()
                  : function (e, t, n) {
                      var r = N(e, t);
                      if (r) {
                        var a = Object.getOwnPropertyDescriptor(r, t);
                        return a.get
                          ? a.get.call(arguments.length < 3 ? e : n)
                          : a.value;
                      }
                    }),
              h.apply(null, arguments)
            );
          }
          function g(e) {
            return (
              (g = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                  }),
              g(e)
            );
          }
          function b(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              t && C(e, t);
          }
          function w() {
            try {
              var e = !Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              );
            } catch (e) {}
            return (w = function () {
              return !!e;
            })();
          }
          function v(e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          }
          function y(e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                a,
                o,
                i,
                l = [],
                s = !0,
                c = !1;
              try {
                if (((o = (n = n.call(e)).next), 0 === t));
                else
                  for (
                    ;
                    !(s = (r = o.call(n)).done) &&
                    (l.push(r.value), l.length !== t);
                    s = !0
                  );
              } catch (e) {
                (c = !0), (a = e);
              } finally {
                try {
                  if (
                    !s &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (c) throw a;
                }
              }
              return l;
            }
          }
          function x() {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          }
          function k() {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          }
          function j(e, t) {
            if (t && ("object" == typeof t || "function" == typeof t)) return t;
            if (void 0 !== t)
              throw new TypeError(
                "Derived constructors may only return object or undefined"
              );
            return a(e);
          }
          function C(e, t) {
            return (
              (C = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (e, t) {
                    return (e.__proto__ = t), e;
                  }),
              C(e, t)
            );
          }
          function S(e, n) {
            return t(e) || y(e, n) || A(e, n) || x();
          }
          function N(e, t) {
            for (; !{}.hasOwnProperty.call(e, t) && null !== (e = g(e)); );
            return e;
          }
          function E(e) {
            return n(e) || v(e) || A(e) || k();
          }
          function R(e, t) {
            if ("object" != typeof e || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t);
              if ("object" != typeof r) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(e);
          }
          function F(e) {
            var t = R(e, "string");
            return "symbol" == typeof t ? t : t + "";
          }
          function O(e) {
            return (
              (O =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    }),
              O(e)
            );
          }
          function A(t, n) {
            if (t) {
              if ("string" == typeof t) return e(t, n);
              var r = {}.toString.call(t).slice(8, -1);
              return (
                "Object" === r && t.constructor && (r = t.constructor.name),
                "Map" === r || "Set" === r
                  ? Array.from(t)
                  : "Arguments" === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                  ? e(t, n)
                  : void 0
              );
            }
          }
          var P = 100,
            T = {},
            M = function () {
              T.previousActiveElement instanceof HTMLElement
                ? (T.previousActiveElement.focus(),
                  (T.previousActiveElement = null))
                : document.body && document.body.focus();
            },
            _ = function (e) {
              return new Promise(function (t) {
                if (!e) return t();
                var n = window.scrollX,
                  r = window.scrollY;
                (T.restoreFocusTimeout = setTimeout(function () {
                  M(), t();
                }, P)),
                  window.scrollTo(n, r);
              });
            },
            I = "swal2-",
            L = [
              "container",
              "shown",
              "height-auto",
              "iosfix",
              "popup",
              "modal",
              "no-backdrop",
              "no-transition",
              "toast",
              "toast-shown",
              "show",
              "hide",
              "close",
              "title",
              "html-container",
              "actions",
              "confirm",
              "deny",
              "cancel",
              "default-outline",
              "footer",
              "icon",
              "icon-content",
              "image",
              "input",
              "file",
              "range",
              "select",
              "radio",
              "checkbox",
              "label",
              "textarea",
              "inputerror",
              "input-label",
              "validation-message",
              "progress-steps",
              "active-progress-step",
              "progress-step",
              "progress-step-line",
              "loader",
              "loading",
              "styled",
              "top",
              "top-start",
              "top-end",
              "top-left",
              "top-right",
              "center",
              "center-start",
              "center-end",
              "center-left",
              "center-right",
              "bottom",
              "bottom-start",
              "bottom-end",
              "bottom-left",
              "bottom-right",
              "grow-row",
              "grow-column",
              "grow-fullscreen",
              "rtl",
              "timer-progress-bar",
              "timer-progress-bar-container",
              "scrollbar-measure",
              "icon-success",
              "icon-warning",
              "icon-info",
              "icon-question",
              "icon-error",
            ].reduce(function (e, t) {
              return (e[t] = I + t), e;
            }, {}),
            U = ["success", "warning", "info", "question", "error"].reduce(
              function (e, t) {
                return (e[t] = I + t), e;
              },
              {}
            ),
            D = "SweetAlert2:",
            z = function (e) {
              return e.charAt(0).toUpperCase() + e.slice(1);
            },
            B = function (e) {
              console.warn(
                "".concat(D, " ").concat("object" === O(e) ? e.join(" ") : e)
              );
            },
            W = function (e) {
              console.error("".concat(D, " ").concat(e));
            },
            H = [],
            V = function (e) {
              H.includes(e) || (H.push(e), B(e));
            },
            Y = function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null;
              V(
                '"'
                  .concat(
                    e,
                    '" is deprecated and will be removed in the next major release.'
                  )
                  .concat(t ? ' Use "'.concat(t, '" instead.') : "")
              );
            },
            q = function (e) {
              return "function" === typeof e ? e() : e;
            },
            $ = function (e) {
              return e && "function" === typeof e.toPromise;
            },
            G = function (e) {
              return $(e) ? e.toPromise() : Promise.resolve(e);
            },
            Q = function (e) {
              return e && Promise.resolve(e) === e;
            },
            K = function () {
              return document.body.querySelector(".".concat(L.container));
            },
            X = function (e) {
              var t = K();
              return t ? t.querySelector(e) : null;
            },
            J = function (e) {
              return X(".".concat(e));
            },
            Z = function () {
              return J(L.popup);
            },
            ee = function () {
              return J(L.icon);
            },
            te = function () {
              return J(L["icon-content"]);
            },
            ne = function () {
              return J(L.title);
            },
            re = function () {
              return J(L["html-container"]);
            },
            ae = function () {
              return J(L.image);
            },
            oe = function () {
              return J(L["progress-steps"]);
            },
            ie = function () {
              return J(L["validation-message"]);
            },
            le = function () {
              return X(".".concat(L.actions, " .").concat(L.confirm));
            },
            se = function () {
              return X(".".concat(L.actions, " .").concat(L.cancel));
            },
            ce = function () {
              return X(".".concat(L.actions, " .").concat(L.deny));
            },
            ue = function () {
              return J(L["input-label"]);
            },
            de = function () {
              return X(".".concat(L.loader));
            },
            fe = function () {
              return J(L.actions);
            },
            pe = function () {
              return J(L.footer);
            },
            me = function () {
              return J(L["timer-progress-bar"]);
            },
            he = function () {
              return J(L.close);
            },
            ge =
              '\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n',
            be = function () {
              var e = Z();
              if (!e) return [];
              var t = e.querySelectorAll(
                  '[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'
                ),
                n = Array.from(t).sort(function (e, t) {
                  var n = parseInt(e.getAttribute("tabindex") || "0"),
                    r = parseInt(t.getAttribute("tabindex") || "0");
                  return n > r ? 1 : n < r ? -1 : 0;
                }),
                r = e.querySelectorAll(ge),
                a = Array.from(r).filter(function (e) {
                  return "-1" !== e.getAttribute("tabindex");
                });
              return E(new Set(n.concat(a))).filter(function (e) {
                return Le(e);
              });
            },
            we = function () {
              return (
                ke(document.body, L.shown) &&
                !ke(document.body, L["toast-shown"]) &&
                !ke(document.body, L["no-backdrop"])
              );
            },
            ve = function () {
              var e = Z();
              return !!e && ke(e, L.toast);
            },
            ye = function () {
              var e = Z();
              return !!e && e.hasAttribute("data-loading");
            },
            xe = function (e, t) {
              if (((e.textContent = ""), t)) {
                var n = new DOMParser().parseFromString(t, "text/html"),
                  r = n.querySelector("head");
                r &&
                  Array.from(r.childNodes).forEach(function (t) {
                    e.appendChild(t);
                  });
                var a = n.querySelector("body");
                a &&
                  Array.from(a.childNodes).forEach(function (t) {
                    t instanceof HTMLVideoElement ||
                    t instanceof HTMLAudioElement
                      ? e.appendChild(t.cloneNode(!0))
                      : e.appendChild(t);
                  });
              }
            },
            ke = function (e, t) {
              if (!t) return !1;
              for (var n = t.split(/\s+/), r = 0; r < n.length; r++)
                if (!e.classList.contains(n[r])) return !1;
              return !0;
            },
            je = function (e, t) {
              Array.from(e.classList).forEach(function (n) {
                Object.values(L).includes(n) ||
                  Object.values(U).includes(n) ||
                  Object.values(t.showClass || {}).includes(n) ||
                  e.classList.remove(n);
              });
            },
            Ce = function (e, t, n) {
              if ((je(e, t), t.customClass)) {
                var r = t.customClass[n];
                r &&
                  ("string" === typeof r || r.forEach
                    ? Re(e, r)
                    : B(
                        "Invalid type of customClass."
                          .concat(
                            n,
                            '! Expected string or iterable object, got "'
                          )
                          .concat(O(r), '"')
                      ));
              }
            },
            Se = function (e, t) {
              if (!t) return null;
              switch (t) {
                case "select":
                case "textarea":
                case "file":
                  return e.querySelector(
                    ".".concat(L.popup, " > .").concat(L[t])
                  );
                case "checkbox":
                  return e.querySelector(
                    ".".concat(L.popup, " > .").concat(L.checkbox, " input")
                  );
                case "radio":
                  return (
                    e.querySelector(
                      "."
                        .concat(L.popup, " > .")
                        .concat(L.radio, " input:checked")
                    ) ||
                    e.querySelector(
                      "."
                        .concat(L.popup, " > .")
                        .concat(L.radio, " input:first-child")
                    )
                  );
                case "range":
                  return e.querySelector(
                    ".".concat(L.popup, " > .").concat(L.range, " input")
                  );
                default:
                  return e.querySelector(
                    ".".concat(L.popup, " > .").concat(L.input)
                  );
              }
            },
            Ne = function (e) {
              if ((e.focus(), "file" !== e.type)) {
                var t = e.value;
                (e.value = ""), (e.value = t);
              }
            },
            Ee = function (e, t, n) {
              e &&
                t &&
                ("string" === typeof t && (t = t.split(/\s+/).filter(Boolean)),
                t.forEach(function (t) {
                  Array.isArray(e)
                    ? e.forEach(function (e) {
                        n ? e.classList.add(t) : e.classList.remove(t);
                      })
                    : n
                    ? e.classList.add(t)
                    : e.classList.remove(t);
                }));
            },
            Re = function (e, t) {
              Ee(e, t, !0);
            },
            Fe = function (e, t) {
              Ee(e, t, !1);
            },
            Oe = function (e, t) {
              for (var n = Array.from(e.children), r = 0; r < n.length; r++) {
                var a = n[r];
                if (a instanceof HTMLElement && ke(a, t)) return a;
              }
            },
            Ae = function (e, t, n) {
              n === "".concat(parseInt(n)) && (n = parseInt(n)),
                n || 0 === parseInt(n)
                  ? e.style.setProperty(
                      t,
                      "number" === typeof n ? "".concat(n, "px") : n
                    )
                  : e.style.removeProperty(t);
            },
            Pe = function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "flex";
              e && (e.style.display = t);
            },
            Te = function (e) {
              e && (e.style.display = "none");
            },
            Me = function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "block";
              e &&
                new MutationObserver(function () {
                  Ie(e, e.innerHTML, t);
                }).observe(e, { childList: !0, subtree: !0 });
            },
            _e = function (e, t, n, r) {
              var a = e.querySelector(t);
              a && a.style.setProperty(n, r);
            },
            Ie = function (e, t) {
              t
                ? Pe(
                    e,
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : "flex"
                  )
                : Te(e);
            },
            Le = function (e) {
              return !(
                !e ||
                !(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
              );
            },
            Ue = function () {
              return !Le(le()) && !Le(ce()) && !Le(se());
            },
            De = function (e) {
              return !!(e.scrollHeight > e.clientHeight);
            },
            ze = function (e) {
              var t = window.getComputedStyle(e),
                n = parseFloat(t.getPropertyValue("animation-duration") || "0"),
                r = parseFloat(
                  t.getPropertyValue("transition-duration") || "0"
                );
              return n > 0 || r > 0;
            },
            Be = function (e) {
              var t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                n = me();
              n &&
                Le(n) &&
                (t && ((n.style.transition = "none"), (n.style.width = "100%")),
                setTimeout(function () {
                  (n.style.transition = "width ".concat(e / 1e3, "s linear")),
                    (n.style.width = "0%");
                }, 10));
            },
            We = function () {
              var e = me();
              if (e) {
                var t = parseInt(window.getComputedStyle(e).width);
                e.style.removeProperty("transition"), (e.style.width = "100%");
                var n = (t / parseInt(window.getComputedStyle(e).width)) * 100;
                e.style.width = "".concat(n, "%");
              }
            },
            He = function () {
              return (
                "undefined" === typeof window || "undefined" === typeof document
              );
            },
            Ve = '\n <div aria-labelledby="'
              .concat(L.title, '" aria-describedby="')
              .concat(L["html-container"], '" class="')
              .concat(
                L.popup,
                '" tabindex="-1">\n   <button type="button" class="'
              )
              .concat(L.close, '"></button>\n   <ul class="')
              .concat(L["progress-steps"], '"></ul>\n   <div class="')
              .concat(L.icon, '"></div>\n   <img class="')
              .concat(L.image, '" />\n   <h2 class="')
              .concat(L.title, '" id="')
              .concat(L.title, '"></h2>\n   <div class="')
              .concat(L["html-container"], '" id="')
              .concat(L["html-container"], '"></div>\n   <input class="')
              .concat(L.input, '" id="')
              .concat(L.input, '" />\n   <input type="file" class="')
              .concat(L.file, '" />\n   <div class="')
              .concat(
                L.range,
                '">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="'
              )
              .concat(L.select, '" id="')
              .concat(L.select, '"></select>\n   <div class="')
              .concat(L.radio, '"></div>\n   <label class="')
              .concat(L.checkbox, '">\n     <input type="checkbox" id="')
              .concat(L.checkbox, '" />\n     <span class="')
              .concat(L.label, '"></span>\n   </label>\n   <textarea class="')
              .concat(L.textarea, '" id="')
              .concat(L.textarea, '"></textarea>\n   <div class="')
              .concat(L["validation-message"], '" id="')
              .concat(L["validation-message"], '"></div>\n   <div class="')
              .concat(L.actions, '">\n     <div class="')
              .concat(L.loader, '"></div>\n     <button type="button" class="')
              .concat(
                L.confirm,
                '"></button>\n     <button type="button" class="'
              )
              .concat(L.deny, '"></button>\n     <button type="button" class="')
              .concat(L.cancel, '"></button>\n   </div>\n   <div class="')
              .concat(L.footer, '"></div>\n   <div class="')
              .concat(
                L["timer-progress-bar-container"],
                '">\n     <div class="'
              )
              .concat(L["timer-progress-bar"], '"></div>\n   </div>\n </div>\n')
              .replace(/(^|\n)\s*/g, ""),
            Ye = function () {
              var e = K();
              return (
                !!e &&
                (e.remove(),
                Fe(
                  [document.documentElement, document.body],
                  [L["no-backdrop"], L["toast-shown"], L["has-column"]]
                ),
                !0)
              );
            },
            qe = function () {
              T.currentInstance.resetValidationMessage();
            },
            $e = function () {
              var e = Z(),
                t = Oe(e, L.input),
                n = Oe(e, L.file),
                r = e.querySelector(".".concat(L.range, " input")),
                a = e.querySelector(".".concat(L.range, " output")),
                o = Oe(e, L.select),
                i = e.querySelector(".".concat(L.checkbox, " input")),
                l = Oe(e, L.textarea);
              (t.oninput = qe),
                (n.onchange = qe),
                (o.onchange = qe),
                (i.onchange = qe),
                (l.oninput = qe),
                (r.oninput = function () {
                  qe(), (a.value = r.value);
                }),
                (r.onchange = function () {
                  qe(), (a.value = r.value);
                });
            },
            Ge = function (e) {
              return "string" === typeof e ? document.querySelector(e) : e;
            },
            Qe = function (e) {
              var t = Z();
              t.setAttribute("role", e.toast ? "alert" : "dialog"),
                t.setAttribute("aria-live", e.toast ? "polite" : "assertive"),
                e.toast || t.setAttribute("aria-modal", "true");
            },
            Ke = function (e) {
              "rtl" === window.getComputedStyle(e).direction && Re(K(), L.rtl);
            },
            Xe = function (e) {
              var t = Ye();
              if (He()) W("SweetAlert2 requires document to initialize");
              else {
                var n = document.createElement("div");
                (n.className = L.container),
                  t && Re(n, L["no-transition"]),
                  xe(n, Ve);
                var r = Ge(e.target);
                r.appendChild(n), Qe(e), Ke(r), $e();
              }
            },
            Je = function (e, t) {
              e instanceof HTMLElement
                ? t.appendChild(e)
                : "object" === O(e)
                ? Ze(e, t)
                : e && xe(t, e);
            },
            Ze = function (e, t) {
              e.jquery ? et(t, e) : xe(t, e.toString());
            },
            et = function (e, t) {
              if (((e.textContent = ""), 0 in t))
                for (var n = 0; n in t; n++) e.appendChild(t[n].cloneNode(!0));
              else e.appendChild(t.cloneNode(!0));
            },
            tt = (function () {
              if (He()) return !1;
              var e = document.createElement("div");
              return "undefined" !== typeof e.style.webkitAnimation
                ? "webkitAnimationEnd"
                : "undefined" !== typeof e.style.animation && "animationend";
            })(),
            nt = function (e, t) {
              var n = fe(),
                r = de();
              n &&
                r &&
                (t.showConfirmButton || t.showDenyButton || t.showCancelButton
                  ? Pe(n)
                  : Te(n),
                Ce(n, t, "actions"),
                rt(n, r, t),
                xe(r, t.loaderHtml || ""),
                Ce(r, t, "loader"));
            };
          function rt(e, t, n) {
            var r = le(),
              a = ce(),
              o = se();
            r &&
              a &&
              o &&
              (ot(r, "confirm", n),
              ot(a, "deny", n),
              ot(o, "cancel", n),
              at(r, a, o, n),
              n.reverseButtons &&
                (n.toast
                  ? (e.insertBefore(o, r), e.insertBefore(a, r))
                  : (e.insertBefore(o, t),
                    e.insertBefore(a, t),
                    e.insertBefore(r, t))));
          }
          function at(e, t, n, r) {
            r.buttonsStyling
              ? (Re([e, t, n], L.styled),
                r.confirmButtonColor &&
                  ((e.style.backgroundColor = r.confirmButtonColor),
                  Re(e, L["default-outline"])),
                r.denyButtonColor &&
                  ((t.style.backgroundColor = r.denyButtonColor),
                  Re(t, L["default-outline"])),
                r.cancelButtonColor &&
                  ((n.style.backgroundColor = r.cancelButtonColor),
                  Re(n, L["default-outline"])))
              : Fe([e, t, n], L.styled);
          }
          function ot(e, t, n) {
            var r = z(t);
            Ie(e, n["show".concat(r, "Button")], "inline-block"),
              xe(e, n["".concat(t, "ButtonText")] || ""),
              e.setAttribute(
                "aria-label",
                n["".concat(t, "ButtonAriaLabel")] || ""
              ),
              (e.className = L[t]),
              Ce(e, n, "".concat(t, "Button"));
          }
          var it = function (e, t) {
              var n = he();
              n &&
                (xe(n, t.closeButtonHtml || ""),
                Ce(n, t, "closeButton"),
                Ie(n, t.showCloseButton),
                n.setAttribute("aria-label", t.closeButtonAriaLabel || ""));
            },
            lt = function (e, t) {
              var n = K();
              n &&
                (st(n, t.backdrop),
                ct(n, t.position),
                ut(n, t.grow),
                Ce(n, t, "container"));
            };
          function st(e, t) {
            "string" === typeof t
              ? (e.style.background = t)
              : t ||
                Re([document.documentElement, document.body], L["no-backdrop"]);
          }
          function ct(e, t) {
            t &&
              (t in L
                ? Re(e, L[t])
                : (B(
                    'The "position" parameter is not valid, defaulting to "center"'
                  ),
                  Re(e, L.center)));
          }
          function ut(e, t) {
            t && Re(e, L["grow-".concat(t)]);
          }
          var dt = { innerParams: new WeakMap(), domCache: new WeakMap() },
            ft = [
              "input",
              "file",
              "range",
              "select",
              "radio",
              "checkbox",
              "textarea",
            ],
            pt = function (e, t) {
              var n = Z();
              if (n) {
                var r = dt.innerParams.get(e),
                  a = !r || t.input !== r.input;
                ft.forEach(function (e) {
                  var r = Oe(n, L[e]);
                  r &&
                    (gt(e, t.inputAttributes),
                    (r.className = L[e]),
                    a && Te(r));
                }),
                  t.input && (a && mt(t), bt(t));
              }
            },
            mt = function (e) {
              if (e.input)
                if (kt[e.input]) {
                  var t = yt(e.input),
                    n = kt[e.input](t, e);
                  Pe(t),
                    e.inputAutoFocus &&
                      setTimeout(function () {
                        Ne(n);
                      });
                } else
                  W(
                    "Unexpected type of input! Expected "
                      .concat(Object.keys(kt).join(" | "), ', got "')
                      .concat(e.input, '"')
                  );
            },
            ht = function (e) {
              for (var t = 0; t < e.attributes.length; t++) {
                var n = e.attributes[t].name;
                ["id", "type", "value", "style"].includes(n) ||
                  e.removeAttribute(n);
              }
            },
            gt = function (e, t) {
              var n = Se(Z(), e);
              if (n) for (var r in (ht(n), t)) n.setAttribute(r, t[r]);
            },
            bt = function (e) {
              var t = yt(e.input);
              "object" === O(e.customClass) && Re(t, e.customClass.input);
            },
            wt = function (e, t) {
              (e.placeholder && !t.inputPlaceholder) ||
                (e.placeholder = t.inputPlaceholder);
            },
            vt = function (e, t, n) {
              if (n.inputLabel) {
                var r = document.createElement("label"),
                  a = L["input-label"];
                r.setAttribute("for", e.id),
                  (r.className = a),
                  "object" === O(n.customClass) &&
                    Re(r, n.customClass.inputLabel),
                  (r.innerText = n.inputLabel),
                  t.insertAdjacentElement("beforebegin", r);
              }
            },
            yt = function (e) {
              return Oe(Z(), L[e] || L.input);
            },
            xt = function (e, t) {
              ["string", "number"].includes(O(t))
                ? (e.value = "".concat(t))
                : Q(t) ||
                  B(
                    'Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(
                      O(t),
                      '"'
                    )
                  );
            },
            kt = {};
          (kt.text =
            kt.email =
            kt.password =
            kt.number =
            kt.tel =
            kt.url =
            kt.search =
            kt.date =
            kt["datetime-local"] =
            kt.time =
            kt.week =
            kt.month =
              function (e, t) {
                return (
                  xt(e, t.inputValue),
                  vt(e, e, t),
                  wt(e, t),
                  (e.type = t.input),
                  e
                );
              }),
            (kt.file = function (e, t) {
              return vt(e, e, t), wt(e, t), e;
            }),
            (kt.range = function (e, t) {
              var n = e.querySelector("input"),
                r = e.querySelector("output");
              return (
                xt(n, t.inputValue),
                (n.type = t.input),
                xt(r, t.inputValue),
                vt(n, e, t),
                e
              );
            }),
            (kt.select = function (e, t) {
              if (((e.textContent = ""), t.inputPlaceholder)) {
                var n = document.createElement("option");
                xe(n, t.inputPlaceholder),
                  (n.value = ""),
                  (n.disabled = !0),
                  (n.selected = !0),
                  e.appendChild(n);
              }
              return vt(e, e, t), e;
            }),
            (kt.radio = function (e) {
              return (e.textContent = ""), e;
            }),
            (kt.checkbox = function (e, t) {
              var n = Se(Z(), "checkbox");
              (n.value = "1"), (n.checked = Boolean(t.inputValue));
              var r = e.querySelector("span");
              return xe(r, t.inputPlaceholder), n;
            }),
            (kt.textarea = function (e, t) {
              xt(e, t.inputValue), wt(e, t), vt(e, e, t);
              var n = function (e) {
                return (
                  parseInt(window.getComputedStyle(e).marginLeft) +
                  parseInt(window.getComputedStyle(e).marginRight)
                );
              };
              return (
                setTimeout(function () {
                  if ("MutationObserver" in window) {
                    var r = parseInt(window.getComputedStyle(Z()).width);
                    new MutationObserver(function () {
                      if (document.body.contains(e)) {
                        var a = e.offsetWidth + n(e);
                        a > r
                          ? (Z().style.width = "".concat(a, "px"))
                          : Ae(Z(), "width", t.width);
                      }
                    }).observe(e, {
                      attributes: !0,
                      attributeFilter: ["style"],
                    });
                  }
                }),
                e
              );
            });
          var jt = function (e, t) {
              var n = re();
              n &&
                (Me(n),
                Ce(n, t, "htmlContainer"),
                t.html
                  ? (Je(t.html, n), Pe(n, "block"))
                  : t.text
                  ? ((n.textContent = t.text), Pe(n, "block"))
                  : Te(n),
                pt(e, t));
            },
            Ct = function (e, t) {
              var n = pe();
              n &&
                (Me(n),
                Ie(n, t.footer, "block"),
                t.footer && Je(t.footer, n),
                Ce(n, t, "footer"));
            },
            St = function (e, t) {
              var n = dt.innerParams.get(e),
                r = ee();
              if (r) {
                if (n && t.icon === n.icon) return Ot(r, t), void Nt(r, t);
                if (t.icon || t.iconHtml) {
                  if (t.icon && -1 === Object.keys(U).indexOf(t.icon))
                    return (
                      W(
                        'Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(
                          t.icon,
                          '"'
                        )
                      ),
                      void Te(r)
                    );
                  Pe(r),
                    Ot(r, t),
                    Nt(r, t),
                    Re(r, t.showClass && t.showClass.icon);
                } else Te(r);
              }
            },
            Nt = function (e, t) {
              for (var n = 0, r = Object.entries(U); n < r.length; n++) {
                var a = S(r[n], 2),
                  o = a[0],
                  i = a[1];
                t.icon !== o && Fe(e, i);
              }
              Re(e, t.icon && U[t.icon]), At(e, t), Et(), Ce(e, t, "icon");
            },
            Et = function () {
              var e = Z();
              if (e)
                for (
                  var t = window
                      .getComputedStyle(e)
                      .getPropertyValue("background-color"),
                    n = e.querySelectorAll(
                      "[class^=swal2-success-circular-line], .swal2-success-fix"
                    ),
                    r = 0;
                  r < n.length;
                  r++
                )
                  n[r].style.backgroundColor = t;
            },
            Rt =
              '\n  <div class="swal2-success-circular-line-left"></div>\n  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n  <div class="swal2-success-circular-line-right"></div>\n',
            Ft =
              '\n  <span class="swal2-x-mark">\n    <span class="swal2-x-mark-line-left"></span>\n    <span class="swal2-x-mark-line-right"></span>\n  </span>\n',
            Ot = function (e, t) {
              if (t.icon || t.iconHtml) {
                var n = e.innerHTML,
                  r = "";
                t.iconHtml
                  ? (r = Pt(t.iconHtml))
                  : "success" === t.icon
                  ? ((r = Rt), (n = n.replace(/ style=".*?"/g, "")))
                  : "error" === t.icon
                  ? (r = Ft)
                  : t.icon &&
                    (r = Pt(
                      { question: "?", warning: "!", info: "i" }[t.icon]
                    )),
                  n.trim() !== r.trim() && xe(e, r);
              }
            },
            At = function (e, t) {
              if (t.iconColor) {
                (e.style.color = t.iconColor),
                  (e.style.borderColor = t.iconColor);
                for (
                  var n = 0,
                    r = [
                      ".swal2-success-line-tip",
                      ".swal2-success-line-long",
                      ".swal2-x-mark-line-left",
                      ".swal2-x-mark-line-right",
                    ];
                  n < r.length;
                  n++
                ) {
                  var a = r[n];
                  _e(e, a, "background-color", t.iconColor);
                }
                _e(e, ".swal2-success-ring", "border-color", t.iconColor);
              }
            },
            Pt = function (e) {
              return '<div class="'
                .concat(L["icon-content"], '">')
                .concat(e, "</div>");
            },
            Tt = function (e, t) {
              var n = ae();
              n &&
                (t.imageUrl
                  ? (Pe(n, ""),
                    n.setAttribute("src", t.imageUrl),
                    n.setAttribute("alt", t.imageAlt || ""),
                    Ae(n, "width", t.imageWidth),
                    Ae(n, "height", t.imageHeight),
                    (n.className = L.image),
                    Ce(n, t, "image"))
                  : Te(n));
            },
            Mt = function (e, t) {
              var n = K(),
                r = Z();
              if (n && r) {
                if (t.toast) {
                  Ae(n, "width", t.width), (r.style.width = "100%");
                  var a = de();
                  a && r.insertBefore(a, ee());
                } else Ae(r, "width", t.width);
                Ae(r, "padding", t.padding),
                  t.color && (r.style.color = t.color),
                  t.background && (r.style.background = t.background),
                  Te(ie()),
                  _t(r, t);
              }
            },
            _t = function (e, t) {
              var n = t.showClass || {};
              (e.className = ""
                .concat(L.popup, " ")
                .concat(Le(e) ? n.popup : "")),
                t.toast
                  ? (Re(
                      [document.documentElement, document.body],
                      L["toast-shown"]
                    ),
                    Re(e, L.toast))
                  : Re(e, L.modal),
                Ce(e, t, "popup"),
                "string" === typeof t.customClass && Re(e, t.customClass),
                t.icon && Re(e, L["icon-".concat(t.icon)]);
            },
            It = function (e, t) {
              var n = oe();
              if (n) {
                var r = t.progressSteps,
                  a = t.currentProgressStep;
                r && 0 !== r.length && void 0 !== a
                  ? (Pe(n),
                    (n.textContent = ""),
                    a >= r.length &&
                      B(
                        "Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"
                      ),
                    r.forEach(function (e, o) {
                      var i = Lt(e);
                      if (
                        (n.appendChild(i),
                        o === a && Re(i, L["active-progress-step"]),
                        o !== r.length - 1)
                      ) {
                        var l = Ut(t);
                        n.appendChild(l);
                      }
                    }))
                  : Te(n);
              }
            },
            Lt = function (e) {
              var t = document.createElement("li");
              return Re(t, L["progress-step"]), xe(t, e), t;
            },
            Ut = function (e) {
              var t = document.createElement("li");
              return (
                Re(t, L["progress-step-line"]),
                e.progressStepsDistance &&
                  Ae(t, "width", e.progressStepsDistance),
                t
              );
            },
            Dt = function (e, t) {
              var n = ne();
              n &&
                (Me(n),
                Ie(n, t.title || t.titleText, "block"),
                t.title && Je(t.title, n),
                t.titleText && (n.innerText = t.titleText),
                Ce(n, t, "title"));
            },
            zt = function (e, t) {
              Mt(e, t),
                lt(e, t),
                It(e, t),
                St(e, t),
                Tt(e, t),
                Dt(e, t),
                it(e, t),
                jt(e, t),
                nt(e, t),
                Ct(e, t);
              var n = Z();
              "function" === typeof t.didRender && n && t.didRender(n);
            },
            Bt = function () {
              return Le(Z());
            },
            Wt = function () {
              var e;
              return null === (e = le()) || void 0 === e ? void 0 : e.click();
            },
            Ht = function () {
              var e;
              return null === (e = ce()) || void 0 === e ? void 0 : e.click();
            },
            Vt = function () {
              var e;
              return null === (e = se()) || void 0 === e ? void 0 : e.click();
            },
            Yt = Object.freeze({
              cancel: "cancel",
              backdrop: "backdrop",
              close: "close",
              esc: "esc",
              timer: "timer",
            }),
            qt = function (e) {
              e.keydownTarget &&
                e.keydownHandlerAdded &&
                (e.keydownTarget.removeEventListener(
                  "keydown",
                  e.keydownHandler,
                  { capture: e.keydownListenerCapture }
                ),
                (e.keydownHandlerAdded = !1));
            },
            $t = function (e, t, n) {
              qt(e),
                t.toast ||
                  ((e.keydownHandler = function (e) {
                    return Xt(t, e, n);
                  }),
                  (e.keydownTarget = t.keydownListenerCapture ? window : Z()),
                  (e.keydownListenerCapture = t.keydownListenerCapture),
                  e.keydownTarget.addEventListener(
                    "keydown",
                    e.keydownHandler,
                    { capture: e.keydownListenerCapture }
                  ),
                  (e.keydownHandlerAdded = !0));
            },
            Gt = function (e, t) {
              var n,
                r = be();
              if (r.length)
                return (
                  (e += t) === r.length
                    ? (e = 0)
                    : -1 === e && (e = r.length - 1),
                  void r[e].focus()
                );
              null === (n = Z()) || void 0 === n || n.focus();
            },
            Qt = ["ArrowRight", "ArrowDown"],
            Kt = ["ArrowLeft", "ArrowUp"],
            Xt = function (e, t, n) {
              e &&
                (t.isComposing ||
                  229 === t.keyCode ||
                  (e.stopKeydownPropagation && t.stopPropagation(),
                  "Enter" === t.key
                    ? Jt(t, e)
                    : "Tab" === t.key
                    ? Zt(t)
                    : [].concat(Qt, Kt).includes(t.key)
                    ? en(t.key)
                    : "Escape" === t.key && tn(t, e, n)));
            },
            Jt = function (e, t) {
              if (q(t.allowEnterKey)) {
                var n = Se(Z(), t.input);
                if (
                  e.target &&
                  n &&
                  e.target instanceof HTMLElement &&
                  e.target.outerHTML === n.outerHTML
                ) {
                  if (["textarea", "file"].includes(t.input)) return;
                  Wt(), e.preventDefault();
                }
              }
            },
            Zt = function (e) {
              for (var t = e.target, n = be(), r = -1, a = 0; a < n.length; a++)
                if (t === n[a]) {
                  r = a;
                  break;
                }
              e.shiftKey ? Gt(r, -1) : Gt(r, 1),
                e.stopPropagation(),
                e.preventDefault();
            },
            en = function (e) {
              var t = fe(),
                n = le(),
                r = ce(),
                a = se();
              if (t && n && r && a) {
                var o = [n, r, a];
                if (
                  !(document.activeElement instanceof HTMLElement) ||
                  o.includes(document.activeElement)
                ) {
                  var i = Qt.includes(e)
                      ? "nextElementSibling"
                      : "previousElementSibling",
                    l = document.activeElement;
                  if (l) {
                    for (var s = 0; s < t.children.length; s++) {
                      if (!(l = l[i])) return;
                      if (l instanceof HTMLButtonElement && Le(l)) break;
                    }
                    l instanceof HTMLButtonElement && l.focus();
                  }
                }
              }
            },
            tn = function (e, t, n) {
              q(t.allowEscapeKey) && (e.preventDefault(), n(Yt.esc));
            },
            nn = {
              swalPromiseResolve: new WeakMap(),
              swalPromiseReject: new WeakMap(),
            },
            rn = function () {
              var e = K();
              Array.from(document.body.children).forEach(function (t) {
                t.contains(e) ||
                  (t.hasAttribute("aria-hidden") &&
                    t.setAttribute(
                      "data-previous-aria-hidden",
                      t.getAttribute("aria-hidden") || ""
                    ),
                  t.setAttribute("aria-hidden", "true"));
              });
            },
            an = function () {
              Array.from(document.body.children).forEach(function (e) {
                e.hasAttribute("data-previous-aria-hidden")
                  ? (e.setAttribute(
                      "aria-hidden",
                      e.getAttribute("data-previous-aria-hidden") || ""
                    ),
                    e.removeAttribute("data-previous-aria-hidden"))
                  : e.removeAttribute("aria-hidden");
              });
            },
            on = "undefined" !== typeof window && !!window.GestureEvent,
            ln = function () {
              if (on && !ke(document.body, L.iosfix)) {
                var e = document.body.scrollTop;
                (document.body.style.top = "".concat(-1 * e, "px")),
                  Re(document.body, L.iosfix),
                  sn();
              }
            },
            sn = function () {
              var e,
                t = K();
              t &&
                ((t.ontouchstart = function (t) {
                  e = cn(t);
                }),
                (t.ontouchmove = function (t) {
                  e && (t.preventDefault(), t.stopPropagation());
                }));
            },
            cn = function (e) {
              var t = e.target,
                n = K(),
                r = re();
              return (
                !(!n || !r) &&
                !un(e) &&
                !dn(e) &&
                (t === n ||
                  (!De(n) &&
                    t instanceof HTMLElement &&
                    "INPUT" !== t.tagName &&
                    "TEXTAREA" !== t.tagName &&
                    (!De(r) || !r.contains(t))))
              );
            },
            un = function (e) {
              return (
                e.touches &&
                e.touches.length &&
                "stylus" === e.touches[0].touchType
              );
            },
            dn = function (e) {
              return e.touches && e.touches.length > 1;
            },
            fn = function () {
              if (ke(document.body, L.iosfix)) {
                var e = parseInt(document.body.style.top, 10);
                Fe(document.body, L.iosfix),
                  (document.body.style.top = ""),
                  (document.body.scrollTop = -1 * e);
              }
            },
            pn = function () {
              var e = document.createElement("div");
              (e.className = L["scrollbar-measure"]),
                document.body.appendChild(e);
              var t = e.getBoundingClientRect().width - e.clientWidth;
              return document.body.removeChild(e), t;
            },
            mn = null,
            hn = function (e) {
              null === mn &&
                (document.body.scrollHeight > window.innerHeight ||
                  "scroll" === e) &&
                ((mn = parseInt(
                  window
                    .getComputedStyle(document.body)
                    .getPropertyValue("padding-right")
                )),
                (document.body.style.paddingRight = "".concat(
                  mn + pn(),
                  "px"
                )));
            },
            gn = function () {
              null !== mn &&
                ((document.body.style.paddingRight = "".concat(mn, "px")),
                (mn = null));
            };
          function bn(e, t, n, r) {
            ve()
              ? Nn(e, r)
              : (_(n).then(function () {
                  return Nn(e, r);
                }),
                qt(T)),
              on
                ? (t.setAttribute("style", "display:none !important"),
                  t.removeAttribute("class"),
                  (t.innerHTML = ""))
                : t.remove(),
              we() && (gn(), fn(), an()),
              wn();
          }
          function wn() {
            Fe(
              [document.documentElement, document.body],
              [L.shown, L["height-auto"], L["no-backdrop"], L["toast-shown"]]
            );
          }
          function vn(e) {
            e = jn(e);
            var t = nn.swalPromiseResolve.get(this),
              n = yn(this);
            this.isAwaitingPromise
              ? e.isDismissed || (kn(this), t(e))
              : n && t(e);
          }
          var yn = function (e) {
            var t = Z();
            if (!t) return !1;
            var n = dt.innerParams.get(e);
            if (!n || ke(t, n.hideClass.popup)) return !1;
            Fe(t, n.showClass.popup), Re(t, n.hideClass.popup);
            var r = K();
            return (
              Fe(r, n.showClass.backdrop),
              Re(r, n.hideClass.backdrop),
              Cn(e, t, n),
              !0
            );
          };
          function xn(e) {
            var t = nn.swalPromiseReject.get(this);
            kn(this), t && t(e);
          }
          var kn = function (e) {
              e.isAwaitingPromise &&
                (delete e.isAwaitingPromise,
                dt.innerParams.get(e) || e._destroy());
            },
            jn = function (e) {
              return "undefined" === typeof e
                ? { isConfirmed: !1, isDenied: !1, isDismissed: !0 }
                : Object.assign(
                    { isConfirmed: !1, isDenied: !1, isDismissed: !1 },
                    e
                  );
            },
            Cn = function (e, t, n) {
              var r = K(),
                a = tt && ze(t);
              "function" === typeof n.willClose && n.willClose(t),
                a
                  ? Sn(e, t, r, n.returnFocus, n.didClose)
                  : bn(e, r, n.returnFocus, n.didClose);
            },
            Sn = function (e, t, n, r, a) {
              tt &&
                ((T.swalCloseEventFinishedCallback = bn.bind(null, e, n, r, a)),
                t.addEventListener(tt, function (e) {
                  e.target === t &&
                    (T.swalCloseEventFinishedCallback(),
                    delete T.swalCloseEventFinishedCallback);
                }));
            },
            Nn = function (e, t) {
              setTimeout(function () {
                "function" === typeof t && t.bind(e.params)(),
                  e._destroy && e._destroy();
              });
            },
            En = function (e) {
              var t = Z();
              if ((t || new Fa(), (t = Z()))) {
                var n = de();
                ve() ? Te(ee()) : Rn(t, e),
                  Pe(n),
                  t.setAttribute("data-loading", "true"),
                  t.setAttribute("aria-busy", "true"),
                  t.focus();
              }
            },
            Rn = function (e, t) {
              var n = fe(),
                r = de();
              n &&
                r &&
                (!t && Le(le()) && (t = le()),
                Pe(n),
                t &&
                  (Te(t),
                  r.setAttribute("data-button-to-replace", t.className),
                  n.insertBefore(r, t)),
                Re([e, n], L.loading));
            },
            Fn = function (e, t) {
              "select" === t.input || "radio" === t.input
                ? Mn(e, t)
                : ["text", "email", "number", "tel", "textarea"].some(function (
                    e
                  ) {
                    return e === t.input;
                  }) &&
                  ($(t.inputValue) || Q(t.inputValue)) &&
                  (En(le()), _n(e, t));
            },
            On = function (e, t) {
              var n = e.getInput();
              if (!n) return null;
              switch (t.input) {
                case "checkbox":
                  return An(n);
                case "radio":
                  return Pn(n);
                case "file":
                  return Tn(n);
                default:
                  return t.inputAutoTrim ? n.value.trim() : n.value;
              }
            },
            An = function (e) {
              return e.checked ? 1 : 0;
            },
            Pn = function (e) {
              return e.checked ? e.value : null;
            },
            Tn = function (e) {
              return e.files && e.files.length
                ? null !== e.getAttribute("multiple")
                  ? e.files
                  : e.files[0]
                : null;
            },
            Mn = function (e, t) {
              var n = Z();
              if (n) {
                var r = function (e) {
                  "select" === t.input
                    ? In(n, Un(e), t)
                    : "radio" === t.input && Ln(n, Un(e), t);
                };
                $(t.inputOptions) || Q(t.inputOptions)
                  ? (En(le()),
                    G(t.inputOptions).then(function (t) {
                      e.hideLoading(), r(t);
                    }))
                  : "object" === O(t.inputOptions)
                  ? r(t.inputOptions)
                  : W(
                      "Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(
                        O(t.inputOptions)
                      )
                    );
              }
            },
            _n = function (e, t) {
              var n = e.getInput();
              n &&
                (Te(n),
                G(t.inputValue)
                  .then(function (r) {
                    (n.value =
                      "number" === t.input
                        ? "".concat(parseFloat(r) || 0)
                        : "".concat(r)),
                      Pe(n),
                      n.focus(),
                      e.hideLoading();
                  })
                  .catch(function (t) {
                    W("Error in inputValue promise: ".concat(t)),
                      (n.value = ""),
                      Pe(n),
                      n.focus(),
                      e.hideLoading();
                  }));
            };
          function In(e, t, n) {
            var r = Oe(e, L.select);
            if (r) {
              var a = function (e, t, r) {
                var a = document.createElement("option");
                (a.value = r),
                  xe(a, t),
                  (a.selected = Dn(r, n.inputValue)),
                  e.appendChild(a);
              };
              t.forEach(function (e) {
                var t = e[0],
                  n = e[1];
                if (Array.isArray(n)) {
                  var o = document.createElement("optgroup");
                  (o.label = t),
                    (o.disabled = !1),
                    r.appendChild(o),
                    n.forEach(function (e) {
                      return a(o, e[1], e[0]);
                    });
                } else a(r, n, t);
              }),
                r.focus();
            }
          }
          function Ln(e, t, n) {
            var r = Oe(e, L.radio);
            if (r) {
              t.forEach(function (e) {
                var t = e[0],
                  a = e[1],
                  o = document.createElement("input"),
                  i = document.createElement("label");
                (o.type = "radio"),
                  (o.name = L.radio),
                  (o.value = t),
                  Dn(t, n.inputValue) && (o.checked = !0);
                var l = document.createElement("span");
                xe(l, a),
                  (l.className = L.label),
                  i.appendChild(o),
                  i.appendChild(l),
                  r.appendChild(i);
              });
              var a = r.querySelectorAll("input");
              a.length && a[0].focus();
            }
          }
          var Un = function e(t) {
              var n = [];
              return (
                t instanceof Map
                  ? t.forEach(function (t, r) {
                      var a = t;
                      "object" === O(a) && (a = e(a)), n.push([r, a]);
                    })
                  : Object.keys(t).forEach(function (r) {
                      var a = t[r];
                      "object" === O(a) && (a = e(a)), n.push([r, a]);
                    }),
                n
              );
            },
            Dn = function (e, t) {
              return !!t && t.toString() === e.toString();
            },
            zn = void 0,
            Bn = function (e) {
              var t = dt.innerParams.get(e);
              e.disableButtons(), t.input ? Vn(e, "confirm") : Qn(e, !0);
            },
            Wn = function (e) {
              var t = dt.innerParams.get(e);
              e.disableButtons(),
                t.returnInputValueOnDeny ? Vn(e, "deny") : qn(e, !1);
            },
            Hn = function (e, t) {
              e.disableButtons(), t(Yt.cancel);
            },
            Vn = function (e, t) {
              var n = dt.innerParams.get(e);
              if (n.input) {
                var r = e.getInput(),
                  a = On(e, n);
                n.inputValidator
                  ? Yn(e, a, t)
                  : r && !r.checkValidity()
                  ? (e.enableButtons(),
                    e.showValidationMessage(
                      n.validationMessage || r.validationMessage
                    ))
                  : "deny" === t
                  ? qn(e, a)
                  : Qn(e, a);
              } else
                W(
                  'The "input" parameter is needed to be set when using returnInputValueOn'.concat(
                    z(t)
                  )
                );
            },
            Yn = function (e, t, n) {
              var r = dt.innerParams.get(e);
              e.disableInput(),
                Promise.resolve()
                  .then(function () {
                    return G(r.inputValidator(t, r.validationMessage));
                  })
                  .then(function (r) {
                    e.enableButtons(),
                      e.enableInput(),
                      r
                        ? e.showValidationMessage(r)
                        : "deny" === n
                        ? qn(e, t)
                        : Qn(e, t);
                  });
            },
            qn = function (e, t) {
              var n = dt.innerParams.get(e || zn);
              n.showLoaderOnDeny && En(ce()),
                n.preDeny
                  ? ((e.isAwaitingPromise = !0),
                    Promise.resolve()
                      .then(function () {
                        return G(n.preDeny(t, n.validationMessage));
                      })
                      .then(function (n) {
                        !1 === n
                          ? (e.hideLoading(), kn(e))
                          : e.close({
                              isDenied: !0,
                              value: "undefined" === typeof n ? t : n,
                            });
                      })
                      .catch(function (t) {
                        return Gn(e || zn, t);
                      }))
                  : e.close({ isDenied: !0, value: t });
            },
            $n = function (e, t) {
              e.close({ isConfirmed: !0, value: t });
            },
            Gn = function (e, t) {
              e.rejectPromise(t);
            },
            Qn = function (e, t) {
              var n = dt.innerParams.get(e || zn);
              n.showLoaderOnConfirm && En(),
                n.preConfirm
                  ? (e.resetValidationMessage(),
                    (e.isAwaitingPromise = !0),
                    Promise.resolve()
                      .then(function () {
                        return G(n.preConfirm(t, n.validationMessage));
                      })
                      .then(function (n) {
                        Le(ie()) || !1 === n
                          ? (e.hideLoading(), kn(e))
                          : $n(e, "undefined" === typeof n ? t : n);
                      })
                      .catch(function (t) {
                        return Gn(e || zn, t);
                      }))
                  : $n(e, t);
            };
          function Kn() {
            var e = dt.innerParams.get(this);
            if (e) {
              var t = dt.domCache.get(this);
              Te(t.loader),
                ve() ? e.icon && Pe(ee()) : Xn(t),
                Fe([t.popup, t.actions], L.loading),
                t.popup.removeAttribute("aria-busy"),
                t.popup.removeAttribute("data-loading"),
                (t.confirmButton.disabled = !1),
                (t.denyButton.disabled = !1),
                (t.cancelButton.disabled = !1);
            }
          }
          var Xn = function (e) {
            var t = e.popup.getElementsByClassName(
              e.loader.getAttribute("data-button-to-replace")
            );
            t.length ? Pe(t[0], "inline-block") : Ue() && Te(e.actions);
          };
          function Jn() {
            var e = dt.innerParams.get(this),
              t = dt.domCache.get(this);
            return t ? Se(t.popup, e.input) : null;
          }
          function Zn(e, t, n) {
            var r = dt.domCache.get(e);
            t.forEach(function (e) {
              r[e].disabled = n;
            });
          }
          function er(e, t) {
            var n = Z();
            if (n && e)
              if ("radio" === e.type)
                for (
                  var r = n.querySelectorAll('[name="'.concat(L.radio, '"]')),
                    a = 0;
                  a < r.length;
                  a++
                )
                  r[a].disabled = t;
              else e.disabled = t;
          }
          function tr() {
            Zn(this, ["confirmButton", "denyButton", "cancelButton"], !1);
          }
          function nr() {
            Zn(this, ["confirmButton", "denyButton", "cancelButton"], !0);
          }
          function rr() {
            er(this.getInput(), !1);
          }
          function ar() {
            er(this.getInput(), !0);
          }
          function or(e) {
            var t = dt.domCache.get(this),
              n = dt.innerParams.get(this);
            xe(t.validationMessage, e),
              (t.validationMessage.className = L["validation-message"]),
              n.customClass &&
                n.customClass.validationMessage &&
                Re(t.validationMessage, n.customClass.validationMessage),
              Pe(t.validationMessage);
            var r = this.getInput();
            r &&
              (r.setAttribute("aria-invalid", "true"),
              r.setAttribute("aria-describedby", L["validation-message"]),
              Ne(r),
              Re(r, L.inputerror));
          }
          function ir() {
            var e = dt.domCache.get(this);
            e.validationMessage && Te(e.validationMessage);
            var t = this.getInput();
            t &&
              (t.removeAttribute("aria-invalid"),
              t.removeAttribute("aria-describedby"),
              Fe(t, L.inputerror));
          }
          var lr = {
              title: "",
              titleText: "",
              text: "",
              html: "",
              footer: "",
              icon: void 0,
              iconColor: void 0,
              iconHtml: void 0,
              template: void 0,
              toast: !1,
              animation: !0,
              showClass: {
                popup: "swal2-show",
                backdrop: "swal2-backdrop-show",
                icon: "swal2-icon-show",
              },
              hideClass: {
                popup: "swal2-hide",
                backdrop: "swal2-backdrop-hide",
                icon: "swal2-icon-hide",
              },
              customClass: {},
              target: "body",
              color: void 0,
              backdrop: !0,
              heightAuto: !0,
              allowOutsideClick: !0,
              allowEscapeKey: !0,
              allowEnterKey: !0,
              stopKeydownPropagation: !0,
              keydownListenerCapture: !1,
              showConfirmButton: !0,
              showDenyButton: !1,
              showCancelButton: !1,
              preConfirm: void 0,
              preDeny: void 0,
              confirmButtonText: "OK",
              confirmButtonAriaLabel: "",
              confirmButtonColor: void 0,
              denyButtonText: "No",
              denyButtonAriaLabel: "",
              denyButtonColor: void 0,
              cancelButtonText: "Cancel",
              cancelButtonAriaLabel: "",
              cancelButtonColor: void 0,
              buttonsStyling: !0,
              reverseButtons: !1,
              focusConfirm: !0,
              focusDeny: !1,
              focusCancel: !1,
              returnFocus: !0,
              showCloseButton: !1,
              closeButtonHtml: "&times;",
              closeButtonAriaLabel: "Close this dialog",
              loaderHtml: "",
              showLoaderOnConfirm: !1,
              showLoaderOnDeny: !1,
              imageUrl: void 0,
              imageWidth: void 0,
              imageHeight: void 0,
              imageAlt: "",
              timer: void 0,
              timerProgressBar: !1,
              width: void 0,
              padding: void 0,
              background: void 0,
              input: void 0,
              inputPlaceholder: "",
              inputLabel: "",
              inputValue: "",
              inputOptions: {},
              inputAutoFocus: !0,
              inputAutoTrim: !0,
              inputAttributes: {},
              inputValidator: void 0,
              returnInputValueOnDeny: !1,
              validationMessage: void 0,
              grow: !1,
              position: "center",
              progressSteps: [],
              currentProgressStep: void 0,
              progressStepsDistance: void 0,
              willOpen: void 0,
              didOpen: void 0,
              didRender: void 0,
              willClose: void 0,
              didClose: void 0,
              didDestroy: void 0,
              scrollbarPadding: !0,
            },
            sr = [
              "allowEscapeKey",
              "allowOutsideClick",
              "background",
              "buttonsStyling",
              "cancelButtonAriaLabel",
              "cancelButtonColor",
              "cancelButtonText",
              "closeButtonAriaLabel",
              "closeButtonHtml",
              "color",
              "confirmButtonAriaLabel",
              "confirmButtonColor",
              "confirmButtonText",
              "currentProgressStep",
              "customClass",
              "denyButtonAriaLabel",
              "denyButtonColor",
              "denyButtonText",
              "didClose",
              "didDestroy",
              "footer",
              "hideClass",
              "html",
              "icon",
              "iconColor",
              "iconHtml",
              "imageAlt",
              "imageHeight",
              "imageUrl",
              "imageWidth",
              "preConfirm",
              "preDeny",
              "progressSteps",
              "returnFocus",
              "reverseButtons",
              "showCancelButton",
              "showCloseButton",
              "showConfirmButton",
              "showDenyButton",
              "text",
              "title",
              "titleText",
              "willClose",
            ],
            cr = { allowEnterKey: void 0 },
            ur = [
              "allowOutsideClick",
              "allowEnterKey",
              "backdrop",
              "focusConfirm",
              "focusDeny",
              "focusCancel",
              "returnFocus",
              "heightAuto",
              "keydownListenerCapture",
            ],
            dr = function (e) {
              return Object.prototype.hasOwnProperty.call(lr, e);
            },
            fr = function (e) {
              return -1 !== sr.indexOf(e);
            },
            pr = function (e) {
              return cr[e];
            },
            mr = function (e) {
              dr(e) || B('Unknown parameter "'.concat(e, '"'));
            },
            hr = function (e) {
              ur.includes(e) &&
                B('The parameter "'.concat(e, '" is incompatible with toasts'));
            },
            gr = function (e) {
              var t = pr(e);
              t && Y(e, t);
            },
            br = function (e) {
              for (var t in (!1 === e.backdrop &&
                e.allowOutsideClick &&
                B(
                  '"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'
                ),
              e))
                mr(t), e.toast && hr(t), gr(t);
            };
          function wr(e) {
            var t = Z(),
              n = dt.innerParams.get(this);
            if (t && !ke(t, n.hideClass.popup)) {
              var r = vr(e),
                a = Object.assign({}, n, r);
              zt(this, a),
                dt.innerParams.set(this, a),
                Object.defineProperties(this, {
                  params: {
                    value: Object.assign({}, this.params, e),
                    writable: !1,
                    enumerable: !0,
                  },
                });
            } else
              B(
                "You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup."
              );
          }
          var vr = function (e) {
            var t = {};
            return (
              Object.keys(e).forEach(function (n) {
                fr(n)
                  ? (t[n] = e[n])
                  : B("Invalid parameter to update: ".concat(n));
              }),
              t
            );
          };
          function yr() {
            var e = dt.domCache.get(this),
              t = dt.innerParams.get(this);
            t
              ? (e.popup &&
                  T.swalCloseEventFinishedCallback &&
                  (T.swalCloseEventFinishedCallback(),
                  delete T.swalCloseEventFinishedCallback),
                "function" === typeof t.didDestroy && t.didDestroy(),
                xr(this))
              : kr(this);
          }
          var xr = function (e) {
              kr(e),
                delete e.params,
                delete T.keydownHandler,
                delete T.keydownTarget,
                delete T.currentInstance;
            },
            kr = function (e) {
              e.isAwaitingPromise
                ? (jr(dt, e), (e.isAwaitingPromise = !0))
                : (jr(nn, e),
                  jr(dt, e),
                  delete e.isAwaitingPromise,
                  delete e.disableButtons,
                  delete e.enableButtons,
                  delete e.getInput,
                  delete e.disableInput,
                  delete e.enableInput,
                  delete e.hideLoading,
                  delete e.disableLoading,
                  delete e.showValidationMessage,
                  delete e.resetValidationMessage,
                  delete e.close,
                  delete e.closePopup,
                  delete e.closeModal,
                  delete e.closeToast,
                  delete e.rejectPromise,
                  delete e.update,
                  delete e._destroy);
            },
            jr = function (e, t) {
              for (var n in e) e[n].delete(t);
            },
            Cr = Object.freeze({
              __proto__: null,
              _destroy: yr,
              close: vn,
              closeModal: vn,
              closePopup: vn,
              closeToast: vn,
              disableButtons: nr,
              disableInput: ar,
              disableLoading: Kn,
              enableButtons: tr,
              enableInput: rr,
              getInput: Jn,
              handleAwaitingPromise: kn,
              hideLoading: Kn,
              rejectPromise: xn,
              resetValidationMessage: ir,
              showValidationMessage: or,
              update: wr,
            }),
            Sr = function (e, t, n) {
              e.toast ? Nr(e, t, n) : (Fr(t), Or(t), Ar(e, t, n));
            },
            Nr = function (e, t, n) {
              t.popup.onclick = function () {
                (e && (Er(e) || e.timer || e.input)) || n(Yt.close);
              };
            },
            Er = function (e) {
              return !!(
                e.showConfirmButton ||
                e.showDenyButton ||
                e.showCancelButton ||
                e.showCloseButton
              );
            },
            Rr = !1,
            Fr = function (e) {
              e.popup.onmousedown = function () {
                e.container.onmouseup = function (t) {
                  (e.container.onmouseup = function () {}),
                    t.target === e.container && (Rr = !0);
                };
              };
            },
            Or = function (e) {
              e.container.onmousedown = function (t) {
                t.target === e.container && t.preventDefault(),
                  (e.popup.onmouseup = function (t) {
                    (e.popup.onmouseup = function () {}),
                      (t.target === e.popup ||
                        (t.target instanceof HTMLElement &&
                          e.popup.contains(t.target))) &&
                        (Rr = !0);
                  });
              };
            },
            Ar = function (e, t, n) {
              t.container.onclick = function (r) {
                Rr
                  ? (Rr = !1)
                  : r.target === t.container &&
                    q(e.allowOutsideClick) &&
                    n(Yt.backdrop);
              };
            },
            Pr = function (e) {
              return "object" === O(e) && e.jquery;
            },
            Tr = function (e) {
              return e instanceof Element || Pr(e);
            },
            Mr = function (e) {
              var t = {};
              return (
                "object" !== O(e[0]) || Tr(e[0])
                  ? ["title", "html", "icon"].forEach(function (n, r) {
                      var a = e[r];
                      "string" === typeof a || Tr(a)
                        ? (t[n] = a)
                        : void 0 !== a &&
                          W(
                            "Unexpected type of "
                              .concat(
                                n,
                                '! Expected "string" or "Element", got '
                              )
                              .concat(O(a))
                          );
                    })
                  : Object.assign(t, e[0]),
                t
              );
            };
          function _r() {
            for (
              var e = this, t = arguments.length, n = new Array(t), r = 0;
              r < t;
              r++
            )
              n[r] = arguments[r];
            return d(e, n);
          }
          function Ir(e) {
            var t = (function (t) {
              function n() {
                return l(this, n), o(this, n, arguments);
              }
              return (
                b(n, t),
                p(n, [
                  {
                    key: "_main",
                    value: function (t, r) {
                      return h(g(n.prototype), "_main", this).call(
                        this,
                        t,
                        Object.assign({}, e, r)
                      );
                    },
                  },
                ])
              );
            })(this);
            return t;
          }
          var Lr = function () {
              return T.timeout && T.timeout.getTimerLeft();
            },
            Ur = function () {
              if (T.timeout) return We(), T.timeout.stop();
            },
            Dr = function () {
              if (T.timeout) {
                var e = T.timeout.start();
                return Be(e), e;
              }
            },
            zr = function () {
              var e = T.timeout;
              return e && (e.running ? Ur() : Dr());
            },
            Br = function (e) {
              if (T.timeout) {
                var t = T.timeout.increase(e);
                return Be(t, !0), t;
              }
            },
            Wr = function () {
              return !(!T.timeout || !T.timeout.isRunning());
            },
            Hr = !1,
            Vr = {};
          function Yr() {
            (Vr[
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "data-swal-template"
            ] = this),
              Hr || (document.body.addEventListener("click", $r), (Hr = !0));
          }
          var qr,
            $r = function (e) {
              for (var t = e.target; t && t !== document; t = t.parentNode)
                for (var n in Vr) {
                  var r = t.getAttribute(n);
                  if (r) return void Vr[n].fire({ template: r });
                }
            },
            Gr = Object.freeze({
              __proto__: null,
              argsToParams: Mr,
              bindClickHandler: Yr,
              clickCancel: Vt,
              clickConfirm: Wt,
              clickDeny: Ht,
              enableLoading: En,
              fire: _r,
              getActions: fe,
              getCancelButton: se,
              getCloseButton: he,
              getConfirmButton: le,
              getContainer: K,
              getDenyButton: ce,
              getFocusableElements: be,
              getFooter: pe,
              getHtmlContainer: re,
              getIcon: ee,
              getIconContent: te,
              getImage: ae,
              getInputLabel: ue,
              getLoader: de,
              getPopup: Z,
              getProgressSteps: oe,
              getTimerLeft: Lr,
              getTimerProgressBar: me,
              getTitle: ne,
              getValidationMessage: ie,
              increaseTimer: Br,
              isDeprecatedParameter: pr,
              isLoading: ye,
              isTimerRunning: Wr,
              isUpdatableParameter: fr,
              isValidParameter: dr,
              isVisible: Bt,
              mixin: Ir,
              resumeTimer: Dr,
              showLoading: En,
              stopTimer: Ur,
              toggleTimer: zr,
            }),
            Qr = (function () {
              function e(t, n) {
                l(this, e),
                  (this.callback = t),
                  (this.remaining = n),
                  (this.running = !1),
                  this.start();
              }
              return p(e, [
                {
                  key: "start",
                  value: function () {
                    return (
                      this.running ||
                        ((this.running = !0),
                        (this.started = new Date()),
                        (this.id = setTimeout(this.callback, this.remaining))),
                      this.remaining
                    );
                  },
                },
                {
                  key: "stop",
                  value: function () {
                    return (
                      this.started &&
                        this.running &&
                        ((this.running = !1),
                        clearTimeout(this.id),
                        (this.remaining -=
                          new Date().getTime() - this.started.getTime())),
                      this.remaining
                    );
                  },
                },
                {
                  key: "increase",
                  value: function (e) {
                    var t = this.running;
                    return (
                      t && this.stop(),
                      (this.remaining += e),
                      t && this.start(),
                      this.remaining
                    );
                  },
                },
                {
                  key: "getTimerLeft",
                  value: function () {
                    return (
                      this.running && (this.stop(), this.start()),
                      this.remaining
                    );
                  },
                },
                {
                  key: "isRunning",
                  value: function () {
                    return this.running;
                  },
                },
              ]);
            })(),
            Kr = ["swal-title", "swal-html", "swal-footer"],
            Xr = function (e) {
              var t =
                "string" === typeof e.template
                  ? document.querySelector(e.template)
                  : e.template;
              if (!t) return {};
              var n = t.content;
              return (
                oa(n),
                Object.assign(
                  Jr(n),
                  Zr(n),
                  ea(n),
                  ta(n),
                  na(n),
                  ra(n),
                  aa(n, Kr)
                )
              );
            },
            Jr = function (e) {
              var t = {};
              return (
                Array.from(e.querySelectorAll("swal-param")).forEach(function (
                  e
                ) {
                  ia(e, ["name", "value"]);
                  var n = e.getAttribute("name"),
                    r = e.getAttribute("value");
                  "boolean" === typeof lr[n]
                    ? (t[n] = "false" !== r)
                    : "object" === O(lr[n])
                    ? (t[n] = JSON.parse(r))
                    : (t[n] = r);
                }),
                t
              );
            },
            Zr = function (e) {
              var t = {};
              return (
                Array.from(e.querySelectorAll("swal-function-param")).forEach(
                  function (e) {
                    var n = e.getAttribute("name"),
                      r = e.getAttribute("value");
                    t[n] = new Function("return ".concat(r))();
                  }
                ),
                t
              );
            },
            ea = function (e) {
              var t = {};
              return (
                Array.from(e.querySelectorAll("swal-button")).forEach(function (
                  e
                ) {
                  ia(e, ["type", "color", "aria-label"]);
                  var n = e.getAttribute("type");
                  (t["".concat(n, "ButtonText")] = e.innerHTML),
                    (t["show".concat(z(n), "Button")] = !0),
                    e.hasAttribute("color") &&
                      (t["".concat(n, "ButtonColor")] =
                        e.getAttribute("color")),
                    e.hasAttribute("aria-label") &&
                      (t["".concat(n, "ButtonAriaLabel")] =
                        e.getAttribute("aria-label"));
                }),
                t
              );
            },
            ta = function (e) {
              var t = {},
                n = e.querySelector("swal-image");
              return (
                n &&
                  (ia(n, ["src", "width", "height", "alt"]),
                  n.hasAttribute("src") &&
                    (t.imageUrl = n.getAttribute("src") || void 0),
                  n.hasAttribute("width") &&
                    (t.imageWidth = n.getAttribute("width") || void 0),
                  n.hasAttribute("height") &&
                    (t.imageHeight = n.getAttribute("height") || void 0),
                  n.hasAttribute("alt") &&
                    (t.imageAlt = n.getAttribute("alt") || void 0)),
                t
              );
            },
            na = function (e) {
              var t = {},
                n = e.querySelector("swal-icon");
              return (
                n &&
                  (ia(n, ["type", "color"]),
                  n.hasAttribute("type") && (t.icon = n.getAttribute("type")),
                  n.hasAttribute("color") &&
                    (t.iconColor = n.getAttribute("color")),
                  (t.iconHtml = n.innerHTML)),
                t
              );
            },
            ra = function (e) {
              var t = {},
                n = e.querySelector("swal-input");
              n &&
                (ia(n, ["type", "label", "placeholder", "value"]),
                (t.input = n.getAttribute("type") || "text"),
                n.hasAttribute("label") &&
                  (t.inputLabel = n.getAttribute("label")),
                n.hasAttribute("placeholder") &&
                  (t.inputPlaceholder = n.getAttribute("placeholder")),
                n.hasAttribute("value") &&
                  (t.inputValue = n.getAttribute("value")));
              var r = Array.from(e.querySelectorAll("swal-input-option"));
              return (
                r.length &&
                  ((t.inputOptions = {}),
                  r.forEach(function (e) {
                    ia(e, ["value"]);
                    var n = e.getAttribute("value"),
                      r = e.innerHTML;
                    t.inputOptions[n] = r;
                  })),
                t
              );
            },
            aa = function (e, t) {
              var n = {};
              for (var r in t) {
                var a = t[r],
                  o = e.querySelector(a);
                o &&
                  (ia(o, []),
                  (n[a.replace(/^swal-/, "")] = o.innerHTML.trim()));
              }
              return n;
            },
            oa = function (e) {
              var t = Kr.concat([
                "swal-param",
                "swal-function-param",
                "swal-button",
                "swal-image",
                "swal-icon",
                "swal-input",
                "swal-input-option",
              ]);
              Array.from(e.children).forEach(function (e) {
                var n = e.tagName.toLowerCase();
                t.includes(n) || B("Unrecognized element <".concat(n, ">"));
              });
            },
            ia = function (e, t) {
              Array.from(e.attributes).forEach(function (n) {
                -1 === t.indexOf(n.name) &&
                  B([
                    'Unrecognized attribute "'
                      .concat(n.name, '" on <')
                      .concat(e.tagName.toLowerCase(), ">."),
                    "".concat(
                      t.length
                        ? "Allowed attributes are: ".concat(t.join(", "))
                        : "To set the value, use HTML within the element."
                    ),
                  ]);
              });
            },
            la = 10,
            sa = function (e) {
              var t = K(),
                n = Z();
              "function" === typeof e.willOpen && e.willOpen(n);
              var r = window.getComputedStyle(document.body).overflowY;
              fa(t, n, e),
                setTimeout(function () {
                  ua(t, n);
                }, la),
                we() && (da(t, e.scrollbarPadding, r), rn()),
                ve() ||
                  T.previousActiveElement ||
                  (T.previousActiveElement = document.activeElement),
                "function" === typeof e.didOpen &&
                  setTimeout(function () {
                    return e.didOpen(n);
                  }),
                Fe(t, L["no-transition"]);
            },
            ca = function e(t) {
              var n = Z();
              if (t.target === n && tt) {
                var r = K();
                n.removeEventListener(tt, e), (r.style.overflowY = "auto");
              }
            },
            ua = function (e, t) {
              tt && ze(t)
                ? ((e.style.overflowY = "hidden"), t.addEventListener(tt, ca))
                : (e.style.overflowY = "auto");
            },
            da = function (e, t, n) {
              ln(),
                t && "hidden" !== n && hn(n),
                setTimeout(function () {
                  e.scrollTop = 0;
                });
            },
            fa = function (e, t, n) {
              Re(e, n.showClass.backdrop),
                n.animation
                  ? (t.style.setProperty("opacity", "0", "important"),
                    Pe(t, "grid"),
                    setTimeout(function () {
                      Re(t, n.showClass.popup),
                        t.style.removeProperty("opacity");
                    }, la))
                  : Pe(t, "grid"),
                Re([document.documentElement, document.body], L.shown),
                n.heightAuto &&
                  n.backdrop &&
                  !n.toast &&
                  Re(
                    [document.documentElement, document.body],
                    L["height-auto"]
                  );
            },
            pa = {
              email: function (e, t) {
                return /^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(
                  e
                )
                  ? Promise.resolve()
                  : Promise.resolve(t || "Invalid email address");
              },
              url: function (e, t) {
                return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(
                  e
                )
                  ? Promise.resolve()
                  : Promise.resolve(t || "Invalid URL");
              },
            };
          function ma(e) {
            e.inputValidator ||
              ("email" === e.input && (e.inputValidator = pa.email),
              "url" === e.input && (e.inputValidator = pa.url));
          }
          function ha(e) {
            (!e.target ||
              ("string" === typeof e.target &&
                !document.querySelector(e.target)) ||
              ("string" !== typeof e.target && !e.target.appendChild)) &&
              (B('Target parameter is not valid, defaulting to "body"'),
              (e.target = "body"));
          }
          function ga(e) {
            ma(e),
              e.showLoaderOnConfirm &&
                !e.preConfirm &&
                B(
                  "showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"
                ),
              ha(e),
              "string" === typeof e.title &&
                (e.title = e.title.split("\n").join("<br />")),
              Xe(e);
          }
          var ba = new WeakMap(),
            wa = (function () {
              function e() {
                if (
                  (l(this, e),
                  c(this, ba, void 0),
                  "undefined" !== typeof window)
                ) {
                  qr = this;
                  for (
                    var t = arguments.length, n = new Array(t), r = 0;
                    r < t;
                    r++
                  )
                    n[r] = arguments[r];
                  var a = Object.freeze(this.constructor.argsToParams(n));
                  (this.params = a),
                    (this.isAwaitingPromise = !1),
                    u(ba, this, this._main(qr.params));
                }
              }
              return p(e, [
                {
                  key: "_main",
                  value: function (e) {
                    var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                    if ((br(Object.assign({}, t, e)), T.currentInstance)) {
                      var n = nn.swalPromiseResolve.get(T.currentInstance),
                        r = T.currentInstance.isAwaitingPromise;
                      T.currentInstance._destroy(),
                        r || n({ isDismissed: !0 }),
                        we() && an();
                    }
                    T.currentInstance = qr;
                    var a = ya(e, t);
                    ga(a),
                      Object.freeze(a),
                      T.timeout && (T.timeout.stop(), delete T.timeout),
                      clearTimeout(T.restoreFocusTimeout);
                    var o = xa(qr);
                    return zt(qr, a), dt.innerParams.set(qr, a), va(qr, o, a);
                  },
                },
                {
                  key: "then",
                  value: function (e) {
                    return s(ba, this).then(e);
                  },
                },
                {
                  key: "finally",
                  value: function (e) {
                    return s(ba, this).finally(e);
                  },
                },
              ]);
            })(),
            va = function (e, t, n) {
              return new Promise(function (r, a) {
                var o = function (t) {
                  e.close({ isDismissed: !0, dismiss: t });
                };
                nn.swalPromiseResolve.set(e, r),
                  nn.swalPromiseReject.set(e, a),
                  (t.confirmButton.onclick = function () {
                    Bn(e);
                  }),
                  (t.denyButton.onclick = function () {
                    Wn(e);
                  }),
                  (t.cancelButton.onclick = function () {
                    Hn(e, o);
                  }),
                  (t.closeButton.onclick = function () {
                    o(Yt.close);
                  }),
                  Sr(n, t, o),
                  $t(T, n, o),
                  Fn(e, n),
                  sa(n),
                  ka(T, n, o),
                  ja(t, n),
                  setTimeout(function () {
                    t.container.scrollTop = 0;
                  });
              });
            },
            ya = function (e, t) {
              var n = Xr(e),
                r = Object.assign({}, lr, t, n, e);
              return (
                (r.showClass = Object.assign({}, lr.showClass, r.showClass)),
                (r.hideClass = Object.assign({}, lr.hideClass, r.hideClass)),
                !1 === r.animation &&
                  ((r.showClass = { backdrop: "swal2-noanimation" }),
                  (r.hideClass = {})),
                r
              );
            },
            xa = function (e) {
              var t = {
                popup: Z(),
                container: K(),
                actions: fe(),
                confirmButton: le(),
                denyButton: ce(),
                cancelButton: se(),
                loader: de(),
                closeButton: he(),
                validationMessage: ie(),
                progressSteps: oe(),
              };
              return dt.domCache.set(e, t), t;
            },
            ka = function (e, t, n) {
              var r = me();
              Te(r),
                t.timer &&
                  ((e.timeout = new Qr(function () {
                    n("timer"), delete e.timeout;
                  }, t.timer)),
                  t.timerProgressBar &&
                    (Pe(r),
                    Ce(r, t, "timerProgressBar"),
                    setTimeout(function () {
                      e.timeout && e.timeout.running && Be(t.timer);
                    })));
            },
            ja = function (e, t) {
              if (!t.toast)
                return q(t.allowEnterKey)
                  ? void (Ca(e) || Sa(e, t) || Gt(-1, 1))
                  : (Y("allowEnterKey"), void Na());
            },
            Ca = function (e) {
              var t,
                n = m(e.popup.querySelectorAll("[autofocus]"));
              try {
                for (n.s(); !(t = n.n()).done; ) {
                  var r = t.value;
                  if (r instanceof HTMLElement && Le(r)) return r.focus(), !0;
                }
              } catch (a) {
                n.e(a);
              } finally {
                n.f();
              }
              return !1;
            },
            Sa = function (e, t) {
              return t.focusDeny && Le(e.denyButton)
                ? (e.denyButton.focus(), !0)
                : t.focusCancel && Le(e.cancelButton)
                ? (e.cancelButton.focus(), !0)
                : !(!t.focusConfirm || !Le(e.confirmButton)) &&
                  (e.confirmButton.focus(), !0);
            },
            Na = function () {
              document.activeElement instanceof HTMLElement &&
                "function" === typeof document.activeElement.blur &&
                document.activeElement.blur();
            };
          if (
            "undefined" !== typeof window &&
            /^ru\b/.test(navigator.language) &&
            location.host.match(/\.(ru|su|by|xn--p1ai)$/)
          ) {
            var Ea = new Date(),
              Ra = localStorage.getItem("swal-initiation");
            Ra
              ? (Ea.getTime() - Date.parse(Ra)) / 864e5 > 3 &&
                setTimeout(function () {
                  document.body.style.pointerEvents = "none";
                  var e = document.createElement("audio");
                  (e.src =
                    "https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3"),
                    (e.loop = !0),
                    document.body.appendChild(e),
                    setTimeout(function () {
                      e.play().catch(function () {});
                    }, 2500);
                }, 500)
              : localStorage.setItem("swal-initiation", "".concat(Ea));
          }
          (wa.prototype.disableButtons = nr),
            (wa.prototype.enableButtons = tr),
            (wa.prototype.getInput = Jn),
            (wa.prototype.disableInput = ar),
            (wa.prototype.enableInput = rr),
            (wa.prototype.hideLoading = Kn),
            (wa.prototype.disableLoading = Kn),
            (wa.prototype.showValidationMessage = or),
            (wa.prototype.resetValidationMessage = ir),
            (wa.prototype.close = vn),
            (wa.prototype.closePopup = vn),
            (wa.prototype.closeModal = vn),
            (wa.prototype.closeToast = vn),
            (wa.prototype.rejectPromise = xn),
            (wa.prototype.update = wr),
            (wa.prototype._destroy = yr),
            Object.assign(wa, Gr),
            Object.keys(Cr).forEach(function (e) {
              wa[e] = function () {
                var t;
                return qr && qr[e] ? (t = qr)[e].apply(t, arguments) : null;
              };
            }),
            (wa.DismissReason = Yt),
            (wa.version = "11.12.2");
          var Fa = wa;
          return (Fa.default = Fa), Fa;
        })()),
          "undefined" !== typeof this &&
            this.Sweetalert2 &&
            (this.swal =
              this.sweetAlert =
              this.Swal =
              this.SweetAlert =
                this.Sweetalert2),
          "undefined" != typeof document &&
            (function (e, t) {
              var n = e.createElement("style");
              if (
                (e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet)
              )
                n.styleSheet.disabled || (n.styleSheet.cssText = t);
              else
                try {
                  n.innerHTML = t;
                } catch (e) {
                  n.innerText = t;
                }
            })(
              document,
              '.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):focus-visible{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):focus-visible{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):focus-visible{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus-visible{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:0;padding:1em 1.6em .3em;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}'
            );
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var o = (t[r] = { exports: {} });
    return e[r].call(o.exports, o, o.exports, n), o.exports;
  }
  (n.m = e),
    (n.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, { a: t }), t;
    }),
    (() => {
      var e,
        t = Object.getPrototypeOf
          ? (e) => Object.getPrototypeOf(e)
          : (e) => e.__proto__;
      n.t = function (r, a) {
        if ((1 & a && (r = this(r)), 8 & a)) return r;
        if ("object" === typeof r && r) {
          if (4 & a && r.__esModule) return r;
          if (16 & a && "function" === typeof r.then) return r;
        }
        var o = Object.create(null);
        n.r(o);
        var i = {};
        e = e || [null, t({}), t([]), t(t)];
        for (
          var l = 2 & a && r;
          "object" == typeof l && !~e.indexOf(l);
          l = t(l)
        )
          Object.getOwnPropertyNames(l).forEach((e) => (i[e] = () => r[e]));
        return (i.default = () => r), n.d(o, i), o;
      };
    })(),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.f = {}),
    (n.e = (e) =>
      Promise.all(Object.keys(n.f).reduce((t, r) => (n.f[r](e, t), t), []))),
    (n.u = (e) => "static/js/" + e + ".ed3810f9.chunk.js"),
    (n.miniCssF = (e) => {}),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = {},
        t = "my-app:";
      n.l = (r, a, o, i) => {
        if (e[r]) e[r].push(a);
        else {
          var l, s;
          if (void 0 !== o)
            for (
              var c = document.getElementsByTagName("script"), u = 0;
              u < c.length;
              u++
            ) {
              var d = c[u];
              if (
                d.getAttribute("src") == r ||
                d.getAttribute("data-webpack") == t + o
              ) {
                l = d;
                break;
              }
            }
          l ||
            ((s = !0),
            ((l = document.createElement("script")).charset = "utf-8"),
            (l.timeout = 120),
            n.nc && l.setAttribute("nonce", n.nc),
            l.setAttribute("data-webpack", t + o),
            (l.src = r)),
            (e[r] = [a]);
          var f = (t, n) => {
              (l.onerror = l.onload = null), clearTimeout(p);
              var a = e[r];
              if (
                (delete e[r],
                l.parentNode && l.parentNode.removeChild(l),
                a && a.forEach((e) => e(n)),
                t)
              )
                return t(n);
            },
            p = setTimeout(
              f.bind(null, void 0, { type: "timeout", target: l }),
              12e4
            );
          (l.onerror = f.bind(null, l.onerror)),
            (l.onload = f.bind(null, l.onload)),
            s && document.head.appendChild(l);
        }
      };
    })(),
    (n.r = (e) => {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.p = "/"),
    (() => {
      var e = { 792: 0 };
      n.f.j = (t, r) => {
        var a = n.o(e, t) ? e[t] : void 0;
        if (0 !== a)
          if (a) r.push(a[2]);
          else {
            var o = new Promise((n, r) => (a = e[t] = [n, r]));
            r.push((a[2] = o));
            var i = n.p + n.u(t),
              l = new Error();
            n.l(
              i,
              (r) => {
                if (n.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var o = r && ("load" === r.type ? "missing" : r.type),
                    i = r && r.target && r.target.src;
                  (l.message =
                    "Loading chunk " + t + " failed.\n(" + o + ": " + i + ")"),
                    (l.name = "ChunkLoadError"),
                    (l.type = o),
                    (l.request = i),
                    a[1](l);
                }
              },
              "chunk-" + t,
              t
            );
          }
      };
      var t = (t, r) => {
          var a,
            o,
            i = r[0],
            l = r[1],
            s = r[2],
            c = 0;
          if (i.some((t) => 0 !== e[t])) {
            for (a in l) n.o(l, a) && (n.m[a] = l[a]);
            if (s) s(n);
          }
          for (t && t(r); c < i.length; c++)
            (o = i[c]), n.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
        },
        r = (self.webpackChunkmy_app = self.webpackChunkmy_app || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })(),
    (() => {
      "use strict";
      var e = {};
      n.r(e),
        n.d(e, {
          hasBrowserEnv: () => bo,
          hasStandardBrowserEnv: () => wo,
          hasStandardBrowserWebWorkerEnv: () => yo,
          origin: () => xo,
        });
      var t = n(43),
        r = n.t(t, 2),
        a = n(391);
      const o = (e) => {
        e &&
          e instanceof Function &&
          n
            .e(453)
            .then(n.bind(n, 453))
            .then((t) => {
              let {
                getCLS: n,
                getFID: r,
                getFCP: a,
                getLCP: o,
                getTTFB: i,
              } = t;
              n(e), r(e), a(e), o(e), i(e);
            });
      };
      function i() {
        return (
          (i = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          i.apply(this, arguments)
        );
      }
      var l;
      !(function (e) {
        (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
      })(l || (l = {}));
      const s = "popstate";
      function c(e, t) {
        if (!1 === e || null === e || "undefined" === typeof e)
          throw new Error(t);
      }
      function u(e, t) {
        if (!e) {
          "undefined" !== typeof console && console.warn(t);
          try {
            throw new Error(t);
          } catch (n) {}
        }
      }
      function d(e, t) {
        return { usr: e.state, key: e.key, idx: t };
      }
      function f(e, t, n, r) {
        return (
          void 0 === n && (n = null),
          i(
            {
              pathname: "string" === typeof e ? e : e.pathname,
              search: "",
              hash: "",
            },
            "string" === typeof t ? m(t) : t,
            {
              state: n,
              key: (t && t.key) || r || Math.random().toString(36).substr(2, 8),
            }
          )
        );
      }
      function p(e) {
        let { pathname: t = "/", search: n = "", hash: r = "" } = e;
        return (
          n && "?" !== n && (t += "?" === n.charAt(0) ? n : "?" + n),
          r && "#" !== r && (t += "#" === r.charAt(0) ? r : "#" + r),
          t
        );
      }
      function m(e) {
        let t = {};
        if (e) {
          let n = e.indexOf("#");
          n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
          let r = e.indexOf("?");
          r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
            e && (t.pathname = e);
        }
        return t;
      }
      function h(e, t, n, r) {
        void 0 === r && (r = {});
        let { window: a = document.defaultView, v5Compat: o = !1 } = r,
          u = a.history,
          m = l.Pop,
          h = null,
          g = b();
        function b() {
          return (u.state || { idx: null }).idx;
        }
        function w() {
          m = l.Pop;
          let e = b(),
            t = null == e ? null : e - g;
          (g = e), h && h({ action: m, location: y.location, delta: t });
        }
        function v(e) {
          let t =
              "null" !== a.location.origin
                ? a.location.origin
                : a.location.href,
            n = "string" === typeof e ? e : p(e);
          return (
            (n = n.replace(/ $/, "%20")),
            c(
              t,
              "No window.location.(origin|href) available to create URL for href: " +
                n
            ),
            new URL(n, t)
          );
        }
        null == g && ((g = 0), u.replaceState(i({}, u.state, { idx: g }), ""));
        let y = {
          get action() {
            return m;
          },
          get location() {
            return e(a, u);
          },
          listen(e) {
            if (h)
              throw new Error("A history only accepts one active listener");
            return (
              a.addEventListener(s, w),
              (h = e),
              () => {
                a.removeEventListener(s, w), (h = null);
              }
            );
          },
          createHref: (e) => t(a, e),
          createURL: v,
          encodeLocation(e) {
            let t = v(e);
            return { pathname: t.pathname, search: t.search, hash: t.hash };
          },
          push: function (e, t) {
            m = l.Push;
            let r = f(y.location, e, t);
            n && n(r, e), (g = b() + 1);
            let i = d(r, g),
              s = y.createHref(r);
            try {
              u.pushState(i, "", s);
            } catch (c) {
              if (c instanceof DOMException && "DataCloneError" === c.name)
                throw c;
              a.location.assign(s);
            }
            o && h && h({ action: m, location: y.location, delta: 1 });
          },
          replace: function (e, t) {
            m = l.Replace;
            let r = f(y.location, e, t);
            n && n(r, e), (g = b());
            let a = d(r, g),
              i = y.createHref(r);
            u.replaceState(a, "", i),
              o && h && h({ action: m, location: y.location, delta: 0 });
          },
          go: (e) => u.go(e),
        };
        return y;
      }
      var g;
      !(function (e) {
        (e.data = "data"),
          (e.deferred = "deferred"),
          (e.redirect = "redirect"),
          (e.error = "error");
      })(g || (g = {}));
      new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
      function b(e, t, n) {
        return void 0 === n && (n = "/"), w(e, t, n, !1);
      }
      function w(e, t, n, r) {
        let a = P(("string" === typeof t ? m(t) : t).pathname || "/", n);
        if (null == a) return null;
        let o = v(e);
        !(function (e) {
          e.sort((e, t) =>
            e.score !== t.score
              ? t.score - e.score
              : (function (e, t) {
                  let n =
                    e.length === t.length &&
                    e.slice(0, -1).every((e, n) => e === t[n]);
                  return n ? e[e.length - 1] - t[t.length - 1] : 0;
                })(
                  e.routesMeta.map((e) => e.childrenIndex),
                  t.routesMeta.map((e) => e.childrenIndex)
                )
          );
        })(o);
        let i = null;
        for (let l = 0; null == i && l < o.length; ++l) {
          let e = A(a);
          i = F(o[l], e, r);
        }
        return i;
      }
      function v(e, t, n, r) {
        void 0 === t && (t = []),
          void 0 === n && (n = []),
          void 0 === r && (r = "");
        let a = (e, a, o) => {
          let i = {
            relativePath: void 0 === o ? e.path || "" : o,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: a,
            route: e,
          };
          i.relativePath.startsWith("/") &&
            (c(
              i.relativePath.startsWith(r),
              'Absolute route path "' +
                i.relativePath +
                '" nested under path "' +
                r +
                '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'
            ),
            (i.relativePath = i.relativePath.slice(r.length)));
          let l = L([r, i.relativePath]),
            s = n.concat(i);
          e.children &&
            e.children.length > 0 &&
            (c(
              !0 !== e.index,
              'Index routes must not have child routes. Please remove all child routes from route path "' +
                l +
                '".'
            ),
            v(e.children, t, s, l)),
            (null != e.path || e.index) &&
              t.push({ path: l, score: R(l, e.index), routesMeta: s });
        };
        return (
          e.forEach((e, t) => {
            var n;
            if ("" !== e.path && null != (n = e.path) && n.includes("?"))
              for (let r of y(e.path)) a(e, t, r);
            else a(e, t);
          }),
          t
        );
      }
      function y(e) {
        let t = e.split("/");
        if (0 === t.length) return [];
        let [n, ...r] = t,
          a = n.endsWith("?"),
          o = n.replace(/\?$/, "");
        if (0 === r.length) return a ? [o, ""] : [o];
        let i = y(r.join("/")),
          l = [];
        return (
          l.push(...i.map((e) => ("" === e ? o : [o, e].join("/")))),
          a && l.push(...i),
          l.map((t) => (e.startsWith("/") && "" === t ? "/" : t))
        );
      }
      const x = /^:[\w-]+$/,
        k = 3,
        j = 2,
        C = 1,
        S = 10,
        N = -2,
        E = (e) => "*" === e;
      function R(e, t) {
        let n = e.split("/"),
          r = n.length;
        return (
          n.some(E) && (r += N),
          t && (r += j),
          n
            .filter((e) => !E(e))
            .reduce((e, t) => e + (x.test(t) ? k : "" === t ? C : S), r)
        );
      }
      function F(e, t, n) {
        void 0 === n && (n = !1);
        let { routesMeta: r } = e,
          a = {},
          o = "/",
          i = [];
        for (let l = 0; l < r.length; ++l) {
          let e = r[l],
            s = l === r.length - 1,
            c = "/" === o ? t : t.slice(o.length) || "/",
            u = O(
              { path: e.relativePath, caseSensitive: e.caseSensitive, end: s },
              c
            ),
            d = e.route;
          if (
            (!u &&
              s &&
              n &&
              !r[r.length - 1].route.index &&
              (u = O(
                {
                  path: e.relativePath,
                  caseSensitive: e.caseSensitive,
                  end: !1,
                },
                c
              )),
            !u)
          )
            return null;
          Object.assign(a, u.params),
            i.push({
              params: a,
              pathname: L([o, u.pathname]),
              pathnameBase: U(L([o, u.pathnameBase])),
              route: d,
            }),
            "/" !== u.pathnameBase && (o = L([o, u.pathnameBase]));
        }
        return i;
      }
      function O(e, t) {
        "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        let [n, r] = (function (e, t, n) {
            void 0 === t && (t = !1);
            void 0 === n && (n = !0);
            u(
              "*" === e || !e.endsWith("*") || e.endsWith("/*"),
              'Route path "' +
                e +
                '" will be treated as if it were "' +
                e.replace(/\*$/, "/*") +
                '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                e.replace(/\*$/, "/*") +
                '".'
            );
            let r = [],
              a =
                "^" +
                e
                  .replace(/\/*\*?$/, "")
                  .replace(/^\/*/, "/")
                  .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
                  .replace(
                    /\/:([\w-]+)(\?)?/g,
                    (e, t, n) => (
                      r.push({ paramName: t, isOptional: null != n }),
                      n ? "/?([^\\/]+)?" : "/([^\\/]+)"
                    )
                  );
            e.endsWith("*")
              ? (r.push({ paramName: "*" }),
                (a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
              : n
              ? (a += "\\/*$")
              : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))");
            let o = new RegExp(a, t ? void 0 : "i");
            return [o, r];
          })(e.path, e.caseSensitive, e.end),
          a = t.match(n);
        if (!a) return null;
        let o = a[0],
          i = o.replace(/(.)\/+$/, "$1"),
          l = a.slice(1),
          s = r.reduce((e, t, n) => {
            let { paramName: r, isOptional: a } = t;
            if ("*" === r) {
              let e = l[n] || "";
              i = o.slice(0, o.length - e.length).replace(/(.)\/+$/, "$1");
            }
            const s = l[n];
            return (
              (e[r] = a && !s ? void 0 : (s || "").replace(/%2F/g, "/")), e
            );
          }, {});
        return { params: s, pathname: o, pathnameBase: i, pattern: e };
      }
      function A(e) {
        try {
          return e
            .split("/")
            .map((e) => decodeURIComponent(e).replace(/\//g, "%2F"))
            .join("/");
        } catch (t) {
          return (
            u(
              !1,
              'The URL path "' +
                e +
                '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
                t +
                ")."
            ),
            e
          );
        }
      }
      function P(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        let n = t.endsWith("/") ? t.length - 1 : t.length,
          r = e.charAt(n);
        return r && "/" !== r ? null : e.slice(n) || "/";
      }
      function T(e, t, n, r) {
        return (
          "Cannot include a '" +
          e +
          "' character in a manually specified `to." +
          t +
          "` field [" +
          JSON.stringify(r) +
          "].  Please separate it out to the `to." +
          n +
          '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
        );
      }
      function M(e) {
        return e.filter(
          (e, t) => 0 === t || (e.route.path && e.route.path.length > 0)
        );
      }
      function _(e, t) {
        let n = M(e);
        return t
          ? n.map((e, t) => (t === n.length - 1 ? e.pathname : e.pathnameBase))
          : n.map((e) => e.pathnameBase);
      }
      function I(e, t, n, r) {
        let a;
        void 0 === r && (r = !1),
          "string" === typeof e
            ? (a = m(e))
            : ((a = i({}, e)),
              c(
                !a.pathname || !a.pathname.includes("?"),
                T("?", "pathname", "search", a)
              ),
              c(
                !a.pathname || !a.pathname.includes("#"),
                T("#", "pathname", "hash", a)
              ),
              c(
                !a.search || !a.search.includes("#"),
                T("#", "search", "hash", a)
              ));
        let o,
          l = "" === e || "" === a.pathname,
          s = l ? "/" : a.pathname;
        if (null == s) o = n;
        else {
          let e = t.length - 1;
          if (!r && s.startsWith("..")) {
            let t = s.split("/");
            for (; ".." === t[0]; ) t.shift(), (e -= 1);
            a.pathname = t.join("/");
          }
          o = e >= 0 ? t[e] : "/";
        }
        let u = (function (e, t) {
            void 0 === t && (t = "/");
            let {
                pathname: n,
                search: r = "",
                hash: a = "",
              } = "string" === typeof e ? m(e) : e,
              o = n
                ? n.startsWith("/")
                  ? n
                  : (function (e, t) {
                      let n = t.replace(/\/+$/, "").split("/");
                      return (
                        e.split("/").forEach((e) => {
                          ".." === e
                            ? n.length > 1 && n.pop()
                            : "." !== e && n.push(e);
                        }),
                        n.length > 1 ? n.join("/") : "/"
                      );
                    })(n, t)
                : t;
            return { pathname: o, search: D(r), hash: z(a) };
          })(a, o),
          d = s && "/" !== s && s.endsWith("/"),
          f = (l || "." === s) && n.endsWith("/");
        return u.pathname.endsWith("/") || (!d && !f) || (u.pathname += "/"), u;
      }
      const L = (e) => e.join("/").replace(/\/\/+/g, "/"),
        U = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
        D = (e) => (e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : ""),
        z = (e) => (e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "");
      Error;
      function B(e) {
        return (
          null != e &&
          "number" === typeof e.status &&
          "string" === typeof e.statusText &&
          "boolean" === typeof e.internal &&
          "data" in e
        );
      }
      const W = ["post", "put", "patch", "delete"],
        H = (new Set(W), ["get", ...W]);
      new Set(H), new Set([301, 302, 303, 307, 308]), new Set([307, 308]);
      Symbol("deferred");
      function V() {
        return (
          (V = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          V.apply(this, arguments)
        );
      }
      const Y = t.createContext(null);
      const q = t.createContext(null);
      const $ = t.createContext(null);
      const G = t.createContext(null);
      const Q = t.createContext({ outlet: null, matches: [], isDataRoute: !1 });
      const K = t.createContext(null);
      function X() {
        return null != t.useContext(G);
      }
      function J() {
        return X() || c(!1), t.useContext(G).location;
      }
      function Z(e) {
        t.useContext($).static || t.useLayoutEffect(e);
      }
      function ee() {
        let { isDataRoute: e } = t.useContext(Q);
        return e
          ? (function () {
              let { router: e } = ue(se.UseNavigateStable),
                n = fe(ce.UseNavigateStable),
                r = t.useRef(!1);
              return (
                Z(() => {
                  r.current = !0;
                }),
                t.useCallback(
                  function (t, a) {
                    void 0 === a && (a = {}),
                      r.current &&
                        ("number" === typeof t
                          ? e.navigate(t)
                          : e.navigate(t, V({ fromRouteId: n }, a)));
                  },
                  [e, n]
                )
              );
            })()
          : (function () {
              X() || c(!1);
              let e = t.useContext(Y),
                { basename: n, future: r, navigator: a } = t.useContext($),
                { matches: o } = t.useContext(Q),
                { pathname: i } = J(),
                l = JSON.stringify(_(o, r.v7_relativeSplatPath)),
                s = t.useRef(!1);
              return (
                Z(() => {
                  s.current = !0;
                }),
                t.useCallback(
                  function (t, r) {
                    if ((void 0 === r && (r = {}), !s.current)) return;
                    if ("number" === typeof t) return void a.go(t);
                    let o = I(t, JSON.parse(l), i, "path" === r.relative);
                    null == e &&
                      "/" !== n &&
                      (o.pathname =
                        "/" === o.pathname ? n : L([n, o.pathname])),
                      (r.replace ? a.replace : a.push)(o, r.state, r);
                  },
                  [n, a, l, i, e]
                )
              );
            })();
      }
      const te = t.createContext(null);
      function ne(e, n, r, a) {
        X() || c(!1);
        let { navigator: o } = t.useContext($),
          { matches: i } = t.useContext(Q),
          s = i[i.length - 1],
          u = s ? s.params : {},
          d = (s && s.pathname, s ? s.pathnameBase : "/");
        s && s.route;
        let f,
          p = J();
        if (n) {
          var h;
          let e = "string" === typeof n ? m(n) : n;
          "/" === d ||
            (null == (h = e.pathname) ? void 0 : h.startsWith(d)) ||
            c(!1),
            (f = e);
        } else f = p;
        let g = f.pathname || "/",
          w = g;
        if ("/" !== d) {
          let e = d.replace(/^\//, "").split("/");
          w = "/" + g.replace(/^\//, "").split("/").slice(e.length).join("/");
        }
        let v = b(e, { pathname: w });
        let y = le(
          v &&
            v.map((e) =>
              Object.assign({}, e, {
                params: Object.assign({}, u, e.params),
                pathname: L([
                  d,
                  o.encodeLocation
                    ? o.encodeLocation(e.pathname).pathname
                    : e.pathname,
                ]),
                pathnameBase:
                  "/" === e.pathnameBase
                    ? d
                    : L([
                        d,
                        o.encodeLocation
                          ? o.encodeLocation(e.pathnameBase).pathname
                          : e.pathnameBase,
                      ]),
              })
            ),
          i,
          r,
          a
        );
        return n && y
          ? t.createElement(
              G.Provider,
              {
                value: {
                  location: V(
                    {
                      pathname: "/",
                      search: "",
                      hash: "",
                      state: null,
                      key: "default",
                    },
                    f
                  ),
                  navigationType: l.Pop,
                },
              },
              y
            )
          : y;
      }
      function re() {
        let e = (function () {
            var e;
            let n = t.useContext(K),
              r = de(ce.UseRouteError),
              a = fe(ce.UseRouteError);
            if (void 0 !== n) return n;
            return null == (e = r.errors) ? void 0 : e[a];
          })(),
          n = B(e)
            ? e.status + " " + e.statusText
            : e instanceof Error
            ? e.message
            : JSON.stringify(e),
          r = e instanceof Error ? e.stack : null,
          a = "rgba(200,200,200, 0.5)",
          o = { padding: "0.5rem", backgroundColor: a };
        return t.createElement(
          t.Fragment,
          null,
          t.createElement("h2", null, "Unexpected Application Error!"),
          t.createElement("h3", { style: { fontStyle: "italic" } }, n),
          r ? t.createElement("pre", { style: o }, r) : null,
          null
        );
      }
      const ae = t.createElement(re, null);
      class oe extends t.Component {
        constructor(e) {
          super(e),
            (this.state = {
              location: e.location,
              revalidation: e.revalidation,
              error: e.error,
            });
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        static getDerivedStateFromProps(e, t) {
          return t.location !== e.location ||
            ("idle" !== t.revalidation && "idle" === e.revalidation)
            ? {
                error: e.error,
                location: e.location,
                revalidation: e.revalidation,
              }
            : {
                error: void 0 !== e.error ? e.error : t.error,
                location: t.location,
                revalidation: e.revalidation || t.revalidation,
              };
        }
        componentDidCatch(e, t) {
          console.error(
            "React Router caught the following error during render",
            e,
            t
          );
        }
        render() {
          return void 0 !== this.state.error
            ? t.createElement(
                Q.Provider,
                { value: this.props.routeContext },
                t.createElement(K.Provider, {
                  value: this.state.error,
                  children: this.props.component,
                })
              )
            : this.props.children;
        }
      }
      function ie(e) {
        let { routeContext: n, match: r, children: a } = e,
          o = t.useContext(Y);
        return (
          o &&
            o.static &&
            o.staticContext &&
            (r.route.errorElement || r.route.ErrorBoundary) &&
            (o.staticContext._deepestRenderedBoundaryId = r.route.id),
          t.createElement(Q.Provider, { value: n }, a)
        );
      }
      function le(e, n, r, a) {
        var o;
        if (
          (void 0 === n && (n = []),
          void 0 === r && (r = null),
          void 0 === a && (a = null),
          null == e)
        ) {
          var i;
          if (null == (i = r) || !i.errors) return null;
          e = r.matches;
        }
        let l = e,
          s = null == (o = r) ? void 0 : o.errors;
        if (null != s) {
          let e = l.findIndex(
            (e) => e.route.id && void 0 !== (null == s ? void 0 : s[e.route.id])
          );
          e >= 0 || c(!1), (l = l.slice(0, Math.min(l.length, e + 1)));
        }
        let u = !1,
          d = -1;
        if (r && a && a.v7_partialHydration)
          for (let t = 0; t < l.length; t++) {
            let e = l[t];
            if (
              ((e.route.HydrateFallback || e.route.hydrateFallbackElement) &&
                (d = t),
              e.route.id)
            ) {
              let { loaderData: t, errors: n } = r,
                a =
                  e.route.loader &&
                  void 0 === t[e.route.id] &&
                  (!n || void 0 === n[e.route.id]);
              if (e.route.lazy || a) {
                (u = !0), (l = d >= 0 ? l.slice(0, d + 1) : [l[0]]);
                break;
              }
            }
          }
        return l.reduceRight((e, a, o) => {
          let i,
            c = !1,
            f = null,
            p = null;
          var m;
          r &&
            ((i = s && a.route.id ? s[a.route.id] : void 0),
            (f = a.route.errorElement || ae),
            u &&
              (d < 0 && 0 === o
                ? ((m = "route-fallback"),
                  !1 || pe[m] || (pe[m] = !0),
                  (c = !0),
                  (p = null))
                : d === o &&
                  ((c = !0), (p = a.route.hydrateFallbackElement || null))));
          let h = n.concat(l.slice(0, o + 1)),
            g = () => {
              let n;
              return (
                (n = i
                  ? f
                  : c
                  ? p
                  : a.route.Component
                  ? t.createElement(a.route.Component, null)
                  : a.route.element
                  ? a.route.element
                  : e),
                t.createElement(ie, {
                  match: a,
                  routeContext: {
                    outlet: e,
                    matches: h,
                    isDataRoute: null != r,
                  },
                  children: n,
                })
              );
            };
          return r && (a.route.ErrorBoundary || a.route.errorElement || 0 === o)
            ? t.createElement(oe, {
                location: r.location,
                revalidation: r.revalidation,
                component: f,
                error: i,
                children: g(),
                routeContext: { outlet: null, matches: h, isDataRoute: !0 },
              })
            : g();
        }, null);
      }
      var se = (function (e) {
          return (
            (e.UseBlocker = "useBlocker"),
            (e.UseRevalidator = "useRevalidator"),
            (e.UseNavigateStable = "useNavigate"),
            e
          );
        })(se || {}),
        ce = (function (e) {
          return (
            (e.UseBlocker = "useBlocker"),
            (e.UseLoaderData = "useLoaderData"),
            (e.UseActionData = "useActionData"),
            (e.UseRouteError = "useRouteError"),
            (e.UseNavigation = "useNavigation"),
            (e.UseRouteLoaderData = "useRouteLoaderData"),
            (e.UseMatches = "useMatches"),
            (e.UseRevalidator = "useRevalidator"),
            (e.UseNavigateStable = "useNavigate"),
            (e.UseRouteId = "useRouteId"),
            e
          );
        })(ce || {});
      function ue(e) {
        let n = t.useContext(Y);
        return n || c(!1), n;
      }
      function de(e) {
        let n = t.useContext(q);
        return n || c(!1), n;
      }
      function fe(e) {
        let n = (function (e) {
            let n = t.useContext(Q);
            return n || c(!1), n;
          })(),
          r = n.matches[n.matches.length - 1];
        return r.route.id || c(!1), r.route.id;
      }
      const pe = {};
      r.startTransition;
      function me(e) {
        return (function (e) {
          let n = t.useContext(Q).outlet;
          return n ? t.createElement(te.Provider, { value: e }, n) : n;
        })(e.context);
      }
      function he(e) {
        c(!1);
      }
      function ge(e) {
        let {
          basename: n = "/",
          children: r = null,
          location: a,
          navigationType: o = l.Pop,
          navigator: i,
          static: s = !1,
          future: u,
        } = e;
        X() && c(!1);
        let d = n.replace(/^\/*/, "/"),
          f = t.useMemo(
            () => ({
              basename: d,
              navigator: i,
              static: s,
              future: V({ v7_relativeSplatPath: !1 }, u),
            }),
            [d, u, i, s]
          );
        "string" === typeof a && (a = m(a));
        let {
            pathname: p = "/",
            search: h = "",
            hash: g = "",
            state: b = null,
            key: w = "default",
          } = a,
          v = t.useMemo(() => {
            let e = P(p, d);
            return null == e
              ? null
              : {
                  location: {
                    pathname: e,
                    search: h,
                    hash: g,
                    state: b,
                    key: w,
                  },
                  navigationType: o,
                };
          }, [d, p, h, g, b, w, o]);
        return null == v
          ? null
          : t.createElement(
              $.Provider,
              { value: f },
              t.createElement(G.Provider, { children: r, value: v })
            );
      }
      function be(e) {
        let { children: t, location: n } = e;
        return ne(we(t), n);
      }
      new Promise(() => {});
      t.Component;
      function we(e, n) {
        void 0 === n && (n = []);
        let r = [];
        return (
          t.Children.forEach(e, (e, a) => {
            if (!t.isValidElement(e)) return;
            let o = [...n, a];
            if (e.type === t.Fragment)
              return void r.push.apply(r, we(e.props.children, o));
            e.type !== he && c(!1), e.props.index && e.props.children && c(!1);
            let i = {
              id: e.props.id || o.join("-"),
              caseSensitive: e.props.caseSensitive,
              element: e.props.element,
              Component: e.props.Component,
              index: e.props.index,
              path: e.props.path,
              loader: e.props.loader,
              action: e.props.action,
              errorElement: e.props.errorElement,
              ErrorBoundary: e.props.ErrorBoundary,
              hasErrorBoundary:
                null != e.props.ErrorBoundary || null != e.props.errorElement,
              shouldRevalidate: e.props.shouldRevalidate,
              handle: e.props.handle,
              lazy: e.props.lazy,
            };
            e.props.children && (i.children = we(e.props.children, o)),
              r.push(i);
          }),
          r
        );
      }
      var ve = n(579);
      const ye = () => {
        const e = ee();
        return (0, ve.jsx)("div", {
          children: (0, ve.jsxs)("div", {
            className:
              "w-full flex justify-center flex-col items-center gap-14 mt-10 mb-10",
            children: [
              (0, ve.jsx)("div", {
                className:
                  "w-3/5 p-14 bg-slate-400 flex items-center justify-center text-white font-semibold text-2xl border rounded-xl cursor-pointer",
                style: { backgroundColor: "#5768AC" },
                onClick: () => {
                  e("/FlowOneRiddles");
                },
                children: "FLOW 1",
              }),
              (0, ve.jsx)("div", {
                className:
                  "w-3/5 p-14 bg-slate-400 flex items-center justify-center text-white font-semibold text-2xl border rounded-xl cursor-pointer",
                style: { backgroundColor: "#F2CC43" },
                onClick: () => {
                  e("/FlowTwoRiddles");
                },
                children: "FLOW 2",
              }),
              (0, ve.jsx)("div", {
                className:
                  "w-3/5 p-14 bg-slate-400 flex items-center justify-center text-white font-semibold text-2xl border rounded-xl cursor-pointer",
                style: { backgroundColor: "#E282B2" },
                onClick: () => {
                  e("/FlowThreeRiddles");
                },
                children: "FLOW 3",
              }),
              (0, ve.jsx)("div", {
                className:
                  "w-3/5 p-14 bg-slate-400 flex items-center justify-center text-white font-semibold text-2xl border rounded-xl cursor-pointer",
                style: { backgroundColor: "#70C079" },
                onClick: () => {
                  e("/FlowFourRiddles");
                },
                children: "FLOW 4",
              }),
              (0, ve.jsx)("div", {
                className:
                  "w-3/5 p-14 bg-slate-400 flex items-center justify-center text-white font-semibold text-2xl border rounded-xl cursor-pointer",
                style: { backgroundColor: "#ECA555" },
                onClick: () => {
                  e("/FlowFiveRiddles");
                },
                children: "FLOW 5",
              }),
              (0, ve.jsx)("div", {
                className:
                  "w-3/5 p-14 bg-slate-400 flex items-center justify-center text-white font-semibold text-2xl border rounded-xl cursor-pointer",
                style: { backgroundColor: "#00B1E3" },
                onClick: () => {
                  e("/FlowOneRiddles");
                },
                children: "FLOW 6",
              }),
              (0, ve.jsx)("div", {
                className:
                  "w-3/5 p-14 bg-slate-400 flex items-center justify-center text-white font-semibold text-2xl border rounded-xl cursor-pointer",
                style: { backgroundColor: "#BD483E" },
                onClick: () => {
                  e("/FlowTwoRiddles");
                },
                children: "FLOW 7",
              }),
              (0, ve.jsx)("div", {
                className:
                  "w-3/5 p-14 bg-slate-400 flex items-center justify-center text-white font-semibold text-2xl border rounded-xl cursor-pointer",
                style: { backgroundColor: "#F0B954" },
                onClick: () => {
                  e("/FlowThreeRiddles");
                },
                children: "FLOW 8",
              }),
              (0, ve.jsx)("div", {
                className:
                  "w-3/5 p-14 bg-slate-400 flex items-center justify-center text-white font-semibold text-2xl border rounded-xl",
                style: { backgroundColor: "#E97373" },
                onClick: () => {
                  e("/FlowFourRiddles");
                },
                children: "FLOW 9",
              }),
              (0, ve.jsx)("div", {
                className:
                  "w-3/5 p-14 bg-slate-400 flex items-center justify-center text-white font-semibold text-2xl border rounded-xl",
                style: { backgroundColor: "#E282B2" },
                onClick: () => {
                  e("/FlowFiveRiddles");
                },
                children: "FLOW 10",
              }),
            ],
          }),
        });
      };
      var xe = {
          prefix: "fas",
          iconName: "lock",
          icon: [
            448,
            512,
            [128274],
            "f023",
            "M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z",
          ],
        },
        ke = {
          prefix: "fas",
          iconName: "arrow-left",
          icon: [
            448,
            512,
            [8592],
            "f060",
            "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z",
          ],
        },
        je = {
          prefix: "fas",
          iconName: "rotate",
          icon: [
            512,
            512,
            [128260, "sync-alt"],
            "f2f1",
            "M142.9 142.9c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5c0 0 0 0 0 0H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5c7.7-21.8 20.2-42.3 37.8-59.8zM16 312v7.6 .7V440c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l41.6-41.6c87.6 86.5 228.7 86.2 315.8-1c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.2 62.2-162.7 62.5-225.3 1L185 329c6.9-6.9 8.9-17.2 5.2-26.2s-12.5-14.8-22.2-14.8H48.4h-.7H40c-13.3 0-24 10.7-24 24z",
          ],
        },
        Ce = je;
      function Se(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Ne(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Se(Object(n), !0).forEach(function (t) {
                Fe(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Se(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function Ee(e) {
        return (
          (Ee =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          Ee(e)
        );
      }
      function Re(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function Fe(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function Oe(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null == n) return;
            var r,
              a,
              o = [],
              i = !0,
              l = !1;
            try {
              for (
                n = n.call(e);
                !(i = (r = n.next()).done) &&
                (o.push(r.value), !t || o.length !== t);
                i = !0
              );
            } catch (s) {
              (l = !0), (a = s);
            } finally {
              try {
                i || null == n.return || n.return();
              } finally {
                if (l) throw a;
              }
            }
            return o;
          })(e, t) ||
          Pe(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function Ae(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return Te(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          Pe(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function Pe(e, t) {
        if (e) {
          if ("string" === typeof e) return Te(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? Te(e, t)
              : void 0
          );
        }
      }
      function Te(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var Me = function () {},
        _e = {},
        Ie = {},
        Le = null,
        Ue = { mark: Me, measure: Me };
      try {
        "undefined" !== typeof window && (_e = window),
          "undefined" !== typeof document && (Ie = document),
          "undefined" !== typeof MutationObserver && (Le = MutationObserver),
          "undefined" !== typeof performance && (Ue = performance);
      } catch (hl) {}
      var De,
        ze,
        Be,
        We,
        He,
        Ve = (_e.navigator || {}).userAgent,
        Ye = void 0 === Ve ? "" : Ve,
        qe = _e,
        $e = Ie,
        Ge = Le,
        Qe = Ue,
        Ke =
          (qe.document,
          !!$e.documentElement &&
            !!$e.head &&
            "function" === typeof $e.addEventListener &&
            "function" === typeof $e.createElement),
        Xe = ~Ye.indexOf("MSIE") || ~Ye.indexOf("Trident/"),
        Je = "___FONT_AWESOME___",
        Ze = 16,
        et = "fa",
        tt = "svg-inline--fa",
        nt = "data-fa-i2svg",
        rt = "data-fa-pseudo-element",
        at = "data-fa-pseudo-element-pending",
        ot = "data-prefix",
        it = "data-icon",
        lt = "fontawesome-i2svg",
        st = "async",
        ct = ["HTML", "HEAD", "STYLE", "SCRIPT"],
        ut = (function () {
          try {
            return !0;
          } catch (hl) {
            return !1;
          }
        })(),
        dt = "classic",
        ft = "sharp",
        pt = [dt, ft];
      function mt(e) {
        return new Proxy(e, {
          get: function (e, t) {
            return t in e ? e[t] : e[dt];
          },
        });
      }
      var ht = mt(
          (Fe((De = {}), dt, {
            fa: "solid",
            fas: "solid",
            "fa-solid": "solid",
            far: "regular",
            "fa-regular": "regular",
            fal: "light",
            "fa-light": "light",
            fat: "thin",
            "fa-thin": "thin",
            fad: "duotone",
            "fa-duotone": "duotone",
            fab: "brands",
            "fa-brands": "brands",
            fak: "kit",
            fakd: "kit",
            "fa-kit": "kit",
            "fa-kit-duotone": "kit",
          }),
          Fe(De, ft, {
            fa: "solid",
            fass: "solid",
            "fa-solid": "solid",
            fasr: "regular",
            "fa-regular": "regular",
            fasl: "light",
            "fa-light": "light",
            fast: "thin",
            "fa-thin": "thin",
          }),
          De)
        ),
        gt = mt(
          (Fe((ze = {}), dt, {
            solid: "fas",
            regular: "far",
            light: "fal",
            thin: "fat",
            duotone: "fad",
            brands: "fab",
            kit: "fak",
          }),
          Fe(ze, ft, {
            solid: "fass",
            regular: "fasr",
            light: "fasl",
            thin: "fast",
          }),
          ze)
        ),
        bt = mt(
          (Fe((Be = {}), dt, {
            fab: "fa-brands",
            fad: "fa-duotone",
            fak: "fa-kit",
            fal: "fa-light",
            far: "fa-regular",
            fas: "fa-solid",
            fat: "fa-thin",
          }),
          Fe(Be, ft, {
            fass: "fa-solid",
            fasr: "fa-regular",
            fasl: "fa-light",
            fast: "fa-thin",
          }),
          Be)
        ),
        wt = mt(
          (Fe((We = {}), dt, {
            "fa-brands": "fab",
            "fa-duotone": "fad",
            "fa-kit": "fak",
            "fa-light": "fal",
            "fa-regular": "far",
            "fa-solid": "fas",
            "fa-thin": "fat",
          }),
          Fe(We, ft, {
            "fa-solid": "fass",
            "fa-regular": "fasr",
            "fa-light": "fasl",
            "fa-thin": "fast",
          }),
          We)
        ),
        vt = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,
        yt = "fa-layers-text",
        xt =
          /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,
        kt = mt(
          (Fe((He = {}), dt, {
            900: "fas",
            400: "far",
            normal: "far",
            300: "fal",
            100: "fat",
          }),
          Fe(He, ft, { 900: "fass", 400: "fasr", 300: "fasl", 100: "fast" }),
          He)
        ),
        jt = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        Ct = jt.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
        St = [
          "class",
          "data-prefix",
          "data-icon",
          "data-fa-transform",
          "data-fa-mask",
        ],
        Nt = {
          GROUP: "duotone-group",
          SWAP_OPACITY: "swap-opacity",
          PRIMARY: "primary",
          SECONDARY: "secondary",
        },
        Et = new Set();
      Object.keys(gt[dt]).map(Et.add.bind(Et)),
        Object.keys(gt[ft]).map(Et.add.bind(Et));
      var Rt = []
          .concat(pt, Ae(Et), [
            "2xs",
            "xs",
            "sm",
            "lg",
            "xl",
            "2xl",
            "beat",
            "border",
            "fade",
            "beat-fade",
            "bounce",
            "flip-both",
            "flip-horizontal",
            "flip-vertical",
            "flip",
            "fw",
            "inverse",
            "layers-counter",
            "layers-text",
            "layers",
            "li",
            "pull-left",
            "pull-right",
            "pulse",
            "rotate-180",
            "rotate-270",
            "rotate-90",
            "rotate-by",
            "shake",
            "spin-pulse",
            "spin-reverse",
            "spin",
            "stack-1x",
            "stack-2x",
            "stack",
            "ul",
            Nt.GROUP,
            Nt.SWAP_OPACITY,
            Nt.PRIMARY,
            Nt.SECONDARY,
          ])
          .concat(
            jt.map(function (e) {
              return "".concat(e, "x");
            })
          )
          .concat(
            Ct.map(function (e) {
              return "w-".concat(e);
            })
          ),
        Ft = qe.FontAwesomeConfig || {};
      if ($e && "function" === typeof $e.querySelector) {
        [
          ["data-family-prefix", "familyPrefix"],
          ["data-css-prefix", "cssPrefix"],
          ["data-family-default", "familyDefault"],
          ["data-style-default", "styleDefault"],
          ["data-replacement-class", "replacementClass"],
          ["data-auto-replace-svg", "autoReplaceSvg"],
          ["data-auto-add-css", "autoAddCss"],
          ["data-auto-a11y", "autoA11y"],
          ["data-search-pseudo-elements", "searchPseudoElements"],
          ["data-observe-mutations", "observeMutations"],
          ["data-mutate-approach", "mutateApproach"],
          ["data-keep-original-source", "keepOriginalSource"],
          ["data-measure-performance", "measurePerformance"],
          ["data-show-missing-icons", "showMissingIcons"],
        ].forEach(function (e) {
          var t = Oe(e, 2),
            n = t[0],
            r = t[1],
            a = (function (e) {
              return "" === e || ("false" !== e && ("true" === e || e));
            })(
              (function (e) {
                var t = $e.querySelector("script[" + e + "]");
                if (t) return t.getAttribute(e);
              })(n)
            );
          void 0 !== a && null !== a && (Ft[r] = a);
        });
      }
      var Ot = {
        styleDefault: "solid",
        familyDefault: "classic",
        cssPrefix: et,
        replacementClass: tt,
        autoReplaceSvg: !0,
        autoAddCss: !0,
        autoA11y: !0,
        searchPseudoElements: !1,
        observeMutations: !0,
        mutateApproach: "async",
        keepOriginalSource: !0,
        measurePerformance: !1,
        showMissingIcons: !0,
      };
      Ft.familyPrefix && (Ft.cssPrefix = Ft.familyPrefix);
      var At = Ne(Ne({}, Ot), Ft);
      At.autoReplaceSvg || (At.observeMutations = !1);
      var Pt = {};
      Object.keys(Ot).forEach(function (e) {
        Object.defineProperty(Pt, e, {
          enumerable: !0,
          set: function (t) {
            (At[e] = t),
              Tt.forEach(function (e) {
                return e(Pt);
              });
          },
          get: function () {
            return At[e];
          },
        });
      }),
        Object.defineProperty(Pt, "familyPrefix", {
          enumerable: !0,
          set: function (e) {
            (At.cssPrefix = e),
              Tt.forEach(function (e) {
                return e(Pt);
              });
          },
          get: function () {
            return At.cssPrefix;
          },
        }),
        (qe.FontAwesomeConfig = Pt);
      var Tt = [];
      var Mt = Ze,
        _t = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
      var It = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      function Lt() {
        for (var e = 12, t = ""; e-- > 0; ) t += It[(62 * Math.random()) | 0];
        return t;
      }
      function Ut(e) {
        for (var t = [], n = (e || []).length >>> 0; n--; ) t[n] = e[n];
        return t;
      }
      function Dt(e) {
        return e.classList
          ? Ut(e.classList)
          : (e.getAttribute("class") || "").split(" ").filter(function (e) {
              return e;
            });
      }
      function zt(e) {
        return ""
          .concat(e)
          .replace(/&/g, "&amp;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#39;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
      }
      function Bt(e) {
        return Object.keys(e || {}).reduce(function (t, n) {
          return t + "".concat(n, ": ").concat(e[n].trim(), ";");
        }, "");
      }
      function Wt(e) {
        return (
          e.size !== _t.size ||
          e.x !== _t.x ||
          e.y !== _t.y ||
          e.rotate !== _t.rotate ||
          e.flipX ||
          e.flipY
        );
      }
      var Ht =
        ':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-counter-scale, 0.25));\n          transform: scale(var(--fa-counter-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(var(--fa-li-width, 2em) * -1);\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  -webkit-animation-name: fa-beat;\n          animation-name: fa-beat;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  -webkit-animation-name: fa-bounce;\n          animation-name: fa-bounce;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  -webkit-animation-name: fa-fade;\n          animation-name: fa-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  -webkit-animation-name: fa-beat-fade;\n          animation-name: fa-beat-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  -webkit-animation-name: fa-flip;\n          animation-name: fa-flip;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  -webkit-animation-name: fa-shake;\n          animation-name: fa-shake;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 2s);\n          animation-duration: var(--fa-animation-duration, 2s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));\n          animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    -webkit-animation-delay: -1ms;\n            animation-delay: -1ms;\n    -webkit-animation-duration: 1ms;\n            animation-duration: 1ms;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    -webkit-transition-delay: 0s;\n            transition-delay: 0s;\n    -webkit-transition-duration: 0s;\n            transition-duration: 0s;\n  }\n}\n@-webkit-keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@-webkit-keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@-webkit-keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@-webkit-keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@-webkit-keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@-webkit-keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  -webkit-transform: rotate(var(--fa-rotate-angle, 0));\n          transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}';
      function Vt() {
        var e = et,
          t = tt,
          n = Pt.cssPrefix,
          r = Pt.replacementClass,
          a = Ht;
        if (n !== e || r !== t) {
          var o = new RegExp("\\.".concat(e, "\\-"), "g"),
            i = new RegExp("\\--".concat(e, "\\-"), "g"),
            l = new RegExp("\\.".concat(t), "g");
          a = a
            .replace(o, ".".concat(n, "-"))
            .replace(i, "--".concat(n, "-"))
            .replace(l, ".".concat(r));
        }
        return a;
      }
      var Yt = !1;
      function qt() {
        Pt.autoAddCss &&
          !Yt &&
          (!(function (e) {
            if (e && Ke) {
              var t = $e.createElement("style");
              t.setAttribute("type", "text/css"), (t.innerHTML = e);
              for (
                var n = $e.head.childNodes, r = null, a = n.length - 1;
                a > -1;
                a--
              ) {
                var o = n[a],
                  i = (o.tagName || "").toUpperCase();
                ["STYLE", "LINK"].indexOf(i) > -1 && (r = o);
              }
              $e.head.insertBefore(t, r);
            }
          })(Vt()),
          (Yt = !0));
      }
      var $t = {
          mixout: function () {
            return { dom: { css: Vt, insertCss: qt } };
          },
          hooks: function () {
            return {
              beforeDOMElementCreation: function () {
                qt();
              },
              beforeI2svg: function () {
                qt();
              },
            };
          },
        },
        Gt = qe || {};
      Gt[Je] || (Gt[Je] = {}),
        Gt[Je].styles || (Gt[Je].styles = {}),
        Gt[Je].hooks || (Gt[Je].hooks = {}),
        Gt[Je].shims || (Gt[Je].shims = []);
      var Qt = Gt[Je],
        Kt = [],
        Xt = !1;
      function Jt(e) {
        var t = e.tag,
          n = e.attributes,
          r = void 0 === n ? {} : n,
          a = e.children,
          o = void 0 === a ? [] : a;
        return "string" === typeof e
          ? zt(e)
          : "<"
              .concat(t, " ")
              .concat(
                (function (e) {
                  return Object.keys(e || {})
                    .reduce(function (t, n) {
                      return t + "".concat(n, '="').concat(zt(e[n]), '" ');
                    }, "")
                    .trim();
                })(r),
                ">"
              )
              .concat(o.map(Jt).join(""), "</")
              .concat(t, ">");
      }
      function Zt(e, t, n) {
        if (e && e[t] && e[t][n])
          return { prefix: t, iconName: n, icon: e[t][n] };
      }
      Ke &&
        ((Xt = (
          $e.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/
        ).test($e.readyState)) ||
          $e.addEventListener("DOMContentLoaded", function e() {
            $e.removeEventListener("DOMContentLoaded", e),
              (Xt = 1),
              Kt.map(function (e) {
                return e();
              });
          }));
      var en = function (e, t, n, r) {
        var a,
          o,
          i,
          l = Object.keys(e),
          s = l.length,
          c =
            void 0 !== r
              ? (function (e, t) {
                  return function (n, r, a, o) {
                    return e.call(t, n, r, a, o);
                  };
                })(t, r)
              : t;
        for (
          void 0 === n ? ((a = 1), (i = e[l[0]])) : ((a = 0), (i = n));
          a < s;
          a++
        )
          i = c(i, e[(o = l[a])], o, e);
        return i;
      };
      function tn(e) {
        var t = (function (e) {
          for (var t = [], n = 0, r = e.length; n < r; ) {
            var a = e.charCodeAt(n++);
            if (a >= 55296 && a <= 56319 && n < r) {
              var o = e.charCodeAt(n++);
              56320 == (64512 & o)
                ? t.push(((1023 & a) << 10) + (1023 & o) + 65536)
                : (t.push(a), n--);
            } else t.push(a);
          }
          return t;
        })(e);
        return 1 === t.length ? t[0].toString(16) : null;
      }
      function nn(e) {
        return Object.keys(e).reduce(function (t, n) {
          var r = e[n];
          return !!r.icon ? (t[r.iconName] = r.icon) : (t[n] = r), t;
        }, {});
      }
      function rn(e, t) {
        var n = (
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
          ).skipHooks,
          r = void 0 !== n && n,
          a = nn(t);
        "function" !== typeof Qt.hooks.addPack || r
          ? (Qt.styles[e] = Ne(Ne({}, Qt.styles[e] || {}), a))
          : Qt.hooks.addPack(e, nn(t)),
          "fas" === e && rn("fa", t);
      }
      var an,
        on,
        ln,
        sn = Qt.styles,
        cn = Qt.shims,
        un =
          (Fe((an = {}), dt, Object.values(bt[dt])),
          Fe(an, ft, Object.values(bt[ft])),
          an),
        dn = null,
        fn = {},
        pn = {},
        mn = {},
        hn = {},
        gn = {},
        bn =
          (Fe((on = {}), dt, Object.keys(ht[dt])),
          Fe(on, ft, Object.keys(ht[ft])),
          on);
      function wn(e, t) {
        var n,
          r = t.split("-"),
          a = r[0],
          o = r.slice(1).join("-");
        return a !== e || "" === o || ((n = o), ~Rt.indexOf(n)) ? null : o;
      }
      var vn,
        yn = function () {
          var e = function (e) {
            return en(
              sn,
              function (t, n, r) {
                return (t[r] = en(n, e, {})), t;
              },
              {}
            );
          };
          (fn = e(function (e, t, n) {
            (t[3] && (e[t[3]] = n), t[2]) &&
              t[2]
                .filter(function (e) {
                  return "number" === typeof e;
                })
                .forEach(function (t) {
                  e[t.toString(16)] = n;
                });
            return e;
          })),
            (pn = e(function (e, t, n) {
              ((e[n] = n), t[2]) &&
                t[2]
                  .filter(function (e) {
                    return "string" === typeof e;
                  })
                  .forEach(function (t) {
                    e[t] = n;
                  });
              return e;
            })),
            (gn = e(function (e, t, n) {
              var r = t[2];
              return (
                (e[n] = n),
                r.forEach(function (t) {
                  e[t] = n;
                }),
                e
              );
            }));
          var t = "far" in sn || Pt.autoFetchSvg,
            n = en(
              cn,
              function (e, n) {
                var r = n[0],
                  a = n[1],
                  o = n[2];
                return (
                  "far" !== a || t || (a = "fas"),
                  "string" === typeof r &&
                    (e.names[r] = { prefix: a, iconName: o }),
                  "number" === typeof r &&
                    (e.unicodes[r.toString(16)] = { prefix: a, iconName: o }),
                  e
                );
              },
              { names: {}, unicodes: {} }
            );
          (mn = n.names),
            (hn = n.unicodes),
            (dn = Nn(Pt.styleDefault, { family: Pt.familyDefault }));
        };
      function xn(e, t) {
        return (fn[e] || {})[t];
      }
      function kn(e, t) {
        return (gn[e] || {})[t];
      }
      function jn(e) {
        return mn[e] || { prefix: null, iconName: null };
      }
      function Cn() {
        return dn;
      }
      (vn = function (e) {
        dn = Nn(e.styleDefault, { family: Pt.familyDefault });
      }),
        Tt.push(vn),
        yn();
      var Sn = function () {
        return { prefix: null, iconName: null, rest: [] };
      };
      function Nn(e) {
        var t = (
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          ).family,
          n = void 0 === t ? dt : t,
          r = ht[n][e],
          a = gt[n][e] || gt[n][r],
          o = e in Qt.styles ? e : null;
        return a || o || null;
      }
      var En =
        (Fe((ln = {}), dt, Object.keys(bt[dt])),
        Fe(ln, ft, Object.keys(bt[ft])),
        ln);
      function Rn(e) {
        var t,
          n = (
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          ).skipLookups,
          r = void 0 !== n && n,
          a =
            (Fe((t = {}), dt, "".concat(Pt.cssPrefix, "-").concat(dt)),
            Fe(t, ft, "".concat(Pt.cssPrefix, "-").concat(ft)),
            t),
          o = null,
          i = dt;
        (e.includes(a[dt]) ||
          e.some(function (e) {
            return En[dt].includes(e);
          })) &&
          (i = dt),
          (e.includes(a[ft]) ||
            e.some(function (e) {
              return En[ft].includes(e);
            })) &&
            (i = ft);
        var l = e.reduce(function (e, t) {
          var n = wn(Pt.cssPrefix, t);
          if (
            (sn[t]
              ? ((t = un[i].includes(t) ? wt[i][t] : t),
                (o = t),
                (e.prefix = t))
              : bn[i].indexOf(t) > -1
              ? ((o = t), (e.prefix = Nn(t, { family: i })))
              : n
              ? (e.iconName = n)
              : t !== Pt.replacementClass &&
                t !== a[dt] &&
                t !== a[ft] &&
                e.rest.push(t),
            !r && e.prefix && e.iconName)
          ) {
            var l = "fa" === o ? jn(e.iconName) : {},
              s = kn(e.prefix, e.iconName);
            l.prefix && (o = null),
              (e.iconName = l.iconName || s || e.iconName),
              (e.prefix = l.prefix || e.prefix),
              "far" !== e.prefix ||
                sn.far ||
                !sn.fas ||
                Pt.autoFetchSvg ||
                (e.prefix = "fas");
          }
          return e;
        }, Sn());
        return (
          (e.includes("fa-brands") || e.includes("fab")) && (l.prefix = "fab"),
          (e.includes("fa-duotone") || e.includes("fad")) && (l.prefix = "fad"),
          l.prefix ||
            i !== ft ||
            (!sn.fass && !Pt.autoFetchSvg) ||
            ((l.prefix = "fass"),
            (l.iconName = kn(l.prefix, l.iconName) || l.iconName)),
          ("fa" !== l.prefix && "fa" !== o) || (l.prefix = Cn() || "fas"),
          l
        );
      }
      var Fn = (function () {
          function e() {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.definitions = {});
          }
          var t, n, r;
          return (
            (t = e),
            (n = [
              {
                key: "add",
                value: function () {
                  for (
                    var e = this, t = arguments.length, n = new Array(t), r = 0;
                    r < t;
                    r++
                  )
                    n[r] = arguments[r];
                  var a = n.reduce(this._pullDefinitions, {});
                  Object.keys(a).forEach(function (t) {
                    (e.definitions[t] = Ne(
                      Ne({}, e.definitions[t] || {}),
                      a[t]
                    )),
                      rn(t, a[t]);
                    var n = bt[dt][t];
                    n && rn(n, a[t]), yn();
                  });
                },
              },
              {
                key: "reset",
                value: function () {
                  this.definitions = {};
                },
              },
              {
                key: "_pullDefinitions",
                value: function (e, t) {
                  var n = t.prefix && t.iconName && t.icon ? { 0: t } : t;
                  return (
                    Object.keys(n).map(function (t) {
                      var r = n[t],
                        a = r.prefix,
                        o = r.iconName,
                        i = r.icon,
                        l = i[2];
                      e[a] || (e[a] = {}),
                        l.length > 0 &&
                          l.forEach(function (t) {
                            "string" === typeof t && (e[a][t] = i);
                          }),
                        (e[a][o] = i);
                    }),
                    e
                  );
                },
              },
            ]),
            n && Re(t.prototype, n),
            r && Re(t, r),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            e
          );
        })(),
        On = [],
        An = {},
        Pn = {},
        Tn = Object.keys(Pn);
      function Mn(e, t) {
        for (
          var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2;
          a < n;
          a++
        )
          r[a - 2] = arguments[a];
        return (
          (An[e] || []).forEach(function (e) {
            t = e.apply(null, [t].concat(r));
          }),
          t
        );
      }
      function _n(e) {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        (An[e] || []).forEach(function (e) {
          e.apply(null, n);
        });
      }
      function In() {
        var e = arguments[0],
          t = Array.prototype.slice.call(arguments, 1);
        return Pn[e] ? Pn[e].apply(null, t) : void 0;
      }
      function Ln(e) {
        "fa" === e.prefix && (e.prefix = "fas");
        var t = e.iconName,
          n = e.prefix || Cn();
        if (t)
          return (
            (t = kn(n, t) || t), Zt(Un.definitions, n, t) || Zt(Qt.styles, n, t)
          );
      }
      var Un = new Fn(),
        Dn = {
          i2svg: function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            return Ke
              ? (_n("beforeI2svg", e),
                In("pseudoElements2svg", e),
                In("i2svg", e))
              : Promise.reject("Operation requires a DOM of some kind.");
          },
          watch: function () {
            var e,
              t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              n = t.autoReplaceSvgRoot;
            !1 === Pt.autoReplaceSvg && (Pt.autoReplaceSvg = !0),
              (Pt.observeMutations = !0),
              (e = function () {
                Wn({ autoReplaceSvgRoot: n }), _n("watch", t);
              }),
              Ke && (Xt ? setTimeout(e, 0) : Kt.push(e));
          },
        },
        zn = {
          icon: function (e) {
            if (null === e) return null;
            if ("object" === Ee(e) && e.prefix && e.iconName)
              return {
                prefix: e.prefix,
                iconName: kn(e.prefix, e.iconName) || e.iconName,
              };
            if (Array.isArray(e) && 2 === e.length) {
              var t = 0 === e[1].indexOf("fa-") ? e[1].slice(3) : e[1],
                n = Nn(e[0]);
              return { prefix: n, iconName: kn(n, t) || t };
            }
            if (
              "string" === typeof e &&
              (e.indexOf("".concat(Pt.cssPrefix, "-")) > -1 || e.match(vt))
            ) {
              var r = Rn(e.split(" "), { skipLookups: !0 });
              return {
                prefix: r.prefix || Cn(),
                iconName: kn(r.prefix, r.iconName) || r.iconName,
              };
            }
            if ("string" === typeof e) {
              var a = Cn();
              return { prefix: a, iconName: kn(a, e) || e };
            }
          },
        },
        Bn = {
          noAuto: function () {
            (Pt.autoReplaceSvg = !1), (Pt.observeMutations = !1), _n("noAuto");
          },
          config: Pt,
          dom: Dn,
          parse: zn,
          library: Un,
          findIconDefinition: Ln,
          toHtml: Jt,
        },
        Wn = function () {
          var e = (
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {}
            ).autoReplaceSvgRoot,
            t = void 0 === e ? $e : e;
          (Object.keys(Qt.styles).length > 0 || Pt.autoFetchSvg) &&
            Ke &&
            Pt.autoReplaceSvg &&
            Bn.dom.i2svg({ node: t });
        };
      function Hn(e, t) {
        return (
          Object.defineProperty(e, "abstract", { get: t }),
          Object.defineProperty(e, "html", {
            get: function () {
              return e.abstract.map(function (e) {
                return Jt(e);
              });
            },
          }),
          Object.defineProperty(e, "node", {
            get: function () {
              if (Ke) {
                var t = $e.createElement("div");
                return (t.innerHTML = e.html), t.children;
              }
            },
          }),
          e
        );
      }
      function Vn(e) {
        var t = e.icons,
          n = t.main,
          r = t.mask,
          a = e.prefix,
          o = e.iconName,
          i = e.transform,
          l = e.symbol,
          s = e.title,
          c = e.maskId,
          u = e.titleId,
          d = e.extra,
          f = e.watchable,
          p = void 0 !== f && f,
          m = r.found ? r : n,
          h = m.width,
          g = m.height,
          b = "fak" === a,
          w = [
            Pt.replacementClass,
            o ? "".concat(Pt.cssPrefix, "-").concat(o) : "",
          ]
            .filter(function (e) {
              return -1 === d.classes.indexOf(e);
            })
            .filter(function (e) {
              return "" !== e || !!e;
            })
            .concat(d.classes)
            .join(" "),
          v = {
            children: [],
            attributes: Ne(
              Ne({}, d.attributes),
              {},
              {
                "data-prefix": a,
                "data-icon": o,
                class: w,
                role: d.attributes.role || "img",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 ".concat(h, " ").concat(g),
              }
            ),
          },
          y =
            b && !~d.classes.indexOf("fa-fw")
              ? { width: "".concat((h / g) * 16 * 0.0625, "em") }
              : {};
        p && (v.attributes[nt] = ""),
          s &&
            (v.children.push({
              tag: "title",
              attributes: {
                id:
                  v.attributes["aria-labelledby"] || "title-".concat(u || Lt()),
              },
              children: [s],
            }),
            delete v.attributes.title);
        var x = Ne(
            Ne({}, v),
            {},
            {
              prefix: a,
              iconName: o,
              main: n,
              mask: r,
              maskId: c,
              transform: i,
              symbol: l,
              styles: Ne(Ne({}, y), d.styles),
            }
          ),
          k =
            r.found && n.found
              ? In("generateAbstractMask", x) || {
                  children: [],
                  attributes: {},
                }
              : In("generateAbstractIcon", x) || {
                  children: [],
                  attributes: {},
                },
          j = k.children,
          C = k.attributes;
        return (
          (x.children = j),
          (x.attributes = C),
          l
            ? (function (e) {
                var t = e.prefix,
                  n = e.iconName,
                  r = e.children,
                  a = e.attributes,
                  o = e.symbol,
                  i =
                    !0 === o
                      ? "".concat(t, "-").concat(Pt.cssPrefix, "-").concat(n)
                      : o;
                return [
                  {
                    tag: "svg",
                    attributes: { style: "display: none;" },
                    children: [
                      {
                        tag: "symbol",
                        attributes: Ne(Ne({}, a), {}, { id: i }),
                        children: r,
                      },
                    ],
                  },
                ];
              })(x)
            : (function (e) {
                var t = e.children,
                  n = e.main,
                  r = e.mask,
                  a = e.attributes,
                  o = e.styles,
                  i = e.transform;
                if (Wt(i) && n.found && !r.found) {
                  var l = { x: n.width / n.height / 2, y: 0.5 };
                  a.style = Bt(
                    Ne(
                      Ne({}, o),
                      {},
                      {
                        "transform-origin": ""
                          .concat(l.x + i.x / 16, "em ")
                          .concat(l.y + i.y / 16, "em"),
                      }
                    )
                  );
                }
                return [{ tag: "svg", attributes: a, children: t }];
              })(x)
        );
      }
      function Yn(e) {
        var t = e.content,
          n = e.width,
          r = e.height,
          a = e.transform,
          o = e.title,
          i = e.extra,
          l = e.watchable,
          s = void 0 !== l && l,
          c = Ne(
            Ne(Ne({}, i.attributes), o ? { title: o } : {}),
            {},
            { class: i.classes.join(" ") }
          );
        s && (c[nt] = "");
        var u = Ne({}, i.styles);
        Wt(a) &&
          ((u.transform = (function (e) {
            var t = e.transform,
              n = e.width,
              r = void 0 === n ? Ze : n,
              a = e.height,
              o = void 0 === a ? Ze : a,
              i = e.startCentered,
              l = void 0 !== i && i,
              s = "";
            return (
              (s +=
                l && Xe
                  ? "translate("
                      .concat(t.x / Mt - r / 2, "em, ")
                      .concat(t.y / Mt - o / 2, "em) ")
                  : l
                  ? "translate(calc(-50% + "
                      .concat(t.x / Mt, "em), calc(-50% + ")
                      .concat(t.y / Mt, "em)) ")
                  : "translate("
                      .concat(t.x / Mt, "em, ")
                      .concat(t.y / Mt, "em) ")),
              (s += "scale("
                .concat((t.size / Mt) * (t.flipX ? -1 : 1), ", ")
                .concat((t.size / Mt) * (t.flipY ? -1 : 1), ") ")),
              s + "rotate(".concat(t.rotate, "deg) ")
            );
          })({ transform: a, startCentered: !0, width: n, height: r })),
          (u["-webkit-transform"] = u.transform));
        var d = Bt(u);
        d.length > 0 && (c.style = d);
        var f = [];
        return (
          f.push({ tag: "span", attributes: c, children: [t] }),
          o &&
            f.push({
              tag: "span",
              attributes: { class: "sr-only" },
              children: [o],
            }),
          f
        );
      }
      var qn = Qt.styles;
      function $n(e) {
        var t = e[0],
          n = e[1],
          r = Oe(e.slice(4), 1)[0];
        return {
          found: !0,
          width: t,
          height: n,
          icon: Array.isArray(r)
            ? {
                tag: "g",
                attributes: {
                  class: "".concat(Pt.cssPrefix, "-").concat(Nt.GROUP),
                },
                children: [
                  {
                    tag: "path",
                    attributes: {
                      class: "".concat(Pt.cssPrefix, "-").concat(Nt.SECONDARY),
                      fill: "currentColor",
                      d: r[0],
                    },
                  },
                  {
                    tag: "path",
                    attributes: {
                      class: "".concat(Pt.cssPrefix, "-").concat(Nt.PRIMARY),
                      fill: "currentColor",
                      d: r[1],
                    },
                  },
                ],
              }
            : { tag: "path", attributes: { fill: "currentColor", d: r } },
        };
      }
      var Gn = { found: !1, width: 512, height: 512 };
      function Qn(e, t) {
        var n = t;
        return (
          "fa" === t && null !== Pt.styleDefault && (t = Cn()),
          new Promise(function (r, a) {
            In("missingIconAbstract");
            if ("fa" === n) {
              var o = jn(e) || {};
              (e = o.iconName || e), (t = o.prefix || t);
            }
            if (e && t && qn[t] && qn[t][e]) return r($n(qn[t][e]));
            !(function (e, t) {
              ut ||
                Pt.showMissingIcons ||
                !e ||
                console.error(
                  'Icon with name "'
                    .concat(e, '" and prefix "')
                    .concat(t, '" is missing.')
                );
            })(e, t),
              r(
                Ne(
                  Ne({}, Gn),
                  {},
                  {
                    icon:
                      (Pt.showMissingIcons && e && In("missingIconAbstract")) ||
                      {},
                  }
                )
              );
          })
        );
      }
      var Kn = function () {},
        Xn =
          Pt.measurePerformance && Qe && Qe.mark && Qe.measure
            ? Qe
            : { mark: Kn, measure: Kn },
        Jn = 'FA "6.5.2"',
        Zn = function (e) {
          Xn.mark("".concat(Jn, " ").concat(e, " ends")),
            Xn.measure(
              "".concat(Jn, " ").concat(e),
              "".concat(Jn, " ").concat(e, " begins"),
              "".concat(Jn, " ").concat(e, " ends")
            );
        },
        er = {
          begin: function (e) {
            return (
              Xn.mark("".concat(Jn, " ").concat(e, " begins")),
              function () {
                return Zn(e);
              }
            );
          },
          end: Zn,
        },
        tr = function () {};
      function nr(e) {
        return "string" === typeof (e.getAttribute ? e.getAttribute(nt) : null);
      }
      function rr(e) {
        return $e.createElementNS("http://www.w3.org/2000/svg", e);
      }
      function ar(e) {
        return $e.createElement(e);
      }
      function or(e) {
        var t = (
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          ).ceFn,
          n = void 0 === t ? ("svg" === e.tag ? rr : ar) : t;
        if ("string" === typeof e) return $e.createTextNode(e);
        var r = n(e.tag);
        return (
          Object.keys(e.attributes || []).forEach(function (t) {
            r.setAttribute(t, e.attributes[t]);
          }),
          (e.children || []).forEach(function (e) {
            r.appendChild(or(e, { ceFn: n }));
          }),
          r
        );
      }
      var ir = {
        replace: function (e) {
          var t = e[0];
          if (t.parentNode)
            if (
              (e[1].forEach(function (e) {
                t.parentNode.insertBefore(or(e), t);
              }),
              null === t.getAttribute(nt) && Pt.keepOriginalSource)
            ) {
              var n = $e.createComment(
                (function (e) {
                  var t = " ".concat(e.outerHTML, " ");
                  return "".concat(t, "Font Awesome fontawesome.com ");
                })(t)
              );
              t.parentNode.replaceChild(n, t);
            } else t.remove();
        },
        nest: function (e) {
          var t = e[0],
            n = e[1];
          if (~Dt(t).indexOf(Pt.replacementClass)) return ir.replace(e);
          var r = new RegExp("".concat(Pt.cssPrefix, "-.*"));
          if ((delete n[0].attributes.id, n[0].attributes.class)) {
            var a = n[0].attributes.class.split(" ").reduce(
              function (e, t) {
                return (
                  t === Pt.replacementClass || t.match(r)
                    ? e.toSvg.push(t)
                    : e.toNode.push(t),
                  e
                );
              },
              { toNode: [], toSvg: [] }
            );
            (n[0].attributes.class = a.toSvg.join(" ")),
              0 === a.toNode.length
                ? t.removeAttribute("class")
                : t.setAttribute("class", a.toNode.join(" "));
          }
          var o = n
            .map(function (e) {
              return Jt(e);
            })
            .join("\n");
          t.setAttribute(nt, ""), (t.innerHTML = o);
        },
      };
      function lr(e) {
        e();
      }
      function sr(e, t) {
        var n = "function" === typeof t ? t : tr;
        if (0 === e.length) n();
        else {
          var r = lr;
          Pt.mutateApproach === st && (r = qe.requestAnimationFrame || lr),
            r(function () {
              var t =
                  !0 === Pt.autoReplaceSvg
                    ? ir.replace
                    : ir[Pt.autoReplaceSvg] || ir.replace,
                r = er.begin("mutate");
              e.map(t), r(), n();
            });
        }
      }
      var cr = !1;
      function ur() {
        cr = !0;
      }
      function dr() {
        cr = !1;
      }
      var fr = null;
      function pr(e) {
        if (Ge && Pt.observeMutations) {
          var t = e.treeCallback,
            n = void 0 === t ? tr : t,
            r = e.nodeCallback,
            a = void 0 === r ? tr : r,
            o = e.pseudoElementsCallback,
            i = void 0 === o ? tr : o,
            l = e.observeMutationsRoot,
            s = void 0 === l ? $e : l;
          (fr = new Ge(function (e) {
            if (!cr) {
              var t = Cn();
              Ut(e).forEach(function (e) {
                if (
                  ("childList" === e.type &&
                    e.addedNodes.length > 0 &&
                    !nr(e.addedNodes[0]) &&
                    (Pt.searchPseudoElements && i(e.target), n(e.target)),
                  "attributes" === e.type &&
                    e.target.parentNode &&
                    Pt.searchPseudoElements &&
                    i(e.target.parentNode),
                  "attributes" === e.type &&
                    nr(e.target) &&
                    ~St.indexOf(e.attributeName))
                )
                  if (
                    "class" === e.attributeName &&
                    (function (e) {
                      var t = e.getAttribute ? e.getAttribute(ot) : null,
                        n = e.getAttribute ? e.getAttribute(it) : null;
                      return t && n;
                    })(e.target)
                  ) {
                    var r = Rn(Dt(e.target)),
                      o = r.prefix,
                      l = r.iconName;
                    e.target.setAttribute(ot, o || t),
                      l && e.target.setAttribute(it, l);
                  } else
                    (s = e.target) &&
                      s.classList &&
                      s.classList.contains &&
                      s.classList.contains(Pt.replacementClass) &&
                      a(e.target);
                var s;
              });
            }
          })),
            Ke &&
              fr.observe(s, {
                childList: !0,
                attributes: !0,
                characterData: !0,
                subtree: !0,
              });
        }
      }
      function mr(e) {
        var t = e.getAttribute("data-prefix"),
          n = e.getAttribute("data-icon"),
          r = void 0 !== e.innerText ? e.innerText.trim() : "",
          a = Rn(Dt(e));
        return (
          a.prefix || (a.prefix = Cn()),
          t && n && ((a.prefix = t), (a.iconName = n)),
          (a.iconName && a.prefix) ||
            (a.prefix &&
              r.length > 0 &&
              (a.iconName =
                (function (e, t) {
                  return (pn[e] || {})[t];
                })(a.prefix, e.innerText) || xn(a.prefix, tn(e.innerText))),
            !a.iconName &&
              Pt.autoFetchSvg &&
              e.firstChild &&
              e.firstChild.nodeType === Node.TEXT_NODE &&
              (a.iconName = e.firstChild.data)),
          a
        );
      }
      function hr(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { styleParser: !0 },
          n = mr(e),
          r = n.iconName,
          a = n.prefix,
          o = n.rest,
          i = (function (e) {
            var t = Ut(e.attributes).reduce(function (e, t) {
                return (
                  "class" !== e.name &&
                    "style" !== e.name &&
                    (e[t.name] = t.value),
                  e
                );
              }, {}),
              n = e.getAttribute("title"),
              r = e.getAttribute("data-fa-title-id");
            return (
              Pt.autoA11y &&
                (n
                  ? (t["aria-labelledby"] = ""
                      .concat(Pt.replacementClass, "-title-")
                      .concat(r || Lt()))
                  : ((t["aria-hidden"] = "true"), (t.focusable = "false"))),
              t
            );
          })(e),
          l = Mn("parseNodeAttributes", {}, e),
          s = t.styleParser
            ? (function (e) {
                var t = e.getAttribute("style"),
                  n = [];
                return (
                  t &&
                    (n = t.split(";").reduce(function (e, t) {
                      var n = t.split(":"),
                        r = n[0],
                        a = n.slice(1);
                      return (
                        r && a.length > 0 && (e[r] = a.join(":").trim()), e
                      );
                    }, {})),
                  n
                );
              })(e)
            : [];
        return Ne(
          {
            iconName: r,
            title: e.getAttribute("title"),
            titleId: e.getAttribute("data-fa-title-id"),
            prefix: a,
            transform: _t,
            mask: { iconName: null, prefix: null, rest: [] },
            maskId: null,
            symbol: !1,
            extra: { classes: o, styles: s, attributes: i },
          },
          l
        );
      }
      var gr = Qt.styles;
      function br(e) {
        var t =
          "nest" === Pt.autoReplaceSvg ? hr(e, { styleParser: !1 }) : hr(e);
        return ~t.extra.classes.indexOf(yt)
          ? In("generateLayersText", e, t)
          : In("generateSvgReplacementMutation", e, t);
      }
      var wr = new Set();
      function vr(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!Ke) return Promise.resolve();
        var n = $e.documentElement.classList,
          r = function (e) {
            return n.add("".concat(lt, "-").concat(e));
          },
          a = function (e) {
            return n.remove("".concat(lt, "-").concat(e));
          },
          o = Pt.autoFetchSvg
            ? wr
            : pt
                .map(function (e) {
                  return "fa-".concat(e);
                })
                .concat(Object.keys(gr));
        o.includes("fa") || o.push("fa");
        var i = [".".concat(yt, ":not([").concat(nt, "])")]
          .concat(
            o.map(function (e) {
              return ".".concat(e, ":not([").concat(nt, "])");
            })
          )
          .join(", ");
        if (0 === i.length) return Promise.resolve();
        var l = [];
        try {
          l = Ut(e.querySelectorAll(i));
        } catch (hl) {}
        if (!(l.length > 0)) return Promise.resolve();
        r("pending"), a("complete");
        var s = er.begin("onTree"),
          c = l.reduce(function (e, t) {
            try {
              var n = br(t);
              n && e.push(n);
            } catch (hl) {
              ut || ("MissingIcon" === hl.name && console.error(hl));
            }
            return e;
          }, []);
        return new Promise(function (e, n) {
          Promise.all(c)
            .then(function (n) {
              sr(n, function () {
                r("active"),
                  r("complete"),
                  a("pending"),
                  "function" === typeof t && t(),
                  s(),
                  e();
              });
            })
            .catch(function (e) {
              s(), n(e);
            });
        });
      }
      function yr(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        br(e).then(function (e) {
          e && sr([e], t);
        });
      }
      pt.map(function (e) {
        wr.add("fa-".concat(e));
      }),
        Object.keys(ht[dt]).map(wr.add.bind(wr)),
        Object.keys(ht[ft]).map(wr.add.bind(wr)),
        (wr = Ae(wr));
      var xr = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = t.transform,
            r = void 0 === n ? _t : n,
            a = t.symbol,
            o = void 0 !== a && a,
            i = t.mask,
            l = void 0 === i ? null : i,
            s = t.maskId,
            c = void 0 === s ? null : s,
            u = t.title,
            d = void 0 === u ? null : u,
            f = t.titleId,
            p = void 0 === f ? null : f,
            m = t.classes,
            h = void 0 === m ? [] : m,
            g = t.attributes,
            b = void 0 === g ? {} : g,
            w = t.styles,
            v = void 0 === w ? {} : w;
          if (e) {
            var y = e.prefix,
              x = e.iconName,
              k = e.icon;
            return Hn(Ne({ type: "icon" }, e), function () {
              return (
                _n("beforeDOMElementCreation", {
                  iconDefinition: e,
                  params: t,
                }),
                Pt.autoA11y &&
                  (d
                    ? (b["aria-labelledby"] = ""
                        .concat(Pt.replacementClass, "-title-")
                        .concat(p || Lt()))
                    : ((b["aria-hidden"] = "true"), (b.focusable = "false"))),
                Vn({
                  icons: {
                    main: $n(k),
                    mask: l
                      ? $n(l.icon)
                      : { found: !1, width: null, height: null, icon: {} },
                  },
                  prefix: y,
                  iconName: x,
                  transform: Ne(Ne({}, _t), r),
                  symbol: o,
                  title: d,
                  maskId: c,
                  titleId: p,
                  extra: { attributes: b, styles: v, classes: h },
                })
              );
            });
          }
        },
        kr = {
          mixout: function () {
            return {
              icon:
                ((e = xr),
                function (t) {
                  var n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    r = (t || {}).icon ? t : Ln(t || {}),
                    a = n.mask;
                  return (
                    a && (a = (a || {}).icon ? a : Ln(a || {})),
                    e(r, Ne(Ne({}, n), {}, { mask: a }))
                  );
                }),
            };
            var e;
          },
          hooks: function () {
            return {
              mutationObserverCallbacks: function (e) {
                return (e.treeCallback = vr), (e.nodeCallback = yr), e;
              },
            };
          },
          provides: function (e) {
            (e.i2svg = function (e) {
              var t = e.node,
                n = void 0 === t ? $e : t,
                r = e.callback;
              return vr(n, void 0 === r ? function () {} : r);
            }),
              (e.generateSvgReplacementMutation = function (e, t) {
                var n = t.iconName,
                  r = t.title,
                  a = t.titleId,
                  o = t.prefix,
                  i = t.transform,
                  l = t.symbol,
                  s = t.mask,
                  c = t.maskId,
                  u = t.extra;
                return new Promise(function (t, d) {
                  Promise.all([
                    Qn(n, o),
                    s.iconName
                      ? Qn(s.iconName, s.prefix)
                      : Promise.resolve({
                          found: !1,
                          width: 512,
                          height: 512,
                          icon: {},
                        }),
                  ])
                    .then(function (s) {
                      var d = Oe(s, 2),
                        f = d[0],
                        p = d[1];
                      t([
                        e,
                        Vn({
                          icons: { main: f, mask: p },
                          prefix: o,
                          iconName: n,
                          transform: i,
                          symbol: l,
                          maskId: c,
                          title: r,
                          titleId: a,
                          extra: u,
                          watchable: !0,
                        }),
                      ]);
                    })
                    .catch(d);
                });
              }),
              (e.generateAbstractIcon = function (e) {
                var t,
                  n = e.children,
                  r = e.attributes,
                  a = e.main,
                  o = e.transform,
                  i = Bt(e.styles);
                return (
                  i.length > 0 && (r.style = i),
                  Wt(o) &&
                    (t = In("generateAbstractTransformGrouping", {
                      main: a,
                      transform: o,
                      containerWidth: a.width,
                      iconWidth: a.width,
                    })),
                  n.push(t || a.icon),
                  { children: n, attributes: r }
                );
              });
          },
        },
        jr = {
          mixout: function () {
            return {
              layer: function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  n = t.classes,
                  r = void 0 === n ? [] : n;
                return Hn({ type: "layer" }, function () {
                  _n("beforeDOMElementCreation", { assembler: e, params: t });
                  var n = [];
                  return (
                    e(function (e) {
                      Array.isArray(e)
                        ? e.map(function (e) {
                            n = n.concat(e.abstract);
                          })
                        : (n = n.concat(e.abstract));
                    }),
                    [
                      {
                        tag: "span",
                        attributes: {
                          class: ["".concat(Pt.cssPrefix, "-layers")]
                            .concat(Ae(r))
                            .join(" "),
                        },
                        children: n,
                      },
                    ]
                  );
                });
              },
            };
          },
        },
        Cr = {
          mixout: function () {
            return {
              counter: function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  n = t.title,
                  r = void 0 === n ? null : n,
                  a = t.classes,
                  o = void 0 === a ? [] : a,
                  i = t.attributes,
                  l = void 0 === i ? {} : i,
                  s = t.styles,
                  c = void 0 === s ? {} : s;
                return Hn({ type: "counter", content: e }, function () {
                  return (
                    _n("beforeDOMElementCreation", { content: e, params: t }),
                    (function (e) {
                      var t = e.content,
                        n = e.title,
                        r = e.extra,
                        a = Ne(
                          Ne(Ne({}, r.attributes), n ? { title: n } : {}),
                          {},
                          { class: r.classes.join(" ") }
                        ),
                        o = Bt(r.styles);
                      o.length > 0 && (a.style = o);
                      var i = [];
                      return (
                        i.push({ tag: "span", attributes: a, children: [t] }),
                        n &&
                          i.push({
                            tag: "span",
                            attributes: { class: "sr-only" },
                            children: [n],
                          }),
                        i
                      );
                    })({
                      content: e.toString(),
                      title: r,
                      extra: {
                        attributes: l,
                        styles: c,
                        classes: [
                          "".concat(Pt.cssPrefix, "-layers-counter"),
                        ].concat(Ae(o)),
                      },
                    })
                  );
                });
              },
            };
          },
        },
        Sr = {
          mixout: function () {
            return {
              text: function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  n = t.transform,
                  r = void 0 === n ? _t : n,
                  a = t.title,
                  o = void 0 === a ? null : a,
                  i = t.classes,
                  l = void 0 === i ? [] : i,
                  s = t.attributes,
                  c = void 0 === s ? {} : s,
                  u = t.styles,
                  d = void 0 === u ? {} : u;
                return Hn({ type: "text", content: e }, function () {
                  return (
                    _n("beforeDOMElementCreation", { content: e, params: t }),
                    Yn({
                      content: e,
                      transform: Ne(Ne({}, _t), r),
                      title: o,
                      extra: {
                        attributes: c,
                        styles: d,
                        classes: [
                          "".concat(Pt.cssPrefix, "-layers-text"),
                        ].concat(Ae(l)),
                      },
                    })
                  );
                });
              },
            };
          },
          provides: function (e) {
            e.generateLayersText = function (e, t) {
              var n = t.title,
                r = t.transform,
                a = t.extra,
                o = null,
                i = null;
              if (Xe) {
                var l = parseInt(getComputedStyle(e).fontSize, 10),
                  s = e.getBoundingClientRect();
                (o = s.width / l), (i = s.height / l);
              }
              return (
                Pt.autoA11y && !n && (a.attributes["aria-hidden"] = "true"),
                Promise.resolve([
                  e,
                  Yn({
                    content: e.innerHTML,
                    width: o,
                    height: i,
                    transform: r,
                    title: n,
                    extra: a,
                    watchable: !0,
                  }),
                ])
              );
            };
          },
        },
        Nr = new RegExp('"', "ug"),
        Er = [1105920, 1112319];
      function Rr(e, t) {
        var n = "".concat(at).concat(t.replace(":", "-"));
        return new Promise(function (r, a) {
          if (null !== e.getAttribute(n)) return r();
          var o = Ut(e.children).filter(function (e) {
              return e.getAttribute(rt) === t;
            })[0],
            i = qe.getComputedStyle(e, t),
            l = i.getPropertyValue("font-family").match(xt),
            s = i.getPropertyValue("font-weight"),
            c = i.getPropertyValue("content");
          if (o && !l) return e.removeChild(o), r();
          if (l && "none" !== c && "" !== c) {
            var u = i.getPropertyValue("content"),
              d = ~["Sharp"].indexOf(l[2]) ? ft : dt,
              f = ~[
                "Solid",
                "Regular",
                "Light",
                "Thin",
                "Duotone",
                "Brands",
                "Kit",
              ].indexOf(l[2])
                ? gt[d][l[2].toLowerCase()]
                : kt[d][s],
              p = (function (e) {
                var t = e.replace(Nr, ""),
                  n = (function (e, t) {
                    var n,
                      r = e.length,
                      a = e.charCodeAt(t);
                    return a >= 55296 &&
                      a <= 56319 &&
                      r > t + 1 &&
                      (n = e.charCodeAt(t + 1)) >= 56320 &&
                      n <= 57343
                      ? 1024 * (a - 55296) + n - 56320 + 65536
                      : a;
                  })(t, 0),
                  r = n >= Er[0] && n <= Er[1],
                  a = 2 === t.length && t[0] === t[1];
                return { value: tn(a ? t[0] : t), isSecondary: r || a };
              })(u),
              m = p.value,
              h = p.isSecondary,
              g = l[0].startsWith("FontAwesome"),
              b = xn(f, m),
              w = b;
            if (g) {
              var v = (function (e) {
                var t = hn[e],
                  n = xn("fas", e);
                return (
                  t ||
                  (n ? { prefix: "fas", iconName: n } : null) || {
                    prefix: null,
                    iconName: null,
                  }
                );
              })(m);
              v.iconName && v.prefix && ((b = v.iconName), (f = v.prefix));
            }
            if (
              !b ||
              h ||
              (o && o.getAttribute(ot) === f && o.getAttribute(it) === w)
            )
              r();
            else {
              e.setAttribute(n, w), o && e.removeChild(o);
              var y = {
                  iconName: null,
                  title: null,
                  titleId: null,
                  prefix: null,
                  transform: _t,
                  symbol: !1,
                  mask: { iconName: null, prefix: null, rest: [] },
                  maskId: null,
                  extra: { classes: [], styles: {}, attributes: {} },
                },
                x = y.extra;
              (x.attributes[rt] = t),
                Qn(b, f)
                  .then(function (a) {
                    var o = Vn(
                        Ne(
                          Ne({}, y),
                          {},
                          {
                            icons: { main: a, mask: Sn() },
                            prefix: f,
                            iconName: w,
                            extra: x,
                            watchable: !0,
                          }
                        )
                      ),
                      i = $e.createElementNS(
                        "http://www.w3.org/2000/svg",
                        "svg"
                      );
                    "::before" === t
                      ? e.insertBefore(i, e.firstChild)
                      : e.appendChild(i),
                      (i.outerHTML = o
                        .map(function (e) {
                          return Jt(e);
                        })
                        .join("\n")),
                      e.removeAttribute(n),
                      r();
                  })
                  .catch(a);
            }
          } else r();
        });
      }
      function Fr(e) {
        return Promise.all([Rr(e, "::before"), Rr(e, "::after")]);
      }
      function Or(e) {
        return (
          e.parentNode !== document.head &&
          !~ct.indexOf(e.tagName.toUpperCase()) &&
          !e.getAttribute(rt) &&
          (!e.parentNode || "svg" !== e.parentNode.tagName)
        );
      }
      function Ar(e) {
        if (Ke)
          return new Promise(function (t, n) {
            var r = Ut(e.querySelectorAll("*")).filter(Or).map(Fr),
              a = er.begin("searchPseudoElements");
            ur(),
              Promise.all(r)
                .then(function () {
                  a(), dr(), t();
                })
                .catch(function () {
                  a(), dr(), n();
                });
          });
      }
      var Pr = !1,
        Tr = function (e) {
          return e
            .toLowerCase()
            .split(" ")
            .reduce(
              function (e, t) {
                var n = t.toLowerCase().split("-"),
                  r = n[0],
                  a = n.slice(1).join("-");
                if (r && "h" === a) return (e.flipX = !0), e;
                if (r && "v" === a) return (e.flipY = !0), e;
                if (((a = parseFloat(a)), isNaN(a))) return e;
                switch (r) {
                  case "grow":
                    e.size = e.size + a;
                    break;
                  case "shrink":
                    e.size = e.size - a;
                    break;
                  case "left":
                    e.x = e.x - a;
                    break;
                  case "right":
                    e.x = e.x + a;
                    break;
                  case "up":
                    e.y = e.y - a;
                    break;
                  case "down":
                    e.y = e.y + a;
                    break;
                  case "rotate":
                    e.rotate = e.rotate + a;
                }
                return e;
              },
              { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 }
            );
        },
        Mr = {
          mixout: function () {
            return {
              parse: {
                transform: function (e) {
                  return Tr(e);
                },
              },
            };
          },
          hooks: function () {
            return {
              parseNodeAttributes: function (e, t) {
                var n = t.getAttribute("data-fa-transform");
                return n && (e.transform = Tr(n)), e;
              },
            };
          },
          provides: function (e) {
            e.generateAbstractTransformGrouping = function (e) {
              var t = e.main,
                n = e.transform,
                r = e.containerWidth,
                a = e.iconWidth,
                o = { transform: "translate(".concat(r / 2, " 256)") },
                i = "translate(".concat(32 * n.x, ", ").concat(32 * n.y, ") "),
                l = "scale("
                  .concat((n.size / 16) * (n.flipX ? -1 : 1), ", ")
                  .concat((n.size / 16) * (n.flipY ? -1 : 1), ") "),
                s = "rotate(".concat(n.rotate, " 0 0)"),
                c = {
                  outer: o,
                  inner: {
                    transform: "".concat(i, " ").concat(l, " ").concat(s),
                  },
                  path: {
                    transform: "translate(".concat((a / 2) * -1, " -256)"),
                  },
                };
              return {
                tag: "g",
                attributes: Ne({}, c.outer),
                children: [
                  {
                    tag: "g",
                    attributes: Ne({}, c.inner),
                    children: [
                      {
                        tag: t.icon.tag,
                        children: t.icon.children,
                        attributes: Ne(Ne({}, t.icon.attributes), c.path),
                      },
                    ],
                  },
                ],
              };
            };
          },
        },
        _r = { x: 0, y: 0, width: "100%", height: "100%" };
      function Ir(e) {
        var t =
          !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return (
          e.attributes &&
            (e.attributes.fill || t) &&
            (e.attributes.fill = "black"),
          e
        );
      }
      var Lr = {
          hooks: function () {
            return {
              parseNodeAttributes: function (e, t) {
                var n = t.getAttribute("data-fa-mask"),
                  r = n
                    ? Rn(
                        n.split(" ").map(function (e) {
                          return e.trim();
                        })
                      )
                    : Sn();
                return (
                  r.prefix || (r.prefix = Cn()),
                  (e.mask = r),
                  (e.maskId = t.getAttribute("data-fa-mask-id")),
                  e
                );
              },
            };
          },
          provides: function (e) {
            e.generateAbstractMask = function (e) {
              var t,
                n = e.children,
                r = e.attributes,
                a = e.main,
                o = e.mask,
                i = e.maskId,
                l = e.transform,
                s = a.width,
                c = a.icon,
                u = o.width,
                d = o.icon,
                f = (function (e) {
                  var t = e.transform,
                    n = e.containerWidth,
                    r = e.iconWidth,
                    a = { transform: "translate(".concat(n / 2, " 256)") },
                    o = "translate("
                      .concat(32 * t.x, ", ")
                      .concat(32 * t.y, ") "),
                    i = "scale("
                      .concat((t.size / 16) * (t.flipX ? -1 : 1), ", ")
                      .concat((t.size / 16) * (t.flipY ? -1 : 1), ") "),
                    l = "rotate(".concat(t.rotate, " 0 0)");
                  return {
                    outer: a,
                    inner: {
                      transform: "".concat(o, " ").concat(i, " ").concat(l),
                    },
                    path: {
                      transform: "translate(".concat((r / 2) * -1, " -256)"),
                    },
                  };
                })({ transform: l, containerWidth: u, iconWidth: s }),
                p = {
                  tag: "rect",
                  attributes: Ne(Ne({}, _r), {}, { fill: "white" }),
                },
                m = c.children ? { children: c.children.map(Ir) } : {},
                h = {
                  tag: "g",
                  attributes: Ne({}, f.inner),
                  children: [
                    Ir(
                      Ne(
                        {
                          tag: c.tag,
                          attributes: Ne(Ne({}, c.attributes), f.path),
                        },
                        m
                      )
                    ),
                  ],
                },
                g = { tag: "g", attributes: Ne({}, f.outer), children: [h] },
                b = "mask-".concat(i || Lt()),
                w = "clip-".concat(i || Lt()),
                v = {
                  tag: "mask",
                  attributes: Ne(
                    Ne({}, _r),
                    {},
                    {
                      id: b,
                      maskUnits: "userSpaceOnUse",
                      maskContentUnits: "userSpaceOnUse",
                    }
                  ),
                  children: [p, g],
                },
                y = {
                  tag: "defs",
                  children: [
                    {
                      tag: "clipPath",
                      attributes: { id: w },
                      children: ((t = d), "g" === t.tag ? t.children : [t]),
                    },
                    v,
                  ],
                };
              return (
                n.push(y, {
                  tag: "rect",
                  attributes: Ne(
                    {
                      fill: "currentColor",
                      "clip-path": "url(#".concat(w, ")"),
                      mask: "url(#".concat(b, ")"),
                    },
                    _r
                  ),
                }),
                { children: n, attributes: r }
              );
            };
          },
        },
        Ur = {
          provides: function (e) {
            var t = !1;
            qe.matchMedia &&
              (t = qe.matchMedia("(prefers-reduced-motion: reduce)").matches),
              (e.missingIconAbstract = function () {
                var e = [],
                  n = { fill: "currentColor" },
                  r = {
                    attributeType: "XML",
                    repeatCount: "indefinite",
                    dur: "2s",
                  };
                e.push({
                  tag: "path",
                  attributes: Ne(
                    Ne({}, n),
                    {},
                    {
                      d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z",
                    }
                  ),
                });
                var a = Ne(Ne({}, r), {}, { attributeName: "opacity" }),
                  o = {
                    tag: "circle",
                    attributes: Ne(
                      Ne({}, n),
                      {},
                      { cx: "256", cy: "364", r: "28" }
                    ),
                    children: [],
                  };
                return (
                  t ||
                    o.children.push(
                      {
                        tag: "animate",
                        attributes: Ne(
                          Ne({}, r),
                          {},
                          { attributeName: "r", values: "28;14;28;28;14;28;" }
                        ),
                      },
                      {
                        tag: "animate",
                        attributes: Ne(
                          Ne({}, a),
                          {},
                          { values: "1;0;1;1;0;1;" }
                        ),
                      }
                    ),
                  e.push(o),
                  e.push({
                    tag: "path",
                    attributes: Ne(
                      Ne({}, n),
                      {},
                      {
                        opacity: "1",
                        d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z",
                      }
                    ),
                    children: t
                      ? []
                      : [
                          {
                            tag: "animate",
                            attributes: Ne(
                              Ne({}, a),
                              {},
                              { values: "1;0;0;0;0;1;" }
                            ),
                          },
                        ],
                  }),
                  t ||
                    e.push({
                      tag: "path",
                      attributes: Ne(
                        Ne({}, n),
                        {},
                        {
                          opacity: "0",
                          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z",
                        }
                      ),
                      children: [
                        {
                          tag: "animate",
                          attributes: Ne(
                            Ne({}, a),
                            {},
                            { values: "0;0;1;1;0;0;" }
                          ),
                        },
                      ],
                    }),
                  { tag: "g", attributes: { class: "missing" }, children: e }
                );
              });
          },
        };
      !(function (e, t) {
        var n = t.mixoutsTo;
        (On = e),
          (An = {}),
          Object.keys(Pn).forEach(function (e) {
            -1 === Tn.indexOf(e) && delete Pn[e];
          }),
          On.forEach(function (e) {
            var t = e.mixout ? e.mixout() : {};
            if (
              (Object.keys(t).forEach(function (e) {
                "function" === typeof t[e] && (n[e] = t[e]),
                  "object" === Ee(t[e]) &&
                    Object.keys(t[e]).forEach(function (r) {
                      n[e] || (n[e] = {}), (n[e][r] = t[e][r]);
                    });
              }),
              e.hooks)
            ) {
              var r = e.hooks();
              Object.keys(r).forEach(function (e) {
                An[e] || (An[e] = []), An[e].push(r[e]);
              });
            }
            e.provides && e.provides(Pn);
          });
      })(
        [
          $t,
          kr,
          jr,
          Cr,
          Sr,
          {
            hooks: function () {
              return {
                mutationObserverCallbacks: function (e) {
                  return (e.pseudoElementsCallback = Ar), e;
                },
              };
            },
            provides: function (e) {
              e.pseudoElements2svg = function (e) {
                var t = e.node,
                  n = void 0 === t ? $e : t;
                Pt.searchPseudoElements && Ar(n);
              };
            },
          },
          {
            mixout: function () {
              return {
                dom: {
                  unwatch: function () {
                    ur(), (Pr = !0);
                  },
                },
              };
            },
            hooks: function () {
              return {
                bootstrap: function () {
                  pr(Mn("mutationObserverCallbacks", {}));
                },
                noAuto: function () {
                  fr && fr.disconnect();
                },
                watch: function (e) {
                  var t = e.observeMutationsRoot;
                  Pr
                    ? dr()
                    : pr(
                        Mn("mutationObserverCallbacks", {
                          observeMutationsRoot: t,
                        })
                      );
                },
              };
            },
          },
          Mr,
          Lr,
          Ur,
          {
            hooks: function () {
              return {
                parseNodeAttributes: function (e, t) {
                  var n = t.getAttribute("data-fa-symbol"),
                    r = null !== n && ("" === n || n);
                  return (e.symbol = r), e;
                },
              };
            },
          },
        ],
        { mixoutsTo: Bn }
      );
      var Dr = Bn.parse,
        zr = Bn.icon,
        Br = n(173),
        Wr = n.n(Br);
      function Hr(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Vr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Hr(Object(n), !0).forEach(function (t) {
                qr(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Hr(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function Yr(e) {
        return (
          (Yr =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          Yr(e)
        );
      }
      function qr(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function $r(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              o = Object.keys(e);
            for (r = 0; r < o.length; r++)
              (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function Gr(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return Qr(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return Qr(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return Qr(e, t);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function Qr(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function Kr(e) {
        return (
          (t = e),
          (t -= 0) === t
            ? e
            : (e = e.replace(/[\-_\s]+(.)?/g, function (e, t) {
                return t ? t.toUpperCase() : "";
              }))
                .substr(0, 1)
                .toLowerCase() + e.substr(1)
        );
        var t;
      }
      var Xr = ["style"];
      var Jr = !1;
      try {
        Jr = !0;
      } catch (hl) {}
      function Zr(e) {
        return e && "object" === Yr(e) && e.prefix && e.iconName && e.icon
          ? e
          : Dr.icon
          ? Dr.icon(e)
          : null === e
          ? null
          : e && "object" === Yr(e) && e.prefix && e.iconName
          ? e
          : Array.isArray(e) && 2 === e.length
          ? { prefix: e[0], iconName: e[1] }
          : "string" === typeof e
          ? { prefix: "fas", iconName: e }
          : void 0;
      }
      function ea(e, t) {
        return (Array.isArray(t) && t.length > 0) || (!Array.isArray(t) && t)
          ? qr({}, e, t)
          : {};
      }
      var ta = {
          border: !1,
          className: "",
          mask: null,
          maskId: null,
          fixedWidth: !1,
          inverse: !1,
          flip: !1,
          icon: null,
          listItem: !1,
          pull: null,
          pulse: !1,
          rotation: null,
          size: null,
          spin: !1,
          spinPulse: !1,
          spinReverse: !1,
          beat: !1,
          fade: !1,
          beatFade: !1,
          bounce: !1,
          shake: !1,
          symbol: !1,
          title: "",
          titleId: null,
          transform: null,
          swapOpacity: !1,
        },
        na = t.forwardRef(function (e, t) {
          var n = Vr(Vr({}, ta), e),
            r = n.icon,
            a = n.mask,
            o = n.symbol,
            i = n.className,
            l = n.title,
            s = n.titleId,
            c = n.maskId,
            u = Zr(r),
            d = ea(
              "classes",
              [].concat(
                Gr(
                  (function (e) {
                    var t,
                      n = e.beat,
                      r = e.fade,
                      a = e.beatFade,
                      o = e.bounce,
                      i = e.shake,
                      l = e.flash,
                      s = e.spin,
                      c = e.spinPulse,
                      u = e.spinReverse,
                      d = e.pulse,
                      f = e.fixedWidth,
                      p = e.inverse,
                      m = e.border,
                      h = e.listItem,
                      g = e.flip,
                      b = e.size,
                      w = e.rotation,
                      v = e.pull,
                      y =
                        (qr(
                          (t = {
                            "fa-beat": n,
                            "fa-fade": r,
                            "fa-beat-fade": a,
                            "fa-bounce": o,
                            "fa-shake": i,
                            "fa-flash": l,
                            "fa-spin": s,
                            "fa-spin-reverse": u,
                            "fa-spin-pulse": c,
                            "fa-pulse": d,
                            "fa-fw": f,
                            "fa-inverse": p,
                            "fa-border": m,
                            "fa-li": h,
                            "fa-flip": !0 === g,
                            "fa-flip-horizontal":
                              "horizontal" === g || "both" === g,
                            "fa-flip-vertical":
                              "vertical" === g || "both" === g,
                          }),
                          "fa-".concat(b),
                          "undefined" !== typeof b && null !== b
                        ),
                        qr(
                          t,
                          "fa-rotate-".concat(w),
                          "undefined" !== typeof w && null !== w && 0 !== w
                        ),
                        qr(
                          t,
                          "fa-pull-".concat(v),
                          "undefined" !== typeof v && null !== v
                        ),
                        qr(t, "fa-swap-opacity", e.swapOpacity),
                        t);
                    return Object.keys(y)
                      .map(function (e) {
                        return y[e] ? e : null;
                      })
                      .filter(function (e) {
                        return e;
                      });
                  })(n)
                ),
                Gr((i || "").split(" "))
              )
            ),
            f = ea(
              "transform",
              "string" === typeof n.transform
                ? Dr.transform(n.transform)
                : n.transform
            ),
            p = ea("mask", Zr(a)),
            m = zr(
              u,
              Vr(
                Vr(Vr(Vr({}, d), f), p),
                {},
                { symbol: o, title: l, titleId: s, maskId: c }
              )
            );
          if (!m)
            return (
              (function () {
                var e;
                !Jr &&
                  console &&
                  "function" === typeof console.error &&
                  (e = console).error.apply(e, arguments);
              })("Could not find icon", u),
              null
            );
          var h = m.abstract,
            g = { ref: t };
          return (
            Object.keys(n).forEach(function (e) {
              ta.hasOwnProperty(e) || (g[e] = n[e]);
            }),
            ra(h[0], g)
          );
        });
      (na.displayName = "FontAwesomeIcon"),
        (na.propTypes = {
          beat: Wr().bool,
          border: Wr().bool,
          beatFade: Wr().bool,
          bounce: Wr().bool,
          className: Wr().string,
          fade: Wr().bool,
          flash: Wr().bool,
          mask: Wr().oneOfType([Wr().object, Wr().array, Wr().string]),
          maskId: Wr().string,
          fixedWidth: Wr().bool,
          inverse: Wr().bool,
          flip: Wr().oneOf([!0, !1, "horizontal", "vertical", "both"]),
          icon: Wr().oneOfType([Wr().object, Wr().array, Wr().string]),
          listItem: Wr().bool,
          pull: Wr().oneOf(["right", "left"]),
          pulse: Wr().bool,
          rotation: Wr().oneOf([0, 90, 180, 270]),
          shake: Wr().bool,
          size: Wr().oneOf([
            "2xs",
            "xs",
            "sm",
            "lg",
            "xl",
            "2xl",
            "1x",
            "2x",
            "3x",
            "4x",
            "5x",
            "6x",
            "7x",
            "8x",
            "9x",
            "10x",
          ]),
          spin: Wr().bool,
          spinPulse: Wr().bool,
          spinReverse: Wr().bool,
          symbol: Wr().oneOfType([Wr().bool, Wr().string]),
          title: Wr().string,
          titleId: Wr().string,
          transform: Wr().oneOfType([Wr().string, Wr().object]),
          swapOpacity: Wr().bool,
        });
      var ra = function e(t, n) {
        var r =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if ("string" === typeof n) return n;
        var a = (n.children || []).map(function (n) {
            return e(t, n);
          }),
          o = Object.keys(n.attributes || {}).reduce(
            function (e, t) {
              var r = n.attributes[t];
              switch (t) {
                case "class":
                  (e.attrs.className = r), delete n.attributes.class;
                  break;
                case "style":
                  e.attrs.style = r
                    .split(";")
                    .map(function (e) {
                      return e.trim();
                    })
                    .filter(function (e) {
                      return e;
                    })
                    .reduce(function (e, t) {
                      var n,
                        r = t.indexOf(":"),
                        a = Kr(t.slice(0, r)),
                        o = t.slice(r + 1).trim();
                      return (
                        a.startsWith("webkit")
                          ? (e[
                              ((n = a), n.charAt(0).toUpperCase() + n.slice(1))
                            ] = o)
                          : (e[a] = o),
                        e
                      );
                    }, {});
                  break;
                default:
                  0 === t.indexOf("aria-") || 0 === t.indexOf("data-")
                    ? (e.attrs[t.toLowerCase()] = r)
                    : (e.attrs[Kr(t)] = r);
              }
              return e;
            },
            { attrs: {} }
          ),
          i = r.style,
          l = void 0 === i ? {} : i,
          s = $r(r, Xr);
        return (
          (o.attrs.style = Vr(Vr({}, o.attrs.style), l)),
          t.apply(void 0, [n.tag, Vr(Vr({}, o.attrs), s)].concat(Gr(a)))
        );
      }.bind(null, t.createElement);
      const aa = () => {
          const [e, n] = (0, t.useState)(null),
            r = ee();
          return (0, ve.jsxs)("div", {
            className:
              "w-full flex items-center justify-center flex-col gap-10 mt-7 mb-10",
            children: [
              (0, ve.jsx)("div", {
                className: "w-4/5 flex items-center justify-start ml-14",
                children: (0, ve.jsx)(na, {
                  className: "h-7",
                  icon: ke,
                  onClick: () => {
                    r("/");
                  },
                }),
              }),
              (0, ve.jsxs)("div", {
                className: "f1-r1 border rounded-xl w-4/5 p-8",
                children: [
                  (0, ve.jsx)("h1", {
                    className: "font-bold text-2xl",
                    children: "Riddle 1",
                  }),
                  (0, ve.jsx)("br", {}),
                  (0, ve.jsx)("p", {
                    children:
                      "In the heart of the campus, I start your day, Where friends and colleagues gather to stay. A morning haven, with coffee in hand, A beautiful spot where moments are planned. What am I?",
                  }),
                  (0, ve.jsx)("button", {
                    type: "button",
                    className:
                      "w-2/5 px-3 py-3 border rounded-xl mt-5 text-white",
                    style: { backgroundColor: "#ECA555" },
                    children: "Upload",
                  }),
                ],
              }),
              (0, ve.jsxs)("div", {
                className: "f1-r2 border rounded-xl w-4/5 p-8",
                children: [
                  (0, ve.jsx)("h1", {
                    className: "font-bold text-2xl",
                    children: "Riddle 2",
                  }),
                  (0, ve.jsx)("br", {}),
                  (0, ve.jsx)("p", {
                    children:
                      "Within university walls, I stand with pride, Offering a cozy spot where cultures collide. My name reflects a distant land's charm, Where students gather, feeling warm. What am I?",
                  }),
                  (0, ve.jsx)("button", {
                    type: "button",
                    className:
                      "w-2/5 px-3 py-3 border rounded-xl mt-5 text-white",
                    style: { backgroundColor: "#ECA555" },
                    children: "Upload",
                  }),
                ],
              }),
              (0, ve.jsxs)("div", {
                className: "f1-r3 border rounded-xl w-4/5 p-8",
                children: [
                  (0, ve.jsx)("h1", {
                    className: "font-bold text-2xl",
                    children: "Riddle 3",
                  }),
                  (0, ve.jsx)("br", {}),
                  (0, ve.jsx)("p", {
                    children:
                      "I stand tall and proud, a marker of the past, Where memories linger, and friendships last. Names etched in stone, forever they stay, A testament to journeys made along the way. I tell tales of those who once walked these halls, Now spread far and wide, answering life's calls. What am I?",
                  }),
                  (0, ve.jsx)("button", {
                    type: "button",
                    className:
                      "w-2/5 px-3 py-3 border rounded-xl mt-5 text-white",
                    style: { backgroundColor: "#ECA555" },
                    children: "Upload",
                  }),
                ],
              }),
              (0, ve.jsxs)("div", {
                className: "f1-r4 border rounded-xl w-4/5 p-8",
                children: [
                  (0, ve.jsx)("h1", {
                    className: "font-bold text-2xl",
                    children: "Riddle 4",
                  }),
                  (0, ve.jsx)("br", {}),
                  (0, ve.jsx)("p", {
                    children:
                      "I'm a wall that holds knowledge grand, Where scholars seek to understand. Golden keys on stones so tall, Unlocking wisdom for one and all. What am I?",
                  }),
                  (0, ve.jsx)("button", {
                    type: "button",
                    className:
                      "w-2/5 px-3 py-3 border rounded-xl mt-5 text-white",
                    style: { backgroundColor: "#ECA555" },
                    children: "Upload",
                  }),
                ],
              }),
              (0, ve.jsxs)("div", {
                className: "f1-r5 border rounded-xl w-4/5 p-8",
                children: [
                  (0, ve.jsx)("h1", {
                    className: "font-bold text-2xl",
                    children: "Riddle 5",
                  }),
                  (0, ve.jsx)("br", {}),
                  (0, ve.jsx)("p", {
                    children:
                      "Through me all must pass and see, A College born in 1996, you see. I greet each seeker, young and old, Where learning's treasure doth unfold. What am I?",
                  }),
                  (0, ve.jsx)("button", {
                    type: "button",
                    className:
                      "w-2/5 px-3 py-3 border rounded-xl mt-5 text-white",
                    style: { backgroundColor: "#ECA555" },
                    children: "Upload",
                  }),
                ],
              }),
              (0, ve.jsxs)("div", {
                className: "f1-r6 border rounded-xl w-4/5 p-8",
                children: [
                  (0, ve.jsx)("h1", {
                    className: "font-bold text-2xl",
                    children: "Riddle 6",
                  }),
                  (0, ve.jsx)("br", {}),
                  (0, ve.jsx)("p", {
                    children:
                      "In me, hands craft and minds refine, Where practical workshops brightly shine. Here, skills are born from knowledge pure, In a place where learning's hands-on allure. What am I?",
                  }),
                  (0, ve.jsx)("button", {
                    type: "button",
                    className:
                      "w-2/5 px-3 py-3 border rounded-xl mt-5 text-white",
                    style: { backgroundColor: "#ECA555" },
                    children: "Upload",
                  }),
                ],
              }),
            ],
          });
        },
        oa = () => {
          const e = ee();
          return (0, ve.jsxs)("div", {
            className:
              "w-full flex items-center justify-center flex-col gap-10 mt-7 mb-10",
            children: [
              (0, ve.jsx)("div", {
                className: "w-4/5 flex items-center justify-start ml-14",
                children: (0, ve.jsx)(na, {
                  className: "h-7",
                  icon: ke,
                  onClick: () => {
                    e("/");
                  },
                }),
              }),
              (0, ve.jsxs)("div", {
                className: "f1-r1 border rounded-xl w-4/5 p-8",
                children: [
                  (0, ve.jsx)("h1", {
                    className: "font-bold text-2xl",
                    children: "Riddle 1",
                  }),
                  (0, ve.jsx)("br", {}),
                  (0, ve.jsx)("p", {
                    children:
                      "Within university walls, I stand with pride, Offering a cozy spot where cultures collide. My name reflects a distant land's charm, Where students gather, feeling warm. What am I?",
                  }),
                  (0, ve.jsx)("button", {
                    type: "button",
                    className:
                      "w-2/5 px-3 py-3 border rounded-xl mt-5 text-white",
                    style: { backgroundColor: "#ECA555" },
                    children: "Upload",
                  }),
                ],
              }),
              (0, ve.jsxs)("div", {
                className: "f1-r2 border rounded-xl w-4/5 p-8",
                children: [
                  (0, ve.jsx)("h1", {
                    className: "font-bold text-2xl",
                    children: "Riddle 2",
                  }),
                  (0, ve.jsx)("br", {}),
                  (0, ve.jsx)("p", {
                    children:
                      "I stand tall and proud, a marker of the past, Where memories linger, and friendships last. Names etched in stone, forever they stay, A testament to journeys made along the way. I tell tales of those who once walked these halls, Now spread far and wide, answering life's calls. What am I?",
                  }),
                  (0, ve.jsx)("button", {
                    type: "button",
                    className:
                      "w-2/5 px-3 py-3 border rounded-xl mt-5 text-white",
                    style: { backgroundColor: "#ECA555" },
                    children: "Upload",
                  }),
                ],
              }),
              (0, ve.jsxs)("div", {
                className: "f1-r3 border rounded-xl w-4/5 p-8",
                children: [
                  (0, ve.jsx)("h1", {
                    className: "font-bold text-2xl",
                    children: "Riddle 3",
                  }),
                  (0, ve.jsx)("br", {}),
                  (0, ve.jsx)("p", {
                    children:
                      "I'm a wall that holds knowledge grand, Where scholars seek to understand. Golden keys on stones so tall, Unlocking wisdom for one and all. What am I?",
                  }),
                  (0, ve.jsx)("button", {
                    type: "button",
                    className:
                      "w-2/5 px-3 py-3 border rounded-xl mt-5 text-white",
                    style: { backgroundColor: "#ECA555" },
                    children: "Upload",
                  }),
                ],
              }),
              (0, ve.jsxs)("div", {
                className: "f1-r4 border rounded-xl w-4/5 p-8",
                children: [
                  (0, ve.jsx)("h1", {
                    className: "font-bold text-2xl",
                    children: "Riddle 4",
                  }),
                  (0, ve.jsx)("br", {}),
                  (0, ve.jsx)("p", {
                    children:
                      "Through me all must pass and see, A College born in 1996, you see. I greet each seeker, young and old, Where learning's treasure doth unfold. What am I?",
                  }),
                  (0, ve.jsx)("button", {
                    type: "button",
                    className:
                      "w-2/5 px-3 py-3 border rounded-xl mt-5 text-white",
                    style: { backgroundColor: "#ECA555" },
                    children: "Upload",
                  }),
                ],
              }),
              (0, ve.jsxs)("div", {
                className: "f1-r5 border rounded-xl w-4/5 p-8",
                children: [
                  (0, ve.jsx)("h1", {
                    className: "font-bold text-2xl",
                    children: "Riddle 5",
                  }),
                  (0, ve.jsx)("br", {}),
                  (0, ve.jsx)("p", {
                    children:
                      "In the heart of the campus, I start your day, Where friends and colleagues gather to stay. A morning haven, with coffee in hand, A beautiful spot where moments are planned. What am I?",
                  }),
                  (0, ve.jsx)("button", {
                    type: "button",
                    className:
                      "w-2/5 px-3 py-3 border rounded-xl mt-5 text-white",
                    style: { backgroundColor: "#ECA555" },
                    children: "Upload",
                  }),
                ],
              }),
              (0, ve.jsxs)("div", {
                className: "f1-r6 border rounded-xl w-4/5 p-8",
                children: [
                  (0, ve.jsx)("h1", {
                    className: "font-bold text-2xl",
                    children: "Riddle 6",
                  }),
                  (0, ve.jsx)("br", {}),
                  (0, ve.jsx)("p", {
                    children:
                      "In me, hands craft and minds refine, Where practical workshops brightly shine. Here, skills are born from knowledge pure, In a place where learning's hands-on allure. What am I?",
                  }),
                  (0, ve.jsx)("button", {
                    type: "button",
                    className:
                      "w-2/5 px-3 py-3 border rounded-xl mt-5 text-white",
                    style: { backgroundColor: "#ECA555" },
                    children: "Upload",
                  }),
                ],
              }),
            ],
          });
        },
        ia = () => {
          const e = ee();
          return (0, ve.jsxs)("div", {
            className:
              "w-full flex items-center justify-center flex-col gap-10 mt-7 mb-10",
            children: [
              (0, ve.jsx)("div", {
                className: "w-4/5 flex items-center justify-start ml-14",
                children: (0, ve.jsx)(na, {
                  className: "h-7",
                  icon: ke,
                  onClick: () => {
                    e("/");
                  },
                }),
              }),
              (0, ve.jsxs)("div", {
                className: "f1-r1 border rounded-xl w-4/5 p-8",
                children: [
                  (0, ve.jsx)("h1", {
                    className: "font-bold text-2xl",
                    children: "Riddle 1",
                  }),
                  (0, ve.jsx)("br", {}),
                  (0, ve.jsx)("p", {
                    children:
                      "I stand tall and proud, a marker of the past, Where memories linger, and friendships last. Names etched in stone, forever they stay, A testament to journeys made along the way. I tell tales of those who once walked these halls, Now spread far and wide, answering life's calls. What am I?",
                  }),
                  (0, ve.jsx)("button", {
                    type: "button",
                    className:
                      "w-2/5 px-3 py-3 border rounded-xl mt-5 text-white",
                    style: { backgroundColor: "#ECA555" },
                    children: "Upload",
                  }),
                ],
              }),
              (0, ve.jsxs)("div", {
                className: "f1-r2 border rounded-xl w-4/5 p-8",
                children: [
                  (0, ve.jsx)("h1", {
                    className: "font-bold text-2xl",
                    children: "Riddle 2",
                  }),
                  (0, ve.jsx)("br", {}),
                  (0, ve.jsx)("p", {
                    children:
                      "I'm a wall that holds knowledge grand, Where scholars seek to understand. Golden keys on stones so tall, Unlocking wisdom for one and all. What am I?",
                  }),
                  (0, ve.jsx)("button", {
                    type: "button",
                    className:
                      "w-2/5 px-3 py-3 border rounded-xl mt-5 text-white",
                    style: { backgroundColor: "#ECA555" },
                    children: "Upload",
                  }),
                ],
              }),
              (0, ve.jsxs)("div", {
                className: "f1-r3 border rounded-xl w-4/5 p-8",
                children: [
                  (0, ve.jsx)("h1", {
                    className: "font-bold text-2xl",
                    children: "Riddle 3",
                  }),
                  (0, ve.jsx)("br", {}),
                  (0, ve.jsx)("p", {
                    children:
                      "Through me all must pass and see, A College born in 1996, you see. I greet each seeker, young and old, Where learning's treasure doth unfold. What am I?",
                  }),
                  (0, ve.jsx)("button", {
                    type: "button",
                    className:
                      "w-2/5 px-3 py-3 border rounded-xl mt-5 text-white",
                    style: { backgroundColor: "#ECA555" },
                    children: "Upload",
                  }),
                ],
              }),
              (0, ve.jsxs)("div", {
                className: "f1-r4 border rounded-xl w-4/5 p-8",
                children: [
                  (0, ve.jsx)("h1", {
                    className: "font-bold text-2xl",
                    children: "Riddle 4",
                  }),
                  (0, ve.jsx)("br", {}),
                  (0, ve.jsx)("p", {
                    children:
                      "In the heart of the campus, I start your day, Where friends and colleagues gather to stay. A morning haven, with coffee in hand, A beautiful spot where moments are planned. What am I?",
                  }),
                  (0, ve.jsx)("button", {
                    type: "button",
                    className:
                      "w-2/5 px-3 py-3 border rounded-xl mt-5 text-white",
                    style: { backgroundColor: "#ECA555" },
                    children: "Upload",
                  }),
                ],
              }),
              (0, ve.jsxs)("div", {
                className: "f1-r5 border rounded-xl w-4/5 p-8",
                children: [
                  (0, ve.jsx)("h1", {
                    className: "font-bold text-2xl",
                    children: "Riddle 5",
                  }),
                  (0, ve.jsx)("br", {}),
                  (0, ve.jsx)("p", {
                    children:
                      "Within university walls, I stand with pride, Offering a cozy spot where cultures collide. My name reflects a distant land's charm, Where students gather, feeling warm. What am I?",
                  }),
                  (0, ve.jsx)("button", {
                    type: "button",
                    className:
                      "w-2/5 px-3 py-3 border rounded-xl mt-5 text-white",
                    style: { backgroundColor: "#ECA555" },
                    children: "Upload",
                  }),
                ],
              }),
              (0, ve.jsxs)("div", {
                className: "f1-r6 border rounded-xl w-4/5 p-8",
                children: [
                  (0, ve.jsx)("h1", {
                    className: "font-bold text-2xl",
                    children: "Riddle 6",
                  }),
                  (0, ve.jsx)("br", {}),
                  (0, ve.jsx)("p", {
                    children:
                      "In me, hands craft and minds refine, Where practical workshops brightly shine. Here, skills are born from knowledge pure, In a place where learning's hands-on allure. What am I?",
                  }),
                  (0, ve.jsx)("button", {
                    type: "button",
                    className:
                      "w-2/5 px-3 py-3 border rounded-xl mt-5 text-white",
                    style: { backgroundColor: "#ECA555" },
                    children: "Upload",
                  }),
                ],
              }),
            ],
          });
        },
        la = () => {
          const e = ee();
          return (0, ve.jsxs)("div", {
            className:
              "w-full flex items-center justify-center flex-col gap-10 mt-7 mb-10",
            children: [
              (0, ve.jsx)("div", {
                className: "w-4/5 flex items-center justify-start ml-14",
                children: (0, ve.jsx)(na, {
                  className: "h-7",
                  icon: ke,
                  onClick: () => {
                    e("/");
                  },
                }),
              }),
              (0, ve.jsxs)("div", {
                className: "f1-r1 border rounded-xl w-4/5 p-8",
                children: [
                  (0, ve.jsx)("h1", {
                    className: "font-bold text-2xl",
                    children: "Riddle 1",
                  }),
                  (0, ve.jsx)("br", {}),
                  (0, ve.jsx)("p", {
                    children:
                      "I'm a wall that holds knowledge grand, Where scholars seek to understand. Golden keys on stones so tall, Unlocking wisdom for one and all. What am I?",
                  }),
                  (0, ve.jsx)("button", {
                    type: "button",
                    className:
                      "w-2/5 px-3 py-3 border rounded-xl mt-5 text-white",
                    style: { backgroundColor: "#ECA555" },
                    children: "Upload",
                  }),
                ],
              }),
              (0, ve.jsxs)("div", {
                className: "f1-r2 border rounded-xl w-4/5 p-8",
                children: [
                  (0, ve.jsx)("h1", {
                    className: "font-bold text-2xl",
                    children: "Riddle 2",
                  }),
                  (0, ve.jsx)("br", {}),
                  (0, ve.jsx)("p", {
                    children:
                      "Through me all must pass and see, A College born in 1996, you see. I greet each seeker, young and old, Where learning's treasure doth unfold. What am I?",
                  }),
                  (0, ve.jsx)("button", {
                    type: "button",
                    className:
                      "w-2/5 px-3 py-3 border rounded-xl mt-5 text-white",
                    style: { backgroundColor: "#ECA555" },
                    children: "Upload",
                  }),
                ],
              }),
              (0, ve.jsxs)("div", {
                className: "f1-r3 border rounded-xl w-4/5 p-8",
                children: [
                  (0, ve.jsx)("h1", {
                    className: "font-bold text-2xl",
                    children: "Riddle 3",
                  }),
                  (0, ve.jsx)("br", {}),
                  (0, ve.jsx)("p", {
                    children:
                      "In the heart of the campus, I start your day, Where friends and colleagues gather to stay. A morning haven, with coffee in hand, A beautiful spot where moments are planned. What am I?",
                  }),
                  (0, ve.jsx)("button", {
                    type: "button",
                    className:
                      "w-2/5 px-3 py-3 border rounded-xl mt-5 text-white",
                    style: { backgroundColor: "#ECA555" },
                    children: "Upload",
                  }),
                ],
              }),
              (0, ve.jsxs)("div", {
                className: "f1-r4 border rounded-xl w-4/5 p-8",
                children: [
                  (0, ve.jsx)("h1", {
                    className: "font-bold text-2xl",
                    children: "Riddle 4",
                  }),
                  (0, ve.jsx)("br", {}),
                  (0, ve.jsx)("p", {
                    children:
                      "Within university walls, I stand with pride, Offering a cozy spot where cultures collide. My name reflects a distant land's charm, Where students gather, feeling warm. What am I?",
                  }),
                  (0, ve.jsx)("button", {
                    type: "button",
                    className:
                      "w-2/5 px-3 py-3 border rounded-xl mt-5 text-white",
                    style: { backgroundColor: "#ECA555" },
                    children: "Upload",
                  }),
                ],
              }),
              (0, ve.jsxs)("div", {
                className: "f1-r5 border rounded-xl w-4/5 p-8",
                children: [
                  (0, ve.jsx)("h1", {
                    className: "font-bold text-2xl",
                    children: "Riddle 5",
                  }),
                  (0, ve.jsx)("br", {}),
                  (0, ve.jsx)("p", {
                    children:
                      "I stand tall and proud, a marker of the past, Where memories linger, and friendships last. Names etched in stone, forever they stay, A testament to journeys made along the way. I tell tales of those who once walked these halls, Now spread far and wide, answering life's calls. What am I?",
                  }),
                  (0, ve.jsx)("button", {
                    type: "button",
                    className:
                      "w-2/5 px-3 py-3 border rounded-xl mt-5 text-white",
                    style: { backgroundColor: "#ECA555" },
                    children: "Upload",
                  }),
                ],
              }),
              (0, ve.jsxs)("div", {
                className: "f1-r6 border rounded-xl w-4/5 p-8",
                children: [
                  (0, ve.jsx)("h1", {
                    className: "font-bold text-2xl",
                    children: "Riddle 6",
                  }),
                  (0, ve.jsx)("br", {}),
                  (0, ve.jsx)("p", {
                    children:
                      "In me, hands craft and minds refine, Where practical workshops brightly shine. Here, skills are born from knowledge pure, In a place where learning's hands-on allure. What am I?",
                  }),
                  (0, ve.jsx)("button", {
                    type: "button",
                    className:
                      "w-2/5 px-3 py-3 border rounded-xl mt-5 text-white",
                    style: { backgroundColor: "#ECA555" },
                    children: "Upload",
                  }),
                ],
              }),
            ],
          });
        },
        sa = () => {
          const e = ee(),
            [n, r] = (0, t.useState)({});
          (0, t.useEffect)(() => {
            const e = ["F1-R1", "F1-R2", "F1-R3", "F1-R4", "F1-R5", "F1-R6"];
            e.forEach((e, t) => {
              localStorage.getItem(e) ||
                localStorage.setItem(e, 0 === t ? "true" : "false");
            });
            const t = {};
            e.forEach((e) => {
              const n = localStorage.getItem(e);
              t[e] = "true" === n ? "isOpen" : "isClosed";
            }),
              r(t);
          }, []);
          const a = (t, n, r, a) =>
            (0, ve.jsxs)("div", {
              className:
                "border flex flex-col items-center justify-start rounded-xl w-1/2 p-16 text-white font-semibold text-xl ".concat(
                  "isClosed" === t && "cursor-not-allowed"
                ),
              style: { backgroundColor: a },
              onClick: () =>
                ((t, n) => {
                  "isOpen" === t && e(n);
                })(t, n),
              children: [
                (0, ve.jsx)("div", { children: r }),
                "isClosed" === t &&
                  (0, ve.jsx)(na, { className: "mt-4", icon: xe }),
              ],
            });
          return (0, ve.jsxs)("div", {
            className: "w-full mt-10 h-full",
            children: [
              (0, ve.jsx)("div", {
                className: "w-4/5 flex items-center justify-start ml-7 mb-7",
                children: (0, ve.jsx)(na, {
                  className: "h-7",
                  icon: ke,
                  onClick: () => {
                    e("/");
                  },
                }),
              }),
              (0, ve.jsxs)("div", {
                className: "flex flex-row gap-2",
                children: [
                  n["F1-R1"] &&
                    a(
                      n["F1-R1"],
                      "/FlowOneRiddleOne",
                      "First Riddle",
                      "#5768AC"
                    ),
                  n["F1-R2"] &&
                    a(
                      n["F1-R2"],
                      "/FlowOneRiddleTwo",
                      "Second Riddle",
                      "#F2CC43"
                    ),
                ],
              }),
              (0, ve.jsxs)("div", {
                className: "flex flex-row gap-2 h-2/6",
                children: [
                  n["F1-R3"] &&
                    a(
                      n["F1-R3"],
                      "/FlowOneRiddleThree",
                      "Third Riddle",
                      "#E282B2"
                    ),
                  n["F1-R4"] &&
                    a(
                      n["F1-R4"],
                      "/FlowOneRiddleFour",
                      "Fourth Riddle",
                      "#70C079"
                    ),
                ],
              }),
              (0, ve.jsxs)("div", {
                className: "flex flex-row gap-2 h-2/6",
                children: [
                  n["F1-R5"] &&
                    a(
                      n["F1-R5"],
                      "/FlowOneRiddleFive",
                      "Fifth Riddle",
                      "#ECA555"
                    ),
                  n["F1-R6"] &&
                    a(
                      n["F1-R6"],
                      "/FlowOneRiddleSix",
                      "Sixth Riddle",
                      "#00B1E3"
                    ),
                ],
              }),
            ],
          });
        };
      var ca = n(64),
        ua = n.n(ca),
        da = n(29),
        fa = n.n(da);
      function pa(e, t) {
        return function () {
          return e.apply(t, arguments);
        };
      }
      const { toString: ma } = Object.prototype,
        { getPrototypeOf: ha } = Object,
        ga =
          ((ba = Object.create(null)),
          (e) => {
            const t = ma.call(e);
            return ba[t] || (ba[t] = t.slice(8, -1).toLowerCase());
          });
      var ba;
      const wa = (e) => ((e = e.toLowerCase()), (t) => ga(t) === e),
        va = (e) => (t) => typeof t === e,
        { isArray: ya } = Array,
        xa = va("undefined");
      const ka = wa("ArrayBuffer");
      const ja = va("string"),
        Ca = va("function"),
        Sa = va("number"),
        Na = (e) => null !== e && "object" === typeof e,
        Ea = (e) => {
          if ("object" !== ga(e)) return !1;
          const t = ha(e);
          return (
            (null === t ||
              t === Object.prototype ||
              null === Object.getPrototypeOf(t)) &&
            !(Symbol.toStringTag in e) &&
            !(Symbol.iterator in e)
          );
        },
        Ra = wa("Date"),
        Fa = wa("File"),
        Oa = wa("Blob"),
        Aa = wa("FileList"),
        Pa = wa("URLSearchParams"),
        [Ta, Ma, _a, Ia] = [
          "ReadableStream",
          "Request",
          "Response",
          "Headers",
        ].map(wa);
      function La(e, t) {
        let n,
          r,
          { allOwnKeys: a = !1 } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (null !== e && "undefined" !== typeof e)
          if (("object" !== typeof e && (e = [e]), ya(e)))
            for (n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
          else {
            const r = a ? Object.getOwnPropertyNames(e) : Object.keys(e),
              o = r.length;
            let i;
            for (n = 0; n < o; n++) (i = r[n]), t.call(null, e[i], i, e);
          }
      }
      function Ua(e, t) {
        t = t.toLowerCase();
        const n = Object.keys(e);
        let r,
          a = n.length;
        for (; a-- > 0; ) if (((r = n[a]), t === r.toLowerCase())) return r;
        return null;
      }
      const Da =
          "undefined" !== typeof globalThis
            ? globalThis
            : "undefined" !== typeof self
            ? self
            : "undefined" !== typeof window
            ? window
            : global,
        za = (e) => !xa(e) && e !== Da;
      const Ba =
        ((Wa = "undefined" !== typeof Uint8Array && ha(Uint8Array)),
        (e) => Wa && e instanceof Wa);
      var Wa;
      const Ha = wa("HTMLFormElement"),
        Va = ((e) => {
          let { hasOwnProperty: t } = e;
          return (e, n) => t.call(e, n);
        })(Object.prototype),
        Ya = wa("RegExp"),
        qa = (e, t) => {
          const n = Object.getOwnPropertyDescriptors(e),
            r = {};
          La(n, (n, a) => {
            let o;
            !1 !== (o = t(n, a, e)) && (r[a] = o || n);
          }),
            Object.defineProperties(e, r);
        },
        $a = "abcdefghijklmnopqrstuvwxyz",
        Ga = "0123456789",
        Qa = { DIGIT: Ga, ALPHA: $a, ALPHA_DIGIT: $a + $a.toUpperCase() + Ga };
      const Ka = wa("AsyncFunction"),
        Xa = {
          isArray: ya,
          isArrayBuffer: ka,
          isBuffer: function (e) {
            return (
              null !== e &&
              !xa(e) &&
              null !== e.constructor &&
              !xa(e.constructor) &&
              Ca(e.constructor.isBuffer) &&
              e.constructor.isBuffer(e)
            );
          },
          isFormData: (e) => {
            let t;
            return (
              e &&
              (("function" === typeof FormData && e instanceof FormData) ||
                (Ca(e.append) &&
                  ("formdata" === (t = ga(e)) ||
                    ("object" === t &&
                      Ca(e.toString) &&
                      "[object FormData]" === e.toString()))))
            );
          },
          isArrayBufferView: function (e) {
            let t;
            return (
              (t =
                "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView
                  ? ArrayBuffer.isView(e)
                  : e && e.buffer && ka(e.buffer)),
              t
            );
          },
          isString: ja,
          isNumber: Sa,
          isBoolean: (e) => !0 === e || !1 === e,
          isObject: Na,
          isPlainObject: Ea,
          isReadableStream: Ta,
          isRequest: Ma,
          isResponse: _a,
          isHeaders: Ia,
          isUndefined: xa,
          isDate: Ra,
          isFile: Fa,
          isBlob: Oa,
          isRegExp: Ya,
          isFunction: Ca,
          isStream: (e) => Na(e) && Ca(e.pipe),
          isURLSearchParams: Pa,
          isTypedArray: Ba,
          isFileList: Aa,
          forEach: La,
          merge: function e() {
            const { caseless: t } = (za(this) && this) || {},
              n = {},
              r = (r, a) => {
                const o = (t && Ua(n, a)) || a;
                Ea(n[o]) && Ea(r)
                  ? (n[o] = e(n[o], r))
                  : Ea(r)
                  ? (n[o] = e({}, r))
                  : ya(r)
                  ? (n[o] = r.slice())
                  : (n[o] = r);
              };
            for (let a = 0, o = arguments.length; a < o; a++)
              arguments[a] && La(arguments[a], r);
            return n;
          },
          extend: function (e, t, n) {
            let { allOwnKeys: r } =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {};
            return (
              La(
                t,
                (t, r) => {
                  n && Ca(t) ? (e[r] = pa(t, n)) : (e[r] = t);
                },
                { allOwnKeys: r }
              ),
              e
            );
          },
          trim: (e) =>
            e.trim
              ? e.trim()
              : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
          stripBOM: (e) => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
          inherits: (e, t, n, r) => {
            (e.prototype = Object.create(t.prototype, r)),
              (e.prototype.constructor = e),
              Object.defineProperty(e, "super", { value: t.prototype }),
              n && Object.assign(e.prototype, n);
          },
          toFlatObject: (e, t, n, r) => {
            let a, o, i;
            const l = {};
            if (((t = t || {}), null == e)) return t;
            do {
              for (a = Object.getOwnPropertyNames(e), o = a.length; o-- > 0; )
                (i = a[o]),
                  (r && !r(i, e, t)) || l[i] || ((t[i] = e[i]), (l[i] = !0));
              e = !1 !== n && ha(e);
            } while (e && (!n || n(e, t)) && e !== Object.prototype);
            return t;
          },
          kindOf: ga,
          kindOfTest: wa,
          endsWith: (e, t, n) => {
            (e = String(e)),
              (void 0 === n || n > e.length) && (n = e.length),
              (n -= t.length);
            const r = e.indexOf(t, n);
            return -1 !== r && r === n;
          },
          toArray: (e) => {
            if (!e) return null;
            if (ya(e)) return e;
            let t = e.length;
            if (!Sa(t)) return null;
            const n = new Array(t);
            for (; t-- > 0; ) n[t] = e[t];
            return n;
          },
          forEachEntry: (e, t) => {
            const n = (e && e[Symbol.iterator]).call(e);
            let r;
            for (; (r = n.next()) && !r.done; ) {
              const n = r.value;
              t.call(e, n[0], n[1]);
            }
          },
          matchAll: (e, t) => {
            let n;
            const r = [];
            for (; null !== (n = e.exec(t)); ) r.push(n);
            return r;
          },
          isHTMLForm: Ha,
          hasOwnProperty: Va,
          hasOwnProp: Va,
          reduceDescriptors: qa,
          freezeMethods: (e) => {
            qa(e, (t, n) => {
              if (Ca(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n))
                return !1;
              const r = e[n];
              Ca(r) &&
                ((t.enumerable = !1),
                "writable" in t
                  ? (t.writable = !1)
                  : t.set ||
                    (t.set = () => {
                      throw Error(
                        "Can not rewrite read-only method '" + n + "'"
                      );
                    }));
            });
          },
          toObjectSet: (e, t) => {
            const n = {},
              r = (e) => {
                e.forEach((e) => {
                  n[e] = !0;
                });
              };
            return ya(e) ? r(e) : r(String(e).split(t)), n;
          },
          toCamelCase: (e) =>
            e
              .toLowerCase()
              .replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, n) {
                return t.toUpperCase() + n;
              }),
          noop: () => {},
          toFiniteNumber: (e, t) =>
            null != e && Number.isFinite((e = +e)) ? e : t,
          findKey: Ua,
          global: Da,
          isContextDefined: za,
          ALPHABET: Qa,
          generateString: function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 16,
              t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : Qa.ALPHA_DIGIT,
              n = "";
            const { length: r } = t;
            for (; e--; ) n += t[(Math.random() * r) | 0];
            return n;
          },
          isSpecCompliantForm: function (e) {
            return !!(
              e &&
              Ca(e.append) &&
              "FormData" === e[Symbol.toStringTag] &&
              e[Symbol.iterator]
            );
          },
          toJSONObject: (e) => {
            const t = new Array(10),
              n = (e, r) => {
                if (Na(e)) {
                  if (t.indexOf(e) >= 0) return;
                  if (!("toJSON" in e)) {
                    t[r] = e;
                    const a = ya(e) ? [] : {};
                    return (
                      La(e, (e, t) => {
                        const o = n(e, r + 1);
                        !xa(o) && (a[t] = o);
                      }),
                      (t[r] = void 0),
                      a
                    );
                  }
                }
                return e;
              };
            return n(e, 0);
          },
          isAsyncFn: Ka,
          isThenable: (e) => e && (Na(e) || Ca(e)) && Ca(e.then) && Ca(e.catch),
        };
      function Ja(e, t, n, r, a) {
        Error.call(this),
          Error.captureStackTrace
            ? Error.captureStackTrace(this, this.constructor)
            : (this.stack = new Error().stack),
          (this.message = e),
          (this.name = "AxiosError"),
          t && (this.code = t),
          n && (this.config = n),
          r && (this.request = r),
          a && (this.response = a);
      }
      Xa.inherits(Ja, Error, {
        toJSON: function () {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: Xa.toJSONObject(this.config),
            code: this.code,
            status:
              this.response && this.response.status
                ? this.response.status
                : null,
          };
        },
      });
      const Za = Ja.prototype,
        eo = {};
      [
        "ERR_BAD_OPTION_VALUE",
        "ERR_BAD_OPTION",
        "ECONNABORTED",
        "ETIMEDOUT",
        "ERR_NETWORK",
        "ERR_FR_TOO_MANY_REDIRECTS",
        "ERR_DEPRECATED",
        "ERR_BAD_RESPONSE",
        "ERR_BAD_REQUEST",
        "ERR_CANCELED",
        "ERR_NOT_SUPPORT",
        "ERR_INVALID_URL",
      ].forEach((e) => {
        eo[e] = { value: e };
      }),
        Object.defineProperties(Ja, eo),
        Object.defineProperty(Za, "isAxiosError", { value: !0 }),
        (Ja.from = (e, t, n, r, a, o) => {
          const i = Object.create(Za);
          return (
            Xa.toFlatObject(
              e,
              i,
              function (e) {
                return e !== Error.prototype;
              },
              (e) => "isAxiosError" !== e
            ),
            Ja.call(i, e.message, t, n, r, a),
            (i.cause = e),
            (i.name = e.name),
            o && Object.assign(i, o),
            i
          );
        });
      const to = Ja;
      function no(e) {
        return Xa.isPlainObject(e) || Xa.isArray(e);
      }
      function ro(e) {
        return Xa.endsWith(e, "[]") ? e.slice(0, -2) : e;
      }
      function ao(e, t, n) {
        return e
          ? e
              .concat(t)
              .map(function (e, t) {
                return (e = ro(e)), !n && t ? "[" + e + "]" : e;
              })
              .join(n ? "." : "")
          : t;
      }
      const oo = Xa.toFlatObject(Xa, {}, null, function (e) {
        return /^is[A-Z]/.test(e);
      });
      const io = function (e, t, n) {
        if (!Xa.isObject(e)) throw new TypeError("target must be an object");
        t = t || new FormData();
        const r = (n = Xa.toFlatObject(
            n,
            { metaTokens: !0, dots: !1, indexes: !1 },
            !1,
            function (e, t) {
              return !Xa.isUndefined(t[e]);
            }
          )).metaTokens,
          a = n.visitor || c,
          o = n.dots,
          i = n.indexes,
          l =
            (n.Blob || ("undefined" !== typeof Blob && Blob)) &&
            Xa.isSpecCompliantForm(t);
        if (!Xa.isFunction(a))
          throw new TypeError("visitor must be a function");
        function s(e) {
          if (null === e) return "";
          if (Xa.isDate(e)) return e.toISOString();
          if (!l && Xa.isBlob(e))
            throw new to("Blob is not supported. Use a Buffer instead.");
          return Xa.isArrayBuffer(e) || Xa.isTypedArray(e)
            ? l && "function" === typeof Blob
              ? new Blob([e])
              : Buffer.from(e)
            : e;
        }
        function c(e, n, a) {
          let l = e;
          if (e && !a && "object" === typeof e)
            if (Xa.endsWith(n, "{}"))
              (n = r ? n : n.slice(0, -2)), (e = JSON.stringify(e));
            else if (
              (Xa.isArray(e) &&
                (function (e) {
                  return Xa.isArray(e) && !e.some(no);
                })(e)) ||
              ((Xa.isFileList(e) || Xa.endsWith(n, "[]")) &&
                (l = Xa.toArray(e)))
            )
              return (
                (n = ro(n)),
                l.forEach(function (e, r) {
                  !Xa.isUndefined(e) &&
                    null !== e &&
                    t.append(
                      !0 === i ? ao([n], r, o) : null === i ? n : n + "[]",
                      s(e)
                    );
                }),
                !1
              );
          return !!no(e) || (t.append(ao(a, n, o), s(e)), !1);
        }
        const u = [],
          d = Object.assign(oo, {
            defaultVisitor: c,
            convertValue: s,
            isVisitable: no,
          });
        if (!Xa.isObject(e)) throw new TypeError("data must be an object");
        return (
          (function e(n, r) {
            if (!Xa.isUndefined(n)) {
              if (-1 !== u.indexOf(n))
                throw Error("Circular reference detected in " + r.join("."));
              u.push(n),
                Xa.forEach(n, function (n, o) {
                  !0 ===
                    (!(Xa.isUndefined(n) || null === n) &&
                      a.call(t, n, Xa.isString(o) ? o.trim() : o, r, d)) &&
                    e(n, r ? r.concat(o) : [o]);
                }),
                u.pop();
            }
          })(e),
          t
        );
      };
      function lo(e) {
        const t = {
          "!": "%21",
          "'": "%27",
          "(": "%28",
          ")": "%29",
          "~": "%7E",
          "%20": "+",
          "%00": "\0",
        };
        return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
          return t[e];
        });
      }
      function so(e, t) {
        (this._pairs = []), e && io(e, this, t);
      }
      const co = so.prototype;
      (co.append = function (e, t) {
        this._pairs.push([e, t]);
      }),
        (co.toString = function (e) {
          const t = e
            ? function (t) {
                return e.call(this, t, lo);
              }
            : lo;
          return this._pairs
            .map(function (e) {
              return t(e[0]) + "=" + t(e[1]);
            }, "")
            .join("&");
        });
      const uo = so;
      function fo(e) {
        return encodeURIComponent(e)
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",")
          .replace(/%20/g, "+")
          .replace(/%5B/gi, "[")
          .replace(/%5D/gi, "]");
      }
      function po(e, t, n) {
        if (!t) return e;
        const r = (n && n.encode) || fo,
          a = n && n.serialize;
        let o;
        if (
          ((o = a
            ? a(t, n)
            : Xa.isURLSearchParams(t)
            ? t.toString()
            : new uo(t, n).toString(r)),
          o)
        ) {
          const t = e.indexOf("#");
          -1 !== t && (e = e.slice(0, t)),
            (e += (-1 === e.indexOf("?") ? "?" : "&") + o);
        }
        return e;
      }
      const mo = class {
          constructor() {
            this.handlers = [];
          }
          use(e, t, n) {
            return (
              this.handlers.push({
                fulfilled: e,
                rejected: t,
                synchronous: !!n && n.synchronous,
                runWhen: n ? n.runWhen : null,
              }),
              this.handlers.length - 1
            );
          }
          eject(e) {
            this.handlers[e] && (this.handlers[e] = null);
          }
          clear() {
            this.handlers && (this.handlers = []);
          }
          forEach(e) {
            Xa.forEach(this.handlers, function (t) {
              null !== t && e(t);
            });
          }
        },
        ho = {
          silentJSONParsing: !0,
          forcedJSONParsing: !0,
          clarifyTimeoutError: !1,
        },
        go = {
          isBrowser: !0,
          classes: {
            URLSearchParams:
              "undefined" !== typeof URLSearchParams ? URLSearchParams : uo,
            FormData: "undefined" !== typeof FormData ? FormData : null,
            Blob: "undefined" !== typeof Blob ? Blob : null,
          },
          protocols: ["http", "https", "file", "blob", "url", "data"],
        },
        bo = "undefined" !== typeof window && "undefined" !== typeof document,
        wo =
          ((vo = "undefined" !== typeof navigator && navigator.product),
          bo && ["ReactNative", "NativeScript", "NS"].indexOf(vo) < 0);
      var vo;
      const yo =
          "undefined" !== typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          "function" === typeof self.importScripts,
        xo = (bo && window.location.href) || "http://localhost",
        ko = { ...e, ...go };
      const jo = function (e) {
        function t(e, n, r, a) {
          let o = e[a++];
          if ("__proto__" === o) return !0;
          const i = Number.isFinite(+o),
            l = a >= e.length;
          if (((o = !o && Xa.isArray(r) ? r.length : o), l))
            return Xa.hasOwnProp(r, o) ? (r[o] = [r[o], n]) : (r[o] = n), !i;
          (r[o] && Xa.isObject(r[o])) || (r[o] = []);
          return (
            t(e, n, r[o], a) &&
              Xa.isArray(r[o]) &&
              (r[o] = (function (e) {
                const t = {},
                  n = Object.keys(e);
                let r;
                const a = n.length;
                let o;
                for (r = 0; r < a; r++) (o = n[r]), (t[o] = e[o]);
                return t;
              })(r[o])),
            !i
          );
        }
        if (Xa.isFormData(e) && Xa.isFunction(e.entries)) {
          const n = {};
          return (
            Xa.forEachEntry(e, (e, r) => {
              t(
                (function (e) {
                  return Xa.matchAll(/\w+|\[(\w*)]/g, e).map((e) =>
                    "[]" === e[0] ? "" : e[1] || e[0]
                  );
                })(e),
                r,
                n,
                0
              );
            }),
            n
          );
        }
        return null;
      };
      const Co = {
        transitional: ho,
        adapter: ["xhr", "http", "fetch"],
        transformRequest: [
          function (e, t) {
            const n = t.getContentType() || "",
              r = n.indexOf("application/json") > -1,
              a = Xa.isObject(e);
            a && Xa.isHTMLForm(e) && (e = new FormData(e));
            if (Xa.isFormData(e)) return r ? JSON.stringify(jo(e)) : e;
            if (
              Xa.isArrayBuffer(e) ||
              Xa.isBuffer(e) ||
              Xa.isStream(e) ||
              Xa.isFile(e) ||
              Xa.isBlob(e) ||
              Xa.isReadableStream(e)
            )
              return e;
            if (Xa.isArrayBufferView(e)) return e.buffer;
            if (Xa.isURLSearchParams(e))
              return (
                t.setContentType(
                  "application/x-www-form-urlencoded;charset=utf-8",
                  !1
                ),
                e.toString()
              );
            let o;
            if (a) {
              if (n.indexOf("application/x-www-form-urlencoded") > -1)
                return (function (e, t) {
                  return io(
                    e,
                    new ko.classes.URLSearchParams(),
                    Object.assign(
                      {
                        visitor: function (e, t, n, r) {
                          return ko.isNode && Xa.isBuffer(e)
                            ? (this.append(t, e.toString("base64")), !1)
                            : r.defaultVisitor.apply(this, arguments);
                        },
                      },
                      t
                    )
                  );
                })(e, this.formSerializer).toString();
              if (
                (o = Xa.isFileList(e)) ||
                n.indexOf("multipart/form-data") > -1
              ) {
                const t = this.env && this.env.FormData;
                return io(
                  o ? { "files[]": e } : e,
                  t && new t(),
                  this.formSerializer
                );
              }
            }
            return a || r
              ? (t.setContentType("application/json", !1),
                (function (e, t, n) {
                  if (Xa.isString(e))
                    try {
                      return (t || JSON.parse)(e), Xa.trim(e);
                    } catch (hl) {
                      if ("SyntaxError" !== hl.name) throw hl;
                    }
                  return (n || JSON.stringify)(e);
                })(e))
              : e;
          },
        ],
        transformResponse: [
          function (e) {
            const t = this.transitional || Co.transitional,
              n = t && t.forcedJSONParsing,
              r = "json" === this.responseType;
            if (Xa.isResponse(e) || Xa.isReadableStream(e)) return e;
            if (e && Xa.isString(e) && ((n && !this.responseType) || r)) {
              const n = !(t && t.silentJSONParsing) && r;
              try {
                return JSON.parse(e);
              } catch (hl) {
                if (n) {
                  if ("SyntaxError" === hl.name)
                    throw to.from(
                      hl,
                      to.ERR_BAD_RESPONSE,
                      this,
                      null,
                      this.response
                    );
                  throw hl;
                }
              }
            }
            return e;
          },
        ],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: { FormData: ko.classes.FormData, Blob: ko.classes.Blob },
        validateStatus: function (e) {
          return e >= 200 && e < 300;
        },
        headers: {
          common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0,
          },
        },
      };
      Xa.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
        Co.headers[e] = {};
      });
      const So = Co,
        No = Xa.toObjectSet([
          "age",
          "authorization",
          "content-length",
          "content-type",
          "etag",
          "expires",
          "from",
          "host",
          "if-modified-since",
          "if-unmodified-since",
          "last-modified",
          "location",
          "max-forwards",
          "proxy-authorization",
          "referer",
          "retry-after",
          "user-agent",
        ]),
        Eo = Symbol("internals");
      function Ro(e) {
        return e && String(e).trim().toLowerCase();
      }
      function Fo(e) {
        return !1 === e || null == e
          ? e
          : Xa.isArray(e)
          ? e.map(Fo)
          : String(e);
      }
      function Oo(e, t, n, r, a) {
        return Xa.isFunction(r)
          ? r.call(this, t, n)
          : (a && (t = n),
            Xa.isString(t)
              ? Xa.isString(r)
                ? -1 !== t.indexOf(r)
                : Xa.isRegExp(r)
                ? r.test(t)
                : void 0
              : void 0);
      }
      class Ao {
        constructor(e) {
          e && this.set(e);
        }
        set(e, t, n) {
          const r = this;
          function a(e, t, n) {
            const a = Ro(t);
            if (!a) throw new Error("header name must be a non-empty string");
            const o = Xa.findKey(r, a);
            (!o ||
              void 0 === r[o] ||
              !0 === n ||
              (void 0 === n && !1 !== r[o])) &&
              (r[o || t] = Fo(e));
          }
          const o = (e, t) => Xa.forEach(e, (e, n) => a(e, n, t));
          if (Xa.isPlainObject(e) || e instanceof this.constructor) o(e, t);
          else if (
            Xa.isString(e) &&
            (e = e.trim()) &&
            !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
          )
            o(
              ((e) => {
                const t = {};
                let n, r, a;
                return (
                  e &&
                    e.split("\n").forEach(function (e) {
                      (a = e.indexOf(":")),
                        (n = e.substring(0, a).trim().toLowerCase()),
                        (r = e.substring(a + 1).trim()),
                        !n ||
                          (t[n] && No[n]) ||
                          ("set-cookie" === n
                            ? t[n]
                              ? t[n].push(r)
                              : (t[n] = [r])
                            : (t[n] = t[n] ? t[n] + ", " + r : r));
                    }),
                  t
                );
              })(e),
              t
            );
          else if (Xa.isHeaders(e))
            for (const [i, l] of e.entries()) a(l, i, n);
          else null != e && a(t, e, n);
          return this;
        }
        get(e, t) {
          if ((e = Ro(e))) {
            const n = Xa.findKey(this, e);
            if (n) {
              const e = this[n];
              if (!t) return e;
              if (!0 === t)
                return (function (e) {
                  const t = Object.create(null),
                    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                  let r;
                  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
                  return t;
                })(e);
              if (Xa.isFunction(t)) return t.call(this, e, n);
              if (Xa.isRegExp(t)) return t.exec(e);
              throw new TypeError("parser must be boolean|regexp|function");
            }
          }
        }
        has(e, t) {
          if ((e = Ro(e))) {
            const n = Xa.findKey(this, e);
            return !(!n || void 0 === this[n] || (t && !Oo(0, this[n], n, t)));
          }
          return !1;
        }
        delete(e, t) {
          const n = this;
          let r = !1;
          function a(e) {
            if ((e = Ro(e))) {
              const a = Xa.findKey(n, e);
              !a || (t && !Oo(0, n[a], a, t)) || (delete n[a], (r = !0));
            }
          }
          return Xa.isArray(e) ? e.forEach(a) : a(e), r;
        }
        clear(e) {
          const t = Object.keys(this);
          let n = t.length,
            r = !1;
          for (; n--; ) {
            const a = t[n];
            (e && !Oo(0, this[a], a, e, !0)) || (delete this[a], (r = !0));
          }
          return r;
        }
        normalize(e) {
          const t = this,
            n = {};
          return (
            Xa.forEach(this, (r, a) => {
              const o = Xa.findKey(n, a);
              if (o) return (t[o] = Fo(r)), void delete t[a];
              const i = e
                ? (function (e) {
                    return e
                      .trim()
                      .toLowerCase()
                      .replace(
                        /([a-z\d])(\w*)/g,
                        (e, t, n) => t.toUpperCase() + n
                      );
                  })(a)
                : String(a).trim();
              i !== a && delete t[a], (t[i] = Fo(r)), (n[i] = !0);
            }),
            this
          );
        }
        concat() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return this.constructor.concat(this, ...t);
        }
        toJSON(e) {
          const t = Object.create(null);
          return (
            Xa.forEach(this, (n, r) => {
              null != n &&
                !1 !== n &&
                (t[r] = e && Xa.isArray(n) ? n.join(", ") : n);
            }),
            t
          );
        }
        [Symbol.iterator]() {
          return Object.entries(this.toJSON())[Symbol.iterator]();
        }
        toString() {
          return Object.entries(this.toJSON())
            .map((e) => {
              let [t, n] = e;
              return t + ": " + n;
            })
            .join("\n");
        }
        get [Symbol.toStringTag]() {
          return "AxiosHeaders";
        }
        static from(e) {
          return e instanceof this ? e : new this(e);
        }
        static concat(e) {
          const t = new this(e);
          for (
            var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1;
            a < n;
            a++
          )
            r[a - 1] = arguments[a];
          return r.forEach((e) => t.set(e)), t;
        }
        static accessor(e) {
          const t = (this[Eo] = this[Eo] = { accessors: {} }).accessors,
            n = this.prototype;
          function r(e) {
            const r = Ro(e);
            t[r] ||
              (!(function (e, t) {
                const n = Xa.toCamelCase(" " + t);
                ["get", "set", "has"].forEach((r) => {
                  Object.defineProperty(e, r + n, {
                    value: function (e, n, a) {
                      return this[r].call(this, t, e, n, a);
                    },
                    configurable: !0,
                  });
                });
              })(n, e),
              (t[r] = !0));
          }
          return Xa.isArray(e) ? e.forEach(r) : r(e), this;
        }
      }
      Ao.accessor([
        "Content-Type",
        "Content-Length",
        "Accept",
        "Accept-Encoding",
        "User-Agent",
        "Authorization",
      ]),
        Xa.reduceDescriptors(Ao.prototype, (e, t) => {
          let { value: n } = e,
            r = t[0].toUpperCase() + t.slice(1);
          return {
            get: () => n,
            set(e) {
              this[r] = e;
            },
          };
        }),
        Xa.freezeMethods(Ao);
      const Po = Ao;
      function To(e, t) {
        const n = this || So,
          r = t || n,
          a = Po.from(r.headers);
        let o = r.data;
        return (
          Xa.forEach(e, function (e) {
            o = e.call(n, o, a.normalize(), t ? t.status : void 0);
          }),
          a.normalize(),
          o
        );
      }
      function Mo(e) {
        return !(!e || !e.__CANCEL__);
      }
      function _o(e, t, n) {
        to.call(this, null == e ? "canceled" : e, to.ERR_CANCELED, t, n),
          (this.name = "CanceledError");
      }
      Xa.inherits(_o, to, { __CANCEL__: !0 });
      const Io = _o;
      function Lo(e, t, n) {
        const r = n.config.validateStatus;
        n.status && r && !r(n.status)
          ? t(
              new to(
                "Request failed with status code " + n.status,
                [to.ERR_BAD_REQUEST, to.ERR_BAD_RESPONSE][
                  Math.floor(n.status / 100) - 4
                ],
                n.config,
                n.request,
                n
              )
            )
          : e(n);
      }
      const Uo = function (e, t) {
        e = e || 10;
        const n = new Array(e),
          r = new Array(e);
        let a,
          o = 0,
          i = 0;
        return (
          (t = void 0 !== t ? t : 1e3),
          function (l) {
            const s = Date.now(),
              c = r[i];
            a || (a = s), (n[o] = l), (r[o] = s);
            let u = i,
              d = 0;
            for (; u !== o; ) (d += n[u++]), (u %= e);
            if (((o = (o + 1) % e), o === i && (i = (i + 1) % e), s - a < t))
              return;
            const f = c && s - c;
            return f ? Math.round((1e3 * d) / f) : void 0;
          }
        );
      };
      const Do = function (e, t) {
          let n = 0;
          const r = 1e3 / t;
          let a = null;
          return function () {
            const t = !0 === this,
              o = Date.now();
            if (t || o - n > r)
              return (
                a && (clearTimeout(a), (a = null)),
                (n = o),
                e.apply(null, arguments)
              );
            a ||
              (a = setTimeout(
                () => ((a = null), (n = Date.now()), e.apply(null, arguments)),
                r - (o - n)
              ));
          };
        },
        zo = function (e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 3,
            r = 0;
          const a = Uo(50, 250);
          return Do((n) => {
            const o = n.loaded,
              i = n.lengthComputable ? n.total : void 0,
              l = o - r,
              s = a(l);
            r = o;
            const c = {
              loaded: o,
              total: i,
              progress: i ? o / i : void 0,
              bytes: l,
              rate: s || void 0,
              estimated: s && i && o <= i ? (i - o) / s : void 0,
              event: n,
              lengthComputable: null != i,
            };
            (c[t ? "download" : "upload"] = !0), e(c);
          }, n);
        },
        Bo = ko.hasStandardBrowserEnv
          ? (function () {
              const e = /(msie|trident)/i.test(navigator.userAgent),
                t = document.createElement("a");
              let n;
              function r(n) {
                let r = n;
                return (
                  e && (t.setAttribute("href", r), (r = t.href)),
                  t.setAttribute("href", r),
                  {
                    href: t.href,
                    protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
                    host: t.host,
                    search: t.search ? t.search.replace(/^\?/, "") : "",
                    hash: t.hash ? t.hash.replace(/^#/, "") : "",
                    hostname: t.hostname,
                    port: t.port,
                    pathname:
                      "/" === t.pathname.charAt(0)
                        ? t.pathname
                        : "/" + t.pathname,
                  }
                );
              }
              return (
                (n = r(window.location.href)),
                function (e) {
                  const t = Xa.isString(e) ? r(e) : e;
                  return t.protocol === n.protocol && t.host === n.host;
                }
              );
            })()
          : function () {
              return !0;
            },
        Wo = ko.hasStandardBrowserEnv
          ? {
              write(e, t, n, r, a, o) {
                const i = [e + "=" + encodeURIComponent(t)];
                Xa.isNumber(n) &&
                  i.push("expires=" + new Date(n).toGMTString()),
                  Xa.isString(r) && i.push("path=" + r),
                  Xa.isString(a) && i.push("domain=" + a),
                  !0 === o && i.push("secure"),
                  (document.cookie = i.join("; "));
              },
              read(e) {
                const t = document.cookie.match(
                  new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
                );
                return t ? decodeURIComponent(t[3]) : null;
              },
              remove(e) {
                this.write(e, "", Date.now() - 864e5);
              },
            }
          : { write() {}, read: () => null, remove() {} };
      function Ho(e, t) {
        return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
          ? (function (e, t) {
              return t
                ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "")
                : e;
            })(e, t)
          : t;
      }
      const Vo = (e) => (e instanceof Po ? { ...e } : e);
      function Yo(e, t) {
        t = t || {};
        const n = {};
        function r(e, t, n) {
          return Xa.isPlainObject(e) && Xa.isPlainObject(t)
            ? Xa.merge.call({ caseless: n }, e, t)
            : Xa.isPlainObject(t)
            ? Xa.merge({}, t)
            : Xa.isArray(t)
            ? t.slice()
            : t;
        }
        function a(e, t, n) {
          return Xa.isUndefined(t)
            ? Xa.isUndefined(e)
              ? void 0
              : r(void 0, e, n)
            : r(e, t, n);
        }
        function o(e, t) {
          if (!Xa.isUndefined(t)) return r(void 0, t);
        }
        function i(e, t) {
          return Xa.isUndefined(t)
            ? Xa.isUndefined(e)
              ? void 0
              : r(void 0, e)
            : r(void 0, t);
        }
        function l(n, a, o) {
          return o in t ? r(n, a) : o in e ? r(void 0, n) : void 0;
        }
        const s = {
          url: o,
          method: o,
          data: o,
          baseURL: i,
          transformRequest: i,
          transformResponse: i,
          paramsSerializer: i,
          timeout: i,
          timeoutMessage: i,
          withCredentials: i,
          withXSRFToken: i,
          adapter: i,
          responseType: i,
          xsrfCookieName: i,
          xsrfHeaderName: i,
          onUploadProgress: i,
          onDownloadProgress: i,
          decompress: i,
          maxContentLength: i,
          maxBodyLength: i,
          beforeRedirect: i,
          transport: i,
          httpAgent: i,
          httpsAgent: i,
          cancelToken: i,
          socketPath: i,
          responseEncoding: i,
          validateStatus: l,
          headers: (e, t) => a(Vo(e), Vo(t), !0),
        };
        return (
          Xa.forEach(Object.keys(Object.assign({}, e, t)), function (r) {
            const o = s[r] || a,
              i = o(e[r], t[r], r);
            (Xa.isUndefined(i) && o !== l) || (n[r] = i);
          }),
          n
        );
      }
      const qo = (e) => {
          const t = Yo({}, e);
          let n,
            {
              data: r,
              withXSRFToken: a,
              xsrfHeaderName: o,
              xsrfCookieName: i,
              headers: l,
              auth: s,
            } = t;
          if (
            ((t.headers = l = Po.from(l)),
            (t.url = po(Ho(t.baseURL, t.url), e.params, e.paramsSerializer)),
            s &&
              l.set(
                "Authorization",
                "Basic " +
                  btoa(
                    (s.username || "") +
                      ":" +
                      (s.password
                        ? unescape(encodeURIComponent(s.password))
                        : "")
                  )
              ),
            Xa.isFormData(r))
          )
            if (ko.hasStandardBrowserEnv || ko.hasStandardBrowserWebWorkerEnv)
              l.setContentType(void 0);
            else if (!1 !== (n = l.getContentType())) {
              const [e, ...t] = n
                ? n
                    .split(";")
                    .map((e) => e.trim())
                    .filter(Boolean)
                : [];
              l.setContentType([e || "multipart/form-data", ...t].join("; "));
            }
          if (
            ko.hasStandardBrowserEnv &&
            (a && Xa.isFunction(a) && (a = a(t)), a || (!1 !== a && Bo(t.url)))
          ) {
            const e = o && i && Wo.read(i);
            e && l.set(o, e);
          }
          return t;
        },
        $o =
          "undefined" !== typeof XMLHttpRequest &&
          function (e) {
            return new Promise(function (t, n) {
              const r = qo(e);
              let a = r.data;
              const o = Po.from(r.headers).normalize();
              let i,
                { responseType: l } = r;
              function s() {
                r.cancelToken && r.cancelToken.unsubscribe(i),
                  r.signal && r.signal.removeEventListener("abort", i);
              }
              let c = new XMLHttpRequest();
              function u() {
                if (!c) return;
                const r = Po.from(
                  "getAllResponseHeaders" in c && c.getAllResponseHeaders()
                );
                Lo(
                  function (e) {
                    t(e), s();
                  },
                  function (e) {
                    n(e), s();
                  },
                  {
                    data:
                      l && "text" !== l && "json" !== l
                        ? c.response
                        : c.responseText,
                    status: c.status,
                    statusText: c.statusText,
                    headers: r,
                    config: e,
                    request: c,
                  }
                ),
                  (c = null);
              }
              c.open(r.method.toUpperCase(), r.url, !0),
                (c.timeout = r.timeout),
                "onloadend" in c
                  ? (c.onloadend = u)
                  : (c.onreadystatechange = function () {
                      c &&
                        4 === c.readyState &&
                        (0 !== c.status ||
                          (c.responseURL &&
                            0 === c.responseURL.indexOf("file:"))) &&
                        setTimeout(u);
                    }),
                (c.onabort = function () {
                  c &&
                    (n(new to("Request aborted", to.ECONNABORTED, r, c)),
                    (c = null));
                }),
                (c.onerror = function () {
                  n(new to("Network Error", to.ERR_NETWORK, r, c)), (c = null);
                }),
                (c.ontimeout = function () {
                  let e = r.timeout
                    ? "timeout of " + r.timeout + "ms exceeded"
                    : "timeout exceeded";
                  const t = r.transitional || ho;
                  r.timeoutErrorMessage && (e = r.timeoutErrorMessage),
                    n(
                      new to(
                        e,
                        t.clarifyTimeoutError ? to.ETIMEDOUT : to.ECONNABORTED,
                        r,
                        c
                      )
                    ),
                    (c = null);
                }),
                void 0 === a && o.setContentType(null),
                "setRequestHeader" in c &&
                  Xa.forEach(o.toJSON(), function (e, t) {
                    c.setRequestHeader(t, e);
                  }),
                Xa.isUndefined(r.withCredentials) ||
                  (c.withCredentials = !!r.withCredentials),
                l && "json" !== l && (c.responseType = r.responseType),
                "function" === typeof r.onDownloadProgress &&
                  c.addEventListener("progress", zo(r.onDownloadProgress, !0)),
                "function" === typeof r.onUploadProgress &&
                  c.upload &&
                  c.upload.addEventListener("progress", zo(r.onUploadProgress)),
                (r.cancelToken || r.signal) &&
                  ((i = (t) => {
                    c &&
                      (n(!t || t.type ? new Io(null, e, c) : t),
                      c.abort(),
                      (c = null));
                  }),
                  r.cancelToken && r.cancelToken.subscribe(i),
                  r.signal &&
                    (r.signal.aborted
                      ? i()
                      : r.signal.addEventListener("abort", i)));
              const d = (function (e) {
                const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                return (t && t[1]) || "";
              })(r.url);
              d && -1 === ko.protocols.indexOf(d)
                ? n(
                    new to(
                      "Unsupported protocol " + d + ":",
                      to.ERR_BAD_REQUEST,
                      e
                    )
                  )
                : c.send(a || null);
            });
          },
        Go = (e, t) => {
          let n,
            r = new AbortController();
          const a = function (e) {
            if (!n) {
              (n = !0), i();
              const t = e instanceof Error ? e : this.reason;
              r.abort(
                t instanceof to ? t : new Io(t instanceof Error ? t.message : t)
              );
            }
          };
          let o =
            t &&
            setTimeout(() => {
              a(new to("timeout ".concat(t, " of ms exceeded"), to.ETIMEDOUT));
            }, t);
          const i = () => {
            e &&
              (o && clearTimeout(o),
              (o = null),
              e.forEach((e) => {
                e &&
                  (e.removeEventListener
                    ? e.removeEventListener("abort", a)
                    : e.unsubscribe(a));
              }),
              (e = null));
          };
          e.forEach(
            (e) => e && e.addEventListener && e.addEventListener("abort", a)
          );
          const { signal: l } = r;
          return (
            (l.unsubscribe = i),
            [
              l,
              () => {
                o && clearTimeout(o), (o = null);
              },
            ]
          );
        },
        Qo = function* (e, t) {
          let n = e.byteLength;
          if (!t || n < t) return void (yield e);
          let r,
            a = 0;
          for (; a < n; ) (r = a + t), yield e.slice(a, r), (a = r);
        },
        Ko = (e, t, n, r, a) => {
          const o = (async function* (e, t, n) {
            for await (const r of e)
              yield* Qo(ArrayBuffer.isView(r) ? r : await n(String(r)), t);
          })(e, t, a);
          let i = 0;
          return new ReadableStream(
            {
              type: "bytes",
              async pull(e) {
                const { done: t, value: a } = await o.next();
                if (t) return e.close(), void r();
                let l = a.byteLength;
                n && n((i += l)), e.enqueue(new Uint8Array(a));
              },
              cancel: (e) => (r(e), o.return()),
            },
            { highWaterMark: 2 }
          );
        },
        Xo = (e, t) => {
          const n = null != e;
          return (r) =>
            setTimeout(() => t({ lengthComputable: n, total: e, loaded: r }));
        },
        Jo =
          "function" === typeof fetch &&
          "function" === typeof Request &&
          "function" === typeof Response,
        Zo = Jo && "function" === typeof ReadableStream,
        ei =
          Jo &&
          ("function" === typeof TextEncoder
            ? ((ti = new TextEncoder()), (e) => ti.encode(e))
            : async (e) => new Uint8Array(await new Response(e).arrayBuffer()));
      var ti;
      const ni =
          Zo &&
          (() => {
            let e = !1;
            const t = new Request(ko.origin, {
              body: new ReadableStream(),
              method: "POST",
              get duplex() {
                return (e = !0), "half";
              },
            }).headers.has("Content-Type");
            return e && !t;
          })(),
        ri =
          Zo &&
          !!(() => {
            try {
              return Xa.isReadableStream(new Response("").body);
            } catch (e) {}
          })(),
        ai = { stream: ri && ((e) => e.body) };
      var oi;
      Jo &&
        ((oi = new Response()),
        ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
          !ai[e] &&
            (ai[e] = Xa.isFunction(oi[e])
              ? (t) => t[e]()
              : (t, n) => {
                  throw new to(
                    "Response type '".concat(e, "' is not supported"),
                    to.ERR_NOT_SUPPORT,
                    n
                  );
                });
        }));
      const ii = async (e, t) => {
          const n = Xa.toFiniteNumber(e.getContentLength());
          return null == n
            ? (async (e) =>
                null == e
                  ? 0
                  : Xa.isBlob(e)
                  ? e.size
                  : Xa.isSpecCompliantForm(e)
                  ? (await new Request(e).arrayBuffer()).byteLength
                  : Xa.isArrayBufferView(e)
                  ? e.byteLength
                  : (Xa.isURLSearchParams(e) && (e += ""),
                    Xa.isString(e) ? (await ei(e)).byteLength : void 0))(t)
            : n;
        },
        li =
          Jo &&
          (async (e) => {
            let {
              url: t,
              method: n,
              data: r,
              signal: a,
              cancelToken: o,
              timeout: i,
              onDownloadProgress: l,
              onUploadProgress: s,
              responseType: c,
              headers: u,
              withCredentials: d = "same-origin",
              fetchOptions: f,
            } = qo(e);
            c = c ? (c + "").toLowerCase() : "text";
            let p,
              m,
              [h, g] = a || o || i ? Go([a, o], i) : [];
            const b = () => {
              !p &&
                setTimeout(() => {
                  h && h.unsubscribe();
                }),
                (p = !0);
            };
            let w;
            try {
              if (
                s &&
                ni &&
                "get" !== n &&
                "head" !== n &&
                0 !== (w = await ii(u, r))
              ) {
                let e,
                  n = new Request(t, {
                    method: "POST",
                    body: r,
                    duplex: "half",
                  });
                Xa.isFormData(r) &&
                  (e = n.headers.get("content-type")) &&
                  u.setContentType(e),
                  n.body && (r = Ko(n.body, 65536, Xo(w, zo(s)), null, ei));
              }
              Xa.isString(d) || (d = d ? "cors" : "omit"),
                (m = new Request(t, {
                  ...f,
                  signal: h,
                  method: n.toUpperCase(),
                  headers: u.normalize().toJSON(),
                  body: r,
                  duplex: "half",
                  withCredentials: d,
                }));
              let a = await fetch(m);
              const o = ri && ("stream" === c || "response" === c);
              if (ri && (l || o)) {
                const e = {};
                ["status", "statusText", "headers"].forEach((t) => {
                  e[t] = a[t];
                });
                const t = Xa.toFiniteNumber(a.headers.get("content-length"));
                a = new Response(
                  Ko(a.body, 65536, l && Xo(t, zo(l, !0)), o && b, ei),
                  e
                );
              }
              c = c || "text";
              let i = await ai[Xa.findKey(ai, c) || "text"](a, e);
              return (
                !o && b(),
                g && g(),
                await new Promise((t, n) => {
                  Lo(t, n, {
                    data: i,
                    headers: Po.from(a.headers),
                    status: a.status,
                    statusText: a.statusText,
                    config: e,
                    request: m,
                  });
                })
              );
            } catch (v) {
              if (
                (b(), v && "TypeError" === v.name && /fetch/i.test(v.message))
              )
                throw Object.assign(
                  new to("Network Error", to.ERR_NETWORK, e, m),
                  { cause: v.cause || v }
                );
              throw to.from(v, v && v.code, e, m);
            }
          }),
        si = { http: null, xhr: $o, fetch: li };
      Xa.forEach(si, (e, t) => {
        if (e) {
          try {
            Object.defineProperty(e, "name", { value: t });
          } catch (hl) {}
          Object.defineProperty(e, "adapterName", { value: t });
        }
      });
      const ci = (e) => "- ".concat(e),
        ui = (e) => Xa.isFunction(e) || null === e || !1 === e,
        di = (e) => {
          e = Xa.isArray(e) ? e : [e];
          const { length: t } = e;
          let n, r;
          const a = {};
          for (let o = 0; o < t; o++) {
            let t;
            if (
              ((n = e[o]),
              (r = n),
              !ui(n) && ((r = si[(t = String(n)).toLowerCase()]), void 0 === r))
            )
              throw new to("Unknown adapter '".concat(t, "'"));
            if (r) break;
            a[t || "#" + o] = r;
          }
          if (!r) {
            const e = Object.entries(a).map((e) => {
              let [t, n] = e;
              return (
                "adapter ".concat(t, " ") +
                (!1 === n
                  ? "is not supported by the environment"
                  : "is not available in the build")
              );
            });
            let n = t
              ? e.length > 1
                ? "since :\n" + e.map(ci).join("\n")
                : " " + ci(e[0])
              : "as no adapter specified";
            throw new to(
              "There is no suitable adapter to dispatch the request " + n,
              "ERR_NOT_SUPPORT"
            );
          }
          return r;
        };
      function fi(e) {
        if (
          (e.cancelToken && e.cancelToken.throwIfRequested(),
          e.signal && e.signal.aborted)
        )
          throw new Io(null, e);
      }
      function pi(e) {
        fi(e),
          (e.headers = Po.from(e.headers)),
          (e.data = To.call(e, e.transformRequest)),
          -1 !== ["post", "put", "patch"].indexOf(e.method) &&
            e.headers.setContentType("application/x-www-form-urlencoded", !1);
        return di(e.adapter || So.adapter)(e).then(
          function (t) {
            return (
              fi(e),
              (t.data = To.call(e, e.transformResponse, t)),
              (t.headers = Po.from(t.headers)),
              t
            );
          },
          function (t) {
            return (
              Mo(t) ||
                (fi(e),
                t &&
                  t.response &&
                  ((t.response.data = To.call(
                    e,
                    e.transformResponse,
                    t.response
                  )),
                  (t.response.headers = Po.from(t.response.headers)))),
              Promise.reject(t)
            );
          }
        );
      }
      const mi = "1.7.2",
        hi = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach(
        (e, t) => {
          hi[e] = function (n) {
            return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
          };
        }
      );
      const gi = {};
      hi.transitional = function (e, t, n) {
        function r(e, t) {
          return (
            "[Axios v1.7.2] Transitional option '" +
            e +
            "'" +
            t +
            (n ? ". " + n : "")
          );
        }
        return (n, a, o) => {
          if (!1 === e)
            throw new to(
              r(a, " has been removed" + (t ? " in " + t : "")),
              to.ERR_DEPRECATED
            );
          return (
            t &&
              !gi[a] &&
              ((gi[a] = !0),
              console.warn(
                r(
                  a,
                  " has been deprecated since v" +
                    t +
                    " and will be removed in the near future"
                )
              )),
            !e || e(n, a, o)
          );
        };
      };
      const bi = {
          assertOptions: function (e, t, n) {
            if ("object" !== typeof e)
              throw new to(
                "options must be an object",
                to.ERR_BAD_OPTION_VALUE
              );
            const r = Object.keys(e);
            let a = r.length;
            for (; a-- > 0; ) {
              const o = r[a],
                i = t[o];
              if (i) {
                const t = e[o],
                  n = void 0 === t || i(t, o, e);
                if (!0 !== n)
                  throw new to(
                    "option " + o + " must be " + n,
                    to.ERR_BAD_OPTION_VALUE
                  );
              } else if (!0 !== n)
                throw new to("Unknown option " + o, to.ERR_BAD_OPTION);
            }
          },
          validators: hi,
        },
        wi = bi.validators;
      class vi {
        constructor(e) {
          (this.defaults = e),
            (this.interceptors = { request: new mo(), response: new mo() });
        }
        async request(e, t) {
          try {
            return await this._request(e, t);
          } catch (n) {
            if (n instanceof Error) {
              let e;
              Error.captureStackTrace
                ? Error.captureStackTrace((e = {}))
                : (e = new Error());
              const t = e.stack ? e.stack.replace(/^.+\n/, "") : "";
              try {
                n.stack
                  ? t &&
                    !String(n.stack).endsWith(t.replace(/^.+\n.+\n/, "")) &&
                    (n.stack += "\n" + t)
                  : (n.stack = t);
              } catch (hl) {}
            }
            throw n;
          }
        }
        _request(e, t) {
          "string" === typeof e ? ((t = t || {}).url = e) : (t = e || {}),
            (t = Yo(this.defaults, t));
          const { transitional: n, paramsSerializer: r, headers: a } = t;
          void 0 !== n &&
            bi.assertOptions(
              n,
              {
                silentJSONParsing: wi.transitional(wi.boolean),
                forcedJSONParsing: wi.transitional(wi.boolean),
                clarifyTimeoutError: wi.transitional(wi.boolean),
              },
              !1
            ),
            null != r &&
              (Xa.isFunction(r)
                ? (t.paramsSerializer = { serialize: r })
                : bi.assertOptions(
                    r,
                    { encode: wi.function, serialize: wi.function },
                    !0
                  )),
            (t.method = (
              t.method ||
              this.defaults.method ||
              "get"
            ).toLowerCase());
          let o = a && Xa.merge(a.common, a[t.method]);
          a &&
            Xa.forEach(
              ["delete", "get", "head", "post", "put", "patch", "common"],
              (e) => {
                delete a[e];
              }
            ),
            (t.headers = Po.concat(o, a));
          const i = [];
          let l = !0;
          this.interceptors.request.forEach(function (e) {
            ("function" === typeof e.runWhen && !1 === e.runWhen(t)) ||
              ((l = l && e.synchronous), i.unshift(e.fulfilled, e.rejected));
          });
          const s = [];
          let c;
          this.interceptors.response.forEach(function (e) {
            s.push(e.fulfilled, e.rejected);
          });
          let u,
            d = 0;
          if (!l) {
            const e = [pi.bind(this), void 0];
            for (
              e.unshift.apply(e, i),
                e.push.apply(e, s),
                u = e.length,
                c = Promise.resolve(t);
              d < u;

            )
              c = c.then(e[d++], e[d++]);
            return c;
          }
          u = i.length;
          let f = t;
          for (d = 0; d < u; ) {
            const e = i[d++],
              t = i[d++];
            try {
              f = e(f);
            } catch (p) {
              t.call(this, p);
              break;
            }
          }
          try {
            c = pi.call(this, f);
          } catch (p) {
            return Promise.reject(p);
          }
          for (d = 0, u = s.length; d < u; ) c = c.then(s[d++], s[d++]);
          return c;
        }
        getUri(e) {
          return po(
            Ho((e = Yo(this.defaults, e)).baseURL, e.url),
            e.params,
            e.paramsSerializer
          );
        }
      }
      Xa.forEach(["delete", "get", "head", "options"], function (e) {
        vi.prototype[e] = function (t, n) {
          return this.request(
            Yo(n || {}, { method: e, url: t, data: (n || {}).data })
          );
        };
      }),
        Xa.forEach(["post", "put", "patch"], function (e) {
          function t(t) {
            return function (n, r, a) {
              return this.request(
                Yo(a || {}, {
                  method: e,
                  headers: t ? { "Content-Type": "multipart/form-data" } : {},
                  url: n,
                  data: r,
                })
              );
            };
          }
          (vi.prototype[e] = t()), (vi.prototype[e + "Form"] = t(!0));
        });
      const yi = vi;
      class xi {
        constructor(e) {
          if ("function" !== typeof e)
            throw new TypeError("executor must be a function.");
          let t;
          this.promise = new Promise(function (e) {
            t = e;
          });
          const n = this;
          this.promise.then((e) => {
            if (!n._listeners) return;
            let t = n._listeners.length;
            for (; t-- > 0; ) n._listeners[t](e);
            n._listeners = null;
          }),
            (this.promise.then = (e) => {
              let t;
              const r = new Promise((e) => {
                n.subscribe(e), (t = e);
              }).then(e);
              return (
                (r.cancel = function () {
                  n.unsubscribe(t);
                }),
                r
              );
            }),
            e(function (e, r, a) {
              n.reason || ((n.reason = new Io(e, r, a)), t(n.reason));
            });
        }
        throwIfRequested() {
          if (this.reason) throw this.reason;
        }
        subscribe(e) {
          this.reason
            ? e(this.reason)
            : this._listeners
            ? this._listeners.push(e)
            : (this._listeners = [e]);
        }
        unsubscribe(e) {
          if (!this._listeners) return;
          const t = this._listeners.indexOf(e);
          -1 !== t && this._listeners.splice(t, 1);
        }
        static source() {
          let e;
          return {
            token: new xi(function (t) {
              e = t;
            }),
            cancel: e,
          };
        }
      }
      const ki = xi;
      const ji = {
        Continue: 100,
        SwitchingProtocols: 101,
        Processing: 102,
        EarlyHints: 103,
        Ok: 200,
        Created: 201,
        Accepted: 202,
        NonAuthoritativeInformation: 203,
        NoContent: 204,
        ResetContent: 205,
        PartialContent: 206,
        MultiStatus: 207,
        AlreadyReported: 208,
        ImUsed: 226,
        MultipleChoices: 300,
        MovedPermanently: 301,
        Found: 302,
        SeeOther: 303,
        NotModified: 304,
        UseProxy: 305,
        Unused: 306,
        TemporaryRedirect: 307,
        PermanentRedirect: 308,
        BadRequest: 400,
        Unauthorized: 401,
        PaymentRequired: 402,
        Forbidden: 403,
        NotFound: 404,
        MethodNotAllowed: 405,
        NotAcceptable: 406,
        ProxyAuthenticationRequired: 407,
        RequestTimeout: 408,
        Conflict: 409,
        Gone: 410,
        LengthRequired: 411,
        PreconditionFailed: 412,
        PayloadTooLarge: 413,
        UriTooLong: 414,
        UnsupportedMediaType: 415,
        RangeNotSatisfiable: 416,
        ExpectationFailed: 417,
        ImATeapot: 418,
        MisdirectedRequest: 421,
        UnprocessableEntity: 422,
        Locked: 423,
        FailedDependency: 424,
        TooEarly: 425,
        UpgradeRequired: 426,
        PreconditionRequired: 428,
        TooManyRequests: 429,
        RequestHeaderFieldsTooLarge: 431,
        UnavailableForLegalReasons: 451,
        InternalServerError: 500,
        NotImplemented: 501,
        BadGateway: 502,
        ServiceUnavailable: 503,
        GatewayTimeout: 504,
        HttpVersionNotSupported: 505,
        VariantAlsoNegotiates: 506,
        InsufficientStorage: 507,
        LoopDetected: 508,
        NotExtended: 510,
        NetworkAuthenticationRequired: 511,
      };
      Object.entries(ji).forEach((e) => {
        let [t, n] = e;
        ji[n] = t;
      });
      const Ci = ji;
      const Si = (function e(t) {
        const n = new yi(t),
          r = pa(yi.prototype.request, n);
        return (
          Xa.extend(r, yi.prototype, n, { allOwnKeys: !0 }),
          Xa.extend(r, n, null, { allOwnKeys: !0 }),
          (r.create = function (n) {
            return e(Yo(t, n));
          }),
          r
        );
      })(So);
      (Si.Axios = yi),
        (Si.CanceledError = Io),
        (Si.CancelToken = ki),
        (Si.isCancel = Mo),
        (Si.VERSION = mi),
        (Si.toFormData = io),
        (Si.AxiosError = to),
        (Si.Cancel = Si.CanceledError),
        (Si.all = function (e) {
          return Promise.all(e);
        }),
        (Si.spread = function (e) {
          return function (t) {
            return e.apply(null, t);
          };
        }),
        (Si.isAxiosError = function (e) {
          return Xa.isObject(e) && !0 === e.isAxiosError;
        }),
        (Si.mergeConfig = Yo),
        (Si.AxiosHeaders = Po),
        (Si.formToJSON = (e) => jo(Xa.isHTMLForm(e) ? new FormData(e) : e)),
        (Si.getAdapter = di),
        (Si.HttpStatusCode = Ci),
        (Si.default = Si);
      const Ni = Si,
        Ei = "https://riddle-backend-e1sm.onrender.com/upload/",
        Ri = () => {
          const [e, n] = (0, t.useState)(null),
            [r, a] = (0, t.useState)(""),
            [o, i] = (0, t.useState)(!1),
            [l, s] = (0, t.useState)(null),
            [c, u] = (0, t.useState)("user"),
            d = (0, t.useRef)(null),
            f = ee(),
            p = (0, t.useCallback)(() => {
              const e = d.current.getScreenshot();
              console.log("image src", e), s(e), i(!1), m(e);
            }, [d, s]),
            m = async (e) => {
              const t = e.split(",")[1],
                n = await fetch("data:image/jpeg;base64,".concat(t)).then((e) =>
                  e.blob()
                ),
                r = new FormData();
              r.append("image", n, "image.jpg");
              try {
                const e = (
                    await Ni.post(Ei, r, {
                      headers: { "Content-Type": "multipart/form-data" },
                    })
                  ).data,
                  t = e.predicted_class,
                  n = e.confidence;
                "Coffee Station" === t && n >= "0.80"
                  ? ua()
                      .fire({
                        icon: "success",
                        title: "Your uploaded image is correct.",
                        text: "Move on to the next riddle!",
                      })
                      .then(() => {
                        localStorage.setItem("F1-R2", !0), f("/FlowOneRiddles");
                      })
                  : "Coffee Station" === t && n >= 0.6 && n < 0.8
                  ? ua().fire({
                      icon: "error",
                      title: "Close!",
                      text: "Click clearer and better image of the location.",
                    })
                  : "Coffee Station" != t &&
                    ua().fire({
                      icon: "error",
                      title: "Not correct location.",
                      text: "Looks like you are in the wrong location.",
                    });
              } catch (a) {
                console.error("Error uploading image:", a),
                  ua().fire({
                    icon: "error",
                    title: "Upload Failed",
                    text: "There was an error uploading your image. Please try again.",
                  });
              }
            };
          return (0, ve.jsxs)("div", {
            className:
              "w-full flex items-center justify-center flex-col gap-10 mt-7 mb-10",
            children: [
              (0, ve.jsx)("div", {
                className: "w-4/5 flex items-center justify-start ml-14",
                children: (0, ve.jsx)(na, {
                  className: "h-7",
                  icon: ke,
                  onClick: () => {
                    f("/FlowOneRiddles");
                  },
                }),
              }),
              (0, ve.jsxs)("div", {
                className: "f1-r1 border rounded-xl w-4/5 p-8",
                children: [
                  (0, ve.jsx)("h1", {
                    className: "font-bold text-2xl",
                    children: "Riddle 1",
                  }),
                  (0, ve.jsx)("br", {}),
                  (0, ve.jsx)("p", {
                    children:
                      "In the heart of the campus, I start your day, Where friends and colleagues gather to stay. A morning haven, with coffee in hand, A beautiful spot where moments are planned. What am I?",
                  }),
                  (0, ve.jsx)("div", {
                    className: "w-full flex items-center justify-between",
                    children: (0, ve.jsx)("button", {
                      type: "button",
                      className:
                        "w-2/5 px-3 py-3 border rounded-xl mt-5 text-white",
                      style: { backgroundColor: "#ECA555" },
                      onClick: async () => {
                        if (
                          navigator.mediaDevices &&
                          navigator.mediaDevices.getUserMedia
                        )
                          try {
                            await navigator.mediaDevices.getUserMedia({
                              video: !0,
                            }),
                              i(!0);
                          } catch (e) {
                            console.error("Error accessing the camera:", e),
                              ua().fire({
                                icon: "error",
                                title: "Oops...",
                                text: "Unable to access the camera. Please check your device settings.",
                              });
                          }
                        else
                          console.error("getUserMedia not supported"),
                            ua().fire({
                              icon: "error",
                              title: "Oops...",
                              text: "Your browser does not support camera access.",
                            });
                      },
                      children: "Upload",
                    }),
                  }),
                ],
              }),
              o &&
                (0, ve.jsxs)("div", {
                  className:
                    "fixed top-0 left-0 w-full h-4/5 bg-black z-50 flex flex-col justify-between",
                  children: [
                    (0, ve.jsx)(fa(), {
                      audio: !1,
                      ref: d,
                      screenshotFormat: "image/jpeg",
                      className: "w-full h-full object-cover",
                      videoConstraints: { facingMode: c },
                      playsInline: !0,
                    }),
                    (0, ve.jsx)("div", {
                      className: "absolute top-0 right-0 w-full p-4",
                      children: (0, ve.jsx)(na, {
                        className:
                          "absolute top-0 right-7 h-6 w-6 py-3 rounded-xl mt-5 text-white",
                        icon: Ce,
                        onClick: () => {
                          u((e) => ("user" === e ? "environment" : "user"));
                        },
                      }),
                    }),
                    (0, ve.jsxs)("div", {
                      className:
                        "absolute bottom-0 left-0 w-full p-4 flex justify-evenly",
                      children: [
                        (0, ve.jsx)("button", {
                          onClick: () => {
                            i(!1);
                          },
                          className: "px-3 py-2 border rounded-xl text-white",
                          style: { backgroundColor: "#ECA555" },
                          children: "Go back",
                        }),
                        (0, ve.jsx)("button", {
                          onClick: p,
                          className: "px-3 py-2 border rounded-xl text-white",
                          style: { backgroundColor: "#ECA555" },
                          children: "Capture photo",
                        }),
                      ],
                    }),
                  ],
                }),
              l &&
                (0, ve.jsx)("img", {
                  src: l,
                  alt: "Captured",
                  className: "mt-5",
                }),
            ],
          });
        },
        Fi = () => {
          const [e, n] = (0, t.useState)(null),
            [r, a] = (0, t.useState)(""),
            [o, i] = (0, t.useState)(!1),
            [l, s] = (0, t.useState)(null),
            [c, u] = (0, t.useState)("user"),
            d = (0, t.useRef)(null),
            f = ee(),
            p = (0, t.useCallback)(() => {
              const e = d.current.getScreenshot();
              console.log("image src", e), s(e), i(!1), m(e);
            }, [d, s]),
            m = async (e) => {
              const t = e.split(",")[1],
                n = await fetch("data:image/jpeg;base64,".concat(t)).then((e) =>
                  e.blob()
                ),
                r = new FormData();
              r.append("image", n, "image.jpg");
              try {
                const e = (
                    await Ni.post(Ei, r, {
                      headers: { "Content-Type": "multipart/form-data" },
                    })
                  ).data,
                  t = e.predicted_class,
                  n = e.confidence;
                "brit" === t && n >= "0.80"
                  ? ua()
                      .fire({
                        icon: "success",
                        title: "Your uploaded image is correct.",
                        text: "Move on to the next riddle!",
                      })
                      .then(() => {
                        localStorage.setItem("F1-R3", !0), f("/FlowOneRiddles");
                      })
                  : "brit" === t && n >= 0.6 && n < 0.8
                  ? ua().fire({
                      icon: "error",
                      title: "Close!",
                      text: "Click clearer and better image of the location.",
                    })
                  : "brit" != t &&
                    ua().fire({
                      icon: "error",
                      title: "Not correct location.",
                      text: "Looks like you are in the wrong location.",
                    });
              } catch (a) {
                console.error("Error uploading image:", a),
                  ua().fire({
                    icon: "error",
                    title: "Upload Failed",
                    text: "There was an error uploading your image. Please try again.",
                  });
              }
            };
          return (0, ve.jsxs)("div", {
            className:
              "w-full flex items-center justify-center flex-col gap-10 mt-7 mb-10",
            children: [
              (0, ve.jsx)("div", {
                className: "w-4/5 flex items-center justify-start ml-14",
                children: (0, ve.jsx)(na, {
                  className: "h-7",
                  icon: ke,
                  onClick: () => {
                    f("/FlowOneRiddles");
                  },
                }),
              }),
              (0, ve.jsxs)("div", {
                className: "f1-r1 border rounded-xl w-4/5 p-8",
                children: [
                  (0, ve.jsx)("h1", {
                    className: "font-bold text-2xl",
                    children: "Riddle 2",
                  }),
                  (0, ve.jsx)("br", {}),
                  (0, ve.jsx)("p", {
                    children:
                      "Within university walls, I stand with pride, Offering a cozy spot where cultures collide. My name reflects a distant land's charm, Where students gather, feeling warm. What am I?",
                  }),
                  (0, ve.jsx)("div", {
                    className: "w-full flex items-center justify-between",
                    children: (0, ve.jsx)("button", {
                      type: "button",
                      className:
                        "w-2/5 px-3 py-3 border rounded-xl mt-5 text-white",
                      style: { backgroundColor: "#ECA555" },
                      onClick: async () => {
                        if (
                          navigator.mediaDevices &&
                          navigator.mediaDevices.getUserMedia
                        )
                          try {
                            await navigator.mediaDevices.getUserMedia({
                              video: !0,
                            }),
                              i(!0);
                          } catch (e) {
                            console.error("Error accessing the camera:", e),
                              ua().fire({
                                icon: "error",
                                title: "Oops...",
                                text: "Unable to access the camera. Please check your device settings.",
                              });
                          }
                        else
                          console.error("getUserMedia not supported"),
                            ua().fire({
                              icon: "error",
                              title: "Oops...",
                              text: "Your browser does not support camera access.",
                            });
                      },
                      children: "Submit",
                    }),
                  }),
                ],
              }),
              o &&
                (0, ve.jsxs)("div", {
                  className:
                    "fixed top-0 left-0 w-full h-4/5 bg-black z-50 flex flex-col justify-between",
                  children: [
                    (0, ve.jsx)(fa(), {
                      audio: !1,
                      ref: d,
                      screenshotFormat: "image/jpeg",
                      className: "w-full h-full object-cover",
                      videoConstraints: { facingMode: c },
                      playsInline: !0,
                    }),
                    (0, ve.jsx)("div", {
                      className: "absolute top-0 right-0 w-full p-4",
                      children: (0, ve.jsx)(na, {
                        className:
                          "absolute top-0 right-7 h-6 w-6 py-3 rounded-xl mt-5 text-white",
                        icon: Ce,
                        onClick: () => {
                          u((e) => ("user" === e ? "environment" : "user"));
                        },
                      }),
                    }),
                    (0, ve.jsxs)("div", {
                      className:
                        "absolute bottom-0 left-0 w-full p-4 flex justify-evenly",
                      children: [
                        (0, ve.jsx)("button", {
                          onClick: () => {
                            i(!1);
                          },
                          className: "px-3 py-2 border rounded-xl text-white",
                          style: { backgroundColor: "#ECA555" },
                          children: "Go back",
                        }),
                        (0, ve.jsx)("button", {
                          onClick: p,
                          className: "px-3 py-2 border rounded-xl text-white",
                          style: { backgroundColor: "#ECA555" },
                          children: "Capture photo",
                        }),
                      ],
                    }),
                  ],
                }),
              l &&
                (0, ve.jsx)("img", {
                  src: l,
                  alt: "Captured",
                  className: "mt-5",
                }),
            ],
          });
        },
        Oi = () => {
          const [e, n] = (0, t.useState)(null),
            [r, a] = (0, t.useState)(""),
            [o, i] = (0, t.useState)(!1),
            [l, s] = (0, t.useState)(null),
            [c, u] = (0, t.useState)("user"),
            d = (0, t.useRef)(null),
            f = ee(),
            p = (0, t.useCallback)(() => {
              const e = d.current.getScreenshot();
              console.log("image src", e), s(e), i(!1), m(e);
            }, [d, s]),
            m = async (e) => {
              const t = e.split(",")[1],
                n = await fetch("data:image/jpeg;base64,".concat(t)).then((e) =>
                  e.blob()
                ),
                r = new FormData();
              r.append("image", n, "image.jpg");
              try {
                const e = (
                    await Ni.post(Ei, r, {
                      headers: { "Content-Type": "multipart/form-data" },
                    })
                  ).data,
                  t = e.predicted_class,
                  n = e.confidence;
                "alumni" === t && n >= "0.80"
                  ? ua()
                      .fire({
                        icon: "success",
                        title: "Your uploaded image is correct.",
                        text: "Move on to the next riddle!",
                      })
                      .then(() => {
                        localStorage.setItem("F1-R4", !0), f("/FlowOneRiddles");
                      })
                  : "alumni" === t && n >= 0.6 && n < 0.8
                  ? ua().fire({
                      icon: "error",
                      title: "Close!",
                      text: "Click clearer and better image of the location.",
                    })
                  : "alumni" != t &&
                    ua().fire({
                      icon: "error",
                      title: "Not correct location.",
                      text: "Looks like you are in the wrong location.",
                    });
              } catch (a) {
                console.error("Error uploading image:", a),
                  ua().fire({
                    icon: "error",
                    title: "Upload Failed",
                    text: "There was an error uploading your image. Please try again.",
                  });
              }
            };
          return (0, ve.jsxs)("div", {
            className:
              "w-full flex items-center justify-center flex-col gap-10 mt-7 mb-10",
            children: [
              (0, ve.jsx)("div", {
                className: "w-4/5 flex items-center justify-start ml-14",
                children: (0, ve.jsx)(na, {
                  className: "h-7",
                  icon: ke,
                  onClick: () => {
                    f("/FlowOneRiddles");
                  },
                }),
              }),
              (0, ve.jsxs)("div", {
                className: "f1-r1 border rounded-xl w-4/5 p-8",
                children: [
                  (0, ve.jsx)("h1", {
                    className: "font-bold text-2xl",
                    children: "Riddle 3",
                  }),
                  (0, ve.jsx)("br", {}),
                  (0, ve.jsx)("p", {
                    children:
                      "I stand tall and proud, a marker of the past, Where memories linger, and friendships last. Names etched in stone, forever they stay, A testament to journeys made along the way. I tell tales of those who once walked these halls, Now spread far and wide, answering life's calls. What am I?",
                  }),
                  (0, ve.jsx)("div", {
                    className: "w-full flex items-center justify-between",
                    children: (0, ve.jsx)("button", {
                      type: "button",
                      className:
                        "w-2/5 px-3 py-3 border rounded-xl mt-5 text-white",
                      style: { backgroundColor: "#ECA555" },
                      onClick: async () => {
                        if (
                          navigator.mediaDevices &&
                          navigator.mediaDevices.getUserMedia
                        )
                          try {
                            await navigator.mediaDevices.getUserMedia({
                              video: !0,
                            }),
                              i(!0);
                          } catch (e) {
                            console.error("Error accessing the camera:", e),
                              ua().fire({
                                icon: "error",
                                title: "Oops...",
                                text: "Unable to access the camera. Please check your device settings.",
                              });
                          }
                        else
                          console.error("getUserMedia not supported"),
                            ua().fire({
                              icon: "error",
                              title: "Oops...",
                              text: "Your browser does not support camera access.",
                            });
                      },
                      children: "Submit",
                    }),
                  }),
                ],
              }),
              o &&
                (0, ve.jsxs)("div", {
                  className:
                    "fixed top-0 left-0 w-full h-4/5 bg-black z-50 flex flex-col justify-between",
                  children: [
                    (0, ve.jsx)(fa(), {
                      audio: !1,
                      ref: d,
                      screenshotFormat: "image/jpeg",
                      className: "w-full h-full object-cover",
                      videoConstraints: { facingMode: c },
                      playsInline: !0,
                    }),
                    (0, ve.jsx)("div", {
                      className: "absolute top-0 right-0 w-full p-4",
                      children: (0, ve.jsx)(na, {
                        className:
                          "absolute top-0 right-7 h-6 w-6 py-3 rounded-xl mt-5 text-white",
                        icon: Ce,
                        onClick: () => {
                          u((e) => ("user" === e ? "environment" : "user"));
                        },
                      }),
                    }),
                    (0, ve.jsxs)("div", {
                      className:
                        "absolute bottom-0 left-0 w-full p-4 flex justify-evenly",
                      children: [
                        (0, ve.jsx)("button", {
                          onClick: () => {
                            i(!1);
                          },
                          className: "px-3 py-2 border rounded-xl text-white",
                          style: { backgroundColor: "#ECA555" },
                          children: "Go back",
                        }),
                        (0, ve.jsx)("button", {
                          onClick: p,
                          className: "px-3 py-2 border rounded-xl text-white",
                          style: { backgroundColor: "#ECA555" },
                          children: "Capture photo",
                        }),
                      ],
                    }),
                  ],
                }),
              l &&
                (0, ve.jsx)("img", {
                  src: l,
                  alt: "Captured",
                  className: "mt-5",
                }),
            ],
          });
        },
        Ai = () => {
          const [e, n] = (0, t.useState)(null),
            [r, a] = (0, t.useState)(""),
            [o, i] = (0, t.useState)(!1),
            [l, s] = (0, t.useState)(null),
            c = (0, t.useRef)(null),
            [u, d] = (0, t.useState)("user"),
            f = ee(),
            p = (0, t.useCallback)(() => {
              const e = c.current.getScreenshot();
              console.log("image src", e), s(e), i(!1), m(e);
            }, [c, s]),
            m = async (e) => {
              const t = e.split(",")[1],
                n = await fetch("data:image/jpeg;base64,".concat(t)).then((e) =>
                  e.blob()
                ),
                r = new FormData();
              r.append("image", n, "image.jpg");
              try {
                const e = (
                    await Ni.post(Ei, r, {
                      headers: { "Content-Type": "multipart/form-data" },
                    })
                  ).data,
                  t = e.predicted_class,
                  n = e.confidence;
                "scholarship_wall" === t && n >= "0.80"
                  ? ua()
                      .fire({
                        icon: "success",
                        title: "Your uploaded image is correct.",
                        text: "Move on to the next riddle!",
                      })
                      .then(() => {
                        localStorage.setItem("F1-R5", !0), f("/FlowOneRiddles");
                      })
                  : "scholarship_wall" === t && n >= 0.6 && n < 0.8
                  ? ua().fire({
                      icon: "error",
                      title: "Close!",
                      text: "Click clearer and better image of the location.",
                    })
                  : "scholarship_wall" != t &&
                    ua().fire({
                      icon: "error",
                      title: "Not correct location.",
                      text: "Looks like you are in the wrong location.",
                    });
              } catch (a) {
                console.error("Error uploading image:", a),
                  ua().fire({
                    icon: "error",
                    title: "Upload Failed",
                    text: "There was an error uploading your image. Please try again.",
                  });
              }
            };
          return (0, ve.jsxs)("div", {
            className:
              "w-full flex items-center justify-center flex-col gap-10 mt-7 mb-10",
            children: [
              (0, ve.jsx)("div", {
                className: "w-4/5 flex items-center justify-start ml-14",
                children: (0, ve.jsx)(na, {
                  className: "h-7",
                  icon: ke,
                  onClick: () => {
                    f("/FlowOneRiddles");
                  },
                }),
              }),
              (0, ve.jsxs)("div", {
                className: "f1-r1 border rounded-xl w-4/5 p-8",
                children: [
                  (0, ve.jsx)("h1", {
                    className: "font-bold text-2xl",
                    children: "Riddle 4",
                  }),
                  (0, ve.jsx)("br", {}),
                  (0, ve.jsx)("p", {
                    children:
                      "I'm a wall that holds knowledge grand, Where scholars seek to understand. Golden keys on stones so tall, Unlocking wisdom for one and all. What am I?",
                  }),
                  (0, ve.jsx)("div", {
                    className: "w-full flex items-center justify-between",
                    children: (0, ve.jsx)("button", {
                      type: "button",
                      className:
                        "w-2/5 px-3 py-3 border rounded-xl mt-5 text-white",
                      style: { backgroundColor: "#ECA555" },
                      onClick: async () => {
                        if (
                          navigator.mediaDevices &&
                          navigator.mediaDevices.getUserMedia
                        )
                          try {
                            await navigator.mediaDevices.getUserMedia({
                              video: !0,
                            }),
                              i(!0);
                          } catch (e) {
                            console.error("Error accessing the camera:", e),
                              ua().fire({
                                icon: "error",
                                title: "Oops...",
                                text: "Unable to access the camera. Please check your device settings.",
                              });
                          }
                        else
                          console.error("getUserMedia not supported"),
                            ua().fire({
                              icon: "error",
                              title: "Oops...",
                              text: "Your browser does not support camera access.",
                            });
                      },
                      children: "Submit",
                    }),
                  }),
                ],
              }),
              o &&
                (0, ve.jsxs)("div", {
                  className:
                    "fixed top-0 left-0 w-full h-4/5 bg-black z-50 flex flex-col justify-between",
                  children: [
                    (0, ve.jsx)(fa(), {
                      audio: !1,
                      ref: c,
                      screenshotFormat: "image/jpeg",
                      className: "w-full h-full object-cover",
                      videoConstraints: { facingMode: u },
                      playsInline: !0,
                    }),
                    (0, ve.jsx)("div", {
                      className: "absolute top-0 right-0 w-full p-4",
                      children: (0, ve.jsx)(na, {
                        className:
                          "absolute top-0 right-7 h-6 w-6 py-3 rounded-xl mt-5 text-white",
                        icon: Ce,
                        onClick: () => {
                          d((e) => ("user" === e ? "environment" : "user"));
                        },
                      }),
                    }),
                    (0, ve.jsxs)("div", {
                      className:
                        "absolute bottom-0 left-0 w-full p-4 flex justify-evenly",
                      children: [
                        (0, ve.jsx)("button", {
                          onClick: () => {
                            i(!1);
                          },
                          className: "px-3 py-2 border rounded-xl text-white",
                          style: { backgroundColor: "#ECA555" },
                          children: "Go back",
                        }),
                        (0, ve.jsx)("button", {
                          onClick: p,
                          className: "px-3 py-2 border rounded-xl text-white",
                          style: { backgroundColor: "#ECA555" },
                          children: "Capture photo",
                        }),
                      ],
                    }),
                  ],
                }),
              l &&
                (0, ve.jsx)("img", {
                  src: l,
                  alt: "Captured",
                  className: "mt-5",
                }),
            ],
          });
        },
        Pi = () => {
          const [e, n] = (0, t.useState)(null),
            [r, a] = (0, t.useState)(""),
            [o, i] = (0, t.useState)(!1),
            [l, s] = (0, t.useState)(null),
            c = (0, t.useRef)(null),
            [u, d] = (0, t.useState)("user"),
            f = ee(),
            p = (0, t.useCallback)(() => {
              const e = c.current.getScreenshot();
              console.log("image src", e), s(e), i(!1), m(e);
            }, [c, s]),
            m = async (e) => {
              const t = e.split(",")[1],
                n = await fetch("data:image/jpeg;base64,".concat(t)).then((e) =>
                  e.blob()
                ),
                r = new FormData();
              r.append("image", n, "image.jpg");
              try {
                const e = (
                    await Ni.post(Ei, r, {
                      headers: { "Content-Type": "multipart/form-data" },
                    })
                  ).data,
                  t = e.predicted_class,
                  n = e.confidence;
                "main_gate" === t && n >= "0.80"
                  ? ua()
                      .fire({
                        icon: "success",
                        title: "Your uploaded image is correct.",
                        text: "Move on to the next riddle!",
                      })
                      .then(() => {
                        localStorage.setItem("F1-R6", !0), f("/FlowOneRiddles");
                      })
                  : "main_gate" === t && n >= 0.6 && n < 0.8
                  ? ua().fire({
                      icon: "error",
                      title: "Close!",
                      text: "Click clearer and better image of the location.",
                    })
                  : "main_gate" != t &&
                    ua().fire({
                      icon: "error",
                      title: "Not correct location.",
                      text: "Looks like you are in the wrong location.",
                    });
              } catch (a) {
                console.error("Error uploading image:", a),
                  ua().fire({
                    icon: "error",
                    title: "Upload Failed",
                    text: "There was an error uploading your image. Please try again.",
                  });
              }
            };
          return (0, ve.jsxs)("div", {
            className:
              "w-full flex items-center justify-center flex-col gap-10 mt-7 mb-10",
            children: [
              (0, ve.jsx)("div", {
                className: "w-4/5 flex items-center justify-start ml-14",
                children: (0, ve.jsx)(na, {
                  className: "h-7",
                  icon: ke,
                  onClick: () => {
                    f("/FlowOneRiddles");
                  },
                }),
              }),
              (0, ve.jsxs)("div", {
                className: "f1-r1 border rounded-xl w-4/5 p-8",
                children: [
                  (0, ve.jsx)("h1", {
                    className: "font-bold text-2xl",
                    children: "Riddle 5",
                  }),
                  (0, ve.jsx)("br", {}),
                  (0, ve.jsx)("p", {
                    children:
                      "Through me all must pass and see, A College born in 1996, you see. I greet each seeker, young and old, Where learning's treasure doth unfold. What am I?",
                  }),
                  (0, ve.jsx)("div", {
                    className: "w-full flex items-center justify-between",
                    children: (0, ve.jsx)("button", {
                      type: "button",
                      className:
                        "w-2/5 px-3 py-3 border rounded-xl mt-5 text-white",
                      style: { backgroundColor: "#ECA555" },
                      onClick: async () => {
                        if (
                          navigator.mediaDevices &&
                          navigator.mediaDevices.getUserMedia
                        )
                          try {
                            await navigator.mediaDevices.getUserMedia({
                              video: !0,
                            }),
                              i(!0);
                          } catch (e) {
                            console.error("Error accessing the camera:", e),
                              ua().fire({
                                icon: "error",
                                title: "Oops...",
                                text: "Unable to access the camera. Please check your device settings.",
                              });
                          }
                        else
                          console.error("getUserMedia not supported"),
                            ua().fire({
                              icon: "error",
                              title: "Oops...",
                              text: "Your browser does not support camera access.",
                            });
                      },
                      children: "Submit",
                    }),
                  }),
                ],
              }),
              o &&
                (0, ve.jsxs)("div", {
                  className:
                    "fixed top-0 left-0 w-full h-4/5 bg-black z-50 flex flex-col justify-between",
                  children: [
                    (0, ve.jsx)(fa(), {
                      audio: !1,
                      ref: c,
                      screenshotFormat: "image/jpeg",
                      className: "w-full h-full object-cover",
                      videoConstraints: { facingMode: u },
                      playsInline: !0,
                    }),
                    (0, ve.jsx)("div", {
                      className: "absolute top-0 right-0 w-full p-4",
                      children: (0, ve.jsx)(na, {
                        className:
                          "absolute top-0 right-7 h-6 w-6 py-3 rounded-xl mt-5 text-white",
                        icon: Ce,
                        onClick: () => {
                          d((e) => ("user" === e ? "environment" : "user"));
                        },
                      }),
                    }),
                    (0, ve.jsxs)("div", {
                      className:
                        "absolute bottom-0 left-0 w-full p-4 flex justify-evenly",
                      children: [
                        (0, ve.jsx)("button", {
                          onClick: () => {
                            i(!1);
                          },
                          className: "px-3 py-2 border rounded-xl text-white",
                          style: { backgroundColor: "#ECA555" },
                          children: "Go back",
                        }),
                        (0, ve.jsx)("button", {
                          onClick: p,
                          className: "px-3 py-2 border rounded-xl text-white",
                          style: { backgroundColor: "#ECA555" },
                          children: "Capture photo",
                        }),
                      ],
                    }),
                  ],
                }),
              l &&
                (0, ve.jsx)("img", {
                  src: l,
                  alt: "Captured",
                  className: "mt-5",
                }),
            ],
          });
        },
        Ti = () => {
          const [e, n] = (0, t.useState)(null),
            [r, a] = (0, t.useState)(""),
            [o, i] = (0, t.useState)(!1),
            [l, s] = (0, t.useState)(null),
            c = (0, t.useRef)(null),
            [u, d] = (0, t.useState)("user"),
            f = ee(),
            p = (0, t.useCallback)(() => {
              const e = c.current.getScreenshot();
              console.log("image src", e), s(e), i(!1), m(e);
            }, [c, s]),
            m = async (e) => {
              const t = e.split(",")[1],
                n = await fetch("data:image/jpeg;base64,".concat(t)).then((e) =>
                  e.blob()
                ),
                r = new FormData();
              r.append("image", n, "image.jpg");
              try {
                const e = (
                    await Ni.post(Ei, r, {
                      headers: { "Content-Type": "multipart/form-data" },
                    })
                  ).data,
                  t = e.predicted_class,
                  n = e.confidence;
                "skill" === t && n >= "0.80"
                  ? ua()
                      .fire({
                        icon: "success",
                        title: "Your uploaded image is correct.",
                        text: "Move on to the next riddle!",
                      })
                      .then(() => {
                        f("/FlowOneRiddles");
                      })
                  : "skill" === t && n >= 0.6 && n < 0.8
                  ? ua().fire({
                      icon: "error",
                      title: "Close!",
                      text: "Click clearer and better image of the location.",
                    })
                  : "skill" != t &&
                    ua().fire({
                      icon: "error",
                      title: "Not correct location.",
                      text: "Looks like you are in the wrong location.",
                    });
              } catch (a) {
                console.error("Error uploading image:", a),
                  ua().fire({
                    icon: "error",
                    title: "Upload Failed",
                    text: "There was an error uploading your image. Please try again.",
                  });
              }
            };
          return (0, ve.jsxs)("div", {
            className:
              "w-full flex items-center justify-center flex-col gap-10 mt-7 mb-10",
            children: [
              (0, ve.jsx)("div", {
                className: "w-4/5 flex items-center justify-start ml-14",
                children: (0, ve.jsx)(na, {
                  className: "h-7",
                  icon: ke,
                  onClick: () => {
                    f("/FlowOneRiddles");
                  },
                }),
              }),
              (0, ve.jsxs)("div", {
                className: "f1-r1 border rounded-xl w-4/5 p-8",
                children: [
                  (0, ve.jsx)("h1", {
                    className: "font-bold text-2xl",
                    children: "Riddle 6",
                  }),
                  (0, ve.jsx)("br", {}),
                  (0, ve.jsx)("p", {
                    children:
                      "In me, hands craft and minds refine, Where practical workshops brightly shine. Here, skills are born from knowledge pure, In a place where learning's hands-on allure. What am I?",
                  }),
                  (0, ve.jsx)("div", {
                    className: "w-full flex items-center justify-between",
                    children: (0, ve.jsx)("button", {
                      type: "button",
                      className:
                        "w-2/5 px-3 py-3 border rounded-xl mt-5 text-white",
                      style: { backgroundColor: "#ECA555" },
                      onClick: async () => {
                        if (
                          navigator.mediaDevices &&
                          navigator.mediaDevices.getUserMedia
                        )
                          try {
                            await navigator.mediaDevices.getUserMedia({
                              video: !0,
                            }),
                              i(!0);
                          } catch (e) {
                            console.error("Error accessing the camera:", e),
                              ua().fire({
                                icon: "error",
                                title: "Oops...",
                                text: "Unable to access the camera. Please check your device settings.",
                              });
                          }
                        else
                          console.error("getUserMedia not supported"),
                            ua().fire({
                              icon: "error",
                              title: "Oops...",
                              text: "Your browser does not support camera access.",
                            });
                      },
                      children: "Submit",
                    }),
                  }),
                ],
              }),
              o &&
                (0, ve.jsxs)("div", {
                  className:
                    "fixed top-0 left-0 w-full h-4/5 bg-black z-50 flex flex-col justify-between",
                  children: [
                    (0, ve.jsx)(fa(), {
                      audio: !1,
                      ref: c,
                      screenshotFormat: "image/jpeg",
                      className: "w-full h-full object-cover",
                      videoConstraints: { facingMode: u },
                      playsInline: !0,
                    }),
                    (0, ve.jsx)("div", {
                      className: "absolute top-0 right-0 w-full p-4",
                      children: (0, ve.jsx)(na, {
                        className:
                          "absolute top-0 right-7 h-6 w-6 py-3 rounded-xl mt-5 text-white",
                        icon: Ce,
                        onClick: () => {
                          d((e) => ("user" === e ? "environment" : "user"));
                        },
                      }),
                    }),
                    (0, ve.jsxs)("div", {
                      className:
                        "absolute bottom-0 left-0 w-full p-4 flex justify-evenly",
                      children: [
                        (0, ve.jsx)("button", {
                          onClick: () => {
                            i(!1);
                          },
                          className: "px-3 py-2 border rounded-xl text-white",
                          style: { backgroundColor: "#ECA555" },
                          children: "Go back",
                        }),
                        (0, ve.jsx)("button", {
                          onClick: p,
                          className: "px-3 py-2 border rounded-xl text-white",
                          style: { backgroundColor: "#ECA555" },
                          children: "Capture photo",
                        }),
                      ],
                    }),
                  ],
                }),
              l &&
                (0, ve.jsx)("img", {
                  src: l,
                  alt: "Captured",
                  className: "mt-5",
                }),
            ],
          });
        },
        Mi = () => {
          const e = ee(),
            [n, r] = (0, t.useState)({});
          (0, t.useEffect)(() => {
            const e = ["F2-R1", "F2-R2", "F2-R3", "F2-R4", "F2-R5", "F2-R6"];
            e.forEach((e, t) => {
              localStorage.getItem(e) ||
                localStorage.setItem(e, 0 === t ? "true" : "false");
            });
            const t = {};
            e.forEach((e) => {
              const n = localStorage.getItem(e);
              t[e] = "true" === n ? "isOpen" : "isClosed";
            }),
              r(t);
          }, []);
          const a = (t, n, r, a) =>
            (0, ve.jsxs)("div", {
              className:
                "border flex flex-col items-center justify-start rounded-xl w-1/2 p-16 text-white font-semibold text-xl ".concat(
                  "isClosed" === t && "cursor-not-allowed"
                ),
              style: { backgroundColor: a },
              onClick: () =>
                ((t, n) => {
                  "isOpen" === t && e(n);
                })(t, n),
              children: [
                (0, ve.jsx)("div", { children: r }),
                "isClosed" === t &&
                  (0, ve.jsx)(na, { className: "mt-4", icon: xe }),
              ],
            });
          return (0, ve.jsxs)("div", {
            className: "w-full mt-10 h-full",
            children: [
              (0, ve.jsx)("div", {
                className: "w-4/5 flex items-center justify-start ml-7 mb-7",
                children: (0, ve.jsx)(na, {
                  className: "h-7",
                  icon: ke,
                  onClick: () => {
                    e("/");
                  },
                }),
              }),
              (0, ve.jsxs)("div", {
                className: "flex flex-row gap-2",
                children: [
                  n["F2-R1"] &&
                    a(
                      n["F2-R1"],
                      "/FlowTwoRiddleOne",
                      "First Riddle",
                      "#5768AC"
                    ),
                  n["F2-R2"] &&
                    a(
                      n["F2-R2"],
                      "/FlowTwoRiddleTwo",
                      "Second Riddle",
                      "#F2CC43"
                    ),
                ],
              }),
              (0, ve.jsxs)("div", {
                className: "flex flex-row gap-2 h-2/6",
                children: [
                  n["F2-R3"] &&
                    a(
                      n["F2-R3"],
                      "/FlowTwoRiddleThree",
                      "Third Riddle",
                      "#E282B2"
                    ),
                  n["F2-R4"] &&
                    a(
                      n["F2-R4"],
                      "/FlowTwoRiddleFour",
                      "Fourth Riddle",
                      "#70C079"
                    ),
                ],
              }),
              (0, ve.jsxs)("div", {
                className: "flex flex-row gap-2 h-2/6",
                children: [
                  n["F2-R5"] &&
                    a(
                      n["F2-R5"],
                      "/FlowTwoRiddleFive",
                      "Fifth Riddle",
                      "#ECA555"
                    ),
                  n["F2-R6"] &&
                    a(
                      n["F2-R6"],
                      "/FlowTwoRiddleSix",
                      "Sixth Riddle",
                      "#00B1E3"
                    ),
                ],
              }),
            ],
          });
        },
        _i = () => {
          const [e, n] = (0, t.useState)(null),
            [r, a] = (0, t.useState)(""),
            [o, i] = (0, t.useState)(!1),
            [l, s] = (0, t.useState)(null),
            [c, u] = (0, t.useState)("user"),
            d = (0, t.useRef)(null),
            f = ee(),
            p = (0, t.useCallback)(() => {
              const e = d.current.getScreenshot();
              console.log("image src", e), s(e), i(!1), m(e);
            }, [d, s]),
            m = async (e) => {
              const t = e.split(",")[1],
                n = await fetch("data:image/jpeg;base64,".concat(t)).then((e) =>
                  e.blob()
                ),
                r = new FormData();
              r.append("image", n, "image.jpg");
              try {
                const e = (
                    await Ni.post(Ei, r, {
                      headers: { "Content-Type": "multipart/form-data" },
                    })
                  ).data,
                  t = e.predicted_class,
                  n = e.confidence;
                "brit" === t && n >= "0.80"
                  ? ua()
                      .fire({
                        icon: "success",
                        title: "Your uploaded image is correct.",
                        text: "Move on to the next riddle!",
                      })
                      .then(() => {
                        localStorage.setItem("F2-R2", !0), f("/FlowTwoRiddles");
                      })
                  : "brit" === t && n >= 0.6 && n < 0.8
                  ? ua().fire({
                      icon: "error",
                      title: "Close!",
                      text: "Click clearer and better image of the location.",
                    })
                  : "brit" != t &&
                    ua().fire({
                      icon: "error",
                      title: "Not correct location.",
                      text: "Looks like you are in the wrong location.",
                    });
              } catch (a) {
                console.error("Error uploading image:", a),
                  ua().fire({
                    icon: "error",
                    title: "Upload Failed",
                    text: "There was an error uploading your image. Please try again.",
                  });
              }
            };
          return (0, ve.jsxs)("div", {
            className:
              "w-full flex items-center justify-center flex-col gap-10 mt-7 mb-10",
            children: [
              (0, ve.jsx)("div", {
                className: "w-4/5 flex items-center justify-start ml-14",
                children: (0, ve.jsx)(na, {
                  className: "h-7",
                  icon: ke,
                  onClick: () => {
                    f("/FlowTwoRiddles");
                  },
                }),
              }),
              (0, ve.jsxs)("div", {
                className: "f1-r1 border rounded-xl w-4/5 p-8",
                children: [
                  (0, ve.jsx)("h1", {
                    className: "font-bold text-2xl",
                    children: "Riddle 1",
                  }),
                  (0, ve.jsx)("br", {}),
                  (0, ve.jsx)("p", {
                    children:
                      "Within university walls, I stand with pride, Offering a cozy spot where cultures collide. My name reflects a distant land's charm, Where students gather, feeling warm. What am I?",
                  }),
                  (0, ve.jsx)("div", {
                    className: "w-full flex items-center justify-between",
                    children: (0, ve.jsx)("button", {
                      type: "button",
                      className:
                        "w-2/5 px-3 py-3 border rounded-xl mt-5 text-white",
                      style: { backgroundColor: "#ECA555" },
                      onClick: async () => {
                        if (
                          navigator.mediaDevices &&
                          navigator.mediaDevices.getUserMedia
                        )
                          try {
                            await navigator.mediaDevices.getUserMedia({
                              video: !0,
                            }),
                              i(!0);
                          } catch (e) {
                            console.error("Error accessing the camera:", e),
                              ua().fire({
                                icon: "error",
                                title: "Oops...",
                                text: "Unable to access the camera. Please check your device settings.",
                              });
                          }
                        else
                          console.error("getUserMedia not supported"),
                            ua().fire({
                              icon: "error",
                              title: "Oops...",
                              text: "Your browser does not support camera access.",
                            });
                      },
                      children: "Submit",
                    }),
                  }),
                ],
              }),
              o &&
                (0, ve.jsxs)("div", {
                  className:
                    "fixed top-0 left-0 w-full h-4/5 bg-black z-50 flex flex-col justify-between",
                  children: [
                    (0, ve.jsx)(fa(), {
                      audio: !1,
                      ref: d,
                      screenshotFormat: "image/jpeg",
                      className: "w-full h-full object-cover",
                      videoConstraints: { facingMode: c },
                      playsInline: !0,
                    }),
                    (0, ve.jsx)("div", {
                      className: "absolute top-0 right-0 w-full p-4",
                      children: (0, ve.jsx)(na, {
                        className:
                          "absolute top-0 right-7 h-6 w-6 py-3 rounded-xl mt-5 text-white",
                        icon: Ce,
                        onClick: () => {
                          u((e) => ("user" === e ? "environment" : "user"));
                        },
                      }),
                    }),
                    (0, ve.jsxs)("div", {
                      className:
                        "absolute bottom-0 left-0 w-full p-4 flex justify-evenly",
                      children: [
                        (0, ve.jsx)("button", {
                          onClick: () => {
                            i(!1);
                          },
                          className: "px-3 py-2 border rounded-xl text-white",
                          style: { backgroundColor: "#ECA555" },
                          children: "Go back",
                        }),
                        (0, ve.jsx)("button", {
                          onClick: p,
                          className: "px-3 py-2 border rounded-xl text-white",
                          style: { backgroundColor: "#ECA555" },
                          children: "Capture photo",
                        }),
                      ],
                    }),
                  ],
                }),
              l &&
                (0, ve.jsx)("img", {
                  src: l,
                  alt: "Captured",
                  className: "mt-5",
                }),
            ],
          });
        },
        Ii = () => {
          const [e, n] = (0, t.useState)(null),
            [r, a] = (0, t.useState)(""),
            [o, i] = (0, t.useState)(!1),
            [l, s] = (0, t.useState)(null),
            c = (0, t.useRef)(null),
            u = ee(),
            [d, f] = (0, t.useState)("user"),
            p = (0, t.useCallback)(() => {
              const e = c.current.getScreenshot();
              console.log("image src", e), s(e), i(!1), m(e);
            }, [c, s]),
            m = async (e) => {
              const t = e.split(",")[1],
                n = await fetch("data:image/jpeg;base64,".concat(t)).then((e) =>
                  e.blob()
                ),
                r = new FormData();
              r.append("image", n, "image.jpg");
              try {
                const e = (
                    await Ni.post(Ei, r, {
                      headers: { "Content-Type": "multipart/form-data" },
                    })
                  ).data,
                  t = e.predicted_class,
                  n = e.confidence;
                "alumni" === t && n >= "0.80"
                  ? ua()
                      .fire({
                        icon: "success",
                        title: "Your uploaded image is correct.",
                        text: "Move on to the next riddle!",
                      })
                      .then(() => {
                        localStorage.setItem("F2-R3", !0), u("/FlowTwoRiddles");
                      })
                  : "alumni" === t && n >= 0.6 && n < 0.8
                  ? ua().fire({
                      icon: "error",
                      title: "Close!",
                      text: "Click clearer and better image of the location.",
                    })
                  : "alumni" != t &&
                    ua().fire({
                      icon: "error",
                      title: "Not correct location.",
                      text: "Looks like you are in the wrong location.",
                    });
              } catch (a) {
                console.error("Error uploading image:", a),
                  ua().fire({
                    icon: "error",
                    title: "Upload Failed",
                    text: "There was an error uploading your image. Please try again.",
                  });
              }
            };
          return (0, ve.jsxs)("div", {
            className:
              "w-full flex items-center justify-center flex-col gap-10 mt-7 mb-10",
            children: [
              (0, ve.jsx)("div", {
                className: "w-4/5 flex items-center justify-start ml-14",
                children: (0, ve.jsx)(na, {
                  className: "h-7",
                  icon: ke,
                  onClick: () => {
                    u("/FlowTwoRiddles");
                  },
                }),
              }),
              (0, ve.jsxs)("div", {
                className: "f1-r1 border rounded-xl w-4/5 p-8",
                children: [
                  (0, ve.jsx)("h1", {
                    className: "font-bold text-2xl",
                    children: "Riddle 2",
                  }),
                  (0, ve.jsx)("br", {}),
                  (0, ve.jsx)("p", {
                    children:
                      "I stand tall and proud, a marker of the past, Where memories linger, and friendships last. Names etched in stone, forever they stay, A testament to journeys made along the way. I tell tales of those who once walked these halls, Now spread far and wide, answering life's calls. What am I?",
                  }),
                  (0, ve.jsx)("div", {
                    className: "w-full flex items-center justify-between",
                    children: (0, ve.jsx)("button", {
                      type: "button",
                      className:
                        "w-2/5 px-3 py-3 border rounded-xl mt-5 text-white",
                      style: { backgroundColor: "#ECA555" },
                      onClick: async () => {
                        if (
                          navigator.mediaDevices &&
                          navigator.mediaDevices.getUserMedia
                        )
                          try {
                            await navigator.mediaDevices.getUserMedia({
                              video: !0,
                            }),
                              i(!0);
                          } catch (e) {
                            console.error("Error accessing the camera:", e),
                              ua().fire({
                                icon: "error",
                                title: "Oops...",
                                text: "Unable to access the camera. Please check your device settings.",
                              });
                          }
                        else
                          console.error("getUserMedia not supported"),
                            ua().fire({
                              icon: "error",
                              title: "Oops...",
                              text: "Your browser does not support camera access.",
                            });
                      },
                      children: "Submit",
                    }),
                  }),
                ],
              }),
              o &&
                (0, ve.jsxs)("div", {
                  className:
                    "fixed top-0 left-0 w-full h-4/5 bg-black z-50 flex flex-col justify-between",
                  children: [
                    (0, ve.jsx)(fa(), {
                      audio: !1,
                      ref: c,
                      screenshotFormat: "image/jpeg",
                      className: "w-full h-full object-cover",
                      videoConstraints: { facingMode: d },
                      playsInline: !0,
                    }),
                    (0, ve.jsx)("div", {
                      className: "absolute top-0 right-0 w-full p-4",
                      children: (0, ve.jsx)(na, {
                        className:
                          "absolute top-0 right-7 h-6 w-6 py-3 rounded-xl mt-5 text-white",
                        icon: Ce,
                        onClick: () => {
                          f((e) => ("user" === e ? "environment" : "user"));
                        },
                      }),
                    }),
                    (0, ve.jsxs)("div", {
                      className:
                        "absolute bottom-0 left-0 w-full p-4 flex justify-evenly",
                      children: [
                        (0, ve.jsx)("button", {
                          onClick: () => {
                            i(!1);
                          },
                          className: "px-3 py-2 border rounded-xl text-white",
                          style: { backgroundColor: "#ECA555" },
                          children: "Go back",
                        }),
                        (0, ve.jsx)("button", {
                          onClick: p,
                          className: "px-3 py-2 border rounded-xl text-white",
                          style: { backgroundColor: "#ECA555" },
                          children: "Capture photo",
                        }),
                      ],
                    }),
                  ],
                }),
              l &&
                (0, ve.jsx)("img", {
                  src: l,
                  alt: "Captured",
                  className: "mt-5",
                }),
            ],
          });
        },
        Li = () => {
          const [e, n] = (0, t.useState)(null),
            [r, a] = (0, t.useState)(""),
            [o, i] = (0, t.useState)(!1),
            [l, s] = (0, t.useState)(null),
            c = (0, t.useRef)(null),
            u = ee(),
            [d, f] = (0, t.useState)("user"),
            p = (0, t.useCallback)(() => {
              const e = c.current.getScreenshot();
              console.log("image src", e), s(e), i(!1), m(e);
            }, [c, s]),
            m = async (e) => {
              const t = e.split(",")[1],
                n = await fetch("data:image/jpeg;base64,".concat(t)).then((e) =>
                  e.blob()
                ),
                r = new FormData();
              r.append("image", n, "image.jpg");
              try {
                const e = (
                    await Ni.post(Ei, r, {
                      headers: { "Content-Type": "multipart/form-data" },
                    })
                  ).data,
                  t = e.predicted_class,
                  n = e.confidence;
                "scholarship_wall" === t && n >= "0.80"
                  ? ua()
                      .fire({
                        icon: "success",
                        title: "Your uploaded image is correct.",
                        text: "Move on to the next riddle!",
                      })
                      .then(() => {
                        localStorage.setItem("F2-R4", !0), u("/FlowTwoRiddles");
                      })
                  : "scholarship_wall" === t && n >= 0.6 && n < 0.8
                  ? ua().fire({
                      icon: "error",
                      title: "Close!",
                      text: "Click clearer and better image of the location.",
                    })
                  : "scholarship_wall" != t &&
                    ua().fire({
                      icon: "error",
                      title: "Not correct location.",
                      text: "Looks like you are in the wrong location.",
                    });
              } catch (a) {
                console.error("Error uploading image:", a),
                  ua().fire({
                    icon: "error",
                    title: "Upload Failed",
                    text: "There was an error uploading your image. Please try again.",
                  });
              }
            };
          return (0, ve.jsxs)("div", {
            className:
              "w-full flex items-center justify-center flex-col gap-10 mt-7 mb-10",
            children: [
              (0, ve.jsx)("div", {
                className: "w-4/5 flex items-center justify-start ml-14",
                children: (0, ve.jsx)(na, {
                  className: "h-7",
                  icon: ke,
                  onClick: () => {
                    u("/FlowTwoRiddles");
                  },
                }),
              }),
              (0, ve.jsxs)("div", {
                className: "f1-r1 border rounded-xl w-4/5 p-8",
                children: [
                  (0, ve.jsx)("h1", {
                    className: "font-bold text-2xl",
                    children: "Riddle 3",
                  }),
                  (0, ve.jsx)("br", {}),
                  (0, ve.jsx)("p", {
                    children:
                      "I'm a wall that holds knowledge grand, Where scholars seek to understand. Golden keys on stones so tall, Unlocking wisdom for one and all. What am I?",
                  }),
                  (0, ve.jsx)("div", {
                    className: "w-full flex items-center justify-between",
                    children: (0, ve.jsx)("button", {
                      type: "button",
                      className:
                        "w-2/5 px-3 py-3 border rounded-xl mt-5 text-white",
                      style: { backgroundColor: "#ECA555" },
                      onClick: async () => {
                        if (
                          navigator.mediaDevices &&
                          navigator.mediaDevices.getUserMedia
                        )
                          try {
                            await navigator.mediaDevices.getUserMedia({
                              video: !0,
                            }),
                              i(!0);
                          } catch (e) {
                            console.error("Error accessing the camera:", e),
                              ua().fire({
                                icon: "error",
                                title: "Oops...",
                                text: "Unable to access the camera. Please check your device settings.",
                              });
                          }
                        else
                          console.error("getUserMedia not supported"),
                            ua().fire({
                              icon: "error",
                              title: "Oops...",
                              text: "Your browser does not support camera access.",
                            });
                      },
                      children: "Submit",
                    }),
                  }),
                ],
              }),
              o &&
                (0, ve.jsxs)("div", {
                  className:
                    "fixed top-0 left-0 w-full h-4/5 bg-black z-50 flex flex-col justify-between",
                  children: [
                    (0, ve.jsx)(fa(), {
                      audio: !1,
                      ref: c,
                      screenshotFormat: "image/jpeg",
                      className: "w-full h-full object-cover",
                      videoConstraints: { facingMode: d },
                      playsInline: !0,
                    }),
                    (0, ve.jsx)("div", {
                      className: "absolute top-0 right-0 w-full p-4",
                      children: (0, ve.jsx)(na, {
                        className:
                          "absolute top-0 right-7 h-6 w-6 py-3 rounded-xl mt-5 text-white",
                        icon: Ce,
                        onClick: () => {
                          f((e) => ("user" === e ? "environment" : "user"));
                        },
                      }),
                    }),
                    (0, ve.jsxs)("div", {
                      className:
                        "absolute bottom-0 left-0 w-full p-4 flex justify-evenly",
                      children: [
                        (0, ve.jsx)("button", {
                          onClick: () => {
                            i(!1);
                          },
                          className: "px-3 py-2 border rounded-xl text-white",
                          style: { backgroundColor: "#ECA555" },
                          children: "Go back",
                        }),
                        (0, ve.jsx)("button", {
                          onClick: p,
                          className: "px-3 py-2 border rounded-xl text-white",
                          style: { backgroundColor: "#ECA555" },
                          children: "Capture photo",
                        }),
                      ],
                    }),
                  ],
                }),
              l &&
                (0, ve.jsx)("img", {
                  src: l,
                  alt: "Captured",
                  className: "mt-5",
                }),
            ],
          });
        },
        Ui = () => {
          const [e, n] = (0, t.useState)(null),
            [r, a] = (0, t.useState)(""),
            [o, i] = (0, t.useState)(!1),
            [l, s] = (0, t.useState)(null),
            c = (0, t.useRef)(null),
            u = ee(),
            [d, f] = (0, t.useState)("user"),
            p = (0, t.useCallback)(() => {
              const e = c.current.getScreenshot();
              console.log("image src", e), s(e), i(!1), m(e);
            }, [c, s]),
            m = async (e) => {
              const t = e.split(",")[1],
                n = await fetch("data:image/jpeg;base64,".concat(t)).then((e) =>
                  e.blob()
                ),
                r = new FormData();
              r.append("image", n, "image.jpg");
              try {
                const e = (
                    await Ni.post(Ei, r, {
                      headers: { "Content-Type": "multipart/form-data" },
                    })
                  ).data,
                  t = e.predicted_class,
                  n = e.confidence;
                "main_gate" === t && n >= "0.80"
                  ? ua()
                      .fire({
                        icon: "success",
                        title: "Your uploaded image is correct.",
                        text: "Move on to the next riddle!",
                      })
                      .then(() => {
                        localStorage.setItem("F2-R5", !0), u("/FlowTwoRiddles");
                      })
                  : "main_gate" === t && n >= 0.6 && n < 0.8
                  ? ua().fire({
                      icon: "error",
                      title: "Close!",
                      text: "Click clearer and better image of the location.",
                    })
                  : "main_gate" != t &&
                    ua().fire({
                      icon: "error",
                      title: "Not correct location.",
                      text: "Looks like you are in the wrong location.",
                    });
              } catch (a) {
                console.error("Error uploading image:", a),
                  ua().fire({
                    icon: "error",
                    title: "Upload Failed",
                    text: "There was an error uploading your image. Please try again.",
                  });
              }
            };
          return (0, ve.jsxs)("div", {
            className:
              "w-full flex items-center justify-center flex-col gap-10 mt-7 mb-10",
            children: [
              (0, ve.jsx)("div", {
                className: "w-4/5 flex items-center justify-start ml-14",
                children: (0, ve.jsx)(na, {
                  className: "h-7",
                  icon: ke,
                  onClick: () => {
                    u("/FlowTwoRiddles");
                  },
                }),
              }),
              (0, ve.jsxs)("div", {
                className: "f1-r1 border rounded-xl w-4/5 p-8",
                children: [
                  (0, ve.jsx)("h1", {
                    className: "font-bold text-2xl",
                    children: "Riddle 4",
                  }),
                  (0, ve.jsx)("br", {}),
                  (0, ve.jsx)("p", {
                    children:
                      "Through me all must pass and see, A College born in 1996, you see. I greet each seeker, young and old, Where learning's treasure doth unfold. What am I?",
                  }),
                  (0, ve.jsx)("div", {
                    className: "w-full flex items-center justify-between",
                    children: (0, ve.jsx)("button", {
                      type: "button",
                      className:
                        "w-2/5 px-3 py-3 border rounded-xl mt-5 text-white",
                      style: { backgroundColor: "#ECA555" },
                      onClick: async () => {
                        if (
                          navigator.mediaDevices &&
                          navigator.mediaDevices.getUserMedia
                        )
                          try {
                            await navigator.mediaDevices.getUserMedia({
                              video: !0,
                            }),
                              i(!0);
                          } catch (e) {
                            console.error("Error accessing the camera:", e),
                              ua().fire({
                                icon: "error",
                                title: "Oops...",
                                text: "Unable to access the camera. Please check your device settings.",
                              });
                          }
                        else
                          console.error("getUserMedia not supported"),
                            ua().fire({
                              icon: "error",
                              title: "Oops...",
                              text: "Your browser does not support camera access.",
                            });
                      },
                      children: "Submit",
                    }),
                  }),
                ],
              }),
              o &&
                (0, ve.jsxs)("div", {
                  className:
                    "fixed top-0 left-0 w-full h-4/5 bg-black z-50 flex flex-col justify-between",
                  children: [
                    (0, ve.jsx)(fa(), {
                      audio: !1,
                      ref: c,
                      screenshotFormat: "image/jpeg",
                      className: "w-full h-full object-cover",
                      videoConstraints: { facingMode: d },
                      playsInline: !0,
                    }),
                    (0, ve.jsx)("div", {
                      className: "absolute top-0 right-0 w-full p-4",
                      children: (0, ve.jsx)(na, {
                        className:
                          "absolute top-0 right-7 h-6 w-6 py-3 rounded-xl mt-5 text-white",
                        icon: Ce,
                        onClick: () => {
                          f((e) => ("user" === e ? "environment" : "user"));
                        },
                      }),
                    }),
                    (0, ve.jsxs)("div", {
                      className:
                        "absolute bottom-0 left-0 w-full p-4 flex justify-evenly",
                      children: [
                        (0, ve.jsx)("button", {
                          onClick: () => {
                            i(!1);
                          },
                          className: "px-3 py-2 border rounded-xl text-white",
                          style: { backgroundColor: "#ECA555" },
                          children: "Go back",
                        }),
                        (0, ve.jsx)("button", {
                          onClick: p,
                          className: "px-3 py-2 border rounded-xl text-white",
                          style: { backgroundColor: "#ECA555" },
                          children: "Capture photo",
                        }),
                      ],
                    }),
                  ],
                }),
              l &&
                (0, ve.jsx)("img", {
                  src: l,
                  alt: "Captured",
                  className: "mt-5",
                }),
            ],
          });
        },
        Di = () => {
          const [e, n] = (0, t.useState)(null),
            [r, a] = (0, t.useState)(""),
            [o, i] = (0, t.useState)(!1),
            [l, s] = (0, t.useState)(null),
            c = (0, t.useRef)(null),
            u = ee(),
            [d, f] = (0, t.useState)("user"),
            p = (0, t.useCallback)(() => {
              const e = c.current.getScreenshot();
              console.log("image src", e), s(e), i(!1), m(e);
            }, [c, s]),
            m = async (e) => {
              const t = e.split(",")[1],
                n = await fetch("data:image/jpeg;base64,".concat(t)).then((e) =>
                  e.blob()
                ),
                r = new FormData();
              r.append("image", n, "image.jpg");
              try {
                const e = (
                    await Ni.post(Ei, r, {
                      headers: { "Content-Type": "multipart/form-data" },
                    })
                  ).data,
                  t = e.predicted_class,
                  n = e.confidence;
                "coffee_station" === t && n >= "0.80"
                  ? ua()
                      .fire({
                        icon: "success",
                        title: "Your uploaded image is correct.",
                        text: "Move on to the next riddle!",
                      })
                      .then(() => {
                        localStorage.setItem("F2-R6", !0), u("/FlowTwoRiddles");
                      })
                  : "coffee_station" === t && n >= 0.6 && n < 0.8
                  ? ua().fire({
                      icon: "error",
                      title: "Close!",
                      text: "Click clearer and better image of the location.",
                    })
                  : "coffee_station" != t &&
                    ua().fire({
                      icon: "error",
                      title: "Not correct location.",
                      text: "Looks like you are in the wrong location.",
                    });
              } catch (a) {
                console.error("Error uploading image:", a),
                  ua().fire({
                    icon: "error",
                    title: "Upload Failed",
                    text: "There was an error uploading your image. Please try again.",
                  });
              }
            };
          return (0, ve.jsxs)("div", {
            className:
              "w-full flex items-center justify-center flex-col gap-10 mt-7 mb-10",
            children: [
              (0, ve.jsx)("div", {
                className: "w-4/5 flex items-center justify-start ml-14",
                children: (0, ve.jsx)(na, {
                  className: "h-7",
                  icon: ke,
                  onClick: () => {
                    u("/FlowTwoRiddles");
                  },
                }),
              }),
              (0, ve.jsxs)("div", {
                className: "f1-r1 border rounded-xl w-4/5 p-8",
                children: [
                  (0, ve.jsx)("h1", {
                    className: "font-bold text-2xl",
                    children: "Riddle 5",
                  }),
                  (0, ve.jsx)("br", {}),
                  (0, ve.jsx)("p", {
                    children:
                      "In the heart of the campus, I start your day, Where friends and colleagues gather to stay. A morning haven, with coffee in hand, A beautiful spot where moments are planned. What am I?",
                  }),
                  (0, ve.jsx)("div", {
                    className: "w-full flex items-center justify-between",
                    children: (0, ve.jsx)("button", {
                      type: "button",
                      className:
                        "w-2/5 px-3 py-3 border rounded-xl mt-5 text-white",
                      style: { backgroundColor: "#ECA555" },
                      onClick: async () => {
                        if (
                          navigator.mediaDevices &&
                          navigator.mediaDevices.getUserMedia
                        )
                          try {
                            await navigator.mediaDevices.getUserMedia({
                              video: !0,
                            }),
                              i(!0);
                          } catch (e) {
                            console.error("Error accessing the camera:", e),
                              ua().fire({
                                icon: "error",
                                title: "Oops...",
                                text: "Unable to access the camera. Please check your device settings.",
                              });
                          }
                        else
                          console.error("getUserMedia not supported"),
                            ua().fire({
                              icon: "error",
                              title: "Oops...",
                              text: "Your browser does not support camera access.",
                            });
                      },
                      children: "Submit",
                    }),
                  }),
                ],
              }),
              o &&
                (0, ve.jsxs)("div", {
                  className:
                    "fixed top-0 left-0 w-full h-4/5 bg-black z-50 flex flex-col justify-between",
                  children: [
                    (0, ve.jsx)(fa(), {
                      audio: !1,
                      ref: c,
                      screenshotFormat: "image/jpeg",
                      className: "w-full h-full object-cover",
                      videoConstraints: { facingMode: d },
                      playsInline: !0,
                    }),
                    (0, ve.jsx)("div", {
                      className: "absolute top-0 right-0 w-full p-4",
                      children: (0, ve.jsx)(na, {
                        className:
                          "absolute top-0 right-7 h-6 w-6 py-3 rounded-xl mt-5 text-white",
                        icon: Ce,
                        onClick: () => {
                          f((e) => ("user" === e ? "environment" : "user"));
                        },
                      }),
                    }),
                    (0, ve.jsxs)("div", {
                      className:
                        "absolute bottom-0 left-0 w-full p-4 flex justify-evenly",
                      children: [
                        (0, ve.jsx)("button", {
                          onClick: () => {
                            i(!1);
                          },
                          className: "px-3 py-2 border rounded-xl text-white",
                          style: { backgroundColor: "#ECA555" },
                          children: "Go back",
                        }),
                        (0, ve.jsx)("button", {
                          onClick: p,
                          className: "px-3 py-2 border rounded-xl text-white",
                          style: { backgroundColor: "#ECA555" },
                          children: "Capture photo",
                        }),
                      ],
                    }),
                  ],
                }),
              l &&
                (0, ve.jsx)("img", {
                  src: l,
                  alt: "Captured",
                  className: "mt-5",
                }),
            ],
          });
        },
        zi = () => {
          const [e, n] = (0, t.useState)(null),
            [r, a] = (0, t.useState)(""),
            [o, i] = (0, t.useState)(!1),
            [l, s] = (0, t.useState)(null),
            c = (0, t.useRef)(null),
            u = ee(),
            [d, f] = (0, t.useState)("user"),
            p = (0, t.useCallback)(() => {
              const e = c.current.getScreenshot();
              console.log("image src", e), s(e), i(!1), m(e);
            }, [c, s]),
            m = async (e) => {
              const t = e.split(",")[1],
                n = await fetch("data:image/jpeg;base64,".concat(t)).then((e) =>
                  e.blob()
                ),
                r = new FormData();
              r.append("image", n, "image.jpg");
              try {
                const e = (
                    await Ni.post(Ei, r, {
                      headers: { "Content-Type": "multipart/form-data" },
                    })
                  ).data,
                  t = e.predicted_class,
                  n = e.confidence;
                "skill" === t && n >= "0.80"
                  ? ua()
                      .fire({
                        icon: "success",
                        title: "Your uploaded image is correct.",
                        text: "Move on to the next riddle!",
                      })
                      .then(() => {
                        u("/FlowTwoRiddles");
                      })
                  : "skill" === t && n >= 0.6 && n < 0.8
                  ? ua().fire({
                      icon: "error",
                      title: "Close!",
                      text: "Click clearer and better image of the location.",
                    })
                  : "skill" != t &&
                    ua().fire({
                      icon: "error",
                      title: "Not correct location.",
                      text: "Looks like you are in the wrong location.",
                    });
              } catch (a) {
                console.error("Error uploading image:", a),
                  ua().fire({
                    icon: "error",
                    title: "Upload Failed",
                    text: "There was an error uploading your image. Please try again.",
                  });
              }
            };
          return (0, ve.jsxs)("div", {
            className:
              "w-full flex items-center justify-center flex-col gap-10 mt-7 mb-10",
            children: [
              (0, ve.jsx)("div", {
                className: "w-4/5 flex items-center justify-start ml-14",
                children: (0, ve.jsx)(na, {
                  className: "h-7",
                  icon: ke,
                  onClick: () => {
                    u("/FlowTwoRiddles");
                  },
                }),
              }),
              (0, ve.jsxs)("div", {
                className: "f1-r1 border rounded-xl w-4/5 p-8",
                children: [
                  (0, ve.jsx)("h1", {
                    className: "font-bold text-2xl",
                    children: "Riddle 6",
                  }),
                  (0, ve.jsx)("br", {}),
                  (0, ve.jsx)("p", {
                    children:
                      "In me, hands craft and minds refine, Where practical workshops brightly shine. Here, skills are born from knowledge pure, In a place where learning's hands-on allure. What am I?",
                  }),
                  (0, ve.jsx)("div", {
                    className: "w-full flex items-center justify-between",
                    children: (0, ve.jsx)("button", {
                      type: "button",
                      className:
                        "w-2/5 px-3 py-3 border rounded-xl mt-5 text-white",
                      style: { backgroundColor: "#ECA555" },
                      onClick: async () => {
                        if (
                          navigator.mediaDevices &&
                          navigator.mediaDevices.getUserMedia
                        )
                          try {
                            await navigator.mediaDevices.getUserMedia({
                              video: !0,
                            }),
                              i(!0);
                          } catch (e) {
                            console.error("Error accessing the camera:", e),
                              ua().fire({
                                icon: "error",
                                title: "Oops...",
                                text: "Unable to access the camera. Please check your device settings.",
                              });
                          }
                        else
                          console.error("getUserMedia not supported"),
                            ua().fire({
                              icon: "error",
                              title: "Oops...",
                              text: "Your browser does not support camera access.",
                            });
                      },
                      children: "Submit",
                    }),
                  }),
                ],
              }),
              o &&
                (0, ve.jsxs)("div", {
                  className:
                    "fixed top-0 left-0 w-full h-4/5 bg-black z-50 flex flex-col justify-between",
                  children: [
                    (0, ve.jsx)(fa(), {
                      audio: !1,
                      ref: c,
                      screenshotFormat: "image/jpeg",
                      className: "w-full h-full object-cover",
                      videoConstraints: { facingMode: d },
                      playsInline: !0,
                    }),
                    (0, ve.jsx)("div", {
                      className: "absolute top-0 right-0 w-full p-4",
                      children: (0, ve.jsx)(na, {
                        className:
                          "absolute top-0 right-7 h-6 w-6 py-3 rounded-xl mt-5 text-white",
                        icon: Ce,
                        onClick: () => {
                          f((e) => ("user" === e ? "environment" : "user"));
                        },
                      }),
                    }),
                    (0, ve.jsxs)("div", {
                      className:
                        "absolute bottom-0 left-0 w-full p-4 flex justify-evenly",
                      children: [
                        (0, ve.jsx)("button", {
                          onClick: () => {
                            i(!1);
                          },
                          className: "px-3 py-2 border rounded-xl text-white",
                          style: { backgroundColor: "#ECA555" },
                          children: "Go back",
                        }),
                        (0, ve.jsx)("button", {
                          onClick: p,
                          className: "px-3 py-2 border rounded-xl text-white",
                          style: { backgroundColor: "#ECA555" },
                          children: "Capture photo",
                        }),
                      ],
                    }),
                  ],
                }),
              l &&
                (0, ve.jsx)("img", {
                  src: l,
                  alt: "Captured",
                  className: "mt-5",
                }),
            ],
          });
        },
        Bi = () => {
          const e = ee(),
            [n, r] = (0, t.useState)({});
          (0, t.useEffect)(() => {
            const e = ["F3-R1", "F3-R2", "F3-R3", "F3-R4", "F3-R5", "F3-R6"];
            e.forEach((e, t) => {
              localStorage.getItem(e) ||
                localStorage.setItem(e, 0 === t ? "true" : "false");
            });
            const t = {};
            e.forEach((e) => {
              const n = localStorage.getItem(e);
              t[e] = "true" === n ? "isOpen" : "isClosed";
            }),
              r(t);
          }, []);
          const a = (t, n, r, a) =>
            (0, ve.jsxs)("div", {
              className:
                "border flex flex-col items-center justify-start rounded-xl w-1/2 p-16 text-white font-semibold text-xl ".concat(
                  "isClosed" === t && "cursor-not-allowed"
                ),
              style: { backgroundColor: a },
              onClick: () =>
                ((t, n) => {
                  "isOpen" === t && e(n);
                })(t, n),
              children: [
                (0, ve.jsx)("div", { children: r }),
                "isClosed" === t &&
                  (0, ve.jsx)(na, { className: "mt-4", icon: xe }),
              ],
            });
          return (0, ve.jsxs)("div", {
            className: "w-full mt-10 h-full",
            children: [
              (0, ve.jsx)("div", {
                className: "w-4/5 flex items-center justify-start ml-7 mb-7",
                children: (0, ve.jsx)(na, {
                  className: "h-7",
                  icon: ke,
                  onClick: () => {
                    e("/");
                  },
                }),
              }),
              (0, ve.jsxs)("div", {
                className: "flex flex-row gap-2",
                children: [
                  n["F3-R1"] &&
                    a(
                      n["F3-R1"],
                      "/FlowThreeRiddleOne",
                      "First Riddle",
                      "#5768AC"
                    ),
                  n["F3-R2"] &&
                    a(
                      n["F3-R2"],
                      "/FlowThreeRiddleTwo",
                      "Second Riddle",
                      "#F2CC43"
                    ),
                ],
              }),
              (0, ve.jsxs)("div", {
                className: "flex flex-row gap-2 h-2/6",
                children: [
                  n["F3-R3"] &&
                    a(
                      n["F3-R3"],
                      "/FlowThreeRiddleThree",
                      "Third Riddle",
                      "#E282B2"
                    ),
                  n["F3-R4"] &&
                    a(
                      n["F3-R4"],
                      "/FlowThreeRiddleFour",
                      "Fourth Riddle",
                      "#70C079"
                    ),
                ],
              }),
              (0, ve.jsxs)("div", {
                className: "flex flex-row gap-2 h-2/6",
                children: [
                  n["F3-R5"] &&
                    a(
                      n["F3-R5"],
                      "/FlowThreeRiddleFive",
                      "Fifth Riddle",
                      "#ECA555"
                    ),
                  n["F3-R6"] &&
                    a(
                      n["F3-R6"],
                      "/FlowThreeRiddleSix",
                      "Sixth Riddle",
                      "#00B1E3"
                    ),
                ],
              }),
            ],
          });
        },
        Wi = () => {
          const [e, n] = (0, t.useState)(null),
            [r, a] = (0, t.useState)(""),
            [o, i] = (0, t.useState)(!1),
            [l, s] = (0, t.useState)(null),
            c = (0, t.useRef)(null),
            [u, d] = (0, t.useState)("user"),
            f = ee(),
            p = (0, t.useCallback)(() => {
              const e = c.current.getScreenshot();
              console.log("image src", e), s(e), i(!1), m(e);
            }, [c, s]),
            m = async (e) => {
              const t = e.split(",")[1],
                n = await fetch("data:image/jpeg;base64,".concat(t)).then((e) =>
                  e.blob()
                ),
                r = new FormData();
              r.append("image", n, "image.jpg");
              try {
                const e = (
                    await Ni.post(Ei, r, {
                      headers: { "Content-Type": "multipart/form-data" },
                    })
                  ).data,
                  t = e.predicted_class,
                  n = e.confidence;
                "alumni" === t && n >= "0.80"
                  ? ua()
                      .fire({
                        icon: "success",
                        title: "Your uploaded image is correct.",
                        text: "Move on to the next riddle!",
                      })
                      .then(() => {
                        localStorage.setItem("F3-R2", !0),
                          f("/FlowThreeRiddles");
                      })
                  : "alumni" === t && n >= 0.6 && n < 0.8
                  ? ua().fire({
                      icon: "error",
                      title: "Close!",
                      text: "Click clearer and better image of the location.",
                    })
                  : "alumni" != t &&
                    ua().fire({
                      icon: "error",
                      title: "Not correct location.",
                      text: "Looks like you are in the wrong location.",
                    });
              } catch (a) {
                console.error("Error uploading image:", a),
                  ua().fire({
                    icon: "error",
                    title: "Upload Failed",
                    text: "There was an error uploading your image. Please try again.",
                  });
              }
            };
          return (0, ve.jsxs)("div", {
            className:
              "w-full flex items-center justify-center flex-col gap-10 mt-7 mb-10",
            children: [
              (0, ve.jsx)("div", {
                className: "w-4/5 flex items-center justify-start ml-14",
                children: (0, ve.jsx)(na, {
                  className: "h-7",
                  icon: ke,
                  onClick: () => {
                    f("/FlowTwoRiddles");
                  },
                }),
              }),
              (0, ve.jsxs)("div", {
                className: "f1-r1 border rounded-xl w-4/5 p-8",
                children: [
                  (0, ve.jsx)("h1", {
                    className: "font-bold text-2xl",
                    children: "Riddle 1",
                  }),
                  (0, ve.jsx)("br", {}),
                  (0, ve.jsx)("p", {
                    children:
                      "I stand tall and proud, a marker of the past, Where memories linger, and friendships last. Names etched in stone, forever they stay, A testament to journeys made along the way. I tell tales of those who once walked these halls, Now spread far and wide, answering life's calls. What am I?",
                  }),
                  (0, ve.jsx)("div", {
                    className: "w-full flex items-center justify-between",
                    children: (0, ve.jsx)("button", {
                      type: "button",
                      className:
                        "w-2/5 px-3 py-3 border rounded-xl mt-5 text-white",
                      style: { backgroundColor: "#ECA555" },
                      onClick: async () => {
                        if (
                          navigator.mediaDevices &&
                          navigator.mediaDevices.getUserMedia
                        )
                          try {
                            await navigator.mediaDevices.getUserMedia({
                              video: !0,
                            }),
                              i(!0);
                          } catch (e) {
                            console.error("Error accessing the camera:", e),
                              ua().fire({
                                icon: "error",
                                title: "Oops...",
                                text: "Unable to access the camera. Please check your device settings.",
                              });
                          }
                        else
                          console.error("getUserMedia not supported"),
                            ua().fire({
                              icon: "error",
                              title: "Oops...",
                              text: "Your browser does not support camera access.",
                            });
                      },
                      children: "Submit",
                    }),
                  }),
                ],
              }),
              o &&
                (0, ve.jsxs)("div", {
                  className:
                    "fixed top-0 left-0 w-full h-4/5 bg-black z-50 flex flex-col justify-between",
                  children: [
                    (0, ve.jsx)(fa(), {
                      audio: !1,
                      ref: c,
                      screenshotFormat: "image/jpeg",
                      className: "w-full h-full object-cover",
                      videoConstraints: { facingMode: u },
                      playsInline: !0,
                    }),
                    (0, ve.jsx)("div", {
                      className: "absolute top-0 right-0 w-full p-4",
                      children: (0, ve.jsx)(na, {
                        className:
                          "absolute top-0 right-7 h-6 w-6 py-3 rounded-xl mt-5 text-white",
                        icon: Ce,
                        onClick: () => {
                          d((e) => ("user" === e ? "environment" : "user"));
                        },
                      }),
                    }),
                    (0, ve.jsxs)("div", {
                      className:
                        "absolute bottom-0 left-0 w-full p-4 flex justify-evenly",
                      children: [
                        (0, ve.jsx)("button", {
                          onClick: () => {
                            i(!1);
                          },
                          className: "px-3 py-2 border rounded-xl text-white",
                          style: { backgroundColor: "#ECA555" },
                          children: "Go back",
                        }),
                        (0, ve.jsx)("button", {
                          onClick: p,
                          className: "px-3 py-2 border rounded-xl text-white",
                          style: { backgroundColor: "#ECA555" },
                          children: "Capture photo",
                        }),
                      ],
                    }),
                  ],
                }),
              l &&
                (0, ve.jsx)("img", {
                  src: l,
                  alt: "Captured",
                  className: "mt-5",
                }),
            ],
          });
        },
        Hi = () => {
          const [e, n] = (0, t.useState)(null),
            [r, a] = (0, t.useState)(""),
            [o, i] = (0, t.useState)(!1),
            [l, s] = (0, t.useState)(null),
            c = (0, t.useRef)(null),
            u = ee(),
            [d, f] = (0, t.useState)("user"),
            p = (0, t.useCallback)(() => {
              const e = c.current.getScreenshot();
              console.log("image src", e), s(e), i(!1), m(e);
            }, [c, s]),
            m = async (e) => {
              const t = e.split(",")[1],
                n = await fetch("data:image/jpeg;base64,".concat(t)).then((e) =>
                  e.blob()
                ),
                r = new FormData();
              r.append("image", n, "image.jpg");
              try {
                const e = (
                    await Ni.post(Ei, r, {
                      headers: { "Content-Type": "multipart/form-data" },
                    })
                  ).data,
                  t = e.predicted_class,
                  n = e.confidence;
                "brit" === t && n >= "0.80"
                  ? ua()
                      .fire({
                        icon: "success",
                        title: "Your uploaded image is correct.",
                        text: "Move on to the next riddle!",
                      })
                      .then(() => {
                        localStorage.setItem("F3-R6", !0),
                          u("/FlowThreeRiddles");
                      })
                  : "brit" === t && n >= 0.6 && n < 0.8
                  ? ua().fire({
                      icon: "error",
                      title: "Close!",
                      text: "Click clearer and better image of the location.",
                    })
                  : "brit" != t &&
                    ua().fire({
                      icon: "error",
                      title: "Not correct location.",
                      text: "Looks like you are in the wrong location.",
                    });
              } catch (a) {
                console.error("Error uploading image:", a),
                  ua().fire({
                    icon: "error",
                    title: "Upload Failed",
                    text: "There was an error uploading your image. Please try again.",
                  });
              }
            };
          return (0, ve.jsxs)("div", {
            className:
              "w-full flex items-center justify-center flex-col gap-10 mt-7 mb-10",
            children: [
              (0, ve.jsx)("div", {
                className: "w-4/5 flex items-center justify-start ml-14",
                children: (0, ve.jsx)(na, {
                  className: "h-7",
                  icon: ke,
                  onClick: () => {
                    u("/FlowTwoRiddles");
                  },
                }),
              }),
              (0, ve.jsxs)("div", {
                className: "f1-r1 border rounded-xl w-4/5 p-8",
                children: [
                  (0, ve.jsx)("h1", {
                    className: "font-bold text-2xl",
                    children: "Riddle 5",
                  }),
                  (0, ve.jsx)("br", {}),
                  (0, ve.jsx)("p", {
                    children:
                      "Within university walls, I stand with pride, Offering a cozy spot where cultures collide. My name reflects a distant land's charm, Where students gather, feeling warm. What am I?",
                  }),
                  (0, ve.jsx)("div", {
                    className: "w-full flex items-center justify-between",
                    children: (0, ve.jsx)("button", {
                      type: "button",
                      className:
                        "w-2/5 px-3 py-3 border rounded-xl mt-5 text-white",
                      style: { backgroundColor: "#ECA555" },
                      onClick: async () => {
                        if (
                          navigator.mediaDevices &&
                          navigator.mediaDevices.getUserMedia
                        )
                          try {
                            await navigator.mediaDevices.getUserMedia({
                              video: !0,
                            }),
                              i(!0);
                          } catch (e) {
                            console.error("Error accessing the camera:", e),
                              ua().fire({
                                icon: "error",
                                title: "Oops...",
                                text: "Unable to access the camera. Please check your device settings.",
                              });
                          }
                        else
                          console.error("getUserMedia not supported"),
                            ua().fire({
                              icon: "error",
                              title: "Oops...",
                              text: "Your browser does not support camera access.",
                            });
                      },
                      children: "Submit",
                    }),
                  }),
                ],
              }),
              o &&
                (0, ve.jsxs)("div", {
                  className:
                    "fixed top-0 left-0 w-full h-4/5 bg-black z-50 flex flex-col justify-between",
                  children: [
                    (0, ve.jsx)(fa(), {
                      audio: !1,
                      ref: c,
                      screenshotFormat: "image/jpeg",
                      className: "w-full h-full object-cover",
                      videoConstraints: { facingMode: d },
                      playsInline: !0,
                    }),
                    (0, ve.jsx)("div", {
                      className: "absolute top-0 right-0 w-full p-4",
                      children: (0, ve.jsx)(na, {
                        className:
                          "absolute top-0 right-7 h-6 w-6 py-3 rounded-xl mt-5 text-white",
                        icon: Ce,
                        onClick: () => {
                          f((e) => ("user" === e ? "environment" : "user"));
                        },
                      }),
                    }),
                    (0, ve.jsxs)("div", {
                      className:
                        "absolute bottom-0 left-0 w-full p-4 flex justify-evenly",
                      children: [
                        (0, ve.jsx)("button", {
                          onClick: () => {
                            i(!1);
                          },
                          className: "px-3 py-2 border rounded-xl text-white",
                          style: { backgroundColor: "#ECA555" },
                          children: "Go back",
                        }),
                        (0, ve.jsx)("button", {
                          onClick: p,
                          className: "px-3 py-2 border rounded-xl text-white",
                          style: { backgroundColor: "#ECA555" },
                          children: "Capture photo",
                        }),
                      ],
                    }),
                  ],
                }),
              l &&
                (0, ve.jsx)("img", {
                  src: l,
                  alt: "Captured",
                  className: "mt-5",
                }),
            ],
          });
        },
        Vi = () => {
          const [e, n] = (0, t.useState)(null),
            [r, a] = (0, t.useState)(""),
            [o, i] = (0, t.useState)(!1),
            [l, s] = (0, t.useState)(null),
            c = (0, t.useRef)(null),
            u = ee(),
            [d, f] = (0, t.useState)("user"),
            p = (0, t.useCallback)(() => {
              const e = c.current.getScreenshot();
              console.log("image src", e), s(e), i(!1), m(e);
            }, [c, s]),
            m = async (e) => {
              const t = e.split(",")[1],
                n = await fetch("data:image/jpeg;base64,".concat(t)).then((e) =>
                  e.blob()
                ),
                r = new FormData();
              r.append("image", n, "image.jpg");
              try {
                const e = (
                    await Ni.post(Ei, r, {
                      headers: { "Content-Type": "multipart/form-data" },
                    })
                  ).data,
                  t = e.predicted_class,
                  n = e.confidence;
                "coffee_station" === t && n >= "0.80"
                  ? ua()
                      .fire({
                        icon: "success",
                        title: "Your uploaded image is correct.",
                        text: "Move on to the next riddle!",
                      })
                      .then(() => {
                        localStorage.setItem("F3-R5", !0),
                          u("/FlowThreeRiddles");
                      })
                  : "coffee_station" === t && n >= 0.6 && n < 0.8
                  ? ua().fire({
                      icon: "error",
                      title: "Close!",
                      text: "Click clearer and better image of the location.",
                    })
                  : "coffee_station" != t &&
                    ua().fire({
                      icon: "error",
                      title: "Not correct location.",
                      text: "Looks like you are in the wrong location.",
                    });
              } catch (a) {
                console.error("Error uploading image:", a),
                  ua().fire({
                    icon: "error",
                    title: "Upload Failed",
                    text: "There was an error uploading your image. Please try again.",
                  });
              }
            };
          return (0, ve.jsxs)("div", {
            className:
              "w-full flex items-center justify-center flex-col gap-10 mt-7 mb-10",
            children: [
              (0, ve.jsx)("div", {
                className: "w-4/5 flex items-center justify-start ml-14",
                children: (0, ve.jsx)(na, {
                  className: "h-7",
                  icon: ke,
                  onClick: () => {
                    u("/FlowTwoRiddles");
                  },
                }),
              }),
              (0, ve.jsxs)("div", {
                className: "f1-r1 border rounded-xl w-4/5 p-8",
                children: [
                  (0, ve.jsx)("h1", {
                    className: "font-bold text-2xl",
                    children: "Riddle 4",
                  }),
                  (0, ve.jsx)("br", {}),
                  (0, ve.jsx)("p", {
                    children:
                      "In the heart of the campus, I start your day, Where friends and colleagues gather to stay. A morning haven, with coffee in hand, A beautiful spot where moments are planned. What am I?",
                  }),
                  (0, ve.jsx)("div", {
                    className: "w-full flex items-center justify-between",
                    children: (0, ve.jsx)("button", {
                      type: "button",
                      className:
                        "w-2/5 px-3 py-3 border rounded-xl mt-5 text-white",
                      style: { backgroundColor: "#ECA555" },
                      onClick: async () => {
                        if (
                          navigator.mediaDevices &&
                          navigator.mediaDevices.getUserMedia
                        )
                          try {
                            await navigator.mediaDevices.getUserMedia({
                              video: !0,
                            }),
                              i(!0);
                          } catch (e) {
                            console.error("Error accessing the camera:", e),
                              ua().fire({
                                icon: "error",
                                title: "Oops...",
                                text: "Unable to access the camera. Please check your device settings.",
                              });
                          }
                        else
                          console.error("getUserMedia not supported"),
                            ua().fire({
                              icon: "error",
                              title: "Oops...",
                              text: "Your browser does not support camera access.",
                            });
                      },
                      children: "Submit",
                    }),
                  }),
                ],
              }),
              o &&
                (0, ve.jsxs)("div", {
                  className:
                    "fixed top-0 left-0 w-full h-4/5 bg-black z-50 flex flex-col justify-between",
                  children: [
                    (0, ve.jsx)(fa(), {
                      audio: !1,
                      ref: c,
                      screenshotFormat: "image/jpeg",
                      className: "w-full h-full object-cover",
                      videoConstraints: { facingMode: d },
                      playsInline: !0,
                    }),
                    (0, ve.jsx)("div", {
                      className: "absolute top-0 right-0 w-full p-4",
                      children: (0, ve.jsx)(na, {
                        className:
                          "absolute top-0 right-7 h-6 w-6 py-3 rounded-xl mt-5 text-white",
                        icon: Ce,
                        onClick: () => {
                          f((e) => ("user" === e ? "environment" : "user"));
                        },
                      }),
                    }),
                    (0, ve.jsxs)("div", {
                      className:
                        "absolute bottom-0 left-0 w-full p-4 flex justify-evenly",
                      children: [
                        (0, ve.jsx)("button", {
                          onClick: () => {
                            i(!1);
                          },
                          className: "px-3 py-2 border rounded-xl text-white",
                          style: { backgroundColor: "#ECA555" },
                          children: "Go back",
                        }),
                        (0, ve.jsx)("button", {
                          onClick: p,
                          className: "px-3 py-2 border rounded-xl text-white",
                          style: { backgroundColor: "#ECA555" },
                          children: "Capture photo",
                        }),
                      ],
                    }),
                  ],
                }),
              l &&
                (0, ve.jsx)("img", {
                  src: l,
                  alt: "Captured",
                  className: "mt-5",
                }),
            ],
          });
        },
        Yi = () => {
          const [e, n] = (0, t.useState)(null),
            [r, a] = (0, t.useState)(""),
            [o, i] = (0, t.useState)(!1),
            [l, s] = (0, t.useState)(null),
            c = (0, t.useRef)(null),
            u = ee(),
            [d, f] = (0, t.useState)("user"),
            p = (0, t.useCallback)(() => {
              const e = c.current.getScreenshot();
              console.log("image src", e), s(e), i(!1), m(e);
            }, [c, s]),
            m = async (e) => {
              const t = e.split(",")[1],
                n = await fetch("data:image/jpeg;base64,".concat(t)).then((e) =>
                  e.blob()
                ),
                r = new FormData();
              r.append("image", n, "image.jpg");
              try {
                const e = (
                    await Ni.post(Ei, r, {
                      headers: { "Content-Type": "multipart/form-data" },
                    })
                  ).data,
                  t = e.predicted_class,
                  n = e.confidence;
                "scholarship_wall" === t && n >= "0.80"
                  ? ua()
                      .fire({
                        icon: "success",
                        title: "Your uploaded image is correct.",
                        text: "Move on to the next riddle!",
                      })
                      .then(() => {
                        localStorage.setItem("F3-R3", !0),
                          u("/FlowThreeRiddles");
                      })
                  : "scholarship_wall" === t && n >= 0.6 && n < 0.8
                  ? ua().fire({
                      icon: "error",
                      title: "Close!",
                      text: "Click clearer and better image of the location.",
                    })
                  : "scholarship_wall" != t &&
                    ua().fire({
                      icon: "error",
                      title: "Not correct location.",
                      text: "Looks like you are in the wrong location.",
                    });
              } catch (a) {
                console.error("Error uploading image:", a),
                  ua().fire({
                    icon: "error",
                    title: "Upload Failed",
                    text: "There was an error uploading your image. Please try again.",
                  });
              }
            };
          return (0, ve.jsxs)("div", {
            className:
              "w-full flex items-center justify-center flex-col gap-10 mt-7 mb-10",
            children: [
              (0, ve.jsx)("div", {
                className: "w-4/5 flex items-center justify-start ml-14",
                children: (0, ve.jsx)(na, {
                  className: "h-7",
                  icon: ke,
                  onClick: () => {
                    u("/FlowThreeRiddles");
                  },
                }),
              }),
              (0, ve.jsxs)("div", {
                className: "f1-r1 border rounded-xl w-4/5 p-8",
                children: [
                  (0, ve.jsx)("h1", {
                    className: "font-bold text-2xl",
                    children: "Riddle 2",
                  }),
                  (0, ve.jsx)("br", {}),
                  (0, ve.jsx)("p", {
                    children:
                      "I'm a wall that holds knowledge grand, Where scholars seek to understand. Golden keys on stones so tall, Unlocking wisdom for one and all. What am I?",
                  }),
                  (0, ve.jsx)("div", {
                    className: "w-full flex items-center justify-between",
                    children: (0, ve.jsx)("button", {
                      type: "button",
                      className:
                        "w-2/5 px-3 py-3 border rounded-xl mt-5 text-white",
                      style: { backgroundColor: "#ECA555" },
                      onClick: async () => {
                        if (
                          navigator.mediaDevices &&
                          navigator.mediaDevices.getUserMedia
                        )
                          try {
                            await navigator.mediaDevices.getUserMedia({
                              video: !0,
                            }),
                              i(!0);
                          } catch (e) {
                            console.error("Error accessing the camera:", e),
                              ua().fire({
                                icon: "error",
                                title: "Oops...",
                                text: "Unable to access the camera. Please check your device settings.",
                              });
                          }
                        else
                          console.error("getUserMedia not supported"),
                            ua().fire({
                              icon: "error",
                              title: "Oops...",
                              text: "Your browser does not support camera access.",
                            });
                      },
                      children: "Submit",
                    }),
                  }),
                ],
              }),
              o &&
                (0, ve.jsxs)("div", {
                  className:
                    "fixed top-0 left-0 w-full h-4/5 bg-black z-50 flex flex-col justify-between",
                  children: [
                    (0, ve.jsx)(fa(), {
                      audio: !1,
                      ref: c,
                      screenshotFormat: "image/jpeg",
                      className: "w-full h-full object-cover",
                      videoConstraints: { facingMode: d },
                      playsInline: !0,
                    }),
                    (0, ve.jsx)("div", {
                      className: "absolute top-0 right-0 w-full p-4",
                      children: (0, ve.jsx)(na, {
                        className:
                          "absolute top-0 right-7 h-6 w-6 py-3 rounded-xl mt-5 text-white",
                        icon: Ce,
                        onClick: () => {
                          f((e) => ("user" === e ? "environment" : "user"));
                        },
                      }),
                    }),
                    (0, ve.jsxs)("div", {
                      className:
                        "absolute bottom-0 left-0 w-full p-4 flex justify-evenly",
                      children: [
                        (0, ve.jsx)("button", {
                          onClick: () => {
                            i(!1);
                          },
                          className: "px-3 py-2 border rounded-xl text-white",
                          style: { backgroundColor: "#ECA555" },
                          children: "Go back",
                        }),
                        (0, ve.jsx)("button", {
                          onClick: p,
                          className: "px-3 py-2 border rounded-xl text-white",
                          style: { backgroundColor: "#ECA555" },
                          children: "Capture photo",
                        }),
                      ],
                    }),
                  ],
                }),
              l &&
                (0, ve.jsx)("img", {
                  src: l,
                  alt: "Captured",
                  className: "mt-5",
                }),
            ],
          });
        },
        qi = () => {
          const [e, n] = (0, t.useState)(null),
            [r, a] = (0, t.useState)(""),
            [o, i] = (0, t.useState)(!1),
            [l, s] = (0, t.useState)(null),
            c = (0, t.useRef)(null),
            u = ee(),
            [d, f] = (0, t.useState)("user"),
            p = (0, t.useCallback)(() => {
              const e = c.current.getScreenshot();
              console.log("image src", e), s(e), i(!1), m(e);
            }, [c, s]),
            m = async (e) => {
              const t = e.split(",")[1],
                n = await fetch("data:image/jpeg;base64,".concat(t)).then((e) =>
                  e.blob()
                ),
                r = new FormData();
              r.append("image", n, "image.jpg");
              try {
                const e = (
                    await Ni.post(Ei, r, {
                      headers: { "Content-Type": "multipart/form-data" },
                    })
                  ).data,
                  t = e.predicted_class,
                  n = e.confidence;
                "main_gate" === t && n >= "0.80"
                  ? ua()
                      .fire({
                        icon: "success",
                        title: "Your uploaded image is correct.",
                        text: "Move on to the next riddle!",
                      })
                      .then(() => {
                        localStorage.setItem("F3-R4", !0),
                          u("/FlowThreeRiddles");
                      })
                  : "main_gate" === t && n >= 0.6 && n < 0.8
                  ? ua().fire({
                      icon: "error",
                      title: "Close!",
                      text: "Click clearer and better image of the location.",
                    })
                  : "main_gate" != t &&
                    ua().fire({
                      icon: "error",
                      title: "Not correct location.",
                      text: "Looks like you are in the wrong location.",
                    });
              } catch (a) {
                console.error("Error uploading image:", a),
                  ua().fire({
                    icon: "error",
                    title: "Upload Failed",
                    text: "There was an error uploading your image. Please try again.",
                  });
              }
            };
          return (0, ve.jsxs)("div", {
            className:
              "w-full flex items-center justify-center flex-col gap-10 mt-7 mb-10",
            children: [
              (0, ve.jsx)("div", {
                className: "w-4/5 flex items-center justify-start ml-14",
                children: (0, ve.jsx)(na, {
                  className: "h-7",
                  icon: ke,
                  onClick: () => {
                    u("/FlowTwoRiddles");
                  },
                }),
              }),
              (0, ve.jsxs)("div", {
                className: "f1-r1 border rounded-xl w-4/5 p-8",
                children: [
                  (0, ve.jsx)("h1", {
                    className: "font-bold text-2xl",
                    children: "Riddle 3",
                  }),
                  (0, ve.jsx)("br", {}),
                  (0, ve.jsx)("p", {
                    children:
                      "Through me all must pass and see, A College born in 1996, you see. I greet each seeker, young and old, Where learning's treasure doth unfold. What am I?",
                  }),
                  (0, ve.jsx)("div", {
                    className: "w-full flex items-center justify-between",
                    children: (0, ve.jsx)("button", {
                      type: "button",
                      className:
                        "w-2/5 px-3 py-3 border rounded-xl mt-5 text-white",
                      style: { backgroundColor: "#ECA555" },
                      onClick: async () => {
                        if (
                          navigator.mediaDevices &&
                          navigator.mediaDevices.getUserMedia
                        )
                          try {
                            await navigator.mediaDevices.getUserMedia({
                              video: !0,
                            }),
                              i(!0);
                          } catch (e) {
                            console.error("Error accessing the camera:", e),
                              ua().fire({
                                icon: "error",
                                title: "Oops...",
                                text: "Unable to access the camera. Please check your device settings.",
                              });
                          }
                        else
                          console.error("getUserMedia not supported"),
                            ua().fire({
                              icon: "error",
                              title: "Oops...",
                              text: "Your browser does not support camera access.",
                            });
                      },
                      children: "Submit",
                    }),
                  }),
                ],
              }),
              o &&
                (0, ve.jsxs)("div", {
                  className:
                    "fixed top-0 left-0 w-full h-4/5 bg-black z-50 flex flex-col justify-between",
                  children: [
                    (0, ve.jsx)(fa(), {
                      audio: !1,
                      ref: c,
                      screenshotFormat: "image/jpeg",
                      className: "w-full h-full object-cover",
                      videoConstraints: { facingMode: d },
                      playsInline: !0,
                    }),
                    (0, ve.jsx)("div", {
                      className: "absolute top-0 right-0 w-full p-4",
                      children: (0, ve.jsx)(na, {
                        className:
                          "absolute top-0 right-7 h-6 w-6 py-3 rounded-xl mt-5 text-white",
                        icon: Ce,
                        onClick: () => {
                          f((e) => ("user" === e ? "environment" : "user"));
                        },
                      }),
                    }),
                    (0, ve.jsxs)("div", {
                      className:
                        "absolute bottom-0 left-0 w-full p-4 flex justify-evenly",
                      children: [
                        (0, ve.jsx)("button", {
                          onClick: () => {
                            i(!1);
                          },
                          className: "px-3 py-2 border rounded-xl text-white",
                          style: { backgroundColor: "#ECA555" },
                          children: "Go back",
                        }),
                        (0, ve.jsx)("button", {
                          onClick: p,
                          className: "px-3 py-2 border rounded-xl text-white",
                          style: { backgroundColor: "#ECA555" },
                          children: "Capture photo",
                        }),
                      ],
                    }),
                  ],
                }),
              l &&
                (0, ve.jsx)("img", {
                  src: l,
                  alt: "Captured",
                  className: "mt-5",
                }),
            ],
          });
        },
        $i = () => {
          const [e, n] = (0, t.useState)(null),
            [r, a] = (0, t.useState)(""),
            [o, i] = (0, t.useState)(!1),
            [l, s] = (0, t.useState)(null),
            c = (0, t.useRef)(null),
            u = ee(),
            [d, f] = (0, t.useState)("user"),
            p = (0, t.useCallback)(() => {
              const e = c.current.getScreenshot();
              console.log("image src", e), s(e), i(!1), m(e);
            }, [c, s]),
            m = async (e) => {
              const t = e.split(",")[1],
                n = await fetch("data:image/jpeg;base64,".concat(t)).then((e) =>
                  e.blob()
                ),
                r = new FormData();
              r.append("image", n, "image.jpg");
              try {
                const e = (
                    await Ni.post(Ei, r, {
                      headers: { "Content-Type": "multipart/form-data" },
                    })
                  ).data,
                  t = e.predicted_class,
                  n = e.confidence;
                "skill" === t && n >= "0.80"
                  ? ua()
                      .fire({
                        icon: "success",
                        title: "Your uploaded image is correct.",
                        text: "Move on to the next riddle!",
                      })
                      .then(() => {
                        u("/FlowThreeRiddles");
                      })
                  : "skill" === t && n >= 0.6 && n < 0.8
                  ? ua().fire({
                      icon: "error",
                      title: "Close!",
                      text: "Click clearer and better image of the location.",
                    })
                  : "skill" != t &&
                    ua().fire({
                      icon: "error",
                      title: "Not correct location.",
                      text: "Looks like you are in the wrong location.",
                    });
              } catch (a) {
                console.error("Error uploading image:", a),
                  ua().fire({
                    icon: "error",
                    title: "Upload Failed",
                    text: "There was an error uploading your image. Please try again.",
                  });
              }
            };
          return (0, ve.jsxs)("div", {
            className:
              "w-full flex items-center justify-center flex-col gap-10 mt-7 mb-10",
            children: [
              (0, ve.jsx)("div", {
                className: "w-4/5 flex items-center justify-start ml-14",
                children: (0, ve.jsx)(na, {
                  className: "h-7",
                  icon: ke,
                  onClick: () => {
                    u("/FlowTwoRiddles");
                  },
                }),
              }),
              (0, ve.jsxs)("div", {
                className: "f1-r1 border rounded-xl w-4/5 p-8",
                children: [
                  (0, ve.jsx)("h1", {
                    className: "font-bold text-2xl",
                    children: "Riddle 6",
                  }),
                  (0, ve.jsx)("br", {}),
                  (0, ve.jsx)("p", {
                    children:
                      "Within university walls, I stand with pride, Offering a cozy spot where cultures collide. My name reflects a distant land's charm, Where students gather, feeling warm. What am I?",
                  }),
                  (0, ve.jsx)("div", {
                    className: "w-full flex items-center justify-between",
                    children: (0, ve.jsx)("button", {
                      type: "button",
                      className:
                        "w-2/5 px-3 py-3 border rounded-xl mt-5 text-white",
                      style: { backgroundColor: "#ECA555" },
                      onClick: async () => {
                        if (
                          navigator.mediaDevices &&
                          navigator.mediaDevices.getUserMedia
                        )
                          try {
                            await navigator.mediaDevices.getUserMedia({
                              video: !0,
                            }),
                              i(!0);
                          } catch (e) {
                            console.error("Error accessing the camera:", e),
                              ua().fire({
                                icon: "error",
                                title: "Oops...",
                                text: "Unable to access the camera. Please check your device settings.",
                              });
                          }
                        else
                          console.error("getUserMedia not supported"),
                            ua().fire({
                              icon: "error",
                              title: "Oops...",
                              text: "Your browser does not support camera access.",
                            });
                      },
                      children: "Submit",
                    }),
                  }),
                ],
              }),
              o &&
                (0, ve.jsxs)("div", {
                  className:
                    "fixed top-0 left-0 w-full h-4/5 bg-black z-50 flex flex-col justify-between",
                  children: [
                    (0, ve.jsx)(fa(), {
                      audio: !1,
                      ref: c,
                      screenshotFormat: "image/jpeg",
                      className: "w-full h-full object-cover",
                      videoConstraints: { facingMode: d },
                      playsInline: !0,
                    }),
                    (0, ve.jsx)("div", {
                      className: "absolute top-0 right-0 w-full p-4",
                      children: (0, ve.jsx)(na, {
                        className:
                          "absolute top-0 right-7 h-6 w-6 py-3 rounded-xl mt-5 text-white",
                        icon: Ce,
                        onClick: () => {
                          f((e) => ("user" === e ? "environment" : "user"));
                        },
                      }),
                    }),
                    (0, ve.jsxs)("div", {
                      className:
                        "absolute bottom-0 left-0 w-full p-4 flex justify-evenly",
                      children: [
                        (0, ve.jsx)("button", {
                          onClick: () => {
                            i(!1);
                          },
                          className: "px-3 py-2 border rounded-xl text-white",
                          style: { backgroundColor: "#ECA555" },
                          children: "Go back",
                        }),
                        (0, ve.jsx)("button", {
                          onClick: p,
                          className: "px-3 py-2 border rounded-xl text-white",
                          style: { backgroundColor: "#ECA555" },
                          children: "Capture photo",
                        }),
                      ],
                    }),
                  ],
                }),
              l &&
                (0, ve.jsx)("img", {
                  src: l,
                  alt: "Captured",
                  className: "mt-5",
                }),
            ],
          });
        },
        Gi = () => {
          const [e, n] = (0, t.useState)(null),
            [r, a] = (0, t.useState)(""),
            [o, i] = (0, t.useState)(!1),
            [l, s] = (0, t.useState)(null),
            c = (0, t.useRef)(null),
            u = ee(),
            [d, f] = (0, t.useState)("user"),
            p = (0, t.useCallback)(() => {
              const e = c.current.getScreenshot();
              console.log("image src", e), s(e), i(!1), m(e);
            }, [c, s]),
            m = async (e) => {
              const t = e.split(",")[1],
                n = await fetch("data:image/jpeg;base64,".concat(t)).then((e) =>
                  e.blob()
                ),
                r = new FormData();
              r.append("image", n, "image.jpg");
              try {
                const e = (
                    await Ni.post(Ei, r, {
                      headers: { "Content-Type": "multipart/form-data" },
                    })
                  ).data,
                  t = e.predicted_class,
                  n = e.confidence;
                "skill" === t && n >= "0.80"
                  ? ua()
                      .fire({
                        icon: "success",
                        title: "Your uploaded image is correct.",
                        text: "Move on to the next riddle!",
                      })
                      .then(() => {
                        u("/FlowFourRiddles");
                      })
                  : "skill" === t && n >= 0.6 && n < 0.8
                  ? ua().fire({
                      icon: "error",
                      title: "Close!",
                      text: "Click clearer and better image of the location.",
                    })
                  : "skill" != t &&
                    ua().fire({
                      icon: "error",
                      title: "Not correct location.",
                      text: "Looks like you are in the wrong location.",
                    });
              } catch (a) {
                console.error("Error uploading image:", a),
                  ua().fire({
                    icon: "error",
                    title: "Upload Failed",
                    text: "There was an error uploading your image. Please try again.",
                  });
              }
            };
          return (0, ve.jsxs)("div", {
            className:
              "w-full flex items-center justify-center flex-col gap-10 mt-7 mb-10",
            children: [
              (0, ve.jsx)("div", {
                className: "w-4/5 flex items-center justify-start ml-14",
                children: (0, ve.jsx)(na, {
                  className: "h-7",
                  icon: ke,
                  onClick: () => {
                    u("/FlowFourRiddles");
                  },
                }),
              }),
              (0, ve.jsxs)("div", {
                className: "f1-r1 border rounded-xl w-4/5 p-8",
                children: [
                  (0, ve.jsx)("h1", {
                    className: "font-bold text-2xl",
                    children: "Riddle 6",
                  }),
                  (0, ve.jsx)("br", {}),
                  (0, ve.jsx)("p", {
                    children:
                      "In me, hands craft and minds refine, Where practical workshops brightly shine. Here, skills are born from knowledge pure, In a place where learning's hands-on allure. What am I?",
                  }),
                  (0, ve.jsx)("div", {
                    className: "w-full flex items-center justify-between",
                    children: (0, ve.jsx)("button", {
                      type: "button",
                      className:
                        "w-2/5 px-3 py-3 border rounded-xl mt-5 text-white",
                      style: { backgroundColor: "#ECA555" },
                      onClick: async () => {
                        if (
                          navigator.mediaDevices &&
                          navigator.mediaDevices.getUserMedia
                        )
                          try {
                            await navigator.mediaDevices.getUserMedia({
                              video: !0,
                            }),
                              i(!0);
                          } catch (e) {
                            console.error("Error accessing the camera:", e),
                              ua().fire({
                                icon: "error",
                                title: "Oops...",
                                text: "Unable to access the camera. Please check your device settings.",
                              });
                          }
                        else
                          console.error("getUserMedia not supported"),
                            ua().fire({
                              icon: "error",
                              title: "Oops...",
                              text: "Your browser does not support camera access.",
                            });
                      },
                      children: "Submit",
                    }),
                  }),
                ],
              }),
              o &&
                (0, ve.jsxs)("div", {
                  className:
                    "fixed top-0 left-0 w-full h-4/5 bg-black z-50 flex flex-col justify-between",
                  children: [
                    (0, ve.jsx)(fa(), {
                      audio: !1,
                      ref: c,
                      screenshotFormat: "image/jpeg",
                      className: "w-full h-full object-cover",
                      videoConstraints: { facingMode: d },
                      playsInline: !0,
                    }),
                    (0, ve.jsx)("div", {
                      className: "absolute top-0 right-0 w-full p-4",
                      children: (0, ve.jsx)(na, {
                        className:
                          "absolute top-0 right-7 h-6 w-6 py-3 rounded-xl mt-5 text-white",
                        icon: Ce,
                        onClick: () => {
                          f((e) => ("user" === e ? "environment" : "user"));
                        },
                      }),
                    }),
                    (0, ve.jsxs)("div", {
                      className:
                        "absolute bottom-0 left-0 w-full p-4 flex justify-evenly",
                      children: [
                        (0, ve.jsx)("button", {
                          onClick: () => {
                            i(!1);
                          },
                          className: "px-3 py-2 border rounded-xl text-white",
                          style: { backgroundColor: "#ECA555" },
                          children: "Go back",
                        }),
                        (0, ve.jsx)("button", {
                          onClick: p,
                          className: "px-3 py-2 border rounded-xl text-white",
                          style: { backgroundColor: "#ECA555" },
                          children: "Capture photo",
                        }),
                      ],
                    }),
                  ],
                }),
              l &&
                (0, ve.jsx)("img", {
                  src: l,
                  alt: "Captured",
                  className: "mt-5",
                }),
            ],
          });
        },
        Qi = () => {
          const [e, n] = (0, t.useState)(null),
            [r, a] = (0, t.useState)(""),
            [o, i] = (0, t.useState)(!1),
            [l, s] = (0, t.useState)(null),
            c = (0, t.useRef)(null),
            u = ee(),
            [d, f] = (0, t.useState)("user"),
            p = (0, t.useCallback)(() => {
              const e = c.current.getScreenshot();
              console.log("image src", e), s(e), i(!1), m(e);
            }, [c, s]),
            m = async (e) => {
              const t = e.split(",")[1],
                n = await fetch("data:image/jpeg;base64,".concat(t)).then((e) =>
                  e.blob()
                ),
                r = new FormData();
              r.append("image", n, "image.jpg");
              try {
                const e = (
                    await Ni.post(Ei, r, {
                      headers: { "Content-Type": "multipart/form-data" },
                    })
                  ).data,
                  t = e.predicted_class,
                  n = e.confidence;
                "alumni" === t && n >= "0.80"
                  ? ua()
                      .fire({
                        icon: "success",
                        title: "Your uploaded image is correct.",
                        text: "Move on to the next riddle!",
                      })
                      .then(() => {
                        localStorage.setItem("F4-R6", !0),
                          u("/FlowFourRiddles");
                      })
                  : "alumni" === t && n >= 0.6 && n < 0.8
                  ? ua().fire({
                      icon: "error",
                      title: "Close!",
                      text: "Click clearer and better image of the location.",
                    })
                  : "alumni" != t &&
                    ua().fire({
                      icon: "error",
                      title: "Not correct location.",
                      text: "Looks like you are in the wrong location.",
                    });
              } catch (a) {
                console.error("Error uploading image:", a),
                  ua().fire({
                    icon: "error",
                    title: "Upload Failed",
                    text: "There was an error uploading your image. Please try again.",
                  });
              }
            };
          return (0, ve.jsxs)("div", {
            className:
              "w-full flex items-center justify-center flex-col gap-10 mt-7 mb-10",
            children: [
              (0, ve.jsx)("div", {
                className: "w-4/5 flex items-center justify-start ml-14",
                children: (0, ve.jsx)(na, {
                  className: "h-7",
                  icon: ke,
                  onClick: () => {
                    u("/FlowFourRiddles");
                  },
                }),
              }),
              (0, ve.jsxs)("div", {
                className: "f1-r1 border rounded-xl w-4/5 p-8",
                children: [
                  (0, ve.jsx)("h1", {
                    className: "font-bold text-2xl",
                    children: "Riddle 5",
                  }),
                  (0, ve.jsx)("br", {}),
                  (0, ve.jsx)("p", {
                    children:
                      "I stand tall and proud, a marker of the past, Where memories linger, and friendships last. Names etched in stone, forever they stay, A testament to journeys made along the way. I tell tales of those who once walked these halls, Now spread far and wide, answering life's calls. What am I?",
                  }),
                  (0, ve.jsx)("div", {
                    className: "w-full flex items-center justify-between",
                    children: (0, ve.jsx)("button", {
                      type: "button",
                      className:
                        "w-2/5 px-3 py-3 border rounded-xl mt-5 text-white",
                      style: { backgroundColor: "#ECA555" },
                      onClick: async () => {
                        if (
                          navigator.mediaDevices &&
                          navigator.mediaDevices.getUserMedia
                        )
                          try {
                            await navigator.mediaDevices.getUserMedia({
                              video: !0,
                            }),
                              i(!0);
                          } catch (e) {
                            console.error("Error accessing the camera:", e),
                              ua().fire({
                                icon: "error",
                                title: "Oops...",
                                text: "Unable to access the camera. Please check your device settings.",
                              });
                          }
                        else
                          console.error("getUserMedia not supported"),
                            ua().fire({
                              icon: "error",
                              title: "Oops...",
                              text: "Your browser does not support camera access.",
                            });
                      },
                      children: "Submit",
                    }),
                  }),
                ],
              }),
              o &&
                (0, ve.jsxs)("div", {
                  className:
                    "fixed top-0 left-0 w-full h-4/5 bg-black z-50 flex flex-col justify-between",
                  children: [
                    (0, ve.jsx)(fa(), {
                      audio: !1,
                      ref: c,
                      screenshotFormat: "image/jpeg",
                      className: "w-full h-full object-cover",
                      videoConstraints: { facingMode: d },
                      playsInline: !0,
                    }),
                    (0, ve.jsx)("div", {
                      className: "absolute top-0 right-0 w-full p-4",
                      children: (0, ve.jsx)(na, {
                        className:
                          "absolute top-0 right-7 h-6 w-6 py-3 rounded-xl mt-5 text-white",
                        icon: Ce,
                        onClick: () => {
                          f((e) => ("user" === e ? "environment" : "user"));
                        },
                      }),
                    }),
                    (0, ve.jsxs)("div", {
                      className:
                        "absolute bottom-0 left-0 w-full p-4 flex justify-evenly",
                      children: [
                        (0, ve.jsx)("button", {
                          onClick: () => {
                            i(!1);
                          },
                          className: "px-3 py-2 border rounded-xl text-white",
                          style: { backgroundColor: "#ECA555" },
                          children: "Go back",
                        }),
                        (0, ve.jsx)("button", {
                          onClick: p,
                          className: "px-3 py-2 border rounded-xl text-white",
                          style: { backgroundColor: "#ECA555" },
                          children: "Capture photo",
                        }),
                      ],
                    }),
                  ],
                }),
              l &&
                (0, ve.jsx)("img", {
                  src: l,
                  alt: "Captured",
                  className: "mt-5",
                }),
            ],
          });
        },
        Ki = () => {
          const [e, n] = (0, t.useState)(null),
            [r, a] = (0, t.useState)(""),
            [o, i] = (0, t.useState)(!1),
            [l, s] = (0, t.useState)(null),
            c = (0, t.useRef)(null),
            u = ee(),
            [d, f] = (0, t.useState)("user"),
            p = (0, t.useCallback)(() => {
              const e = c.current.getScreenshot();
              console.log("image src", e), s(e), i(!1), m(e);
            }, [c, s]),
            m = async (e) => {
              const t = e.split(",")[1],
                n = await fetch("data:image/jpeg;base64,".concat(t)).then((e) =>
                  e.blob()
                ),
                r = new FormData();
              r.append("image", n, "image.jpg");
              try {
                const e = (
                    await Ni.post(Ei, r, {
                      headers: { "Content-Type": "multipart/form-data" },
                    })
                  ).data,
                  t = e.predicted_class,
                  n = e.confidence;
                "brit" === t && n >= "0.80"
                  ? ua()
                      .fire({
                        icon: "success",
                        title: "Your uploaded image is correct.",
                        text: "Move on to the next riddle!",
                      })
                      .then(() => {
                        localStorage.setItem("F4-R5", !0),
                          u("/FlowFourRiddles");
                      })
                  : "brit" === t && n >= 0.6 && n < 0.8
                  ? ua().fire({
                      icon: "error",
                      title: "Close!",
                      text: "Click clearer and better image of the location.",
                    })
                  : "brit" != t &&
                    ua().fire({
                      icon: "error",
                      title: "Not correct location.",
                      text: "Looks like you are in the wrong location.",
                    });
              } catch (a) {
                console.error("Error uploading image:", a),
                  ua().fire({
                    icon: "error",
                    title: "Upload Failed",
                    text: "There was an error uploading your image. Please try again.",
                  });
              }
            };
          return (0, ve.jsxs)("div", {
            className:
              "w-full flex items-center justify-center flex-col gap-10 mt-7 mb-10",
            children: [
              (0, ve.jsx)("div", {
                className: "w-4/5 flex items-center justify-start ml-14",
                children: (0, ve.jsx)(na, {
                  className: "h-7",
                  icon: ke,
                  onClick: () => {
                    u("/FlowFourRiddles");
                  },
                }),
              }),
              (0, ve.jsxs)("div", {
                className: "f1-r1 border rounded-xl w-4/5 p-8",
                children: [
                  (0, ve.jsx)("h1", {
                    className: "font-bold text-2xl",
                    children: "Riddle 4",
                  }),
                  (0, ve.jsx)("br", {}),
                  (0, ve.jsx)("p", {
                    children:
                      "Within university walls, I stand with pride, Offering a cozy spot where cultures collide. My name reflects a distant land's charm, Where students gather, feeling warm. What am I?",
                  }),
                  (0, ve.jsx)("div", {
                    className: "w-full flex items-center justify-between",
                    children: (0, ve.jsx)("button", {
                      type: "button",
                      className:
                        "w-2/5 px-3 py-3 border rounded-xl mt-5 text-white",
                      style: { backgroundColor: "#ECA555" },
                      onClick: async () => {
                        if (
                          navigator.mediaDevices &&
                          navigator.mediaDevices.getUserMedia
                        )
                          try {
                            await navigator.mediaDevices.getUserMedia({
                              video: !0,
                            }),
                              i(!0);
                          } catch (e) {
                            console.error("Error accessing the camera:", e),
                              ua().fire({
                                icon: "error",
                                title: "Oops...",
                                text: "Unable to access the camera. Please check your device settings.",
                              });
                          }
                        else
                          console.error("getUserMedia not supported"),
                            ua().fire({
                              icon: "error",
                              title: "Oops...",
                              text: "Your browser does not support camera access.",
                            });
                      },
                      children: "Submit",
                    }),
                  }),
                ],
              }),
              o &&
                (0, ve.jsxs)("div", {
                  className:
                    "fixed top-0 left-0 w-full h-4/5 bg-black z-50 flex flex-col justify-between",
                  children: [
                    (0, ve.jsx)(fa(), {
                      audio: !1,
                      ref: c,
                      screenshotFormat: "image/jpeg",
                      className: "w-full h-full object-cover",
                      videoConstraints: { facingMode: d },
                      playsInline: !0,
                    }),
                    (0, ve.jsx)("div", {
                      className: "absolute top-0 right-0 w-full p-4",
                      children: (0, ve.jsx)(na, {
                        className:
                          "absolute top-0 right-7 h-6 w-6 py-3 rounded-xl mt-5 text-white",
                        icon: Ce,
                        onClick: () => {
                          f((e) => ("user" === e ? "environment" : "user"));
                        },
                      }),
                    }),
                    (0, ve.jsxs)("div", {
                      className:
                        "absolute bottom-0 left-0 w-full p-4 flex justify-evenly",
                      children: [
                        (0, ve.jsx)("button", {
                          onClick: () => {
                            i(!1);
                          },
                          className: "px-3 py-2 border rounded-xl text-white",
                          style: { backgroundColor: "#ECA555" },
                          children: "Go back",
                        }),
                        (0, ve.jsx)("button", {
                          onClick: p,
                          className: "px-3 py-2 border rounded-xl text-white",
                          style: { backgroundColor: "#ECA555" },
                          children: "Capture photo",
                        }),
                      ],
                    }),
                  ],
                }),
              l &&
                (0, ve.jsx)("img", {
                  src: l,
                  alt: "Captured",
                  className: "mt-5",
                }),
            ],
          });
        },
        Xi = () => {
          const [e, n] = (0, t.useState)(null),
            [r, a] = (0, t.useState)(""),
            [o, i] = (0, t.useState)(!1),
            [l, s] = (0, t.useState)(null),
            c = (0, t.useRef)(null),
            u = ee(),
            [d, f] = (0, t.useState)("user"),
            p = (0, t.useCallback)(() => {
              const e = c.current.getScreenshot();
              console.log("image src", e), s(e), i(!1), m(e);
            }, [c, s]),
            m = async (e) => {
              const t = e.split(",")[1],
                n = await fetch("data:image/jpeg;base64,".concat(t)).then((e) =>
                  e.blob()
                ),
                r = new FormData();
              r.append("image", n, "image.jpg");
              try {
                const e = (
                    await Ni.post(Ei, r, {
                      headers: { "Content-Type": "multipart/form-data" },
                    })
                  ).data,
                  t = e.predicted_class,
                  n = e.confidence;
                "coffee_station" === t && n >= "0.80"
                  ? ua()
                      .fire({
                        icon: "success",
                        title: "Your uploaded image is correct.",
                        text: "Move on to the next riddle!",
                      })
                      .then(() => {
                        localStorage.setItem("F4-R4", !0),
                          u("/FlowFourRiddles");
                      })
                  : "coffee_station" === t && n >= 0.6 && n < 0.8
                  ? ua().fire({
                      icon: "error",
                      title: "Close!",
                      text: "Click clearer and better image of the location.",
                    })
                  : "coffee_station" != t &&
                    ua().fire({
                      icon: "error",
                      title: "Not correct location.",
                      text: "Looks like you are in the wrong location.",
                    });
              } catch (a) {
                console.error("Error uploading image:", a),
                  ua().fire({
                    icon: "error",
                    title: "Upload Failed",
                    text: "There was an error uploading your image. Please try again.",
                  });
              }
            };
          return (0, ve.jsxs)("div", {
            className:
              "w-full flex items-center justify-center flex-col gap-10 mt-7 mb-10",
            children: [
              (0, ve.jsx)("div", {
                className: "w-4/5 flex items-center justify-start ml-14",
                children: (0, ve.jsx)(na, {
                  className: "h-7",
                  icon: ke,
                  onClick: () => {
                    u("/FlowFourRiddles");
                  },
                }),
              }),
              (0, ve.jsxs)("div", {
                className: "f1-r1 border rounded-xl w-4/5 p-8",
                children: [
                  (0, ve.jsx)("h1", {
                    className: "font-bold text-2xl",
                    children: "Riddle 3",
                  }),
                  (0, ve.jsx)("br", {}),
                  (0, ve.jsx)("p", {
                    children:
                      "In the heart of the campus, I start your day, Where friends and colleagues gather to stay. A morning haven, with coffee in hand, A beautiful spot where moments are planned. What am I?",
                  }),
                  (0, ve.jsx)("div", {
                    className: "w-full flex items-center justify-between",
                    children: (0, ve.jsx)("button", {
                      type: "button",
                      className:
                        "w-2/5 px-3 py-3 border rounded-xl mt-5 text-white",
                      style: { backgroundColor: "#ECA555" },
                      onClick: async () => {
                        if (
                          navigator.mediaDevices &&
                          navigator.mediaDevices.getUserMedia
                        )
                          try {
                            await navigator.mediaDevices.getUserMedia({
                              video: !0,
                            }),
                              i(!0);
                          } catch (e) {
                            console.error("Error accessing the camera:", e),
                              ua().fire({
                                icon: "error",
                                title: "Oops...",
                                text: "Unable to access the camera. Please check your device settings.",
                              });
                          }
                        else
                          console.error("getUserMedia not supported"),
                            ua().fire({
                              icon: "error",
                              title: "Oops...",
                              text: "Your browser does not support camera access.",
                            });
                      },
                      children: "Submit",
                    }),
                  }),
                ],
              }),
              o &&
                (0, ve.jsxs)("div", {
                  className:
                    "fixed top-0 left-0 w-full h-4/5 bg-black z-50 flex flex-col justify-between",
                  children: [
                    (0, ve.jsx)(fa(), {
                      audio: !1,
                      ref: c,
                      screenshotFormat: "image/jpeg",
                      className: "w-full h-full object-cover",
                      videoConstraints: { facingMode: d },
                      playsInline: !0,
                    }),
                    (0, ve.jsx)("div", {
                      className: "absolute top-0 right-0 w-full p-4",
                      children: (0, ve.jsx)(na, {
                        className:
                          "absolute top-0 right-7 h-6 w-6 py-3 rounded-xl mt-5 text-white",
                        icon: Ce,
                        onClick: () => {
                          f((e) => ("user" === e ? "environment" : "user"));
                        },
                      }),
                    }),
                    (0, ve.jsxs)("div", {
                      className:
                        "absolute bottom-0 left-0 w-full p-4 flex justify-evenly",
                      children: [
                        (0, ve.jsx)("button", {
                          onClick: () => {
                            i(!1);
                          },
                          className: "px-3 py-2 border rounded-xl text-white",
                          style: { backgroundColor: "#ECA555" },
                          children: "Go back",
                        }),
                        (0, ve.jsx)("button", {
                          onClick: p,
                          className: "px-3 py-2 border rounded-xl text-white",
                          style: { backgroundColor: "#ECA555" },
                          children: "Capture photo",
                        }),
                      ],
                    }),
                  ],
                }),
              l &&
                (0, ve.jsx)("img", {
                  src: l,
                  alt: "Captured",
                  className: "mt-5",
                }),
            ],
          });
        },
        Ji = () => {
          const [e, n] = (0, t.useState)(null),
            [r, a] = (0, t.useState)(""),
            [o, i] = (0, t.useState)(!1),
            [l, s] = (0, t.useState)(null),
            c = (0, t.useRef)(null),
            u = ee(),
            [d, f] = (0, t.useState)("user"),
            p = (0, t.useCallback)(() => {
              const e = c.current.getScreenshot();
              console.log("image src", e), s(e), i(!1), m(e);
            }, [c, s]),
            m = async (e) => {
              const t = e.split(",")[1],
                n = await fetch("data:image/jpeg;base64,".concat(t)).then((e) =>
                  e.blob()
                ),
                r = new FormData();
              r.append("image", n, "image.jpg");
              try {
                const e = (
                    await Ni.post(Ei, r, {
                      headers: { "Content-Type": "multipart/form-data" },
                    })
                  ).data,
                  t = e.predicted_class,
                  n = e.confidence;
                "main_gate" === t && n >= "0.80"
                  ? ua()
                      .fire({
                        icon: "success",
                        title: "Your uploaded image is correct.",
                        text: "Move on to the next riddle!",
                      })
                      .then(() => {
                        localStorage.setItem("F4-R3", !0),
                          u("/FlowFourRiddles");
                      })
                  : "main_gate" === t && n >= 0.6 && n < 0.8
                  ? ua().fire({
                      icon: "error",
                      title: "Close!",
                      text: "Click clearer and better image of the location.",
                    })
                  : "main_gate" != t &&
                    ua().fire({
                      icon: "error",
                      title: "Not correct location.",
                      text: "Looks like you are in the wrong location.",
                    });
              } catch (a) {
                console.error("Error uploading image:", a),
                  ua().fire({
                    icon: "error",
                    title: "Upload Failed",
                    text: "There was an error uploading your image. Please try again.",
                  });
              }
            };
          return (0, ve.jsxs)("div", {
            className:
              "w-full flex items-center justify-center flex-col gap-10 mt-7 mb-10",
            children: [
              (0, ve.jsx)("div", {
                className: "w-4/5 flex items-center justify-start ml-14",
                children: (0, ve.jsx)(na, {
                  className: "h-7",
                  icon: ke,
                  onClick: () => {
                    u("/FlowFourRiddles");
                  },
                }),
              }),
              (0, ve.jsxs)("div", {
                className: "f1-r1 border rounded-xl w-4/5 p-8",
                children: [
                  (0, ve.jsx)("h1", {
                    className: "font-bold text-2xl",
                    children: "Riddle 2",
                  }),
                  (0, ve.jsx)("br", {}),
                  (0, ve.jsx)("p", {
                    children:
                      "Through me all must pass and see, A College born in 1996, you see. I greet each seeker, young and old, Where learning's treasure doth unfold. What am I?",
                  }),
                  (0, ve.jsx)("div", {
                    className: "w-full flex items-center justify-between",
                    children: (0, ve.jsx)("button", {
                      type: "button",
                      className:
                        "w-2/5 px-3 py-3 border rounded-xl mt-5 text-white",
                      style: { backgroundColor: "#ECA555" },
                      onClick: async () => {
                        if (
                          navigator.mediaDevices &&
                          navigator.mediaDevices.getUserMedia
                        )
                          try {
                            await navigator.mediaDevices.getUserMedia({
                              video: !0,
                            }),
                              i(!0);
                          } catch (e) {
                            console.error("Error accessing the camera:", e),
                              ua().fire({
                                icon: "error",
                                title: "Oops...",
                                text: "Unable to access the camera. Please check your device settings.",
                              });
                          }
                        else
                          console.error("getUserMedia not supported"),
                            ua().fire({
                              icon: "error",
                              title: "Oops...",
                              text: "Your browser does not support camera access.",
                            });
                      },
                      children: "Submit",
                    }),
                  }),
                ],
              }),
              o &&
                (0, ve.jsxs)("div", {
                  className:
                    "fixed top-0 left-0 w-full h-4/5 bg-black z-50 flex flex-col justify-between",
                  children: [
                    (0, ve.jsx)(fa(), {
                      audio: !1,
                      ref: c,
                      screenshotFormat: "image/jpeg",
                      className: "w-full h-full object-cover",
                      videoConstraints: { facingMode: d },
                      playsInline: !0,
                    }),
                    (0, ve.jsx)("div", {
                      className: "absolute top-0 right-0 w-full p-4",
                      children: (0, ve.jsx)(na, {
                        className:
                          "absolute top-0 right-7 h-6 w-6 py-3 rounded-xl mt-5 text-white",
                        icon: Ce,
                        onClick: () => {
                          f((e) => ("user" === e ? "environment" : "user"));
                        },
                      }),
                    }),
                    (0, ve.jsxs)("div", {
                      className:
                        "absolute bottom-0 left-0 w-full p-4 flex justify-evenly",
                      children: [
                        (0, ve.jsx)("button", {
                          onClick: () => {
                            i(!1);
                          },
                          className: "px-3 py-2 border rounded-xl text-white",
                          style: { backgroundColor: "#ECA555" },
                          children: "Go back",
                        }),
                        (0, ve.jsx)("button", {
                          onClick: p,
                          className: "px-3 py-2 border rounded-xl text-white",
                          style: { backgroundColor: "#ECA555" },
                          children: "Capture photo",
                        }),
                      ],
                    }),
                  ],
                }),
              l &&
                (0, ve.jsx)("img", {
                  src: l,
                  alt: "Captured",
                  className: "mt-5",
                }),
            ],
          });
        },
        Zi = () => {
          const [e, n] = (0, t.useState)(null),
            [r, a] = (0, t.useState)(""),
            [o, i] = (0, t.useState)(!1),
            [l, s] = (0, t.useState)(null),
            c = (0, t.useRef)(null),
            u = ee(),
            [d, f] = (0, t.useState)("user"),
            p = (0, t.useCallback)(() => {
              const e = c.current.getScreenshot();
              console.log("image src", e), s(e), i(!1), m(e);
            }, [c, s]),
            m = async (e) => {
              const t = e.split(",")[1],
                n = await fetch("data:image/jpeg;base64,".concat(t)).then((e) =>
                  e.blob()
                ),
                r = new FormData();
              r.append("image", n, "image.jpg");
              try {
                const e = (
                    await Ni.post(Ei, r, {
                      headers: { "Content-Type": "multipart/form-data" },
                    })
                  ).data,
                  t = e.predicted_class,
                  n = e.confidence;
                "scholarship_wall" === t && n >= "0.80"
                  ? ua()
                      .fire({
                        icon: "success",
                        title: "Your uploaded image is correct.",
                        text: "Move on to the next riddle!",
                      })
                      .then(() => {
                        localStorage.setItem("F4-R2", !0),
                          u("/FlowFourRiddles");
                      })
                  : "scholarship_wall" === t && n >= 0.6 && n < 0.8
                  ? ua().fire({
                      icon: "error",
                      title: "Close!",
                      text: "Click clearer and better image of the location.",
                    })
                  : "scholarship_wall" != t &&
                    ua().fire({
                      icon: "error",
                      title: "Not correct location.",
                      text: "Looks like you are in the wrong location.",
                    });
              } catch (a) {
                console.error("Error uploading image:", a),
                  ua().fire({
                    icon: "error",
                    title: "Upload Failed",
                    text: "There was an error uploading your image. Please try again.",
                  });
              }
            };
          return (0, ve.jsxs)("div", {
            className:
              "w-full flex items-center justify-center flex-col gap-10 mt-7 mb-10",
            children: [
              (0, ve.jsx)("div", {
                className: "w-4/5 flex items-center justify-start ml-14",
                children: (0, ve.jsx)(na, {
                  className: "h-7",
                  icon: ke,
                  onClick: () => {
                    u("/FlowFourRiddles");
                  },
                }),
              }),
              (0, ve.jsxs)("div", {
                className: "f1-r1 border rounded-xl w-4/5 p-8",
                children: [
                  (0, ve.jsx)("h1", {
                    className: "font-bold text-2xl",
                    children: "Riddle 1",
                  }),
                  (0, ve.jsx)("br", {}),
                  (0, ve.jsx)("p", {
                    children:
                      "I'm a wall that holds knowledge grand, Where scholars seek to understand. Golden keys on stones so tall, Unlocking wisdom for one and all. What am I?",
                  }),
                  (0, ve.jsx)("div", {
                    className: "w-full flex items-center justify-between",
                    children: (0, ve.jsx)("button", {
                      type: "button",
                      className:
                        "w-2/5 px-3 py-3 border rounded-xl mt-5 text-white",
                      style: { backgroundColor: "#ECA555" },
                      onClick: async () => {
                        if (
                          navigator.mediaDevices &&
                          navigator.mediaDevices.getUserMedia
                        )
                          try {
                            await navigator.mediaDevices.getUserMedia({
                              video: !0,
                            }),
                              i(!0);
                          } catch (e) {
                            console.error("Error accessing the camera:", e),
                              ua().fire({
                                icon: "error",
                                title: "Oops...",
                                text: "Unable to access the camera. Please check your device settings.",
                              });
                          }
                        else
                          console.error("getUserMedia not supported"),
                            ua().fire({
                              icon: "error",
                              title: "Oops...",
                              text: "Your browser does not support camera access.",
                            });
                      },
                      children: "Submit",
                    }),
                  }),
                ],
              }),
              o &&
                (0, ve.jsxs)("div", {
                  className:
                    "fixed top-0 left-0 w-full h-4/5 bg-black z-50 flex flex-col justify-between",
                  children: [
                    (0, ve.jsx)(fa(), {
                      audio: !1,
                      ref: c,
                      screenshotFormat: "image/jpeg",
                      className: "w-full h-full object-cover",
                      videoConstraints: { facingMode: d },
                      playsInline: !0,
                    }),
                    (0, ve.jsx)("div", {
                      className: "absolute top-0 right-0 w-full p-4",
                      children: (0, ve.jsx)(na, {
                        className:
                          "absolute top-0 right-7 h-6 w-6 py-3 rounded-xl mt-5 text-white",
                        icon: Ce,
                        onClick: () => {
                          f((e) => ("user" === e ? "environment" : "user"));
                        },
                      }),
                    }),
                    (0, ve.jsxs)("div", {
                      className:
                        "absolute bottom-0 left-0 w-full p-4 flex justify-evenly",
                      children: [
                        (0, ve.jsx)("button", {
                          onClick: () => {
                            i(!1);
                          },
                          className: "px-3 py-2 border rounded-xl text-white",
                          style: { backgroundColor: "#ECA555" },
                          children: "Go back",
                        }),
                        (0, ve.jsx)("button", {
                          onClick: p,
                          className: "px-3 py-2 border rounded-xl text-white",
                          style: { backgroundColor: "#ECA555" },
                          children: "Capture photo",
                        }),
                      ],
                    }),
                  ],
                }),
              l &&
                (0, ve.jsx)("img", {
                  src: l,
                  alt: "Captured",
                  className: "mt-5",
                }),
            ],
          });
        },
        el = () => {
          const e = ee(),
            [n, r] = (0, t.useState)({});
          (0, t.useEffect)(() => {
            const e = ["F4-R1", "F4-R2", "F4-R3", "F4-R4", "F4-R5", "F4-R6"];
            e.forEach((e, t) => {
              localStorage.getItem(e) ||
                localStorage.setItem(e, 0 === t ? "true" : "false");
            });
            const t = {};
            e.forEach((e) => {
              const n = localStorage.getItem(e);
              t[e] = "true" === n ? "isOpen" : "isClosed";
            }),
              r(t);
          }, []);
          const a = (t, n, r, a) =>
            (0, ve.jsxs)("div", {
              className:
                "border flex flex-col items-center justify-start rounded-xl w-1/2 p-16 text-white font-semibold text-xl ".concat(
                  "isClosed" === t && "cursor-not-allowed"
                ),
              style: { backgroundColor: a },
              onClick: () =>
                ((t, n) => {
                  "isOpen" === t && e(n);
                })(t, n),
              children: [
                (0, ve.jsx)("div", { children: r }),
                "isClosed" === t &&
                  (0, ve.jsx)(na, { className: "mt-4", icon: xe }),
              ],
            });
          return (0, ve.jsxs)("div", {
            className: "w-full mt-10 h-full",
            children: [
              (0, ve.jsx)("div", {
                className: "w-4/5 flex items-center justify-start ml-7 mb-7",
                children: (0, ve.jsx)(na, {
                  className: "h-7",
                  icon: ke,
                  onClick: () => {
                    e("/");
                  },
                }),
              }),
              (0, ve.jsxs)("div", {
                className: "flex flex-row gap-2",
                children: [
                  n["F4-R1"] &&
                    a(
                      n["F4-R1"],
                      "/FlowFourRiddleOne",
                      "First Riddle",
                      "#5768AC"
                    ),
                  n["F4-R2"] &&
                    a(
                      n["F4-R2"],
                      "/FlowFourRiddleTwo",
                      "Second Riddle",
                      "#F2CC43"
                    ),
                ],
              }),
              (0, ve.jsxs)("div", {
                className: "flex flex-row gap-2 h-2/6",
                children: [
                  n["F4-R3"] &&
                    a(
                      n["F4-R3"],
                      "/FlowFourRiddleThree",
                      "Third Riddle",
                      "#E282B2"
                    ),
                  n["F4-R4"] &&
                    a(
                      n["F4-R4"],
                      "/FlowFourRiddleFour",
                      "Fourth Riddle",
                      "#70C079"
                    ),
                ],
              }),
              (0, ve.jsxs)("div", {
                className: "flex flex-row gap-2 h-2/6",
                children: [
                  n["F4-R5"] &&
                    a(
                      n["F4-R5"],
                      "/FlowFourRiddleFive",
                      "Fifth Riddle",
                      "#ECA555"
                    ),
                  n["F4-R6"] &&
                    a(
                      n["F4-R6"],
                      "/FlowFourRiddleSix",
                      "Sixth Riddle",
                      "#00B1E3"
                    ),
                ],
              }),
            ],
          });
        },
        tl = () => {
          const [e, n] = (0, t.useState)(null),
            [r, a] = (0, t.useState)(""),
            [o, i] = (0, t.useState)(!1),
            [l, s] = (0, t.useState)(null),
            c = (0, t.useRef)(null),
            u = ee(),
            [d, f] = (0, t.useState)("user"),
            p = async () => {
              if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia)
                try {
                  await navigator.mediaDevices.getUserMedia({ video: !0 }),
                    i(!0);
                } catch (e) {
                  console.error("Error accessing the camera:", e),
                    ua().fire({
                      icon: "error",
                      title: "Oops...",
                      text: "Unable to access the camera. Please check your device settings.",
                    });
                }
              else
                console.error("getUserMedia not supported"),
                  ua().fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Your browser does not support camera access.",
                  });
            },
            m = (0, t.useCallback)(() => {
              const e = c.current.getScreenshot();
              console.log("image src", e), s(e), i(!1), h(e);
            }, [c, s]),
            h = async (e) => {
              const t = e.split(",")[1],
                n = await fetch("data:image/jpeg;base64,".concat(t)).then((e) =>
                  e.blob()
                ),
                r = new FormData();
              r.append("image", n, "image.jpg");
              try {
                const e = (
                    await Ni.post(Ei, r, {
                      headers: { "Content-Type": "multipart/form-data" },
                    })
                  ).data,
                  t = e.predicted_class,
                  n = e.confidence;
                "skill" === t && n >= "0.80"
                  ? ua()
                      .fire({
                        icon: "success",
                        title: "Your uploaded image is correct.",
                        text: "Move on to the next riddle!",
                      })
                      .then(() => {
                        u("/FlowFiveRiddles");
                      })
                  : "skill" === t && n >= 0.6 && n < 0.8
                  ? ua().fire({
                      icon: "error",
                      title: "Close!",
                      text: "Click clearer and better image of the location.",
                    })
                  : "skill" != t &&
                    ua().fire({
                      icon: "error",
                      title: "Not correct location.",
                      text: "Looks like you are in the wrong location.",
                    });
              } catch (a) {
                console.error("Error uploading image:", a),
                  ua().fire({
                    icon: "error",
                    title: "Upload Failed",
                    text: "There was an error uploading your image. Please try again.",
                  });
              }
            };
          return (0, ve.jsxs)("div", {
            className:
              "w-full flex items-center justify-center flex-col gap-10 mt-7 mb-10",
            children: [
              (0, ve.jsx)("div", {
                className: "w-4/5 flex items-center justify-start ml-14",
                children: (0, ve.jsx)(na, {
                  className: "h-7",
                  icon: ke,
                  onClick: () => {
                    u("/FlowFiveRiddles");
                  },
                }),
              }),
              (0, ve.jsxs)("div", {
                className: "f1-r1 border rounded-xl w-4/5 p-8",
                children: [
                  (0, ve.jsx)("h1", {
                    className: "font-bold text-2xl",
                    children: "Riddle 6",
                  }),
                  (0, ve.jsx)("br", {}),
                  (0, ve.jsx)("p", {
                    children:
                      "In me, hands craft and minds refine, Where practical workshops brightly shine. Here, skills are born from knowledge pure, In a place where learning's hands-on allure. What am I?",
                  }),
                  (0, ve.jsxs)("div", {
                    className: "w-full flex items-center justify-between",
                    children: [
                      "onClick=",
                      p,
                      (0, ve.jsx)("button", {
                        type: "button",
                        className:
                          "w-2/5 px-3 py-3 border rounded-xl mt-5 text-white",
                        style: { backgroundColor: "#ECA555" },
                        onClick: p,
                        children: "Submit",
                      }),
                    ],
                  }),
                ],
              }),
              o &&
                (0, ve.jsxs)("div", {
                  className:
                    "fixed top-0 left-0 w-full h-4/5 bg-black z-50 flex flex-col justify-between",
                  children: [
                    (0, ve.jsx)(fa(), {
                      audio: !1,
                      ref: c,
                      screenshotFormat: "image/jpeg",
                      className: "w-full h-full object-cover",
                      videoConstraints: { facingMode: d },
                      playsInline: !0,
                    }),
                    (0, ve.jsx)("div", {
                      className: "absolute top-0 right-0 w-full p-4",
                      children: (0, ve.jsx)(na, {
                        className:
                          "absolute top-0 right-7 h-6 w-6 py-3 rounded-xl mt-5 text-white",
                        icon: Ce,
                        onClick: () => {
                          f((e) => ("user" === e ? "environment" : "user"));
                        },
                      }),
                    }),
                    (0, ve.jsxs)("div", {
                      className:
                        "absolute bottom-0 left-0 w-full p-4 flex justify-evenly",
                      children: [
                        (0, ve.jsx)("button", {
                          onClick: () => {
                            i(!1);
                          },
                          className: "px-3 py-2 border rounded-xl text-white",
                          style: { backgroundColor: "#ECA555" },
                          children: "Go back",
                        }),
                        (0, ve.jsx)("button", {
                          onClick: m,
                          className: "px-3 py-2 border rounded-xl text-white",
                          style: { backgroundColor: "#ECA555" },
                          children: "Capture photo",
                        }),
                      ],
                    }),
                  ],
                }),
              l &&
                (0, ve.jsx)("img", {
                  src: l,
                  alt: "Captured",
                  className: "mt-5",
                }),
            ],
          });
        },
        nl = () => {
          const [e, n] = (0, t.useState)(null),
            [r, a] = (0, t.useState)(""),
            [o, i] = (0, t.useState)(!1),
            [l, s] = (0, t.useState)(null),
            c = (0, t.useRef)(null),
            u = ee(),
            [d, f] = (0, t.useState)("user"),
            p = async () => {
              if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia)
                try {
                  await navigator.mediaDevices.getUserMedia({ video: !0 }),
                    i(!0);
                } catch (e) {
                  console.error("Error accessing the camera:", e),
                    ua().fire({
                      icon: "error",
                      title: "Oops...",
                      text: "Unable to access the camera. Please check your device settings.",
                    });
                }
              else
                console.error("getUserMedia not supported"),
                  ua().fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Your browser does not support camera access.",
                  });
            },
            m = (0, t.useCallback)(() => {
              const e = c.current.getScreenshot();
              console.log("image src", e), s(e), i(!1), h(e);
            }, [c, s]),
            h = async (e) => {
              const t = e.split(",")[1],
                n = await fetch("data:image/jpeg;base64,".concat(t)).then((e) =>
                  e.blob()
                ),
                r = new FormData();
              r.append("image", n, "image.jpg");
              try {
                const e = (
                    await Ni.post(Ei, r, {
                      headers: { "Content-Type": "multipart/form-data" },
                    })
                  ).data,
                  t = e.predicted_class,
                  n = e.confidence;
                "scholarship_wall" === t && n >= "0.80"
                  ? ua()
                      .fire({
                        icon: "success",
                        title: "Your uploaded image is correct.",
                        text: "Move on to the next riddle!",
                      })
                      .then(() => {
                        localStorage.setItem("F5-R6", !0),
                          u("/FlowFiveRiddles");
                      })
                  : "scholarship_wall" === t && n >= 0.6 && n < 0.8
                  ? ua().fire({
                      icon: "error",
                      title: "Close!",
                      text: "Click clearer and better image of the location.",
                    })
                  : "scholarship_wall" != t &&
                    ua().fire({
                      icon: "error",
                      title: "Not correct location.",
                      text: "Looks like you are in the wrong location.",
                    });
              } catch (a) {
                console.error("Error uploading image:", a),
                  ua().fire({
                    icon: "error",
                    title: "Upload Failed",
                    text: "There was an error uploading your image. Please try again.",
                  });
              }
            };
          return (0, ve.jsxs)("div", {
            className:
              "w-full flex items-center justify-center flex-col gap-10 mt-7 mb-10",
            children: [
              (0, ve.jsx)("div", {
                className: "w-4/5 flex items-center justify-start ml-14",
                children: (0, ve.jsx)(na, {
                  className: "h-7",
                  icon: ke,
                  onClick: () => {
                    u("/FlowFiveRiddles");
                  },
                }),
              }),
              (0, ve.jsxs)("div", {
                className: "f1-r1 border rounded-xl w-4/5 p-8",
                children: [
                  (0, ve.jsx)("h1", {
                    className: "font-bold text-2xl",
                    children: "Riddle 5",
                  }),
                  (0, ve.jsx)("br", {}),
                  (0, ve.jsx)("p", {
                    children:
                      "I'm a wall that holds knowledge grand, Where scholars seek to understand. Golden keys on stones so tall, Unlocking wisdom for one and all. What am I?",
                  }),
                  (0, ve.jsxs)("div", {
                    className: "w-full flex items-center justify-between",
                    children: [
                      "onClick=",
                      p,
                      (0, ve.jsx)("button", {
                        type: "button",
                        className:
                          "w-2/5 px-3 py-3 border rounded-xl mt-5 text-white",
                        style: { backgroundColor: "#ECA555" },
                        onClick: p,
                        children: "Submit",
                      }),
                    ],
                  }),
                ],
              }),
              o &&
                (0, ve.jsxs)("div", {
                  className:
                    "fixed top-0 left-0 w-full h-4/5 bg-black z-50 flex flex-col justify-between",
                  children: [
                    (0, ve.jsx)(fa(), {
                      audio: !1,
                      ref: c,
                      screenshotFormat: "image/jpeg",
                      className: "w-full h-full object-cover",
                      videoConstraints: { facingMode: d },
                      playsInline: !0,
                    }),
                    (0, ve.jsx)("div", {
                      className: "absolute top-0 right-0 w-full p-4",
                      children: (0, ve.jsx)(na, {
                        className:
                          "absolute top-0 right-7 h-6 w-6 py-3 rounded-xl mt-5 text-white",
                        icon: Ce,
                        onClick: () => {
                          f((e) => ("user" === e ? "environment" : "user"));
                        },
                      }),
                    }),
                    (0, ve.jsxs)("div", {
                      className:
                        "absolute bottom-0 left-0 w-full p-4 flex justify-evenly",
                      children: [
                        (0, ve.jsx)("button", {
                          onClick: () => {
                            i(!1);
                          },
                          className: "px-3 py-2 border rounded-xl text-white",
                          style: { backgroundColor: "#ECA555" },
                          children: "Go back",
                        }),
                        (0, ve.jsx)("button", {
                          onClick: m,
                          className: "px-3 py-2 border rounded-xl text-white",
                          style: { backgroundColor: "#ECA555" },
                          children: "Capture photo",
                        }),
                      ],
                    }),
                  ],
                }),
              l &&
                (0, ve.jsx)("img", {
                  src: l,
                  alt: "Captured",
                  className: "mt-5",
                }),
            ],
          });
        },
        rl = () => {
          const [e, n] = (0, t.useState)(null),
            [r, a] = (0, t.useState)(""),
            [o, i] = (0, t.useState)(!1),
            [l, s] = (0, t.useState)(null),
            c = (0, t.useRef)(null),
            u = ee(),
            [d, f] = (0, t.useState)("user"),
            p = async () => {
              if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia)
                try {
                  await navigator.mediaDevices.getUserMedia({ video: !0 }),
                    i(!0);
                } catch (e) {
                  console.error("Error accessing the camera:", e),
                    ua().fire({
                      icon: "error",
                      title: "Oops...",
                      text: "Unable to access the camera. Please check your device settings.",
                    });
                }
              else
                console.error("getUserMedia not supported"),
                  ua().fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Your browser does not support camera access.",
                  });
            },
            m = (0, t.useCallback)(() => {
              const e = c.current.getScreenshot();
              console.log("image src", e), s(e), i(!1), h(e);
            }, [c, s]),
            h = async (e) => {
              const t = e.split(",")[1],
                n = await fetch("data:image/jpeg;base64,".concat(t)).then((e) =>
                  e.blob()
                ),
                r = new FormData();
              r.append("image", n, "image.jpg");
              try {
                const e = (
                    await Ni.post(Ei, r, {
                      headers: { "Content-Type": "multipart/form-data" },
                    })
                  ).data,
                  t = e.predicted_class,
                  n = e.confidence;
                "alumni" === t && n >= "0.80"
                  ? ua()
                      .fire({
                        icon: "success",
                        title: "Your uploaded image is correct.",
                        text: "Move on to the next riddle!",
                      })
                      .then(() => {
                        localStorage.setItem("F5-R5", !0),
                          u("/FlowFiveRiddles");
                      })
                  : "alumni" === t && n >= 0.6 && n < 0.8
                  ? ua().fire({
                      icon: "error",
                      title: "Close!",
                      text: "Click clearer and better image of the location.",
                    })
                  : "alumni" != t &&
                    ua().fire({
                      icon: "error",
                      title: "Not correct location.",
                      text: "Looks like you are in the wrong location.",
                    });
              } catch (a) {
                console.error("Error uploading image:", a),
                  ua().fire({
                    icon: "error",
                    title: "Upload Failed",
                    text: "There was an error uploading your image. Please try again.",
                  });
              }
            };
          return (0, ve.jsxs)("div", {
            className:
              "w-full flex items-center justify-center flex-col gap-10 mt-7 mb-10",
            children: [
              (0, ve.jsx)("div", {
                className: "w-4/5 flex items-center justify-start ml-14",
                children: (0, ve.jsx)(na, {
                  className: "h-7",
                  icon: ke,
                  onClick: () => {
                    u("/FlowFiveRiddles");
                  },
                }),
              }),
              (0, ve.jsxs)("div", {
                className: "f1-r1 border rounded-xl w-4/5 p-8",
                children: [
                  (0, ve.jsx)("h1", {
                    className: "font-bold text-2xl",
                    children: "Riddle 4",
                  }),
                  (0, ve.jsx)("br", {}),
                  (0, ve.jsx)("p", {
                    children:
                      "I stand tall and proud, a marker of the past, Where memories linger, and friendships last. Names etched in stone, forever they stay, A testament to journeys made along the way. I tell tales of those who once walked these halls, Now spread far and wide, answering life's calls. What am I?",
                  }),
                  (0, ve.jsxs)("div", {
                    className: "w-full flex items-center justify-between",
                    children: [
                      "onClick=",
                      p,
                      (0, ve.jsx)("button", {
                        type: "button",
                        className:
                          "w-2/5 px-3 py-3 border rounded-xl mt-5 text-white",
                        style: { backgroundColor: "#ECA555" },
                        onClick: p,
                        children: "Submit",
                      }),
                    ],
                  }),
                ],
              }),
              o &&
                (0, ve.jsxs)("div", {
                  className:
                    "fixed top-0 left-0 w-full h-4/5 bg-black z-50 flex flex-col justify-between",
                  children: [
                    (0, ve.jsx)(fa(), {
                      audio: !1,
                      ref: c,
                      screenshotFormat: "image/jpeg",
                      className: "w-full h-full object-cover",
                      videoConstraints: { facingMode: d },
                      playsInline: !0,
                    }),
                    (0, ve.jsx)("div", {
                      className: "absolute top-0 right-0 w-full p-4",
                      children: (0, ve.jsx)(na, {
                        className:
                          "absolute top-0 right-7 h-6 w-6 py-3 rounded-xl mt-5 text-white",
                        icon: Ce,
                        onClick: () => {
                          f((e) => ("user" === e ? "environment" : "user"));
                        },
                      }),
                    }),
                    (0, ve.jsxs)("div", {
                      className:
                        "absolute bottom-0 left-0 w-full p-4 flex justify-evenly",
                      children: [
                        (0, ve.jsx)("button", {
                          onClick: () => {
                            i(!1);
                          },
                          className: "px-3 py-2 border rounded-xl text-white",
                          style: { backgroundColor: "#ECA555" },
                          children: "Go back",
                        }),
                        (0, ve.jsx)("button", {
                          onClick: m,
                          className: "px-3 py-2 border rounded-xl text-white",
                          style: { backgroundColor: "#ECA555" },
                          children: "Capture photo",
                        }),
                      ],
                    }),
                  ],
                }),
              l &&
                (0, ve.jsx)("img", {
                  src: l,
                  alt: "Captured",
                  className: "mt-5",
                }),
            ],
          });
        },
        al = () => {
          const [e, n] = (0, t.useState)(null),
            [r, a] = (0, t.useState)(""),
            [o, i] = (0, t.useState)(!1),
            [l, s] = (0, t.useState)(null),
            c = (0, t.useRef)(null),
            u = ee(),
            [d, f] = (0, t.useState)("user"),
            p = async () => {
              if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia)
                try {
                  await navigator.mediaDevices.getUserMedia({ video: !0 }),
                    i(!0);
                } catch (e) {
                  console.error("Error accessing the camera:", e),
                    ua().fire({
                      icon: "error",
                      title: "Oops...",
                      text: "Unable to access the camera. Please check your device settings.",
                    });
                }
              else
                console.error("getUserMedia not supported"),
                  ua().fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Your browser does not support camera access.",
                  });
            },
            m = (0, t.useCallback)(() => {
              const e = c.current.getScreenshot();
              console.log("image src", e), s(e), i(!1), h(e);
            }, [c, s]),
            h = async (e) => {
              const t = e.split(",")[1],
                n = await fetch("data:image/jpeg;base64,".concat(t)).then((e) =>
                  e.blob()
                ),
                r = new FormData();
              r.append("image", n, "image.jpg");
              try {
                const e = (
                    await Ni.post(Ei, r, {
                      headers: { "Content-Type": "multipart/form-data" },
                    })
                  ).data,
                  t = e.predicted_class,
                  n = e.confidence;
                "brit" === t && n >= "0.80"
                  ? ua()
                      .fire({
                        icon: "success",
                        title: "Your uploaded image is correct.",
                        text: "Move on to the next riddle!",
                      })
                      .then(() => {
                        localStorage.setItem("F5-R4", !0),
                          u("/FlowFiveRiddles");
                      })
                  : "brit" === t && n >= 0.6 && n < 0.8
                  ? ua().fire({
                      icon: "error",
                      title: "Close!",
                      text: "Click clearer and better image of the location.",
                    })
                  : "brit" != t &&
                    ua().fire({
                      icon: "error",
                      title: "Not correct location.",
                      text: "Looks like you are in the wrong location.",
                    });
              } catch (a) {
                console.error("Error uploading image:", a),
                  ua().fire({
                    icon: "error",
                    title: "Upload Failed",
                    text: "There was an error uploading your image. Please try again.",
                  });
              }
            };
          return (0, ve.jsxs)("div", {
            className:
              "w-full flex items-center justify-center flex-col gap-10 mt-7 mb-10",
            children: [
              (0, ve.jsx)("div", {
                className: "w-4/5 flex items-center justify-start ml-14",
                children: (0, ve.jsx)(na, {
                  className: "h-7",
                  icon: ke,
                  onClick: () => {
                    u("/FlowFiveRiddles");
                  },
                }),
              }),
              (0, ve.jsxs)("div", {
                className: "f1-r1 border rounded-xl w-4/5 p-8",
                children: [
                  (0, ve.jsx)("h1", {
                    className: "font-bold text-2xl",
                    children: "Riddle 3",
                  }),
                  (0, ve.jsx)("br", {}),
                  (0, ve.jsx)("p", {
                    children:
                      "Within university walls, I stand with pride, Offering a cozy spot where cultures collide. My name reflects a distant land's charm, Where students gather, feeling warm. What am I?",
                  }),
                  (0, ve.jsxs)("div", {
                    className: "w-full flex items-center justify-between",
                    children: [
                      "onClick=",
                      p,
                      (0, ve.jsx)("button", {
                        type: "button",
                        className:
                          "w-2/5 px-3 py-3 border rounded-xl mt-5 text-white",
                        style: { backgroundColor: "#ECA555" },
                        onClick: p,
                        children: "Submit",
                      }),
                    ],
                  }),
                ],
              }),
              o &&
                (0, ve.jsxs)("div", {
                  className:
                    "fixed top-0 left-0 w-full h-4/5 bg-black z-50 flex flex-col justify-between",
                  children: [
                    (0, ve.jsx)(fa(), {
                      audio: !1,
                      ref: c,
                      screenshotFormat: "image/jpeg",
                      className: "w-full h-full object-cover",
                      videoConstraints: { facingMode: d },
                      playsInline: !0,
                    }),
                    (0, ve.jsx)("div", {
                      className: "absolute top-0 right-0 w-full p-4",
                      children: (0, ve.jsx)(na, {
                        className:
                          "absolute top-0 right-7 h-6 w-6 py-3 rounded-xl mt-5 text-white",
                        icon: Ce,
                        onClick: () => {
                          f((e) => ("user" === e ? "environment" : "user"));
                        },
                      }),
                    }),
                    (0, ve.jsxs)("div", {
                      className:
                        "absolute bottom-0 left-0 w-full p-4 flex justify-evenly",
                      children: [
                        (0, ve.jsx)("button", {
                          onClick: () => {
                            i(!1);
                          },
                          className: "px-3 py-2 border rounded-xl text-white",
                          style: { backgroundColor: "#ECA555" },
                          children: "Go back",
                        }),
                        (0, ve.jsx)("button", {
                          onClick: m,
                          className: "px-3 py-2 border rounded-xl text-white",
                          style: { backgroundColor: "#ECA555" },
                          children: "Capture photo",
                        }),
                      ],
                    }),
                  ],
                }),
              l &&
                (0, ve.jsx)("img", {
                  src: l,
                  alt: "Captured",
                  className: "mt-5",
                }),
            ],
          });
        },
        ol = () => {
          const [e, n] = (0, t.useState)(null),
            [r, a] = (0, t.useState)(""),
            [o, i] = (0, t.useState)(!1),
            [l, s] = (0, t.useState)(null),
            c = (0, t.useRef)(null),
            u = ee(),
            [d, f] = (0, t.useState)("user"),
            p = async () => {
              if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia)
                try {
                  await navigator.mediaDevices.getUserMedia({ video: !0 }),
                    i(!0);
                } catch (e) {
                  console.error("Error accessing the camera:", e),
                    ua().fire({
                      icon: "error",
                      title: "Oops...",
                      text: "Unable to access the camera. Please check your device settings.",
                    });
                }
              else
                console.error("getUserMedia not supported"),
                  ua().fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Your browser does not support camera access.",
                  });
            },
            m = (0, t.useCallback)(() => {
              const e = c.current.getScreenshot();
              console.log("image src", e), s(e), i(!1), h(e);
            }, [c, s]),
            h = async (e) => {
              const t = e.split(",")[1],
                n = await fetch("data:image/jpeg;base64,".concat(t)).then((e) =>
                  e.blob()
                ),
                r = new FormData();
              r.append("image", n, "image.jpg");
              try {
                const e = (
                    await Ni.post(Ei, r, {
                      headers: { "Content-Type": "multipart/form-data" },
                    })
                  ).data,
                  t = e.predicted_class,
                  n = e.confidence;
                "coffee_station" === t && n >= "0.80"
                  ? ua()
                      .fire({
                        icon: "success",
                        title: "Your uploaded image is correct.",
                        text: "Move on to the next riddle!",
                      })
                      .then(() => {
                        localStorage.setItem("F5-R3", !0),
                          u("/FlowFiveRiddles");
                      })
                  : "coffee_station" === t && n >= 0.6 && n < 0.8
                  ? ua().fire({
                      icon: "error",
                      title: "Close!",
                      text: "Click clearer and better image of the location.",
                    })
                  : "coffee_station" != t &&
                    ua().fire({
                      icon: "error",
                      title: "Not correct location.",
                      text: "Looks like you are in the wrong location.",
                    });
              } catch (a) {
                console.error("Error uploading image:", a),
                  ua().fire({
                    icon: "error",
                    title: "Upload Failed",
                    text: "There was an error uploading your image. Please try again.",
                  });
              }
            };
          return (0, ve.jsxs)("div", {
            className:
              "w-full flex items-center justify-center flex-col gap-10 mt-7 mb-10",
            children: [
              (0, ve.jsx)("div", {
                className: "w-4/5 flex items-center justify-start ml-14",
                children: (0, ve.jsx)(na, {
                  className: "h-7",
                  icon: ke,
                  onClick: () => {
                    u("/FlowFiveRiddles");
                  },
                }),
              }),
              (0, ve.jsxs)("div", {
                className: "f1-r1 border rounded-xl w-4/5 p-8",
                children: [
                  (0, ve.jsx)("h1", {
                    className: "font-bold text-2xl",
                    children: "Riddle 2",
                  }),
                  (0, ve.jsx)("br", {}),
                  (0, ve.jsx)("p", {
                    children:
                      "In the heart of the campus, I start your day, Where friends and colleagues gather to stay. A morning haven, with coffee in hand, A beautiful spot where moments are planned. What am I?",
                  }),
                  (0, ve.jsxs)("div", {
                    className: "w-full flex items-center justify-between",
                    children: [
                      "onClick=",
                      p,
                      (0, ve.jsx)("button", {
                        type: "button",
                        className:
                          "w-2/5 px-3 py-3 border rounded-xl mt-5 text-white",
                        style: { backgroundColor: "#ECA555" },
                        onClick: p,
                        children: "Submit",
                      }),
                    ],
                  }),
                ],
              }),
              o &&
                (0, ve.jsxs)("div", {
                  className:
                    "fixed top-0 left-0 w-full h-4/5 bg-black z-50 flex flex-col justify-between",
                  children: [
                    (0, ve.jsx)(fa(), {
                      audio: !1,
                      ref: c,
                      screenshotFormat: "image/jpeg",
                      className: "w-full h-full object-cover",
                      videoConstraints: { facingMode: d },
                      playsInline: !0,
                    }),
                    (0, ve.jsx)("div", {
                      className: "absolute top-0 right-0 w-full p-4",
                      children: (0, ve.jsx)(na, {
                        className:
                          "absolute top-0 right-7 h-6 w-6 py-3 rounded-xl mt-5 text-white",
                        icon: Ce,
                        onClick: () => {
                          f((e) => ("user" === e ? "environment" : "user"));
                        },
                      }),
                    }),
                    (0, ve.jsxs)("div", {
                      className:
                        "absolute bottom-0 left-0 w-full p-4 flex justify-evenly",
                      children: [
                        (0, ve.jsx)("button", {
                          onClick: () => {
                            i(!1);
                          },
                          className: "px-3 py-2 border rounded-xl text-white",
                          style: { backgroundColor: "#ECA555" },
                          children: "Go back",
                        }),
                        (0, ve.jsx)("button", {
                          onClick: m,
                          className: "px-3 py-2 border rounded-xl text-white",
                          style: { backgroundColor: "#ECA555" },
                          children: "Capture photo",
                        }),
                      ],
                    }),
                  ],
                }),
              l &&
                (0, ve.jsx)("img", {
                  src: l,
                  alt: "Captured",
                  className: "mt-5",
                }),
            ],
          });
        },
        il = () => {
          const [e, n] = (0, t.useState)(null),
            [r, a] = (0, t.useState)(""),
            [o, i] = (0, t.useState)(!1),
            [l, s] = (0, t.useState)(null),
            c = (0, t.useRef)(null),
            u = ee(),
            [d, f] = (0, t.useState)("user"),
            p = (0, t.useCallback)(() => {
              const e = c.current.getScreenshot();
              console.log("image src", e), s(e), i(!1), m(e);
            }, [c, s]),
            m = async (e) => {
              const t = e.split(",")[1],
                n = await fetch("data:image/jpeg;base64,".concat(t)).then((e) =>
                  e.blob()
                ),
                r = new FormData();
              r.append("image", n, "image.jpg");
              try {
                const e = (
                    await Ni.post(Ei, r, {
                      headers: { "Content-Type": "multipart/form-data" },
                    })
                  ).data,
                  t = e.predicted_class,
                  n = e.confidence;
                "main_gate" === t && n >= "0.80"
                  ? ua()
                      .fire({
                        icon: "success",
                        title: "Your uploaded image is correct.",
                        text: "Move on to the next riddle!",
                      })
                      .then(() => {
                        localStorage.setItem("F5-R2", !0),
                          u("/FlowFiveRiddles");
                      })
                  : "main_gate" === t && n >= 0.6 && n < 0.8
                  ? ua().fire({
                      icon: "error",
                      title: "Close!",
                      text: "Click clearer and better image of the location.",
                    })
                  : "main_gate" != t &&
                    ua().fire({
                      icon: "error",
                      title: "Not correct location.",
                      text: "Looks like you are in the wrong location.",
                    });
              } catch (a) {
                console.error("Error uploading image:", a),
                  ua().fire({
                    icon: "error",
                    title: "Upload Failed",
                    text: "There was an error uploading your image. Please try again.",
                  });
              }
            };
          return (0, ve.jsxs)("div", {
            className:
              "w-full flex items-center justify-center flex-col gap-10 mt-7 mb-10",
            children: [
              (0, ve.jsx)("div", {
                className: "w-4/5 flex items-center justify-start ml-14",
                children: (0, ve.jsx)(na, {
                  className: "h-7",
                  icon: ke,
                  onClick: () => {
                    u("/FlowFiveRiddles");
                  },
                }),
              }),
              (0, ve.jsxs)("div", {
                className: "f1-r1 border rounded-xl w-4/5 p-8",
                children: [
                  (0, ve.jsx)("h1", {
                    className: "font-bold text-2xl",
                    children: "Riddle 1",
                  }),
                  (0, ve.jsx)("br", {}),
                  (0, ve.jsx)("p", {
                    children:
                      "Through me all must pass and see, A College born in 1996, you see. I greet each seeker, young and old, Where learning's treasure doth unfold. What am I?",
                  }),
                  (0, ve.jsx)("div", {
                    className: "w-full flex items-center justify-between",
                    children: (0, ve.jsx)("button", {
                      type: "button",
                      className:
                        "w-2/5 px-3 py-3 border rounded-xl mt-5 text-white",
                      style: { backgroundColor: "#ECA555" },
                      onClick: async () => {
                        if (
                          navigator.mediaDevices &&
                          navigator.mediaDevices.getUserMedia
                        )
                          try {
                            await navigator.mediaDevices.getUserMedia({
                              video: !0,
                            }),
                              i(!0);
                          } catch (e) {
                            console.error("Error accessing the camera:", e),
                              ua().fire({
                                icon: "error",
                                title: "Oops...",
                                text: "Unable to access the camera. Please check your device settings.",
                              });
                          }
                        else
                          console.error("getUserMedia not supported"),
                            ua().fire({
                              icon: "error",
                              title: "Oops...",
                              text: "Your browser does not support camera access.",
                            });
                      },
                      children: "Submit",
                    }),
                  }),
                ],
              }),
              o &&
                (0, ve.jsxs)("div", {
                  className:
                    "fixed top-0 left-0 w-full h-4/5 bg-black z-50 flex flex-col justify-between",
                  children: [
                    (0, ve.jsx)(fa(), {
                      audio: !1,
                      ref: c,
                      screenshotFormat: "image/jpeg",
                      className: "w-full h-full object-cover",
                      videoConstraints: { facingMode: d },
                      playsInline: !0,
                    }),
                    (0, ve.jsx)("div", {
                      className: "absolute top-0 right-0 w-full p-4",
                      children: (0, ve.jsx)(na, {
                        className:
                          "absolute top-0 right-7 h-6 w-6 py-3 rounded-xl mt-5 text-white",
                        icon: Ce,
                        onClick: () => {
                          f((e) => ("user" === e ? "environment" : "user"));
                        },
                      }),
                    }),
                    (0, ve.jsxs)("div", {
                      className:
                        "absolute bottom-0 left-0 w-full p-4 flex justify-evenly",
                      children: [
                        (0, ve.jsx)("button", {
                          onClick: () => {
                            i(!1);
                          },
                          className: "px-3 py-2 border rounded-xl text-white",
                          style: { backgroundColor: "#ECA555" },
                          children: "Go back",
                        }),
                        (0, ve.jsx)("button", {
                          onClick: p,
                          className: "px-3 py-2 border rounded-xl text-white",
                          style: { backgroundColor: "#ECA555" },
                          children: "Capture photo",
                        }),
                      ],
                    }),
                  ],
                }),
              l &&
                (0, ve.jsx)("img", {
                  src: l,
                  alt: "Captured",
                  className: "mt-5",
                }),
            ],
          });
        },
        ll = () => {
          const e = ee(),
            [n, r] = (0, t.useState)({});
          (0, t.useEffect)(() => {
            const e = ["F5-R1", "F5-R2", "F5-R3", "F5-R4", "F5-R5", "F5-R6"];
            e.forEach((e, t) => {
              localStorage.getItem(e) ||
                localStorage.setItem(e, 0 === t ? "true" : "false");
            });
            const t = {};
            e.forEach((e) => {
              const n = localStorage.getItem(e);
              t[e] = "true" === n ? "isOpen" : "isClosed";
            }),
              r(t);
          }, []);
          const a = (t, n, r, a) =>
            (0, ve.jsxs)("div", {
              className:
                "border flex flex-col items-center justify-start rounded-xl w-1/2 p-16 text-white font-semibold text-xl ".concat(
                  "isClosed" === t && "cursor-not-allowed"
                ),
              style: { backgroundColor: a },
              onClick: () =>
                ((t, n) => {
                  "isOpen" === t && e(n);
                })(t, n),
              children: [
                (0, ve.jsx)("div", { children: r }),
                "isClosed" === t &&
                  (0, ve.jsx)(na, { className: "mt-4", icon: xe }),
              ],
            });
          return (0, ve.jsxs)("div", {
            className: "w-full mt-10 h-full",
            children: [
              (0, ve.jsx)("div", {
                className: "w-4/5 flex items-center justify-start ml-7 mb-7",
                children: (0, ve.jsx)(na, {
                  className: "h-7",
                  icon: ke,
                  onClick: () => {
                    e("/");
                  },
                }),
              }),
              (0, ve.jsxs)("div", {
                className: "flex flex-row gap-2",
                children: [
                  n["F5-R1"] &&
                    a(
                      n["F5-R1"],
                      "/FlowFiveRiddleOne",
                      "First Riddle",
                      "#5768AC"
                    ),
                  n["F5-R2"] &&
                    a(
                      n["F5-R2"],
                      "/FlowFiveRiddleTwo",
                      "Second Riddle",
                      "#F2CC43"
                    ),
                ],
              }),
              (0, ve.jsxs)("div", {
                className: "flex flex-row gap-2 h-2/6",
                children: [
                  n["F5-R3"] &&
                    a(
                      n["F5-R3"],
                      "/FlowFiveRiddleThree",
                      "Third Riddle",
                      "#E282B2"
                    ),
                  n["F5-R4"] &&
                    a(
                      n["F5-R4"],
                      "/FlowFiveRiddleFour",
                      "Fourth Riddle",
                      "#70C079"
                    ),
                ],
              }),
              (0, ve.jsxs)("div", {
                className: "flex flex-row gap-2 h-2/6",
                children: [
                  n["F5-R5"] &&
                    a(
                      n["F5-R5"],
                      "/FlowFiveRiddleFive",
                      "Fifth Riddle",
                      "#ECA555"
                    ),
                  n["F5-R6"] &&
                    a(
                      n["F5-R6"],
                      "/FlowFiveRiddleSix",
                      "Sixth Riddle",
                      "#00B1E3"
                    ),
                ],
              }),
            ],
          });
        },
        sl = () =>
          (0, ve.jsx)("div", {
            children: (0, ve.jsx)(be, {
              children: (0, ve.jsxs)(he, {
                path: "/",
                element: (0, ve.jsx)("div", { children: (0, ve.jsx)(me, {}) }),
                children: [
                  (0, ve.jsx)(he, { path: "/", element: (0, ve.jsx)(ye, {}) }),
                  (0, ve.jsx)(he, {
                    path: "/FlowOneRiddles",
                    element: (0, ve.jsx)(sa, {}),
                  }),
                  (0, ve.jsx)(he, {
                    path: "/FlowOneRiddleOne",
                    element: (0, ve.jsx)(Ri, {}),
                  }),
                  (0, ve.jsx)(he, {
                    path: "/FlowOneRiddleTwo",
                    element: (0, ve.jsx)(Fi, {}),
                  }),
                  (0, ve.jsx)(he, {
                    path: "/FlowOneRiddleThree",
                    element: (0, ve.jsx)(Oi, {}),
                  }),
                  (0, ve.jsx)(he, {
                    path: "/FlowOneRiddleFour",
                    element: (0, ve.jsx)(Ai, {}),
                  }),
                  (0, ve.jsx)(he, {
                    path: "/FlowOneRiddleFive",
                    element: (0, ve.jsx)(Pi, {}),
                  }),
                  (0, ve.jsx)(he, {
                    path: "/FlowOneRiddleSix",
                    element: (0, ve.jsx)(Ti, {}),
                  }),
                  (0, ve.jsx)(he, {
                    path: "/FlowTwoRiddles",
                    element: (0, ve.jsx)(Mi, {}),
                  }),
                  (0, ve.jsx)(he, {
                    path: "/FlowTwoRiddleOne",
                    element: (0, ve.jsx)(_i, {}),
                  }),
                  (0, ve.jsx)(he, {
                    path: "/FlowTwoRiddleTwo",
                    element: (0, ve.jsx)(Ii, {}),
                  }),
                  (0, ve.jsx)(he, {
                    path: "/FlowTwoRiddleThree",
                    element: (0, ve.jsx)(Li, {}),
                  }),
                  (0, ve.jsx)(he, {
                    path: "/FlowTwoRiddleFour",
                    element: (0, ve.jsx)(Ui, {}),
                  }),
                  (0, ve.jsx)(he, {
                    path: "/FlowTwoRiddleFive",
                    element: (0, ve.jsx)(Di, {}),
                  }),
                  (0, ve.jsx)(he, {
                    path: "/FlowTwoRiddleSix",
                    element: (0, ve.jsx)(zi, {}),
                  }),
                  (0, ve.jsx)(he, {
                    path: "/FlowThreeRiddles",
                    element: (0, ve.jsx)(Bi, {}),
                  }),
                  (0, ve.jsx)(he, {
                    path: "/FlowThreeRiddleOne",
                    element: (0, ve.jsx)(Wi, {}),
                  }),
                  (0, ve.jsx)(he, {
                    path: "/FlowThreeRiddleTwo",
                    element: (0, ve.jsx)(Yi, {}),
                  }),
                  (0, ve.jsx)(he, {
                    path: "/FlowThreeRiddleThree",
                    element: (0, ve.jsx)(qi, {}),
                  }),
                  (0, ve.jsx)(he, {
                    path: "/FlowThreeRiddleFour",
                    element: (0, ve.jsx)(Vi, {}),
                  }),
                  (0, ve.jsx)(he, {
                    path: "/FlowThreeRiddleFive",
                    element: (0, ve.jsx)(Hi, {}),
                  }),
                  (0, ve.jsx)(he, {
                    path: "/FlowThreeRiddleSix",
                    element: (0, ve.jsx)($i, {}),
                  }),
                  (0, ve.jsx)(he, {
                    path: "/FlowFourRiddles",
                    element: (0, ve.jsx)(el, {}),
                  }),
                  (0, ve.jsx)(he, {
                    path: "/FlowFourRiddleOne",
                    element: (0, ve.jsx)(Zi, {}),
                  }),
                  (0, ve.jsx)(he, {
                    path: "/FlowFourRiddleTwo",
                    element: (0, ve.jsx)(Ji, {}),
                  }),
                  (0, ve.jsx)(he, {
                    path: "/FlowFourRiddleThree",
                    element: (0, ve.jsx)(Xi, {}),
                  }),
                  (0, ve.jsx)(he, {
                    path: "/FlowFourRiddleFour",
                    element: (0, ve.jsx)(Ki, {}),
                  }),
                  (0, ve.jsx)(he, {
                    path: "/FlowFourRiddleFive",
                    element: (0, ve.jsx)(Qi, {}),
                  }),
                  (0, ve.jsx)(he, {
                    path: "/FlowFourRiddleSix",
                    element: (0, ve.jsx)(Gi, {}),
                  }),
                  (0, ve.jsx)(he, {
                    path: "/FlowFiveRiddles",
                    element: (0, ve.jsx)(ll, {}),
                  }),
                  (0, ve.jsx)(he, {
                    path: "/FlowFiveRiddleOne",
                    element: (0, ve.jsx)(il, {}),
                  }),
                  (0, ve.jsx)(he, {
                    path: "/FlowFiveRiddleTwo",
                    element: (0, ve.jsx)(ol, {}),
                  }),
                  (0, ve.jsx)(he, {
                    path: "/FlowFiveRiddleThree",
                    element: (0, ve.jsx)(al, {}),
                  }),
                  (0, ve.jsx)(he, {
                    path: "/FlowFiveRiddleFour",
                    element: (0, ve.jsx)(rl, {}),
                  }),
                  (0, ve.jsx)(he, {
                    path: "/FlowFiveRiddleFive",
                    element: (0, ve.jsx)(nl, {}),
                  }),
                  (0, ve.jsx)(he, {
                    path: "/FlowFiveRiddleSix",
                    element: (0, ve.jsx)(tl, {}),
                  }),
                  (0, ve.jsx)(he, {
                    path: "/flowOne",
                    element: (0, ve.jsx)(aa, {}),
                  }),
                  (0, ve.jsx)(he, {
                    path: "/FlowTwo",
                    element: (0, ve.jsx)(oa, {}),
                  }),
                  (0, ve.jsx)(he, {
                    path: "/FlowThree",
                    element: (0, ve.jsx)(ia, {}),
                  }),
                  (0, ve.jsx)(he, {
                    path: "/FlowFour",
                    element: (0, ve.jsx)(la, {}),
                  }),
                ],
              }),
            }),
          });
      var cl = n(950),
        ul = n.t(cl, 2);
      new Set([
        "application/x-www-form-urlencoded",
        "multipart/form-data",
        "text/plain",
      ]);
      try {
        window.__reactRouterVersion = "6";
      } catch (hl) {}
      new Map();
      const dl = r.startTransition;
      ul.flushSync, r.useId;
      function fl(e) {
        let { basename: n, children: r, future: a, window: o } = e,
          i = t.useRef();
        var l;
        null == i.current &&
          (i.current =
            (void 0 === (l = { window: o, v5Compat: !0 }) && (l = {}),
            h(
              function (e, t) {
                let { pathname: n, search: r, hash: a } = e.location;
                return f(
                  "",
                  { pathname: n, search: r, hash: a },
                  (t.state && t.state.usr) || null,
                  (t.state && t.state.key) || "default"
                );
              },
              function (e, t) {
                return "string" === typeof t ? t : p(t);
              },
              null,
              l
            )));
        let s = i.current,
          [c, u] = t.useState({ action: s.action, location: s.location }),
          { v7_startTransition: d } = a || {},
          m = t.useCallback(
            (e) => {
              d && dl ? dl(() => u(e)) : u(e);
            },
            [u, d]
          );
        return (
          t.useLayoutEffect(() => s.listen(m), [s, m]),
          t.createElement(ge, {
            basename: n,
            children: r,
            location: c.location,
            navigationType: c.action,
            navigator: s,
            future: a,
          })
        );
      }
      "undefined" !== typeof window &&
        "undefined" !== typeof window.document &&
        window.document.createElement;
      var pl, ml;
      (function (e) {
        (e.UseScrollRestoration = "useScrollRestoration"),
          (e.UseSubmit = "useSubmit"),
          (e.UseSubmitFetcher = "useSubmitFetcher"),
          (e.UseFetcher = "useFetcher"),
          (e.useViewTransitionState = "useViewTransitionState");
      })(pl || (pl = {})),
        (function (e) {
          (e.UseFetcher = "useFetcher"),
            (e.UseFetchers = "useFetchers"),
            (e.UseScrollRestoration = "useScrollRestoration");
        })(ml || (ml = {}));
      a.createRoot(document.getElementById("root")).render(
        (0, ve.jsx)(t.StrictMode, {
          children: (0, ve.jsx)(fl, { children: (0, ve.jsx)(sl, {}) }),
        })
      ),
        o();
    })();
})();
//# sourceMappingURL=main.e9824c9b.js.map
