function DanceBot () {
    ZIP_LEDs.showRainbow(1, 300)
    for (let index = 0; index < 4; index++) {
        if (input.soundLevel() > 128) {
            kitronik_servo_lite.stop()
            ZIP_LEDs.showColor(neopixel.colors(NeoPixelColors.Red))
            basic.pause(5000)
            basic.clearScreen()
            ZIP_LEDs.clear()
        } else {
            kitronik_servo_lite.neutral()
            kitronik_servo_lite.driveForwards(500)
            kitronik_servo_lite.driveBackwards(500)
            kitronik_servo_lite.turnRight(360)
            kitronik_servo_lite.turnLeft(360)
        }
    }
    basic.clearScreen()
}
input.onSound(DetectedSound.Loud, function () {
    kitronik_servo_lite.stop()
    basic.showIcon(IconNames.No)
    ZIP_LEDs.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(5000)
    basic.clearScreen()
    ZIP_LEDs.clear()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    DanceBot()
})
let ZIP_LEDs: neopixel.Strip = null
kitronik_servo_lite.biasDriving(50)
input.setSoundThreshold(SoundThreshold.Loud, 200)
music.setBuiltInSpeakerEnabled(true)
ZIP_LEDs = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
kitronik_servo_lite.setDistancePerSecond(100)
kitronik_servo_lite.setDegreesPerSecond(90)
basic.showIcon(IconNames.Happy)
DanceBot()
