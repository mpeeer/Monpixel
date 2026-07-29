// --- item name mapping ---
const ITEM_NAMES = {
    'INK_SACK:3': 'Cocoa Beans',
    'INK_SACK:4': 'Lapis Lazuli',
    'BROWN_MUSHROOM': 'Brown Mushroom',
    'RED_MUSHROOM': 'Red Mushroom',
    'INK_SACK:2': 'Cactus Green',
    'CARROT_ITEM': 'Carrot',
    'ENCHANTED_CARROT': 'Enchanted Carrot',
    'POTATO_ITEM': 'Potato',
    'ENCHANTED_POTATO': 'Enchanted Potato',
    'ENCHANTED_BAKED_POTATO': 'Enchanted Baked Potato',
    'PUMPKIN': 'Pumpkin',
    'ENCHANTED_PUMPKIN': 'Enchanted Pumpkin',
    'MELON': 'Melon',
    'ENCHANTED_MELON': 'Enchanted Melon',
    'ENCHANTED_GLISTERING_MELON': 'Enchanted Glistening Melon',
    'WHEAT': 'Wheat',
    'ENCHANTED_HAY_BLOCK': 'Enchanted Hay Bale',
    'ENCHANTED_BREAD': 'Enchanted Bread',
    'SEEDS': 'Seeds',
    'ENCHANTED_SEEDS': 'Enchanted Seeds',
    'NETHER_STALK': 'Nether Wart',
    'ENCHANTED_NETHER_STALK': 'Enchanted Nether Wart',
    'MUTANT_NETHER_STALK': 'Mutant Nether Wart',
    'SUGAR_CANE': 'Sugar Cane',
    'ENCHANTED_SUGAR': 'Enchanted Sugar',
    'ENCHANTED_PAPER': 'Enchanted Paper',
    'ENCHANTED_SUGAR_CANE': 'Enchanted Sugar Cane',
    'CACTUS': 'Cactus',
    'ENCHANTED_CACTUS_GREEN': 'Enchanted Cactus Green',
    'ENCHANTED_CACTUS': 'Enchanted Cactus',
    'INK_SACK': 'Ink Sack',
    'RAW_FISH:1': 'Raw Salmon',
    'RAW_FISH:2': 'Clownfish',
    'RAW_FISH:3': 'Pufferfish',
    'RAW_FISH': 'Raw Fish',
    'ENCHANTED_RAW_FISH': 'Enchanted Raw Fish',
    'ENCHANTED_RAW_SALMON': 'Enchanted Raw Salmon',
    'ENCHANTED_CLOWNFISH': 'Enchanted Clownfish',
    'ENCHANTED_PUFFERFISH': 'Enchanted Pufferfish',
    'ENCHANTED_COOKED_FISH': 'Enchanted Cooked Fish',
    'ENCHANTED_COOKED_SALMON': 'Enchanted Cooked Salmon',
    'COAL': 'Coal',
    'ENCHANTED_COAL': 'Enchanted Coal',
    'ENCHANTED_CHARCOAL': 'Enchanted Charcoal',
    'ENCHANTED_COAL_BLOCK': 'Enchanted Coal Block',
    'IRON_INGOT': 'Iron Ingot',
    'ENCHANTED_IRON': 'Enchanted Iron',
    'ENCHANTED_IRON_BLOCK': 'Enchanted Iron Block',
    'GOLD_INGOT': 'Gold Ingot',
    'ENCHANTED_GOLD': 'Enchanted Gold',
    'ENCHANTED_GOLD_BLOCK': 'Enchanted Gold Block',
    'DIAMOND': 'Diamond',
    'ENCHANTED_DIAMOND': 'Enchanted Diamond',
    'ENCHANTED_DIAMOND_BLOCK': 'Enchanted Diamond Block',
    'EMERALD': 'Emerald',
    'ENCHANTED_EMERALD': 'Enchanted Emerald',
    'ENCHANTED_EMERALD_BLOCK': 'Enchanted Emerald Block',
    'REDSTONE': 'Redstone',
    'ENCHANTED_REDSTONE': 'Enchanted Redstone',
    'ENCHANTED_REDSTONE_BLOCK': 'Enchanted Redstone Block',
    'LAPIS_LAZULI': 'Lapis Lazuli',
    'ENCHANTED_LAPIS_LAZULI': 'Enchanted Lapis Lazuli',
    'ENCHANTED_LAPIS_LAZULI_BLOCK': 'Enchanted Lapis Block',
    'QUARTZ': 'Nether Quartz',
    'ENCHANTED_QUARTZ': 'Enchanted Quartz',
    'ENCHANTED_QUARTZ_BLOCK': 'Enchanted Quartz Block',
    'OBSIDIAN': 'Obsidian',
    'ENCHANTED_OBSIDIAN': 'Enchanted Obsidian',
    'GLOWSTONE_DUST': 'Glowstone Dust',
    'ENCHANTED_GLOWSTONE_DUST': 'Enchanted Glowstone Dust',
    'ENCHANTED_GLOWSTONE': 'Enchanted Glowstone',
    'GRAVEL': 'Gravel',
    'FLINT': 'Flint',
    'ENCHANTED_FLINT': 'Enchanted Flint',
    'SAND': 'Sand',
    'ENCHANTED_SAND': 'Enchanted Sand',
    'ICE': 'Ice',
    'PACKED_ICE': 'Packed Ice',
    'ENCHANTED_ICE': 'Enchanted Ice',
    'ENCHANTED_PACKED_ICE': 'Enchanted Packed Ice',
    'NETHERRACK': 'Netherrack',
    'ENDER_STONE': 'End Stone',
    'ENCHANTED_ENDSTONE': 'Enchanted End Stone',
    'ENCHANTED_ENDER_PEARL': 'Enchanted Ender Pearl',
    'ENCHANTED_EYE_OF_ENDER': 'Enchanted Eye of Ender',
    'ENDER_PEARL': 'Ender Pearl',
    'BLAZE_ROD': 'Blaze Rod',
    'ENCHANTED_BLAZE_POWDER': 'Enchanted Blaze Powder',
    'ENCHANTED_BLAZE_ROD': 'Enchanted Blaze Rod',
    'MAGMA_CREAM': 'Magma Cream',
    'ENCHANTED_MAGMA_CREAM': 'Enchanted Magma Cream',
    'SLIME_BALL': 'Slimeball',
    'ENCHANTED_SLIME_BALL': 'Enchanted Slimeball',
    'ENCHANTED_SLIME_BLOCK': 'Enchanted Slime Block',
    'BONE': 'Bone',
    'ENCHANTED_BONE': 'Enchanted Bone',
    'ENCHANTED_BONE_BLOCK': 'Enchanted Bone Block',
    'ROTTEN_FLESH': 'Rotten Flesh',
    'ENCHANTED_ROTTEN_FLESH': 'Enchanted Rotten Flesh',
    'STRING': 'String',
    'ENCHANTED_STRING': 'Enchanted String',
    'SPIDER_EYE': 'Spider Eye',
    'ENCHANTED_SPIDER_EYE': 'Enchanted Spider Eye',
    'ENCHANTED_FERMENTED_SPIDER_EYE': 'Enchanted Fermented Spider Eye',
    'GUNPOWDER': 'Gunpowder',
    'ENCHANTED_GUNPOWDER': 'Enchanted Gunpowder',
    'ENCHANTED_FIREWORK_ROCKET': 'Enchanted Firework Rocket',
    'LEATHER': 'Leather',
    'ENCHANTED_LEATHER': 'Enchanted Leather',
    'RABBIT_HIDE': 'Rabbit Hide',
    'RABBIT_FOOT': 'Rabbit Foot',
    'ENCHANTED_RABBIT_HIDE': 'Enchanted Rabbit Hide',
    'ENCHANTED_RABBIT_FOOT': 'Enchanted Rabbit Foot',
    'RAW_CHICKEN': 'Raw Chicken',
    'ENCHANTED_RAW_CHICKEN': 'Enchanted Raw Chicken',
    'ENCHANTED_EGG': 'Enchanted Egg',
    'MUTTON': 'Mutton',
    'ENCHANTED_MUTTON': 'Enchanted Mutton',
    'ENCHANTED_COOKED_MUTTON': 'Enchanted Cooked Mutton',
    'PORK': 'Raw Porkchop',
    'ENCHANTED_PORK': 'Enchanted Pork',
    'ENCHANTED_GRILLED_PORK': 'Enchanted Grilled Pork',
    'RAW_BEEF': 'Raw Beef',
    'ENCHANTED_RAW_BEEF': 'Enchanted Raw Beef',
    'FEATHER': 'Feather',
    'ENCHANTED_FEATHER': 'Enchanted Feather',
    'SNOW_BALL': 'Snowball',
    'ENCHANTED_SNOW_BLOCK': 'Enchanted Snow Block',
    'CLAY_BALL': 'Clay',
    'ENCHANTED_CLAY_BALL': 'Enchanted Clay',
    'LILY_PAD': 'Lily Pad',
    'ENCHANTED_LILY_PAD': 'Enchanted Lily Pad',
    'PRISMARINE_SHARD': 'Prismarine Shard',
    'PRISMARINE_CRYSTALS': 'Prismarine Crystals',
    'ENCHANTED_PRISMARINE_SHARD': 'Enchanted Prismarine Shard',
    'ENCHANTED_PRISMARINE_CRYSTALS': 'Enchanted Prismarine Crystals',
    'SPONGE': 'Sponge',
    'ENCHANTED_SPONGE': 'Enchanted Sponge',
    'ENCHANTED_WET_SPONGE': 'Enchanted Wet Sponge',
    'OAK_WOOD': 'Oak Wood',
    'SPRUCE_WOOD': 'Spruce Wood',
    'BIRCH_WOOD': 'Birch Wood',
    'DARK_OAK_WOOD': 'Dark Oak Wood',
    'ACACIA_WOOD': 'Acacia Wood',
    'JUNGLE_WOOD': 'Jungle Wood',
    'ENCHANTED_OAK_WOOD': 'Enchanted Oak Wood',
    'ENCHANTED_SPRUCE_WOOD': 'Enchanted Spruce Wood',
    'ENCHANTED_BIRCH_WOOD': 'Enchanted Birch Wood',
    'ENCHANTED_DARK_OAK_WOOD': 'Enchanted Dark Oak Wood',
    'ENCHANTED_ACACIA_WOOD': 'Enchanted Acacia Wood',
    'ENCHANTED_JUNGLE_WOOD': 'Enchanted Jungle Wood',
    'MITHRIL_ORE': 'Mithril',
    'ENCHANTED_MITHRIL': 'Enchanted Mithril',
    'REFINED_MITHRIL': 'Refined Mithril',
    'TITANIUM_ORE': 'Titanium',
    'ENCHANTED_TITANIUM': 'Enchanted Titanium',
    'REFINED_TITANIUM': 'Refined Titanium',
    'STARFALL': 'Starfall',
    'GEMSTONE_COLLECTION': 'Rough Gemstone',
    'FLAWED_RUBY_GEM': 'Flawed Ruby',
    'FINE_RUBY_GEM': 'Fine Ruby',
    'FLAWLESS_RUBY_GEM': 'Flawless Ruby',
    'PERFECT_RUBY_GEM': 'Perfect Ruby',
    'ROUGH_RUBY_GEM': 'Rough Ruby',
    'FLAWED_AMETHYST_GEM': 'Flawed Amethyst',
    'FINE_AMETHYST_GEM': 'Fine Amethyst',
    'FLAWLESS_AMETHYST_GEM': 'Flawless Amethyst',
    'PERFECT_AMETHYST_GEM': 'Perfect Amethyst',
    'ROUGH_AMETHYST_GEM': 'Rough Amethyst',
    'FLAWED_JADE_GEM': 'Flawed Jade',
    'FINE_JADE_GEM': 'Fine Jade',
    'FLAWLESS_JADE_GEM': 'Flawless Jade',
    'PERFECT_JADE_GEM': 'Perfect Jade',
    'ROUGH_JADE_GEM': 'Rough Jade',
    'FLAWED_SAPPHIRE_GEM': 'Flawed Sapphire',
    'FINE_SAPPHIRE_GEM': 'Fine Sapphire',
    'FLAWLESS_SAPPHIRE_GEM': 'Flawless Sapphire',
    'PERFECT_SAPPHIRE_GEM': 'Perfect Sapphire',
    'ROUGH_SAPPHIRE_GEM': 'Rough Sapphire',
    'FLAWED_AMBER_GEM': 'Flawed Amber',
    'FINE_AMBER_GEM': 'Fine Amber',
    'FLAWLESS_AMBER_GEM': 'Flawless Amber',
    'PERFECT_AMBER_GEM': 'Perfect Amber',
    'ROUGH_AMBER_GEM': 'Rough Amber',
    'FLAWED_TOPAZ_GEM': 'Flawed Topaz',
    'FINE_TOPAZ_GEM': 'Fine Topaz',
    'FLAWLESS_TOPAZ_GEM': 'Flawless Topaz',
    'PERFECT_TOPAZ_GEM': 'Perfect Topaz',
    'ROUGH_TOPAZ_GEM': 'Rough Topaz',
    'FLAWED_JASPER_GEM': 'Flawed Jasper',
    'FINE_JASPER_GEM': 'Fine Jasper',
    'FLAWLESS_JASPER_GEM': 'Flawless Jasper',
    'PERFECT_JASPER_GEM': 'Perfect Jasper',
    'ROUGH_JASPER_GEM': 'Rough Jasper',
    'FLAWED_OPAL_GEM': 'Flawed Opal',
    'FINE_OPAL_GEM': 'Fine Opal',
    'FLAWLESS_OPAL_GEM': 'Flawless Opal',
    'PERFECT_OPAL_GEM': 'Perfect Opal',
    'ROUGH_OPAL_GEM': 'Rough Opal',
    'OIL_BARREL': 'Oil Barrel',
    'ENCHANTED_MYCELIUM': 'Enchanted Mycelium',
    'ENCHANTED_RED_SAND': 'Enchanted Red Sand',
    'ENCHANTED_ANCIENT_CLAW': 'Enchanted Ancient Claw',
    'ENCHANTED_SULPHUR': 'Enchanted Sulphur',
    'ENCHANTED_SULPHUR_CUBE': 'Enchanted Sulphur Cube',
    'CHILI_PEPPER': 'Chili Pepper',
    'KUUDRA_TEETH': 'Kuudra Teeth',
    'HEAVY_PEARL': 'Heavy Pearl',
    'CRIMSON_ESSENCE': 'Crimson Essence',
    'UNDEAD_ESSENCE': 'Undead Essence',
    'DIAMOND_ESSENCE': 'Diamond Essence',
    'GOLD_ESSENCE': 'Gold Essence',
    'DRAGON_ESSENCE': 'Dragon Essence',
    'SPIDER_ESSENCE': 'Spider Essence',
    'WITHER_ESSENCE': 'Wither Essence',
    'ICE_ESSENCE': 'Ice Essence',
    'NULL_SPHERE': 'Null Sphere',
    'NULL_ATOM': 'Null Atom',
    'NULL_OVOID': 'Null Ovoid',
    'ENCHANTED_RED_SAND_CUBE': 'Enchanted Red Sand Cube',
    'ENCHANTED_MYCELIUM_CUBE': 'Enchanted Mycelium Cube',
    'RECOMBOBULATOR_3000': 'Recombobulator 3000',
    'HOT_POTATO_BOOK': 'Hot Potato Book',
    'FUMING_POTATO_BOOK': 'Fuming Potato Book',
    'ULTIMATE_CARROT_CANDY': 'Ultimate Carrot Candy',
    'GREAT_CARROT_CANDY': 'Great Carrot Candy',
    'SIMPLE_CARROT_CANDY': 'Simple Carrot Candy',
    'SUPER_EGG': 'Super Enchanted Egg',
    'POWER_CRYSTAL': 'Power Crystal',
    'SUPERBOOM_TNT': 'Superboom TNT',
    'INFINITE_QUIVER': 'Infinite Quiver',
    'JACOBS_TICKET': "Jacob's Ticket",
    'GREEN_BANDANA': 'Green Bandana',
    'PURE_MITHRIL': 'Pure Mithril',
    'ROCK_GEMSTONE': 'Rock Gemstone',
    'PETRIFIED_STARFALL': 'Petrified Starfall',
    'TREASURITE': 'Treasurite',
    'GRIFFIN_FEATHER': 'Griffin Feather',
    'DAEDALUS_STICK': 'Daedalus Stick',
    'BOOSTER_COOKIE': 'Booster Cookie',
    'STOCK_OF_STONKS': 'Stock of Stonks',
    'NEW_YEAR_CAKE': 'New Year Cake',
    'GOD_POTION_2': 'God Potion',
    'KAT_FLOWER': 'Kat Flower',
    'BITS': 'Bits',
    'GOLDEN_TOOTH': 'Golden Tooth',
    'WEREWOLF_SKIN': 'Werewolf Skin',
    'SOUL_FRAGMENT': 'Soul Fragment',
    'WITHER_BLOOD': 'Wither Blood',
    'DARK_ORB': 'Dark Orb',
    'PRECURSOR_GEAR': 'Precursor Gear',
    'ABSOLUTE_ENDER_PEARL': 'Absolute Ender Pearl',
    'ENCHANTED_BOOK_BUNDLE_BIG_BRAIN': 'Big Brain Book',
    'ENCHANTED_BOOK_BUNDLE_COUNTER_STRIKE': 'Counter-Strike Book',
    'ENCHANTED_BOOK_BUNDLE_VICIOUS': 'Vicious Book',
    'BLAZE_ASHES': 'Blaze Ashes',
    'PERFECT_PERIDOT_GEM': 'Perfect Peridot',
    'PERFECT_CITRINE_GEM': 'Perfect Citrine',
    'PERFECT_ONYX_GEM': 'Perfect Onyx',
    'PERFECT_AQUAMARINE_GEM': 'Perfect Aquamarine',
    'ROUGH_PERIDOT_GEM': 'Rough Peridot',
    'FINE_PERIDOT_GEM': 'Fine Peridot',
    'FLAWLESS_PERIDOT_GEM': 'Flawless Peridot',
    'ROUGH_CITRINE_GEM': 'Rough Citrine',
    'FINE_CITRINE_GEM': 'Fine Citrine',
    'FLAWLESS_CITRINE_GEM': 'Flawless Citrine',
    'ROUGH_ONYX_GEM': 'Rough Onyx',
    'FINE_ONYX_GEM': 'Fine Onyx',
    'FLAWLESS_ONYX_GEM': 'Flawless Onyx',
    'ROUGH_AQUAMARINE_GEM': 'Rough Aquamarine',
    'FINE_AQUAMARINE_GEM': 'Fine Aquamarine',
    'FLAWLESS_AQUAMARINE_GEM': 'Flawless Aquamarine',
    'HAY_BLOCK': 'Hay Bale',
    'COMPACT_OOZE': 'Compact Ooze',
    'PLASMA': 'Plasma',
    'VOLTA': 'Volta',
    'CORRUPTED_FRAGMENT': 'Corrupted Fragment',
    'SHARK_FIN': 'Shark Fin',
    'ENCHANTED_SHARK_FIN': 'Enchanted Shark Fin',
    'NURSE_SHARK_FIN': 'Nurse Shark Fin',
    'BLUE_SHARK_FIN': 'Blue Shark Fin',
    'TIGER_SHARK_FIN': 'Tiger Shark Fin',
    'GREAT_WHITE_SHARK_FIN': 'Great White Shark Fin',
    'WHALE_BAIT': 'Whale Bait',
    'RUBY_POWER_SCROLL': 'Ruby Power Scroll',
    'SAPPHIRE_POWER_SCROLL': 'Sapphire Power Scroll',
    'JASPER_POWER_SCROLL': 'Jasper Power Scroll',
    'AMETHYST_POWER_SCROLL': 'Amethyst Power Scroll',
    'AMBER_POWER_SCROLL': 'Amber Power Scroll',
    'OPAL_POWER_SCROLL': 'Opal Power Scroll',
    'SALMON_OPAL': 'Salmon Opal',
    'WORM_MEMBRANE': 'Worm Membrane',
    'FLYING_FISH': 'Flying Fish',
    'CORRUPT_SOIL': 'Corrupt Soil',
    'SULPHURIC_COAL': 'Sulphuric Coal',
    'INFERNO_MINION_FUEL': 'Inferno Minion Fuel',
    'HYPER_CATALYST': 'Hyper Catalyst',
    'CATALYST': 'Catalyst',
    'CRYSTAL_FRAGMENT': 'Crystal Fragment',
    'JUNGLE_KEY': 'Jungle Key',
    'WITHER_CATALYST': 'Wither Catalyst',
    'SILENT_PEARL': 'Silent Pearl',
    'CRUX_TALISMAN': 'Crux Talisman',
    'METAPHORIC_EGG': 'Metaphoric Egg',
    'REVENANT_FLESH': 'Revenant Flesh',
    'TARANTULA_WEB': 'Tarantula Web',
    'WOLF_TOOTH': 'Wolf Tooth',
    'GOLDEN_POWDER': 'Golden Powder',
    'JADERALD': 'Jaderald',
    'GLOSSY_GEMSTONE': 'Glossy Gemstone',
    'BEJEWELED_HANDLE': 'Bejeweled Handle',
    'POWER_SCROLL': 'Power Scroll',
    'SORROW': 'Sorrow',
    'PLASMA_NUCLEUS': 'Plasma Nucleus',
    'CONCENTRATED_STONE': 'Concentrated Stone',
    'EXCEEDINGLY_RARE_ENDER_ARTIFACT_UPGRADER': 'Exceedingly Rare Ender Artifact Upgrader',
    'ENCHANTED_BROWN_MUSHROOM': 'Enchanted Brown Mushroom',
    'ENCHANTED_RED_MUSHROOM': 'Enchanted Red Mushroom',
    'ENCHANTED_HUGE_MUSHROOM_1': 'Enchanted Mushroom Block (Brown)',
    'ENCHANTED_HUGE_MUSHROOM_2': 'Enchanted Mushroom Block (Red)',
    'POLISHED_PUMPKIN': 'Polished Pumpkin',
    'POLISHED_PEBBLE': 'Polished Pebble',
};

