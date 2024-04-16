function solution(numbers) {
    var changeNumbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    for(i=0; i<changeNumbers.length;i++){
        numbers = numbers.replaceAll(changeNumbers[i],i);
    }
    return +numbers;
}