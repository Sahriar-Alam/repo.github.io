! function (r, t) {
    "use strict";

    function o(o, n = {}) {
        const i = this;
        i.el = r(o);
        const e = r => i.el.data(r),
            s = n.value,
            a = void 0 === s ? e("value") : s,
            d = n.showTitle,
            l = void 0 === d || d,
            p = n.titleEl,
            c = void 0 === p ? r("<h4/>") : p,
            u = n.titleContent,
            g = void 0 === u ? e("title") : u,
            f = n.radius,
            b = void 0 === f ? e("radius") || "6" : f,
            v = n.height,
            h = void 0 === v ? e("height") || "6" : v,
            m = n.background,
            w = void 0 === m ? e("background") || "transparent" : m,
            y = n.fill,
            P = void 0 === y ? e("fill") || "linear-gradient(to left, #148cfa, #64f5d2)" : y,
            C = n.border,
            F = void 0 === C ? e("border") || "#eee" : C,
            x = n.style,
            W = void 0 === x ? e("tooltip") ? "tooltip" : "inline" : x,
            k = n.easing,
            B = void 0 === k ? e("easing") || "swing" : k,
            E = n.duration,
            A = void 0 === E ? e("duration") || 3000 : E,
            S = n.autoplay,
            T = void 0 === S ? !1 !== e("autoplay") : S,
            j = n.useWayPoint,
            I = void 0 === j ? !1 !== e("waypoint") : j,
            M = n.wayPointOffset,
            O = void 0 === M ? e("waypoint-offset") || "bottom-in-view" : M,
            Q = n.isRtl,
            R = void 0 === Q ? "rtl" === document.dir : Q,
            q = n.onInit,
            z = void 0 === q ? function () {} : q,
            D = n.onAnimationStart,
            G = void 0 === D ? function () {} : D,
            H = n.onProgress,
            J = void 0 === H ? function () {} : H,
            K = n.onAfterProgress,
            L = void 0 === K ? function () {} : K,
            N = n.onComplete,
            U = void 0 === N ? function () {} : N,
            V = n.onError,
            X = void 0 === V ? function () {} : V,
            Y = n.onEnd,
            Z = void 0 === Y ? function () {} : Y;
        i.el.addClass("progress-" + W), i.bar = i.el.find(".ab-progress-bar"), i.title = i.el.find(".progress-title"), i.indecator = i.el.find(".progress-indicator"), i.numWrap = i.indecator.find(".progress-indicator-inner"), i.number = i.indecator.find(".percent");
        i.started = !1, i.stopped = null, i.animator = null, i.progress = 0, i.start = function () {
            i.started || (i.animator = r({
                Progress: i.progress
            }).animate({
                Progress: a
            }, {
                duration: A,
                easing: B,
                start: function () {
                    r.isFunction(G) && G.call(i, arguments)
                },
                step: function () {
                    r.isFunction(J) && J.call(i, arguments)
                },
                progress: function () {
                    const t = this;
                    i.progress = t.Progress, i.number.text((R ? "%#" : "#%").replace("#", Math.ceil(t.Progress).toString())), i.bar.css({
                        width: t.Progress + "%",
                        "--progressbar-radius": b + "px",
                        "--progressbar-height": h + "px",
                        "--progressbar-fill": P,
                        "--progressbar-border": F
                    }), i.wrap.css({
                        "--progressbar-radius": b + "px",
                        "--progressbar-height": h + "px",
                        "--progressbar-background": w,
                        "--progressbar-border": F
                    }), i.numWrap.css({
                        left: t.Progress + "%"
                    }), r.isFunction(L) && L.call(i, arguments)
                },
                complete: function () {
                    r.isFunction(U) && U.call(i, arguments)
                },
                fail: function () {
                    r.isFunction(X) && X.call(i, arguments)
                },
                always: function () {
                    r.isFunction(Z) && Z.call(i, arguments)
                }
            }), i.started = !0, i.stopped = !1)
        }, i.stop = function (r = !1, t = !1) {
            i.stopped || (i.animator.stop(r, t), i.started = !1, i.stopped = !0)
        }, r.isFunction(z) && z.call(i), !i.title.length && l && (i.title = r(c).addClass("progress-title"), i.title.text(g), i.el.html(i.title)), i.indecator.length || (i.indecator = r("<div/>").addClass("progress-indicator"), i.title.after(i.indecator)), i.number.length || (i.number = r('<span class="percent"></span>'), i.number.appendTo(i.indecator), i.number.wrap('<div class="progress-indicator-inner"/>'), i.numWrap = i.number.parent(), "tooltip" === W && i.number.after('<span class="down-arrow"/>')), i.bar.length || (i.bar = r("<div/>").addClass("ab-progress-bar"), i.indecator.after(i.bar), i.bar.wrap('<div class="progress-bar-wrap"/>'), i.wrap = i.el.find(".progress-bar-wrap")), R && i.el.addClass("progress-rtl"), T && (I && t.Waypoint ? new Waypoint({
            element: i.el[0],
            handler: function () {
                i.start(), this.destroy()
            },
            offset: O
        }) : i.start())
    }
    r.fn.progressBar = function (t = {}) {
        r(this).each((function () {
            const n = new o(this, t);
            r(this).data("progressBar", n)
        }))
    }, r(document).ready((function () {
        r("[data-progress]").progressBar()
    }))
}(jQuery, window);
