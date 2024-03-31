function solution(my_string){
    var answer ="";
    for(let a of my_string){
        if(a == a.toLowerCase()){
            answer += a.toUpperCase();
        }
        else {
            answer += a.toLowerCase();
        }
    }
    return answer;
}
    






/*function solution(my_string){
    var answer = "";
    for(let a of my_string){
        if (a === a.toLowerCase()){
            answer += a.toUpperCase();
        }
        else {
            answer += a.toLowerCase();
        }
    }
    return answer;
}*/








