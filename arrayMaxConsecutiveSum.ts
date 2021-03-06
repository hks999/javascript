/* Given array of integers, find the maximal possible sum of some of its k consecutive elements.
Example
For inputArray = [2,3,5,1,6] and k =2, the output should be arrayMaxConsecutiveSum(inputArray,k) = 8. All possible sum of consecutive elements are:
    * 2 + 3 = 5
    * 3 + 5 = 8
    * 5 + 1= 6
    * 1 + 6 =7
Thus, the answer is 8
Input/Output

3<= inputArray.length <= 105,
1 <= inputArray[i] <= 1000.
    * [input] integer k
An integer (not greater than the length of inputArray).
Guaranteed Constraints: 1<= k <= inputArray.length
    *[output] integer
The maximal possible sum
*/
function arrayMaxConsecutiveSum(inputArray: number[], k:number):number{
    let sum = 0;
    let max = 0;
    for (let num of inputArray) {
        sum += num;
    }

    max = sum;

    for (let i = k; inputArray.length; i++ ) {
        sum -= inputArray[i-k];
        sum += inputArray[i];

    }
    return max;
}

console.log(arrayMaxConsecutiveSum([2,3,5,1,6],2));