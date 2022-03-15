input.onPinPressed(TouchPin.P0, function () {
    hp += 10
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P1, 0)
})
input.onButtonPressed(Button.A, function () {
    radio.sendValue("aanval", 30)
})
radio.onReceivedValue(function (name, value) {
    if (hp > 0) {
        hp = hp - value
    }
})
let hp = 0
hp = 90
radio.setGroup(33)
radio.setTransmitPower(1)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (hp > 70) {
        basic.showIcon(IconNames.Happy)
    } else if (hp > 40 && hp <= 70) {
        basic.showIcon(IconNames.Asleep)
    } else if (hp > 10 && hp <= 40) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Skull)
    }
})
