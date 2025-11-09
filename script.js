function mincost(arr)
{ 
//write your code here   let cost = 0;

    // Repeat until only one rope remains
    while (arr.length > 1) {
        // Sort the array to get two smallest ropes
        arr.sort((a, b) => a - b);

        // Take the two smallest
        let first = arr.shift();
        let second = arr.shift();

        // Combine them
        let sum = first + second;

        // Add the cost
        cost += sum;

        // Push the combined rope back to array
        arr.push(sum);
    }

    return cost;
// return the min cost
  
}

module.exports=mincost;
