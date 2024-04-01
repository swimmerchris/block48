function heightChecker(heights) {
    const cloneHeights = [...heights]
    count = 0;
    let swapCount = 1;

    while (swapCount > 0) {
        swapCount = 0;
        for (let i = 0; i < heights.length; i++) {
            if (heights[i] > heights[i + 1]) {
                const temp = heights[i + 1];
                heights[i + 1] = heights[i];
                heights[i] = temp;
                swapCount++;
            }
        }
    }

    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== cloneHeights[i]) {
            count++
        }
    }
    return count;
}

heights = [1, 1, 4, 2, 1, 3];
console.log(heightChecker(heights))