function solution(n) {
    var answer = 0;
    for(var i=1; i<=n; i++){
        let counter = 0;
            for(var j=1; j<=i; j++){
                if(i%j==0){
                    counter += 1;
                }
            }
                if(counter>2){
                     answer += 1;
                }
            }
           
    return answer;
}