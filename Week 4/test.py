# name = input("Give me your name: ")

# age = input("how about your age?: ")
# age = int(age)
# print(type(age))
# sentance = f'my name is {name}, im {age} years old'

# print(sentance)

# age = input("How old are you? ")
# print("You are {} years old".format(age))

# if age > 30 and age < 60:
#     print('you may be a bit old')

# elif age > 60:
#     print('geezer')
# else:
#     print('millenial')

# print('hello world')

# correct_choices = ["cat", 'dog', 'seal']
# user_guess = input('Guess a word: ')

# if user_guess in correct_choices:
#     print(f'you chose {user_guess}, that was correct choice!!')
# else:
#     print('sorry you failed')


# Ask the user for a number betwee 1 and 100

# If the number is a multiple of three, print "Fizz"

# If the number is a multiple of five, print "Buzz".

# If the number is a multiple is a multiples of both three and five, print "FizzBuzz" instead.

number = input('Please enter the number between 1 to 100 : ')
if number.isnumeric():
    number = int(number)
    if 1 < number < 100:
        if number % 3 == 0 and number % 5 == 0:
            print('FizzBuzz')
        elif number % 5 == 0:
            print('Buzz'):
        elif number % 3 == 0:
            print('Fizz')
else:
    print('y didnt give us a number')
