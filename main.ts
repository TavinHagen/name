input.onButtonPressed(Button.A, function () {
    if (Y < 2) {
        Y += 1
        wall_1.change(LedSpriteProperty.Y, 1)
        Wall_1x.change(LedSpriteProperty.Y, 1)
    }
})
input.onButtonPressed(Button.B, function () {
    if (Y > -1) {
        Y += -1
        wall_1.change(LedSpriteProperty.Y, -1)
        Wall_1x.change(LedSpriteProperty.Y, -1)
    }
})
let Wall_2_change = 0
let Wall_1x: game.LedSprite = null
let wall_1: game.LedSprite = null
let Y = 0
Y = 0
wall_1 = game.createSprite(0, 1)
Wall_1x = game.createSprite(0, 2)
let Wall_2 = game.createSprite(4, 1)
let Wall_2_y = game.createSprite(4, 2)
basic.forever(function () {
    Wall_2_change += randint(1, 2)
    if (Y > -1) {
        if (Wall_2_change == 1) {
            basic.pause(1000)
            Wall_2.change(LedSpriteProperty.Y, -1)
            Wall_2_y.change(LedSpriteProperty.Y, -1)
            Wall_2_change = 0
        }
        if (Y < 2) {
            if (Wall_2_change == 1) {
                basic.pause(1000)
                Wall_2.change(LedSpriteProperty.Y, 1)
                Wall_2_y.change(LedSpriteProperty.Y, 1)
                Wall_2_change = 0
            }
        }
    }
})