function formatItemName(productId) {
    if (ITEM_NAMES[productId]) return ITEM_NAMES[productId];

    // Enchanted items
    if (productId.startsWith('ENCHANTED_')) {
        const base = productId.replace('ENCHANTED_', '');
        const baseName = ITEM_NAMES[base] || formatItemName(base);
        return 'Enchanted ' + baseName.split('Enchanted ').join('');
    }

    // Handle INK_SACK:X
    const inkMatch = productId.match(/^INK_SACK:(\d+)$/);
    if (inkMatch) {
        const inks = { 0: 'Ink Sack (Black)', 1: 'Rose Red', 2: 'Cactus Green', 3: 'Cocoa Beans', 4: 'Lapis Lazuli', 5: 'Purple Dye', 6: 'Cyan Dye', 7: 'Light Gray Dye', 8: 'Gray Dye', 9: 'Pink Dye', 10: 'Lime Dye', 11: 'Dandelion Yellow', 12: 'Light Blue Dye', 13: 'Magenta Dye', 14: 'Orange Dye', 15: 'Bone Meal' };
        return inks[parseInt(inkMatch[1])] || 'Ink Sack #' + inkMatch[1];
    }

    // Handle RAW_FISH:X
    const fishMatch = productId.match(/^RAW_FISH:(\d+)$/);
    if (fishMatch) {
        const fish = { 0: 'Raw Fish', 1: 'Raw Salmon', 2: 'Clownfish', 3: 'Pufferfish' };
        return fish[parseInt(fishMatch[1])] || 'Raw Fish #' + fishMatch[1];
    }

    // Clean up the ID
    return productId
        .replace(/_/g, ' ')
        .replace(/:(\d+)$/, ' #$1')
        .split(' ')
        .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
        .join(' ');
}

