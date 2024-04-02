function solution(age) {
    var answer = '';
    var alphabet = ['a','b','c','d','e','f','g','h','i','j'];
    var age = String(age);
    for (let a of age) {
        answer += alphabet[a];
    }
    
    return answer;
}