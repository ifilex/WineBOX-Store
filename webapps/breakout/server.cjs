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
var import_vite = require("vite");
var cloudDatabase = /* @__PURE__ */ new Map();
cloudDatabase.set("VULKAN-PILOT-01", {
  userId: "VULKAN-PILOT-01",
  userName: "CyberAce_99",
  currentLevel: 18,
  highestLevelUnlocked: 24,
  score: 42800,
  lives: 3,
  highScore: 42800,
  cognitiveMetrics: {
    averageReactionTimeMs: 178,
    reactionTimeHistory: [195, 182, 175, 168, 172],
    accuracyPercentage: 91.4,
    anticipationScore: 88,
    totalHits: 412,
    perfectHits: 376,
    cognitiveGrade: "S",
    evaluatedSessions: 12
  },
  lastSavedAt: new Date(Date.now() - 36e5).toISOString()
});
cloudDatabase.set("METAL-REFLEX-02", {
  userId: "METAL-REFLEX-02",
  userName: "RetroVector",
  currentLevel: 14,
  highestLevelUnlocked: 16,
  score: 29500,
  lives: 2,
  highScore: 29500,
  cognitiveMetrics: {
    averageReactionTimeMs: 215,
    reactionTimeHistory: [230, 220, 210, 205],
    accuracyPercentage: 84.2,
    anticipationScore: 79.5,
    totalHits: 290,
    perfectHits: 244,
    cognitiveGrade: "A",
    evaluatedSessions: 8
  },
  lastSavedAt: new Date(Date.now() - 72e5).toISOString()
});
async function startServer() {
  const app = (0, import_express.default)();
  const PORT = 3e3;
  app.use(import_express.default.json({ limit: "2mb" }));
  app.get("/api/health", (_req, res) => {
    res.json({
      status: "ok",
      engine: "VulkanDOS-Engine-v2.4",
      renderer: "Metal/Vulkan Multiplatform RHI",
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    });
  });
  app.post("/api/cloud-save", (req, res) => {
    try {
      const body = req.body;
      if (!body.userId) {
        res.status(400).json({ error: "userId is required for cloud sync" });
        return;
      }
      const existing = cloudDatabase.get(body.userId);
      const updated = {
        userId: body.userId,
        userName: body.userName || existing?.userName || "Jugador",
        currentLevel: typeof body.currentLevel === "number" ? body.currentLevel : existing?.currentLevel || 1,
        highestLevelUnlocked: Math.max(body.highestLevelUnlocked || 1, existing?.highestLevelUnlocked || 1),
        score: typeof body.score === "number" ? body.score : existing?.score || 0,
        lives: typeof body.lives === "number" ? body.lives : existing?.lives || 3,
        highScore: Math.max(body.highScore || 0, body.score || 0, existing?.highScore || 0),
        cognitiveMetrics: body.cognitiveMetrics || existing?.cognitiveMetrics || {
          averageReactionTimeMs: 220,
          reactionTimeHistory: [],
          accuracyPercentage: 80,
          anticipationScore: 75,
          totalHits: 0,
          perfectHits: 0,
          cognitiveGrade: "B",
          evaluatedSessions: 1
        },
        lastSavedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      cloudDatabase.set(body.userId, updated);
      res.json({
        success: true,
        message: "Progreso sincronizado en la nube exitosamente",
        data: updated
      });
    } catch (err) {
      res.status(500).json({ error: err.message || "Failed to save cloud data" });
    }
  });
  app.get("/api/cloud-load/:userId", (req, res) => {
    const { userId } = req.params;
    const progress = cloudDatabase.get(userId);
    if (!progress) {
      res.status(404).json({
        found: false,
        message: "No se encontr\xF3 registro previo en la nube para este ID"
      });
      return;
    }
    res.json({
      found: true,
      data: progress
    });
  });
  app.get("/api/cloud-leaderboard", (_req, res) => {
    const list = Array.from(cloudDatabase.values()).map((item) => ({
      userId: item.userId,
      userName: item.userName,
      highestLevelUnlocked: item.highestLevelUnlocked,
      highScore: item.highScore,
      averageReactionTimeMs: item.cognitiveMetrics.averageReactionTimeMs,
      accuracyPercentage: item.cognitiveMetrics.accuracyPercentage,
      cognitiveGrade: item.cognitiveMetrics.cognitiveGrade,
      lastSavedAt: item.lastSavedAt
    })).sort((a, b) => b.highScore - a.highScore).slice(0, 20);
    res.json({ leaderboard: list });
  });
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
    console.log(`VulkanDOS Game Engine Server running on http://0.0.0.0:${PORT}`);
  });
}
startServer().catch((err) => {
  console.error("Error starting server:", err);
  process.exit(1);
});
//# sourceMappingURL=server.cjs.map
