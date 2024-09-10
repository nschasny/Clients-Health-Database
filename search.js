document.addEventListener('DOMContentLoaded', function() {
    let searchInput = document.getElementById('searchInput');

    searchInput.addEventListener('keyup', function(event) {
        let searchQuery = event.target.value.toLowerCase();
        console.log(`Search Query: ${searchQuery}`);

        // Select all list items
        let allItems = document.querySelectorAll('.scrollable-list > li');

        allItems.forEach(function(item) {
            // Get the text content of the item
            let textContent = item.querySelector('.text-content').textContent.toLowerCase();
            console.log(`Item Text Content: ${textContent}`);

            // Check if the item contains the search query
            if (textContent.includes(searchQuery) || searchQuery === '') {
                item.style.display = 'list-item'; // Ensure the item is shown
                console.log(`Showing item: ${textContent}`);
            } else {
                item.style.display = 'flex'; // Hide the item
                console.log(`Hiding item: ${textContent}`);
            }
        });
    });
});