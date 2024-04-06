function solution(order){
    return  [...order.toString().matchAll(/3|6|9/g)].length;
    

}


// function solution(order) {
//    return String(order).split("").filter(v => v == 3|| v==6 || v==9).length;
//     }
    