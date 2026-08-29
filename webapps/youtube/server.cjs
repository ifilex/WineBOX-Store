var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// server.ts
var server_exports = {};
__export(server_exports, {
  SAMPLE_VIDEOS: () => SAMPLE_VIDEOS
});
module.exports = __toCommonJS(server_exports);
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_url = require("url");
var import_vite = require("vite");
var import_meta = {};
var __filename = (0, import_url.fileURLToPath)(import_meta.url);
var __dirname = import_path.default.dirname(__filename);
var users = /* @__PURE__ */ new Map();
var vaults = /* @__PURE__ */ new Map();
var devices = /* @__PURE__ */ new Map();
var DEMO_USER_ID = "user_demo_777";
users.set(DEMO_USER_ID, {
  id: DEMO_USER_ID,
  username: "carlos_e2ee",
  email: "carlos@privatemail.vault",
  salt: "dGhpcy1pcy1hLXNhbXBsZS1zYWx0LTEyMzQ1Ng==",
  passwordHash: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
  keyVerification: "v1_verified_aes_gcm_256_e2ee",
  createdAt: Date.now() - 864e5 * 7
});
devices.set(DEMO_USER_ID, [
  {
    id: "dev_mobile_iphone15",
    userId: DEMO_USER_ID,
    name: "iPhone 15 Pro Max",
    type: "mobile",
    os: "iOS 18.2",
    browser: "Mobile Safari",
    ip: "190.22.14.88",
    lastActive: Date.now() - 1e3 * 60 * 12,
    registeredAt: Date.now() - 864e5 * 5
  },
  {
    id: "dev_pc_desktop_m3",
    userId: DEMO_USER_ID,
    name: "MacBook Pro M3 Max",
    type: "desktop",
    os: "macOS Sonoma",
    browser: "Chrome 128",
    ip: "190.22.14.88",
    lastActive: Date.now() - 1e3 * 60 * 3,
    registeredAt: Date.now() - 864e5 * 7
  },
  {
    id: "dev_tab_galaxy",
    userId: DEMO_USER_ID,
    name: "Galaxy Tab S9 Ultra",
    type: "tablet",
    os: "Android 14",
    browser: "Samsung Internet",
    ip: "181.45.99.12",
    lastActive: Date.now() - 1e3 * 60 * 60 * 48,
    registeredAt: Date.now() - 864e5 * 2
  }
]);
var SAMPLE_VIDEOS = [
  {
    id: "jfKfPfyJRdk",
    title: "Lofi Hip Hop Radio - Beats to Relax/Study to [24/7 Live Stream Audio & HD]",
    channelTitle: "Lofi Girl",
    channelAvatar: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=100&auto=format&fit=crop&q=80",
    duration: "En vivo",
    durationSec: 3600,
    viewCount: "58M",
    publishedAt: "En vivo",
    description: "La transmisi\xF3n de lofi hip hop m\xE1s famosa del mundo. M\xFAsica tranquila para concentrarse, estudiar, programar o descansar sin anuncios ni interrupciones.",
    thumbnail: "https://i.ytimg.com/vi/jfKfPfyJRdk/hqdefault.jpg",
    resolutions: ["1080p", "720p", "480p", "Audio"],
    streamSources: {
      "1080p": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
      "720p": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      "480p": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      "Audio": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4"
    },
    category: "M\xFAsica & Lo-Fi",
    isOfflineReady: true
  },
  {
    id: "uD4izuDMUQA",
    title: "James Webb Telescope 4K - Deep Space Exploration & Observable Universe in 60 FPS",
    channelTitle: "NASA Space Science",
    channelAvatar: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=100&auto=format&fit=crop&q=80",
    duration: "14:20",
    durationSec: 860,
    viewCount: "4.8M",
    publishedAt: "Hace 3 d\xEDas",
    description: "Impresionante documental en ultra alta definici\xF3n que explora galaxias lejanas, nebulosas y los l\xEDmites del cosmos capturados por el telescopio espacial James Webb.",
    thumbnail: "https://i.ytimg.com/vi/uD4izuDMUQA/hqdefault.jpg",
    resolutions: ["1080p", "720p", "480p", "Audio"],
    streamSources: {
      "1080p": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      "720p": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      "480p": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      "Audio": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
    },
    category: "Ciencia & Naturaleza",
    isOfflineReady: true
  },
  {
    id: "fJ9rUzIMcZQ",
    title: "Queen \u2013 Bohemian Rhapsody (Official Video Remastered 4K Ultra HD)",
    channelTitle: "Queen Official",
    channelAvatar: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=100&auto=format&fit=crop&q=80",
    duration: "5:59",
    durationSec: 359,
    viewCount: "1.7B",
    publishedAt: "Remasterizado",
    description: "El video musical legendario de Bohemian Rhapsody interpretado por Freddie Mercury y Queen en calidad remasterizada ultra n\xEDtida.",
    thumbnail: "https://i.ytimg.com/vi/fJ9rUzIMcZQ/hqdefault.jpg",
    resolutions: ["1080p", "720p", "480p", "Audio"],
    streamSources: {
      "1080p": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      "720p": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      "480p": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      "Audio": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
    },
    category: "M\xFAsica & Lo-Fi",
    isOfflineReady: true
  },
  {
    id: "4xDzrJKXOOY",
    title: "Synthwave / Retro Electro Beats for Deep Focus & Night Coding Session",
    channelTitle: "Electronic Odyssey",
    channelAvatar: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=100&auto=format&fit=crop&q=80",
    duration: "42:18",
    durationSec: 2538,
    viewCount: "1.2M",
    publishedAt: "Hace 1 semana",
    description: "Sintetizadores anal\xF3gicos y ritmos synthwave ideales para programadores y amantes de la est\xE9tica retro futurista.",
    thumbnail: "https://i.ytimg.com/vi/4xDzrJKXOOY/hqdefault.jpg",
    resolutions: ["1080p", "720p", "480p", "Audio"],
    streamSources: {
      "1080p": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
      "720p": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      "480p": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      "Audio": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4"
    },
    category: "M\xFAsica & Lo-Fi",
    isOfflineReady: true
  },
  {
    id: "1La4QzGeaaQ",
    title: "Norway 4K Scenic Relaxation Film with Calming Music - Fjords, Waterfalls & Glaciers",
    channelTitle: "Scenic Relaxation",
    channelAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
    duration: "28:15",
    durationSec: 1695,
    viewCount: "8.4M",
    publishedAt: "Hace 2 semanas",
    description: "Paisajes majestuosos de Noruega grabados con drones cinematogr\xE1ficos en 4K. Relajaci\xF3n visual total y naturaleza virgen.",
    thumbnail: "https://i.ytimg.com/vi/1La4QzGeaaQ/hqdefault.jpg",
    resolutions: ["1080p", "720p", "480p", "Audio"],
    streamSources: {
      "1080p": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      "720p": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      "480p": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      "Audio": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4"
    },
    category: "Naturaleza & Viajes",
    isOfflineReady: true
  },
  {
    id: "0rJ94rt2hww",
    title: "Modern Web Architecture & Zero-Knowledge Cryptography: Building Secure Systems",
    channelTitle: "Computerphile Tech",
    channelAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80",
    duration: "19:40",
    durationSec: 1180,
    viewCount: "620K",
    publishedAt: "Hace 5 d\xEDas",
    description: "C\xF3mo funcionan las llaves criptogr\xE1ficas sim\xE9tricas AES-GCM en navegadores modernos y c\xF3mo construir aplicaciones privadas sin almacenar datos sensibles en la nube.",
    thumbnail: "https://i.ytimg.com/vi/0rJ94rt2hww/hqdefault.jpg",
    resolutions: ["1080p", "720p", "480p", "Audio"],
    streamSources: {
      "1080p": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
      "720p": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
      "480p": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      "Audio": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
    },
    category: "Tecnolog\xEDa",
    isOfflineReady: true
  },
  {
    id: "kJQP7kiw5Fk",
    title: "Luis Fonsi \u2013 Despacito ft. Daddy Yankee (Official Music Video 4K)",
    channelTitle: "Luis Fonsi",
    channelAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
    duration: "4:41",
    durationSec: 281,
    viewCount: "8.4B",
    publishedAt: "Oficial",
    description: "Uno de los videos m\xE1s reproducidos de la historia de YouTube con alta fidelidad de sonido y reproducci\xF3n sin publicidad.",
    thumbnail: "https://i.ytimg.com/vi/kJQP7kiw5Fk/hqdefault.jpg",
    resolutions: ["1080p", "720p", "480p", "Audio"],
    streamSources: {
      "1080p": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      "720p": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      "480p": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      "Audio": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4"
    },
    category: "M\xFAsica & Lo-Fi",
    isOfflineReady: true
  },
  {
    id: "3JZ_D3ELwOQ",
    title: "Calm Rain Sounds at Cozy Forest Cottage for Sleeping, Relaxing & Deep Study 1080p",
    channelTitle: "Relaxation Meditation",
    channelAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80",
    duration: "35:00",
    durationSec: 2100,
    viewCount: "5.6M",
    publishedAt: "Hace 4 d\xEDas",
    description: "Sonidos de lluvia suave en bosque con trueno distante. Audio 3D binaural para conciliar el sue\xF1o y concentraci\xF3n m\xE1xima.",
    thumbnail: "https://i.ytimg.com/vi/3JZ_D3ELwOQ/hqdefault.jpg",
    resolutions: ["1080p", "720p", "480p", "Audio"],
    streamSources: {
      "1080p": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      "720p": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
      "480p": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      "Audio": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
    },
    category: "Relajaci\xF3n & Audio",
    isOfflineReady: true
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Rick Astley \u2013 Never Gonna Give You Up (Official Music Video 4K Remastered)",
    channelTitle: "Rick Astley",
    channelAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
    duration: "3:33",
    durationSec: 213,
    viewCount: "1.5B",
    publishedAt: "Remasterizado",
    description: "El cl\xE1sico indiscutible de Rick Astley remasterizado en alta resoluci\xF3n.",
    thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    resolutions: ["1080p", "720p", "480p", "Audio"],
    streamSources: {
      "1080p": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      "720p": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      "480p": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      "Audio": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
    },
    category: "M\xFAsica & Lo-Fi",
    isOfflineReady: true
  }
];
async function startServer() {
  const app = (0, import_express.default)();
  const PORT = 3e3;
  app.use(import_express.default.json({ limit: "50mb" }));
  app.get("/api/health", (req, res) => {
    res.json({
      status: "ok",
      service: "YouTube Offline & E2EE Cloud Sync Client",
      time: (/* @__PURE__ */ new Date()).toISOString()
    });
  });
  app.post("/api/auth/register", (req, res) => {
    const { username, email, passwordHash, salt, keyVerification, device } = req.body;
    if (!username || !email || !passwordHash || !salt) {
      return res.status(400).json({ error: "Faltan campos obligatorios" });
    }
    for (const u of users.values()) {
      if (u.email.toLowerCase() === email.toLowerCase()) {
        return res.status(409).json({ error: "El correo electr\xF3nico ya est\xE1 registrado" });
      }
      if (u.username.toLowerCase() === username.toLowerCase()) {
        return res.status(409).json({ error: "El nombre de usuario ya est\xE1 en uso" });
      }
    }
    const userId = "usr_" + Math.random().toString(36).substring(2, 11);
    const newUser = {
      id: userId,
      username,
      email,
      passwordHash,
      salt,
      keyVerification: keyVerification || "",
      createdAt: Date.now()
    };
    users.set(userId, newUser);
    const deviceId = device?.id || "dev_" + Math.random().toString(36).substring(2, 10);
    const newDevice = {
      id: deviceId,
      userId,
      name: device?.name || "Navegador Web",
      type: device?.type || "desktop",
      os: device?.os || "Desconocido",
      browser: device?.browser || "Browser",
      ip: req.ip || "127.0.0.1",
      lastActive: Date.now(),
      registeredAt: Date.now()
    };
    devices.set(userId, [newDevice]);
    res.json({
      token: "jwt_" + Buffer.from(userId + ":" + Date.now()).toString("base64"),
      user: {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email,
        createdAt: newUser.createdAt,
        salt: newUser.salt,
        keyVerification: newUser.keyVerification
      },
      currentDeviceId: deviceId,
      devices: [newDevice]
    });
  });
  app.post("/api/auth/login", (req, res) => {
    const { emailOrUsername, passwordHash, device } = req.body;
    if (!emailOrUsername || !passwordHash) {
      return res.status(400).json({ error: "Credenciales incompletas" });
    }
    let foundUser;
    for (const u of users.values()) {
      if (u.email.toLowerCase() === emailOrUsername.toLowerCase() || u.username.toLowerCase() === emailOrUsername.toLowerCase()) {
        foundUser = u;
        break;
      }
    }
    if (!foundUser || foundUser.passwordHash !== passwordHash) {
      return res.status(401).json({ error: "Credenciales inv\xE1lidas" });
    }
    const userDevices = devices.get(foundUser.id) || [];
    let currentDevice = userDevices.find((d) => d.id === device?.id);
    if (!currentDevice) {
      currentDevice = {
        id: device?.id || "dev_" + Math.random().toString(36).substring(2, 10),
        userId: foundUser.id,
        name: device?.name || "Dispositivo Sincronizado",
        type: device?.type || "desktop",
        os: device?.os || "Web OS",
        browser: device?.browser || "Browser",
        ip: req.ip || "127.0.0.1",
        lastActive: Date.now(),
        registeredAt: Date.now()
      };
      userDevices.push(currentDevice);
    } else {
      currentDevice.lastActive = Date.now();
      if (device?.name) currentDevice.name = device.name;
    }
    devices.set(foundUser.id, userDevices);
    const vault = vaults.get(foundUser.id);
    res.json({
      token: "jwt_" + Buffer.from(foundUser.id + ":" + Date.now()).toString("base64"),
      user: {
        id: foundUser.id,
        username: foundUser.username,
        email: foundUser.email,
        createdAt: foundUser.createdAt,
        salt: foundUser.salt,
        keyVerification: foundUser.keyVerification
      },
      currentDeviceId: currentDevice.id,
      devices: userDevices,
      vault: vault ? {
        ciphertext: vault.ciphertext,
        iv: vault.iv,
        version: vault.version,
        updatedAt: vault.updatedAt,
        lastDeviceId: vault.lastDeviceId
      } : null
    });
  });
  app.get("/api/auth/me", (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: "No autorizado" });
    }
    const token = authHeader.substring(7);
    try {
      const decoded = Buffer.from(token.replace("jwt_", ""), "base64").toString();
      const [userId] = decoded.split(":");
      const user = users.get(userId);
      if (!user) return res.status(401).json({ error: "Sesi\xF3n expirada" });
      const userDevices = devices.get(userId) || [];
      res.json({
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          createdAt: user.createdAt,
          salt: user.salt,
          keyVerification: user.keyVerification
        },
        devices: userDevices
      });
    } catch {
      res.status(401).json({ error: "Token inv\xE1lido" });
    }
  });
  app.post("/api/sync/push", (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Se requiere autenticaci\xF3n para sincronizar" });
    }
    const token = authHeader.substring(7);
    try {
      const decoded = Buffer.from(token.replace("jwt_", ""), "base64").toString();
      const [userId] = decoded.split(":");
      const user = users.get(userId);
      if (!user) return res.status(401).json({ error: "Usuario no encontrado" });
      const { ciphertext, iv, version, deviceId, checksum } = req.body;
      if (!ciphertext || !iv) {
        return res.status(400).json({ error: "Payload encriptado inv\xE1lido" });
      }
      const existingVault = vaults.get(userId);
      const newVersion = (existingVault?.version || 0) + 1;
      const record = {
        userId,
        ciphertext,
        iv,
        version: newVersion,
        updatedAt: Date.now(),
        clientTimestamp: req.body.clientTimestamp || Date.now(),
        lastDeviceId: deviceId,
        checksum
      };
      vaults.set(userId, record);
      const userDevices = devices.get(userId) || [];
      const dev = userDevices.find((d) => d.id === deviceId);
      if (dev) {
        dev.lastActive = Date.now();
      }
      res.json({
        success: true,
        version: newVersion,
        updatedAt: record.updatedAt,
        syncedDevicesCount: userDevices.length
      });
    } catch {
      res.status(500).json({ error: "Error en la sincronizaci\xF3n en la nube" });
    }
  });
  app.get("/api/sync/pull", (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Se requiere autenticaci\xF3n" });
    }
    const token = authHeader.substring(7);
    try {
      const decoded = Buffer.from(token.replace("jwt_", ""), "base64").toString();
      const [userId] = decoded.split(":");
      const user = users.get(userId);
      if (!user) return res.status(401).json({ error: "Usuario no encontrado" });
      const vault = vaults.get(userId);
      const userDevices = devices.get(userId) || [];
      res.json({
        vault: vault ? {
          ciphertext: vault.ciphertext,
          iv: vault.iv,
          version: vault.version,
          updatedAt: vault.updatedAt,
          lastDeviceId: vault.lastDeviceId,
          checksum: vault.checksum
        } : null,
        devices: userDevices
      });
    } catch {
      res.status(500).json({ error: "Error al obtener datos sincronizados" });
    }
  });
  app.get("/api/sync/devices", (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: "No autorizado" });
    }
    const token = authHeader.substring(7);
    try {
      const decoded = Buffer.from(token.replace("jwt_", ""), "base64").toString();
      const [userId] = decoded.split(":");
      const userDevices = devices.get(userId) || [];
      res.json({ devices: userDevices });
    } catch {
      res.status(401).json({ error: "Token inv\xE1lido" });
    }
  });
  app.delete("/api/sync/devices/:deviceId", (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: "No autorizado" });
    }
    const token = authHeader.substring(7);
    try {
      const decoded = Buffer.from(token.replace("jwt_", ""), "base64").toString();
      const [userId] = decoded.split(":");
      const userDevices = devices.get(userId) || [];
      const updated = userDevices.filter((d) => d.id !== req.params.deviceId);
      devices.set(userId, updated);
      res.json({ success: true, remainingDevices: updated });
    } catch {
      res.status(401).json({ error: "Token inv\xE1lido" });
    }
  });
  function parseDurationTextToSec(durationStr) {
    if (!durationStr) return 0;
    const parts = durationStr.split(":").map(Number);
    if (parts.length === 3) {
      return parts[0] * 3600 + parts[1] * 60 + parts[2];
    }
    if (parts.length === 2) {
      return parts[0] * 60 + parts[1];
    }
    return 300;
  }
  async function searchYouTubeLive(query) {
    const searchTasks = [
      // Provider 1: Direct YouTube Scraper with Consent Header
      async () => {
        const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}&hl=es&gl=ES`;
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 4500);
        const res = await fetch(url, {
          signal: controller.signal,
          headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
            "Accept-Language": "es-ES,es;q=0.9,en;q=0.8",
            "Cookie": "CONSENT=YES+cb.20210328-17-p0.es+FX+999; SOCS=CAESEwgDEgk0ODE3Nzk3MjQaAmVuIAEaBgiA_LyaBg; PREF=hl=es&gl=ES;"
          }
        });
        clearTimeout(timeoutId);
        if (!res.ok) return [];
        const html = await res.text();
        const match = html.match(/ytInitialData\s*=\s*({.+?});<\/script>/) || html.match(/var ytInitialData\s*=\s*({.+?});/);
        if (!match) return [];
        const data = JSON.parse(match[1]);
        const sections = data.contents?.twoColumnSearchResultsRenderer?.primaryContents?.sectionListRenderer?.contents || [];
        const items = [];
        for (const sec of sections) {
          const itemSection = sec.itemSectionRenderer?.contents || [];
          for (const item of itemSection) {
            if (item.videoRenderer) {
              const v = item.videoRenderer;
              const id = v.videoId;
              if (!id) continue;
              const title = v.title?.runs?.map((r) => r.text).join("") || v.title?.simpleText || "Video de YouTube";
              const channelTitle = v.ownerText?.runs?.map((r) => r.text).join("") || v.longBylineText?.runs?.map((r) => r.text).join("") || "Canal Oficial";
              const channelAvatar = v.channelThumbnailSupportedRenderers?.channelThumbnailWithLinkRenderer?.thumbnail?.thumbnails?.[0]?.url || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100&auto=format&fit=crop&q=80";
              const duration = v.lengthText?.simpleText || "HD";
              const viewCount = v.viewCountText?.simpleText || v.shortViewCountText?.simpleText || "Vistas";
              const publishedAt = v.publishedTimeText?.simpleText || "Reciente";
              const thumbnail = v.thumbnail?.thumbnails?.slice(-1)[0]?.url || `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
              const description = v.detailedMetadataSnippets?.[0]?.snippetText?.runs?.map((r) => r.text).join("") || `Video de YouTube (${channelTitle}). Compatible con reproducci\xF3n en alta definici\xF3n sin anuncios y descargas offline locales.`;
              items.push({
                id,
                title,
                channelTitle,
                channelAvatar,
                duration,
                durationSec: parseDurationTextToSec(duration),
                viewCount,
                publishedAt,
                description,
                thumbnail,
                resolutions: ["1080p", "720p", "480p", "Audio"],
                streamSources: {
                  "1080p": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                  "720p": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
                  "480p": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
                  "Audio": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
                },
                category: "YouTube",
                isOfflineReady: true
              });
            }
          }
        }
        return items;
      },
      // Provider 2: Public Invidious API Instance 1
      async () => {
        const invidiousEndpoints = [
          `https://inv.nadeko.net/api/v1/search?q=${encodeURIComponent(query)}&type=video`,
          `https://yewtu.be/api/v1/search?q=${encodeURIComponent(query)}&type=video`,
          `https://invidious.nerdvpn.de/api/v1/search?q=${encodeURIComponent(query)}&type=video`,
          `https://invidious.projectsegfau.lt/api/v1/search?q=${encodeURIComponent(query)}&type=video`
        ];
        for (const ep of invidiousEndpoints) {
          try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 3500);
            const res = await fetch(ep, { signal: controller.signal });
            clearTimeout(timeoutId);
            if (res.ok) {
              const data = await res.json();
              if (Array.isArray(data) && data.length > 0) {
                return data.filter((item) => item.videoId && item.title).map((item) => {
                  const secs = item.lengthSeconds || 300;
                  const mins = Math.floor(secs / 60);
                  const remSec = secs % 60;
                  const duration = `${mins}:${remSec < 10 ? "0" : ""}${remSec}`;
                  return {
                    id: item.videoId,
                    title: item.title,
                    channelTitle: item.author || "Canal",
                    channelAvatar: item.authorThumbnails?.[0]?.url || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100&auto=format&fit=crop&q=80",
                    duration,
                    durationSec: secs,
                    viewCount: `${(item.viewCount || 1e3).toLocaleString()} vistas`,
                    publishedAt: item.publishedText || "Reciente",
                    description: item.description || `Video en alta definici\xF3n de YouTube (${item.author || "Canal"}).`,
                    thumbnail: item.videoThumbnails?.find((t) => t.quality === "medium")?.url || `https://i.ytimg.com/vi/${item.videoId}/hqdefault.jpg`,
                    resolutions: ["1080p", "720p", "480p", "Audio"],
                    streamSources: {
                      "1080p": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                      "720p": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
                      "480p": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
                      "Audio": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
                    },
                    category: "YouTube",
                    isOfflineReady: true
                  };
                });
              }
            }
          } catch {
          }
        }
        return [];
      }
    ];
    for (const task of searchTasks) {
      try {
        const results = await task();
        if (results && results.length > 0) {
          return results;
        }
      } catch (err) {
      }
    }
    return [];
  }
  app.get("/api/youtube/search", async (req, res) => {
    const rawQuery = (req.query.q || "").trim();
    const query = rawQuery.toLowerCase();
    const category = (req.query.category || "").trim();
    const ytIdMatch = rawQuery.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|shorts\/))([\w-]{11})/);
    const extractedId = ytIdMatch ? ytIdMatch[1] : rawQuery.length === 11 && !rawQuery.includes(" ") ? rawQuery : null;
    if (extractedId) {
      let title = `Video de YouTube: ${extractedId}`;
      let author = "Canal de YouTube";
      try {
        const oembedRes = await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${extractedId}&format=json`);
        if (oembedRes.ok) {
          const oeData = await oembedRes.json();
          if (oeData.title) title = oeData.title;
          if (oeData.author_name) author = oeData.author_name;
        }
      } catch {
      }
      const customItem = {
        id: extractedId,
        title,
        channelTitle: author,
        channelAvatar: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100&auto=format&fit=crop&q=80",
        duration: "10:00",
        durationSec: 600,
        viewCount: "1.2M vistas",
        publishedAt: "Reciente",
        description: `Video importado directamente desde YouTube (${extractedId}). Compatible con descarga offline de alta resoluci\xF3n y reproductor minimalista sin anuncios.`,
        thumbnail: `https://i.ytimg.com/vi/${extractedId}/hqdefault.jpg`,
        resolutions: ["1080p", "720p", "480p", "Audio"],
        streamSources: {
          "1080p": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          "720p": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
          "480p": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
          "Audio": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
        },
        category: "Personalizado",
        isOfflineReady: true
      };
      return res.json({
        results: [customItem],
        total: 1,
        categories: ["Todos", "Ciencia & Naturaleza", "M\xFAsica & Lo-Fi", "Tecnolog\xEDa", "Naturaleza & Viajes", "Productividad", "Relajaci\xF3n & Audio"]
      });
    }
    if (query) {
      const liveResults = await searchYouTubeLive(rawQuery);
      if (liveResults.length > 0) {
        return res.json({
          results: liveResults,
          total: liveResults.length,
          categories: ["Todos", "Ciencia & Naturaleza", "M\xFAsica & Lo-Fi", "Tecnolog\xEDa", "Naturaleza & Viajes", "Productividad", "Relajaci\xF3n & Audio"]
        });
      }
    }
    let results = [...SAMPLE_VIDEOS];
    if (category && category !== "Todos") {
      results = results.filter((v) => v.category.toLowerCase() === category.toLowerCase());
    }
    if (query) {
      results = results.filter(
        (v) => v.title.toLowerCase().includes(query) || v.channelTitle.toLowerCase().includes(query) || v.description.toLowerCase().includes(query) || v.category.toLowerCase().includes(query)
      );
    }
    res.json({
      results,
      total: results.length,
      categories: ["Todos", "Ciencia & Naturaleza", "M\xFAsica & Lo-Fi", "Tecnolog\xEDa", "Naturaleza & Viajes", "Productividad", "Relajaci\xF3n & Audio"]
    });
  });
  app.get("/api/youtube/video/:id", async (req, res) => {
    const videoId = req.params.id;
    let video = SAMPLE_VIDEOS.find((v) => v.id === videoId);
    if (!video) {
      let title = `YouTube Video (${videoId})`;
      let author = "Canal Oficial";
      try {
        const oembedRes = await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`);
        if (oembedRes.ok) {
          const oeData = await oembedRes.json();
          if (oeData.title) title = oeData.title;
          if (oeData.author_name) author = oeData.author_name;
        }
      } catch {
      }
      video = {
        id: videoId,
        title,
        channelTitle: author,
        channelAvatar: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100&auto=format&fit=crop&q=80",
        duration: "10:00",
        durationSec: 600,
        viewCount: "950K vistas",
        publishedAt: "Reciente",
        description: `Reproducci\xF3n de alta fidelidad sin publicidad con opci\xF3n de descarga offline para ${videoId}.`,
        thumbnail: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
        resolutions: ["1080p", "720p", "480p", "Audio"],
        streamSources: {
          "1080p": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          "720p": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
          "480p": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
          "Audio": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
        },
        category: "Personalizado",
        isOfflineReady: true
      };
    }
    const related = SAMPLE_VIDEOS.filter((v) => v.id !== videoId).slice(0, 5);
    res.json({ video, related });
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
    console.log(`Minimalist YouTube Client with E2EE Sync server listening on http://0.0.0.0:${PORT}`);
  });
}
startServer();
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SAMPLE_VIDEOS
});
//# sourceMappingURL=server.cjs.map
