
import { world } from "mojang-minecraft"
import { ActionFormData, ModalFormData } from "mojang-minecraft-ui"


world.events.beforeItemUse.subscribe((eventData) => {
    let item = eventData.item;
    let player = eventData.source;

    if (item.id == "ajay:adminmenu" && player.hasTag("admin")) {
    	Adminmenu(player);
    player.runCommand(`tellraw @s {"rawtext":[{"text":"§l§a➥ §r§aopen menu"}]}`)
    player.runCommand(`playsound note.hat @s`)
    player.runCommand(`scoreboard objectives add money dummy`)
    }});
   
    function Adminmenu(player) {
    const form = new ActionFormData()
       form.title("§lADMIN MENU")
        form.body("§l      --------------------      \n§e             ADMIN MENU       \n§r§l      --------------------      \n§r§e»» §r§fWelcome to the admin menu, please select the menu you want\n       §l§e       ADMIN MENU    ")
        form.button('§lClose\n§r§rClick To Close')
        form.button('§lAddons info\n§r§rClick Or Tap','textures/blocks/bookshelf')
        form.button('§lHub\n§r§rClick Or Tap','textures/ui/World')
        form.button('§lVanish\n§r§rClick Or Tap','textures/ui/multiplayer_glyph')
        form.button('§lUnVanish\n§r§rClick Or Tap','textures/ui/multiplayer_glyph_color')
        form.button('§lTime Set\n§r§rClick Or Tap','textures/ui/icon_summer')
        form.button('§lWeather\n§r§rClick Or Tap','textures/ui/cloud_only_storage')
        form.button('§lTeleport\n§r§rClick Or Tap','textures/ui/icon_recipe_nature')
        form.button('§lKick Player\n§r§rClick Or Tap','textures/ui/icon_deals')
        form.button('§lSudo\n§r§rClick Or Tap','textures/ui/controller_glyph_color')
        form.button('§lBroadcast\n§r§rClick Or Tap','textures/ui/icon_new')
        form.button('§lGamemode\n§r§rClick Or Tap','textures/ui/icon_book_writable')
        form.button('§lchat\n§r§rClick Or Tap','textures/ui/mute_off')
        form.button('§lEffect Menu\n§r§rClick Or Tap','textures/ui/icon_potion')
        form.button('§lAdmin Tools\n§r§rClick Or Tap','textures/ui/hammer_l')
        form.button('§lGive gift\n§r§rClick Or Tap','textures/ui/icon_cake')
        form.button('§lPrank\n§r§rClick Or Tap','textures/ui/icon_spring')
        form.button('§lClear Inventory\n§r§rClick Or Tap','textures/ui/trash')
          form.show(player).then(result => {
      if (result.selection === 0) {
        player.runCommand(`playsound note.bass @s`)
       }
      if (result.selection === 1) {
      	Info(player);
      }
      if (result.selection === 2) {
        player.runCommand(`tp @s 0 100 0`) //ganti cordinat dengan cordinat lobby kalia 
        player.runCommand(`playsound mob.endermen.portal @s`)
        player.runCommand(`tellraw @s {"rawtext":[{"text":"§l§a➥ §r§aKamu Telah Teleport Ke lobby"}]}`);
      }
      if (result.selection === 3) {
        player.runCommand(`effect @s invisibility 99999 9 true`)
        player.runCommand(`effect @s night_vision 9999999 9 true`)
        player.runCommand(`tellraw @s {"rawtext":[{"text":"§l§a➥ §r§anow you are invisible to other players, don't hold anything"}]}`)
        player.runCommand(`playsound note.harp @s`);
      }
      if (result.selection === 4) {
        player.runCommand(`effect @s clear`)
        player.runCommand(`tellraw @s {"rawtext":[{"text":"§l§c➥ §r§cvanish is turned off, now you can be seen by other players"}]}`)
        player.runCommand(`playsound note.bass @s`);
      }
      if (result.selection === 5) {
      	Timeset(player);
      }
      if (result.selection === 6) {
      	Weather(player);
      }
      if (result.selection === 7) {
      	Teleport(player);
      }
      if (result.selection === 8) {
      	Kick(player);
      }
      if (result.selection === 9) {
      	Sudo(player);
      }
      if (result.selection === 10) {
      	Bc(player);
      }
      if (result.selection === 11) {
      	Gamemode(player);
      }
      if (result.selection === 12) {
      	Chat(player);
      }
      if (result.selection === 13) {
      	Effect(player);
      }
      if (result.selection === 14) {
      	Admin(player);
      }
      if (result.selection === 15) {
      	Gift(player);
      }
      if (result.selection === 16) {
      	Troll(player);
      }
      if (result.selection === 17) {
      	Cinv(player);
      }
})}
      
      
  function Timeset(player) {
  const form = new ActionFormData()
    form.title("§lTIME SET")
    form.body("§l      --------------------      \n§e             ADMIN MENU       \n§r§l      --------------------      \n§r§e»» §r§fWelcome to the admin menu, please select the menu you want\n       §l§e       ADMIN MENU    ")
    form.button("§lDay\n§rClick to change time", "textures/ui/time_2day")
    form.button("§lNight\n§rClick to change time", "textures/ui/time_6midnight")
    form.button("§cBack\n§rclick to Back", "textures/blocks/barrier")
   form.show(player).then(result => {
   	if (result.selection === 0) {
       player.runCommand(`time set day`)
       player.runCommand(`playsound random.pop @s`)
       player.runCommand(`tellraw @s {"rawtext":[{"text":"§l§a➥ §r§atime has been changed to day"}]}`);
      }  
      else if (result.selection === 1) {
       player.runCommand(`time set night`)
       player.runCommand(`playsound random.pop @s`)
       player.runCommand(`tellraw @s {"rawtext":[{"text":"§l§a➥ §r§atime has been changed to night"}]}`);
      }  
      else if (result.selection === 2) {
       Adminmenu(player);
      }  
})}


  function Weather(player) {
  const form = new ActionFormData()
    form.title("§lWeather")
    form.body("§l      --------------------      \n§e             ADMIN MENU       \n§r§l      --------------------      \n§r§e»» §r§fWelcome to the admin menu, please select the menu you want\n       §l§e       ADMIN MENU    ")
    form.button("§lClear\n§rClick to change time", "textures/ui/weather_clear")
    form.button("§lRain\n§rClick to change time", "textures/ui/weather_rain")
    form.button("§lThunderstorm\n§rClick to change time", "textures/ui/weather_thunderstorm")
    form.button("§cBack\n§rclick to Back", "textures/blocks/barrier")
   form.show(player).then(result => {
   	if (result.selection === 0) {
       player.runCommand(`weather clear`)
       player.runCommand(`playsound random.pop @s`)
       player.runCommand(`tellraw @s {"rawtext":[{"text":"§l§a➥ §r§athe weather has been changed to clear"}]}`);
      }  
      else if (result.selection === 1) {
       player.runCommand(`weather rain`)
       player.runCommand(`playsound random.pop @s`)
       player.runCommand(`tellraw @s {"rawtext":[{"text":"§l§a➥ §r§athe weather has been changed to rain"}]}`);
      }  
      else if (result.selection === 2) {
       player.runCommand(`weather thunder `)
       player.runCommand(`playsound random.pop @s`)
       player.runCommand(`tellraw @s {"rawtext":[{"text":"§l§a➥ §r§athe weather has been changed to Hujan Thunderstorm"}]}`);
      }  
      else if (result.selection === 3) {
       Adminmenu(player);
      }  
})}


  function Teleport(player) {
  const form = new ActionFormData()
    form.title("§lTELEPORT")
    form.body("§l      --------------------      \n§e             ADMIN MENU       \n§r§l      --------------------      \n§r§e»» §r§fWelcome to the admin menu, please select the menu you want\n       §l§e       ADMIN MENU    ")
    form.button("§lTeleport Random Players\n§rclick to teleport", "textures/ui/icon_steve")
    form.button("§lTPR\n§rclick to teleport", "textures/ui/icon_recipe_nature")
    form.button("§cBack\n§rclick to Back", "textures/blocks/barrier")
   form.show(player).then(result => {
      if (result.selection === 0) {
        player.runCommand(`tp @s @r`)
        player.runCommand(`playsound mob.endermen.portal @s`)
        player.runCommand(`tellraw @s {"rawtext":[{"text":"§l§a➥ §r§aYou have been teleported to another player"}]}`);
      }  
      else if (result.selection === 1) {
       player.runCommand(`spreadplayers ~ ~ 1000 5000 @s`)
       player.runCommand(`playsound mob.endermen.portal @s`)
       player.runCommand(`tellraw @s {"rawtext":[{"text":"§l§a➥ §r§aYou have been teleported to a random cordinate"}]}`);
      }  
      else if (result.selection === 2) {
    	Adminmenu(player);
     }
})}


  function Gamemode(player) {
  const form = new ActionFormData()
    form.title("§lTGAMEMODE")
    form.body("§l      --------------------      \n§e             ADMIN MENU       \n§r§l      --------------------      \n§r§e»» §r§fWelcome to the admin menu, please select the menu you want\n       §l§e       ADMIN MENU    ")
    form.button("§lSurvival\n§r§rClick Or Tap", "textures/items/book_written")
    form.button("§lCreative\n§r§rClick Or Tap", "textures/items/book_enchanted")
    form.button("§lSpectator\n§r§rClick Or Tap", "textures/items/book_portfolio")
    form.button("§lAdventure\n§r§rClick Or Tap", "textures/items/book_writable")
    form.button("§cBack\n§rclick to Back", "textures/blocks/barrier")
   form.show(player).then(result => {
      if (result.selection === 0) {
        player.runCommand(`gamemode s @s`)
        player.runCommand(`playsound random.toast @s`)
        player.runCommand(`tellraw @s {"rawtext":[{"text":"§l§a➥ §r§aGamemode has been changed to Survival"}]}`);
      }  
      else if (result.selection === 1) {
       player.runCommand(`gamemode c @s`)
       player.runCommand(`playsound random.toast @s`)
       player.runCommand(`tellraw @s {"rawtext":[{"text":"§l§a➥ §r§a Gamemode has been changed to Creative"}]}`);
      }  
      else if (result.selection === 2) {
       player.runCommand(`gamemode spectator @s`)
       player.runCommand(`playsound random.toast @s`)
       player.runCommand(`tellraw @s {"rawtext":[{"text":"§l§a➥ §r§aGamemode has been changed to Spectator"}]}`);
      }  
      else if (result.selection === 3) {
       player.runCommand(`gamemode adventure @s`)
       player.runCommand(`playsound random.toast @s`)
       player.runCommand(`tellraw @s {"rawtext":[{"text":"§l§a➥ §r§aGamemode has been changed to Adventure"}]}`);
      }  
      else if (result.selection === 4) {
       Adminmenu(player);
      }  
})}


