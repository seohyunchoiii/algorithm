function solution(my_string){
    return my_string.split(/\D+/).filter(Boolean).reduce((acc,cur) =>(+acc)+(+cur),0);
                                                         }




// function solution(my_string) {
//     return my_string.split(/\D+/).filter(Boolean).reduce((acc,cur) => (+acc) +(+cur),0);
// }