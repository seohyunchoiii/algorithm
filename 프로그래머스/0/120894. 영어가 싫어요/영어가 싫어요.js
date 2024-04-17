function solution(numbers){
    var newNumber = ["zero","one","two","three","four","five","six","seven","eight","nine"];
    for(var i=0; i<newNumber.length; i++){
        numbers= numbers.replaceAll(newNumber[i],i);
    }
    return +numbers;
}









// function solution(numbers) {
//     var changeNumbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
//     for(i=0; i<changeNumbers.length;i++){
//         numbers = numbers.replaceAll(changeNumbers[i],i);
//     }
//     return +numbers;
// }