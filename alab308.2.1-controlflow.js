// Define constants
const PI = 3.1415;
const radius = 5; // radius of the circular area in meters
const area = PI * radius * radius; // area of the circular garden
const plantSpace = 0.8; // minimum space required for each plant in square meters
const initialPlants = 20; // initial number of plants

// Calculate maximum capacity of the garden
const maxCapacity = Math.floor(area / plantSpace); // Maximum number of plants based on area

// Function to predict plant growth and control flow
function predictPlantGrowth(weeks) {
    let plantCount = initialPlants;

    for (let week = 1; week <= weeks; week++) {
        plantCount *= 2; // Plants double in number each week
        
        console.log(`Week ${week}: ${plantCount} plants`);

         // Control flow based on the number of plants
         if (plantCount > maxCapacity * 0.8) {
            console.log("Action: Prune the plants.");
        } else if (plantCount >= maxCapacity * 0.5 && plantCount <= maxCapacity * 0.8) {
            console.log("Action: Monitor the plants.");
        } else {
            console.log("Action: There is room to plant more plants.");
        }
    }
}

// Testing the growth prediction for 1, 2, and 3 weeks
predictPlantGrowth(1);
console.log('-----------------------');
predictPlantGrowth(2);
console.log('-----------------------');
predictPlantGrowth(3);