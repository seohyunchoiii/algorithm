function solution(a,b){
    answer =0;
    for(i=Math.min(a,b); i<=Math.max(a,b);i++){
        answer += i
    }
    return answer;
}










// function solution(a, b) {
//     var answer = 0;
//     if(a>=b){
//         for(let i=b; i<=a; i++){
//             answer+=i;
//         }
//     }else{
//         for(let j=a; j<=b; j++){
//             answer+=j;
//         }
//     }
//     return answer;
// }
    