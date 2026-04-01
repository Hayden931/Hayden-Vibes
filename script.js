// ============================================
// MINECRAFT CLICKER - Game Engine
// ============================================

// Base costs for all buildings (from original Cookie Clicker)
const BASE_COSTS = [15, 100, 1100, 12000, 130000, 1400000, 20000000, 330000000, 
                    5100000000, 75000000000, 1000000000000, 14000000000000, 
                    170000000000000, 2100000000000000, 26000000000000000, 
                    310000000000000000, 3700000000000000000, 44000000000000000000];

// Base production for all buildings (from original Cookie Clicker)
const BASE_PRODUCTION = [0.1, 1, 8, 47, 260, 1400, 7800, 44000, 260000, 1600000, 
                         10000000, 65000000, 430000000, 2900000000, 21000000000, 
                         150000000000, 1100000000000, 8000000000000];

// Game Data - All 18 buildings from Cookie Clicker
const BUILDINGS = [
    { id: 'pickaxe', name: 'Wooden Pickaxe', icon: '⛏️', baseCost: BASE_COSTS[0], baseProduction: BASE_PRODUCTION[0], owned: 0, description: 'Clicks for you' },
    { id: 'villager', name: 'Villager', icon: '👤', baseCost: BASE_COSTS[1], baseProduction: BASE_PRODUCTION[1], owned: 0, description: 'Mines steadily' },
    { id: 'wheat_farm', name: 'Wheat Farm', icon: '🌾', baseCost: BASE_COSTS[2], baseProduction: BASE_PRODUCTION[2], owned: 0, description: 'Supplies resources' },
    { id: 'ore_mine', name: 'Ore Mine', icon: '⛏️', baseCost: BASE_COSTS[3], baseProduction: BASE_PRODUCTION[3], owned: 0, description: 'Digs deep' },
    { id: 'redstone_factory', name: 'Redstone Factory', icon: '📍', baseCost: BASE_COSTS[4], baseProduction: BASE_PRODUCTION[4], owned: 0, description: 'Builds machines' },
    { id: 'emerald_bank', name: 'Emerald Bank', icon: '💎', baseCost: BASE_COSTS[5], baseProduction: BASE_PRODUCTION[5], owned: 0, description: 'Stores wealth' },
    { id: 'nether_portal', name: 'Nether Portal', icon: '🌀', baseCost: BASE_COSTS[6], baseProduction: BASE_PRODUCTION[6], owned: 0, description: 'Dimensional mining' },
    { id: 'enchanting_room', name: 'Enchanting Room', icon: '✨', baseCost: BASE_COSTS[7], baseProduction: BASE_PRODUCTION[7], owned: 0, description: 'Magic power' },
    { id: 'minecart_route', name: 'Minecart Route', icon: '🚂', baseCost: BASE_COSTS[8], baseProduction: BASE_PRODUCTION[8], owned: 0, description: 'Transport system' },
    { id: 'potion_brewery', name: 'Potion Brewery', icon: '🧪', baseCost: BASE_COSTS[9], baseProduction: BASE_PRODUCTION[9], owned: 0, description: 'Magical liquids' },
    { id: 'end_portal', name: 'End Portal', icon: '👁️', baseCost: BASE_COSTS[10], baseProduction: BASE_PRODUCTION[10], owned: 0, description: 'The End dimension' },
    { id: 'temporal_device', name: 'Temporal Device', icon: '⏰', baseCost: BASE_COSTS[11], baseProduction: BASE_PRODUCTION[11], owned: 0, description: 'Time manipulation' },
    { id: 'void_condenser', name: 'Void Condenser', icon: '⚫', baseCost: BASE_COSTS[12], baseProduction: BASE_PRODUCTION[12], owned: 0, description: 'Void energy' },
    { id: 'crystal_prism', name: 'Crystal Prism', icon: '🔮', baseCost: BASE_COSTS[13], baseProduction: BASE_PRODUCTION[13], owned: 0, description: 'Reality split' },
    { id: 'loot_machine', name: 'Loot Machine', icon: '🎲', baseCost: BASE_COSTS[14], baseProduction: BASE_PRODUCTION[14], owned: 0, description: 'Random treasure' },
    { id: 'fractal_engine', name: 'Fractal Engine', icon: '🌳', baseCost: BASE_COSTS[15], baseProduction: BASE_PRODUCTION[15], owned: 0, description: 'Infinite recursion' },
    { id: 'js_console', name: 'JS Console', icon: '💻', baseCost: BASE_COSTS[16], baseProduction: BASE_PRODUCTION[16], owned: 0, description: 'Code execution' },
    { id: 'idleverse', name: 'Idleverse', icon: '🌌', baseCost: BASE_COSTS[17], baseProduction: BASE_PRODUCTION[17], owned: 0, description: 'Alternate realities' }
];

