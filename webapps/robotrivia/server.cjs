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
var import_genai = require("@google/genai");
var import_vite = require("vite");
var import_meta = {};
var __filename = (0, import_url.fileURLToPath)(import_meta.url);
var __dirname = import_path.default.dirname(__filename);
var app = (0, import_express.default)();
var PORT = 3e3;
app.use(import_express.default.json());
var aiClient = null;
function getAIClient() {
  if (!aiClient && process.env.GEMINI_API_KEY) {
    aiClient = new import_genai.GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build"
        }
      }
    });
  }
  return aiClient;
}
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: (/* @__PURE__ */ new Date()).toISOString() });
});
var lastGeminiRequestTime = 0;
var geminiCooldownUntil = 0;
var GEMINI_MIN_INTERVAL_MS = 12e3;
function getProceduralSentiment(streak, lastResult, responseTimeMs, robotName) {
  const isFast = responseTimeMs < 3500;
  const isSlow = responseTimeMs > 9e3;
  if (streak >= 5) {
    return {
      mood: "shocked",
      adaptiveDifficultyAdvice: "expert",
      robotDialogue: {
        es: `\xA1Alerta de sobrecalentamiento! \u{1F525} \xA1${streak} aciertos seguidos! \xA1${robotName} no puede procesar semejante intelecto!`,
        en: `Overheat warning! \u{1F525} A streak of ${streak} correct answers! ${robotName} cannot process such intellect!`
      }
    };
  }
  if (streak >= 3) {
    return {
      mood: "excited",
      adaptiveDifficultyAdvice: "hard",
      robotDialogue: {
        es: `\xA1Bip bop! \xA1Racha de ${streak} aciertos! Tus circuitos de memoria est\xE1n operando al 100% de eficiencia.`,
        en: `Beep boop! Streak of ${streak}! Your memory circuits are operating at 100% efficiency.`
      }
    };
  }
  if (lastResult === "wrong") {
    if (isSlow) {
      return {
        mood: "smug",
        adaptiveDifficultyAdvice: "easy",
        robotDialogue: {
          es: `\xA1Tiempo agotado en los buffers! T\xF3mate un segundo para reiniciar la cach\xE9 y vuelve a intentarlo.`,
          en: `Buffer timeout! Take a second to flush your cache and try again.`
        }
      };
    }
    return {
      mood: "thinking",
      adaptiveDifficultyAdvice: "easy",
      robotDialogue: {
        es: `\xA1Error 404 en esa respuesta! No te preocupes, incluso los mejores algoritmos recalibran. \xA1A por la siguiente!`,
        en: `Error 404 on that answer! Don't worry, even top algorithms recalibrate. On to the next!`
      }
    };
  }
  if (isFast) {
    return {
      mood: "confident",
      adaptiveDifficultyAdvice: "hard",
      robotDialogue: {
        es: `\xA1Velocidad de procesamiento supers\xF3nica! Respondiste en solo ${(responseTimeMs / 1e3).toFixed(1)} segundos. \u26A1`,
        en: `Supersonic processing speed! Answered in just ${(responseTimeMs / 1e3).toFixed(1)} seconds. \u26A1`
      }
    };
  }
  return {
    mood: "normal",
    adaptiveDifficultyAdvice: "medium",
    robotDialogue: {
      es: `\xA1Buen tiro l\xF3gico! Los sensores de ${robotName} registran un rendimiento cerebral \xF3ptimo.`,
      en: `Great logical strike! ${robotName}'s sensors register optimal brain performance.`
    }
  };
}
app.post("/api/gemini/generate-questions", async (req, res) => {
  try {
    const { category = "retro_games", difficulty = "medium", language = "es", count = 3 } = req.body;
    const ai = getAIClient();
    const now = Date.now();
    if (!ai || now < geminiCooldownUntil || now - lastGeminiRequestTime < GEMINI_MIN_INTERVAL_MS) {
      return res.json({
        success: false,
        source: "fallback",
        message: "Using optimized local database questions."
      });
    }
    lastGeminiRequestTime = now;
    const prompt = `Genera exactamente ${count} preguntas de trivia para un videojuego retro de 8-bit estilo Preguntados.
Categor\xEDa: ${category}
Dificultad: ${difficulty}
Idioma principal: ${language} (debes incluir texto en espa\xF1ol 'es' y en ingl\xE9s 'en').
Cada pregunta debe tener 4 opciones bien diferenciadas, el \xEDndice de la respuesta correcta (0-3), y una breve explicaci\xF3n interesante.`;
    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: import_genai.Type.ARRAY,
          items: {
            type: import_genai.Type.OBJECT,
            properties: {
              id: { type: import_genai.Type.STRING },
              category: { type: import_genai.Type.STRING },
              difficulty: { type: import_genai.Type.STRING },
              question: {
                type: import_genai.Type.OBJECT,
                properties: {
                  es: { type: import_genai.Type.STRING },
                  en: { type: import_genai.Type.STRING }
                },
                required: ["es", "en"]
              },
              options: {
                type: import_genai.Type.OBJECT,
                properties: {
                  es: { type: import_genai.Type.ARRAY, items: { type: import_genai.Type.STRING } },
                  en: { type: import_genai.Type.ARRAY, items: { type: import_genai.Type.STRING } }
                },
                required: ["es", "en"]
              },
              correctIndex: { type: import_genai.Type.INTEGER },
              explanation: {
                type: import_genai.Type.OBJECT,
                properties: {
                  es: { type: import_genai.Type.STRING },
                  en: { type: import_genai.Type.STRING }
                },
                required: ["es", "en"]
              }
            },
            required: ["id", "category", "difficulty", "question", "options", "correctIndex", "explanation"]
          }
        }
      }
    });
    const parsedQuestions = JSON.parse(response.text || "[]");
    return res.json({
      success: true,
      source: "gemini",
      questions: parsedQuestions
    });
  } catch (error) {
    const isRateLimit = error?.status === "RESOURCE_EXHAUSTED" || error?.message?.includes("429") || error?.message?.includes("503");
    if (isRateLimit) {
      geminiCooldownUntil = Date.now() + 6e4;
    }
    return res.json({
      success: false,
      source: "fallback",
      message: "Seamlessly switched to local question database."
    });
  }
});
app.post("/api/gemini/analyze-sentiment", async (req, res) => {
  const { streak = 0, lastResult = "correct", responseTimeMs = 3e3, userMessage = "", robotName = "PREGUNTRON-3000" } = req.body;
  const now = Date.now();
  if (now < geminiCooldownUntil || now - lastGeminiRequestTime < GEMINI_MIN_INTERVAL_MS) {
    return res.json({
      success: true,
      source: "procedural",
      sentiment: getProceduralSentiment(streak, lastResult, responseTimeMs, robotName)
    });
  }
  try {
    const ai = getAIClient();
    if (!ai) {
      return res.json({
        success: true,
        source: "local",
        sentiment: getProceduralSentiment(streak, lastResult, responseTimeMs, robotName)
      });
    }
    lastGeminiRequestTime = now;
    const prompt = `Analiza el estado emocional y rendimiento del jugador en el juego de trivia 8-bit.
Par\xE1metros:
- Robot rival/anfitri\xF3n: ${robotName}
- Racha actual: ${streak} preguntas correctas
- \xDAltimo resultado: ${lastResult}
- Tiempo de respuesta: ${responseTimeMs} ms
- Mensaje del usuario (si hay): "${userMessage}"

Determina:
1. "mood": uno de ['excited', 'confident', 'frustrated', 'focused', 'triumphant', 'neutral']
2. "adaptiveDifficultyAdvice": 'easy' | 'medium' | 'hard' | 'expert'
3. "robotDialogue": frase c\xF3mica y tem\xE1tica de robot 8-bit (en espa\xF1ol e ingl\xE9s) para animar o provocar con simpat\xEDa al jugador.`;
    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: import_genai.Type.OBJECT,
          properties: {
            mood: { type: import_genai.Type.STRING },
            adaptiveDifficultyAdvice: { type: import_genai.Type.STRING },
            robotDialogue: {
              type: import_genai.Type.OBJECT,
              properties: {
                es: { type: import_genai.Type.STRING },
                en: { type: import_genai.Type.STRING }
              },
              required: ["es", "en"]
            }
          },
          required: ["mood", "adaptiveDifficultyAdvice", "robotDialogue"]
        }
      }
    });
    const parsedSentiment = JSON.parse(response.text || "{}");
    return res.json({
      success: true,
      source: "gemini",
      sentiment: parsedSentiment
    });
  } catch (error) {
    const isRateLimit = error?.status === "RESOURCE_EXHAUSTED" || error?.message?.includes("429") || error?.message?.includes("503");
    if (isRateLimit) {
      geminiCooldownUntil = Date.now() + 6e4;
    }
    return res.json({
      success: true,
      source: "fallback_procedural",
      sentiment: getProceduralSentiment(streak, lastResult, responseTimeMs, robotName)
    });
  }
});
app.get("/api/leaderboard", (req, res) => {
  const globalLeaderboard = [
    {
      rank: 1,
      userId: "bot_champ_01",
      username: "QuantumMaster_99",
      avatar: {
        chassis: "empress",
        primaryColor: "#e11d48",
        accentColor: "#facc15",
        eyesStyle: "anime",
        capeId: "cape_dragon_gold",
        visorGlow: true,
        accessoryId: "crown",
        auraId: "lightning"
      },
      crowns: 142,
      points: 18940,
      country: "ES",
      tier: "master"
    },
    {
      rank: 2,
      userId: "bot_champ_02",
      username: "PixelNinja84",
      avatar: {
        chassis: "retro_crt",
        primaryColor: "#22c55e",
        accentColor: "#38bdf8",
        eyesStyle: "laser",
        capeId: "cape_cyber_neon",
        visorGlow: true,
        accessoryId: "headphones",
        auraId: "matrix"
      },
      crowns: 118,
      points: 15420,
      country: "MX",
      tier: "master"
    },
    {
      rank: 3,
      userId: "bot_champ_03",
      username: "CyberValkyrie",
      avatar: {
        chassis: "quantum",
        primaryColor: "#a855f7",
        accentColor: "#ec4899",
        eyesStyle: "visor",
        capeId: "cape_cosmic_fire",
        visorGlow: true,
        accessoryId: "cyber_horns",
        auraId: "fire"
      },
      crowns: 96,
      points: 12890,
      country: "AR",
      tier: "diamond"
    },
    {
      rank: 4,
      userId: "bot_champ_04",
      username: "ChiptuneWizard",
      avatar: {
        chassis: "classic",
        primaryColor: "#f59e0b",
        accentColor: "#ef4444",
        eyesStyle: "cross",
        capeId: "cape_hero_red",
        visorGlow: false,
        accessoryId: "antenna",
        auraId: "sparkles"
      },
      crowns: 84,
      points: 10450,
      country: "CO",
      tier: "diamond"
    },
    {
      rank: 5,
      userId: "bot_champ_05",
      username: "RoboScholar",
      avatar: {
        chassis: "rover",
        primaryColor: "#06b6d4",
        accentColor: "#10b981",
        eyesStyle: "dots",
        capeId: "none",
        visorGlow: true,
        accessoryId: "antenna",
        auraId: "none"
      },
      crowns: 67,
      points: 8200,
      country: "CL",
      tier: "gold"
    }
  ];
  res.json({ leaderboard: globalLeaderboard });
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
    console.log(`RoboTrivia 8-Bit Server running on http://localhost:${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
