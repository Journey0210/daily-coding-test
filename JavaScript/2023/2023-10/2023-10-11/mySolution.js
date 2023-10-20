function solution(s) {
  let answer = "";
  let sArray = s.split(" ");
  let nArray = sArray.map(Number);
  let min = nArray[0];
  let max = nArray[nArray?.length - 1];

  for (let i = 0; i < nArray.length; i++) {
    nArray[i] < min ? (min = nArray[i]) : min;
    nArray[i] > max ? (max = nArray[i]) : max;
  }

  let arr = [];
  arr.push(min, max);
  answer = arr.join(" ");

  return answer;
}
