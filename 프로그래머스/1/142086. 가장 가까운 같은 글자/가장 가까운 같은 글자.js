// function solution(s) {
//     var answer = [];
//     var temp = [];
//     for(let i=0; i<s.length; i++){
//         if(!temp.includes(s[i])){
//             answer.push(-1);
//             temp.push(s[i]);
//         }
//         else if(temp.includes(s[i])){
//             answer.push(i - temp.lastIndexOf(s[i]));
//             temp.push(s[i]);
//         }
//     }
//     return answer;
// }

function solution(s){
    var answer = [];
    var temp = [];
    
    for(let i=0; i<s.length;i++){
        if(!temp.includes(s[i])){
            temp.push(s[i]);
            answer.push(-1);
        }
        else if(temp.includes(s[i])){
            answer.push(i-temp.lastIndexOf(s[i]));
            temp.push(s[i]);
        }
    }
    return answer;
}