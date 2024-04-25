function solution(N) {
    return String(N).split('').reduce((acc,cur) => acc + parseInt(cur),0);
}




// function solution(n) {
// 	return String(n).split('').reduce((acc, cur) => acc + cur * 1, 0);
// }