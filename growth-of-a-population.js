function nbYear(p0, percent, aug, p) {
   let percentage = percent/100
   let count = 0
   while(p0 < p){
     p0 += (p0 * percentage) + aug
     count ++
   }
  return count
}
