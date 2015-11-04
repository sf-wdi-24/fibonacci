/*
 * Get the nth level deep number from a Fibonacci sequence.
 * @param n {Integer} Number of levels deep from Fibonacci sequence.
 * @returns {Integer} Number from the Fibonacci sequence.
 */
function fib(n) {
  var currentNum = 1;
  var prevNum = 1;
  var prevPrevNum = 0;

  for (var i = 1; i <= n; i += 1) {
    if (i > 1) {
      prevPrevNum = prevNum;
      prevNum = currentNum;
      currentNum = prevNum + prevPrevNum;
    }
  }

  return currentNum; 
}


// Go over first 10 elements of the Fibonacci sequence.
for (var i = 0; i < 10; i++) {
  console.log(fib(i));
}

// Should log:
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