// --- state ---
let allItems = [];
let currentSort = { field: 'spreadPct', dir: 'desc' };
let currentView = 'bazaar';

// --- DOM refs ---
const bazaarBody = document.getElementById('bazaarBody');
const flipBody = document.getElementById('flipBody');
const volumeBody = document.getElementById('volumeBody');
const searchInput = document.getElementById('searchInput');
const statusEl = document.getElementById('status');
const lastUpdatedEl = document.getElementById('lastUpdated');
const refreshBtn = document.getElementById('refreshBtn');
const itemCountEl = document.getElementById('itemCount');
const bazaarView = document.getElementById('bazaarView');
const methodsView = document.getElementById('methodsView');
const tabs = document.querySelectorAll('.tab');
const ths = document.querySelectorAll('thead th.sortable');

// --- formatting ---
function fmtCoins(n) {
    if (n == null || isNaN(n)) return '—';
    n = Math.round(n * 10) / 10;
    if (n >= 1000000) return (n / 1000000).toFixed(1) + 'm';
    if (n >= 1000) return (n / 1000).toFixed(1) + 'k';
    return n.toFixed(1);
}

function fmtCoinsFull(n) {
    if (n == null || isNaN(n)) return '—';
    return Math.round(n).toLocaleString();
}

function fmtNum(n) {
    if (n == null || isNaN(n)) return '—';
    if (n >= 1000000) return (n / 1000000).toFixed(1) + 'm';
    if (n >= 1000) return (n / 1000).toFixed(1) + 'k';
    return Math.round(n).toString();
}

