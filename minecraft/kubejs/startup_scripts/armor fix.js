// priority: 0

// Visit the wiki for more info - https://kubejs.com/

// made by blueversal

ItemEvents.modification(event => {
  event.modify('eeeabsmobs:ghost_warrior_helmet', item => {
      item.armorProtection = 10;
      item.armorToughness = 8;
  });
  event.modify('eeeabsmobs:ghost_warrior_chestplate', item => {
    item.armorProtection = 16;
    item.armorToughness = 10;
  });
  event.modify('eeeabsmobs:ghost_warrior_leggings', item => {
    item.armorProtection = 12;
    item.armorToughness = 10;
  });
  event.modify('eeeabsmobs:ghost_warrior_boots', item => {
    item.armorProtection = 10;
    item.armorToughness = 8;
  });
  event.modify('exlinecopperequipment:copper_helmet', item => {
    item.armorProtection = 2;
  });
  event.modify('exlinecopperequipment:copper_chestplate', item => {
    item.armorProtection = 4;
  });
  event.modify('exlinecopperequipment:copper_leggings', item => {
    item.armorProtection = 3;
  });
  event.modify('exlinecopperequipment:copper_boots', item => {
    item.armorProtection = 1;
  });
});

