function distanceFromHqInBlocks(aValue) {
    const hq = 42;
    if (aValue > 42) 
    return (aValue - hq)
    if (aValue < 42) 
    return  (hq - aValue)
}
function distanceFromHqInFeet(aValue) {
    const hq = 42;
    if (aValue > 42)
    return (aValue - hq) * 264
    if (aValue < 42)
    return (hq - aValue) * 264
}
function distanceTravelledInFeet(start, destination) {
    if (start > destination)
    return (start - destination) * 264
    if (destination > start)
    return (destination - start) * 264
}
function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) < 400)
    return 0
    if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) <2000)
    return (distanceTravelledInFeet(start, destination) - 400) * .02
    if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500)
    return 25
    if (distanceTravelledInFeet(start, destination) > 2500)
    return `cannot travel that far`
}
