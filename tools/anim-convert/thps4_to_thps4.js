module.exports = {
    // Run with `node .\AnimConvert_thug2.js thug1 thps4 -map .\thug_to_thps4.js`
    // src (thug) -> dst (thps4)
    bone_mapping: {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        10: 10,
        11: 11,
        12: 12,
        13: 13,
        14: 14,
        15: 15,
        16: 16,
        17: 17,
        18: 18,
        19: 19,
        20: 20,
        21: 21,
        22: 22,
        23: 23,
        24: 24,
        25: 25,
        26: 26,
        27: 27,
        28: 28,
        29: 29,
        30: 30,
        31: 31,
        32: 32,
        33: 33,
        34: 34,
        35: 35,
        36: 36,
        37: 37,
        38: 38,
        39: 39,
        40: 40,
        41: 41,
        42: 42,
        43: 43,
        44: 44,
        45: 45,
        46: 46,
        47: 47,
        48: 48,
        49: 49,
    },

    // Bones on the DESTINATION SKELETON to skip translations for.
    // This is taken into account AFTER the bones get mapped.
    translation_exclude: [
        // 12, // left_wrist
        // 24, // right_wrist
        // 33, // hood_cloth_zz
        // 39, // right_top_trouser_cloth_zz
        // 42, // left_top_trouser_cloth_zz
    ],

    // Absolute angles to rotate certain bones by.
    // For DESTINATION SKELETON.
    // This is taken into account AFTER the bones get mapped.
    quaternion_mods: {},

    // Absolute vectors to translate certain bones by.
    // For DESTINATION SKELETON.
    // This is taken into account AFTER the bones get mapped.
    translation_mods: {}
}
