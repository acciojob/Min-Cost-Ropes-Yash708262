function mincost(arr)
{ 
//write your code here
// return the min cost
   if (arr.length <= 1) return 0;

    let cost = 0;

    while (arr.length > 1) {
        // Sort in ascending order
        arr.sort((a, b) => a - b);

        // Take two smallest
        let first = arr.shift();
        let second = arr.shift();

        let sum = first + second;
        cost += sum;

        // Add the new rope back
        arr.push(sum);
    }

    return cost;
}

module.exports=mincost;
