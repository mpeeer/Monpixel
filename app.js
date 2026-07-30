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
let currentSort = { field: 'spreadPct', dir: 'desc' };
let currentView = 'bazaar';
let currentBazaarCategory = 'all';
let newsItems = [];
let newsLastFetched = 0;

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

// --- DOM refs ---
const bazaarBody = document.getElementById('bazaarBody');
const searchInput = document.getElementById('searchInput');
const statusEl = document.getElementById('status');
const lastUpdatedEl = document.getElementById('lastUpdated');
const refreshBtn = document.getElementById('refreshBtn');
const itemCountEl = document.getElementById('itemCount');
const bazaarView = document.getElementById('bazaarView');
const newsView = document.getElementById('newsView');
const newsContainer = document.getElementById('newsContainer');
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

async function fetchNews() {
    // Use cache if fresh (< 30 min)
    try {
        const cached = localStorage.getItem('bz_news');
        const cachedTs = localStorage.getItem('bz_news_ts');
        if (cached && cachedTs && (Date.now() - parseInt(cachedTs) < 1800000)) {
            newsItems = JSON.parse(cached);
            newsLastFetched = parseInt(cachedTs);
            if (currentView === 'news') renderNews();
            return;
        }
    } catch(e) {}

    try {
        const res = await throttledFetch('https://api.hypixel.net/v2/skyblock/news');
        if (!res.ok) return;
        const data = await res.json();
        if (!data.success || !data.items) return;
        newsItems = data.items;
            newsLastFetched = Date.now();
        try {
            localStorage.setItem('bz_news', JSON.stringify(data.items));
            localStorage.setItem('bz_news_ts', Date.now().toString());
        } catch(e) {}
    } catch (e) {
        console.warn('News fetch failed:', e);
        // Try cache regardless of age on failure
        try {
            const cached = localStorage.getItem('bz_news');
            if (cached) newsItems = JSON.parse(cached);
        } catch(e2) {}
    }
    if (currentView === 'news') renderNews();
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
        <td>${escapeHtml(item.name)}</td>
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
    return tr;
}

// --- news ---
function renderNews() {
    newsContainer.innerHTML = '';

    if (newsItems.length === 0) {
        newsContainer.innerHTML = '<div class="loading-row" style="grid-column:1/-1;padding:40px;text-align:center;color:var(--text-muted)">loading news…</div>';
        return;
    }

    for (const item of newsItems) {
        const card = document.createElement('a');
        card.className = 'news-card';
        card.href = item.link;
        card.target = '_blank';
        card.rel = 'noopener';
        card.innerHTML = `
            <div class="news-card-header">
                <span class="news-icon" title="${escapeHtml(item.item?.material || '')}">📰</span>
                <h3>${escapeHtml(item.title)}</h3>
            </div>
            <span class="news-date">${escapeHtml(item.text)}</span>
            <span class="news-link-hint">read on forums →</span>
        `;
        newsContainer.appendChild(card);
    }

    itemCountEl.textContent = newsItems.length + ' updates';

    // Freshness timestamp
    const intro = document.querySelector('#newsView .section-intro');
    if (intro) {
        let ts = intro.querySelector('.news-freshness');
        if (!ts) {
            ts = document.createElement('span');
            ts.className = 'news-freshness';
            intro.appendChild(ts);
        }
        ts.textContent = newsLastFetched > 0 ? ' · updated ' + timeAgo(newsLastFetched) : '';
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
    } else if (currentView === 'news') {
        renderNews();
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
        newsView.classList.toggle('active', currentView === 'news');
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

    allItems = processBazaar(data);
    lastFetchTime = Date.now();
    statusEl.textContent = 'live';
    statusEl.className = 'status ok';
    lastUpdatedEl.textContent = timeAgo(lastFetchTime);
    if (!timeUpdateInterval) startTimeUpdate();
    updateCategoryCounts();
    renderAll();
    fetchNews();
    resetAutoRefresh();
}

let timeUpdateInterval = null;

function startTimeUpdate() {
    if (timeUpdateInterval) clearInterval(timeUpdateInterval);
    timeUpdateInterval = setInterval(() => {
        if (lastFetchTime > 0) {
            lastUpdatedEl.textContent = timeAgo(lastFetchTime);
        }
        // also update news freshness if visible
        const nf = document.querySelector('.news-freshness');
        if (nf && newsLastFetched > 0) {
            nf.textContent = ' · updated ' + timeAgo(newsLastFetched);
        }
        updateCountdown();
    }, 1000);
}

function resetAutoRefresh() {
    if (autoRefreshTimer) clearTimeout(autoRefreshTimer);
    nextRefreshTime = Date.now() + AUTO_REFRESH_SECS * 1000;
    updateCountdown();
    autoRefreshTimer = setTimeout(() => {
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

// --- view counter ---
(function initViewCounter() {
    const vcCount = document.getElementById('vcCount');
    if (!vcCount) return;

    const NAMESPACE = 'monopixel';
    const KEY = 'views';
    const CACHE_KEY = 'vc_monopixel_views';

    async function updateCounter() {
        const alreadyCounted = sessionStorage.getItem('vc_counted');

        if (!alreadyCounted) {
            // First visit this session — hit (increment) the counter
            try {
                const hitRes = await fetch(`https://api.countapi.xyz/hit/${NAMESPACE}/${KEY}`);
                if (hitRes.ok) {
                    const data = await hitRes.json();
                    const count = data.value;
                    vcCount.textContent = typeof count === 'number' ? count.toLocaleString() : count;
                    sessionStorage.setItem('vc_counted', '1');
                    try { localStorage.setItem(CACHE_KEY, JSON.stringify({ count, ts: Date.now() })); } catch (e) {}
                    return;
                }
            } catch (e) {
                // Network error — fall through to get
            }
        }

        // Already counted this session (or hit failed) — just fetch existing count
        try {
            const getRes = await fetch(`https://api.countapi.xyz/get/${NAMESPACE}/${KEY}`);
            if (getRes.ok) {
                const data = await getRes.json();
                const count = data.value;
                vcCount.textContent = typeof count === 'number' ? count.toLocaleString() : count;
                return;
            }
        } catch (e) {}

        // Last resort: show cached value
        try {
            const cached = JSON.parse(localStorage.getItem(CACHE_KEY));
            if (cached && cached.count != null) {
                vcCount.textContent = typeof cached.count === 'number' ? cached.count.toLocaleString() : cached.count;
                return;
            }
        } catch (e) {}

        vcCount.textContent = '—';
    }

    // Show cached value immediately while fetch happens
    try {
        const cached = JSON.parse(localStorage.getItem(CACHE_KEY));
        if (cached && cached.count != null) {
            vcCount.textContent = typeof cached.count === 'number' ? cached.count.toLocaleString() : cached.count;
        }
    } catch (e) {}

    updateCounter();
})();

// initial load + auto-refresh
loadData();
fetchNews();

// initial sort indicator
ths.forEach(th => {
    if (th.dataset.sort === currentSort.field) {
        th.classList.add('sorted', currentSort.dir);
    }
});
