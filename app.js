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

// --- api key ---
const API_KEY = 'cc235486-2fb4-4cc4-ba02-cf74a9b1f0e5';

// --- state ---
let allItems = [];
let prevSnapshot = {};
let currentSort = { field: 'spreadPct', dir: 'desc' };
let currentView = 'bazaar';
let currentBazaarCategory = 'all';

// --- categories ---
function getCategory(id) {
    const catMap = {
        // Farming crops
        WHEAT:'farming', SEEDS:'farming', HAY_BLOCK:'farming', ENCHANTED_HAY_BLOCK:'farming', ENCHANTED_BREAD:'farming',
        CARROT_ITEM:'farming', ENCHANTED_CARROT:'farming', POTATO_ITEM:'farming', ENCHANTED_POTATO:'farming', ENCHANTED_BAKED_POTATO:'farming',
        PUMPKIN:'farming', ENCHANTED_PUMPKIN:'farming', POLISHED_PUMPKIN:'farming',
        MELON:'farming', ENCHANTED_MELON:'farming', ENCHANTED_GLISTERING_MELON:'farming',
        SUGAR_CANE:'farming', ENCHANTED_SUGAR:'farming', ENCHANTED_PAPER:'farming', ENCHANTED_SUGAR_CANE:'farming',
        CACTUS:'farming', ENCHANTED_CACTUS_GREEN:'farming', ENCHANTED_CACTUS:'farming',
        'INK_SACK:3':'farming', BROWN_MUSHROOM:'farming', RED_MUSHROOM:'farming', ENCHANTED_BROWN_MUSHROOM:'farming', ENCHANTED_RED_MUSHROOM:'farming',
        ENCHANTED_HUGE_MUSHROOM_1:'farming', ENCHANTED_HUGE_MUSHROOM_2:'farming',
        NETHER_STALK:'farming', ENCHANTED_NETHER_STALK:'farming', MUTANT_NETHER_STALK:'farming',
        ENCHANTED_SEEDS:'farming', POLISHED_PEBBLE:'farming',
        // Animal drops
        LEATHER:'farming', ENCHANTED_LEATHER:'farming', RAW_BEEF:'farming', ENCHANTED_RAW_BEEF:'farming',
        PORK:'farming', ENCHANTED_PORK:'farming', ENCHANTED_GRILLED_PORK:'farming',
        RAW_CHICKEN:'farming', ENCHANTED_RAW_CHICKEN:'farming', ENCHANTED_EGG:'farming', SUPER_EGG:'farming',
        FEATHER:'farming', ENCHANTED_FEATHER:'farming', MUTTON:'farming', ENCHANTED_MUTTON:'farming', ENCHANTED_COOKED_MUTTON:'farming',
        RABBIT_HIDE:'farming', ENCHANTED_RABBIT_HIDE:'farming', RABBIT_FOOT:'farming', ENCHANTED_RABBIT_FOOT:'farming',
        // Mining
        COAL:'mining', ENCHANTED_COAL:'mining', ENCHANTED_CHARCOAL:'mining', ENCHANTED_COAL_BLOCK:'mining',
        IRON_INGOT:'mining', ENCHANTED_IRON:'mining', ENCHANTED_IRON_BLOCK:'mining',
        GOLD_INGOT:'mining', ENCHANTED_GOLD:'mining', ENCHANTED_GOLD_BLOCK:'mining',
        DIAMOND:'mining', ENCHANTED_DIAMOND:'mining', ENCHANTED_DIAMOND_BLOCK:'mining',
        EMERALD:'mining', ENCHANTED_EMERALD:'mining', ENCHANTED_EMERALD_BLOCK:'mining',
        REDSTONE:'mining', ENCHANTED_REDSTONE:'mining', ENCHANTED_REDSTONE_BLOCK:'mining',
        LAPIS_LAZULI:'mining', ENCHANTED_LAPIS_LAZULI:'mining', ENCHANTED_LAPIS_LAZULI_BLOCK:'mining',
        QUARTZ:'mining', ENCHANTED_QUARTZ:'mining', ENCHANTED_QUARTZ_BLOCK:'mining',
        OBSIDIAN:'mining', ENCHANTED_OBSIDIAN:'mining', GLOWSTONE_DUST:'mining', ENCHANTED_GLOWSTONE_DUST:'mining', ENCHANTED_GLOWSTONE:'mining',
        GRAVEL:'mining', FLINT:'mining', ENCHANTED_FLINT:'mining', SAND:'mining', ENCHANTED_SAND:'mining',
        ICE:'mining', PACKED_ICE:'mining', ENCHANTED_ICE:'mining', ENCHANTED_PACKED_ICE:'mining',
        SNOW_BALL:'mining', ENCHANTED_SNOW_BLOCK:'mining', CLAY_BALL:'mining', ENCHANTED_CLAY_BALL:'mining',
        ENDER_STONE:'mining', ENCHANTED_ENDSTONE:'mining', NETHERRACK:'mining',
        MITHRIL_ORE:'mining', ENCHANTED_MITHRIL:'mining', REFINED_MITHRIL:'mining',
        TITANIUM_ORE:'mining', ENCHANTED_TITANIUM:'mining', REFINED_TITANIUM:'mining',
        STARFALL:'mining', GEMSTONE_COLLECTION:'mining', PURE_MITHRIL:'mining', ROCK_GEMSTONE:'mining', PETRIFIED_STARFALL:'mining',
        CONCENTRATED_STONE:'mining', ENCHANTED_RED_SAND:'mining', ENCHANTED_RED_SAND_CUBE:'mining', ENCHANTED_MYCELIUM:'mining', ENCHANTED_MYCELIUM_CUBE:'mining',
        ENCHANTED_SULPHUR:'mining', ENCHANTED_SULPHUR_CUBE:'mining', SULPHURIC_COAL:'mining',
        // Combat
        ROTTEN_FLESH:'combat', ENCHANTED_ROTTEN_FLESH:'combat', BONE:'combat', ENCHANTED_BONE:'combat', ENCHANTED_BONE_BLOCK:'combat',
        STRING:'combat', ENCHANTED_STRING:'combat', SPIDER_EYE:'combat', ENCHANTED_SPIDER_EYE:'combat', ENCHANTED_FERMENTED_SPIDER_EYE:'combat',
        GUNPOWDER:'combat', ENCHANTED_GUNPOWDER:'combat', ENCHANTED_FIREWORK_ROCKET:'combat',
        ENDER_PEARL:'combat', ENCHANTED_ENDER_PEARL:'combat', ENCHANTED_EYE_OF_ENDER:'combat', ABSOLUTE_ENDER_PEARL:'combat',
        SLIME_BALL:'combat', ENCHANTED_SLIME_BALL:'combat', ENCHANTED_SLIME_BLOCK:'combat',
        MAGMA_CREAM:'combat', ENCHANTED_MAGMA_CREAM:'combat', BLAZE_ROD:'combat', ENCHANTED_BLAZE_POWDER:'combat', ENCHANTED_BLAZE_ROD:'combat',
        BLAZE_ASHES:'combat', CHILI_PEPPER:'combat',
        REVENANT_FLESH:'combat', TARANTULA_WEB:'combat', WOLF_TOOTH:'combat', SOUL_FRAGMENT:'combat',
        // Foraging
        OAK_WOOD:'foraging', SPRUCE_WOOD:'foraging', BIRCH_WOOD:'foraging', DARK_OAK_WOOD:'foraging', ACACIA_WOOD:'foraging', JUNGLE_WOOD:'foraging',
        ENCHANTED_OAK_WOOD:'foraging', ENCHANTED_SPRUCE_WOOD:'foraging', ENCHANTED_BIRCH_WOOD:'foraging', ENCHANTED_DARK_OAK_WOOD:'foraging', ENCHANTED_ACACIA_WOOD:'foraging', ENCHANTED_JUNGLE_WOOD:'foraging',
        // Fishing
        RAW_FISH:'fishing', 'RAW_FISH:1':'fishing', 'RAW_FISH:2':'fishing', 'RAW_FISH:3':'fishing', INK_SACK:'fishing',
        ENCHANTED_RAW_FISH:'fishing', ENCHANTED_RAW_SALMON:'fishing', ENCHANTED_CLOWNFISH:'fishing', ENCHANTED_PUFFERFISH:'fishing',
        ENCHANTED_COOKED_FISH:'fishing', ENCHANTED_COOKED_SALMON:'fishing',
        LILY_PAD:'fishing', ENCHANTED_LILY_PAD:'fishing',
        PRISMARINE_SHARD:'fishing', PRISMARINE_CRYSTALS:'fishing', ENCHANTED_PRISMARINE_SHARD:'fishing', ENCHANTED_PRISMARINE_CRYSTALS:'fishing',
        SPONGE:'fishing', ENCHANTED_SPONGE:'fishing', ENCHANTED_WET_SPONGE:'fishing',
        SHARK_FIN:'fishing', ENCHANTED_SHARK_FIN:'fishing', NURSE_SHARK_FIN:'fishing', BLUE_SHARK_FIN:'fishing', TIGER_SHARK_FIN:'fishing', GREAT_WHITE_SHARK_FIN:'fishing',
        WHALE_BAIT:'fishing', FLYING_FISH:'fishing', SALMON_OPAL:'fishing',
        // Oddities
        BOOSTER_COOKIE:'oddities', GOD_POTION_2:'oddities', RECOMBOBULATOR_3000:'oddities',
        HOT_POTATO_BOOK:'oddities', FUMING_POTATO_BOOK:'oddities',
        BITS:'oddities', KAT_FLOWER:'oddities', STOCK_OF_STONKS:'oddities', NEW_YEAR_CAKE:'oddities',
        JACOBS_TICKET:'oddities', GREEN_BANDANA:'oddities', POWER_CRYSTAL:'oddities',
        ULTIMATE_CARROT_CANDY:'oddities', GREAT_CARROT_CANDY:'oddities', SIMPLE_CARROT_CANDY:'oddities',
        SUPERBOOM_TNT:'oddities', INFINITE_QUIVER:'oddities',
        HYPER_CATALYST:'oddities', CATALYST:'oddities', CRYSTAL_FRAGMENT:'oddities',
        JUNGLE_KEY:'oddities', WITHER_CATALYST:'oddities', CORRUPT_SOIL:'oddities',
        GOLDEN_TOOTH:'oddities', WEREWOLF_SKIN:'oddities', DARK_ORB:'oddities', PRECURSOR_GEAR:'oddities',
        NULL_SPHERE:'oddities', NULL_ATOM:'oddities', NULL_OVOID:'oddities',
        ENCHANTED_ANCIENT_CLAW:'oddities', WITHER_BLOOD:'oddities',
        // Essence
        CRIMSON_ESSENCE:'combat', UNDEAD_ESSENCE:'combat', DIAMOND_ESSENCE:'combat', GOLD_ESSENCE:'combat', DRAGON_ESSENCE:'combat', SPIDER_ESSENCE:'combat', WITHER_ESSENCE:'combat', ICE_ESSENCE:'combat',
        // Power scrolls
        RUBY_POWER_SCROLL:'oddities', SAPPHIRE_POWER_SCROLL:'oddities', JASPER_POWER_SCROLL:'oddities', AMETHYST_POWER_SCROLL:'oddities', AMBER_POWER_SCROLL:'oddities', OPAL_POWER_SCROLL:'oddities',
        // Slayer drops
        GOLDEN_POWDER:'oddities', JADERALD:'oddities', BEJEWELED_HANDLE:'oddities', POWER_SCROLL:'oddities',
        // Misc
        TREASURITE:'mining', GRIFFIN_FEATHER:'oddities', DAEDALUS_STICK:'oddities',
        OIL_BARREL:'oddities', COMPACT_OOZE:'oddities', PLASMA:'oddities', VOLTA:'oddities', CORRUPTED_FRAGMENT:'oddities',
        WORM_MEMBRANE:'oddities', KUUDRA_TEETH:'oddities', HEAVY_PEARL:'oddities',
        SILENT_PEARL:'oddities', CRUX_TALISMAN:'oddities', METAPHORIC_EGG:'oddities',
        GLOSSY_GEMSTONE:'mining', SORROW:'oddities', PLASMA_NUCLEUS:'oddities',
        EXCEEDINGLY_RARE_ENDER_ARTIFACT_UPGRADER:'oddities', INFERNO_MINION_FUEL:'oddities',
        'INK_SACK:2':'farming', 'INK_SACK:4':'mining',
        ENCHANTED_BOOK_BUNDLE_BIG_BRAIN:'combat', ENCHANTED_BOOK_BUNDLE_COUNTER_STRIKE:'combat', ENCHANTED_BOOK_BUNDLE_VICIOUS:'combat',
    };
    if (catMap[id]) return catMap[id];
    // Gemstones → mining
    if (id.includes('_GEM')) return 'mining';
    if (id.includes('PERFECT_') || id.includes('FLAWLESS_') || id.includes('FINE_') || id.includes('FLAWED_') || id.includes('ROUGH_')) return 'mining';
    // Enchanted items: try stripping prefix
    if (id.startsWith('ENCHANTED_')) {
        const base = id.replace('ENCHANTED_', '');
        return getCategory(base);
    }
    // Wood
    if (id.includes('_WOOD')) return 'foraging';
    // Fish-related
    if (id.includes('FISH') || id.includes('SHARK') || id.includes('BAIT')) return 'fishing';
    // Essence
    if (id.includes('_ESSENCE')) return 'combat';
    // Default
    return 'oddities';
}

