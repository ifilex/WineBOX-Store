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
var app = (0, import_express.default)();
var PORT = 3e3;
app.use(import_express.default.json({ limit: "50mb" }));
app.use(import_express.default.urlencoded({ extended: true, limit: "50mb" }));
var getGeminiClient = () => {
  if (!process.env.GEMINI_API_KEY) {
    return null;
  }
  return new import_genai.GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build"
      }
    }
  });
};
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", mode: "8-bit-retro-reader" });
});
app.post("/api/proxy-fetch", async (req, res) => {
  try {
    const { url } = req.body;
    if (!url || typeof url !== "string") {
      return res.status(400).json({ error: "Missing or invalid url parameter." });
    }
    let parsedUrl;
    try {
      parsedUrl = new URL(url);
    } catch {
      return res.status(400).json({ error: "Invalid URL format." });
    }
    const response = await fetch(parsedUrl.toString(), {
      headers: {
        "User-Agent": "RetroReader/1.0 (8-Bit Comic & Book Engine)",
        Accept: "*/*"
      }
    });
    if (!response.ok) {
      return res.status(response.status).json({
        error: `Failed to fetch remote file: HTTP ${response.status} ${response.statusText}`
      });
    }
    const contentType = response.headers.get("content-type") || "application/octet-stream";
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    let filename = import_path.default.basename(parsedUrl.pathname) || "downloaded_file";
    const contentDisposition = response.headers.get("content-disposition");
    if (contentDisposition && contentDisposition.includes("filename=")) {
      const match = contentDisposition.match(/filename=["']?([^"';]+)["']?/);
      if (match && match[1]) {
        filename = match[1];
      }
    }
    res.setHeader("Content-Type", contentType);
    res.setHeader("Content-Disposition", `inline; filename="${encodeURIComponent(filename)}"`);
    res.setHeader("Content-Length", buffer.length.toString());
    res.send(buffer);
  } catch (error) {
    console.error("Proxy fetch error:", error);
    res.status(500).json({ error: error.message || "Failed to proxy fetch file." });
  }
});
app.post("/api/ai/oracle", async (req, res) => {
  try {
    const ai = getGeminiClient();
    if (!ai) {
      return res.status(500).json({
        error: "GEMINI_API_KEY is not configured in server environment."
      });
    }
    const { prompt, pageContext, bookTitle, currentFormat, imageBase64, mode } = req.body;
    let systemInstruction = `You are "SAGE 8-BIT" (El Or\xE1culo Pixel), a witty, knowledgeable, retro 8-bit RPG master and literary wizard living inside a vintage handheld gaming cartridge.
Your duty is to assist the player/reader with reading comprehension, lore explanation, comic & manga panel translation, chapter summaries, and answering inquiries.
Maintain a fun, classic 8-bit gamer tone (using retro RPG metaphors like "EXP", "Level Up", "Lore Scroll", "Quest Briefing", "Mana"), but provide genuinely insightful, accurate, and helpful answers. Respond in Spanish (or the language the user speaks/requests). Keep formatting clean and readable.`;
    if (mode === "translate") {
      systemInstruction += ` Focus on translating the text or dialogue clearly and explaining cultural nuances or puns if from manga/comic panels.`;
    } else if (mode === "summary") {
      systemInstruction += ` Provide a concise, thrilling "Quest Log Summary" of the given page or section with key events and takeaways.`;
    }
    const contents = [];
    if (imageBase64) {
      const match = imageBase64.match(/^data:([^;]+);base64,(.+)$/);
      const mimeType = match ? match[1] : "image/jpeg";
      const rawBase64 = match ? match[2] : imageBase64;
      contents.push({
        inlineData: {
          mimeType,
          data: rawBase64
        }
      });
    }
    let userPromptText = `[LIBRO/C\xD3MIC]: ${bookTitle || "Cartucho Desconocido"} (${currentFormat || "Doc"})
`;
    if (pageContext) {
      userPromptText += `[CONTENIDO DE LA P\xC1GINA ACTUAL]:
${pageContext.substring(0, 4e3)}

`;
    }
    userPromptText += `[CONSULTA DEL JUGADOR]: ${prompt || "Analiza esta p\xE1gina y dame un resumen o datos curiosos"}`;
    contents.push({
      text: userPromptText
    });
    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: { parts: contents },
      config: {
        systemInstruction,
        temperature: 0.7
      }
    });
    res.json({ text: response.text });
  } catch (error) {
    console.error("AI Oracle Error:", error);
    res.status(500).json({ error: error.message || "Error al invocar al Or\xE1culo IA." });
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
    console.log(`\u{1F3AE} [8-BIT RETRO READER] Server listening on http://0.0.0.0:${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
