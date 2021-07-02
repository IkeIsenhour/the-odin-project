// file:///Users/ikeisenhour/the-odin-project/index.html

let playerWinCounter = 0
let computerWinCounter = 0

console.log(game())

function game() {
    while (playerWinCounter < 3 && computerWinCounter <3){

        let playerPlay = window.prompt("rock, paper, or scissors?")
        while (playerPlay != "rock" && playerPlay != "paper" && playerPlay != "scissors") {
            playerPlay = window.prompt("rock, paper, or scissors?")
        }
        let computerPlay = computer()

        playOneRound(computerPlay,playerPlay)
        console.log(playerPlay)
        console.log(computerPlay)
        console.log(playerWinCounter)
        console.log(computerWinCounter)
    }

    if (playerWinCounter === 3) {
        return "You Win!"
    } else {
        return "You Lose!"
    }

}

function playOneRound (computerInput, playerInput) {

    if (playerInput==="rock" && computerInput==="scissors") {
        playerWinCounter++
    } else if (playerInput==="paper" && computerInput==="rock") {
        playerWinCounter++
    } else if (playerInput==="scissors" && computerInput==="paper") {
        playerWinCounter++
    } else if (playerInput===computerInput) {
        // nothing
    } else {
        computerWinCounter++
    }
}

function computer() {
    let hands=["rock", "paper", "scissors"]
    const randomIndex = Math.floor(Math.random() * hands.length);
    return hands[randomIndex]
}

/*

function playOneRound (computerInput, playerInput) {

    if (playerInput==="rock" && computerInput==="scissors") {
        playerWinCounter = playerWinCounter + 1
        return "rock beats scissors, you win!"
    } else if (playerInput==="scissors" && computerInput==="rock") {
        computerWinCounter = computerWinCounter + 1
        return "rock beats scissors, you lose!"

    } else if (playerInput==="paper" && computerInput==="rock") {
        playerWinCounter = playerWinCounter + 1
        return "paper beats rock, you win!"
    } else if (playerInput==="rock" && computerInput==="paper") {
        computerWinCounter = computerWinCounter + 1
        return "paper beats rock, you lose!"

    } else if (playerInput==="scissors" && computerInput==="paper") {
        playerWinCounter = playerWinCounter + 1
        return "scissors beats paper, you win!"
    } else if (playerInput==="paper" && computerInput==="scissors") {
        computerWinCounter = computerWinCounter + 1
        return "scissors beats paper, you lose!"
        
    } else if (playerInput==="paper" && computerInput==="paper") {
        return "paper and paper is a tie!"
    } else if (playerInput==="rock" && computerInput==="rock") {
        return "rock and rock is a tie!"
    } else if (playerInput==="scissors" && computerInput==="scissors") {
        return "scissors and scissors is a tie!"
    }
}

function game() {
    playerWinCounter = 0
    computerWinCounter = 0
    
    while (playerWinCounter < 3 || computerWinCounter < 3) {
        winner = playOneRound()
        if (winner = 0) {
            playerWinCounter++
        }
        else if (winner = 1) {
            computerWinCounter++
        }
    }

    if (playerWinCounter = 3) {
        return "You Won!"
    }
    else if (computerWinCounter = 3) {
        return "You Lost!"
    }
}

console.log(game())

function computerPlay {
    if (Math.floor(Math.random()*2)%2===0) {
        return "x"
    }
    else {
        return "y"
    }
}

let string1="This"
let string2=" is"
let string3=' a'
let string4=' test'
console.log(string1+string2+string3+string4);

if (2>1) {
    alert(0>1)
    alert(true||false)
    alert(true && true)
}

output(string1)
*/

/*
function fizzBuzz (a) {
    let counter=0
    while (counter<a) {
        counter=counter+1
        if (counter%3===0) {
            console.log( "Fizz")
        }
        else if (counter%5===0) {
            console.log("Buzz")
        }
        else {
            console.log(counter)
        }
    }
}
fizzBuzz(15)

function fizzBuzz (a) {
    let counter=0
    let list=[]
    while (counter<a) {
        counter=counter+1
        if (counter%3===0) {
            list.push("Fizz")
        }
        else if (counter%5===0) {
            list.push("Buzz")
        }
        else {
            list.push(counter)
        }
        console.log(list)
    }
}
fizzBuzz(15)

let number=parseInt(prompt("Please enter a number"))
for (i=1; i<=number; i++) {
    let list=[]
    if (i%3===0) {
        list.push("Fizz")
    }
    else if (i%5===0) {
        list.push("Buzz")
    }
    else {
        list.push(i)
    }
    console.log(list)
}
*/