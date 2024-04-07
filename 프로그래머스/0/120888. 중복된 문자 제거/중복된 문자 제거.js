function solution(my_string){
  return [...my_string].filter((v,index) => [...my_string].indexOf(v) ===index).join("");
    
}

/*function solution(my_string) {
    return [...my_string].filter((v,index) => [...my_string].indexOf(v) === index).join('');
}*/