function updateCategoryCounts() {
    const counts = {};
    for (const item of allItems) {
        const cat = getCategory(item.id);
        counts[cat] = (counts[cat] || 0) + 1;
    }
    const total = allItems.length;
    const bzBtns = document.querySelectorAll('#bazaarFilters .filter-btn');
    bzBtns.forEach(btn => {
        const cat = btn.dataset.filter;
        if (cat === 'all') {
            btn.textContent = 'all (' + total + ')';
        } else if (cat === 'favorites') {
            btn.textContent = 'watchlist (' + favorites.size + ')';
        } else {
            btn.textContent = cat + ' (' + (counts[cat] || 0) + ')';
        }
    });
}

// --- watchlist ---
let favorites = new Set();
try { favorites = new Set(JSON.parse(localStorage.getItem('bzFavorites') || '[]')); } catch(e) {}

function saveFavorites() {
    localStorage.setItem('bzFavorites', JSON.stringify([...favorites]));
}

function toggleFavorite(id) {
    if (favorites.has(id)) {
        favorites.delete(id);
    } else {
        favorites.add(id);
    }
    saveFavorites();
    updateCategoryCounts();
    renderAll();
}

// --- NPC prices (buy from NPC shop, sell on bazaar) ---
const NPC_PRICES = {
    'ICE': 1,
    'PACKED_ICE': 9,
    'GOLD_INGOT': 4,
    'IRON_INGOT': 3,
    'COAL': 2,
    'DIAMOND': 8,
    'EMERALD': 6,
    'REDSTONE': 1,
    'LAPIS_LAZULI': 1,
    'SAND': 2,
    'GRAVEL': 3,
    'FLINT': 4,
    'OBSIDIAN': 24,
    'ROTTEN_FLESH': 2,
    'BONE': 2,
    'STRING': 3,
    'SPIDER_EYE': 3,
    'GUNPOWDER': 4,
    'ENDER_PEARL': 10,
    'SLIME_BALL': 5,
    'MAGMA_CREAM': 8,
    'BLAZE_ROD': 10,
    'CLAY_BALL': 3,
    'LILY_PAD': 10,
    'RAW_FISH': 6,
    'RAW_FISH:1': 5,
    'RAW_FISH:3': 15,
    'PRISMARINE_SHARD': 5,
    'PRISMARINE_CRYSTALS': 5,
    'SPONGE': 50,
    'NETHER_STALK': 3,
};

// --- craft recipes (output: { material_id: quantity }) ---
const CRAFT_RECIPES = [
    // 160 base → 1 enchanted
    { output: 'ENCHANTED_SUGAR_CANE', materials: { SUGAR_CANE: 160 } },
    { output: 'ENCHANTED_SLIME_BALL', materials: { SLIME_BALL: 160 } },
    { output: 'ENCHANTED_SLIME_BLOCK', materials: { ENCHANTED_SLIME_BALL: 160 } },
    { output: 'ENCHANTED_IRON', materials: { IRON_INGOT: 160 } },
    { output: 'ENCHANTED_IRON_BLOCK', materials: { ENCHANTED_IRON: 160 } },
    { output: 'ENCHANTED_GOLD', materials: { GOLD_INGOT: 160 } },
    { output: 'ENCHANTED_GOLD_BLOCK', materials: { ENCHANTED_GOLD: 160 } },
    { output: 'ENCHANTED_DIAMOND', materials: { DIAMOND: 160 } },
    { output: 'ENCHANTED_COAL', materials: { COAL: 160 } },
    { output: 'ENCHANTED_COAL_BLOCK', materials: { ENCHANTED_COAL: 160 } },
    { output: 'ENCHANTED_REDSTONE', materials: { REDSTONE: 160 } },
    { output: 'ENCHANTED_LAPIS_LAZULI', materials: { LAPIS_LAZULI: 160 } },
    { output: 'ENCHANTED_QUARTZ', materials: { QUARTZ: 160 } },
    { output: 'ENCHANTED_OBSIDIAN', materials: { OBSIDIAN: 160 } },
    { output: 'ENCHANTED_GLOWSTONE_DUST', materials: { GLOWSTONE_DUST: 160 } },
    { output: 'ENCHANTED_FLINT', materials: { FLINT: 160 } },
    { output: 'ENCHANTED_BONE', materials: { BONE: 160 } },
    { output: 'ENCHANTED_STRING', materials: { STRING: 160 } },
    { output: 'ENCHANTED_SPIDER_EYE', materials: { SPIDER_EYE: 160 } },
    { output: 'ENCHANTED_ROTTEN_FLESH', materials: { ROTTEN_FLESH: 160 } },
    { output: 'ENCHANTED_GUNPOWDER', materials: { GUNPOWDER: 160 } },
    { output: 'ENCHANTED_ENDER_PEARL', materials: { ENDER_PEARL: 160 } },
    { output: 'ENCHANTED_BLAZE_ROD', materials: { BLAZE_ROD: 160 } },
    { output: 'ENCHANTED_MAGMA_CREAM', materials: { MAGMA_CREAM: 160 } },
    { output: 'ENCHANTED_ICE', materials: { ICE: 160 } },
    { output: 'ENCHANTED_PACKED_ICE', materials: { ENCHANTED_ICE: 160 } },
    { output: 'ENCHANTED_SAND', materials: { SAND: 160 } },
    { output: 'ENCHANTED_CLAY_BALL', materials: { CLAY_BALL: 160 } },
    { output: 'ENCHANTED_CACTUS', materials: { CACTUS: 160 } },
    { output: 'ENCHANTED_CACTUS_GREEN', materials: { ENCHANTED_CACTUS: 160 } },
    { output: 'ENCHANTED_SEEDS', materials: { SEEDS: 160 } },
    { output: 'ENCHANTED_POTATO', materials: { POTATO_ITEM: 160 } },
    { output: 'ENCHANTED_CARROT', materials: { CARROT_ITEM: 160 } },
    { output: 'ENCHANTED_PUMPKIN', materials: { PUMPKIN: 160 } },
    { output: 'ENCHANTED_MELON', materials: { MELON: 160 } },
    { output: 'ENCHANTED_NETHER_STALK', materials: { NETHER_STALK: 160 } },
    { output: 'ENCHANTED_MITHRIL', materials: { MITHRIL_ORE: 160 } },
    { output: 'ENCHANTED_EMERALD', materials: { EMERALD: 160 } },
    { output: 'ENCHANTED_HAY_BLOCK', materials: { WHEAT: 144 } },
    { output: 'ENCHANTED_RAW_CHICKEN', materials: { RAW_CHICKEN: 160 } },
    { output: 'ENCHANTED_RAW_BEEF', materials: { RAW_BEEF: 160 } },
    { output: 'ENCHANTED_PORK', materials: { PORK: 160 } },
    { output: 'ENCHANTED_MUTTON', materials: { MUTTON: 160 } },
    { output: 'ENCHANTED_RABBIT_HIDE', materials: { RABBIT_HIDE: 160 } },
    { output: 'ENCHANTED_RABBIT_FOOT', materials: { RABBIT_FOOT: 160 } },
    { output: 'ENCHANTED_LEATHER', materials: { LEATHER: 160 } },
    { output: 'ENCHANTED_FEATHER', materials: { FEATHER: 160 } },
    { output: 'ENCHANTED_BROWN_MUSHROOM', materials: { BROWN_MUSHROOM: 160 } },
    { output: 'ENCHANTED_RED_MUSHROOM', materials: { RED_MUSHROOM: 160 } },
    { output: 'ENCHANTED_RAW_FISH', materials: { RAW_FISH: 160 } },
    { output: 'ENCHANTED_RAW_SALMON', materials: { 'RAW_FISH:1': 160 } },
    { output: 'ENCHANTED_PUFFERFISH', materials: { 'RAW_FISH:3': 160 } },
];

