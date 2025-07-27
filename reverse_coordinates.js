const fs = require('fs');

// Read the original JSON file
console.log('Reading dronedata.json...');
const data = JSON.parse(fs.readFileSync('./src/dronedata.json', 'utf8'));

// Function to reverse coordinates recursively
function reverseCoordinates(coordinates) {
  if (Array.isArray(coordinates)) {
    // If it's an array of numbers (coordinate pair), reverse it
    if (coordinates.length === 2 && typeof coordinates[0] === 'number' && typeof coordinates[1] === 'number') {
      return [coordinates[1], coordinates[0]]; // Swap longitude,latitude to latitude,longitude
    }
    // Otherwise, recursively process each element
    return coordinates.map(reverseCoordinates);
  }
  return coordinates;
}

// Process each feature collection
console.log('Reversing coordinates...');
for (const key in data) {
  if (data[key].features) {
    data[key].features.forEach(feature => {
      if (feature.geometry && feature.geometry.coordinates) {
        feature.geometry.coordinates = reverseCoordinates(feature.geometry.coordinates);
      }
    });
  }
}

// Write the modified data back to file
console.log('Writing modified data to dronedata.json...');
fs.writeFileSync('./src/dronedata.json', JSON.stringify(data, null, 4));

console.log('Coordinate reversal complete!');
