// function solution(sizes) {
//     var answer = 0;
//     var width = [];
//     var height = [];
//     /*max of max, max of min 찾기 */
//     for(let i=0; i<sizes.length;i++){
//         const max = Math.max(sizes[i][0],sizes[i][1]);
//         const min = Math.min(sizes[i][0],sizes[i][1]);
//         width.push(max);
//         height.push(min);
//     }
//         return Math.max(...width) * Math.max(...height);
// }

function solution(sizes){
    let answer = 0;
    let width = [];
    let height = [];
    
    for(let i=0; i<sizes.length;i++){
        let max = Math.max(sizes[i][0],sizes[i][1]);
        let min = Math.min(sizes[i][0],sizes[i][1]);
        width.push(max);
        height.push(min);
    }
    return Math.max(...width) * Math.max(...height);
}