// --- minion data (T11 stats) ---
const MINION_DATA = [
    { name: 'Snow', item: 'SNOW_BALL', secs: 6.5, per: 4 },
    { name: 'Clay', item: 'CLAY_BALL', secs: 16, per: 4 },
    { name: 'Slime', item: 'SLIME_BALL', secs: 13, per: 1 },
    { name: 'Magma Cube', item: 'MAGMA_CREAM', secs: 18, per: 1 },
    { name: 'Blaze', item: 'BLAZE_ROD', secs: 17, per: 1 },
    { name: 'Enderman', item: 'ENDER_PEARL', secs: 20, per: 1 },
    { name: 'Iron', item: 'IRON_INGOT', secs: 8, per: 1 },
    { name: 'Gold', item: 'GOLD_INGOT', secs: 10, per: 1 },
    { name: 'Diamond', item: 'DIAMOND', secs: 13, per: 1 },
    { name: 'Emerald', item: 'EMERALD', secs: 13, per: 1 },
    { name: 'Coal', item: 'COAL', secs: 7, per: 1 },
    { name: 'Redstone', item: 'REDSTONE', secs: 18, per: 4 },
    { name: 'Lapis', item: 'LAPIS_LAZULI', secs: 18, per: 4 },
    { name: 'Quartz', item: 'QUARTZ', secs: 11.5, per: 1 },
    { name: 'Obsidian', item: 'OBSIDIAN', secs: 24, per: 1 },
    { name: 'Glowstone', item: 'GLOWSTONE_DUST', secs: 12, per: 4 },
    { name: 'Gravel', item: 'GRAVEL', secs: 14, per: 1 },
    { name: 'Ice', item: 'ICE', secs: 7, per: 1 },
    { name: 'Sand', item: 'SAND', secs: 14, per: 1 },
    { name: 'Stone', item: 'COBBLESTONE', secs: 7, per: 1 },
    { name: 'Wheat', item: 'WHEAT', secs: 8, per: 1 },
    { name: 'Carrot', item: 'CARROT_ITEM', secs: 9, per: 1 },
    { name: 'Potato', item: 'POTATO_ITEM', secs: 9, per: 1 },
    { name: 'Pumpkin', item: 'PUMPKIN', secs: 14, per: 1 },
    { name: 'Melon', item: 'MELON', secs: 11, per: 1 },
    { name: 'Cactus', item: 'CACTUS', secs: 13, per: 1 },
    { name: 'Sugar Cane', item: 'SUGAR_CANE', secs: 10, per: 1 },
    { name: 'Nether Wart', item: 'NETHER_STALK', secs: 30, per: 3 },
    { name: 'Cow', item: 'RAW_BEEF', secs: 11, per: 1 },
    { name: 'Pig', item: 'PORK', secs: 11, per: 1 },
    { name: 'Chicken', item: 'RAW_CHICKEN', secs: 13, per: 1 },
    { name: 'Sheep', item: 'MUTTON', secs: 10, per: 1 },
    { name: 'Rabbit', item: 'RABBIT_HIDE', secs: 11, per: 1 },
    { name: 'Zombie', item: 'ROTTEN_FLESH', secs: 14, per: 1 },
    { name: 'Skeleton', item: 'BONE', secs: 14, per: 1 },
    { name: 'Spider', item: 'STRING', secs: 14, per: 1 },
    { name: 'Cave Spider', item: 'SPIDER_EYE', secs: 14, per: 1 },
    { name: 'Creeper', item: 'GUNPOWDER', secs: 15, per: 1 },
    { name: 'Mithril', item: 'MITHRIL_ORE', secs: 55, per: 1 },
];

