function riders(stations) {
  let rides = 0
   stations.reduce((a, b) =>
    a + b > 100 ? (rides++, b): a + b, 100)
   return rides
}
