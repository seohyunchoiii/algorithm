function solution(numbers){
    numbers.sort((a,b) => b-a);
    return numbers[0] * numbers[1];
}




/*function solution(numbers) {
    numbers.sort((a,b) => (a-b));
    return numbers[numbers.length-1] * numbers[numbers.length-2];
}*/