function countzeCar(){
    let carNumber = 7;
    const maxCars = 15;
    while (carNumber < maxCars) {
        window.alert("There are " + carNumber + " cars in the parking lot.");
        carNumber += 1;
    }
}