function solution(s) {
    var answer= [];
    var arr = s.split("");
    
    arr.forEach( v => {
        if(arr.indexOf(v) === arr.lastIndexOf(v)) {
            answer.push(v)
        }
    })
    return answer.sort().join("");
}