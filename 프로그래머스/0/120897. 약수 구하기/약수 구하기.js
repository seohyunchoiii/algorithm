function solution(n){
    var answer = [];
    for(var i=1; i <= n; i++){
        if(n%i === 0) {
            answer.push(n/i);
        }
    }
    answer.sort((a,b) => a-b);
    return answer;
}