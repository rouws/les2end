input.onPinPressed(TouchPin.P1, function () {
    hp += 10
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(100)
})
radio.onReceivedValue(function (name, value) {
    if (hp > 0) {
        hp = hp - value
    }
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendValue("aanval", 30)
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
