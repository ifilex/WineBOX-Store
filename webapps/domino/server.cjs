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
var import_genai = require("@google/genai");
var import_dotenv = __toESM(require("dotenv"), 1);
import_dotenv.default.config();
var app = (0, import_express.default)();
var PORT = 3e3;
app.use(import_express.default.json());
var ai = null;
function getGeminiClient() {
  if (!ai) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (apiKey && apiKey !== "MY_GEMINI_API_KEY" && apiKey.length > 5) {
      ai = new import_genai.GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build"
          }
        }
      });
    }
  }
  return ai;
}
app.post("/api/neuro-coaching", async (req, res) => {
  try {
    const { stats, recentGame } = req.body;
    const client = getGeminiClient();
    if (!client) {
      return res.json({
        advice: "Excelente esfuerzo. Para potenciar tu memoria de trabajo, intenta llevar mentalmente la cuenta de cu\xE1ntas fichas de cada n\xFAmero han sido jugadas.",
        keyFocus: "Memoria de trabajo y conteo de pintas",
        recommendedDifficulty: "Adaptativo Neuro-AI"
      });
    }
    const prompt = `Act\xFAa como un neuropsic\xF3logo experto en neuro-estimulaci\xF3n cognitiva mediante juegos tradicionales como el domin\xF3.
Analiza las siguientes m\xE9tricas del jugador:
- Precisi\xF3n de decisiones: ${stats?.accuracy ?? 85}%
- Tiempo promedio por jugada: ${stats?.avgSpeedSeconds ?? 3.2}s
- \xCDndice de memoria de trabajo: ${stats?.workingMemoryScore ?? 78}/100
- L\xF3gica construccional: ${stats?.spatialLogicScore ?? 82}/100
- Racha diaria: ${stats?.streakDays ?? 1} d\xEDas
- \xDAltima partida: ${recentGame ? `${recentGame.won ? "Victoria" : "Derrota"} con ${recentGame.points} pts` : "Iniciando entrenamiento"}

Devuelve un JSON con:
{
  "advice": "Un consejo motivador y t\xE9cnico (m\xE1ximo 25 palabras) enfocado en memoria espacial, de trabajo o l\xF3gica construccional.",
  "keyFocus": "\xC1rea clave a reforzar (m\xE1ximo 4 palabras)",
  "recommendedDifficulty": "Adaptativo Neuro-AI"
}`;
    const response = await client.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json"
      }
    });
    const text = response.text || "{}";
    const data = JSON.parse(text);
    return res.json(data);
  } catch (err) {
    console.error("Error in neuro-coaching API:", err);
    return res.json({
      advice: "Mant\xE9n un ritmo constante. Visualizar las puntas del tablero entrena tu capacidad de flexibilidad cognitiva y planeaci\xF3n.",
      keyFocus: "Planeaci\xF3n de aperturas",
      recommendedDifficulty: "Adaptativo Neuro-AI"
    });
  }
});
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
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
    console.log(`Server running on http://localhost:${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
