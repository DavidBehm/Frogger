scene.setBackgroundColor(9)
let mySprite = sprites.create(assets.image`Frog`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnTile(mySprite, tiles.getTileLocation(8, 14))
scene.cameraFollowSprite(mySprite)
game.onUpdate(function () {
	
})
