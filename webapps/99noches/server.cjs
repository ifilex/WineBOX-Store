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
var app = (0, import_express.default)();
var PORT = 3e3;
app.use(import_express.default.json());
var cloudProfiles = /* @__PURE__ */ new Map();
var globalLeaderboard = [
  { id: "1", playerName: "PixelSurvivor", nightReached: 99, score: 154200, kills: 480, timeSurvivedSeconds: 3600, skin: "lumberjack_master", date: "2026-08-19" },
  { id: "2", playerName: "ForestGhost", nightReached: 84, score: 112e3, kills: 360, timeSurvivedSeconds: 2900, skin: "shadow_hunter", date: "2026-08-18" },
  { id: "3", playerName: "DonLe\xF1ador", nightReached: 71, score: 94500, kills: 290, timeSurvivedSeconds: 2400, skin: "retro_hero", date: "2026-08-17" },
  { id: "4", playerName: "NocheOscura", nightReached: 55, score: 68e3, kills: 210, timeSurvivedSeconds: 1950, skin: "hazmat", date: "2026-08-16" },
  { id: "5", playerName: "CampistaPro", nightReached: 42, score: 51200, kills: 160, timeSurvivedSeconds: 1500, skin: "classic", date: "2026-08-15" },
  { id: "6", playerName: "LoboSolitario", nightReached: 33, score: 39e3, kills: 120, timeSurvivedSeconds: 1200, skin: "classic", date: "2026-08-14" }
];
var dailyLeaderboard = [
  { id: "d1", playerName: "FuegoEterno", nightReached: 28, score: 45e3, kills: 130, timeSurvivedSeconds: 980, skin: "shadow_hunter", date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0], isDaily: true },
  { id: "d2", playerName: "Explorador8Bit", nightReached: 21, score: 31e3, kills: 95, timeSurvivedSeconds: 740, skin: "retro_hero", date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0], isDaily: true },
  { id: "d3", playerName: "PixelWood", nightReached: 15, score: 19500, kills: 62, timeSurvivedSeconds: 520, skin: "classic", date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0], isDaily: true }
];
function getTodayChallenge() {
  const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  const dayNum = (/* @__PURE__ */ new Date()).getDate();
  const challenges = [
    {
      id: `daily-${today}`,
      title: "Noche de Niebla Venenosa",
      description: "La niebla cubre el bosque. La visibilidad es 40% menor, pero los cofres contienen el doble de oro y recursos raros.",
      modifier: "fog_poison",
      difficulty: "Dificultad: Alta",
      rewardGold: 400,
      rewardSkin: "hazmat",
      targetNight: 20
    },
    {
      id: `daily-${today}`,
      title: "Furia de las Bestias de Sombra",
      description: "Los monstruos tienen +30% de velocidad y salud, pero otorgan triple experiencia al ser derrotados.",
      modifier: "shadow_fury",
      difficulty: "Dificultad: Extrema",
      rewardGold: 500,
      rewardSkin: "shadow_hunter",
      targetNight: 25
    },
    {
      id: `daily-${today}`,
      title: "Helada Polar del Bosque",
      description: "El fr\xEDo de la noche reduce el calor 2x m\xE1s r\xE1pido. Mant\xE9n la fogata en nivel alto para sobrevivir.",
      modifier: "polar_freeze",
      difficulty: "Dificultad: Media",
      rewardGold: 350,
      rewardSkin: "lumberjack_master",
      targetNight: 15
    },
    {
      id: `daily-${today}`,
      title: "Solo Armas Primitivas",
      description: "No hay armas de fuego. Solo arco, lanzas y hachas. +50% de da\xF1o cuerpo a cuerpo.",
      modifier: "primitive_only",
      difficulty: "Dificultad: Desaf\xEDo",
      rewardGold: 450,
      rewardSkin: "shaman_forest",
      targetNight: 20
    }
  ];
  return {
    date: today,
    challenge: challenges[dayNum % challenges.length]
  };
}
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", time: (/* @__PURE__ */ new Date()).toISOString() });
});
app.get("/api/leaderboard", (req, res) => {
  const type = req.query.type;
  if (type === "daily") {
    res.json({ success: true, leaderboard: dailyLeaderboard.sort((a, b) => b.score - a.score) });
  } else {
    res.json({ success: true, leaderboard: globalLeaderboard.sort((a, b) => b.score - a.score) });
  }
});
app.post("/api/leaderboard", (req, res) => {
  const { playerName, nightReached, score, kills, timeSurvivedSeconds, skin, isDaily } = req.body;
  if (!playerName || nightReached === void 0 || score === void 0) {
    res.status(400).json({ error: "Datos incompletos" });
    return;
  }
  const newEntry = {
    id: `run-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
    playerName: String(playerName).substring(0, 16),
    nightReached: Number(nightReached),
    score: Number(score),
    kills: Number(kills || 0),
    timeSurvivedSeconds: Number(timeSurvivedSeconds || 0),
    skin: String(skin || "classic"),
    date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
    isDaily: Boolean(isDaily)
  };
  if (isDaily) {
    dailyLeaderboard.push(newEntry);
    dailyLeaderboard.sort((a, b) => b.score - a.score);
    if (dailyLeaderboard.length > 50) dailyLeaderboard.pop();
  } else {
    globalLeaderboard.push(newEntry);
    globalLeaderboard.sort((a, b) => b.score - a.score);
    if (globalLeaderboard.length > 100) globalLeaderboard.pop();
  }
  res.json({ success: true, entry: newEntry });
});
app.get("/api/daily-challenge", (req, res) => {
  res.json({ success: true, ...getTodayChallenge() });
});
app.post("/api/cloud/save", (req, res) => {
  const { syncCode, profile } = req.body;
  if (!syncCode || !profile) {
    res.status(400).json({ error: "Falta syncCode o datos de perfil" });
    return;
  }
  const cleanCode = String(syncCode).trim().toUpperCase();
  const updatedProfile = {
    ...profile,
    syncCode: cleanCode,
    lastSaved: (/* @__PURE__ */ new Date()).toISOString()
  };
  cloudProfiles.set(cleanCode, updatedProfile);
  res.json({ success: true, message: "Partida guardada en la nube con \xE9xito", syncCode: cleanCode });
});
app.get("/api/cloud/load/:syncCode", (req, res) => {
  const cleanCode = String(req.params.syncCode).trim().toUpperCase();
  const profile = cloudProfiles.get(cleanCode);
  if (!profile) {
    res.status(404).json({ error: "C\xF3digo de sincronizaci\xF3n no encontrado en la nube" });
    return;
  }
  res.json({ success: true, profile });
});
app.post("/api/sage-oracle", async (req, res) => {
  const { npcName, locationType, night, hp, warmth, inventoryItems } = req.body;
  const fallbackQuotes = {
    cave: [
      "ES PELIGROSO IR SOLO EN LA NOCHE. MANT\xC9N EL FUEGO VIVO Y AFILA TU HOJA.",
      "EN LA NOCHE 10, EL CIERVO CORRUPTO DESCENDER\xC1 DE LOS RISCOS DEL NORTE.",
      "LAS AGUAS SUBTERR\xC1NEAS PURIFICAN EL ESP\xCDRITU. GUARDA TUS FLECHAS PARA LA LUNA ROJA.",
      "HACE CIEN A\xD1OS EL WENDIGO FUE SELLADO EN LA NOCHE 99. SOLO UN H\xC9ROE ARMADO LO VENCER\xC1."
    ],
    cabin: [
      "REF\xDAGIATE AQU\xCD SI EL FR\xCDO TE AGOTA. LA CHIMENEA CONSERVAR\xC1 TU CALOR.",
      "SI COCINAS LA CARNE EN EL FUEGO, TU FUERZA Y RESISTENCIA SE DUPLICAR\xC1N.",
      "LOS MONSTRUOS NO PUEDEN DERRIBAR LAS PAREDES DE PIEDRA F\xC1CILMENTE. COLOCA TRAMPAS AFUERA.",
      "REVISA EL COFRE TRASERO. HE GUARDADO LINGOTES Y POCIONES PARA EL SUPERVIVIENTE."
    ]
  };
  const pool = locationType === "cabin" ? fallbackQuotes.cabin : fallbackQuotes.cave;
  const defaultFallback = pool[Math.floor(Math.random() * pool.length)];
  if (!process.env.GEMINI_API_KEY) {
    res.json({ success: true, text: defaultFallback });
    return;
  }
  try {
    const { GoogleGenAI } = await import("@google/genai");
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: `Eres el Sabio Anciano / Ermita\xF1o en un juego retro de 8 bits estilo The Legend of Zelda de Famicom/NES (1986) en espa\xF1ol.
El jugador ha entrado a tu ${locationType === "cabin" ? "caba\xF1a en el bosque" : "cueva secreta"}.
Datos actuales de la partida:
- Noche actual: ${night || 1} de 99 noches
- Salud del jugador: ${hp || 100}%
- Nivel de calor: ${warmth || 100}%
- Inventario: ${(inventoryItems || []).join(", ") || "recursos b\xE1sicos"}

Instrucciones:
1. Responde con 1 o 2 oraciones breves, en may\xFAsculas estilo cl\xE1sico de Family Game / NES (m\xE1ximo 120 caracteres).
2. Da un consejo cr\xEDptico, \xFAtil o una profec\xEDa sobre c\xF3mo sobrevivir las 99 noches, el fr\xEDo o los monstruos de la noche.
3. Tono solemne y misterioso de 8-bit.`
    });
    const advice = response.text?.trim().toUpperCase() || defaultFallback;
    res.json({ success: true, text: advice });
  } catch (err) {
    res.json({ success: true, text: defaultFallback });
  }
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
    console.log(`\u{1F332} 99 Noches en el Bosque 8-Bit Server running on port ${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
