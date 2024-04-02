function solution(n){
    var answer = [];
    for(i=1; i<=n; i++){
        if(n%i === 0) {
            answer.push(n/i);
        }
    }
    return answer.sort((a,b) => a-b);
}









/*function solution(n){
    var answer = [];
    for(var i=1; i <= n; i++){
        if(n%i === 0) {
            answer.push(n/i);
        }
    }
    
    return answer;
}*/