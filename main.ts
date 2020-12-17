input.onPinPressed(TouchPin.P0, function () {
    love = randint(0, 2)
    if (love == 1) {
        for (let index = 0; index < 4; index++) {
            basic.showIcon(IconNames.Heart)
            basic.showIcon(IconNames.Happy)
        }
        basic.clearScreen()
        basic.pause(2000)
    } else if (love == 0) {
        for (let index = 0; index < 4; index++) {
            basic.showIcon(IconNames.No)
            basic.showIcon(IconNames.Sad)
        }
        basic.clearScreen()
        basic.pause(2000)
    } else {
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . # . .
                . # . # .
                . . . # .
                . . # . .
                . . # . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
        basic.clearScreen()
        basic.pause(2000)
    }
})
let love = 0
serial.writeValue("Pin", 0)
