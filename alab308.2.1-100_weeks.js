// Define constants
const PI = 3.1415;
const plantSpace = 0.8; // minimum space required for each plant in square meters
const initialPlants = 100; // starting number of plants

// Function to calculate the total area required after a certain number of weeks
function calculateSpaceNeeded(initialPlants, weeks) {
    let plantCount = initialPlants;

    // Calculate plant growth over the weeks
    for (let week = 1; week <= weeks; week++) {
        plantCount *= 2; // Plants double in number each week
    }

    // Calculate total area required for all plants
    const totalAreaRequired = plantCount * plantSpace;

     // Calculate the radius of the expanded garden
     const radius = Math.sqrt(totalAreaRequired / PI);

     console.log(`After ${weeks} weeks, there will be ${plantCount} plants.`);
     console.log(`Total area required: ${totalAreaRequired.toFixed(2)} square meters.`);
     console.log(`Radius of the expanded garden: ${radius.toFixed(2)} meters.`);
 }
 
 