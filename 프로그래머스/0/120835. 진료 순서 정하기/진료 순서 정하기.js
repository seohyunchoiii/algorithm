function solution(emergency){
    let arr = [...emergency].sort((a,b) => (b-a));
    return emergency.map( v => arr.indexOf(v)+1);
    
}







// function solution(emergency) {
//     var sortt = [...emergency].sort((a,b) => (b-a));
//     return emergency.map( el => sortt.indexOf(el)+1);
// }