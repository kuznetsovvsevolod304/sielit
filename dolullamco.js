const now = Date.now();
console.log(now); // Outputs the current timestamp in milliseconds

// Example of serialized cache data
const serializedCache = '[{"id": 1, "value": "Item 1"}, {"id": 2, "value": "Item 2"}]';

// Parse the serialized cache data into an array of objects
let cacheItems = JSON.parse(serializedCache);

// Assuming cacheItems is an array of objects where the most recent items are first
console.log('Cache items:', cacheItems);

// Example of accessing the most recent item (first item in the array)
if (cacheItems.length > 0) {
    const mostRecentItem = cacheItems[0];
    console.log('Most recent item:', mostRecentItem);
} else {
    console.log('Cache is empty');
}
