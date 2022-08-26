import * as mc from 'mojang-minecraft';
mc.world.events.beforeItemUseOn.subscribe(data => {
  try {
    let dim = data.source.dimension, lc = data.blockLocation,
    iic = dim.getBlock(lc).getComponent("inventory").container.getItem(0), key = "minecraft:tripwire_hook";
    if (iic.id == key && data.item.id == key && iic.nameTag == data.item.nameTag) {} else {
      data.source.runCommand(`playsound random.chestclosed @a ${lc.x} ${lc.y} ${lc.z}`); data.cancel = true;
    }
  }
  catch {}
});
