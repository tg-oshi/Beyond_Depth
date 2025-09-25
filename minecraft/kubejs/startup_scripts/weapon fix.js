// priority: 0

// Visit the wiki for more info - https://kubejs.com/

// made by blueversal

ItemEvents.modification(event => {
  event.modify('celestisynth:aquaflora', item => {
    item.attackDamage = 9
    item.attackSpeed = -1.6
  });
    event.modify('celestisynth:breezebreaker', item => {
    item.attackDamage = 15
  });
    event.modify('celestisynth:crescentia', item => {
    item.attackDamage = 11
    item.attackSpeed = -2.2
  });
    event.modify('celestisynth:frostbound', item => {
    item.attackDamage = 14
  });
    event.modify('celestisynth:solaris', item => {
    item.attackDamage = 11
  });
    event.modify('witherstormmod:formidi_blade', item => {
    item.attackDamage = 25
  });
});

ItemEvents.modification(event => {
  event.modify('minecraft:nether_star', item => {
    item.fireResistant = true
  });
});