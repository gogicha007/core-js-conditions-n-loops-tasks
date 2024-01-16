function shuffleChar(str, iterations) {
  const firstChar = str[0];
  let evens = '';
  let odds = '';
  let string = str;
  for (let i = 1; i <= iterations; i += 1) {
    evens = firstChar;
    odds = '';
    for (let j = 1; j < str.length; j += 1) {
      if (j % 2 === 0) {
        evens += string[j];
      } else {
        odds += string[j];
      }
    }
    string = `${evens}${odds}`;
  }
  return string;
}

console.log(shuffleChar('qwerty', 3));
