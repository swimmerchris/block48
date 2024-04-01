function validation(str) {
    const stack = [];
    const openBracket = ['(', '[', '{']
    const closeBracket = [')', ']', '}']

    for (let i = 0; i < str.length; i++) {
        currentChar = str[i];

        if (openBracket.includes(currentChar)) {
            stack.push(currentChar)
        } else if (closeBracket.includes(currentChar)) {
            const checkOpen = openBracket[closeBracket.indexOf(currentChar)];
            if (stack.length === 0 || stack.pop() !== checkOpen) {
                return false
            }
        }

    };
    return stack.length === 0;
}

const test1 = "()"
console.log(validation(test1))

const test2 = "(])"
console.log(validation(test2))

const test3 = "()[]{}"
console.log(validation(test3))

const test4 = "()]{}"
console.log(validation(test4))
