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
var import_url = require("url");
var import_vite = require("vite");
var import_meta = {};
var __filename = (0, import_url.fileURLToPath)(import_meta.url);
var __dirname = import_path.default.dirname(__filename);
var app = (0, import_express.default)();
var PORT = 3e3;
app.use(import_express.default.json({ limit: "2mb" }));
var userCloudStorage = /* @__PURE__ */ new Map();
var globalLeaderboard = [
  { playerId: "bot-1", playerName: "DOH_SLAYER", score: 28450, round: 5, date: "2026-09-01" },
  { playerId: "bot-2", playerName: "ARCADE_KING", score: 22100, round: 4, date: "2026-09-03" },
  { playerId: "bot-3", playerName: "VAUS_PILOT", score: 18950, round: 4, date: "2026-09-05" },
  { playerId: "bot-4", playerName: "RETRO_STAR", score: 14200, round: 3, date: "2026-09-07" },
  { playerId: "bot-5", playerName: "BRICK_BREAKER", score: 9800, round: 2, date: "2026-09-08" }
];
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: (/* @__PURE__ */ new Date()).toISOString() });
});
app.post("/api/sync/save", (req, res) => {
  try {
    const data = req.body;
    if (!data || !data.playerId) {
      return res.status(400).json({ error: "playerId is required" });
    }
    data.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    userCloudStorage.set(data.playerId, data);
    if (data.highScore > 0) {
      const existingIdx = globalLeaderboard.findIndex((e) => e.playerId === data.playerId);
      if (existingIdx >= 0) {
        if (data.highScore > globalLeaderboard[existingIdx].score) {
          globalLeaderboard[existingIdx].score = data.highScore;
          globalLeaderboard[existingIdx].playerName = data.playerName || "PILOT";
          globalLeaderboard[existingIdx].round = Math.max(globalLeaderboard[existingIdx].round, data.maxRound || 1);
          globalLeaderboard[existingIdx].date = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
        }
      } else {
        globalLeaderboard.push({
          playerId: data.playerId,
          playerName: data.playerName || "PILOT",
          score: data.highScore,
          round: data.maxRound || 1,
          date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
        });
      }
      globalLeaderboard.sort((a, b) => b.score - a.score);
      globalLeaderboard = globalLeaderboard.slice(0, 20);
    }
    res.json({ success: true, savedAt: data.updatedAt });
  } catch (err) {
    res.status(500).json({ error: err.message || "Failed to save progress" });
  }
});
app.get("/api/sync/load/:playerId", (req, res) => {
  const { playerId } = req.params;
  const userRecord = userCloudStorage.get(playerId);
  if (!userRecord) {
    return res.status(404).json({ error: "Player cloud data not found" });
  }
  res.json({ success: true, data: userRecord });
});
app.get("/api/sync/leaderboard", (req, res) => {
  res.json({ leaderboard: globalLeaderboard });
});
app.post("/api/sync/leaderboard", (req, res) => {
  const { playerId, playerName, score, round } = req.body;
  if (!playerId || typeof score !== "number") {
    return res.status(400).json({ error: "Invalid score submission" });
  }
  const existingIdx = globalLeaderboard.findIndex((e) => e.playerId === playerId);
  if (existingIdx >= 0) {
    if (score > globalLeaderboard[existingIdx].score) {
      globalLeaderboard[existingIdx].score = score;
      globalLeaderboard[existingIdx].playerName = playerName || "PILOT";
      globalLeaderboard[existingIdx].round = round || 1;
      globalLeaderboard[existingIdx].date = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    }
  } else {
    globalLeaderboard.push({
      playerId,
      playerName: playerName || "PILOT",
      score,
      round: round || 1,
      date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
    });
  }
  globalLeaderboard.sort((a, b) => b.score - a.score);
  globalLeaderboard = globalLeaderboard.slice(0, 20);
  res.json({ success: true, leaderboard: globalLeaderboard });
});
async function start() {
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
    console.log(`Arkanoid Retro server running on port ${PORT}`);
  });
}
start();
//# sourceMappingURL=server.cjs.map
