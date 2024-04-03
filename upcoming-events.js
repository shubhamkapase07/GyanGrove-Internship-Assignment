// Fetch upcoming events from the API
fetch('https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=1&type=upcoming')
  .then(response => response.json())
  .then(data => {
    // Get the container for upcoming events
    const upcomingEventsContainer = document.getElementById('upcoming-events-container');
    
    // Iterate over each event and create a card
    data.events.forEach((event, index) => {
      // Create card element
      const card = document.createElement('div');
      card.classList.add('event-card');

      // Create image element
      const img = document.createElement('img');
      img.src = `upcoming/${index + 1}.svg`; // Adjust the image source dynamically
      card.appendChild(img);

      // Create event info element
      const eventInfo = document.createElement('div');
      eventInfo.classList.add('event-info');

      // Populate event info with event details
      eventInfo.innerHTML = `
        <p class="date2">${formatDate(event.date)}</p>
        <p class="eventName">${event.eventName}</p>
        <p class="cityName"><i class="fas fa-map-marker-alt"></i> ${event.cityName}</p>
        <p class="weather">${event.weather} &deg;C | <span id="km">${Math.round(event.distanceKm)} Km</span></p>
      `;

      card.appendChild(eventInfo);

      // Append card to container
      upcomingEventsContainer.appendChild(card);
    });
  })
  .catch(error => console.error('Error fetching upcoming events:', error));

// Function to format date
function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
}
