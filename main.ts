while (true) {
    // if light level is greater than 15, then set neopixels off
    console.log("light level: " + input.lightLevel())
    if (input.lightLevel() > 15) {
        light.clear
    } else if (input.lightLevel() >= 7) {
        // if light level is equal to or greater than , then set neopixels off
        light.setAll(color.rgb(0, 0, 255))
    } else {
        light.setAll(color.rgb(255, 165, 0))
    }
    
}
