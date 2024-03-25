function solution(my_string) {
    let vowel =["a", "e", "i", "o", "u"];
    return my_string.split("").filter(v => !(vowel.includes(v))).join("");
}