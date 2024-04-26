function solution(x) {
    let answer = 0;
    let ha = String(x).split('') ;
    for(let i=0; i<ha.length; i++){
         answer += Number(ha[i]);
    }
    
         return x% answer == 0 ? true : false;
}