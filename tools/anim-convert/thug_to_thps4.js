module.exports = {
    // Run with `node .\AnimConvert_thug2.js thug1 thps4 -map .\thug_to_thps4.js`
    // src (thug) -> dst (thps4)
    bone_mapping: {
        0: 0,
        1: 1,
        2: 2,
        4: 3,
        // 3 // (Bone_Stomach_Upper)
        5: 9,
        6: 10,
        7: 11,
        8: 13,
        9: 17,
        10: 18,
        11: 15,
        12: 16,
        13: 14,
        // 14: 12, // palm is connected directly to forearm in thug
        14: 19,
        16: 20,
        17: 21,
        18: 22,
        19: 23,
        20: 25,
        21: 27,
        22: 28,
        23: 29,
        24: 30,
        25: 26,
        // 26: 24, // palm is connected directly to forearm in thug
        26: 31,
        28: 32,
        29: 4,
        30: 5,
        31: 7,
        // 32 // Cloth_Hat
        // 33 // Bone_Brow
        // 34 // Bone_PonyTail_1
        // 35 // Bone_PonyTail_2
        36: 8,
        // 37 // Cloth_Shirt_L,
        38: 40, // Cloth_Shirt_C,
        // 39 // Cloth_Shirt_R,
        40: 34,
        41: 35,
        42: 36,
        43: 37,
        44: 38, // no right_top_trouser_cloth_zz (39) equivalent?
        45: 41,
        46: 43,
        47: 46, // no left_top_trouser_cloth_zz (42) equivalent?
        48: 44,
        49: 45,
        50: 47,
        51: 48, // Bone_Board_Nose
        // 52: 48, // Bone_Trucks_Nose
        53: 49, // Bone_Board_Tail
        // 53: 49, // Bone_Trucks_Tail
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
    quaternion_mods: {
        // 0: [0.707107, -0.000000, 0.000000, 0.707107],
        // 11: [0.002230, 0.000000, -0.000000, 0.999997],
        // 12: [0, 0.707, 0, 0.707],
        // 10: [0, 0.707, 0, 0.707],
        // 11: [0, 0.707, 0, 0.707],
        // 11: [0.002230, 0.000000, -0.000000, 0.999997],
        // 13: [-0.002040, -0.000612, 0.001363, 0.999997],
        20: [0.000000, 0.707107, -0.000001, 0.707107],
    },

    // Absolute vectors to translate certain bones by.
    // For DESTINATION SKELETON.
    // This is taken into account AFTER the bones get mapped.
    translation_mods: {
        // 3: [0, 0.087847, 3.786],
        4: [0, 0, 5],
        5: [0, 0, -1],

        20: [1, 1, -4],
        32: [-1, 1, -4],

        // 23: [-0.000007, -0.000001, -12.175523],
        // 24: [-0.055446, -0.709045, -8.418987],
    }
}
