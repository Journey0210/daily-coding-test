function solution(num) {
  let answer = 0;
  while (num !== 1 && answer <= 500) {
    num % 2 === 0 ? (num = num / 2) : (num = num * 3 + 1);
    answer++;
  }
  return answer >= 500 ? -1 : answer;
}

// 테스트 1
// 입력값 〉	6
// 기댓값 〉	8
// 실행 결과 〉	테스트를 통과하였습니다.
// 테스트 2
// 입력값 〉	16
// 기댓값 〉	4
// 실행 결과 〉	테스트를 통과하였습니다.
// 테스트 3
// 입력값 〉	626331
// 기댓값 〉	-1
// 실행 결과 〉	테스트를 통과하였습니다.
