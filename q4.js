function deckSort(deck) {
    const output = []

    deck.sort((a, b) => {
        return a - b;
    });
    console.log("sorted deck", deck)
    while (deck.length > 0) {

        const removeTop = deck.shift()
        output.push(removeTop);
        console.log("deck after removal", deck)
        if (deck.length > 0) {
            deck.push(deck.shift())
            console.log("check after move to back", deck)
        }
    }
    return output;
}

const deck = [17, 13, 11, 2, 3, 5, 7];
console.log(deckSort(deck))