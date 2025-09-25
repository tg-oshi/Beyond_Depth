// priority: 0

// Visit the wiki for more info - https://kubejs.com/

// made by blueversal

ServerEvents.recipes(event => {
  // Add custom recipes
  // Iron and Gold Plates (using Create mod sheets)
  const ironPlate = 'create:iron_sheet';
  const goldPlate = 'create:golden_sheet';
  const ironIngot = 'minecraft:iron_ingot';
  const goldIngot = 'minecraft:gold_ingot';
  const nugget = 'minecraft:iron_nugget';
  // Armor Recipes
  const armorShapes = {
      helmet: ['PpP', 'p p'],
      chestplate: ['p p', 'PPP', 'pPp'],
      leggings: ['PpP', 'p p', 'P P'],
      boots: ['p p', 'P P']
  };

  for (const [armor, pattern] of Object.entries(armorShapes)) {
      event.shaped(`minecraft:iron_${armor}`, pattern, { P: ironIngot, p: ironPlate });
      event.shaped(`minecraft:golden_${armor}`, pattern, { P: goldIngot, p: goldPlate });
      event.shaped(`minecraft:chainmail_${armor}`, pattern, { P: ironIngot, p: nugget });
  }

  // Horse Armor Recipes
  event.shaped('minecraft:iron_horse_armor', ['p p', 'PpP', 'p p'], { P: ironIngot, p: ironPlate });
  event.shaped('minecraft:golden_horse_armor', ['p p', 'PpP', 'p p'], { P: goldIngot, p: goldPlate });
});

ServerEvents.recipes(event => {
  event.remove({ id: 'ender_dragon_loot:dragon_helm_upgrade' });
  event.remove({ id: 'ender_dragon_loot:dragon_chest_upgrade' });
  event.remove({ id: 'ender_dragon_loot:dragon_leggins_upgrade' });
  event.remove({ id: 'ender_dragon_loot:dragon_boots_upgrade' });
  event.remove({ id: 'ender_dragon_loot:dragon_sword_upgrade' });
  event.remove({ id: 'ender_dragon_loot:dragon_picaxe_upgrade' });
  event.remove({ id: 'ender_dragon_loot:dragon_axe_upgrade' });
  event.remove({ id: 'ender_dragon_loot:dragon_shovel_upgrade' });
  event.remove({ id: 'ender_dragon_loot:dragon_hoe_upgrade' });
  event.remove({ id: 'cataclysm:smithing/ignitium_helmet' });
  event.remove({ id: 'cataclysm:smithing/ignitium_chestplate' });
  event.remove({ id: 'cataclysm:smithing/ignitium_leggings' });
  event.remove({ id: 'cataclysm:smithing/ignitium_boots' });
  event.remove({ id: 'cataclysm:smithing/cursium_helmet' });
  event.remove({ id: 'cataclysm:smithing/cursium_chestplate' });
  event.remove({ id: 'cataclysm:smithing/cursium_leggings' });
  event.remove({ id: 'cataclysm:smithing/cursium_boots' });
  event.remove({ id: 'born_in_chaos_v1:armor_plate_from_dark_metal_k_2' });
  event.remove({ id: 'born_in_chaos_v1:armor_plate_from_dark_metal_k_3' });
  event.remove({ id: 'born_in_chaos_v1:armor_plate_from_dark_metal_k_4' });
  event.remove({ id: 'born_in_chaos_v1:armor_plate_from_dark_metal_k_5' });
  event.remove({ id: 'cataclysm:smithing/monstrous_helm' });
  event.remove({ id: 'deeperdarker:warden_helmet_smithing' });
  event.remove({ id: 'deeperdarker:warden_chestplate_smithing' });
  event.remove({ id: 'deeperdarker:warden_leggings_smithing' });
  event.remove({ id: 'deeperdarker:warden_boots_smithing' });
  event.remove({ id: 'deeperdarker:warden_axe_smithing' });
  event.remove({ id: 'deeperdarker:warden_hoe_smithing' });
  event.remove({ id: 'deeperdarker:warden_sword_smithing' });
  event.remove({ id: 'deeperdarker:warden_pickaxe_smithing' });
  event.remove({ id: 'deeperdarker:warden_shovel_smithing' });
  event.remove({ id: 'galosphere:sterling_helmet_smithing' });
  event.remove({ id: 'galosphere:sterling_chestplate_smithing' });
  event.remove({ id: 'galosphere:sterling_leggings_smithing' });
  event.remove({ id: 'galosphere:sterling_boots_smithing' });
});

