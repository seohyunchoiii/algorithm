function solution(hp){
    return Math.floor(hp/5) + Math.floor(hp%5/3) + Math.floor((hp%5)%3);
}









/*function solution(hp) {
    var answer = 0;
    var i = Math.floor(hp/5);
    var j = Math.floor(hp%5/3);
    var k = Math.floor(hp%5%3/1);
    return answer = i+j+k;
    }*/
