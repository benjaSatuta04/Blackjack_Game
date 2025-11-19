let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard

let message = document.getElementById("message")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")

function startGame() {
    renderGame()
}

function renderGame () {
    if(sum < 21) {
        message.textContent = "take another card?"
        cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
        sumEl.textContent = "Sum: " + sum
    }else if( sum === 21) {
        message.textContent = "You've a Black Jack!"
        cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
        sumEl.textContent = "Sum: " + sum
    }else {
        message.textContent = "You're out of the game!"
        cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
        sumEl.textContent = "Sum: " + sum
    }
}

function newCard() {
    sum += 1
    sumEl.textContent = "Sum: " + sum
}