var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_fs = __toESM(require("fs"), 1);
var import_vite = require("vite");
var app = (0, import_express.default)();
var PORT = 3e3;
app.use(import_express.default.json());
var DATA_DIR = import_path.default.join(process.cwd(), "data");
var DB_FILE = import_path.default.join(DATA_DIR, "cloud_db.json");
if (!import_fs.default.existsSync(DATA_DIR)) {
  import_fs.default.mkdirSync(DATA_DIR, { recursive: true });
}
var initialSeedData = {
  saves: {},
  leaderboards: {
    global: [
      { id: "g1", userId: "bot_retro", username: "PixelMaster_99", score: 14850, level: 12, skinId: "cyber_ronin", date: "2026-09-18" },
      { id: "g2", userId: "bot_jump", username: "ShadowJumper", score: 11200, level: 9, skinId: "shadow_ninja", date: "2026-09-19" },
      { id: "g3", userId: "bot_valk", username: "AuraKnight", score: 9800, level: 8, skinId: "solar_valkyrie", date: "2026-09-19" },
      { id: "g4", userId: "bot_speed", username: "NeonDash", score: 7950, level: 6, skinId: "chrono_glitcher", date: "2026-09-20" },
      { id: "g5", userId: "bot_slime", username: "BounceKing", score: 6200, level: 5, skinId: "slime_suit", date: "2026-09-20" },
      { id: "g6", userId: "bot_arcade", username: "RetroBoy89", score: 4800, level: 4, skinId: "retro_boy", date: "2026-09-20" }
    ],
    daily: {}
  },
  events: [
    {
      id: "ev1",
      title: "\u{1F525} \xA1Oferta Rel\xE1mpago en Aspecto!",
      body: "El aspecto 'Cyber Ronin' tiene 30% de descuento en la tienda por las pr\xF3ximas 24 horas.",
      tag: "OFERTA LIMITADA",
      date: (/* @__PURE__ */ new Date()).toISOString(),
      discountSkinId: "cyber_ronin",
      discountPercent: 30,
      endsAt: new Date(Date.now() + 864e5).toISOString()
    },
    {
      id: "ev2",
      title: "\u{1F3C6} Torneo Diario: Gravedad Baja",
      body: "El desaf\xEDo de hoy tiene f\xEDsica lunar. \xA1Consigue el doble de puntos de altitud y corona el ranking!",
      tag: "DESAF\xCDO",
      date: (/* @__PURE__ */ new Date()).toISOString()
    },
    {
      id: "ev3",
      title: "\u26A1 Fin de Semana: Bot\xEDn Doble",
      body: "Todas las gemas recolectadas otorgan el doble de puntos para canjear en la tienda.",
      tag: "EVENTO ESPECIAL",
      date: (/* @__PURE__ */ new Date()).toISOString()
    }
  ]
};
function readDb() {
  try {
    if (import_fs.default.existsSync(DB_FILE)) {
      const data = import_fs.default.readFileSync(DB_FILE, "utf-8");
      return JSON.parse(data);
    }
  } catch (e) {
    console.error("Error reading cloud DB, initializing defaults", e);
  }
  writeDb(initialSeedData);
  return initialSeedData;
}
function writeDb(data) {
  try {
    import_fs.default.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), "utf-8");
  } catch (e) {
    console.error("Error writing cloud DB", e);
  }
}
readDb();
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: (/* @__PURE__ */ new Date()).toISOString() });
});
app.get("/api/cloud-save/:userId", (req, res) => {
  const { userId } = req.params;
  const db = readDb();
  if (db.saves[userId]) {
    res.json({ success: true, save: db.saves[userId] });
  } else {
    res.json({ success: false, message: "No cloud save found for this user ID" });
  }
});
app.post("/api/cloud-save", (req, res) => {
  const { userId, profileData } = req.body;
  if (!userId || !profileData) {
    return res.status(400).json({ success: false, error: "Missing userId or profileData" });
  }
  const db = readDb();
  db.saves[userId] = {
    ...profileData,
    lastSyncedAt: (/* @__PURE__ */ new Date()).toISOString()
  };
  writeDb(db);
  res.json({
    success: true,
    lastSyncedAt: db.saves[userId].lastSyncedAt
  });
});
app.get("/api/leaderboard", (req, res) => {
  const mode = req.query.mode || "global";
  const dateStr = req.query.date || (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  const db = readDb();
  if (mode === "daily") {
    const dailyScores = db.leaderboards.daily[dateStr] || [
      { id: "d1", userId: "bot_1", username: "SpeedyGonz", score: 8200, level: 7, skinId: "cyber_ronin", date: dateStr },
      { id: "d2", userId: "bot_2", username: "JumpMaster", score: 5400, level: 5, skinId: "solar_valkyrie", date: dateStr },
      { id: "d3", userId: "bot_3", username: "PixelFan", score: 3900, level: 4, skinId: "default_blue", date: dateStr }
    ];
    dailyScores.sort((a, b) => b.score - a.score);
    return res.json({ success: true, mode: "daily", date: dateStr, leaderboard: dailyScores });
  }
  const globalScores = [...db.leaderboards.global];
  globalScores.sort((a, b) => b.score - a.score);
  res.json({ success: true, mode: "global", leaderboard: globalScores.slice(0, 50) });
});
app.post("/api/leaderboard", (req, res) => {
  const { userId, username, score, level, skinId, mode, date } = req.body;
  if (!userId || score === void 0) {
    return res.status(400).json({ error: "Invalid payload" });
  }
  const db = readDb();
  const entry = {
    id: "lb_" + Date.now() + "_" + Math.random().toString(36).substring(2, 6),
    userId,
    username: username || "PixelRunner",
    score: Number(score),
    level: Number(level) || 1,
    skinId: skinId || "default_blue",
    date: date || (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
  };
  if (mode === "daily") {
    const today = entry.date;
    if (!db.leaderboards.daily[today]) {
      db.leaderboards.daily[today] = [];
    }
    db.leaderboards.daily[today].push(entry);
    db.leaderboards.daily[today].sort((a, b) => b.score - a.score);
    db.leaderboards.daily[today] = db.leaderboards.daily[today].slice(0, 50);
  } else {
    db.leaderboards.global.push(entry);
    db.leaderboards.global.sort((a, b) => b.score - a.score);
    db.leaderboards.global = db.leaderboards.global.slice(0, 100);
  }
  writeDb(db);
  res.json({ success: true, entry });
});
app.get("/api/daily-challenge", (_req, res) => {
  const todayStr = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  let seedNum = 0;
  for (let i = 0; i < todayStr.length; i++) {
    seedNum = (seedNum << 5) - seedNum + todayStr.charCodeAt(i);
    seedNum |= 0;
  }
  const absSeed = Math.abs(seedNum);
  const modifiers = [
    {
      id: "low_gravity",
      name: "Gravedad Cero / Lunar",
      desc: "Los saltos alcanzan 1.5x de altura y caes suavemente. \xA1Cuidado con el timing!",
      gravityFactor: 0.65,
      jumpFactor: 1.15,
      speedFactor: 1,
      rewardCoins: 350
    },
    {
      id: "fast_speed",
      name: "Hipervelocidad",
      desc: "La velocidad de movimiento aumenta un 35%. Reacciones de rayo necesarias.",
      gravityFactor: 1,
      jumpFactor: 1,
      speedFactor: 1.35,
      rewardCoins: 400
    },
    {
      id: "coin_rush",
      name: "Fiebre de Oro",
      desc: "El doble de monedas en el camino y los enemigos sueltan gemas al ser aplastados.",
      gravityFactor: 1,
      jumpFactor: 1,
      speedFactor: 1,
      rewardCoins: 500
    },
    {
      id: "one_hit",
      name: "Modo Superviviente",
      desc: "Solo tienes 1 coraz\xF3n. La m\xE1xima tensi\xF3n para los m\xE1s intr\xE9pidos.",
      gravityFactor: 1,
      jumpFactor: 1,
      speedFactor: 1,
      rewardCoins: 600
    }
  ];
  const modifier = modifiers[absSeed % modifiers.length];
  res.json({
    date: todayStr,
    seed: absSeed,
    modifier,
    targetScore: 3e3,
    dailyBonusPoints: 250
  });
});
app.get("/api/push-events", (_req, res) => {
  const db = readDb();
  res.json({ events: db.events });
});
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Pixel Leap 2D] Server running on http://localhost:${PORT}`);
  });
}
startServer().catch((err) => {
  console.error("Failed to start server:", err);
});
//# sourceMappingURL=server.cjs.map
