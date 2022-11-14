import * as mc from 'mojang-minecraft';
mc.world.events.beforeItemUseOn.subscribe(data => {
  let dim = data.source.dimension, lc = data.blockLocation;
  if (dim.getBlock(lc).id == "minecraft:netherreactor") {
    if (dim.getBlock(new mc.BlockLocation(lc.x, lc.y - 1, lc.z)).id == "minecraft:cobblestone" && dim.getBlock(new mc.BlockLocation(lc.x, lc.y + 1, lc.z)).id == "minecraft:cobblestone" && dim.getBlock(new mc.BlockLocation(lc.x + 1, lc.y - 1, lc.z)).id == "minecraft:cobblestone" && dim.getBlock(new mc.BlockLocation(lc.x - 1, lc.y - 1, lc.z)).id == "minecraft:cobblestone" && dim.getBlock(new mc.BlockLocation(lc.x, lc.y - 1, lc.z + 1)).id == "minecraft:cobblestone" && dim.getBlock(new mc.BlockLocation(lc.x, lc.y - 1, lc.z - 1)).id == "minecraft:cobblestone" && dim.getBlock(new mc.BlockLocation(lc.x, lc.y + 1, lc.z)).id == "minecraft:cobblestone" && dim.getBlock(new mc.BlockLocation(lc.x + 1, lc.y + 1, lc.z)).id == "minecraft:cobblestone" && dim.getBlock(new mc.BlockLocation(lc.x - 1, lc.y + 1, lc.z)).id == "minecraft:cobblestone" && dim.getBlock(new mc.BlockLocation(lc.x, lc.y + 1, lc.z + 1)).id == "minecraft:cobblestone" && dim.getBlock(new mc.BlockLocation(lc.x, lc.y + 1, lc.z - 1)).id == "minecraft:cobblestone" && dim.getBlock(new mc.BlockLocation(lc.x, lc.y - 1, lc.z)).id == "minecraft:cobblestone" && dim.getBlock(new mc.BlockLocation(lc.x - 1, lc.y - 1, lc.z - 1)).id == "minecraft:gold_block" && dim.getBlock(new mc.BlockLocation(lc.x + 1, lc.y - 1, lc.z + 1)).id == "minecraft:gold_block" && dim.getBlock(new mc.BlockLocation(lc.x - 1, lc.y - 1, lc.z + 1)).id == "minecraft:gold_block" && dim.getBlock(new mc.BlockLocation(lc.x + 1, lc.y - 1, lc.z - 1)).id == "minecraft:gold_block" && dim.getBlock(new mc.BlockLocation(lc.x + 1, lc.y, lc.z + 1)).id == "minecraft:cobblestone" && dim.getBlock(new mc.BlockLocation(lc.x - 1, lc.y, lc.z - 1)).id == "minecraft:cobblestone" && dim.getBlock(new mc.BlockLocation(lc.x + 1, lc.y, lc.z - 1)).id == "minecraft:cobblestone" && dim.getBlock(new mc.BlockLocation(lc.x - 1, lc.y, lc.z + 1)).id == "minecraft:cobblestone" && dim.getBlock(new mc.BlockLocation(lc.x + 1, lc.y + 1, lc.z + 1)).id == "minecraft:air" && dim.getBlock(new mc.BlockLocation(lc.x - 1, lc.y + 1, lc.z - 1)).id == "minecraft:air" && dim.getBlock(new mc.BlockLocation(lc.x + 1, lc.y + 1, lc.z - 1)).id == "minecraft:air" && dim.getBlock(new mc.BlockLocation(lc.x - 1, lc.y + 1, lc.z + 1)).id == "minecraft:air" && dim.getBlock(new mc.BlockLocation(lc.x - 1, lc.y, lc.z)).id == "minecraft:air" && dim.getBlock(new mc.BlockLocation(lc.x + 1, lc.y, lc.z)).id == "minecraft:air" && dim.getBlock(new mc.BlockLocation(lc.x, lc.y, lc.z - 1)).id == "minecraft:air" && dim.getBlock(new mc.BlockLocation(lc.x, lc.y, lc.z + 1)).id == "minecraft:air") {
      data.source.runCommand('tellraw @a {"rawtext":[{"text":"[netherreactor hiện lên và nói] đã xong"}]}'); data.cancel = true
    } else
      data.source.runCommand('tellraw @a {"rawtext":[{"text":"[netherreactor hiện lên và nói] éo ổn"}]}');

  };
});