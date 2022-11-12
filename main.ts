radio.onReceivedNumber(function (receivedNumber) {
    BOB += receivedNumber
    GAME()
})
input.onButtonPressed(Button.A, function () {
    ALICE = randint(1, 10)
    radio.sendNumber(ALICE)
    GAME()
})
function START () {
    ALICE = 0
    BOB = 0
}
function GAME () {
    if (ALICE == 0) {
        basic.showString("?")
    } else if (BOB == 0) {
        basic.showLeds(`
            # # # # #
            . # # # .
            . . # . .
            . # # # .
            # # # # #
            `)
    } else {
        if (ALICE > BOB) {
            basic.showIcon(IconNames.Happy)
        } else if (ALICE < BOB) {
            basic.showIcon(IconNames.Sad)
        } else {
            basic.showIcon(IconNames.Asleep)
        }
        START()
    }
}
let ALICE = 0
let BOB = 0
radio.setGroup(1)
radio.sendNumber(0)
START()
GAME()
