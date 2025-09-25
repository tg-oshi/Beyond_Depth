// priority: 0

// Visit the wiki for more info - https://kubejs.com/

// made by blueversal


EntityEvents.spawned('cataclysm:tidal_tentacle', event => {
  event.cancel()
});

ItemEvents.rightClicked(event => {
  if (event.item.id == 'celestisynth:aquaflora') {
    event.server.scheduleInTicks(1, () => {
      event.player.addItemCooldown('celestisynth:aquaflora', 350)
    })
  }
});

ItemEvents.rightClicked(event => {
  if (event.item.id == 'alexscaves:ortholance') {
    event.server.scheduleInTicks(1, () => {
      event.player.addItemCooldown('alexscaves:ortholance', 60)
    })
  }
});

ItemEvents.rightClicked(event => {
  if (event.item.id == 'voidscape:ethereal_fruit_end') {
    event.server.scheduleInTicks(1, () => {
      event.player.addItemCooldown('voidscape:ethereal_fruit_end', 1000)
    })
  }
});

