function solution(s){
    var answer = [];
    for(let a of s) {
        if( s.indexOf(a) === s.lastIndexOf(a)) {
            answer.push(a);
        }
    }
    return answer.sort().join('');
}









// function solution(s) {
//     var answer= [];
//     var arr = s.split("");
    
//     arr.forEach( v => {
//         if(arr.indexOf(v) === arr.lastIndexOf(v)) {
//             answer.push(v)
//         }
//     })
//     return answer.sort().join("");
// }