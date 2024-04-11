function solution(s) {
    var answer = 0;
    var splitt = s.split(' ');
    for(var i=0; i<splitt.length; i++){
        if(splitt[i] !== 'Z') {
            answer += Number(splitt[i]);
        }
        else {
            answer -= Number(splitt[i-1]);
        }
    }
    return answer;
}