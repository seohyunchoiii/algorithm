function solution(maps){
    var dir = [[-1,0],[1,0],[0,-1],[0,1]];
    
    var bfs = () => {
        var q= [[0,0,1]];
        maps[0][0] = 0;
        
        while(q.length>0){
            var[row,col,distance] = q.shift();
            
            if(row==maps.length-1&&col==maps[0].length-1){
                return distance;
            }
            for(var [r,c] of dir){
                var newRow = row + r;
                var newCol = col + c;
                
                if(newRow>=0&&newRow<maps.length&&newCol>=0&&newCol<maps[0].length&&maps[newRow][newCol]===1){
                    q.push([newRow,newCol,distance+1]);
                    maps[newRow][newCol] = 0;
                }
            }
        }
        return -1;
    };
    return bfs();
}

// function solution(maps){
//     var dir = [[-1,0],[1,0],[0,-1],[0,1]];
    
//     var bfs = () => {
//         var q = [[0,0,1]];
//         maps[0][0]=0;
        
//         while(q.length>0){
//             var[row,col,distance] = q.shift();
//             if(row==maps.length-1&&col==maps[0].length-1){
//                 return distance;
//             }
            
//             for(var [r,c] of dir){
//                 var newRow = row+r;
//                 var newCol = col+c;
                
//                 if(newRow>=0&&newRow<maps.length&&newCol>=0&&newCol<maps[0].length&&maps[newRow][newCol]===1){
//                     q.push([newRow,newCol,distance+1]);
//                     maps[newRow][newCol]=0;
//                 }
//             }
//         }
//         return -1;
//     };
//     return bfs();
// }