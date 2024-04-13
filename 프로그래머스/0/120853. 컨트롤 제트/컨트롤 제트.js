function solution(s){
    var answer = 0;
    var arr = s.split(' ');
    for( var i =0 ; i<arr.length; i++){
        if(arr[i] !== 'Z') {
            answer += Number(arr[i]);
        }
        else {
            answer -= Number(arr[i-1]);
        }
    }
    return answer;
}







// function solution(s) {
//     var answer = 0;
//     var splitt = s.split(' ');
//     for(var i=0; i<splitt.length; i++){
//         if(splitt[i] !== 'Z') {
//             answer += Number(splitt[i]);
//         }
//         else {
//             answer -= Number(splitt[i-1]);
//         }
//     }
//     return answer;
// }