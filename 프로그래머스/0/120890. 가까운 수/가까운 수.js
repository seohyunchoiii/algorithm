function solution(array, n) {
    var number = array.sort().map(v => Math.abs(n-v));
    var index = number.indexOf(Math.min(...number));
    return array[index];
}