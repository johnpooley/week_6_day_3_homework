const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  let starters = this.journeys
  const result = starters.map((location)=>{
    return location.startLocation
  });
  return result;
};

Traveller.prototype.getJourneyEndLocations = function () {
  let enders = this.journeys
  const result = enders.map((location)=>{
    return location.endLocation
  });
  return result;
};

Traveller.prototype.getJourneysByTransport = function (modeOfTransport) {
  const byTransport = this.journeys.filter((vehicle)=>{
    return(vehicle.transport == modeOfTransport)
  });
  return byTransport;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const longJourneys = this.journeys.filter((length)=>{
    return(length.distance > minDistance)
  });
  return longJourneys;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  let totalDistance = 0;
  this.journeys.forEach((length)=>{
    totalDistance += length.distance;
  })
  return totalDistance

};

Traveller.prototype.getUniqueModesOfTransport = function () {
  let uniqueMethods = [];
  // let alreadyTest = uniqueMethods.some(this.journeys.transport)

  this.journeys.forEach((mode)=>{
    if (uniqueMethods.includes(mode.transport) == false){
      uniqueMethods.push(mode.transport);
    };
  });
  return uniqueMethods;
};


module.exports = Traveller;
