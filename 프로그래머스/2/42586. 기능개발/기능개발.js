function solution(progresses,speeds){
    let answer=[];
    
    while(speeds.length>0){
        let cnt=0;
        for(let i=0; i<speeds.length; i++){
            if(progresses[i]<100) {
                progresses[i]+= speeds[i];
            }
        }
        while(progresses[0]>=100){
            cnt ++;
            progresses.shift();
            speeds.shift();
        }
        if(cnt>0){
            answer.push(cnt);
        }
    }
    
    return answer;
}








// function solution(progresses, speeds) {
//     var answer = [];
    
//     while(speeds.length>0){
//         let cnt=0;
//         for(let i=0; i<speeds.length;i++){
//             if(progresses[i]<100){
//                 progresses[i] +=speeds[i];   
//                 console.log(progresses)
//             }
//         }
//         while(progresses[0]>=100){
//             progresses.shift();
//             speeds.shift();
//             cnt ++;
             
//         }
//         if(cnt>0){
//             answer.push(cnt);
           
//         }
//     }
    
//     return answer;
// }