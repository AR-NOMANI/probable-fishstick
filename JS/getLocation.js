function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError, { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 });
    } else {
        document.getElementById("location-output").innerText = "Geolocation is not supported by this browser.";
    }
}
