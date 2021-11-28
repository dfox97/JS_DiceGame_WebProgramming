# JS_DiceGame_WebProgramming
The program simulates a simple game of chance using three to six dice. The dice are six-sided and each side has a distinct number between 1 and 6 on it. When a dice is rolled, then each number occurs with equal chance. The game proceeds in three stages, setup, play, and end stage.

During the setup stage the user is asked to enter the number of dice that will be used in the game. If the input of the user is not a natural number between 3 and 6, then an error message should be shown and the user is asked again for a number. This continues until the input of the user is a natural number between 3 and 6, denoted by N in the following. The check and error messages must be realised using JavaScript, not using HTML5 elements and attributes.

During the play stage the game proceeds in rounds during which the program maintains a balance of points won and the number of rounds played. Initialy, both balance and number of rounds played is zero.

In each round, the program first increments the number of rounds played by one, then rolls the N dice and computes the number of points won according to the following table:
![image](https://user-images.githubusercontent.com/61083107/143785642-927a5115-216d-414b-80e2-a54aba9efa75.png)
The number of points won is then added to the balance of points and constitutes the balance at the end of the round.

The program will then display

the number of rounds played,
the dice values (possibly in the form of a nice graphical representation),
the number points won in that round, and
the balance of points at the end of the round.
The program then provides the user with the options (i) to continue with another round, or (ii) to end the game. If option (i) is chosen, then the program remains in the play stage and proceeds with another round. If option (ii) is chosen, then the program proceeds to the end stage.

In the end stage, the program computes the average number of points won per round and displays

the number of rounds played,
the balance of points when reaching the end stage,
the average number of points won per round played, rounded to one digit after the decimal point.
Additional requirements and comments:

![dicegame](https://user-images.githubusercontent.com/61083107/135771412-d264ff51-676b-4e44-a4f6-1a970c6d4c47.jpg)
![image](https://user-images.githubusercontent.com/61083107/135771466-2eb7e415-5786-4e56-8eba-44f721b44d60.png)

