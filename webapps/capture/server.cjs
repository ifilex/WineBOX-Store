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
var import_http = __toESM(require("http"), 1);
var import_path = __toESM(require("path"), 1);
var import_ws = require("ws");
var import_vite = require("vite");
var app = (0, import_express.default)();
var PORT = 3e3;
app.use(import_express.default.json());
var profilesDb = /* @__PURE__ */ new Map();
var syncCodeIndex = /* @__PURE__ */ new Map();
var initialLegends = [
  {
    id: "leg-1",
    username: "DOS_COMMANDER",
    syncCode: "CTF-DOS-1994",
    mmr: 2480,
    rankTier: "General",
    matchesPlayed: 412,
    wins: 340,
    losses: 72,
    flagsCaptured: 580,
    flagsReturned: 410,
    tags: 1420,
    deaths: 390,
    accuracy: 78,
    platform: "pc",
    avatar: "\u{1F396}\uFE0F",
    equippedColor: "#ef4444",
    savedMaps: [],
    lastSynced: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: "leg-2",
    username: "PixelPhantom",
    syncCode: "CTF-PIX-9500",
    mmr: 2210,
    rankTier: "Colonel",
    matchesPlayed: 320,
    wins: 250,
    losses: 70,
    flagsCaptured: 430,
    flagsReturned: 290,
    tags: 980,
    deaths: 310,
    accuracy: 74,
    platform: "pc",
    avatar: "\u26A1",
    equippedColor: "#3b82f6",
    savedMaps: [],
    lastSynced: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: "leg-3",
    username: "VGA_Sentry",
    syncCode: "CTF-VGA-2001",
    mmr: 1950,
    rankTier: "Major",
    matchesPlayed: 215,
    wins: 160,
    losses: 55,
    flagsCaptured: 275,
    flagsReturned: 340,
    tags: 890,
    deaths: 240,
    accuracy: 71,
    platform: "console",
    avatar: "\u{1F451}",
    equippedColor: "#10b981",
    savedMaps: [],
    lastSynced: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: "leg-4",
    username: "TouchRunner95",
    syncCode: "CTF-MOB-7712",
    mmr: 1740,
    rankTier: "Captain",
    matchesPlayed: 180,
    wins: 125,
    losses: 55,
    flagsCaptured: 240,
    flagsReturned: 110,
    tags: 560,
    deaths: 190,
    accuracy: 68,
    platform: "mobile",
    avatar: "\u{1F525}",
    equippedColor: "#f59e0b",
    savedMaps: [],
    lastSynced: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: "leg-5",
    username: "CyberGhost_X",
    syncCode: "CTF-CYB-8821",
    mmr: 1520,
    rankTier: "Lieutenant",
    matchesPlayed: 130,
    wins: 85,
    losses: 45,
    flagsCaptured: 160,
    flagsReturned: 95,
    tags: 430,
    deaths: 150,
    accuracy: 65,
    platform: "pc",
    avatar: "\u2B50",
    equippedColor: "#a855f7",
    savedMaps: [],
    lastSynced: (/* @__PURE__ */ new Date()).toISOString()
  }
];
initialLegends.forEach((p) => {
  profilesDb.set(p.id, p);
  syncCodeIndex.set(p.syncCode, p.id);
});
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", serverTime: Date.now() });
});
app.get("/api/leaderboard", (req, res) => {
  const all = Array.from(profilesDb.values());
  all.sort((a, b) => b.mmr - a.mmr);
  const leaderboard = all.slice(0, 50).map((p, idx) => ({
    rank: idx + 1,
    username: p.username,
    mmr: p.mmr,
    rankTier: p.rankTier,
    wins: p.wins,
    losses: p.losses,
    flagsCaptured: p.flagsCaptured,
    flagsReturned: p.flagsReturned,
    winRate: p.matchesPlayed > 0 ? Math.round(p.wins / p.matchesPlayed * 100) : 0,
    platform: p.platform,
    avatar: p.avatar
  }));
  res.json({ leaderboard });
});
app.post("/api/profile/save", (req, res) => {
  const profile = req.body;
  if (!profile || !profile.id) {
    return res.status(400).json({ error: "Invalid profile data" });
  }
  profile.lastSynced = (/* @__PURE__ */ new Date()).toISOString();
  profilesDb.set(profile.id, profile);
  if (profile.syncCode) {
    syncCodeIndex.set(profile.syncCode, profile.id);
  }
  res.json({ success: true, lastSynced: profile.lastSynced });
});
app.get("/api/profile/load", (req, res) => {
  const { id, syncCode } = req.query;
  let profile;
  if (syncCode && typeof syncCode === "string") {
    const targetId = syncCodeIndex.get(syncCode.trim().toUpperCase());
    if (targetId) {
      profile = profilesDb.get(targetId);
    }
  } else if (id && typeof id === "string") {
    profile = profilesDb.get(id);
  }
  if (!profile) {
    return res.status(404).json({ error: "Profile not found" });
  }
  res.json({ profile });
});
var server = import_http.default.createServer(app);
var wss = new import_ws.WebSocketServer({ noServer: true, perMessageDeflate: false });
server.on("upgrade", (request, socket, head) => {
  try {
    const url = new URL(request.url || "", `http://${request.headers.host || "localhost"}`);
    if (url.pathname === "/ws") {
      wss.handleUpgrade(request, socket, head, (ws) => {
        wss.emit("connection", ws, request);
      });
    }
  } catch {
  }
});
app.get("/api/health", (req, res) => {
  let totalOnline = 0;
  for (const [, r] of activeRooms) {
    totalOnline += r.players.size;
  }
  res.json({ status: "ok", onlinePlayers: totalOnline, activeRooms: activeRooms.size });
});
var activeRooms = /* @__PURE__ */ new Map();
function getOrCreateRoom(roomId, mode = "casual") {
  let room = activeRooms.get(roomId);
  if (!room) {
    const redBase = { x: 2 * 32 + 16, y: 10 * 32 + 16 };
    const blueBase = { x: 29 * 32 + 16, y: 10 * 32 + 16 };
    room = {
      id: roomId,
      name: roomId,
      mode,
      region: "us-east",
      targetScore: 3,
      matchTimeRemaining: 300,
      status: "in_progress",
      winner: null,
      score: { red: 0, blue: 0 },
      players: /* @__PURE__ */ new Map(),
      flags: {
        red: {
          team: "red",
          x: redBase.x,
          y: redBase.y,
          baseX: redBase.x,
          baseY: redBase.y,
          isHome: true,
          carriedBy: null,
          dropped: false,
          dropTimer: 0
        },
        blue: {
          team: "blue",
          x: blueBase.x,
          y: blueBase.y,
          baseX: blueBase.x,
          baseY: blueBase.y,
          isHome: true,
          carriedBy: null,
          dropped: false,
          dropTimer: 0
        }
      },
      projectiles: [],
      killFeed: [],
      lastTick: Date.now()
    };
    if (mode === "coop") {
      const botNames = ["CyberBot Alpha", "VGA Stalker", "Pixel Guard", "D.O.S. Intruder"];
      botNames.forEach((name, i) => {
        const botId = `bot-${i}`;
        const bot = {
          id: botId,
          name,
          team: "blue",
          x: blueBase.x + (Math.random() - 0.5) * 60,
          y: blueBase.y + (Math.random() - 0.5) * 60,
          vx: 0,
          vy: 0,
          angle: Math.PI,
          health: 100,
          maxHealth: 100,
          stamina: 100,
          ammo: 12,
          maxAmmo: 12,
          isCarryingFlag: false,
          carryingTeamFlag: null,
          isDashing: false,
          isStealthed: false,
          isShooting: false,
          score: 0,
          kills: 0,
          deaths: 0,
          captures: 0,
          returns: 0,
          ping: 5,
          platform: "pc",
          isBot: true,
          rank: "Corporal",
          isSpeaking: false,
          respawnTimer: 0
        };
        room.players.set(botId, bot);
      });
    }
    room.interval = setInterval(() => {
      tickRoom(room);
    }, 1e3 / 30);
    activeRooms.set(roomId, room);
  }
  return room;
}
function tickRoom(room) {
  const now = Date.now();
  const dt = Math.min((now - room.lastTick) / 1e3, 0.1);
  room.lastTick = now;
  if (room.status === "ended") return;
  if (room.matchTimeRemaining > 0) {
    room.matchTimeRemaining = Math.max(0, room.matchTimeRemaining - dt);
    if (room.matchTimeRemaining <= 0) {
      room.status = "ended";
      room.winner = room.score.red > room.score.blue ? "red" : room.score.blue > room.score.red ? "blue" : null;
    }
  }
  for (let i = room.projectiles.length - 1; i >= 0; i--) {
    const p = room.projectiles[i];
    p.x += p.vx * dt;
    p.y += p.vy * dt;
    const dist = Math.hypot(p.vx * dt, p.vy * dt);
    p.rangeLeft -= dist;
    if (p.x < 32 || p.x > 32 * 31 || p.y < 32 || p.y > 32 * 19 || p.rangeLeft <= 0) {
      room.projectiles.splice(i, 1);
      continue;
    }
    for (const [, player] of room.players) {
      if (player.team !== p.team && player.health > 0 && player.respawnTimer <= 0) {
        const hitDist = Math.hypot(player.x - p.x, player.y - p.y);
        if (hitDist < 16) {
          player.health -= p.damage;
          room.projectiles.splice(i, 1);
          if (player.health <= 0) {
            player.deaths++;
            player.respawnTimer = 3.5;
            const killer = room.players.get(p.ownerId);
            if (killer) {
              killer.kills++;
              killer.score += 100;
            }
            if (player.isCarryingFlag && player.carryingTeamFlag) {
              const enemyFlag = room.flags[player.carryingTeamFlag];
              enemyFlag.carriedBy = null;
              enemyFlag.dropped = true;
              enemyFlag.dropTimer = 15;
              enemyFlag.x = player.x;
              enemyFlag.y = player.y;
              player.isCarryingFlag = false;
              player.carryingTeamFlag = null;
            }
            room.killFeed.unshift({
              id: `${now}-${Math.random()}`,
              killerName: killer ? killer.name : "Unknown",
              victimName: player.name,
              killerTeam: p.team,
              victimTeam: player.team,
              action: "tagged",
              timestamp: now
            });
            if (room.killFeed.length > 5) room.killFeed.pop();
          }
          break;
        }
      }
    }
  }
  for (const [, player] of room.players) {
    if (player.respawnTimer > 0) {
      player.respawnTimer -= dt;
      if (player.respawnTimer <= 0) {
        player.health = 100;
        player.stamina = 100;
        player.ammo = 12;
        if (player.team === "red") {
          player.x = 3 * 32 + 16;
          player.y = 10 * 32 + 16;
        } else {
          player.x = 28 * 32 + 16;
          player.y = 10 * 32 + 16;
        }
      }
    }
    if (!player.isDashing && player.stamina < 100) {
      player.stamina = Math.min(100, player.stamina + 25 * dt);
    }
    if (player.isBot && player.respawnTimer <= 0) {
      simulateBot(player, room, dt);
    }
    if (player.isCarryingFlag && player.carryingTeamFlag) {
      const carriedFlag = room.flags[player.carryingTeamFlag];
      carriedFlag.x = player.x;
      carriedFlag.y = player.y;
      const ownFlag = room.flags[player.team];
      const distToHomeBase = Math.hypot(player.x - ownFlag.baseX, player.y - ownFlag.baseY);
      if (distToHomeBase < 32 && ownFlag.isHome) {
        if (player.team === "red") room.score.red++;
        else room.score.blue++;
        player.score += 300;
        player.captures++;
        carriedFlag.isHome = true;
        carriedFlag.carriedBy = null;
        carriedFlag.dropped = false;
        carriedFlag.x = carriedFlag.baseX;
        carriedFlag.y = carriedFlag.baseY;
        player.isCarryingFlag = false;
        player.carryingTeamFlag = null;
        room.killFeed.unshift({
          id: `${now}-${Math.random()}`,
          killerName: player.name,
          victimName: "Enemy Flag",
          killerTeam: player.team,
          victimTeam: carriedFlag.team,
          action: "captured",
          timestamp: now
        });
        if (room.killFeed.length > 5) room.killFeed.pop();
        if (room.score[player.team] >= room.targetScore) {
          room.status = "ended";
          room.winner = player.team;
        }
      }
    }
  }
  ["red", "blue"].forEach((team) => {
    const flag = room.flags[team];
    if (flag.dropped) {
      flag.dropTimer -= dt;
      if (flag.dropTimer <= 0) {
        flag.isHome = true;
        flag.dropped = false;
        flag.x = flag.baseX;
        flag.y = flag.baseY;
      }
    }
  });
  broadcastRoomState(room);
}
function simulateBot(bot, room, dt) {
  const enemyTeam = bot.team === "red" ? "blue" : "red";
  const enemyFlag = room.flags[enemyTeam];
  const ownFlag = room.flags[bot.team];
  let targetX = enemyFlag.x;
  let targetY = enemyFlag.y;
  if (bot.isCarryingFlag) {
    targetX = ownFlag.baseX;
    targetY = ownFlag.baseY;
  } else if (!ownFlag.isHome) {
    targetX = ownFlag.x;
    targetY = ownFlag.y;
  }
  const dx = targetX - bot.x;
  const dy = targetY - bot.y;
  const dist = Math.hypot(dx, dy);
  if (dist > 5) {
    const speed = bot.isCarryingFlag ? 130 : 150;
    bot.vx = dx / dist * speed;
    bot.vy = dy / dist * speed;
    bot.x += bot.vx * dt;
    bot.y += bot.vy * dt;
    bot.angle = Math.atan2(dy, dx);
  }
  for (const [, p] of room.players) {
    if (p.team !== bot.team && p.health > 0 && p.respawnTimer <= 0) {
      const edist = Math.hypot(p.x - bot.x, p.y - bot.y);
      if (edist < 320 && Math.random() < 0.08) {
        const flightTime = edist / 480;
        const predX = p.x + p.vx * flightTime * 1.1;
        const predY = p.y + p.vy * flightTime * 1.1;
        const fireAngle = Math.atan2(predY - bot.y, predX - bot.x);
        bot.angle = fireAngle;
        room.projectiles.push({
          id: `${Date.now()}-${Math.random()}`,
          ownerId: bot.id,
          team: bot.team,
          x: bot.x + Math.cos(fireAngle) * 16,
          y: bot.y + Math.sin(fireAngle) * 16,
          vx: Math.cos(fireAngle) * 480,
          vy: Math.sin(fireAngle) * 480,
          damage: 35,
          rangeLeft: 480
        });
        break;
      }
    }
  }
  if (!bot.isCarryingFlag) {
    const distToFlag = Math.hypot(bot.x - enemyFlag.x, bot.y - enemyFlag.y);
    if (distToFlag < 24 && !enemyFlag.carriedBy) {
      enemyFlag.carriedBy = bot.id;
      enemyFlag.isHome = false;
      enemyFlag.dropped = false;
      bot.isCarryingFlag = true;
      bot.carryingTeamFlag = enemyTeam;
    }
  }
  if (ownFlag.dropped) {
    const distToOwn = Math.hypot(bot.x - ownFlag.x, bot.y - ownFlag.y);
    if (distToOwn < 24) {
      ownFlag.isHome = true;
      ownFlag.dropped = false;
      ownFlag.x = ownFlag.baseX;
      ownFlag.y = ownFlag.baseY;
      bot.returns++;
      bot.score += 150;
    }
  }
}
function broadcastRoomState(room) {
  const playersObj = {};
  for (const [id, p] of room.players) {
    playersObj[id] = {
      id: p.id,
      name: p.name,
      team: p.team,
      x: Math.round(p.x),
      y: Math.round(p.y),
      vx: Math.round(p.vx),
      vy: Math.round(p.vy),
      angle: Number(p.angle.toFixed(2)),
      health: Math.round(p.health),
      maxHealth: p.maxHealth,
      stamina: Math.round(p.stamina),
      ammo: p.ammo,
      maxAmmo: p.maxAmmo,
      isCarryingFlag: p.isCarryingFlag,
      carryingTeamFlag: p.carryingTeamFlag,
      isDashing: p.isDashing,
      isStealthed: p.isStealthed,
      isShooting: p.isShooting,
      score: p.score,
      kills: p.kills,
      deaths: p.deaths,
      captures: p.captures,
      returns: p.returns,
      ping: p.ping,
      platform: p.platform,
      isBot: p.isBot,
      rank: p.rank,
      isSpeaking: p.isSpeaking,
      respawnTimer: Math.ceil(p.respawnTimer)
    };
  }
  const payload = JSON.stringify({
    type: "state",
    roomId: room.id,
    mode: room.mode,
    score: room.score,
    targetScore: room.targetScore,
    matchTimeRemaining: Math.ceil(room.matchTimeRemaining),
    status: room.status,
    winner: room.winner,
    players: playersObj,
    flags: room.flags,
    projectiles: room.projectiles,
    killFeed: room.killFeed
  });
  for (const [, p] of room.players) {
    if (p.ws && p.ws.readyState === import_ws.WebSocket.OPEN) {
      p.ws.send(payload);
    }
  }
}
wss.on("connection", (ws) => {
  let currentRoomId = null;
  let currentPlayerId = null;
  ws.on("message", (message) => {
    try {
      const data = JSON.parse(message.toString());
      if (data.type === "join") {
        currentRoomId = data.roomId || "lobby-1";
        currentPlayerId = data.player?.id || `user-${Date.now()}`;
        const room = getOrCreateRoom(currentRoomId, data.mode || "casual");
        let assignedTeam = data.preferredTeam || "red";
        if (!data.preferredTeam) {
          let redCount = 0;
          let blueCount = 0;
          for (const [, p] of room.players) {
            if (p.team === "red") redCount++;
            if (p.team === "blue") blueCount++;
          }
          assignedTeam = redCount <= blueCount ? "red" : "blue";
        }
        const startX = assignedTeam === "red" ? 3 * 32 + 16 : 28 * 32 + 16;
        const startY = 10 * 32 + 16;
        const player = {
          ws,
          id: currentPlayerId,
          name: data.player?.name || "Player 1",
          team: assignedTeam,
          x: startX,
          y: startY,
          vx: 0,
          vy: 0,
          angle: assignedTeam === "red" ? 0 : Math.PI,
          health: 100,
          maxHealth: 100,
          stamina: 100,
          ammo: 12,
          maxAmmo: 12,
          isCarryingFlag: false,
          carryingTeamFlag: null,
          isDashing: false,
          isStealthed: false,
          isShooting: false,
          score: 0,
          kills: 0,
          deaths: 0,
          captures: 0,
          returns: 0,
          ping: 15,
          platform: data.player?.platform || "pc",
          isBot: false,
          rank: data.player?.rank || "Recruit",
          isSpeaking: false,
          respawnTimer: 0
        };
        room.players.set(currentPlayerId, player);
        ws.send(JSON.stringify({ type: "joined", playerId: currentPlayerId, team: assignedTeam, roomId: currentRoomId }));
      } else if (data.type === "input") {
        if (!currentRoomId || !currentPlayerId) return;
        const room = activeRooms.get(currentRoomId);
        if (!room) return;
        const p = room.players.get(currentPlayerId);
        if (!p || p.health <= 0 || p.respawnTimer > 0) return;
        p.x = data.x;
        p.y = data.y;
        p.vx = data.vx;
        p.vy = data.vy;
        p.angle = data.angle;
        p.isDashing = data.isDashing;
        p.isStealthed = data.isStealthed;
        const enemyTeam = p.team === "red" ? "blue" : "red";
        const enemyFlag = room.flags[enemyTeam];
        const ownFlag = room.flags[p.team];
        if (!p.isCarryingFlag) {
          const distToFlag = Math.hypot(p.x - enemyFlag.x, p.y - enemyFlag.y);
          if (distToFlag < 26 && !enemyFlag.carriedBy) {
            enemyFlag.carriedBy = p.id;
            enemyFlag.isHome = false;
            enemyFlag.dropped = false;
            p.isCarryingFlag = true;
            p.carryingTeamFlag = enemyTeam;
          }
        }
        if (ownFlag.dropped) {
          const distToOwn = Math.hypot(p.x - ownFlag.x, p.y - ownFlag.y);
          if (distToOwn < 26) {
            ownFlag.isHome = true;
            ownFlag.dropped = false;
            ownFlag.x = ownFlag.baseX;
            ownFlag.y = ownFlag.baseY;
            p.returns++;
            p.score += 150;
            room.killFeed.unshift({
              id: `${Date.now()}-${Math.random()}`,
              killerName: p.name,
              victimName: "Home Flag",
              killerTeam: p.team,
              victimTeam: p.team,
              action: "returned",
              timestamp: Date.now()
            });
          }
        }
      } else if (data.type === "shoot") {
        if (!currentRoomId || !currentPlayerId) return;
        const room = activeRooms.get(currentRoomId);
        if (!room) return;
        const p = room.players.get(currentPlayerId);
        if (!p || p.health <= 0 || p.respawnTimer > 0) return;
        room.projectiles.push({
          id: `${Date.now()}-${Math.random()}`,
          ownerId: p.id,
          team: p.team,
          x: data.x,
          y: data.y,
          vx: Math.cos(data.angle) * 480,
          vy: Math.sin(data.angle) * 480,
          damage: 35,
          rangeLeft: 480
        });
      } else if (data.type === "voice_status") {
        if (!currentRoomId || !currentPlayerId) return;
        const room = activeRooms.get(currentRoomId);
        if (!room) return;
        const p = room.players.get(currentPlayerId);
        if (p) {
          p.isSpeaking = !!data.speaking;
        }
      } else if (data.type === "radio_bark") {
        if (!currentRoomId || !currentPlayerId) return;
        const room = activeRooms.get(currentRoomId);
        if (!room) return;
        const p = room.players.get(currentPlayerId);
        if (!p) return;
        const broadcastMsg = JSON.stringify({
          type: "radio_bark",
          sender: p.name,
          team: p.team,
          text: data.text,
          id: `${Date.now()}-${Math.random()}`
        });
        for (const [, teamMate] of room.players) {
          if (teamMate.team === p.team && teamMate.ws && teamMate.ws.readyState === import_ws.WebSocket.OPEN) {
            teamMate.ws.send(broadcastMsg);
          }
        }
      } else if (data.type === "ping") {
        ws.send(JSON.stringify({ type: "pong", clientTimestamp: data.timestamp, serverTimestamp: Date.now() }));
      }
    } catch {
    }
  });
  ws.on("close", () => {
    if (currentRoomId && currentPlayerId) {
      const room = activeRooms.get(currentRoomId);
      if (room) {
        const p = room.players.get(currentPlayerId);
        if (p && p.isCarryingFlag && p.carryingTeamFlag) {
          const flag = room.flags[p.carryingTeamFlag];
          flag.carriedBy = null;
          flag.dropped = true;
          flag.dropTimer = 15;
        }
        room.players.delete(currentPlayerId);
        if (room.players.size === 0) {
          if (room.interval) clearInterval(room.interval);
          activeRooms.delete(currentRoomId);
        }
      }
    }
  });
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
  server.listen(PORT, "0.0.0.0", () => {
    console.log(`Capture The Flag '95 Server running on port ${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