function Chat(player) {
  const form = new ActionFormData()
    form.title("§lCHAT")
    form.body("§l      --------------------      \n§e             ADMIN MENU       \n§r§l      --------------------      \n§r§e»» §r§fWelcome to the admin menu, please select the menu you want\n       §l§e       ADMIN MENU    ")
    form.button("§lTurn off chat\n§r§rClick Or Tap", "textures/ui/mute_on")
    form.button("§lTurn on chat\n§r§rClick Or Tap", "textures/ui/mute_off")
    form.button("§cBack\n§rclick to Back", "textures/blocks/barrier")
   form.show(player).then(result => {
      if (result.selection === 0) {
   	player.runCommand(`ability @a[tag=!admin] mute true`)
       player.runCommand(`playsound note.bass @s`)
       player.runCommand(`tellraw @a {"rawtext":[{"text":"§l§a➥ §r§achat has been turned off"}]}`);
      }  
      else if (result.selection === 0) {
   	player.runCommand(`ability @a[tag=!admin] mute false`)
       player.runCommand(`playsound random.toast @s`)
       player.runCommand(`tellraw @a {"rawtext":[{"text":"§l§a➥ §r§achat has been turned on"}]}`);
      }  
      else if (result.selection === 0) {
   	Adminmenu(player);
      }  
})}


