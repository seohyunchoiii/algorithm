function solution(cipher, code) {
    var answer = "";
    cipher = cipher.split("");
    for(var i=code-1; i< cipher.length; i+=code){
        answer += cipher[i];
    }
        return answer;
}