// Upgrades - Click power, building efficiency, and global
const UPGRADES = {
    clickPower: [
        { id: 'click_1', name: 'Diamond Pickaxe', icon: '💎', cost: 100, effect: 1, description: '+1 block/click' },
        { id: 'click_2', name: 'Netherite Pickaxe', icon: '🔷', cost: 1000, effect: 5, description: '+5 blocks/click' },
        { id: 'click_3', name: 'Creative Mode', icon: '✨', cost: 1000000, effect: 100, description: '+100 blocks/click' }
    ],
    buildingEfficiency: [
        { id: 'eff_pickaxe', name: 'Better Handles', icon: '📌', cost: 100, buildingId: 'pickaxe', multiplier: 2, description: 'Pickaxes +100%' },
        { id: 'eff_villager', name: 'Librarian', icon: '📚', cost: 500, buildingId: 'villager', multiplier: 2, description: 'Villagers +100%' },
        { id: 'eff_wheat', name: 'Better Soil', icon: '🌱', cost: 5000, buildingId: 'wheat_farm', multiplier: 2, description: 'Farms +100%' },
        { id: 'eff_ore', name: 'Deep Mining', icon: '⛏️', cost: 60000, buildingId: 'ore_mine', multiplier: 2, description: 'Ore Mines +100%' },
        { id: 'eff_redstone', name: 'Repeaters', icon: '📍', cost: 650000, buildingId: 'redstone_factory', multiplier: 2, description: 'Factories +100%' },
        { id: 'eff_bank', name: 'Gold Reserve', icon: '🏆', cost: 7000000, buildingId: 'emerald_bank', multiplier: 2, description: 'Banks +100%' },
        { id: 'eff_nether', name: 'Lava Control', icon: '🔥', cost: 100000000, buildingId: 'nether_portal', multiplier: 2, description: 'Portals +100%' }
    ],
    globalMultiplier: [
        { id: 'global_1', name: 'Efficiency I', icon: '⚡', cost: 50000, multiplier: 1.1, description: '+10% all' },
        { id: 'global_2', name: 'Efficiency II', icon: '⚡⚡', cost: 500000, multiplier: 1.2, description: '+20% all' },
        { id: 'global_3', name: 'Efficiency III', icon: '⚡⚡⚡', cost: 10000000, multiplier: 1.5, description: '+50% all' }
    ]
};

const NEWS_MESSAGES = [
    "A wild Creeper appeared!",
    "Villagers are breeding uncontrollably...",
    "You found diamonds! Time to celebrate!",
    "The Nether is leaking into the Overworld",
    "Endermen are teleporting your blocks away",
    "Redstone engineers report efficiency gains",
    "Witches brewing potions of productivity",
    "Bees discovered pollinating the farms",
    "Llamas spotted at Trade Routes",
    "The End has been reopened!",
    "Wither has been defeated again",
    "New ore deposits found!",
    "Miners report excellent working conditions",
    "Block supply reaching record heights",
    "Enchanted tools proving invaluable",
    "Nether portals becoming unstable",
    "Local piglins trading",
    "Scientists studying redstone circuits",
    "Dragon egg discovered!",
    "Blocky universe expanding rapidly",
    "Zombie siege repelled",
    "New ores being discovered",
    "Void crystals forming",
    "Temporal anomalies detected",
    "Reality stability: questionable",
    "Your blocks are very block-like",
    "Click click click click click",
    "Production exceeded expectations",
    "Buildings requesting raises",
    "Idle progress: maximum"
];