function Effect(player) {
  const form = new ActionFormData()
    form.title("§lEFFECT MENU")
    form.body("§l      --------------------      \n§e             ADMIN MENU       \n§r§l      --------------------      \n§r§e»» §r§fWelcome to the admin menu, please select the menu you want\n       §l§e       ADMIN MENU    ")
    form.button("§lClear Effect\n§rClick Or Tap")
    form.button("§lInvisibility\n§rClick Or Tap", "textures/ui/invisibility_effect")
    form.button("§lStrength\n§rClick Or Tap", "textures/ui/strength_effect")
    form.button("§lSpeed\n§rClick Or Tap", "textures/ui/speed_effect")
    form.button("§lHaste\n§rClick Or Tap", "textures/ui/haste_effect")
    form.button("§lJump Boost\n§rClick Or Tap", "textures/ui/jump_boost_effect")
    form.button("§lResistance\n§rClick Or Tap", "textures/ui/resistance_effect")
    form.button("§lFire Resistance\n§rClick Or Tap", "textures/ui/fire_resistance_effect")
    form.button("§lHealth boost\n§rClick Or Tap", "textures/ui/health_boost_effect")
    form.button("§cBack\n§rclick to Back", "textures/blocks/barrier")
   form.show(player).then(result => {
   	if (result.selection === 0) {
        player.runCommand(`effect @s clear`)
       player.runCommand(`playsound random.toast @s`)
      }  
     else  if (result.selection === 1) {
        player.runCommand(`effect @s invisibility 999999 9 true`)
       player.runCommand(`playsound random.toast @s`)
      }  
      else if (result.selection === 2) {
        player.runCommand(`effect @s strength 999999 10 true`)
       player.runCommand(`playsound random.toast @s`)
      }  
      else if (result.selection === 3) {
        player.runCommand(`effect @s speed 999999 5 true`)
       player.runCommand(`playsound random.toast @s`)
      }  
      if (result.selection === 4) {
        player.runCommand(`effect @s haste 999999 5 true`)
       player.runCommand(`playsound random.toast @s`)
      }  
      if (result.selection === 5) {
        player.runCommand(`effect @s jump_boost 999999 5 true`)
       player.runCommand(`playsound random.toast @s`)
      }  
      if (result.selection === 6) {
        player.runCommand(`effect @s resistance 999999 10 true`)
       player.runCommand(`playsound random.toast @s`)
      }  
      if (result.selection === 7) {
        player.runCommand(`effect @s fire_resistance 999999 9 true`)
       player.runCommand(`playsound random.toast @s`)
      }  
      if (result.selection === 8) {
        player.runCommand(`effect @s health_boost 999999 10 true`)
       player.runCommand(`playsound random.toast @s`)
      }  
      if (result.selection === 9) {
        Adminmenu(player);
      }  
})}