// --- fuse recipes (gemstone upgrading, enchanted blocks, forge) ---
const FUSE_RECIPES = [
    // Gemstone fusing (80:1 ratio at Gemstone Grinder)
    { output: 'FINE_RUBY_GEM',        materials: { FLAWED_RUBY_GEM: 80 }, type: 'gem' },
    { output: 'FLAWLESS_RUBY_GEM',    materials: { FINE_RUBY_GEM: 80 }, type: 'gem' },
    { output: 'PERFECT_RUBY_GEM',     materials: { FLAWLESS_RUBY_GEM: 80 }, type: 'gem' },
    { output: 'FINE_AMETHYST_GEM',    materials: { FLAWED_AMETHYST_GEM: 80 }, type: 'gem' },
    { output: 'FLAWLESS_AMETHYST_GEM',materials: { FINE_AMETHYST_GEM: 80 }, type: 'gem' },
    { output: 'PERFECT_AMETHYST_GEM', materials: { FLAWLESS_AMETHYST_GEM: 80 }, type: 'gem' },
    { output: 'FINE_JADE_GEM',        materials: { FLAWED_JADE_GEM: 80 }, type: 'gem' },
    { output: 'FLAWLESS_JADE_GEM',    materials: { FINE_JADE_GEM: 80 }, type: 'gem' },
    { output: 'PERFECT_JADE_GEM',     materials: { FLAWLESS_JADE_GEM: 80 }, type: 'gem' },
    { output: 'FINE_SAPPHIRE_GEM',    materials: { FLAWED_SAPPHIRE_GEM: 80 }, type: 'gem' },
    { output: 'FLAWLESS_SAPPHIRE_GEM',materials: { FINE_SAPPHIRE_GEM: 80 }, type: 'gem' },
    { output: 'PERFECT_SAPPHIRE_GEM', materials: { FLAWLESS_SAPPHIRE_GEM: 80 }, type: 'gem' },
    { output: 'FINE_AMBER_GEM',       materials: { FLAWED_AMBER_GEM: 80 }, type: 'gem' },
    { output: 'FLAWLESS_AMBER_GEM',   materials: { FINE_AMBER_GEM: 80 }, type: 'gem' },
    { output: 'PERFECT_AMBER_GEM',    materials: { FLAWLESS_AMBER_GEM: 80 }, type: 'gem' },
    { output: 'FINE_TOPAZ_GEM',       materials: { FLAWED_TOPAZ_GEM: 80 }, type: 'gem' },
    { output: 'FLAWLESS_TOPAZ_GEM',   materials: { FINE_TOPAZ_GEM: 80 }, type: 'gem' },
    { output: 'PERFECT_TOPAZ_GEM',    materials: { FLAWLESS_TOPAZ_GEM: 80 }, type: 'gem' },
    { output: 'FINE_JASPER_GEM',      materials: { FLAWED_JASPER_GEM: 80 }, type: 'gem' },
    { output: 'FLAWLESS_JASPER_GEM',  materials: { FINE_JASPER_GEM: 80 }, type: 'gem' },
    { output: 'PERFECT_JASPER_GEM',   materials: { FLAWLESS_JASPER_GEM: 80 }, type: 'gem' },
    { output: 'FINE_OPAL_GEM',        materials: { FLAWED_OPAL_GEM: 80 }, type: 'gem' },
    { output: 'FLAWLESS_OPAL_GEM',    materials: { FINE_OPAL_GEM: 80 }, type: 'gem' },
    { output: 'PERFECT_OPAL_GEM',     materials: { FLAWLESS_OPAL_GEM: 80 }, type: 'gem' },
    { output: 'FINE_PERIDOT_GEM',     materials: { FLAWED_PERIDOT_GEM: 80 }, type: 'gem' },
    { output: 'FLAWLESS_PERIDOT_GEM', materials: { FINE_PERIDOT_GEM: 80 }, type: 'gem' },
    { output: 'PERFECT_PERIDOT_GEM',  materials: { FLAWLESS_PERIDOT_GEM: 80 }, type: 'gem' },
    { output: 'FINE_CITRINE_GEM',     materials: { FLAWED_CITRINE_GEM: 80 }, type: 'gem' },
    { output: 'FLAWLESS_CITRINE_GEM', materials: { FINE_CITRINE_GEM: 80 }, type: 'gem' },
    { output: 'PERFECT_CITRINE_GEM',  materials: { FLAWLESS_CITRINE_GEM: 80 }, type: 'gem' },
    { output: 'FINE_ONYX_GEM',        materials: { FLAWED_ONYX_GEM: 80 }, type: 'gem' },
    { output: 'FLAWLESS_ONYX_GEM',    materials: { FINE_ONYX_GEM: 80 }, type: 'gem' },
    { output: 'PERFECT_ONYX_GEM',     materials: { FLAWLESS_ONYX_GEM: 80 }, type: 'gem' },
    { output: 'FINE_AQUAMARINE_GEM',  materials: { FLAWED_AQUAMARINE_GEM: 80 }, type: 'gem' },
    { output: 'FLAWLESS_AQUAMARINE_GEM',materials: { FINE_AQUAMARINE_GEM: 80 }, type: 'gem' },
    { output: 'PERFECT_AQUAMARINE_GEM',materials: { FLAWLESS_AQUAMARINE_GEM: 80 }, type: 'gem' },
    // Enchanted blocks (160:1)
    { output: 'ENCHANTED_BONE_BLOCK',       materials: { ENCHANTED_BONE: 160 }, type: 'block' },
    { output: 'ENCHANTED_EMERALD_BLOCK',    materials: { ENCHANTED_EMERALD: 160 }, type: 'block' },
    { output: 'ENCHANTED_QUARTZ_BLOCK',     materials: { ENCHANTED_QUARTZ: 160 }, type: 'block' },
    { output: 'ENCHANTED_REDSTONE_BLOCK',   materials: { ENCHANTED_REDSTONE: 160 }, type: 'block' },
    { output: 'ENCHANTED_LAPIS_LAZULI_BLOCK', materials: { ENCHANTED_LAPIS_LAZULI: 160 }, type: 'block' },
    { output: 'ENCHANTED_DIAMOND_BLOCK',    materials: { ENCHANTED_DIAMOND: 160 }, type: 'block' },
    { output: 'ENCHANTED_GLOWSTONE',        materials: { ENCHANTED_GLOWSTONE_DUST: 160 }, type: 'block' },
    { output: 'ENCHANTED_COAL_BLOCK',       materials: { ENCHANTED_COAL: 160 }, type: 'block' },
    { output: 'ENCHANTED_IRON_BLOCK',       materials: { ENCHANTED_IRON: 160 }, type: 'block' },
    { output: 'ENCHANTED_GOLD_BLOCK',       materials: { ENCHANTED_GOLD: 160 }, type: 'block' },
    { output: 'ENCHANTED_SLIME_BLOCK',      materials: { ENCHANTED_SLIME_BALL: 160 }, type: 'block' },
    { output: 'ENCHANTED_SNOW_BLOCK',       materials: { SNOW_BALL: 640 }, type: 'block' },
    { output: 'ENCHANTED_PACKED_ICE',       materials: { ENCHANTED_ICE: 160 }, type: 'block' },
    // Forge recipes (forge time not included in profit calc)
    { output: 'REFINED_MITHRIL',   materials: { ENCHANTED_MITHRIL: 160 }, type: 'forge' },
    { output: 'REFINED_TITANIUM',  materials: { ENCHANTED_TITANIUM: 160 }, type: 'forge' },
];

// --- DOM refs ---
const bazaarBody = document.getElementById('bazaarBody');
const flipBody = document.getElementById('flipBody');
const volumeBody = document.getElementById('volumeBody');
const npcBody = document.getElementById('npcBody');
const craftBody = document.getElementById('craftBody');
const minionBody = document.getElementById('minionBody');
const guidesContainer = document.getElementById('guidesContainer');
const fuseBody = document.getElementById('fuseBody');
const searchInput = document.getElementById('searchInput');
const statusEl = document.getElementById('status');
const lastUpdatedEl = document.getElementById('lastUpdated');
const refreshBtn = document.getElementById('refreshBtn');
const itemCountEl = document.getElementById('itemCount');
const bazaarView = document.getElementById('bazaarView');
const methodsView = document.getElementById('methodsView');
const minionView = document.getElementById('minionView');
const guidesView = document.getElementById('guidesView');
const fuseView = document.getElementById('fuseView');
const auctionsView = document.getElementById('auctionsView');
const auctionsBody = document.getElementById('auctionsBody');
const trendsView = document.getElementById('trendsView');
const gainersBody = document.getElementById('gainersBody');
const losersBody = document.getElementById('losersBody');
const activeBody = document.getElementById('activeBody');
const trendSearchInput = document.getElementById('trendSearchInput');
const trendSearchResults = document.getElementById('trendSearchResults');
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
let lastApiCall = 0;
let apiCallsThisMinute = 0;
let apiWindowStart = Date.now();

async function throttledFetch(url) {
    // Enforce minimum 300ms gap between calls
    const now = Date.now();
    const gap = now - lastApiCall;
    if (gap < 300) {
        await new Promise(r => setTimeout(r, 300 - gap));
    }

    // Reset counter every 60s
    if (Date.now() - apiWindowStart > 60000) {
        apiWindowStart = Date.now();
        apiCallsThisMinute = 0;
    }

    // Warn if approaching limit (Hypixel key limit: ~120/min)
    apiCallsThisMinute++;
    if (apiCallsThisMinute > 30) {
        console.warn('API calls this minute:', apiCallsThisMinute, '/ ~120 limit');
    }
    if (apiCallsThisMinute > 100) {
        console.error('Rate limit warning — pausing 5s');
        await new Promise(r => setTimeout(r, 5000));
    }

    lastApiCall = Date.now();
    const res = await fetch(url, { headers: { 'API-Key': API_KEY } });
    return res;
}

