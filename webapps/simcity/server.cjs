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
var import_dotenv = __toESM(require("dotenv"), 1);
var import_genai = require("@google/genai");

// src/simulation/constants.ts
var MAP_WIDTH = 60;
var MAP_HEIGHT = 60;
var TOOLS_CONFIG = {
  ["QUERY" /* QUERY */]: {
    type: "QUERY" /* QUERY */,
    name: "Consultar",
    cost: 0,
    width: 1,
    height: 1,
    description: "Inspecciona informaci\xF3n de la zona, densidad y servicios",
    hotkey: "Q",
    iconName: "HelpCircle"
  },
  ["BULLDOZER" /* BULLDOZER */]: {
    type: "BULLDOZER" /* BULLDOZER */,
    name: "Demoler",
    cost: 1,
    width: 1,
    height: 1,
    description: "Despeja escombros, \xE1rboles o demuele estructuras ($1)",
    hotkey: "B",
    iconName: "Shovel"
  },
  ["ROAD" /* ROAD */]: {
    type: "ROAD" /* ROAD */,
    name: "Carretera",
    cost: 10,
    width: 1,
    height: 1,
    description: "Conecta zonas y permite el tr\xE1nsito de veh\xEDculos ($10)",
    hotkey: "R",
    iconName: "Compass"
  },
  ["POWER_LINE" /* POWER_LINE */]: {
    type: "POWER_LINE" /* POWER_LINE */,
    name: "L\xEDnea El\xE9ctrica",
    cost: 5,
    width: 1,
    height: 1,
    description: "Conduce energ\xEDa desde las centrales a los edificios ($5)",
    hotkey: "L",
    iconName: "Zap"
  },
  ["RAIL" /* RAIL */]: {
    type: "RAIL" /* RAIL */,
    name: "Ferrocarril",
    cost: 20,
    width: 1,
    height: 1,
    description: "Tr\xE1nsito masivo de alta capacidad sin generar poluci\xF3n ($20)",
    hotkey: "T",
    iconName: "Train"
  },
  ["PARK" /* PARK */]: {
    type: "PARK" /* PARK */,
    name: "Parque",
    cost: 10,
    width: 1,
    height: 1,
    description: "Reduce la poluci\xF3n y eleva el valor del suelo ($10)",
    hotkey: "P",
    iconName: "Trees"
  },
  ["RESIDENTIAL" /* RESIDENTIAL */]: {
    type: "RESIDENTIAL" /* RESIDENTIAL */,
    name: "Residencial (R)",
    cost: 100,
    width: 3,
    height: 3,
    description: "Zona 3x3 para hogares y crecimiento poblacional ($100)",
    hotkey: "1",
    iconName: "Home"
  },
  ["COMMERCIAL" /* COMMERCIAL */]: {
    type: "COMMERCIAL" /* COMMERCIAL */,
    name: "Comercial (C)",
    cost: 100,
    width: 3,
    height: 3,
    description: "Zona 3x3 para tiendas, oficinas y empleo de servicios ($100)",
    hotkey: "2",
    iconName: "Store"
  },
  ["INDUSTRIAL" /* INDUSTRIAL */]: {
    type: "INDUSTRIAL" /* INDUSTRIAL */,
    name: "Industrial (I)",
    cost: 100,
    width: 3,
    height: 3,
    description: "Zona 3x3 para f\xE1bricas pesadas y manufactura ($100)",
    hotkey: "3",
    iconName: "Factory"
  },
  ["POLICE" /* POLICE */]: {
    type: "POLICE" /* POLICE */,
    name: "Comisar\xEDa",
    cost: 500,
    width: 3,
    height: 3,
    description: "Estaci\xF3n de polic\xEDa para suprimir el crimen en su radio ($500)",
    hotkey: "4",
    iconName: "Shield"
  },
  ["FIRE_STATION" /* FIRE_STATION */]: {
    type: "FIRE_STATION" /* FIRE_STATION */,
    name: "Bomberos",
    cost: 500,
    width: 3,
    height: 3,
    description: "Cuerpo de bomberos para contener incendios en la ciudad ($500)",
    hotkey: "5",
    iconName: "Flame"
  },
  ["STADIUM" /* STADIUM */]: {
    type: "STADIUM" /* STADIUM */,
    name: "Estadio",
    cost: 5e3,
    width: 4,
    height: 4,
    description: "Mega-atracci\xF3n 4x4 que estimula el comercio y felicidad ($5000)",
    hotkey: "6",
    iconName: "Trophy"
  },
  ["COAL_POWER" /* COAL_POWER */]: {
    type: "COAL_POWER" /* COAL_POWER */,
    name: "Central Carb\xF3n",
    cost: 3e3,
    width: 4,
    height: 4,
    description: "Genera 700 MW de energ\xEDa fiable pero emite alta poluci\xF3n ($3000)",
    hotkey: "7",
    iconName: "Fuel"
  },
  ["NUCLEAR_POWER" /* NUCLEAR_POWER */]: {
    type: "NUCLEAR_POWER" /* NUCLEAR_POWER */,
    name: "Central Nuclear",
    cost: 5e3,
    width: 4,
    height: 4,
    description: "Genera 2000 MW de energ\xEDa limpia; \xA1cuidado con fusiones! ($5000)",
    hotkey: "8",
    iconName: "Atom"
  },
  ["SEAPORT" /* SEAPORT */]: {
    type: "SEAPORT" /* SEAPORT */,
    name: "Puerto Mar\xEDtimo",
    cost: 3e3,
    width: 4,
    height: 4,
    description: "Terminal portuaria 4x4 en la costa para potenciar la industria ($3000)",
    hotkey: "9",
    iconName: "Anchor"
  },
  ["AIRPORT" /* AIRPORT */]: {
    type: "AIRPORT" /* AIRPORT */,
    name: "Aeropuerto",
    cost: 1e4,
    width: 6,
    height: 6,
    description: "Gran complejo 6x6 que dispara el crecimiento comercial global ($10000)",
    hotkey: "0",
    iconName: "Plane"
  }
};

