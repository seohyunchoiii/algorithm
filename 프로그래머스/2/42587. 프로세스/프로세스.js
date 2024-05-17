function solution(priorities,location){
    let answer = 0;
    let q =[];
    
    for(let i=0; i<priorities.length;i++){
        q.push(i);
    }
    
    while(priorities.length>0){
        let max = Math.max(...priorities);
        
        if(priorities[0]<max){
            priorities.push(priorities.shift());
            q.push(q.shift());
        }
        else {
            answer +=1;
            priorities.shift();
             if(q.shift()===location){
            return answer;
        }
        }
       
    }
    
}









// function solution(priorities, location) {
//     var answer = 0;
//     let q = [];
    
    
//     for(let i=0; i<priorities.length;i++){
//         q.push(i);
//     }
    
//     while(q.length>0){
//         let max = Math.max(...priorities);
//         if(priorities[0]<max){
//             priorities.push(priorities.shift());
//             q.push(q.shift());
//         }
//         else {
//             priorities.shift();
//             answer += 1;
//             if(q.shift() ===location){
//                 return answer;
//             }
//         }
//     }
    
    
// }