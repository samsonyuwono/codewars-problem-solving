function DNAStrand(dna){
  let str = []
  for(var i = 0; i < dna.length; i++){
    if(dna[i] === "A"){
      str.push("T")
      }
     else if(dna[i] === "T"){
     str.push("A")
     }
     else if(dna[i] === "C"){
     str.push("G")
  }
   else if(dna[i] === "G"){
     str.push("C")}
  }

  return str.join("")
}
