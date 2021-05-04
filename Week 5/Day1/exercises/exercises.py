# class Door:
#
#     def __init__(self, is_opened):
#         self.opened = is_opened
#
#     def open_door(self):
#         print('door has been opened')
#         self.is_opened = True
#
#     def close_door(self):
#         print('door has been closed')
#         self.is_opened = False
#
# class BlockedDoor(Door):
#     def open_door(self):
#         print('door is blocked and cannot be open')
#
#     def close_door(self):
#         self.open_door()
#
# door = Door(True)
# bdoor = BlockedDoor(False)

# class Dog:
#     def __init__(self, name, height):
#         self.name = name
#         self.height = height
#
#     def bark(name, height):
#
# dogs_name =


# print(f'{bark.name} is making oof')
# print(f'{jump.name} jumps {x} cm high')
#
# davids_dog = Dog('Rexx', 50)
#
# print(davids_dog.name)
# print(davids_dog.height)
#
# sarahs_dog = Dog('Teacup', 20)
#
# print(sarahs_dog.name)
# print(sarahs_dog.height)

# class Dog:
#     def __init__(self, name, height):
#         self.name = name
#         self.height = height
#
#     def bark(self):
#         print(f"{self.name} is barking !")
#
#     def jump(self):
#         x = self.height * 2
#         print(f'{self.name} jumps in {x} cm')
#
#
# dog2 = Dog('Rex', 4)
# dog1 = Dog('Pes', 5)
# davids_dog = Dog('David', 9)
# sarahs_dog = Dog('Popa', 25)
#
# dog1.bark()
# dog1.jump()s
# dog2.bark()
# dog2.jump()
# davids_dog.jump()
# davids_dog.bark()
# sarahs_dog.bark()
# sarahs_dog.jump()
#
# list_of_dogs = [dog1, dog2, davids_dog, sarahs_dog]
# for i in range(len(list_of_dogs)):
#     for j in range(i+1, len(list_of_dogs)):
#         if list_of_dogs[i].height > list_of_dogs[j].height:
#             print(f"{list_of_dogs[i].name} won against {list_of_dogs[j].name}!")
#         else:
#             print(f"{list_of_dogs[j].name} won against {list_of_dogs[i].name}!")

# Exercise 3
# class Song:
#     def __init__(self, lyrics):
#         self.lyrics = lyrics
#         self.songs = []
#
#     def sing_me_a_song(self):
#         for asong in self.lyrics:
#             print(asong)
#
# stairway = Song(["There’s a lady who's sure", "all that glitters is gold", "and she’s buying a stairway to heaven"])
# stairway.sing_me_a_song()

# Exercise 4
# class Zoo:
#     def __init__(self, zoo_name):
#         self.name = zoo_name
#         self.animals = []
#
#     def add_animal(self, new_animal):
#         self.animals.append(new_animal)
#
#     def get_animals(self):
#         for animal in self.animals:
#             print(animal)
#
#     def sell_animal(self, animal_sold):
#         self.animals.remove(animal_sold)
#
#     def sort_animals(self):
#         self.animals.sort()
#
#
# ramat_gan_safari = Zoo("ramat_gan")
# ramat_gan_safari.add_animal("camel")
# ramat_gan_safari.add_animal("frog")
# ramat_gan_safari.add_animal("monkey")
# ramat_gan_safari.get_animals()
# ramat_gan_safari.sell_animal("monkey")
# ramat_gan_safari.sort_animals()
