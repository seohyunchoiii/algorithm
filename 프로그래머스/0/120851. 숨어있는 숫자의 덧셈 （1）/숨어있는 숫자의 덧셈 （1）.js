function solution(my_string) {
    return my_string.split('').filter(v => v*1>=1).reduce((acc,cur) => (+acc)+(+cur));
}