let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let cards = [firstCard,secondCard]

let message = document.getElementById("message")
let messageEmojiEl = document.getElementById("messageEmoji")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")

function startGame() {
    renderGame()
}

function renderGame () {
    cardsEl.textContent = "Cards: "
        
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " - "
    }
    sumEl.textContent = "Sum: " + sum

    if(sum < 21) {
        message.textContent = "Do you want to draw a new card?"
        messageEmojiEl.textContent = "🙂"
    }else if( sum === 21) {
        message.textContent = "You've got a Blackajack!"
        messageEmojiEl.textContent = "🥳"
    }else {
        message.textContent = "You're out of the game!"
        messageEmojiEl.textContent = "😭"
    }
}

function newCard() {
    let card = 1
    sum += card
    sumEl.textContent = "Sum: " + sum

    cards.push(card)
    console.log(cards)

    renderGame()
}