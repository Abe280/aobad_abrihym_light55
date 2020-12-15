while (true) {
    console.log("Light levels:" + input.lightLevel())
    if (input.lightLevel() < 8) {
        light.setAll(light.rgb(255, 0, 255))
    } else if (input.lightLevel() < 32) {
        light.setAll(light.rgb(0, 0, 0))
    } else {
        light.clear()
    }
    
}
