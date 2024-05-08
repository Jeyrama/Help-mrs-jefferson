/*
Mrs. Jefferson is a great teacher. 
One of her strategies that help her reach astonishing results 
in the learning process is to have some fun with her students. 

At school, she wants to make an arrangement of her class to play a certain game with her pupils. 
For that, she needs to create the arrangement with the minimum amount of groups that have consecutive sizes.

Let's see. She has 14 students. 
After trying a bit she could do the needed arrangement: [5, 4, 3, 2]
  one group of 5 students
  another group of 4 students
  then, another one of 3
  and finally, the smallest group of 2 students.

As the game was a success, she was asked to help the other classes and teach the game.
To make things worse, she found out that there are some classes with some 
special number of students that is impossible to get that arrangement.

Note:
  You will receive the number of students of the class. 
  It should output the arrangement as an array with the consecutive sizes of the groups in decreasing order.
  The value of n is unknown and may be high because some classes joined to to have fun with the game.
  the code should output [-1] in the case that no arrangement of the required feature is possible.
*/


// Solution

function shortestArrang(n) {  
  let sum = 0,
      arr = [],
      start = Math.ceil(n / 2),
      foundAnswer = false;
  
  while (!foundAnswer) {
    for (let i = start; i > 0; i--) {
      arr.push(i);
      sum += i;
      
      if (sum > n) {
        arr = [];
        sum = 0;
        i = start;
        start--;
      } else if (sum === n) {
        foundAnswer = true;
        return arr;
      }
    }
    return arr = [-1]
  }
}

// or