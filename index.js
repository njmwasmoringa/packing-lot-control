const totalPackingSpace = 120;
const packingSlots = [];
const chargesPerHour = 50;

let availableSpace = Math.abs(packingSlots.length - totalPackingSpace)

/**
 * Car registration
 * Time In
 * Time out
 */
function generatePackingTicket( carRegistration, timeIn ){

    if(availableSpace == 0){
        console.log("There is no packing available");
        return;
    }

    // packing action
    const car = {
        carRegistration: carRegistration,
        timeIn: timeIn
    }

    //Pack the car
    packingSlots.push(car);
    // calculate available slots
    availableSpace = Math.abs(packingSlots.length - totalPackingSpace)
}

/**
 * slot number (index)
 * timeOut number (Hours)
 * 
 */
function calculateCost(slot, timeOut){
    const exitingCar = packingSlots[slot];
    // console.log(exitingCar.timeIn - timeOut)
    const hours = timeOut;
    return chargesPerHour * hours;
}

function existPackingSlot(slot){
    packingSlots.splice(slot, 1);
    console.table(packingSlots);
}


console.log(availableSpace);
generatePackingTicket('KAZ 0293', new Date(2022, 11, 08, 16, 30));
generatePackingTicket('KBZ 0293', new Date(2022, 11, 08, 16, 50));
generatePackingTicket('KCG 0293', new Date(2022, 11, 08, 17, 30));
console.table(packingSlots);

console.log("Payment", calculateCost(1, 1));
console.log("Payment", calculateCost(2, 3));

existPackingSlot(1);

