function solution(i,j,k){
    var a = '';
    for(i; i<=j; i++){
        a += i;
    }
   return a.split(k).length-1;
}








// function solution(i, j, k) {
//     var a = '';
//     for( i; i<=j; i++){
//         a += i;
//     }
//     return a.split(k).length-1;
// }