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
var rooms = /* @__PURE__ */ new Map();
var app = (0, import_express.default)();
var PORT = 3e3;
app.use(import_express.default.json());
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", activeRooms: rooms.size });
});
app.get("/api/rooms", (_req, res) => {
  const roomList = Array.from(rooms.values()).map((r) => ({
    id: r.id,
    name: r.name,
    playerCount: r.players.size,
    status: r.status
  }));
  res.json({ rooms: roomList });
});
var server = import_http.default.createServer(app);
var wss = new import_ws.WebSocketServer({ server });
function generateArenaGrid(seed) {
  const ROWS = 13;
  const COLS = 15;
  const grid = [];
  let s = seed;
  const pseudoRandom = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  for (let r = 0; r < ROWS; r++) {
    const row = [];
    for (let c = 0; c < COLS; c++) {
      if (r === 0 || r === ROWS - 1 || c === 0 || c === COLS - 1) {
        row.push(1);
      } else if (r % 2 === 0 && c % 2 === 0) {
        row.push(1);
      } else {
        const isCorner = r <= 2 && c <= 2 || r <= 2 && c >= COLS - 3 || r >= ROWS - 3 && c <= 2 || r >= ROWS - 3 && c >= COLS - 3;
        if (!isCorner && pseudoRandom() < 0.65) {
          row.push(2);
        } else {
          row.push(0);
        }
      }
    }
    grid.push(row);
  }
  return grid;
}
function broadcastToRoom(room, message, excludeWs) {
  const payload = JSON.stringify(message);
  for (const player of room.players.values()) {
    if (player.ws !== excludeWs && player.ws.readyState === import_ws.WebSocket.OPEN) {
      player.ws.send(payload);
    }
  }
}
wss.on("connection", (ws) => {
  let currentRoomId = null;
  let playerId = null;
  ws.on("message", (raw) => {
    try {
      const data = JSON.parse(raw.toString());
      const { type } = data;
      if (type === "create_room") {
        const roomId = Math.random().toString(36).substring(2, 6).toUpperCase();
        playerId = "p_" + Math.random().toString(36).substring(2, 9);
        currentRoomId = roomId;
        const seed = Math.floor(Math.random() * 1e5);
        const newRoom = {
          id: roomId,
          name: (data.roomName || "Arena") + " #" + roomId,
          hostId: playerId,
          players: /* @__PURE__ */ new Map(),
          status: "waiting",
          mapSeed: seed,
          arenaGrid: generateArenaGrid(seed),
          bombs: [],
          winnerId: null,
          round: 1,
          timer: 180
        };
        const player = {
          id: playerId,
          name: data.playerName || "Bomber 1",
          slot: 0,
          color: "#ffffff",
          // White
          ready: true,
          x: 1,
          y: 1,
          direction: "down",
          isMoving: false,
          isAlive: true,
          score: 0,
          ws
        };
        newRoom.players.set(playerId, player);
        rooms.set(roomId, newRoom);
        ws.send(
          JSON.stringify({
            type: "room_joined",
            roomId,
            playerId,
            slot: 0,
            isHost: true,
            room: {
              id: newRoom.id,
              name: newRoom.name,
              status: newRoom.status,
              mapSeed: newRoom.mapSeed,
              arenaGrid: newRoom.arenaGrid,
              players: Array.from(newRoom.players.values()).map((p) => ({
                id: p.id,
                name: p.name,
                slot: p.slot,
                color: p.color,
                ready: p.ready,
                score: p.score
              }))
            }
          })
        );
      } else if (type === "join_room") {
        const roomId = (data.roomId || "").trim().toUpperCase();
        const room = rooms.get(roomId);
        if (!room) {
          ws.send(JSON.stringify({ type: "error", message: "Sala no encontrada." }));
          return;
        }
        if (room.players.size >= 4) {
          ws.send(JSON.stringify({ type: "error", message: "La sala est\xE1 llena (m\xE1x 4)." }));
          return;
        }
        if (room.status === "playing") {
          ws.send(JSON.stringify({ type: "error", message: "La partida ya ha comenzado." }));
          return;
        }
        playerId = "p_" + Math.random().toString(36).substring(2, 9);
        currentRoomId = roomId;
        const colors = ["#ffffff", "#222222", "#ef4444", "#3b82f6"];
        const usedSlots = new Set(Array.from(room.players.values()).map((p) => p.slot));
        let slot = 0;
        while (usedSlots.has(slot)) slot++;
        const spawnPos = [
          { x: 1, y: 1 },
          { x: 13, y: 11 },
          { x: 13, y: 1 },
          { x: 1, y: 11 }
        ];
        const player = {
          id: playerId,
          name: data.playerName || `Bomber ${slot + 1}`,
          slot,
          color: colors[slot % colors.length],
          ready: false,
          x: spawnPos[slot]?.x || 1,
          y: spawnPos[slot]?.y || 1,
          direction: "down",
          isMoving: false,
          isAlive: true,
          score: 0,
          ws
        };
        room.players.set(playerId, player);
        ws.send(
          JSON.stringify({
            type: "room_joined",
            roomId,
            playerId,
            slot,
            isHost: room.hostId === playerId,
            room: {
              id: room.id,
              name: room.name,
              status: room.status,
              mapSeed: room.mapSeed,
              arenaGrid: room.arenaGrid,
              players: Array.from(room.players.values()).map((p) => ({
                id: p.id,
                name: p.name,
                slot: p.slot,
                color: p.color,
                ready: p.ready,
                score: p.score
              }))
            }
          })
        );
        broadcastToRoom(
          room,
          {
            type: "player_joined",
            player: {
              id: player.id,
              name: player.name,
              slot: player.slot,
              color: player.color,
              ready: player.ready,
              score: player.score
            }
          },
          ws
        );
      } else if (type === "toggle_ready" && currentRoomId && playerId) {
        const room = rooms.get(currentRoomId);
        if (!room) return;
        const player = room.players.get(playerId);
        if (player) {
          player.ready = !player.ready;
          broadcastToRoom(room, {
            type: "player_ready_changed",
            playerId,
            ready: player.ready
          });
        }
      } else if (type === "start_game" && currentRoomId && playerId) {
        const room = rooms.get(currentRoomId);
        if (!room || room.hostId !== playerId) return;
        room.status = "playing";
        room.mapSeed = Math.floor(Math.random() * 1e5);
        room.arenaGrid = generateArenaGrid(room.mapSeed);
        room.timer = 180;
        const spawnPos = [
          { x: 1, y: 1 },
          { x: 13, y: 11 },
          { x: 13, y: 1 },
          { x: 1, y: 11 }
        ];
        for (const p of room.players.values()) {
          p.isAlive = true;
          p.x = spawnPos[p.slot]?.x ?? 1;
          p.y = spawnPos[p.slot]?.y ?? 1;
          p.direction = "down";
          p.isMoving = false;
        }
        broadcastToRoom(room, {
          type: "game_started",
          mapSeed: room.mapSeed,
          arenaGrid: room.arenaGrid,
          players: Array.from(room.players.values()).map((p) => ({
            id: p.id,
            slot: p.slot,
            x: p.x,
            y: p.y,
            isAlive: p.isAlive
          }))
        });
      } else if (type === "player_move" && currentRoomId && playerId) {
        const room = rooms.get(currentRoomId);
        if (!room || room.status !== "playing") return;
        const player = room.players.get(playerId);
        if (!player || !player.isAlive) return;
        player.x = data.x;
        player.y = data.y;
        player.direction = data.direction;
        player.isMoving = data.isMoving;
        broadcastToRoom(
          room,
          {
            type: "player_moved",
            playerId,
            x: player.x,
            y: player.y,
            direction: player.direction,
            isMoving: player.isMoving
          },
          ws
        );
      } else if (type === "bomb_placed" && currentRoomId && playerId) {
        const room = rooms.get(currentRoomId);
        if (!room || room.status !== "playing") return;
        broadcastToRoom(room, {
          type: "bomb_placed",
          bomb: data.bomb
        });
      } else if (type === "brick_destroyed" && currentRoomId) {
        const room = rooms.get(currentRoomId);
        if (!room) return;
        if (room.arenaGrid[data.tileY] && room.arenaGrid[data.tileY][data.tileX] === 2) {
          room.arenaGrid[data.tileY][data.tileX] = 0;
        }
        broadcastToRoom(room, {
          type: "brick_destroyed",
          tileX: data.tileX,
          tileY: data.tileY,
          powerUp: data.powerUp
        });
      } else if (type === "player_died" && currentRoomId) {
        const room = rooms.get(currentRoomId);
        if (!room || room.status !== "playing") return;
        const deadPlayer = room.players.get(data.playerId);
        if (deadPlayer) {
          deadPlayer.isAlive = false;
        }
        broadcastToRoom(room, {
          type: "player_died",
          playerId: data.playerId,
          killerId: data.killerId
        });
        const alivePlayers = Array.from(room.players.values()).filter(
          (p) => p.isAlive
        );
        if (alivePlayers.length <= 1) {
          const winner = alivePlayers[0] || null;
          if (winner) {
            winner.score = (winner.score || 0) + 1;
          }
          room.status = "game_over";
          broadcastToRoom(room, {
            type: "round_over",
            winnerId: winner ? winner.id : null,
            winnerName: winner ? winner.name : "Empate",
            players: Array.from(room.players.values()).map((p) => ({
              id: p.id,
              score: p.score
            }))
          });
        }
      }
    } catch (err) {
      console.error("WS error handling message:", err);
    }
  });
  ws.on("close", () => {
    if (currentRoomId && playerId) {
      const room = rooms.get(currentRoomId);
      if (room) {
        room.players.delete(playerId);
        if (room.players.size === 0) {
          rooms.delete(currentRoomId);
        } else {
          if (room.hostId === playerId) {
            const nextHost = Array.from(room.players.values())[0];
            room.hostId = nextHost.id;
          }
          broadcastToRoom(room, {
            type: "player_left",
            playerId,
            newHostId: room.hostId
          });
        }
      }
    }
  });
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
    app.get("*", (_req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  server.listen(PORT, "0.0.0.0", () => {
    console.log(`Dyna Blaster server running on http://0.0.0.0:${PORT}`);
  });
}
start();
//# sourceMappingURL=server.cjs.map
