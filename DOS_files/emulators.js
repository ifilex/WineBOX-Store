! function e(t, s, o) {
	function i(r, a) {
		if (!s[r]) {
			if (!t[r]) {
				var l = "function" == typeof require && require;
				if (!a && l) return l(r, !0);
				if (n) return n(r, !0);
				var d = new Error("Cannot find module '" + r + "'");
				throw d.code = "MODULE_NOT_FOUND", d
			}
			var u = s[r] = {
				exports: {}
			};
			t[r][0].call(u.exports, (function(e) {
				return i(t[r][1][e] || e)
			}), u, u.exports, e, t, s, o)
		}
		return s[r].exports
	}
	for (var n = "function" == typeof require && require, r = 0; r < o.length; r++) i(o[r]);
	return i
}({
	1: [function(e, t, s) {
		"use strict";
		Object.defineProperty(s, "__esModule", {
			value: !0
		}), s.Build = void 0, s.Build = {
			version: "8.2.1 (7f468618131a27bf996519d3e0f94f8a)",
			buildSeed: 1725606196473,
			"wdosbox-x.wasm": {
				size: 6305055,
				gzSize: 2294421
			},
			"wdosbox-x.js": {
				size: 230427,
				gzSize: 54624
			},
			"wdosbox.wasm": {
				size: 1467793,
				gzSize: 499747
			},
			"wdosbox.js": {
				size: 108170,
				gzSize: 28965
			},
			"wlibzip.wasm": {
				size: 112416,
				gzSize: 52241
			},
			"wlibzip.js": {
				size: 74095,
				gzSize: 19630
			}
		}
	}, {}],
	2: [function(e, t, s) {
		"use strict";

		function o(e, t, s) {
			return (t = function(e) {
				var t = function(e, t) {
					if ("object" != typeof e || null === e) return e;
					var s = e[Symbol.toPrimitive];
					if (void 0 !== s) {
						var o = s.call(e, t || "default");
						if ("object" != typeof o) return o;
						throw new TypeError("@@toPrimitive must return a primitive value.")
					}
					return ("string" === t ? String : Number)(e)
				}(e, "string");
				return "symbol" == typeof t ? t : String(t)
			}(t)) in e ? Object.defineProperty(e, t, {
				value: s,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = s, e
		}
		var i = function(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		};
		Object.defineProperty(s, "__esModule", {
			value: !0
		}), s.defaultConfig = void 0;
		const n = i(e("../../libzip/libzip")),
			r = e("../../http"),
			a = e("../../build");
		s.default = class {
			constructor(e) {
				o(this, "dosboxConf", s.defaultConfig), o(this, "jsdosConf", {
					version: a.Build.version
				}), o(this, "sources", void 0), o(this, "libzipWasm", void 0), this.sources = [], this.libzipWasm = e
			}
			autoexec() {
				const e = this.dosboxConf.indexOf("[autoexec]");
				for (var t = arguments.length, s = new Array(t), o = 0; o < t; o++) s[o] = arguments[o];
				return this.dosboxConf = this.dosboxConf.substring(0, e) + "[autoexec]\nmount c .\nc:\n" + s.join("\n"), this
			}
			extract(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/",
					s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "zip";
				return this.extractAll([{
					url: e,
					path: t,
					type: s
				}])
			}
			extractAll(e) {
				return this.sources.push(...e), this
			}
			async toUint8Array() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
				const t = {};
				await this.libzipWasm.instantiate(t);
				const s = new n.default(t),
					o = [];
				for (const e of this.sources) {
					if ("zip" !== e.type) throw new Error("Only Zip is supported");
					const t = (0, r.httpRequest)(e.url, {
						responseType: "arraybuffer"
					}).then((t => ({
						source: e,
						data: new Uint8Array(t)
					})));
					o.push(t)
				}
				e || (await s.writeFile(".jsdos/dosbox.conf", this.dosboxConf), await s.writeFile(".jsdos/readme.txt", l), await s.writeFile(".jsdos/jsdos.json", JSON.stringify(this.jsdosConf, null, 2)));
				const i = await Promise.all(o);
				for (const e of i) s.zipToFs(e.data, e.source.path);
				e && (await s.writeFile(".jsdos/dosbox.conf", this.dosboxConf), await s.writeFile(".jsdos/readme.txt", l), await s.writeFile(".jsdos/jsdos.json", JSON.stringify(this.jsdosConf, null, 2)));
				const a = await s.zipFromFs();
				return s.destroy(), a
			}
		};
		const l = "\n".replace(/\n/g, "\r\n");
		s.defaultConfig = "[sdl]\nautolock=false\n\nfullscreen=false\nfulldouble=false\nfullresolution=original\nwindowresolution=original\noutput=surface\nsensitivity=100\nwaitonerror=true\npriority=higher,normal\nmapperfile=mapper-jsdos.map\nusescancodes=true\nvsync=false\n[dosbox]\nmachine=svga_s3\n\nlanguage=\ncaptures=capture\nmemsize=16\n[cpu]\ncore=auto\ncputype=auto\ncycles=auto\n\ncycleup=10\ncycledown=20\n[mixer]\nnosound=false\nrate=44100\n\nblocksize=1024\nprebuffer=20\n\n[render]\n# frameskip: How many frames DOSBox skips before drawing one.\n#    aspect: Do aspect correction, if your output method doesn't support scaling this can slow things down!.\n#    scaler: Scaler used to enlarge/enhance low resolution modes.\n#              If 'forced' is appended, then the scaler will be used even if the result might not be desired.\n#            Possible values: none, normal2x, normal3x, advmame2x, advmame3x, advinterp2x, advinterp3x, hq2x, hq3x, 2xsai, super2xsai, supereagle, tv2x, tv3x, rgb2x, rgb3x, scan2x, scan3x.\n\nframeskip=0\naspect=false\nscaler=none\n\n[midi]\n#     mpu401: Type of MPU-401 to emulate.\n#             Possible values: intelligent, uart, none.\n# mididevice: Device that will receive the MIDI data from MPU-401.\n#             Possible values: default, win32, alsa, oss, coreaudio, coremidi, none.\n# midiconfig: Special configuration options for the device driver. This is usually the id of the device you want to use.\n#               See the README/Manual for more details.\n\nmpu401=intelligent\nmididevice=default\nmidiconfig=\n\n[sblaster]\n#  sbtype: Type of Soundblaster to emulate. gb is Gameblaster.\n#          Possible values: sb1, sb2, sbpro1, sbpro2, sb16, gb, none.\n#  sbbase: The IO address of the soundblaster.\n#          Possible values: 220, 240, 260, 280, 2a0, 2c0, 2e0, 300.\n#     irq: The IRQ number of the soundblaster.\n#          Possible values: 7, 5, 3, 9, 10, 11, 12.\n#     dma: The DMA number of the soundblaster.\n#          Possible values: 1, 5, 0, 3, 6, 7.\n#    hdma: The High DMA number of the soundblaster.\n#          Possible values: 1, 5, 0, 3, 6, 7.\n# sbmixer: Allow the soundblaster mixer to modify the DOSBox mixer.\n# oplmode: Type of OPL emulation. On 'auto' the mode is determined by sblaster type. All OPL modes are Adlib-compatible, except for 'cms'.\n#          Possible values: auto, cms, opl2, dualopl2, opl3, none.\n#  oplemu: Provider for the OPL emulation. compat might provide better quality (see oplrate as well).\n#          Possible values: default, compat, fast.\n# oplrate: Sample rate of OPL music emulation. Use 49716 for highest quality (set the mixer rate accordingly).\n#          Possible values: 44100, 49716, 48000, 32000, 22050, 16000, 11025, 8000.\n\nsbtype=sb16\nsbbase=220\nirq=7\ndma=1\nhdma=5\nsbmixer=true\noplmode=auto\noplemu=default\noplrate=44100\n\n[gus]\n#      gus: Enable the Gravis Ultrasound emulation.\n#  gusrate: Sample rate of Ultrasound emulation.\n#           Possible values: 44100, 48000, 32000, 22050, 16000, 11025, 8000, 49716.\n#  gusbase: The IO base address of the Gravis Ultrasound.\n#           Possible values: 240, 220, 260, 280, 2a0, 2c0, 2e0, 300.\n#   gusirq: The IRQ number of the Gravis Ultrasound.\n#           Possible values: 5, 3, 7, 9, 10, 11, 12.\n#   gusdma: The DMA channel of the Gravis Ultrasound.\n#           Possible values: 3, 0, 1, 5, 6, 7.\n# ultradir: Path to Ultrasound directory. In this directory\n#           there should be a MIDI directory that contains\n#           the patch files for GUS playback. Patch sets used\n#           with Timidity should work fine.\n\ngus=false\ngusrate=44100\ngusbase=240\ngusirq=5\ngusdma=3\nultradir=C:\\ULTRASND\n\n[speaker]\n# pcspeaker: Enable PC-Speaker emulation.\n#    pcrate: Sample rate of the PC-Speaker sound generation.\n#            Possible values: 44100, 48000, 32000, 22050, 16000, 11025, 8000, 49716.\n#     tandy: Enable Tandy Sound System emulation. For 'auto', emulation is present only if machine is set to 'tandy'.\n#            Possible values: auto, on, off.\n# tandyrate: Sample rate of the Tandy 3-Voice generation.\n#            Possible values: 44100, 48000, 32000, 22050, 16000, 11025, 8000, 49716.\n#    disney: Enable Disney Sound Source emulation. (Covox Voice Master and Speech Thing compatible).\n\npcspeaker=true\npcrate=44100\ntandy=auto\ntandyrate=44100\ndisney=true\n\n[joystick]\n# joysticktype: Type of joystick to emulate: auto (default), none,\n#               2axis (supports two joysticks),\n#               4axis (supports one joystick, first joystick used),\n#               4axis_2 (supports one joystick, second joystick used),\n#               fcs (Thrustmaster), ch (CH Flightstick).\n#               none disables joystick emulation.\n#               auto chooses emulation depending on real joystick(s).\n#               (Remember to reset dosbox's mapperfile if you saved it earlier)\n#               Possible values: auto, 2axis, 4axis, 4axis_2, fcs, ch, none.\n#        timed: enable timed intervals for axis. Experiment with this option, if your joystick drifts (away).\n#     autofire: continuously fires as long as you keep the button pressed.\n#       swap34: swap the 3rd and the 4th axis. can be useful for certain joysticks.\n#   buttonwrap: enable button wrapping at the number of emulated buttons.\n\njoysticktype=auto\ntimed=true\nautofire=false\nswap34=false\nbuttonwrap=false\n\n[serial]\n# serial1: set type of device connected to com port.\n#          Can be disabled, dummy, modem, nullmodem, directserial.\n#          Additional parameters must be in the same line in the form of\n#          parameter:value. Parameter for all types is irq (optional).\n#          for directserial: realport (required), rxdelay (optional).\n#                           (realport:COM1 realport:ttyS0).\n#          for modem: listenport (optional).\n#          for nullmodem: server, rxdelay, txdelay, telnet, usedtr,\n#                         transparent, port, inhsocket (all optional).\n#          Example: serial1=modem listenport:5000\n#          Possible values: dummy, disabled, modem, nullmodem, directserial.\n# serial2: see serial1\n#          Possible values: dummy, disabled, modem, nullmodem, directserial.\n# serial3: see serial1\n#          Possible values: dummy, disabled, modem, nullmodem, directserial.\n# serial4: see serial1\n#          Possible values: dummy, disabled, modem, nullmodem, directserial.\n\nserial1=dummy\nserial2=dummy\nserial3=disabled\nserial4=disabled\n\n[dos]\n#            xms: Enable XMS support.\n#            ems: Enable EMS support.\n#            umb: Enable UMB support.\n# keyboardlayout: Language code of the keyboard layout (or none).\n\nxms=true\nems=true\numb=true\nkeyboardlayout=auto\n\n[ipx]\n# ipx: Enable ipx over UDP/IP emulation.\n\nipx=true\n[autoexec]\necho off\nmount c .\nc:\n\ntype jsdos~1/readme.txt\necho on\n\n# Generated using https://winebox.cloud\n#".replace(/\n/g, "\r\n")
	}, {
		"../../build": 1,
		"../../http": 6,
		"../../libzip/libzip": 10
	}],
	3: [function(e, t, s) {
		"use strict";
		Object.defineProperty(s, "__esModule", {
			value: !0
		}), s.dosDirect = void 0;
		const o = e("../../../protocol/messages-queue");
		s.dosDirect = async function(e, t) {
			const s = new o.MessagesQueue;
			let i = s.handler.bind(s);
			const n = {
					postMessage: (e, t) => {
						i(e, t)
					}
				},
				r = e => {
					const s = e.data;
					"ws-sync-sleep" === s ? .name && s.props.sessionId === t && postMessage({
						name: "wc-sync-sleep",
						props: s.props
					}, "*")
				},
				a = {
					sessionId: t,
					sendMessageToServer: (e, t) => {
						n.messageHandler({
							data: {
								name: e,
								props: t
							}
						})
					},
					initMessageHandler: e => {
						i = e, s.sendTo(i)
					},
					exit: () => {
						"undefined" != typeof window && window.removeEventListener("message", r)
					}
				};
			return a.module = n, "undefined" != typeof window && window.addEventListener("message", r, {
				passive: !0
			}), await e.instantiate(n), n.callMain([t]), a
		}
	}, {
		"../../../protocol/messages-queue": 11
	}],
	4: [function(e, t, s) {
		"use strict";
		Object.defineProperty(s, "__esModule", {
			value: !0
		}), s.dosWorker = void 0;
		const o = e("../../../protocol/messages-queue");
		s.dosWorker = async function(e, t, s) {
			const i = new o.MessagesQueue;
			let n = i.handler.bind(i);
			const r = await fetch(e);
			if (200 !== r.status) throw new Error("Unable to download '" + e + "' (" + r.status + "): " + r.statusText);
			const a = URL.createObjectURL(await r.blob()),
				l = new Worker(a);
			l.onerror = e => {
				n("ws-err", {
					type: e.type,
					filename: e.filename,
					message: e.message
				})
			}, l.onmessage = e => {
				const t = e.data;
				void 0 !== t ? .name && n(t.name, t.props)
			}, await t.instantiate({});
			const d = {
				sessionId: s,
				sendMessageToServer: (e, t, s) => {
					s ? l.postMessage({
						name: e,
						props: t
					}, s) : l.postMessage({
						name: e,
						props: t
					})
				},
				initMessageHandler: e => {
					n = e, i.sendTo(n)
				},
				exit: () => {
					URL.revokeObjectURL(a), l.terminate()
				}
			};
			try {
				d.sendMessageToServer("wc-install", {
					module: t.wasmModule,
					sessionId: s
				})
			} catch (e) {
				d.sendMessageToServer("wc-install", {
					sessionId: s
				})
			}
			return d
		}
	}, {
		"../../../protocol/messages-queue": 11
	}],
	5: [function(e, t, s) {
		(function(t) {
			(function() {
				"use strict";
				var o = function(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				};
				Object.defineProperty(s, "__esModule", {
					value: !0
				}), s.NetworkType = void 0;
				const i = o(e("./impl/emulators-impl"));
				! function(e) {
					e[e.NETWORK_DOSBOX_IPX = 0] = "NETWORK_DOSBOX_IPX"
				}(s.NetworkType || (s.NetworkType = {})), "undefined" != typeof window && (window.emulators = i.default), void 0 !== t && (t.emulators = i.default)
			}).call(this)
		}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
	}, {
		"./impl/emulators-impl": 8
	}],
	6: [function(e, t, s) {
		"use strict";

		function o(e, t, s) {
			return (t = function(e) {
				var t = function(e, t) {
					if ("object" != typeof e || null === e) return e;
					var s = e[Symbol.toPrimitive];
					if (void 0 !== s) {
						var o = s.call(e, t || "default");
						if ("object" != typeof o) return o;
						throw new TypeError("@@toPrimitive must return a primitive value.")
					}
					return ("string" === t ? String : Number)(e)
				}(e, "string");
				return "symbol" == typeof t ? t : String(t)
			}(t)) in e ? Object.defineProperty(e, t, {
				value: s,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = s, e
		}
		Object.defineProperty(s, "__esModule", {
			value: !0
		}), s.httpRequest = void 0, s.httpRequest = function(e, t) {
			return new Promise(((s, o) => {
				new i(e, {...t,
					success: s,
					fail: e => {
						o(new Error(e))
					}
				})
			}))
		};
		class i {
			constructor(e, t) {
				if (o(this, "resource", void 0), o(this, "options", void 0), o(this, "xhr", null), o(this, "total", 0), o(this, "loaded", 0), this.resource = e, this.options = t, this.options.method = t.method || "GET", "GET" !== this.options.method) throw new Error("Method " + this.options.method + " is not supported");
				this.makeHttpRequest()
			}
			makeHttpRequest() {
				let e, t;
				this.xhr = new XMLHttpRequest, this.xhr.open(this.options.method || "GET", this.resource, !0), "POST" === this.options.method && this.xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), this.xhr.overrideMimeType("text/plain; charset=x-user-defined"), "function" == typeof(e = this.xhr).addEventListener && e.addEventListener("progress", (e => {
					if (this.total = e.total, this.loaded = e.loaded, this.options.progress) return this.options.progress(e.total, e.loaded)
				})), "function" == typeof(t = this.xhr).addEventListener && t.addEventListener("error", (() => {
					if (this.options.fail) return this.options.fail("Unalbe to download '" + this.resource + "', code: " + this.xhr.status), delete this.options.fail
				})), this.xhr.onreadystatechange = () => this.onReadyStateChange(), this.options.responseType && (this.xhr.responseType = this.options.responseType), this.xhr.send(this.options.data)
			}
			onReadyStateChange() {
				const e = this.xhr;
				if (4 === e.readyState)
					if (200 === e.status) {
						if (this.options.success) {
							const t = Math.max(this.total, this.loaded);
							return void 0 !== this.options.progress && this.options.progress(t, t), this.options.success(e.response)
						}
					} else if (this.options.fail) return this.options.fail("Unable to download '" + this.resource + "', code: " + e.status), delete this.options.fail
			}
		}
	}, {}],
	7: [function(e, t, s) {
		"use strict";

		function o(e, t, s) {
			return (t = function(e) {
				var t = function(e, t) {
					if ("object" != typeof e || null === e) return e;
					var s = e[Symbol.toPrimitive];
					if (void 0 !== s) {
						var o = s.call(e, t || "default");
						if ("object" != typeof o) return o;
						throw new TypeError("@@toPrimitive must return a primitive value.")
					}
					return ("string" === t ? String : Number)(e)
				}(e, "string");
				return "symbol" == typeof t ? t : String(t)
			}(t)) in e ? Object.defineProperty(e, t, {
				value: s,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = s, e
		}
		Object.defineProperty(s, "__esModule", {
			value: !0
		}), s.CommandInterfaceEventsImpl = void 0;
		s.CommandInterfaceEventsImpl = class {
			constructor() {
				var e = this;
				o(this, "onStdoutConsumers", []), o(this, "delayedStdout", []), o(this, "onFrameSizeConsumers", []), o(this, "onFrameConsumers", []), o(this, "onSoundPushConsumers", []), o(this, "onExitConsumers", []), o(this, "onMessageConsumers", []), o(this, "delayedMessages", []), o(this, "onNetworkConnectedConsumers", []), o(this, "onNetworkDisconnectedConsumers", []), o(this, "onStdout", (e => {
					if (this.onStdoutConsumers.push(e), 1 === this.onStdoutConsumers.length) {
						for (const e of this.delayedStdout) this.fireStdout(e);
						this.delayedStdout = []
					}
				})), o(this, "onFrameSize", (e => {
					this.onFrameSizeConsumers.push(e)
				})), o(this, "onFrame", (e => {
					this.onFrameConsumers.push(e)
				})), o(this, "onSoundPush", (e => {
					this.onSoundPushConsumers.push(e)
				})), o(this, "onExit", (e => {
					this.onExitConsumers.push(e)
				})), o(this, "onMessage", (e => {
					if (this.onMessageConsumers.push(e), 1 === this.onMessageConsumers.length) {
						for (const t of this.delayedMessages) e(t.msgType, ...t.args);
						this.delayedMessages = []
					}
				})), o(this, "fireStdout", (e => {
					if (0 !== this.onStdoutConsumers.length)
						for (const t of this.onStdoutConsumers) t(e);
					else this.delayedStdout.push(e)
				})), o(this, "fireFrameSize", ((e, t) => {
					for (const s of this.onFrameSizeConsumers) s(e, t)
				})), o(this, "fireFrame", ((e, t) => {
					for (const s of this.onFrameConsumers) s(e, t)
				})), o(this, "fireSoundPush", (e => {
					for (const t of this.onSoundPushConsumers) t(e)
				})), o(this, "fireExit", (() => {
					for (const e of this.onExitConsumers) e();
					this.onStdoutConsumers = [], this.onFrameSizeConsumers = [], this.onFrameConsumers = [], this.onSoundPushConsumers = [], this.onExitConsumers = [], this.onMessageConsumers = []
				})), o(this, "fireMessage", (function(t) {
					for (var s = arguments.length, o = new Array(s > 1 ? s - 1 : 0), i = 1; i < s; i++) o[i - 1] = arguments[i];
					if (0 !== e.onMessageConsumers.length)
						for (const s of e.onMessageConsumers) s(t, ...o);
					else e.delayedMessages.push({
						msgType: t,
						args: o
					})
				})), o(this, "fireNetworkConnected", ((e, t) => {
					for (const s of this.onNetworkConnectedConsumers) s(e, t)
				})), o(this, "fireNetworkDisconnected", (e => {
					for (const t of this.onNetworkDisconnectedConsumers) t(e)
				}))
			}
			onNetworkConnected(e) {
				this.onNetworkConnectedConsumers.push(e)
			}
			onNetworkDisconnected(e) {
				this.onNetworkDisconnectedConsumers.push(e)
			}
		}
	}, {}],
	8: [function(e, t, s) {
		"use strict";

		function o(e, t, s) {
			return (t = function(e) {
				var t = function(e, t) {
					if ("object" != typeof e || null === e) return e;
					var s = e[Symbol.toPrimitive];
					if (void 0 !== s) {
						var o = s.call(e, t || "default");
						if ("object" != typeof o) return o;
						throw new TypeError("@@toPrimitive must return a primitive value.")
					}
					return ("string" === t ? String : Number)(e)
				}(e, "string");
				return "symbol" == typeof t ? t : String(t)
			}(t)) in e ? Object.defineProperty(e, t, {
				value: s,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = s, e
		}
		var i = function(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		};
		Object.defineProperty(s, "__esModule", {
			value: !0
		});
		const n = e("../build"),
			r = e("./modules"),
			a = i(e("../dos/bundle/dos-bundle")),
			l = e("../dos/dosbox/ts/direct"),
			d = e("../dos/dosbox/ts/worker"),
			u = e("../protocol/protocol"),
			h = i(e("../libzip/libzip"));
		const c = new class {
			constructor() {
				o(this, "pathPrefix", ""), o(this, "version", n.Build.version), o(this, "wdosboxJs", "wdosbox.js"), o(this, "wdosboxxJs", "wdosbox-x.js"), o(this, "wasmModulesPromise", void 0)
			}
			async bundle() {
				const e = await this.wasmModules(),
					t = await e.libzip();
				return new a.default(t)
			}
			async bundleConfig(e) {
				const t = await this.wasmModules(),
					s = await t.libzip(),
					o = {};
				await s.instantiate(o);
				const i = new h.default(o);
				try {
					i.zipToFs(e, "/", ".jsdos/");
					try {
						const e = await i.readFile(".jsdos/dosbox.conf");
						try {
							const t = await i.readFile(".jsdos/jsdos.json");
							return {
								dosboxConf: e,
								jsdosConf: JSON.parse(t)
							}
						} catch (e) {}
						return {
							dosboxConf: e,
							jsdosConf: {
								version: n.Build.version
							}
						}
					} catch (e) {}
					return null
				} finally {
					i.destroy()
				}
			}
			async bundleUpdateConfig(e, t) {
				const s = await this.wasmModules(),
					o = await s.libzip(),
					i = {};
				await o.instantiate(i);
				const n = new h.default(i);
				try {
					return await n.writeFile("bundle.zip", e), await n.writeFile(".jsdos/dosbox.conf", t.dosboxConf), await n.writeFile(".jsdos/jsdos.json", JSON.stringify(t.jsdosConf)), await n.zipAddFile("bundle.zip", ".jsdos/jsdos.json"), await n.zipAddFile("bundle.zip", ".jsdos/dosbox.conf"), await n.readFile("bundle.zip", "binary")
				} finally {
					n.destroy()
				}
			}
			async dosboxNode(e, t) {
				return this.dosboxDirect(e, t)
			}
			async dosboxDirect(e, t) {
				const s = await this.wasmModules(),
					o = await s.dosbox(),
					i = await (0, l.dosDirect)(o, "session-" + Date.now());
				return this.backend(e, i, t)
			}
			async dosboxWorker(e, t) {
				const s = await this.wasmModules(),
					o = await s.dosbox(),
					i = await (0, d.dosWorker)(this.pathPrefix + this.wdosboxJs, o, "session-" + Date.now());
				return this.backend(e, i, t)
			}
			async dosboxXNode(e, t) {
				return this.dosboxXDirect(e, t)
			}
			async dosboxXDirect(e, t) {
				const s = await this.wasmModules(),
					o = await s.dosboxx(),
					i = await (0, l.dosDirect)(o, "session-" + Date.now());
				return this.backend(e, i, t)
			}
			async dosboxXWorker(e, t) {
				const s = await this.wasmModules(),
					o = await s.dosboxx(),
					i = await (0, d.dosWorker)(this.pathPrefix + this.wdosboxxJs, o, "session-" + Date.now());
				return this.backend(e, i, t)
			}
			async backend(e, t, s) {
				return new Promise(((o, i) => {
					const n = new u.CommandInterfaceOverTransportLayer(Array.isArray(e) ? e : [e], t, (e => {
						null !== e ? i(e) : setTimeout((() => o(n)), 4)
					}), s || {})
				}))
			}
			wasmModules() {
				if (void 0 !== this.wasmModulesPromise) return this.wasmModulesPromise;
				return this.wasmModulesPromise = (async() => new r.WasmModulesImpl(this.pathPrefix, this.wdosboxJs, this.wdosboxxJs))(), this.wasmModulesPromise
			}
			async dosDirect(e) {
				return this.dosboxDirect(e)
			}
			async dosWorker(e) {
				return this.dosboxWorker(e)
			}
		};
		s.default = c
	}, {
		"../build": 1,
		"../dos/bundle/dos-bundle": 2,
		"../dos/dosbox/ts/direct": 3,
		"../dos/dosbox/ts/worker": 4,
		"../libzip/libzip": 10,
		"../protocol/protocol": 12,
		"./modules": 9
	}],
	9: [function(e, t, s) {
		"use strict";

		function o(e, t, s) {
			return (t = function(e) {
				var t = function(e, t) {
					if ("object" != typeof e || null === e) return e;
					var s = e[Symbol.toPrimitive];
					if (void 0 !== s) {
						var o = s.call(e, t || "default");
						if ("object" != typeof o) return o;
						throw new TypeError("@@toPrimitive must return a primitive value.")
					}
					return ("string" === t ? String : Number)(e)
				}(e, "string");
				return "symbol" == typeof t ? t : String(t)
			}(t)) in e ? Object.defineProperty(e, t, {
				value: s,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = s, e
		}
		Object.defineProperty(s, "__esModule", {
			value: !0
		}), s.loadWasmModule = s.WasmModulesImpl = s.host = void 0;
		const i = e("../http");
		s.host = new class {
			constructor() {
				if (o(this, "wasmSupported", !1), o(this, "globals", void 0), this.globals = "undefined" == typeof window ? {} : window, this.globals.module || (this.globals.module = {}), this.globals.exports || (this.globals.exports = {}), this.globals.compiled || (this.globals.compiled = {}), "object" == typeof WebAssembly && "function" == typeof WebAssembly.instantiate && "function" == typeof WebAssembly.compile) {
					const e = new WebAssembly.Module(Uint8Array.of(0, 97, 115, 109, 1, 0, 0, 0));
					e instanceof WebAssembly.Module && (this.wasmSupported = new WebAssembly.Instance(e) instanceof WebAssembly.Instance)
				}
				Math.imul && -5 === Math.imul(4294967295, 5) || (Math.imul = function(e, t) {
					const s = 65535 & e,
						o = 65535 & t;
					return s * o + ((e >>> 16) * o + s * (t >>> 16) << 16) | 0
				}), Math.imul = Math.imul, Math.fround || (Math.fround = function(e) {
					return e
				}), Math.fround = Math.fround, Math.clz32 || (Math.clz32 = function(e) {
					e >>>= 0;
					for (let t = 0; t < 32; t++)
						if (e & 1 << 31 - t) return t;
					return 32
				}), Math.clz32 = Math.clz32, Math.trunc || (Math.trunc = function(e) {
					return e < 0 ? Math.ceil(e) : Math.floor(e)
				}), Math.trunc = Math.trunc
			}
		};

		function n(t, o, n) {
			return "undefined" == typeof XMLHttpRequest ? function(t, o, i) {
				if (void 0 !== s.host.globals.compiled[o]) return s.host.globals.compiled[o];
				const n = e(t),
					a = Promise.resolve(new r(n));
				o && (s.host.globals.compiled[o] = a);
				return a
			}(t, o) : function(e, t, o) {
				if (void 0 !== s.host.globals.compiled[t]) return s.host.globals.compiled[t];
				async function n() {
					const n = e.lastIndexOf("/"),
						r = e.indexOf("w", n),
						l = r === n + 1 && r >= 0;
					if (!s.host.wasmSupported || !l) throw new Error("Starting from js-dos 6.22.60 js environment is not supported");
					const d = e.substr(0, e.lastIndexOf(".js")) + ".wasm",
						u = (0, i.httpRequest)(d, {
							responseType: "arraybuffer",
							progress: (t, s) => {
								o("Resolving DosBox (" + e + ")", t, s)
							}
						}),
						h = (0, i.httpRequest)(e, {
							progress: (e, t) => {
								o("Resolving DosBox", e, t)
							}
						}),
						[c, m] = await Promise.all([u, h]),
						f = await WebAssembly.compile(c),
						p = (e, t) => {
							e.env = e.env || {}, WebAssembly.instantiate(f, e).then((e => t(e, f)))
						};
					return eval.call(window, m), s.host.globals.exports[t] = s.host.globals.module.exports, new a(f, s.host.globals.exports[t], p)
				}
				const r = n();
				t && (s.host.globals.compiled[t] = r);
				return r
			}(t, o, n)
		}
		s.WasmModulesImpl = class {
			constructor(e, t, s) {
				o(this, "pathPrefix", void 0), o(this, "wdosboxJs", void 0), o(this, "wdosboxxJs", void 0), o(this, "libzipPromise", void 0), o(this, "dosboxPromise", void 0), o(this, "dosboxxPromise", void 0), o(this, "wasmSupported", !1), e.length > 0 && "/" !== e[e.length - 1] && (e += "/"), this.pathPrefix = e, this.wdosboxJs = t, this.wdosboxxJs = s
			}
			libzip() {
				return void 0 !== this.libzipPromise || (this.libzipPromise = this.loadModule(this.pathPrefix + "wlibzip.js", "WLIBZIP")), this.libzipPromise
			}
			dosbox() {
				return void 0 !== this.dosboxPromise || (this.dosboxPromise = this.loadModule(this.pathPrefix + this.wdosboxJs, "WDOSBOX")), this.dosboxPromise
			}
			dosboxx() {
				return void 0 !== this.dosboxxPromise || (this.dosboxxPromise = this.loadModule(this.pathPrefix + this.wdosboxxJs, "WDOSBOXX")), this.dosboxxPromise
			}
			loadModule(e, t) {
				return n(e, t, (() => {}))
			}
		}, s.loadWasmModule = n;
		class r {
			constructor(e) {
				o(this, "emModule", void 0), this.emModule = e
			}
			instantiate(e) {
				return new Promise((t => {
					e.onRuntimeInitialized = () => {
						t()
					}, new this.emModule(e)
				}))
			}
		}
		class a {
			constructor(e, t, s) {
				o(this, "wasmModule", void 0), o(this, "module", void 0), o(this, "instantiateWasm", void 0), this.wasmModule = e, this.module = t, this.instantiateWasm = s
			}
			instantiate(e) {
				return new Promise((t => {
					e.instantiateWasm = this.instantiateWasm, e.onRuntimeInitialized = () => {
						t()
					}, new this.module(e)
				}))
			}
		}
	}, {
		"../http": 6
	}],
	10: [function(e, t, s) {
		"use strict";

		function o(e, t, s) {
			return (t = function(e) {
				var t = function(e, t) {
					if ("object" != typeof e || null === e) return e;
					var s = e[Symbol.toPrimitive];
					if (void 0 !== s) {
						var o = s.call(e, t || "default");
						if ("object" != typeof o) return o;
						throw new TypeError("@@toPrimitive must return a primitive value.")
					}
					return ("string" === t ? String : Number)(e)
				}(e, "string");
				return "symbol" == typeof t ? t : String(t)
			}(t)) in e ? Object.defineProperty(e, t, {
				value: s,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = s, e
		}
		Object.defineProperty(s, "__esModule", {
			value: !0
		});
		s.default = class {
			constructor(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/home/web_user";
				o(this, "module", void 0), o(this, "home", void 0), this.module = e, this.home = t, this.module.callMain([]), this.module.FS.ignorePermissions = !0, this.chdirToHome()
			}
			zipFromFs() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
				this.chdirToHome();
				const t = this.module._zip_from_fs(e);
				if (0 === t) return Promise.reject(new Error("Can't create zip, see more info in logs"));
				const s = this.module.HEAPU32[t / 4],
					o = this.module.HEAPU8.slice(t + 4, t + 4 + s);
				return this.module._free(t), Promise.resolve(o)
			}
			zipToFs(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/",
					s = arguments.length > 2 ? arguments[2] : void 0;
				const o = this.module;
				t = this.normalizeFilename(t);
				const i = this.normalizeFilename(t).split("/");
				this.createPath(i, 0, i.length), this.chdir(t);
				const n = void 0 !== s && s.length > 0;
				let r = 0;
				if (n) {
					const e = o.lengthBytesUTF8(s) + 1;
					r = o._malloc(e), o.stringToUTF8(s, r, e)
				}
				const a = new Uint8Array(e),
					l = o._malloc(a.length);
				o.HEAPU8.set(a, l);
				const d = o._zip_to_fs(l, a.length, r);
				return o._free(l), this.chdirToHome(), n && o._free(r), 0 === d ? Promise.resolve() : Promise.reject(new Error("Can't extract zip, retcode " + d + ", see more info in logs"))
			}
			writeFile(e, t) {
				e = this.normalizeFilename(e), t instanceof ArrayBuffer && (t = new Uint8Array(t));
				const s = e.split("/");
				if (0 === s.length) throw new Error("Can't create file '" + e + "', because it's not valid file path");
				const o = s[s.length - 1].trim();
				if (0 === o.length) throw new Error("Can't create file '" + e + "', because file name is empty");
				const i = this.createPath(s, 0, s.length - 1);
				this.module.FS.writeFile(i + "/" + o, t)
			}
			async readFile(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "utf8";
				return e = this.normalizeFilename(e), this.module.FS.readFile(e, {
					encoding: t
				})
			}
			exists(e) {
				e = this.normalizeFilename(e);
				try {
					return this.module.FS.lookupPath(e), !0
				} catch (e) {
					return !1
				}
			}
			destroy() {
				try {
					this.module._libzip_destroy()
				} catch (e) {
					return e
				}
			}
			normalizeFilename(e) {
				for (e = e.replace(new RegExp("^[a-zA-z]+:"), "").replace(new RegExp("\\\\", "g"), "/");
					"/" === e[0];) e = e.substr(1);
				return e
			}
			createPath(e, t, s) {
				let o = ".";
				for (let i = t; i < s; ++i) {
					const t = e[i].trim();
					0 !== t.length && (this.module.FS.createPath(o, t, !0, !0), o = o + "/" + t)
				}
				return o
			}
			chdirToHome() {
				this.module.FS.chdir(this.home)
			}
			chdir(e) {
				this.module.FS.chdir(this.home + "/" + e)
			}
			async zipAddFile(e, t) {
				const s = this.module,
					o = s.lengthBytesUTF8(e) + 1,
					i = s._malloc(o);
				s.stringToUTF8(e, i, o);
				const n = s.lengthBytesUTF8(t) + 1,
					r = s._malloc(n);
				s.stringToUTF8(t, r, n);
				const a = this.module._zipfile_add(i, r, r);
				if (s._free(i), s._free(r), 0 !== a) throw new Error("Unable to add " + t + " into " + e)
			}
		}
	}, {}],
	11: [function(e, t, s) {
		"use strict";

		function o(e, t, s) {
			return (t = function(e) {
				var t = function(e, t) {
					if ("object" != typeof e || null === e) return e;
					var s = e[Symbol.toPrimitive];
					if (void 0 !== s) {
						var o = s.call(e, t || "default");
						if ("object" != typeof o) return o;
						throw new TypeError("@@toPrimitive must return a primitive value.")
					}
					return ("string" === t ? String : Number)(e)
				}(e, "string");
				return "symbol" == typeof t ? t : String(t)
			}(t)) in e ? Object.defineProperty(e, t, {
				value: s,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = s, e
		}
		Object.defineProperty(s, "__esModule", {
			value: !0
		}), s.MessagesQueue = void 0;
		s.MessagesQueue = class {
			constructor() {
				o(this, "messages", [])
			}
			handler(e, t) {
				this.messages.push({
					name: e,
					props: t
				})
			}
			sendTo(e) {
				for (const t of this.messages) e(t.name, t.props);
				this.messages = []
			}
		}
	}, {}],
	12: [function(e, t, s) {
		"use strict";

		function o(e, t, s) {
			return (t = function(e) {
				var t = function(e, t) {
					if ("object" != typeof e || null === e) return e;
					var s = e[Symbol.toPrimitive];
					if (void 0 !== s) {
						var o = s.call(e, t || "default");
						if ("object" != typeof o) return o;
						throw new TypeError("@@toPrimitive must return a primitive value.")
					}
					return ("string" === t ? String : Number)(e)
				}(e, "string");
				return "symbol" == typeof t ? t : String(t)
			}(t)) in e ? Object.defineProperty(e, t, {
				value: s,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = s, e
		}
		Object.defineProperty(s, "__esModule", {
			value: !0
		}), s.CommandInterfaceOverTransportLayer = void 0;
		const i = e("../impl/ci-impl"),
			n = 4194304;
		s.CommandInterfaceOverTransportLayer = class {
			constructor(e, t, s, n) {
				o(this, "startedAt", Date.now()), o(this, "exited", !1), o(this, "frameWidth", 0), o(this, "frameHeight", 0), o(this, "rgb", null), o(this, "rgba", null), o(this, "freq", 0), o(this, "utf8Decoder", new TextDecoder), o(this, "init", void 0), o(this, "transport", void 0), o(this, "ready", void 0), o(this, "persistPromise", void 0), o(this, "persistResolve", void 0), o(this, "exitPromise", void 0), o(this, "exitResolve", void 0), o(this, "eventsImpl", new i.CommandInterfaceEventsImpl), o(this, "keyMatrix", {}), o(this, "configPromise", void 0), o(this, "configResolve", (() => {})), o(this, "panicMessages", []), o(this, "connectPromise", null), o(this, "connectResolve", (() => {})), o(this, "connectReject", (() => {})), o(this, "disconnectPromise", null), o(this, "disconnectResolve", (() => {})), o(this, "asyncifyStatsPromise", null), o(this, "asyncifyStatsResolve", (() => {})), o(this, "fsTreePromise", null), o(this, "fsTreeResolve", (() => {})), o(this, "fsGetFilePromise", {}), o(this, "fsGetFileResolve", {}), o(this, "fsGetFileParts", {}), o(this, "dataChunkPromise", {}), o(this, "dataChunkResolve", {}), o(this, "networkId", 0), o(this, "network", {}), o(this, "options", void 0), this.options = n, this.init = e, this.transport = t, this.ready = s, this.configPromise = new Promise((e => this.configResolve = e)), this.transport.initMessageHandler(this.onServerMessage.bind(this))
			}
			sendClientMessage(e, t, s) {
				(t = t || {}).sessionId = t.sessionId || this.transport.sessionId, this.transport.sendMessageToServer(e, t, s)
			}
			onServerMessage(e, t) {
				if (!(void 0 === e || e.length < 3 || "w" !== e[0] || "s" !== e[1] || "-" !== e[2]) && void 0 !== t && t.sessionId === this.transport.sessionId) switch (e) {
					case "ws-ready":
						{
							const e = async() => {
								if (!this.init || 0 === this.init.length) return;
								const e = new TextEncoder,
									t = async(e, t, s) => {
										await this.sendDataChunk({
											type: e,
											name: t,
											data: s.buffer
										}), await this.sendDataChunk({
											type: e,
											name: t,
											data: null
										})
									};
								let s = 0;
								for (const o of this.init)
									if (ArrayBuffer.isView(o)) await t("bundle", s + "", o), s++;
									else if ("string" == typeof o) await t("file", ".jsdos/dosbox.conf", e.encode(o));
								else {
									const s = o,
										i = o;
									void 0 !== i.jsdosConf ? .version ? (await t("file", ".jsdos/dosbox.conf", e.encode(i.dosboxConf)), await t("file", ".jsdos/jsdos.json", e.encode(JSON.stringify(i.jsdosConf, null, 2)))) : void 0 !== s.path ? await t("file", s.path, s.contents) : console.error("Unknown init part", o)
								}
							};e().then((() => {
								this.sendClientMessage("wc-run", {
									token: this.options.token
								})
							})).catch((e => {
								this.onErr("panic", "Can't send bundles to backend: " + e.message), console.error(e)
							})).finally((() => {
								delete this.init
							}))
						}
						break;
					case "ws-server-ready":
						this.panicMessages.length > 0 ? (void 0 !== this.transport.exit && this.transport.exit(), this.ready(new Error(JSON.stringify(this.panicMessages)))) : this.ready(null), delete this.ready;
						break;
					case "ws-frame-set-size":
						this.onFrameSize(t.width, t.height);
						break;
					case "ws-update-lines":
						this.onFrameLines(t.lines, t.rgba);
						break;
					case "ws-exit":
						this.onExit();
						break;
					case "ws-log":
						this.onLog(t.tag, t.message);
						break;
					case "ws-warn":
						this.onWarn(t.tag, t.message);
						break;
					case "ws-err":
						this.onErr(t.tag, t.message);
						break;
					case "ws-stdout":
						this.onStdout(t.message);
						break;
					case "ws-persist":
						this.onPersist(t.bundle);
						break;
					case "ws-sound-init":
						this.onSoundInit(t.freq);
						break;
					case "ws-sound-push":
						this.onSoundPush(t.samples);
						break;
					case "ws-config":
						this.onConfig({
							dosboxConf: this.utf8Decoder.decode(t.dosboxConf),
							jsdosConf: JSON.parse(t.jsdosConf)
						});
						break;
					case "ws-sync-sleep":
						this.sendClientMessage("wc-sync-sleep", t);
						break;
					case "ws-connected":
						this.connectResolve(), this.connectPromise = null, this.connectResolve = () => {}, this.connectReject = () => {}, this.eventsImpl.fireNetworkConnected(t.networkType, t.address);
						break;
					case "ws-disconnected":
						null !== this.connectPromise ? (this.connectReject(), this.connectPromise = null, this.connectResolve = () => {}, this.connectReject = () => {}) : (this.disconnectResolve(), this.disconnectPromise = null, this.disconnectResolve = () => {}), this.eventsImpl.fireNetworkDisconnected(t.networkType);
						break;
					case "ws-extract-progress":
						this.options.onExtractProgress && this.options.onExtractProgress(t.index, t.file, t.extracted, t.count);
						break;
					case "ws-asyncify-stats":
						this.asyncifyStatsResolve(t), this.asyncifyStatsResolve = () => {}, this.asyncifyStatsPromise = null;
						break;
					case "ws-fs-tree":
						this.fsTreeResolve(t.fsTree), this.fsTreeResolve = () => {}, this.fsTreePromise = null;
						break;
					case "ws-send-data-chunk":
						{
							const e = t.chunk,
								s = this.dataChunkKey(e);
							if ("ok" === e.type) void 0 !== this.dataChunkPromise[s] && (this.dataChunkResolve[s](), delete this.dataChunkPromise[s], delete this.dataChunkResolve[s]);
							else if ("file" === e.type)
								if (null === e.data) {
									const t = this.mergeChunks(this.fsGetFileParts[e.name]);
									this.fsGetFileResolve[e.name](t), delete this.fsGetFilePromise[e.name], delete this.fsGetFileResolve[e.name]
								} else this.fsGetFileParts[e.name].push(new Uint8Array(e.data));
							else console.log("Unknown chunk type:", e.type)
						}
						break;
					case "ws-net-connect":
						{
							this.networkId += 1;
							const e = this.networkId,
								s = new WebSocket(t.address);s.binaryType = "arraybuffer",
							s.addEventListener("error", (e => {
								console.error("Can't connect to", t.address), this.sendClientMessage("wc-net-connected", {
									networkId: -1
								})
							})),
							s.addEventListener("open", (() => {
								this.network[e] = s, this.sendClientMessage("wc-net-connected", {
									networkId: e
								})
							})),
							s.addEventListener("message", (t => {
								this.sendClientMessage("wc-net-received", {
									networkId: e,
									data: t.data
								}, [t.data])
							}))
						}
						break;
					case "ws-net-send":
						{
							const e = this.network[t.networkId];e && e.send(t.data)
						}
						break;
					case "ws-net-disconnect":
						{
							const e = this.network[t.networkId];delete this.network[t.networkId],
							e && e.close()
						}
						break;
					default:
						console.log("Unknown server message (ws):", e)
				}
			}
			onConfig(e) {
				this.configResolve(e)
			}
			onFrameSize(e, t) {
				this.frameWidth === e && this.frameHeight === t || (this.frameWidth = e, this.frameHeight = t, this.rgb = new Uint8Array(e * t * 3), this.eventsImpl.fireFrameSize(e, t))
			}
			onFrameLines(e, t) {
				for (const t of e) this.rgb.set(t.heapu8, t.start * this.frameWidth * 3);
				this.eventsImpl.fireFrame(this.rgb, this.rgba)
			}
			onSoundInit(e) {
				this.freq = e
			}
			onSoundPush(e) {
				this.eventsImpl.fireSoundPush(e)
			}
			onLog(e, t) {
				this.eventsImpl.fireMessage("log", "[" + e + "]" + t)
			}
			onWarn(e, t) {
				this.eventsImpl.fireMessage("warn", "[" + e + "]" + t)
			}
			onErr(e, t) {
				"panic" === e && (this.panicMessages.push(t), console.error("[" + e + "]" + t)), this.eventsImpl.fireMessage("error", "[" + e + "]" + t)
			}
			onStdout(e) {
				this.eventsImpl.fireStdout(e)
			}
			config() {
				return this.configPromise
			}
			width() {
				return this.frameWidth
			}
			height() {
				return this.frameHeight
			}
			soundFrequency() {
				return this.freq
			}
			screenshot() {
				if (null !== this.rgb || null !== this.rgba) {
					const e = new Uint8ClampedArray(this.frameWidth * this.frameHeight * 4),
						t = null !== this.rgb ? this.rgb : this.rgba;
					let s = 0,
						o = 0;
					for (; o < e.length;) e[o++] = t[s++], e[o++] = t[s++], e[o++] = t[s++], e[o++] = 255, t.length === e.length && s++;
					return Promise.resolve(new ImageData(e, this.frameWidth, this.frameHeight))
				}
				return Promise.reject(new Error("No frame received"))
			}
			simulateKeyPress() {
				const e = Date.now() - this.startedAt;
				for (var t = arguments.length, s = new Array(t), o = 0; o < t; o++) s[o] = arguments[o];
				s.forEach((t => this.addKey(t, !0, e))), s.forEach((t => this.addKey(t, !1, e + 16)))
			}
			sendKeyEvent(e, t) {
				this.addKey(e, t, Date.now() - this.startedAt)
			}
			addKey(e, t, s) {
				!0 === this.keyMatrix[e] !== t && (this.keyMatrix[e] = t, this.sendClientMessage("wc-add-key", {
					key: e,
					pressed: t,
					timeMs: s
				}))
			}
			sendMouseMotion(e, t) {
				this.sendClientMessage("wc-mouse-move", {
					x: e,
					y: t,
					relative: !1,
					timeMs: Date.now() - this.startedAt
				})
			}
			sendMouseRelativeMotion(e, t) {
				this.sendClientMessage("wc-mouse-move", {
					x: e,
					y: t,
					relative: !0,
					timeMs: Date.now() - this.startedAt
				})
			}
			sendMouseButton(e, t) {
				this.sendClientMessage("wc-mouse-button", {
					button: e,
					pressed: t,
					timeMs: Date.now() - this.startedAt
				})
			}
			sendMouseSync() {
				this.sendClientMessage("wc-mouse-sync", {
					timeMs: Date.now() - this.startedAt
				})
			}
			sendBackendEvent(e) {
				this.sendClientMessage("wc-backend-event", {
					json: JSON.stringify(e)
				})
			}
			persist(e) {
				if (void 0 !== this.persistPromise) return this.persistPromise;
				const t = new Promise((e => {
					this.persistResolve = e
				}));
				return this.persistPromise = t, this.sendClientMessage("wc-pack-fs-to-bundle", {
					onlyChanges: !1 !== e
				}), t
			}
			onPersist(e) {
				this.persistResolve && (this.persistResolve(e), delete this.persistPromise, delete this.persistResolve)
			}
			pause() {
				this.sendClientMessage("wc-pause")
			}
			resume() {
				this.sendClientMessage("wc-resume")
			}
			mute() {
				this.sendClientMessage("wc-mute")
			}
			unmute() {
				this.sendClientMessage("wc-unmute")
			}
			exit() {
				if (this.exited) return Promise.resolve();
				if (void 0 !== this.exitPromise) return this.exitPromise;
				this.exitPromise = new Promise((e => this.exitResolve = e)), this.exitPromise.then((() => {
					this.events().fireExit()
				})), this.resume();
				for (const e of Object.values(this.network)) e.close();
				return this.network = {}, this.sendClientMessage("wc-exit"), this.exitPromise
			}
			onExit() {
				this.exited || (this.exited = !0, void 0 !== this.transport.exit && this.transport.exit(), this.exitResolve && (this.exitResolve(), delete this.exitPromise, delete this.exitResolve))
			}
			events() {
				return this.eventsImpl
			}
			networkConnect(e, t) {
				return null !== this.connectPromise || null !== this.disconnectPromise ? Promise.reject(new Error("Already prefoming connection or disconnection...")) : (this.connectPromise = new Promise(((s, o) => {
					t.startsWith("wss://") || t.startsWith("ws://") || (t = ("http:" === window.location.protocol ? "ws://" : "wss://") + t), this.connectResolve = s, this.connectReject = o, this.sendClientMessage("wc-connect", {
						networkType: e,
						address: t
					})
				})), this.connectPromise)
			}
			networkDisconnect(e) {
				return null !== this.connectPromise || null !== this.disconnectPromise ? Promise.reject(new Error("Already prefoming connection or disconnection...")) : (this.disconnectPromise = new Promise((t => {
					this.disconnectResolve = t, this.sendClientMessage("wc-disconnect", {
						networkType: e
					})
				})), this.disconnectPromise)
			}
			asyncifyStats() {
				if (null !== this.asyncifyStatsPromise) return this.asyncifyStatsPromise;
				const e = new Promise((e => {
					this.asyncifyStatsResolve = e
				}));
				return this.asyncifyStatsPromise = e, this.sendClientMessage("wc-asyncify-stats", {}), e
			}
			fsTree() {
				if (null !== this.fsTreePromise) return this.fsTreePromise;
				const e = new Promise((e => {
					this.fsTreeResolve = e
				}));
				return this.fsTreePromise = e, this.sendClientMessage("wc-fs-tree"), e
			}
			async fsReadFile(e) {
				if (void 0 !== this.fsGetFilePromise[e]) throw new Error("fsGetFile should not be called twice for same file");
				const t = new Promise((t => {
					this.fsGetFileResolve[e] = t
				}));
				return this.fsGetFilePromise[e] = t, this.fsGetFileParts[e] = [], this.sendClientMessage("wc-fs-get-file", {
					file: e
				}), t
			}
			async fsWriteFile(e, t) {
				if (ArrayBuffer.isView(t)) await this.sendDataChunk({
					type: "file",
					name: e,
					data: t.buffer
				});
				else {
					const s = t.getReader();
					for (;;) {
						const t = await s.read();
						if (void 0 !== t.value && await this.sendDataChunk({
								type: "file",
								name: e,
								data: t.value.buffer
							}), t.done) break
					}
				}
				await this.sendDataChunk({
					type: "file",
					name: e,
					data: null
				})
			}
			async fsDeleteFile(e) {
				throw new Error("not implemented")
			}
			async sendDataChunk(e) {
				if (null === e.data || e.data.byteLength <= n) return this.sendFullDataChunk(e); {
					let t = 0;
					for (; t < e.data.byteLength;) await this.sendFullDataChunk({
						type: e.type,
						name: e.name,
						data: e.data.slice(t, Math.min(e.data.byteLength, t + n))
					}), t += n
				}
			}
			async sendFullDataChunk(e) {
				const t = this.dataChunkKey(e);
				if (void 0 !== this.dataChunkPromise[t]) throw new Error("sendDataChunk should be accepted before sending new one");
				const s = new Promise((e => {
					this.dataChunkResolve[t] = e
				}));
				return this.dataChunkPromise[t] = s, this.sendClientMessage("wc-send-data-chunk", {
					chunk: e
				}, null === e.data ? void 0 : [e.data]), s
			}
			dataChunkKey(e) {
				return e.name
			}
			mergeChunks(e) {
				if (1 === e.length) return e[0];
				let t = 0;
				for (const s of e) t += s.byteLength;
				const s = new Uint8Array(t);
				t = 0;
				for (const o of e) s.set(o, t), t += o.byteLength;
				return s
			}
		}
	}, {
		"../impl/ci-impl": 7
	}]
}, {}, [5]);
//# sourceMappingURL=emulators.js.map