function solution(arr){
    return arr.filter((v,i) => v != arr[i+1]);
}






// function solution(arr)
// {
//     var answer = [];
    
//     for(i=0; i<arr.length;i++){
//         if(arr[i]!==arr[i+1]){
//             answer.push(arr[i]);
//         }
//     }

    
    
//     return answer;
// }