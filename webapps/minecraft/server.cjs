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
var import_genai = require("@google/genai");
var app = (0, import_express.default)();
var PORT = 3e3;
app.use(import_express.default.json({ limit: "50mb" }));
var geminiAi = null;
function getGemini() {
  if (!geminiAi) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (apiKey) {
      geminiAi = new import_genai.GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build"
          }
        }
      });
    }
  }
  return geminiAi;
}
var cloudWorldStorage = {};
var multiplayerRooms = {};
app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    version: "1.0.0",
    engine: "MindCraft 3D Voxel Engine",
    capabilities: ["voxel_physics", "cognitive_evaluation", "cloud_sync", "gamepad_api", "village_economy"],
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  });
});
app.post("/api/eval/report", async (req, res) => {
  try {
    const { telemetry, playerName, gameMode, worldStats, language = "es" } = req.body;
    const ai = getGemini();
    const promptText = `
Act\xFAa como un psic\xF3logo y evaluador cognitivo de videojuegos de alto nivel.
Analiza la siguiente telemetr\xEDa en tiempo real y patrones de juego extra\xEDdos de una sesi\xF3n en el mundo de Minecraft 3D del jugador: "${playerName || "Jugador"}":

TELEMETR\xCDA Y M\xC9TRICAS DE JUEGO:
- Modo de juego: ${gameMode || "Supervivencia"}
- Tiempo total jugado: ${Math.round((telemetry?.playTimeSeconds || 60) / 60)} minutos
- Bloques minados: ${telemetry?.blocksBroken || 0} (Desglose: ${JSON.stringify(telemetry?.blockBreakTypes || {})})
- Bloques colocados: ${telemetry?.blocksPlaced || 0}
- Simetr\xEDa y Complejidad de Construcci\xF3n: ${(telemetry?.buildingComplexityScore || 50).toFixed(1)}/100
- Tiempo de reacci\xF3n promedio ante amenazas: ${telemetry?.avgThreatReactionMs ? Math.round(telemetry.avgThreatReactionMs) + "ms" : "320ms"}
- Enfrentamientos contra monstruos (ganados / perdidos): ${telemetry?.mobsDefeated || 0} / ${telemetry?.deaths || 0}
- Tiempo de permanencia nocturna en exteriores (indicador de audacia/riesgo): ${telemetry?.nightOutdoorRatio || 0.3} (0 = muy cauto/refugiado, 1 = temerario)
- Diversidad de recetas crafteadas: ${telemetry?.recipesCrafted || 0}
- Actividad de comercio con aldeanos: ${telemetry?.tradesCompleted || 0} transacciones
- Recursos minerales valiosos ahorrados vs gastados: ${telemetry?.oresHoarded || 0} guardados
- Nivel de estr\xE9s/p\xE1nico detectado (movimientos err\xE1ticos en combate): ${(telemetry?.panicIndex || 20).toFixed(1)}%

Por favor genera un informe psicol\xF3gico, conductual y creativo en formato JSON v\xE1lido con la siguiente estructura exacta:
{
  "overallState": "Tranquilo y Met\xF3dico" | "Creativo y Explorador" | "Alerta y Resiliente" | "Estrat\xE9gico y Cauto" | "Energ\xE9tico y Audaz",
  "summary": "Breve resumen de 2-3 frases sobre el estado mental y estilo de juego.",
  "emotionalBalance": {
    "score": 0-100,
    "description": "Explicaci\xF3n del equilibrio emocional",
    "stressLevel": "Bajo" | "Moderado" | "Elevado",
    "focusLevel": "Excelente" | "Normal" | "Disperso"
  },
  "cognitiveScores": {
    "reactionSpeed": 0-100,
    "spatialCreativity": 0-100,
    "resourceManagement": 0-100,
    "strategicPlanning": 0-100,
    "riskTolerance": 0-100,
    "resilience": 0-100
  },
  "personalityArchetype": "El Arquitecto Paciente" | "El Explorador Audaz" | "El Alquimista Minero" | "El Defensor Estrat\xE9gico",
  "strengths": ["Fortaleza 1", "Fortaleza 2", "Fortaleza 3"],
  "wellnessRecommendations": [
    "Recomendaci\xF3n para mejorar concentraci\xF3n o reducir fatiga",
    "Consejo de pausa o ejercicio de respiraci\xF3n",
    "Sugerencia de desaf\xEDo creativo en el juego"
  ],
  "dailyMoodQuote": "Una frase inspiradora personalizada para el usuario."
}
Idioma de respuesta: ${language === "es" ? "Espa\xF1ol" : "Ingl\xE9s"}.
Responde \xDANICAMENTE con el bloque JSON.
`;
    if (ai) {
      try {
        const response = await ai.models.generateContent({
          model: "gemini-3.7-flash",
          contents: promptText,
          config: {
            responseMimeType: "application/json",
            temperature: 0.7
          }
        });
        const rawJson = response.text?.trim() || "";
        const report2 = JSON.parse(rawJson);
        return res.json({ success: true, report: report2, source: "gemini-3.7-flash" });
      } catch (err) {
        console.warn("Gemini generation error, falling back to heuristic evaluation:", err?.message);
      }
    }
    const blocksPlaced = telemetry?.blocksPlaced || 0;
    const blocksBroken = telemetry?.blocksBroken || 0;
    const deaths = telemetry?.deaths || 0;
    const mobsDefeated = telemetry?.mobsDefeated || 0;
    const reactionMs = telemetry?.avgThreatReactionMs || 340;
    const reactionScore = Math.max(30, Math.min(98, Math.round(100 - (reactionMs - 200) / 4)));
    const creativityScore = Math.min(95, Math.max(40, Math.round(blocksPlaced / (blocksBroken + 1) * 50 + 35)));
    const resourceScore = Math.min(92, Math.max(35, Math.round((telemetry?.oresHoarded || 5) * 6 + 40)));
    const riskTolerance = Math.min(90, Math.max(30, Math.round((telemetry?.nightOutdoorRatio || 0.4) * 80 + 20)));
    const resilienceScore = Math.min(95, Math.max(45, Math.round(50 + mobsDefeated * 5 - deaths * 8)));
    const report = {
      overallState: creativityScore > 75 ? "Creativo y Explorador" : reactionScore > 75 ? "Alerta y Resiliente" : "Estrat\xE9gico y Cauto",
      summary: `El jugador demuestra una gran capacidad de ${creativityScore > 70 ? "organizaci\xF3n espacial y creatividad" : "reacci\xF3n t\xE1ctica y perseverancia"}. Muestra un comportamiento adaptativo ante los desaf\xEDos del entorno.`,
      emotionalBalance: {
        score: Math.round((reactionScore + resilienceScore + resourceScore) / 3),
        description: "Estado equilibrado con buena tolerancia a la frustraci\xF3n y concentraci\xF3n sostenida.",
        stressLevel: telemetry?.panicIndex > 50 ? "Moderado" : "Bajo",
        focusLevel: "Excelente"
      },
      cognitiveScores: {
        reactionSpeed: reactionScore,
        spatialCreativity: creativityScore,
        resourceManagement: resourceScore,
        strategicPlanning: Math.round((resourceScore + creativityScore) / 2),
        riskTolerance,
        resilience: resilienceScore
      },
      personalityArchetype: creativityScore > 70 ? "El Arquitecto Paciente" : mobsDefeated > 5 ? "El Defensor Estrat\xE9gico" : "El Explorador Audaz",
      strengths: [
        "Capacidad de resoluci\xF3n visual y espacial r\xE1pida",
        "Buena gesti\xF3n de inventario y previsi\xF3n de recursos",
        "Control del estr\xE9s durante incursiones nocturnas"
      ],
      wellnessRecommendations: [
        "Realiza pausas de 5 minutos cada 45 minutos para relajar la vista.",
        "Aprovecha el modo creativo para canalizar ideas arquitect\xF3nicas sin presi\xF3n de supervivencia.",
        "Practica 3 respiraciones profundas si te encuentras en cuevas profundas."
      ],
      dailyMoodQuote: "Cada bloque colocado es un reflejo de tu capacidad para construir tu propio camino con paciencia y visi\xF3n."
    };
    return res.json({ success: true, report, source: "heuristic_engine" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});
app.post("/api/sync/save", (req, res) => {
  const { worldId, encryptedBlob, worldName, owner = "anonymous" } = req.body;
  if (!worldId || !encryptedBlob) {
    return res.status(400).json({ error: "worldId and encryptedBlob are required" });
  }
  cloudWorldStorage[worldId] = {
    data: { worldId, worldName, encryptedBlob },
    updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
    owner
  };
  res.json({ success: true, worldId, savedAt: cloudWorldStorage[worldId].updatedAt });
});
app.get("/api/sync/load/:worldId", (req, res) => {
  const { worldId } = req.params;
  const saved = cloudWorldStorage[worldId];
  if (!saved) {
    return res.status(404).json({ error: "World not found in cloud backup" });
  }
  res.json({ success: true, ...saved });
});
app.post("/api/multiplayer/room", (req, res) => {
  const { action, roomId, hostName, player, worldSeed } = req.body;
  if (action === "create") {
    const newRoomId = roomId || "ROOM-" + Math.floor(1e3 + Math.random() * 9e3);
    multiplayerRooms[newRoomId] = {
      host: hostName || "Host Player",
      players: [player || { name: hostName || "Host", id: "p1", x: 0, y: 30, z: 0 }],
      worldSeed: worldSeed || 12345,
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    return res.json({ success: true, roomId: newRoomId, room: multiplayerRooms[newRoomId] });
  }
  if (action === "join") {
    const room = multiplayerRooms[roomId];
    if (!room) {
      return res.status(404).json({ error: "Room not found" });
    }
    if (player && !room.players.find((p) => p.id === player.id)) {
      room.players.push(player);
    }
    return res.json({ success: true, room });
  }
  if (action === "sync") {
    const room = multiplayerRooms[roomId];
    if (!room) return res.status(404).json({ error: "Room not found" });
    if (player) {
      const idx = room.players.findIndex((p) => p.id === player.id);
      if (idx >= 0) {
        room.players[idx] = player;
      } else {
        room.players.push(player);
      }
    }
    return res.json({ success: true, players: room.players });
  }
  res.json({ success: true, activeRooms: Object.keys(multiplayerRooms).length });
});
app.get("/api/docs", (_req, res) => {
  res.json({
    title: "Minecraft 3D MindCraft Cloud & Engine API",
    version: "1.0.0",
    description: "API de alta disponibilidad para sincronizaci\xF3n de mundos voxel, telemetr\xEDa cognitiva con IA y multijugador P2P.",
    endpoints: [
      { method: "GET", path: "/api/health", description: "Estado y capacidades del motor" },
      { method: "POST", path: "/api/eval/report", description: "Evaluaci\xF3n psicol\xF3gica y de bienestar cognitivo usando Gemini AI" },
      { method: "POST", path: "/api/sync/save", description: "Guardado en la nube con cifrado E2E" },
      { method: "GET", path: "/api/sync/load/:worldId", description: "Recuperaci\xF3n de mundo cifrado en la nube" },
      { method: "POST", path: "/api/multiplayer/room", description: "Gesti\xF3n y sincronizaci\xF3n de salas multijugador" }
    ]
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
    console.log(`Minecraft 3D server running on http://0.0.0.0:${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
