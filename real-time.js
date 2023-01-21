import { System , world} from "@minecraft/server";
world.events.tick.subscribe((eventData) => {
  var h, data = new Date();
  if (data.getHours() >= 6 && data.getHours() <= 23) h = data.getHours() - 6; else h = data.getHours() + 18;
  var rTick = Math.floor(h*1000 + data.getMinutes()*(50/3));
 world.getDimension('overworld').runCommandAsync(`time set ${rTick}`);
});
