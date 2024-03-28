function solution(rsp){
    var arr = {
        2:0,
        0:5,
        5:2};
    var answer = [...rsp].map( v => arr[v]).join("");
    
    return answer;
}




/*function solution(rsp) {
    return [...rsp].map( (v) => v==5 ? 2 : (v==2 ? 0 : 5)).join('');
}*/