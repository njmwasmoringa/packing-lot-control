// Generate empty packing slots. null means there is no car in the packing slot
const packingSlots = new Array(5).fill(null);
const totalPackingSpace = packingSlots.length;
const chargesPerHour = 50;

// get all available space
let availableSpace = function(){
    return packingSlots.reduce((totalAvailableSpace, space)=>{
        if(space == null){
            totalAvailableSpace += 1;
        }
        return totalAvailableSpace;
    }, 0)
};

/**
 * Car registration
 * Time In
 * Time out
 */
function generatePackingTicket( carRegistration, timeIn ){

    // Do not allow packing if there is no available slots
    if(availableSpace() == 0){
        console.log("There is no packing space available");
        return;
    }

    // create a car object
    const car = {
        carRegistration: carRegistration,
        timeIn: timeIn
    }

    // get one available packing slot
    const slot = packingSlots.findIndex( (space) => space == null );
    // pack the car in that empty space
    packingSlots[ slot ] = car;

    console.log(`Your ticket number is ${slot}`);
}

/**
 * slot number (index)
 * timeOut Date (Hours)
 * 
 */
function calculateCost(slot, timeOut){
    // Get existing car using the slot number
    const exitingCar = packingSlots[slot];

    // Get the time difference in milliseconds
    const timeDifference = timeOut.getTime() - exitingCar.timeIn.getTime();
    // calculate the time difference in hours
    const hours = timeDifference / (1000 * 60 * 60);
    // Return the amount to pay
    return Math.round(chargesPerHour * hours);
}

function existPackingSlot(slot){
    /* packingSlots.splice(slot, 1);
    console.table(packingSlots); */
    packingSlots[slot] = null;
}


/// Simulating the entire packing process testing

generatePackingTicket('KAZ 0293', new Date(2022, 11, 07, 16, 30));
generatePackingTicket('KBZ 0293', new Date(2022, 11, 07, 16, 50));
generatePackingTicket('KCG 0293', new Date(2022, 11, 07, 17, 30));
console.table(packingSlots);

console.log("Payment Ksh", calculateCost(1, new Date()));
console.log("Payment Ksh", calculateCost(2, new Date()));

existPackingSlot(1);
console.table(packingSlots);

