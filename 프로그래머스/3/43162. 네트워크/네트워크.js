// function solution(n, computers) {
//     let network = 0;
//     const visit = new Array(n).fill(false);
    
//     function DFS(v) {
//       visit[v] = true;
//       for (let w = 0; w < computers.length; w++) {
//         if ((computers[v][w] === 1) && (!visit[w])) {
//           DFS(w);
//         }
//       }
//     }
    
//     for(let w = 0; w < n; w++) {
//       if (!visit[w]) {
//         network += 1;
//         DFS(w);
//       }
//     }
    
//     return network;
// }

function solution(n, computers){
    let answer=0;
    let visit = new Array(n).fill(false);
    
    function DFS(i){
        visit[i]=true;
        for(let j=0; j < computers.length; j++){
            if((computers[i][j]===1)&&(!visit[j])){
                DFS(j);
            }
        }
    }
    
    for(let j=0; j<n;j++){
        if(!visit[j]){
            answer += 1;
            DFS(j);
        }
    }
    return answer;
}