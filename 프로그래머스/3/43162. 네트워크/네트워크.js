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

function solution(n,computers){
    let answer=0;
    const visited = Array.from({length:n},() => false);
    
    function dfs(i){
        visited[i] = true;
        for(let j=0;j<computers.length;j++){
            if(computers[i][j]===1&& !visited[j]){
                dfs(j)
            }
        }
    }
    for(let j=0;j<computers.length;j++){
        if(!visited[j]){
            dfs(j);
            answer++;
        }
    }
    return answer;
}