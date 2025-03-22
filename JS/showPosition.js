function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    document.getElementById("location-output").innerHTML = 
        `<strong>Latitude:</strong> ${latitude}, <strong>Longitude:</strong> ${longitude}`;
    
    // Display Map
    document.getElementById("map").innerHTML = `<iframe 
        width="100%" 
        height="300" 
        style="border:0;"
        src="https://www.google.com/maps?q=${latitude},${longitude}&output=embed">
        </iframe>`;
    
  

    // Determine nearest beach and provide directions with debugging
    console.log(`User Location: Latitude ${latitude}, Longitude ${longitude}`);

    const nearestBeach = getNearestBeach(latitude, longitude);
    if (nearestBeach) {
        document.getElementById("location-output").innerHTML += 
            `<br><strong>Nearest Beach:</strong> ${nearestBeach.name} <a href="${nearestBeach.url}">Get Directions</a>`;
    }
}

function getNearestBeach(latitude, longitude) {
    const toRadians = (degrees) => degrees * (Math.PI / 180);
    const beaches = [
        { name: "Waikiki Beach", lat: 21.2766, lon: -157.8281, url: "north.html" },
        { name: "Miami Beach", lat: 25.7617, lon: -80.1918, url: "south.html" },
{ name: "Bondi Beach", lat: -33.8908, lon: 151.2743, url: "east.html" },

{ name: "Camps Bay Beach", lat: -33.9528, lon: 18.3870, url: "south.html" },
{ name: "Seven Mile Beach", lat: 18.2470, lon: -78.3350, url: "west.html" }


    ];

    let closestBeach = null;
    let closestDistance = Infinity;

    beaches.forEach(beach => {
        const R = 6371; // Radius of the Earth in kilometers
        const dLat = toRadians(beach.lat - latitude);
        const dLon = toRadians(beach.lon - longitude);
        const a = 
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRadians(latitude)) * Math.cos(toRadians(beach.lat)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c; // Distance in kilometers

        console.log(`Checking beach: ${beach.name}, Distance: ${distance}`);
        console.log(`Nearest Beach URL: ${nearestBeach.url}`);


        if (distance < closestDistance) {

            closestDistance = distance;
            closestBeach = beach;
        }
    });

    return closestBeach;
}
