function doublemoney(days){
  var amount = 0.01;
  for (var i = 1; i < days; i ++){
    amount = amount * 2;
  }
  return amount;
}
doublemoney(30);