function Admin(player) {
  const form = new ActionFormData()
    form.title("§lADMIN TOOLS")
    form.body("§l      --------------------      \n§e             ADMIN MENU       \n§r§l      --------------------      \n§r§e»» §r§fWelcome to the admin menu, please select the menu you want\n       §l§e       ADMIN MENU    ")
    form.button("§lCOMMAND BLOCK\n§r§rClick Or Tap", "textures/blocks/command_block_back_mipmap")
    form.button("§lSTRUCTURE BLOCK\n§r§rClick Or Tap", "textures/blocks/structure_block")
    form.button("§lBARRIER\n§r§rClick Or Tap", "textures/blocks/barrier")
    form.button("§lSTRUCTURE VOID\n§r§rClick Or Tap", "textures/blocks/structure_void")
    form.button("§lSUMMON NPC\n§r§rClick Or Tap", "textures/items/egg_npc")
    form.button("§cBack\n§r§rclick to Back", "textures/blocks/barrier")
   form.show(player).then(result => {
      if (result.selection === 0) {
        player.runCommand(`give @s command_block`)
        player.runCommand(`playsound note.pling @s`)
        player.runCommand(`tellraw @s {"rawtext":[{"text":"§l§a➥ §r§ayou have been given a command block"}]}`);
      }  
      else if (result.selection === 1) {
       player.runCommand(`give @s structure_block`)
       player.runCommand(`playsound note.pling @s`)
       player.runCommand(`tellraw @s {"rawtext":[{"text":"§l§a➥ §r§ayou have been given a structure block"}]}`);
      }  
      else if (result.selection === 2) {
       player.runCommand(`give @s barrier`)
       player.runCommand(`playsound note.pling @s`)
       player.runCommand(`tellraw @s {"rawtext":[{"text":"§l§a➥ §r§ayou have been given a barrier"}]}`);
      }  
      else if (result.selection === 3) {
       player.runCommand(`give @s structure_void`)
       player.runCommand(`playsound note.pling @s`)
       player.runCommand(`tellraw @s {"rawtext":[{"text":"§l§a➥ §r§ayou have been given a structure void"}]}`);
      }  
      else if (result.selection === 4) {
       player.runCommand(`execute @s ~~~ summon npc ~~~`)
       player.runCommand(`playsound note.pling @s`)
       player.runCommand(`tellraw @s {"rawtext":[{"text":"§l§a➥ §r§anpc has been summoned"}]}`);
      }  
      else if (result.selection === 5) {
       Adminmenu(player);
      }  
})}


