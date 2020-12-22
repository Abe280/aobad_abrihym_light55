while True: 
    
    #if light level is greater than 15, then set neopixels off
    print("light level: " + input.light_level())
    if input.light_level() > 15:
        light.clear
    
    #if light level is equal to or greater than , then set neopixels off
    elif input.light_level() >= 7 :
        light.set_all(color.rgb(0,0,255))
    
    else:
         light.set_all(color.rgb(255,165,0))