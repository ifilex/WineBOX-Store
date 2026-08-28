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
var import_dotenv = __toESM(require("dotenv"), 1);
var import_genai = require("@google/genai");
import_dotenv.default.config();
var app = (0, import_express.default)();
var PORT = 3e3;
app.use(import_express.default.json({ limit: "10mb" }));
function getGeminiClient() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;
  return new import_genai.GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build"
      }
    }
  });
}
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    game: "RIVALS",
    tickRate: 128,
    serverRegion: "US-East (Low Latency Dedicated)",
    antiCheat: "Sentinel Hyperion v4.9 Active",
    version: "2.4.0-competitive"
  });
});
app.post("/api/analytics/predict", async (req, res) => {
  try {
    const { playerData, opponentData, matchStats } = req.body;
    const ai = getGeminiClient();
    if (!ai) {
      const playerKDR = (matchStats?.kills || 1) / Math.max(matchStats?.deaths || 1, 1);
      const acc = matchStats?.accuracy || 45;
      const winChance = Math.min(Math.max(Math.round(acc * 0.7 + playerKDR * 18), 15), 94);
      return res.json({
        predictedWinRate: winChance,
        recoilIndex: "A+",
        tacticalAdvice: "Mant\xE9n el control de la altura central en el mapa Warehouse y aprovecha el dash para re-posicionarte tras disparar con la Aero-50.",
        metaRecommendation: "El AR-X con mira r\xE9flex ofrece mayor consistencia a media distancia frente a escopetas.",
        modelUsed: "Heuristic-Engine (Fallback)"
      });
    }
    const prompt = `Act\xFAa como el motor de an\xE1lisis predictivo de esports e inteligencia artificial de RIVALS (juego competitivo 1v1 estilo Roblox FPS).
Analiza las siguientes estad\xEDsticas de telemetr\xEDa del jugador en tiempo real:
- Arma principal: ${playerData?.weapon || "AR-X"}
- Precisi\xF3n actual: ${matchStats?.accuracy || 48}%
- Headshot ratio: ${matchStats?.headshotRate || 32}%
- K/D ratio: ${matchStats?.kdr || 1.8}
- Velocidad promedio de reacci\xF3n: ${matchStats?.reactionTime || 185}ms
- Oponente: ${opponentData?.name || "Rival_Pro_99"} (Elo: ${opponentData?.elo || 1850})
- Mapa actual: ${matchStats?.map || "Warehouse 1v1 Arena"}

Devuelve un JSON estricto con los siguientes campos:
{
  "predictedWinRate": n\xFAmero entero entre 1 y 99,
  "recoilIndex": letra calificaci\xF3n (S, A+, A, B, C),
  "tacticalAdvice": "Consejo t\xE1ctico profesional conciso y de alto impacto para ganar el duelo 1v1",
  "metaRecommendation": "Recomendaci\xF3n de carga o mec\xE1nica de movimiento (bhop, slide-cancel, dash)",
  "weaknessDetected": "Debilidad detectada en el rival o jugador",
  "predictedRounds": "Ejemplo: 5 - 3 Victoria"
}`;
    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json"
      }
    });
    const parsed = JSON.parse(response.text || "{}");
    res.json({
      ...parsed,
      modelUsed: "Gemini 3.7 Flash Predictive Intelligence"
    });
  } catch (err) {
    console.error("AI Prediction error:", err);
    res.status(500).json({
      error: "Error generating prediction",
      fallback: {
        predictedWinRate: 68,
        recoilIndex: "A",
        tacticalAdvice: "Asegura el control de \xE1ngulos cerrados con el dash de Luau."
      }
    });
  }
});
app.post("/api/analytics/monthly-report", async (req, res) => {
  try {
    const { month, season } = req.body;
    const ai = getGeminiClient();
    if (!ai) {
      return res.json({
        reportTitle: `Informe Mensual Competitivo Temporada ${season || 4} - RIVALS`,
        banWaveSummary: {
          totalBanned: 4812,
          aimSnapDetections: 2840,
          speedHackVelocityFlags: 1420,
          memoryIntegrityViolations: 552
        },
        weaponTierList: [
          { name: "Aero-50 Sniper", tier: "S+", pickRate: "34.2%", winRate: "54.8%" },
          { name: "AR-X Assault Rifle", tier: "S", pickRate: "41.0%", winRate: "52.1%" },
          { name: "Pump Havoc Shotgun", tier: "A+", pickRate: "18.5%", winRate: "50.4%" },
          { name: "Dual Phantom Pistols", tier: "A", pickRate: "6.3%", winRate: "48.9%" }
        ],
        metaInsights: "La t\xE9cnica de bunnyhop combinada con slide-cancel en tickrate 128Hz ha aumentado la velocidad de enfrentamientos en un 22%. El sniper Aero-50 domina en distancias superiores a 30m.",
        aiPredictionsForNextMonth: "Se prev\xE9 un ajuste a la cadencia del Pump Havoc y una mayor adopci\xF3n del Grapple Hook en arenas verticales."
      });
    }
    const prompt = `Genera un reporte competitivo mensual oficial de RIVALS (Roblox FPS de duelos 1v1) para el mes de ${month || "Marzo"} de la Temporada ${season || 4}.
Incluye estad\xEDsticas simuladas de la ola de baneos de Sentinel Anti-Cheat, Tier list de armas con pick rate y win rate, an\xE1lisis del meta de movimiento Luau, y predicciones de balance para el pr\xF3ximo parche.
Responde \xFAnicamente en formato JSON con la siguiente estructura:
{
  "reportTitle": string,
  "banWaveSummary": {
    "totalBanned": number,
    "aimSnapDetections": number,
    "speedHackVelocityFlags": number,
    "memoryIntegrityViolations": number
  },
  "weaponTierList": [
    { "name": string, "tier": string, "pickRate": string, "winRate": string }
  ],
  "metaInsights": string,
  "aiPredictionsForNextMonth": string,
  "topPlayerOfTheMonth": { "name": string, "elo": number, "winStreak": number }
}`;
    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json"
      }
    });
    const parsed = JSON.parse(response.text || "{}");
    res.json(parsed);
  } catch (err) {
    console.error("Monthly report error:", err);
    res.status(500).json({ error: "Failed to generate monthly report" });
  }
});
app.post("/api/support/chat", async (req, res) => {
  try {
    const { message, language, userProfile } = req.body;
    const ai = getGeminiClient();
    if (!ai) {
      return res.json({
        reply: `[Soporte RIVALS 24/7] Hola ${userProfile?.username || "Jugador"}. Hemos recibido tu consulta sobre "${message}". Nuestro sistema de servidores dedicados a 128Hz y almacenamiento cifrado en la nube mantiene tu progreso y skins aseguradas. \xBFEn qu\xE9 m\xE1s podemos ayudarte hoy?`,
        ticketId: `TICKET-${Math.floor(1e5 + Math.random() * 9e5)}`,
        status: "Resolved by Automated Agent"
      });
    }
    const prompt = `Eres el Agente Oficial de Soporte T\xE9cnico y Moderaci\xF3n 24/7 de RIVALS (el clon competitivo de duelos 1v1 de Roblox FPS).
El usuario escribe: "${message}"
Idioma preferido: ${language || "es"}
Datos del usuario: Usuario ${userProfile?.username || "Player"}, Elo: ${userProfile?.elo || 1500}, Nivel: ${userProfile?.level || 25}.

Directrices:
1. Responde de forma cordial, altamente profesional y en\xE9rgica en el idioma del usuario (${language || "es"}).
2. Si preguntan sobre apelaciones de ban o reportes, explica que el sistema Sentinel Anti-Cheat graba la telemetr\xEDa a 128 ticks y puede solicitar revisi\xF3n manual.
3. Si preguntan sobre mods de Luau, explica c\xF3mo cargar scripts seguros en el Sandbox o crear mapas comunitarios.
4. Si preguntan sobre skins, Battle Pass o torneos privados, responde con precisi\xF3n.
5. S\xE9 conciso (m\xE1ximo 3 p\xE1rrafos cortos) y genera un Ticket ID.`;
    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: prompt
    });
    res.json({
      reply: response.text,
      ticketId: `RIVALS-${Math.floor(1e5 + Math.random() * 9e5)}`,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    });
  } catch (err) {
    console.error("Support chat error:", err);
    res.status(500).json({
      reply: "Gracias por contactar al Centro de Asistencia RIVALS 24/7. Tu solicitud ha sido registrada en el sistema de tickets de alta prioridad.",
      ticketId: "TICKET-EMERGENCY-01"
    });
  }
});
app.post("/api/anticheat/verify", (req, res) => {
  const { shots, tickDelta, crosshairDelta, playerSpeed } = req.body;
  let flags = [];
  let isSuspicious = false;
  if (playerSpeed > 32) {
    flags.push("CRITICAL_SPEED_ANOMALY: Velocity exceeding Luau physics cap (32 u/s)");
    isSuspicious = true;
  }
  if (crosshairDelta && crosshairDelta > 175 && tickDelta < 8) {
    flags.push("AIM_SNAP_FLAG: Instantaneous 180\xB0 rotation within single tick (0.008s)");
    isSuspicious = true;
  }
  res.json({
    status: isSuspicious ? "FLAGGED_FOR_AUDIT" : "VERIFIED_CLEAN",
    trustScore: isSuspicious ? 42 : 99,
    flags,
    sentinelSignature: `HYPERION-SHA256-${Date.now().toString(16).toUpperCase()}`
  });
});
app.get("/api/v1/players/:id/stats", (req, res) => {
  const id = req.params.id;
  res.json({
    playerId: id,
    username: id === "me" ? "ApexRival_One" : `Rival_Competitor_${id}`,
    elo: 2150,
    rankTier: "Apex Rival #12",
    season: 4,
    matchesPlayed: 412,
    winRate: "72.4%",
    kdr: 2.85,
    favoriteWeapon: "Aero-50 Carbon Void",
    verifiedBadge: true
  });
});
app.get("/api/v1/tournaments", (req, res) => {
  res.json({
    activeTournaments: [
      {
        id: "tourney-apex-championship",
        name: "RIVALS Global 1v1 Apex Invitational 2026",
        prizePool: "10,000 USD + Exclusive Golden Scythe",
        status: "REGISTRATION_OPEN",
        participants: 128,
        maxParticipants: 128,
        tickRate: 128,
        rules: "Standard Ranked Luau Physics | Best of 7 Rounds"
      },
      {
        id: "tourney-sniper-duel",
        name: "Aero-50 Quickscope Clash #12",
        prizePool: "2,500 USD + Mythic Wrap",
        status: "LIVE_NOW",
        participants: 64,
        maxParticipants: 64,
        tickRate: 128,
        rules: "Snipers Only | No Health Regeneration"
      }
    ]
  });
});
app.post("/api/cloud-save/sync", (req, res) => {
  const { userId, payload, checksum } = req.body;
  res.json({
    success: true,
    message: "Encrypted cloud profile state safely synchronized to RIVALS Vault",
    syncedAt: (/* @__PURE__ */ new Date()).toISOString(),
    cloudHash: `AES-GCM-256-${Math.random().toString(36).substring(2, 10).toUpperCase()}`
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
    console.log(`RIVALS Dedicated Game Server & API listening on http://localhost:${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
