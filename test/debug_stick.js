import * as mc from 'mojang-minecraft';
import * as ui from 'mojang-minecraft-ui';
const ejemplo = {
  "boolean": "toggle",
  "string": "dropdown",
  "number": "textField"
};


mc.world.events.beforeItemUseOn.subscribe((e)=> {
  let block = e.source.dimension.getBlock(e.blockLocation);
  if (block.id == "minecraft:air" || (e.source.id != "minecraft:player") || (!e.item)) return;
  if (e.item.id != "item:debug_stick") return;
  e.item.setLore([`Used on ${block.id}`]);
  e.source["space"] = [block,
    true];
});


mc.world.events.tick.subscribe((t)=> {
  for (let p of mc.world.getPlayers()) {
    if (p.space) {
      if (p.space[1]) {
        p.space[1] = false;
        let modal = new ui.ModalFormData().title(`${p.space[0].id}`).toggle("Waterlogged", p.space[0].isWaterlogged);
        if (p.space[0].id.startsWith("minecraft")) {
          p.space[0].permutation.getAllProperties().filter(function(b) {
            modal[ejemplo[typeof b.value]](...setModal(b))
          });
        };
        modal.show(p).then((response)=> {
          modifyBlock(p.space[0], response.formValues);
        })}};
  }
});
function setModal(property) {
  let options = {
    "string": {
      type: "dropdown",
      value: [property.name,
        property.validValues,
        property.validValues.indexOf(property.value)]
    },
    "number": {
      type: "textField",
      value: [`${property.name}: ${property.validValues}`,
        `${property.value}`,
        `${property.value}`]
    },
    "boolean": {
      type: "toggle",
      value: [property.name,
        property.value]}
  };
  let res = options[`${typeof property.value}`];
  return res.value;
};
function setValue(property, formValue) {
  let options = {
    "string": {
      type: "dropdown",
      value: property.validValues[formValue]
    },
    "number": {
      type: "textField",
      value: parseInt(formValue)
    },
    "boolean": {
      type: "toggle",
      value: formValue
    }
  };
  return options[typeof property.value].value;
}

function modifyBlock(bloque, values) {
  bloque.isWaterlogged = values[0];
  if (!bloque.id.startsWith("minecraft")) return;
  let nuevo = bloque.type.createDefaultBlockPermutation();
  for (let x = 0; x < values.length; x++) {
    if (x == 0) continue;
    let prop = nuevo.getAllProperties()[x-1];
    prop.value = (typeof(prop.value) == "string") ? prop.validValues[values[x]]: ((typeof(prop.value) == "number") ? parseInt(values[x]): values[x]);
  }
  bloque.setPermutation(nuevo);
  return 0;
}
