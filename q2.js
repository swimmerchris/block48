function ticketPurchase(tickets, position) {
    const n = tickets.length;
    let count = 0;
    let queue = Array.from({ length: n }, (_, i) => i);

    while (true) {
        const currentPerson = queue.shift();
        // console.log("First Position", currentPerson, "count", tickets[currentPerson])
        if (tickets[position] === 0) {
            return count;
        }
        if (tickets[currentPerson] > 0) {
            tickets[currentPerson] = tickets[currentPerson] - 1;
            // console.log("Position", currentPerson, "count", tickets[currentPerson])
            queue.push(currentPerson)
        }
        count++;
    }
}

const test = [2, 3, 2]
console.log(ticketPurchase(test, 2))