function timeAgo(ts) {
    const diff = Date.now() - ts;
    const s = Math.floor(diff / 1000);
    if (s < 5) return 'just now';
    if (s < 60) return s + 's ago';
    if (s < 3600) return Math.floor(s / 60) + 'm ago';
    return Math.floor(s / 3600) + 'h ago';
}

// --- data ---
async function fetchBazaar() {
    statusEl.textContent = 'loading';
    statusEl.className = 'status';

    try {
        const res = await fetch('https://api.hypixel.net/v2/skyblock/bazaar');
        if (!res.ok) throw new Error('HTTP ' + res.status);
        const data = await res.json();
        if (!data.success) throw new Error('API error');
        return data;
    } catch (e) {
        statusEl.textContent = 'error';
        statusEl.className = 'status err';
        console.error('Bazaar fetch failed:', e);
        return null;
    }
}

function processBazaar(data) {
    const items = [];
    for (const [id, product] of Object.entries(data.products)) {
        const qs = product.quick_status;
        const buyPrice = qs.buyPrice || 0;
        const sellPrice = qs.sellPrice || 0;
        const buyVolume = qs.buyVolume || 0;
        const sellVolume = qs.sellVolume || 0;
        const buyMovingWeek = qs.buyMovingWeek || 0;
        const sellMovingWeek = qs.sellMovingWeek || 0;

        // spread = sellPrice - buyPrice (your potential order-flip margin)
        const spread = sellPrice - buyPrice;
        const spreadPct = buyPrice > 0 ? (spread / buyPrice) * 100 : 0;

        items.push({
            id,
            name: formatItemName(id),
            buyPrice,
            sellPrice,
            spread,
            spreadPct,
            buyVolume,
            sellVolume,
            buyMovingWeek,
            sellMovingWeek,
            totalVolume: buyVolume + sellVolume,
            weekVolume: buyMovingWeek + sellMovingWeek,
        });
    }

    return items;
}

