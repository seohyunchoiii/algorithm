// function solution(tickets){
//     let routes = [];
//     dfs(tickets, "ICN", ["ICN"]);
    
//     function dfs(allTickets, currentLocation, route) {
//         if(allTickets.length===0){
//             routes.push(route);
//         }
        
//         else{
//             allTickets.forEach(([departure, destination],index) => {
//                 if(currentLocation ===departure){
//                     const leftTickets = allTickets.slice();
//                     leftTickets.splice(index,1);
                    
//                     dfs(leftTickets, destination, route.concat(destination));
//                 }
//             });
//         }
//     }
    
//     return routes.sort()[0];
// }

function solution(tickets){
    let q=[];
    dfs(tickets,"ICN",["ICN"]);
    
    function dfs(alltickets,current,route){
        if(alltickets.length===0){
            q.push(route);
        }
        else{
            alltickets.forEach(([departure,destination],index) => {
                if(current===departure){
                    let newtickets = alltickets.slice();
                    newtickets.splice(index,1);
                    
                    dfs(newtickets,destination,route.concat(destination));
                }
            });
        }
    
        
}
    return q.sort()[0];
}