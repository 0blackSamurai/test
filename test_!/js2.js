async function searchGames() {
    const searchInput = document.getElementById('searchInput').value;
    const searchResultsContainer = document.getElementById('searchResults');
    searchResultsContainer.innerHTML = ''; 
    const apiKey = 'b3e23b6f8abb483c8c0316c4c6662fe8';

try {
    const response = await fetch(`https://api.rawg.io/api/games?key=${apiKey}&search=${searchInput}`);
    const data = await response.json();

    if (data.results.length === 0) {
        searchResultsContainer.innerHTML = '<p>No games found.</p>';
        return;
    }

    data.results.forEach(game => {
        const gameElement = document.createElement('div');
        gameElement.classList.add('game');
        gameElement.innerHTML = `
            <h2>${game.name}</h2>
            <img src="${game.background_image}" alt="${game.name}">
            <p>Released: ${game.released}</p>
            <p>Rating: ${game.rating}</p>
            <button onclick="showGameDetail('${game.id}')">View Details</button>
        `;
        searchResultsContainer.appendChild(gameElement);
    });

} catch (error) {
    console.error('Error fetching and displaying games:', error);
    searchResultsContainer.innerHTML = '<p>Failed to load games. Please try again.</p>';
}
}


async function showGameDetail(gameId) {
    try {
        const response = await fetch(`https://api.rawg.io/api/games/${gameId}`);
        const gameDetail = await response.json();

        console.log(gameDetail);

        alert(`Name: ${gameDetail.name}\nReleased: ${gameDetail.released}\nRating: ${gameDetail.rating}`);
        
    } catch (error) {
        console.error('Error fetching game detail:', error);
        alert('Failed to load game detail. Please try again.');
    }
}