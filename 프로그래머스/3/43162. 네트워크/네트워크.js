// function solution(n,computers){
//     let answer=0;
//     const visited = Array.from({length:n},() => false);
    
//     function dfs(i){
//         visited[i] = true;
//         for(let j=0;j<computers.length;j++){
//             if(computers[i][j]===1&& !visited[j]){
//                 dfs(j)
//             }
//         }
//     }
//     for(let j=0;j<computers.length;j++){
//         if(!visited[j]){
//             dfs(j);
//             answer++;
//         }
//     }
//     return answer;
// }

function solution(n,computers){
    let answer=0;
    let visited = Array.from({length:n},() => false);
    
    function dfs(i){
        visited[i]=true;
        for(let j=0;j<n;j++){
            if(!visited[j]&&computers[i][j]===1){
                dfs(j);
            }
        }
    }
    
    for(let j=0;j<n;j++){
        if(!visited[j]){
            dfs(j);
            answer++;
        }
    }
    return answer;
}