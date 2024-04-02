function deckSort(deck) {
    const output = []
    const n = deck.length;
    deck.sort((a, b) => {
        return b - a;
    });
    // console.log("sorted deck", deck)
    while (deck.length > 0) {
        if (output.length > 0) {
            const bottomCard = output.pop();
            output.unshift(bottomCard)
        }
        const removeTop = deck.shift()
        output.unshift(removeTop);
    }
    return output;
}

const deck = [17, 13, 11, 2, 3, 5, 7];
console.log(deckSort(deck))