function Troll(player) {
  const form = new ActionFormData()
    form.title("§lPRANK")
    form.body("§l      --------------------      \n§e             ADMIN MENU       \n§r§l      --------------------      \n§r§e»» §r§fWelcome to the admin menu, please select the menu you want\n       §l§e       ADMIN MENU    ")
    form.button("§lSUMMON TNT\n§r§rClick Or Tap", "textures/blocks/tnt_side")
    form.button("§lSUMMON CREEPER\n§r§rClick Or Tap", "textures/ui/promo_creeper")
    form.button("§lLAGU TURU\n§r§rClick Or Tap", "textures/blocks/jukebox_side")
    form.button("§cBack\n§r§rclick to Back", "textures/blocks/barrier")
   form.show(player).then(result => {
      if (result.selection === 0) {
        player.runCommand(`execute @a ~~~ summon tnt`)
        player.runCommand(`playsound tnt.explode @a`)
        player.runCommand(`tellraw @a {"rawtext":[{"text":"§l§c➥ §r§chaha explode"}]}`);
      }  
      else if (result.selection === 1) {
       player.runCommand(`execute @a ~~~ summon creeper ~~~`)
       player.runCommand(`playsound mob.ghast.scream @a`)
       player.runCommand(`tellraw @a {"rawtext":[{"text":"§l§c➥ §r§chaha creeper"}]}`);
      }  
      else if (result.selection === 2) {
       player.runCommand(`playsound turu @a`)
       player.runCommand(`tellraw @a {"rawtext":[{"text":"§l§a➥ §r§a Janji gak tu-"}]}`);
      }  
      else if (result.selection === 3) {
       Adminmenu(player);
      }
})}


function New(player) {
  const form = new ActionFormData()
    form.title("§lWaht's New")
    form.body("§l      --------------------      \n§e                UPDATE       \n§r§l      --------------------      \n§l§e»» §r§fUpdate Versi 2.2 Sudah Suport versi 1.19 \nAda beberapa fitur yang di tambahkan :\n\n§l§e»»§r§f Pengubah Cuaca\n§l§e»»§r§f Effect Menu\n§l§e»»§r§f Chat Seting\n§l§e»»§r§f Menambahkan pilihan Prank\n§l§e»»§r§f Menambahkan beberapa hadiah\n§l§e»»§r§f dll\n\n§l§e»»§r§f Itu  Adalah fitur Yang di tambahkan di update kali ini ! \n\n      §l§e        ADMIN MENU    ")
    form.button("§cBack\n§rclick to Back", "textures/blocks/barrier")
   form.show(player).then(result => {
      if (result.selection === 0) {
   	Adminmenu(player);
      }  
})}


function Cinv(player) {
  const form = new ActionFormData()
    form.title("§lInventory")
    form.body("§l§e»»§r§f Your inventory will be cleared, are you sure you want to clear your inventory?")
    form.button("§lAgree")
    form.button("§ldon't agree")
   form.show(player).then(result => {
      if (result.selection === 0) {
   	player.runCommand(`clear @s`)
       player.runCommand(`playsound random.toast @s`)
       player.runCommand(`tellraw @s {"rawtext":[{"text":"§l§a➥ §r§aYour aInventory has been cleared"}]}`);
      }  
      else if (result.selection === 1) {
   	Adminmenu(player);
      }  
})}


