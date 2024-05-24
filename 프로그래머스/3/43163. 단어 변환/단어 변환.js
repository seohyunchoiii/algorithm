// function solution(begin,target,words){
//     let answer=0;
//     let queue = [];
//     let visit = [];
    
//     if(!words.includes(target)){
//         return 0;
//     }
    
//     queue.push([begin,answer]);
    
//     while(queue){
//         let [v, cnt] = queue.shift();
//         if(v===target){
//             return cnt;
//         }
        
//         words.forEach( word => {
            
//             let notEqual =0;
//             if(visit.includes(word)){
//                 return;
//             }
            
//             for(let i=0; i<word.length; i++){
//                 if(word[i] !== v[i]){
//                     notEqual++;
//                 }
//             }
            
//             if(notEqual===1){
//                 queue.push([word, ++cnt]);
//                 visit.push(word);
//             }
                       
//         })
        
                
//     }
    
//     return answer;
// }

function solution(begin,target,words){
    let answer=0;
    let visit=[];
    let q=[];
    
    if(!words.includes(target)) return 0;
    q.push([begin,answer]);
    
    while(q.length>0){
        let [v,cnt] = q.shift();
        if(v===target){
            return cnt;
        }
        
        words.forEach(word => {
            let notEqual = 0;
            if(visit.includes(word)) return;
            for(let i=0; i<target.length;i++){
                if(word[i] !== v[i]){
                    notEqual++;
                }
            }
            if(notEqual===1){
                    q.push([word,++cnt]);
                    visit.push(word);
                }
        });
        
    }
    return answer;
}