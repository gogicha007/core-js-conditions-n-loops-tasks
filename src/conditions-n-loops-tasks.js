/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  const arr = [a, b, c];
  let max = a;
  for (let i = 0; i < 3; i += 1) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  const q = {};
  const k = {};
  q.x = queen.x - 1;
  q.y = queen.y - 1;
  k.x = king.x - 1;
  k.y = king.y - 1;
  if (q.x === k.x || q.y === k.y || q.x + q.y === k.x + k.y) return true;
  const topLeft = (y, x) => {
    const result = { x: 0, y: 0, l: 8 };
    if (x > y) {
      result.x = x - y;
      result.l = 8 - x;
    }
    if (y > x) {
      result.y = y - x;
      result.l = 8 - y;
    }
    return result;
  };
  const startPoint = topLeft(q.y, q.x);
  for (let i = 0; i < startPoint.l; i += 1) {
    if (`${startPoint.y + i}${startPoint.x + i}` === `${king.y}${king.x}`)
      return true;
  }
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a === 0 || b === 0 || c === 0) return false;
  if (a === b) return a + b >= c;
  if (b === c) return b + c >= a;
  if (c === a) return c + a >= b;
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const numRomans = {
    0: '0',
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
  };
  const multiStr = (n, roman) => {
    let str = '';
    for (let i = 1; i <= n; i += 1) {
      str += roman;
    }
    return str;
  };
  const inRomans = (n) => {
    for (let i = 0; i < 5; i += 1) {
      if ([1, 4, 5, 9, 10][i] === n) return true;
    }
    return false;
  };
  if (inRomans(num)) return numRomans[num];
  if (num < 4) return multiStr(num, numRomans[1]);
  if (num < 9) return `${numRomans[5]}${multiStr(num - 5, numRomans[1])}`;
  if (num < 40)
    return `${multiStr(Math.floor(num / 10), 'X')}${convertToRomanNumerals(
      num % 10
    )}`;
  return 'must be between 1 & 39';
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  const getWord = (n) => {
    let res;
    switch (n) {
      case '0':
        res = 'zero';
        break;
      case '1':
        res = 'one';
        break;
      case '2':
        res = 'two';
        break;
      case '3':
        res = 'three';
        break;
      case '4':
        res = 'four';
        break;
      case '5':
        res = 'five';
        break;
      case '6':
        res = 'six';
        break;
      case '7':
        res = 'seven';
        break;
      case '8':
        res = 'eight';
        break;
      case '9':
        res = 'nine';
        break;
      case '-':
        res = 'minus';
        break;
      case '.':
      case ',':
        res = 'point';
        break;
      default:
        res = '';
    }
    return res;
  };
  const strLength = (str) => {
    let len = 0;
    while (str[len] !== undefined) {
      len += 1;
    }
    return len;
  };
  const len = strLength(numberStr);
  let result = '';
  for (let i = 0; i < len; i += 1) {
    result += `${getWord(numberStr[i])}${i === len - 1 ? '' : ' '}`;
  }
  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  const strLength = (s) => {
    let length = 0;
    while (s[length] !== undefined) {
      length += 1;
    }
    return length;
  };
  const len = strLength(str);
  for (let i = 0; i <= len / 2; i += 1) {
    if (str[i] !== str[len - 1 - i]) return false;
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  const strLength = (s) => {
    let l = 0;
    while (s[l] !== undefined) {
      l += 1;
    }
    return l;
  };
  const len = strLength(str);
  for (let i = 0; i < len; i += 1) {
    if (str[i] === letter) return i;
  }
  return '-1';
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const n = `${num}`;
  const d = `${digit}`;
  const strLength = (s) => {
    let l = 0;
    while (s[l] !== undefined) {
      l += 1;
    }
    return l;
  };
  const len = strLength(n);
  for (let i = 0; i < len; i += 1) {
    if (n[i] === d) return true;
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  const strLength = (s) => {
    let l = 0;
    while (s[l] !== undefined) {
      l += 1;
    }
    return l;
  };
  const len = strLength(arr);
  for (let i = 1; i < len; i += 1) {
    let left = 0;
    for (let j = i - 1; j >= 0; j -= 1) {
      left += arr[j];
    }

    let right = 0;
    for (let k = i + 1; k < len; k += 1) {
      right += arr[k];
    }

    if (left === right) {
      return i;
    }
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const arr = [];
  for (let i = 0; i < size; i += 1) {
    arr[i] = [];
  }
  let row = 0;
  let col = 0;
  let rowEnd = size - 1;
  let colEnd = size - 1;
  let value = 1;
  while (col <= colEnd && row <= rowEnd) {
    for (let i = col; i <= colEnd; i += 1) {
      arr[row][i] = value;
      value += 1;
    }
    row += 1;
    for (let i = row; i <= rowEnd; i += 1) {
      arr[i][colEnd] = value;
      value += 1;
    }
    colEnd -= 1;
    for (let i = colEnd; i >= col; i -= 1) {
      arr[rowEnd][i] = value;
      value += 1;
    }
    rowEnd -= 1;
    for (let i = rowEnd; i >= row; i -= 1) {
      arr[i][col] = value;
      value += 1;
    }
    col += 1;
  }
  return arr;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const replicaMatrix = matrix;
  const arrLength = (s) => {
    let l = 0;
    while (s[l] !== undefined) {
      l += 1;
    }
    return l;
  };
  const arrLen = arrLength(matrix);
  const arr = [];
  let cols = [];
  let subRowLen = 0;
  for (let i = 0; i < arrLen; i += 1) {
    subRowLen = arrLength(matrix[i]);
    let idx = 0;
    cols = [];
    for (let j = subRowLen - 1; j >= 0; j -= 1) {
      cols[idx] = matrix[j][i];
      idx += 1;
    }
    arr[i] = cols;
  }
  for (let i = 0; i < arrLen; i += 1) {
    replicaMatrix[i] = arr[i];
  }
  return arr;
}
/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(array) {
  const replicaArr = array;
  const workArr = array;
  const partition = (arr, low, high) => {
    const tempArr = arr;
    const pivot = tempArr[high];
    let i = low - 1;
    for (let j = low; j <= high - 1; j += 1) {
      if (tempArr[j] < pivot) {
        i += 1;
        [tempArr[i], tempArr[j]] = [tempArr[j], tempArr[i]];
      }
    }
    [tempArr[i + 1], tempArr[high]] = [tempArr[high], tempArr[i + 1]];
    return i + 1;
  };
  function quickSort(arr, low, high) {
    if (low >= high) return;
    const pIdx = partition(arr, low, high);
    quickSort(arr, low, pIdx - 1);
    quickSort(arr, pIdx + 1, high);
  }

  quickSort(workArr, 0, workArr.length - 1);
  for (let i = 0; i < workArr.length; i += 1) {
    replicaArr[i] = workArr[i];
  }
  return workArr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  const firstChar = str[0];
  let evens = '';
  let odds = '';
  let string = str;
  let restIterations = iterations;
  while (restIterations > 0) {
    evens = firstChar;
    odds = '';
    for (let i = 1; i < str.length; i += 1) {
      if (i % 2 === 0) {
        evens += string[i];
      } else {
        odds += string[i];
      }
    }
    string = `${evens}${odds}`;
    restIterations -= 1;
    if (string === str) {
      restIterations = iterations % (iterations - restIterations);
    }
  }
  return string;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const numStr = `${number}`;
  const numArr = [];
  for (let i = 0; i < numStr.length; i += 1) {
    numArr[i] = +numStr[i];
  }
  const len = numArr.length;

  const theNumber = (arr) => {
    for (let i = len - 1; i >= 0; i -= 1) {
      if (arr[i] > arr[i - 1]) return [arr[i - 1], i];
    }
    return [];
  };

  const didx = theNumber(numArr);
  if (didx.length === 0) {
    return number;
  }
  const d = didx[0];
  const idx = didx[1];

  let minLeftIdx = idx;
  for (let j = idx + 1; j < len; j += 1) {
    if (numArr[j] > d && numArr[j] < numArr[idx]) minLeftIdx = j;
  }

  numArr[idx - 1] = numArr[minLeftIdx];
  numArr[minLeftIdx] = d;

  const slicer = (arr, start, end) => {
    const result = [];
    const l = !end ? arr.length : end;
    for (let i = start; i < l; i += 1) {
      result.push(arr[i]);
    }
    return result;
  };

  const frontPart = slicer(numArr, 0, idx);
  const endPart = slicer(numArr, idx).sort();

  return +[...frontPart, ...endPart].join('');
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
