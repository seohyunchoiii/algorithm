function solution(rsp) {
    return [...rsp].map( (v) => v==5 ? 2 : (v==2 ? 0 : 5)).join('');
}