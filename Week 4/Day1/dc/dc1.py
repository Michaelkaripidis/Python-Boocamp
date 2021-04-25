# users_character = input("Please enter string with 10 or more characters! ")
# if len(users_character) > 10:
#     print("String is too long!")
# elif len(users_character) < 10:
#     print("String is not long enough")
# else:
#     print("Nice Job!")
# print(users_character[0])
# print(users_character[-1])

# greeting = "Hello World!"
# print(greeting[0])
# print(greeting[0:2])
# print(greeting[0:3])
# print(greeting[0:4])
# print(greeting[0:5])
# print(greeting[0:7])
# print(greeting[0:8])
# print(greeting[0:9])
# print(greeting[0:10])
# print(greeting[0:11])
# print(greeting[0:12])
import random
s = "Hello World"
sr = ''.join(random.sample(s, len(s)))
print(sr)