function solution(n){
    var answer = [];
    for(var i=2; i<=n; i++){
        while(n%i === 0) {
            answer.push(i);
            n /= i;
        }
    }
    return [...new Set(answer)];
}








// function solution(n) {
//     var answer = [];
//     for(i=2; i<=n; i++){
//         while(n%i === 0) {
//               answer.push(i);
//               n /= i; 
//             }
//             }
//            return [...new Set(answer)];
//         }
