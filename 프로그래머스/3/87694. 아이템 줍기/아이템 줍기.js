// function solution(rectangle, characterX, characterY, itemX, itemY) {
//    let answer = 0;
    
//     characterX *= 2;
//     characterY *= 2;
//     itemX *= 2;
//     itemY *= 2;
//     let doubleRec = rectangle.map(el => el.map(v => v*2));
    
//     const moveX = [1,-1,0,0];
//     const moveY = [0,0,1,-1];
    
//     const start = [characterX, characterY, 0];
//     let que = [start];
    
//     let range = Array.from({length:103}, ()=> Array(103).fill(0));
    
//     doubleRec.forEach(([x1,y1,x2,y2]) => {
//         for(let i=x1; i<=x2; i++){
//             for(let j=y1; j<=y2; j++){
//                 if(i===x1 || i===x2||j===y1||j===y2){
//                     if(range[i][j]===0){
//                         range[i][j]=1;
//                     }
//                 }
//                 else {
//                         range[i][j]=2;
//                     }
//             }
//         }
//     });
    
//     range[characterX][characterY]=0;
    
//     while(que.length>0){
//         let [x,y,cnt] = que.shift();
//         if(x===itemX&& y===itemY) {
//             return cnt/2;
//         }
        
//         for(let i=0; i<4; i++){
//             let chX = x + moveX[i];
//             let chY = y + moveY[i];
//             if(range[chX][chY]===1){
//                 que.push([chX, chY, cnt+1]);
//                 range[chX][chY] = 0;
//             }
//         }
//     }
//     return answer;
// }

function solution(rectangle,characterX,characterY,itemX,itemY){
    characterX *=2;
    characterY *=2;
    itemX *=2;
    itemY *=2;
    let doubleRec = rectangle.map(el => el.map(v => v*2));
    
    let q=[[characterX,characterY,0]];
    let dir = [[-1,0],[1,0],[0,-1],[0,1]];
    
    let visited = Array.from({length:103}, () => Array(103).fill(0));
    
    doubleRec.forEach(([x1,y1,x2,y2]) => {
        for(let i = x1; i <= x2; i++){
            for(let j = y1; j <=y2 ;j++){
                if(i===x1||i===x2||j===y1||j===y2){
                    if(visited[i][j]===0){
                        visited[i][j]=1;
                    }
                }
                else{
                        visited[i][j]=2;
                    }
            }
        }
    });
    
    visited[characterX][characterY]=0;
    
    while(q.length>0){
        let [x,y,cnt] = q.shift();
        if(x===itemX&&y===itemY){
            return cnt/2;
        }
        
        for(let[r,c] of dir){
            let newX = x + r;
            let newY = y + c;
            if(visited[newX][newY]===1){
                q.push([newX,newY,cnt+1]);
                visited[newX][newY]=0;
            }
        }
    }
    return 0;
}
