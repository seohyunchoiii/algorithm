function solution(sides) {
   let answer = 0;
   const lagerSide = Math.max(...sides);
   const smallerSide = Math.min(...sides);
//     sides에 가장 긴 변 있음
   for (let otherSide = lagerSide - smallerSide + 1; otherSide <= lagerSide; otherSide++) {
       answer += 1;
  }
//     새로운 숫자가 가장 긴 변
   for (let otherSide = lagerSide + 1; otherSide < lagerSide + smallerSide; otherSide++) {
       answer += 1;
  }
   return answer;
}
