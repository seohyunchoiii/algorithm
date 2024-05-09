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
    let routes = [];
    dfs(tickets,"ICN",["ICN"]);
    
    function dfs(allTickets, currentLocation, route){
        if(allTickets.length === 0){
            routes.push(route);
        }
        
        else{
            allTickets.forEach(([departure,destination], index) => {
                if(currentLocation === departure){
                    const leftTickets = allTickets.slice();
                    leftTickets.splice(index,1);
                    
                    dfs(leftTickets,destination,route.concat(destination));
                }
            });
        }
    }
    return routes.sort()[0];
}