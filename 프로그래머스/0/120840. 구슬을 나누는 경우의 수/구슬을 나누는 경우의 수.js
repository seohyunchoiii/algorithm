function solution(balls,share){
    var n = 1;
    var nm = 1;
    var m = 1;
    
    for(var i=1; i<=balls; i++) {
        n *= i;
    }
    for(var i=1; i<=balls-share; i++) {
        nm *= i;
    }
    for(var i=1; i<=share; i++) {
        m *= i;
    }
    return Math.round(n / (nm * m));
}






// function solution(balls, share) {
//     var n = 1;
//     var nm= 1;
//     var m= 1;
    
//     for(var i=1; i<=balls; i++){
//         n *= i;
//     }
//     for(var i=1; i<=balls-share; i++){
//         nm *= i;
//     }
//     for(var i=1; i<=share; i++){
//         m *= i;
//     }
    
//     return Math.round(n/(nm*m));
// }
    