// Game State
let gameState = {
    totalBlocks: 0,
    clickPower: 1,
    buildingEfficiencyMultipliers: {},
    globalProductionMultiplier: 1,
    purchasedUpgrades: new Set(),
    lastSave: Date.now(),
    lastUpdate: Date.now(),
    lastNewsUpdate: Date.now()
};

// Initialize building efficiency multipliers
BUILDINGS.forEach(building => {
    gameState.buildingEfficiencyMultipliers[building.id] = 1;
});

// ============================================
// GAME MECHANICS
// ============================================

function getBuilding(buildingId) {
    return BUILDINGS.find(b => b.id === buildingId);
}

function getBuildingCost(building) {
    return Math.ceil(building.baseCost * Math.pow(1.15, building.owned));
}

function calculateProductionPerSecond() {
    let totalProduction = 0;
    
    BUILDINGS.forEach(building => {
        const buildingProduction = building.baseProduction * building.owned;
        const multiplier = gameState.buildingEfficiencyMultipliers[building.id] * gameState.globalProductionMultiplier;
        totalProduction += buildingProduction * multiplier;
    });
    
    return totalProduction;
}

function handleClick() {
    gameState.totalBlocks += gameState.clickPower;
    createClickEffect();
    updateUI();
}

function createClickEffect() {
    const effect = document.getElementById('clickEffect');
    const particle = document.createElement('div');
    particle.className = 'click-particle';
    particle.textContent = '+' + gameState.clickPower;
    
    const randomX = (Math.random() - 0.5) * 100;
    const randomY = (Math.random() - 0.5) * 100;
    particle.style.left = (100 + randomX) + 'px';
    particle.style.top = (100 + randomY) + 'px';
    
    effect.appendChild(particle);
    
    setTimeout(() => particle.remove(), 1000);
}

function canAffordBuilding(building) {
    return gameState.totalBlocks >= getBuildingCost(building);
}

function buyBuilding(buildingId) {
    const building = getBuilding(buildingId);
    const cost = getBuildingCost(building);
    
    if (gameState.totalBlocks >= cost) {
        gameState.totalBlocks -= cost;
        building.owned++;
        updateUI();
        showNewsMessage(building.name + ' acquired!');
    }
}

function canAffordUpgrade(upgrade) {
    return gameState.totalBlocks >= upgrade.cost && !gameState.purchasedUpgrades.has(upgrade.id);
}

function buyUpgrade(upgradeId) {
    let upgrade = null;
    let category = null;
    let cost = 0;
    
    // Find the upgrade
    for (let cat in UPGRADES) {
        const found = UPGRADES[cat].find(u => u.id === upgradeId);
        if (found) {
            upgrade = found;
            category = cat;
            cost = found.cost;
            break;
        }
    }
    
    if (!upgrade) return;
    if (gameState.purchasedUpgrades.has(upgradeId)) return;
    if (gameState.totalBlocks < cost) return;
    
    gameState.totalBlocks -= cost;
    gameState.purchasedUpgrades.add(upgradeId);
    
    // Apply upgrade effects
    if (category === 'clickPower') {
        gameState.clickPower += upgrade.effect;
        showNewsMessage('Click power boosted: ' + upgrade.name);
    } else if (category === 'buildingEfficiency') {
        gameState.buildingEfficiencyMultipliers[upgrade.buildingId] *= upgrade.multiplier;
        showNewsMessage(upgrade.name + ' complete!');
    } else if (category === 'globalMultiplier') {
        gameState.globalProductionMultiplier *= upgrade.multiplier;
        showNewsMessage('Global production increased!');
    }
    
    updateUI();
}

