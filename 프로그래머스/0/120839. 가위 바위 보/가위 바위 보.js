function solution(rsp){
    let arr = {
        2:0,
        5:2,
        0:5
    }
    return rsp.split('').map(v => arr[v]).join('');
}









/*function solution(rsp) {
    return [...rsp].map( (v) => v==5 ? 2 : (v==2 ? 0 : 5)).join('');
}*/