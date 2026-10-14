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
var import_meta = {};
var __filename = (0, import_url.fileURLToPath)(import_meta.url);
var __dirname = import_path.default.dirname(__filename);
async function startServer() {
  const app = (0, import_express.default)();
  const PORT = 3e3;
  app.use(import_express.default.json({ limit: "100mb" }));
  app.use(import_express.default.urlencoded({ extended: true, limit: "100mb" }));
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", time: (/* @__PURE__ */ new Date()).toISOString() });
  });
  app.post("/api/fetch-cloud", async (req, res) => {
    try {
      const { url } = req.body;
      if (!url || typeof url !== "string") {
        res.status(400).json({ error: "URL es requerida" });
        return;
      }
      let targetUrl = url.trim();
      const gDriveMatch = targetUrl.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
      if (gDriveMatch && gDriveMatch[1]) {
        targetUrl = `https://drive.google.com/uc?export=download&id=${gDriveMatch[1]}`;
      } else {
        const gDriveIdMatch = targetUrl.match(/drive\.google\.com\/open\?id=([a-zA-Z0-9_-]+)/);
        if (gDriveIdMatch && gDriveIdMatch[1]) {
          targetUrl = `https://drive.google.com/uc?export=download&id=${gDriveIdMatch[1]}`;
        }
      }
      if (targetUrl.includes("dropbox.com")) {
        targetUrl = targetUrl.replace("dl=0", "dl=1");
        if (!targetUrl.includes("dl=1")) {
          targetUrl += (targetUrl.includes("?") ? "&" : "?") + "dl=1";
        }
      }
      if (targetUrl.includes("1drv.ms") || targetUrl.includes("onedrive.live.com")) {
        targetUrl = targetUrl.replace("redir?", "download?");
      }
      const response = await fetch(targetUrl, {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          "Accept": "*/*"
        },
        redirect: "follow"
      });
      if (!response.ok) {
        res.status(response.status).json({
          error: `Error al obtener el archivo desde la nube: ${response.status} ${response.statusText}`
        });
        return;
      }
      let filename = "comic.cbz";
      const disposition = response.headers.get("content-disposition");
      if (disposition && disposition.includes("filename=")) {
        const match = disposition.match(/filename\*?=['"]?(?:UTF-\d['"]*)?([^;\r\n"']*)['"]?;?/i);
        if (match && match[1]) {
          filename = decodeURIComponent(match[1].replace(/['"]/g, ""));
        }
      } else {
        try {
          const parsed = new URL(targetUrl);
          const pathname = parsed.pathname;
          const baseName = import_path.default.basename(pathname);
          if (baseName && (baseName.endsWith(".cbr") || baseName.endsWith(".cbz") || baseName.endsWith(".zip") || baseName.endsWith(".rar"))) {
            filename = decodeURIComponent(baseName);
          }
        } catch {
        }
      }
      const contentType = response.headers.get("content-type") || "application/octet-stream";
      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      res.setHeader("Content-Type", contentType);
      res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);
      res.setHeader("Content-Length", buffer.length.toString());
      res.setHeader("X-Filename", encodeURIComponent(filename));
      res.send(buffer);
    } catch (err) {
      console.error("Fetch cloud error:", err);
      res.status(500).json({ error: err.message || "Error al descargar el archivo de la nube" });
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
    console.log(`Comic Reader Server running on http://0.0.0.0:${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
