document.getElementById("formId").addEventListener("submit", function (event) {

    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the search input value
    const searchInputValue = document.getElementById("searchInput").value;

    if (searchInputValue !== "") {
        // Build the search URL
        const searchURL = `/search?company=${encodeURIComponent(searchInputValue)}`;

        // Navigate to the search URL
        window.location.href = searchURL;
    } else {
        window.location.reload();
    }

    // Reset the searchInput
    document.getElementById("searchInput").value = "";
});