function Gift(player) {
  const form = new ActionFormData()
    form.title("§lGIFT")
    form.body("§l      --------------------      \n§e             ADMIN MENU       \n§r§l      --------------------      \n§r§e»» §r§fWelcome to the admin menu, please select the menu you want\n       §l§e       ADMIN MENU    ")
    form.button("§l§cBack\n§r§rClick To Back")
    form.button("§lDiamond\n§rClick Or Tap","textures/items/diamond")
    form.button("§lIron\n§r§rClick Or Tap", "textures/items/iron_ingot")
    form.button("§lXp 1 bar\n§r§rClick Or Tap", "textures/items/experience_bottle")
    form.button("§lMoney 500\n§r§rClick Or Tap", "textures/ui/MCoin")
   form.show(player).then(result => {
      if (result.selection === 0) {
   	Adminmenu(player);
      }  
      else if (result.selection === 1) {
   	player.runCommand(`give @a diamond 1`)
       player.runCommand(`playsound random.levelup @a`)
       player.runCommand(`tellraw @a {"rawtext":[{"text":"§l§a➥ §r§ayou get a gift"}]}`);
      }  
      else if (result.selection === 2) {
   	player.runCommand(`give @a iron_ingot 5`)
       player.runCommand(`playsound random.levelup @a`)
       player.runCommand(`tellraw @a {"rawtext":[{"text":"§l§a➥ §r§ayou get a gift"}]}`);
      }  
      else if (result.selection === 3) {
   	player.runCommand(`xp 1l @a`)
       player.runCommand(`playsound random.levelup @a`)
       player.runCommand(`tellraw @a {"rawtext":[{"text":"§l§a➥ §r§ayou get a gift"}]}`);
      }  
      else if (result.selection === 4) {
   	player.runCommand(`scoreboard players add @a money 500`)
       player.runCommand(`playsound random.levelup @a`)
       player.runCommand(`tellraw @a {"rawtext":[{"text":"§l§a➥ §r§ayou get a gift"}]}`);
      }  
})}


function Info(player) {
  const form = new ActionFormData()
    form.title("§lADDON iNFO")
    form.body("§l      --------------------      \n§e             ADMIN MENU       \n§r§l      --------------------      \n§r§e»» §r§fWelcome to the admin menu, please select the menu you want\n       §l§e       ADMIN MENU    ")
    form.button("§cBack\n§r§rclick to Back")
    form.button("§lWhats New ?\n§r§rClick Or Tap", "textures/blocks/bookshelf")
    form.button("§lAddons Maker\n§r§rClick Or Tap", "textures/ui/ajay")
   form.show(player).then(result => {
      if (result.selection === 0) {
        Adminmenu(player);
      }  
      else if (result.selection === 1) {
       New(player);
      }  
      else if (result.selection === 2) {
       player.runCommand(`playsound random.toast@a`)
       player.runCommand(`tellraw @s {"rawtext":[{"text":"§l§a➥§r§a Made By AjayMC"}]}`);
      }  
})}


  function Sudo(player) {
  const modal = new ModalFormData()
    .title("§lSUDO")
    .textField("§l      --------------------      \n§e             SUDO PLAYER      \n§r§l      --------------------      \n§r§e»» §r§fprank others with fake messages\n       §l§e       SUDO PLAYER   \n§r§fPlayer Name", "Enter player name")
    .textField("message", "Enter message")
        modal.show(player).then(result => {
            if (result.formValues[1] !== "") {
                player.runCommand(`tellraw @a {"rawtext":[{"text":"<${result.formValues[0]}§r§f> ${result.formValues[1]}"}]}`)
           }
})}
          
 
   function Bc(player) {
  const modal = new ModalFormData()
    .title("§lBROADCAST")
    .textField("§l      --------------------      \n§e             BROADCAST       \n§r§l      --------------------      \n§r§e»» §r§fbroadcast to everyone\n       §l§e       BROAD CAST    \n§r§fBc message", "Enter message")
        modal.show(player).then(result => {
            if (result.formValues[0] !== "") {
                player.runCommand(`tellraw @a {"rawtext":[{"text":"§l§eBROADCAST §r:§e ${result.formValues[0]}"}]}`)
                player.runCommand(`playsound random.toast @s`)
           }
})}
       

function Kick(player) {
  const modal = new ModalFormData()
    .title("§lKICK")
    .textField("§l      --------------------      \n§e             KICK PLAYER       \n§r§l      --------------------      \n§r§e»» §r§fget rid of annoying people\n\n§r§e»» §r§fIt only works in realm and server, and you can't kick yourself\n\n       §l§e       KICK PLAYER    \n§r§fName", "Enter Name")
    .textField("reason", "Enter Reason")
        modal.show(player).then(result => {
            if (result.formValues[0] !== "") {
                player.runCommand(`kick ${result.formValues[0]} ${result.formValues[1]}`)
                player.runCommand(`playsound random.levelup @s`)
           }
})}
           