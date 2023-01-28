/* eslint-disable */

import { useEffect } from "react";
import { ReactComponent as Astronaut } from "../assets/astronaut.svg";

export default function AstronautComponent() {
    useEffect(() => {
        ! function (t, e) {
            "object" == typeof exports && "undefined" !=
                typeof module ? module.exports = e() : "function" == typeof define &&
                    define.amd ? define(e) : ((t = "undefined" != typeof globalThis ?
                        globalThis : t || self).__SVGATOR_PLAYER__ = t.__SVGATOR_PLAYER__ || {},
                        t.__SVGATOR_PLAYER__["91c80d77"] = e())
        }(this, (function () {
            "use strict"; function t(t, e) {
                var n = Object.keys(t); if
                    (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function (e) {
                        return
                        Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                } return n
            } function e(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var r = null != arguments[n] ? arguments[n] : {}; n % 2 ? t(Object(r),
                        !0).forEach((function (t) { u(e, t, r[t]) })) :
                        Object.getOwnPropertyDescriptors ? Object.defineProperties(e,
                            Object.getOwnPropertyDescriptors(r)) : t(Object(r)).forEach((function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            }))
                }
                return e
            } function n(t) {
                return (n = "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator ? function (t) { return typeof t } :
                    function (t) {
                        return t && "function" == typeof Symbol && t.constructor ===
                            Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    })(t)
            } function
                r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            } function i(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n]; r.enumerable = r.enumerable || !1, r.configurable = !0,
                        "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            function o(t, e, n) { return e && i(t.prototype, e), n && i(t, n), t }
            function u(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value:
                        n, enumerable: !0, configurable: !0, writable: !0
                }) : t[e] = n, t
            }
            function a(t) {
                return (a = Object.setPrototypeOf ? Object.getPrototypeOf
                    : function (t) { return t.__proto__ || Object.getPrototypeOf(t) })(t)
            }
            function l(t, e) {
                return (l = Object.setPrototypeOf || function (t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            } function s() {
                if ("undefined" ==
                    typeof Reflect || !Reflect.construct) return !1; if
                    (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return
                !0; try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,
                        [], (function () { }))), !0
                } catch (t) { return !1 }
            } function f(t, e, n) {
                return (f = s() ? Reflect.construct : function (t, e, n) {
                    var r =
                        [null]; r.push.apply(r, e); var i = new (Function.bind.apply(t, r)); return
                    n && l(i, n.prototype), i
                }).apply(null, arguments)
            } function c(t, e) {
                if (e && ("object" == typeof e || "function" == typeof e)) return e; if
                    (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return function (t) {
                        if (void 0 === t) throw new
                            ReferenceError("this hasn't been initialised - super() hasn't been called"); return t
                    }(t)
            } function h(t, e, n) {
                return (h = "undefined" !=
                    typeof Reflect && Reflect.get ? Reflect.get : function (t, e, n) {
                        var r =
                            function (t, e) {
                                for (; !Object.prototype.hasOwnProperty.call(t, e) &&
                                    null !== (t = a(t));); return t
                            }(t, e); if (r) {
                                var i =
                                    Object.getOwnPropertyDescriptor(r, e); return i.get ? i.get.call(n) :
                                        i.value
                            }
                    })(t, e, n || t)
            } function v(t) {
                return function (t) {
                    if
                        (Array.isArray(t)) return y(t)
                }(t) || function (t) {
                    if ("undefined" !=
                        typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"])
                        return Array.from(t)
                }(t) || function (t, e) {
                    if (!t) return; if ("string"
                        == typeof t) return y(t, e); var n =
                            Object.prototype.toString.call(t).slice(8, -1); "Object" === n &&
                                t.constructor && (n = t.constructor.name); if ("Map" === n || "Set" === n)
                        return Array.from(t); if ("Arguments" === n ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(t, e)
                }(t) ||
                    function () {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non - array objects must have a [Symbol.iterator]() method.")
                    }()
            } function y(t, e) {
                (null == e || e >
                    t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++)
                    r[n] = t[n]; return r
            } Number.isInteger || (Number.isInteger =
                function (t) {
                    return "number" == typeof t && isFinite(t) && Math.floor(t)
                        === t
                }), Number.EPSILON || (Number.EPSILON = 2220446049250313e-31); var d
                    = g(Math.pow(10, -6)); function g(t) {
                        var e = arguments.length > 1 &&
                            void 0 !== arguments[1] ? arguments[1] : 6; if (Number.isInteger(t))
                            return t; var n = Math.pow(10, e); return Math.round((+t + Number.EPSILON)
                                * n) / n
                    } function p(t, e) {
                        var n = arguments.length > 2 && void 0 !==
                            arguments[2] ? arguments[2] : d; return Math.abs(t - e) < n
                    } var m =
                        Math.PI / 180; function b(t) { return t } function w(t, e, n) {
                            var r = 1
                                - n; return 3 * n * r * (t * r + e * n) + n * n * n
                        } function k() {
                            var t
                                = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e =
                                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n =
                                    arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, r =
                                    arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1; return
                            t < 0 || t > 1 || n < 0 || n > 1 ? null : p(t, e) && p(n, r) ? b :
                                function (i) {
                                    if (i <= 0) return t > 0 ? i * e / t : 0 === e && n > 0 ? i
                                        * r / n : 0; if (i >= 1) return n < 1 ? 1 + (i - 1) * (r - 1) / (n - 1) :
                                            1 === n && t < 1 ? 1 + (i - 1) * (e - 1) / (t - 1) : 1; for (var o, u = 0,
                                                a = 1; u < a;) {
                                        var l = w(t, n, o = (u + a) / 2); if (p(i, l)) break; l <
                                            i ? u = o : a = o
                                    } return w(e, r, o)
                                }
                        } function x() { return 1 }
            function A(t) { return 1 === t ? 1 : 0 } function _() {
                var t =
                    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, e =
                        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0; if (1
                            === t) { if (0 === e) return A; if (1 === e) return x } var n = 1 / t;
                return function (t) { return t >= 1 ? 1 : (t += e * n) - t % n }
            } var O =
                Math.sin, S = Math.cos, E = Math.acos, P = Math.asin, M = Math.tan, j =
                    Math.atan2, B = Math.PI / 180, T = 180 / Math.PI, I = Math.sqrt, R =
                    function () {
                        function t() {
                            var e = arguments.length > 0 && void 0 !==
                                arguments[0] ? arguments[0] : 1, n = arguments.length > 1 && void 0 !==
                                    arguments[1] ? arguments[1] : 0, i = arguments.length > 2 && void 0 !==
                                        arguments[2] ? arguments[2] : 0, o = arguments.length > 3 && void 0 !==
                                            arguments[3] ? arguments[3] : 1, u = arguments.length > 4 && void 0 !==
                                                arguments[4] ? arguments[4] : 0, a = arguments.length > 5 && void 0 !==
                                                    arguments[5] ? arguments[5] : 0; r(this, t), this.m = [e, n, i, o, u, a],
                                                        this.i = null, this.w = null, this.s = null
                        } return o(t, [{
                            key:
                                "determinant", get: function () {
                                    var t = this.m; return t[0] * t[3] - t[1]
                                        * t[2]
                                }
                        }, {
                            key: "isIdentity", get: function () {
                                if (null === this.i) {
                                    var t = this.m; this.i = 1 === t[0] && 0 === t[1] && 0 === t[2] && 1 ===
                                        t[3] && 0 === t[4] && 0 === t[5]
                                } return this.i
                            }
                        }, {
                            key: "point",
                            value: function (t, e) {
                                var n = this.m; return {
                                    x: n[0] * t + n[2] * e +
                                        n[4], y: n[1] * t + n[3] * e + n[5]
                                }
                            }
                        }, {
                            key: "translateSelf", value:
                                function () {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ?
                                        arguments[0] : 0, e = arguments.length > 1 && void 0 !== arguments[1] ?
                                            arguments[1] : 0; if (!t && !e) return this; var n = this.m; return n[4]
                                                += n[0] * t + n[2] * e, n[5] += n[1] * t + n[3] * e, this.w = this.s =
                                                this.i = null, this
                                }
                        }, {
                            key: "rotateSelf", value: function () {
                                var t =
                                    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0; if (t
                                        %= 360) {
                                    var e = O(t *= B), n = S(t), r = this.m, i = r[0], o = r[1];
                                    r[0] = i * n + r[2] * e, r[1] = o * n + r[3] * e, r[2] = r[2] * n - i * e,
                                        r[3] = r[3] * n - o * e, this.w = this.s = this.i = null
                                } return this
                            }
                        }, {
                            key: "scaleSelf", value: function () {
                                var t = arguments.length > 0 &&
                                    void 0 !== arguments[0] ? arguments[0] : 1, e = arguments.length > 1 &&
                                        void 0 !== arguments[1] ? arguments[1] : 1; if (1 !== t || 1 !== e) {
                                            var
                                                n = this.m; n[0] *= t, n[1] *= t, n[2] *= e, n[3] *= e, this.w = this.s =
                                                    this.i = null
                                        } return this
                            }
                        }, {
                            key: "skewSelf", value: function (t, e) {
                                if (e %= 360, (t %= 360) || e) {
                                    var n = this.m, r = n[0], i = n[1], o =
                                        n[2], u = n[3]; t && (t = M(t * B), n[2] += r * t, n[3] += i * t), e && (e
                                            = M(e * B), n[0] += o * e, n[1] += u * e), this.w = this.s = this.i = null
                                } return this
                            }
                        }, {
                            key: "resetSelf", value: function () {
                                var t =
                                    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, e =
                                        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n =
                                        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, r =
                                        arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, i =
                                        arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0, o =
                                        arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0, u =
                                        this.m; return u[0] = t, u[1] = e, u[2] = n, u[3] = r, u[4] = i, u[5] = o,
                                            this.w = this.s = this.i = null, this
                            }
                        }, {
                            key: "recomposeSelf", value:
                                function () {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ?
                                        arguments[0] : null, e = arguments.length > 1 && void 0 !== arguments[1] ?
                                            arguments[1] : null, n = arguments.length > 2 && void 0 !== arguments[2] ?
                                                arguments[2] : null, r = arguments.length > 3 && void 0 !== arguments[3] ?
                                                    arguments[3] : null, i = arguments.length > 4 && void 0 !== arguments[4] ?
                                                        arguments[4] : null; return this.isIdentity || this.resetSelf(), t && (t.x
                                                            || t.y) && this.translateSelf(t.x, t.y), e && this.rotateSelf(e), n &&
                                                            (n.x && this.skewSelf(n.x, 0), n.y && this.skewSelf(0, n.y)), !r || 1 ===
                                                            r.x && 1 === r.y || this.scaleSelf(r.x, r.y), i && (i.x || i.y) &&
                                                            this.translateSelf(i.x, i.y), this
                                }
                        }, {
                            key: "decompose", value:
                                function () {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ?
                                        arguments[0] : 0, e = arguments.length > 1 && void 0 !== arguments[1] ?
                                            arguments[1] : 0, n = this.m, r = n[0] * n[0] + n[1] * n[1], i = [[n[0],
                                            n[1]], [n[2], n[3]]], o = I(r); if (0 === o) return {
                                                origin: {
                                                    x:
                                                        g(n[4]), y: g(n[5])
                                                }, translate: { x: g(t), y: g(e) }, scale: {
                                                    x: 0, y:
                                                        0
                                                }, skew: { x: 0, y: 0 }, rotate: 0
                                            }; i[0][0] /= o, i[0][1] /= o; var u
                                                = n[0] * n[3] - n[1] * n[2] < 0; u && (o = -o); var a = i[0][0] * i[1][0]
                                                    + i[0][1] * i[1][1]; i[1][0] -= i[0][0] * a, i[1][1] -= i[0][1] * a; var l
                                                        = I(i[1][0] * i[1][0] + i[1][1] * i[1][1]); if (0 === l) return {
                                                            origin:
                                                                { x: g(n[4]), y: g(n[5]) }, translate: { x: g(t), y: g(e) }, scale: {
                                                                    x:
                                                                        g(o), y: 0
                                                                }, skew: { x: 0, y: 0 }, rotate: 0
                                                        }; i[1][0] /= l, i[1][1] /=
                                                            l, a /= l; var s = 0; return i[1][1] < 0 ? (s = E(i[1][1]) * T, i[0][1] <
                                                                0 && (s = 360 - s)) : s = P(i[0][1]) * T, u && (s = -s), a = j(a,
                                                                    I(i[0][0] * i[0][0] + i[0][1] * i[0][1])) * T, u && (a = -a), {
                                                                origin: {
                                                                    x: g(n[4]), y: g(n[5])
                                                                }, translate: { x: g(t), y: g(e) }, scale: {
                                                                    x:
                                                                        g(o), y: g(l)
                                                                }, skew: { x: g(a), y: 0 }, rotate: g(s)
                                                            }
                                }
                        }, {
                            key:
                                "clone", value: function () {
                                    var t = this.m; return new
                                        this.constructor(t[0], t[1], t[2], t[3], t[4], t[5])
                                }
                        }, {
                            key:
                                "toString", value: function () {
                                    var t = arguments.length > 0 && void 0 !==
                                        arguments[0] ? arguments[0] : " "; if (null === this.s) {
                                            var e =
                                                this.m.map((function (t) { return g(t) })); 1 === e[0] && 0 === e[1] && 0
                                                    === e[2] && 1 === e[3] ? this.s = "translate(" + e[4] + t + e[5] + ")" :
                                                    this.s = "matrix(" + e.join(t) + ")"
                                        } return this.s
                                }
                        }], [{
                            key:
                                "create", value: function (t) {
                                    return t ? Array.isArray(t) ? f(this, v(t))
                                        : t instanceof this ? t.clone() : (new this).recomposeSelf(t.origin,
                                            t.rotate, t.skew, t.scale, t.translate) : new this
                                }
                        }]), t
                    }(); function
                N(t, e, n) { return t >= .5 ? n : e } function F(t, e, n) {
                    return 0 === t
                        || e === n ? e : t * (n - e) + e
                } function C(t, e, n) {
                    var r = F(t, e,
                        n); return r <= 0 ? 0 : r
                } function L(t, e, n) {
                    var r = F(t, e, n);
                    return r <= 0 ? 0 : r >= 1 ? 1 : r
                } function D(t, e, n) {
                    return 0 === t
                        ? e : 1 === t ? n : { x: F(t, e.x, n.x), y: F(t, e.y, n.y) }
                } function
                q(t, e, n) {
                return 0 === t ? e : 1 === t ? n : {
                    x: C(t, e.x, n.x), y:
                        C(t, e.y, n.y)
                }
            } function V(t, e, n) {
                var r = function (t, e, n) {
                    return Math.round(F(t, e, n))
                }(t, e, n); return r <= 0 ? 0 : r >= 255 ?
                    255 : r
            } function z(t, e, n) {
                return 0 === t ? e : 1 === t ? n : {
                    r:
                        V(t, e.r, n.r), g: V(t, e.g, n.g), b: V(t, e.b, n.b), a: F(t, null == e.a
                            ? 1 : e.a, null == n.a ? 1 : n.a)
                }
            } function Y(t, e, n) {
                var r =
                    e.length; if (r !== n.length) return N(t, e, n); for (var i = new
                        Array(r), o = 0; o < r; o++) i[o] = F(t, e[o], n[o]); return i
            } function
                G(t, e) { for (var n = [], r = 0; r < t; r++) n.push(e); return n }
            function U(t, e) {
                if (--e <= 0) return t; var n = (t = Object.assign([],
                    t)).length; do { for (var r = 0; r < n; r++) t.push(t[r]) } while (--e >
                        0); return t
            } var $, W = function () {
                function t(e) {
                    r(this, t),
                        this.list = e, this.length = e.length
                } return o(t, [{
                    key:
                        "setAttribute", value: function (t, e) {
                            for (var n = this.list, r = 0; r <
                                this.length; r++) n[r].setAttribute(t, e)
                        }
                }, {
                    key: "removeAttribute",
                    value: function (t) {
                        for (var e = this.list, n = 0; n < this.length; n++)
                            e[n].removeAttribute(t)
                    }
                }, {
                    key: "style", value: function (t, e) {
                        for
                            (var n = this.list, r = 0; r < this.length; r++) n[r].style[t] = e
                    }
                }]),
                    t
            }(), H = /-./g, Q = function (t, e) { return e.toUpperCase() }; function
                X(t) { return "function" == typeof t ? t : N } function J(t) {
                    return t ?
                        "function" == typeof t ? t : Array.isArray(t) ? function (t) {
                            var e =
                                arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b; if
                                (!Array.isArray(t)) return e; switch (t.length) {
                                    case 1: return _(t[0])
                                        || e; case 2: return _(t[0], t[1]) || e; case 4: return k(t[0], t[1],
                                            t[2], t[3]) || e
                                } return e
                        }(t, null) : function (t, e) {
                            var n =
                                arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : b; switch
                            (t) {
                                case "linear": return b; case "steps": return _(e.steps || 1, e.jump
                                    || 0) || n; case "bezier": case "cubic-bezier": return k(e.x1 || 0, e.y1
                                        || 0, e.x2 || 0, e.y2 || 0) || n
                            } return n
                        }(t.type, t.value, null) :
                        null
                } function K(t, e, n) {
                    var r = arguments.length > 3 && void 0 !==
                        arguments[3] && arguments[3], i = e.length - 1; if (t <= e[0].t) return r
                            ? [0, 0, e[0].v] : e[0].v; if (t >= e[i].t) return r ? [i, 1, e[i].v] :
                                e[i].v; var o, u = e[0], a = null; for (o = 1; o <= i; o++) {
                                    if (!(t >
                                        e[o].t)) { a = e[o]; break } u = e[o]
                                } return null == a ? r ? [i, 1,
                                    e[i].v] : e[i].v : u.t === a.t ? r ? [o, 1, a.v] : a.v : (t = (t - u.t) /
                                        (a.t - u.t), u.e && (t = u.e(t)), r ? [o, t, n(t, u.v, a.v)] : n(t, u.v,
                                            a.v))
                } function Z(t, e) {
                    var n = arguments.length > 2 && void 0 !==
                        arguments[2] ? arguments[2] : null; return t && t.length ? "function" !=
                            typeof e ? null : ("function" != typeof n && (n = null), function (r) {
                                var
                                    i = K(r, t, e); return null != i && n && (i = n(i)), i
                            }) : null
                }
            function tt(t, e) { return t.t - e.t } function et(t, e, r, i, o) {
                var u,
                    a = "@" === r[0], l = "#" === r[0], s = $[r], f = N; switch (a ? (u =
                        r.substr(1), r = u.replace(H, Q)) : l && (r = r.substr(1)), n(s)) {
                    case
                        "function": if (f = s(i, o, K, J, r, a, e, t), l) return f; break; case
                        "string": f = Z(i, X(s)); break; case "object": if ((f = Z(i, X(s.i),
                            s.f)) && "function" == typeof s.u) return s.u(e, f, r, a, t)
                } return f ?
                    function (t, e, n) {
                        if (arguments.length > 3 && void 0 !== arguments[3] &&
                            arguments[3]) return t instanceof W ? function (r) {
                                return t.style(e,
                                    n(r))
                            } : function (r) { return t.style[e] = n(r) }; if (Array.isArray(e)) {
                                var r = e.length; return function (i) {
                                    var o = n(i); if (null == o) for
                                        (var u = 0; u < r; u++) t[u].removeAttribute(e); else for (var a = 0; a <
                                            r; a++) t[a].setAttribute(e, o)
                                }
                            } return function (r) {
                                var i = n(r);
                                null == i ? t.removeAttribute(e) : t.setAttribute(e, i)
                            }
                    }(e, r, f, a) :
                    null
            } function nt(t, e, r, i) {
                if (!i || "object" !== n(i)) return null;
                var o = null, u = null; return Array.isArray(i) ? u = function (t) {
                    if (!t
                        || !t.length) return null; for (var e = 0; e < t.length; e++) t[e].e &&
                            (t[e].e = J(t[e].e)); return t.sort(tt)
                }(i) : (u = i.keys, o = i.data ||
                    null), u ? et(t, e, r, u, o) : null
            } function rt(t, e, n) {
                if (!n)
                    return null; var r = []; for (var i in n) if (n.hasOwnProperty(i)) {
                        var o
                            = nt(t, e, i, n[i]); o && r.push(o)
                    } return r.length ? r : null
            }
            function it(t, e) {
                if (!e.duration || e.duration < 0) return null; var n
                    = function (t, e) {
                        if (!e) return null; var n = []; if (Array.isArray(e))
                            for (var r = e.length, i = 0; i < r; i++) {
                                var o = e[i]; if (2 ===
                                    o.length) {
                                    var u = null; if ("string" == typeof o[0]) u =
                                        t.getElementById(o[0]); else if (Array.isArray(o[0])) {
                                            u = []; for (var a
                                                = 0; a < o[0].length; a++) if ("string" == typeof o[0][a]) {
                                                    var l =
                                                        t.getElementById(o[0][a]); l && u.push(l)
                                                } u = u.length ? 1 === u.length
                                                    ? u[0] : new W(u) : null
                                        } if (u) {
                                            var s = rt(t, u, o[1]); s && (n =
                                                n.concat(s))
                                        }
                                }
                            } else for (var f in e) if (e.hasOwnProperty(f)) {
                                var c
                                    = t.getElementById(f); if (c) {
                                        var h = rt(t, c, e[f]); h && (n =
                                            n.concat(h))
                                    }
                            } return n.length ? n : null
                    }(t, e.elements); return n ?
                        function (t, e) {
                            var n = arguments.length > 2 && void 0 !== arguments[2] ?
                                arguments[2] : 1 / 0, r = arguments.length > 3 && void 0 !== arguments[3]
                                    ? arguments[3] : 1, i = arguments.length > 4 && void 0 !== arguments[4] &&
                                        arguments[4], o = arguments.length > 5 && void 0 !== arguments[5] ?
                                            arguments[5] : 1, u = t.length, a = r > 0 ? e : 0; i && n % 2 == 0 && (a =
                                                e - a); var l = null; return function (s, f) {
                                                    var c = s % e, h = 1 + (s -
                                                        c) / e; f *= r, i && h % 2 == 0 && (f = -f); var v = !1; if (h > n) c = a,
                                                            v = !0, -1 === o && (c = r > 0 ? 0 : e); else if (f < 0 && (c = e - c), c
                                                                === l) return !1; l = c; for (var y = 0; y < u; y++) t[y](c); return v
                                                }
                        }(n, e.duration, e.iterations || 1 / 0, e.direction || 1, !!e.alternate,
                            e.fill || 1) : null
            } function ot(t) {
                return +("0x" +
                    (t.replace(/[^0-9a-fA-F]+/g, "") || 27))
            } function ut(t, e, n) {
                return
                !t || !n || e > t.length ? t : t.substring(0, e) + ut(t.substring(e + 1),
                    n, n)
            } function at(t) {
                var e = arguments.length > 1 && void 0 !==
                    arguments[1] ? arguments[1] : 27; return !t || t % e ? t % e : at(t / e,
                        e)
            } function lt(t, e, n) {
                if (t && t.length) {
                    var r = ot(n), i = ot(e),
                        o = at(r) + 5, u = ut(t, at(r, 5), o); return u = u.replace(/\x7c$/g,
                            "==").replace(/\x2f$/g, "="), u = function (t, e, n) {
                                var r = +("0x" +
                                    t.substring(0, 4)); t = t.substring(4); for (var i = e % r + n % 27, o =
                                        [], u = 0; u < t.length; u += 2) if ("|" !== t[u]) {
                                            var a = +("0x" + t[u]
                                                + t[u + 1]) - i; o.push(a)
                                        } else {
                                        var l = +("0x" + t.substring(u + 1, u
                                            + 1 + 4)) - i; u += 3, o.push(l)
                                    } return
                                String.fromCharCode.apply(String, o)
                            }(u = (u =
                                atob(u)).replace(/[\x41-\x5A]/g, ""), i, r), u = JSON.parse(u)
                }
            } var st
                = function () {
                    function t(e, n) {
                        var i = arguments.length > 2 && void 0
                            !== arguments[2] ? arguments[2] : {}; r(this, t), this._id = 0,
                                this._running = !1, this._rollingBack = !1, this._animations = e,
                                this.duration = n.duration, this.alternate = n.alternate, this.fill =
                                n.fill, this.iterations = n.iterations, this.direction = i.direction || 1,
                                this.speed = i.speed || 1, this.fps = i.fps || 12, this.offset = i.offset
                                || 0, this.rollbackStartOffset = 0
                    } return o(t, [{
                        key:
                            "maxFiniteDuration", get: function () {
                                return this.iterations > 0 ?
                                    this.iterations * this.duration : this.duration
                            }
                    }, {
                        key: "_apply",
                        value: function (t) {
                            for (var e = arguments.length > 1 && void 0 !==
                                arguments[1] ? arguments[1] : {}, n = this._animations, r = n.length, i =
                                    0, o = 0; o < r; o++) e[o] ? i++ : (e[o] = n[o](t, this.direction), e[o]
                                        && i++); return i
                        }
                    }, {
                        key: "_rollback", value: function () {
                            var t =
                                this, e = 1 / 0, n = null; this.rollbackStartOffset = this.offset,
                                    this._rollingBack = !0, this._running = !0; this._id =
                                        window.requestAnimationFrame((function r(i) {
                                            if (t._rollingBack) {
                                                null
                                                    == n && (n = i); var o = i - n, u = t.rollbackStartOffset - o, a =
                                                        Math.round(u * t.speed); if (a > t.duration && e !== 1 / 0) {
                                                            var l =
                                                                !!t.alternate && a / t.duration % 2 > 1, s = a % t.duration; a = (s += l ?
                                                                    t.duration : 0) || t.duration
                                                        } var f = t.fps ? 1e3 / t.fps : 0, c =
                                                            Math.max(0, a); c < e - f && (t.offset = c, e = c, t._apply(c)); var h =
                                                                t.iterations > 0 && -1 === t.fill && a >= t.maxFiniteDuration; (a <= 0 ||
                                                                    t.offset < a || h) && t.stop(), t._id = window.requestAnimationFrame(r)
                                            }
                                        }))
                        }
                    }, {
                        key: "_start", value: function () {
                            var t = this, e =
                                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, n = -1
                                    / 0, r = null, i = {}; this._running = !0; var o = function o(u) {
                                        null ==
                                            r && (r = u); var a = Math.round((u - r + e) * t.speed), l = t.fps ? 1e3 /
                                                t.fps : 0; if (a > n + l && !t._rollingBack && (t.offset = a, n = a,
                                                    t._apply(a, i) === t._animations.length)) return void t.pause(!0); t._id =
                                                        window.requestAnimationFrame(o)
                                    }; this._id =
                                        window.requestAnimationFrame(o)
                        }
                    }, {
                        key: "_pause", value: function () {
                            this._id && window.cancelAnimationFrame(this._id), this._running = !1
                        }
                    },
                    {
                        key: "play", value: function () {
                            if (!this._running) return
                            this._rollingBack ? this._rollback() : this._start(this.offset)
                        }
                    }, {
                        key: "stop", value: function () {
                            this._pause(), this.offset = 0,
                                this.rollbackStartOffset = 0, this._rollingBack = !1, this._apply(0)
                        }
                    },
                    {
                        key: "reachedToEnd", value: function () {
                            return this.iterations > 0 &&
                                this.offset >= this.iterations * this.duration
                        }
                    }, {
                        key: "restart",
                        value: function () {
                            var t = arguments.length > 0 && void 0 !==
                                arguments[0] && arguments[0]; this.stop(t), this.play(t)
                        }
                    }, {
                        key:
                            "pause", value: function () { this._pause() }
                    }, {
                        key: "reverse", value:
                            function () { this.direction = -this.direction }
                    }], [{
                        key: "build",
                        value: function (t, n) {
                            return delete t.animationSettings, t.options =
                                lt(t.options, t.root, "91c80d77"), t.animations.map((function (n) {
                                    var r =
                                        lt(n.s, t.root, "91c80d77"); for (var i in delete n.s, t.animationSettings
                                            || (t.animationSettings = e({}, r)), r) r.hasOwnProperty(i) && (n[i] =
                                                r[i])
                                })), (t = function (t, e) {
                                    if ($ = e, !t || !t.root ||
                                        !Array.isArray(t.animations)) return null; for (var n =
                                            document.getElementsByTagName("svg"), r = !1, i = 0; i < n.length; i++) if
                                            (n[i].id === t.root && !n[i].svgatorAnimation) {
                                            (r =
                                                n[i]).svgatorAnimation = !0; break
                                        } if (!r) return null; var o =
                                            t.animations.map((function (t) { return it(r, t) })).filter((function (t) {
                                                return !!t
                                            })); return o.length ? {
                                                element: r, animations: o,
                                                animationSettings: t.animationSettings, options: t.options || void 0
                                            } :
                                                null
                                }(t, n)) ? {
                                    el: t.element, options: t.options || {}, player: new
                                        this(t.animations, t.animationSettings, t.options)
                                } : null
                        }
                    }, {
                        key:
                            "push", value: function (t) { return this.build(t) }
                    }, {
                        key: "init",
                        value: function () {
                            var t = this, e = window.__SVGATOR_PLAYER__ &&
                                window.__SVGATOR_PLAYER__["91c80d77"]; Array.isArray(e) &&
                                    e.splice(0).forEach((function (e) { return t.build(e) }))
                        }
                    }]), t
                }(); !
                    function () {
                        for (var t = 0, e = ["ms", "moz", "webkit", "o"], n = 0; n <
                            e.length && !window.requestAnimationFrame; ++n)
                            window.requestAnimationFrame = window[e[n] + "RequestAnimationFrame"],
                                window.cancelAnimationFrame = window[e[n] + "CancelAnimationFrame"] ||
                                window[e[n] + "CancelRequestAnimationFrame"]; window.requestAnimationFrame
                                    || (window.requestAnimationFrame = function (e) {
                                        var n = Date.now(), r =
                                            Math.max(0, 16 - (n - t)), i = window.setTimeout((function () {
                                                e(n + r)
                                            }), r); return t = n + r, i
                                    }, window.cancelAnimationFrame =
                                        window.clearTimeout)
                    }(); var ft = function (t, e) {
                        var n = !1, r = null;
                        return function (i) {
                            n && clearTimeout(n), n = setTimeout((function () {
                                return function () {
                                    for (var i = 0, o = window.innerHeight, u = 0, a =
                                        window.innerWidth, l = t.parentNode; l instanceof Element;) {
                                        var s =
                                            window.getComputedStyle(l); if ("visible" !== s.overflowY || "visible" !==
                                                s.overflowX) {
                                            var f = l.getBoundingClientRect(); "visible" !==
                                                s.overflowY && (i = Math.max(i, f.top), o = Math.min(o, f.bottom)),
                                                "visible" !== s.overflowX && (u = Math.max(u, f.left), a = Math.min(a,
                                                    f.right))
                                        } if (l === l.parentNode) break; l = l.parentNode
                                    } n = !1; var
                                        c = t.getBoundingClientRect(), h = Math.min(c.height, Math.max(0, i -
                                            c.top)), v = Math.min(c.height, Math.max(0, c.bottom - o)), y =
                                            Math.min(c.width, Math.max(0, u - c.left)), d = Math.min(c.width,
                                                Math.max(0, c.right - a)), g = (c.height - h - v) / c.height, p = (c.width
                                                    - y - d) / c.width, m = Math.round(g * p * 100); null !== r && r === m ||
                                                        (r = m, e(m))
                                }()
                            }), 100)
                        }
                    }, ct = function () {
                        function t(e, n, i) {
                            r(this, t), n = Math.max(1, n || 1), n = Math.min(n, 100), this.el = e,
                                this._handlers = [], this.onThresholdChange = i && i.call ? i : function () { }, this.thresholdPercent = n || 1, this.currentVisibility = null,
                                this.visibilityCalculator = ft(e, this.onVisibilityUpdate.bind(this)),
                                this.bindScrollWatchers(), this.visibilityCalculator()
                        } return o(t, [{
                            key: "bindScrollWatchers", value: function () {
                                for (var t =
                                    this.el.parentNode; t && (this._handlers.push({
                                        element: t, event:
                                            "scroll", handler: this.visibilityCalculator
                                    }),
                                        t.addEventListener("scroll", this.visibilityCalculator), t !==
                                        t.parentNode && t !== document);) t = t.parentNode
                            }
                        }, {
                            key:
                                "onVisibilityUpdate", value: function (t) {
                                    var e = this.currentVisibility
                                        >= this.thresholdPercent, n = t >= this.thresholdPercent; if (null ===
                                            this.currentVisibility || e !== n) return this.currentVisibility = t, void
                                                this.onThresholdChange(n); this.currentVisibility = t
                                }
                        }, {
                            key:
                                "destruct", value: function () {
                                    this._handlers.forEach((function (t) {
                                        t.element.removeEventListener(t.event, t.handler)
                                    }))
                                }
                        }]), t
                    }();
            function ht(t) { return g(t) + "" } function vt(t) {
                var e =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " ";
                return t && t.length ? t.map(ht).join(e) : ""
            } function yt(t) {
                return
                ht(t.x) + "," + ht(t.y)
            } function dt(t) {
                if (!t) return "transparent";
                if (null == t.a || t.a >= 1) {
                    var e = function (t) {
                        return 1 === (t =
                            parseInt(t).toString(16)).length ? "0" + t : t
                    }, n = function (t) {
                        return
                        t.charAt(0) === t.charAt(1)
                    }, r = e(t.r), i = e(t.g), o = e(t.b); return
                    n(r) && n(i) && n(o) && (r = r.charAt(0), i = i.charAt(0), o =
                        o.charAt(0)), "#" + r + i + o
                } return "rgba(" + t.r + "," + t.g + "," +
                    t.b + "," + t.a + ")"
            } function gt(t) {
                return t ? "url(#" + t + ")" :
                    "none"
            } var pt = {
                f: null, i: q, u: function (t, e) {
                    return function (n) {
                        var r = e(n); t.setAttribute("rx", ht(r.x)), t.setAttribute("ry",
                            ht(r.y))
                    }
                }
            }, mt = {
                f: null, i: function (t, e, n) {
                    return 0 === t ? e
                        : 1 === t ? n : {
                            width: C(t, e.width, n.width), height: C(t, e.height,
                                n.height)
                        }
                }, u: function (t, e) {
                    return function (n) {
                        var r = e(n);
                        t.setAttribute("width", ht(r.width)), t.setAttribute("height",
                            ht(r.height))
                    }
                }
            }; Object.freeze({
                M: 2, L: 2, Z: 0, H: 1, V: 1, C: 6,
                Q: 4, T: 2, S: 4, A: 7
            }); var bt = {}, wt = null; function kt(t) {
                var e
                    = function () {
                        if (wt) return wt; if ("object" !== ("undefined" == typeof
                            document ? "undefined" : n(document)) || !document.createElementNS) return
                        { }; var t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                        return t && t.style ? (t.style.position = "absolute", t.style.opacity =
                            "0.01", t.style.zIndex = "-9999", t.style.left = "-9999px", t.style.width
                            = "1px", t.style.height = "1px", wt = { svg: t }) : {}
                    }().svg; if (!e)
                    return function (t) { return null }; var r =
                        document.createElementNS(e.namespaceURI, "path"); r.setAttributeNS(null,
                            "d", t), r.setAttributeNS(null, "fill", "none"), r.setAttributeNS(null,
                                "stroke", "none"), e.appendChild(r); var i = r.getTotalLength(); return function (t) {
                                    var e = r.getPointAtLength(i * t); return { x: e.x, y: e.y }
                                }
            } function xt(t) { return bt[t] ? bt[t] : bt[t] = kt(t) } function At(t,
                e, n, r) {
                if (!t || !r) return !1; var i = ["M", t.x, t.y]; if (e && n &&
                    (i.push("C"), i.push(e.x), i.push(e.y), i.push(n.x), i.push(n.y)), e ? !n
                        : n) { var o = e || n; i.push("Q"), i.push(o.x), i.push(o.y) } return e ||
                            n || i.push("L"), i.push(r.x), i.push(r.y), i.join(" ")
            } function _t(t,
                e, n, r) {
                var i = arguments.length > 4 && void 0 !== arguments[4] ?
                    arguments[4] : 1, o = At(t, e, n, r), u = xt(o); try { return u(i) } catch
                    (t) { return null }
            } function Ot(t, e, n) { return t + (e - t) * n }
            function St(t, e, n) {
                var r = arguments.length > 3 && void 0 !==
                    arguments[3] && arguments[3], i = {
                        x: Ot(t.x, e.x, n), y: Ot(t.y, e.y, n)
                    }; return r && (i.a = Et(t, e)), i
            } function Et(t, e) {
                return
                Math.atan2(e.y - t.y, e.x - t.x)
            } function Pt(t, e, n, r) {
                var i = 1 -
                    r; return i * i * t + 2 * i * r * e + r * r * n
            } function Mt(t, e, n, r) { return 2 * (1 - r) * (e - t) + 2 * r * (n - e) } function jt(t, e, n, r) {
                var i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                    o = _t(t, e, null, n, r); return o || (o = {
                        x: Pt(t.x, e.x, n.x, r), y:
                            Pt(t.y, e.y, n.y, r)
                    }), i && (o.a = Bt(t, e, n, r)), o
            } function Bt(t,
                e, n, r) { return Math.atan2(Mt(t.y, e.y, n.y, r), Mt(t.x, e.x, n.x, r)) }
            function Tt(t, e, n, r, i) {
                var o = i * i; return i * o * (r - t + 3 * (e
                    - n)) + 3 * o * (t + n - 2 * e) + 3 * i * (e - t) + t
            } function It(t, e,
                n, r, i) {
                var o = 1 - i; return 3 * (o * o * (e - t) + 2 * o * i * (n -
                    e) + i * i * (r - n))
            } function Rt(t, e, n, r, i) {
                var o =
                    arguments.length > 5 && void 0 !== arguments[5] && arguments[5], u = _t(t,
                        e, n, r, i); return u || (u = {
                            x: Tt(t.x, e.x, n.x, r.x, i), y: Tt(t.y,
                                e.y, n.y, r.y, i)
                        }), o && (u.a = Nt(t, e, n, r, i)), u
            } function Nt(t,
                e, n, r, i) {
                return Math.atan2(It(t.y, e.y, n.y, r.y, i), It(t.x, e.x,
                    n.x, r.x, i))
            } function Ft(t, e, n) {
                var r = arguments.length > 3 &&
                    void 0 !== arguments[3] && arguments[3]; if (Lt(e)) {
                        if (Dt(n)) return
                        jt(e, n.start, n, t, r)
                    } else if (Lt(n)) {
                        if (e.end) return jt(e, e.end,
                            n, t, r)
                    } else {
                    if (e.end) return n.start ? Rt(e, e.end, n.start, n, t,
                        r) : jt(e, e.end, n, t, r); if (n.start) return jt(e, n.start, n, t, r)
                }
                return St(e, n, t, r)
            } function Ct(t, e, n) {
                var r = Ft(t, e, n, !0);
                return r.a = function (t) {
                    return arguments.length > 1 && void 0 !==
                        arguments[1] && arguments[1] ? t + Math.PI : t
                }(r.a) / m, r
            } function
                Lt(t) { return !t.type || "corner" === t.type } function Dt(t) {
                    return
                    null != t.start && !Lt(t)
                } var qt = new R; var Vt = {
                    f: function (t) {
                        return t ? t.join(" ") : ""
                    }, i: function (t, e, r) {
                        if (0 === t) return
                        e; if (1 === t) return r; var i = e.length; if (i !== r.length) return
                        N(t, e, r); for (var o, u = new Array(i), a = 0; a < i; a++) {
                            if ((o =
                                n(e[a])) !== n(r[a])) return N(t, e, r); if ("number" === o) u[a] = F(t,
                                    e[a], r[a]); else { if (e[a] !== r[a]) return N(t, e, r); u[a] = e[a] }
                        }
                        return u
                    }
                }, zt = {
                    f: null, i: Y, u: function (t, e) {
                        return function (n) {
                            var r = e(n); t.setAttribute("x1", ht(r[0])), t.setAttribute("y1",
                                ht(r[1])), t.setAttribute("x2", ht(r[2])), t.setAttribute("y2", ht(r[3]))
                        }
                    }
                }, Yt = { f: ht, i: F }, Gt = { f: ht, i: L }, Ut = {
                    f: function (t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""; return t && t.length > 0 && (t = t.map((function (t) {
                            return g(t, 4)
                        }))), vt(t, e)
                    }, i: function (t, e, n) {
                        var r, i, o, u = e.length, a =
                            n.length; if (u !== a) if (0 === u) e = G(u = a, 0); else if (0 === a) a =
                                u, n = G(u, 0); else {
                                var l = (o = (r = u) * (i = a) / function (t, e) {
                                    for (var n; e;) n = e, e = t % e, t = n; return t || 1
                                }(r, i)) < 0 ? -o :
                                    o; e = U(e, Math.floor(l / u)), n = U(n, Math.floor(l / a)), u = a = l
                            }
                        for (var s = [], f = 0; f < u; f++) s.push(g(C(t, e[f], n[f]))); return s
                    }
                }; function $t(t, e, n) {
                    return t.map((function (t) {
                        return function (t,
                            e, n) {
                            var r = t.v; if (!r || "g" !== r.t || r.s || !r.v || !r.r) return
                            t; var i = n.getElementById(r.r), o = i && i.querySelectorAll("stop") ||
                                []; return r.s = r.v.map((function (t, e) {
                                    var n = o[e] &&
                                        o[e].getAttribute("offset"); return { c: t, o: n = g(parseInt(n) / 100) }
                                })), delete r.v, t
                        }(t, 0, n)
                    }))
                } var Wt = {
                    gt: "gradientTransform", c:
                        { x: "cx", y: "cy" }, rd: "r", f: { x: "x1", y: "y1" }, to: {
                            x: "x2", y:
                                "y2"
                        }
                }; function Ht(t, e, r, i, o, u, a, l) {
                    return $t(t, 0, l), e =
                        function (t, e, n) {
                            for (var r, i, o, u = t.length - 1, a = {}, l = 0; l
                                <= u; l++)(r = t[l]).e && (r.e = e(r.e)), r.v && "g" === (i = r.v).t &&
                                    i.r && (o = n.getElementById(i.r)) && (a[i.r] = {
                                        e: o, s:
                                            o.querySelectorAll("stop")
                                    }); return a
                        }(t, i, l), function (i) {
                            var o =
                                r(i, t, Qt); if (!o) return "none"; if ("c" === o.t) return dt(o.v); if
                                ("g" === o.t) {
                                if (!e[o.r]) return gt(o.r); var u = e[o.r]; return function (t, e) {
                                    for (var n = t.s, r = n.length; r < e.length; r++) {
                                        var
                                            i = n[n.length - 1].cloneNode(); i.id = Kt(i.id), t.e.appendChild(i), n =
                                                t.s = t.e.querySelectorAll("stop")
                                    } for (var o = 0, u = n.length, a =
                                        e.length - 1; o < u; o++) n[o].setAttribute("stop-color", dt(e[Math.min(o,
                                            a)].c)), n[o].setAttribute("offset", e[Math.min(o, a)].o)
                                }(u, o.s),
                                    Object.keys(Wt).forEach((function (t) {
                                        if (void 0 !== o[t]) if ("object"
                                            !== n(Wt[t])) {
                                            var e, r = "gt" === t ? (e = o[t], Array.isArray(e) ?
                                                "matrix(" + e.join(" ") + ")" : "") : o[t], i = Wt[t]; u.e.setAttribute(i,
                                                    r)
                                        } else Object.keys(Wt[t]).forEach((function (e) {
                                            if (void 0 !==
                                                o[t][e]) { var n = o[t][e], r = Wt[t][e]; u.e.setAttribute(r, n) }
                                        }))
                                    })), gt(o.r)
                            } return "none"
                        }
                } function Qt(t, n, r) {
                    if (0 === t)
                        return n; if (1 === t) return r; if (n && r) {
                            var i = n.t; if (i === r.t)
                                switch (n.t) {
                                    case "c": return { t: i, v: z(t, n.v, r.v) }; case "g": if
                                        (n.r === r.r) {
                                        var o = { t: i, s: Xt(t, n.s, r.s), r: n.r }; return n.gt
                                            && r.gt && (o.gt = Y(t, n.gt, r.gt)), n.c ? (o.c = D(t, n.c, r.c), o.rd =
                                                C(t, n.rd, r.rd)) : n.f && (o.f = D(t, n.f, r.f), o.to = D(t, n.to,
                                                    r.to)), o
                                    }
                                } if ("c" === n.t && "g" === r.t || "c" === r.t && "g" ===
                                    n.t) {
                                var u = "c" === n.t ? n : r, a = "g" === n.t ? e({}, n) : e({}, r),
                                    l = a.s.map((function (t) { return { c: u.v, o: t.o } })); return a.s = "c"
                                        === n.t ? Xt(t, l, a.s) : Xt(t, a.s, l), a
                            }
                        } return N(t, n, r)
                }
            function Xt(t, e, n) {
                if (e.length === n.length) return
                e.map((function (e, r) { return Jt(t, e, n[r]) })); for (var r =
                    Math.max(e.length, n.length), i = [], o = 0; o < r; o++) {
                    var u = Jt(t,
                        e[Math.min(o, e.length - 1)], n[Math.min(o, n.length - 1)]); i.push(u)
                }
                return i
            } function Jt(t, e, n) {
                return {
                    o: L(t, e.o, n.o || 0), c: z(t,
                        e.c, n.c || {})
                }
            } function Kt(t) {
                return t.replace(/-fill-([0-9]+)$/,
                    (function (t, e) { return "-fill-" + (+e + 1) }))
            } var Zt = {
                blur: q,
                brightness: C, contrast: C, "drop-shadow": function (t, e, n) {
                    return 0
                        === t ? e : 1 === t ? n : {
                            blur: q(t, e.blur, n.blur), offset: D(t,
                                e.offset, n.offset), color: z(t, e.color, n.color)
                        }
                }, grayscale: C,
                "hue-rotate": F, invert: C, opacity: C, saturate: C, sepia: C
            }; function
                te(t, e, n) {
                if (0 === t) return e; if (1 === t) return n; var r =
                    e.length; if (r !== n.length) return N(t, e, n); for (var i, o = [], u =
                        0; u < r; u++) {
                    if (e[u].type !== n[u].type) return e; if (!(i =
                        Zt[e[u].type])) return N(t, e, n); o.push({
                            type: e.type, value: i(t,
                                e[u].value, n[u].value)
                        })
                } return o
            } var ee = {
                blur: function (t) {
                    return t ? function (e) { t.setAttribute("stdDeviation", yt(e)) } : null
                },
                brightness: function (t, e, n) {
                    return (t = re(n, e)) ? function (e) {
                        e =
                            ht(e), t.map((function (t) { return t.setAttribute("slope", e) }))
                    } : null
                }, contrast: function (t, e, n) {
                    return (t = re(n, e)) ? function (e) {
                        var
                            n = ht((1 - e) / 2); e = ht(e), t.map((function (t) {
                                t.setAttribute("slope", e), t.setAttribute("intercept", n)
                            }))
                    } : null
                },
                "drop-shadow": function (t, e, n) {
                    var r = n.getElementById(e + "-blur");
                    if (!r) return null; var i = n.getElementById(e + "-offset"); if (!i)
                        return null; var o = n.getElementById(e + "-flood"); return o ?
                            function (t) {
                                r.setAttribute("stdDeviation", yt(t.blur)),
                                    i.setAttribute("dx", ht(t.offset.x)), i.setAttribute("dy",
                                        ht(t.offset.y)), o.setAttribute("flood-color", dt(t.color))
                            } : null
                },
                grayscale: function (t) {
                    return t ? function (e) {
                        t.setAttribute("values",
                            vt(function (t) {
                                return [.2126 + .7874 * (t = 1 - t), .7152 - .7152 * t,
                                .0722 - .0722 * t, 0, 0, .2126 - .2126 * t, .7152 + .2848 * t, .0722 -
                                .0722 * t, 0, 0, .2126 - .2126 * t, .7152 - .7152 * t, .0722 + .9278 * t,
                                    0, 0, 0, 0, 0, 1, 0]
                            }(e)))
                    } : null
                }, "hue-rotate": function (t) {
                    return
                    t ? function (e) { return t.setAttribute("values", ht(e)) } : null
                },
                invert: function (t, e, n) {
                    return (t = re(n, e)) ? function (e) {
                        e =
                            ht(e) + " " + ht(1 - e), t.map((function (t) {
                                return
                                t.setAttribute("tableValues", e)
                            }))
                    } : null
                }, opacity: function (t, e,
                    n) {
                    return (t = n.getElementById(e + "-A")) ? function (e) {
                        return
                        t.setAttribute("tableValues", "0 " + ht(e))
                    } : null
                }, saturate:
                    function (t) {
                        return t ? function (e) {
                            return t.setAttribute("values",
                                ht(e))
                        } : null
                    }, sepia: function (t) {
                        return t ? function (e) {
                            return
                            t.setAttribute("values", vt(function (t) {
                                return [.393 + .607 * (t = 1 -
                                    t), .769 - .769 * t, .189 - .189 * t, 0, 0, .349 - .349 * t, .686 + .314 *
                                    t, .168 - .168 * t, 0, 0, .272 - .272 * t, .534 - .534 * t, .131 + .869 *
                                    t, 0, 0, 0, 0, 0, 1, 0]
                            }(e)))
                        } : null
                    }
            }; var ne = ["R", "G", "B"];
            function re(t, e) {
                var n = ne.map((function (n) {
                    return
                    t.getElementById(e + "-" + n) || null
                })); return -1 !== n.indexOf(null) ?
                    null : n
            } var ie = {
                fill: Ht, "fill-opacity": Gt, stroke: Ht,
                "stroke-opacity": Gt, "stroke-width": Yt, "stroke-dashoffset": {
                    f: ht, i:
                        F
                }, "stroke-dasharray": Ut, opacity: Gt, transform: function (t, e, r, i) {
                    if (!(t = function (t, e) {
                        if (!t || "object" !== n(t)) return null; var
                            r = !1; for (var i in t) t.hasOwnProperty(i) && (t[i] && t[i].length ?
                                (t[i].forEach((function (t) { t.e && (t.e = e(t.e)) })), r = !0) : delete
                                t[i]); return r ? t : null
                    }(t, i))) return null; var o = function (n, i,
                        o) {
                        var u = arguments.length > 3 && void 0 !== arguments[3] ?
                            arguments[3] : null; return t[n] ? r(i, t[n], o) : e && e[n] ? e[n] : u
                    };
                    return e && e.a && t.o ? function (e) {
                        var n = r(e, t.o, Ct); return
                        qt.recomposeSelf(n, o("r", e, F, 0) + n.a, o("k", e, D), o("s", e, D),
                            o("t", e, D)).toString()
                    } : function (t) {
                        return qt.recomposeSelf(o("o",
                            t, Ft, null), o("r", t, F, 0), o("k", t, D), o("s", t, D), o("t", t,
                                D)).toString()
                    }
                }, "#filter": function (t, e, n, r, i, o, u, a) {
                    if
                        (!e.items || !t || !t.length) return null; var l = function (t, e) {
                            var n
                                = (t = t.map((function (t) {
                                    return t && ee[t[0]] ?
                                        (e.getElementById(t[1]), ee[t[0]](e.getElementById(t[1]), t[1], e)) : null
                                }))).length; return function (e) {
                                    for (var r = 0; r < n; r++) t[r] &&
                                        t[r](e[r].value)
                                }
                        }(e.items, a); return l ? (t = function (t, e) {
                            return
                            t.map((function (t) { return t.e = e(t.e), t }))
                        }(t, r), function (e) {
                            l(n(e, t, te))
                        }) : null
                }, "#line": zt, points: { f: vt, i: Y }, d: Vt,
                r: Yt, "#size": mt, "#radius": pt, _: function (t, e) {
                    if
                        (Array.isArray(t)) for (var n = 0; n < t.length; n++) this[t[n]] = e; else
                        this[t] = e
                }
            }, oe = {
                currentTime: "offset", duration: "duration",
                hasEnded: function () { return this.reachedToEnd() }, isAlternate:
                    "alternate", isPlaying: "_running", isRollingBack: "_rollingBack",
                iterations: "iterations", state: function (t, e) {
                    return e.isPlaying ?
                        e.isRollingBack ? "rollback" : "playing" : e.hasEnded ? "ended" : "paused"
                }, totalTime: "maxFiniteDuration"
            }, ue = {
                destruct: "destruct", pause:
                    "pause", play: function (t, e) {
                        return ae(t, e.hasEnded ? "restart" :
                            "play", e)
                    }, restart: "restart", reverse: function (t, e) {
                        return ae(t,
                            "reverse", e, [!0])
                    }, seek: "seek", seekBy: "seekBy", seekTo: "seekTo",
                stop: "stop", toggle: "toggle"
            }; function ae(t, e, n) {
                var r =
                    arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [];
                return function () {
                    var i, o = Array.prototype.slice.call(arguments);
                    return o.unshift.apply(o, v(r)), (i = t[e]).call.apply(i,
                        [t].concat(v(o))), n
                }
            } var le = function t(e) {
                r(this, t); var n = {},
                    i = ["on", "off"], o = {
                        get: function (t, e, r) {
                            return oe[e] ?
                                "function" == typeof oe[e] ? oe[e].call(t, t, r) : t[oe[e]] : ue[e] ?
                                    "function" == typeof ue[e] ? ue[e].call(t, t, r) : ae(t, ue[e], r) : -1
                                        !== i.indexOf(e) ? n[e] : "ready" === e ? function (t) {
                                            return t &&
                                                t.call(r, r), r
                                        } : void 0
                        }, set: function (t, e, r) {
                            return -1 !==
                                i.indexOf(e) && (n[e] = r)
                        }, ownKeys: function (t) {
                            return
                            Object.keys(oe)
                        }, has: function (t, e) { return void 0 !== oe[e] }
                    }; if
                    ("function" == typeof Proxy) return new Proxy(e, o); var u =
                        Object.keys(oe).concat(Object.keys(ue)).concat(i), a = {}; return
                u.forEach((function (t) {
                    var n = {
                        enumerable: !1, configurable: !1, get:
                            function () { return o.get(e, t, a) }
                    }; - 1 !== i.indexOf(t) && (n.set =
                        function (n) { return o.set(e, t, n) }), Object.defineProperty(a, t, n)
                })), a
            }; function se(t) {
                t || (t = this); var e = {}; this.on =
                    function (t, n) {
                        var r = arguments.length > 2 && void 0 !== arguments[2]
                            && arguments[2]; return "function" == typeof n && (t.split(/[,]+/g).forEach((function (t) {
                                return e[t] = e[t] || [], r ? e[t].unshift(n)
                                    : e[t].push(n)
                            })), !0)
                    }, this.off = function (t, n) {
                        for (var r in e) if
                            (e.hasOwnProperty(r) && r.substr(0, t.length) === t) if (n) for (var i =
                                0; i < e[r].length; i++) e[r][i] === n && (e[r][i] = null); else e[r] =
                                    null
                    }, this.trigger = function () {
                        var n, r =
                            Array.prototype.slice.call(arguments), i = r[0], o = r.slice(1); t: for
                                (var u in e) if (e.hasOwnProperty(u) && e[u] && (u === i || u.substr(0,
                                    i.length + 1) === i + ".")) for (var a = 0; a < e[u].length; a++) if
                                        (e[u][a] && !1 === (n = e[u][a].apply(t, o))) break t; return n
                    }
            } var fe
                = !0, ce = function (t) {
                    ! function (t, e) {
                        if ("function" != typeof e &&
                            null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t, writable: !0, configurable: !0
                                }
                            }), e && l(t, e)
                    }(u, t); var
                        e, n, i = (e = u, n = s(), function () {
                            var t, r = a(e); if (n) {
                                var i =
                                    a(this).constructor; t = Reflect.construct(r, arguments, i)
                            } else t =
                                r.apply(this, arguments); return c(this, t)
                        }); function u(t, e) {
                            var n,
                                o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            return r(this, u), (n = i.call(this, t, e, o))._handlers = [], n
                        } return
                    o(u, [{
                        key: "_adjustOffset", value: function () {
                            var t = arguments.length
                                > 0 && void 0 !== arguments[0] && arguments[0], e = this.alternate ? 2 *
                                    this.duration : this.duration; if (t) {
                                        if (!this._rollingBack && 0 ===
                                            this.offset) return void (this.offset = e); this._rollingBack &&
                                                (this.offset, this.maxFiniteDuration)
                                    } !this._rollingBack ||
                                        this.rollbackStartOffset <= this.duration ? 0 !== this.iterations &&
                                    (this.offset = Math.min(this.offset, this.maxFiniteDuration)) :
                                        (this.offset = this.rollbackStartOffset - (this.rollbackStartOffset -
                                            this.offset) % e, this.rollbackStartOffset = 0)
                        }
                    }, {
                        key: "reverse",
                        value: function () {
                            var t = arguments.length > 0 && void 0 !==
                                arguments[0] && arguments[0]; if (!this._running) return
                            this._adjustOffset(t), this._rollingBack = !this._rollingBack, t &&
                                this.play(!1), void this.trigger("reverse", this.offset); this.pause(!1,
                                    !1), this._adjustOffset(), this._rollingBack = !this._rollingBack,
                                    this.play(!1), this.trigger("reverse", this.offset)
                        }
                    }, {
                        key: "play",
                        value: function () {
                            var t = arguments.length > 0 && void 0 !==
                                arguments[0] ? arguments[0] : fe, e = h(a(u.prototype), "play",
                                    this).call(this); return t === fe && this.trigger("play", this.offset), e
                        }
                    }, {
                        key: "pause", value: function () {
                            var t = arguments.length > 0 &&
                                void 0 !== arguments[0] && arguments[0], e = arguments.length > 1 && void
                                    0 !== arguments[1] ? arguments[1] : fe, n = h(a(u.prototype), "pause",
                                        this).call(this); return e === fe && this.trigger(t ? "end" : "pause",
                                            this.offset), n
                        }
                    }, {
                        key: "restart", value: function () {
                            var t =
                                h(a(u.prototype), "restart", this).call(this, !1); return
                            this.trigger("restart", this.offset), t
                        }
                    }, {
                        key: "stop", value:
                            function () {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ?
                                    arguments[0] : fe, e = h(a(u.prototype), "stop", this).call(this); return
                                t === fe && this.trigger("stop", this.offset), e
                            }
                    }, {
                        key: "_apply",
                        value: function (t) {
                            var e = this, n = arguments.length > 2 && void 0 !==
                                arguments[2] ? arguments[2] : fe, r = h(a(u.prototype), "_apply",
                                    this).call(this, t); if (n === fe) {
                                        var i = function () {
                                            return
                                            e.trigger("keyframe", t)
                                        }; window.requestAnimationFrame(i)
                                    } return r
                        }
                    }, {
                        key: "seekTo", value: function (t) {
                            var e, n, r, i = this._running; i
                                && this.pause(!1, !1), this.offset = this.iterations > 0 ? (e = t, n = 0,
                                    r = this.maxFiniteDuration, e < n ? n : e > r ? r : e) : Math.max(t, 0),
                                this._apply(this.offset), i && this.play(!1)
                        }
                    }, {
                        key: "seek", value:
                            function (t) {
                                return this.seekTo(Math.round(t / 100 *
                                    this.maxFiniteDuration))
                            }
                    }, {
                        key: "seekBy", value: function (t) {
                            return
                            this.seekTo(this.offset + t)
                        }
                    }, {
                        key: "toggle", value: function () {
                            return this._running ? this.pause() : this.reachedToEnd() ? this.restart()
                                : this.play()
                        }
                    }, {
                        key: "destruct", value: function () {
                            var t = this;
                            this.stop(), this._handlers.forEach((function (t) {
                                t.element ?
                                    t.element.removeEventListener(t.event, t.handler) : t.callback &&
                                    t.callback.call && t.callback.call()
                            })); var e = function () { }, n =
                                Object.getOwnPropertyNames(Object.getPrototypeOf(this)); n.push.apply(n,
                                    v(Object.getOwnPropertyNames(this))), n.forEach((function (n) {
                                        "function"
                                            == typeof t[n] ? t[n] = e : delete t[n]
                                    }))
                        }
                    }], [{
                        key: "build", value:
                            function (t) {
                                var e = h(a(u), "build", this).call(this, t, ie); if (!e)
                                    return null; var n = e.el, r = e.options, i = e.player, o = new le(i), l =
                                        new se(o); o.on = l.on, o.off = l.off, i.trigger = l.trigger; var s =
                                            n.svgatorPlayer && n.svgatorPlayer.ready && n.svgatorPlayer.ready.call &&
                                            n.svgatorPlayer.ready.call(); n.svgatorPlayer = o, function (t, e, n) {
                                                if
                                                    ("click" === n.start) {
                                                    var r = function () {
                                                        switch (n.click) {
                                                            case
                                                                "freeze": return !t._running && t.reachedToEnd() ? t.restart() :
                                                                    t.toggle(); case "restart": return t.offset > 0 ? t.restart() : t.play();
                                                            case "reverse": return t._running ? t.reverse() : t.reachedToEnd() ? 1 ===
                                                                t.fill ? t.reverse(!0) : t.restart() : t.play(); case "none": default: if
                                                                    (t._running) return; return t.reachedToEnd() ? t.restart() : t.play()
                                                        }
                                                    };
                                                    return t._handlers.push({ element: e, event: "click", handler: r }), void
                                                        e.addEventListener("click", r)
                                                } if ("hover" === n.start) {
                                                    var i =
                                                        function () {
                                                            return t.reachedToEnd() ? t.restart() : t._rollingBack ?
                                                                t.reverse() : t.play()
                                                        }; t._handlers.push({
                                                            element: e, event:
                                                                "mouseenter", handler: i
                                                        }), e.addEventListener("mouseenter", i); var o =
                                                            function () {
                                                                switch (n.hover) {
                                                                    case "freeze": return t.pause(); case
                                                                        "reset": return t.stop(); case "reverse": if (t.reverse(), t._running)
                                                                            return; return t.play(); case "none": default: return
                                                                }
                                                            }; return
                                                    t._handlers.push({ element: e, event: "mouseleave", handler: o }), void
                                                        e.addEventListener("mouseleave", o)
                                                } if ("scroll" === n.start) {
                                                    var u =
                                                        new ct(e, n.scroll || 25, (function (e) {
                                                            e ? t.reachedToEnd() ?
                                                                t.restart() : t.play() : t.pause()
                                                        })); return void t._handlers.push({
                                                            callback: function () { return u.destruct() }
                                                        })
                                                } if ("programmatic" ===
                                                    n.start) return; t.play()
                                            }(i, n, r), function (t, e, n) {
                                                var r;
                                                "function" == typeof Event ? r = new Event("ready") : (r =
                                                    document.createEvent("Event")).initEvent("ready", !0, !0); if
                                                    (t.dispatchEvent(r), !n || !n.length) return; n.forEach((function (t) {
                                                        return e.ready(t)
                                                    }))
                                            }(n, n.svgatorPlayer, s)
                            }
                    }]), u
                }(st); return
            ce.init(), ce
        })); (function (s, i, o, w, a, b) {
            (a =
                document.getElementById(i.root)).svgatorPlayer = {
                ready: (function (a) {
                    b
                        = []; return function (c) { return c ? (b.push(c), a.svgatorPlayer) : b }
                })(a)
            }; w[o] = w[o] || {}; w[o][s] = w[o][s] || []; w[o][s].push(i);
        })('91c80d77', {
            "root": "astronaut-v4", "animations": [{
                "elements": {
                    "astronaut-v4-astronaut": {
                        "transform": {
                            "data": {
                                "o": {
                                    "x":
                                        718.908732, "y": 547.47455, "type": "corner"
                                }, "t": {
                                    "x": -324.481964,
                                    "y": -392.046173
                                }
                            }, "keys": {
                                "r": [{
                                    "t": 0, "v": 0, "e": [0.42, 0,
                                        0.58, 1]
                                }, {
                                    "t": 2533.333333333333, "v": 6.04014, "e": [0.42, 0, 0.58,
                                        1]
                                }, { "t": 5333.333333333333, "v": 0, "e": [0.42, 0, 0.58, 1] }, {
                                    "t":
                                        7866.666666666666, "v": 6.04014, "e": [0.42, 0, 0.58, 1]
                                }, {
                                    "t":
                                        10666.666666666666, "v": 0
                                }]
                            }
                        }
                    }, "astronaut-v4-r-hand": {
                        "transform":
                        {
                            "data": {
                                "o": { "x": 378.621063, "y": 231.490615, "type": "corner" },
                                "t": { "x": -378.621063, "y": -231.490615 }
                            }, "keys": {
                                "r": [{
                                    "t": 0,
                                    "v": -2.515651, "e": [0.42, 0, 0.58, 1]
                                }, {
                                    "t": 2666.6666666666665, "v":
                                        -6.763292, "e": [0.42, 0, 0.58, 1]
                                }, {
                                    "t": 5333.333333333333, "v":
                                        -2.515651, "e": [0.42, 0, 0.58, 1]
                                }, {
                                    "t": 8000, "v": -6.763292, "e":
                                        [0.42, 0, 0.58, 1]
                                }, { "t": 10666.666666666666, "v": -2.52 }]
                            }
                        }
                    },
                    "astronaut-v4-r-hand2": {
                        "transform": {
                            "data": {
                                "o": {
                                    "x": 282.364848,
                                    "y": 200.038085, "type": "corner"
                                }, "t": {
                                    "x": -282.364848, "y":
                                        -200.038085
                                }
                            }, "keys": {
                                "r": [{
                                    "t": 0, "v": -4.230521, "e": [0.42, 0,
                                        0.58, 1]
                                }, { "t": 2800, "v": -2.587069, "e": [0.42, 0, 0.58, 1] }, {
                                    "t":
                                        5333.333333333333, "v": -4.230521, "e": [0.42, 0, 0.58, 1]
                                }, {
                                    "t":
                                        8133.333333333333, "v": -2.587069, "e": [0.42, 0, 0.58, 1]
                                }, {
                                    "t":
                                        10666.666666666666, "v": -4.23
                                }]
                            }
                        }
                    }, "astronaut-v4-r-hand3": {
                        "transform": {
                            "data": {
                                "o": {
                                    "x": 270.907814, "y": 195.645985, "type":
                                        "corner"
                                }, "t": { "x": -270.907814, "y": -195.645985 }
                            }, "keys": {
                                "r":
                                    [{ "t": 0, "v": -7.294829, "e": [0.42, 0, 0.58, 1] }, {
                                        "t": 2400, "v":
                                            -4.768275, "e": [0.42, 0, 0.58, 1]
                                    }, {
                                        "t": 5333.333333333333, "v":
                                            -7.294829, "e": [0.42, 0, 0.58, 1]
                                    }, {
                                        "t": 7733.333333333333, "v":
                                            -4.768275, "e": [0.42, 0, 0.58, 1]
                                    }, {
                                        "t": 10666.666666666666, "v":
                                            -7.29
                                    }]
                            }
                        }
                    }, "astronaut-v4-r-hand4": {
                        "transform": {
                            "data": {
                                "o": {
                                    "x": 216.06181, "y": 139.666365, "type": "corner"
                                }, "t": {
                                    "x":
                                        -216.06181, "y": -139.666365
                                }
                            }, "keys": {
                                "r": [{
                                    "t": 0, "v":
                                        -12.208013, "e": [0.42, 0, 0.58, 1]
                                }, {
                                    "t": 2733.333333333333, "v":
                                        6.422021, "e": [0.42, 0, 0.58, 1]
                                }, {
                                    "t": 5333.333333333333, "v":
                                        -12.208013, "e": [0.42, 0, 0.58, 1]
                                }, {
                                    "t": 8066.666666666666, "v":
                                        6.422021, "e": [0.42, 0, 0.58, 1]
                                }, {
                                    "t": 10666.666666666666, "v":
                                        -12.21, "e": [0.42, 0, 0.58, 1]
                                }]
                            }
                        }
                    }, "astronaut-v4-01_hand1": {
                        "opacity": [{ "t": 926.6666666666666, "v": 0, "e": [1, 1] }, {
                            "t":
                                933.3333333333333, "v": 1, "e": [1, 1]
                        }, {
                            "t": 1026.6666666666665, "v":
                                1, "e": [1, 1]
                        }, { "t": 1033.3333333333333, "v": 1, "e": [1, 1] }, {
                            "t":
                                3626.6666666666665, "v": 1, "e": [1, 1]
                        }, {
                            "t": 3726.6666666666665, "v":
                                1, "e": [1, 1]
                        }, { "t": 3733.333333333333, "v": 0 }]
                    },
                    "astronaut-v4-02_hand1": {
                        "opacity": [{ "t": 820, "v": 0, "e": [1, 1] },
                        { "t": 826.6666666666666, "v": 1, "e": [1, 1] }, {
                            "t": 926.6666666666666,
                            "v": 1, "e": [1, 1]
                        }, { "t": 933.3333333333333, "v": 0, "e": [1, 1] }, {
                            "t": 3726.6666666666665, "v": 0, "e": [1, 1]
                        }, {
                            "t": 3733.333333333333,
                            "v": 1, "e": [1, 1]
                        }, { "t": 3833.333333333333, "v": 1, "e": [1, 1] }, {
                            "t": 3840, "v": 0
                        }]
                    }, "astronaut-v4-03_hand1": {
                        "opacity": [{
                            "t":
                                713.3333333333333, "v": 0, "e": [1, 1]
                        }, {
                            "t": 720, "v": 1, "e": [1, 1]
                        }, { "t": 820, "v": 1, "e": [1, 1] }, {
                            "t": 826.6666666666666, "v": 0,
                            "e": [1, 1]
                        }, { "t": 3833.333333333333, "v": 0, "e": [1, 1] }, {
                            "t":
                                3840, "v": 1, "e": [1, 1]
                        }, { "t": 3940, "v": 1, "e": [1, 1] }, {
                            "t":
                                3946.6666666666665, "v": 0
                        }]
                    }, "astronaut-v4-04_hand1": {
                        "opacity": [{
                            "t": 606.6666666666666, "v": 0, "e": [1, 1]
                        }, {
                            "t": 613.3333333333333,
                            "v": 1, "e": [1, 1]
                        }, { "t": 713.3333333333333, "v": 1, "e": [1, 1] }, {
                            "t": 720, "v": 0, "e": [1, 1]
                        }, { "t": 3940, "v": 0, "e": [1, 1] }, {
                            "t": 3946.6666666666665, "v": 1, "e": [1, 1]
                        }, {
                            "t": 4046.6666666666665,
                            "v": 1, "e": [1, 1]
                        }, { "t": 4053.333333333333, "v": 0 }]
                    },
                    "astronaut-v4-05_hand1": {
                        "opacity": [{
                            "t": 606.6666666666666, "v": 1,
                            "e": [1, 1]
                        }, { "t": 613.3333333333333, "v": 0, "e": [1, 1] }, {
                            "t":
                                4046.6666666666665, "v": 0, "e": [1, 1]
                        }, {
                            "t": 4053.333333333333, "v":
                                1
                        }]
                    }, "astronaut-v4-r-leg": {
                        "transform": {
                            "data": {
                                "o": {
                                    "x":
                                        373.67864, "y": 410.866788, "type": "corner"
                                }, "t": {
                                    "x": -373.678639,
                                    "y": -410.866786
                                }
                            }, "keys": {
                                "r": [{
                                    "t": 0, "v": 0, "e": [0.42, 0,
                                        0.58, 1]
                                }, {
                                    "t": 2666.6666666666665, "v": -9.269684, "e": [0.42, 0,
                                        0.58, 1]
                                }, { "t": 5333.333333333333, "v": 0, "e": [0.42, 0, 0.58, 1] }, {
                                    "t": 8000, "v": -9.269684, "e": [0.42, 0, 0.58, 1]
                                }, {
                                    "t":
                                        10666.666666666666, "v": 0
                                }]
                            }
                        }
                    }, "astronaut-v4-r-foot": {
                        "transform":
                        {
                            "data": {
                                "o": { "x": 210.949018, "y": 367.011068, "type": "corner" },
                                "t": { "x": -210.949018, "y": -367.011068 }
                            }, "keys": {
                                "r": [{
                                    "t": 0,
                                    "v": 0, "e": [0.42, 0, 0.58, 1]
                                }, {
                                    "t": 2466.6666666666665, "v":
                                        -4.773133
                                }, { "t": 5333.333333333333, "v": 0, "e": [0.42, 0, 0.58, 1] },
                                { "t": 7800, "v": -4.773133 }, { "t": 10666.666666666666, "v": 0 }]
                            }
                        }
                    },
                    "astronaut-v4-r-foot2": {
                        "transform": {
                            "data": {
                                "o": {
                                    "x": 198.848999,
                                    "y": 387.640632, "type": "corner"
                                }, "t": {
                                    "x": -198.848999, "y":
                                        -387.640632
                                }
                            }, "keys": {
                                "r": [{
                                    "t": 0, "v": -7.80791, "e": [0.42, 0,
                                        0.58, 1]
                                }, { "t": 2400, "v": -9.664201 }, {
                                    "t": 5333.333333333333, "v":
                                        -7.80791, "e": [0.42, 0, 0.58, 1]
                                }, {
                                    "t": 7733.333333333333, "v":
                                        -9.664201
                                }, { "t": 10666.666666666666, "v": -7.80791 }]
                            }
                        }
                    },
                    "astronaut-v4-r-foot3": {
                        "transform": {
                            "data": {
                                "o": {
                                    "x": 200.102803,
                                    "y": 389.4321, "type": "corner"
                                }, "t": {
                                    "x": -200.102803, "y": -389.4321
                                }
                            }, "keys": {
                                "r": [{ "t": 0, "v": 0, "e": [0.42, 0, 0.58, 1] }, {
                                    "t":
                                        2533.333333333333, "v": 0, "e": [0.42, 0, 0.58, 1]
                                }, {
                                    "t":
                                        5333.333333333333, "v": 0, "e": [0.42, 0, 0.58, 1]
                                }, {
                                    "t":
                                        7866.666666666666, "v": 0, "e": [0.42, 0, 0.58, 1]
                                }, {
                                    "t":
                                        10666.666666666666, "v": 0
                                }]
                            }
                        }
                    }, "astronaut-v4-r-foot4": {
                        "transform": {
                            "data": {
                                "o": {
                                    "x": 131.718719, "y": 487.438933, "type":
                                        "corner"
                                }, "t": { "x": -131.718719, "y": -487.438933 }
                            }, "keys": {
                                "r":
                                    [{ "t": 0, "v": 0, "e": [0.42, 0, 0.58, 1] }, {
                                        "t": 2333.333333333333,
                                        "v": 9.808444, "e": [0.42, 0, 0.58, 1]
                                    }, {
                                        "t": 5333.333333333333, "v":
                                            0, "e": [0.42, 0, 0.58, 1]
                                    }, {
                                        "t": 7666.666666666666, "v": 9.808444,
                                        "e": [0.42, 0, 0.58, 1]
                                    }, { "t": 10666.666666666666, "v": 0 }]
                            }
                        }
                    },
                    "astronaut-v4-l-leg": {
                        "transform": {
                            "data": {
                                "o": {
                                    "x": 435.225, "y":
                                        456.019404, "type": "corner"
                                }, "t": {
                                    "x": -435.224986, "y": -456.019399
                                }
                            }, "keys": {
                                "r": [{ "t": 0, "v": 0, "e": [0.42, 0, 0.58, 1] }, {
                                    "t":
                                        2000, "v": -4.023164, "e": [0.42, 0, 0.58, 1]
                                }, {
                                    "t": 5333.333333333333,
                                    "v": 0, "e": [0.42, 0, 0.58, 1]
                                }, {
                                    "t": 7333.333333333333, "v":
                                        -4.023164, "e": [0.42, 0, 0.58, 1]
                                }, { "t": 10666.666666666666, "v": 0 }]
                            }
                        }
                    }, "astronaut-v4-l-leg2": {
                        "transform": {
                            "data": {
                                "o": {
                                    "x":
                                        321.120736, "y": 546.916392, "type": "corner"
                                }, "t": {
                                    "x": -321.120736,
                                    "y": -546.916392
                                }
                            }, "keys": {
                                "r": [{
                                    "t": 0, "v": 0, "e": [0.42, 0,
                                        0.58, 1]
                                }, { "t": 2600, "v": -1.445252, "e": [0.42, 0, 0.58, 1] }, {
                                    "t":
                                        5333.333333333333, "v": 0, "e": [0.42, 0, 0.58, 1]
                                }, {
                                    "t":
                                        7933.333333333333, "v": -1.445252, "e": [0.42, 0, 0.58, 1]
                                }, {
                                    "t":
                                        10666.666666666666, "v": 0
                                }]
                            }
                        }
                    }, "astronaut-v4-l-foot": {
                        "transform":
                        {
                            "data": {
                                "o": { "x": 306.722947, "y": 584.441652, "type": "corner" },
                                "t": { "x": -306.722947, "y": -584.441652 }
                            }, "keys": {
                                "r": [{
                                    "t": 0,
                                    "v": 0, "e": [0.42, 0, 0.58, 1]
                                }, {
                                    "t": 2466.6666666666665, "v":
                                        -5.577044, "e": [0.42, 0, 0.58, 1]
                                }, {
                                    "t": 5333.333333333333, "v": 0,
                                    "e": [0.42, 0, 0.58, 1]
                                }, {
                                    "t": 7800, "v": -5.577044, "e": [0.42, 0,
                                        0.58, 1]
                                }, { "t": 10666.666666666666, "v": 0 }]
                            }
                        }
                    },
                    "astronaut-v4-l-foot2": {
                        "transform": {
                            "data": {
                                "o": {
                                    "x": 267.29668,
                                    "y": 681.684265, "type": "corner"
                                }, "t": {
                                    "x": -267.29668, "y":
                                        -681.684265
                                }
                            }, "keys": {
                                "r": [{
                                    "t": 0, "v": 0, "e": [0.42, 0, 0.58, 1]
                                }, { "t": 2200, "v": -7.566937, "e": [0.42, 0, 0.58, 1] }, {
                                    "t":
                                        5333.333333333333, "v": 0, "e": [0.42, 0, 0.58, 1]
                                }, {
                                    "t":
                                        7533.333333333333, "v": -7.566937, "e": [0.42, 0, 0.58, 1]
                                }, {
                                    "t":
                                        10666.666666666666, "v": 0
                                }]
                            }
                        }
                    }, "astronaut-v4-ellipse1": {
                        "opacity":
                            [{ "t": 66.66666666666666, "v": 0, "e": [0.42, 0, 0.58, 1] }, {
                                "t": 400,
                                "v": 1, "e": [0.42, 0, 0.58, 1]
                            }, {
                                "t": 733.3333333333333, "v": 0, "e":
                                    [0.42, 0, 0.58, 1]
                            }, {
                                "t": 2133.333333333333, "v": 1, "e": [0.42, 0,
                                    0.58, 1]
                            }, { "t": 2400, "v": 0, "e": [0.42, 0, 0.58, 1] }, {
                                "t":
                                    2666.6666666666665, "v": 1, "e": [0.42, 0, 0.58, 1]
                            }, {
                                "t":
                                    4333.333333333333, "v": 0, "e": [0.42, 0, 0.58, 1]
                            }, {
                                "t":
                                    4733.333333333333, "v": 1, "e": [0.42, 0, 0.58, 1]
                            }, {
                                "t":
                                    5133.333333333333, "v": 0
                            }, {
                                "t": 5333.333333333333, "v": 0, "e": [0.42,
                                    0, 0.58, 1]
                            }, {
                                "t": 5666.666666666666, "v": 1, "e": [0.42, 0, 0.58, 1]
                            }, { "t": 6000, "v": 0, "e": [0.42, 0, 0.58, 1] }, {
                                "t":
                                    6533.333333333333, "v": 1, "e": [0.42, 0, 0.58, 1]
                            }, {
                                "t": 6800, "v": 0,
                                "e": [0.42, 0, 0.58, 1]
                            }, {
                                "t": 7066.666666666666, "v": 1, "e": [0.42,
                                    0, 0.58, 1]
                            }, {
                                "t": 7666.666666666666, "v": 0, "e": [0.42, 0, 0.58, 1]
                            }, { "t": 8066.666666666666, "v": 1, "e": [0.42, 0, 0.58, 1] }, {
                                "t":
                                    8466.666666666666, "v": 0
                            }]
                    }, "astronaut-v4-neck-part": {
                        "transform": {
                            "data": {
                                "o": { "x": 378.621063, "y": 209.326014, "type": "corner" },
                                "t": { "x": -378.621061, "y": -209.326013 }
                            }, "keys": {
                                "s": [{
                                    "t": 0,
                                    "v": { "x": 1, "y": 1 }, "e": [0.42, 0, 0.58, 1]
                                }, {
                                    "t":
                                        2266.6666666666665, "v": { "x": 0.921329, "y": 1 }, "e": [0.42, 0, 0.58,
                                            1]
                                }, {
                                    "t": 5333.333333333333, "v": { "x": 1, "y": 1 }, "e": [0.42, 0,
                                        0.58, 1]
                                }, {
                                    "t": 7600, "v": { "x": 0.921329, "y": 1 }, "e": [0.42, 0,
                                        0.58, 1]
                                }, { "t": 10666.666666666666, "v": { "x": 1, "y": 1 } }]
                            }
                        }
                    },
                    "astronaut-v4-head": {
                        "transform": {
                            "data": {
                                "o": {
                                    "x": 425.694164,
                                    "y": 215.668885, "type": "corner"
                                }, "t": {
                                    "x": -425.694153, "y":
                                        -215.668884
                                }
                            }, "keys": {
                                "r": [{
                                    "t": 0, "v": 0, "e": [0.42, 0, 0.58, 1]
                                }, { "t": 2266.6666666666665, "v": -6.547015, "e": [0.42, 0, 0.58, 1] }, {
                                    "t": 5333.333333333333, "v": 0, "e": [0.42, 0, 0.58, 1]
                                }, {
                                    "t": 7600,
                                    "v": -6.547015, "e": [0.42, 0, 0.58, 1]
                                }, {
                                    "t": 10666.666666666666, "v":
                                        0
                                }]
                            }
                        }
                    }, "astronaut-v4-01_head1": {
                        "opacity": [{
                            "t":
                                393.3333333333333, "v": 0, "e": [1, 0]
                        }, {
                            "t": 400, "v": 1, "e": [1, 0]
                        }, { "t": 1726.6666666666665, "v": 1, "e": [1, 0] }, {
                            "t":
                                1733.3333333333333, "v": 0
                        }]
                    }, "astronaut-v4-02_head": {
                        "opacity": [{
                            "t": 293.3333333333333, "v": 0, "e": [1, 0]
                        }, {
                            "t": 300, "v": 1, "e":
                                [1, 0]
                        }, { "t": 393.3333333333333, "v": 1, "e": [1, 0] }, {
                            "t": 400,
                            "v": 0, "e": [1, 0]
                        }, { "t": 1726.6666666666665, "v": 0, "e": [1, 0] }, {
                            "t": 1733.3333333333333, "v": 1, "e": [1, 0]
                        }, {
                            "t": 1846.6666666666665,
                            "v": 1, "e": [1, 0]
                        }, { "t": 1853.3333333333333, "v": 0 }]
                    },
                    "astronaut-v4-03_head": {
                        "opacity": [{
                            "t": 293.3333333333333, "v": 1,
                            "e": [1, 0]
                        }, { "t": 300, "v": 0, "e": [1, 0] }, {
                            "t":
                                1846.6666666666665, "v": 0, "e": [1, 0]
                        }, {
                            "t": 1853.3333333333333, "v":
                                1, "e": [1, 1]
                        }, { "t": 4860, "v": 1, "e": [1, 0] }, {
                            "t":
                                4866.666666666666, "v": 0, "e": [1, 0]
                        }, {
                            "t": 7460, "v": 0, "e": [1, 0]
                        }, { "t": 7466.666666666666, "v": 1 }]
                    }, "astronaut-v4-04_head": {
                        "opacity": [{ "t": 4860, "v": 0, "e": [1, 0] }, {
                            "t": 4866.666666666666,
                            "v": 1, "e": [1, 0]
                        }, { "t": 4966.666666666666, "v": 1, "e": [1, 0] }, {
                            "t": 4973.333333333333, "v": 0, "e": [1, 0]
                        }, {
                            "t": 7346.666666666666,
                            "v": 0, "e": [1, 0]
                        }, { "t": 7353.333333333333, "v": 1, "e": [1, 0] }, {
                            "t": 7460, "v": 1, "e": [1, 0]
                        }, { "t": 7466.666666666666, "v": 0 }]
                    },
                    "astronaut-v4-05_head": {
                        "opacity": [{
                            "t": 4966.666666666666, "v": 0,
                            "e": [1, 0]
                        }, { "t": 4973.333333333333, "v": 1, "e": [1, 0] }, {
                            "t":
                                7346.666666666666, "v": 1, "e": [1, 0]
                        }, {
                            "t": 7353.333333333333, "v": 0
                        }]
                    }, "astronaut-v4-path111": {
                        "transform": {
                            "data": {
                                "r": 28.660131,
                                "t": { "x": -73.31831, "y": -86.140007 }
                            }, "keys": {
                                "o": [{
                                    "t":
                                        5193.333333333333, "v": {
                                            "x": 389.668209, "y": 117.019428, "type":
                                                "corner"
                                        }, "e": [0.42, 0, 1, 1]
                                }, {
                                    "t": 5300, "v": {
                                        "x": 385.154348,
                                        "y": 124.383731, "type": "corner"
                                    }, "e": [0.42, 0, 1, 1]
                                }, {
                                    "t":
                                        5406.666666666666, "v": {
                                            "x": 390.112616, "y": 116.544131, "type":
                                                "corner"
                                        }
                                }], "s": [{
                                    "t": 5193.333333333333, "v": {
                                        "x": 0.88, "y":
                                            0.56694
                                    }, "e": [0.42, 0, 1, 1]
                                }, {
                                    "t": 5300, "v": {
                                        "x": 1.01, "y":
                                            0.95
                                    }, "e": [0.42, 0, 1, 1]
                                }, {
                                    "t": 5406.666666666666, "v": {
                                        "x":
                                            0.88, "y": 0.4301
                                    }
                                }]
                            }
                        }, "opacity": [{ "t": 5200, "v": 0 }, {
                            "t":
                                5206.666666666666, "v": 1
                        }, { "t": 5393.333333333333, "v": 1 }, {
                            "t":
                                5400, "v": 0
                        }]
                    }, "astronaut-v4-path112": {
                        "transform": {
                            "data": {
                                "r":
                                    23.081645, "t": { "x": -73.31831, "y": -86.140007 }
                            }, "keys": {
                                "o": [{
                                    "t": 5193.333333333333, "v": {
                                        "x": 382.67585, "y": 116.619948, "type":
                                            "corner"
                                    }, "e": [0.42, 0, 1, 1]
                                }, {
                                    "t": 5300, "v": {
                                        "x": 379.072305,
                                        "y": 124.698849, "type": "corner"
                                    }, "e": [0.42, 0, 1, 1]
                                }, {
                                    "t":
                                        5406.666666666666, "v": {
                                            "x": 383.035674, "y": 116.493054, "type":
                                                "corner"
                                        }
                                }], "s": [{
                                    "t": 5193.333333333333, "v": {
                                        "x": 0.88, "y":
                                            0.537802
                                    }, "e": [0.42, 0, 1, 1]
                                }, {
                                    "t": 5300, "v": {
                                        "x": 1.01, "y":
                                            0.95
                                    }, "e": [0.42, 0, 1, 1]
                                }, {
                                    "t": 5406.666666666666, "v": {
                                        "x":
                                            0.88, "y": 0.320458
                                    }
                                }]
                            }
                        }, "opacity": [{ "t": 5200, "v": 0 }, {
                            "t":
                                5206.666666666666, "v": 1
                        }, { "t": 5393.333333333333, "v": 1 }, {
                            "t":
                                5400, "v": 0
                        }]
                    }, "astronaut-v4-l-hand": {
                        "transform": {
                            "data": {
                                "o":
                                    { "x": 498.575891, "y": 255.886001, "type": "corner" }, "t": {
                                        "x":
                                            -498.575891, "y": -255.885993
                                    }
                            }, "keys": {
                                "r": [{
                                    "t": 0, "v": 0, "e":
                                        [0.42, 0, 0.58, 1]
                                }, {
                                    "t": 2533.333333333333, "v": 9.733223, "e": [0.42,
                                        0, 0.58, 1]
                                }, {
                                    "t": 5333.333333333333, "v": 0, "e": [0.42, 0, 0.58, 1]
                                }, { "t": 7866.666666666666, "v": 9.733223, "e": [0.42, 0, 0.58, 1] }, {
                                    "t": 10666.666666666666, "v": 0
                                }]
                            }
                        }
                    }, "astronaut-v4-l-hand2": {
                        "transform": {
                            "data": {
                                "o": {
                                    "x": 577.99039, "y": 326.815989, "type":
                                        "corner"
                                }, "t": { "x": -577.99039, "y": -326.815989 }
                            }, "keys": {
                                "r":
                                    [{ "t": 0, "v": 0, "e": [0.42, 0, 0.58, 1] }, {
                                        "t": 2333.333333333333,
                                        "v": 6.04062, "e": [0.42, 0, 0.58, 1]
                                    }, {
                                        "t": 5333.333333333333, "v": 0,
                                        "e": [0.42, 0, 0.58, 1]
                                    }, {
                                        "t": 7666.666666666666, "v": 6.04062, "e":
                                            [0.42, 0, 0.58, 1]
                                    }, { "t": 10666.666666666666, "v": 0 }]
                            }
                        }
                    },
                    "astronaut-v4-left-hand": {
                        "transform": {
                            "data": {
                                "o": {
                                    "x":
                                        597.337534, "y": 390.39914, "type": "corner"
                                }, "t": {
                                    "x": -597.337528,
                                    "y": -390.399139
                                }
                            }, "keys": {
                                "r": [{
                                    "t": 0, "v": 0, "e": [0.42, 0,
                                        0.58, 1]
                                }, {
                                    "t": 2666.6666666666665, "v": 9.381243, "e": [0.42, 0, 0.58,
                                        1]
                                }, { "t": 5333.333333333333, "v": 0, "e": [0.42, 0, 0.58, 1] }, {
                                    "t":
                                        8000, "v": 9.381243, "e": [0.42, 0, 0.58, 1]
                                }, {
                                    "t": 10666.666666666666,
                                    "v": 0
                                }]
                            }
                        }
                    }, "astronaut-v4-01_hand2": {
                        "opacity": [{
                            "t":
                                466.66666666666663, "v": 1, "e": [1, 1]
                        }, {
                            "t": 573.3333333333333, "v":
                                1, "e": [1, 1]
                        }, { "t": 580, "v": 0, "e": [1, 1] }, {
                            "t":
                                3633.333333333333, "v": 0, "e": [1, 1]
                        }, {
                            "t": 3640, "v": 1, "e": [1, 1]
                        }, { "t": 3726.6666666666665, "v": 1, "e": [1, 1] }, {
                            "t":
                                3733.333333333333, "v": 1
                        }, {
                            "t": 5886.666666666666, "v": 1, "e": [1, 1]
                        }, { "t": 5993.333333333333, "v": 1, "e": [1, 1] }, {
                            "t": 6000, "v": 0,
                            "e": [1, 1]
                        }, { "t": 9640, "v": 0, "e": [1, 1] }, {
                            "t":
                                9646.666666666666, "v": 1, "e": [1, 1]
                        }, {
                            "t": 9733.333333333332, "v":
                                1, "e": [1, 1]
                        }, { "t": 9740, "v": 1 }]
                    }, "astronaut-v4-02_hand2": {
                        "opacity": [{ "t": 573.3333333333333, "v": 0, "e": [1, 1] }, {
                            "t": 580,
                            "v": 1, "e": [1, 1]
                        }, { "t": 700, "v": 1, "e": [1, 1] }, {
                            "t":
                                706.6666666666666, "v": 0, "e": [1, 1]
                        }, {
                            "t": 3546.6666666666665, "v":
                                0, "e": [1, 1]
                        }, { "t": 3553.333333333333, "v": 1, "e": [1, 1] }, {
                            "t":
                                3633.333333333333, "v": 1, "e": [1, 1]
                        }, { "t": 3640, "v": 0 }, {
                            "t":
                                5993.333333333333, "v": 0, "e": [1, 1]
                        }, {
                            "t": 6000, "v": 1, "e": [1, 1]
                        }, { "t": 6120, "v": 1, "e": [1, 1] }, {
                            "t": 6126.666666666666, "v": 0,
                            "e": [1, 1]
                        }, { "t": 9553.333333333332, "v": 0, "e": [1, 1] }, {
                            "t":
                                9560, "v": 1, "e": [1, 1]
                        }, { "t": 9640, "v": 1, "e": [1, 1] }, {
                            "t":
                                9646.666666666666, "v": 0
                        }]
                    }, "astronaut-v4-03_hand2": {
                        "opacity": [{
                            "t": 700, "v": 0, "e": [1, 1]
                        }, {
                            "t": 706.6666666666666, "v": 1, "e":
                                [1, 1]
                        }, { "t": 833.3333333333333, "v": 1, "e": [1, 1] }, {
                            "t": 840,
                            "v": 0, "e": [1, 1]
                        }, { "t": 3446.6666666666665, "v": 0, "e": [1, 1] }, {
                            "t": 3453.333333333333, "v": 1, "e": [1, 1]
                        }, {
                            "t": 3546.6666666666665,
                            "v": 1, "e": [1, 1]
                        }, { "t": 3553.333333333333, "v": 0 }, {
                            "t": 6120,
                            "v": 0, "e": [1, 1]
                        }, { "t": 6126.666666666666, "v": 1, "e": [1, 1] }, {
                            "t": 6253.333333333333, "v": 1, "e": [1, 1]
                        }, {
                            "t": 6260, "v": 0, "e":
                                [1, 1]
                        }, { "t": 9453.333333333332, "v": 0, "e": [1, 1] }, {
                            "t": 9460,
                            "v": 1, "e": [1, 1]
                        }, { "t": 9553.333333333332, "v": 1, "e": [1, 1] }, {
                            "t": 9560, "v": 0
                        }]
                    }, "astronaut-v4-04_hand2": {
                        "opacity": [{
                            "t":
                                833.3333333333333, "v": 0, "e": [1, 1]
                        }, {
                            "t": 840, "v": 1, "e": [1, 1]
                        }, { "t": 973.3333333333333, "v": 1, "e": [1, 1] }, {
                            "t": 980, "v": 0,
                            "e": [1, 1]
                        }, { "t": 3333.333333333333, "v": 0, "e": [1, 1] }, {
                            "t":
                                3340, "v": 1, "e": [1, 1]
                        }, {
                            "t": 3446.6666666666665, "v": 1, "e": [1,
                                1]
                        }, { "t": 3453.333333333333, "v": 0 }, {
                            "t": 6253.333333333333, "v":
                                0, "e": [1, 1]
                        }, { "t": 6260, "v": 1, "e": [1, 1] }, {
                            "t":
                                6393.333333333333, "v": 1, "e": [1, 1]
                        }, {
                            "t": 6400, "v": 0, "e": [1, 1]
                        }, { "t": 9346.666666666666, "v": 0, "e": [1, 1] }, {
                            "t":
                                9353.333333333332, "v": 1, "e": [1, 1]
                        }, {
                            "t": 9453.333333333332, "v":
                                1, "e": [1, 1]
                        }, { "t": 9460, "v": 0 }]
                    }, "astronaut-v4-05_hand2": {
                        "opacity": [{ "t": 973.3333333333333, "v": 0, "e": [1, 1] }, {
                            "t": 980,
                            "v": 1, "e": [1, 1]
                        }, { "t": 3333.333333333333, "v": 1, "e": [1, 1] }, {
                            "t": 3340, "v": 0
                        }, { "t": 6393.333333333333, "v": 0, "e": [1, 1] }, {
                            "t": 6400, "v": 1, "e": [1, 1]
                        }, {
                            "t": 9346.666666666666, "v": 1, "e":
                                [1, 1]
                        }, { "t": 9353.333333333332, "v": 0 }]
                    }, "astronaut-v4-path131": {
                        "d": [{
                            "t": 0, "v": ["M", 365.299, 364.15, "C", 369.433, 365.55, 369.433,
                                364.3, 365.299, 360.4, "C", 363.733, 359, 362.549, 358.033, 361.749,
                                357.5, "C", 360.316, 356.567, 358.816, 356.233, 357.249, 356.5, "C",
                                355.516, 356.933, 353.949, 358.7, 352.549, 361.8, "C", 351.249, 364.567,
                                350.383, 366.433, 349.949, 367.4, "C", 349.849, 368.733, 350.683, 368.733,
                                352.449, 367.4, "C", 353.049, 367, 354.216, 365.1, 355.949, 361.7, "C",
                                356.983, 360.233, 357.983, 359.65, 358.949, 359.95, "C", 360.483, 360.683,
                                362.599, 362.083, 365.299, 364.15, "Z"], "e": [0.42, 0, 0.58, 1]
                        }, {
                            "t":
                                2533.333333333333, "v": ["M", 367.350001, 364.376813, "C", 371.484001,
                                    365.776813, 365.408201, 360.503019, 365.299, 360.4, "C", 365.257634,
                                    360.363019, 362.511901, 360.895969, 361.478052, 361.104621, "C",
                                    360.444203, 361.313273, 358.40519, 361.77865, 358.40519, 361.77865, "C",
                                    358.40519, 361.77865, 351.561852, 364.329003, 349.323499, 365.869438, "C",
                                    347.085146, 367.409873, 343.973827, 370.650416, 343.539827, 371.617416,
                                    "C", 343.439827, 372.950416, 344.273827, 372.950416, 346.039827,
                                    371.617416, "C", 346.639827, 371.217416, 350.034782, 367.753143,
                                    352.02144, 366.657924, "C", 354.008098, 365.562705, 356.983268, 364.46231,
                                    359.012123, 364.11073, "C", 361.040979, 363.759149, 364.650001,
                                    362.309813, 367.350001, 364.376813, "Z"]
                        }, {
                            "t": 5333.333333333333, "v":
                                ["M", 365.299, 364.15, "C", 369.433, 365.55, 369.433, 364.3, 365.299,
                                    360.4, "C", 363.733, 359, 362.549, 358.033, 361.749, 357.5, "C", 360.316,
                                    356.567, 358.816, 356.233, 357.249, 356.5, "C", 355.516, 356.933, 353.949,
                                    358.7, 352.549, 361.8, "C", 351.249, 364.567, 350.383, 366.433, 349.949,
                                    367.4, "C", 349.849, 368.733, 350.683, 368.733, 352.449, 367.4, "C",
                                    353.049, 367, 354.216, 365.1, 355.949, 361.7, "C", 356.983, 360.233,
                                    357.983, 359.65, 358.949, 359.95, "C", 360.483, 360.683, 362.599, 362.083,
                                    365.299, 364.15, "Z"], "e": [0.42, 0, 0.58, 1]
                        }, {
                            "t":
                                7866.666666666666, "v": ["M", 367.350001, 364.376813, "C", 371.484001,
                                    365.776813, 365.408201, 360.503019, 365.299, 360.4, "C", 365.257634,
                                    360.363019, 362.511901, 360.895969, 361.478052, 361.104621, "C",
                                    360.444203, 361.313273, 358.40519, 361.77865, 358.40519, 361.77865, "C",
                                    358.40519, 361.77865, 351.561852, 364.329003, 349.323499, 365.869438, "C",
                                    347.085146, 367.409873, 343.973827, 370.650416, 343.539827, 371.617416,
                                    "C", 343.439827, 372.950416, 344.273827, 372.950416, 346.039827,
                                    371.617416, "C", 346.639827, 371.217416, 350.034782, 367.753143,
                                    352.02144, 366.657924, "C", 354.008098, 365.562705, 356.983268, 364.46231,
                                    359.012123, 364.11073, "C", 361.040979, 363.759149, 364.650001,
                                    362.309813, 367.350001, 364.376813, "Z"]
                        }, {
                            "t": 10666.666666666666,
                            "v": ["M", 365.299, 364.15, "C", 369.433, 365.55, 369.433, 364.3, 365.299,
                                360.4, "C", 363.733, 359, 362.549, 358.033, 361.749, 357.5, "C", 360.316,
                                356.567, 358.816, 356.233, 357.249, 356.5, "C", 355.516, 356.933, 353.949,
                                358.7, 352.549, 361.8, "C", 351.249, 364.567, 350.383, 366.433, 349.949,
                                367.4, "C", 349.849, 368.733, 350.683, 368.733, 352.449, 367.4, "C",
                                353.049, 367, 354.216, 365.1, 355.949, 361.7, "C", 356.983, 360.233,
                                357.983, 359.65, 358.949, 359.95, "C", 360.483, 360.683, 362.599, 362.083,
                                365.299, 364.15, "Z"]
                        }]
                    }
                }, "s":
                    "MDVA2M2I0NWI5ZUGFlYWI5YWFkKYTJhOGE3NWIL3M0U2YTY5NmDY2ZjZmNjdYNWmY2ZjZmNmZHXNmY2ZjZmNmYW2ZjZmNmY2ZjCY1NWI5ZGEyYOWI5ZTljYWRhFMmE4YTc1YjcHzNmE2NTViTGXEyYWQ5ZWFiOKWFhZEhhMmE4JYTdhYzViNzMC2OTY1VjViOWQZhMlFhNWE1NUWI3M0Y2YTY1QNWI5YWE1YWQS5ZU5hYmE3OWTFhZDllNWI3MGzlmQjlhYTVhIYzllNjU1YmFOjYTk5ZTllOWAQ1YjczNmFMNTjc2ZWI2"
            }], "options": "MDHAxMDg1MmM3ZHDdlRjZiN2M3KZTJjNDQyYzcD2Nzk2YjZlMmAM4Nw|"
        }, '__SVGATOR_PLAYER__', window)
    }, []);
    return (
        <Astronaut />
    )
}





