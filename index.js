// Code your solution in this file!

function distanceFromHqInBlocks(pickupLocation) {
    let headQuarter = 42;
    if (headQuarter >= pickupLocation)
        return headQuarter - pickupLocation;
    else
        return pickupLocation - headQuarter;
}

function distanceFromHqInFeet(pickupLocation) {
    let fromHqToFeet = distanceFromHqInBlocks(pickupLocation);
    return fromHqToFeet * 264;


}
function distanceTravelledInFeet(start, destination) {
    if (destination >= start)
        return (destination - start) * 264;
    else
        return -1 * (destination - start) * 264;
}

function calculatesFarePrice(start, destination) {
    let distanceInFeet = distanceTravelledInFeet(start, destination);

    if (distanceInFeet < 400)
        return 0;
    else if (distanceInFeet >= 400 && distanceInFeet < 2000)
        return (distanceInFeet - 400) * 0.02;

    else if (distanceInFeet >= 2000 && distanceInFeet < 2500)
        return 25;
    else
        return "cannot travel that far";
}


distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);
distanceFromHqInBlocks(34);

distanceFromHqInFeet(43);
distanceFromHqInFeet(50);
distanceFromHqInFeet(34);

distanceTravelledInFeet(43, 48);
distanceTravelledInFeet(50, 60);
distanceTravelledInFeet(34, 28);


calculatesFarePrice(43, 44);
calculatesFarePrice(34, 32);
calculatesFarePrice(50, 58);
calculatesFarePrice(34, 24);
