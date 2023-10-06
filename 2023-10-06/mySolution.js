function solution(a, b) {
  let answer = 0;

  for (i = 0; i < a.length; i++) {
    a[i] * b[i];
    answer += a[i] * b[i];
  }
  return answer;
}

// 테스트 1
// 입력값 〉	[1, 2, 3, 4], [-3, -1, 0, 2]
// 기댓값 〉	3
// 실행 결과 〉	테스트를 통과하였습니다.
// 테스트 2
// 입력값 〉	[-1, 0, 1], [1, 0, -1]
// 기댓값 〉	-2
// 실행 결과 〉	테스트를 통과하였습니다.