async function fetchBazaar() {
    statusEl.textContent = 'loading';
    statusEl.className = 'status';

    try {
        const res = await throttledFetch('https://api.hypixel.net/v2/skyblock/bazaar');
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

async function fetchAuctionsPage(page) {
    try {
        const res = await throttledFetch(`https://api.hypixel.net/v2/skyblock/auctions?page=${page}`);
        if (!res.ok) return null;
        const data = await res.json();
        if (!data.success) return null;
        return data.auctions || [];
    } catch (e) {
        return null;
    }
}

async function fetchAuctions() {
    isScanning = true;
    statusEl.textContent = 'scanning';
    statusEl.className = 'status';

    // Fetch first page to get total pages, then fetch remaining concurrently
    const first = await fetchAuctionsPage(0);
    if (!first) {
        statusEl.textContent = 'error';
        statusEl.className = 'status err';
        return [];
    }

    // Fetch pages 1-4 sequentially with small gaps to avoid burst
    const remaining = [];
    for (const p of [1, 2, 3, 4]) {
        const batch = await fetchAuctionsPage(p);
        remaining.push(batch);
    }

    let all = [...first];
    for (const batch of remaining) {
        if (batch) all = all.concat(batch);
    }

    return all;
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
        bazaarBody.innerHTML = '<tr class="loading-row"><td colspan="7">loading…</td></tr>';
        itemCountEl.textContent = '0 items';
        return;
    }

    if (items.length === 0) {
        bazaarBody.innerHTML = '<tr class="loading-row"><td colspan="7">no items found</td></tr>';
        itemCountEl.textContent = '0 items';
        return;
    }

    // Separate favorites and filter by category
    let displayItems = items;
    if (currentBazaarCategory !== 'all' && currentBazaarCategory !== 'favorites') {
        displayItems = items.filter(i => getCategory(i.id) === currentBazaarCategory);
    }

    const favItems = currentBazaarCategory === 'favorites'
        ? displayItems.filter(i => favorites.has(i.id))
        : displayItems.filter(i => favorites.has(i.id));
    const restItems = currentBazaarCategory === 'favorites'
        ? []
        : displayItems.filter(i => !favorites.has(i.id));

    // Group rest by category if showing all
    const grouped = {};
    if (currentBazaarCategory === 'all') {
        for (const item of restItems) {
            const cat = getCategory(item.id);
            if (!grouped[cat]) grouped[cat] = [];
            grouped[cat].push(item);
        }
    }

    let renderedCount = 0;
    const catOrder = ['farming', 'mining', 'combat', 'foraging', 'fishing', 'oddities'];

    // Render favorites first
    if (favItems.length > 0) {
        const groupRow = document.createElement('tr');
        groupRow.className = 'cat-header';
        groupRow.innerHTML = `<td colspan="7">favorites (${favItems.length})</td>`;
        bazaarBody.appendChild(groupRow);
        for (const item of favItems) {
            bazaarBody.appendChild(createItemRow(item));
            renderedCount++;
        }
    }

    if (currentBazaarCategory === 'all') {
        // Render by category groups
        for (const cat of catOrder) {
            const catItems = grouped[cat];
            if (!catItems || catItems.length === 0) continue;
            const groupRow = document.createElement('tr');
            groupRow.className = 'cat-header';
            groupRow.innerHTML = `<td colspan="7">${cat} (${catItems.length})</td>`;
            bazaarBody.appendChild(groupRow);
            for (const item of catItems) {
                bazaarBody.appendChild(createItemRow(item));
                renderedCount++;
            }
        }
    } else if (currentBazaarCategory === 'favorites') {
        if (favItems.length === 0) {
            bazaarBody.innerHTML = '<tr class="loading-row"><td colspan="7">no favorites yet — click ★ to bookmark items</td></tr>';
        }
    } else {
        // Single category filter
        for (const item of restItems) {
            bazaarBody.appendChild(createItemRow(item));
            renderedCount++;
        }
    }

    // Update count
    if (currentBazaarCategory === 'favorites') {
        itemCountEl.textContent = favItems.length + ' items';
    } else {
        itemCountEl.textContent = (favItems.length + renderedCount) + ' items';
    }

}

function createItemRow(item) {
    const tr = document.createElement('tr');
    const spreadClass = item.spread >= 0 ? 'positive' : 'negative';
    const isFav = favorites.has(item.id);
    tr.dataset.id = item.id;
    tr.innerHTML = `
        <td class="fav-cell"><button class="fav-btn ${isFav ? 'favd' : ''}" data-id="${escapeHtml(item.id)}" title="${isFav ? 'remove from watchlist' : 'add to watchlist'}">${isFav ? '★' : '☆'}</button></td>
        <td>${escapeHtml(item.name)}<button class="alert-row-btn" title="set price alert">🔔</button></td>
        <td class="num">${fmtCoins(item.buyPrice)}</td>
        <td class="num">${fmtCoins(item.sellPrice)}</td>
        <td class="num ${spreadClass}">${fmtCoins(item.spread)}</td>
        <td class="num ${spreadClass}">${item.spreadPct.toFixed(1)}%</td>
        <td class="num">${fmtNum(item.totalVolume)}</td>
    `;
    // Star click handler
    tr.querySelector('.fav-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFavorite(item.id);
    });
    // Alert click handler
    tr.querySelector('.alert-row-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        addAlert(item.id, item.name);
    });
    return tr;
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

    // NPC flips: buy from NPC shop, instant-sell on bazaar
    const npcFlips = [];
    for (const item of items) {
        const npcPrice = NPC_PRICES[item.id];
        if (npcPrice == null) continue;
        // sell instantly to top buy orders, minus 1% bazaar tax
        const sellRevenue = item.buyPrice * 0.99;
        const profit = sellRevenue - npcPrice;
        if (profit <= 0) continue;
        npcFlips.push({
            ...item,
            npcPrice,
            profit,
            roi: (profit / npcPrice) * 100,
        });
    }
    npcFlips.sort((a, b) => b.roi - a.roi);

    npcBody.innerHTML = '';
    for (const item of npcFlips.slice(0, 15)) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${escapeHtml(item.name)}</td>
            <td class="num">${fmtCoins(item.npcPrice)}</td>
            <td class="num">${fmtCoins(item.buyPrice)}</td>
            <td class="num positive">${fmtCoins(item.profit)}</td>
            <td class="num positive">${item.roi.toFixed(1)}%</td>
        `;
        npcBody.appendChild(tr);
    }

    if (npcFlips.length === 0) {
        npcBody.innerHTML = '<tr class="loading-row"><td colspan="5">no profitable npc flips</td></tr>';
    }

    // Craft flips: buy materials from bazaar, craft, sell result
    const itemsById = {};
    for (const item of items) itemsById[item.id] = item;

    const craftFlips = [];
    for (const recipe of CRAFT_RECIPES) {
        const outputItem = itemsById[recipe.output];
        if (!outputItem) continue;

        let materialCost = 0;
        let missing = false;
        for (const [matId, qty] of Object.entries(recipe.materials)) {
            const matItem = itemsById[matId];
            if (!matItem || matItem.sellPrice <= 0) { missing = true; break; }
            materialCost += matItem.sellPrice * qty;
        }
        if (missing) continue;

        const revenue = outputItem.buyPrice * 0.99;
        const profit = revenue - materialCost;
        if (profit <= 0) continue;

        craftFlips.push({
            name: formatItemName(recipe.output),
            cost: materialCost,
            revenue,
            profit,
            roi: (profit / materialCost) * 100,
        });
    }
    craftFlips.sort((a, b) => b.profit - a.profit);

    craftBody.innerHTML = '';
    for (const flip of craftFlips.slice(0, 15)) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${escapeHtml(flip.name)}</td>
            <td class="num">${fmtCoins(flip.cost)}</td>
            <td class="num">${fmtCoins(flip.revenue)}</td>
            <td class="num positive">${fmtCoins(flip.profit)}</td>
            <td class="num positive">${flip.roi.toFixed(1)}%</td>
        `;
        craftBody.appendChild(tr);
    }

    if (craftFlips.length === 0) {
        craftBody.innerHTML = '<tr class="loading-row"><td colspan="5">no profitable craft flips</td></tr>';
    }
}

// --- guides ---
const GUIDES = [
    {
        id: 1,
        title: 'Getting Started with Bazaar Flipping',
        category: 'beginner',
        body: 'The bazaar is the best way to make money early on. Start by looking at the order flipping table on the methods tab — pick items with positive margin and decent volume. Place a buy order slightly above the current top buy order, wait for it to fill, then place a sell offer slightly below the top sell offer. The spread between these two prices is your profit. Always account for the 1% bazaar tax.',
    },
    {
        id: 2,
        title: 'NPC Flipping for Guaranteed Profit',
        category: 'beginner',
        body: 'Some items can be bought from NPC shops at a fixed price and instantly resold on the bazaar. Check the NPC flipping card on the methods tab — it shows which items are profitable right now. Popular NPC flips include ice (1 coin from Builder), gold ingots (4 coins from Mine Merchant), and rotten flesh (2 coins from Adventurer). These flips are risk-free since NPC prices never change.',
    },
    {
        id: 3,
        title: 'Craft Flipping Strategy',
        category: 'intermediate',
        body: 'Craft flipping involves buying raw materials on the bazaar, crafting them into enchanted items, and selling the enchanted version for profit. For example, buy 160 sugar cane, craft into 1 enchanted sugar cane, then sell it. The craft flipping card on the methods tab calculates profit after 1% tax. Focus on recipes where the enchanted item sells for significantly more than the total material cost.',
    },
    {
        id: 4,
        title: 'Setting Up Minions for Passive Income',
        category: 'beginner',
        body: 'Minions generate items passively while you\'re offline. Check the minions tab to see which minion gives the most coins per day at current bazaar prices. Snow and clay minions are popular choices for consistent income. Place down as many as you can, upgrade them to T11, and use enchanted hoppers or budget hoppers to auto-sell their output. Check back regularly to collect and reinvest.',
    },
    {
        id: 5,
        title: 'Advanced: Bulk Order Flipping',
        category: 'advanced',
        body: 'Once you have capital (50m+ coins), bulk order flipping becomes viable. Instead of flipping one item at a time, place large buy orders for high-volume items (check the volume trading card). Fill orders in bulk, then create sell offers in bulk. The profit per item is small but the volume makes up for it. Good candidates are enchanted materials with consistent demand like enchanted sugar cane, enchanted slime balls, and enchanted iron.',
    },
];

let currentGuideFilter = 'all';

function renderGuides() {
    const filtered = currentGuideFilter === 'all'
        ? GUIDES
        : GUIDES.filter(g => g.category === currentGuideFilter);

    guidesContainer.innerHTML = '';
    for (const guide of filtered) {
        const card = document.createElement('div');
        card.className = 'guide-card';
        card.innerHTML = `
            <span class="guide-category cat-${guide.category}">${guide.category}</span>
            <h3>${escapeHtml(guide.title)}</h3>
            <p>${escapeHtml(guide.body)}</p>
        `;
        guidesContainer.appendChild(card);
    }

    if (filtered.length === 0) {
        guidesContainer.innerHTML = '<div class="loading-row" style="grid-column:1/-1;padding:40px;text-align:center;color:var(--text-muted)">no guides in this category</div>';
    }
}