function showNewsMessage(message) {
    const newsText = document.getElementById('newsText');
    newsText.textContent = message;
    setTimeout(() => {
        if (Math.random() > 0.5) {
            newsText.textContent = NEWS_MESSAGES[Math.floor(Math.random() * NEWS_MESSAGES.length)];
        }
    }, 5000);
}

// ============================================
// UI RENDERING
// ============================================

function updateUI() {
    updateStats();
    updateUpgrades();
    updateBuildings();
}

function updateStats() {
    const totalBlocks = document.getElementById('totalBlocks');
    const bpsDisplay = document.getElementById('bpsDisplay');
    
    totalBlocks.textContent = formatNumber(gameState.totalBlocks);
    
    const bps = calculateProductionPerSecond();
    bpsDisplay.textContent = formatNumber(bps) + ' blocks/sec';
}

function updateUpgrades() {
    const upgradesGrid = document.getElementById('upgradesGrid');
    upgradesGrid.innerHTML = '';
    
    const allUpgrades = [];
    for (let category in UPGRADES) {
        UPGRADES[category].forEach(upgrade => {
            allUpgrades.push({ ...upgrade, category });
        });
    }
    
    // Sort: unpurchased and affordable first, then purchased
    allUpgrades.sort((a, b) => {
        const aPurchased = gameState.purchasedUpgrades.has(a.id);
        const bPurchased = gameState.purchasedUpgrades.has(b.id);
        
        if (aPurchased === bPurchased) return 0;
        return aPurchased ? 1 : -1;
    });
    
    allUpgrades.forEach(upgrade => {
        const div = document.createElement('div');
        const isPurchased = gameState.purchasedUpgrades.has(upgrade.id);
        const canAfford = gameState.totalBlocks >= upgrade.cost;
        
        div.className = 'upgrade-item';
        if (isPurchased) div.classList.add('purchased');
        if (!isPurchased && !canAfford) div.classList.add('disabled');
        
        div.textContent = upgrade.icon;
        div.title = upgrade.name;
        
        const tooltip = document.createElement('div');
        tooltip.className = 'upgrade-tooltip';
        
        if (isPurchased) {
            tooltip.innerHTML = '<strong>✓ Purchased</strong>';
            tooltip.classList.add('hidden');
        } else {
            tooltip.innerHTML = `<strong>${upgrade.name}</strong><br/>${upgrade.description}<br/>Cost: ${formatNumber(upgrade.cost)}`;
        }
        
        div.appendChild(tooltip);
        
        if (!isPurchased) {
            div.addEventListener('click', () => buyUpgrade(upgrade.id));
        }
        
        upgradesGrid.appendChild(div);
    });
}

function updateBuildings() {
    const buildingsList = document.getElementById('buildingsList');
    buildingsList.innerHTML = '';
    
    BUILDINGS.forEach(building => {
        const cost = getBuildingCost(building);
        const canAfford = gameState.totalBlocks >= cost;
        
        const div = document.createElement('div');
        div.className = 'building-item';
        if (!canAfford) div.classList.add('disabled');
        
        div.innerHTML = `
            <div class="building-icon">${building.icon}</div>
            <div class="building-info">
                <div class="building-name">${building.name}</div>
                <div class="building-owned">Owned: ${building.owned}</div>
                <div class="building-production">${building.description}</div>
            </div>
            <div class="building-price">
                <div class="building-cost ${canAfford ? 'affordable' : 'unaffordable'}">${formatNumber(cost)}</div>
            </div>
        `;
        
        div.addEventListener('click', () => buyBuilding(building.id));
        buildingsList.appendChild(div);
    });
}

