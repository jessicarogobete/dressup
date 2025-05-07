export const ClothingTypes = ["hair", "tops", "bottoms", "shoes", "socks", "layers"];

export enum CLOTHING_TYPES {
    HAIR,
    TOP,
    LAYER,
    BOTTOM,
    SOCK,
    SHOES,
    NONE
}

export const ClothingTypesMap = new Map<string, CLOTHING_TYPES>([
    ["hair", CLOTHING_TYPES.HAIR],
    ["tops", CLOTHING_TYPES.TOP],
    ["layers", CLOTHING_TYPES.LAYER],
    ["bottoms", CLOTHING_TYPES.BOTTOM],
    ["socks", CLOTHING_TYPES.SOCK],
    ["shoes", CLOTHING_TYPES.SHOES]
]);