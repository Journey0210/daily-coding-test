function solution(s) {
  let answer = true;
  let result = 1;

  if (s.length === 4 || s.length === 6) {
    s.split("")
      .map(Number)
      .map((ele) => (Object.is(NaN, ele) ? (result *= 0) : (result *= 1)));
    result === 1 ? (answer = true) : (answer = false);
  } else {
    answer = false;
  }

  return answer;
}
