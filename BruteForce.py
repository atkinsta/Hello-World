import random
import time

target_array = list("Hello, World")
string_array = [""] * len(target_array)
i = 0
while i < len(target_array): 
    string_array[i] = chr(random.randint(32, 126))   
    if string_array[i] == target_array[i]:
        i += 1    
    print("".join(string_array))
    time.sleep(.006)
    #See https://www.reddit.com/r/ProgrammerHumor/comments/8fdyf0/i_heard_were_brute_forcing_hello_world_now/
    #for discussion