// Define constants
const PI = 3.1415;
const plantSpace = 0.8; // Minimum space required for each plant in square meters
const initialPlants = 100; // Starting number of plants
const originalRadius = 5; // Radius of the original garden in meters

// Function to calculate the area of a circle given its radius
function calculateArea(radius) {
    return PI * radius * radius;
}

// Function to check space requirements for the plants
function checkGardenSpace(initialPlants) {
    // Calculate the area of the original garden
    const availableArea = calculateArea(originalRadius);
    
    // Calculate the total area required for all plants
    const totalAreaRequired = initialPlants * plantSpace;