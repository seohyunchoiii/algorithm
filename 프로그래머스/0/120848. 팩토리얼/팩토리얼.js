function solution(n) {
    var answer=1;
    var i=0;
    while(answer<=n){
        i++;
        answer *= i;
    }
    return i-1;
}






// function solution(n) {
//     var answer =1;
//     for(var i=1; i<=n; i++){
//         answer *=i;
    
//     if(answer == n) {
//         return i;
//     }
//     if(answer > n){
//         return i-1;
//     }
//     }
        
// }