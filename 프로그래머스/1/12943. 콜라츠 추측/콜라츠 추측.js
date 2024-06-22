// function solution(num) {
//     var answer = 0;
    
//     while(num!=1 && answer !== 500){
//         num%2==0 ? num=num/2 : num=num*3 +1;
//         answer++;
//     }
    
//     return num===1 ? answer : -1;
// }

function solution(n){
    let answer = 0;
    
    while(n!=1 && answer !==500){
        n%2 == 0 ? n = n/2 : n = n*3+1
        answer ++;
    }
    return n === 1 ? answer : -1;
}