// src/simulation/cognitive.ts
function analyzePlaystyleHeuristics(city) {
  let resCount = 0;
  let comCount = 0;
  let indCount = 0;
  let roadCount = 0;
  let railCount = 0;
  let parkCount = 0;
  let coalCount = 0;
  let nuclearCount = 0;
  let policeCount = 0;
  let fireCount = 0;
  let unpoweredCount = 0;
  for (let y = 0; y < MAP_HEIGHT; y++) {
    for (let x = 0; x < MAP_WIDTH; x++) {
      const t = city.map?.[y]?.[x] ?? 0;
      const p = city.powered?.[y]?.[x] ?? false;
      if (t >= 20 /* RESIDENTIAL_EMPTY */ && t <= 23 /* RESIDENTIAL_HIGH */) {
        resCount++;
        if (!p) unpoweredCount++;
      } else if (t >= 30 /* COMMERCIAL_EMPTY */ && t <= 33 /* COMMERCIAL_HIGH */) {
        comCount++;
        if (!p) unpoweredCount++;
      } else if (t >= 40 /* INDUSTRIAL_EMPTY */ && t <= 43 /* INDUSTRIAL_HIGH */) {
        indCount++;
        if (!p) unpoweredCount++;
      } else if (t === 10 /* ROAD */) roadCount++;
      else if (t === 12 /* RAIL */) railCount++;
      else if (t === 57 /* PARK */) parkCount++;
      else if (t === 50 /* COAL_POWER */) coalCount++;
      else if (t === 51 /* NUCLEAR_POWER */) nuclearCount++;
      else if (t === 52 /* POLICE */) policeCount++;
      else if (t === 53 /* FIRE_STATION */) fireCount++;
    }
  }
  const totalZones = resCount + comCount + indCount;
  const powerEfficiency = totalZones > 0 ? Math.round((totalZones - unpoweredCount) / totalZones * 100) : 100;
  const transitRatio = roadCount + railCount;
  const transitEfficiency = totalZones > 0 ? Math.min(100, Math.round(totalZones / Math.max(1, transitRatio) * 60)) : 80;
  const efficiency = Math.round(powerEfficiency * 0.6 + transitEfficiency * 0.4);
  let sustainability = 75;
  if (coalCount > 0) sustainability -= coalCount * 12;
  if (nuclearCount > 0) sustainability += nuclearCount * 10;
  if (parkCount > 5) sustainability += Math.min(25, parkCount * 3);
  if (city.stats.pollutionAverage > 50) sustainability -= 20;
  sustainability = Math.max(10, Math.min(100, sustainability));
  let safety = 60;
  if (policeCount > 0) safety += 20;
  if (fireCount > 0) safety += 20;
  if (city.stats.crimeAverage > 60) safety -= 20;
  safety = Math.max(10, Math.min(100, safety));
  let connectivity = 70;
  if (railCount > 5) connectivity += 15;
  if (city.stats.trafficAverage > 120) connectivity -= 25;
  connectivity = Math.max(10, Math.min(100, connectivity));
  let financialDiscipline = 75;
  if (city.budget.taxRate >= 6 && city.budget.taxRate <= 8) financialDiscipline += 15;
  else if (city.budget.taxRate > 12) financialDiscipline -= 25;
  if (city.funds > 15e3) financialDiscipline += 10;
  else if (city.funds < 2e3) financialDiscipline -= 20;
  financialDiscipline = Math.max(10, Math.min(100, financialDiscipline));
  let archetype = "El Planificador Equilibrado";
  let category = "Planificador Equilibrado";
  let summary = "Muestras un estilo de juego balanceado y pragm\xE1tico, cuidando tanto el crecimiento como los servicios c\xEDvicos.";
  if (sustainability > 80 && parkCount >= 6) {
    archetype = "El Ecologista Visionario";
    category = "Ecol\xF3gico";
    summary = "Priorizas la calidad ambiental, parques urbanos y energ\xEDas limpias sobre la r\xE1pida industrializaci\xF3n contaminante.";
  } else if (indCount > resCount && coalCount > 0) {
    archetype = "El Magnate de la Industria";
    category = "Industrial Expansivo";
    summary = "Buscas el m\xE1ximo rendimiento fabril y crecimiento econ\xF3mico r\xE1pido, asumiendo costes ambientales.";
  } else if (railCount > roadCount * 0.5 && railCount > 8) {
    archetype = "El Bar\xF3n del Tr\xE1nsito Masivo";
    category = "Bar\xF3n del Tr\xE1nsito";
    summary = "Tu obsesi\xF3n es la fluidez log\xEDstica y los trenes el\xE9ctricos, eliminando el tr\xE1fico vehicular.";
  } else if (financialDiscipline > 85 && city.funds > 25e3) {
    archetype = "El Estratega Fiscal Conservador";
    category = "Financiero Conservador";
    summary = "Gestionas las arcas p\xFAblicas con disciplina suiza, acumulando reservas antes de acometer grandes obras.";
  }
  const strengths = [];
  if (efficiency > 75) strengths.push("Excelente cobertura de red el\xE9ctrica e interconexi\xF3n.");
  if (sustainability > 75) strengths.push("Entorno urbano con baja poluci\xF3n y respeto al medio ambiente.");
  if (safety > 75) strengths.push("Servicios de polic\xEDa y bomberos bien distribuidos y financiados.");
  if (connectivity > 75) strengths.push("Sistema vial fluido sin cuellos de botella severos.");
  if (strengths.length === 0) strengths.push("Capacidad de reacci\xF3n r\xE1pida ante emergencias urbanas.");
  const vulnerabilities = [];
  if (unpoweredCount > 2) vulnerabilities.push(`${unpoweredCount} zonas no tienen suministro el\xE9ctrico activo.`);
  if (city.stats.pollutionAverage > 80) vulnerabilities.push("Altos niveles de poluci\xF3n industrial degradando el valor del suelo.");
  if (city.stats.crimeAverage > 70) vulnerabilities.push("Tasa de criminalidad elevada por falta de comisar\xEDas.");
  if (city.budget.taxRate > 9) vulnerabilities.push("Impuestos superiores al 9% sofocan la demanda de nuevas empresas.");
  if (vulnerabilities.length === 0) vulnerabilities.push("Crecimiento demogr\xE1fico estancado por falta de zonas comerciales.");
  const tacticalAdvice = [];
  if (unpoweredCount > 0) tacticalAdvice.push("Tiende l\xEDneas el\xE9ctricas hacia las zonas aisladas para activar su desarrollo.");
  if (city.stats.rDemand > 40) tacticalAdvice.push("La demanda residencial es alta: planifica un nuevo cuadrante de viviendas.");
  if (city.stats.cDemand > 40) tacticalAdvice.push("Construye zonas comerciales junto a las arterias de tr\xE1fico concurridas.");
  if (city.stats.trafficAverage > 100) tacticalAdvice.push("Sustituye carreteras colapsadas por l\xEDneas de ferrocarril.");
  const alternativeStrategies = [
    {
      title: 'Modelo "Garden City" (Ciudad Jard\xEDn)',
      description: "Crea islas residenciales rodeadas de franjas de parques (greenbelts) y trenes, alejando totalmente las f\xE1bricas.",
      actionPlan: "Demuele carreteras redundantes, planta parques perimetrales y reubica la industria pesada."
    },
    {
      title: "Mega-Hub Comercial y Aeroportuario",
      description: "Enfoca la econom\xEDa en el sector servicios construyendo un Aeropuerto y un gran Estadio central.",
      actionPlan: "Acumula $10,000, ubica el aeropuerto en un extremo despejado y rodea el centro de rascacielos C de alta densidad."
    },
    {
      title: "Desarrollo Mar\xEDtimo Exportador",
      description: "Aprovecha la costa construyendo un Puerto Mar\xEDtimo que impulse la productividad industrial sin requerir subsidios.",
      actionPlan: "Coloca el puerto en contacto con el agua y conecta ferrocarriles directos a las f\xE1bricas."
    }
  ];
  return {
    archetype,
    title: `Perfil del Alcalde: ${archetype}`,
    summary,
    playstyleCategory: category,
    cognitiveScores: {
      efficiency,
      sustainability,
      safety,
      connectivity,
      financialDiscipline
    },
    strengths,
    vulnerabilities,
    tacticalAdvice,
    alternativeStrategies,
    timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString()
  };
}

