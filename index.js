/**
 * What is console.time? The code below will start a timer
 * and end it in a seTimeout callback after 1s.
 */

console.time("foo");

setTimeout(() => {
  console.timeLog("foo", "Inside setTimeout");
  console.timeEnd("foo");
}, 1_000);

/**
 * The console.time property of the console interface
 * is writable. The code below will log its property
 * descriptor to the terminal.
 */

const propertyDescriptor = Object.getOwnPropertyDescriptor(console, "time");
console.log(propertyDescriptor);

/**
 * Modifying the console interface by re-assigning
 * console.time to a non-function value. The commented code below
 * will throw the 'console.time is not a function' error.
 * Uncomment to try it out.
 */

/**
  console.time = undefined;
  console.time("foo"); 
*/

/**
 * Modifying the console interface by deleting the console.time method.
 * The commented code below will throw the 'console.time is not a function'
 * error. Uncomment to try it out.
 */

/**
  delete console.time;
  console.time("foo");
 */

/**
 * Automatic Semicolon Insertion and Immediately Invoked Function Expression.
 * The commented code below will throw the 'console.time(...) is not a function' 
 * error. Uncomment to try it out.
 */

/**
  console.time('foo')

  (function() {})()
 */

