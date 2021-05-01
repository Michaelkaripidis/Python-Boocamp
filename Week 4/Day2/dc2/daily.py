bd = input('Input your birthday dd/mm/yyyy')
if bd.strip() != "":
    if len(bd) == 10:
        your_year = bd[9]
        if your_year in '1234567890':
            candles = int(your_year) * 'i'
            while len(candles) < 13:
                candles = "_" + candles + "_"

            print('   ' + candles)
            print('   |:H:a:p:p:y:|')
            print('_|             |_')
            print('|                 |')
            print('|:B:i:r:t:h:d:a:y:|')
            print('|                 |')
            print('~~~~~~~~~~~~~~~~~')

        # Бонус
            y = int(bd[6:10])
            print(y)
            if not (y % 4 != 0 or (y % 100 == 0 and y % 400 != 0)):
                print('   ' + candles)
                print('   |:H:a:p:p:y:|')
                print('_|             |_')
                print('|                 |')
                print('|:B:i:r:t:h:d:a:y:|')
                print('|                 |')
                print('~~~~~~~~~~~~~~~~~')
