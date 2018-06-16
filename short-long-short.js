function solution(a, b){
  if(a.length > b.length){
    return b + a + b
  }
  if(b.length > a.length){
    return a + b + a
  }
  else{
    return ""
  }
}
