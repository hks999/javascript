/* call two arms equally strong if the heaviest weights they each are able to lift are equal

Call two people equally strong if their strongest arms are equally strong (the strongest arm can be both the right and the left),
and so are their weakest arms

Given your and your friends arms lifting capabilities find out if you two are equally strong.

Example
    * For yourLeft = 10, yourRight = 15, friendLeft = 15 and friendRight =10, the output should be areEquallyStrong(yourLeft, yourRight,friendLeft, friendRight) = true;
    * For yourLeft = 15, yourRight = 15, friendLeft = 10 and friendRight =10, the output should be areEquallyStrong(yourLeft, yourRight,friendLeft, friendRight) = true;
    * For yourLeft = 10, yourRight = 15, friendLeft = 9 and friendRight =10, the output should be areEquallyStrong(yourLeft, yourRight,friendLeft, friendRight) = true;
Hints
    * None
Input/Output
    *[time limit] 4000ms (js)
    *[input] integer yourLeft

A non-negative integer representing the heaviest weight yo can lift with your left arm.

Guaranteed constraints:

0<= yourLeft <= 20.

    * [input] integer yourRight

A non-negative integer representing the heaviest weight yo can lift with your right arm.


*/


function areEquallyStrong(yourLeft: number, yourRight: number,friendLeft: number, friendRight: number): boolean {

    const yourWeakest = yourLeft <= yourRight ? yourLeft : yourRight;
    const yourStrongest = yourLeft >= yourRight ? yourLeft : yourRight;
    const friendWeakest = friendLeft <= friendRight ? friendLeft : friendRight;
    const friendStrongest = friendLeft >= friendRight ? friendLeft : friendRight;

    return yourStrongest === friendStrongest && yourWeakest === friendWeakest;
 }

console.log(areEquallyStrong(10,15,15,10));
console.log(areEquallyStrong(15,10,15,10));
console.log(areEquallyStrong(15,10,15,9));
