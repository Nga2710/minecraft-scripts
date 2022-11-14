import { world, BlockRaycastOptions, BlockProperties, EntityRaycastOptions } from 'mojang-minecraft'

function getPropertiesAsString(properties) {
    let str = ''
    for (const property of properties) {
        str += `\n${property.name}: ${property.value}`
    }

    return str
}

function getBlockTranslateKey(block) {
    let extraBit // the extra . at the end of the id (for keys like leaves2.acacia)

    switch (block.id) {
        case 'minecraft:brown_mushroom_block':
            extraBit = 'cap'
            break

        case 'minecraft:stained_glass':
        case 'minecraft:stained_glass_pane':
            extraBit = block.permutation.getProperty(BlockProperties.color).value
            break

        case 'minecraft:cobblestone_wall':
            let wallBlockType = block.permutation.getProperty(BlockProperties.wallBlockType).value

            if (wallBlockType == 'cobblestone') {
                extraBit = 'normal'
            }
            else if (wallBlockType == 'mossy_cobblestone') {
                extraBit = 'mossy'
            }
            else {
                extraBit = wallBlockType
            }

            break

        case 'minecraft:purpur_block':
            extraBit = block.permutation.getProperty(BlockProperties.chiselType).value
            break

        case 'minecraft:crimson_roots':
            extraBit = 'crimsonRoots'
            break

        case 'minecraft:warped_roots':
            extraBit = 'warpedRoots'
            break

        case 'minecraft:leaves2':
            let newLeafType = block.permutation.getProperty(BlockProperties.newLeafType).value
            extraBit = (newLeafType == 'dark_oak') ? 'big_oak' : newLeafType
            break

        case 'minecraft:leaves':
            extraBit = block.permutation.getProperty(BlockProperties.oldLeafType).value
            break

        case 'minecraft:log2':
            let newLogType = block.permutation.getProperty(BlockProperties.newLogType).value
            extraBit = (newLogType == 'dark_oak') ? 'big_oak' : newLogType
            break

        case 'minecraft:log':
            extraBit = block.permutation.getProperty(BlockProperties.oldLogType).value
            break

        case 'minecraft:prismarine':
            let prismarineType = block.permutation.getProperty(BlockProperties.prismarineBlockType).value
            extraBit = (prismarineType == 'default') ? 'rough' : prismarineType
            break

        case 'minecraft:sapling':
            let saplingType = block.permutation.getProperty(BlockProperties.saplingType).value
            extraBit = (saplingType == 'dark_oak') ? 'big_oak' : saplingType
            break

        case 'minecraft:sponge':
            extraBit = block.permutation.getProperty(BlockProperties.spongeType).value
            break

        case 'minecraft:stone':
            let stoneType = block.permutation.getProperty(BlockProperties.stoneType).value
            if (stoneType.includes('_')) {
                extraBit = 'stone'
            }
            else {
                extraBit = stoneType
            }

            break

        case 'minecraft:coral_block':
        case 'minecraft:coral':
        case 'minecraft:coral_fan':
        case 'minecraft:coral_fan_dead':
            extraBit = block.permutation.getProperty(BlockProperties.coralColor).value
            break

        case 'minecraft:seagrass':
            extraBit = 'seagrass'
            break

        case 'minecraft:concrete':
        case 'minecraft:concrete_powder':
            let concreteColor = block.permutation.getProperty(BlockProperties.color).value
            if (concreteColor.includes('_')) {
                extraBit = 'white'
            }
            else {
                extraBit = concreteColor
            }

            break

        case 'minecraft:wood':
            extraBit = block.permutation.getProperty(BlockProperties.woodType).value
            break
    }

    let blockId

    switch (block.id) {
        case 'minecraft:concrete_powder':
            blockId = 'concretePowder'
            break

        case 'minecraft:log2':
            blockId = 'log'
            break

        case 'minecraft:carrots':
            blockId = 'carrot'
            break

        case 'minecraft:lit_redstone_ore':
            blockId = 'redstone_ore'
            break

        case 'minecraft:lit_deepslate_redstone_ore':
            blockId = 'deepslate_redstone_ore'
            break

        case 'minecraft:lit_blast_furnace':
            blockId = 'blast_furnace'
            break

        case 'minecraft:lit_furnace':
            blockId = 'furnace'
            break

        case 'minecraft:lit_smoker':
            blockId = 'smoker'
            break

        case 'minecraft:undyed_shulker_box':
        case 'minecraft:shulker_box':
            blockId = 'shulkerBox'
            break

        default:
            let splitId = block.id.split(':')

            if (block.id.includes('glazed_terracotta')) {
                blockId = `glazedTerracotta.${block.id.slice(10, -18)}`
            }
            else if (splitId[0] == 'minecraft') {
                blockId = splitId[1]
            }
            else {
                blockId = block.id
            }
    }

    return `tile.${blockId}.${(extraBit) ? `${extraBit}.name` : 'name'}`
}

