import { world } from 'mojang-minecraft'
import { ModalFormData } from 'mojang-minecraft-ui'

const dimension = world.getDimension("overworld")

function getScore(player, objective) {
    try {
       return parseInt(world.getDimension('overworld').runCommand(`scoreboard players test "${player}" "${objective}" * *`)?.statusMessage?.match(/-?\d+/));
    } catch (e) {
       return 0;
    }
 };

world.events.beforeItemUse.subscribe(eventData => {
    if (eventData.item.id == "minecraft:compass") {
        var playerObjects = []
        var operations = []

        var players = world.getPlayers()
        
        for (let playerr of players) {
            operations.push(playerr.name)
            playerObjects.push(playerr)
        }
        
        var player = eventData.source
        var modal = new ModalFormData()
        .title("Bank - Chuyển tiền")
        .dropdown("Chọn người chơi để chuyển tiền",operations,0)
        .slider("Nhập số tiền muốn chuyển",0,100000,1000,100)
        
        modal.show(player).then(reponse => {
            var target = operations[reponse.formValues[0]]
            
            var playerscore = getScore(player.name, "money")

            if ( Number(playerscore) < Number(reponse.formValues[1]) ) {
                player.runCommand(`say Bạn không đủ ${reponse.formValues[1]} tiền để gửi cho ${target}`)
            } else {
                player.runCommand(`say Bạn Đã Chuyển Cho ${target} ${reponse.formValues[1]} tiền`)
                player.runCommand(`scoreboard players remove @s money ${reponse.formValues[1]}`)
                player.runCommand(`scoreboard players add "${target}" money ${reponse.formValues[1]}`)
            }
        })        
    }
})