// server.ts
import_dotenv.default.config();
var app = (0, import_express.default)();
var PORT = 3e3;
app.use(import_express.default.json({ limit: "15mb" }));
var communityCities = [
  {
    id: "comm_metropolis_2000",
    name: "Metr\xF3polis 2000",
    author: "WillWright89",
    population: 142e3,
    funds: 58e3,
    year: 1989,
    likes: 342,
    description: "Una metr\xF3polis cl\xE1sica planificada con cuadr\xEDculas sim\xE9tricas, metro subterr\xE1neo y energ\xEDa nuclear limpia.",
    previewTiles: "Nuclear, Rails, Skyscraper Commercial, Residential Condos",
    createdAt: "2026-08-15"
  },
  {
    id: "comm_emerald_bay",
    name: "Bah\xEDa Esmeralda",
    author: "EcoMayor",
    population: 48e3,
    funds: 32e3,
    year: 1950,
    likes: 189,
    description: "Ciudad costera ecol\xF3gica basada al 100% en ferrocarriles, cinturones verdes y puerto comercial mar\xEDtimo.",
    previewTiles: "Seaport, Coastal Rail, Forests, Parks",
    createdAt: "2026-08-28"
  },
  {
    id: "comm_neo_cyberpunk",
    name: "Neo Detroit",
    author: "CyberTycoon",
    population: 96e3,
    funds: 12e4,
    year: 2020,
    likes: 215,
    description: "Gran conglomerado industrial y comercial de alta densidad con tres estadios y aeropuerto internacional.",
    previewTiles: "Airport, Stadium, Coal Plants, Dense Grid",
    createdAt: "2026-09-02"
  }
];
var cityStore = /* @__PURE__ */ new Map();
cityStore.set("comm_metropolis_2000", {
  id: "comm_metropolis_2000",
  name: "Metr\xF3polis 2000",
  mayorName: "WillWright89",
  year: 1989,
  month: 6,
  funds: 58e3,
  gameMode: "mayor",
  stats: {
    population: 142e3,
    resPop: 7e4,
    comPop: 45e3,
    indPop: 27e3,
    rDemand: 20,
    cDemand: 45,
    iDemand: -10,
    approvalRating: 92,
    cityClass: "Metr\xF3polis"
  }
});
var customScenarios = [];
var multiplayerRooms = /* @__PURE__ */ new Map();
var genAI = null;
function getGeminiClient() {
  if (!process.env.GEMINI_API_KEY) return null;
  if (!genAI) {
    genAI = new import_genai.GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build"
        }
      }
    });
  }
  return genAI;
}
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", serverTime: (/* @__PURE__ */ new Date()).toISOString() });
});
app.get("/api/cities", (req, res) => {
  res.json({
    cities: communityCities,
    total: communityCities.length
  });
});
app.get("/api/cities/:id", (req, res) => {
  const city = cityStore.get(req.params.id);
  if (!city) {
    return res.status(404).json({ error: "Ciudad no encontrada en el repositorio en la nube" });
  }
  res.json({ city });
});
app.post("/api/cities", (req, res) => {
  const { city, description, author } = req.body;
  if (!city || !city.name) {
    return res.status(400).json({ error: "Datos de ciudad incompletos" });
  }
  const cityId = "comm_" + Math.random().toString(36).substring(2, 9);
  const newCity = {
    ...city,
    id: cityId,
    mayorName: author || city.mayorName || "Alcalde An\xF3nimo"
  };
  cityStore.set(cityId, newCity);
  const summary = {
    id: cityId,
    name: city.name,
    author: newCity.mayorName,
    population: city.stats?.population || 0,
    funds: city.funds || 0,
    year: city.year || 1900,
    likes: 1,
    description: description || "Ciudad compartida por la comunidad de SimCity Classic",
    createdAt: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
  };
  communityCities.unshift(summary);
  res.json({
    success: true,
    cityId,
    message: "Ciudad publicada con \xE9xito en la nube comunitaria",
    summary
  });
});
app.post("/api/cities/:id/like", (req, res) => {
  const city = communityCities.find((c) => c.id === req.params.id);
  if (city) {
    city.likes = (city.likes || 0) + 1;
    return res.json({ success: true, likes: city.likes });
  }
  res.status(404).json({ error: "Ciudad no encontrada" });
});
app.get("/api/scenarios", (req, res) => {
  res.json({ scenarios: customScenarios });
});
app.post("/api/scenarios", (req, res) => {
  const scenario = req.body;
  if (!scenario || !scenario.title) {
    return res.status(400).json({ error: "Escenario inv\xE1lido" });
  }
  const id = "scen_" + Math.random().toString(36).substring(2, 8);
  const newScenario = {
    ...scenario,
    id,
    likes: 0,
    isCommunity: true,
    createdAt: (/* @__PURE__ */ new Date()).toISOString()
  };
  customScenarios.unshift(newScenario);
  res.json({ success: true, scenario: newScenario });
});
async function generateCognitiveWithCascade(ai, prompt) {
  const models = ["gemini-3.8-flash", "gemini-flash-latest", "gemini-3.1-flash-lite"];
  let lastErr = null;
  for (const modelName of models) {
    for (let attempt = 0; attempt < 2; attempt++) {
      try {
        const response = await ai.models.generateContent({
          model: modelName,
          contents: prompt,
          config: {
            responseMimeType: "application/json"
          }
        });
        const text = response.text || "";
        if (text) {
          const parsed = JSON.parse(text);
          return { analysis: parsed, modelUsed: modelName };
        }
      } catch (err) {
        lastErr = err;
        const msg = err?.message || String(err);
        const isTransient = msg.includes("503") || msg.includes("high demand") || msg.includes("429") || msg.includes("UNAVAILABLE") || msg.includes("RESOURCE_EXHAUSTED");
        console.warn(`[Cognitive Advisor] Model ${modelName} (attempt ${attempt + 1}) notice: ${msg}`);
        if (isTransient && attempt === 0) {
          await new Promise((r) => setTimeout(r, 1e3));
          continue;
        }
        break;
      }
    }
  }
  throw lastErr || new Error("Servicio de IA en alta demanda temporal");
}
app.post("/api/advisor/analyze", async (req, res) => {
  const { cityData } = req.body;
  if (!cityData) {
    return res.status(400).json({ error: "Faltan datos de la ciudad para el an\xE1lisis cognitivo" });
  }
  const ai = getGeminiClient();
  if (!ai) {
    const fallback = analyzePlaystyleHeuristics(cityData);
    return res.json({
      usedAI: false,
      message: "Gemini API no configurada en el servidor; utilizando motor heur\xEDstico cognitivo local",
      analysis: fallback
    });
  }
  const prompt = `Act\xFAa como un renombrado urbanista, planificador regional y psic\xF3logo de juego de SimCity 1989.
Analiza la siguiente metr\xF3polis del jugador y diagnostica su estilo cognitivo de juego:
- Nombre de la ciudad: ${cityData.name}
- A\xF1o: ${cityData.year}
- Poblaci\xF3n: ${cityData.stats?.population} (R: ${cityData.stats?.resPop}, C: ${cityData.stats?.comPop}, I: ${cityData.stats?.indPop})
- Fondos del tesoro: $${cityData.funds}
- Tasa de impuestos: ${cityData.budget?.taxRate}%
- Aprobaci\xF3n ciudadana: ${cityData.stats?.approvalRating}%
- Poluci\xF3n media: ${cityData.stats?.pollutionAverage}/255
- Criminalidad media: ${cityData.stats?.crimeAverage}/255
- Tr\xE1fico medio: ${cityData.stats?.trafficAverage}/255
- Modo de juego: ${cityData.gameMode}

Proporciona un an\xE1lisis cognitivo profundo en formato JSON con la siguiente estructura:
{
  "archetype": "Nombre evocador del arquetipo (ej: El Ecologista Visionario, El Bar\xF3n del Asfalto, etc.)",
  "title": "T\xEDtulo del diagn\xF3stico",
  "summary": "Resumen perspicaz del patr\xF3n mental y estilo de toma de decisiones del alcalde",
  "playstyleCategory": "Ecol\xF3gico" | "Industrial Expansivo" | "Planificador Equilibrado" | "Bar\xF3n del Tr\xE1nsito" | "Financiero Conservador",
  "cognitiveScores": {
    "efficiency": n\xFAmero 0-100,
    "sustainability": n\xFAmero 0-100,
    "safety": n\xFAmero 0-100,
    "connectivity": n\xFAmero 0-100,
    "financialDiscipline": n\xFAmero 0-100
  },
  "strengths": ["Punto fuerte 1", "Punto fuerte 2", "Punto fuerte 3"],
  "vulnerabilities": ["Punto d\xE9bil 1", "Punto d\xE9bil 2"],
  "tacticalAdvice": ["Consejo t\xE1ctico 1", "Consejo t\xE1ctico 2"],
  "alternativeStrategies": [
    {
      "title": "Nombre de estrategia alternativa a probar",
      "description": "Explicaci\xF3n del concepto",
      "actionPlan": "Plan paso a paso para ejecutarla"
    }
  ]
}`;
  try {
    const result = await generateCognitiveWithCascade(ai, prompt);
    return res.json({
      usedAI: true,
      modelUsed: result.modelUsed,
      analysis: result.analysis
    });
  } catch (err) {
    console.warn("[Cognitive Advisor] Fallback to heuristic analyzer due to model demand:", err?.message || err);
    const fallback = analyzePlaystyleHeuristics(cityData);
    return res.json({
      usedAI: false,
      message: "Los servidores de IA est\xE1n experimentando alta demanda moment\xE1nea. Se ha generado un diagn\xF3stico cognitivo heur\xEDstico de alta fidelidad.",
      analysis: fallback
    });
  }
});
app.get("/api/multiplayer/room/:roomId", (req, res) => {
  const { roomId } = req.params;
  let room = multiplayerRooms.get(roomId);
  if (!room) {
    room = {
      id: roomId,
      coMayors: /* @__PURE__ */ new Map(),
      actions: [],
      lastUpdate: Date.now()
    };
    multiplayerRooms.set(roomId, room);
  }
  const now = Date.now();
  for (const [id, mayor] of room.coMayors.entries()) {
    if (now - mayor.lastSeen > 3e4) {
      room.coMayors.delete(id);
    }
  }
  const mayorsList = Array.from(room.coMayors.values());
  res.json({
    roomId,
    coMayors: mayorsList,
    actions: room.actions.slice(-25),
    // last 25 collaborative actions
    serverTime: now
  });
});
app.post("/api/multiplayer/room/:roomId/action", (req, res) => {
  const { roomId } = req.params;
  const { action, mayorId, mayorName, color } = req.body;
  let room = multiplayerRooms.get(roomId);
  if (!room) {
    room = {
      id: roomId,
      coMayors: /* @__PURE__ */ new Map(),
      actions: [],
      lastUpdate: Date.now()
    };
    multiplayerRooms.set(roomId, room);
  }
  const now = Date.now();
  if (mayorId) {
    room.coMayors.set(mayorId, {
      id: mayorId,
      name: mayorName || "Co-Alcalde",
      color: color || "#38bdf8",
      lastSeen: now
    });
  }
  if (action) {
    const actionWithMeta = {
      ...action,
      id: "act_" + Math.random().toString(36).substring(2, 7),
      mayorId,
      mayorName,
      timestamp: now
    };
    room.actions.push(actionWithMeta);
    if (room.actions.length > 100) room.actions.shift();
  }
  room.lastUpdate = now;
  res.json({
    success: true,
    serverTime: now,
    actionCount: room.actions.length
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
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`SimCity Classic 1989 Server running on http://0.0.0.0:${PORT}`);
  });
}
startServer();
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
//# sourceMappingURL=server.cjs.map
