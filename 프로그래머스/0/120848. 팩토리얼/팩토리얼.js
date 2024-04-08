function solution(n){
    var j=1;
    var i=0;
    while (j<=n){
        i++;
        j *= i;
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