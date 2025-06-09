(() => {
	var e, t = {
			532: (e, t, n) => {
				"use strict";
				var r = n(400),
					o = n(246),
					i = n(574),
					l = n(380),
					a = n(671),
					u = n(23);
				document.addEventListener("DOMContentLoaded", (function() {
					function e(e, t) {
						var n = document.getElementById(e);
						n && (0, r.render)(t, n)
					}
					var t = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent),
						n = void 0 !== window.hardware,
						s = (0, i.bindJsdos)({
							v8: !n,
							mobile: t
						});
					e("theme-select", (0, r.h)(o.ThemeSelect, {
						onTheme: function(e) {
							return s.then((function(t) {
								return t.onTheme(e)
							}))
						}
					})), e("search", (0, r.h)(l.Search, null)), void 0 !== window.android && void 0 !== window.android.startHardwareService && (window.backendHardware = function(e) {
						return new Promise((function(t) {
							window.backendResolve = t, window.android.startHardwareService(e)
						}))
					}), document.documentElement.setAttribute("data-mobile", t + ""), document.documentElement.setAttribute("data-v7", n + "");
					var c = "function" == typeof window.backendHardware || void 0 !== window.hardware;
					document.documentElement.setAttribute("data-app", c ? "true" : "false"), c || a.installPrompt.mount((function() {
						document.documentElement.setAttribute("data-pwa", "true")
					})), "function" == typeof window.backendHardware && (document.documentElement.setAttribute("data-browser", "true"), document.querySelector(".e-address-text").innerText = location.href, document.querySelector(".e-reload").addEventListener("pointerup", (function() {
						return location.reload()
					})), document.querySelector(".e-copy").addEventListener("pointerup", (function() {
						navigator.clipboard.writeText(location.href).catch(console.error)
					}))), document.querySelectorAll(".iframe-fullscreen").forEach((function(e) {
						e.addEventListener("click", (function() {
							e.parentElement.querySelector("iframe").requestFullscreen()
						}))
					}));
					var _ = document.querySelector(".force-focus");
					if (_ && (_.focus(), document.addEventListener("mouseup", (function(e) {
							var t;
							(null === (t = e.target.classList) || void 0 === t ? void 0 : t.contains("input")) || _.focus()
						}))), (0, u.installRate)(), navigator.language.startsWith("ru")) {
						var f = document.querySelector(".ru-index");
						f && f.classList.remove("hidden")
					}
				}))
			},
			259: (e, t) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.apiEndpoint = t.ThemeValues = void 0, t.ThemeValues = ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"], t.apiEndpoint = "https://d5dn8hh4ivlobv6682ep.apigw.yandexcloud.net"
			},
			106: (e, t) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.useT = void 0;
				var n = {
					ru: {
						theme: "Тема",
						search: "Поиск..."
					},
					en: {
						theme: "Theme",
						search: "Search..."
					}
				};
				t.useT = function() {
					var e = location.href.indexOf("/ru/") > 0 ? n.ru : n.en;
					return function(t) {
						var n;
						return null !== (n = e[t]) && void 0 !== n ? n : t
					}
				}
			},
			911: (e, t, n) => {
				"use strict";
				var r, o, i;
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.idStorage = t.id = void 0;
				var l = n(463);
				t.id = null !== (i = null === (o = JSON.parse(null !== (r = l.lStorage.getItem("cached.jsdos.account")) && void 0 !== r ? r : "{}")) || void 0 === o ? void 0 : o.email) && void 0 !== i ? i : "guest", t.idStorage = new l.LStorage(void 0, t.id + ":")
			},
			671: (e, t, n) => {
				"use strict";

				function r(e) {
					return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					}, r(e)
				}

				function o(e, t) {
					for (var n = 0; n < t.length; n++) {
						var o = t[n];
						o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, (i = o.key, l = void 0, l = function(e, t) {
							if ("object" !== r(e) || null === e) return e;
							var n = e[Symbol.toPrimitive];
							if (void 0 !== n) {
								var o = n.call(e, t || "default");
								if ("object" !== r(o)) return o;
								throw new TypeError("@@toPrimitive must return a primitive value.")
							}
							return ("string" === t ? String : Number)(e)
						}(i, "string"), "symbol" === r(l) ? l : String(l)), o)
					}
					var i, l
				}
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.installPrompt = void 0;
				var i = n(894),
					l = function() {
						function e() {
							! function(e, t) {
								if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
							}(this, e)
						}
						var t, n, r;
						return t = e, (n = [{
							key: "mount",
							value: function(e) {
								window.addEventListener("beforeinstallprompt", (function(t) {
									document.querySelectorAll(".install-pwa").forEach((function(e) {
										e.addEventListener("click", (function() {
											t.prompt(), (0, i.reachGoal)("install_pwa")
										}))
									})), e()
								}))
							}
						}]) && o(t.prototype, n), r && o(t, r), Object.defineProperty(t, "prototype", {
							writable: !1
						}), e
					}();
				t.installPrompt = new l
			},
			23: (e, t, n) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.installRate = void 0;
				var r = n(259),
					o = n(911);
				t.installRate = function() {
					var e = document.querySelector(".like"),
						t = document.querySelector(".dislike");
					if (null !== e && null !== t) {
						var n = function() {
								e.style.display = "none", t.style.display = "none", 2 == e.parentElement.childElementCount && (e.parentElement.style.display = "none");
								var n = document.querySelector(".rate");
								n && (n.style.display = "none")
							},
							i = e.getAttribute("data-url");
						if (i)
							if (i.endsWith("/studio") || i.endsWith("/studio-v8")) n();
							else {
								var l = function() {
										var n = o.idStorage.getItem(u);
										e.classList.remove("text-secondary"), t.classList.remove("text-secondary"), "l" === n ? e.classList.add("text-secondary") : "d" === n && t.classList.add("text-secondary")
									},
									a = new URL(i).pathname,
									u = "rate:" + a;
								e.addEventListener("click", (function() {
									"l" !== o.idStorage.getItem(u) && (o.idStorage.setItem(u, "l"), fetch(r.apiEndpoint + "/rate/set?url=" + decodeURIComponent(a) + "&action=l&client=" + decodeURIComponent(o.id), {
										method: "POST"
									}).catch(console.error), l())
								})), t.addEventListener("click", (function() {
									"d" !== o.idStorage.getItem(u) && (o.idStorage.setItem(u, "d"), fetch(r.apiEndpoint + "/rate/set?url=" + decodeURIComponent(a) + "&action=d&client=" + decodeURIComponent(o.id), {
										method: "POST"
									}).catch(console.error), l())
								})), l(), fetch(r.apiEndpoint + "/rate/get?url=" + decodeURIComponent(a)).then((function(e) {
									return e.json()
								})).then((function(e) {
									e.like + e.dislike > 0 && (document.querySelector(".rate-score").textContent = Math.round(5 * Math.min(1, .2 + e.like / (e.like + e.dislike)) * 10) / 10 + "", document.querySelector(".rate-reviews").textContent = e.like + e.dislike + "")
								})).catch(console.error)
							}
						else n()
					}
				}
			},
			380: function(e, t, n) {
				"use strict";

				function r(e, t) {
					return function(e) {
						if (Array.isArray(e)) return e
					}(e) || function(e, t) {
						var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
						if (null != n) {
							var r, o, i, l, a = [],
								u = !0,
								s = !1;
							try {
								if (i = (n = n.call(e)).next, 0 === t) {
									if (Object(n) !== n) return;
									u = !1
								} else
									for (; !(u = (r = i.call(n)).done) && (a.push(r.value), a.length !== t); u = !0);
							} catch (e) {
								s = !0, o = e
							} finally {
								try {
									if (!u && null != n.return && (l = n.return(), Object(l) !== l)) return
								} finally {
									if (s) throw o
								}
							}
							return a
						}
					}(e, t) || function(e, t) {
						if (!e) return;
						if ("string" == typeof e) return o(e, t);
						var n = Object.prototype.toString.call(e).slice(8, -1);
						"Object" === n && e.constructor && (n = e.constructor.name);
						if ("Map" === n || "Set" === n) return Array.from(e);
						if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(e, t)
					}(e, t) || function() {
						throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}()
				}

				function o(e, t) {
					(null == t || t > e.length) && (t = e.length);
					for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
					return r
				}
				var i = this && this.__importDefault || function(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				};
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.Search = void 0;
				var l = n(400),
					a = n(396),
					u = i(n(360)),
					s = n(106),
					c = n(894),
					_ = n(259),
					f = n(911);
				t.Search = function(e) {
					var t = (0, s.useT)(),
						n = r((0, a.useState)(null), 2),
						o = n[0],
						i = n[1],
						d = r((0, a.useState)(null), 2),
						h = d[0],
						p = d[1],
						v = r((0, a.useState)(0), 2),
						y = v[0],
						m = v[1],
						g = r((0, a.useState)(""), 2),
						b = g[0],
						k = g[1],
						w = r((0, a.useState)(!1), 2),
						S = w[0],
						x = w[1];

					function C(e) {
						var t, n;
						if (null !== h) {
							if (null !== o) {
								var r = e;
								if ("Enter" === r.key) return void E(y);
								var l = y;
								if ("ArrowUp" === r.key && (l--, e.stopPropagation(), e.preventDefault()), "ArrowDown" === r.key && (l++, e.stopPropagation(), e.preventDefault()), l < 0 && (l = o.length - 1), l >= o.length && (l = 0), l !== y) return void m(l)
							}
							var a = (null !== (n = null === (t = e.currentTarget) || void 0 === t ? void 0 : t.value) && void 0 !== n ? n : "").trim();
							a !== b && (0 === a.length ? (k(""), m(0), i(null)) : (k(a), m(0), i(u.default.go(a, h, {
								limit: 5,
								key: "k"
							})), (0, c.reachGoal)("search")))
						}
					}

					function E(e) {
						if (!S && null !== o && e >= 0 && e < (null == o ? void 0 : o.length)) {
							var t = o[e].obj.v;
							fetch(_.apiEndpoint + "/next/set?url=" + decodeURIComponent(location.pathname) + "&next_page=" + decodeURIComponent(t) + "&client=" + decodeURIComponent(f.id), {
								method: "POST"
							}).catch(console.error).finally((function() {})), x(!0), setTimeout((function() {
								location.pathname = t
							}), 100)
						}
					}
					return (0, a.useEffect)((function() {
						fetch("/fuzzy-index.json").then((function(e) {
							if (200 === e.status) return e.json();
							throw new Error("Index not found")
						})).then(p).catch(console.error)
					}), []), (0, l.h)("div", null, (0, l.h)("input", {
						tabIndex: 0,
						type: "text",
						placeholder: t("search"),
						class: "input input-sm w-full",
						onKeyUp: C,
						onChange: C
					}), (0, l.h)("ul", {
						tabIndex: 0,
						class: (null === o ? "hidden " : "") + "dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-full"
					}, null == o ? void 0 : o.map((function(e, t) {
						return (0, l.h)("li", {
							onClick: function() {
								return E(t)
							}
						}, (0, l.h)("a", {
							class: y === t ? "bg-base-300" : ""
						}, e.target))
					}))))
				}
			},
			11: (e, t, n) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.Select = void 0;
				var r = n(400),
					o = n(106);
				t.Select = function(e) {
					var t = (0, o.useT)();
					return (0, r.h)("div", {
						class: e.class + " option flex flex-row items-center "
					}, (0, r.h)("div", {
						class: "mr-4"
					}, e.label), (0, r.h)("div", null, (0, r.h)("select", {
						class: "select select-sm w-32",
						onChange: function(t) {
							void 0 !== e.onSelect && e.onSelect(t.currentTarget.value)
						},
						disabled: !0 === e.disabled
					}, e.values.map((function(n) {
						return (0, r.h)("option", {
							selected: n === e.selected,
							value: n
						}, t(n))
					})))))
				}
			},
			246: (e, t, n) => {
				"use strict";

				function r(e) {
					return function(e) {
						if (Array.isArray(e)) return l(e)
					}(e) || function(e) {
						if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
					}(e) || i(e) || function() {
						throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}()
				}

				function o(e, t) {
					return function(e) {
						if (Array.isArray(e)) return e
					}(e) || function(e, t) {
						var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
						if (null != n) {
							var r, o, i, l, a = [],
								u = !0,
								s = !1;
							try {
								if (i = (n = n.call(e)).next, 0 === t) {
									if (Object(n) !== n) return;
									u = !1
								} else
									for (; !(u = (r = i.call(n)).done) && (a.push(r.value), a.length !== t); u = !0);
							} catch (e) {
								s = !0, o = e
							} finally {
								try {
									if (!u && null != n.return && (l = n.return(), Object(l) !== l)) return
								} finally {
									if (s) throw o
								}
							}
							return a
						}
					}(e, t) || i(e, t) || function() {
						throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}()
				}

				function i(e, t) {
					if (e) {
						if ("string" == typeof e) return l(e, t);
						var n = Object.prototype.toString.call(e).slice(8, -1);
						return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? l(e, t) : void 0
					}
				}

				function l(e, t) {
					(null == t || t > e.length) && (t = e.length);
					for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
					return r
				}
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.ThemeSelect = void 0;
				var a = n(400),
					u = n(396),
					s = n(259),
					c = n(106),
					_ = n(11);

				function f(e) {
					var t = (0, c.useT)(),
						n = e.value;
					return (0, a.h)(_.Select, {
						class: e.class,
						disabled: !0 === e.disabled,
						label: t(e.label),
						selected: n,
						values: e.values,
						onSelect: function(t) {
							e.onChange(t)
						}
					})
				}
				t.ThemeSelect = function(e) {
					var t, n = o((0, u.useState)(null !== (t = localStorage.getItem("dos.zone.theme")) && void 0 !== t ? t : "light"), 2),
						i = n[0],
						l = n[1];
					return (0, u.useEffect)((function() {
						document.body.setAttribute("data-theme", i), e.onTheme(i)
					}), [i]), (0, a.h)(f, {
						class: "p-0",
						label: "",
						values: r(s.ThemeValues),
						value: i,
						onChange: function(t) {
							localStorage.setItem("dos.zone.theme", t), l(t), e.onTheme(i)
						}
					})
				}
			},
			894: (e, t) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.reachGoal = void 0;
				var n = {};
				t.reachGoal = function(e) {
					!0 !== n[e] && ym(86987640, "reachGoal", e)
				}
			},
			574: (e, t, n) => {
				"use strict";

				function r(e) {
					return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					}, r(e)
				}
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.bindJsdos = void 0;
				var o = n(894);
				t.bindJsdos = function(e) {
					var t = e.v8,
						n = e.mobile;
					return t ? function(e) {
						var t = e.mobile;
						return new Promise((function(e, n) {
							var r = document.createElement("script");
							r.async = !0, r.onload = function() {
								var n, r = new URLSearchParams(location.search),
									i = null !== (n = localStorage.getItem("dos.zone.theme")) && void 0 !== n ? n : "light",
									l = null,
									a = function(e) {
										i = e, l && l.setTheme(e)
									};
								document.querySelectorAll(".jsdos").forEach((function(e) {
									var n, a, u, s, c, _, f, d = null !== (n = e.getAttribute("data-url")) && void 0 !== n ? n : "",
										h = null !== (a = e.getAttribute("data-config")) && void 0 !== a ? a : "",
										p = null !== (u = e.getAttribute("data-backend")) && void 0 !== u ? u : "",
										v = "1" === e.getAttribute("data-networking");
									l = Dos(e, {
										lang: null !== (s = e.getAttribute("data-lang")) && void 0 !== s ? s : "en",
										url: d.length > 0 ? d : void 0,
										dosboxConf: 0 === d.length && h.length > 0 ? h : void 0,
										backend: p.length > 0 && "any" !== p ? p : "dosbox",
										backendLocked: "any" !== p,
										backendHardware: window.backendHardware,
										theme: i,
										noNetworking: !v,
										onEvent: function(e) {
											if ("ci-ready" === e) {
												if (t && (null == l || l.setFullScreen(!0)), v && l) {
													var n = document.querySelector(".tutorial-video");
													n && (n.style.display = "none"), l.setFrame("network")
												}
											} else "open-key" === e && (0, o.reachGoal)("key")
										},
										room: null !== (c = r.get("room")) && void 0 !== c ? c : void 0,
										server: null !== (_ = r.get("server")) && void 0 !== _ ? _ : void 0,
										background: null !== (f = e.getAttribute("data-bg")) && void 0 !== f ? f : void 0
									}), (0, o.reachGoal)("run_v8")
								})), e({
									onTheme: a
								})
							}, r.onerror = function(e) {
								var t;
								return n(null !== (t = e.message) && void 0 !== t ? t : new Error(e + ""))
							}, r.src = "https://v8.js-dos.com/latest/js-dos.js", document.body.appendChild(r)
						}))
					}({
						mobile: n
					}) : new Promise((function(e, t) {
						var n = document.createElement("script");
						n.async = !0, n.onload = function() {
							emulators.pathPrefix = "/v7/js-dos/";
							var t = window.hardware,
								n = !1 !== (null == t ? void 0 : t.preventUnload);
							document.querySelectorAll(".jsdos").forEach((function(e) {
								var o, i;

								function l() {
									e.innerHTML = "";
									var o = e.getAttribute("data-url"),
										i = Dos(e, {
											hardware: t,
											noWebGL: !1,
											emulatorFunction: "dosboxWorker",
											withExperimentalApi: !1,
											withNetworkingApi: !1,
											preventUnload: n,
											windowOpen: function(e, t) {
												var n = window.proxy;
												"_blank" === t && "object" === r(n) && "function" == typeof n.windowOpen ? n.windowOpen(e, t) : window.open(e, t)
											},
											onExit: function() {
												l.call(i.layers)
											}
										});
									void 0 !== t && "function" == typeof t.onVolumeChanged && (i.registerOnVolumeChanged((function(e) {
										t.onVolumeChanged(e)
									})), t.onVolumeChanged(i.volume));
									var l = i.layers.toggleFullscreen;
									i.layers.toggleFullscreen(), i.layers.toggleFullscreen = function() {}, i.run(o).catch(console.error)
								}
								e.innerHTML = '\n                <div class="pre-run flex justify-center items-center hover:text-accent-focus h-full w-full cursor-pointer">\n                    <div style="z-index: 0; position: absolute; left: 0; top: 0; width: 100%; height: 100%; \n                        background-position: center; background-size: cover; background-repeat: no-repeat;\n                        background-image: url('.concat(null !== (o = e.getAttribute("data-bg")) && void 0 !== o ? o : "", ')">\n                    </div>\n                    <div style="z-index: 1; position: absolute; left: 0; top: 0; width: 100%; height: 100%; \n                        opacity: 0.75; background-color: hsl(var(--b1)/var(--tw-bg-opacity))">\n                    </div>\n                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="relative z-10 w-32 h-32">\n                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />\n                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 \n                            01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />\n                    </svg>\n                </div>\n                '), null === (i = e.querySelector(".pre-run")) || void 0 === i || i.addEventListener("click", l), e.parentElement.classList.remove("py-16", "px-4")
							})), e({
								onTheme: function() {}
							})
						}, n.onerror = function(e) {
							var n;
							return t(null !== (n = e.message) && void 0 !== n ? n : new Error(e + ""))
						}, n.src = "/v7/js-dos/js-dos.js", document.body.appendChild(n);
						var o = document.createElement("link");
						o.rel = "stylesheet", o.href = "/v7/js-dos/js-dos.css", document.body.appendChild(o)
					}))
				}
			},
			463: (e, t) => {
				"use strict";

				function n(e) {
					return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					}, n(e)
				}

				function r(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}

				function o(e, t) {
					for (var r = 0; r < t.length; r++) {
						var o = t[r];
						o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, (i = o.key, l = void 0, l = function(e, t) {
							if ("object" !== n(e) || null === e) return e;
							var r = e[Symbol.toPrimitive];
							if (void 0 !== r) {
								var o = r.call(e, t || "default");
								if ("object" !== n(o)) return o;
								throw new TypeError("@@toPrimitive must return a primitive value.")
							}
							return ("string" === t ? String : Number)(e)
						}(i, "string"), "symbol" === n(l) ? l : String(l)), o)
					}
					var i, l
				}

				function i(e, t, n) {
					return t && o(e.prototype, t), n && o(e, n), Object.defineProperty(e, "prototype", {
						writable: !1
					}), e
				}
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.lStorage = t.LStorage = void 0;
				var l = function() {
						function e() {
							r(this, e), this.length = 0, this.storage = {}
						}
						return i(e, [{
							key: "setItem",
							value: function(e, t) {
								this.storage[e] = t, this.length = Object.keys(this.storage).length
							}
						}, {
							key: "getItem",
							value: function(e) {
								var t = this.storage[e];
								return void 0 === t ? null : t
							}
						}, {
							key: "removeItem",
							value: function(e) {
								delete this.storage[e], this.length = Object.keys(this.storage).length
							}
						}, {
							key: "key",
							value: function(e) {
								var t = Object.keys(this.storage);
								return void 0 === t[e] ? null : t[e]
							}
						}, {
							key: "clear",
							value: function() {
								this.length = 0, this.storage = {}
							}
						}]), e
					}(),
					a = function() {
						function e(t, n) {
							var o = this;
							r(this, e), this.prefix = n;
							try {
								this.backend = t || localStorage, this.testBackend()
							} catch (e) {
								this.backend = new l
							}
							this.length = this.backend.length, "function" == typeof this.backend.sync && (this.sync = function(e) {
								o.backend.sync(e)
							})
						}
						return i(e, [{
							key: "testBackend",
							value: function() {
								var e = this.prefix + ".test.record";
								this.backend.setItem(e, "123");
								var t = this.backend.getItem(e);
								if (this.backend.removeItem(e), !("123" === t && null === this.backend.getItem(e))) throw new Error("Storage backend is not working properly")
							}
						}, {
							key: "setLocalStoragePrefix",
							value: function(e) {
								this.prefix = e
							}
						}, {
							key: "clear",
							value: function() {
								if (this.backend.length) {
									for (var e = [], t = 0; t < this.backend.length; ++t) {
										var n = this.backend.key(t);
										n && n.startsWith(this.prefix) && e.push(n)
									}
									for (var r = 0, o = e; r < o.length; r++) {
										var i = o[r];
										this.backend.removeItem(i)
									}
									this.length = this.backend.length
								}
							}
						}, {
							key: "key",
							value: function(e) {
								return this.backend.key(e)
							}
						}, {
							key: "setItem",
							value: function(e, t) {
								if (t && void 0 !== t.length && 0 !== t.length)
									for (var n = 0; n < t.length;) {
										var r = t.substr(n, 1024);
										(n += r.length) < t.length && (r += "@"), this.writeStringToKey(e, r), e += "."
									} else this.writeStringToKey(e, "")
							}
						}, {
							key: "getItem",
							value: function(e) {
								var t = this.readStringFromKey(e);
								if (null === t) return null;
								if (0 === t.length) return t;
								for (;
									"@" === t[t.length - 1];) {
									t = t.substr(0, t.length - 1), e += ".";
									var n = this.readStringFromKey(e);
									t += null === n ? "" : n
								}
								return t
							}
						}, {
							key: "removeItem",
							value: function(e) {
								this.backend.removeItem(this.prefix + e), this.length = this.backend.length
							}
						}, {
							key: "writeStringToKey",
							value: function(e, t) {
								this.backend.setItem(this.prefix + e, t), this.length = this.backend.length
							}
						}, {
							key: "readStringFromKey",
							value: function(e) {
								return this.backend.getItem(this.prefix + e)
							}
						}]), e
					}();
				t.LStorage = a, t.lStorage = new a(void 0, "jsdos.8.")
			},
			360: function(e, t) {
				var n, r, o;
				r = [], void 0 === (o = "function" == typeof(n = e => {
					"use strict";
					var t = (e, t) => {
							if ("farzher" == e) return {
								target: "farzher was here (^-^*)/",
								score: 0,
								_indexes: [0]
							};
							if (!e || !t) return I;
							var n = s(e);
							S(t) || (t = u(t));
							var r = n.bitflags;
							return (r & t._bitflags) !== r ? I : _(n, t)
						},
						n = (e, t, n) => {
							if ("farzher" == e) return [{
								target: "farzher was here (^-^*)/",
								score: 0,
								_indexes: [0],
								obj: t ? t[0] : I
							}];
							if (!e) return n && n.all ? c(e, t, n) : E;
							var r = s(e),
								o = r.bitflags,
								i = (r.containsSpace, n && n.threshold || C),
								l = n && n.limit || x,
								a = 0,
								f = 0,
								d = t.length;
							if (n && n.key)
								for (var h = n.key, p = 0; p < d; ++p) {
									var v = t[p];
									(P = w(v, h)) && (S(P) || (P = u(P)), (o & P._bitflags) === o && (T = _(r, P)) !== I && (T.score < i || (T = {
										target: T.target,
										_targetLower: "",
										_targetLowerCodes: I,
										_nextBeginningIndexes: I,
										_bitflags: 0,
										score: T.score,
										_indexes: T._indexes,
										obj: v
									}, a < l ? (O.add(T), ++a) : (++f, T.score > O.peek().score && O.replaceTop(T)))))
								} else if (n && n.keys) {
									var y = n.scoreFn || k,
										m = n.keys,
										g = m.length;
									for (p = 0; p < d; ++p) {
										v = t[p];
										for (var b = new Array(g), j = 0; j < g; ++j) h = m[j], (P = w(v, h)) ? (S(P) || (P = u(P)), (o & P._bitflags) !== o ? b[j] = I : b[j] = _(r, P)) : b[j] = I;
										b.obj = v;
										var A = y(b);
										A !== I && (A < i || (b.score = A, a < l ? (O.add(b), ++a) : (++f, A > O.peek().score && O.replaceTop(b))))
									}
								} else
									for (p = 0; p < d; ++p) {
										var P, T;
										(P = t[p]) && (S(P) || (P = u(P)), (o & P._bitflags) === o && (T = _(r, P)) !== I && (T.score < i || (a < l ? (O.add(T), ++a) : (++f, T.score > O.peek().score && O.replaceTop(T)))))
									}
								if (0 === a) return E;
							var L = new Array(a);
							for (p = a - 1; p >= 0; --p) L[p] = O.poll();
							return L.total = a + f, L
						},
						r = (e, t, n) => {
							if ("function" == typeof t) return o(e, t);
							if (e === I) return I;
							void 0 === t && (t = "<b>"), void 0 === n && (n = "</b>");
							var r = "",
								i = 0,
								l = !1,
								a = e.target,
								u = a.length,
								s = e._indexes;
							s = s.slice(0, s.len).sort(((e, t) => e - t));
							for (var c = 0; c < u; ++c) {
								var _ = a[c];
								if (s[i] === c) {
									if (l || (l = !0, r += t), ++i === s.length) {
										r += _ + n + a.substr(c + 1);
										break
									}
								} else l && (l = !1, r += n);
								r += _
							}
							return r
						},
						o = (e, t) => {
							if (e === I) return I;
							var n = e.target,
								r = n.length,
								o = e._indexes;
							o = o.slice(0, o.len).sort(((e, t) => e - t));
							for (var i = "", l = 0, a = 0, u = !1, s = (e = [], 0); s < r; ++s) {
								var c = n[s];
								if (o[a] === s) {
									if (++a, u || (u = !0, e.push(i), i = ""), a === o.length) {
										i += c, e.push(t(i, l++)), i = "", e.push(n.substr(s + 1));
										break
									}
								} else u && (u = !1, e.push(t(i, l++)), i = "");
								i += c
							}
							return e
						},
						i = e => e._indexes.slice(0, e._indexes.len).sort(((e, t) => e - t)),
						l = e => {
							"string" != typeof e && (e = "");
							var t = d(e);
							return {
								target: e,
								_targetLower: t._lower,
								_targetLowerCodes: t.lowerCodes,
								_nextBeginningIndexes: I,
								_bitflags: t.bitflags,
								score: I,
								_indexes: [0],
								obj: I
							}
						},
						a = e => {
							"string" != typeof e && (e = ""), e = e.trim();
							var t = d(e),
								n = [];
							if (t.containsSpace) {
								var r = e.split(/\s+/);
								r = [...new Set(r)];
								for (var o = 0; o < r.length; o++)
									if ("" !== r[o]) {
										var i = d(r[o]);
										n.push({
											lowerCodes: i.lowerCodes,
											_lower: r[o].toLowerCase(),
											containsSpace: !1
										})
									}
							}
							return {
								lowerCodes: t.lowerCodes,
								bitflags: t.bitflags,
								containsSpace: t.containsSpace,
								_lower: t._lower,
								spaceSearches: n
							}
						},
						u = e => {
							if (e.length > 999) return l(e);
							var t = y.get(e);
							return void 0 !== t || (t = l(e), y.set(e, t)), t
						},
						s = e => {
							if (e.length > 999) return a(e);
							var t = m.get(e);
							return void 0 !== t || (t = a(e), m.set(e, t)), t
						},
						c = (e, t, n) => {
							var r = [];
							r.total = t.length;
							var o = n && n.limit || x;
							if (n && n.key)
								for (var i = 0; i < t.length; i++) {
									var l = t[i];
									if (_ = w(l, n.key)) {
										S(_) || (_ = u(_)), _.score = C, _._indexes.len = 0;
										var a = _;
										if (a = {
												target: a.target,
												_targetLower: "",
												_targetLowerCodes: I,
												_nextBeginningIndexes: I,
												_bitflags: 0,
												score: _.score,
												_indexes: I,
												obj: l
											}, r.push(a), r.length >= o) return r
									}
								} else if (n && n.keys)
									for (i = 0; i < t.length; i++) {
										l = t[i];
										for (var s = new Array(n.keys.length), c = n.keys.length - 1; c >= 0; --c)(_ = w(l, n.keys[c])) ? (S(_) || (_ = u(_)), _.score = C, _._indexes.len = 0, s[c] = _) : s[c] = I;
										if (s.obj = l, s.score = C, r.push(s), r.length >= o) return r
									} else
										for (i = 0; i < t.length; i++) {
											var _;
											if ((_ = t[i]) && (S(_) || (_ = u(_)), _.score = C, _._indexes.len = 0, r.push(_), r.length >= o)) return r
										}
								return r
						},
						_ = (e, t, n = !1) => {
							if (!1 === n && e.containsSpace) return f(e, t);
							for (var r = e._lower, o = e.lowerCodes, i = o[0], l = t._targetLowerCodes, a = o.length, u = l.length, s = 0, c = 0, _ = 0;;) {
								if (i === l[c]) {
									if (g[_++] = c, ++s === a) break;
									i = o[s]
								}
								if (++c >= u) return I
							}
							s = 0;
							var d = !1,
								h = 0,
								v = t._nextBeginningIndexes;
							v === I && (v = t._nextBeginningIndexes = p(t.target)), c = 0 === g[0] ? 0 : v[g[0] - 1];
							var y = 0;
							if (c !== u)
								for (;;)
									if (c >= u) {
										if (s <= 0) break;
										if (++y > 200) break;
										--s, c = v[b[--h]]
									} else if (o[s] === l[c]) {
								if (b[h++] = c, ++s === a) {
									d = !0;
									break
								}++c
							} else c = v[c];
							var m = t._targetLower.indexOf(r, g[0]),
								k = ~m;
							if (k && !d)
								for (var w = 0; w < _; ++w) g[w] = m + w;
							var S = !1;
							if (k && (S = t._nextBeginningIndexes[m - 1] === m), d) var x = b,
								C = h;
							else x = g, C = _;
							var E = 0,
								j = 0;
							for (w = 1; w < a; ++w) x[w] - x[w - 1] != 1 && (E -= x[w], ++j);
							if (E -= (x[a - 1] - x[0] - (a - 1) + 12) * j, 0 !== x[0] && (E -= x[0] * x[0] * .2), d) {
								var A = 1;
								for (w = v[0]; w < u; w = v[w]) ++A;
								A > 24 && (E *= 10 * (A - 24))
							} else E *= 1e3;
							for (k && (E /= 1 + a * a * 1), S && (E /= 1 + a * a * 1), E -= u - a, t.score = E, w = 0; w < C; ++w) t._indexes[w] = x[w];
							return t._indexes.len = C, t
						},
						f = (e, t) => {
							for (var n = new Set, r = 0, o = I, i = 0, l = e.spaceSearches, a = 0; a < l.length; ++a) {
								var u = l[a];
								if ((o = _(u, t)) === I) return I;
								r += o.score, o._indexes[0] < i && (r -= i - o._indexes[0]), i = o._indexes[0];
								for (var s = 0; s < o._indexes.len; ++s) n.add(o._indexes[s])
							}
							var c = _(e, t, !0);
							if (c !== I && c.score > r) return c;
							o.score = r, a = 0;
							for (let e of n) o._indexes[a++] = e;
							return o._indexes.len = a, o
						},
						d = e => {
							for (var t = e.length, n = e.toLowerCase(), r = [], o = 0, i = !1, l = 0; l < t; ++l) {
								var a = r[l] = n.charCodeAt(l);
								32 !== a ? o |= 1 << (a >= 97 && a <= 122 ? a - 97 : a >= 48 && a <= 57 ? 26 : a <= 127 ? 30 : 31) : i = !0
							}
							return {
								lowerCodes: r,
								bitflags: o,
								containsSpace: i,
								_lower: n
							}
						},
						h = e => {
							for (var t = e.length, n = [], r = 0, o = !1, i = !1, l = 0; l < t; ++l) {
								var a = e.charCodeAt(l),
									u = a >= 65 && a <= 90,
									s = u || a >= 97 && a <= 122 || a >= 48 && a <= 57,
									c = u && !o || !i || !s;
								o = u, i = s, c && (n[r++] = l)
							}
							return n
						},
						p = e => {
							for (var t = e.length, n = h(e), r = [], o = n[0], i = 0, l = 0; l < t; ++l) o > l ? r[l] = o : (o = n[++i], r[l] = void 0 === o ? t : o);
							return r
						},
						v = () => {
							y.clear(), m.clear(), g = [], b = []
						},
						y = new Map,
						m = new Map,
						g = [],
						b = [],
						k = e => {
							for (var t = C, n = e.length, r = 0; r < n; ++r) {
								var o = e[r];
								if (o !== I) {
									var i = o.score;
									i > t && (t = i)
								}
							}
							return t === C ? I : t
						},
						w = (e, t) => {
							var n = e[t];
							if (void 0 !== n) return n;
							var r = t;
							Array.isArray(t) || (r = t.split("."));
							for (var o = r.length, i = -1; e && ++i < o;) e = e[r[i]];
							return e
						},
						S = e => "object" == typeof e,
						x = 1 / 0,
						C = -x,
						E = [];
					E.total = 0;
					var j, A, P, T, I = null,
						O = (j = [], A = 0, T = e => {
							for (var t = 0, n = j[t], r = 1; r < A;) {
								var o = r + 1;
								t = r, o < A && j[o].score < j[r].score && (t = o), j[t - 1 >> 1] = j[t], r = 1 + (t << 1)
							}
							for (var i = t - 1 >> 1; t > 0 && n.score < j[i].score; i = (t = i) - 1 >> 1) j[t] = j[i];
							j[t] = n
						}, (P = {}).add = e => {
							var t = A;
							j[A++] = e;
							for (var n = t - 1 >> 1; t > 0 && e.score < j[n].score; n = (t = n) - 1 >> 1) j[t] = j[n];
							j[t] = e
						}, P.poll = e => {
							if (0 !== A) {
								var t = j[0];
								return j[0] = j[--A], T(), t
							}
						}, P.peek = e => {
							if (0 !== A) return j[0]
						}, P.replaceTop = e => {
							j[0] = e, T()
						}, P);
					return {
						single: t,
						go: n,
						highlight: r,
						prepare: l,
						indexes: i,
						cleanup: v
					}
				}) ? n.apply(t, r) : n) || (e.exports = o)
			},
			698: () => {},
			400: (e, t, n) => {
				"use strict";
				n.r(t), n.d(t, {
					Component: () => k,
					Fragment: () => b,
					cloneElement: () => W,
					createContext: () => z,
					createElement: () => y,
					createRef: () => g,
					h: () => y,
					hydrate: () => V,
					isValidElement: () => l,
					options: () => o,
					render: () => R,
					toChildArray: () => A
				});
				var r, o, i, l, a, u, s, c, _, f = {},
					d = [],
					h = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

				function p(e, t) {
					for (var n in t) e[n] = t[n];
					return e
				}

				function v(e) {
					var t = e.parentNode;
					t && t.removeChild(e)
				}

				function y(e, t, n) {
					var o, i, l, a = {};
					for (l in t) "key" == l ? o = t[l] : "ref" == l ? i = t[l] : a[l] = t[l];
					if (arguments.length > 2 && (a.children = arguments.length > 3 ? r.call(arguments, 2) : n), "function" == typeof e && null != e.defaultProps)
						for (l in e.defaultProps) void 0 === a[l] && (a[l] = e.defaultProps[l]);
					return m(e, a, o, i, null)
				}

				function m(e, t, n, r, l) {
					var a = {
						type: e,
						props: t,
						key: n,
						ref: r,
						__k: null,
						__: null,
						__b: 0,
						__e: null,
						__d: void 0,
						__c: null,
						__h: null,
						constructor: void 0,
						__v: null == l ? ++i : l
					};
					return null == l && null != o.vnode && o.vnode(a), a
				}

				function g() {
					return {
						current: null
					}
				}

				function b(e) {
					return e.children
				}

				function k(e, t) {
					this.props = e, this.context = t
				}

				function w(e, t) {
					if (null == t) return e.__ ? w(e.__, e.__.__k.indexOf(e) + 1) : null;
					for (var n; t < e.__k.length; t++)
						if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
					return "function" == typeof e.type ? w(e) : null
				}

				function S(e) {
					var t, n;
					if (null != (e = e.__) && null != e.__c) {
						for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
							if (null != (n = e.__k[t]) && null != n.__e) {
								e.__e = e.__c.base = n.__e;
								break
							}
						return S(e)
					}
				}

				function x(e) {
					(!e.__d && (e.__d = !0) && a.push(e) && !C.__r++ || u !== o.debounceRendering) && ((u = o.debounceRendering) || s)(C)
				}

				function C() {
					var e, t, n, r, o, i, l, u;
					for (a.sort(c); e = a.shift();) e.__d && (t = a.length, r = void 0, o = void 0, l = (i = (n = e).__v).__e, (u = n.__P) && (r = [], (o = p({}, i)).__v = i.__v + 1, M(u, i, o, n.__n, void 0 !== u.ownerSVGElement, null != i.__h ? [l] : null, r, null == l ? w(i) : l, i.__h), U(r, i), i.__e != l && S(i)), a.length > t && a.sort(c));
					C.__r = 0
				}

				function E(e, t, n, r, o, i, l, a, u, s) {
					var c, _, h, p, v, y, g, k = r && r.__k || d,
						S = k.length;
					for (n.__k = [], c = 0; c < t.length; c++)
						if (null != (p = n.__k[c] = null == (p = t[c]) || "boolean" == typeof p || "function" == typeof p ? null : "string" == typeof p || "number" == typeof p || "bigint" == typeof p ? m(null, p, null, null, p) : Array.isArray(p) ? m(b, {
								children: p
							}, null, null, null) : p.__b > 0 ? m(p.type, p.props, p.key, p.ref ? p.ref : null, p.__v) : p)) {
							if (p.__ = n, p.__b = n.__b + 1, null === (h = k[c]) || h && p.key == h.key && p.type === h.type) k[c] = void 0;
							else
								for (_ = 0; _ < S; _++) {
									if ((h = k[_]) && p.key == h.key && p.type === h.type) {
										k[_] = void 0;
										break
									}
									h = null
								}
							M(e, p, h = h || f, o, i, l, a, u, s), v = p.__e, (_ = p.ref) && h.ref != _ && (g || (g = []), h.ref && g.push(h.ref, null, p), g.push(_, p.__c || v, p)), null != v ? (null == y && (y = v), "function" == typeof p.type && p.__k === h.__k ? p.__d = u = j(p, u, e) : u = P(e, p, h, k, v, u), "function" == typeof n.type && (n.__d = u)) : u && h.__e == u && u.parentNode != e && (u = w(h))
						}
					for (n.__e = y, c = S; c--;) null != k[c] && ("function" == typeof n.type && null != k[c].__e && k[c].__e == n.__d && (n.__d = T(r).nextSibling), q(k[c], k[c]));
					if (g)
						for (c = 0; c < g.length; c++) D(g[c], g[++c], g[++c])
				}

				function j(e, t, n) {
					for (var r, o = e.__k, i = 0; o && i < o.length; i++)(r = o[i]) && (r.__ = e, t = "function" == typeof r.type ? j(r, t, n) : P(n, r, r, o, r.__e, t));
					return t
				}

				function A(e, t) {
					return t = t || [], null == e || "boolean" == typeof e || (Array.isArray(e) ? e.some((function(e) {
						A(e, t)
					})) : t.push(e)), t
				}

				function P(e, t, n, r, o, i) {
					var l, a, u;
					if (void 0 !== t.__d) l = t.__d, t.__d = void 0;
					else if (null == n || o != i || null == o.parentNode) e: if (null == i || i.parentNode !== e) e.appendChild(o), l = null;
						else {
							for (a = i, u = 0;
								(a = a.nextSibling) && u < r.length; u += 1)
								if (a == o) break e;
							e.insertBefore(o, i), l = i
						}
					return void 0 !== l ? l : o.nextSibling
				}

				function T(e) {
					var t, n, r;
					if (null == e.type || "string" == typeof e.type) return e.__e;
					if (e.__k)
						for (t = e.__k.length - 1; t >= 0; t--)
							if ((n = e.__k[t]) && (r = T(n))) return r;
					return null
				}

				function I(e, t, n) {
					"-" === t[0] ? e.setProperty(t, null == n ? "" : n) : e[t] = null == n ? "" : "number" != typeof n || h.test(t) ? n : n + "px"
				}

				function O(e, t, n, r, o) {
					var i;
					e: if ("style" === t)
						if ("string" == typeof n) e.style.cssText = n;
						else {
							if ("string" == typeof r && (e.style.cssText = r = ""), r)
								for (t in r) n && t in n || I(e.style, t, "");
							if (n)
								for (t in n) r && n[t] === r[t] || I(e.style, t, n[t])
						}
					else if ("o" === t[0] && "n" === t[1]) i = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? r || e.addEventListener(t, i ? H : L, i) : e.removeEventListener(t, i ? H : L, i);
					else if ("dangerouslySetInnerHTML" !== t) {
						if (o) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
						else if ("width" !== t && "height" !== t && "href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && t in e) try {
							e[t] = null == n ? "" : n;
							break e
						} catch (e) {}
						"function" == typeof n || (null == n || !1 === n && "-" !== t[4] ? e.removeAttribute(t) : e.setAttribute(t, n))
					}
				}

				function L(e) {
					return this.l[e.type + !1](o.event ? o.event(e) : e)
				}

				function H(e) {
					return this.l[e.type + !0](o.event ? o.event(e) : e)
				}

				function M(e, t, n, r, i, l, a, u, s) {
					var c, _, f, d, h, v, y, m, g, w, S, x, C, j, A, P = t.type;
					if (void 0 !== t.constructor) return null;
					null != n.__h && (s = n.__h, u = t.__e = n.__e, t.__h = null, l = [u]), (c = o.__b) && c(t);
					try {
						e: if ("function" == typeof P) {
								if (m = t.props, g = (c = P.contextType) && r[c.__c], w = c ? g ? g.props.value : c.__ : r, n.__c ? y = (_ = t.__c = n.__c).__ = _.__E : ("prototype" in P && P.prototype.render ? t.__c = _ = new P(m, w) : (t.__c = _ = new k(m, w), _.constructor = P, _.render = F), g && g.sub(_), _.props = m, _.state || (_.state = {}), _.context = w, _.__n = r, f = _.__d = !0, _.__h = [], _._sb = []), null == _.__s && (_.__s = _.state), null != P.getDerivedStateFromProps && (_.__s == _.state && (_.__s = p({}, _.__s)), p(_.__s, P.getDerivedStateFromProps(m, _.__s))), d = _.props, h = _.state, _.__v = t, f) null == P.getDerivedStateFromProps && null != _.componentWillMount && _.componentWillMount(), null != _.componentDidMount && _.__h.push(_.componentDidMount);
								else {
									if (null == P.getDerivedStateFromProps && m !== d && null != _.componentWillReceiveProps && _.componentWillReceiveProps(m, w), !_.__e && null != _.shouldComponentUpdate && !1 === _.shouldComponentUpdate(m, _.__s, w) || t.__v === n.__v) {
										for (t.__v !== n.__v && (_.props = m, _.state = _.__s, _.__d = !1), _.__e = !1, t.__e = n.__e, t.__k = n.__k, t.__k.forEach((function(e) {
												e && (e.__ = t)
											})), S = 0; S < _._sb.length; S++) _.__h.push(_._sb[S]);
										_._sb = [], _.__h.length && a.push(_);
										break e
									}
									null != _.componentWillUpdate && _.componentWillUpdate(m, _.__s, w), null != _.componentDidUpdate && _.__h.push((function() {
										_.componentDidUpdate(d, h, v)
									}))
								}
								if (_.context = w, _.props = m, _.__P = e, x = o.__r, C = 0, "prototype" in P && P.prototype.render) {
									for (_.state = _.__s, _.__d = !1, x && x(t), c = _.render(_.props, _.state, _.context), j = 0; j < _._sb.length; j++) _.__h.push(_._sb[j]);
									_._sb = []
								} else
									do {
										_.__d = !1, x && x(t), c = _.render(_.props, _.state, _.context), _.state = _.__s
									} while (_.__d && ++C < 25);
								_.state = _.__s, null != _.getChildContext && (r = p(p({}, r), _.getChildContext())), f || null == _.getSnapshotBeforeUpdate || (v = _.getSnapshotBeforeUpdate(d, h)), A = null != c && c.type === b && null == c.key ? c.props.children : c, E(e, Array.isArray(A) ? A : [A], t, n, r, i, l, a, u, s), _.base = t.__e, t.__h = null, _.__h.length && a.push(_), y && (_.__E = _.__ = null), _.__e = !1
							} else null == l && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = N(n.__e, t, n, r, i, l, a, s);
							(c = o.diffed) && c(t)
					}
					catch (e) {
						t.__v = null, (s || null != l) && (t.__e = u, t.__h = !!s, l[l.indexOf(u)] = null), o.__e(e, t, n)
					}
				}

				function U(e, t) {
					o.__c && o.__c(t, e), e.some((function(t) {
						try {
							e = t.__h, t.__h = [], e.some((function(e) {
								e.call(t)
							}))
						} catch (e) {
							o.__e(e, t.__v)
						}
					}))
				}

				function N(e, t, n, o, i, l, a, u) {
					var s, c, _, d = n.props,
						h = t.props,
						p = t.type,
						y = 0;
					if ("svg" === p && (i = !0), null != l)
						for (; y < l.length; y++)
							if ((s = l[y]) && "setAttribute" in s == !!p && (p ? s.localName === p : 3 === s.nodeType)) {
								e = s, l[y] = null;
								break
							}
					if (null == e) {
						if (null === p) return document.createTextNode(h);
						e = i ? document.createElementNS("http://www.w3.org/2000/svg", p) : document.createElement(p, h.is && h), l = null, u = !1
					}
					if (null === p) d === h || u && e.data === h || (e.data = h);
					else {
						if (l = l && r.call(e.childNodes), c = (d = n.props || f).dangerouslySetInnerHTML, _ = h.dangerouslySetInnerHTML, !u) {
							if (null != l)
								for (d = {}, y = 0; y < e.attributes.length; y++) d[e.attributes[y].name] = e.attributes[y].value;
							(_ || c) && (_ && (c && _.__html == c.__html || _.__html === e.innerHTML) || (e.innerHTML = _ && _.__html || ""))
						}
						if (function(e, t, n, r, o) {
								var i;
								for (i in n) "children" === i || "key" === i || i in t || O(e, i, null, n[i], r);
								for (i in t) o && "function" != typeof t[i] || "children" === i || "key" === i || "value" === i || "checked" === i || n[i] === t[i] || O(e, i, t[i], n[i], r)
							}(e, h, d, i, u), _) t.__k = [];
						else if (y = t.props.children, E(e, Array.isArray(y) ? y : [y], t, n, o, i && "foreignObject" !== p, l, a, l ? l[0] : n.__k && w(n, 0), u), null != l)
							for (y = l.length; y--;) null != l[y] && v(l[y]);
						u || ("value" in h && void 0 !== (y = h.value) && (y !== e.value || "progress" === p && !y || "option" === p && y !== d.value) && O(e, "value", y, d.value, !1), "checked" in h && void 0 !== (y = h.checked) && y !== e.checked && O(e, "checked", y, d.checked, !1))
					}
					return e
				}

				function D(e, t, n) {
					try {
						"function" == typeof e ? e(t) : e.current = t
					} catch (e) {
						o.__e(e, n)
					}
				}

				function q(e, t, n) {
					var r, i;
					if (o.unmount && o.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || D(r, null, t)), null != (r = e.__c)) {
						if (r.componentWillUnmount) try {
							r.componentWillUnmount()
						} catch (e) {
							o.__e(e, t)
						}
						r.base = r.__P = null, e.__c = void 0
					}
					if (r = e.__k)
						for (i = 0; i < r.length; i++) r[i] && q(r[i], t, n || "function" != typeof e.type);
					n || null == e.__e || v(e.__e), e.__ = e.__e = e.__d = void 0
				}

				function F(e, t, n) {
					return this.constructor(e, n)
				}

				function R(e, t, n) {
					var i, l, a;
					o.__ && o.__(e, t), l = (i = "function" == typeof n) ? null : n && n.__k || t.__k, a = [], M(t, e = (!i && n || t).__k = y(b, null, [e]), l || f, f, void 0 !== t.ownerSVGElement, !i && n ? [n] : l ? null : t.firstChild ? r.call(t.childNodes) : null, a, !i && n ? n : l ? l.__e : t.firstChild, i), U(a, e)
				}

				function V(e, t) {
					R(e, t, V)
				}

				function W(e, t, n) {
					var o, i, l, a = p({}, e.props);
					for (l in t) "key" == l ? o = t[l] : "ref" == l ? i = t[l] : a[l] = t[l];
					return arguments.length > 2 && (a.children = arguments.length > 3 ? r.call(arguments, 2) : n), m(e.type, a, o || e.key, i || e.ref, null)
				}

				function z(e, t) {
					var n = {
						__c: t = "__cC" + _++,
						__: e,
						Consumer: function(e, t) {
							return e.children(t)
						},
						Provider: function(e) {
							var n, r;
							return this.getChildContext || (n = [], (r = {})[t] = this, this.getChildContext = function() {
								return r
							}, this.shouldComponentUpdate = function(e) {
								this.props.value !== e.value && n.some((function(e) {
									e.__e = !0, x(e)
								}))
							}, this.sub = function(e) {
								n.push(e);
								var t = e.componentWillUnmount;
								e.componentWillUnmount = function() {
									n.splice(n.indexOf(e), 1), t && t.call(e)
								}
							}), e.children
						}
					};
					return n.Provider.__ = n.Consumer.contextType = n
				}
				r = d.slice, o = {
					__e: function(e, t, n, r) {
						for (var o, i, l; t = t.__;)
							if ((o = t.__c) && !o.__) try {
								if ((i = o.constructor) && null != i.getDerivedStateFromError && (o.setState(i.getDerivedStateFromError(e)), l = o.__d), null != o.componentDidCatch && (o.componentDidCatch(e, r || {}), l = o.__d), l) return o.__E = o
							} catch (t) {
								e = t
							}
							throw e
					}
				}, i = 0, l = function(e) {
					return null != e && void 0 === e.constructor
				}, k.prototype.setState = function(e, t) {
					var n;
					n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = p({}, this.state), "function" == typeof e && (e = e(p({}, n), this.props)), e && p(n, e), null != e && this.__v && (t && this._sb.push(t), x(this))
				}, k.prototype.forceUpdate = function(e) {
					this.__v && (this.__e = !0, e && this.__h.push(e), x(this))
				}, k.prototype.render = b, a = [], s = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, c = function(e, t) {
					return e.__v.__b - t.__v.__b
				}, C.__r = 0, _ = 0
			},
			396: (e, t, n) => {
				"use strict";
				n.r(t), n.d(t, {
					useCallback: () => x,
					useContext: () => C,
					useDebugValue: () => E,
					useEffect: () => g,
					useErrorBoundary: () => j,
					useId: () => A,
					useImperativeHandle: () => w,
					useLayoutEffect: () => b,
					useMemo: () => S,
					useReducer: () => m,
					useRef: () => k,
					useState: () => y
				});
				var r, o, i, l, a = n(400),
					u = 0,
					s = [],
					c = [],
					_ = a.options.__b,
					f = a.options.__r,
					d = a.options.diffed,
					h = a.options.__c,
					p = a.options.unmount;

				function v(e, t) {
					a.options.__h && a.options.__h(o, e, u || t), u = 0;
					var n = o.__H || (o.__H = {
						__: [],
						__h: []
					});
					return e >= n.__.length && n.__.push({
						__V: c
					}), n.__[e]
				}

				function y(e) {
					return u = 1, m(M, e)
				}

				function m(e, t, n) {
					var i = v(r++, 2);
					if (i.t = e, !i.__c && (i.__ = [n ? n(t) : M(void 0, t), function(e) {
							var t = i.__N ? i.__N[0] : i.__[0],
								n = i.t(t, e);
							t !== n && (i.__N = [n, i.__[1]], i.__c.setState({}))
						}], i.__c = o, !o.u)) {
						var l = function(e, t, n) {
							if (!i.__c.__H) return !0;
							var r = i.__c.__H.__.filter((function(e) {
								return e.__c
							}));
							if (r.every((function(e) {
									return !e.__N
								}))) return !a || a.call(this, e, t, n);
							var o = !1;
							return r.forEach((function(e) {
								if (e.__N) {
									var t = e.__[0];
									e.__ = e.__N, e.__N = void 0, t !== e.__[0] && (o = !0)
								}
							})), !(!o && i.__c.props === e) && (!a || a.call(this, e, t, n))
						};
						o.u = !0;
						var a = o.shouldComponentUpdate,
							u = o.componentWillUpdate;
						o.componentWillUpdate = function(e, t, n) {
							if (this.__e) {
								var r = a;
								a = void 0, l(e, t, n), a = r
							}
							u && u.call(this, e, t, n)
						}, o.shouldComponentUpdate = l
					}
					return i.__N || i.__
				}

				function g(e, t) {
					var n = v(r++, 3);
					!a.options.__s && H(n.__H, t) && (n.__ = e, n.i = t, o.__H.__h.push(n))
				}

				function b(e, t) {
					var n = v(r++, 4);
					!a.options.__s && H(n.__H, t) && (n.__ = e, n.i = t, o.__h.push(n))
				}

				function k(e) {
					return u = 5, S((function() {
						return {
							current: e
						}
					}), [])
				}

				function w(e, t, n) {
					u = 6, b((function() {
						return "function" == typeof e ? (e(t()), function() {
							return e(null)
						}) : e ? (e.current = t(), function() {
							return e.current = null
						}) : void 0
					}), null == n ? n : n.concat(e))
				}

				function S(e, t) {
					var n = v(r++, 7);
					return H(n.__H, t) ? (n.__V = e(), n.i = t, n.__h = e, n.__V) : n.__
				}

				function x(e, t) {
					return u = 8, S((function() {
						return e
					}), t)
				}

				function C(e) {
					var t = o.context[e.__c],
						n = v(r++, 9);
					return n.c = e, t ? (null == n.__ && (n.__ = !0, t.sub(o)), t.props.value) : e.__
				}

				function E(e, t) {
					a.options.useDebugValue && a.options.useDebugValue(t ? t(e) : e)
				}

				function j(e) {
					var t = v(r++, 10),
						n = y();
					return t.__ = e, o.componentDidCatch || (o.componentDidCatch = function(e, r) {
						t.__ && t.__(e, r), n[1](e)
					}), [n[0], function() {
						n[1](void 0)
					}]
				}

				function A() {
					var e = v(r++, 11);
					if (!e.__) {
						for (var t = o.__v; null !== t && !t.__m && null !== t.__;) t = t.__;
						var n = t.__m || (t.__m = [0, 0]);
						e.__ = "P" + n[0] + "-" + n[1]++
					}
					return e.__
				}

				function P() {
					for (var e; e = s.shift();)
						if (e.__P && e.__H) try {
							e.__H.__h.forEach(O), e.__H.__h.forEach(L), e.__H.__h = []
						} catch (t) {
							e.__H.__h = [], a.options.__e(t, e.__v)
						}
				}
				a.options.__b = function(e) {
					o = null, _ && _(e)
				}, a.options.__r = function(e) {
					f && f(e), r = 0;
					var t = (o = e.__c).__H;
					t && (i === o ? (t.__h = [], o.__h = [], t.__.forEach((function(e) {
						e.__N && (e.__ = e.__N), e.__V = c, e.__N = e.i = void 0
					}))) : (t.__h.forEach(O), t.__h.forEach(L), t.__h = [])), i = o
				}, a.options.diffed = function(e) {
					d && d(e);
					var t = e.__c;
					t && t.__H && (t.__H.__h.length && (1 !== s.push(t) && l === a.options.requestAnimationFrame || ((l = a.options.requestAnimationFrame) || I)(P)), t.__H.__.forEach((function(e) {
						e.i && (e.__H = e.i), e.__V !== c && (e.__ = e.__V), e.i = void 0, e.__V = c
					}))), i = o = null
				}, a.options.__c = function(e, t) {
					t.some((function(e) {
						try {
							e.__h.forEach(O), e.__h = e.__h.filter((function(e) {
								return !e.__ || L(e)
							}))
						} catch (n) {
							t.some((function(e) {
								e.__h && (e.__h = [])
							})), t = [], a.options.__e(n, e.__v)
						}
					})), h && h(e, t)
				}, a.options.unmount = function(e) {
					p && p(e);
					var t, n = e.__c;
					n && n.__H && (n.__H.__.forEach((function(e) {
						try {
							O(e)
						} catch (e) {
							t = e
						}
					})), n.__H = void 0, t && a.options.__e(t, n.__v))
				};
				var T = "function" == typeof requestAnimationFrame;

				function I(e) {
					var t, n = function() {
							clearTimeout(r), T && cancelAnimationFrame(t), setTimeout(e)
						},
						r = setTimeout(n, 100);
					T && (t = requestAnimationFrame(n))
				}

				function O(e) {
					var t = o,
						n = e.__c;
					"function" == typeof n && (e.__c = void 0, n()), o = t
				}

				function L(e) {
					var t = o;
					e.__c = e.__(), o = t
				}

				function H(e, t) {
					return !e || e.length !== t.length || t.some((function(t, n) {
						return t !== e[n]
					}))
				}

				function M(e, t) {
					return "function" == typeof t ? t(e) : t
				}
			}
		},
		n = {};

	function r(e) {
		var o = n[e];
		if (void 0 !== o) return o.exports;
		var i = n[e] = {
			exports: {}
		};
		return t[e].call(i.exports, i, i.exports, r), i.exports
	}
	r.m = t, e = [], r.O = (t, n, o, i) => {
		if (!n) {
			var l = 1 / 0;
			for (c = 0; c < e.length; c++) {
				for (var [n, o, i] = e[c], a = !0, u = 0; u < n.length; u++)(!1 & i || l >= i) && Object.keys(r.O).every((e => r.O[e](n[u]))) ? n.splice(u--, 1) : (a = !1, i < l && (l = i));
				if (a) {
					e.splice(c--, 1);
					var s = o();
					void 0 !== s && (t = s)
				}
			}
			return t
		}
		i = i || 0;
		for (var c = e.length; c > 0 && e[c - 1][2] > i; c--) e[c] = e[c - 1];
		e[c] = [n, o, i]
	}, r.d = (e, t) => {
		for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
			enumerable: !0,
			get: t[n]
		})
	}, r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), r.r = e => {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, (() => {
		var e = {
			680: 0,
			146: 0
		};
		r.O.j = t => 0 === e[t];
		var t = (t, n) => {
				var o, i, [l, a, u] = n,
					s = 0;
				if (l.some((t => 0 !== e[t]))) {
					for (o in a) r.o(a, o) && (r.m[o] = a[o]);
					if (u) var c = u(r)
				}
				for (t && t(n); s < l.length; s++) i = l[s], r.o(e, i) && e[i] && e[i][0](), e[i] = 0;
				return r.O(c)
			},
			n = self.webpackChunk = self.webpackChunk || [];
		n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n))
	})(), r.O(void 0, [146], (() => r(532)));
	var o = r.O(void 0, [146], (() => r(698)));
	o = r.O(o)
})();