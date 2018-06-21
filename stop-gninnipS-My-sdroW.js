function spinWords(str){
 return str.split(' ').map(s => s.length < 5 ? s :  s.split('').reverse().join('')).join(' ');
}