ServerEvents.recipes(event => {
  event.smithing(
      'ender_dragon_loot:dragon_armor_helmet',
      'ender_dragon_loot:dragon_upgrade_template',
      'majruszsdifficulty:enderium_helmet',
      'ender_dragon_loot:dragon_scale'
  );
});

ServerEvents.recipes(event => {
  event.smithing(
      'ender_dragon_loot:dragon_armor_chestplate',
      'ender_dragon_loot:dragon_upgrade_template',
      'majruszsdifficulty:enderium_chestplate',
      'ender_dragon_loot:dragon_scale'
  );
});

ServerEvents.recipes(event => {
  event.smithing(
      'ender_dragon_loot:dragon_armor_leggings',
      'ender_dragon_loot:dragon_upgrade_template',
      'majruszsdifficulty:enderium_leggings',
      'ender_dragon_loot:dragon_scale'
  );
});

ServerEvents.recipes(event => {
  event.smithing(
      'ender_dragon_loot:dragon_armor_boots',
      'ender_dragon_loot:dragon_upgrade_template',
      'majruszsdifficulty:enderium_boots',
      'ender_dragon_loot:dragon_scale'
  );
});

ServerEvents.recipes(event => {
  event.smithing(
      'ender_dragon_loot:dragon_sword',
      'ender_dragon_loot:dragon_upgrade_template',
      'majruszsdifficulty:enderium_sword',
      'ender_dragon_loot:dragon_scale'
  );
});

ServerEvents.recipes(event => {
  event.smithing(
      'ender_dragon_loot:dragon_pickaxe',
      'ender_dragon_loot:dragon_upgrade_template',
      'majruszsdifficulty:enderium_pickaxe',
      'ender_dragon_loot:dragon_scale'
  );
});


ServerEvents.recipes(event => {
  event.smithing(
      'ender_dragon_loot:dragon_axe',
      'ender_dragon_loot:dragon_upgrade_template',
      'majruszsdifficulty:enderium_axe',
      'ender_dragon_loot:dragon_scale'
  );
});


ServerEvents.recipes(event => {
  event.smithing(
      'ender_dragon_loot:dragon_shovel',
      'ender_dragon_loot:dragon_upgrade_template',
      'majruszsdifficulty:enderium_shovel',
      'ender_dragon_loot:dragon_scale'
  );
});


ServerEvents.recipes(event => {
  event.smithing(
      'ender_dragon_loot:dragon_hoe',
      'ender_dragon_loot:dragon_upgrade_template',
      'majruszsdifficulty:enderium_hoe',
      'ender_dragon_loot:dragon_scale'
  );
});

ServerEvents.recipes(event => {
  event.smithing(
      'cataclysm:cursium_helmet',
      'cataclysm:cursium_upgrade_smithing_template',
      'deeperdarker:warden_helmet',
      'cataclysm:cursium_ingot'
  );
});

ServerEvents.recipes(event => {
  event.smithing(
      'cataclysm:cursium_chestplate',
      'cataclysm:cursium_upgrade_smithing_template',
      'deeperdarker:warden_chestplate',
      'cataclysm:cursium_ingot'
  );
});

ServerEvents.recipes(event => {
  event.smithing(
      'cataclysm:cursium_leggings',
      'cataclysm:cursium_upgrade_smithing_template',
      'deeperdarker:warden_leggings',
      'cataclysm:cursium_ingot'
  );
});

ServerEvents.recipes(event => {
  event.smithing(
      'cataclysm:cursium_boots',
      'cataclysm:cursium_upgrade_smithing_template',
      'deeperdarker:warden_boots',
      'cataclysm:cursium_ingot'
  );
});

ServerEvents.recipes(event => {
  event.smithing(
      'cataclysm:ignitium_helmet',
      'cataclysm:ignitium_upgrade_smithing_template',
      'born_in_chaos_v1:dark_metal_armor_helmet',
      'cataclysm:ignitium_ingot'
  );
});

ServerEvents.recipes(event => {
  event.smithing(
      'cataclysm:ignitium_chestplate',
      'cataclysm:ignitium_upgrade_smithing_template',
      'born_in_chaos_v1:dark_metal_armor_chestplate',
      'cataclysm:ignitium_ingot'
  );
});

