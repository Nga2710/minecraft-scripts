import * as mc from 'mojang-minecraft';
mc.world.events.beforeItemUseOn.subscribe(data => {
  let hoeList = [
    "minecraft:wooden_hoe",
    "minecraft:stone_hoe",
    "minecraft:iron_hoe",
    "minecraft:golden_hoe",
    "minecraft:diamond_hoe",
    "minecraft:netherite_hoe"
  ];
  let lc = data.blockLocation;
  if (hoeList.includes(`${data.item.id}`) && data.source.dimension.getBlock(lc).id == "minecraft:grass" && Math.floor(Math.random()*2) == 0)
    data.source.dimension.spawnItem(new mc.ItemStack(mc.MinecraftItemTypes.wheatSeeds, 1, 0), new mc.BlockLocation(lc.x, lc.y + 1, lc.z));
});