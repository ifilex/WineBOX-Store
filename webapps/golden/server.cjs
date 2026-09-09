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
var leaderboardData = [
  { id: "1", playerName: "GOLDEN_WARRIOR", hero: "ax", score: 98450, stage: 5, stageName: "Death Adder's Throne", kills: 142, coop: true, platform: "Desktop", date: "2026-09-08" },
  { id: "2", playerName: "TYRIS_QUEEN", hero: "tyris", score: 87320, stage: 5, stageName: "Death Adder's Throne", kills: 128, coop: false, platform: "Mobile", date: "2026-09-07" },
  { id: "3", playerName: "THUNDER_AXE", hero: "gilius", score: 79100, stage: 4, stageName: "Castle Gates", kills: 110, coop: true, platform: "Gamepad", date: "2026-09-06" },
  { id: "4", playerName: "BARBARIAN_X", hero: "ax", score: 65400, stage: 3, stageName: "Across the Sea", kills: 89, coop: false, platform: "Desktop", date: "2026-09-05" },
  { id: "5", playerName: "DRAGON_RIDER", hero: "tyris", score: 54200, stage: 2, stageName: "Turtle Village", kills: 74, coop: false, platform: "Mobile", date: "2026-09-04" },
  { id: "6", playerName: "DWARF_LORD", hero: "gilius", score: 48900, stage: 2, stageName: "Turtle Village", kills: 63, coop: true, platform: "Gamepad", date: "2026-09-03" },
  { id: "7", playerName: "ARCADE_HERO", hero: "ax", score: 39500, stage: 1, stageName: "Woodland Outskirts", kills: 48, coop: false, platform: "Desktop", date: "2026-09-02" }
];
var SHOP_ITEMS = [
  {
    id: "skin_ax_golden",
    name: "Golden Barbarian Armor",
    category: "skin",
    hero: "ax",
    cost: 400,
    icon: "axe",
    desc: "Forged in the legendary fiery furnaces of Firewood. Radiates champion prestige.",
    color: "#eab308",
    aura: "rgba(234, 179, 8, 0.6)"
  },
  {
    id: "skin_tyris_crimson",
    name: "Crimson Flame Valkyrie",
    category: "skin",
    hero: "tyris",
    cost: 350,
    icon: "flame",
    desc: "Infused with the eternal flame of the sacred Fire Dragon.",
    color: "#f43f5e",
    aura: "rgba(244, 63, 94, 0.6)"
  },
  {
    id: "skin_gilius_storm",
    name: "Thunder King Regalia",
    category: "skin",
    hero: "gilius",
    cost: 350,
    icon: "zap",
    desc: "Blessed by the ancient mountain clouds. Crackles with pure voltage.",
    color: "#06b6d4",
    aura: "rgba(6, 182, 212, 0.6)"
  },
  {
    id: "weapon_sun_blade",
    name: "Solar Sun Broadsword",
    category: "weapon",
    hero: "ax",
    cost: 250,
    icon: "sword",
    desc: "Blazing blade that leaves glowing trail slashes during combos.",
    color: "#fb923c",
    aura: "rgba(251, 146, 60, 0.5)"
  },
  {
    id: "weapon_frost_axe",
    name: "Glacial Heavy Waraxe",
    category: "weapon",
    hero: "gilius",
    cost: 250,
    icon: "shield",
    desc: "Carved from glacial peaks. Chilling impact particle FX.",
    color: "#38bdf8",
    aura: "rgba(56, 189, 248, 0.5)"
  },
  {
    id: "aura_dragon_blaze",
    name: "Dragon Fire Aura",
    category: "aura",
    hero: "all",
    cost: 500,
    icon: "sparkles",
    desc: "Cosmetic flame halo surrounding your warrior in battle.",
    color: "#ef4444",
    aura: "rgba(239, 68, 68, 0.7)"
  },
  {
    id: "title_death_bane",
    name: "Title: Death Adder's Bane",
    category: "title",
    hero: "all",
    cost: 200,
    icon: "crown",
    desc: "Displayed proudly alongside your name in Online Leaderboards.",
    color: "#a855f7",
    aura: "rgba(168, 85, 247, 0.5)"
  }
];
var WEEKLY_CHALLENGES = [
  {
    id: "ch_gnome_rush",
    title: "Gnome Potions Frenzy",
    description: "Hit thieves and gather 25 magic potions across battles.",
    rewardGold: 150,
    target: 25,
    type: "potions"
  },
  {
    id: "ch_beast_master",
    title: "Beast Cavalier",
    description: "Ride the Bizarrian Chicken-Leg and Dragon to defeat 30 enemies.",
    rewardGold: 200,
    target: 30,
    type: "mount_kills"
  },
  {
    id: "ch_magic_cataclysm",
    title: "Wrath of the Gods",
    description: "Cast full-level magic 5 times to incinerate enemy legions.",
    rewardGold: 250,
    target: 5,
    type: "magic_full"
  },
  {
    id: "ch_skeleton_slayer",
    title: "Bone Breaker",
    description: "Smash 20 resurrected skeleton soldiers into dust.",
    rewardGold: 180,
    target: 20,
    type: "skeletons"
  }
];
async function startServer() {
  const app = (0, import_express.default)();
  const PORT = 3e3;
  app.use(import_express.default.json());
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", uptime: process.uptime(), serverTime: (/* @__PURE__ */ new Date()).toISOString() });
  });
  app.get("/api/leaderboard", (_req, res) => {
    const sorted = [...leaderboardData].sort((a, b) => b.score - a.score).slice(0, 30);
    res.json({ leaderboard: sorted, totalEntries: leaderboardData.length });
  });
  app.post("/api/leaderboard", (req, res) => {
    const { playerName, hero, score, stage, stageName, kills, coop, platform } = req.body;
    if (!playerName || typeof score !== "number") {
      return res.status(400).json({ error: "Invalid payload" });
    }
    const newEntry = {
      id: "lb_" + Date.now() + "_" + Math.random().toString(36).substring(2, 6),
      playerName: String(playerName).trim().toUpperCase().substring(0, 15) || "WARRIOR",
      hero: hero === "tyris" || hero === "gilius" ? hero : "ax",
      score: Math.max(0, Math.floor(score)),
      stage: Number(stage) || 1,
      stageName: stageName || "Stage " + (stage || 1),
      kills: Number(kills) || 0,
      coop: Boolean(coop),
      platform: platform === "Mobile" || platform === "Gamepad" ? platform : "Desktop",
      date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
    };
    leaderboardData.push(newEntry);
    leaderboardData.sort((a, b) => b.score - a.score);
    if (leaderboardData.length > 100) {
      leaderboardData = leaderboardData.slice(0, 100);
    }
    const rank = leaderboardData.findIndex((e) => e.id === newEntry.id) + 1;
    res.json({ success: true, entry: newEntry, rank });
  });
  app.get("/api/shop", (_req, res) => {
    res.json({ items: SHOP_ITEMS });
  });
  app.get("/api/challenges", (_req, res) => {
    res.json({
      challenges: WEEKLY_CHALLENGES,
      season: "Season 1: Return of Death Adder",
      seasonEndsInDays: 14
    });
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
    console.log(`Golden Axe Arcade Server listening on http://0.0.0.0:${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
