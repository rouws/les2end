input.onPinPressed(TouchPin.P1, function () {
    hp += 10
    basic.showIcon(IconNames.SmallHeart)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendValue("aanval", 30)
})
radio.onReceivedValue(function (name, value) {
    hp = hp - value
})
let hp = 0
radio.setGroup(33)
radio.setTransmitPower(1)
hp = 90
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
