const travelData = {
    beaches: [
        { name: "Bora Bora", imageUrl: "https://images.unsplash.com/photo-1502003148287-a82ef80a6abc?w=500" },
        { name: "The Maldives", imageUrl: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=500" }
    ],
    temples: [
        { name: "Angkor Wat", imageUrl: "https://images.unsplash.com/photo-1600994991823-353272d90eb1?w=500" },
        { name: "Senso-ji Temple", imageUrl: "https://images.unsplash.com/photo-1542931287-023b922fa89b?w=500" }
    ],
    countries: [
        { name: "Japan", imageUrl: "https://images.unsplash.com/photo-1528164344705-47542687000d?w=500" },
        { name: "Brazil", imageUrl: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=500" }
    ]
};

function searchDestination() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = ""; 

    let results = [];

    if (input.includes('beach')) {
        results = travelData.beaches;
    } else if (input.includes('temple')) {
        results = travelData.temples;
    } else if (input.includes('country') || input.includes('countries')) {
        results = travelData.countries;
    } else {
        resultsContainer.innerHTML = "<p>No results found. Try searching for 'beaches', 'temples', or 'countries'.</p>";
        return;
    }

    results.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${item.imageUrl}" alt="${item.name}">
            <h3>${item.name}</h3>
        `;
        resultsContainer.appendChild(card);
    });
}

function clearSearch() {
    document.getElementById('searchInput').value = "";
    document.getElementById('searchResults').innerHTML = "";
}

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you! Your message has been received.');
});
