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
    document.getElementById("location-output").innerHTML = `${message} <button onclick="getLocation()">Retry</button>`;

}
