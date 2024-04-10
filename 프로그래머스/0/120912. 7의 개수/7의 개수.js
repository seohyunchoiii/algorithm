function solution(array) {
    var answer = 0;
    var arr = array.join('').split('');
    for(i=0; i<arr.length; i++){
        if(arr[i].includes('7')){
            answer += 1;
        }
    }
    return answer;
    }









// function solution(array) {
//     var answer = 0;
//     var arr = array.join('').split('');
//     for(i=0; i<arr.length; i++){
//         if(arr[i].includes('7')){
//             answer += 1;
//         }
//     }
//     return answer;
//     }
