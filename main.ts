input.onPinPressed(TouchPin.P1, function () {
    basic.showIcon(IconNames.SmallHeart)
    music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
    if (hp < 90) {
        hp += 10
    }
})
input.onGesture(Gesture.Shake, function () {
    if (aanDeBeurt) {
        radio.sendValue("aanval", 40)
        aanDeBeurt = false
    }
})
radio.onReceivedValue(function (name, value) {
    if (hp > 0) {
        hp = hp - value
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(330, music.beat(BeatFraction.Double))
    }
    if (hp > 0) {
        aanDeBeurt = true
    } else {
        music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
    }
})
let aanDeBeurt = false
let hp = 0
radio.setGroup(7)
radio.setTransmitPower(1)
hp = 90
aanDeBeurt = true
basic.showIcon(IconNames.Heart)
music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
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
