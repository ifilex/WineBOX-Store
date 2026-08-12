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
var import_genai = require("@google/genai");
var import_dotenv = __toESM(require("dotenv"), 1);
var import_meta = {};
import_dotenv.default.config();
var __filename = (0, import_url.fileURLToPath)(import_meta.url);
var __dirname = import_path.default.dirname(__filename);
async function startServer() {
  const app = (0, import_express.default)();
  const PORT = 3e3;
  app.use(import_express.default.json());
  let aiClient = null;
  function getGeminiClient() {
    if (!aiClient) {
      const apiKey = process.env.GEMINI_API_KEY;
      if (apiKey && apiKey !== "MY_GEMINI_API_KEY") {
        aiClient = new import_genai.GoogleGenAI({
          apiKey,
          httpOptions: {
            headers: {
              "User-Agent": "aistudio-build"
            }
          }
        });
      }
    }
    return aiClient;
  }
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", timestamp: (/* @__PURE__ */ new Date()).toISOString() });
  });
  app.post("/api/ai/analyze-position", async (req, res) => {
    try {
      const { fen, moveHistory, currentEvaluation, lang = "es", userLevel = "Intermedio" } = req.body;
      const ai = getGeminiClient();
      if (!ai) {
        return res.status(200).json({
          offlineFallback: true,
          insight: getOfflineInsight(currentEvaluation, moveHistory, lang)
        });
      }
      const prompt = `System: You are an expert chess grandmaster and cognitive coach specializing in cognitive stimulation through chess.
Position FEN: ${fen}
Move History: ${moveHistory ? moveHistory.join(" ") : "Beginning of game"}
Current Evaluation (Centipawns): ${currentEvaluation ?? 0}
User Profile Level: ${userLevel}
Target Language: ${lang}

Task: Provide a concise, encouraging 2-3 sentence cognitive analysis of this chess position. Point out key tactical threats, memory/pawn patterns, or strategic ideas that stimulate executive planning.
Answer ONLY in language code '${lang}'. Keep it clear, inspiring, and accessible.`;
      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: prompt
      });
      res.json({
        success: true,
        insight: response.text || getOfflineInsight(currentEvaluation, moveHistory, lang)
      });
    } catch (error) {
      console.error("Gemini API position analysis error:", error);
      res.json({
        success: false,
        offlineFallback: true,
        insight: getOfflineInsight(req.body.currentEvaluation, req.body.moveHistory, req.body.lang || "es")
      });
    }
  });
  app.post("/api/ai/cognitive-report", async (req, res) => {
    try {
      const { gameResult, totalMoves, avgTimePerMove, accuracyScore, blunders, difficulty, lang = "es" } = req.body;
      const ai = getGeminiClient();
      if (!ai) {
        return res.status(200).json({
          offlineFallback: true,
          report: getOfflineReport(gameResult, accuracyScore, avgTimePerMove, lang)
        });
      }
      const prompt = `System: You are a Cognitive Health & Neuroscience Coach evaluating a completed chess training session.
Game Outcome: ${gameResult}
Difficulty Level: ${difficulty}
Total Moves: ${totalMoves}
Accuracy Score: ${accuracyScore}%
Average Decision Time: ${avgTimePerMove}s
Blunders Count: ${blunders}
Language: ${lang}

Task: Write a short 3-bullet point Cognitive Assessment in language code '${lang}':
1. Executive Function & Focus Evaluation
2. Pattern Recognition & Memory Strength
3. Key Recommendation for next cognitive session

Be positive, precise, and scientifically grounded in cognitive stimulation concepts.`;
      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: prompt
      });
      res.json({
        success: true,
        report: response.text || getOfflineReport(gameResult, accuracyScore, avgTimePerMove, lang)
      });
    } catch (error) {
      console.error("Gemini API report error:", error);
      res.json({
        success: false,
        offlineFallback: true,
        report: getOfflineReport(req.body.gameResult, req.body.accuracyScore, req.body.avgTimePerMove, req.body.lang || "es")
      });
    }
  });
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(__dirname, "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`CogniChess server running on http://0.0.0.0:${PORT}`);
  });
}
function getOfflineInsight(evalScore = 0, history = [], lang = "es") {
  const isWhiteAdv = evalScore > 0.8;
  const isBlackAdv = evalScore < -0.8;
  if (lang === "es") {
    if (isWhiteAdv) return "Control del centro ventajoso. Mant\xE9n la concentraci\xF3n en la estructura de peones y la coordinaci\xF3n de tus piezas.";
    if (isBlackAdv) return "La posici\xF3n requiere atenci\xF3n defensiva. Eval\xFAa las casillas d\xE9biles y calcula rupturas t\xE1cticas.";
    return "Posici\xF3n equilibrada. Estimula tu visi\xF3n espacial buscando piezas sin defender o columnas abiertas.";
  }
  if (lang === "en") {
    if (isWhiteAdv) return "Advantageous central control. Maintain focus on pawn structure and piece coordination.";
    if (isBlackAdv) return "Position calls for defensive awareness. Look for tactical counterplay and weak squares.";
    return "Balanced position. Stimulate spatial vision by scanning for undefended pieces and open files.";
  }
  return "Posici\xF3n analizada localmente. Concentra tu atenci\xF3n en la seguridad del rey y el desarrollo de piezas.";
}
function getOfflineReport(result, accuracy = 75, avgTime = 4, lang = "es") {
  if (lang === "en") {
    return `\u2022 Focus & Precision: Achieved ${accuracy}% decision accuracy across training.
\u2022 Processing Speed: Average decision time of ${avgTime}s demonstrates smooth cognitive rhythm.
\u2022 Recommendation: Continue challenging pattern recognition at this AI difficulty tier.`;
  }
  return `\u2022 Enfoque y Precisi\xF3n: Alcanzaste un ${accuracy}% de precisi\xF3n en la toma de decisiones.
\u2022 Velocidad de Procesamiento: Promedio de ${avgTime}s por jugada mostrando buen flujo cognitivo.
\u2022 Recomendaci\xF3n: Contin\xFAa fortaleciendo la memoria de trabajo y el c\xE1lculo t\xE1ctico.`;
}
startServer();
//# sourceMappingURL=server.cjs.map
