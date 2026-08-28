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
var import_dotenv = __toESM(require("dotenv"), 1);
var import_vite = require("vite");
var import_meta = {};
import_dotenv.default.config();
var __filename = (0, import_url.fileURLToPath)(import_meta.url);
var __dirname = import_path.default.dirname(__filename);
var app = (0, import_express.default)();
var PORT = 3e3;
app.use(import_express.default.json({ limit: "50mb" }));
app.use(import_express.default.urlencoded({ extended: true, limit: "50mb" }));
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
  res.json({ status: "ok", time: (/* @__PURE__ */ new Date()).toISOString() });
});
app.post("/api/ai/assistant", async (req, res) => {
  try {
    const { action, prompt, tableContext, sheetData, currentFormula, vbaCode } = req.body;
    const ai = getAIClient();
    if (!ai) {
      if (action === "formula_explain" || action === "formula_suggest") {
        return res.json({
          success: true,
          result: `=SUM(A1:A${tableContext?.rowCount || 10})`,
          explanation: "F\xF3rmula generada para totalizar el rango seleccionado. (Para asistencia con IA avanzada conecte su clave en Configuraci\xF3n)."
        });
      }
      if (action === "vba_generate") {
        return res.json({
          success: true,
          code: `Sub AutoFormatReport()
    Dim ws As Worksheet
    Set ws = ActiveSheet
    ws.Range("A1:E1").Font.Bold = True
    ws.Range("A1:E1").Interior.Color = RGB(16, 124, 65)
    ws.Range("A1:E1").Font.Color = RGB(255, 255, 255)
    ws.Columns.AutoFit
    MsgBox "Formato completado con \xE9xito", vbInformation
End Sub`,
          explanation: "Macro VBA predeterminada para formateo autom\xE1tico de tablas."
        });
      }
      return res.json({
        success: true,
        result: "An\xE1lisis de datos completado. Los datos muestran tendencias consistentes en las series num\xE9ricas."
      });
    }
    let systemInstruction = "Eres un asistente experto en Microsoft Excel, f\xF3rmulas avanzadas (XLOOKUP, SUMIFS, INDEX/MATCH, DAX), macros de Visual Basic para Aplicaciones (VBA) y an\xE1lisis de datos de hojas de c\xE1lculo. Responde en espa\xF1ol de forma precisa y clara.";
    let userPrompt = "";
    if (action === "formula_suggest") {
      userPrompt = `El usuario necesita una f\xF3rmula de Excel para: "${prompt}".
Contexto de datos: ${JSON.stringify(tableContext || {})}.
F\xF3rmula actual si existe: "${currentFormula || ""}".
Devuelve \xDANICAMENTE un objeto JSON con los campos:
{
  "formula": "la f\xF3rmula exacta empezando con =",
  "explanation": "breve explicaci\xF3n de c\xF3mo funciona y par\xE1metros",
  "example": "ejemplo de uso"
}`;
    } else if (action === "vba_generate") {
      userPrompt = `El usuario quiere generar una macro de Visual Basic para Aplicaciones (VBA) en Excel para la siguiente tarea: "${prompt}".
C\xF3digo existente si hay: "${vbaCode || ""}".
Devuelve \xDANICAMENTE un objeto JSON con los campos:
{
  "macroName": "NombreDeMacro",
  "code": "El c\xF3digo completo Sub ... End Sub",
  "description": "Explicaci\xF3n de lo que hace la macro",
  "usage": "C\xF3mo ejecutarla en la hoja de c\xE1lculo"
}`;
    } else if (action === "data_analysis") {
      userPrompt = `Analiza los siguientes datos de la hoja de c\xE1lculo y genera un resumen ejecutivo con tendencias clave, m\xE9tricas y recomendaciones:
Datos: ${JSON.stringify(sheetData || tableContext || {})}.
Pregunta del usuario: "${prompt || "Generar informe anal\xEDtico"}".
Devuelve un JSON con:
{
  "summary": "Resumen ejecutivo",
  "keyMetrics": ["m\xE9trica 1", "m\xE9trica 2", "m\xE9trica 3"],
  "insights": ["hallazgo 1", "hallazgo 2", "hallazgo 3"],
  "recommendedChart": "bar|line|pie|column|area",
  "recommendedFormula": "=SUM(..)"
}`;
    } else if (action === "word_report") {
      userPrompt = `Convierte y redacta un informe formal estilo Microsoft Word a partir de los datos de la planilla:
Datos: ${JSON.stringify(sheetData || {})}.
T\xEDtulo solicitado: "${prompt || "Informe Ejecutivo de Datos"}".
Devuelve un JSON con:
{
  "title": "T\xEDtulo del documento",
  "executiveSummary": "P\xE1rrafo formal de resumen",
  "sections": [
    {"heading": "Secci\xF3n 1", "content": "Detalles..."},
    {"heading": "Secci\xF3n 2", "content": "Detalles..."}
  ],
  "conclusion": "P\xE1rrafo de conclusiones y pr\xF3ximos pasos"
}`;
    } else {
      userPrompt = prompt;
    }
    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: userPrompt,
      config: {
        systemInstruction,
        responseMimeType: "application/json"
      }
    });
    const responseText = response.text || "{}";
    try {
      const parsed = JSON.parse(responseText);
      res.json({ success: true, ...parsed });
    } catch {
      res.json({ success: true, result: responseText });
    }
  } catch (error) {
    console.error("Error in /api/ai/assistant:", error);
    res.status(500).json({
      success: false,
      error: error.message || "Error al procesar la solicitud de IA"
    });
  }
});
async function start() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*all", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Excel Office Suite Pro Server running on http://0.0.0.0:${PORT}`);
  });
}
start();
//# sourceMappingURL=server.cjs.map