function getEntityTellraw(entity) {
    if (entity.id == 'minecraft:player') {
        return `{ "text": "${entity.name}" }`
    }

    let splitEntityId = entity.id.split(':')
    return `{ "translate": "entity.${(splitEntityId[0] == 'minecraft') ? splitEntityId[1] : entity.id}.name" }`
}

world.events.tick.subscribe(() => {
    for (const player of world.getPlayers()) {
        let blockRayOptions = new BlockRaycastOptions()
        blockRayOptions.maxDistance = 8
        blockRayOptions.includeLiquidBlocks = false
        blockRayOptions.includePassableBlocks = true
        let block = player.getBlockFromViewVector(blockRayOptions)

        let entityRayOptions = new EntityRaycastOptions()
        entityRayOptions.maxDistance = 8
        let entity = player.getEntitiesFromViewVector(entityRayOptions)[0]

        if (entity) {
            let health = entity.getComponent('health')

            if (player.isSneaking) {
                if (health) { // only show the extra info if the entity has health, since if it doesnt its a dummy entity
                    let movement = entity.getComponent('movement')
                    let underwaterMovement = entity.getComponent('underwater_movement')
                    let leashable = entity.getComponent('leashable')
                    let tameable = entity.getComponent('tameable')
                    let info = []

                    if (movement) {
                        info.push(`Movement: ${movement.value.toFixed(2)}`)
                    }
                    if (underwaterMovement) {
                        info.push(`Underwater Movement: ${underwaterMovement.value.toFixed(2)}`)
                    }
                    player.runCommand(`titleraw @s actionbar { "rawtext": [ ${getEntityTellraw(entity)}, { "text": "\n§7Identifier: ${entity.id}\nHealth: ${Math.round(health.current)}/${health.value}\n${info.join('\n')}\nLeashable: ${!!leashable}\nTameable: ${!!tameable}" } ] }`)
                }
                else {
                    player.runCommand(`titleraw @s actionbar { "rawtext": [ ${getEntityTellraw(entity)}, { "text": "\n§7Identifier: ${entity.id}" } ] }`)
                }
            }
            else {
                player.runCommand(`titleraw @s actionbar {"rawtext":[${getEntityTellraw(entity)},{"text": "${(player.hasTag('waila:always_show_identifier') ? `\n§7${entity.id}` : '')}${(health) ? `\n§7${(player.hasTag('waila:show_health_label')) ? 'Health: ' : 'x'}${Math.round(health.current)}` : ''}"}]}`)
            }
        }
        else if (block) {
            if (player.isSneaking) {
                if (block.id.startsWith('minecraft:')) { // only get properties if the block is from minecraft, since the game crashes when getting the properties of a modded block
                    player.runCommand(`titleraw @s actionbar { "rawtext": [ { "translate": "${getBlockTranslateKey(block)}" }, { "text": "\n§7Identifier: ${block.id}${getPropertiesAsString(block.permutation.getAllProperties())}" } ] }`)
                }
                else {
                    player.runCommand(`titleraw @s actionbar { "rawtext": [ { "translate": "${getBlockTranslateKey(block)}" }, { "text": "\n§7Identifier: ${block.id}" } ] }`)
                }
            }
            else if (player.hasTag('waila:always_show_identifier')) {
                player.runCommand(`titleraw @s actionbar { "rawtext": [ { "translate": "${getBlockTranslateKey(block)}" }, { "text": "\n§7${block.id}" } ] }`)
            }
            else {
                player.runCommand(`titleraw @s actionbar { "rawtext": [ { "translate": "${getBlockTranslateKey(block)}" } ] }`)
            }
        }
    }
})