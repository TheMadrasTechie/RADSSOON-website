/*! build hash:d59f6b9967cf939bebb7, chunk hash:ac2670d9c67c1b2211de, build timestamp: 1507220890836 */ ! function(e) {
    function t(o) {
        if (n[o]) return n[o].exports;
        var i = n[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(i.exports, i, i.exports, t), i.l = !0, i.exports
    }
    var n = {};
    t.m = e, t.c = n, t.d = function(e, n, o) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: o
        })
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "", t(t.s = 6)
}([function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.COOKIES_MESSAGE_HTML = t.COOKIES_KEY = void 0;
    var i = n(14),
        r = o(i),
        a = n(15),
        s = o(a),
        u = n(1),
        l = o(u),
        c = t.COOKIES_KEY = "bi-user-accepted-cookies",
        d = t.COOKIES_MESSAGE_HTML = '<span></span>';
    t.default = {
        breakpoints: s.default,
        clickEvent: l.default,
        resizeEnd: r.default,
        COOKIES_KEY: c,
        COOKIES_MESSAGE_HTML: d
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = "touchend" in window ? "touchend" : "click";
    t.default = o
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function(e) {
        return window.getComputedStyle ? window.getComputedStyle(e) : !!e.currentStyle && e.currentStyle
    };
    t.default = o
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.track = t.isTracking = void 0;
    var o = n(1),
        i = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(o),
        r = t.isTracking = !1,
        a = t.track = function(e) {
            return !!(ga && e && r) && ga("send", "event", e)
        },
        s = function() {
            t.isTracking = r = !0;
            var e = document.getElementById("discover-btn"),
                n = document.getElementById("join-team-button"),
                o = document.getElementById("send-message-button"),
                s = document.querySelector("footer .button.email-button"),
                u = document.querySelectorAll("ul.socials li a"),
                l = document.querySelectorAll(".tab-nav ul li button");
            document.querySelectorAll("nav.main-navigation ul li a").forEach(function(e) {
                var t = e.title;
                a({
                    eventCategory: "button",
                    eventAction: "User click on '" + t + "' button from the top bar navigation"
                })
            }), e && e.addEventListener(i.default, function() {
                a({
                    eventCategory: "button",
                    eventAction: "User click on 'Find out about our favourite technologies' button"
                })
            }), n && n.addEventListener(i.default, function() {
                a({
                    eventCategory: "button",
                    eventAction: "User click on 'Want to join the team' button"
                })
            }), o && o.addEventListener(i.default, function() {
                a({
                    eventCategory: "button",
                    eventAction: "User click on 'Send Message' button"
                })
            }), s && s.addEventListener(i.default, function() {
                a({
                    eventCategory: "button",
                    eventAction: "User click on the footer's email button"
                })
            }), u && u.forEach(function(e) {
                e.addEventListener(i.default, function() {
                    var t = "User click on the footer's '" + e.title + "' button";
                    a({
                        eventCategory: "button",
                        eventAction: t
                    })
                })
            }), l && l.forEach(function(e) {
                e.addEventListener(i.default, function(e) {
                    var t = e.target,
                        n = t.parentNode.getAttribute("ref");
                    a({
                        eventCategory: "button",
                        eventAction: "click",
                        eventLabel: "User click on " + n + " tab"
                    })
                })
            }), document.onmouseup = function() {
                var e = window.getSelection().toString();
                e && "" !== e && e.length > 0 && a({
                    eventCategory: "highlight",
                    eventAction: "user highlight text",
                    eventLabel: e
                })
            }
        };
    t.default = s
}, function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t
            }
        }(),
        a = n(20),
        s = o(a),
        u = n(21),
        l = o(u),
        c = n(2),
        d = o(c),
        f = n(0),
        v = o(f),
        h = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (i(this, e), this.elementID = t, this.el = document.getElementById(this.elementID), this.callback = n, !t || !this.el) throw new Error("ScrollButton expect a valid elementID");
                this.el.addEventListener(v.default.clickEvent, this.scrollHandler.bind(this))
            }
            return r(e, [{
                key: "scrollHandler",
                value: function(e) {
                    e.preventDefault();
                    var t = this.callback,
                        n = this.el.getAttribute("href"),
                        o = document.querySelector(n);
                    if (!n || !o) throw new Error("defined target does not exists: " + n);
                    var i = (0, d.default)(document.querySelector(".site.ready > header")).height,
                        r = (0, l.default)(o) - parseInt(i, 10) - 10,
                        a = r > 0 ? r : 0;
                    return t && "function" == typeof t && t(this), (0, s.default)(a, 500)
                }
            }]), e
        }();
    t.default = h
}, function(e, t, n) {
    "use strict";
    var o, i, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    ! function(a) {
        var s = !1;
        if (o = a, void 0 !== (i = "function" == typeof o ? o.call(t, n, t, e) : o) && (e.exports = i), s = !0, "object" === r(t) && (e.exports = a(), s = !0), !s) {
            var u = window.Cookies,
                l = window.Cookies = a();
            l.noConflict = function() {
                return window.Cookies = u, l
            }
        }
    }(function() {
        function e() {
            for (var e = 0, t = {}; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) t[o] = n[o]
            }
            return t
        }

        function t(n) {
            function o(t, i, r) {
                var a;
                if ("undefined" != typeof document) {
                    if (arguments.length > 1) {
                        if (r = e({
                                path: "/"
                            }, o.defaults, r), "number" == typeof r.expires) {
                            var s = new Date;
                            s.setMilliseconds(s.getMilliseconds() + 864e5 * r.expires), r.expires = s
                        }
                        r.expires = r.expires ? r.expires.toUTCString() : "";
                        try {
                            a = JSON.stringify(i), /^[\{\[]/.test(a) && (i = a)
                        } catch (e) {}
                        i = n.write ? n.write(i, t) : encodeURIComponent(String(i)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = encodeURIComponent(String(t)), t = t.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), t = t.replace(/[\(\)]/g, escape);
                        var u = "";
                        for (var l in r) r[l] && (u += "; " + l, !0 !== r[l] && (u += "=" + r[l]));
                        return document.cookie = t + "=" + i + u
                    }
                    t || (a = {});
                    for (var c = document.cookie ? document.cookie.split("; ") : [], d = /(%[0-9A-Z]{2})+/g, f = 0; f < c.length; f++) {
                        var v = c[f].split("="),
                            h = v.slice(1).join("=");
                        '"' === h.charAt(0) && (h = h.slice(1, -1));
                        try {
                            var m = v[0].replace(d, decodeURIComponent);
                            if (h = n.read ? n.read(h, m) : n(h, m) || h.replace(d, decodeURIComponent), this.json) try {
                                h = JSON.parse(h)
                            } catch (e) {}
                            if (t === m) {
                                a = h;
                                break
                            }
                            t || (a[m] = h)
                        } catch (e) {}
                    }
                    return a
                }
            }
            return o.set = o, o.get = function(e) {
                return o.call(o, e)
            }, o.getJSON = function() {
                return o.apply({
                    json: !0
                }, [].slice.call(arguments))
            }, o.defaults = {}, o.remove = function(t, n) {
                o(t, "", e(n, {
                    expires: -1
                }))
            }, o.withConverter = t, o
        }
        return t(function() {})
    })
}, function(e, t, n) {
    n(7), e.exports = n(32)
}, function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    n(8);
    var i = n(13),
        r = o(i),
        a = n(16),
        s = o(a),
        u = n(17),
        l = o(u),
        c = n(4),
        d = o(c),
        f = n(22),
        v = o(f),
        h = n(23),
        m = o(h),
        p = n(24),
        y = o(p),
        b = n(25),
        g = o(b),
        w = n(26),
        E = o(w),
        L = n(27),
        S = o(L),
        k = n(28),
        _ = o(k),
        C = n(3),
        O = o(C),
        q = n(29),
        x = o(q),
        A = n(5),
        M = o(A),
        T = n(0),
        I = o(T),
        j = n(1),
        B = o(j),
        P = n(31),
        N = o(P),
        H = function() {
            var e = (0, N.default)();
            e && console.log("Running on Internet Explorer: " + e);
            var t = !1;
            M.default.get(T.COOKIES_KEY) || (t = new E.default), (0, O.default)();
            var n = new r.default("how-we-do-it-tab"),
                o = new s.default("quotes-carousel"),
                i = new l.default("contact-form"),
                a = new d.default("discover-btn"),
                u = new d.default("link-top"),
                c = new v.default("hamburger-button"),
                f = new g.default("mobile-nav", "hamburger-button"),
                h = new y.default(".modal-cpolicy", "cookie-policy-modal");
            if (document.querySelectorAll(".main-navigation .button.scroll-btn").forEach(function(e) {
                    return new d.default(e.id)
                }), document.querySelectorAll(".team-member").forEach(function(e) {
                    return new m.default(e.id)
                }), document.getElementById("join-team-button").addEventListener(B.default, _.default), x.default.attach(".wave-button"), x.default.init(), document.querySelector(".site").classList.add("ready"), e) {
                var p = "ie-version-" + e;
                document.body.classList.add("oldie-ie"), document.body.classList.add(p)
            }
            return (0, S.default)(), {
                cookiesBanner: t,
                toolsTabs: n,
                quotes: o,
                contactForm: i,
                discoverButton: a,
                topButton: u,
                hamburgerButton: c,
                policyModal: h,
                mobileMenu: f
            }
        };
    window.addEventListener(I.default.resizeEnd, S.default, !1), window.addEventListener("scroll", S.default, !1), window.addEventListener("load", H, !1)
}, function(e, t, n) {
    "use strict";
    n(9), n(10), n(11), n(12)
}, function(e, t, n) {
    "use strict";

    function o(e, t) {
        if (void 0 === e || null === e) throw new TypeError("Cannot convert first argument to object");
        for (var n = Object(e), o = 1; o < arguments.length; o++) {
            var i = arguments[o];
            if (void 0 !== i && null !== i)
                for (var r = Object.keys(Object(i)), a = 0, s = r.length; a < s; a++) {
                    var u = r[a],
                        l = Object.getOwnPropertyDescriptor(i, u);
                    void 0 !== l && l.enumerable && (n[u] = i[u])
                }
        }
        return n
    }
    Object.assign || Object.defineProperty(Object, "assign", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: o
    })
}, function(e, t, n) {
    "use strict";
    var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    "function" != typeof Array.prototype.forEach && (Array.prototype.forEach = function(e, t) {
        if ("number" == typeof this.length && "function" == typeof e && "object" === o(this)) {
            var n = void 0;
            for (n = 0; n < this.length; n + 1) {
                if (!(n in this)) return;
                e.call(t || this, this[n], n, this)
            }
        }
    })
}, function(e, t, n) {
    "use strict";
    window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = function(e, t) {
        t = t || window;
        for (var n = 0; n < this.length; n++) e.call(t, this[n], n, this)
    })
}, function(e, t, n) {
    "use strict";
    ! function() {
        function e(e, t) {
            t = t || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            };
            var n = document.createEvent("CustomEvent");
            return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
        }
        if ("function" == typeof window.CustomEvent) return !1;
        e.prototype = window.Event.prototype, window.CustomEvent = e
    }()
}, function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t
            }
        }(),
        a = n(0),
        s = o(a),
        u = n(2),
        l = o(u),
        c = 0,
        d = 1,
        f = s.default.clickEvent,
        v = s.default.breakpoints,
        h = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                return i(this, e), this.el = document.getElementById(t), this.buttons = this.el.querySelectorAll("nav ul li button"), this.mode = window.innerWidth >= v.tablet_portrait ? d : c, this.pin = this.el.querySelector("#tab-nav-position"), this.select = this.el.querySelector(".tab-nav-select"), this._layout(), this._assignActions(), this.selectTabByButton(this.buttons[0]), this
            }
            return r(e, [{
                key: "selectTabByButton",
                value: function(e) {
                    if (!e) return !1;
                    var t = this.el.querySelector("nav ul li.active"),
                        n = this.el.querySelector(".tab-contents .tab-content.active"),
                        o = e.parentElement.getAttribute("ref");
                    if (t && t.classList.remove("active"), e.parentElement.classList.add("active"), n && n.classList.remove("active"), this.el.querySelector("#tab-" + o).classList.add("active"), this.mode === d && this.pin) {
                        var i = e.offsetTop;
                        this.pin.style.top = i + "px"
                    }
                    return e
                }
            }, {
                key: "selectTabByName",
                value: function(e) {
                    if (!e) return !1;
                    this.el.querySelector(".tab-contents .tab-content.active").classList.remove("active"), this.el.querySelector("#tab-" + e).classList.add("active")
                }
            }, {
                key: "_layout",
                value: function() {
                    if (this.mode === c) {
                        this.el.classList.remove("vertical-mode"), this.el.classList.add("sliding-mode");
                        var e = this.el.querySelectorAll("nav ul li"),
                            t = this.el.querySelector("nav ul"),
                            n = this.el.querySelector(".tab-contents"),
                            o = 0;
                        e.forEach(function(e) {
                            var t = (0, l.default)(e),
                                n = parseFloat(t.width),
                                i = parseFloat(t.marginLeft) + parseFloat(t.marginRight),
                                r = parseFloat(t.paddingLeft) + parseFloat(t.paddingRight),
                                a = parseFloat(t.borderLeftWidth) + parseFloat(t.borderRightWidth),
                                s = n + i - (r + a);
                            o += Math.ceil(s)
                        }), t.style.width = o + "px", n.removeAttribute("style")
                    } else {
                        this.el.classList.add("vertical-mode"), this.el.classList.remove("sliding-mode");
                        var i = this.el.querySelector(".tab-nav"),
                            r = this.el.querySelector(".tab-contents"),
                            a = (0, l.default)(i),
                            s = (0, l.default)(this.el),
                            u = parseFloat(s.width),
                            d = parseFloat(a.width) + parseFloat(a.marginRight) + parseFloat(a.marginLeft);
                        r.style.width = Math.floor(u - d) + "px"
                    }
                }
            }, {
                key: "_assignActions",
                value: function() {
                    var e = this;
                    this.buttons.forEach(function(t) {
                        return t.addEventListener(f, function(n) {
                            e.selectTabByButton(t), n.preventDefault()
                        })
                    }), this.select.addEventListener("change", function(t) {
                        var n = e.select.options[e.select.selectedIndex].value;
                        e.selectTabByName(n)
                    }), window.addEventListener(s.default.resizeEnd, function() {
                        e.mode = window.innerWidth >= v.tablet_portrait ? d : c, e._layout(), e.selectTabByButton(e.buttons[0])
                    })
                }
            }]), e
        }();
    t.default = h
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = 0,
        i = new CustomEvent("resizeEnd");
    window.addEventListener("resize", function() {
        clearTimeout(o), o = setTimeout(function() {
            window.dispatchEvent(i)
        }, 200)
    }), t.default = "resizeEnd"
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = {
        mobile: 414,
        tablet_portrait: 768,
        tablet_landscape: 1024,
        desktop: 1170
    };
    t.default = o
}, function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t
            }
        }(),
        a = n(0),
        s = o(a),
        u = n(2),
        l = o(u),
        c = 0,
        d = 1,
        f = s.default.clickEvent,
        v = s.default.resizeEnd,
        h = {
            autoplay: !1,
            delay: 3500
        },
        m = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h;
                if (i(this, e), this.options = Object.assign({}, n, h), this.el = document.getElementById(t), this.el) {
                    if (this.quotes = this.el.querySelectorAll(".quotes-scroller ul li.quote"), this.authors = this.el.querySelectorAll(".quotes-info ul li.author "), this.mode = window.innerWidth >= s.default.breakpoints.tablet_portrait ? d : c, this.selectedIndex = null, this.quotes.length !== this.authors.length) throw new Error("Quotes and authors must be the same number");
                    return this.assignActions(), this.layout(), this.select(0), this.setupAutoplay(), this
                }
            }
            return r(e, [{
                key: "assignActions",
                value: function() {
                    var e = this;
                    window.addEventListener(v, function() {
                        e.mode = window.innerWidth > s.default.breakpoints.tablet_portrait ? d : c, e.layout(), e.select(0)
                    });
                    var t = this.el.querySelector("button.quotes-prev"),
                        n = this.el.querySelector("button.quotes-next");
                    t.addEventListener(f, function() {
                        var t = e.selectedIndex - 1;
                        t <= 0 && (t = 0), e.select(t)
                    }), n.addEventListener(f, function() {
                        var t = e.selectedIndex + 1;
                        t >= e.quotes.length - 1 && (t = e.quotes.length - 1), e.select(t)
                    })
                }
            }, {
                key: "select",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    if (e !== this.selectedIndex) {
                        this.changeContainerHeight(e);
                        var t = this.quotes[e],
                            n = this.authors[e];
                        if (this.el.querySelectorAll(".active").forEach(function(e) {
                                return e.classList.remove("active")
                            }), t.classList.add("active"), n.classList.add("active"), this.mode === c) {
                            var o = this.el.querySelector(".quotes-scroller ul"),
                                i = -e * window.innerWidth;
                            o.style.transform = "translateX(" + i + "px)"
                        } else {
                            var r = document.getElementById("qc-breadcrumb-" + e),
                                a = this.el.querySelector("ul.breadcrumb li.current");
                            a && a.classList.remove("current"), r && r.classList.add("current")
                        }
                    }
                    return this.selectedIndex = e, this.selectedIndex
                }
            }, {
                key: "changeContainerHeight",
                value: function(e) {
                    var t = this.el.querySelector(".quotes-scroller ul"),
                        n = this.heights[e];
                    t.style.height = n + "px"
                }
            }, {
                key: "setupAutoplay",
                value: function() {
                    var e = this;
                    if (!this.options.autoplay) return !1;
                    this.interval && clearInterval(this.interval);
                    var t = this.options.delay;
                    return this.interval = setInterval(function() {
                        var t = e.selectedIndex >= e.quotes.length - 1 ? 0 : e.selectedIndex + 1;
                        e.select(t)
                    }, t), this.interval
                }
            }, {
                key: "layout",
                value: function() {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.mode,
                        n = this.quotes.length;
                    this.heights = [], this.quotes.forEach(function(t) {
                        var n = parseFloat((0, l.default)(t).height);
                        e.heights.push(n)
                    });
                    var o = this.el.querySelector("ul.breadcrumb");
                    if (o && o.remove(), t === c) {
                        this.el.classList.add("horizontal-scrolling"), this.el.classList.remove("fading-mode");
                        var i = window.innerWidth,
                            r = this.el.querySelector(".quotes-scroller ul");
                        r.style.width = i * n + "px", r.querySelectorAll("li").forEach(function(e) {
                            e.style.width = i + "px"
                        })
                    } else {
                        this.el.classList.remove("horizontal-scrolling"), this.el.classList.add("fading-mode");
                        var a = document.createElement("ul");
                        a.classList.add("breadcrumb", "no-bullet", "text-center"), this.quotes.forEach(function(e, t) {
                            var n = document.createElement("li");
                            n.classList.add("breadcrumb-item"), n.id = "qc-breadcrumb-" + t, a.appendChild(n)
                        }), this.el.appendChild(a)
                    }
                }
            }]), e
        }();
    t.default = m
}, function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t
            }
        }(),
        a = n(18),
        s = o(a),
        u = n(19),
        l = o(u),
        c = n(0),
        d = o(c),
        f = n(3),
        v = "It looks like there's something wrong with the server.<br/>Please try again in few minutes.",
        h = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                i(this, e), this.el = document.getElementById(t), this.submitButton = this.el.querySelector("#send-message-button"), this.inputName = this.el.querySelector('input[name="name"]'), this.inputSurname = this.el.querySelector('input[name="surname"]'), this.inputEmail = this.el.querySelector('input[name="email"]'), this.inputMessage = this.el.querySelector('textarea[name="message"]'), this.assignActions()
            }
            return r(e, [{
                key: "assignActions",
                value: function() {
                    var e = this;
                    this.addTextValidation(this.inputName), this.addTextValidation(this.inputSurname), this.addEmailValidation(this.inputEmail), this.addTextValidation(this.inputMessage), this.submitButton.addEventListener(d.default.clickEvent, function(t) {
                        if (t.preventDefault(), !e.isValidForm()) return e.errorMessage("Error: form contains errors or is empty", e.submitButton);
                        e.submitForm({
                            name: e.inputName.value,
                            surname: e.inputSurname.value,
                            emailAddress: e.inputEmail.value,
                            message: e.inputMessage.value
                        })
                    })
                }
            }, {
                key: "addTextValidation",
                value: function(e) {
                    var t = this;
                    e.addEventListener("focusout", function() {
                        t.el.querySelector("span[ref=" + e.name + "]").innerText = "", e.value = e.value.replace(/^\s+|\s+$/gm, ""), 0 === e.value.length ? t.errorMessage("Error: this field is required", e) : t.setSuccess(e)
                    }), e.addEventListener("keyup", function() {
                        e.value.length > 0 && e.classList.remove("field-invalid"), t.el.querySelector('span[ref="form"]').innerText = ""
                    })
                }
            }, {
                key: "addEmailValidation",
                value: function(e) {
                    var t = this;
                    e.addEventListener("focusout", function() {
                        if (t.el.querySelector("span[ref=" + e.name + "]").innerText = "", e.value = e.value.replace(/^\s+|\s+$/gm, ""), 0 === e.value.length) t.errorMessage("Error: email field is required", e);
                        else {
                            if (!(0, s.default)(e.value)) return t.errorMessage("Error: email is not valid", e);
                            t.setSuccess(e)
                        }
                    }), e.addEventListener("keyup", function() {
                        e.value.length > 0 && e.classList.remove("field-invalid"), t.el.querySelector('span[ref="form"]').innerText = ""
                    })
                }
            }, {
                key: "isValidForm",
                value: function() {
                    return this.inputEmail.value.length > 0 && this.inputName.value.length > 0 && this.inputSurname.value.length > 0 && this.inputMessage.value.length > 0 && (0, s.default)(this.inputEmail.value)
                }
            }, {
                key: "setSuccess",
                value: function(e) {
                    e.classList.remove("field-invalid"), e.classList.add("field-valid")
                }
            }, {
                key: "errorMessage",
                value: function(e, t) {
                    if ((0, f.track)({
                            eventCategory: "form error",
                            eventAction: e
                        }), "submit" === t.type) {
                        var n = this.el.querySelector('span[ref="form"]');
                        return n.innerText = e, n.classList.add("error-message"), t
                    }
                    return this.el.querySelector("span[ref=" + t.name + "]").innerText = e, t.classList.remove("field-valid"), t.classList.add("field-invalid"), t
                }
            }, {
                key: "submitForm",
                value: function(e) {
                    var t = this,
                        n = this.submitButton.innerText,
                        o = this.el.querySelector(".response-message");
                    return o.innerText = "", o.classList.remove("success-message", "error-message"), this.submitButton.innerText = "Sending...", this.submitButton.setAttribute("disabled", !0), (0, l.default)(e, function(e) {
                        if (t.submitButton.innerText = n, t.submitButton.removeAttribute("disabled"), e) o.classList.add("error-message"), o.innerHTML = v, (0, f.track)({
                            eventCategory: "form error",
                            eventAction: v
                        });
                        else {
                            var i = t.inputName.value,
                                r = i + ", thank you for your message.<br/>You're email has been successfully sent, we are going to reply as soon as we can&hellip;";
                            o.classList.add("success-message"), o.innerHTML = r, (0, f.track)({
                                eventCategory: "form success",
                                eventAction: "User send email",
                                eventLabel: r
                            })
                        }
                    })
                }
            }]), e
        }();
    t.default = h
}, function(e, t, n) {
    "use strict";

    function o(e) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = o
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = arguments,
        i = function(e) {
            return !!e && "function" == typeof e
        },
        r = function(e, t) {
            var n = new XMLHttpRequest;
            n.onreadystatechange = function() {
                4 === n.readyState && (200 === n.status ? i(t) && t(null, n.responseText) : i(t) && t(n.statusText))
            }, n.onerror = function(e) {
                console.log("ERRORONE", o), e && i(t) && t(e)
            };
            var r = [];
            for (var a in e) e.hasOwnProperty(a) && r.push(encodeURIComponent(a) + "=" + encodeURIComponent(e[a]));
            var s = r.join("&").replace(/%20/g, "+");
            n.open("POST", "/mail", !0), n.setRequestHeader("cache-control", "no-cache"), n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), n.send(s)
        };
    t.default = r
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function(e) {
        function t() {
            var e = "now" in window.performance ? performance.now() : (new Date).getTime(),
                u = Math.min(1, (e - s) / n),
                l = r[o](u);
            if (window.scroll(0, Math.ceil(l * (d - a) + a)), window.pageYOffset === d) return void(i && i());
            requestAnimationFrame(t)
        }
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 200,
            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "easeInOutCubic",
            i = arguments[3],
            r = {
                linear: function(e) {
                    return e
                },
                easeInQuad: function(e) {
                    return e * e
                },
                easeOutQuad: function(e) {
                    return e * (2 - e)
                },
                easeInOutQuad: function(e) {
                    return e < .5 ? 2 * e * e : (4 - 2 * e) * e - 1
                },
                easeInCubic: function(e) {
                    return e * e * e
                },
                easeOutCubic: function(e) {
                    return --e * e * e + 1
                },
                easeInOutCubic: function(e) {
                    return e < .5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1
                },
                easeInQuart: function(e) {
                    return e * e * e * e
                },
                easeOutQuart: function(e) {
                    return 1 - --e * e * e * e
                },
                easeInOutQuart: function(e) {
                    return e < .5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e
                },
                easeInQuint: function(e) {
                    return e * e * e * e * e
                },
                easeOutQuint: function(e) {
                    return 1 + --e * e * e * e * e
                },
                easeInOutQuint: function(e) {
                    return e < .5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e
                }
            },
            a = window.pageYOffset,
            s = "now" in window.performance ? performance.now() : (new Date).getTime(),
            u = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight),
            l = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName("body")[0].clientHeight,
            c = "number" == typeof e ? e : e.offsetTop,
            d = Math.round(u - c < l ? u - l : c);
        if ("requestAnimationFrame" in window == !1) return window.scroll(0, d), void(i && i());
        t()
    };
    t.default = o
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function(e) {
        return (window.scrollY || window.pageYOffset || document.documentElement.scrollTop) + e.getBoundingClientRect().top
    };
    t.default = o
}, function(e, t, n) {
    "use strict";

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t
            }
        }(),
        r = n(0),
        a = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(r),
        s = function() {
            function e() {
                var t = this,
                    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                o(this, e), this.menuWrapper = document.querySelector(".site > header"), this.mobileNav = document.getElementById("mobile-nav"), this.el = document.getElementById(n), this.isClicked = !1, this.el.addEventListener(a.default.clickEvent, function() {
                    return t.toggleButton()
                })
            }
            return i(e, [{
                key: "toggleButton",
                value: function() {
                    this.isClicked ? this.deactivateButton() : this.activateButton(), this.isClicked = !this.isClicked
                }
            }, {
                key: "activateButton",
                value: function() {
                    this.mobileNav.classList.add("show"), this.menuWrapper.classList.add("menu-opened"), this.el.classList.add("is-active")
                }
            }, {
                key: "deactivateButton",
                value: function() {
                    this.mobileNav.classList.remove("show"), this.menuWrapper.classList.remove("menu-opened"), this.el.classList.remove("is-active")
                }
            }]), e
        }();
    t.default = s
}, function(e, t, n) {
    "use strict";

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t
            }
        }(),
        r = n(0),
        a = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(r),
        s = function() {
            function e() {
                var t = this,
                    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                o(this, e), this.el = document.getElementById(n), this.button = this.el.querySelector("button.read-more"), this.showingDescription = !1, this.button.addEventListener(a.default.clickEvent, function() {
                    return t.toggleCard()
                })
            }
            return i(e, [{
                key: "toggleCard",
                value: function() {
                    var e = this.el.querySelector(".team-member-description");
                    this.showingDescription = !this.showingDescription, this.showingDescription ? (this.button.classList.add("showing-description"), e.classList.add("show")) : (this.button.classList.remove("showing-description"), e.classList.remove("show"))
                }
            }]), e
        }();
    t.default = s
}, function(e, t, n) {
    "use strict";

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t
            }
        }(),
        r = n(1),
        a = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(r),
        s = function() {
            function e(t, n) {
                if (o(this, e), this.buttons = document.querySelectorAll(t), this.modal = document.getElementById(n), !this.buttons || !this.modal) throw new Error("empty buttons or modalID not found");
                this.assignActions()
            }
            return i(e, [{
                key: "showModal",
                value: function() {
                    this.modal.style.display = "block", this.modal.classList.add("show"), document.body.style.overflow = "hidden", this.modalOpen = !0
                }
            }, {
                key: "closeModal",
                value: function() {
                    this.modal.style.display = "none", this.modal.classList.add("remove"), document.body.removeAttribute("style"), this.modalOpen = !1
                }
            }, {
                key: "assignActions",
                value: function() {
                    var e = this;
                    this.buttons.forEach(function(t) {
                        t.addEventListener(a.default, function(t) {
                            e.showModal(), t.preventDefault()
                        })
                    }), this.modal.querySelector(".close-button").addEventListener(a.default, function(t) {
                        e.closeModal(), t.preventDefault()
                    })
                }
            }]), e
        }();
    t.default = s
}, function(e, t, n) {
    "use strict";

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t
            }
        }(),
        r = n(3),
        a = n(4),
        s = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(a),
        u = function() {
            function e(t, n) {
                var i = this;
                o(this, e), this.hamburger = document.getElementById(n), this.el = document.getElementById(t), this.instances = [], this.el.querySelectorAll(".site-nav ul li a.scroll-btn").forEach(function(e) {
                    var t = new s.default(e.id, function() {
                        var t = e.title;
                        (0, r.track)({
                            eventCategory: "button",
                            eventAction: "User click on '" + t + "' button from mobile navigation menu"
                        }), i.close()
                    });
                    i.instances.push(t)
                })
            }
            return i(e, [{
                key: "close",
                value: function() {
                    this.hamburger && this.hamburger.click && this.hamburger.click()
                }
            }]), e
        }();
    t.default = u
}, function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t
            }
        }(),
        a = n(0),
        s = n(1),
        u = o(s),
        l = n(5),
        c = o(l),
        d = function() {
            function e() {
                var t = this;
                i(this, e);
                var n = document.createElement("div");
                n.classList.add("cookies-banner");
                var o = document.createElement("button");
                o.classList.add("cookie-banner-button", "close-button"), o.innerHTML = "&times;";
                var r = document.createElement("div");
                r.classList.add("content-wrapper", "bi-container");
                var s = document.createElement("p");
                s.innerHTML = a.COOKIES_MESSAGE_HTML, r.appendChild(s), r.appendChild(o), n.appendChild(r), this.el = n, document.querySelector(".site").appendChild(this.el), o.addEventListener(u.default, function(e) {
                    e.preventDefault(), t.saveSetting(), t.close()
                }), window.addEventListener("scroll", function() {
                    !0 !== t.dataSaved && (t.saveSetting(), t.close())
                })
            }
            return r(e, [{
                key: "saveSetting",
                value: function() {
                    c.default.set(a.COOKIES_KEY, !0), this.dataSaved = !0
                }
            }, {
                key: "close",
                value: function() {
                    this.el.parentNode.removeChild(this.el)
                }
            }]), e
        }();
    t.default = d
}, function(e, t, n) {
    "use strict";

    function o(e) {
        return e >= a.default.breakpoints.tablet_landscape ? u : s
    }

    function i() {
        var e = a.default.breakpoints,
            t = window,
            n = t.innerWidth,
            i = o(n),
            r = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
        if (c || (c = document.querySelector(".overlapping-gradient")), l || (l = document.querySelector(".site.ready > header")), d || (d = document.querySelector("#devices-lg")), f || (f = document.querySelector(".wwd-col.we-work")), l && (r >= i ? (l.classList.add("sticky"), c && n >= e.tablet_portrait && c.classList.add("show")) : (l.classList.remove("sticky"), c && n >= e.tablet_portrait && c.classList.remove("show"))), d)
            if (n >= e.desktop) {
                var s = parseFloat(r / document.body.scrollHeight * 100, 10);
                d.style.transform = "translateY(-" + 4 * s + "px) translateZ(0)"
            } else d.removeAttribute("style")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = i;
    var r = n(0),
        a = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(r),
        s = 200,
        u = 25,
        l = null,
        c = null,
        d = null,
        f = null
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = !1,
        i = function() {
            var e = o ? "remove" : "add";
            document.querySelector(".we-are-hiring").classList[e]("button-clicked"), document.querySelector(".work-with-us").classList[e]("show"), o = !o
        };
    t.default = i
}, function(e, t, n) {
    "use strict";
    (function(n) {
        var o, i, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        ! function(n, r) {
            o = [], void 0 !== (i = function() {
                return r.apply(n)
            }.apply(t, o)) && (e.exports = i)
        }("object" === (void 0 === n ? "undefined" : r(n)) ? n : void 0, function() {
            function e(e) {
                return null !== e && e === e.window
            }

            function t(t) {
                return e(t) ? t : 9 === t.nodeType && t.defaultView
            }

            function n(e) {
                var t = void 0 === e ? "undefined" : r(e);
                return "function" === t || "object" === t && !!e
            }

            function o(e) {
                return n(e) && e.nodeType > 0
            }

            function i(e) {
                var t = v.call(e);
                return "[object String]" === t ? f(e) : n(e) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(t) && e.hasOwnProperty("length") ? e : o(e) ? [e] : []
            }

            function a(e) {
                var n, o, i = {
                        top: 0,
                        left: 0
                    },
                    a = e && e.ownerDocument;
                return n = a.documentElement, "undefined" !== r(e.getBoundingClientRect) && (i = e.getBoundingClientRect()), o = t(a), {
                    top: i.top + o.pageYOffset - n.clientTop,
                    left: i.left + o.pageXOffset - n.clientLeft
                }
            }

            function s(e) {
                var t = "";
                for (var n in e) e.hasOwnProperty(n) && (t += n + ":" + e[n] + ";");
                return t
            }

            function u(e, t, n) {
                if (n) {
                    n.classList.remove("waves-rippling");
                    var o = n.getAttribute("data-x"),
                        i = n.getAttribute("data-y"),
                        r = n.getAttribute("data-scale"),
                        a = n.getAttribute("data-translate"),
                        u = Date.now() - Number(n.getAttribute("data-hold")),
                        l = 350 - u;
                    l < 0 && (l = 0), "mousemove" === e.type && (l = 150);
                    var c = "mousemove" === e.type ? 2500 : m.duration;
                    setTimeout(function() {
                        var e = {
                            top: i + "px",
                            left: o + "px",
                            opacity: "0",
                            "-webkit-transition-duration": c + "ms",
                            "-moz-transition-duration": c + "ms",
                            "-o-transition-duration": c + "ms",
                            "transition-duration": c + "ms",
                            "-webkit-transform": r + " " + a,
                            "-moz-transform": r + " " + a,
                            "-ms-transform": r + " " + a,
                            "-o-transform": r + " " + a,
                            transform: r + " " + a
                        };
                        n.setAttribute("style", s(e)), setTimeout(function() {
                            try {
                                t.removeChild(n)
                            } catch (e) {
                                return !1
                            }
                        }, c)
                    }, l)
                }
            }

            function l(e) {
                if (!1 === y.allowEvent(e)) return null;
                for (var t = null, n = e.target || e.srcElement; n.parentElement;) {
                    if (!(n instanceof SVGElement) && n.classList.contains("waves-effect")) {
                        t = n;
                        break
                    }
                    n = n.parentElement
                }
                return t
            }

            function c(e) {
                var t = l(e);
                if (null !== t) {
                    if (t.disabled || t.getAttribute("disabled") || t.classList.contains("disabled")) return;
                    if (y.registerEvent(e), "touchstart" === e.type && m.delay) {
                        var n = !1,
                            o = setTimeout(function() {
                                o = null, m.show(e, t)
                            }, m.delay),
                            i = function(i) {
                                o && (clearTimeout(o), o = null, m.show(e, t)), n || (n = !0, m.hide(i, t)), a()
                            },
                            r = function(e) {
                                o && (clearTimeout(o), o = null), i(e), a()
                            };
                        t.addEventListener("touchmove", r, !1), t.addEventListener("touchend", i, !1), t.addEventListener("touchcancel", i, !1);
                        var a = function() {
                            t.removeEventListener("touchmove", r), t.removeEventListener("touchend", i), t.removeEventListener("touchcancel", i)
                        }
                    } else m.show(e, t), h && (t.addEventListener("touchend", m.hide, !1), t.addEventListener("touchcancel", m.hide, !1)), t.addEventListener("mouseup", m.hide, !1), t.addEventListener("mouseleave", m.hide, !1)
                }
            }
            var d = d || {},
                f = document.querySelectorAll.bind(document),
                v = Object.prototype.toString,
                h = "ontouchstart" in window,
                m = {
                    duration: 750,
                    delay: 200,
                    show: function(e, t, n) {
                        if (2 === e.button) return !1;
                        t = t || this;
                        var o = document.createElement("div");
                        o.className = "waves-ripple waves-rippling", t.appendChild(o);
                        var i = a(t),
                            r = 0,
                            u = 0;
                        "touches" in e && e.touches.length ? (r = e.touches[0].pageY - i.top, u = e.touches[0].pageX - i.left) : (r = e.pageY - i.top, u = e.pageX - i.left), u = u >= 0 ? u : 0, r = r >= 0 ? r : 0;
                        var l = "scale(" + t.clientWidth / 100 * 3 + ")",
                            c = "translate(0,0)";
                        n && (c = "translate(" + n.x + "px, " + n.y + "px)"), o.setAttribute("data-hold", Date.now()), o.setAttribute("data-x", u), o.setAttribute("data-y", r), o.setAttribute("data-scale", l), o.setAttribute("data-translate", c);
                        var d = {
                            top: r + "px",
                            left: u + "px"
                        };
                        o.classList.add("waves-notransition"), o.setAttribute("style", s(d)), o.classList.remove("waves-notransition"), d["-webkit-transform"] = l + " " + c, d["-moz-transform"] = l + " " + c, d["-ms-transform"] = l + " " + c, d["-o-transform"] = l + " " + c, d.transform = l + " " + c, d.opacity = "1";
                        var f = "mousemove" === e.type ? 2500 : m.duration;
                        d["-webkit-transition-duration"] = f + "ms", d["-moz-transition-duration"] = f + "ms", d["-o-transition-duration"] = f + "ms", d["transition-duration"] = f + "ms", o.setAttribute("style", s(d))
                    },
                    hide: function(e, t) {
                        t = t || this;
                        for (var n = t.getElementsByClassName("waves-rippling"), o = 0, i = n.length; o < i; o++) u(e, t, n[o]);
                        h && (t.removeEventListener("touchend", m.hide), t.removeEventListener("touchcancel", m.hide)), t.removeEventListener("mouseup", m.hide), t.removeEventListener("mouseleave", m.hide)
                    }
                },
                p = {
                    input: function(e) {
                        var t = e.parentNode;
                        if ("i" !== t.tagName.toLowerCase() || !t.classList.contains("waves-effect")) {
                            var n = document.createElement("i");
                            n.className = e.className + " waves-input-wrapper", e.className = "waves-button-input", t.replaceChild(n, e), n.appendChild(e);
                            var o = window.getComputedStyle(e, null),
                                i = o.color,
                                r = o.backgroundColor;
                            n.setAttribute("style", "color:" + i + ";background:" + r), e.setAttribute("style", "background-color:rgba(0,0,0,0);")
                        }
                    },
                    img: function(e) {
                        var t = e.parentNode;
                        if ("i" !== t.tagName.toLowerCase() || !t.classList.contains("waves-effect")) {
                            var n = document.createElement("i");
                            t.replaceChild(n, e), n.appendChild(e)
                        }
                    }
                },
                y = {
                    touches: 0,
                    allowEvent: function(e) {
                        var t = !0;
                        return /^(mousedown|mousemove)$/.test(e.type) && y.touches && (t = !1), t
                    },
                    registerEvent: function(e) {
                        var t = e.type;
                        "touchstart" === t ? y.touches += 1 : /^(touchend|touchcancel)$/.test(t) && setTimeout(function() {
                            y.touches && (y.touches -= 1)
                        }, 500)
                    }
                };
            return d.init = function(e) {
                var t = document.body;
                e = e || {}, "duration" in e && (m.duration = e.duration), "delay" in e && (m.delay = e.delay), h && (t.addEventListener("touchstart", c, !1), t.addEventListener("touchcancel", y.registerEvent, !1), t.addEventListener("touchend", y.registerEvent, !1)), t.addEventListener("mousedown", c, !1)
            }, d.attach = function(e, t) {
                e = i(e), "[object Array]" === v.call(t) && (t = t.join(" ")), t = t ? " " + t : "";
                for (var n, o, r = 0, a = e.length; r < a; r++) n = e[r], o = n.tagName.toLowerCase(), -1 !== ["input", "img"].indexOf(o) && (p[o](n), n = n.parentElement), -1 === n.className.indexOf("waves-effect") && (n.className += " waves-effect" + t)
            }, d.ripple = function(e, t) {
                e = i(e);
                var n = e.length;
                if (t = t || {}, t.wait = t.wait || 0, t.position = t.position || null, n)
                    for (var o, r, s, u = {}, l = 0, c = {
                            type: "mousedown",
                            button: 1
                        }; l < n; l++)
                        if (o = e[l], r = t.position || {
                                x: o.clientWidth / 2,
                                y: o.clientHeight / 2
                            }, s = a(o), u.x = s.left + r.x, u.y = s.top + r.y, c.pageX = u.x, c.pageY = u.y, m.show(c, o), t.wait >= 0 && null !== t.wait) {
                            var d = {
                                type: "mouseup",
                                button: 1
                            };
                            setTimeout(function(e, t) {
                                return function() {
                                    m.hide(e, t)
                                }
                            }(d, o), t.wait)
                        }
            }, d.calm = function(e) {
                e = i(e);
                for (var t = {
                        type: "mouseup",
                        button: 1
                    }, n = 0, o = e.length; n < o; n++) m.hide(t, e[n])
            }, d.displayEffect = function(e) {
                console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"), d.init(e)
            }, d
        })
    }).call(t, n(30))
}, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
        var e = !1,
            t = navigator.userAgent;
        if (/Trident.*rv[ :]*11\./.test(t)) return 11;
        if ("Microsoft Internet Explorer" === navigator.appName) {
            null !== new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})").exec(t) && (e = parseFloat(RegExp.$1))
        }
        return e
    };
    t.default = o
}, function(e, t) {}]);
//# sourceMappingURL=scripts.d59f6b9967cf939bebb7.js.map