// --- fusing ---
function renderFusing(items) {
    const itemsById = {};
    for (const item of items) itemsById[item.id] = item;

    const results = [];
    for (const recipe of FUSE_RECIPES) {
        const outputItem = itemsById[recipe.output];
        if (!outputItem || outputItem.buyPrice <= 0) continue;

        let materialCost = 0;
        let missing = false;
        for (const [matId, qty] of Object.entries(recipe.materials)) {
            const matItem = itemsById[matId];
            if (!matItem || matItem.sellPrice <= 0) { missing = true; break; }
            materialCost += matItem.sellPrice * qty;
        }
        if (missing) continue;

        const revenue = outputItem.buyPrice * 0.99;
        const profit = revenue - materialCost;
        if (profit <= 0) continue;

        const typeLabel = { gem: 'gem', block: 'block', forge: 'forge' }[recipe.type] || recipe.type;
        results.push({
            name: formatItemName(recipe.output),
            type: typeLabel,
            cost: materialCost,
            revenue,
            profit,
            roi: (profit / materialCost) * 100,
        });
    }
    results.sort((a, b) => b.profit - a.profit);

    fuseBody.innerHTML = '';
    for (const r of results) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${escapeHtml(r.name)}</td>
            <td><span class="fuse-type type-${r.type}">${r.type}</span></td>
            <td class="num">${fmtCoins(r.cost)}</td>
            <td class="num">${fmtCoins(r.revenue)}</td>
            <td class="num positive">${fmtCoins(r.profit)}</td>
            <td class="num positive">${r.roi.toFixed(1)}%</td>
        `;
        fuseBody.appendChild(tr);
    }

    if (results.length === 0) {
        fuseBody.innerHTML = '<tr class="loading-row"><td colspan="6">no profitable fusing recipes</td></tr>';
    }
}

// --- minions ---
function renderMinions(items) {
    const itemsById = {};
    for (const item of items) itemsById[item.id] = item;

    const results = [];
    for (const minion of MINION_DATA) {
        const bzItem = itemsById[minion.item];
        if (!bzItem || bzItem.buyPrice <= 0) continue;

        const itemsPerDay = (86400 / minion.secs) * minion.per;
        const coinsPerDay = itemsPerDay * bzItem.buyPrice * 0.99;

        results.push({
            name: minion.name,
            item: formatItemName(minion.item),
            price: bzItem.buyPrice,
            perDay: itemsPerDay,
            coinsPerDay,
        });
    }
    results.sort((a, b) => b.coinsPerDay - a.coinsPerDay);

    minionBody.innerHTML = '';
    for (const r of results) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${escapeHtml(r.name)}</td>
            <td>${escapeHtml(r.item)}</td>
            <td class="num">${fmtCoins(r.price)}</td>
            <td class="num">${fmtNum(r.perDay)}</td>
            <td class="num positive">${fmtCoins(r.coinsPerDay)}</td>
        `;
        minionBody.appendChild(tr);
    }

    if (results.length === 0) {
        minionBody.innerHTML = '<tr class="loading-row"><td colspan="5">no minion data available</td></tr>';
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
        // renderBazaar handles the count internally now
    } else if (currentView === 'methods') {
        renderMethods(allItems);
        itemCountEl.textContent = allItems.length + ' items';
    } else if (currentView === 'minions') {
        renderMinions(allItems);
        itemCountEl.textContent = allItems.length + ' items';
    } else if (currentView === 'guides') {
        renderGuides();
        const shown = currentGuideFilter === 'all' ? GUIDES.length : GUIDES.filter(g => g.category === currentGuideFilter).length;
        itemCountEl.textContent = shown + ' guides';
    } else if (currentView === 'fuse') {
        renderFusing(allItems);
        itemCountEl.textContent = allItems.length + ' items';
    } else if (currentView === 'auctions') {
        itemCountEl.textContent = (auctionSnipes ? auctionSnipes.length : 0) + ' snipes';
    } else if (currentView === 'trends') {
        renderTrends(allItems);
        renderTrendSearch('');
        itemCountEl.textContent = allItems.length + ' items';
    }
}

// --- event handlers ---
searchInput.addEventListener('input', renderAll);

trendSearchInput.addEventListener('input', () => renderTrendSearch(trendSearchInput.value));
trendSearchInput.addEventListener('blur', () => setTimeout(() => {
    trendSearchResults.classList.remove('open');
}, 200));
trendSearchInput.addEventListener('focus', () => {
    if (trendSearchInput.value.trim()) renderTrendSearch(trendSearchInput.value);
});

refreshBtn.addEventListener('click', loadData);

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        currentView = tab.dataset.tab;
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        bazaarView.classList.toggle('active', currentView === 'bazaar');
        methodsView.classList.toggle('active', currentView === 'methods');
        minionView.classList.toggle('active', currentView === 'minions');
        guidesView.classList.toggle('active', currentView === 'guides');
        fuseView.classList.toggle('active', currentView === 'fuse');
        auctionsView.classList.toggle('active', currentView === 'auctions');
        trendsView.classList.toggle('active', currentView === 'trends');
        if (currentView === 'auctions') loadAuctions();
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

// --- guide filters ---
// --- guide filters ---
const guideFilterBtns = document.querySelectorAll('#guideFilters .filter-btn');
guideFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        currentGuideFilter = btn.dataset.filter;
        guideFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderGuides();
        const shown = currentGuideFilter === 'all' ? GUIDES.length : GUIDES.filter(g => g.category === currentGuideFilter).length;
        itemCountEl.textContent = shown + ' guides';
    });
});

// --- bazaar category filters ---
const bzFilterBtns = document.querySelectorAll('#bazaarFilters .filter-btn');
bzFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        currentBazaarCategory = btn.dataset.filter;
        bzFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderAll();
    });
});

// --- auctions ---
let auctionSnipes = [];
let auctionsLoaded = false;
let isScanning = false;

async function loadAuctions() {
    if (allItems.length === 0) {
        auctionsBody.innerHTML = '<tr class="loading-row"><td colspan="5">waiting for bazaar data&hellip;</td></tr>';
        return;
    }

    if (auctionsLoaded) {
        renderAuctionsTable();
        return;
    }

    auctionsBody.innerHTML = '<tr class="loading-row"><td colspan="5">scanning auction house&hellip;</td></tr>';

    const auctions = await fetchAuctions();

    // Build bazaar price lookup
    const bzById = {};
    for (const item of allItems) bzById[item.id] = item;

    const snipes = [];
    for (const auc of auctions) {
        if (!auc.bin) continue;

        let bzId = auc.item_name ? auc.item_name.toUpperCase().replace(/ /g, '_') : '';
        let bzItem = bzById[bzId];

        // Try explicit name mapping for common items
        if (!bzItem) {
            const nameToId = {
                'Enchanted Sugar Cane': 'ENCHANTED_SUGAR_CANE',
                'Enchanted Slimeball': 'ENCHANTED_SLIME_BALL',
                'Enchanted Slime Block': 'ENCHANTED_SLIME_BLOCK',
                'Enchanted Iron': 'ENCHANTED_IRON',
                'Enchanted Iron Block': 'ENCHANTED_IRON_BLOCK',
                'Enchanted Gold': 'ENCHANTED_GOLD',
                'Enchanted Gold Block': 'ENCHANTED_GOLD_BLOCK',
                'Enchanted Diamond': 'ENCHANTED_DIAMOND',
                'Enchanted Diamond Block': 'ENCHANTED_DIAMOND_BLOCK',
                'Enchanted Emerald': 'ENCHANTED_EMERALD',
                'Enchanted Emerald Block': 'ENCHANTED_EMERALD_BLOCK',
                'Enchanted Coal': 'ENCHANTED_COAL',
                'Enchanted Coal Block': 'ENCHANTED_COAL_BLOCK',
                'Enchanted Redstone': 'ENCHANTED_REDSTONE',
                'Enchanted Redstone Block': 'ENCHANTED_REDSTONE_BLOCK',
                'Enchanted Lapis Lazuli': 'ENCHANTED_LAPIS_LAZULI',
                'Enchanted Lapis Block': 'ENCHANTED_LAPIS_LAZULI_BLOCK',
                'Enchanted Bone': 'ENCHANTED_BONE',
                'Enchanted Bone Block': 'ENCHANTED_BONE_BLOCK',
                'Enchanted Obsidian': 'ENCHANTED_OBSIDIAN',
                'Enchanted Quartz': 'ENCHANTED_QUARTZ',
                'Enchanted Quartz Block': 'ENCHANTED_QUARTZ_BLOCK',
                'Enchanted Glowstone': 'ENCHANTED_GLOWSTONE',
                'Enchanted Glowstone Dust': 'ENCHANTED_GLOWSTONE_DUST',
                'Enchanted Flint': 'ENCHANTED_FLINT',
                'Enchanted String': 'ENCHANTED_STRING',
                'Enchanted Spider Eye': 'ENCHANTED_SPIDER_EYE',
                'Enchanted Rotten Flesh': 'ENCHANTED_ROTTEN_FLESH',
                'Enchanted Gunpowder': 'ENCHANTED_GUNPOWDER',
                'Enchanted Ender Pearl': 'ENCHANTED_ENDER_PEARL',
                'Enchanted Blaze Rod': 'ENCHANTED_BLAZE_ROD',
                'Enchanted Magma Cream': 'ENCHANTED_MAGMA_CREAM',
                'Enchanted Ice': 'ENCHANTED_ICE',
                'Enchanted Packed Ice': 'ENCHANTED_PACKED_ICE',
                'Enchanted Sand': 'ENCHANTED_SAND',
                'Enchanted Clay': 'ENCHANTED_CLAY_BALL',
                'Enchanted Cactus': 'ENCHANTED_CACTUS',
                'Enchanted Cactus Green': 'ENCHANTED_CACTUS_GREEN',
                'Enchanted Seeds': 'ENCHANTED_SEEDS',
                'Enchanted Potato': 'ENCHANTED_POTATO',
                'Enchanted Carrot': 'ENCHANTED_CARROT',
                'Enchanted Pumpkin': 'ENCHANTED_PUMPKIN',
                'Enchanted Melon': 'ENCHANTED_MELON',
                'Enchanted Nether Wart': 'ENCHANTED_NETHER_STALK',
                'Enchanted Mithril': 'ENCHANTED_MITHRIL',
                'Enchanted Raw Fish': 'ENCHANTED_RAW_FISH',
                'Enchanted Raw Salmon': 'ENCHANTED_RAW_SALMON',
                'Enchanted Pufferfish': 'ENCHANTED_PUFFERFISH',
                'Enchanted Rabbit Hide': 'ENCHANTED_RABBIT_HIDE',
                'Enchanted Rabbit Foot': 'ENCHANTED_RABBIT_FOOT',
                'Enchanted Leather': 'ENCHANTED_LEATHER',
                'Enchanted Feather': 'ENCHANTED_FEATHER',
                'Enchanted Raw Chicken': 'ENCHANTED_RAW_CHICKEN',
                'Enchanted Raw Beef': 'ENCHANTED_RAW_BEEF',
                'Enchanted Pork': 'ENCHANTED_PORK',
                'Enchanted Mutton': 'ENCHANTED_MUTTON',
                'Enchanted Hay Bale': 'ENCHANTED_HAY_BLOCK',
                'Enchanted Snow Block': 'ENCHANTED_SNOW_BLOCK',
                'Enchanted Brown Mushroom': 'ENCHANTED_BROWN_MUSHROOM',
                'Enchanted Red Mushroom': 'ENCHANTED_RED_MUSHROOM',
                'Refined Mithril': 'REFINED_MITHRIL',
                'Refined Titanium': 'REFINED_TITANIUM',
                'Booster Cookie': 'BOOSTER_COOKIE',
                'Super Enchanted Egg': 'SUPER_EGG',
                'Recombobulator 3000': 'RECOMBOBULATOR_3000',
                'Hot Potato Book': 'HOT_POTATO_BOOK',
                'Fuming Potato Book': 'FUMING_POTATO_BOOK',
                'God Potion': 'GOD_POTION_2',
                'Enchanted Titanium': 'ENCHANTED_TITANIUM',
                'Perfect Ruby': 'PERFECT_RUBY_GEM',
                'Perfect Jade': 'PERFECT_JADE_GEM',
                'Perfect Sapphire': 'PERFECT_SAPPHIRE_GEM',
                'Perfect Amber': 'PERFECT_AMBER_GEM',
                'Perfect Amethyst': 'PERFECT_AMETHYST_GEM',
                'Perfect Topaz': 'PERFECT_TOPAZ_GEM',
                'Perfect Jasper': 'PERFECT_JASPER_GEM',
                'Perfect Opal': 'PERFECT_OPAL_GEM',
                'Perfect Peridot': 'PERFECT_PERIDOT_GEM',
                'Perfect Citrine': 'PERFECT_CITRINE_GEM',
                'Perfect Onyx': 'PERFECT_ONYX_GEM',
                'Perfect Aquamarine': 'PERFECT_AQUAMARINE_GEM',
                'Flawless Ruby': 'FLAWLESS_RUBY_GEM',
                'Flawless Jade': 'FLAWLESS_JADE_GEM',
                'Flawless Sapphire': 'FLAWLESS_SAPPHIRE_GEM',
                'Flawless Amber': 'FLAWLESS_AMBER_GEM',
                'Flawless Amethyst': 'FLAWLESS_AMETHYST_GEM',
                'Flawless Topaz': 'FLAWLESS_TOPAZ_GEM',
                'Flawless Jasper': 'FLAWLESS_JASPER_GEM',
                'Flawless Opal': 'FLAWLESS_OPAL_GEM',
                'Flawless Peridot': 'FLAWLESS_PERIDOT_GEM',
                'Flawless Citrine': 'FLAWLESS_CITRINE_GEM',
                'Flawless Onyx': 'FLAWLESS_ONYX_GEM',
                'Flawless Aquamarine': 'FLAWLESS_AQUAMARINE_GEM',
            };
            bzId = nameToId[auc.item_name] || bzId;
            bzItem = bzById[bzId];
        }

        if (!bzItem || bzItem.buyPrice <= 0) continue;

        const binPrice = auc.starting_bid;
        const sellRevenue = bzItem.buyPrice * 0.99;
        const profit = sellRevenue - binPrice;

        if (profit <= 0) continue;

        snipes.push({
            name: auc.item_name || formatItemName(bzId),
            bin: binPrice,
            bzSell: bzItem.buyPrice,
            profit,
            roi: (profit / binPrice) * 100,
            tier: auc.tier || '',
        });
    }

    snipes.sort((a, b) => b.profit - a.profit);
    auctionSnipes = snipes;
    auctionsLoaded = true;

    renderAuctionsTable();

    isScanning = false;
    statusEl.textContent = 'live';
    statusEl.className = 'status live';
}

