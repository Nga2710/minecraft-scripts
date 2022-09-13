import * as mc from 'mojang-minecraft';
mc.world.events.beforeItemUse.subscribe(data => {
  if (data.item.id == "minecraft:compass") {
    var lc = Number(`${Math.floor(data.source.location.y)}`);
    let oreList = [
      "minecraft:iron_ore",
      "minecraft:gold_ore",
      "minecraft:copper_ore",
      "minecraft:deepslate_iron_ore",
      "minecraft:deepslate_gold_ore",
      "minecraft:copper_iron_ore"
    ];
    if (data.source.location.y < -64) {
      data.source.runCommand(`tellraw @s {"rawtext":[{"text":"§4Ore can't be found at y ${data.source.location.y}"}]}`);
      return;
    }
    if (lc > 319) lc = 319;
    while (lc > -64) {
      for (var idblock of oreList) {
        if (oreList.includes(`${data.source.dimension.getBlock(new mc.BlockLocation(Math.floor(data.source.location.x), Math.floor(lc), Math.floor(data.source.location.z))).id}`)) data.source.runCommand(`tellraw @s {"rawtext":[{"text":"§aFound ${idblock} at y ${lc}"}]}`);
      }
      lc -= 1;
    }
  }
});