function formatNumber(num) {
    if (num === 0) return '0';
    if (num < 0) return '-' + formatNumber(-num);
    
    const suffixes = ['', 'K', 'M', 'B', 'T', 'Q', 'Qi', 'Sx', 'Sp', 'O', 'N', 'D'];
    let index = 0;
    let value = num;
    
    while (value >= 1000 && index < suffixes.length - 1) {
        value /= 1000;
        index++;
    }
    
    if (value >= 100) {
        return value.toFixed(0) + suffixes[index];
    } else if (value >= 10) {
        return value.toFixed(1) + suffixes[index];
    } else {
        return value.toFixed(2) + suffixes[index];
    }
}

// ============================================
// SAVE & LOAD SYSTEM
// ============================================

function getSaveData() {
    const saveObject = {
        version: 2,
        totalBlocks: gameState.totalBlocks,
        clickPower: gameState.clickPower,
        globalProductionMultiplier: gameState.globalProductionMultiplier,
        buildings: BUILDINGS.map(b => ({
            id: b.id,
            owned: b.owned
        })),
        buildingEfficiencyMultipliers: gameState.buildingEfficiencyMultipliers,
        purchasedUpgrades: Array.from(gameState.purchasedUpgrades),
        timestamp: new Date().toISOString()
    };
    
    return JSON.stringify(saveObject, null, 2);
}

function loadSaveData(jsonString) {
    try {
        const saveObject = JSON.parse(jsonString);
        
        gameState.totalBlocks = saveObject.totalBlocks || 0;
        gameState.clickPower = saveObject.clickPower || 1;
        gameState.globalProductionMultiplier = saveObject.globalProductionMultiplier || 1;
        gameState.buildingEfficiencyMultipliers = saveObject.buildingEfficiencyMultipliers || {};
        gameState.purchasedUpgrades = new Set(saveObject.purchasedUpgrades || []);
        
        if (saveObject.buildings) {
            saveObject.buildings.forEach(savedBuilding => {
                const building = BUILDINGS.find(b => b.id === savedBuilding.id);
                if (building) {
                    building.owned = savedBuilding.owned || 0;
                }
            });
        }
        
        // Ensure all building multipliers are initialized
        BUILDINGS.forEach(building => {
            if (!gameState.buildingEfficiencyMultipliers[building.id]) {
                gameState.buildingEfficiencyMultipliers[building.id] = 1;
            }
        });
        
        updateUI();
        showNewsMessage('Game loaded successfully!');
        return true;
    } catch (e) {
        console.error('Failed to load save:', e);
        showNewsMessage('Load failed: Invalid save format');
        return false;
    }
}

function autoSave() {
    try {
        localStorage.setItem('minecraft_clicker_save', getSaveData());
        gameState.lastSave = Date.now();
    } catch (e) {
        console.error('Autosave failed:', e);
    }
}

function autoLoad() {
    try {
        const saved = localStorage.getItem('minecraft_clicker_save');
        if (saved) {
            loadSaveData(saved);
            showNewsMessage('Auto-loaded previous game!');
            return true;
        }
    } catch (e) {
        console.error('Autoload failed:', e);
    }
    return false;
}

// ============================================
// EVENT HANDLERS
// ============================================

