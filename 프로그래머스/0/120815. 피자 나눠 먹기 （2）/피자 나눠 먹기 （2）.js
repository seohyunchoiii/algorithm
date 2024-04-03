function solution(n) {
    let slice = 1;
    while( 6 * slice % n !==0) {
        slice ++;
    }
    return slice;
}