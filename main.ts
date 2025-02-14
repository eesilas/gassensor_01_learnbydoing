basic.showIcon(IconNames.Heart)
let strip = neopixel.create(DigitalPin.P2, 12, NeoPixelMode.RGB)
let gaslevel = pins.analogReadPin(AnalogReadWritePin.P0)
strip.showRainbow(1, 360)
basic.forever(function () {
    basic.showString("" + (gaslevel))
    if (pins.analogReadPin(AnalogReadWritePin.P0) <= 600) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    }
})
