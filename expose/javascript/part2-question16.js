let statistic = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
}

for (const property in statistic) {
    if (property.charAt(0) == 'r' || statistic[property]%2 != 0) {
        console.log(statistic[property])
    }
}