function setupEventListeners() {
    // Click handler
    const block = document.getElementById('mainBlock');
    block.addEventListener('click', handleClick);
    block.addEventListener('touchstart', (e) => {
        e.preventDefault();
        handleClick();
    });
    
    // Options menu
    const optionsToggle = document.getElementById('optionsToggle');
    const optionsPanel = document.getElementById('optionsPanel');
    
    optionsToggle.addEventListener('click', () => {
        optionsPanel.style.display = optionsPanel.style.display === 'none' ? 'block' : 'none';
    });
    
    // Export save
    const exportBtn = document.getElementById('exportBtn');
    const exportArea = document.getElementById('exportArea');
    const saveText = document.getElementById('saveText');
    
    exportBtn.addEventListener('click', () => {
        exportArea.style.display = exportArea.style.display === 'none' ? 'block' : 'none';
        if (exportArea.style.display !== 'none') {
            saveText.value = getSaveData();
        }
    });
    
    // Copy to clipboard
    const copyBtn = document.getElementById('copyBtn');
    copyBtn.addEventListener('click', () => {
        saveText.select();
        document.execCommand('copy');
        showNewsMessage('Save copied to clipboard!');
    });
    
    // Save to file
    const saveToFileBtn = document.getElementById('saveToFileBtn');
    saveToFileBtn.addEventListener('click', () => {
        const saveData = getSaveData();
        const blob = new Blob([saveData], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'MinecraftClickerSave.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        showNewsMessage('Save file downloaded!');
    });
    
    // Load from file
    const loadFromFileBtn = document.getElementById('loadFromFileBtn');
    const fileInput = document.getElementById('fileInput');
    
    loadFromFileBtn.addEventListener('click', () => {
        fileInput.click();
    });
    
    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = (event) => {
            loadSaveData(event.target.result);
        };
        reader.readAsText(file);
        
        // Reset input so same file can be loaded again
        fileInput.value = '';
    });
    
    // Import from string
    const importBtn = document.getElementById('importBtn');
    const importArea = document.getElementById('importArea');
    const loadText = document.getElementById('loadText');
    
    importBtn.addEventListener('click', () => {
        importArea.style.display = importArea.style.display === 'none' ? 'block' : 'none';
    });
    
    const loadStrBtn = document.getElementById('loadStrBtn');
    loadStrBtn.addEventListener('click', () => {
        if (loadText.value.trim()) {
            loadSaveData(loadText.value);
            loadText.value = '';
            importArea.style.display = 'none';
        } else {
            showNewsMessage('Please paste a save string');
        }
    });
    
    // New game
    const newGameBtn = document.getElementById('newGameBtn');
    newGameBtn.addEventListener('click', () => {
        if (confirm('Start a new game? Your current progress will be lost unless you save first!')) {
            resetGame();
        }
    });
    
    // Close options panel when clicking outside
    document.addEventListener('click', (e) => {
        if (!optionsToggle.contains(e.target) && !optionsPanel.contains(e.target)) {
            optionsPanel.style.display = 'none';
        }
    });
}

function resetGame() {
    gameState.totalBlocks = 0;
    gameState.clickPower = 1;
    gameState.globalProductionMultiplier = 1;
    gameState.purchasedUpgrades.clear();
    
    BUILDINGS.forEach(building => {
        building.owned = 0;
        gameState.buildingEfficiencyMultipliers[building.id] = 1;
    });
    
    updateUI();
    showNewsMessage('New game started!');
}

// ============================================
// GAME LOOP
// ============================================

function gameLoop() {
    const now = Date.now();
    const deltaTime = (now - gameState.lastUpdate) / 1000;
    
    if (deltaTime > 0 && deltaTime < 1) {
        const productionPerSecond = calculateProductionPerSecond();
        gameState.totalBlocks += productionPerSecond * deltaTime;
        
        updateStats();
    }
    
    gameState.lastUpdate = now;
    
    // Autosave every 10 seconds
    if (now - gameState.lastSave > 10000) {
        autoSave();
    }
}

// ============================================
// INITIALIZATION
// ============================================

window.addEventListener('load', () => {
    gameState.lastUpdate = Date.now();
    
    autoLoad();
    setupEventListeners();
    updateUI();
    
    // Show initial random news message
    const newsText = document.getElementById('newsText');
    newsText.textContent = NEWS_MESSAGES[Math.floor(Math.random() * NEWS_MESSAGES.length)];
    
    // Game loop - update production every frame
    setInterval(gameLoop, 50); // ~20 FPS updates
});

// Auto-save when closing
window.addEventListener('beforeunload', () => {
    autoSave();
});
