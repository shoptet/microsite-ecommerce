!function(t) {
    function e(n) {
        if (i[n])
            return i[n].exports;
        var r = i[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(r.exports, r, r.exports, e), r.l = !0, r.exports
    }
    var i = {};
    e.m = t, e.c = i, e.d = function(t, i, n) {
        e.o(t, i) || Object.defineProperty(t, i, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, e.n = function(t) {
        var i = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return e.d(i, "a", i), i
    }, e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "../js/", e(e.s = 3)
}([function(t, e) {
    t.exports = jQuery
}, function(t, e, i) {
    (function(e) {
        var i = !1;
        (function() {
            var n = void 0 !== t && t.exports && void 0 !== e ? e : this || window;
            (n._gsQueue || (n._gsQueue = [])).push(function() {
                "use strict";
                n._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                    var n = function(t) {
                            var e,
                                i = [],
                                n = t.length;
                            for (e = 0; e !== n; i.push(t[e++]))
                                ;
                            return i
                        },
                        r = function(t, e, i) {
                            var n,
                                r,
                                s = t.cycle;
                            for (n in s)
                                r = s[n], t[n] = "function" == typeof r ? r(i, e[i]) : r[i % r.length];
                            delete t.cycle
                        },
                        s = function(t, e, n) {
                            i.call(this, t, e, n), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._repeat && this._uncache(!0), this.render = s.prototype.render
                        },
                        o = i._internals,
                        a = o.isSelector,
                        l = o.isArray,
                        c = s.prototype = i.to({}, .1, {}),
                        h = [];
                    s.version = "1.20.3", c.constructor = s, c.kill()._gc = !1, s.killTweensOf = s.killDelayedCallsTo = i.killTweensOf, s.getTweensOf = i.getTweensOf, s.lagSmoothing = i.lagSmoothing, s.ticker = i.ticker, s.render = i.render, c.invalidate = function() {
                        return this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), i.prototype.invalidate.call(this)
                    }, c.updateTo = function(t, e) {
                        var n,
                            r = this.ratio,
                            s = this.vars.immediateRender || t.immediateRender;
                        e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                        for (n in t)
                            this.vars[n] = t[n];
                        if (this._initted || s)
                            if (e)
                                this._initted = !1, s && this.render(0, !0, !0);
                            else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                                var o = this._totalTime;
                                this.render(0, !0, !1), this._initted = !1, this.render(o, !0, !1)
                            } else if (this._initted = !1, this._init(), this._time > 0 || s)
                                for (var a, l = 1 / (1 - r), c = this._firstPT; c;)
                                    a = c.s + c.c, c.c *= l, c.s = a - c.c, c = c._next;
                        return this
                    }, c.render = function(t, e, n) {
                        this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                        var r,
                            s,
                            a,
                            l,
                            c,
                            h,
                            u,
                            f,
                            p,
                            d = this._dirty ? this.totalDuration() : this._totalDuration,
                            g = this._time,
                            m = this._totalTime,
                            _ = this._cycle,
                            v = this._duration,
                            y = this._rawPrevTime;
                        if (t >= d - 1e-7 && t >= 0 ? (this._totalTime = d, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = v, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (r = !0, s = "onComplete", n = n || this._timeline.autoRemoveChildren), 0 === v && (this._initted || !this.vars.lazy || n) && (this._startTime === this._timeline._duration && (t = 0), (y < 0 || t <= 0 && t >= -1e-7 || 1e-10 === y && "isPause" !== this.data) && y !== t && (n = !0, y > 1e-10 && (s = "onReverseComplete")), this._rawPrevTime = f = !e || t || y === t ? t : 1e-10)) : t < 1e-7 ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== m || 0 === v && y > 0) && (s = "onReverseComplete", r = this._reversed), t < 0 && (this._active = !1, 0 === v && (this._initted || !this.vars.lazy || n) && (y >= 0 && (n = !0), this._rawPrevTime = f = !e || t || y === t ? t : 1e-10)), this._initted || (n = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (l = v + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && m <= t && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 != (1 & this._cycle) && (this._time = v - this._time, (p = this._yoyoEase || this.vars.yoyoEase) && (this._yoyoEase || (!0 !== p || this._initted ? this._yoyoEase = p = !0 === p ? this._ease : p instanceof Ease ? p : Ease.map[p] : (p = this.vars.ease, this._yoyoEase = p = p ? p instanceof Ease ? p : "function" == typeof p ? new Ease(p, this.vars.easeParams) : Ease.map[p] || i.defaultEase : i.defaultEase)), this.ratio = p ? 1 - p.getRatio((v - this._time) / v) : 0)), this._time > v ? this._time = v : this._time < 0 && (this._time = 0)), this._easeType && !p ? (c = this._time / v, h = this._easeType, u = this._easePower, (1 === h || 3 === h && c >= .5) && (c = 1 - c), 3 === h && (c *= 2), 1 === u ? c *= c : 2 === u ? c *= c * c : 3 === u ? c *= c * c * c : 4 === u && (c *= c * c * c * c), 1 === h ? this.ratio = 1 - c : 2 === h ? this.ratio = c : this._time / v < .5 ? this.ratio = c / 2 : this.ratio = 1 - c / 2) : p || (this.ratio = this._ease.getRatio(this._time / v))), g === this._time && !n && _ === this._cycle)
                            return void (m !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                        if (!this._initted) {
                            if (this._init(), !this._initted || this._gc)
                                return;
                            if (!n && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration))
                                return this._time = g, this._totalTime = m, this._rawPrevTime = y, this._cycle = _, o.lazyTweens.push(this), void (this._lazy = [t, e]);
                            !this._time || r || p ? r && this._ease._calcEnd && !p && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : this.ratio = this._ease.getRatio(this._time / v)
                        }
                        for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== g && t >= 0 && (this._active = !0), 0 === m && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, !0, n) : s || (s = "_dummyGS")), this.vars.onStart && (0 === this._totalTime && 0 !== v || e || this._callback("onStart"))), a = this._firstPT; a;)
                            a.f ? a.t[a.p](a.c * this.ratio + a.s) : a.t[a.p] = a.c * this.ratio + a.s, a = a._next;
                        this._onUpdate && (t < 0 && this._startAt && this._startTime && this._startAt.render(t, !0, n), e || (this._totalTime !== m || s) && this._callback("onUpdate")), this._cycle !== _ && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), s && (this._gc && !n || (t < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, !0, n), r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[s] && this._callback(s), 0 === v && 1e-10 === this._rawPrevTime && 1e-10 !== f && (this._rawPrevTime = 0)))
                    }, s.to = function(t, e, i) {
                        return new s(t, e, i)
                    }, s.from = function(t, e, i) {
                        return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new s(t, e, i)
                    }, s.fromTo = function(t, e, i, n) {
                        return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new s(t, e, n)
                    }, s.staggerTo = s.allTo = function(t, e, o, c, u, f, p) {
                        c = c || 0;
                        var d,
                            g,
                            m,
                            _,
                            v = 0,
                            y = [],
                            b = function() {
                                o.onComplete && o.onComplete.apply(o.onCompleteScope || this, arguments), u.apply(p || o.callbackScope || this, f || h)
                            },
                            x = o.cycle,
                            w = o.startAt && o.startAt.cycle;
                        for (l(t) || ("string" == typeof t && (t = i.selector(t) || t), a(t) && (t = n(t))), t = t || [], c < 0 && (t = n(t), t.reverse(), c *= -1), d = t.length - 1, m = 0; m <= d; m++) {
                            g = {};
                            for (_ in o)
                                g[_] = o[_];
                            if (x && (r(g, t, m), null != g.duration && (e = g.duration, delete g.duration)), w) {
                                w = g.startAt = {};
                                for (_ in o.startAt)
                                    w[_] = o.startAt[_];
                                r(g.startAt, t, m)
                            }
                            g.delay = v + (g.delay || 0), m === d && u && (g.onComplete = b), y[m] = new s(t[m], e, g), v += c
                        }
                        return y
                    }, s.staggerFrom = s.allFrom = function(t, e, i, n, r, o, a) {
                        return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, s.staggerTo(t, e, i, n, r, o, a)
                    }, s.staggerFromTo = s.allFromTo = function(t, e, i, n, r, o, a, l) {
                        return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, s.staggerTo(t, e, n, r, o, a, l)
                    }, s.delayedCall = function(t, e, i, n, r) {
                        return new s(e, 0, {
                            delay: t,
                            onComplete: e,
                            onCompleteParams: i,
                            callbackScope: n,
                            onReverseComplete: e,
                            onReverseCompleteParams: i,
                            immediateRender: !1,
                            useFrames: r,
                            overwrite: 0
                        })
                    }, s.set = function(t, e) {
                        return new s(t, 0, e)
                    }, s.isTweening = function(t) {
                        return i.getTweensOf(t, !0).length > 0
                    };
                    var u = function(t, e) {
                            for (var n = [], r = 0, s = t._first; s;)
                                s instanceof i ? n[r++] = s : (e && (n[r++] = s), n = n.concat(u(s, e)), r = n.length), s = s._next;
                            return n
                        },
                        f = s.getAllTweens = function(e) {
                            return u(t._rootTimeline, e).concat(u(t._rootFramesTimeline, e))
                        };
                    s.killAll = function(t, i, n, r) {
                        null == i && (i = !0), null == n && (n = !0);
                        var s,
                            o,
                            a,
                            l = f(0 != r),
                            c = l.length,
                            h = i && n && r;
                        for (a = 0; a < c; a++)
                            o = l[a], (h || o instanceof e || (s = o.target === o.vars.onComplete) && n || i && !s) && (t ? o.totalTime(o._reversed ? 0 : o.totalDuration()) : o._enabled(!1, !1))
                    }, s.killChildTweensOf = function(t, e) {
                        if (null != t) {
                            var r,
                                c,
                                h,
                                u,
                                f,
                                p = o.tweenLookup;
                            if ("string" == typeof t && (t = i.selector(t) || t), a(t) && (t = n(t)), l(t))
                                for (u = t.length; --u > -1;)
                                    s.killChildTweensOf(t[u], e);
                            else {
                                r = [];
                                for (h in p)
                                    for (c = p[h].target.parentNode; c;)
                                        c === t && (r = r.concat(p[h].tweens)), c = c.parentNode;
                                for (f = r.length, u = 0; u < f; u++)
                                    e && r[u].totalTime(r[u].totalDuration()), r[u]._enabled(!1, !1)
                            }
                        }
                    };
                    var p = function(t, i, n, r) {
                        i = !1 !== i, n = !1 !== n, r = !1 !== r;
                        for (var s, o, a = f(r), l = i && n && r, c = a.length; --c > -1;)
                            o = a[c], (l || o instanceof e || (s = o.target === o.vars.onComplete) && n || i && !s) && o.paused(t)
                    };
                    return s.pauseAll = function(t, e, i) {
                        p(!0, t, e, i)
                    }, s.resumeAll = function(t, e, i) {
                        p(!1, t, e, i)
                    }, s.globalTimeScale = function(e) {
                        var n = t._rootTimeline,
                            r = i.ticker.time;
                        return arguments.length ? (e = e || 1e-10, n._startTime = r - (r - n._startTime) * n._timeScale / e, n = t._rootFramesTimeline, r = i.ticker.frame, n._startTime = r - (r - n._startTime) * n._timeScale / e, n._timeScale = t._rootTimeline._timeScale = e, e) : n._timeScale
                    }, c.progress = function(t, e) {
                        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
                    }, c.totalProgress = function(t, e) {
                        return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                    }, c.time = function(t, e) {
                        return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                    }, c.duration = function(e) {
                        return arguments.length ? t.prototype.duration.call(this, e) : this._duration
                    }, c.totalDuration = function(t) {
                        return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                    }, c.repeat = function(t) {
                        return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                    }, c.repeatDelay = function(t) {
                        return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                    }, c.yoyo = function(t) {
                        return arguments.length ? (this._yoyo = t, this) : this._yoyo
                    }, s
                }, !0), n._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                    var r = function(t) {
                            e.call(this, t), this._labels = {}, this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren, this.smoothChildTiming = !0 === this.vars.smoothChildTiming, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                            var i,
                                n,
                                r = this.vars;
                            for (n in r)
                                i = r[n], l(i) && -1 !== i.join("").indexOf("{self}") && (r[n] = this._swapSelfInParams(i));
                            l(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
                        },
                        s = i._internals,
                        o = r._internals = {},
                        a = s.isSelector,
                        l = s.isArray,
                        c = s.lazyTweens,
                        h = s.lazyRender,
                        u = n._gsDefine.globals,
                        f = function(t) {
                            var e,
                                i = {};
                            for (e in t)
                                i[e] = t[e];
                            return i
                        },
                        p = function(t, e, i) {
                            var n,
                                r,
                                s = t.cycle;
                            for (n in s)
                                r = s[n], t[n] = "function" == typeof r ? r(i, e[i]) : r[i % r.length];
                            delete t.cycle
                        },
                        d = o.pauseCallback = function() {},
                        g = function(t) {
                            var e,
                                i = [],
                                n = t.length;
                            for (e = 0; e !== n; i.push(t[e++]))
                                ;
                            return i
                        },
                        m = r.prototype = new e;
                    return r.version = "1.20.3", m.constructor = r, m.kill()._gc = m._forcingPlayhead = m._hasPause = !1, m.to = function(t, e, n, r) {
                        var s = n.repeat && u.TweenMax || i;
                        return e ? this.add(new s(t, e, n), r) : this.set(t, n, r)
                    }, m.from = function(t, e, n, r) {
                        return this.add((n.repeat && u.TweenMax || i).from(t, e, n), r)
                    }, m.fromTo = function(t, e, n, r, s) {
                        var o = r.repeat && u.TweenMax || i;
                        return e ? this.add(o.fromTo(t, e, n, r), s) : this.set(t, r, s)
                    }, m.staggerTo = function(t, e, n, s, o, l, c, h) {
                        var u,
                            d,
                            m = new r({
                                onComplete: l,
                                onCompleteParams: c,
                                callbackScope: h,
                                smoothChildTiming: this.smoothChildTiming
                            }),
                            _ = n.cycle;
                        for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], a(t) && (t = g(t)), s = s || 0, s < 0 && (t = g(t), t.reverse(), s *= -1), d = 0; d < t.length; d++)
                            u = f(n), u.startAt && (u.startAt = f(u.startAt), u.startAt.cycle && p(u.startAt, t, d)), _ && (p(u, t, d), null != u.duration && (e = u.duration, delete u.duration)), m.to(t[d], e, u, d * s);
                        return this.add(m, o)
                    }, m.staggerFrom = function(t, e, i, n, r, s, o, a) {
                        return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, n, r, s, o, a)
                    }, m.staggerFromTo = function(t, e, i, n, r, s, o, a, l) {
                        return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, n, r, s, o, a, l)
                    }, m.call = function(t, e, n, r) {
                        return this.add(i.delayedCall(0, t, e, n), r)
                    }, m.set = function(t, e, n) {
                        return n = this._parseTimeOrLabel(n, 0, !0), null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused), this.add(new i(t, 0, e), n)
                    }, r.exportRoot = function(t, e) {
                        t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                        var n,
                            s,
                            o,
                            a,
                            l = new r(t),
                            c = l._timeline;
                        for (null == e && (e = !0), c._remove(l, !0), l._startTime = 0, l._rawPrevTime = l._time = l._totalTime = c._time, o = c._first; o;)
                            a = o._next, e && o instanceof i && o.target === o.vars.onComplete || (s = o._startTime - o._delay, s < 0 && (n = 1), l.add(o, s)), o = a;
                        return c.add(l, 0), n && l.totalDuration(), l
                    }, m.add = function(n, s, o, a) {
                        var c,
                            h,
                            u,
                            f,
                            p,
                            d;
                        if ("number" != typeof s && (s = this._parseTimeOrLabel(s, 0, !0, n)), !(n instanceof t)) {
                            if (n instanceof Array || n && n.push && l(n)) {
                                for (o = o || "normal", a = a || 0, c = s, h = n.length, u = 0; u < h; u++)
                                    l(f = n[u]) && (f = new r({
                                        tweens: f
                                    })), this.add(f, c), "string" != typeof f && "function" != typeof f && ("sequence" === o ? c = f._startTime + f.totalDuration() / f._timeScale : "start" === o && (f._startTime -= f.delay())), c += a;
                                return this._uncache(!0)
                            }
                            if ("string" == typeof n)
                                return this.addLabel(n, s);
                            if ("function" != typeof n)
                                throw "Cannot add " + n + " into the timeline; it is not a tween, timeline, function, or string.";
                            n = i.delayedCall(0, n)
                        }
                        if (e.prototype.add.call(this, n, s), n._time && n.render((this.rawTime() - n._startTime) * n._timeScale, !1, !1), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                            for (p = this, d = p.rawTime() > n._startTime; p._timeline;)
                                d && p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._gc && p._enabled(!0, !1), p = p._timeline;
                        return this
                    }, m.remove = function(e) {
                        if (e instanceof t) {
                            this._remove(e, !1);
                            var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
                            return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this
                        }
                        if (e instanceof Array || e && e.push && l(e)) {
                            for (var n = e.length; --n > -1;)
                                this.remove(e[n]);
                            return this
                        }
                        return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                    }, m._remove = function(t, i) {
                        return e.prototype._remove.call(this, t, i), this._last ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                    }, m.append = function(t, e) {
                        return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                    }, m.insert = m.insertMultiple = function(t, e, i, n) {
                        return this.add(t, e || 0, i, n)
                    }, m.appendMultiple = function(t, e, i, n) {
                        return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
                    }, m.addLabel = function(t, e) {
                        return this._labels[t] = this._parseTimeOrLabel(e), this
                    }, m.addPause = function(t, e, n, r) {
                        var s = i.delayedCall(0, d, n, r || this);
                        return s.vars.onComplete = s.vars.onReverseComplete = e, s.data = "isPause", this._hasPause = !0, this.add(s, t)
                    }, m.removeLabel = function(t) {
                        return delete this._labels[t], this
                    }, m.getLabelTime = function(t) {
                        return null != this._labels[t] ? this._labels[t] : -1
                    }, m._parseTimeOrLabel = function(e, i, n, r) {
                        var s,
                            o;
                        if (r instanceof t && r.timeline === this)
                            this.remove(r);
                        else if (r && (r instanceof Array || r.push && l(r)))
                            for (o = r.length; --o > -1;)
                                r[o] instanceof t && r[o].timeline === this && this.remove(r[o]);
                        if (s = "number" != typeof e || i ? this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration : 0, "string" == typeof i)
                            return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - s : 0, n);
                        if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e])
                            null == e && (e = s);
                        else {
                            if (-1 === (o = e.indexOf("=")))
                                return null == this._labels[e] ? n ? this._labels[e] = s + i : i : this._labels[e] + i;
                            i = parseInt(e.charAt(o - 1) + "1", 10) * Number(e.substr(o + 1)), e = o > 1 ? this._parseTimeOrLabel(e.substr(0, o - 1), 0, n) : s
                        }
                        return Number(e) + i
                    }, m.seek = function(t, e) {
                        return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e)
                    }, m.stop = function() {
                        return this.paused(!0)
                    }, m.gotoAndPlay = function(t, e) {
                        return this.play(t, e)
                    }, m.gotoAndStop = function(t, e) {
                        return this.pause(t, e)
                    }, m.render = function(t, e, i) {
                        this._gc && this._enabled(!0, !1);
                        var n,
                            r,
                            s,
                            o,
                            a,
                            l,
                            u,
                            f = this._time,
                            p = this._dirty ? this.totalDuration() : this._totalDuration,
                            d = this._startTime,
                            g = this._timeScale,
                            m = this._paused;
                        if (f !== this._time && (t += this._time - f), t >= p - 1e-7 && t >= 0)
                            this._totalTime = this._time = p, this._reversed || this._hasPausedChild() || (r = !0, o = "onComplete", a = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && t >= -1e-7 || this._rawPrevTime < 0 || 1e-10 === this._rawPrevTime) && this._rawPrevTime !== t && this._first && (a = !0, this._rawPrevTime > 1e-10 && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, t = p + 1e-4;
                        else if (t < 1e-7)
                            if (this._totalTime = this._time = 0, (0 !== f || 0 === this._duration && 1e-10 !== this._rawPrevTime && (this._rawPrevTime > 0 || t < 0 && this._rawPrevTime >= 0)) && (o = "onReverseComplete", r = this._reversed), t < 0)
                                this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (a = r = !0, o = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (a = !0), this._rawPrevTime = t;
                            else {
                                if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, 0 === t && r)
                                    for (n = this._first; n && 0 === n._startTime;)
                                        n._duration || (r = !1), n = n._next;
                                t = 0, this._initted || (a = !0)
                            }
                        else {
                            if (this._hasPause && !this._forcingPlayhead && !e) {
                                if (t >= f)
                                    for (n = this._first; n && n._startTime <= t && !l;)
                                        n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (l = n), n = n._next;
                                else
                                    for (n = this._last; n && n._startTime >= t && !l;)
                                        n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (l = n), n = n._prev;
                                l && (this._time = t = l._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                            }
                            this._totalTime = this._time = this._rawPrevTime = t
                        }
                        if (this._time !== f && this._first || i || a || l) {
                            if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== f && t > 0 && (this._active = !0), 0 === f && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")), (u = this._time) >= f)
                                for (n = this._first; n && (s = n._next, u === this._time && (!this._paused || m));)
                                    (n._active || n._startTime <= u && !n._paused && !n._gc) && (l === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = s;
                            else
                                for (n = this._last; n && (s = n._prev, u === this._time && (!this._paused || m));) {
                                    if (n._active || n._startTime <= f && !n._paused && !n._gc) {
                                        if (l === n) {
                                            for (l = n._prev; l && l.endTime() > this._time;)
                                                l.render(l._reversed ? l.totalDuration() - (t - l._startTime) * l._timeScale : (t - l._startTime) * l._timeScale, e, i), l = l._prev;
                                            l = null, this.pause()
                                        }
                                        n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                                    }
                                    n = s
                                }
                            this._onUpdate && (e || (c.length && h(), this._callback("onUpdate"))), o && (this._gc || d !== this._startTime && g === this._timeScale || (0 === this._time || p >= this.totalDuration()) && (r && (c.length && h(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this._callback(o)))
                        }
                    }, m._hasPausedChild = function() {
                        for (var t = this._first; t;) {
                            if (t._paused || t instanceof r && t._hasPausedChild())
                                return !0;
                            t = t._next
                        }
                        return !1
                    }, m.getChildren = function(t, e, n, r) {
                        r = r || -9999999999;
                        for (var s = [], o = this._first, a = 0; o;)
                            o._startTime < r || (o instanceof i ? !1 !== e && (s[a++] = o) : (!1 !== n && (s[a++] = o), !1 !== t && (s = s.concat(o.getChildren(!0, e, n)), a = s.length))), o = o._next;
                        return s
                    }, m.getTweensOf = function(t, e) {
                        var n,
                            r,
                            s = this._gc,
                            o = [],
                            a = 0;
                        for (s && this._enabled(!0, !0), n = i.getTweensOf(t), r = n.length; --r > -1;)
                            (n[r].timeline === this || e && this._contains(n[r])) && (o[a++] = n[r]);
                        return s && this._enabled(!1, !0), o
                    }, m.recent = function() {
                        return this._recent
                    }, m._contains = function(t) {
                        for (var e = t.timeline; e;) {
                            if (e === this)
                                return !0;
                            e = e.timeline
                        }
                        return !1
                    }, m.shiftChildren = function(t, e, i) {
                        i = i || 0;
                        for (var n, r = this._first, s = this._labels; r;)
                            r._startTime >= i && (r._startTime += t), r = r._next;
                        if (e)
                            for (n in s)
                                s[n] >= i && (s[n] += t);
                        return this._uncache(!0)
                    }, m._kill = function(t, e) {
                        if (!t && !e)
                            return this._enabled(!1, !1);
                        for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, r = !1; --n > -1;)
                            i[n]._kill(t, e) && (r = !0);
                        return r
                    }, m.clear = function(t) {
                        var e = this.getChildren(!1, !0, !0),
                            i = e.length;
                        for (this._time = this._totalTime = 0; --i > -1;)
                            e[i]._enabled(!1, !1);
                        return !1 !== t && (this._labels = {}), this._uncache(!0)
                    }, m.invalidate = function() {
                        for (var e = this._first; e;)
                            e.invalidate(), e = e._next;
                        return t.prototype.invalidate.call(this)
                    }, m._enabled = function(t, i) {
                        if (t === this._gc)
                            for (var n = this._first; n;)
                                n._enabled(t, !0), n = n._next;
                        return e.prototype._enabled.call(this, t, i)
                    }, m.totalTime = function(e, i, n) {
                        this._forcingPlayhead = !0;
                        var r = t.prototype.totalTime.apply(this, arguments);
                        return this._forcingPlayhead = !1, r
                    }, m.duration = function(t) {
                        return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
                    }, m.totalDuration = function(t) {
                        if (!arguments.length) {
                            if (this._dirty) {
                                for (var e, i, n = 0, r = this._last, s = 999999999999; r;)
                                    e = r._prev, r._dirty && r.totalDuration(), r._startTime > s && this._sortChildren && !r._paused && !this._calculatingDuration ? (this._calculatingDuration = 1, this.add(r, r._startTime - r._delay), this._calculatingDuration = 0) : s = r._startTime, r._startTime < 0 && !r._paused && (n -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale, this._time -= r._startTime, this._totalTime -= r._startTime, this._rawPrevTime -= r._startTime), this.shiftChildren(-r._startTime, !1, -9999999999), s = 0), i = r._startTime + r._totalDuration / r._timeScale, i > n && (n = i), r = e;
                                this._duration = this._totalDuration = n, this._dirty = !1
                            }
                            return this._totalDuration
                        }
                        return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
                    }, m.paused = function(e) {
                        if (!e)
                            for (var i = this._first, n = this._time; i;)
                                i._startTime === n && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
                        return t.prototype.paused.apply(this, arguments)
                    }, m.usesFrames = function() {
                        for (var e = this._timeline; e._timeline;)
                            e = e._timeline;
                        return e === t._rootFramesTimeline
                    }, m.rawTime = function(t) {
                        return t && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(t) - this._startTime) * this._timeScale
                    }, r
                }, !0), n._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
                    var r = function(e) {
                            t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._dirty = !0
                        },
                        s = e._internals,
                        o = s.lazyTweens,
                        a = s.lazyRender,
                        l = n._gsDefine.globals,
                        c = new i(null, null, 1, 0),
                        h = r.prototype = new t;
                    return h.constructor = r, h.kill()._gc = !1, r.version = "1.20.3", h.invalidate = function() {
                        return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
                    }, h.addCallback = function(t, i, n, r) {
                        return this.add(e.delayedCall(0, t, n, r), i)
                    }, h.removeCallback = function(t, e) {
                        if (t)
                            if (null == e)
                                this._kill(null, t);
                            else
                                for (var i = this.getTweensOf(t, !1), n = i.length, r = this._parseTimeOrLabel(e); --n > -1;)
                                    i[n]._startTime === r && i[n]._enabled(!1, !1);
                        return this
                    }, h.removePause = function(e) {
                        return this.removeCallback(t._internals.pauseCallback, e)
                    }, h.tweenTo = function(t, i) {
                        i = i || {};
                        var n,
                            r,
                            s,
                            o = {
                                ease: c,
                                useFrames: this.usesFrames(),
                                immediateRender: !1
                            },
                            a = i.repeat && l.TweenMax || e;
                        for (r in i)
                            o[r] = i[r];
                        return o.time = this._parseTimeOrLabel(t), n = Math.abs(Number(o.time) - this._time) / this._timeScale || .001, s = new a(this, n, o), o.onStart = function() {
                            s.target.paused(!0), s.vars.time !== s.target.time() && n === s.duration() && s.duration(Math.abs(s.vars.time - s.target.time()) / s.target._timeScale), i.onStart && i.onStart.apply(i.onStartScope || i.callbackScope || s, i.onStartParams || [])
                        }, s
                    }, h.tweenFromTo = function(t, e, i) {
                        i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                            onComplete: this.seek,
                            onCompleteParams: [t],
                            callbackScope: this
                        }, i.immediateRender = !1 !== i.immediateRender;
                        var n = this.tweenTo(e, i);
                        return n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
                    }, h.render = function(t, e, i) {
                        this._gc && this._enabled(!0, !1);
                        var n,
                            r,
                            s,
                            l,
                            c,
                            h,
                            u,
                            f,
                            p = this._time,
                            d = this._dirty ? this.totalDuration() : this._totalDuration,
                            g = this._duration,
                            m = this._totalTime,
                            _ = this._startTime,
                            v = this._timeScale,
                            y = this._rawPrevTime,
                            b = this._paused,
                            x = this._cycle;
                        if (p !== this._time && (t += this._time - p), t >= d - 1e-7 && t >= 0)
                            this._locked || (this._totalTime = d, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (r = !0, l = "onComplete", c = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && t >= -1e-7 || y < 0 || 1e-10 === y) && y !== t && this._first && (c = !0, y > 1e-10 && (l = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, this._yoyo && 0 != (1 & this._cycle) ? this._time = t = 0 : (this._time = g, t = g + 1e-4);
                        else if (t < 1e-7)
                            if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== p || 0 === g && 1e-10 !== y && (y > 0 || t < 0 && y >= 0) && !this._locked) && (l = "onReverseComplete", r = this._reversed), t < 0)
                                this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (c = r = !0, l = "onReverseComplete") : y >= 0 && this._first && (c = !0), this._rawPrevTime = t;
                            else {
                                if (this._rawPrevTime = g || !e || t || this._rawPrevTime === t ? t : 1e-10, 0 === t && r)
                                    for (n = this._first; n && 0 === n._startTime;)
                                        n._duration || (r = !1), n = n._next;
                                t = 0, this._initted || (c = !0)
                            }
                        else if (0 === g && y < 0 && (c = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (h = g + this._repeatDelay, this._cycle = this._totalTime / h >> 0, 0 !== this._cycle && this._cycle === this._totalTime / h && m <= t && this._cycle--, this._time = this._totalTime - this._cycle * h, this._yoyo && 0 != (1 & this._cycle) && (this._time = g - this._time), this._time > g ? (this._time = g, t = g + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e) {
                            if ((t = this._time) >= p || this._repeat && x !== this._cycle)
                                for (n = this._first; n && n._startTime <= t && !u;)
                                    n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (u = n), n = n._next;
                            else
                                for (n = this._last; n && n._startTime >= t && !u;)
                                    n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (u = n), n = n._prev;
                            u && u._startTime < g && (this._time = t = u._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                        }
                        if (this._cycle !== x && !this._locked) {
                            var w = this._yoyo && 0 != (1 & x),
                                T = w === (this._yoyo && 0 != (1 & this._cycle)),
                                S = this._totalTime,
                                P = this._cycle,
                                C = this._rawPrevTime,
                                k = this._time;
                            if (this._totalTime = x * g, this._cycle < x ? w = !w : this._totalTime += g, this._time = p, this._rawPrevTime = 0 === g ? y - 1e-4 : y, this._cycle = x, this._locked = !0, p = w ? 0 : g, this.render(p, e, 0 === g), e || this._gc || this.vars.onRepeat && (this._cycle = P, this._locked = !1, this._callback("onRepeat")), p !== this._time)
                                return;
                            if (T && (this._cycle = x, this._locked = !0, p = w ? g + 1e-4 : -1e-4, this.render(p, !0, !1)), this._locked = !1, this._paused && !b)
                                return;
                            this._time = k, this._totalTime = S, this._cycle = P, this._rawPrevTime = C
                        }
                        if (!(this._time !== p && this._first || i || c || u))
                            return void (m !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== m && t > 0 && (this._active = !0), 0 === m && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")), (f = this._time) >= p)
                            for (n = this._first; n && (s = n._next, f === this._time && (!this._paused || b));)
                                (n._active || n._startTime <= this._time && !n._paused && !n._gc) && (u === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = s;
                        else
                            for (n = this._last; n && (s = n._prev, f === this._time && (!this._paused || b));) {
                                if (n._active || n._startTime <= p && !n._paused && !n._gc) {
                                    if (u === n) {
                                        for (u = n._prev; u && u.endTime() > this._time;)
                                            u.render(u._reversed ? u.totalDuration() - (t - u._startTime) * u._timeScale : (t - u._startTime) * u._timeScale, e, i), u = u._prev;
                                        u = null, this.pause()
                                    }
                                    n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                                }
                                n = s
                            }
                        this._onUpdate && (e || (o.length && a(), this._callback("onUpdate"))), l && (this._locked || this._gc || _ !== this._startTime && v === this._timeScale || (0 === this._time || d >= this.totalDuration()) && (r && (o.length && a(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[l] && this._callback(l)))
                    }, h.getActive = function(t, e, i) {
                        null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                        var n,
                            r,
                            s = [],
                            o = this.getChildren(t, e, i),
                            a = 0,
                            l = o.length;
                        for (n = 0; n < l; n++)
                            r = o[n], r.isActive() && (s[a++] = r);
                        return s
                    }, h.getLabelAfter = function(t) {
                        t || 0 !== t && (t = this._time);
                        var e,
                            i = this.getLabelsArray(),
                            n = i.length;
                        for (e = 0; e < n; e++)
                            if (i[e].time > t)
                                return i[e].name;
                        return null
                    }, h.getLabelBefore = function(t) {
                        null == t && (t = this._time);
                        for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                            if (e[i].time < t)
                                return e[i].name;
                        return null
                    }, h.getLabelsArray = function() {
                        var t,
                            e = [],
                            i = 0;
                        for (t in this._labels)
                            e[i++] = {
                                time: this._labels[t],
                                name: t
                            };
                        return e.sort(function(t, e) {
                            return t.time - e.time
                        }), e
                    }, h.invalidate = function() {
                        return this._locked = !1, t.prototype.invalidate.call(this)
                    }, h.progress = function(t, e) {
                        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration() || 0
                    }, h.totalProgress = function(t, e) {
                        return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration() || 0
                    }, h.totalDuration = function(e) {
                        return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                    }, h.time = function(t, e) {
                        return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                    }, h.repeat = function(t) {
                        return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                    }, h.repeatDelay = function(t) {
                        return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                    }, h.yoyo = function(t) {
                        return arguments.length ? (this._yoyo = t, this) : this._yoyo
                    }, h.currentLabel = function(t) {
                        return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
                    }, r
                }, !0), function() {
                    var t = 180 / Math.PI,
                        e = [],
                        i = [],
                        r = [],
                        s = {},
                        o = n._gsDefine.globals,
                        a = function(t, e, i, n) {
                            i === n && (i = n - (n - e) / 1e6), t === e && (e = t + (i - t) / 1e6), this.a = t, this.b = e, this.c = i, this.d = n, this.da = n - t, this.ca = i - t, this.ba = e - t
                        },
                        l = function(t, e, i, n) {
                            var r = {
                                    a: t
                                },
                                s = {},
                                o = {},
                                a = {
                                    c: n
                                },
                                l = (t + e) / 2,
                                c = (e + i) / 2,
                                h = (i + n) / 2,
                                u = (l + c) / 2,
                                f = (c + h) / 2,
                                p = (f - u) / 8;
                            return r.b = l + (t - l) / 4, s.b = u + p, r.c = s.a = (r.b + s.b) / 2, s.c = o.a = (u + f) / 2, o.b = f - p, a.b = h + (n - h) / 4, o.c = a.a = (o.b + a.b) / 2, [r, s, o, a]
                        },
                        c = function(t, n, s, o, a) {
                            var c,
                                h,
                                u,
                                f,
                                p,
                                d,
                                g,
                                m,
                                _,
                                v,
                                y,
                                b,
                                x,
                                w = t.length - 1,
                                T = 0,
                                S = t[0].a;
                            for (c = 0; c < w; c++)
                                p = t[T], h = p.a, u = p.d, f = t[T + 1].d, a ? (y = e[c], b = i[c], x = (b + y) * n * .25 / (o ? .5 : r[c] || .5), d = u - (u - h) * (o ? .5 * n : 0 !== y ? x / y : 0), g = u + (f - u) * (o ? .5 * n : 0 !== b ? x / b : 0), m = u - (d + ((g - d) * (3 * y / (y + b) + .5) / 4 || 0))) : (d = u - (u - h) * n * .5, g = u + (f - u) * n * .5, m = u - (d + g) / 2), d += m, g += m, p.c = _ = d, p.b = 0 !== c ? S : S = p.a + .6 * (p.c - p.a), p.da = u - h, p.ca = _ - h, p.ba = S - h, s ? (v = l(h, S, _, u), t.splice(T, 1, v[0], v[1], v[2], v[3]), T += 4) : T++, S = g;
                            p = t[T], p.b = S, p.c = S + .4 * (p.d - S), p.da = p.d - p.a, p.ca = p.c - p.a, p.ba = S - p.a, s && (v = l(p.a, S, p.c, p.d), t.splice(T, 1, v[0], v[1], v[2], v[3]))
                        },
                        h = function(t, n, r, s) {
                            var o,
                                l,
                                c,
                                h,
                                u,
                                f,
                                p = [];
                            if (s)
                                for (t = [s].concat(t), l = t.length; --l > -1;)
                                    "string" == typeof (f = t[l][n]) && "=" === f.charAt(1) && (t[l][n] = s[n] + Number(f.charAt(0) + f.substr(2)));
                            if ((o = t.length - 2) < 0)
                                return p[0] = new a(t[0][n], 0, 0, t[0][n]), p;
                            for (l = 0; l < o; l++)
                                c = t[l][n], h = t[l + 1][n], p[l] = new a(c, 0, 0, h), r && (u = t[l + 2][n], e[l] = (e[l] || 0) + (h - c) * (h - c), i[l] = (i[l] || 0) + (u - h) * (u - h));
                            return p[l] = new a(t[l][n], 0, 0, t[l + 1][n]), p
                        },
                        u = function(t, n, o, a, l, u) {
                            var f,
                                p,
                                d,
                                g,
                                m,
                                _,
                                v,
                                y,
                                b = {},
                                x = [],
                                w = u || t[0];
                            l = "string" == typeof l ? "," + l + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == n && (n = 1);
                            for (p in t[0])
                                x.push(p);
                            if (t.length > 1) {
                                for (y = t[t.length - 1], v = !0, f = x.length; --f > -1;)
                                    if (p = x[f], Math.abs(w[p] - y[p]) > .05) {
                                        v = !1;
                                        break
                                    }
                                v && (t = t.concat(), u && t.unshift(u), t.push(t[1]), u = t[t.length - 3])
                            }
                            for (e.length = i.length = r.length = 0, f = x.length; --f > -1;)
                                p = x[f], s[p] = -1 !== l.indexOf("," + p + ","), b[p] = h(t, p, s[p], u);
                            for (f = e.length; --f > -1;)
                                e[f] = Math.sqrt(e[f]), i[f] = Math.sqrt(i[f]);
                            if (!a) {
                                for (f = x.length; --f > -1;)
                                    if (s[p])
                                        for (d = b[x[f]], _ = d.length - 1, g = 0; g < _; g++)
                                            m = d[g + 1].da / i[g] + d[g].da / e[g] || 0, r[g] = (r[g] || 0) + m * m;
                                for (f = r.length; --f > -1;)
                                    r[f] = Math.sqrt(r[f])
                            }
                            for (f = x.length, g = o ? 4 : 1; --f > -1;)
                                p = x[f], d = b[p], c(d, n, o, a, s[p]), v && (d.splice(0, g), d.splice(d.length - g, g));
                            return b
                        },
                        f = function(t, e, i) {
                            e = e || "soft";
                            var n,
                                r,
                                s,
                                o,
                                l,
                                c,
                                h,
                                u,
                                f,
                                p,
                                d,
                                g = {},
                                m = "cubic" === e ? 3 : 2,
                                _ = "soft" === e,
                                v = [];
                            if (_ && i && (t = [i].concat(t)), null == t || t.length < m + 1)
                                throw "invalid Bezier data";
                            for (f in t[0])
                                v.push(f);
                            for (c = v.length; --c > -1;) {
                                for (f = v[c], g[f] = l = [], p = 0, u = t.length, h = 0; h < u; h++)
                                    n = null == i ? t[h][f] : "string" == typeof (d = t[h][f]) && "=" === d.charAt(1) ? i[f] + Number(d.charAt(0) + d.substr(2)) : Number(d), _ && h > 1 && h < u - 1 && (l[p++] = (n + l[p - 2]) / 2), l[p++] = n;
                                for (u = p - m + 1, p = 0, h = 0; h < u; h += m)
                                    n = l[h], r = l[h + 1], s = l[h + 2], o = 2 === m ? 0 : l[h + 3], l[p++] = d = 3 === m ? new a(n, r, s, o) : new a(n, (2 * r + n) / 3, (2 * r + s) / 3, s);
                                l.length = p
                            }
                            return g
                        },
                        p = function(t, e, i) {
                            for (var n, r, s, o, a, l, c, h, u, f, p, d = 1 / i, g = t.length; --g > -1;)
                                for (f = t[g], s = f.a, o = f.d - s, a = f.c - s, l = f.b - s, n = r = 0, h = 1; h <= i; h++)
                                    c = d * h, u = 1 - c, n = r - (r = (c * c * o + 3 * u * (c * a + u * l)) * c), p = g * i + h - 1, e[p] = (e[p] || 0) + n * n
                        },
                        d = function(t, e) {
                            e = e >> 0 || 6;
                            var i,
                                n,
                                r,
                                s,
                                o = [],
                                a = [],
                                l = 0,
                                c = 0,
                                h = e - 1,
                                u = [],
                                f = [];
                            for (i in t)
                                p(t[i], o, e);
                            for (r = o.length, n = 0; n < r; n++)
                                l += Math.sqrt(o[n]), s = n % e, f[s] = l, s === h && (c += l, s = n / e >> 0, u[s] = f, a[s] = c, l = 0, f = []);
                            return {
                                length: c,
                                lengths: a,
                                segments: u
                            }
                        },
                        g = n._gsDefine.plugin({
                            propName: "bezier",
                            priority: -1,
                            version: "1.3.8",
                            API: 2,
                            global: !0,
                            init: function(t, e, i) {
                                this._target = t, e instanceof Array && (e = {
                                    values: e
                                }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                                var n,
                                    r,
                                    s,
                                    o,
                                    a,
                                    l = e.values || [],
                                    c = {},
                                    h = l[0],
                                    p = e.autoRotate || i.vars.orientToBezier;
                                this._autoRotate = p ? p instanceof Array ? p : [["x", "y", "rotation", !0 === p ? 0 : Number(p) || 0]] : null;
                                for (n in h)
                                    this._props.push(n);
                                for (s = this._props.length; --s > -1;)
                                    n = this._props[s], this._overwriteProps.push(n), r = this._func[n] = "function" == typeof t[n], c[n] = r ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]), a || c[n] !== l[0][n] && (a = c);
                                if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? u(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : f(l, e.type, c), this._segCount = this._beziers[n].length, this._timeRes) {
                                    var g = d(this._beziers, this._timeRes);
                                    this._length = g.length, this._lengths = g.lengths, this._segments = g.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                                }
                                if (p = this._autoRotate)
                                    for (this._initialRotations = [], p[0] instanceof Array || (this._autoRotate = p = [p]), s = p.length; --s > -1;) {
                                        for (o = 0; o < 3; o++)
                                            n = p[s][o], this._func[n] = "function" == typeof t[n] && t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)];
                                        n = p[s][2], this._initialRotations[s] = (this._func[n] ? this._func[n].call(this._target) : this._target[n]) || 0, this._overwriteProps.push(n)
                                    }
                                return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                            },
                            set: function(e) {
                                var i,
                                    n,
                                    r,
                                    s,
                                    o,
                                    a,
                                    l,
                                    c,
                                    h,
                                    u,
                                    f = this._segCount,
                                    p = this._func,
                                    d = this._target,
                                    g = e !== this._startRatio;
                                if (this._timeRes) {
                                    if (h = this._lengths, u = this._curSeg, e *= this._length, r = this._li, e > this._l2 && r < f - 1) {
                                        for (c = f - 1; r < c && (this._l2 = h[++r]) <= e;)
                                            ;
                                        this._l1 = h[r - 1], this._li = r, this._curSeg = u = this._segments[r], this._s2 = u[this._s1 = this._si = 0]
                                    } else if (e < this._l1 && r > 0) {
                                        for (; r > 0 && (this._l1 = h[--r]) >= e;)
                                            ;
                                        0 === r && e < this._l1 ? this._l1 = 0 : r++, this._l2 = h[r], this._li = r, this._curSeg = u = this._segments[r], this._s1 = u[(this._si = u.length - 1) - 1] || 0, this._s2 = u[this._si]
                                    }
                                    if (i = r, e -= this._l1, r = this._si, e > this._s2 && r < u.length - 1) {
                                        for (c = u.length - 1; r < c && (this._s2 = u[++r]) <= e;)
                                            ;
                                        this._s1 = u[r - 1], this._si = r
                                    } else if (e < this._s1 && r > 0) {
                                        for (; r > 0 && (this._s1 = u[--r]) >= e;)
                                            ;
                                        0 === r && e < this._s1 ? this._s1 = 0 : r++, this._s2 = u[r], this._si = r
                                    }
                                    a = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                                } else
                                    i = e < 0 ? 0 : e >= 1 ? f - 1 : f * e >> 0, a = (e - i * (1 / f)) * f;
                                for (n = 1 - a, r = this._props.length; --r > -1;)
                                    s = this._props[r], o = this._beziers[s][i], l = (a * a * o.da + 3 * n * (a * o.ca + n * o.ba)) * a + o.a, this._mod[s] && (l = this._mod[s](l, d)), p[s] ? d[s](l) : d[s] = l;
                                if (this._autoRotate) {
                                    var m,
                                        _,
                                        v,
                                        y,
                                        b,
                                        x,
                                        w,
                                        T = this._autoRotate;
                                    for (r = T.length; --r > -1;)
                                        s = T[r][2], x = T[r][3] || 0, w = !0 === T[r][4] ? 1 : t, o = this._beziers[T[r][0]], m = this._beziers[T[r][1]], o && m && (o = o[i], m = m[i], _ = o.a + (o.b - o.a) * a, y = o.b + (o.c - o.b) * a, _ += (y - _) * a, y += (o.c + (o.d - o.c) * a - y) * a, v = m.a + (m.b - m.a) * a, b = m.b + (m.c - m.b) * a, v += (b - v) * a, b += (m.c + (m.d - m.c) * a - b) * a, l = g ? Math.atan2(b - v, y - _) * w + x : this._initialRotations[r], this._mod[s] && (l = this._mod[s](l, d)), p[s] ? d[s](l) : d[s] = l)
                                }
                            }
                        }),
                        m = g.prototype;
                    g.bezierThrough = u, g.cubicToQuadratic = l, g._autoCSS = !0, g.quadraticToCubic = function(t, e, i) {
                        return new a(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
                    }, g._cssRegister = function() {
                        var t = o.CSSPlugin;
                        if (t) {
                            var e = t._internals,
                                i = e._parseToProxy,
                                n = e._setPluginRatio,
                                r = e.CSSPropTween;
                            e._registerComplexSpecialProp("bezier", {
                                parser: function(t, e, s, o, a, l) {
                                    e instanceof Array && (e = {
                                        values: e
                                    }), l = new g;
                                    var c,
                                        h,
                                        u,
                                        f = e.values,
                                        p = f.length - 1,
                                        d = [],
                                        m = {};
                                    if (p < 0)
                                        return a;
                                    for (c = 0; c <= p; c++)
                                        u = i(t, f[c], o, a, l, p !== c), d[c] = u.end;
                                    for (h in e)
                                        m[h] = e[h];
                                    return m.values = d, a = new r(t, "bezier", 0, 0, u.pt, 2), a.data = u, a.plugin = l, a.setRatio = n, 0 === m.autoRotate && (m.autoRotate = !0), !m.autoRotate || m.autoRotate instanceof Array || (c = !0 === m.autoRotate ? 0 : Number(m.autoRotate), m.autoRotate = null != u.end.left ? [["left", "top", "rotation", c, !1]] : null != u.end.x && [["x", "y", "rotation", c, !1]]), m.autoRotate && (o._transform || o._enableTransforms(!1), u.autoRotate = o._target._gsTransform, u.proxy.rotation = u.autoRotate.rotation || 0, o._overwriteProps.push("rotation")), l._onInitTween(u.proxy, m, o._tween), a
                                }
                            })
                        }
                    }, m._mod = function(t) {
                        for (var e, i = this._overwriteProps, n = i.length; --n > -1;)
                            (e = t[i[n]]) && "function" == typeof e && (this._mod[i[n]] = e)
                    }, m._kill = function(t) {
                        var e,
                            i,
                            n = this._props;
                        for (e in this._beziers)
                            if (e in t)
                                for (delete this._beziers[e], delete this._func[e], i = n.length; --i > -1;)
                                    n[i] === e && n.splice(i, 1);
                        if (n = this._autoRotate)
                            for (i = n.length; --i > -1;)
                                t[n[i][2]] && n.splice(i, 1);
                        return this._super._kill.call(this, t)
                    }
                }(), n._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
                    var i,
                        r,
                        s,
                        o,
                        a = function() {
                            t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio
                        },
                        l = n._gsDefine.globals,
                        c = {},
                        h = a.prototype = new t("css");
                    h.constructor = a, a.version = "1.20.3", a.API = 2, a.defaultTransformPerspective = 0, a.defaultSkewType = "compensated", a.defaultSmoothOrigin = !0, h = "px", a.suffixMap = {
                        top: h,
                        right: h,
                        bottom: h,
                        left: h,
                        width: h,
                        height: h,
                        fontSize: h,
                        padding: h,
                        margin: h,
                        perspective: h,
                        lineHeight: ""
                    };
                    var u,
                        f,
                        p,
                        d,
                        g,
                        m,
                        _,
                        v,
                        y = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                        b = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                        x = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                        w = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                        T = /(?:\d|\-|\+|=|#|\.)*/g,
                        S = /opacity *= *([^)]*)/i,
                        P = /opacity:([^;]*)/i,
                        C = /alpha\(opacity *=.+?\)/i,
                        k = /^(rgb|hsl)/,
                        R = /([A-Z])/g,
                        O = /-([a-z])/gi,
                        E = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                        A = function(t, e) {
                            return e.toUpperCase()
                        },
                        F = /(?:Left|Right|Width)/i,
                        M = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                        D = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                        $ = /,(?=[^\)]*(?:\(|$))/gi,
                        z = /[\s,\(]/i,
                        L = Math.PI / 180,
                        I = 180 / Math.PI,
                        N = {},
                        X = {
                            style: {}
                        },
                        B = n.document || {
                            createElement: function() {
                                return X
                            }
                        },
                        j = function(t, e) {
                            return B.createElementNS ? B.createElementNS(e || "http://www.w3.org/1999/xhtml", t) : B.createElement(t)
                        },
                        Y = j("div"),
                        q = j("img"),
                        U = a._internals = {
                            _specialProps: c
                        },
                        H = (n.navigator || {}).userAgent || "",
                        W = function() {
                            var t = H.indexOf("Android"),
                                e = j("a");
                            return p = -1 !== H.indexOf("Safari") && -1 === H.indexOf("Chrome") && (-1 === t || parseFloat(H.substr(t + 8, 2)) > 3), g = p && parseFloat(H.substr(H.indexOf("Version/") + 8, 2)) < 6, d = -1 !== H.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(H) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(H)) && (m = parseFloat(RegExp.$1)), !!e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity))
                        }(),
                        V = function(t) {
                            return S.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                        },
                        G = function(t) {
                            n.console
                        },
                        Z = "",
                        Q = "",
                        K = function(t, e) {
                            e = e || Y;
                            var i,
                                n,
                                r = e.style;
                            if (void 0 !== r[t])
                                return t;
                            for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === r[i[n] + t];)
                                ;
                            return n >= 0 ? (Q = 3 === n ? "ms" : i[n], Z = "-" + Q.toLowerCase() + "-", Q + t) : null
                        },
                        J = B.defaultView ? B.defaultView.getComputedStyle : function() {},
                        tt = a.getStyle = function(t, e, i, n, r) {
                            var s;
                            return W || "opacity" !== e ? (!n && t.style[e] ? s = t.style[e] : (i = i || J(t)) ? s = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(R, "-$1").toLowerCase()) : t.currentStyle && (s = t.currentStyle[e]), null == r || s && "none" !== s && "auto" !== s && "auto auto" !== s ? s : r) : V(t)
                        },
                        et = U.convertToPixels = function(t, i, n, r, s) {
                            if ("px" === r || !r && "lineHeight" !== i)
                                return n;
                            if ("auto" === r || !n)
                                return 0;
                            var o,
                                l,
                                c,
                                h = F.test(i),
                                u = t,
                                f = Y.style,
                                p = n < 0,
                                d = 1 === n;
                            if (p && (n = -n), d && (n *= 100), "lineHeight" !== i || r)
                                if ("%" === r && -1 !== i.indexOf("border"))
                                    o = n / 100 * (h ? t.clientWidth : t.clientHeight);
                                else {
                                    if (f.cssText = "border:0 solid red;position:" + tt(t, "position") + ";line-height:0;", "%" !== r && u.appendChild && "v" !== r.charAt(0) && "rem" !== r)
                                        f[h ? "borderLeftWidth" : "borderTopWidth"] = n + r;
                                    else {
                                        if (u = t.parentNode || B.body, -1 !== tt(u, "display").indexOf("flex") && (f.position = "absolute"), l = u._gsCache, c = e.ticker.frame, l && h && l.time === c)
                                            return l.width * n / 100;
                                        f[h ? "width" : "height"] = n + r
                                    }
                                    u.appendChild(Y), o = parseFloat(Y[h ? "offsetWidth" : "offsetHeight"]), u.removeChild(Y), h && "%" === r && !1 !== a.cacheWidths && (l = u._gsCache = u._gsCache || {}, l.time = c, l.width = o / n * 100), 0 !== o || s || (o = et(t, i, n, r, !0))
                                }
                            else
                                l = J(t).lineHeight, t.style.lineHeight = n, o = parseFloat(J(t).lineHeight), t.style.lineHeight = l;
                            return d && (o /= 100), p ? -o : o
                        },
                        it = U.calculateOffset = function(t, e, i) {
                            if ("absolute" !== tt(t, "position", i))
                                return 0;
                            var n = "left" === e ? "Left" : "Top",
                                r = tt(t, "margin" + n, i);
                            return t["offset" + n] - (et(t, e, parseFloat(r), r.replace(T, "")) || 0)
                        },
                        nt = function(t, e) {
                            var i,
                                n,
                                r,
                                s = {};
                            if (e = e || J(t, null))
                                if (i = e.length)
                                    for (; --i > -1;)
                                        r = e[i], -1 !== r.indexOf("-transform") && Et !== r || (s[r.replace(O, A)] = e.getPropertyValue(r));
                                else
                                    for (i in e)
                                        -1 !== i.indexOf("Transform") && Ot !== i || (s[i] = e[i]);
                            else if (e = t.currentStyle || t.style)
                                for (i in e)
                                    "string" == typeof i && void 0 === s[i] && (s[i.replace(O, A)] = e[i]);
                            return W || (s.opacity = V(t)), n = qt(t, e, !1), s.rotation = n.rotation, s.skewX = n.skewX, s.scaleX = n.scaleX, s.scaleY = n.scaleY, s.x = n.x, s.y = n.y, Ft && (s.z = n.z, s.rotationX = n.rotationX, s.rotationY = n.rotationY, s.scaleZ = n.scaleZ), s.filters && delete s.filters, s
                        },
                        rt = function(t, e, i, n, r) {
                            var s,
                                o,
                                a,
                                l = {},
                                c = t.style;
                            for (o in i)
                                "cssText" !== o && "length" !== o && isNaN(o) && (e[o] !== (s = i[o]) || r && r[o]) && -1 === o.indexOf("Origin") && ("number" != typeof s && "string" != typeof s || (l[o] = "auto" !== s || "left" !== o && "top" !== o ? "" !== s && "auto" !== s && "none" !== s || "string" != typeof e[o] || "" === e[o].replace(w, "") ? s : 0 : it(t, o), void 0 !== c[o] && (a = new yt(c, o, c[o], a))));
                            if (n)
                                for (o in n)
                                    "className" !== o && (l[o] = n[o]);
                            return {
                                difs: l,
                                firstMPT: a
                            }
                        },
                        st = {
                            width: ["Left", "Right"],
                            height: ["Top", "Bottom"]
                        },
                        ot = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                        at = function(t, e, i) {
                            if ("svg" === (t.nodeName + "").toLowerCase())
                                return (i || J(t))[e] || 0;
                            if (t.getCTM && Bt(t))
                                return t.getBBox()[e] || 0;
                            var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                                r = st[e],
                                s = r.length;
                            for (i = i || J(t, null); --s > -1;)
                                n -= parseFloat(tt(t, "padding" + r[s], i, !0)) || 0, n -= parseFloat(tt(t, "border" + r[s] + "Width", i, !0)) || 0;
                            return n
                        },
                        lt = function(t, e) {
                            if ("contain" === t || "auto" === t || "auto auto" === t)
                                return t + " ";
                            null != t && "" !== t || (t = "0 0");
                            var i,
                                n = t.split(" "),
                                r = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : n[0],
                                s = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : n[1];
                            if (n.length > 3 && !e) {
                                for (n = t.split(", ").join(",").split(","), t = [], i = 0; i < n.length; i++)
                                    t.push(lt(n[i]));
                                return t.join(",")
                            }
                            return null == s ? s = "center" === r ? "50%" : "0" : "center" === s && (s = "50%"), ("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"), t = r + " " + s + (n.length > 2 ? " " + n[2] : ""), e && (e.oxp = -1 !== r.indexOf("%"), e.oyp = -1 !== s.indexOf("%"), e.oxr = "=" === r.charAt(1), e.oyr = "=" === s.charAt(1), e.ox = parseFloat(r.replace(w, "")), e.oy = parseFloat(s.replace(w, "")), e.v = t), e || t
                        },
                        ct = function(t, e) {
                            return "function" == typeof t && (t = t(v, _)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
                        },
                        ht = function(t, e) {
                            return "function" == typeof t && (t = t(v, _)), null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
                        },
                        ut = function(t, e, i, n) {
                            var r,
                                s,
                                o,
                                a,
                                l;
                            return "function" == typeof t && (t = t(v, _)), null == t ? a = e : "number" == typeof t ? a = t : (r = 360, s = t.split("_"), l = "=" === t.charAt(1), o = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(s[0].substr(2)) : parseFloat(s[0])) * (-1 === t.indexOf("rad") ? 1 : I) - (l ? 0 : e), s.length && (n && (n[i] = e + o), -1 !== t.indexOf("short") && (o %= r) !== o % (r / 2) && (o = o < 0 ? o + r : o - r), -1 !== t.indexOf("_cw") && o < 0 ? o = (o + 9999999999 * r) % r - (o / r | 0) * r : -1 !== t.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * r) % r - (o / r | 0) * r)), a = e + o), a < 1e-6 && a > -1e-6 && (a = 0), a
                        },
                        ft = {
                            aqua: [0, 255, 255],
                            lime: [0, 255, 0],
                            silver: [192, 192, 192],
                            black: [0, 0, 0],
                            maroon: [128, 0, 0],
                            teal: [0, 128, 128],
                            blue: [0, 0, 255],
                            navy: [0, 0, 128],
                            white: [255, 255, 255],
                            fuchsia: [255, 0, 255],
                            olive: [128, 128, 0],
                            yellow: [255, 255, 0],
                            orange: [255, 165, 0],
                            gray: [128, 128, 128],
                            purple: [128, 0, 128],
                            green: [0, 128, 0],
                            red: [255, 0, 0],
                            pink: [255, 192, 203],
                            cyan: [0, 255, 255],
                            transparent: [255, 255, 255, 0]
                        },
                        pt = function(t, e, i) {
                            return t = t < 0 ? t + 1 : t > 1 ? t - 1 : t, 255 * (6 * t < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
                        },
                        dt = a.parseColor = function(t, e) {
                            var i,
                                n,
                                r,
                                s,
                                o,
                                a,
                                l,
                                c,
                                h,
                                u,
                                f;
                            if (t)
                                if ("number" == typeof t)
                                    i = [t >> 16, t >> 8 & 255, 255 & t];
                                else {
                                    if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ft[t])
                                        i = ft[t];
                                    else if ("#" === t.charAt(0))
                                        4 === t.length && (n = t.charAt(1), r = t.charAt(2), s = t.charAt(3), t = "#" + n + n + r + r + s + s), t = parseInt(t.substr(1), 16), i = [t >> 16, t >> 8 & 255, 255 & t];
                                    else if ("hsl" === t.substr(0, 3))
                                        if (i = f = t.match(y), e) {
                                            if (-1 !== t.indexOf("="))
                                                return t.match(b)
                                        } else
                                            o = Number(i[0]) % 360 / 360, a = Number(i[1]) / 100, l = Number(i[2]) / 100, r = l <= .5 ? l * (a + 1) : l + a - l * a, n = 2 * l - r, i.length > 3 && (i[3] = Number(i[3])), i[0] = pt(o + 1 / 3, n, r), i[1] = pt(o, n, r), i[2] = pt(o - 1 / 3, n, r);
                                    else
                                        i = t.match(y) || ft.transparent;
                                    i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
                                }
                            else
                                i = ft.black;
                            return e && !f && (n = i[0] / 255, r = i[1] / 255, s = i[2] / 255, c = Math.max(n, r, s), h = Math.min(n, r, s), l = (c + h) / 2, c === h ? o = a = 0 : (u = c - h, a = l > .5 ? u / (2 - c - h) : u / (c + h), o = c === n ? (r - s) / u + (r < s ? 6 : 0) : c === r ? (s - n) / u + 2 : (n - r) / u + 4, o *= 60), i[0] = o + .5 | 0, i[1] = 100 * a + .5 | 0, i[2] = 100 * l + .5 | 0), i
                        },
                        gt = function(t, e) {
                            var i,
                                n,
                                r,
                                s = t.match(mt) || [],
                                o = 0,
                                a = "";
                            if (!s.length)
                                return t;
                            for (i = 0; i < s.length; i++)
                                n = s[i], r = t.substr(o, t.indexOf(n, o) - o), o += r.length + n.length, n = dt(n, e), 3 === n.length && n.push(1), a += r + (e ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")";
                            return a + t.substr(o)
                        },
                        mt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                    for (h in ft)
                        mt += "|" + h + "\\b";
                    mt = new RegExp(mt + ")", "gi"), a.colorStringFilter = function(t) {
                        var e,
                            i = t[0] + " " + t[1];
                        mt.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = gt(t[0], e), t[1] = gt(t[1], e)), mt.lastIndex = 0
                    }, e.defaultStringFilter || (e.defaultStringFilter = a.colorStringFilter);
                    var _t = function(t, e, i, n) {
                            if (null == t)
                                return function(t) {
                                    return t
                                };
                            var r,
                                s = e ? (t.match(mt) || [""])[0] : "",
                                o = t.split(s).join("").match(x) || [],
                                a = t.substr(0, t.indexOf(o[0])),
                                l = ")" === t.charAt(t.length - 1) ? ")" : "",
                                c = -1 !== t.indexOf(" ") ? " " : ",",
                                h = o.length,
                                u = h > 0 ? o[0].replace(y, "") : "";
                            return h ? r = e ? function(t) {
                                var e,
                                    f,
                                    p,
                                    d;
                                if ("number" == typeof t)
                                    t += u;
                                else if (n && $.test(t)) {
                                    for (d = t.replace($, "|").split("|"), p = 0; p < d.length; p++)
                                        d[p] = r(d[p]);
                                    return d.join(",")
                                }
                                if (e = (t.match(mt) || [s])[0], f = t.split(e).join("").match(x) || [], p = f.length, h > p--)
                                    for (; ++p < h;)
                                        f[p] = i ? f[(p - 1) / 2 | 0] : o[p];
                                return a + f.join(c) + c + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                            } : function(t) {
                                var e,
                                    s,
                                    f;
                                if ("number" == typeof t)
                                    t += u;
                                else if (n && $.test(t)) {
                                    for (s = t.replace($, "|").split("|"), f = 0; f < s.length; f++)
                                        s[f] = r(s[f]);
                                    return s.join(",")
                                }
                                if (e = t.match(x) || [], f = e.length, h > f--)
                                    for (; ++f < h;)
                                        e[f] = i ? e[(f - 1) / 2 | 0] : o[f];
                                return a + e.join(c) + l
                            } : function(t) {
                                return t
                            }
                        },
                        vt = function(t) {
                            return t = t.split(","), function(e, i, n, r, s, o, a) {
                                var l,
                                    c = (i + "").split(" ");
                                for (a = {}, l = 0; l < 4; l++)
                                    a[t[l]] = c[l] = c[l] || c[(l - 1) / 2 >> 0];
                                return r.parse(e, a, s, o)
                            }
                        },
                        yt = (U._setPluginRatio = function(t) {
                            this.plugin.setRatio(t);
                            for (var e, i, n, r, s, o = this.data, a = o.proxy, l = o.firstMPT; l;)
                                e = a[l.v], l.r ? e = Math.round(e) : e < 1e-6 && e > -1e-6 && (e = 0), l.t[l.p] = e, l = l._next;
                            if (o.autoRotate && (o.autoRotate.rotation = o.mod ? o.mod(a.rotation, this.t) : a.rotation), 1 === t || 0 === t)
                                for (l = o.firstMPT, s = 1 === t ? "e" : "b"; l;) {
                                    if (i = l.t, i.type) {
                                        if (1 === i.type) {
                                            for (r = i.xs0 + i.s + i.xs1, n = 1; n < i.l; n++)
                                                r += i["xn" + n] + i["xs" + (n + 1)];
                                            i[s] = r
                                        }
                                    } else
                                        i[s] = i.s + i.xs0;
                                    l = l._next
                                }
                        }, function(t, e, i, n, r) {
                            this.t = t, this.p = e, this.v = i, this.r = r, n && (n._prev = this, this._next = n)
                        }),
                        bt = (U._parseToProxy = function(t, e, i, n, r, s) {
                            var o,
                                a,
                                l,
                                c,
                                h,
                                u = n,
                                f = {},
                                p = {},
                                d = i._transform,
                                g = N;
                            for (i._transform = null, N = e, n = h = i.parse(t, e, n, r), N = g, s && (i._transform = d, u && (u._prev = null, u._prev && (u._prev._next = null))); n && n !== u;) {
                                if (n.type <= 1 && (a = n.p, p[a] = n.s + n.c, f[a] = n.s, s || (c = new yt(n, "s", a, c, n.r), n.c = 0), 1 === n.type))
                                    for (o = n.l; --o > 0;)
                                        l = "xn" + o, a = n.p + "_" + l, p[a] = n.data[l], f[a] = n[l], s || (c = new yt(n, l, a, c, n.rxp[l]));
                                n = n._next
                            }
                            return {
                                proxy: f,
                                end: p,
                                firstMPT: c,
                                pt: h
                            }
                        }, U.CSSPropTween = function(t, e, n, r, s, a, l, c, h, u, f) {
                            this.t = t, this.p = e, this.s = n, this.c = r, this.n = l || e, t instanceof bt || o.push(this.n), this.r = c, this.type = a || 0, h && (this.pr = h, i = !0), this.b = void 0 === u ? n : u, this.e = void 0 === f ? n + r : f, s && (this._next = s, s._prev = this)
                        }),
                        xt = function(t, e, i, n, r, s) {
                            var o = new bt(t, e, i, n - i, r, -1, s);
                            return o.b = i, o.e = o.xs0 = n, o
                        },
                        wt = a.parseComplex = function(t, e, i, n, r, s, o, l, c, h) {
                            i = i || s || "", "function" == typeof n && (n = n(v, _)), o = new bt(t, e, 0, 0, o, h ? 2 : 1, null, !1, l, i, n), n += "", r && mt.test(n + i) && (n = [i, n], a.colorStringFilter(n), i = n[0], n = n[1]);
                            var f,
                                p,
                                d,
                                g,
                                m,
                                x,
                                w,
                                T,
                                S,
                                P,
                                C,
                                k,
                                R,
                                O = i.split(", ").join(",").split(" "),
                                E = n.split(", ").join(",").split(" "),
                                A = O.length,
                                F = !1 !== u;
                            for (-1 === n.indexOf(",") && -1 === i.indexOf(",") || (-1 !== (n + i).indexOf("rgb") || -1 !== (n + i).indexOf("hsl") ? (O = O.join(" ").replace($, ", ").split(" "), E = E.join(" ").replace($, ", ").split(" ")) : (O = O.join(" ").split(",").join(", ").split(" "), E = E.join(" ").split(",").join(", ").split(" ")), A = O.length), A !== E.length && (O = (s || "").split(" "), A = O.length), o.plugin = c, o.setRatio = h, mt.lastIndex = 0, f = 0; f < A; f++)
                                if (g = O[f], m = E[f], (T = parseFloat(g)) || 0 === T)
                                    o.appendXtra("", T, ct(m, T), m.replace(b, ""), F && -1 !== m.indexOf("px"), !0);
                                else if (r && mt.test(g))
                                    k = m.indexOf(")") + 1, k = ")" + (k ? m.substr(k) : ""), R = -1 !== m.indexOf("hsl") && W, P = m, g = dt(g, R), m = dt(m, R), S = g.length + m.length > 6, S && !W && 0 === m[3] ? (o["xs" + o.l] += o.l ? " transparent" : "transparent", o.e = o.e.split(E[f]).join("transparent")) : (W || (S = !1), R ? o.appendXtra(P.substr(0, P.indexOf("hsl")) + (S ? "hsla(" : "hsl("), g[0], ct(m[0], g[0]), ",", !1, !0).appendXtra("", g[1], ct(m[1], g[1]), "%,", !1).appendXtra("", g[2], ct(m[2], g[2]), S ? "%," : "%" + k, !1) : o.appendXtra(P.substr(0, P.indexOf("rgb")) + (S ? "rgba(" : "rgb("), g[0], m[0] - g[0], ",", !0, !0).appendXtra("", g[1], m[1] - g[1], ",", !0).appendXtra("", g[2], m[2] - g[2], S ? "," : k, !0), S && (g = g.length < 4 ? 1 : g[3], o.appendXtra("", g, (m.length < 4 ? 1 : m[3]) - g, k, !1))), mt.lastIndex = 0;
                                else if (x = g.match(y)) {
                                    if (!(w = m.match(b)) || w.length !== x.length)
                                        return o;
                                    for (d = 0, p = 0; p < x.length; p++)
                                        C = x[p], P = g.indexOf(C, d), o.appendXtra(g.substr(d, P - d), Number(C), ct(w[p], C), "", F && "px" === g.substr(P + C.length, 2), 0 === p), d = P + C.length;
                                    o["xs" + o.l] += g.substr(d)
                                } else
                                    o["xs" + o.l] += o.l || o["xs" + o.l] ? " " + m : m;
                            if (-1 !== n.indexOf("=") && o.data) {
                                for (k = o.xs0 + o.data.s, f = 1; f < o.l; f++)
                                    k += o["xs" + f] + o.data["xn" + f];
                                o.e = k + o["xs" + f]
                            }
                            return o.l || (o.type = -1, o.xs0 = o.e), o.xfirst || o
                        },
                        Tt = 9;
                    for (h = bt.prototype, h.l = h.pr = 0; --Tt > 0;)
                        h["xn" + Tt] = 0, h["xs" + Tt] = "";
                    h.xs0 = "", h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null, h.appendXtra = function(t, e, i, n, r, s) {
                        var o = this,
                            a = o.l;
                        return o["xs" + a] += s && (a || o["xs" + a]) ? " " + t : t || "", i || 0 === a || o.plugin ? (o.l++, o.type = o.setRatio ? 2 : 1, o["xs" + o.l] = n || "", a > 0 ? (o.data["xn" + a] = e + i, o.rxp["xn" + a] = r, o["xn" + a] = e, o.plugin || (o.xfirst = new bt(o, "xn" + a, e, i, o.xfirst || o, 0, o.n, r, o.pr), o.xfirst.xs0 = 0), o) : (o.data = {
                            s: e + i
                        }, o.rxp = {}, o.s = e, o.c = i, o.r = r, o)) : (o["xs" + a] += e + (n || ""), o)
                    };
                    var St = function(t, e) {
                            e = e || {}, this.p = e.prefix ? K(t) || t : t, c[t] = c[this.p] = this, this.format = e.formatter || _t(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                        },
                        Pt = U._registerComplexSpecialProp = function(t, e, i) {
                            "object" != typeof e && (e = {
                                parser: i
                            });
                            var n,
                                r = t.split(","),
                                s = e.defaultValue;
                            for (i = i || [s], n = 0; n < r.length; n++)
                                e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || s, new St(r[n], e)
                        },
                        Ct = U._registerPluginProp = function(t) {
                            if (!c[t]) {
                                var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                                Pt(t, {
                                    parser: function(t, i, n, r, s, o, a) {
                                        var h = l.com.greensock.plugins[e];
                                        return h ? (h._cssRegister(), c[n].parse(t, i, n, r, s, o, a)) : (G(), s)
                                    }
                                })
                            }
                        };
                    h = St.prototype, h.parseComplex = function(t, e, i, n, r, s) {
                        var o,
                            a,
                            l,
                            c,
                            h,
                            u,
                            f = this.keyword;
                        if (this.multi && ($.test(i) || $.test(e) ? (a = e.replace($, "|").split("|"), l = i.replace($, "|").split("|")) : f && (a = [e], l = [i])), l) {
                            for (c = l.length > a.length ? l.length : a.length, o = 0; o < c; o++)
                                e = a[o] = a[o] || this.dflt, i = l[o] = l[o] || this.dflt, f && (h = e.indexOf(f), u = i.indexOf(f), h !== u && (-1 === u ? a[o] = a[o].split(f).join("") : -1 === h && (a[o] += " " + f)));
                            e = a.join(", "), i = l.join(", ")
                        }
                        return wt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, r, s)
                    }, h.parse = function(t, e, i, n, r, o, a) {
                        return this.parseComplex(t.style, this.format(tt(t, this.p, s, !1, this.dflt)), this.format(e), r, o)
                    }, a.registerSpecialProp = function(t, e, i) {
                        Pt(t, {
                            parser: function(t, n, r, s, o, a, l) {
                                var c = new bt(t, r, 0, 0, o, 2, r, !1, i);
                                return c.plugin = a, c.setRatio = e(t, n, s._tween, r), c
                            },
                            priority: i
                        })
                    }, a.useSVGTransformAttr = !0;
                    var kt,
                        Rt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                        Ot = K("transform"),
                        Et = Z + "transform",
                        At = K("transformOrigin"),
                        Ft = null !== K("perspective"),
                        Mt = U.Transform = function() {
                            this.perspective = parseFloat(a.defaultTransformPerspective) || 0, this.force3D = !(!1 === a.defaultForce3D || !Ft) && (a.defaultForce3D || "auto")
                        },
                        Dt = n.SVGElement,
                        $t = function(t, e, i) {
                            var n,
                                r = B.createElementNS("http://www.w3.org/2000/svg", t),
                                s = /([a-z])([A-Z])/g;
                            for (n in i)
                                r.setAttributeNS(null, n.replace(s, "$1-$2").toLowerCase(), i[n]);
                            return e.appendChild(r), r
                        },
                        zt = B.documentElement || {},
                        Lt = function() {
                            var t,
                                e,
                                i,
                                r = m || /Android/i.test(H) && !n.chrome;
                            return B.createElementNS && !r && (t = $t("svg", zt), e = $t("rect", t, {
                                width: 100,
                                height: 50,
                                x: 100
                            }), i = e.getBoundingClientRect().width, e.style[At] = "50% 50%", e.style[Ot] = "scaleX(0.5)", r = i === e.getBoundingClientRect().width && !(d && Ft), zt.removeChild(t)), r
                        }(),
                        It = function(t, e, i, n, r, s) {
                            var o,
                                l,
                                c,
                                h,
                                u,
                                f,
                                p,
                                d,
                                g,
                                m,
                                _,
                                v,
                                y,
                                b,
                                x = t._gsTransform,
                                w = Yt(t, !0);
                            x && (y = x.xOrigin, b = x.yOrigin), (!n || (o = n.split(" ")).length < 2) && (p = t.getBBox(), 0 === p.x && 0 === p.y && p.width + p.height === 0 && (p = {
                                x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0,
                                y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0,
                                width: 0,
                                height: 0
                            }), e = lt(e).split(" "), o = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * p.width : parseFloat(e[0])) + p.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * p.height : parseFloat(e[1])) + p.y]), i.xOrigin = h = parseFloat(o[0]), i.yOrigin = u = parseFloat(o[1]), n && w !== jt && (f = w[0], p = w[1], d = w[2], g = w[3], m = w[4], _ = w[5], (v = f * g - p * d) && (l = h * (g / v) + u * (-d / v) + (d * _ - g * m) / v, c = h * (-p / v) + u * (f / v) - (f * _ - p * m) / v, h = i.xOrigin = o[0] = l, u = i.yOrigin = o[1] = c)), x && (s && (i.xOffset = x.xOffset, i.yOffset = x.yOffset, x = i), r || !1 !== r && !1 !== a.defaultSmoothOrigin ? (l = h - y, c = u - b, x.xOffset += l * w[0] + c * w[2] - l, x.yOffset += l * w[1] + c * w[3] - c) : x.xOffset = x.yOffset = 0), s || t.setAttribute("data-svg-origin", o.join(" "))
                        },
                        Nt = function(t) {
                            var e,
                                i = j("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                                n = this.parentNode,
                                r = this.nextSibling,
                                s = this.style.cssText;
                            if (zt.appendChild(i), i.appendChild(this), this.style.display = "block", t)
                                try {
                                    e = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = Nt
                                } catch (t) {}
                            else
                                this._originalGetBBox && (e = this._originalGetBBox());
                            return r ? n.insertBefore(this, r) : n.appendChild(this), zt.removeChild(i), this.style.cssText = s, e
                        },
                        Xt = function(t) {
                            try {
                                return t.getBBox()
                            } catch (e) {
                                return Nt.call(t, !0)
                            }
                        },
                        Bt = function(t) {
                            return !(!Dt || !t.getCTM || t.parentNode && !t.ownerSVGElement || !Xt(t))
                        },
                        jt = [1, 0, 0, 1, 0, 0],
                        Yt = function(t, e) {
                            var i,
                                n,
                                r,
                                s,
                                o,
                                a,
                                l = t._gsTransform || new Mt,
                                c = t.style;
                            if (Ot ? n = tt(t, Et, null, !0) : t.currentStyle && (n = t.currentStyle.filter.match(M), n = n && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), l.x || 0, l.y || 0].join(",") : ""), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, !Ot || !(a = !J(t) || "none" === J(t).display) && t.parentNode || (a && (s = c.display, c.display = "block"), t.parentNode || (o = 1, zt.appendChild(t)), n = tt(t, Et, null, !0), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, s ? c.display = s : a && Vt(c, "display"), o && zt.removeChild(t)), (l.svg || t.getCTM && Bt(t)) && (i && -1 !== (c[Ot] + "").indexOf("matrix") && (n = c[Ot], i = 0), r = t.getAttribute("transform"), i && r && (-1 !== r.indexOf("matrix") ? (n = r, i = 0) : -1 !== r.indexOf("translate") && (n = "matrix(1,0,0,1," + r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i)
                                return jt;
                            for (r = (n || "").match(y) || [], Tt = r.length; --Tt > -1;)
                                s = Number(r[Tt]), r[Tt] = (o = s - (s |= 0)) ? (1e5 * o + (o < 0 ? -.5 : .5) | 0) / 1e5 + s : s;
                            return e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
                        },
                        qt = U.getTransform = function(t, i, n, r) {
                            if (t._gsTransform && n && !r)
                                return t._gsTransform;
                            var s,
                                o,
                                l,
                                c,
                                h,
                                u,
                                f = n ? t._gsTransform || new Mt : new Mt,
                                p = f.scaleX < 0,
                                d = Ft ? parseFloat(tt(t, At, i, !1, "0 0 0").split(" ")[2]) || f.zOrigin || 0 : 0,
                                g = parseFloat(a.defaultTransformPerspective) || 0;
                            if (f.svg = !(!t.getCTM || !Bt(t)), f.svg && (It(t, tt(t, At, i, !1, "50% 50%") + "", f, t.getAttribute("data-svg-origin")), kt = a.useSVGTransformAttr || Lt), (s = Yt(t)) !== jt) {
                                if (16 === s.length) {
                                    var m,
                                        _,
                                        v,
                                        y,
                                        b,
                                        x = s[0],
                                        w = s[1],
                                        T = s[2],
                                        S = s[3],
                                        P = s[4],
                                        C = s[5],
                                        k = s[6],
                                        R = s[7],
                                        O = s[8],
                                        E = s[9],
                                        A = s[10],
                                        F = s[12],
                                        M = s[13],
                                        D = s[14],
                                        $ = s[11],
                                        z = Math.atan2(k, A);
                                    f.zOrigin && (D = -f.zOrigin, F = O * D - s[12], M = E * D - s[13], D = A * D + f.zOrigin - s[14]), f.rotationX = z * I, z && (y = Math.cos(-z), b = Math.sin(-z), m = P * y + O * b, _ = C * y + E * b, v = k * y + A * b, O = P * -b + O * y, E = C * -b + E * y, A = k * -b + A * y, $ = R * -b + $ * y, P = m, C = _, k = v), z = Math.atan2(-T, A), f.rotationY = z * I, z && (y = Math.cos(-z), b = Math.sin(-z), m = x * y - O * b, _ = w * y - E * b, v = T * y - A * b, E = w * b + E * y, A = T * b + A * y, $ = S * b + $ * y, x = m, w = _, T = v), z = Math.atan2(w, x), f.rotation = z * I, z && (y = Math.cos(z), b = Math.sin(z), m = x * y + w * b, _ = P * y + C * b, v = O * y + E * b, w = w * y - x * b, C = C * y - P * b, E = E * y - O * b, x = m, P = _, O = v), f.rotationX && Math.abs(f.rotationX) + Math.abs(f.rotation) > 359.9 && (f.rotationX = f.rotation = 0, f.rotationY = 180 - f.rotationY), z = Math.atan2(P, C), f.scaleX = (1e5 * Math.sqrt(x * x + w * w + T * T) + .5 | 0) / 1e5, f.scaleY = (1e5 * Math.sqrt(C * C + k * k) + .5 | 0) / 1e5, f.scaleZ = (1e5 * Math.sqrt(O * O + E * E + A * A) + .5 | 0) / 1e5, x /= f.scaleX, P /= f.scaleY, w /= f.scaleX, C /= f.scaleY, Math.abs(z) > 2e-5 ? (f.skewX = z * I, P = 0, "simple" !== f.skewType && (f.scaleY *= 1 / Math.cos(z))) : f.skewX = 0, f.perspective = $ ? 1 / ($ < 0 ? -$ : $) : 0, f.x = F, f.y = M, f.z = D, f.svg && (f.x -= f.xOrigin - (f.xOrigin * x - f.yOrigin * P), f.y -= f.yOrigin - (f.yOrigin * w - f.xOrigin * C))
                                } else if (!Ft || r || !s.length || f.x !== s[4] || f.y !== s[5] || !f.rotationX && !f.rotationY) {
                                    var L = s.length >= 6,
                                        N = L ? s[0] : 1,
                                        X = s[1] || 0,
                                        B = s[2] || 0,
                                        j = L ? s[3] : 1;
                                    f.x = s[4] || 0, f.y = s[5] || 0, l = Math.sqrt(N * N + X * X), c = Math.sqrt(j * j + B * B), h = N || X ? Math.atan2(X, N) * I : f.rotation || 0, u = B || j ? Math.atan2(B, j) * I + h : f.skewX || 0, f.scaleX = l, f.scaleY = c, f.rotation = h, f.skewX = u, Ft && (f.rotationX = f.rotationY = f.z = 0, f.perspective = g, f.scaleZ = 1), f.svg && (f.x -= f.xOrigin - (f.xOrigin * N + f.yOrigin * B), f.y -= f.yOrigin - (f.xOrigin * X + f.yOrigin * j))
                                }
                                Math.abs(f.skewX) > 90 && Math.abs(f.skewX) < 270 && (p ? (f.scaleX *= -1, f.skewX += f.rotation <= 0 ? 180 : -180, f.rotation += f.rotation <= 0 ? 180 : -180) : (f.scaleY *= -1, f.skewX += f.skewX <= 0 ? 180 : -180)), f.zOrigin = d;
                                for (o in f)
                                    f[o] < 2e-5 && f[o] > -2e-5 && (f[o] = 0)
                            }
                            return n && (t._gsTransform = f, f.svg && (kt && t.style[Ot] ? e.delayedCall(.001, function() {
                                Vt(t.style, Ot)
                            }) : !kt && t.getAttribute("transform") && e.delayedCall(.001, function() {
                                t.removeAttribute("transform")
                            }))), f
                        },
                        Ut = function(t) {
                            var e,
                                i,
                                n = this.data,
                                r = -n.rotation * L,
                                s = r + n.skewX * L,
                                o = (Math.cos(r) * n.scaleX * 1e5 | 0) / 1e5,
                                a = (Math.sin(r) * n.scaleX * 1e5 | 0) / 1e5,
                                l = (Math.sin(s) * -n.scaleY * 1e5 | 0) / 1e5,
                                c = (Math.cos(s) * n.scaleY * 1e5 | 0) / 1e5,
                                h = this.t.style,
                                u = this.t.currentStyle;
                            if (u) {
                                i = a, a = -l, l = -i, e = u.filter, h.filter = "";
                                var f,
                                    p,
                                    d = this.t.offsetWidth,
                                    g = this.t.offsetHeight,
                                    _ = "absolute" !== u.position,
                                    v = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + a + ", M21=" + l + ", M22=" + c,
                                    y = n.x + d * n.xPercent / 100,
                                    b = n.y + g * n.yPercent / 100;
                                if (null != n.ox && (f = (n.oxp ? d * n.ox * .01 : n.ox) - d / 2, p = (n.oyp ? g * n.oy * .01 : n.oy) - g / 2, y += f - (f * o + p * a), b += p - (f * l + p * c)), _ ? (f = d / 2, p = g / 2, v += ", Dx=" + (f - (f * o + p * a) + y) + ", Dy=" + (p - (f * l + p * c) + b) + ")") : v += ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? h.filter = e.replace(D, v) : h.filter = v + " " + e, 0 !== t && 1 !== t || 1 === o && 0 === a && 0 === l && 1 === c && (_ && -1 === v.indexOf("Dx=0, Dy=0") || S.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && h.removeAttribute("filter")), !_) {
                                    var x,
                                        w,
                                        P,
                                        C = m < 8 ? 1 : -1;
                                    for (f = n.ieOffsetX || 0, p = n.ieOffsetY || 0, n.ieOffsetX = Math.round((d - ((o < 0 ? -o : o) * d + (a < 0 ? -a : a) * g)) / 2 + y), n.ieOffsetY = Math.round((g - ((c < 0 ? -c : c) * g + (l < 0 ? -l : l) * d)) / 2 + b), Tt = 0; Tt < 4; Tt++)
                                        w = ot[Tt], x = u[w], i = -1 !== x.indexOf("px") ? parseFloat(x) : et(this.t, w, parseFloat(x), x.replace(T, "")) || 0, P = i !== n[w] ? Tt < 2 ? -n.ieOffsetX : -n.ieOffsetY : Tt < 2 ? f - n.ieOffsetX : p - n.ieOffsetY, h[w] = (n[w] = Math.round(i - P * (0 === Tt || 2 === Tt ? 1 : C))) + "px"
                                }
                            }
                        },
                        Ht = U.set3DTransformRatio = U.setTransformRatio = function(t) {
                            var e,
                                i,
                                n,
                                r,
                                s,
                                o,
                                a,
                                l,
                                c,
                                h,
                                u,
                                f,
                                p,
                                g,
                                m,
                                _,
                                v,
                                y,
                                b,
                                x,
                                w,
                                T,
                                S,
                                P = this.data,
                                C = this.t.style,
                                k = P.rotation,
                                R = P.rotationX,
                                O = P.rotationY,
                                E = P.scaleX,
                                A = P.scaleY,
                                F = P.scaleZ,
                                M = P.x,
                                D = P.y,
                                $ = P.z,
                                z = P.svg,
                                I = P.perspective,
                                N = P.force3D,
                                X = P.skewY,
                                B = P.skewX;
                            if (X && (B += X, k += X), ((1 === t || 0 === t) && "auto" === N && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !N) && !$ && !I && !O && !R && 1 === F || kt && z || !Ft)
                                return void (k || B || z ? (k *= L, T = B * L, S = 1e5, i = Math.cos(k) * E, s = Math.sin(k) * E, n = Math.sin(k - T) * -A, o = Math.cos(k - T) * A, T && "simple" === P.skewType && (e = Math.tan(T - X * L), e = Math.sqrt(1 + e * e), n *= e, o *= e, X && (e = Math.tan(X * L), e = Math.sqrt(1 + e * e), i *= e, s *= e)), z && (M += P.xOrigin - (P.xOrigin * i + P.yOrigin * n) + P.xOffset, D += P.yOrigin - (P.xOrigin * s + P.yOrigin * o) + P.yOffset, kt && (P.xPercent || P.yPercent) && (m = this.t.getBBox(), M += .01 * P.xPercent * m.width, D += .01 * P.yPercent * m.height), m = 1e-6, M < m && M > -m && (M = 0), D < m && D > -m && (D = 0)), b = (i * S | 0) / S + "," + (s * S | 0) / S + "," + (n * S | 0) / S + "," + (o * S | 0) / S + "," + M + "," + D + ")", z && kt ? this.t.setAttribute("transform", "matrix(" + b) : C[Ot] = (P.xPercent || P.yPercent ? "translate(" + P.xPercent + "%," + P.yPercent + "%) matrix(" : "matrix(") + b) : C[Ot] = (P.xPercent || P.yPercent ? "translate(" + P.xPercent + "%," + P.yPercent + "%) matrix(" : "matrix(") + E + ",0,0," + A + "," + M + "," + D + ")");
                            if (d && (m = 1e-4, E < m && E > -m && (E = F = 2e-5), A < m && A > -m && (A = F = 2e-5), !I || P.z || P.rotationX || P.rotationY || (I = 0)), k || B)
                                k *= L, _ = i = Math.cos(k), v = s = Math.sin(k), B && (k -= B * L, _ = Math.cos(k), v = Math.sin(k), "simple" === P.skewType && (e = Math.tan((B - X) * L), e = Math.sqrt(1 + e * e), _ *= e, v *= e, P.skewY && (e = Math.tan(X * L), e = Math.sqrt(1 + e * e), i *= e, s *= e))), n = -v, o = _;
                            else {
                                if (!(O || R || 1 !== F || I || z))
                                    return void (C[Ot] = (P.xPercent || P.yPercent ? "translate(" + P.xPercent + "%," + P.yPercent + "%) translate3d(" : "translate3d(") + M + "px," + D + "px," + $ + "px)" + (1 !== E || 1 !== A ? " scale(" + E + "," + A + ")" : ""));
                                i = o = 1, n = s = 0
                            }
                            h = 1, r = a = l = c = u = f = 0, p = I ? -1 / I : 0, g = P.zOrigin, m = 1e-6, x = ",", w = "0", k = O * L, k && (_ = Math.cos(k), v = Math.sin(k), l = -v, u = p * -v, r = i * v, a = s * v, h = _, p *= _, i *= _, s *= _), k = R * L, k && (_ = Math.cos(k), v = Math.sin(k), e = n * _ + r * v, y = o * _ + a * v, c = h * v, f = p * v, r = n * -v + r * _, a = o * -v + a * _, h *= _, p *= _, n = e, o = y), 1 !== F && (r *= F, a *= F, h *= F, p *= F), 1 !== A && (n *= A, o *= A, c *= A, f *= A), 1 !== E && (i *= E, s *= E, l *= E, u *= E), (g || z) && (g && (M += r * -g, D += a * -g, $ += h * -g + g), z && (M += P.xOrigin - (P.xOrigin * i + P.yOrigin * n) + P.xOffset, D += P.yOrigin - (P.xOrigin * s + P.yOrigin * o) + P.yOffset), M < m && M > -m && (M = w), D < m && D > -m && (D = w), $ < m && $ > -m && ($ = 0)), b = P.xPercent || P.yPercent ? "translate(" + P.xPercent + "%," + P.yPercent + "%) matrix3d(" : "matrix3d(", b += (i < m && i > -m ? w : i) + x + (s < m && s > -m ? w : s) + x + (l < m && l > -m ? w : l), b += x + (u < m && u > -m ? w : u) + x + (n < m && n > -m ? w : n) + x + (o < m && o > -m ? w : o), R || O || 1 !== F ? (b += x + (c < m && c > -m ? w : c) + x + (f < m && f > -m ? w : f) + x + (r < m && r > -m ? w : r), b += x + (a < m && a > -m ? w : a) + x + (h < m && h > -m ? w : h) + x + (p < m && p > -m ? w : p) + x) : b += ",0,0,0,0,1,0,", b += M + x + D + x + $ + x + (I ? 1 + -$ / I : 1) + ")", C[Ot] = b
                        };
                    h = Mt.prototype, h.x = h.y = h.z = h.skewX = h.skewY = h.rotation = h.rotationX = h.rotationY = h.zOrigin = h.xPercent = h.yPercent = h.xOffset = h.yOffset = 0, h.scaleX = h.scaleY = h.scaleZ = 1, Pt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                        parser: function(t, e, i, n, r, o, l) {
                            if (n._lastParsedTransform === l)
                                return r;
                            n._lastParsedTransform = l;
                            var c,
                                h = l.scale && "function" == typeof l.scale ? l.scale : 0;
                            "function" == typeof l[i] && (c = l[i], l[i] = e), h && (l.scale = h(v, t));
                            var u,
                                f,
                                p,
                                d,
                                g,
                                m,
                                y,
                                b,
                                x,
                                w = t._gsTransform,
                                T = t.style,
                                S = Rt.length,
                                P = l,
                                C = {},
                                k = qt(t, s, !0, P.parseTransform),
                                R = P.transform && ("function" == typeof P.transform ? P.transform(v, _) : P.transform);
                            if (k.skewType = P.skewType || k.skewType || a.defaultSkewType, n._transform = k, R && "string" == typeof R && Ot)
                                f = Y.style, f[Ot] = R, f.display = "block", f.position = "absolute", B.body.appendChild(Y), u = qt(Y, null, !1), "simple" === k.skewType && (u.scaleY *= Math.cos(u.skewX * L)), k.svg && (m = k.xOrigin, y = k.yOrigin, u.x -= k.xOffset, u.y -= k.yOffset, (P.transformOrigin || P.svgOrigin) && (R = {}, It(t, lt(P.transformOrigin), R, P.svgOrigin, P.smoothOrigin, !0), m = R.xOrigin, y = R.yOrigin, u.x -= R.xOffset - k.xOffset, u.y -= R.yOffset - k.yOffset), (m || y) && (b = Yt(Y, !0), u.x -= m - (m * b[0] + y * b[2]), u.y -= y - (m * b[1] + y * b[3]))), B.body.removeChild(Y), u.perspective || (u.perspective = k.perspective), null != P.xPercent && (u.xPercent = ht(P.xPercent, k.xPercent)), null != P.yPercent && (u.yPercent = ht(P.yPercent, k.yPercent));
                            else if ("object" == typeof P) {
                                if (u = {
                                    scaleX: ht(null != P.scaleX ? P.scaleX : P.scale, k.scaleX),
                                    scaleY: ht(null != P.scaleY ? P.scaleY : P.scale, k.scaleY),
                                    scaleZ: ht(P.scaleZ, k.scaleZ),
                                    x: ht(P.x, k.x),
                                    y: ht(P.y, k.y),
                                    z: ht(P.z, k.z),
                                    xPercent: ht(P.xPercent, k.xPercent),
                                    yPercent: ht(P.yPercent, k.yPercent),
                                    perspective: ht(P.transformPerspective, k.perspective)
                                }, null != (g = P.directionalRotation))
                                    if ("object" == typeof g)
                                        for (f in g)
                                            P[f] = g[f];
                                    else
                                        P.rotation = g;
                                "string" == typeof P.x && -1 !== P.x.indexOf("%") && (u.x = 0, u.xPercent = ht(P.x, k.xPercent)), "string" == typeof P.y && -1 !== P.y.indexOf("%") && (u.y = 0, u.yPercent = ht(P.y, k.yPercent)), u.rotation = ut("rotation" in P ? P.rotation : "shortRotation" in P ? P.shortRotation + "_short" : "rotationZ" in P ? P.rotationZ : k.rotation, k.rotation, "rotation", C), Ft && (u.rotationX = ut("rotationX" in P ? P.rotationX : "shortRotationX" in P ? P.shortRotationX + "_short" : k.rotationX || 0, k.rotationX, "rotationX", C), u.rotationY = ut("rotationY" in P ? P.rotationY : "shortRotationY" in P ? P.shortRotationY + "_short" : k.rotationY || 0, k.rotationY, "rotationY", C)), u.skewX = ut(P.skewX, k.skewX), u.skewY = ut(P.skewY, k.skewY)
                            }
                            for (Ft && null != P.force3D && (k.force3D = P.force3D, d = !0), p = k.force3D || k.z || k.rotationX || k.rotationY || u.z || u.rotationX || u.rotationY || u.perspective, p || null == P.scale || (u.scaleZ = 1); --S > -1;)
                                x = Rt[S], ((R = u[x] - k[x]) > 1e-6 || R < -1e-6 || null != P[x] || null != N[x]) && (d = !0, r = new bt(k, x, k[x], R, r), x in C && (r.e = C[x]), r.xs0 = 0, r.plugin = o, n._overwriteProps.push(r.n));
                            return R = P.transformOrigin, k.svg && (R || P.svgOrigin) && (m = k.xOffset, y = k.yOffset, It(t, lt(R), u, P.svgOrigin, P.smoothOrigin), r = xt(k, "xOrigin", (w ? k : u).xOrigin, u.xOrigin, r, "transformOrigin"), r = xt(k, "yOrigin", (w ? k : u).yOrigin, u.yOrigin, r, "transformOrigin"), m === k.xOffset && y === k.yOffset || (r = xt(k, "xOffset", w ? m : k.xOffset, k.xOffset, r, "transformOrigin"), r = xt(k, "yOffset", w ? y : k.yOffset, k.yOffset, r, "transformOrigin")), R = "0px 0px"), (R || Ft && p && k.zOrigin) && (Ot ? (d = !0, x = At, R = (R || tt(t, x, s, !1, "50% 50%")) + "", r = new bt(T, x, 0, 0, r, -1, "transformOrigin"), r.b = T[x], r.plugin = o, Ft ? (f = k.zOrigin, R = R.split(" "), k.zOrigin = (R.length > 2 && (0 === f || "0px" !== R[2]) ? parseFloat(R[2]) : f) || 0, r.xs0 = r.e = R[0] + " " + (R[1] || "50%") + " 0px", r = new bt(k, "zOrigin", 0, 0, r, -1, r.n), r.b = f, r.xs0 = r.e = k.zOrigin) : r.xs0 = r.e = R) : lt(R + "", k)), d && (n._transformType = k.svg && kt || !p && 3 !== this._transformType ? 2 : 3), c && (l[i] = c), h && (l.scale = h), r
                        },
                        prefix: !0
                    }), Pt("boxShadow", {
                        defaultValue: "0px 0px 0px 0px #999",
                        prefix: !0,
                        color: !0,
                        multi: !0,
                        keyword: "inset"
                    }), Pt("borderRadius", {
                        defaultValue: "0px",
                        parser: function(t, e, i, n, o, a) {
                            e = this.format(e);
                            var l,
                                c,
                                h,
                                u,
                                f,
                                p,
                                d,
                                g,
                                m,
                                _,
                                v,
                                y,
                                b,
                                x,
                                w,
                                T,
                                S = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                                P = t.style;
                            for (m = parseFloat(t.offsetWidth), _ = parseFloat(t.offsetHeight), l = e.split(" "), c = 0; c < S.length; c++)
                                this.p.indexOf("border") && (S[c] = K(S[c])), f = u = tt(t, S[c], s, !1, "0px"), -1 !== f.indexOf(" ") && (u = f.split(" "), f = u[0], u = u[1]), p = h = l[c], d = parseFloat(f), y = f.substr((d + "").length), b = "=" === p.charAt(1), b ? (g = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), g *= parseFloat(p), v = p.substr((g + "").length - (g < 0 ? 1 : 0)) || "") : (g = parseFloat(p), v = p.substr((g + "").length)), "" === v && (v = r[i] || y), v !== y && (x = et(t, "borderLeft", d, y), w = et(t, "borderTop", d, y), "%" === v ? (f = x / m * 100 + "%", u = w / _ * 100 + "%") : "em" === v ? (T = et(t, "borderLeft", 1, "em"), f = x / T + "em", u = w / T + "em") : (f = x + "px", u = w + "px"), b && (p = parseFloat(f) + g + v, h = parseFloat(u) + g + v)), o = wt(P, S[c], f + " " + u, p + " " + h, !1, "0px", o);
                            return o
                        },
                        prefix: !0,
                        formatter: _t("0px 0px 0px 0px", !1, !0)
                    }), Pt("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                        defaultValue: "0px",
                        parser: function(t, e, i, n, r, o) {
                            return wt(t.style, i, this.format(tt(t, i, s, !1, "0px 0px")), this.format(e), !1, "0px", r)
                        },
                        prefix: !0,
                        formatter: _t("0px 0px", !1, !0)
                    }), Pt("backgroundPosition", {
                        defaultValue: "0 0",
                        parser: function(t, e, i, n, r, o) {
                            var a,
                                l,
                                c,
                                h,
                                u,
                                f,
                                p = "background-position",
                                d = s || J(t, null),
                                g = this.format((d ? m ? d.getPropertyValue(p + "-x") + " " + d.getPropertyValue(p + "-y") : d.getPropertyValue(p) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                                _ = this.format(e);
                            if (-1 !== g.indexOf("%") != (-1 !== _.indexOf("%")) && _.split(",").length < 2 && (f = tt(t, "backgroundImage").replace(E, "")) && "none" !== f) {
                                for (a = g.split(" "), l = _.split(" "), q.setAttribute("src", f), c = 2; --c > -1;)
                                    g = a[c], (h = -1 !== g.indexOf("%")) !== (-1 !== l[c].indexOf("%")) && (u = 0 === c ? t.offsetWidth - q.width : t.offsetHeight - q.height, a[c] = h ? parseFloat(g) / 100 * u + "px" : parseFloat(g) / u * 100 + "%");
                                g = a.join(" ")
                            }
                            return this.parseComplex(t.style, g, _, r, o)
                        },
                        formatter: lt
                    }), Pt("backgroundSize", {
                        defaultValue: "0 0",
                        formatter: function(t) {
                            return t += "", lt(-1 === t.indexOf(" ") ? t + " " + t : t)
                        }
                    }), Pt("perspective", {
                        defaultValue: "0px",
                        prefix: !0
                    }), Pt("perspectiveOrigin", {
                        defaultValue: "50% 50%",
                        prefix: !0
                    }), Pt("transformStyle", {
                        prefix: !0
                    }), Pt("backfaceVisibility", {
                        prefix: !0
                    }), Pt("userSelect", {
                        prefix: !0
                    }), Pt("margin", {
                        parser: vt("marginTop,marginRight,marginBottom,marginLeft")
                    }), Pt("padding", {
                        parser: vt("paddingTop,paddingRight,paddingBottom,paddingLeft")
                    }), Pt("clip", {
                        defaultValue: "rect(0px,0px,0px,0px)",
                        parser: function(t, e, i, n, r, o) {
                            var a,
                                l,
                                c;
                            return m < 9 ? (l = t.currentStyle, c = m < 8 ? " " : ",", a = "rect(" + l.clipTop + c + l.clipRight + c + l.clipBottom + c + l.clipLeft + ")", e = this.format(e).split(",").join(c)) : (a = this.format(tt(t, this.p, s, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, a, e, r, o)
                        }
                    }), Pt("textShadow", {
                        defaultValue: "0px 0px 0px #999",
                        color: !0,
                        multi: !0
                    }), Pt("autoRound,strictUnits", {
                        parser: function(t, e, i, n, r) {
                            return r
                        }
                    }), Pt("border", {
                        defaultValue: "0px solid #000",
                        parser: function(t, e, i, n, r, o) {
                            var a = tt(t, "borderTopWidth", s, !1, "0px"),
                                l = this.format(e).split(" "),
                                c = l[0].replace(T, "");
                            return "px" !== c && (a = parseFloat(a) / et(t, "borderTopWidth", 1, c) + c), this.parseComplex(t.style, this.format(a + " " + tt(t, "borderTopStyle", s, !1, "solid") + " " + tt(t, "borderTopColor", s, !1, "#000")), l.join(" "), r, o)
                        },
                        color: !0,
                        formatter: function(t) {
                            var e = t.split(" ");
                            return e[0] + " " + (e[1] || "solid") + " " + (t.match(mt) || ["#000"])[0]
                        }
                    }), Pt("borderWidth", {
                        parser: vt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                    }), Pt("float,cssFloat,styleFloat", {
                        parser: function(t, e, i, n, r, s) {
                            var o = t.style,
                                a = "cssFloat" in o ? "cssFloat" : "styleFloat";
                            return new bt(o, a, 0, 0, r, -1, i, !1, 0, o[a], e)
                        }
                    });
                    var Wt = function(t) {
                        var e,
                            i = this.t,
                            n = i.filter || tt(this.data, "filter") || "",
                            r = this.s + this.c * t | 0;
                        100 === r && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), e = !tt(this.data, "filter")) : (i.filter = n.replace(C, ""), e = !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"), -1 === n.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = n + " alpha(opacity=" + r + ")") : i.filter = n.replace(S, "opacity=" + r))
                    };
                    Pt("opacity,alpha,autoAlpha", {
                        defaultValue: "1",
                        parser: function(t, e, i, n, r, o) {
                            var a = parseFloat(tt(t, "opacity", s, !1, "1")),
                                l = t.style,
                                c = "autoAlpha" === i;
                            return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a), c && 1 === a && "hidden" === tt(t, "visibility", s) && 0 !== e && (a = 0), W ? r = new bt(l, "opacity", a, e - a, r) : (r = new bt(l, "opacity", 100 * a, 100 * (e - a), r), r.xn1 = c ? 1 : 0, l.zoom = 1, r.type = 2, r.b = "alpha(opacity=" + r.s + ")", r.e = "alpha(opacity=" + (r.s + r.c) + ")", r.data = t, r.plugin = o, r.setRatio = Wt), c && (r = new bt(l, "visibility", 0, 0, r, -1, null, !1, 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), r.xs0 = "inherit", n._overwriteProps.push(r.n), n._overwriteProps.push(i)), r
                        }
                    });
                    var Vt = function(t, e) {
                            e && (t.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), t.removeProperty(e.replace(R, "-$1").toLowerCase())) : t.removeAttribute(e))
                        },
                        Gt = function(t) {
                            if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                                this.t.setAttribute("class", 0 === t ? this.b : this.e);
                                for (var e = this.data, i = this.t.style; e;)
                                    e.v ? i[e.p] = e.v : Vt(i, e.p), e = e._next;
                                1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                            } else
                                this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                        };
                    Pt("className", {
                        parser: function(t, e, n, r, o, a, l) {
                            var c,
                                h,
                                u,
                                f,
                                p,
                                d = t.getAttribute("class") || "",
                                g = t.style.cssText;
                            if (o = r._classNamePT = new bt(t, n, 0, 0, o, 2), o.setRatio = Gt, o.pr = -11, i = !0, o.b = d, h = nt(t, s), u = t._gsClassPT) {
                                for (f = {}, p = u.data; p;)
                                    f[p.p] = 1, p = p._next;
                                u.setRatio(1)
                            }
                            return t._gsClassPT = o, o.e = "=" !== e.charAt(1) ? e : d.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", o.e), c = rt(t, h, nt(t), l, f), t.setAttribute("class", d), o.data = c.firstMPT, t.style.cssText = g, o = o.xfirst = r.parse(t, c.difs, o, a)
                        }
                    });
                    var Zt = function(t) {
                        if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                            var e,
                                i,
                                n,
                                r,
                                s,
                                o = this.t.style,
                                a = c.transform.parse;
                            if ("all" === this.e)
                                o.cssText = "", r = !0;
                            else
                                for (e = this.e.split(" ").join("").split(","), n = e.length; --n > -1;)
                                    i = e[n], c[i] && (c[i].parse === a ? r = !0 : i = "transformOrigin" === i ? At : c[i].p), Vt(o, i);
                            r && (Vt(o, Ot), (s = this.t._gsTransform) && (s.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                        }
                    };
                    for (Pt("clearProps", {
                        parser: function(t, e, n, r, s) {
                            return s = new bt(t, n, 0, 0, s, 2), s.setRatio = Zt, s.e = e, s.pr = -10, s.data = r._tween, i = !0, s
                        }
                    }), h = "bezier,throwProps,physicsProps,physics2D".split(","), Tt = h.length; Tt--;)
                        Ct(h[Tt]);
                    h = a.prototype, h._firstPT = h._lastParsedTransform = h._transform = null, h._onInitTween = function(t, e, n, l) {
                        if (!t.nodeType)
                            return !1;
                        this._target = _ = t, this._tween = n, this._vars = e, v = l, u = e.autoRound, i = !1, r = e.suffixMap || a.suffixMap, s = J(t, ""), o = this._overwriteProps;
                        var h,
                            d,
                            m,
                            y,
                            b,
                            x,
                            w,
                            T,
                            S,
                            C = t.style;
                        if (f && "" === C.zIndex && ("auto" !== (h = tt(t, "zIndex", s)) && "" !== h || this._addLazySet(C, "zIndex", 0)), "string" == typeof e && (y = C.cssText, h = nt(t, s), C.cssText = y + ";" + e, h = rt(t, h, nt(t)).difs, !W && P.test(e) && (h.opacity = parseFloat(RegExp.$1)), e = h, C.cssText = y), e.className ? this._firstPT = d = c.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = d = this.parse(t, e, null), this._transformType) {
                            for (S = 3 === this._transformType, Ot ? p && (f = !0, "" === C.zIndex && ("auto" !== (w = tt(t, "zIndex", s)) && "" !== w || this._addLazySet(C, "zIndex", 0)), g && this._addLazySet(C, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (S ? "visible" : "hidden"))) : C.zoom = 1, m = d; m && m._next;)
                                m = m._next;
                            T = new bt(t, "transform", 0, 0, null, 2), this._linkCSSP(T, null, m), T.setRatio = Ot ? Ht : Ut, T.data = this._transform || qt(t, s, !0), T.tween = n, T.pr = -1, o.pop()
                        }
                        if (i) {
                            for (; d;) {
                                for (x = d._next, m = y; m && m.pr > d.pr;)
                                    m = m._next;
                                (d._prev = m ? m._prev : b) ? d._prev._next = d : y = d, (d._next = m) ? m._prev = d : b = d, d = x
                            }
                            this._firstPT = y
                        }
                        return !0
                    }, h.parse = function(t, e, i, n) {
                        var o,
                            a,
                            l,
                            h,
                            f,
                            p,
                            d,
                            g,
                            m,
                            y,
                            b = t.style;
                        for (o in e) {
                            if (p = e[o], "function" == typeof p && (p = p(v, _)), a = c[o])
                                i = a.parse(t, p, o, this, i, n, e);
                            else {
                                if ("--" === o.substr(0, 2)) {
                                    this._tween._propLookup[o] = this._addTween.call(this._tween, t.style, "setProperty", J(t).getPropertyValue(o) + "", p + "", o, !1, o);
                                    continue
                                }
                                f = tt(t, o, s) + "", m = "string" == typeof p, "color" === o || "fill" === o || "stroke" === o || -1 !== o.indexOf("Color") || m && k.test(p) ? (m || (p = dt(p), p = (p.length > 3 ? "rgba(" : "rgb(") + p.join(",") + ")"), i = wt(b, o, f, p, !0, "transparent", i, 0, n)) : m && z.test(p) ? i = wt(b, o, f, p, !0, null, i, 0, n) : (l = parseFloat(f), d = l || 0 === l ? f.substr((l + "").length) : "", "" !== f && "auto" !== f || ("width" === o || "height" === o ? (l = at(t, o, s), d = "px") : "left" === o || "top" === o ? (l = it(t, o, s), d = "px") : (l = "opacity" !== o ? 0 : 1, d = "")), y = m && "=" === p.charAt(1), y ? (h = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), h *= parseFloat(p), g = p.replace(T, "")) : (h = parseFloat(p), g = m ? p.replace(T, "") : ""), "" === g && (g = o in r ? r[o] : d), p = h || 0 === h ? (y ? h + l : h) + g : e[o], d !== g && ("" === g && "lineHeight" !== o || (h || 0 === h) && l && (l = et(t, o, l, d), "%" === g ? (l /= et(t, o, 100, "%") / 100, !0 !== e.strictUnits && (f = l + "%")) : "em" === g || "rem" === g || "vw" === g || "vh" === g ? l /= et(t, o, 1, g) : "px" !== g && (h = et(t, o, h, g), g = "px"), y && (h || 0 === h) && (p = h + l + g))), y && (h += l), !l && 0 !== l || !h && 0 !== h ? void 0 !== b[o] && (p || p + "" != "NaN" && null != p) ? (i = new bt(b, o, h || l || 0, 0, i, -1, o, !1, 0, f, p), i.xs0 = "none" !== p || "display" !== o && -1 === o.indexOf("Style") ? p : f) : G(e[o]) : (i = new bt(b, o, l, h - l, i, 0, o, !1 !== u && ("px" === g || "zIndex" === o), 0, f, p), i.xs0 = g))
                            }
                            n && i && !i.plugin && (i.plugin = n)
                        }
                        return i
                    }, h.setRatio = function(t) {
                        var e,
                            i,
                            n,
                            r = this._firstPT;
                        if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                            if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                                for (; r;) {
                                    if (e = r.c * t + r.s, r.r ? e = Math.round(e) : e < 1e-6 && e > -1e-6 && (e = 0), r.type)
                                        if (1 === r.type)
                                            if (2 === (n = r.l))
                                                r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                            else if (3 === n)
                                                r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                            else if (4 === n)
                                                r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                            else if (5 === n)
                                                r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                            else {
                                                for (i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++)
                                                    i += r["xn" + n] + r["xs" + (n + 1)];
                                                r.t[r.p] = i
                                            }
                                        else
                                            -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                                    else
                                        r.t[r.p] = e + r.xs0;
                                    r = r._next
                                }
                            else
                                for (; r;)
                                    2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
                        else
                            for (; r;) {
                                if (2 !== r.type)
                                    if (r.r && -1 !== r.type)
                                        if (e = Math.round(r.s + r.c), r.type) {
                                            if (1 === r.type) {
                                                for (n = r.l, i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++)
                                                    i += r["xn" + n] + r["xs" + (n + 1)];
                                                r.t[r.p] = i
                                            }
                                        } else
                                            r.t[r.p] = e + r.xs0;
                                    else
                                        r.t[r.p] = r.e;
                                else
                                    r.setRatio(t);
                                r = r._next
                            }
                    }, h._enableTransforms = function(t) {
                        this._transform = this._transform || qt(this._target, s, !0), this._transformType = this._transform.svg && kt || !t && 3 !== this._transformType ? 2 : 3
                    };
                    var Qt = function(t) {
                        this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                    };
                    h._addLazySet = function(t, e, i) {
                        var n = this._firstPT = new bt(t, e, 0, 0, this._firstPT, 2);
                        n.e = i, n.setRatio = Qt, n.data = this
                    }, h._linkCSSP = function(t, e, i, n) {
                        return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
                    }, h._mod = function(t) {
                        for (var e = this._firstPT; e;)
                            "function" == typeof t[e.p] && t[e.p] === Math.round && (e.r = 1), e = e._next
                    }, h._kill = function(e) {
                        var i,
                            n,
                            r,
                            s = e;
                        if (e.autoAlpha || e.alpha) {
                            s = {};
                            for (n in e)
                                s[n] = e[n];
                            s.opacity = 1, s.autoAlpha && (s.visibility = 1)
                        }
                        for (e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), i = this._firstPT; i;)
                            i.plugin && i.plugin !== n && i.plugin._kill && (i.plugin._kill(e), n = i.plugin), i = i._next;
                        return t.prototype._kill.call(this, s)
                    };
                    var Kt = function(t, e, i) {
                        var n,
                            r,
                            s,
                            o;
                        if (t.slice)
                            for (r = t.length; --r > -1;)
                                Kt(t[r], e, i);
                        else
                            for (n = t.childNodes, r = n.length; --r > -1;)
                                s = n[r], o = s.type, s.style && (e.push(nt(s)), i && i.push(s)), 1 !== o && 9 !== o && 11 !== o || !s.childNodes.length || Kt(s, e, i)
                    };
                    return a.cascadeTo = function(t, i, n) {
                        var r,
                            s,
                            o,
                            a,
                            l = e.to(t, i, n),
                            c = [l],
                            h = [],
                            u = [],
                            f = [],
                            p = e._internals.reservedProps;
                        for (t = l._targets || l.target, Kt(t, h, f), l.render(i, !0, !0), Kt(t, u), l.render(0, !0, !0), l._enabled(!0), r = f.length; --r > -1;)
                            if (s = rt(f[r], h[r], u[r]), s.firstMPT) {
                                s = s.difs;
                                for (o in n)
                                    p[o] && (s[o] = n[o]);
                                a = {};
                                for (o in s)
                                    a[o] = h[r][o];
                                c.push(e.fromTo(f[r], i, a, s))
                            }
                        return c
                    }, t.activate([a]), a
                }, !0), function() {
                    var t = n._gsDefine.plugin({
                            propName: "roundProps",
                            version: "1.6.0",
                            priority: -1,
                            API: 2,
                            init: function(t, e, i) {
                                return this._tween = i, !0
                            }
                        }),
                        e = function(t) {
                            for (; t;)
                                t.f || t.blob || (t.m = Math.round), t = t._next
                        },
                        i = t.prototype;
                    i._onInitAllProps = function() {
                        for (var t, i, n, r = this._tween, s = r.vars.roundProps.join ? r.vars.roundProps : r.vars.roundProps.split(","), o = s.length, a = {}, l = r._propLookup.roundProps; --o > -1;)
                            a[s[o]] = Math.round;
                        for (o = s.length; --o > -1;)
                            for (t = s[o], i = r._firstPT; i;)
                                n = i._next, i.pg ? i.t._mod(a) : i.n === t && (2 === i.f && i.t ? e(i.t._firstPT) : (this._add(i.t, t, i.s, i.c), n && (n._prev = i._prev), i._prev ? i._prev._next = n : r._firstPT === i && (r._firstPT = n), i._next = i._prev = null, r._propLookup[t] = l)), i = n;
                        return !1
                    }, i._add = function(t, e, i, n) {
                        this._addTween(t, e, i, i + n, e, Math.round), this._overwriteProps.push(e)
                    }
                }(), function() {
                    n._gsDefine.plugin({
                        propName: "attr",
                        API: 2,
                        version: "0.6.1",
                        init: function(t, e, i, n) {
                            var r,
                                s;
                            if ("function" != typeof t.setAttribute)
                                return !1;
                            for (r in e)
                                s = e[r], "function" == typeof s && (s = s(n, t)), this._addTween(t, "setAttribute", t.getAttribute(r) + "", s + "", r, !1, r), this._overwriteProps.push(r);
                            return !0
                        }
                    })
                }(), n._gsDefine.plugin({
                    propName: "directionalRotation",
                    version: "0.3.1",
                    API: 2,
                    init: function(t, e, i, n) {
                        "object" != typeof e && (e = {
                            rotation: e
                        }), this.finals = {};
                        var r,
                            s,
                            o,
                            a,
                            l,
                            c,
                            h = !0 === e.useRadians ? 2 * Math.PI : 360;
                        for (r in e)
                            "useRadians" !== r && (a = e[r], "function" == typeof a && (a = a(n, t)), c = (a + "").split("_"), s = c[0], o = parseFloat("function" != typeof t[r] ? t[r] : t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]()), a = this.finals[r] = "string" == typeof s && "=" === s.charAt(1) ? o + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0, l = a - o, c.length && (s = c.join("_"), -1 !== s.indexOf("short") && (l %= h) !== l % (h / 2) && (l = l < 0 ? l + h : l - h), -1 !== s.indexOf("_cw") && l < 0 ? l = (l + 9999999999 * h) % h - (l / h | 0) * h : -1 !== s.indexOf("ccw") && l > 0 && (l = (l - 9999999999 * h) % h - (l / h | 0) * h)), (l > 1e-6 || l < -1e-6) && (this._addTween(t, r, o, o + l, r), this._overwriteProps.push(r)));
                        return !0
                    },
                    set: function(t) {
                        var e;
                        if (1 !== t)
                            this._super.setRatio.call(this, t);
                        else
                            for (e = this._firstPT; e;)
                                e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
                    }
                })._autoCSS = !0, n._gsDefine("easing.Back", ["easing.Ease"], function(t) {
                    var e,
                        i,
                        r,
                        s = n.GreenSockGlobals || n,
                        o = s.com.greensock,
                        a = 2 * Math.PI,
                        l = Math.PI / 2,
                        c = o._class,
                        h = function(e, i) {
                            var n = c("easing." + e, function() {}, !0),
                                r = n.prototype = new t;
                            return r.constructor = n, r.getRatio = i, n
                        },
                        u = t.register || function() {},
                        f = function(t, e, i, n, r) {
                            var s = c("easing." + t, {
                                easeOut: new e,
                                easeIn: new i,
                                easeInOut: new n
                            }, !0);
                            return u(s, t), s
                        },
                        p = function(t, e, i) {
                            this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
                        },
                        d = function(e, i) {
                            var n = c("easing." + e, function(t) {
                                    this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                                }, !0),
                                r = n.prototype = new t;
                            return r.constructor = n, r.getRatio = i, r.config = function(t) {
                                return new n(t)
                            }, n
                        },
                        g = f("Back", d("BackOut", function(t) {
                            return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                        }), d("BackIn", function(t) {
                            return t * t * ((this._p1 + 1) * t - this._p1)
                        }), d("BackInOut", function(t) {
                            return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                        })),
                        m = c("easing.SlowMo", function(t, e, i) {
                            e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === i
                        }, !0),
                        _ = m.prototype = new t;
                    return _.constructor = m, _.getRatio = function(t) {
                        var e = t + (.5 - t) * this._p;
                        return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 === t ? 0 : 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
                    }, m.ease = new m(.7, .7), _.config = m.config = function(t, e, i) {
                        return new m(t, e, i)
                    }, e = c("easing.SteppedEase", function(t, e) {
                        t = t || 1, this._p1 = 1 / t, this._p2 = t + (e ? 0 : 1), this._p3 = e ? 1 : 0
                    }, !0), _ = e.prototype = new t, _.constructor = e, _.getRatio = function(t) {
                        return t < 0 ? t = 0 : t >= 1 && (t = .999999999), ((this._p2 * t | 0) + this._p3) * this._p1
                    }, _.config = e.config = function(t, i) {
                        return new e(t, i)
                    }, i = c("easing.RoughEase", function(e) {
                        e = e || {};
                        for (var i, n, r, s, o, a, l = e.taper || "none", c = [], h = 0, u = 0 | (e.points || 20), f = u, d = !1 !== e.randomize, g = !0 === e.clamp, m = e.template instanceof t ? e.template : null, _ = "number" == typeof e.strength ? .4 * e.strength : .4; --f > -1;)
                            i = d ? Math.random() : 1 / u * f, n = m ? m.getRatio(i) : i, "none" === l ? r = _ : "out" === l ? (s = 1 - i, r = s * s * _) : "in" === l ? r = i * i * _ : i < .5 ? (s = 2 * i, r = s * s * .5 * _) : (s = 2 * (1 - i), r = s * s * .5 * _), d ? n += Math.random() * r - .5 * r : f % 2 ? n += .5 * r : n -= .5 * r, g && (n > 1 ? n = 1 : n < 0 && (n = 0)), c[h++] = {
                                x: i,
                                y: n
                            };
                        for (c.sort(function(t, e) {
                            return t.x - e.x
                        }), a = new p(1, 1, null), f = u; --f > -1;)
                            o = c[f], a = new p(o.x, o.y, a);
                        this._prev = new p(0, 0, 0 !== a.t ? a : a.next)
                    }, !0), _ = i.prototype = new t, _.constructor = i, _.getRatio = function(t) {
                        var e = this._prev;
                        if (t > e.t) {
                            for (; e.next && t >= e.t;)
                                e = e.next;
                            e = e.prev
                        } else
                            for (; e.prev && t <= e.t;)
                                e = e.prev;
                        return this._prev = e, e.v + (t - e.t) / e.gap * e.c
                    }, _.config = function(t) {
                        return new i(t)
                    }, i.ease = new i, f("Bounce", h("BounceOut", function(t) {
                        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                    }), h("BounceIn", function(t) {
                        return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : t < 2 / 2.75 ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                    }), h("BounceInOut", function(t) {
                        var e = t < .5;
                        return t = e ? 1 - 2 * t : 2 * t - 1, t < 1 / 2.75 ? t *= 7.5625 * t : t = t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
                    })), f("Circ", h("CircOut", function(t) {
                        return Math.sqrt(1 - (t -= 1) * t)
                    }), h("CircIn", function(t) {
                        return -(Math.sqrt(1 - t * t) - 1)
                    }), h("CircInOut", function(t) {
                        return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                    })), r = function(e, i, n) {
                        var r = c("easing." + e, function(t, e) {
                                this._p1 = t >= 1 ? t : 1, this._p2 = (e || n) / (t < 1 ? t : 1), this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0), this._p2 = a / this._p2
                            }, !0),
                            s = r.prototype = new t;
                        return s.constructor = r, s.getRatio = i, s.config = function(t, e) {
                            return new r(t, e)
                        }, r
                    }, f("Elastic", r("ElasticOut", function(t) {
                        return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
                    }, .3), r("ElasticIn", function(t) {
                        return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)
                    }, .3), r("ElasticInOut", function(t) {
                        return (t *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
                    }, .45)), f("Expo", h("ExpoOut", function(t) {
                        return 1 - Math.pow(2, -10 * t)
                    }), h("ExpoIn", function(t) {
                        return Math.pow(2, 10 * (t - 1)) - .001
                    }), h("ExpoInOut", function(t) {
                        return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                    })), f("Sine", h("SineOut", function(t) {
                        return Math.sin(t * l)
                    }), h("SineIn", function(t) {
                        return 1 - Math.cos(t * l)
                    }), h("SineInOut", function(t) {
                        return -.5 * (Math.cos(Math.PI * t) - 1)
                    })), c("easing.EaseLookup", {
                        find: function(e) {
                            return t.map[e]
                        }
                    }, !0), u(s.SlowMo, "SlowMo", "ease,"), u(i, "RoughEase", "ease,"), u(e, "SteppedEase", "ease,"), g
                }, !0)
            }), n._gsDefine && n._gsQueue.pop()(), function(e, n) {
                "use strict";
                var r = {},
                    s = e.document,
                    o = e.GreenSockGlobals = e.GreenSockGlobals || e;
                if (!o.TweenLite) {
                    var a,
                        l,
                        c,
                        h,
                        u,
                        f = function(t) {
                            var e,
                                i = t.split("."),
                                n = o;
                            for (e = 0; e < i.length; e++)
                                n[i[e]] = n = n[i[e]] || {};
                            return n
                        },
                        p = f("com.greensock"),
                        d = function(t) {
                            var e,
                                i = [],
                                n = t.length;
                            for (e = 0; e !== n; i.push(t[e++]))
                                ;
                            return i
                        },
                        g = function() {},
                        m = function() {
                            var t = Object.prototype.toString,
                                e = t.call([]);
                            return function(i) {
                                return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                            }
                        }(),
                        _ = {},
                        v = function(n, s, a, l) {
                            this.sc = _[n] ? _[n].sc : [], _[n] = this, this.gsClass = null, this.func = a;
                            var c = [];
                            this.check = function(h) {
                                for (var u, p, d, g, m = s.length, y = m; --m > -1;)
                                    (u = _[s[m]] || new v(s[m], [])).gsClass ? (c[m] = u.gsClass, y--) : h && u.sc.push(this);
                                if (0 === y && a) {
                                    if (p = ("com.greensock." + n).split("."), d = p.pop(), g = f(p.join("."))[d] = this.gsClass = a.apply(a, c), l)
                                        if (o[d] = r[d] = g, void 0 !== t && t.exports)
                                            if ("TweenMax" === n) {
                                                t.exports = r.TweenMax = g;
                                                for (m in r)
                                                    g[m] = r[m]
                                            } else
                                                r.TweenMax && (r.TweenMax[d] = g);
                                        else
                                            "function" == typeof i && i.amd && i((e.GreenSockAMDPath ? e.GreenSockAMDPath + "/" : "") + n.split(".").pop(), [], function() {
                                                return g
                                            });
                                    for (m = 0; m < this.sc.length; m++)
                                        this.sc[m].check()
                                }
                            }, this.check(!0)
                        },
                        y = e._gsDefine = function(t, e, i, n) {
                            return new v(t, e, i, n)
                        },
                        b = p._class = function(t, e, i) {
                            return e = e || function() {}, y(t, [], function() {
                                return e
                            }, i), e
                        };
                    y.globals = o;
                    var x = [0, 0, 1, 1],
                        w = b("easing.Ease", function(t, e, i, n) {
                            this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? x.concat(e) : x
                        }, !0),
                        T = w.map = {},
                        S = w.register = function(t, e, i, n) {
                            for (var r, s, o, a, l = e.split(","), c = l.length, h = (i || "easeIn,easeOut,easeInOut").split(","); --c > -1;)
                                for (s = l[c], r = n ? b("easing." + s, null, !0) : p.easing[s] || {}, o = h.length; --o > -1;)
                                    a = h[o], T[s + "." + a] = T[a + s] = r[a] = t.getRatio ? t : t[a] || new t
                        };
                    for (c = w.prototype, c._calcEnd = !1, c.getRatio = function(t) {
                        if (this._func)
                            return this._params[0] = t, this._func.apply(null, this._params);
                        var e = this._type,
                            i = this._power,
                            n = 1 === e ? 1 - t : 2 === e ? t : t < .5 ? 2 * t : 2 * (1 - t);
                        return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : t < .5 ? n / 2 : 1 - n / 2
                    }, a = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], l = a.length; --l > -1;)
                        c = a[l] + ",Power" + l, S(new w(null, null, 1, l), c, "easeOut", !0), S(new w(null, null, 2, l), c, "easeIn" + (0 === l ? ",easeNone" : "")), S(new w(null, null, 3, l), c, "easeInOut");
                    T.linear = p.easing.Linear.easeIn, T.swing = p.easing.Quad.easeInOut;
                    var P = b("events.EventDispatcher", function(t) {
                        this._listeners = {}, this._eventTarget = t || this
                    });
                    c = P.prototype, c.addEventListener = function(t, e, i, n, r) {
                        r = r || 0;
                        var s,
                            o,
                            a = this._listeners[t],
                            l = 0;
                        for (this !== h || u || h.wake(), null == a && (this._listeners[t] = a = []), o = a.length; --o > -1;)
                            s = a[o], s.c === e && s.s === i ? a.splice(o, 1) : 0 === l && s.pr < r && (l = o + 1);
                        a.splice(l, 0, {
                            c: e,
                            s: i,
                            up: n,
                            pr: r
                        })
                    }, c.removeEventListener = function(t, e) {
                        var i,
                            n = this._listeners[t];
                        if (n)
                            for (i = n.length; --i > -1;)
                                if (n[i].c === e)
                                    return void n.splice(i, 1)
                    }, c.dispatchEvent = function(t) {
                        var e,
                            i,
                            n,
                            r = this._listeners[t];
                        if (r)
                            for (e = r.length, e > 1 && (r = r.slice(0)), i = this._eventTarget; --e > -1;)
                                (n = r[e]) && (n.up ? n.c.call(n.s || i, {
                                    type: t,
                                    target: i
                                }) : n.c.call(n.s || i))
                    };
                    var C = e.requestAnimationFrame,
                        k = e.cancelAnimationFrame,
                        R = Date.now || function() {
                            return (new Date).getTime()
                        },
                        O = R();
                    for (a = ["ms", "moz", "webkit", "o"], l = a.length; --l > -1 && !C;)
                        C = e[a[l] + "RequestAnimationFrame"], k = e[a[l] + "CancelAnimationFrame"] || e[a[l] + "CancelRequestAnimationFrame"];
                    b("Ticker", function(t, e) {
                        var i,
                            n,
                            r,
                            o,
                            a,
                            l = this,
                            c = R(),
                            f = !(!1 === e || !C) && "auto",
                            p = 500,
                            d = 33,
                            m = function(t) {
                                var e,
                                    s,
                                    h = R() - O;
                                h > p && (c += h - d), O += h, l.time = (O - c) / 1e3, e = l.time - a, (!i || e > 0 || !0 === t) && (l.frame++, a += e + (e >= o ? .004 : o - e), s = !0), !0 !== t && (r = n(m)), s && l.dispatchEvent("tick")
                            };
                        P.call(l), l.time = l.frame = 0, l.tick = function() {
                            m(!0)
                        }, l.lagSmoothing = function(t, e) {
                            if (!arguments.length)
                                return p < 1e10;
                            p = t || 1e10, d = Math.min(e, p, 0)
                        }, l.sleep = function() {
                            null != r && (f && k ? k(r) : clearTimeout(r), n = g, r = null, l === h && (u = !1))
                        }, l.wake = function(t) {
                            null !== r ? l.sleep() : t ? c += -O + (O = R()) : l.frame > 10 && (O = R() - p + 5), n = 0 === i ? g : f && C ? C : function(t) {
                                return setTimeout(t, 1e3 * (a - l.time) + 1 | 0)
                            }, l === h && (u = !0), m(2)
                        }, l.fps = function(t) {
                            if (!arguments.length)
                                return i;
                            i = t, o = 1 / (i || 60), a = this.time + o, l.wake()
                        }, l.useRAF = function(t) {
                            if (!arguments.length)
                                return f;
                            l.sleep(), f = t, l.fps(i)
                        }, l.fps(t), setTimeout(function() {
                            "auto" === f && l.frame < 5 && "hidden" !== s.visibilityState && l.useRAF(!1)
                        }, 1500)
                    }), c = p.Ticker.prototype = new p.events.EventDispatcher, c.constructor = p.Ticker;
                    var E = b("core.Animation", function(t, e) {
                        if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !0 === e.immediateRender, this.data = e.data, this._reversed = !0 === e.reversed, Z) {
                            u || h.wake();
                            var i = this.vars.useFrames ? G : Z;
                            i.add(this, i._time), this.vars.paused && this.paused(!0)
                        }
                    });
                    h = E.ticker = new p.Ticker, c = E.prototype, c._dirty = c._gc = c._initted = c._paused = !1, c._totalTime = c._time = 0, c._rawPrevTime = -1, c._next = c._last = c._onUpdate = c._timeline = c.timeline = null, c._paused = !1;
                    var A = function() {
                        u && R() - O > 2e3 && ("hidden" !== s.visibilityState || !h.lagSmoothing()) && h.wake();
                        var t = setTimeout(A, 2e3);
                        t.unref && t.unref()
                    };
                    A(), c.play = function(t, e) {
                        return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
                    }, c.pause = function(t, e) {
                        return null != t && this.seek(t, e), this.paused(!0)
                    }, c.resume = function(t, e) {
                        return null != t && this.seek(t, e), this.paused(!1)
                    }, c.seek = function(t, e) {
                        return this.totalTime(Number(t), !1 !== e)
                    }, c.restart = function(t, e) {
                        return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
                    }, c.reverse = function(t, e) {
                        return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
                    }, c.render = function(t, e, i) {}, c.invalidate = function() {
                        return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, !this._gc && this.timeline || this._enabled(!0), this
                    }, c.isActive = function() {
                        var t,
                            e = this._timeline,
                            i = this._startTime;
                        return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale - 1e-7
                    }, c._enabled = function(t, e) {
                        return u || h.wake(), this._gc = !t, this._active = this.isActive(), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
                    }, c._kill = function(t, e) {
                        return this._enabled(!1, !1)
                    }, c.kill = function(t, e) {
                        return this._kill(t, e), this
                    }, c._uncache = function(t) {
                        for (var e = t ? this : this.timeline; e;)
                            e._dirty = !0, e = e.timeline;
                        return this
                    }, c._swapSelfInParams = function(t) {
                        for (var e = t.length, i = t.concat(); --e > -1;)
                            "{self}" === t[e] && (i[e] = this);
                        return i
                    }, c._callback = function(t) {
                        var e = this.vars,
                            i = e[t],
                            n = e[t + "Params"],
                            r = e[t + "Scope"] || e.callbackScope || this;
                        switch (n ? n.length : 0) {
                        case 0:
                            i.call(r);
                            break;
                        case 1:
                            i.call(r, n[0]);
                            break;
                        case 2:
                            i.call(r, n[0], n[1]);
                            break;
                        default:
                            i.apply(r, n)
                        }
                    }, c.eventCallback = function(t, e, i, n) {
                        if ("on" === (t || "").substr(0, 2)) {
                            var r = this.vars;
                            if (1 === arguments.length)
                                return r[t];
                            null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = m(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
                        }
                        return this
                    }, c.delay = function(t) {
                        return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
                    }, c.duration = function(t) {
                        return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
                    }, c.totalDuration = function(t) {
                        return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
                    }, c.time = function(t, e) {
                        return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
                    }, c.totalTime = function(t, e, i) {
                        if (u || h.wake(), !arguments.length)
                            return this._totalTime;
                        if (this._timeline) {
                            if (t < 0 && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                                this._dirty && this.totalDuration();
                                var n = this._totalDuration,
                                    r = this._timeline;
                                if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                                    for (; r._timeline;)
                                        r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                            }
                            this._gc && this._enabled(!0, !1), this._totalTime === t && 0 !== this._duration || (z.length && K(), this.render(t, e, !1), z.length && K())
                        }
                        return this
                    }, c.progress = c.totalProgress = function(t, e) {
                        var i = this.duration();
                        return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
                    }, c.startTime = function(t) {
                        return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
                    }, c.endTime = function(t) {
                        return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
                    }, c.timeScale = function(t) {
                        if (!arguments.length)
                            return this._timeScale;
                        var e,
                            i;
                        for (t = t || 1e-10, this._timeline && this._timeline.smoothChildTiming && (e = this._pauseTime, i = e || 0 === e ? e : this._timeline.totalTime(), this._startTime = i - (i - this._startTime) * this._timeScale / t), this._timeScale = t, i = this.timeline; i && i.timeline;)
                            i._dirty = !0, i.totalDuration(), i = i.timeline;
                        return this
                    }, c.reversed = function(t) {
                        return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
                    }, c.paused = function(t) {
                        if (!arguments.length)
                            return this._paused;
                        var e,
                            i,
                            n = this._timeline;
                        return t != this._paused && n && (u || t || h.wake(), e = n.rawTime(), i = e - this._pauseTime, !t && n.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
                    };
                    var F = b("core.SimpleTimeline", function(t) {
                        E.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
                    });
                    c = F.prototype = new E, c.constructor = F, c.kill()._gc = !1, c._first = c._last = c._recent = null, c._sortChildren = !1, c.add = c.insert = function(t, e, i, n) {
                        var r,
                            s;
                        if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), r = this._last, this._sortChildren)
                            for (s = t._startTime; r && r._startTime > s;)
                                r = r._prev;
                        return r ? (t._next = r._next, r._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = r, this._recent = t, this._timeline && this._uncache(!0), this
                    }, c._remove = function(t, e) {
                        return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
                    }, c.render = function(t, e, i) {
                        var n,
                            r = this._first;
                        for (this._totalTime = this._time = this._rawPrevTime = t; r;)
                            n = r._next, (r._active || t >= r._startTime && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = n
                    }, c.rawTime = function() {
                        return u || h.wake(), this._totalTime
                    };
                    var M = b("TweenLite", function(t, i, n) {
                            if (E.call(this, i, n), this.render = M.prototype.render, null == t)
                                throw "Cannot tween a null target.";
                            this.target = t = "string" != typeof t ? t : M.selector(t) || t;
                            var r,
                                s,
                                o,
                                a = t.jquery || t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType),
                                l = this.vars.overwrite;
                            if (this._overwrite = l = null == l ? V[M.defaultOverwrite] : "number" == typeof l ? l >> 0 : V[l], (a || t instanceof Array || t.push && m(t)) && "number" != typeof t[0])
                                for (this._targets = o = d(t), this._propLookup = [], this._siblings = [], r = 0; r < o.length; r++)
                                    s = o[r], s ? "string" != typeof s ? s.length && s !== e && s[0] && (s[0] === e || s[0].nodeType && s[0].style && !s.nodeType) ? (o.splice(r--, 1), this._targets = o = o.concat(d(s))) : (this._siblings[r] = J(s, this, !1), 1 === l && this._siblings[r].length > 1 && et(s, this, null, 1, this._siblings[r])) : "string" == typeof (s = o[r--] = M.selector(s)) && o.splice(r + 1, 1) : o.splice(r--, 1);
                            else
                                this._propLookup = {}, this._siblings = J(t, this, !1), 1 === l && this._siblings.length > 1 && et(t, this, null, 1, this._siblings);
                            (this.vars.immediateRender || 0 === i && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -1e-10, this.render(Math.min(0, -this._delay)))
                        }, !0),
                        D = function(t) {
                            return t && t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType)
                        },
                        $ = function(t, e) {
                            var i,
                                n = {};
                            for (i in t)
                                W[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!q[i] || q[i] && q[i]._autoCSS) || (n[i] = t[i], delete t[i]);
                            t.css = n
                        };
                    c = M.prototype = new E, c.constructor = M, c.kill()._gc = !1, c.ratio = 0, c._firstPT = c._targets = c._overwrittenProps = c._startAt = null, c._notifyPluginsOfEnabled = c._lazy = !1, M.version = "1.20.3", M.defaultEase = c._ease = new w(null, null, 1, 1), M.defaultOverwrite = "auto", M.ticker = h, M.autoSleep = 120, M.lagSmoothing = function(t, e) {
                        h.lagSmoothing(t, e)
                    }, M.selector = e.$ || e.jQuery || function(t) {
                        var i = e.$ || e.jQuery;
                        return i ? (M.selector = i, i(t)) : void 0 === s ? t : s.querySelectorAll ? s.querySelectorAll(t) : s.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
                    };
                    var z = [],
                        L = {},
                        I = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                        N = /[\+-]=-?[\.\d]/,
                        X = function(t) {
                            for (var e, i = this._firstPT; i;)
                                e = i.blob ? 1 === t && null != this.end ? this.end : t ? this.join("") : this.start : i.c * t + i.s, i.m ? e = i.m(e, this._target || i.t) : e < 1e-6 && e > -1e-6 && !i.blob && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next
                        },
                        B = function(t, e, i, n) {
                            var r,
                                s,
                                o,
                                a,
                                l,
                                c,
                                h,
                                u = [],
                                f = 0,
                                p = "",
                                d = 0;
                            for (u.start = t, u.end = e, t = u[0] = t + "", e = u[1] = e + "", i && (i(u), t = u[0], e = u[1]), u.length = 0, r = t.match(I) || [], s = e.match(I) || [], n && (n._next = null, n.blob = 1, u._firstPT = u._applyPT = n), l = s.length, a = 0; a < l; a++)
                                h = s[a], c = e.substr(f, e.indexOf(h, f) - f), p += c || !a ? c : ",", f += c.length, d ? d = (d + 1) % 5 : "rgba(" === c.substr(-5) && (d = 1), h === r[a] || r.length <= a ? p += h : (p && (u.push(p), p = ""), o = parseFloat(r[a]), u.push(o), u._firstPT = {
                                    _next: u._firstPT,
                                    t: u,
                                    p: u.length - 1,
                                    s: o,
                                    c: ("=" === h.charAt(1) ? parseInt(h.charAt(0) + "1", 10) * parseFloat(h.substr(2)) : parseFloat(h) - o) || 0,
                                    f: 0,
                                    m: d && d < 4 ? Math.round : 0
                                }), f += h.length;
                            return p += e.substr(f), p && u.push(p), u.setRatio = X, N.test(e) && (u.end = null), u
                        },
                        j = function(t, e, i, n, r, s, o, a, l) {
                            "function" == typeof n && (n = n(l || 0, t));
                            var c,
                                h = typeof t[e],
                                u = "function" !== h ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
                                f = "get" !== i ? i : u ? o ? t[u](o) : t[u]() : t[e],
                                p = "string" == typeof n && "=" === n.charAt(1),
                                d = {
                                    t: t,
                                    p: e,
                                    s: f,
                                    f: "function" === h,
                                    pg: 0,
                                    n: r || e,
                                    m: s ? "function" == typeof s ? s : Math.round : 0,
                                    pr: 0,
                                    c: p ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - f || 0
                                };
                            if (("number" != typeof f || "number" != typeof n && !p) && (o || isNaN(f) || !p && isNaN(n) || "boolean" == typeof f || "boolean" == typeof n ? (d.fp = o, c = B(f, p ? parseFloat(d.s) + d.c : n, a || M.defaultStringFilter, d), d = {
                                t: c,
                                p: "setRatio",
                                s: 0,
                                c: 1,
                                f: 2,
                                pg: 0,
                                n: r || e,
                                pr: 0,
                                m: 0
                            }) : (d.s = parseFloat(f), p || (d.c = parseFloat(n) - d.s || 0))), d.c)
                                return (d._next = this._firstPT) && (d._next._prev = d), this._firstPT = d, d
                        },
                        Y = M._internals = {
                            isArray: m,
                            isSelector: D,
                            lazyTweens: z,
                            blobDif: B
                        },
                        q = M._plugins = {},
                        U = Y.tweenLookup = {},
                        H = 0,
                        W = Y.reservedProps = {
                            ease: 1,
                            delay: 1,
                            overwrite: 1,
                            onComplete: 1,
                            onCompleteParams: 1,
                            onCompleteScope: 1,
                            useFrames: 1,
                            runBackwards: 1,
                            startAt: 1,
                            onUpdate: 1,
                            onUpdateParams: 1,
                            onUpdateScope: 1,
                            onStart: 1,
                            onStartParams: 1,
                            onStartScope: 1,
                            onReverseComplete: 1,
                            onReverseCompleteParams: 1,
                            onReverseCompleteScope: 1,
                            onRepeat: 1,
                            onRepeatParams: 1,
                            onRepeatScope: 1,
                            easeParams: 1,
                            yoyo: 1,
                            immediateRender: 1,
                            repeat: 1,
                            repeatDelay: 1,
                            data: 1,
                            paused: 1,
                            reversed: 1,
                            autoCSS: 1,
                            lazy: 1,
                            onOverwrite: 1,
                            callbackScope: 1,
                            stringFilter: 1,
                            id: 1,
                            yoyoEase: 1
                        },
                        V = {
                            none: 0,
                            all: 1,
                            auto: 2,
                            concurrent: 3,
                            allOnStart: 4,
                            preexisting: 5,
                            true: 1,
                            false: 0
                        },
                        G = E._rootFramesTimeline = new F,
                        Z = E._rootTimeline = new F,
                        Q = 30,
                        K = Y.lazyRender = function() {
                            var t,
                                e = z.length;
                            for (L = {}; --e > -1;)
                                (t = z[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                            z.length = 0
                        };
                    Z._startTime = h.time, G._startTime = h.frame, Z._active = G._active = !0, setTimeout(K, 1), E._updateRoot = M.render = function() {
                        var t,
                            e,
                            i;
                        if (z.length && K(), Z.render((h.time - Z._startTime) * Z._timeScale, !1, !1), G.render((h.frame - G._startTime) * G._timeScale, !1, !1), z.length && K(), h.frame >= Q) {
                            Q = h.frame + (parseInt(M.autoSleep, 10) || 120);
                            for (i in U) {
                                for (e = U[i].tweens, t = e.length; --t > -1;)
                                    e[t]._gc && e.splice(t, 1);
                                0 === e.length && delete U[i]
                            }
                            if ((!(i = Z._first) || i._paused) && M.autoSleep && !G._first && 1 === h._listeners.tick.length) {
                                for (; i && i._paused;)
                                    i = i._next;
                                i || h.sleep()
                            }
                        }
                    }, h.addEventListener("tick", E._updateRoot);
                    var J = function(t, e, i) {
                            var n,
                                r,
                                s = t._gsTweenID;
                            if (U[s || (t._gsTweenID = s = "t" + H++)] || (U[s] = {
                                target: t,
                                tweens: []
                            }), e && (n = U[s].tweens, n[r = n.length] = e, i))
                                for (; --r > -1;)
                                    n[r] === e && n.splice(r, 1);
                            return U[s].tweens
                        },
                        tt = function(t, e, i, n) {
                            var r,
                                s,
                                o = t.vars.onOverwrite;
                            return o && (r = o(t, e, i, n)), o = M.onOverwrite, o && (s = o(t, e, i, n)), !1 !== r && !1 !== s
                        },
                        et = function(t, e, i, n, r) {
                            var s,
                                o,
                                a,
                                l;
                            if (1 === n || n >= 4) {
                                for (l = r.length, s = 0; s < l; s++)
                                    if ((a = r[s]) !== e)
                                        a._gc || a._kill(null, t, e) && (o = !0);
                                    else if (5 === n)
                                        break;
                                return o
                            }
                            var c,
                                h = e._startTime + 1e-10,
                                u = [],
                                f = 0,
                                p = 0 === e._duration;
                            for (s = r.length; --s > -1;)
                                (a = r[s]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (c = c || it(e, 0, p), 0 === it(a, c, p) && (u[f++] = a)) : a._startTime <= h && a._startTime + a.totalDuration() / a._timeScale > h && ((p || !a._initted) && h - a._startTime <= 2e-10 || (u[f++] = a)));
                            for (s = f; --s > -1;)
                                if (a = u[s], 2 === n && a._kill(i, t, e) && (o = !0), 2 !== n || !a._firstPT && a._initted) {
                                    if (2 !== n && !tt(a, e))
                                        continue;
                                    a._enabled(!1, !1) && (o = !0)
                                }
                            return o
                        },
                        it = function(t, e, i) {
                            for (var n = t._timeline, r = n._timeScale, s = t._startTime; n._timeline;) {
                                if (s += n._startTime, r *= n._timeScale, n._paused)
                                    return -100;
                                n = n._timeline
                            }
                            return s /= r, s > e ? s - e : i && s === e || !t._initted && s - e < 2e-10 ? 1e-10 : (s += t.totalDuration() / t._timeScale / r) > e + 1e-10 ? 0 : s - e - 1e-10
                        };
                    c._init = function() {
                        var t,
                            e,
                            i,
                            n,
                            r,
                            s,
                            o = this.vars,
                            a = this._overwrittenProps,
                            l = this._duration,
                            c = !!o.immediateRender,
                            h = o.ease;
                        if (o.startAt) {
                            this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
                            for (n in o.startAt)
                                r[n] = o.startAt[n];
                            if (r.data = "isStart", r.overwrite = !1, r.immediateRender = !0, r.lazy = c && !1 !== o.lazy, r.startAt = r.delay = null, r.onUpdate = o.onUpdate, r.onUpdateParams = o.onUpdateParams, r.onUpdateScope = o.onUpdateScope || o.callbackScope || this, this._startAt = M.to(this.target, 0, r), c)
                                if (this._time > 0)
                                    this._startAt = null;
                                else if (0 !== l)
                                    return
                        } else if (o.runBackwards && 0 !== l)
                            if (this._startAt)
                                this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                            else {
                                0 !== this._time && (c = !1), i = {};
                                for (n in o)
                                    W[n] && "autoCSS" !== n || (i[n] = o[n]);
                                if (i.overwrite = 0, i.data = "isFromStart", i.lazy = c && !1 !== o.lazy, i.immediateRender = c, this._startAt = M.to(this.target, 0, i), c) {
                                    if (0 === this._time)
                                        return
                                } else
                                    this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                            }
                        if (this._ease = h = h ? h instanceof w ? h : "function" == typeof h ? new w(h, o.easeParams) : T[h] || M.defaultEase : M.defaultEase, o.easeParams instanceof Array && h.config && (this._ease = h.config.apply(h, o.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                            for (s = this._targets.length, t = 0; t < s; t++)
                                this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null, t) && (e = !0);
                        else
                            e = this._initProps(this.target, this._propLookup, this._siblings, a, 0);
                        if (e && M._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), o.runBackwards)
                            for (i = this._firstPT; i;)
                                i.s += i.c, i.c = -i.c, i = i._next;
                        this._onUpdate = o.onUpdate, this._initted = !0
                    }, c._initProps = function(t, i, n, r, s) {
                        var o,
                            a,
                            l,
                            c,
                            h,
                            u;
                        if (null == t)
                            return !1;
                        L[t._gsTweenID] && K(), this.vars.css || t.style && t !== e && t.nodeType && q.css && !1 !== this.vars.autoCSS && $(this.vars, t);
                        for (o in this.vars)
                            if (u = this.vars[o], W[o])
                                u && (u instanceof Array || u.push && m(u)) && -1 !== u.join("").indexOf("{self}") && (this.vars[o] = u = this._swapSelfInParams(u, this));
                            else if (q[o] && (c = new q[o])._onInitTween(t, this.vars[o], this, s)) {
                                for (this._firstPT = h = {
                                    _next: this._firstPT,
                                    t: c,
                                    p: "setRatio",
                                    s: 0,
                                    c: 1,
                                    f: 1,
                                    n: o,
                                    pg: 1,
                                    pr: c._priority,
                                    m: 0
                                }, a = c._overwriteProps.length; --a > -1;)
                                    i[c._overwriteProps[a]] = this._firstPT;
                                (c._priority || c._onInitAllProps) && (l = !0), (c._onDisable || c._onEnable) && (this._notifyPluginsOfEnabled = !0), h._next && (h._next._prev = h)
                            } else
                                i[o] = j.call(this, t, o, "get", u, o, 0, null, this.vars.stringFilter, s);
                        return r && this._kill(r, t) ? this._initProps(t, i, n, r, s) : this._overwrite > 1 && this._firstPT && n.length > 1 && et(t, this, i, this._overwrite, n) ? (this._kill(i, t), this._initProps(t, i, n, r, s)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (L[t._gsTweenID] = !0), l)
                    }, c.render = function(t, e, i) {
                        var n,
                            r,
                            s,
                            o,
                            a = this._time,
                            l = this._duration,
                            c = this._rawPrevTime;
                        if (t >= l - 1e-7 && t >= 0)
                            this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (c < 0 || t <= 0 && t >= -1e-7 || 1e-10 === c && "isPause" !== this.data) && c !== t && (i = !0, c > 1e-10 && (r = "onReverseComplete")), this._rawPrevTime = o = !e || t || c === t ? t : 1e-10);
                        else if (t < 1e-7)
                            this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && c > 0) && (r = "onReverseComplete", n = this._reversed), t < 0 && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (c >= 0 && (1e-10 !== c || "isPause" !== this.data) && (i = !0), this._rawPrevTime = o = !e || t || c === t ? t : 1e-10)), (!this._initted || this._startAt && this._startAt.progress()) && (i = !0);
                        else if (this._totalTime = this._time = t, this._easeType) {
                            var h = t / l,
                                u = this._easeType,
                                f = this._easePower;
                            (1 === u || 3 === u && h >= .5) && (h = 1 - h), 3 === u && (h *= 2), 1 === f ? h *= h : 2 === f ? h *= h * h : 3 === f ? h *= h * h * h : 4 === f && (h *= h * h * h * h), this.ratio = 1 === u ? 1 - h : 2 === u ? h : t / l < .5 ? h / 2 : 1 - h / 2
                        } else
                            this.ratio = this._ease.getRatio(t / l);
                        if (this._time !== a || i) {
                            if (!this._initted) {
                                if (this._init(), !this._initted || this._gc)
                                    return;
                                if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration))
                                    return this._time = this._totalTime = a, this._rawPrevTime = c, z.push(this), void (this._lazy = [t, e]);
                                this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                            }
                            for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, !0, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 === this._time && 0 !== l || e || this._callback("onStart"))), s = this._firstPT; s;)
                                s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
                            this._onUpdate && (t < 0 && this._startAt && -1e-4 !== t && this._startAt.render(t, !0, i), e || (this._time !== a || n || i) && this._callback("onUpdate")), r && (this._gc && !i || (t < 0 && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, !0, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === l && 1e-10 === this._rawPrevTime && 1e-10 !== o && (this._rawPrevTime = 0)))
                        }
                    }, c._kill = function(t, e, i) {
                        if ("all" === t && (t = null), null == t && (null == e || e === this.target))
                            return this._lazy = !1, this._enabled(!1, !1);
                        e = "string" != typeof e ? e || this._targets || this.target : M.selector(e) || e;
                        var n,
                            r,
                            s,
                            o,
                            a,
                            l,
                            c,
                            h,
                            u,
                            f = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                        if ((m(e) || D(e)) && "number" != typeof e[0])
                            for (n = e.length; --n > -1;)
                                this._kill(t, e[n], i) && (l = !0);
                        else {
                            if (this._targets) {
                                for (n = this._targets.length; --n > -1;)
                                    if (e === this._targets[n]) {
                                        a = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                                        break
                                    }
                            } else {
                                if (e !== this.target)
                                    return !1;
                                a = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                            }
                            if (a) {
                                if (c = t || a, h = t !== r && "all" !== r && t !== a && ("object" != typeof t || !t._tempKill), i && (M.onOverwrite || this.vars.onOverwrite)) {
                                    for (s in c)
                                        a[s] && (u || (u = []), u.push(s));
                                    if ((u || !t) && !tt(this, i, e, u))
                                        return !1
                                }
                                for (s in c)
                                    (o = a[s]) && (f && (o.f ? o.t[o.p](o.s) : o.t[o.p] = o.s, l = !0), o.pg && o.t._kill(c) && (l = !0), o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next : o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), o._next = o._prev = null), delete a[s]), h && (r[s] = 1);
                                !this._firstPT && this._initted && this._enabled(!1, !1)
                            }
                        }
                        return l
                    }, c.invalidate = function() {
                        return this._notifyPluginsOfEnabled && M._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], E.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -1e-10, this.render(Math.min(0, -this._delay))), this
                    }, c._enabled = function(t, e) {
                        if (u || h.wake(), t && this._gc) {
                            var i,
                                n = this._targets;
                            if (n)
                                for (i = n.length; --i > -1;)
                                    this._siblings[i] = J(n[i], this, !0);
                            else
                                this._siblings = J(this.target, this, !0)
                        }
                        return E.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && M._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
                    }, M.to = function(t, e, i) {
                        return new M(t, e, i)
                    }, M.from = function(t, e, i) {
                        return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new M(t, e, i)
                    }, M.fromTo = function(t, e, i, n) {
                        return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new M(t, e, n)
                    }, M.delayedCall = function(t, e, i, n, r) {
                        return new M(e, 0, {
                            delay: t,
                            onComplete: e,
                            onCompleteParams: i,
                            callbackScope: n,
                            onReverseComplete: e,
                            onReverseCompleteParams: i,
                            immediateRender: !1,
                            lazy: !1,
                            useFrames: r,
                            overwrite: 0
                        })
                    }, M.set = function(t, e) {
                        return new M(t, 0, e)
                    }, M.getTweensOf = function(t, e) {
                        if (null == t)
                            return [];
                        t = "string" != typeof t ? t : M.selector(t) || t;
                        var i,
                            n,
                            r,
                            s;
                        if ((m(t) || D(t)) && "number" != typeof t[0]) {
                            for (i = t.length, n = []; --i > -1;)
                                n = n.concat(M.getTweensOf(t[i], e));
                            for (i = n.length; --i > -1;)
                                for (s = n[i], r = i; --r > -1;)
                                    s === n[r] && n.splice(i, 1)
                        } else if (t._gsTweenID)
                            for (n = J(t).concat(), i = n.length; --i > -1;)
                                (n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
                        return n || []
                    }, M.killTweensOf = M.killDelayedCallsTo = function(t, e, i) {
                        "object" == typeof e && (i = e, e = !1);
                        for (var n = M.getTweensOf(t, e), r = n.length; --r > -1;)
                            n[r]._kill(i, t)
                    };
                    var nt = b("plugins.TweenPlugin", function(t, e) {
                        this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = nt.prototype
                    }, !0);
                    if (c = nt.prototype, nt.version = "1.19.0", nt.API = 2, c._firstPT = null, c._addTween = j, c.setRatio = X, c._kill = function(t) {
                        var e,
                            i = this._overwriteProps,
                            n = this._firstPT;
                        if (null != t[this._propName])
                            this._overwriteProps = [];
                        else
                            for (e = i.length; --e > -1;)
                                null != t[i[e]] && i.splice(e, 1);
                        for (; n;)
                            null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                        return !1
                    }, c._mod = c._roundProps = function(t) {
                        for (var e, i = this._firstPT; i;)
                            e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")], e && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e), i = i._next
                    }, M._onPluginEvent = function(t, e) {
                        var i,
                            n,
                            r,
                            s,
                            o,
                            a = e._firstPT;
                        if ("_onInitAllProps" === t) {
                            for (; a;) {
                                for (o = a._next, n = r; n && n.pr > a.pr;)
                                    n = n._next;
                                (a._prev = n ? n._prev : s) ? a._prev._next = a : r = a, (a._next = n) ? n._prev = a : s = a, a = o
                            }
                            a = e._firstPT = r
                        }
                        for (; a;)
                            a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), a = a._next;
                        return i
                    }, nt.activate = function(t) {
                        for (var e = t.length; --e > -1;)
                            t[e].API === nt.API && (q[(new t[e])._propName] = t[e]);
                        return !0
                    }, y.plugin = function(t) {
                        if (!(t && t.propName && t.init && t.API))
                            throw "illegal plugin definition.";
                        var e,
                            i = t.propName,
                            n = t.priority || 0,
                            r = t.overwriteProps,
                            s = {
                                init: "_onInitTween",
                                set: "setRatio",
                                kill: "_kill",
                                round: "_mod",
                                mod: "_mod",
                                initAll: "_onInitAllProps"
                            },
                            o = b("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                                nt.call(this, i, n), this._overwriteProps = r || []
                            }, !0 === t.global),
                            a = o.prototype = new nt(i);
                        a.constructor = o, o.API = t.API;
                        for (e in s)
                            "function" == typeof t[e] && (a[s[e]] = t[e]);
                        return o.version = t.version, nt.activate([o]), o
                    }, a = e._gsQueue) {
                        for (l = 0; l < a.length; l++)
                            a[l]();
                        for (c in _)
                            _[c].func || e.console.log("GSAP encountered missing dependency: " + c)
                    }
                    u = !1
                }
            }(void 0 !== t && t.exports && void 0 !== e ? e : this || window)
        }).call(window)
    }).call(e, i(4))
}, function(t, e, i) {
    var n = !1;
    (function() {
        !function(e, i) {
            "function" == typeof n && n.amd ? n(i) : t.exports = i()
        }(0, function() {
            "use strict";
            var t = function() {
                n.log(2, "(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use 'new ScrollMagic.Controller()' to create a new controller instance. Use 'new ScrollMagic.Scene()' to instance a scene.")
            };
            t.version = "2.0.5", window.addEventListener("mousewheel", function() {});
            t.Controller = function(i) {
                var r,
                    s,
                    o = "ScrollMagic.Controller",
                    a = e.defaults,
                    l = this,
                    c = n.extend({}, a, i),
                    h = [],
                    u = !1,
                    f = 0,
                    p = "PAUSED",
                    d = !0,
                    g = 0,
                    m = !0,
                    _ = function() {
                        c.refreshInterval > 0 && (s = window.setTimeout(S, c.refreshInterval))
                    },
                    v = function() {
                        return c.vertical ? n.get.scrollTop(c.container) : n.get.scrollLeft(c.container)
                    },
                    y = function() {
                        return c.vertical ? n.get.height(c.container) : n.get.width(c.container)
                    },
                    b = this._setScrollPos = function(t) {
                        c.vertical ? d ? window.scrollTo(n.get.scrollLeft(), t) : c.container.scrollTop = t : d ? window.scrollTo(t, n.get.scrollTop()) : c.container.scrollLeft = t
                    },
                    x = function() {
                        if (m && u) {
                            var t = n.type.Array(u) ? u : h.slice(0);
                            u = !1;
                            var e = f;
                            f = l.scrollPos();
                            var i = f - e;
                            0 !== i && (p = i > 0 ? "FORWARD" : "REVERSE"), "REVERSE" === p && t.reverse(), t.forEach(function(e, i) {
                                P(3, "updating Scene " + (i + 1) + "/" + t.length + " (" + h.length + " total)"), e.update(!0)
                            }), 0 === t.length && c.loglevel >= 3 && P(3, "updating 0 Scenes (nothing added to controller)")
                        }
                    },
                    w = function() {
                        r = n.rAF(x)
                    },
                    T = function(t) {
                        P(3, "event fired causing an update:", t.type), "resize" == t.type && (g = y(), p = "PAUSED"), !0 !== u && (u = !0, w())
                    },
                    S = function() {
                        if (!d && g != y()) {
                            var t;
                            try {
                                t = new Event("resize", {
                                    bubbles: !1,
                                    cancelable: !1
                                })
                            } catch (e) {
                                t = document.createEvent("Event"), t.initEvent("resize", !1, !1)
                            }
                            c.container.dispatchEvent(t)
                        }
                        h.forEach(function(t, e) {
                            t.refresh()
                        }), _()
                    },
                    P = this._log = function(t, e) {
                        c.loglevel >= t && (Array.prototype.splice.call(arguments, 1, 0, "(" + o + ") ->"), n.log.apply(window, arguments))
                    };
                this._options = c;
                var C = function(t) {
                    if (t.length <= 1)
                        return t;
                    var e = t.slice(0);
                    return e.sort(function(t, e) {
                        return t.scrollOffset() > e.scrollOffset() ? 1 : -1
                    }), e
                };
                return this.addScene = function(e) {
                    if (n.type.Array(e))
                        e.forEach(function(t, e) {
                            l.addScene(t)
                        });
                    else if (e instanceof t.Scene) {
                        if (e.controller() !== l)
                            e.addTo(l);
                        else if (h.indexOf(e) < 0) {
                            h.push(e), h = C(h), e.on("shift.controller_sort", function() {
                                h = C(h)
                            });
                            for (var i in c.globalSceneOptions)
                                e[i] && e[i].call(e, c.globalSceneOptions[i]);
                            P(3, "adding Scene (now " + h.length + " total)")
                        }
                    } else
                        P(1, "ERROR: invalid argument supplied for '.addScene()'");
                    return l
                }, this.removeScene = function(t) {
                    if (n.type.Array(t))
                        t.forEach(function(t, e) {
                            l.removeScene(t)
                        });
                    else {
                        var e = h.indexOf(t);
                        e > -1 && (t.off("shift.controller_sort"), h.splice(e, 1), P(3, "removing Scene (now " + h.length + " left)"), t.remove())
                    }
                    return l
                }, this.updateScene = function(e, i) {
                    return n.type.Array(e) ? e.forEach(function(t, e) {
                        l.updateScene(t, i)
                    }) : i ? e.update(!0) : !0 !== u && e instanceof t.Scene && (u = u || [], -1 == u.indexOf(e) && u.push(e), u = C(u), w()), l
                }, this.update = function(t) {
                    return T({
                        type: "resize"
                    }), t && x(), l
                }, this.scrollTo = function(e, i) {
                    if (n.type.Number(e))
                        b.call(c.container, e, i);
                    else if (e instanceof t.Scene)
                        e.controller() === l ? l.scrollTo(e.scrollOffset(), i) : P(2, "scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.", e);
                    else if (n.type.Function(e))
                        b = e;
                    else {
                        var r = n.get.elements(e)[0];
                        if (r) {
                            for (; r.parentNode.hasAttribute("data-scrollmagic-pin-spacer");)
                                r = r.parentNode;
                            var s = c.vertical ? "top" : "left",
                                o = n.get.offset(c.container),
                                a = n.get.offset(r);
                            d || (o[s] -= l.scrollPos()), l.scrollTo(a[s] - o[s], i)
                        } else
                            P(2, "scrollTo(): The supplied argument is invalid. Scroll cancelled.", e)
                    }
                    return l
                }, this.scrollPos = function(t) {
                    return arguments.length ? (n.type.Function(t) ? v = t : P(2, "Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'."), l) : v.call(l)
                }, this.info = function(t) {
                    var e = {
                        size: g,
                        vertical: c.vertical,
                        scrollPos: f,
                        scrollDirection: p,
                        container: c.container,
                        isDocument: d
                    };
                    return arguments.length ? void 0 !== e[t] ? e[t] : void P(1, 'ERROR: option "' + t + '" is not available') : e
                }, this.loglevel = function(t) {
                    return arguments.length ? (c.loglevel != t && (c.loglevel = t), l) : c.loglevel
                }, this.enabled = function(t) {
                    return arguments.length ? (m != t && (m = !!t, l.updateScene(h, !0)), l) : m
                }, this.destroy = function(t) {
                    window.clearTimeout(s);
                    for (var e = h.length; e--;)
                        h[e].destroy(t);
                    return c.container.removeEventListener("resize", T), c.container.removeEventListener("scroll", T), n.cAF(r), P(3, "destroyed " + o + " (reset: " + (t ? "true" : "false") + ")"), null
                }, function() {
                    for (var e in c)
                        a.hasOwnProperty(e) || (P(2, 'WARNING: Unknown option "' + e + '"'), delete c[e]);
                    if (c.container = n.get.elements(c.container)[0], !c.container)
                        throw P(1, "ERROR creating object " + o + ": No valid scroll container supplied"), o + " init failed.";
                    d = c.container === window || c.container === document.body || !document.body.contains(c.container), d && (c.container = window), g = y(), c.container.addEventListener("resize", T), c.container.addEventListener("scroll", T), c.refreshInterval = parseInt(c.refreshInterval) || a.refreshInterval, _(), P(3, "added new " + o + " controller (v" + t.version + ")")
                }(), l
            };
            var e = {
                defaults: {
                    container: window,
                    vertical: !0,
                    globalSceneOptions: {},
                    loglevel: 2,
                    refreshInterval: 100
                }
            };
            t.Controller.addOption = function(t, i) {
                e.defaults[t] = i
            }, t.Controller.extend = function(e) {
                var i = this;
                t.Controller = function() {
                    return i.apply(this, arguments), this.$super = n.extend({}, this), e.apply(this, arguments) || this
                }, n.extend(t.Controller, i), t.Controller.prototype = i.prototype, t.Controller.prototype.constructor = t.Controller
            }, t.Scene = function(e) {
                var r,
                    s,
                    o = "ScrollMagic.Scene",
                    a = i.defaults,
                    l = this,
                    c = n.extend({}, a, e),
                    h = "BEFORE",
                    u = 0,
                    f = {
                        start: 0,
                        end: 0
                    },
                    p = 0,
                    d = !0,
                    g = {};
                this.on = function(t, e) {
                    return n.type.Function(e) ? (t = t.trim().split(" "), t.forEach(function(t) {
                        var i = t.split("."),
                            n = i[0],
                            r = i[1];
                        "*" != n && (g[n] || (g[n] = []), g[n].push({
                            namespace: r || "",
                            callback: e
                        }))
                    })) : m(1, "ERROR when calling '.on()': Supplied callback for '" + t + "' is not a valid function!"), l
                }, this.off = function(t, e) {
                    return t ? (t = t.trim().split(" "), t.forEach(function(t, i) {
                        var n = t.split("."),
                            r = n[0],
                            s = n[1] || "";
                        ("*" === r ? Object.keys(g) : [r]).forEach(function(t) {
                            for (var i = g[t] || [], n = i.length; n--;) {
                                var r = i[n];
                                !r || s !== r.namespace && "*" !== s || e && e != r.callback || i.splice(n, 1)
                            }
                            i.length || delete g[t]
                        })
                    }), l) : (m(1, "ERROR: Invalid event name supplied."), l)
                }, this.trigger = function(e, i) {
                    if (e) {
                        var n = e.trim().split("."),
                            r = n[0],
                            s = n[1],
                            o = g[r];
                        m(3, "event fired:", r, i ? "->" : "", i || ""), o && o.forEach(function(e, n) {
                            s && s !== e.namespace || e.callback.call(l, new t.Event(r, e.namespace, l, i))
                        })
                    } else
                        m(1, "ERROR: Invalid event name supplied.");
                    return l
                }, l.on("change.internal", function(t) {
                    "loglevel" !== t.what && "tweenChanges" !== t.what && ("triggerElement" === t.what ? y() : "reverse" === t.what && l.update())
                }).on("shift.internal", function(t) {
                    _(), l.update()
                });
                var m = this._log = function(t, e) {
                    c.loglevel >= t && (Array.prototype.splice.call(arguments, 1, 0, "(" + o + ") ->"), n.log.apply(window, arguments))
                };
                this.addTo = function(e) {
                    return e instanceof t.Controller ? s != e && (s && s.removeScene(l), s = e, w(), v(!0), y(!0), _(), s.info("container").addEventListener("resize", b), e.addScene(l), l.trigger("add", {
                        controller: s
                    }), m(3, "added " + o + " to controller"), l.update()) : m(1, "ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller"), l
                }, this.enabled = function(t) {
                    return arguments.length ? (d != t && (d = !!t, l.update(!0)), l) : d
                }, this.remove = function() {
                    if (s) {
                        s.info("container").removeEventListener("resize", b);
                        var t = s;
                        s = void 0, t.removeScene(l), l.trigger("remove"), m(3, "removed " + o + " from controller")
                    }
                    return l
                }, this.destroy = function(t) {
                    return l.trigger("destroy", {
                        reset: t
                    }), l.remove(), l.off("*.*"), m(3, "destroyed " + o + " (reset: " + (t ? "true" : "false") + ")"), null
                }, this.update = function(t) {
                    if (s)
                        if (t)
                            if (s.enabled() && d) {
                                var e,
                                    i = s.info("scrollPos");
                                e = c.duration > 0 ? (i - f.start) / (f.end - f.start) : i >= f.start ? 1 : 0, l.trigger("update", {
                                    startPos: f.start,
                                    endPos: f.end,
                                    scrollPos: i
                                }), l.progress(e)
                            } else
                                P && "DURING" === h && k(!0);
                        else
                            s.updateScene(l, !1);
                    return l
                }, this.refresh = function() {
                    return v(), y(), l
                }, this.progress = function(t) {
                    if (arguments.length) {
                        var e = !1,
                            i = h,
                            n = s ? s.info("scrollDirection") : "PAUSED",
                            r = c.reverse || t >= u;
                        if (0 === c.duration ? (e = u != t, u = t < 1 && r ? 0 : 1, h = 0 === u ? "BEFORE" : "DURING") : t < 0 && "BEFORE" !== h && r ? (u = 0, h = "BEFORE", e = !0) : t >= 0 && t < 1 && r ? (u = t, h = "DURING", e = !0) : t >= 1 && "AFTER" !== h ? (u = 1, h = "AFTER", e = !0) : "DURING" !== h || r || k(), e) {
                            var o = {
                                    progress: u,
                                    state: h,
                                    scrollDirection: n
                                },
                                a = h != i,
                                f = function(t) {
                                    l.trigger(t, o)
                                };
                            a && "DURING" !== i && (f("enter"), f("BEFORE" === i ? "start" : "end")), f("progress"), a && "DURING" !== h && (f("BEFORE" === h ? "start" : "end"), f("leave"))
                        }
                        return l
                    }
                    return u
                };
                var _ = function() {
                        f = {
                            start: p + c.offset
                        }, s && c.triggerElement && (f.start -= s.info("size") * c.triggerHook), f.end = f.start + c.duration
                    },
                    v = function(t) {
                        if (r) {
                            T("duration", r.call(l)) && !t && (l.trigger("change", {
                                what: "duration",
                                newval: c.duration
                            }), l.trigger("shift", {
                                reason: "duration"
                            }))
                        }
                    },
                    y = function(t) {
                        var e = 0,
                            i = c.triggerElement;
                        if (s && i) {
                            for (var r = s.info(), o = n.get.offset(r.container), a = r.vertical ? "top" : "left"; i.parentNode.hasAttribute("data-scrollmagic-pin-spacer");)
                                i = i.parentNode;
                            var h = n.get.offset(i);
                            r.isDocument || (o[a] -= s.scrollPos()), e = h[a] - o[a]
                        }
                        var u = e != p;
                        p = e, u && !t && l.trigger("shift", {
                            reason: "triggerElementPosition"
                        })
                    },
                    b = function(t) {
                        c.triggerHook > 0 && l.trigger("shift", {
                            reason: "containerResize"
                        })
                    },
                    x = n.extend(i.validate, {
                        duration: function(t) {
                            if (n.type.String(t) && t.match(/^(\.|\d)*\d+%$/)) {
                                var e = parseFloat(t) / 100;
                                t = function() {
                                    return s ? s.info("size") * e : 0
                                }
                            }
                            if (n.type.Function(t)) {
                                r = t;
                                try {
                                    t = parseFloat(r())
                                } catch (e) {
                                    t = -1
                                }
                            }
                            if (t = parseFloat(t), !n.type.Number(t) || t < 0)
                                throw r ? (r = void 0, ['Invalid return value of supplied function for option "duration":', t]) : ['Invalid value for option "duration":', t];
                            return t
                        }
                    }),
                    w = function(t) {
                        t = arguments.length ? [t] : Object.keys(x), t.forEach(function(t, e) {
                            var i;
                            if (x[t])
                                try {
                                    i = x[t](c[t])
                                } catch (e) {
                                    i = a[t];
                                    var r = n.type.String(e) ? [e] : e;
                                    n.type.Array(r) ? (r[0] = "ERROR: " + r[0], r.unshift(1), m.apply(this, r)) : m(1, "ERROR: Problem executing validation callback for option '" + t + "':", e.message)
                                } finally {
                                    c[t] = i
                                }
                        })
                    },
                    T = function(t, e) {
                        var i = !1,
                            n = c[t];
                        return c[t] != e && (c[t] = e, w(t), i = n != c[t]), i
                    },
                    S = function(t) {
                        l[t] || (l[t] = function(e) {
                            return arguments.length ? ("duration" === t && (r = void 0), T(t, e) && (l.trigger("change", {
                                what: t,
                                newval: c[t]
                            }), i.shifts.indexOf(t) > -1 && l.trigger("shift", {
                                reason: t
                            })), l) : c[t]
                        })
                    };
                this.controller = function() {
                    return s
                }, this.state = function() {
                    return h
                }, this.scrollOffset = function() {
                    return f.start
                }, this.triggerPosition = function() {
                    var t = c.offset;
                    return s && (c.triggerElement ? t += p : t += s.info("size") * l.triggerHook()), t
                };
                var P,
                    C;
                l.on("shift.internal", function(t) {
                    var e = "duration" === t.reason;
                    ("AFTER" === h && e || "DURING" === h && 0 === c.duration) && k(), e && R()
                }).on("progress.internal", function(t) {
                    k()
                }).on("add.internal", function(t) {
                    R()
                }).on("destroy.internal", function(t) {
                    l.removePin(t.reset)
                });
                var k = function(t) {
                        if (P && s) {
                            var e = s.info(),
                                i = C.spacer.firstChild;
                            if (t || "DURING" !== h) {
                                var r = {
                                        position: C.inFlow ? "relative" : "absolute",
                                        top: 0,
                                        left: 0
                                    },
                                    o = n.css(i, "position") != r.position;
                                C.pushFollowers ? c.duration > 0 && ("AFTER" === h && 0 === parseFloat(n.css(C.spacer, "padding-top")) ? o = !0 : "BEFORE" === h && 0 === parseFloat(n.css(C.spacer, "padding-bottom")) && (o = !0)) : r[e.vertical ? "top" : "left"] = c.duration * u, n.css(i, r), o && R()
                            } else {
                                "fixed" != n.css(i, "position") && (n.css(i, {
                                    position: "fixed"
                                }), R());
                                var a = n.get.offset(C.spacer, !0),
                                    l = c.reverse || 0 === c.duration ? e.scrollPos - f.start : Math.round(u * c.duration * 10) / 10;
                                a[e.vertical ? "top" : "left"] += l, n.css(C.spacer.firstChild, {
                                    top: a.top,
                                    left: a.left
                                })
                            }
                        }
                    },
                    R = function() {
                        if (P && s && C.inFlow) {
                            var t = "DURING" === h,
                                e = s.info("vertical"),
                                i = C.spacer.firstChild,
                                r = n.isMarginCollapseType(n.css(C.spacer, "display")),
                                o = {};
                            C.relSize.width || C.relSize.autoFullWidth ? t ? n.css(P, {
                                width: n.get.width(C.spacer)
                            }) : n.css(P, {
                                width: "100%"
                            }) : (o["min-width"] = n.get.width(e ? P : i, !0, !0), o.width = t ? o["min-width"] : "auto"), C.relSize.height ? t ? n.css(P, {
                                height: n.get.height(C.spacer) - (C.pushFollowers ? c.duration : 0)
                            }) : n.css(P, {
                                height: "100%"
                            }) : (o["min-height"] = n.get.height(e ? i : P, !0, !r), o.height = t ? o["min-height"] : "auto"), C.pushFollowers && (o["padding" + (e ? "Top" : "Left")] = c.duration * u, o["padding" + (e ? "Bottom" : "Right")] = c.duration * (1 - u)), n.css(C.spacer, o)
                        }
                    },
                    O = function() {
                        s && P && "DURING" === h && !s.info("isDocument") && k()
                    },
                    E = function() {
                        s && P && "DURING" === h && ((C.relSize.width || C.relSize.autoFullWidth) && n.get.width(window) != n.get.width(C.spacer.parentNode) || C.relSize.height && n.get.height(window) != n.get.height(C.spacer.parentNode)) && R()
                    },
                    A = function(t) {
                        s && P && "DURING" === h && !s.info("isDocument") && (t.preventDefault(), s._setScrollPos(s.info("scrollPos") - ((t.wheelDelta || t[s.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || 30 * -t.detail)))
                    };
                this.setPin = function(t, e) {
                    var i = {
                        pushFollowers: !0,
                        spacerClass: "scrollmagic-pin-spacer"
                    };
                    if (e = n.extend({}, i, e), !(t = n.get.elements(t)[0]))
                        return m(1, "ERROR calling method 'setPin()': Invalid pin element supplied."), l;
                    if ("fixed" === n.css(t, "position"))
                        return m(1, "ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'."), l;
                    if (P) {
                        if (P === t)
                            return l;
                        l.removePin()
                    }
                    P = t;
                    var r = P.parentNode.style.display,
                        s = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
                    P.parentNode.style.display = "none";
                    var o = "absolute" != n.css(P, "position"),
                        a = n.css(P, s.concat(["display"])),
                        h = n.css(P, ["width", "height"]);
                    P.parentNode.style.display = r, !o && e.pushFollowers && (m(2, "WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled."), e.pushFollowers = !1), window.setTimeout(function() {
                        P && 0 === c.duration && e.pushFollowers && m(2, "WARNING: pushFollowers =", !0, "has no effect, when scene duration is 0.")
                    }, 0);
                    var u = P.parentNode.insertBefore(document.createElement("div"), P),
                        f = n.extend(a, {
                            position: o ? "relative" : "absolute",
                            boxSizing: "content-box",
                            mozBoxSizing: "content-box",
                            webkitBoxSizing: "content-box"
                        });
                    if (o || n.extend(f, n.css(P, ["width", "height"])), n.css(u, f), u.setAttribute("data-scrollmagic-pin-spacer", ""), n.addClass(u, e.spacerClass), C = {
                        spacer: u,
                        relSize: {
                            width: "%" === h.width.slice(-1),
                            height: "%" === h.height.slice(-1),
                            autoFullWidth: "auto" === h.width && o && n.isMarginCollapseType(a.display)
                        },
                        pushFollowers: e.pushFollowers,
                        inFlow: o
                    }, !P.___origStyle) {
                        P.___origStyle = {};
                        var p = P.style;
                        s.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]).forEach(function(t) {
                            P.___origStyle[t] = p[t] || ""
                        })
                    }
                    return C.relSize.width && n.css(u, {
                        width: h.width
                    }), C.relSize.height && n.css(u, {
                        height: h.height
                    }), u.appendChild(P), n.css(P, {
                        position: o ? "relative" : "absolute",
                        margin: "auto",
                        top: "auto",
                        left: "auto",
                        bottom: "auto",
                        right: "auto"
                    }), (C.relSize.width || C.relSize.autoFullWidth) && n.css(P, {
                        boxSizing: "border-box",
                        mozBoxSizing: "border-box",
                        webkitBoxSizing: "border-box"
                    }), window.addEventListener("scroll", O), window.addEventListener("resize", O), window.addEventListener("resize", E), P.addEventListener("mousewheel", A), P.addEventListener("DOMMouseScroll", A), m(3, "added pin"), k(), l
                }, this.removePin = function(t) {
                    if (P) {
                        if ("DURING" === h && k(!0), t || !s) {
                            var e = C.spacer.firstChild;
                            if (e.hasAttribute("data-scrollmagic-pin-spacer")) {
                                var i = C.spacer.style,
                                    r = ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
                                margins = {}, r.forEach(function(t) {
                                    margins[t] = i[t] || ""
                                }), n.css(e, margins)
                            }
                            C.spacer.parentNode.insertBefore(e, C.spacer), C.spacer.parentNode.removeChild(C.spacer), P.parentNode.hasAttribute("data-scrollmagic-pin-spacer") || (n.css(P, P.___origStyle), delete P.___origStyle)
                        }
                        window.removeEventListener("scroll", O), window.removeEventListener("resize", O), window.removeEventListener("resize", E), P.removeEventListener("mousewheel", A), P.removeEventListener("DOMMouseScroll", A), P = void 0, m(3, "removed pin (reset: " + (t ? "true" : "false") + ")")
                    }
                    return l
                };
                var F,
                    M = [];
                return l.on("destroy.internal", function(t) {
                    l.removeClassToggle(t.reset)
                }), this.setClassToggle = function(t, e) {
                    var i = n.get.elements(t);
                    return 0 !== i.length && n.type.String(e) ? (M.length > 0 && l.removeClassToggle(), F = e, M = i, l.on("enter.internal_class leave.internal_class", function(t) {
                        var e = "enter" === t.type ? n.addClass : n.removeClass;
                        M.forEach(function(t, i) {
                            e(t, F)
                        })
                    }), l) : (m(1, "ERROR calling method 'setClassToggle()': Invalid " + (0 === i.length ? "element" : "classes") + " supplied."), l)
                }, this.removeClassToggle = function(t) {
                    return t && M.forEach(function(t, e) {
                        n.removeClass(t, F)
                    }), l.off("start.internal_class end.internal_class"), F = void 0, M = [], l
                }, function() {
                    for (var t in c)
                        a.hasOwnProperty(t) || (m(2, 'WARNING: Unknown option "' + t + '"'), delete c[t]);
                    for (var e in a)
                        S(e);
                    w()
                }(), l
            };
            var i = {
                defaults: {
                    duration: 0,
                    offset: 0,
                    triggerElement: void 0,
                    triggerHook: .5,
                    reverse: !0,
                    loglevel: 2
                },
                validate: {
                    offset: function(t) {
                        if (t = parseFloat(t), !n.type.Number(t))
                            throw ['Invalid value for option "offset":', t];
                        return t
                    },
                    triggerElement: function(t) {
                        if (t = t || void 0) {
                            var e = n.get.elements(t)[0];
                            if (!e)
                                throw ['Element defined in option "triggerElement" was not found:', t];
                            t = e
                        }
                        return t
                    },
                    triggerHook: function(t) {
                        var e = {
                            onCenter: .5,
                            onEnter: 1,
                            onLeave: 0
                        };
                        if (n.type.Number(t))
                            t = Math.max(0, Math.min(parseFloat(t), 1));
                        else {
                            if (!(t in e))
                                throw ['Invalid value for option "triggerHook": ', t];
                            t = e[t]
                        }
                        return t
                    },
                    reverse: function(t) {
                        return !!t
                    },
                    loglevel: function(t) {
                        if (t = parseInt(t), !n.type.Number(t) || t < 0 || t > 3)
                            throw ['Invalid value for option "loglevel":', t];
                        return t
                    }
                },
                shifts: ["duration", "offset", "triggerHook"]
            };
            t.Scene.addOption = function(e, n, r, s) {
                e in i.defaults ? t._util.log(1, "[static] ScrollMagic.Scene -> Cannot add Scene option '" + e + "', because it already exists.") : (i.defaults[e] = n, i.validate[e] = r, s && i.shifts.push(e))
            }, t.Scene.extend = function(e) {
                var i = this;
                t.Scene = function() {
                    return i.apply(this, arguments), this.$super = n.extend({}, this), e.apply(this, arguments) || this
                }, n.extend(t.Scene, i), t.Scene.prototype = i.prototype, t.Scene.prototype.constructor = t.Scene
            }, t.Event = function(t, e, i, n) {
                n = n || {};
                for (var r in n)
                    this[r] = n[r];
                return this.type = t, this.target = this.currentTarget = i, this.namespace = e || "", this.timeStamp = this.timestamp = Date.now(), this
            };
            var n = t._util = function(t) {
                var e,
                    i = {},
                    n = function(t) {
                        return parseFloat(t) || 0
                    },
                    r = function(e) {
                        return e.currentStyle ? e.currentStyle : t.getComputedStyle(e)
                    },
                    s = function(e, i, s, o) {
                        if ((i = i === document ? t : i) === t)
                            o = !1;
                        else if (!d.DomElement(i))
                            return 0;
                        e = e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
                        var a = (s ? i["offset" + e] || i["outer" + e] : i["client" + e] || i["inner" + e]) || 0;
                        if (s && o) {
                            var l = r(i);
                            a += "Height" === e ? n(l.marginTop) + n(l.marginBottom) : n(l.marginLeft) + n(l.marginRight)
                        }
                        return a
                    },
                    o = function(t) {
                        return t.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, function(t) {
                            return t[1].toUpperCase()
                        })
                    };
                i.extend = function(t) {
                    for (t = t || {}, e = 1; e < arguments.length; e++)
                        if (arguments[e])
                            for (var i in arguments[e])
                                arguments[e].hasOwnProperty(i) && (t[i] = arguments[e][i]);
                    return t
                }, i.isMarginCollapseType = function(t) {
                    return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(t) > -1
                };
                var a = 0,
                    l = ["ms", "moz", "webkit", "o"],
                    c = t.requestAnimationFrame,
                    h = t.cancelAnimationFrame;
                for (e = 0; !c && e < l.length; ++e)
                    c = t[l[e] + "RequestAnimationFrame"], h = t[l[e] + "CancelAnimationFrame"] || t[l[e] + "CancelRequestAnimationFrame"];
                c || (c = function(e) {
                    var i = (new Date).getTime(),
                        n = Math.max(0, 16 - (i - a)),
                        r = t.setTimeout(function() {
                            e(i + n)
                        }, n);
                    return a = i + n, r
                }), h || (h = function(e) {
                    t.clearTimeout(e)
                }), i.rAF = c.bind(t), i.cAF = h.bind(t);
                var u = ["error", "warn", "log"],
                    f = t.console || {};
                for (f.log = f.log || function() {}, e = 0; e < u.length; e++) {
                    var p = u[e];
                    f[p] || (f[p] = f.log)
                }
                i.log = function(t) {
                    (t > u.length || t <= 0) && (t = u.length);
                    var e = new Date,
                        i = ("0" + e.getHours()).slice(-2) + ":" + ("0" + e.getMinutes()).slice(-2) + ":" + ("0" + e.getSeconds()).slice(-2) + ":" + ("00" + e.getMilliseconds()).slice(-3),
                        n = u[t - 1],
                        r = Array.prototype.splice.call(arguments, 1),
                        s = Function.prototype.bind.call(f[n], f);
                    r.unshift(i), s.apply(f, r)
                };
                var d = i.type = function(t) {
                    return Object.prototype.toString.call(t).replace(/^\[object (.+)\]$/, "$1").toLowerCase()
                };
                d.String = function(t) {
                    return "string" === d(t)
                }, d.Function = function(t) {
                    return "function" === d(t)
                }, d.Array = function(t) {
                    return Array.isArray(t)
                }, d.Number = function(t) {
                    return !d.Array(t) && t - parseFloat(t) + 1 >= 0
                }, d.DomElement = function(t) {
                    return "object" == typeof HTMLElement ? t instanceof HTMLElement : t && "object" == typeof t && null !== t && 1 === t.nodeType && "string" == typeof t.nodeName
                };
                var g = i.get = {};
                return g.elements = function(e) {
                    var i = [];
                    if (d.String(e))
                        try {
                            e = document.querySelectorAll(e)
                        } catch (t) {
                            return i
                        }
                    if ("nodelist" === d(e) || d.Array(e))
                        for (var n = 0, r = i.length = e.length; n < r; n++) {
                            var s = e[n];
                            i[n] = d.DomElement(s) ? s : g.elements(s)
                        }
                    else
                        (d.DomElement(e) || e === document || e === t) && (i = [e]);
                    return i
                }, g.scrollTop = function(e) {
                    return e && "number" == typeof e.scrollTop ? e.scrollTop : t.pageYOffset || 0
                }, g.scrollLeft = function(e) {
                    return e && "number" == typeof e.scrollLeft ? e.scrollLeft : t.pageXOffset || 0
                }, g.width = function(t, e, i) {
                    return s("width", t, e, i)
                }, g.height = function(t, e, i) {
                    return s("height", t, e, i)
                }, g.offset = function(t, e) {
                    var i = {
                        top: 0,
                        left: 0
                    };
                    if (t && t.getBoundingClientRect) {
                        var n = t.getBoundingClientRect();
                        i.top = n.top, i.left = n.left, e || (i.top += g.scrollTop(), i.left += g.scrollLeft())
                    }
                    return i
                }, i.addClass = function(t, e) {
                    e && (t.classList ? t.classList.add(e) : t.className += " " + e)
                }, i.removeClass = function(t, e) {
                    e && (t.classList ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " "))
                }, i.css = function(t, e) {
                    if (d.String(e))
                        return r(t)[o(e)];
                    if (d.Array(e)) {
                        var i = {},
                            n = r(t);
                        return e.forEach(function(t, e) {
                            i[t] = n[o(t)]
                        }), i
                    }
                    for (var s in e) {
                        var a = e[s];
                        a == parseFloat(a) && (a += "px"), t.style[o(s)] = a
                    }
                }, i
            }(window || {});
            return t.Scene.prototype.addIndicators = function() {
                return t._util.log(1, "(ScrollMagic.Scene) -> ERROR calling addIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"), this
            }, t.Scene.prototype.removeIndicators = function() {
                return t._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"), this
            }, t.Scene.prototype.setTween = function() {
                return t._util.log(1, "(ScrollMagic.Scene) -> ERROR calling setTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"), this
            }, t.Scene.prototype.removeTween = function() {
                return t._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"), this
            }, t.Scene.prototype.setVelocity = function() {
                return t._util.log(1, "(ScrollMagic.Scene) -> ERROR calling setVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"), this
            }, t.Scene.prototype.removeVelocity = function() {
                return t._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"), this
            }, t
        })
    }).call(window)
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = {};
    i.d(n, "init", function() {
        return f
    });
    var r = i(0),
        s = i.n(r),
        o = i(1),
        a = (i.n(o), i(2)),
        l = i.n(a),
        c = i(5),
        h = (i.n(c), i(6)),
        u = (i.n(h), i(7)),
        f = (i.n(u), function() {
            function t() {
                s()("ul.b-quiz").each(function() {
                    var t = "poll_" + s()(this).data("poll-id"),
                        e = document.cookie.match(new RegExp(t + "=([^;]+)"));
                    if (e) {
                        var i = s()(this).data("poll-id"),
                            n = i + "-" + e[1];
                        s()("#poll-vote-" + n).addClass("is-active"), s()("#poll-container-" + i).addClass("is-voted")
                    }
                })
            }
            s()(document).on("click", ".js-link-slide", function(t) {
                t.preventDefault(), s()("body, html").animate({
                    scrollTop: s()(s()(this).attr("href")).offset().top - s()(".header").outerHeight() - 20
                }, 500)
            }).on("click", ".hamburger", function(t) {
                t.preventDefault(), s()(".header").toggleClass("is-visible")
            }).on("click", "a.poll-vote", function(e) {
                var i = s()(this).data("poll-id"),
                    n = s()(this).data("vote-id");
                s.a.post("/wp-json/sk-poll/v1/" + i, {
                    vote_id: n
                }).done(function(e) {
                    s()("#poll-alert").removeClass("hide").removeClass("alert--error").removeClass("alert--success").addClass("alert--" + e.messages.type), s()("#poll-alert .alert__inner").text(e.messages.text), "success" == e.messages.type && null !== e.html && (s()("#poll-container-" + i).html(e.html), s()("#poll-container-" + i).addClass("is-voted"), t())
                }), e.preventDefault()
            }).ready(function() {
                t()
            });
            var e,
                i = s()(".m-main__list"),
                n = s()(".header").outerHeight(),
                r = i.find("a"),
                o = r.map(function() {
                    var t = s()(s()(this).attr("href"));
                    if (t.length)
                        return t
                });
            r.click(function(t) {
                var e = s()(this).attr("href"),
                    i = "#" === e ? 0 : s()(e).offset().top - n + 1;
                s()("html, body").stop().animate({
                    scrollTop: i
                }, 300), window.location.hash = s()(this).attr("href"), t.preventDefault()
            }), s()(window).scroll(function() {
                var t = s()(this).scrollTop() + n,
                    i = o.map(function() {
                        if (s()(this).offset().top < t)
                            return this
                    });
                i = i[i.length - 1];
                var a = i && i.length ? i[0].id : "";
                e !== a && (e = a, s()(".header").removeClass("is-visible"), r.parent().removeClass("is-active").end().filter('[href="#' + a + '"]').parent().addClass("is-active"));

            }), s()(".js-counter").each(function() {


                var t = s()(this),
                    e = 0,
                    i = 1 * t.data("end"),
                    n = 1 * t.data("step"),
                    r = !1;
                if (!isNaN(i)) {

                var yearBegin = Date.parse("January 1, " + new Date().getFullYear() + ", 00:00:00")/1000;
                var yearEnd = Date.parse("December 31, " + new Date().getFullYear() + ", 23:59:59")/1000;
                var currentTime = Date.now()/1000;
                var secStep = 3;
                var chunk = Math.round((i-n) / ((yearEnd - yearBegin) / secStep));
                var currentValue = n + Math.round((i-n) * ((currentTime-yearBegin)/(yearEnd-yearBegin)));
                e = currentValue;
                n = chunk;
              //  e += n, t.text(e);
                var o = function(t) {
                        return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
                    };
                t.text(o(currentValue));
                var a = function r() {
                        e += n, e > i ? t.text(o(i)) : t.text(o(e)), e < i && setTimeout(r, secStep*1000);
                    };
                    s()(window).on("scroll load", function() {
                        !r && s()(window).scrollTop() + .75 * s()(window).height() > t.offset().top && (r = !0, a())
                    })

                } else {
                  t.text(t.data("end"));
                }
            });
            var a = new l.a.Controller,
                c = s()("#velikost .b-intro .grid__cell"),
                h = new TimelineMax;
            h.staggerFrom(c, .5, {
                y: "-10px",
                opacity: 0
            }, .3);
            var u = new l.a.Scene({
                    triggerElement: "#velikost",
                    triggerHook: ".5",
                    reverse: !1
                }).setTween(h),
                f = s()("#chart-eshop .chart-section"),
                p = new TimelineMax;
            p.staggerFrom(f, .3, {
                scale: .5,
                opacity: 0
            }, .15);
            var d = new l.a.Scene({
                    triggerElement: "#reseni",
                    triggerHook: ".5",
                    reverse: !1
                }).setTween(p),
                g = s()("#produkty"),
                m = g.find(".b-progress__item"),
                _ = g.find(".b-winner__item"),
                v = g.find(".b-metro__item"),
                y = new TimelineMax;
            y.staggerFrom(m, .3, {
                y: "-10px",
                autoAlpha: 0,
                ease: Power1.ease
            }, .15).staggerFrom(_, .3, {
                scale: 0,
                autoAlpha: 0,
                ease: Power1.ease
            }, .15).staggerFrom(v, .3, {
                scale: 0,
                autoAlpha: 0,
                ease: Power1.ease
            }, .15);
            var b = new l.a.Scene({
                    triggerElement: "#produkty",
                    triggerHook: ".5",
                    reverse: !1
                }).setTween(y),
                x = s()("#trendy .b-testimonial"),
                w = new TimelineMax;
            w.staggerFrom(x, .3, {
                y: "-10px",
                opacity: 0
            }, .15);
            var T = new l.a.Scene({
                    triggerElement: "#trendy",
                    triggerHook: ".5",
                    reverse: !1
                }).setTween(w),
                S = s()("#dopravy-a-platby"),
                P = S.find(".b-progress__item"),
                C = S.find(".b-metro__inner"),
                k = new TimelineMax;
            k.staggerFrom(C, .3, {
                scale: 0,
                autoAlpha: 0,
                ease: Power1.ease
            }, .15).staggerFrom(P, .3, {
                y: "-10px",
                autoAlpha: 0,
                ease: Power1.ease
            }, .15);
            var R = new l.a.Scene({
                    triggerElement: "#dopravy-a-platby",
                    triggerHook: ".5",
                    reverse: !1
                }).setTween(k),
                O = s()("#ankety .b-quiz__item"),
                E = new TimelineMax;
            E.staggerFrom(O, .3, {
                y: "-10px",
                opacity: 0
            }, .1);
            var A = new l.a.Scene({
                    triggerElement: "#ankety",
                    triggerHook: ".5",
                    reverse: !1
                }).setTween(E),
                F = s()("#fotky .b-preview__item"),
                M = new TimelineMax;
            M.staggerFrom(F, .3, {
                opacity: 0
            }, .1);
            var D = new l.a.Scene({
                    triggerElement: "#fotky",
                    triggerHook: ".5",
                    reverse: !1
                }).setTween(M),
                $ = s()("#chart-goods .chart-section"),
                z = s()("#srovnavace .b-columns__cell"),
                L = new TimelineMax;
            L.staggerFrom(z, .3, {
                y: "-10px",
                opacity: 0
            }, .1).staggerFrom($, .3, {
                scale: .5,
                opacity: 0
            }, .1);
            var I = new l.a.Scene({
                    triggerElement: "#srovnavace",
                    triggerHook: ".5",
                    reverse: !1
                }).setTween(L),
                N = s()("#minulost .b-timeline__item"),
                X = new TimelineMax;
            X.staggerFrom(N, .3, {
                x: "-10px",
                opacity: 0
            }, .15);
            var B = new l.a.Scene({
                    triggerElement: "#minulost",
                    triggerHook: ".5",
                    reverse: !1
                }).setTween(X),
                j = s()("#zajimavosti"),
                Y = s()("#chart-devices"),
                q = Y.find(".chart-label"),
                U = Y.find(".chart-line"),
                H = Y.find(".chart-bar"),
                W = j.find(".b-chart li"),
                V = j.find(".b-metro__item"),
                G = new TimelineMax;
            G.from(U, .5, {
                opacity: 0
            }, .2).staggerFrom(q, .2, {
                opacity: 0
            }, .1).staggerFrom(H, .3, {
                opacity: 0
            }, .2).staggerFrom(W, .3, {
                opacity: 0
            }, .3).staggerFrom(V, .3, {
                scale: 0,
                autoAlpha: 0,
                ease: Power1.ease
            }, .15);
            var Z = new l.a.Scene({
                triggerElement: "#zajimavosti",
                triggerHook: ".5",
                reverse: !1
            }).setTween(G);
            s()(window).scroll(function() {
                //s()(window).scrollTop() >= s()(".header > .row-main").outerHeight() ? s()("body").addClass("nav-is-fixed") : s()("body").removeClass("nav-is-fixed")
            }), a.addScene([u, d, b, T, R, I, A, D, Z, B])
        }),
        p = i(0),
        d = (i.n(p), [n]);
    window.App = {
        run: function() {
            d.forEach(this.initComponent)
        },
        initComponent: function(t) {
            return t.init()
        }
    }
}, function(t, e) {
    var i;
    i = function() {
        return this
    }();
    try {
        i = i || Function("return this")() || (0, eval)("this")
    } catch (t) {
        "object" == typeof window && (i = window)
    }
    t.exports = i
}, function(t, e, i) {
    var n = !1;
    (function() {
        !function(e, i) {
            "function" == typeof n && n.amd ? n(i) : t.exports = i()
        }(0, function() {
            "use strict";
            var t = function() {};
            t.version = "2.0.5", window.addEventListener("mousewheel", function() {});
            var e = "data-scrollmagic-pin-spacer";
            t.Controller = function(n) {
                var s,
                    o,
                    a = "REVERSE",
                    l = "PAUSED",
                    c = i.defaults,
                    h = this,
                    u = r.extend({}, c, n),
                    f = [],
                    p = !1,
                    d = 0,
                    g = l,
                    m = !0,
                    _ = 0,
                    v = !0,
                    y = function() {
                        u.refreshInterval > 0 && (o = window.setTimeout(C, u.refreshInterval))
                    },
                    b = function() {
                        return u.vertical ? r.get.scrollTop(u.container) : r.get.scrollLeft(u.container)
                    },
                    x = function() {
                        return u.vertical ? r.get.height(u.container) : r.get.width(u.container)
                    },
                    w = this._setScrollPos = function(t) {
                        u.vertical ? m ? window.scrollTo(r.get.scrollLeft(), t) : u.container.scrollTop = t : m ? window.scrollTo(t, r.get.scrollTop()) : u.container.scrollLeft = t
                    },
                    T = function() {
                        if (v && p) {
                            var t = r.type.Array(p) ? p : f.slice(0);
                            p = !1;
                            var e = d;
                            d = h.scrollPos();
                            var i = d - e;
                            0 !== i && (g = i > 0 ? "FORWARD" : a), g === a && t.reverse(), t.forEach(function(t) {
                                t.update(!0)
                            })
                        }
                    },
                    S = function() {
                        s = r.rAF(T)
                    },
                    P = function(t) {
                        "resize" == t.type && (_ = x(), g = l), !0 !== p && (p = !0, S())
                    },
                    C = function() {
                        if (!m && _ != x()) {
                            var t;
                            try {
                                t = new Event("resize", {
                                    bubbles: !1,
                                    cancelable: !1
                                })
                            } catch (e) {
                                t = document.createEvent("Event"), t.initEvent("resize", !1, !1)
                            }
                            u.container.dispatchEvent(t)
                        }
                        f.forEach(function(t) {
                            t.refresh()
                        }), y()
                    };
                this._options = u;
                var k = function(t) {
                    if (t.length <= 1)
                        return t;
                    var e = t.slice(0);
                    return e.sort(function(t, e) {
                        return t.scrollOffset() > e.scrollOffset() ? 1 : -1
                    }), e
                };
                return this.addScene = function(e) {
                    if (r.type.Array(e))
                        e.forEach(function(t) {
                            h.addScene(t)
                        });
                    else if (e instanceof t.Scene)
                        if (e.controller() !== h)
                            e.addTo(h);
                        else if (f.indexOf(e) < 0) {
                            f.push(e), f = k(f), e.on("shift.controller_sort", function() {
                                f = k(f)
                            });
                            for (var i in u.globalSceneOptions)
                                e[i] && e[i].call(e, u.globalSceneOptions[i])
                        }
                    return h
                }, this.removeScene = function(t) {
                    if (r.type.Array(t))
                        t.forEach(function(t) {
                            h.removeScene(t)
                        });
                    else {
                        var e = f.indexOf(t);
                        e > -1 && (t.off("shift.controller_sort"), f.splice(e, 1), t.remove())
                    }
                    return h
                }, this.updateScene = function(e, i) {
                    return r.type.Array(e) ? e.forEach(function(t) {
                        h.updateScene(t, i)
                    }) : i ? e.update(!0) : !0 !== p && e instanceof t.Scene && (p = p || [], -1 == p.indexOf(e) && p.push(e), p = k(p), S()), h
                }, this.update = function(t) {
                    return P({
                        type: "resize"
                    }), t && T(), h
                }, this.scrollTo = function(i, n) {
                    if (r.type.Number(i))
                        w.call(u.container, i, n);
                    else if (i instanceof t.Scene)
                        i.controller() === h && h.scrollTo(i.scrollOffset(), n);
                    else if (r.type.Function(i))
                        w = i;
                    else {
                        var s = r.get.elements(i)[0];
                        if (s) {
                            for (; s.parentNode.hasAttribute(e);)
                                s = s.parentNode;
                            var o = u.vertical ? "top" : "left",
                                a = r.get.offset(u.container),
                                l = r.get.offset(s);
                            m || (a[o] -= h.scrollPos()), h.scrollTo(l[o] - a[o], n)
                        }
                    }
                    return h
                }, this.scrollPos = function(t) {
                    return arguments.length ? (r.type.Function(t) && (b = t), h) : b.call(h)
                }, this.info = function(t) {
                    var e = {
                        size: _,
                        vertical: u.vertical,
                        scrollPos: d,
                        scrollDirection: g,
                        container: u.container,
                        isDocument: m
                    };
                    return arguments.length ? void 0 !== e[t] ? e[t] : void 0 : e
                }, this.loglevel = function() {
                    return h
                }, this.enabled = function(t) {
                    return arguments.length ? (v != t && (v = !!t, h.updateScene(f, !0)), h) : v
                }, this.destroy = function(t) {
                    window.clearTimeout(o);
                    for (var e = f.length; e--;)
                        f[e].destroy(t);
                    return u.container.removeEventListener("resize", P), u.container.removeEventListener("scroll", P), r.cAF(s), null
                }, function() {
                    for (var t in u)
                        c.hasOwnProperty(t) || delete u[t];
                    if (u.container = r.get.elements(u.container)[0], !u.container)
                        throw "ScrollMagic.Controller init failed.";
                    m = u.container === window || u.container === document.body || !document.body.contains(u.container), m && (u.container = window), _ = x(), u.container.addEventListener("resize", P), u.container.addEventListener("scroll", P), u.refreshInterval = parseInt(u.refreshInterval) || c.refreshInterval, y()
                }(), h
            };
            var i = {
                defaults: {
                    container: window,
                    vertical: !0,
                    globalSceneOptions: {},
                    loglevel: 2,
                    refreshInterval: 100
                }
            };
            t.Controller.addOption = function(t, e) {
                i.defaults[t] = e
            }, t.Controller.extend = function(e) {
                var i = this;
                t.Controller = function() {
                    return i.apply(this, arguments), this.$super = r.extend({}, this), e.apply(this, arguments) || this
                }, r.extend(t.Controller, i), t.Controller.prototype = i.prototype, t.Controller.prototype.constructor = t.Controller
            }, t.Scene = function(i) {
                var s,
                    o,
                    a = "BEFORE",
                    l = "DURING",
                    c = "AFTER",
                    h = n.defaults,
                    u = this,
                    f = r.extend({}, h, i),
                    p = a,
                    d = 0,
                    g = {
                        start: 0,
                        end: 0
                    },
                    m = 0,
                    _ = !0,
                    v = {};
                this.on = function(t, e) {
                    return r.type.Function(e) && (t = t.trim().split(" "), t.forEach(function(t) {
                        var i = t.split("."),
                            n = i[0],
                            r = i[1];
                        "*" != n && (v[n] || (v[n] = []), v[n].push({
                            namespace: r || "",
                            callback: e
                        }))
                    })), u
                }, this.off = function(t, e) {
                    return t ? (t = t.trim().split(" "), t.forEach(function(t) {
                        var i = t.split("."),
                            n = i[0],
                            r = i[1] || "";
                        ("*" === n ? Object.keys(v) : [n]).forEach(function(t) {
                            for (var i = v[t] || [], n = i.length; n--;) {
                                var s = i[n];
                                !s || r !== s.namespace && "*" !== r || e && e != s.callback || i.splice(n, 1)
                            }
                            i.length || delete v[t]
                        })
                    }), u) : u
                }, this.trigger = function(e, i) {
                    if (e) {
                        var n = e.trim().split("."),
                            r = n[0],
                            s = n[1],
                            o = v[r];
                        o && o.forEach(function(e) {
                            s && s !== e.namespace || e.callback.call(u, new t.Event(r, e.namespace, u, i))
                        })
                    }
                    return u
                }, u.on("change.internal", function(t) {
                    "loglevel" !== t.what && "tweenChanges" !== t.what && ("triggerElement" === t.what ? x() : "reverse" === t.what && u.update())
                }).on("shift.internal", function() {
                    y(), u.update()
                }), this.addTo = function(e) {
                    return e instanceof t.Controller && o != e && (o && o.removeScene(u), o = e, S(), b(!0), x(!0), y(), o.info("container").addEventListener("resize", w), e.addScene(u), u.trigger("add", {
                        controller: o
                    }), u.update()), u
                }, this.enabled = function(t) {
                    return arguments.length ? (_ != t && (_ = !!t, u.update(!0)), u) : _
                }, this.remove = function() {
                    if (o) {
                        o.info("container").removeEventListener("resize", w);
                        var t = o;
                        o = void 0, t.removeScene(u), u.trigger("remove")
                    }
                    return u
                }, this.destroy = function(t) {
                    return u.trigger("destroy", {
                        reset: t
                    }), u.remove(), u.off("*.*"), null
                }, this.update = function(t) {
                    if (o)
                        if (t)
                            if (o.enabled() && _) {
                                var e,
                                    i = o.info("scrollPos");
                                e = f.duration > 0 ? (i - g.start) / (g.end - g.start) : i >= g.start ? 1 : 0, u.trigger("update", {
                                    startPos: g.start,
                                    endPos: g.end,
                                    scrollPos: i
                                }), u.progress(e)
                            } else
                                k && p === l && O(!0);
                        else
                            o.updateScene(u, !1);
                    return u
                }, this.refresh = function() {
                    return b(), x(), u
                }, this.progress = function(t) {
                    if (arguments.length) {
                        var e = !1,
                            i = p,
                            n = o ? o.info("scrollDirection") : "PAUSED",
                            r = f.reverse || t >= d;
                        if (0 === f.duration ? (e = d != t, d = 1 > t && r ? 0 : 1, p = 0 === d ? a : l) : 0 > t && p !== a && r ? (d = 0, p = a, e = !0) : t >= 0 && 1 > t && r ? (d = t, p = l, e = !0) : t >= 1 && p !== c ? (d = 1, p = c, e = !0) : p !== l || r || O(), e) {
                            var s = {
                                    progress: d,
                                    state: p,
                                    scrollDirection: n
                                },
                                h = p != i,
                                g = function(t) {
                                    u.trigger(t, s)
                                };
                            h && i !== l && (g("enter"), g(i === a ? "start" : "end")), g("progress"), h && p !== l && (g(p === a ? "start" : "end"), g("leave"))
                        }
                        return u
                    }
                    return d
                };
                var y = function() {
                        g = {
                            start: m + f.offset
                        }, o && f.triggerElement && (g.start -= o.info("size") * f.triggerHook), g.end = g.start + f.duration
                    },
                    b = function(t) {
                        if (s) {
                            var e = "duration";
                            P(e, s.call(u)) && !t && (u.trigger("change", {
                                what: e,
                                newval: f[e]
                            }), u.trigger("shift", {
                                reason: e
                            }))
                        }
                    },
                    x = function(t) {
                        var i = 0,
                            n = f.triggerElement;
                        if (o && n) {
                            for (var s = o.info(), a = r.get.offset(s.container), l = s.vertical ? "top" : "left"; n.parentNode.hasAttribute(e);)
                                n = n.parentNode;
                            var c = r.get.offset(n);
                            s.isDocument || (a[l] -= o.scrollPos()), i = c[l] - a[l]
                        }
                        var h = i != m;
                        m = i, h && !t && u.trigger("shift", {
                            reason: "triggerElementPosition"
                        })
                    },
                    w = function() {
                        f.triggerHook > 0 && u.trigger("shift", {
                            reason: "containerResize"
                        })
                    },
                    T = r.extend(n.validate, {
                        duration: function(t) {
                            if (r.type.String(t) && t.match(/^(\.|\d)*\d+%$/)) {
                                var e = parseFloat(t) / 100;
                                t = function() {
                                    return o ? o.info("size") * e : 0
                                }
                            }
                            if (r.type.Function(t)) {
                                s = t;
                                try {
                                    t = parseFloat(s())
                                } catch (e) {
                                    t = -1
                                }
                            }
                            if (t = parseFloat(t), !r.type.Number(t) || 0 > t)
                                throw s ? (s = void 0, 0) : 0;
                            return t
                        }
                    }),
                    S = function(t) {
                        t = arguments.length ? [t] : Object.keys(T), t.forEach(function(t) {
                            var e;
                            if (T[t])
                                try {
                                    e = T[t](f[t])
                                } catch (i) {
                                    e = h[t]
                                } finally {
                                    f[t] = e
                                }
                        })
                    },
                    P = function(t, e) {
                        var i = !1,
                            n = f[t];
                        return f[t] != e && (f[t] = e, S(t), i = n != f[t]), i
                    },
                    C = function(t) {
                        u[t] || (u[t] = function(e) {
                            return arguments.length ? ("duration" === t && (s = void 0), P(t, e) && (u.trigger("change", {
                                what: t,
                                newval: f[t]
                            }), n.shifts.indexOf(t) > -1 && u.trigger("shift", {
                                reason: t
                            })), u) : f[t]
                        })
                    };
                this.controller = function() {
                    return o
                }, this.state = function() {
                    return p
                }, this.scrollOffset = function() {
                    return g.start
                }, this.triggerPosition = function() {
                    var t = f.offset;
                    return o && (t += f.triggerElement ? m : o.info("size") * u.triggerHook()), t
                };
                var k,
                    R;
                u.on("shift.internal", function(t) {
                    var e = "duration" === t.reason;
                    (p === c && e || p === l && 0 === f.duration) && O(), e && E()
                }).on("progress.internal", function() {
                    O()
                }).on("add.internal", function() {
                    E()
                }).on("destroy.internal", function(t) {
                    u.removePin(t.reset)
                });
                var O = function(t) {
                        if (k && o) {
                            var e = o.info(),
                                i = R.spacer.firstChild;
                            if (t || p !== l) {
                                var n = {
                                        position: R.inFlow ? "relative" : "absolute",
                                        top: 0,
                                        left: 0
                                    },
                                    s = r.css(i, "position") != n.position;
                                R.pushFollowers ? f.duration > 0 && (p === c && 0 === parseFloat(r.css(R.spacer, "padding-top")) ? s = !0 : p === a && 0 === parseFloat(r.css(R.spacer, "padding-bottom")) && (s = !0)) : n[e.vertical ? "top" : "left"] = f.duration * d, r.css(i, n), s && E()
                            } else {
                                "fixed" != r.css(i, "position") && (r.css(i, {
                                    position: "fixed"
                                }), E());
                                var h = r.get.offset(R.spacer, !0),
                                    u = f.reverse || 0 === f.duration ? e.scrollPos - g.start : Math.round(d * f.duration * 10) / 10;
                                h[e.vertical ? "top" : "left"] += u, r.css(R.spacer.firstChild, {
                                    top: h.top,
                                    left: h.left
                                })
                            }
                        }
                    },
                    E = function() {
                        if (k && o && R.inFlow) {
                            var t = p === l,
                                e = o.info("vertical"),
                                i = R.spacer.firstChild,
                                n = r.isMarginCollapseType(r.css(R.spacer, "display")),
                                s = {};
                            R.relSize.width || R.relSize.autoFullWidth ? t ? r.css(k, {
                                width: r.get.width(R.spacer)
                            }) : r.css(k, {
                                width: "100%"
                            }) : (s["min-width"] = r.get.width(e ? k : i, !0, !0), s.width = t ? s["min-width"] : "auto"), R.relSize.height ? t ? r.css(k, {
                                height: r.get.height(R.spacer) - (R.pushFollowers ? f.duration : 0)
                            }) : r.css(k, {
                                height: "100%"
                            }) : (s["min-height"] = r.get.height(e ? i : k, !0, !n), s.height = t ? s["min-height"] : "auto"), R.pushFollowers && (s["padding" + (e ? "Top" : "Left")] = f.duration * d, s["padding" + (e ? "Bottom" : "Right")] = f.duration * (1 - d)), r.css(R.spacer, s)
                        }
                    },
                    A = function() {
                        o && k && p === l && !o.info("isDocument") && O()
                    },
                    F = function() {
                        o && k && p === l && ((R.relSize.width || R.relSize.autoFullWidth) && r.get.width(window) != r.get.width(R.spacer.parentNode) || R.relSize.height && r.get.height(window) != r.get.height(R.spacer.parentNode)) && E()
                    },
                    M = function(t) {
                        o && k && p === l && !o.info("isDocument") && (t.preventDefault(), o._setScrollPos(o.info("scrollPos") - ((t.wheelDelta || t[o.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || 30 * -t.detail)))
                    };
                this.setPin = function(t, i) {
                    var n = {
                        pushFollowers: !0,
                        spacerClass: "scrollmagic-pin-spacer"
                    };
                    if (i = r.extend({}, n, i), !(t = r.get.elements(t)[0]))
                        return u;
                    if ("fixed" === r.css(t, "position"))
                        return u;
                    if (k) {
                        if (k === t)
                            return u;
                        u.removePin()
                    }
                    k = t;
                    var s = k.parentNode.style.display,
                        o = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
                    k.parentNode.style.display = "none";
                    var a = "absolute" != r.css(k, "position"),
                        l = r.css(k, o.concat(["display"])),
                        c = r.css(k, ["width", "height"]);
                    k.parentNode.style.display = s, !a && i.pushFollowers && (i.pushFollowers = !1);
                    var h = k.parentNode.insertBefore(document.createElement("div"), k),
                        f = r.extend(l, {
                            position: a ? "relative" : "absolute",
                            boxSizing: "content-box",
                            mozBoxSizing: "content-box",
                            webkitBoxSizing: "content-box"
                        });
                    if (a || r.extend(f, r.css(k, ["width", "height"])), r.css(h, f), h.setAttribute(e, ""), r.addClass(h, i.spacerClass), R = {
                        spacer: h,
                        relSize: {
                            width: "%" === c.width.slice(-1),
                            height: "%" === c.height.slice(-1),
                            autoFullWidth: "auto" === c.width && a && r.isMarginCollapseType(l.display)
                        },
                        pushFollowers: i.pushFollowers,
                        inFlow: a
                    }, !k.___origStyle) {
                        k.___origStyle = {};
                        var p = k.style;
                        o.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]).forEach(function(t) {
                            k.___origStyle[t] = p[t] || ""
                        })
                    }
                    return R.relSize.width && r.css(h, {
                        width: c.width
                    }), R.relSize.height && r.css(h, {
                        height: c.height
                    }), h.appendChild(k), r.css(k, {
                        position: a ? "relative" : "absolute",
                        margin: "auto",
                        top: "auto",
                        left: "auto",
                        bottom: "auto",
                        right: "auto"
                    }), (R.relSize.width || R.relSize.autoFullWidth) && r.css(k, {
                        boxSizing: "border-box",
                        mozBoxSizing: "border-box",
                        webkitBoxSizing: "border-box"
                    }), window.addEventListener("scroll", A), window.addEventListener("resize", A), window.addEventListener("resize", F), k.addEventListener("mousewheel", M), k.addEventListener("DOMMouseScroll", M), O(), u
                }, this.removePin = function(t) {
                    if (k) {
                        if (p === l && O(!0), t || !o) {
                            var i = R.spacer.firstChild;
                            if (i.hasAttribute(e)) {
                                var n = R.spacer.style,
                                    s = ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
                                margins = {}, s.forEach(function(t) {
                                    margins[t] = n[t] || ""
                                }), r.css(i, margins)
                            }
                            R.spacer.parentNode.insertBefore(i, R.spacer), R.spacer.parentNode.removeChild(R.spacer), k.parentNode.hasAttribute(e) || (r.css(k, k.___origStyle), delete k.___origStyle)
                        }
                        window.removeEventListener("scroll", A), window.removeEventListener("resize", A), window.removeEventListener("resize", F), k.removeEventListener("mousewheel", M), k.removeEventListener("DOMMouseScroll", M), k = void 0
                    }
                    return u
                };
                var D,
                    $ = [];
                return u.on("destroy.internal", function(t) {
                    u.removeClassToggle(t.reset)
                }), this.setClassToggle = function(t, e) {
                    var i = r.get.elements(t);
                    return 0 !== i.length && r.type.String(e) ? ($.length > 0 && u.removeClassToggle(), D = e, $ = i, u.on("enter.internal_class leave.internal_class", function(t) {
                        var e = "enter" === t.type ? r.addClass : r.removeClass;
                        $.forEach(function(t) {
                            e(t, D)
                        })
                    }), u) : u
                }, this.removeClassToggle = function(t) {
                    return t && $.forEach(function(t) {
                        r.removeClass(t, D)
                    }), u.off("start.internal_class end.internal_class"), D = void 0, $ = [], u
                }, function() {
                    for (var t in f)
                        h.hasOwnProperty(t) || delete f[t];
                    for (var e in h)
                        C(e);
                    S()
                }(), u
            };
            var n = {
                defaults: {
                    duration: 0,
                    offset: 0,
                    triggerElement: void 0,
                    triggerHook: .5,
                    reverse: !0,
                    loglevel: 2
                },
                validate: {
                    offset: function(t) {
                        if (t = parseFloat(t), !r.type.Number(t))
                            throw 0;
                        return t
                    },
                    triggerElement: function(t) {
                        if (t = t || void 0) {
                            var e = r.get.elements(t)[0];
                            if (!e)
                                throw 0;
                            t = e
                        }
                        return t
                    },
                    triggerHook: function(t) {
                        var e = {
                            onCenter: .5,
                            onEnter: 1,
                            onLeave: 0
                        };
                        if (r.type.Number(t))
                            t = Math.max(0, Math.min(parseFloat(t), 1));
                        else {
                            if (!(t in e))
                                throw 0;
                            t = e[t]
                        }
                        return t
                    },
                    reverse: function(t) {
                        return !!t
                    }
                },
                shifts: ["duration", "offset", "triggerHook"]
            };
            t.Scene.addOption = function(t, e, i, r) {
                t in n.defaults || (n.defaults[t] = e, n.validate[t] = i, r && n.shifts.push(t))
            }, t.Scene.extend = function(e) {
                var i = this;
                t.Scene = function() {
                    return i.apply(this, arguments), this.$super = r.extend({}, this), e.apply(this, arguments) || this
                }, r.extend(t.Scene, i), t.Scene.prototype = i.prototype, t.Scene.prototype.constructor = t.Scene
            }, t.Event = function(t, e, i, n) {
                n = n || {};
                for (var r in n)
                    this[r] = n[r];
                return this.type = t, this.target = this.currentTarget = i, this.namespace = e || "", this.timeStamp = this.timestamp = Date.now(), this
            };
            var r = t._util = function(t) {
                var e,
                    i = {},
                    n = function(t) {
                        return parseFloat(t) || 0
                    },
                    r = function(e) {
                        return e.currentStyle ? e.currentStyle : t.getComputedStyle(e)
                    },
                    s = function(e, i, s, o) {
                        if ((i = i === document ? t : i) === t)
                            o = !1;
                        else if (!u.DomElement(i))
                            return 0;
                        e = e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
                        var a = (s ? i["offset" + e] || i["outer" + e] : i["client" + e] || i["inner" + e]) || 0;
                        if (s && o) {
                            var l = r(i);
                            a += "Height" === e ? n(l.marginTop) + n(l.marginBottom) : n(l.marginLeft) + n(l.marginRight)
                        }
                        return a
                    },
                    o = function(t) {
                        return t.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, function(t) {
                            return t[1].toUpperCase()
                        })
                    };
                i.extend = function(t) {
                    for (t = t || {}, e = 1; e < arguments.length; e++)
                        if (arguments[e])
                            for (var i in arguments[e])
                                arguments[e].hasOwnProperty(i) && (t[i] = arguments[e][i]);
                    return t
                }, i.isMarginCollapseType = function(t) {
                    return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(t) > -1
                };
                var a = 0,
                    l = ["ms", "moz", "webkit", "o"],
                    c = t.requestAnimationFrame,
                    h = t.cancelAnimationFrame;
                for (e = 0; !c && e < l.length; ++e)
                    c = t[l[e] + "RequestAnimationFrame"], h = t[l[e] + "CancelAnimationFrame"] || t[l[e] + "CancelRequestAnimationFrame"];
                c || (c = function(e) {
                    var i = (new Date).getTime(),
                        n = Math.max(0, 16 - (i - a)),
                        r = t.setTimeout(function() {
                            e(i + n)
                        }, n);
                    return a = i + n, r
                }), h || (h = function(e) {
                    t.clearTimeout(e)
                }), i.rAF = c.bind(t), i.cAF = h.bind(t);
                var u = i.type = function(t) {
                    return Object.prototype.toString.call(t).replace(/^\[object (.+)\]$/, "$1").toLowerCase()
                };
                u.String = function(t) {
                    return "string" === u(t)
                }, u.Function = function(t) {
                    return "function" === u(t)
                }, u.Array = function(t) {
                    return Array.isArray(t)
                }, u.Number = function(t) {
                    return !u.Array(t) && t - parseFloat(t) + 1 >= 0
                }, u.DomElement = function(t) {
                    return "object" == typeof HTMLElement ? t instanceof HTMLElement : t && "object" == typeof t && null !== t && 1 === t.nodeType && "string" == typeof t.nodeName
                };
                var f = i.get = {};
                return f.elements = function(e) {
                    var i = [];
                    if (u.String(e))
                        try {
                            e = document.querySelectorAll(e)
                        } catch (t) {
                            return i
                        }
                    if ("nodelist" === u(e) || u.Array(e))
                        for (var n = 0, r = i.length = e.length; r > n; n++) {
                            var s = e[n];
                            i[n] = u.DomElement(s) ? s : f.elements(s)
                        }
                    else
                        (u.DomElement(e) || e === document || e === t) && (i = [e]);
                    return i
                }, f.scrollTop = function(e) {
                    return e && "number" == typeof e.scrollTop ? e.scrollTop : t.pageYOffset || 0
                }, f.scrollLeft = function(e) {
                    return e && "number" == typeof e.scrollLeft ? e.scrollLeft : t.pageXOffset || 0
                }, f.width = function(t, e, i) {
                    return s("width", t, e, i)
                }, f.height = function(t, e, i) {
                    return s("height", t, e, i)
                }, f.offset = function(t, e) {
                    var i = {
                        top: 0,
                        left: 0
                    };
                    if (t && t.getBoundingClientRect) {
                        var n = t.getBoundingClientRect();
                        i.top = n.top, i.left = n.left, e || (i.top += f.scrollTop(), i.left += f.scrollLeft())
                    }
                    return i
                }, i.addClass = function(t, e) {
                    e && (t.classList ? t.classList.add(e) : t.className += " " + e)
                }, i.removeClass = function(t, e) {
                    e && (t.classList ? t.classList.remove(e) : t.className = t.className.replace(RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " "))
                }, i.css = function(t, e) {
                    if (u.String(e))
                        return r(t)[o(e)];
                    if (u.Array(e)) {
                        var i = {},
                            n = r(t);
                        return e.forEach(function(t) {
                            i[t] = n[o(t)]
                        }), i
                    }
                    for (var s in e) {
                        var a = e[s];
                        a == parseFloat(a) && (a += "px"), t.style[o(s)] = a
                    }
                }, i
            }(window || {});
            return t
        })
    }).call(window)
}, function(t, e, i) {
    var n = !1;
    (function() {
        !function(t, e) {
            "function" == typeof n && n.amd ? n(["ScrollMagic", "TweenMax", "TimelineMax"], e) : (i(1), e(i(2), TweenMax, TimelineMax))
        }(0, function(t, e, i) {
            "use strict";
            t.Scene.addOption("tweenChanges", !1, function(t) {
                return !!t
            }), t.Scene.extend(function() {
                var t,
                    n = this;
                n.on("progress.plugin_gsap", function() {
                    r()
                }), n.on("destroy.plugin_gsap", function(t) {
                    n.removeTween(t.reset)
                });
                var r = function() {
                    if (t) {
                        var e = n.progress(),
                            i = n.state();
                        t.repeat && -1 === t.repeat() ? "DURING" === i && t.paused() ? t.play() : "DURING" === i || t.paused() || t.pause() : e != t.progress() && (0 === n.duration() ? e > 0 ? t.play() : t.reverse() : n.tweenChanges() && t.tweenTo ? t.tweenTo(e * t.duration()) : t.progress(e).pause())
                    }
                };
                n.setTween = function(s, o, a) {
                    var l;
                    arguments.length > 1 && (arguments.length < 3 && (a = o, o = 1), s = e.to(s, o, a));
                    try {
                        l = i ? new i({
                            smoothChildTiming: !0
                        }).add(s) : s, l.pause()
                    } catch (t) {
                        return n
                    }
                    return t && n.removeTween(), t = l, s.repeat && -1 === s.repeat() && (t.repeat(-1), t.yoyo(s.yoyo())), r(), n
                }, n.removeTween = function(e) {
                    return t && (e && t.progress(0).pause(), t.kill(), t = void 0), n
                }
            })
        })
    }).call(window)
}, function(t, e) {
    !function(t, e, i, n) {
        "use strict";
        function r(t) {
            var e = t.currentTarget,
                n = t.data ? t.data.options : {},
                r = n.selector ? i(n.selector) : t.data ? t.data.items : [],
                s = i(e).attr("data-fancybox") || "",
                o = 0,
                a = i.fancybox.getInstance();
            t.preventDefault(), t.stopPropagation(), a && a.current.opts.$orig.is(e) || (s ? (r = r.length ? r.filter('[data-fancybox="' + s + '"]') : i('[data-fancybox="' + s + '"]'), (o = r.index(e)) < 0 && (o = 0)) : r = [e], i.fancybox.open(r, n, o))
        }
        if (i) {
            if (i.fn.fancybox)
                return void i.error("fancyBox already initialized");
            var s = {
                    loop: !1,
                    margin: [44, 0],
                    gutter: 50,
                    keyboard: !0,
                    arrows: !0,
                    infobar: !1,
                    toolbar: !0,
                    buttons: ["slideShow", "fullScreen", "thumbs", "close"],
                    idleTime: 4,
                    smallBtn: "auto",
                    protect: !1,
                    modal: !1,
                    image: {
                        preload: "auto"
                    },
                    ajax: {
                        settings: {
                            data: {
                                fancybox: !0
                            }
                        }
                    },
                    iframe: {
                        tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',
                        preload: !0,
                        css: {},
                        attr: {
                            scrolling: "auto"
                        }
                    },
                    animationEffect: "zoom",
                    animationDuration: 366,
                    zoomOpacity: "auto",
                    transitionEffect: "fade",
                    transitionDuration: 366,
                    slideClass: "",
                    baseClass: "",
                    baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><button data-fancybox-prev title="{{PREV}}" class="fancybox-button fancybox-button--left"></button><div class="fancybox-infobar__body"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><button data-fancybox-next title="{{NEXT}}" class="fancybox-button fancybox-button--right"></button></div><div class="fancybox-toolbar">{{BUTTONS}}</div><div class="fancybox-navigation"><button data-fancybox-prev title="{{PREV}}" class="fancybox-arrow fancybox-arrow--left" /><button data-fancybox-next title="{{NEXT}}" class="fancybox-arrow fancybox-arrow--right" /></div><div class="fancybox-stage"></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div></div></div>',
                    spinnerTpl: '<div class="fancybox-loading"></div>',
                    errorTpl: '<div class="fancybox-error"><p>{{ERROR}}<p></div>',
                    btnTpl: {
                        slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"></button>',
                        fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"></button>',
                        thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"></button>',
                        close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"></button>',
                        smallBtn: '<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"></button>'
                    },
                    parentEl: "body",
                    autoFocus: !0,
                    backFocus: !0,
                    trapFocus: !0,
                    fullScreen: {
                        autoStart: !1
                    },
                    touch: {
                        vertical: !0,
                        momentum: !0
                    },
                    hash: null,
                    media: {},
                    slideShow: {
                        autoStart: !1,
                        speed: 4e3
                    },
                    thumbs: {
                        autoStart: !1,
                        hideOnClose: !0
                    },
                    onInit: i.noop,
                    beforeLoad: i.noop,
                    afterLoad: i.noop,
                    beforeShow: i.noop,
                    afterShow: i.noop,
                    beforeClose: i.noop,
                    afterClose: i.noop,
                    onActivate: i.noop,
                    onDeactivate: i.noop,
                    clickContent: function(t, e) {
                        return "image" === t.type && "zoom"
                    },
                    clickSlide: "close",
                    clickOutside: "close",
                    dblclickContent: !1,
                    dblclickSlide: !1,
                    dblclickOutside: !1,
                    mobile: {
                        clickContent: function(t, e) {
                            return "image" === t.type && "toggleControls"
                        },
                        clickSlide: function(t, e) {
                            return "image" === t.type ? "toggleControls" : "close"
                        },
                        dblclickContent: function(t, e) {
                            return "image" === t.type && "zoom"
                        },
                        dblclickSlide: function(t, e) {
                            return "image" === t.type && "zoom"
                        }
                    },
                    lang: "en",
                    i18n: {
                        en: {
                            CLOSE: "Close",
                            NEXT: "Next",
                            PREV: "Previous",
                            ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                            PLAY_START: "Start slideshow",
                            PLAY_STOP: "Pause slideshow",
                            FULL_SCREEN: "Full screen",
                            THUMBS: "Thumbnails"
                        },
                        de: {
                            CLOSE: "Schliessen",
                            NEXT: "Weiter",
                            PREV: "Zurück",
                            ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.",
                            PLAY_START: "Diaschau starten",
                            PLAY_STOP: "Diaschau beenden",
                            FULL_SCREEN: "Vollbild",
                            THUMBS: "Vorschaubilder"
                        }
                    }
                },
                o = i(t),
                a = i(e),
                l = 0,
                c = function(t) {
                    return t && t.hasOwnProperty && t instanceof i
                },
                h = function() {
                    return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function(e) {
                            return t.setTimeout(e, 1e3 / 60)
                        }
                }(),
                u = function() {
                    var t,
                        i = e.createElement("fakeelement"),
                        n = {
                            transition: "transitionend",
                            OTransition: "oTransitionEnd",
                            MozTransition: "transitionend",
                            WebkitTransition: "webkitTransitionEnd"
                        };
                    for (t in n)
                        if (void 0 !== i.style[t])
                            return n[t]
                }(),
                f = function(t) {
                    return t && t.length && t[0].offsetHeight
                },
                p = function(t, n, r) {
                    var o = this;
                    o.opts = i.extend(!0, {
                        index: r
                    }, s, n || {}), n && i.isArray(n.buttons) && (o.opts.buttons = n.buttons), o.id = o.opts.id || ++l, o.group = [], o.currIndex = parseInt(o.opts.index, 10) || 0, o.prevIndex = null, o.prevPos = null, o.currPos = 0, o.firstRun = null, o.createGroup(t), o.group.length && (o.$lastFocus = i(e.activeElement).blur(), o.slides = {}, o.init(t))
                };
            i.extend(p.prototype, {
                init: function() {
                    var t,
                        e,
                        n,
                        r = this,
                        s = r.group[r.currIndex].opts;
                    r.scrollTop = a.scrollTop(), r.scrollLeft = a.scrollLeft(), i.fancybox.getInstance() || i.fancybox.isMobile || "hidden" === i("body").css("overflow") || (t = i("body").width(), i("html").addClass("fancybox-enabled"), (t = i("body").width() - t) > 1 && i("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar, .fancybox-enabled body { margin-right: ' + t + "px; }</style>")), n = "", i.each(s.buttons, function(t, e) {
                        n += s.btnTpl[e] || ""
                    }), e = i(r.translate(r, s.baseTpl.replace("{{BUTTONS}}", n))).addClass("fancybox-is-hidden").attr("id", "fancybox-container-" + r.id).addClass(s.baseClass).data("FancyBox", r).prependTo(s.parentEl), r.$refs = {
                        container: e
                    }, ["bg", "inner", "infobar", "toolbar", "stage", "caption"].forEach(function(t) {
                        r.$refs[t] = e.find(".fancybox-" + t)
                    }), (!s.arrows || r.group.length < 2) && e.find(".fancybox-navigation").remove(), s.infobar || r.$refs.infobar.remove(), s.toolbar || r.$refs.toolbar.remove(), r.trigger("onInit"), r.activate(), r.jumpTo(r.currIndex)
                },
                translate: function(t, e) {
                    var i = t.opts.i18n[t.opts.lang];
                    return e.replace(/\{\{(\w+)\}\}/g, function(t, e) {
                        var n = i[e];
                        return void 0 === n ? t : n
                    })
                },
                createGroup: function(t) {
                    var e = this,
                        n = i.makeArray(t);
                    i.each(n, function(t, n) {
                        var r,
                            s,
                            o,
                            a,
                            l = {},
                            c = {},
                            h = [];
                        i.isPlainObject(n) ? (l = n, c = n.opts || n) : "object" === i.type(n) && i(n).length ? (r = i(n), h = r.data(), c = "options" in h ? h.options : {}, c = "object" === i.type(c) ? c : {}, l.src = "src" in h ? h.src : c.src || r.attr("href"), ["width", "height", "thumb", "type", "filter"].forEach(function(t) {
                            t in h && (c[t] = h[t])
                        }), "srcset" in h && (c.image = {
                            srcset: h.srcset
                        }), c.$orig = r, l.type || l.src || (l.type = "inline", l.src = n)) : l = {
                            type: "html",
                            src: n + ""
                        }, l.opts = i.extend(!0, {}, e.opts, c), i.fancybox.isMobile && (l.opts = i.extend(!0, {}, l.opts, l.opts.mobile)), s = l.type || l.opts.type, o = l.src || "", !s && o && (o.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? s = "image" : o.match(/\.(pdf)((\?|#).*)?$/i) ? s = "pdf" : "#" === o.charAt(0) && (s = "inline")), l.type = s, l.index = e.group.length, l.opts.$orig && !l.opts.$orig.length && delete l.opts.$orig, !l.opts.$thumb && l.opts.$orig && (l.opts.$thumb = l.opts.$orig.find("img:first")), l.opts.$thumb && !l.opts.$thumb.length && delete l.opts.$thumb, "function" === i.type(l.opts.caption) ? l.opts.caption = l.opts.caption.apply(n, [e, l]) : "caption" in h && (l.opts.caption = h.caption), l.opts.caption = void 0 === l.opts.caption ? "" : l.opts.caption + "", "ajax" === s && (a = o.split(/\s+/, 2), a.length > 1 && (l.src = a.shift(), l.opts.filter = a.shift())), "auto" == l.opts.smallBtn && (i.inArray(s, ["html", "inline", "ajax"]) > -1 ? (l.opts.toolbar = !1, l.opts.smallBtn = !0) : l.opts.smallBtn = !1), "pdf" === s && (l.type = "iframe", l.opts.iframe.preload = !1), l.opts.modal && (l.opts = i.extend(!0, l.opts, {
                            infobar: 0,
                            toolbar: 0,
                            smallBtn: 0,
                            keyboard: 0,
                            slideShow: 0,
                            fullScreen: 0,
                            thumbs: 0,
                            touch: 0,
                            clickContent: !1,
                            clickSlide: !1,
                            clickOutside: !1,
                            dblclickContent: !1,
                            dblclickSlide: !1,
                            dblclickOutside: !1
                        })), e.group.push(l)
                    })
                },
                addEvents: function() {
                    var n = this;
                    n.removeEvents(), n.$refs.container.on("click.fb-close", "[data-fancybox-close]", function(t) {
                        t.stopPropagation(), t.preventDefault(), n.close(t)
                    }).on("click.fb-prev touchend.fb-prev", "[data-fancybox-prev]", function(t) {
                        t.stopPropagation(), t.preventDefault(), n.previous()
                    }).on("click.fb-next touchend.fb-next", "[data-fancybox-next]", function(t) {
                        t.stopPropagation(), t.preventDefault(), n.next()
                    }), o.on("orientationchange.fb resize.fb", function(t) {
                        t && t.originalEvent && "resize" === t.originalEvent.type ? h(function() {
                            n.update()
                        }) : (n.$refs.stage.hide(), setTimeout(function() {
                            n.$refs.stage.show(), n.update()
                        }, 500))
                    }), a.on("focusin.fb", function(t) {
                        var r = i.fancybox ? i.fancybox.getInstance() : null;
                        r.isClosing || !r.current || !r.current.opts.trapFocus || i(t.target).hasClass("fancybox-container") || i(t.target).is(e) || r && "fixed" !== i(t.target).css("position") && !r.$refs.container.has(t.target).length && (t.stopPropagation(), r.focus(), o.scrollTop(n.scrollTop).scrollLeft(n.scrollLeft))
                    }), a.on("keydown.fb", function(t) {
                        var e = n.current,
                            r = t.keyCode || t.which;
                        if (e && e.opts.keyboard && !i(t.target).is("input") && !i(t.target).is("textarea"))
                            return 8 === r || 27 === r ? (t.preventDefault(), void n.close(t)) : 37 === r || 38 === r ? (t.preventDefault(), void n.previous()) : 39 === r || 40 === r ? (t.preventDefault(), void n.next()) : void n.trigger("afterKeydown", t, r)
                    }), n.group[n.currIndex].opts.idleTime && (n.idleSecondsCounter = 0, a.on("mousemove.fb-idle mouseenter.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function() {
                        n.idleSecondsCounter = 0, n.isIdle && n.showControls(), n.isIdle = !1
                    }), n.idleInterval = t.setInterval(function() {
                        ++n.idleSecondsCounter >= n.group[n.currIndex].opts.idleTime && (n.isIdle = !0, n.idleSecondsCounter = 0, n.hideControls())
                    }, 1e3))
                },
                removeEvents: function() {
                    var e = this;
                    o.off("orientationchange.fb resize.fb"), a.off("focusin.fb keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), e.idleInterval && (t.clearInterval(e.idleInterval), e.idleInterval = null)
                },
                previous: function(t) {
                    return this.jumpTo(this.currPos - 1, t)
                },
                next: function(t) {
                    return this.jumpTo(this.currPos + 1, t)
                },
                jumpTo: function(t, e, n) {
                    var r,
                        s,
                        o,
                        a,
                        l,
                        c,
                        h,
                        u = this,
                        p = u.group.length;
                    if (!(u.isSliding || u.isClosing || u.isAnimating && u.firstRun)) {
                        if (t = parseInt(t, 10), !(s = u.current ? u.current.opts.loop : u.opts.loop) && (t < 0 || t >= p))
                            return !1;
                        if (r = u.firstRun = null === u.firstRun, !(p < 2 && !r && u.isSliding)) {
                            if (a = u.current, u.prevIndex = u.currIndex, u.prevPos = u.currPos, o = u.createSlide(t), p > 1 && ((s || o.index > 0) && u.createSlide(t - 1), (s || o.index < p - 1) && u.createSlide(t + 1)), u.current = o, u.currIndex = o.index, u.currPos = o.pos, u.trigger("beforeShow", r), u.updateControls(), c = i.fancybox.getTranslate(o.$slide), o.isMoved = (0 !== c.left || 0 !== c.top) && !o.$slide.hasClass("fancybox-animated"), o.forcedDuration = void 0, i.isNumeric(e) ? o.forcedDuration = e : e = o.opts[r ? "animationDuration" : "transitionDuration"], e = parseInt(e, 10), r)
                                return o.opts.animationEffect && e && u.$refs.container.css("transition-duration", e + "ms"), u.$refs.container.removeClass("fancybox-is-hidden"), f(u.$refs.container), u.$refs.container.addClass("fancybox-is-open"), o.$slide.addClass("fancybox-slide--current"), u.loadSlide(o), void u.preload();
                            i.each(u.slides, function(t, e) {
                                i.fancybox.stop(e.$slide)
                            }), o.$slide.removeClass("fancybox-slide--next fancybox-slide--previous").addClass("fancybox-slide--current"), o.isMoved ? (l = Math.round(o.$slide.width()), i.each(u.slides, function(t, n) {
                                var r = n.pos - o.pos;
                                i.fancybox.animate(n.$slide, {
                                    top: 0,
                                    left: r * l + r * n.opts.gutter
                                }, e, function() {
                                    n.$slide.removeAttr("style").removeClass("fancybox-slide--next fancybox-slide--previous"), n.pos === u.currPos && (o.isMoved = !1, u.complete())
                                })
                            })) : u.$refs.stage.children().removeAttr("style"), o.isLoaded ? u.revealContent(o) : u.loadSlide(o), u.preload(), a.pos !== o.pos && (h = "fancybox-slide--" + (a.pos > o.pos ? "next" : "previous"), a.$slide.removeClass("fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"), a.isComplete = !1, e && (o.isMoved || o.opts.transitionEffect) && (o.isMoved ? a.$slide.addClass(h) : (h = "fancybox-animated " + h + " fancybox-fx-" + o.opts.transitionEffect, i.fancybox.animate(a.$slide, h, e, function() {
                                a.$slide.removeClass(h).removeAttr("style")
                            }))))
                        }
                    }
                },
                createSlide: function(t) {
                    var e,
                        n,
                        r = this;
                    return n = t % r.group.length, n = n < 0 ? r.group.length + n : n, !r.slides[t] && r.group[n] && (e = i('<div class="fancybox-slide"></div>').appendTo(r.$refs.stage), r.slides[t] = i.extend(!0, {}, r.group[n], {
                        pos: t,
                        $slide: e,
                        isLoaded: !1
                    }), r.updateSlide(r.slides[t])), r.slides[t]
                },
                scaleToActual: function(t, e, n) {
                    var r,
                        s,
                        o,
                        a,
                        l,
                        c = this,
                        h = c.current,
                        u = h.$content,
                        f = parseInt(h.$slide.width(), 10),
                        p = parseInt(h.$slide.height(), 10),
                        d = h.width,
                        g = h.height;
                    "image" != h.type || h.hasError || !u || c.isAnimating || (i.fancybox.stop(u), c.isAnimating = !0, t = void 0 === t ? .5 * f : t, e = void 0 === e ? .5 * p : e, r = i.fancybox.getTranslate(u), a = d / r.width, l = g / r.height, s = .5 * f - .5 * d, o = .5 * p - .5 * g, d > f && (s = r.left * a - (t * a - t), s > 0 && (s = 0), s < f - d && (s = f - d)), g > p && (o = r.top * l - (e * l - e), o > 0 && (o = 0), o < p - g && (o = p - g)), c.updateCursor(d, g), i.fancybox.animate(u, {
                        top: o,
                        left: s,
                        scaleX: a,
                        scaleY: l
                    }, n || 330, function() {
                        c.isAnimating = !1
                    }), c.SlideShow && c.SlideShow.isActive && c.SlideShow.stop())
                },
                scaleToFit: function(t) {
                    var e,
                        n = this,
                        r = n.current,
                        s = r.$content;
                    "image" != r.type || r.hasError || !s || n.isAnimating || (i.fancybox.stop(s), n.isAnimating = !0, e = n.getFitPos(r), n.updateCursor(e.width, e.height), i.fancybox.animate(s, {
                        top: e.top,
                        left: e.left,
                        scaleX: e.width / s.width(),
                        scaleY: e.height / s.height()
                    }, t || 330, function() {
                        n.isAnimating = !1
                    }))
                },
                getFitPos: function(t) {
                    var e,
                        n,
                        r,
                        s,
                        a,
                        l = this,
                        c = t.$content,
                        h = t.width,
                        u = t.height,
                        f = t.opts.margin;
                    return !(!c || !c.length || !h && !u) && ("number" === i.type(f) && (f = [f, f]), 2 == f.length && (f = [f[0], f[1], f[0], f[1]]), o.width() < 800 && (f = [0, 0, 0, 0]), e = parseInt(l.$refs.stage.width(), 10) - (f[1] + f[3]), n = parseInt(l.$refs.stage.height(), 10) - (f[0] + f[2]), r = Math.min(1, e / h, n / u), s = Math.floor(r * h), a = Math.floor(r * u), {
                            top: Math.floor(.5 * (n - a)) + f[0],
                            left: Math.floor(.5 * (e - s)) + f[3],
                            width: s,
                            height: a
                        })
                },
                update: function() {
                    var t = this;
                    i.each(t.slides, function(e, i) {
                        t.updateSlide(i)
                    })
                },
                updateSlide: function(t) {
                    var e = this,
                        n = t.$content;
                    n && (t.width || t.height) && (i.fancybox.stop(n), i.fancybox.setTranslate(n, e.getFitPos(t)), t.pos === e.currPos && e.updateCursor()), t.$slide.trigger("refresh"), e.trigger("onUpdate", t)
                },
                updateCursor: function(t, e) {
                    var i,
                        n = this,
                        r = n.$refs.container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut");
                    n.current && !n.isClosing && (n.isZoomable() ? (r.addClass("fancybox-is-zoomable"), i = void 0 !== t && void 0 !== e ? t < n.current.width && e < n.current.height : n.isScaledDown(), i ? r.addClass("fancybox-can-zoomIn") : n.current.opts.touch ? r.addClass("fancybox-can-drag") : r.addClass("fancybox-can-zoomOut")) : n.current.opts.touch && r.addClass("fancybox-can-drag"))
                },
                isZoomable: function() {
                    var t,
                        e = this,
                        n = e.current;
                    if (n && !e.isClosing)
                        return !!("image" === n.type && n.isLoaded && !n.hasError && ("zoom" === n.opts.clickContent || i.isFunction(n.opts.clickContent) && "zoom" === n.opts.clickContent(n)) && (t = e.getFitPos(n), n.width > t.width || n.height > t.height))
                },
                isScaledDown: function() {
                    var t = this,
                        e = t.current,
                        n = e.$content,
                        r = !1;
                    return n && (r = i.fancybox.getTranslate(n), r = r.width < e.width || r.height < e.height), r
                },
                canPan: function() {
                    var t = this,
                        e = t.current,
                        i = e.$content,
                        n = !1;
                    return i && (n = t.getFitPos(e), n = Math.abs(i.width() - n.width) > 1 || Math.abs(i.height() - n.height) > 1), n
                },
                loadSlide: function(t) {
                    var e,
                        n,
                        r,
                        s = this;
                    if (!t.isLoading && !t.isLoaded) {
                        switch (t.isLoading = !0, s.trigger("beforeLoad", t), e = t.type, n = t.$slide, n.off("refresh").trigger("onReset").addClass("fancybox-slide--" + (e || "unknown")).addClass(t.opts.slideClass), e) {
                        case "image":
                            s.setImage(t);
                            break;
                        case "iframe":
                            s.setIframe(t);
                            break;
                        case "html":
                            s.setContent(t, t.src || t.content);
                            break;
                        case "inline":
                            i(t.src).length ? s.setContent(t, i(t.src)) : s.setError(t);
                            break;
                        case "ajax":
                            s.showLoading(t), r = i.ajax(i.extend({}, t.opts.ajax.settings, {
                                url: t.src,
                                success: function(e, i) {
                                    "success" === i && s.setContent(t, e)
                                },
                                error: function(e, i) {
                                    e && "abort" !== i && s.setError(t)
                                }
                            })), n.one("onReset", function() {
                                r.abort()
                            });
                            break;
                        default:
                            s.setError(t)
                        }
                        return !0
                    }
                },
                setImage: function(e) {
                    var n,
                        r,
                        s,
                        o,
                        a = this,
                        l = e.opts.image.srcset;
                    if (l) {
                        s = t.devicePixelRatio || 1, o = t.innerWidth * s, r = l.split(",").map(function(t) {
                            var e = {};
                            return t.trim().split(/\s+/).forEach(function(t, i) {
                                var n = parseInt(t.substring(0, t.length - 1), 10);
                                if (0 === i)
                                    return e.url = t;
                                n && (e.value = n, e.postfix = t[t.length - 1])
                            }), e
                        }), r.sort(function(t, e) {
                            return t.value - e.value
                        });
                        for (var c = 0; c < r.length; c++) {
                            var h = r[c];
                            if ("w" === h.postfix && h.value >= o || "x" === h.postfix && h.value >= s) {
                                n = h;
                                break
                            }
                        }
                        !n && r.length && (n = r[r.length - 1]), n && (e.src = n.url, e.width && e.height && "w" == n.postfix && (e.height = e.width / e.height * n.value, e.width = n.value))
                    }
                    e.$content = i('<div class="fancybox-image-wrap"></div>').addClass("fancybox-is-hidden").appendTo(e.$slide), !1 !== e.opts.preload && e.opts.width && e.opts.height && (e.opts.thumb || e.opts.$thumb) ? (e.width = e.opts.width, e.height = e.opts.height, e.$ghost = i("<img />").one("error", function() {
                        i(this).remove(), e.$ghost = null, a.setBigImage(e)
                    }).one("load", function() {
                        a.afterLoad(e), a.setBigImage(e)
                    }).addClass("fancybox-image").appendTo(e.$content).attr("src", e.opts.thumb || e.opts.$thumb.attr("src"))) : a.setBigImage(e)
                },
                setBigImage: function(t) {
                    var e = this,
                        n = i("<img />");
                    t.$image = n.one("error", function() {
                        e.setError(t)
                    }).one("load", function() {
                        clearTimeout(t.timouts), t.timouts = null, e.isClosing || (t.width = this.naturalWidth, t.height = this.naturalHeight, t.opts.image.srcset && n.attr("sizes", "100vw").attr("srcset", t.opts.image.srcset), e.hideLoading(t), t.$ghost ? t.timouts = setTimeout(function() {
                            t.timouts = null, t.$ghost.hide()
                        }, Math.min(300, Math.max(1e3, t.height / 1600))) : e.afterLoad(t))
                    }).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content), n[0].complete ? n.trigger("load") : n[0].error ? n.trigger("error") : t.timouts = setTimeout(function() {
                        n[0].complete || t.hasError || e.showLoading(t)
                    }, 100)
                },
                setIframe: function(t) {
                    var e,
                        n = this,
                        r = t.opts.iframe,
                        s = t.$slide;
                    t.$content = i('<div class="fancybox-content' + (r.preload ? " fancybox-is-hidden" : "") + '"></div>').css(r.css).appendTo(s), e = i(r.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(r.attr).appendTo(t.$content), r.preload ? (n.showLoading(t), e.on("load.fb error.fb", function(e) {
                        this.isReady = 1, t.$slide.trigger("refresh"), n.afterLoad(t)
                    }), s.on("refresh.fb", function() {
                        var i,
                            n,
                            s,
                            o,
                            a,
                            l = t.$content;
                        if (1 === e[0].isReady) {
                            try {
                                i = e.contents(), n = i.find("body")
                            } catch (t) {}
                            n && n.length && (void 0 === r.css.width || void 0 === r.css.height) && (s = e[0].contentWindow.document.documentElement.scrollWidth, o = Math.ceil(n.outerWidth(!0) + (l.width() - s)), a = Math.ceil(n.outerHeight(!0)), l.css({
                                width: void 0 === r.css.width ? o + (l.outerWidth() - l.innerWidth()) : r.css.width,
                                height: void 0 === r.css.height ? a + (l.outerHeight() - l.innerHeight()) : r.css.height
                            })), l.removeClass("fancybox-is-hidden")
                        }
                    })) : this.afterLoad(t), e.attr("src", t.src), !0 === t.opts.smallBtn && t.$content.prepend(n.translate(t, t.opts.btnTpl.smallBtn)), s.one("onReset", function() {
                        try {
                            i(this).find("iframe").hide().attr("src", "//about:blank")
                        } catch (t) {}
                        i(this).empty(), t.isLoaded = !1
                    })
                },
                setContent: function(t, e) {
                    var n = this;
                    n.isClosing || (n.hideLoading(t), t.$slide.empty(), c(e) && e.parent().length ? (e.parent(".fancybox-slide--inline").trigger("onReset"), t.$placeholder = i("<div></div>").hide().insertAfter(e), e.css("display", "inline-block")) : t.hasError || ("string" === i.type(e) && (e = i("<div>").append(i.trim(e)).contents(), 3 === e[0].nodeType && (e = i("<div>").html(e))), t.opts.filter && (e = i("<div>").html(e).find(t.opts.filter))), t.$slide.one("onReset", function() {
                        t.$placeholder && (t.$placeholder.after(e.hide()).remove(), t.$placeholder = null), t.$smallBtn && (t.$smallBtn.remove(), t.$smallBtn = null), t.hasError || (i(this).empty(), t.isLoaded = !1)
                    }), t.$content = i(e).appendTo(t.$slide), t.opts.smallBtn && !t.$smallBtn && (t.$smallBtn = i(n.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content.filter("div").first())), this.afterLoad(t))
                },
                setError: function(t) {
                    t.hasError = !0, t.$slide.removeClass("fancybox-slide--" + t.type), this.setContent(t, this.translate(t, t.opts.errorTpl))
                },
                showLoading: function(t) {
                    var e = this;
                    (t = t || e.current) && !t.$spinner && (t.$spinner = i(e.opts.spinnerTpl).appendTo(t.$slide))
                },
                hideLoading: function(t) {
                    var e = this;
                    (t = t || e.current) && t.$spinner && (t.$spinner.remove(), delete t.$spinner)
                },
                afterLoad: function(t) {
                    var e = this;
                    e.isClosing || (t.isLoading = !1, t.isLoaded = !0, e.trigger("afterLoad", t), e.hideLoading(t), t.opts.protect && t.$content && !t.hasError && (t.$content.on("contextmenu.fb", function(t) {
                        return 2 == t.button && t.preventDefault(), !0
                    }), "image" === t.type && i('<div class="fancybox-spaceball"></div>').appendTo(t.$content)), e.revealContent(t))
                },
                revealContent: function(t) {
                    var e,
                        n,
                        r,
                        s,
                        o,
                        a = this,
                        l = t.$slide,
                        c = !1;
                    return e = t.opts[a.firstRun ? "animationEffect" : "transitionEffect"], r = t.opts[a.firstRun ? "animationDuration" : "transitionDuration"], r = parseInt(void 0 === t.forcedDuration ? r : t.forcedDuration, 10), !t.isMoved && t.pos === a.currPos && r || (e = !1), "zoom" !== e || t.pos === a.currPos && r && "image" === t.type && !t.hasError && (c = a.getThumbPos(t)) || (e = "fade"), "zoom" === e ? (o = a.getFitPos(t), o.scaleX = o.width / c.width, o.scaleY = o.height / c.height, delete o.width, delete o.height, s = t.opts.zoomOpacity, "auto" == s && (s = Math.abs(t.width / t.height - c.width / c.height) > .1), s && (c.opacity = .1, o.opacity = 1), i.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), c), f(t.$content), void i.fancybox.animate(t.$content, o, r, function() {
                        a.complete()
                    })) : (a.updateSlide(t), e ? (i.fancybox.stop(l), n = "fancybox-animated fancybox-slide--" + (t.pos > a.prevPos ? "next" : "previous") + " fancybox-fx-" + e, l.removeAttr("style").removeClass("fancybox-slide--current fancybox-slide--next fancybox-slide--previous").addClass(n), t.$content.removeClass("fancybox-is-hidden"), f(l), void i.fancybox.animate(l, "fancybox-slide--current", r, function(e) {
                        l.removeClass(n).removeAttr("style"), t.pos === a.currPos && a.complete()
                    }, !0)) : (f(l), t.$content.removeClass("fancybox-is-hidden"), void (t.pos === a.currPos && a.complete())))
                },
                getThumbPos: function(n) {
                    var r,
                        s = this,
                        o = !1,
                        a = n.opts.$thumb,
                        l = a ? a.offset() : 0;
                    return l && a[0].ownerDocument === e && function(e) {
                        for (var n = e[0], r = n.getBoundingClientRect(), s = []; null !== n.parentElement;)
                            "hidden" !== i(n.parentElement).css("overflow") && "auto" !== i(n.parentElement).css("overflow") || s.push(n.parentElement.getBoundingClientRect()), n = n.parentElement;
                        return s.every(function(t) {
                                var e = Math.min(r.right, t.right) - Math.max(r.left, t.left),
                                    i = Math.min(r.bottom, t.bottom) - Math.max(r.top, t.top);
                                return e > 0 && i > 0
                            }) && r.bottom > 0 && r.right > 0 && r.left < i(t).width() && r.top < i(t).height()
                    }(a) && (r = s.$refs.stage.offset(), o = {
                        top: l.top - r.top + parseFloat(a.css("border-top-width") || 0),
                        left: l.left - r.left + parseFloat(a.css("border-left-width") || 0),
                        width: a.width(),
                        height: a.height(),
                        scaleX: 1,
                        scaleY: 1
                    }), o
                },
                complete: function() {
                    var t = this,
                        n = t.current,
                        r = {};
                    n.isMoved || !n.isLoaded || n.isComplete || (n.isComplete = !0, n.$slide.siblings().trigger("onReset"), f(n.$slide), n.$slide.addClass("fancybox-slide--complete"), i.each(t.slides, function(e, n) {
                        n.pos >= t.currPos - 1 && n.pos <= t.currPos + 1 ? r[n.pos] = n : n && (i.fancybox.stop(n.$slide), n.$slide.unbind().remove())
                    }), t.slides = r, t.updateCursor(), t.trigger("afterShow"), (i(e.activeElement).is("[disabled]") || n.opts.autoFocus && "image" != n.type && "iframe" !== n.type) && t.focus())
                },
                preload: function() {
                    var t,
                        e,
                        i = this;
                    i.group.length < 2 || (t = i.slides[i.currPos + 1], e = i.slides[i.currPos - 1], t && "image" === t.type && i.loadSlide(t), e && "image" === e.type && i.loadSlide(e))
                },
                focus: function() {
                    var t,
                        e = this.current;
                    this.isClosing || (t = e && e.isComplete ? e.$slide.find("button,:input,[tabindex],a").filter(":not([disabled]):visible:first") : null, t = t && t.length ? t : this.$refs.container, t.focus())
                },
                activate: function() {
                    var t = this;
                    i(".fancybox-container").each(function() {
                        var e = i(this).data("FancyBox");
                        e && e.uid !== t.uid && !e.isClosing && e.trigger("onDeactivate")
                    }), t.current && (t.$refs.container.index() > 0 && t.$refs.container.prependTo(e.body), t.updateControls()), t.trigger("onActivate"), t.addEvents()
                },
                close: function(t, e) {
                    var n,
                        r,
                        s,
                        o,
                        a,
                        l,
                        c = this,
                        f = c.current,
                        p = function() {
                            c.cleanUp(t)
                        };
                    return !c.isClosing && (c.isClosing = !0, !1 === c.trigger("beforeClose", t) ? (c.isClosing = !1, h(function() {
                            c.update()
                        }), !1) : (c.removeEvents(), f.timouts && clearTimeout(f.timouts), s = f.$content, n = f.opts.animationEffect, r = i.isNumeric(e) ? e : n ? f.opts.animationDuration : 0, f.$slide.off(u).removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), f.$slide.siblings().trigger("onReset").remove(), r && c.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing"), c.hideLoading(f), c.hideControls(), c.updateCursor(), "zoom" !== n || !0 !== t && s && r && "image" === f.type && !f.hasError && (l = c.getThumbPos(f)) || (n = "fade"), "zoom" === n ? (i.fancybox.stop(s), a = i.fancybox.getTranslate(s), a.width = a.width * a.scaleX, a.height = a.height * a.scaleY, o = f.opts.zoomOpacity, "auto" == o && (o = Math.abs(f.width / f.height - l.width / l.height) > .1), o && (l.opacity = 0), a.scaleX = a.width / l.width, a.scaleY = a.height / l.height, a.width = l.width, a.height = l.height, i.fancybox.setTranslate(f.$content, a), i.fancybox.animate(f.$content, l, r, p), !0) : (n && r ? !0 === t ? setTimeout(p, r) : i.fancybox.animate(f.$slide.removeClass("fancybox-slide--current"), "fancybox-animated fancybox-slide--previous fancybox-fx-" + n, r, p) : p(), !0)))
                },
                cleanUp: function(t) {
                    var e,
                        n = this;
                    n.current.$slide.trigger("onReset"), n.$refs.container.empty().remove(), n.trigger("afterClose", t), n.$lastFocus && n.current.opts.backFocus && n.$lastFocus.focus(), n.current = null, e = i.fancybox.getInstance(), e ? e.activate() : (o.scrollTop(n.scrollTop).scrollLeft(n.scrollLeft), i("html").removeClass("fancybox-enabled"), i("#fancybox-style-noscroll").remove())
                },
                trigger: function(t, e) {
                    var n,
                        r = Array.prototype.slice.call(arguments, 1),
                        s = this,
                        o = e && e.opts ? e : s.current;
                    if (o ? r.unshift(o) : o = s, r.unshift(s), i.isFunction(o.opts[t]) && (n = o.opts[t].apply(o, r)), !1 === n)
                        return n;
                    "afterClose" === t ? a.trigger(t + ".fb", r) : s.$refs.container.trigger(t + ".fb", r)
                },
                updateControls: function(t) {
                    var e = this,
                        n = e.current,
                        r = n.index,
                        s = n.opts,
                        o = s.caption,
                        a = e.$refs.caption;
                    n.$slide.trigger("refresh"), e.$caption = o && o.length ? a.html(o) : null, e.isHiddenControls || e.showControls(), i("[data-fancybox-count]").html(e.group.length), i("[data-fancybox-index]").html(r + 1), i("[data-fancybox-prev]").prop("disabled", !s.loop && r <= 0), i("[data-fancybox-next]").prop("disabled", !s.loop && r >= e.group.length - 1)
                },
                hideControls: function() {
                    this.isHiddenControls = !0, this.$refs.container.removeClass("fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav")
                },
                showControls: function() {
                    var t = this,
                        e = t.current ? t.current.opts : t.opts,
                        i = t.$refs.container;
                    t.isHiddenControls = !1, t.idleSecondsCounter = 0, i.toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons)).toggleClass("fancybox-show-infobar", !!(e.infobar && t.group.length > 1)).toggleClass("fancybox-show-nav", !!(e.arrows && t.group.length > 1)).toggleClass("fancybox-is-modal", !!e.modal), t.$caption ? i.addClass("fancybox-show-caption ") : i.removeClass("fancybox-show-caption")
                },
                toggleControls: function() {
                    this.isHiddenControls ? this.showControls() : this.hideControls()
                }
            }), i.fancybox = {
                version: "3.1.25",
                defaults: s,
                getInstance: function(t) {
                    var e = i('.fancybox-container:not(".fancybox-is-closing"):first').data("FancyBox"),
                        n = Array.prototype.slice.call(arguments, 1);
                    return e instanceof p && ("string" === i.type(t) ? e[t].apply(e, n) : "function" === i.type(t) && t.apply(e, n), e)
                },
                open: function(t, e, i) {
                    return new p(t, e, i)
                },
                close: function(t) {
                    var e = this.getInstance();
                    e && (e.close(), !0 === t && this.close())
                },
                destroy: function() {
                    this.close(!0), a.off("click.fb-start")
                },
                isMobile: void 0 !== e.createTouch && /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),
                use3d: function() {
                    var i = e.createElement("div");
                    return t.getComputedStyle && t.getComputedStyle(i).getPropertyValue("transform") && !(e.documentMode && e.documentMode < 11)
                }(),
                getTranslate: function(t) {
                    var e;
                    if (!t || !t.length)
                        return !1;
                    if (e = t.eq(0).css("transform"), e && -1 !== e.indexOf("matrix") ? (e = e.split("(")[1], e = e.split(")")[0], e = e.split(",")) : e = [], e.length)
                        e = e.length > 10 ? [e[13], e[12], e[0], e[5]] : [e[5], e[4], e[0], e[3]], e = e.map(parseFloat);
                    else {
                        e = [0, 0, 1, 1];
                        var i = /\.*translate\((.*)px,(.*)px\)/i,
                            n = i.exec(t.eq(0).attr("style"));
                        n && (e[0] = parseFloat(n[2]), e[1] = parseFloat(n[1]))
                    }
                    return {
                        top: e[0],
                        left: e[1],
                        scaleX: e[2],
                        scaleY: e[3],
                        opacity: parseFloat(t.css("opacity")),
                        width: t.width(),
                        height: t.height()
                    }
                },
                setTranslate: function(t, e) {
                    var i = "",
                        n = {};
                    if (t && e)
                        return void 0 === e.left && void 0 === e.top || (i = (void 0 === e.left ? t.position().left : e.left) + "px, " + (void 0 === e.top ? t.position().top : e.top) + "px", i = this.use3d ? "translate3d(" + i + ", 0px)" : "translate(" + i + ")"), void 0 !== e.scaleX && void 0 !== e.scaleY && (i = (i.length ? i + " " : "") + "scale(" + e.scaleX + ", " + e.scaleY + ")"), i.length && (n.transform = i), void 0 !== e.opacity && (n.opacity = e.opacity), void 0 !== e.width && (n.width = e.width), void 0 !== e.height && (n.height = e.height), t.css(n)
                },
                animate: function(t, e, n, r, s) {
                    var o = u || "transitionend";
                    i.isFunction(n) && (r = n, n = null), i.isPlainObject(e) || t.removeAttr("style"), t.on(o, function(n) {
                        (!n || !n.originalEvent || t.is(n.originalEvent.target) && "z-index" != n.originalEvent.propertyName) && (t.off(o), i.isPlainObject(e) ? void 0 !== e.scaleX && void 0 !== e.scaleY && (t.css("transition-duration", "0ms"), e.width = Math.round(t.width() * e.scaleX), e.height = Math.round(t.height() * e.scaleY), e.scaleX = 1, e.scaleY = 1, i.fancybox.setTranslate(t, e)) : !0 !== s && t.removeClass(e), i.isFunction(r) && r(n))
                    }), i.isNumeric(n) && t.css("transition-duration", n + "ms"), i.isPlainObject(e) ? i.fancybox.setTranslate(t, e) : t.addClass(e), t.data("timer", setTimeout(function() {
                        t.trigger("transitionend")
                    }, n + 16))
                },
                stop: function(t) {
                    clearTimeout(t.data("timer")), t.off(u)
                }
            }, i.fn.fancybox = function(t) {
                var e;
                return t = t || {}, e = t.selector || !1, e ? i("body").off("click.fb-start", e).on("click.fb-start", e, {
                    options: t
                }, r) : this.off("click.fb-start").on("click.fb-start", {
                    items: this,
                    options: t
                }, r), this
            }, a.on("click.fb-start", "[data-fancybox]", r)
        }
    }(window, document, window.jQuery || jQuery), function(t) {
        "use strict";
        var e = function(e, i, n) {
                if (e)
                    return n = n || "", "object" === t.type(n) && (n = t.param(n, !0)), t.each(i, function(t, i) {
                        e = e.replace("$" + t, i || "")
                    }), n.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + n), e
            },
            i = {
                youtube: {
                    matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
                    params: {
                        autoplay: 1,
                        autohide: 1,
                        fs: 1,
                        rel: 0,
                        hd: 1,
                        wmode: "transparent",
                        enablejsapi: 1,
                        html5: 1
                    },
                    paramPlace: 8,
                    type: "iframe",
                    url: "//www.youtube.com/embed/$4",
                    thumb: "//img.youtube.com/vi/$4/hqdefault.jpg"
                },
                vimeo: {
                    matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
                    params: {
                        autoplay: 1,
                        hd: 1,
                        show_title: 1,
                        show_byline: 1,
                        show_portrait: 0,
                        fullscreen: 1,
                        api: 1
                    },
                    paramPlace: 3,
                    type: "iframe",
                    url: "//player.vimeo.com/video/$2"
                },
                metacafe: {
                    matcher: /metacafe.com\/watch\/(\d+)\/(.*)?/,
                    type: "iframe",
                    url: "//www.metacafe.com/embed/$1/?ap=1"
                },
                dailymotion: {
                    matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
                    params: {
                        additionalInfos: 0,
                        autoStart: 1
                    },
                    type: "iframe",
                    url: "//www.dailymotion.com/embed/video/$1"
                },
                vine: {
                    matcher: /vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,
                    type: "iframe",
                    url: "//vine.co/v/$1/embed/simple"
                },
                instagram: {
                    matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
                    type: "image",
                    url: "//$1/p/$2/media/?size=l"
                },
                gmap_place: {
                    matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
                    type: "iframe",
                    url: function(t) {
                        return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12]) + "&output=" + (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
                    }
                },
                gmap_search: {
                    matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
                    type: "iframe",
                    url: function(t) {
                        return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
                    }
                }
            };
        t(document).on("onInit.fb", function(n, r) {
            t.each(r.group, function(n, r) {
                var s,
                    o,
                    a,
                    l,
                    c,
                    h,
                    u,
                    f = r.src || "",
                    p = !1;
                r.type || (s = t.extend(!0, {}, i, r.opts.media), t.each(s, function(i, n) {
                    if (a = f.match(n.matcher), h = {}, u = i, a) {
                        if (p = n.type, n.paramPlace && a[n.paramPlace]) {
                            c = a[n.paramPlace], "?" == c[0] && (c = c.substring(1)), c = c.split("&");
                            for (var s = 0; s < c.length; ++s) {
                                var d = c[s].split("=", 2);
                                2 == d.length && (h[d[0]] = decodeURIComponent(d[1].replace(/\+/g, " ")))
                            }
                        }
                        return l = t.extend(!0, {}, n.params, r.opts[i], h), f = "function" === t.type(n.url) ? n.url.call(this, a, l, r) : e(n.url, a, l), o = "function" === t.type(n.thumb) ? n.thumb.call(this, a, l, r) : e(n.thumb, a), "vimeo" === u && (f = f.replace("&%23", "#")), !1
                    }
                }), p ? (r.src = f, r.type = p, r.opts.thumb || r.opts.$thumb && r.opts.$thumb.length || (r.opts.thumb = o), "iframe" === p && (t.extend(!0, r.opts, {
                    iframe: {
                        preload: !1,
                        attr: {
                            scrolling: "no"
                        }
                    }
                }), r.contentProvider = u, r.opts.slideClass += " fancybox-slide--" + ("gmap_place" == u || "gmap_search" == u ? "map" : "video"))) : r.type = "image")
            })
        })
    }(window.jQuery), function(t, e, i) {
        "use strict";
        var n = function() {
                return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function(e) {
                        return t.setTimeout(e, 1e3 / 60)
                    }
            }(),
            r = function() {
                return t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function(e) {
                        t.clearTimeout(e)
                    }
            }(),
            s = function(e) {
                var i = [];
                e = e.originalEvent || e || t.e, e = e.touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e];
                for (var n in e)
                    e[n].pageX ? i.push({
                        x: e[n].pageX,
                        y: e[n].pageY
                    }) : e[n].clientX && i.push({
                        x: e[n].clientX,
                        y: e[n].clientY
                    });
                return i
            },
            o = function(t, e, i) {
                return e && t ? "x" === i ? t.x - e.x : "y" === i ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0
            },
            a = function(t) {
                if (t.is("a,button,input,select,textarea") || i.isFunction(t.get(0).onclick) || t.data("selectable"))
                    return !0;
                for (var e = 0, n = t[0].attributes, r = n.length; e < r; e++)
                    if ("data-fancybox-" === n[e].nodeName.substr(0, 14))
                        return !0;
                return !1
            },
            l = function(e) {
                var i = t.getComputedStyle(e)["overflow-y"],
                    n = t.getComputedStyle(e)["overflow-x"],
                    r = ("scroll" === i || "auto" === i) && e.scrollHeight > e.clientHeight,
                    s = ("scroll" === n || "auto" === n) && e.scrollWidth > e.clientWidth;
                return r || s
            },
            c = function(t) {
                for (var e = !1;;) {
                    if (e = l(t.get(0)))
                        break;
                    if (t = t.parent(), !t.length || t.hasClass("fancybox-stage") || t.is("body"))
                        break
                }
                return e
            },
            h = function(t) {
                var e = this;
                e.instance = t, e.$bg = t.$refs.bg, e.$stage = t.$refs.stage, e.$container = t.$refs.container, e.destroy(), e.$container.on("touchstart.fb.touch mousedown.fb.touch", i.proxy(e, "ontouchstart"))
            };
        h.prototype.destroy = function() {
            this.$container.off(".fb.touch")
        }, h.prototype.ontouchstart = function(n) {
            var r = this,
                l = i(n.target),
                h = r.instance,
                u = h.current,
                f = u.$content,
                p = "touchstart" == n.type;
            if (p && r.$container.off("mousedown.fb.touch"), !u || r.instance.isAnimating || r.instance.isClosing)
                return n.stopPropagation(), void n.preventDefault();
            if ((!n.originalEvent || 2 != n.originalEvent.button) && l.length && !a(l) && !a(l.parent()) && !(n.originalEvent.clientX > l[0].clientWidth + l.offset().left) && (r.startPoints = s(n), r.startPoints && !(r.startPoints.length > 1 && h.isSliding))) {
                if (r.$target = l, r.$content = f, r.canTap = !0, i(e).off(".fb.touch"), i(e).on(p ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", i.proxy(r, "ontouchend")), i(e).on(p ? "touchmove.fb.touch" : "mousemove.fb.touch", i.proxy(r, "ontouchmove")), !h.current.opts.touch && !h.canPan() || !l.is(r.$stage) && !r.$stage.find(l).length)
                    return void (l.is("img") && n.preventDefault());
                n.stopPropagation(), i.fancybox.isMobile && (c(r.$target) || c(r.$target.parent())) || n.preventDefault(), r.canvasWidth = Math.round(u.$slide[0].clientWidth), r.canvasHeight = Math.round(u.$slide[0].clientHeight), r.startTime = (new Date).getTime(), r.distanceX = r.distanceY = r.distance = 0, r.isPanning = !1, r.isSwiping = !1, r.isZooming = !1, r.sliderStartPos = r.sliderLastPos || {
                    top: 0,
                    left: 0
                }, r.contentStartPos = i.fancybox.getTranslate(r.$content), r.contentLastPos = null, 1 !== r.startPoints.length || r.isZooming || (r.canTap = !h.isSliding, "image" === u.type && (r.contentStartPos.width > r.canvasWidth + 1 || r.contentStartPos.height > r.canvasHeight + 1) ? (i.fancybox.stop(r.$content), r.$content.css("transition-duration", "0ms"), r.isPanning = !0) : r.isSwiping = !0, r.$container.addClass("fancybox-controls--isGrabbing")), 2 !== r.startPoints.length || h.isAnimating || u.hasError || "image" !== u.type || !u.isLoaded && !u.$ghost || (r.isZooming = !0, r.isSwiping = !1, r.isPanning = !1, i.fancybox.stop(r.$content), r.$content.css("transition-duration", "0ms"), r.centerPointStartX = .5 * (r.startPoints[0].x + r.startPoints[1].x) - i(t).scrollLeft(), r.centerPointStartY = .5 * (r.startPoints[0].y + r.startPoints[1].y) - i(t).scrollTop(), r.percentageOfImageAtPinchPointX = (r.centerPointStartX - r.contentStartPos.left) / r.contentStartPos.width, r.percentageOfImageAtPinchPointY = (r.centerPointStartY - r.contentStartPos.top) / r.contentStartPos.height, r.startDistanceBetweenFingers = o(r.startPoints[0], r.startPoints[1]))
            }
        }, h.prototype.ontouchmove = function(t) {
            var e = this;
            if (e.newPoints = s(t), i.fancybox.isMobile && (c(e.$target) || c(e.$target.parent())))
                return t.stopPropagation(), void (e.canTap = !1);
            if ((e.instance.current.opts.touch || e.instance.canPan()) && e.newPoints && e.newPoints.length && (e.distanceX = o(e.newPoints[0], e.startPoints[0], "x"), e.distanceY = o(e.newPoints[0], e.startPoints[0], "y"), e.distance = o(e.newPoints[0], e.startPoints[0]), e.distance > 0)) {
                if (!e.$target.is(e.$stage) && !e.$stage.find(e.$target).length)
                    return;
                t.stopPropagation(), t.preventDefault(), e.isSwiping ? e.onSwipe() : e.isPanning ? e.onPan() : e.isZooming && e.onZoom()
            }
        }, h.prototype.onSwipe = function() {
            var e,
                s = this,
                o = s.isSwiping,
                a = s.sliderStartPos.left || 0;
            !0 === o ? Math.abs(s.distance) > 10 && (s.canTap = !1, s.instance.group.length < 2 && s.instance.opts.touch.vertical ? s.isSwiping = "y" : s.instance.isSliding || !1 === s.instance.opts.touch.vertical || "auto" === s.instance.opts.touch.vertical && i(t).width() > 800 ? s.isSwiping = "x" : (e = Math.abs(180 * Math.atan2(s.distanceY, s.distanceX) / Math.PI), s.isSwiping = e > 45 && e < 135 ? "y" : "x"), s.instance.isSliding = s.isSwiping, s.startPoints = s.newPoints, i.each(s.instance.slides, function(t, e) {
                i.fancybox.stop(e.$slide), e.$slide.css("transition-duration", "0ms"), e.inTransition = !1, e.pos === s.instance.current.pos && (s.sliderStartPos.left = i.fancybox.getTranslate(e.$slide).left)
            }), s.instance.SlideShow && s.instance.SlideShow.isActive && s.instance.SlideShow.stop()) : ("x" == o && (s.distanceX > 0 && (s.instance.group.length < 2 || 0 === s.instance.current.index && !s.instance.current.opts.loop) ? a += Math.pow(s.distanceX, .8) : s.distanceX < 0 && (s.instance.group.length < 2 || s.instance.current.index === s.instance.group.length - 1 && !s.instance.current.opts.loop) ? a -= Math.pow(-s.distanceX, .8) : a += s.distanceX), s.sliderLastPos = {
                top: "x" == o ? 0 : s.sliderStartPos.top + s.distanceY,
                left: a
            }, s.requestId && (r(s.requestId), s.requestId = null), s.requestId = n(function() {
                s.sliderLastPos && (i.each(s.instance.slides, function(t, e) {
                    var n = e.pos - s.instance.currPos;
                    i.fancybox.setTranslate(e.$slide, {
                        top: s.sliderLastPos.top,
                        left: s.sliderLastPos.left + n * s.canvasWidth + n * e.opts.gutter
                    })
                }), s.$container.addClass("fancybox-is-sliding"))
            }))
        }, h.prototype.onPan = function() {
            var t,
                e,
                s,
                o = this;
            o.canTap = !1, t = o.contentStartPos.width > o.canvasWidth ? o.contentStartPos.left + o.distanceX : o.contentStartPos.left, e = o.contentStartPos.top + o.distanceY, s = o.limitMovement(t, e, o.contentStartPos.width, o.contentStartPos.height), s.scaleX = o.contentStartPos.scaleX, s.scaleY = o.contentStartPos.scaleY, o.contentLastPos = s, o.requestId && (r(o.requestId), o.requestId = null), o.requestId = n(function() {
                i.fancybox.setTranslate(o.$content, o.contentLastPos)
            })
        }, h.prototype.limitMovement = function(t, e, i, n) {
            var r,
                s,
                o,
                a,
                l = this,
                c = l.canvasWidth,
                h = l.canvasHeight,
                u = l.contentStartPos.left,
                f = l.contentStartPos.top,
                p = l.distanceX,
                d = l.distanceY;
            return r = Math.max(0, .5 * c - .5 * i), s = Math.max(0, .5 * h - .5 * n), o = Math.min(c - i, .5 * c - .5 * i), a = Math.min(h - n, .5 * h - .5 * n), i > c && (p > 0 && t > r && (t = r - 1 + Math.pow(-r + u + p, .8) || 0), p < 0 && t < o && (t = o + 1 - Math.pow(o - u - p, .8) || 0)), n > h && (d > 0 && e > s && (e = s - 1 + Math.pow(-s + f + d, .8) || 0), d < 0 && e < a && (e = a + 1 - Math.pow(a - f - d, .8) || 0)), {
                top: e,
                left: t
            }
        }, h.prototype.limitPosition = function(t, e, i, n) {
            var r = this,
                s = r.canvasWidth,
                o = r.canvasHeight;
            return i > s ? (t = t > 0 ? 0 : t, t = t < s - i ? s - i : t) : t = Math.max(0, s / 2 - i / 2), n > o ? (e = e > 0 ? 0 : e, e = e < o - n ? o - n : e) : e = Math.max(0, o / 2 - n / 2), {
                top: e,
                left: t
            }
        }, h.prototype.onZoom = function() {
            var e = this,
                s = e.contentStartPos.width,
                a = e.contentStartPos.height,
                l = e.contentStartPos.left,
                c = e.contentStartPos.top,
                h = o(e.newPoints[0], e.newPoints[1]),
                u = h / e.startDistanceBetweenFingers,
                f = Math.floor(s * u),
                p = Math.floor(a * u),
                d = (s - f) * e.percentageOfImageAtPinchPointX,
                g = (a - p) * e.percentageOfImageAtPinchPointY,
                m = (e.newPoints[0].x + e.newPoints[1].x) / 2 - i(t).scrollLeft(),
                _ = (e.newPoints[0].y + e.newPoints[1].y) / 2 - i(t).scrollTop(),
                v = m - e.centerPointStartX,
                y = _ - e.centerPointStartY,
                b = l + (d + v),
                x = c + (g + y),
                w = {
                    top: x,
                    left: b,
                    scaleX: e.contentStartPos.scaleX * u,
                    scaleY: e.contentStartPos.scaleY * u
                };
            e.canTap = !1, e.newWidth = f, e.newHeight = p, e.contentLastPos = w, e.requestId && (r(e.requestId), e.requestId = null), e.requestId = n(function() {
                i.fancybox.setTranslate(e.$content, e.contentLastPos)
            })
        }, h.prototype.ontouchend = function(t) {
            var n = this,
                o = Math.max((new Date).getTime() - n.startTime, 1),
                a = n.isSwiping,
                l = n.isPanning,
                c = n.isZooming;
            if (n.endPoints = s(t), n.$container.removeClass("fancybox-controls--isGrabbing"), i(e).off(".fb.touch"), n.requestId && (r(n.requestId), n.requestId = null), n.isSwiping = !1, n.isPanning = !1, n.isZooming = !1, n.canTap)
                return n.onTap(t);
            n.speed = 366, n.velocityX = n.distanceX / o * .5, n.velocityY = n.distanceY / o * .5, n.speedX = Math.max(.5 * n.speed, Math.min(1.5 * n.speed, 1 / Math.abs(n.velocityX) * n.speed)), l ? n.endPanning() : c ? n.endZooming() : n.endSwiping(a)
        }, h.prototype.endSwiping = function(t) {
            var e = this,
                n = !1;
            e.instance.isSliding = !1, e.sliderLastPos = null, "y" == t && Math.abs(e.distanceY) > 50 ? (i.fancybox.animate(e.instance.current.$slide, {
                top: e.sliderStartPos.top + e.distanceY + 150 * e.velocityY,
                opacity: 0
            }, 150), n = e.instance.close(!0, 300)) : "x" == t && e.distanceX > 50 && e.instance.group.length > 1 ? n = e.instance.previous(e.speedX) : "x" == t && e.distanceX < -50 && e.instance.group.length > 1 && (n = e.instance.next(e.speedX)), !1 !== n || "x" != t && "y" != t || e.instance.jumpTo(e.instance.current.index, 150), e.$container.removeClass("fancybox-is-sliding")
        }, h.prototype.endPanning = function() {
            var t,
                e,
                n,
                r = this;
            r.contentLastPos && (!1 === r.instance.current.opts.touch.momentum ? (t = r.contentLastPos.left, e = r.contentLastPos.top) : (t = r.contentLastPos.left + r.velocityX * r.speed, e = r.contentLastPos.top + r.velocityY * r.speed), n = r.limitPosition(t, e, r.contentStartPos.width, r.contentStartPos.height), n.width = r.contentStartPos.width, n.height = r.contentStartPos.height, i.fancybox.animate(r.$content, n, 330))
        }, h.prototype.endZooming = function() {
            var t,
                e,
                n,
                r,
                s = this,
                o = s.instance.current,
                a = s.newWidth,
                l = s.newHeight;
            s.contentLastPos && (t = s.contentLastPos.left, e = s.contentLastPos.top, r = {
                top: e,
                left: t,
                width: a,
                height: l,
                scaleX: 1,
                scaleY: 1
            }, i.fancybox.setTranslate(s.$content, r), a < s.canvasWidth && l < s.canvasHeight ? s.instance.scaleToFit(150) : a > o.width || l > o.height ? s.instance.scaleToActual(s.centerPointStartX, s.centerPointStartY, 150) : (n = s.limitPosition(t, e, a, l), i.fancybox.setTranslate(s.content, i.fancybox.getTranslate(s.$content)), i.fancybox.animate(s.$content, n, 150)))
        }, h.prototype.onTap = function(t) {
            var e,
                n = this,
                r = i(t.target),
                o = n.instance,
                a = o.current,
                l = t && s(t) || n.startPoints,
                c = l[0] ? l[0].x - n.$stage.offset().left : 0,
                h = l[0] ? l[0].y - n.$stage.offset().top : 0,
                u = function(e) {
                    var r = a.opts[e];
                    if (i.isFunction(r) && (r = r.apply(o, [a, t])), r)
                        switch (r) {
                        case "close":
                            o.close(n.startEvent);
                            break;
                        case "toggleControls":
                            o.toggleControls(!0);
                            break;
                        case "next":
                            o.next();
                            break;
                        case "nextOrClose":
                            o.group.length > 1 ? o.next() : o.close(n.startEvent);
                            break;
                        case "zoom":
                            "image" == a.type && (a.isLoaded || a.$ghost) && (o.canPan() ? o.scaleToFit() : o.isScaledDown() ? o.scaleToActual(c, h) : o.group.length < 2 && o.close(n.startEvent))
                        }
                };
            if (!(t.originalEvent && 2 == t.originalEvent.button || o.isSliding || c > r[0].clientWidth + r.offset().left)) {
                if (r.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"))
                    e = "Outside";
                else if (r.is(".fancybox-slide"))
                    e = "Slide";
                else {
                    if (!o.current.$content || !o.current.$content.has(t.target).length)
                        return;
                    e = "Content"
                }
                if (n.tapped) {
                    if (clearTimeout(n.tapped), n.tapped = null, Math.abs(c - n.tapX) > 50 || Math.abs(h - n.tapY) > 50 || o.isSliding)
                        return this;
                    u("dblclick" + e)
                } else
                    n.tapX = c, n.tapY = h, a.opts["dblclick" + e] && a.opts["dblclick" + e] !== a.opts["click" + e] ? n.tapped = setTimeout(function() {
                        n.tapped = null, u("click" + e)
                    }, 300) : u("click" + e);
                return this
            }
        }, i(e).on("onActivate.fb", function(t, e) {
            e && !e.Guestures && (e.Guestures = new h(e))
        }), i(e).on("beforeClose.fb", function(t, e) {
            e && e.Guestures && e.Guestures.destroy()
        })
    }(window, document, window.jQuery), function(t, e) {
        "use strict";
        var i = function(t) {
            this.instance = t, this.init()
        };
        e.extend(i.prototype, {
            timer: null,
            isActive: !1,
            $button: null,
            speed: 3e3,
            init: function() {
                var t = this;
                t.$button = t.instance.$refs.toolbar.find("[data-fancybox-play]").on("click", function() {
                    t.toggle()
                }), (t.instance.group.length < 2 || !t.instance.group[t.instance.currIndex].opts.slideShow) && t.$button.hide()
            },
            set: function() {
                var t = this;
                t.instance && t.instance.current && (t.instance.current.opts.loop || t.instance.currIndex < t.instance.group.length - 1) ? t.timer = setTimeout(function() {
                    t.instance.next()
                }, t.instance.current.opts.slideShow.speed || t.speed) : (t.stop(), t.instance.idleSecondsCounter = 0, t.instance.showControls())
            },
            clear: function() {
                var t = this;
                clearTimeout(t.timer), t.timer = null
            },
            start: function() {
                var t = this,
                    e = t.instance.current;
                t.instance && e && (e.opts.loop || e.index < t.instance.group.length - 1) && (t.isActive = !0, t.$button.attr("title", e.opts.i18n[e.opts.lang].PLAY_STOP).addClass("fancybox-button--pause"), e.isComplete && t.set())
            },
            stop: function() {
                var t = this,
                    e = t.instance.current;
                t.clear(), t.$button.attr("title", e.opts.i18n[e.opts.lang].PLAY_START).removeClass("fancybox-button--pause"), t.isActive = !1
            },
            toggle: function() {
                var t = this;
                t.isActive ? t.stop() : t.start()
            }
        }), e(t).on({
            "onInit.fb": function(t, e) {
                e && !e.SlideShow && (e.SlideShow = new i(e))
            },
            "beforeShow.fb": function(t, e, i, n) {
                var r = e && e.SlideShow;
                n ? r && i.opts.slideShow.autoStart && r.start() : r && r.isActive && r.clear()
            },
            "afterShow.fb": function(t, e, i) {
                var n = e && e.SlideShow;
                n && n.isActive && n.set()
            },
            "afterKeydown.fb": function(i, n, r, s, o) {
                var a = n && n.SlideShow;
                !a || !r.opts.slideShow || 80 !== o && 32 !== o || e(t.activeElement).is("button,a,input") || (s.preventDefault(), a.toggle())
            },
            "beforeClose.fb onDeactivate.fb": function(t, e) {
                var i = e && e.SlideShow;
                i && i.stop()
            }
        }), e(t).on("visibilitychange", function() {
            var i = e.fancybox.getInstance(),
                n = i && i.SlideShow;
            n && n.isActive && (t.hidden ? n.clear() : n.set())
        })
    }(document, window.jQuery), function(t, e) {
        "use strict";
        var i = function() {
            var e,
                i,
                n,
                r = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]],
                s = {};
            for (i = 0; i < r.length; i++)
                if ((e = r[i]) && e[1] in t) {
                    for (n = 0; n < e.length; n++)
                        s[r[0][n]] = e[n];
                    return s
                }
            return !1
        }();
        if (!i)
            return void (e && e.fancybox && (e.fancybox.defaults.btnTpl.fullScreen = !1));
        var n = {
            request: function(e) {
                e = e || t.documentElement, e[i.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)
            },
            exit: function() {
                t[i.exitFullscreen]()
            },
            toggle: function(e) {
                e = e || t.documentElement, this.isFullscreen() ? this.exit() : this.request(e)
            },
            isFullscreen: function() {
                return Boolean(t[i.fullscreenElement])
            },
            enabled: function() {
                return Boolean(t[i.fullscreenEnabled])
            }
        };
        e(t).on({
            "onInit.fb": function(t, e) {
                var i,
                    r = e.$refs.toolbar.find("[data-fancybox-fullscreen]");
                e && !e.FullScreen && e.group[e.currIndex].opts.fullScreen ? (i = e.$refs.container, i.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function(t) {
                    t.stopPropagation(), t.preventDefault(), n.toggle(i[0])
                }), e.opts.fullScreen && !0 === e.opts.fullScreen.autoStart && n.request(i[0]), e.FullScreen = n) : r.hide()
            },
            "afterKeydown.fb": function(t, e, i, n, r) {
                e && e.FullScreen && 70 === r && (n.preventDefault(), e.FullScreen.toggle(e.$refs.container[0]))
            },
            "beforeClose.fb": function(t) {
                t && t.FullScreen && n.exit()
            }
        }), e(t).on(i.fullscreenchange, function() {
            var t = e.fancybox.getInstance();
            t.current && "image" === t.current.type && t.isAnimating && (t.current.$content.css("transition", "none"), t.isAnimating = !1, t.update(!0, !0, 0)), t.trigger("onFullscreenChange", n.isFullscreen())
        })
    }(document, window.jQuery), function(t, e) {
        "use strict";
        var i = function(t) {
            this.instance = t, this.init()
        };
        e.extend(i.prototype, {
            $button: null,
            $grid: null,
            $list: null,
            isVisible: !1,
            init: function() {
                var t = this,
                    e = t.instance.group[0],
                    i = t.instance.group[1];
                t.$button = t.instance.$refs.toolbar.find("[data-fancybox-thumbs]"), t.instance.group.length > 1 && t.instance.group[t.instance.currIndex].opts.thumbs && ("image" == e.type || e.opts.thumb || e.opts.$thumb) && ("image" == i.type || i.opts.thumb || i.opts.$thumb) ? (t.$button.on("click", function() {
                    t.toggle()
                }), t.isActive = !0) : (t.$button.hide(), t.isActive = !1)
            },
            create: function() {
                var t,
                    i,
                    n = this.instance;
                this.$grid = e('<div class="fancybox-thumbs"></div>').appendTo(n.$refs.container), t = "<ul>", e.each(n.group, function(e, n) {
                    i = n.opts.thumb || (n.opts.$thumb ? n.opts.$thumb.attr("src") : null), i || "image" !== n.type || (i = n.src), i && i.length && (t += '<li data-index="' + e + '"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="' + i + '" /></li>')
                }), t += "</ul>", this.$list = e(t).appendTo(this.$grid).on("click", "li", function() {
                    n.jumpTo(e(this).data("index"))
                }), this.$list.find("img").hide().one("load", function() {
                    var t,
                        i,
                        n,
                        r,
                        s = e(this).parent().removeClass("fancybox-thumbs-loading"),
                        o = s.outerWidth(),
                        a = s.outerHeight();
                    t = this.naturalWidth || this.width, i = this.naturalHeight || this.height, n = t / o, r = i / a, n >= 1 && r >= 1 && (n > r ? (t /= r, i = a) : (t = o, i /= n)), e(this).css({
                        width: Math.floor(t),
                        height: Math.floor(i),
                        "margin-top": Math.min(0, Math.floor(.3 * a - .3 * i)),
                        "margin-left": Math.min(0, Math.floor(.5 * o - .5 * t))
                    }).show()
                }).each(function() {
                    this.src = e(this).data("src")
                })
            },
            focus: function() {
                this.instance.current && this.$list.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + this.instance.current.index + '"]').addClass("fancybox-thumbs-active").focus()
            },
            close: function() {
                this.$grid.hide()
            },
            update: function() {
                this.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), this.isVisible ? (this.$grid || this.create(), this.instance.trigger("onThumbsShow"), this.focus()) : this.$grid && this.instance.trigger("onThumbsHide"), this.instance.update()
            },
            hide: function() {
                this.isVisible = !1, this.update()
            },
            show: function() {
                this.isVisible = !0, this.update()
            },
            toggle: function() {
                this.isVisible = !this.isVisible, this.update()
            }
        }), e(t).on({
            "onInit.fb": function(t, e) {
                e && !e.Thumbs && (e.Thumbs = new i(e))
            },
            "beforeShow.fb": function(t, e, i, n) {
                var r = e && e.Thumbs;
                if (r && r.isActive) {
                    if (i.modal)
                        return r.$button.hide(), void r.hide();
                    n && !0 === e.opts.thumbs.autoStart && r.show(), r.isVisible && r.focus()
                }
            },
            "afterKeydown.fb": function(t, e, i, n, r) {
                var s = e && e.Thumbs;
                s && s.isActive && 71 === r && (n.preventDefault(), s.toggle())
            },
            "beforeClose.fb": function(t, e) {
                var i = e && e.Thumbs;
                i && i.isVisible && !1 !== e.opts.thumbs.hideOnClose && i.close()
            }
        })
    }(document, window.jQuery), function(t, e, i) {
        "use strict";
        function n() {
            var t = e.location.hash.substr(1),
                i = t.split("-"),
                n = i.length > 1 && /^\+?\d+$/.test(i[i.length - 1]) ? parseInt(i.pop(-1), 10) || 1 : 1,
                r = i.join("-");
            return n < 1 && (n = 1), {
                hash: t,
                index: n,
                gallery: r
            }
        }
        function r(t) {
            var e;
            "" !== t.gallery && (e = i("[data-fancybox='" + i.escapeSelector(t.gallery) + "']").eq(t.index - 1), e.length || (e = i("#" + i.escapeSelector(t.gallery))), e.length && (o = !1, e.trigger("click")))
        }
        function s(t) {
            var e;
            return !!t && (e = t.current ? t.current.opts : t.opts, e.hash || (e.$orig ? e.$orig.data("fancybox") : ""))
        }
        i.escapeSelector || (i.escapeSelector = function(t) {
            return (t + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function(t, e) {
                return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
            })
        });
        var o = !0,
            a = null,
            l = null;
        i(function() {
            setTimeout(function() {
                !1 !== i.fancybox.defaults.hash && (i(t).on({
                    "onInit.fb": function(t, e) {
                        var i,
                            r;
                        !1 !== e.group[e.currIndex].opts.hash && (i = n(), (r = s(e)) && i.gallery && r == i.gallery && (e.currIndex = i.index - 1))
                    },
                    "beforeShow.fb": function(i, n, r) {
                        var c;
                        r && !1 !== r.opts.hash && (c = s(n)) && "" !== c && (e.location.hash.indexOf(c) < 0 && (n.opts.origHash = e.location.hash), a = c + (n.group.length > 1 ? "-" + (r.index + 1) : ""), "replaceState" in e.history ? (l && clearTimeout(l), l = setTimeout(function() {
                            e.history[o ? "pushState" : "replaceState"]({}, t.title, e.location.pathname + e.location.search + "#" + a), l = null, o = !1
                        }, 300)) : e.location.hash = a)
                    },
                    "beforeClose.fb": function(n, r, o) {
                        var c,
                            h;
                        l && clearTimeout(l), !1 !== o.opts.hash && (c = s(r), h = r && r.opts.origHash ? r.opts.origHash : "", c && "" !== c && ("replaceState" in history ? e.history.replaceState({}, t.title, e.location.pathname + e.location.search + h) : (e.location.hash = h, i(e).scrollTop(r.scrollTop).scrollLeft(r.scrollLeft))), a = null)
                    }
                }), i(e).on("hashchange.fb", function() {
                    var t = n();
                    i.fancybox.getInstance() ? !a || a === t.gallery + "-" + t.index || 1 === t.index && a == t.gallery || (a = null, i.fancybox.close()) : "" !== t.gallery && r(t)
                }), r(n()))
            }, 50)
        })
    }(document, window, window.jQuery)
}]);
