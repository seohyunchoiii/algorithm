function solution(citations) {
    let answer =0;
    citations.sort((a,b) => (b-a));
    
    for(let i=0; i<citations.length;i++){
        if(i < citations[i]){
            answer += 1;
        }
        
    }
    
    return answer;
}