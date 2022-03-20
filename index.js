/* Code your solution in this file!

function pickuplocation()
return number of blocks from headquarters on 42nd street

function distnanceTravelledInFeet() 
take in the beginning and destination blocks, returns feet traveled

Each block in Manhattan is 264 feet long. For example 
distanceTravelledInFeet(34, 38) representing 34th St to 38th St, 
returns 1056 ((38-34)*264). You can assume that we are 
only calculating distance uptown/downtown, not from river to river.*/


function distanceFromHqInBlocks(customerLocation) {
    if (customerLocation < 42) { return 42 - customerLocation} 
   else if (customerLocation > 42) { return customerLocation - 42} 
   else {return 0}
}
distanceFromHqInBlocks(50);
distanceFromHqInBlocks(34);
distanceFromHqInBlocks(43);


function distanceFromHqInFeet(feet) {
  return  distanceFromHqInBlocks(feet) * 264
}

distanceFromHqInFeet(50);
distanceFromHqInFeet(34);
distanceFromHqInFeet(43);


function distanceTravelledInFeet(pointA, pointB){

  if (pointA > pointB) { return (pointA - pointB) * 264} 
  else  return (pointA - pointB) * -264
  }

function calculatesFarePrice(pointA, pointB){
    let distanceTravelled = distanceTravelledInFeet(pointA, pointB)

    if (distanceTravelled <= 400) {return 0}
    else if (distanceTravelled <= 2000) {return (distanceTravelled - 400) * 0.02}
    else if (distanceTravelled <= 2500) { return 25}
    else {return "cannot travel that far"}

  }

  console.log(calculatesFarePrice(34,24))