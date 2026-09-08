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
app.use(import_express.default.json({ limit: "5mb" }));
var DATA_DIR = import_path.default.join(process.cwd(), "data");
var SAVES_FILE = import_path.default.join(DATA_DIR, "cloud_saves.json");
if (!import_fs.default.existsSync(DATA_DIR)) {
  import_fs.default.mkdirSync(DATA_DIR, { recursive: true });
}
var inMemorySaves = {};
try {
  if (import_fs.default.existsSync(SAVES_FILE)) {
    const data = import_fs.default.readFileSync(SAVES_FILE, "utf-8");
    inMemorySaves = JSON.parse(data);
  }
} catch (e) {
  console.warn("Failed to read cloud saves file, using fresh memory state:", e);
}
function persistToDisk() {
  try {
    import_fs.default.writeFileSync(SAVES_FILE, JSON.stringify(inMemorySaves, null, 2), "utf-8");
  } catch (err) {
    console.error("Error persisting saves to disk:", err);
  }
}
app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    backend: "Vulkan-Metal Retro Graphics Simulation Engine",
    time: (/* @__PURE__ */ new Date()).toISOString()
  });
});
app.get("/api/progress/:userId", (req, res) => {
  const { userId } = req.params;
  const userSave = inMemorySaves[userId];
  if (!userSave) {
    return res.status(404).json({
      found: false,
      message: "No cloud save found for this user"
    });
  }
  res.json({
    found: true,
    data: userSave
  });
});
app.post("/api/progress/:userId", (req, res) => {
  const { userId } = req.params;
  const payload = req.body;
  if (!payload) {
    return res.status(400).json({ error: "Missing progress payload" });
  }
  const existing = inMemorySaves[userId] || {};
  inMemorySaves[userId] = {
    ...existing,
    ...payload,
    userId,
    updatedAt: (/* @__PURE__ */ new Date()).toISOString()
  };
  persistToDisk();
  res.json({
    success: true,
    message: "Cloud progress successfully persisted",
    updatedAt: inMemorySaves[userId].updatedAt
  });
});
app.post("/api/cognitive/log", (req, res) => {
  const { userId, testData } = req.body;
  if (!userId || !testData) {
    return res.status(400).json({ error: "userId and testData required" });
  }
  const userSave = inMemorySaves[userId] || {
    userId,
    updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
    gameState: null,
    level: 1,
    unlockedLevel: 1,
    score: 0,
    lines: 0,
    cognitiveStats: {
      reactionTimes: [],
      averageReactionMs: 320,
      precisionScore: 100,
      handEyeIndex: 85,
      actionsPerMinute: 60,
      cognitiveFatigue: 0,
      totalTestsCompleted: 0
    }
  };
  const reactionTimes = [...userSave.cognitiveStats?.reactionTimes || [], testData.reactionMs].slice(-50);
  const avg = reactionTimes.length > 0 ? Math.round(reactionTimes.reduce((a, b) => a + b, 0) / reactionTimes.length) : 300;
  userSave.cognitiveStats = {
    reactionTimes,
    averageReactionMs: avg,
    precisionScore: Math.max(0, Math.min(100, testData.precisionScore ?? userSave.cognitiveStats?.precisionScore ?? 85)),
    handEyeIndex: Math.max(0, Math.min(100, testData.handEyeIndex ?? userSave.cognitiveStats?.handEyeIndex ?? 85)),
    actionsPerMinute: testData.actionsPerMinute ?? userSave.cognitiveStats?.actionsPerMinute ?? 60,
    cognitiveFatigue: testData.cognitiveFatigue ?? userSave.cognitiveStats?.cognitiveFatigue ?? 0,
    totalTestsCompleted: (userSave.cognitiveStats?.totalTestsCompleted || 0) + 1
  };
  userSave.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
  inMemorySaves[userId] = userSave;
  persistToDisk();
  res.json({
    success: true,
    stats: userSave.cognitiveStats
  });
});
app.get("/api/benchmark/ping", (req, res) => {
  res.json({
    serverTimestamp: Date.now(),
    status: "online"
  });
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
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
