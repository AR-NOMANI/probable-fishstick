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
