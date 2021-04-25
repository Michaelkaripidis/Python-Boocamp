# Exercise 1
# import random
# s = "Hello World"
# sr = ''.join(random.sample(s, len(s)))
# print(sr)
# Exercise 1
# line_str = "\nHello World"
# line_str2 = "\nI love python"
# line_str3 = "\nHello World" + "\nI love python "
# print(line_str * 5)
# print(line_str2 * 5)
# print((line_str * 5) + (line_str2 * 5))

# Exercise 2

# month = int(input("Please enter number of  a month from 1 to 12!"))
# if month == 3 or month == 4 or month == 5:
#     print("Now is Spring")
# elif month == 6 or month == 7 or month == 8:
#     print("It is hot summer")
# elif month == 9 or month == 10 or month == 11:
#     print("Season is gold Autumn")
# else:
#     print("Winter")
# Month = int(input("Choose the number of month: "))
# list1 = [[12, 1, 2], [3, 4, 5],
#          [6, 7, 8], [9, 10, 11]]
#
# if Month in list1[0]:
#     print("WINTER")
# elif Month in list1[1]:
#     print("SPRING")
# elif Month in list1[2]:
#     print("SUMMER")
# elif Month in list1[3]:
#     print("AUTUMN")
# else:
#     print("Invalid Month Number")

# Exercise 3

# >>> 3 <= 3 < 9
# True
# 3 == 3 == 3
# True

# bool(0)
# False
# bool(5 == "5")
# False
# bool(4 == 4) == bool("4" == "4")
# True
# bool(bool(None))
# False
# x = (1 == True)    # True
# y = (1 == False)    # False
# a = True + 4   #   1 = True
# b = False + 10  #  0 = False
#
# print("x is", x)
# print("y is", y)
# print("a:", a)
# print("b:", b)

# Exercise 4
# my_text = """ Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n
# sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n
# Ut enim ad minim veniam, quis nostrud exercitation ullamco \n
# laboris nisi ut aliquip ex ea commodo consequat. \n
# Duis aute irure dolor in reprehenderit in voluptate velit \n
# esse cillum dolore eu fugiat nulla pariatur. \n
# Excepteur sint occaecat cupidatat non proident, \n
# sunt in culpa qui officia deserunt mollit anim id est laborum. \n
# """
# print(len(my_text))

# Exercise 5

# sentence = input("Try complete sentence without character a in sentence!")
# if "A" in sentence:
#     print

# age = input("How old are you? ")
# print("You are {} years old".format(age))



# a = "A"
# while a == a: # повторяется до тех пор пока действие повторяется
#     cent = input('Input the longest sentence you can without the character A: ')
#     if a in cent:
#         print('It is not a correct sentence')
#         break
#     else:
#         print('Good one!')
#         continue
a = "A"
l0 = 0
lmax = 0
while a == a:
    cent = input('Input the longest sentence you can without the character A: ')
    if a in cent:
        print('It is not a correct sentence')
        print('See you later!')
        break
    else:
        l0 = len(cent.split())
        if l0 > lmax:
            # print('Nice try! Your new sentence is {} char long!'.format(l0))
            print("Nice try! Your new sentence is ", str(l0), " words long!")
            lmax = l0
        else:
            print('This new sentence is not longer then previous. Try again!')

    continue