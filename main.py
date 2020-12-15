while True: 
    print("Light levels:" + input.light_level())
    if input.light_level()   < 8:
        light.set_all(light.rgb(255,0,255))
    elif input.light_level() <32:
        light.set_all(light.rgb(0,0,0))
    else:
        light.clear()
