function michaelPays(costs) {
  var kata = costs/3

  if(costs < 5){
    return parseFloat(costs.toFixed(2))
  }
  else if(kata > 10){
    return parseFloat((costs-10).toFixed(2))
  }
    else{
    return parseFloat((costs * 2/3).toFixed(2))
  }
}