function renderBazaar(items) {
    bazaarBody.innerHTML = '';

    if (allItems.length === 0 && items.length === 0) {
        bazaarBody.innerHTML = '<tr class="loading-row"><td colspan="6">loading…</td></tr>';
        return;
    }

    if (items.length === 0) {
        bazaarBody.innerHTML = '<tr class="loading-row"><td colspan="6">no items found</td></tr>';
        return;
    }

    for (const item of items) {
        const tr = document.createElement('tr');
        const spreadClass = item.spread >= 0 ? 'positive' : 'negative';
        tr.innerHTML = `
            <td>${escapeHtml(item.name)}</td>
            <td class="num">${fmtCoins(item.buyPrice)}</td>
            <td class="num">${fmtCoins(item.sellPrice)}</td>
            <td class="num ${spreadClass}">${fmtCoins(item.spread)}</td>
            <td class="num ${spreadClass}">${item.spreadPct.toFixed(1)}%</td>
            <td class="num">${fmtNum(item.totalVolume)}</td>
        `;
        bazaarBody.appendChild(tr);
    }
}

function renderMethods(items) {
    // Bazaar flips: order-flip strategy (place buy order, then sell offer)
    // profit = sellPrice - buyPrice, after 1% bazaar tax
    const flips = items
        .filter(i => i.spread > 0 && i.buyVolume > 0 && i.sellVolume > 0)
        .sort((a, b) => b.spreadPct - a.spreadPct)
        .slice(0, 15);

    flipBody.innerHTML = '';
    for (const item of flips) {
        const profitAfterTax = item.spread * 0.99;
        const marginAfterTax = item.buyPrice > 0 ? (profitAfterTax / item.buyPrice) * 100 : 0;
        const tr = document.createElement('tr');
        // buy at = place buy order at ~buyPrice; sell at = place sell offer at ~sellPrice
        tr.innerHTML = `
            <td>${escapeHtml(item.name)}</td>
            <td class="num">${fmtCoins(item.buyPrice)}</td>
            <td class="num">${fmtCoins(item.sellPrice)}</td>
            <td class="num positive">${fmtCoins(profitAfterTax)}</td>
            <td class="num positive">${marginAfterTax.toFixed(1)}%</td>
        `;
        flipBody.appendChild(tr);
    }

    if (flips.length === 0) {
        flipBody.innerHTML = '<tr class="loading-row"><td colspan="5">no profitable flips</td></tr>';
    }

    // Volume leaders: highest weekly volume
    const volumeLeaders = items
        .filter(i => i.weekVolume > 0)
        .sort((a, b) => b.weekVolume - a.weekVolume)
        .slice(0, 15);

    volumeBody.innerHTML = '';
    for (const item of volumeLeaders) {
        const avgPrice = (item.buyPrice + item.sellPrice) / 2 || item.buyPrice || item.sellPrice;
        const dailyEstimate = item.weekVolume / 7 * avgPrice;
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${escapeHtml(item.name)}</td>
            <td class="num">${fmtCoins(avgPrice)}</td>
            <td class="num">${fmtNum(item.weekVolume)}</td>
            <td class="num">${fmtCoins(dailyEstimate)}</td>
        `;
        volumeBody.appendChild(tr);
    }

    if (volumeLeaders.length === 0) {
        volumeBody.innerHTML = '<tr class="loading-row"><td colspan="4">no volume data</td></tr>';
    }
}

// --- sorting ---
function sortItems(items, field, dir) {
    return [...items].sort((a, b) => {
        let valA = a[field];
        let valB = b[field];
        if (field === 'name') {
            valA = valA.toLowerCase();
            valB = valB.toLowerCase();
            return dir === 'asc' ? valA.localeCompare(valB) : valB.localeCompare(valA);
        }
        const diff = (valA || 0) - (valB || 0);
        return dir === 'asc' ? diff : -diff;
    });
}

// --- filtering ---
function filterItems(items, query) {
    if (!query.trim()) return items;
    const q = query.toLowerCase();
    return items.filter(i => i.name.toLowerCase().includes(q));
}

// --- render all ---
function renderAll() {
    const query = searchInput.value;
    let filtered = filterItems(allItems, query);
    filtered = sortItems(filtered, currentSort.field, currentSort.dir);

    if (currentView === 'bazaar') {
        renderBazaar(filtered);
        itemCountEl.textContent = filtered.length + ' items';
    } else {
        renderMethods(allItems);
        itemCountEl.textContent = allItems.length + ' items';
    }
}

// --- event handlers ---
searchInput.addEventListener('input', renderAll);

refreshBtn.addEventListener('click', loadData);

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        currentView = tab.dataset.tab;
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        bazaarView.classList.toggle('active', currentView === 'bazaar');
        methodsView.classList.toggle('active', currentView === 'methods');
        renderAll();
    });
});

ths.forEach(th => {
    th.addEventListener('click', () => {
        const field = th.dataset.sort;
        if (currentSort.field === field) {
            currentSort.dir = currentSort.dir === 'asc' ? 'desc' : 'asc';
        } else {
            currentSort.field = field;
            currentSort.dir = 'desc';
        }
        // update sort indicators
        ths.forEach(t => {
            t.classList.remove('sorted', 'asc', 'desc');
        });
        th.classList.add('sorted', currentSort.dir);
        renderAll();
    });
});

// --- escape ---
function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

// --- main ---
let lastFetchTime = 0;
let autoRefreshTimer = null;

async function loadData() {
    const data = await fetchBazaar();
    if (!data) return;

    allItems = processBazaar(data);
    lastFetchTime = Date.now();
    statusEl.textContent = 'live';
    statusEl.className = 'status ok';
    lastUpdatedEl.textContent = timeAgo(lastFetchTime);
    if (!timeUpdateInterval) startTimeUpdate();
    renderAll();
}

let timeUpdateInterval = null;

function startTimeUpdate() {
    if (timeUpdateInterval) clearInterval(timeUpdateInterval);
    timeUpdateInterval = setInterval(() => {
        if (lastFetchTime > 0) {
            lastUpdatedEl.textContent = timeAgo(lastFetchTime);
        }
    }, 5000);
}

// initial load + auto-refresh
loadData();
autoRefreshTimer = setInterval(loadData, 30000);

// initial sort indicator
ths.forEach(th => {
    if (th.dataset.sort === currentSort.field) {
        th.classList.add('sorted', currentSort.dir);
    }
});
