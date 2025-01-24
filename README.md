# schope26.github.io
Hello my name is Sincere Hope. This is my school account. This repository will hold all my class assignments.

# About me

## My interests
1. I like playing video games
    - Favorites include Rainbow Six Siege and Minecraft
2. I like producing music
    - Mostly EDM and LoFi
3. I serve at Olive Garden
    - I've been a server for about 3 years

## Websites I recommend
    -[YouTube] (https://youtube.com) - I watch a plethora of videos on here everyday spanning from games to tutorials to funny videos.

    -[Reddit] (https://reddit.com) - I read a lot on topics I find interesting here on reddit. It has all the information you need!


# Guessing Game
## Rules
    1. Enter a number and see if its a winner
    2. If its right, You win!

```mermaid
graph LR
    subgraph Start
        "Welcome to the Number Guessing Game!"
        "Generate a random number between 1 and 100"
    end
    
    "Ask player for a guess" --> "Check if guess is valid"
    
    subgraph Check_Input
        "Is guess a number?" --> |Yes| "Compare guess to random number"
        "Is guess too high?" --> |Yes| "Guess is too high"
        "Is guess too low?" --> |Yes| "Guess is too low"
        "Invalid input" --> "Ask player for a guess"
    end
    
    "Compare guess to random number" --> |Correct| "You guessed it!"
    "Compare guess to random number" --> |Too high| "Guess is too high"
    "Compare guess to random number" --> |Too low| "Guess is too low"
    
    "Guess is too high" --> "Ask player for a guess"
    "Guess is too low" --> "Ask player for a guess"
    
    "You guessed it!" --> "Play again?"
    "Play again?" --> |Yes| "Start"
    "Play again?" --> |No| "End" 
```


