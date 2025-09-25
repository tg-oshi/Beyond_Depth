// priority: 0

// Visit the wiki for more info - https://kubejs.com/

// made by blueversal

const all_NetherStructures = /(betterfortresses:chests.*|bygonenether:chests.*|philipsruins:chest\/nether.*|incendium:barrel.*)/
// const hard_NetherStructures
// const treasureRoom_NetherStructures etc

LootJS.modifiers((event) => {
    event
        .addLootTableModifier(all_NetherStructures).addLoot(
            LootEntry.of("minecraft:enchanted_book", {StoredEnchantments:[{id: "minecraft:soul_fire_aspect", lvl:1}]}).when((c) => c.randomChance(0.02)),
            LootEntry.of("minecraft:enchanted_book", {StoredEnchantments:[{id: "minecraft:soul_fire_aspect", lvl:2}]}).when((c) => c.randomChance(0.01)),
            LootEntry.of("minecraft:enchanted_book", {StoredEnchantments:[{id: "minecraft:soul_flame", lvl:1}]}).when((c) => c.randomChance(0.02))
        )
})