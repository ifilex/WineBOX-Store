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
async function startServer() {
  const app = (0, import_express.default)();
  const PORT = 3e3;
  app.use(import_express.default.json());
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", time: (/* @__PURE__ */ new Date()).toISOString() });
  });
  app.post("/api/tactical-analysis", async (req, res) => {
    try {
      const { lang, winner, turns, accuracy, playerHits, playerMisses, aiHits, aiMisses, playerSunken, aiSunken, theater, difficulty } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.json({
          analysis: null,
          message: "Standard tactical telemetry generated."
        });
      }
      const ai = new import_genai.GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build"
          }
        }
      });
      const prompt = `You are a decorated Fleet Admiral naval tactician providing an after-action debriefing report (AAR) for a naval battleship combat simulation.
Language of response MUST be: ${lang || "English"}.
Match facts:
- Outcome: ${winner === "player" ? "VICTORY for Player Fleet" : "DEFEAT, AI Fleet dominated"}
- Total Turns: ${turns}
- Player Accuracy: ${accuracy}% (${playerHits} hits, ${playerMisses} misses)
- AI Performance: ${aiHits} hits, ${aiMisses} misses
- Player Ships Sunken: ${playerSunken}/5
- Enemy Ships Destroyed: ${aiSunken}/5
- Theater of War: ${theater}
- AI Tactical Level: ${difficulty}

Provide a short, immersive, 3-4 sentence military tactical evaluation. Critique the player's firing efficiency, targeting discipline (e.g. cluster hunting vs random firing), and give 1 pro-tip advice for the next sortie. Keep the tone authentic to a naval war room briefing.`;
      const response = await ai.models.generateContent({
        model: "gemini-3.7-flash",
        contents: prompt
      });
      return res.json({
        analysis: response.text || null
      });
    } catch (err) {
      console.error("AI Analysis error:", err);
      return res.json({
        analysis: null,
        error: err.message || "Failed to generate AI analysis"
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
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Naval Warfare Command Server running on http://0.0.0.0:${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
