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
var import_dotenv = __toESM(require("dotenv"), 1);
var import_genai = require("@google/genai");
var import_vite = require("vite");
var import_meta = {};
import_dotenv.default.config();
var __filename = (0, import_url.fileURLToPath)(import_meta.url);
var __dirname = import_path.default.dirname(__filename);
var app = (0, import_express.default)();
var PORT = 3e3;
app.use(import_express.default.json({ limit: "5mb" }));
var mockLeaderboards = [
  { id: "1", name: "CyberViper", score: 148500, wave: 18, mode: "classic", accuracy: 89, cognitiveGrade: "S+", isFriend: false, date: "2026-09-08", avatarSeed: 1 },
  { id: "2", name: "RetroPhantom", score: 132400, wave: 16, mode: "classic", accuracy: 84, cognitiveGrade: "S", isFriend: true, date: "2026-09-09", avatarSeed: 2 },
  { id: "3", name: "NovaStrike", score: 119800, wave: 15, mode: "classic", accuracy: 81, cognitiveGrade: "A+", isFriend: true, date: "2026-09-07", avatarSeed: 3 },
  { id: "4", name: "PixelZero", score: 98400, wave: 13, mode: "classic", accuracy: 76, cognitiveGrade: "A", isFriend: false, date: "2026-09-08", avatarSeed: 4 },
  { id: "5", name: "Vortex90s", score: 86200, wave: 11, mode: "classic", accuracy: 72, cognitiveGrade: "B+", isFriend: false, date: "2026-09-06", avatarSeed: 5 },
  { id: "6", name: "SpeedDemon", score: 182e3, wave: 12, mode: "timeattack", accuracy: 92, cognitiveGrade: "S+", isFriend: true, date: "2026-09-09", avatarSeed: 6 },
  { id: "7", name: "ChronoDrift", score: 154e3, wave: 10, mode: "timeattack", accuracy: 86, cognitiveGrade: "S", isFriend: false, date: "2026-09-08", avatarSeed: 7 },
  { id: "8", name: "TwinBlasters", score: 215e3, wave: 20, mode: "coop", accuracy: 85, cognitiveGrade: "S+", isFriend: true, date: "2026-09-07", avatarSeed: 8 }
];
var asyncChallenges = [
  {
    id: "ch-alpha",
    creatorName: "RetroPhantom",
    title: "90s Gradius Formation Siege",
    targetScore: 75e3,
    targetWave: 8,
    mode: "classic",
    accuracyRequirement: 75,
    cognitiveProfile: "Reflejos Cin\xE9ticos Avanzados",
    seed: 1337,
    completions: 14,
    createdDate: "2026-09-08"
  },
  {
    id: "ch-beta",
    creatorName: "SpeedDemon",
    title: "Chrono Bullet-Hell Rush",
    targetScore: 9e4,
    targetWave: 6,
    mode: "timeattack",
    accuracyRequirement: 80,
    cognitiveProfile: "Adaptaci\xF3n Bajo Presi\xF3n Extrema",
    seed: 4242,
    completions: 9,
    createdDate: "2026-09-09"
  },
  {
    id: "ch-gamma",
    creatorName: "CyberViper",
    title: "Contra Alien Hive Protocol",
    targetScore: 11e4,
    targetWave: 12,
    mode: "classic",
    accuracyRequirement: 85,
    cognitiveProfile: "Precisi\xF3n T\xE1ctica y Evasi\xF3n Espacial",
    seed: 9999,
    completions: 4,
    createdDate: "2026-09-07"
  }
];
var cloudSaves = {};
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: (/* @__PURE__ */ new Date()).toISOString() });
});
app.get("/api/leaderboard", (req, res) => {
  const mode = req.query.mode || "classic";
  const friendsOnly = req.query.friends === "true";
  let results = mockLeaderboards.filter((entry) => entry.mode === mode);
  if (friendsOnly) {
    results = results.filter((entry) => entry.isFriend);
  }
  results.sort((a, b) => b.score - a.score);
  res.json({ success: true, count: results.length, data: results });
});
app.post("/api/leaderboard", (req, res) => {
  const { name, score, wave, mode, accuracy, cognitiveGrade, isFriend } = req.body;
  if (!name || typeof score !== "number") {
    res.status(400).json({ error: "Missing required fields" });
    return;
  }
  const newEntry = {
    id: `entry-${Date.now()}-${Math.floor(Math.random() * 1e3)}`,
    name: String(name).slice(0, 16),
    score,
    wave: wave || 1,
    mode: mode || "classic",
    accuracy: Math.min(100, Math.max(0, accuracy || 0)),
    cognitiveGrade: cognitiveGrade || "A",
    isFriend: Boolean(isFriend),
    date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
    avatarSeed: Math.floor(Math.random() * 8) + 1
  };
  mockLeaderboards.push(newEntry);
  res.json({ success: true, entry: newEntry });
});
app.get("/api/challenges", (_req, res) => {
  res.json({ success: true, data: asyncChallenges });
});
app.post("/api/challenges", (req, res) => {
  const { creatorName, title, targetScore, targetWave, mode, accuracyRequirement, cognitiveProfile } = req.body;
  const newChallenge = {
    id: `ch-${Date.now()}`,
    creatorName: creatorName || "Anonymous Pilot",
    title: title || "Desaf\xEDo As\xEDncrono Cl\xE1sico",
    targetScore: Number(targetScore) || 5e4,
    targetWave: Number(targetWave) || 5,
    mode: mode || "classic",
    accuracyRequirement: Number(accuracyRequirement) || 70,
    cognitiveProfile: cognitiveProfile || "Evasi\xF3n T\xE1ctica",
    seed: Math.floor(Math.random() * 9e4) + 1e4,
    completions: 0,
    createdDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
  };
  asyncChallenges.unshift(newChallenge);
  res.json({ success: true, challenge: newChallenge });
});
app.get("/api/cloud-save/:userId", (req, res) => {
  const { userId } = req.params;
  const save = cloudSaves[userId];
  if (!save) {
    res.json({ success: true, data: null, message: "No cloud save found for user" });
    return;
  }
  res.json({ success: true, data: save });
});
app.post("/api/cloud-save/sync", (req, res) => {
  const { userId, state } = req.body;
  if (!userId || !state) {
    res.status(400).json({ error: "userId and state are required" });
    return;
  }
  cloudSaves[userId] = {
    ...state,
    updatedAt: (/* @__PURE__ */ new Date()).toISOString()
  };
  res.json({ success: true, message: "Cloud save synchronized successfully", timestamp: cloudSaves[userId].updatedAt });
});
app.post("/api/cognitive-analysis", async (req, res) => {
  const { metrics, wave, score, accuracy, playDurationSeconds, mode } = req.body;
  const reactionMs = metrics?.avgReactionTimeMs || 280;
  const stressIndex = metrics?.stressIndex || 45;
  const evasionEfficiency = metrics?.evasionEfficiency || 78;
  const panicFiringRatio = metrics?.panicFiringRatio || 15;
  let archetype = "Piloto Equilibrado (Estilo Gradius)";
  let adaptationAdvice = "Mant\xE9n la cadencia r\xEDtmica en lugar de disparos en r\xE1faga continua.";
  let dynamicDifficultyTuning = {
    bulletSpeedMod: 1,
    alienCadenceMod: 1,
    powerupFrequencyMod: 1,
    suggestedLevelPattern: "Contra Wall Assault"
  };
  if (reactionMs < 240 && accuracy > 80) {
    archetype = "Estratega Hipercin\xE9tico (Estilo R-Type / Contra)";
    adaptationAdvice = "Tus reflejos superan el percentil 90. Incrementando densidad de proyectiles y patrones cruzados.";
    dynamicDifficultyTuning = {
      bulletSpeedMod: 1.18,
      alienCadenceMod: 1.25,
      powerupFrequencyMod: 0.9,
      suggestedLevelPattern: "Galaga Dive Sweeps"
    };
  } else if (panicFiringRatio > 40 || stressIndex > 65) {
    archetype = "Respondedor Bajo Tensi\xF3n (Estilo Space Invaders 1978)";
    adaptationAdvice = "Detectada sobrecarga sensorial. Desplegando drops de escudos cin\xE9ticos y ralentizando descenso.";
    dynamicDifficultyTuning = {
      bulletSpeedMod: 0.85,
      alienCadenceMod: 0.88,
      powerupFrequencyMod: 1.35,
      suggestedLevelPattern: "Space Invaders Classic Phalanx"
    };
  } else if (evasionEfficiency > 85) {
    archetype = "Maestro de Evasi\xF3n Vectorial (Estilo Asteroids / Defender)";
    adaptationAdvice = "Evasi\xF3n de impactos impecable. Los jefes emplear\xE1n barriles de l\xE1ser concentrado.";
    dynamicDifficultyTuning = {
      bulletSpeedMod: 1.1,
      alienCadenceMod: 1.15,
      powerupFrequencyMod: 1.05,
      suggestedLevelPattern: "Mega Man Hazard Surge"
    };
  }
  let aiNarrative = null;
  if (process.env.GEMINI_API_KEY) {
    try {
      const ai = new import_genai.GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const prompt = `Act\xFAa como la computadora t\xE1ctica de un videojuego arcade retro de los 90s.
Analiza la siguiente conducta cognitiva del piloto:
- Modo: ${mode}
- Puntuaci\xF3n: ${score}
- Oleada: ${wave}
- Precisi\xF3n: ${accuracy}%
- Tiempo de reacci\xF3n medio: ${reactionMs} ms
- \xCDndice de estr\xE9s: ${stressIndex}%
- Eficiencia de evasi\xF3n: ${evasionEfficiency}%
- Disparos de p\xE1nico: ${panicFiringRatio}%
- Arquetipo 90s: ${archetype}

Entrega una evaluaci\xF3n t\xE1ctico-cognitiva concisa (m\xE1ximo 3 frases) con jerga de arcade retro sci-fi (tipo SNES/Arcade 1994) explicando c\xF3mo el sistema adaptar\xE1 la dificultad para su pr\xF3xima oleada.`;
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt
      });
      if (response.text) {
        aiNarrative = response.text.trim();
      }
    } catch (err) {
      console.warn("Gemini cognitive debrief fallback to procedural narrative:", err);
    }
  }
  res.json({
    success: true,
    archetype,
    reactionMs,
    stressIndex,
    evasionEfficiency,
    panicFiringRatio,
    adaptationAdvice,
    dynamicDifficultyTuning,
    aiNarrative: aiNarrative || `TELEMETR\xCDA COGNITIVA ACTIVA: Patr\xF3n ${archetype} confirmado. Tiempo de respuesta ${reactionMs}ms detectado. Compensaci\xF3n algor\xEDtmica aplicada para la siguiente oleada de invasores.`
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
    app.get("*", (_req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Space Invaders Server] listening on http://0.0.0.0:${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
