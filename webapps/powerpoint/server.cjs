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
var import_dotenv = __toESM(require("dotenv"), 1);
import_dotenv.default.config();
var aiClient = null;
function getAI() {
  if (!aiClient && process.env.GEMINI_API_KEY) {
    try {
      aiClient = new import_genai.GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    } catch (e) {
      console.warn("Could not initialize Gemini AI client:", e);
    }
  }
  return aiClient;
}
async function startServer() {
  const app = (0, import_express.default)();
  const PORT = 3e3;
  app.use(import_express.default.json({ limit: "50mb" }));
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", time: (/* @__PURE__ */ new Date()).toISOString() });
  });
  app.post("/api/ai/generate-presentation", async (req, res) => {
    try {
      const { prompt, slideCount = 4, tone = "professional", language = "es" } = req.body;
      const ai = getAI();
      if (!ai) {
        return res.json({
          slides: [
            {
              title: prompt || "Estrategia Empresarial y Visi\xF3n 2026",
              subtitle: "Innovaci\xF3n, Crecimiento y Transformaci\xF3n Digital",
              elements: [
                {
                  type: "text",
                  content: prompt ? `Presentaci\xF3n ejecutiva: ${prompt}` : "Visi\xF3n Estrat\xE9gica",
                  x: 80,
                  y: 120,
                  width: 800,
                  height: 100,
                  fontSize: 36,
                  fontWeight: "bold",
                  color: "#1E293B",
                  textAlign: "center"
                },
                {
                  type: "text",
                  content: "Resumen de objetivos principales, m\xE9tricas de impacto y hoja de ruta.",
                  x: 100,
                  y: 240,
                  width: 760,
                  height: 80,
                  fontSize: 20,
                  color: "#64748B",
                  textAlign: "center"
                }
              ],
              background: "#F8FAFC",
              notes: "Introducir la visi\xF3n del proyecto y dar la bienvenida al equipo."
            },
            {
              title: "Pilares Clave y Metas",
              elements: [
                {
                  type: "text",
                  content: "1. Eficiencia Operativa\n2. Crecimiento Acelerado\n3. Experiencia de Usuario\n4. Seguridad y Escalabilidad",
                  x: 80,
                  y: 140,
                  width: 380,
                  height: 260,
                  fontSize: 20,
                  color: "#1E293B"
                },
                {
                  type: "shape",
                  shapeType: "rectangle",
                  x: 500,
                  y: 140,
                  width: 380,
                  height: 240,
                  fill: "#3B82F6",
                  opacity: 0.15,
                  borderRadius: 12
                },
                {
                  type: "text",
                  content: "Impacto Proyectado:\n+45% Productividad\n-30% Tiempo de entrega\n99.9% Disponibilidad",
                  x: 520,
                  y: 170,
                  width: 340,
                  height: 180,
                  fontSize: 22,
                  fontWeight: "bold",
                  color: "#1D4ED8"
                }
              ],
              background: "#FFFFFF",
              notes: "Destacar los 4 pilares fundamentales y el impacto num\xE9rico."
            }
          ]
        });
      }
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `Eres un dise\xF1ador experto en PowerPoint y presentaciones ejecutivas de nivel Fortune 500.
Genera un mazo de ${slideCount} diapositivas en idioma ${language} basado en el siguiente tema: "${prompt}".
Tono: ${tone}.

Devuelve \xDANICAMENTE un JSON v\xE1lido sin markdown ni comillas triples con este esquema:
{
  "slides": [
    {
      "title": "T\xEDtulo de la diapositiva",
      "background": "#HexColor",
      "notes": "Notas del orador detalladas",
      "elements": [
        {
          "type": "text" | "shape",
          "content": "Texto del elemento",
          "x": number (entre 50 y 850),
          "y": number (entre 50 y 480),
          "width": number,
          "height": number,
          "fontSize": number,
          "fontWeight": "normal" | "bold",
          "color": "#HexColor",
          "textAlign": "left" | "center" | "right",
          "shapeType": "rectangle" | "circle" | "callout" | "card",
          "fill": "#HexColor",
          "borderRadius": number
        }
      ]
    }
  ]
}`
      });
      const text = response.text || "{}";
      const cleaned = text.replace(/```json/g, "").replace(/```/g, "").trim();
      const parsed = JSON.parse(cleaned);
      return res.json(parsed);
    } catch (error) {
      console.error("AI Generation error:", error);
      res.status(500).json({ error: error.message || "Failed to generate presentation" });
    }
  });
  app.post("/api/ai/enhance-text", async (req, res) => {
    try {
      const { text, action = "improve" } = req.body;
      const ai = getAI();
      if (!ai) {
        let result = text;
        if (action === "summarize") result = `\u2022 Resumen clave: ${text.slice(0, 100)}...`;
        else if (action === "bullets") result = text.split(". ").map((s) => `\u2022 ${s.trim()}`).join("\n");
        else result = `\u2726 ${text} (Optimizado para impacto)`;
        return res.json({ result });
      }
      const promptMap = {
        improve: `Mejora y haz m\xE1s persuasivo, conciso y profesional el siguiente texto para una diapositiva: "${text}"`,
        summarize: `Sintetiza en 2 vi\xF1etas ejecutivas de alto impacto el siguiente texto: "${text}"`,
        bullets: `Transforma el siguiente texto en puntos clave atractivos para PowerPoint: "${text}"`,
        translate_en: `Translate the following presentation text to clear, polished English: "${text}"`,
        translate_es: `Traduce el siguiente texto a espa\xF1ol neutro y profesional: "${text}"`
      };
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: promptMap[action] || promptMap.improve
      });
      res.json({ result: response.text?.trim() || text });
    } catch (e) {
      res.status(500).json({ error: e.message });
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
    app.get("*", (_req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Office PowerPoint Web Server running on http://0.0.0.0:${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
