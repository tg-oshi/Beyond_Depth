// priority: 0

// Visit the wiki for more info - https://kubejs.com/

// made by blueversal

ServerEvents.recipes(event => {

    event.remove({ id: 'additionaladditions:rose_gold_alloy' })
});

ServerEvents.recipes(event => {
  event.recipes.create.mixing('additionaladditions:rose_gold_alloy', [
    'minecraft:gold_ingot', 
    'minecraft:gold_ingot',
    'minecraft:gold_ingot',
    'minecraft:copper_ingot',
    'minecraft:copper_ingot',
    'minecraft:copper_ingot'
  ])
})

ServerEvents.recipes(event => {
  event.recipes.create.compacting('minecraft:coal', 'supplementaries:ash_brick').heated()
})

ServerEvents.recipes(event => {
  event.recipes.create.mixing('farmersdelight:organic_compost', [
    'minecraft:dirt',
    'farmersdelight:straw',
    'farmersdelight:straw',
    'minecraft:bone_meal',
    'supplementaries:ash',
    'supplementaries:ash',
    'supplementaries:ash',
    'supplementaries:ash',
    'supplementaries:ash'
  ])
})

ServerEvents.recipes(event => {
  event.recipes.create.compacting('minecraft:ink_sac', 'theinkarena:ink_waste').superheated()
})