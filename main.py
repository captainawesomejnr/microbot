def DanceBot():
    ZIP_LEDs.show_rainbow(1, 360)
    for index in range(4):
        if input.sound_level() < 128:
            kitronik_servo_lite.stop()
            ZIP_LEDs.show_color(neopixel.colors(NeoPixelColors.RED))
            basic.pause(5000)
            basic.clear_screen()
            ZIP_LEDs.clear()
        else:
            kitronik_servo_lite.neutral()
            kitronik_servo_lite.drive_forwards(500)
            kitronik_servo_lite.drive_backwards(500)
            kitronik_servo_lite.turn_right(360)
            kitronik_servo_lite.turn_left(360)
    basic.clear_screen()

def on_sound_loud():
    kitronik_servo_lite.stop()
    basic.show_icon(IconNames.NO)
    ZIP_LEDs.show_color(neopixel.colors(NeoPixelColors.RED))
    basic.pause(5000)
    basic.clear_screen()
    ZIP_LEDs.clear()
input.on_sound(DetectedSound.LOUD, on_sound_loud)

ZIP_LEDs: neopixel.Strip = None
kitronik_servo_lite.bias_driving(50)
ZIP_LEDs = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
kitronik_servo_lite.set_distance_per_second(100)
kitronik_servo_lite.set_degrees_per_second(90)
basic.show_icon(IconNames.HAPPY)
DanceBot()