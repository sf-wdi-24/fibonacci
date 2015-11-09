/*
 * Get the nth level deep number from a Fibonacci sequence.
 * @param n {Integer} Number of levels deep from Fibonacci sequence.
 * @returns {Integer} Number from the Fibonacci sequence.
 */
function fib(n) {
  if (n < 2) {
    return 1;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}

// Go over first 10 elements of the Fibonacci sequence.
for (var i = 0; i < 10; i++) {
  console.log(fib(i));
}

// Should log:
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55