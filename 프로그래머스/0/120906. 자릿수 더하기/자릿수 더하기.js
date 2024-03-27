function solution(n){
    return String(n).split("").reduce((acc,cur) => (+acc) + (+cur),0);
}








/*function solution(n) {
    return String(n).split('').reduce((acc, cur) => (+acc) + (+cur),0);
}*/