function renderAuctionsTable() {
    auctionsBody.innerHTML = '';
    itemCountEl.textContent = auctionSnipes.length + ' snipes';

    if (auctionSnipes.length === 0) {
        auctionsBody.innerHTML = '<tr class="loading-row"><td colspan="5">no profitable auctions found &mdash; try again later</td></tr>';
        return;
    }

    for (const s of auctionSnipes.slice(0, 50)) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${escapeHtml(s.name)}</td>
            <td class="num">${fmtCoinsFull(s.bin)}</td>
            <td class="num">${fmtCoinsFull(s.bzSell)}</td>
            <td class="num positive">${fmtCoinsFull(s.profit)}</td>
            <td class="num positive">${s.roi.toFixed(1)}%</td>
        `;
        auctionsBody.appendChild(tr);
    }
}

// --- trends ---
function renderTrends(items) {
    if (items.length === 0) {
        gainersBody.innerHTML = '<tr class="loading-row"><td colspan="4">loading&hellip;</td></tr>';
        losersBody.innerHTML = '';
        activeBody.innerHTML = '';
        return;
    }

    // Calculate price change for each item
    const scored = items.map(item => {
        const prev = prevSnapshot[item.id];
        const priceChange = prev && prev.buyPrice > 0 ? ((item.buyPrice - prev.buyPrice) / prev.buyPrice) * 100 : 0;
        const momentum = item.buyMovingWeek > 0 && item.sellMovingWeek > 0
            ? (item.buyMovingWeek - item.sellMovingWeek) / (item.buyMovingWeek + item.sellMovingWeek) * 100
            : 0;
        return { ...item, priceChange, momentum };
    });

    // Check if price tracking has data yet
    const hasTracking = Object.keys(prevSnapshot).length > 0;
    if (!hasTracking) {
        gainersBody.innerHTML = '<tr class="loading-row"><td colspan="4">waiting for next refresh (30s)&hellip;</td></tr>';
        losersBody.innerHTML = '';
        return;
    }

    // Top gainers (highest positive price change)
    const gainers = scored.filter(i => i.priceChange > 0).sort((a, b) => b.priceChange - a.priceChange).slice(0, 20);
    gainersBody.innerHTML = gainers.map(i =>
        `<tr>
            <td>${escapeHtml(i.name)}</td>
            <td class="num">${fmtCoins(i.buyPrice)}</td>
            <td class="num positive">▲ ${i.priceChange.toFixed(2)}%</td>
            <td class="num">${fmtNum(i.totalVolume)}</td>
        </tr>`
    ).join('') || '<tr class="loading-row"><td colspan="4">no gainers</td></tr>';

    // Top losers (most negative price change)
    const losers = scored.filter(i => i.priceChange < 0).sort((a, b) => a.priceChange - b.priceChange).slice(0, 20);
    losersBody.innerHTML = losers.map(i =>
        `<tr>
            <td>${escapeHtml(i.name)}</td>
            <td class="num">${fmtCoins(i.buyPrice)}</td>
            <td class="num negative">▼ ${Math.abs(i.priceChange).toFixed(2)}%</td>
            <td class="num">${fmtNum(i.totalVolume)}</td>
        </tr>`
    ).join('') || '<tr class="loading-row"><td colspan="4">no losers</td></tr>';

    // Most active (highest weekly volume)
    const active = scored.sort((a, b) => (b.buyMovingWeek + b.sellMovingWeek) - (a.buyMovingWeek + a.sellMovingWeek)).slice(0, 20);
    activeBody.innerHTML = active.map(i => {
        const momClass = i.momentum > 5 ? 'positive' : i.momentum < -5 ? 'negative' : '';
        return `<tr>
            <td>${escapeHtml(i.name)}</td>
            <td class="num">${fmtCoins(i.buyPrice)}</td>
            <td class="num">${fmtNum(i.buyMovingWeek + i.sellMovingWeek)}</td>
            <td class="num ${momClass}">${i.momentum > 0 ? '▲' : '▼'} ${Math.abs(i.momentum).toFixed(1)}%</td>
        </tr>`;
    }).join('');
}

// --- trend search ---
function renderTrendSearch(query) {
    const q = query.toLowerCase().trim();
    if (!q) {
        trendSearchResults.innerHTML = '';
        trendSearchResults.classList.remove('open');
        return;
    }
    const matches = allItems
        .filter(i => i.name.toLowerCase().includes(q))
        .slice(0, 15);
    if (matches.length === 0) {
        trendSearchResults.innerHTML = '<div class="trend-no-results">no items found</div>';
    } else {
        trendSearchResults.innerHTML = matches.map(i => {
            const prev = prevSnapshot[i.id];
            const change = prev && prev.buyPrice > 0 ? ((i.buyPrice - prev.buyPrice) / prev.buyPrice) * 100 : 0;
            const cls = change > 0 ? 'positive' : change < 0 ? 'negative' : '';
            const arrow = change > 0 ? '▲' : change < 0 ? '▼' : '—';
            return `<div class="trend-result-item" data-id="${escapeHtml(i.id)}">
                <span class="trend-result-name">${escapeHtml(i.name)}</span>
                <span class="trend-result-price">${fmtCoins(i.buyPrice)}</span>
                <span class="trend-result-change ${cls}">${arrow} ${Math.abs(change).toFixed(2)}%</span>
            </div>`;
        }).join('');
        // Click handler for result items — show detail card
        trendSearchResults.querySelectorAll('.trend-result-item').forEach(el => {
            el.addEventListener('click', () => {
                const id = el.dataset.id;
                const item = allItems.find(i => i.id === id);
                if (item) {
                    const prev = prevSnapshot[id];
                    const change = prev && prev.buyPrice > 0 ? ((item.buyPrice - prev.buyPrice) / prev.buyPrice) * 100 : 0;
                    const momentum = item.buyMovingWeek > 0 && item.sellMovingWeek > 0
                        ? (item.buyMovingWeek - item.sellMovingWeek) / (item.buyMovingWeek + item.sellMovingWeek) * 100
                        : 0;
                    const changeCls = change > 0 ? 'positive' : change < 0 ? 'negative' : '';
                    const arrow = change > 0 ? '▲' : change < 0 ? '▼' : '—';
                    const momCls = momentum > 5 ? 'positive' : momentum < -5 ? 'negative' : '';
                    document.getElementById('trendDetail').innerHTML =
                        `<div class="trend-detail-card">
                            <div class="trend-detail-header">
                                <span class="trend-detail-name">${escapeHtml(item.name)}</span>
                                <button class="trend-detail-close" onclick="document.getElementById('trendDetail').style.display='none'">×</button>
                            </div>
                            <div class="trend-detail-grid">
                                <div><span class="trend-detail-label">buy price</span><span class="trend-detail-value">${fmtCoins(item.buyPrice)}</span></div>
                                <div><span class="trend-detail-label">sell price</span><span class="trend-detail-value">${fmtCoins(item.sellPrice)}</span></div>
                                <div><span class="trend-detail-label">change</span><span class="trend-detail-value ${changeCls}">${arrow} ${Math.abs(change).toFixed(2)}%</span></div>
                                <div><span class="trend-detail-label">margin</span><span class="trend-detail-value ${item.spread >= 0 ? 'positive' : 'negative'}">${fmtCoins(item.spread)}</span></div>
                                <div><span class="trend-detail-label">volume</span><span class="trend-detail-value">${fmtNum(item.totalVolume)}</span></div>
                                <div><span class="trend-detail-label">momentum</span><span class="trend-detail-value ${momCls}">${momentum > 0 ? '▲' : '▼'} ${Math.abs(momentum).toFixed(1)}%</span></div>
                            </div>
                        </div>`;
                    document.getElementById('trendDetail').style.display = 'block';
                    trendSearchResults.classList.remove('open');
                }
            });
        });
    }
    trendSearchResults.classList.add('open');
}

// --- price alerts ---
let alerts = [];
try { alerts = JSON.parse(localStorage.getItem('bzAlerts') || '[]'); } catch(e) {}

function saveAlerts() {
    localStorage.setItem('bzAlerts', JSON.stringify(alerts));
}

function checkAlerts() {
    if (alerts.length === 0) return [];
    const triggered = [];
    const bzById = {};
    for (const item of allItems) bzById[item.id] = item;

    for (const alert of alerts) {
        const item = bzById[alert.id];
        if (!item) continue;
        const price = alert.direction === 'below' ? item.buyPrice : item.sellPrice;
        if (price <= alert.threshold) {
            triggered.push({ ...alert, currentPrice: price });
        }
    }
    return triggered;
}

function updateAlertBadge() {
    const badge = document.getElementById('alertBadge');
    if (!badge) return;
    const triggered = checkAlerts();
    badge.textContent = triggered.length || '';
    badge.className = 'alert-badge' + (triggered.length > 0 ? ' active' : '');
    badge.title = triggered.length > 0 ? triggered.map(t => t.name + ': ' + fmtCoins(t.currentPrice)).join('\n') : 'no alerts triggered';
}

function addAlert(id, name) {
    // Remove existing alert for this item if any
    alerts = alerts.filter(a => a.id !== id);

    const threshold = prompt('Set price alert for ' + name + '\nGet notified when price drops below:', '');
    if (!threshold || isNaN(parseFloat(threshold))) return;

    alerts.push({
        id,
        name,
        threshold: parseFloat(threshold),
        direction: 'below',
    });
    saveAlerts();
    updateAlertBadge();
    renderAll();
}

function removeAlert(id) {
    alerts = alerts.filter(a => a.id !== id);
    saveAlerts();
    updateAlertBadge();
    renderAll();
}

function renderAlertModal() {
    const panel = document.getElementById('alertPanel');
    const list = document.getElementById('alertList');
    if (!panel || !list) return;

    if (alerts.length === 0) {
        list.innerHTML = '<div class="alert-empty">no alerts set</div>';
    } else {
        const bzById = {};
        for (const item of allItems) bzById[item.id] = item;

        list.innerHTML = alerts.map(a => {
            const item = bzById[a.id];
            const current = item ? fmtCoins(item.buyPrice) : '—';
            const triggered = item && item.buyPrice <= a.threshold;
            return `
                <div class="alert-item ${triggered ? 'triggered' : ''}">
                    <span class="alert-name">${escapeHtml(a.name)}</span>
                    <span class="alert-detail">below ${fmtCoins(a.threshold)} · now ${current}</span>
                    <button class="alert-remove" data-id="${escapeHtml(a.id)}" title="remove">×</button>
                </div>
            `;
        }).join('');

        // Attach remove handlers
        list.querySelectorAll('.alert-remove').forEach(btn => {
            btn.addEventListener('click', () => removeAlert(btn.dataset.id));
        });
    }

    panel.classList.toggle('open');
}

// --- theme ---
const themeBtn = document.getElementById('themeBtn');
const themeDropdown = document.getElementById('themeDropdown');
const themeIcon = document.getElementById('themeIcon');
const themeLabel = document.getElementById('themeLabel');
const themeOptions = document.querySelectorAll('.theme-option');

const THEMES = ['dark', 'light', 'warm', 'skyblock'];
const THEME_ICONS = { dark: '◐', light: '○', warm: '◒', skyblock: '◆' };

function getTheme() {
    const stored = localStorage.getItem('theme');
    if (stored && THEMES.includes(stored)) return stored;
    return 'dark';
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    themeLabel.textContent = theme;
    themeIcon.textContent = THEME_ICONS[theme] || '◐';

    // update dropdown active states
    themeOptions.forEach(opt => {
        opt.classList.toggle('active', opt.dataset.theme === theme);
    });
}

themeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    themeDropdown.classList.toggle('open');
});

themeOptions.forEach(opt => {
    opt.addEventListener('click', (e) => {
        e.stopPropagation();
        setTheme(opt.dataset.theme);
        themeDropdown.classList.remove('open');
    });
});

document.addEventListener('click', () => {
    themeDropdown.classList.remove('open');
});

// init theme
setTheme(getTheme());

// --- main ---
let lastFetchTime = 0;
let nextRefreshTime = 0;
let autoRefreshTimer = null;
const AUTO_REFRESH_SECS = 30;

async function loadData() {
    const data = await fetchBazaar();
    if (!data) {
        // Retry sooner on failure
        if (autoRefreshTimer) clearTimeout(autoRefreshTimer);
        nextRefreshTime = Date.now() + 15000;
        updateCountdown();
        autoRefreshTimer = setTimeout(loadData, 15000);
        return;
    }

    // Save previous snapshot for price change tracking
    if (allItems.length > 0) {
        prevSnapshot = {};
        for (const item of allItems) {
            prevSnapshot[item.id] = { buyPrice: item.buyPrice, sellPrice: item.sellPrice };
        }
    }

    allItems = processBazaar(data);
    auctionsLoaded = false;
    auctionSnipes = [];
    lastFetchTime = Date.now();
    statusEl.textContent = 'live';
    statusEl.className = 'status ok';
    lastUpdatedEl.textContent = timeAgo(lastFetchTime);
    if (!timeUpdateInterval) startTimeUpdate();
    updateCategoryCounts();
    updateAlertBadge();
    renderAll();
    if (currentView === 'auctions') loadAuctions();
    resetAutoRefresh();
}

let timeUpdateInterval = null;

function startTimeUpdate() {
    if (timeUpdateInterval) clearInterval(timeUpdateInterval);
    timeUpdateInterval = setInterval(() => {
        if (lastFetchTime > 0) {
            lastUpdatedEl.textContent = timeAgo(lastFetchTime);
        }
        updateCountdown();
    }, 1000);
}

function resetAutoRefresh() {
    if (autoRefreshTimer) clearTimeout(autoRefreshTimer);
    nextRefreshTime = Date.now() + AUTO_REFRESH_SECS * 1000;
    updateCountdown();
    autoRefreshTimer = setTimeout(() => {
        // Don't refresh during active auction scanning
        if (isScanning) {
            resetAutoRefresh();
            return;
        }
        loadData();
    }, AUTO_REFRESH_SECS * 1000);
}

function updateCountdown() {
    const refCountEl = document.getElementById('refreshCountdown');
    if (!refCountEl) return;
    const remaining = Math.max(0, Math.ceil((nextRefreshTime - Date.now()) / 1000));
    if (remaining <= 0) {
        refCountEl.textContent = 'auto';
    } else {
        refCountEl.textContent = remaining + 's';
    }
}

// initial load + auto-refresh
loadData();

// initial sort indicator
ths.forEach(th => {
    if (th.dataset.sort === currentSort.field) {
        th.classList.add('sorted', currentSort.dir);
    }
});