ServerEvents.recipes(event => {
  event.smithing(
      'cataclysm:ignitium_leggings',
      'cataclysm:ignitium_upgrade_smithing_template',
      'born_in_chaos_v1:dark_metal_armor_leggings',
      'cataclysm:ignitium_ingot'
  );
});

ServerEvents.recipes(event => {
  event.smithing(
      'cataclysm:ignitium_boots',
      'cataclysm:ignitium_upgrade_smithing_template',
      'born_in_chaos_v1:dark_metal_armor_boots',
      'cataclysm:ignitium_ingot'
  );
});

ServerEvents.recipes(event => {
  event.smithing(
      'cataclysm:monstrous_helm',
      'minecraft:netherite_upgrade_smithing_template',
      'mowziesmobs:wrought_helmet',
      'cataclysm:monstrous_horn'
  );
});

ServerEvents.recipes(event => {
  event.smithing(
      'born_in_chaos_v1:dark_metal_armor_helmet',
      'born_in_chaos_v1:dark_upgrade',
      'blazegear:nethersteel_helmet',
      'born_in_chaos_v1:armor_plate_from_dark_metal'
  );
});

ServerEvents.recipes(event => {
  event.smithing(
      'born_in_chaos_v1:dark_metal_armor_chestplate',
      'born_in_chaos_v1:dark_upgrade',
      'blazegear:nethersteel_chestplate',
      'born_in_chaos_v1:armor_plate_from_dark_metal'
  );
});

ServerEvents.recipes(event => {
  event.smithing(
      'born_in_chaos_v1:dark_metal_armor_leggings',
      'born_in_chaos_v1:dark_upgrade',
      'blazegear:nethersteel_leggings',
      'born_in_chaos_v1:armor_plate_from_dark_metal'
  );
});

ServerEvents.recipes(event => {
  event.smithing(
      'born_in_chaos_v1:dark_metal_armor_boots',
      'born_in_chaos_v1:dark_upgrade',
      'blazegear:nethersteel_boots',
      'born_in_chaos_v1:armor_plate_from_dark_metal'
  );
});

ServerEvents.recipes(event => {
  event.smithing(
      'deeperdarker:warden_helmet',
      'deeperdarker:warden_upgrade_smithing_template',
      'minecraft:diamond_helmet',
      'deeperdarker:reinforced_echo_shard'
  );
});

ServerEvents.recipes(event => {
  event.smithing(
      'deeperdarker:warden_chestplate',
      'deeperdarker:warden_upgrade_smithing_template',
      'minecraft:diamond_chestplate',
      'deeperdarker:reinforced_echo_shard'
  );
});

ServerEvents.recipes(event => {
  event.smithing(
      'deeperdarker:warden_leggings',
      'deeperdarker:warden_upgrade_smithing_template',
      'minecraft:diamond_leggings',
      'deeperdarker:reinforced_echo_shard'
  );
});

ServerEvents.recipes(event => {
  event.smithing(
      'deeperdarker:warden_boots',
      'deeperdarker:warden_upgrade_smithing_template',
      'minecraft:diamond_boots',
      'deeperdarker:reinforced_echo_shard'
  );
});

const tools = ['axe', 'hoe', 'sword', 'pickaxe', 'shovel'];

tools.forEach(tool => {
  ServerEvents.recipes(event => {
    event.smithing(
      `deeperdarker:warden_${tool}`,
      'deeperdarker:warden_upgrade_smithing_template',
      `minecraft:diamond_${tool}`,
      'deeperdarker:reinforced_echo_shard'
    );
  });
});

ServerEvents.recipes(event => {
  event.smithing(
      'galosphere:sterling_helmet',
      'galosphere:silver_upgrade_smithing_template',
      'minecraft:chainmail_helmet',
      'minecraft:leather'
  );
});

ServerEvents.recipes(event => {
  event.smithing(
      'galosphere:sterling_chestplate',
      'galosphere:silver_upgrade_smithing_template',
      'minecraft:chainmail_chestplate',
      'minecraft:leather'
  );
});

ServerEvents.recipes(event => {
  event.smithing(
      'galosphere:sterling_leggings',
      'galosphere:silver_upgrade_smithing_template',
      'minecraft:chainmail_leggings',
      'minecraft:leather'
  );
});

ServerEvents.recipes(event => {
  event.smithing(
      'galosphere:sterling_boots',
      'galosphere:silver_upgrade_smithing_template',
      'minecraft:chainmail_boots',
      'minecraft:leather'
  );
});