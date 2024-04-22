function solution(sides) {
   let answer = 0;
   const largerSide = Math.max(...sides);
   const smallerSide = Math.min(...sides);
//     sides에 가장 긴 변 있음
   for (let otherSide = largerSide - smallerSide + 1; otherSide <= largerSide; otherSide++) {
       answer += 1;
  }
//     새로운 숫자가 가장 긴 변
   for (let otherSide = largerSide + 1; otherSide < largerSide + smallerSide; otherSide++) {
       answer += 1;
  }
   return answer;
}
