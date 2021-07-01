# Exercise 1
# my_fav_numbers = {1, 7, 8, 12}
# my_fav_numbers.add(21)
# my_fav_numbers.add(23)
# my_fav_numbers.remove(1)
# print(my_fav_numbers)
# friend_fav_numbers = {1, 2, 14, 15}
# our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
# print(our_fav_numbers)

# Exercise 2
# Given a tuple which value is integers, is it possible to add more integers to the tuple?
# my_tuple = (5, 6, 7)
#
# Tuples are immutable lists, which means items can’t be changed.

#  Exercise 3
# # Use a for loop to print all numbers from 1 to 20, inclusive.
# current_number = 1
# while current_number <= 20:
#     print(current_number)
#     current_number += 1
#
# print("Finished")

# Exercise 4
# Recap – What is a float? What is the difference between an integer and a float?
# Can you think of another way to generate a sequence of floats?
# Create a list containing the following sequence 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 (don’t hard-code the sequence).
# fl = [1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]

# start = 1.5
# jumper = .5
# array = []
#
# while start < 5.5:
#     print(start)
#     array.append(start)
#     print(array)
#     start += jumper
#     print(start)
#
#     # print(array)
# # print(array)
# Exercise 5
# Instructions
# Using this list basket = ["Banana", "Apples", "Oranges", "Blueberries"];
#
# Remove “Banana” from the list.
# Remove “Blueberries” from the list.
# Add “Kiwi” to the end of the list.
# Add “Apples” to the beginning of the list.
# Count how many apples are in the basket.
# Empty the basket.
# Print(basket)
# basket = ["Banana", "Apples", "Oranges", "Blueberries"]
# basket.remove("Banana")
# basket.remove("Blueberries")
# basket.append("Kiwi")
# apple_count = basket.count("Apples")
# print(apple_count)
# basket.clear()
# print(basket)
# # Exercise 6
#
#
# name = ''
# while name != 'Michael':
#     name = input('What is your name? ')
#
# print('You got it!')

# Exercise 7
# Given a list, use a loop to print out every element which has an even index.
# Python program to print odd Numbers in a List

# list1 = [10, 21, 4, 45, 66, 93]
# i = 0
#
# while i < len(list1):
#
#     if list1[i] % 2 != 0:
#         print(list1[i], end=" ")
#
#     i += 1

# Exercise 8

# Create a loop that goes from 1500 to 2500 and prints all multiples of 5 and 7.
#
# for x in range(1500,2500):
#     if x % 5 == 0 or x % 7 == 0:
#         print(x)
# Exercise 9

# favorite_fruits = input('Please enter your favorite fruit and separate them with white space: ')
# print(favorite_fruits.split())
# new_fruits = input("Choose new fruit!")
# if new_fruits in favorite_fruits:
#     print("You chose one of your favorite fruits!")
# else:
#     print("You chose other fruit enjoy!")
# Exercise 10

# while True:
#     topping = input("введите еще добавку: ")
#     if topping != "quit":
#         toppings.append(topping)
#     else:
#         break

# print(toppings)
# print("Ваша пицца стоит:", 10 + 2.5 * len(toppings))

# Exercise 11
# sum_family = 0
# while True:
#     age = input("Enter age of member of your family from 1 to 100, or 0 to end session: ")
#     if not age.isdigit():
#         print("Incorrect answer")
#         break
#     else:
#         age = int(age)
#
#     if age > 12:
#         sum_family = sum_family + 15
#     elif age > 3:
#         sum_family = sum_family + 10
#     elif age == 0:
#         break
#     else:
#         print("You dont need to pay for a baby")
#         continue
# print(f"Total summ: {sum_family}")

# Exercise 12
# name_list = ['Michael', 'Marat', 'Masha', 'Anastasia', 'Kassandra']
# temp_list = name_list.copy()
# for name in temp_list:
#     age = int(input("How old are you?: "))
#     if age < 16:
#         name_list.remove(name)

# print(name_list)

