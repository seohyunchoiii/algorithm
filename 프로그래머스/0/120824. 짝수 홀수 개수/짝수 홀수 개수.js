function solution(num_list){
    var answer = [0,0];
    for(let a of num_list){
        answer[a%2] += 1;
    }
    return answer;
}









/*function solution(num_list) {
    var answer = [0, 0];
    
    for(let a of num_list){
        answer[a%2] += 1;
    }
return answer;
}*/

/*function solution(num_list) {
   let even = 0
      let odd = 0
   for (var i = 0; i<num_list.length; i++){
       if (num_list[i]%2 === 0) {
           even += 1;
       }
        else { odd +=1}
       }
     return [even, odd];
   }*/

