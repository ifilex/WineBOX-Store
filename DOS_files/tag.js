﻿(function() {
	try {
		(function() {
			function Ze(a, c, b, d) {
				var e = this;
				return C(window, "c.i", function() {
					function f(E) {
						(E = $e(l, m, "", E)(l, m)) && (R(E.then) ? E.then(g) : g(E));
						return E
					}

					function g(E) {
						E && (R(E) ? p.push(E) : qa(E) && y(function(O) {
							var N = O[0];
							O = O[1];
							R(O) && ("u" === N ? p.push(O) : h(O, N))
						}, Ca(E)))
					}

					function h(E, O, N) {
						e[O] = Ll(l, m, N || q, O, E)
					}
					var k, l = window;
					(!l || isNaN(a) && !a) && Sd();
					var m = Ml(a, wb, c, b, d),
						p = [],
						q = [bh, $e, ch];
					q.unshift(Nl);
					var r = A(P, Sa),
						t = K(m);
					m.id || Ta(Ic("Invalid Metrika id: " + m.id, !0));
					var x = ad.C("counters", {});
					if (x[t]) return Ib(l,
						t, "dc", (k = {}, k.key = t, k)), x[t];
					Ol(l, t, dh(a, c, b, d));
					x[t] = e;
					ad.D("counters", x);
					ad.Ga("counter", e);
					y(function(E) {
						E(l, m)
					}, af);
					y(f, bd);
					f(Pl);
					h(Ql(l, m, p), "destruct", [bh, ch]);
					Pb(l, D([l, r, f, 1, "a.i"], eh));
					y(f, W)
				})()
			}

			function bh(a, c, b, d) {
				return C(a, "cm." + b, d)
			}

			function ch(a, c, b, d) {
				return function() {
					var e = Na(arguments);
					e = d.apply(void 0, e);
					return X(e) ? Ja(a, c) : e
				}
			}

			function Rl(a, c) {
				delete I(a).C("cok", {})[c]
			}

			function Ol(a, c, b) {
				a = I(a);
				var d = a.C("cok", {});
				d[c] = b;
				a.D("cok", d)
			}

			function Sl(a, c) {
				var b = "" + c,
					d = {
						id: 1,
						ba: "0"
					},
					e = Tl(b);
				e ? d.id = e : -1 === mb(b, ":") ? (b = Da(b), d.id = b) : (b = b.split(":"), e = b[1], d.id = Da(b[0]), d.ba = Td(e) ? "1" : "0");
				return [Ja(a, d), d]
			}

			function fh(a, c, b, d) {
				Ul(a, gh + "/" + c + ".js?ver=" + ua.ab, function() {
					var e = I(a).C("ytmm");
					(e = n(e, c + ".init")) && e(b, d, ua.ab)
				})
			}

			function Ul(a, c, b, d) {
				function e() {
					g.state = 1;
					b()
				}

				function f() {
					g.state = 2;
					d && d()
				}
				var g = Vl(a, c);
				c = g.Hi;
				var h = g.state;
				c && 2 !== h ? 1 === h ? e() : (a = ka(a), a.F(c, ["load"], e), a.F(c, ["error"], f)) : f()
			}

			function Vl(a, c) {
				bf[c] || (bf[c] = {
					Hi: cd(a, {
						src: c
					}),
					state: 0
				});
				return bf[c]
			}

			function hh(a) {
				return {
					Ci: Jb(a.element),
					ud: a.ud
				}
			}

			function Wl(a) {
				if (!a) return "";
				a = a.match(Xl);
				if (!a || 0 === a.length) return "";
				var c = Yl();
				return "//HTML/BODY/" + M(function(b, d) {
					var e = d[0],
						f = Da(d.slice(1));
					return "/" + c[e] + (f ? "[" + (f + 1) + "]" : "") + b
				}, "", a)
			}

			function Zl(a) {
				return ih(a) || $l(a)
			}

			function am(a, c) {
				var b = c.patterns;
				return 0 === b.length ? !1 : Ua(u(a, jh), b)
			}

			function bm(a, c) {
				var b = c.patterns;
				if (0 === b.length) return !1;
				if (1 === b.length) return jh(a, b[0]);
				b = M(function(f, g) {
					var h = g[0],
						k = g[1],
						l = a[h];
					l === k && (f.sd += 1, "i" === h || "c" === h ? f.rf = !0 : "p" === h && kh(l) ===
						kh(k) && (f.sf = !0));
					return f
				}, {
					sd: 0,
					rf: !1,
					sf: !1
				}, b);
				var d = b.rf,
					e = b.sf;
				return 2 <= b.sd || d && e
			}

			function jh(a, c) {
				var b = a[c[0]];
				return !(!b || b !== c[1])
			}

			function cm(a) {
				y(function(c) {
					var b = c.event;
					c = c.data;
					var d = u(b, dm);
					"bidTimeout" === b ? y(d, c) : d(c)
				}, a)
			}

			function dm(a, c) {
				if (J(a, em)) {
					var b = n(c, "auctionId") || n(c, "bid.auctionId") || void 0;
					if (b) {
						ac[b] || (ac[b] = {
							Kc: {}
						});
						b = ac[b];
						var d = "auctionInit" === a,
							e = "auctionEnd" === a,
							f = "adRenderFailed" === a || "adRenderSucceeded" === a;
						f || b.Uc && !d || (b.Uc = n(c, "auctionStart") || void 0, !b.Uc &&
							d && (b.Uc = c.timestamp));
						var g = D([a, b], fm);
						"bidRequested" === a ? y(g, c.bids) : f ? gm(a, b, c) : e ? (b.Se = c.auctionEnd || c.timestamp, b.Fi = ha(function(h, k, l) {
							return cf(h, l) === k
						}, A(U("bidderCode"), c.bidderRequests))) : d || g(c);
						b.Se && (b.da = !0)
					}
				}
			}

			function gm(a, c, b) {
				var d, e = b.bid,
					f = e.bidderCode || e.bidder;
				e = e.adUnitCode;
				f && e && (c = lh(c, e), c.Ob || (c.Ob = {}), a = "adRenderSucceeded" === a, c.Ob[f] = (d = {}, d.success = a, d), a || (c.Ob[f].reason = b.reason, c.Ob[f].message = b.message))
			}

			function fm(a, c, b) {
				var d = b.adUnitCode,
					e = b.bidderCode || b.bidder;
				if (e && d) {
					var f = lh(c, d);
					!f.Xd && b.mediaTypes && (f.Xd = {}, y(function(g) {
						var h = g[0];
						g = g[1];
						var k;
						Z(g) ? k = g : g.sizes ? k = g.sizes : g.playerSize && (k = g.playerSize);
						k && (f.Xd[h] = k)
					}, Ca(b.mediaTypes)));
					"bidTimeout" === a ? (f.timeout || (f.timeout = {}), f.timeout[e] = !0) : (f.lc[a] || (f.lc[a] = {}), f.lc[a][e] = M(function(g, h) {
						da(b[h]) || (g[h] = mh[h] ? mh[h](b[h]) : b[h]);
						return g
					}, {}, hm))
				}
			}

			function lh(a, c) {
				a.Kc[c] || (a.Kc[c] = {
					lc: {}
				});
				return a.Kc[c]
			}

			function im(a, c) {
				y(function(b) {
					ac[b].da && jm(a, c, b)
				}, ea(ac))
			}

			function jm(a, c, b) {
				var d = ac[b];
				d.da = !1;
				d.Na && ja(a, d.Na);
				d.Na = S(a, function() {
					var e, f, g = km(b);
					c((e = {}, e.__ym = (f = {}, f.pbjs = g, f), e));
					delete ac[b]
				}, 2E3)
			}

			function km(a) {
				var c = ac[a],
					b = c.Uc,
					d = c.Se,
					e = c.Fi;
				return A(function(f) {
					var g, h = f[0],
						k = f[1];
					f = k.Ob;
					var l = k.Xd,
						m = k.timeout;
					k = k.lc;
					return z((g = {}, g.renderState = f, g.mediaTypes = l, g.auctionId = a, g.adUnitCode = h, g.startStamp = b, g.endStamp = d, g.requestedBidders = e, g.bidTimeout = m, g), k)
				}, Ca(c.Kc))
			}

			function lm(a) {
				var c = n(a, "featurePolicy");
				return c ? "browsingTopics" in a && c.allowsFeature("browsing-topics") :
					!1
			}

			function mm(a, c, b, d) {
				var e = n(d, "data");
				if (fa(e)) {
					var f = e.split("*");
					e = f[0];
					var g = f[1];
					f = f[2];
					"sc.topics-response" === e ? (g && ("1" === g && f ? (a = Qb(a, f), Z(a) && c.D("cta", a)) : c.D("cta.e", g)), b()) : "sc.frame" === e && d.source && d.source.postMessage("sc.topics", "*")
				}
			}

			function nm(a, c) {
				var b;
				if ("https://oauth.yandex.ru" === n(c, "origin") && n(c, "source.window") && "_ym_uid_request" === n(c.data, "_ym")) {
					var d = c.source,
						e = (b = {}, b._ym_uid = a, b);
					d.postMessage(e, "https://oauth.yandex.ru")
				}
			}

			function nh(a, c) {
				void 0 === c && (c = !0);
				var b =
					bc("canvas", a.document);
				if (b && (b = Jc(b))) {
					var d = Ud(a) || Kc(a),
						e = d[0];
					d = d[1];
					if (.3 <= oh(a, b, {
							h: d,
							w: e
						}) / (d * e)) {
						I(a).D("hc", 1);
						return
					}
				}
				c && S(a, D([a, !1], nh), 3E3)
			}

			function ph(a) {
				return {
					O: function(c, b) {
						om(a).then(function(d) {
							c.J || (c.J = {});
							c.J.uah = d;
							b()
						}, b)
					}
				}
			}

			function pm(a) {
				var c = M(function(b, d) {
					var e = d[1],
						f = qm(a[d[0]]);
					f && b.push("" + e + "\n" + f);
					return b
				}, [], Ca(rm));
				return H("\n", c)
			}

			function sm(a) {
				return "che\n" + a
			}

			function qm(a) {
				return fa(a) ? a : Z(a) ? H(",", A(function(c) {
						return '"' + c.brand + '";v="' + c.version + '"'
					}, a)) :
					da(a) ? "" : a ? "?1" : "?0"
			}

			function tm(a, c) {
				var b = um(a),
					d = [vm(a) || wm(a)];
				qh(a) && d.push(b);
				var e = ia(a);
				b = Ra(a);
				var f = b.C("synced", {});
				d = ha(function(g) {
					if (c[g]) {
						var h = (f[g] || 1) + 1440 < e(nb);
						h && delete f[g];
						return h
					}
				}, d);
				b.D("synced", f);
				return A(function(g) {
					return {
						Ri: c[g],
						ei: g
					}
				}, d)
			}

			function wm(a) {
				a = xm(a);
				return zm[a] || a
			}

			function um(a) {
				a = rh(a);
				return Am[a] || "ru"
			}

			function Bm(a, c, b, d) {
				if (!b.K || Td(c.ba)) d();
				else {
					var e = Vd(a),
						f = u(e, Cm),
						g = dd(a, ""),
						h = function() {
							var q = H(",", A(Dm(df), Wd(e)));
							q = "" + q + Em(q, g);
							Xd(b, "gdpr",
								q);
							d()
						};
					if (c.ij) f("31"), h();
					else if (3 === c.id) h();
					else {
						var k = I(a),
							l = k.C("f1");
						if (l) l(h);
						else if (l = Wd(e), Ua(qc(df), l)) h();
						else if (g.C("yandex_login")) f("13"), g.D("gdpr", Lc, 525600), h();
						else {
							l = Yd(a);
							var m = T(a);
							var p = /(^|\w+\.)yango(\.yandex)?\.com$/.test(m.hostname) ? {
								url: "https://yastatic.net/s3/taxi-front/yango-gdpr-popup/",
								version: 2,
								wf: Fm,
								Df: "_inversed_buttons"
							} : void 0;
							l || p ? (l = g.C("gdpr"), J(l, rc) ? (f(l === ef ? "12" : "3"), h()) : ff(a) || Gm(a) ? (f("17"), h()) : Hm(a).then(P, F).then(function(q) {
								q ? (f("28"), h()) : (sh(h),
									k.D("f1", sh), (0, gf[0])(a).then(U("params.eu")).then(function(r) {
										if (r || fb(m.href, "yagdprcheck=1") || g.C("yaGdprCheck")) {
											g.D("gdpr_popup", ef);
											Im(a, c);
											if (ob(a)) return Jm(a, f, c);
											var t = th(a, e);
											if (t) return r = Km(a, f, t, c, p), r.then(D([a, c], Lm)), r
										}
										r || f("8");
										return L.resolve({
											value: Lc,
											Pd: !0
										})
									}).then(function(r) {
										g.ic("gdpr_popup");
										if (r) {
											var t = r.value;
											r = r.Pd;
											J(t, rc) && g.D("gdpr", t, r ? void 0 : 525600)
										}
										t = cc(uh, xa);
										ed(a, t, 20)(Ya(C(a, "gdr"), F));
										k.D("f1", xa)
									})["catch"](C(a, "gdp.a")))
							})) : (f("14"), h())
						}
					}
				}
			}

			function Lm(a, c) {
				if (Yd(a)) {
					var b =
						Vd(a),
						d = Ja(a, c);
					d = d && d.params;
					b = A(u(Mm, n), Wd(b));
					d && b.length && d("gdpr", Ea(b))
				}
			}

			function Jm(a, c, b) {
				var d = Zd(a, b);
				return new L(function(e) {
					var f;
					if (d) {
						var g = d.$,
							h = w(u("4", c), u(null, e)),
							k = S(a, h, 2E3, "gdp.f.t");
						d.Xf((f = {}, f.type = "isYandex", f)).then(function(l) {
							l.isYandex ? (c("5"), g.F(vh, function(m) {
								e({
									value: wh(m[1].type)
								})
							})) : (c("6"), e(null))
						})["catch"](h).then(D([a, k], ja))
					} else e({
						value: ef,
						Pd: !0
					})
				})
			}

			function Im(a, c) {
				var b = Zd(a, c);
				b && b.$.F(["isYandex"], function() {
					var d;
					return d = {
							type: "isYandex"
						}, d.isYandex =
						Yd(a), d
				});
				return b
			}

			function Nm(a, c, b) {
				a = b || rh(a);
				return J(a, c) ? a : "en"
			}

			function wh(a) {
				if (J(a, ["GDPR-ok-view-default", "GDPR-ok-view-detailed"])) return Lc;
				a = a.replace("GDPR-ok-view-detailed-", "");
				return J(a, rc) ? a : Lc
			}

			function xh(a, c, b) {
				var d = n(a, "AppMetricaInitializer"),
					e = n(d, "init");
				if (e) try {
					G(e, d)(Kb(a, c))
				} catch (f) {} else yh = S(a, D([a, c, 2 * b], xh), b, "ai.d");
				return function() {
					return ja(a, yh)
				}
			}

			function zh(a, c, b, d) {
				var e, f, g, h = b.Xh,
					k = b.Sh,
					l = b.isTrusted;
				b = b.Qd;
				a = hf(a, k);
				k = k.readOnly;
				d = (e = {}, e.fi = jf((f = {}, f.a =
					h ? 1 : 0, f.b = a, f.c = d || 0, f.d = k ? 1 : null, f.e = b ? 1 : null, f)).Fa(), e);
				da(l) || (d.ite = pb(l));
				c.params((g = {}, g.__ym = d, g))
			}

			function Ah(a, c) {
				var b = n(c, "target");
				if (b) {
					var d = n(b, "value");
					if ((d = Za(d)) && !(100 <= Oa(d))) {
						var e = "tel" === n(b, "type"),
							f = 0 < mb(d, "@") && !e,
							g = $d(d);
						g = Oa(g);
						if (f || !f && (e || g))
							if (d = f ? Bh(d) : Ch(a, d)) return e = n(c, "isTrusted"), {
								Sh: b,
								Xh: f,
								Th: d,
								isTrusted: e,
								Qd: c.Qd
							}
					}
				}
			}

			function Dh(a, c, b, d, e) {
				if (!fd(a)) return F;
				var f = [],
					g = ka(a);
				sc(a)(Ya(F, function() {
					var h = gb(c, a.document.body);
					e && (h = ha(e, h));
					y(function(l) {
						f.push(g.F(l,
							b, d))
					}, h);
					if (Fa("MutationObserver", a.MutationObserver)) {
						var k = c.toUpperCase();
						h = new a.MutationObserver(C(a, "de.m", function(l) {
							y(function(m) {
								var p = m.addedNodes;
								m = m.removedNodes;
								p && p.length && y(function(q) {
									ae(a, q, function(r) {
										r.nodeName !== k || e && !e(r) || f.push(g.F(r, b, d))
									}, void 0, a.NodeFilter.SHOW_ELEMENT, !0)
								}, p);
								m && m.length && y(function(q) {
									ae(a, q, function(r) {
										r.nodeName !== k || e && !e(r) || g.wb(r, b, d)
									}, void 0, a.NodeFilter.SHOW_ELEMENT, !0)
								}, m)
							}, l)
						}));
						h.observe(a.document.body, {
							childList: !0,
							subtree: !0
						});
						f.push(G(h.disconnect,
							h))
					}
				}));
				return D([xa, f], y)
			}

			function Om(a) {
				var c = n(a, "speechSynthesis.getVoices");
				if (c) return a = G(c, a.speechSynthesis), tc(function(b) {
					return A(u(b, n), Pm)
				}, a())
			}

			function Qm(a, c, b) {
				return H("x", A(w(P, Ka("concat", "" + a), u(b, n)), c))
			}

			function Rm(a, c) {
				var b = c.Ig;
				if (!Sm(a, b)) return "";
				var d = [];
				a: {
					var e = Tm(a, b);
					try {
						var f = D(e, w)()();
						break a
					} catch (E) {
						if ("ccf" === E.message) {
							f = null;
							break a
						}
						Ta(E)
					}
					f = void 0
				}
				if (Va(f)) var g = "";
				else try {
					g = f.toDataURL()
				} catch (E) {
					g = ""
				}(f = g) && d.push(f);
				var h = b.getContextAttributes();
				try {
					var k =
						la(b.getSupportedExtensions, "getSupportedExtensions") ? b.getSupportedExtensions() || [] : []
				} catch (E) {
					k = []
				}
				k = H(";", k);
				f = kf(b.getParameter(b.ALIASED_LINE_WIDTH_RANGE), b);
				e = kf(b.getParameter(b.ALIASED_POINT_SIZE_RANGE), b);
				g = b.getParameter(b.ALPHA_BITS);
				h = h && h.antialias ? "yes" : "no";
				var l = b.getParameter(b.BLUE_BITS),
					m = b.getParameter(b.DEPTH_BITS),
					p = b.getParameter(b.GREEN_BITS),
					q = b.getExtension("EXT_texture_filter_anisotropic") || b.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || b.getExtension("MOZ_EXT_texture_filter_anisotropic");
				if (q) {
					var r = b.getParameter(q.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
					0 === r && (r = 2)
				}
				r = {
					uj: k,
					"webgl aliased line width range": f,
					"webgl aliased point size range": e,
					"webgl alpha bits": g,
					"webgl antialiasing": h,
					"webgl blue bits": l,
					"webgl depth bits": m,
					"webgl green bits": p,
					"webgl max anisotropy": q ? r : null,
					"webgl max combined texture image units": b.getParameter(b.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
					"webgl max cube map texture size": b.getParameter(b.MAX_CUBE_MAP_TEXTURE_SIZE),
					"webgl max fragment uniform vectors": b.getParameter(b.MAX_FRAGMENT_UNIFORM_VECTORS),
					"webgl max render buffer size": b.getParameter(b.MAX_RENDERBUFFER_SIZE),
					"webgl max texture image units": b.getParameter(b.MAX_TEXTURE_IMAGE_UNITS),
					"webgl max texture size": b.getParameter(b.MAX_TEXTURE_SIZE),
					"webgl max varying vectors": b.getParameter(b.MAX_VARYING_VECTORS),
					"webgl max vertex attribs": b.getParameter(b.MAX_VERTEX_ATTRIBS),
					"webgl max vertex texture image units": b.getParameter(b.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
					"webgl max vertex uniform vectors": b.getParameter(b.MAX_VERTEX_UNIFORM_VECTORS),
					"webgl max viewport dims": kf(b.getParameter(b.MAX_VIEWPORT_DIMS), b),
					"webgl red bits": b.getParameter(b.RED_BITS),
					"webgl renderer": b.getParameter(b.RENDERER),
					"webgl shading language version": b.getParameter(b.SHADING_LANGUAGE_VERSION),
					"webgl stencil bits": b.getParameter(b.STENCIL_BITS),
					"webgl vendor": b.getParameter(b.VENDOR),
					"webgl version": b.getParameter(b.VERSION)
				};
				lf(d, r, ": ");
				a: {
					try {
						var t = b.getExtension("WEBGL_debug_renderer_info");
						if (t) {
							var x = {
								"webgl unmasked vendor": b.getParameter(t.UNMASKED_VENDOR_WEBGL),
								"webgl unmasked renderer": b.getParameter(t.UNMASKED_RENDERER_WEBGL)
							};
							break a
						}
					} catch (E) {}
					x = {}
				}
				lf(d, x);
				if (!b.getShaderPrecisionFormat) return H("~", d);
				lf(d, Um(b));
				return H("~", d)
			}

			function lf(a, c, b) {
				void 0 === b && (b = ":");
				y(function(d) {
					return a.push("" + d[0] + b + d[1])
				}, Ca(c))
			}

			function Vm(a, c, b, d) {
				c = d.C("cc");
				d = D(["cc", ""], d.D);
				if (c) {
					var e = c.split("&");
					c = e[0];
					(e = (e = e[1]) && Da(e)) && 1440 < ia(a)(nb) - e ? d() : b.D("cc", c)
				} else za(0)(c) || d()
			}

			function Wm(a, c, b, d) {
				return ma(c, function(e) {
					if (!gd(e) && !be(a))
						if (e = d.C("zzlc"),
							X(e) || Va(e) || "na" === e) {
							var f = xb(a);
							if (f && (e = uc(a))) {
								var g = f("iframe");
								z(g.style, {
									display: "none",
									width: "1px",
									height: "1px",
									visibility: "hidden"
								});
								f = mf(a, 68);
								var h = nf(a, 79);
								g.src = "https://mc.yandex." + (f || h ? "md" : "ru") + Eh("L21ldHJpa2EvenpsYy5odG1s");
								e.appendChild(g);
								var k = 0,
									l = ka(a).F(a, ["message"], C(a, "zz.m", function(m) {
										(m = n(m, "data")) && m.substr && "__ym__zz" === m.substr(0, 8) && (vc(g), m = m.substr(8), d.D("zzlc", m), b.D("zzlc", m), l(), ja(a, k))
									}));
								k = S(a, w(l, u(g, vc)), 3E3)
							}
						} else b.D("zzlc", e)
				})
			}

			function Xm(a, c, b) {
				var d,
					e;
				c = hb(u(a, n), Ym);
				c = X(c) ? null : n(a, c);
				if (n(a, "navigator.onLine") && c && c && n(c, "prototype.constructor.name")) {
					var f = new c((d = {}, d.iceServers = [], d));
					a = n(f, "createDataChannel");
					R(a) && (G(a, f, "y.metrika")(), a = n(f, "createOffer"), R(a) && !a.length && (a = G(a, f)(), d = n(a, "then"), R(d) && G(d, a, function(g) {
						var h = n(f, "setLocalDescription");
						R(h) && G(h, f, g, F, F)()
					})(), z(f, (e = {}, e.onicecandidate = function() {
						var g, h = n(f, "close");
						if (R(h)) {
							h = G(h, f);
							try {
								var k = (g = n(f, "localDescription.sdp")) && g.match(/c=IN\s[\w\d]+\s([\w\d:.]+)/)
							} catch (l) {
								f.onicecandidate =
									F;
								"closed" !== f.iceConnectionState && h();
								return
							}
							k && 0 < k.length && (g = dc(k[1]), b.D("pp", g));
							f.onicecandidate = F;
							h()
						}
					}, e))))
				}
			}

			function Zm(a, c, b) {
				var d, e = hd(a, c);
				if (e) {
					e.$.F(["gpu-get"], function() {
						var h;
						return h = {}, h.type = "gpu-get", h.pu = b.C("pu"), h
					});
					var f = n(a, "opener");
					if (f) {
						var g = S(a, D([a, c, b], Fh), 200, "pu.m");
						e.qe(f, (d = {}, d.type = "gpu-get", d), function(h, k) {
							var l = n(k, "pu");
							l && (ja(a, g), b.D("pu", l))
						})
					} else Fh(a, c, b)
				}
			}

			function Fh(a, c, b) {
				var d = n(a, "location.host");
				a = id(a, c);
				b.D("pu", "" + dc(d) + a)
			}

			function $m(a) {
				a =
					xb(a);
				if (!a) return "";
				a = a("video");
				try {
					var c = Ka("canPlayType", a),
						b = tc(function(d) {
							return A(w(P, Ka("concat", d + "; codecs=")), an)
						}, Gh);
					return A(c, Gh.concat(b))
				} catch (d) {
					return "canPlayType"
				}
			}

			function bn(a) {
				var c = n(a, "matchMedia");
				if (c && Fa("matchMedia", c)) {
					var b = Ka("matchMedia", a);
					return M(function(d, e) {
						d[e] = b("(" + e + ")");
						return d
					}, {}, cn)
				}
			}

			function Um(a) {
				return M(function(c, b) {
					var d = b[0],
						e = b[1];
					c[d + " precision"] = n(e, "precision") || "n";
					c[d + " precision rangeMin"] = n(e, "rangeMin") || "n";
					c[d + " precision rangeMax"] =
						n(e, "rangeMax") || "n";
					return c
				}, {}, [
					["webgl vertex shader high float", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT)],
					["webgl vertex shader medium", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT)],
					["webgl vertex shader low float", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT)],
					["webgl fragment shader high float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT)],
					["webgl fragment shader medium float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT)],
					["webgl fragment shader low float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT)],
					["webgl vertex shader high int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT)],
					["webgl vertex shader medium int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT)],
					["webgl vertex shader low int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT)],
					["webgl fragment shader high int", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT)],
					["webgl fragment shader medium int", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,
						a.MEDIUM_INT)],
					["webgl fragment shader low int precision", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT)]
				])
			}

			function Tm(a, c) {
				return [function() {
					var b = c.createBuffer();
					b && c.getParameter && Fa("getParameter", c.getParameter) || of();
					c.bindBuffer(c.ARRAY_BUFFER, b);
					var d = new a.Float32Array(dn);
					c.bufferData(c.ARRAY_BUFFER, d, c.STATIC_DRAW);
					b.Zh = 3;
					b.ki = 3;
					d = c.createProgram();
					var e = c.createShader(c.VERTEX_SHADER);
					d && e || of();
					return {
						me: d,
						hj: e,
						gj: b
					}
				}, function(b) {
					var d = b.me,
						e = b.hj;
					c.shaderSource(e, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}");
					c.compileShader(e);
					c.attachShader(d, e);
					(d = c.createShader(c.FRAGMENT_SHADER)) || of();
					return z(b, {
						oh: d
					})
				}, function(b) {
					var d = b.me,
						e = b.oh;
					c.shaderSource(e, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}");
					c.compileShader(e);
					c.attachShader(d, e);
					c.linkProgram(d);
					c.useProgram(d);
					return b
				}, function(b) {
					var d = b.me;
					b = b.gj;
					d.fj = c.getAttribLocation(d, "attrVertex");
					d.mi = c.getUniformLocation(d, "uniformOffset");
					c.enableVertexAttribArray(d.Qj);
					c.vertexAttribPointer(d.fj,
						b.Zh, c.FLOAT, !1, 0, 0);
					c.uniform2f(d.mi, 1, 1);
					c.drawArrays(c.TRIANGLE_STRIP, 0, b.ki);
					return c.canvas
				}]
			}

			function Sm(a, c) {
				if (!R(a.Float32Array)) return !1;
				var b = n(c, "canvas");
				if (!b || !Fa("toDataUrl", b.toDataURL)) return !1;
				try {
					c.createBuffer()
				} catch (d) {
					return !1
				}
				return !0
			}

			function kf(a, c) {
				c.clearColor(0, 0, 0, 1);
				c.enable(c.DEPTH_TEST);
				c.depthFunc(c.LEQUAL);
				c.clear(c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT);
				return "[" + n(a, "0") + ", " + n(a, "1") + "]"
			}

			function en(a, c) {
				if (n(c, "settings.ins")) {
					var b = I(a);
					if (!b.C("scip")) {
						var d =
							Ra(a),
							e = ia(a)(nb),
							f = ce(d.C("sci"));
						if (!(f && 1440 >= e - f)) {
							f = na(a, "ci");
							var g = ["sync.cook.int"],
								h = function(l) {
									l = b.C("scip", "") + l;
									b.D("scip", l)
								},
								k = u("a", h);
							b.D("scip", "0");
							return f({
								Y: {
									ha: g,
									Ma: 3E3,
									zb: !0
								}
							}, ["https://an.yandex.ru/sync_cookie"]).then(function(l) {
								l = n(l.rb, "CookieMatchUrls");
								if (Z(l) && Oa(l)) {
									h("1");
									var m = na(a, "c");
									l = A(function(p, q) {
										return m({
											Y: {
												ha: g,
												Ma: 3E3
											}
										}, ["https://" + p])["catch"](w(u("b", h), u("" + q, h)))
									}, ha(fa, l));
									return L.all(l)
								}
								k()
							}, k).then(function() {
								var l = b.C("scip");
								!l || fb(l, "a") || fb(l,
									"b") || (d.D("sci", e), h("2"))
							}, F)
						}
					}
				}
			}

			function Hh(a) {
				return {
					O: function(c, b) {
						if (!c.K) return b();
						var d = I(a).C("fid");
						!Ih && d && (Xd(c, "fid", d), Ih = !0);
						return b()
					}
				}
			}

			function fn(a, c) {
				var b = a.document;
				if (J(b.readyState, ["interactive", "complete"])) Pb(a, c);
				else {
					var d = ka(a),
						e = d.F,
						f = d.wb,
						g = function() {
							f(b, ["DOMContentLoaded"], g);
							f(a, ["load"], g);
							c()
						};
					e(b, ["DOMContentLoaded"], g);
					e(a, ["load"], g)
				}
			}

			function pf(a) {
				return {
					O: function(c, b) {
						var d = c.K;
						if (d) {
							var e = I(a).C("adBlockEnabled");
							e && d.D("adb", e)
						}
						b()
					}
				}
			}

			function gn(a) {
				var c =
					C(a, "i.clch", hn);
				ka(a).F(a.document, ["click"], u(a, c), {
					passive: !1
				});
				return function(b) {
					var d = ua.Pa,
						e = a.Ya[ua.cc],
						f = !!e._informer;
					e._informer = z({
						domain: "informer.yandex.ru"
					}, b);
					f || cd(a, {
						src: d + "//informer.yandex.ru/metrika/informer.js"
					})
				}
			}

			function jn(a, c) {
				var b = Ra(a),
					d = b.C,
					e = b.D;
				if ("" === d("cc")) {
					e("cc", 0);
					var f = ia(a),
						g = I(a);
					na(a, "6", c)({
						Y: {
							zb: !0,
							Yc: !1
						}
					}, ["https://mc.yandex.md/cc"]).then(function(h) {
						h = n(h.rb, "c");
						e("cc", h + "&" + f(nb));
						g.D("cc", h)
					})["catch"](function(h) {
						var k = f(nb);
						e("cc", "&" + k);
						jd(a, "cc",
							h)
					})
				}
			}

			function de(a, c) {
				if (!c) return !1;
				var b = T(a);
				return (new RegExp(c)).test("" + b.pathname + b.hash + b.search)
			}

			function kn(a, c) {
				return ma(c, function(b) {
					var d = n(b, "settings.dr");
					return {
						Xg: ln(a, d),
						isEnabled: n(b, "settings.auto_goals")
					}
				})
			}

			function mn(a, c, b, d, e) {
				b = qf(a.document.body, b);
				d = qf(a.document.body, d);
				J(e.target, [b, d]) && rf(a, c)
			}

			function Jh(a, c, b, d) {
				(b = nn(a, d, b)) && rf(a, c, b)
			}

			function Kh(a, c) {
				var b = Lh(a, c);
				return on(a, b)
			}

			function Lh(a, c) {
				var b = qf(a.document.body, c);
				return b ? pn(a, b) : ""
			}

			function rf(a, c,
				b) {
				if (c = Ja(a, c)) a = ee(["dr", b || "" + Wa(a, 10, 99)]), c.params(ee(["__ym", a]))
			}

			function qf(a, c) {
				var b = null;
				try {
					b = c ? bc(c, a) : b
				} catch (d) {}
				return b
			}

			function Mh(a) {
				a = Ga(Eh(a));
				return A(function(c) {
					c = c.charCodeAt(0).toString(2);
					return Nh("0", 8, c)
				}, a)
			}

			function pn(a, c) {
				if (!c) return "";
				var b = [],
					d = n(a, "document");
				ae(a, c, function(e) {
					if (e.nodeType === d.TEXT_NODE) var f = e.textContent;
					else e instanceof a.HTMLImageElement ? f = e.alt : e instanceof a.HTMLInputElement && (f = e.value);
					(f = f && Za(f)) && b.push(f)
				});
				return 0 === b.length ? "" :
					H(" ", b)
			}

			function qn(a, c, b) {
				a = Na(b);
				b = a[1];
				"track" === a[0] && c({
					version: "0",
					kc: b
				})
			}

			function rn(a, c, b) {
				if (b) {
					var d = b.version;
					(b = n(sn, d + "." + b.kc)) && (c && J(b, tn) || a("ym-" + b + "-" + d))
				}
			}

			function un(a, c, b) {
				if ("rt" === b) return "https://" + Oh(a, c) + ".mc.yandex.ru/watch/3/1";
				if ("mf" === b) {
					b = T(a);
					b = fe(b.protocol + "//" + b.hostname + b.pathname);
					c = id(a, c);
					var d = "";
					do d += Wa(a); while (d.length < c.length);
					d = d.slice(0, c.length);
					a = "";
					for (var e = 0; e < c.length; e += 1) a += (c.charCodeAt(e) + d.charCodeAt(e) - 96) % 10;
					a = [d, a];
					return "https://adstat.yandex.ru/track?service=metrika&id=" +
						a[1] + "&mask=" + a[0] + "&ref=" + b
				}
			}

			function vn(a, c, b) {
				var d, e = sf(c).Nb;
				return na(a, "pi", c)({
					K: Ha((d = {}, d[e] = 1, d))
				}, [b])
			}

			function wn(a, c, b) {
				return new L(function(d, e) {
					if (Ph(a, ge, "isp")) {
						var f = F,
							g = function(h) {
								("1" === h ? d : e)();
								f();
								Qh(ge, "isp")
							};
						f = ka(a).F(a, ["message"], D([b, g], C(a, "isp.stat.m", xn)));
						S(a, g, 1500)
					} else e()
				})
			}

			function xn(a, c, b) {
				var d = n(b, "data");
				if (fa(d)) {
					var e = d.split("*");
					d = e[0];
					var f = e[1];
					e = e[2];
					"sc.frame" === d && b.source ? b.source.postMessage("sc.images*" + a, "*") : "sc.image" === d && f === a && c(e)
				}
			}

			function yn(a,
				c) {
				var b = Ra(a),
					d = "wv2rf:" + K(c),
					e = c.$b,
					f = tf(a),
					g = b.C(d),
					h = c.Zi;
				return X(f) || Va(g) ? Aa(function(k, l) {
					ma(c, function(m) {
						var p = !!n(m, "settings.webvisor.forms");
						p = !n(m, "settings.x3") && p;
						f = tf(a) || n(m, "settings.eu");
						b.D(d, pb(p));
						l({
							$b: e,
							Od: !!f,
							Gf: p,
							ig: h
						})
					})
				}) : uf({
					$b: e,
					Od: f,
					Gf: !!Da(g),
					ig: h
				})
			}

			function zn() {
				var a = M(function(c, b) {
					c[b[0]] = {
						ed: 0,
						Gg: 1 / b[1]
					};
					return c
				}, {}, [
					["blur", .0034],
					["change", .0155],
					["click", .01095],
					["deviceRotation", 2E-4],
					["focus", .0061],
					["mousemove", .5132],
					["scroll", .4795],
					["selection", .0109],
					["touchcancel", 2E-4],
					["touchend", .0265],
					["touchforcechange", .0233],
					["touchmove", .1442],
					["touchstart", .027],
					["zoom", .0014]
				]);
				return {
					Cg: function(c) {
						if (c.length) return {
							type: "activity",
							data: M(function(b, d) {
								var e = a[d];
								return Math.round(b + e.ed * e.Gg)
							}, 0, ea(a))
						}
					},
					ni: function(c) {
						c && (c = a[c.data.type || c.event]) && (c.ed += 1)
					}
				}
			}

			function An(a) {
				return {
					qh: function() {
						var c = a.document.querySelector("base[href]");
						return c ? c.getAttribute("href") : null
					},
					sh: function() {
						if (a.document.doctype) {
							var c = z({
									name: "html",
									publicId: "",
									systemId: ""
								}, a.document.doctype),
								b = c.publicId,
								d = c.systemId;
							return "<!DOCTYPE " + H("", [c.name, b ? ' PUBLIC "' + b + '"' : "", !b && d ? " SYSTEM" : "", d ? ' "' + d + '"' : ""]) + ">"
						}
						return null
					}
				}
			}

			function Bn(a, c, b) {
				var d = kd(a),
					e = ka(a),
					f = ob(a),
					g = c.Ad(),
					h = !n(a, "postMessage") || f && !n(a, "parent.postMessage"),
					k = u(d, P);
				if (h) {
					if (!g) return S(a, G(d.aa, d, "i", {
						ta: !1
					}), 10), {
						zd: k,
						Tf: F,
						stop: F
					};
					Ta(Pa())
				}
				d.F(["sr"], function(r) {
					var t, x = Rh(a, r.source);
					x && vf(a, r.source, (t = {}, t.type = "\u043d", t.frameId = c.ra().Z(x), t))
				});
				d.F(["sd"], function(r) {
					var t =
						r.data;
					r = r.source;
					(a === r || Rh(a, r)) && d.aa("sdr", {
						data: t.data,
						frameId: t.frameId
					})
				});
				if (f && !g) {
					var l = !1,
						m = 0,
						p = function() {
							var r;
							vf(a, a.parent, (r = {}, r.type = "sr", r));
							m = S(a, p, 100, "if.i")
						};
					p();
					var q = function(r) {
						d.ga(["\u043d"], q);
						ja(a, m);
						var t = wc(a, r.origin).host;
						l || r.source !== a.parent || !r.data.frameId || "about:blank" !== T(a).host && !J(t, b) || (l = !0, d.aa("i", {
							frameId: r.data.frameId,
							ta: !0
						}))
					};
					d.F(["\u043d"], q);
					S(a, function() {
						d.ga(["\u043d"], q);
						ja(a, m);
						l || (l = !0, d.aa("i", {
							ta: !1
						}))
					}, 2E3, "if.r")
				}
				e = e.F(a, ["message"],
					function(r) {
						var t = Qb(a, r.data);
						t && t.type && J(t.type, Cn) && d.aa(t.type, {
							data: t,
							source: r.source,
							origin: r.origin
						})
					});
				return {
					zd: k,
					Tf: function(r) {
						var t;
						return vf(a, a.parent, (t = {}, t.frameId = c.Ad(), t.data = r, t.type = "sd", t))
					},
					stop: e
				}
			}

			function Rh(a, c) {
				try {
					return hb(w(U("contentWindow"), za(c)), Ga(a.document.querySelectorAll("iframe")))
				} catch (b) {
					return null
				}
			}

			function vf(a, c, b) {
				c || Ta(Pa());
				a = Kb(a, b);
				c.postMessage(a, "*")
			}

			function Sh() {
				return ec() + ec() + "-" + ec() + "-" + ec() + "-" + ec() + "-" + ec() + ec() + ec()
			}

			function ec() {
				return Math.floor(65536 *
					(1 + Math.random())).toString(16).substring(1)
			}

			function Dn(a, c) {
				if (fa(c)) return c;
				var b = a.textContent;
				if (fa(b)) return b;
				b = a.data;
				if (fa(b)) return b;
				b = a.nodeValue;
				return fa(b) ? b : ""
			}

			function En(a, c, b, d, e) {
				void 0 === d && (d = {});
				void 0 === e && (e = La(c));
				var f = z(M(function(h, k) {
					h[k.name] = k.value;
					return h
				}, {}, Ga(c.attributes)), d);
				z(f, Fn(c, e, f));
				var g = (d = yb(function(h, k) {
					var l = k[0],
						m = he(a, c, l, k[1], b, e),
						p = m.value;
					da(p) ? delete f[l] : f[l] = p;
					return h || m.lb
				}, !1, Ca(f))) && Jc(c);
				g && (f.width = g.width, f.height = g.height);
				return {
					lb: d,
					Dg: f
				}
			}

			function Fn(a, c, b) {
				var d = {};
				wf(a) ? d.value = a.value || b.value : "IMG" !== c || b.src || (d.src = "");
				return d
			}

			function he(a, c, b, d, e, f) {
				void 0 === f && (f = La(c));
				var g = {
					lb: !1,
					value: d
				};
				if (wf(c)) "value" === b ? !da(d) && "" !== d && (b = e.Od, f = e.Gf, e = ld(a, c), f ? (b = Mc(a, c, b), a = b.mb, c = b.eb, b = b.Ua, g.lb = !c && (e || a)) : (g.lb = e, b = !(c && fc("ym-record-keys", c))), b || e) && (d = "" + d, g.value = 0 < d.length ? Th("\u2022", d.length) : "") : "checked" === b && J((c.getAttribute("type") || "").toLowerCase(), Gn) ? g.value = c.checked ? "checked" : null : Hn.test(b) && xf(a,
					c) && (g.value = null);
				else if ("IMG" === f && "src" === b)(e = ld(a, c)) ? (g.lb = e, g.value = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=") : g.value = (c.getAttribute("srcset") ? c.currentSrc : "") || c.src;
				else if ("A" === f && "href" === b) g.value = d ? "#" : "";
				else if (J(b, ["srcset", "integrity", "crossorigin", "password"]) || 2 < b.length && 0 === mb(b, "on") || "IFRAME" === f && "src" === b || "SCRIPT" === f && J(b, ["src", "type"])) g.value = null;
				return g
			}

			function yf(a, c, b, d) {
				void 0 === d &&
					(d = "wv2");
				return {
					H: function(e, f) {
						return C(a, d + "." + b + "." + f, e, void 0, c)
					}
				}
			}

			function In(a, c, b, d, e) {
				function f() {
					l && l.stop()
				}
				if (!c.yb) return L.resolve(F);
				var g = na(a, "4", c),
					h = {
						K: Ha()
					},
					k = new Jn(a, b, function(m, p, q) {
						if (!g) return L.resolve();
						var r = "wv-data=" + md(m, !0),
							t = C(a, "m.n.m.s");
						p = {};
						p["wv-part"] = "" + q;
						q = m.length;
						for (var x = 0, E = 255, O = 255, N, ya, Ba; q;) {
							N = 21 < q ? 21 : q;
							q -= N;
							do ya = "string" === typeof m ? m.charCodeAt(x) : m[x], x += 1, 255 < ya && (Ba = ya >> 8, ya &= 255, ya ^= Ba), E += ya, O += E; while (--N);
							E = (E & 255) + (E >> 8);
							O = (O & 255) + (O >>
								8)
						}
						m = (E & 255) + (E >> 8) << 8 | (O & 255) + (O >> 8);
						return g(z({}, h, {
							Y: {
								ca: r
							},
							J: (p["wv-check"] = "" + (65535 === m ? 0 : m), p["wv-type"] = b.type, p)
						}), c)["catch"](t)
					}),
					l = Kn(a, k, d, e);
				return ma(c, function(m) {
					m && I(a).D("isEU", n(m, "settings.eu"));
					I(a).C("oo") || l && Uh(a, m) && l.start();
					return f
				})
			}

			function Kn(a, c, b, d) {
				var e = a.document,
					f = [],
					g = ka(a),
					h = ":submit" + Math.random(),
					k = [],
					l = G(c.flush, c),
					m = oa(function(r, t) {
						C(a, "hfv." + r, function() {
							try {
								var x = t.type
							} catch (E) {
								return
							}
							x = J(x, d);
							c.push(t, {
								type: r
							});
							x && l()
						})()
					}),
					p = C(a, "sfv", function() {
						var r =
							b(a),
							t = Ln(a);
						y(function(x) {
							f.push(g.F(x.target, [x.event], m(x.type)))
						}, r);
						y(function(x) {
							f.push(g.F(x.target, [x.event], C(a, "hff." + x.type + "." + x.event, function(E) {
								y(Aa({
									l: a,
									na: E,
									flush: l
								}), x.R)
							})))
						}, t);
						k = Vh(a, "form", e);
						e.attachEvent && (r = Vh(a, "form *", e), y(function(x) {
							f.push(g.F(x, ["submit"], m("form")))
						}, k), y(function(x) {
							zf(x) && f.push(g.F(x, ["change"], m("formInput")))
						}, r));
						y(function(x) {
							var E = x.submit;
							if (R(E) || "object" === typeof E && Mn.test("" + E)) x[h] = E, x.submit = C(a, "fv", function() {
								var O = {
									target: x,
									type: "submit"
								};
								m("document")(O);
								return x[h]()
							})
						}, k)
					}),
					q = C(a, "ufv", function() {
						y(xa, f);
						y(function(r) {
							r && (r.submit = r[h])
						}, k);
						c.flush()
					});
				return {
					start: p,
					stop: q
				}
			}

			function Nn(a, c) {
				var b = ha(function(e) {
						return 0 < e.R.length
					}, c),
					d = Wh({
						target: a.document,
						type: "document"
					});
				return A(w(P, d, On(a)), b)
			}

			function Xh(a, c) {
				var b = a.l,
					d = [],
					e = c.form;
				if (!c[Xa] && e) {
					var f = e.elements;
					e = e.length;
					for (var g = 0; g < e; g += 1) {
						var h = f[g];
						ie(h) && !h[Xa] && va(d, xc(b, h))
					}
				} else va(d, xc(b, c));
				return d
			}

			function Af(a) {
				if (nd) {
					nd = !1;
					var c = zb(a.l),
						b = [];
					ib(a.l, b,
						15) ? a = [] : (Q(b, c), a = b);
					return a
				}
			}

			function Yh(a) {
				if (!nd) {
					nd = !0;
					a = zb(a.l);
					var c = [];
					Rb(c, 14);
					Q(c, a);
					return c
				}
			}

			function Pn(a, c, b) {
				var d = c[Xa];
				if (d) {
					a: {
						var e = zb(a),
							f = c[Xa];
						if (0 < f) {
							var g = [];
							c = Bf(a, c);
							var h = yc[f],
								k = c[0] + "x" + c[1],
								l = c[2] + "x" + c[3];
							if (k !== h.Cf) {
								h.Cf = k;
								if (ib(a, g, 9)) {
									a = [];
									break a
								}
								Q(g, e);
								Q(g, f);
								Q(g, c[0]);
								Q(g, c[1])
							}
							if (l !== h.size) {
								h.size = l;
								if (ib(a, g, 10)) {
									a = [];
									break a
								}
								Q(g, e);
								Q(g, f);
								Q(g, c[2]);
								Q(g, c[3])
							}
							if (g.length) {
								a = g;
								break a
							}
						}
						a = []
					}
					va(b, a)
				}
				return d
			}

			function Mc(a, c, b) {
				void 0 === b && (b = !1);
				if (!c) return {
					Ua: !1,
					eb: !1,
					mb: !1
				};
				var d = c.getAttribute("type") || c.type;
				if ("button" === d) return {
					Ua: !1,
					eb: !1,
					mb: !1
				};
				var e = ha(Zh, [c.className, c.id, c.name]),
					f = c && fc("ym-record-keys", c);
				d = d && J(d, $h) || Ua(cb(Qn), e);
				var g;
				(g = d) || (g = c.placeholder, g = Ua(cb(Rn), e) || Zh(g) && Sn.test(g || ""));
				e = g;
				return {
					Ua: !f && (Cf(a, c) || e && b || e && !d && !b),
					eb: f,
					mb: e
				}
			}

			function Cf(a, c) {
				return xf(a, c) || od(a, c) ? !0 : ld(a, c)
			}

			function Zh(a) {
				return !!(a && 2 < a.length)
			}

			function wf(a) {
				try {
					var c = La(a);
					if (J(c, Df)) {
						if ("INPUT" === c) {
							var b = a.type;
							return !b || J(b.toLocaleLowerCase(),
								Tn)
						}
						return !0
					}
				} catch (d) {}
				return !1
			}

			function ai(a, c) {
				return c && fc("(ym-disable-submit|-metrika-noform)", c)
			}

			function Un(a, c) {
				return H("", A(function(b) {
					return a.isNaN(b) ? Vn.test(b) ? (b = b.toUpperCase() === b ? Wn : Xn, String.fromCharCode(Wa(a, b[0], b[1]))) : b : "" + Wa(a, 0, 9)
				}, c.split("")))
			}

			function ld(a, c) {
				if (da(c)) return !1;
				if (Ef(c)) {
					var b = c.parentNode;
					return (da(b) ? 0 : 11 === b.nodeType) ? !1 : ld(a, c.parentNode)
				}
				b = bi(a);
				if (!b) return !1;
				var d = b.call(c, ".ym-hide-content,.ym-hide-content *");
				return d && b.call(c, ".ym-show-content,.ym-hide-content .ym-show-content *") ?
					!1 : d
			}

			function Uh(a, c) {
				var b = Nc(a),
					d = b.C("visorc");
				J(d, ["w", "b"]) || (d = "");
				ci(a) && di(a, pd, "visorc") && !Yn.test(qb(a) || "") || (d = "b");
				var e = n(c, "settings.webvisor.recp");
				if (!a.isFinite(e) || 0 > e || 1 < e) d = "w";
				d || (d = I(a).C("hitId") % 1E4 / 1E4 < e ? "w" : "b");
				b.D("visorc", d, 30);
				return "w" === d
			}

			function ei(a, c, b) {
				if (fi.isEnabled(a)) return new fi(a, c);
				if (gi.isEnabled(a)) return new gi(a, b)
			}

			function hi(a, c) {
				var b = c[1][3],
					d = 0,
					e = new a.Uint8Array(c[0]);
				return cc([b], function(f, g) {
					if (!f) return e;
					f[0](a, f[2], e, d);
					d += f[1];
					g.push(f[3]);
					return e
				})
			}

			function ii(a, c, b) {
				a = c(b);
				c = [F, 0, 0];
				var d = [0, c, c, void 0];
				return cc(a, function(e, f) {
					var g = e[0],
						h = e[1],
						k = e[2];
					if (0 === g) return k(d, h), d;
					if (void 0 === h || null === h) return d;
					var l = g >> 3;
					if (g & 1) zc(d, V(l)), h = k(h), l & 2 && zc(d, V(h[1])), zc(d, h);
					else if (g & 4)
						for (g = h.length - 1; 0 <= g;) {
							var m = k(h[g]);
							m.push([0, 0, Ff]);
							m.push([0, V(l), zc]);
							m.unshift([0, 0, Gf]);
							va(f, m);
							--g
						} else if (g & 2) {
							k = e[2];
							var p = e[3],
								q = e[4],
								r = e[5],
								t = ea(h);
							for (g = t.length - 1; 0 <= g;) m = t[g], m = [
									[0, 0, Gf],
									[q, h[m], r],
									[k, m, p],
									[0, 0, Ff],
									[0, V(l), zc]
								], va(f, m),
								--g
						} else m = k(h), m.push([0, 0, Ff]), m.push([0, V(l), zc]), m.unshift([0, 0, Gf]), va(f, m);
					return d
				})
			}

			function Gf(a) {
				var c = a[1],
					b = a[0],
					d = a[2];
				a[3] ? (a[0] = a[3][0], a[1] = a[3][1], a[2] = a[3][2], a[3] = a[3][3]) : (a[0] = 0, a[1] = [F, 0, 0], a[2] = a[1]);
				zc(a, V(b));
				b && (a[2][3] = c[3], a[2] = d, a[0] += b)
			}

			function Ff(a) {
				a[3] = [a[0], a[1], a[2], a[3]];
				a[1] = [F, 0, 0];
				a[2] = a[1];
				a[0] = 0
			}

			function zc(a, c) {
				a[0] += c[1];
				a[2][3] = c;
				a[2] = c
			}

			function ji(a) {
				return [
					[1857, a.partsTotal, V],
					[1793, a.activity, V],
					[1744, a.textChangeMutation, Zn],
					[1680, a.removedNodesMutation,
						$n
					],
					[1616, a.addedNodesMutation, ao],
					[1552, a.attributesChangeMutation, bo],
					[1488, a.publishersHeader, co],
					[1424, a.articleInfo, eo],
					[1360, a.focusEvent, fo],
					[1296, a.fatalErrorEvent, go],
					[1232, a.deviceRotationEvent, ho],
					[1168, a.keystrokesEvent, io],
					[1104, a.resizeEvent, jo],
					[1040, a.zoomEvent, ko],
					[976, a.touchEvent, lo],
					[912, a.changeEvent, mo],
					[848, a.selectionEvent, no],
					[784, a.scrollEvent, oo],
					[720, a.mouseEvent, po],
					[656, a.Nj, qo],
					[592, a.page, ro],
					[513, a.end, Ac],
					[449, a.partNum, V],
					[401, a.chunk, so],
					[257, a.frameId, ra],
					[193,
						a.event, V
					],
					[129, a.type, V],
					[65, a.stamp, V]
				]
			}

			function to(a) {
				return [
					[84, a.Di, ji]
				]
			}

			function uo(a) {
				return [
					[129, a.position, ra],
					[81, a.name, ba]
				]
			}

			function vo(a) {
				return [
					[81, a.name, ba]
				]
			}

			function wo(a) {
				return [
					[81, a.name, ba]
				]
			}

			function eo(a) {
				return [
					[593, a.updateDate, ba],
					[532, a.rubric, uo],
					[449, a.chars, ra],
					[401, a.publicationDate, ba],
					[340, a.topics, vo],
					[276, a.authors, wo],
					[209, a.pageTitle, ba],
					[145, a.pageUrlCanonical, ba],
					[65, a.id, V]
				]
			}

			function xo(a) {
				return [
					[513, a.chars, ra],
					[489, a.maxScrolled, qd],
					[385, a.involvedTime, ra],
					[321, a.height, ra],
					[257, a.width, ra],
					[193, a.y, ra],
					[129, a.x, ra],
					[65, a.id, V]
				]
			}

			function co(a) {
				return [
					[129, a.involvedTime, ra],
					[84, a.articleMeta, xo]
				]
			}

			function fo(a) {
				return [
					[65, a.target, ra]
				]
			}

			function go(a) {
				return [
					[209, a.stack, ba],
					[145, a.bh, ba],
					[81, a.code, ba]
				]
			}

			function ho(a) {
				return [
					[193, a.orientation, ra],
					[129, a.height, V],
					[65, a.width, V]
				]
			}

			function io(a) {
				return [
					[84, a.keystrokes, yo]
				]
			}

			function yo(a) {
				return [
					[273, a.modifier, ba],
					[193, a.isMeta, Ac],
					[145, a.key, ba],
					[65, a.id, V]
				]
			}

			function jo(a) {
				return [
					[257, a.pageHeight,
						V
					],
					[193, a.pageWidth, V],
					[129, a.height, V],
					[65, a.width, V]
				]
			}

			function ko(a) {
				return [
					[193, a.y, ra],
					[129, a.x, ra],
					[105, a.level, qd]
				]
			}

			function lo(a) {
				return [
					[129, a.target, ra],
					[84, a.touches, zo]
				]
			}

			function zo(a) {
				return [
					[297, a.force, qd],
					[233, a.y, qd],
					[169, a.x, qd],
					[81, a.id, ba]
				]
			}

			function mo(a) {
				return [
					[257, a.target, ra],
					[193, a.hidden, Ac],
					[129, a.checked, Ac],
					[81, a.value, ba]
				]
			}

			function no(a) {
				return [
					[257, a.endNode, V],
					[193, a.startNode, V],
					[129, a.end, ra],
					[65, a.start, ra]
				]
			}

			function oo(a) {
				return [
					[257, a.target, ra],
					[193, a.page, Ac],
					[129, a.y, ra],
					[65, a.x, ra]
				]
			}

			function po(a) {
				return [
					[193, a.target, ra],
					[129, a.y, V],
					[65, a.x, V]
				]
			}

			function qo(a) {
				return [
					[148, a.changes, Ao],
					[65, a.target, ra]
				]
			}

			function Ao(a) {
				return [
					[193, a.index, V],
					[145, a.op, ba],
					[81, a.style, ba]
				]
			}

			function Zn(a) {
				return [
					[209, a.value, ba],
					[129, a.index, V],
					[65, a.target, V]
				]
			}

			function $n(a) {
				return [
					[129, a.index, V],
					[69, a.nodes, ra]
				]
			}

			function ao(a) {
				return [
					[129, a.index, V],
					[84, a.nodes, ki]
				]
			}

			function bo(a) {
				return [
					[210, a.attributes, 81, ba, 145, ba],
					[129, a.index, V],
					[65, a.target, V]
				]
			}

			function ro(a) {
				return [
					[852,
						a.content, ki
					],
					[785, a.tabId, ba],
					[705, a.recordStamp, Bo],
					[656, a.location, Co],
					[592, a.viewport, li],
					[528, a.screen, li],
					[449, a.hasBase, Ac],
					[401, a.base, ba],
					[337, a.referrer, ba],
					[273, a.ua, ba],
					[209, a.address, ba],
					[145, a.title, ba],
					[81, a.doctype, ba]
				]
			}

			function Co(a) {
				return [
					[209, a.path, ba],
					[145, a.protocol, ba],
					[81, a.host, ba]
				]
			}

			function li(a) {
				return [
					[129, a.height, ra],
					[65, a.width, ra]
				]
			}

			function ki(a) {
				return [
					[513, a.hidden, Ac],
					[449, a.prev, V],
					[385, a.next, V],
					[337, a.content, ba],
					[257, a.parent, V],
					[210, a.attributes, 81, ba, 145,
						ba
					],
					[145, a.name, ba],
					[65, a.id, V]
				]
			}

			function ba(a) {
				var c = Do({}, a, [], 0);
				return c ? [Eo, c, a] : [mi, 0, 0]
			}

			function so(a) {
				return [Fo, a.length, a]
			}

			function Ac(a) {
				return [mi, 1, a ? 1 : 0]
			}

			function Bo(a) {
				a = ni(a);
				var c = a[0],
					b = a[1],
					d = (b >>> 28 | c << 4) >>> 0;
				c >>>= 24;
				return [oi, 0 === c ? 0 === d ? 16384 > b ? 128 > b ? 1 : 2 : 2097152 > b ? 3 : 4 : 16384 > d ? 128 > d ? 5 : 6 : 2097152 > d ? 7 : 8 : 128 > c ? 9 : 10, a]
			}

			function qd(a) {
				return [Go, 4, a]
			}

			function ra(a) {
				return 0 > a ? [oi, 10, ni(a)] : V(a)
			}

			function V(a) {
				return [Ho, 128 > a ? 1 : 16384 > a ? 2 : 2097152 > a ? 3 : 268435456 > a ? 4 : 5, a]
			}

			function Ho(a, c, b,
				d) {
				for (a = c; 127 < a;) b[d++] = a & 127 | 128, a >>>= 7;
				b[d] = a
			}

			function mi(a, c, b, d) {
				b[d] = c
			}

			function Fo(a, c, b, d) {
				for (a = 0; a < c.length; ++a) b[d + a] = c[a]
			}

			function pi(a) {
				return function(c, b, d, e) {
					for (var f, g = 0, h = 0; h < b.length; ++h)
						if (c = b.charCodeAt(h), 128 > c) a ? g += 1 : d[e++] = c;
						else {
							if (2048 > c) {
								if (a) {
									g += 2;
									continue
								}
								d[e++] = c >> 6 | 192
							} else {
								if (55296 === (c & 64512) && 56320 === ((f = b.charCodeAt(h + 1)) & 64512)) {
									if (a) {
										g += 4;
										continue
									}
									c = 65536 + ((c & 1023) << 10) + (f & 1023);
									++h;
									d[e++] = c >> 18 | 240;
									d[e++] = c >> 12 & 63 | 128
								} else {
									if (a) {
										g += 3;
										continue
									}
									d[e++] = c >> 12 | 224
								}
								d[e++] =
									c >> 6 & 63 | 128
							}
							d[e++] = c & 63 | 128
						}
					return a ? g : e
				}
			}

			function Go(a, c, b, d) {
				return Io(a)(a, c, b, d)
			}

			function Jo(a, c, b, d) {
				var e = 0 > c ? 1 : 0;
				e && (c = -c);
				if (0 === c) rd(0 < 1 / c ? 0 : 2147483648, b, d);
				else if (a.isNaN(c)) rd(2143289344, b, d);
				else if (3.4028234663852886E38 < c) rd((e << 31 | 2139095040) >>> 0, b, d);
				else if (1.1754943508222875E-38 > c) rd((e << 31 | a.Math.round(c / 1.401298464324817E-45)) >>> 0, b, d);
				else {
					var f = a.Math.floor(a.Math.log(c) / Math.LN2);
					rd((e << 31 | f + 127 << 23 | Math.round(c * a.Math.pow(2, -f) * 8388608) & 8388607) >>> 0, b, d)
				}
			}

			function rd(a, c, b) {
				c[b] =
					a & 255;
				c[b + 1] = a >>> 8 & 255;
				c[b + 2] = a >>> 16 & 255;
				c[b + 3] = a >>> 24
			}

			function oi(a, c, b, d) {
				a = c[0];
				for (c = c[1]; a;) b[d++] = c & 127 | 128, c = (c >>> 7 | a << 25) >>> 0, a >>>= 7;
				for (; 127 < c;) b[d++] = c & 127 | 128, c >>>= 7;
				b[d++] = c
			}

			function ni(a) {
				if (!a) return [0, 0];
				var c = 0 > a;
				c && (a = -a);
				var b = a >>> 0;
				a = (a - b) / 4294967296 >>> 0;
				c && (a = ~a >>> 0, b = ~b >>> 0, 4294967295 < ++b && (b = 0, 4294967295 < ++a && (a = 0)));
				return [a, b]
			}

			function qi(a, c, b, d) {
				var e, f = b.J;
				f.wmode = "0";
				f["wv-hit"] = f["wv-hit"] || "" + Bc(a);
				f["page-url"] = f["page-url"] || T(a).href;
				d && (f[d] = f[d] || "" + Wa(a));
				a = {
					ma: {
						za: "webvisor/" +
							c.id
					},
					Y: z(b.Y || {}, {
						Xa: (e = {}, e["Content-Type"] = "text/plain", e),
						Xc: "POST"
					}),
					J: f
				};
				z(b, a)
			}

			function Ko(a, c) {
				return ma(c, function(b) {
					var d = I(a),
						e = d.C,
						f = u("dSync", d.D);
					K(c);
					if (e("dSync", !1)) f(1);
					else return f(!0), ri(a, b, {
						bb: c,
						Nb: "s",
						Ud: "ds",
						Tc: f,
						Pi: function(g, h, k) {
							var l = g.rb;
							g = g.host;
							if (n(l, "settings")) return Ta(Pa("ds.e"));
							h = h(ca) - k;
							k = g[1];
							var m, p;
							l = Ha((m = {}, m.di = l, m.dit = h, m.dip = k, m));
							m = (p = {}, p["page-url"] = T(a).href, p);
							return na(a, "S", si)({
								K: l,
								J: m
							}, si).then(u(10, f), C(a, "ds.rs"))
						}
					})
				})
			}

			function ri(a, c, b) {
				var d,
					e = b.bb,
					f = b.Tc;
				f = void 0 === f ? F : f;
				var g = ia(a),
					h = Lo(a, c.userData, e),
					k = Mo(a),
					l = w(ti, D([No, Oo], je))(a),
					m = n(c, "settings.sbp");
				b.Tc = f;
				m && (b.data = z({}, m, (d = {}, d.c = e.id, d)));
				return k.length ? Po(a, g, h, c, l, b).then(function() {
					return Qo(a, k, h, g, l, b)
				}, F) : (f(2), L.resolve())
			}

			function Mo(a) {
				var c = ke(a);
				a = w(ui, qc(["iPhone", "iPad"]))(a);
				return c ? Ro : a ? So : []
			}

			function Qo(a, c, b, d, e, f) {
				e = f.Pi;
				var g = void 0 === e ? F : e,
					h = f.Ud;
				e = f.Tc;
				var k = void 0 === e ? F : e,
					l = d(ca);
				return To(a, c, f)(Ya(function(m) {
					k(6);
					y(function(p) {
							p && jd(a, h + ".s", p)
						},
						m);
					m = d(nb);
					b.D(h, m).then(u(7, k))
				}, function(m) {
					k(8);
					b.D(h, d(nb)).then(u(9, k));
					g(m, d, l)
				}))
			}

			function Po(a, c, b, d, e, f) {
				var g = f.Ud,
					h = f.bb,
					k = f.Tc;
				return new L(function(l, m) {
					var p = b.C(g, 0);
					p = parseInt("" + p, 10);
					return c(nb) - p <= e.dg ? (k(3), m()) : Uo(a) ? l(void 0) : gd(d) ? (k(4), m()) : l(Vo(a, h)["catch"](w(Oc(u(5, k)), Ta)))
				})
			}

			function To(a, c, b) {
				var d = b.Nb,
					e = b.data,
					f = na(a, d, b.bb);
				a = z({}, vi);
				e && z(a.J, e);
				return Wo(A(function(g) {
					return Xo(f(z({
						Y: {
							Yc: !1,
							Oc: !0
						}
					}, vi), A(function(h) {
						var k = h[1],
							l = h[2];
						h = H("", A(function(m) {
							return String.fromCharCode(m.charCodeAt(0) +
								10)
						}, h[0].split("")));
						return "http" + (l ? "s" : "") + "://" + h + ":" + k + "/" + Yo[d]
					}, g)).then(function(h) {
						return z({}, h, {
							host: g[h.kg]
						})
					}))
				}, c))
			}

			function Lo(a, c, b) {
				var d = c || {},
					e = na(a, "u", b),
					f = Ra(a);
				return {
					C: function(g, h) {
						return X(d[g]) ? f.C(g, h) : d[g]
					},
					D: function(g, h) {
						var k, l = "" + h;
						d[g] = l;
						f.D(g, l);
						return e({
							J: (k = {}, k.key = g, k.value = l, k)
						}, [ua.Pa + "//" + gc + "/user_storage_set"], {})["catch"](C(a, "u.d.s.s"))
					}
				}
			}

			function Zo(a, c) {
				try {
					var b = c[0];
					var d = b[1]
				} catch (e) {
					return function() {
						return L.resolve()
					}
				}
				return function(e) {
					var f,
						g = (f = {}, f["browser-info"] = $o, f["page-url"] = a.location && "" + a.location.href, f);
					return d && (e = Kb(a, e)) ? d(ap, {
						Za: g,
						ha: [],
						ca: "site-info=" + fe(e)
					})["catch"](F) : L.resolve()
				}
			}

			function bp(a, c) {
				var b = le(function(d, e) {
					return d[1].ea > e[1].ea ? 1 : -1
				}, Ca(wb));
				b = A(function(d) {
					var e = d[0],
						f = d[1].ob;
					d = hc(c, e) && !da(c[e]);
					e = c[e] !== (f || P)(void 0);
					return pb(d && e)
				}, b);
				return me(H("", b))
			}

			function cp(a) {
				if (sd(a)) return null;
				var c = dp(a),
					b = c.Ff;
				X(b) && (c.Ff = null, ep(a).then(function(d) {
					c.Ff = d
				}));
				return b ? 1 : null
			}

			function fp(a, c, b) {
				b =
					b.J;
				if ((void 0 === b ? {} : b).nohit) return null;
				a = td(a);
				if (!a) return null;
				var d = b = null;
				n(a, "getEntriesByType") && (d = n(a.getEntriesByType("navigation"), "0")) && (b = gp);
				if (!b) {
					var e = n(a, "timing");
					e && (b = hp, d = e)
				}
				if (!b) return null;
				a = ip(a, d, b);
				c = K(c);
				c = jp(c);
				return (c = kp(c, a)) && H(",", c)
			}

			function kp(a, c) {
				var b = a.length ? A(function(d, e) {
					var f = c[e];
					return f === d ? null : f
				}, a) : c;
				a.length = 0;
				y(w(P, Ka("push", a)), c);
				return ha(za(null), b).length === a.length ? null : b
			}

			function ip(a, c, b) {
				return A(function(d) {
					var e = d[0],
						f = d[1];
					if (R(e)) return e(a,
						c) || null;
					if (1 === d.length) return c[e] ? Math.round(c[e]) : null;
					var g;
					!(g = c[e] && c[f]) && (g = 0 === c[e] && 0 === c[f]) && (g = d[1], g = !(wi[d[0]] || wi[g]));
					if (!g) return null;
					d = Math.round(c[e]) - Math.round(c[f]);
					return 0 > d || 36E5 < d ? null : d
				}, b)
			}

			function ne(a, c) {
				try {
					var b = c.localStorage.getItem(a);
					return b && md(oe(b))
				} catch (d) {}
				return null
			}

			function oe(a) {
				for (var c = [], b = 0; b < a.length; b++) {
					var d = a.charCodeAt(b);
					128 > d ? c.push(d) : (127 < d && 2048 > d ? c.push(d >> 6 | 192) : (c.push(d >> 12 | 224), c.push(d >> 6 & 63 | 128)), c.push(d & 63 | 128))
				}
				return c
			}

			function md(a,
				c) {
				void 0 === c && (c = !1);
				for (var b = a.length, d = b - b % 3, e = [], f = 0; f < d; f += 3) {
					var g = (a[f] << 16) + (a[f + 1] << 8) + a[f + 2];
					e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [g >> 18 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [g >> 12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [g >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [g & 63])
				}
				switch (b - d) {
					case 1:
						b = a[d] << 4;
						e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b >>
							6 & 63
						], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b & 63], "=", "=");
						break;
					case 2:
						b = (a[d] << 10) + (a[d + 1] << 2), e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b >> 12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b & 63], "=")
				}
				e = H("", e);
				return c ? xi(e, !0) : e
			}

			function Eh(a, c) {
				void 0 === c && (c = !1);
				var b = a,
					d = "",
					e = 0;
				if (!b) return "";
				for (c && (b = xi(b)); b.length % 4;) b += "=";
				do {
					var f = ic("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", b.charAt(e++)),
						g = ic("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", b.charAt(e++)),
						h = ic("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", b.charAt(e++)),
						k = ic("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", b.charAt(e++));
					if (0 > f || 0 > g || 0 > h || 0 > k) return "";
					var l = f << 18 | g << 12 | h << 6 | k;
					f = l >> 16 & 255;
					g = l >> 8 & 255;
					l &= 255;
					d = 64 === h ? d + String.fromCharCode(f) : 64 === k ? d + String.fromCharCode(f,
						g) : d + String.fromCharCode(f, g, l)
				} while (e < b.length);
				return d
			}

			function xi(a, c) {
				void 0 === c && (c = !1);
				return a ? a.replace(c ? /[+/=]/g : /[-*_]/g, function(b) {
					return lp[b] || b
				}) : ""
			}

			function mp(a) {
				try {
					var c = Oa(a) ? a : [];
					return H(",", [a.name, a.description, w(Ga, Ea, Sb(np), pe(","))(c)])
				} catch (b) {
					return ""
				}
			}

			function np(a) {
				return H(",", [a.description, a.suffixes, a.type])
			}

			function op(a, c) {
				for (var b = "", d = 0; d < c; d += 1) b += a;
				return b
			}

			function pp(a, c, b, d, e, f, g, h) {
				var k = b.C(f);
				da(k) && (b.D(f, g), e(a, c, b, d), k = b.C(f, g));
				X(h) || h.Sb(f,
					"" + k);
				return k
			}

			function qp(a, c) {
				if (ud(a)) {
					var b = qb(a).match(rp);
					if (b && b.length) return b[1] === c
				}
				return !1
			}

			function qe(a, c, b) {
				return function(d) {
					var e, f, g = Ja(c, b);
					g && sp(a, d, c) && (g = G(g.params, g), (d = Hf({
						event: a,
						Ia: "products",
						wa: jc,
						Gh: "goods"
					}, d)) && g && g((e = {}, e.__ym = (f = {}, f.ecommerce = [d], f), e)))
				}
			}

			function sp(a, c, b) {
				var d = !1,
					e = "";
				if (!qa(c)) return Ib(b, "", "ecomeo"), d;
				var f = c.goods;
				switch (a) {
					case "detail":
					case "add":
					case "remove":
						Z(f) && f.length ? (d = yi(function(g) {
								return qa(g) && (fa(g.id) || kc(b, g.id) || fa(g.name))
							},
							f)) || (e = "ecomgi") : e = "ecomgei";
						break;
					case "purchase":
						kc(b, c.id) || fa(c.id) ? d = !0 : e = "ecompi"
				}
				Ib(b, "", e);
				return d
			}

			function vd(a, c) {
				return {
					O: function(b, d) {
						If(b) ? d() : ma(c, function(e) {
							var f;
							if (e = n(e, "settings.hittoken")) e = (f = {}, f.hittoken = e, f), b.J = z(b.J || {}, e);
							d()
						})
					}
				}
			}

			function tp(a, c, b) {
				var d, e, f;
				void 0 === b && (b = "");
				var g = I(a),
					h = {};
				h.getCachedTags = Jf;
				h.form = (d = {}, d.closest = u(a, zi), d.select = up, d.getData = u(a, Ai), d);
				h.button = (e = {}, e.closest = u(a, Bi), e.select = Ci, e.getData = u(a, Di), e);
				h.status = (f = {}, f.checkStatus =
					D([a, Da(b)], vp), f);
				g.D("_u", h);
				c && cd(a, {
					src: c
				})
			}

			function vp(a) {
				var c, b = Ei(a);
				a = I(a).C("getCounters", wd)();
				a = A(U("id"), a);
				return c = {
					id: b
				}, c.counterFound = !!b && J(b, a), c
			}

			function Fi(a, c, b, d) {
				if (c) {
					var e = [];
					c && (a.document.documentElement.contains(c) ? ae(a, c, Ka("push", e), d) : va(e, Gi(a, c, d)));
					y(b, e)
				}
			}

			function ae(a, c, b, d, e, f) {
				function g(k) {
					return R(d) ? d(k) ? a.NodeFilter.FILTER_ACCEPT : a.NodeFilter.FILTER_REJECT : a.NodeFilter.FILTER_ACCEPT
				}
				void 0 === e && (e = -1);
				void 0 === f && (f = !1);
				var h = g(c);
				if (R(b) && (f || h === a.NodeFilter.FILTER_ACCEPT) &&
					(h && b(c), !Ef(c)))
					for (c = a.document.createTreeWalker(c, e, d ? {
							acceptNode: g
						} : null, !1); c.nextNode() && !1 !== b(c.currentNode););
			}

			function Gi(a, c, b) {
				var d = [],
					e = w(P, Ka("push", d));
				R(b) ? (b = b(c), (da(b) || b === a.NodeFilter.FILTER_ACCEPT) && e(c)) : e(c);
				if (c.childNodes && 0 < c.childNodes.length) {
					c = c.childNodes;
					b = 0;
					for (var f = c.length; b < f; b += 1) {
						var g = Gi(a, c[b]);
						y(e, g)
					}
				}
				return d
			}

			function Hi(a, c, b) {
				var d;
				a = [Ii(a, c, function(e) {
					d = e;
					e.ya.F(b)
				}), function() {
					d && d.unsubscribe()
				}];
				return D([re, a], y)
			}

			function wp(a, c, b, d) {
				var e, f, g;
				if (b) {
					var h =
						n(d, "ecommerce") || {};
					var k = n(d, "event") || "";
					h = qa(h) && fa(k) ? Hf(k, h) : void 0;
					if (!h) a: {
						var l = d;!Z(d) && kc(a, Oa(d)) && (l = Na(l));
						if (Z(l) && (h = l[0], k = l[1], l = l[2], fa(k) && qa(l) && "event" === h)) {
							h = Hf(k, l);
							break a
						}
						h = void 0
					}
					if (d = h || xp(d)) rb(a, (e = {}, e.counterKey = c, e.name = "ecommerce", e.data = d, e)), b((f = {}, f.__ym = (g = {}, g.ecommerce = [d], g), f))
				}
			}

			function xp(a) {
				var c = n(a, "ecommerce");
				if (qa(c)) return a = ha(qc(yp), ea(c)), a = M(function(b, d) {
					b[d] = c[d];
					return b
				}, {}, a), 0 === ea(a).length ? void 0 : a
			}

			function Hf(a, c) {
				var b, d, e = fa(a) ? zp[a] :
					a;
				if (e) {
					var f = e.event,
						g = e.Ia,
						h = e.Gh,
						k = void 0 === h ? "items" : h,
						l = c.purchase || c;
					if (h = l[k]) {
						e = A(u(e.wa, Ap), h);
						var m = (b = {}, b[f] = g ? (d = {}, d[g] = e, d) : e, b);
						b = ea(l);
						g && 1 < b.length && (m[f].actionField = yb(function(p, q) {
							if (q === k) return p;
							if ("currency" === q) return m.currencyCode = l.currency, p;
							p[Bp[q] || Kf[q] || q] = l[q];
							return p
						}, {}, b));
						return m
					}
				}
			}

			function Ap(a, c) {
				var b = {};
				y(function(d) {
					var e = a[d] || Kf[d] || d; - 1 !== mb(d, "item_category") ? (e = Kf.item_category, b[e] = b[e] ? b[e] + ("/" + c[d]) : c[d]) : b[e] = c[d]
				}, ea(c));
				return b
			}

			function Cp(a,
				c, b) {
				var d, e, f, g = n(b, "target");
				if (g && (g = Bi(a, g), g = Di(a, g))) {
					g = "?" + Cc(g);
					var h = lc(a, c, "gbn", (d = {}, d.id = c.id, d.query = g, d));
					b = n(b, "isTrusted");
					b = da(b) ? void 0 : (e = {}, e.__ym = (f = {}, f.ite = pb(b), f), e);
					se(a, c, "btn", h).reachGoal(g, b)
				}
			}

			function $e(a, c, b, d) {
				return function() {
					if (Ja(a, c)) {
						var e = Na(arguments);
						return d.apply(void 0, e)
					}
				}
			}

			function Dp(a, c, b, d) {
				var e = n(d, "target");
				e && (d = n(d, "isTrusted"), (e = Tb("button,input", a, e)) && "submit" === e.type && (e = zi(a, e))) && (b.push(e), S(a, D([!1, a, c, b, e, d], Ji), 300))
			}

			function Ji(a,
				c, b, d, e, f) {
				var g, h, k, l = Lb(c)(e, d),
					m = -1 !== l;
				if (a || m) m && d.splice(l, 1), a = Ai(c, e), a = "?" + Cc(a), d = D([c, b, "fg", (g = {}, g.id = b.id, g.query = a, g)], Ki), f = da(f) ? void 0 : (h = {}, h.__ym = (k = {}, k.ite = pb(f), k), h), se(c, b, "form", d).reachGoal(a, f)
			}

			function Ki(a, c, b, d) {
				return Ep(a, c).then(w(D([lc(a, c, b, d), F], je), xa))
			}

			function Ai(a, c, b) {
				return Li(a, c, ["i", "n", "p"], void 0, b)
			}

			function Fp(a, c) {
				var b;
				a((b = {}, b.clickmap = X(c) ? !0 : c, b))
			}

			function Gp(a, c, b, d, e) {
				var f, g = "clmap/" + e.id;
				c = (f = {}, f["page-url"] = c, f["pointer-click"] = b, f);
				f = {
					K: Ha(),
					J: c,
					ma: {
						za: g
					}
				};
				d(f, e)["catch"](C(a, "c.s.c"))
			}

			function Hp(a, c, b, d, e) {
				if (hc(a, "ymDisabledClickmap") || !c || !c.element) return !1;
				a = La(c.element);
				if (e && !e(c.element, a) || J(c.button, [2, 3]) && "A" !== a || Ua(za(a), d)) return !1;
				d = c.element;
				if (c && b) {
					if (50 > c.time - b.time) return !1;
					e = Math.abs(b.position.x - c.position.x);
					a = Math.abs(b.position.y - c.position.y);
					c = c.time - b.time;
					if (b.element === d && 2 > e && 2 > a && 1E3 > c) return !1
				}
				for (; d;) {
					if (Ip(d)) return !1;
					d = d.parentElement
				}
				return !0
			}

			function Jp(a, c) {
				var b = null;
				try {
					if (b = c.target || c.srcElement) !b.ownerDocument &&
						b.documentElement ? b = b.documentElement : b.ownerDocument !== a.document && (b = null)
				} catch (d) {}
				return b
			}

			function Kp(a) {
				var c = a.which;
				a = a.button;
				return c || void 0 === a ? c : 1 === a || 3 === a ? 1 : 2 === a ? 3 : 4 === a ? 2 : 0
			}

			function Mi(a, c) {
				var b = uc(a),
					d = Lf(a);
				return {
					x: c.pageX || c.clientX + d.x - (b.clientLeft || 0) || 0,
					y: c.pageY || c.clientY + d.y - (b.clientTop || 0) || 0
				}
			}

			function te(a, c) {
				return {
					O: function(b, d) {
						var e, f = b.K,
							g = b.Ha,
							h = b.J,
							k = b.Y;
						k = void 0 === k ? {} : k;
						if (f && h) {
							var l = ia(a);
							f.Sb("rqnl", 1);
							for (var m = xd(a), p = 1; m[p];) p += 1;
							b.M || (b.M = {});
							b.M.Pb =
								p;
							m[p] = (e = {}, e.protocol = ua.Pa, e.host = gc, e.resource = b.ma.za, e.postParams = k.ca, e.time = l(ca), e.counterType = c.ba, e.params = h, e.browserInfo = f.l(), e.counterId = c.id, e.ghid = Bc(a), e);
							g && (m[p].telemetry = g.l());
							Mf(a)
						}
						d()
					},
					Ba: function(b, d) {
						Ni(a, b);
						d()
					}
				}
			}

			function Ni(a, c) {
				var b = xd(a);
				c.K && !Va(b) && c.M && (delete b[c.M.Pb], Mf(a))
			}

			function Mf(a) {
				var c = xd(a);
				Ra(a).D("retryReqs", c)
			}

			function Lp(a, c) {
				if (a.Xi()) {
					var b = Oi(c);
					if (b && !fc("ym-disable-tracklink", b)) {
						var d = a.l,
							e = a.Rg,
							f = a.bb,
							g = a.sender,
							h = a.fh,
							k = f.qc,
							l = b.href;
						var m =
							Za(b.innerHTML && b.innerHTML.replace(/<\/?[^>]+>/gi, ""));
						m || (m = (m = b.querySelector("img")) ? Za(m.getAttribute("title") || m.getAttribute("alt")) : "");
						m = l === m ? "" : m;
						var p = n(c, "isTrusted");
						if (fc("ym-external-link", b)) ue(d, f, {
							url: l,
							kb: !0,
							title: m,
							Ac: p,
							sender: g
						});
						else {
							k = k ? wc(d, k).hostname : T(d).hostname;
							h = RegExp("\\.(" + H("|", A(Mp, h)) + ")$", "i");
							var q = b.protocol + "//" + b.hostname + b.pathname;
							h = Pi.test(q) || Pi.test(l) || h.test(l) || h.test(q);
							b = b.hostname;
							ve(k) === ve(b) ? h ? ue(d, f, {
								url: l,
								yc: !0,
								Ac: p,
								title: m,
								sender: g
							}) : m && e.D("il",
								Za(m).slice(0, 100)) : l && Np.test(l) || ue(d, f, {
								url: l,
								Cc: !0,
								kb: !0,
								yc: h,
								Ac: p,
								title: m,
								sender: g
							})
						}
					}
				}
			}

			function ue(a, c, b) {
				var d, e, f, g, h = Ha();
				void 0 !== b.Ac && h.D("ite", pb(b.Ac));
				b.yc && h.D("dl", 1);
				b.kb && h.D("ln", 1);
				var k = b.ng || {};
				h = {
					K: h,
					M: {
						title: k.title || b.title,
						Cc: !!b.Cc,
						N: k.params
					},
					J: (d = {}, d["page-url"] = b.url, d["page-ref"] = c.qc || T(a).href, d)
				};
				d = "Link";
				b.yc ? d = b.kb ? "Ext link - File" : "File" : b.kb && (d = "Ext link");
				rb(a, (e = {}, e.counterKey = K(c), e.name = "event", e.data = (f = {}, f.schema = "Link click", f.name = (b.kb ? "external" :
					"internal") + " url: " + b.url, f), e));
				c = b.sender(h, c).then(lc(a, c, "lcl", (g = {}, g.prefix = d, g.id = c.id, g.url = b.url, g), b.ng));
				return Pc(a, "cl.p.s", c, k.callback || F, k.ctx)
			}

			function Op(a, c) {
				var b, d, e = (b = {}, b.string = !0, b.object = !0, b["boolean"] = c, b)[typeof c] || !1;
				a((d = {}, d.trackLinks = e, d))
			}

			function Pp(a, c, b, d) {
				var e = T(a),
					f = e.hostname;
				e = e.href;
				if (c = yd(c).url) a = wc(a, c), f = a.hostname, e = a.href;
				return [d + "://" + f + "/" + b, e || ""]
			}

			function Qi(a) {
				return (a.split(":")[1] || "").replace(/^\/*/, "").replace(/^www\./, "").split("/")[0]
			}

			function Qp(a, c, b, d) {
				var e;
				if (a = Ja(a, b)) {
					var f = d.data;
					b = "" + b.id;
					var g = d.sended || [];
					d.sended || (d.sended = g);
					J(b, g) || !a.params || d.counter && "" + d.counter !== b || (a.params(f), g.push(b), d.parent && c.Xf((e = {}, e.type = "params", e.data = f, e)))
				}
			}

			function th(a, c, b) {
				void 0 === b && (b = P);
				var d = kd(a);
				b(d);
				var e = u(d, Rp);
				we(a, c, function(f) {
					f.ya.F(e)
				});
				return d
			}

			function Rp(a, c) {
				var b = n(c, "ymetrikaEvent");
				b && a.aa(n(b, "type"), b)
			}

			function we(a, c, b, d) {
				void 0 === b && (b = F);
				void 0 === d && (d = !1);
				var e = Ri(a);
				if (c && R(c.push)) {
					var f = c.push;
					c.push = function() {
						var g = Na(arguments),
							h = g[0];
						d && e.aa(h);
						g = f.apply(c, g);
						d || e.aa(h);
						return g
					};
					a = {
						ya: e,
						unsubscribe: function() {
							c.push = f
						}
					};
					b(a);
					y(e.aa, c);
					return a
				}
			}

			function Vd(a) {
				a = I(a);
				var c = a.C("dataLayer", []);
				a.D("dataLayer", c);
				return c
			}

			function Cm(a, c) {
				var b, d;
				J(c, A(U("ymetrikaEvent.type"), a)) || a.push((b = {}, b.ymetrikaEvent = (d = {}, d.type = c, d), b))
			}

			function Si(a, c) {
				var b = hd(a, c),
					d = [],
					e = [];
				if (!b) return null;
				var f = D([a, b.qe], Sp),
					g = u(f, Tp);
				b.$.F(["initToParent"], function(h) {
					g(d, b.children[h[1].counterId])
				}).F(["parentConnect"],
					function(h) {
						g(e, b.Ea[h[1].counterId])
					});
				return {
					$: b.$,
					Mj: function(h, k) {
						return new L(function(l, m) {
							b.qe(h, k, function(p, q) {
								l([p, q])
							});
							S(a, u(Pa(), m), 5100, "is.o")
						})
					},
					Wf: function(h) {
						var k = {
							Zf: [],
							De: [],
							data: h
						};
						d.push(k);
						return f(b.children, k, h)
					},
					Xf: function(h) {
						var k = {
							Zf: [],
							De: [],
							data: h
						};
						e.push(k);
						return f(b.Ea, k, h)
					}
				}
			}

			function Tp(a, c, b) {
				c = ha(function(d) {
					return !J(b.info.counterId, d.De)
				}, c);
				y(function(d) {
					var e;
					b.info.counterId && a((e = {}, e[b.info.counterId] = b, e), d, d.data)
				}, c)
			}

			function Sp(a, c, b, d, e) {
				return (new L(function(f,
					g) {
					var h = ea(b),
						k = w(d.resolve || P, Oc(f)),
						l = w(d.reject || P, Oc(g));
					d.resolve = k;
					d.reject = l;
					y(function(m) {
						var p;
						d.De.push(+m);
						var q = b[m],
							r = S(a, u(Pa(), l), 5100, "is.m");
						c(q.window, z(e, (p = {}, p.toCounter = Da(m), p)), function(t, x) {
							ja(a, r);
							d.Zf.push(m);
							d.resolve && d.resolve(x)
						})
					}, h)
				}))["catch"](C(a, "if.b"))
			}

			function Up(a) {
				var c = F,
					b = null,
					d = a.length;
				if (0 !== a.length && a[0]) {
					var e = a.slice(-1)[0];
					R(e) && (c = e, d = a.length + -1);
					var f = a.slice(-2)[0];
					R(f) && (c = f, b = e, d = a.length + -2);
					d = a.slice(0, d);
					return {
						Tg: b,
						Xb: c,
						N: 1 === d.length ?
							a[0] : ee(d)
					}
				}
			}

			function Pc(a, c, b, d, e) {
				var f = D([a, d, e], Nf);
				return b.then(f, function(g) {
					f();
					jd(a, c, g)
				})
			}

			function Of(a, c) {
				return {
					O: function(b, d) {
						var e, f, g = (b.M || {}).N,
							h = b.Y;
						h = void 0 === h ? {} : h;
						if (g && (Ti(c, g), !h.ca && b.K && b.J)) {
							var k = Kb(a, g),
								l = Ui(a),
								m = b.K.C("pv");
							k && !b.J.nohit && (rb(a, (e = {}, e.counterKey = K(c), e.name = "params", e.data = (f = {}, f.val = g, f), e)), m ? encodeURIComponent(k).length > ua.ug ? l.push([b.K, g]) : b.J["site-info"] = k : (h.ca = k, b.Y = h, b.Lc || (b.Lc = {}), b.Lc.ji = !0))
						}
						d()
					},
					Ba: function(b, d) {
						var e = Ui(a),
							f = Ja(a, c),
							g = f && f.params;
						g && (f = ha(w(zd, za(b.K)), e), y(function(h) {
							g(h[1]);
							h = xe(a)(h, e);
							e.splice(h, 1)
						}, f));
						d()
					}
				}
			}

			function ye(a, c) {
				return function(b) {
					Pf(a, c, b)
				}
			}

			function Vp(a, c) {
				Qf(a)(function(b) {
					delete b[c]
				})
			}

			function Pf(a, c, b) {
				Qf(a)(function(d) {
					d[c] = z(d[c] || {}, b)
				})
			}

			function Qf(a) {
				a = I(a);
				var c = a.C("dsjf") || Aa({});
				a.Ga("dsjf", c);
				return c
			}

			function Wp(a, c) {
				return function(b) {
					var d, e, f = Ja(a, c);
					if (f) {
						var g = mc(a, K(c));
						qa(b) ? Oa(ea(b)) ? (b = Vi(a, b)) && Oa(b) && f.params((d = {}, d.__ym = (e = {}, e.fpmh = b, e), d)) : g.log("fpeo") : g.log("fpno")
					}
				}
			}

			function Vi(a, c) {
				return M(function(b, d) {
					var e = d[0],
						f = d[1],
						g = f;
					f = qa(f);
					if (!f && (kc(a, g) && (g = "" + g), !fa(g))) return b;
					g = f ? Vi(a, g) : g;
					Oa(g) && b.push([e, g]);
					return b
				}, [], Ca(c))
			}

			function Wi(a, c, b) {
				void 0 === b && (b = 0);
				c = Ca(c);
				c = M(function(d, e) {
					var f = e[0],
						g = e[1],
						h = qa(g);
					if (!h && (kc(a, g) && (g = "" + g), !fa(g))) return d;
					if (h) g = Wi(a, g, b + 1);
					else if (!b && J(f, Xp)) g = L.resolve(g);
					else {
						"phone_number" === f ? g = Ch(a, g) : "email" === f && (g = Bh(g));
						if (!g) return d;
						g = Xi(a, g)
					}
					d.push(g.then(function(k) {
						return [f, k]
					}));
					return d
				}, [], c);
				return L.all(c)
			}

			function Bh(a) {
				var c = Za(a).replace(/^\++/gm, "").toLowerCase(),
					b = c.lastIndexOf("@");
				if (-1 === b) return Rf(c);
				a = c.substr(0, b);
				b = c.substr(b + 1);
				if (!b || !Yp(a)) return Rf(c);
				b = b.replace("googlemail.com", "gmail.com");
				Yi(b) && (b = "yandex.ru");
				"yandex.ru" === b ? a = a.replace(Sf, "-") : "gmail.com" === b && (a = a.replace(Sf, ""));
				c = mb(a, "+"); - 1 !== c && (a = a.slice(0, c));
				return Rf(a + "@" + b)
			}

			function Rf(a) {
				var c = Oa(a);
				return 5 > c || 100 < c ? void 0 : a
			}

			function Yp(a) {
				return 1 > a.length || 64 < a.length ? !1 : yi(function(c) {
					if (1 > c.length) c = !1;
					else if ('"' ===
						c[0] && '"' === c[c.length - 1] && 2 < c.length) a: {
						for (var b = 1; b + 2 < c.length; b += 1) {
							var d = c.charCodeAt(b);
							if (32 > d || 34 === d || 126 < d) {
								c = !1;
								break a
							}
							if (92 === d) {
								if (b + 2 === c.length || 32 > c.charCodeAt(b + 1)) {
									c = !1;
									break a
								}
								b += 1
							}
						}
						c = !0
					}
					else c = Zp.test(c) ? !0 : !1;
					return c
				}, a.split("."))
			}

			function Ch(a, c) {
				var b = $d(c),
					d = Oa(b);
				if (!($p(c) || Oa(c) - d > d || 10 > Oa(b) || 16 < Oa(b))) {
					d = b[0];
					var e = c[1];
					if ("+" !== c[0] || e === d) return d = aq(c), 10 > b.length || 13 < b.length || d.startsWith("+8") ? Za(c) : "8" === d[0] ? "7" + b.slice(1) : "+" === d[0] || kc(a, +d[0]) ? b : "7" + b
				}
			}

			function Xi(a,
				c) {
				return new L(function(b, d) {
					var e = (new a.TextEncoder).encode(c);
					a.crypto.subtle.digest("SHA-256", e).then(function(f) {
						f = new a.Blob([f], {
							type: "application/octet-binary"
						});
						var g = new a.FileReader;
						g.onload = function(h) {
							h = n(h, "target.result") || "";
							var k = mb(h, ","); - 1 !== k ? b(h.substring(k + 1)) : d(Ic("fpm.i"))
						};
						g.readAsDataURL(f)
					}, d)
				})
			}

			function Nl(a, c, b, d) {
				var e = Zi[b];
				return e ? function() {
					var f = Na(arguments);
					f = d.apply(void 0, f);
					var g = I(a);
					g.Ga("mt", {});
					g = g.C("mt");
					var h = g[e];
					g[e] = h ? h + 1 : 1;
					return f
				} : d
			}

			function Ja(a,
				c) {
				var b = I(a).C("counters", {}),
					d = K(c);
				return b[d]
			}

			function lc(a, c, b, d, e) {
				return D([a, K(c), e ? [b + ".p", e] : b, d], Ib)
			}

			function Ib(a, c, b, d) {
				mc(a, c).log(b, d)
			}

			function bq(a, c) {
				function b(d, e, f) {
					var g, h;
					rb(a, (g = {}, g.name = "log", g.counterKey = c, g.data = (h = {}, h.args = Z(e) ? e : [e], h.type = d, h.variables = f, h), g))
				}
				return {
					log: u("log", b),
					error: u("error", b),
					warn: u("warn", b)
				}
			}

			function ma(a, c) {
				var b = K(a);
				return $i()(cq(b)).then(c)
			}

			function dq(a, c, b) {
				var d, e;
				c = K(c);
				var f = Tf(a);
				b = z({
					hh: f(ca)
				}, b);
				rb(a, (d = {}, d.counterKey = c, d.name =
					"counterSettings", d.data = (e = {}, e.settings = b, e), d));
				return $i()(eq(c, b))
			}

			function eq(a, c) {
				return function(b) {
					var d = b[a];
					d ? (d.Kf = !0, d.Jf(c)) : b[a] = {
						promise: L.resolve(c),
						Kf: !0,
						Jf: F
					}
				}
			}

			function Uf(a) {
				return !sd(a) && Vf(a)
			}

			function Ad(a) {
				return xb(a) ? u(a, fq) : !1
			}

			function Ab(a) {
				if (a.fetch) {
					var c = n(a, "AbortController");
					return D([a, c ? new c : void 0], gq)
				}
				return !1
			}

			function Vf(a) {
				var c = n(a, "navigator.sendBeacon");
				return c && Fa("sendBeacon", c) ? D([a, G(c, n(a, "navigator"))], hq) : !1
			}

			function hq(a, c, b, d) {
				return new L(function(e,
					f) {
					var g;
					if (!n(a, "navigator.onLine")) return f();
					var h = z(d.Za, (g = {}, g["force-urlencoded"] = 1, g));
					g = b + "?" + Cc(h) + (d.ca ? "&" + d.ca : "");
					return 2E3 < g.length ? f(Pa("sb.tlq")) : c(g) ? e("") : f()
				})
			}

			function fq(a, c, b) {
				return new L(function(d, e) {
					var f, g, h = "_ymjsp" + Wa(a),
						k = z((f = {}, f.callback = h, f), b.Za),
						l = D([a, h], iq);
					a[h] = function(p) {
						try {
							l(), vc(m), d(p)
						} catch (q) {
							e(q)
						}
					};
					k.wmode = "5";
					var m = cd(a, (g = {}, g.src = aj(c, b, k), g));
					if (!m) return l(), e(Ic("jp.s"));
					f = u(m, vc);
					f = w(f, u(Pa(b.ha), e));
					g = Bd(a, f, b.Ma || 1E4);
					g = D([a, g], ja);
					m.onload =
						g;
					m.onerror = w(l, g, f)
				})
			}

			function iq(a, c) {
				try {
					delete a[c]
				} catch (b) {
					a[c] = void 0
				}
			}

			function Qc(a) {
				var c = xb(a);
				return c ? D([a, c], jq) : !1
			}

			function jq(a, c, b, d) {
				return new L(function(e, f) {
					var g = uc(a),
						h = c("img"),
						k = w(u(h, vc), u(Pa(d.ha), f)),
						l = Bd(a, k, d.Ma || 3E3);
					h.onerror = k;
					h.onload = w(u(h, vc), u(null, e), D([a, l], ja));
					k = z({}, d.Za);
					delete k.wmode;
					h.src = aj(b, d, k);
					ud(a) && (z(h.style, {
						position: "absolute",
						visibility: "hidden",
						width: "0px",
						height: "0px"
					}), g.appendChild(h))
				})
			}

			function gq(a, c, b, d) {
				var e, f = z(d.zb ? (e = {}, e.wmode =
						"7", e) : {}, d.Za),
					g = c || {
						signal: void 0,
						abort: F
					},
					h = a.fetch(b + "?" + Cc(f), {
						method: d.Xc,
						body: d.ca,
						credentials: !1 === d.Yc ? "omit" : "include",
						headers: d.Xa,
						signal: g.signal
					}),
					k = u(d.ha, Pa);
				return new L(function(l, m) {
					d.Ma && Bd(a, function() {
						try {
							g.abort()
						} catch (p) {}
						m(k())
					}, d.Ma);
					return h.then(function(p) {
						if (!p.ok) {
							if (d.Oc) return Ta(bj(p));
							Sd(d.ha)
						}
						return d.Oc ? p.text() : d.zb ? p.json() : null
					}).then(l)["catch"](u(k(), m))
				})
			}

			function Bb(a) {
				var c;
				if (c = n(a, "XMLHttpRequest"))
					if (c = "withCredentials" in new a.XMLHttpRequest) {
						a: {
							if (kq.test(a.location.host) &&
								a.opera && R(a.opera.version) && (c = a.opera.version(), "string" === typeof c && "12" === c.split(".")[0])) {
								c = !0;
								break a
							}
							c = !1
						}
						c = !c
					}
				return c ? u(a, lq) : !1
			}

			function lq(a, c, b) {
				var d, e = new a.XMLHttpRequest,
					f = b.ca,
					g = z(b.zb ? (d = {}, d.wmode = "7", d) : {}, b.Za);
				return new L(function(h, k) {
					e.open(b.Xc || "GET", c + "?" + Cc(g), !0);
					e.withCredentials = !1 !== b.Yc;
					b.Ma && (e.timeout = b.Ma);
					mq(Ca, Sb(function(m) {
						e.setRequestHeader(m[0], m[1])
					}))(b.Xa);
					var l = D([a, e, Pa(b.ha), b.zb, b.Oc, h, k], nq);
					e.onreadystatechange = l;
					try {
						e.send(f)
					} catch (m) {}
				})
			}

			function nq(a,
				c, b, d, e, f, g, h) {
				if (4 === c.readyState)
					if (200 === c.status || e || g(b), e) 200 === c.status ? f(c.responseText) : g(bj(c));
					else {
						e = null;
						if (d) try {
							(e = Qb(a, c.responseText)) || g(b)
						} catch (k) {
							g(b)
						}
						f(e)
					}
				return h
			}

			function aj(a, c, b) {
				(b = Cc(b)) && (a += "?" + b);
				c.ca && (a += (b ? "&" : "?") + c.ca);
				return a
			}

			function oq(a, c, b) {
				var d = A(zd, Ub[c] || Vb);
				y(function(e) {
					return d.unshift(e)
				}, ze);
				return A(w(Ae([a, b]), xa), d)
			}

			function cj(a) {
				return {
					O: function(c, b) {
						var d = c.J;
						if (!c.K || !d) return b();
						var e = d["page-ref"],
							f = d["page-url"];
						e && f !== e ? d["page-ref"] =
							dj(a, e) : delete d["page-ref"];
						d["page-url"] = dj(a, f).slice(0, ua.wg);
						return b()
					}
				}
			}

			function dj(a, c) {
				var b = T(a),
					d = b.href,
					e = b.host,
					f = -1;
				if (!fa(c) || X(c)) return d;
				b = c.replace(ej, "");
				if (-1 !== b.search(pq)) return b;
				var g = b.charAt(0);
				if ("?" === g && (f = d.search(/\?/), -1 === f) || "#" === g && (f = d.search(/#/), -1 === f)) return d + b;
				if (-1 !== f) return d.substr(0, f) + b;
				if ("/" === g) {
					if (f = mb(d, e), -1 !== f) return d.substr(0, f + e.length) + b
				} else return d = d.split("/"), d[d.length - 1] = b, H("/", d);
				return ""
			}

			function Be(a, c) {
				return {
					O: function(b,
						d) {
						var e = fj(c);
						e = D([b, e, d], qq);
						rq(a, c, e)
					},
					Ba: function(b, d) {
						var e = b.K,
							f = fj(c);
						if (e) {
							var g = f.sa;
							f.Ze === e && g && (y(xa, g), f.sa = null)
						}
						d()
					}
				}
			}

			function qq(a, c, b) {
				var d = a.K;
				d ? If(a) ? (c.Ze = d, b()) : c.sa ? c.sa.push(b) : b() : b()
			}

			function If(a) {
				return (a = a.K) && a.C("pv") && !a.C("ar")
			}

			function rq(a, c, b) {
				if (Ce(a) && ob(a)) {
					var d = sq(c);
					if (!d.Vh) {
						d.Vh = !0;
						c = hd(a, c);
						if (!c) {
							b();
							return
						}
						d.sa = [];
						var e = function() {
							d.sa && (y(xa, d.sa), d.sa = null)
						};
						S(a, e, 3E3);
						c.$.F(["initToChild"], e)
					}
					d.sa ? d.sa.push(b) : b()
				} else b()
			}

			function gj(a, c) {
				return {
					O: function(b,
						d) {
						var e = b.K;
						if (e && (!c || c.Vf)) {
							var f = a.document.title;
							b.M && b.M.title && (f = b.M.title);
							var g = Dc("getElementsByTagName", a.document);
							"string" !== typeof f && g && (f = g("title"), f = (f = n(f, "0.innerHtml")) ? f : "");
							f = f.slice(0, ua.vg);
							e.D("t", f)
						}
						d()
					}
				}
			}

			function Mb(a) {
				return function(c, b) {
					return {
						O: function(d, e) {
							var f = d.K,
								g = d.J;
							f && g && y(function(h) {
								var k = Cd[h],
									l = "bi",
									m = f;
								k || (k = Wf[h], l = "tel", m = Xd(d));
								k && (k = B(l + ":" + h, k, null)(c, b, d), m.Sb(h, k))
							}, a || tq());
							e()
						}
					}
				}
			}

			function uq(a, c) {
				var b = Dd(a);
				c.F(["initToParent"], function(d) {
					var e =
						d[0];
					d = d[1];
					window.window && (b.children[d.counterId] = {
						info: d,
						window: e.source
					})
				}).F(["initToChild"], function(d) {
					var e = d[0];
					d = d[1];
					e.source === a.parent && c.aa("parentConnect", [e, d])
				}).F(["parentConnect"], function(d) {
					var e = d[1];
					e.counterId && (b.Ea[e.counterId] = {
						info: e,
						window: d[0].source
					})
				})
			}

			function vq(a) {
				if (Fa("MutationObserver", a.MutationObserver)) {
					var c = Dd(a).children,
						b = new a.MutationObserver(function() {
							y(function(d) {
								n(c[d], "window.window") || delete c[d]
							}, ea(c))
						});
					sc(a)(Ya(F, function() {
						b.observe(a.document.body, {
							subtree: !0,
							childList: !0
						})
					}))
				}
			}

			function wq(a, c) {
				return function(b, d) {
					var e, f = {
						fc: ia(a)(ca),
						key: a.Math.random(),
						dir: 0
					};
					b.length && (f.fc = Da(b[0]), f.key = parseFloat(b[1]), f.dir = Da(b[2]));
					z(d, c);
					var g = (e = {
						data: d
					}, e.__yminfo = H(":", ["__yminfo", f.fc, f.key, f.dir]), e);
					return {
						meta: f,
						bg: Kb(a, g) || ""
					}
				}
			}

			function sc(a, c) {
				function b(e) {
					n(c, d) ? e() : S(a, u(e, b), 100)
				}
				void 0 === c && (c = a);
				var d = (c.nodeType ? "contentWindow." : "") + "document.body";
				return Aa(function(e, f) {
					b(f)
				})
			}

			function Ed(a, c) {
				var b = c.Vd,
					d = b || "uid";
				b = b ? a.location.hostname :
					void 0;
				var e = Nc(a),
					f = Ra(a),
					g = ia(a)(Xf),
					h = hj(a, c),
					k = h[0];
				h = h[1];
				var l = e.C("d");
				ij(a, c);
				var m = !1;
				!h && k && (h = k, m = !0);
				if (!h) h = H("", [g, Wa(a, 1E6, 999999999)]), m = !0;
				else if (!l || 15768E3 < g - Da(l)) m = !0;
				m && !c.Ta && (e.D(d, h, 525600, b), e.D("d", "" + g, 525600, b));
				f.D(d, h);
				return h
			}

			function xq(a, c) {
				return !c.Ta && ij(a, c)
			}

			function hj(a, c) {
				var b = Ra(a),
					d = Nc(a),
					e = c.Vd || "uid";
				return [b.C(e), d.C(e)]
			}

			function Bc(a) {
				var c = I(a),
					b = c.C("hitId");
				b || (b = Wa(a), c.D("hitId", b));
				return b
			}

			function Di(a, c, b) {
				var d = La(c);
				return d && Li(a, c, Ea(["p",
					yq[d], "c"
				]), Ci, b)
			}

			function Bi(a, c) {
				var b = Tb(Yf, a, c);
				if (!b) {
					var d = Tb("div", a, c);
					d && (gb(Yf + ",div", d).length || (b = d))
				}
				return b
			}

			function Li(a, c, b, d, e) {
				return M(function(f, g) {
					var h = null;
					g in jj ? h = c.getAttribute && c.getAttribute(jj[g]) : g in De && (h = "p" === g ? De[g](a, c, e) : "c" === g ? De[g](a, c, d) : De[g](a, c));
					h && (h = h.slice(0, kj[g] || 100), f[g] = Zf[g] ? "" + dc(h) : h);
					return f
				}, {}, b)
			}

			function Oi(a) {
				var c = null;
				try {
					c = a.target || a.srcElement
				} catch (b) {}
				if (c) {
					3 === c.nodeType && (c = c.parentNode);
					for (a = c && c.nodeName && ("" + c.nodeName).toLowerCase(); n(c,
							"parentNode.nodeName") && ("a" !== a && "area" !== a || !c.href && !c.getAttribute("xlink:href"));) a = (c = c.parentNode) && c.nodeName && ("" + c.nodeName).toLowerCase();
					return c.href ? c : null
				}
				return null
			}

			function cd(a, c) {
				var b = xb(a);
				if (b) {
					var d = a.document,
						e = b("script");
					e.src = c.src;
					e.type = c.type || "text/javascript";
					e.charset = c.charset || "utf-8";
					e.async = c.async || !0;
					try {
						var f = d.getElementsByTagName("head")[0];
						if (!f) {
							var g = d.getElementsByTagName("html")[0];
							f = b("head");
							g && g.appendChild(f)
						}
						f.insertBefore(e, f.firstChild);
						return e
					} catch (h) {}
				}
			}

			function Qh(a, c) {
				var b = lj(a);
				J(c, b.qb) && (b.qb = ha(w(za(c), Ec), b.qb), b.qb.length || (vc(b.fb), b.fb = null))
			}

			function Ph(a, c, b) {
				var d = lj(c);
				J(b, d.qb) || d.qb.push(b);
				if (Va(d.fb)) {
					b = xb(a);
					if (!b) return null;
					b = b("iframe");
					z(b.style, {
						display: "none",
						width: "1px",
						height: "1px",
						visibility: "hidden"
					});
					b.src = c;
					a = uc(a);
					if (!a) return null;
					a.appendChild(b);
					d.fb = b
				} else(a = n(d.fb, "contentWindow")) && a.postMessage("frameReinit", "*");
				return d.fb
			}

			function zq(a, c) {
				var b = Z(a) ? a : [a];
				c = c || document;
				if (c.querySelectorAll) {
					var d = H(", ",
						A(function(e) {
							return "." + e
						}, b));
					return Ga(c.querySelectorAll(d))
				}
				if (c.getElementsByClassName) return tc(w(Ka("getElementsByClassName", c), Ga), b);
				d = c.getElementsByTagName("*");
				b = "(" + H("|", b) + ")";
				return ha(u(b, fc), Ga(d))
			}

			function hf(a, c, b) {
				for (var d = "", e = Jf(), f = La(c) || "*"; c && c.parentNode && !J(f, ["BODY", "HTML"]);) d += e[f] || "*", d += mj(a, c, b) || "", c = c.parentElement, f = La(c) || "*";
				return Za(d, 128)
			}

			function mj(a, c, b) {
				if (a = Ee(a, c)) {
					a = a.childNodes;
					for (var d = c && c.nodeName, e = 0, f = 0; f < a.length; f += 1)
						if (d === (a[f] && a[f].nodeName)) {
							if (c ===
								a[f]) return e;
							b && a[f] === b || (e += 1)
						}
				}
				return 0
			}

			function Ee(a, c) {
				var b = n(a, "document");
				return c && c !== b.documentElement ? c === Fc(a) ? b.documentElement : n(c, "parentNode") : null
			}

			function Bf(a, c) {
				var b = $f(a, c),
					d = b.left;
				b = b.top;
				var e = Fe(a, c);
				return [d, b, e[0], e[1]]
			}

			function Fe(a, c) {
				var b = n(a, "document");
				if (c === Fc(a) || c === b.documentElement) {
					b = uc(a);
					var d = Kc(a);
					return [Math.max(b.scrollWidth, d[0]), Math.max(b.scrollHeight, d[1])]
				}
				return (b = Jc(c)) ? [b.width, b.height] : [c.offsetWidth, c.offsetHeight]
			}

			function $f(a, c) {
				var b =
					c,
					d = n(a, "document"),
					e = La(b);
				if (!b || !b.ownerDocument || "PARAM" === e || b === Fc(a) || b === d.documentElement) return {
					left: 0,
					top: 0
				};
				if (d = Jc(b)) return b = Lf(a), {
					left: Math.round(d.left + b.x),
					top: Math.round(d.top + b.y)
				};
				for (e = d = 0; b;) d += b.offsetLeft, e += b.offsetTop, b = b.offsetParent;
				return {
					left: d,
					top: e
				}
			}

			function Vh(a, c, b) {
				if (fd(a)) return Ga(b.querySelectorAll(c));
				var d = nj(c.split(" "), b);
				return ha(function(e, f) {
					return Lb(a)(e, d) === f
				}, d)
			}

			function nj(a, c) {
				var b = va([], a),
					d = b.shift();
				if (!d) return [];
				d = c.getElementsByTagName(d);
				return b.length ? tc(u(b, nj), Ga(d)) : Ga(d)
			}

			function bc(a, c) {
				if (c.querySelector) return c.querySelector(a);
				var b = gb(a, c);
				return b && b.length ? b[0] : null
			}

			function gb(a, c) {
				if (!c || !c.querySelectorAll) return [];
				var b = c.querySelectorAll(a);
				return b ? Ga(b) : []
			}

			function oj(a, c) {
				return hc(c, "isConnected") ? !c.isConnected : Tb("html", a, c) !== a.document.documentElement
			}

			function Tb(a, c, b) {
				if (!(c && c.Element && c.Element.prototype && c.document && b)) return null;
				if (c.Element.prototype.closest && Fa("closest", c.Element.prototype.closest) &&
					b.closest) return b.closest(a);
				var d = bi(c);
				if (d) {
					for (; b && 1 === b.nodeType && !d.call(b, a);) b = b.parentElement || b.parentNode;
					return b && 1 === b.nodeType ? b : null
				}
				if (fd(c)) {
					for (a = Ga((c.document || c.ownerDocument).querySelectorAll(a)); b && 1 === b.nodeType && -1 === Lb(c)(b, a);) b = b.parentElement || b.parentNode;
					return b && 1 === b.nodeType ? b : null
				}
				return null
			}

			function fd(a) {
				return !(!Fa("querySelectorAll", n(a, "Element.prototype.querySelectorAll")) || !a.document.querySelectorAll)
			}

			function oh(a, c, b) {
				var d = c.top,
					e = c.bottom,
					f = c.left,
					g = b.w;
				b = b.h;
				a = a.Math;
				c = a.min(a.max(c.right, 0), g) - a.min(a.max(f, 0), g);
				return (a.min(a.max(e, 0), b) - a.min(a.max(d, 0), b)) * c
			}

			function pj(a) {
				return Ge(a) && !Ua(za(a.type), Aq) ? He(a) ? !a.checked : !a.value : Bq(a) ? !a.value : Cq(a) ? 0 > a.selectedIndex : !0
			}

			function La(a) {
				if (a) try {
					var c = a.nodeName;
					if (fa(c)) return c;
					c = a.tagName;
					if (fa(c)) return c
				} catch (b) {}
			}

			function qj(a, c) {
				var b = a.document.getElementsByTagName("form");
				return Lb(a)(c, Ga(b))
			}

			function Dq(a, c, b) {
				b = Dc("dispatchEvent", b || a.document);
				var d = null,
					e = n(a, "Event.prototype.constructor");
				if (e && (Fa("(Event|Object|constructor)", e) || ag(a) && "[object Event]" === "" + e)) try {
					d = new a.Event(c)
				} catch (f) {
					if ((a = Dc("createEvent", n(a, "document"))) && R(a)) {
						try {
							d = a(c)
						} catch (g) {}
						d && d.initEvent && d.initEvent(c, !1, !1)
					}
				}
				d && b(d)
			}

			function Jc(a) {
				try {
					return a.getBoundingClientRect && a.getBoundingClientRect()
				} catch (c) {
					return "object" === typeof c && null !== c && 16389 === (c.Af && c.Af & 65535) ? {
						top: 0,
						bottom: 0,
						left: 0,
						width: 0,
						height: 0,
						right: 0
					} : null
				}
			}

			function Lf(a) {
				var c = Fc(a),
					b = n(a, "document");
				return {
					x: a.pageXOffset || b.documentElement &&
						b.documentElement.scrollLeft || c && c.scrollLeft || 0,
					y: a.pageYOffset || b.documentElement && b.documentElement.scrollTop || c && c.scrollTop || 0
				}
			}

			function Kc(a) {
				var c = Ud(a);
				if (c) {
					var b = c[2];
					return [a.Math.round(c[0] * b), a.Math.round(c[1] * b)]
				}
				c = uc(a);
				return [n(c, "clientWidth") || a.innerWidth, n(c, "clientHeight") || a.innerHeight]
			}

			function Ud(a) {
				var c = n(a, "visualViewport.width"),
					b = n(a, "visualViewport.height");
				a = n(a, "visualViewport.scale");
				return da(c) || da(b) ? null : [Math.floor(c), Math.floor(b), a]
			}

			function uc(a) {
				var c = n(a,
						"document") || {},
					b = c.documentElement;
				return "CSS1Compat" === c.compatMode ? b : Fc(a) || b
			}

			function Fc(a) {
				a = n(a, "document");
				try {
					return a.getElementsByTagName("body")[0]
				} catch (c) {
					return null
				}
			}

			function fc(a, c) {
				try {
					return (new RegExp("(?:^|\\s)" + a + "(?:\\s|$)")).test(c.className)
				} catch (b) {
					return !1
				}
			}

			function Gc(a) {
				var c;
				try {
					if (c = a.target || a.srcElement) !c.ownerDocument && c.documentElement ? c = c.documentElement : c.ownerDocument !== document && (c = null)
				} catch (b) {}
				return c
			}

			function vc(a) {
				var c = a && a.parentNode;
				c && c.removeChild(a)
			}

			function Jb(a) {
				return a ? a.innerText || "" : ""
			}

			function Ef(a) {
				if (da(a)) return !1;
				a = a.nodeType;
				return 3 === a || 8 === a
			}

			function rj(a, c, b) {
				void 0 === c && (c = "");
				void 0 === b && (b = "_ym");
				var d = "" + b + c;
				d && (d += "_");
				return {
					Nd: Eq(a),
					C: function(e, f) {
						var g = sj(a, "" + d + e);
						return Va(g) && !X(f) ? f : g
					},
					D: function(e, f) {
						tj(a, "" + d + e, f);
						return this
					},
					ic: function(e) {
						uj(a, "" + d + e);
						return this
					}
				}
			}

			function tj(a, c, b) {
				var d = bg(a);
				a = Kb(a, b);
				if (!Va(a)) try {
					d.setItem(c, a)
				} catch (e) {}
			}

			function sj(a, c) {
				var b = bg(a);
				try {
					return Qb(a, b.getItem(c))
				} catch (d) {}
				return null
			}

			function uj(a, c) {
				var b = bg(a);
				try {
					b.removeItem(c)
				} catch (d) {}
			}

			function bg(a) {
				try {
					return a.localStorage
				} catch (c) {}
				return null
			}

			function Kb(a, c, b) {
				try {
					return a.JSON.stringify(c, null, b)
				} catch (d) {
					return null
				}
			}

			function Xd(a, c, b) {
				void 0 === b && (b = null);
				a.Ha || (a.Ha = jf());
				c && a.Ha.Sb(c, b);
				return a.Ha
			}

			function Ie(a) {
				return {
					O: function(c, b) {
						var d = a.document,
							e = c.K;
						if (e && cg(a)) {
							var f = ka(a),
								g = function(h) {
									cg(a) || (f.wb(d, vj, g), b());
									return h
								};
							f.F(d, vj, g);
							e.D("pr", "1")
						} else b()
					}
				}
			}

			function Fd(a) {
				return function(c, b, d) {
					return function(e,
						f) {
						var g = A(w(zd, Ae([c, f]), xa), wj[a] || []);
						g = va(g, d);
						return xj(c, b, g)(e)
					}
				}
			}

			function xj(a, c, b) {
				var d = Cb(a, c);
				return function(e) {
					return yj(b, e, !0).then(function() {
						var f = e.ma || {},
							g = f.Nh,
							h = void 0 === g ? "" : g;
						g = f.za;
						var k = void 0 === g ? "" : g;
						f = f.Oh;
						f = A(function(l) {
							return ua.Pa + "//" + ("" + h + l || gc) + "/" + k
						}, void 0 === f ? [gc] : f);
						return d(e, f)
					}).then(function(f) {
						var g = f.rb;
						f = f.kg;
						e.Gi = g;
						e.Lj = f;
						return yj(b, e).then(u(g, P))
					})
				}
			}

			function Cb(a, c) {
				return function(b, d) {
					return zj(a, c, d, b)
				}
			}

			function zj(a, c, b, d, e, f) {
				var g;
				void 0 ===
					e && (e = 0);
				void 0 === f && (f = 0);
				var h = z({
						ha: []
					}, d.Y),
					k = c[f],
					l = k[0];
				k = k[1];
				var m = b[e];
				h.Xa && h.Xa["Content-Type"] || !h.ca || (h.Xa = z({}, h.Xa, (g = {}, g["Content-Type"] = "application/x-www-form-urlencoded", g)), h.ca = "site-info=" + fe(h.ca));
				h.Xc = h.ca ? "POST" : "GET";
				h.Za = Fq(a, d, l);
				h.za = (d.ma || {}).za;
				h.ha.push(l);
				z(d.Y, h);
				g = "" + m + (d.Lc && d.Lc.ji ? "/1" : "");
				var p = 0;
				p = Gq(a, g, h);
				return k(g, h).then(function(q) {
					var r = p,
						t, x;
					rb(a, (t = {}, t.name = "requestSuccess", t.data = (x = {}, x.body = q, x.requestId = r, x), t));
					return {
						rb: q,
						kg: e
					}
				})["catch"](function(q) {
					var r =
						p,
						t, x;
					rb(a, (t = {}, t.name = "requestFail", t.data = (x = {}, x.error = q, x.requestId = r, x), t));
					r = f + 1 >= c.length;
					t = e + 1 >= b.length;
					r && t && Ta(q);
					return zj(a, c, b, d, !t && r ? e + 1 : e, r ? 0 : f + 1)
				})
			}

			function Fq(a, c, b) {
				var d = z({}, c.J);
				a = ia(a);
				c.K && (d["browser-info"] = Ha(c.K.l()).D("st", a(Xf)).Fa());
				!d.t && (c = c.Ha) && (c.D("ti", b), d.t = c.Fa());
				return d
			}

			function Gq(a, c, b) {
				var d, e, f, g = Wa(a),
					h = b.ha,
					k = b.ca,
					l = b.Xa,
					m = b.Za;
				b = b.Xc;
				rb(a, (d = {}, d.name = "request", d.data = (e = {}, e.url = c, e.requestId = g, e.senderParams = (f = {}, f.rBody = k, f.debugStack = h, f.rHeaders =
					l, f.rQuery = m, f.verb = b, f), e), d));
				return g
			}

			function Aj(a, c, b, d) {
				a[c] || (a[c] = []);
				b && !da(d) && Bj(a[c], b, d)
			}

			function Bj(a, c, b) {
				for (var d = [c, b], e = -1E4, f = 0; f < a.length; f += 1) {
					var g = a[f],
						h = g[0];
					g = g[1];
					if (b === g && h === c) return;
					if (b < g && b >= e) {
						a.splice(f, 0, d);
						return
					}
					e = g
				}
				a.push(d)
			}

			function yj(a, c, b) {
				void 0 === b && (b = !1);
				return new L(function(d, e) {
					function f(k, l) {
						l();
						d()
					}
					var g = a.slice();
					g.push({
						O: f,
						Ba: f
					});
					var h = cc(g, function(k, l) {
						var m = b ? k.O : k.Ba;
						if (m) try {
							m(c, l)
						} catch (p) {
							h(Hq), e(p)
						} else l()
					});
					h(Cj)
				})
			}

			function Pb(a, c,
				b) {
				var d = b || "as";
				if (a.postMessage && !a.attachEvent) {
					b = ka(a);
					var e = "__ym__promise_" + Wa(a) + "_" + Wa(a),
						f = F;
					d = C(a, d, function(g) {
						try {
							var h = g.data
						} catch (k) {
							return
						}
						h === e && (f(), g.stopPropagation && g.stopPropagation(), c())
					});
					f = b.F(a, ["message"], d);
					a.postMessage(e, "*")
				} else S(a, c, 0, d)
			}

			function eh(a, c, b, d, e) {
				void 0 === d && (d = 1);
				void 0 === e && (e = "itc");
				c = cc(c, b);
				ed(a, c, d)(Ya(C(a, e), F))
			}

			function ed(a, c, b, d) {
				void 0 === b && (b = 1);
				void 0 === d && (d = Dj);
				dg = Infinity === b;
				return Aa(function(e, f) {
					function g() {
						try {
							var k = c(d(a, b));
							h = h.concat(k)
						} catch (l) {
							return e(l)
						}
						c(Iq);
						if (c(Gd)) return f(h), Ej(a);
						dg ? (c(d(a, 1E4)), f(h), Ej(a)) : S(a, g, 100)
					}
					var h = [];
					Jq(g)
				})
			}

			function Ej(a) {
				if (eg.length) {
					var c = eg.shift();
					dg ? c() : S(a, c, 100)
				} else fg = !1
			}

			function Jq(a) {
				fg ? eg.push(a) : (fg = !0, a())
			}

			function uf(a) {
				return Aa(function(c, b) {
					b(a)
				})
			}

			function Xo(a) {
				return Aa(function(c, b) {
					a.then(b, c)
				})
			}

			function Kq(a) {
				var c = [],
					b = 0;
				return Aa(function(d, e) {
					y(function(f, g) {
						f(Ya(d, function(h) {
							try {
								c[g] = h, b += 1, b === a.length && e(c)
							} catch (k) {
								d(k)
							}
						}))
					}, a)
				})
			}

			function Wo(a) {
				var c = [],
					b = !1;
				return Aa(function(d, e) {
					function f(g) {
						c.push(g) === a.length && d(c)
					}
					y(function(g) {
						g(Ya(f, function(h) {
							if (!b) try {
								e(h), b = !0
							} catch (k) {
								f(k)
							}
						}))
					}, a)
				})
			}

			function Ya(a, c) {
				return function(b) {
					return b(a, c)
				}
			}

			function cc(a, c) {
				return Aa({
					Sa: a,
					Rd: c || P,
					xe: !1,
					va: 0
				})
			}

			function Cj(a) {
				function c() {
					function d() {
						b = !0;
						a.va += 1
					}
					b = !1;
					a.Rd(a.Sa[a.va], function() {
						d()
					});
					b || (a.va += 1, d = u(a, Cj))
				}
				for (var b = !0; !Gd(a) && b;) c()
			}

			function Dj(a, c) {
				return function(b) {
					var d = ia(a),
						e = d(ca);
					return Fj(function(f, g) {
						d(ca) - e >= c && g(Gj)
					})(b)
				}
			}

			function gg(a, c) {
				return function(b) {
					var d = ia(a),
						e = d(ca);
					return hg(function(f) {
						d(ca) - e >= c && Gj(f)
					})(b)
				}
			}

			function hg(a) {
				return function(c) {
					for (var b; c.Sa.length && !Gd(c);) b = c.Sa.pop(), b = c.Rd(b, c.Sa), a(c);
					return b
				}
			}

			function Lq(a) {
				Gd(a) && Ta(Ic("i"));
				var c = a.Rd(a.Sa[a.va]);
				a.va += 1;
				return c
			}

			function Iq(a) {
				a.xe = !1
			}

			function Gj(a) {
				a.xe = !0
			}

			function Hq(a) {
				a.va = a.Sa.length
			}

			function Gd(a) {
				return a.xe || a.Sa.length <= a.va
			}

			function zb(a) {
				a = ia(a);
				return Math.round(a(Hj) / 50)
			}

			function Hj(a) {
				var c = a.Jc,
					b = c[1];
				a = c[0] && b ?
					b() : ca(a) - a.Ph;
				return Math.round(a)
			}

			function Xf(a) {
				return Math.round(ca(a) / 1E3)
			}

			function nb(a) {
				return Math.floor(ca(a) / 1E3 / 60)
			}

			function ca(a) {
				var c = a.Fe;
				return 0 !== c ? c : ig(a.l, a.Jc)
			}

			function Tf(a) {
				var c = ka(a),
					b = Ij(a),
					d = {
						l: a,
						Fe: 0,
						Jc: b,
						Ph: ig(a, b)
					},
					e = b[1];
				b[0] && e || c.F(a, ["beforeunload", "unload"], function() {
					0 === d.Fe && (d.Fe = ig(a, d.Jc))
				});
				return Aa(d)
			}

			function Mq(a) {
				return (10 > a ? "0" : "") + a
			}

			function Nq(a, c) {
				return a.clearInterval(c)
			}

			function Oq(a, c, b, d) {
				return a.setInterval(C(a, "i.err." + (d || "def"), c), b)
			}

			function S(a,
				c, b, d) {
				return Bd(a, C(a, "d.err." + (d || "def"), c), b)
			}

			function kd(a) {
				var c = {};
				return {
					F: function(b, d) {
						y(function(e) {
							n(c, e) || (c[e] = Ri(a));
							c[e].F(d)
						}, b);
						return this
					},
					ga: function(b, d) {
						y(function(e) {
							n(c, e) && c[e].ga(d)
						}, b);
						return this
					},
					aa: function(b, d) {
						return n(c, b) ? C(a, "e." + d, c[b].aa)(d) : []
					}
				}
			}

			function Ri(a) {
				var c = [],
					b = {};
				b.Ej = c;
				b.F = w(Ka("push", c), u(b, P));
				b.ga = w($a(Lb(a))(c), $a(Ka("splice", c))(1), u(b, P));
				b.aa = w(P, $a(xa), Pq(c));
				return b
			}

			function Jj(a, c, b, d, e, f) {
				a = Qq(a);
				var g = a.F,
					h = a.ga;
				f = f ? h : g;
				if (c[f])
					if (a.Qi)
						if (e) c[f](b,
							d, e);
						else c[f](b, d);
				else c[f]("on" + b, d)
			}

			function B(a, c, b) {
				return function() {
					return C(arguments[0], a, c, b).apply(this, arguments)
				}
			}

			function C(a, c, b, d, e) {
				var f = b || Ta;
				return function() {
					var g = d;
					try {
						g = f.apply(e || null, arguments)
					} catch (h) {
						jd(a, c, h)
					}
					return g
				}
			}

			function ig(a, c) {
				var b = c || Ij(a),
					d = b[0];
				b = b[1];
				return !isNaN(d) && R(b) ? Math.round(b() + d) : a.Date.now ? a.Date.now() : (new a.Date).getTime()
			}

			function Ij(a) {
				a = td(a);
				var c = n(a, "timing.navigationStart"),
					b = n(a, "now");
				b && (b = G(b, a));
				return [c, b]
			}

			function td(a) {
				return n(a,
					"performance") || n(a, "webkitPerformance")
			}

			function jd(a, c, b) {
				var d = "u.a.e",
					e = "";
				b && ("object" === typeof b ? (b.unk && Ta(b), d = b.message, e = "string" === typeof b.stack && b.stack.replace(/\n/g, "\\n") || "n.s.e.s") : d = "" + b);
				Rq(d) || Ua(u(d, fb), Sq) || Tq(d) && .1 <= a.Math.random() || y(w(P, Ae(["jserrs", d, c, e]), xa), Kj)
			}

			function Sd() {
				var a = Na(arguments);
				return Ta(Pa(a))
			}

			function Pa(a) {
				var c = "";
				Z(a) ? c = H(".", a) : fa(a) && (c = a);
				return Ic("err.kn(" + ua.ab + ")" + c)
			}

			function bj(a) {
				return Ic("http." + a.status + ".st." + a.statusText + ".rt." + ("" +
					a.responseText).substring(0, 50))
			}

			function Uq(a) {
				this.message = a
			}

			function rb(a, c) {
				if (Je(a)) {
					var b = c.counterKey;
					if (b) {
						var d = b.split(":");
						b = d[1];
						d = jg(ce(d[0]));
						if ("1" === b || d) return
					}
					b = Vq(a);
					1E3 === b.length && b.shift();
					b.push(c)
				}
			}

			function ci(a, c, b) {
				Ke(a, "metrika_enabled", "1", 0, c, b, !0);
				var d = Lj(a);
				(d = d && d.metrika_enabled) && Mj(a, "metrika_enabled", c, b, !0);
				return !!d
			}

			function Ke(a, c, b, d, e, f, g) {
				void 0 === g && (g = !1);
				if (di(a, pd, c)) {
					var h = c + "=" + encodeURIComponent(b) + ";";
					h += "" + Wq(a);
					if (d) {
						var k = new Date;
						k.setTime(k.getTime() +
							6E4 * d);
						h += "expires=" + k.toUTCString() + ";"
					}
					e && (d = e.replace(Xq, ""), h += "domain=" + d + ";");
					try {
						a.document.cookie = h + ("path=" + (f || "/")), g || (Nj(a)[c] = b)
					} catch (l) {}
				}
			}

			function pd(a, c) {
				var b = Nj(a);
				return b ? b[c] || null : null
			}

			function Lj(a) {
				try {
					var c = a.document.cookie;
					if (!da(c)) {
						var b = {};
						y(function(d) {
							d = d.split("=");
							var e = d[1];
							b[Za(d[0])] = Za(Oj(e))
						}, (c || "").split(";"));
						return b
					}
				} catch (d) {}
				return null
			}

			function di(a, c, b) {
				return !kg.length || J(b, Le) ? !0 : M(function(d, e) {
					return d && e(a, c, b)
				}, !0, kg)
			}

			function Cc(a) {
				return a ?
					w(Ca, Pj(function(c, b) {
						var d = b[0],
							e = b[1];
						X(e) || da(e) || c.push(d + "=" + fe(e));
						return c
					}, []), pe("&"))(a) : ""
			}

			function Qj(a) {
				return a ? w(Sb(function(c) {
					c = c.split("=");
					var b = c[1];
					return [c[0], da(b) ? void 0 : Oj(b)]
				}), Pj(function(c, b) {
					c[b[0]] = b[1];
					return c
				}, {}))(a.split("&")) : {}
			}

			function Oj(a) {
				var c = "";
				try {
					c = decodeURIComponent(a)
				} catch (b) {}
				return c
			}

			function fe(a) {
				try {
					return encodeURIComponent(a)
				} catch (c) {}
				a = H("", ha(function(c) {
					return 55296 >= c.charCodeAt(0)
				}, a.split("")));
				return encodeURIComponent(a)
			}

			function Za(a,
				c) {
				if (a) {
					var b = Rj ? Rj.call(a) : ("" + a).replace(ej, "");
					return c && b.length > c ? b.substring(0, c) : b
				}
				return ""
			}

			function Yi(a) {
				var c = a.match(Sj);
				if (c) {
					a = c[1];
					if (c = c[2]) return J(c, lg) ? c : !1;
					if (a) return lg[0]
				}
				return !1
			}

			function T(a) {
				return M(function(c, b) {
					var d = n(a, "location." + b);
					c[b] = d ? "" + d : "";
					return c
				}, {}, Yq)
			}

			function Tj(a) {
				return M(function(c, b) {
					c[wb[b[0]].ea] = b[1];
					return c
				}, {}, Ca(a))
			}

			function Ml(a, c, b, d, e) {
				var f = dh(a, b, d, e);
				a = M(function(g, h) {
					var k = h[1],
						l = k.ob;
					k = f[k.ea];
					g[h[0]] = l ? l(k) : k;
					return g
				}, {}, Ca(c));
				Ti(a,
					a.N || {});
				return a
			}

			function dh(a, c, b, d) {
				var e;
				return qa(a) ? a : (e = {}, e.id = a, e.type = b, e.defer = d, e.params = c, e)
			}

			function Zq(a) {
				a = K(a);
				return nc[a] && nc[a].Wi || null
			}

			function Uj(a) {
				a = K(a);
				return nc[a] && nc[a].Vi
			}

			function Ti(a, c) {
				var b = K(a),
					d = n(c, "__ym.turbo_page"),
					e = n(c, "__ym.turbo_page_id");
				nc[b] || (nc[b] = {});
				if (d || e) nc[b].Vi = d, nc[b].Wi = e
			}

			function mf(a, c) {
				if (Hd(a) && c) {
					var b = qb(a).match(mg);
					if (b && b.length) return +b[1] >= c
				}
				return !1
			}

			function nf(a, c) {
				var b = qb(a);
				return b && (b = b.match($q)) && 1 < b.length ? Da(b[1]) >= c :
					!1
			}

			function cg(a) {
				return J("prerender", A(u(n(a, "document"), n), ["webkitVisibilityState", "visibilityState"]))
			}

			function Wa(a, c, b) {
				var d = X(b);
				X(c) && d ? (d = 1, c = 1073741824) : d ? d = 1 : (d = c, c = b);
				return a.Math.floor(a.Math.random() * (c - d)) + d
			}

			function ar() {
				var a = Na(arguments),
					c = a[0];
				for (a = a.slice(1); a.length;) {
					var b = a.shift(),
						d;
					for (d in b) hc(b, d) && (c[d] = b[d]);
					hc(b, "toString") && (c.toString = b.toString)
				}
				return c
			}

			function br(a) {
				return function(c) {
					return c ? a(c) : []
				}
			}

			function Vj(a) {
				return X(a) ? [] : ng(function(c, b) {
					c.push([b,
						a[b]
					]);
					return c
				}, [], Wj(a))
			}

			function Wj(a) {
				var c = [],
					b;
				for (b in a) hc(a, b) && c.push(b);
				return c
			}

			function ce(a) {
				try {
					return parseInt(a, 10)
				} catch (c) {
					return null
				}
			}

			function kc(a, c) {
				return a.isFinite(c) && !a.isNaN(c) && "[object Number]" === Object.prototype.toString.call(c)
			}

			function cr(a) {
				for (var c = [], b = a.length - 1; 0 <= b; --b) c[a.length - 1 - b] = a[b];
				return c
			}

			function va(a, c) {
				y(w(P, Ka("push", a)), c);
				return a
			}

			function le(a, c) {
				return Array.prototype.sort.call(c, a)
			}

			function Me(a) {
				return a.splice(0, a.length)
			}

			function Ga(a) {
				return a ?
					Z(a) ? a : Ne ? Ne(a) : "number" === typeof a.length && 0 <= a.length ? Xj(a) : [] : []
			}

			function dr(a, c) {
				for (var b = 0; b < c.length; b += 1)
					if (b in c && a.call(c, c[b], b)) return !0;
				return !1
			}

			function er(a, c) {
				return M(function(b, d, e) {
					d = a(d, e);
					return b.concat(Z(d) ? d : [d])
				}, [], c)
			}

			function Yj(a, c) {
				return M(function(b, d, e) {
					b.push(a(d, e));
					return b
				}, [], c)
			}

			function fr(a, c) {
				if (!Hd(a)) return !0;
				try {
					c.call({
						0: !0,
						length: -Math.pow(2, 32) + 1
					}, function() {
						throw 1;
					})
				} catch (b) {
					return !1
				}
				return !0
			}

			function gr(a, c) {
				for (var b = "", d = 0; d < c.length; d += 1) b += "" +
					(d ? a : "") + c[d];
				return b
			}

			function hr(a, c) {
				return 1 <= Zj(za(a), c).length
			}

			function ir(a, c) {
				for (var b = 0; b < c.length; b += 1)
					if (a.call(c, c[b], b)) return c[b]
			}

			function Zj(a, c) {
				return ng(function(b, d, e) {
					a(d, e) && b.push(d);
					return b
				}, [], c)
			}

			function je(a, c, b) {
				return b ? a : c
			}

			function jr(a, c) {
				return M(function(b, d, e) {
					return b ? !!a(d, e) : !1
				}, !0, c)
			}

			function Nf(a, c, b) {
				try {
					if (R(c)) {
						var d = Na(arguments).slice(3);
						c.apply(da(b) ? null : b, d)
					}
				} catch (e) {
					Bd(a, u(e, Ta), 0)
				}
			}

			function Ta(a) {
				throw a;
			}

			function Bd(a, c, b) {
				return Dc("setTimeout",
					a)(c, b)
			}

			function ja(a, c) {
				return Dc("clearTimeout", a)(c)
			}

			function wd() {
				return []
			}

			function oc() {
				return {}
			}

			function Dc(a, c) {
				var b = n(c, a),
					d = n(c, "constructor.prototype." + a) || b;
				try {
					if (d && d.apply) return function() {
						return d.apply(c, arguments)
					}
				} catch (e) {
					return b
				}
				return d
			}

			function sb(a, c, b) {
				return function() {
					var d = I(arguments[0]),
						e = b ? "global" : "m1461",
						f = d.C(e, {}),
						g = n(f, a);
					g || (g = v(c), f[a] = g, d.D(e, f));
					return g.apply(null, arguments)
				}
			}

			function ee(a, c) {
				void 0 === c && (c = {});
				if (!a || 1 > a.length) return c;
				yb(function(b, d,
					e) {
					if (e === a.length - 1) return b;
					e === a.length - 2 ? b[d] = a[e + 1] : hc(b, d) || (b[d] = {});
					return b[d]
				}, c, a);
				return c
			}

			function Rc(a) {
				a = a.Ya = a.Ya || {};
				var c = a._metrika = a._metrika || {};
				return {
					Ga: function(b, d) {
						og.call(c, b) || (c[b] = d);
						return this
					},
					D: function(b, d) {
						c[b] = d;
						return this
					},
					C: function(b, d) {
						var e = c[b];
						return og.call(c, b) || X(d) ? e : d
					}
				}
			}

			function hc(a, c) {
				return da(a) ? !1 : og.call(a, c)
			}

			function v(a, c) {
				var b = [],
					d = [];
				var e = c ? c : P;
				return function() {
					var f = Na(arguments),
						g = e.apply(void 0, f),
						h = cf(g, d);
					if (-1 !== h) return b[h];
					f =
						a.apply(void 0, f);
					b.push(f);
					d.push(g);
					return f
				}
			}

			function Lb(a) {
				if (pg) return pg;
				var c = !1;
				try {
					c = [].indexOf && 0 === [void 0].indexOf(void 0)
				} catch (d) {}
				var b = a.Array && a.Array.prototype && la(a.Array.prototype.indexOf, "indexOf");
				a = void 0;
				return pg = a = c && b ? function(d, e) {
					return b.call(e, d)
				} : kr
			}

			function kr(a, c) {
				for (var b = 0; b < c.length; b += 1)
					if (c[b] === a) return b;
				return -1
			}

			function xa(a, c) {
				return c ? a(c) : a()
			}

			function w() {
				var a = Na(arguments),
					c = a.shift();
				return function() {
					var b = c.apply(void 0, arguments);
					return M(ak, b,
						a)
				}
			}

			function Pj(a, c) {
				return D([a, c], M)
			}

			function ng(a, c, b) {
				for (var d = 0, e = b.length; d < e;) c = a(c, b[d], d), d += 1;
				return c
			}

			function cb(a) {
				return Ka("test", a)
			}

			function Ka(a, c) {
				return G(c[a], c)
			}

			function u(a, c) {
				return G(c, null, a)
			}

			function D(a, c) {
				return G.apply(void 0, qg([c, null], a))
			}

			function lr(a) {
				return function() {
					var c = Na(arguments);
					return a.apply(c[0], [c[1]].concat(c.slice(2)))
				}
			}

			function mr() {
				var a = Na(arguments),
					c = a[0],
					b = a[1],
					d = a.slice(2);
				return function() {
					var e = qg(d, Na(arguments));
					if (Function.prototype.call) return Function.prototype.call.apply(c,
						qg([b], e));
					if (b) {
						for (var f = "_b"; b[f];) f += "_" + f.length;
						b[f] = c;
						e = b[f] && bk(f, e, b);
						delete b[f];
						return e
					}
					return bk(c, e)
				}
			}

			function bk(a, c, b) {
				void 0 === c && (c = []);
				b = b || {};
				var d = c.length,
					e = a;
				R(e) && (e = "d", b[e] = a);
				var f;
				d ? 1 === d ? f = b[e](c[0]) : 2 === d ? f = b[e](c[0], c[1]) : 3 === d ? f = b[e](c[0], c[1], c[2]) : 4 === d && (f = b[e](c[0], c[1], c[2], c[3])) : f = b[e]();
				return f
			}

			function Na(a) {
				if (Ne) try {
					return Ne(a)
				} catch (c) {}
				return Xj(a)
			}

			function Xj(a) {
				for (var c = a.length, b = [], d = 0; d < c; d += 1) b.push(a[d]);
				return b
			}

			function qa(a) {
				return !Va(a) &&
					!X(a) && "[object Object]" === Object.prototype.toString.call(a)
			}

			function da(a) {
				return X(a) || Va(a)
			}

			function R(a) {
				return "function" === typeof a
			}

			function $a(a) {
				return function(c) {
					return function(b) {
						return a(b, c)
					}
				}
			}

			function oa(a) {
				return function(c) {
					return function(b) {
						return a(c, b)
					}
				}
			}

			function ak(a, c) {
				return c(a)
			}

			function Mp(a) {
				return a.replace(/\^/g, "\\^").replace(/\$/g, "\\$").replace(Sf, "\\.").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\|/g, "\\|").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\?/g,
					"\\?").replace(/\*/g, "\\*").replace(/\+/g, "\\+").replace(/\{/g, "\\{").replace(/\}/g, "\\}")
			}

			function nr(a) {
				return "" + a
			}

			function fb(a, c) {
				return !(!a || -1 === mb(a, c))
			}

			function ic(a, c) {
				return mb(a, c)
			}

			function or(a, c) {
				for (var b = 0, d = a.length - c.length, e = 0; e < a.length; e += 1) {
					b = a[e] === c[b] ? b + 1 : 0;
					if (b === c.length) return e - c.length + 1;
					if (!b && e > d) break
				}
				return -1
			}

			function fa(a) {
				return "string" === typeof a
			}

			function la(a, c) {
				return Fa(c, a) && a
			}

			function Fa(a, c) {
				var b = Oe(a, c);
				c && !b && rg.push([a, c]);
				return b
			}

			function Oe(a, c) {
				if (!c ||
					"function" !== typeof c) return !1;
				try {
					var b = "" + c
				} catch (h) {
					return !1
				}
				var d = b.length;
				if (d > 35 + a.length) return !1;
				for (var e = d - 13, f = 0, g = 8; g < d; g += 1) {
					f = "[native code]" [f] === b[g] || 7 === f && "-" === b[g] ? f + 1 : 0;
					if (12 === f) return !0;
					if (!f && g > e) break
				}
				return !1
			}

			function F() {}

			function sg(a, c) {
				sg = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(b, d) {
					b.__proto__ = d
				} || function(b, d) {
					for (var e in d) d.hasOwnProperty(e) && (b[e] = d[e])
				};
				return sg(a, c)
			}

			function Ec(a) {
				return !a
			}

			function db(a, c) {
				return c
			}

			function P(a) {
				return a
			}

			function Ma(a, c) {
				function b() {
					this.constructor = a
				}
				sg(a, c);
				a.prototype = null === c ? Object.create(c) : (b.prototype = c.prototype, new b)
			}

			function qg() {
				for (var a = 0, c = 0, b = arguments.length; c < b; c++) a += arguments[c].length;
				a = Array(a);
				var d = 0;
				for (c = 0; c < b; c++)
					for (var e = arguments[c], f = 0, g = e.length; f < g; f++, d++) a[d] = e[f];
				return a
			}

			function n(a, c) {
				return a ? M(function(b, d) {
					if (da(b)) return b;
					try {
						return b[d]
					} catch (e) {}
					return null
				}, a, c.split(".")) : null
			}

			function pr(a) {
				return "[object Array]" === Object.prototype.toString.call(a)
			}

			function qr() {}

			function rr(a, c) {
				return function() {
					a.apply(c, arguments)
				}
			}

			function Ia(a) {
				if (!(this instanceof Ia)) throw new TypeError("Promises must be constructed via new");
				if ("function" !== typeof a) throw new TypeError("not a function");
				this.Ja = 0;
				this.Ke = !1;
				this.Oa = void 0;
				this.Ab = [];
				ck(a, this)
			}

			function dk(a, c) {
				for (; 3 === a.Ja;) a = a.Oa;
				0 === a.Ja ? a.Ab.push(c) : (a.Ke = !0, Ia.Le(function() {
					var b = 1 === a.Ja ? c.oi : c.vi;
					if (null === b)(1 === a.Ja ? tg : Id)(c.promise, a.Oa);
					else {
						try {
							var d = b(a.Oa)
						} catch (e) {
							Id(c.promise, e);
							return
						}
						tg(c.promise,
							d)
					}
				}))
			}

			function tg(a, c) {
				try {
					if (c === a) throw new TypeError("A promise cannot be resolved with itself.");
					if (c && ("object" === typeof c || "function" === typeof c)) {
						var b = c.then;
						if (c instanceof Ia) {
							a.Ja = 3;
							a.Oa = c;
							ug(a);
							return
						}
						if ("function" === typeof b) {
							ck(rr(b, c), a);
							return
						}
					}
					a.Ja = 1;
					a.Oa = c;
					ug(a)
				} catch (d) {
					Id(a, d)
				}
			}

			function Id(a, c) {
				a.Ja = 2;
				a.Oa = c;
				ug(a)
			}

			function ug(a) {
				2 === a.Ja && 0 === a.Ab.length && Ia.Le(function() {
					a.Ke || Ia.Bg(a.Oa)
				});
				for (var c = 0, b = a.Ab.length; c < b; c++) dk(a, a.Ab[c]);
				a.Ab = null
			}

			function sr(a, c, b) {
				this.oi =
					"function" === typeof a ? a : null;
				this.vi = "function" === typeof c ? c : null;
				this.promise = b
			}

			function ck(a, c) {
				var b = !1;
				try {
					a(function(d) {
						b || (b = !0, tg(c, d))
					}, function(d) {
						b || (b = !0, Id(c, d))
					})
				} catch (d) {
					b || (b = !0, Id(c, d))
				}
			}

			function Mj(a, c, b, d, e) {
				void 0 === e && (e = !1);
				return Ke(a, c, "", -100, b, d, e)
			}

			function dd(a, c, b) {
				void 0 === c && (c = "_ym_");
				void 0 === b && (b = "");
				var d = tr(a),
					e = 1 === (d || "").split(".").length ? d : "." + d,
					f = b ? "_" + b : "";
				return {
					ic: function(g, h, k) {
						Mj(a, "" + c + g + f, h || e, k);
						return this
					},
					C: function(g) {
						return pd(a, "" + c + g + f)
					},
					D: function(g,
						h, k, l, m) {
						Ke(a, "" + c + g + f, h, k, l || e, m);
						return this
					}
				}
			}

			function Qb(a, c) {
				if (!c) return null;
				try {
					return a.JSON.parse(c)
				} catch (b) {
					return null
				}
			}

			function dc(a) {
				a = "" + a;
				for (var c = 2166136261, b = a.length, d = 0; d < b; d += 1) c ^= a.charCodeAt(d), c += (c << 1) + (c << 4) + (c << 7) + (c << 8) + (c << 24);
				return c >>> 0
			}

			function wc(a, c) {
				var b = ur(a);
				return b ? (b.href = c, {
					protocol: b.protocol,
					host: b.host,
					port: b.port,
					hostname: b.hostname,
					hash: b.hash,
					search: b.search,
					query: b.search.replace(/^\?/, ""),
					pathname: b.pathname || "/",
					path: (b.pathname || "/") + b.search,
					href: b.href
				}) : {}
			}

			function ek(a) {
				return (a = T(a).hash.split("#")[1]) ? a.split("?")[0] : ""
			}

			function vr(a, c) {
				var b = ek(a);
				fk = Oq(a, function() {
					var d = ek(a);
					d !== b && (c(), b = d)
				}, 200, "t.h");
				return G(Nq, null, a, fk)
			}

			function wr(a, c, b, d) {
				var e, f, g = c.ba,
					h = c.Ie,
					k = c.qc,
					l = I(a),
					m = Ha((e = {}, e.wh = 1, e.pv = 1, e));
				e = n(d, "isTrusted");
				d && !da(e) && m.D("ite", pb(e));
				Td(g) && a.Ya && a.Ya.Direct && m.D("ad", "1");
				h && m.D("ut", "1");
				g = l.C("lastReferrer");
				d = T(a).href;
				k = {
					J: (f = {}, f["page-url"] = k || d, f["page-ref"] = g, f),
					K: m
				};
				b(k, c)["catch"](C(a, "g.s"));
				l.D("lastReferrer", d)
			}

			function xr(a, c, b) {
				function d() {
					r || (q = !0, t = !1, r = !0, f())
				}

				function e() {
					m = !0;
					k(!1);
					c()
				}

				function f() {
					ja(a, l);
					if (m) k(!1);
					else {
						var N = Math.max(0, b - (t ? x : x + p(ca) - E));
						N ? l = S(a, e, N, "u.t.d.c") : e()
					}
				}

				function g() {
					t = q = r = !0;
					x += p(ca) - E;
					E = p(ca);
					f()
				}

				function h() {
					q || r || (x = 0);
					E = p(ca);
					q = r = !0;
					t = !1;
					f()
				}

				function k(N) {
					N = N ? O.F : O.wb;
					N(a, ["blur"], g);
					N(a, ["focus"], h);
					N(a.document, ["click", "mousemove", "keydown", "scroll"], d)
				}
				var l = 0,
					m = !1;
				if (ag(a)) return l = S(a, c, b, "u.t.d"), D([a, l], ja);
				var p = ia(a),
					q = !1,
					r = !1,
					t = !0,
					x = 0,
					E = p(ca),
					O = ka(a);
				k(!0);
				f();
				return function() {
					ja(a, l);
					k(!1)
				}
			}

			function tb(a, c) {
				a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
				c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535];
				var b = [0, 0, 0, 0];
				b[3] += a[3] * c[3];
				b[2] += b[3] >>> 16;
				b[3] &= 65535;
				b[2] += a[2] * c[3];
				b[1] += b[2] >>> 16;
				b[2] &= 65535;
				b[2] += a[3] * c[2];
				b[1] += b[2] >>> 16;
				b[2] &= 65535;
				b[1] += a[1] * c[3];
				b[0] += b[1] >>> 16;
				b[1] &= 65535;
				b[1] += a[2] * c[2];
				b[0] += b[1] >>> 16;
				b[1] &= 65535;
				b[1] += a[3] * c[1];
				b[0] += b[1] >>> 16;
				b[1] &= 65535;
				b[0] += a[0] * c[3] + a[1] * c[2] + a[2] * c[1] + a[3] * c[0];
				b[0] &= 65535;
				return [b[0] << 16 | b[1], b[2] << 16 | b[3]]
			}

			function pc(a, c) {
				a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
				c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535];
				var b = [0, 0, 0, 0];
				b[3] += a[3] + c[3];
				b[2] += b[3] >>> 16;
				b[3] &= 65535;
				b[2] += a[2] + c[2];
				b[1] += b[2] >>> 16;
				b[2] &= 65535;
				b[1] += a[1] + c[1];
				b[0] += b[1] >>> 16;
				b[1] &= 65535;
				b[0] += a[0] + c[0];
				b[0] &= 65535;
				return [b[0] << 16 | b[1], b[2] << 16 | b[3]]
			}

			function Sc(a, c) {
				c %= 64;
				if (32 === c) return [a[1], a[0]];
				if (32 > c) return [a[0] << c | a[1] >>> 32 - c, a[1] << c | a[0] >>> 32 - c];
				c -= 32;
				return [a[1] << c | a[0] >>>
					32 - c, a[0] << c | a[1] >>> 32 - c
				]
			}

			function jb(a, c) {
				c %= 64;
				return 0 === c ? a : 32 > c ? [a[0] << c | a[1] >>> 32 - c, a[1] << c] : [a[1] << c - 32, 0]
			}

			function wa(a, c) {
				return [a[0] ^ c[0], a[1] ^ c[1]]
			}

			function gk(a) {
				a = wa(a, [0, a[0] >>> 1]);
				a = tb(a, [4283543511, 3981806797]);
				a = wa(a, [0, a[0] >>> 1]);
				a = tb(a, [3301882366, 444984403]);
				return a = wa(a, [0, a[0] >>> 1])
			}

			function yr(a, c) {
				void 0 === c && (c = 210);
				var b = a || "",
					d = c || 0,
					e = b.length - b.length % 16;
				d = {
					V: [0, d],
					X: [0, d]
				};
				for (var f = 0; f < e; f += 16) {
					var g = d,
						h = [a.charCodeAt(f + 4) & 255 | (a.charCodeAt(f + 5) & 255) << 8 | (a.charCodeAt(f +
							6) & 255) << 16 | (a.charCodeAt(f + 7) & 255) << 24, a.charCodeAt(f) & 255 | (a.charCodeAt(f + 1) & 255) << 8 | (a.charCodeAt(f + 2) & 255) << 16 | (a.charCodeAt(f + 3) & 255) << 24],
						k = [a.charCodeAt(f + 12) & 255 | (a.charCodeAt(f + 13) & 255) << 8 | (a.charCodeAt(f + 14) & 255) << 16 | (a.charCodeAt(f + 15) & 255) << 24, a.charCodeAt(f + 8) & 255 | (a.charCodeAt(f + 9) & 255) << 8 | (a.charCodeAt(f + 10) & 255) << 16 | (a.charCodeAt(f + 11) & 255) << 24];
					h = tb(h, Pe);
					h = Sc(h, 31);
					h = tb(h, Qe);
					g.V = wa(g.V, h);
					g.V = Sc(g.V, 27);
					g.V = pc(g.V, g.X);
					g.V = pc(tb(g.V, [0, 5]), [0, 1390208809]);
					k = tb(k, Qe);
					k = Sc(k, 33);
					k = tb(k, Pe);
					g.X = wa(g.X, k);
					g.X = Sc(g.X, 31);
					g.X = pc(g.X, g.V);
					g.X = pc(tb(g.X, [0, 5]), [0, 944331445])
				}
				e = b.length % 16;
				f = b.length - e;
				g = [0, 0];
				h = [0, 0];
				switch (e) {
					case 15:
						h = wa(h, jb([0, b.charCodeAt(f + 14)], 48));
					case 14:
						h = wa(h, jb([0, b.charCodeAt(f + 13)], 40));
					case 13:
						h = wa(h, jb([0, b.charCodeAt(f + 12)], 32));
					case 12:
						h = wa(h, jb([0, b.charCodeAt(f + 11)], 24));
					case 11:
						h = wa(h, jb([0, b.charCodeAt(f + 10)], 16));
					case 10:
						h = wa(h, jb([0, b.charCodeAt(f + 9)], 8));
					case 9:
						h = wa(h, [0, b.charCodeAt(f + 8)]), h = tb(h, Qe), h = Sc(h, 33), h = tb(h, Pe), d.X = wa(d.X, h);
					case 8:
						g = wa(g, jb([0, b.charCodeAt(f + 7)], 56));
					case 7:
						g = wa(g, jb([0, b.charCodeAt(f + 6)], 48));
					case 6:
						g = wa(g, jb([0, b.charCodeAt(f + 5)], 40));
					case 5:
						g = wa(g, jb([0, b.charCodeAt(f + 4)], 32));
					case 4:
						g = wa(g, jb([0, b.charCodeAt(f + 3)], 24));
					case 3:
						g = wa(g, jb([0, b.charCodeAt(f + 2)], 16));
					case 2:
						g = wa(g, jb([0, b.charCodeAt(f + 1)], 8));
					case 1:
						g = wa(g, [0, b.charCodeAt(f)]), g = tb(g, Pe), g = Sc(g, 31), g = tb(g, Qe), d.V = wa(d.V, g)
				}
				d.V = wa(d.V, [0, b.length]);
				d.X = wa(d.X, [0, b.length]);
				d.V = pc(d.V, d.X);
				d.X = pc(d.X, d.V);
				d.V = gk(d.V);
				d.X = gk(d.X);
				d.V = pc(d.V,
					d.X);
				d.X = pc(d.X, d.V);
				return ("00000000" + (d.V[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.V[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.X[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.X[1] >>> 0).toString(16)).slice(-8)
			}

			function Jd(a, c, b) {
				var d = c.getAttribute("itemtype");
				b = gb('[itemprop~="' + b + '"]', c);
				return d ? ha(function(e) {
					return e.parentNode && Tb("[itemtype]", a, e.parentNode) === c
				}, b) : b
			}

			function eb(a, c, b) {
				return (a = Jd(a, c, b)) && a.length ? a[0] : null
			}

			function ab(a) {
				if (!a) return "";
				a = Z(a) ? a : [a];
				return a.length ?
					a[0].getAttribute("content") || Jb(a[0]) : ""
			}

			function hk(a) {
				return a ? a.attributes && a.getAttribute("datetime") ? a.getAttribute("datetime") : ab(a) : ""
			}

			function od(a, c, b) {
				a = c && (fb(c.className, "ym-disable-keys") || fb(c.className, "-metrika-nokeys"));
				return b && c ? a || !!zq(["ym-disable-keys", "-metrika-nokeys"], c).length : a
			}

			function xf(a, c) {
				return Ge(c) ? "password" === c.type || c.name && J(c.name.toLowerCase(), ik) || c.id && J(c.id.toLowerCase(), ik) : !1
			}

			function jk(a, c) {
				var b = Math.max(0, Math.min(c, 65535));
				va(a, [b >> 8, b & 255])
			}

			function Rb(a, c) {
				va(a, [c & 255])
			}

			function ib(a, c, b) {
				return -1 !== Lb(a)(b, zr) ? (Rb(c, b), !1) : !0
			}

			function Q(a, c) {
				for (var b = Math.max(0, c | 0); 127 < b;) va(a, [b & 127 | 128]), b >>= 7;
				va(a, [b])
			}

			function vg(a, c) {
				Q(a, c.length);
				for (var b = 0; b < c.length; b += 1) Q(a, c.charCodeAt(b))
			}

			function wg(a, c) {
				var b = c;
				255 < b.length && (b = b.substr(0, 255));
				a.push(b.length);
				for (var d = 0; d < b.length; d += 1) jk(a, b.charCodeAt(d))
			}

			function Ar(a, c) {
				var b = [];
				if (ib(a, b, 27)) return [];
				Q(b, c);
				return b
			}

			function Br(a, c) {
				var b = La(c);
				if (!b) return c[Xa] = -1, null;
				var d = +c[Xa];
				if (!isFinite(d) || 0 >= d) return null;
				if (c.attributes)
					for (var e = c; e;) {
						if (e.attributes.pj) return null;
						e = e.parentElement
					}
				e = 64;
				var f = Ee(a, c),
					g = f && f[Xa] ? f[Xa] : 0;
				0 > g && (g = 0);
				b = (b || "").toUpperCase();
				var h = Cr()[b];
				h || (e |= 2);
				var k = mj(a, c);
				k || (e |= 4);
				var l = Bf(a, c);
				(f = f ? Bf(a, f) : null) && l[0] === f[0] && l[1] === f[1] && l[2] === f[2] && l[3] === f[3] && (e |= 8);
				yc[d].Cf = l[0] + "x" + l[1];
				yc[d].size = l[2] + "x" + l[3];
				c.id && "string" === typeof c.id && (e |= 32);
				f = [];
				if (ib(a, f, 1)) return null;
				Q(f, d);
				Rb(f, e);
				Q(f, g);
				h ? Rb(f, h) : wg(f, b);
				k && Q(f, k);
				e & 8 || (Q(f, l[0]), Q(f, l[1]), Q(f, l[2]), Q(f, l[3]));
				e & 32 && wg(f, c.id);
				Rb(f, 0);
				return f
			}

			function Dr(a, c) {
				var b = c[Xa];
				if (!b || 0 > b || !zf(c) || !c.form || ai(a, c.form)) return [];
				var d = qj(a, c.form);
				if (0 > d) return [];
				if (Ge(c)) {
					var e = {
						text: 0,
						color: 0,
						fc: 0,
						tj: 0,
						"datetime-local": 0,
						email: 0,
						Af: 0,
						Kj: 0,
						search: 0,
						Pj: 0,
						time: 0,
						url: 0,
						month: 0,
						Rj: 0,
						password: 2,
						Jj: 3,
						rj: 4,
						file: 6,
						image: 7
					};
					e = e[c.type]
				} else {
					e = {
						mj: 1,
						nj: 5
					};
					var f = La(c);
					e = X(f) ? "" : e[f]
				}
				if ("number" !== typeof e) return [];
				f = -1;
				for (var g = c.form.elements, h = g.length, k = 0, l = 0; k < h; k += 1)
					if (g[k].name ===
						c.name) {
						if (g[k] === c) {
							f = l;
							break
						}
						l += 1
					}
				if (0 > f) return [];
				g = [];
				if (ib(a, g, 7)) return [];
				Q(g, b);
				Q(g, d);
				Q(g, e);
				vg(g, c.name || "");
				Q(g, f);
				return g
			}

			function xc(a, c, b) {
				void 0 === b && (b = []);
				for (var d = []; c && !Pn(a, c, b); c = Ee(a, c)) d.push(c);
				y(function(e) {
					yc.counter += 1;
					var f = yc.counter;
					e[Xa] = f;
					yc[f] = {};
					f = Br(a, e);
					e = Dr(a, e);
					f && e && (va(b, f), va(b, e))
				}, Er(d));
				return b
			}

			function Fr(a) {
				var c = a.na;
				if (!nd || c && !c.fromElement) return Yh(a)
			}

			function Gr(a) {
				var c = a.na;
				if (c && !c.toElement) return Af(a)
			}

			function kk(a) {
				var c = Gc(a.na);
				if (c && ie(c)) {
					var b =
						Xh(a, c),
						d = b.concat;
					var e = zb(a.l),
						f = [];
					ib(a.l, f, 17) ? a = [] : (Q(f, e), Q(f, c[Xa]), a = f);
					return d.call(b, a)
				}
			}

			function lk(a) {
				var c = a.l,
					b = a.na.target;
				if (b && ie(b)) {
					c = xc(c, b);
					var d = c.concat;
					var e = zb(a.l),
						f = [];
					ib(a.l, f, 18) ? a = [] : (Q(f, e), Q(f, b[Xa]), a = f);
					return d.call(c, a)
				}
			}

			function mk(a) {
				var c = a.l,
					b = Gc(a.na);
				if (!b || xf(c, b) || od(c, b)) return [];
				if (zf(b)) {
					var d = I(c).C("isEU"),
						e = Mc(c, b, d),
						f = e.Ua;
					d = e.mb;
					e = e.eb;
					if (He(b)) var g = b.checked;
					else g = b.value, g = f ? H("", nk(g.split(""))) : g;
					c = xc(c, b);
					f = c.concat;
					var h = zb(a.l);
					d = d && !e;
					e = [];
					ib(a.l, e, 39) ? a = [] : (Q(e, h), Q(e, b[Xa]), wg(e, String(g)), Rb(e, d ? 1 : 0), a = e);
					return f.call(c, a)
				}
			}

			function Re(a) {
				var c = a.l,
					b = a.na,
					d = Gc(b);
				if (!d || "SCROLLBAR" === d.nodeName) return [];
				var e = [],
					f = u(e, va);
				d && ie(d) ? f(Xh(a, d)) : f(xc(c, d));
				var g = Mi(c, b);
				f = e.concat;
				a = zb(a.l);
				var h = b.type,
					k = [g.x, g.y];
				g = b.which;
				b = b.button;
				var l;
				var m = Fe(c, d);
				var p = m[0];
				for (m = m[1]; d && (!p || !m);)
					if (d = Ee(c, d)) m = Fe(c, d), p = m[0], m = m[1];
				d ? (p = d[Xa], !p || 0 > p ? c = [] : (m = (l = {}, l.mousemove = 2, l.click = 32, l.dblclick = 33, l.mousedown = 4, l.mouseup = 30, l.touch =
					12, l)[h]) ? (l = [], d = $f(c, d), ib(c, l, m) ? c = [] : (Q(l, a), Q(l, p), Q(l, Math.max(0, k[0] - d.left)), Q(l, Math.max(0, k[1] - d.top)), /^mouse(up|down)|click$/.test(h) && (c = g || b, Rb(l, 2 > c ? 1 : c === (g ? 2 : 4) ? 4 : 2)), c = l)) : c = []) : c = [];
				return f.call(e, c)
			}

			function Hr(a) {
				var c = null,
					b = a.l,
					d = b.document;
				if (b.getSelection) {
					d = void 0;
					try {
						d = b.getSelection()
					} catch (g) {
						return []
					}
					if (Va(d)) return [];
					var e = "" + d;
					c = d.anchorNode
				} else d.selection && d.selection.createRange && (d = d.selection.createRange(), e = d.text, c = d.parentElement());
				if ("string" !== typeof e) return [];
				try {
					for (; c && 1 !== c.nodeType;) c = c.parentNode
				} catch (g) {
					return []
				}
				if (!c) return [];
				d = Mc(b, c).Ua || od(b, c, !0);
				c = c.getElementsByTagName("*");
				for (var f = 0; f < c.length && !d;) d = c[f], d = Mc(b, d).Ua || od(b, d, !0), f += 1;
				if (e !== xg) return xg = e, d = d ? H("", nk(e.split(""))) : e, e = zb(a.l), 0 === d.length ? d = b = "" : 100 >= d.length ? (b = d, d = "") : 200 >= d.length ? (b = d.substr(0, 100), d = d.substr(100)) : (b = d.substr(0, 97), d = d.substr(d.length - 97)), c = [], ib(a.l, c, 29) ? a = [] : (Q(c, e), vg(c, b), vg(c, d), a = c), a
			}

			function Ir(a) {
				return Re(a).concat(Hr(a) || [])
			}

			function ok(a) {
				return (a.shiftKey ?
					2 : 0) | (a.ctrlKey ? 4 : 0) | (a.altKey ? 1 : 0) | (a.metaKey ? 8 : 0) | (a.ctrlKey || a.altKey ? 16 : 0)
			}

			function pk(a) {
				var c = [];
				yg || (yg = !0, xg && va(c, Ar(a.l, zb(a.l))), Pb(a.l, function() {
					yg = !1
				}, "fv.c"));
				return c
			}

			function qk(a, c, b, d) {
				c = Gc(c);
				if (!c || Cf(a, c)) return [];
				var e = Mc(a, c),
					f = e.mb,
					g = e.eb;
				e = e.Ua;
				var h = I(a);
				if (!g && (f && h.C("isEU") || od(a, c))) a = [];
				else {
					f = xc(a, c);
					g = f.concat;
					var k = zb(a);
					h = [];
					if (ib(a, h, 38)) a = [];
					else {
						Q(h, k);
						jk(h, b);
						Rb(h, d);
						a = c[Xa];
						if (!a || 0 > a) a = 0;
						Q(h, a);
						Rb(h, e ? 1 : 0);
						a = h
					}
					a = g.call(f, a)
				}
				return a
			}

			function Jr(a) {
				var c = a.l,
					b = a.na,
					d = b.keyCode,
					e = ok(b),
					f = [],
					g = u(f, va);
				if ({
						3: 1,
						8: 1,
						9: 1,
						13: 1,
						16: 1,
						17: 1,
						18: 1,
						19: 1,
						20: 1,
						27: 1,
						33: 1,
						34: 1,
						35: 1,
						36: 1,
						37: 1,
						38: 1,
						39: 1,
						40: 1,
						45: 1,
						46: 1,
						91: 1,
						92: 1,
						93: 1,
						106: 1,
						110: 1,
						111: 1,
						144: 1,
						145: 1
					}[d] || 112 <= d && 123 >= d || 96 <= d && 105 >= d || e & 16) 19 === d && 4 === (e & -17) && (d = 144), g(qk(c, b, d, e | 16)), zg = !1, Pb(c, function() {
					zg = !0
				}, "fv.kd"), !(67 === d && e & 4) || e & 1 || e & 2 || g(pk(a));
				return f
			}

			function Kr(a) {
				var c = a.l;
				a = a.na;
				var b = [];
				zg && !Ag && 0 !== a.which && (va(b, qk(c, a, a.charCode || a.keyCode, ok(a))), Ag = !0, Pb(c, function() {
					Ag = !1
				}, "fv.kp"));
				return b
			}

			function rk(a) {
				var c = a.l,
					b = Gc(a.na);
				if (!b || ai(c, b)) return [];
				var d = [];
				if ("FORM" === b.nodeName) {
					for (var e = b.elements, f = 0; f < e.length; f += 1) pj(e[f]) || va(d, xc(c, e[f]));
					a = zb(a.l);
					e = qj(c, b);
					if (0 > e) c = [];
					else {
						f = b.elements;
						var g = f.length;
						b = [];
						for (var h = 0; h < g; h += 1)
							if (!pj(f[h])) {
								var k = f[h][Xa];
								k && 0 < k && b.push(k)
							}
						f = [];
						if (ib(c, f, 11)) c = [];
						else {
							Q(f, a);
							Q(f, e);
							Q(f, b.length);
							for (c = 0; c < b.length; c += 1) Q(f, b[c]);
							c = f
						}
					}
					va(d, c)
				}
				return d
			}

			function Lr(a) {
				var c = a.flush;
				a = Gc(a.na);
				"BODY" === La(a) && c()
			}

			function hn(a, c) {
				var b,
					d = Gc(c),
					e = ua.cc,
					f = Rc(a);
				if (d && fc("ym-advanced-informer", d)) {
					var g = f.C("ifc", 0) + 1;
					f.D("ifc", g);
					g = d.getAttribute("data-lang");
					var h = Da(d.getAttribute("data-cid") || "");
					if (h || 0 === h)(e = n(a, "Ya." + e + ".informer")) ? e((b = {}, b.i = d, b.id = h, b.lang = g, b)) : f.D("ib", !0), b = c || window.event, b.preventDefault ? b.preventDefault() : b.returnValue = !1
				}
			}

			function Ll(a, c, b, d, e) {
				if (!b.length) return e;
				b = A(function(f) {
					return D([a, c, d], f)
				}, b);
				return w.apply(void 0, b)(e)
			}
			var Tc = {
					construct: "Metrika2",
					callbackPostfix: "2",
					version: "o9c5bf6xvvql2i98vjpzbzuqqn",
					host: "mc.yandex.ru"
				},
				rg = [],
				Sf = /\./g,
				sk = la(String.prototype.indexOf, "indexOf"),
				mb = sk ? function(a, c) {
					return sk.call(a, c)
				} : or,
				za = oa(function(a, c) {
					return a === c
				}),
				Oc = oa(function(a, c) {
					a(c);
					return c
				}),
				Aa = oa(ak),
				Va = za(null),
				X = za(void 0),
				Ne = la(Array.from, "from"),
				tk = la(Function.prototype.bind, "bind"),
				G = tk ? lr(tk) : mr,
				uk = la(Array.prototype.reduce, "reduce"),
				yb = uk ? function(a, c, b) {
					return uk.call(b, a, c)
				} : ng,
				M = yb,
				mq = w,
				re = w(P, xa),
				pg, cf = Lb(window),
				Dm = $a(cf),
				og = Object.prototype.hasOwnProperty,
				I = v(Rc),
				U = $a(n),
				Oa = U("length"),
				Ae = oa(D),
				Mr = oa(Ka),
				vk = la(Array.prototype.every, "every"),
				yi = vk ? function(a, c) {
					return vk.call(c, a)
				} : jr,
				Nb = D([1, null], je),
				pb = D([1, 0], je),
				Db = Boolean,
				wk = la(Array.prototype.filter, "filter"),
				ha = wk ? function(a, c) {
					return wk.call(c, a)
				} : Zj,
				Ea = u(Db, ha),
				Nr = oa(ha),
				xk = la(Array.prototype.find, "find"),
				hb = xk ? function(a, c) {
					return xk.call(c, a)
				} : ir,
				yk = la(Array.prototype.includes, "includes"),
				J = yk ? function(a, c, b) {
					return yk.call(c, a, b)
				} : hr,
				qc = $a(J),
				zk = la(Array.prototype.join, "join"),
				H = zk ? function(a, c) {
					return zk.call(c, a)
				} :
				gr,
				pe = oa(H),
				Ak = v(function(a) {
					var c = n(a, "navigator") || {};
					a = n(c, "userAgent") || "";
					c = n(c, "vendor") || "";
					return {
						qf: -1 < mb(c, "Apple"),
						lg: a
					}
				}),
				qb = v(U("navigator.userAgent")),
				mg = /Firefox\/([0-9]+)/i,
				Hd = v(function(a) {
					var c = n(a, "document.documentElement.style"),
						b = n(a, "InstallTrigger");
					a = -1 !== (n(a, "navigator.userAgent") || "").toLowerCase().search(mg);
					mg.lastIndex = 0;
					return !(!(c && "MozAppearance" in c) || da(b)) || a
				}),
				Bk = la(Array.isArray, "isArray"),
				Z = Bk ? function(a) {
					return Bk(a)
				} : pr,
				Ck = la(Array.prototype.map, "map"),
				Dk =
				Ck && fr(window, Array.prototype.map) ? function(a, c) {
					return c && 0 < c.length ? Ck.call(c, a) : []
				} : Yj,
				A = Dk,
				y = Dk,
				Ek = la(Array.prototype.flatMap, "flatMap"),
				tc = Ek ? function(a, c) {
					return Ek.call(c, a)
				} : er,
				Sb = oa(A),
				Pq = $a(A),
				Fk = la(Array.prototype.some, "some"),
				Ua = Fk ? function(a, c) {
					return Fk.call(c, a)
				} : dr,
				xe = v(Lb),
				zd = U("0"),
				Or = oa(le),
				Gk = la(Array.prototype.reverse, "reverse"),
				Er = Gk ? function(a) {
					return Gk.call(a)
				} : cr,
				Hk = $a(parseInt),
				Da = Hk(10),
				me = Hk(2),
				Ik = la(Object.keys, "keys"),
				Jk = la(Object.entries, "entries"),
				Ca = Jk ? br(Jk) : Vj,
				ea = Ik ? function(a) {
					return Ik(a)
				} : Wj,
				Kk = la(Object.values, "values"),
				Pr = w(Vj, u(U("1"), Yj)),
				Qr = Kk ? function(a) {
					return Kk(a)
				} : Pr,
				z = Object.assign || ar,
				Wh = oa(function(a, c) {
					return z({}, a, c)
				}),
				be = v(w(U("String.fromCharCode"), u("fromCharCode", Fa), Ec)),
				Bg = v(w(qb, cb(/ipad|iphone|ipod/i))),
				ui = v(function(a) {
					return n(a, "navigator.platform") || ""
				}),
				ud = v(function(a) {
					a = Ak(a);
					var c = a.lg;
					return a.qf && !c.match("CriOS")
				}),
				Rr = cb(/Android.*Version\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]|Android.*Version\/[0-9][0-9.]*\s(?:Mobile\s)?Safari\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]*|; wv\).*Chrome\/[0-9][0-9.]*\sMobile/),
				Sr = cb(/; wv\)/),
				sd = v(function(a) {
					a = qb(a);
					return Sr(a) || Rr(a)
				}),
				Tr = /Chrome\/(\d+)\./,
				Ur = v(function(a) {
					return (a = (n(a, "navigator.userAgent") || "").match(Tr)) && a.length ? 76 <= Da(a[1]) : !1
				}),
				ke = v(function(a) {
					a = (qb(a) || "").toLowerCase();
					return fb(a, "android") && fb(a, "mobile")
				}),
				Vr = "other none unknown wifi ethernet bluetooth cellular wimax mixed".split(" "),
				Wr = v(function(a) {
					var c = n(a, "navigator.connection.type");
					if (X(c)) return null;
					a = xe(a)(c, Vr);
					return -1 === a ? c : "" + a
				}),
				ag = v(w(U("document.addEventListener"), Ec)),
				Lk = v(function(a) {
					var c = n(a, "navigator") || {};
					return M(function(b, d) {
						return b || n(c, d)
					}, "", ["language", "userLanguage", "browserLanguage", "systemLanguage"])
				}),
				rh = v(function(a) {
					var c = n(a, "navigator") || {};
					a = Lk(a);
					fa(a) || (a = "", c = n(c, "languages.0"), fa(c) && (a = c));
					return a.toLowerCase().split("-")[0]
				}),
				ob = v(function(a) {
					return (n(a, "top") || a) !== a
				}),
				Xr = v(U("top.contentWindow")),
				Yr = v(function(a) {
					var c = !1;
					try {
						c = a.navigator.javaEnabled()
					} catch (b) {}
					return c
				}),
				Zr = v(function(a) {
					var c = "__webdriver_evaluate __selenium_evaluate __webdriver_script_function __webdriver_script_func __webdriver_script_fn __fxdriver_evaluate __driver_unwrapped __webdriver_unwrapped __driver_evaluate __selenium_unwrapped __fxdriver_unwrapped".split(" "),
						b = n(a, "external");
					b = n(b, "toString") ? "" + b.toString() : "";
					b = -1 !== mb(b, "Sequentum");
					var d = n(a, "document.documentElement"),
						e = ["selenium", "webdriver", "driver"];
					return !!(Ua(u(a, n), ["_selenium", "callSelenium", "_Selenium_IDE_Recorder"]) || Ua(u(n(a, "document"), n), c) || b || d && Ua(G(d.getAttribute, d), e))
				}),
				$r = v(function(a) {
					return !!(Ua(u(a, n), ["_phantom", "__nightmare", "callPhantom"]) || /(PhantomJS)|(HeadlessChrome)/.test(qb(a)) || n(a, "navigator.webdriver") || n(a, "isChrome") && !n(a, "chrome"))
				}),
				as = v(function(a) {
					return !(!n(a,
						"ia_document.shareURL") || !n(a, "ia_document.referrer"))
				}),
				Kd = v(function(a) {
					var c = qb(a) || "",
						b = c.match(/Mac OS X ([0-9]+)_([0-9]+)/);
					b = b ? [+b[1], +b[2]] : [0, 0];
					c = c.match(/iPhone OS ([1-9]+)_([0-9]+)/);
					return 14 <= (c ? +c[1] : 0) ? !0 : (Bg(a) || 10 < b[0] || 10 === b[0] && 13 <= b[1]) && ud(a)
				}),
				$q = /Edg\/(\d+)\./,
				Ce = v(function(a) {
					return Kd(a) || mf(a, 68) || nf(a, 79)
				}),
				bs = Tc.construct,
				gc = Tc.host,
				Cg = ag(window),
				ua = {
					xg: 24226447,
					pg: 26302566,
					Ag: 51533966,
					kj: 65446441,
					Pa: "https:",
					ab: "1461",
					cc: bs,
					wg: Cg ? 512 : 2048,
					ug: Cg ? 512 : 2048,
					vg: Cg ? 100 : 400,
					lj: 100,
					yg: "noindex"
				},
				Ld = [],
				K = v(function(a) {
					return a.id + ":" + a.ba
				}),
				nc = {},
				Td = za("1"),
				cs = setTimeout;
			Ia.prototype["catch"] = function(a) {
				return this.then(null, a)
			};
			Ia.prototype.then = function(a, c) {
				var b = new this.constructor(qr);
				dk(this, new sr(a, c, b));
				return b
			};
			Ia.prototype["finally"] = function(a) {
				var c = this.constructor;
				return this.then(function(b) {
					return c.resolve(a()).then(function() {
						return b
					})
				}, function(b) {
					return c.resolve(a()).then(function() {
						return c.reject(b)
					})
				})
			};
			Ia.all = function(a) {
				return new Ia(function(c,
					b) {
					function d(h, k) {
						try {
							if (k && ("object" === typeof k || "function" === typeof k)) {
								var l = k.then;
								if ("function" === typeof l) {
									l.call(k, function(m) {
										d(h, m)
									}, b);
									return
								}
							}
							e[h] = k;
							0 === --f && c(e)
						} catch (m) {
							b(m)
						}
					}
					if (!a || "undefined" === typeof a.length) return b(new TypeError("Promise.all accepts an array"));
					var e = Array.prototype.slice.call(a);
					if (0 === e.length) return c([]);
					for (var f = e.length, g = 0; g < e.length; g++) d(g, e[g])
				})
			};
			Ia.resolve = function(a) {
				return a && "object" === typeof a && a.constructor === Ia ? a : new Ia(function(c) {
					c(a)
				})
			};
			Ia.reject = function(a) {
				return new Ia(function(c, b) {
					b(a)
				})
			};
			Ia.race = function(a) {
				return new Ia(function(c, b) {
					if (!a || "undefined" === typeof a.length) return b(new TypeError("Promise.race accepts an array"));
					for (var d = 0, e = a.length; d < e; d++) Ia.resolve(a[d]).then(c, b)
				})
			};
			Ia.Le = "function" === typeof setImmediate && function(a) {
				setImmediate(a)
			} || function(a) {
				cs(a, 0)
			};
			Ia.Bg = function(a) {
				"undefined" !== typeof console && console && console.warn("Possible Unhandled Promise Rejection:", a)
			};
			var L = window.Promise,
				ds = la(L, "Promise"),
				Mk = la(n(L, "resolve"), "resolve"),
				Nk = la(n(L, "reject"), "reject"),
				Ok = la(n(L, "all"), "all");
			if (ds && Mk && Nk && Ok) {
				var Se = function(a) {
					return new Promise(a)
				};
				Se.resolve = G(Mk, L);
				Se.reject = G(Nk, L);
				Se.all = G(Ok, L);
				L = Se
			} else L = Ia;
			var af = [],
				bd = [],
				W = [],
				Sa = [],
				Dg = [],
				Md = [],
				jg = qc([26812653]),
				es = v(w(U("id"), jg), K),
				Wb = {
					id: "id",
					Ie: "ut",
					ba: "type",
					Vd: "ldc",
					Ta: "nck",
					qc: "url",
					nh: "referrer"
				},
				fs = /^\d+$/,
				Uc = {
					id: function(a) {
						a = "" + (a || "0");
						fs.test(a) || (a = "0");
						try {
							var c = Da(a)
						} catch (b) {
							c = 0
						}
						return c
					},
					ba: function(a) {
						return "" + (a || 0 === a ?
							a : "0")
					},
					Ta: Db,
					Ie: Db
				};
			Wb.kd = "defer";
			Uc.kd = Db;
			Wb.N = "params";
			Uc.N = function(a) {
				return qa(a) || Z(a) ? a : null
			};
			Wb.He = "userParams";
			Wb.hg = "triggerEvent";
			Uc.hg = Db;
			Wb.Vf = "sendTitle";
			Uc.Vf = function(a) {
				return !!a || X(a)
			};
			Wb.Ce = "trackHash";
			Uc.Ce = Db;
			Wb.gg = "trackLinks";
			Wb.Yg = "enableAll";
			var wb = M(function(a, c) {
					var b = c[0];
					a[b] = {
						ea: c[1],
						ob: Uc[b]
					};
					return a
				}, {}, Ca(Wb)),
				Yq = "hash host hostname href pathname port protocol search".split(" "),
				lg = "ru by kz az kg lv md tj tm uz ee fr lt com co.il com.ge com.am com.tr com.ru".split(" "),
				Sj = /(?:^|\.)(?:(ya\.ru)|(?:yandex)\.(\w+|com?\.\w+))$/,
				ve = v(function(a) {
					return (a ? a.replace(/^www\./, "") : "").toLowerCase()
				}),
				ti = v(function(a) {
					a = T(a).hostname;
					var c = !1;
					a && (c = -1 !== a.search(Sj));
					return c
				}),
				Pk = w(T, U("protocol"), za("https:")),
				Wq = v(function(a) {
					return Ur(a) && Pk(a) ? "SameSite=None;Secure;" : ""
				}),
				ej = /^\s+|\s+$/g,
				Rj = la(String.prototype.trim, "trim"),
				Te = oa(function(a, c) {
					return c.replace(a, "")
				}),
				gs = Te(/\s/g),
				$d = Te(/\D/g),
				kh = Te(/\d/g),
				Le = ["metrika_enabled"],
				kg = [],
				Nj = sb("gsc", Lj),
				Xq = /:\d+$/,
				tr = v(function(a) {
					var c =
						(T(a).host || "").split(".");
					return 1 === c.length ? c[0] : M(function(b, d, e) {
						e += 1;
						2 <= e && !b && (e = H(".", c.slice(-e)), ci(a, e) && (b = e));
						return b
					}, "", c)
				}),
				Nc = v(dd),
				Je = v(function(a) {
					var c = Nc(a),
						b = "1" === c.C("debug"),
						d = -1 < ic(T(a).href, "_ym_debug=1") || -1 < ic(T(a).href, "_ym_debug=2"),
						e = a._ym_debug;
					!e && !d || b || (a = T(a), c.D("debug", "1", void 0, a.host));
					return !!(b || e || d)
				}),
				Vq = sb("debuggerEvents", wd, !0),
				Sq = ["http.0.st..rt.", "network error occurred", "send beacon", "Content Security Policy", "DOM Exception 18"],
				Nd, Ic = function(a) {
					return function(c,
						b) {
						void 0 === b && (b = !1);
						if (Nd) var d = new Nd(c);
						else Fa("Error", a.Error) ? (Nd = a.Error, d = new a.Error(c)) : (Nd = Uq, d = new Nd(c));
						b && (d.unk = !0);
						return d
					}
				}(window),
				Tq = cb(/^http./),
				Rq = cb(/^err.kn/),
				Kj = [],
				Qq = v(function(a) {
					a = !(!a.addEventListener || !a.removeEventListener);
					return {
						Qi: a,
						F: a ? "addEventListener" : "attachEvent",
						ga: a ? "removeEventListener" : "detachEvent"
					}
				}),
				hs = v(function(a) {
					var c = !1;
					if (!a.addEventListener) return c;
					try {
						var b = Object.defineProperty({}, "passive", {
							get: function() {
								c = !0;
								return 1
							}
						});
						a.addEventListener("test",
							F, b)
					} catch (d) {}
					return c
				}),
				is = oa(function(a, c) {
					if (null !== c) return a ? z({
						capture: !0,
						passive: !0
					}, c || {}) : !!c
				}),
				ka = v(function(a) {
					var c = hs(a),
						b = is(c),
						d = {};
					return z(d, {
						F: function(e, f, g, h) {
							y(function(k) {
								var l = b(h);
								Jj(a, e, k, g, l, !1)
							}, f);
							return G(d.wb, d, e, f, g, h)
						},
						wb: function(e, f, g, h) {
							y(function(k) {
								var l = b(h);
								Jj(a, e, k, g, l, !0)
							}, f)
						}
					})
				}),
				ia = v(Tf),
				Fj = oa(function(a, c) {
					for (var b = []; !Gd(c);) {
						var d = Lq(c);
						a(d, function(e) {
							return e(c)
						});
						b.push(d)
					}
					return b
				}),
				Qk = oa(function(a, c) {
					return Aa(function(b, d) {
						return c(b, function(e) {
							try {
								d(a(e))
							} catch (f) {
								b(f)
							}
						})
					})
				}),
				Eg = oa(function(a, c) {
					return Aa(function(b, d) {
						return c(b, function(e) {
							try {
								a(e)(Ya(b, d))
							} catch (f) {
								b(f)
							}
						})
					})
				}),
				eg = [],
				fg = !1,
				dg = !1,
				Rk = oa(function(a, c) {
					var b = c || {};
					return {
						l: u(b, P),
						C: function(d, e) {
							var f = b[d];
							return X(f) && !X(e) ? e : f
						},
						D: function(d, e) {
							b[d] = e;
							return this
						},
						Sb: function(d, e) {
							return "" === e || da(e) ? this : this.D(d, e)
						},
						Fa: u(b, a)
					}
				}),
				Ha = Rk(function(a) {
					var c = "";
					a = yb(function(b, d) {
						var e = d[0],
							f = "" + e + ":" + d[1];
						"t" === e ? c = f : b.push(f);
						return b
					}, [], Ca(a));
					c && a.push(c);
					return H(":", a)
				}),
				Fg, wj = (Fg = {}, Fg.w = [
					[function(a,
						c) {
						return {
							O: function(b, d) {
								var e, f = b.J;
								f = (e = {}, e["page-url"] = f && f["page-url"] || "", e.charset = "utf-8", e);
								"0" !== c.ba && (f["cnt-class"] = c.ba);
								b.K || (b.K = Ha());
								e = b.K;
								var g = b.Y;
								f = {
									ma: {
										za: "watch/" + c.id
									},
									Y: z(void 0 === g ? {} : g, {
										zb: !!e.C("pv") && !e.C("ar") && !e.C("wh")
									}),
									J: z(b.J || {}, f)
								};
								z(b, f);
								d()
							}
						}
					}, 1]
				], Fg),
				Gg = u(wj, Aj),
				kb = Fd("w"),
				vj = ["webkitvisibilitychange", "visibilitychange"],
				jf = Rk(function(a) {
					a = Ca(a);
					return H("", A(function(c) {
						var b = c[0];
						c = c[1];
						return Va(c) ? "" : b + "(" + c + ")"
					}, a))
				}),
				Sk = "A B BIG BODY BUTTON DD DIV DL DT EM FIELDSET FORM H1 H2 H3 H4 H5 H6 HR I IMG INPUT LI OL P PRE SELECT SMALL SPAN STRONG SUB SUP TABLE TBODY TD TEXTAREA TFOOT TH THEAD TR U UL ABBR AREA BLOCKQUOTE CAPTION CENTER CITE CODE CANVAS DFN EMBED FONT INS KBD LEGEND LABEL MAP OBJECT Q S SAMP STRIKE TT ARTICLE AUDIO ASIDE FOOTER HEADER MENU METER NAV PROGRESS SECTION TIME VIDEO NOINDEX NOBR MAIN svg circle clippath ellipse defs foreignobject g glyph glyphref image line lineargradient marker mask path pattern polygon polyline radialgradient rect set text textpath title".split(" "),
				Np = /^\s*(data|javascript):/i,
				Pi = new RegExp(H("", ["\\.(" + H("|", "3gp 7z aac ac3 acs ai avi ape apk asf bmp bz2 cab cdr crc32 css csv cue divx dmg djvu? doc(x|m|b)? emf eps exe flac? flv iso swf gif t?gz jpe?g? js m3u8? m4a mp(3|4|e?g?) m4v md5 mkv mov msi ods og(g|m|v) psd rar rss rtf sea sfv sit sha1 svg tar tif?f torrent ts txt vob wave? wma wmv wmf webm ppt(x|m|b)? xls(x|m|b)? pdf phps png xpi g?zip".split(" ")) + ")$"]), "i"),
				Qa, Zi = (Qa = {}, Qa.hit = "h", Qa.params = "p", Qa.reachGoal = "g", Qa.userParams = "up",
					Qa.trackHash = "th", Qa.accurateTrackBounce = "atb", Qa.notBounce = "nb", Qa.addFileExtension = "fe", Qa.extLink = "el", Qa.file = "fc", Qa.trackLinks = "tl", Qa.destruct = "d", Qa.setUserID = "ui", Qa.getClientID = "ci", Qa.clickmap = "cm", Qa.enableAll = "ea", Qa),
				js = v(function() {
					var a = 0;
					return function() {
						return a += 1
					}
				}),
				ks = w(K, js, xa),
				Wf = {
					mc: function(a) {
						a = Rc(a).C("mt", {});
						a = Ca(a);
						return a.length ? M(function(c, b, d) {
							return "" + c + (d ? "-" : "") + b[0] + "-" + b[1]
						}, "", a) : null
					},
					clc: function(a) {
						var c = I(a).C("cls", {
								bc: 0,
								x: 0,
								y: 0
							}),
							b = c.bc,
							d = c.x;
						c = c.y;
						return b ? b + "-" + a.Math.floor(d / b) + "-" + a.Math.floor(c / b) : b + "-" + d + "-" + c
					},
					rqnt: function(a, c, b) {
						a = b.J;
						return !a || a.nohit ? null : ks(c)
					}
				},
				Eq = v(function(a) {
					tj(a, "_ymBRC", "1");
					var c = "1" !== sj(a, "_ymBRC");
					c || uj(a, "_ymBRC");
					return c
				}),
				Ra = v(rj),
				Vc = v(rj, function(a, c, b) {
					return "" + c + b
				}),
				ls = v(U("document.documentElement")),
				ms = v(function(a) {
					a = n(a, "document") || {};
					return ("" + (a.characterSet || a.charset || "")).toLowerCase()
				}),
				xb = v(w(U("document"), u("createElement", Dc))),
				bi = v(function(a) {
					var c = n(a, "Element.prototype");
					return c ?
						(a = hb(function(b) {
							var d = c[b];
							return !!d && Fa(b, d)
						}, ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"])) ? c[a] : null : null
				}),
				ns = za("INPUT"),
				Ge = w(La, ns),
				os = za("TEXTAREA"),
				Bq = w(La, os),
				ps = za("SELECT"),
				Cq = w(La, ps),
				He = w(U("type"), cb(/^(checkbox|radio)$/)),
				zf = w(La, cb(/^INPUT|SELECT|TEXTAREA$/)),
				ie = w(La, cb(/^INPUT|SELECT|TEXTAREA|BUTTON$/)),
				Df = "INPUT CHECKBOX RADIO TEXTAREA SELECT PROGRESS".split(" "),
				Aq = ["submit", "image", "hidden"],
				Jf = v(function() {
					for (var a = 59, c = {},
							b = 0; b < Sk.length; b += 1) c[Sk[b]] = String.fromCharCode(a), a += 1;
					return c
				}),
				lj = v(function(a) {
					return {
						wj: a,
						fb: null,
						qb: []
					}
				}),
				kj = {},
				Zf = {};
			kj.p = 500;
			var jj = {
				i: "id",
				n: "name",
				h: "href",
				ty: "type"
			};
			Zf.h = !0;
			Zf.c = !0;
			var De = {
					p: function(a, c, b) {
						if (c && oj(a, c) && c._ymp) return c._ymp;
						a = hf(a, c, b);
						c && (c._ymp = a);
						return a
					},
					c: function(a, c, b) {
						(a = Za(n(c, "textContent"))) && b && (b = b(c), b.length && Ua(w(U("textContent"), Za, za(a)), b) && (a = ""));
						Ge(c) && (a = Za(c.getAttribute && c.getAttribute("value") || a));
						return a
					}
				},
				Wc, Yf = "button," + H(",", A(function(a) {
					return 'input[type="' +
						a + '"]'
				}, ["button", "submit", "reset", "file"])) + ",a",
				Ci = u(Yf, gb),
				yq = (Wc = {}, Wc.A = "h", Wc.BUTTON = "i", Wc.DIV = "i", Wc.INPUT = "ty", Wc),
				Tk = /\/$/,
				ij = sb("r", function(a, c) {
					var b = hj(a, c),
						d = b[0];
					return !b[1] && d
				}),
				Dd = v(function() {
					return {
						Ea: {},
						pending: {},
						children: {}
					}
				}),
				Hg = U("postMessage"),
				qs = B("s.f", function(a, c, b, d, e) {
					c = c(d);
					var f = Dd(a),
						g = H(":", [c.meta.fc, c.meta.key]);
					if (Hg(b)) {
						f.pending[g] = e;
						try {
							b.postMessage(c.bg, "*")
						} catch (h) {
							delete f.pending[g];
							return
						}
						S(a, function() {
							delete f.pending[g]
						}, 5E3, "if.s")
					}
				}),
				rs = B("s.fh",
					function(a, c, b, d, e, f) {
						var g = null,
							h = null,
							k = Dd(a),
							l = null;
						try {
							g = Qb(a, f.data), h = g.__yminfo, l = g.data
						} catch (m) {
							return
						}
						if (!da(h) && h.substring && "__yminfo" === h.substring(0, 8) && !da(l) && (g = h.split(":"), 4 === g.length))
							if (h = c.id, c = g[1], a = g[2], g = g[3], !Z(l) && l.type && "0" === g && l.counterId) {
								if (!l.toCounter || l.toCounter == h) {
									k = null;
									try {
										k = f.source
									} catch (m) {}!Va(k) && Hg(k) && (f = d.aa(l.type, [f, l]), e = A(w(P, Wh(e)), f.concat([{}])), l = b([c, a, l.counterId], e), k.postMessage(l.bg, "*"))
								}
							} else g === "" + h && Z(l) && ha(function(m) {
								return !(!m.hid ||
									!m.counterId)
							}, l).length === l.length && (b = k.pending[H(":", [c, a])]) && b.apply(null, [f].concat(l))
					}),
				hd = v(function(a, c) {
					var b, d = Dc("getElementsByTagName", n(a, "document")),
						e = Dd(a),
						f = Hg(a),
						g = kd(a),
						h = ka(a);
					if (!d || !f) return null;
					d = d.call(a.document, "iframe");
					f = (b = {}, b.counterId = c.id, b.hid = "" + Bc(a), b);
					Ce(a) && (f.duid = Ed(a, c));
					uq(a, g);
					vq(a);
					b = wq(a, f);
					var k = D([a, u([], b)], qs);
					y(function(l) {
						var m = null;
						try {
							m = l.contentWindow
						} catch (p) {}
						m && k(m, {
							type: "initToChild"
						}, function(p, q) {
							g.aa("initToParent", [p, q])
						})
					}, d);
					ob(a) &&
						k(a.parent, {
							type: "initToParent"
						}, function(l, m) {
							g.aa("parentConnect", [l, m])
						});
					h.F(a, ["message"], D([a, c, b, g, f], rs));
					return {
						$: g,
						Ea: e.Ea,
						children: e.children,
						qe: k
					}
				}, w(db, K)),
				id = v(function(a, c) {
					if (!Ce(a) || !ob(a)) return Ed(a, c);
					var b = hd(a, c);
					return b && b.Ea[c.id] ? b.Ea[c.id].info.duid || Ed(a, c) : Ed(a, c)
				}, function(a, c) {
					return "{" + c.Vd + c.Ta
				}),
				ss = v(w(ia, Aa(function(a) {
					return -(new a.l.Date).getTimezoneOffset()
				}))),
				ts = w(ia, Aa(function(a) {
					a = new a.l.Date;
					return H("", A(Mq, [a.getFullYear(), a.getMonth() + 1, a.getDate(),
						a.getHours(), a.getMinutes(), a.getSeconds()
					]))
				})),
				us = w(ia, Aa(Xf)),
				Uk = v(w(ia, Aa(function(a) {
					return a.Jc[0]
				}))),
				vs = v(function(a) {
					a = I(a);
					var c = a.C("counterNum", 0) + 1;
					a.D("counterNum", c);
					return c
				}, w(db, K)),
				pa, Cd = (pa = {}, pa.vf = u(Tc.version, P), pa.nt = Wr, pa.fu = function(a, c, b) {
					var d = b.J;
					if (!d) return null;
					c = (n(a, "document.referrer") || "").replace(Tk, "");
					b = (d["page-ref"] || "").replace(Tk, "");
					d = d["page-url"];
					a = T(a).href !== d;
					c = c !== b;
					b = 0;
					a && c ? b = 3 : c ? b = 1 : a && (b = 2);
					return b
				}, pa.en = ms, pa.la = Lk, pa.ut = function(a, c, b) {
					var d =
						b.M;
					b = b.J;
					d = d && d.Cc;
					b && (ti(a) || c.Ie || d) && (b.ut = ua.yg);
					return null
				}, pa.v = u(ua.ab, P), pa.cn = vs, pa.dp = function(a) {
					var c = I(a),
						b = c.C("bt", {});
					if (X(c.C("bt"))) {
						var d = n(a, "navigator.getBattery");
						try {
							b.p = d && d.call(a.navigator)
						} catch (e) {}
						c.D("bt", b);
						b.p && b.p.then && b.p.then(C(a, "bi:dp.p", function(e) {
							b.dj = n(e, "charging") && 0 === n(e, "chargingTime")
						}))
					}
					return pb(b.dj)
				}, pa.ls = v(function(a, c) {
					var b = Vc(a, c.id),
						d = ia(a),
						e = b.C("lsid");
					return +e ? e : (d = Wa(a, 0, d(ca)), b.D("lsid", d), d)
				}, db), pa.hid = Bc, pa.phid = function(a, c) {
					if (!ob(a)) return null;
					var b = hd(a, c);
					if (!b) return null;
					var d = ea(b.Ea);
					return d.length ? b.Ea[d[0]].info.hid : null
				}, pa.z = ss, pa.i = ts, pa.et = us, pa.c = w(U("navigator.cookieEnabled"), Nb), pa.rn = w(P, Wa), pa.rqn = function(a, c, b) {
					b = b.J;
					if (!b || b.nohit) return null;
					c = K(c);
					a = Vc(a, c);
					c = (a.C("reqNum", 0) || 0) + 1;
					a.D("reqNum", c);
					if (a.C("reqNum") === c) return c;
					a.ic("reqNum");
					return null
				}, pa.u = id, pa.w = function(a) {
					a = Kc(a);
					return a[0] + "x" + a[1]
				}, pa.s = function(a) {
					var c = n(a, "screen");
					if (c) {
						a = n(c, "width");
						var b = n(c, "height");
						c = n(c, "colorDepth") || n(c, "pixelDepth");
						return H("x", [a, b, c])
					}
					return null
				}, pa.sk = U("devicePixelRatio"), pa.ifr = w(ob, Nb), pa.j = w(Yr, Nb), pa.sti = function(a) {
					return ob(a) && Xr(a) ? "1" : null
				}, pa),
				tq = v(function() {
					return va(ea(Cd), ea(Wf))
				}),
				sq = v(oc, K),
				fj = v(function() {
					return {
						Ze: null,
						sa: []
					}
				}, K),
				pq = /^[a-z][\w.+-]+:/i,
				Ig, Vb = [
					[Ie, 1],
					[Be, 2],
					[Mb(), 3],
					[gj, 4]
				],
				ze = [],
				ub = u(Vb, Bj),
				Ub = (Ig = {}, Ig.h = Vb, Ig),
				Y = u(Ub, Aj);
			ub(cj, -100);
			var kq = /[^a-z0-9.:-]/,
				Jg, Kg = {},
				Vk = Ea([Uf && [Uf, 0], Ab && [Ab, 1],
					[Bb, 2], Ad && [Ad, 3],
					[Qc, 4]
				]),
				Xb = Ea([Uf, Ab, Bb, Ad, Qc]),
				Lg = [Bb];
			Lg.unshift(Ab);
			Lg.push(Ad);
			var Wk = Ea(Lg),
				Xc = Ea([Qc]),
				ws = Ea([Ab, Bb]),
				Xk = Ea([Ab, Qc]),
				xs = Ea([Ab, Bb, Ad, Qc]),
				sa = (Jg = {}, Jg.h = Wk, Jg),
				Mg = v(function(a, c) {
					var b = Kg["*"] ? Kg["*"] : c && Kg[c];
					b || (b = c ? sa[c] || [] : Xb);
					b = M(function(d, e) {
						var f = e(a);
						if (f) {
							var g = hb(w(zd, za(e)), Vk);
							g && d.push([g[1], f])
						}
						return d
					}, [], b);
					b.length || Sd();
					return b
				}, db),
				Ng, ys = G(L.reject, L, Pa()),
				ta = (Ng = {}, Ng.h = kb, Ng),
				na = B("g.sen", function(a, c, b) {
					var d = Mg(a, c);
					b = b ? oq(a, c, b) : [];
					var e = ta[c],
						f = e ? e(a, d, b) : kb(a, d, b);
					return function() {
						var g = Na(arguments),
							h = g[0];
						g = g.slice(1);
						var k =
							h.Y;
						h = z(h, {
							Y: z(void 0 === k ? {} : k, {
								ha: [c]
							})
						});
						return f.apply(null, [h].concat(g))
					}
				}, ys),
				cq = oa(function(a, c) {
					if (!c[a]) {
						var b, d = new L(function(e) {
							b = e
						});
						c[a] = {
							Jf: b,
							promise: d,
							Kf: !1
						}
					}
					return c[a].promise
				}),
				$i = v(w(oc, Aa)),
				zs = B("dc.init", function(a, c) {
					return c && jg(ce(c.split(":")[0])) ? {
						log: F,
						warn: F,
						error: F
					} : bq(a, c)
				}),
				mc = v(zs, db),
				Pl = B("h.p", function(a, c) {
					var b, d, e = na(a, "h", c),
						f = c.qc || "" + T(a).href,
						g = c.nh || a.document.referrer,
						h = {
							K: Ha((b = {}, b.pv = 1, b)),
							J: (d = {}, d["page-url"] = f, d["page-ref"] = g, d),
							M: {}
						};
					h.M.N = c.N;
					h.M.He =
						c.He;
					c.kd && h.J && (h.J.nohit = "1");
					return e(h, c).then(function(k) {
						var l;
						k && (c.kd || lc(a, c, "h", (l = {}, l.id = c.id, l.url = f, l.ref = g, l), c.N)(), Pb(a, D([a, c, k], dq)))
					})["catch"](C(a, "h.g.s"))
				}),
				Og = ["yandex_metrika_callback" + Tc.callbackPostfix, "yandex_metrika_callbacks" + Tc.callbackPostfix],
				As = B("cb.i", function(a) {
					var c = Og[0],
						b = Og[1];
					if (R(a[c])) a[c]();
					"object" === typeof a[b] && y(function(d, e) {
						a[b][e] = null;
						Nf(a, d)
					}, a[b]);
					y(function(d) {
						try {
							delete a[d]
						} catch (e) {
							a[d] = void 0
						}
					}, Og)
				}),
				Zp = /^[a-zA-Z0-9'!#$%&*+-/=?^_`{|}~]+$/,
				Yk = v(function(a) {
					return !!n(a, "crypto.subtle.digest") && !!n(a, "TextEncoder") && !!n(a, "FileReader") && !!n(a, "Blob")
				}),
				aq = Te(/[^\d+()]/g),
				$p = cb(/[a-z\u0430-\u044f\u0451,.]/gi),
				Xp = ["yandex_cid", "yandex_public_id"],
				Bs = B("fpm", function(a, c) {
					if (!Pk(a)) return F;
					var b = K(c);
					if (!Yk(a)) return Ib(a, b, "ns"), F;
					var d = Ja(a, c);
					return d ? function(e) {
						return (new L(function(f, g) {
							return qa(e) ? ea(e).length ? f(Wi(a, e).then(function(h) {
								var k, l;
								h && h.length && d.params((k = {}, k.__ym = (l = {}, l.fpp = h, l), k))
							}, F)) : g(Pa("fpm.l")) : g(Pa("fpm.o"))
						}))["catch"](C(a,
							"fpm.en"))
					} : F
				}),
				Ue = oa(function(a, c) {
					var b = {};
					Qf(a)(function(d) {
						b = d[c] || {}
					});
					return b
				}),
				Cs = B("c.c.cc", function(a) {
					var c = I(a),
						b = w(Ue(a), function(d) {
							var e, f = (e = {}, e.clickmap = !!d.clickmap, e);
							return z({}, d, f)
						});
					return C(a, "g.c.cc", w(G(c.C, c, "counters", {}), ea, Sb(b)))
				}),
				Ds = B("gt.c.rs", function(a, c) {
					var b, d = K(c),
						e = c.id,
						f = c.ba,
						g = c.Ng,
						h = c.Ce,
						k = D([a, d], Vp);
					Pf(a, d, (b = {}, b.id = e, b.type = +f, b.clickmap = g, b.trackHash = !!h, b));
					return k
				}),
				Ui = v(wd),
				yd = v(oc, K),
				Es = B("pa.int", function(a, c) {
					var b;
					return b = {}, b.params = function() {
						var d,
							e, f, g = Na(arguments),
							h = Up(g);
						if (!h) return null;
						g = h.Tg;
						var k = h.N;
						h = h.Xb;
						if (!qa(k) && !Z(k)) return null;
						var l = na(a, "1", c),
							m = yd(c).url,
							p = !es(c),
							q = "pa",
							r = (d = {}, d.id = c.id, d);
						d = k;
						var t = "";
						if (t = n(k, "__ym.user_id")) q = "pau", r.uid = t;
						J("__ymu", ea(k)) && (q = "paup");
						d.__ym && (d = z({}, k), d.__ym = M(function(x, E) {
							var O = n(k, "__ym." + E);
							O && (x[E] = O);
							return x
						}, {}, Ld), ea(d.__ym).length || delete d.__ym, p = !!ea(d).length);
						d = t ? void 0 : JSON.stringify(d);
						d = lc(a, c, q, r, d);
						l = l({
							M: {
								N: k
							},
							K: Ha((e = {}, e.pa = 1, e.ar = 1, e)),
							J: (f = {}, f["page-url"] =
								m || T(a).href, f)
						}, c).then(p ? d : F);
						return Pc(a, "p.s", l, h, g)
					}, b
				}),
				Zd = v(Si, w(db, K)),
				Fs = B("y.p", function(a, c) {
					var b = Si(a, c);
					if (b) {
						var d = Vd(a),
							e = D([a, b, c], Qp);
						th(a, d, function(f) {
							f.F(["params"], e)
						});
						b.$.F(["params"], w(U("1"), e))
					}
				}),
				ur = v(function(a) {
					if (a = xb(a)) return a("a")
				}),
				Zk = {
					Aj: cb(/[/&=?#]/)
				},
				se = B("go.in", function(a, c, b, d) {
					var e;
					void 0 === b && (b = "goal");
					return e = {}, e.reachGoal = function(f, g, h, k) {
						var l, m, p;
						if (!f || Zk[b] && Zk[b](f)) return null;
						var q = g,
							r = h || F;
						R(g) && (r = g, q = void 0, k = h);
						var t = lc(a, c, "gr", (l = {},
								l.id = c.id, l.goal = f, l), q),
							x = "goal" === b;
						g = na(a, "g", c);
						l = Pp(a, c, f, b);
						h = l[0];
						l = l[1];
						q = g({
							M: {
								N: q
							},
							K: Ha((m = {}, m.ar = 1, m)),
							J: (p = {}, p["page-url"] = h, p["page-ref"] = l, p)
						}, c).then(function() {
							var E, O;
							x && t();
							rb(a, (E = {}, E.counterKey = K(c), E.name = "event", E.data = (O = {}, O.schema = b, O.name = f, O), E));
							d && d()
						});
						return Pc(a, "g.s", q, r, k)
					}, e
				}),
				Gs = B("guid.int", function(a, c) {
					var b;
					return b = {}, b.getClientID = function(d) {
						var e = Ed(a, c);
						d && Nf(a, d, null, e);
						return e
					}, b
				}),
				fk, Hs = B("th.e", function(a, c) {
					function b() {
						g || (k = hc(a, "onhashchange") ?
							ka(a).F(a, ["hashchange"], h) : vr(a, h))
					}
					var d, e = na(a, "t", c),
						f = ye(a, K(c)),
						g = !1,
						h = C(a, "h.h.ch", G(wr, null, a, c, e)),
						k = F;
					c.Ce && (b(), g = !0);
					e = C(a, "tr.hs.h", function(l) {
						var m;
						l ? b() : k();
						g = !!l;
						f((m = {}, m.trackHash = g, m))
					});
					return d = {}, d.trackHash = e, d.u = k, d
				}),
				Is = oa(function(a, c) {
					fa(c) ? a.push(c) : y(w(P, Ka("push", a)), c)
				}),
				xd = sb("retryReqs", function(a) {
					var c = Ra(a),
						b = c.C("retryReqs", {}),
						d = ia(a)(ca);
					y(function(e) {
						var f = e[0];
						e = e[1];
						(!e || !e.time || e.time + 864E5 < d) && delete b[f]
					}, Ca(b));
					c.D("retryReqs", b);
					return b
				}, !0),
				Ve = w(ic,
					za(0)),
				$k = $a(Ve),
				Js = [$k("watch"), $k("clmap")],
				Ks = B("g.r", function(a) {
					var c = ia(a),
						b = xd(a),
						d = c(ca),
						e = Bc(a);
					return yb(function(f, g) {
						var h = g[0],
							k = g[1];
						k && Ua(Aa(k.resource), Js) && !k.d && k.ghid && k.ghid !== e && k.time && 500 < d - k.time && k.time + 864E5 > d && 2 >= k.browserInfo.rqnl && (k.d = 1, h = {
							protocol: k.protocol,
							host: k.host,
							za: k.resource,
							Ai: k.postParams,
							N: k.params,
							Fg: k.browserInfo,
							yj: k.ghid,
							time: k.time,
							Pb: Da(h),
							Qg: k.counterId,
							ba: k.counterType
						}, k.telemetry && (h.Ha = k.telemetry), f.push(h));
						return f
					}, [], Ca(b))
				}),
				Ls = B("nb.p",
					function(a, c) {
						function b(E) {
							l() || (E = "number" === typeof E ? E : 15E3, x = xr(a, d(!1), E), m())
						}

						function d(E) {
							return function(O) {
								var N, ya, Ba;
								void 0 === O && (O = (N = {}, N.ctx = {}, N.callback = F, N));
								if (E || !r && !k.Nd) {
									r = !0;
									m();
									x && x();
									var Yb = p(ca);
									N = (Da(k.C("lastHit")) || 0) < Yb - 18E5;
									var Pg = .1 > Math.random();
									k.D("lastHit", Yb);
									Yb = Ha((ya = {}, ya.nb = 1, ya.cl = t, ya.ar = 1, ya));
									ya = yd(c);
									ya = {
										J: (Ba = {}, Ba["page-url"] = ya.url || T(a).href, Ba),
										K: Yb,
										M: {
											force: E
										}
									};
									Ba = mc(a, K(c)).warn;
									!O.callback && O.ctx && Ba("nbnc");
									(Ba = E || N || Pg) || (Ba = a.location.href,
										N = a.document.referrer, Ba = !(Ba && N ? Qi(Ba) === Qi(N) : !Ba && !N));
									if (Ba) return Ba = g(ya, c), Pc(a, "l.o.l", Ba, O.callback, O.ctx)
								}
								return null
							}
						}
						var e, f, g = na(a, "n", c),
							h = K(c),
							k = Vc(a, c.id),
							l = u(u(h, Ue(a)), w(xa, U("accurateTrackBounce"))),
							m = u((e = {}, e.accurateTrackBounce = !0, e), ye(a, h)),
							p = ia(a),
							q = p(ca),
							r = !1,
							t = 0,
							x;
						ma(c, function(E) {
							t = E.hh - q
						});
						c.Me && b(c.Me);
						e = (f = {}, f.notBounce = d(!0), f.u = x, f);
						e.accurateTrackBounce = b;
						return e
					}),
				Ip = oa(fc)("(ym-disable-clickmap|ym-clickmap-ignore)"),
				Ms = B("clm.p", function(a, c) {
					if (be(a)) return F;
					var b = na(a, "m", c),
						d = K(c),
						e = ia(a),
						f = e(ca),
						g = u(u(d, Ue(a)), w(xa, U("clickmap"))),
						h, k = null;
					d = C(a, "clm.p.c", function(l) {
						var m = g();
						if (m) {
							var p = I(a),
								q = p.C("cls", {
									bc: 0,
									x: 0,
									y: 0
								});
							p.D("cls", {
								bc: q.bc + 1,
								x: q.x + l.clientX,
								y: q.y + l.clientY
							});
							p = "object" === typeof m ? m : {};
							q = p.filter;
							m = p.isTrackHash || !1;
							var r = A(function(x) {
								return ("" + x).toUpperCase()
							}, p.ignoreTags || []);
							X(h) && (h = p.quota || null);
							var t = !!p.quota;
							l = {
								element: Jp(a, l),
								position: Mi(a, l),
								button: Kp(l),
								time: e(ca)
							};
							p = T(a).href;
							if (Hp(a, l, k, r, q)) {
								if (t) {
									if (!h) return;
									--h
								}
								r =
									Fe(a, l.element);
								q = r[0];
								r = r[1];
								t = $f(a, l.element);
								q = ["rn", Wa(a), "x", Math.floor(65535 * (l.position.x - t.left) / (q || 1)), "y", Math.floor(65535 * (l.position.y - t.top) / (r || 1)), "t", Math.floor((l.time - f) / 100), "p", hf(a, l.element), "X", l.position.x, "Y", l.position.y];
								q = H(":", q);
								m && (q += ":wh:1");
								Gp(a, p, q, b, c);
								k = l
							}
						}
					});
					return ka(a).F(n(a, "document"), ["click"], d)
				}),
				Ns = B("trigger.in", function(a, c) {
					c.hg && Pb(a, D([a, "yacounter" + c.id + "inited"], Dq), "t.i")
				}),
				Os = B("c.m.p", function(a, c) {
					var b, d = K(c);
					return b = {}, b.clickmap = u(ye(a,
						d), Fp), b
				}),
				zi = u("form", Tb),
				up = u("form", gb),
				Ep = v(w(db, $a(ma)(U("settings.form_goals"))), db),
				Ps = B("s.f.i", function(a, c) {
					var b, d = [],
						e = [],
						f = ka(a);
					d.push(f.F(a, ["click"], C(a, "s.f.c", D([a, c, e], Dp))));
					d.push(f.F(a, ["submit"], C(a, "s.f.e", function(g) {
						var h = n(g, "target");
						g = n(g, "isTrusted");
						Ji(!0, a, c, e, h, g)
					})));
					Ki(a, c, "fgi", (b = {}, b.id = c.id, b));
					return D([re, d], y)
				}),
				Qs = B("s.f.i", function(a, c) {
					return ma(c, function(b) {
						var d;
						if (n(b, "settings.button_goals")) return b = ka(a).F(a, ["click"], C(a, "c.t.c", w(D([a, c], $e(a,
							c, "", Cp))))), lc(a, c, "gbi", (d = {}, d.id = c.id, d))(), b
					})
				}),
				Zb, Od, Qg, Yc, Eb, Kf = (Zb = {}, Zb.transaction_id = "id", Zb.item_brand = "brand", Zb.index = "position", Zb.item_variant = "variant", Zb.value = "revenue", Zb.item_category = "category", Zb.item_list_name = "list", Zb),
				jc = (Od = {}, Od.item_id = "id", Od.item_name = "name", Od.promotion_name = "coupon", Od),
				Bp = (Qg = {}, Qg.promotion_name = "name", Qg),
				al = (Yc = {}, Yc.promotion_name = "name", Yc.promotion_id = "id", Yc.item_id = "product_id", Yc.item_name = "product_name", Yc),
				yp = "currencyCode add delete remove purchase checkout detail impressions click promoView promoClick".split(" "),
				zp = (Eb = {}, Eb.view_item = {
					event: "detail",
					wa: jc,
					Ia: "products"
				}, Eb.add_to_cart = {
					event: "add",
					wa: jc,
					Ia: "products"
				}, Eb.remove_from_cart = {
					event: "remove",
					wa: jc,
					Ia: "products"
				}, Eb.begin_checkout = {
					event: "checkout",
					wa: jc,
					Ia: "products"
				}, Eb.purchase = {
					event: "purchase",
					wa: jc,
					Ia: "products"
				}, Eb.view_item_list = {
					event: "impressions",
					wa: jc
				}, Eb.select_item = {
					event: "click",
					Ia: "products",
					wa: jc
				}, Eb.view_promotion = {
					event: "promoView",
					Ia: "promotions",
					wa: al
				}, Eb.select_promotion = {
					event: "promoClick",
					Ia: "promotions",
					wa: al
				}, Eb),
				Ii =
				B("dl.w", function(a, c, b) {
					function d() {
						var g = n(a, c);
						(e = Z(g) && we(a, g, b)) || (f = S(a, d, 1E3, "ec.dl"))
					}
					var e, f = 0;
					d();
					return function() {
						return ja(a, f)
					}
				}),
				Rs = B("p.e", function(a, c) {
					var b = Ja(a, c);
					if (b) {
						var d = I(a);
						b = b.params;
						var e = C(a, "h.ee", D([a, K(c), b], wp));
						return c.qd ? (d.D("ecs", 0), Hi(a, c.qd, e)) : ma(c, function(f) {
							if ((f = n(f, "settings.ecommerce")) && fa(f)) return d.D("ecs", 1), Hi(a, f, e)
						})
					}
				}),
				bl = v(function(a) {
					a = T(a);
					a = Qj(a.search.substring(1));
					a["_ym_status-check"] = a["_ym_status-check"] || "";
					a._ym_lang = a._ym_lang ||
						"ru";
					return a
				}),
				Ei = w(bl, U("_ym_status-check"), Da),
				Ss = w(bl, U("_ym_lang")),
				Ts = cb(/^https:\/\/(yastatic\.net\/s3\/metrika|s3\.mds\.yandex\.net\/internal-metrika-betas|[\w-]+\.dev\.webvisor\.com|[\w-]+\.dev\.metrika\.yandex\.ru)\/(\w|-|\/|(\.)(?!\.))+\.js$/),
				Us = ["form", "button", "status"],
				Vs = B("cs.init", function(a, c) {
					var b, d = Ei(a);
					if (d && c.id === d && "0" === c.ba) {
						var e = (b = {}, b.lang = Ss(a), b.fileId = "status", b);
						b = e.lang;
						b = void 0 === b ? "" : b;
						var f = e.appVersion;
						f = void 0 === f ? "" : f;
						var g = e.fileId;
						g = void 0 === g ? "" : g;
						e =
							e.beta;
						e = void 0 === e ? !1 : e;
						f = H(".", ha(oa(kc)(a), A(w(P, Da), f.split("."))));
						J(g, Us) && J(b, ["ru", "en", "tr"]) ? (b = (e ? "https://s3.mds.yandex.net/internal-metrika-betas" : "https://yastatic.net/s3/metrika") + (f ? "/" + f : "") + "/form-selector/" + (g + "_" + b + ".js"), b = Ts(b) ? b : "") : b = "";
						S(a, D([a, b, "" + d], tp), 0, "cs")
					}
				}),
				Ws = B("suid.int", function(a, c) {
					var b;
					return b = {}, b.setUserID = function(d, e, f) {
						if (fa(d) || kc(a, d)) {
							var g = Ja(a, c);
							d = ee(["__ym", "user_id", d]);
							g.params(d, e || F, f)
						} else mc(a, K(c)).error("wuid")
					}, b
				}),
				Xs = B("up.int", function(a,
					c) {
					var b;
					return b = {}, b.userParams = C(a, "up.c", function(d, e, f) {
						var g, h = Ja(a, c),
							k = mc(a, K(c)).warn;
						h ? qa(d) ? (d = (g = {}, g.__ymu = d, g), (g = h.params) && g(d, e || F, f)) : k("wup") : k("nci")
					}), b
				}),
				Ys = /[\*\.\?\(\)]/g,
				Zs = v(function(a, c, b) {
					var d;
					try {
						var e = b.replace("\\s", " ").replace(Ys, "");
						mc(a, "").warn("nnw", (d = {}, d.name = e, d))
					} catch (f) {}
				}, db),
				$s = B("r.nn", function(a) {
					Je(a) && we(a, rg, function(c) {
						c.ya.F(function(b) {
							Zs(a, b[1], b[0]);
							rg.splice(100)
						})
					})
				}),
				at = B("e.a.p", function(a, c) {
					var b, d = Ja(a, c);
					d = D([w(P, Aa(!0)), Ea(A(u(d, n), ["clickmap", "trackLinks", "accurateTrackBounce"]))], A);
					c.Yg && d();
					return b = {}, b.enableAll = d, b
				}),
				bt = v(oc, K),
				ct = B("fpi", function(a) {
					var c = td(a);
					if (c && !a.document.hidden) {
						var b = I(a).Ga;
						b("fpe", 1);
						var d = ka(a).F(a, ["visibilitychange", "webkitvisibilitychange"], function() {
							a.document.hidden && (b("fht", c.now()), d())
						})
					}
				}),
				dt = v(function(a) {
					a = n(a, "console");
					var c = n(a, "log");
					c = Oe("log", c) ? G(c, a) : F;
					var b = n(a, "warn");
					b = Oe("warn", b) ? G(b, a) : c;
					var d = n(a, "error");
					a = Oe("error", d) ? G(d, a) : c;
					return {
						log: c,
						error: a,
						warn: b
					}
				}),
				et = u("add", qe),
				ft = u("remove", qe),
				gt = u("detail", qe),
				ht = u("purchase", qe),
				it = "FB_IAB FBAV OKApp GSA/ yandex yango uber EatsKit YKeyboard iOSAppUslugi YangoEats PassportSDK".split(" "),
				ff = v(function(a) {
					var c = Ak(a);
					a = c.lg;
					if (!c.qf) return !1;
					c = Ka("indexOf", a);
					c = Ua(w(c, za(-1), Ec), it);
					var b = /CFNetwork\/[0-9][0-9.]*.*Darwin\/[0-9][0-9.]*/.test(a),
						d = /YaBrowser\/[\d.]+/.test(a),
						e = /Mobile/.test(a);
					return c || b || d && e || !/Safari/.test(a) && e
				}),
				Gm = v(function(a) {
					var c = qb(a);
					return c ? fb(c, "YangoEats") || sd(a) : !1
				}),
				rp =
				/([0-9\\.]+) Safari/,
				jt = /\sYptp\/\d\.(\d+)\s/,
				cl = v(function(a) {
					var c;
					a: {
						if ((c = qb(a)) && (c = jt.exec(c)) && 1 < c.length) {
							c = Da(c[1]);
							break a
						}
						c = 0
					}
					return 50 <= c && 99 >= c || nf(a, 79) ? !1 : !Kd(a) || ff(a)
				}),
				dl = "monospace;sans-serif;serif;Andale Mono;Arial;Arial Black;Arial Hebrew;Arial MT;Arial Narrow;Arial Rounded MT Bold;Arial Unicode MS;Bitstream Vera Sans Mono;Book Antiqua;Bookman Old Style;Calibri;Cambria;Cambria Math;Century;Century Gothic;Century Schoolbook;Comic Sans;Comic Sans MS;Consolas;Courier;Courier New;Garamond;Geneva;Georgia;Helvetica;Helvetica Neue;Impact;Lucida Bright;Lucida Calligraphy;Lucida Console;Lucida Fax;LUCIDA GRANDE;Lucida Handwriting;Lucida Sans;Lucida Sans Typewriter;Lucida Sans Unicode;Microsoft Sans Serif;Monaco;Monotype Corsiva;MS Gothic;MS Outlook;MS PGothic;MS Reference Sans Serif;MS Sans Serif;MS Serif;MYRIAD;MYRIAD PRO;Palatino;Palatino Linotype;Segoe Print;Segoe Script;Segoe UI;Segoe UI Light;Segoe UI Semibold;Segoe UI Symbol;Tahoma;Times;Times New Roman;Times New Roman PS;Trebuchet MS;Verdana;Wingdings;Wingdings 2;Wingdings 3".split(";"),
				kt = v(function(a) {
					a = xb(a)("canvas");
					var c = n(a, "getContext");
					if (!c) return null;
					try {
						var b = G(c, a)("2d");
						b.font = "72px mmmmmmmmmmlli";
						var d = b.measureText("mmmmmmmmmmlli").width;
						return function(e) {
							b.font = "72px " + e;
							return b.measureText("mmmmmmmmmmlli").width === d
						}
					} catch (e) {
						return null
					}
				}),
				el = la(String.prototype.repeat, "repeat"),
				Th = el ? function(a, c) {
					return el.call(a, c)
				} : op,
				Nh = u(!0, function(a, c, b, d) {
					b = c.length && (b - d.length) / c.length;
					if (0 >= b) return d;
					c = Th(c, b);
					return a ? c + d : d + c
				}),
				Pe = [2277735313, 289559509],
				Qe = [1291169091,
					658871167
				],
				lt = B("p.cd", function(a) {
					if (ke(a) || Bg(a)) {
						var c = Ra(a);
						if (da(c.C("jn"))) {
							c.D("jn", !1);
							var b = a.chrome || ud(a) ? function() {} : /./;
							a = dt(a);
							b.toString = function() {
								c.D("jn", !0);
								return "Yandex.Metrika counter is initialized"
							};
							a.log("%c%s", "color: inherit", b)
						}
					}
				}),
				mt = v(function(a) {
					a = n(a, "navigator.plugins");
					return !!(a && Oa(a) && Ua(w(U("name"), cb(/Chrome PDF Viewer/)), a))
				}),
				Fb = oa(function(a, c) {
					return I(c).C(a, null)
				}),
				lp = {
					"*": "+",
					"-": "/",
					oj: "=",
					"+": "*",
					"/": "-",
					"=": "_"
				},
				nt = v(function(a) {
					return R(n(a, "yandex.getSiteUid")) ?
						a.yandex.getSiteUid() : null
				}),
				ot = v(u("panoramaId", ne)),
				pt = v(function(a) {
					return ne("pubcid.org", a) || ne("_pubCommonId", a)
				}),
				qt = v(u("_sharedid", ne)),
				rt = v(function(a, c) {
					if (c.Ta) return null;
					var b = dd(a, "").C("_ga");
					return b && md(oe(b))
				}, w(db, K)),
				hp = [
					["domainLookupEnd", "domainLookupStart"],
					["connectEnd", "connectStart"],
					["responseStart", "requestStart"],
					["responseEnd", "responseStart"],
					["fetchStart", "navigationStart"],
					["redirectEnd", "redirectStart"],
					[function(a, c) {
						return n(c, "redirectCount") || n(a, "navigation.redirectCount")
					}],
					["domInteractive", "domLoading"],
					["domContentLoadedEventEnd", "domContentLoadedEventStart"],
					["domComplete", "navigationStart"],
					["loadEventStart", "navigationStart"],
					["loadEventEnd", "loadEventStart"],
					["domContentLoadedEventStart", "navigationStart"]
				],
				vb, gp = [
					["domainLookupEnd", "domainLookupStart"],
					["connectEnd", "connectStart"],
					["responseStart", "requestStart"],
					["responseEnd", "responseStart"],
					["fetchStart"],
					["redirectEnd", "redirectStart"],
					["redirectCount"],
					["domInteractive", "responseEnd"],
					["domContentLoadedEventEnd",
						"domContentLoadedEventStart"
					],
					["domComplete"],
					["loadEventStart"],
					["loadEventEnd", "loadEventStart"],
					["domContentLoadedEventStart"]
				],
				wi = (vb = {}, vb.responseEnd = 1, vb.domInteractive = 1, vb.domContentLoadedEventStart = 1, vb.domContentLoadedEventEnd = 1, vb.domComplete = 1, vb.loadEventStart = 1, vb.loadEventEnd = 1, vb.unloadEventStart = 1, vb.unloadEventEnd = 1, vb.secureConnectionStart = 1, vb),
				jp = v(wd),
				dp = v(oc),
				ep = v(function(a) {
					var c = n(a, "webkitRequestFileSystem");
					if (R(c) && !ke(a)) return (new L(G(c, a, 0, 0))).then(function() {
						var d =
							n(a, "navigator.storage") || {};
						return d.estimate ? d.estimate() : {}
					}).then(function(d) {
						return (d = d.quota) && 12E7 > d ? !0 : !1
					})["catch"](u(!0, P));
					if (Hd(a)) return c = n(a, "navigator.serviceWorker"), L.resolve(X(c));
					c = n(a, "openDatabase");
					if (ud(a) && R(c)) {
						var b = !1;
						try {
							c(null, null, null, null)
						} catch (d) {
							b = !0
						}
						return L.resolve(b)
					}
					return L.resolve(!n(a, "indexedDB") && (n(a, "PointerEvent") || n(a, "MSPointerEvent")))
				}),
				st = /(\?|&)turbo_uid=([\w\d]+)($|&)/,
				tt = v(function(a, c) {
					var b = Nc(a),
						d = T(a).search.match(st);
					return d && 2 <= d.length ?
						(d = d[2], c.Ta || b.D("turbo_uid", d), d) : (b = b.C("turbo_uid")) ? b : ""
				}),
				Ro = [
					[
						["'(-$&$&$'", 30102, 0],
						["'(-$&$&$'", 29009, 0]
					],
					[
						["oWdZ[nc[jh_YW$Yec", 30103, 1],
						["oWdZ[nc[jh_YW$Yec", 29010, 1]
					]
				],
				So = [
					[
						["oWdZ[nc[jh_YW$Yec", 30103, 1]
					],
					[
						["oWdZ[nc[jh_YW$Yec", 29010, 1]
					]
				],
				vi = {
					J: {
						t: 'UV|L7,!"T[rwe&D_>ZIb\\aW#98Y.PC6k'
					}
				},
				Oo = {
					dg: 60,
					error: 15
				},
				No = {
					dg: 5,
					error: 1
				},
				si = {
					id: 42822899,
					ba: "0"
				},
				ut = B("pa.plgn", function(a, c) {
					var b = Zd(a, c);
					b && b.$.F(["pluginInfo"], C(a, "c.plgn", function() {
						var d = I(a);
						d.D("cmc", d.C("cmc", 0) + 1);
						return Tj(c)
					}))
				}),
				Ob, lb, zm = (Ob = {}, Ob.am = "com.am", Ob.tr = "com.tr", Ob.ge = "com.ge", Ob.il = "co.il", Ob["\u0440\u0444"] = "ru", Ob["xn--p1ai"] = "ru", Ob["\u0431\u0435\u043b"] = "by", Ob["xn--90ais"] = "by", Ob),
				fl = {
					"mc.edadeal.ru": /^([^/]+\.)?edadeal\.ru$/,
					"mc.yandexsport.ru": /^([^/]+\.)?yandexsport\.ru$/,
					"mc.kinopoisk.ru": /^([^/]+\.)?kinopoisk\.ru$/
				},
				Am = (lb = {}, lb.ka = "ge", lb.ro = "md", lb.tg = "tj", lb.tk = "tm", lb.et = "ee", lb.hy = "com.am", lb.he = "co.li", lb.ky = "kg", lb.be = "by", lb.tr = "com.tr", lb.kk = "kz", lb),
				gl = /^https?:\/\//,
				vt = {
					1882689622: 1,
					2318205080: 1,
					3115871109: 1,
					3604875100: 1,
					339366994: 1,
					849340123: 1,
					3735661796: 1,
					3082499531: 1,
					2343947156: 1,
					655012937: 1,
					3724710748: 1,
					3364370932: 1,
					1996539654: 1,
					2065498185: 1,
					823651274: 1,
					12282461: 1,
					1555719328: 1,
					1417229093: 1,
					138396985: 1,
					3015043526: 1
				},
				hl = v(function() {
					return M(function(a, c) {
						var b = dc(c + "/tag.js");
						a[b] = 1;
						return a
					}, {}, ["mc.yandex.ru/metrika", "mc.yandex.com/metrika", "cdn.jsdelivr.net/npm/yandex-metrica-watch"])
				}),
				wt = v(function(a) {
					a = td(a);
					if (!a || !R(a.getEntriesByType)) return null;
					a = a.getEntriesByType("resource");
					var c = hl();
					return (a = hb(function(b) {
						b = b.name.replace(gl, "").split("?")[0];
						b = dc(b);
						return c[b]
					}, a)) ? pb(a.transferSize) : null
				}),
				$o = "ar:1:pv:1:v:" + ua.ab + ":vf:" + Tc.version,
				ap = ua.Pa + "//" + gc + "/watch/" + ua.pg,
				il = {},
				xt = B("exps.int", function(a, c) {
					var b;
					return b = {}, b.experiments = function(d, e, f) {
						var g, h;
						if (fa(d) && !(0 >= d.length)) {
							var k = na(a, "e", c),
								l = yd(c).url;
							d = k({
								K: Ha((g = {}, g.ex = 1, g.ar = 1, g)),
								J: (h = {}, h["page-url"] = l || T(a).href, h.exp = d, h)
							}, c);
							return Pc(a, "exps.s", d, e || F, f)
						}
					}, b
				}),
				gf = [],
				yt = B("p.fh", function(a, c) {
					var b,
						d;
					void 0 === c && (c = !0);
					var e = Ra(a),
						f = ia(a),
						g = e.C("wasSynced"),
						h = {
							id: 3,
							ba: "0"
						};
					return c && g && g.time + 864E5 > f(ca) ? L.resolve(g) : na(a, "f", h)({
						K: Ha((b = {}, b.pv = 1, b)),
						J: (d = {}, d["page-url"] = T(a).href, d["page-ref"] = a.document.referrer, d)
					}, h).then(function(k) {
						var l;
						k = (l = {}, l.time = f(ca), l.params = n(k, "settings"), l.bkParams = n(k, "userData"), l);
						e.D("wasSynced", k);
						return k
					})["catch"](C(a, "f.h"))
				}),
				zt = oa(function(a, c) {
					0 === parseFloat(n(c, "settings.c_recp")) && (a.Wd.D("ymoo" + a.qa, a.fg(nb)), a.ld && a.ld.destruct && a.ld.destruct())
				}),
				gd = w(U("settings.pcs"), za("1")),
				jl = gc.split("."),
				At = jl.pop(),
				kl = H(".", jl),
				xm = v(function(a) {
					a = T(a).hostname.split(".");
					return a[a.length - 1]
				}),
				qh = v(function(a) {
					return -1 !== T(a).hostname.search(/(?:^|\.)(?:ya|yandex|beru|kinopoisk|edadeal)\.(?:\w+|com?\.\w+)$/)
				}),
				Bt = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|yastatic\.net|.*\.yandex|turbopages\.org|turbo\.site|diplodoc\.(com|tech)|datalens\.tech|white-label\.yango-tech\.com|al-sadhan\.com|spar\.sa)$/,
				Yd = v(function(a) {
					a = T(a).hostname;
					var c = !1;
					a && (c = -1 !== a.search(Bt));
					return c
				}),
				Ct = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|.*\.yandex|turbopages\.org|turbo\.site)$/,
				Uo = v(function(a) {
					a = T(a).hostname;
					var c = !1;
					a && (c = -1 !== a.search(Ct));
					return c
				}),
				gh = ua.Pa + "//" + gc + "/metrika",
				ge = gh + "/metrika_match.html",
				We, Yo = (We = {}, We.s = "p", We["8"] = "i", We),
				Vo = sb("csp", function(a, c) {
					return na(a, "s", c)({}, ["https://ymetrica1.com/watch/3/1"])
				}),
				Rg = "et w v z i u vf".split(" "),
				ll = Fd("wv"),
				Dt = Fd("pub"),
				gi = function() {
					function a(c, b) {
						this.l = c;
						this.type = b
					}
					a.isEnabled = function(c) {
						return !!c.JSON
					};
					a.prototype.Fa = function(c) {
						return uf(Kb(this.l, c))
					};
					a.prototype.tb = function(c) {
						var b = c.data;
						"string" !== typeof b && (b = Kb(this.l, c.data));
						return b
					};
					a.prototype.ib = function(c) {
						return encodeURIComponent(c).length
					};
					a.prototype.ue = function(c, b) {
						for (var d = Math.ceil(c.length / b), e = [], f = 0; f < b; f += 1) e.push(c.slice(f * d, d * (f + 1)));
						return e
					};
					return a
				}(),
				Io = v(function(a) {
					function c(f, g, h, k) {
						d[0] = g;
						h[k] =
							e[3];
						h[k + 1] = e[2];
						h[k + 2] = e[1];
						h[k + 3] = e[0]
					}

					function b(f, g, h, k) {
						d[0] = g;
						h[k] = e[0];
						h[k + 1] = e[1];
						h[k + 2] = e[2];
						h[k + 3] = e[3]
					}
					if ("undefined" === typeof a.Float32Array || "undefined" === typeof a.Uint8Array) return Jo;
					var d = new Float32Array([-0]),
						e = new Uint8Array(d.buffer);
					return 128 === e[3] ? b : c
				}),
				Eo = pi(!1),
				Do = pi(!0),
				aa, Hc, ml = (aa = {}, aa.mousemove = 0, aa.mouseup = 1, aa.mousedown = 2, aa.click = 3, aa.scroll = 4, aa.windowblur = 5, aa.windowfocus = 6, aa.focus = 7, aa.blur = 8, aa.eof = 9, aa.selection = 10, aa.change = 11, aa.input = 12, aa.touchmove = 13, aa.touchstart =
					14, aa.touchend = 15, aa.touchcancel = 16, aa.touchforcechange = 17, aa.zoom = 18, aa.resize = 19, aa.keystroke = 20, aa.deviceRotation = 21, aa.fatalError = 22, aa.hashchange = 23, aa.stylechange = 24, aa.articleInfo = 25, aa.publishersHeader = 26, aa.pageData = 27, aa.mutationAdd = 28, aa.mutationRemove = 29, aa.mutationTextChange = 30, aa.mutationAttributesChange = 31, aa),
				nl = (Hc = {}, Hc.page = 0, Hc.event = 1, Hc.mutation = 2, Hc.publishers = 3, Hc.activity = 4, Hc),
				fi = function() {
					function a(c, b) {
						var d, e, f = this;
						this.isSync = !1;
						this.Eb = [];
						this.$g = (d = {}, d.ad = "mutationAdd",
							d.re = "mutationRemove", d.tc = "mutationTextChange", d.ac = "mutationAttributesChange", d.page = "pageData", d);
						this.Vg = (e = {}, e.ad = "addedNodesMutation", e.re = "removedNodesMutation", e.tc = "textChangeMutation", e.ac = "attributesChangeMutation", e.touchmove = "touchEvent", e.touchstart = "touchEvent", e.touchend = "touchEvent", e.touchforcechange = "touchEvent", e.touchcancel = "touchEvent", e.resize = "resizeEvent", e.scroll = "scrollEvent", e.change = "changeEvent", e.mousemove = "mouseEvent", e.mousedown = "mouseEvent", e.mouseup = "mouseEvent",
							e.click = "mouseEvent", e.focus = "focusEvent", e.blur = "focusEvent", e.deviceRotation = "deviceRotationEvent", e.zoom = "zoomEvent", e.keystroke = "keystrokesEvent", e.selection = "selectionEvent", e.stylechange = "styleChangeEvent", e.fatalError = "fatalErrorEvent", e.pageData = "page", e);
						this.uh = function(g) {
							var h = g.type;
							return g.event || "publishersHeader" !== h && "articleInfo" !== h ? {
								type: nl[h],
								event: ml[f.$g[g.event] || g.event]
							} : {
								type: nl.publishers,
								event: ml[h]
							}
						};
						this.zf = function(g) {
							var h = !X(g.partNum),
								k = f.uh(g);
							k = {
								stamp: g.stamp,
								type: k.type,
								event: k.event,
								frameId: g.frameId,
								chunk: h ? g.data : void 0,
								partNum: g.partNum,
								end: g.end
							};
							!h && g.data && (h = f.Vg[g.event] || g.event || g.type) && (k[h] = g.data);
							return k
						};
						this.l = c;
						this.type = b
					}
					a.prototype.Fa = function(c, b) {
						var d = this;
						void 0 === b && (b = !1);
						var e = cc(c, this.zf),
							f = this.isSync || b ? Infinity : 10;
						e = ed(this.l, e, f);
						var g = [e];
						this.Eb.push(e);
						return e(Eg(function(h) {
							h = ii(d.l, to, {
								Di: h
							});
							h = ed(d.l, h, f, gg);
							g.push(h);
							d.Eb.push(h);
							return h
						}))(Eg(function(h) {
							h = hi(d.l, h.slice(-4));
							h = ed(d.l, h, f, gg);
							g.push(h);
							d.Eb.push(h);
							return h
						}))(Qk(function(h) {
							h = h[h.length - 1];
							y(function(k) {
								k = xe(d.l)(k, d.Eb);
								d.Eb.splice(k, 1)
							}, g);
							return h
						}))
					};
					a.prototype.tb = function(c) {
						return ii(this.l, ji, this.zf(c))(hg(F))
					};
					a.prototype.ib = function(c) {
						return c[0]
					};
					a.prototype.ue = function(c, b) {
						for (var d = hi(this.l, c)(hg(F)), e = Math.ceil(d.length / b), f = [], g = 0; g < b; g += 1) f.push(d.slice(g * e, e * (g + 1)));
						return f
					};
					a.isEnabled = function(c) {
						var b = Je(c),
							d = !1;
						try {
							d = (d = 2 === (new c.Blob(["\u00e4"])).size) && 2 === (new c.Blob([new c.Uint8Array([1, 2])])).size
						} catch (e) {}
						return !b &&
							d && !(!c.Uint8Array || !n(c, "Uint8Array.prototype.slice"))
					};
					return a
				}(),
				ol = "resize scroll mousemove mousedown click windowfocus keydown orientationchange change focus touchmove touchstart".split(" "),
				Et = "id pageTitle stamp chars authors updateDate publicationDate pageUrlCanonical topics rubric".split(" "),
				Ft = function() {
					function a(c, b, d, e, f) {
						var g = this;
						this.zc = !1;
						this.meta = {};
						this.scroll = {
							x: 0,
							y: 0
						};
						this.involvedTime = this.xf = 0;
						this.Yd = this.Ef = "";
						this.fa = [];
						this.se = this.Na = 0;
						this.xb = {
							h: 0,
							w: 0
						};
						this.buffer = [];
						this.qg = Et;
						this.flush = function() {
							g.se = S(g.l, g.flush, 2500);
							var h = g.Cd();
							if (g.buffer.length || h) {
								var k = Me(g.buffer);
								h && k.push(h);
								g.Ef = g.Yd;
								g.ja.Fa(k)(Ya(C(g.l, "p.b.st"), function(l) {
									l && g.Rb(l)
								}))
							}
						};
						this.Rb = e;
						this.ja = d;
						this.Wb = G(this.Wb, this);
						this.Cd = G(this.Cd, this);
						this.flush = G(this.flush, this);
						this.l = c;
						this.qa = f;
						this.Pc = b;
						this.Sd = "pai" + b.id;
						this.Ib();
						this.Ue = ka(this.l);
						this.time = ia(this.l);
						this.jg();
						this.Fd = I(this.l);
						this.Ge = null
					}
					a.prototype.start = function() {
						this.se = S(this.l, this.flush, 2500);
						if (!this.zc) {
							this.Oi();
							var c = this.Fd.C(this.Sd, []),
								b = !c.length;
							c.push(G(this.$h, this));
							this.Fd.Ga(this.Sd, c);
							b && this.Nf();
							this.Ge = ka(this.l).F(this.l, ["click"], G(this.Mi, this));
							this.Wb({
								type: "page",
								target: this.l
							})
						}
					};
					a.prototype.stop = function() {
						this.aj();
						this.zc = !0;
						this.flush();
						ja(this.l, this.se)
					};
					a.prototype.tf = function(c) {
						return Tb("html", this.l, c) !== this.l.document.documentElement
					};
					a.prototype.Nf = function() {
						var c = this;
						C(this.l, "p.ic" + this.Pc.id, function() {
							if (!c.zc) {
								var b = c.Fd.C(c.Sd),
									d = c.Pc.gh();
								y(function(e) {
									var f = A(function(g) {
										return z({},
											g)
									}, d);
									R(e) && e(f)
								}, b);
								c.Na = S(c.l, G(c.Nf, c), 1E3, "p")
							}
						})()
					};
					a.prototype.$h = function(c) {
						this.zc || (this.bj(c), this.cj(), this.Jg())
					};
					a.prototype.Og = function(c, b) {
						return (c.oe || 0) <= (b.oe || 0) ? b : c
					};
					a.prototype.Mi = function(c) {
						if (this.fa.length) {
							c = Oi(c);
							var b = T(this.l).hostname,
								d;
							if (d = c) d = ve(c.hostname) === ve(b);
							d && (c = M(this.Og, this.fa[0], this.fa).id, b = Bc(this.l), Vc(this.l, this.qa.split(":")[0]).D("pai", c + "-" + b))
						}
					};
					a.prototype.Wb = function(c) {
						var b = this;
						C(this.l, "p.ec." + this.Pc.id, function() {
							var d, e;
							try {
								var f =
									c.type;
								var g = c.target
							} catch (p) {
								return
							}
							var h = "page" === f;
							if ("scroll" === f || h) {
								var k = [b.l, b.l.document, b.l.document.documentElement, Fc(b.l)];
								J(g, k) && b.Ib()
							}("resize" === f || h) && b.jg();
							f = b.time(ca);
							var l = Math.min(f - b.xf, 5E3);
							b.involvedTime += Math.round(l);
							b.xf = f;
							if (b.meta && b.scroll && b.xb) {
								var m = b.xb.h * b.xb.w;
								b.fa = A(function(p) {
									var q = z({}, p),
										r = b.meta[q.id],
										t = Jc(p.Db);
									if (!r || b.tf(q.element) || !t) return q;
									p = b.l.Math;
									r = p.max((b.scroll.y + b.xb.h - r.y) / r.height, 0);
									var x = t.height * t.width;
									t = oh(b.l, t, b.xb);
									q.oe = t / m;
									q.visibility = t / x;
									if (.9 <= q.visibility || .1 <= q.oe) q.involvedTime += l;
									q.maxScrolled = p.round(1E4 * r) / 1E4;
									return q
								}, b.fa);
								rb(b.l, (d = {}, d.name = "publishers", d.counterKey = b.qa, d.data = (e = {}, e.involvedTime = b.involvedTime, e.contentItems = A(function(p) {
									var q;
									return z((q = {}, q.contentElement = p.Db, q), p)
								}, b.fa), e), d))
							}
						})()
					};
					a.prototype.bj = function(c) {
						var b = A(function(d) {
							return d.id
						}, this.fa);
						this.fa = this.fa.concat(ha(function(d) {
							return !J(d.id, b)
						}, c))
					};
					a.prototype.jg = function() {
						var c = Ud(this.l) || Kc(this.l);
						this.xb = {
							w: c[0],
							h: c[1]
						}
					};
					a.prototype.cj = function() {
						var c = this;
						C(this.l, "p.um." + this.Pc.id, function() {
							var b = [];
							c.Ib();
							c.meta = yb(function(d, e) {
								var f;
								if (c.tf(e.element)) b.push(e), delete d[e.id];
								else {
									var g = (f = {}, f.id = e.id, f.involvedTime = Math.max(e.involvedTime, 0), f.maxScrolled = e.maxScrolled || 0, f.chars = e.update ? e.update("chars") || 0 : 0, f);
									e.Db && (f = Jc(e.Db)) && (g.x = Math.max(Math.round(f.left) + c.scroll.x, 0), g.y = Math.max(Math.round(f.top) + c.scroll.y, 0), g.width = Math.round(f.width), g.height = Math.round(f.height));
									d[e.id] = g
								}
								return d
							}, {}, c.fa);
							y(function(d) {
								d = xe(c.l)(d, c.fa);
								c.fa.splice(d, 1)
							}, b)
						})()
					};
					a.prototype.Cd = function() {
						var c, b, d = A(u(this.meta, n), ea(this.meta));
						return d.length && (this.Yd = Kb(this.l, d), this.Ef !== this.Yd) ? (c = {}, c.type = "publishersHeader", c.data = (b = {}, b.articleMeta = d || [], b.involvedTime = this.involvedTime, b), c) : null
					};
					a.prototype.Jg = function() {
						var c = this;
						if (this.fa.length) {
							var b = A(function(d) {
								var e, f = M(function(g, h) {
									d[h] && (g[h] = d[h]);
									return g
								}, {}, c.qg);
								d.Yf = !0;
								return e = {}, e.type = "articleInfo", e.stamp = f.stamp, e.data =
									f, e
							}, ha(function(d) {
								return !d.Yf
							}, this.fa));
							b.length && (this.buffer = this.buffer.concat(b), Ib(this.l, this.qa, ["pdf", b]))
						}
					};
					a.prototype.Oi = function() {
						this.Ue.F(this.l, ol, this.Wb)
					};
					a.prototype.aj = function() {
						this.Ge && this.Ge();
						this.Ue.wb(this.l, ol, this.Wb)
					};
					a.prototype.Ib = function() {
						this.scroll = {
							x: this.l.pageXOffset || n(this.l, "document.documentElement.scrollLeft") || 0,
							y: this.l.pageYOffset || n(this.l, "document.documentElement.scrollLeft") || 0
						}
					};
					return a
				}(),
				Pd, Sg = (Pd = {}, Pd[1] = 500, Pd[2] = 500, Pd[3] = 0, Pd),
				Gt = ["topics",
					"rubric", "authors"
				],
				Tg = function() {
					function a(c, b) {
						var d, e = this;
						this.id = "a";
						this.Md = !1;
						this.Fb = {};
						this.sb = {
							"schema.org": "Article NewsArticle Movie BlogPosting Review Recipe Answer".split(" "),
							Bf: ["article"]
						};
						this.Ee = (d = {}, d.Answer = 3, d.Review = 2, d);
						this.Xe = v(function(f, g, h) {
							var k;
							Ib(e.l, e.qa, "pfi", (k = {}, k.field = f, k.itemField = g, k.value = h, k))
						}, function(f, g, h) {
							return "" + f + g + h
						});
						this.ej = function(f) {
							Gt.forEach(function(g) {
								f[g] && (f[g] = f[g].reduce(function(h, k) {
									var l = k.name,
										m = k.position;
									if (!l) return e.Xe(g,
										"name", l), h;
									if ("string" === typeof m) {
										l = ce(m);
										if (null === l || e.l.isNaN(l)) return e.Xe(g, "position", m), h;
										k.position = l
									}
									h.push(k);
									return h
								}, []))
							});
							return f
						};
						this.Pg = v(function(f, g) {
							var h;
							Ib(e.l, e.qa, ["pcs", g], (h = {}, h.chars = g.chars, h.limit = Sg[g.type], h))
						});
						this.l = c;
						this.root = uc(c);
						this.qa = b
					}
					a.prototype.Ka = function(c) {
						return c.element
					};
					a.prototype.ef = function(c, b) {
						var d = this,
							e;
						C(this.l, "P.s." + b, function() {
							e = d.Fb[b].call(d, c)
						})();
						return e
					};
					a.prototype.Bi = function(c) {
						var b = z({}, c);
						this.Md && !b.id && J(c.type, [3,
							2
						]) && (c = H(", ", A(U("name"), b.authors || [])), b.pageTitle = c + ": " + b.pageTitle);
						b.pageTitle || (b.pageTitle = this.Eh(b.Db));
						b.pageUrlCanonical || (c = b.id, b.pageUrlCanonical = ("string" !== typeof c ? 0 : /^(https?:)\/\//.test(c)) ? b.id : this.Ch());
						b.id || (b.id = b.pageTitle || b.pageUrlCanonical);
						return b
					};
					a.prototype.Ca = function(c) {
						var b = this,
							d = {},
							e = this.Ka(c);
						if (!e) return null;
						d.type = c.type;
						y(function(g) {
							d[g] = b.ef(c, g)
						}, ea(this.Fb));
						var f = ia(this.l);
						d.stamp = f(Hj);
						d.element = c.element;
						d.Db = e;
						d = this.ej(this.Bi(d));
						d.id = d.id ?
							dc(d.id) : 1;
						d.update = function(g) {
							return b.Ka(c) ? b.ef(c, g) : void 0
						};
						return d
					};
					a.prototype.Eh = function(c) {
						for (var b = 1; 5 >= b; b += 1) {
							var d = ab(bc("h" + b, c));
							if (d) return d
						}
					};
					a.prototype.Ch = function() {
						var c = bc('[rel="canonical"]', this.root);
						if (c) return c.href
					};
					a.prototype.kf = function() {
						return 1
					};
					a.prototype.pc = function() {
						return []
					};
					a.prototype.gh = function() {
						var c = this,
							b = this.pc(),
							d = 1;
						return yb(function(e, f) {
							var g = c.Ca({
								element: f,
								type: c.kf(f)
							}) || [];
							Z(g) || (g = [g]);
							g = yb(function(h, k) {
								var l = h.values,
									m = h.mf;
								k && k.chars >
									Sg[k.type] && !J(k.id, m) ? (l.push(k), m.push(k.id)) : k && k.chars <= Sg[k.type] && c.Pg(k.id, k);
								return {
									values: l,
									mf: m
								}
							}, {
								values: [],
								mf: A(U("id"), e)
							}, g).values;
							return e.concat(A(function(h) {
								var k;
								h = z((k = {
									index: d,
									Yf: !1
								}, k.involvedTime = 0, k), h);
								d += 1;
								return h
							}, g))
						}, [], b)
					};
					return a
				}(),
				pl = function(a) {
					function c() {
						var b, d = null !== a && a.apply(this, arguments) || this;
						d.id = "j";
						d.Md = !0;
						d.Qe = H(",", ['script[type="application/ld+json"]', 'script[type="application/json+ld"]', 'script[type="ld+json"]', 'script[type="json+ld"]']);
						d.Fb =
							(b = {}, b.id = function(e) {
								var f = e.data["@id"];
								e = e.data.mainEntity || e.data.mainEntityOfPage;
								!f && qa(e) && (f = e["@id"]);
								return f
							}, b.chars = function(e) {
								var f = e.data;
								return fa(f.text) ? f.text.length : Jb(this.Ka(e)).length
							}, b.authors = function(e) {
								e = e.data;
								var f = [];
								f = f.concat(this.oc(e, "author"));
								f = f.concat(this.oc(e.mainEntity, "author"));
								return f.concat(this.oc(e.mainEntityOfPage, "author"))
							}, b.pageTitle = function(e) {
								var f = e.data,
									g = f.headline || "";
								f.alternativeHeadline && (g += " " + f.alternativeHeadline);
								"" === g && (f.name ?
									g = f.name : f.itemReviewed && (g = f.itemReviewed));
								3 === e.type && qa(f.parentItem) && (g = f.parentItem.text);
								return g
							}, b.updateDate = function(e) {
								return e.data.dateModified || ""
							}, b.publicationDate = function(e) {
								return e.data.datePublished || ""
							}, b.pageUrlCanonical = function(e) {
								return e.data.url
							}, b.topics = function(e) {
								return this.oc(e.data, "about", ["name", "alternateName"])
							}, b.rubric = function(e) {
								var f = this,
									g = this.Ka(e);
								e = Ea(A(function(h) {
									h = Qb(f.l, Jb(h));
									if (qa(h) || Z(h)) {
										var k = f.ff(h);
										if (k) return M(function(l, m) {
											return l ?
												l : qa(m) && "BreadcrumbList" === m["@type"] ? m : l
										}, null, k);
										if ("BreadcrumbList" === h["@type"]) return h
									}
									return null
								}, [e.element].concat(gb(this.Qe, document.body === g ? document.documentElement : g))));
								return e.length && (e = e[0].itemListElement, Z(e)) ? Ea(A(function(h) {
									return qa(h) && h.item && qa(h.item) && !f.l.isNaN(h.position) ? {
										name: h.item.name || h.name,
										position: h.position
									} : null
								}, e)) : []
							}, b);
						return d
					}
					Ma(c, a);
					c.prototype.oc = function(b, d, e) {
						void 0 === e && (e = ["name"]);
						if (!b || !b[d]) return [];
						b = Z(b[d]) ? b[d] : [b[d]];
						b = Ea(A(function(f) {
							return f ?
								"string" === typeof f ? f : M(function(g, h) {
									return g || "" + f[h]
								}, "", e) : null
						}, b));
						return A(function(f) {
							var g;
							return g = {}, g.name = f, g
						}, b)
					};
					c.prototype.Ka = function(b) {
						var d = b.element,
							e = b.data || {};
						b = e["@id"];
						var f = e.url;
						e = null;
						f && fa(f) && (e = this.We(f));
						!e && b && fa(b) && (e = this.We(b));
						e || (e = b = d.parentNode, !Tb("head", this.l, d) && b && 0 !== Jb(b).length) || (e = this.l.document.body);
						return e
					};
					c.prototype.We = function(b) {
						try {
							var d = wc(this.l, b).hash;
							if (d) {
								var e = bc(d, this.l.document.body);
								if (e) return e
							}
						} catch (f) {}
						return null
					};
					c.prototype.ee =
						function(b) {
							return this.Ee[b["@type"]] || 1
						};
					c.prototype.Ca = function(b) {
						var d = this,
							e = b.element,
							f = b.data;
						if (!f && (f = Qb(this.l, Jb(e)), !f || !/schema\.org/.test(f["@context"]) && !Z(f))) return null;
						var g = this.ff(f);
						if (g) return A(function(k) {
							return qa(k) && J(k["@type"], d.sb["schema.org"]) ? a.prototype.Ca.call(d, {
								element: e,
								data: k,
								type: d.ee(k)
							}) : null
						}, g);
						b.data = f;
						if ("QAPage" === b.data["@type"]) {
							var h = b.data.mainEntity || b.data.mainEntityOfPage;
							if (!h) return null
						}
						"Question" === b.data["@type"] && (h = b.data);
						return h ? (b =
							tc(u(h, n), ["acceptedAnswer", "suggestedAnswer"]), A(function(k) {
								var l;
								if (!qa(k) || !J(k["@type"], d.sb["schema.org"])) return null;
								k = {
									element: e,
									type: d.ee(k),
									data: z((l = {}, l.parentItem = h, l), k)
								};
								return a.prototype.Ca.call(d, k)
							}, b)) : J(b.data["@type"], this.sb["schema.org"]) ? a.prototype.Ca.call(this, z(b, {
							type: this.ee(b.data)
						})) : null
					};
					c.prototype.pc = function() {
						return gb(this.Qe, this.root)
					};
					c.prototype.ff = function(b) {
						if (Z(b)) return b;
						if (b && Z(b["@graph"])) return b["@graph"]
					};
					return c
				}(Tg),
				Ug = function(a) {
					function c() {
						var b,
							d = null !== a && a.apply(this, arguments) || this;
						d.id = "s";
						d.Md = !0;
						d.$i = Ka("exec", new RegExp("schema.org\\/(" + H("|", ea(d.Ee)) + ")$"));
						d.Fb = (b = {}, b.id = function(e) {
							e = e.element;
							var f = eb(this.l, e, "identifier");
							return f ? ab(f) : (f = eb(this.l, e, "mainEntityOfPage")) && f.getAttribute("itemid") ? f.getAttribute("itemid") : null
						}, b.chars = function(e) {
							var f = 0;
							e = e.element;
							for (var g = ["articleBody", "reviewBody", "recipeInstructions", "description", "text"], h = 0; h < g.length; h += 1) {
								var k = eb(this.l, e, g[h]);
								if (k) {
									f = ab(k).length;
									break
								}
							}
							e =
								Jb(e);
							0 === f && e && (f += e.length);
							return f
						}, b.topics = function(e) {
							var f = this,
								g = Jd(this.l, e.element, "about");
							return A(function(h) {
								var k = {
									name: ab(h)
								};
								if (g = eb(f.l, h, "name")) k.name = ab(g);
								return k
							}, g)
						}, b.rubric = function(e) {
							var f = this;
							(e = bc('[itemtype$="schema.org/BreadcrumbList"]', e.element)) || (e = bc('[itemtype$="schema.org/BreadcrumbList"]', this.root));
							return e ? A(function(g) {
								return {
									name: ab(eb(f.l, g, "name")),
									position: ab(eb(f.l, g, "position"))
								}
							}, Jd(this.l, e, "itemListElement")) : []
						}, b.updateDate = function(e) {
							return (e =
								eb(this.l, e.element, "dateModified")) ? hk(e) : ""
						}, b.publicationDate = function(e) {
							return (e = eb(this.l, e.element, "datePublished")) ? hk(e) : ""
						}, b.pageUrlCanonical = function(e) {
							e = Jd(this.l, e.element, "url");
							if (e.length) {
								var f = e[0];
								return f.href ? f.href : ab(e)
							}
							return null
						}, b.pageTitle = function(e) {
							var f = "",
								g = e.element,
								h = eb(this.l, g, "headline");
							h && (f += ab(h));
							(h = eb(this.l, g, "alternativeHeadline")) && (f += " " + ab(h));
							"" === f && ((h = eb(this.l, g, "name")) || (h = eb(this.l, g, "itemReviewed")), h && (f += ab(h)));
							3 === e.type && (e = Tb('[itemtype$="schema.org/Question"]',
								this.l, g)) && (e = eb(this.l, e, "text")) && (f += ab(e));
							return f
						}, b.authors = function(e) {
							var f = this;
							e = Jd(this.l, e.element, "author");
							return A(function(g) {
								var h, k = (h = {}, h.name = "", h);
								/.+schema.org\/(Person|Organization)/.test(g.getAttribute("itemtype") || "") && (h = eb(f.l, g, "name")) && (k.name = ab(h));
								k.name || (k.name = g.getAttribute("content") || Jb(g) || g.getAttribute("href"));
								return k
							}, e)
						}, b);
						return d
					}
					Ma(c, a);
					c.prototype.kf = function(b) {
						b = b.getAttribute("itemtype") || "";
						return (b = this.$i(b)) ? this.Ee[b[1]] : 1
					};
					c.prototype.Ca =
						function(b) {
							return b.element && Jb(b.element).length ? a.prototype.Ca.call(this, b) : null
						};
					c.prototype.pc = function() {
						var b = H(",", A(function(d) {
							return '[itemtype$="schema.org/' + d + '"]'
						}, this.sb["schema.org"]));
						return gb(b, this.root)
					};
					return c
				}(Tg),
				ql = function(a) {
					function c(b, d) {
						var e, f = a.call(this, b, d) || this;
						f.id = "o";
						f.Fb = (e = {}, e.chars = function(g) {
								g = this.Ka(g);
								return Jb(g).length
							}, e.authors = function(g) {
								return this.yd(g.data.author)
							}, e.pageTitle = function(g) {
								return this.uc(g.data.title) || ""
							}, e.updateDate = function(g) {
								return this.uc(g.data.modified_time)
							},
							e.publicationDate = function(g) {
								return this.uc(g.data.published_time)
							}, e.pageUrlCanonical = function(g) {
								return this.uc(g.data.url)
							}, e.rubric = function(g) {
								return this.yd(g.data.section)
							}, e.topics = function(g) {
								return this.yd(g.data.tag)
							}, e);
						f.Zg = new RegExp("^(og:)?((" + H("|", f.sb.Bf) + "):)?");
						return f
					}
					Ma(c, a);
					c.prototype.yd = function(b) {
						var d;
						return b ? Z(b) ? A(function(e) {
							var f;
							return f = {}, f.name = e ? "" + e : null, f
						}, b) : [(d = {}, d.name = b ? "" + b : null, d)] : []
					};
					c.prototype.uc = function(b) {
						return Z(b) ? b.length ? "" + b[0] : null : b ?
							"" + b : null
					};
					c.prototype.pc = function() {
						var b = gb('meta[property="og:type"]', this.l.document.body);
						return [this.l.document.head].concat(b)
					};
					c.prototype.th = function(b) {
						var d = this,
							e = b.element,
							f = {},
							g = this.Ka(b);
						e = gb("meta[property]", e === this.l.document.head ? e : g);
						if (e.length) y(function(h) {
							try {
								if (h.parentNode === g || h.parentNode === d.l.document.head) {
									var k = h.getAttribute("property").replace(d.Zg, ""),
										l = ab(h);
									f[k] ? Z(f[k]) ? f[k].push(l) : f[k] = [f[k], l] : f[k] = l
								}
							} catch (m) {
								jd(d.l, "og.ed", m)
							}
						}, e);
						else return null;
						return J(f.type,
							this.sb.Bf) ? z(b, {
							data: f
						}) : null
					};
					c.prototype.Ka = function(b) {
						b = b.element;
						var d = this.l.document;
						return b === d.head ? d.body : b.parentNode
					};
					c.prototype.Ca = function(b) {
						return (b = this.th(b)) ? a.prototype.Ca.call(this, b) : null
					};
					return c
				}(Tg),
				Qd = {};
			pl && (Qd.json_ld = pl);
			Ug && (Qd.schema = Ug, Qd.microdata = Ug);
			ql && (Qd.opengraph = ql);
			var Ht = B("p.p", function(a, c) {
					function b(m) {
						var p = z({}, l);
						p.Y.ca = m;
						return f(p, c)["catch"](C(a, "s.ww.p"))
					}
					var d, e = ei(a, "9", "8");
					if (!Fa("querySelectorAll", a.document.querySelectorAll) || !e) return L.resolve();
					var f = na(a, "p", c),
						g = Ha(),
						h = Vc(a, c.id),
						k = h.C("pai");
					k && (h.ic("pai"), g.D("pai", k));
					var l = {
						J: (d = {}, d["wv-type"] = e.type, d),
						K: g,
						Y: {}
					};
					return ma(c, C(a, "ps.s", function(m) {
						var p;
						if (m = n(m, "settings.publisher.schema")) {
							Uj(c) && (m = "microdata");
							var q = Qd[m];
							if (q && e) {
								var r = K(c);
								q = new q(a, r);
								q = new Ft(a, q, e, b, r);
								q.start();
								Ib(a, r, "ps", (p = {}, p.schema = m, p));
								return G(q.stop, q)
							}
						}
					}))
				}),
				It = function() {
					function a(c, b) {
						this.type = "0";
						this.l = c;
						this.rh = b
					}
					a.prototype.Fa = function(c) {
						return uf(tc(G(this.tb, this), c))
					};
					a.prototype.tb =
						function(c, b) {
							var d = this,
								e = [],
								f = this.rh(this.l, b && b.type, c.type);
							f && (e = tc(function(g) {
								return g({
									l: d.l,
									na: c
								}) || []
							}, f));
							return e
						};
					a.prototype.ib = function(c) {
						return c.length
					};
					a.prototype.ue = function(c) {
						return [c]
					};
					a.prototype.isEnabled = function() {
						return !0
					};
					return a
				}(),
				rl = function() {
					function a(c, b, d) {
						this.Re = 0;
						this.fe = 1;
						this.Zc = 5E3;
						this.l = c;
						this.ja = b;
						this.Rb = d
					}
					a.prototype.Sc = function() {
						this.Re = S(this.l, w(G(this.flush, this), G(this.Sc, this)), this.Zc, "b.f")
					};
					a.prototype.send = function(c, b) {
						var d = this.Rb(c,
							b || [], this.fe);
						this.fe += 1;
						return d
					};
					a.prototype.push = function() {};
					a.prototype.flush = function() {};
					return a
				}(),
				Jn = function(a) {
					function c(b, d, e) {
						b = a.call(this, b, d, e) || this;
						b.buffer = [];
						b.sg = 7500;
						b.Zc = 3E4;
						b.Sc();
						return b
					}
					Ma(c, a);
					c.prototype.push = function(b, d) {
						var e = this.ja.tb(b, d);
						va(this.buffer, e);
						this.ja.ib(this.buffer) > this.sg && this.flush()
					};
					c.prototype.flush = function() {
						var b = this.buffer;
						b.length && (this.send(b), this.buffer = [])
					};
					return c
				}(rl),
				Yn = /opera mini/i,
				$h = ["phone", "email"],
				sl = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state contact.*".split(" "),
				Vn = /^[\w\u0410-\u042f\u0430-\u044f]$/,
				Wn = [65, 90],
				Xn = [97, 122],
				Tn = "color radio checkbox date datetime-local email month number password range search tel text time url week".split(" "),
				Rn = new RegExp("(" + H("|", sl) + ")", "i"),
				Qn = new RegExp("(" + H("|", $h) + ")", "i"),
				ik = ["password", "passwd", "pswd"],
				Sn = new RegExp("(" + H("|", sl.concat("\u0438\u043c\u044f \u0444\u0430\u043c\u0438\u043b\u0438\u044f \u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u043d\u0434\u0435\u043a\u0441 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u0430\u0434\u0440\u0435\u0441 \u043f\u0430\u0441\u043f\u043e\u0440\u0442 \u043d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b \u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2}\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0434\u043e\u043c \u0443\u043b\u0438\u0446\u0430 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0433\u043e\u0440\u043e\u0434 \u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(" "))) +
					")", "i"),
				Xa = "metrikaId_" + Math.random(),
				yc = {
					counter: 0
				},
				Cr = v(function() {
					var a;
					return a = {}, a.A = 1, a.ABBR = 2, a.ACRONYM = 3, a.ADDRESS = 4, a.APPLET = 5, a.AREA = 6, a.B = 7, a.BASE = 8, a.BASEFONT = 9, a.BDO = 10, a.BIG = 11, a.BLOCKQUOTE = 12, a.BODY = 13, a.BR = 14, a.BUTTON = 15, a.CAPTION = 16, a.CENTER = 17, a.CITE = 18, a.CODE = 19, a.COL = 20, a.COLGROUP = 21, a.DD = 22, a.DEL = 23, a.DFN = 24, a.DIR = 25, a.DIV = 26, a.DL = 27, a.DT = 28, a.EM = 29, a.FIELDSET = 30, a.FONT = 31, a.FORM = 32, a.FRAME = 33, a.FRAMESET = 34, a.H1 = 35, a.H2 = 36, a.H3 = 37, a.H4 = 38, a.H5 = 39, a.H6 = 40, a.HEAD = 41, a.HR = 42, a.HTML =
						43, a.I = 44, a.IFRAME = 45, a.IMG = 46, a.INPUT = 47, a.INS = 48, a.ISINDEX = 49, a.KBD = 50, a.LABEL = 51, a.LEGEND = 52, a.LI = 53, a.LINK = 54, a.MAP = 55, a.MENU = 56, a.META = 57, a.NOFRAMES = 58, a.NOSCRIPT = 59, a.OBJECT = 60, a.OL = 61, a.OPTGROUP = 62, a.OPTION = 63, a.P = 64, a.PARAM = 65, a.PRE = 66, a.Q = 67, a.S = 68, a.SAMP = 69, a.SCRIPT = 70, a.SELECT = 71, a.SMALL = 72, a.SPAN = 73, a.STRIKE = 74, a.STRONG = 75, a.STYLE = 76, a.SUB = 77, a.SUP = 78, a.TABLE = 79, a.TBODY = 80, a.TD = 81, a.TEXTAREA = 82, a.TFOOT = 83, a.TH = 84, a.THEAD = 85, a.TITLE = 86, a.TR = 87, a.TT = 88, a.U = 89, a.UL = 90, a.VAR = 91, a.NOINDEX =
						100, a
				}),
				zr = [17, 18, 38, 32, 39, 15, 11, 7, 1],
				Jt = function() {
					var a = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state".split(" ");
					return {
						xj: new RegExp("(" + H("|", a) + ")", "i"),
						Ij: new RegExp("(" + H("|", a.concat("\u0438\u043c\u044f;\u0444\u0430\u043c\u0438\u043b\u0438\u044f;\u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e;\u0438\u043d\u0434\u0435\u043a\u0441;\u0442\u0435\u043b\u0435\u0444\u043e\u043d;\u0430\u0434\u0440\u0435\u0441;\u043f\u0430\u0441\u043f\u043e\u0440\u0442;\u041d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b;\u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2} \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f;\u0434\u043e\u043c;\u0443\u043b\u0438\u0446\u0430;\u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430;\u0433\u043e\u0440\u043e\u0434;\u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(";"))) +
							")", "i"),
						vj: /ym-record-keys/i,
						li: "\u2022",
						Fj: 88
					}
				}(),
				nk = Sb(u(Jt.li, P)),
				nd = !0,
				xg = "",
				yg = !1,
				zg = !0,
				Ag = !1,
				On = oa(function(a, c) {
					var b = D([a, "efv." + c.event], C);
					c.R = A(w(P, b), c.R);
					return c
				}),
				tl = v(function(a) {
					var c = [],
						b = [],
						d = [];
					a.document.attachEvent && !a.opera && (c.push(Af), b.push(Fr), b.push(Gr));
					a.document.addEventListener ? c.push(lk) : (b.push(kk), d.push(lk));
					return Nn(a, ("onpagehide" in a ? [] : [{
						target: a,
						type: "window",
						event: "beforeunload",
						R: [F]
					}, {
						target: a,
						type: "window",
						event: "unload",
						R: [F]
					}]).concat([{
						event: "click",
						R: [Re]
					}, {
						event: "dblclick",
						R: [Re]
					}, {
						event: "mousedown",
						R: [Re]
					}, {
						event: "mouseup",
						R: [Ir]
					}, {
						event: "keydown",
						R: [Jr]
					}, {
						event: "keypress",
						R: [Kr]
					}, {
						event: "copy",
						R: [pk]
					}, {
						event: "blur",
						R: c
					}, {
						event: "focusin",
						R: b
					}, {
						event: "focusout",
						R: d
					}]).concat(!a.document.attachEvent || a.opera ? [{
						target: a,
						type: "window",
						event: "focus",
						R: [Yh]
					}, {
						target: a,
						type: "window",
						event: "blur",
						R: [Af]
					}] : []).concat(a.document.addEventListener ? [{
						event: "focus",
						R: [kk]
					}, {
						event: "change",
						R: [mk]
					}, {
						event: "submit",
						R: [rk]
					}] : [{
						type: "formInput",
						event: "change",
						R: [mk]
					}, {
						type: "form",
						event: "submit",
						R: [rk]
					}]))
				}),
				Ln = v(function(a) {
					var c = [];
					Fc(a) && c.push({
						target: a,
						type: "document",
						event: "mouseleave",
						R: [Lr]
					});
					"onpagehide" in a && c.push({
						target: a,
						type: "window",
						event: "pagehide",
						R: [function(b) {
							b = b.flush;
							b()
						}]
					});
					return c
				}),
				Kt = ["submit", "beforeunload", "unload"],
				Lt = v(function(a, c) {
					var b = c(a);
					return M(function(d, e) {
						d[e.type + ":" + e.event] = e.R;
						return d
					}, {}, b)
				}),
				Mt = u(tl, function(a, c, b, d) {
					return Lt(c, a)[b + ":" + d] || []
				}),
				Mn = /^\s*function submit\(\)/,
				Nt = B("fw.p", function(a, c) {
					var b;
					if (!(b = c.Wg || !c.yb)) {
						var d = I(a),
							e = !1;
						b = d.C("hitParam", {});
						var f = K(c);
						b[f] && (d = d.C("counters", {}), e = Td(c.ba) && !d[f]);
						b[f] = 1;
						b = e
					}
					if (b) return L.resolve(F);
					b = new It(a, Mt);
					return In(a, c, b, tl, Kt)
				}),
				Vg, ul = (Vg = function(a) {
					function c(b, d, e, f) {
						void 0 === f && (f = 0);
						d = a.call(this, b, d, e) || this;
						d.Be = 0;
						d.Bb = 0;
						d.Ae = 0;
						d.buffer = [];
						d.Zc = 2E3;
						d.$ = kd(b);
						d.Sc();
						d.Ae = f;
						return d
					}
					Ma(c, a);
					c.prototype.cf = function(b) {
						return Ea(this.$.aa("ag", b))
					};
					c.prototype.bf = function(b, d) {
						var e = this;
						b(Ya(C(this.l, "wv2.b.st"), function(f) {
							e.send(f,
								d)
						}))
					};
					c.prototype.Ni = function(b, d) {
						var e = this;
						ja(this.l, this.Re);
						var f = Math.ceil(this.ja.ib(d) / 63E4),
							g = this.ja.ue(d, f);
						y(function(h, k) {
							var l, m = z({}, b, (l = {}, l.data = h, l.partNum = k + 1, l.end = k + 1 === f, l.partsTotal = g.length, l));
							l = e.ja.Fa([m], !1);
							e.bf(l, [m])
						}, g);
						this.Sc()
					};
					c.prototype.send = function(b, d) {
						var e = this;
						this.$.aa("se", d);
						return a.prototype.send.call(this, b, d).then(P, function() {
							e.$.aa("see", d)
						})
					};
					c.df = function(b, d, e, f, g) {
						c.cd["" + b + d] || (this.cd[d] = new c(g, f, e, "m" === d ? 31457280 : 0));
						return this.cd[d]
					};
					c.prototype.Yh = function() {
						return this.Ae && this.Be >= this.Ae
					};
					c.prototype.push = function(b) {
						var d = this;
						if (!this.Yh()) {
							this.$.aa("p", b);
							var e = this.ja.tb(b),
								f = this.ja.ib(e);
							7E5 < f ? this.Ni(b, e) : (e = this.cf(this.buffer.concat([b])), e = yb(function(g, h) {
								return g + d.ja.ib(d.ja.tb(h))
							}, 0, e), this.Bb + e + f >= 7E5 * .7 && this.flush(), this.buffer.push(b), this.Bb += f)
						}
					};
					c.prototype.F = function(b, d) {
						this.$.F([b], d)
					};
					c.prototype.ga = function(b, d) {
						this.$.ga([b], d)
					};
					c.prototype.flush = function(b) {
						var d = this.buffer.concat(this.cf(this.buffer));
						d.length && (this.buffer = [], this.Be += this.Bb, this.Bb = 0, b = this.ja.Fa(d, b), this.bf(b, d))
					};
					return c
				}(rl), Vg.cd = {}, Vg),
				bb = function() {
					function a(c, b, d) {
						this.bi = "wv2.c";
						this.pb = [];
						this.ia = [];
						this.l = c;
						this.L = yf(c, this, d, this.bi);
						this.G = b;
						this.Qa = this.G.xh();
						this.start = this.L.H(this.start, "st");
						this.stop = this.L.H(this.stop, "sp")
					}
					a.prototype.start = function() {
						var c = this;
						this.pb = A(function(b) {
							var d = b[0],
								e = b[2];
							b = G(c.L.H(b[1], d[0]), c);
							return c.Qa.F(e || c.l, d, b)
						}, this.ia)
					};
					a.prototype.stop = function() {
						y(xa, this.pb)
					};
					a.prototype.Z = function(c) {
						return this.G.ra().Z(c)
					};
					return a
				}(),
				Gn = ["checkbox", "radio"],
				Hn = /pwd|value|password/i,
				Wg = U("location.href"),
				Ot = function(a) {
					function c(b, d, e) {
						d = a.call(this, b, d, e) || this;
						d.oa = {
							elements: [],
							attributes: []
						};
						d.index = 0;
						d.$d = d.L.H(d.$d, "o");
						d.md = d.L.H(d.md, "io");
						d.$c = d.L.H(d.$c, "ao");
						d.ke = d.L.H(d.ke, "a");
						d.ie = d.L.H(d.ie, "at");
						d.le = d.L.H(d.le, "r");
						d.je = d.L.H(d.je, "c");
						d.ya = new b.MutationObserver(d.$d);
						return d
					}
					Ma(c, a);
					c.prototype.start = function() {
						this.ya.observe(this.l.document.documentElement, {
							attributes: !0,
							characterData: !0,
							childList: !0,
							subtree: !0,
							attributeOldValue: !0,
							characterDataOldValue: !0
						})
					};
					c.prototype.stop = function() {
						this.ya.disconnect()
					};
					c.prototype.$c = function(b) {
						var d = b.target,
							e = b.attributeName,
							f = b.oldValue;
						b = d.getAttribute(e);
						if (b === f) return !1;
						f = Lb(this.l)(d, this.oa.elements); - 1 === f && (f = this.oa.elements.push(d) - 1, this.oa.attributes[f] = {});
						this.oa.attributes[f] || (this.oa.attributes[f] = {});
						this.oa.attributes[f][e] = he(this.l, d, e, b, this.G.Hb()).value;
						return !0
					};
					c.prototype.md = function(b) {
						function d(k) {
							var l =
								Lb(e.l)(k, f);
							return -1 === l ? (f.push(k), k = {
								wd: {}
							}, g.push(k), k) : g[l]
						}
						var e = this,
							f = [],
							g = [];
						y(function(k) {
							var l = k.attributeName,
								m = k.removedNodes,
								p = k.oldValue,
								q = k.target,
								r = k.nextSibling,
								t = k.previousSibling;
							switch (k.type) {
								case "attributes":
									if (e.$c(k)) {
										var x = d(q);
										x.wd[l] || (x.wd[l] = he(e.l, q, l, p, e.G.Hb()).value)
									}
									break;
								case "childList":
									m && y(function(E) {
										x = d(E);
										x.$e || z(x, {
											$e: q,
											lh: r ? r : void 0,
											mh: t ? t : void 0
										})
									}, Ga(m));
									break;
								case "characterData":
									x = d(q), x.af || (x.af = p)
							}
						}, b);
						var h = this.G.ra();
						y(function(k, l) {
								h.te(k, g[l])
							},
							f)
					};
					c.prototype.$d = function(b) {
						var d = this;
						if (Wg(this.l)) {
							var e = this.G.stamp();
							this.md(b);
							y(function(f) {
								var g = f.addedNodes,
									h = f.removedNodes,
									k = f.target;
								switch (f.type) {
									case "childList":
										h && h.length && d.le(Ga(h), e);
										g && g.length && d.ke(Ga(g), e);
										break;
									case "characterData":
										d.je(k, e)
								}
							}, b);
							this.ie(e)
						} else this.stop()
					};
					c.prototype.ie = function(b) {
						var d = this;
						y(function(e, f) {
							var g = d.rc();
							d.G.T("mutation", {
								index: g,
								attributes: d.oa.attributes[f],
								target: d.Z(e)
							}, "ac", b)
						}, this.oa.elements);
						this.oa.elements = [];
						this.oa.attributes = []
					};
					c.prototype.ke = function(b, d) {
						var e = this,
							f = this.rc();
						this.G.ra().wc({
							nodes: b,
							Rc: function(g) {
								g = A(function(h) {
									h.node = void 0;
									return h
								}, g);
								e.G.T("mutation", {
									index: f,
									nodes: g
								}, "ad", d)
							}
						})
					};
					c.prototype.le = function(b, d) {
						var e = this,
							f = this.rc(),
							g = this.G.ra(),
							h = A(function(k) {
								var l = g.removeNode(k);
								Fi(e.l, k, function(m) {
									g.removeNode(m)
								});
								return l
							}, b);
						this.G.T("mutation", {
							index: f,
							nodes: h
						}, "re", d)
					};
					c.prototype.je = function(b, d) {
						var e = this.rc();
						this.G.T("mutation", {
								value: b.textContent,
								target: this.Z(b),
								index: e
							}, "tc",
							d)
					};
					c.prototype.rc = function() {
						var b = this.index;
						this.index += 1;
						return b
					};
					return c
				}(bb),
				Pt = function() {
					function a(c, b) {
						var d = this;
						this.nc = [];
						this.cb = [];
						this.Zd = 1;
						this.Oe = this.Uf = 0;
						this.xa = {};
						this.Ra = {};
						this.Gb = [];
						this.Jd = function(f) {
							return d.cb.length ? J(f, d.cb) : !1
						};
						this.removeNode = function(f) {
							var g = d.Z(f),
								h = La(f);
							if (h) return h = "NR:" + h.toLowerCase(), d.Jd(h) && d.$.aa(h, {
								data: {
									node: f,
									id: g
								}
							}), g
						};
						this.hb = function(f) {
							var g = La(f);
							if (g) {
								var h = f.__ym_indexer;
								return h ? h : (h = d.Zd, f.__ym_indexer = h, d.Zd += 1, g = "NA:" +
									g.toLowerCase(), d.Jd(g) && d.$.aa(g, {
										data: {
											node: f,
											id: h
										}
									}), h)
							}
							return null
						};
						this.Of = function() {
							d.Uf = S(d.l, w(G(d.da, d, !1), d.Of), 50, "i.s")
						};
						this.Mf = function() {
							d.Oe = S(d.l, w(G(d.fd, d, !1), d.Mf), 50, "i.g")
						};
						this.Ei = function(f) {
							null === d.xa[f] && delete d.xa[f];
							null === d.Ra[f] && delete d.Ra[f]
						};
						this.l = c;
						var e = yf(c, this, "i");
						this.$ = kd(c);
						this.options = b;
						this.start = e.H(this.start, "st");
						this.stop = e.H(this.stop, "sp");
						this.Z = e.H(this.Z, "i");
						this.te = e.H(this.te, "o");
						this.wc = e.H(this.wc, "a");
						this.removeNode = e.H(this.removeNode,
							"r");
						this.da = e.H(this.da, "s");
						this.fd = e.H(this.fd, "g")
					}
					a.prototype.te = function(c, b) {
						var d = this.hb(c);
						Va(d) || (this.Ra[d] && this.Z(c), this.Ra[d] = b)
					};
					a.prototype.F = function(c, b, d) {
						c = "" + b + c;
						this.cb.push(c);
						this.Jd(c) || this.cb.push(c);
						this.$.F([c], d)
					};
					a.prototype.ga = function(c, b, d) {
						var e = "" + b + c;
						this.cb = ha(function(f) {
							return f !== e
						}, this.cb);
						this.$.ga([e], d)
					};
					a.prototype.start = function() {
						this.Of();
						this.Mf()
					};
					a.prototype.stop = function() {
						this.flush();
						ja(this.l, this.Oe);
						ja(this.l, this.Uf);
						this.nc = [];
						this.Gb = [];
						this.xa = {};
						this.Ra = {}
					};
					a.prototype.wc = function(c) {
						var b = this,
							d = [],
							e = 0,
							f = {
								Rc: c.Rc,
								result: [],
								xc: 0,
								nodes: d
							};
						this.nc.push(f);
						y(function(g) {
							Fi(b.l, g, function(h) {
								var k = b.hb(h);
								Va(k) || (d.push(h), b.xa[k] && b.Z(h), b.xa[k] = {
									node: h,
									event: f,
									Yi: e
								}, e += 1)
							})
						}, c.nodes)
					};
					a.prototype.Z = function(c) {
						if (c === this.l) return 0;
						var b = this.hb(c),
							d = this.xa[b],
							e = this.ph(b),
							f = e.$e,
							g = e.wd,
							h = e.af,
							k = e.lh,
							l = e.mh;
						if (d) {
							e = d.event;
							d = d.Yi;
							var m = ls(this.l) === c;
							k = k || c.nextSibling;
							var p = l || c.previousSibling;
							l = !m && k ? this.hb(k) : null;
							p = !m &&
								p ? this.hb(p) : null;
							m = this.l;
							k = this.options;
							f = this.hb(f || c.parentNode || c.parentElement) || 0;
							var q = g,
								r = void 0;
							void 0 === p && (p = null);
							void 0 === l && (l = null);
							void 0 === q && (q = {});
							void 0 === r && (r = La(c));
							if (X(r)) c = void 0;
							else {
								g = {
									id: b,
									prev: p !== f ? p : null,
									next: l !== f ? l : null,
									parent: f,
									name: r.toLowerCase(),
									node: c
								};
								if (Ef(c)) {
									if (h = Dn(c, h), g.attributes = {}, g.content = h)
										if (c = ld(m, c)) g.content = "" !== Za(h) ? Un(m, h) : h, g.hidden = c
								} else h = En(m, c, k, q, r), m = h.lb, g.attributes = h.Dg, m && (g.hidden = m), c.namespaceURI && fb(c.namespaceURI, "svg") &&
									(g.namespace = c.namespaceURI);
								c = g
							}
							if (X(c)) return;
							this.xa[b] = null;
							this.Gb.push(b);
							e.result[d] = c;
							e.xc += 1;
							e.nodes.length === e.xc && e.Rc(e.result)
						}
						return b
					};
					a.prototype.flush = function() {
						this.da(!0)
					};
					a.prototype.fd = function() {
						if (this.Gb.length) {
							var c = cc(this.Gb, this.Ei),
								b = gg(this.l, 30);
							c(b)
						}
					};
					a.prototype.da = function(c) {
						var b = this;
						if (Wg(this.l)) {
							var d = ea(this.xa);
							d = M(function(e, f) {
								b.xa[f] && e.push(b.xa[f].node);
								return e
							}, [], d);
							d = cc(d, this.Z);
							c = c ? Fj(F) : Dj(this.l, 20);
							d(c);
							this.nc = ha(function(e) {
								return e.xc !==
									e.result.length
							}, this.nc)
						}
					};
					a.prototype.ph = function(c) {
						if (Va(c)) return {};
						var b = this.Ra[c];
						return b ? (this.Ra[c] = null, this.Gb.push(c), b) : {}
					};
					return a
				}(),
				Qt = ["input", "change", "keyup", "paste", "cut"],
				Rt = function(a) {
					function c(b, d, e) {
						b = a.call(this, b, d, e) || this;
						b.inputs = {};
						b.pd = !1;
						b.Ec = b.L.H(b.Ec, "ii");
						b.Fc = b.L.H(b.Fc, "ir");
						b.Mc = b.L.H(b.Mc, "ri");
						b.Wc = b.L.H(b.Wc, "ur");
						b.Hd = b.L.H(b.Hd, "ce");
						b.vc = b.L.H(b.vc, "vc");
						return b
					}
					Ma(c, a);
					c.prototype.start = function() {
						var b = this,
							d = this.G.ra();
						this.pd = this.Kg();
						y(function(e) {
							e =
								e.toLowerCase();
							d.F(e, "NA:", G(b.Ec, b));
							d.F(e, "NR:", G(b.Fc, b))
						}, Df);
						this.pb = [this.Qa.F(this.l.document, Qt, G(this.Hd, this)), function() {
							y(function(e) {
								e = e.toLowerCase();
								d.ga(e, "NA:", b.Ec);
								d.ga(e, "NR:", b.Fc)
							}, Df);
							y(b.Wc, ea(b.inputs))
						}]
					};
					c.prototype.Wc = function(b) {
						var d = this.inputs[b];
						if (d) {
							if (this.pd) {
								var e = d.yi;
								d = d.element;
								e && this.l.Object.defineProperty(d, this.sc(d), e)
							}
							delete this.inputs[b]
						}
					};
					c.prototype.Fc = function(b) {
						b && this.Wc(b.data.id)
					};
					c.prototype.Ec = function(b) {
						b && (b = b.data, this.Mc(b.node, b.id))
					};
					c.prototype.sc = function(b) {
						return He(b) ? "checked" : "value"
					};
					c.prototype.Hd = function(b) {
						if (b = b.target) {
							var d = this.sc(b);
							this.vc(b[d], b)
						}
					};
					c.prototype.vc = function(b, d) {
						var e = this.Z(d),
							f = this.inputs[e];
						if (!f && (f = this.Mc(f, e), !f)) return;
						e = f.Mg;
						var g = f.value,
							h = this.sc(d),
							k = !b || J(typeof b, ["string", "boolean", "number"]),
							l = this.G.Hb().Od;
						k && b !== g && (g = he(this.l, d, h, b, this.G.Hb()).value, e ? this.G.T("event", {
							target: this.Z(d),
							checked: !!b
						}, "change") : (e = Mc(this.l, d, l), l = e.eb, this.G.T("event", {
							value: g,
							hidden: e.mb &&
								!l,
							target: this.Z(d)
						}, "change")), f.value = b)
					};
					c.prototype.Mc = function(b, d) {
						var e = this;
						if (!wf(b) || "__ym_input_override_test" === b.getAttribute("class") || this.inputs[d]) return null;
						var f = He(b),
							g = this.sc(b),
							h = {
								element: b,
								Mg: f,
								value: b[g]
							};
						this.inputs[d] = h;
						this.pd && Pb(this.l, function() {
							var k = e.l.Object.getOwnPropertyDescriptor(Object.getPrototypeOf(b), g) || {},
								l = e.l.Object.getOwnPropertyDescriptor(b, g) || {},
								m = z({}, k, l);
							if (Fa("((set)?(\\s?" + g + ")?)?", m.set)) {
								try {
									e.l.Object.defineProperty(b, g, z({}, m, {
										configurable: !0,
										set: function(p) {
											e.vc(p, this);
											return m.set.call(this, p)
										}
									}))
								} catch (p) {}
								h.yi = m
							}
						});
						return h
					};
					c.prototype.Kg = function() {
						var b = !0,
							d = xb(this.l)("input");
						try {
							d = xb(this.l)("input");
							d.value = "INPUT_VALUE";
							d.style.setProperty("display", "none", "important");
							d.setAttribute("type", "text");
							d.setAttribute("class", "__ym_input_override_test");
							var e = this.l.Object.getOwnPropertyDescriptor(Object.getPrototypeOf(d), "value") || {},
								f = this.l.Object.getOwnPropertyDescriptor(d, "value") || {},
								g = z({}, e, f);
							this.l.Object.defineProperty(d,
								"value", z({}, g, {
									configurable: !0,
									set: function(h) {
										return g.set.call(d, h)
									}
								}));
							"INPUT_VALUE" !== d.value && (b = !1);
							d.value = "INPUT_TEST";
							"INPUT_TEST" !== d.value && (b = !1)
						} catch (h) {
							b = !1
						}
						return b
					};
					return c
				}(bb),
				St = function(a) {
					function c(b, d, e) {
						b = a.call(this, b, d, e) || this;
						b.Wa = {
							width: 0,
							height: 0,
							pageHeight: 0,
							pageWidth: 0,
							orientation: 0
						};
						b.ia.push([
							["resize"], b.wi
						]);
						b.ia.push([
							["orientationchange"], b.ui
						]);
						return b
					}
					Ma(c, a);
					c.prototype.start = function() {
						a.prototype.start.call(this);
						this.Rf()
					};
					c.prototype.wi = function() {
						var b =
							this.Ed();
						this.Mh(b) && (this.Wa = b, this.Sf(b))
					};
					c.prototype.ui = function() {
						var b = this.Ed();
						this.Wa.orientation !== b.orientation && (this.Wa = b, this.Ji(b))
					};
					c.prototype.uf = function(b) {
						return !b.height || !b.width || !b.pageWidth || !b.pageHeight
					};
					c.prototype.Mh = function(b) {
						return b.height !== this.Wa.height || b.width !== this.Wa.width
					};
					c.prototype.Ed = function() {
						var b = this.G.gb(),
							d = Kc(this.l),
							e = d[0];
						d = d[1];
						b = b.Dd();
						return {
							width: e,
							height: d,
							pageWidth: b ? b.scrollWidth : 0,
							pageHeight: b ? b.scrollHeight : 0,
							orientation: this.G.gb().zh()
						}
					};
					c.prototype.Ji = function(b) {
						var d;
						void 0 === d && (d = this.G.stamp());
						this.G.T("event", {
							width: b.width,
							height: b.height,
							orientation: b.orientation
						}, "deviceRotation", d)
					};
					c.prototype.Sf = function(b, d) {
						void 0 === d && (d = this.G.stamp());
						this.G.T("event", {
							width: b.width,
							height: b.height,
							pageWidth: b.pageWidth,
							pageHeight: b.pageHeight
						}, "resize", d)
					};
					c.prototype.Rf = function() {
						var b = this.Ed();
						this.uf(b) ? S(this.l, G(this.Rf, this), 300) : (this.uf(this.Wa) && (this.Wa = b), this.Sf(b, 0))
					};
					return c
				}(bb),
				Xe = function() {
					function a(c) {
						this.index =
							0;
						this.vb = {};
						this.l = c
					}
					a.prototype.ec = function(c, b, d) {
						void 0 === d && (d = {});
						var e = ia(this.l),
							f = this.index;
						this.index += 1;
						this.vb[f] = {
							Na: 0,
							Qb: !1,
							fn: c,
							bd: [],
							Td: e(ca)
						};
						var g = this;
						return function() {
							var h = Na(arguments),
								k = d.Ye && !g.vb[f].Qb,
								l = g.vb[f];
							ja(g.l, l.Na);
							l.bd = h;
							l.Qb = !0;
							var m = e(ca);
							if (k || m - l.Td >= b) c.apply(void 0, h), l.Td = m;
							l.Na = S(g.l, function() {
								k || (c.apply(void 0, h), l.Td = e(ca));
								l.Qb = !1;
								l.bd = []
							}, b, "th")
						}
					};
					a.prototype.flush = function() {
						var c = this;
						y(function(b) {
							var d = c.vb[b],
								e = d.Na,
								f = d.fn,
								g = d.bd;
							d.Qb && (c.vb[b].Qb = !1, f.apply(void 0, g), ja(c.l, e))
						}, ea(this.vb))
					};
					return a
				}(),
				Tt = function(a) {
					function c(b, d, e) {
						d = a.call(this, b, d, e) || this;
						d.eg = [];
						d.Je = {
							x: 0,
							y: 0
						};
						d.Aa = new Xe(b);
						d.Ic = d.L.H(d.Ic, "o");
						d.ia.push([
							["scroll"], d.xi
						]);
						return d
					}
					Ma(c, a);
					c.prototype.start = function() {
						a.prototype.start.call(this);
						this.G.T("event", {
							x: Math.max(this.l.scrollX, 0),
							y: Math.max(this.l.scrollY, 0),
							page: !0,
							target: -1
						}, "scroll", 0)
					};
					c.prototype.stop = function() {
						a.prototype.stop.call(this);
						this.Aa.flush()
					};
					c.prototype.xi = function(b) {
						if (this.G.gb().pf()) this.Ic(b);
						else {
							var d = b.target,
								e = ha(function(f) {
									return f[0] === d
								}, this.eg).pop();
							e ? e = e[1] : (e = this.Aa.ec(G(this.Ic, this), 100, {
								Ye: !0
							}), this.eg.push([d, e]));
							e(b)
						}
					};
					c.prototype.Ic = function(b) {
						var d = this.G.gb().Dd();
						b = b.target;
						var e = this.Ib(b);
						d = d === b || this.l === b || this.l.document === b;
						var f = Math.max(e.left, 0);
						e = Math.max(e.top, 0);
						if (d) {
							if (this.Je.x === f && this.Je.y === e) return;
							this.Je = {
								x: f,
								y: e
							}
						}
						this.G.T("event", {
							x: f,
							y: e,
							page: d,
							target: d ? -1 : this.Z(b)
						}, "scroll")
					};
					c.prototype.Ib = function(b) {
						var d = {
							left: 0,
							top: 0
						};
						if (!b) return d;
						if (b.window === b) return {
							top: b.scrollY || 0,
							left: b.scrollX || 0
						};
						var e = b.ownerDocument || b,
							f = b.documentElement,
							g = e.defaultView || e.parentWindow,
							h = e.body;
						return b !== e || (b = this.G.gb().Dd(), b) ? J(b, [f, h]) ? {
							top: b.scrollTop || g.scrollY,
							left: b.scrollLeft || g.scrollX
						} : {
							top: b.scrollTop || 0,
							left: b.scrollLeft || 0
						} : d
					};
					return c
				}(bb),
				Ut = ["mousemove", "mousedown", "mouseup", "click"],
				Vt = function(a) {
					function c(b, d, e) {
						d = a.call(this, b, d, e) || this;
						d.ia.push([Ut, d.ti]);
						d.Aa = new Xe(b);
						d.Dc = d.L.H(d.Dc, "n");
						d.Si = d.L.H(d.Aa.ec(G(d.Dc, d),
							100), "t");
						return d
					}
					Ma(c, a);
					c.prototype.stop = function() {
						a.prototype.stop.call(this);
						this.Aa.flush()
					};
					c.prototype.ti = function(b) {
						var d = null;
						try {
							d = b.type
						} catch (e) {
							return
						}
						"mousemove" === d ? this.Si(b) : this.Dc(b)
					};
					c.prototype.Dc = function(b) {
						var d = b.type,
							e = b.clientX;
						e = void 0 === e ? null : e;
						var f = b.clientY;
						f = void 0 === f ? null : f;
						b = b.target || this.l.document.elementFromPoint(e, f);
						this.G.T("event", {
							x: e || 0,
							y: f || 0,
							target: this.Z(b)
						}, d)
					};
					return c
				}(bb),
				Wt = ["focus", "blur"],
				Xt = function(a) {
					function c(b, d, e) {
						b = a.call(this, b,
							d, e) || this;
						b.ia.push([Wt, b.kh]);
						return b
					}
					Ma(c, a);
					c.prototype.kh = function(b) {
						var d = b.target;
						b = b.type;
						this.G.T("event", {
							target: this.Z(d === this.l ? this.l.document.documentElement : d)
						}, b)
					};
					return c
				}(bb),
				Yt = v(function(a) {
					var c = la(a.getSelection, "getSelection");
					return c ? G(c, a) : F
				}),
				Zt = w(Yt, xa),
				$t = ["mousemove", "touchmove", "mousedown", "touchdown", "select"],
				au = /text|search|password|tel|url/,
				bu = function(a) {
					function c(b, d, e) {
						b = a.call(this, b, d, e) || this;
						b.Kd = !1;
						b.ia.push([$t, b.Kh]);
						return b
					}
					Ma(c, a);
					c.prototype.Kh =
						function(b) {
							var d = this.G,
								e = b.type,
								f = b.which;
							b = b.target;
							if ("mousemove" !== e || 1 === f)(e = "select" === e ? this.Dh(b) : this.Bh()) && e.start !== e.end ? (this.Kd = !0, d.T("event", e, "selection")) : this.Kd && (this.Kd = !1, d.T("event", {
								start: 0,
								end: 0
							}, "selection"))
						};
					c.prototype.Bh = function() {
						var b = Zt(this.l);
						if (b && 0 < b.rangeCount) {
							b = b.getRangeAt(0) || this.l.document.createRange();
							var d = this.Z(b.startContainer),
								e = this.Z(b.endContainer);
							if (!X(d) && !X(e)) return {
								start: b.startOffset,
								end: b.endOffset,
								startNode: d,
								endNode: e
							}
						}
					};
					c.prototype.Dh =
						function(b) {
							if (au.test(b.type || "")) {
								var d = this.Z(b);
								if (!X(d)) return {
									start: b.selectionStart,
									end: b.selectionEnd,
									target: d
								}
							}
						};
					return c
				}(bb),
				vl = {
					focus: "windowfocus",
					blur: "windowblur",
					Hj: "windowfocus",
					Gj: "windowblur"
				},
				cu = function(a) {
					function c(b, d, e) {
						b = a.call(this, b, d, e) || this;
						b.visibility = null;
						X(b.l.document.hidden) ? X(b.l.document.msHidden) ? X(b.l.document.webkitHidden) || (b.visibility = {
							hidden: "webkitHidden",
							event: "webkitvisibilitychange"
						}) : b.visibility = {
							hidden: "msHidden",
							event: "msvisibilitychange"
						} : b.visibility = {
							hidden: "hidden",
							event: "visibilitychange"
						};
						b.Gd = b.L.H(b.Gd, "fbe");
						b.Id = b.L.H(b.Id, "she");
						return b
					}
					Ma(c, a);
					c.prototype.start = function() {
						this.pb = [this.Qa.F(this.l, this.visibility ? [this.visibility.event] : ["focus", "blur"], G(this.Gd, this))];
						"onpagehide" in this.l && this.pb.push(this.Qa.F(this.l, ["pageshow", "pagehide"], G(this.Id, this), null))
					};
					c.prototype.Id = function(b) {
						this.G.T("event", {}, vl[b.type])
					};
					c.prototype.Gd = function(b) {
						this.G.T("event", {}, vl[this.visibility ? this.l.document[this.visibility.hidden] ?
							"blur" : "focus" : b.type])
					};
					return c
				}(bb),
				du = ["touchmove", "touchstart", "touchend", "touchcancel", "touchforcechange"],
				eu = function(a) {
					function c(b, d, e) {
						d = a.call(this, b, d, e) || this;
						d.Vc = {};
						d.scrolling = !1;
						d.Pf = 0;
						d.ia.push([
							["scroll"], d.Ii, d.l.document
						]);
						d.ia.push([du, d.Ui, d.l.document]);
						d.Aa = new Xe(b);
						d.Lb = d.L.H(d.Lb, "nh");
						d.Ti = d.L.H(d.Aa.ec(d.Lb, d.G.gb().pf() ? 0 : 50, {
							Ye: !0
						}), "th");
						return d
					}
					Ma(c, a);
					c.prototype.Ii = function() {
						var b = this;
						this.scrolling = !0;
						ja(this.l, this.Pf);
						this.Pf = S(this.l, function() {
							b.scrolling = !1
						}, 150)
					};
					c.prototype.Ui = function(b) {
						var d = this,
							e = "touchcancel" === b.type || "touchend" === b.type;
						b.changedTouches && 0 < b.changedTouches.length && y(function(f) {
							var g = d.Fh(f);
							f.__ym_touch_id = g;
							e && delete d.Vc[f.identifier]
						}, Ga(b.changedTouches));
						"touchmove" === b.type ? this.scrolling ? this.Lb(b) : this.Ti(b, this.G.stamp()) : this.Lb(b)
					};
					c.prototype.Fh = function(b) {
						this.Vc[b.identifier] || (this.Vc[b.identifier] = Sh());
						return this.Vc[b.identifier]
					};
					c.prototype.Lb = function(b, d) {
						void 0 === d && (d = this.G.stamp());
						var e = b.type,
							f = A(function(g) {
								return {
									id: g.__ym_touch_id,
									x: Math.round(g.clientX),
									y: Math.round(g.clientY),
									force: g.force
								}
							}, Ga(b.changedTouches));
						0 < f.length && this.G.T("event", {
							touches: f,
							target: this.Z(b.target)
						}, e, d)
					};
					return c
				}(bb),
				fu = function(a) {
					function c(b, d, e) {
						b = a.call(this, b, d, e) || this;
						b.ia.push([
							["load"], b.ri, b.l.document
						]);
						return b
					}
					Ma(c, a);
					c.prototype.ri = function(b) {
						b = b.target;
						"IMG" === La(b) && b.getAttribute("srcset") && this.G.T("mutation", {
							target: this.Z(b),
							attributes: {
								src: b.currentSrc
							}
						}, "ac")
					};
					return c
				}(bb),
				gu =
				function(a) {
					function c(b, d, e) {
						d = a.call(this, b, d, e) || this;
						d.og = 1;
						d.Aa = new Xe(b);
						d.Zb = d.L.H(d.Zb, "z");
						return d
					}
					Ma(c, a);
					c.prototype.start = function() {
						if (this.lf()) {
							a.prototype.start.call(this);
							this.Zb();
							var b = this.Qa.F(n(this.l, "visualViewport"), ["resize"], this.Aa.ec(this.Zb, 10));
							this.pb.push(b)
						}
					};
					c.prototype.stop = function() {
						a.prototype.stop.call(this);
						this.Aa.flush()
					};
					c.prototype.Zb = function() {
						var b = this.lf();
						b && b !== this.og && (this.og = b, this.Ki(b))
					};
					c.prototype.lf = function() {
						var b = Ud(this.l);
						return b ?
							b[2] : null
					};
					c.prototype.Ki = function(b) {
						var d = Lf(this.l);
						this.G.T("event", {
							x: d.x,
							y: d.y,
							level: b
						}, "zoom")
					};
					return c
				}(bb),
				Rd, Ye = {
					91: "super",
					93: "super",
					224: "super",
					18: "alt",
					17: "ctrl",
					16: "shift",
					9: "tab",
					8: "backspace",
					46: "delete"
				},
				wl = {
					"super": 1,
					sj: 2,
					alt: 3,
					shift: 4,
					Oj: 5,
					"delete": 6,
					qj: 6
				},
				hu = [4, 9, 8, 32, 37, 38, 39, 40, 46],
				xl = (Rd = {}, Rd["1"] = {
					91: "&#8984;",
					93: "&#8984;",
					224: "&#8984;",
					18: "&#8997;",
					17: "&#8963;",
					16: "&#8679;",
					9: "&#8677;",
					8: "&#9003;",
					46: "&#9003;"
				}, Rd["2"] = {
					91: "&#xff;",
					93: "&#xff;",
					224: "&#xff;",
					18: "Alt",
					17: "Ctrl",
					16: "Shift",
					9: "Tab",
					8: "Backspace",
					46: "Delete"
				}, Rd.hi = {
					32: "SPACEBAR",
					37: "&larr;",
					38: "&uarr;",
					39: "&rarr;",
					40: "&darr;",
					13: "Enter"
				}, Rd),
				iu = /flash/,
				ju = /ym-disable-keys/,
				ku = /^&#/,
				lu = function(a) {
					function c(b, d, e) {
						d = a.call(this, b, d, e) || this;
						d.jb = {};
						d.La = 0;
						d.Da = [];
						d.cg = [];
						d.jc = 0;
						d.If = 0;
						d.ia.push([
							["keydown"], d.Hh
						]);
						d.ia.push([
							["keyup"], d.Ih
						]);
						d.zg = -1 !== ic(n(b, "navigator.appVersion") || "", "Mac") ? "1" : "2";
						d.Bc = d.L.H(d.Bc, "v");
						d.rd = d.L.H(d.rd, "ec");
						d.Qc = d.L.H(d.Qc, "sk");
						d.Bd = d.L.H(d.Bd, "gk");
						d.ve = d.L.H(d.ve, "sc");
						d.Yb = d.L.H(d.Yb, "cc");
						d.reset = d.L.H(d.reset, "r");
						d.Nc = d.L.H(d.Nc, "rs");
						return d
					}
					Ma(c, a);
					c.prototype.Hh = function(b) {
						if (this.Bc(b) && !this.Wh(b)) {
							var d = b.keyCode;
							b.repeat || this.jb[d] || (this.jb[b.keyCode] = !0, Ye[b.keyCode] && !this.La ? (this.La += 1, this.ve(b), this.reset(300)) : this.La ? (this.Hg(), this.ne(b), this.rd()) : (this.reset(), this.ne(b)))
						}
					};
					c.prototype.Ih = function(b) {
						if (this.Bc(b)) {
							var d = b.keyCode,
								e = Ye[b.keyCode];
							this.jb[b.keyCode] && (this.jb[d] = !1);
							e && this.La && (this.La = 0, this.jb = {});
							1 === this.Da.length &&
								(b = this.Da[0], J(b.keyCode, hu) && (this.Qc([b], !0), this.reset()));
							this.Da = ha(w(U("keyCode"), za(d), Ec), this.Da);
							ja(this.l, this.jc)
						}
					};
					c.prototype.Bc = function(b) {
						var d = this.l.document.activeElement;
						d = d && "OBJECT" === d.nodeName && iu.test(d.getAttribute("type") || "");
						b = b.target;
						if (!b) return !d;
						b = "INPUT" === b.nodeName && "password" === b.getAttribute("type") && ju.test(b.className);
						return !d && !b
					};
					c.prototype.rd = function() {
						this.cg = this.Da.slice(0);
						ja(this.l, this.jc);
						this.jc = S(this.l, u(this.cg, G(this.Qc, this)), 0, "e.c")
					};
					c.prototype.Qc = function(b, d) {
						void 0 === d && (d = !1);
						if (1 < b.length || d) {
							var e = this.Bd(b);
							this.G.T("event", {
								keystrokes: e
							}, "keystroke")
						}
					};
					c.prototype.Bd = function(b) {
						var d = this;
						b = A(function(e) {
							e = e.keyCode;
							var f = Ye[e],
								g = d.yh(e);
							return {
								id: e,
								key: g,
								isMeta: !!f && ku.test(g),
								modifier: f
							}
						}, b);
						return le(function(e, f) {
							return (wl[e.modifier] || 100) - (wl[f.modifier] || 100)
						}, b)
					};
					c.prototype.yh = function(b) {
						return xl[this.zg][b] || xl.hi[b] || String.fromCharCode(b)
					};
					c.prototype.ne = function(b) {
						J(b, this.Da) || this.Da.push(b)
					};
					c.prototype.ve =
						function(b) {
							this.ne(b);
							this.Yb()
						};
					c.prototype.Yb = function() {
						this.La ? S(this.l, this.Yb, 100) : this.Da = []
					};
					c.prototype.Hg = function() {
						ja(this.l, this.If)
					};
					c.prototype.reset = function(b) {
						b ? this.If = S(this.l, G(this.Nc, this), b) : this.Nc()
					};
					c.prototype.Nc = function() {
						this.La = 0;
						this.Da = [];
						this.jb = {};
						ja(this.l, this.jc)
					};
					c.prototype.Wh = function(b) {
						return b.target && "INPUT" === b.target.nodeName ? b.shiftKey || 32 === b.keyCode || "shift" === Ye[b.keyCode] : !1
					};
					return c
				}(bb),
				Cn = ["sr", "sd", "\u043d"],
				mu = /allow-same-origin/,
				nu = function(a) {
					function c(b,
						d, e) {
						d = a.call(this, b, d, e) || this;
						d.Tb = [];
						d.xd = {};
						d.ae = d.L.H(d.ae, "fi");
						d.ce = d.L.H(d.ce, "sd");
						d.de = d.L.H(d.de, "src");
						d.ya = new b.MutationObserver(d.de);
						return d
					}
					Ma(c, a);
					c.prototype.start = function() {
						a.prototype.start.call(this);
						this.G.Hb().$b && this.G.ra().F("iframe", "NA:", G(this.ae, this));
						this.G.gf().zd().F(["sdr"], G(this.ce, this))
					};
					c.prototype.stop = function() {
						a.prototype.stop.call(this);
						y(function(b) {
							b.G.stop()
						}, this.Tb)
					};
					c.prototype.de = function(b) {
						var d = b.pop().target;
						if (b = hb(function(f) {
								return f.nf ===
									d
							}, this.Tb)) {
							this.Tb = ha(function(f) {
								return f.nf !== d
							}, this.Tb);
							var e = b.G.Ad();
							try {
								b.G.stop()
							} catch (f) {}
							this.dc(d, e)
						}
					};
					c.prototype.ae = function(b) {
						if (b) {
							var d = b.data.node;
							this.ya.observe(d, {
								attributes: !0,
								attributeFilter: ["src"]
							});
							this.dc(d, b.data.id)
						}
					};
					c.prototype.dc = function(b, d) {
						var e = this;
						this.Uh(b) && sc(this.l, b)(Ya(F, function() {
							var f = e.G.dc(b.contentWindow, d);
							e.Tb.push({
								G: f,
								nf: b
							})
						}))
					};
					c.prototype.ce = function(b) {
						var d = this,
							e = b.frameId;
						b = b.data;
						this.xd[e] || (this.xd[e] = {
							data: []
						});
						var f = this.xd[e];
						f.data =
							f.data.concat(b);
						this.l.isNaN(f.od) && y(function(g) {
							"page" === g.type && (f.od = g.data.recordStamp - d.G.hf())
						}, f.data);
						this.l.isNaN(f.od) || (this.G.da(A(function(g) {
							g.stamp += f.od;
							g.stamp = d.l.Math.max(0, g.stamp);
							return g
						}, f.data)), f.data = [])
					};
					c.prototype.Uh = function(b) {
						var d = b.getAttribute("src"),
							e = b.getAttribute("sandbox");
						return b.getAttribute("_ym_ignore") || e && !e.match(mu) || d && "about:blank" !== d && (d = wc(this.l, d).host) && T(this.l).host !== d ? !1 : n(b, "contentWindow.location.href")
					};
					return c
				}(bb),
				ou = v(function(a) {
					var c =
						n(a, "sessionStorage");
					if (!c) return null;
					try {
						var b = c.getItem("__ym_tab_guid");
						c = !1;
						var d = n(a, "opener.sessionStorage");
						try {
							c = !!d && b === d.getItem("__ym_tab_guid")
						} catch (e) {
							c = !0
						}
						if (!b || c) b = Sh(), a.sessionStorage.setItem("__ym_tab_guid", b);
						return b
					} catch (e) {
						return null
					}
				}),
				pu = function(a) {
					function c(b, d, e) {
						b = a.call(this, b, d, e) || this;
						b.pe = b.L.H(b.pe, "ps");
						return b
					}
					Ma(c, a);
					c.prototype.start = function() {
						this.G.ra().wc({
							nodes: [this.l.document.documentElement],
							Rc: this.pe
						})
					};
					c.prototype.pe = function(b) {
						var d = this.G.Ah(),
							e = d.qh(),
							f = T(this.l),
							g = f.host,
							h = f.protocol;
						f = f.pathname;
						var k = Kc(this.l),
							l = k[0];
						k = k[1];
						this.G.T("page", {
							content: A(function(m) {
								m.node = void 0;
								return m
							}, b),
							base: e || "",
							hasBase: !!e,
							viewport: {
								width: l,
								height: k
							},
							title: this.l.document.title,
							doctype: d.sh() || "",
							address: this.l.location.href,
							ua: this.l.navigator.userAgent,
							referrer: this.l.document.referrer,
							screen: {
								width: this.l.screen.width,
								height: this.l.screen.height
							},
							location: {
								host: g,
								protocol: h,
								path: f
							},
							recordStamp: this.G.hf(),
							tabId: ou(this.l)
						}, "page", 0)
					};
					return c
				}(bb),
				qu = ["addRule", "removeRule", "insertRule", "deleteRule"],
				Xg = [
					[function(a) {
						function c(b, d, e) {
							b = a.call(this, b, d, e) || this;
							b.$a = {};
							b.Ub = {};
							b.Ne = 0;
							b.Gc = b.L.H(b.Gc, "a");
							b.ub = b.L.H(b.ub, "sr");
							b.Hc = b.L.H(b.Hc, "r");
							b.da = b.L.H(b.da, "d");
							return b
						}
						Ma(c, a);
						c.prototype.start = function() {
							var b = this.G.ra();
							b.F("style", "NA:", this.Gc);
							b.F("style", "NR:", this.Hc);
							this.da()
						};
						c.prototype.stop = function() {
							var b = this;
							a.prototype.stop.call(this);
							var d = this.G.ra();
							d.ga("style", "NA:", this.Gc);
							d.ga("style", "NR:", this.Hc);
							this.da();
							ja(this.l, this.Ne);
							y(function(e) {
								b.$a[e].sheet && b.Lf(b.$a[e].sheet)
							}, ea(this.$a));
							this.$a = {}
						};
						c.prototype.da = function() {
							var b = this;
							y(function(d) {
								var e = d[0];
								d = d[1];
								if (d.length) {
									for (var f = [], g = d[0].stamp, h = [], k = 0; k < d.length; k += 1) {
										var l = d[k],
											m = l.stamp;
										delete l.stamp;
										m <= g + 50 ? f.push(l) : (h.push(f), g = m, f = [l])
									}
									f.length && h.push(f);
									h.length && y(function(p) {
										b.G.T("event", {
											target: Da(e),
											changes: p
										}, "stylechange", g)
									}, h);
									delete b.Ub[e]
								}
							}, Ca(this.Ub));
							this.Ne = S(this.l, this.da, 100)
						};
						c.prototype.ub = function(b, d, e, f,
							g) {
							void 0 === f && (f = "");
							void 0 === g && (g = -1);
							this.Ub[b] || (this.Ub[b] = []);
							this.Ub[b].push({
								op: d,
								style: f,
								index: g,
								stamp: e
							})
						};
						c.prototype.zi = function(b, d) {
							var e = this,
								f = b.addRule,
								g = b.removeRule,
								h = b.insertRule,
								k = b.deleteRule;
							R(f) && (b.addRule = function(l, m, p) {
								e.ub(d, "a", e.G.stamp(), l + "{" + m + "}", p);
								return f.call(b, l, m, p)
							});
							R(g) && (b.removeRule = function(l) {
								e.ub(d, "r", e.G.stamp(), "", l);
								return g.call(b, l)
							});
							R(h) && (b.insertRule = function(l, m) {
								e.ub(d, "a", e.G.stamp(), l, m);
								return h.call(b, l, m)
							});
							R(k) && (b.deleteRule = function(l) {
								e.ub(d,
									"r", e.G.stamp(), "", l);
								return k.call(b, l)
							})
						};
						c.prototype.Lf = function(b) {
							var d = this;
							y(function(e) {
								var f = d.l.CSSStyleSheet.prototype[e];
								R(f) && (b[e] = G(f, b))
							}, qu)
						};
						c.prototype.dh = function(b) {
							try {
								return b.cssRules || b.rules
							} catch (d) {
								return null
							}
						};
						c.prototype.Gc = function(b) {
							var d = b.data;
							b = d.id;
							d = d.node;
							if (d.sheet && !d.getAttribute("src") && !d.innerText) {
								var e = d.sheet,
									f = this.dh(e);
								if (f && f.length) {
									for (var g = [], h = 0; h < f.length; h += 1) g.push({
										style: f[h].cssText,
										index: h,
										op: "a"
									});
									this.G.T("event", {
											changes: g,
											target: b
										},
										"stylechange")
								}
								this.zi(e, b);
								this.$a[b] = d
							}
						};
						c.prototype.Hc = function(b) {
							b = b.data.id;
							var d = this.$a[b];
							d && (delete this.$a[b], d.sheet && this.Lf(d.sheet))
						};
						return c
					}(bb), "ss"],
					[Rt, "in"],
					[Ot, "mu"],
					[St, "r"],
					[Tt, "sc"],
					[Vt, "mo"],
					[Xt, "f"],
					[bu, "se"],
					[cu, "wf"],
					[eu, "t"],
					[fu, "src"],
					[gu, "z"],
					[lu, "ks"]
				];
			Xg.push([nu, "if"]);
			Xg.push([pu, "pa"]);
			var ru = v(function(a) {
					var c = a.document;
					return {
						Dd: function() {
							if (c.scrollingElement) return c.scrollingElement;
							var b = 0 === mb(c.compatMode, "CSS1") ? c.documentElement : c.body;
							return n(c,
								"documentElement.scrollHeight") >= n(c, "body.scrollHeight") ? b : null
						},
						zh: function() {
							var b = a.screen;
							if (!b) return 0;
							var d = hb(u(b, n), ["orientation", "mozOrientation", "msOrientation"]);
							return n(b, d + ".angle") || 0
						},
						Dj: u(a, ob),
						pf: u(a, ke),
						Cj: u(a, Bg)
					}
				}),
				su = function() {
					function a(c, b) {
						var d = this;
						this.Kb = 0;
						this.nd = [];
						this.Jb = null;
						this.ta = this.Vb = this.ag = !1;
						this.recordStamp = 0;
						this.stopped = !1;
						this.Ah = function() {
							return d.page
						};
						this.Ad = function() {
							return d.Kb
						};
						this.hf = function() {
							return d.recordStamp
						};
						this.xh = function() {
							return d.Qa
						};
						this.gf = function() {
							return d.Jb
						};
						this.ra = function() {
							return d.Ld
						};
						this.stamp = function() {
							return d.ze ? d.l.Math.max(d.ze(ca) - d.recordStamp, 0) : 0
						};
						this.Hb = function() {
							return d.options
						};
						this.gb = function() {
							return d.Eg
						};
						this.T = function(f, g, h, k) {
							void 0 === k && (k = d.stamp());
							f = d.vh(f, g, h, k);
							d.da(f)
						};
						this.vh = function(f, g, h, k) {
							void 0 === k && (k = d.stamp());
							return {
								type: f,
								data: g,
								stamp: k,
								frameId: d.Kb,
								event: h
							}
						};
						this.da = function(f) {
							f = Z(f) ? f : [f];
							d.ag && !d.Vb ? d.ta ? (f = A(function(g) {
									return g.frameId ? g : z(g, {
										frameId: d.Kb
									})
								}, f), d.gf().Tf(f)) :
								d.Rb(f) : d.nd = d.nd.concat(f)
						};
						this.l = c;
						var e = yf(c, this, "R");
						this.we = e.H(this.we, "s");
						this.da = e.H(this.da, "sd");
						e = I(c);
						e.C("wv2e") && Sd();
						e.D("wv2e", !0);
						this.options = b;
						this.Qa = ka(c);
						this.Ld = new Pt(this.l, b);
						this.Eg = ru(c);
						this.Pe = A(function(f) {
							return new f[0](c, d, f[1])
						}, Xg);
						this.Rh();
						this.page = An(this.l);
						this.we()
					}
					a.prototype.start = function(c) {
						this.ag = !0;
						this.Rb = c;
						this.Qf()
					};
					a.prototype.stop = function() {
						this.stopped || (this.stopped = !0, Wg(this.l) && (y(function(c) {
								return c.stop()
							}, this.Pe), this.Ld.stop(),
							this.Jb && this.Jb.stop(), this.ta || this.T("event", {}, "eof")))
					};
					a.prototype.dc = function(c, b) {
						var d = new a(c, z({}, this.options, {
							frameId: b
						}));
						d.start(F);
						return d
					};
					a.prototype.Rh = function() {
						var c = this;
						this.ta = !!this.options.frameId;
						this.Kb = this.options.frameId || 0;
						this.Vb = !this.ta;
						var b = this.options.ig || [];
						b.push(T(this.l).host);
						this.Jb = Bn(this.l, this, b);
						b = this.Jb.zd();
						ob(this.l) ? this.Vb && b.F(["i"], function(d) {
							c.ta = d.ta;
							c.Vb = !1;
							d.frameId && (c.Kb = d.frameId);
							c.Qf()
						}) : this.Vb = this.ta = !1
					};
					a.prototype.Qf = function() {
						var c =
							Me(this.nd);
						this.da(c)
					};
					a.prototype.we = function() {
						this.ze = Tf(this.l);
						this.recordStamp = this.ze(ca);
						y(function(c) {
							c.start()
						}, this.Pe);
						this.Ld.start()
					};
					return a
				}(),
				tu = function() {
					return function(a, c, b) {
						var d = this;
						this.dd = this.Mb = !1;
						this.Va = [];
						this.yf = [];
						this.Te = [];
						this.send = function(e, f, g) {
							e = d.sender(e, d.Sg);
							f && g && e.then(f, g);
							return e
						};
						this.ye = function(e, f, g) {
							return new L(function(h, k) {
								e.push([f, h, k, g])
							})
						};
						this.Lh = function() {
							d.Va = le(function(g, h) {
								return g[3].partNum - h[3].partNum
							}, d.Va);
							var e = M(function(g,
									h, k) {
									h = h[3];
									return g && k + 1 === h.partNum
								}, !0, d.Va),
								f = !!d.Va[d.Va.length - 1][3].end;
							return e && f
						};
						this.vd = function(e) {
							eh(d.l, e.slice(), function(f) {
								d.send(f[0], f[1], f[2])
							}, 20, "s.w2.sf.fes");
							Me(e)
						};
						this.jh = function() {
							d.dd || (d.dd = !0, d.vd(d.yf), d.vd(d.Te))
						};
						this.Lg = function(e) {
							return M(function(f, g) {
								var h = "page" === g.type && !g.frameId,
									k = "eof" === g.data.type || "eof" === g.event,
									l = h && !!g.partNum;
								return {
									jd: f.jd || l,
									hd: f.hd || h,
									gd: f.gd || k
								}
							}, {
								hd: !1,
								gd: !1,
								jd: !1
							}, e)
						};
						this.Jh = function(e, f, g) {
							g ? (e = d.ye(d.Va, e, f[0]), d.Lh() &&
								(d.vd(d.Va), d.Mb = !0)) : (d.Mb = !0, e = d.send(e));
							return e
						};
						this.jf = function(e, f, g) {
							var h;
							f = {
								J: (h = {}, h["wv-part"] = "" + g, h["wv-type"] = d.Li, h),
								K: Ha(),
								Y: {
									ca: f
								}
							};
							e && f.K.D("bt", 1);
							return f
						};
						this.ah = function(e, f, g) {
							e = d.jf(!1, e, g);
							return d.Mb ? d.send(e) : d.ye(d.Te, e, f)
						};
						this.ii = function(e, f, g) {
							e = d.jf(!0, e, g);
							if (d.Mb) return d.send(e);
							var h = d.Lg(f);
							g = h.hd;
							var k = h.gd;
							h = h.jd;
							var l;
							g && (l = d.Jh(e, f, h));
							d.dd ? g || (l = d.send(e)) : (g || (l = d.ye(d.yf, e, f)), (d.Mb || k) && d.jh());
							return l
						};
						this.l = a;
						this.Li = b;
						this.sender = na(a, "W", c);
						this.Sg =
							c
					}
				}(),
				yl = v(function(a) {
					var c = I(a),
						b = c.C("isEU");
					if (X(b)) {
						var d = Da(pd(a, "is_gdpr") || "");
						if (J(d, [0, 1])) c.D("isEU", d), b = !!d;
						else if (a = Ra(a).C("wasSynced"), a = n(a, "params.eu")) c.D("isEU", a), b = !!a
					}
					return b
				}, function(a) {
					return I(a).C("isEU")
				}),
				tf = B("i.e", yl),
				uu = B("i.ep", function(a) {
					yl(a)
				}),
				vu = B("w2", function(a, c) {
					function b() {
						h = !0
					}
					var d = I(a),
						e = K(c);
					if (!c.yb || be(a) || !a.MutationObserver || !Fa("Element", a.Element)) return F;
					Fa("MutationObserver", a.MutationObserver) || mc(a, e).warn("w2mo");
					var f = Aa(function(k, l) {
							ma(c,
								l)["catch"](k)
						}),
						g = sc(a)(Eg(D([a, c], yn)))(Qk(function(k) {
							return new su(a, k)
						})),
						h = !1;
					Kq([g, f])(Ya(C(a, "wv2.R.c"), function(k) {
						var l = k[0];
						k = k[1];
						if (!h) {
							b = G(l.stop, l);
							var m = d.C("wv2Counter");
							if (!Uh(a, k) || m) b();
							else if (d.D("wv2Counter", e), d.D("stopRecorder", b), k = ei(a, "7", "6")) {
								m = new tu(a, c, k.type);
								var p = ul.df(e, "m", G(m.ii, m), k, a),
									q = ul.df(e, "e", G(m.ah, m), k, a);
								"onpagehide" in a ? ka(a).F(a, ["pagehide"], function(t) {
									t.persisted ? (p.flush(!0), q.flush(!0)) : b()
								}, null) : ka(a).F(a, ["beforeunload", "unload"], b);
								k = zn();
								m = k.ni;
								q.F("ag", k.Cg);
								q.F("p", m);
								p.F("see", function(t) {
									var x = !1;
									y(function(E) {
										"page" === E.type && (x = !0)
									}, t);
									x && (h || q.push({
										type: "event",
										event: "fatalError",
										data: {
											code: "invalid-snapshot",
											bh: "p.s.f",
											stack: ""
										}
									}), b())
								});
								var r = Sb(function(t) {
									"eof" === n(t, "data.type") || "eof" === t.event ? (q.push(t), p.push(t), q.flush(!0), p.flush(!0)) : ("event" === t.type ? q : p).push(t)
								});
								S(a, b, 864E5);
								Pb(a, function() {
									var t, x;
									rb(a, (t = {}, t.counterKey = e, t.name = "webvisor", t.data = (x = {}, x.version = 2, x), t));
									l.start(r)
								})
							}
						}
					}));
					return function() {
						return b()
					}
				}),
				wu = B("w2.cs", function(a, c) {
					var b, d = K(c);
					Pf(a, d, (b = {}, b.webvisor = !!c.yb, b))
				}),
				xu = ["rt", "mf"],
				sf = v(oc, K),
				Oh = w(id, dc),
				yu = sb("isp", function(a, c) {
					ma(c, function(b) {
						var d = hb(function(h) {
							return n(b, "settings." + h)
						}, xu);
						if (d && Kd(a)) {
							var e = gd(b) && !Yd(a),
								f = sf(c);
							z(f, {
								Nb: d,
								status: e ? 3 : 4
							});
							if (!e) {
								e = un(a, c, d);
								var g = function(h) {
									f.status = h
								};
								return ("mf" === d ? wn : vn)(a, c, e).then(u(1, g))["catch"](u(2, g))
							}
						}
					})["catch"](C(a, "l.isp"))
				}),
				zl = B("fbq.o", function(a, c, b) {
					var d = n(a, "fbq");
					if (d && d.callMethod) {
						var e = function() {
							var g =
								Na(arguments),
								h = d.apply(void 0, g);
							c(g);
							return h
						};
						z(e, d);
						b && y(c, b);
						a.fbq = e
					} else var f = S(a, D([a, c].concat(Ga(d && d.queue)), zl), 1E3, "fbq.d");
					return G(ja, null, a, f)
				}),
				Zc, Gb, $c, Yg = (Zc = {}, Zc.add_to_wishlist = "add-to-wishlist", Zc.begin_checkout = "begin-checkout", Zc.generate_lead = "submit-lead", Zc.add_payment_info = "add-payment-info", Zc),
				Zg = (Gb = {}, Gb.AddToCart = "add-to-cart", Gb.Lead = "submit-lead", Gb.InitiateCheckout = "begin-checkout", Gb.Purchase = "purchase", Gb.CompleteRegistration = "register", Gb.Contact = "submit-contact",
					Gb.AddPaymentInfo = "add-payment-info", Gb.AddToWishlist = "add-to-wishlist", Gb.Subscribe = "subscribe", Gb),
				sn = ($c = {}, $c["1"] = Yg, $c["2"] = Yg, $c["3"] = Yg, $c["0"] = Zg, $c),
				tn = [Zg.AddToCart, Zg.Purchase],
				zu = oa(function(a, c) {
					var b = n(c, "ecommerce"),
						d = n(c, "event") || "";
					if (!(b = b && d && {
							version: "3",
							kc: d
						})) a: {
						if (Z(c) || Oa(c))
							if (b = Na(c), d = b[1], "event" === b[0] && d) {
								b = {
									version: "2",
									kc: d
								};
								break a
							}
						b = void 0
					}
					b || (b = (b = n(c, "ecommerce")) && {
						version: "1",
						kc: H(",", ea(b))
					});
					b && a(b)
				}),
				Au = B("ag.e", function(a, c) {
					if ("0" === c.ba) {
						var b = [],
							d = C(a,
								"ag.s", D([xa, b], y));
						ma(c, function(e) {
							if (n(e, "settings.auto_goals") && Ja(a, c) && (e = se(a, c, "autogoal").reachGoal)) {
								e = D([e, c.qd], rn);
								var f = zu(e);
								e = D([a, e], qn);
								b.push(zl(a, e));
								b.push(Ii(a, "dataLayer", function(g) {
									g.ya.F(f)
								}))
							}
						});
						return d
					}
				}),
				Bu = /[^\d.,]/g,
				Cu = /[.,]$/,
				on = B("ep.pp", function(a, c) {
					if (!c) return 0;
					a: {
						var b = c.replace(Bu, "").replace(Cu, "");
						var d = "0" === b[b.length - 1];
						for (var e = b.length; 0 < e && !(3 < b.length - e + 1 && d); --e) {
							var f = b[e - 1];
							if (J(f, [",", "."])) {
								d = f;
								break a
							}
						}
						d = ""
					}
					b = d ? c.split(d) : [c];
					d = d ? b[1] : "00";
					b = parseFloat($d(b[0]) + "." + $d(d));
					d = Math.pow(10, 8) - .01;
					a.isNaN(b) ? b = 0 : (b = a.Math.min(b, d), b = a.Math.max(b, 0));
					return b
				}),
				Du = [
					[
						["EUR", "\u20ac"], "978"
					],
					[
						["USD", "\u0423\\.\u0415\\.", "\\$"], "840"
					],
					[
						["UAH", "\u0413\u0420\u041d", "\u20b4"], "980"
					],
					["\u0422\u0413 KZT \u20b8 \u0422\u04a2\u0413 TENGE \u0422\u0415\u041d\u0413\u0415".split(" "), "398"],
					[
						["GBP", "\u00a3", "UKL"], "826"
					],
					["RUR RUB \u0420 \u0420\u0423\u0411 \u20bd P \u0420UB P\u0423\u0411 P\u0423B PY\u0411 \u0420Y\u0411 \u0420\u0423B P\u0423\u0411".split(" "),
						"643"
					]
				],
				Eu = v(function(a) {
					return new RegExp(H("|", a), "i")
				}),
				Fu = B("ep.cp", function(a) {
					if (!a) return "643";
					var c = gs(a);
					return (a = hb(function(b) {
						return Eu(b[0]).test(c)
					}, Du)) ? a[1] : "643"
				}),
				Gu = v(function() {
					function a() {
						var k = h + "0",
							l = h + "1";
						f[k] ? f[l] ? (h = h.slice(0, -1), --g) : (e[l] = b(8), f[l] = 1) : (e[k] = b(8), f[k] = 1)
					}

					function c() {
						var k = h + "1";
						f[h + "0"] ? f[k] ? (h = h.slice(0, -1), --g) : (h += "1", f[h] = 1) : (h += "0", f[h] = 1)
					}

					function b(k) {
						void 0 === k && (k = 1);
						var l = d.slice(g, g + k);
						g += k;
						return l
					}
					for (var d = H("", Mh("Cy2FcreLJLpYXW3BXFJqldVsGMwDcBw2BGnHL5uj1TKstzse3piMo3Osz+EqDotgqs1TIoZvKtMKDaSRFztgUS8qkqZcaETgKWM54tCpTXjV5vW5OrjBpC0jF4mspUBQGd95fNSfv+vz+g+Hze33Hg8by+Yen1PP6zsdl7PQCwX9mf+f7FMb9x/Pw+v2Pp8Xy74eTwuBwTt913u4On1XW6hxOO5nIzFam00tC218S0kaeugpqST+XliLOlMoTpRQkuewUxoy4CT3efWtdFjSAAm+1BkjIhyeU4vGOf13a6U8wzNY4bGo6DIUemE7N3SBojDr7ezXahpWF022y8mma1NuTnZbq8XZZlPStejfG/CsbPhV6/bSnA==")),
							e = {}, f = {}, g = 1, h = ""; g < d.length - 1;)("0" === b() ? c : a)();
					return e
				}),
				ln = B("ep.dec", function(a, c) {
					if (!c || be(a)) return [];
					var b = Mh(c),
						d = b[1],
						e = b[2],
						f = b.slice(3);
					if (2 !== me(b[0])) return [];
					b = Gu();
					f = H("", f);
					e = me(d + e);
					var g = "";
					d = "";
					for (var h = 0; d.length < e && f[h];) g += f[h], b[g] && (d += String.fromCharCode(me(b[g])), g = ""), h += 1;
					b = "";
					for (f = 0; f < d.length;) e = d.charCodeAt(f), 128 > e ? (b += String.fromCharCode(e), f++) : 191 < e && 224 > e ? (g = d.charCodeAt(f + 1), b += String.fromCharCode((e & 31) << 6 | g & 63), f += 2) : (g = d.charCodeAt(f + 1), b += String.fromCharCode((e &
						15) << 12 | (g & 63) << 6 | d.charCodeAt(f + 2) & 63), f += 3);
					d = Qb(a, b);
					return Z(d) ? A(nr, d) : []
				}),
				nn = B("ep.ent", function(a, c, b) {
					a = "" + Wa(a, 10, 99);
					b = "" + 100 * c + b + a;
					if (16 < Oa(b)) return "";
					b = Nh("0", 16, b);
					c = b.slice(0, 8);
					b = b.slice(-8);
					c = (+c ^ 92844).toString(35);
					b = (+b ^ 92844).toString(35);
					return "" + c + "z" + b
				}),
				Al = w(Lh, Fu),
				Bl = B("ep.ctp", function(a, c, b, d) {
					var e = Al(a, b),
						f = Kh(a, d);
					Jh(a, c, e, f);
					Fa("MutationObserver", a.MutationObserver) && (new a.MutationObserver(function() {
						var g = Al(a, b),
							h = Kh(a, d);
						if (e !== g || f !== h) e = g, f = h, Jh(a, c, e, f)
					})).observe(a.document.body, {
						attributes: !0,
						childList: !0,
						subtree: !0,
						characterData: !0
					})
				}),
				Hu = B("ep.chp", function(a, c, b, d, e) {
					b && rf(a, c);
					return d || e ? ka(a).F(a.document, ["click"], C(a, "ep.chp.cl", D([a, c, d, e], mn))) : F
				}),
				Mu = B("ep.i", function(a, c) {
					if (fd(a)) return kn(a, c).then(function(b) {
						var d = b.Xg,
							e = d[0],
							f = d[1],
							g = d[2],
							h = d[3],
							k = d[4],
							l = d[5],
							m = d[6],
							p = d[7],
							q = d[8],
							r = d[9],
							t = d[10],
							x = d[11],
							E = d[12],
							O = d[13],
							N = d[14],
							ya = d[15];
						if (!b.isEnabled) return L.resolve(F);
						var Ba = de(a, e),
							Yb = de(a, h),
							Pg = de(a, m),
							Iu = de(a, q),
							Ju = "" + e + f + g === "" + h + k + l;
						return new L(function(Ku,
							Lu) {
							sc(a)(Ya(Lu, function() {
								Ba && Bl(a, c, f, g, t, x, E);
								Yb && !Ju && Bl(a, c, k, l, O, N, ya);
								Ku(Hu(a, c, Pg || Iu, p, r))
							}))
						})
					})
				}),
				Ym = ["RTCPeerConnection", "mozRTCPeerConnection", "webkitRTCPeerConnection"],
				Nu = B("cc.i", function(a, c) {
					var b = D([a, c], jn);
					b = D([a, b, 300, void 0], S);
					ma(c, b)
				}),
				Ou = u("9-d5ve+.r%7", P),
				Pu = B("ad", function(a, c) {
					if (!c.Ta) {
						var b = I(a);
						if (!b.C("adBlockEnabled")) {
							var d = function(m) {
									J(m, ["2", "1"]) && b.D("adBlockEnabled", m)
								},
								e = Nc(a),
								f = e.C("isad");
							if (f) d(f);
							else {
								var g = u("adStatus", b.D),
									h = function(m) {
										m = m ? "1" : "2";
										d(m);
										g("complete");
										e.D("isad", m, 1200);
										return m
									},
									k = na(a, "adb", c);
								if (!b.C("adStatus")) {
									g("process");
									var l = "metrika/a" + Ou().replace(/[^a-v]+/g, "") + "t.gif";
									fn(a, function() {
										return k({
											ma: {
												za: l
											}
										}).then(u(!1, h))["catch"](u(!0, h))
									})
								}
							}
						}
					}
				}),
				Qu = B("pr.p", function(a, c) {
					var b, d;
					if (cg(a)) {
						var e = na(a, "5", c),
							f = Ha((b = {}, b.pq = 1, b.ar = 1, b));
						e({
							K: f,
							J: (d = {}, d["page-url"] = T(a).href, d["page-ref"] = n(a, "document.referrer") || "", d)
						}, c)["catch"](C(a, "pr.p.s"))
					}
				}),
				Ih = !1,
				Ru = B("fid", function(a) {
					var c, b = F;
					if (!R(a.PerformanceObserver)) return b;
					var d = I(a);
					if (d.C("fido")) return b;
					d.D("fido", !0);
					var e = new a.PerformanceObserver(C(a, "fid", function(f) {
						f = f.getEntries()[0];
						d.D("fid", a.Math.round(100 * (f.processingStart - f.startTime)));
						b()
					}));
					b = function() {
						return e.disconnect()
					};
					try {
						e.observe((c = {}, c.type = "first-input", c.buffered = !0, c))
					} catch (f) {}
					return b
				}),
				Su = B("lt.p", sb("lt.p", function(a) {
					var c;
					if (Fa("PerformanceObserver", a.PerformanceObserver)) {
						var b = 0,
							d = new a.PerformanceObserver(C(a, "lt.o", function(e) {
								e && e.getEntries && (e = e.getEntries(), b = M(function(f,
									g) {
									return f + g.duration
								}, b, e), Rc(a).D("lt", b))
							}));
						try {
							d.observe((c = {}, c.type = "longtask", c.buffered = !0, c))
						} catch (e) {
							return
						}
						return function() {
							return d.disconnect()
						}
					}
				})),
				Tu = v(w(U("performance.memory.jsHeapSizeLimit"), Ka("concat", ""))),
				Uu = ["availWidth", "availHeight", "availTop"],
				Vu = "appName vendor deviceMemory hardwareConcurrency maxTouchPoints appVersion productSub appCodeName vendorSub".split(" "),
				Wu = ["webgl", "experimental-webgl"],
				dn = [-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0],
				of = u(Pa("ccf"), Ta),
				cn = "prefers-reduced-motion;prefers-reduced-transparency;prefers-color-scheme: dark;prefers-color-scheme: light;pointer: none;pointer: coarse;pointer: fine;any-pointer: none;any-pointer: coarse;any-pointer: fine;scan: interlace;scan: progressive;color-gamut: srgb;color-gamut: p3;color-gamut: rec2020;update: fast;update: slow;update: none;grid: 0;grid: 2;hover: hover;inverted-colors: inverted;inverted-colors: none".split(";"),
				Gh = "video/ogg video/mp4 video/webm audio/x-aiff audio/x-m4a audio/mpeg audio/aac audio/wav audio/ogg audio/mp4".split(" "),
				an = "theora vorbis 1 avc1.4D401E mp4a.40.2 vp8.0 mp4a.40.5".split(" "),
				$g = v(function(a, c) {
					var b = I(a),
						d = Ra(a),
						e = [],
						f = D([a, c, b, d], pp);
					sd(a) || qp(a, "14.1") || e.push(D([Xm, "pp", ""], f));
					var g = !cl(a) || mf(a, 68);
					g && e.push(D([Zm, "pu", ""], f));
					!g || d.Nd || Kd(a) || (e.push(D([Wm, "zzlc", "na"], f)), e.push(D([Vm, "cc", ""], f)));
					return e.length ? {
						Ba: function(h, k) {
							if (0 === b.C("isEU")) try {
								y(re, e)
							} catch (l) {}
							k()
						},
						O: function(h, k) {
							var l = h.K;
							if (l && 0 === b.C("isEU")) try {
								y(Aa(l), e)
							} catch (m) {}
							k()
						}
					} : {}
				}, w(db, K)),
				Xu = w(function(a) {
					return (a = n(a, "navigator.plugins")) && Oa(a) ? w(Ga, Ea, Or(function(c, b) {
						return c.name > b.name ? 1 : 2
					}), Sb(mp))(a) : ""
				}, pe(",")),
				Yu = function(a) {
					return function(c) {
						var b = xb(c);
						if (!b) return "";
						b = b("canvas");
						var d = [],
							e = a(),
							f = e.eh;
						e = e.Ug;
						try {
							var g = Ka("getContext", b);
							d = A(w(P, g), e)
						} catch (h) {
							return ""
						}
						return (g = hb(P, d)) ? f(c, {
							canvas: b,
							Ig: g
						}) : ""
					}
				}(function() {
					return {
						Ug: Wu,
						eh: Rm
					}
				}),
				Pm = ["name", "lang", "localService",
					"voiceURI", "default"
				],
				Zu = B("ice", function(a, c, b) {
					if (c = Ja(a, c))
						if (b = Ah(a, b)) return zh(a, c, b), !0
				}),
				$u = B("ice", function(a, c, b) {
					if (c = Ja(a, c))
						if (b = Ah(a, b)) return Xi(a, b.Th).then(D([a, c, b], zh), C(a, "ice.s")), !0
				}),
				av = ["text", "email", "tel"],
				bv = ["cc-", "name", "shipping"],
				cv = B("icei", function(a, c) {
					if (Yk(a)) {
						var b = !1,
							d = F,
							e = F;
						ma(c, function(f) {
							if (!(tf(a) || n(f, "settings.eu") || b)) {
								f = n(f, "settings.cf") ? $u : Zu;
								var g = D([a, c], f),
									h = function(k) {
										return Cf(a, k) || !J(k.type, av) || Ua(Db, A(u(k.autocomplete, fb), bv)) ? !1 : !0
									};
								d = Dh(a,
									"input", ["blur"], g, h);
								e = Dh(a, "form", ["submit"], function(k) {
									var l = k.target;
									if (l) {
										l = gb("input", l);
										var m = 0;
										y(function(p) {
											20 <= m || !h(p) || g({
												target: p,
												isTrusted: k.isTrusted,
												Qd: !0
											}) && (m += 1)
										}, l)
									}
								})
							}
						});
						return function() {
							b = !0;
							d();
							e()
						}
					}
				}),
				yh, dv = B("p.ai", function(a, c) {
					if (sd(a) || ff(a)) return ma(c, function(b) {
						var d;
						if (b = n(b, "settings.sbp")) return xh(a, z({}, b, (d = {}, d.c = c.id, d)), 10)
					})
				}),
				ev = "architecture bitness model platformVersion uaFullVersion fullVersionList".split(" "),
				Cl = sb("uah", function(a) {
					if (!Fa("getHighEntropyValues",
							n(a, "navigator.userAgentData.getHighEntropyValues"))) return L.reject("0");
					try {
						return a.navigator.userAgentData.getHighEntropyValues(ev).then(function(c) {
							if (!qa(c)) throw "2";
							return c
						}, function() {
							throw "1";
						})
					} catch (c) {
						return L.reject("3")
					}
				}),
				Dl = new RegExp(H("|", "yandex.com/bots;Googlebot;APIs-Google;Mediapartners-Google;AdsBot-Google;FeedFetcher-Google;Google-Read-Aloud;DuplexWeb-Google;Google Favicon;googleweblight;Lighthouse;Mail.RU_Bot;StackRambler;Slurp;msnbot;bingbot;www.baidu.com/search/spi_?der.htm".split(";")).replace(/[./]/g,
					"\\$&")),
				Hm = v(function(a) {
					var c = qb(a);
					return (c = Dl.test(c)) ? L.resolve(c) : Cl(a).then(function(b) {
						try {
							return M(function(d, e) {
								return d || Dl.test(e.brand)
							}, !1, b.brands)
						} catch (d) {
							return !1
						}
					}, u(!1, P))
				}),
				rc = ["0", "1", "2", "3"],
				Lc = rc[0],
				ef = rc[1],
				fv = rc[2],
				El = ["GDPR-ok-view-detailed-0", "GDPR-ok-view-detailed-1", "GDPR-ok-view-detailed-2", "GDPR-ok-view-detailed-3"],
				vh = ["GDPR-ok-view-default", "GDPR-ok-view-detailed"].concat(El),
				df = "GDPR-ok GDPR-cross GDPR-cancel 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 GDPR-settings GDPR-ok-view-default GDPR-ok-view-detailed 21 22 23".split(" ").concat(El).concat(["28",
					"29", "30", "31"
				]),
				gv = "3 13 14 31 15 16 17 28".split(" "),
				Wd = w(Sb(U("ymetrikaEvent.type")), Nr(qc(df))),
				hv = {
					ai: !0,
					url: "https://yastatic.net/s3/gdpr/v3/gdpr",
					Df: "",
					wf: "az be en es et fi fr hy ka kk ky lt lv no pt ro ru sl tg tr uz cs da de el hr it nl pl sk sv".split(" ")
				},
				Km = sb("gdpr", function(a, c, b, d, e) {
					function f(p) {
						c("10");
						b.F(vh, function(q) {
							var r;
							q = q.type;
							l.Wf((r = {}, r.type = q, r));
							p({
								value: wh(q)
							})
						})
					}
					var g = void 0 === e ? hv : e;
					e = g.url;
					var h = g.Df,
						k = g.ai;
					g = Nm(a, g.wf, d.jj);
					var l = Zd(a, d);
					if (!l) return L.resolve({
						value: Lc,
						Pd: !0
					});
					if (a._yaGdprLoaded) return new L(function(p) {
						c("7");
						f(p)
					});
					var m = cd(a, {
						src: "" + e + (k ? "" : g) + h + ".js"
					});
					return new L(function(p, q) {
						m ? (c("7"), m.onerror = function() {
							var r;
							c("9");
							l.Wf((r = {}, r.type = "GDPR-ok-view-default", r));
							p(null)
						}, m.onload = u(p, f)) : (c("9"), q(Pa("gdp.e")))
					})
				}),
				$b, Mm = ($b = {}, $b["GDPR-ok"] = "ok", $b["GDPR-ok-view-default"] = "ok-default", $b["GDPR-ok-view-detailed"] = "ok-detailed", $b["GDPR-ok-view-detailed-0"] = "ok-detailed-all", $b["GDPR-ok-view-detailed-1"] = "ok-detailed-tech", $b["GDPR-ok-view-detailed-2"] =
					"ok-detailed-tech-analytics", $b["GDPR-ok-view-detailed-3"] = "ok-detailed-tech-other", $b),
				Fm = "az be en es et fi fr hy ka kk ky lt lv no pt ro ru sl tg tr uz ar he sr uk zh".split(" "),
				uh = [],
				sh = Ka("push", uh),
				Em = v(function(a, c) {
					var b = c.C("gdpr");
					return J(b, rc) ? "-" + b : ""
				}),
				Fl = v(wd),
				iv = v(function() {
					var a = M(function(c, b) {
						"ru" !== b && (c[b] = kl + "." + b);
						return c
					}, {}, lg);
					y(function(c) {
						a[c] = c
					}, ea(fl));
					return a
				}),
				vm = v(function(a) {
					a = T(a).hostname;
					return (a = hb(w(U("1"), Mr("test"), $a(xa)(a)), Ca(fl))) && a[0]
				}),
				Gl = function(a,
					c) {
					return function(b, d) {
						var e = K(d);
						e = iv(e);
						var f = tm(b, e),
							g = I(b),
							h = ob(b);
						return Kd(b) || Hd(b) ? {} : {
							O: function(k, l) {
								var m = k.K,
									p = qh(b);
								m = !(m && m.C("pv"));
								if (!p || h || m || !f.length) return l();
								if (g.C("startSync")) Fl(b).push(l);
								else {
									g.D("startSync", !0);
									p = D([b, f, F, !1], a);
									m = gf[0];
									if (!m) return l();
									m(b).then(p).then(l, w(Oc(l), C(b, c)))["catch"](F)
								}
							}
						}
					}
				}(function(a, c, b, d) {
					var e = ia(a),
						f = I(a),
						g = Ra(a);
					b = Mg(a, "c");
					var h = Cb(a, b);
					return yb(function(k, l) {
						function m() {
							var r = g.C("synced");
							f.D("startSync", !1);
							r && (r[l.ei] = p, g.D("synced",
								r));
							r = Fl(a);
							y(xa, r);
							Me(r)
						}
						var p, q = h({
							Y: {
								ha: ["sync.cook"],
								Ma: 1500
							}
						}, [ua.Pa + "//" + l.Ri + "/sync_cookie_image_check" + (d ? "_secondary" : "")]).then(function() {
							p = e(nb);
							m()
						})["catch"](function() {
							p = e(nb) - 1435;
							m()
						});
						q = u(q, P);
						return k.then(q)
					}, L.resolve(), c)["catch"](C(a, "ctl"))
				}, "sy.c"),
				Hb, rm = (Hb = {}, Hb.brands = "chu", Hb.architecture = "cha", Hb.bitness = "chb", Hb.uaFullVersion = "chf", Hb.fullVersionList = "chl", Hb.mobile = "chm", Hb.model = "cho", Hb.platform = "chp", Hb.platformVersion = "chv", Hb),
				om = v(function(a) {
					return Cl(a).then(pm,
						sm)
				}),
				jv = sb("ot", function(a, c) {
					if (Ce(a)) {
						var b = ka(a);
						return ma(c, C(a, "ot.s", function(d) {
							if (n(d, "settings.oauth")) {
								var e = [],
									f = id(a, c);
								e.push(b.F(a, ["message"], C(a, "ot.m", u(f, nm))));
								sc(a)(Ya(F, C(a, "ot.b", function() {
									function g(q) {
										var r, t = q.href;
										t && Ve(t, "https://oauth.yandex.ru/") && !fb(t, "_ym_uid=") && (t = fb(t, "?") ? "&" : "?", q.href += "" + t + Cc((r = {}, r._ym_uid = f, r.mc = "v", r)), b.F(q, ["click"], C(a, "ot.click", function() {
											var x = "et=" + l(ca);
											q.href += "&" + x
										})))
									}
									var h, k = a.document.body,
										l = ia(a),
										m = gb("a", k);
									y(g, m);
									if (Fa("MutationObserver",
											a.MutationObserver)) {
										m = new a.MutationObserver(C(a, "ot.m", u(function(q) {
											q = q.addedNodes;
											for (var r = 0; r < q.length; r += 1) {
												var t = q[r];
												"A" === t.nodeName && g(t)
											}
										}, y)));
										var p = (h = {}, h.childList = !0, h.subtree = !0, h);
										m.observe(k, p);
										e.push(G(m.disconnect, m))
									}
								})));
								return D([re, e], y)
							}
						}))
					}
				}),
				kv = B("p.cta", function(a) {
					sc(a)(Ya(F, function() {
						var c = I(a);
						if (lm(a.document)) {
							var b = 0;
							if (Ph(a, ge, "cta")) {
								var d = F,
									e = function() {
										Qh(ge, "cta");
										d();
										ja(a, b)
									};
								d = ka(a).F(a, ["message"], B("p.cta.o", D([a, c, e], mm)));
								b = S(a, e, 1500)
							} else c.D("cta.e",
								"if")
						} else c.D("cta.e", "ns")
					}))
				}),
				ah, em = "bidRequested bidAdjustment bidWon bidResponse bidTimeout auctionInit auctionEnd adRenderSucceeded adRenderFailed".split(" "),
				hm = ["cpm", "currency", "netRevenue", "requestTimestamp", "responseTimestamp"],
				mh = (ah = {}, ah.netRevenue = function(a) {
					return fa(a) ? "net" === a : !!a
				}, ah),
				ac = {},
				lv = B("pj", function(a, c) {
					var b, d = Ja(a, c),
						e = d && d.params;
					return e ? (b = {}, b.pbjs = function(f) {
						Z(f) && (f = ha(Db, A(function(g) {
							if (qa(g) && g.data && g.event && (qa(g.data) || Z(g.data))) {
								var h = n(g, "data.args");
								return h ? {
									event: g.event,
									data: h
								} : g
							}
						}, f)), cm(f), im(a, e))
					}, b) : F
				}),
				ih = $a(Ve)("btn:"),
				$l = $a(Ve)("form:"),
				Yl = v(function() {
					var a = Jf();
					return M(function(c, b) {
						c[a[b]] = b;
						return c
					}, {}, ea(a))
				}),
				Xl = /(\D\d*)/g,
				mv = v(oc),
				bf = {};
			v(function(a, c) {
				return M(function(b, d) {
					b[d] = a[d];
					return b
				}, {}, c)
			});
			var nv = B("p.ips", function(a, c) {
					ma(c, function(b) {
						(n(b, "settings.phchange") || n(b, "settings.phhide")) && fh(a, "tag_phone", K(c), b)
					})
				}),
				ov = B("p.suic", function(a, c) {
					ma(c, function(b) {
						var d = Rc(a);
						if (!d.C("pic") && !gd(b) && (b = n(b, "settings.pic"))) {
							var e =
								na(a, "pic");
							d.D("pic", 1);
							e({
								Y: {
									Yc: !1,
									Oc: !0
								}
							}, [b]).then(function(f) {
								fa(f.rb) && (f = Qb(a, f.rb)) && (f = n(f, "ymaf")) && Ke(a, "_ym_fa", f, 43200)
							})
						}
					})
				}),
				Hl = {},
				Il = v(oc),
				Tl = w(Ka("exec", /counterID=(\d+)/), U("1")),
				Jl = oa(function(a, c) {
					var b, d = Il(a),
						e = Ga(c),
						f = e[0],
						g = e[1],
						h = e.slice(2);
					if (g) {
						e = Sl(a, f);
						var k = e[0],
							l = e[1];
						e = K(l);
						d[e] || (d[e] = {});
						d = d[e];
						c.Ve || Hl[g] && M(function(m, p) {
							return m || !!p(a, l, h, k)
						}, !1, Hl[g]) || ("init" === g ? (c.Ve = !0, k ? Ib(a, "" + f, "dc", (b = {}, b.key = f, b)) : a["yaCounter" + l.id] = new a.Ya[ua.cc](z({}, h[0], l))) :
							k && k[g] && d.Qh ? (k[g].apply(k, h), c.Ve = !0) : (b = d.$f, b || (b = [], d.$f = b), b.push(va([f, g], h))))
					}
				}),
				Ql = B("destruct.e", function(a, c, b) {
					return function() {
						var d = I(a),
							e = c.id;
						y(function(f, g) {
							return R(f) && C(a, "dest.fr." + g, f)()
						}, b);
						Rl(a, K(c));
						delete d.C("counters")[K(c)];
						delete a["yaCounter" + e]
					}
				}),
				ad = I(window);
			ad.Ga("hitParam", {});
			ad.Ga("lastReferrer", window.location.href);
			(function() {
				W.push(function(a, c) {
					var b;
					return b = {}, b.firstPartyParams = Bs(a, c), b.firstPartyParamsHashed = Wp(a, c), b
				});
				Ld.push("fpp");
				Ld.push("fpmh")
			})();
			(function() {
				var a = I(window);
				a.Ga("getCounters", Cs(window));
				bd.push(Ds);
				Dg.push(function(c, b) {
					b.counters = a.C("getCounters")
				})
			})();
			(function() {
				W.push(function(a, c) {
					var b;
					rb(a, (b = {}, b.counterKey = K(c), b.name = "counter", b.data = Tj(c), b))
				})
			})();
			ta["1"] = kb;
			W.push(Es);
			sa["1"] = Xb;
			ub(Of, -1);
			Ub["1"] = [
				[Of, -1],
				[Ie, 1],
				[Be, 2],
				[Mb(), 3],
				[cj, 4]
			];
			W.push(Fs);
			W.push(B("p.ar", function(a, c) {
				var b, d = na(a, "a", c);
				return b = {}, b.hit = function(e, f, g, h, k, l) {
					var m, p, q, r = {
						J: {},
						K: Ha((m = {}, m.pv = 1, m.ar = 1, m))
					};
					f = qa(f) ? {
						title: f.title,
						Hf: f.referer,
						N: f.params,
						Xb: f.callback,
						l: f.ctx
					} : {
						title: f,
						Hf: g,
						N: h,
						Xb: k,
						l: l
					};
					h = yd(c);
					g = e || T(a).href;
					h.url !== g && (h.ref = h.url, h.url = e);
					e = f.Hf || h.ref || a.document.referrer;
					h = lc(a, c, "pv", (p = {}, p.id = c.id, p.url = g, p.ref = e, p), f.N);
					p = z(r.M || {}, {
						N: f.N,
						title: f.title
					});
					r = d(z(r, {
						M: p,
						J: z(r.J || {}, (q = {}, q["page-url"] = g, q["page-ref"] = e, q))
					}), c).then(h);
					return Pc(a, "p.ar.s", r, f.Xb || F, f.l)
				}, b
			}));
			ta.a = kb;
			Ub.a = Vb;
			sa.a = Xb;
			W.push(se);
			ta.g = kb;
			sa.g = Xb;
			Ub.g = Vb;
			W.push(Gs);
			W.push(Hs);
			Ub.t = Vb;
			ta.t = kb;
			sa.t = Xb;
			W.push(B("cl.p", function(a, c) {
				function b(p,
					q, r, t) {
					void 0 === t && (t = {});
					r ? ue(a, c, {
						url: r,
						kb: !0,
						yc: p,
						Cc: q,
						sender: e,
						ng: t
					}) : h.warn("clel")
				}
				var d, e = na(a, "2", c),
					f = [],
					g = K(c),
					h = mc(a, g),
					k = C(a, "s.s.tr", u(ye(a, g), Op));
				g = {
					l: a,
					bb: c,
					fh: f,
					sender: e,
					zj: I(a),
					Rg: Vc(a, c.id),
					Bj: Bc(a),
					Xi: u(u(g, Ue(a)), w(xa, U("trackLinks")))
				};
				g = C(a, "cl.p.c", u(g, Lp));
				g = ka(a).F(a, ["click"], g);
				c.gg && k(c.gg);
				var l = C(a, "file.clc", D([!0, !1], b)),
					m = C(a, "e.l.l.clc", D([!1, !0], b));
				f = C(a, "add.f.e.clc", Is(f));
				return d = {}, d.file = l, d.extLink = m, d.addFileExtension = f, d.trackLinks = k, d.u = g, d
			}));
			Ub["2"] =
				Vb;
			ta["2"] = kb;
			sa["2"] = Xb;
			ta.r = Fd("r");
			sa.r = xs;
			Sa.push(B("p.r", function(a, c) {
				var b = Ks(a),
					d = na(a, "r", c),
					e = C(a, "rts.p");
				return ma(c, D([function(f, g) {
					var h = {
							id: g.Qg,
							ba: g.ba
						},
						k = {
							Y: {
								ca: g.Ai
							},
							K: Ha(g.Fg),
							J: g.N,
							M: {
								Pb: g.Pb
							},
							ma: {
								za: g.za
							}
						};
					g.Ha && (k.Ha = jf(g.Ha));
					h = d(k, h)["catch"](e);
					return f.then(u(h, P))
				}, L.resolve(), b], M))["catch"](e)
			}));
			Y("r", function(a) {
				return {
					O: function(c, b) {
						var d = c.K,
							e = void 0 === d ? Ha() : d,
							f = c.M.Pb,
							g = xd(a);
						d = e.C("rqnl", 0) + 1;
						e.D("rqnl", d);
						if (e = n(g, H(".", [f, "browserInfo"]))) e.rqnl = d, Mf(a);
						b()
					},
					Ba: function(c, b) {
						Ni(a, c);
						b()
					}
				}
			}, 1);
			ub(te, 100);
			Y("1", te, 100);
			W.push(Ls);
			Y("n", Ie, 1);
			Y("n", Be, 2);
			Y("n", Mb(), 3);
			Y("n", te, 100);
			ta.n = kb;
			sa.n = Xb;
			z(wb, {
				Me: {
					ea: "accurateTrackBounce"
				}
			});
			W.push(Ms);
			ta.m = Fd("cm");
			sa.m = Xk;
			Y("m", Mb(["u", "v", "vf"]), 1);
			Y("m", te, 2);
			z(wb, {
				Ng: {
					ea: "clickmap"
				}
			});
			W.push(Ns);
			W.push(Os);
			W.push(Ps);
			W.push(Qs);
			(function() {
				W.push(Rs);
				Ld.push("ecommerce");
				z(wb, {
					qd: {
						ea: "ecommerce",
						ob: function(a) {
							if (a) return !0 === a ? "dataLayer" : "" + a
						}
					}
				})
			})();
			Sa.push(Vs);
			W.push(Ws);
			Ld.push("user_id");
			W.push(Xs);
			ub(function(a, c) {
				return {
					Ba: function(b, d) {
						var e = Ja(a, c);
						e = e && e.userParams;
						var f = (b.M || {}).He;
						e && f && e(f);
						d()
					}
				}
			}, 0);
			Le.push("_ym_debug");
			Md.unshift($s);
			W.push(at);
			(function() {
				var a, c = (a = {}, a.tp = w(db, Uj, Nb), a.tpid = w(db, Zq), a);
				z(Cd, c)
			})();
			ub(vd, 20);
			Y("n", vd, 20);
			Y("1", vd, 20);
			Md.unshift(ct);
			Cd.fp = function(a, c, b) {
				if (b.J && b.J.nohit) return null;
				b = I(a).C;
				if (!b("fpe")) return null;
				c = bt(c);
				if (c.ih) return null;
				b = b("fht", Infinity);
				a: {
					var d = n(a, "performance.getEntriesByType");
					if (R(d)) {
						if (a = ha(w(P, U("name"), za("first-contentful-paint")),
								d.call(a.performance, "paint")), a.length) {
							a = a[0].startTime;
							break a
						}
					} else {
						var e = n(a, "chrome.loadTimes");
						d = Uk(a);
						if (R(e) && (e = e.call(a.chrome), e = n(e, "firstPaintTime"), d && e)) {
							a = 1E3 * e - d;
							break a
						}
						if (a = n(a, "performance.timing.msFirstPaint")) {
							a -= d;
							break a
						}
					}
					a = void 0
				}
				return a && b > a ? (c.ih = a, Math.round(a)) : null
			};
			W.push(function(a, c) {
				var b;
				return b = {}, b.ecommerceAdd = B("ecm.a", et(a, c)), b.ecommerceRemove = B("ecm.r", ft(a, c)), b.ecommerceDetail = B("ecm.d", gt(a, c)), b.ecommercePurchase = B("ecm.p", ht(a, c)), b
			});
			(function() {
				var a,
					c = {};
				c.bu = nt;
				c.pri = cp;
				c.wv = u(2, P);
				c.ds = fp;
				c.co = function(b) {
					return pb(I(b).C("jn"))
				};
				c.td = tt;
				z(c, (a = {}, a.iss = w(Zr, Nb), a.hdl = w($r, Nb), a.iia = w(as, Nb), a.cpf = w(mt, Nb), a.ntf = v(function(b) {
					b = n(b, "Notification.permission");
					b = "denied" === b ? !1 : "granted" === b ? !0 : null;
					return Va(b) ? null : b ? 2 : 1
				}), a.eu = Fb("isEU"), a.ns = Uk, a.np = function(b) {
					return Wa(b, 0, 100) ? null : md(oe(Za(ui(b), 100)))
				}, a));
				c.pani = ot;
				c.pci = pt;
				c.si = qt;
				c.gi = rt;
				c.pic = $a(pd)("_ym_fa");
				z(Cd, c)
			})();
			(function() {
				var a = {};
				a.hc = Fb("hc");
				a.oo = Fb("oo");
				a.pmc = Fb("cmc");
				a.lt = function(c) {
					var b = Rc(c).C("lt", null);
					return b ? c.Math.round(100 * b) : b
				};
				a.re = w(xq, Nb);
				a.aw = function(c) {
					c = hb(w(da, Ec), [c.document.hidden, c.document.msHidden, c.document.webkitHidden]);
					return da(c) ? null : pb(!c)
				};
				a.rcm = wt;
				a.yu = function(c) {
					return (c = dd(c, "").C("yandexuid")) && c.substring(0, 25)
				};
				a.ifc = Fb("ifc");
				a.ifb = Fb("ifb");
				a.ecs = Fb("ecs");
				a.csi = Fb("scip");
				a.cdl = Fb("cdl");
				a.eco = v(bp, w(db, K));
				a.dss = Fb("dSync");
				a.pis = Fb("pis");
				a.ucs = function(c) {
					return (c = dd(c).C("ucs")) && c.substring(0, 25)
				};
				z(Wf, a)
			})();
			sa.er =
				Xc;
			(function(a) {
				try {
					var c = Mg(a, "er"),
						b = Zo(a, c);
					Kj.push(function(d, e, f, g) {
						var h, k, l, m, p;
						.01 >= a.Math.random() || b((h = {}, h[d] = (k = {}, k[ua.ab] = (l = {}, l[e] = (m = {}, m[f] = g ? (p = {}, p[a.location.href] = g, p) : a.location.href, m), l), k), h))
					})
				} catch (d) {}
			})(window);
			af.push(function(a, c) {
				if (n(a, "disableYaCounter" + c.id) || n(a, "Ya.disableMetrica")) {
					var b = K(c);
					delete I(a).C("counters", {})[b];
					Ta(Pa("oo.e"))
				}
			});
			ze.unshift(function(a) {
				return {
					O: function(c, b) {
						I(a).C("oo") || b()
					}
				}
			});
			ub(function(a, c) {
				return {
					O: function(b, d) {
						var e = b.J,
							f = b.K;
						!il[c.id] && f.C("pv") && c.exp && !e.nohit && (e.exp = c.exp, il[c.id] = !0);
						d()
					}
				}
			}, -99);
			W.push(xt);
			Ub.e = Vb;
			ta.e = kb;
			sa.e = Xb;
			z(wb, {
				exp: {
					ea: "experiments"
				}
			});
			Zi.experiments = "ex";
			(function() {
				var a;
				gf.push(yt);
				ta.f = kb;
				z(sa, (a = {}, a.f = Wk, a));
				Y("f", Mb(), 1);
				Y("f", gj, 2);
				Y("f", vd, 20)
			})();
			af.push(function(a, c) {
				var b = {
						qa: K(c),
						ld: Ja(a, c),
						fg: ia(a),
						Wd: Ra(a)
					},
					d = b.fg(nb);
				if (!b.Wd.Nd) {
					var e = b.Wd.C("ymoo" + b.qa);
					if (e && 30 > d - e) b = b.qa, delete I(a).C("counters", {})[b], Ta(Pa("uws"));
					else ma(c, zt(b))["catch"](C(a, "d.f"))
				}
			});
			(function() {
				var a,
					c, b = [Bb];
				z(sa, (a = {}, a.s = b, a.S = b, a.u = Xc, a));
				z(ta, (c = {}, c.s = Cb, c.S = kb, c.u = Cb, c));
				Y("s");
				Y("u");
				Y("S", Mb(["v", "hid", "u", "vf", "rn"]), 1);
				W.push(B("s", Ko))
			})();
			ta["8"] = Cb;
			sa["8"] = [Vf];
			Vk.push([Vf, 0]);
			W.push(B("p.us", function(a, c) {
				return ma(c, function(b) {
					if (n(b, "settings.sbp")) return ri(a, b, {
						bb: c,
						Nb: "8",
						Ud: "cs"
					})
				})
			}));
			Y("p", Mb(Rg), 1);
			Gg("pub", function(a, c) {
				return {
					O: function(b, d) {
						qi(a, c, b);
						d()
					}
				}
			}, 1);
			ta.p = Dt;
			sa.p = Ea([Ab, Bb]);
			Sa.push(Ht);
			z(wb, {
				yb: {
					ea: "webvisor",
					ob: Db
				},
				Wg: {
					ea: "disableFormAnalytics",
					ob: Db
				}
			});
			Y("4", Mb(Rg), 1);
			ta["4"] = ll;
			sa["4"] = Ea([Ab, Bb, Qc]);
			Sa.push(Nt);
			Y("W", Mb(Rg), 1);
			Gg("wv", function(a, c) {
				return {
					O: function(b, d) {
						b.K.Sb("we", Nb(c.yb));
						qi(a, c, b, "rn");
						d()
					}
				}
			}, 1);
			sa.W = Ea([Ab, Bb]);
			ta.W = ll;
			Sa.push(vu);
			W.push(wu);
			z(wb, {
				yb: {
					ea: "webvisor"
				}
			});
			z(wb, {
				Zi: {
					ea: "trustedDomains"
				},
				$b: {
					ea: "childIframe",
					ob: Db
				}
			});
			W.push(yu);
			Y("pi");
			ta.pi = Cb;
			sa.pi = Xc;
			Gg("w", function(a, c) {
					return {
						O: function(b, d) {
							if (b.K) {
								var e = sf(c),
									f = e.status;
								"rt" === e.Nb && f && (b.K.D("rt", f), b.ma || (b.ma = {}), b.ma.Nh = 1 === f ? Oh(a, c) + "." : "")
							}
							d()
						}
					}
				},
				2);
			W.push(Au);
			W.push(Mu);
			sa["6"] = Ea([Ab, Bb]);
			ta["6"] = Cb;
			W.push(Nu);
			W.push(ut);
			(function() {
				Dg.push(function(a, c) {
					c.informer = gn(a)
				})
			})();
			ub(pf, 6);
			Y("1", pf, 6);
			Y("adb");
			Y("n", pf, 4);
			sa.adb = Xc;
			ta.adb = xj;
			bd.push(Pu);
			sa["5"] = Xb;
			ta["5"] = kb;
			Ub["5"] = ha(w(zd, qc([Ie, Be]), Ec), Vb);
			W.push(Qu);
			Y("5", vd, 20);
			ub(Hh, 7);
			Y("n", Hh, 6);
			Sa.push(Ru);
			ta.d = kb;
			Y("d", Mb(["hid", "u", "v", "vf"]), 1);
			sa.d = Xc;
			Y("n", function(a, c) {
				return {
					Ba: function(b, d) {
						if (!b.M || !b.M.force) {
							var e = .002,
								f = c.id === ua.xg ? 1 : .002,
								g, h, k, l, m;
							void 0 === e && (e = 1);
							void 0 ===
								f && (f = 1);
							var p = td(a);
							if (p && R(p.getEntriesByType) && (e = Math.random() > e, f = Math.random() > f, !e || !f)) {
								p = p.getEntriesByType("resource");
								for (var q = {}, r = {}, t = {}, x = hl(), E = T(a).href, O = 0; O < p.length; O += 1) {
									var N = p[O],
										ya = N.name.replace(gl, "").split("?")[0],
										Ba = dc(ya),
										Yb = (g = {}, g.dns = Math.round(N.domainLookupEnd - N.domainLookupStart), g.tcp = Math.round(N.connectEnd - N.connectStart), g.duration = Math.round(N.duration), g.response = Math.round(N.responseEnd - N.requestStart), g);
									"script" !== N.initiatorType || e || (r[ya] = z(Yb, (h = {},
										h.name = N.name, h.decodedBodySize = N.decodedBodySize, h.transferSize = Math.round(N.transferSize), h)));
									!vt[Ba] && !x[Ba] || q[ya] || f || (q[ya] = z(Yb, (k = {}, k.pages = E, k)))
								}
								ea(q).length && (t.timings8 = q);
								ea(r).length && (t.scripts = r);
								if (ea(t).length) na(a, "d", c)({
									K: Ha((l = {}, l.ar = 1, l.pv = 1, l)),
									Y: {
										ca: Kb(a, t) || void 0
									},
									J: (m = {}, m["page-url"] = E, m)
								}, {
									id: ua.Ag,
									ba: "0"
								})["catch"](C(a, "r.tim.ng2"))
							}
						}
						d()
					}
				}
			}, 7);
			sa.ci = [Bb];
			ta.ci = Cb;
			Sa.push(B("p.sci", function(a, c) {
				return ma(c, u(a, en))["catch"](C(a, "ins.cs"))
			}));
			W.push(Su);
			Sa.push(lt);
			ub($g, 8);
			Y("f", $g, 3);
			Y("n", $g, 5);
			bd.push(function(a) {
				return B("fip", function(c) {
					if (!cl(c) || Hd(c)) {
						var b = Ra(c);
						if (!b.C("fip")) {
							var d = w(Sb(w(function(e, f) {
								return B("fip." + f, e)(c)
							}, G(yr, null))), pe("-"))(a);
							b.D("fip", d)
						}
					}
				})
			}([Yu, Xu, function(a) {
				var c = n(a, "ApplePaySession"),
					b = T(a).protocol;
				a = c && "https:" === b && !ob(a) ? c : void 0;
				c = "";
				if (!a) return c;
				try {
					c = "" + a.canMakePayments();
					b = "";
					var d = a.supportsVersion;
					if (R(d))
						for (var e = 1; 20 >= e; e += 1) b += d.call(a, e) ? "" + e : "0";
					return b + c
				} catch (f) {
					return c
				}
			}, function(a) {
				a = n(a,
					"navigator") || {};
				return a.doNotTrack || a.msDoNotTrack || "unknown"
			}, function(a) {
				if (a = kt(a)) try {
					for (var c = [], b = 0; b < dl.length; b += 1) {
						var d = a(dl[b]);
						c.push(d)
					}
					var e = c
				} catch (f) {
					e = []
				} else e = [];
				return e ? H("x", e) : ""
			}, function(a) {
				var c = void 0;
				void 0 === c && (c = Vu);
				var b = n(a, "navigator") || {};
				c = A(u(b, n), c);
				c = H("x", c);
				try {
					var d = n(a, "navigator.getGamepads");
					var e = la(d, "getGamepads") && a.navigator.getGamepads() || []
				} catch (f) {
					e = []
				}
				return c + "x" + Oa(e)
			}, Tu, function(a) {
				a = n(a, "screen") || {};
				return H("x", A(u(a, n), Uu))
			}, function(a) {
				return H("x",
					Om(a) || [])
			}, function(a) {
				a = $m(a);
				return Z(a) ? H("x", a) : a
			}, function(a) {
				return (a = bn(a)) ? H("x", A(D(["", ["matches", "media"]], Qm), Ea(Qr(a)))) : ""
			}]));
			ub(function(a) {
				return {
					O: function(c, b) {
						var d = c.K,
							e = Ra(a).C("fip");
						e && d && (d.D("fip", e), Xd(c, "fip", pb(e)));
						b()
					}
				}
			}, 9);
			Y("h", function(a) {
				return {
					Ba: function(c, b) {
						var d = c.Gi;
						If(c) && d && I(a).D("isEU", n(d, "settings.eu"));
						b()
					}
				}
			}, 3);
			bd.push(uu);
			Sa.push(cv);
			W.push(dv);
			z(wb, {
				ij: {
					ea: "yaDisableGDPR"
				},
				jj: {
					ea: "yaGDPRLang"
				}
			});
			ze.push(function(a, c) {
				return {
					O: D([a, c], Bm)
				}
			});
			Le.push("gdpr");
			Le.push("gdpr_popup");
			kg.push(function(a, c) {
				var b = Vd(a);
				b = Wd(b);
				if (ha(qc(gv), b).length) return !0;
				b = c(a, "gdpr");
				return J(b, [Lc, fv])
			});
			ze.push(function(a) {
				return {
					O: function(c, b) {
						var d = c.ma || {},
							e;
						(e = n(a, "document.referrer")) ? (e = wc(a, e).host, e = Yi(e), e = kl + "." + (e || At)) : e = gc;
						c.ma = z(d, {
							Oh: [e]
						});
						b()
					}
				}
			});
			ub(Gl, 5);
			Y("1", Gl, 6);
			sa.c = Xc;
			ta.c = Cb;
			Y("1", ph, 7);
			ub(ph, 7);
			Md.push(B("hcp", nh));
			Sa.push(B("p.ot", jv));
			Sa.push(sb("cta", kv, !0));
			Y("n", function(a) {
				var c = I(a);
				return {
					O: function(b, d) {
						var e = b.M || {},
							f = c.C("cta"),
							g =
							c.C("cta.e");
						if (f || g) {
							e.N || (e.N = {});
							e.N.__ym || (e.N.__ym = {});
							var h = {};
							f ? (f = A(function(k) {
								var l, m = n(k, "topic");
								k = n(k, "version");
								return l = {}, l.topic = m, l.version = k, l
							}, f), h.ct = f) : g && (h["ct.e"] = g);
							z(e.N.__ym, h);
							b.M = z(b.M || {}, e)
						}
						d()
					}
				}
			}, 7);
			Y("n", Of, 8);
			W.push(lv);
			Y("g", function(a, c) {
				return {
					O: function(b, d) {
						var e = b.J;
						if (e && e["page-url"]) {
							var f = e["page-url"];
							if (Zl(f)) ma(c, function(g) {
								var h, k, l = n(g, "settings.goal_values");
								if (l) {
									var m = (g = wc(a, f).query) ? Qj(g) : void 0;
									if (m) {
										g = b.M || {};
										g.N || (g.N = {});
										g.N.__ym || (g.N.__ym = {});
										var p = ih(f) ? bm : am;
										if (m = hb(u(m, p), l)) {
											l = (h = {}, h.cgd = (k = {}, k.rg = m.id, k), h);
											a: {
												if (h = a.document.body) {
													k = m.price_patterns;
													m = mv(m.id);
													if (m.Cb) {
														if (!oj(a, m.Cb.element)) {
															h = hh(m.Cb);
															break a
														}
														m.Cb = void 0
													}
													var q = null,
														r = null;
													for (p = 0; p < k.length; p += 1) {
														var t = k[p],
															x = t[1];
														"p" === t[0] ? (q = a, q = (x = Wl(x)) ? n(q, "document.evaluate") ? q.document.evaluate(x, q.document, null, q.XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue : null : null, r = "x") : fd(a) && (q = bc(x, h), r = "c");
														if (q && r) {
															m.Cb = {
																element: q,
																ud: r
															};
															h = hh(m.Cb);
															break a
														}
													}
												}
												h =
												void 0
											}
											h && (l.cgd.gp = md(oe(h.Ci)), l.cgd.mg = h.ud);
											z(g.N.__ym, l);
											b.M = z(b.M || {}, g)
										}
									}
								}
								d()
							})["catch"](w(Oc(d), C(a, "a.g.v")));
							else d()
						} else d()
					}
				}
			}, -2);
			Md.push(B("cdl", function(a) {
				var c = I(a).Ga;
				if (a = n(a, "navigator.cookieDeprecationLabel")) try {
					a.getValue().then(u("cdl", c), D(["cdl", "e"], c))
				} catch (b) {
					c("cdl", "d")
				} else c("cdl", "na")
			}));
			Sa.push(nv);
			sa.pis = Xk;
			ta.pis = Cb;
			Sa.push(B("p.sci", function(a, c) {
				return ma(c, function(b) {
					var d = n(b, "settings.pis");
					if (d && !gd(b)) {
						b = I(a);
						var e = b.C;
						b = b.D;
						e = e("pis");
						if (da(e)) return e =
							na(a, "pis"), b("pis", "0"), e({
								Y: {
									ha: ["pis"]
								}
							}, [d]).then(D(["pis", "1"], b), Oc(D(["pis", "a"], b)))
					}
				})["catch"](C(a, "pis"))
			}));
			sa.pic = ws;
			ta.pic = Cb;
			Sa.push(ov);
			W.push(function(a, c) {
				var b = Il(a),
					d = K(c),
					e = b[d];
				e || (e = {}, b[d] = e);
				e.Qh = !0;
				if (b = e.$f) d = Jl(a), y(d, b)
			});
			Sa.unshift(sb("is", function(a, c) {
				ma(c, function(b) {
					(Je(a) || n(b, "settings.sm")) && fh(a, "tag_debug", K(c), b)
				})
			}));
			y($a(xa)(window), Md);
			if (window.Ya && Ze) {
				var Kl = ua.cc;
				window.Ya[Kl] = Ze;
				As(window);
				y(w(Ae([window, window.Ya[Kl]]), xa), Dg)
			}(function(a) {
				var c = n(a,
					"ym");
				if (c) {
					var b = n(c, "a");
					b || (c.a = [], b = c.a);
					var d = Jl(a);
					we(a, b, function(e) {
						e.ya.F(d)
					}, !0)
				}
			})(window)
		})()
	} catch (Ze) {};
}).call(this)
