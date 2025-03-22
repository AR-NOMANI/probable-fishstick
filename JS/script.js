const beachNames = [
    "Railay Beach",
    "Pink Beach",
    "Waikiki Beach",
    "Miami Beach",
    "Bondi Beach",
    "Camps Bay Beach",
    "Copacabana Beach, Brazil",
    "Clearwater Beach, Florida, USA",
    "Bondi Beach, Australia"
]; // List of beach names

// Geolocation Feature with Map Integration
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError, { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 });
    } else {
        document.getElementById("location-output").innerText = "Geolocation is not supported by this browser.";
    }
}

function getDirections(beachName) {
    // Logic to provide directions based on the selected beach
    alert(`Getting directions to ${beachName}`);
}

function filterBeaches() {
    const input = document.getElementById("beachSearch").value.toLowerCase();
    const suggestions = document.getElementById("suggestions");
    suggestions.innerHTML = ""; // Clear previous suggestions

    if (input) {
        const filteredBeaches = beachNames.filter(beach => beach.toLowerCase().startsWith(input));
        filteredBeaches.forEach(beach => {
            const suggestionItem = document.createElement("div");
            suggestionItem.textContent = beach;
            suggestionItem.classList.add("suggestion-item");
            suggestionItem.onclick = () => {
                document.getElementById("beachSearch").value = beach; // Set input to selected beach
                suggestions.innerHTML = ""; // Clear suggestions
            };
            suggestions.appendChild(suggestionItem);
        });
    }
}

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
    
    
}

function showError(error) {
    let message = "Unable to retrieve location.";
    switch(error.code) {
        case error.PERMISSION_DENIED:
            message = "User denied the request for Geolocation. Please allow location access.";
            break;
        case error.POSITION_UNAVAILABLE:
            message = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            message = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            message = "An unknown error occurred.";
            break;
    }
    document.getElementById("location-output").innerText = message;
    // Additional feedback for the user
    alert(message);
}



// Download PDF/DOC Feature
function downloadFile(format) {
    const link = document.createElement("a");
    if (format === "pdf") {
        link.href = "beaches-info.pdf";
        link.download = "BeachesInfo.pdf";
    } else {
        link.href = "beaches-info.doc";
        link.download = "BeachesInfo.doc";
    }
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
