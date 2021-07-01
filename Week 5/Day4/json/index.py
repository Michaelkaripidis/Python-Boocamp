# # Exercise 1
# def get_words_from_file():
#     f = open("sowpods.txt")
#     return f.read().splitlines()

# def get_random_sentence(length):
#     sentence = " "
#     words = get_words_from_file()
#     from random import randint
#     x = 1
#     while x <= length:
#         random_num = randint(1, words.__len__())
#         sentence = sentence + " " + words[random_num]
#         x += 1
#     return sentence.lower()

# def main():
#     print("You have to write number from 2 to 20")
#     length = input("Choose how many words will be in your sentence from 2 to 20: ")

#     if not length.isdigit():
#         return "It is not correct"
        
#     length = int(length)
#     if length < 2:
#         return "Not enough words"
#     elif length > 20:
#         return "Too many words"
#     else:
#         return get_random_sentence(length)


# print(main())

# def get_words_from_file():
#     f = open("sowpods.txt")
#     return f.read().splitlines()


# def get_random_sentence(length):
#     sentence = ""
#     words = get_words_from_file()
#     from random import randint
#     x = 1
#     while x <= length:
#         random_num = randint(1, words.__len__())
#         sentence = sentence + " " + words[random_num]
#         x += 1
#     return sentence.lower()

# def main():
#     print("blabla")
#     length = input("Input numb of words in your sentence")

#     if not length.isdigit():
#         return "It is not correct"

#     length = int(length)
#     if length < 2:
#         return "Too few words"
#     elif length > 20:
#         return "Too many words"
#     else:
#         return get_random_sentence(length)


# print(main())

# Exercise 2