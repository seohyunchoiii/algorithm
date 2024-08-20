// function solution(number) {
//    let res = [];

//     for(let i=0;i<number.length;i++){
//         for(let j=i+1; j<number.length;j++){
//             for(let k=j+1; k<number.length;k++){
//                 res.push(number[i]+number[j]+number[k]);
//             }
//         }
//     }
//     return res.filter((re) => re===0).length;
// }

function solution(number){
    let answer = [];
    for(let i=0; i<number.length;i++){
        for(let j=i+1; j<number.length;j++){
            for(let k=j+1; k<number.length;k++){
                answer.push(number[i]+number[j]+number[k]);
            }
        }
    }
    return answer.filter((el) => el===0).length;
}