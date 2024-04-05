function solution(n){
    var pizza = 1;
    while (6 * pizza % n !== 0 ){
        pizza ++;
    }
    return pizza;
}








/*function solution(n) {
    let slice = 1;
    while( 6 * slice % n !==0) {
        slice ++;
    }
    return slice;
}*/