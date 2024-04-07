function solution(i, j, k) {
    var answer = 0;
    for( var v=i; v<=j; v++){
        answer += [...String(v)].filter( v => Number(v) === k).length;
         
    }
    return answer;
}